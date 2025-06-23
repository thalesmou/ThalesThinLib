
var webapi = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(webapi) {
  webapi = webapi || {};

/**
 * @license
 * Copyright 2010 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof webapi !== 'undefined' ? webapi : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
/*!
 * EventEmitter v5.2.8 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */
!function(e){"use strict";function t(){}function n(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function r(e){return function(){return this[e].apply(this,arguments)}}function i(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&i(e.listener)}var s=t.prototype,o=e.EventEmitter;s.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[]);return t},s.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},s.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},s.addListener=function(e,t){if(!i(t))throw new TypeError("listener must be a function");var r,s=this.getListenersAsObject(e),o="object"==typeof t;for(r in s)s.hasOwnProperty(r)&&-1===n(s[r],t)&&s[r].push(o?t:{listener:t,once:!1});return this},s.on=r("addListener"),s.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},s.once=r("addOnceListener"),s.defineEvent=function(e){return this.getListeners(e),this},s.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},s.removeListener=function(e,t){var r,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&-1!==(r=n(s[i],t))&&s[i].splice(r,1);return this},s.off=r("removeListener"),s.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},s.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},s.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i));return this},s.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if(e instanceof RegExp)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},s.removeAllListeners=r("removeEvent"),s.emitEvent=function(e,t){var n,r,i,s,o=this.getListenersAsObject(e);for(s in o)if(o.hasOwnProperty(s))for(n=o[s].slice(0),i=0;i<n.length;i++)r=n[i],!0===r.once&&this.removeListener(e,r.listener),r.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},s.trigger=r("emitEvent"),s.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},s.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},s._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return e.EventEmitter=o,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:e.EventEmitter=t}("undefined"!=typeof window?window:this||{});
// "use strict";
//if(!exports) exports={};
//Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionEvents = {};
(function (ConnectionEvents) {
    ConnectionEvents[ConnectionEvents["OK"] = 0] = "OK";
    ConnectionEvents[ConnectionEvents["CONNECT"] = 1] = "CONNECT";
    ConnectionEvents[ConnectionEvents["CONNECTED"] = 2] = "CONNECTED";
    ConnectionEvents[ConnectionEvents["CLOSE"] = 3] = "CLOSE";
    ConnectionEvents[ConnectionEvents["CLOSED"] = 4] = "CLOSED";
    ConnectionEvents[ConnectionEvents["CAPTURE"] = 5] = "CAPTURE";
    ConnectionEvents[ConnectionEvents["CAPTURED"] = 6] = "CAPTURED";
    ConnectionEvents[ConnectionEvents["DISCONNECT"] = 7] = "DISCONNECT";
    ConnectionEvents[ConnectionEvents["NOT_AUTHORIZED"] = 8] = "NOT_AUTHORIZED";
    ConnectionEvents[ConnectionEvents["SESSION_OPEN"] = 9] = "SESSION_OPEN";
    ConnectionEvents[ConnectionEvents["SESSION_OPENED"] = 10] = "SESSION_OPENED";
    ConnectionEvents[ConnectionEvents["SESSION_CLOSE"] = 11] = "SESSION_CLOSE";
    ConnectionEvents[ConnectionEvents["SESSION_CLOSED"] = 12] = "SESSION_CLOSED";
    ConnectionEvents[ConnectionEvents["CAPTURE_ERROR"] = 13] = "CAPTURE_ERROR";
    ConnectionEvents[ConnectionEvents["INVALID_SESSION"] = 14] = "INVALID_SESSION";
    ConnectionEvents[ConnectionEvents["SESSION_IN_USE"] = 15] = "SESSION_IN_USE";
    ConnectionEvents[ConnectionEvents["RETRIEVE_IMAGE"] = 16] = "RETRIEVE_IMAGE";
    ConnectionEvents[ConnectionEvents["RETURNED_IMAGE"] = 17] = "RETURNED_IMAGE";
    ConnectionEvents[ConnectionEvents["GET_NETWORK_CONFIG"] = 18] = "GET_NETWORK_CONFIG";
    ConnectionEvents[ConnectionEvents["RETURNED_BARCODE"] = 19] = "RETURNED_BARCODE";
    ConnectionEvents[ConnectionEvents["NETWORK_CONFIG"] = 20] = "NETWORK_CONFIG";
    ConnectionEvents[ConnectionEvents["RETURNED_MRZ"] = 21] = "RETURNED_MRZ";
    ConnectionEvents[ConnectionEvents["INVALID_KEY"] = 22] = "INVALID_KEY";
    ConnectionEvents[ConnectionEvents["CAPTURE_DOCFOUND"] = 23] = "CAPTURE_DOCFOUND";
    ConnectionEvents[ConnectionEvents["CAPTURE_IMAGE_CAPTURED"] = 24] = "CAPTURE_IMAGE_CAPTURED";
    ConnectionEvents[ConnectionEvents["CAPTURE_MRZ"] = 25] = "CAPTURE_MRZ";
    ConnectionEvents[ConnectionEvents["CAPTURE_BARCODE"] = 26] = "CAPTURE_BARCODE";
    ConnectionEvents[ConnectionEvents["RETRIEVE_ERROR"] = 27] = "RETRIEVE_ERROR";
    ConnectionEvents[ConnectionEvents["INVALID_COMMAND"] = 28] = "INVALID_COMMAND";
    ConnectionEvents[ConnectionEvents["CAPTURE_SMARTCARD_FILE"] = 29] = "CAPTURE_SMARTCARD_FILE";
    ConnectionEvents[ConnectionEvents["GET_EXTRADATA"] = 30] = "GET_EXTRADATA";
    ConnectionEvents[ConnectionEvents["EXTRADATA"] = 31] = "EXTRADATA";
    ConnectionEvents[ConnectionEvents["GET_SETTINGS"] = 32] = "GET_SETTINGS";
    ConnectionEvents[ConnectionEvents["RETURNED_SETTINGS"] = 33] = "RETURNED_SETTINGS";
    ConnectionEvents[ConnectionEvents["GET_SETTINGS_ERROR"] = 34] = "GET_SETTINGS_ERROR";
    ConnectionEvents[ConnectionEvents["SET_SETTINGS"] = 35] = "SET_SETTINGS";
    ConnectionEvents[ConnectionEvents["SETTINGS_UPDATED"] = 36] = "SETTINGS_UPDATED";
    ConnectionEvents[ConnectionEvents["SET_SETTINGS_ERROR"] = 37] = "SET_SETTINGS_ERROR";
    ConnectionEvents[ConnectionEvents["CAPTURE_STOP"] = 38] = "CAPTURE_STOP";
    ConnectionEvents[ConnectionEvents["CAPTURE_STOPPED"] = 39] = "CAPTURE_STOPPED";
    ConnectionEvents[ConnectionEvents["CAPTURE_STOP_ERROR"] = 40] = "CAPTURE_STOP_ERROR";
    ConnectionEvents[ConnectionEvents["CAPTURE_AAMVA"] = 41] = "CAPTURE_AAMVA";
    ConnectionEvents[ConnectionEvents["LISTEN_START"] = 42] = "LISTEN_START";
    ConnectionEvents[ConnectionEvents["LISTEN_STOP"] = 43] = "LISTEN_STOP";
    ConnectionEvents[ConnectionEvents["LISTEN_STARTED"] = 44] = "LISTEN_STARTED";
    ConnectionEvents[ConnectionEvents["LISTEN_STOPPED"] = 45] = "LISTEN_STOPPED";
    ConnectionEvents[ConnectionEvents["EVENT"] = 46] = "EVENT";
    ConnectionEvents[ConnectionEvents["GET_LOGS"] = 47] = "GET_LOGS";
    ConnectionEvents[ConnectionEvents["RETURNED_LOGS"] = 48] = "RETURNED_LOGS";
    ConnectionEvents[ConnectionEvents["GET_LOGS_ERROR"] = 49] = "GET_LOGS_ERROR";
    ConnectionEvents[ConnectionEvents["CAPTURE_DATA"] = 50] = "CAPTURE_DATA";
    ConnectionEvents[ConnectionEvents["CAPTURE_DATA_CAPTURED"] = 51] = "CAPTURE_DATA_CAPTURED";
    ConnectionEvents[ConnectionEvents["RETRIEVE_DATA"] = 52] = "RETRIEVE_DATA";
    ConnectionEvents[ConnectionEvents["RETURNED_DATA"] = 53] = "RETURNED_DATA";
    ConnectionEvents[ConnectionEvents["LISTEN_ERROR_START"] = 54] = "LISTEN_ERROR_START";
    ConnectionEvents[ConnectionEvents["LISTEN_ERROR_STOP"] = 55] = "LISTEN_ERROR_STOP";
    ConnectionEvents[ConnectionEvents["LISTEN_ERROR_STARTED"] = 56] = "LISTEN_ERROR_STARTED";
    ConnectionEvents[ConnectionEvents["LISTEN_ERROR_STOPPED"] = 57] = "LISTEN_ERROR_STOPPED";
    ConnectionEvents[ConnectionEvents["ERROR"] = 58] = "ERROR";
    ConnectionEvents[ConnectionEvents["INTERNAL_ERROR"] = 59] = "INTERNAL_ERROR";
    ConnectionEvents[ConnectionEvents["UNPROVISIONED_DEVICE"] = 60] = "UNPROVISIONED_DEVICE";
    ConnectionEvents[ConnectionEvents["ASSUREID_CREDENTIALS"] = 61] = "ASSUREID_CREDENTIALS";
    ConnectionEvents[ConnectionEvents["ASSUREID_VERIFY_DOCUMENT"] = 62] = "ASSUREID_VERIFY_DOCUMENT";
    ConnectionEvents[ConnectionEvents["ASSUREID_RETRIEVE_RESULTS"] = 63] = "ASSUREID_RETRIEVE_RESULTS";
    ConnectionEvents[ConnectionEvents["ASSUREID_INSTANCE_ID"] = 64] = "ASSUREID_INSTANCE_ID";
    ConnectionEvents[ConnectionEvents["ASSUREID_RESULTS"] = 65] = "ASSUREID_RESULTS";
    ConnectionEvents[ConnectionEvents["ASSUREID_ERROR"] = 66] = "ASSUREID_ERROR";
    ConnectionEvents[ConnectionEvents["DEVICE_INFO"] = 70] = "DEVICE_INFO";
    ConnectionEvents[ConnectionEvents["FIRMWARE_UPDATE"] = 71] = "FIRMWARE_UPDATE";
    ConnectionEvents[ConnectionEvents["FIRMWARE_UPDATE_RESULT"] = 72] = "FIRMWARE_UPDATE_RESULT";
    ConnectionEvents[ConnectionEvents["CHECK_FIRMWARE_UPDATE"] = 73] = "CHECK_FIRMWARE_UPDATE";
    ConnectionEvents[ConnectionEvents["CHECK_FIRMWARE_UPDATE_RESULT"] = 74] = "CHECK_FIRMWARE_UPDATE_RESULT";
    ConnectionEvents[ConnectionEvents["LISTEN_UPDATE_START"] = 75] = "LISTEN_UPDATE_START";
    ConnectionEvents[ConnectionEvents["LISTEN_UPDATE_STARTED"] = 76] = "LISTEN_UPDATE_STARTED";
    ConnectionEvents[ConnectionEvents["LISTEN_UPDATE_STOP"] = 83] = "LISTEN_UPDATE_STOP";
    ConnectionEvents[ConnectionEvents["LISTEN_UPDATE_STOPPED"] = 77] = "LISTEN_UPDATE_STOPPED";
    ConnectionEvents[ConnectionEvents["UPDATE_STATUS"] = 78] = "UPDATE_STATUS";
    ConnectionEvents[ConnectionEvents["UPLOAD"] = 79] = "UPLOAD";
    ConnectionEvents[ConnectionEvents["UPLOAD_RECEIVED"] = 80] = "UPLOAD_RECEIVED";
    ConnectionEvents[ConnectionEvents["REBOOT"] = 81] = "REBOOT";
    ConnectionEvents[ConnectionEvents["REBOOTING"] = 82] = "REBOOTING";
    ConnectionEvents[ConnectionEvents['LISTEN_UPDATE_STOP']=83]='LISTEN_UPDATE_STOP';   
    ConnectionEvents[ConnectionEvents['CLEAR_DATA']=84]='CLEAR_DATA';
    ConnectionEvents[ConnectionEvents['PROVISION']=85]='PROVISION';
    ConnectionEvents[ConnectionEvents['PROVISIONED']=86]='PROVISIONED';   
    ConnectionEvents[ConnectionEvents['UNPROVISION']=87]='UNPROVISION'; 
    ConnectionEvents[ConnectionEvents['UNPROVISIONED']=88]='UNPROVISIONED';   
    ConnectionEvents[ConnectionEvents['GET_TOKEN']=89]='GET_TOKEN';
    ConnectionEvents[ConnectionEvents['TOKEN']=90]='TOKEN';
    ConnectionEvents[ConnectionEvents['AUTHENTICATE']=91]='AUTHENTICATE';
    ConnectionEvents[ConnectionEvents['AUTHENTICATED']=92]='AUTHENTICATED';  
    ConnectionEvents[ConnectionEvents['INVALID_TOKEN']=93]='INVALID_TOKEN';
    ConnectionEvents[ConnectionEvents['METRICS_REQ']=115]='METRICS_REQ';  
    ConnectionEvents[ConnectionEvents['METRICS_RESPONSE']=116]='METRICS_RESPONSE';
    ConnectionEvents[ConnectionEvents['CLEAR_METRICS']=117]='CLEAR_METRICS';
    ConnectionEvents[ConnectionEvents['CRED_LIST']=120]='CRED_LIST';
    ConnectionEvents[ConnectionEvents['CRED_LIST_DATA']=121]='CRED_LIST_DATA';
    ConnectionEvents[ConnectionEvents['CRED_ADD']=122]='CRED_ADD';
    ConnectionEvents[ConnectionEvents['CRED_DELETE']=123]='CRED_DELETE';
})(ConnectionEvents);


var ReaderDataTypes = {};
    (function (ReaderDataTypes) {
    ReaderDataTypes[ReaderDataTypes["SCDG1_CODELINE"] = 0] = "SCDG1_CODELINE";
    ReaderDataTypes[ReaderDataTypes["SCDG1_CODELINE_DATA"] = 1] = "SCDG1_CODELINE_DATA";
    ReaderDataTypes[ReaderDataTypes["SCDG2_PHOTO"] = 2] = "SCDG2_PHOTO";
    ReaderDataTypes[ReaderDataTypes["SCDG3_FINGERPRINTS"] = 3] = "SCDG3_FINGERPRINTS";
    ReaderDataTypes[ReaderDataTypes["SCDG1_VALIDATE"] = 4] = "SCDG1_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG2_VALIDATE"] = 5] = "SCDG2_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG3_VALIDATE"] = 6] = "SCDG3_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG4_VALIDATE"] = 7] = "SCDG4_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG5_VALIDATE"] = 8] = "SCDG5_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG6_VALIDATE"] = 9] = "SCDG6_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG7_VALIDATE"] = 10] = "SCDG7_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG8_VALIDATE"] = 11] = "SCDG8_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG9_VALIDATE"] = 12] = "SCDG9_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG10_VALIDATE"] = 13] = "SCDG10_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG11_VALIDATE"] = 14] = "SCDG11_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG12_VALIDATE"] = 15] = "SCDG12_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG13_VALIDATE"] = 16] = "SCDG13_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG14_VALIDATE"] = 17] = "SCDG14_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG15_VALIDATE"] = 18] = "SCDG15_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCDG16_VALIDATE"] = 19] = "SCDG16_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNEDATTRS_VALIDATE"] = 20] = "SCSIGNEDATTRS_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNATURE_VALIDATE"] = 21] = "SCSIGNATURE_VALIDATE";
    ReaderDataTypes[ReaderDataTypes["SCAIRBAUD"] = 22] = "SCAIRBAUD";
    ReaderDataTypes[ReaderDataTypes["SCCHIPID"] = 23] = "SCCHIPID";
    ReaderDataTypes[ReaderDataTypes["SCEF_COM_FILE"] = 24] = "SCEF_COM_FILE";
    ReaderDataTypes[ReaderDataTypes["SCEF_SOD_FILE"] = 25] = "SCEF_SOD_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG1_FILE"] = 26] = "SCDG1_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG2_FILE"] = 27] = "SCDG2_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG3_FILE"] = 28] = "SCDG3_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG4_FILE"] = 29] = "SCDG4_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG5_FILE"] = 30] = "SCDG5_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG6_FILE"] = 31] = "SCDG6_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG7_FILE"] = 32] = "SCDG7_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG8_FILE"] = 33] = "SCDG8_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG9_FILE"] = 34] = "SCDG9_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG10_FILE"] = 35] = "SCDG10_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG11_FILE"] = 36] = "SCDG11_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG12_FILE"] = 37] = "SCDG12_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG13_FILE"] = 38] = "SCDG13_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG14_FILE"] = 39] = "SCDG14_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG15_FILE"] = 40] = "SCDG15_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG16_FILE"] = 41] = "SCDG16_FILE";
    ReaderDataTypes[ReaderDataTypes["SCEF_CVCA_FILE"] = 42] = "SCEF_CVCA_FILE";
    ReaderDataTypes[ReaderDataTypes["SCBAC_STATUS"] = 43] = "SCBAC_STATUS";
    ReaderDataTypes[ReaderDataTypes["ACTIVE_AUTHENTICATION"] = 44] = "ACTIVE_AUTHENTICATION";
    ReaderDataTypes[ReaderDataTypes["VALIDATE_DOC_SIGNER_CERT"] = 45] = "VALIDATE_DOC_SIGNER_CERT";
    ReaderDataTypes[ReaderDataTypes["SCTERMINAL_AUTHENTICATION_STATUS"] = 46] = "SCTERMINAL_AUTHENTICATION_STATUS";
    ReaderDataTypes[ReaderDataTypes["SCCHIP_AUTHENTICATION_STATUS"] = 47] = "SCCHIP_AUTHENTICATION_STATUS";
    ReaderDataTypes[ReaderDataTypes["SCCROSSCHECK_EFCOM_EFSOD"] = 48] = "SCCROSSCHECK_EFCOM_EFSOD";
    ReaderDataTypes[ReaderDataTypes["PASSIVE_AUTHENTICATION"] = 49] = "PASSIVE_AUTHENTICATION";
    ReaderDataTypes[ReaderDataTypes["SAC_STATUS"] = 50] = "SAC_STATUS";
    ReaderDataTypes[ReaderDataTypes["SCEF_CARD_ACCESS_FILE"] = 51] = "SCEF_CARD_ACCESS_FILE";
    ReaderDataTypes[ReaderDataTypes["EFCOM_DG_MAP"] = 52] = "EFCOM_DG_MAP";
    ReaderDataTypes[ReaderDataTypes["EFSOD_HASH_MAP"] = 53] = "EFSOD_HASH_MAP";
    ReaderDataTypes[ReaderDataTypes["DOC_SIGNER_CERT"] = 54] = "DOC_SIGNER_CERT";
    ReaderDataTypes[ReaderDataTypes["SCDG1_EID_DOCUMENT_TYPE"] = 55] = "SCDG1_EID_DOCUMENT_TYPE";
    ReaderDataTypes[ReaderDataTypes["SCDG2_EID_ISSUING_ENTITY"] = 56] = "SCDG2_EID_ISSUING_ENTITY";
    ReaderDataTypes[ReaderDataTypes["SCDG3_EID_VALIDITY_PERIOD"] = 57] = "SCDG3_EID_VALIDITY_PERIOD";
    ReaderDataTypes[ReaderDataTypes["SCDG4_EID_GIVEN_NAMES"] = 58] = "SCDG4_EID_GIVEN_NAMES";
    ReaderDataTypes[ReaderDataTypes["SCDG5_EID_FAMILY_NAMES"] = 59] = "SCDG5_EID_FAMILY_NAMES";
    ReaderDataTypes[ReaderDataTypes["SCDG6_EID_NOM_DE_PLUME"] = 60] = "SCDG6_EID_NOM_DE_PLUME";
    ReaderDataTypes[ReaderDataTypes["SCDG7_EID_ACADEMIC_TITLE"] = 61] = "SCDG7_EID_ACADEMIC_TITLE";
    ReaderDataTypes[ReaderDataTypes["SCDG8_EID_DATE_OF_BIRTH"] = 62] = "SCDG8_EID_DATE_OF_BIRTH";
    ReaderDataTypes[ReaderDataTypes["SCDG9_EID_PLACE_OF_BIRTH"] = 63] = "SCDG9_EID_PLACE_OF_BIRTH";
    ReaderDataTypes[ReaderDataTypes["SCDG10_EID_NATIONALITY"] = 64] = "SCDG10_EID_NATIONALITY";
    ReaderDataTypes[ReaderDataTypes["SCDG11_EID_SEX"] = 65] = "SCDG11_EID_SEX";
    ReaderDataTypes[ReaderDataTypes["SCDG12_EID_OPTIONAL_DATA_R"] = 66] = "SCDG12_EID_OPTIONAL_DATA_R";
    ReaderDataTypes[ReaderDataTypes["SCDG13_EID_BIRTH_NAME"] = 67] = "SCDG13_EID_BIRTH_NAME";
    ReaderDataTypes[ReaderDataTypes["SCDG14_EID_WRITTEN_SIGNATURE"] = 68] = "SCDG14_EID_WRITTEN_SIGNATURE";
    ReaderDataTypes[ReaderDataTypes["SCDG17_EID_PLACE_OF_RESIDENCE"] = 69] = "SCDG17_EID_PLACE_OF_RESIDENCE";
    ReaderDataTypes[ReaderDataTypes["SCDG18_EID_MUNICIPALITY_ID"] = 70] = "SCDG18_EID_MUNICIPALITY_ID";
    ReaderDataTypes[ReaderDataTypes["SCDG19_EID_RESIDENCE_PERMIT_1"] = 71] = "SCDG19_EID_RESIDENCE_PERMIT_1";
    ReaderDataTypes[ReaderDataTypes["SCDG20_EID_RESIDENCE_PERMIT_2"] = 72] = "SCDG20_EID_RESIDENCE_PERMIT_2";
    ReaderDataTypes[ReaderDataTypes["SCDG21_EID_OPTIONAL_DATA_RW"] = 73] = "SCDG21_EID_OPTIONAL_DATA_RW";
    ReaderDataTypes[ReaderDataTypes["SCDG1_VALIDATE_EID"] = 74] = "SCDG1_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG2_VALIDATE_EID"] = 75] = "SCDG2_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG3_VALIDATE_EID"] = 76] = "SCDG3_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG4_VALIDATE_EID"] = 77] = "SCDG4_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG5_VALIDATE_EID"] = 78] = "SCDG5_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG6_VALIDATE_EID"] = 79] = "SCDG6_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG7_VALIDATE_EID"] = 80] = "SCDG7_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG8_VALIDATE_EID"] = 81] = "SCDG8_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG9_VALIDATE_EID"] = 82] = "SCDG9_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG10_VALIDATE_EID"] = 83] = "SCDG10_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG11_VALIDATE_EID"] = 84] = "SCDG11_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG12_VALIDATE_EID"] = 85] = "SCDG12_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG13_VALIDATE_EID"] = 86] = "SCDG13_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG14_VALIDATE_EID"] = 87] = "SCDG14_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG15_VALIDATE_EID"] = 88] = "SCDG15_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG16_VALIDATE_EID"] = 89] = "SCDG16_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG17_VALIDATE_EID"] = 90] = "SCDG17_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG18_VALIDATE_EID"] = 91] = "SCDG18_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG19_VALIDATE_EID"] = 92] = "SCDG19_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG20_VALIDATE_EID"] = 93] = "SCDG20_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG21_VALIDATE_EID"] = 94] = "SCDG21_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG22_VALIDATE_EID"] = 95] = "SCDG22_VALIDATE_EID";
    ReaderDataTypes[ReaderDataTypes["SCSIGNEDATTRS_VALIDATE_CARD_SECURITY_FILE"] = 96] = "SCSIGNEDATTRS_VALIDATE_CARD_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNEDATTRS_VALIDATE_CHIP_SECURITY_FILE"] = 97] = "SCSIGNEDATTRS_VALIDATE_CHIP_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNATURE_VALIDATE_CARD_SECURITY_FILE"] = 98] = "SCSIGNATURE_VALIDATE_CARD_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCSIGNATURE_VALIDATE_CHIP_SECURITY_FILE"] = 99] = "SCSIGNATURE_VALIDATE_CHIP_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG1_FILE_EID"] = 100] = "SCDG1_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG2_FILE_EID"] = 101] = "SCDG2_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG3_FILE_EID"] = 102] = "SCDG3_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG4_FILE_EID"] = 103] = "SCDG4_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG5_FILE_EID"] = 104] = "SCDG5_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG6_FILE_EID"] = 105] = "SCDG6_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG7_FILE_EID"] = 106] = "SCDG7_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG8_FILE_EID"] = 107] = "SCDG8_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG9_FILE_EID"] = 108] = "SCDG9_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG10_FILE_EID"] = 109] = "SCDG10_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG11_FILE_EID"] = 110] = "SCDG11_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG12_FILE_EID"] = 111] = "SCDG12_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG13_FILE_EID"] = 112] = "SCDG13_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG14_FILE_EID"] = 113] = "SCDG14_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG15_FILE_EID"] = 114] = "SCDG15_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG16_FILE_EID"] = 115] = "SCDG16_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG17_FILE_EID"] = 116] = "SCDG17_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG18_FILE_EID"] = 117] = "SCDG18_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG19_FILE_EID"] = 118] = "SCDG19_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG20_FILE_EID"] = 119] = "SCDG20_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG21_FILE_EID"] = 120] = "SCDG21_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["SCDG22_FILE_EID"] = 121] = "SCDG22_FILE_EID";
    ReaderDataTypes[ReaderDataTypes["VALIDATE_DOC_SIGNER_CERT_CARD_SECURITY_FILE"] = 122] = "VALIDATE_DOC_SIGNER_CERT_CARD_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["VALIDATE_DOC_SIGNER_CERT_CHIP_SECURITY_FILE"] = 123] = "VALIDATE_DOC_SIGNER_CERT_CHIP_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCEF_CHIP_SECURITY_FILE"] = 124] = "SCEF_CHIP_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCEF_CARD_SECURITY_FILE"] = 125] = "SCEF_CARD_SECURITY_FILE";
    ReaderDataTypes[ReaderDataTypes["SCDG1_FILE_EDL"] = 126] = "SCDG1_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG2_FILE_EDL"] = 127] = "SCDG2_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG3_FILE_EDL"] = 128] = "SCDG3_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG4_FILE_EDL"] = 129] = "SCDG4_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG5_FILE_EDL"] = 130] = "SCDG5_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG6_FILE_EDL"] = 131] = "SCDG6_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG7_FILE_EDL"] = 132] = "SCDG7_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG8_FILE_EDL"] = 133] = "SCDG8_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG9_FILE_EDL"] = 134] = "SCDG9_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG10_FILE_EDL"] = 135] = "SCDG10_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG11_FILE_EDL"] = 136] = "SCDG11_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG12_FILE_EDL"] = 137] = "SCDG12_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG13_FILE_EDL"] = 138] = "SCDG13_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG14_FILE_EDL"] = 139] = "SCDG14_FILE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG1_VALIDATE_EDL"] = 140] = "SCDG1_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG2_VALIDATE_EDL"] = 141] = "SCDG2_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG3_VALIDATE_EDL"] = 142] = "SCDG3_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG4_VALIDATE_EDL"] = 143] = "SCDG4_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG5_VALIDATE_EDL"] = 144] = "SCDG5_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG6_VALIDATE_EDL"] = 145] = "SCDG6_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG7_VALIDATE_EDL"] = 146] = "SCDG7_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG8_VALIDATE_EDL"] = 147] = "SCDG8_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG9_VALIDATE_EDL"] = 148] = "SCDG9_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG10_VALIDATE_EDL"] = 149] = "SCDG10_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG11_VALIDATE_EDL"] = 150] = "SCDG11_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG12_VALIDATE_EDL"] = 151] = "SCDG12_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG13_VALIDATE_EDL"] = 152] = "SCDG13_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG14_VALIDATE_EDL"] = 153] = "SCDG14_VALIDATE_EDL";
    ReaderDataTypes[ReaderDataTypes["SCDG1_EDL_DATA"] = 154] = "SCDG1_EDL_DATA";
    ReaderDataTypes[ReaderDataTypes["SCDG6_EDL_PHOTO"] = 155] = "SCDG6_EDL_PHOTO";
    ReaderDataTypes[ReaderDataTypes["SCDG7_EDL_FINGERPRINTS"] = 156] = "SCDG7_EDL_FINGERPRINTS";
    ReaderDataTypes[ReaderDataTypes["BACKEY_CORRECTION"] = 157] = "BACKEY_CORRECTION";
    ReaderDataTypes[ReaderDataTypes["CODELINE"] = 158] = "CODELINE";
    ReaderDataTypes[ReaderDataTypes["CODELINE_DATA"] = 159] = "CODELINE_DATA";
    ReaderDataTypes[ReaderDataTypes["CHECKSUM"] = 160] = "CHECKSUM";
    ReaderDataTypes[ReaderDataTypes["CHECKSUMEXTENDED"] = 161] = "CHECKSUMEXTENDED";
    ReaderDataTypes[ReaderDataTypes["IMAGEIR"] = 162] = "IMAGEIR";
    ReaderDataTypes[ReaderDataTypes["IMAGEIRREAR"] = 163] = "IMAGEIRREAR";
    ReaderDataTypes[ReaderDataTypes["IMAGEVIS"] = 164] = "IMAGEVIS";
    ReaderDataTypes[ReaderDataTypes["IMAGEVISREAR"] = 165] = "IMAGEVISREAR";
    ReaderDataTypes[ReaderDataTypes["IMAGEVIS_OVD1"] = 166] = "IMAGEVIS_OVD1";
    ReaderDataTypes[ReaderDataTypes["IMAGEVIS_OVD2"] = 167] = "IMAGEVIS_OVD2";
    ReaderDataTypes[ReaderDataTypes["IMAGEPHOTO"] = 168] = "IMAGEPHOTO";
    ReaderDataTypes[ReaderDataTypes["IMAGEUV"] = 169] = "IMAGEUV";
    ReaderDataTypes[ReaderDataTypes["IMAGEUVREAR"] = 170] = "IMAGEUVREAR";
    ReaderDataTypes[ReaderDataTypes["IMAGECOAXVIS"] = 171] = "IMAGECOAXVIS";
    ReaderDataTypes[ReaderDataTypes["IMAGECOAXIR"] = 172] = "IMAGECOAXIR";
    ReaderDataTypes[ReaderDataTypes["IMAGEBARCODE"] = 173] = "IMAGEBARCODE";
    ReaderDataTypes[ReaderDataTypes["IMAGEBARCODEREAR"] = 174] = "IMAGEBARCODEREAR";
    ReaderDataTypes[ReaderDataTypes["SECURITYCHECK"] = 175] = "SECURITYCHECK";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_INDUSTRIAL_2_OF_5"] = 176] = "BARCODE_1D_INDUSTRIAL_2_OF_5";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_INTERLEAVED_2_OF_5"] = 177] = "BARCODE_1D_INTERLEAVED_2_OF_5";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_IATA_2_OF_5"] = 178] = "BARCODE_1D_IATA_2_OF_5";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_3_OF_9"] = 179] = "BARCODE_1D_3_OF_9";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_128"] = 180] = "BARCODE_1D_128";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_CODE_93"] = 181] = "BARCODE_1D_CODE_93";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_CODABAR"] = 182] = "BARCODE_1D_CODABAR";
    ReaderDataTypes[ReaderDataTypes["BARCODE_1D_UPC_EAN"] = 183] = "BARCODE_1D_UPC_EAN";
    ReaderDataTypes[ReaderDataTypes["BARCODE_PDF417"] = 184] = "BARCODE_PDF417";
    ReaderDataTypes[ReaderDataTypes["BARCODE_AZTECCODE"] = 185] = "BARCODE_AZTECCODE";
    ReaderDataTypes[ReaderDataTypes["BARCODE_QRCODE"] = 186] = "BARCODE_QRCODE";
    ReaderDataTypes[ReaderDataTypes["BARCODE_DATAMATRIX"] = 187] = "BARCODE_DATAMATRIX";
    ReaderDataTypes[ReaderDataTypes["AAMVA_DATA"] = 188] = "AAMVA_DATA";
})(ReaderDataTypes);

var EventCodes = {};
(function (EventCodes) {
    EventCodes[EventCodes["DOC_ON_WINDOW"] =  0] = "DOC_ON_WINDOW";
    EventCodes[EventCodes["DOC_REMOVED"] =  1] = "DOC_REMOVED";
    EventCodes[EventCodes["START_OF_DOCUMENT_DATA"] =  2] = "START_OF_DOCUMENT_DATA";
    EventCodes[EventCodes["END_OF_DOCUMENT_DATA"] =  3] = "END_OF_DOCUMENT_DATA";
    EventCodes[EventCodes["AUTOMATIC_STATE_CHANGE"] = 4] = "AUTOMATIC_STATE_CHANGE";
    EventCodes[EventCodes["RF_CHIP_OPENED_SUCCESSFULLY"] =  5] = "RF_CHIP_OPENED_SUCCESSFULLY";
    EventCodes[EventCodes["RF_APPLICATION_OPENED_SUCCESSFULLY"] =  6] = "RF_APPLICATION_OPENED_SUCCESSFULLY";
    EventCodes[EventCodes["RF_CHIP_OPEN_FAILED"] =  7] = "RF_CHIP_OPEN_FAILED";
    EventCodes[EventCodes["READER_ERROR_RESOLVED"] =  8] = "READER_ERROR_RESOLVED";
    EventCodes[EventCodes["SETTINGS_INITIALISED"] =  9] = "SETTINGS_INITIALISED";
    EventCodes[EventCodes["PLUGINS_INITIALISED"] =  10] = "PLUGINS_INITIALISED";
    EventCodes[EventCodes["START_OF_PLUGINS_DECODE"] =  11] = "START_OF_PLUGINS_DECODE";
    EventCodes[EventCodes["RF_CHIP_OPEN_TIMEOUT"] =  12] = "RF_CHIP_OPEN_TIMEOUT";
    EventCodes[EventCodes["RF_CHIP_REMOVAL_SUCCESS"] =  13] = "RF_CHIP_REMOVAL_SUCCESS";
    EventCodes[EventCodes["RF_CHIP_REMOVAL_TIMEOUT"] =  14] = "RF_CHIP_REMOVAL_TIMEOUT";
    EventCodes[EventCodes["READY_FOR_SMARTCARD"] =  15] = "READY_FOR_SMARTCARD";
    EventCodes[EventCodes["BEGIN_RESOLVING_ERROR"] =  16] = "BEGIN_RESOLVING_ERROR";     
    EventCodes[EventCodes["COM_PORT_OPEN"] =  17] = "COM_PORT_OPEN";     
    EventCodes[EventCodes["COM_PORT_CLOSED"] =  18] = "COM_PORT_CLOSED";      
    EventCodes[EventCodes["READING_DATA"] =  19] = "READING_DATA";
    EventCodes[EventCodes["DATA_READ"] =  20] = "DATA_READ";
    EventCodes[EventCodes["START_OF_SWIPE_DATA"] =  21] = "START_OF_SWIPE_DATA";
    EventCodes[EventCodes["END_OF_SWIPE_DATA"] =  22] = "END_OF_SWIPE_DATA";
    EventCodes[EventCodes["DEVICE_CONNECTED"] =  23] = "DEVICE_CONNECTED";
    EventCodes[EventCodes["DEVICE_DISCONNECTED"] =  24] = "DEVICE_DISCONNECTED";
    EventCodes[EventCodes["SWIPE_READER_CONNECTED"] =  25] = "SWIPE_READER_CONNECTED";
    EventCodes[EventCodes["SWIPE_READER_DISCONNECTED"] =  26] = "SWIPE_READER_DISCONNECTED";
    EventCodes[EventCodes["READER_STATE_CHANGED"] =  27] = "READER_STATE_CHANGED";
    EventCodes[EventCodes["UHF_READ_TIMEOUT"] =  28] = "UHF_READ_TIMEOUT";
    EventCodes[EventCodes["UHF_READ_COMPLETE"] =  29] = "UHF_READ_COMPLETE";
    EventCodes[EventCodes["DOC_FEED_COMPLETE"] =  30] = "DOC_FEED_COMPLETE";
    EventCodes[EventCodes["DOC_FEED_FAILED"] =  31] = "DOC_FEED_FAILED";
    EventCodes[EventCodes["DIRT_DETECTED_ON_SCANNER_WINDOW"] =  32] = "DIRT_DETECTED_ON_SCANNER_WINDOW";
    EventCodes[EventCodes["SWIPE_REQUESTED"] =  33] = "SWIPE_REQUESTED";
    EventCodes[EventCodes["UHF_REQUESTED"] =  34] = "UHF_REQUESTED";
    EventCodes[EventCodes["RF_CHIP_DETECTED"] =  35] = "RF_CHIP_DETECTED";
    EventCodes[EventCodes["FLIP_DOCUMENT_OVER"] =  36] = "FLIP_DOCUMENT_OVER";
    EventCodes[EventCodes["READER_CONNECTED"] =  37] = "READER_CONNECTED";
    EventCodes[EventCodes["READER_DISCONNECTED"] =  38] = "READER_DISCONNECTED";
    EventCodes[EventCodes["NUM_EVENT_CODES"] =  39] = "NUM_EVENT_CODES";
    })(EventCodes);

/* Version 1.0.0.2 */

Module["ConnectionEvents"] = ConnectionEvents;
Module["ReaderDataTypes"] = ReaderDataTypes;
Module["EventCodes"] = EventCodes;

// type LogLevelType = "debug" | "error" | "info" | "log" | "trace" | "warn";
LogLevelType = ["error", "warn" , "info" , "log" , "trace", "debug" ];
const WebApiLogger = (logLevel /*: LogLevelType*/, ...args) => {
  if (globalThis.webapiLoggerWriteLog) {
    globalThis.webapiLoggerWriteLog(logLevel, ...args);
  }
};

Module["webapi_enable_logging"] = function (level /*: LogLevelType | LogLevelType[] */) {
  // convert level to an array if it isn't one
  if(level)
  {
    if(!Array.isArray(level)) {
      const arr = []
      for(const t of LogLevelType){
        arr.push(t);
        
        // stop inserting
        if(t === level)
          break;
      }
      level = arr;
    }
  }

  globalThis.webapiLoggerWriteLog = (logLevel, ...args) => {
    if(level == undefined || level.includes(logLevel))
      console[logLevel](...args);
  };
};

function webapi_is_enable_logging(logLevel /*: LogLevelType*/) {
  return !!globalThis.webapiLoggerWriteLog;
}

Module["print"] = function (text) {
  WebApiLogger("debug", text);
};
Module["printErr"] = function (text) {
  text = Array.prototype.slice.call(arguments).join(" ");
  if (0) {
    // XXX disabled for safety typeof dump == 'function') {
    dump(text + "\n"); // fast, straight to the real console
  } else {
    WebApiLogger("error", text);
  }
};



// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;




// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

  read_ = function shell_read(filename, binary) {
    var ret = tryParseAsDataURI(filename);
    if (ret) {
      return binary ? ret : ret.toString();
    }
    if (!nodeFS) nodeFS = require('fs');
    if (!nodePath) nodePath = require('path');
    filename = nodePath['normalize'](filename);
    return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
  };

  readBinary = function readBinary(filename) {
    var ret = read_(filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };




  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };



} else
if (ENVIRONMENT_IS_SHELL) {


  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }


} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }


  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };




  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}


// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message



/**
 * @license
 * Copyright 2017 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;


function dynamicAlloc(size) {
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}





/**
 * @license
 * Copyright 2020 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  var table = wasmTable;

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < table.length; i++) {
      var item = table.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.


  var ret;
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    ret = freeTableIndexes.pop();
  } else {
    ret = table.length;
    // Grow the table
    try {
      table.grow(1);
    } catch (err) {
      if (!(err instanceof RangeError)) {
        throw err;
      }
      throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
    }
  }

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    table.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    table.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunctionWasm(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

function removeFunction(index) {
  removeFunctionWasm(index);
}



var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}


/**
 * @license
 * Copyright 2020 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */




function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

/** @param {Array=} args */
function dynCall(sig, ptr, args) {
  if (args && args.length) {
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    return Module['dynCall_' + sig].call(null, ptr);
  }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};


// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 1024;



/**
 * @license
 * Copyright 2010 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];


if (typeof WebAssembly !== 'object') {
  err('no native wasm support detected');
}


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}






// Wasm globals

var wasmMemory;

// In fastcomp asm.js, we don't need a wasm Table at all.
// In the wasm backend, we polyfill the WebAssembly object,
// so this creates a (non-native-wasm) table for us.
var wasmTable = new WebAssembly.Table({
  'initial': 479,
  'maximum': 479 + 0,
  'element': 'anyfunc'
});


//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_DYNAMIC = 2; // Cannot be freed except through sbrk
var ALLOC_NONE = 3; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc,
    stackAlloc,
    dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}



/**
 * @license
 * Copyright 2020 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}



// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var STATIC_BASE = 1024,
    STACK_BASE = 5307376,
    STACKTOP = STACK_BASE,
    STACK_MAX = 64496,
    DYNAMIC_BASE = 5307376,
    DYNAMICTOP_PTR = 64336;




var TOTAL_STACK = 5242880;

var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;




/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */




// In standalone mode, the wasm creates the memory, and the user can't provide it.
// In non-standalone/normal mode, we create the memory here.

/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      ,
      'maximum': 104857600 / WASM_PAGE_SIZE
    });
  }


if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_INITIAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;




/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */




/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */




function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback(Module); // Pass the module as the first argument.
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  FS.ignorePermissions = false;
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

/** @param {number|boolean=} ignore */
function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
/** @param {number|boolean=} ignore */
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc


var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;



// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data


/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  out(what);
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Throw a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  throw new WebAssembly.RuntimeError(what);
}


var memoryInitializer = null;


/**
 * @license
 * Copyright 2015 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */







/**
 * @license
 * Copyright 2017 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}



var wasmBinaryFile = 'data:application/octet-stream;base64,AGFzbQEAAAABwgM3YAF/AX9gAX8AYAJ/fwBgA39/fwF/YAJ/fwF/YAN/f38AYAZ/f39/f38Bf2AEf39/fwBgBH9/f38Bf2AFf39/f38Bf2AFf39/f38AYAZ/f39/f38AYAABf2AAAGAHf39/f39/fwF/YAh/f39/f39/fwF/YAd/f39/f39/AGAFf35+fn4AYAV/f39/fgF/YAp/f39/f39/f39/AGAFf39+f38AYAR/f39/AX5gA39+fwF+YAR/fn5/AGAKf39/f39/f39/fwF/YAd/f39/f35+AX9gBn9/f39+fgF/YAV/f39/fAF/YAZ/fH9/f38Bf2AIf39/f39/f38AYA9/f39/f39/f39/f39/f38AYAJ/fgBgCX9/f39/f39/fwF/YAt/f39/f39/f39/fwF/YAx/f39/f39/f39/f38Bf2ACfn8Bf2ACfn4Bf2AEf39/fgF+YAN/f34AYAN/fn4AYAJ/fQBgAn98AGAGf39/f398AX9gB39/fH9/f38Bf2ADfn9/AX9gBH5+fn4Bf2ACf38BfmACf38BfWADf39/AX1gAn5+AX1gAX8BfGACf38BfGADf39/AXxgAn5+AXxgAnx/AXwCkgQWA2Vudg1fX2Fzc2VydF9mYWlsAAcDZW52GF9fY3hhX2FsbG9jYXRlX2V4Y2VwdGlvbgAAA2VudgtfX2N4YV90aHJvdwAFA2VudgxnZXR0aW1lb2ZkYXkABANlbnYNX19zeXNfZmNudGw2NAADFndhc2lfc25hcHNob3RfcHJldmlldzEIZmRfY2xvc2UAABZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxCGZkX3dyaXRlAAgDZW52Cl9fc3lzX29wZW4AAwNlbnYLX19zeXNfaW9jdGwAAxZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxB2ZkX3JlYWQACANlbnYFYWJvcnQADRZ3YXNpX3NuYXBzaG90X3ByZXZpZXcxEWVudmlyb25fc2l6ZXNfZ2V0AAQWd2FzaV9zbmFwc2hvdF9wcmV2aWV3MQtlbnZpcm9uX2dldAAEA2VudgpfX21hcF9maWxlAAQDZW52DF9fc3lzX211bm1hcAAEA2VudgpzdHJmdGltZV9sAAkDZW52FmVtc2NyaXB0ZW5fcmVzaXplX2hlYXAAAANlbnYVZW1zY3JpcHRlbl9t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IwBBEGsiASQAIAEgADYCDCABKAIMIgAQpAEgAEEIahAhIAFBEGokAAsnAQF/IwBBEGsiACQAIABB/IwDNgIMIAAoAgxBFGoQHyAAQRBqJAALKwEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAQQhqEDQgABAxIAFBEGokAAsdAQF/IwBBEGsiASQAIAEgADYCDBAjIAFBEGokAAsiAQF/IwBBEGsiASQAIAEgADYCDCABKAIMECIgAUEQaiQAC00BAn8jAEEQayIBJAAgAUEIaiECIAEgADYCDCABKAIMIgAQOBogAEEANgIAIABBADYCBCABQQA2AgggAEEIaiACIAEQpQEgAUEQaiQACyoBAn8jAEEQayIAJAAgAEGojQM2AgwgACgCDCIBECQgARAlIABBEGokAAtUAQJ/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQbCECIAAgAiAAEGwgABD4AUEDdGogABBsIAAQ+QFBA3RqIAAQbCAAEPgBQQN0ahDbASABQRBqJAALSwEBfyMAQRBrIgEkACABIAA2AgggASABKAIIIgA2AgwgACgCAARAIAAQ+gEgABA9IAAoAgAgABD7ARD8AQsgASgCDBogAUEQaiQACzcBAX8jAEEQayIBJAAgASAANgIEIAEgASgCBCIAIAAoAgAQKjYCCCABKAIIIQAgAUEQaiQAIAALNwEBfyMAQRBrIgEkACABIAA2AgQgASABKAIEIgAgACgCBBAqNgIIIAEoAgghACABQRBqJAAgAAs4AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIECshACACQRBqJAAgAEF/c0EBcQsYAQF/IwBBEGsiASAANgIMIAEoAgwoAgALNwEBfyMAQRBrIgIkACACIAA2AgQgAiABNgIAIAJBCGogAigCABB4IAIoAgghACACQRBqJAAgAAs5AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDBApIQAgAigCCBApIQEgAkEQaiQAIAAgAUYLIgEBfyMAQRBrIgEgADYCDCABKAIMIgAgACgCAEEBajYCAAsaAEGkjQNBpI0DKAIAQQFqNgIAQaSNAygCAAueAQEGfyMAQdAAayIBJAAgAUEgaiECIAFBEGohA0EEIQUgAUFAayEEQfiMAyEGIAEgADYCTCABQTBqIgBBgAgQLyAEIAYgABDsAyABKAJMIAQQMCAEEDEgABCLCxogAiABKAJMECkiACAFIAAoAgAoAggRBQAgASACEDIgAyABEDMgARA0IAMQNSEAIAMQiwsaIAIQNCABQdAAaiQAIAALRgEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIoAhwiACACQRBqIAJBCGoQNiAAIAIoAhggAigCGBA3EIoLIAJBIGokAAs+AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCEAIAIgAigCCBA4EDkgAiAAEDogAhAxIAJBEGokAAs8AQF/IwBBEGsiASQAIAEgADYCCCABIAEoAggiADYCDCAAKAIEBEAgACgCBBA7CyABKAIMGiABQRBqJAALgwEBAn8jAEEgayICJAAgAkEQaiEDIAIgADYCGCACIAE2AhQgAiACKAIYIgA2AhwgAigCFBA9ED4gACADED8gAiACKAIUEEA2AgQgAigCBEEASwRAIAAgAigCBBBBIAAgAigCFCgCACACKAIUKAIEIAIoAgQQQgsgAigCHBogAkEgaiQACysBAX8jAEEQayICJAAgAiAANgIMIAIgARAyIAAgAhA8IAIQNCACQRBqJAALKAEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAEEMgABBEIAFBEGokAAsmAQF/IwBBEGsiASQAIAEgADYCDCABKAIMEEUhACABQRBqJAAgAAtKAQF/IwBBIGsiAyQAIAMgADYCHCADIAE2AhggAyACNgIUIAMoAhwhACADKAIYEDgaIAAQ5gEgAygCFBA4GiAAEKcBIANBIGokAAsnAQF/IwBBEGsiASQAIAEgADYCDCABKAIMENMLIQAgAUEQaiQAIAALFQEBfyMAQRBrIgEgADYCDCABKAIMC0oBAX8jAEEQayICIAA2AgwgAiABNgIIIAIoAgwiACACKAIIKAIANgIAIAAgAigCCCgCBDYCBCACKAIIQQA2AgAgAigCCEEANgIEC0EBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIgAgAigCCBDEASAAQQRqIAIoAghBBGoQxAEgAkEQaiQACzABAX8jAEEQayIBJAAgASAANgIMIAEoAgwiABDfAUEBcQRAIAAQgQsLIAFBEGokAAsuAQJ/IwBBEGsiAiQAIAIgADYC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AgwQaEEBcQRAIAIgAigCFBBpNgIMCyACQThqIQAgAigCECACQQxqKAAANgAAIAIoAhBBBGogAkEoaiIBEGwgAigCFBDNCxogAigCECEDIAEQNCAAEDQgAkHQAGokACADC+4BAQR/IwBB4ABrIgQkACAEIAA2AlwgBCABNgJYIAQgAjYCVCAEIAM2AlAgBCAEKAJUEDU2AgAgBBDSCyAEQSBqIQFBASEGIARBEGohAiAEQUBrIQNB+IwDIQUgBCAEKAJUEG02AjggBCAEKAJUEG42AjAgAyAEKAI4IAQoAjAQbyAEIAc6AC8gACAEKAJYEDIgASAFIAQoAlBBCGogBCgCWBDxAyABECkhBSACIAMQMiAFIAIgABBwIAIQNCABECkgABBmIAQgBjoALyABEDEgBC0AL0EBcUUEQCAAEDQLIARBQGsQNCAEQeAAaiQACykBAX8jAEEQayIBJAAgASAANgIMIAEoAgwoAgAQOCEAIAFBEGokACAACzIBAX8jAEEQayIBJAAgASAANgIEIAFBCGogASgCBBB3EHggASgCCCEAIAFBEGokACAACzkBAX8jAEEQayIBJAAgASAANgIEIAFBCGogASgCBCIAEHcgABB5ahB4IAEoAgghACABQRBqJAAgAAvXAQEFfyMAQUBqIgMkACADQTBqIQQgA0EYaiEFIANBOGohBiADQSBqIQcgAyABNgI4IAMgAjYCMCADIAA2AiwgAyADKAIsIgA2AjwgABAiIAcgBigCADYCACAFIAQoAgA2AgAgAyADKAIgIAMoAhgQejYCKCADKAIoQQBLBEAgA0EwaiEBIANBCGohAiADQThqIQUgA0EQaiEEIAAgAygCKBBBIAQgBSgCADYCACACIAEoAgA2AgAgACADKAIQIAMoAgggAygCKBB7CyADKAI8GiADQUBrJAALlAEBBH8jAEFAaiIDJAAgA0EgaiEEIANBGGohBSADIAA2AjwgAyACNgI4IANBKGoiACADKAI8IgIgASACKAIAKAIIEQUAIAMoAjghASADIAMoAjgQJzYCGCAEIAUgBhBWIAMgABAmNgIQIAMgABAnNgIIIAMgASADKAIgIAMoAhAgAygCCBB/NgIAIAAQNCADQUBrJAALkAIBAn8jAEHQAGsiAyQAIAMgADYCTCADIAE2AkggAyACNgJEIANBOGoQchogAyAENgI0A0AgAygCNCADKAJESARAIANBOGogAygCTCADKAI0ai0AAEEYIgB0IAB1EHMgAyADKAI0QQFqNgI0DAELCyADQShqIQEgA0EIaiEAIANBBGohBCADIANBOGoiAhBtNgIgIAMgAhBuNgIYIAEgAygCICADKAIYEG8gACABIAMoAkgQdCADIAAQdTYCBCADIAMoAgRBBGoQwws2AgAgAygCACAEKAAANgAAIAMoAgBBBGogABBFIAMoAgQQzQsaIAMoAgAhBCAAEIsLGiABEDQgAhCLCxogA0HQAGokACAECzEBAX8jAEEQayIBJAAgASAANgIMIAEoAgwiACABQQhqIAEQNiAAEHYgAUEQaiQAIAALLwEBfyMAQRBrIgIkACACIAA2AgwgAiABOgALIAIoAgwgAiwACxCUCyACQRBqJAALpAIBCn8jAEGQAWsiAyQAIANB+ABqIQYgA0HQAGohByADQTBqIQQgA0EgaiEFIANBEGohCEH4jAMhCiADQUBrIQtBECEJIANB4ABqIQwgAyAANgKMASADIAE2AogBIAMgAjYChAEgAyADKAKIARAmNgJwIAMgAygCiAEQJjYCYCADIAwgCRB8NgJoIAYgAygCcCADKAJoEG8gAyADKAKIARAmNgJAIAMgCyAJEHw2AkggAyADKAKIARAnNgI4IAcgAygCSCADKAI4EG8gBCAKIAMoAoQBQQhqIAYQ9gMgBBApIQEgCCAHEDIgBSABIAgQZCAIEDQgBBApIAUQZiADIAUQMiAAIAMQfSADEDQgBRA0IAQQMSAHEDQgBhA0IANBkAFqJAALJgEBfyMAQRBrIgEkACABIAA2AgwgASgCDBB5IQAgAUEQaiQAIAALYAECfyMAQRBrIgEkACABIAA2AgwgASABKAIMEJEBNgIIIAEgAjYCBANAIAEoAgRBA09FBEAgASgCCCABKAIEQQJ0akEANgIAIAEgASgCBEEBajYCBAwBCwsgAUEQaiQACz0BAX8jAEEQayIBJAAgASAANgIMAn8gASgCDCIAEOMBQQFxBEAgABBMDAELIAAQ8AELIQAgAUEQaiQAIAALJAEBfyMAQRBrIgIgADYCDCACIAE2AgggAigCDCACKAIINgIACz4BAX8jAEEQayIBJAAgASAANgIMAn8gASgCDCIAEOMBQQFxBEAgABDkAQwBCyAAEOUBCyEAIAFBEGokACAAC1MBAX8jAEEwayICJAAgAiAANgIoIAIgATYCICACQRhqIAJBKGooAgA2AgAgAkEQaiACQSBqKAIANgIAIAIoAhggAigCEBCxASEAIAJBMGokACAAC5UBAQV/IwBBQGoiBCQAIARBMGohBSAEQQhqIQYgBEE4aiEHIARBEGohCCAEIAE2AjggBCACNgIwIAQgADYCLCAEIAM2AiggBEEYaiIAIAQoAiwiASAEKAIoELMBIAEQPSEBIAggBygCADYCACAGIAUoAgA2AgAgASAEKAIQIAQoAgggAEEEahC0ASAAELUBIARBQGskAAtGAQF/IwBBEGsiAiQAIAIgADYCBCACIAE2AgAgAkEIaiIAIAIoAgQoAgA2AgAgACACKAIAEH4gAigCCCEAIAJBEGokACAACywBAX8jAEEQayICJAAgAiAANgIMIAIgARAyIAAgAhCAASACEDQgAkEQaiQACywBAX8jAEEQayICIAA2AgwgAiABNgIIIAIoAgwiACACKAIIIAAoAgBqNgIAC5kFAQh/IwBBoAFrIgQkACAEQYABaiEGIARB4ABqIQcgBEGIAWohCCAEQegAaiEJIARBkAFqIQogBEHwAGohCyAEIAE2ApABIAQgAjYCiAEgBCADNgKAASAEIAA2AnwgBCgCfCIAKAIAIQEgBCAAECY2AnAgBCAKIAsQqAEgAWo2AnggCSAIKAIANgIAIAcgBigCADYCACAEIAQoAmggBCgCYBB6NgJsIAQoAmwgBUoEQAJAIAQoAmwgABA9KAIAIAAoAgRrTARAIAQgBCgCbDYCXCAEIAAoAgQ2AlggBEHQAGogBEGAAWooAgA2AgAgBCAAKAIEIAQoAnhrNgJMIAQoAmwgBCgCTEoEQCAEQYABaiECIARBOGohAyAEQUBrIQUgBEHQAGoiASAEQYgBaigCADYCACAEIAAoAgQgBCgCeGs2AkggASAEKAJIEKkBIAUgASgCADYCACADIAIoAgA2AgAgACAEKAJAIAQoAjggBCgCbCAEKAJIaxB7IAQgBCgCTDYCbAsgBCgCbEEASgRAIARB0ABqIQEgBEEoaiECIARBiAFqIQMgBEEwaiEFIAAgBCgCeCAEKAJYIAQoAnggBCgCXGoQqgEgBSADKAIANgIAIAIgASgCADYCACAEKAIwIAQoAiggBCgCeBCrAQsMAQsgBEEQaiEBIARBgAFqIQIgBEGIAWohAyAEQQhqIQUgBCAAED02AiQgASAAIAAQQCAEKAJsahCsASAEKAJ4IAAoAgBrIAQoAiQQrQEgBSADKAIANgIAIAQgAigCADYCACABIAQoAgggBCgCABCuASAEIAAgASAEKAJ4EK8BNgJ4IAEQsAELCyAEIAAgBCgCeBAqNgKYASAEKAKYASEAIARBoAFqJAAgAAsyAQJ/IwBBEGsiAiQAQQIhAyACIAA2AgwgAiABEDIgACACIAMQggIgAhA0IAJBEGokAAuFAQECfyMAQRBrIgIkACACIAA2AgQgAiABNgIAIAIoAgQiABC4AyAAIAIoAgAQuQMgACACKAIAKAIANgIAIAAgAigCACgCBDYCBCACKAIAED0oAgAhASAAED0gATYCACACKAIAED0gAzYCACACKAIAIAM2AgQgAigCACADNgIAIAJBEGokAAt+AQF/IwBBEGsiASQAIAEgADYCCCABIAEoAggiADYCDCAAEIMBIAEgABCEATYCBCABIAAQhQE2AgADQCABKAIEIAEoAgBHBEAgABCGASABKAIEKAIAQdUCEIcBIAEgASgCBEEEajYCBAwBCwsgABCIASABKAIMGiABQRBqJAAL5AEBA38jAEEgayIBJAAgAUEIaiECIAFBEGohAyABIAA2AhwgASABKAIcIgAQhgE2AhggAyAAEIkBIAIgABCKAQNAIAFBEGogAUEIahCLAUEBcQRAIAEoAhggAUEQahCEARA4EIwBIAFBEGoQjQEMAQsLQQAhAiAAEIYBIAI2AgADQAJAQQIhAiAAEI4BIAJNDQBB1QIhAiABKAIYIAAQhAEoAgAgAhCHASAAEI8BDAELCwJAIAAQjgFBf2oiAkEBSw0AIAJBAWsEQCAAQaoBNgIQDAELIABB1QI2AhALIAFBIGokAAsYAQF/IwBBEGsiASAANgIMIAEoAgwoAgQLGAEBfyMAQRBrIgEgADYCDCABKAIMKAIICyoBAX8jAEEQayIBJAAgASAANgIMIAEoAgxBFGoQkQEhACABQRBqJAAgAAs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwgAygCCCADKAIEEJABIANBEGokAAtMAQF/IwBBEGsiASQAIAEgADYCCCABIAEoAggiADYCDCAAEJIBIAAoAgAEQCAAEJMBIAAoAgAgABCUARCVAQsgASgCDBogAUEQaiQAC2UBAX8jAEEQayICJAAgAiABNgIMIAIgAigCDCIBEIQBIAEoAhBB1QJuQQJ0ajYCCCAAIAIoAggCf0EAIAEQlgFBAXENABogAigCCCgCACABKAIQQdUCcEEMbGoLEEogAkEQaiQAC3gBAX8jAEEQayICJAAgAiABNgIMIAIgAigCDCIBEIYBKAIAIAEoAhBqNgIIIAIgARCEASACKAIIQdUCbkECdGo2AgQgACACKAIEAn9BACABEJYBQQFxDQAaIAIoAgQoAgAgAigCCEHVAnBBDGxqCxBKIAJBEGokAAs5AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIEJcBIQAgAkEQaiQAIABBf3NBAXELLwEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIoAhwgAigCGBCYASACQSBqJAALVQEBfyMAQRBrIgEgADYCDCABKAIMIgAoAgRBDGohASAAIAE2AgQgASAAKAIAKAIAa0EMbUHVAkYEQCAAIAAoAgBBBGo2AgAgACAAKAIAKAIANgIECwsjAQF/IwBBEGsiASAANgIMIAEoAgwiACgCCCAAKAIEa0ECdQstAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAgACgCBEEEahCZASABQRBqJAALOwEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIIIAMoAgRBDGxBBBCbASADQRBqJAALJgEBfyMAQRBrIgEkACABIAA2AgwgASgCDBA4IQAgAUEQaiQAIAALKgEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAIAAoAgQQnwEgAUEQaiQACyoBAX8jAEEQayIBJAAgASAANgIMIAEoAgxBDGoQkQEhACABQRBqJAAgAAs1AQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQkwEoAgAgACgCAGtBAnUhACABQRBqJAAgAAs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwgAygCCCADKAIEEKABIANBEGokAAsgAQF/IwBBEGsiASAANgIMIAEoAgwiACgCCCAAKAIERgsoAQF/IwBBEGsiAiAANgIMIAIgATYCCCACKAIMKAIEIAIoAggoAgRGCy8BAX8jAEEQayICJAAgAiAANgIEIAIgATYCACACKAIEIAIoAgAQmgEgAkEQaiQAC0wBAX8jAEEgayICJAAgAiAANgIcIAIgATYCGCACKAIYIQEjAEEQayIAIAIoAhw2AgQgACABNgIAIAAoAgQgACgCADYCBCACQSBqJAALKwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAggQiwsaIAJBEGokAAs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwgAygCCCADKAIEEJwBIANBEGokAAs2AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwgAygCCBCdASADQRBqJAALKgEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwQngEgAkEQaiQACyMBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQxAsgAUEQaiQACy8BAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIAIoAggQoQEgAkEQaiQACzsBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCCCADKAIEQQJ0QQQQmwEgA0EQaiQAC1sBAn8jAEEQayICJAAgAiAANgIEIAIgATYCACACKAIEIQADQCACKAIAIAAoAghHBEAgABCTASEBIAAgACgCCEF8aiIDNgIIIAEgAxA4EKIBDAELCyACQRBqJAALLwEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIoAhwgAigCGBCjASACQSBqJAALLgEBfyMAQRBrIgIkACACIAA2AgQgAiABNgIAIAIoAgQgAigCABBcIAJBEGokAAsjAQF/IwBBEGsiASAANgIMIAEoAgwiAEEANgIAIABBADYCBAtHAQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwiACADKAIIEDgQpgEgAygCBBA4GiAAEKcBIANBEGokAAs4AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCEAIAIoAggQOBogAEEANgIAIAJBEGokAAsjAQF/IwBBEGsiASQAIAEgADYCBCABKAIEEDgaIAFBEGokAAs1AQF/IwBBEGsiAiQAIAIg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IAFBCGohAiABQQRqIQMgASAANgIMIAEgASgCDBA9EM0BNgIIIAFB/////wc2AgQgAiADEM4BKAIAIQAgAUEQaiQAIAALJwEBfyMAQRBrIgEkACABIAA2AgwgASgCDBDPASEAIAFBEGokACAACzMBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIAIoAggQ0AEhACACQRBqJAAgAAtJAQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwiACADKAIIEDgQpgEgAEEEaiADKAIEEDgQ1QEgA0EQaiQACyoBAX8jAEEQayIBJAAgASAANgIMIAEoAgxBDGoQ1wEhACABQRBqJAAgAAszAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIENYBIQAgAkEQaiQAIAALTQEBfyMAQRBrIgMgADYCDCADIAE2AgggAyACNgIEIAMoAgwiACADKAIIKAIANgIAIAAgAygCCCgCACADKAIEajYCBCAAIAMoAgg2AggLIgEBfyMAQRBrIgEgADYCDCABKAIMIgAoAgggACgCADYCAAt7AQF/IwBBIGsiBCQAIAQgADYCHCAEIAE2AhggBCACNgIUIAQgAzYCECAEIAQoAhQgBCgCGGs2AgwgBCgCECIAIAAoAgBBACIAIAQoAgxrajYCACAEKAIMIABKBEAgBCgCECgCACAEKAIYIAQoAgwQzQsaCyAEQSBqJAALdgEBfyMAQSBrIgQkACAEIAA2AhwgBCABNgIYIAQgAjYCFCAEIAM2AhAgBCAEKAIUIAQoAhhrNgIMIAQoAgxBAEoEQCAEKAIQKAIAIAQoAhggBCgCDBDNCxogBCgCECIAIAQoAgwgACgCAGo2AgALIARBIGokAAthAQJ/IwBBEGsiAiQAIAJBBGohAyACIAA2AgwgAiABNgIIIAIgAigCDBA4KAIANgIEIAIoAggQOCgCACEAIAIoAgwgADYCACADEDgoAgAhACACKAIIIAA2AgAgAkEQaiQAC1IBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIgAQbCEBIAAgASAAEGwgABC7AWogABBsIAAQuwFqIAAQbCACKAIIahDbASACQRBqJAALDAAjAEEQayAANgIMCyoBAX8jAEEQayIBJAAgASAANgIM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IQAgAUEQaiQAIABB/wFxCxYBAX8jAEEQayIBIAA2AgQgASgCBBoLVQEBfyMAQSBrIgMkACADIAA2AhwgAyABNgIYIAMgAjoAFyADKAIcIgAgA0EQaiADQQhqEDYgACADKAIYIAMtABdBGCIBdCABdRCVCyADQSBqJAAgAAtEAQF/IwBBEGsiASQAIAEgADYCDCABQQA2AgggASgCDCIAIAEoAggQ6QEgAEGcgQM2AgAgACABKAIINgIIIAFBEGokAAsvAQF/IwBBEGsiAiAANgIMIAIgATYCCCACKAIMIgBB5IADNgIAIAAgAigCCDYCBAsjAQF/IwBBEGsiASQAIAEgADYCDCABKAIMEOsBIAFBEGokAAsmAQF/IwBBEGsiASQAIAEgADYCDCABKAIMQQRqEOwBIAFBEGokAAtCAQJ/IwBBEGsiASAANgIMIAEoAgwhACABQQE2AgggACABKAIIIgIgACgCACIAajYCACABIAAgAmo2AgQgASgCBBoLMwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwQRSACKAIIaiEAIAJBEGokACAACzMBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMEHcgAigCCGohACACQRBqJAAgAAtMAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCIAIAIoAggQOCIBKQIANwIAIABBCGogASgCCDYCACACKAIIEHYgAkEQaiQACyoBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQkQEQkQEhACABQRBqJAAgAAscAQF/IwBBEGsiASAANgIMIAEoAgxB6IIDNgIACycBA39ByKgCIQFBBiECQQQQASIAQQA2AgAgABDzASAAIAEgAhACAAsuAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQ8QEgAEGgqAI2AgAgAUEQaiQAC0YBAn8jAEEQayIBJAAgAUEIaiECIAEgADYCDCABKAIMIgAQ9QEgAEEANgIQIAFBADYCCCAAQRRqIAIgARD2ASABQRBqJAALSwEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAQQA2AgAgAEEANgIEIABBADYCCCABQQA2AgggAEEMaiABQQhqIAEQpQEgAUEQaiQAC0cBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCDCIAIAMoAggQOBD3ASADKAIEEDgaIAAQpwEgA0EQaiQACzQBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIAIoAggQOCgCADYCACACQRBqJAALJwEBfyMAQRBrIgEkACABIAA2AgwgASgCDBD7ASEAIAFBEGokACAACyMBAX8jAEEQayIBIAA2AgwgASgCDCIAKAIEIAAoAgBrQQN1CyoBAX8jAEEQayIBJAAgASAANgIMIAEoAgwiACAAKAIAEP0BIAFBEGokAAs0AQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQPSgCACAAKAIAa0EDdSEAIAFBEGokACAACzsBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCDCADKAIIIAMoAgQQ/gEgA0EQaiQAC2wBAn8jAEEQayICJAAgAiAANgIMIAIgATYCCCACIAIoAgwiACgCBDYCBANAIAIoAgggAigCBEcEQCAAED0hASACIAIoAgRBeGoiAzYCBCABIAMQOBD/AQwBCwsgACACKAIINgIEIAJBEGokAAs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgggAygCBEEDdEEEEJsBIANBEGokAAsvAQF/IwBBIGsiAiQAIAIgADYCHCACIAE2AhggAigCHCACKAIYEIACIAJBIGokAAsvAQF/IwBBEGsiAiQAIAIgADYCBCACIAE2AgAgAigCBCACKAIAEIECIAJBEGokAAspAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCCBAxIAJBEGokAAuVAQECfyMAQTBrIgMkACADQRhqIQQgAyAANgIsIAMgAjYCKCADIAEQWDYCECADIAEQgwI2AgggBCADKAIQIAMoAgggAygCKBCEAgJ/IwBBEGsiASAENgIMIAEoAgwoAgRBf2otAAALBEAgA0EAOgAHIANBGGogA0EHahCFAgsgACADQRhqIgAQbBAvIAAQNCADQTBqJAALMAEBfyMAQRBrIgEkACABIAA2AgQgASABKAIEECc2AgggASgCCCEAIAFBEGokACAAC40BAQF/IwBBQGoiBCQAIAQgADYCPCAEIAE2AjggBCACNgIwIAQgAzYCLCAEQRhqIARBOGooAgA2AgAgBEEQaiAE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AgwgAiABNgIIIAIoAgwiABDvBiAAQfgLNgIAIABBIGoQchogAEEANgIsIAAgAigCCDYCMCACQRBqJAALNgEBfyMAQRBrIgIgADYCDCACIAE6AAsgAiACKAIMIgAoAkw6AAogACACLAALNgJMIAIsAAoaC18BAX8jAEEQayIBJAAgASAANgIMIAFBCDYCCCABQcoANgIEIAEgASgCDCIAKAIENgIAIAAgASgCBBDQAiAAIAAoAgQgASgCCCABKAIEcXI2AgQgASgCABogAUEQaiQACzYBAX8jAEEQayICIAA2AgwgAiABNgIIIAIgAigCDCIAKAIMNgIEIAAgAigCCDYCDCACKAIEGgvEAQEEfyMAQUBqIgIkACACIAA2AjwgAiABNgI4AkAgAigCOCIBKAIwQRBxBEAgASgCLCABELoCSQRAIAEgARC6AjYCLAsgAkEwaiEDIAEQvQIhBCABKAIsIQUgAUEgahDRAiAAIAQgBSADENICGgwBCyABKAIwQQhxBEAgAkEgaiEDIAEQhQEhBCABEMQCIQUgAUEgahDRAiAAIAQgBSADENICGgwBCyACQRBqIQMgAUEgahDRAiAAIAMQ0wILIAJBQGskAAtgAQJ/IwBBEGsiASQAIAEgADYCDCABQegJNgIIIAEoAgwiACABKAIIIgIoAgA2AgAgACgCAEF0aigCACAAaiACKAIgNgIAIAAgAigCJDYCCCAAQQxqELcCGiABQRBqJAALcAEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIgAgAygCCCIBKAIANgIAIAAoAgBBdGooAgAgAGogASgCBDYCACAAQQA2AgQgACgCAEF0aigCACAAaiADKAIEELYCIANBEGokAAtBAQF/IwBBEGsiAiAANgIMIAIgATYCCCACKAIMIgAgAigCCCIBKAIANgIAIAAoAgBBdGooAgAgAGogASgCBDYCAAsrAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQnQIaIAAQxAsgAUEQaiQACzMBAX8jAEEQayIBJAAgASAANgIIIAEgASgCCCIANgIMIABBeGoQnQIhACABQRBqJAAgAAsmAQF/IwBBEGsiASQAIAEgADYCDCABKAIMQXhqELECIAFBEGokAAs8AQF/IwBBEGsiASQAIAEgADYCCCABIAEo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EGsiAiQAIAIgADYCDCACIAE2AgggAkEANgIEIAIoAgggAigCDBCuA0sEQEGUCBDYAQALIAIoAghBDGxBBBDZASEAIAJBEGokACAAC0UBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCDBA4IAMoAggQOCADKAIEEDgQrwMhACADQRBqJAAgAAszAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIELADIQAgAkEQaiQAIAALWgECfyMAQRBrIgEkACABIAA2AgwgAUEANgIIIAEgASgCDCIAEJEBKAIANgIEIAEoAgghAiAAEJEBIAI2AgAgASgCBARAIAAQ8wIgASgCBBCxAwsgAUEQaiQACyoBAX8jAEEQayIBJAAgASAANgIMIAEoAgwiACAAKAIEELIDIAFBEGokAAtuAQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMgAygCCCADKAIMa0ECdTYCACADKAIAQQBLBEAgAygCBCADKAIMIAMoAgBBAnQQzwsLIAMoAgQgAygCAEECdGohACADQRBqJAAgAAtTAQF/IwBBMGsiAiQAIAIgADYCKCACIAE2AiAgAkEYaiACQShqKAIANgIAIAJBEGogAkEgaigCADYCACACKAIYIAIoAhAQqwMhACACQTBqJAAgAAtQAQF/IwBBEGsiAyAANgIMIAMgATYCCCADIAI2AgQgAygCDCIAIAMoAggoAgA2AgAgACADKAIIKAIAIAMoAgRBAnRqNgIEIAAgAygCCDYCCAs9AQF/IwBBIGsiAyQAIAMgADYCFCADIAE2AhAgAyACNgIMIAMoAhQgAygCECADKAIMEDgQrQMgA0EgaiQACzMBAX8jAEEgayICJAAgAiAANgIYIAIgATYCECACQRBqIAJBGGoQrAMhACACQSBqJAAgAAs4AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDBApIAIoAggQKWshACACQRBqJAAgAEECdQs7AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgggAygCBBA4KAIANgIAIANBEGokAAsSACMAQRBrIAA2AgxB1arVqgELewEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADIAMoAgggAygCDGtBAnU2AgAgAygCAEEASwRAIAMgAygCBEEAIAMoAgBrQQJ0ajYCBCADKAIEIAMoAgwgAygCAEECdBDPCwsgAygCBCEAIANBEGokACAAC2ABAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACQQA2AgQgAigCCAJ/IwBBEGsgAigCDDYCDEH/////AwtLBEBBlAgQ2AEACyACKAIIQQJ0QQQQ2QEhACACQRBqJAAgAAs5AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCIAKAIAIAIoAgggACgCBBCHASACQRBqJAALLwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwgAigCCBCzAyACQRBqJAALWwECfyMAQRBrIgIkACACIAA2AgQgAiABNgIAIAIoAgQhAANAIAIoAgAgACgCCEcEQCAAEL4BIQEgACAAKAIIQXxqIgM2AgggASADEDgQogEMAQsLIAJBEGokAAs4AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgggAygCBBA4EIkLIANBEGokAAtSAQF/IwBBIGsiAyQAIAMgADYCHCADIAI2AhggAyABEDU2AhQgAygCFCECIAEQdSEBIAMgAygCGBC2AyAAIAIgASADEIcCIAMQiAIgA0EgaiQAC1MBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCAJAIAIoAggiAUEBTQRAIAFBAWsEQCAAQQ4QjQIMAgsgAEEPEI8CDAELIABBCRCPAgsgAkEQaiQAC5oCAQF/IwBBMGsiBSQAIAUgADYCLCAFIAE2AiggBSACNgIkIAUgAzYCICAFIAQ2AhwCQAJAIAUoAiwEQCAFKAIcDQELIAUoAiQgBSgCHEEBdjYCAAwBCyAFAn8gBSgCHCAFKAIoQQF0SwRAIAUoAihBAXQMAQsgBSgCHAs2AhggBSgCJCAFKAIYQQF2NgIAIAVBFWoiAEGuDi0AADoAAiAAQawOLwAAOwAAIAVBADYCEANAIAUoAhAgBSgCGEkEQCAFQRVqIgAgBSgCICAFKAIQai8AADsAACAFIABBAEEQQoCAgIAIEKMGPAAPIAUoAiwgBSgCEEECbWogBS0ADzoAACAFIAUoAhBBAmo2AhAMAQsLCyAFQTBqJAALVQECfyMAQRBrIgEkACABIAA2AgwgASgCDCIAKAIABEAgABC6AyAAED0gACgCACAAELsBEMkBIAAQPSACNgIAIAAgAjYCBCAAIAI2AgALIAFBEGokAAsvAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIELsDIAJBEGokAAs9AQF/IwBBEGsiASQAIAEgADYCDCABIAEoAgwiABBANgIIIAAQ4QEgACABKAIIELwDIAAQxgEgAUEQaiQACzgBAX8jAEEQayICJAAgAiAANgIEIAIgATYCACACKAIEIQAgAigCABA9EDgaIAAQPRogAkEQaiQAC1EBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIgAQbCEBIAAgASAAEGwgABC7AWogABBsIAIoAghqIAAQbCAAEEBqENsBIAJBEGokAAt6AQV/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQxgECQCAAEOMBQQFxBEAgAUELaiEDIAAQTCEFIAEgBDoACyAFIAMQ3wIgACACEN4CDAELIAFBCmohAyAAEPABIQUgASAEOgAKIAUgAxDfAiAAIAIQ2gILIAFBEGokAAspAQJ/IwBBEGsiASQAIAEgADYCDCABKAIMEHkhACABQRBqJAAgACACRgszAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCACKAIIEMADIQAgAkEQaiQAIAALTQEBfyMAQRBrIgIkACACIAA2AgQgAiABNgIAAn8gAkEIaiACKAIAIAIoAgQQwQNBAXEEQCACKAIADAELIAIoAgQLIQAgAkEQaiQAIAALLwEBfyMAQRBrIgMgADYCDCADIAE2AgggAyACNgIEIAMoAggoAgAgAygCBCgCAEgLMwEBfyMAQRBrIgEkACABIAA2AgQgAUEIaiABKAIEEDgQwwMgASgCCCEAIAFBEGokACAACy8BAX8jAEEwayICJAAgAiAANgIsIAIgATYCKCACKAIsIAIoAigQxQMgAkEwaiQACyYBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQKSEAIAFBEGokACAACzEBAX8jAEEwayICJAAgAiAANgIMIAIgATYCCCACKAIMIAIoAggQOBDVASACQTBqJAALPQEBfyMAQSBrIgMkACADIAA2AhwgAyABNgIYIAMgAjYCFCADKAIcIAMoAhggAygC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ABDGASADQRBqJAALPQEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIAMoAggQOCADKAIEEIIEIANBEGokAAtNAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCIAIAIoAggQXCACIAAQQDYCBCAAIAIoAggQ4gEgACACKAIEELwDIAJBEGokAAtZAQJ/IwBBEGsiASQAIAEgADYCDCMAQRBrIgIgASgCDCIANgIMIAIoAgxB1A82AgAgAEG8DzYCACAAQQRqQQBB7AAQzgsaIABBBGpBABCPBiABQRBqJAAgAAtBAQJ/IwBBEGsiASQAIAEgADYCDCABKAIMIgBBvA82AgAgAEEEaiICBEAgAkHsABCMBgsgABA4GiABQRBqJAAgAAstAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgBBOhEAABogABDECyABQRBqJAALOwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgxBBGogAigCCBBsIAIoAggQQBCRBiACQRBqJAALWgEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgghASACQQA6AAcgAEEgENgDIAFBBGogABBsEJIGIAJBAToAByACLQAHQQFxRQRAIAAQNAsgAkEQaiQACw0AIwBBEGsgADYCDAALLgEBfyMAQRBrIgAkACAAQfiMAzYCDCAAKAIMQaQQNgIAEIMGENYFIABBEGokAAstAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgBBPBEAABogABDECyABQRBqJAALSgECfyMAQSBrIgIkACACQQhqIQMgAiAANgIcIAIgATYCGCACQRBqIgEQ5wMgA0EANgIAIAAgASACKAIIEOgDIAEQMSACQSBqJAALhwEBB38jAEEwayIBJAAgAUEYaiECIAFBCGohByABQRBqIQNBASEGIAEgADYCLCABQShqIgUQOBogBSAGIAQQ6QMhBCADIAUgBhBKIAIgBCADEEsgAhBMIQMgByAFEE0gAxDqAyABIAIQTBBPNgIEIAAgASgCBCACEFAQUSACEOsDIAFBMGokAAtRAQF/IwBBEGsiAyACNgIIIAMgADYCBCADIAE2AgAgAygCBCIAIAMoAgAoAgA2AgAgACADKAIAKAIENgIEIAMoAgBBADYCACADKAIA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AigCDBA4IAIoAhgQOBDGAyACIAIoAgxBDGo2AgwgABC1ASACQSBqJAALewEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIgAigCHCIAED02AhQgAiAAIAAQqwRBAWoQsAQgABCrBCACKAIUELEEIAIoAhQgAigCCBA4IAIoAhgQOBDGAyACIAIoAghBDGo2AgggACACELIEIAIQswQgAkEgaiQAC1QBAn8jAEEQayIBJAAgASAANgIMIAEoAgwiABBsIQIgACACIAAQbCAAEKoEQQxsaiAAEGwgABCrBEEMbGogABBsIAAQqgRBDGxqENsBIAFBEGokAAtLAQF/IwBBEGsiASQAIAEgADYCCCABIAEoAggiADYCDCAAKAIABEAgABCsBCAAED0gACgCACAAEK0EEIcBCyABKAIMGiABQRBqJAALbAEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAJBCGogAigCHCIAIAIoAhgQswEDQCACKAIMIAIoAhBHBEAgABA9IAIoAgwQOBCABCACIAIoAgxBAWo2AgwMAQsLIAJBCGoQtQEgAkEgaiQACy8BAX8jAEEgayICJAAgAiAANgIcIAIgATYCGCACKAIcIAIoAhgQgQQgAkEgaiQAC0kBAX8jAEEQayICJAAgAiAANgIEIAIgATYCACACKAIAIQEjAEEQayIAIAIoAgQ2AgwgACABNgIIIAAoAghBADoAACACQRBqJAALXgEBfyMAQRBrIgMgADYCDCADIAE2AgggAyACNgIEA0AgAygCCEEASwRAIAMoAgwgAygCBC0AADoAACADIAMoAgxBAWo2AgwgAyADKAIIQX9qNgIIDAELCyADKAIMGgtHAQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgwiACADKAIIEDgQ1wIgAygCBBA4GiAAEIUEIANBEGokAAtaAQJ/IwBBEGsiASQAIAEgADYCDCABQQA2AgggASABKAIMIgAQkQEoAgA2AgQgASgCCCECIAAQkQEgAjYCACABKAIEBEAgABDzAiABKAIEEI0ECyABQRBqJAALJgEBfyMAQRBrIgEkACABIAA2AgQgASgCBEE9EQAAGiABQRBqJAALMgEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAQcQSNgIAIABBDGoQhwQgAUEQaiQAIAALIwEBfyMAQRBrIgEkACABIAA2AgwgASgCDBCMBCABQRBqJAALKwEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAEIYEGiAAEMQLIAFBEGokAAs0AQF/IwBBEGsiASQAIAEgADYCDCABKAIMQQxqEJEBIgAgACgCACgCABEAABogAUEQaiQAC0oBA38jAEEQayIBJABBASECIAEgADYCDCABQQhqIgMgASgCDCIAQQxqEJEBEE0gAEEMahCRARogAyAAEJEBIAIQiwQgAUEQaiQACzwBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCCCADKAIEQfwAbEEEEJsBIANBEGokAAsmAQF/IwBBEGsiASQAIAEgADYCDCABKAIMQToRAAAaIAFBEGokAAs5AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCIAKAIAIAIoAgggACgCBBCOBCACQRBqJAALOwEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIAMoAgggAygCBBCLBCADQRBqJAALbwEDfyMAQdAAayIDJAAgA0EQaiEEIANBOGohBSADIAE2AkAgAyACNgI4IAMgADYCNCADKAI0IQAgAyADQUBrEDgoAgA2AiggACADKAIoEJEEIAQgBRA4KAIANgIAIAAgAygCEBCSBCADQdAAaiQAC1oBAn8jAEEQayIBJAAgASAANgIMIAFBADYCCCABIAEoAgwiABCRASgCADYCBCABKAIIIQIgABCRASACNgIAIAEoAgQEQCAAEPMCIAEoAgQQmQQLIAFBEGokAAszAQF/IwBBIGsiAiQAIAIgATYCECACIAA2AgQgAigCBBogAkEQahDEAxA4GiACQSBqJAALNwEBfyMAQSBrIgIkACACIAE2AhAgAiAANgIEIAIoAgQgAkEQahDEAxA4QT4RBAAaIAJBIGokAAsyAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgBBtBM2AgAgAEEMahCUBCABQRBqJAAgAAsjAQF/IwBBEGsiASQAIAEgADYCDCABKAIMEJgEIAFBEGokAAsrAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAQkwQaIAAQxAsgAUEQaiQAC0oBA38jAEEQayIBJABBASECIAEgADYCDCABQQhqIgMgASgCDCIAQQxqEJEBEE0gAEEMahCRARogAyAAEJEBIAIQlwQgAUEQaiQACzwBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCCCADKAIEQcABbEEEEJsBIANBEGokAAsmAQF/IwBBEGsiASQAIAEgADYCDCABKAIMQTgRAAAaIAFBEGokAAs5AQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCIAKAIAIAIoAgggACgCBBCaBCACQRBqJAALOwEBfyMAQRBrIgMkACADIAA2AgwgAyABNgIIIAMgAjYCBCADKAIMIAMoAgggAygCBBCXBCADQRBqJAALQwEBfyMAQRBrIgQkACAEIAE2AgwgBCACNgIIIAQgAzYCBCAAIAQoAgwQOCAEKAIIEDggBCgCBBA4EJ4EIARBEGokAAuLAQECfyMAQeAAayIDJAAgA0EgaiEEIAMgATYCUCADIAA2AkwgAygCTCEAIANBQGsgA0HQAGoQOCgCADYCACAAIAMoAkAQkQQgBCACEDgiASkCADcCACAEQQhqIAEoAgg2AgAgA0EQaiADKAIoNgIAIAMgAykDIDcDCCAAIANBCGoQnwQgA0HgAGokAAtaAQJ/IwBBEGsiASQAIAEgADYCDCABQQA2AgggASABKAIMIgAQkQEoAgA2AgQgASgCCCECIAAQkQEgAjYCACABKAIEBEAgABDzAiABKAIEEKgECyABQRBqJAALTQEBfyMAQTBrIgQkACAEIAA2AiwgBCABNgIoIAQgAjYCJCAEIAM2AiAgBCgCLCAEKAIoEDggBCgCJBA4IAQoAiAQOBClBCAEQTBqJAALPgEBfyMAQSBrIgIkACACIAA2AgwgAigCDCABEMQDEDgoAgAgARDXARA4IAEQpgQQOEE/EQgAGiACQSBqJAALMgEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAQaQUNgIAIABBDGoQoQQgAUEQaiQAIAALIwEBfyMAQRBrIgEkACABIAA2AgwgASgCDBCnBCABQRBqJAALKwEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAEKAEGiAAEMQLIAFBEGokAAtKAQN/IwBBEGsiASQAQQEhAiABIAA2AgwgAUEIaiIDIAEoAgwiAEEMahCRARBNIABBDGoQkQEaIAMgABCRASACEKQEIAFBEGokAAs8AQF/IwBBEGsiAyQAIAMgADYCDCADIAE2AgggAyACNgIEIAMoAgggAygCBEHcAGxBBBCbASADQRBqJAALXwEBfyMAQTBrIgQkACAEIAA2AgwgBCABNgIIIAQgAjYCBCAEIAM2AgAgBCgCDCIAIAQoAggQOBDVASAAQQRqIAQoAgQQOBDVASAAQQhqIAQoAgAQOBDVASAEQTBqJAALKQEBfyMAQRBrIgEkACABIAA2AgwgASgCDEEIahApIQAgAUEQaiQAIAALJgEBfyMAQRBrIgEkACABIAA2AgwgASgCDEE3EQAAGiABQRBqJAALOQEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwiACgCACACKAIIIAAoAgQQqQQgAkEQaiQACzsBAX8jAEEQayIDJAAgAyAANgIMIAMgATYCCCADIAI2AgQgAygCDCADKAIIIAMoAgQQpAQgA0EQaiQACycBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQrQQhACABQRBqJAAgAAsjAQF/IwBBEGsiASAANgIMIAEoAgwiACgCBCAAKAIAa0EMbQsqAQF/IwBBEGsiASQAIAEgADYCDCABKAIMIgAgACgCABCuBCABQRBqJAALNAEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAED0oAgAgACgCAGtBDG0hACABQRBqJAAgAAtsAQJ/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAiACKAIMIgAoAgQ2AgQDQCACKAIIIAIoAgRHBEAgABA9IQEgAiACKAIEQXRqIgM2AgQgASADEDgQjAEMAQsLIAAgAigCCDYCBCACQRBqJAALUAEBfyMAQRBrIgIgADYCDCACIAE2AgggAkEBNgIEIAIoAgwiACACKAIINgIAIAAgAigCCCgCBDYCBCAAIAIoAggoAgQgAigCBEEMbGo2AggLmAEBAX8jAEEgayICJAAgAiAANgIYIAIgATYCFCACIAIoAhgiABC0BDYCECACKAIUIAIoAhBLBEAQngsACyACIAAQqgQ2AgwCQCACKAIMIAIoAhBBAXZPBEAgAiACKAIQNgIcDAELIAIgAigCDEEBdDYCCCACIAJBCGogAkEUahC8ASgCADYCHAsgAigCHCEAIAJBIGokACAAC7IBAQF/IwBBIGsiBCQAIAQgADYCGCAEIAE2AhQgBCACNgIQIAQgAzYCDCAEIAQoAhgiADYCHCAEQQA2AgggAEEMaiAEQQhqIAQoAgwQvQEgAAJ/IAQoAhQEQCAAEL4BIAQoAhQQlgMMAQtBAAs2AgAgACAAKAIAIAQoAhBBDGxqIgE2AgggACABNgIEIAAoAgAgBCgCFEEMbGohASAAEJMBIAE2AgAgBCgCHBogBEEgaiQAC5ABAQF/IwBBEGsiAiQAIAIgADYCDCACIAE2AgggAigCDCIAEP0DIAAQPSAAKAIAIAAoAgQgAigCCEEEahC1BCAAIAIoAghBBGoQxAEgAEEEaiACKAIIQQhqEMQBIAAQPSACKAIIEJMBEMQBIAIoAgggAigCCCgCBDYCACAAIAAQqwQQtgQgABDGASACQRBqJAALTAEBfyMAQRBrIgEkACABIAA2AgggASABKAIIIgA2AgwgABC3BCAAKAIABEAgABC+ASAAKAIAIAAQuAQQhwELIAEoAgwaIAFBEGokAAtRAQN/IwBBEGsiASQAIAFBCGohAiABQQRqIQMgASAANgIMIAEgASgCDBA9ELkENgIIIAFB/////wc2AgQgAiADEM4BKAIAIQAgAUEQaiQAIAALhgEBAX8jAEEQayIEJAAgBCAANgIMIAQgATYCCCAEIAI2AgQgBCADNgIAA0AgBCgCBCAEKAIIRwRAIAQoAgwhACAEKAIAKAIAQXRqEDghASAEIAQoAgRBdGoiAjYCBCAAIAEgAhCRARDGAyAEKAIAIgAgACgCAEF0ajYCAAwBCwsgBEEQaiQAC1sBAX8jAEEQayICJAAgAiAANgIMIAIgATYCCCACKAIMIgAQbCEBIAAgASAAEGwgABCqBEEMbGogABBsIAAQqgRBDGxqIAAQbCACKAIIQQxsahDbASACQRBqJAALKgEBfyMAQRBrIgEkACABIAA2AgwgASgCDCIAIAAoAgQQuwQgAUEQaiQACzUBAX8jAEEQayIBJAAgASAANgIMIAEoAgwiABCTASgCACAAKAIAa0EMbSEAIAFBEGokACAACycBAX8jAEEQayIBJAAgASAANgIMIAEoAgwQugQhACABQRBqJAAgAAsnAQF/IwBBEGsiASQAIAEgADYCBCABKAIEEK4DIQAgAUEQaiQAIAALLwEBfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwgAigCCBC8BCACQRBqJAALWwECfyMAQRBrIgIkACACIAA2AgQgAiABNgIAIAIoAgQhAANAIAIoAgAgACgCCEcEQCAAEL4BIQEgACAAKAIIQXRqIgM2AgggASADEDgQjAEMAQsLIAJBEGokAAsNACAAQQBBmAIQzgsaCw8AIAAEQCAAQZgCEIwGCwuSFQEMfyMAQYAQayIJJAACQCAAAn9BCiACQYABRg0AGiACQYACRwRAQWAhCCACQcABRw0CQQwMAQtBDgsiCjYCAEHwlAMtAABFBEBBASEDA0AgCSADQQJ0aiAENgIAIAlBgAhqIARBAnRqIAM2AgAgA0EYdEEfdUEbcSADQQF0Qf4BcSADc3MhAyAEQQFqIgRBgAJHDQALQaCVA0KbgICA4AY3AwBBmJUDQsCAgICAEDcDAEGQlQNCkICAgIAENwMAQYiVA0KEgICAgAE3AwBBgJUDQoGAgIAgNwMAQbCVA0HjADoAAEGT2ANBADoAAEEBIQMDQCADQbCVA2pBACAJIANBAnRqKAIAa0ECdCAJakH8D2ooAgAiBCAEQQF0IARBB3ZyQf8BcSIEcyAEQQF0Qf4BcSIFIARBB3ZyIgRzIARBAXRB/gFxIgQgBUEHdnIiBXMgBUEBdEH+AXEgBEEHdnJzQeMAcyIEOgAAIARBsNcDaiADOgAAIANBAWoiA0GAAkcNAAtBACEFIAkoAiwhCyAJKAI0IQwgCSgCJCENIAkoAjghDgNAIAVBAnQiA0GwvwNqIAVBsJUDai0AACIEQRB0IARBCHRyIARBGHRBH3VBG3EgBEEBdEH+AXFzIgZyIghBCHQgBCAGcyIGciIHNgIAIANBsLcDaiAGQRh0IAhyNgIAIANBsMcDaiAEIAdBCHRyIgY2AgAgA0GwzwNqIAQgBkEIdHI2AgBBACEEQQAhBkEAIQggBUGw1wNqLQAAIgcEQCAJQYAIaiAJIAdBAnRqKAIAIgggDGpB/wFvQQJ0aigCAEEQdCAJQYAIaiAIIA5qQf8Bb0ECdGooAgAgCUGACGogCCANakH/AW9BAnRqKAIAQQh0cyIGcyEEIAlBgAhqIAggC2pB/wFvQQJ0aigCACEICyADQbCXA2ogCEEYdCAEcyIINgIAIANBsJ8DaiAEQQh0IAhBGHZyIgg2AgAgA0GwpwNqIARBEHZB/wFxIAhBCHRyIgQ2AgAgA0GwrwNqIAZBCHZB/wFxIARBCHRyNgIAIAVBAWoiBUGAAkcNAAtB8JQDQQE6AAALIAAgAEEIaiIDNgIEIAJBBXYiBgRAQQAhBQNAIAAgBUECdCIEaiABIARqLQAAIAEgBEEBcmotAABBCHRyIAEgBEECcmotAABBEHRyIAEgBEEDcmotAABBGHRyNgIIIAVBAWoiBSAGRw0ACwtBACEIIApBdmoiBEEESw0AAkACQAJAIARBAWsOBAMBAwIACyADKAIAIQFBACEFA0AgAyADKAIMIgRBCHZB/wFxQbCVA2otAAAgBUECdEGAlQNqKAIAIAFzcyAEQRB2Qf8BcUGwlQNqLQAAQQh0cyAEQRh2QbCVA2otAABBEHRzIARB/wFxQbCVA2otAABBGHRzIgE2AhAgAyABIAMoAgRzIgY2AhQgAyADKAIIIAZzIgY2AhggAyAEIAZzNgIcIANBEGohAyAFQQFqIgVBCkcNAAsMAgsgACAAKAIcIgNBCHZB/wFxQbCVA2otAABBgJUDKAIAIAAoAghzcyADQRB2Qf8BcUGwlQNqLQAAQQh0cyADQRh2QbCVA2otAABBEHRzIANB/wFxQbCVA2otAABBGHRzIgQ2AiAgACAEIAAoAgxzIgE2AiQgACAAKAIQIAFzIgU2AiggACAAKAIUIAVzIgY2AiwgACAAKAIYIAZzIgc2AjAgACADIAdzIgM2AjQgACADQQh2Qf8BcUGwlQNqLQAAQYSVAygCACAEc3MgA0EQdkH/AXFBsJUDai0AAEEIdHMgA0EYdkGwlQNqLQAAQRB0cyADQf8BcUGwlQNqLQAAQRh0cyIENgI4IAAgASAEcyIBNgI8IABBQGsgASAFcyIFNgIAIAAgBSAGcyIGNgJEIAAgBiAHcyIHNgJIIAAgAyAHcyIDNgJMIAAgA0EIdkH/AXFBsJUDai0AAEGIlQMoAgAgBHNzIANBEHZB/wFxQbCVA2otAABBCHRzIANBGHZBsJUDai0AAEEQdHMgA0H/AXFBsJUDai0AAEEYdHMiBDYCUCAAIAEgBHMiATYCVCAAIAEgBXMiBTYCWCAAIAUgBnMiBjYCXCAAIAYgB3MiBzYCYCAAIAMgB3MiAzYCZCAAIANBCHZB/wFxQbCVA2otAABBjJUDKAIAIARzcyADQRB2Qf8BcUGwlQNqLQAAQQh0cyADQRh2QbCVA2otAABBEHRzIANB/wFxQbCVA2otAABBGHRzIgQ2AmggACABIARzIgE2AmwgACABIAVzIgU2AnAgACAFIAZzIgY2AnQgACAGIAdzIgc2AnggACADIAdzIgM2AnwgACADQQh2Qf8BcUGwlQNqLQAAQZCVAygCACAEc3MgA0EQdkH/AXFBsJUDai0AAEEIdHMgA0EYdkGwlQNqLQAAQRB0cyADQf8BcUGwlQNqLQAAQRh0cyIENgKAASAAIAEgBHMiATYChAEgACABIAVzIgU2AogBIAAgBSAGcyIGNgKMASAAIAYgB3MiBzYCkAEgACADIAdzIgM2ApQBIAAgA0EIdkH/AXFBsJUDai0AAEGUlQMoAgAgBHNzIANBEHZB/wFxQbCVA2otAABBCHRzIANBGHZBsJUDai0AAEEQdHMgA0H/AXFBsJUDai0AAEEYdHMiBDYCmAEgACABIARzIgE2ApwBIAAgASAFcyIFNgKgASAAIAUgBnMiBjYCpAEgACAGIAdzIgc2AqgBIAAgAyAHcyIDNgKsASAAIANBCHZB/wFxQbCVA2otAABBmJUDKAIAIARzcyADQRB2Qf8BcUGwlQNqLQAAQQh0cyADQRh2QbCVA2otAABBEHRzIANB/wFxQbCVA2otAABBGHRzIgQ2ArABIAAgASAEcyIBNgK0ASAAIAEgBXMiBTYCuAEgACAFIAZzIgY2ArwBIAAgBiAHcyIHNgLAASAAIAMgB3MiAzYCxAEgACADQQh2Qf8BcUGwlQNqLQAAQZyVAygCACAEc3MgA0EQdkH/AXFBsJUDai0AAEEIdHMgA0EYdkGwlQNqLQAAQRB0cyADQf8BcUGwlQNqLQAAQRh0cyIENgLIASAAIAEgBHMiBDYCzAEgACAEIAVzIgQ2AtABIAAgBCAGcyIENgLUASAAIAQgB3MiBDYC2AEgACADIARzNgLcAQwBCyADKAIAIQVBACEGA0AgAyADKAIcIgRBCHZB/wFxQbCVA2otAAAgBkECdEGAlQNqKAIAIAVzcyAEQRB2Qf8BcUGwlQNqLQAAQQh0cyAEQRh2QbCVA2otAABBEHRzIARB/wFxQbCVA2otAABBGHRzIgU2AiAgAyAFIAMoAgRzIgE2AiQgAyADKAIIIAFzIgE2AiggAyADKAIMIAFzIgE2AiwgAyADKAIQIAFB/wFxQbCVA2otAABzIAFBCHZB/wFxQbCVA2otAABBCHRzIAFBEHZB/wFxQbCVA2otAABBEHRzIAFBGHZBsJUDai0AAEEYdHMiATYCMCADIAEgAygCFHMiATYCNCADIAMoAhggAXMiATYCOCADIAEgBHM2AjwgA0EgaiEDIAZBAWoiBkEHRw0ACwsgCUGAEGokACAIC90FAQR/IwBBoAJrIgMkACADQQhqQQBBmAIQzgsaIAAgAEEIajYCBCADQQhqIAEgAhC/BCIFRQRAIAAgAygCCCIENgIAIAAgAygCDCIGIARBBHRqIgIoAgA2AgggACACKAIENgIMIAAgAigCCDYCECAAIAIoAgw2AhQgAEEYaiEAIAJBcGohASAEQQJIBH8gAkEQagUDQCAAIAEoAgAiAkEIdkH/AXFBsJUDai0AAEECdEGwnwNqKAIAIAJB/wFxQbCVA2otAABBAnRBsJcDaigCAHMgAkEQdkH/AXFBsJUDai0AAEECdEGwpwNqKAIAcyACQRh2QbCVA2otAABBAnRBsK8DaigCAHM2AgAgACABKAIEIgJBCHZB/wFxQbCVA2otAABBAnRBsJ8DaigCACACQf8BcUGwlQNqLQAAQQJ0QbCXA2ooAgBzIAJBEHZB/wFxQbCVA2otAABBAnRBsKcDaigCAHMgAkEYdkGwlQNqLQAAQQJ0QbCvA2ooAgBzNgIEIAAgASgCCCICQQh2Qf8BcUGwlQNqLQAAQQJ0QbCfA2ooAgAgAkH/AXFBsJUDai0AAEECdEGwlwNqKAIAcyACQRB2Qf8BcUGwlQNqLQAAQQJ0QbCnA2ooAgBzIAJBGHZBsJUDai0AAEECdEGwrwNqKAIAczYCCCAAIAEoAgwiAkEIdkH/AXFBsJUDai0AAEECdEGwnwNqKAIAIAJB/wFxQbCVA2otAABBAnRBsJcDaigCAHMgAkEQdkH/AXFBsJUDai0AAEECdEGwpwNqKAIAcyACQRh2QbCVA2otAABBAnRBsK8DaigCAHM2AgwgAUFwaiEBIABBEGohACAEQQJKIQIgBEF/aiEEIAINAAsgBkEgagshAiAAIAEoAgA2AgAgACACQWRqKAIANgIEIAAgAkFoaigCADYCCCAAIAJBbGooAgA2AgwLIANBCGpBmAIQjAYgA0GgAmokACAFC0UBAX8CQCACQYAERwRAQWAhAyACQYACRw0BCyAAQZgCaiABIAJBBHZqIAJBAXYiAhC/BCIDDQAgACABIAIQvwQhAwsgAwtFAQF/AkAgAkGABEcEQEFgIQMgAkGAAkcNAQsgAEGYAmogASACQQR2aiACQQF2IgIQvwQiAw0AIAAgASACEMAEIQMLIAML7gkBEn8gACgCAEEBdSEJIAAoAgQiBEEQaiEAIAEoAAwgBCgCDHMhBiABKAAIIAQoAghzIQUgASgABCAEKAIEcyEDIAEoAAAgBCgCAHMhAQNAIAVBFnZB/AdxQbDPA2ooAgAgA0EOdkH8B3FBsMcDaigCACABQQZ2QfwHcUGwvwNqKAIAIAZB/wFxQQJ0QbC3A2ooAgAgACgCDHNzc3MhBCADQRZ2QfwHcUGwzwNqKAIAIAFBDnZB/AdxQbDHA2ooAgAgBkEGdkH8B3FBsL8DaigCACAFQf8BcUECdEGwtwNqKAIAIAAoAghzc3NzIQcgAUEWdkH8B3FBsM8DaigCACAGQQ52QfwHcUGwxwNqKAIAIAVBBnZB/AdxQbC/A2ooAgAgA0H/AXFBAnRBsLcDaigCACAAKAIEc3NzcyEIIAZBFnZB/AdxQbDPA2ooAgAgBUEOdkH8B3FBsMcDaigCACADQQZ2QfwHcUGwvwNqKAIAIAFB/wFxQQJ0QbC3A2ooAgAgACgCAHNzc3MiA0H/AXEhBSAAKAIQIQYgCUECTgRAIARBFnZB/AdxQbDPA2ooAgAgB0EOdkH8B3FBsMcDaigCACAIQQZ2QfwHcUGwvwNqKAIAIAVBAnRBsLcDaigCACAGc3NzcyEBIAdBFnZB/AdxQbDPA2ooAgAgCEEOdkH8B3FBsMcDaigCACADQQZ2QfwHcUGwvwNqKAIAIARB/wFxQQJ0QbC3A2ooAgAgACgCHHNzc3MhBiAIQRZ2QfwHcUGwzwNqKAIAIANBDnZB/AdxQbDHA2ooAgAgBEEGdkH8B3FBsL8DaigCACAHQf8BcUECdEGwtwNqKAIAIAAoAhhzc3NzIQUgA0EWdkH8B3FBsM8DaigCACAEQQ52QfwHcUGwxwNqKAIAIAdBBnZB/AdxQbC/A2ooAgAgCEH/AXFBAnRBsLcDaigCACAAKAIUc3NzcyEDIABBIGohACAJQX9qIQkMAQsLIAhBCHZB/wFxQbCVA2otAAAhASAHQRB2Qf8BcUGwlQNqLQAAIQkgB0EIdkH/AXFBsJUDai0AACEKIARBEHZB/wFxQbCVA2otAAAhCyAEQQh2Qf8BcUGwlQNqLQAAIQwgA0EQdkH/AXFBsJUDai0AACENIANBCHZB/wFxQbCVA2otAAAhDiAIQRB2Qf8BcUGwlQNqLQAAIQ8gBEEYdkGwlQNqLQAAIRAgA0EYdkGwlQNqLQAAIREgCEEYdkGwlQNqLQAAIRIgB0EYdkGwlQNqLQAAIRMgBUGwlQNqLQAAIRQgCEH/AXFBsJUDai0AACEIIAdB/wFxQbCVA2otAAAhByAAKAIUIQUgACgCGCEDIAIgACgCHCIAIARB/wFxQbCVA2otAABzOgAMIAIgAyAHczoACCACIAUgCHM6AAQgAiAGIBRzOgAAIAIgACATQRh0c0EYdjoADyACIAMgEkEYdHNBGHY6AAsgAiAFIBFBGHRzQRh2OgAHIAIgEEEYdCAGc0EYdjoAAyACIAAgD0EQdHNBEHY6AA4gAiAAIA5BCHRzQQh2OgANIAIgAyANQRB0c0EQdjoACiACIAMgDEEIdHNBCHY6AAkgAiAFIAtBEHRzQRB2OgAGIAIgBSAKQQh0c0EIdjoABSACIAlBEHQgBnNBEHY6AAIgAiABQQh0IAZzQQh2OgABC+4JARJ/IAAoAgBBAXUhCSAAKAIEIgRBEGohACABKAAMIAQoAgxzIQYgASgACCAEKAIIcyEFIAEoAAQgBCgCBHMhAyABKAAAIAQoAgBzIQEDQCABQRZ2QfwHcUGwrwNqKAIAIANBDnZB/AdxQbCnA2ooAgAgBUEGdkH8B3FBsJ8DaigCACAGQf8BcUECdEGwlwNqKAIAIAAoAgxzc3NzIQQgBkEWdkH8B3FBsK8DaigCACABQQ52QfwHcUGwpwNqKAIAIANBBnZB/AdxQbCfA2ooAgAgBUH/AXFBAnRBsJcDaigCACAAKAIIc3NzcyEHIAVBFnZB/AdxQbCvA2ooAgAgBkEOdkH8B3FBsKcDaigCACABQQZ2QfwHcUGwnwNqKAIAIANB/wFxQQJ0QbCXA2ooAgAgACgCBHNzc3MhCCADQRZ2QfwHcUGwrwNqKAIAIAVBDnZB/AdxQbCnA2ooAgAgBkEGdkH8B3FBsJ8DaigCACABQf8BcUECdEGwlwNqKAIAIAAoAgBzc3NzIgNB/wFxIQUgACgCECEGIAlBAk4EQCAIQRZ2QfwHcUGwrwNqKAIAIAdBDnZB/AdxQbCnA2ooAgAgBEEGdkH8B3FBsJ8DaigCACAFQQJ0QbCXA2ooAgAgBnNzc3MhASADQRZ2QfwHcUGwrwNqKAIAIAhBDnZB/AdxQbCnA2ooAgAgB0EGdkH8B3FBsJ8DaigCACAEQf8BcUECdEGwlwNqKAIAIAAoAhxzc3NzIQYgBEEWdkH8B3FBsK8DaigCACADQQ52QfwHcUGwpwNqKAIAIAhBBnZB/AdxQbCfA2ooAgAgB0H/AXFBAnRBsJcDaigCACAAKAIYc3NzcyEFIAdBFnZB/AdxQbCvA2ooAgAgBEEOdkH8B3FBsKcDaigCACADQQZ2QfwHcUGwnwNqKAIAIAhB/wFxQQJ0QbCXA2ooAgAgACgCFHNzc3MhAyAAQSBqIQAgCUF/aiEJDAELCyAEQQh2Qf8BcUGw1wNqLQAAIQEgB0EQdkH/AXFBsNcDai0AACEJIANBCHZB/wFxQbDXA2otAAAhCiAEQRB2Qf8BcUGw1wNqLQAAIQsgCEEIdkH/AXFBsNcDai0AACEMIANBEHZB/wFxQbDXA2otAAAhDSAHQQh2Qf8BcUGw1wNqLQAAIQ4gCEEQdkH/AXFBsNcDai0AACEPIAhBGHZBsNcDai0AACEQIAdBGHZBsNcDai0AACERIARBGHZBsNcDai0AACESIANBGHZBsNcDai0AACETIAVBsNcDai0AACEUIAhB/wFxQbDXA2otAAAhCCAHQf8BcUGw1wNqLQAAIQcgACgCFCEFIAAoAhghAyACIAAoAhwiACAEQf8BcUGw1wNqLQAAczoADCACIAMgB3M6AAggAiAFIAhzOgAEIAIgBiAUczoAACACIAAgE0EYdHNBGHY6AA8gAiADIBJBGHRzQRh2OgALIAIgBSARQRh0c0EYdjoAByACIBBBGHQgBnNBGHY6AAMgAiAAIA9BEHRzQRB2OgAOIAIgACAOQQh0c0EIdjoADSACIAMgDUEQdHNBEHY6AAogAiADIAxBCHRzQQh2OgAJIAIgBSALQRB0c0EQdjoABiACIAUgCkEIdHNBCHY6AAUgAiAJQRB0IAZzQRB2OgACIAIgAUEIdCAGc0EIdjoAAQshACABQQFGBEAgACACIAMQwwRBAA8LIAAgAiADEMQEQQALgggBAn8jAEEQayIGJABBXiEHAkAgAkEPcQ0AAkAgAQRAQQAhByACRQ0CIAFBAUcNAQNAIAUgAy0AACAELQAAczoAACAFIAMtAAEgBC0AAXM6AAEgBSADLQACIAQtAAJzOgACIAUgAy0AAyAELQADczoAAyAFIAMtAAQgBC0ABHM6AAQgBSADLQAFIAQtAAVzOgAFIAUgAy0ABiAELQAGczoABiAFIAMtAAcgBC0AB3M6AAcgBSADLQAIIAQtAAhzOgAIIAUgAy0ACSAELQAJczoACSAFIAMtAAogBC0ACnM6AAogBSADLQALIAQtAAtzOgALIAUgAy0ADCAELQAMczoADCAFIAMtAA0gBC0ADXM6AA0gBSADLQAOIAQtAA5zOgAOIAUgAy0ADyAELQAPczoADyAAIAUgBRDDBCADIAUpAAg3AAggAyAFKQAANwAAIAVBEGohBSAEQRBqIQQgAkFwaiICDQALDAILQQAhByACRQ0BA0AgBiAEKQAANwMAIAYgBCkACDcDCCAAIAQgBRDEBCAFIAMtAAAgBS0AAHM6AAAgBSADLQABIAUtAAFzOgABIAUgAy0AAiAFLQACczoAAiAFIAMtAAMgBS0AA3M6AAMgBSADLQAEIAUtAARzOgAEIAUgAy0ABSAFLQAFczoABSAFIAMtAAYgBS0ABnM6AAYgBSADLQAHIAUtAAdzOgAHIAUgAy0ACCAFLQAIczoACCAFIAMtAAkgBS0ACXM6AAkgBSADLQAKIAUtAApzOgAKIAUgAy0ACyAFLQALczoACyAFIAMtAAwgBS0ADHM6AAwgBSADLQANIAUtAA1zOgANIAUgAy0ADiAFLQAOczoADiAFIAMtAA8gBS0AD3M6AA8gAyAGKQMINwAIIAMgBikDADcAACAFQRBqIQUgBEEQaiEEIAJBcGoiAg0ACwwBCwNAIAUgAy0AACAELQAAczoAACAFIAMtAAEgBC0AAXM6AAEgBSADLQACIAQtAAJzOgACIAUgAy0AAyAELQADczoAAyAFIAMtAAQgBC0ABHM6AAQgBSADLQAFIAQtAAVzOgAFIAUgAy0ABiAELQAGczoABiAFIAMtAAcgBC0AB3M6AAcgBSADLQAIIAQtAAhzOgAIIAUgAy0ACSAELQAJczoACSAFIAMtAAogBC0ACnM6AAogBSADLQALIAQtAAtzOgALIAUgAy0ADCAELQAMczoADCAFIAMtAA0gBC0ADXM6AA0gBSADLQAOIAQtAA5zOgAOIAUgAy0ADyAELQAPczoADyAAIAUgBRDEBCADIAUpAAg3AAggAyAFKQAANwAAIAVBEGohBSAEQRBqIQQgAkFwaiICDQALCyAGQRBqJAAgBwvLEAISfxF+IwBBMGsiBiQAQV4hByACQXBqQfD//wdNBEAgAkEPcSEHIABBmAJqIAMgBkEgahDDBCACQQR2IgIEQCABQQFHIRcDQAJ/QQAgByACQX9qIgIgAXIbRQRAIAYtAC4hCCAGLQAtIQkgBi0ALCEKIAYtACshCyAGLQAqIQwgBi0AKSENIAYtACghDiAGLQAnIQ8gBi0AJiEQIAYtACUhESAGLQAkIRIgBi0AIyETIAYtACIhFCAGLQAhIRUgBi0AICEWIAYtAC8MAQsgBiAGKQMoNwMYIAYgBikDIDcDECAGIAYxACZCMIYgBjEAJyIZQjiGhCIYQjeIIhs8ACcgG6chDyAGMQAgIRsgBjEAISEaIAYxACIhJSAGMQAoISEgBjEAKSEcIAYxACohHSAGMQAjIR4gBjEAKyEiIAYxACQhHyAGMQAsISMgBjEAJSEgIAYgBjEALkIwhiAGMQAvIiZCOIaEIiQgBjEALUIohoQiJ0IviCIoPAAuICinIQggBiAkQjeIIiQ8AC8gBiAYICBCKIaEIhhCL4giIDwAJiAgpyEQIAYgJyAjQiCGhCIjQieIIiA8AC0gIKchCSAGIBggH0IghoQiGEIniCIfPAAlIB+nIREgBiAjICJCGIaEIiJCH4giHzwALCAfpyEKIAYgGCAeQhiGhCIYQh+IIh48ACQgHqchEiAGICIgHUIQhoQiHUIXiCIePAArIB6nIQsgBiAdIBxCCIaEIhxCD4giHTwAKiAdpyEMIAYgHCAhhCIhQgeIIhw8ACkgHKchDSAGICFCAYYgGUIHiIQiGTwAKCAZpyEOIAZBhwFBCCAmQgeIp0EDdGt2rSAbIBggJUIQhoQgGkIIhoSEQgGGhSIZPAAgIBmnIRYgBiAZQgiIIhg8ACEgGKchFSAGIBlCEIgiGDwAIiAYpyEUIAYgGUIYiCIZPAAjIBmnIRMgJKcLIQMgBiAWIAQtAABzOgAAIAYgFSAELQABczoAASAGIBQgBC0AAnM6AAIgBiATIAQtAANzOgADIAYgEiAELQAEczoABCAGIBEgBC0ABXM6AAUgBiAQIAQtAAZzOgAGIAYgDyAELQAHczoAByAGIA4gBC0ACHM6AAggBiANIAQtAAlzOgAJIAYgDCAELQAKczoACiAGIAsgBC0AC3M6AAsgBiAKIAQtAAxzOgAMIAYgCSAELQANczoADSAGIAggBC0ADnM6AA4gBiADIAQtAA9zOgAPAkAgF0UEQCAAIAYgBhDDBAwBCyAAIAYgBhDEBAsgBSAGLQAgIgMgBi0AAHM6AAAgBSAGLQAhIgggBi0AAXM6AAEgBSAGLQAiIgkgBi0AAnM6AAIgBSAGLQAjIgogBi0AA3M6AAMgBSAGLQAkIgsgBi0ABHM6AAQgBSAGLQAlIgwgBi0ABXM6AAUgBSAGLQAmIg0gBi0ABnM6AAYgBSAGLQAnIg4gBi0AB3M6AAcgBSAGLQAoIg8gBi0ACHM6AAggBSAGLQApIhAgBi0ACXM6AAkgBSAGLQAqIhEgBi0ACnM6AAogBSAGLQArIhIgBi0AC3M6AAsgBSAGLQAsIhMgBi0ADHM6AAwgBSAGLQAtIhQgBi0ADXM6AA0gBSAGLQAuIhUgBi0ADnM6AA4gBSAGLQAvIhYgBi0AD3M6AA8gBiANrUL/AYNCMIYgDq1C/wGDIhlCOIaEIhggDK1C/wGDQiiGhCIbQi+IPAAmIAYgGEI3iDwAJyAGIBsgC61C/wGDQiCGhCIYQieIPAAlIAYgGCAKrUL/AYNCGIaEIhhCH4g8ACQgBiAYIAmtQv8Bg0IQhoQiGEIXiDwAIyAGIBggCK1C/wGDQgiGhCIYQg+IPAAiIAYgGCADrUL/AYOEIhhCB4g8ACEgBiAVrUL/AYNCMIYgFq1C/wGDIhtCOIaEIhpCN4g8AC8gBiAaIBStQv8Bg0IohoQiGkIviDwALiAGIBogE61C/wGDQiCGhCIaQieIPAAtIAYgGiASrUL/AYNCGIaEIhpCH4g8ACwgBkGHAUEIIBtCB4inQQN0a3atIBhCAYaFPAAgIAYgGiARrUL/AYNCEIaEIhhCF4g8ACsgBiAYIBCtQv8Bg0IIhoQiGEIPiDwAKiAGIBggD61C/wGDhCIYQgeIPAApIAYgGEIBhiAZQgeIhDwAKCAFQRBqIQUgBEEQaiEEIAINAAsLIAcEQCAFQXBqIQggBkEgaiAGQRBqIAEbIQNBACECA0AgAiAFaiACIAhqLQAAOgAAIAIgBmogAiADai0AACACIARqLQAAczoAACACQQFqIgIgB0cNAAsDQCAGIAdqIAMgB2otAAAgByAIai0AAHM6AAAgB0EBaiIHQRBHDQALAkAgAUEBRgRAIAAgBiAGEMMEDAELIAAgBiAGEMQECyAIIAMtAAAgBi0AAHM6AAAgBUFxaiADLQABIAYtAAFzOgAAIAVBcmogAy0AAiAGLQACczoAACAFQXNqIAMtAAMgBi0AA3M6AAAgBUF0aiADLQAEIAYtAARzOgAAIAVBdWogAy0ABSAGLQAFczoAACAFQXZqIAMtAAYgBi0ABnM6AAAgBUF3aiADLQAHIAYtAAdzOgAAIAVBeGogAy0ACCAGLQAIczoAACAFQXlqIAMtAAkgBi0ACXM6AAAgBUF6aiADLQAKIAYtAApzOgAAIAVBe2ogAy0ACyAGLQALczoAACAFQXxqIAMtAAwgBi0ADHM6AAAgBUF9aiADLQANIAYtAA1zOgAAIAVBfmogAy0ADiAGLQAOczoAACAFQX9qIAMtAA8gBi0AD3M6AAALQQAhBwsgBkEwaiQAIAcL6gEBAn9BXyEHIAMoAgAiCEEPTQR/IAJBf2ohBwJAIAEEQCACRQ0BA0AgByECIAhFBEAgACAEIAQQwwQLIAYgBS0AACAEIAhqIgctAABzIgE6AAAgByABOgAAIAJBf2ohByAGQQFqIQYgBUEBaiEFIAhBAWpBD3EhCCACDQALDAELIAJFDQADQCAHIQIgCEUEQCAAIAQgBBDDBAsgBiAFLQAAIgEgBCAIaiIHLQAAczoAACAHIAE6AAAgAkF/aiEHIAZBAWohBiAFQQFqIQUgCEEBakEPcSEIIAINAAsLIAMgCDYCAEEABSAHCwtuAQJ/QV8hByACKAIAIgZBD00EfyABBEADQCABQX9qIQEgBkUEQCAAIAMgAxDDBAsgBSADIAZqLQAAIAQtAABzOgAAIAVBAWohBSAEQQFqIQQgBkEBakEPcSEGIAENAAsLIAIgBjYCAEEABSAHCwufAQEDf0FfIQcgAigCACIIQQ9NBH8gAQRAA0AgAUF/aiEBAkAgCA0AIAAgAyAEEMMEQRAhBwNAIAdFDQEgAyAHQX9qIgdqIgkgCS0AAEEBaiIJOgAAIAlB/wFxIAlHDQALCyAGIAQgCGotAAAgBS0AAHM6AAAgBkEBaiEGIAVBAWohBSAIQQFqQQ9xIQggAQ0ACwsgAiAINgIAQQAFIAcLC4MBAQV/IABCADcCAANAIAAgA2ogAzoACCADQQFqIgNBgAJHDQALIABBCGohAEEAIQMDQCAAIARqIgUgACABIANBACADIAJJGyIDai0AACAGIAUtAAAiBWpqQf8BcSIGaiIHLQAAOgAAIAcgBToAACADQQFqIQMgBEEBaiIEQYACRw0ACwuRAQEHfyAAKAIEIQYgACgCACEHIAEEQCAAQQhqIQgDQCAIIAdBAWpB/wFxIgdqIgUgCCAGIAUtAAAiBWpB/wFxIgZqIgktAAAiCjoAACAJIAU6AAAgAyAEaiAIIAUgCmpB/wFxai0AACACIARqLQAAczoAACAEQQFqIgQgAUcNAAsLIAAgBjYCBCAAIAc2AgBBAAuRAwEFfyAERQRAIAJBADYCAEEADwsgBEEDbiIFIAQgBUEDbGtBAEdqIgZBgICAgARPBEAgAkF/NgIAQVYPCyAAQQAgBkECdEEBciIGIAFNG0UEQCACIAY2AgBBVg8LAkAgBUEDbCIIRQRAIAAhBQwBCyAAIQUDQCADLQABIQEgAy0AACEGIAUgAy0AAiIJQT9xQZA/ai0AADoAAyAFIAZBAnZBkD9qLQAAOgAAIAUgAUECdEE8cSAJQQZ2ckGQP2otAAA6AAIgBSAGQQR0QTBxIAFBBHZyQZA/ai0AADoAASAFQQRqIQUgA0EDaiEDIAdBA2oiByAISQ0ACwsgByAESQRAIAMtAAAhAUEAIQYgB0EBaiAETyIHRQRAIAMtAAEhBgsgBSABQQJ2QZA/ai0AADoAACAFIAFBBHRBMHEgBkEEdnJBkD9qLQAAOgABQT0hAyAHRQRAIAZBAnRBPHFBkD9qLQAAIQMLIAVBPToAAyAFIAM6AAIgBUEEaiEFCyACIAUgAGs2AgAgBUEAOgAAQQALswQBBn8CQAJAAkAgBARAA0ACQAJAIAYgBE8EQEEAIQUMAQsgBCAGayEHQQAhBQNAIAMgBmotAABBIEcNASAGQQFqIQYgBUEBaiIFIAdHDQALIAQhBgwBCyAEIAZGBEAgBCEGDAELIAMgBmoiCCwAACEHAkACQAJAIAQgBmtBAkkNACAHQQ1HDQAgCC0AAUEKRg0CQQ0hByAFRQ0BQVQPCyAHQQpGDQFBVCEIIAUNBiAHQT1GBEBBPSEHIApBAWoiCkECTQ0BDAcLIAdBAEgNBgtBVCEIIAdB/wFxQdA/ai0AACIFQf8ARg0FIApBACAFQcAASRsNBSAJQQFqIQkLIAZBAWoiBiAESQ0BCwsgCQ0BCyACQQA2AgBBAA8LIAlBA3ZBBmwgCmsgCUEHcUEGbEEHakEDdmohBSAARQ0BIAUgAUsNASAAIQEgBgRAQQMhCEEAIQlBACEEA0AgAy0AACIHQXZqIgVBFk1BAEEBIAV0QYmAgAJxG0UEQCAHQdA/ai0AAEE/cSAJQQZ0ciEKIAggB0E9RmshBQJAAkAgBEEBaiIEQQRGBEBBACEEIAVFBEBBACEIDAMLIAEgCUEKdjoAAEEBIQggBUEBRg0BQQIhCCABIAlBAnY6AAEgBUEDSQ0BIAEgCjoAAiABQQNqIQELIAUhCAwBCyABIAhqIQELIAohCQsgA0EBaiEDIAZBf2oiBg0ACwsgAiABIABrNgIAQQAhCAsgCA8LIAIgBTYCAEFWCxAAIABBADYCCCAAQgE3AgALNgEBfyAABEAgACgCCCIBBEAgASAAKAIEQQJ0EIwGIAAoAggQxAsLIABBADYCCCAAQgE3AgALC2kBA39BcCECAkAgAUGQzgBLDQAgACgCBCIDIAFJBEAgAUEEEMULIgRFDQEgACgCCCICBEAgBCACIANBAnQiAxDNCxogAiADEIwGIAAoAggQxAsLIAAgBDYCCCAAIAE2AgQLQQAhAgsgAgvmAQEEf0FwIQQCQCABQZDOAEsNAAJAIAAoAgQiBSABSwRAIAUhAgNAIAIiA0F/aiICBEAgACgCCCACQQJ0aigCAEUNAQsLIAEgAyADIAFJGyIDQQQQxQsiAkUNAiAAKAIIIgEEQCACIAEgA0ECdBDNCxogASAFQQJ0EIwGIAAoAggQxAsLIAAgAjYCCCAAIAM2AgQMAQsgBSABTw0AIAFBBBDFCyICRQ0BIAAoAggiAwRAIAIgAyAFQQJ0IgQQzQsaIAMgBBCMBiAAKAIIEMQLCyAAIAI2AgggACABNgIEC0EAIQQLIAQLkwIBBH8CQCAAIAFGDQAgASgCCCIERQRAIABFDQEgACgCCCICBEAgAiAAKAIEQQJ0EIwGIAAoAggQxAsLIABBADYCCCAAQgE3AgBBAA8LIAEoAgQhAgNAIAIiA0F/aiICBEAgBCACQQJ0aigCAEUNAQsLIAAgASgCADYCAAJAIAAoAgQiBSADSQRAQXAhAiADQZDOAEsNAiADQQQQxQsiBEUNAiAAKAIIIgIEQCAEIAIgBUECdCIFEM0LGiACIAUQjAYgACgCCBDECwsgACAENgIIIAAgAzYCBAwBCyAAKAIIIANBAnRqQQAgBSADa0ECdBDOCxogACgCCCEECyAEIAEoAgggA0ECdBDNCxpBACECCyACC6MCAQd/QXAhBQJAIAEoAgQiA0GQzgBLDQACfyADIAAoAgQiBiADTw0AGiADQQQQxQsiBEUNASAAKAIIIgUEQCAEIAUgBkECdCIHEM0LGiAFIAcQjAYgACgCCBDECwsgACAENgIIIAAgAzYCBCADIQYgASgCBAshBEEAIQMgAEEAIAJrIAJyQYABcUEHdiIHIAEoAgBsIAdBAXMiAiAAKAIAbGo2AgAgBARAIAEoAgghCCAAKAIIIQkDQCAJIANBAnQiAWoiBSABIAhqKAIAIAdsIAUoAgAgAmxqNgIAIANBAWoiAyAERw0ACwtBACEFIAQgBk8NACAAKAIIIQEDQCABIARBAnRqIgMgAygCACACbDYCACAEQQFqIgQgBkkNAAsLIAULggMBBn8gACABRgRAQQAPC0FwIQcCQCABKAIEIgRBkM4ASw0AAkAgACgCBCIDIARJBEAgBEEEEMULIgVFDQIgACgCCCIGBEAgBSAGIANBAnQiAxDNCxogBiADEIwGIAAoAggQxAsLIAAgBTYCCCAAIAQ2AgQMAQsgAyIEQZDOAEsNAQsgASgCBCIDIARJBEAgBEEEEMULIgVFDQEgASgCCCIGBEAgBSAGIANBAnQiAxDNCxogBiADEIwGIAEoAggQxAsLIAEgBTYCCCABIAQ2AgQgACgCBCEECyAAQQAgAmsgAnJBgAFxQQd2IgIgASgCAGwgACgCACIFIAJBAXMiA2xqNgIAIAEgASgCACADbCACIAVsajYCACAERQRAQQAPCyABKAIIIQYgACgCCCEIQQAhB0EAIQEDQCAIIAFBAnQiAGoiBSAAIAZqIgAoAgAgAmwgBSgCACIFIANsajYCACAAIAAoAgAgA2wgAiAFbGo2AgAgAUEBaiIBIARHDQALCyAHC4wBAQJ/AkAgACgCBCICBEAgAkECdCEDIAAoAgghAgwBC0EBQQQQxQsiAkUEQEFwDwsgACgCCCIDBEAgA0EAEIwGIAAoAggQxAsLIAAgAjYCCCAAQQE2AgRBBCEDCyACQQAgAxDOCxogACgCCCABIAFBH3UiAmogAnM2AgAgAEF/QQEgAUEASBs2AgBBAAszAQF/IAAoAgRBBXQgAUsEfyAAKAIIIAFBA3ZB/P///wFxaigCACABQR9xdkEBcQUgAgsLugEBBX9BfCEDAkAgAkEBSw0AIAFBBXYhBQJAAkAgACgCBCIEQQV0IAFLDQAgAkUNAUFwIQMgAUH/wxNLDQIgBCAFSw0AIAVBAWoiB0EEEMULIgZFDQIgACgCCCIDBEAgBiADIARBAnQiBBDNCxogAyAEEIwGIAAoAggQxAsLIAAgBjYCCCAAIAc2AgQLIAAoAgggBUECdGoiAyADKAIAQX4gAUEfcSIDd3EgAiADdHI2AgALQQAhAwsgAwvIBQEEfyAAKAIEIgNFBEBBAA8LIAAoAgghBAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAA0AgBCACQQJ0aigCACIAQQFxBEAgAQ8LIABBAnFFBEAgAEEEcQ0DIABBCHENBCAAQRBxDQUgAEEgcQ0GIABBwABxDQcgAEGAAXENCCAAQYACcQ0JIABBgARxDQogAEGACHENCyAAQYAQcQ0MIABBgCBxDQ0gAEGAwABxDQ4gAEGAgAFxDQ8gAEGAgAJxDRAgAEGAgARxDREgAEGAgAhxDRIgAEGAgBBxDRMgAEGAgCBxDRQgAEGAgMAAcQ0VIABBgICAAXENFiAAQYCAgAJxDRcgAEGAgIAEcQ0YIABBgICACHENGSAAQYCAgBBxDRogAEGAgIAgcQ0bIABBgICAwABxDRwgAEGAgICAAXENHSAAQYCAgIACcQ0eIABBgICAgARxDR8gAEEASA0gIAFBIGohAUEAIQAgAkEBaiICIANJDQEMAgsLIAFBAXIhAAsgAA8LIAFBAXJBAWoPCyABQQNyDwsgAUEDckEBag8LIAFBA3JBAmoPCyABQQNyQQNqDwsgAUEHcg8LIAFBB3JBAWoPCyABQQdyQQJqDwsgAUEHckEDag8LIAFBB3JBBGoPCyABQQdyQQVqDwsgAUEHckEGag8LIAFBB3JBB2oPCyABQQ9yDwsgAUEPckEBag8LIAFBD3JBAmoPCyABQQ9yQQNqDwsgAUEPckEEag8LIAFBD3JBBWoPCyABQQ9yQQZqDwsgAUEPckEHag8LIAFBD3JBCGoPCyABQQ9yQQlqDwsgAUEPckEKag8LIAFBD3JBC2oPCyABQQ9yQQxqDwsgAUEPckENag8LIAFBD3JBDmoPCyABQQ9yQQ9qDwsgAUEfcguPAQEEfyAAKAIEIgFFBEBBAA8LIAAoAgghAAJ/A0AgAUF/aiIBRQRAIAAoAgAhAkEgDAILIAAgAUECdGooAgAiAkUNAAsgAUEFdEEgagshBEEAIQEgAkEATgR/QYCAgIB4IQMDQCABIgBBHk0EQCAAQQFqIQEgA0EBdiIDIAJxRQ0BCwsgAEF/cwUgAQsgBGoLkgEBBH8gACgCBCIBRQRAQQAPCyAAKAIIIQACfwNAIAFBf2oiAUUEQCAAKAIAIQJBJwwCCyAAIAFBAnRqKAIAIgJFDQALIAFBBXRBJ2oLIQRBACEBIAJBAE4Ef0GAgICAeCEDA0AgASIAQR5NBEAgAEEBaiEBIANBAXYiAyACcUUNAQsLIABBf3MFIAELIARqQQN2C5EEAQd/IwBBIGsiBiQAQXwhAiAGQQA2AgggBkIBNwMAIAEQ0wsiB0H/////A00EQEFwIQICQCAHQQN2IAdBB3FBAEdqIgNBkM4ASw0AAkACQAJAIAAoAgQiBCADSQRAIANBBBDFCyIFRQ0EIAAoAggiAgRAIAUgAiAEQQJ0IgQQzQsaIAIgBBCMBiAAKAIIEMQLCyAAIAU2AgggACADNgIEDAELIAQiA0UNAQsgA0ECdCECIAAoAgghAwwBC0EBQQQQxQsiA0UNASAAKAIIIgIEQCACQQAQjAYgACgCCBDECwsgACADNgIIIABBATYCBEEEIQILQQAhBCADQQAgAhDOCxogACgCCCIIQQA2AgAgAEEBNgIAIAchAgN/AkAgAkEBSw0AIAJBAWsNAiABLQAAQS1HDQAgAEF/NgIAQQAhAgwCCyABIAJBf2oiB2otAAAiA0G/f2ohBQJAIANBUGpB/wFxQQpJDQBBeiECIAVBJUsNAiAFQQZrDhoCAgICAgICAgICAgICAgICAgICAgICAgICAgALQal/QUlBUCAFQf8BcUEGSRsgA0Gff2pB/wFxQQZJGyADaiICQQ9LBH9BegUgCCAEQQF2Qfz///8HcWoiAyADKAIAIAIgBEECdEEccXRyNgIAIARBAWohBCAHIQIMAQsLIQILIAZBADYCCCAGQgE3AwALIAZBIGokACACC9UEAQd/IwBBIGsiAyQAIANBADYCGCADQgE3AxAgA0EANgIIIANCATcDAAJAIAAgAUYEQCADQRBqIAAQ0wQiBQ0BIANBEGohAQsgACACRgRAIAMgABDTBCIFDQEgAyECCyABKAIEIQQDQCAEIgcEQCABKAIIIAdBf2oiBEECdGooAgBFDQELCyACKAIEIQUDQCAFIgQEQCACKAIIIARBf2oiBUECdGooAgBFDQELC0FwIQUgBCAHaiIGQZDOAEsNAAJAAkACQCAAKAIEIgggBkkEQCAGQQQQxQsiCUUNBCAAKAIIIgUEQCAJIAUgCEECdCIIEM0LGiAFIAgQjAYgACgCCBDECwsgACAJNgIIIAAgBjYCBAwBCyAIIgZFDQELIAZBAnQhCCAAKAIIIQYMAQtBAUEEEMULIgZFDQEgACgCCCIFBEAgBUEAEIwGIAAoAggQxAsLIAAgBjYCCCAAQQE2AgRBBCEIC0EAIQUgBkEAIAgQzgsaIAAoAggiBkEANgIAIABBATYCAAJAIARFDQAgByABKAIIIAYgBEECdGpBfGogAigCCCAEQX9qIgRBAnRqKAIAEOsEIARFDQADQCAHIAEoAgggACgCCCAEQQJ0akF8aiACKAIIIARBf2oiBEECdGooAgAQ6wQgBA0ACwsgACACKAIAIAEoAgBsNgIACyADKAIIIgcEQCAHIAMoAgRBAnQQjAYgAygCCBDECwsgA0EANgIIIANCATcDACADKAIYIgcEQCAHIAMoAhRBAnQQjAYgAygCGBDECwsgA0EgaiQAIAUL/wEBBH8CQAJAIAEoAgAiBiACKAIAbEF/TARAIAEoAgQhBANAIAQiAwRAIAEoAgggA0F/aiIEQQJ0aigCAEUNAQsLIAIoAgQhBQNAIAUiBARAIAIoAgggBEF/aiIFQQJ0aigCAEUNAQsLAkAgAyAESw0AIAMgBHJFDQAgBCADTQRAA0AgA0UNAiADQX9qIgNBAnQiBCABKAIIaigCACIFIAIoAgggBGooAgAiBEsNAiAFIARPDQALCyAAIAIgARDqBCIDDQMgAEEAIAZrNgIAQQAPCyAAIAEgAhDqBCIDRQ0BDAILIAAgASACEOkEIgMNAQsgACAGNgIAQQAhAwsgAwv/AQEEfwJAAkAgASgCACIGIAIoAgBsQQFOBEAgASgCBCEEA0AgBCIDBEAgASgCCCADQX9qIgRBAnRqKAIARQ0BCwsgAigCBCEFA0AgBSIEBEAgAigCCCAEQX9qIgVBAnRqKAIARQ0BCwsCQCADIARLDQAgAyAEckUNACAEIANNBEADQCADRQ0CIANBf2oiA0ECdCIEIAEoAghqKAIAIgUgAigCCCAEaigCACIESw0CIAUgBE8NAAsLIAAgAiABEOoEIgMNAyAAQQAgBms2AgBBAA8LIAAgASACEOoEIgNFDQEMAgsgACABIAIQ6QQiAw0BCyAAIAY2AgBBACEDCyADC0ABAX8jAEEgayIDJAAgA0KBgICAEDcDECADIAI2AgwgAyADQQxqNgIYIAAgASADQRBqEN0EIQAgA0EgaiQAIAALVgECfyMAQSBrIgMkACADQQE2AhQgA0F/QQEgAkEASBs2AhAgAyACIAJBH3UiBGogBHM2AgwgAyADQQxqNgIYIAAgASADQRBqEN8EIQIgA0EgaiQAIAILnRMCFH8BfiMAQeAAayIDJAAgAigCBCIGIQQCQANAQXQhByAERQ0BIAIoAggiBSAEQX9qIgRBAnRqKAIARQ0ACyACKAIARQ0AIANBADYCSCADQgE3A0AgA0EANgI4IANCATcDMCADQQA2AiggA0IBNwMgIANBADYCGCADQgE3AxAgA0EANgIMIAEoAgQhBwNAIAciBARAIAEoAgggBEF/aiIHQQJ0aigCAEUNAQsLA0AgBiIHBEAgBSAHQX9qIgZBAnRqKAIARQ0BCwsCQAJAIAQgB0sNACAEIAdyRQ0AIAcgBE0EQANAIARFDQIgBEF/aiIEQQJ0IgcgASgCCGooAgAiBiAFIAdqKAIAIgdLDQIgBiAHTw0ACwtBACEHIABFDQIgACABENMEIgQNAQwCC0EAIQcgA0FAayABENMEIgQNACADQTBqIAIQ0wQiBA0AIANBATYCQCADQQE2AjBBcCEEIAEoAgRBAmoiBUGQzgBLDQACQCAFBEAgBUEEEMULIgZFDQIgAyAGNgIoIAMgBTYCJCAFQQJ0IQUMAQtBBCEFQQFBBBDFCyIGRQ0BIAMgBjYCKCADQQE2AiQLIAZBACAFEM4LGiADKAIoQQA2AgAgA0EBNgIgIAMoAhQiBUEBTQRAQQJBBBDFCyIGRQ0BIAMoAhgiCARAIAYgCCAFQQJ0IgUQzQsaIAggBRCMBiADKAIYEMQLCyADIAY2AhggA0ECNgIUC0EDQQQQxQsiCkUNACADKAIMIgQEQCAEQQAQjAYgBBDECwsgAyAKNgIMAkACf0EAIAMoAjQiDEUNABogAygCOCEFIAwhBANAAkAgBEF/aiIERQRAIAUoAgAhBgwBCyAFIARBAnRqKAIAIgZFDQELC0EAIgQgBkEASA0AGkGAgICAeCEHA0AgBCIFQR5NBEAgBUEBaiEEIAdBAXYiByAGcUUNAQsLIAVBH3EiBEUNASAEQR9zCyEEQQwhByADQUBrIARBH3MiERDlBCIEDQEgA0EwaiAREOUEIgQNASADKAI0IQwLQQwhByADQTBqIAMoAkRBf2oiDSAMQX9qIg9rIgVBBXQiDhDlBCIEDQAgBUECdCECA0AgAygCSCEIIAMoAkQhBQNAIAUiBARAIAggBEF/aiIFQQJ0aigCAEUNAQsLIAMoAjghCyADKAI0IQYDQCAGIgUEQCALIAVBf2oiBkECdGooAgBFDQELCwJAAkAgBCAFckUNAAJAIAQgBUsEQCADKAJAIQkMAQsgBSAESwRAQQAgAygCMGshCQwBCyADKAIwIQUCQCADKAJAIglBAU4EQCAFQQBODQEMAwsgCUUNACAFQQBKDQMLA0AgBEUNAiAIIARBf2oiBEECdCIFaigCACIGIAUgC2ooAgAiBUsNASAGIAVPDQALQQAgCWshCQsgCUEASA0BCyADKAIoIAJqIgQgBCgCAEEBajYCACADQUBrIANBQGsgA0EwahDfBCIERQ0BDAILCyADQTBqIA4Q5gQiBA0AIA0gD0sEQCAKQQhqIRIgDEF+akECdCETA0ACQCADKAJIIgUgDSICQQJ0IhRqKAIAIgYgD0ECdCIVIAMoAjhqKAIAIghPBEBBfyEFIAMoAigiBCACIAxrIhBBAnRqQX82AgAgAkF/aiENDAELIAMoAigiBCACIAxrIhBBAnRqIAUgAkF/aiINQQJ0ajUCACAGrUIghoQgCK2AIhdC/////w8gF0L/////D1QbpyIFNgIACyAEIBBBAnQiC2ogBUEBaiIFNgIAIAJBfmohFiADKAIUIQkDQCAEIAtqIAVBf2o2AgACfyAJBEAgAygCGCEEIAlBAnQMAQtBAUEEEMULIgRFBEBBcCEEDAULIAMoAhgiBQRAIAVBABCMBiADKAIYEMQLCyADIAQ2AhggA0EBNgIUQQQLIQYgBEEAIAYQzgsaIAMoAhgiBEEANgIAIANBATYCECADKAI4IQYgBCAPBH8gBiATaigCAAVBAAs2AgAgBCAGIBVqKAIANgIEIAMoAiggC2ooAgAhBCADQoGAgIAQNwNQIAMgBDYCTCADIANBzABqNgJYIANBEGogA0EQaiADQdAAahDdBCIEDQMgCkIANwIAIBJBADYCAAJAIAJBAk8EQCAKIAMoAkgiBCAWQQJ0aigCADYCAAwBCyAKQQA2AgAgAygCSCEECyAKIAQgDUECdGooAgA2AgQgCiAEIBRqKAIANgIIIAMoAhghCCADKAIUIgkhBQNAIAUiBARAIAggBEF/aiIFQQJ0aigCAEUNAQsLQQMhBgNAIAYiBQRAIAogBUF/aiIGQQJ0aigCAEUNAQsLAkAgBCAFckUNAAJAIAQgBUsEQCADKAIQIQ4MAQsgBSAESw0BIAMoAhAiDkEASA0BA0AgBEUNAiAIIARBf2oiBEECdCIFaigCACIGIAUgCmooAgAiBUsNASAGIAVPDQALQQAgDmshDgsgDkEBSA0AIAMoAigiBCALaigCACEFDAELCyADKAIoIAtqKAIAIQQgA0KBgICAEDcDUCADIAQ2AkwgAyADQcwAajYCWCADQRBqIANBMGogA0HQAGoQ3QQiBA0CIANBEGogEEEFdCIGEOUEIgQNAiADQUBrIANBQGsgA0EQahDfBCIEDQIgAygCSCEFIAMoAkQhBAJAA0AgBEUNASAFIARBf2oiBEECdGooAgBFDQALIAMoAkBBf0oNACADQRBqIANBMGoQ0wQiBA0DIANBEGogBhDlBCIEDQMgA0FAayADQUBrIANBEGoQ3gQiBA0DIAMoAiggC2oiBCAEKAIAQX9qNgIACyANIA9LDQALC0EAIQQgAEUNACADQUBrIBEQ5gQiBQRAIAUhBAwBCyADIAEoAgA2AkAgACADQUBrENMEIgUEQCAFIQQMAQsgACgCBCEFAkADQCAFRQ0BIAAoAgggBUF/aiIFQQJ0aigCAEUNAAsgACgCAA0BCyAAQQE2AgALIAMoAkgiBQRAIAUgAygCREECdBCMBiADKAJIEMQLCyADQQA2AkggA0IBNwNAIAMoAjgiBQRAIAUgAygCNEECdBCMBiADKAI4EMQLCyADQQA2AjggA0IBNwMwIAMoAigiBQRAIAUgAygCJEECdBCMBiADKAIoEMQLCyADQQA2AiggA0IBNwMgIAMoAhgiBQRAIAUgAygCFEECdBCMBiADKAIYEMQLCyADQQA2AhggA0IBNwMQIAMoAgwiBQRAIAUgBxCMBiAFEMQLCyADQQA2AgwgBCEHCyADQeAAaiQAIAcLkgMBBX8gAkECdiACQQNxQQBHaiIDQQJ0IQYCQAJ/AkACQCADIAAoAgQiBUcEQCAAKAIIIgQEQCAEIAVBAnQQjAYgACgCCBDECwsgAEEANgIIIABCATcCAEFwIQUgA0GQzgBLDQQgA0UNAiADQQQQxQsiBEUNBCAAIAQ2AgggACADNgIEDAELIANFDQELIAAoAgghBCAGDAELQQFBBBDFCyIERQRAQXAPCyAAKAIIIgUEQCAFQQAQjAYgACgCCBDECwsgACAENgIIIABBATYCBEEECyEHQQAhBSAEQQAgBxDOCxogACgCCCIEQQA2AgAgAEEBNgIAIAFFDQAgBCAGIAJraiABIAIQzQsaIANFDQAgA0ECdCAAKAIIIgNqQXxqIQIDQCADKAIAIQAgAyACKAIAIgFBGHQgAUEIdEGAgPwHcXIgAUEIdkGA/gNxIAFBGHZycjYCACACIABBCHRBgID8B3EgAEEYdHIgAEEIdkGA/gNxIABBGHZycjYCACADQQRqIgMgAkF8aiICTQ0ACwsgBQu4AQEDfwJAIAAoAgRBAnQiBCACTwRAIAQgAk0EQCACIQQMAgsgACgCCCEFIAIhAwJAA0AgBSADQXxxaigCACADQQN0QRhxdkH/AXENASADQQFqIgMgBEcNAAsgAiEEDAILQXgPCyABQQAgAiAEaxDOCyACaiAEayEBCyAEBEBBACEDA0AgASAEIANBf3NqaiAAKAIIIANBfHFqKAIAIANBA3RBGHF2OgAAIANBAWoiAyAERw0ACwtBAAvpAwEGfwJ/QQAgACgCBCIFRQ0AGiAAKAIIIQMgBSECAn8DQCACQX9qIgJFBEAgAygCACEGQSAMAgsgAyACQQJ0aigCACIGRQ0ACyACQQV0QSBqCyEHQQAhAiAGQQBOBH9BgICAgHghBANAIAIiA0EeTQRAIANBAWohAiAEQQF2IgQgBnFFDQELCyADQX9zBSACCyAHagshAgJAAkAgBUEFdCABIAJqIgJPBEAgBSEDDAELQXAhByACQQV2IAJBH3FBAEdqIgNBkM4ASw0BIAUgA08EQCAFIQMMAQsgA0EEEMULIgJFDQEgACgCCCIEBEAgAiAEIAVBAnQiBhDNCxogBCAGEIwGIAAoAggQxAsLIAAgAjYCCCAAIAM2AgQLIAFBH3EhBQJAIAFBBXYiAkUNAAJAIAMgAk0EQCADIQQMAQsgAkF/cyEBIAAoAgghBgNAIAYgA0F/aiIEQQJ0aiAGIAEgA2pBAnRqKAIANgIAIAQiAyACSw0ACwsgBEUNACAAKAIIQQAgBEECdBDOCxoLQQAhByAFRQ0AIAIgACgCBCIGTw0AQSAgBWshASAAKAIIIQBBACEDA0AgACACQQJ0aiIEIAQoAgAiBCAFdCADcjYCACAEIAF2IQMgAkEBaiICIAZJDQALCyAHC8UCAQV/AkAgACgCBCICIAFBBXYiA08EQCABQR9xIgZFDQEgAiADRw0BCwJAIAIEQCACQQJ0IQEgACgCCCECDAELQQFBBBDFCyICRQRAQXAPCyAAKAIIIgEEQCABQQAQjAYgACgCCBDECwsgACACNgIIIABBATYCBEEEIQELIAJBACABEM4LGiAAKAIIQQA2AgAgAEEBNgIAQQAPCyADBEAgAiADayIFBEAgACgCCCEEQQAhAQNAIAQgAUECdGogBCABIANqQQJ0aigCADYCACABQQFqIgEgBUcNAAsLIAAoAgggBUECdGpBACADQQJ0EM4LGgtBACEFAkAgAkUNACAGRQ0AQSAgBmshAyAAKAIIIQBBACEBA0AgACACQX9qIgJBAnRqIgQgBCgCACIEIAZ2IAFyNgIAIAQgA3QhASACDQALCyAFC/sBAQR/IAAoAgQhAgNAIAIiAwRAIAAoAgggA0F/aiICQQJ0aigCAEUNAQsLIAEoAgQhBANAIAQiAgRAIAEoAgggAkF/aiIEQQJ0aigCAEUNAQsLIAIgA3JFBEBBAA8LIAMgAksEQCAAKAIADwsgAiADSwRAQQAgASgCAGsPC0EBIQIgASgCACEEAkACQCAAKAIAIgVBAU4EQCAEQQBODQEMAgsgBUUNAEF/IQIgBEEASg0BCwNAIANFBEBBAA8LIANBf2oiA0ECdCICIAAoAghqKAIAIgQgASgCCCACaigCACICSwRAIAUPCyAEIAJPDQALQQAgBWshAgsgAgvWAQEFfyABIAFBH3UiAmogAnMhBkEBQX8gAUEASBshBCAAKAIEIQMDQCADIgIEQCAAKAIIIAJBf2oiA0ECdGooAgBFDQELCyACIAFBAEciA3JFBEBBAA8LIAIgA0sEQCAAKAIADwsCQCACIANJDQBBASEEAkAgACgCACIFQQFOBEAgAUEATg0BDAILIAVFDQBBfyEEIAFBf0oNAQsDQCACRQRAQQAPCyAAKAIIIAJBf2oiAkECdGooAgAiAyAGSwRAIAUPCyADIAZPDQALQQAgBWshBAsgBAvEAwEIfwJAIAAgACABIAAgAkYiBBsiA0cEQCAAIAMQ0wQiCQ0BCyAAQQE2AgAgASACIAQbIgMoAgQhAgJAA0AgAiIBRQ0BIAMoAgggAUF/aiICQQJ0aigCAEUNAAtBcCEJIAFBkM4ASw0BAkAgACgCBCIGIAFJBEAgAUEEEMULIgVFDQMgACgCCCICBEAgBSACIAZBAnQiBBDNCxogAiAEEIwGIAAoAggQxAsLIAAgBTYCCCAAIAE2AgQgASEGDAELIAAoAgghBQsgAygCCCEDQQAhBCAFIQIDQCACIAIoAgAiCiAEaiIEIAMoAgBqIgc2AgAgByAESSAEIApJaiEEIAJBBGohAiADQQRqIQMgCEEBaiIIIAFHDQALIARFDQAgBSEHA0AgAUEBaiEDIAEgBk8EQCADQZDOAEsNAyAGIANJBEAgA0EEEMULIgVFDQQgBwRAIAUgByAGQQJ0IgIQzQsaIAcgAhCMBiAAKAIIEMQLCyAAIAU2AgggACADNgIEIAMhBgsgBSEHIAUgAUECdGohAgsgAiACKAIAIgggBGoiCjYCACACQQRqIQJBASEEIAMhASAKIAhJDQALC0EAIQkLIAkL+gMBBn8jAEEQayIGJAAgASgCBCEEA0AgBCIDBEAgASgCCCADQX9qIgRBAnRqKAIARQ0BCwsgAigCBCEFA0AgBSIEBEAgAigCCCAEQX9qIgVBAnRqKAIARQ0BCwsCQAJAIAMgBEsNACADIARyRQ0AQXYhByAEIANLDQEDQCADRQ0BIANBf2oiA0ECdCIEIAEoAghqKAIAIgUgAigCCCAEaigCACIESw0BIAUgBE8NAAsMAQsgBkEANgIIIAZCATcDAAJAIAAgAkYEQCAGIAIQ0wQiBw0BIAYhAgsgACABRwRAIAAgARDTBCIHDQELIABBATYCACACKAIEIQMDQCADIgFFBEBBACEHDAILIAIoAggiBCABQX9qIgNBAnRqKAIARQ0ACyAAKAIIIQJBACEFQQAhAANAIAIiAyADKAIAIgcgBWsiAjYCACADIAIgBCgCACIIazYCACACIAhJIAcgBUlqIQUgA0EEaiECIARBBGohBCAAQQFqIgAgAUcNAAtBACEHIAVFDQAgAyADKAIEIgQgBWs2AgQgBCAFTw0AIANBCGohAwNAIAMgAygCACIEQX9qNgIAIANBBGohAyAERQ0ACwsgBigCCCIDBEAgAyAGKAIEQQJ0EIwGIAYoAggQxAsLIAZBADYCCCAGQgE3AwALIAZBEGokACAHC9YKAgN/An4gAEEQTwRAIAOtIQgDQCACIAQgATUCACAIfiIHp2oiBSACKAIAaiIGNgIAIAIgB0IgiKcgBSAESWogBiAFSWoiBSABNQIEIAh+IgenaiIEIAIoAgRqIgY2AgQgAiAHQiCIpyAEIAVJaiAGIARJaiIFIAE1AgggCH4iB6dqIgQgAigCCGoiBjYCCCACIAdCIIinIAQgBUlqIAYgBElqIgUgATUCDCAIfiIHp2oiBCACKAIMaiIGNgIMIAIgB0IgiKcgBCAFSWogBiAESWoiBSABNQIQIAh+IgenaiIEIAIoAhBqIgY2AhAgAiAHQiCIpyAEIAVJaiAGIARJaiIFIAE1AhQgCH4iB6dqIgQgAigCFGoiBjYCFCACIAdCIIinIAQgBUlqIAYgBElqIgUgATUCGCAIfiIHp2oiBCACKAIYaiIGNgIYIAIgB0IgiKcgBCAFSWogBiAESWoiBSABNQIcIAh+IgenaiIEIAIoAhxqIgY2AhwgAiAHQiCIpyAEIAVJaiAGIARJaiIFIAE1AiAgCH4iB6dqIgQgAigCIGoiBjYCICACIAdCIIinIAQgBUlqIAYgBElqIgUgATUCJCAIfiIHp2oiBCACKAIkaiIGNgIkIAIgB0IgiKcgBCAFSWogBiAESWoiBSABNQIoIAh+IgenaiIEIAIoAihqIgY2AiggAiAHQiCIpyAEIAVJaiAGIARJaiIFIAE1AiwgCH4iB6dqIgQgAigCLGoiBjYCLCACIAdCIIinIAQgBUlqIAYgBElqIgUgATUCMCAIfiIHp2oiBCACKAIwaiIGNgIwIAIgB0IgiKcgBCAFSWogBiAESWoiBSABNQI0IAh+IgenaiIEIAIoAjRqIgY2AjQgAiAHQiCIpyAEIAVJaiAGIARJaiIFIAE1AjggCH4iB6dqIgQgAigCOGoiBjYCOCACIAdCIIinIAQgBUlqIAYgBElqIgUgATUCPCAIfiIHp2oiBCACKAI8aiIGNgI8IAdCIIinIAQgBUlqIAYgBElqIQQgAkFAayECIAFBQGshASAAQXBqIgBBD0sNAAsLIABBCE8EQCADrSEIA0AgAiAEIAE1AgAgCH4iB6dqIgUgAigCAGoiBjYCACACIAdCIIinIAUgBElqIAYgBUlqIgUgATUCBCAIfiIHp2oiBCACKAIEaiIGNgIEIAIgB0IgiKcgBCAFSWogBiAESWoiBSABNQIIIAh+IgenaiIEIAIoAghqIgY2AgggAiAHQiCIpyAEIAVJaiAGIARJaiIFIAE1AgwgCH4iB6dqIgQgAigCDGoiBjYCDCACIAdCIIinIAQgBUlqIAYgBElqIgUgATUCECAIfiIHp2oiBCACKAIQaiIGNgIQIAIgB0IgiKcgBCAFSWogBiAESWoiBSABNQIUIAh+IgenaiIEIAIoAhRqIgY2AhQgAiAHQiCIpyAEIAVJaiAGIARJaiIFIAE1AhggCH4iB6dqIgQgAigCGGoiBjYCGCACIAdCIIinIAQgBUlqIAYgBElqIgUgATUCHCAIfiIHp2oiBCACKAIcaiIGNgIcIAdCIIinIAQgBUlqIAYgBElqIQQgAkEgaiECIAFBIGohASAAQXhqIgBBB0sNAAsLIAAEQCADrSEHA0AgAiAEIAE1AgAgB34iCKdqIgUgAigCAGoiBjYCACAIQiCIpyAFIARJaiAGIAVJaiEEIAJBBGohAiABQQRqIQEgAEF/aiIADQALCyACIAIoAgAiASAEaiIENgIAIAQgAUkEQANAIAIgAigCBCIBQQFqIgQ2AgQgAkEEaiECIAQgAUkNAAsLC54DAQN/IAIoAgQhAwJAA0AgA0UNASACKAIIIANBf2oiA0ECdGooAgBFDQALIAIoAgBBAE4NAEF2DwsCQCAAIAEgAhDiBCIDDQADQCAAKAIEIgEhAwJAA0AgA0UNASAAKAIIIANBf2oiA0ECdGooAgBFDQALIAAoAgBBAE4NACAAIAAgAhDeBCIDRQ0BDAILCwNAIAEiBARAIAAoAgggBEF/aiIBQQJ0aigCAEUNAQsgAigCBCEBA0AgASIDBEAgAigCCCADQX9qIgFBAnRqKAIARQ0BCwsCQCADIARyRQ0AAkAgBCADSwRAIAAoAgAhBQwBCyADIARLBEBBACACKAIAayEFDAELIAIoAgAhAwJAIAAoAgAiBUEBTgRAIANBAEgNAwwBCyAFRQ0AIANBAEwNAEEAIQMMBAsDQCAERQ0CIARBf2oiBEECdCIDIAAoAghqKAIAIgEgAigCCCADaigCACIDSw0BIAEgA08NAAtBACAFayEFC0EAIQMgBUEASA0CCyAAIAAgAhDfBCIDDQEgACgCBCEBDAAACwALIAML/gYBBn8jAEEgayIDJAAgA0EANgIYIANCATcDECADQQA2AgggA0IBNwMAAkAgA0EQaiABENMEIgENACADIAIQ0wQiAQ0AIANBEGoQ2QQhASADQRBqIAMQ2QQiAiABIAIgAUkbIgcQ5gQiAQ0AIAMgBxDmBCIBDQAgA0EBNgIQIANBATYCAANAIAMoAhghAiADKAIUIQECQANAIAFFDQEgAiABQX9qIgFBAnRqKAIARQ0ACyADKAIQRQ0AIANBEGogA0EQahDZBBDmBCIBDQIgAyADENkEEOYEIgENAiADKAIYIQUgAygCFCECA0AgAiIBBEAgBSABQX9qIgJBAnRqKAIARQ0BCwsgAygCCCEIIAMoAgQhBANAIAQiAgRAIAggAkF/aiIEQQJ0aigCAEUNAQsLAkACQCABIAJyRQ0AAkAgASACSwRAIAMoAhAhBgwBCyACIAFLBEBBACADKAIAayEGDAELIAMoAgAhAgJAIAMoAhAiBkEBTgRAIAJBAE4NAQwDCyAGRQ0AIAJBAEoNAwsDQCABRQ0CIAUgAUF/aiIBQQJ0IgJqKAIAIgQgAiAIaigCACICSw0BIAQgAk8NAAtBACAGayEGCyAGQQBIDQELIANBEGogA0EQaiADEOoEIgENAyADKAIUIgFFBEBBAUEEEMULIgFFBEBBcCEBDAULIAMoAhgiAgRAIAJBABCMBiADKAIYEMQLCyADIAE2AhggA0EBNgIUIAFBADYCACADQQE2AhAMAwtBACECIAMoAhghBQNAIAUgAUF/aiIBQQJ0aiIEIAQoAgAiBEEBdiACcjYCACAEQR90IQIgAQ0ACwwCCyADIAMgA0EQahDqBCIBDQIgAygCBCIBRQRAQQFBBBDFCyIBRQRAQXAhAQwECyADKAIIIgIEQCACQQAQjAYgAygCCBDECwsgAyABNgIIIANBATYCBCABQQA2AgAgA0EBNgIADAILQQAhAiADKAIIIQUDQCAFIAFBf2oiAUECdGoiBCAEKAIAIgRBAXYgAnI2AgAgBEEfdCECIAENAAsMAQsLIAMgBxDlBCIBDQAgACADENMEIQELIAMoAhgiAgRAIAIgAygCFEECdBCMBiADKAIYEMQLCyADQQA2AhggA0IBNwMQIAMoAggiAgRAIAIgAygCBEECdBCMBiADKAIIEMQLCyADQSBqJAAgAQuRAwEFfyABQQJ2IAFBA3FBAEdqIgJBAnQhBAJAAn8CQAJAIAIgACgCBCIFRwRAIAAoAggiAwRAIAMgBUECdBCMBiAAKAIIEMQLCyAAQQA2AgggAEIBNwIAQXAhBSACQZDOAEsNBCACRQ0CIAJBBBDFCyIDRQ0EIAAgAzYCCCAAIAI2AgQMAQsgAkUNAQsgACgCCCEDIAQMAQtBAUEEEMULIgNFBEBBcA8LIAAoAggiBQRAIAVBABCMBiAAKAIIEMQLCyAAIAM2AgggAEEBNgIEQQQLIQZBACEFIANBACAGEM4LGiAAKAIIIgNBADYCACAAQQE2AgBBtI0DIAMgBCABa2ogAUE5EQMAGiACRQ0AIAJBAnQgACgCCCICakF8aiEBA0AgAigCACEAIAIgASgCACIEQRh0IARBCHRBgID8B3FyIARBCHZBgP4DcSAEQRh2cnI2AgAgASAAQQh0QYCA/AdxIABBGHRyIABBCHZBgP4DcSAAQRh2cnI2AgAgAkEEaiICIAFBfGoiAU0NAAsLIAULjhkBBn8jAEGQAWsiAyQAIAIoAgQhBAJAA0BBfCEGIAQiBUUNASACKAIIIgcgBUF/aiIEQQJ0aigCAEUNAAtBASEEIAIoAgAhCAJAIAVBAUsNACAIQQBIDQEDQCAERQ0CIAcgBEF/aiIEQQJ0aigCACIFQQFLDQEgBQ0AC0EAIAhrIQgLIAhBAUgNACADQQA2AnggA0IBNwNwIANBADYCaCADQgE3A2AgA0EANgJYIANCATcDUCADQQA2AkggA0IBNwNAIANBADYCiAEgA0IBNwOAASADQQA2AjggA0IBNwMwIANBADYCKCADQgE3AyAgA0EANgIYIANCATcDECADQgE3AwAgA0EANgIIAkAgA0GAAWogASACEO0EIgYNACADKAKIASEHIAMoAoQBIQQDQEFyIQYgBCIFRQ0BIAcgBUF/aiIEQQJ0aigCAEUNAAtBASEEIAMoAoABIQgCQAJAIAVBAUsNACAIQQBIDQIDQCAERQ0CIAcgBEF/aiIEQQJ0aigCACIFQQFLDQEgBQ0AC0EAIAhrIQgLIAgNAQsgA0HwAGogASACEOwEIgYNACADQeAAaiADQfAAahDTBCIGDQAgA0EwaiACENMEIgYNACADQSBqIAIQ0wQiBg0AAkAgAygCVCIEBEAgBEECdCEFIAMoAlghBAwBC0EBQQQQxQsiBEUEQEFwIQYMAgsgAygCWCIFBEAgBUEAEIwGIAMoAlgQxAsLIAMgBDYCWCADQQE2AlRBBCEFCyAEQQAgBRDOCxogAygCWEEBNgIAIANBATYCUAJAIAMoAkQiBARAIARBAnQhBSADKAJIIQQMAQtBAUEEEMULIgRFBEBBcCEGDAILIAMoAkgiBQRAIAVBABCMBiADKAJIEMQLCyADIAQ2AkggA0EBNgJEQQQhBQsgBEEAIAUQzgsaIAMoAkhBADYCACADQQE2AkACQCADKAIUIgQEQCAEQQJ0IQUgAygCGCEEDAELQQFBBBDFCyIERQRAQXAhBgwCCyADKAIYIgUEQCAFQQAQjAYgAygCGBDECwsgAyAENgIYIANBATYCFEEEIQULIARBACAFEM4LGiADKAIYQQA2AgAgA0EBNgIQAkAgAygCBCIEBEAgBEECdCEFIAMoAgghBAwBC0EBQQQQxQsiBEUEQEFwIQYMAgsgAygCCCIFBEAgBUEAEIwGIAMoAggQxAsLIAMgBDYCCCADQQE2AgRBBCEFCyAEQQAgBRDOCxogAygCCEEBNgIAIANBATYCACADKAJoIQcDQCAHLQAAQQFxRQRAA0BBACEFAkAgAygCZCIERQRAQQFBBBDFCyIERQRAQXAhBgwGCyAHQQAQjAYgAygCaBDECyADIAQ2AmggA0EBNgJkIARBADYCACADQQE2AmAMAQsDQCAHIARBf2oiBEECdGoiBiAGKAIAIgZBAXYgBXI2AgAgBkEfdCEFIAQNAAsLAkAgAygCWC0AAEEBcUUEQCADKAJILQAAQQFxRQ0BCyADQdAAaiADQdAAaiADQTBqEN4EIgYNBCADQUBrIANBQGsgA0HwAGoQ3wQiBg0ECwJAIAMoAlQiBEUEQEEBQQQQxQsiBEUEQEFwIQYMBgsgAygCWCIFBEAgBUEAEIwGIAMoAlgQxAsLIAMgBDYCWCADQQE2AlQgBEEANgIAIANBATYCUAwBC0EAIQUgAygCWCEHA0AgByAEQX9qIgRBAnRqIgYgBigCACIGQQF2IAVyNgIAIAZBH3QhBSAEDQALCwJAIAMoAkQiBEUEQEEBQQQQxQsiBEUEQEFwIQYMBgsgAygCSCIFBEAgBUEAEIwGIAMoAkgQxAsLIAMgBDYCSCADQQE2AkQgBEEANgIAIANBATYCQAwBC0EAIQUgAygCSCEHA0AgByAEQX9qIgRBAnRqIgYgBigCACIGQQF2IAVyNgIAIAZBH3QhBSAEDQALCyADKAJoIgctAABBAXFFDQALCyADKAIoIgEtAABBAXFFBEADQEEAIQUCQCADKAIkIgRFBEBBAUEEEMULIgRFBEBBcCEGDAYLIAFBABCMBiADKAIoEMQLIAMgBDYCKCADQQE2AiQgBEEANgIAIANBATYCIAwBCwNAIAEgBEF/aiIEQQJ0aiIGIAYoAgAiBkEBdiAFcjYCACAGQR90IQUgBA0ACwsCQCADKAIYLQAAQQFxRQRAIAMoAggtAABBAXFFDQELIANBEGogA0EQaiADQTBqEN4EIgYNBCADIAMgA0HwAGoQ3wQiBg0ECwJAIAMoAhQiBEUEQEEBQQQQxQsiBEUEQEFwIQYMBgsgAygCGCIFBEAgBUEAEIwGIAMoAhgQxAsLIAMgBDYCGCADQQE2AhQgBEEANgIAIANBATYCEAwBC0EAIQUgAygCGCEHA0AgByAEQX9qIgRBAnRqIgYgBigCACIGQQF2IAVyNgIAIAZBH3QhBSAEDQALCwJAIAMoAgQiBEUEQEEBQQQQxQsiBEUEQEFwIQYMBgsgAygCCCIFBEAgBUEAEIwGIAMoAggQxAsLIAMgBDYCCCADQQE2AgQgBEEANgIAIANBATYCAAwBC0EAIQUgAygCCCEHA0AgByAEQX9qIgRBAnRqIgYgBigCACIGQQF2IAVyNgIAIAZBH3QhBSAEDQALCyADKAIoIgEtAABBAXFFDQALIAMoAmghBwsgAygCZCEFA0AgBSIEBEAgByAEQX9qIgVBAnRqKAIARQ0BCwsgAygCJCEGA0AgBiIFBEAgASAFQX9qIgZBAnRqKAIARQ0BCwsCQAJAAkAgBCAFckUNAAJAIAQgBUsEQCADKAJgIQgMAQsgBSAESwRAQQAgAygCIGshCAwBCyADKAIgIQUCQCADKAJgIghBAU4EQCAFQQBODQEMAwsgCEUNACAFQQBKDQMLA0AgBEUNAiAHIARBf2oiBEECdCIFaigCACIGIAEgBWooAgAiBUsNASAGIAVPDQALQQAgCGshCAsgCEEASA0BCyADQeAAaiADQeAAaiADQSBqEN8EIgYNAyADQdAAaiADQdAAaiADQRBqEN8EIgYNAyADQUBrIANBQGsgAxDfBCIGRQ0BDAMLIANBIGogA0EgaiADQeAAahDfBCIGDQIgA0EQaiADQRBqIANB0ABqEN8EIgYNAiADIAMgA0FAaxDfBCIGDQILIAMoAmghByADKAJkIQQCQANAIARFDQEgByAEQX9qIgRBAnRqKAIARQ0ACyADKAJgDQELCwNAIAMoAhghByADKAIUIgUhBAJAA0AgBEUNASAHIARBf2oiBEECdGooAgBFDQALIAMoAhBBf0oNACADQRBqIANBEGogAhDeBCIGRQ0BDAILCwNAA0AgBSIEBEAgByAEQX9qIgVBAnRqKAIARQ0BCwsgAigCBCEGA0AgBiIFBEAgAigCCCAFQX9qIgZBAnRqKAIARQ0BCwsCQAJAIAQgBXJFDQACQCAEIAVLBEAgAygCECEBDAELIAUgBEsEQEEAIAIoAgBrIQEMAQsgAigCACEFAkAgAygCECIBQQFOBEAgBUEATg0BDAMLIAFFDQAgBUEASg0DCwNAIARFDQIgByAEQX9qIgRBAnQiBWooAgAiBiACKAIIIAVqKAIAIgVLDQEgBiAFTw0AC0EAIAFrIQELIAFBAEgNAQsgA0EQaiADQRBqIAIQ3wQiBg0CIAMoAhghByADKAIUIQUMAQsLIAAgA0EQahDTBCEGCyADKAJ4IgQEQCAEIAMoAnRBAnQQjAYgAygCeBDECwsgA0EANgJ4IANCATcDcCADKAJoIgQEQCAEIAMoAmRBAnQQjAYgAygCaBDECwsgA0EANgJoIANCATcDYCADKAJYIgQEQCAEIAMoAlRBAnQQjAYgAygCWBDECwsgA0EANgJYIANCATcDUCADKAJIIgQEQCAEIAMoAkRBAnQQjAYgAygCSBDECwsgA0EANgJIIANCATcDQCADKAKIASIEBEAgBCADKAKEAUECdBCMBiADKAKIARDECwsgA0EANgKIASADQgE3A4ABIAMoAjgiBARAIAQgAygCNEECdBCMBiADKAI4EMQLCyADQQA2AjggA0IBNwMwIAMoAigiBARAIAQgAygCJEECdBCMBiADKAIoEMQLCyADQQA2AiggA0IBNwMgIAMoAhgiBARAIAQgAygCFEECdBCMBiADKAIYEMQLCyADQQA2AhggA0IBNwMQIAMoAggiBARAIAQgAygCBEECdBCMBiADKAIIEMQLCyADQQA2AgggA0IBNwMACyADQZABaiQAIAYL8wkBCH9BaiEDAkAgAkFgakGgA0sNACACQQdxDQAgAEHIAGpB0OsAQYAIEM0LGiAAQcgIakHQ8wBBgAgQzQsaIABByBBqQdD7AEGACBDNCxogAEHIGGpB0IMBQYAIEM0LGiACQQN2IQJBACEDA0AgACAEQQJ0IgVqIAVB0IsBaigCACABIANqLQAAQRB0IAEgA0EBaiIDQQAgAyACSRsiA2otAABBCHRyIAEgA0EBaiIDQQAgAyACSRsiA2otAAByQQh0IAEgA0EBaiIDQQAgAyACSRsiA2otAAByczYCACADQQFqIgNBACADIAJJGyEDIARBAWoiBEESRw0ACyAAQcgAaiEDQQAhAQNAQQAhBANAIAMgACAEQQJ0aigCACAHcyICQQ52QfwHcWpBgAhqKAIAIAMgAkEWdkH8B3FqKAIAaiADIAJBBnZB/AdxakGAEGooAgBzIAMgAkH/AXFBAnRqQYAYaigCAGogAXMhByACIQEgBEEBaiIEQRBHDQALIAAoAkAhASAAIAhBAnQiBGogACgCRCACcyIFNgIAIAAgBEEEcmogASAHcyIBNgIAIAhBEEkhAiAIQQJqIQggBSEHIAINAAsgACgCRCEIIAAoAkAhCiAAQcgAaiEDA0BBACEEA0AgAyAAIARBAnRqKAIAIAVzIgJBDnZB/AdxakGACGooAgAgAyACQRZ2QfwHcWooAgBqIAMgAkEGdkH8B3Fq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AUGEARDFCyIABEAgABD9BAsgAAsMACAAEP4EIAAQxAsLHgAgAkGAAkYEf0GAvn5BACAAIAEQ/wQbBUGAvn4LCxgBAX9BAUHoARDFCyIABEAgABCDBQsgAAsMACAAEIQFIAAQxAsL7wEBAn8jAEGgA2siACQAIABCADcDGCAAQgA3AxAgAEIANwMIIABCADcDAEHUjQMQvQRB8I8DQfiPAzYCAEHsjwNBOzYCAEHQjQNBkM4ANgIAQcyNA0EwNgIAAkBB1I0DIABBgAIQvwQNAEHMjQMoAgAiAUGAA0sNAEGAAyABa0EASQ0AIABBIGpBAEGAAxDOCxpB8I8DKAIAIABBIGogAUHsjwMoAgARAwANAAJAIABBIGogAEEgakHMjQMoAgAQ1wUNAEG0jQMgAEEgahDYBQ0AQcSNA0EBNgIACyAAQSBqQYADEIwGCyAAQaADaiQAC50NAQR/IwBBoAZrIgMkAEFIIQYCQCACQYADSw0AQQAhBiADQYADakEAQaADEM4LGiADQQhqEL0EIANBMDoAlwMgAyACOgCTAyADIAJBCHY6AJIDIAMgAkEQdjoAkQMgAyACQRh2OgCQAyADQZgDaiABIAIQzQsgAmpBgAE6AAAgA0KYsujYwaOHjx83A8gCIANCkKLImMGihYsXNwPAAiADQoiSqNjAoYOHDzcDuAIgA0KAgoiYwKCBgwc3A7ACAkAgA0EIaiADQbACakGAAhC/BCIEDQAgA0IANwOoAiADQgA3A6ACIANBgANqIQEgAkEZaiIFIQIDQCACBEAgAyADLQCgAiABLQAAczoAoAIgAyADLQChAiABLQABczoAoQIgAyADLQCiAiABLQACczoAogIgAyADLQCjAiABLQADczoAowIgAyADLQCkAiABLQAEczoApAIgAyADLQClAiABLQAFczoApQIgAyADLQCmAiABLQAGczoApgIgAyADLQCnAiABLQAHczoApwIgAyADLQCoAiABLQAIczoAqAIgAyADLQCpAiABLQAJczoAqQIgAyADLQCqAiABLQAKczoAqgIgAyADLQCrAiABLQALczoAqwIgAyADLQCsAiABLQAMczoArAIgAyADLQCtAiABLQANczoArQIgAyADLQCuAiABLQAOczoArgIgAyADLQCvAiABLQAPczoArwJBACACQXBqIgQgBCACSxshAiABQRBqIQEgA0EIakEBIANBoAJqIANBoAJqEMUEIgRFDQEMAgsLIAMgAykDqAI3A9gCIAMgAykDoAI3A9ACIANCADcDoAIgA0IANwOoAiADIAMtAIMDQQFqOgCDAyADQYADaiEBIAUhAgNAIAIEQCADIAMtAKACIAEtAABzOgCgAiADIAMtAKECIAEtAAFzOgChAiADIAMtAKICIAEtAAJzOgCiAiADIAMtAKMCIAEtAANzOgCjAiADIAMtAKQCIAEtAARzOgCkAiADIAMtAKUCIAEtAAVzOgClAiADIAMtAKYCIAEtAAZzOgCmAiADIAMtAKcCIAEtAAdzOgCnAiADIAMtAKgCIAEtAAhzOgCoAiADIAMtAKkCIAEtAAlzOgCpAiADIAMtAKoCIAEtAApzOgCqAiADIAMtAKsCIAEtAAtzOgCrAiADIAMtAKwCIAEtAAxzOgCsAiADIAMtAK0CIAEtAA1zOgCtAiADIAMtAK4CIAEtAA5zOgCuAiADIAMtAK8CIAEtAA9zOgCvAkEAIAJBcGoiBCAEIAJLGyECIAFBEGohASADQQhqQQEgA0GgAmogA0GgAmoQxQQiBEUNAQwCCwsgAyADKQOoAjcD6AIgAyADKQOgAjcD4AIgA0IANwOgAiADQgA3A6gCIAMgAy0AgwNBAWo6AIMDIANBgANqIQEDQCAFBEAgAyADLQCgAiABLQAAczoAoAIgAyADLQChAiABLQABczoAoQIgAyADLQCiAiABLQACczoAogIgAyADLQCjAiABLQADczoAowIgAyADLQCkAiABLQAEczoApAIgAyADLQClAiABLQAFczoApQIgAyADLQCmAiABLQAGczoApgIgAyADLQCnAiABLQAHczoApwIgAyADLQCoAiABLQAIczoAqAIgAyADLQCpAiABLQAJczoAqQIgAyADLQCqAiABLQAKczoAqgIgAyADLQCrAiABLQALczoAqwIgAyADLQCsAiABLQAMczoArAIgAyADLQCtAiABLQANczoArQIgAyADLQCuAiABLQAOczoArgIgAyADLQCvAiABLQAPczoArwJBACAFQXBqIgIgAiAFSxshBSABQRBqIQEgA0EIakEBIANBoAJqIANBoAJqEMUEIgRFDQEMAgsLIAMgAykDqAI3A/gCIAMgAykDoAI3A/ACIAMgAy0AgwNBAWo6AIMDIANBCGogA0HQAmpBgAIQvwQiBA0AIANBCGpBASADQfACaiIBIAEQxQQiBA0AIAAgASkAADcAACAAIAFBCGoiAikAADcACCADQQhqQQEgASABEMUEIgQNACAAIAEpAAA3ABAgACACKQAANwAYIANBCGpBASABIAEQxQQiBA0AIAAgASkAADcAICAAIAEpAAg3AChBACEECyADQQhqEL4EIANBgANqQaADEIwGIANB0AJqQTAQjAYgA0GwAmpBIBCMBiADQaACakEQEIwGIARFDQAgAEEwEIwGIAQhBgsgA0GgBmokACAGC+0CAQV/IwBBMGsiBCQAIARCADcDKCAEQgA3AyAgBEIANwMYQRAhAiAEQgA3AxAgBEIANwMIIARCADcDACAAQSBqIQYDQCACBEAgACACQX9qIgJqIgMgAy0AAEEBaiIDOgAAIANB/wFxIANHDQELCwJAIAZBASAAIAQQxQQiAg0AQRAhAiAEQRBqIQUDQCACBEAgACACQX9qIgJqIgMgAy0AAEEBaiIDOgAAIANB/wFxIANHDQELCyAGQQEgACAFEMUEIgINACAEQSBqIQVBECECA0AgAgRAIAAgAkF/aiICaiIDIAMtAABBAWoiAzoAACADQf8BcSADRw0BCwsgBkEBIAAgBRDFBCICDQBBACECA0AgAiAEaiIDIAMtAAAgASACai0AAHM6AAAgAkEBaiICQTBHDQALIAYgBEGAAhC/BCICDQAgACAFKQIANwIAIAAgBSkCCDcCCEEAIQILIARBMBCMBiAEQTBqJAAgAguVAwEEfyMAQbADayIDJABBSiEEAkAgAkGACEsNAEFIIQQgA0IANwMoIANCADcDICADQgA3AxggA0IANwMQIANCADcDCCADQgA3AwACQCAAKAIQIAAoAhxMBEAgACgCFEUNAQsgACgCGCIFQYADSw0BQYADIAVrQQBJDQEgA0EwakEAQYADEM4LGkFMIQQgACgCvAIgA0EwaiAFIAAoArgCEQMADQECQCADQTBqIANBMGogACgCGBDXBSIEDQAgACADQTBqENgFIgQNACAAQQE2AhBBACEECyADQTBqQYADEIwGIARFDQAMAQsCQCACBEAgAEEgaiEGA0BBECEEA0AgBARAIAAgBEF/aiIEaiIFIAUtAABBAWoiBToAACAFQf8BcSAFRw0B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IRICQCATIAcgC0lqIAYgB0lqIAggBklqIA0gCElqIAIgDUlqIBAgAklqIBEgEElqIBEgBElrIBYgDElrIBcgDElrQRh0QRh1IgJBf0wEQEF/QQAgEkEAIAJrSRshEyACIBJqIQIMAQsgAiASaiICIBJJIRMLIAMgAiAKaiICIApqIgYgAygCRCIHaiIIIAFqIg0gCWoiCSALaiIQIAxqIhEgBWs2AhQgAygCGCESAkAgEyACIApJaiAGIAJJaiAIIAZJaiANIAhJaiAJIA1JaiAQIAlJaiARIBBJaiARIAVJa0EYdEEYdSICQX9MBEBBf0EAIBJBACACa0kbIRMgAiASaiECDAELIAIgEmoiAiASSSETCyADIAIgDGoiAiAMaiIGIAMoAkgiCWoiCCAEaiINIAFqIgEgCmoiECAHazYCGCADKAIcIRECfyATIAIgDElqIAYgAklqIAggBklqIA0gCElqIAEgDUlqIBAgAUlqIBAgB0lrQRh0QRh1IgJBf0wEQCACIBFqIQFBf0EAIBFBACACa0kbDAELIAIgEWoiASARSQshECADIAMoAkwiAiABaiIBIAVqIgYgBGoiBCAMaiIIIAlrNgIcIAMoAiAhDQJAIBAgASACSWogBiABSWogBCAGSWogCCAESWogCCAJSWsiAUF/TARAQX9BACANQQAgAWtJGyEIIAEgDWohAQwBCyABIA1qIgEgDUkhCAsgAyABIA9qIgEgB2oiBCAFaiIFIAJrNgIgIAMoAiQhBgJAIAggASAPSWogBCABSWogBSAESWogBSACSWsiAUF/TARAQX9BACAGQQAgAWtJGyEIIAEgBmohAQwBCyABIAZqIgEgBkkhCAsgAyABIAtqIgEgCWoiBCAHaiIFIA9rNgIkIAMoAighBwJAIAggASALSWogBCABSWogBSAESWogBSAPSWsiAUF/TARAQX9BACAHQQAgAWtJGyEGIAEgB2ohAQwBCyABIAdqIgEgB0khBgsgAyABIApqIgEgAmoiBCAJaiIJIAtrNgIoIAMoAiwhBQJAIAYgASAKSWogBCABSWogCSAESWogCSALSWsiC0F/TARAQX9BACAFQQAgC2tJGyEJIAUgC2ohCwwBCyAFIAtqIgsgBUkhCQsgAyALIAxqIgsgD2oiDyACaiICIAprNgIsIAMgCSALIAxJaiAPIAtJ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wQECA38CfgJAIAJFDQAgACAAKQMAIgYgAq18Igc3AwAgByAGVARAIAAgACkDCEIBfDcDCAsCQCAGp0H/AHEiA0UNAEGAASADayIEIAJLBEAgAyEFDAELIAMgAEHQAGoiA2ogASAEEM0LGiAAIAMQlQYgAiAEayECIAEgBGohAQsgAkGAAU8EQANAIAAgARCVBiABQYABaiEBIAJBgH9qIgJB/wBLDQALCyACRQ0AIAAgBWpB0ABqIAEgAhDNCxoLQQALwggCA38CfiAAQdAAaiIEIAApAwAiBadB/wBxIgJqIgNBgAE6AAAgA0EBaiEDAkAgAkHvAE0EQCADQQBB7wAgAmsQzgsaDAELIANBACACQf8AcxDOCxogACAEEJUGIARBAEHwABDOCxogACkDACEFCyAAIAVCBYg8AM4BIAAgBUINiDwAzQEgACAFQhWIPADMASAAIAVCHYg8AMsBIAAgBUIliDwAygEgACAFQi2IPADJASAAIAVCNYg8AMgBIAAgBadBA3Q6AM8BIAAgACkDCCIGQgWIPADGASAAIAZCDYg8AMUBIAAgBkIViDwAxAEgACAGQh2IPADDASAAIAZCJYg8AMIBIAAgBkItiDwAwQEgACAGQjWIPADAASAAIAZCA4YgBUI9iIQ8AMcBIAAgBBCVBiABIAAxABc8AAAgASAAMwEWPAABIAEgACkDEEIoiDwAAiABIAA1AhQ8AAMgASAAKQMQQhiIPAAEIAEgACkDEEIQiDwABSABIAApAxBCCIg8AAYgASAAKQMQPAAHIAEgADEAHzwACCABIAAzAR48AAkgASAAQRhqIgIpAwBCKIg8AAogASAANQIcPAALIAEgAikDAEIYiDwADCABIAIpAwBCEIg8AA0gASACKQMAQgiIPAAOIAEgAikDADwADyABIAAxACc8ABAgASAAMwEmPAARIAEgAEEgaiICKQMAQiiIPAASIAEgADUCJDwAEyABIAIpAwBCGIg8ABQgASACKQMAQhCIPAAVIAEgAikDAEIIiDwAFiABIAIpAwA8ABcgASAAMQAvPAAYIAEgADMBLjwAGSABIABBKGoiAikDAEIoiDwAGiABIAA1Aiw8ABsgASACKQMAQhiIPAAcIAEgAikDAEIQiDwAHSABIAIpAwBCCIg8AB4gASACKQMAPAAfIAEgADEANzwAICABIAAzATY8ACEgASAAQTBqIgIpAwBCKIg8ACIgASAANQI0PAAjIAEgAikDAEIYiDwAJCABIAIpAwBCEIg8ACUgASACKQMAQgiIPAAmIAEgAikDADwAJyABIAAxAD88ACggASAAMwE+PAApIAEgAEE4aiICKQMAQiiIPAAqIAEgADUCPDwAKyABIAIpAwBCGIg8ACwgASACKQMAQhCIPAAtIAEgAikDAEIIiDwALiABIAIpAwA8AC8gACgC0AFFBEAgASAAMQBHPAAwIAEgADMBRjwAMSABIABBQGsiAikDAEIoiDwAMiABIAA1AkQ8ADMgASACKQMAQhiIPAA0IAEgAikDAEIQiDwANSABIAIpAwBCCIg8ADYgASACKQMAPAA3IAEgADEATzwAOCABIAAzAU48ADkgASAAQcgAaiICKQMAQiiIPAA6IAEgADUCTDwAOyABIAIpAwBCGIg8ADwgASACKQMAQhCIPAA9IAEgAikDAEIIiDwAPiABIAIpAwA8AD8LQQALlAIBAX8jAEHgAWsiAyQAIANBCGpBAEHYARDOCxogA0EANgLYASADQvnC+JuRo7Pw2wA3A1AgA0Lr+obav7X2wR83A0ggA0FAa0Kf2PnZwpHagpt/NwMAIANC0YWa7/rPlIfRADcDOCADQvHt9Pilp/2npX83AzAgA0Kr8NP0r+68tzw3AyggA0K7zqqm2NDrs7t/NwMgIANCiJLznf/M+YTqADcDGAJAIAFFDQAgAyABrTcDCCABQYABTwRAA0AgA0EIaiAAEJUGIABBgAFqIQAgAUGAf2oiAUH/AEsNAAsgAUUNAQsgA0HYAGogACABEM0LGgsgA0EIaiACEJcGGiADQQhqQdgBEIwGIANB4AFqJABBAAtrAQV/IwBBEGsiACQAQbzZAy0AAEUEQEHA2QNBABADGkG82QNBAToAAAsgAEEIakEAEAMaQcTZAygCACEBIAAoAgwhAkHA2QMoAgAhAyAAKAIIIQQgAEEQaiQAIAIgAWsgBCADa0HAhD1sagtmAQN/IAJFBEBBAA8LAkAgAC0AACIDRQ0AA0ACQCADIAEtAAAiBUcNACACQX9qIgJFDQAgBUUNACABQQFqIQEgAC0AASEDIABBAWohACADDQEMAgsLIAMhBAsgBEH/AXEgAS0AAGsLTQECfyABLQAAIQICQCAALQAAIgNFDQAgAiADRw0AA0AgAS0AASECIAAtAAEiA0UNASABQQFqIQEgAEEBaiEAIAIgA0YNAAsLIAMgAmsLGgAgACABEJ0GIgBBACAALQAAIAFB/wFxRhsL2wEBAn8CQCABQf8BcSIDBEAgAEEDcQRAA0AgAC0AACICRQ0DIAIgAUH/AXFGDQMgAEEBaiIAQQNxDQALCwJAIAAoAgAiAkF/cyACQf/9+3dqcUGAgYKEeHENACADQYGChAhsIQMDQCACIANzIgJBf3MgAkH//ft3anFBgIGChHhxDQEgACgCBCECIABBBGohACACQf/9+3dqIAJBf3NxQYCBgoR4cUUNAAsLA0AgACICLQAAIgMEQCACQQFqIQAgAyABQf8BcUcNAQsLIAIPCyAAENMLIABqDwsgAAu9AQEBfyABQQBHIQICQAJAAkACQCABRQ0AIABBA3FFDQADQCAALQAARQ0CIABBAWohACABQX9qIgFBAEchAiABRQ0BIABBA3ENAAsLIAJFDQELIAAtAABFDQECQCABQQRPBEADQCAAKAIAIgJBf3MgAkH//ft3anFBgIGChHhxDQIgAEEEaiEAIAFBfGoiAUEDSw0ACwsgAUUNAQsDQCAALQAARQ0CIABBAWohACABQX9qIgENAAsLQQAPCyAACxwAIABBgWBPBH9BqOIDQQAgAGs2AgBBfwUgAAsLRgICfwF+IAAgATcDcCAAIAAoAggiAiAAKAIEIgNrrCIENwN4AkAgAVANACAEIAFXDQAgACADIAGnajYCaA8LIAAgAjYCaAvCAQIDfwF+AkACQCAAKQNwIgRQRQRAIAApA3ggBFkNAQsgABCzBiIDQX9KDQELIABBADYCaEF/DwsgACgCCCEBAkACQCAAKQNwIgRQDQAgBCAAKQN4Qn+FfCIEIAEgACgCBCICa6xZDQAgACACIASnajYCaAwBCyAAIAE2AmgLAkAgAUUEQCAAKAIEIQIMAQsgACAAKQN4IAEgACgCBCICa0EBaqx8NwN4CyACQX9qIgAtAAAgA0cEQCAAIAM6AAALIAML8AoCBX8EfiMAQRBrIgckAAJAAkACQAJAAkACQCABQSRNBEADQAJ/IAAoAgQiBCAAKAJoSQRAIAAgBEEBajYCBCAELQAADAELIAAQoQYLIgQQ1AYNAAsCQCAEQVVqIgVBAksNACAFQQFrRQ0AQX9BACAEQS1GGyEGIAAoAgQiBCAAKAJoSQRAIAAgBEEBajYCBCAELQAAIQQMAQsgABChBiEECwJAAkAgAUFvcQ0AIARBMEcNAAJ/IAAoAgQiBCAAKAJoSQRAIAAgBEEBajYCBCAELQAADAELIAAQoQYLIgRBX3FB2ABGBEACfyAAKAIEIgQgACgCaEkEQCAAIARBAWo2AgQgBC0AAAwBCyAAEKEGCyEEQRAhASAEQeGfAmotAABBEEkNBSAAKAJoRQRAQgAhAyACDQoMCQsgACAAKAIEIgRBf2o2AgQgAkUNCCAAIARBfmo2AgRCACEDDAkLIAENAUEIIQEMBAsgAUEKIAEbIgEgBEHhnwJqLQAASw0AIAAoAmgEQCAAIAAoAgRBf2o2AgQLQgAhAyAAQgAQoAZBqOIDQRw2AgAMBwsgAUEKRw0CIARBUGoiAkEJTQRAQQAhAQNAIAFBCmwhAQJ/IAAoAgQiBCAAKAJoSQRAIAAgBEEBajYCBCAELQAADAELIAAQoQYLIQQgASACaiEBIARBUGoiAkEJTUEAIAFBmbPmzAFJGw0ACyABrSEJCyACQQlLDQEgCUIKfiEKIAKtIQsDQAJ/IAAoAgQiBCAAKAJoSQRAIAAgBEEBajYCBCAELQAADAELIAAQoQYLIQQgCiALfCEJIARBUGoiAkEJSw0CIAlCmrPmzJmz5swZWg0CIAlCCn4iCiACrSILQn+FWA0AC0EKIQEMAwtBqOIDQRw2AgBCACEDDAULQQohASACQQlNDQEMAgsgASABQX9qcQRAIAEgBEHhnwJqLQAAIgJLBEBBACEFA0AgAiABIAVsaiIFQcbj8ThNQQAgAQJ/IAAoAgQiBCAAKAJoSQRAIAAgBEEBajYCBCAELQAADAELIAAQoQYLIgRB4Z8Cai0AACICSxsNAAsgBa0hCQsgASACTQ0BIAGtIQoDQCAJIAp+IgsgAq1C/wGDIgxCf4VWDQICfyAAKAIEIgQgACgCaEkEQCAAIARBAWo2AgQgBC0AAAwBCyAAEKEGCyEEIAsgDHwhCSABIARB4Z8Cai0AACICTQ0CIAcgCiAJEOIGIAcpAwhQDQALDAELIAFBF2xBBXZBB3FB4aECaiwAACEIIAEgBEHhnwJqLQAAIgJLBEBBACEFA0AgAiAFIAh0ciIFQf///z9NQQAgAQJ/IAAoAgQiBCAAKAJoSQRAIAAgBEEBajYCBCAELQAADAELIAAQoQYLIgRB4Z8Cai0AACICSxsNAAsgBa0hCQtCfyAIrSIKiCILIAlUDQAgASACTQ0AA0AgAq1C/wGDIAkgCoaEIQkCfyAAKAIEIgQgACgCaEkEQCAAIARBAWo2AgQgBC0AAAwBCyAAEKEGCyEEIAkgC1YNASABIARB4Z8Cai0AACICSw0ACwsgASAEQeGfAmotAABNDQADQCABAn8gACgCBCIEIAAoAmhJBEAgACAEQQFqNgIEIAQtAAAMAQsgABChBgtB4Z8Cai0AAEsNAAtBqOIDQcQANgIAIAZBACADQgGDUBshBiADIQkLIAAoAmgEQCAAIAAoAgRBf2o2AgQLAkAgCSADVA0AAkAgA6dBAXENACAGDQBBqOIDQcQANgIAIANCf3whAwwDCyAJIANYDQBBqOIDQcQANgIADAILIAkgBqwiA4UgA30hAwwBC0IAIQMgAEIAEKAGCyAHQRBqJAAgAwt8AQF/IwBBkAFrIgQkACAEIAA2AiwgBCAANgIEIARBADYCACAEQX82AkwgBEF/IABB/////wdqIABBAEgbNgIIIARCABCgBiAEIAJBASADEKIGIQMgAQRAIAEgACAEKAIEIAQoAnhqIAQoAghrajYCAAsgBEGQAWokACADCzUAIAAgATcDACAAIAJC////////P4MgBEIwiKdBgIACcSACQjCIp0H//wFxcq1CMIaENwMIC8QCAQF/IwBB0ABrIgQkAAJAIANBgIABTgRAIARBIGogASACQgBCgICAgICAgP//ABDhBiAEKQMoIQIgBCkDICEBIANB//8BSARAIANBgYB/aiEDDAILIARBEGogASACQgBCgICAgICAgP//ABDhBiADQf3/AiADQf3/AkgbQYKAfmohAyAEKQMYIQIgBCkDECEBDAELIANBgYB/Sg0AIARBQGsgASACQgBCgICAgICAwAAQ4QYgBCkDSCECIAQpA0AhASADQYOAfkoEQCADQf7/AGohAwwBCyAEQTBqIAEgAkIAQoCAgICAgMAAEOEGIANBhoB9IANBhoB9ShtB/P8BaiEDIAQpAzghAiAEKQMwIQELIAQgASACQgAgA0H//wBqrUIwhhDhBiAAIAQpAwg3AwggACAEKQMANwMAIARB0ABqJAALrggCBn8CfiMAQTBr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BiEKCyAGQf//e3EgBiAJQX9KGyEGIAUpA0AhFAJ/AkAgCQ0AIBRQRQ0AIBAhCkEADAELIAkgFFAgECAKa2oiASAJIAFKGwshCQsgAEEgIAwgByAKayIIIAkgCSAISBsiDmoiByALIAsgB0gbIgEgByAGEL8GIAAgDyAMELwGIABBMCABIAcgBkGAgARzEL8GIABBMCAOIAhBABC/BiAAIAogCBC8BiAAQSAgASAHIAZBgMAAcxC/BgwBCwtBACEMDAELQX8hDAsgBUHQAGokACAMCxcAIAAtAABBIHFFBEAgASACIAAQ0QsLC0QBA38gACgCACwAABDVBgRAA0AgACgCACICLAAAIQMgACACQQFqNgIAIAMgAUEKbGpBUGohASACLAABENUGDQALCyABC8cCAAJAIAFBFEsNACABQXdqIgFBCUsNAAJAAkACQAJAAkACQAJAAkACQAJAIAFBAWsOCQECAwQFBgcICQALIAIgAigCACIBQQRqNgIAIAAgASgCADYCAA8LIAIgAigCACIBQQRqNgIAIAAgATQCADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATIBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATMBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATAAADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATEAADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAA8LIAAgAkG4ARECAAsLbgEBfyMAQYACayIFJAACQCACIANMDQAgBEGAwARxDQAgBSABIAIgA2siAkGAAiACQYACSSIDGxDOCxogA0UEQANAIAAgBUGAAhC8BiACQYB+aiICQf8BSw0ACwsgACAFIAIQvAYLIAVBgAJqJAALLQAgAFBFBEADQCABQX9qIgEgAKdBB3FBMHI6AAAgAEIDiCIAQgBSDQALCyABCzUAIABQRQRAA0AgAUF/aiIBIACnQQ9xQbCmAmotAAAgAnI6AAAgAEIEiCIAQgBSDQALCyABC4MBAgN/AX4CQCAAQoCAgIAQVARAIAAhBQwBCwNAIAFBf2oiASAAIABCCoAiBUIKfn2nQTByOgAA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AgAgAEGTqAEgAhAIDQAgAUEKOgBLCyABQboBNgIoIAFBtQE2AiQgAUG7ATYCICABQbwBNgIMQezhAygCAEUEQCABQX82AkwLIAEQ0AYLIQEgAkEgaiQAIAELbwEDfyMAQRBrIgEkAAJAAkBB/KcCQasgLAAAEJwGRQRAQajiA0EcNgIADAELEM4GIQAgAUG2AzYCAEHsFyAAQYCAAnIgARAHEJ8GIgBBAEgNASAAENEGIgINASAAEAUaC0EAIQILIAFBEGokACACCwYAQajiAwsQACAAQSBGIABBd2pBBUlyCwoAIABBUGpBCkkLFgAgAEUEQEEADwtBqOIDIAA2AgBBfwvICQIEfwR+IwBB8ABrIgUkACAEQv///////////wCDIQoCQAJAIAFCf3wiCUJ/USACQv///////////wCDIgsgCSABVK18Qn98IglC////////v///AFYgCUL///////+///8AURtFBEAgA0J/fCIJQn9SIAogCSADVK18Qn98IglC////////v///AFQgCUL///////+///8AURsNAQsgAVAgC0KAgICAgIDA//8AVCALQoCAgICAgMD//wBRG0UEQCACQoCAgICAgCCEIQQgASEDDAILIANQIApCgICAgICAwP//AFQgCkKAgICAgIDA//8AURtFBEAgBEKAgICAgIAghCEEDAILIAEgC0KAgICAgIDA//8AhYRQBEBCgICAgICA4P//ACACIAEgA4UgAiAEhUKAgICAgICAgIB/hYRQIgYbIQRCACABIAYbIQMMAgsgAyAKQoCAgICAgMD//wCFhFANASABIAuEUARAIAMgCoRCAFINAiABIAODIQMgAiAEgyEEDAILIAMgCoRQRQ0AIAEhAyACIQQMAQsgAyABIAMgAVYgCiALViAKIAtRGyIHGyEKIAQgAiAHGyILQv///////z+DIQkgAiAEIAcbIgJCMIinQf//AXEhCCALQjCIp0H//wFxIgZFBEAgBUHgAGogCiAJIAogCSAJUCIGG3kgBkEGdK18pyIGQXFqENgGIAUpA2ghCSAFKQNgIQpBECAGayEGCyABIAMgBxshAyACQv///////z+DIQEgCAR+IAEFIAVB0ABqIAMgASADIAEgAVAiBxt5IAdBBnStfKciB0FxahDYBkEQIAdrIQggBSkDUCEDIAUpA1gLQgOGIANCPYiEQoCAgICAgIAEhCEEIAlCA4YgCkI9iIQhASACIAuFIQkCfiADQgOGIgMgBiAIayIHRQ0AGiAHQf8ASwRAQgAhBEIBDAELIAVBQGsgAyAEQYABIAdrENgGIAVBMGogAyAEIAcQ4AYgBSkDOCEEIAUpAzAgBSkDQCAFKQNIhEIAUq2ECyEDIAFCgICAgICAgASEIQwgCkIDhiECAkAgCUJ/VwRAIAIgA30iASAMIAR9IAIgA1StfSIDhFAEQEIAIQNCACEEDAMLIANC/////////wNWDQEgBUEgaiABIAMgASADIANQIgcbeSAHQQZ0rXynQXRqIgcQ2AYgBiAHayEGIAUpAyghAyAFKQMgIQEMAQsgAiADfCIBIANUrSAEIAx8fCIDQoCAgICAgIAIg1ANACABQgGDIANCP4YgAUIBiISEIQEgBkEBaiEGIANCAYghAwsgC0KAgICAgICAgIB/gyEEIAZB//8BTgRAIARCgICAgICAwP//AIQhBEIAIQMMAQtBACEHAkAgBkEASgRAIAYhBwwBCyAFQRBqIAEgAyAGQf8AahDYBiAFIAEgA0EBIAZrEOAGIAUpAwAgBSkDECAFKQMYhEIAUq2EIQEgBSkDCCEDCyADQgOIQv///////z+DIASEIAetQjCGhCADQj2GIAFCA4iEIgQgAadBB3EiBkEES618IgMgBFStfCADQgGDQgAgBkEERhsiASADfCIDIAFUrXwhBAsgACADNwMAIAAgBDcDCCAFQfAAaiQAC1ABAX4CQCADQcAAcQRAIAEgA0FAaq2GIQJCACEBDAELIANFDQAgAiADrSIEhiABQcAAIANrrYiEIQIgASAEhiEBCyAAIAE3AwAgACACNwMIC9sBAgF/An5BASEEAkAgAEIAUiABQv///////////wCDIgVCgICAgICAwP//AFYgBUKAgICAgIDA//8AURsNACACQgBSIANC////////////AIMiBkKAgICAgIDA//8AViAGQoCAgICAgMD//wBRGw0AIAAgAoQgBSAGhIRQBEBBAA8LIAEgA4NCAFkEQEF/IQQgACACVCABIANTIAEgA1EbDQEgACAChSABIAOFhEIAUg8LQX8hBCAAIAJWIAEgA1UgASADURsNACAAIAKFIAEgA4WEQgBSIQQLIAQL2AECAX8BfkF/IQICQCAAQgBSIAFC////////////AIMiA0KAgICAgIDA//8AViADQoCAgICAgMD//wBRGw0AIAAgA0KAgICAgICA/z+EhFAEQEEADwsgAUKAgICAgICA/z+DQgBZBEAgAEIAVCABQoCAgICAgID/P1MgAUKAgICAgICA/z9RGw0BIAAgAUKAgICAgICA/z+FhEIAUg8LIABCAFYgAUKAgICAgICA/z9VIAFCgICAgICAgP8/URsNACAAIAFCgICAgICAgP8/hYRCAFIhAgsgAguOEQIFfwx+IwBBwAFrIgUkACAEQv///////z+DIRIgAkL///////8/gyEOIAIgBIVCgICAgICAgICAf4MhESAEQjCIp0H//wFxIQcCQAJAAkAgAkIwiKdB//8BcSIIQX9qQf3/AU0EQCAHQX9qQf7/AUkNAQsgAVAgAkL///////////8AgyILQoCAgICAgMD//wBUIAtCgICAgICAwP//AFEbRQRAIAJCgICAgICAIIQhEQwCCyADUCAEQv///////////wCDIgJCgICAgICAwP//AFQgAkKAgICAgIDA//8AURtFBEAgBEKAgICAgIAghCERIAMhAQwCCyABIAtCgICAgICAwP//AIWEUARAIAMgAkKAgICAgIDA//8AhYRQBEBCACEBQoCAgICAgOD//wAhEQwDCyARQoCAgICAgMD//wCEIRFCACEBDAILIAMgAkKAgICAgIDA//8AhYRQBEBCACEBDAILIAEgC4RQDQIgAiADhFAEQCARQoCAgICAgMD//wCEIRFCACEBDAILIAtC////////P1gEQCAFQbABaiABIA4gASAOIA5QIgYbeSAGQQZ0rXynIgZBcWoQ2AZBECAGayEGIAUpA7gBIQ4gBSkDsAEhAQsgAkL///////8/Vg0AIAVBoAFqIAMgEiADIBIgElAiCRt5IAlBBnStfKciCUFxahDYBiAGIAlqQXBqIQYgBSkDqAEhEiAFKQOgASEDCyAFQZABaiASQoCAgICAgMAAhCIUQg+GIANCMYiEIgJChMn5zr/mvIL1ACACfSIEEOIGIAVBgAFqQgAgBSkDmAF9IAQQ4gYgBUHwAGogBSkDiAFCAYYgBSkDgAFCP4iEIgQgAhDiBiAFQeAAaiAEQgAgBSkDeH0Q4gYgBUHQAGogBSkDaEIBhiAFKQNgQj+IhCIEIAIQ4gYgBUFAayAEQgAgBSkDWH0Q4gYgBUEwaiAFKQNIQgGGIAUpA0BCP4iEIgQgAhDiBiAFQSBqIARCACAFKQM4fRDiBiAFQRBqIAUpAyhCAYYgBSkDIEI/iIQiBCACEOIGIAUgBEIAIAUpAxh9EOIGIAYgCCAHa2ohBwJ+QgAgBSkDCEIBhiAFKQMAQj+IhEJ/fCILQv////8PgyIEIAJCIIgiDH4iECALQiCIIgsgAkL/////D4MiCn58IgJCIIYiDSAEIAp+fCIKIA1UrSALIAx+IAIgEFStQiCGIAJCIIiEfHwgCiAEIANCEYhC/////w+DIgx+IhAgCyADQg+GQoCA/v8PgyINfnwiAkIghiIPIAQgDX58IA9UrSALIAx+IAIgEFStQiCGIAJCIIiEfHx8IgIgClStfCACQgBSrXx9IgpC/////w+DIgwgBH4iECALIAx+Ig0gBCAKQiCIIg9+fCIKQiCGfCIMIBBUrSALIA9+IAogDVStQiCGIApCIIiEfHwgDEIAIAJ9IgJCIIgiCiAEfiIQIAJC/////w+DIg0gC358IgJCIIYiDyAEIA1+fCAPVK0gCiALfiACIBBUrUIghiACQiCIhHx8fCICIAxUrXwgAkJ+fCIQIAJUrXxCf3wiCkL/////D4MiAiAOQgKGIAFCPoiEQv////8PgyIEfiIMIAFCHohC/////w+DIgsgCkIgiCIKfnwiDSAMVK0gDSAQQiCIIgwgDkIeiEL//+//D4NCgIAQhCIOfnwiDyANVK18IAogDn58IAIgDn4iEyAEIAp+fCINIBNUrUIghiANQiCIhHwgDyANQiCGfCINIA9UrXwgDSALIAx+IhMgEEL/////D4MiECAEfnwiDyATVK0gDyACIAFCAoZC/P///w+DIhN+fCIVIA9UrXx8Ig8gDVStfCAPIAogE34iDSAOIBB+fCIKIAQgDH58IgQgAiALfnwiAkIgiCACIARUrSAKIA1UrSAEIApUrXx8QiCGhHwiCiAPVK18IAogFSAMIBN+IgQgCyAQfnwiC0IgiCALIARUrUIghoR8IgQgFVStIAQgAkIghnwgBFStfHwiBCAKVK18IgJC/////////wBYBEAgAUIxhiAEQv////8PgyIBIANC/////w+DIgt+IgpCAFKtfUIAIAp9IhAgBEIgiCIKIAt+Ig0gASADQiCIIgx+fCIOQiCGIg9UrX0gAkL/////D4MgC34gASASQv////8Pg358IAogDH58IA4gDVStQiCGIA5CIIiEfCAEIBRCIIh+IAMgAkIgiH58IAIgDH58IAogEn58QiCGfH0hCyAHQX9qIQcgECAPfQwBCyAEQiGIIQwgAUIwhiACQj+GIARCAYiEIgRC/////w+DIgEgA0L/////D4MiC34iCkIAUq19QgAgCn0iECABIANCIIgiCn4iDSAMIAJCH4aEIg9C/////w+DIg4gC358IgxCIIYiE1StfSAKIA5+IAJCAYgiDkL/////D4MgC358IAEgEkL/////D4N+fCAMIA1UrUIghiAMQiCIhHwgBCAUQiCIfiADIAJCIYh+fCAKIA5+fCAPIBJ+fEIghnx9IQsgDiECIBAgE30LIQEgB0GAgAFOBEAgEUKAgICAgIDA//8AhCERQgAhAQwBCyAHQf//AGohCCAHQYGAf0wEQAJAIAgNACAEIAFCAYYgA1YgC0IBhiABQj+IhCIBIBRWIAEgFFEbrXwiASAEVK0gAkL///////8/g3wiA0KAgICAgIDAAINQDQAgAyARhCERDAILQgAhAQwBCyAEIAFCAYYgA1ogC0IBhiABQj+IhCIBIBRaIAEgFFEbrXwiASAEVK0gAkL///////8/gyAIrUIwhoR8IBGEIRELIAAgATcDACAAIBE3AwggBUHAAWokAA8LIABCADcDACAAIBFCgICAgICA4P//ACACIAOEQgBSGzcDCCAFQcABaiQAC/4BAgJ/BH4jAEEQayICJAAgAb0iBUKAgICAgICAgIB/gyEHAn4gBUL///////////8AgyIEQoCAgICAgIB4fEL/////////7/8AWARAIARCPIYhBiAEQgSIQoCAgICAgICAPHwMAQsgBEKAgICAgICA+P8AWgRAIAVCPIYhBiAFQgSIQoCAgICAgMD//wCEDAELIARQBEBCAAwBCyACIARCACAFp2dBIGogBEIgiKdnIARCgICAgBBUGyIDQTFqENgGIAIpAwAhBiACKQMIQoCAgICAgMAAhUGM+AAgA2utQjCGhAshBCAAIAY3AwAgACAEIAeENwMIIAJBEGokAAvLAQIEfwJ+IwBBEGsiAyQAIAG8IgRBgICAgHhxIQUCfiAEQf////8HcSICQYCAgHxqQf////cHTQRAIAKtQhmGQoCAgICAgIDAP3wMAQsgAkGAgID8B08EQCAErUIZhkKAgICAgIDA//8AhAwBCyACRQRAQgAMAQsgAyACrUIAIAJnIgJB0QBqENgGIAMpAwAhBiADKQMIQoCAgICAgMAAhUGJ/wAgAmutQjCGhAshByAAIAY3AwAgACAHIAWtQiCGhDcDCCADQRBqJAALfwICfwF+IwBBEGsiAyQAIAACfiABRQRAQgAMAQsgAyABIAFBH3UiAmogAnMiAq1CACACZyICQdEAahDYBiADKQMIQoCAgICAgMAAhUGegAEgAmutQjCGfCABQYCAgIB4ca1CIIaEIQQgAykDAAs3AwAgACAENwMIIANBEGokAAtnAgF/AX4jAEEQayICJAAgAAJ+IAFFBEBCAAwBCyACIAGtQgBB8AAgAWdBH3MiAWsQ2AYgAikDCEKAgICAgIDAAIUgAUH//wBqrUIwhnwhAyACKQMACzcDACAAIAM3AwggAkEQaiQAC1ABAX4CQCADQcAAcQRAIAIgA0FAaq2IIQFCACECDAELIANFDQAgAkHAACADa62GIAEgA60iBIiEIQEgAiAEiCECCyAAIAE3AwAgACACNwMIC54LAgV/D34jAEHgAGsiBSQAIAJCIIYgAUIgiIQhDiAEQi+GIANCEYiEIQsgBEL///////8/gyIMQg+GIANCMYiEIRAgAiAEhUKAgICAgICAgIB/gyEKIAJC////////P4MiDUIgiCERIAxCEYghEiAEQjCIp0H//wFxIQYCQAJ/IAJCMIinQf//AXEiCEF/akH9/wFNBEBBACAGQX9qQf7/AUkNARoLIAFQIAJC////////////AIMiD0KAgICAgIDA//8AVCAPQoCAgICAgMD//wBRG0UEQCACQoCAgICAgCCEIQoMAgsgA1AgBEL///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbRQRAIARCgICAgICAIIQhCiADIQEMAgsgASAPQoCAgICAgMD//wCFhFAEQCACIAOEUARAQoCAgICAgOD//wAhCkIAIQEMAwsgCkKAgICAgIDA//8AhCEKQgAhAQwCCyADIAJCgICAgICAwP//AIWEUARAIAEgD4QhAkIAIQEgAlAEQEKAgICAgIDg//8AIQoMAwsgCkKAgICAgIDA//8AhCEKDAILIAEgD4RQBEBCACEBDAILIAIgA4RQBEBCACEBDAILIA9C////////P1gEQCAFQdAAaiABIA0gASANIA1QIgcbeSAHQQZ0rXynIgdBcWoQ2AYgBSkDWCINQiCGIAUpA1AiAUIgiIQhDiANQiCIIRFBECAHayEHCyAHIAJC////////P1YNABogBUFAayADIAwgAyAMIAxQIgkbeSAJQQZ0rXynIglBcWoQ2AYgBSkDSCICQg+GIAUpA0AiA0IxiIQhECACQi+GIANCEYiEIQsgAkIRiCESIAcgCWtBEGoLIQcgC0L/////D4MiAiABQv////8PgyIEfiITIANCD4ZCgID+/w+DIgEgDkL/////D4MiA358Ig5CIIYiDCABIAR+fCILIAxUrSACIAN+IhUgASANQv////8PgyIMfnwiDyAQQv////8PgyINIAR+fCIQIA4gE1StQiCGIA5CIIiEfCITIAIgDH4iFiABIBFCgIAEhCIOfnwiESADIA1+fCIUIBJC/////weDQoCAgIAIhCIBIAR+fCISQiCGfCIXfCEEIAYgCGogB2pBgYB/aiEGAkAgDCANfiIYIAIgDn58IgIgGFStIAIgASADfnwiAyACVK18IAMgDyAVVK0gECAPVK18fCICIANUrXwgASAOfnwgASAMfiIDIA0gDn58IgEgA1StQiCGIAFCIIiEfCACIAFCIIZ8IgEgAlStfCABIBIgFFStIBEgFlStIBQgEVStfHxCIIYgEkIgiIR8IgMgAVStfCADIBMgEFStIBcgE1StfHwiAiADVK18IgFCgICAgICAwACDUEUEQCAGQQFqIQYMAQsgC0I/iCEDIAFCAYYgAkI/iIQhASACQgGGIARCP4iEIQIgC0IBhiELIAMgBEIBhoQhBAsgBkH//wFOBEAgCkKAgICAgIDA//8AhCEKQgAhAQwBCwJ+IAZBAEwEQEEBIAZrIghB/wBNBEAgBUEwaiALIAQgBkH/AGoiBhDYBiAFQSBqIAIgASAGENgGIAVBEGogCyAEIAgQ4AYgBSACIAEgCBDgBiAFKQMwIAUpAziEQgBSrSAFKQMgIAUpAxCEhCELIAUpAyggBSkDGIQhBCAFKQMAIQIgBSkDCAwCC0IAIQEMAgsgAUL///////8/gyAGrUIwhoQLIAqEIQogC1AgBEJ/VSAEQoCAgICAgICAgH9RG0UEQCAKIAJCAXwiASACVK18IQoMAQsgCyAEQoCAgICAgICAgH+FhFBFBEAgAiEBDAELIAogAiACQgGDfCIBIAJUrXwhCgsgACABNwMAIAAgCjcDCCAFQeAAaiQAC2wBA34gACACQiCIIgMgAUIgiCIEfkIAfCACQv////8PgyICIAFC/////w+DIgF+IgVCIIggAiAEfnwiAkIgiHwgASADfiACQv////8Pg3wiAkIgiHw3AwggACAFQv////8PgyACQiCGhDcDAAtBAQF/IwBBEGsiBSQAIAUgASACIAMgBEKAgICAgICAgIB/hRDXBiAAIAUpAwA3AwAgACAFKQMINwMIIAVBEGokAAvZAwICfwJ+IwBBIGsiAiQAAkAgAUL///////////8AgyIEQoCAgICAgMD/Q3wgBEKAgICAgIDAgLx/fFQEQCABQgSGIABCPIiEIQQgAEL//////////w+DIgBCgYCAgICAgIAIWgRAIARCgYCAgICAgIDAAHwhBQwCCyAEQoCAgICAgICAQH0hBSAAQoCAgICAgICACIVCAFINASAFQgGDIAV8IQUMAQsgAFAgBEKAgICAgIDA//8AVCAEQoCAgICAgMD//wBRG0UEQCABQgSGIABCPIiEQv////////8Dg0KAgICAgICA/P8AhCEFDAELQoCAgICAgID4/wAhBSAEQv///////7//wwBWDQBCACEFIARCMIinIgNBkfcASQ0AIAJBEGogACABQv///////z+DQoCAgICAgMAAhCIEIANB/4h/ahDYBiACIAAgBEGB+AAgA2sQ4AYgAikDCEIEhiACKQMAIgRCPIiEIQUgAikDECACKQMYhEIAUq0gBEL//////////w+DhCIEQoGAgICAgICACFoEQCAFQgF8IQUMAQsgBEKAgICAgICAgAiFQgBSDQAgBUIBgyAFfCEFCyACQSBqJAAgBSABQoCAgICAgICAgH+DhL8LtgMCA38BfiMAQSBrIgMkAAJAIAFC////////////AIMiBUKAgICAgIDAv0B8IAVCgICAgICAwMC/f3xUBEAgAUIZiKchAiAAUCABQv///w+DIgVCgICACFQgBUKAgIAIURtFBEAgAkGBgICABGohAgwCCyACQYCAgIAEaiECIAAgBUKAgIAIhYRC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BSABEMQIIAEQxAggARCLCEECdGoQ7wg2AjgMAwsgBUEUaiAHQThqIAIgBCAIEPkIDAILIAVBFGogB0E4aiACIAQgCBCHCQwBCyAEIAQoAgBBBHI2AgALIAcoAjgLIQQgB0FAayQAIAQLZQEBfyMAQRBrIgQkACAEIAE2AghBBiEBAkACQCAAIARBCGoQlQcNAEEEIQEgAyAAEJIHEPAIQSVHDQBBAiEBIAAQlAcgBEEIahCVB0UNAQsgAiACKAIAIAFyNgIACyAEQRBqJAALPgAgASACIAMgBEECEPoIIQEgAygCACECAkAgAUF/akEeSw0AIAJBBHENACAAIAE2AgAPCyADIAJBBHI2AgALOwAgASACIAMgBEECEPoIIQEgAygCACECAkAgAUEXSg0AIAJBBHENACAAIAE2AgAPCyADIAJBBHI2AgALPgAgASACIAMgBEECEPoIIQEgAygCACECAkAgAUF/akELSw0AIAJBBHENACAAIAE2AgAPCyADIAJBBHI2AgALPAAgASACIAMgBEEDEPoIIQEgAygCACECAkAgAUHtAkoNACACQQRxDQAgACABNgIADwsgAyACQQRyNgIACz4AIAEgAiADIARBAhD6CCEBIAMoAgAhAgJAIAFBDEoNACACQQRxDQAgACABQX9qNgIADwsgAyACQQRyNgIACzsAIAEgAiADIARBAhD6CCEBIAMoAgAhAgJAIAFBO0oNACACQQRxDQAgACABNgIADwsgAyACQQRyNgIAC2EBAX8jAEEQayIEJAAgBCABNgIIA0ACQCAAIARBCGoQkQdFDQAgA0GAwAAgABCSBxCTB0UNACAAEJQHGgwBCwsgACAEQQhqEJUHBEAgAiACKAIAQQJyNgIACyAEQRBqJAALgwEAIABBCGogACgCCCgCCBEAACIAEIsIQQAgAEEMahCLCGtGBEAgBCAEKAIAQQRyNgIADwsgAiADIAAgAEEYaiAFIARBABCKCCAAayEAAkAgASgCACIEQQxHDQAgAA0AIAFBADYCAA8LAkAgBEELSg0AIABBDEcNACABIARBDGo2AgALCzsAIAEgAiADIARBAhD6CCEBIAMoAgAhAgJAIAFBPEoNACACQQRxDQAgACABNgIADwsgAyACQQRyNgIACzsAIAEgAiADIARBARD6CCEBIAMoAgAhAgJAIAFBBkoNACACQQRxDQAgACABNgIADwsgAyACQQRyNgIACygAIAEgAiADIARBBBD6CCEBIAMtAABBBHFFBEAgACABQZRxajYCAAsLSgAjAEGAAWsiAiQAIAIgAkH0AGo2AgwgAEEIaiACQRBqIAJBDGogBCAFIAYQiQkgAkEQaiACKAIMIAEQ+wohASACQYABaiQAIAELZAEBfyMAQRBrIgYkACAGQQA6AA8gBiAFOgAOIAYgBDoADSAGQSU6AAwgBQRAIAZBDWogBkEOahCKCQsgAiABIAEgAigCABCLCSAGQQxqIAMgACgCABAPIAFqNgIAIAZBEGokAAs7AQF/IwBBEGsiAiQAIAIgABA4LQAAOgAPIAAgARA4LQAAOgAAIAEgAkEPahA4LQAAOgAAIAJBEGokAAsHACABIABrC0oAIwBBoANrIgIkACACIAJBoANqNgIMIABBCGogAkEQaiACQQxqIAQgBSAGEI0JIAJBEGogAigCDCABEPwKIQEgAkGgA2okACABC34BAX8jAEGQAWsiBiQAIAYgBkGEAWo2AhwgACAGQSBqIAZBHGogAyAEIAUQiQkgBkIANwMQIAYgBkEgajYCDCABIAZBDGogASACKAIAEI4JIAZBEGogACgCABCPCSIAQX9GBEAQrAcACyACIAEgAEECdGo2AgAgBkGQAWokAAsKACABIABrQQJ1Cz4BAX8jAEEQayIFJAAgBSAENgIMIAVBCGogBUEMahCGCCEEIAAgASACIAMQxwchACAEEIcIIAVBEGokACAACwUAQf8ACwcAIAAQchoLDAAgAEEBQS0Q5wEaCwwAIABBgoaAIDYAAAsIAEH/////BwsIACAAEJYJGgsnAQF/IwBBEGsiASQAIAAgAUEIaiABENQHIAAQlwkgAUEQaiQAIAALLQEBfyAAIQFBACEAA0AgAEEDRwRAIAEgAEECdGpBADYCACAAQQFqIQAMAQsLCwwAIABBAUEtEMoIGgvnAwEBfyMAQaACayIAJAAgACACNgKQAiAAIAE2ApgCIABBzAE2AhAgAEGYAWogAEGgAWogAEEQahDfByEBIABBkAFqIAQQgQcgAEGQAWoQggchByAAQQA6AI8BAkAgAEGYAmogAiADIABBkAFqIAQoAgQgBSAAQY8BaiAHIAEgAEGUAWogAEGEAmoQmglFDQAgAEGb0gIoAAA2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ACAAIAAoAgAoAiQRAAALCwAgAEGU4wMQ3QcLfAEBfyMAQSBrIgMkACADIAE2AhAgAyAANgIYIAMgAjYCCANAAkACf0EBIANBGGogA0EQahAoRQ0AGiADQRhqECkhACADQQhqECkhASAALQAAIAEtAABGDQFBAAshAiADQSBqJAAgAg8LIANBGGoQLCADQQhqECwMAAALAAs5AQF/IwBBEGsiAiQAIAIgACgCADYCCCACQQhqIgAgACgCACABajYCACACKAIIIQEgAkEQaiQAIAELGAEBfyAAEDgoAgAhASAAEDhBADYCACABCxQBAX8gACgCACEBIABBADYCACABC/UDAQF/IwBB8ARrIgAkACAAIAI2AuAEIAAgATYC6AQgAEHMATYCECAAQcgBaiAAQdABaiAAQRBqEN8HIQEgAEHAAWogBBCBByAAQcABahCQByEHIABBADoAvwECQCAAQegEaiACIAMgAEHAAWogBCgCBCAFIABBvwFqIAcgASAAQcQBaiAAQeAEahCvCUUNACAAQZvSAigAADYAtwEgAEGU0gIpAAA3A7ABIAcgAEGwAWogAEG6AWogAEGAAWoQpAggAEHLATYCECAAQQhqQQAgAEEQahDfByEHIABBEGohAgJAIAAoAsQBIAEoAgBrQYkDTgRAIAcgACgCxAEgASgCAGtBAnVBAmoQwwsQ4AcgBxCbCUUNASAHEJsJIQILIAAtAL8BBEAgAkEtOgAAIAJBAWohAgsgASgCACEEA0ACQCAEIAAoAsQBTwRAIAJBADoAACAAIAY2AgAgAEEQaiAAEMIHQQFHDQEgBxDiBwwECyACIABBsAFqIABBgAFqIABBqAFqIAQQpQggAEGAAWprQQJ1ai0AADoAACACQQFqIQIgBEEEaiEEDAELCxCsBwALEKwHAAsgAEHoBGogAEHgBGoQlQcEQCAFIAUoAgBBAnI2AgALIAAoAugEIQQgAEHAAWoQ2AcgARDRCCAAQfAEaiQAIAQLjg4BCH8jAEGwBGsiCyQAIAsgCjYCpAQgCyABNgKoBCALQcwBNgJgIAsgC0GIAWogC0GQAWogC0HgAGoQ3wciDygCACIBNgKEASALIAFBkANqNgKAASALQeAAahByIREgC0HQAGoQlgkhDiALQUBrEJYJIQwgC0EwahCWCSENIAtBIGoQlgkhECACIAMg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A0EQahDCCEUNABogA0EYaigCACgCACADQQhqKAIAKAIARg0BQQALIQIgA0EgaiQAIAIPCyADQRhqEMMIIANBCGoQwwgMAAALAAs8AQF/IwBBEGsiAiQAIAIgACgCADYCCCACQQhqIgAgACgCACABQQJ0ajYCACACKAIIIQEgAkEQaiQAIAELeAECfyMAQRBrIgIkACAAEOMBBEAgABDUAiAAEEwgABDPAhDJAQsgARDUAhogABDUAhogARCRASEDIAAQkQEiACADKAIINgIIIAAgAykCADcCACABQQAQ2gIgARDwASEAIAJBADoADyAAIAJBD2oQ3wIgAkEQaiQAC1cBAX8jAEEQayICJAAgABDzCARAIAAgACgCACAAENwKENsKCyAAIAEoAgg2AgggACABKQIANwIAIAFBABC2CSACQQA2AgwgASACQQxqELMHIAJBEGokAAvhBAELfyMAQdADayIAJAAgACAFNwMQIAAgBjcDGCAAIABB4AJqNgLcAiAAQeACaiAAQRBqEK8GIQcgAEHLATYC8AEgAEHoAWpBACAAQfABahDfByEOIABBywE2AvABIABB4AFqQQAgAEHwAWoQ3wchCiAAQfABaiEIAkAgB0HkAE8EQBCDCCEHIAAgBTcDACAAIAY3AwggAEHcAmogB0Gf0gIgABC6CCEHIAAoAtwCIghFDQEgDiAIEOAHIAogBxDDCxDgByAKEDgoAgBBAEdBAXMNASAKEJsJIQgLIABB2AFqIAMQgQcgAEHYAWoQggciESAAKALcAiIJIAcgCWogCBCCCCACAn8gBwRAIAAoAtwCLQAAQS1GIQ8LIA8LIABB2AFqIABB0AFqIABBzwFqIABBzgFqIABBwAFqEHIiECAAQbABahByIgkgAEGgAWoQciILIABBnAFqEMAJIABBywE2AjAgAEEoakEAIABBMGoQ3wchDAJ/IAcgACgCnAEiAkoEQCALEHkgByACa0EBdEEBcmoMAQsgCxB5QQJqCyENIABBMGohAiAJEHkgDWogACgCnAFqIg1B5QBPBEAgDCANEMMLEOAHIAwQmwkiAkUNAQsgAiAAQSRqIABBIGogAygCBCAIIAcgCGogESAPIABB0AFqIAAsAM8BIAAsAM4BIBAgCSALIAAoApwBEMEJIAEgAiAAKAIkIAAoAiAgAyAEELAIIQcgDBDi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QejlAxCXCxoLCQAgACABEI4JCxsBAX9BASEBIAAQ8wgEfyAAENwKQX9qBSABCwsZACAAEPMIBEAgACABELUJDwsgACABELYJCwoAIAAQ2goQxAsLHwEBfyAAQQhqIgEoAgAQgwhHBEAgASgCABDDBwsgAAsOACABIAJBAnRBBBCbAQsOACAAKAIIQf////8HcQtGAQJ/IwBBEGsiACQAQdDwAxDeChogAEH/////AzYCDCAAQf////8HNgIIIABBDGogAEEIahDOASgCACEBIABBEGokACABCwcAIABBIGoLCQAgACABEOQKCwcAIABBEGoLOABB0PADKAIAGkHQ8AMoAgBB0PADEOUKQQJ0ahpB0PADKAIAQdDwAxDlCkECdGoaQdDwAygCABoLKgEBfyAAQdDwAzYCACAAQdTwAygCACICNgIEIAAgAiABQQJ0ajYCCCAACw4AIAEQOBogAEEANgIACycAAkAgAUEcSw0AIAAtAHANACAAQQE6AHAgAA8LIAFBAnRBBBDZAQsTACAAEOAKKAIAIAAoAgBrQQJ1CwkAIABBADYCAAsLACAAIAEgAhDpCgssAQF/IAAoAgQhAgNAIAEgAkcEQCAAEN4KGiACQXxqIQIMAQsLIAAgATYCBAseACAAIAFGBEAgAEEAOgBwDwsgASACQQJ0QQQQmwELCgAgABCDCDYCAAtbAQJ/IwBBEGsiASQAIAEgADYCDBDdCiICIABPBEBB0PADEOUKIgAgAkEBdkkEQCABIABBAXQ2AgggAUEIaiABQQxqELwBKAIAIQILIAFBEGokACACDwsQngsAC3cBA38jAEEQayIEJAAgBEEANgIMIABBDGoiBiAEQQxqEDgQ4wogBkEEaiADEMUIGiABBEAgABDvCiABEN8KIQULIAAgBTYCACAAIAUgAkECdGoiAjYCCCAAIAI2AgQgABDwCiAFIAFBAnRqNgIAIARBEGokACAAC2EBAn8jAEEQayICJAAgAiAAQQhqIAEQ8QoiASgCACEDA0AgASgCBCADRwRAIAAQ7woaIAEoAgAQ5gogASABKAIAQQRqIgM2AgAMAQsLIAEoAgggASgCADYCACACQRBqJAALYgEBf0HQ8AMQ5wlB0PADEN4KQdDwAygCAEHU8AMoAgAgAEEEaiIBEPIKQdDwAyABEK4HQdTwAyAAQQhqEK4HQdDwAxDgCiAAEPAKEK4HIAAgACgCBDYCAEHQ8AMQ3AkQ4QoLCgAgAEEMahDzCgsHACAAQQxqCysBAX8gACABKAIANgIAIAEoAgAhAyAAIAE2AgggACADIAJBAnRqNgIEIAALKAAgAyADKAIAIAIgAWsiAmsiADYCACACQQFOBEAgACABIAIQzQsaCwsKACAAQQRqKAIACyUAA0AgASAAKAIIRwRAIAAQ7woaIAAgACgCCEF8ajYCCAwBCwsLOAECfyAAKAIAIAAoAggiAkEBdWohASAAKAIEIQAgASACQQFxBH8gASgCACAAaigCAAUgAAsRAQALJAAgAEECTwR/IABBBGpBfHEiACAAQX9qIgAgAEECRhsFQQELCwkAIAAgATYCAAsQACAAIAFBgICAgHhyNgIICyAAQf////8DIABJBEBB0P8CENgBAAsgAEECdEEEENkBCzQBAX8jAEEQayIDJAAgAyABIAIQgwgQrgYgACADKQMANwMAIAAgAykDCDcDCCADQRBqJAALRQEBfyMAQRBrIgMkACADIAI2AggDQCAAIAFHBEAgA0EIaiAALAAAEKIHIABBAWohAAwBCwsgAygCCCEAIANBEGokACAAC0UBAX8jAEEQayIDJAAgAyACNgIIA0AgACABRwRAIANBCGogACgCABCkByAAQQRqIQAMAQsLIAMoAgghACADQRBqJAAgAAsNACAAIAJJIAEgAE1xCxkAIAAQ4wEEQCAAIAEQ3gIPCyAAIAEQ2gILJQAjAEEQayIDJAAgA0EIahA4GiAAIAEgAhDVByADQRBqJAAgAAsDAAALOAEBfyAAQQhqIgEoAgBFBEAgACAAKAIAKAIQEQEADwsgARDgAUF/RgRAIAAgACgCACgCEBEBAAsLBABBAAsuAANAIAAoAgBBAUYNAAsgACgCAEUEQCAAQQE2AgAgAUHOAREBACAAQX82AgALCzQBAX8gAEEBIAAbIQECQANAIAEQwwsiAA0BQczyAygCACIABEAgABENAAwBCwsQCgALIAALOgECfyABENMLIgJBDWoQhAsiA0EANgIIIAMgAjYCBCADIAI2AgAgACADQQxqIAEgAkEBahDNCzYCAAspAQF/IAIEQCAAIQMDQCADIAE2AgAgA0EEaiEDIAJBf2oiAg0ACwsgAAtpAQF/AkAgACABa0ECdSACSQRA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IAAgAToAAiACQQdJDQAgA0F8aiABOgAAIAAgAToAAyACQQlJDQAgAEEAIABrQQNxIgRqIgMgAUH/AXFBgYKECGwiATYCACADIAIgBGtBfHEiBGoiAkF8aiABNgIAIARBCUkNACADIAE2AgggAyABNgIEIAJBeGogATYCACACQXRqIAE2AgAgBEEZSQ0AIAMgATYCGCADIAE2AhQgAyABNgIQIAMgATYCDCACQXBqIAE2AgAgAkFsaiABNgIAIAJBaGogATYCACACQWRqIAE2AgAgBCADQQRxQRhyIgRrIgJBIEkNACABrSIFQiCGIAWEIQUgAyAEaiEBA0AgASAFNwMYIAEgBTcDECABIAU3AwggASAFNwMAIAFBIGohASACQWBqIgJBH0sNAAsLIAAL7AIBAn8CQCAAIAFGDQACQCABIAJqIABLBEAgACACaiIEIAFLDQELIAAgASACEM0LGg8LIAAgAXNBA3EhAwJAAkAgACABSQRAIAMEQCAAIQMMAwsgAEEDcUUEQCAAIQMMAgsgACEDA0AgAkUNBCADIAEtAAA6AAAgAUEBaiEBIAJBf2ohAiADQQFqIgNBA3ENAAsMAQsCQCADDQAgBEEDcQRAA0AgAkUNBSAAIAJBf2oiAmoiAyABIAJqLQAAOgAAIANBA3ENAAsLIAJBA00NAANAIAAgAkF8aiICaiABIAJqKAIANgIAIAJBA0sNAAsLIAJFDQIDQCAAIAJBf2oiAmogASACai0AADoAACACDQALDAILIAJBA00NAANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIAJBfGoiAkEDSw0ACwsgAkUNAANAIAMgAS0AADoAACADQQFqIQMgAUEBaiEBIAJBf2oiAg0ACwsLWQEBfyAAIAAtAEoiAUF/aiABcjoASiAAKAIAIgFBCHEEQCAAIAFBIHI2AgBBfw8LIABCADcCBCAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQQQALqgEBA38CQCACKAIQIgMEfyADBSACENALDQEgAigCEAsgAigCFCIEayABSQRAIAIgACABIAIoAiQRAwAaDwsCQCACLABLQQBIDQAgASEFA0AgBSIDRQ0BIAAgA0F/aiIFai0AAEEKRw0ACyACIAAgAyACKAIkEQMAIANJDQEgASADayEBIAAgA2ohACACKAIUIQQLIAQgACABEM0LGiACIAIoAhQgAWo2AhQLCysBAX8jAEEQayIBJAAgASAANgIMQciiAigCAEGQCCAAEMMGGiABQRBqJAALkAEBA38gACEBAkACQCAAQQNxRQ0AIAAtAABFBEBBAA8LA0AgAUEBaiIBQQNxRQ0BIAEtAAANAAsMAQsDQCABIgJBBGohASACKAIAIgNBf3MgA0H//ft3anFBgIGChHhxRQ0ACyADQf8BcUUEQCACIABrDwsDQCACLQABIQMgAkEBaiIBIQIgAw0ACwsgASAAawsfAEHA9gMoAgBFBEBBxPYDIAE2AgBBwPYDIAA2AgALCxAAIABBGHQgAEEIdHJBEHYLBwAgABDXCwskACAAQQh0QYCA/AdxIABBGHRyIABBCHZBgP4DcSAAQRh2cnILBAAjAAsQACMAIABrQXBxIgAkACAACwYAIAAkAAsGACAAQAALCQAgASAAEQEACwkAIAEgABEAAAsRACABIAIgAyAEIAUgABEJAAsRACABIAIgAyAEIAUgABEKAAsTACABIAIgAyAEIAUgBiAAEQsACwsAIAEgAiAAEQIACw0AIAEgAiADIAARAwALDwAgASACIAMgBCAAEQcACwsAIAEgAiAAEQQACw8AIAEgAiADIAQgABEIAAsNACABIAIgAyAAEQUACwcAIAARDQALEwAgASACIAMgBCAFIAYgABEGAAsVACABIAIgAyAEIAUgBiAHIAARDgALBwAgABEMAAsTACABIAIgAyAEIAUgBiAAERwACxcAIAEgAiADIAQgBSAGIAcgCCAAEQ8ACxEAIAEgAiADIAQgBSAAERsACxkAIAEgAiADrSAErUIghoQgBSAGIAARFAALIgEBfiABIAKtIAOtQiCGhCAEIAARFgAiBUIgiKcQEiAFpwsZACABIAIgAyAEIAWtIAatQiCGhCAAERIACyMAIAEgAiADIAQgBa0gBq1CIIaEIAetIAitQiCGhCAAERoACyUAIAEgAiADIAQgBSAGrSAHrUIghoQgCK0gCa1CIIaEIAARGQALC/XoAlEAQYAIC1dzZWNwNTIxcjEAAAAEAwIBJXMKAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUAQeAICwYBAAAAjMMAQfQIC4oEnAQAAFBGaVBobVBtUEtobUUARmlQaG1QbVBLaG1FAACowwAAhgQAAKTEAAB4BAAAAAAAAJQEAABAAAAAAAAAAOQFAAAQAAAAEQAAADgAAAD4////5AUAABIAAAATAAAAwP///8D////kBQAAFAAAABUAAAC4BAAAHAUAAFgFAABsBQAAgAUAAJQFAABEBQAAMAUAAOAEAADMBAAAQAAAAAAAAAAclwAAFgAAABcAAAA4AAAA+P///xyXAAAYAAAAGQAAAMD////A////HJcAABoAAAAbAAAAQAAAAAAAAAA8lgAAHAAAAB0AAADA////wP///zyWAAAeAAAAHwAAADgAAAAAAAAAhJYAACAAAAAhAAAAyP///8j///+ElgAAIgAAACMAAABOU3QzX18yMThiYXNpY19zdHJpbmdzdHJlYW1JY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQAAAADswwAAnAUAAByXAAAAAAAAdAYAACQAAAAlAAAAJgAAACcAAAAoAAAAKQAAACoAAAArAAAALAAAAC0AAAAuAAAALwAAADAAAAAxAAAATlN0M19fMjE1YmFzaWNfc3RyaW5nYnVmSWNOU18xMWNoYXJfdHJhaXRzSWNFRU5TXzlhbGxvY2F0b3JJY0VFRUUAAADswwAAMAYAAASWAEGMDQuMf7QGAABQRnZQaG1QbVBLaG1FAEZ2UGhtUG1QS2htRQAAqMMAAJ4GAACkxAAAkAYAAAAAAACsBgAAAAAAACAHAAAyAAAAMwAAADQAAAA1AAAANgAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSTlzZXNzaW9uX3ROU185YWxsb2NhdG9ySVMxX0VFRUUAAADswwAA4AYAANDAAAAwMAAAAAAAAGAIAAA3AAAAQAAAAEEAAABCAAAAQwAAAGl2LnNpemUoKSA9PSBCTE9DS19TSVpFAGNyeXB0L2NyeXB0b19tYmVkLmNwcABtYmVkQ2lwaGVyAGtleS5zaXplKCkgPT0gMzIAAAAAAAAAmAgAADgAAABEAAAARQAAAEYAAABHAAAAAAAAANAIAAA6AAAASAAAAEkAAABKAAAAAAAAAMgIAABLAAAATAAAAE0AAABNAAAAAAAAAJAIAABOAAAATwAAAE0AAABNAAAATQAAAAAAAABYCAAAUAAAAFEAAABNAAAATQAAAE0AAAAAAAAA8AgAADwAAABSAAAAUwAAAE42V2ViQXBpMTBtYmVkQ2lwaGVyRQBONldlYkFwaTZDaXBoZXJFAADEwwAARggAAOzDAAAwCAAAWAgAAE42V2ViQXBpOG1iZWRFQ0RIRQBONldlYkFwaTRFQ0RIRQAAAMTDAAB/CAAA7MMAAGwIAACQCAAATjZXZWJBcGk4bWJlZEhhc2hFAE42V2ViQXBpNEhhc2hFAAAAxMMAALcIAADswwAApAgAAMgIAABONldlYkFwaTZDcnlwdG9FAAAAAMTDAADcCAAAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQAAAAAAoAkAAFQAAABVAAAAVgAAADUAAABXAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX2VtcGxhY2VJTjZXZWJBcGk4bWJlZEhhc2hFTlNfOWFsbG9jYXRvcklTMl9FRUVFAAAA7MMAAFgJAADQwAAAAAAAABAKAABYAAAAWQAAAFoAAAA1AAAAWwAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9lbXBsYWNlSU42V2ViQXBpOG1iZWRFQ0RIRU5TXzlhbGxvY2F0b3JJUzJfRUVFRQAAAOzDAADICQAA0MAAAAAAAACECgAAXAAAAF0AAABeAAAANQAAAF8AAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfZW1wbGFjZUlONldlYkFwaTEwbWJlZENpcGhlckVOU185YWxsb2NhdG9ySVMyX0VFRUUAAAAA7MMAADgKAADQwAAAICBBRVMtRUNCLSUzZCAoJXMpOiAAICBBUkM0IHRlc3QgIyVkOiAAICBCYXNlNjQgZW5jb2RpbmcgdGVzdDogADAxMjM0NTY3ODlBQkNERUYAICBDQU1FTExJQS1FQ0ItJTNkICglcyk6IAAgIENDTTogc2V0dXAgZmFpbGVkACAgQ2hhQ2hhMjAgdGVzdCAldSAAICBDaGFDaGEyMC1Qb2x5MTMwNSB0ZXN0ICV1IABBRVMtMTI4LUVDQgB3YgAlcygpIHJldHVybmVkICVkICgtMHglMDR4KQoAICBERVMlYy1FQ0ItJTNkICglcyk6IAAtLS0tLUJFR0lOIERIIFBBUkFNRVRFUlMtLS0tLQBCTElORElORyBDT05URVhUADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQAwMURCNDIAd2IAL2Rldi91cmFuZG9tAENJUEhFUiAtIFRoZSBzZWxlY3RlZCBmZWF0dXJlIGlzIG5vdCBhdmFpbGFibGUAICBBRVMtR0NNLSUzZCAjJWQgKCVzKTogAAB3YgAgIE1ENSB0ZXN0ICMlZDogAE1ENQBNRDUAJWQuJWQAUHJvYy1UeXBlOiA0LEVOQ1JZUFRFRABpbnZhbGlkIFBLACqGSIb3DQEFDAByYgBSU0EALS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KACAgUG9seTEzMDUgdGVzdCAldSAAICBSSVBFTUQtMTYwIHRlc3QgIyVkOiAAOTI5Mjc1ODQ1MzA2M0Q4MDNERDYwM0Q1RTc3N0Q3ODg4RUQxRDVCRjM1Nzg2MTkwRkEyRjIzRUJDMDg0OEFFQUREQTkyQ0E2QzNEODBCMzJDNEQxMDlCRTBGMzZENkFFNzEzMEI5Q0VEN0FDREY1NENGQzc1NTVBQzE0RUVCQUI5M0E4OTgxM0ZCRjNDNEY4MDY2RDJEODAwRjdDMzhBODFBRTMxOTQyOTE3NDAzRkY0OTQ2QjBBODNEM0QzRTA1RUU1N0M2RjVGNTYwNkZCNUQ0QkM2Q0QzNEVFMDgwMUE1RTk0QkI3N0IwNzUwNzIzM0EwQkM3QkFDOEY5MEY3OQAgIFNIQS0xIHRlc3QgIyVkOiAAdW5rbm93bgAvaG9tZS93cm9zcy9zcmMvaVNlcmllcy93ZWJhcGktanMtY2xpZW50L21iZWR0bHMvbGlicmFyeS9zc2xfY2xpLmMAL2hvbWUvd3Jvc3Mvc3JjL2lTZXJpZXMvd2ViYXBpLWpzLWNsaWVudC9tYmVkdGxzL2xpYnJhcnkvc3NsX3Nydi5jAC9ob21lL3dyb3NzL3NyYy9pU2VyaWVzL3dlYmFwaS1qcy1jbGllbnQvbWJlZHRscy9saWJyYXJ5L3NzbF90bHMuYwAyLjE2LjMATUJFRFRMU19IQVZFX0FTTQAqhkiG9w0BAQgAQ04ALS0tLS1CRUdJTiBYNTA5IENSTC0tLS0tAC0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQAtLS0tLUJFR0lOIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLQBVHRMAVR0PACAgWFRFQSB0ZXN0ICMlZDogAGRlYwAAZGVjACAgQ0NNLUFFUyAjJXU6IABzZXRrZXkoKSBlcnJvciBjb2RlOiAlaQoAQUVTLTE5Mi1FQ0IAcmIAZHVtcGluZyAnJXMnICgldSBieXRlcykKAGRlYwAtLS0tLUVORCBESCBQQVJBTUVURVJTLS0tLS0ARkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGOTlERUY4MzYxNDZCQzlCMUI0RDIyODMwADE0REVGOURFQTJGNzlDRDY1ODEyNjMxQTVDRjVEM0VEAHJiAHJiAENJUEhFUiAtIEJhZCBpbnB1dCBwYXJhbWV0ZXJzAGVuYwByYgBSSVBFTUQxNjAAUklQRU1EMTYwAC4lZABERUstSW5mbzogREVTLUVERTMtQ0JDLAAgIFBCS0RGMiAoU0hBMSkgIyVkOiAALS0tLS1CRUdJTiAARUMALS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCgBDMzZEMEVCN0ZDRDI4NTIyM0NGQjVBQUJBNUJEQTNEODJDMDFDQUQxOUVBNDg0QTg3RUE0Mzc3NjM3RTc1NTAwRkNCMjAwNUM1QzdERDZFQzRBQzAyM0NEQTI4NUQ3OTZDM0Q5RTc1RTFFRkM0MjQ4OEJCNEYxRDEzQUMzMEE1NwAgIFNIQS0lZCB0ZXN0ICMlZDogACAgU0hBLSVkIHRlc3QgIyVkOiAAVExTLUVDREhFLVJTQS1XSVRILUNIQUNIQTIwLVBPTFkxMzA1LVNIQTI1NgBjbGllbnQgc3RhdGU6ICVkAHNlcnZlciBzdGF0ZTogJWQAPT4gZGVyaXZlIGtleXMAICBUSU1JTkcgdGVzdCAjMSAoc2V0X2FsYXJtIC8gZ2V0X3RpbWVyKTogAG1iZWQgVExTIDIuMTYuMwBNQkVEVExTX0hBVkVfVElNRQAgKyAAVQQDAC0tLS0tRU5EIFg1MDkgQ1JMLS0tLS0ALS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQAtLS0tLUVORCBDRVJUSUZJQ0FURSBSRVFVRVNULS0tLS0AVR0OAGCGSAGG+EIBAQBlbmMAcGFzc2VkCiAgQmFzZTY0IGRlY29kaW5nIHRlc3Q6IAAlcyVzAGVuYwBjcnlwdF9hbmRfdGFnKCkgZXJyb3IgY29kZTogJWkKAEFFUy0yNTYtRUNCACAgQ1RSX0RSQkcgKFBSID0gVFJVRSkgOiAAICAlcwoAZW5jACAgREhNIHBhcmFtZXRlciBsb2FkOiAANUVBNkYzODlBMzhCOEJDODFFNzY3NzUzQjE1QUE1NTY5RTE3ODJFMzBBQkU3RDI1ADk4QUEAICBFTlRST1BZIHRlc3Q6IABDSVBIRVIgLSBGYWlsZWQgdG8gYWxsb2NhdGUgbWVtb3J5ACAgSE1BQ19EUkJHIChQUiA9IFRydWUpIDogAFNIQTEAU0hBMQBVBAMAREVLLUluZm86IERFUy1DQkMsAC0tLS0tQkVHSU4gUlNBIFBSSVZBVEUgS0VZLS0tLS0ARUNfREgALS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQoAQzAwMERGNTFBN0M3N0FFOEQ3QzczNzBDMUZGNTVCNjlFMjExQzJCOUU1REIxRUQwQkY2MUQwRDk4OTk2MjBGNDkxMEU0MTY4Mzg3RTNDMzBBQTFFMDBDMzM5QTc5NTA4ODQ1MkREOTZBOUE1RUE1RDlEQ0E2OERBNjM2MDMyQUYAVExTLUVDREhFLUVDRFNBLVdJVEgtQ0hBQ0hBMjAtUE9MWTEzMDUtU0hBMjU2AGhhbmRzaGFrZTogZG9uZQBoYW5kc2hha2U6IGRvbmUAY2lwaGVyIGluZm8gZm9yICVkIG5vdCBmb3VuZABmYWlsZWQgYXQgbGluZSAlZAoATUJFRFRMU19IQVZFX1RJTUVfREFURQAsIABjb21tb25OYW1lACVzQ1JMIHZlcnNpb24gICA6ICVkACVzLyVzAC0tLS0tQkVHSU4gTkVXIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLQBVHSMAKoZIhvcNAQkOACAgQUVTLUNCQy0lM2QgKCVzKTogADYwMkFCN0VDQTU5N0EzRDZCNTZGRjk4MjlBNUU4Qjg1OUU4NTdFQTk1QTAzNTEyRTJCQUU3MzkxNjg4RDI2NEFBNTY2M0IwMzQxREI5Q0NGRDJDNEM1RjQyMUZFQzgxNDgwMDFCNzJFODQ4QTM4Q0FFMUM2NUY3OEU1NkFCREVGRTEyRDNDMDM5QjhBMDJENkJFNTkzRjBCQkJEQTU2RjFFQ0Y2NzcxNTJFRjgwNDM3MEMxQTMwNUNBRjNCNUJGMTMwODc5QjU2QzYxREU1ODRBMEY1M0EyNDQ3QTUxRQAgIENBTUVMTElBLUNCQy0lM2QgKCVzKTogAEFFUy0xMjgtQ0ZCMTI4ACVzKFgpACAgREVTJWMtQ0JDLSUzZCAoJXMpOiAALS0tLS1CRUdJTiAAICBFQ1AgdGVzdCAjMSAoY29uc3RhbnQgb3BfY291bnQsIGJhc2UgcG9pbnQgRyk6IABDSVBIRVIgLSBUaGUgY29udGV4dCBpcyBpbnZhbGlkLiBGb3IgZXhhbXBsZSwgYmVjYXVzZSBpdCB3YXMgZnJlZWQAU0hBMzg0AFNIQTUxMgBVBAYAREVLLUluZm86IEFFUy0yNTYtQ0JDLAAtLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS0AcnNhLkUAVExTLURIRS1QU0stV0lUSC1DSEFDSEEyMC1QT0xZMTMwNS1TSEEyNTYAY29uZmlndXJlZCBtYXggbWFqb3IgdmVyc2lvbiBpcyBpbnZhbGlkLCBjb25zaWRlciB1c2luZyBtYmVkdGxzX3NzbF9jb25maWdfZGVmYXVsdHMoKQByZWNvcmQgaGVhZGVyAHVzaW5nIGV4dGVuZGVkIG1hc3RlciBzZWNyZXQAICBUSU1JTkcgdGVzdCAjMiAoc2V0L2dldF9kZWxheSAgICAgICAgKTogAE1CRURUTFNfQ0lQSEVSX01PREVfT0ZCACUwMlglcwBPAAolc1Jldm9rZWQgY2VydGlmaWNhdGVzOgAKJXNpc3N1ZXIgbmFtZSAgICAgICA6IAAKJXNzaWduZWQgdXNpbmcgIDogAC0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KACAgQUVTLUNGQjEyOC0lM2QgKCVzKTogACAgTVBJIHRlc3QgIzEgKG11bF9tcGkpOiAAICBDQU1FTExJQS1DVFItMTI4ICglcyk6IABBRVMtMTkyLUNGQjEyOAAlcyhZKQBmYWlsZWQgKCV1KQoAQ0lQSEVSIC0gQ2lwaGVyIGhhcmR3YXJlIGFjY2VsZXJhdG9yIGZhaWxlZABTSEE1MTIAaWQtYXQtY291bnRyeU5hbWUALS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLQBlY2tleS5RAHBhc3NlZAogIFBLQ1MjMSBlbmNyeXB0aW9uIDogAFRMUy1SU0EtUFNLLVdJVEgtQ0hBQ0hBMjAtUE9MWTEzMDUtU0hBMjU2AGNsaWVudCBoZWxsbywgbWF4IHZlcnNpb246IFslZDolZF0AY2xpZW50IGhlbGxvIHYzLCBtZXNzYWdlIHR5cGU6ICVkAHNlc3Npb24gaGFzaAAgIFRJTUlORyB0ZXN0ICMzIChoYXJkY2xvY2sgLyBnZXRfdGltZXIpOiAATUJFRFRMU19DSVBIRVJfTU9ERV9YVFMAOgBVBAoACiVzc2VyaWFsIG51bWJlcjogAAolc3N1YmplY3QgbmFtZSAgICAgIDogAAolcyUtMTRzOiAlZCBiaXRzCgAgIEFFUy1PRkItJTNkICglcyk6IABBRVMtMjU2LUNGQjEyOAB2YWx1ZSBvZiAnJXMnICglZCBiaXRzKSBpczoKAERITSAtIEJhZCBpbnB1dCBwYXJhbWV0ZXJzAHJiAENvdW50cnkALS0tLS1CRUdJTiBFTkNSWVBURUQgUFJJVkFURSBLRVktLS0tLQCqu8wDAgEA//////8RIjMKCwzM3d3d3d0AVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTEyOC1DQkMtU0hBAHNzbF9nZW5lcmF0ZV9yYW5kb20AYmFkIGNsaWVudCBoZWxsbyBtZXNzYWdlAGV4dGVuZGVkIG1hc3RlciBzZWNyZXQATUJFRFRMU19DSVBIRVJfUEFERElOR19QS0NTNwAAb3JnYW5pemF0aW9uTmFtZQAgcmV2b2NhdGlvbiBkYXRlOiAlMDRkLSUwMmQtJTAyZCAlMDJkOiUwMmQ6JTAyZAAKJXNpc3N1ZWQgIG9uICAgICAgICA6ICUwNGQtJTAyZC0lMDJkICUwMmQ6JTAyZDolMDJkACAgQUVTLUNUUi0xMjggKCVzKTogAEFFUy0xMjgtT0ZCAAoAICBFQ1AgdGVzdCAjMiAoY29uc3RhbnQgb3BfY291bnQsIG90aGVyIHBvaW50KTogAERITSAtIFJlYWRpbmcgb2YgdGhlIERITSBwYXJhbWV0ZXJzIGZhaWxlZABDAC0tLS0tRU5EIEVOQ1JZUFRFRCBQUklWQVRFIEtFWS0tLS0tAHBhc3NlZAogIFBLQ1MjMSBkZWNyeXB0aW9uIDogAFRMUy1FQ0RIRS1FQ0RTQS1XSVRILUFFUy0yNTYtQ0JDLVNIQQBjbGllbnQgaGVsbG8sIHJhbmRvbSBieXRlcwBjbGllbnQgaGVsbG8gdjMsIG1lc3NhZ2UgbGVuLjogJWQAcHJmAE1CRURUTFNfQ0lQSEVSX1BBRERJTkdfT05FX0FORF9aRVJPUwAuLi4uAEwACiVzc2lnbmVkIHVzaW5nICA6IAAKJXNleHBpcmVzIG9uICAgICAgICA6ICUwNGQtJTAyZC0lMDJkICUwMmQ6JTAyZDolMDJkACAgQUVTLVhUUy0xMjggKCVzKTogADI1NjU2NzMzNjA1OUU1MkNBRTIyOTI1NDc0NzA1RjM5QTk0AEFFUy0xOTItT0ZCACAwMABVbmV4cGVjdGVkIGVycm9yLCByZXR1cm4gY29kZSA9ICUwOFgKAERITSAtIE1ha2luZyBvZiB0aGUgREhNIHBhcmFtZXRlcnMgZmFpbGVkAFUEBwAtLS0tLUJFR0lOIFJTQSBQVUJMSUMgS0VZLS0tLS0AVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTEyOC1DQkMtU0hBMjU2AGNsaWVudCBoZWxsbywgc2Vzc2lvbiBpZCBsZW4uOiAlZABjbGllbnQgaGVsbG8gdjMsIHByb3RvY29sIHZlcnNpb246IFslZDolZF0AbWFzdGVyIHNlY3JldABNQkVEVExTX0NJUEhFUl9QQURESU5HX1pFUk9TX0FORF9MRU4APz8/AFUEBwAKAAolc3NpZ25lZCB1c2luZyAgICAgIDogAAAAQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f38+f39/PzQ1Njc4OTo7PD1/f39Af39/AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBl/f39/f38aGxwdHh8gISIjJCUmJygpKissLS4vMDEyM39/f39/RUZFMDIxQzI2NDVGRDFEQzU4NkU2OTE4NEFGNEEzMUVENUY1M0U5M0I1RjEyM0ZBNDE2ODA4NjdCQTExMDEzMTk0NEZFNzk1MkUyNTE3MzM3NzgwQ0IwREI4MEU2MUFBRTdDOEREQzZDNUM2QUFERUIzNEVCMzhBMkY0MEQ1RTYAQUVTLTEyOC1DQkMAJTA0eDogADQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAA4MzM1REMxNjNCQjEyNEI2NTEyOUM5NkZERTkzM0Q4RDcyM0E3MEFBREM4NzNENkQ1NEE3QkIwRABDSVBIRVIgLSBJbnB1dCBkYXRhIGNvbnRhaW5zIGludmFsaWQgcGFkZGluZyBhbmQgaXMgcmVqZWN0ZWQAU0hBAFNIQTIyNABpZC1hdC1jb21tb25OYW1lAERFSy1JbmZvOiBBRVMtAC0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tAEVDRFNBAC0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCgAyNEJGNjE4NTQ2ODc4NkZERDMwMzA4M0QyNUU2NEVGQzY2Q0E0NzJCQzQ0RDI1MzEwMkY4QjRBOUQzQkZBNzUwOTEzODZDMDA3NzkzN0ZFMzNGQTMyNTJEMjg4NTU4MzdBRTFCNDg0QThBOUE0NUY3RUU4QzBDNjM0Rjk5RThDRERGNzlDNUNFMDdFRTcyQzdGMTIzMTQyMTk4MTY0MjM0Q0FCQjcyNENGNzhCODE3M0I5Rjg4MEZDODYzMjI0MDdBRjFGRURGRERFMkJFQjY3NENBMTVGM0U4MUExNTIxRTA3MTUxM0ExRTg1QjVERkEwMzFGMjFFQ0FFOTFBMzREAFRMUy1ESEUtUlNBLVdJVEgtQ0hBQ0hBMjAtUE9MWTEzMDUtU0hBMjU2AGludmFsaWQgc3RhdGUgJWQAaW52YWxpZCBzdGF0ZSAlZABtYmVkdGxzX21kIGluZm8gZm9yICVkIG5vdCBmb3VuZAAgY3ljbGVzPSVsdSByYXRpbz0lbHUgbWlsbGlzZWNzPSVsdSBzZWNzPSVsdSBoYXJkZmFpbD0lZCBhPSVsdSBiPSVsdQoATUJFRFRMU19DSVBIRVJfTU9ERV9DQkMAJXM9AEMACiVzaXNzdWVyIG5hbWUgICA6IAAKQ2VydGlmaWNhdGUgaXMgdW5pbml0aWFsaXNlZCEKAC0tLS0tRU5EIE5FVyBDRVJUSUZJQ0FURSBSRVFVRVNULS0tLS0AVR0PAC0tLS0tQkVHSU4gQ0VSVElGSUNBVEUgUkVRVUVTVC0tLS0tCgBCMkU3RUZEMzcwNzVCOUYwM0ZGOTg5QzdDNTA1MUMyMDM0RDJBMzIzODEwMjUxMTI3RTdCRjg2MjVBNEY0OUE1RjNFMjdGNERBOEJENTlDNDdENkRBQUJBNEM4MTI3QkQ1QjVDMjU3NjMyMjJGRUZDQ0ZDMzhCODMyMzY2QzI5RQBBRVMtMTkyLUNCQwAgJTAyeAA3RkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkYAQ0lQSEVSIC0gRGVjcnlwdGlvbiBvZiBibG9jayByZXF1aXJlcyBhIGZ1bGwgYmxvY2sAZGVjAFNIQTIyNABTSEEyNTYAQ29tbW9uIE5hbWUAREVLLUluZm86IEFFUy0xMjgtQ0JDLAAtLS0tLUJFR0lOIEVDIFBSSVZBVEUgS0VZLS0tLS0AUlNBLWFsdAAtLS0tLUJFR0lOIEVDIFBSSVZBVEUgS0VZLS0tLS0KADEwMDAxAFRMUy1QU0stV0lUSC1DSEFDSEEyMC1QT0xZMTMwNS1TSEEyNTYAPT4gd3JpdGUgY2xpZW50IGhlbGxvAD0+IHBhcnNlIGNsaWVudCBoZWxsbwBzaG91bGQgbmV2ZXIgaGFwcGVuACBlbGFwc2VkKGhpcmVzKT0lbHUgZWxhcHNlZChjdHgpPSVsdSBzdGF0dXMoY3R4KT0lZAoATUJFRFRMU19DSVBIRVJfTU9ERV9DRkIAPz89AFUEBgAKJXN0aGlzIHVwZGF0ZSAgIDogJTA0ZC0lMDJkLSUwMmQgJTAyZDolMDJkOiUwMmQAJXNjZXJ0LiB2ZXJzaW9uICAgICA6ICVkCgAlc0NTUiB2ZXJzaW9uICAgOiAlZABghkgBhvhCAQEALS0tLS1FTkQgQ0VSVElGSUNBVEUgUkVRVUVTVC0tLS0tCgAwMDY2QTE5ODE4NkMxOEMxMEIyRjVFRDlCNTIyNzUyQTk4MzBCNjk5MTZFNTM1QzhGMDQ3NTE4QTg4OUE0M0E1OTRCNkJFRDI3QTE2OEQzMUQ0QTUyRjg4OTI1QUE4RjUAQUVTLTI1Ni1DQkMAICBDVFJfRFJCRyAoUFIgPSBGQUxTRSk6IAAgICAAcmIANTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1AENJUEhFUiAtIEF1dGhlbnRpY2F0aW9uIGZhaWxlZCAoZm9yIEFFQUQgbW9kZXMpACAgQUVTLUdDTS0lM2QgIyVkIHNwbGl0ICglcyk6IAAgIEhNQUNfRFJCRyAoUFIgPSBGYWxzZSkgOiAAU0hBMjU2AFNIQTM4NABDTgBERUstSW5mbzogQUVTLTE5Mi1DQkMsAC0tLS0tRU5EIEVDIFBSSVZBVEUgS0VZLS0tLS0AcnNhLk4ALS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQoAICBSU0Ega2V5IHZhbGlkYXRpb246IABUTFMtRUNESEUtUFNLLVdJVEgtQ0hBQ0hBMjAtUE9MWTEzMDUtU0hBMjU2AG5vIFJORyBwcm92aWRlZABtYmVkdGxzX3NzbF9mZXRjaF9pbnB1dABwcmVtYXN0ZXIgc2VjcmV0AE1CRURUTFNfQ0lQSEVSX01PREVfQ1RSACVzAGNvdW50cnlOYW1lAAolc25leHQgdXBkYXRlICAgOiAlMDRkLSUwMmQtJTAyZCAlMDJkOiUwMmQ6JTAyZAAlc3NlcmlhbCBudW1iZXIgICAgIDogAAolc3N1YmplY3QgbmFtZSAgOiAALS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCgA2NjEzRjI2MTYyMjIzREY0ODhFOUNENDhDQzEzMkM3QTBBQzkzQzcwMUIwMDFCMDkyRTRFNUI5RjczQkNEMjdCOUVFNTBEMDY1N0M3N0YzNzRFOTAzQ0RGQTRDNjQyAEFFUy0yNTYtT0ZCACVzICMlZDoKAERITSAtIFJlYWRpbmcgb2YgdGhlIHB1YmxpYyB2YWx1ZXMgZmFpbGVkAGlkLWF0LWxvY2FsaXR5AC0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0AICBQS0NTIzEgZGF0YSBzaWduICA6IABUTFMtRUNESEUtRUNEU0EtV0lUSC1BRVMtMTI4LUdDTS1TSEEyNTYAY2xpZW50IGhlbGxvLCBzZXNzaW9uIGlkAHJlcGxheWVkIHJlY29yZCwgZGlzY2FyZGluZwBubyBwcmVtYXN0ZXIgKHNlc3Npb24gcmVzdW1lZCkATUJFRFRMU19DSVBIRVJfUEFERElOR19aRVJPUwAgKCVzLCBNR0YxLSVzLCAweCUwMlgpAGxvY2FsaXR5AAolcyUtMThzOiAlZCBiaXRzACAgTVBJIHRlc3QgIzIgKGRpdl9tcGkpOiAAQUVTLTEyOC1DVFIAAHNlY3A1MjFyMQBESE0gLSBNYWtpbmcgb2YgdGhlIHB1YmxpYyB2YWx1ZSBmYWlsZWQATG9jYWxpdHkALS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0AcGFzc2VkCiAgUEtDUyMxIHNpZy4gdmVyaWZ5OiAAVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTI1Ni1DQkMtU0hBMzg0AG5vIHZlcmlmeSBjb29raWUgdG8gc2VuZAByZWNvcmQgY29udGVudHMAa2V5IGV4cGFuc2lvbgBNQkVEVExTX1JFTU9WRV9BUkM0X0NJUEhFUlNVSVRFUwAlcyBrZXkgc2l6ZQBSAAolc2Jhc2ljIGNvbnN0cmFpbnRzIDogQ0E9JXMAMzZFMTM5QUVBNTUyMTU2MDlEMjgxNjk5OEVEMDIwQkJCRDk2QzM3ODkwRjY1MTcxRDk0OEU5QkM3Q0JBQTREOTMyNUQyNEQ2QTNDMTI3MTBGMTBBMDlGQTA4QUI4NwBBRVMtMTkyLUNUUgBjcnQtPgBicmFpbnBvb2xQNTEycjEAREhNIC0gQ2FsY3VsYXRpb24gb2YgdGhlIERITSBzZWNyZXQgZmFpbGVkAEwALS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tAFRMUy1FQ0RIRS1FQ0RTQS1XSVRILUFFUy0yNTYtR0NNLVNIQTM4NABjbGllbnQgaGVsbG8sIGNvb2tpZQBjbGllbnQgaGVsbG8gdjMsIGhhbmRzaGFrZSB0eXBlOiAlZABjaXBoZXJzdWl0ZSA9ICVzAE1CRURUTFNfUkVNT1ZFXzNERVNfQ0lQSEVSU1VJVEVTACAgWC41MDkgY2VydGlmaWNhdGUgbG9hZDogACqGSIb3DQEJAQB0cnVlACAgTVBJIHRlc3QgIzMgKGV4cF9tb2QpOiAAQUVTLTI1Ni1DVFIAaW52YWxpZCBQSyBjb250ZXh0CgBzZWNwMzg0cjEAREhNIC0gVGhlIEFTTi4xIGRhdGEgaXMgbm90IGZvcm1hdHRlZCBjb3JyZWN0bHkAVQQIACqGSM49AQEAVExTLUVDREhFLUVDRFNBLVdJVEgtQUVTLTI1Ni1DQ00AY2xpZW50IGhlbGxvLCBhZGQgY2lwaGVyc3VpdGU6ICUwNHgAY2xpZW50IGhlbGxvIHYzLCBoYW5kc2hha2UgbGVuLjogJWQAcmFuZG9tIGJ5dGVzAE1CRURUTFNfRUNQX0RQX1NFQ1AxOTJSMV9FTkFCTEVEAE9VAGZhbHNlADAwM0EwQUFFREQ3RTc4NEZDMDdEOEY5RUM2RTNCRkQ1QzNEQkE3NjQ1NjM2M0ExMDg2OTYyMkVBQzJERDg0RUNDNUI4QTc0REFDNEQwOUUwM0I1RTBCRTc3OUYyREY2MQBBRVMtMTI4LVhUUwAlcyVzAGJyYWlucG9vbFAzODRyMQBESE0gLSBBbGxvY2F0aW9uIG9mIG1lbW9yeSBmYWlsZWQAaWQtYXQtc3RhdGUAKoZIhvcNAQwBAQBUTFMtRUNESEUtRUNEU0EtV0lUSC1BRVMtMjU2LUNDTS04AGNsaWVudCBoZWxsbywgZ290ICVkIGNpcGhlcnN1aXRlcyAoZXhjbHVkaW5nIFNDU1ZzKQBiYWQgY2xpZW50IGhlbGxvIG1lc3NhZ2Vfc2VxOiAlZCAoZXhwZWN0ZWQgJWQpAGtleSBibG9jawBNQkVEVExTX0VDUF9EUF9TRUNQMjI0UjFfRU5BQkxFRABwYXNzZWQKICBYLjUwOSBzaWduYXR1cmUgdmVyaWZ5OiAAVQQLACwgbWF4X3BhdGhsZW49JWQAICBNUEkgdGVzdCAjNCAoaW52X21vZCk6IABBRVMtMjU2LVhUUwBzaG91bGQgbm90IGhhcHBlbgoAc2VjcDI1NnIxAERITSAtIFJlYWQgb3Igd3JpdGUgb2YgZmlsZSBmYWlsZWQAU3RhdGUAKoZIhvcNAQUNAFRMUy1FQ0RIRS1FQ0RTQS1XSVRILUFFUy0xMjgtQ0NNAGFkZGluZyBFTVBUWV9SRU5FR09USUFUSU9OX0lORk9fU0NTVgBDbGllbnRIZWxsbyBmcmFnbWVudGF0aW9uIG5vdCBzdXBwb3J0ZWQAbWJlZHRsc19tZF9zZXR1cABNQkVEVExTX0VDUF9EUF9TRUNQMjU2UjFfRU5BQkxFRABvcmdhbml6YXRpb25hbFVuaXROYW1lAAolc3N1YmplY3QgYWx0IG5hbWUgIDogACAgTVBJIHRlc3QgIzUgKHNpbXBsZSBnY2QpOiAAQUVTLTEyOC1HQ00ARUNESDogUQBzZWNwMjU2azEAREhNIC0gREhNIGhhcmR3YXJlIGFjY2VsZXJhdG9yIGZhaWxlZABTVABUTFMtRUNESEUtRUNEU0EtV0lUSC1BRVMtMTI4LUNDTS04AGFkZGluZyBGQUxMQkFDS19TQ1NWAGNsaWVudCBoZWxsbywgdmVyc2lvbgBrZXlsZW46ICVkLCBtaW5sZW46ICVkLCBpdmxlbjogJWQsIG1hY2xlbjogJWQATUJFRFRMU19FQ1BfRFBfU0VDUDM4NFIxX0VOQUJMRUQAU1QACiVzY2VydC4gdHlwZSAgICAgICAgOiAAZmFpbGVkIGF0ICVkCgBBRVMtMTkyLUdDTQBFQ0RIOiBRcABicmFpbnBvb2xQMjU2cjEAREhNIC0gU2V0dGluZyB0aGUgbW9kdWx1cyBhbmQgZ2VuZXJhdG9yIGZhaWxlZABVBAoAVExTLUVDREhFLUVDRFNBLVdJVEgtQ0FNRUxMSUEtMTI4LUNCQy1TSEEyNTYAY2xpZW50IGhlbGxvLCBjb21wcmVzcyBsZW4uOiAlZABjbGllbnQgb25seSBzdXBwb3J0cyBzc2wgc21hbGxlciB0aGFuIG1pbmltdW0gWyVkOiVkXSA8IFslZDolZF0AbWJlZHRsc19jaXBoZXJfc2V0dXAATUJFRFRMU19FQ1BfRFBfU0VDUDUyMVIxX0VOQUJMRUQAVQQIAAolc2tleSB1c2FnZSAgICAgICAgIDogAFVuZXhwZWN0ZWQgZXJyb3IsIHJldHVybiBjb2RlID0gJTA4WAoAQUVTLTI1Ni1HQ00ARUNESDogegBzZWNwMjI0cjEARUNQIC0gQmFkIGlucHV0IHBhcmFtZXRlcnMgdG8gZnVuY3Rpb24AaWQtYXQtb3JnYW5pemF0aW9uTmFtZQBUTFMtRUNESEUtRUNEU0EtV0lUSC1DQU1FTExJQS0yNTYtQ0JDLVNIQTM4NABjbGllbnQgaGVsbG8sIHJhbmRvbSBieXRlcwBtYmVkdGxzX2NpcGhlcl9zZXRrZXkATUJFRFRMU19FQ1BfRFBfU0VDUDE5MksxX0VOQUJMRUQAc3RhdGVPclByb3Zp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NT7VzbS8qM7qcruEZPquEmaNR288v2Pkm9KeXS9UG3fCrnBjTvaNDQ50VxNb53EWcvhdfVOvCMtAQMzitE5qRtI0hK8VASgEsOEdOpiVtJ+4Bkigbs6COz9vgqsgNUsdGgH4J3InsWAVYdw/k+creTq7vSVFNOE5iKBLec5Rt8kyL8m6H6B+yBzg9tHHvMMRAc/HquihSYeQGpq9T9TL3trQONoK1SrDOQNnNpHGfDH5jU8rseC3WZ73Orv1Q/8Z1fKcRdknLCKXvyr85hVx/JEPJRWUm2GT5frrnLbOWWSowtGouhJeB8G2DGoF42VQ0hBCpAPLDm7s4DvbmBa+oJhMZOl4MjKVH5/fktPgKzSg0x7ycYlBdAobjDSjSyBxvsXYMnbDjZ813y4vmZtHbwvmHfHjD1TaTOWR2Noez3lizm9+Ps1msRgWBR0s/cXSj4SZIvv2V/Mj9SN2MqYxNaiTAs3MVmKB8Ky163ValzYWbsxz0oiSYpbe0Em5gRuQUEwUVsZxvcfG5goUejIG0OFFmnvyw/1TqskAD6hi4r8lu/bSvTUFaRJxIgIEsnzPy7YrnHbNwD4RU9PjQBZgvas48K1HJZwgOLp2zkb3xaGvd2BgdSBO/suF2I3oirD5qnp+qvlMXMJIGYyK+wLkasMB+eHr1mn41JCg3lymLSUJP5/mCMIyYU63W+J3zuPfj1fmcsM6iGo/JNMIo4UuihkTRHNwAyI4CaTQMZ8pmPouCIlsTuzmIShFdxPQOM9mVL5sDOk0tymswN1QfMm11YQ/FwlHtdnVFpIb+3mJAEGhjAEL3QkBAgMICQoLJickJRcUFRYb//8a//////////////////////////8EBQYHDA0ODxAREhP/GBn/HxwdHv//////////////////////////AAECAz0+Pzz/////GxgZGiMgISL/////CAkKCxAREhP/////JyQlJv////8MDQ4POjs4OR8cHR7/////BAUGB0FCQ0AUFRYX/////ysoKSoVFhcU/////xITEBELCAkKDwwNDhkaGxgdHh8cEhMQEf//////////AAAAAAAAAABwgizssyfA5eSFVzXqDK5BI+9rk0UZpSHtDk9OHWWSvYa4r4986x/OPjDcX17FCxqm4TnK1UddPdkBWtZRVmxNiw2aZvvMsC10Eisg8LGE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dGVkAE8AVExTLUVDREhFLUVDRFNBLVdJVEgtQ0FNRUxMSUEtMjU2LUdDTS1TSEEzODQAY2xpZW50IGhlbGxvLCB0b3RhbCBleHRlbnNpb24gbGVuZ3RoOiAlZABjbGllbnQgaGVsbG8sIGNvb2tpZQA8PSBkZXJpdmUga2V5cwBNQkVEVExTX0VDUF9EUF9TRUNQMjU2SzFfRU5BQkxFRABzZXJpYWxOdW1iZXIAJXMlcwoAQUVTLTI1Ni1DQ00Ac2VjcDE5MmsxAEVDUCAtIFRoZSBzaWduYXR1cmUgaXMgbm90IHZhbGlkAFUECwBUTFMtRUNESEUtRUNEU0EtV0lUSC0zREVTLUVERS1DQkMtU0hBAG1iZWR0bHNfc3NsX3dyaXRlX2hhbmRzaGFrZV9tc2cAY29va2llIHZlcmlmaWNhdGlvbiBmYWlsZWQAbWJlZHRsc19kaG1fY2FsY19zZWNyZXQATUJFRFRMU19FQ1BfRFBfQlAyNTZSMV9FTkFCTEVEAFUEBQAlc1Vua25vd24gcmVhc29uICh0aGlzIHNob3VsZCBub3QgaGFwcGVuKQoAQVJDNC0xMjgARUNQIC0gTWVtb3J5IGFsbG9jYXRpb24gZmFpbGVkAGlkLWF0LW9yZ2FuaXphdGlvbmFsVW5pdE5hbWUAVExTLUVDREhFLUVDRFNBLVdJVEgtUkM0LTEyOC1TSEEAbWJlZHRsc19zc2xfZmxpZ2h0X3RyYW5zbWl0AGNvb2tpZSB2ZXJpZmljYXRpb24gcGFzc2VkAERITTogSyAATUJFRFRMU19FQ1BfRFBfQlAzODRSMV9FTkFCTEVEAHBvc3RhbEFkZHJlc3MAVR0lAAAABwBByLABC5ECiQAAAIoAAACKAAAAiwAAAIwAAABCTE9XRklTSC1FQ0IARUNQIC0gR2VuZXJhdGlvbiBvZiByYW5kb20gdmFsdWUsIHN1Y2ggYXMgZXBoZW1lcmFsIGtleSwgZmFpbGVkAE9yZyBVbml0AFRMUy1FQ0RIRS1SU0EtV0lUSC1BRVMtMTI4LUNCQy1TSEEAPD0gd3JpdGUgY2xpZW50IGhlbGxvAGNvb2tpZSB2ZXJpZmljYXRpb24gc2tpcHBlZABtYmVkdGxzX2VjZGhfY2FsY19zZWNyZXQATUJFRFRMU19FQ1BfRFBfQlA1MTJSMV9FTkFCTEVEAFUEEAAABgAAAI0AAACOAAAAjwAAAAAAAACQAEHksgELyQiRAAAAkQAAAJIAAACTAAAAQkxPV0ZJU0gtQ0JDAEVDUCAtIEludmFsaWQgcHJpdmF0ZSBvciBwdWJsaWMga2V5AE9VAFRMUy1FQ0RIRS1SU0EtV0lUSC1BRVMtMjU2LUNCQy1TSEEAY2xpZW50IGhlbGxvLCBjdXJyZW50IHRpbWU6ICVsdQBjbGllbnQgaGVsbG8sIGNpcGhlcnN1aXRlbGlzdAA9PiBmZXRjaCBpbnB1dABNQkVEVExTX0VDUF9EUF9DVVJWRTI1NTE5X0VOQUJMRUQAcG9zdGFsQ29kZQAsIABCTE9XRklTSC1DRkI2NABFQ1AgLSBUaGUgYnVmZmVyIGNvbnRhaW5zIGEgdmFsaWQgc2lnbmF0dXJlIGZvbGxvd2VkIGJ5IG1vcmUgZGF0YQAqhkiG9w0BCQEAVExTLUVDREhFLVJTQS1XSVRILUFFUy0xMjgtQ0JDLVNIQTI1NgBjbGllbnQgaGVsbG8sIGFkZGluZyBzZXJ2ZXIgbmFtZSBleHRlbnNpb246ICVzAGNsaWVudCBoZWxsbywgY29tcHJlc3Npb24AQmFkIHVzYWdlIG9mIG1iZWR0bHNfc3NsX3NldF9iaW8oKSBvciBtYmVkdGxzX3NzbF9zZXRfYmlvKCkATUJFRFRMU19FQ1BfRFBfQ1VSVkU0NDhfRU5BQkxFRABVBBEAJXNTU0wgQ2xpZW50AEJMT1dGSVNILUNUUgBFQ1AgLSBUaGUgRUNQIGhhcmR3YXJlIGFjY2VsZXJhdG9yIGZhaWxlZABlbWFpbEFkZHJlc3MAVExTLUVDREhFLVJTQS1XSVRILUFFUy0xMjgtR0NNLVNIQTI1NgBidWZmZXIgdG9vIHNtYWxsAGNsaWVudCBoZWxsbyBleHRlbnNpb25zAHJlcXVlc3RpbmcgbW9yZSBkYXRhIHRoYW4gZml0cwBNQkVEVExTX0VDUF9OSVNUX09QVElNAGRuUXVhbGlmaWVyACVzU1NMIFNlcnZlcgBDQU1FTExJQS0xMjgtRUNCAEVDUCAtIE9wZXJhdGlvbiBpbiBwcm9ncmVzcywgY2FsbCBhZ2FpbiB3aXRoIHRoZSBzYW1lIHBhcmFtZXRlcnMgdG8gY29udGludWUARS1tYWlsIGFkZHJlc3MAVExTLUVDREhFLVJTQS1XSVRILUFFUy0yNTYtQ0JDLVNIQTM4NABjbGllbnQgaGVsbG8sIGFkZGluZyByZW5lZ290aWF0aW9uIGV4dGVuc2lvbgBmb3VuZCBTZXJ2ZXJOYW1lIGV4dGVuc2lvbgBZb3UgbXVzdCB1c2UgbWJlZHRsc19zc2xfc2V0X3RpbWVyX2NiKCkgZm9yIERUTFMATUJFRFRMU19FQ0RTQV9ERVRFUk1JTklTVElDAFUELgAlc0VtYWlsAAAAAAUAAACUAAAAlQAAAJYAAAAAAAAAlwBBuLsBC5kZmAAAAJkAAACaAAAAmwAAAENBTUVMTElBLTE5Mi1FQ0IATUQgLSBUaGUgc2VsZWN0ZWQgZmVhdHVyZSBpcyBub3QgYXZhaWxhYmxlAFUEBQBUTFMtRUNESEUtUlNBLVdJVEgtQUVTLTI1Ni1HQ00tU0hBMzg0AGNsaWVudCBoZWxsbywgYWRkaW5nIHNpZ25hdHVyZV9hbGdvcml0aG1zIGV4dGVuc2lvbgBmb3VuZCByZW5lZ290aWF0aW9uIGV4dGVuc2lvbgBuZXh0IHJlY29yZCBpbiBzYW1lIGRhdGFncmFtLCBvZmZzZXQ6ICVkAE1CRURUTFNfS0VZX0VYQ0hBTkdFX1BTS19FTkFCTEVEAHRpdGxlACVzT2JqZWN0IFNpZ25pbmcAQ0FNRUxMSUEtMjU2LUVDQgBNRCAtIEJhZCBpbnB1dCBwYXJhbWV0ZXJzIHRvIGZ1bmN0aW9uAGlkLWF0LXNlcmlhbE51bWJlcgBUTFMtRUNESEUtUlNBLVdJVEgtQ0FNRUxMSUEtMTI4LUNCQy1TSEEyNTYAY2xpZW50IGhlbGxvLCBhZGRpbmcgc3VwcG9ydGVkX2VsbGlwdGljX2N1cnZlcyBleHRlbnNpb24AZm91bmQgc2lnbmF0dXJlX2FsZ29yaXRobXMgZXh0ZW5zaW9uAGluX2xlZnQ6ICVkLCBuYl93YW50OiAlZABNQkVEVExTX0tFWV9FWENIQU5HRV9ESEVfUFNLX0VOQUJMRUQAVQQMACVzUmVzZXJ2ZWQAQ0FNRUxMSUEtMTI4LUNCQwBNRCAtIEZhaWxlZCB0byBhbGxvY2F0ZSBtZW1vcnkAU2VyaWFsIG51bWJlcgBUTFMtRUNESEUtUlNBLVdJVEgtQ0FNRUxMSUEtMjU2LUNCQy1TSEEzODQAaW52YWxpZCBjdXJ2ZSBpbiBzc2wgY29uZmlndXJhdGlvbgBmb3VuZCBzdXBwb3J0ZWQgZWxsaXB0aWMgY3VydmVzIGV4dGVuc2lvbgA8PSBmZXRjaCBpbnB1dABNQkVEVExTX0tFWV9FWENIQU5HRV9FQ0RIRV9QU0tfRU5BQkxFRABzdXJOYW1lACVzU1NMIENBAENBTUVMTElBLTE5Mi1DQkMATUQgLSBPcGVuaW5nIG9yIHJlYWRpbmcgb2YgZmlsZSBmYWlsZWQAc2VyaWFsTnVtYmVyAFRMUy1FQ0RIRS1SU0EtV0lUSC1DQU1FTExJQS0xMjgtR0NNLVNIQTI1NgBjbGllbnQgaGVsbG8sIGFkZGluZyBzdXBwb3J0ZWRfcG9pbnRfZm9ybWF0cyBleHRlbnNpb24AZm91bmQgc3VwcG9ydGVkIHBvaW50IGZvcm1hdHMgZXh0ZW5zaW9uAHRpbWVyIGhhcyBleHBpcmVkAE1CRURUTFNfS0VZX0VYQ0hBTkdFX1JTQV9QU0tfRU5BQkxFRABVBAQAJXNFbWFpbCBDQQBDQU1FTExJQS0yNTYtQ0JDAE1EIC0gTUQgaGFyZHdhcmUgYWNjZWxlcmF0b3IgZmFpbGVkAFUEEABUTFMtRUNESEUtUlNBLVdJVEgtQ0FNRUxMSUEtMjU2LUdDTS1TSEEzODQAY2xpZW50IGhlbGxvLCBhZGRpbmcgbWF4X2ZyYWdtZW50X2xlbmd0aCBleHRlbnNpb24AZm91bmQgbWF4IGZyYWdtZW50IGxlbmd0aCBleHRlbnNpb24AZl9yZWN2X3RpbWVvdXQ6ICV1IG1zAE1CRURUTFNfS0VZX0VYQ0hBTkdFX1JTQV9FTkFCTEVEAFNOACVzT2JqZWN0IFNpZ25pbmcgQ0EAQ0FNRUxMSUEtMTI4LUNGQjEyOABQRU0gLSBObyBQRU0gaGVhZGVyIG9yIGZvb3RlciBmb3VuZABpZC1hdC1wb3N0YWxBZGRyZXNzAFRMUy1FQ0RIRS1SU0EtV0lUSC0zREVTLUVERS1DQkMtU0hBAGNsaWVudCBoZWxsbywgYWRkaW5nIHRydW5jYXRlZF9obWFjIGV4dGVuc2lvbgBmb3VuZCB0cnVuY2F0ZWQgaG1hYyBleHRlbnNpb24Ac3NsLT5mX3JlY3YoX3RpbWVvdXQpAE1CRURUTFNfS0VZX0VYQ0hBTkdFX0RIRV9SU0FfRU5BQkxFRABnaXZlbk5hbWUAJXNEaWdpdGFsIFNpZ25hdHVyZQBDQU1FTExJQS0xOTItQ0ZCMTI4AFBFTSAtIFBFTSBzdHJpbmcgaXMgbm90IGFzIGV4cGVjdGVkAFBvc3RhbCBhZGRyZXNzAFRMUy1FQ0RIRS1SU0EtV0lUSC1SQzQtMTI4LVNIQQBjbGllbnQgaGVsbG8sIGFkZGluZyBlbmNyeXB0X3RoZW5fbWFjIGV4dGVuc2lvbgBmb3VuZCBlbmNyeXB0IHRoZW4gbWFjIGV4dGVuc2lvbgB0aW1lb3V0AE1CRURUTFNfS0VZX0VYQ0hBTkdFX0VDREhFX1JTQV9FTkFCTEVEAFUEKgAlc05vbiBSZXB1ZGlhdGlvbgBDQU1FTExJQS0yNTYtQ0ZCMTI4AFBFTSAtIEZhaWxlZCB0byBhbGxvY2F0ZSBtZW1vcnkAcG9zdGFsQWRkcmVzcwBUTFMtREhFLVJTQS1XSVRILUFFUy0yNTYtR0NNLVNIQTM4NABjbGllbnQgaGVsbG8sIGFkZGluZyBleHRlbmRlZF9tYXN0ZXJfc2VjcmV0IGV4dGVuc2lvbgBmb3VuZCBleHRlbmRlZCBtYXN0ZXIgc2VjcmV0IGV4dGVuc2lvbgBoYW5kc2hha2UgdGltZW91dABNQkVEVExTX0tFWV9FWENIQU5HRV9FQ0RIRV9FQ0RTQV9FTkFCTEVEAEdOACVzS2V5IEVuY2lwaGVybWVudABDQU1FTExJQS0xMjgtQ1RSAFBFTSAtIFJTQSBJViBpcyBub3QgaW4gaGV4LWZvcm1hdABVBBEAVExTLURIRS1SU0EtV0lUSC1BRVMtMTI4LUdDTS1TSEEyNTYAY2xpZW50IGhlbGxvLCBhZGRpbmcgYWxwbiBleHRlbnNpb24AZm91bmQgc2Vzc2lvbiB0aWNrZXQgZXh0ZW5zaW9uAG1iZWR0bHNfc3NsX3Jlc2VuZABNQkVEVExTX0tFWV9FWENIQU5HRV9FQ0RIX0VDRFNBX0VOQUJMRUQAaW5pdGlhbHMAJXNEYXRhIEVuY2lwaGVybWVudABDQU1FTExJQS0xOTItQ1RSAFBFTSAtIFVuc3VwcG9ydGVkIGtleSBlbmNyeXB0aW9uIGFsZ29yaXRobQBpZC1hdC1wb3N0YWxDb2RlAFRMUy1ESEUtUlNBLVdJVEgtQUVTLTEyOC1DQkMtU0hBMjU2AGNsaWVudCBoZWxsbywgYWRkaW5nIHNlc3Npb24gdGlja2V0IGV4dGVuc2lvbgBmb3VuZCBhbHBuIGV4dGVuc2lvbgBzc2xfcmVzZW5kX2hlbGxvX3JlcXVlc3QATUJFRFRMU19LRVlfRVhDSEFOR0VfRUNESF9SU0FfRU5BQkxFRABVBCsAJXNLZXkgQWdyZWVtZW50AENBTUVMTElBLTI1Ni1DVFIAUEVNIC0gUHJpdmF0ZSBrZXkgcGFzc3dvcmQgY2FuJ3QgYmUgZW1wdHkAUG9zdGFsIGNvZGUAVExTLURIRS1SU0EtV0lUSC1BRVMtMjU2LUNCQy1TSEEyNTYAc2VuZGluZyBzZXNzaW9uIHRpY2tldCBvZiBsZW5ndGggJWQAdW5rbm93biBleHRlbnNpb24gZm91bmQ6ICVkIChpZ25vcmluZykAZl9yZWN2IHJldHVybmVkICVkIGJ5dGVzIGJ1dCBvbmx5ICVsdSB3ZXJlIHJlcXVlc3RlZABNQkVEVExTX1BLX1BBUlNFX0VDX0VYVEVOREVEAHBzZXVkb255bQAlc0tleSBDZXJ0IFNpZ24AQ0FNRUxMSUEtMTI4LUdDTQBQRU0gLSBHaXZlbiBwcml2YXRlIGtleSBwYXNzd29yZCBkb2VzIG5vdCBhbGxvdyBmb3IgY29ycmVjdCBkZWNyeXB0aW9uAHBvc3RhbENvZGUAVExTLURIRS1SU0EtV0lUSC1BRVMtMTI4LUNCQy1TSEEAPT4gcGFyc2Ugc2VydmVyIGhlbGxvAHJlY2VpdmVkIEZBTExCQUNLX1NDU1YAPT4gZmx1c2ggb3V0cHV0AE1CRURUTFNfRVJST1JfU1RSRVJST1JfRFVNTVkAVQRBACVzQ1JMIFNpZ24AAAAFAEHw1AEL4QWcAAAAnAAAAIQAAACFAAAAQ0FNRUxMSUEtMTkyLUdDTQBQRU0gLSBVbmF2YWlsYWJsZSBmZWF0dXJlLCBlLmcuIGhhc2hpbmcvZW5jcnlwdGlvbiBjb21iaW5hdGlvbgBVBAQAVExTLURIRS1SU0EtV0lUSC1BRVMtMjU2LUNCQy1TSEEAbWJlZHRsc19zc2xfcmVhZF9yZWNvcmQAaW5hcHJvcHJpYXRlIGZhbGxiYWNrADw9IGZsdXNoIG91dHB1dABNQkVEVExTX0dFTlBSSU1FAGdlbmVyYXRpb25RdWFsaWZpZXIAJXNFbmNpcGhlciBPbmx5AENBTUVMTElBLTI1Ni1HQ00AUEVNIC0gQmFkIGlucHV0IHBhcmFtZXRlcnMgdG8gZnVuY3Rpb24AaWQtYXQtc3VyTmFtZQBUTFMtREhFLVJTQS1XSVRILUFFUy0yNTYtQ0NNAHJlbmVnb3RpYXRpb24gcmVxdWVzdGVkLCBidXQgbm90IGhvbm9yZWQgYnkgc2VydmVyAHJlY2VpdmVkIFRMU19FTVBUWV9SRU5FR09USUFUSU9OX0lORk8gAG1lc3NhZ2UgbGVuZ3RoOiAlZCwgb3V0X2xlZnQ6ICVkAE1CRURUTFNfRlNfSU8AVQQsACVzRGVjaXBoZXIgT25seQBDQU1FTExJQS0xMjgtQ0NNAFBLIC0gTWVtb3J5IGFsbG9jYXRpb24gZmFpbGVkAFN1cm5hbWUAVExTLURIRS1SU0EtV0lUSC1BRVMtMjU2LUNDTS04AG5vbi1oYW5kc2hha2UgbWVzc2FnZSBkdXJpbmcgcmVuZWdvAHJlY2VpdmVkIFJFTkVHT1RJQVRJT04gU0NTViBkdXJpbmcgcmVuZWdvdGlhdGlvbgBzc2wtPmZfc2VuZABNQkVEVExTX1BLX1JTQV9BTFRfU1VQUE9SVABkb21haW5Db21wb25lbnQAPz8/AAAABQBB8NoBC4kGnQAAAJ0AAACHAAAAiAAAAENBTUVMTElBLTE5Mi1DQ00AUEsgLSBUeXBlIG1pc21hdGNoLCBlZyBhdHRlbXB0IHRvIGVuY3J5cHQgd2l0aCBhbiBFQ0RTQSBrZXkAU04AVExTLURIRS1SU0EtV0lUSC1BRVMtMTI4LUNDTQBiYWQgc2VydmVyIGhlbGxvIG1lc3NhZ2UAbGVnYWN5IHJlbmVnb3RpYXRpb24sIGJyZWFraW5nIG9mZiBoYW5kc2hha2UAZl9zZW5kIHJldHVybmVkICVkIGJ5dGVzIGJ1dCBvbmx5ICVsdSBieXRlcyB3ZXJlIHNlbnQATUJFRFRMU19QS0NTMV9WMTUACZImiZPyLGQBGQAlcyVzAENBTUVMTElBLTI1Ni1DQ00AUEsgLSBCYWQgaW5wdXQgcGFyYW1ldGVycyB0byBmdW5jdGlvbgBVBCoAVExTLURIRS1SU0EtV0lUSC1BRVMtMTI4LUNDTS04AHJlY2VpdmVkIGhlbGxvIHZlcmlmeSByZXF1ZXN0AHJlbmVnb3RpYXRpb25faW5mbyBleHRlbnNpb24gbWlzc2luZyAoc2VjdXJlKQA9PiBtYmVkdGxzX3NzbF9yZXNlbmQATUJFRFRMU19QS0NTMV9WMjEAREMAVGhlIGNlcnRpZmljYXRlIHZhbGlkaXR5IGhhcyBleHBpcmVkAERFUy1FQ0IAUEsgLSBSZWFkL3dyaXRlIG9mIGZpbGUgZmFpbGVkAGlkLWF0LWdpdmVuTmFtZQBUTFMtREhFLVJTQS1XSVRILUNBTUVMTElBLTEyOC1DQkMtU0hBMjU2ADw9IHBhcnNlIHNlcnZlciBoZWxsbwBsZWdhY3kgcmVuZWdvdGlhdGlvbiBub3QgYWxsb3dlZAA8PSBtYmVkdGxzX3NzbF9yZXNlbmQATUJFRFRMU19TRUxGX1RFU1QAVGhlIGNlcnRpZmljYXRlIGhhcyBiZWVuIHJldm9rZWQgKGlzIG9uIGEgQ1JMKQAAAwAAAJ4AAACfAEGQ4QELvQKgAAAAoQAAAKIAAACjAAAAREVTLUVERS1FQ0IAUEsgLSBVbnN1cHBvcnRlZCBrZXkgdmVyc2lvbgBHaXZlbiBuYW1lAFRMUy1ESEUtUlNBLVdJVEgtQ0FNRUxMSUEtMjU2LUNCQy1TSEEyNTYAc2VydmVyIGhlbGxvLCB2ZXJzaW9uAHJlbmVnb3RpYXRpb25faW5mbyBleHRlbnNpb24gcHJlc2VudCAobGVnYWN5KQA9PiBtYmVkdGxzX3NzbF9mbGlnaHRfdHJhbnNtaXQATUJFRFRMU19TU0xfQUxMX0FMRVJUX01FU1NBR0VTAFRoZSBjZXJ0aWZpY2F0ZSBDb21tb24gTmFtZSAoQ04pIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGV4cGVjdGVkIENOAAMAAACkAAAApQBB5OMBC+UCpgAAAKcAAACoAAAAqQAAAERFUy1FREUzLUVDQgBQSyAtIEludmFsaWQga2V5IHRhZyBvciB2YWx1ZQBHTgBUTFMtREhFLVJTQS1XSVRILUNBTUVMTElBLTEyOC1DQkMtU0hBAHNlcnZlciB2ZXJzaW9uIG91dCBvZiBib3VuZHMgLSAgbWluOiBbJWQ6JWRdLCBzZXJ2ZXI6IFslZDolZF0sIG1heDogWyVkOiVkXQBnb3QgY2lwaGVyc3VpdGVzIGluIGNvbW1vbiwgYnV0IG5vbmUgb2YgdGhlbSB1c2FibGUAaW5pdGlhbGlzZSBmbGlnaHQgdHJhbnNtaXNzaW9uAE1CRURUTFNfU1NMX0VOQ1JZUFRfVEhFTl9NQUMAVGhlIGNlcnRpZmljYXRlIGlzIG5vdCBjb3JyZWN0bHkgc2lnbmVkIGJ5IHRoZSB0cnVzdGVkIENBAAAABAAAAKQAAAClAEHg5gELjQmqAAAAqwAAAKgAAACpAAAAREVTLUNCQwBQSyAtIEtleSBhbGdvcml0aG0gaXMgdW5zdXBwb3J0ZWQgKG9ubHkgUlNBIGFuZCBFQyBhcmUgc3VwcG9ydGVkKQBVBCsAVExTLURIRS1SU0EtV0lUSC1DQU1FTExJQS0yNTYtQ0JDLVNIQQBzZXJ2ZXIgaGVsbG8sIGN1cnJlbnQgdGltZTogJWx1AGdvdCBubyBjaXBoZXJzdWl0ZXMgaW4gY29tbW9uAHN3YXAgZXBvY2hzIHRvIHNlbmQgZmluaXNoZWQgbWVzc2FnZQBNQkVEVExTX1NTTF9FWFRFTkRFRF9NQVNURVJfU0VDUkVUAFRoZSBDUkwgaXMgbm90IGNvcnJlY3RseSBzaWduZWQgYnkgdGhlIHRydXN0ZWQgQ0EAREVTLUVERS1DQkMAUEsgLSBQcml2YXRlIGtleSBwYXNzd29yZCBjYW4ndCBiZSBlbXB0eQBpZC1hdC1pbml0aWFscwBUTFMtREhFLVJTQS1XSVRILUNBTUVMTElBLTEyOC1HQ00tU0hBMjU2AHNlcnZlciBoZWxsbywgcmFuZG9tIGJ5dGVzAHNlbGVjdGVkIGNpcGhlcnN1aXRlOiAlcwBmcmFnbWVudGluZyBoYW5kc2hha2UgbWVzc2FnZSAoJXUgPiAldSkATUJFRFRMU19TU0xfRkFMTEJBQ0tfU0NTVgBUaGUgQ1JMIGlzIGV4cGlyZWQAREVTLUVERTMtQ0JDAFBLIC0gR2l2ZW4gcHJpdmF0ZSBrZXkgcGFzc3dvcmQgZG9lcyBub3QgYWxsb3cgZm9yIGNvcnJlY3QgZGVjcnlwdGlvbgBJbml0aWFscwBUTFMtREhFLVJTQS1XSVRILUNBTUVMTElBLTI1Ni1HQ00tU0hBMzg0AHNlcnZlciBoZWxsbywgYmFkIGNvbXByZXNzaW9uOiAlZABjbGllbnQgaGVsbG8gdjMsIHNpZ25hdHVyZV9hbGdvcml0aG0gZXh0OiAlZABoYW5kc2hha2UgaGVhZGVyAE1CRURUTFNfU1NMX0NCQ19SRUNPUkRfU1BMSVRUSU5HAENlcnRpZmljYXRlIHdhcyBtaXNzaW5nAENIQUNIQTIwAFBLIC0gVGhlIHB1YmtleSB0YWcgb3IgdmFsdWUgaXMgaW52YWxpZCAob25seSBSU0EgYW5kIEVDIGFyZSBzdXBwb3J0ZWQpAGluaXRpYWxzAFRMUy1ESEUtUlNBLVdJVEgtM0RFUy1FREUtQ0JDLVNIQQBjaXBoZXJzdWl0ZSBpbmZvIGZvciAlMDR4IG5vdCBmb3VuZABubyBoYXNoIGFsZ29yaXRobSBmb3Igc2lnbmF0dXJlIGFsZ29yaXRobSAlZCAtIHNob3VsZCBub3QgaGFwcGVuAG1iZWR0bHNfc3NsX3dyaXRlX3JlY29yZABNQkVEVExTX1NTTF9SRU5FR09USUFUSU9OAENlcnRpZmljYXRlIHZlcmlmaWNhdGlvbiB3YXMgc2tpcHBlZAAAAAAJAEGI8AELnQKsAAAArQAAAK0AAACuAAAArwAAAENIQUNIQTIwLVBPTFkxMzA1AFBLIC0gVGhlIGFsZ29yaXRobSB0YWcgb3IgdmFsdWUgaXMgaW52YWxpZABVBCwAVExTLVJTQS1XSVRILUFFUy0yNTYtR0NNLVNIQTM4NABzZXJ2ZXIgaGVsbG8sIHNlc3Npb24gaWQgbGVuLjogJWQAPD0gcGFyc2UgY2xpZW50IGhlbGxvADw9IG1iZWR0bHNfc3NsX2ZsaWdodF90cmFuc21pdABNQkVEVExTX1NTTF9NQVhfRlJBR01FTlRfTEVOR1RIAE90aGVyIHJlYXNvbiAoY2FuIGJlIHVzZWQgYnkgdmVyaWZ5IGNhbGxiYWNrKQAAAAkAQcTyAQsNsAAAALAAAACxAAAAsgBB5PIBC94BAQAAAAABAAABAQAAAAABAAEAAQAAAQEAAQEBAAAAAAEBAAABAAEAAQEBAAEAAAEBAQABAQABAQEBAQEBAAAAAAAAAAEAAAEAAAABAQABAAAAAQABAAEBAAABAQEBAAAAAQAAAQEAAQABAAEBAQEAAAEBAAEBAQEAAQEBAUAQABAAEAAAAAAEAEAQBBAAAAAQQBAAEEAAAAAAAAAQQAAEAAAABBBAEAQQABAEAAAQBBBAEAQAABAAAEAAAAAAAAQQQAAAEAAQABBAEAAAABAEAEAABABAAAQQABAEEEAQAEHM9AELpQRAAAQQQAAAEAAQABBAEAQAAAAEAEAQBAAAAAQAABAEEAAQAABAAAAAQAAEEAAQAABAEAQAABAAEEAAAABAAAAQAAAEEEAABBAAAAAQAAAEAEAQABAAAAAAQBAEEEAABABAAAAQAAAEEAAQABBAEAAQAAAAAEAQBBAAEAQAABAEAEAQAABAEAAAQAAEAAAAABAAEAQQEAAAIAAAQCAAQAAAEEBAIAAAQCAQAAAAEEBAIAAAQAAAQAAgEEBAAAAAQAAQAAAgEABAAABAACAAAAAgEEAAAAAAAAAQAEAAEEAAIABAAAAAQEAAEEAAIBAAAAAQAEAgEABAIAAAAAAQQEAAAEBAIBBAAAAAQEAAAEBAIAAAACAAQAAgEAAAABAAQCAAQEAAEEBAIAAAQAAQQAAAEAAAIAAAQAAAQAAgAAAAIBBAAAAQAAAgEEBAIABAQAAAAEAgEEBAAABAQCAAAAAAEABAIBAAAAAAQAAAAABAIBBAQAAAQAAAEABAABBAACAAAAAAAEBAIAAAACAQAEAAEEAAIAEggACBIAAAgSAAAIAAAACAIIAAgQCAAAEAgAABIAAAAAAAAAAggAAAIIAAgSCAAIEAAAAAAAAAgACAAAEAgAABAAAAACAAAAAAgAABIIAAgAAAAAAAgAABIAAAgCAAAIEAgAABAAAAgCAAAIAAgAAAIAAAgCCAAIEggACBAAAAgACAAAEAgAAAIIAAgSCAAIEAQf34AQvlCyCAAIAgAACAAIAAgQCAAAEAAAABIIAAgSAAAIEgAACAAAAAgSCAAIEAAAABAAAAACAAAAEAgAABIAAAgCCAAIEAgAABIAAAgCAAAAAAgAABIIAAgAAAAAAAgAAAIAAAgCCAACCAEIAAgACAAIAAACCAEAAAABAAIAAAACAAEIAggACAIAAAgCCAEIAAgBCAAAAAgACAAIAAABAAIAAAACAAEIAAgBAAIAAQACCAAIAAAAAAAAAAgACAAAAggBAAAAAQgCAAEAAgAACAAAAAAACAEAAggAAAAIAQgAAAEIAggAAAAAAAACCAEAAgABCAAAAQACCAAIAAABCAAIAQgACAAAAAABCAAIAAgCAAAAAggBCAIIAQACAAAAAAgAAAAAAAgCCAAAAAgBCAAAAQACAAAIAgABAAIIAAgCAAAIAgABAAAIAQAAAAAAAAgACAIIAAAAAAAIAgABCAIIAQgACAEAAAACAAAgAgBAIIAAQAAAAAAAgAAAIIAAQCCCAAAAggBAIIIAQAACAAAAAAAAIAAAQCAAAAAAAABAIAIAQCCAAAAAgABAIIIAACACAAAAgABAIAAAQAACAEAAggBAIAIAAAACAEAAgAAAIIAAACCCAEAAggAAIAAAAAAAAEAAggAAAAAAQACCAAAAAgAAIIAAQCCAAEAgAgBAIAIAQCAAAAAgAgAAAAAAQACAAEAAAgAAAIIAQCCAAAAgggAAAIIAQCCAAAAgAABAIIIAQAACAEAAggAAAAAAACAAAAAgggBAAAAAACCCAAAAAgBAAIAAACAAAEAAgABAAIAAACACAAAAEAAAABCAIAAAgCAAEAQgAACAAAAQAAAAAAQAAACAIAAQhAAAAIAAABAAIAAQhAAAEAQgAACEIAAQgAAAAAQAAAAAIAAAhAAAAIQAAAAAAAAQBAAAEIQgABCEIAAQACAAAIQgABAEAAAAAAAAAAQgABCAIAAAACAAAAQgABCAAAAAgAAAEAQgABAAAAAAACAAAAQAAACAIAAQBCAAEIQAABAAIAAABAAAAIQgABCAIAAQhAAAEAAAAAAAIAAAhCAAEIQgABCAAAAABCAAEIQgAACAIAAAAAAAAIQAAAAEIAAQgAAAEAAgABAEAAAAgAAAAAAAAACEAAAQgCAAEAQAgCAAAAAgIIAAAAAAgAAggAAgAIAAAAAAgCAgAAAgAICAACAAgAAAgIAAAIAAACAAgCAggIAAIAAAACCAgCAAAAAAAICAAAAAACAggAAgAAAAICAAAAAggIAAIICAICAAgCAAgAAgIAAAACAAgCAAgIAAAACAICCAACAAAAAAAIAAICCAAAAAgIAAIACAIAAAAAAgAAAgIIAAIACAAAAAAAAgAACAACAAgCAggAAgAICAAACAACAAAAAAAACAACCAgCAAgAAAIAAAAACAgCAggIAAAACAICAAACAgAIAAAIAAACCAgCAAgIAgAAAAACCAgCAgAIAAAACAACCAACAgAABAEBAAAAAAAAAQAEBAEBBAABAQQEAQAEAAAAAAABAAAEAAAABAEBBAQBAQAEAAAEBAABBAABAQAAAAEEAAAABAQAAAAEAAEABAABAAQBAAAEAQAAAAEBAAABAQQEAAEEAAEABAAAAQQAAAEEAAEAAAAAAAQEAAAEBAEAAAAAAQAAAQAEBAEBBAAAAAAAAQEABAEBAAAAAQAAAAEABAAABAABAQAAAQAABAEABAAAAQAEAAAEAAAABAQAAQQEAQAEBAEBBAABAAAAAQEEBAABBAAAAQQEAAAEBAEAAAQBAQQEAAAABAABAAQAAQAAAAAEAAEAAAQBAAAAAAAEAAEBBQAAABkACQKRKwAACAAAABwAAAIhLQAABAAAABgAgAFuLgAABwAAABsAgAHGLwAAAwAAABcAAAEwMQAADAAAABYAAAFtMgAABgAAABoAAAF7MwAAAgAAABUA4ADXNAAACwAAABQA4AAEVAAAAQAAABMAwAA4VQAACgAAABIAwABeVgBB8IQCC6EB///////////+////////////////////AAAAAAAAAACxuUbB7N64/kkwJHKr6acP54Cc5RkFIWQAAAAAAAAAABIQ/4L9Cv/0AIihQ+sgv3z2kDCwDqiNGAAAAAAAAAAAEUh5HqF3+XPVzSRr7REQY3jayP+VKxkHAAAAAAAAAAAxKNK0sclrFDb43pn///////////////8AAAAAAAAAAAEAQZyGAgugAf////////////////////8AAAAAtP9VI0M5Cye62L/Xt7BEUFYyQfWrswQMhQoFtAAAAAAhHVwR1oAyNCIRwlbTwQNKuZATMn+/tGu9DA63AAAAADR+AIWZgdVEZEcHWqB1Q83m3yJM+yP3tYhjN70AAAAAPSpcXEUp3RM+8Ljgohb//////////////////wAAAAD///////////////8AQciHAgu6AwEAAAD/////S2DSJz48zjv2sFPMsAYdZbyGmHZVveuz55M6qtg1xlqWwpjYRTmh9KAz6y2BfQN38kCkY+XmvPhHQizh8tEXa/VRvzdoQLbLzl4xa1czzisWng98Suvnjpt/Gv7iQuNPUSVj/MLKufOEnhenrfrmvP//////////AAAAAP//////////AAAAAAAAAAD//////v/////////////////////////////////////////vKuzT7ciFKp3RLoqNOVbGWocTUI8IFAMSQYH+bpwdGBkt+ONrBY6Y5Oc+4qcvMbO3CnZyOF5UOmwpVb9d8gJVOCpUguBB91mYm6eLYjsdbnStIPMex7GONwWLviLKh6pfDuqQfB1Dep2Bfh3OsWAKwLjwtRMx2ul8FJoovR30+CnckpK/mJ5dbywmlkreFzZzKcXMahns7HqnsEiyDRpY3y039IFNY8f//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wEAQZGLAgtAP1Br1B9F7/E0LD2I33M1B7+xO73AUhZ7k37sUTkZVuEJ8Y6RibS48xWzmVty2qLuQIW2oCGakh+aHI5huT6VUQBB4IsCC0FmveXCMX5++ZtCaoXBs0gz3qj/oifBHf4oWefvd15Lobo9TWtgryj4IbU/BTmBZJxCtJUjZss+ns3pBAS3Bo6FxgBBsIwCC0JQZtGfdpS+iEDCcqKGcDw1YQetPwG5UMVAJvRemXLulyxmPicXva8XaESbV0lE9ZjZG30stF+KXATAO5p4aik5GAEAQYCNAgtCCWQ4kR63b7uuR5yJuMm1O9ClCfdIAcx/a5Yvv4OHhlH6//////////////////////////////////////////8BAEHQjQILoQE37v///v////////////////////////8AAAAAAwAAAH1s4Oqx0aUdNPS3gAJ9sCau6VfADvFP2wAAAAAAAAAAnS9e2YiqgkA0hr4V0GNBhKcoVpxtLy+bAAAAAAAAAACN/d50akZpDxf88ib+//////////////8AAAAAAAAAAG3l///+//////////////////////////////8AAAAABQBBgI8CC09cpLe2DmV+D6l1cOTpZ6RpoSj8MN+Z8E0zW0WhAAAAAKVhbVXbS8riWb2wwPcZ4/fW+8qCQjS6f+2fCH4AAAAA97GfdnGp8MqEYezS6NwBAEHcjwILKQEAAAAv/P///v///////////////////////////////////wAAAAAHAEGQkAILwQiYF/gWW4HyWdkozi3b/JsCBwuHzpVioFWsu9z5fma+ebjUEPuP0EecGVSFpki0F/2oCBEO/PukXWXEoyZ32jpIQUE20Ixe0r87oEiv5tyuuv7///////////////////93U24fHUgTICggJtUj9jtuco2DnZAKZj68qe6h21f7qdm1MPNES0rpbFzcJsFVgPvn/3pBMHX27lcwLPx1CVp9tgeM/xjczGvO4fdcKRaElb9817vZtTDzREtK6Wxc3CZiMs6avVNEOsIjvePhJ965r7eB/C9ISyzLV37Lua7Si5dpBC/HVB1cVI7tLRNFd8LJHWEUGkb4l/3E2sM1+H5Up1ZIl4IOHpD3pmG1o3o5jHGNg52QCmY+vKnuodtX+6lT7AcxEwBHh3EaHZApp9OsIxG3fxnasRK0VlTtCXEvFd9B5lB+b10PKG04o4IeuYwmKM4i3ceoBOvUOlBKgaWKD/mRuu9lkROHJ7JPjqK+wqCvBc4KCHI8DBWMPcaCw3sRTFD6loa3OpTJ25UCObR81WLrPqUOiC6m0twH4X23L3xE8BZUtTmLJijOIt3HqAQer9RH4rKH76pG1jY04Cbo6BC9DP7Kf9vjT/F+56NHiGs/wbeBOqai/0XPaPBkHB0VUzwmQQOCQhGBkXchRkYOKCmR+U8FnOFkWOz+KQu3YlLVz5WO67FcpML5IHUdvoplZQTpAjKIOxDDf2uvtjrPpyUErGxuFh+zVlTtCXEvFd9B5lB+b10PKG04o4IeuYzzSDpYVmCqKIXGgi0v/4Eo5oCj5iqhza5CaMabAJtNfXEIM3DKnGPWDtLJs7ONMMsH/MkzrubUP4vE6du4nd2qypT8d02swee5x/IrpxcRf7XImovJ8S4KoTolqFpd7S28Y5jqykE0qBAW+T2N3cuUxUwjrEVxMuKJO2CLMaMweCP3FoBjvQko3eW6XrdQQJhnPgjcypT8d02swee5x/IrpxcRf7XImovJ8S4KoTolqFpd7S28Y5jqykE0qBAW+T0i+Lm8CSI1i2heakBHUG18X325k3to0VCN1NDieB87/44J0PTuYju0wRbZtXCf7YWTakycLjIhWmTZLti95K6BkgjYOg8ezXgGVPCoLyvK0a5jJ4rYS8pbXkhfSkne3LIRgR+IW8UAoBp7pSQA9wny/SJ4z6m/6sDsMmNWXTjefWkAqZyCloe13dpdCIHTsR1HEKx/GWGGQRkmqUxBXD5VcAgzcMqcY9YO0smzs40wywf8yTOu5tQ/i8Tp27id3aoAAAAAAAAAACAcAAAAAAAAQDgAAAAAAABgJAAAAAAAAIBwAAAAAAAAoGwAAAAAAADASAAAAAAAAOBUAAAAAAAAAOEAAAAAAAAg/QAAAAAAAEDZAAAAAAAAYMUAAAAAAACAkQAAAAAAAKCNAAAAAAAAwKkAAAAAAADgtQAAAAAAALMAQeCYAguWCZgvikKRRDdxz/vAtaXbtelbwlY58RHxWaSCP5LVXhyrmKoH2AFbgxK+hTEkw30MVXRdvnL+sd6Apwbcm3Txm8HBaZvkhke+78adwQ/MoQwkbyzpLaqEdErcqbBc2oj5dlJRPphtxjGoyCcDsMd/Wb/zC+DGR5Gn1VFjygZnKSkUhQq3JzghGy78bSxNEw04U1RzCmW7Cmp2LsnCgYUscpKh6L+iS2YaqHCLS8KjUWzHGeiS0SQGmdaFNQ70cKBqEBbBpBkIbDceTHdIJ7W8sDSzDBw5SqrYTk/KnFvzby5o7oKPdG9jpXgUeMiECALHjPr/vpDrbFCk96P5vvJ4ccYirijXmC+KQs1l7yORRDdxLztN7M/7wLW824mBpdu16Ti1SPNbwlY5GdAFtvER8VmbTxmvpII/khiBbdrVXhyrQgIDo5iqB9i+b3BFAVuDEoyy5E6+hTEk4rT/1cN9DFVviXvydF2+crGWFjv+sd6ANRLHJacG3JuUJmnPdPGbwdJK8Z7BaZvk4yVPOIZHvu+11YyLxp3BD2WcrHfMoQwkdQIrWW8s6S2D5KZuqoR0StT7Qb3cqbBctVMRg9qI+Xar32buUlE+mBAytC1txjGoPyH7mMgnA7DkDu++x39Zv8KPqD3zC+DGJacKk0eRp9VvggPgUWPKBnBuDgpnKSkU/C/SRoUKtycmySZcOCEbLu0qxFr8bSxN37OVnRMNOFPeY6+LVHMKZaiydzy7Cmp25q7tRy7JwoE7NYIUhSxykmQD8Uyh6L+iATBCvEtmGqiRl/jQcItLwjC+VAajUWzHGFLv1hnoktEQqWVVJAaZ1iogcVeFNQ70uNG7MnCgahDI0NK4FsGkGVOrQVEIbDcemeuO30x3SCeoSJvhtbywNGNaycWzDBw5y4pB40qq2E5z42N3T8qcW6O4stbzby5o/LLvXe6Cj3RgLxdDb2OleHKr8KEUeMiE7DlkGggCx4woHmMj+v++kOm9gt7rbFCkFXnGsvej+b4rU3Lj8nhxxpxhJurOPifKB8LAIce4htEe6+DN1n3a6njRbu5/T331um8Xcqpn8AammMiixX1jCq4N+b4EmD8RG0ccEzULcRuEfQQj9XfbKJMkx0B7q8oyvL7JFQq+njxMDRCcxGcdQ7ZCPsu+1MVMKn5l/Jwpf1ns+tY6q2/LXxdYR0qMGURs/////////////////////////////////////////////////////////////////wABAgMEBQYHCAn/////////CgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiP///////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAQIEBwMGBQBpbmZpbml0eQBuYW4AQYCiAguhAdF0ngBXnb0qgHBSD///PicKAAAAZAAAAOgDAAAQJwAAoIYBAEBCDwCAlpgAAOH1BRgAAAA1AAAAcQAAAGv////O+///kr///9jEAAAtKyAgIDBYMHgAKG51bGwpAAAAABEACgAREREAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAEQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERERAEGxowILIQsAAAAAAAAAABEACgoREREACgAAAgAJCwAAAAkACwAACwBB66MCCwEMAEH3owILFQwAAAAADAAAAAAJDAAAAAAADAAADABBpaQCCwEOAEGxpAILFQ0AAAAEDQAAAAAJDgAAAAAADgAADgBB36QCCwEQAEHrpAILHg8AAAAADwAAAAAJEAAAAAAAEAAAEAAAEgAAABISEgBBoqUCCw4SAAAAEhISAAAAAAAACQBB06UCCwELAEHf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2wEAANwBAABOMTBfX2N4eGFiaXYxMjFfX3ZtaV9jbGFzc190eXBlX2luZm9FAAAA7MMAAGjEAABcwgAAAAAAALzCAADJAQAA3QEAAMsBAADMAQAA3gEAQbiJAwshAQAAAMkRAAABAAAAkxoAAAEAAADRAwAAAQAAAAAAAAAFAEHkiQMLAbQAQfyJAwsOtQAAALYAAADo7AAAAAQAQZSKAwsBAQBBo4oDCwUK/////wBB6IoDCwLYxABBnIwDCwIQ8QCZvgwEbmFtZQGQvgzzCwANX19hc3NlcnRfZmFpbAEYX19jeGFfYWxsb2NhdGVfZXhjZXB0aW9uAgtfX2N4YV90aHJvdwMMZ2V0dGltZW9mZGF5BAxfX3N5c2NhbGwyMjEFD19fd2FzaV9mZF9jbG9zZQYPX193YXNpX2ZkX3dyaXRlBwpfX3N5c2NhbGw1CAtfX3N5c2NhbGw1NAkOX193YXNpX2ZkX3JlYWQKBWFib3J0CxhfX3dhc2lfZW52aXJvbl9zaXplc19nZXQMEl9fd2FzaV9lbnZpcm9uX2dldA0KX19tYXBfZmlsZQ4LX19zeXNjYWxsOTEPCnN0cmZ0aW1lX2wQFmVtc2NyaXB0ZW5fcmVzaXplX2hlYXARFWVtc2NyaXB0ZW5fbWVtY3B5X2JpZxILc2V0VGVtcFJldDATGmxlZ2FsaW1wb3J0JF9fd2FzaV9mZF9zZWVrFBFfX3dhc21fY2FsbF9jdG9ycxUXX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IWxgJzdGQ6Ol9fMjo6cXVldWU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmRlcXVlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID4gPjo6cXVldWUoKRfdAXN0ZDo6X18yOjpkZXF1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpkZXF1ZSgpGMcCc3RkOjpfXzI6OnF1ZXVlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpkZXF1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+ID46On5xdWV1ZSgpGd4Bc3RkOjpfXzI6OmRlcXVlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46On5kZXF1ZSgpGhlfX2N4eF9nbG9iYWxfYXJyYXlfZHRvci42GxlfX2N4eF9nbG9iYWxfYXJyYXlfZHRvci44HBRzZXJ2ZXJfdDo6c2VydmVyX3QoKR0Wc2Vzc2lvbl90OjpzZXNzaW9uX3QoKR4Vc2VydmVyX3Q6On5zZXJ2ZXJfdCgpHxdzZXNzaW9uX3Q6On5zZXNzaW9uX3QoKSAaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMTAhc3N0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6dmVjdG9yKCkigQFzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX3ZlY3Rvcl9iYXNlKCkjdHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6fnZlY3RvcigpJIQBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX2Fubm90YXRlX2RlbGV0ZSgpIGNvbnN0JYIBc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6fl9fdmVjdG9yX2Jhc2UoKSZTc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OmJlZ2luKCkgY29uc3QnUXN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjplbmQoKSBjb25zdCiXAWJvb2wgc3RkOjpfXzI6Om9wZXJhdG9yIT08dW5zaWduZWQgY2hhciBjb25zdCo+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyIGNvbnN0Kj4gY29uc3QmLCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhciBjb25zdCo+IGNvbnN0JikpPnN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyIGNvbnN0Kj46Om9wZXJhdG9yKigpIGNvbnN0Km1zdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19tYWtlX2l0ZXIodW5zaWduZWQgY2hhciBjb25zdCopIGNvbnN0K60BYm9vbCBzdGQ6Ol9fMjo6b3BlcmF0b3I9PTx1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgY2hhciBjb25zdCo+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyIGNvbnN0Kj4gY29uc3QmLCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhciBjb25zdCo+IGNvbnN0JiksOXN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyIGNvbnN0Kj46Om9wZXJhdG9yKysoKS0IZ2V0TmV4dEkuDW1ha2VQdWJsaWNLZXkvgAFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpiYXNpY19zdHJpbmc8c3RkOjpudWxscHRyX3Q+KGNoYXIgY29uc3QqKTBTc3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjpFQ0RIPjo6b3BlcmF0b3I9KHN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6RUNESD4mJikxMXN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6RUNESD46On5zaGFyZWRfcHRyKCkymQFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6dmVjdG9yKHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jikz8wFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IFdlYkFwaTo6dG9CYXNlNjQ8c3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gPihzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPik0T3N0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Ojp+dmVjdG9yKCk1ZHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OmNfc3RyKCkgY29uc3Q2pAJzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19yZXAsIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZywgc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZz4oc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZyYmLCBzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnJiYpNzBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46Omxlbmd0aChjaGFyIGNvbnN0Kik4oAFzdGQ6Ol9fMjo6cmVtb3ZlX3JlZmVyZW5jZTxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6OkVDREg+Jj46OnR5cGUmJiBzdGQ6Ol9fMjo6bW92ZTxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6OkVDREg+Jj4oc3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjpFQ0RIPiYpOVRzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6OkVDREg+OjpzaGFyZWRfcHRyKHN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6RUNESD4mJik6TXN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6RUNESD46OnN3YXAoc3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjpFQ0RIPiYpOzFzdGQ6Ol9fMjo6X19zaGFyZWRfd2Vha19jb3VudDo6X19yZWxlYXNlX3NoYXJlZCgpPIQCc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6dG9CYXNlNjQ8c3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gPihzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPik9XHN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19hbGxvYygpIGNvbnN0PpEBc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpzZWxlY3Rfb25fY29udGFpbmVyX2NvcHlfY29uc3RydWN0aW9uKHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gY29uc3QmKT+AAXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X192ZWN0b3JfYmFzZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiYpQFJzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6c2l6ZSgpIGNvbnN0QWBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X192YWxsb2NhdGUodW5zaWduZWQgbG9uZylC6wFzdGQ6Ol9fMjo6ZW5hYmxlX2lmPF9faXNfY3BwMTdfZm9yd2FyZF9pdGVyYXRvcjx1bnNpZ25lZCBjaGFyKj46OnZhbHVlLCB2b2lkPjo6dHlwZSBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19jb25zdHJ1Y3RfYXRfZW5kPHVuc2lnbmVkIGNoYXIqPih1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcpQ19zdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19hbm5vdGF0ZV9kZWxldGUoKSBjb25zdERdc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Ojp+X192ZWN0b3JfYmFzZSgpRWNzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpkYXRhKCkgY29uc3RGFWNyZWF0ZV9jcnlwdG9fc2Vzc2lvbkd9c3RkOjpfXzI6OmVuYWJsZV9pZjwhKGlzX2FycmF5PHNlc3Npb25fdD46OnZhbHVlKSwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Ojp0eXBlIHN0ZDo6X18yOjptYWtlX3NoYXJlZDxzZXNzaW9uX3Q+KClInAFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OnB1c2hfYmFjayhzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0JilJhgFzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID46OmFsbG9jYXRlKHVuc2lnbmVkIGxvbmcsIHZvaWQgY29uc3QqKUqNAnN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+OjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiYsIHVuc2lnbmVkIGxvbmcpS7AEc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+ID46OnVuaXF1ZV9wdHI8dHJ1ZSwgdm9pZD4oc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4qLCBzdGQ6Ol9fMjo6X19kZXBlbmRlbnRfdHlwZTxzdGQ6Ol9fMjo6X191bmlxdWVfcHRyX2RlbGV0ZXJfc2ZpbmFlPHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+ID4sIHRydWU+OjpfX2dvb2RfcnZhbF9yZWZfdHlwZSlM8wFzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+ID4gPjo6Z2V0KCkgY29uc3RN3wFzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD46OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiBjb25zdCYpToABc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID46Ol9fc2hhcmVkX3B0cl9lbXBsYWNlKHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PilPUXN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+OjpnZXQoKVDxAXN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gPiA+OjpyZWxlYXNlKClRjQJzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD46Ol9fY3JlYXRlX3dpdGhfY29udHJvbF9ibG9jazxzZXNzaW9uX3QsIHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4oc2Vzc2lvbl90Kiwgc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4qKVL1AXN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gPiA+Ojp+dW5pcXVlX3B0cigpU9YBdm9pZCBzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9fY29uc3RydWN0X29uZV9hdF9lbmQ8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCY+KHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmKVTVAXZvaWQgc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX3B1c2hfYmFja19zbG93X3BhdGg8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCY+KHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmKVUVZGVsZXRlX2NyeXB0b19zZXNzaW9uVq8Cc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QqPjo6X193cmFwX2l0ZXI8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Pio+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kj4gY29uc3QmLCBzdGQ6Ol9fMjo6ZW5hYmxlX2lmPGlzX2NvbnZlcnRpYmxlPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Kj46OnZhbHVlLCB2b2lkPjo6dHlwZSopV68Bc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjplcmFzZShzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCo+KVh5c3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpjYmVnaW4oKSBjb25zdFmUAmRlY2x0eXBlKChmcC5iYXNlKCkpIC0gKGZwMC5iYXNlKCkpKSBzdGQ6Ol9fMjo6b3BlcmF0b3ItPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QqLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Kj4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QqPiBjb25zdCYsIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Kj4gY29uc3QmKVrZAXN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qIHN0ZDo6X18yOjptb3ZlPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kj4oc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+KilbngFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9fZGVzdHJ1Y3RfYXRfZW5kKHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qKVyoAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19pbnZhbGlkYXRlX2l0ZXJhdG9yc19wYXN0KHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qKV0Mc2VuZF9tZXNzYWdlXqEDc3RkOjpfXzI6OnF1ZXVlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpkZXF1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+ID46OnB1c2goc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYpX70Cc3RkOjpfXzI6OmRlcXVlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46OnB1c2hfYmFjayhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JilgEWNvbXBsZXRlU2Vzc2lvbkpTYWVzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBXZWJBcGk6OmZyb21CYXNlNjQ8Y2hhcio+KGNoYXIqKWLtAWNvbXBsZXRlU2Vzc2lvbihzZXNzaW9uX3QqLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+KWNhV2ViQXBpOjpFQ0RIOjpjb21wdXRlU2VjcmV0KHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+KWRcV2ViQXBpOjpDaXBoZXI6OnVwZGF0ZShzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPilllwFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6b3BlcmF0b3I9KHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+JiYpZl9XZWJBcGk6OkNpcGhlcjo6ZmluYWxpemUoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4qKWeBAVdlYkFwaTo6QnVmZmVyQ29udmVydGVyOjpmcm9tQmFzZTY0KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKWgNaXNfYmlnX2VuZGlhbmkQdG9fbGl0dGxlX2VuZGlhbmoJZW5jcnlwdEpTa8QBZW5jcnlwdChzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmLCBzZXNzaW9uX3QgY29uc3QqKWxMc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OmRhdGEoKW1kc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmVnaW4oKSBjb25zdG5ic3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6ZW5kKCkgY29uc3RvlwNzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6dmVjdG9yPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyIGNvbnN0Kj4gPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhciBjb25zdCo+LCBzdGQ6Ol9fMjo6ZW5hYmxlX2lmPChfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPiA+Ojp2YWx1ZSkgJiYgKGlzX2NvbnN0cnVjdGlibGU8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6Oml0ZXJhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhciBjb25zdCo+ID46OnJlZmVyZW5jZT46OnZhbHVlKSwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPiA+Ojp0eXBlKXCjAVdlYkFwaTo6Q2lwaGVyOjp1cGRhdGUoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+KilxCWRlY3J5cHRKU3Jlc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nKClzZ3N0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Om9wZXJhdG9yKz0oY2hhcil0ZmRlY3J5cHQoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QqLCBzZXNzaW9uX3QgY29uc3QqKXVlc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6bGVuZ3RoKCkgY29uc3R2X3N0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9femVybygpd2ZzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2dldF9wb2ludGVyKCl4MHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj46Ol9fd3JhcF9pdGVyKGNoYXIqKXljc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6c2l6ZSgpIGNvbnN0ercBc3RkOjpfXzI6Oml0ZXJhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhcio+ID46OmRpZmZlcmVuY2VfdHlwZSBzdGQ6Ol9fMjo6ZGlzdGFuY2U8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiA+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4pe6UCc3RkOjpfXzI6OmVuYWJsZV9pZjxfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiA+Ojp2YWx1ZSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29uc3RydWN0X2F0X2VuZDxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhcio+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiwgdW5zaWduZWQgbG9uZyl8QnN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyIGNvbnN0Kj46Om9wZXJhdG9yKyhsb25nKSBjb25zdH3zAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gV2ViQXBpOjp0b1N0cmluZzxzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiA+KHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+KX49c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIgY29uc3QqPjo6b3BlcmF0b3IrPShsb25nKX/5A3N0ZDo6X18yOjplbmFibGVfaWY8KF9faXNfY3BwMTdfZm9yd2FyZF9pdGVyYXRvcjxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID46OnZhbHVlKSAmJiAoaXNfY29uc3RydWN0aWJsZTx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4gPjo6cmVmZXJlbmNlPjo6dmFsdWUpLCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID46OnR5cGUgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Omluc2VydDxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIgY29uc3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPimAAYQCc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6dG9TdHJpbmc8c3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gPihzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPimBAcMBc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fbW92ZV9hc3NpZ24oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4pggHsAXN0ZDo6X18yOjpfX2RlcXVlX2Jhc2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6fl9fZGVxdWVfYmFzZSgpgwHkAXN0ZDo6X18yOjpfX2RlcXVlX2Jhc2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6Y2xlYXIoKYQB5wFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OmJlZ2luKCmFAeUBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjplbmQoKYYB5gFzdGQ6Ol9fMjo6X19kZXF1ZV9iYXNlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fYWxsb2MoKYcB6QJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHVuc2lnbmVkIGxvbmcpiAHxAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6fl9fc3BsaXRfYnVmZmVyKCmJAeQBc3RkOjpfXzI6Ol9fZGVxdWVfYmFzZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpiZWdpbigpigHiAXN0ZDo6X18yOjpfX2RlcXVlX2Jhc2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6ZW5kKCmLAa4Gc3RkOjpfXzI6Om9wZXJhdG9yIT0oc3RkOjpfXzI6Ol9fZGVxdWVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIGxvbmcsIDBsPiBjb25zdCYsIHN0ZDo6X18yOjpfX2RlcXVlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBsb25nLCAwbD4gY29uc3QmKYwBtAN2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46OmRlc3Ryb3k8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiopjQGSA3N0ZDo6X18yOjpfX2RlcXVlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBsb25nLCAwbD46Om9wZXJhdG9yKysoKY4B7AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OnNpemUoKSBjb25zdI8B6wFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OnBvcF9mcm9udCgpkAHeAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCB1bnNpZ25lZCBsb25nKZEBogFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8dW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6c2Vjb25kKCmSAecBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjpjbGVhcigpkwHpAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6X19hbGxvYygplAHwAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6Y2FwYWNpdHkoKSBjb25zdJUB6gJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCB1bnNpZ25lZCBsb25nKZYB7QFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OmVtcHR5KCkgY29uc3SXAa4Gc3RkOjpfXzI6Om9wZXJhdG9yPT0oc3RkOjpfXzI6Ol9fZGVxdWVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIGxvbmcsIDBsPiBjb25zdCYsIHN0ZDo6X18yOjpfX2RlcXVlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBsb25nLCAwbD4gY29uc3QmKZgB3wN2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fZGVzdHJveTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4oc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKZkBzAJzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46Ol9fZGVzdHJ1Y3RfYXRfYmVnaW4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqKZoBzAFzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPjo6ZGVzdHJveShzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KimbAUJzdGQ6Ol9fMjo6X19saWJjcHBfZGVhbGxvY2F0ZSh2b2lkKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZymcAWNzdGQ6Ol9fMjo6X0RlYWxsb2NhdGVDYWxsZXI6Ol9fZG9fZGVhbGxvY2F0ZV9oYW5kbGVfc2l6ZV9hbGlnbih2b2lkKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZymdAU5zdGQ6Ol9fMjo6X0RlYWxsb2NhdGVDYWxsZXI6Ol9fZG9fZGVhbGxvY2F0ZV9oYW5kbGVfc2l6ZSh2b2lkKiwgdW5zaWduZWQgbG9uZymeAS1zdGQ6Ol9fMjo6X0RlYWxsb2NhdGVDYWxsZXI6Ol9fZG9fY2FsbCh2b2lkKimfAcoCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiopoAHfAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgdW5zaWduZWQgbG9uZymhAfQCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiA+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCBmYWxzZT4pogG1A3ZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6ZGVzdHJveTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4oc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiopowHgA3ZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6X19kZXN0cm95PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqKaQBMHN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6RUNESD46OnNoYXJlZF9wdHIoKaUBwwFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8dW5zaWduZWQgY2hhciosIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpudWxscHRyX3QsIHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWc+KHN0ZDo6bnVsbHB0cl90JiYsIHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWcmJimmAXpzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTx1bnNpZ25lZCBjaGFyKiwgMCwgZmFsc2U+OjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6bnVsbHB0cl90LCB2b2lkPihzdGQ6Om51bGxwdHJfdCYmKacBgwFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+LCAxLCB0cnVlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbShzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnKagBwAFkZWNsdHlwZSgoZnAuYmFzZSgpKSAtIChmcDAuYmFzZSgpKSkgc3RkOjpfXzI6Om9wZXJhdG9yLTx1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgY2hhcio+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyIGNvbnN0Kj4gY29uc3QmLCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+IGNvbnN0JimpAboBdm9pZCBzdGQ6Ol9fMjo6YWR2YW5jZTxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiYsIHN0ZDo6X18yOjppdGVyYXRvcl90cmFpdHM8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+OjpkaWZmZXJlbmNlX3R5cGUpqgGCAXN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX21vdmVfcmFuZ2UodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyKimrAbIBdW5zaWduZWQgY2hhciogc3RkOjpfXzI6OmNvcHk8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiwgdW5zaWduZWQgY2hhcio+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4sIHVuc2lnbmVkIGNoYXIqKawBZnN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX3JlY29tbWVuZCh1bnNpZ25lZCBsb25nKSBjb25zdK0BnwFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpfX3NwbGl0X2J1ZmZlcih1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JimuAcICc3RkOjpfXzI6OmVuYWJsZV9pZjxfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+Ojp2YWx1ZSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPjo6X19jb25zdHJ1Y3RfYXRfZW5kPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4gPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+LCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+Ka8BvwFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19zd2FwX291dF9jaXJjdWxhcl9idWZmZXIoc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mPiYsIHVuc2lnbmVkIGNoYXIqKbABX3N0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+Jj46On5fX3NwbGl0X2J1ZmZlcigpsQGDAnN0ZDo6X18yOjppdGVyYXRvcl90cmFpdHM8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+OjpkaWZmZXJlbmNlX3R5cGUgc3RkOjpfXzI6Ol9fZGlzdGFuY2U8c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiA+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4sIHN0ZDo6X18yOjpyYW5kb21fYWNjZXNzX2l0ZXJhdG9yX3RhZymyAeIBdm9pZCBzdGQ6Ol9fMjo6X19hZHZhbmNlPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4gPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+Jiwgc3RkOjpfXzI6Oml0ZXJhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID46OmRpZmZlcmVuY2VfdHlwZSwgc3RkOjpfXzI6OnJhbmRvbV9hY2Nlc3NfaXRlcmF0b3JfdGFnKbMByAFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uOjpfQ29uc3RydWN0VHJhbnNhY3Rpb24oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4mLCB1bnNpZ25lZCBsb25nKbQBmgJ2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19jb25zdHJ1Y3RfcmFuZ2VfZm9yd2FyZDxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+LCB1bnNpZ25lZCBjaGFyKj4oc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYsIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx1bnNpZ25lZCBjaGFyKj4sIHVuc2lnbmVkIGNoYXIqJim1AXVzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uOjp+X0NvbnN0cnVjdFRyYW5zYWN0aW9uKCm2AbMBdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OmNvbnN0cnVjdDx1bnNpZ25lZCBjaGFyLCB1bnNpZ25lZCBjaGFyPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXImJim3AXZ1bnNpZ25lZCBjaGFyKiBzdGQ6Ol9fMjo6bW92ZV9iYWNrd2FyZDx1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhcio+KHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciopuAGrAXN0ZDo6X18yOjplbmFibGVfaWY8aXNfdHJpdmlhbGx5X2NvcHlfYXNzaWduYWJsZTx1bnNpZ25lZCBjaGFyPjo6dmFsdWUsIHVuc2lnbmVkIGNoYXIqPjo6dHlwZSBzdGQ6Ol9fMjo6X191bndyYXBfaXRlcjx1bnNpZ25lZCBjaGFyPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+KbkBjgJzdGQ6Ol9fMjo6ZW5hYmxlX2lmPChpc19zYW1lPHN0ZDo6X18yOjpyZW1vdmVfY29uc3Q8dW5zaWduZWQgY2hhcj46OnR5cGUsIHVuc2lnbmVkIGNoYXI+Ojp2YWx1ZSkgJiYgKGlzX3RyaXZpYWxseV9jb3B5X2Fzc2lnbmFibGU8dW5zaWduZWQgY2hhcj46OnZhbHVlKSwgdW5zaWduZWQgY2hhcio+Ojp0eXBlIHN0ZDo6X18yOjpfX2NvcHk8dW5zaWduZWQgY2hhciwgdW5zaWduZWQgY2hhcj4odW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyKim6AVZzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6bWF4X3NpemUoKSBjb25zdLsBVnN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpjYXBhY2l0eSgpIGNvbnN0vAFddW5zaWduZWQgbG9uZyBjb25zdCYgc3RkOjpfXzI6Om1heDx1bnNpZ25lZCBsb25nPih1bnNpZ25lZCBsb25nIGNvbnN0JiwgdW5zaWduZWQgbG9uZyBjb25zdCYpvQHPAXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjx1bnNpZ25lZCBjaGFyKiwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Om51bGxwdHJfdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+KHN0ZDo6bnVsbHB0cl90JiYsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mKb4BV3N0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+Jj46Ol9fYWxsb2MoKb8BfXN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6YWxsb2NhdGUoc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYsIHVuc2lnbmVkIGxvbmcpwAGaAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+Jj46Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uKHVuc2lnbmVkIGNoYXIqKiwgdW5zaWduZWQgbG9uZynBAX1zdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpfQ29uc3RydWN0VHJhbnNhY3Rpb246On5fQ29uc3RydWN0VHJhbnNhY3Rpb24oKcIBjwNzdGQ6Ol9fMjo6ZW5hYmxlX2lmPCgoc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+Ojp2YWx1ZSkgfHwgKCEoX19oYXNfY29uc3RydWN0PHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4sIGJvb2wqLCBib29sPjo6dmFsdWUpKSkgJiYgKGlzX3RyaXZpYWxseV9tb3ZlX2NvbnN0cnVjdGlibGU8Ym9vbD46OnZhbHVlKSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2NvbnN0cnVjdF9iYWNrd2FyZF93aXRoX2V4Y2VwdGlvbl9ndWFyYW50ZWVzPHVuc2lnbmVkIGNoYXI+KHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mLCBib29sKiwgYm9vbCosIGJvb2wqJinDAY4Dc3RkOjpfXzI6OmVuYWJsZV9pZjwoKHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPjo6dmFsdWUpIHx8ICghKF9faGFzX2NvbnN0cnVjdDxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+LCBib29sKiwgYm9vbD46OnZhbHVlKSkpICYmIChpc190cml2aWFsbHlfbW92ZV9jb25zdHJ1Y3RpYmxlPGJvb2w+Ojp2YWx1ZSksIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19jb25zdHJ1Y3RfZm9yd2FyZF93aXRoX2V4Y2VwdGlvbl9ndWFyYW50ZWVzPHVuc2lnbmVkIGNoYXI+KHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mLCBib29sKiwgYm9vbCosIGJvb2wqJinEAb8Bc3RkOjpfXzI6OmVuYWJsZV9pZjwoaXNfbW92ZV9jb25zdHJ1Y3RpYmxlPHVuc2lnbmVkIGNoYXIqPjo6dmFsdWUpICYmIChpc19tb3ZlX2Fzc2lnbmFibGU8dW5zaWduZWQgY2hhcio+Ojp2YWx1ZSksIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjpzd2FwPHVuc2lnbmVkIGNoYXIqPih1bnNpZ25lZCBjaGFyKiYsIHVuc2lnbmVkIGNoYXIqJinFAWlzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19hbm5vdGF0ZV9uZXcodW5zaWduZWQgbG9uZykgY29uc3TGAWJzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19pbnZhbGlkYXRlX2FsbF9pdGVyYXRvcnMoKccBVXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+Jj46OmNsZWFyKCnIAV5zdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpjYXBhY2l0eSgpIGNvbnN0yQGPAXN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcpygHeAXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2NvbnN0cnVjdDx1bnNpZ25lZCBjaGFyLCB1bnNpZ25lZCBjaGFyJj4oc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXImKcsBcXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPjo6Y29uc3RydWN0PHVuc2lnbmVkIGNoYXIsIHVuc2lnbmVkIGNoYXImPih1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciYpzAGXAnN0ZDo6X18yOjplbmFibGVfaWY8KGlzX3NhbWU8c3RkOjpfXzI6OnJlbW92ZV9jb25zdDx1bnNpZ25lZCBjaGFyPjo6dHlwZSwgdW5zaWduZWQgY2hhcj46OnZhbHVlKSAmJiAoaXNfdHJpdmlhbGx5X2NvcHlfYXNzaWduYWJsZTx1bnNpZ25lZCBjaGFyPjo6dmFsdWUpLCB1bnNpZ25lZCBjaGFyKj46OnR5cGUgc3RkOjpfXzI6Ol9fbW92ZV9iYWNrd2FyZDx1bnNpZ25lZCBjaGFyLCB1bnNpZ25lZCBjaGFyPih1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqKc0BdHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6bWF4X3NpemUoc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiBjb25zdCYpzgFddW5zaWduZWQgbG9uZyBjb25zdCYgc3RkOjpfXzI6Om1pbjx1bnNpZ25lZCBsb25nPih1bnNpZ25lZCBsb25nIGNvbnN0JiwgdW5zaWduZWQgbG9uZyBjb25zdCYpzwFdc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpjYXBhY2l0eSgpIGNvbnN00AG+AXVuc2lnbmVkIGxvbmcgY29uc3QmIHN0ZDo6X18yOjptYXg8dW5zaWduZWQgbG9uZywgc3RkOjpfXzI6Ol9fbGVzczx1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nPiA+KHVuc2lnbmVkIGxvbmcgY29uc3QmLCB1bnNpZ25lZCBsb25nIGNvbnN0Jiwgc3RkOjpfXzI6Ol9fbGVzczx1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nPinRAb4BdW5zaWduZWQgbG9uZyBjb25zdCYgc3RkOjpfXzI6Om1pbjx1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6X19sZXNzPHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmc+ID4odW5zaWduZWQgbG9uZyBjb25zdCYsIHVuc2lnbmVkIGxvbmcgY29uc3QmLCBzdGQ6Ol9fMjo6X19sZXNzPHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmc+KdIBnwFzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fbWF4X3NpemUoc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+IGNvbnN0JinTAWxzdGQ6Ol9fMjo6X19sZXNzPHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmc+OjpvcGVyYXRvcigpKHVuc2lnbmVkIGxvbmcgY29uc3QmLCB1bnNpZ25lZCBsb25nIGNvbnN0JikgY29uc3TUATRzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+OjptYXhfc2l6ZSgpIGNvbnN01QG3AXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mLCAxLCBmYWxzZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiYsIHZvaWQ+KHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mKdYBSHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj46OmFsbG9jYXRlKHVuc2lnbmVkIGxvbmcsIHZvaWQgY29uc3QqKdcBWnN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjx1bnNpZ25lZCBjaGFyKiwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpzZWNvbmQoKdgBK3N0ZDo6X18yOjpfX3Rocm93X2xlbmd0aF9lcnJvcihjaGFyIGNvbnN0KinZATlzdGQ6Ol9fMjo6X19saWJjcHBfYWxsb2NhdGUodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZynaASxzdGQ6Omxlbmd0aF9lcnJvcjo6bGVuZ3RoX2Vycm9yKGNoYXIgY29uc3QqKdsBnwFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19hbm5vdGF0ZV9jb250aWd1b3VzX2NvbnRhaW5lcih2b2lkIGNvbnN0Kiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCB2b2lkIGNvbnN0KikgY29uc3TcAW9zdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpfX2Rlc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBjaGFyKindAU1zdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+OjpkZWFsbG9jYXRlKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nKd4BmQFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiY+OjpfX2Rlc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBjaGFyKiwgc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIGZhbHNlPinfASxzdGQ6Ol9fMjo6X19zaGFyZWRfY291bnQ6Ol9fcmVsZWFzZV9zaGFyZWQoKeABPmxvbmcgc3RkOjpfXzI6Ol9fbGliY3BwX2F0b21pY19yZWZjb3VudF9kZWNyZW1lbnQ8bG9uZz4obG9uZyYp4QFUc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpjbGVhcigp4gFuc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2Rlc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBjaGFyKinjAWhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2lzX2xvbmcoKSBjb25zdOQBbnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fZ2V0X2xvbmdfc2l6ZSgpIGNvbnN05QFvc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19nZXRfc2hvcnRfc2l6ZSgpIGNvbnN05gG+AXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fcmVwLCAwLCBmYWxzZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW0oc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZynnAXhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpiYXNpY19zdHJpbmcodW5zaWduZWQgbG9uZywgY2hhcinoAThzdGQ6Ol9fMjo6X19zaGFyZWRfd2Vha19jb3VudDo6X19zaGFyZWRfd2Vha19jb3VudChsb25nKekBLnN0ZDo6X18yOjpfX3NoYXJlZF9jb3VudDo6X19zaGFyZWRfY291bnQobG9uZynqAS1zdGQ6Ol9fMjo6X19zaGFyZWRfd2Vha19jb3VudDo6X19hZGRfc2hhcmVkKCnrAShzdGQ6Ol9fMjo6X19zaGFyZWRfY291bnQ6Ol9fYWRkX3NoYXJlZCgp7AE+bG9uZyBzdGQ6Ol9fMjo6X19saWJjcHBfYXRvbWljX3JlZmNvdW50X2luY3JlbWVudDxsb25nPihsb25nJintAXZzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpvcGVyYXRvcltdKHVuc2lnbmVkIGxvbmcpIGNvbnN07gFwc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6b3BlcmF0b3JbXSh1bnNpZ25lZCBsb25nKe8BvAFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpiYXNpY19zdHJpbmcoc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYmKfABbHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fZ2V0X3Nob3J0X3BvaW50ZXIoKfEBG3N0ZDo6ZXhjZXB0aW9uOjpleGNlcHRpb24oKfIBJXN0ZDo6X18yOjpfX3Rocm93X2JhZF9mdW5jdGlvbl9jYWxsKCnzATBzdGQ6Ol9fMjo6YmFkX2Z1bmN0aW9uX2NhbGw6OmJhZF9mdW5jdGlvbl9jYWxsKCn0AesBc3RkOjpfXzI6Ol9fZGVxdWVfYmFzZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2RlcXVlX2Jhc2UoKfUB8AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46Ol9fc3BsaXRfYnVmZmVyKCn2AfUBc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fY29tcHJlc3NlZF9wYWlyPGludCwgc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZz4oaW50JiYsIHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWcmJin3AWNzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTx1bnNpZ25lZCBsb25nLCAwLCBmYWxzZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08aW50LCB2b2lkPihpbnQmJin4AXtzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmNhcGFjaXR5KCkgY29uc3T5AXdzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OnNpemUoKSBjb25zdPoBeXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmNsZWFyKCn7AYIBc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6Y2FwYWNpdHkoKSBjb25zdPwBxwFzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHVuc2lnbmVkIGxvbmcp/QGlAXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9fZGVzdHJ1Y3RfYXRfZW5kKHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qKf4BcnN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCB1bnNpZ25lZCBsb25nKf8B3AF2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmRlc3Ryb3k8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiopgAKHAnZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19kZXN0cm95PHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiopgQJgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID46OmRlc3Ryb3koc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiopggKWAnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gV2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OnRvU3RyaW5nPHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4sIFdlYkFwaTo6RW5jb2RpbmcpgwKuAWRlY2x0eXBlKGZwLmVuZCgpKSBzdGQ6Ol9fMjo6ZW5kPHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+ID4oc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4mKYQC8AFzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6dG9FbmNvZGluZzxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8dW5zaWduZWQgY2hhcio+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHVuc2lnbmVkIGNoYXIqPiwgV2ViQXBpOjpFbmNvZGluZymFAmBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6cHVzaF9iYWNrKHVuc2lnbmVkIGNoYXImJimGAjVXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6Z2V0RW5jb2RlcihXZWJBcGk6OkVuY29kaW5nKYcCtAFXZWJBcGk6OkJ1ZmZlckNvbnZlcnRlcjo6Y29udmVydCh1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmZ1bmN0aW9uPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPimIAnpzdGQ6Ol9fMjo6ZnVuY3Rpb248dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+Ojp+ZnVuY3Rpb24oKYkCgQF2b2lkIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2NvbnN0cnVjdF9vbmVfYXRfZW5kPHVuc2lnbmVkIGNoYXI+KHVuc2lnbmVkIGNoYXImJimKAoABdm9pZCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19wdXNoX2JhY2tfc2xvd19wYXRoPHVuc2lnbmVkIGNoYXI+KHVuc2lnbmVkIGNoYXImJimLAtMBc3RkOjpfXzI6OmZ1bmN0aW9uPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6b3BlcmF0b3IoKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSBjb25zdIwCcXN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Ojp2ZWN0b3IodW5zaWduZWQgbG9uZywgdW5zaWduZWQgY2hhciBjb25zdCYpjQK3AnN0ZDo6X18yOjpmdW5jdGlvbjx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46OmZ1bmN0aW9uPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHZvaWQ+KGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpjgJzV2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OmhleGlmeSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKY8CuQJzdGQ6Ol9fMjo6ZnVuY3Rpb248dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpmdW5jdGlvbjx2b2lkICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdm9pZD4odm9pZCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpkAJ1V2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6Om1ha2VDb3B5KHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpkQKQAXN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3BvbGljeV9mdW5jPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6fl9fcG9saWN5X2Z1bmMoKZIC7gFzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19wb2xpY3lfZnVuYzx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Om9wZXJhdG9yKCkodW5zaWduZWQgY2hhciomJiwgdW5zaWduZWQgbG9uZyYmLCB1bnNpZ25lZCBsb25nKiYmLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiYmLCB1bnNpZ25lZCBsb25nJiYpIGNvbnN0kwJ9c3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fY29uc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyIGNvbnN0JimUAs8Cc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fcG9saWN5X2Z1bmM8dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX3BvbGljeV9mdW5jPGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHZvaWQ+KGludCAoKiYmKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSmVAiJzdGQ6Ol9fMjo6aGV4KHN0ZDo6X18yOjppb3NfYmFzZSYplgJ9c3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nc3RyZWFtKHVuc2lnbmVkIGludCmXAnVzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6b3BlcmF0b3I8PChzdGQ6Ol9fMjo6aW9zX2Jhc2UmICgqKShzdGQ6Ol9fMjo6aW9zX2Jhc2UmKSmYAjZzdGQ6Ol9fMjo6X19pb21fdDQ8Y2hhcj4gc3RkOjpfXzI6OnNldGZpbGw8Y2hhcj4oY2hhcimZAs4Bc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mIHN0ZDo6X18yOjpvcGVyYXRvcjw8PHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+KHN0ZDo6X18yOjpiYXNpY19vc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6Ol9faW9tX3Q0PGNoYXI+IGNvbnN0JimaAhNzdGQ6Ol9fMjo6c2V0dyhpbnQpmwLOAXN0ZDo6X18yOjpiYXNpY19vc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+JiBzdGQ6Ol9fMjo6b3BlcmF0b3I8PDxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPihzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjpfX2lvbV90NiBjb25zdCYpnAJoc3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6c3RyKCkgY29uc3SdAnJzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojp+YmFzaWNfc3RyaW5nc3RyZWFtKCmeAtECc3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fcG9saWN5X2Z1bmM8dm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpfX3BvbGljeV9mdW5jPHZvaWQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB2b2lkPih2b2lkICgqJiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpKZ8ClQFzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19wb2xpY3lfaW52b2tlcjx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fcG9saWN5X2ludm9rZXIoKaAC3AFib29sIHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX25vdF9udWxsPGludCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+KGludCAoKikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykpoQL0A3N0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3BvbGljeV9pbnZva2VyPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiBzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19wb2xpY3lfaW52b2tlcjx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fY3JlYXRlPHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2RlZmF1bHRfYWxsb2NfZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPigpogKSAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3BvbGljeV9pbnZva2VyPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6X19jYWxsX2VtcHR5KHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3BvbGljeV9zdG9yYWdlIGNvbnN0KiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZymjAvsDdm9pZCBzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19wb2xpY3lfaW52b2tlcjx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fY2FsbF9pbXBsPHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2RlZmF1bHRfYWxsb2NfZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPihzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19wb2xpY3lfc3RvcmFnZSBjb25zdCosIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcppALMAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2RlZmF1bHRfYWxsb2NfZnVuYzxpbnQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Om9wZXJhdG9yKCkodW5zaWduZWQgY2hhciomJiwgdW5zaWduZWQgbG9uZyYmLCB1bnNpZ25lZCBsb25nKiYmLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiYmLCB1bnNpZ25lZCBsb25nJiYppQKnA3ZvaWQgc3RkOjpfXzI6Ol9faW52b2tlX3ZvaWRfcmV0dXJuX3dyYXBwZXI8dm9pZD46Ol9fY2FsbDxpbnQgKComKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZz4oaW50ICgqJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHVuc2lnbmVkIGNoYXIqJiYsIHVuc2lnbmVkIGxvbmcmJiwgdW5zaWduZWQgbG9uZyomJiwgdW5zaWduZWQgY2hhciBjb25zdComJiwgdW5zaWduZWQgbG9uZyYmKaYCygVkZWNsdHlwZShzdGQ6Ol9fMjo6Zm9yd2FyZDxpbnQgKComKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4oZnApKHN0ZDo6X18yOjpmb3J3YXJkPHVuc2lnbmVkIGNoYXIqPihmcDApLCBzdGQ6Ol9fMjo6Zm9yd2FyZDx1bnNpZ25lZCBsb25nPihmcDApLCBzdGQ6Ol9fMjo6Zm9yd2FyZDx1bnNpZ25lZCBsb25nKj4oZnAwKSwgc3RkOjpfXzI6OmZvcndhcmQ8dW5zaWduZWQgY2hhciBjb25zdCo+KGZwMCksIHN0ZDo6X18yOjpmb3J3YXJkPHVuc2lnbmVkIGxvbmc+KGZwMCkpKSBzdGQ6Ol9fMjo6X19pbnZva2U8aW50ICgqJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmc+KGludCAoKiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB1bnNpZ25lZCBjaGFyKiYmLCB1bnNpZ25lZCBsb25nJiYsIHVuc2lnbmVkIGxvbmcqJiYsIHVuc2lnbmVkIGNoYXIgY29uc3QqJiYsIHVuc2lnbmVkIGxvbmcmJimnAkRzdGQ6Ol9fMjo6YmFzaWNfaW9zPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpiYXNpY19pb3MoKagCjAFzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OmJhc2ljX2lvc3RyZWFtKHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4qKakCd3N0ZDo6X18yOjpiYXNpY19zdHJpbmdidWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OmJhc2ljX3N0cmluZ2J1Zih1bnNpZ25lZCBpbnQpqgJDc3RkOjpfXzI6OmJhc2ljX2lvczxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6ZmlsbChjaGFyKasCNHN0ZDo6X18yOjppb3NfYmFzZTo6c2V0Zih1bnNpZ25lZCBpbnQsIHVuc2lnbmVkIGludCmsAh9zdGQ6Ol9fMjo6aW9zX2Jhc2U6OndpZHRoKGxvbmcprQJlc3RkOjpfXzI6OmJhc2ljX3N0cmluZ2J1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6c3RyKCkgY29uc3SuAnRzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojp+YmFzaWNfc3RyaW5nc3RyZWFtKCkuMa8CigFzdGQ6Ol9fMjo6YmFzaWNfaXN0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6YmFzaWNfaXN0cmVhbShzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+KimwAkxzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6YmFzaWNfb3N0cmVhbSgpsQJ0c3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6fmJhc2ljX3N0cmluZ3N0cmVhbSgpLjKyAocBbm9uLXZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6fmJhc2ljX3N0cmluZ3N0cmVhbSgpswKJAW5vbi12aXJ0dWFsIHRodW5rIHRvIHN0ZDo6X18yOjpiYXNpY19zdHJpbmdzdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46On5iYXNpY19zdHJpbmdzdHJlYW0oKS4xtAKDAXZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6fmJhc2ljX3N0cmluZ3N0cmVhbSgptQKFAXZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX3N0cmluZ3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6fmJhc2ljX3N0cmluZ3N0cmVhbSgpLjG2An1zdGQ6Ol9fMjo6YmFzaWNfaW9zPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojppbml0KHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4qKbcCbHN0ZDo6X18yOjpiYXNpY19zdHJpbmdidWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46On5iYXNpY19zdHJpbmdidWYoKbgCbnN0ZDo6X18yOjpiYXNpY19zdHJpbmdidWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46On5iYXNpY19zdHJpbmdidWYoKS4xuQKXAXN0ZDo6X18yOjpiYXNpY19zdHJpbmdidWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OnNlZWtvZmYobG9uZyBsb25nLCBzdGQ6Ol9fMjo6aW9zX2Jhc2U6OnNlZWtkaXIsIHVuc2lnbmVkIGludCm6AktzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpwcHRyKCkgY29uc3S7AixzdGQ6Ol9fMjo6ZnBvczxfX21ic3RhdGVfdD46OmZwb3MobG9uZyBsb25nKbwCS3N0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OmdwdHIoKSBjb25zdL0CTHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnBiYXNlKCkgY29uc3S+AlhzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpzZXRnKGNoYXIqLCBjaGFyKiwgY2hhciopvwJMc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6ZXBwdHIoKSBjb25zdMACUXN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNldHAoY2hhciosIGNoYXIqKcECSXN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnBidW1wKGludCnCAowBc3RkOjpfXzI6OmJhc2ljX3N0cmluZ2J1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6c2Vla3BvcyhzdGQ6Ol9fMjo6ZnBvczxfX21ic3RhdGVfdD4sIHVuc2lnbmVkIGludCnDAmVzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojp1bmRlcmZsb3coKcQCTHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OmVncHRyKCkgY29uc3TFAi5zdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46OnRvX2ludF90eXBlKGNoYXIpxgJoc3RkOjpfXzI6OmJhc2ljX3N0cmluZ2J1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6cGJhY2tmYWlsKGludCnHAjJzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46OmVxX2ludF90eXBlKGludCwgaW50KcgCKXN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPjo6bm90X2VvZihpbnQpyQIuc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+Ojp0b19jaGFyX3R5cGUoaW50KcoCK3N0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPjo6ZXEoY2hhciwgY2hhcinLAmdzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpvdmVyZmxvdyhpbnQpzAJnc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6Y2FwYWNpdHkoKSBjb25zdM0CbHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OnJlc2l6ZSh1bnNpZ25lZCBsb25nKc4CSnN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNwdXRjKGNoYXIpzwJtc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19nZXRfbG9uZ19jYXAoKSBjb25zdNACKHN0ZDo6X18yOjppb3NfYmFzZTo6dW5zZXRmKHVuc2lnbmVkIGludCnRAmxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpnZXRfYWxsb2NhdG9yKCkgY29uc3TSAqABc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nPGNoYXIqLCB2b2lkPihjaGFyKiwgY2hhciosIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gY29uc3QmKdMChQFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpiYXNpY19zdHJpbmcoc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiBjb25zdCYp1AJmc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19hbGxvYygpIGNvbnN01QKqAnN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3JlcCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+IGNvbnN0Jj4oc3RkOjpfXzI6Ol9fZGVmYXVsdF9pbml0X3RhZyYmLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+IGNvbnN0JinWAr0Bc3RkOjpfXzI6OmVuYWJsZV9pZjxfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8Y2hhcio+Ojp2YWx1ZSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19pbml0PGNoYXIqPihjaGFyKiwgY2hhciop1wKmAXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4sIDEsIHRydWU+OjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gY29uc3QmLCB2b2lkPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+IGNvbnN0JinYAllzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPGNoYXIqPjo6ZGlmZmVyZW5jZV90eXBlIHN0ZDo6X18yOjpkaXN0YW5jZTxjaGFyKj4oY2hhciosIGNoYXIqKdkCZ3N0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Om1heF9zaXplKCkgY29uc3TaAnZzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3NldF9zaG9ydF9zaXplKHVuc2lnbmVkIGxvbmcp2wJxc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19yZWNvbW1lbmQodW5zaWduZWQgbG9uZyncAnBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3NldF9sb25nX3BvaW50ZXIoY2hhciop3QJ0c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19zZXRfbG9uZ19jYXAodW5zaWduZWQgbG9uZyneAnVzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3NldF9sb25nX3NpemUodW5zaWduZWQgbG9uZynfAjdzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46OmFzc2lnbihjaGFyJiwgY2hhciBjb25zdCYp4AL1A3N0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3BvbGljeV9pbnZva2VyPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPiBzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19wb2xpY3lfaW52b2tlcjx2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT46Ol9fY3JlYXRlPHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2RlZmF1bHRfYWxsb2NfZnVuYzx2b2lkICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+ID4oKeEC/AN2b2lkIHN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX3BvbGljeV9pbnZva2VyPHZvaWQgKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpPjo6X19jYWxsX2ltcGw8c3RkOjpfXzI6Ol9fZnVuY3Rpb246Ol9fZGVmYXVsdF9hbGxvY19mdW5jPHZvaWQgKCopKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB2b2lkICh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKT4gPihzdGQ6Ol9fMjo6X19mdW5jdGlvbjo6X19wb2xpY3lfc3RvcmFnZSBjb25zdCosIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcp4gLNAnN0ZDo6X18yOjpfX2Z1bmN0aW9uOjpfX2RlZmF1bHRfYWxsb2NfZnVuYzx2b2lkICgqKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdm9pZCAodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+OjpvcGVyYXRvcigpKHVuc2lnbmVkIGNoYXIqJiYsIHVuc2lnbmVkIGxvbmcmJiwgdW5zaWduZWQgbG9uZyomJiwgdW5zaWduZWQgY2hhciBjb25zdComJiwgdW5zaWduZWQgbG9uZyYmKeMCqQN2b2lkIHN0ZDo6X18yOjpfX2ludm9rZV92b2lkX3JldHVybl93cmFwcGVyPHZvaWQ+OjpfX2NhbGw8dm9pZCAoKiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nPih2b2lkICgqJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyksIHVuc2lnbmVkIGNoYXIqJiYsIHVuc2lnbmVkIGxvbmcmJiwgdW5zaWduZWQgbG9uZyomJiwgdW5zaWduZWQgY2hhciBjb25zdComJiwgdW5zaWduZWQgbG9uZyYmKeQCzQVkZWNsdHlwZShzdGQ6Ol9fMjo6Zm9yd2FyZDx2b2lkICgqJikodW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZyk+KGZwKShzdGQ6Ol9fMjo6Zm9yd2FyZDx1bnNpZ25lZCBjaGFyKj4oZnAwKSwgc3RkOjpfXzI6OmZvcndhcmQ8dW5zaWduZWQgbG9uZz4oZnAwKSwgc3RkOjpfXzI6OmZvcndhcmQ8dW5zaWduZWQgbG9uZyo+KGZwMCksIHN0ZDo6X18yOjpmb3J3YXJkPHVuc2lnbmVkIGNoYXIgY29uc3QqPihmcDApLCBzdGQ6Ol9fMjo6Zm9yd2FyZDx1bnNpZ25lZCBsb25nPihmcDApKSkgc3RkOjpfXzI6Ol9faW52b2tlPHZvaWQgKComKSh1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZyosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nKSwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZz4odm9pZCAoKiYpKHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpLCB1bnNpZ25lZCBjaGFyKiYmLCB1bnNpZ25lZCBsb25nJiYsIHVuc2lnbmVkIGxvbmcqJiYsIHVuc2lnbmVkIGNoYXIgY29uc3QqJiYsIHVuc2lnbmVkIGxvbmcmJinlAq8Bc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fc3dhcF9vdXRfY2lyY3VsYXJfYnVmZmVyKHN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+Jj4mKeYC0AFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8dW5zaWduZWQgY2hhciosIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpudWxscHRyX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPihzdGQ6Om51bGxwdHJfdCYmLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiYp5wKqBXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiosIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+ID46Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+KiYsIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+ID4oc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4qJiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+ID4mJinoAtUBc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90Piwgc2Vzc2lvbl90Pjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6X192YWx1ZV9pbml0X3RhZz4oc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+JiYsIHN0ZDo6X18yOjpfX3ZhbHVlX2luaXRfdGFnJiYp6QK6AnN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gPiA+OjpyZXNldChzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiop6gLZA3N0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+LCAxLCBmYWxzZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08c3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+ID4sIHZvaWQ+KHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+JiYp6wJpc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW08c2Vzc2lvbl90LCAxLCBmYWxzZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW0oc3RkOjpfXzI6Ol9fdmFsdWVfaW5pdF90YWcp7AJjc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID46On5fX3NoYXJlZF9wdHJfZW1wbGFjZSgp7QJcc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90Piwgc2Vzc2lvbl90Pjo6fl9fY29tcHJlc3NlZF9wYWlyKCnuAmVzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCkuMe8CXnN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+OjpfX29uX3plcm9fc2hhcmVkKCnwAmNzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPjo6X19vbl96ZXJvX3NoYXJlZF93ZWFrKCnxAsgBc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+KiwgdW5zaWduZWQgbG9uZynyAlBzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzZXNzaW9uX3QsIDEsIGZhbHNlPjo6fl9fY29tcHJlc3NlZF9wYWlyX2VsZW0oKfMC+AFzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4qLCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gPiA+OjpzZWNvbmQoKfQC3AFzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+ID4gPjo6b3BlcmF0b3IoKShzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c2Vzc2lvbl90LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHNlc3Npb25fdD4gPiop9QLIAnN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPHNlc3Npb25fdCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzZXNzaW9uX3Q+ID4gPiYsIHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxzZXNzaW9uX3QsIHN0ZDo6X18yOjphbGxvY2F0b3I8c2Vzc2lvbl90PiA+KiwgdW5zaWduZWQgbG9uZyn2ApICc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfQ29uc3RydWN0VHJhbnNhY3Rpb246Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbihzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID4mLCB1bnNpZ25lZCBsb25nKfcCrQJ2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46OmNvbnN0cnVjdDxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Jj4oc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCYp+AKLAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19yZWNvbW1lbmQodW5zaWduZWQgbG9uZykgY29uc3T5AtcBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jj46Ol9fc3BsaXRfYnVmZmVyKHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jin6AvkBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX3N3YXBfb3V0X2NpcmN1bGFyX2J1ZmZlcihzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mPiYp+wKEAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiY+Ojp+X19zcGxpdF9idWZmZXIoKfwC2AJ2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Ol9fY29uc3RydWN0PHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmKf0C2AF2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Ojpjb25zdHJ1Y3Q8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiBjb25zdCY+KHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+IGNvbnN0Jin+AlNzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+OjpzaGFyZWRfcHRyKHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gY29uc3QmKf8Ce3N0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6bWF4X3NpemUoKSBjb25zdIADowFzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjphbGxvY2F0ZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiYsIHVuc2lnbmVkIGxvbmcpgQPIAnZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19jb25zdHJ1Y3RfYmFja3dhcmRfd2l0aF9leGNlcHRpb25fZ3VhcmFudGVlczxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kj4oc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qJimCA44Bc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX2Fubm90YXRlX25ldyh1bnNpZ25lZCBsb25nKSBjb25zdIMDenN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiY+OjpjbGVhcigphAODAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiY+OjpjYXBhY2l0eSgpIGNvbnN0hQOaAXN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+ID46Om1heF9zaXplKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+IGNvbnN0JimGA8UBc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19tYXhfc2l6ZShzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+IGNvbnN0JimHA0dzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPjo6bWF4X3NpemUoKSBjb25zdIgDW3N0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KimJA6ICdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+Ojpjb25zdHJ1Y3Q8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4mJimKA80Cdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiA+OjpfX2NvbnN0cnVjdDxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4oc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4gPiYsIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+JiYpiwPNAXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID46OmNvbnN0cnVjdDxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+LCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4oc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4mJimMA6YBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiA+Jj46Ol9fZGVzdHJ1Y3RfYXRfZW5kKHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qKY0D0AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4mPjo6X19kZXN0cnVjdF9hdF9lbmQoc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiosIHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCBmYWxzZT4pjgORAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+ID4gPjo6X19hbm5vdGF0ZV9zaHJpbmsodW5zaWduZWQgbG9uZykgY29uc3SPA9sBc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Piogc3RkOjpfXzI6Ol9fbW92ZTxzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90Pio+KHN0ZDo6X18yOjpzaGFyZWRfcHRyPHNlc3Npb25fdD4qLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxzZXNzaW9uX3Q+Kiwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8c2Vzc2lvbl90PiopkAPqAXN0ZDo6X18yOjpkZXF1ZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2JhY2tfc3BhcmUoKSBjb25zdJED6wFzdGQ6Ol9fMjo6ZGVxdWU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19hZGRfYmFja19jYXBhY2l0eSgpkgPxBHZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6Y29uc3RydWN0PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JimTA+gBc3RkOjpfXzI6OmRlcXVlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fY2FwYWNpdHkoKSBjb25zdJQDyAJzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OnB1c2hfYmFjayhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiBjb25zdCYplQP0AXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6X19iYWNrX3NwYXJlKCkgY29uc3SWA48Cc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6YWxsb2NhdGUoc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mLCB1bnNpZ25lZCBsb25nKZcDwwJzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OnB1c2hfYmFjayhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiYmKZgDxAJzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OnB1c2hfZnJvbnQoc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiomJimZA/oCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+OjpfX3NwbGl0X2J1ZmZlcih1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiYpmgPDAnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4mPjo6cHVzaF9iYWNrKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qJiYpmwPJAnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4mPjo6cHVzaF9mcm9udChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiBjb25zdCYpnAOMAnN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+ID46On51bmlxdWVfcHRyKCmdA/EBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+Ojp+X19zcGxpdF9idWZmZXIoKZ4DnAV2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fY29uc3RydWN0PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKZ8DowRzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiogc3RkOjpfXzI6Om1vdmU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiopoAOABnN0ZDo6X18yOjplbmFibGVfaWY8X19pc19jcHAxN19mb3J3YXJkX2l0ZXJhdG9yPHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4gPjo6dmFsdWUsIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4mPjo6X19jb25zdHJ1Y3RfYXRfZW5kPHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4gPihzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+LCBzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+KaED9QR2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46OmNvbnN0cnVjdDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiogY29uc3QmPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiogY29uc3QmKaIDkQFzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPjo6YWxsb2NhdGUodW5zaWduZWQgbG9uZywgdm9pZCBjb25zdCopowOsBHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiBzdGQ6Ol9fMjo6bW92ZV9iYWNrd2FyZDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKimkA48Cc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4gPjo6YWxsb2NhdGUoc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4mLCB1bnNpZ25lZCBsb25nKaUD3AJzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPiA+OjpyZXNldChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KimmA+cBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+OjpjbGVhcigppwOfB3N0ZDo6X18yOjplbmFibGVfaWY8KGlzX3NhbWU8c3RkOjpfXzI6OnJlbW92ZV9jb25zdDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj46OnR5cGUsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPjo6dmFsdWUpICYmIChpc190cml2aWFsbHlfY29weV9hc3NpZ25hYmxlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPjo6dmFsdWUpLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+Ojp0eXBlIHN0ZDo6X18yOjpfX21vdmU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqKagDhwRzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4gPjo6ZGlmZmVyZW5jZV90eXBlIHN0ZDo6X18yOjpkaXN0YW5jZTxzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+ID4oc3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPiwgc3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPimpA/UCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+OjpfQ29uc3RydWN0VHJhbnNhY3Rpb246Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KioqLCB1bnNpZ25lZCBsb25nKaoDoAV2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+ID46Ol9fY29uc3RydWN0PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiBjb25zdCY+KHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qIGNvbnN0JimrA68Ec3RkOjpfXzI6Oml0ZXJhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+ID46OmRpZmZlcmVuY2VfdHlwZSBzdGQ6Ol9fMjo6X19kaXN0YW5jZTxzdGQ6Ol9fMjo6bW92ZV9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kio+ID4oc3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPiwgc3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPiwgc3RkOjpfXzI6OnJhbmRvbV9hY2Nlc3NfaXRlcmF0b3JfdGFnKawD3ANkZWNsdHlwZSgoZnAuYmFzZSgpKSAtIChmcDAuYmFzZSgpKSkgc3RkOjpfXzI6Om9wZXJhdG9yLTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4oc3RkOjpfXzI6Om1vdmVfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqPiBjb25zdCYsIHN0ZDo6X18yOjptb3ZlX2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj4gY29uc3QmKa0D3gN2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Ojpjb25zdHJ1Y3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qJiYprgN9c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID46Om1heF9zaXplKCkgY29uc3SvA6gHc3RkOjpfXzI6OmVuYWJsZV9pZjwoaXNfc2FtZTxzdGQ6Ol9fMjo6cmVtb3ZlX2NvbnN0PHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPjo6dHlwZSwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Ojp2YWx1ZSkgJiYgKGlzX3RyaXZpYWxseV9jb3B5X2Fzc2lnbmFibGU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+Ojp2YWx1ZSksIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKj46OnR5cGUgc3RkOjpfXzI6Ol9fbW92ZV9iYWNrd2FyZDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qKiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiopsAORAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPio+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KimxA/IBc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6b3BlcmF0b3IoKShzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KimyA8oCc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qPiY+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KiopswP0AnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4mPjo6X19kZXN0cnVjdF9hdF9lbmQoc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPioqLCBzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgZmFsc2U+KbQD5gN2b2lkIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Ojpjb25zdHJ1Y3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jim1A44BV2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OmZyb21FbmNvZGluZyhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBXZWJBcGk6OkVuY29kaW5nKbYDNVdlYkFwaTo6QnVmZmVyQ29udmVydGVyOjpnZXREZWNvZGVyKFdlYkFwaTo6RW5jb2RpbmcptwN1V2ViQXBpOjpCdWZmZXJDb252ZXJ0ZXI6OmRlaGV4aWZ5KHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpuANVc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fdmRlYWxsb2NhdGUoKbkDrgFzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fbW92ZV9hc3NpZ25fYWxsb2Moc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Jim6A01zdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6Y2xlYXIoKbsD1wFzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fbW92ZV9hc3NpZ25fYWxsb2Moc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Jiwgc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+KbwDbHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2Fubm90YXRlX3Nocmluayh1bnNpZ25lZCBsb25nKSBjb25zdL0DXnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46OmNsZWFyKCm+A2RzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjplbXB0eSgpIGNvbnN0vwM5bG9uZyBjb25zdCYgc3RkOjpfXzI6Om1pbjxsb25nPihsb25nIGNvbnN0JiwgbG9uZyBjb25zdCYpwAN2bG9uZyBjb25zdCYgc3RkOjpfXzI6Om1pbjxsb25nLCBzdGQ6Ol9fMjo6X19sZXNzPGxvbmcsIGxvbmc+ID4obG9uZyBjb25zdCYsIGxvbmcgY29uc3QmLCBzdGQ6Ol9fMjo6X19sZXNzPGxvbmcsIGxvbmc+KcEDSHN0ZDo6X18yOjpfX2xlc3M8bG9uZywgbG9uZz46Om9wZXJhdG9yKCkobG9uZyBjb25zdCYsIGxvbmcgY29uc3QmKSBjb25zdMIDxAJzdGQ6Ol9fMjo6dHVwbGU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+IHN0ZDo6X18yOjpmb3J3YXJkX2FzX3R1cGxlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JinDA98Bc3RkOjpfXzI6OnR1cGxlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPjo6dHVwbGU8dHJ1ZSwgZmFsc2U+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKcQD9AJzdGQ6Ol9fMjo6dHVwbGVfZWxlbWVudDwwdWwsIHN0ZDo6X18yOjp0dXBsZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jj4gPjo6dHlwZSYgc3RkOjpfXzI6OmdldDwwdWwsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6dHVwbGU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+JinFA5AFc3RkOjpfXzI6Ol9fdHVwbGVfaW1wbDxzdGQ6Ol9fMjo6X190dXBsZV9pbmRpY2VzPDB1bD4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPjo6X190dXBsZV9pbXBsPDB1bCwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6X190dXBsZV9pbmRpY2VzPDB1bD4sIHN0ZDo6X18yOjpfX3R1cGxlX3R5cGVzPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPiwgc3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczw+LCBzdGQ6Ol9fMjo6X190dXBsZV90eXBlczw+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JinGA+YEdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+Ojpjb25zdHJ1Y3Q8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mJinHA5EFdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2NvbnN0cnVjdDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4oc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+JiYpyAPbA3ZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID46OmNvbnN0cnVjdDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mJinJAwRtYWluygPRAVdlYkFwaTo6bWJlZENpcGhlcjo6bWJlZENpcGhlcihXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYpywMhV2ViQXBpOjptYmVkQ2lwaGVyOjp+bWJlZENpcGhlcigpzAMjV2ViQXBpOjptYmVkQ2lwaGVyOjp+bWJlZENpcGhlcigpLjHNAyhXZWJBcGk6Om1iZWRDaXBoZXI6OnNldEF1dG9QYWRkaW5nKGJvb2wpzgNnV2ViQXBpOjptYmVkQ2lwaGVyOjp1cGRhdGUoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QqKc8DPm1iZWR0bHNfY2lwaGVyX2dldF9ibG9ja19zaXplKG1iZWR0bHNfY2lwaGVyX2NvbnRleHRfdCBjb25zdCop0AOvAnN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Ojp2ZWN0b3I8dW5zaWduZWQgY2hhcio+KHVuc2lnbmVkIGNoYXIqLCBzdGQ6Ol9fMjo6ZW5hYmxlX2lmPChfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8dW5zaWduZWQgY2hhcio+Ojp2YWx1ZSkgJiYgKGlzX2NvbnN0cnVjdGlibGU8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6Oml0ZXJhdG9yX3RyYWl0czx1bnNpZ25lZCBjaGFyKj46OnJlZmVyZW5jZT46OnZhbHVlKSwgdW5zaWduZWQgY2hhcio+Ojp0eXBlKdEDHldlYkFwaTo6bWJlZENpcGhlcjo6ZmluYWxpemUoKdIDeFdlYkFwaTo6bWJlZEVDREg6Om1iZWRFQ0RIKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKdMDHVdlYkFwaTo6bWJlZEVDREg6On5tYmVkRUNESCgp1AMfV2ViQXBpOjptYmVkRUNESDo6fm1iZWRFQ0RIKCkuMdUDJFdlYkFwaTo6bWJlZEVDREg6OmdlbmVyYXRlS2V5c19pbnQoKdYDOFdlYkFwaTo6bWJlZEVDREg6OmdlbmVyYXRlS2V5cyhXZWJBcGk6OkN1cnZlUG9pbnRGb3JtYXQp1wM4V2ViQXBpOjptYmVkRUNESDo6Z2V0UHVibGljS2V5KFdlYkFwaTo6Q3VydmVQb2ludEZvcm1hdCnYAyNXZWJBcGk6OnNpemVkX2J1ZmZlcih1bnNpZ25lZCBsb25nKdkDW3N0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+Ojp2ZWN0b3IodW5zaWduZWQgbG9uZynaA2xXZWJBcGk6Om1iZWRFQ0RIOjpjb21wdXRlU2VjcmV0KHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0KinbA3FzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPjo6YXNzaWduKHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGNoYXIgY29uc3QmKdwDggF1bnNpZ25lZCBjaGFyKiBzdGQ6Ol9fMjo6ZmlsbF9uPHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyPih1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgY2hhciBjb25zdCYp3QNnc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46Ol9fZGVzdHJ1Y3RfYXRfZW5kKHVuc2lnbmVkIGNoYXIqKd4DHFdlYkFwaTo6bWJlZEhhc2g6Om1iZWRIYXNoKCnfAx1XZWJBcGk6Om1iZWRIYXNoOjp+bWJlZEhhc2goKeADH1dlYkFwaTo6bWJlZEhhc2g6On5tYmVkSGFzaCgpLjHhA2VXZWJBcGk6Om1iZWRIYXNoOjp1cGRhdGUoc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QqKeIDGldlYkFwaTo6bWJlZEhhc2g6OmRpZ2VzdCgp4wMXV2ViQXBpOjpIYXNoOjp+SGFzaCgpLjHkAxhXZWJBcGk6OkNyeXB0bzo6Q3J5cHRvKCnlAxtXZWJBcGk6OkNyeXB0bzo6fkNyeXB0bygpLjHmAxxXZWJBcGk6OkNyeXB0bzo6Y3JlYXRlSGFzaCgp5wOSAXN0ZDo6X18yOjplbmFibGVfaWY8IShpc19hcnJheTxXZWJBcGk6Om1iZWRIYXNoPjo6dmFsdWUpLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6Om1iZWRIYXNoPiA+Ojp0eXBlIHN0ZDo6X18yOjptYWtlX3NoYXJlZDxXZWJBcGk6Om1iZWRIYXNoPigp6APpAXN0ZDo6X18yOjpzaGFyZWRfcHRyPFdlYkFwaTo6SGFzaD46OnNoYXJlZF9wdHI8V2ViQXBpOjptYmVkSGFzaD4oc3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjptYmVkSGFzaD4mJiwgc3RkOjpfXzI6OmVuYWJsZV9pZjxpc19jb252ZXJ0aWJsZTxXZWJBcGk6Om1iZWRIYXNoKiwgV2ViQXBpOjpIYXNoKj46OnZhbHVlLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6Okhhc2g+OjpfX25hdD46OnR5cGUp6QOUAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiA+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KinqA5UBc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPjo6X19zaGFyZWRfcHRyX2VtcGxhY2Uoc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPinrA5ECc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+ID4gPiA+Ojp+dW5pcXVlX3B0cigp7AN4V2ViQXBpOjpDcnlwdG86OmNyZWF0ZUVDREgoc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYp7QPMAnN0ZDo6X18yOjplbmFibGVfaWY8IShpc19hcnJheTxXZWJBcGk6Om1iZWRFQ0RIPjo6dmFsdWUpLCBzdGQ6Ol9fMjo6c2hhcmVkX3B0cjxXZWJBcGk6Om1iZWRFQ0RIPiA+Ojp0eXBlIHN0ZDo6X18yOjptYWtlX3NoYXJlZDxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jj4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYp7gOUAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiA+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0KinvA9ECc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+KHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKfADkQJzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkRUNESCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4gPiA+ID46On51bmlxdWVfcHRyKCnxA7YBV2ViQXBpOjpDcnlwdG86OmNyZWF0ZUNpcGhlcihzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0JinyA/4Dc3RkOjpfXzI6OmVuYWJsZV9pZjwhKGlzX2FycmF5PFdlYkFwaTo6bWJlZENpcGhlcj46OnZhbHVlKSwgc3RkOjpfXzI6OnNoYXJlZF9wdHI8V2ViQXBpOjptYmVkQ2lwaGVyPiA+Ojp0eXBlIHN0ZDo6X18yOjptYWtlX3NoYXJlZDxXZWJBcGk6Om1iZWRDaXBoZXIsIFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jj4oV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYp8wOYAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPjo6YWxsb2NhdGUodW5zaWduZWQgbG9uZywgdm9pZCBjb25zdCop9AODBHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+OjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+KHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiwgV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYp9QOZAnN0ZDo6X18yOjp1bmlxdWVfcHRyPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+ID4gPiA+Ojp+dW5pcXVlX3B0cigp9gO4AVdlYkFwaTo6Q3J5cHRvOjpjcmVhdGVEZWNpcGhlcihzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jin3AyBXZWJBcGk6OkNyeXB0bzo6cmFuZG9tQnl0ZXMoaW50KfgDIFdlYkFwaTo6Q3J5cHRvOjpnZXROYW1lZEN1cnZlcygp+QO5AnN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6cHVzaF9iYWNrKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mJin6A+ABc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+Ojp+dmVjdG9yKCn7A6MDdm9pZCBzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fY29uc3RydWN0X29uZV9hdF9lbmQ8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mJin8A6IDdm9pZCBzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fcHVzaF9iYWNrX3Nsb3dfcGF0aDxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYmKf0D8AFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fYW5ub3RhdGVfZGVsZXRlKCkgY29uc3T+A+4Bc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6fl9fdmVjdG9yX2Jhc2UoKf8DZ3N0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2NvbnN0cnVjdF9hdF9lbmQodW5zaWduZWQgbG9uZymABJMBdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID46OmNvbnN0cnVjdDx1bnNpZ25lZCBjaGFyPihzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+JiwgdW5zaWduZWQgY2hhciopgQS+AXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+OjpfX2NvbnN0cnVjdDx1bnNpZ25lZCBjaGFyPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgdHJ1ZT4sIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4mLCB1bnNpZ25lZCBjaGFyKimCBIQBdW5zaWduZWQgY2hhciogc3RkOjpfXzI6Ol9fZmlsbF9uPHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBjaGFyPih1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgY2hhciBjb25zdCYpgwTxAXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+LCBXZWJBcGk6Om1iZWRIYXNoPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiwgc3RkOjpfXzI6Ol9fdmFsdWVfaW5pdF90YWc+KHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4mJiwgc3RkOjpfXzI6Ol9fdmFsdWVfaW5pdF90YWcmJimEBOQCc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiwgc3RkOjpfXzI6Ol9fYWxsb2NhdG9yX2Rlc3RydWN0b3I8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+ID4gPiA+OjpyZXNldChzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkSGFzaCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiA+KimFBHBzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxXZWJBcGk6Om1iZWRIYXNoLCAxLCBmYWxzZT46Ol9fY29tcHJlc3NlZF9wYWlyX2VsZW0oc3RkOjpfXzI6Ol9fdmFsdWVfaW5pdF90YWcphgRxc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCmHBGpzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRIYXNoPiwgV2ViQXBpOjptYmVkSGFzaD46On5fX2NvbXByZXNzZWRfcGFpcigpiARzc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCkuMYkEbHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID46Ol9fb25femVyb19zaGFyZWQoKYoEcXN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID46Ol9fb25femVyb19zaGFyZWRfd2VhaygpiwTkAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID4qLCB1bnNpZ25lZCBsb25nKYwEV3N0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPFdlYkFwaTo6bWJlZEhhc2gsIDEsIGZhbHNlPjo6fl9fY29tcHJlc3NlZF9wYWlyX2VsZW0oKY0E+AFzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID4gPiA+OjpvcGVyYXRvcigpKHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID4qKY4E8gJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRIYXNoLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEhhc2g+ID4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiA+Jiwgc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEhhc2gsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkSGFzaD4gPiosIHVuc2lnbmVkIGxvbmcpjwS2A3N0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+LCBXZWJBcGk6Om1iZWRFQ0RIPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6cGllY2V3aXNlX2NvbnN0cnVjdF90LCBzdGQ6Ol9fMjo6dHVwbGU8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiY+LCBzdGQ6Ol9fMjo6dHVwbGU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+KZAE5AJzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkRUNESCwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiA+LCBzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4gPiA+ID46OnJlc2V0KHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4qKZEEjwJzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+LCAwLCB0cnVlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+JiwgMHVsPihzdGQ6Ol9fMjo6cGllY2V3aXNlX2NvbnN0cnVjdF90LCBzdGQ6Ol9fMjo6dHVwbGU8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiY+LCBzdGQ6Ol9fMjo6X190dXBsZV9pbmRpY2VzPDB1bD4pkgTnAnN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPFdlYkFwaTo6bWJlZEVDREgsIDEsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgMHVsPihzdGQ6Ol9fMjo6cGllY2V3aXNlX2NvbnN0cnVjdF90LCBzdGQ6Ol9fMjo6dHVwbGU8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCY+LCBzdGQ6Ol9fMjo6X190dXBsZV9pbmRpY2VzPDB1bD4pkwRxc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCmUBGpzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRFQ0RIPiwgV2ViQXBpOjptYmVkRUNESD46On5fX2NvbXByZXNzZWRfcGFpcigplQRzc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCkuMZYEcXN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID46Ol9fb25femVyb19zaGFyZWRfd2VhaygplwTkAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4qLCB1bnNpZ25lZCBsb25nKZgEV3N0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPFdlYkFwaTo6bWJlZEVDREgsIDEsIGZhbHNlPjo6fl9fY29tcHJlc3NlZF9wYWlyX2VsZW0oKZkE+AFzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4gPiA+OjpvcGVyYXRvcigpKHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4qKZoE8gJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRFQ0RILCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZEVDREg+ID4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiA+Jiwgc3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZEVDREgsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkRUNESD4gPiosIHVuc2lnbmVkIGxvbmcpmwTHBHN0ZDo6X18yOjp0dXBsZTxXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jj4gc3RkOjpfXzI6OmZvcndhcmRfYXNfdHVwbGU8V2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPihXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0JimcBOwEc3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiwgV2ViQXBpOjptYmVkQ2lwaGVyPjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+JiwgV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+KHN0ZDo6X18yOjpwaWVjZXdpc2VfY29uc3RydWN0X3QsIHN0ZDo6X18yOjp0dXBsZTxzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4mPiwgc3RkOjpfXzI6OnR1cGxlPFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPimdBPACc3RkOjpfXzI6OnVuaXF1ZV9wdHI8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4sIHN0ZDo6X18yOjpfX2FsbG9jYXRvcl9kZXN0cnVjdG9yPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPiA+ID46OnJlc2V0KHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+KimeBMEEc3RkOjpfXzI6OnR1cGxlPFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPjo6dHVwbGU8V2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24sIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBmYWxzZSwgZmFsc2U+KFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmKZ8EqwRzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxXZWJBcGk6Om1iZWRDaXBoZXIsIDEsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0JiwgMHVsLCAxdWwsIDJ1bD4oc3RkOjpfXzI6OnBpZWNld2lzZV9jb25zdHJ1Y3RfdCwgc3RkOjpfXzI6OnR1cGxlPFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPiwgc3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczwwdWwsIDF1bCwgMnVsPimgBHVzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkQ2lwaGVyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4gPjo6fl9fc2hhcmVkX3B0cl9lbXBsYWNlKCmhBG5zdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8c3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+LCBXZWJBcGk6Om1iZWRDaXBoZXI+Ojp+X19jb21wcmVzc2VkX3BhaXIoKaIEd3N0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+Ojp+X19zaGFyZWRfcHRyX2VtcGxhY2UoKS4xowR1c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID46Ol9fb25femVyb19zaGFyZWRfd2VhaygppATsAXN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkQ2lwaGVyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4gPiosIHVuc2lnbmVkIGxvbmcppQTfCHN0ZDo6X18yOjpfX3R1cGxlX2ltcGw8c3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczwwdWwsIDF1bCwgMnVsPiwgV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+OjpfX3R1cGxlX2ltcGw8MHVsLCAxdWwsIDJ1bCwgV2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jj4oc3RkOjpfXzI6Ol9fdHVwbGVfaW5kaWNlczwwdWwsIDF1bCwgMnVsPiwgc3RkOjpfXzI6Ol9fdHVwbGVfdHlwZXM8V2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+LCBzdGQ6Ol9fMjo6X190dXBsZV9pbmRpY2VzPD4sIHN0ZDo6X18yOjpfX3R1cGxlX3R5cGVzPD4sIFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmKaYE+QRzdGQ6Ol9fMjo6dHVwbGVfZWxlbWVudDwydWwsIHN0ZDo6X18yOjp0dXBsZTxXZWJBcGk6OkNpcGhlckRpcmVjdGlvbiYmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jj4gPjo6dHlwZSYgc3RkOjpfXzI6OmdldDwydWwsIFdlYkFwaTo6Q2lwaGVyRGlyZWN0aW9uJiYsIHN0ZDo6X18yOjp2ZWN0b3I8dW5zaWduZWQgY2hhciwgc3RkOjpfXzI6OmFsbG9jYXRvcjx1bnNpZ25lZCBjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmPihzdGQ6Ol9fMjo6dHVwbGU8V2ViQXBpOjpDaXBoZXJEaXJlY3Rpb24mJiwgc3RkOjpfXzI6OnZlY3Rvcjx1bnNpZ25lZCBjaGFyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHVuc2lnbmVkIGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6dmVjdG9yPHVuc2lnbmVkIGNoYXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8dW5zaWduZWQgY2hhcj4gPiBjb25zdCY+JimnBFlzdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxXZWJBcGk6Om1iZWRDaXBoZXIsIDEsIGZhbHNlPjo6fl9fY29tcHJlc3NlZF9wYWlyX2VsZW0oKagEgAJzdGQ6Ol9fMjo6X19hbGxvY2F0b3JfZGVzdHJ1Y3RvcjxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+ID4gPjo6b3BlcmF0b3IoKShzdGQ6Ol9fMjo6X19zaGFyZWRfcHRyX2VtcGxhY2U8V2ViQXBpOjptYmVkQ2lwaGVyLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPFdlYkFwaTo6bWJlZENpcGhlcj4gPiopqQT+AnN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPiA+OjpkZWFsbG9jYXRlKHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6Ol9fc2hhcmVkX3B0cl9lbXBsYWNlPFdlYkFwaTo6bWJlZENpcGhlciwgc3RkOjpfXzI6OmFsbG9jYXRvcjxXZWJBcGk6Om1iZWRDaXBoZXI+ID4gPiYsIHN0ZDo6X18yOjpfX3NoYXJlZF9wdHJfZW1wbGFjZTxXZWJBcGk6Om1iZWRDaXBoZXIsIHN0ZDo6X18yOjphbGxvY2F0b3I8V2ViQXBpOjptYmVkQ2lwaGVyPiA+KiwgdW5zaWduZWQgbG9uZymqBOcBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpjYXBhY2l0eSgpIGNvbnN0qwTjAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6c2l6ZSgpIGNvbnN0rATlAXN0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46OmNsZWFyKCmtBO4Bc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6Y2FwYWNpdHkoKSBjb25zdK4ExwJzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+KimvBOoDc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfQ29uc3RydWN0VHJhbnNhY3Rpb246Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbihzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID4mLCB1bnNpZ25lZCBsb25nKbAE9wFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fcmVjb21tZW5kKHVuc2lnbmVkIGxvbmcpIGNvbnN0sQT5AnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiY+OjpfX3NwbGl0X2J1ZmZlcih1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiYpsgTRA3N0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19zd2FwX291dF9jaXJjdWxhcl9idWZmZXIoc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jj4mKbME8AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mPjo6fl9fc3BsaXRfYnVmZmVyKCm0BOcBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjptYXhfc2l6ZSgpIGNvbnN0tQSMBXZvaWQgc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gPjo6X19jb25zdHJ1Y3RfYmFja3dhcmRfd2l0aF9leGNlcHRpb25fZ3VhcmFudGVlczxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kj4oc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiosIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qJim2BPoBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjpfX2Fubm90YXRlX25ldyh1bnNpZ25lZCBsb25nKSBjb25zdLcE5gFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mPjo6Y2xlYXIoKbgE7wFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4mPjo6Y2FwYWNpdHkoKSBjb25zdLkEhgJzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiA+OjptYXhfc2l6ZShzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiBjb25zdCYpugSxAnN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+ID46Ol9fbWF4X3NpemUoc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiBjb25zdCYpuwTIAnN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiY+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Kim8BPICc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4sIHN0ZDo6X18yOjphbGxvY2F0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+Jj46Ol9fZGVzdHJ1Y3RfYXRfZW5kKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4qLCBzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgZmFsc2U+Kb0EEG1iZWR0bHNfYWVzX2luaXS+BBBtYmVkdGxzX2Flc19mcmVlvwQWbWJlZHRsc19hZXNfc2V0a2V5X2VuY8AEFm1iZWR0bHNfYWVzX3NldGtleV9kZWPBBBptYmVkdGxzX2Flc194dHNfc2V0a2V5X2VuY8IEGm1iZWR0bHNfYWVzX3h0c19zZXRrZXlfZGVjwwQcbWJlZHRsc19pbnRlcm5hbF9hZXNfZW5jcnlwdMQEHG1iZWR0bHNfaW50ZXJuYWxfYWVzX2RlY3J5cHTFBBVtYmVkdGxzX2Flc19jcnlwdF9lY2LGBBVtYmVkdGxzX2Flc19jcnlwdF9jYmPHBBVtYmVkdGxzX2Flc19jcnlwdF94dHPIBBhtYmVkdGxzX2Flc19jcnlwdF9jZmIxMjjJBBVtYmVkdGxzX2Flc19jcnlwdF9vZmLKBBVtYmVkdGxzX2Flc19jcnlwdF9jdHLLBBJtYmVkdGxzX2FyYzRfc2V0dXDMBBJtYmVkdGxzX2FyYzRfY3J5cHTNBBVtYmVkdGxzX2Jhc2U2NF9lbmNvZGXOBBVtYmVkdGxzX2Jhc2U2NF9kZWNvZGXPBBBtYmVkdGxzX21waV9pbml00AQQbWJlZHRsc19tcGlfZnJlZdEEEG1iZWR0bHNfbXBpX2dyb3fSBBJtYmVkdGxzX21waV9zaHJpbmvTBBBtYmVkdGxzX21waV9jb3B51AQcbWJlZHRsc19tcGlfc2FmZV9jb25kX2Fzc2lnbtUEGm1iZWR0bHNfbXBpX3NhZmVfY29uZF9zd2Fw1gQQbWJlZHRsc19tcGlfbHNldNcEE21iZWR0bHNfbXBpX2dldF9iaXTYBBNtYmVkdGxzX21waV9zZXRfYml02QQPbWJlZHRsc19tcGlfbHNi2gQSbWJlZHRsc19tcGlfYml0bGVu2wQQbWJlZHRsc19tcGlfc2l6ZdwEF21iZWR0bHNfbXBpX3JlYWRfc3RyaW5n3QQTbWJlZHRsc19tcGlfbXVsX21wad4EE21iZWR0bHNfbXBpX2FkZF9tcGnfBBNtYmVkdGxzX21waV9zdWJfbXBp4AQTbWJlZHRsc19tcGlfbXVsX2ludOEEE21iZWR0bHNfbXBpX3N1Yl9pbnTiBBNtYmVkdGxzX21waV9kaXZfbXBp4wQXbWJlZHRsc19tcGlfcmVhZF9iaW5hcnnkBBhtYmVkdGxzX21waV93cml0ZV9iaW5hcnnlBBNtYmVkdGxzX21waV9zaGlmdF9s5gQTbWJlZHRsc19tcGlfc2hpZnRfcucEE21iZWR0bHNfbXBpX2NtcF9tcGnoBBNtYmVkdGxzX21waV9jbXBfaW506QQTbWJlZHRsc19tcGlfYWRkX2Fic+oEE21iZWR0bHNfbXBpX3N1Yl9hYnPrBAttcGlfbXVsX2hscOwEE21iZWR0bHNfbXBpX21vZF9tcGntBA9tYmVkdGxzX21waV9nY2TuBBdtYmVkdGxzX21waV9maWxsX3JhbmRvbe8EE21iZWR0bHNfbXBpX2ludl9tb2TwBBdtYmVkdGxzX2Jsb3dmaXNoX3NldGtlefEEGm1iZWR0bHNfYmxvd2Zpc2hfY3J5cHRfZWNi8gQabWJlZHRsc19ibG93ZmlzaF9jcnlwdF9jYmPzBBxtYmVkdGxzX2Jsb3dmaXNoX2NyeXB0X2NmYjY09AQabWJlZHRsc19ibG93ZmlzaF9jcnlwdF9jdHL1BBttYmVkdGxzX2NhbWVsbGlhX3NldGtleV9lbmP2BBttYmVkdGxzX2NhbWVsbGlhX3NldGtleV9kZWP3BBptYmVkdGxzX2NhbWVsbGlhX2NyeXB0X2VjYvgEGm1iZWR0bHNfY2FtZWxsaWFfY3J5cHRfY2Jj+QQdbWJlZHRsc19jYW1lbGxpYV9jcnlwdF9jZmIxMjj6BBptYmVkdGxzX2NhbWVsbGlhX2NyeXB0X2N0cvsEEG1iZWR0bHNfY2NtX2luaXT8BBJtYmVkdGxzX2NjbV9zZXRrZXn9BBVtYmVkdGxzX2NoYWNoYTIwX2luaXT+BBVtYmVkdGxzX2NoYWNoYTIwX2ZyZWX/BBdtYmVkdGxzX2NoYWNoYTIwX3NldGtleYAFF21iZWR0bHNfY2hhY2hhMjBfc3RhcnRzgQUXbWJlZHRsc19jaGFjaGEyMF91cGRhdGWCBQ5jaGFjaGEyMF9ibG9ja4MFF21iZWR0bHNfY2hhY2hhcG9seV9pbml0hAUXbWJlZHRsc19jaGFjaGFwb2x5X2ZyZWWFBRltYmVkdGxzX2NoYWNoYXBvbHlfdXBkYXRlhgUdbWJlZHRsc19jaXBoZXJfaW5mb19mcm9tX3R5cGWHBR9tYmVkdGxzX2NpcGhlcl9pbmZvX2Zyb21fdmFsdWVziAUTbWJlZHRsc19jaXBoZXJfZnJlZYkFFG1iZWR0bHNfY2lwaGVyX3NldHVwigUQZ2V0X3BrY3NfcGFkZGluZ4sFEGFkZF9wa2NzX3BhZGRpbmeMBR9tYmVkdGxzX2NpcGhlcl9zZXRfcGFkZGluZ19tb2RljQUZZ2V0X29uZV9hbmRfemVyb3NfcGFkZGluZ44FGWFkZF9vbmVfYW5kX3plcm9zX3BhZGRpbmePBRlnZXRfemVyb3NfYW5kX2xlbl9wYWRkaW5nkAUZYWRkX3plcm9zX2FuZF9sZW5fcGFkZGluZ5EFEWdldF96ZXJvc19wYWRkaW5nkgURYWRkX3plcm9zX3BhZGRpbmeTBQ5nZXRfbm9fcGFkZGluZ5QFFW1iZWR0bHNfY2lwaGVyX3NldGtleZUFFW1iZWR0bHNfY2lwaGVyX3NldF9pdpYFFW1iZWR0bHNfY2lwaGVyX3VwZGF0ZZcFFW1iZWR0bHNfY2lwaGVyX2ZpbmlzaJgFEmFlc19jcnlwdF9lY2Jfd3JhcJkFEmFlc19jcnlwdF9jYmNfd3JhcJoFFWFlc19jcnlwdF9jZmIxMjhfd3JhcJsFEmFlc19jcnlwdF9vZmJfd3JhcJwFEmFlc19jcnlwdF9jdHJfd3JhcJ0FE2Flc19zZXRrZXlfZW5jX3dyYXCeBRNhZXNfc2V0a2V5X2RlY193cmFwnwUNYWVzX2N0eF9hbGxvY6AFDGFlc19jdHhfZnJlZaEFEmFlc19jcnlwdF94dHNfd3JhcKIFF3h0c19hZXNfc2V0a2V5X2VuY193cmFwowUXeHRzX2Flc19zZXRrZXlfZGVjX3dyYXCkBRF4dHNfYWVzX2N0eF9hbGxvY6UFEHh0c19hZXNfY3R4X2ZyZWWmBRNnY21fYWVzX3NldGtleV93cmFwpwUNZ2NtX2N0eF9hbGxvY6gFDGdjbV9jdHhfZnJlZakFE2NjbV9hZXNfc2V0a2V5X3dyYXCqBQ1jY21fY3R4X2FsbG9jqwUMY2NtX2N0eF9mcmVlrAUWYXJjNF9jcnlwdF9zdHJlYW1fd3JhcK0FEGFyYzRfc2V0a2V5X3dyYXCuBQ5hcmM0X2N0eF9hbGxvY68FDWFyYzRfY3R4X2ZyZWWwBRdibG93ZmlzaF9jcnlwdF9lY2Jfd3JhcLEFF2Jsb3dmaXNoX2NyeXB0X2NiY193cmFwsgUZYmxvd2Zpc2hfY3J5cHRfY2ZiNjRfd3JhcLMFF2Jsb3dmaXNoX2NyeXB0X2N0cl93cmFwtAUUYmxvd2Zpc2hfc2V0a2V5X3dyYXC1BRJibG93ZmlzaF9jdHhfYWxsb2O2BRFibG93ZmlzaF9jdHhfZnJlZbcFF2NhbWVsbGlhX2NyeXB0X2VjYl93cmFwuAUXY2FtZWxsaWFfY3J5cHRfY2JjX3dyYXC5BRpjYW1lbGxpYV9jcnlwdF9jZmIxMjhfd3JhcLoFF2NhbWVsbGlhX2NyeXB0X2N0cl93cmFwuwUYY2FtZWxsaWFfc2V0a2V5X2VuY193cmFwvAUYY2FtZWxsaWFfc2V0a2V5X2RlY193cmFwvQUSY2FtZWxsaWFfY3R4X2FsbG9jvgURY2FtZWxsaWFfY3R4X2ZyZWW/BRhnY21fY2FtZWxsaWFfc2V0a2V5X3dyYXDABRhjY21fY2FtZWxsaWFfc2V0a2V5X3dyYXDBBRJkZXNfY3J5cHRfZWNiX3dyYXDCBRJkZXNfY3J5cHRfY2JjX3dyYXDDBRNkZXNfc2V0a2V5X2VuY193cmFwxAUTZGVzX3NldGtleV9kZWNfd3JhcMUFDWRlc19jdHhfYWxsb2PGBQxkZXNfY3R4X2ZyZWXHBRNkZXMzX2NyeXB0X2VjYl93cmFwyAUTZGVzM19jcnlwdF9jYmNfd3JhcMkFFWRlczNfc2V0MmtleV9lbmNfd3JhcMoFFWRlczNfc2V0MmtleV9kZWNfd3JhcMsFDmRlczNfY3R4X2FsbG9jzAUNZGVzM19jdHhfZnJlZc0FFWRlczNfc2V0M2tleV9lbmNfd3JhcM4FFWRlczNfc2V0M2tleV9kZWNfd3JhcM8FFGNoYWNoYTIwX3N0cmVhbV93cmFw0AUUY2hhY2hhMjBfc2V0a2V5X3dyYXDRBRJjaGFjaGEyMF9jdHhfYWxsb2PSBRFjaGFjaGEyMF9jdHhfZnJlZdMFFmNoYWNoYXBvbHlfc2V0a2V5X3dyYXDUBRRjaGFjaGFwb2x5X2N0eF9hbGxvY9UFE2NoYWNoYXBvbHlfY3R4X2ZyZWXWBSFtYmVkdGxzX2N0cl9kcmJnX3NlZWRfZW50cm9weV9sZW7XBQ9ibG9ja19jaXBoZXJfZGbYBRhjdHJfZHJiZ191cGRhdGVfaW50ZXJuYWzZBSBtYmVkdGxzX2N0cl9kcmJnX3JhbmRvbV93aXRoX2FkZNoFF21iZWR0bHNfY3RyX2RyYmdfcmFuZG9t2wUSbWJlZHRsc19kZXNfc2V0a2V53AUWbWJlZHRsc19kZXNfc2V0a2V5X2RlY90FGG1iZWR0bHNfZGVzM19zZXQya2V5X2VuY94FGG1iZWR0bHNfZGVzM19zZXQya2V5X2RlY98FGG1iZWR0bHNfZGVzM19zZXQza2V5X2VuY+AFDGRlczNfc2V0M2tleeEFGG1iZWR0bHNfZGVzM19zZXQza2V5X2RlY+IFFW1iZWR0bHNfZGVzX2NyeXB0X2VjYuMFFW1iZWR0bHNfZGVzX2NyeXB0X2NiY+QFFm1iZWR0bHNfZGVzM19jcnlwdF9lY2LlBRZtYmVkdGxzX2RlczNfY3J5cHRfY2Jj5gUbbWJlZHRsc19lY2RoX2NvbXB1dGVfc2hhcmVk5wUgbWJlZHRsc19lY3BfY3VydmVfaW5mb19mcm9tX25hbWXoBRZtYmVkdGxzX2VjcF9wb2ludF9pbml06QUWbWJlZHRsc19lY3BfZ3JvdXBfaW5pdOoFFm1iZWR0bHNfZWNwX3BvaW50X2ZyZWXrBRZtYmVkdGxzX2VjcF9ncm91cF9mcmVl7AUebWJlZHRsc19lY3BfcG9pbnRfd3JpdGVfYmluYXJ57QUdbWJlZHRsc19lY3BfcG9pbnRfcmVhZF9iaW5hcnnuBRttYmVkdGxzX2VjcF9tdWxfcmVzdGFydGFibGXvBRltYmVkdGxzX2VjcF9jaGVja19wcml2a2V58AUYbWJlZHRsc19lY3BfY2hlY2tfcHVia2V58QUIZWNwX21vZHDyBQ5lY3BfZG91YmxlX2phY/MFFmVjcF9ub3JtYWxpemVfamFjX21hbnn0BRFlY3Bfbm9ybWFsaXplX2phY/UFDWVjcF9hZGRfbWl4ZWT2BRdtYmVkdGxzX2VjcF9nZW5fcHJpdmtlefcFFm1iZWR0bHNfZWNwX2dyb3VwX2xvYWT4BQxlY3BfbW9kX3AxOTL5BQxlY3BfbW9kX3AyMjT6BQxlY3BfbW9kX3AyNTb7BQxlY3BfbW9kX3AzODT8BQxlY3BfbW9kX3A1MjH9BQ5lY3BfbW9kX3AxOTJrMf4FDmVjcF9tb2RfcDIyNGsx/wUOZWNwX21vZF9wMjU2azGABgxlY3BfbW9kX3AyNTWBBgxlY3BfbW9kX3A0NDiCBg9lY3BfbW9kX2tvYmxpdHqDBhRtYmVkdGxzX2VudHJvcHlfaW5pdIQGDmVudHJvcHlfdXBkYXRlhQYXZW50cm9weV9nYXRoZXJfaW50ZXJuYWyGBhRtYmVkdGxzX2VudHJvcHlfZnVuY4cGHW1iZWR0bHNfcGxhdGZvcm1fZW50cm9weV9wb2xsiAYWbWJlZHRsc19oYXJkY2xvY2tfcG9sbIkGEm1iZWR0bHNfZ2NtX3NldGtleYoGCGdjbV9tdWx0iwYSbWJlZHRsc19nY21fdXBkYXRljAYYbWJlZHRsc19wbGF0Zm9ybV96ZXJvaXpljQYXbWJlZHRsc19wb2x5MTMwNV91cGRhdGWOBhBwb2x5MTMwNV9wcm9jZXNzjwYVbWJlZHRsc19zaGEyNTZfc3RhcnRzkAYfbWJlZHRsc19pbnRlcm5hbF9zaGEyNTZfcHJvY2Vzc5EGFW1iZWR0bHNfc2hhMjU2X3VwZGF0ZZIGGW1iZWR0bHNfc2hhMjU2X2ZpbmlzaF9yZXSTBhNtYmVkdGxzX3NoYTUxMl9pbml0lAYZbWJlZHRsc19zaGE1MTJfc3RhcnRzX3JldJUGH21iZWR0bHNfaW50ZXJuYWxfc2hhNTEyX3Byb2Nlc3OWBhltYmVkdGxzX3NoYTUxMl91cGRhdGVfcmV0lwYZbWJlZHRsc19zaGE1MTJfZmluaXNoX3JldJgGEm1iZWR0bHNfc2hhNTEyX3JldJkGGG1iZWR0bHNfdGltaW5nX2hhcmRjbG9ja5oGB3N0cm5jbXCbBgZzdHJjbXCcBgZzdHJjaHKdBgtfX3N0cmNocm51bJ4GBm1lbWNocp8GDV9fc3lzY2FsbF9yZXSgBgdfX3NobGltoQYIX19zaGdldGOiBglfX2ludHNjYW6jBgZzdHJ0b3ikBgljb3B5c2lnbmylBgdzY2FsYm5spgYLX19mbG9hdHNjYW6nBghoZXhmbG9hdKgGCGRlY2Zsb2F0qQYHc2NhbmV4cKoGBnN0cnRvZqsGCHN0cnRveC4xrAYGc3RydG9krQYHc3RydG9sZK4GCXN0cnRvbGRfbK8GCHNucHJpbnRmsAYFZHVtbXmxBgZmY2xvc2WyBghfX3RvcmVhZLMGB19fdWZsb3e0Bg1fX3N0ZGlvX3dyaXRltQYZX19lbXNjcmlwdGVuX3N0ZG91dF9jbG9zZbYGGF9fZW1zY3JpcHRlbl9zdGRvdXRfc2Vla7cGB3djcnRvbWK4BgZ3Y3RvbWK5BgVmcmV4cLoGE19fdmZwcmludGZfaW50ZXJuYWy7BgtwcmludGZfY29yZbwGA291dL0GBmdldGludL4GB3BvcF9hcme/BgNwYWTABgVmbXRfb8EGBWZtdF94wgYFZm10X3XDBgh2ZnByaW50ZsQGBmZtdF9mcMUGE3BvcF9hcmdfbG9uZ19kb3VibGXGBgl2c25wcmludGbHBghzbl93cml0ZcgGBWZyZWFkyQYHZHVtbXkuMcoGDV9fc3RkaW9fY2xvc2XLBgxfX3N0ZGlvX3NlZWvMBgZmZmx1c2jNBhFfX2ZmbHVzaF91bmxvY2tlZM4GDF9fZm1vZGVmbGFnc88GDF9fc3RkaW9fcmVhZNAGCV9fb2ZsX2FkZNEGCF9fZmRvcGVu0gYFZm9wZW7TBhBfX2Vycm5vX2xvY2F0aW9u1AYHaXNzcGFjZdUGB2lzZGlnaXTWBhJfX3dhc2lfc3lzY2FsbF9yZXTXBghfX2FkZHRmM9gGCV9fYXNobHRpM9kGB19fbGV0ZjLaBgdfX2dldGYy2wYIX19kaXZ0ZjPcBg1fX2V4dGVuZGRmdGYy3QYNX19leHRlbmRzZnRmMt4GC19fZmxvYXRzaXRm3wYNX19mbG9hdHVuc2l0ZuAGCV9fbHNocnRpM+EGCF9fbXVsdGYz4gYIX19tdWx0aTPjBghfX3N1YnRmM+QGDF9fdHJ1bmN0ZmRmMuUGDF9fdHJ1bmN0ZnNmMuYGM3N0ZDo6X18yOjpiYWRfZnVuY3Rpb25fY2FsbDo6fmJhZF9mdW5jdGlvbl9jYWxsKCkuMecGKXN0ZDo6X18yOjpiYWRfZnVuY3Rpb25fY2FsbDo6d2hhdCgpIGNvbnN06AYHd21lbWNweekGRXN0ZDo6X18yOjpiYXNpY19pb3M8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3MoKeoGH3N0ZDo6X18yOjppb3NfYmFzZTo6fmlvc19iYXNlKCnrBj9zdGQ6Ol9fMjo6aW9zX2Jhc2U6Ol9fY2FsbF9jYWxsYmFja3Moc3RkOjpfXzI6Omlvc19iYXNlOjpldmVudCnsBkdzdGQ6Ol9fMjo6YmFzaWNfaW9zPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaW9zKCkuMe0GUXN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19zdHJlYW1idWYoKe4GU3N0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19zdHJlYW1idWYoKS4x7wZQc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6YmFzaWNfc3RyZWFtYnVmKCnwBl1zdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjppbWJ1ZShzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JinxBlJzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpzZXRidWYoY2hhciosIGxvbmcp8gZ8c3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6c2Vla29mZihsb25nIGxvbmcsIHN0ZDo6X18yOjppb3NfYmFzZTo6c2Vla2RpciwgdW5zaWduZWQgaW50KfMGcXN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNlZWtwb3Moc3RkOjpfXzI6OmZwb3M8X19tYnN0YXRlX3Q+LCB1bnNpZ25lZCBpbnQp9AZSc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6eHNnZXRuKGNoYXIqLCBsb25nKfUGRHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPjo6Y29weShjaGFyKiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcp9gZKc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6dW5kZXJmbG93KCn3BkZzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp1Zmxvdygp+AZNc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1ZjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6cGJhY2tmYWlsKGludCn5BlhzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp4c3B1dG4oY2hhciBjb25zdCosIGxvbmcp+gZNc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+Ojpjb3B5KHdjaGFyX3QqLCB3Y2hhcl90IGNvbnN0KiwgdW5zaWduZWQgbG9uZyn7Bk9zdGQ6Ol9fMjo6YmFzaWNfaXN0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6fmJhc2ljX2lzdHJlYW0oKS4x/AZedmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfaXN0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6fmJhc2ljX2lzdHJlYW0oKf0GT3N0ZDo6X18yOjpiYXNpY19pc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaXN0cmVhbSgpLjL+BmB2aXJ0dWFsIHRodW5rIHRvIHN0ZDo6X18yOjpiYXNpY19pc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaXN0cmVhbSgpLjH/BkVzdGQ6Ol9fMjo6YmFzaWNfaW9zPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojpnb29kKCkgY29uc3SAB0RzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6Zmx1c2goKYEHInN0ZDo6X18yOjppb3NfYmFzZTo6Z2V0bG9jKCkgY29uc3SCB2FzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6OmN0eXBlPGNoYXI+ID4oc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYpgwfRAWJvb2wgc3RkOjpfXzI6Om9wZXJhdG9yIT08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiBjb25zdCYphAdUc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46Om9wZXJhdG9yKigpIGNvbnN0hQc1c3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojppcyh1bnNpZ25lZCBzaG9ydCwgY2hhcikgY29uc3SGB09zdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6b3BlcmF0b3IrKygphwfRAWJvb2wgc3RkOjpfXzI6Om9wZXJhdG9yPT08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiBjb25zdCYpiAdPc3RkOjpfXzI6OmJhc2ljX2lvczxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6c2V0c3RhdGUodW5zaWduZWQgaW50KYkHiQFzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6c2VudHJ5OjpzZW50cnkoc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mKYoHSHN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnB1YnN5bmMoKYsHTnN0ZDo6X18yOjpiYXNpY19vc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpzZW50cnk6On5zZW50cnkoKYwHmAFzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6ZXF1YWwoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gY29uc3QmKSBjb25zdI0HRnN0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNnZXRjKCmOB0dzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpzYnVtcGMoKY8HJ3N0ZDo6X18yOjppb3NfYmFzZTo6Y2xlYXIodW5zaWduZWQgaW50KZAHZ3N0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYgc3RkOjpfXzI6OnVzZV9mYWNldDxzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gPihzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JimRB+MBYm9vbCBzdGQ6Ol9fMjo6b3BlcmF0b3IhPTx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiBjb25zdCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IGNvbnN0JimSB1pzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPjo6b3BlcmF0b3IqKCkgY29uc3STBztzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmlzKHVuc2lnbmVkIHNob3J0LCB3Y2hhcl90KSBjb25zdJQHVXN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+OjpvcGVyYXRvcisrKCmVB+MBYm9vbCBzdGQ6Ol9fMjo6b3BlcmF0b3I9PTx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiBjb25zdCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IGNvbnN0JimWB6QBc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID46OmVxdWFsKHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IGNvbnN0JikgY29uc3SXB0xzdGQ6Ol9fMjo6YmFzaWNfc3RyZWFtYnVmPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+OjpzZ2V0YygpmAdNc3RkOjpfXzI6OmJhc2ljX3N0cmVhbWJ1Zjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPjo6c2J1bXBjKCmZB0dzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD46OmVxX2ludF90eXBlKHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50KZoHU3N0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID46OnNwdXRjKHdjaGFyX3QpmwdPc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19vc3RyZWFtKCkuMZwHXnZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX29zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19vc3RyZWFtKCmdB09zdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6fmJhc2ljX29zdHJlYW0oKS4yngdgdmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6fmJhc2ljX29zdHJlYW0oKS4xnwdFc3RkOjpfXzI6OmJhc2ljX2lvczxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6ZmlsbCgpIGNvbnN0oAdKc3RkOjpfXzI6OmJhc2ljX2lvczxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6d2lkZW4oY2hhcikgY29uc3ShB1VzdGQ6Ol9fMjo6YmFzaWNfb3N0cmVhbTxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPjo6b3BlcmF0b3I8PCh1bnNpZ25lZCBpbnQpogdSc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46Om9wZXJhdG9yPShjaGFyKaMHV3N0ZDo6X18yOjpiYXNpY19zdHJlYW1idWY8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46OnNwdXRuKGNoYXIgY29uc3QqLCBsb25nKaQHW3N0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+OjpvcGVyYXRvcj0od2NoYXJfdCmlB1FzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3N0cmVhbSgpLjGmB2Rub24tdmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3N0cmVhbSgppwdgdmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3N0cmVhbSgpqAdRc3RkOjpfXzI6OmJhc2ljX2lvc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaW9zdHJlYW0oKS4yqQdmbm9uLXZpcnR1YWwgdGh1bmsgdG8gc3RkOjpfXzI6OmJhc2ljX2lvc3RyZWFtPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Ojp+YmFzaWNfaW9zdHJlYW0oKS4xqgdidmlydHVhbCB0aHVuayB0byBzdGQ6Ol9fMjo6YmFzaWNfaW9zdHJlYW08Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID46On5iYXNpY19pb3N0cmVhbSgpLjGrByFzdGQ6Ol9fMjo6aW9zX2Jhc2U6On5pb3NfYmFzZSgpLjGsByZzdGQ6Ol9fMjo6X190aHJvd19mYWlsdXJlKGNoYXIgY29uc3QqKa0HH3N0ZDo6X18yOjppb3NfYmFzZTo6aW5pdCh2b2lkKimuB7UBc3RkOjpfXzI6OmVuYWJsZV9pZjwoaXNfbW92ZV9jb25zdHJ1Y3RpYmxlPHVuc2lnbmVkIGludD46OnZhbHVlKSAmJiAoaXNfbW92ZV9hc3NpZ25hYmxlPHVuc2lnbmVkIGludD46OnZhbHVlKSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OnN3YXA8dW5zaWduZWQgaW50Pih1bnNpZ25lZCBpbnQmLCB1bnNpZ25lZCBpbnQmKa8HWXN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpfX3Rlc3RfZm9yX2VvZigpIGNvbnN0sAdfc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID46Ol9fdGVzdF9mb3JfZW9mKCkgY29uc3SxByhzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj46OndpZGVuKGNoYXIpIGNvbnN0sgcrc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+Ojp3aWRlbihjaGFyKSBjb25zdLMHfXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHZvaWQgKCopKHZvaWQqKSwgMSwgZmFsc2U+OjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHZvaWQgKCopKHZvaWQqKSwgdm9pZD4odm9pZCAoKiYmKSh2b2lkKikptAcHbWJydG93Y7UHB3Zmc2Nhbma2BwVhcmdfbrcHCXN0b3JlX2ludLgHDV9fc3RyaW5nX3JlYWS5Bwd2c3NjYW5mugcHZG9fcmVhZLsHIF9fZW1zY3JpcHRlbl9lbnZpcm9uX2NvbnN0cnVjdG9yvAcGZ2V0ZW52vQcMX19nZXRfbG9jYWxlvgcSX19sb2NfaXNfYWxsb2NhdGVkvwcLX19uZXdsb2NhbGXABwl2YXNwcmludGbBBwxfX2lzeGRpZ2l0X2zCBwZzc2NhbmbDBwpmcmVlbG9jYWxlxAcGd2NzbGVuxQcJd2NzcnRvbWJzxgcKd2NzbnJ0b21ic8cHCW1ic3J0b3djc8gHCm1ic25ydG93Y3PJBwtfX3VzZWxvY2FsZcoHCnN0cnRvdWxsX2zLBwlzdHJ0b2xsX2zMB11zdGQ6Ol9fMjo6Y29sbGF0ZTxjaGFyPjo6ZG9fY29tcGFyZShjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KikgY29uc3TNB0VzdGQ6Ol9fMjo6Y29sbGF0ZTxjaGFyPjo6ZG9fdHJhbnNmb3JtKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KikgY29uc3TOB5ABc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nPGNoYXIgY29uc3QqLCB2b2lkPihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCopzwfVAXN0ZDo6X18yOjplbmFibGVfaWY8X19pc19jcHAxN19mb3J3YXJkX2l0ZXJhdG9yPGNoYXIgY29uc3QqPjo6dmFsdWUsIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9faW5pdDxjaGFyIGNvbnN0Kj4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqKdAHQHN0ZDo6X18yOjpjb2xsYXRlPGNoYXI+Ojpkb19oYXNoKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KikgY29uc3TRB2xzdGQ6Ol9fMjo6Y29sbGF0ZTx3Y2hhcl90Pjo6ZG9fY29tcGFyZSh3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KikgY29uc3TSB05zdGQ6Ol9fMjo6Y29sbGF0ZTx3Y2hhcl90Pjo6ZG9fdHJhbnNmb3JtKHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KikgY29uc3TTB6IBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QgY29uc3QqLCB2b2lkPih3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCop1AewAnN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3JlcCwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX2NvbXByZXNzZWRfcGFpcjxzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnLCBzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnPihzdGQ6Ol9fMjo6X19kZWZhdWx0X2luaXRfdGFnJiYsIHN0ZDo6X18yOjpfX2RlZmF1bHRfaW5pdF90YWcmJinVB+oBc3RkOjpfXzI6OmVuYWJsZV9pZjxfX2lzX2NwcDE3X2ZvcndhcmRfaXRlcmF0b3I8d2NoYXJfdCBjb25zdCo+Ojp2YWx1ZSwgdm9pZD46OnR5cGUgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19pbml0PHdjaGFyX3QgY29uc3QqPih3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCop1gdJc3RkOjpfXzI6OmNvbGxhdGU8d2NoYXJfdD46OmRvX2hhc2god2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqKSBjb25zdNcHmgJzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBib29sJikgY29uc3TYBxtzdGQ6Ol9fMjo6bG9jYWxlOjp+bG9jYWxlKCnZB2dzdGQ6Ol9fMjo6bnVtcHVuY3Q8Y2hhcj4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+ID4oc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYp2gcqc3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+Ojp0cnVlbmFtZSgpIGNvbnN02wcrc3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+OjpmYWxzZW5hbWUoKSBjb25zdNwHpAVzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0KiBzdGQ6Ol9fMjo6X19zY2FuX2tleXdvcmQ8c3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QqLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCosIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYsIHVuc2lnbmVkIGludCYsIGJvb2wp3Qc4c3RkOjpfXzI6OmxvY2FsZTo6dXNlX2ZhY2V0KHN0ZDo6X18yOjpsb2NhbGU6OmlkJikgY29uc3TeB7UDc3RkOjpfXzI6Oml0ZXJhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Kj46OmRpZmZlcmVuY2VfdHlwZSBzdGQ6Ol9fMjo6ZGlzdGFuY2U8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCo+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QqLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0KinfB8wBc3RkOjpfXzI6OnVuaXF1ZV9wdHI8dW5zaWduZWQgY2hhciwgdm9pZCAoKikodm9pZCopPjo6dW5pcXVlX3B0cjx0cnVlLCB2b2lkPih1bnNpZ25lZCBjaGFyKiwgc3RkOjpfXzI6Ol9fZGVwZW5kZW50X3R5cGU8c3RkOjpfXzI6Ol9fdW5pcXVlX3B0cl9kZWxldGVyX3NmaW5hZTx2b2lkICgqKSh2b2lkKik+LCB0cnVlPjo6X19nb29kX3J2YWxfcmVmX3R5cGUp4AdLc3RkOjpfXzI6OnVuaXF1ZV9wdHI8dW5zaWduZWQgY2hhciwgdm9pZCAoKikodm9pZCopPjo6cmVzZXQodW5zaWduZWQgY2hhciop4Qcqc3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojp0b3VwcGVyKGNoYXIpIGNvbnN04gdDc3RkOjpfXzI6OnVuaXF1ZV9wdHI8dW5zaWduZWQgY2hhciwgdm9pZCAoKikodm9pZCopPjo6fnVuaXF1ZV9wdHIoKeMHmgJzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nJikgY29uc3TkB+sCc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXRfc2lnbmVkPGxvbmc+KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyYpIGNvbnN05Qc5c3RkOjpfXzI6Ol9fbnVtX2dldF9iYXNlOjpfX2dldF9iYXNlKHN0ZDo6X18yOjppb3NfYmFzZSYp5gdIc3RkOjpfXzI6Ol9fbnVtX2dldDxjaGFyPjo6X19zdGFnZTJfaW50X3ByZXAoc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciYp5wflAXN0ZDo6X18yOjpfX251bV9nZXQ8Y2hhcj46Ol9fc3RhZ2UyX2ludF9sb29wKGNoYXIsIGludCwgY2hhciosIGNoYXIqJiwgdW5zaWduZWQgaW50JiwgY2hhciwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHVuc2lnbmVkIGludCosIHVuc2lnbmVkIGludComLCBjaGFyIGNvbnN0KinoB1xsb25nIHN0ZDo6X18yOjpfX251bV9nZXRfc2lnbmVkX2ludGVncmFsPGxvbmc+KGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgaW50JiwgaW50KekHpQFzdGQ6Ol9fMjo6X19jaGVja19ncm91cGluZyhzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgdW5zaWduZWQgaW50KiwgdW5zaWduZWQgaW50KiwgdW5zaWduZWQgaW50JinqB58Cc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyBsb25nJikgY29uc3TrB/UCc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXRfc2lnbmVkPGxvbmcgbG9uZz4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGxvbmcmKSBjb25zdOwHZmxvbmcgbG9uZyBzdGQ6Ol9fMjo6X19udW1fZ2V0X3NpZ25lZF9pbnRlZ3JhbDxsb25nIGxvbmc+KGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgaW50JiwgaW50Ke0HpAJzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB1bnNpZ25lZCBzaG9ydCYpIGNvbnN07geBA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+IHN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZG9fZ2V0X3Vuc2lnbmVkPHVuc2lnbmVkIHNob3J0PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIHNob3J0JikgY29uc3TvB3J1bnNpZ25lZCBzaG9ydCBzdGQ6Ol9fMjo6X19udW1fZ2V0X3Vuc2lnbmVkX2ludGVncmFsPHVuc2lnbmVkIHNob3J0PihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYsIGludCnwB6ICc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdW5zaWduZWQgaW50JikgY29uc3TxB/0Cc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXRfdW5zaWduZWQ8dW5zaWduZWQgaW50PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIGludCYpIGNvbnN08gdudW5zaWduZWQgaW50IHN0ZDo6X18yOjpfX251bV9nZXRfdW5zaWduZWRfaW50ZWdyYWw8dW5zaWduZWQgaW50PihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYsIGludCnzB6gCc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdW5zaWduZWQgbG9uZyBsb25nJikgY29uc3T0B4kDc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXRfdW5zaWduZWQ8dW5zaWduZWQgbG9uZyBsb25nPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIGxvbmcgbG9uZyYpIGNvbnN09Qd6dW5zaWduZWQgbG9uZyBsb25nIHN0ZDo6X18yOjpfX251bV9nZXRfdW5zaWduZWRfaW50ZWdyYWw8dW5zaWduZWQgbG9uZyBsb25nPihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYsIGludCn2B5sCc3RkOjpfXzI6Om51bV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgZmxvYXQmKSBjb25zdPcH9QJzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiBzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2RvX2dldF9mbG9hdGluZ19wb2ludDxmbG9hdD4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBmbG9hdCYpIGNvbnN0+AdYc3RkOjpfXzI6Ol9fbnVtX2dldDxjaGFyPjo6X19zdGFnZTJfZmxvYXRfcHJlcChzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCBjaGFyKiwgY2hhciYsIGNoYXImKfkH8AFzdGQ6Ol9fMjo6X19udW1fZ2V0PGNoYXI+OjpfX3N0YWdlMl9mbG9hdF9sb29wKGNoYXIsIGJvb2wmLCBjaGFyJiwgY2hhciosIGNoYXIqJiwgY2hhciwgY2hhciwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHVuc2lnbmVkIGludCosIHVuc2lnbmVkIGludComLCB1bnNpZ25lZCBpbnQmLCBjaGFyKin6B09mbG9hdCBzdGQ6Ol9fMjo6X19udW1fZ2V0X2Zsb2F0PGZsb2F0PihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYp+wecAnN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIGRvdWJsZSYpIGNvbnN0/Af3AnN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+IHN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZG9fZ2V0X2Zsb2F0aW5nX3BvaW50PGRvdWJsZT4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBkb3VibGUmKSBjb25zdP0HUWRvdWJsZSBzdGQ6Ol9fMjo6X19udW1fZ2V0X2Zsb2F0PGRvdWJsZT4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBpbnQmKf4HoQJzdGQ6Ol9fMjo6bnVtX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGRvdWJsZSYpIGNvbnN0/weBA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+IHN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZG9fZ2V0X2Zsb2F0aW5nX3BvaW50PGxvbmcgZG91YmxlPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIGxvbmcgZG91YmxlJikgY29uc3SACFtsb25nIGRvdWJsZSBzdGQ6Ol9fMjo6X19udW1fZ2V0X2Zsb2F0PGxvbmcgZG91YmxlPihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGludCYpgQibAnN0ZDo6X18yOjpudW1fZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHZvaWQqJikgY29uc3SCCENzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj46OndpZGVuKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgY2hhciopIGNvbnN0gwgSc3RkOjpfXzI6Ol9fY2xvYygphAhMc3RkOjpfXzI6Ol9fbGliY3BwX3NzY2FuZl9sKGNoYXIgY29uc3QqLCBfX2xvY2FsZV9zdHJ1Y3QqLCBjaGFyIGNvbnN0KiwgLi4uKYUIVGNoYXIgY29uc3QqIHN0ZDo6X18yOjpmaW5kPGNoYXIgY29uc3QqLCBjaGFyPihjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QmKYYISXN0ZDo6X18yOjpfX2xpYmNwcF9sb2NhbGVfZ3VhcmQ6Ol9fbGliY3BwX2xvY2FsZV9ndWFyZChfX2xvY2FsZV9zdHJ1Y3QqJimHCDlzdGQ6Ol9fMjo6X19saWJjcHBfbG9jYWxlX2d1YXJkOjp+X19saWJjcHBfbG9jYWxlX2d1YXJkKCmICK8Cc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgYm9vbCYpIGNvbnN0iQhtc3RkOjpfXzI6Om51bXB1bmN0PHdjaGFyX3Q+IGNvbnN0JiBzdGQ6Ol9fMjo6dXNlX2ZhY2V0PHN0ZDo6X18yOjpudW1wdW5jdDx3Y2hhcl90PiA+KHN0ZDo6X18yOjpsb2NhbGUgY29uc3QmKYoI4AVzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0KiBzdGQ6Ol9fMjo6X19zY2FuX2tleXdvcmQ8c3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4gY29uc3QqLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0Kiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiBjb25zdCosIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYsIHVuc2lnbmVkIGludCYsIGJvb2wpiwhsc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6c2l6ZSgpIGNvbnN0jAh/c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6b3BlcmF0b3JbXSh1bnNpZ25lZCBsb25nKSBjb25zdI0IbXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmVtcHR5KCkgY29uc3SOCK8Cc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyYpIGNvbnN0jwiGA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZG9fZ2V0X3NpZ25lZDxsb25nPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIGxvbmcmKSBjb25zdJAITXN0ZDo6X18yOjpfX251bV9nZXQ8d2NoYXJfdD46Ol9fZG9fd2lkZW4oc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCopIGNvbnN0kQhOc3RkOjpfXzI6Ol9fbnVtX2dldDx3Y2hhcl90Pjo6X19zdGFnZTJfaW50X3ByZXAoc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCYpkgjxAXN0ZDo6X18yOjpfX251bV9nZXQ8d2NoYXJfdD46Ol9fc3RhZ2UyX2ludF9sb29wKHdjaGFyX3QsIGludCwgY2hhciosIGNoYXIqJiwgdW5zaWduZWQgaW50Jiwgd2NoYXJfdCwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHVuc2lnbmVkIGludCosIHVuc2lnbmVkIGludComLCB3Y2hhcl90IGNvbnN0KimTCLQCc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyBsb25nJikgY29uc3SUCJADc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19kb19nZXRfc2lnbmVkPGxvbmcgbG9uZz4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGxvbmcmKSBjb25zdJUIuQJzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB1bnNpZ25lZCBzaG9ydCYpIGNvbnN0lgicA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZG9fZ2V0X3Vuc2lnbmVkPHVuc2lnbmVkIHNob3J0PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIHNob3J0JikgY29uc3SXCLcCc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdW5zaWduZWQgaW50JikgY29uc3SYCJgDc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19kb19nZXRfdW5zaWduZWQ8dW5zaWduZWQgaW50PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIGludCYpIGNvbnN0mQi9AnN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHVuc2lnbmVkIGxvbmcgbG9uZyYpIGNvbnN0mgikA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZG9fZ2V0X3Vuc2lnbmVkPHVuc2lnbmVkIGxvbmcgbG9uZz4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB1bnNpZ25lZCBsb25nIGxvbmcmKSBjb25zdJsIsAJzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBmbG9hdCYpIGNvbnN0nAiQA3N0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZG9fZ2V0X2Zsb2F0aW5nX3BvaW50PGZsb2F0PihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIGZsb2F0JikgY29uc3SdCGRzdGQ6Ol9fMjo6X19udW1fZ2V0PHdjaGFyX3Q+OjpfX3N0YWdlMl9mbG9hdF9wcmVwKHN0ZDo6X18yOjppb3NfYmFzZSYsIHdjaGFyX3QqLCB3Y2hhcl90Jiwgd2NoYXJfdCYpngj/AXN0ZDo6X18yOjpfX251bV9nZXQ8d2NoYXJfdD46Ol9fc3RhZ2UyX2Zsb2F0X2xvb3Aod2NoYXJfdCwgYm9vbCYsIGNoYXImLCBjaGFyKiwgY2hhciomLCB3Y2hhcl90LCB3Y2hhcl90LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JiwgdW5zaWduZWQgaW50KiwgdW5zaWduZWQgaW50KiYsIHVuc2lnbmVkIGludCYsIHdjaGFyX3QqKZ8IsQJzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBkb3VibGUmKSBjb25zdKAIkgNzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiBzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2RvX2dldF9mbG9hdGluZ19wb2ludDxkb3VibGU+KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgZG91YmxlJikgY29uc3ShCLYCc3RkOjpfXzI6Om51bV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgbG9uZyBkb3VibGUmKSBjb25zdKIInANzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiBzdGQ6Ol9fMjo6bnVtX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2RvX2dldF9mbG9hdGluZ19wb2ludDxsb25nIGRvdWJsZT4oc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGRvdWJsZSYpIGNvbnN0owiwAnN0ZDo6X18yOjpudW1fZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHZvaWQqJikgY29uc3SkCElzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OndpZGVuKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0Kiwgd2NoYXJfdCopIGNvbnN0pQhmd2NoYXJfdCBjb25zdCogc3RkOjpfXzI6OmZpbmQ8d2NoYXJfdCBjb25zdCosIHdjaGFyX3Q+KHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCYppggvc3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+OjpkZWNpbWFsX3BvaW50KCkgY29uc3SnCC9zdGQ6Ol9fMjo6bnVtcHVuY3Q8Y2hhcj46OnRob3VzYW5kc19zZXAoKSBjb25zdKgIKnN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6Z3JvdXBpbmcoKSBjb25zdKkIZ3djaGFyX3QgY29uc3QqIHN0ZDo6X18yOjpfX251bV9nZXQ8d2NoYXJfdD46Ol9fZG9fd2lkZW5fcDx3Y2hhcl90PihzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB3Y2hhcl90KikgY29uc3SqCM0Bc3RkOjpfXzI6Om51bV9wdXQ8Y2hhciwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fcHV0KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCBjaGFyLCBib29sKSBjb25zdKsIzQFzdGQ6Ol9fMjo6bnVtX3B1dDxjaGFyLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIGNoYXIsIGxvbmcpIGNvbnN0rAhOc3RkOjpfXzI6Ol9fbnVtX3B1dF9iYXNlOjpfX2Zvcm1hdF9pbnQoY2hhciosIGNoYXIgY29uc3QqLCBib29sLCB1bnNpZ25lZCBpbnQprQhXc3RkOjpfXzI6Ol9fbGliY3BwX3NucHJpbnRmX2woY2hhciosIHVuc2lnbmVkIGxvbmcsIF9fbG9jYWxlX3N0cnVjdCosIGNoYXIgY29uc3QqLCAuLi4prghVc3RkOjpfXzI6Ol9fbnVtX3B1dF9iYXNlOjpfX2lkZW50aWZ5X3BhZGRpbmcoY2hhciosIGNoYXIqLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UgY29uc3QmKa8IdXN0ZDo6X18yOjpfX251bV9wdXQ8Y2hhcj46Ol9fd2lkZW5fYW5kX2dyb3VwX2ludChjaGFyKiwgY2hhciosIGNoYXIqLCBjaGFyKiwgY2hhciomLCBjaGFyKiYsIHN0ZDo6X18yOjpsb2NhbGUgY29uc3QmKbAIhQJzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiBzdGQ6Ol9fMjo6X19wYWRfYW5kX291dHB1dDxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPihzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0Kiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhcimxCCt2b2lkIHN0ZDo6X18yOjpyZXZlcnNlPGNoYXIqPihjaGFyKiwgY2hhciopsgghc3RkOjpfXzI6Omlvc19iYXNlOjp3aWR0aCgpIGNvbnN0swhdc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6ZGF0YSgptAjSAXN0ZDo6X18yOjpudW1fcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgbG9uZyBsb25nKSBjb25zdLUI1gFzdGQ6Ol9fMjo6bnVtX3B1dDxjaGFyLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIGNoYXIsIHVuc2lnbmVkIGxvbmcpIGNvbnN0tgjbAXN0ZDo6X18yOjpudW1fcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgdW5zaWduZWQgbG9uZyBsb25nKSBjb25zdLcIzwFzdGQ6Ol9fMjo6bnVtX3B1dDxjaGFyLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIGNoYXIsIGRvdWJsZSkgY29uc3S4CEpzdGQ6Ol9fMjo6X19udW1fcHV0X2Jhc2U6Ol9fZm9ybWF0X2Zsb2F0KGNoYXIqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgaW50KbkIJXN0ZDo6X18yOjppb3NfYmFzZTo6cHJlY2lzaW9uKCkgY29uc3S6CElzdGQ6Ol9fMjo6X19saWJjcHBfYXNwcmludGZfbChjaGFyKiosIF9fbG9jYWxlX3N0cnVjdCosIGNoYXIgY29uc3QqLCAuLi4puwh3c3RkOjpfXzI6Ol9fbnVtX3B1dDxjaGFyPjo6X193aWRlbl9hbmRfZ3JvdXBfZmxvYXQoY2hhciosIGNoYXIqLCBjaGFyKiwgY2hhciosIGNoYXIqJiwgY2hhciomLCBzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0Jim8CD1zdGQ6Ol9fMjo6X19jb21wcmVzc2VkX3BhaXI8Y2hhciosIHZvaWQgKCopKHZvaWQqKT46OnNlY29uZCgpvQjUAXN0ZDo6X18yOjpudW1fcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgbG9uZyBkb3VibGUpIGNvbnN0vgjUAXN0ZDo6X18yOjpudW1fcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgdm9pZCBjb25zdCopIGNvbnN0vwjfAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgYm9vbCkgY29uc3TACGdzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpiZWdpbigpwQhlc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6ZW5kKCnCCHNib29sIHN0ZDo6X18yOjpvcGVyYXRvciE9PHdjaGFyX3QqPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8d2NoYXJfdCo+IGNvbnN0Jiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPiBjb25zdCYpwwgtc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPjo6b3BlcmF0b3IrKygpxAhvc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19nZXRfcG9pbnRlcigpxQg2c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPjo6X193cmFwX2l0ZXIod2NoYXJfdCopxgjfAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgbG9uZykgY29uc3THCIEBc3RkOjpfXzI6Ol9fbnVtX3B1dDx3Y2hhcl90Pjo6X193aWRlbl9hbmRfZ3JvdXBfaW50KGNoYXIqLCBjaGFyKiwgY2hhciosIHdjaGFyX3QqLCB3Y2hhcl90KiYsIHdjaGFyX3QqJiwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYpyAijAnN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpfX3BhZF9hbmRfb3V0cHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB3Y2hhcl90KckINHZvaWQgc3RkOjpfXzI6OnJldmVyc2U8d2NoYXJfdCo+KHdjaGFyX3QqLCB3Y2hhcl90KinKCIQBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6YmFzaWNfc3RyaW5nKHVuc2lnbmVkIGxvbmcsIHdjaGFyX3QpywjkAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgbG9uZyBsb25nKSBjb25zdMwI6AFzdGQ6Ol9fMjo6bnVtX3B1dDx3Y2hhcl90LCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHdjaGFyX3QsIHVuc2lnbmVkIGxvbmcpIGNvbnN0zQjtAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgdW5zaWduZWQgbG9uZyBsb25nKSBjb25zdM4I4QFzdGQ6Ol9fMjo6bnVtX3B1dDx3Y2hhcl90LCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHdjaGFyX3QsIGRvdWJsZSkgY29uc3TPCD9zdGQ6Ol9fMjo6dW5pcXVlX3B0cjx3Y2hhcl90LCB2b2lkICgqKSh2b2lkKik+OjpyZXNldCh3Y2hhcl90KinQCIMBc3RkOjpfXzI6Ol9fbnVtX3B1dDx3Y2hhcl90Pjo6X193aWRlbl9hbmRfZ3JvdXBfZmxvYXQoY2hhciosIGNoYXIqLCBjaGFyKiwgd2NoYXJfdCosIHdjaGFyX3QqJiwgd2NoYXJfdComLCBzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JinRCD1zdGQ6Ol9fMjo6dW5pcXVlX3B0cjx3Y2hhcl90LCB2b2lkICgqKSh2b2lkKik+Ojp+dW5pcXVlX3B0cigp0gjmAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgbG9uZyBkb3VibGUpIGNvbnN00wjmAXN0ZDo6X18yOjpudW1fcHV0PHdjaGFyX3QsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgd2NoYXJfdCwgdm9pZCBjb25zdCopIGNvbnN01AhTdm9pZCBzdGQ6Ol9fMjo6X19yZXZlcnNlPGNoYXIqPihjaGFyKiwgY2hhciosIHN0ZDo6X18yOjpyYW5kb21fYWNjZXNzX2l0ZXJhdG9yX3RhZynVCFx2b2lkIHN0ZDo6X18yOjpfX3JldmVyc2U8d2NoYXJfdCo+KHdjaGFyX3QqLCB3Y2hhcl90Kiwgc3RkOjpfXzI6OnJhbmRvbV9hY2Nlc3NfaXRlcmF0b3JfdGFnKdYIsAJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6Z2V0KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdG0qLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCopIGNvbnN01wgvc3RkOjpfXzI6OmN0eXBlPGNoYXI+OjpuYXJyb3coY2hhciwgY2hhcikgY29uc3TYCHNzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZGF0ZV9vcmRlcigpIGNvbnN02QieAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXRfdGltZShzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHRtKikgY29uc3TaCJ4Cc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX2dldF9kYXRlKHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6Omlvc19iYXNlJiwgdW5zaWduZWQgaW50JiwgdG0qKSBjb25zdNsIoQJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0X3dlZWtkYXkoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN03AivAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF93ZWVrZGF5bmFtZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmKSBjb25zdN0IowJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0X21vbnRobmFtZShzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHRtKikgY29uc3TeCK0Cc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X21vbnRobmFtZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmKSBjb25zdN8IngJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fZ2V0X3llYXIoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN04AioAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF95ZWFyKGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYpIGNvbnN04QilAmludCBzdGQ6Ol9fMjo6X19nZXRfdXBfdG9fbl9kaWdpdHM8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmLCBpbnQp4gilAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSosIGNoYXIsIGNoYXIpIGNvbnN04wilAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF9wZXJjZW50KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYpIGNvbnN05AinAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF9kYXkoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3TlCKgCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X2hvdXIoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3TmCKsCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0XzEyX2hvdXIoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3TnCLACc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X2RheV95ZWFyX251bShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmKSBjb25zdOgIqQJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19nZXRfbW9udGgoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3TpCKoCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X21pbnV0ZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj4gY29uc3QmKSBjb25zdOoIqQJzdGQ6Ol9fMjo6dGltZV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19nZXRfd2hpdGVfc3BhY2Uoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3TrCKkCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X2FtX3BtKGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYpIGNvbnN07AiqAnN0ZDo6X18yOjp0aW1lX2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+OjpfX2dldF9zZWNvbmQoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3TtCKsCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X3dlZWtkYXkoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JikgY29uc3TuCKkCc3RkOjpfXzI6OnRpbWVfZ2V0PGNoYXIsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46Ol9fZ2V0X3llYXI0KGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYpIGNvbnN07wjLAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpnZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSosIHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KikgY29uc3TwCDVzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46Om5hcnJvdyh3Y2hhcl90LCBjaGFyKSBjb25zdPEIswJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0X3RpbWUoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN08gizAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXRfZGF0ZShzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHRtKikgY29uc3TzCHFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX2lzX2xvbmcoKSBjb25zdPQItgJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0X3dlZWtkYXkoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN09QjHAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF93ZWVrZGF5bmFtZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmKSBjb25zdPYIuAJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0X21vbnRobmFtZShzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHRtKikgY29uc3T3CMUCc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X21vbnRobmFtZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmKSBjb25zdPgIswJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fZ2V0X3llYXIoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSopIGNvbnN0+QjAAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF95ZWFyKGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYpIGNvbnN0+gi9AmludCBzdGQ6Ol9fMjo6X19nZXRfdXBfdG9fbl9kaWdpdHM8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPihzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmLCBpbnQp+wi6AnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCB0bSosIGNoYXIsIGNoYXIpIGNvbnN0/Ai9AnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF9wZXJjZW50KHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYpIGNvbnN0/Qi/AnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF9kYXkoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3T+CMACc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X2hvdXIoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3T/CMMCc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0XzEyX2hvdXIoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SACcgCc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X2RheV95ZWFyX251bShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmKSBjb25zdIEJwQJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19nZXRfbW9udGgoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SCCcICc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X21pbnV0ZShpbnQmLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD4gY29uc3QmKSBjb25zdIMJwQJzdGQ6Ol9fMjo6dGltZV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19nZXRfd2hpdGVfc3BhY2Uoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SECcECc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X2FtX3BtKGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYpIGNvbnN0hQnCAnN0ZDo6X18yOjp0aW1lX2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+OjpfX2dldF9zZWNvbmQoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SGCcMCc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X3dlZWtkYXkoaW50Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgdW5zaWduZWQgaW50Jiwgc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+IGNvbnN0JikgY29uc3SHCcECc3RkOjpfXzI6OnRpbWVfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46Ol9fZ2V0X3llYXI0KGludCYsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYpIGNvbnN0iAnfAXN0ZDo6X18yOjp0aW1lX3B1dDxjaGFyLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppb3NfYmFzZSYsIGNoYXIsIHRtIGNvbnN0KiwgY2hhciwgY2hhcikgY29uc3SJCUpzdGQ6Ol9fMjo6X190aW1lX3B1dDo6X19kb19wdXQoY2hhciosIGNoYXIqJiwgdG0gY29uc3QqLCBjaGFyLCBjaGFyKSBjb25zdIoJjQFzdGQ6Ol9fMjo6ZW5hYmxlX2lmPChpc19tb3ZlX2NvbnN0cnVjdGlibGU8Y2hhcj46OnZhbHVlKSAmJiAoaXNfbW92ZV9hc3NpZ25hYmxlPGNoYXI+Ojp2YWx1ZSksIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjpzd2FwPGNoYXI+KGNoYXImLCBjaGFyJimLCVZ1bnNpZ25lZCBsb25nIHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OmNvdW50b2Y8Y2hhcj4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqKYwJ8QFzdGQ6Ol9fMjo6dGltZV9wdXQ8d2NoYXJfdCwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fcHV0KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB3Y2hhcl90LCB0bSBjb25zdCosIGNoYXIsIGNoYXIpIGNvbnN0jQlQc3RkOjpfXzI6Ol9fdGltZV9wdXQ6Ol9fZG9fcHV0KHdjaGFyX3QqLCB3Y2hhcl90KiYsIHRtIGNvbnN0KiwgY2hhciwgY2hhcikgY29uc3SOCV91bnNpZ25lZCBsb25nIHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OmNvdW50b2Y8d2NoYXJfdD4od2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqKY8JZXN0ZDo6X18yOjpfX2xpYmNwcF9tYnNydG93Y3NfbCh3Y2hhcl90KiwgY2hhciBjb25zdCoqLCB1bnNpZ25lZCBsb25nLCBfX21ic3RhdGVfdCosIF9fbG9jYWxlX3N0cnVjdCopkAk7c3RkOjpfXzI6Om1vbmV5cHVuY3Q8Y2hhciwgZmFsc2U+Ojpkb19kZWNpbWFsX3BvaW50KCkgY29uc3SRCTZzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCBmYWxzZT46OmRvX2dyb3VwaW5nKCkgY29uc3SSCTtzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCBmYWxzZT46OmRvX25lZ2F0aXZlX3NpZ24oKSBjb25zdJMJOHN0ZDo6X18yOjptb25leXB1bmN0PGNoYXIsIGZhbHNlPjo6ZG9fcG9zX2Zvcm1hdCgpIGNvbnN0lAk+c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgZmFsc2U+Ojpkb19kZWNpbWFsX3BvaW50KCkgY29uc3SVCTxzdGQ6Ol9fMjo6bW9uZXlwdW5jdDx3Y2hhcl90LCBmYWxzZT46OmRvX2N1cnJfc3ltYm9sKCkgY29uc3SWCW5zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpiYXNpY19zdHJpbmcoKZcJaHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9femVybygpmAk+c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgZmFsc2U+Ojpkb19uZWdhdGl2ZV9zaWduKCkgY29uc3SZCakCc3RkOjpfXzI6Om1vbmV5X2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGRvdWJsZSYpIGNvbnN0mgmMA3N0ZDo6X18yOjptb25leV9nZXQ8Y2hhciwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6X19kb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgYm9vbCwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50JiwgYm9vbCYsIHN0ZDo6X18yOjpjdHlwZTxjaGFyPiBjb25zdCYsIHN0ZDo6X18yOjp1bmlxdWVfcHRyPGNoYXIsIHZvaWQgKCopKHZvaWQqKT4mLCBjaGFyKiYsIGNoYXIqKZsJOHN0ZDo6X18yOjp1bmlxdWVfcHRyPGNoYXIsIHZvaWQgKCopKHZvaWQqKT46OmdldCgpIGNvbnN0nAndA3N0ZDo6X18yOjpfX21vbmV5X2dldDxjaGFyPjo6X19nYXRoZXJfaW5mbyhib29sLCBzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0Jiwgc3RkOjpfXzI6Om1vbmV5X2Jhc2U6OnBhdHRlcm4mLCBjaGFyJiwgY2hhciYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCBpbnQmKZ0JUnN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+OjpvcGVyYXRvcisrKGludCmeCagBc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPjo6X193cmFwX2l0ZXI8Y2hhcio+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4gY29uc3QmLCBzdGQ6Ol9fMjo6ZW5hYmxlX2lmPGlzX2NvbnZlcnRpYmxlPGNoYXIqLCBjaGFyIGNvbnN0Kj46OnZhbHVlLCB2b2lkPjo6dHlwZSopnwl9Ym9vbCBzdGQ6Ol9fMjo6b3BlcmF0b3IhPTxjaGFyIGNvbnN0KiwgY2hhcio+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyIGNvbnN0Kj4gY29uc3QmLCBzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhcio+IGNvbnN0JimgCWZ2b2lkIHN0ZDo6X18yOjpfX2RvdWJsZV9vcl9ub3RoaW5nPGNoYXI+KHN0ZDo6X18yOjp1bmlxdWVfcHRyPGNoYXIsIHZvaWQgKCopKHZvaWQqKT4mLCBjaGFyKiYsIGNoYXIqJimhCYYBdm9pZCBzdGQ6Ol9fMjo6X19kb3VibGVfb3Jfbm90aGluZzx1bnNpZ25lZCBpbnQ+KHN0ZDo6X18yOjp1bmlxdWVfcHRyPHVuc2lnbmVkIGludCwgdm9pZCAoKikodm9pZCopPiYsIHVuc2lnbmVkIGludComLCB1bnNpZ25lZCBpbnQqJimiCfMCc3RkOjpfXzI6Om1vbmV5X2dldDxjaGFyLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+JikgY29uc3SjCdoBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19hcHBlbmRfZm9yd2FyZF91bnNhZmU8Y2hhcio+KGNoYXIqLCBjaGFyKimkCXdzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCB0cnVlPiBjb25zdCYgc3RkOjpfXzI6OnVzZV9mYWNldDxzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCB0cnVlPiA+KHN0ZDo6X18yOjpsb2NhbGUgY29uc3QmKaUJNHN0ZDo6X18yOjptb25leXB1bmN0PGNoYXIsIHRydWU+OjpuZWdfZm9ybWF0KCkgY29uc3SmCTdzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCB0cnVlPjo6bmVnYXRpdmVfc2lnbigpIGNvbnN0pwm5AXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Om9wZXJhdG9yPShzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+JiYpqAk1c3RkOjpfXzI6Om1vbmV5cHVuY3Q8Y2hhciwgdHJ1ZT46OmZyYWNfZGlnaXRzKCkgY29uc3SpCXlzdGQ6Ol9fMjo6bW9uZXlwdW5jdDxjaGFyLCBmYWxzZT4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6Om1vbmV5cHVuY3Q8Y2hhciwgZmFsc2U+ID4oc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYpqgnvAWJvb2wgc3RkOjpfXzI6OmVxdWFsPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjxjaGFyKj4sIHN0ZDo6X18yOjpfX2VxdWFsX3RvPGNoYXIsIGNoYXI+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPiwgc3RkOjpfXzI6Ol9fZXF1YWxfdG88Y2hhciwgY2hhcj4pqwkzc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIqPjo6b3BlcmF0b3IrKGxvbmcpIGNvbnN0rAk2c3RkOjpfXzI6OnVuaXF1ZV9wdHI8Y2hhciwgdm9pZCAoKikodm9pZCopPjo6cmVsZWFzZSgprQk+c3RkOjpfXzI6OnVuaXF1ZV9wdHI8dW5zaWduZWQgaW50LCB2b2lkICgqKSh2b2lkKik+OjpyZWxlYXNlKCmuCb4Cc3RkOjpfXzI6Om1vbmV5X2dldDx3Y2hhcl90LCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB1bnNpZ25lZCBpbnQmLCBsb25nIGRvdWJsZSYpIGNvbnN0rwmtA3N0ZDo6X18yOjptb25leV9nZXQ8d2NoYXJfdCwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6X19kb19nZXQoc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgYm9vbCwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYsIHVuc2lnbmVkIGludCwgdW5zaWduZWQgaW50JiwgYm9vbCYsIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYsIHN0ZDo6X18yOjp1bmlxdWVfcHRyPHdjaGFyX3QsIHZvaWQgKCopKHZvaWQqKT4mLCB3Y2hhcl90KiYsIHdjaGFyX3QqKbAJgQRzdGQ6Ol9fMjo6X19tb25leV9nZXQ8d2NoYXJfdD46Ol9fZ2F0aGVyX2luZm8oYm9vbCwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYsIHN0ZDo6X18yOjptb25leV9iYXNlOjpwYXR0ZXJuJiwgd2NoYXJfdCYsIHdjaGFyX3QmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+JiwgaW50JimxCVhzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPjo6b3BlcmF0b3IrKyhpbnQpsgm3AXN0ZDo6X18yOjpfX3dyYXBfaXRlcjx3Y2hhcl90IGNvbnN0Kj46Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPihzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8d2NoYXJfdCo+IGNvbnN0Jiwgc3RkOjpfXzI6OmVuYWJsZV9pZjxpc19jb252ZXJ0aWJsZTx3Y2hhcl90Kiwgd2NoYXJfdCBjb25zdCo+Ojp2YWx1ZSwgdm9pZD46OnR5cGUqKbMJkQNzdGQ6Ol9fMjo6bW9uZXlfZ2V0PHdjaGFyX3QsIHN0ZDo6X18yOjppc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+ID46OmRvX2dldChzdGQ6Ol9fMjo6aXN0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiwgc3RkOjpfXzI6OmlzdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIGJvb2wsIHN0ZDo6X18yOjppb3NfYmFzZSYsIHVuc2lnbmVkIGludCYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mKSBjb25zdLQJZ3N0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmNsZWFyKCm1CX5zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3NldF9sb25nX3NpemUodW5zaWduZWQgbG9uZym2CX9zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3NldF9zaG9ydF9zaXplKHVuc2lnbmVkIGxvbmcptwn1AXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9fYXBwZW5kX2ZvcndhcmRfdW5zYWZlPHdjaGFyX3QqPih3Y2hhcl90Kiwgd2NoYXJfdCopuAl9c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgdHJ1ZT4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgdHJ1ZT4gPihzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0Jim5CcsBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6b3BlcmF0b3I9KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mJim6CX9zdGQ6Ol9fMjo6bW9uZXlwdW5jdDx3Y2hhcl90LCBmYWxzZT4gY29uc3QmIHN0ZDo6X18yOjp1c2VfZmFjZXQ8c3RkOjpfXzI6Om1vbmV5cHVuY3Q8d2NoYXJfdCwgZmFsc2U+ID4oc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYpuwmKAmJvb2wgc3RkOjpfXzI6OmVxdWFsPHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx3Y2hhcl90Kj4sIHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx3Y2hhcl90Kj4sIHN0ZDo6X18yOjpfX2VxdWFsX3RvPHdjaGFyX3QsIHdjaGFyX3Q+ID4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPiwgc3RkOjpfXzI6Ol9fZXF1YWxfdG88d2NoYXJfdCwgd2NoYXJfdD4pvAk2c3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QqPjo6b3BlcmF0b3IrKGxvbmcpIGNvbnN0vQnlAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fbW92ZV9hc3NpZ24oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCB0cnVlPim+CfcBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19tb3ZlX2Fzc2lnbihzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+Jiwgc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIHRydWU+Kb8J3AFzdGQ6Ol9fMjo6bW9uZXlfcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46OmRvX3B1dChzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiwgYm9vbCwgc3RkOjpfXzI6Omlvc19iYXNlJiwgY2hhciwgbG9uZyBkb3VibGUpIGNvbnN0wAmLA3N0ZDo6X18yOjpfX21vbmV5X3B1dDxjaGFyPjo6X19nYXRoZXJfaW5mbyhib29sLCBib29sLCBzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0Jiwgc3RkOjpfXzI6Om1vbmV5X2Jhc2U6OnBhdHRlcm4mLCBjaGFyJiwgY2hhciYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiYsIGludCYpwQnZA3N0ZDo6X18yOjpfX21vbmV5X3B1dDxjaGFyPjo6X19mb3JtYXQoY2hhciosIGNoYXIqJiwgY2hhciomLCB1bnNpZ25lZCBpbnQsIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0Kiwgc3RkOjpfXzI6OmN0eXBlPGNoYXI+IGNvbnN0JiwgYm9vbCwgc3RkOjpfXzI6Om1vbmV5X2Jhc2U6OnBhdHRlcm4gY29uc3QmLCBjaGFyLCBjaGFyLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmLCBpbnQpwgk0c3RkOjpfXzI6Om1vbmV5cHVuY3Q8Y2hhciwgdHJ1ZT46OnBvc19mb3JtYXQoKSBjb25zdMMJjgFjaGFyKiBzdGQ6Ol9fMjo6Y29weTxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8Y2hhciBjb25zdCo+LCBjaGFyKj4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPGNoYXIgY29uc3QqPiwgY2hhciopxAmtAnN0ZDo6X18yOjptb25leV9wdXQ8Y2hhciwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4gPjo6ZG9fcHV0KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCBjaGFyLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+IGNvbnN0JikgY29uc3TFCe4Bc3RkOjpfXzI6Om1vbmV5X3B1dDx3Y2hhcl90LCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+Ojpkb19wdXQoc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4sIGJvb2wsIHN0ZDo6X18yOjppb3NfYmFzZSYsIHdjaGFyX3QsIGxvbmcgZG91YmxlKSBjb25zdMYJpgNzdGQ6Ol9fMjo6X19tb25leV9wdXQ8d2NoYXJfdD46Ol9fZ2F0aGVyX2luZm8oYm9vbCwgYm9vbCwgc3RkOjpfXzI6OmxvY2FsZSBjb25zdCYsIHN0ZDo6X18yOjptb25leV9iYXNlOjpwYXR0ZXJuJiwgd2NoYXJfdCYsIHdjaGFyX3QmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Jiwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mLCBpbnQmKccJhgRzdGQ6Ol9fMjo6X19tb25leV9wdXQ8d2NoYXJfdD46Ol9fZm9ybWF0KHdjaGFyX3QqLCB3Y2hhcl90KiYsIHdjaGFyX3QqJiwgdW5zaWduZWQgaW50LCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCosIHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90PiBjb25zdCYsIGJvb2wsIHN0ZDo6X18yOjptb25leV9iYXNlOjpwYXR0ZXJuIGNvbnN0Jiwgd2NoYXJfdCwgd2NoYXJfdCwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4gY29uc3QmLCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0JiwgaW50KcgJoAF3Y2hhcl90KiBzdGQ6Ol9fMjo6Y29weTxzdGQ6Ol9fMjo6X193cmFwX2l0ZXI8d2NoYXJfdCBjb25zdCo+LCB3Y2hhcl90Kj4oc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QgY29uc3QqPiwgc3RkOjpfXzI6Ol9fd3JhcF9pdGVyPHdjaGFyX3QgY29uc3QqPiwgd2NoYXJfdCopyQnIAnN0ZDo6X18yOjptb25leV9wdXQ8d2NoYXJfdCwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4gPjo6ZG9fcHV0KHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+LCBib29sLCBzdGQ6Ol9fMjo6aW9zX2Jhc2UmLCB3Y2hhcl90LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0JikgY29uc3TKCZ8Bc3RkOjpfXzI6OmVuYWJsZV9pZjxpc190cml2aWFsbHlfY29weV9hc3NpZ25hYmxlPHdjaGFyX3Q+Ojp2YWx1ZSwgd2NoYXJfdCBjb25zdCo+Ojp0eXBlIHN0ZDo6X18yOjpfX3Vud3JhcF9pdGVyPHdjaGFyX3Q+KHN0ZDo6X18yOjpfX3dyYXBfaXRlcjx3Y2hhcl90IGNvbnN0Kj4pywnwAXN0ZDo6X18yOjplbmFibGVfaWY8KGlzX3NhbWU8c3RkOjpfXzI6OnJlbW92ZV9jb25zdDx3Y2hhcl90IGNvbnN0Pjo6dHlwZSwgd2NoYXJfdD46OnZhbHVlKSAmJiAoaXNfdHJpdmlhbGx5X2NvcHlfYXNzaWduYWJsZTx3Y2hhcl90Pjo6dmFsdWUpLCB3Y2hhcl90Kj46OnR5cGUgc3RkOjpfXzI6Ol9fY29weTx3Y2hhcl90IGNvbnN0LCB3Y2hhcl90Pih3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCosIHdjaGFyX3QqKcwJngFzdGQ6Ol9fMjo6bWVzc2FnZXM8Y2hhcj46OmRvX29wZW4oc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYsIHN0ZDo6X18yOjpsb2NhbGUgY29uc3QmKSBjb25zdM0JlAFzdGQ6Ol9fMjo6bWVzc2FnZXM8Y2hhcj46OmRvX2dldChsb25nLCBpbnQsIGludCwgc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiBjb25zdCYpIGNvbnN0zgm+AnN0ZDo6X18yOjpiYWNrX2luc2VydF9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+ID4gc3RkOjpfXzI6OmJhY2tfaW5zZXJ0ZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4mKc8JuANzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+IHN0ZDo6X18yOjpfX25hcnJvd190b191dGY4PDh1bD46Om9wZXJhdG9yKCk8c3RkOjpfXzI6OmJhY2tfaW5zZXJ0X2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiwgY2hhcj4oc3RkOjpfXzI6OmJhY2tfaW5zZXJ0X2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqKSBjb25zdNAJjgFzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+OjpvcGVyYXRvcj0oY2hhciBjb25zdCYp0QmgAXN0ZDo6X18yOjptZXNzYWdlczx3Y2hhcl90Pjo6ZG9fZ2V0KGxvbmcsIGludCwgaW50LCBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+IGNvbnN0JikgY29uc3TSCcIDc3RkOjpfXzI6OmJhY2tfaW5zZXJ0X2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gPiBzdGQ6Ol9fMjo6X19uYXJyb3dfdG9fdXRmODwzMnVsPjo6b3BlcmF0b3IoKTxzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+LCB3Y2hhcl90PihzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPiA+LCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdCopIGNvbnN00wnZAnN0ZDo6X18yOjpiYWNrX2luc2VydF9pdGVyYXRvcjxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+ID4gc3RkOjpfXzI6OmJhY2tfaW5zZXJ0ZXI8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiA+KHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4mKdQJ0ANzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiA+IHN0ZDo6X18yOjpfX3dpZGVuX2Zyb21fdXRmODwzMnVsPjo6b3BlcmF0b3IoKTxzdGQ6Ol9fMjo6YmFja19pbnNlcnRfaXRlcmF0b3I8c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPiA+ID4oc3RkOjpfXzI6OmJhY2tfaW5zZXJ0X2l0ZXJhdG9yPHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID4gPiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqKSBjb25zdNUJRnN0ZDo6X18yOjpjb2RlY3Z0PGNoYXIzMl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmNvZGVjdnQodW5zaWduZWQgbG9uZynWCTlzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46On5jb2RlY3Z0KCnXCS1zdGQ6Ol9fMjo6bG9jYWxlOjpfX2ltcDo6X19pbXAodW5zaWduZWQgbG9uZynYCS1zdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldDo6ZmFjZXQodW5zaWduZWQgbG9uZynZCX5zdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX3ZlY3Rvcl9iYXNlKCnaCYIBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX3ZhbGxvY2F0ZSh1bnNpZ25lZCBsb25nKdsJiQFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Ol9fY29uc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBsb25nKdwJdHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6c2l6ZSgpIGNvbnN03Ql2c3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6Y2xlYXIoKd4JjgFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Ol9fYW5ub3RhdGVfc2hyaW5rKHVuc2lnbmVkIGxvbmcpIGNvbnN03wkdc3RkOjpfXzI6OmxvY2FsZTo6aWQ6Ol9fZ2V0KCngCUBzdGQ6Ol9fMjo6bG9jYWxlOjpfX2ltcDo6aW5zdGFsbChzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIGxvbmcp4QlIc3RkOjpfXzI6OmN0eXBlPGNoYXI+OjpjdHlwZSh1bnNpZ25lZCBzaG9ydCBjb25zdCosIGJvb2wsIHVuc2lnbmVkIGxvbmcp4gkbc3RkOjpfXzI6OmxvY2FsZTo6Y2xhc3NpYygp4wmBAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6b3BlcmF0b3JbXSh1bnNpZ25lZCBsb25nKeQJiQFzdGQ6Ol9fMjo6dW5pcXVlX3B0cjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCwgc3RkOjpfXzI6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6cmVsZWFzZT46OnVuaXF1ZV9wdHI8dHJ1ZSwgdm9pZD4oc3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqKeUJfXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6cmVzaXplKHVuc2lnbmVkIGxvbmcp5gkhc3RkOjpfXzI6OmxvY2FsZTo6X19pbXA6On5fX2ltcCgp5wmBAXN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6X19hbm5vdGF0ZV9kZWxldGUoKSBjb25zdOgJI3N0ZDo6X18yOjpsb2NhbGU6Ol9faW1wOjp+X19pbXAoKS4x6Ql/c3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2FwcGVuZCh1bnNpZ25lZCBsb25nKeoJMXN0ZDo6X18yOjpsb2NhbGU6OmxvY2FsZShzdGQ6Ol9fMjo6bG9jYWxlIGNvbnN0JinrCRxzdGQ6Ol9fMjo6bG9jYWxlOjpfX2dsb2JhbCgp7Akac3RkOjpfXzI6OmxvY2FsZTo6bG9jYWxlKCntCR5zdGQ6Ol9fMjo6bG9jYWxlOjppZDo6X19pbml0KCnuCYwBdm9pZCBzdGQ6Ol9fMjo6Y2FsbF9vbmNlPHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6Ol9fZmFrZV9iaW5kPihzdGQ6Ol9fMjo6b25jZV9mbGFnJiwgc3RkOjpfXzI6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6X19mYWtlX2JpbmQmJinvCStzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldDo6X19vbl96ZXJvX3NoYXJlZCgp8Alpdm9pZCBzdGQ6Ol9fMjo6X19jYWxsX29uY2VfcHJveHk8c3RkOjpfXzI6OnR1cGxlPHN0ZDo6X18yOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6Ol9fZmFrZV9iaW5kJiY+ID4odm9pZCop8Qk+c3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+Ojpkb19pcyh1bnNpZ25lZCBzaG9ydCwgd2NoYXJfdCkgY29uc3TyCVZzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmRvX2lzKHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KiwgdW5zaWduZWQgc2hvcnQqKSBjb25zdPMJWnN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fc2Nhbl9pcyh1bnNpZ25lZCBzaG9ydCwgd2NoYXJfdCBjb25zdCosIHdjaGFyX3QgY29uc3QqKSBjb25zdPQJW3N0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fc2Nhbl9ub3QodW5zaWduZWQgc2hvcnQsIHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KikgY29uc3T1CTNzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmRvX3RvdXBwZXIod2NoYXJfdCkgY29uc3T2CURzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmRvX3RvdXBwZXIod2NoYXJfdCosIHdjaGFyX3QgY29uc3QqKSBjb25zdPcJM3N0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fdG9sb3dlcih3Y2hhcl90KSBjb25zdPgJRHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fdG9sb3dlcih3Y2hhcl90Kiwgd2NoYXJfdCBjb25zdCopIGNvbnN0+Qkuc3RkOjpfXzI6OmN0eXBlPHdjaGFyX3Q+Ojpkb193aWRlbihjaGFyKSBjb25zdPoJTHN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fd2lkZW4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCB3Y2hhcl90KikgY29uc3T7CThzdGQ6Ol9fMjo6Y3R5cGU8d2NoYXJfdD46OmRvX25hcnJvdyh3Y2hhcl90LCBjaGFyKSBjb25zdPwJVnN0ZDo6X18yOjpjdHlwZTx3Y2hhcl90Pjo6ZG9fbmFycm93KHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0KiwgY2hhciwgY2hhciopIGNvbnN0/Qkfc3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojp+Y3R5cGUoKf4JIXN0ZDo6X18yOjpjdHlwZTxjaGFyPjo6fmN0eXBlKCkuMf8JLXN0ZDo6X18yOjpjdHlwZTxjaGFyPjo6ZG9fdG91cHBlcihjaGFyKSBjb25zdIAKO3N0ZDo6X18yOjpjdHlwZTxjaGFyPjo6ZG9fdG91cHBlcihjaGFyKiwgY2hhciBjb25zdCopIGNvbnN0gQotc3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojpkb190b2xvd2VyKGNoYXIpIGNvbnN0ggo7c3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojpkb190b2xvd2VyKGNoYXIqLCBjaGFyIGNvbnN0KikgY29uc3SDCkZzdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj46OmRvX3dpZGVuKGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgY2hhciopIGNvbnN0hAoyc3RkOjpfXzI6OmN0eXBlPGNoYXI+Ojpkb19uYXJyb3coY2hhciwgY2hhcikgY29uc3SFCk1zdGQ6Ol9fMjo6Y3R5cGU8Y2hhcj46OmRvX25hcnJvdyhjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIsIGNoYXIqKSBjb25zdIYKhAFzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyLCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX291dChfX21ic3RhdGVfdCYsIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdComLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SHCmBzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyLCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX3Vuc2hpZnQoX19tYnN0YXRlX3QmLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SICj9zdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyLCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2VuY29kaW5nKCkgY29uc3SJCnJzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyLCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2xlbmd0aChfX21ic3RhdGVfdCYsIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykgY29uc3SKCjtzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46On5jb2RlY3Z0KCkuMYsKkAFzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX291dChfX21ic3RhdGVfdCYsIHdjaGFyX3QgY29uc3QqLCB3Y2hhcl90IGNvbnN0Kiwgd2NoYXJfdCBjb25zdComLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SMCnVzdGQ6Ol9fMjo6X19saWJjcHBfd2NzbnJ0b21ic19sKGNoYXIqLCB3Y2hhcl90IGNvbnN0KiosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcsIF9fbWJzdGF0ZV90KiwgX19sb2NhbGVfc3RydWN0KimNCkxzdGQ6Ol9fMjo6X19saWJjcHBfd2NydG9tYl9sKGNoYXIqLCB3Y2hhcl90LCBfX21ic3RhdGVfdCosIF9fbG9jYWxlX3N0cnVjdCopjgqPAXN0ZDo6X18yOjpjb2RlY3Z0PHdjaGFyX3QsIGNoYXIsIF9fbWJzdGF0ZV90Pjo6ZG9faW4oX19tYnN0YXRlX3QmLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqJiwgd2NoYXJfdCosIHdjaGFyX3QqLCB3Y2hhcl90KiYpIGNvbnN0jwp1c3RkOjpfXzI6Ol9fbGliY3BwX21ic25ydG93Y3NfbCh3Y2hhcl90KiwgY2hhciBjb25zdCoqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBfX21ic3RhdGVfdCosIF9fbG9jYWxlX3N0cnVjdCopkApic3RkOjpfXzI6Ol9fbGliY3BwX21icnRvd2NfbCh3Y2hhcl90KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcsIF9fbWJzdGF0ZV90KiwgX19sb2NhbGVfc3RydWN0KimRCmNzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX3Vuc2hpZnQoX19tYnN0YXRlX3QmLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SSCkJzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2VuY29kaW5nKCkgY29uc3STClNzdGQ6Ol9fMjo6X19saWJjcHBfbWJ0b3djX2wod2NoYXJfdCosIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nLCBfX2xvY2FsZV9zdHJ1Y3QqKZQKMXN0ZDo6X18yOjpfX2xpYmNwcF9tYl9jdXJfbWF4X2woX19sb2NhbGVfc3RydWN0KimVCnVzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2xlbmd0aChfX21ic3RhdGVfdCYsIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZykgY29uc3SWCldzdGQ6Ol9fMjo6X19saWJjcHBfbWJybGVuX2woY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcsIF9fbWJzdGF0ZV90KiwgX19sb2NhbGVfc3RydWN0KimXCkRzdGQ6Ol9fMjo6Y29kZWN2dDx3Y2hhcl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX21heF9sZW5ndGgoKSBjb25zdJgKlAFzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyMTZfdCwgY2hhciwgX19tYnN0YXRlX3Q+Ojpkb19vdXQoX19tYnN0YXRlX3QmLCBjaGFyMTZfdCBjb25zdCosIGNoYXIxNl90IGNvbnN0KiwgY2hhcjE2X3QgY29uc3QqJiwgY2hhciosIGNoYXIqLCBjaGFyKiYpIGNvbnN0mQq1AXN0ZDo6X18yOjp1dGYxNl90b191dGY4KHVuc2lnbmVkIHNob3J0IGNvbnN0KiwgdW5zaWduZWQgc2hvcnQgY29uc3QqLCB1bnNpZ25lZCBzaG9ydCBjb25zdComLCB1bnNpZ25lZCBjaGFyKiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqJiwgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmNvZGVjdnRfbW9kZSmaCpMBc3RkOjpfXzI6OmNvZGVjdnQ8Y2hhcjE2X3QsIGNoYXIsIF9fbWJzdGF0ZV90Pjo6ZG9faW4oX19tYnN0YXRlX3QmLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqJiwgY2hhcjE2X3QqLCBjaGFyMTZfdCosIGNoYXIxNl90KiYpIGNvbnN0mwq1AXN0ZDo6X18yOjp1dGY4X3RvX3V0ZjE2KHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgY2hhciBjb25zdComLCB1bnNpZ25lZCBzaG9ydCosIHVuc2lnbmVkIHNob3J0KiwgdW5zaWduZWQgc2hvcnQqJiwgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmNvZGVjdnRfbW9kZSmcCnZzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyMTZfdCwgY2hhciwgX19tYnN0YXRlX3Q+Ojpkb19sZW5ndGgoX19tYnN0YXRlX3QmLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpIGNvbnN0nQqAAXN0ZDo6X18yOjp1dGY4X3RvX3V0ZjE2X2xlbmd0aCh1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcsIHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjpjb2RlY3Z0X21vZGUpngpFc3RkOjpfXzI6OmNvZGVjdnQ8Y2hhcjE2X3QsIGNoYXIsIF9fbWJzdGF0ZV90Pjo6ZG9fbWF4X2xlbmd0aCgpIGNvbnN0nwqUAXN0ZDo6X18yOjpjb2RlY3Z0PGNoYXIzMl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX291dChfX21ic3RhdGVfdCYsIGNoYXIzMl90IGNvbnN0KiwgY2hhcjMyX3QgY29uc3QqLCBjaGFyMzJfdCBjb25zdComLCBjaGFyKiwgY2hhciosIGNoYXIqJikgY29uc3SgCq4Bc3RkOjpfXzI6OnVjczRfdG9fdXRmOCh1bnNpZ25lZCBpbnQgY29uc3QqLCB1bnNpZ25lZCBpbnQgY29uc3QqLCB1bnNpZ25lZCBpbnQgY29uc3QqJiwgdW5zaWduZWQgY2hhciosIHVuc2lnbmVkIGNoYXIqLCB1bnNpZ25lZCBjaGFyKiYsIHVuc2lnbmVkIGxvbmcsIHN0ZDo6X18yOjpjb2RlY3Z0X21vZGUpoQqTAXN0ZDo6X18yOjpjb2RlY3Z0PGNoYXIzMl90LCBjaGFyLCBfX21ic3RhdGVfdD46OmRvX2luKF9fbWJzdGF0ZV90JiwgY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0KiYsIGNoYXIzMl90KiwgY2hhcjMyX3QqLCBjaGFyMzJfdComKSBjb25zdKIKrgFzdGQ6Ol9fMjo6dXRmOF90b191Y3M0KHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBjaGFyIGNvbnN0KiwgdW5zaWduZWQgY2hhciBjb25zdComLCB1bnNpZ25lZCBpbnQqLCB1bnNpZ25lZCBpbnQqLCB1bnNpZ25lZCBpbnQqJiwgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6OmNvZGVjdnRfbW9kZSmjCnZzdGQ6Ol9fMjo6Y29kZWN2dDxjaGFyMzJfdCwgY2hhciwgX19tYnN0YXRlX3Q+Ojpkb19sZW5ndGgoX19tYnN0YXRlX3QmLCBjaGFyIGNvbnN0KiwgY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpIGNvbnN0pAp/c3RkOjpfXzI6OnV0ZjhfdG9fdWNzNF9sZW5ndGgodW5zaWduZWQgY2hhciBjb25zdCosIHVuc2lnbmVkIGNoYXIgY29uc3QqLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBzdGQ6Ol9fMjo6Y29kZWN2dF9tb2RlKaUKJXN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6fm51bXB1bmN0KCmmCidzdGQ6Ol9fMjo6bnVtcHVuY3Q8Y2hhcj46On5udW1wdW5jdCgpLjGnCihzdGQ6Ol9fMjo6bnVtcHVuY3Q8d2NoYXJfdD46On5udW1wdW5jdCgpqAoqc3RkOjpfXzI6Om51bXB1bmN0PHdjaGFyX3Q+Ojp+bnVtcHVuY3QoKS4xqQoyc3RkOjpfXzI6Om51bXB1bmN0PGNoYXI+Ojpkb19kZWNpbWFsX3BvaW50KCkgY29uc3SqCjJzdGQ6Ol9fMjo6bnVtcHVuY3Q8Y2hhcj46OmRvX3Rob3VzYW5kc19zZXAoKSBjb25zdKsKLXN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6ZG9fZ3JvdXBpbmcoKSBjb25zdKwKMHN0ZDo6X18yOjpudW1wdW5jdDx3Y2hhcl90Pjo6ZG9fZ3JvdXBpbmcoKSBjb25zdK0KLXN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6ZG9fdHJ1ZW5hbWUoKSBjb25zdK4KMHN0ZDo6X18yOjpudW1wdW5jdDx3Y2hhcl90Pjo6ZG9fdHJ1ZW5hbWUoKSBjb25zdK8KjAFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpiYXNpY19zdHJpbmc8c3RkOjpudWxscHRyX3Q+KHdjaGFyX3QgY29uc3QqKbAKLnN0ZDo6X18yOjpudW1wdW5jdDxjaGFyPjo6ZG9fZmFsc2VuYW1lKCkgY29uc3SxCjFzdGQ6Ol9fMjo6bnVtcHVuY3Q8d2NoYXJfdD46OmRvX2ZhbHNlbmFtZSgpIGNvbnN0sgptc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6b3BlcmF0b3I9KGNoYXIgY29uc3QqKbMKNXN0ZDo6X18yOjpfX3RpbWVfZ2V0X2Nfc3RvcmFnZTxjaGFyPjo6X193ZWVrcygpIGNvbnN0tAoWc3RkOjpfXzI6OmluaXRfd2Vla3MoKbUKGl9fY3h4X2dsb2JhbF9hcnJheV9kdG9yLjU1tgo4c3RkOjpfXzI6Ol9fdGltZV9nZXRfY19zdG9yYWdlPHdjaGFyX3Q+OjpfX3dlZWtzKCkgY29uc3S3ChdzdGQ6Ol9fMjo6aW5pdF93d2Vla3MoKbgKGl9fY3h4X2dsb2JhbF9hcnJheV9kdG9yLjcwuQp5c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6b3BlcmF0b3I9KHdjaGFyX3QgY29uc3QqKboKNnN0ZDo6X18yOjpfX3RpbWVfZ2V0X2Nfc3RvcmFnZTxjaGFyPjo6X19tb250aHMoKSBjb25zdLsKF3N0ZDo6X18yOjppbml0X21vbnRocygpvAoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuODW9CjlzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fbW9udGhzKCkgY29uc3S+ChhzdGQ6Ol9fMjo6aW5pdF93bW9udGhzKCm/ChtfX2N4eF9nbG9iYWxfYXJyYXlfZHRvci4xMDnACjVzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8Y2hhcj46Ol9fYW1fcG0oKSBjb25zdMEKFnN0ZDo6X18yOjppbml0X2FtX3BtKCnCChtfX2N4eF9nbG9iYWxfYXJyYXlfZHRvci4xMzPDCjhzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fYW1fcG0oKSBjb25zdMQKF3N0ZDo6X18yOjppbml0X3dhbV9wbSgpxQobX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMTM2xgoxc3RkOjpfXzI6Ol9fdGltZV9nZXRfY19zdG9yYWdlPGNoYXI+OjpfX3goKSBjb25zdMcKGV9fY3h4X2dsb2JhbF9hcnJheV9kdG9yLjHICjRzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9feCgpIGNvbnN0yQoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMzLKCjFzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8Y2hhcj46Ol9fWCgpIGNvbnN0ywoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMzTMCjRzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fWCgpIGNvbnN0zQoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMzbOCjFzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8Y2hhcj46Ol9fYygpIGNvbnN0zwoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuMzjQCjRzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fYygpIGNvbnN00QoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuNDDSCjFzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8Y2hhcj46Ol9fcigpIGNvbnN00woaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuNDLUCjRzdGQ6Ol9fMjo6X190aW1lX2dldF9jX3N0b3JhZ2U8d2NoYXJfdD46Ol9fcigpIGNvbnN01QoaX19jeHhfZ2xvYmFsX2FycmF5X2R0b3IuNDTWCmVzdGQ6Ol9fMjo6aXRlcmF0b3JfdHJhaXRzPHdjaGFyX3QqPjo6ZGlmZmVyZW5jZV90eXBlIHN0ZDo6X18yOjpkaXN0YW5jZTx3Y2hhcl90Kj4od2NoYXJfdCosIHdjaGFyX3QqKdcKcHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmNhcGFjaXR5KCkgY29uc3TYCnlzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3NldF9zaXplKHVuc2lnbmVkIGxvbmcp2Qppc3RkOjpfXzI6OnRpbWVfcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46On50aW1lX3B1dCgp2gprc3RkOjpfXzI6OnRpbWVfcHV0PGNoYXIsIHN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+ID46On50aW1lX3B1dCgpLjHbCn1zdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmRlYWxsb2NhdGUoc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiYsIHdjaGFyX3QqLCB1bnNpZ25lZCBsb25nKdwKdnN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9fZ2V0X2xvbmdfY2FwKCkgY29uc3TdCnhzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Om1heF9zaXplKCkgY29uc3TeCnhzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2FsbG9jKCnfCqsBc3RkOjpfXzI6OmFsbG9jYXRvcl90cmFpdHM8c3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46OmFsbG9jYXRlKHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiYsIHVuc2lnbmVkIGxvbmcp4Ap6c3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2U8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6X19lbmRfY2FwKCnhCosBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2Fubm90YXRlX25ldyh1bnNpZ25lZCBsb25nKSBjb25zdOIKjAJzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbjo6X0NvbnN0cnVjdFRyYW5zYWN0aW9uKHN0ZDo6X18yOjp2ZWN0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPiYsIHVuc2lnbmVkIGxvbmcp4wqFAXN0ZDo6X18yOjpfX2NvbXByZXNzZWRfcGFpcl9lbGVtPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiosIDAsIGZhbHNlPjo6X19jb21wcmVzc2VkX3BhaXJfZWxlbTxzdGQ6Om51bGxwdHJfdCwgdm9pZD4oc3RkOjpudWxscHRyX3QmJinkCl9zdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD46OmFsbG9jYXRlKHVuc2lnbmVkIGxvbmcsIHZvaWQgY29uc3QqKeUKf3N0ZDo6X18yOjpfX3ZlY3Rvcl9iYXNlPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46OmNhcGFjaXR5KCkgY29uc3TmCoMCdm9pZCBzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6X19jb25zdHJ1Y3Q8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqPihzdGQ6Ol9fMjo6aW50ZWdyYWxfY29uc3RhbnQ8Ym9vbCwgZmFsc2U+LCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mLCBzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqKecKyAFzdGQ6Ol9fMjo6YWxsb2NhdG9yX3RyYWl0czxzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4gPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mLCBzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqLCB1bnNpZ25lZCBsb25nKegKmwFzdGQ6Ol9fMjo6X192ZWN0b3JfYmFzZTxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2Rlc3RydWN0X2F0X2VuZChzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqKekKb3N0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPjo6ZGVhbGxvY2F0ZShzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqLCB1bnNpZ25lZCBsb25nKeoKInN0ZDo6X18yOjpfX3RpbWVfcHV0OjpfX3RpbWVfcHV0KCnrCogBc3RkOjpfXzI6OnZlY3RvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX3JlY29tbWVuZCh1bnNpZ25lZCBsb25nKSBjb25zdOwK2AFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mPjo6X19zcGxpdF9idWZmZXIodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+JintCpEBc3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+Jj46Ol9fY29uc3RydWN0X2F0X2VuZCh1bnNpZ25lZCBsb25nKe4K8wFzdGQ6Ol9fMjo6dmVjdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+ID46Ol9fc3dhcF9vdXRfY2lyY3VsYXJfYnVmZmVyKHN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiY+JinvCnlzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mPjo6X19hbGxvYygp8Ap7c3RkOjpfXzI6Ol9fc3BsaXRfYnVmZmVyPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kiwgc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+Jj46Ol9fZW5kX2NhcCgp8QrHAXN0ZDo6X18yOjpfX3NwbGl0X2J1ZmZlcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiY+OjpfQ29uc3RydWN0VHJhbnNhY3Rpb246Ol9Db25zdHJ1Y3RUcmFuc2FjdGlvbihzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCoqKiwgdW5zaWduZWQgbG9uZynyCuADc3RkOjpfXzI6OmVuYWJsZV9pZjwoKHN0ZDo6X18yOjppbnRlZ3JhbF9jb25zdGFudDxib29sLCBmYWxzZT46OnZhbHVlKSB8fCAoIShfX2hhc19jb25zdHJ1Y3Q8c3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+LCBib29sKiwgYm9vbD46OnZhbHVlKSkpICYmIChpc190cml2aWFsbHlfbW92ZV9jb25zdHJ1Y3RpYmxlPGJvb2w+Ojp2YWx1ZSksIHZvaWQ+Ojp0eXBlIHN0ZDo6X18yOjphbGxvY2F0b3JfdHJhaXRzPHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiA+OjpfX2NvbnN0cnVjdF9iYWNrd2FyZF93aXRoX2V4Y2VwdGlvbl9ndWFyYW50ZWVzPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0Kj4oc3RkOjpfXzI6Ol9fc3NvX2FsbG9jYXRvcjxzdGQ6Ol9fMjo6bG9jYWxlOjpmYWNldCosIDI4dWw+JiwgYm9vbCosIGJvb2wqLCBib29sKiYp8wp8c3RkOjpfXzI6Ol9fY29tcHJlc3NlZF9wYWlyPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiosIHN0ZDo6X18yOjpfX3Nzb19hbGxvY2F0b3I8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCAyOHVsPiY+OjpzZWNvbmQoKfQKxgFzdGQ6Ol9fMjo6X19zcGxpdF9idWZmZXI8c3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqLCBzdGQ6Ol9fMjo6X19zc29fYWxsb2NhdG9yPHN0ZDo6X18yOjpsb2NhbGU6OmZhY2V0KiwgMjh1bD4mPjo6X19kZXN0cnVjdF9hdF9lbmQoc3RkOjpfXzI6OmxvY2FsZTo6ZmFjZXQqKiwgc3RkOjpfXzI6OmludGVncmFsX2NvbnN0YW50PGJvb2wsIGZhbHNlPin1CkBzdGQ6Ol9fMjo6KGFub255bW91cyBuYW1lc3BhY2UpOjpfX2Zha2VfYmluZDo6b3BlcmF0b3IoKSgpIGNvbnN09gp6c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19yZWNvbW1lbmQodW5zaWduZWQgbG9uZyn3CnxzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX3NldF9sb25nX3BvaW50ZXIod2NoYXJfdCop+Ap9c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19zZXRfbG9uZ19jYXAodW5zaWduZWQgbG9uZyn5CkJzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+OjphbGxvY2F0ZSh1bnNpZ25lZCBsb25nLCB2b2lkIGNvbnN0Kin6CkNsb25nIGRvdWJsZSBzdGQ6Ol9fMjo6X19kb19zdHJ0b2Q8bG9uZyBkb3VibGU+KGNoYXIgY29uc3QqLCBjaGFyKiop+wr4AXN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiA+IHN0ZDo6X18yOjpfX2NvcHlfY29uc3RleHByPGNoYXIqLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4gPiA+KGNoYXIqLCBjaGFyKiwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+ID4p/AqTAnN0ZDo6X18yOjpvc3RyZWFtYnVmX2l0ZXJhdG9yPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90PiA+IHN0ZDo6X18yOjpfX2NvcHlfY29uc3RleHByPHdjaGFyX3QqLCBzdGQ6Ol9fMjo6b3N0cmVhbWJ1Zl9pdGVyYXRvcjx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4gPiA+KHdjaGFyX3QqLCB3Y2hhcl90Kiwgc3RkOjpfXzI6Om9zdHJlYW1idWZfaXRlcmF0b3I8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+ID4p/QpKYm9vbCBzdGQ6Ol9fMjo6X19wdHJfaW5fcmFuZ2U8Y2hhcj4oY2hhciBjb25zdCosIGNoYXIgY29uc3QqLCBjaGFyIGNvbnN0Kin+CnBzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX3NldF9zaXplKHVuc2lnbmVkIGxvbmcp/wq1AXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46OmJhc2ljX3N0cmluZzx3Y2hhcl90Kiwgdm9pZD4od2NoYXJfdCosIHdjaGFyX3QqLCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+IGNvbnN0JimACy1zdGQ6Ol9fMjo6X19zaGFyZWRfY291bnQ6On5fX3NoYXJlZF9jb3VudCgpLjGBCy9zdGQ6Ol9fMjo6X19zaGFyZWRfd2Vha19jb3VudDo6X19yZWxlYXNlX3dlYWsoKYILSXN0ZDo6X18yOjpfX3NoYXJlZF93ZWFrX2NvdW50OjpfX2dldF9kZWxldGVyKHN0ZDo6dHlwZV9pbmZvIGNvbnN0JikgY29uc3SDC0ZzdGQ6Ol9fMjo6X19jYWxsX29uY2UodW5zaWduZWQgbG9uZyB2b2xhdGlsZSYsIHZvaWQqLCB2b2lkICgqKSh2b2lkKikphAsbb3BlcmF0b3IgbmV3KHVuc2lnbmVkIGxvbmcphQs9c3RkOjpfXzI6Ol9fbGliY3BwX3JlZnN0cmluZzo6X19saWJjcHBfcmVmc3RyaW5nKGNoYXIgY29uc3QqKYYLB3dtZW1zZXSHCwh3bWVtbW92ZYgLQ3N0ZDo6X18yOjpfX2Jhc2ljX3N0cmluZ19jb21tb248dHJ1ZT46Ol9fdGhyb3dfbGVuZ3RoX2Vycm9yKCkgY29uc3SJC8EBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6YmFzaWNfc3RyaW5nKHN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID4gY29uc3QmKYoLeXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9faW5pdChjaGFyIGNvbnN0KiwgdW5zaWduZWQgbG9uZymLC2ZzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojp+YmFzaWNfc3RyaW5nKCmMC3lzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+Ojphc3NpZ24oY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcpjQvTAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8Y2hhciwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPGNoYXI+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPGNoYXI+ID46Ol9fZ3Jvd19ieV9hbmRfcmVwbGFjZSh1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCBjaGFyIGNvbnN0KimOC3JzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpyZXNpemUodW5zaWduZWQgbG9uZywgY2hhcimPC3JzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjphcHBlbmQodW5zaWduZWQgbG9uZywgY2hhcimQC3RzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2VyYXNlX3RvX2VuZCh1bnNpZ25lZCBsb25nKZELugFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjpfX2dyb3dfYnkodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZymSCz9zdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj46OmFzc2lnbihjaGFyKiwgdW5zaWduZWQgbG9uZywgY2hhcimTC3lzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPGNoYXIsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czxjaGFyPiwgc3RkOjpfXzI6OmFsbG9jYXRvcjxjaGFyPiA+OjphcHBlbmQoY2hhciBjb25zdCosIHVuc2lnbmVkIGxvbmcplAtmc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6cHVzaF9iYWNrKGNoYXIplQtyc3RkOjpfXzI6OmJhc2ljX3N0cmluZzxjaGFyLCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8Y2hhcj4sIHN0ZDo6X18yOjphbGxvY2F0b3I8Y2hhcj4gPjo6X19pbml0KHVuc2lnbmVkIGxvbmcsIGNoYXIplguFAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9faW5pdCh3Y2hhcl90IGNvbnN0KiwgdW5zaWduZWQgbG9uZymXC29zdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+Ojp+YmFzaWNfc3RyaW5nKCmYC4UBc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6YXNzaWduKHdjaGFyX3QgY29uc3QqLCB1bnNpZ25lZCBsb25nKZkL3wFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjpfX2dyb3dfYnlfYW5kX3JlcGxhY2UodW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgdW5zaWduZWQgbG9uZywgd2NoYXJfdCBjb25zdCopmgvDAXN0ZDo6X18yOjpiYXNpY19zdHJpbmc8d2NoYXJfdCwgc3RkOjpfXzI6OmNoYXJfdHJhaXRzPHdjaGFyX3Q+LCBzdGQ6Ol9fMjo6YWxsb2NhdG9yPHdjaGFyX3Q+ID46Ol9fZ3Jvd19ieSh1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nLCB1bnNpZ25lZCBsb25nKZsLhQFzdGQ6Ol9fMjo6YmFzaWNfc3RyaW5nPHdjaGFyX3QsIHN0ZDo6X18yOjpjaGFyX3RyYWl0czx3Y2hhcl90Piwgc3RkOjpfXzI6OmFsbG9jYXRvcjx3Y2hhcl90PiA+OjphcHBlbmQod2NoYXJfdCBjb25zdCosIHVuc2lnbmVkIGxvbmcpnAtyc3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6cHVzaF9iYWNrKHdjaGFyX3QpnQt+c3RkOjpfXzI6OmJhc2ljX3N0cmluZzx3Y2hhcl90LCBzdGQ6Ol9fMjo6Y2hhcl90cmFpdHM8d2NoYXJfdD4sIHN0ZDo6X18yOjphbGxvY2F0b3I8d2NoYXJfdD4gPjo6X19pbml0KHVuc2lnbmVkIGxvbmcsIHdjaGFyX3QpngtCc3RkOjpfXzI6Ol9fdmVjdG9yX2Jhc2VfY29tbW9uPHRydWU+OjpfX3Rocm93X2xlbmd0aF9lcnJvcigpIGNvbnN0nwsTX19jeGFfZ3VhcmRfYWNxdWlyZaALVl9fY3h4YWJpdjE6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6SW5pdEJ5dGVOb1RocmVhZHM6OkluaXRCeXRlTm9UaHJlYWRzKHVuc2lnbmVkIGludCopoQt5X19jeHhhYml2MTo6KGFub255bW91cyBuYW1lc3BhY2UpOjpHdWFyZE9iamVjdDxfX2N4eGFiaXYxOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OkluaXRCeXRlTm9UaHJlYWRzPjo6Y3hhX2d1YXJkX2FjcXVpcmUoKaILSV9fY3h4YWJpdjE6Oihhbm9ueW1vdXMgbmFtZXNwYWNlKTo6SW5pdEJ5dGVOb1RocmVhZHM6OmFjcXVpcmVfaW5pdF9ieXRlKCmjCxNfX2N4YV9ndWFyZF9yZWxlYXNlpAt5X19jeHhhYml2MTo6KGFub255bW91cyBuYW1lc3BhY2UpOjpHdWFyZE9iamVjdDxfX2N4eGFiaXYxOjooYW5vbnltb3VzIG5hbWVzcGFjZSk6OkluaXRCeXRlTm9UaHJlYWRzPjo6Y3hhX2d1YXJkX3JlbGVhc2UoKaULEl9fY3hhX3B1cmVfdmlydHVhbKYLHHN0ZDo6ZXhjZXB0aW9uOjp3aGF0KCkgY29uc3SnCyBzdGQ6OmxvZ2ljX2Vycm9yOjp+bG9naWNfZXJyb3IoKagLM3N0ZDo6X18yOjpfX2xpYmNwcF9yZWZzdHJpbmc6On5fX2xpYmNwcF9yZWZzdHJpbmcoKakLInN0ZDo6bG9naWNfZXJyb3I6On5sb2dpY19lcnJvcigpLjGqCyJzdGQ6Omxlbmd0aF9lcnJvcjo6fmxlbmd0aF9lcnJvcigpqwthX19jeHhhYml2MTo6X19mdW5kYW1lbnRhbF90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdKwLPGlzX2VxdWFsKHN0ZDo6dHlwZV9pbmZvIGNvbnN0Kiwgc3RkOjp0eXBlX2luZm8gY29uc3QqLCBib29sKa0LXl9fY3h4YWJpdjE6Ol9fZnVuY3Rpb25fdHlwZV9pbmZvOjpjYW5fY2F0Y2goX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCosIHZvaWQqJikgY29uc3SuC1tfX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6Y2FuX2NhdGNoKF9fY3h4YWJpdjE6Ol9fc2hpbV90eXBlX2luZm8gY29uc3QqLCB2b2lkKiYpIGNvbnN0rwsOX19keW5hbWljX2Nhc3SwC2tfX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6cHJvY2Vzc19mb3VuZF9iYXNlX2NsYXNzKF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkKiwgaW50KSBjb25zdLELbl9fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN0sgtxX19jeHhhYml2MTo6X19zaV9jbGFzc190eXBlX2luZm86Omhhc191bmFtYmlndW91c19wdWJsaWNfYmFzZShfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCosIGludCkgY29uc3SzC3NfX2N4eGFiaXYxOjpfX2Jhc2VfY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN0tAtyX19jeHhhYml2MTo6X192bWlfY2xhc3NfdHlwZV9pbmZvOjpoYXNfdW5hbWJpZ3VvdXNfcHVibGljX2Jhc2UoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQqLCBpbnQpIGNvbnN0tQtbX19jeHhhYml2MTo6X19wYmFzZV90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdLYLXV9fY3h4YWJpdjE6Ol9fcG9pbnRlcl90eXBlX2luZm86OmNhbl9jYXRjaChfX2N4eGFiaXYxOjpfX3NoaW1fdHlwZV9pbmZvIGNvbnN0Kiwgdm9pZComKSBjb25zdLcLXF9fY3h4YWJpdjE6Ol9fcG9pbnRlcl90eXBlX2luZm86OmNhbl9jYXRjaF9uZXN0ZWQoX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCopIGNvbnN0uAtmX19jeHhhYml2MTo6X19wb2ludGVyX3RvX21lbWJlcl90eXBlX2luZm86OmNhbl9jYXRjaF9uZXN0ZWQoX19jeHhhYml2MTo6X19zaGltX3R5cGVfaW5mbyBjb25zdCopIGNvbnN0uQuDAV9fY3h4YWJpdjE6Ol9fY2xhc3NfdHlwZV9pbmZvOjpwcm9jZXNzX3N0YXRpY190eXBlX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQpIGNvbnN0ugt2X19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OnByb2Nlc3Nfc3RhdGljX3R5cGVfYmVsb3dfZHN0KF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkIGNvbnN0KiwgaW50KSBjb25zdLsLc19fY3h4YWJpdjE6Ol9fdm1pX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3S8C4EBX19jeHhhYml2MTo6X19iYXNlX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN0vQt0X19jeHhhYml2MTo6X19iYXNlX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3S+C3JfX2N4eGFiaXYxOjpfX3NpX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3S/C29fX2N4eGFiaXYxOjpfX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2JlbG93X2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TAC4ABX19jeHhhYml2MTo6X192bWlfY2xhc3NfdHlwZV9pbmZvOjpzZWFyY2hfYWJvdmVfZHN0KF9fY3h4YWJpdjE6Ol9fZHluYW1pY19jYXN0X2luZm8qLCB2b2lkIGNvbnN0Kiwgdm9pZCBjb25zdCosIGludCwgYm9vbCkgY29uc3TBC39fX2N4eGFiaXYxOjpfX3NpX2NsYXNzX3R5cGVfaW5mbzo6c2VhcmNoX2Fib3ZlX2RzdChfX2N4eGFiaXYxOjpfX2R5bmFtaWNfY2FzdF9pbmZvKiwgdm9pZCBjb25zdCosIHZvaWQgY29uc3QqLCBpbnQsIGJvb2wpIGNvbnN0wgt8X19jeHhhYml2MTo6X19jbGFzc190eXBlX2luZm86OnNlYXJjaF9hYm92ZV9kc3QoX19jeHhhYml2MTo6X19keW5hbWljX2Nhc3RfaW5mbyosIHZvaWQgY29uc3QqLCB2b2lkIGNvbnN0KiwgaW50LCBib29sKSBjb25zdMMLCGRsbWFsbG9jxAsGZGxmcmVlxQsIZGxjYWxsb2PGCwlkbHJlYWxsb2PHCxF0cnlfcmVhbGxvY19jaHVua8gLDWRpc3Bvc2VfY2h1bmvJCwRzYnJrygsFZm1vZGzLCwZzY2FsYm7MCw1fX2ZwY2xhc3NpZnlszQsGbWVtY3B5zgsGbWVtc2V0zwsHbWVtbW92ZdALCV9fdG93cml0ZdELCV9fZndyaXRleNILBnByaW50ZtMLBnN0cmxlbtQLCHNldFRocmV31QsFaHRvbnPWCwVodG9ubNcLCl9fYnN3YXBfMzLYCwlzdGFja1NhdmXZCwpzdGFja0FsbG9j2gsMc3RhY2tSZXN0b3Jl2wsQX19ncm93V2FzbU1lbW9yedwLCmR5bkNhbGxfdmndCwpkeW5DYWxsX2lp3gsOZHluQ2FsbF9paWlpaWnfCw5keW5DYWxsX3ZpaWlpaeALD2R5bkNhbGxfdmlpaWlpaeELC2R5bkNhbGxfdmlp4gsMZHluQ2FsbF9paWlp4wsNZHluQ2FsbF92aWlpaeQLC2R5bkNhbGxfaWlp5QsNZHluQ2FsbF9paWlpaeYLDGR5bkNhbGxfdmlpaecLCWR5bkNhbGxfdugLD2R5bkNhbGxfaWlpaWlpaekLEGR5bkNhbGxfaWlpaWlpaWnqCwlkeW5DYWxsX2nrCw9keW5DYWxsX2lpZGlpaWnsCxFkeW5DYWxsX2lpaWlpaWlpae0LDmR5bkNhbGxfaWlpaWlk7gsYbGVnYWxzdHViJGR5bkNhbGxfdmlpamlp7wsWbGVnYWxzdHViJGR5bkNhbGxfamlqafALGGxlZ2Fsc3R1YiRkeW5DYWxsX2lpaWlpavELGWxlZ2Fsc3R1YiRkeW5DYWxsX2lpaWlpamryCxpsZWdhbHN0dWIkZHluQ2FsbF9paWlpaWlqagBhEHNvdXJjZU1hcHBpbmdVUkxPaHR0cDovL2xvY2FsaG9zdDo4MDgwL3t7eyBGSUxFTkFNRV9SRVBMQUNFTUVOVF9TVFJJTkdTX1dBU01fQklOQVJZX0ZJTEUgfX19Lm1hcA==';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    var binary = tryParseAsDataURI(wasmBinaryFile);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return new Promise(function(resolve, reject) {
    resolve(getBinary());
  });
}



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module['asm'] = exports;
    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');


  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }


  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);
      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}


// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};




// STATICTOP = STATIC_BASE + 63472;
/* global initializers */  __ATINIT__.push({ func: function() { ___wasm_call_ctors() } });




/* no memory initializer */
// {{PRE_LIBRARY}}


  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var err = new Error();
      if (!err.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          err = e;
        }
        if (!err.stack) {
          return '(no stack trace available)';
        }
      }
      return err.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  function ___assert_fail(condition, filename, line, func) {
      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    }

  function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }

  
  function _atexit(func, arg) {
      __ATEXIT__.unshift({ func: func, arg: arg });
    }function ___cxa_atexit(a0,a1
  ) {
  return _atexit(a0,a1);
  }

  
  var ___exception_infos={};
  
  var ___exception_last=0;
  
  function __ZSt18uncaught_exceptionv() { // std::uncaught_exception()
      return __ZSt18uncaught_exceptionv.uncaught_exceptions > 0;
    }function ___cxa_throw(ptr, type, destructor) {
      ___exception_infos[ptr] = {
        ptr: ptr,
        adjusted: [ptr],
        type: type,
        destructor: destructor,
        refcount: 0,
        caught: false,
        rethrown: false
      };
      ___exception_last = ptr;
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exceptions = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exceptions++;
      }
      throw ptr;
    }

  
  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)]=value;
      return value;
    }function ___map_file(pathname, size) {
      setErrNo(63);
      return -1;
    }

  
  
  var PATH={splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  
  var PATH_FS={resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
              var bytesRead = 0;
  
              try {
                bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().indexOf('EOF') != -1) bytesRead = 0;
                else throw e;
              }
  
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  var MEMFS={ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },getFileDataAsRegularArray:function(node) {
        if (node.contents && node.contents.subarray) {
          var arr = [];
          for (var i = 0; i < node.usedBytes; ++i) arr.push(node.contents[i]);
          return arr; // Returns a copy of the original data.
        }
        return node.contents; // No-op, the file contents are already in a JS array. Return as-is.
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
        return;
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
          return;
        }
        if (!node.contents || node.contents.subarray) { // Resize a typed array if that is being used as the backing store.
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
          return;
        }
        // Backing with a JS array.
        if (!node.contents) node.contents = [];
        if (node.contents.length > newSize) node.contents.length = newSize;
        else while (node.contents.length < newSize) node.contents.push(0);
        node.usedBytes = newSize;
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position); // Use typed array write if available.
          else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                contents.buffer === buffer.buffer ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            // malloc() can lead to growing the heap. If targeting the heap, we need to
            // re-acquire the heap buffer object in case growth had occurred.
            var fromHeap = (buffer.buffer == HEAP8.buffer);
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            (fromHeap ? HEAP8 : buffer).set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return setErrNo(e.errno);
      },lookupPath:function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function(parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function(node) {
        FS.hashRemoveNode(node);
      },isRoot:function(node) {
        return node === node.parent;
      },isMountpoint:function(node) {
        return !!node.mounted;
      },isFile:function(mode) {
        return (mode & 61440) === 32768;
      },isDir:function(mode) {
        return (mode & 61440) === 16384;
      },isLink:function(mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function(mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function(mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function(mode) {
        return (mode & 61440) === 4096;
      },isSocket:function(mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return 2;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return 2;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:function(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:function(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:function(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:function(fd) {
        return FS.streams[fd];
      },createStream:function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        var newStream = new FS.FSStream();
        for (var p in stream) {
          newStream[p] = stream[p];
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function(fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function() {
          throw new FS.ErrnoError(70);
        }},major:function(dev) {
        return ((dev) >> 8);
      },minor:function(dev) {
        return ((dev) & 0xff);
      },makedev:function(ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function(dev) {
        return FS.devices[dev];
      },getMounts:function(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function(populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function(type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },lookup:function(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:function(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:function(path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(10);
        }
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        try {
          if (FS.trackingDelegate['willMovePath']) {
            FS.trackingDelegate['willMovePath'](old_path, new_path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
        try {
          if (FS.trackingDelegate['onMovePath']) FS.trackingDelegate['onMovePath'](old_path, new_path);
        } catch(e) {
          err("FS.trackingDelegate['onMovePath']('"+old_path+"', '"+new_path+"') threw an exception: " + e.message);
        }
      },rmdir:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:function(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        try {
          if (FS.trackingDelegate['willDeletePath']) {
            FS.trackingDelegate['willDeletePath'](path);
          }
        } catch(e) {
          err("FS.trackingDelegate['willDeletePath']('"+path+"') threw an exception: " + e.message);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
          if (FS.trackingDelegate['onDeletePath']) FS.trackingDelegate['onDeletePath'](path);
        } catch(e) {
          err("FS.trackingDelegate['onDeletePath']('"+path+"') threw an exception: " + e.message);
        }
      },readlink:function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:function(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:function(path) {
        return FS.stat(path, true);
      },chmod:function(path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function(path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            err("FS.trackingDelegate error on read file: " + path);
          }
        }
        try {
          if (FS.trackingDelegate['onOpenFile']) {
            var trackingFlags = 0;
            if ((flags & 2097155) !== 1) {
              trackingFlags |= FS.tracking.openFlags.READ;
            }
            if ((flags & 2097155) !== 0) {
              trackingFlags |= FS.tracking.openFlags.WRITE;
            }
            FS.trackingDelegate['onOpenFile'](path, trackingFlags);
          }
        } catch(e) {
          err("FS.trackingDelegate['onOpenFile']('"+path+"', flags) threw an exception: " + e.message);
        }
        return stream;
      },close:function(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:function(stream) {
        return stream.fd === null;
      },llseek:function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position !== 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        try {
          if (stream.path && FS.trackingDelegate['onWriteToFile']) FS.trackingDelegate['onWriteToFile'](stream.path);
        } catch(e) {
          err("FS.trackingDelegate['onWriteToFile']('"+stream.path+"') threw an exception: " + e.message);
        }
        return bytesWritten;
      },allocate:function(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function(stream, buffer, offset, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },msync:function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:function(stream) {
        return 0;
      },ioctl:function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:function() {
        return FS.currentPath;
      },chdir:function(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:function() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function(stream, buffer, offset, length, pos) { return length; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device;
        if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
          // for modern web browsers
          var randomBuffer = new Uint8Array(1);
          random_device = function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
        } else
        if (ENVIRONMENT_IS_NODE) {
          // for nodejs with or without crypto support included
          try {
            var crypto_module = require('crypto');
            // nodejs has crypto support
            random_device = function() { return crypto_module['randomBytes'](1)[0]; };
          } catch (e) {
            // nodejs doesn't have crypto support
          }
        } else
        {}
        if (!random_device) {
          // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
          random_device = function() { abort("random_device"); };
        }
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:function() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: function() {
            var node = FS.createNode('/proc/self', 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: function(parent, name) {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: function() { return stream.path } }
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:function() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        var stdout = FS.open('/dev/stdout', 'w');
        var stderr = FS.open('/dev/stderr', 'w');
      },ensureErrnoError:function() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:function(input, output, error) {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        var fflush = Module['_fflush'];
        if (fflush) fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function(canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function(parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function(relative, base) {
        return PATH_FS.resolve(base, relative);
      },standardizePath:function(path) {
        return PATH.normalize(path);
      },findObject:function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          setErrNo(ret.error);
          return null;
        }
      },analyzePath:function(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function(parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function(parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function(parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) setErrNo(29);
        return success;
      },createLazyFile:function(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (function(from, to) {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          });
          var lazyArray = this;
          lazyArray.setDataGetter(function(chunkNum) {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if(!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(29);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(29);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init(); // XXX perhaps this method should move onto Browser?
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency(dep);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function() {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function(paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};var SYSCALLS={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(dirfd, path) {
        if (path[0] !== '/') {
          // relative path
          var dir;
          if (dirfd === -100) {
            dir = FS.cwd();
          } else {
            var dirstream = FS.getStream(dirfd);
            if (!dirstream) throw new FS.ErrnoError(8);
            dir = dirstream.path;
          }
          path = PATH.join2(dir, path);
        }
        return path;
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode;
        HEAP32[(((buf)+(16))>>2)]=stat.nlink;
        HEAP32[(((buf)+(20))>>2)]=stat.uid;
        HEAP32[(((buf)+(24))>>2)]=stat.gid;
        HEAP32[(((buf)+(28))>>2)]=stat.rdev;
        HEAP32[(((buf)+(32))>>2)]=0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)]=tempI64[0],HEAP32[(((buf)+(44))>>2)]=tempI64[1]);
        HEAP32[(((buf)+(48))>>2)]=4096;
        HEAP32[(((buf)+(52))>>2)]=stat.blocks;
        HEAP32[(((buf)+(56))>>2)]=(stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)]=0;
        HEAP32[(((buf)+(64))>>2)]=(stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)]=0;
        HEAP32[(((buf)+(72))>>2)]=(stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)]=0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)]=tempI64[0],HEAP32[(((buf)+(84))>>2)]=tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var node;
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        return low;
      }};function ___sys_fcntl64(fd, cmd, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 12:
        /* case 12: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)]=2;
          return 0;
        }
        case 13:
        case 14:
        /* case 13: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 14: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_ioctl(fd, op, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)]=0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  
  function syscallMunmap(addr, len) {
      if ((addr | 0) === -1 || len === 0) {
        return -28;
      }
      // TODO: support unmmap'ing parts of allocations
      var info = SYSCALLS.mappings[addr];
      if (!info) return 0;
      if (len === info.len) {
        var stream = FS.getStream(info.fd);
        if (info.prot & 2) {
          SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
        }
        FS.munmap(stream);
        SYSCALLS.mappings[addr] = null;
        if (info.allocated) {
          _free(info.malloc);
        }
      }
      return 0;
    }function ___sys_munmap(addr, len) {try {
  
      return syscallMunmap(addr, len);
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function ___sys_open(path, flags, varargs) {SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = SYSCALLS.get();
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function _abort() {
      abort();
    }

  function _emscripten_get_sbrk_ptr() {
      return 64336;
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  
  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
      }
    }function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      // With pthreads, races can happen (another thread might increase the size in between), so return a failure, and let the caller retry.
  
  
      var PAGE_MULTIPLE = 65536;
  
      // Memory resize rules:
      // 1. When resizing, always produce a resized heap that is at least 16MB (to avoid tiny heap sizes receiving lots of repeated resizes at startup)
      // 2. Always increase heap size to at least the requested size, rounded up to next page multiple.
      // 3a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap geometrically: increase the heap size according to 
      //                                         MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%),
      //                                         At most overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 3b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap linearly: increase the heap size by at least MEMORY_GROWTH_LINEAR_STEP bytes.
      // 4. Max size for the heap is capped at 2048MB-PAGE_MULTIPLE, or by MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 5. If we were unable to allocate as much memory, it may be due to over-eager decision to excessively reserve due to (3) above.
      //    Hence if an allocation fails, cut down on the amount of excess growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit was set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = 104857600;
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      var minHeapSize = 16777216;
  
      // Loop through potential heap size increases. If we attempt a too eager reservation that fails, cut down on the
      // attempted size and reserve a smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for(var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), PAGE_MULTIPLE));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  
  
  var ENV={};
  
  function __getExecutableName() {
      return thisProgram || './this.program';
    }function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          // Browser language detection #8751
          'LANG': ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8',
          '_': __getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)]=ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)]=strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)]=bufSize;
      return 0;
    }

  function _fd_close(fd) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)]=tempI64[0],HEAP32[(((newOffset)+(4))>>2)]=tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)]=num
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return e.errno;
  }
  }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)]=((now % 1000)*1000)|0; // microseconds
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }

  
  
  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  
  var __MONTH_DAYS_LEAP=[31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR=[31,28,31,30,31,30,31,31,30,31,30,31];function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while(days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value === 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.indexOf(rule) >= 0) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }function _strftime_l(s, maxsize, format, tm) {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    }
var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();;
var ASSERTIONS = false;

/**
 * @license
 * Copyright 2017 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}


var asmGlobalArg = {};
var asmLibraryArg = { "__assert_fail": ___assert_fail, "__cxa_allocate_exception": ___cxa_allocate_exception, "__cxa_atexit": ___cxa_atexit, "__cxa_throw": ___cxa_throw, "__map_file": ___map_file, "__sys_fcntl64": ___sys_fcntl64, "__sys_ioctl": ___sys_ioctl, "__sys_munmap": ___sys_munmap, "__sys_open": ___sys_open, "abort": _abort, "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "environ_get": _environ_get, "environ_sizes_get": _environ_sizes_get, "fd_close": _fd_close, "fd_read": _fd_read, "fd_seek": _fd_seek, "fd_write": _fd_write, "gettimeofday": _gettimeofday, "memory": wasmMemory, "setTempRet0": _setTempRet0, "strftime_l": _strftime_l, "table": wasmTable };
var asm = createWasm();
Module["asm"] = asm;
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _getNextI = Module["_getNextI"] = function() {
  return (_getNextI = Module["_getNextI"] = Module["asm"]["getNextI"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _makePublicKey = Module["_makePublicKey"] = function() {
  return (_makePublicKey = Module["_makePublicKey"] = Module["asm"]["makePublicKey"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _create_crypto_session = Module["_create_crypto_session"] = function() {
  return (_create_crypto_session = Module["_create_crypto_session"] = Module["asm"]["create_crypto_session"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _delete_crypto_session = Module["_delete_crypto_session"] = function() {
  return (_delete_crypto_session = Module["_delete_crypto_session"] = Module["asm"]["delete_crypto_session"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _send_message = Module["_send_message"] = function() {
  return (_send_message = Module["_send_message"] = Module["asm"]["send_message"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _completeSessionJS = Module["_completeSessionJS"] = function() {
  return (_completeSessionJS = Module["_completeSessionJS"] = Module["asm"]["completeSessionJS"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _encryptJS = Module["_encryptJS"] = function() {
  return (_encryptJS = Module["_encryptJS"] = Module["asm"]["encryptJS"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _decryptJS = Module["_decryptJS"] = function() {
  return (_decryptJS = Module["_decryptJS"] = Module["asm"]["decryptJS"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _main = Module["_main"] = function() {
  return (_main = Module["_main"] = Module["asm"]["main"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ntohs = Module["_ntohs"] = function() {
  return (_ntohs = Module["_ntohs"] = Module["asm"]["ntohs"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htonl = Module["_htonl"] = function() {
  return (_htonl = Module["_htonl"] = Module["asm"]["htonl"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _htons = Module["_htons"] = function() {
  return (_htons = Module["_htons"] = Module["asm"]["htons"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = function() {
  return (_setThrew = Module["_setThrew"] = Module["asm"]["setThrew"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var __growWasmMemory = Module["__growWasmMemory"] = function() {
  return (__growWasmMemory = Module["__growWasmMemory"] = Module["asm"]["__growWasmMemory"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vi = Module["dynCall_vi"] = function() {
  return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["dynCall_vi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ii = Module["dynCall_ii"] = function() {
  return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["dynCall_ii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiii = Module["dynCall_iiiiii"] = function() {
  return (dynCall_iiiiii = Module["dynCall_iiiiii"] = Module["asm"]["dynCall_iiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
  return (dynCall_viiiii = Module["dynCall_viiiii"] = Module["asm"]["dynCall_viiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
  return (dynCall_viiiiii = Module["dynCall_viiiiii"] = Module["asm"]["dynCall_viiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vii = Module["dynCall_vii"] = function() {
  return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["dynCall_vii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiii = Module["dynCall_iiii"] = function() {
  return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["dynCall_iiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viijii = Module["dynCall_viijii"] = function() {
  return (dynCall_viijii = Module["dynCall_viijii"] = Module["asm"]["dynCall_viijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiii = Module["dynCall_viiii"] = function() {
  return (dynCall_viiii = Module["dynCall_viiii"] = Module["asm"]["dynCall_viiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iii = Module["dynCall_iii"] = function() {
  return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["dynCall_iii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
  return (dynCall_iiiii = Module["dynCall_iiiii"] = Module["asm"]["dynCall_iiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viii = Module["dynCall_viii"] = function() {
  return (dynCall_viii = Module["dynCall_viii"] = Module["asm"]["dynCall_viii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_v = Module["dynCall_v"] = function() {
  return (dynCall_v = Module["dynCall_v"] = Module["asm"]["dynCall_v"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
  return (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = Module["asm"]["dynCall_iiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = function() {
  return (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = Module["asm"]["dynCall_iiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_i = Module["dynCall_i"] = function() {
  return (dynCall_i = Module["dynCall_i"] = Module["asm"]["dynCall_i"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iidiiii = Module["dynCall_iidiiii"] = function() {
  return (dynCall_iidiiii = Module["dynCall_iidiiii"] = Module["asm"]["dynCall_iidiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = function() {
  return (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiij = Module["dynCall_iiiiij"] = function() {
  return (dynCall_iiiiij = Module["dynCall_iiiiij"] = Module["asm"]["dynCall_iiiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiid = Module["dynCall_iiiiid"] = function() {
  return (dynCall_iiiiid = Module["dynCall_iiiiid"] = Module["asm"]["dynCall_iiiiid"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = function() {
  return (dynCall_iiiiijj = Module["dynCall_iiiiijj"] = Module["asm"]["dynCall_iiiiijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = function() {
  return (dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = Module["asm"]["dynCall_iiiiiijj"]).apply(null, arguments);
};



/**
 * @license
 * Copyright 2010 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;



Module["ccall"] = ccall;
Module["cwrap"] = cwrap;




































































































































var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;


dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain(args) {

  var entryFunction = Module['_main'];


  args = args || [];

  var argc = args.length+1;
  var argv = stackAlloc((argc + 1) * 4);
  HEAP32[argv >> 2] = allocateUTF8OnStack(thisProgram);
  for (var i = 1; i < argc; i++) {
    HEAP32[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1]);
  }
  HEAP32[(argv >> 2) + argc] = 0;


  try {


    var ret = entryFunction(argc, argv);


    // In PROXY_TO_PTHREAD builds, we should never exit the runtime below, as execution is asynchronously handed
    // off to a pthread.
    // if we're not running an evented main loop, it's time to exit
      exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'unwind') {
      // running an evented main loop, don't immediately exit
      noExitRuntime = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      err('exception thrown: ' + toLog);
      quit_(1, e);
    }
  } finally {
    calledMain = true;
  }
}




/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }


  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;


/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    ABORT = true;
    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;

if (Module['noInitialRun']) shouldRunNow = false;


  noExitRuntime = true;

run();





// {{MODULE_ADDITIONS}}



/**
 * Sends a message
 * @param {string} message a string of json data 
 * @returns {number} >= if successfull
 */
const send_message_cpp = cwrap("send_message",'number',['string'] );

/**
 * Starts a crypto session
 * @returns {number} pointer of the crypto session
 */
const create_crypto_session = cwrap("create_crypto_session",'number' );

/**
 * Removes a crypto session
 * @returns {number} pointer of the crypto session 
 */
const delete_crypto_session = cwrap("delete_crypto_session",null,['number']);

/**
 * Creates public key for crypto handshake
 * @param {number} session pointer of the crypto sesssion
 * @returns {string} public key 
 */
const get_public_key = cwrap("makePublicKey",'string',['number'] );

/**
 * Removes a crypto session
 * @param {number} session pointer of the crypto sesssion
 * @param {number} k 
 * @param {number} iv 
 * @param {number} e
 * @returns {number} pointer of the crypto session 
 */
const complete_session = cwrap("completeSessionJS",'number',['number','number','number','number']);

const encrypt = cwrap("encryptJS",'number',['number','number']);

const decrypt = cwrap("decryptJS",'number',['array','number','number']);

const getArrayBuffer = function (offset) {
  // copy an array that looks like  [ length, data[0], data[1], etc, data[length-1] ]

  //Get first element in the array - the length of the array
  let data = new Uint8Array( wasmMemory.buffer, offset, 4);
  const dv = new DataView( wasmMemory.buffer);
  const length = dv.getUint32(offset, true);
  // WebApiLogger('info', `copying ${length} bytes to JS.`);
  
  data = new Uint8Array( wasmMemory.buffer, offset+4, length);
  const buffer = new Uint8Array(data.length);
  data.map(function(value, i){buffer[i] = value});

  return buffer;
}

const getDecryptedMessage = function (offset) {
  //Get first element in the array - the length of the array
  let dataLength = new Uint32Array( wasmMemory.buffer, offset, 1);
 
  //WebApiLogger('info',dataLength);
  var dv = new DataView( wasmMemory.buffer);
  
  let length = dv.getUint32(offset,true);

  let data = new Uint8Array( wasmMemory.buffer, offset+4, length);
  
  let buffer = new Uint8Array(data.length);

  for (i = 0; i < data.length; i++) {
    buffer[i] =  data[i];
  }

  return buffer;
}

class WebApiConnection extends EventEmitter {
  /**
   * Creates a WebApiConnection object.
   */
  constructor(){
    super();
    this._i = 1;
    this._custom_crypto = true;
  }
  
  /**
   * Gets a new value for use in the webapi messahges i parameter.
   */
  getNextI() { return this._i++; }
  
  /**
   * Closes the connection
   */
  close(){
    this._socket.close(1000,"Disconnect from Reader");
    if(this._custom_crypto){
      delete_crypto_session(this._crypto_session);
    }
  }
  
  onClose(event) {
    if(this._custom_crypto) {
      delete_crypto_session(this._crypto_session);
    }

    if(event.wasClean){
      WebApiLogger('info','Connection to reader closed successfully');
    } else {
      WebApiLogger('warn','Connection to reader closed unexpectedly');
    }
    
    this.emit('CLOSED');
  }
  
  onError(error) {
    WebApiLogger('error', 'WebSocket error: ', error)
    WebApiLogger('error', 'WebSocket error: ', error.data)
  }
  
  _make_connection_string() {
    if(this.auth.token) {
      const connectMessage = {
        "t": 91, //Connect Message
        "i": this.getNextI(),
        "d": { token: this.auth.token }
      }

      return JSON.stringify(connectMessage);
    } else {
      const connectMessage = {
        "t": 1, //Connect Message
        "i": this.getNextI(),
        "d": {
          "authKeyID" : this.auth.apiId,
          "authKey" : this.auth.apiKey
        }
      }

      return JSON.stringify(connectMessage);
    }
  }

  onMessageString(event) {
    WebApiLogger('debug', 'String Message Received', event.data);

    try{
      const {k, iv, e} = JSON.parse(event.data);

      const lengthBytes_k = lengthBytesUTF8(k)+1; 
      const k_OnWasm = _malloc(lengthBytes_k); 
      stringToUTF8(k, k_OnWasm, lengthBytes_k);
      
      const lengthBytes_iv = lengthBytesUTF8(iv)+1; 
      const iv_OnWasm = _malloc(lengthBytes_iv); 
      stringToUTF8(iv, iv_OnWasm, lengthBytes_iv); 

      const lengthBytes_e = lengthBytesUTF8(e)+1; 
      const e_OnWasm = _malloc(lengthBytes_e); 
      stringToUTF8(e, e_OnWasm, lengthBytes_e); 

      const completed = complete_session(this._crypto_session, k_OnWasm, iv_OnWasm, e_OnWasm);

      _free(k_OnWasm);
      _free(iv_OnWasm);
      _free(e_OnWasm);

      if(completed) {
        WebApiLogger('debug', 'Crypto Session Completed');
      } else {
        WebApiLogger('error', 'Crypto Session Failed');
      }

      const connectMessageString = this._make_connection_string();

      //WebApiLogger('info','Encrypting Message');

      const lengthBytes_connectMessage = lengthBytesUTF8(connectMessageString)+1; 
      //WebApiLogger('info',`malloc ${lengthBytes_connectMessage} bytes`);
      const connectMessage_OnWasm = _malloc(lengthBytes_connectMessage); 
      stringToUTF8(connectMessageString, connectMessage_OnWasm, lengthBytes_connectMessage); 
      
      let arrayPtr = encrypt(connectMessage_OnWasm, this._crypto_session);
      let arrayBuffer = getArrayBuffer(arrayPtr);
      _free(connectMessage_OnWasm);
      
      //WebApiLogger('info',`Sending ${arrayBuffer.length} bytes`);
      this._socket.send(arrayBuffer);
    } catch(e){
      WebApiLogger('error', 'Error Reading in message: ', e);
    }
  }
  
  onMessageArray(event){
    WebApiLogger('debug', "Encrypted Message Received");
    const response = event.data;

    const array = new Uint8Array(response,0,response.byteLength);
    //WebApiLogger('info',array);
    
    const decryptedMessagePtr = decrypt(array, this._crypto_session, array.length);

    //let decryptedMessage = String.fromCharCode.apply(null,getDecryptedMessage(decryptedMessagePtr));
    const decryptedMessage = new TextDecoder("utf-8").decode(getDecryptedMessage(decryptedMessagePtr));

    _free(decryptedMessagePtr);
    
    this.handle_onMessage(decryptedMessage);
  }

  handle_onMessage(decryptedMessage){
    const {t:messageId, d:obj, i: messageI} = JSON.parse(decryptedMessage);

    // Logging
    const eventType = Module['ConnectionEvents'][messageId];
    if(webapi_is_enable_logging('info')){
      if(eventType == "RETURNED_IMAGE"){
        WebApiLogger('info', 'Received: ', eventType );
      } else if(eventType == "EVENT"){
        WebApiLogger('info', 'Event: ', Module['EventCodes'][obj.eventId]);
      } else{
        WebApiLogger('info', 'Received: ', eventType, decryptedMessage);
      }
    }

    this.emit(eventType, obj);
  }

  onMessage(event) {
    if(this._custom_crypto) {
      if(typeof event.data === "string"){
        this.onMessageString(event);
      } else if(event.data instanceof ArrayBuffer){
        this.onMessageArray(event);
      }
    } else {
      WebApiLogger('debug', 'Message Received', event.data);
      this.handle_onMessage(event.data);
    }
  }

  onOpen() {
    if(this._custom_crypto) {
      const publicKey = get_public_key( Module['_crypto_session'] );
      WebApiLogger('debug', 'Public Key: ', publicKey);
      const message = {
        "k" :  publicKey
      }
      this._socket.send(JSON.stringify(message));
    } else {
      const connectMessageString = this._make_connection_string();
      this._socket.send(connectMessageString);
    }
  }

  /**
   * 
   * @param {string} address The address of the reader to connect to.
   * @param {Object} options Connection Options
   * 
   * @param {string} options.apidId the Key ID for the connection
   * @param {string} options.apiKey the Key for the connection
   * @param {string} options.token A JWT token to authenticate with
   * @param {string} options.protocol The network protocol to use 'ws' or 'wss' 
   * @param {number} options.port Allows the user to overide the port
   */
  open(address, options) {
    if ('WebSocket' in window || 'MozWebSocket' in window) {
      this.auth = options;
      // set port to empty if it is empty
      const port = options.port ? ':' + options.port : '';
      
      if (options.protocol === undefined) {
        if(location && location.protocol === 'https:') {
          options.protocol = "wss";
        } else {
          options.protocol = "ws";
        }
      }

      if(options.protocol === "wss")
        this._custom_crypto = false;

      const connection = `${options.protocol}://${address}${port}/`;
      WebApiLogger('info','Attempting to open connection to reader at: ', connection);

      const socket = new WebSocket(connection);
      socket.binaryType = "arraybuffer";

      this._socket = Module['_socket'] = socket;
      if(this._custom_crypto) {
        this._crypto_session = Module['_crypto_session'] = create_crypto_session();
      }

      // bind the functions back to 'this', as WebSocket make itself 'this'
      this._socket.onerror = this.onError.bind(this);
      this._socket.onclose = this.onClose.bind(this);
      this._socket.onopen = this.onOpen.bind(this);
      this._socket.onmessage = this.onMessage.bind(this);
    } else {       
      // The browser doesn't support WebSockets
      alert("WebSockets are NOT supported by your Browser!");
    }
  };

  /**
   * Sends a message
   * @param {Object} message 
   * @param {ConnectionEvents} message.t The message type descriptor
   * @param {number} message.i an arbitrary i that will be returned in the readers response
   * @param {Object} message.d The data element
   */
  send_message(message) {
    let messageJson = undefined;
    if(typeof message === 'string' || ((!!message && typeof message === 'object') && Object.prototype.toString.call(message) === '[object String]'))
      messageJson = JSON.parse(message);
    else {
      messageJson = message;
      message = JSON.stringify(message);
    }

    // log the ConnectionEvents
    let eventId = messageJson.t;
    eventId = Module['ConnectionEvents'][eventId];
    WebApiLogger('info', "Sending: " , eventId , message);
  
    if(this._custom_crypto) {
      const lengthBytes_Message = lengthBytesUTF8(message)+1; 
      const message_OnWasm = _malloc(lengthBytes_Message); 
      stringToUTF8(message, message_OnWasm, lengthBytes_Message); 
    
      const arrayPtr = encrypt( message_OnWasm, this._crypto_session);
      const arrayBuffer = getArrayBuffer(arrayPtr);
    
      _free(message_OnWasm);
      _free(arrayPtr);
    
      this._socket.send(arrayBuffer);
    } else {
      this._socket.send(message);
    }
  }

  /**
   * Starts a session to control the reader
   */
  start_session(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 9
    });
  }

  /**
   * Ends a session, releasing control of the reader.
   */
  end_session(){ 
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 11
    });
  }

  /**
   * Sends message DEVICE_INFO:70.
   */
  get_device_info(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 70
    });
  }

  /**
   * Sends message CAPTURE_DATA:50
   */
  capture(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 50
    });
  }

  /**
   * Sends messagge LISTEN_START:42
   */
  listen_start(){
    this.send_message({
      i: this.getNextI(),
      d: null,
      t: 42
    });
  }

  /**
   * Sends a RETRIEVE_IMAGE:16 message
   * @param {Object} image_options Information about the image to get
   * @param {number} image_options.image_id the image ID to return.
   */
  retreive_image(image_options){
    this.send_message({
      i: this.getNextI(),
      d: image_options,
      t: 16
    });
  }
}

const _WebApiConnection = new WebApiConnection();
Module['defaultConnection'] = _WebApiConnection;

Module['newConnection'] = () => {
  return new WebApiConnection();
}

/**
 * Registers a handler to listen on
 * @param {string} event the event to listen to
 * @param {function} handler the event handler
 */
Module['on'] = (event,handler) => {
  return _WebApiConnection.on(event, handler);
}

/**
 * Registers a handler to listen one time on
 * @param {string} event the event to listen to
 * @param {function} handler the event handler
 */
Module['once'] = (event,handler) => {
  return _WebApiConnection.once(event, handler);
}

/**
 * Registers a handler to listen one time on
 * @param {string} event the event to listen to
 * @param {function} handler the event handler
 */
Module['off'] = (event,handler) => {
  return _WebApiConnection.off(event, handler);
}

/**
 * Sends message to the reader
 * @param {string} message message structure from messages.md 
 */
Module['send_message'] = (message) => {
  return _WebApiConnection.send_message(message);
}

/**
 * Opens a connection to a reader
 * @param {string} address the ip address of a reader
 * @param {string} apidId the Key ID for the connection
 * @param {string} apiKey the Key for the connection
 * @param {string} protocol The network protocol to use 'ws' or 'wss' 
 * @param {number} port Allows the user to overide the port
 */
Module['open_connection'] = (address, apiId, apiKey, protocol = undefined, port = undefined) => {
  return _WebApiConnection.open(address,{apiId, apiKey, port, protocol})
}

/**
 * Opens a connection to a reader
 * @param {string} address The ip address of a reader
 * @param {string} token A JWT token to authenticate with
 * @param {string} protocol The network protocol to use 'ws' or 'wss' 
 * @param {number} port Allows the user to overide the port
 */
Module['open_jwt_connection'] = (address, token, protocol = undefined, port = undefined) => {
  return _WebApiConnection.open(address,{token , port, protocol})
}

/**
 * Sends a Start Session message
 */
Module['start_session'] = function(){
  return _WebApiConnection.start_session();
}

/**
 * Sends an End Session message
 */
Module['end_session'] = function(){
  return _WebApiConnection.end_session();
}

/**
 * Sends a DEVICE_INFO:70 message
 */
Module['get_device_info'] = function(){
  return _WebApiConnection.get_device_info();
}

/**
 * Sends a CAPTURE_DATA:50 message
 */
Module['capture'] = function(){
  return _WebApiConnection.capture();
}
/**
 * Sends a LISTEN_START:42 message
 */
Module['listen_start'] = function(){
  return _WebApiConnection.listen_start();
}

/**
 * Sends a RETRIEVE_IMAGE:16 message
 * @param {Object} image_options Information about the image to get
 * @param {number} image_options.image_id the image ID to return.
 */
Module['retreive_image'] = function(image_options){
  return _WebApiConnection.retreive_image(image_options);
}

Module['getReaderDataType'] = (type) => {
  return Module['ReaderDataTypes'][type];
}

Module['getEventCode'] = (type) => {
  return Module['EventCodes'][type];
}

/**
 * Closes a connection to a reader
 */
Module['close_connection'] = () => {
  return _WebApiConnection.close();
}

/**
 * Increment for identifyer of individual messages
 */
Module['getNextI'] = () => {
  return _WebApiConnection.getNextI();
}

Module['removeAllListeners'] = () => {
  return _WebApiConnection.removeAllListeners();
}



  return webapi.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = webapi;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return webapi; });
    else if (typeof exports === 'object')
      exports["webapi"] = webapi;
    