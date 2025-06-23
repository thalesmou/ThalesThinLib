/*!
 * Thales Reader Helper SDK
 * by: michail.mavromoustakos@thalesgroup.com
 */
var Module = {}; //needed for webapi js

var THALESHELPERSDK_TEST_IGNORE_REAR = false;
var THALESHELPERSDK_TEST_BLOCK_CAPTURE = false;
var THALESHELPERSDK_TEST_NO_SOUND = false;

var ThalesHelperSdk = (function () {
  "use strict";

  const VERSION = "2.4.4";

  const localStorageReaderSettings = "thales_reader_helper_sdk";
  const localStorageReaders = "thales_reader_helper_sdk_readers";
  const localStorageLogUpdate = "thales_reader_helper_sdk_logs";
  const TEMP_APID = "TEMPORARY";

  //Internal data
  let readerInitialized = false;
  let readerConnSettings = null;
  let readers = [];
  let setupReaders = [];
  let connTimeout = 10000;
  let connMaxTries = 3;
  let connCurrTry = 0;
  let captureTimeout = 5 * 60 * 1000;
  let captureTimer = null;
  let imagePayload = {};
  let firstImage = null;
  let secondImage = null;
  let thirdImage = null;
  let fourthImage = null;
  let fifthImage = null;
  let sixthImage = null;
  let captureDone = null;
  let cameraDone = null;
  let captureStart = null;
  let captureReady = null;
  let portrait = null;
  let photoImage = null;
  let photoImageBack = null;
  let barcodeData = {};
  let barcode = null;
  let otherData = {};
  let reconnectTimer = null;
  let isReaderConnected = false;
  let jpgQuality = 90;
  let isStopping = false;
  let isTwoSided = false;
  let isBackCapture = false;
  let settingsToUpdate = null;
  let debugLogLevel = null;
  let readerDebugLogLevel = null;
  let plainWebSocket = false;
  let isLogging = true;
  let requiredImages = 6;
  let do_uv = true;
  let do_ir = true;
  let noPhoto = true;
  let noPdf417Barcode = true;
  let autoCloseSession = false;
  let appLogs = null;
  let sdkLogs = null;
  let accessLogs = null;
  let logTimeout = null;
  let cameraDims = null;
  let lastAskForUpdateLogs = null;
  let minTimeUpdateLogs = 1 * 60 * 60 * 1000; //1 hour
  let maxTimeUpdateLogs = 24 * 60 * 60 * 1000; //1 day
  let lastUpdateLogs = {};
  let doClearLogs = false;
  let firmwarePayload = null;
  let autoRebootOnConnect = null;
  let temporaryApiId = false;
  let temporaryApiIdTried = false;
  let provisioningPayload = null;
  let isUnProvisioning = null;
  let isProvisioning = null;
  let isDeletingApiId = null;
  let isAddingApiId = null;
  let isFwUpdate = null;
  let isListingApiId = false;
  let skipMDNS = false;
  const autoReboot = true; //hardcoded to avoid having to support both
  let autoOrient = false;
  let doDebarrel = true;
  let lastConnectedReader = null;
  let lastFailedSocketState = null;

  const STATE = {
    NONE: "NONE",
    DISCONNECTED: "CON0",
    CONNECTED: "CON1",
    RE_CONNECTING: "CON2",
    SESSION_OPENED: "SES1",
    EVENT_LISTENING: "SES2",
    DOC_REMOVED: "SET0",
    DEVICE_INFO: "SET1",
    SETTINGS: "SET2",
    SETTINGS_UPDATE: "SET3",
    CAPTURE: "CAP1",
    DOC_ON_WINDOW: "CAP2",
    ALL_IMAGES: "DONE",
  };
  let captureState = STATE.NONE;
  let captureStateGetData = 0;
  let captureStateDownload = 0;
  let storeApiKeys = false;

  //Callbacks
  let onConnected = () => {};
  let onDisconnected = () => {};
  let onFailedConnect = () => {};
  let onImageCaptured = () => {};
  let onImageCaptureTimeout = () => {};
  let onReaderInUse = () => {};
  let onDocOnWindow = () => {};
  let onConnSettingsChanged = () => {};
  let onConnSettingsUpdated = () => {};
  let onProvisioning = () => {};
  let onProvisioned = () => {};
  let onProvisionedFailed = () => {};
  let onInit = () => {};
  let onUnProvisioned = () => {};
  let onUnProvisionedFailed = () => {};
  let onUploadFwPart = () => {};
  let onFwUpdate = () => {};
  let onFwUpdateFailed = () => {};
  let onFwUpdateStart = () => {};
  let onApiIdAdded = () => {};
  let onApiIdAddedFailed = () => {};
  let onApiIdDeleted = () => {};
  let onApiIdDeletedFailed = () => {};
  let onRebooting = () => {};

  function log(text) {
    if (isLogging) {
      const now = new Date();
      const logLine =
        "[Helper][" +
        new Date(now).getHours() +
        ":" +
        new Date(now).getMinutes() +
        ":" +
        new Date(now).getSeconds() +
        "::" +
        new Date(now).getMilliseconds() +
        "] " +
        text;
      console.log(logLine);
      if (!otherData.logs) {
        otherData.logs = [];
      }
      otherData.logs.push(logLine);
    }
  }

  function setCapture({ isUv, isIr, isDebug }) {
    if (!settingsToUpdate) {
      settingsToUpdate = initReaderSettings();
    }
    if (
      settingsToUpdate &&
      settingsToUpdate.settings &&
      settingsToUpdate.settings.data_to_send
    ) {
      do_uv = isUv !== undefined && isUv !== null ? isUv : do_uv;
      do_ir = isIr !== undefined && isIr !== null ? isIr : do_ir;
      requiredImages = 2 + (do_uv ? 2 : 0) + (do_ir ? 2 : 0);
      settingsToUpdate.settings.data_to_send.ir_image = do_ir ? 1 : 0;
      settingsToUpdate.settings.data_to_send.uv_image = do_uv ? 1 : 0;
      if (!settingsToUpdate.settings.img) {
        settingsToUpdate.settings.img = {};
      }
      //Basd on FW AT10ki 1.4.0.5 and latest IDV service specs (MMM.xml file)
      //Gamma is directly from IDV specs
      //Exposure and Brighness are a multiple on the default value of those settings
      const isAT10ki = ThalesHelperSdk.v2.getState().model === "AT10KI";
      if (do_ir && isAT10ki) {
        settingsToUpdate.settings.img.gamma_ir = 100; //gamma has a direct value
        settingsToUpdate.settings.img.exposure_ir = 1.3 * 30; //brighness is a % of initial value
        log(
          "Updating IR Settings for model " +
            ThalesHelperSdk.v2.getState().model
        );
      }
      if (do_uv && isAT10ki) {
        settingsToUpdate.settings.img.gamma_uv = 70; //gamma has a direct value
        settingsToUpdate.settings.img.scaleBrightness_uv = 0.8 * 60; //brighness is a % of initial value
        log(
          "Updating UV Settings for model " +
            ThalesHelperSdk.v2.getState().model
        );
      }
    }
    if (
      settingsToUpdate &&
      settingsToUpdate.settings &&
      settingsToUpdate.settings.logging
    ) {
      settingsToUpdate.settings.logging = {
        log_level: isDebug === true ? 4 : readerDebugLogLevel,
      };
    }
  }

  function initReaderSettings() {
    return {
      settings: {
        data_to_send: {
          //Set defaults
          auto_orientation_magstripe: false,
          auto_orientation_mrz: false,
          auto_orientation_barcode: false,
          azteccode: false,
          barcode_image: false,
          codeline_data: false,
          datamatrix: false,
          onedbarcodes: false,
          qrcode: false,
          smart_card: false,
          visible_image: 2,
        },
        img: {
          use_binned_capture: false, //Need high resolution
          //use_visible_for_barcode: true,
          //use_ambient_for_barcode_dark_objects: true,
          //autoExposure_barcode: 100,
          //barcode_threads: 0,
          //enhanced_dark_object_barcode_decoding: false,
          //scale_down_barcode_dpi: 400,
          //crop_barcode_image: true,
        },
        logging: {
          log_level: 3, //INFO level
        },
        sound: {
          beep_enabled: !THALESHELPERSDK_TEST_NO_SOUND,
        },
      },
    };
  }

  function isString(s) {
    return s === null || s === undefined || typeof s === "string";
  }

  function isBoolean(s) {
    return s === null || s === undefined || typeof s === "boolean";
  }

  function storeReaderList(cfg) {
    readers = [];
    for (let i = 0; i < cfg.length; ++i) {
      if (typeof cfg[i] === "object" && typeof cfg[i].name === "string") {
        if (
          !isString(cfg[i].readerHost) ||
          !isString(cfg[i].ipRangeStart) ||
          !isString(cfg[i].ipRangeEnd) ||
          !isString(cfg[i].readerModel) ||
          !isString(cfg[i].readerSerial) ||
          !isString(cfg[i].apiId) ||
          !isString(cfg[i].apiKey) ||
          !isString(cfg[i].tempApiId) ||
          !isString(cfg[i].tempApiKey)
        ) {
          log("ERROR in storeReaderList(): Invalid configuration file!");
          return false;
        }
        readers.push({
          name: cfg[i].name,
          readerHost: cfg[i].readerHost,
          ipRangeStart: cfg[i].ipRangeStart,
          ipRangeEnd: cfg[i].ipRangeEnd,
          readerModel: cfg[i].readerModel,
          readerSerial: cfg[i].readerSerial,
          apiId: cfg[i].apiId,
          apiKey: cfg[i].apiKey,
          tempApiId: cfg[i].tempApiId,
          tempApiKey: cfg[i].tempApiKey,
        });
      }
    }
    return true;
  }

  function storeAdminReaderList(cfg) {
    readers = [];
    for (let i = 0; i < cfg.length; ++i) {
      if (typeof cfg[i] === "object" && typeof cfg[i].name === "string") {
        if (!isString(cfg[i].apiId) || !isString(cfg[i].apiKey)) {
          log("ERROR in storeAdminReaderList(): Invalid configuration file!");
          return false;
        }
        readers.push({
          name: cfg[i].name,
          apiId: cfg[i].apiId,
          apiKey: cfg[i].apiKey,
        });
      }
    }
    return true;
  }

  function storeSetupReaderList(cfg) {
    setupReaders = [];
    for (let i = 0; i < cfg.length; ++i) {
      if (typeof cfg[i] === "object" && typeof cfg[i].name === "string") {
        if (cfg[i].adminApiList && cfg[i].adminApiList.length > 0) {
          for (let j = 0; j < cfg[i].adminApiList.length; ++j) {
            if (
              !isString(cfg[i].adminApiList[j].apiId) ||
              !isString(cfg[i].adminApiList[j].apiKey)
            ) {
              log(
                "ERROR in storeSetupReaderList(): Invalid configuration file at .adminApiList!"
              );
              return false;
            }
          }
        }

        if (cfg[i].userApiList && cfg[i].userApiList.length > 0) {
          for (let j = 0; j < cfg[i].userApiList.length; ++j) {
            if (
              !isString(cfg[i].userApiList[j].apiId) ||
              !isString(cfg[i].userApiList[j].apiKey)
            ) {
              log(
                "ERROR in storeSetupReaderList(): Invalid configuration file at .userApiList!"
              );
              return false;
            }
          }
        }
        if (cfg[i].wireless) {
          if (
            !isString(cfg[i].wireless.ip) ||
            !isString(cfg[i].wireless.gateway) ||
            !isString(cfg[i].wireless.subnet) ||
            !isString(cfg[i].wireless.ssid) ||
            !isString(cfg[i].wireless.pass)
          ) {
            log(
              "ERROR in storeSetupReaderList(): Invalid configuration file at .wireless!"
            );
            return false;
          }
        }

        if (cfg[i].wired) {
          if (
            !isString(cfg[i].wired.ip) ||
            !isString(cfg[i].wired.gateway) ||
            !isString(cfg[i].wired.subnet) ||
            !isString(cfg[i].wired.ssid) ||
            !isString(cfg[i].wired.pass)
          ) {
            log(
              "ERROR in storeSetupReaderList(): Invalid configuration file at .etherwirednet!"
            );
            return false;
          }
        }
        if (
          !isBoolean(cfg[i].useHttp) ||
          !isBoolean(cfg[i].useSelfSignedCert)
        ) {
          log(
            "ERROR in storeSetupReaderList(): Invalid configuration file, value must be boolean"
          );
          return false;
        }
        setupReaders.push({
          name: cfg[i].name,
          adminApiList: cfg[i].adminApiList,
          userApiList: cfg[i].userApiList,
          wireless: cfg[i].wireless,
          wired: cfg[i].wired,
          useHttp: cfg[i].useHttp,
          useSelfSignedCert: cfg[i].useSelfSignedCert,
        });
      }
    }
    return true;
  }

  return {
    init: function (options) {
      log("Version: " + VERSION);
      if (readerInitialized) {
        log("Already initialized");
        return;
      }

      if (options.noLogs !== undefined && options.noLogs !== null) {
        isLogging = !options.noLogs;
        if (!isLogging) {
          debugLogLevel = null;
        }
      }
      if (options.readers && options.readers.length > 0) {
        if (storeReaderList(options.readers)) {
          log("Set " + readers.length + " reader configurations");
        }
      } else {
        if (window.localStorage) {
          let rList = window.localStorage.getItem(localStorageReaders);
          if (rList != null) {
            try {
              readers = JSON.parse(rList);
              log("Configuration read from local storage");
            } catch (e) {
              readers = [];
              log("Invalid Readers configuration from local storage: " + e);
            }
          }
        }
      }
      if (options.adminReaders && options.adminReaders.length > 0) {
        if (storeAdminReaderList(options.adminReaders)) {
          log("Set " + readers.length + " admin reader configurations");
        }
      }
      if (options.setupReaders && options.setupReaders.length > 0) {
        if (storeSetupReaderList(options.setupReaders)) {
          log(setupReaders.length + " provisioning configurations loaded");
        }
      }
      if (!options.readerConnectionSettings) {
        if (window.localStorage) {
          const sets = window.localStorage.getItem(localStorageReaderSettings);
          if (sets != null) {
            try {
              const localSets = JSON.parse(sets);
              readerConnSettings = {
                readerHost: localSets.readerHost,
                apiId: localSets.apiId,
                apiKey: localSets.apiKey,
                ipRangeStart: localSets.ipRangeStart,
                ipRangeEnd: localSets.ipRangeEnd,
                tempApiId: localSets.tempApiId,
                tempApiKey: localSets.tempApiKey,
              };
              readers = localSets.readers;
              log("Configuration read from local storage");
            } catch (e) {
              readerConnSettings = null;
              log("Invalid configuration from local storage: " + e);
            }
          }
        }
      } else {
        readerConnSettings = options.readerConnectionSettings;
      }
      //Force minimum of 5 seconds
      if (options.connectionTimeout >= 5000) {
        connTimeout = options.connectionTimeout;
      }
      if (
        options.connectionMaxRetries !== undefined &&
        options.connectionMaxRetries !== null &&
        options.connectionMaxRetries >= 0
      ) {
        connMaxTries = options.connectionMaxRetries;
      }
      if (options.imageCaptureTimeout > 0) {
        captureTimeout = options.imageCaptureTimeout;
      }
      if (
        options.autoCloseSession !== null &&
        options.autoCloseSession !== undefined
      ) {
        autoCloseSession = options.autoCloseSession;
      }
      if (options.storeApiKeys !== null && options.storeApiKeys !== undefined) {
        storeApiKeys = options.storeApiKeys;
      }
      if (
        options.autoRebootOnConnect !== null &&
        options.autoRebootOnConnect !== undefined
      ) {
        autoRebootOnConnect = options.autoRebootOnConnect;
      }
      if (options.doUv === undefined && options.doIr === undefined) {
        //Best to set do_uv and do_ir, requiredImages settings for legacy reasons
        requiredImages = options.requiredImages || requiredImages;
        setCapture({ isUv: requiredImages >= 6, isIr: requiredImages >= 4 });
      } else {
        setCapture({ isUv: options.doUv, isIr: options.doIr });
      }
      if (options.noPhoto !== undefined && options.noPhoto !== null) {
        noPhoto = options.noPhoto;
      }
      if (
        options.noPdf417Barcode !== undefined &&
        options.noPdf417Barcode !== null
      ) {
        noPdf417Barcode = options.noPdf417Barcode;
      }
      if (
        options.autoRebootWhenNeeded !== undefined &&
        options.autoRebootWhenNeeded != null
      ) {
        autoRebootWhenNeeded = options.autoRebootWhenNeeded;
      }
      if (options.skipMDNS !== undefined && options.skipMDNS != null) {
        skipMDNS = options.skipMDNS;
      }
      if (options.firmwarePayload) {
        firmwarePayload = firmwarePayload;
      }
      if (
        options.temporaryApiId !== undefined &&
        options.temporaryApiId !== null
      ) {
        temporaryApiId = options.temporaryApiId;
      }
      if (!!options.readerInternalSettings) {
        settingsToUpdate = options.readerInternalSettings;
        if (!settingsToUpdate.settings.data_to_send) {
          settingsToUpdate.settings.data_to_send = {};
        }
        if (!settingsToUpdate.settings.img) {
          settingsToUpdate.settings.img = {};
        }
      } else {
        settingsToUpdate = initReaderSettings();
        setCapture({});
      }
      if (options.autoOrient != null && options.autoOrient !== undefined) {
        autoOrient = options.autoOrient;
      }
      if (options.doDebarrel !== null && options.doDebarrel !== undefined) {
        doDebarrel = options.doDebarrel;
      }
      //Set value to have good DPI and good cropping
      settingsToUpdate.settings.img.scaleFactor =
        options.scaleFactor !== undefined && options.scaleFactor !== null
          ? options.scaleFactor
          : 80;
      settingsToUpdate.settings.data_to_send.photo_image = !noPhoto ? 2 : 0;
      settingsToUpdate.settings.data_to_send.auto_orientation_face =
        autoOrient && !noPhoto;
      settingsToUpdate.settings.data_to_send.aamva = !noPdf417Barcode;
      settingsToUpdate.settings.data_to_send.pdf417 = !noPdf417Barcode;
      settingsToUpdate.settings.data_to_send.auto_orientation_barcode =
        autoOrient && !noPdf417Barcode;
      settingsToUpdate.settings.img.face_find = !noPhoto;
      settingsToUpdate.settings.img.needs_debarrel = doDebarrel;
      if (!!options.readerDebugLogLevel) {
        readerDebugLogLevel = options.readerDebugLogLevel;
        settingsToUpdate.settings.logging = {
          log_level: options.readerDebugLogLevel,
        };
      }
      if (!!options.jpgQuality) {
        jpgQuality = options.jpgQuality;
      }
      if (!!options.debugLogLevel) {
        debugLogLevel = options.debugLogLevel;
      }
      if (options.noTls !== undefined && options.noTls !== null) {
        plainWebSocket = options.noTls;
      }
      if (options.minTimeUpdateLogs > 0) {
        minTimeUpdateLogs = options.minTimeUpdateLogs;
      }
      if (options.maxTimeUpdateLogs > 0) {
        maxTimeUpdateLogs = options.maxTimeUpdateLogs;
      }
      if (options.doClearLogs !== undefined && options.doClearLogs !== null) {
        doClearLogs = !!options.doClearLogs;
      }
      //Callbacks
      if (!!options.onConnected) {
        onConnected = options.onConnected;
      }
      if (!!options.onDisconnected) {
        onDisconnected = options.onDisconnected;
      }
      if (!!options.onFailedConnect) {
        onFailedConnect = options.onFailedConnect;
      }
      if (!!options.onImageCaptured) {
        onImageCaptured = options.onImageCaptured;
      }
      if (!!options.onImageCaptureTimeout) {
        onImageCaptureTimeout = options.onImageCaptureTimeout;
      }
      if (!!options.onConnSettingsChanged) {
        onConnSettingsChanged = options.onConnSettingsChanged;
      }
      if (!!options.onProvisioning) {
        onProvisioning = options.onProvisioning;
      }
      if (!!options.onProvisioned) {
        onProvisioned = options.onProvisioned;
      }
      if (!!options.onInit) {
        onInit = options.onInit;
      }
      if (!!options.onReaderInUse) {
        onReaderInUse = options.onReaderInUse;
      }
      if (!!options.onDocOnWindow) {
        onDocOnWindow = options.onDocOnWindow;
      }
      if (!!options.onUnProvisioned) {
        onUnProvisioned = options.onUnProvisioned;
      }
      if (!!options.onUnProvisionedFailed) {
        onUnProvisionedFailed = options.onUnProvisionedFailed;
      }

      return new Promise(async (resolve, reject) => {
        let webApiModule;
        try {
          webApiModule = await webapi(Module);
          if (!webApiModule) throw "Null WebApi";
        } catch (err) {
          log("Internal SDK initialization error: " + err);
          reject(ThalesHelperSdk.FAILED);
          return;
        }

        function connected() {
          if (reconnectTimer !== null) {
            window.clearInterval(reconnectTimer);
            reconnectTimer = null;
          }
          log("Connected to Reader");
          isReaderConnected = true;
          if (!isProvisioning) {
            onConnected();
          }
        }

        function rejectDataPromises(code) {
          if (captureStart !== null) {
            captureStart.reject(code);
          }
          if (captureReady != null) {
            captureReady.reject(code);
          }
          if (cameraDone !== null) {
            cameraDone.reject(code);
          }
          if (captureDone !== null) {
            captureDone.reject(code);
          }
          if (firstImage !== null) {
            firstImage.reject(code);
          }
          if (secondImage !== null) {
            secondImage.reject(code);
          }
          if (thirdImage !== null) {
            thirdImage.reject(code);
          }
          if (fourthImage !== null) {
            fourthImage.reject(code);
          }
          if (fifthImage !== null) {
            fifthImage.reject(code);
          }
          if (sixthImage !== null) {
            sixthImage.reject(code);
          }
          if (portrait !== null) {
            portrait.reject(code);
          }
          if (barcode !== null) {
            barcode.reject(code);
          }
        }

        if (debugLogLevel) {
          webApiModule.webapi_enable_logging(debugLogLevel.toLowerCase());
        }

        webApiModule.on("CONNECTED", connected);

        //Event if new session opened
        webApiModule.on("SESSION_OPENED", (data) => {
          if (isStopping) return;
          log("Session Opened with ID: " + (data ? data.id : null));
          Module.listen_start();
        });

        //Event if session is already opened
        webApiModule.on("SESSION_IN_USE", () => {
          if (isStopping) return;
          log("Session Already Opened");
          Module.listen_start();
        });

        webApiModule.on("RETURNED_LOGS", (data) => {
          let typeNum = data ? data.type : null;
          let type = "";
          let resolveLog = null;
          if (typeNum === 1) {
            type = ThalesHelperSdk.LOG_READERSDK;
            resolveLog = sdkLogs;
          } else if (typeNum === 2) {
            type = ThalesHelperSdk.LOG_APP;
            resolveLog = appLogs;
          } else if (typeNum === 3) {
            type = ThalesHelperSdk.LOG_ACCESS;
            resolveLog = accessLogs;
          } else {
            return;
          }
          if (data.logs) {
            if (!otherData.readerLogs) {
              otherData.readerLogs = {};
            }
            const now = Date.now();
            otherData.readerLogs[type] = {
              log: data.logs,
              time: new Date(now).toLocaleTimeString(),
            };
            lastUpdateLogs[type] = now;
            log(
              "Got reader logs for " +
                type +
                " at " +
                new Date(lastUpdateLogs[type])
            );
            if (window.localStorage) {
              try {
                window.localStorage.setItem(
                  localStorageLogUpdate,
                  JSON.stringify({
                    lastAskForUpdateLogs: lastAskForUpdateLogs,
                    lastUpdateLogs: lastUpdateLogs,
                  })
                );
              } catch (e) {
                log("Error storing reader log timings: " + e);
              }
            }
          }
          //We assume the logs won't be asked right away again
          //so we clear for next time
          if (doClearLogs) {
            log("Clearing logs");
            Module.send_message({
              i: Module.getNextI(),
              d: { type: typeNum },
              t: 127,
            });
          }
          if (resolveLog) {
            resolveLog.resolve();
          }
        });

        //Event if listening already started
        webApiModule.on("INVALID_COMMAND", (data) => {
          if (isStopping) return;
          log(
            "Invalid command. Ending session because: " +
              (data && data.message ? data.message : null)
          );
          if (captureTimer != null) {
            window.clearTimeout(captureTimer);
          }
          if (isProvisioning) {
            onProvisionedFailed(ThalesHelperSdk.ALREADY_PROVISIONED);
          } else {
            onReaderInUse();
            rejectDataPromises(ThalesHelperSdk.READER_IN_USE);
          }
          //Note: We leave the session open so we can retry
        });

        //Event if new listening started
        webApiModule.on("LISTEN_STARTED", (data) => {
          if (isStopping) return;
          log("Started listening to reader events");
          if (THALESHELPERSDK_TEST_BLOCK_CAPTURE) return;
          if (temporaryApiId) {
            log("Retrieving list of credentials");
            isListingApiId = true;
            Module.send_message({
              i: Module.getNextI(),
              d: null,
              t: 120,
            });
          } else {
            //Avoid multiple trigger on device info
            isListingApiId = false;
            //Device info continues the flow...
            Module.get_device_info();
          }
        });

        //Event if new listening started
        webApiModule.on("SESSION_CLOSED", () => {
          log("Session closed");
        });

        //Event once device info retrieved
        webApiModule.on("DEVICE_INFO", (data) => {
          if (isStopping) return;
          captureState = STATE.DEVICE_INFO;
          if (data) {
            log("DEVICE INFO: " + JSON.stringify(data, null, 2));
            if (!otherData.readerLogs) {
              otherData.readerLogs = {};
            }
            otherData.readerLogs[ThalesHelperSdk.LOG_DEVICE_INFO] = {
              log: data,
              time: new Date().toLocaleTimeString(),
            };
            isTwoSided = data.isTwoSided;
            if (
              data.cameraDims &&
              data.cameraDims.width > 0 &&
              data.cameraDims.height > 0
            ) {
              cameraDims = {
                width: data.cameraDims.width,
                height: data.cameraDims.height,
                xDpi: data.cameraDims.xDpi,
                yDPI: data.cameraDims.yDpi,
              };
            }
            if (data.model && data.serial) {
              let isMismatch = false;
              if (
                !!readerConnSettings.readerSerial &&
                data.serial.toUpperCase() !==
                  readerConnSettings.readerSerial.toUpperCase()
              ) {
                log(
                  "Mismatch on configureaded serial and connected reader! Configured: " +
                    readerConnSettings.readerSerial
                );
                isMismatch = true;
              }
              if (
                !!readerConnSettings.readerModel &&
                data.model.toUpperCase() !==
                  readerConnSettings.readerModel.toUpperCase()
              ) {
                log(
                  "Mismatch on configureaded model and connected reader! Configured: " +
                    readerConnSettings.readerModel
                );
                isMismatch = true;
              }
              if (isMismatch == true && !isUnProvisioning) {
                //The connection settings of the reader and the reader connected to are not matching
                //this could be due to wrong provisioning, that is why it should be allowed when
                //unprovisioning. The connection will end here
                //Note that the serial and model are not required, if they are not configured
                //this step will be ignored
                ThalesHelperSdk.end();
                rejectDataPromises(ThalesHelperSdk.SERIAL_MODEL_MISMATCH);
                return;
              } else if (
                !readerConnSettings.readerModel &&
                !readerConnSettings.readerSerial
              ) {
                //Set the serial and model if empty
                readerConnSettings.readerModel = data.model;
                readerConnSettings.readerSerial = data.serial;
              }
            }
            //Decide to autoreboot or not
            if (data && data.rebootPending && autoRebootOnConnect) {
              log("Reboot required, rebooting...");
              onRebooting();
              rejectDataPromises(ThalesHelperSdk.REBOOTING);
              Module.send_message({
                i: Module.getNextI(),
                d: null,
                t: 81,
              });
              return;
            }
            //Check version and if there is a firmwarePayload pending
            if (data && data.version && firmwarePayload) {
              const versionNum = data.version
                .replaceAll(".", "")
                .replaceAll("_", "")
                .replaceAll("-", "")
                .trim();
              log(
                "Version Number currently " +
                  versionNum +
                  ", latest " +
                  firmwarePayload.version
              );
              if (versionNum < firmwarePayload.version) {
                log("Updating to latest firmware");
                ThalesHelperSdk.v2.updateFirmware({
                  timeout: firmwarePayload.timeout,
                  statusCb: firmwarePayload.statusCb,
                });
              }
            }
          }
          if (isUnProvisioning) {
            log("Unprovisioning the reader...");
            Module.send_message({
              i: Module.getNextI(),
              d: null,
              t: 87,
            });
            return;
          }
          if (isFwUpdate) {
            log("Updating FW of the reader...");
            Module.send_message({
              i: Module.getNextI(),
              d: null,
              t: 75,
            });
            return;
          }
          if (captureTimeout && captureTimeout > 0) {
            captureTimer = window.setTimeout(() => {
              log("Capture timed out");
              onImageCaptureTimeout();
              rejectDataPromises(ThalesHelperSdk.TIMEOUT);
              //Close session right away, otherwise leave open
              //but close eventually to avoid leaving it open forever
              //note that if another sessin is store, the timeout would be cleared
              if (autoCloseSession) {
                ThalesHelperSdk.end(null, true);
              } else {
                log("After timeout timer. Current timer: " + captureTimer);
                captureTimer = window.setTimeout(() => {
                  log(
                    "Closing session after timeout. New timer: " + captureTimer
                  );
                  ThalesHelperSdk.end(null, true);
                }, captureTimeout);
              }
            }, captureTimeout);
          }
          if (
            settingsToUpdate !== null &&
            settingsToUpdate.hasOwnProperty("settings")
          ) {
            log(
              "Settings to be updated: " +
                JSON.stringify(settingsToUpdate, null, 2)
            );
            //Get Settings
            Module.send_message({
              i: Module.getNextI(),
              d: null,
              t: 32,
            });
          } else {
            Module.capture();
            if (captureReady != null) {
              captureReady.resolve();
            }
          }
        });

        //Event when settings returned
        webApiModule.on("RETURNED_SETTINGS", (data) => {
          if (isStopping) return;
          log("Returned settings: " + JSON.stringify(data, null, 2));
          //Update delta of current settings and targetted settings
          if (settingsToUpdate !== null) {
            let atLeastOne = false;
            let setToUpdate = settingsToUpdate.settings;
            for (let key in setToUpdate) {
              let subSetToUpdate = setToUpdate[key];
              for (let subkey in subSetToUpdate) {
                if (data.settings[key][subkey] !== subSetToUpdate[subkey]) {
                  data.settings[key][subkey] = subSetToUpdate[subkey];
                  atLeastOne = true;
                }
              }
            }
            if (atLeastOne) {
              log(
                "Settings to be updated to: " + JSON.stringify(data, null, 2)
              );
              //Set Settings
              Module.send_message({
                i: Module.getNextI(),
                d: data,
                t: 35,
              });
            } else {
              log("Settings already up to date");
              Module.capture();
              if (captureReady != null) {
                captureReady.resolve();
              }
            }
            if (
              settingsToUpdate &&
              settingsToUpdate.settings &&
              settingsToUpdate.settings.img &&
              data &&
              data.settings &&
              data.settings.img
            ) {
              const setsUp = settingsToUpdate.settings.img;
              const setsUpLights = settingsToUpdate.settings.data_to_send;

              const setsRec = data.settings.img;
              const setsRecLights = data.settings.img;
              const irEnabled =
                setsUpLights.ir_image !== undefined &&
                setsUpLights.ir_image !== null
                  ? setsUpLights.ir_image === 1
                  : setsRecLights.ir_image !== undefined &&
                    setsRecLights.ir_image !== null
                  ? setsRecLights.ir_image === 1
                  : false;
              const isIrEnabledDetect =
                !settingsToUpdate.settings.doc_detect ||
                settingsToUpdate.settings.doc_detect.use_ir_for_detect !==
                  false;

              if (!otherData.readerLogs) {
                otherData.readerLogs = {};
              }
              otherData.readerLogs[ThalesHelperSdk.LOG_SETTINGS] = {
                ir: {
                  cropping: irEnabled, //If IR enabled, likely used for cropping
                  detection: isIrEnabledDetect,
                  gamma: setsUp.gamma_ir || setsRec.gamma_ir || null,
                  exposure: setsUp.exposure_ir || setsRec.exposure_ir || null,
                  brightness:
                    setsUp.scaleBrightness_ir ||
                    setsRec.scaleBrightness_ir ||
                    null,
                },
                uv: {
                  cropping: false,
                  detection: false,
                  gamma: setsUp.gamma_uv || setsRec.gamma_uv || null,
                  exposure: setsUp.exposure_uv || setsRec.exposure_uv || null,
                  brightness:
                    setsUp.scaleBrightness_uv ||
                    setsRec.scaleBrightness_uv ||
                    null,
                },
                white: {
                  cropping: !irEnabled, //If IR not used, then VIS is used
                  detection: !isIrEnabledDetect,
                  gamma: setsUp.gamma_vis || setsRec.gamma_vis || null,
                  exposure: setsUp.exposure_vis || setsRec.exposure_vis || null,
                  brightness:
                    setsUp.scaleBrightness_vis ||
                    setsRec.scaleBrightness_vis ||
                    null,
                },
                debarrel: doDebarrel,
              };
            }
          }
        });

        //Event when settings returned
        webApiModule.on("SETTINGS_UPDATED", (data) => {
          if (isStopping) return;
          log("Settings updated");
          if (settingsToUpdate !== null) {
            settingsToUpdate = null;
            //Check device info in case a reboot is needed
            Module.get_device_info();
          } else {
            Module.capture();
            if (captureReady != null) {
              captureReady.resolve();
            }
          }
        });

        webApiModule.on("CLOSED", () => {
          if (isReaderConnected && !isStopping) {
            log("Connection closed unexpectedly");
            rejectDataPromises(ThalesHelperSdk.CONNECTION);
            ThalesHelperSdk.end(ThalesHelperSdk.CONNECTION);
          } else {
            log("Connection closed");
          }
        });

        function startedCapture() {
          captureState = STATE.DOC_ON_WINDOW;
          if (captureStart !== null) {
            captureStart.resolve();
          }
          //Just in case it was not resolved before
          if (captureReady != null) {
            captureReady.resolve();
          }
        }

        function documentRemoved() {
          captureState = STATE.DOC_REMOVED;
          onDocOnWindow();
        }

        function documentCaptured() {
          if (cameraDone !== null) {
            cameraDone.resolve();
          }
          const waitTime = 2000;
          window.setTimeout(() => {
            //If no optional data received, reject the promises after some grace period
            //remember if they were resolved, reject() would be ignored
            if (barcode != null) {
              barcode.reject(Date.now());
            }
            if (portrait != null) {
              portrait.reject(Date.now());
            }
          }, waitTime);
          //Check if no data is received. This is an edge case scenario
          //where another reader has taken over the session before retrieving data
          if (captureStateGetData === 0 && captureStateDownload === 0) {
            rejectDataPromises(ThalesHelperSdk.READER_IN_USE);
            //keep session open
          }
        }

        function errorOnLogs(data) {
          if (data) {
            if (data.message) {
              log("Get log error: " + data.message);
            }
            if (data.type === 1 && sdkLogs != null) {
              sdkLogs.reject();
            } else if (data.type === 2 && appLogs != null) {
              appLogs.reject();
            } else if (data.type === 3 && accessLogs != null) {
              accessLogs.reject();
            } else {
              appLogs.reject();
              accessLogs.reject();
              sdkLogs.reject();
            }
          }
        }

        webApiModule.on("CAPTURE_DOCFOUND", startedCapture);
        webApiModule.on("START_OF_DOCUMENT_DATA", startedCapture);
        webApiModule.on("DOC_ON_WINDOW", startedCapture);
        webApiModule.on("DOC_REMOVED", documentRemoved);
        webApiModule.on("END_OF_DOCUMENT_DATA", documentCaptured);
        webApiModule.on("GET_LOGS_ERROR", errorOnLogs);

        webApiModule.on("EVENT", (data) => {
          const event = Module.getEventCode(data.eventId);
          log("Event Received: " + event);
          if (isStopping) return;
          switch (event) {
            case "CAPTURE_DOCFOUND":
            case "DOC_ON_WINDOW":
            case "START_OF_DOCUMENT_DATA":
              startedCapture();
              break;
            case "DOC_REMOVED":
              documentRemoved();
              break;
            case "END_OF_DOCUMENT_DATA":
              documentCaptured();
              break;
            case "GET_LOGS_ERROR":
              errorOnLogs(data);
              break;
          }
        });

        webApiModule.on("CAPTURE_STOPPED", () => {
          log("Capture Stopped");
        });

        webApiModule.on("RETURNED_IMAGE", () => {
          log("Image retrieved");
        });

        webApiModule.on("OK", () => {
          if (isStopping) return;
          if (isAddingApiId) {
            log("API ID created");
            onApiIdAdded();
          } else if (isDeletingApiId) {
            log("API ID deleted");
            onApiIdDeleted();
          } else {
            log("Reader says OK");
          }
        });

        webApiModule.on("ERROR", (data) => {
          if (isStopping) return;
          log(
            "Reader says ERROR: " +
              (data && typeof data.message === "string" ? data.message : null)
          );
          if (isListingApiId) {
            log("Failed to list credential IDs. Proceeding with capture");
            isListingApiId = false;
            Module.get_device_info();
          } else if (isProvisioning) {
            onProvisionedFailed(ThalesHelperSdk.INVALID_PROVISIONING_PAYLOAD);
          } else if (isUnProvisioning) {
            onUnProvisionedFailed(ThalesHelperSdk.FAILED);
          } else if (isAddingApiId) {
            onApiIdAddedFailed(ThalesHelperSdk.FAILED);
          } else if (isDeletingApiId) {
            onApiIdDeletedFailed(ThalesHelperSdk.FAILED);
          }
        });

        webApiModule.on("UPLOAD_RECEIVED", () => {
          log("Upload FW part received");
          onUploadFwPart();
        });

        webApiModule.on("FIRMWARE_UPDATE_RESULT", () => {
          log("FW was updated");
          onFwUpdate();
        });

        webApiModule.on("GET_SETTINGS_ERROR", (data) => {
          log(
            "Settings couldn't be retrieved. Error: " +
              (data && typeof data.message === "string" ? data.message : null)
          );
          if (isFwUpdate && !isStopping) {
            onFwUpdateFailed();
          }
        });

        webApiModule.on("LISTEN_UPDATE_STARTED", (data) => {
          log("Start listening for FW Updates");
          if (isFwUpdate && !isStopping) {
            onFwUpdateStart();
          }
        });

        webApiModule.on("UPDATE_STATUS", (data) => {
          log("FW update status received...");
          if (data) {
            log(
              "FW update STATUS: " +
                data.status +
                " -> " +
                data.step +
                "/" +
                data.nsteps
            );
            log(
              "FW file name/image/source/info: " +
                data.name +
                " # " +
                data.image +
                " # " +
                data.source +
                " # " +
                data.info
            );
            log("FW file download: " + data.download_percent + "%");
            log("FW installation: " + data.install_percent + "%");
            log("Reboot required: " + data.rebootRequired);
          }
        });

        webApiModule.on("CRED_LIST_DATA", (data) => {
          log("Credential list received, continuing with device info");
          //Avoid multiple triggers
          isListingApiId = false;
          Module.get_device_info();
          //Ignore errors as the below audit and temp ID deletion checks
          //will be done in parallel with capture session which we don't
          //want to fail due to edge case scenarios
          try {
            if (data && data.credentials && data.credentials.length > 0) {
              for (let i = 0; i < data.credentials.length; ++i) {
                const apiId = data.credentials[i].i;
                const isAdmin = data.credentials[i].a;
                log("API ID: " + apiId + ", has admin access: " + isAdmin);
                //Keep track of list of credential IDs, mainly to ensure
                //temporary ones are deleted, for audit purposes
                if (apiId && temporaryApiId) {
                  if (!otherData.readerLogs) {
                    otherData.readerLogs = {};
                  }
                  if (!otherData.readerLogs[ThalesHelperSdk.LOG_CRED_LIST]) {
                    otherData.readerLogs[ThalesHelperSdk.LOG_CRED_LIST] = {};
                  }
                  otherData.readerLogs[ThalesHelperSdk.LOG_CRED_LIST][apiId] = {
                    id: apiId,
                    admin: isAdmin,
                  };
                }
                //If there is an API ID with specific prefix indicating it was temporary
                //then delete it. But check that the temp key is not the one used for
                //current authentication. The success is not checked, if it fails
                //it will just try next time until it succeeds
                if (
                  temporaryApiId &&
                  !temporaryApiIdTried &&
                  apiId &&
                  isAdmin &&
                  apiId === TEMP_APID
                ) {
                  log("Detected temporary API ID, deleting....");
                  Module.send_message({
                    i: Module.getNextI(),
                    d: { i: apiId },
                    t: 123,
                  });
                }
              }
            }
          } catch (err) {
            log("Unexpected error while parsing credentials");
          }
        });

        webApiModule.on("INVALID_KEY", () => {
          if (isProvisioning && !isStopping) {
            connected();
            //Provision the reader
            Module.send_message({
              t: 85,
              i: Module.getNextI(),
              d: provisioningPayload.payload,
            });
            log("Started provisioning...");
            //For provisioning a dummy key is used so this is always triggered
            onProvisioning();
          } else {
            log("Invalid API key or ID");
            if (!isStopping) {
              //Authenticate with temporary key, then the flow continues as normal
              if (
                temporaryApiId &&
                !temporaryApiIdTried &&
                readerConnSettings &&
                readerConnSettings.tempApiId &&
                readerConnSettings.tempApiKey
              ) {
                //Set to avoid infinite loop, try temp key only once
                temporaryApiIdTried = true;
                Module.send_message({
                  i: Module.getNextI(),
                  d: {
                    authKey: readerConnSettings.tempApiId,
                    authKeyID: readerConnSettings.tempApiKey,
                  },
                  t: 1,
                });
              } else {
                ThalesHelperSdk.end(ThalesHelperSdk.APIKEY);
              }
            }
          }
        });

        //Event when data retrieved
        webApiModule.on("RETURNED_DATA", (data) => {
          const imagesExpected =
            isTwoSided || isBackCapture ? requiredImages : requiredImages / 2;
          function resolveNextImage(imgType, side) {
            let size = ThalesHelperSdk.imagePayloadSize();
            const type = {
              type: imgType,
              side: side ? side : isBackCapture ? "BACK" : "FRONT",
              time: Date.now(),
            };
            //If back-side, front-side is already captured
            if (isBackCapture) {
              size = size - imagesExpected / 2;
            }
            if (size === 1 && firstImage) {
              firstImage.resolve(type);
            } else if (size === 2 && secondImage) {
              secondImage.resolve(type);
            } else if (size === 3 && thirdImage) {
              thirdImage.resolve(type);
            } else if (size === 4 && fourthImage) {
              fourthImage.resolve(type);
            } else if (size === 5 && fifthImage) {
              fifthImage.resolve(type);
            } else if (size === 6 && sixthImage) {
              sixthImage.resolve(type);
            }
          }

          if (isStopping) return;
          let dataType = Module.getReaderDataType(data.type);
          switch (dataType) {
            case "IMAGEVIS":
              if (!isBackCapture) {
                imagePayload.frontWhiteImage = data.img.data;
              } else {
                imagePayload.backWhiteImage = data.img.data;
              }
              resolveNextImage("WHITE");
              break;
            case "IMAGEVISREAR":
              imagePayload.backWhiteImage = data.img.data;
              resolveNextImage("WHITE", "BACK");
              break;
            case "IMAGEPHOTO":
              //Assume photo image is on front
              //consider during back-side capture the image may not be flipped
              //this check avoids the image being overriden
              if (!isBackCapture) {
                photoImage = data.img.data;
              } else {
                photoImageBack = data.img.data;
              }
              if (portrait !== null) {
                portrait.resolve({
                  type: "PHOTO",
                  side: isBackCapture ? "BACK" : "FRONT",
                  time: Date.now(),
                });
              }
              break;
            case "IMAGEIR":
              if (!isBackCapture) {
                imagePayload.frontIRImage = data.img.data;
              } else {
                imagePayload.backIRImage = data.img.data;
              }
              resolveNextImage("IR");
              break;
            case "IMAGEIRREAR":
              imagePayload.backIRImage = data.img.data;
              resolveNextImage("IR", "BACK");
              break;
            case "IMAGEUV":
              if (!isBackCapture) {
                imagePayload.frontUVImage = data.img.data;
              } else {
                imagePayload.backUVImage = data.img.data;
              }
              resolveNextImage("UV");
              break;
            case "IMAGEUVREAR":
              imagePayload.backUVImage = data.img.data;
              resolveNextImage("UV", "BACK");
              break;
            case "BARCODE_PDF417":
              barcodeData.base64 = data.data;
              try {
                barcodeData.text = atob(data.data);
              } catch {}
              if (barcode !== null) {
                barcode.resolve({
                  type: "BARCODE",
                  side: isBackCapture ? "BACK" : "FRONT",
                  time: Date.now(),
                });
              }
              break;
            case "AAMVA_DATA":
              barcodeData.json = data.aamva_data;
              if (barcode !== null) {
                barcode.resolve({
                  type: "BARCODE",
                  side: isBackCapture ? "BACK" : "FRONT",
                  time: Date.now(),
                });
              }
              break;
            default:
              otherData[dataType] = data;
              break;
          }
          log("CAPTURED: " + dataType);
          captureState = STATE.DOWNLOAD_DATA;
          captureStateDownload++;
          if (ThalesHelperSdk.imagePayloadSize() >= imagesExpected) {
            log("Received " + imagesExpected + " images");
            if (captureTimer != null) {
              window.clearTimeout(captureTimer);
            }
            const waitTime = 10000;
            window.setTimeout(() => {
              //If no optional data received, reject the promises a few seconds
              //later to give enough time for all processing to end
              //this ONLY occurs if END_OF_DOCUMENT_DATA event wasn't received
              //as if it has, the promises would be rejected sooner
              //remember if they were resolved, reject() would be ignored
              if (barcode != null) {
                barcode.reject(Date.now());
              }
              if (portrait != null) {
                portrait.reject(Date.now());
              }
              if (appLogs != null) {
                appLogs.reject(Date.now());
              }
              if (sdkLogs != null) {
                sdkLogs.reject(Date.now());
              }
              if (accessLogs != null) {
                accessLogs.reject(Date.now());
              }
              if (autoCloseSession) {
                ThalesHelperSdk.end(null, true);
              }
            }, waitTime);
            //All mandatory images are captured
            captureState = STATE.ALL_IMAGES;
            onImageCaptured();
            if (captureDone !== null) {
              log("All images captured");
              captureDone.resolve();
            }
            //Just in case the event was missed previously
            //resolve them here, as all images are received
            if (cameraDone !== null) {
              cameraDone.resolve();
            }
            if (captureStart !== null) {
              captureStart.resolve();
            }
            if (captureReady != null) {
              captureReady.resolve();
            }
          }
        });

        //Event when data is captured
        webApiModule.on("CAPTURE_DATA_CAPTURED", (data) => {
          if (isStopping) return;
          let dataType = Module.getReaderDataType(data.type);
          if (dataType === undefined || dataType === null) {
            log("Unknown type: " + data.type);
            return;
          }
          if (THALESHELPERSDK_TEST_IGNORE_REAR && dataType.includes("REAR")) {
            return;
          }
          //Don't capture the barcode image as not needed
          if (dataType === "IMAGEBARCODE") {
            return;
          }
          log("Capturing: " + dataType);
          captureState = STATE.GET_DATA;
          captureStateGetData++;
          if (dataType.includes("IMAGE")) {
            Module.send_message({
              i: Module.getNextI(),
              d: {
                id: data.id,
                image_compression: jpgQuality,
                image_format: "jpg",
              },
              t: 52,
            });
          } else {
            Module.send_message({
              i: Module.getNextI(),
              d: {
                id: data.id,
              },
              t: 52,
            });
          }
        });

        webApiModule.on("PROVISIONED", () => {
          log("Provisioned!");
          onProvisioned();
        });

        webApiModule.on("UNPROVISIONED", () => {
          log("UN-Provisioned!");
          onUnProvisioned();
        });

        webApiModule.on("INVALID_SESSION", () => {
          log("Invalid privileges to perform action");
          if (isListingApiId) {
            log("Failed to list credential IDs. Proceeding with capture");
            isListingApiId = false;
            Module.get_device_info();
          } else if (isUnProvisioning) {
            log("No rights to un-provision");
            onUnProvisionedFailed(ThalesHelperSdk.NO_RIGHTS);
          } else if (isAddingApiId) {
            log("No rights to add a new credential");
            onApiIdAddedFailed(ThalesHelperSdk.NO_RIGHTS);
          } else if (isDeletingApiId) {
            log("No rights to delete a credential");
            onApiIdDeletedFailed(ThalesHelperSdk.NO_RIGHTS);
          }
        });

        webApiModule.on("REBOOTING", () => {
          log("Rebooting!");
        });

        webApiModule.on("NETWORK_CONFIG", (data) => {
          log("Reader settings updated");
          onConnSettingsUpdated();
          if (data.lan) {
            let msg = "Ethernet Settings: ";
            msg +=
              "Enabled=" +
              (data.lan.o === true ||
                data.lan.o === undefined ||
                data.lan.o === null) +
              ", ";
            msg +=
              "DHCP=" +
              (data.lan.d === true ||
                data.lan.d === undefined ||
                data.lan.d === null);
            if (data.lan.n) {
              msg += ", ";
              msg += "IP=" + data.lan.n.a + ", ";
              msg += "Gateway=" + data.lan.n.g + ", ";
              msg += "Subnet=" + data.lan.n.n;
            }
            log(msg);
          }
          if (data.wifi) {
            let msg = "Wi-Fi Settings: ";
            msg +=
              "Enabled=" +
              (data.wifi.o === true ||
                data.wifi.o === undefined ||
                data.wifi.o === null) +
              ", ";
            msg +=
              "DHCP=" +
              (data.wifi.d === true ||
                data.wifi.d === undefined ||
                data.wifi.d === null);
            if (data.wifi.n) {
              msg += ", ";
              msg += "IP=" + data.wifi.n.a + ", ";
              msg += "Gateway=" + data.wifi.n.g + ", ";
              msg += "Subnet=" + data.wifi.n.n;
            }
            log(msg);
          }
        });
        isBackCapture = false;
        isStopping = false;
        readerInitialized = true;
        isReaderConnected = false;
        log("Thales Reader SDK Initialized");
        onInit();
        resolve();
      });
    },
    start: function (retries, timeout, settings) {
      if (!readerInitialized) {
        log("Not initialized");
        return ThalesHelperSdk.FAILED;
      }
      if (!settings && !ThalesHelperSdk.hasConnSettings()) {
        log("No Reader Connection Settings Found");
        return ThalesHelperSdk.FAILED;
      }
      isStopping = false;
      //Set the operation mode, if none specified capture is performed
      isProvisioning =
        settings && settings.isProvisioning ? settings.isProvisioning : false;
      isUnProvisioning =
        settings && settings.isUnProvisioning
          ? settings.isUnProvisioning
          : false;
      isFwUpdate =
        settings && settings.isFwUpdate ? settings.isFwUpdate : false;
      log("Starting new session");
      if (reconnectTimer !== null) {
        window.clearInterval(reconnectTimer);
      }
      if (captureTimer !== null) {
        window.clearTimeout(captureTimer);
      }
      //If not connected, start new connection
      if (!isReaderConnected) {
        const address =
          settings && settings.readerHost
            ? settings.readerHost
            : readerConnSettings.readerHost;
        const apiId =
          settings && settings.apiId
            ? settings.apiId
            : readerConnSettings.apiId;
        const apiKey =
          settings && settings.apiKey
            ? settings.apiKey
            : readerConnSettings.apiKey;
        const cTimeout = timeout > 5000 ? timeout : connTimeout;
        const maxRetries = retries > 0 ? retries : connMaxTries;
        if (reconnectTimer === null) {
          reconnectTimer = window.setInterval(() => {
            connCurrTry++;
            lastFailedSocketState = !Module["_socket"]
              ? -1
              : Module["_socket"].readyState;
            try {
              Module.close_connection();
            } catch {}
            if (connCurrTry > maxRetries || isStopping) {
              log("Failed to connect");
              window.clearInterval(reconnectTimer);
              reconnectTimer = null;
              isReaderConnected = false;
              const code =
                address && address.includes(".local")
                  ? ThalesHelperSdk.MDNS
                  : ThalesHelperSdk.CONNECTION_FAILED;
              onFailedConnect(code);
            } else {
              log(
                "Trying to reconnect [" +
                  connCurrTry +
                  "/" +
                  maxRetries +
                  "]..."
              );
              Module.open_connection(
                address,
                apiId,
                apiKey,
                plainWebSocket ? "ws" : "wss"
              );
            }
          }, cTimeout);
        }
        connCurrTry = 0;
        try {
          Module.close_connection();
        } catch {}
        log("Opening connection to: " + address);
        //Reset the temp key usage
        temporaryApiIdTried = false;
        Module.open_connection(
          address,
          apiId,
          apiKey,
          plainWebSocket ? "ws" : "wss"
        );
        return ThalesHelperSdk.CONNECTING;
      } else {
        //Open new connection if socket has closed
        if (!Module["_socket"] || Module["_socket"].readyState !== 1) {
          isReaderConnected = false;
          log("Socket was closed, attempting to reconnect");
          ThalesHelperSdk.start();
          return ThalesHelperSdk.CONNECTING;
        } else {
          //Start with a new session, flow will handle a session already opened
          if (!isBackCapture) {
            //Reset only if it is a new document capture
            //It maybe the same document retried, but such a logic has to be managed
            //outside this SDK
            imagePayload = {};
            otherData = {};
            photoImage = null;
            barcodeData = {};
          } else {
            //reset back-side images if back-side is retried, but keep front-side
            if (imagePayload) {
              imagePayload.backWhiteImage = null;
              imagePayload.backIRImage = null;
              imagePayload.backUVImage = null;
            }
          }
          photoImageBack = null; //track only last attempt
          log("Opening session...");
          Module.start_session();
          return ThalesHelperSdk.EXECUTING;
        }
      }
    },
    end: function (code, onlySession) {
      if (!readerInitialized) {
        log("Not initialized");
        return;
      }
      isStopping = true;
      if (reconnectTimer !== null) {
        window.clearInterval(reconnectTimer);
        reconnectTimer = null;
      }
      if (captureTimer !== null) {
        window.clearTimeout(captureTimer);
      }
      log("Ending session");
      try {
        Module.end_session();
      } catch {}
      //This closes only the session, without firing any events
      if (onlySession) {
        return;
      }
      log("Closing connection");
      //Close connection, even if it may already be closed
      try {
        Module.close_connection();
      } catch {}
      isReaderConnected = false;
      captureState = STATE.DISCONNECTED;
      onDisconnected(code);
    },
    hasConnSettings: function () {
      if (!readerInitialized) {
        log("Not initialized");
        return;
      }
      return (
        !!readerConnSettings &&
        !!readerConnSettings.readerHost &&
        !!readerConnSettings.apiKey &&
        !!readerConnSettings.apiId
      );
    },
    getImagePayload: function () {
      if (!readerInitialized) {
        log("Not initialized");
        return null;
      }
      return imagePayload;
    },
    imagePayloadSize: function () {
      if (!readerInitialized) {
        log("Not initialized");
        return null;
      }
      let count = 0;
      if (!imagePayload) return count;
      let keys = Object.keys(imagePayload);
      for (let i = 0; i < keys.length; ++i) {
        if (imagePayload[keys[i]]) {
          count++;
        }
      }
      return count;
    },
    getPhoto: function () {
      if (!readerInitialized) {
        log("Not initialized");
        return null;
      }
      return photoImage;
    },
    getPhotoBack: function () {
      if (!readerInitialized) {
        log("Not initialized");
        return null;
      }
      return photoImageBack;
    },
    getBarcode: function () {
      if (!readerInitialized) {
        log("Not initialized");
        return null;
      }
      return barcodeData;
    },
    getOtherData: function () {
      if (!readerInitialized) {
        log("Not initialized");
        return null;
      }
      return otherData;
    },
    setBackCapture: function (isBack) {
      if (!readerInitialized) {
        log("Not initialized");
        return null;
      }
      isBackCapture = isBack;
    },
    getLogs: function (isHtml) {
      if (!otherData.logs) {
        return null;
      }
      let logs = "";
      for (let i = 0; i < otherData.logs.length; ++i) {
        logs += otherData.logs[i] + (isHtml ? "<br>" : "\n");
      }
      return logs;
    },
    APIKEY: "APIKEY",
    MDNS: "MDNS",
    CONNECTION: "CONNECTION",
    CONNECTING: "CONNECTING",
    CONNECTION_FAILED: "CONNECTION_FAILED",
    EXECUTING: "EXECUTING",
    NOT_SETUP: "NOT_SETUP",
    TIMEOUT: "TIMEOUT",
    READER_IN_USE: "READER_IN_USE",
    FAILED: "FAILED",
    NO_RIGHTS: "NO_RIGHTS",
    LOG_APP: "APP",
    LOG_ACCESS: "ACCESS",
    LOG_READERSDK: "SDK",
    LOG_DEVICE_INFO: "DEVICE_INFO",
    LOG_SETTINGS: "SETTINGS",
    LOG_CRED_LIST: "CRED_LIST",
    SERIAL_MODEL_MISMATCH: "SERIAL_MODEL_MISMATCH",
    ALREADY_PROVISIONED: "ALREADY_PROVISIONED",
    INVALID_PROVISIONING_PAYLOAD: "INVALID_PROVISIONING_PAYLOAD",
    REBOOTING: "REBOOTING",
    v2: {
      connect: ({
        readerHost,
        apiId,
        apiKey,
        readerModel,
        readerSerial,
        retries,
        timeout,
        hostnameFallback,
      }) => {
        log("connect() called");
        captureState = STATE.NONE;
        return new Promise((resolve, reject) => {
          let doFallback = hostnameFallback && !skipMDNS;
          if (
            isReaderConnected &&
            Module["_socket"] &&
            Module["_socket"].readyState === 1
          ) {
            log("Already connected");
            resolve();
            return;
          }
          //If set, connection done with explicity settings
          //otherwise taken from readerConnectionSettings
          const targetHost = readerHost
            ? readerHost
            : readerModel && readerSerial
            ? readerModel + "-" + readerSerial + ".local"
            : null;
          const targetApiId = apiId && apiKey ? apiId : null;
          const targetApiKey = apiId && apiKey ? apiKey : null;
          //If not all settings explicilty set, check if connection settings stored
          if (!targetHost || !targetApiId || !targetApiKey) {
            if (ThalesHelperSdk.v2.hasNetworkAccessOnly()) {
              log("No API ID or Key");
              reject(ThalesHelperSdk.NOT_SETUP);
              return;
            }
            if (!ThalesHelperSdk.hasConnSettings()) {
              log("No connection settings");
              reject(ThalesHelperSdk.NOT_SETUP);
              return;
            }
          }
          //Set callbacks
          onConnected = () => {
            captureState = STATE.CONNECTED;
            if (resolve) {
              const resolution =
                (doFallback === "DONE" ? "Y" : "N") + connCurrTry;
              resolve(resolution);
            }
          };
          onDisconnected = (err) => {
            captureState = STATE.DISCONNECTED;
            if (reject) {
              reject(err);
            }
          };
          onFailedConnect = (err) => {
            if (reject) {
              //Attempt to perform a connection with hostname
              if (doFallback === true) {
                const serial = ThalesHelperSdk.v2.getState().serial;
                const model = ThalesHelperSdk.v2.getState().model;
                if (!!serial && !!model) {
                  const fallbackHost = model + "-" + serial + ".local";
                  //Start connection
                  log("Fallback with hostname: " + fallbackHost);
                  if (
                    ThalesHelperSdk.start(retries, timeout, {
                      readerHost: fallbackHost,
                      apiId: targetApiId,
                      apiKey: targetApiKey,
                    }) === ThalesHelperSdk.CONNECTING
                  ) {
                    //Ensure there is no infinite loop
                    doFallback = "DONE";
                    return;
                  }
                }
              }
              //If new connection cannot be started with hostname then reject
              reject(err);
            }
          };
          //Start connection
          const status = ThalesHelperSdk.start(retries, timeout, {
            readerHost: targetHost,
            apiId: targetApiId,
            apiKey: targetApiKey,
          });
          if (status !== ThalesHelperSdk.CONNECTING) {
            log("Error on flow, status was: " + status);
            reject(ThalesHelperSdk.CONNECTION_FAILED);
          }
        });
      },
      capture: ({ enableUV, enableIR, isDebug }) => {
        log("capture() called");
        setCapture({ isUv: enableUV, isIr: enableIR, isDebug: isDebug });
        captureStateGetData = 0;
        captureStateDownload = 0;
        return new Promise(async (resolve, reject) => {
          //Check if reader still connected
          if (
            !isReaderConnected ||
            !Module["_socket"] ||
            Module["_socket"].readyState !== 1
          ) {
            log("Re-connecting...");
            try {
              captureState = STATE.RE_CONNECTING;
              //If specific settings needed, connect should be called in advance
              await ThalesHelperSdk.v2.connect({});
              log("...re-connected!");
            } catch (err) {
              log("Re-connection error: " + err);
              reject(err);
              return;
            }
          }
          captureState = STATE.CONNECTED;
          //Return a series of promises or null if not configured to capture
          let response = {};
          let hasSecond = do_ir || do_uv || isTwoSided;
          let hasThird = (do_ir && do_uv) || ((do_ir || do_uv) && isTwoSided);
          let hasFourth = (do_ir || do_uv) && isTwoSided;
          let hasFifth = do_ir && do_uv && isTwoSided;
          let hasSixth = hasFifth;
          response.firstImage = new Promise((resolve, reject) => {
            firstImage = {
              resolve: resolve,
              reject: reject,
            };
          });
          response.secondImage = hasSecond
            ? new Promise((resolve, reject) => {
                secondImage = {
                  resolve: resolve,
                  reject: reject,
                };
              })
            : null;
          response.thirdImage = hasThird
            ? new Promise((resolve, reject) => {
                thirdImage = {
                  resolve: resolve,
                  reject: reject,
                };
              })
            : null;

          response.fourthImage = hasFourth
            ? new Promise((resolve, reject) => {
                fourthImage = {
                  resolve: resolve,
                  reject: reject,
                };
              })
            : null;
          response.fifthImage = hasFifth
            ? new Promise((resolve, reject) => {
                fifthImage = {
                  resolve: resolve,
                  reject: reject,
                };
              })
            : null;
          response.sixthImage = hasSixth
            ? new Promise((resolve, reject) => {
                sixthImage = {
                  resolve: resolve,
                  reject: reject,
                };
              })
            : null;

          //If photo is requested and not captured yet wait for it
          if (!noPhoto && !photoImage) {
            response.portrait = new Promise((resolve, reject) => {
              portrait = {
                resolve: resolve,
                reject: reject,
              };
            });
          }
          //Track PDF417 barcode capture
          if (!noPdf417Barcode) {
            response.barcode = new Promise((resolve, reject) => {
              barcode = {
                resolve: resolve,
                reject: reject,
              };
            });
          }
          //Check everything is completed
          response.done = new Promise((resolve, reject) => {
            captureDone = {
              resolve: resolve,
              reject: reject,
            };
          });

          //Check capturing started
          response.start = new Promise((resolve, reject) => {
            captureStart = {
              resolve: resolve,
              reject: reject,
            };
          });

          //Check if ready to capture images
          response.ready = new Promise((resolve, reject) => {
            captureReady = {
              resolve: resolve,
              reject: reject,
            };
          });

          //Check that the capture process is completed
          response.captured = new Promise((resolve, reject) => {
            cameraDone = {
              resolve: resolve,
              reject: reject,
            };
          });

          //Start capture
          let status = ThalesHelperSdk.start();
          if (status !== ThalesHelperSdk.EXECUTING) {
            log("Error on flow, status was: " + status);
            reject(ThalesHelperSdk.FAILED);
          } else {
            resolve(response);
          }
        });
      },
      provision: function ({ name, timeout, overWifi }) {
        log("provision() called");
        const HARD_TIMEOUT = 15 * 60 * 1000;
        const GRACE_TIME_IF_DISCONNECT = 2 * 60 * 1000;
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        return new Promise(async (resolve, reject) => {
          //End current connection as provisioning
          //may require a different connection
          ThalesHelperSdk.end();
          //Gather settings
          let model = null;
          let serial = null;
          let ipRangeStart = null;
          let ipRangeEnd = null;
          let wired = null;
          let wireless = null;
          let userApiList = null;
          let adminApiList = null;
          //default settings that can be overridden
          let useSelfSignedCert = false;
          let useHttp = false;

          if (!(setupReaders && setupReaders.length > 0)) {
            log("No setup configuration set");
            reject(ThalesHelperSdk.NOT_SETUP);
            return;
          }
          //Find settings for the targeted reader
          for (let i = 0; i < setupReaders.length; ++i) {
            if (name === setupReaders[i].name) {
              let foundReader = null;
              for (let j = 0; j < readers.length; ++j) {
                if (readers[j].name === name) {
                  foundReader = readers[j];
                  break;
                }
              }
              if (!foundReader) {
                log("Reader not defined");
                reject(ThalesHelperSdk.NOT_SETUP);
                return;
              }
              ipRangeStart = foundReader.ipRangeStart;
              ipRangeEnd = foundReader.ipRangeEnd;
              //Get provisioning settings
              wired = setupReaders[i].wired;
              wireless = setupReaders[i].wireless;
              userApiList = setupReaders[i].userApiList;
              adminApiList = setupReaders[i].adminApiList;
              useSelfSignedCert =
                setupReaders[i].useSelfSignedCert !== undefined
                  ? setupReaders[i].useSelfSignedCert
                  : useSelfSignedCert;
              useHttp =
                setupReaders[i].useHttp !== undefined
                  ? setupReaders[i].useHttp
                  : useHttp;
              model = foundReader.readerModel;
              serial = foundReader.readerSerial;
              break;
            }
          }

          if (!wired && !wireless) {
            //If no Wi-Fi settings set, then it maybe that 'wired'
            //was ommitted because DCHP is asked and in such a case no settings are required
            //Set an empty object for this use case
            wired = {};
          }
          if (!userApiList && !adminApiList) {
            log("No users (API ID/Key) found for: '" + name);
            reject(ThalesHelperSdk.NOT_SETUP);
            return;
          }

          const successP = {
            resolve: null,
            reject: null,
          };
          const startedP = {
            resolve: null,
            reject: null,
          };

          //Hard timeout, set by default to 15min
          const provTimeout = timeout > 0 ? timeout : HARD_TIMEOUT;
          log("Setting provisioning timeout: " + provTimeout + "ms");
          const provTimer = window.setTimeout(() => {
            log("Provisioning timed out");
            reject(ThalesHelperSdk.TIMEOUT);
            if (startedP.reject) {
              startedP.reject(ThalesHelperSdk.TIMEOUT);
            }
            if (successP.reject) {
              successP.reject(ThalesHelperSdk.TIMEOUT);
            }
            //End the connection
            ThalesHelperSdk.end();
          }, provTimeout);

          let readerHost = null;
          if (!overWifi) {
            if (model && serial && !skipMDNS) {
              try {
                await ThalesHelperSdk.v2.connect({
                  readerModel: model,
                  readerSerial: serial,
                  apiId: "dummy",
                  apiKey: "dummy",
                });
                readerHost = model + "-" + serial + ".local";
              } catch (err) {
                //If cannot access error, it means host was valid
                if (err === ThalesHelperSdk.APIKEY) {
                  readerHost = model + "-" + serial + ".local";
                }
              }
            }
            if (!readerHost) {
              try {
                const discoverRetries = 1; //could change in the future
                const r = await ThalesHelperSdk.v2.discover({
                  save: false,
                  ipRangeStart: ipRangeStart,
                  ipRangeEnd: ipRangeEnd,
                  disableCheck: true,
                  timeout: provTimeout,
                  retries: discoverRetries,
                });
                if (!r.ip) {
                  reject(ThalesHelperSdk.CONNECTION);
                  if (provTimer) {
                    window.clearTimeout(provTimer);
                  }
                  return;
                }
                readerHost = r.ip;
              } catch {
                log("Couldn't find IP: " + err);
                reject(ThalesHelperSdk.CONNECTION);
                if (provTimer) {
                  window.clearTimeout(provTimer);
                }
                return;
              }
            }
          } else {
            try {
              await ThalesHelperSdk.v2.checkIp({
                ip: "10.21.12.1",
                timeout: provTimeout,
              });
              readerHost = "10.21.12.1";
            } catch (err) {
              log(
                "Couldn't connect to provisioning Wi-Fi after: " +
                  provTimeout +
                  " ms" +
                  (err ? "[" + err + "]" : "")
              );
              reject(ThalesHelperSdk.CONNECTION);
              if (provTimer) {
                window.clearTimeout(provTimer);
              }
              return;
            }
          }

          //Set callbacks
          onFailedConnect = () => {
            log("Couldn't connect to the reader to provision");
            //Avoid multiple events triggering
            onProvisionedFailed = () => {};
            onFailedConnect = () => {};
            onDisconnected = () => {};
            if (startedP.reject) {
              startedP.reject(ThalesHelperSdk.CONNECTION);
            }
            if (provTimer) {
              window.clearTimeout(provTimer);
            }
          };
          onProvisioned = () => {
            log("Reader provisioned");
            if (successP.resolve) {
              successP.resolve();
              //Avoid multiple events triggering
              onProvisionedFailed = () => {};
              onFailedConnect = () => {};
              onDisconnected = () => {};
              if (provTimer) {
                window.clearTimeout(provTimer);
              }
            }
          };
          onProvisioning = () => {
            if (startedP.resolve) {
              startedP.resolve();
            }
            log("Reader is being provisioned...");
            //After provisioning, there is a chance connection is lost
            onDisconnected = () => {
              window.setTimeout(() => {
                log(
                  "No provisioning confirmation, but likely reader provisioned"
                );
                //Avoid multiple events triggering
                onProvisionedFailed = () => {};
                onFailedConnect = () => {};
                onDisconnected = () => {};
                if (successP.resolve) {
                  successP.resolve();
                }
              }, GRACE_TIME_IF_DISCONNECT);
            };
            //Provisioning may fail because already provision or invalid payload
            onProvisionedFailed = (code) => {
              if (code === ThalesHelperSdk.ALREADY_PROVISIONED) {
                log("Reader is already provisioned");
              } else {
                log("Provisioning failed");
              }
              if (provTimer) {
                window.clearTimeout(provTimer);
              }
              //Avoid multiple events triggering
              onProvisionedFailed = () => {};
              onFailedConnect = () => {};
              onDisconnected = () => {};
              //End session and connection as another action
              //such as unprovisioning the reader has a different start sequence
              ThalesHelperSdk.end();
              if (successP.reject) {
                successP.reject(code);
              }
            };
          };

          onDisconnected = () => {
            log("Disconnected from reader while provisioning");
            //Avoid multiple events triggering
            onProvisionedFailed = () => {};
            onFailedConnect = () => {};
            onDisconnected = () => {};
            if (startedP.reject) {
              startedP.reject(ThalesHelperSdk.CONNECTION);
            }
            if (successP.reject) {
              successP.reject(ThalesHelperSdk.CONNECTION);
            }
            reject(ThalesHelperSdk.CONNECTION);
            if (provTimer) {
              window.clearTimeout(provTimer);
            }
          };

          //Set only after provisining started
          onProvisionedFailed = () => {};

          //Set provisioning payload
          provisioningPayload = {
            payload: {
              reboot: autoReboot,
              c: [],
              kvp: [
                {
                  k: "UseSelfCert",
                  v: !useSelfSignedCert ? "true" : "false",
                },
                {
                  k: "UseHttp",
                  v: useHttp ? "true" : "false",
                },
                {
                  k: "UseCertChain",
                  v: !useSelfSignedCert ? "true" : "false",
                },
              ],
            },
          };
          if (adminApiList) {
            for (let i = 0; i < adminApiList.length; ++i) {
              if (!!adminApiList[i].apiId && !!adminApiList[i].apiKey) {
                provisioningPayload.payload.c.push({
                  i: adminApiList[i].apiId,
                  k: adminApiList[i].apiKey,
                  a: true,
                });
              }
            }
          }
          if (userApiList) {
            for (let i = 0; i < userApiList.length; ++i) {
              provisioningPayload.payload.c.push({
                i: userApiList[i].apiId,
                k: userApiList[i].apiKey,
                a: false,
              });
            }
          }
          //Configure Wired (ethernet), by default using DCHP
          provisioningPayload.payload.l = { d: true };
          //Set Static IP without DCHP
          if (wired && wired.ip && wired.subnet && wired.gateway) {
            provisioningPayload.payload.l = {
              d: false,
              n: {
                g: wired.gateway,
                n: wired.subnet,
                a: wired.ip,
              },
            };
          }
          //Configure Wireless (Wi-Fi) if present
          if (wireless && wireless.ssid && wireless.pass) {
            provisioningPayload.payload.w = {
              o: true,
              s: wireless.ssid,
              p: wireless.pass,
              d: true,
            };
            //Set Static IP without DCHP if specified
            if (!!wireless.ip && !!wireless.subnet && !!wireless.gateway) {
              provisioningPayload.payload.w.d = false;
              provisioningPayload.payload.w.n = {
                g: wireless.gateway,
                n: wireless.subnet,
                a: wireless.ip,
              };
            }
          }
          if (provisioningPayload !== null) {
            //Fix
            if (model && serial && provisioningPayload.payload) {
              provisioningPayload.payload.kvp.push({
                k: "Hostname",
                v: model + "-" + serial + ".local",
              });
            }
            try {
              const payloadSafePrint = JSON.parse(
                JSON.stringify(provisioningPayload.payload)
              );
              if (payloadSafePrint) {
                if (payloadSafePrint.w && payloadSafePrint.w.p) {
                  payloadSafePrint.w.p = "***";
                }
                if (payloadSafePrint.c && payloadSafePrint.c.length > 0) {
                  for (let i = 0; i < payloadSafePrint.c.length; i++) {
                    payloadSafePrint.c.k = "***";
                  }
                }
                log(
                  "Provisioning Payload (masked sensitive data): " +
                    JSON.stringify(payloadSafePrint, null, 2)
                );
              }
            } catch (e) {
              log("Provisioning Payload couldn't be printed: " + e);
            }
            log("Sending provisioning command...");
            ThalesHelperSdk.start(undefined, undefined, {
              isProvisioning: true,
              readerHost: readerHost,
              apiId: "dummy",
              apiKey: "dummy",
              isProvisioning: true,
            });
            resolve({
              start: new Promise((intRes, intRej) => {
                startedP.resolve = intRes;
                startedP.reject = intRej;
              }),
              check: new Promise((intRes, intRej) => {
                successP.resolve = intRes;
                successP.reject = intRej;
              }),
            });
          } else {
            log("Invalid provisioning payload");
            reject(ThalesHelperSdk.NOT_SETUP);
            if (provTimer) {
              window.clearTimeout(provTimer);
            }
          }
        });
      },
      unprovision: () => {
        log("unprovision() called");
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        //Timer in case unprovisioned event is not received
        const AFTER_TIMEOUT = 30 * 1000; //30secs

        return new Promise(async (resolve, reject) => {
          let timer = null;
          //Set callbacks
          onUnProvisionedFailed = (code) => {
            //avoid multiple triggers
            if (timer) {
              window.clearTimeout(timer);
            }
            onUnProvisioned = () => {};
            onUnProvisionedFailed = () => {};
            reject(code ? code : ThalesHelperSdk.FAILED);
          };

          onUnProvisioned = () => {
            //avoid multiple triggers
            onUnProvisioned = () => {};
            onUnProvisionedFailed = () => {};
            if (timer) {
              window.clearTimeout(timer);
            }
            resolve();
          };

          //Connect first
          try {
            await ThalesHelperSdk.v2.connect({});
          } catch (code) {
            reject(code ? code : ThalesHelperSdk.FAILED);
            return;
          }
          //send unprovisioning command
          let status = ThalesHelperSdk.start(undefined, undefined, {
            isUnProvisioning: true,
          });
          if (status !== ThalesHelperSdk.EXECUTING) {
            log("Error on flow, status was: " + status);
            reject(ThalesHelperSdk.FAILED);
            onUnProvisioned = () => {};
            onUnProvisionedFailed = () => {};
          }
          //Wait sometime in case unprovisioned event is lost
          if (timer) {
            window.clearTimeout(timer);
          }
          timer = window.setTimeout(() => {
            //avoid multiple triggers
            onUnProvisioned = () => {};
            onUnProvisionedFailed = () => {};
            log("Unprovisioning event was not received, consider success");
            resolve();
          }, AFTER_TIMEOUT);
        });
      },
      storeProvisioningPayload: function (cfg) {
        if (!readerInitialized) {
          log("Not initialized");
          return false;
        }
        if (!(cfg && cfg.length > 0)) {
          return false;
        }
        return storeSetupReaderList(cfg);
      },
      swapSides: function () {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        //Front image classified as back
        //This means images were taken from wrong side
        //swap sides for all images
        if (imagePayload.frontWhiteImage) {
          const t = imagePayload.backWhiteImage;
          imagePayload.backWhiteImage = imagePayload.frontWhiteImage;
          imagePayload.frontWhiteImage = t;
        }
        if (imagePayload.frontUVImage) {
          const t = imagePayload.backUVImage;
          imagePayload.backUVImage = imagePayload.frontUVImage;
          imagePayload.frontUVImage = t;
        }
        if (imagePayload.frontIRImage) {
          const t = imagePayload.backIRImage;
          imagePayload.backIRImage = imagePayload.frontIRImage;
          imagePayload.frontIRImage = t;
        }
      },
      setConnSettings: function ({
        save,
        readerList,
        readerHost,
        apiId,
        apiKey,
        readerModel,
        readerSerial,
        ipRangeStart,
        ipRangeEnd,
        tempApiId,
        tempApiKey,
      }) {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        //Because file upload won't notify in case of a user dismisses the window
        //the promise will return or not return at all
        return new Promise((resolve) => {
          if (!readerInitialized) {
            log("Not initialized");
            return;
          }
          //Check if input is intented type for security reasons
          //even if likely not required
          if (
            !isString(readerHost) ||
            !isString(apiId) ||
            !isString(apiKey) ||
            !isString(readerModel) ||
            !isString(readerSerial) ||
            !isString(ipRangeStart) ||
            !isString(ipRangeEnd) ||
            !isString(tempApiId) ||
            !isString(tempApiKey) ||
            !isBoolean(save)
          ) {
            log("Security, not a string!");
            return null;
          }
          if (
            !!readerHost ||
            (!!readerModel && !!readerSerial) ||
            (ipRangeStart && ipRangeEnd) ||
            (apiId && apiKey) ||
            (tempApiId && tempApiKey)
          ) {
            if (!readerConnSettings) readerConnSettings = {};
            if (!!readerHost || (!!readerModel && !!readerSerial)) {
              //Set hostname or IP
              readerConnSettings.readerHost = !!readerHost
                ? readerHost
                : readerModel.toLowerCase() +
                  "-" +
                  readerSerial.toLowerCase() +
                  ".local";
              log(
                "Configuration Updated. Reader Host is: " +
                  readerConnSettings.readerHost
              );
              //Set serial and model, even if there is readerHost
              if (!!readerModel && !!readerSerial) {
                readerConnSettings.readerSerial = readerSerial;
                readerConnSettings.readerModel = readerModel;
                log("Reader Model set: " + readerConnSettings.readerModel);
                log("Reader Serial set: " + readerConnSettings.readerSerial);
              }
            }
            if (!!apiId && !!apiKey) {
              readerConnSettings.apiId = apiId;
              readerConnSettings.apiKey = apiKey;
              log(
                "Configuration Updated. API ID, API Key is: " +
                  readerConnSettings.apiId +
                  ", ********"
              );
            }
            if (!!tempApiId && !!tempApiKey) {
              readerConnSettings.tempApiId = tempApiId;
              readerConnSettings.tempApiKey = tempApiKey;
              log(
                "Configuration Updated. Temporary API ID, API Key is: " +
                  readerConnSettings.tempApiId +
                  ", ********"
              );
            }
            if (!!ipRangeStart && !!ipRangeEnd) {
              readerConnSettings.ipRangeStart = ipRangeStart;
              readerConnSettings.ipRangeEnd = ipRangeEnd;
              log(
                "Configuration Updated. Fallback scanning IP range: " +
                  readerConnSettings.ipRangeStart +
                  "-" +
                  readerConnSettings.ipRangeEnd
              );
            }
          }
          if (!!readerList && readerList.length > 0) {
            if (!storeReaderList(readerList)) {
              log("Error in parsing reader list");
            }
          }
          if (!readerConnSettings) {
            readerConnSettings = {};
          }
          if (!readers) {
            readers = [];
          }
          const credsStorage = save ? window.localStorage : null;
          if (credsStorage != null) {
            try {
              credsStorage.setItem(
                localStorageReaderSettings,
                JSON.stringify({
                  readerHost: readerConnSettings.readerHost,
                  ipRangeStart: readerConnSettings.ipRangeStart,
                  ipRangeEnd: readerConnSettings.ipRangeEnd,
                  apiId: storeApiKeys ? readerConnSettings.apiId : undefined,
                  apiKey: storeApiKeys ? readerConnSettings.apiKey : undefined,
                  readers: readers,
                  tempApiId: storeApiKeys
                    ? readerConnSettings.tempApiId
                    : undefined,
                  tempApiKey: storeApiKeys
                    ? readerConnSettings.tempApiKey
                    : undefined,
                })
              );
              log("Configuration stored in local storage");
            } catch (err) {
              log("Error storing settings in local storage: " + err);
            }
          }

          onConnSettingsChanged();
          resolve();
        });
      },
      listReaders: function () {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        const list = [];
        if (readers) {
          for (let i = 0; i < readers.length; ++i) {
            if (readers[i].name) {
              list.push({
                name: readers[i].name,
                host: readers[i].readerHost,
              });
            }
          }
        }
        return list;
      },
      selectReader: function (name, save) {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        for (let i = 0; i < readers.length; ++i) {
          if (readers[i].name === name) {
            ThalesHelperSdk.v2.setConnSettings({
              save: save,
              readerHost: readers[i].readerHost,
              readerSerial: readers[i].readerSerial,
              readerModel: readers[i].readerModel,
              ipRangeStart: readers[i].ipRangeStart,
              ipRangeEnd: readers[i].ipRangeEnd,
              apiId: readers[i].apiId,
              apiKey: readers[i].apiKey,
              tempApiId: readers[i].tempApiId,
              tempApiKey: readers[i].tempApiKey,
            });
            log("Active Reader: " + name);
            //End session if a differnet reader is connected
            if (
              lastConnectedReader &&
              name !== lastConnectedReader &&
              isReaderConnected
            ) {
              ThalesHelperSdk.end();
            }
            lastConnectedReader = name;
            return name;
          }
        }
        log("Reader " + name + " could not be found");
        return null;
      },
      getLogs: function ({ sdkLobs, readerLogs }) {
        return {
          sdk: sdkLobs
            ? {
                log: ThalesHelperSdk.getLogs(),
                time: new Date().toLocaleTimeString(),
              }
            : null,
          device: readerLogs ? otherData.readerLogs : null,
        };
      },
      setTls: function (enable) {
        plainWebSocket =
          enable !== undefined && enable !== null ? !enable : false;
      },
      getVersion: function () {
        return VERSION;
      },
      hasApiAccessOnly: function () {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        return (
          !!readerConnSettings.apiKey &&
          !!readerConnSettings.apiId &&
          !readerConnSettings.readerHost
        );
      },
      hasNetworkAccessOnly: function () {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        return (
          (!readerConnSettings.apiKey || !readerConnSettings.apiId) &&
          !!readerConnSettings.readerHost
        );
      },
      getState: function () {
        let serial = null;
        let model = null;
        let firmware = null;
        if (
          otherData &&
          otherData.readerLogs &&
          otherData.readerLogs[ThalesHelperSdk.LOG_DEVICE_INFO] &&
          otherData.readerLogs[ThalesHelperSdk.LOG_DEVICE_INFO].log
        ) {
          serial =
            otherData.readerLogs[ThalesHelperSdk.LOG_DEVICE_INFO].log.serial;
          model =
            otherData.readerLogs[ThalesHelperSdk.LOG_DEVICE_INFO].log.model;
          firmware =
            otherData.readerLogs[ThalesHelperSdk.LOG_DEVICE_INFO].log.version;
        } else if (readerConnSettings) {
          serial = readerConnSettings.readerSerial;
          model = readerConnSettings.readerModel;
        }
        model = model ? model.toUpperCase() : null;
        return {
          state: captureState,
          //Trust the model more as isTwoSided may not have been set yet
          //but is model is not present then use the isTwoSided
          doubleCamera: model === "CR5400I" || isTwoSided,
          expected: isTwoSided ? requiredImages : requiredImages / 2,
          pending: captureStateGetData - captureStateDownload,
          model: model,
          serial: serial ? serial.toUpperCase() : null,
          camera: cameraDims,
          firmware: firmware,
          lastFailedSocketState: lastFailedSocketState,
        };
      },
      getHost: function (isHttpPage) {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        if (!readerConnSettings) {
          return null;
        }
        return !isHttpPage
          ? readerConnSettings.readerHost
          : plainWebSocket
          ? "http://" + readerConnSettings.readerHost + "/"
          : "https://" + readerConnSettings.readerHost + "/";
      },
      checkIp: function ({ ip, timeout, checkTime }) {
        const DEFAULT_INTERVAL = 2 * 1000;
        return new Promise((resolve, reject) => {
          //Default is 5 minutes, during which it is checking every 2 seconds
          const interval = checkTime > 0 ? checkTime : DEFAULT_INTERVAL;
          let checking = false;
          log(ip + " is being checked...");
          const timer = window.setInterval(() => {
            if (checking) return;
            checking = true;
            const socket = new WebSocket(
              (!plainWebSocket ? "wss://" : "ws://") + ip
            );
            socket.onopen = () => {
              window.clearInterval(timer);
              log("Found IP: " + ip);
              resolve();
            };
            socket.onerror = () => {
              checking = false;
              //If no timeout set, then reject right away
              if (!timeout || timeout <= 0) {
                log("Check IP failed");
                window.clearInterval(timer);
                reject();
              }
            };
          }, interval);
          if (timeout > 0) {
            window.setTimeout(() => {
              log("Check IP timed out after " + timeout + " (ms)");
              window.clearInterval(timer);
              reject();
            }, timeout);
          }
        });
      },
      fetchReaderLogs: function ({ isApp, isSdk, isAccess, timeout, force }) {
        if (!readerInitialized) {
          log("Not initialized");
          return;
        }
        if (!isReaderConnected) {
          log("Logs cannot be fetched as reader is not connected");
          return;
        }
        const logs = {
          sdk: Promise.resolve(),
          app: Promise.resolve(),
          access: Promise.resolve(),
        };

        function shouldGetLogs(type) {
          if (force) {
            log("Skipping log time checking");
            return true;
          }
          const now = new Date().getTime();
          if (window.localStorage) {
            try {
              const stored = window.localStorage.getItem(localStorageLogUpdate);
              if (stored) {
                const json = JSON.parse(stored);
                if (json) {
                  lastAskForUpdateLogs = json.lastAskForUpdateLogs;
                  lastUpdateLogs = json.lastUpdateLogs;
                }
              }
            } catch (e) {
              log("Error reading from storage reader log timings: " + e);
            }
          }
          if (
            lastAskForUpdateLogs &&
            now <= lastAskForUpdateLogs + minTimeUpdateLogs
          ) {
            log(
              "Cannot ask logs before " +
                new Date(lastAskForUpdateLogs + minTimeUpdateLogs)
            );
            return false;
          }
          const yes =
            !lastUpdateLogs[type] ||
            now > maxTimeUpdateLogs + lastUpdateLogs[type];
          if (yes) {
            if (lastUpdateLogs[type]) {
              log(
                "Asking new logs, last logs received " +
                  new Date(lastUpdateLogs[type])
              );
            } else {
              log("First time asking for logs");
            }
            //Update the time the SDK will ask the reader to get logs
            lastAskForUpdateLogs = now;
            if (window.localStorage) {
              try {
                window.localStorage.setItem(
                  localStorageLogUpdate,
                  JSON.stringify({
                    lastAskForUpdateLogs: lastAskForUpdateLogs,
                    lastUpdateLogs: lastUpdateLogs,
                  })
                );
              } catch (e) {
                log("Error storing reader log timings: " + e);
              }
            }
          } else {
            log(
              "Asking new logs, but cannot update before " +
                new Date(lastUpdateLogs[type] + maxTimeUpdateLogs)
            );
          }
          return yes;
        }
        //Update to a promise in pending state if logs asked
        try {
          if (isSdk && shouldGetLogs(ThalesHelperSdk.LOG_READERSDK)) {
            logs.sdk = new Promise((resolve, reject) => {
              sdkLogs = {
                resolve: resolve,
                reject: reject,
              };
            });
            Module.send_message({
              i: Module.getNextI(),
              d: { type: 1 },
              t: 47,
            });
          }
          if (isApp && shouldGetLogs(ThalesHelperSdk.LOG_APP)) {
            logs.app = new Promise((resolve, reject) => {
              appLogs = {
                resolve: resolve,
                reject: reject,
              };
            });
            Module.send_message({
              i: Module.getNextI(),
              d: { type: 2 },
              t: 47,
            });
          }
          if (isAccess && shouldGetLogs(ThalesHelperSdk.LOG_ACCESS)) {
            logs.access = new Promise((resolve, reject) => {
              accessLogs = {
                resolve: resolve,
                reject: reject,
              };
            });
            Module.send_message({
              i: Module.getNextI(),
              d: { type: 3 },
              t: 47,
            });
          }
          if (logTimeout !== null) {
            window.clearTimeout(logTimeout);
          }
          if (timeout > 0) {
            logTimeout = window.setTimeout(() => {
              log("Log retrieval timeout");
              if (appLogs != null) {
                appLogs.reject();
              }
              if (sdkLogs != null) {
                sdkLogs.reject();
              }
              if (accessLogs != null) {
                accessLogs.reject();
              }
            }, timeout);
          }
        } catch (err) {
          log("Error fetching logs: " + err);
        }
        return logs;
      },
      discover: function ({
        save,
        saveReaders,
        waitTime,
        ipRangeStart,
        ipRangeEnd,
        timeout,
        doRandom,
        disableCheck,
        excludeIpList,
        retries,
      }) {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }
        const DEFAULT_SEARCH = 5 * 60 * 1000;
        return new Promise((resolve, reject) => {
          let num = 0;
          const foundIP = [];
          const searchTimeout = timeout > 0 ? timeout : DEFAULT_SEARCH;
          window.setTimeout(() => {
            log(
              "Timed out searching for IP in " +
                searchTimeout +
                "ms -> tries " +
                num
            );
            if (foundIP && foundIP.length > 0) {
              log("Found IP(s) after exhausting search: " + foundIP);
              resolve({
                ip: foundIP[0],
                auth: null,
                ipListL: foundIP,
              });
            } else {
              reject(ThalesHelperSdk.TIMEOUT);
            }
          }, searchTimeout);

          const startTime = Date.now();
          const ipStart = ipRangeStart
            ? ipRangeStart
            : readerConnSettings && readerConnSettings.ipRangeStart
            ? readerConnSettings.ipRangeStart
            : readerConnSettings &&
              readerConnSettings.readerHost &&
              !readerConnSettings.readerHost.includes(".local")
            ? readerConnSettings.readerHost
            : null;
          if (!ipStart) {
            log("Starting IP range not defined");
            reject(ThalesHelperSdk.FAILED);
            return;
          }
          const startIpArr = ipStart.split(".");
          if (startIpArr.length !== 4) {
            log("Start IP defined not a valid IPv4 format of A.B.C.D");
            reject(ThalesHelperSdk.FAILED);
            return;
          }
          let ipEnd =
            ipRangeStart && ipRangeEnd
              ? ipRangeEnd
              : readerConnSettings &&
                readerConnSettings.ipRangeStart &&
                readerConnSettings.ipRangeEnd
              ? readerConnSettings.ipRangeEnd
              : null;
          if (!ipEnd) {
            //One IP less than Start IP to loop around all 255 IPs or from 0-255
            ipEnd =
              startIpArr[0] +
              "." +
              startIpArr[1] +
              "." +
              startIpArr[2] +
              "." +
              (startIpArr[3] > 0 ? startIpArr[3] - 1 : 255);
          }
          const endIpArr = ipEnd.split(".");
          if (endIpArr.length !== 4) {
            log("End IP defined not a valid IPv4 format of A.B.C.D");
            reject(ThalesHelperSdk.FAILED);
            return;
          }
          if (
            startIpArr[0] !== endIpArr[0] ||
            startIpArr[1] !== endIpArr[1] ||
            startIpArr[2] !== endIpArr[2]
          ) {
            log(
              "Maximum range of IPs is 256. Only last part of IP ranges can be different"
            );
            reject(ThalesHelperSdk.FAILED);
            return;
          }

          let startIp = Number(startIpArr[3]);
          let endIp = Number(endIpArr[3]);
          if (
            startIp === NaN ||
            endIp === NaN ||
            startIp < 0 ||
            startIp > 255 ||
            endIp < 0 ||
            endIp > 255
          ) {
            log("IP defined doesn't apper valid");
            reject(ThalesHelperSdk.FAILED);
            return;
          }
          const range =
            startIpArr[0] + "." + startIpArr[1] + "." + startIpArr[2] + ".";
          //time to wait before opening a new socket
          const graceTimout = waitTime || 100;
          const total =
            endIp >= startIp
              ? endIp - startIp + 1
              : 255 - startIp + 1 + endIp + 1;
          //Start from a random position
          log(
            "Scanning from " + range + startIp + " to " + range + endIp + " ..."
          );
          //If set to true, the list will be automatically built
          if (excludeIpList === true) {
            excludeIpList = [];
            //Exclude all known IPs
            excludeIpList.push(ThalesHelperSdk.v2.getHost());
            const readers = ThalesHelperSdk.v2.listReaders();
            if (readers && readers.length > 0) {
              for (let i = 0; i < readers.length; ++i) {
                if (!!readers[i].host && !readers[i].host.includes(".local")) {
                  excludeIpList.push(readers[i].host);
                }
              }
            }
          }
          let excluded = null;
          if (excludeIpList && excludeIpList.length > 0) {
            //Removes duplicates
            excluded = [...new Set(excludeIpList)];
            log("Excluding IPs: " + excluded);
          }
          if (!!doRandom) {
            startIp = Math.floor(Math.random() * total) + startIp;
            if (startIp > 255) {
              startIp = startIp - 256;
            }
            endIp = startIp + total;
            if (endIp > 255) {
              endIp = endIp - 256;
            }
            log(
              "Randomized scanning, now from " +
                range +
                startIp +
                " to " +
                range +
                endIp
            );
          }

          function updateIP(ip) {
            //Update current reader, if they are defined with a static IP
            //and the current connection settings are defining a static IP
            if (saveReaders && readers && readers.length > 0) {
              const currHost = ThalesHelperSdk.v2.getHost();
              if (currHost && !currHost.includes(".local")) {
                for (let i = 0; i < readers.length; ++i) {
                  if (readers[i].readerHost === currHost) {
                    readers[i].readerHost = ip;
                  }
                }
                log("Current IP is " + currHost + " and new set is " + ip);
              }
            }
            ThalesHelperSdk.v2.setConnSettings({
              save: save,
              readerHost: ip,
              readers: readers, //include to permanently update
            });
          }

          //Start one less as it will incraese on first loop
          let i = startIp;
          let resolved = false;
          let isCreated = false;
          let checking = false;
          let ipRetries = retries > 0 ? retries : 1;
          const attempts = total * ipRetries;
          const interval = window.setInterval(() => {
            //If IP is being verified, wait for completion
            if (checking) return;
            //If max IPs have been tested or during checking resolved, end here
            if (num >= attempts || resolved) {
              window.clearInterval(interval);
              if (!resolved) {
                log("Couldn't discover IP -> tries " + num);
                resolve({
                  ip: foundIP && foundIP.length > 0 ? foundIP[0] : null,
                  auth: null,
                  ipListL: foundIP,
                  time: Date.now() - startTime,
                });
              }
              return;
            }
            //Check if all connections are created
            if (isCreated) return;
            const ip = range + i;
            if (i === endIp) {
              ipRetries--;
              isCreated = ipRetries === 0;
            }
            //Open a new socket and try if it can connect
            const socket = new WebSocket(
              (!plainWebSocket ? "wss://" : "ws://") + ip
            );
            socket.onopen = (e) => {
              num++;
              let socketIp = e && e.currentTarget ? e.currentTarget.url : ip;
              socketIp = socketIp
                .replace("wss://", "")
                .replace("ws://", "")
                .replace("/", "")
                .trim();
              log("Found IP " + socketIp + " -> tries " + num);
              //Exclude IPs
              if (excluded) {
                for (let el = 0; el < excluded.length; ++el) {
                  if (excluded[el] === socketIp) {
                    log("IP was in excluded list, ignoring");
                    return;
                  }
                }
              }
              foundIP.push(socketIp);
              //If no check, resolve here
              if (disableCheck) {
                resolved = true;
                resolve({
                  ip: socketIp,
                  auth: true,
                  time: Date.now() - startTime,
                });
                return;
              }
              //Connect just to check IP found
              checking = true;
              ThalesHelperSdk.v2
                .connect({ readerHost: socketIp })
                .then(() => {
                  log(
                    "Checked IP successfully " + socketIp + " -> tries " + num
                  );
                  resolved = true;
                  updateIP(socketIp);
                  ThalesHelperSdk.end();
                  checking = false;
                  resolve({
                    ip: socketIp,
                    auth: true,
                    time: Date.now() - startTime,
                  });
                })
                .catch((err) => {
                  log(
                    "Checked IP with error [" +
                      err +
                      "] " +
                      socketIp +
                      " -> tries " +
                      num
                  );
                  if (
                    err === ThalesHelperSdk.APIKEY ||
                    err === ThalesHelperSdk.READER_IN_USE
                  ) {
                    resolved = true;
                    updateIP(socketIp);
                    ThalesHelperSdk.end();
                    checking = false;
                    resolve({
                      ip: socketIp,
                      auth: err !== ThalesHelperSdk.APIKEY,
                      time: Date.now() - startTime,
                    });
                  } else {
                    log("Fount IP but failed to connect to the Reader");
                  }
                  checking = false;
                });
            };
            socket.onerror = (e) => {
              num++;
            };
            i++;
            //Next IP, "loop around" as End Ip maybe smaller than Start IP
            if (i > 255) i = 0;
          }, graceTimout);
        });
      },
      updateFirmware: function ({ fwFile, fwUrl, statusCb, timeout }) {
        if (!readerInitialized) {
          log("Not initialized");
          return null;
        }

        async function base64_arraybuffer(data) {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.result) {
                log("base64_arraybuffer() read the file");
                resolve(reader.result.split(",", 2)[1]);
              }
            };
            reader.onerror = (e) => {
              log("base64_arraybuffer() error: " + e);
              reject(ThalesHelperSdk.FAILED);
            };
            reader.readAsDataURL(new Blob([data]));
          });
        }

        async function uploadPart(name, data, part, isFinal) {
          //time to wait until new upload, to avoid too quick operations
          const GRACE_TIME = 500; //500ms
          return new Promise((resolve, reject) => {
            //Set timeout for uploading a part
            //this is to accomodate scenarios it is extremely slow or it is stuck
            const uploadTimeoutDefault = 2 * 60 * 1000; //2 mins
            const fwUploadTimeout =
              timeout > 0
                ? Min(timeout, uploadTimeoutDefault)
                : uploadTimeoutDefault;
            const timer = window.setTimeout(() => {
              log(
                "Upload FW part took too more than " + fwUploadTimeout + "ms"
              );
              onUploadFwPart = () => {};
              reject(ThalesHelperSdk.TIMEOUT);
            }, fwUploadTimeout);

            //Set callback for upload part success
            onUploadFwPart = () => {
              if (timer) {
                window.clearTimeout(timer);
              }
              log("FW Part uploaded: " + part);
              onUploadFwPart = () => {};
              window.setTimeout(() => {
                resolve();
              }, GRACE_TIME);
            };

            //Send part to reader
            log("Sending upload command for part: " + part);
            Module.send_message({
              i: Module.getNextI(),
              d: {
                name: name,
                data: data,
                part: part,
                isFinal: isFinal,
              },
              t: 79,
            });
          });
        }

        return new Promise(async (resolve, reject) => {
          //Get File or URL to udpate firmware
          let file, url;
          if (!fwFile && !fwUrl) {
            if (
              !firmwarePayload ||
              !firmwarePayload.file ||
              !firmwarePayload.url
            ) {
              log("No firmware payload defined");
              reject(ThalesHelperSdk.NOT_SETUP);
              return;
            }
            file = firmwarePayload.file;
            url = firmwarePayload.url;
          } else {
            file = fwFile || null;
            url = fwUrl || null;
          }
          const fwTimeoutDef = 20 * 60 * 1000; //20mins
          const fwTimeout = timeout > 0 ? timeout : fwTimeoutDef;
          let hasFailed = false;
          onFwUpdate = () => {};
          onFwUpdateFailed = () => {};
          onUploadFwPart = () => {};

          const timer = window.setTimeout(() => {
            log("FW Update timed out after " + FW_TIMEOUT + "ms");
            hasFailed = true;
            onUploadFwPart = () => {};
            onFwUpdateFailed = () => {};
            onFwUpdate = () => {};
            onFwUpdateStart = () => {};
            reject(ThalesHelperSdk.TIMEOUT);
          }, fwTimeout);

          try {
            //Connect to reader
            const startResolver = {
              resolve: null,
              reject: null,
            };
            const startPromise = new Promise((res, rej) => {
              startResolver.resolve = res;
              startResolver.reject = rej;
            });
            onFwUpdateStart = () => {
              startResolver.resolve();
            };
            await ThalesHelperSdk.v2.connect({});
            let status = ThalesHelperSdk.start(undefined, undefined, {
              isFwUpdate: true,
            });
            if (status !== ThalesHelperSdk.EXECUTING) {
              log("Error on flow, status was: " + status);
              reject(ThalesHelperSdk.FAILED);
            }
            await startPromise;

            //Upload FW file chunks
            if (file) {
              const chunkSize = 500000;
              const totalParts = ~~(file.size / chunkSize) + 1;
              let part = 0; // part * chunksize == i
              for (let i = 0; i < file.size; i += chunkSize) {
                if (hasFailed) break;
                const chunk = file.slice(i, i + chunkSize);
                const buffer = new Uint8Array(await chunk.arrayBuffer());
                const data = await base64_arraybuffer(buffer);
                const isFinal = i + chunkSize >= file.size;
                await uploadPart(file.name, data, part, isFinal);
                log("Uploaded FW part: " + part + "/" + totalParts);
                if (typeof statusCb === "function") {
                  window.setTimeout(() => {
                    statusCb(part, totalParts);
                  }, 100);
                }
                part++;
              }
              log("All FW parts uploaded. Upgrading FW...");
            } else if (url && url.toLowerCase().startsWith("http")) {
              log("Retrieving image from URL");
            } else if (url && url.toLowerCase().startsWith("file")) {
              log("Upgrading FW from existing file...");
            } else {
              log("FW Update Config Error, 'file' or 'url' must be included");
              reject(ThalesHelperSdk.FAILED);
              return;
            }
            onFwUpdate = () => {
              log("FW upgrade success");
              if (timer) window.clearTimeout(timer);
              resolve();
            };
            onFwUpdateFailed = () => {
              log("FW upgrade failed");
              if (timer) window.clearTimeout(timer);
              reject(ThalesHelperSdk.FAILED);
            };
            log("Sending FW Update command");
            const target = file
              ? { file: file.name }
              : url && url.toLowerCase().startsWith("file")
              ? { file: url.replaceAll("file:", "").replaceAll("/", "") }
              : { url: url };
            Module.send_message({
              i: Module.getNextI(),
              d: target,
              t: 71,
            });
          } catch (e) {
            hasFailed = true;
            log(
              "Error uploading FW part " +
                part +
                "/" +
                totalParts +
                " [" +
                e +
                "]"
            );
            if (timer) window.setTimeout(timer);
            reject(ThalesHelperSdk.FAILED);
          }
        });
      },
    },
    STATE: STATE,
  };
})();
//Ensure it is accessible under window global variable
window.ThalesHelperSdk = ThalesHelperSdk;
