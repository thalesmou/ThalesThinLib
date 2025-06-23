/* 
 The SAMPLE CODE is NOT a Thales product and *NOT* under any Support and Maintainance contract 
 or agreement. Thales takes no liability or responsibilty for damages due to errors in this code.
 This SAMPLE CODE is NOT under any license agreement by Thales or other parties or under any open 
 source agreements. Third party libraries maybe used by reference, but are never embedded in this cdoe.
*/

//** Comment the right line depending if it should be a module or not
//import {ThalesBarcodeReader} from './ThalesBarcodeReader.js'
//export var ThalesBarcodeReader;
var ThalesBarcodeReader;

ThalesBarcodeReader = (function () {
  "use strict";

  const VERSION = "1.0.0";

  let barcodeReaderRunning = false;

  /* Barcode Reader
	config : {
		interval :
		barcodeFilter :
		cameraAspectRatio :
		cameraSelect :
		stillPhoto :
		allowFlash :
		fullscreen :
		fillRootColor :
		fillBodyColor :
		zIndex :
		uiUpdatePositiveTime :
		uiUpdatePositiveText :
		uiUpdateNegativeTime :
		uiUpdateNegativeText :
	}
	*/
  function scan(extSession, config) {
    log("ThalesBarcodeReader v" + VERSION);
    //UI config
    const ROOT_EL = "thalesBarcode";
    const DEFAULT_UI_POSITIVE_TIME = 10 * 1000; //Update user about every 10 seconds with positive message
    const DEFAULT_UI_NEGATIVE_TIME = 0; //By default, no negative message
    const DEFAULT_UI_POSITIVE_TEXT = "SCANNING"; //Update user about every 10 seconds with positive message
    const DEFAULT_UI_NEGATIVE_TEXT = "NOT FOUND"; //Update user about every 2 seconds with negative message
    const DEFAULT_STILL_PHOTO_TEXT = "HOLD STILL"; //Update user about every 2 seconds with negative message
    const DEFAULT_UI_RATIO = 0.9; //direct user to be 80% of the preview, too close can lead to focus issue, too far not work
    const DEFAULT_DETECTION_INTERVAL = 500;
    const DEFAULT_STILL_PHOTO_INTERVAL = 3000;
    const DEFAULT_STILL_PHOTO_DELAY = 2000;
    const zIndexRoot = config.zIndex || 1000;
    const fillBodyColor = config.fillBodyColor || null;
    //Set default configuration
    config.uiUpdatePositiveTime =
      config.uiUpdatePositiveTime || DEFAULT_UI_POSITIVE_TIME;
    config.uiUpdateNegativeTime =
      config.uiUpdateNegativeTime || DEFAULT_UI_NEGATIVE_TIME;
    config.uiUpdatePositiveText =
      config.uiUpdatePositiveText || DEFAULT_UI_POSITIVE_TEXT;
    config.uiUpdateNegativeText =
      config.uiUpdateNegativeText || DEFAULT_UI_NEGATIVE_TEXT;
    config.uiStillPhotoText =
      config.uiStillPhotoText || DEFAULT_STILL_PHOTO_TEXT;
    if (!!config.fullscreen) {
      config.fullscreen = "landscape"; //required to be in landscape
    }
    if (config.stillPhotoInterval === true) {
      //if true, automatic value is used
      config.stillPhotoInterval = DEFAULT_STILL_PHOTO_INTERVAL;
    }
    config.stillPhotoDelay =
      config.stillPhotoDelay || DEFAULT_STILL_PHOTO_DELAY;
    config.cameraAspectRatio =
      config.cameraAspectRatio || ThalesThinLib.ENUM.COMMON_CAMERA_RATIO;
    config.barcodeFilter = config.barcodeFilter || ".*";
    config.interval = config.interval || DEFAULT_DETECTION_INTERVAL;
    //Variables
    let reader = window.BarcodeDetector
      ? new BarcodeDetector({ formats: ["pdf417"] })
      : null;
    let video = null;
    let stream = null;
    let rootEl = null;
    let canvas = null;
    let canvasCtx = null;
    let actionBtn = null;
    let isTakingStillPhoto = true;
    let startCapture = 0;
    let usedFlash = true;
    let shouldStop = null;
    const STATE = {
      SCANNING: config.uiUpdatePositiveText,
      NOT_FOUND: config.uiUpdateNegativeText,
      STILL_PHOTO: config.uiStillPhotoText,
    };
    let stateCurrent = {
      state: STATE.SCANNING,
      lastUpdate: null,
      nextThresh: config.uiUpdatePositiveTime,
    };
    //Set session
    const session = extSession;
    //Execute main ThalesThinLib.logic
    return new Promise((resolve, reject) => {
      //Ensure it runs only once at a time
      if (barcodeReaderRunning) {
        log("Already running");
        exit(session, ThalesThinLib.ENUM.DETECTION_RUNNING);
        return;
      }
      barcodeReaderRunning = true;
      //If barcode value already exists, skip
      if (!!session.internal.bestBarcode) {
        log("Session already has a good barcode");
        exit(session, ThalesThinLib.ENUM.ALREADY_GOOD_BARCODE);
        return;
      }
      //Currently, allow to run only once in the same session
      //This is to avoid any repeat browser crashes
      if (session.internal.isBarcodeReadingDone) {
        log("Barcode reading has crashed before. Aborting");
        exit(session, ThalesThinLib.ENUM.BARCODE_READING_DONE);
        return;
      }
      session.internal.isBarcodeReadingDone = true;

      function endIfGood(session, barcode, logDetails) {
        if (!barcode) return false;
        log("Barcode read with length: " + barcode.length);
        try {
          const re = new RegExp(config.barcodeFilter);
          if (barcode && barcode.trim().length > 0 && re.test(barcode)) {
            session.internal.bestBarcode = barcode;
            session.internal.bestBarcodeB64 = btoa(barcode);
            session.internal.bestBarcodeLog =
              "MANUAL#" +
              logDetails +
              "#" +
              (Date.now() - startCapture) +
              "#" +
              logDetails;
            exit(session, null);
            return true;
          } else {
            log("Barcode misread! (tested against: " + regErr + ")");
            return false;
          }
        } catch (regErr) {
          log("Barcode format checking exception");
          return false;
        }
      }

      function alternateCapture() {
        if (maybeTimeout(session, shouldStop)) return;
        stateCurrent.lastCheck = Date.now();
        updatePropablyUi();
        const isSupported =
          window.ImageCapture &&
          window.ImageCapture.prototype &&
          window.ImageCapture.prototype.takePhoto &&
          config.stillPhotoInterval > 0;
        const track =
          stream && stream.getTracks().length > 0
            ? stream.getTracks()[0]
            : null;
        if (isTakingStillPhoto || !isSupported || !track) {
          detectContinous();
        } else {
          takeStillPhoto(track).catch(() => {
            detectContinous();
          });
        }
      }

      function detectContinous() {
        //start only after a timeout
        window.setTimeout(() => {
          //If not a valid state try again, due to lack of something better to do
          if (!video || video.paused || video.ended) {
            detectContinous();
            return;
          }
          let barS = Date.now();
          reader
            .detect(video)
            .then((barcodes) => {
              const barcode =
                barcodes && barcodes.length > 0 && !!barcodes[0].rawValue
                  ? barcodes[0].rawValue
                  : null;
              log(
                "Barcode read from " +
                  video.videoWidth +
                  "x" +
                  video.videoHeight +
                  " video in " +
                  (Date.now() - barS) +
                  "ms : " +
                  JSON.stringify(barcodes)
              );
              let ok = endIfGood(session, barcode, "Video");
              if (!ok) {
                alternateCapture();
              }
            })
            .catch((err) => {
              log("Barcode not read from video: " + err);
              alternateCapture();
            });
        }, config.interval);
      }

      function takeStillPhoto(track) {
        //Do the operation fully async
        return new Promise(async (photoRes, photoRej) => {
          function finish() {
            if (maybeTimeout(session, shouldStop)) return;
            //Re-enable after timeout
            window.setTimeout(() => {
              isTakingStillPhoto = false;
            }, config.stillPhotoInterval);

            //Draw again to remove a hold still message
            stateCurrent.state = STATE.SCANNING;
            drawOverlay();
            photoRej();
          }

          try {
            isTakingStillPhoto = true;
            log("Initiating still photo capture for barcode reading");
            const imageCapture = new ImageCapture(track);
            let capabilities = await imageCapture.getPhotoCapabilities();
            //Inform user to hold still, wait a bit first
            stateCurrent.state = STATE.STILL_PHOTO;
            drawOverlay();
            await new Promise((resDelay) => {
              window.setTimeout(() => {
                resDelay();
              }, config.stillPhotoDelay);
            });
            log("Photo capabilities: " + JSON.stringify(capabilities, null, 2));
            let settings = undefined;
            if (
              (capabilities.imageWidth &&
                capabilities.imageWidth.max &&
                capabilities.imageWidth.min) ||
              (capabilities.imageHeight &&
                capabilities.imageHeight.max &&
                capabilities.imageHeight.min)
            ) {
              settings = {};
              if (
                capabilities.fillLightMode &&
                !!capabilities.fillLightMode.includes
              ) {
                //Disable flash if (A) Supported, (B) Config disables it, (C) Used on last attempt
                if (
                  capabilities.fillLightMode.includes("off") &&
                  (!config.allowFlash || usedFlash)
                ) {
                  settings.fillLightMode = "off";
                  usedFlash = false;
                } else if (
                  capabilities.fillLightMode.includes("flash") &&
                  config.allowFlash &&
                  !usedFlash
                ) {
                  settings.fillLightMode = "flash";
                  usedFlash = true;
                } else if (
                  capabilities.fillLightMode.includes("auto") &&
                  config.allowFlash &&
                  !usedFlash
                ) {
                  settings.fillLightMode = "auto";
                  usedFlash = true;
                }
              }
              //Low-end devices observed to strugger above this
              let maxSafeSizeW = 2560;
              let maxSafeSizeH = 1440;
              if (capabilities.imageWidth) {
                settings.imageWidth = Math.min(
                  capabilities.imageWidth.max,
                  maxSafeSizeW
                );
                settings.imageWidth = Math.max(
                  capabilities.imageWidth.min,
                  settings.imageWidth
                );
              }
              if (capabilities.imageHeight) {
                settings.imageHeight = Math.min(
                  capabilities.imageHeight.max,
                  maxSafeSizeH
                );
                settings.imageHeight = Math.max(
                  capabilities.imageHeight.min,
                  settings.imageHeight
                );
              }
            }
            log("Photo settings: " + JSON.stringify(settings, null, 2));
            const blob = await imageCapture.takePhoto(settings);
            if (!blob) {
              log("imageCapture error");
              finish();
              return;
            }
            let imgS = Date.now();
            const image = new Image();
            const url = URL.createObjectURL(blob);
            if (!url) {
              log("createObjectURL error");
              finish();
              return;
            }
            await new Promise((imgRes, imgRej) => {
              image.onload = () => {
                log("imageCapture image created");
                imgRes();
              };
              image.onerror = () => {
                log("imageCapture image creation error");
                imgRej();
              };
              image.src = url;
            });
            if (!image.width || !image.height) {
              log("Image error");
              finish();
              return;
            }
            log(
              "Prepared image for detection in " + (Date.now() - imgS) + "ms"
            );
            let barS = Date.now();
            const barcodes = await reader.detect(image);
            URL.revokeObjectURL(url);
            log(
              "Barcode read from " +
                image.width +
                "x" +
                image.height +
                " image in " +
                (Date.now() - barS) +
                "ms : " +
                JSON.stringify(barcodes)
            );
            const barcode =
              barcodes && barcodes.length > 0 && !!barcodes[0].rawValue
                ? barcodes[0].rawValue
                : null;
            const method = usedFlash ? "Still Photo Flash" : "Still Photo";
            //If barcode is OK this will end the full flow
            let done = endIfGood(session, barcode, method);
            if (!done) {
              finish();
            } else {
              photoRes();
            }
          } catch (err) {
            log("Error in still image capture for barcode reading: " + err);
            finish();
          }
        });
      }

      function maybeTimeout(session, reason) {
        if (!reason) return false;
        log("Barcode reader timed out");
        session.internal.bestBarcodeLog = "MANUAL#" + reason;
        exit(session, reason);
        return true;
      }

      function updatePropablyUi() {
        const delta = Date.now() - stateCurrent.lastUpdate;
        let toUpdate =
          !stateCurrent.lastUpdate || delta > stateCurrent.nextThresh;
        if (toUpdate) {
          stateCurrent.lastUpdate = Date.now();
          if (
            stateCurrent.state == STATE.SCANNING &&
            config.uiUpdateNegativeTime > 0
          ) {
            stateCurrent.state = STATE.NOT_FOUND;
            stateCurrent.nextThresh = config.uiUpdateNegativeTime;
          } else {
            stateCurrent.state = STATE.SCANNING;
            stateCurrent.nextThresh = config.uiUpdatePositiveTime;
          }
          drawOverlay();
        }
      }

      function drawOverlay() {
        try {
          if (
            !canvasCtx ||
            !canvas ||
            canvas.width <= 0 ||
            canvas.height <= 0 ||
            !video
          ) {
            return;
          }
          const isPortrait =
            window.orientation == 0 || window.orientation == 180;
          const fontSize = Math.ceil(
            Math.max(canvas.width, canvas.height) * 0.04
          );
          const text = stateCurrent.state;
          const transparency = config.uiTransparency || 0.75;
          const vidRatio = Math.min(
            video.videoWidth / video.videoHeight,
            video.videoHeight / video.videoWidth
          );
          canvas.width = Math.min(
            video.offsetWidth,
            window.innerWidth,
            document.body.clientWidth
          );
          canvas.height = Math.min(
            video.offsetHeight,
            window.innerHeight,
            document.body.clientHeight
          );
          canvas.style.width = canvas.width;
          canvas.style.height = canvas.height;
          //Overlay
          let ratioW = config.uiRatioWidth || DEFAULT_UI_RATIO;
          let ratioH = config.uiRatioHeight || DEFAULT_UI_RATIO;
          if (isPortrait) {
            ratioH = ratioH / 2;
          }
          let width = canvas.width * ratioW;
          let height = canvas.height * ratioH;
          let x = (canvas.width - width) / 2;
          let y = (canvas.height - height) / 2;
          canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
          //Draw Overlay
          if (stateCurrent.state == STATE.NOT_FOUND) {
            canvasCtx.fillStyle = "rgba(50, 0, 0, " + transparency + ")";
            canvasCtx.strokeStyle = "rgb(50, 0, 0)";
          } else if (stateCurrent.state == STATE.STILL_PHOTO) {
            canvasCtx.fillStyle = "rgba(93, 187, 99, " + transparency + ")";
            canvasCtx.strokeStyle = "rgb(93, 187, 99)";
          } else {
            canvasCtx.fillStyle = "rgba(111, 111, 111, " + transparency + ")";
            canvasCtx.strokeStyle = "rgb(111, 111, 111)";
          }
          canvasCtx.lineWidth = 5;
          canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
          canvasCtx.save();
          canvasCtx.beginPath();
          canvasCtx.roundRect(x, y, width, height, [30]);
          canvasCtx.closePath();
          canvasCtx.clip();
          canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
          canvasCtx.stroke();
          canvasCtx.restore();
          //Draw Line
          canvasCtx.lineWidth = 5;
          canvasCtx.strokeStyle = "red";
          canvasCtx.save();
          canvasCtx.beginPath();
          let lineY = (canvas.height - fontSize) / 2;
          canvasCtx.moveTo(x, lineY);
          canvasCtx.lineTo(x + width, lineY);
          canvasCtx.closePath();
          canvasCtx.stroke();
          canvasCtx.restore();
          //Draw Text
          canvasCtx.font = fontSize + "px Sans-serif";
          let measured = canvasCtx.measureText(text);
          let xText = (canvas.width - measured.width) / 2;
          let yText = canvas.height / 2;
          let offset = Math.max(canvas.width, canvas.height) * 0.01;
          canvasCtx.fillStyle = "rgba(0, 0, 0, " + transparency + ")";
          canvasCtx.fillRect(
            Math.round(xText - offset),
            Math.round(yText + offset),
            Math.round(measured.width + 2 * offset),
            -Math.round(fontSize + offset)
          );
          canvasCtx.fillStyle = "#ffffff";
          canvasCtx.fillText(text, xText, yText);
        } catch (err) {
          log("drawOverlay() error: " + err);
        }
      }

      async function start() {
        if (window.BarcodeDetector) {
          try {
            reader = new BarcodeDetector({ formats: ["pdf417"] });
          } catch (err) {
            log("Faield to initialize BarcodeDetector: " + err);
            exit(session, ThalesThinLib.ENUM.BARCODE_NOT_SUPPORTED);
            return;
          }
        } else {
          log("Native barcode reader not supported");
          exit(session, ThalesThinLib.ENUM.BARCODE_NOT_SUPPORTED);
          return;
        }
        //Set timeout
        ThalesThinLib.cameraUtils.setCaptureTimeout(config, (error) => {
          shouldStop = ThalesThinLib.ENUM.ERROR_TIMEOUT;
        });
        //Wait until start taking still picture
        window.setTimeout(() => {
          isTakingStillPhoto = false;
        }, config.stillPhotoInterval);

        setUI();
        addEvents();

        //Start video stream
        let constraints = null;
        let track = null;
        try {
          const initConstraints = {
            video: config.cameraSelect
              ? {
                  facingMode: config.cameraSelect,
                }
              : true,
          };
          //Samsung zoom
          let deviceModel = navigator.userAgent;
          if (
            navigator.userAgentData &&
            navigator.userAgentData.getHighEntropyValues
          ) {
            const dm = await navigator.userAgentData.getHighEntropyValues([
              "model",
            ]);

            if (typeof dm === "string") {
              deviceModel = dm;
            } else if (typeof dm.model === "string") {
              deviceModel = dm.model;
            }
          }
          log("Found device: " + deviceModel);
          const matchedModelNumber = deviceModel.match(/SM-[N|G|S]\d{3}/);
          if (matchedModelNumber) {
            const modelNumber = parseInt(
              matchedModelNumber[0].match(/\d{3}/)[0],
              10
            );
            const smallerModelNumber = deviceModel.match(/SM-S\d{3}/)
              ? 900
              : 970; // S10e
            if (!isNaN(modelNumber) && modelNumber >= smallerModelNumber) {
              log("Zooming for barcode scanning");
              initConstraints.video.zoom = { ideal: 2.0 };
            }
          }
          const s = await window.navigator.mediaDevices.getUserMedia(
            initConstraints
          );

          if (!s || s.getTracks().length <= 0) {
            exit(session, ThalesThinLib.ENUM.CAMERA_ISSUE);
            return;
          }
          stream = s;

          startCapture = Date.now();
          track = stream.getTracks()[0];
          let capabilities = track ? track.getCapabilities() : null;
          log(
            "Camera capabilities for reader: " +
              JSON.stringify(capabilities, null, 2)
          );
          const maxSafeSize = 2560 * 1440; //Low-end devices observed to strugger above this
          constraints = ThalesThinLib.imageUtils.getVideoConstraints(
            config.cameraSelect,
            config.cameraAspectRatio,
            capabilities,
            maxSafeSize
          );
        } catch (err) {
          log("Error on camera for barcode reader: " + err);
          session.internal.bestBarcodeLog =
            "MANUAL#" + ThalesThinLib.ENUM.SDK_ERROR;
          if (err && err.name) {
            switch (err.name) {
              case "NotAllowedError":
                err = ThalesThinLib.ENUM.CAMERA_PERMISSIONS_DENIED;
              case "OverconstrainedError":
                err = ThalesThinLib.ENUM.CAMERA_PARAMS_ERR;
              default:
                err = ThalesThinLib.ENUM.CAMERA_ISSUE;
            }
          } else {
            err = ThalesThinLib.ENUM.SDK_ERROR;
          }
          exit(session, err);
          return;
        }
        try {
          await track.applyConstraints(constraints);
        } catch (err) {
          log("applyConstraints() on barcode reader error: " + err);
        } finally {
          log(
            "applyConstraints() settings: " +
              JSON.stringify(track.getSettings(), null, 2)
          );

          video.srcObject = stream;
          video.play();
          drawOverlay();
        }
      }

      function onResize() {
        log("Barcode Reader UI Resizing");
        const isPortrait = window.orientation == 0 || window.orientation == 180;
        if (video) {
          video.style.width = !isPortrait ? "100%" : "auto";
          video.style.height = isPortrait ? "100%" : "auto";
        }
        drawOverlay();
      }

      function addEvents() {
        window.removeEventListener("resize", onResize, true);
        window.addEventListener("resize", onResize, true);
        window.removeEventListener("orientationchange", onResize, true);
        window.addEventListener("orientationchange", onResize, true);
      }

      function removeEvents() {
        window.removeEventListener("resize", onResize, true);
        window.removeEventListener("orientationchange", onResize, true);
      }

      function setUI() {
        if (fillBodyColor) {
          ThalesThinLib.cameraUtils.blackenBodyColor(fillBodyColor);
        }
        rootEl = document.getElementById(ROOT_EL);
        if (!rootEl) {
          rootEl = document.createElement("div");
          rootEl.id = ROOT_EL;
          rootEl.style.position = "fixed";
          rootEl.style.width = "100%";
          rootEl.style.height = "100%";
          rootEl.style.top = 0;
          rootEl.style.left = 0;
          rootEl.style.right = 0;
          rootEl.style.bottom = 0;
          rootEl.style.padding = 0;
          rootEl.style.margin = 0;
          rootEl.style.backgroundColor = config.fillRootColor;
          rootEl.style.zIndex = zIndexRoot;
          rootEl.style.backgroundColor =
            config.fillRootColor || config.fillBodyColor || "black";
          document.body.appendChild(rootEl);
        }
        rootEl.style.display = "block";
        video = document.getElementById(ROOT_EL + "Video");
        if (!video) {
          video = document.createElement("video");
          video.id = ROOT_EL + "Video";
          const isPortrait =
            window.orientation == 0 || window.orientation == 180;
          video.style.position = "fixed";
          video.style.transform = "translate(-50%, -50%)";
          video.style.top = "50%";
          video.style.left = "50%";
          video.style.width = isPortrait ? "100%" : "auto";
          video.style.height = !isPortrait ? "100%" : "auto";
          video.style.padding = 0;
          video.style.margin = 0;
          video.style.imageOrientation = "none";
          video.style.objectFit = "fill";
          video.style.zIndex = zIndexRoot;
          video.playsinline = true;
          video.autoplay = true;
          video.onloadedmetadata = () => {
            detectContinous();
          };
          rootEl.appendChild(video);
        }
        //Create an additional UI overaly
        canvas = document.getElementById(ROOT_EL + "UI");
        if (!canvas) {
          canvas = document.createElement("canvas");
          canvas.id = ROOT_EL + "UI";
          canvas.style.position = "fixed";
          canvas.style.transform = "translate(-50%, -50%)";
          canvas.style.top = "50%";
          canvas.style.left = "50%";
          canvas.style.width = "100%";
          canvas.style.height = "100%";
          canvas.style.padding = 0;
          canvas.style.margin = 0;
          canvas.style.zIndex = zIndexRoot + 1;
          canvas.setAttribute("role", "img");
          rootEl.appendChild(canvas);
        }
        canvasCtx = canvas.getContext("2d", { willReadFrequently: true });

        //Close button
        if (config.actionButton) {
          actionBtn = document.getElementById(ROOT_EL + "Action");
          if (!actionBtn) {
            actionBtn = document.createElement("div");
            actionBtn.id = ROOT_EL + "Action";
            actionBtn.style.position = "fixed";
            actionBtn.style.right = "6vw";
            actionBtn.style.top = "2vh";
            actionBtn.style.textShadow = "0 0 4px black";
            actionBtn.style.color = "white";
            actionBtn.style.fontSize = "20px";
            actionBtn.style.userSelect = "none";
            actionBtn.style.textSizeAdjust = "100%";
            actionBtn.innerHTML =
              typeof config.actionButton == "string"
                ? config.actionButton
                : "CLOSE";
            actionBtn.style.zIndex = zIndexRoot + 2;
            actionBtn.onclick = () => {
              shouldStop = ThalesThinLib.ENUM.ERROR_CLOSE_BTN;
            };
            rootEl.appendChild(actionBtn);
          }
          actionBtn.style.display = "block";
        }
      }

      async function exit(session, error) {
        try {
          ThalesThinLib.cameraUtils.restoreBodyColor(fillBodyColor);
          ThalesThinLib.cameraUtils.clearCaptureTimeout();
          removeEvents();
          //Stop video
          if (stream) {
            stream.getTracks().forEach((track) => {
              track.stop();
            });
          }
          //Hide HTML elements
          if (rootEl) {
            rootEl.style.display = "none";
            rootEl.remove();
          }
        } catch (err) {
          log("Error on barcode reader exit: " + err);
        } finally {
          barcodeReaderRunning = false;
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      }

      //Start the process
      start();
    });
  }

  //Internal - Logger
  function log(text) {
    if (disableDebugger) {
      return;
    }
    const SEPARATOR = "#$#$#";
    const now = Date.now();
    let txt =
      "[Thales Barcode][" +
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
  /* Native Barcode Detection
  image: Image or Video HTMLElement or Blob of image tyep or ImageData
  formats: string, //from https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats

  RETURN one barcode as a string
  */

  async function detectBarcode(image, format) {
    const suppFormat = format ? format : "pdf417";
    if (!window.BarcodeDetector) {
      log("Barcode detection not supported");
      return ThalesBarcodeReader.ENUM.SDK_ERROR;
    }
    try {
      if (!barcodeReader) {
        barcodeReader = new BarcodeDetector({ formats: [suppFormat] });
        if (!barcodeReader) {
          log("Barcode detection not initialized");
          return ThalesBarcodeReader.ENUM.SDK_ERROR;
        }
      }
      const barcodes = await barcodeReader.detect(image);
      log("Detected barcodes result: " + JSON.stringify(barcodes));
      return barcodes && barcodes.length > 0 && !!barcodes[0].rawValue
        ? barcodes[0].rawValue
        : null;
    } catch (err) {
      log("Detection of barcodes failed with: " + err);
      return ThalesBarcodeReader.ENUM.SDK_FAILED;
    }
  }

  return {
    scan: scan,
    log: log,
    detect: detectBarcode,

    ENUM: {
      DETECTION_RUNNING: "DETECTION_RUNNING",
      ALREADY_GOOD_BARCODE: "ALREADY_GOOD_BARCODE",
      BARCODE_NOT_SUPPORTED: "BARCODE_NOT_SUPPORTED",
      BARCODE_READING_DONE: "BARCODE_READING_DONE",
      SDK_FAILED: "SDK_FAILED",
      SDK_ERROR: "SDK_FAILED",
    },
  };
})();
window.ThalesBarcodeReader = ThalesBarcodeReader;
