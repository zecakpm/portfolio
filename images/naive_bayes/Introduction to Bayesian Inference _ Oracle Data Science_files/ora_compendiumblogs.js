/*! ORA_COMPENDIUMBLOGS.JS - BUILD: 24-September-2018 version 1.31 */
try{oracle.truste.api.getConsentDecision().consentDecision;oracle.truste.api.getConsentDecision().source;}catch(err){var oracle=oracle||{};oracle.truste={};oracle.truste.api={};(function(){var trusteCookieName="notice_preferences";var trusteStorageItemName="truste.eu.cookie.notice_preferences";this.getCookieName=function(){return trusteCookieName;};this.getStorageItemName=function(){return trusteStorageItemName;};}).apply(oracle.truste);(function(){var trusteCommon=oracle.truste;function getCookie(cookieKey){var name=cookieKey+"=";var cookieArray=document.cookie.split(";");for(var i=0;i<cookieArray.length;i++){var c=cookieArray[i];while(c.charAt(0)==" "){c=c.substring(1);}if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}return null;}function getLocalStorageItem(storageKey){if(typeof(Storage)!=="undefined"){return localStorage.getItem(storageKey);}return null;}function getTRUSTeLocalStorageValue(storageKey){var value=getLocalStorageItem(storageKey);if(value!=null){var obj=JSON.parse(value);return obj.value;}return null;}this.getConsentCode=function(){var value=getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName())||getCookie(trusteCommon.getCookieName());if(value==null){return -1;}else{return parseInt(value)+1;}};this.getConsentDecision=function(){var value=this.getConsentCode();if(value==-1){var text='{"consentDecision": 0, "source": "implied"}';return JSON.parse(text);}else{var text='{"consentDecision": '+parseInt(value)+', "source": "asserted"}';return JSON.parse(text);}};}).apply(oracle.truste.api);}
/*! Tagging script set-up */
var tagCtrl=new Array();tagCtrl.isTest=s_checkdev();tagCtrl.host_type=(window.location.protocol.toLowerCase().indexOf("https")!=-1)?"https":"http";tagCtrl.codeversion="1.31";tagCtrl.ora_local="ora_code_cblogs.js";tagCtrl.ora_global="ora_code.js";tagCtrl.ora_path="/us/assets/metrics/";tagCtrl.ora_root=(tagCtrl.isTest)?"://www-portal-stage.oracle.com":"://www.oracleimg.com";tagCtrl.adobe_OK=true;var TLevel=s_getConsentLevel();var enable_tracking=true;if(TLevel==-1||TLevel==0){if(navigator.doNotTrack==1||window.doNotTrack==1||navigator.msDoNotTrack==1){enable_tracking=false;}}tagCtrl.adobe_OK=(TLevel!=1&&enable_tracking);
/*! Global variables */
if(typeof s_pageName=="undefined"){var s_pageName="";}if(typeof s_pingOK=="undefined"){var s_pingOK=true;
/*! Site Catalyst Tags and Functions */
}if(tagCtrl.adobe_OK){document.write("<script type='text/javascript' src='"+tagCtrl.host_type+tagCtrl.ora_root+tagCtrl.ora_path+tagCtrl.ora_local+"'><\/script>");document.write("<script type='text/javascript' src='"+tagCtrl.host_type+tagCtrl.ora_root+tagCtrl.ora_path+tagCtrl.ora_global+"'><\/script>");}function s_getConsentLevel(){var cStatus=new Array(-1,"NoTRUSTe");try{cStatus[0]=oracle.truste.api.getConsentDecision().consentDecision;cStatus[1]=oracle.truste.api.getConsentDecision().source;}catch(err){cStatus[0]=-1;}if(cStatus[0]==-1){try{cStatus[0]=(truste.cma.callApi("getConsent","oracle.com",null,null,"advertising").consent=="approved")?3:-1;cStatus[1]=truste.cma.callApi("getConsentDecision","oracle.com").source;if(cStatus[0]==-1){cStatus[0]=(truste.cma.callApi("getConsent","oracle.com",null,null,"functional").consent=="approved")?2:-1;cStatus[1]=truste.cma.callApi("getConsentDecision","oracle.com").source;}if(cStatus[0]==-1){cStatus[0]=1;}if(cStatus[1]=="implied"){cStatus[0]=0;}}catch(err){cStatus[0]=-1;}}if(cStatus[0]==-1){try{cStatus[0]=truste.cma.callApi("getConsentDecision","oracle.com").consentDecision;cStatus[1]=truste.cma.callApi("getConsentDecision","oracle.com").source;}catch(err){cStatus[0]=-1;}}return cStatus[0];}
/*! End Tags */
/*! General Functions */
function s_checkdev(){var isDev=false;var devSites=new Array();devSites=["-stage","-dev","-content","localhost","127.0.0.1","stg-",".us.oracle.com"];var al=devSites.length;for(i=0;i<al;i++){if(location.host.indexOf(devSites[i])!=-1){isDev=true;i=al+1;}}return(isDev);}function gotjQ(){try{var jq=(jQuery)?true:false;}catch(err){var jq=false;}return jq;}
/*! End Tags */