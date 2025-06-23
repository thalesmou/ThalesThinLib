/*
 The SAMPLE CODE is NOT a Thales product and NOT under any Support and Maintainance contract 
 or agreement. Thales takes no liability or responsibilty for damages due to errors in this code.
 This SAMPLE CODE is NOT under any license agreement by Thales or other parties or under any open 
 source agreements. Third party libraries maybe used by reference, but are never embedded in the
 source code. A modified version of this library or part of the source code below can be used. 
 However, the library MUST NOT be shared with other parties that have no commercial agreement with
 Thales. This library is provided free of charge.
*/

window.ThalesThinLib = (function () {
    "use strict";

    const VERSION = "3.18.0";
    console.log("Loaded ThalesThinLib v: " + VERSION);

    //*** Image capture    
    const DEFAULT_FACE_QUALITY = 0.8;
    const DEFAULT_DOC_QUALITY = 0.9;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", {
        alpha: false,
        willReadFrequently: true,
    });

    //*** Image size
    const TD1_WIDTH = 3.37;
    const TD1_HEIGHT = 2.13;
    const TD2_WIDTH = 4.13;
    const TD2_HEIGHT = 2.91;
    const TD3_WIDTH = 4.92;
    const TD3_HEIGHT = 3.46;
    const FACE_IMAGE_WIDTH = 1080;
    const FACE_IMAGE_HEIGHT = FACE_IMAGE_WIDTH / 1.5;
    const A4_WIDTH = 11.7;
    const A4_HEIGHT = 8.3;

    //*** SDK Document capture
    const SHARPNESS_THRESHOLD = 50;
    const GLARE_THRESHOLD = 50;
    //bare minimum resolution
    const MIN_RES_THRESHOLD = 300;
    const MIN_RES_THRESHOLD_TD3 = 250;
    //600 ideal, 450 preferred, but for some devices it is hard
    const RES_THRESHOLD = 400;
    const MIN_SHARPNESS_THRESHOLD = 15;
    const MIN_GLARE_THRESHOLD = 5;
    const DEFAULT_MAX_RETRIES = 3;
    const DEFAULT_MAX_CAPTURES = 5;
    const DEFAULT_MAX_FACE_CAPTURES = 5;
    const DEFAULT_MAX_VERIFICATIONS = 1;
    const DEFAULT_DETECT_MAX_TIME_SMART = 3 * 1000;
    const DEFAULT_DETECT_MAX_TIME_SMART_FACE = 2 * 1000;
    const DEFAULT_DETECT_MAX_TIME_BASE = 2 * 1000;
    const DEFAULT_DETECT_MAX_TOO_LONG = Number.MAX_SAFE_INTEGER;
    const DEFAULT_AUTO_CAPTURE_TOGGLE_DELAY = 200;

    //The ID indicates a permanent ID of the device
    const STOREID = "ThalesThinLibId";
    //Temporary ID indicates the ID of a given capture and verification session
    const STORETEMPID = "ThalesThinLibIdTemp";

    //*** Variables
    const savedBodyEl = {};
    let debugLogger = null;
    let disableDebugger = false;
    let captureTimeout = null;
    let closeTimeout = null;
    let fallbackTimeout = null;
    let globalSession = null;
    let deviceModel = null;    
    let isSdkInitialized = false;
    const initMobileAttributes = window.navigator && window.navigator.maxTouchPoints > 0
        ? window.navigator.maxTouchPoints
        : null;
    let latestDeviceCaps = null;
    let latestDeviceSets = null;
    let latestDeviceList = null;

    function getImageFromData(imageData, width, height, quality) {
        const qual = quality || 1.0;
        canvas.width = width;
        canvas.height = height;
        ctx.putImageData(imageData, 0, 0);
        const data = canvas.toDataURL("image/jpeg", qual);
        ctx.clearRect(0, 0, width, height);
        return data;
    }

    function getDataFromImage(image) {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        const data = ctx.getImageData(0, 0, image.width, image.height);
        ctx.clearRect(0, 0, image.width, image.height);
        return data;
    }

    function getDevices() {
        return new Promise(async (resolve) => {
            try {
                //Otherwise camear devices configured in browser
                if (
                    !navigator.mediaDevices ||
                    !navigator.mediaDevices.enumerateDevices
                ) {
                    log("Cannot enumerate cameras");
                    resolve(null);
                    return;
                }
                const devices = await navigator.mediaDevices.enumerateDevices();
                if (devices) {
                    let cameras = [];
                    for (let i = 0; i < devices.length; ++i) {
                        if (devices[i].kind === "videoinput") {
                            cameras.push({
                                name: devices[i].label,
                                deviceId: devices[i].deviceId,
                            });
                        }
                    }
                    if (cameras.length > 0) {
                        resolve(cameras);
                        return;
                    }
                }
                log("No cameras found");
                resolve(null);
            } catch (err) {
                log("Error while enumerating cameras: " + err);
                resolve(null);
            }
        });
    }

    function getLogId(channel, isSameCapture) {
        const MAXRNDID = 100000000;
        //Add Persistent Session ID
        let id = Math.floor(Math.random() * (MAXRNDID - 1) + 1);
        let tempId = Math.floor(Math.random() * (MAXRNDID - 1) + 1);
        if (window.sessionStorage) {
            try {
                const storedId = window.sessionStorage.getItem(STOREID);
                if (!storedId) {
                    window.sessionStorage.setItem(STOREID, id);
                    log("No Log ID found in the session storage");
                } else {
                    id = storedId;
                }
                const storedTempId = window.sessionStorage.getItem(STORETEMPID);
                //If asked again on same capture, return same ID
                if (isSameCapture) {
                    if (!storedTempId) {
                        window.sessionStorage.setItem(STORETEMPID, tempId);
                        log("No Temp Log ID found in the session storage");
                    } else {
                        tempId = storedTempId;
                    }
                }
            } catch (err) {
                log("Cannot use session storage to get Log ID: " + err);
            }
        }
        return {
            id: id,
            sessionId: tempId,
            channel: channel,
        };
    }

    function platform() {
        if (!window.navigator || !window.navigator.userAgent) {
            log("Cannot get window.navigator.userAgent");
            return ThalesThinLib.ENUM.NONE;
        }
        const userAgent = window.navigator.userAgent.toUpperCase();
        if (userAgent.includes("IPAD") || userAgent.includes("IPHONE")) {
            return ThalesThinLib.ENUM.IOS;
        }
        if (userAgent.includes("ANDROID")) {
            return ThalesThinLib.ENUM.ANDROID;
        }
        return ThalesThinLib.ENUM.DESKTOP;
    }

    function newSession(prevSession) {
        const currSession = prevSession ? prevSession : globalSession;
        //Use a global variable, to support use cases where the session is handled internally
        globalSession = { internal: {} };
        if (currSession && currSession.internal) {
            //Do not create an .id so a new one can be created
            globalSession.internal.forceSlowMode = currSession.internal.forceSlowMode;
            globalSession.internal.hm = currSession.internal.hm;
            globalSession.internal.em = currSession.internal.em;
            globalSession.internal.vc = currSession.internal.vc;
            globalSession.internal.verifAttempts = currSession.internal.verifAttempts;
            globalSession.internal.maxVerifAttempts =
                currSession.internal.maxVerifAttempts;
            globalSession.internal.isDetectInit = currSession.internal.isDetectInit;
        }
        //Remove temp ID in order to use new one
        try {
            window.sessionStorage.removeItem(STORETEMPID);
        } catch (err) {
            log("Temp Log ID couldn't be removed");
        }
        //Reset capture attempts
        globalSession.internal.captureAttempts = 0;
        globalSession.internal.captureFaceAttempts = 0;
        log("New session");
        //This is returned, in case the app wants to manage this additionally
        return globalSession;
    }

    function isNotCropped(sdkResult, threshold) {
        if (!sdkResult) {
            return true;
        }
        if (
            !sdkResult.image ||
            (!sdkResult.image.data && !sdkResult.image.uncropped)
        ) {
            return true;
        }
        if (threshold === undefined || threshold === null) {
            //Skip minimum DPI
            return false;
        }
        const isTD3 =
            sdkResult && (sdkResult.cardType === 2 || sdkResult.cardtype === 2);
        const th =
            threshold >= 0
                ? threshold
                : isTD3
                    ? MIN_RES_THRESHOLD_TD3
                    : MIN_RES_THRESHOLD;
        if (sdkResult.dpi < th) {
            return true;
        }
        return false;
    }

    function isNotSharp(sdkResult, threshold) {
        const th = threshold >= 0 ? threshold : SHARPNESS_THRESHOLD;
        return sdkResult && sdkResult.sharpness < th;
    }

    function isGlare(sdkResult, threshold) {
        const th = threshold >= 0 ? threshold : GLARE_THRESHOLD;
        return sdkResult && sdkResult.glare < th;
    }

    function isLowRes(sdkResult, threshold) {
        let th = threshold >= 0 ? threshold : RES_THRESHOLD;
        //adjust if a passport of TD3 size (cardtype is 2)
        //It is a bigger document so resolution will be relatively less
        if (sdkResult.cardType === 2 || sdkResult.cardtype === 2) {
            th = th * (TD1_WIDTH / TD3_WIDTH);
            if (th < MIN_RES_THRESHOLD_TD3) th = MIN_RES_THRESHOLD_TD3;
        }
        return sdkResult && sdkResult.dpi < th;
    }

    function getErrorCode(sdkResult, threshold) {
        //Check for SDK errors
        if (sdkResult && sdkResult.sdkError) {
            if (!window.AcuantJavascriptWebSdk) {
                window.AcuantJavascriptWebSdk = {
                    SEQUENCE_BREAK_CODE: "sequence-break",
                    START_FAIL_CODE: "start-fail",
                    REPEAT_FAIL_CODE: "repeat-fail",
                    HEIC_NOT_SUPPORTED_CODE: "heic-not-supported",
                };
            }
            switch (sdkResult.sdkError) {
                //Check all defined errors
                case AcuantJavascriptWebSdk.SEQUENCE_BREAK_CODE:
                    return ThalesThinLib.ENUM.SDK_ERROR;
                case AcuantJavascriptWebSdk.REPEAT_FAIL_CODE:
                case AcuantJavascriptWebSdk.START_FAIL_CODE:
                case AcuantJavascriptWebSdk.HEIC_NOT_SUPPORTED_CODE:
                    return ThalesThinLib.ENUM.SDK_FAILED;
                //Check if specific camera error
                case "NotAllowedError":
                    return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_DENIED;
                case "OverconstrainedError":
                    return ThalesThinLib.ENUM.CAMERA_PARAMS_ERR;
                case "ManualCancelled":
                    return ThalesThinLib.ENUM.ERROR_CLOSE_BTN;
                default:
                    return sdkResult.sdkError;
            }
        }
        if (sdkResult && sdkResult.isFace) {
            //No image quality errors on face
            return null;
        } else {
            //Check for SDK results
            if (!threshold) threshold = {};
            if (isNotCropped(sdkResult, threshold.minDpi)) {
                return ThalesThinLib.ENUM.ERROR_CROP;
            } else if (!threshold.skipDpi && isLowRes(sdkResult, threshold.dpi)) {
                return ThalesThinLib.ENUM.LOW_RES;
            } else if (!threshold.skipSharpness && isNotSharp(sdkResult, threshold.sharpness)) {
                return ThalesThinLib.ENUM.LOW_SHARPNESS;
            } else if (!threshold.skipGlare && isGlare(sdkResult, threshold.glare)) {
                return ThalesThinLib.ENUM.HIGH_GLARE;
            }
        }
        return null;
    }

    function getBestImage(sdkResult1, sdkResult2, threshold) {
        //Check if the response is actually an error
        if (!sdkResult1) {
            log("Second image chosen as first empty");
            return sdkResult2;
        }
        if (!sdkResult2) {
            log("First image chosen as second empty");
            return sdkResult1;
        }
        if (sdkResult1.sdkError && sdkResult2.sdkError) {
            log("Only error results");
            return null;
        }
        if (sdkResult2.sdkError) {
            log("First image chosen");
            return sdkResult1;
        }
        if (sdkResult1.sdkError) {
            log("Second image chosen");
            return sdkResult2;
        }
        //Check if error code was related to cropping
        let issue1 = getErrorCode(sdkResult1, threshold);
        let issue2 = getErrorCode(sdkResult2, threshold);
        if (issue1 === ThalesThinLib.ENUM.ERROR_CROP) {
            log("Second image chosen");
            return sdkResult2;
        }
        if (
            issue1 === ThalesThinLib.ENUM.ERROR_CROP &&
            issue2 === ThalesThinLib.ENUM.ERROR_CROP
        ) {
            log("No good image");
            return null;
        }
        if (issue2 === ThalesThinLib.ENUM.ERROR_CROP) {
            log("First image chosen");
            return sdkResult1;
        }
        if (issue1 === ThalesThinLib.ENUM.ERROR_CROP) {
            log("Second image chosen");
            return sdkResult2;
        }
        //Return if one image is good
        if (issue1 === null && issue2 !== null) {
            log("First image chosen");
            return sdkResult1;
        }
        if (issue2 === null && issue1 !== null) {
            log("Second image chosen");
            return sdkResult2;
        }
        if (sdkResult1.isFace || sdkResult2.isFace) {
            //At this point, no more quality checks can be done on a face image, choose latest
            log("Second image chosen");
            return sdkResult2;
        }
        //Return the one that doesn't have too low sharpness or glare as that will most likely fail
        if (
            sdkResult1.sharpness >= MIN_SHARPNESS_THRESHOLD &&
            sdkResult2.sharpness < MIN_SHARPNESS_THRESHOLD
        ) {
            log("First image chosen");
            return sdkResult1;
        } else if (
            sdkResult2.sharpness >= MIN_SHARPNESS_THRESHOLD &&
            sdkResult1.sharpness < MIN_SHARPNESS_THRESHOLD
        ) {
            log("Second image chosen");
            return sdkResult2;
        }
        if (
            sdkResult1.glare >= MIN_GLARE_THRESHOLD &&
            sdkResult2.glare < MIN_GLARE_THRESHOLD
        ) {
            log("First image chosen");
            return sdkResult1;
        } else if (
            sdkResult2.glare >= MIN_GLARE_THRESHOLD &&
            sdkResult1.glare < MIN_GLARE_THRESHOLD
        ) {
            log("Second image chosen");
            return sdkResult2;
        }
        //If they are not below minimum thresholds, return based on sharpness
        if (sdkResult1.sharpness > sdkResult2.sharpness) {
            log("First image chosen");
            return sdkResult1;
        } else if (sdkResult2.sharpness > sdkResult1.sharpness) {
            log("Second image chosen");
            return sdkResult2;
        }
        //If they are same sharpness based on glare
        if (sdkResult1.glare > sdkResult2.glare) {
            log("First image chosen");
            return sdkResult1;
        } else if (sdkResult2.glare > sdkResult1.glare) {
            log("Second image chosen");
            return sdkResult2;
        }
        //Otherwise based on resolution
        if (sdkResult1.dpi > sdkResult2.dpi) {
            log("First image chosen");
            return sdkResult1;
        } else {
            log("Second image chosen");
            return sdkResult2;
        }
    }
    function setCaptureTimeout(config, callback) {
        if (config && config.captureTimeout > 0) {
            clearCaptureTimeout();
            captureTimeout = window.setTimeout(() => {
                if (callback) {
                    log("Timed out after: " + config.captureTimeout + " ms");
                    callback(ThalesThinLib.ENUM.ERROR_TIMEOUT);
                }
            }, config.captureTimeout);
        }
    }
    function clearCaptureTimeout() {
        if (captureTimeout !== null) {
            window.clearTimeout(captureTimeout);
        }
        //Clear any other timer
        clearCloseTimeout();
        clearFallbackTimeout();
    }

    function setCloseTimeout(timeout, callback) {
        if (timeout > 0) {
            clearCloseTimeout();
            closeTimeout = window.setTimeout(() => {
                if (callback) {
                    log("Close trigger after: " + timeout + " ms");
                    callback();
                }
            }, timeout);
        }
    }

    function clearCloseTimeout() {
        if (closeTimeout != null) {
            window.clearTimeout(closeTimeout);
        }
    }
    function setFallbackTimeout(timeout, callback) {
        if (timeout > 0) {
            clearFallbackTimeout();
            fallbackTimeout = window.setTimeout(() => {
                if (callback) {
                    log("Fallback trigger after: " + timeout + " ms");
                    callback();
                }
            }, timeout);
        }
    }

    function clearFallbackTimeout() {
        if (fallbackTimeout != null) {
            window.clearTimeout(fallbackTimeout);
        }
    }
    function log(text) {
        if (disableDebugger) {
            return;
        }
        const SEPARATOR = "#$#$#";
        const now = Date.now();
        let txt =
            "[Thales][" +
            new Date(now).getHours() +
            ":" +
            new Date(now).getMinutes() +
            ":" +
            new Date(now).getSeconds() +
            "::" +
            new Date(now).getMilliseconds() +
            "] " +
            text;
        console.log(txt);
        if (debugLogger) {
            debugLogger.value = debugLogger.value + SEPARATOR + txt;
        }
    }

    function setLogger(htmlLogger, disable) {
        if (htmlLogger) {
            debugLogger = htmlLogger;
        }
        if (disable !== undefined && disable !== null) {
            disableDebugger = disable;
        }
    }

    async function capture(options) {
        return new Promise((resolve, reject) => {
            //Get session
            const session = globalSession;
            globalSession = session;
            try {
                //Avoid multilpe error handling
                let alreadyDone = false;
                //Set the promises
                let finalResolve;
                let finalReject;
                const finalPromise = new Promise((intRes, intRej) => {
                    finalResolve = intRes;
                    finalReject = intRej;
                });
                let processResolve;
                let processReject;
                const processPromise = new Promise((intRes, intRej) => {
                    processResolve = intRes;
                    processReject = intRej;
                });
                //Check options
                if (!options) {
                    log("Options object is mandatory. Aborting!");
                    reject(ThalesThinLib.ENUM.SDK_CONFIG_ERROR);
                    onDone({ sdkError: ThalesThinLib.ENUM.SDK_CONFIG_ERROR });
                    return;
                }
                if (!options.init) options.init = {};
                clearCaptureTimeout();

                //Set different modes. "Smart" refers to Smart Capture SDK
                //and "Base" refers to prevoius versions of SDK
                const isFaceBase =
                    !options.init.smartCaptureFace && !options.init.onlyDocument;
                const isFaceSmart =
                    options.init.smartCaptureFace && !options.init.onlyDocument;
                const isDocBase =
                    !options.init.smartCaptureDocument && !options.init.onlyFace;
                const isDocSmart =
                    options.init.smartCaptureDocument && !options.init.onlyFace;

                const fillRootColor = options.init.fillRootColor || "black";
                const zIndexRoot = options.init.zIndex || 1000;
                const CameraUiLib = "AcuantCameraUI";
                const CameraUiLibFace = "AcuantPassiveLiveness";
                const CameraLib = "AcuantCamera";
                const SmartCaptureLib = "SmartCaptureLib";

                let startCapture = Date.now();
                let startProcess = 0;
                let capturedImg = null;
                let smartCaptureAlertText = "";

                //Check if face capture should occur
                session.internal.isFace =
                    options.init.onlyDocument === false &&
                    (options.init.onlyFace === true ||
                        session.internal.isDone);
                //Initialize isBack
                if (
                    session.internal.isBack === undefined ||
                    session.internal.isBack === null
                ) {
                    session.internal.isBack = false;
                }
                //Check and initialize isDone
                if (session.internal.isFace) {
                    session.internal.isDone = true;
                } else if (
                    session.internal.isDone === undefined ||
                    session.internal.isDone === null
                ) {
                    session.internal.isDone = false;
                }
                //Check and initialize isFaceDone
                if (
                    session.internal.isFaceDone === undefined ||
                    session.internal.isFaceDone === null ||
                    !session.internal.isFace
                ) {
                    session.internal.isFaceDone = false;
                }
                //Set variable to determine the object fields dependent on side
                const side = session.internal.isFace
                    ? "Face"
                    : session.internal.isBack
                        ? "Back"
                        : "";

                //Set other session data
                if (!session.internal.errors) {
                    session.internal.errors = {};
                }
                session.internal.captureTime = session.internal.captureTime || 0;
                session.internal.captureTimeBack =
                    session.internal.captureTimeBack || 0;
                session.internal.id = session.internal.id || getLogId(options.init.channel, true);
                session.internal.device = {
                    platform: platform(),
                    model: deviceModel,
                    userAgent:
                        window.navigator && window.navigator.userAgent
                            ? window.navigator.userAgent
                            : null,
                    brands:
                        window.navigator &&
                            window.navigator.userAgentData &&
                            window.navigator.userAgentData.brands &&
                            window.navigator.userAgentData.brands.length > 0
                            ? window.navigator.userAgentData.brands
                            : null,
                    attrs: initMobileAttributes,
                };

                session.internal.camera = {
                    capabilities: latestDeviceCaps,
                    settings: latestDeviceSets,
                    list: latestDeviceList,
                };
                //If device model is not present, retrieve it async
                if (!deviceModel) {
                    checkDeviceModel().then((dm) => {
                        deviceModel = dm;
                    });
                }

                //Initialize session object
                session.internal.timestamp = Date.now();
                session.internal.uiShown = false;
                session.internal.lastEvent = session.internal.isFace
                    ? ThalesThinLib.ENUM.EVENT_CAPTURE_FACE
                    : session.internal.isBack
                        ? ThalesThinLib.ENUM.EVENT_CAPTURE_BACK
                        : ThalesThinLib.ENUM.EVENT_CAPTURE_FRONT;
                session.internal.sdkVersion = "Unknown";
                session.internal.sdkVersionFace = "Unknown";
                //Set max SDK attempts
                session.internal.maxSdkAttempts = options.maxSdkAttempts =
                    options.maxSdkAttempts || DEFAULT_MAX_RETRIES;
                //If first time or retry in a new session
                if (!session.internal.sdkAttempts || session.internal.sdkAttempts <= 0 || session.internal.finalAttempt) {
                    //Reset SDK attempts to maximum
                    session.internal.sdkAttempts = session.internal.maxSdkAttempts;
                    //remove any previous results
                    session.internal["bestResult" + side] = null;
                }
                //Reset tracking of final attempt (attempts depleted or image captured)
                session.internal.finalAttempt = false;

                log("SDK Attempts Set: " + session.internal.sdkAttempts);
                //Record config options
                session.internal.jpegQuality = !isNaN(options.init.jpegQuality)
                    ? options.init.jpegQuality
                    : window.acuantConfig && !isNaN(window.acuantConfig.jpegQuality)
                        ? window.acuantConfig.jpegQuality
                        : 0.9;
                session.internal.options = {
                    thresholds: options.thresholds,
                    captureTimeout: options.captureTimeout,
                    slowMode: options.init ? options.init.slowMode : null,
                    smartCapture: session.internal.isFace
                        ? options.init.smartCaptureFace
                        : options.init.smartCaptureDocument,
                    jpegQuality: session.internal.jpegQuality,
                };
                //Force slow mode if needed
                if (session.internal.forceSlowMode) {
                    options.init.slowMode = true;
                }
                //Remove the element with the relevant ID to disable the Acuant SDK
                //attempting to read a barcode. Feature is deprecated
                if (window.AcuantJavascriptWebSdk) {
                    const barId = document.getElementById(
                        window.AcuantJavascriptWebSdk.BARCODE_READER_ID
                    );
                    if (barId) {
                        try {
                            document.body.removeChild(barId);
                        } catch (_e) { }
                    }
                }
                //Set total capture attempts for session
                session.internal.maxCaptureAttempts =
                    options.maxCaptureAttempts || DEFAULT_MAX_CAPTURES;
                session.internal.maxCaptureFaceAttempts =
                    options.maxCaptureFaceAttempts || DEFAULT_MAX_FACE_CAPTURES;

                session.internal.captureAttempts =
                    !session.internal.captureAttempts ||
                        session.internal.captureAttempts > session.internal.maxCaptureAttempts
                        ? 0
                        : session.internal.captureAttempts;

                session.internal.captureFaceAttempts =
                    !session.internal.captureFaceAttempts ||
                        session.internal.captureFaceAttempts >
                        session.internal.maxCaptureFaceAttempts
                        ? 0
                        : session.internal.captureFaceAttempts;

                //Verification attempts
                session.internal.maxVerifAttempts =
                    options.maxVerifAttempts || DEFAULT_MAX_VERIFICATIONS;

                session.internal.verifAttempts =
                    !session.internal.verifAttempts ||
                        session.internal.verifAttempts >= session.internal.maxVerifAttempts
                        ? 0
                        : session.internal.verifAttempts;

                if (session.internal.isFace) {
                    session.internal.verifFaceResult = null;
                } else {
                    session.internal.verifResult = null;
                }

                //Re-initialize smart capture session info
                if (options.init.smartCaptureDocument) {
                    options.uncropped = true;
                }

                //Reset tracking of auto detections
                const detectionLabel = !session.internal.isBack
                    ? "detection"
                    : "detectionBack";

                if (!options.init.onlyDocument) {
                    session.internal.shouldDoFace = true;
                }

                //Base SDK has hardcoded 400ms, smart capture SDK have no default configuration
                const maxExpDetectTime =
                    options.autoDetectConfig &&
                        options.autoDetectConfig.maxExpTime > 0
                        ? options.autoDetectConfig.maxExpTime
                        : isDocSmart ?
                            400 : //For base SDK, it is always 400ms
                            DEFAULT_DETECT_MAX_TIME_SMART;
                //Base SDK has a built-in mechanism so it is disabled by default
                const maxAllowedTooLongDetect =
                    options.autoDetectConfig &&
                        options.autoDetectConfig.maxAllowedTooLong > 0
                        ? options.autoDetectConfig.maxAllowedTooLong
                        : DEFAULT_DETECT_MAX_TOO_LONG;
                //Face SDK timing
                const maxExpDetectTimeFace =
                    options.autoDetectConfig &&
                        options.autoDetectConfig.maxExpTimeFace > 0
                        ? options.autoDetectConfig.maxExpTimeFace
                        : DEFAULT_DETECT_MAX_TIME_SMART_FACE;
                //Check initialization
                log("Check initialization...");
                if (!isSdkInitialized) {
                    log("SDK not initialized. Aborting!");
                    session.internal.worstError =
                        session.internal.worstErrorBack =
                        session.internal.worstErrorFace =
                        session.internal.lastError =
                        ThalesThinLib.ENUM.SDK_INIT_ERROR;
                    onDone({ sdkError: session.internal.lastError });
                    return;
                }
                if (!options) {
                    log("Options object is mandatory. Aborting!");
                    session.internal.worstError =
                        session.internal.worstErrorBack =
                        session.internal.worstErrorFace =
                        session.internal.lastError =
                        ThalesThinLib.ENUM.SDK_CONFIG_ERROR;
                    onDone({ sdkError: session.internal.lastError });
                    return;
                }

                function setActionButton(root, zIndex, { top, left, right, bottom, text, textSize, textColor, textShadow, debugBorders }) {
                    try {
                        let actionButton = document.getElementById("thales-action-btn");
                        if (!actionButton) {
                            actionButton = document.createElement("div");
                            actionButton.id = "thales-action-btn";
                            actionButton.style.position = "fixed";
                            actionButton.style.userSelect = "none";
                            actionButton.style.textSizeAdjust = "100%";

                            actionButton.style.left = left || "6vw";
                            actionButton.style.top = top || "2vh";
                            actionButton.style.right = right || undefined;
                            actionButton.style.bottom = bottom || undefined;

                            actionButton.style.textShadow = textShadow ? textShadow : "0 0 4px black";
                            actionButton.innerHTML = text || "CLOSE";
                            actionButton.style.fontSize = textSize || "20px";
                            actionButton.style.color = textColor || "white";

                            actionButton.onclick = (event) => {
                                event.stopPropagation();
                                forceExit(true);
                            };
                            actionButton.style.zIndex = zIndex !== null ? zIndex : undefined;
                            root.appendChild(actionButton);
                        }
                        actionButton.style.display = "block";
                        //Show borders for debugging purposes
                        if (debugBorders) {
                            actionButton.style.border = "2px solid blue";
                        }
                    } catch (e) {
                        console.log("Cannot create action button: " + e);
                    }
                }

                //Called once SDK UI is initiated
                function adjustUi() {
                    //SDK Elements
                    let acPlayer = document.getElementById("acuant-player");
                    let acCanvas = document.getElementById("acuant-ui-canvas");
                    let acCamera = document.getElementById("acuant-camera");
                    acCamera.style.position = "fixed";
                    acCamera.style.width = "100%";
                    acCamera.style.height = "100%";
                    acCamera.style.top = 0;
                    acCamera.style.left = 0;
                    acCamera.style.right = 0;
                    acCamera.style.bottom = 0;
                    acCamera.style.padding = 0;
                    acCamera.style.margin = 0;
                    acCamera.style.backgroundColor = fillRootColor;
                    acCamera.style.zIndex = zIndexRoot;

                    acPlayer.style.position = "fixed";
                    acPlayer.style.transform = "translate(-50%, -50%)";
                    acPlayer.style.top = "50%";
                    acPlayer.style.left = "50%";
                    acPlayer.style.padding = 0;
                    acPlayer.style.margin = 0;
                    acPlayer.style.imageOrientation = "none";
                    acPlayer.style.objectFit = "fill";
                    acPlayer.style.zIndex = zIndexRoot;

                    acCanvas.style.position = "fixed";
                    acCanvas.style.transform = "translate(-50%, -50%)";
                    acCanvas.style.top = "50%";
                    acCanvas.style.left = "50%";
                    acCanvas.style.padding = 0;
                    acCanvas.style.margin = 0;
                    acCanvas.style.zIndex = zIndexRoot;

                    //Show borders for debugging purposes
                    if (options.init && options.init.debugBorders) {
                        acCanvas.style.border = "2px solid purple";
                        acPlayer.style.border = "2px solid yellow";
                        acCamera.style.border = "2px solid red";
                    }
                    if (options.actionButton) {
                        setActionButton(acCamera, zIndexRoot + 2, {
                            bottom: options.actionButton.bottom,
                            top: options.actionButton.top,
                            left: options.actionButton.left,
                            right: options.actionButton.right,
                            text: options.actionButton.text,
                            textColor: options.actionButton.textColor,
                            textShadow: options.actionButton.textShadow,
                            textSize: options.actionButton.textSize,
                            debugBorders: options.init && options.init.debugBorders,
                        });
                    }
                    session.internal.uiShown = true;
                    resolve({
                        process: processPromise,
                        final: finalPromise,
                    });
                }

                //UI functions
                function closeUI() {
                    log("Closing...");
                    clearCaptureTimeout();
                    const acCamera = window.document.getElementById("acuant-camera");
                    if (acCamera) {
                        acCamera.style.display = "none";
                        acCamera.remove();
                    }
                    const liveFaceCamera =
                        window.document.getElementById("live-face-camera");
                    if (liveFaceCamera) {
                        liveFaceCamera.style.display = "none";
                        liveFaceCamera.remove();
                    }
                    const liveFaceCameraBase =
                        window.document.getElementById("acuant-face-capture-container");
                    if (liveFaceCameraBase) {
                        liveFaceCameraBase.style.display = "none";
                        liveFaceCameraBase.remove();
                    }
                    const liveDocCamera = window.document.getElementById(
                        "live-document-camera"
                    );
                    if (liveDocCamera) {
                        liveDocCamera.style.display = "none";
                        liveDocCamera.remove();
                    }
                    const actionButton = window.document.getElementById(
                        "thales-action-btn"
                    );
                    if (actionButton) {
                        actionButton.style.display = "none";
                        actionButton.remove();
                    }
                }

                //Remove/add events
                function removeSmartFaceEvents(captureFaceCb) {
                    const liveFaceCamera =
                        window.document.getElementById("live-face-camera");
                    const LiveFaceCameraSdk = window["SmartCaptureLib"]
                        ? window["SmartCaptureLib"].LiveFaceCamera
                        : null;
                    if (liveFaceCamera && LiveFaceCameraSdk) {
                        liveFaceCamera.removeEventListener(
                            LiveFaceCameraSdk.OpenEventName,
                            captureFaceCb.onOpened
                        );
                        liveFaceCamera.removeEventListener(
                            LiveFaceCameraSdk.CloseEventName,
                            captureFaceCb.onClosed
                        );
                        liveFaceCamera.removeEventListener(
                            LiveFaceCameraSdk.CaptureEventName,
                            captureFaceCb.onCaptured
                        );
                        liveFaceCamera.removeEventListener(
                            LiveFaceCameraSdk.FailureEventName,
                            captureFaceCb.onError
                        );
                        liveFaceCamera.removeEventListener(
                            LiveFaceCameraSdk.BeforeOpenEventName,
                            captureFaceCb.onBeforeCapture
                        );
                        liveFaceCamera.removeEventListener(
                            LiveFaceCameraSdk.BeforeCaptureEventName,
                            captureFaceCb.onBeforeOpen
                        );
                        liveFaceCamera.removeEventListener(
                            LiveFaceCameraSdk.DetectEventName,
                            captureFaceCb.onDetection
                        );
                        liveFaceCamera.removeEventListener(
                            LiveFaceCameraSdk.InitializeEventName,
                            captureFaceCb.onDetectorInitialized
                        );
                        log("Face SDK events removed");
                    }
                }
                function addSmartFaceEvents(captureFaceCb) {
                    const liveFaceCamera =
                        window.document.getElementById("live-face-camera");
                    const LiveFaceCameraSdk = window["SmartCaptureLib"]
                        ? window["SmartCaptureLib"].LiveFaceCamera
                        : null;
                    if (liveFaceCamera && LiveFaceCameraSdk) {
                        removeSmartFaceEvents(captureFaceCb);
                        liveFaceCamera.addEventListener(
                            LiveFaceCameraSdk.OpenEventName,
                            captureFaceCb.onOpened
                        );
                        liveFaceCamera.addEventListener(
                            LiveFaceCameraSdk.CloseEventName,
                            captureFaceCb.onClosed
                        );
                        liveFaceCamera.addEventListener(
                            LiveFaceCameraSdk.CaptureEventName,
                            captureFaceCb.onCaptured
                        );
                        liveFaceCamera.addEventListener(
                            LiveFaceCameraSdk.FailureEventName,
                            captureFaceCb.onError
                        );
                        liveFaceCamera.addEventListener(
                            LiveFaceCameraSdk.BeforeOpenEventName,
                            captureFaceCb.onBeforeOpen
                        );
                        liveFaceCamera.addEventListener(
                            LiveFaceCameraSdk.BeforeCaptureEventName,
                            captureFaceCb.onBeforeCapture
                        );
                        liveFaceCamera.addEventListener(
                            LiveFaceCameraSdk.DetectEventName,
                            captureFaceCb.onDetection
                        );
                        liveFaceCamera.addEventListener(
                            LiveFaceCameraSdk.InitializeEventName,
                            captureFaceCb.onDetectorInitialized
                        );
                        log("Face SDK events added");
                    }
                }
                function removeSmartDocEvents(captureDocCb) {
                    const liveDocCamera =
                        window.document.getElementById("live-document-camera");
                    const LiveDocCameraSdk = window["SmartCaptureLib"]
                        ? window["SmartCaptureLib"].LiveDocumentCamera
                        : null;
                    if (liveDocCamera && LiveDocCameraSdk) {
                        liveDocCamera.removeEventListener(
                            LiveDocCameraSdk.OpenEventName,
                            captureDocCb.onOpened
                        );
                        liveDocCamera.removeEventListener(
                            LiveDocCameraSdk.CloseEventName,
                            captureDocCb.onClosed
                        );
                        liveDocCamera.removeEventListener(
                            LiveDocCameraSdk.FailureEventName,
                            captureDocCb.onFailure
                        );
                        liveDocCamera.removeEventListener(
                            LiveDocCameraSdk.CaptureEventName,
                            captureDocCb.onCaptured
                        );
                        liveDocCamera.removeEventListener(
                            LiveDocCameraSdk.DetectEventName,
                            captureDocCb.onDetected
                        );
                        log("Doc SDK events removed");
                    }
                }
                function addSmartDocEvents(captureDocCb) {
                    const liveDocCamera =
                        window.document.getElementById("live-document-camera");
                    const LiveDocCameraSdk = window["SmartCaptureLib"]
                        ? window["SmartCaptureLib"].LiveDocumentCamera
                        : null;
                    if (liveDocCamera && LiveDocCameraSdk) {
                        removeSmartDocEvents(captureDocCb)
                        liveDocCamera.addEventListener(
                            LiveDocCameraSdk.OpenEventName,
                            captureDocCb.onOpened
                        );
                        liveDocCamera.addEventListener(
                            LiveDocCameraSdk.CloseEventName,
                            captureDocCb.onClosed
                        );
                        liveDocCamera.addEventListener(
                            LiveDocCameraSdk.FailureEventName,
                            captureDocCb.onFailure
                        );
                        liveDocCamera.addEventListener(
                            LiveDocCameraSdk.CaptureEventName,
                            captureDocCb.onCaptured
                        );
                        liveDocCamera.addEventListener(
                            LiveDocCameraSdk.DetectEventName,
                            captureDocCb.onDetected
                        );
                        log("Doc SDK events added");
                    }
                }

                //Use to end the SDK
                function forceExit(isAuto) {
                    //Update worst error
                    const errCode = isAuto
                        ? ThalesThinLib.ENUM.ERROR_CLOSE_BTN
                        : ThalesThinLib.ENUM.ERROR_TIMEOUT;
                    if (window[CameraUiLib]) {
                        try {
                            window[CameraUiLib].end();
                        } catch { }
                    }
                    if (window[CameraUiLibFace]) {
                        try {
                            window[CameraUiLibFace].end();
                        } catch { }
                    }
                    const liveFaceCamera =
                        window.document.getElementById("live-face-camera");
                    if (liveFaceCamera && liveFaceCamera.isOpen === true) {
                        liveFaceCamera.isOpen = false;
                    }
                    const liveDocCamera = window.document.getElementById(
                        "live-document-camera"
                    );
                    if (liveDocCamera && liveDocCamera.isOpen === true) {
                        liveDocCamera.isOpen = false;
                    }
                    //This goes back to the main flow to handle this as an error
                    onDone({ sdkError: errCode });
                }

                //Handle all unexpected errors
                const unexpError = (errorMsg) => {
                    log("SDK Unexpected Error: " + errorMsg);
                    //Force slow mode, and end workers. Workers will start again when slow mode is used
                    if (options.init) {
                        options.init.slowMode = true;
                        session.internal.forceSlowMode = true;
                    }
                    //If possible, re-initialize the SDK
                    if (options.init) {
                        try {
                            window[CameraUiLib].end();
                        } catch (err) {
                            log("Ended " + CameraUiLib + " with an exception: " + err);
                        }
                        try {
                            AcuantJavascriptWebSdk.end();
                        } catch (err) {
                            log("Ended workers with an exception: " + err);
                        }
                        initSdk({}, options);
                    }
                    //Resolve with a fatal error
                    onDone({ sdkError: AcuantJavascriptWebSdk.SEQUENCE_BREAK_CODE });
                };
                const unexpErrorIgnore = (errorMsg) => {
                    log(
                        "Warning! Ignoring SDK Unexpected Error after execution" + errorMsg
                    );
                };
                //Base SDK callback object
                const captureCb = {
                    onCaptured: function (response) {
                        clearCaptureTimeout();
                        startProcess = Date.now();
                        log("OnCaptured called");
                        //Clean preview image
                        session.internal[
                            !session.internal.isBack ? "previewImage" : "previewImageBack"
                        ] = null;
                        capturedImg =
                            response && response.width > 0 && response.height > 0
                                ? response
                                : null;
                        //if no detection done within a timefrme assume tap to capture
                        session.internal["captureMode" + side] = ThalesThinLib.ENUM.AUTO_CAPTURE;                        
                        if (
                            !session.internal["detection" + side] ||
                            Date.now() - session.internal["detection" + side].end > DEFAULT_DETECT_MAX_TIME_BASE
                        ) {
                            session.internal["captureMode" + side] = ThalesThinLib.ENUM.TAP_TO_CAPTURE;
                            log("Falled back to Tap To Capture");
                        }
                        //Show the message that the SDK is cropping and analyzing the image
                        processResolve();
                    },
                    onCropped: function (response) {
                        log("onCropped called");
                        onDone(response);
                    },
                    onFrameAvailable: function (response) {
                        try {
                            const detLabel = !session.internal.isBack
                                ? "detection"
                                : "detectionBack";
                            if (!session.internal[detLabel]) {
                                session.internal[detLabel] = {
                                    count: 0,
                                    state: {
                                        ALIGN: 0,
                                        TOO_CLOSE: 0,
                                        TOO_FAR: 0,
                                        GOOD: 0,
                                        INVALID: 0,
                                    },
                                    start: Date.now(),
                                    end: Date.now(),
                                    maxTime: 0,
                                    tooLong: 0,                                    
                                    lostFocus: 0, //during countdown the response chnaged from 'good'
                                };
                            }
                            session.internal[detLabel].count++;
                            const deltaDetectTime =
                                Date.now() - session.internal[detLabel].end;
                            if (deltaDetectTime > maxExpDetectTime) {
                                session.internal[detLabel].tooLong++;
                            }
                            if (session.internal[detLabel].tooLong > maxAllowedTooLongDetect) {
                                try {
                                    const liveDocCamera = document.getElementById("live-document-camera");
                                    if (liveDocCamera && liveDocCamera.shadowRoot &&
                                            typeof liveDocCamera.shadowRoot.querySelector === 'function') {
                                        const toggle = liveDocCamera.shadowRoot.querySelector(".switchDisplay");
                                        if (toggle) {
                                            if (toggle.classList && typeof toggle.classList.remove === 'function') {
                                                toggle.classList.remove("hide"); //Show toggle
                                            }
                                            if (typeof toggle.click === 'function') {
                                                toggle.click(); //simulate clicking toggle button                                                
                                            }
                                        }
                                    }
                                } catch (_) { }
                            }
                            session.internal[detLabel].maxTime = Math.max(
                                session.internal[detLabel].maxTime,
                                deltaDetectTime
                            );
                            session.internal[detLabel].end = Date.now();

                            const state = !response
                                ? "INVALID"
                                : response.state === 0
                                    ? "ALIGN"
                                    : response.state === 1
                                        ? "TOO_FAR"
                                        : response.state === 2
                                            ? "TOO_CLOSE"
                                            : response.state === 3
                                                ? "GOOD"
                                                : "INVALID";
                            session.internal[detLabel].state[state]++;
                            if (
                                state !== "GOOD" &&
                                session.internal[detLabel].lastState === "GOOD"
                            ) {
                                session.internal[detLabel].lostFocus++;
                            }
                        } catch (err) {
                            log("onFrameAvailable error: " + err);
                        }
                    },
                    onError: function (error, code) {
                        log("SDK Error [" + (!!error ? error.name : error) + "] " + code);
                        const errDetail = code + "-" + error;
                        session.internal.errors[errDetail] === undefined ||
                            session.internal.errors[errDetail] === null
                            ? (session.internal.errors[errDetail] = 1)
                            : session.internal.errors[errDetail]++;
                        let err = code;
                        if (
                            code === window.AcuantJavascriptWebSdk &&
                            AcuantJavascriptWebSdk.START_FAIL_CODE &&
                            error &&
                            error.name
                        ) {
                            err = error.name;
                        }
                        onDone({ sdkError: err });
                    },
                };

                const captureDocCb = {
                    onOpened: () => {
                        log("Doc camera opened");
                        startCapture = Date.now();
                        const liveDocCamera = document.getElementById(
                            "live-document-camera"
                        );
                        if (liveDocCamera) {
                            liveDocCamera.style.display = "block";
                        }
                        session.internal.uiShown = true;
                        if (options.autoDetectConfig && options.autoDetectConfig.showToggleTimeout > 0) {
                            const timeout = Math.max(options.autoDetectConfig.showToggleTimeout, 2000);
                            try {
                                const liveDocCamera = document.getElementById("live-document-camera");
                                if (liveDocCamera && liveDocCamera.shadowRoot &&
                                    typeof liveDocCamera.shadowRoot.querySelector === 'function') {
                                    const toggle = liveDocCamera.shadowRoot.querySelector(".switchDisplay");
                                    if (toggle && toggle.classList && typeof toggle.classList.add === 'function') {
                                        toggle.classList.add("hide"); //Hide toggle    
                                        setFallbackTimeout(timeout, () => {
                                            try {
                                                const liveDocCamera = document.getElementById("live-document-camera");
                                                if (liveDocCamera && liveDocCamera.shadowRoot &&
                                                    typeof liveDocCamera.shadowRoot.querySelector === 'function') {
                                                    const toggle = liveDocCamera.shadowRoot.querySelector(".switchDisplay");
                                                    if (toggle && toggle.classList && typeof toggle.classList.remove === 'function') {
                                                        toggle.classList.remove("hide"); //Show toggle
                                                        liveDocCamera.texts.alertText = smartCaptureAlertText;                                                        
                                                    }
                                                }
                                            } catch (err) {
                                                log("Exception on toggle show timeout: " + err)
                                            }
                                        });                                        
                                    }
                                }
                            } catch (err) {
                                log("Exception on starting toggle show timeout: " + err)
                            }  
                        }
                        resolve({
                            process: processPromise,
                            final: finalPromise,
                        });
                    },
                    onClosed: () => {
                        log("Doc camera closed");
                        setCloseTimeout(500, () => {
                            forceExit(true)
                        });
                    },
                    onCaptured: (e) => {
                        clearCaptureTimeout();
                        log("Doc captured");
                        if (!e || !e.detail) {
                            onDone({ sdkError: ThalesThinLib.ENUM.SDK_FAILED });
                            return;
                        }
                        //If captured and not tap to capture, must be auto captured
                        if (session.internal["captureMode" + side] !== ThalesThinLib.ENUM.AUTO_CAPTURE) {
                            session.internal["captureMode" + side] = ThalesThinLib.ENUM.TAP_TO_CAPTURE;
                        }
                        if (
                            !e.detail.captureResponse ||
                            !e.detail.captureResponse.imageData
                        ) {
                            onDone({ sdkError: ThalesThinLib.ENUM.ERROR_CROP });
                        } else {
                            const img = getImageFromData(
                                e.detail.captureResponse.imageData,
                                e.detail.captureResponse.imageData.width,
                                e.detail.captureResponse.imageData.height,
                                session.internal.jpegQuality
                            );
                            onDone({
                                image: {
                                    uncropped: img,
                                    data: null,
                                    bytes: null,
                                    width: e.detail.captureResponse.imageData.imageWidth,
                                    height: e.detail.captureResponse.imageData.imageHeight,
                                },
                                isPortraitOrientation:
                                    e.detail.captureResponse.isPortraitOrientation,
                                glare: e.detail.captureResponse.isGlareFree,
                                sharpness: e.detail.captureResponse.isSharp,
                                dpi: e.detail.captureResponse.isAdequateDpi,
                                isGood: e.detail.captureResponse.isGood,
                                smartCapture: true,
                                isFace: false,
                            });
                        }
                    },
                    onFailure: (e) => {
                        const error =
                            e && e.detail && e.detail.error ? e.detail.error : { code: null, message: null };
                        log(
                            "Doc capture failed: " +
                            (!error.code ? "No Message" : error.code + ":" + error.message)
                        );
                        const errDetail = error.code + "-" + error.message;
                        !!session.internal.errors[errDetail] === undefined ||
                            !!session.internal.errors[errDetail] === null
                            ? (session.internal.errors[errDetail] = 1)
                            : session.internal.errors[errDetail]++;
                        if (
                            error.code === "start-fail" &&
                            error.message === "Permission denied"
                        ) {
                            onDone({
                                sdkError: ThalesThinLib.ENUM.CAMERA_PERMISSIONS_DENIED,
                            });
                        } else {
                            onDone({
                                sdkError:
                                    error.code === "start-fail"
                                        ? ThalesThinLib.ENUM.SDK_FAILED
                                        : ThalesThinLib.ENUM.SDK_ERROR,
                            });
                        }
                    },
                    onDetected: (e) => {
                        try {                            
                            const de =
                                e && e.detail && e.detail.detectResponse
                                    ? e.detail.detectResponse
                                    : null;
                            const detLabel = !session.internal.isBack
                                ? "detection"
                                : "detectionBack";
                            if (!de) {
                                log("No smart detection")
                            } else {
                                //If there was no detection or it was a good detection, auto capture was used
                                if (de.isGood) {
                                    session.internal["captureMode" + side] = ThalesThinLib.ENUM.AUTO_CAPTURE;
                                }
                                if (!session.internal[detLabel]) {
                                    session.internal[detLabel] = {
                                        count: 0,
                                        failedChecks: {},
                                        start: Date.now(),
                                        end: Date.now(),
                                        maxTime: 0,
                                        tooLong: 0,
                                    };
                                }
                                session.internal[detLabel].count++;
                                const deltaDetectTime =
                                    Date.now() - session.internal[detLabel].end;
                                session.internal[detLabel].tooLong += deltaDetectTime > maxExpDetectTime ? 1 : 0;
                                session.internal[detLabel].maxTime = Math.max(
                                    session.internal[detLabel].maxTime,
                                    deltaDetectTime
                                );
                                session.internal[detLabel].end = Date.now();

                                function increase(obj, attr) {
                                    if (obj[attr] == undefined || obj[attr] === null) {
                                        obj[attr] = 1;
                                    } else {
                                        obj[attr]++;
                                    }
                                }

                                if (!de.failedChecks) {
                                    increase(session.internal[detLabel].failedChecks, "Invalid");
                                } else if (de.failedChecks.length === 0) {
                                    increase(session.internal[detLabel].failedChecks, "Good");
                                } else {
                                    for (let i = 0; i < de.failedChecks.length; ++i) {
                                        increase(session.internal[detLabel].failedChecks, de.failedChecks[i]);
                                    }
                                }
                            }
                        } catch (err) {
                            log("onDetected error: " + err);
                        }
                    },
                };

                const captureFaceCb = {
                    onOpened: () => {
                        log("Face camera opened");
                        startCapture = Date.now();
                        let liveFaceCamera =
                            window.document.getElementById("live-face-camera");
                        if (liveFaceCamera) {
                            liveFaceCamera.style.display = "block";
                        }
                        let liveFaceCameraBase =
                            window.document.getElementById("acuant-face-capture-container");
                        if (liveFaceCameraBase) {
                            liveFaceCameraBase.style.display = "block";
                        }
                        session.internal.uiShown = true;
                        resolve({
                            process: processPromise,
                            final: finalPromise,
                        });
                    },
                    onClosed: () => {
                        log("Face camera closed");
                        setCloseTimeout(500, () => {
                            forceExit(true)
                        });
                    },
                    onCaptured: (e) => {
                        clearCaptureTimeout();
                        log("Face captured");
                        //For both SDk versions
                        const imageBase64 = !e || (e.detail && !e.detail.imageBase64) ? 
                            null : 
                            e.detail ? 
                                "data:image/jpeg;base64," + e.detail.imageBase64 : 
                                "data:image/jpeg;base64," + e
                        if (!imageBase64) {
                            onDone({ sdkError: ThalesThinLib.ENUM.SDK_FAILED });
                        } else {
                            const encryptedFile = e.detail && e.detail.encryptedFile
                                ? e.detail.encryptedFile
                                : new Blob();
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                const enc = !reader.result
                                    ? null
                                    : reader.result.split("base64,", 2)[1];
                                onDone({
                                    image: { data: imageBase64 },
                                    encryptedFile: enc,
                                    smartCapture: e.detail,                                    
                                    isFace: true,
                                });
                            };
                            reader.readAsDataURL(encryptedFile);
                        }
                    },
                    onError: (e) => {
                        const error =
                            e && e.detail ? e.detail : { code: null, message: null };
                        log(
                            "Face capture failed: " +
                            (!error.code ? "No Message" : error.code + ":" + error.message)
                        );
                        const errDetail = error.code + "-" + error.message;
                        !!session.internal.errors[errDetail] === undefined ||
                            !session.internal.errors[errDetail] === null
                            ? (session.internal.errors[errDetail] = 1)
                            : session.internal.errors[errDetail]++;
                        if (error && error.code === 1) {
                            onDone({
                                sdkError: ThalesThinLib.ENUM.CAMERA_PERMISSIONS_DENIED,
                            });
                        } else {
                            onDone({ sdkError: ThalesThinLib.ENUM.SDK_FAILED });
                        }
                    },
                    onDetectorInitialized: () => {
                        session.internal.isDetectInit = true;
                        log("Face detection initialized");
                    },
                    onDetection: (e) => {       
                        try {   
                            //Format to work for both SDKs
                            const errors = e && e.detail && e.detail.errors ?
                                e.detail.errors :
                                typeof e === 'string' ?
                                    [e] :
                                    null;
                            //For base SDK only
                            const liveFaceCameraText = window.document.getElementById("thales-face-detection-text");
                            if (liveFaceCameraText && errors && errors.length > 0) {
                                liveFaceCameraText.innerText = errors[0];
                            }
                            //Logging for both versions of SDK
                            if (!session.internal.detectionFace) {
                                session.internal.detectionFace = {
                                    count: 0,
                                    failedChecks: {},
                                    start: Date.now(),
                                    end: Date.now(),
                                    maxTime: 0,
                                    tooLong: 0,
                                };
                            }
                            session.internal.detectionFace.count++;
                            const deltaDetectTime = Date.now() - session.internal.detectionFace.end;
                            session.internal.detectionFace.tooLong += deltaDetectTime > maxExpDetectTimeFace ? 1 : 0;
                            session.internal.detectionFace.maxTime = Math.max(
                                session.internal.detectionFace.maxTime,
                                deltaDetectTime
                            );
                            session.internal.detectionFace.end = Date.now();
                            function increase(obj, attr) {
                                if (obj[attr] == undefined || obj[attr] === null) {
                                    obj[attr] = 1;
                                } else {
                                    obj[attr]++;
                                }
                            }
                            if (!errors) {
                                increase(session.internal.detectionFace.failedChecks, "INVALID");
                            } else if (errors.length === 0) {
                                increase(session.internal.detectionFace.failedChecks, "GOOD");
                            } else {
                                for (let i = 0; i <errors.length; ++i) {
                                    increase(session.internal.detectionFace.failedChecks, errors[i]);
                                }
                            }
                        } catch (err) {
                            log("onDetected error: " + err);                                               
                        }
                    },
                    onBeforeCapture: () => {
                        log("Face camera capturing...");
                    },
                    onBeforeOpen: () => {
                        log("Face camera opening...");
                    },
                    onPhotoRetake: () => {
                        const liveFaceCameraText = window.document.getElementById("thales-face-detection-text");
                        if (liveFaceCameraText) {
                            liveFaceCameraText.style.display = 'flex';
                        }                        
                    },
                    onPhotoTaken: () => {
                        const liveFaceCameraText = window.document.getElementById("thales-face-detection-text");
                        if (liveFaceCameraText) {
                            liveFaceCameraText.style.display = 'none';
                        }  
                    },
                };

                //Called when execution is done
                async function onDone(response) {
                    //Just in case it is not triggered already
                    processResolve();
                    resolve({
                        process: processPromise,
                        final: finalPromise,
                        state: null,
                    });

                    if (alreadyDone) return;
                    alreadyDone = true;

                    session.internal.uiShown = true;
                    removeSmartDocEvents(captureDocCb);
                    removeSmartFaceEvents(captureFaceCb);
                    closeUI();
                    //Calculate timings
                    let captureTime = Date.now() - startCapture;
                    let processTime = startProcess > 0 ? Date.now() - startProcess : 0;
                    log("SDK took " + processTime + "ms to process image");
                    session.internal["captureTime" + side] += captureTime;
                    const lastProcTime = session.internal["processTime" + side];
                    session.internal["processTime" + side] = Math.max(
                        processTime,
                        lastProcTime > 0 ? lastProcTime : -1
                    );
                    let croppingRatio = null;
                    let isTD3 = null;
                    //Get meatadata
                    if (response && !response.sdkError && !session.internal.isFace) {
                        log(
                            "DPI=" +
                            response.dpi +
                            ", Glare=" +
                            response.glare +
                            ", Sharpness=" +
                            response.sharpness
                        );
                        if (response.image && response.image.bytes) {
                            //Attempting to reduce memory usage
                            response.image.bytes = null;
                        }
                        if (
                            capturedImg &&
                            capturedImg.width > 0 &&
                            capturedImg.height > 0 &&
                            response.image &&
                            response.image.width > 0 &&
                            response.image.height > 0
                        ) {
                            const cropRatioW =
                                Math.max(response.image.width, response.image.height) /
                                Math.max(capturedImg.width, capturedImg.height);
                            const cropRatioH =
                                Math.min(response.image.width, response.image.height) /
                                Math.min(capturedImg.width, capturedImg.height);
                            isTD3 = response.cardType === 2 || response.cardtype === 2;
                            log(
                                "Cropped Size: Large=" +
                                Math.max(response.image.width, response.image.height) +
                                ", Small=" +
                                +Math.min(response.image.width, response.image.height)
                            );
                            log(
                                "Uncropped Size: Large=" +
                                Math.max(capturedImg.width, capturedImg.height) +
                                ", Small=" +
                                +Math.min(capturedImg.width, capturedImg.height)
                            );
                            log(
                                "Cropping Ratio: TD3=" +
                                isTD3 +
                                ", W=" +
                                cropRatioW.toFixed(2) +
                                ", H=" +
                                + cropRatioH.toFixed(2)
                            );
                            croppingRatio = Math.min(cropRatioW, cropRatioH)
                        }
                    }
                    //Reduce retries
                    session.internal.sdkAttempts--;                    
                    //Make a copy
                    const thresh = options.thresholds
                        ? JSON.parse(JSON.stringify(options.thresholds))
                        : {};
                    //If automatic detection and base SDK, skip checking DPI
                    if (isDocBase) {
                        if (session.internal["captureMode" + side] !==
                            ThalesThinLib.ENUM.TAP_TO_CAPTURE
                        ) {
                            thresh.skipDpi = true;
                            log("Skipping DPI check");
                        }
                    }
                    //For smart capture SDK, skip checks is result is good or explicitly chosen
                    if (isDocSmart) {
                        thresh.minDpi = null; //skip
                        if (options.thresholds) {
                            thresh.skipDpi = options.thresholds.dpi === false || response.isGood;
                            thresh.skipGlare = options.thresholds.dpi === false || response.isGood;
                            thresh.skipSharpness = options.thresholds.dpi === false || response.isGood;                            
                        }
                    }
                    //Checks if there is any error. It will be 'null' if no error
                    let issueCode = !!options.skipChecks
                        ? null
                        : getErrorCode(response, thresh);

                    //Update worst error and best response
                    const err = getWorstCode(issueCode, session.internal["worstError" + side]);
                    session.internal["worstError" + side] = err;
                    session.internal.lastError = issueCode;
                    session.internal["bestResult" + side] = getBestImage(
                        response,
                        session.internal["bestResult" + side],
                        options.thresholds
                    );
                    log(
                        "SDK Attempts Left: " +
                        session.internal.sdkAttempts +
                        ", Issue detected: " +
                        issueCode
                    );
                    //Set uncropped images
                    if (
                        (options.uncropped || options.init.smartCaptureDocument) &&
                        !session.internal.isFace
                    ) {
                        session.internal["isUncropped" + side] = true;
                        if (
                            capturedImg &&
                            options.init &&
                            options.init.smartCaptureDocument !== true
                        ) {
                            response.image.uncropped = getImageFromData(
                                capturedImg.data,
                                capturedImg.width,
                                capturedImg.height,
                                session.internal.jpegQuality
                            );
                        }
                    }
                    //AcuantJavascriptWebSdk has finished all execution, disable unexpected errors
                    if (
                        window.AcuantJavascriptWebSdk &&
                        AcuantJavascriptWebSdk.setUnexpectedErrorCallback
                    ) {
                        AcuantJavascriptWebSdk.setUnexpectedErrorCallback(unexpErrorIgnore);
                    }
                    //Add logging data on response
                    if (response) {
                        response.extra = {
                            croppingRatio: croppingRatio,
                            isPassportSize: isTD3,
                            captureMode: session.internal["captureMode" + side],
                            captureTime: session.internal["captureTime" + side],
                            processTime: session.internal["processTime" + side],
                        }
                    }
                    //Rejection means there should be another retry. Resolve means the image is good to send to backend
                    session.internal.finalAttempt = !issueCode || session.internal.sdkAttempts <= 0;
                    //Take action
                    if (session.internal.finalAttempt) {
                        //Increase capture attempts
                        if (session.internal.isFace) {
                            session.internal.captureFaceAttempts++;
                        } else {
                            session.internal.captureAttempts++;
                        }
                        const canCrop = session.internal.isFace
                            ? (!!session.internal.bestResultFace && !!session.internal.bestResultFace.image)
                            : session.internal.isBack
                                ? (!!session.internal.bestResultBack && !!session.internal.bestResultBack.image)
                                : (!!session.internal.bestResult && !!session.internal.bestResult.image);
                        if (canCrop) {
                            //Update worst error to a potentially wrong classification overriding pure SDK errors
                            session.internal["worstError" + side] =
                                getWorstCode(session.internal["worstError" + side], ThalesThinLib.ENUM.IMAGE_UPLOADED);
                            //Set preview on best image that is being sent to the backend
                            try {
                                session.internal["previewImage" + side] =
                                    "data:image/jpeg;base64," + getBestResultImage();
                            } catch (pe) {
                                log("Error setting preview image, ignoring");
                            }
                        } else {
                            session.internal["previewImage" + side] = null;
                        }
                        //Accept as there is an image after retries to send to backend
                        buildLog();
                        finalResolve();
                    } else {
                        //Set preview images. If cropped image, use that if cropping suceeded
                        try {
                            if (response && !!response.image && !!response.image.data) {
                                session.internal["previewImage" + side] = response.image.data;
                            } else if (response && !!response.image && !!response.image.uncropped) {
                                session.internal["previewImage" + side] = response.image.uncropped;
                            } else if (capturedImg) {
                                const prevImageQuality = 0.5; //Chosen to reduce size
                                session.internal[
                                    !session.internal.isBack ? "previewImage" : "previewImageBack"
                                ] = getImageFromData(
                                    capturedImg.data,
                                    capturedImg.width,
                                    capturedImg.height,
                                    prevImageQuality
                                );
                            } else {
                                session.internal["previewImage" + side] = null;
                            }
                        } catch (pe) {
                            log("Error setting preview image, ignoring");
                        }
                        //Reject to main app so it can initiate retries
                        buildLog();
                        finalReject(issueCode);
                    }
                }

                //*** INITIALIZE UI
                log("Initialize UI...");
                if (isDocSmart) {
                    let liveDocCamera = document.getElementById("live-document-camera");
                    if (!liveDocCamera) {
                        liveDocCamera = createSmartDocumentLiveCameraHTML(
                            zIndexRoot,
                            fillRootColor,
                            options.init && options.init.debugBorders);
                    }
                } else if (isDocBase) {
                    let acCamera = document.getElementById("acuant-camera");
                    if (!acCamera) {
                        acCamera = document.createElement("div");
                        acCamera.id = "acuant-camera";
                        document.body.appendChild(acCamera);
                    }
                    acCamera.style.display = "none";
                    acCamera.removeEventListener("acuantcameracreated", adjustUi);
                    acCamera.addEventListener("acuantcameracreated", adjustUi);
                    AcuantJavascriptWebSdk.setUnexpectedErrorCallback(unexpError);
                    //Remove cookie to remove SDK option for automatic native manual capture
                    document.cookie = "AcuantCameraHasFailed=;Max-Age=-99999999;";
                    log("Doc base capture UI initialized");
                }
                if (isFaceSmart) {
                    let liveFaceCamera = document.getElementById("live-face-camera");
                    if (!liveFaceCamera) {
                        liveFaceCamera = createSmartFaceLiveCameraHTML(
                            zIndexRoot,
                            fillRootColor,
                            options.init && options.init.isDebug,
                            options.init && options.init.debugBorders);
                    }
                    log("Face smart capture UI initialized");
                } else if (isFaceBase) {
                    let liveFaceCamera = document.getElementById("acuant-face-capture-container");
                    if (!liveFaceCamera) {
                        liveFaceCamera = createBaseFaceLiveCameraHTML(
                            zIndexRoot,
                            fillRootColor,                            
                            options.init && options.init.debugBorders);
                    }
                    //Remove cookie to remove SDK option for automatic native manual capture
                    document.cookie = "AcuantCameraHasFailed=;Max-Age=-99999999;";
                    log("Face base capture UI initialized");
                }

                //*** INITIALIZE SDK
                if (isDocBase && window.AcuantConfig) {
                    session.internal.sdkVersion = window.AcuantConfig.acuantVersion;
                } else if (isDocSmart && window[SmartCaptureLib]) {
                    session.internal.sdkVersion = window[SmartCaptureLib].sdkName;
                }
                if (isFaceBase && window.AcuantConfig) {
                    session.internal.sdkVersionFace = window.AcuantConfig.acuantVersion;
                } else if (isFaceSmart && window[SmartCaptureLib]) {
                    session.internal.sdkVersionFace = window[SmartCaptureLib].sdkName;
                }
                log(
                    "SDK Version: " + (session.internal.isFace
                        ? session.internal.sdkVersionFace
                        : session.internal.sdkVersion)
                );
                const liveCaptureNotSupported =
                    (window[CameraLib] &&
                        window[CameraLib].isCameraSupported !== undefined &&
                        !window[CameraLib].isCameraSupported) ||
                    (window[SmartCaptureLib] &&
                        typeof window[SmartCaptureLib].isLiveCaptureSupported ===
                        "function" &&
                        !window[SmartCaptureLib].isLiveCaptureSupported());
                if (liveCaptureNotSupported) {
                    onDone({ sdkError: ThalesThinLib.ENUM.BROWSER_NOT_SUPPORTED });
                    return;
                }

                //*** START CAPTURE
                log("Starting capture..");
                session.internal["captureMode" + side] = null;
                //Set a timeout if live capture is used
                setCaptureTimeout(options, () => {
                    log("Capture timing out...");
                    log("Capture timed out");
                    forceExit(false);
                });
                if (!session.internal.isFace) {
                    if (isDocSmart) {
                        log("Starting document smart capture...");
                        let liveDocCamera = document.getElementById("live-document-camera");
                        if (!liveDocCamera) {
                            onDone({ sdkError: ThalesThinLib.ENUM.SDK_CONFIG_ERROR });
                        } else {
                            if (options.ui) {
                                if (!liveDocCamera.hints) {
                                    liveDocCamera.hints = {};
                                }
                                if (options.ui.moveCloserHint) {
                                    liveDocCamera.hints.moveCloserHint = options.ui.moveCloserHint;
                                }
                                if (options.ui.fixBlurHint) {
                                    liveDocCamera.hints.fixBlurHint = options.ui.fixBlurHint;
                                }
                                if (options.ui.fixGlareHint) {
                                    liveDocCamera.hints.fixGlareHint = options.ui.fixGlareHint;
                                }
                                if (options.ui.outOfFrameHint) {
                                    liveDocCamera.hints.outOfFrameHint = options.ui.outOfFrameHint;
                                }
                                if (options.ui.capturingHint) {
                                    liveDocCamera.hints.capturingHint = options.ui.capturingHint;
                                }
                                if (
                                    options.ui.generalInfoTexts &&
                                    options.ui.generalInfoTexts.front
                                ) {
                                    if (!session.internal.isBack) {
                                        liveDocCamera.generalInfoTexts = [
                                            options.ui.generalInfoTexts.front,
                                        ];
                                        liveDocCamera.generalInfoTexts.push(
                                            options.ui.generalInfoTexts.fallbackFront
                                                ? options.ui.generalInfoTexts.fallbackFront
                                                : liveDocCamera.generalInfoTexts[0]
                                        );
                                    } else {
                                        liveDocCamera.generalInfoTexts = [
                                            options.ui.generalInfoTexts.back
                                                ? options.ui.generalInfoTexts.back
                                                : options.ui.generalInfoTexts.front,
                                        ];
                                        liveDocCamera.generalInfoTexts.push(
                                            options.ui.generalInfoTexts.fallbackBack
                                                ? options.ui.generalInfoTexts.fallbackBack
                                                : liveDocCamera.generalInfoTexts[0]
                                        );
                                    }
                                }
                                if (options.ui.showHelpIcon !== undefined ||
                                    options.ui.showHelpIcon !== null) {
                                    liveDocCamera.showHelpIcon = !!options.ui.showHelpIcon;
                                }
                                if (options.ui.autoCaptureText !== null && options.ui.autoCaptureText !== undefined &&
                                    options.ui.alertText !== null && options.ui.alertText !== undefined) {
                                    if (!liveDocCamera.texts) {
                                        liveDocCamera.texts = {};
                                    }
                                    liveDocCamera.texts.autoCaptureText = options.ui.autoCaptureText;
                                    smartCaptureAlertText = liveDocCamera.texts.alertText = options.ui.alertText;
                                } else if (options.ui.autoCaptureText !== null && options.ui.autoCaptureText !== undefined && 
                                    liveDocCamera.texts) {
                                    liveDocCamera.texts.autoCaptureText = options.ui.autoCaptureText;
                                } else if (options.ui.alertText !== null && options.ui.alertText !== undefined && 
                                    liveDocCamera.texts) {
                                    smartCaptureAlertText = liveDocCamera.texts.alertText = options.ui.alertText;
                                }
                                if (options.ui.autoCaptureText !== null && options.ui.autoCaptureText !== undefined &&
                                    options.ui.autoCaptureOnText && options.ui.autoCaptureOffText && liveDocCamera.texts) {
                                    liveDocCamera.texts.autoCaptureOnText = options.ui.autoCaptureOnText;
                                    liveDocCamera.texts.autoCaptureOffText = options.ui.autoCaptureOffText;
                                }
                                if (options.ui.successTime > 0) {
                                    liveDocCamera.successTime = options.ui.successTime;
                                }
                            }
                            liveDocCamera.forceManualCamera = false;
                            liveDocCamera.useHeic = false;
                            liveDocCamera.showBackOfDocumentAnimation = session.internal.isBack;

                            //Auto capture toggle optimizations
                            if (options.autoDetectConfig && options.autoDetectConfig.disableToggleTimeout > 0) {
                                liveDocCamera.toggleAutoCaptureDelay = options.autoDetectConfig.disableToggleTimeout;
                            }                            
                            if (options.autoDetectConfig && options.autoDetectConfig.disableToggle) {                                
                                options.autoDetectConfig.showToggleTimeout = 0;
                                liveDocCamera.showToggle = false;
                                if (liveDocCamera.texts) {
                                    liveDocCamera.texts.alertText = "";
                                }
                            }
                            if (options.autoDetectConfig && options.autoDetectConfig.showToggleTimeout > 0) {
                                liveDocCamera.toggleAutoCaptureDelay = DEFAULT_AUTO_CAPTURE_TOGGLE_DELAY; //remove delay to enable
                                if (liveDocCamera.texts) {
                                    smartCaptureAlertText = liveDocCamera.texts.alertText;
                                    liveDocCamera.texts.alertText = "";
                                }
                            }
                        }
                        getCameraPermission(true).then(r => {
                            if (r === ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED) {
                                addSmartDocEvents(captureDocCb);
                                liveDocCamera.isOpen = true;
                            } else {
                                onDone({ sdkError: r });
                            }
                        });
                    } else if (isDocBase) {
                        let acCamera = document.getElementById("acuant-camera");
                        if (acCamera) {
                            acCamera.style.display = "block";
                        }
                        log("Starting document base capture...");
                        getCameraPermission(true).then(r => {
                            if (r === ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED) {
                                try {
                                    window[CameraUiLib].start(captureCb, options.ui);
                                } catch (err) {
                                    onDone({ sdkError: ThalesThinLib.ENUM.SDK_ERROR });
                                }
                            } else {
                                onDone({ sdkError: r });
                            }
                        });                        
                    }
                } else {
                    if (isFaceSmart) {
                        log("Starting face smart capture...");
                        getCameraPermission(true).then((r) => {
                            if (r === ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED) {
                                let liveFaceCamera =
                                    document.getElementById("live-face-camera");
                                if (!liveFaceCamera) {
                                    onDone({ sdkError: ThalesThinLib.ENUM.SDK_CONFIG_ERROR });
                                } else {
                                    if (options.ui) {
                                        if (!liveFaceCamera.hints) {
                                            liveFaceCamera.hints = {};
                                        }
                                        if (options.ui.notInitializedHint) {
                                            liveFaceCamera.hints.notInitializedHint = options.ui.notInitializedHint;
                                        }
                                        if (options.ui.initializingHint) {
                                            liveFaceCamera.hints.initializingHint = options.ui.initializingHint;
                                        }
                                        if (options.ui.faceNotFoundHint) {
                                            liveFaceCamera.hints.faceNotFoundHint = options.ui.faceNotFoundHint;
                                        }
                                        if (options.ui.probabilityTooSmallHint) {
                                            liveFaceCamera.hints.probabilityTooSmallHint = options.ui.probabilityTooSmallHint;
                                        }
                                        if (options.ui.tooManyFacesHint) {
                                            liveFaceCamera.hints.tooManyFacesHint = options.ui.tooManyFacesHint;
                                        }
                                        if (options.ui.faceAngleTooLargeHint) {
                                            liveFaceCamera.hints.faceAngleTooLargeHint = options.ui.faceAngleTooLargeHint;
                                        }
                                        if (options.ui.faceTooSmallHint) {
                                            liveFaceCamera.hints.faceTooSmallHint = options.ui.faceTooSmallHint;
                                        }
                                        if (options.ui.faceCloseToBorderHint) {
                                            liveFaceCamera.hints.faceCloseToBorderHint = options.ui.faceCloseToBorderHint;
                                        }
                                    }
                                    addSmartFaceEvents(captureFaceCb);
                                    liveFaceCamera.isOpen = true;
                                }
                            } else {
                                onDone({ sdkError: r });
                            }
                        });

                    } else if (isFaceBase) {
                        log("Starting face base capture...");
                        getCameraPermission(true).then((r) => {
                            if (r === ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED) {
                                let liveFaceCamera =
                                    document.getElementById("acuant-face-capture-container");
                                if (!liveFaceCamera) {
                                    onDone({ sdkError: ThalesThinLib.ENUM.SDK_CONFIG_ERROR });
                                } else {
                                    let faceTexts = undefined;
                                    if (options.ui) {
                                        if (options.ui.faceNotFoundHint !== undefined || options.ui.faceNotFoundHint !== null ||
                                            options.ui.probabilityTooSmallHint !== undefined || options.ui.probabilityTooSmallHint !== null ||
                                            options.ui.tooManyFacesHint !== undefined || options.ui.tooManyFacesHint !== null ||
                                            options.ui.faceAngleTooLargeHint !== undefined || options.ui.faceAngleTooLargeHint !== null ||
                                            options.ui.faceTooSmallHint !== undefined || options.ui.faceTooSmallHint !== null ||
                                            options.ui.faceCloseToBorderHint !== undefined || options.ui.faceCloseToBorderHint !== null) {
                                            faceTexts = {
                                                FACE_NOT_FOUND: options.ui.faceNotFoundHint,
                                                TOO_MANY_FACES: options.ui.tooManyFacesHint,
                                                FACE_ANGLE_TOO_LARGE: options.ui.faceAngleTooLargeHint,
                                                PROBABILITY_TOO_SMALL: options.ui.probabilityTooSmallHint, 
                                                FACE_TOO_SMALL: options.ui.faceTooSmallHint,
                                                FACE_CLOSE_TO_BORDER: options.ui.faceCloseToBorderHint,
                                            }
                                        }
                                    }
                                    try {
                                        window[CameraUiLibFace].start(captureFaceCb, faceTexts);
                                    } catch (err) {
                                        onDone({ sdkError: ThalesThinLib.ENUM.SDK_ERROR });
                                    }
                                }
                            } else {
                                onDone({ sdkError: r });
                            }
                        });
                    }
                }
            } catch (exception) {
                log("Execution exception: " + exception)
                if (!session.internal) {
                    session.internal = {};
                }
                if (!session.internal.errors) {
                    session.internal.errors = {};
                }
                if (!session.internal.errors["EXECUTION_EXCEPTION"]) {
                    session.internal.errors["EXECUTION_EXCEPTION"] = 1;
                } else {
                    session.internal.errors["EXECUTION_EXCEPTION"]++;
                }
                reject(ThalesThinLib.ENUM.SDK_ERROR);
            }
        });
    }

    function captureBack() {
        const session = globalSession;
        session.internal.isBack = true;
        //If back-side is never captured or completley abandoned
        session.internal.worstErrorBack = ThalesThinLib.ENUM.NO_CAPTURE;
    }

    function captureDocumentDone(result) {
        const session = globalSession;
        if (session && session.internal) {
            session.internal.isDone = true;
            //Session has ended
            if (!session.internal.shouldDoFace) {
                if (window.sessionStorage) {
                    try {
                        window.sessionStorage.removeItem(STORETEMPID);
                    } catch (err) {
                        log("Cannot use session storage to remove Temp Log ID: " + err);
                    }
                }
            }
            session.internal.lastEvent = ThalesThinLib.ENUM.EVENT_VERIFICATION_DONE;
            session.internal.verifResult = result;

            //If enabled, use verification attempts
            if (session.internal.maxVerifAttempts > 0 && !!result) {
                session.internal.verifAttempts += 1;
                if (result === ThalesThinLib.ENUM.VERIFICATION_ACCEPTED) {
                    log("Verification attempts reset because it was accepted");
                    session.internal.verifAttempts = 0;
                    session.internal.worstErrorFace = ThalesThinLib.ENUM.NO_CAPTURE;
                }
            }
            //Reset document capture attempts
            session.internal.captureAttempts = 0;            
        }
    }

    function captureFaceDone(result) {
        const session = globalSession;
        if (session && session.internal) {
            session.internal.isFaceDone = true;
            session.internal.verifFaceResult = result;
            if (window.sessionStorage) {
                try {
                    window.sessionStorage.removeItem(STORETEMPID);
                } catch (err) {
                    log("Cannot use session storage to remove Temp Log ID: " + err);
                }
            }
            session.internal.lastEvent =
                ThalesThinLib.ENUM.EVENT_FACE_VERIFICATION_DONE;

            //Reset capture attempts
            session.internal.captureFaceAttempts = 0;
        }
    }

    function getSessionState() {
        const session = globalSession;
        if (!session || !session.internal) {
            return null;
        }
        return !!session.internal.isFaceDone
            ? ThalesThinLib.ENUM.STATE_FACE_DONE
            : !!session.internal.isFace
                ? ThalesThinLib.ENUM.STATE_FACE
                : !!session.internal.isDone
                    ? ThalesThinLib.ENUM.STATE_FRONT_BACK
                    : !!session.internal.isBack
                        ? ThalesThinLib.ENUM.STATE_BACK
                        : ThalesThinLib.ENUM.STATE_FRONT;
    }

    function getCaptures() {
        const session = globalSession;
        if (!session || !session.internal) {
            log("No session");
            return null;
        }
        const side = session.internal.isFace ? "Face" : "";
        const maxAttempts = session.internal["maxCapture" + side + "Attempts"];
        const attempts = session.internal["capture" + side + "Attempts"];
        if (
            maxAttempts === undefined ||
            maxAttempts === null ||
            attempts === undefined ||
            attempts === null
        ) {
            log("No capture attempts set");
            return {
                left: session.internal.isFace
                    ? DEFAULT_MAX_FACE_CAPTURES
                    : DEFAULT_MAX_CAPTURES,
                max: session.internal.isFace
                    ? DEFAULT_MAX_FACE_CAPTURES
                    : DEFAULT_MAX_CAPTURES,
            };
        }
        log("Captures left: " + (maxAttempts - attempts) + "/" + maxAttempts);
        return {
            left: maxAttempts - attempts,
            max: maxAttempts,
        };
    }

    function getVerifications() {
        const session = globalSession;
        if (!session || !session.internal) {
            log("No session");
            return null;
        }
        //verifResult or verifFaceResult
        const result = session.internal["verif" +
            (session.internal.isFace ? "Face" : "") +
            "Result"];
        const maxAttempts = session.internal.maxVerifAttempts;
        const attempts = session.internal.verifAttempts;
        if (
            maxAttempts === undefined ||
            maxAttempts === null ||
            attempts === undefined ||
            attempts === null
        ) {
            log("No verification attempts set");
            return {
                left: DEFAULT_MAX_VERIFICATIONS,
                max: DEFAULT_MAX_VERIFICATIONS
            };
        }
        log(
            "Verifications left: " +
            (maxAttempts - attempts) +
            "/" +
            maxAttempts +
            ", result: " +
            result
        );
        return {
            left: maxAttempts - attempts,
            max: maxAttempts,
            result: result,
        };
    }

    function setLogData(data) {
        const session = globalSession;
        if (session && session.internal) {
            if (
                !data ||
                typeof data !== "object" ||
                !data.key ||
                !data.value ||
                typeof data.key !== "string" ||
                typeof data.value !== "string" ||
                data.value.length > 100 ||
                data.key.length > 100
            ) {
                log(
                    "Can only store an object {key, value} with fields up to 100 char string"
                );
                return;
            }
            if (!session.internal.extData) {
                session.internal.extData = [];
            }
            //Override existing
            for (let i = 0; i < session.internal.extData.length; ++i) {
                if (session.internal.extData[i].key === data.key) {
                    session.internal.extData[i].value = data.value;
                    return;
                }
            }
            //Or create new
            session.internal.extData.push(data);
        }
    }

    function getBestResultImage(side, encrypted) {
        const session = globalSession;
        if (!session) {
            log("No session object");
            return null;
        }
        if (!session.internal) {
            log("No internal field in session object");
            return null;
        }
        let label = session.internal.isFace
            ? "bestResultFace"
            : session.internal.isBack
                ? "bestResultBack"
                : "bestResult";
        let isUncroppedLabel = session.internal.isFace
            ? false
            : session.internal.isBack
                ? "isUncroppedBack"
                : "isUncropped"

        !session.internal.isBack ? "isUncropped" : "isUncroppedBack"
        //choose explicit
        if (side && typeof side === "string") {
            if (side.toUpperCase() === "FRONT") {
                label = "bestResult";
                isUncroppedLabel = "isUncropped";
            } else if (side.toUpperCase() === "BACK") {
                label = "bestResultBack";
                isUncroppedLabel = "isUncroppedBack";
            } else if (side.toUpperCase() === "FACE") {
                label = "bestResultFace";
                isUncroppedLabel = false;
            }
        }
        if (!session.internal[label]) {
            log("No result for: " + label);
            return null;
        }
        if (!session.internal[label].image) {
            log("No image for result for: " + label);
            return null;
        }
        if (encrypted) {
            return session.internal[label].encryptedFile;
        } else {
            return (isUncroppedLabel && !!session.internal[isUncroppedLabel])
                ? session.internal[label].image.uncropped.split(",", 2)[1]
                : session.internal[label].image.data.split(",", 2)[1];
        }
    }

    function getBestResultDetails(side) {
        const session = globalSession;
        if (!session || !session.internal) {
            return null;
        }
        let label = session.internal.isFace
            ? "bestResultFace"
            : session.internal.isBack
                ? "bestResultBack"
                : "bestResult";
        //choose explicit
        if (side && typeof side === "string") {
            if (side.toUpperCase() === "FRONT") {
                label = "bestResult";
            } else if (side.toUpperCase() === "BACK") {
                label = "bestResultBack";
            } else if (side.toUpperCase() === "FACE") {
                label = "bestResultFace";
            }
        }
        let safeCopyExtra = null;
        try {
            safeCopyExtra = JSON.parse(JSON.stringify(session.internal[label].extra))
        } catch { }
        return !session.internal[label]
            ? null
            : {
                width: session.internal[label].image
                    ? session.internal[label].image.width
                    : null,
                height: session.internal[label].image
                    ? session.internal[label].image.height
                    : null,
                sharpness: session.internal[label].sharpness,
                glare: session.internal[label].glare,
                dpi: session.internal[label].dpi,
                moire: session.internal[label].moire,
                isPortraitOrientation: session.internal[label].isPortraitOrientation,
                size:
                    !!session.internal[label].image &&
                        !!session.internal[label].image.data
                        ? session.internal[label].image.data.length
                        : null,
                extra: safeCopyExtra,
            };
    }

    function getSessionPreviewImage(side) {
        const session = globalSession;
        if (!session || !session.internal) {
            return null;
        }
        let label = session.internal.isFace ?
            "previewImageFace" :
            !session.internal.isBack ?
                "previewImage" :
                "previewImageBack";
        //choose explicit
        if (side && typeof side === "string") {
            if (side.toUpperCase() === "FACE") {
                label = "previewImageFace";
            } else if (side.toUpperCase() === "BACK") {
                label = "previewImageBack";
            } else {
                label = "previewImage";
            }
        }
        return session.internal[label];
    }

    function getLog() {
        const session = globalSession;
        if (!session || !session.internal) {
            return {};
        }
        buildLog();
        return session.internal.logJson;
    }
    function buildLog() {
        const session = globalSession;
        if (!session || !session.internal) {
            return {};
        }
        const sessionObj = session.internal;
        session.internal.logJson = {
            id: sessionObj.id,
            version: VERSION,
            internalSdkVersion: sessionObj.sdkVersion,
            internalSdkVersionFace: sessionObj.sdkVersionFace,
            lastEvent: sessionObj.lastEvent,
            uiShown: sessionObj.uiShown,
            isDetectInit: sessionObj.isDetectInit,
            initTime: sessionObj.initTime,
            finalAttempt: sessionObj.finalAttempt,
            sdkAttempts: sessionObj.sdkAttempts,
            maxSdkAttempts: sessionObj.maxSdkAttempts,
            isUncropped: sessionObj.isUncropped,
            isUncroppedBack: sessionObj.isUncroppedBack,
            worstError: sessionObj.worstError,
            worstErrorBack: sessionObj.worstErrorBack,
            worstErrorFace: sessionObj.worstErrorFace,
            captureTime: sessionObj.captureTime,
            captureTimeBack: sessionObj.captureTimeBack,
            captureTimeFace: sessionObj.captureTimeFace,
            processTime: sessionObj.processTime,
            processTimeBack: sessionObj.processTimeBack,
            processTimeFace: sessionObj.processTimeFace,
            lastError: sessionObj.lastError,
            errors: sessionObj.errors,
            isBack: sessionObj.isBack,
            isFace: sessionObj.isFace,
            isDone: sessionObj.isDone,
            isFaceDone: sessionObj.isFaceDone,
            timestamp: sessionObj.timestamp,
            autoDetection: sessionObj.detection,
            autoDetectionBack: sessionObj.detectionBack,
            autoDetectionFace: sessionObj.detectionFace,
            options: sessionObj.options,
            captureDetails: getBestResultDetails("FRONT"),
            captureDetailsBack: getBestResultDetails("BACK"),
            captureDetailsFace: getBestResultDetails("FACE"),
            captureAttempts: sessionObj.captureAttempts,
            maxCaptureAttempts: sessionObj.maxCaptureAttempts,
            captureFaceAttempts: sessionObj.captureFaceAttempts,
            maxCaptureFaceAttempts: sessionObj.maxCaptureFaceAttempts,
            externalData: sessionObj.extData,
            verificationAttempts: sessionObj.verifAttempts,
            maxVerificationAttempts: sessionObj.maxVerifAttempts,
            verificationFaceAttempts: sessionObj.verifAttempts,
            maxVerificationFaceAttempts: sessionObj.maxVerifAttempts,
            verificationResult: sessionObj.verifResult,
            verificationFaceResult: sessionObj.verifFaceResult,
            device: sessionObj.device,
            camera: sessionObj.camera,
        };
    }

    function initSdk(config, force) {
        return new Promise((resolve, reject) => {
            const session = newSession(null);
            //Check if already initialized
            if (isSdkInitialized && force !== true) {
                log("SDK already initialized");
                return Promise.resolve();
            }
            let opt = config ? config.init : null;
            if (!opt) {
                log("SDK initializations requires an config.init object");
                Promise.reject(ThalesThinLib.ENUM.SDK_CONFIG_ERROR);
                return;
            }
            let startTime = Date.now();
            const SmartCaptureLib = "SmartCaptureLib";
            let CameraLib = opt.smartCaptureDocument
                ? SmartCaptureLib
                : "AcuantCamera";
            let FaceCaptureLib = opt.smartCaptureFace
                ? SmartCaptureLib
                : "AcuantPassiveLiveness";
            const rootUrl = window.location.href.substring(
                0,
                window.location.href.lastIndexOf("/") + 1
            );
            //Smart capture SDK path, loaded as a package            
            const SmartCaptureLibPath = "@gbgplc/smartcapture-web" + (
                opt.onlyDocument ? "/document" : opt.onlyFace ? "/face" : "");

            //Base SDK path, loaded as a script
            let baseSdkPath = !opt.baseSdkPath ? rootUrl + "/webSdk/dist/" : opt.baseSdkPath;
            if (baseSdkPath.substring(baseSdkPath.length - 1) !== "/") {
                baseSdkPath += "/";
            }

            const fillRootColor = opt.fillRootColor || "black";
            const zIndexRoot = opt.zIndex || 1000;
            let CameraLibPath = opt.smartCaptureDocument
                ? SmartCaptureLibPath
                : baseSdkPath + "AcuantCamera.min.js" + "?" + VERSION;
            let FaceCaptureLibPath = opt.smartCaptureFace
                ? SmartCaptureLibPath
                : baseSdkPath + "AcuantPassiveLiveness.min.js" + "?" + VERSION;
            let OpenCvLibPath = baseSdkPath + "opencv.min.js" + "?" + VERSION;
            let CoreLibPath =
                baseSdkPath + "AcuantJavascriptWebSdk.min.js" + "?" + VERSION;
            let InitWorkLibPath =
                baseSdkPath + "AcuantInitializerWorker.min.js" + "?" + VERSION;
            let ImgWorkLibPath =
                baseSdkPath + "AcuantImageWorker.min.js" + "?" + VERSION;
            let MetWorkLibPath =
                baseSdkPath + "AcuantMetricsWorker.min.js" + "?" + VERSION;

            let libLoad = null;
            let libFaceCapture = null;
            let libOpenCv = null;
            session.internal.isDetectInit = false;
            session.internal.id = session.internal.id || getLogId(opt.channel, false);
            session.internal.worstError =
                session.internal.worstErrorBack =
                session.internal.worstErrorFace =
                ThalesThinLib.ENUM.SDK_INIT_ERROR;
            session.internal.lastEvent = session.internal.lastEvent ?
                session.internal.lastEvent :
                ThalesThinLib.ENUM.EVENT_INIT;
            let retryTime = opt.retryTimeout > 0 ? opt.retryTimeout : 500;
            let retries = opt.maxRetries !== undefined ? opt.maxRetries : 3;
            //For simplicity always set a global object
            if (!window["acuantConfig"]) {
                window.acuantConfig = {};
            }
            window.acuantConfig.path = baseSdkPath;
            if (!isNaN(opt.jpegQuality)) {
                window.acuantConfig.jpegQuality = opt.jpegQuality;
            } else {
                //Default JPEG Quality set to 90%
                window.acuantConfig.jpegQuality = opt.jpegQuality = DEFAULT_DOC_QUALITY;
            }
            log("SDK initializing...");
            checkDeviceModel().then((dm) => {
                deviceModel = dm;
                //if slow mode is a list of devices decice its value
                if (Array.isArray(opt.slowMode)) {
                    opt.slowMode = true; //conservative
                    for (let i = 0; i < opt.slowMode.length; ++i) {
                        const dm = opt.slowMode[i];
                        if (
                            dm &&
                            deviceModel &&
                            dm.trim().toLowerCase() === deviceModel.trim().toLowerCase()
                        ) {
                            opt.slowMode = true;
                            break;
                        }
                    }
                }
                //Build object URLs for load from CDN option
                if (
                    !!opt.fromCDN &&
                    !window.acuantConfig.cdnPath &&
                    !opt.onlyFace &&
                    !opt.smartCaptureDocument
                ) {
                    try {
                        const initTxt =
                            'importScripts("' +
                            window.acuantConfig.path +
                            "/" +
                            InitWorkLibPath +
                            '")';
                        const initUrl = URL.createObjectURL(new Blob([initTxt]));
                        const imageTxt =
                            'importScripts("' +
                            window.acuantConfig.path +
                            "/" +
                            ImgWorkLibPath +
                            '")';
                        const imageUrl = URL.createObjectURL(new Blob([imageTxt]));
                        const metricsTxt =
                            'importScripts("' +
                            window.acuantConfig.path +
                            "/" +
                            MetWorkLibPath +
                            '")';
                        const metricsUrl = URL.createObjectURL(new Blob([metricsTxt]));
                        window.acuantConfig.cdnPath = {
                            initializerUrl: initUrl,
                            imageUrl: imageUrl,
                            metricsUrl: metricsUrl,
                        };
                    } catch (err) {
                        log("Failed to build URL for worker scripts");
                        reject(ThalesThinLib.ENUM.SDK_CONFIG_ERROR);
                        return;
                    }
                }

                //SDK Init callback function
                const callback = {
                    onSuccess: function () {
                        let sw = Date.now();
                        try {
                            AcuantJavascriptWebSdk.end();
                        } catch (err) {
                            log("Warning! Ending workers before restarting: " + err);
                        }
                        AcuantJavascriptWebSdk.start(loadFun, !!opt.slowMode);
                        log(
                            "SDK Initialized. Workers started: " +
                            (!opt.slowMode ? 2 : 1) +
                            ". Took " +
                            (Date.now() - sw) +
                            "ms"
                        );
                    },
                    onFail: function (code, description) {
                        log(
                            "SDK initialization failed with " + code + "[" + description + "]"
                        );
                        if (retries <= 0) {
                            reject(
                                ThalesThinLib.ENUM.SDK_INIT_ERROR,
                                code + "|" + description
                            );
                            return;
                        }
                        --retries;
                        log("Retrying SDK initialization (" + retries + " retries left)");
                        window.setTimeout(() => {
                            doInit(opt);
                        }, retryTime);
                    },
                };

                //SDK start function,
                const loadFun = () => {
                    //Slow loading means wait all libraries to load
                    const libList = [libLoad, libFaceCapture, libOpenCv];
                    Promise.all(libList)
                        .then(() => {
                            if (opt.onlyFace) {
                                session.internal.worstErrorFace = ThalesThinLib.ENUM.NO_CAPTURE;
                            } else {
                                session.internal.worstError = ThalesThinLib.ENUM.NO_CAPTURE;
                            }
                            isSdkInitialized = true;
                            session.internal.initTime = Date.now() - startTime;
                            resolve();
                        })
                        .catch(() => {
                            reject(ThalesThinLib.ENUM.SDK_INIT_ERROR);
                        });
                };

                //Handle unexpected errors during initialization
                const unexpErrorInit = (errorMsg) => {
                    log("SDK Unexpected Error: " + errorMsg);
                    reject(ThalesThinLib.ENUM.SDK_INIT_ERROR);
                };

                function doInit(opt) {
                    try {
                        if (
                            (!opt.smartCaptureDocument && !opt.onlyFace) ||
                            (!opt.smartCaptureFace && !opt.onlyDocument)
                        ) {
                            if (!opt.basicAuth && !opt.jwt) {
                                log("SDK requires basic authentication or a JWT");
                                reject(ThalesThinLib.ENUM.SDK_CONFIG_ERROR);
                            } else if (!opt.endpoint) {
                                log("SDK requires an endpoint to initialize");
                                reject(ThalesThinLib.ENUM.SDK_CONFIG_ERROR);
                            } else if (!!opt.basicAuth) {
                                AcuantJavascriptWebSdk.initialize(
                                    opt.basicAuth,
                                    opt.endpoint,
                                    callback,
                                    !!opt.fromCDN ? 1 : 0
                                );
                            } else {
                                AcuantJavascriptWebSdk.initializeWithToken(
                                    opt.jwt,
                                    opt.endpoint,
                                    callback,
                                    !!opt.fromCDN ? 1 : 0
                                );
                            }
                        } else {
                            loadFun();
                        }
                    } catch (err) {
                        log(
                            "Error during doInit function, likely AcuantJavascriptWebSdk.initXXX: " +
                            err
                        );
                        reject(ThalesThinLib.ENUM.SDK_INIT_ERROR);
                    }
                }

                //Load Camera SDK Libs
                function loadLibs() {
                    //At this point, AcuantJavascriptWebSdk should be loaded, so set error handling
                    if (
                        window.AcuantJavascriptWebSdk &&
                        window.AcuantJavascriptWebSdk.setUnexpectedErrorCallback
                    ) {
                        AcuantJavascriptWebSdk.setUnexpectedErrorCallback(unexpErrorInit);
                    }
                    libLoad = !opt.onlyFace
                        ? new Promise((libRes, libRej) => {
                            if (window[CameraLib]) {
                                libRes();
                                return;
                            }
                            if (opt.smartCaptureDocument) {
                                let liveDocCamera = document.getElementById("live-document-camera");
                                if (!liveDocCamera) {
                                    liveDocCamera = createSmartDocumentLiveCameraHTML(
                                        zIndexRoot,
                                        fillRootColor,
                                        opt.debugBorders);
                                }
                                import(CameraLibPath)
                                    .then((module) => {
                                        if (!module || !module.LiveDocumentCamera) {
                                            log("Failed to load doc capture module");
                                            libRej();
                                            return;
                                        }
                                        log(CameraLibPath + " loaded");
                                        window[CameraLib] = module;
                                        try {
                                            window[
                                                CameraLib
                                            ].SmartCaptureModule.getInstance().init();
                                        } catch (e) {
                                            log(
                                                "Error initializing smart capture module, but will continue: " +
                                                e
                                            );
                                        }
                                        libRes();
                                    })
                                    .catch((err) => {
                                        log(
                                            "Warning! " + CameraLibPath + " failed to load:" + err
                                        );
                                        libRej();
                                    });
                            } else {
                                const camScr = document.createElement("script");
                                camScr.src = CameraLibPath;
                                camScr.onload = () => {
                                    log(CameraLibPath + " loaded");
                                    libRes();
                                };
                                camScr.onerror = (err) => {
                                    log("Error, " + CameraLibPath + " failed to load:" + err);
                                    libRej();
                                };
                                document.body.appendChild(camScr);
                            }
                        })
                        : Promise.resolve();

                    // Face lib       
                    libFaceCapture = !opt.onlyDocument
                        ? new Promise((libRes, libRej) => {
                            if (window[FaceCaptureLib]) {
                                libRes();
                                return;
                            }
                            if (opt.smartCaptureFace) {
                                let liveFaceCamera = document.getElementById("live-face-camera");
                                if (!liveFaceCamera) {
                                    liveFaceCamera = createSmartFaceLiveCameraHTML(
                                        zIndexRoot,
                                        fillRootColor,
                                        opt.isDebug);
                                }
                                import(FaceCaptureLibPath)
                                    .then((module) => {
                                        if (!module || !module.LiveFaceCamera) {
                                            log("Failed to load face capture module");
                                            libRej();
                                            return;
                                        }
                                        log(FaceCaptureLibPath + " loaded");
                                        window[FaceCaptureLib] = module;
                                        const onDetectorInitialized = () => {
                                            session.internal.isDetectInit = true;
                                            log("Face detection initialized");
                                            if (opt.slowLoadTimeout > 0) {
                                                //Detector initialization is mandatory
                                                libRes();
                                            }
                                        };
                                        liveFaceCamera.removeEventListener(
                                            module.LiveFaceCamera.InitializeEventName,
                                            onDetectorInitialized
                                        );
                                        liveFaceCamera.addEventListener(
                                            module.LiveFaceCamera.InitializeEventName,
                                            onDetectorInitialized
                                        );
                                        if (!opt.slowLoadTimeout || opt.slowLoadTimeout <= 0) {
                                            libRes();
                                        } else if (opt.slowLoadTimeout > 0) {
                                            window.setTimeout(() => {
                                                if (!session.internal.isDetectInit) {
                                                    log("Face detection didn't initialize on time");
                                                    libRej();
                                                }
                                            }, opt.slowLoadTimeout);
                                        }
                                    })
                                    .catch((err) => {
                                        log(
                                            "Warning! " +
                                            FaceCaptureLibPath +
                                            " failed to load:" +
                                            err
                                        );
                                        libRej();
                                    });
                            } else {
                                const faceSrc = document.createElement("script");
                                faceSrc.onload = () => {
                                    log(FaceCaptureLibPath + " loaded");
                                    libRes();
                                };
                                faceSrc.onerror = (err) => {
                                    log(
                                        "Warning! " +
                                        FaceCaptureLibPath +
                                        " failed to load:" +
                                        err
                                    );
                                    libRej();
                                };
                                faceSrc.src = FaceCaptureLibPath;
                                document.body.appendChild(faceSrc);
                            }
                        })
                        : Promise.resolve();
                    libOpenCv = !opt.onlyDocument && !opt.smartCaptureFace
                        ? new Promise((libRes, libRej) => {
                            if (window.cv) { //global object for opencv.min.js
                                libRes();
                                return;
                            }
                            const openCvSrc = document.createElement("script");
                            openCvSrc.onload = () => {
                                log(OpenCvLibPath + " loaded");
                                libRes();
                            };
                            openCvSrc.onerror = (err) => {
                                log(
                                    "Warning! " +
                                    OpenCvLibPath +
                                    " failed to load:" +
                                    err
                                );
                                libRej();
                            };
                            openCvSrc.src = OpenCvLibPath;
                            document.body.appendChild(openCvSrc);
                        })
                        : Promise.resolve();
                }

                if (
                    ((opt.smartCaptureDocument || opt.onlyFace) &&
                        (opt.smartCaptureFace || opt.onlyDocument)) ||
                    !!window.AcuantJavascriptWebSdk
                ) {
                    //AcuantJavascriptWebSdk loaded or not required
                    loadLibs();
                    doInit(opt, retries, retryTime);
                } else {
                    //Load AcuantJavascriptWebSdk
                    let scr = document.createElement("script");
                    scr.src = CoreLibPath;
                    scr.onload = () => {
                        log("Loaded " + CoreLibPath);
                        window.loadAcuantSdk();
                        loadLibs();
                        doInit(opt, retries, retryTime);
                    };
                    scr.onerror = (err) => {
                        log("Error, failed to load " + CoreLibPath + ":" + err);
                        reject(ThalesThinLib.ENUM.SDK_CONFIG_ERROR);
                    };
                    document.body.appendChild(scr);
                }
            });
        });
    }

    function createSmartFaceLiveCameraHTML(zIndexRoot, fillRootColor, isDebug, debugBorders) {
        const liveFaceCamera = document.createElement("live-face-camera");
        liveFaceCamera.id = "live-face-camera";
        liveFaceCamera.style.position = "fixed";
        liveFaceCamera.style.width = "100%";
        liveFaceCamera.style.height = "100%";
        liveFaceCamera.style.top = 0;
        liveFaceCamera.style.left = 0;
        liveFaceCamera.style.right = 0;
        liveFaceCamera.style.bottom = 0;
        liveFaceCamera.style.padding = 0;
        liveFaceCamera.style.margin = 0;
        liveFaceCamera.style.backgroundColor = fillRootColor;
        liveFaceCamera.style.zIndex = zIndexRoot;
        liveFaceCamera.style.display = "none";
        if (isDebug) {
            liveFaceCamera.setAttribute('environment', 'development');
        } else {
            liveFaceCamera.setAttribute('environment', 'production');
        }
        if (debugBorders) {
            liveFaceCamera.style.border = "2px solid purple";
            liveFaceCamera.style.border = "2px solid yellow";
            liveFaceCamera.style.border = "2px solid red";
        }
        window.document.body.appendChild(liveFaceCamera);
        return liveFaceCamera;
    }

    function createBaseFaceLiveCameraHTML(zIndexRoot, fillRootColor, debugBorders) {
        const liveFaceCamera = document.createElement("div");
        liveFaceCamera.id = "acuant-face-capture-container";
        liveFaceCamera.style.position = "fixed";
        liveFaceCamera.style.width = "100%";
        liveFaceCamera.style.height = "100%";
        liveFaceCamera.style.top = 0;
        liveFaceCamera.style.left = 0;
        liveFaceCamera.style.right = 0;
        liveFaceCamera.style.bottom = 0;
        liveFaceCamera.style.padding = 0;
        liveFaceCamera.style.margin = 0;
        liveFaceCamera.style.backgroundColor = fillRootColor;
        liveFaceCamera.style.zIndex = zIndexRoot;
        liveFaceCamera.style.display = "none";
        if (debugBorders) {
            liveFaceCamera.style.border = "2px solid purple";
            liveFaceCamera.style.border = "2px solid yellow";
            liveFaceCamera.style.border = "2px solid red";
        }
        const liveFaceCameraText = document.createElement("div");
        liveFaceCameraText.id = "thales-face-detection-text";
        liveFaceCameraText.position = 'relative';        
        liveFaceCameraText.zIndex = zIndexRoot + 1;
        liveFaceCameraText.style.marginTop = 50;
        liveFaceCameraText.style.fontSize = 'x-large';
        liveFaceCameraText.style.justifyItems = 'center';
        liveFaceCameraText.style.alignItems = 'center';
        liveFaceCameraText.style.display = "none";
        liveFaceCamera.appendChild(liveFaceCameraText);
        window.document.body.appendChild(liveFaceCamera);
        return liveFaceCamera;
    }

    function createSmartDocumentLiveCameraHTML(zIndexRoot, fillRootColor, debugBorders) {
        const liveDocCamera = document.createElement("live-document-camera");
        liveDocCamera.id = "live-document-camera";
        liveDocCamera.style.position = "fixed";
        liveDocCamera.style.width = "100%";
        liveDocCamera.style.height = "100%";
        liveDocCamera.style.top = 0;
        liveDocCamera.style.left = 0;
        liveDocCamera.style.right = 0;
        liveDocCamera.style.bottom = 0;
        liveDocCamera.style.padding = 0;
        liveDocCamera.style.margin = 0;
        liveDocCamera.style.backgroundColor = fillRootColor;
        liveDocCamera.style.zIndex = zIndexRoot;
        liveDocCamera.style.display = "none";
        if (debugBorders) {
            liveFaceCamera.style.border = "2px solid purple";
            liveFaceCamera.style.border = "2px solid yellow";
            liveFaceCamera.style.border = "2px solid red";
        }
        window.document.body.appendChild(liveDocCamera);
        return liveDocCamera;
    }


    function getWorstCode(currCode, newCode) {
        const max_errors = 100;
        function weightErr(code) {
            switch (code) {
                //SDK has a valid upload of the image at least once
                case ThalesThinLib.ENUM.IMAGE_UPLOADED:
                    return max_errors - 9;
                case ThalesThinLib.ENUM.LOW_SHARPNESS:
                    return max_errors - 10;
                case ThalesThinLib.ENUM.HIGH_GLARE:
                    return max_errors - 11;
                case ThalesThinLib.ENUM.LOW_RES:
                    return max_errors - 11;
                case ThalesThinLib.ENUM.ERROR_CROP:
                    return max_errors - 12;
                //User doesn't complete the flow even once
                case ThalesThinLib.ENUM.ERROR_TIMEOUT:
                    return max_errors - 13;
                case ThalesThinLib.ENUM.ERROR_CLOSE_BTN:
                    return max_errors - 14;
                case ThalesThinLib.ENUM.BROWSER_NOT_SUPPORTED:
                case ThalesThinLib.ENUM.SDK_ERROR:
                    return max_errors - 15;
                case ThalesThinLib.ENUM.SDK_FAILED:
                    return max_errors - 16;
                case ThalesThinLib.ENUM.CAMERA_PARAMS_ERR:
                    return max_errors - 18;
                case ThalesThinLib.ENUM.CAMERA_ISSUE:
                    return max_errors - 19;
                case ThalesThinLib.ENUM.CAMERA_PERMISSIONS_DENIED:
                case ThalesThinLib.ENUM.CAMERA_PERMISSIONS_UNKNOWN:
                    return max_errors - 20;      
                case ThalesThinLib.ENUM.NO_CAPTURE:
                    return max_errors - 22;
                case ThalesThinLib.ENUM.SDK_INIT_ERROR:
                    return max_errors - 23;
                case ThalesThinLib.ENUM.SDK_CONFIG_ERROR:
                    return max_errors - 24;
                default:
                    return 0;
            }
        }
        let code1Score = weightErr(currCode);
        let code2Score = weightErr(newCode);
        return code1Score > code2Score ? currCode : newCode;
    }

    function getInternalSession(sizeOnly) {
        return sizeOnly ? JSON.stringify(globalSession).length : globalSession;
    }

    function errorMessageUi(errMsg, options) {
        const session = globalSession;
        return new Promise((resolve) => {
            if (errMsg === null || errMsg === undefined) {
                log("Error Message UI has no error to show. Dismissing");
                let rootEl = document.getElementById("thales-errorui-root");
                if (rootEl) {
                    rootEl.style.display = "none";
                }
                resolve();
                return;
            }
            const fillRootColor = options.fillRootColor || "black";
            const zIndexRoot = options.zIndex || 900;

            let rootEl = document.getElementById("thales-errorui-root");
            if (!rootEl) {
                rootEl = document.createElement("div");
                rootEl.id = "thales-errorui-root";
                rootEl.style.position = "fixed";
                rootEl.style.width = "100%";
                rootEl.style.height = "100%";
                rootEl.style.top = 0;
                rootEl.style.left = 0;
                rootEl.style.right = 0;
                rootEl.style.padding = 0;
                rootEl.style.margin = 0;
                rootEl.style.backgroundColor = fillRootColor;
                rootEl.style.zIndex = zIndexRoot;
                document.body.appendChild(rootEl);
            }
            let canvas = document.getElementById("thales-errorui-canvas");
            if (!canvas) {
                canvas = document.createElement("canvas");
                canvas.id = "thales-errorui-canvas";
                canvas.style.position = "fixed";
                canvas.style.transform = "translate(-50%, -50%)";
                canvas.style.top = "50%";
                canvas.style.left = "50%";
                canvas.style.padding = 0;
                canvas.style.margin = 0;
                canvas.style.zIndex = zIndexRoot + 1;
                rootEl.appendChild(canvas);
            }
            canvas.height = Math.max(window.innerWidth, window.innerHeight);
            canvas.width = Math.min(window.innerWidth, window.innerHeight);

            let image = document.getElementById("thales-errorui-image");
            if (!image) {
                image = document.createElement("img");
                image.id = "thales-errorui-image";
                image.style.position = "fixed";
                image.style.margin = 0;
                image.style.width = "100%";
                image.style.height = "100%";
                image.style.zIndex = zIndexRoot;
                image.alt = "";
                rootEl.appendChild(image);
            }
            if (options.fillImage) {
                image.style.transform = "";
                image.style.top = 0;
                image.style.left = 0;
                image.style.padding = 0;
                image.style.objectFit = "fill";
            } else {
                image.style.transform = "translate(-50%, -50%)";
                image.style.top = "50%";
                image.style.left = "50%";
                image.style.padding = options.imagePadding || "5%";
                image.style.objectFit = "contain";
            }

            //Add close button
            let actionButton = document.getElementById("thales-errorui-action");
            if (!actionButton) {
                actionButton = document.createElement("div");
                actionButton.id = "thales-errorui-action";
                actionButton.style.position = "fixed";
                actionButton.style.right = "6vw";
                actionButton.style.top = "2vh";
                actionButton.style.textShadow = "0 0 4px black";
                actionButton.style.color = "white";
                actionButton.style.fontSize = options.textSize || "20px";
                actionButton.style.userSelect = "none";
                actionButton.style.textSizeAdjust = "100%";
                actionButton.style.zIndex = zIndexRoot + 2;
                rootEl.appendChild(actionButton);
            }
            let actionButtonAlt = document.getElementById(
                "thales-errorui-action-alt"
            );
            if (!actionButtonAlt) {
                actionButtonAlt = document.createElement("div");
                actionButtonAlt.id = "thales-errorui-action-alt";
                actionButtonAlt.style.position = "fixed";
                actionButtonAlt.style.left = "6vw";
                actionButtonAlt.style.top = "2vh";
                actionButtonAlt.style.textShadow = "0 0 4px black";
                actionButtonAlt.style.color = "white";
                actionButtonAlt.style.fontSize = options.textSize || "20px";
                actionButtonAlt.style.userSelect = "none";
                actionButtonAlt.style.textSizeAdjust = "100%";
                actionButtonAlt.style.zIndex = zIndexRoot + 2;
                rootEl.appendChild(actionButtonAlt);
            }

            //Show borders for debugging purposes
            if (options.init && options.init.debugBorders) {
                rootEl.style.border = "2px solid purple";
                canvas.style.border = "2px solid yellow";
                actionButton.style.border = "2px solid blue";
                actionButtonAlt.style.border = "2px solid blue";
            }

            rootEl.style.display = "block";
            canvas.style.display = "block";
            actionButton.style.display = "none";
            actionButtonAlt.style.display = "none";
            image.style.display = "none";

            let canvasCtx = canvas.getContext("2d");
            //let side = options.isPhoto ? "PHOTO" : null;
            const imgData = options.imageSrc
                ? options.imageSrc
                : getSessionPreviewImage();

            if (imgData) {
                image.style.display = "block";
                image.onload = () => {
                    drawText(errMsg);
                    enableAction();
                };
                image.src = imgData;
            } else {
                drawText(errMsg);
                enableAction();
            }

            function enableAction() {
                if (options.actionButtonText) {
                    actionButton.style.display = "block";
                    actionButton.innerHTML = options.actionButtonText;
                    actionButton.onclick = () => {
                        log("Action button pressed");
                        rootEl.style.display = "none";
                        resolve(true);
                    };
                    if (options.actionButtonAltText) {
                        actionButtonAlt.style.display = "block";
                        actionButtonAlt.innerHTML = options.actionButtonAltText;
                        actionButtonAlt.onclick = () => {
                            log("Action button (alt) pressed");
                            rootEl.style.display = "none";
                            resolve(false);
                        };
                    }
                } else {
                    actionButton.style.display = "none";
                    actionButtonAlt.style.display = "none";
                    resolve();
                }
            }

            function drawText(text) {
                canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                if (!text) return;
                const fontSizeMod = options.fontSizePercentage || 0.03;
                let fontSize = Math.ceil(
                    Math.max(canvas.width, canvas.height) * fontSizeMod
                );
                canvasCtx.font = fontSize + "px Sans-serif";
                let measured = canvasCtx.measureText(text);
                let x = (canvas.width - measured.width) / 2;
                let y = canvas.height / 2;
                let offset = Math.max(canvas.width, canvas.height) * 0.01;
                canvasCtx.fillStyle = "rgba(0, 0, 0, 0.75)";
                canvasCtx.fillRect(
                    Math.round(x - offset),
                    Math.round(y + offset),
                    Math.round(measured.width + 2 * offset),
                    -Math.round(fontSize + offset)
                );
                canvasCtx.fillStyle = "#ffffff";
                canvasCtx.fillText(text, x, y);
            }
        });
    }

    function decodeBase64(base64) {
        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        const lookup = new Uint8Array(256);
        for (var i = 0; i < chars.length; i++) {
            lookup[chars.charCodeAt(i)] = i;
        }
        let bufferLength = base64.length * 0.75;
        let len = base64.length;
        let p = 0;
        let encoded1, encoded2, encoded3, encoded4;

        let arraybuffer = new ArrayBuffer(bufferLength);
        let bytes = new Uint8Array(arraybuffer);

        for (let i = 0; i < len; i += 4) {
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];

            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }

        return arraybuffer;
    }

    function checkDeviceModel() {
        //Get screen size based device model
        function screenSize() {
            if (!window.screen || !window.screen.width || !window.screen.height) {
                return platform();
            }
            let dims = [window.screen.width, window.screen.height];
            let long = Math.max(...dims);
            let short = Math.min(...dims);
            return platform() + "-" + long + "-" + short;
        }
        return new Promise((resolve) => {
            //Get device model
            if (
                window.navigator &&
                window.navigator.userAgentData &&
                window.navigator.userAgentData.getHighEntropyValues
            ) {
                window.navigator.userAgentData
                    .getHighEntropyValues(["model"])
                    .then((dm) => {
                        if (!dm) {
                            resolve(screenSize());
                        } else {
                            log("Got device attributes: " + JSON.stringify(dm));
                            if (typeof dm === "string") {
                                resolve(dm);
                            } else if (typeof dm.model === "string") {
                                resolve(dm.model);
                            } else {
                                resolve(screenSize());
                            }
                        }
                    })
                    .catch((err) => {
                        log("Couldn't retrieve device attributes: " + err);
                        resolve(screenSize());
                    });
            } else {
                resolve(screenSize());
            }
        });
    }

    async function getCameraPermission(checkFirst) {
        if (
            !window.navigator ||
            !window.navigator.mediaDevices ||
            !window.navigator.mediaDevices.getUserMedia
        ) {
            log("Permission: no getUserMedia");
            return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_UNKNOWN;
        }
        if (checkFirst) {
            const current = await checkCameraPermission();
            if (current === ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED) {
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED;
            }
        }
        try {
            const stream = await window.navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false,
            });
            if (!stream || !stream.getTracks) {
                log(
                    "Permission: no video track acquired, but permissions should be OK"
                );
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED;
            }
            const tracks = stream.getTracks();
            if (tracks && tracks.length > 0) {
                try {
                    const caps = tracks[0].getCapabilities();
                    if (caps) {
                        latestDeviceCaps = caps;
                    }
                } catch (_) { }
                tracks.forEach((track) => {
                    try {
                        track.stop();
                    } catch (_) { }
                });
            }
            log("Permission: granted");
            return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED;
        } catch (err) {
            log("Permission error: " + err);
            if (err && err.name === "NotAllowedError") {
                log("Permission: denied by user");
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_DENIED;
            } else {
                log("Permission: couldn't acquire the camera");
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_UNKNOWN;
            }
        }
    }

    async function checkCameraPermission() {
        if (
            !window.navigator ||
            !window.navigator.permissions ||
            !window.navigator.permissions.query
        ) {
            log("Check Permission: query permissions not supported");
            return ThalesThinLib.ENUM.UNKNOWN;
        }
        try {
            const perm = await window.navigator.permissions.query({ name: "camera" });
            if (!perm || !perm.state) {
                log("Permission: couldn't query camera permissions");
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_UNKNOWN;
            }
            log("Check Permission: " + perm.name + "=" + perm.state);
            if (perm.state === "denied") {
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_DENIED;
            } else if (perm.state === "granted") {
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_GRANTED;
            } else if (perm.state === "prompt") {
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_PROMPT;
            } else {
                return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_UNKNOWN;
            }
        } catch (err) {
            log("Check Permission: query returned an error: " + err);
            return ThalesThinLib.ENUM.CAMERA_PERMISSIONS_UNKNOWN;
        }
    }

    log("VERSION: " + VERSION);

    //Public Functions
    return {
        utils: {
            platform: platform,
            checkDeviceModel: checkDeviceModel,
            decodeBase64: decodeBase64,
        },
        withSdk: {
            capture: capture,
            switchSide: captureBack,
            bothSidesDone: captureDocumentDone,
            faceDone: captureFaceDone,
            getState: getSessionState,
            getImage: getBestResultImage,
            getPreviewImage: getSessionPreviewImage,
            getLog: getLog,
            init: initSdk,
            newSession: newSession,
            getInternalSession: getInternalSession,
            getCaptures: getCaptures,
            getVerifications: getVerifications,
            setLogData: setLogData,
            setLogger: setLogger,
            log: log,
            errorMessageUi: errorMessageUi, //for demo or testing only
        },
        cameraUtils: {
            getPermissions: getCameraPermission,
            checkPermissions: checkCameraPermission,
            getDevices: getDevices,
        },
        ENUM: {
            VERSION: VERSION,
            TD1: "TD1",
            TD2: "TD2",
            TD3: "TD3",
            FACE: "FACE",
            DOCUMENT: "DOCUMENT",
            A4: "A4",

            ERROR_TIMEOUT: "ERROR_TIMEOUT",
            ERROR_CLOSE_BTN: "ERROR_CLOSE_BTN",
            ERROR_CROP: "ERROR_CROP",
            LOW_RES: "LOW_RES",
            LOW_SHARPNESS: "LOW_SHARPNESS",
            HIGH_GLARE: "HIGH_GLARE",
            SDK_ERROR: "SDK_ERROR",
            BROWSER_NOT_SUPPORTED: "BROWSER_NOT_SUPPORTED",
            SDK_FAILED: "SDK_FAILED",
            SDK_INIT_ERROR: "SDK_INIT_ERROR",
            SDK_CONFIG_ERROR: "SDK_CONFIG_ERROR",
            UPLOADING: "UPLOADING",
            CAPTURE_BACK: "CAPTURE_BACK",

            IMAGE_UPLOADED: "IMAGE_UPLOADED",            
            NO_CAPTURE: "NO_CAPTURE",

            ANDROID: "ANDROID",
            IOS: "IOS",
            DESKTOP: "DESKTOP",
            NONE: "NONE",

            CAMERA_PERMISSIONS_DENIED: "CAMERA_PERMISSIONS_DENIED",
            CAMERA_PERMISSIONS_GRANTED: "CAMERA_PERMISSIONS_GRANTED",
            CAMERA_PERMISSIONS_PROMPT: "CAMERA_PERMISSIONS_PROMPT",
            CAMERA_PERMISSIONS_UNKNOWN: "CAMERA_PERMISSIONS_UNKNOWN",
            CAMERA_PARAMS_ERR: "CAMERA_PARAMS_ERR",
            CAMERA_ISSUE: "CAMERA_ISSUE",            

            COMMON_CAMERA_RATIO: "COMMON_CAMERA_RATIO",
            WIDE_CAMERA_RATIO: "WIDE_CAMERA_RATIO",
            FULL_CAMERA_RATIO: "WIDE_CAMERA_RATIO",

            AUTO_CAPTURE: "AUTO_CAPTURE",
            TAP_TO_CAPTURE: "TAP_TO_CAPTURE",

            STATE_FRONT: "STATE_FRONT",
            STATE_BACK: "STATE_BACK",
            STATE_FRONT_BACK: "STATE_FRONT_BACK",
            STATE_FACE: "STATE_FACE",
            STATE_FACE_DONE: "STATE_FACE_DONE",

            FALLBACK_POLICY_ALWAYS: "FALLBACK_POLICY_ALWAYS",
            FALLBACK_POLICY_LAST_NO_CROP: "FALLBACK_POLICY_LAST_NO_CROP",

            EVENT_CAPTURE_FRONT: "EVENT_CAPTURE_FRONT",
            EVENT_CAPTURE_BACK: "EVENT_CAPTURE_BACK",
            EVENT_CAPTURE_FACE: "EVENT_CAPTURE_FACE",
            EVENT_VERIFICATION_DONE: "EVENT_VERIFICATION_DONE",
            EVENT_FACE_VERIFICATION_DONE: "EVENT_FACE_VERIFICATION_DONE",
            EVENT_INIT: "EVENT_INIT",

            VERIFICATION_ACCEPTED: "VERIFICATION_ACCEPTED",
            VERIFICATION_REJECTED: "VERIFICATION_REJECTED",

            BACKEND_SESSION: "BACKEND_SESSION",
            BACKEND_ERROR: "BACKEND_ERROR",
        },
    };
})();
const module = window.ThalesThinLib;

//*** Comment out this line if you want to load it as a classic JavaScript library
export { module as ThalesThinLib };