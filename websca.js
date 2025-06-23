var ThalesAuth = (function () {
  "use strict";

  const VERSION = "2.0";
  let DO_DEBUG = false;

  //Use to store abort signal for Conditional UI
  let abortSignal = null;

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

  const lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  const CODES = {
    NO_PLATFORM_AUTHENTICATOR: new DOMException(
      "This device doesn't support Passkeys, platform-only Passkeys cannot be created",
      "NO_PLATFORM_AUTHENTICATOR"
    ),
    ATTESTATION_NOT_SUPPORTED: new DOMException(
      "Attestations supported are only 'direct' or 'none",
      "ATTESTATION_NOT_SUPPORTED"
    ),
    USERNAME_REQUIRED: new DOMException(
      "No Username was included",
      "USERNAME_REQUIRED"
    ),
    RP_REQUIRED: new DOMException(
      "The RP Name or ID is required",
      "RP_REQUIRED"
    ),
    CHALLENGE_REQUIRED: new DOMException(
      "A server challenge is required",
      "CHALLENGE_REQUIRED"
    ),
  };

  const LOCAL_STORAGE = "THALES_WEBSCA_CREDENTIALID";

  async function enroll({
    challenge,
    serviceName, //rp.name
    serviceId, //rp.id
    username, //user.name
    userId, //user.id
    displayName, //user.displayName
    authenticatorSelection, //authenticatorSelection.authenticatorAttachment
    residentKey, //authenticatorSelection.residentKey
    userVerification, //authenticatorSelection.userVerification
    excludeCredentialList, //excludeCredentialList.id (comma seperated list)
    timeout,
    attestation,
    credentialName, //Friendly Name (Thales Extension)
    extensions, //add extensions
  }) {
    log("v" + VERSION);
    if (!challenge) {
      throw CODES.CHALLENGE_REQUIRED;
    }
    if (!!attestation && attestation !== "direct" && attestation !== "none") {
      throw CODES.ATTESTATION_NOT_SUPPORTED;
    }
    if (!username) {
      throw CODES.USERNAME_REQUIRED;
    }
    if (!serviceId && !serviceName) {
      throw CODES.RP_REQUIRED;
    }
    //If no User ID defined, use hash of Username
    let adjUsrId = userId;
    if (!adjUsrId) {
      const msgBuffer = new TextEncoder().encode(username);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);      
      adjUsrId = encodeBase64Url(hashBuffer);
    }
    const options = webauthnCreate({
      serviceName,
      serviceId,
      challenge,
      username,
      userId: adjUsrId,
      displayName,
      authenticatorSelection,
      timeout,
      attestation,
      residentKey,
      userVerification,
      excludeCredentialList,
      extensions,
    });
    const abort = new AbortController();
    let timer= null;
    if (options.publicKey.timeout > 0) {
      timer = window.setTimeout(() => {
        try {
          abort.abort();
        } catch (_) {}
      }, options.publicKey.timeout);
      options.signal = abort.signal;
    }
    try {
      log("Enrolling with:");
      log(options, true);
      if (authenticatorSelection === "platform") {
        const isPlatform =
          await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
        if (!isPlatform) {
          throw CODES.NO_PLATFORM_AUTHENTICATOR;
        }
      }
      const credential = await navigator.credentials.create(options);
      log("Credential Object:");
      log(credential, true);

      //get extensions
      let extensionsOut = null;
      if (credential.getClientExtensionResults) {
        extensionsOut = credential.getClientExtensionResults();
        if (!!extensionsOut && extensionsOut.size > 0) {
          log("Extensions:");
          log(extensionsOut, true);
        } else {
          extensionsOut = null;
        }
      }
      if (window.localStorage && credential.id) {            
        try {
          window.localStorage.setItem(LOCAL_STORAGE, credential.id);
          log("Stored credential ID");
        } catch (err) {
          log("Error on local storage: " + err)
        }
      }      
      if (DO_DEBUG) {
        try {
          //parse client data
          log("ClientData Object:");
          const utf8Decoder = new TextDecoder("utf-8");
          const clientDataJSON = JSON.parse(
            utf8Decoder.decode(credential.response.clientDataJSON)
          );
          log(clientDataJSON, true);
          //check challenge
          if (challenge !== clientDataJSON.challenge) {
            log("!!! Missmatch between Challenge !!!");
            log("Challenge from Client Data" + clientDataJSON.challenge, true);
            log("Challenge from Input:" + challenge, true);
          }
          if (credential.response.getTransports) {
            log(
              "Authenticator Transports:" + credential.response.getTransports(),
              true
            );
          }
          if (credential.response.getPublicKeyAlgorithm) {
            log(
              "Public Key Algo (-7: ES256, -257: RS256): " +
                credential.response.getPublicKeyAlgorithm(),
              true
            );
          }        
          if (window.CBOR) {
            const attestationObject = window.CBOR.decode(
              credential.response.attestationObject
            );
            log("AttestationObject:");
            log(attestationObject, true);
            // parse AuthData
            const authData = attestationObject.authData;
            const dataView = new DataView(new ArrayBuffer(2));
            const idLenBytes = authData.slice(53, 55);
            idLenBytes.forEach((value, index) =>
              dataView.setUint8(index, value)
            );
            const credentialIdLength = dataView.getUint16();
            // check the credential ID
            const credentialId = authData.slice(55, 55 + credentialIdLength);
            const credentialIdB64 = encodeBase64Url(credentialId);
            const rawIdB64 = encodeBase64Url(credential.rawId);
            if (
              credential.id !== credentialIdB64 ||
              credential.id !== rawIdB64
            ) {
              log("!!! Missmatch between Credential ID !!!");
              log("Main Credential ID:" + credential.id, true);
              log("Auth Data Credential ID:" + credentialIdB64, true);
              log("Raw Credential ID:" + rawIdB64, true);
            }
            // get the public key object
            const publicKeyBytes = authData.slice(55 + credentialIdLength);
            const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);
            log("Public Key Object:");
            log(publicKeyObject, true);
          } else {
            log("CBOR-JS not loaded. Skipping parsing attestion object");
          }
        } catch (err) {
          log("Error parsing data during debugging:");
          log(err);
        }
      }      

      return [idcRegisterResponse(
        credential,
        extensionsOut,
        credentialName
      ), credential.id];
    } catch (err) {
      log("Enrollment failed: " + err);
      throw err;
    } finally {
      if (timer) {
        window.clearTimeout(timer);
      }
    }
  }

  async function auth({
    challenge,
    credentialList, //allowCredentials.id (comma seperated list)
    credentialTransports, //allowCredentials.transports (comma seperated list)
    userVerification, //authenticatorSelection.userVerification
    serviceId, //rp.id
    timeout, //Authentication timeout
    isConditional, //Use Conditional UI
    credentialIdFromStorage,
  }) {
    let timer = null;
    try {
      log("v" + VERSION);
      if (!challenge) {
        throw CODES.CHALLENGE_REQUIRED;
      }
      if (credentialIdFromStorage === true && !credentialList && window.localStorage) {
        try {
          credentialList =  window.localStorage.getItem(LOCAL_STORAGE);          
        } catch (err) {
          log("Local storage error on retrieval: " + err);
        }
      }
      const options = webauthnGet({
        challenge,
        credentialList,
        credentialTransports,
        userVerification,
        serviceId,
        timeout,
      });
      log("Authenticating with:");
      log(options, true);
      //Abort previous call
      if (abortSignal) {
        try {
          abortSignal.abort();
        } catch (err) {
          log("Abort signals says: " + err);
        }
      }
      //Set abort signal, mostly useful for Conditional UI
      //but could overall be a cleaner way to get creds in general
      abortSignal = new AbortController();
      options.signal = abortSignal.signal;
      if (isConditional) {
        const isConditionalUI =
          !!PublicKeyCredential.isConditionalMediationAvailable
            ? await PublicKeyCredential.isConditionalMediationAvailable()
            : false;
        if (isConditionalUI) {
          log("Conditional UI Flow initiated...");
          options.mediation = "conditional";
          //Set automatic abortion if timeout is set
          if (options.publicKey.timeout > 0) {
            timer = window.setTimeout(() => {
              try {
                abortSignal.abort();
              } catch (err) {
                log("Abort signals says: " + err);
              }
            }, options.publicKey.timeout);
          }
        } else {
          log("Conditional UI asked, but not supported. Continuing without it");
        }
      }
      const credential = await navigator.credentials.get(options);
      log("Assertion Object:");
      log(credential, true);
      //get extensions
      let extensionsOut = null;
      if (credential.getClientExtensionResults) {
        extensionsOut = credential.getClientExtensionResults();
        if (!!extensionsOut && extensionsOut.size > 0) {
          log("Extensions:");
          log(extensionsOut, true);
        } else {
          extensionsOut = null;
        }
      }
      if (DO_DEBUG) {
        try {
          //get credential ID
          log("Credential ID:");
          log(credential.id, true);
          //get username
          const userHandleB64 = encodeBase64Url(credential.response.userHandle);
          log("User ID: " + window.atob(userHandleB64), true);
          //parse client data
          log("ClientData Object:");
          const utf8Decoder = new TextDecoder("utf-8");
          const clientDataJSON = JSON.parse(
            utf8Decoder.decode(credential.response.clientDataJSON)
          );
          log(clientDataJSON, true);
          // parse AuthData
          const authData = credential.response.authenticatorData;
          const rpIdHash = buf2hex(authData.slice(0, 32));
          log("RP ID Hash: " + rpIdHash, true);
          const flags = authData.slice(32, 33);
          const flagsInt = new DataView(flags, 0).getUint8(0);
          const UP = (flagsInt & 1) === 1;
          const UV = (flagsInt & 4) === 4;
          const BE = (flagsInt & 8) === 8;
          const BS = (flagsInt & 16) === 16;
          log("User is Verified: " + UV, true);
          log("User is Present: " + UP, true);
          log("It is a " + (BE ? "multi" : "single") + "-device", true);
          log("Credentials are backed-up: " + BS, true);
          const signCount = authData.slice(33, 37);
          const signCountInt = new DataView(signCount, 0).getUint32(0);
          log("Sign Count: " + signCountInt, true);
          // check the credential ID
          const rawIdB64 = encodeBase64Url(credential.rawId);
          if (credential.id !== rawIdB64) {
            log("!!! Mismatch between Credential ID !!!");
            log("Main Credential ID:" + assertion.id, true);
            log("Raw Credential ID:" + rawIdB64, true);
          }
        } catch (err) {
          log("Error parsing data during debugging:");
          log(err);
        }
      }
      return idcAuthResponse(credential, extensionsOut);
    } catch (err) {
      log("Authentication failed: " + err);
      throw err;
    } finally {
      if (timer) {
        window.clearTimeout(timer);
      }
    }
  }

  //Removes any logs that could be considered sensitive
  function setDebug(isDebug) {
    DO_DEBUG = !!isDebug;
  }

  //refer to enroll for inputs
  function webauthnCreate({
    serviceName,
    serviceId,
    challenge,
    username,
    userId,
    displayName,
    authenticatorSelection,
    timeout,
    attestation,
    residentKey,
    userVerification,
    excludeCredentialList,
    extensions,
  }) {    
    let options = {
      publicKey: {
        rp: {
          name: serviceName || serviceId,
          id: serviceId || undefined,
        },
        user: {
          id: new Uint8Array(decodeBase64Url(userId)),
          name: username,
          displayName: displayName || username,
        },
        challenge: new Uint8Array(decodeBase64Url(challenge)),
        pubKeyCredParams: [
          {
            type: "public-key",
            alg: -7, //ES256
          },
          {
            type: "public-key",
            alg: -257, //RS256
          },
        ],
        authenticatorSelection: {
          userVerification: userVerification,
          residentKey: residentKey,
        },
        attestation: attestation,
      },
    };
    if (timeout > 0) {
      options.publicKey.timeout = Number(timeout);
    }
    if (extensions) {
      options.publicKey.extensions = extensions;
    }
    if (authenticatorSelection) {
      options.publicKey.authenticatorSelection.authenticatorAttachment =
        authenticatorSelection;
    }
    if (excludeCredentialList) {
      options.publicKey.excludeCredentials = [];
      const exclude = excludeCredentialList.split(",");
      for (let i = 0; i < exclude.length; ++i) {
        let credId = exclude[i].trim();
        options.publicKey.excludeCredentials.push({
          id: new Uint8Array(decodeBase64Url(credId)),
          type: "public-key",
        });
      }
    }
    return options;
  }
  //Refer to auth() for inputs
  function webauthnGet({
    challenge,
    credentialList,
    credentialTransports,
    userVerification,
    serviceId,
    timeout,
  }) {
    let options = {
      publicKey: {
        challenge: new Uint8Array(decodeBase64Url(challenge)),
      },
    };
    if (timeout > 0) {
      options.publicKey.timeout = Number(timeout);
    }
    if (userVerification) {
      options.publicKey.userVerification = userVerification;
    }
    if (serviceId) {
      options.publicKey.rpId = serviceId;
    }
    if (credentialList) {
      options.publicKey.allowCredentials = [];
      const credentialListArr = credentialList.split(",");
      for (let i = 0; i < credentialListArr.length; ++i) {
        let credId = credentialListArr[i].trim();
        let transports = !credentialTransports
          ? undefined
          : credentialTransports.split(",");
        if (credId) {
          options.publicKey.allowCredentials.push({
            id: new Uint8Array(decodeBase64Url(credId)),
            type: "public-key",
            transports: transports,
          });
        }
      }
    }
    return options;
  }

  function idcRegisterResponse(
    credential, //navigator.credentials.create() response
    extensionsOut, //credential.getClientExtensionResults()
    credentialName //Friendly Name (Thales Extension)
  ) {
    log("Credential ID:");
    log(credential.id, true);
    const clientDataJSONB64 = encodeBase64Url(
      credential.response.clientDataJSON
    );
    const attestationObjectB64 = encodeBase64Url(
      credential.response.attestationObject
    );
    //Thales extension
    let clientIdFriendlyName = null;
    if (credentialName) {
      clientIdFriendlyName = {
        authenticatorDescription: {
          friendlyName: credentialName,
        },
      };
    }
    let clientExtensionResults = undefined;
    if (clientIdFriendlyName || extensionsOut) {
      clientExtensionResults = {};
      if (clientIdFriendlyName) {
        clientExtensionResults.thalesgroup_ext_v1 = clientIdFriendlyName;
      }
      if (extensionsOut) {
        for (let [key, value] of extensionsOut) {
          clientExtensionResults[key] = value;
        }
      }
    }
    const response = {
      id: credential.id,
      rawId: credential.id,
      type: credential.type,
      response: {
        clientDataJSON: clientDataJSONB64,
        attestationObject: attestationObjectB64,
      },
      clientExtensionResults: clientExtensionResults,
    };
    log("IdCloud Request Body:");
    log(JSON.stringify(response, null, 2), true);
    log(response, true);
    return response;
  }

  function idcAuthResponse(
    credential, //navigator.credentials.get() response
    extensionsOut //credential.getClientExtensionResults()
  ) {
    const clientDataJSONB64 = encodeBase64Url(
      credential.response.clientDataJSON
    );
    const authenticatorDataB64 = encodeBase64Url(
      credential.response.authenticatorData
    );
    const userHandleB64 = encodeBase64Url(credential.response.userHandle);
    const signatureB64 = encodeBase64Url(credential.response.signature);
    let clientExtensionResults = undefined;
    if (extensionsOut) {
      clientExtensionResults = {};
      if (extensionsOut) {
        for (let [key, value] of extensionsOut) {
          clientExtensionResults[key] = value;
        }
      }
    }
    const response = {
      id: credential.id,
      rawId: credential.id,
      type: credential.type,
      response: {
        authenticatorData: authenticatorDataB64,
        clientDataJSON: clientDataJSONB64,
        signature: signatureB64,
        userHandle: userHandleB64 ? userHandleB64 : undefined,
      },
      clientExtensionResults: clientExtensionResults,
    };
    log("IdCloud Request Body:");
    log(JSON.stringify(response, null, 2), true);
    log(response, true);
    return response;
  }

  //Utility functions
  function decodeBase64Url(base64) {
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

  function encodeBase64Url(arraybuffer) {
    const bytes = new Uint8Array(arraybuffer);
    const len = bytes.length;
    let base64 = "";
    for (let i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1);
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2);
    }

    return base64;
  }

  function buf2hex(buffer) {
    // buffer is an ArrayBuffer
    return [...new Uint8Array(buffer)]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
  }

  function log(text, isSensitive) {
    if (isSensitive && !DO_DEBUG) {
      return;
    }    
    if (typeof text === "object") {
      console.log(text);
    } else {
      console.log("[ThalesAuth] " + text);
    }
  }

  return {
    enroll: enroll,
    auth: auth,
    setDebug: setDebug,
    CODES: CODES,
    UTILS: {
      idcRegisterResponse: idcRegisterResponse,
      idcAuthResponse: idcAuthResponse,
      webauthnCreate: webauthnCreate,
      webauthnGet: webauthnGet,
    },
  };
})();
//Set an explicit global variable
window.ThalesAuth = ThalesAuth;