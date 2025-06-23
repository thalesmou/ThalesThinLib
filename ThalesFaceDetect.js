/* 
 The SAMPLE CODE is NOT a Thales product and *NOT* under any Support and Maintainance contract 
 or agreement. Thales takes no liability or responsibilty for damages due to errors in this code.
 This SAMPLE CODE is NOT under any license agreement by Thales or other parties or under any open 
 source agreements. Third party libraries maybe used by reference, but are never embedded in this cdoe.
*/

//** Comment the right line depending if it should be a module or not
//import {ThalesFaceDetect} from './ThalesFaceDetect.js'
//export var ThalesFaceDetect;
var ThalesFaceDetect;
ThalesFaceDetect = (function () {
  "use strict";

  const VERSION = "1.0.0";
  //*** Face Detection
  const MIN_FACE_DETCTION_THRESHOLD = 0.1;
  const FACE_DETCTION_THRESHOLD = 0.7; //as of 11.9.0
  const MIN_FACE_SIZE_FOR_MOBILE = 224;
  const X_OFFSET_FROM_FRAME = 0;
  const Y_OFFSET_FROM_FRAME = 0;
  const MIN_OCCUPIED_SPACE_FOR_MOBILE = 15;

  /* Get face detection using face-api.js from a still image
	obj: Image or HTML Video Element, //input
	config: {
		faceDetection : JSON object, //same as resizeImage
	}
	tryInverse: boolean, //same as with faceDetection.tryInverse as in resizeImage config
		
	RETURN Primise with result object
	{
		result: ThalesThinLib.ENUM, //FACE_OK, FACE_NOT_FOUND, 
    //FACE_CLOSE_TO_BORDER, PROBABILITY_TOO_SMALL, FACE_CLOSE_TO_BORDER, FACE_TOO_SMALL, TOO_MANY_FACES
		score: number, //Face detection score from 0 to 1
	}
	OR null if some unexpected error occured
	*/
  function faceDetectionImage(obj, config, tryInverse) {
    return new Promise((resolve, reject) => {
      if (detectingFace) {
        log("Already detecting face");
        reject(ThalesThinLib.ENUM.DETECTION_RUNNING);
        return;
      }
      detectingFace = true;
      const DEFAULT_TIMEOUT = 5000;
      const timeout =
        config && config.faceDetection && config.faceDetection.timeout > 0
          ? config.faceDetection.timeout
          : DEFAULT_TIMEOUT;
      window.setTimeout(() => {
        reject(ThalesThinLib.ENUM.ERROR_TIMEOUT);
      }, timeout);
      if (!initFaceP) {
        //Not initialized, initialize now
        if (!config || !config.faceDetection || !config.faceDetection.models) {
          log("Configuration requires faceDetection.models");
          reject(null);
          return;
        }
        initFaceWarmedUp = true; //Disable warming up
        initFaceDetection(config);
      }
      const doInverse =
        tryInverse !== undefined ? tryInverse : config.faceDetection.tryInverse;
      let start = Date.now();
      const configFrame = {
        captureType: {
          type: ThalesThinLib.ENUM.FACE, //always use this
          quality: 0.8, //From AcuantPassiveLiveness.min.js
          overrideFaceImageSize: config.faceDetection.resizeOptimization
            ? 640
            : FACE_IMAGE_WIDTH,
        },
      };
      resizeImage(obj, configFrame).then((rObj) => {
        const img = rObj.image.imageObject;
        log("Resize Optimization: " + (Date.now() - start) / 1000 + " secs");
        start = Date.now();
        faceDetectionInt(img, config)
          .then((r) => {
            if (!r) {
              log("faceDetectionInt() failed");
              detectingFace = false;
              reject(null);
              return;
            }
            r.wasRotated = false;
            //Need to adjust back to the original image all coordinates on resized image
            const ratioX = rObj.original.width / rObj.image.imageObject.width;
            const ratioY = rObj.original.height / rObj.image.imageObject.height;
            log(
              "Face Detection Executed: " +
                (Date.now() - start) / 1000 +
                " secs with result " +
                JSON.stringify(r, null, 2)
            );
            r.time = Date.now() - start;
            if (!doInverse) {
              if (r.image) {
                r.image.x = Math.round(r.image.x * ratioX);
                r.image.y = Math.round(r.image.y * ratioY);
                r.image.width = Math.round(ratioX * r.image.width);
                r.image.height = Math.round(ratioY * r.image.width);
                log(
                  "Adjusted extracted detected face image: " +
                    JSON.stringify(r.image, null, 2)
                );
              }
              detectingFace = false;
              resolve(r);
              return;
            }
            //Rotate image and try again
            let quality = isFaceMode(config)
              ? DEFAULT_FACE_QUALITY
              : DEFAULT_DOC_QUALITY;
            if (config && config.captureType && config.captureType.quality) {
              quality = config.captureType.quality;
            }
            const isImageData =
              !!config && config.captureType && config.captureType.isImageData;
            const degrees = 180;
            start = Date.now();
            rotateImage(img, degrees, quality, isImageData).then((rImg) => {
              log("Face Rotation: " + (Date.now() - start) / 1000 + " secs");
              start = Date.now();
              faceDetectionInt(rImg.image.imageObject, config)
                .then((r2) => {
                  if (!r2) {
                    log("faceDetectionInt() failed");
                    return null;
                  }
                  r2.wasRotated = true;
                  log(
                    "Face Detection Executed: " +
                      (Date.now() - start) / 1000 +
                      " secs"
                  );
                  r2.time = Date.now() - start;
                  log(
                    "Comparing results: " +
                      JSON.stringify(r, null, 2) +
                      " VS " +
                      JSON.stringify(r2, null, 2)
                  );
                  if (r2.score > r.score) {
                    r = r2;
                  }
                  if (r.image) {
                    r.image.x *= ratioX;
                    r.image.y *= ratioY;
                    r.image.width *= ratioX;
                    r.image.height *= ratioY;
                    log(
                      "Adjusted extracted detected face image: " +
                        JSON.stringify(r.image, null, 2)
                    );
                  }
                  detectingFace = false;
                  if (config.simpleCheck && r && r.result) {
                    if (r.result === "PROBABILITY_TOO_SMALL") {
                      r.result = "FACE_NOT_FOUND";
                    } else if (
                      r.result === "FACE_TOO_SMALL" ||
                      r.result === "TOO_MANY_FACES" ||
                      r.result === "FACE_CLOSE_TO_BORDER"
                    ) {
                      r.result = "FACE_OK";
                    }
                  }
                  resolve(r);
                })
                .catch((err) => {
                  log("faceDetectionInt (rotated) error: " + err);
                  detectingFace = false;
                  reject(null);
                });
            });
          })
          .catch((err) => {
            log("faceDetectionInt error: " + err);
            detectingFace = false;
            reject(null);
          });
      });
    });
  }

  //Internal - Using face-api.js
  async function faceDetectionInt(obj, config) {
    if (!initFaceP) {
      log("ERROR: Call init first");
      return {
        result: null,
        score: 0,
        points: null,
        dimensions: null,
      };
    }
    try {
      await initFaceP;
    } catch (e) {
      log("faceapi init error: " + e);
      return {
        result: null,
        score: 0,
        points: null,
        dimensions: null,
      };
    }
    let results;
    const minThresh =
      !!config && config.faceDetection && !!config.faceDetection.minThreshold
        ? config.faceDetection.minThreshold
        : MIN_FACE_DETCTION_THRESHOLD;
    const thresh =
      config && config.faceDetection && config.faceDetection.threshold
        ? config.faceDetection.threshold
        : FACE_DETCTION_THRESHOLD;
    const minArea =
      config && config.faceDetection && config.faceDetection.minimumArea
        ? config.faceDetection.minimumArea
        : MIN_OCCUPIED_SPACE_FOR_MOBILE;
    const minFaceAllowed =
      config &&
      config.faceDetection &&
      config.faceDetection.minFaces !== undefined
        ? config.faceDetection.minFaces
        : 1;
    try {
      const options = new faceapi.TinyFaceDetectorOptions({
        inputSize: 192,
        scoreThreshold: minThresh,
      });
      results = await faceapi.detectAllFaces(obj, options);
    } catch (e) {
      log("faceapi.detectAllFaces error: " + e);
      return {
        result: null,
        score: 0,
        points: null,
        dimensions: null,
      };
    }
    log("Face Detection Results: " + JSON.stringify(results, null, 2));
    if (!results || results.length == 0) {
      return {
        result: ThalesThinLib.ENUM.FACE_NOT_FOUND,
        score: minThresh,
        points: null,
        dimensions: null,
      };
    }
    let hiScore = 0;
    let result = null;
    let facesFound = 0;
    for (let i = 0; i < results.length; ++i) {
      hiScore = Math.max(hiScore, results[i]._score);
      if (results[i]._score > thresh) {
        facesFound++;
        if (results[i]._score >= hiScore) {
          result = results[i];
        }
      }
    }
    if (result === null) {
      return {
        result: ThalesThinLib.ENUM.PROBABILITY_TOO_SMALL,
        score: hiScore,
        points: null,
        dimensions: null,
      };
    }
    if (facesFound > minFaceAllowed) {
      return {
        result: ThalesThinLib.ENUM.TOO_MANY_FACES,
        score: hiScore,
        points: null,
        dimensions: null,
      };
    }
    const imageHeight = result.imageDims.height;
    const imageWidth = result.imageDims.width;
    const width = result.box.width;
    const height = result.box.height;
    const left = result.box.x;
    const top = result.box.y;
    const right = width + left;
    const bottom = height + top;
    const area = 100 / ((imageWidth * imageHeight) / result.box.area);
    //Extracted face image coordinates
    const coords = [top, right, top, bottom];
    const dims = { width: width, height: height };
    log(
      "Face [area,left,right,top,bottom] : [" +
        area +
        "," +
        left +
        "," +
        right +
        "," +
        top +
        "," +
        bottom +
        "]"
    );
    const videoElement = !!config.videoElementId
      ? document.getElementById(config.videoElementId)
      : null;
    const videoRatio = !videoElement
      ? 1
      : Math.min(
          videoElement.clientWidth / videoElement.videoWidth,
          videoElement.clientHeight / videoElement.videoHeight
        );
    const check1 =
      Math.min(width / videoRatio, height / videoRatio) >
      MIN_FACE_SIZE_FOR_MOBILE;
    const check2 = area > minArea;
    if (!check1 || !check2) {
      return {
        result: ThalesThinLib.ENUM.FACE_TOO_SMALL,
        score: result._score,
        points: coords,
        dimensions: dims,
      };
    }
    if (
      top < Y_OFFSET_FROM_FRAME ||
      left < X_OFFSET_FROM_FRAME ||
      imageWidth - right < X_OFFSET_FROM_FRAME ||
      imageHeight - bottom < Y_OFFSET_FROM_FRAME
    ) {
      return {
        result: ThalesThinLib.ENUM.FACE_CLOSE_TO_BORDER,
        score: result._score,
        points: coords,
        dimensions: dims,
      };
    }
    return {
      result: ThalesThinLib.ENUM.FACE_OK,
      score: result._score,
      points: coords,
      dimensions: dims,
    };
  }

  /* Initialize face-api.js and pre-execute the modules to speedup first run
	obj: Image or HTML Video, //input
	config: {
		faceDetection : JSON object, //same as resizeImage
	}
		
	RETURN -
	*/
  async function initFaceDetection(cfg) {
    if (!!initFaceP) return;

    if (!cfg || !cfg.faceDetection || !cfg.faceDetection.models) {
      log("ERROR: cfg.faceDetection.models no defined");
      return;
    }

    const loadLibs = new Promise((resolve, reject) => {
      if (!!window.faceapi) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src =
        cfg.faceDetection && cfg.faceDetection.library
          ? cfg.faceDetection.library
          : "./face-api.min.js";
      script.onload = () => {
        resolve();
      };
      script.onerror = (err) => {
        log("ERROR: " + script.src + " not loaded. Check path: " + err);
        reject();
      };
      document.body.appendChild(script);
    });

    const mdelsPath = cfg.faceDetection.models;
    let start = Date.now();

    initFaceP = new Promise((resolve, reject) => {
      log("Face Detection being initialized...");
      loadLibs
        .then(() => {
          log("Face Detection Libs loaded");
          window.faceapi
            .loadTinyFaceDetectorModel(mdelsPath)
            .then(() => {
              log(
                "Face Detection Models initialized: " +
                  (Date.now() - start) / 1000 +
                  " secs"
              );
              if (initFaceWarmedUp) {
                resolve();
                return;
              }
              const img = new Image();
              img.onload = () => {
                if (initFaceWarmedUp) {
                  log("Face detection already warmed up");
                  resolve();
                  return;
                }
                start = Date.now();
                const options = new faceapi.TinyFaceDetectorOptions({
                  inputSize: 192,
                });
                faceapi
                  .detectAllFaces(img, options)
                  .then((r) => {
                    initFaceWarmedUp = true;
                    log(
                      "Face Detection Warmed Up: " +
                        (Date.now() - start) / 1000 +
                        " secs"
                    );
                    resolve();
                  })
                  .catch((e) => {
                    log(
                      "Face detection warm up failed. But continuing. Error: " +
                        e
                    );
                    resolve();
                  });
              };
              img.onerror = (e) => {
                log("Warm up face detection image failed to be loaded: " + e);
                reject(e);
              };
              //Developer's extremly small face
              img.src =
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAgACgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOV/Za/ZM8c+P5vBOueGdc0uPwnqnjFta+1R/aEltLBb/wA5VtkdpUlaYRKqO2V8meQOz7nU/TN/+xlrWlX01rD4C0nxBDbSNEmqarrqtf6kqnAuLghlBmkA3uQq/Mx4HSiitMLTTTR62d15/WWuza+Sdkf/2Q";
            })
            .catch((e) => {
              log("Face Detection Models NOT initialized: " + e);
              reject(e);
            });
        })
        .catch((e) => {
          log("Face Detection Libs NOT loaded: " + e);
          reject(e);
        });
    });
  }

  /* Get face detection on a document image, such as from ThalesThinLib.withSdk.capture()
        side: "FRONT" or "BACK" or null/undefined for current side
        RETURN same as faceDeectionImage (but only FACE_OK or FACE_NOT_FOUND results)
      */
  async function detectOnDocument(extSession, threshold, side) {
    const session =
      extSession && extSession.internal
        ? extSession
        : globalSession
        ? globalSession
        : null;
    //record side before result as it could change
    let label =
      side && side.toUpperCase() === "FRONT"
        ? "faceDetect"
        : side && side.toUpperCase() === "BACK"
        ? "faceDeetectBack"
        : !session.internal.isBack
        ? "faceDetect"
        : "faceDetectBack";
    const bRes = !session.internal.isBack
      ? session.internal.bestResult
      : session.internal.bestResultBack;
    if (!bRes || !bRes.image || !bRes.image.data) {
      log("No image in session to do face detection");
      return null;
    }
    try {
      const r = await faceDetectionImage(
        bRes.image.data,
        {
          captureType: {
            type: window.ThalesThinLib.ENUM.FACE,
            quality: 0.8,
            overrideFaceImageSize: 1080,
          },
          faceDetection: {
            resizeOptimization: true,
            threshold: threshold || 0.3,
          },
          simpleCheck: true, //only FACE_OK or FACE_NOT_FOUND
        },
        true
      );
      if (!r) {
        r = {
          result: null,
          score: null,
          points: null,
          dimensions: null,
        };
      }
      r.threshold = threshold;
      session.internal[label] = r;
      return r;
    } catch (err) {
      log("Final face detection failed: " + e);
      return err;
    }
  }

  //Internal - Logger
  function log(text) {
    if (disableDebugger) {
      return;
    }
    const SEPARATOR = "#$#$#";
    const now = Date.now();
    let txt =
      "[Thales Face Detect][" +
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

  return {
    init: initFaceDetection,
    detect: faceDetectionImage,
    detectOnDocument: detectOnDocument,
    log: log,
    ENUM: {},
  };
})();
window.ThalesFaceDetect = ThalesFaceDetect;
