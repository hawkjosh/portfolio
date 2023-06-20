function s0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function a0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tc={exports:{}},so={},nc={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),u0=Symbol.for("react.portal"),c0=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),f0=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),m0=Symbol.for("react.context"),h0=Symbol.for("react.forward_ref"),v0=Symbol.for("react.suspense"),g0=Symbol.for("react.memo"),y0=Symbol.for("react.lazy"),wa=Symbol.iterator;function w0(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}var rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ic=Object.assign,oc={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=oc,this.updater=n||rc}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lc(){}lc.prototype=Vn.prototype;function ms(e,t,n){this.props=e,this.context=t,this.refs=oc,this.updater=n||rc}var hs=ms.prototype=new lc;hs.constructor=ms;ic(hs,Vn.prototype);hs.isPureReactComponent=!0;var xa=Array.isArray,sc=Object.prototype.hasOwnProperty,vs={current:null},ac={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)sc.call(t,r)&&!ac.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ur,type:e,key:o,ref:l,props:i,_owner:vs.current}}function x0(e,t){return{$$typeof:Ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function k0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ka=/\/+/g;function Ro(e,t){return typeof e=="object"&&e!==null&&e.key!=null?k0(""+e.key):t.toString(36)}function hi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ur:case u0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ro(l,0):r,xa(i)?(n="",e!=null&&(n=e.replace(ka,"$&/")+"/"),hi(i,t,n,"",function(u){return u})):i!=null&&(gs(i)&&(i=x0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ka,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",xa(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Ro(o,s);l+=hi(o,t,n,a,i)}else if(a=w0(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Ro(o,s++),l+=hi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Xr(e,t,n){if(e==null)return e;var r=[],i=0;return hi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function S0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},vi={transition:null},C0={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:vi,ReactCurrentOwner:vs};$.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!gs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Vn;$.Fragment=c0;$.Profiler=f0;$.PureComponent=ms;$.StrictMode=d0;$.Suspense=v0;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ic({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=vs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)sc.call(t,a)&&!ac.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ur,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:m0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:p0,_context:e},e.Consumer=e};$.createElement=uc;$.createFactory=function(e){var t=uc.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:h0,render:e}};$.isValidElement=gs;$.lazy=function(e){return{$$typeof:y0,_payload:{_status:-1,_result:e},_init:S0}};$.memo=function(e,t){return{$$typeof:g0,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=vi.transition;vi.transition={};try{e()}finally{vi.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return ve.current.useCallback(e,t)};$.useContext=function(e){return ve.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};$.useEffect=function(e,t){return ve.current.useEffect(e,t)};$.useId=function(){return ve.current.useId()};$.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ve.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};$.useRef=function(e){return ve.current.useRef(e)};$.useState=function(e){return ve.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ve.current.useTransition()};$.version="18.2.0";nc.exports=$;var C=nc.exports;const qe=a0(C),E0=s0({__proto__:null,default:qe},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=C,_0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),P0=Object.prototype.hasOwnProperty,z0=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N0={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)P0.call(t,r)&&!N0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_0,type:e,key:o,ref:l,props:i,_owner:z0.current}}so.Fragment=L0;so.jsx=cc;so.jsxs=cc;tc.exports=so;var h=tc.exports,dl={},dc={exports:{}},ze={},fc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,R){var I=L.length;L.push(R);e:for(;0<I;){var B=I-1>>>1,Q=L[B];if(0<i(Q,R))L[B]=R,L[I]=Q,I=B;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var R=L[0],I=L.pop();if(I!==R){L[0]=I;e:for(var B=0,Q=L.length,Ee=Q>>>1;B<Ee;){var Ye=2*(B+1)-1,Ht=L[Ye],Ie=Ye+1,Ke=L[Ie];if(0>i(Ht,I))Ie<Q&&0>i(Ke,Ht)?(L[B]=Ke,L[Ie]=I,B=Ie):(L[B]=Ht,L[Ye]=I,B=Ye);else if(Ie<Q&&0>i(Ke,I))L[B]=Ke,L[Ie]=I,B=Ie;else break e}}return R}function i(L,R){var I=L.sortIndex-R.sortIndex;return I!==0?I:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,v=null,f=3,g=!1,x=!1,w=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=L)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function y(L){if(w=!1,m(L),!x)if(n(a)!==null)x=!0,Zn(S);else{var R=n(u);R!==null&&Xn(y,R.startTime-L)}}function S(L,R){x=!1,w&&(w=!1,d(N),N=-1),g=!0;var I=f;try{for(m(R),v=n(a);v!==null&&(!(v.expirationTime>R)||L&&!Ce());){var B=v.callback;if(typeof B=="function"){v.callback=null,f=v.priorityLevel;var Q=B(v.expirationTime<=R);R=e.unstable_now(),typeof Q=="function"?v.callback=Q:v===n(a)&&r(a),m(R)}else r(a);v=n(a)}if(v!==null)var Ee=!0;else{var Ye=n(u);Ye!==null&&Xn(y,Ye.startTime-R),Ee=!1}return Ee}finally{v=null,f=I,g=!1}}var _=!1,k=null,N=-1,F=5,T=-1;function Ce(){return!(e.unstable_now()-T<F)}function Ut(){if(k!==null){var L=e.unstable_now();T=L;var R=!0;try{R=k(!0,L)}finally{R?Wt():(_=!1,k=null)}}else _=!1}var Wt;if(typeof c=="function")Wt=function(){c(Ut)};else if(typeof MessageChannel<"u"){var Kr=new MessageChannel,zo=Kr.port2;Kr.port1.onmessage=Ut,Wt=function(){zo.postMessage(null)}}else Wt=function(){z(Ut,0)};function Zn(L){k=L,_||(_=!0,Wt())}function Xn(L,R){N=z(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,Zn(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var I=f;f=R;try{return L()}finally{f=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var I=f;f=L;try{return R()}finally{f=I}},e.unstable_scheduleCallback=function(L,R,I){var B=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?B+I:B):I=B,L){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=I+Q,L={id:p++,callback:R,priorityLevel:L,startTime:I,expirationTime:Q,sortIndex:-1},I>B?(L.sortIndex=I,t(u,L),n(a)===null&&L===n(u)&&(w?(d(N),N=-1):w=!0,Xn(y,I-B))):(L.sortIndex=Q,t(a,L),x||g||(x=!0,Zn(S))),L},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(L){var R=f;return function(){var I=f;f=R;try{return L.apply(this,arguments)}finally{f=I}}}})(pc);fc.exports=pc;var I0=fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc=C,Pe=I0;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hc=new Set,kr={};function ln(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(kr[e]=t,e=0;e<t.length;e++)hc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sa={},Ca={};function T0(e){return fl.call(Ca,e)?!0:fl.call(Sa,e)?!1:R0.test(e)?Ca[e]=!0:(Sa[e]=!0,!1)}function M0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $0(e,t,n,r){if(t===null||typeof t>"u"||M0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,ws);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,ws);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,ws);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function xs(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($0(t,n,i,r)&&(n=null),r||i===null?T0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),dn=Symbol.for("react.portal"),fn=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),Ss=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),Cs=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),yc=Symbol.for("react.offscreen"),Ea=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=Ea&&e[Ea]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,To;function sr(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||""}return`
`+To+e}var Mo=!1;function $o(e,t){if(!e||Mo)return"";Mo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Mo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sr(e):""}function O0(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=$o(e.type,!1),e;case 11:return e=$o(e.type.render,!1),e;case 1:return e=$o(e.type,!0),e;default:return""}}function vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fn:return"Fragment";case dn:return"Portal";case pl:return"Profiler";case ks:return"StrictMode";case ml:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gc:return(e.displayName||"Context")+".Consumer";case vc:return(e._context.displayName||"Context")+".Provider";case Ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cs:return t=e.displayName||null,t!==null?t:vl(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return vl(e(t))}catch{}}return null}function A0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vl(t);case 8:return t===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function D0(e){var t=wc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=D0(e))}function xc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ja(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kc(e,t){t=t.checked,t!=null&&xs(e,"checked",t,!1)}function yl(e,t){kc(e,t);var n=Mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&wl(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _a(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wl(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function La(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(ar(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mt(n)}}function Sc(e,t){var n=Mt(t.value),r=Mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,Ec=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){F0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function jc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function _c(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var B0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(B0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function Es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jl=null,jn=null,_n=null;function za(e){if(e=Vr(e)){if(typeof jl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=po(t),jl(e.stateNode,e.type,t))}}function Lc(e){jn?_n?_n.push(e):_n=[e]:jn=e}function Pc(){if(jn){var e=jn,t=_n;if(_n=jn=null,za(e),t)for(e=0;e<t.length;e++)za(t[e])}}function zc(e,t){return e(t)}function Nc(){}var Oo=!1;function Ic(e,t,n){if(Oo)return e(t,n);Oo=!0;try{return zc(e,t,n)}finally{Oo=!1,(jn!==null||_n!==null)&&(Nc(),Pc())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var _l=!1;if(at)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){_l=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{_l=!1}function U0(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var fr=!1,Ri=null,Ti=!1,Ll=null,W0={onError:function(e){fr=!0,Ri=e}};function H0(e,t,n,r,i,o,l,s,a){fr=!1,Ri=null,U0.apply(W0,arguments)}function V0(e,t,n,r,i,o,l,s,a){if(H0.apply(this,arguments),fr){if(fr){var u=Ri;fr=!1,Ri=null}else throw Error(E(198));Ti||(Ti=!0,Ll=u)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Na(e){if(sn(e)!==e)throw Error(E(188))}function Q0(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Na(i),e;if(o===r)return Na(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Tc(e){return e=Q0(e),e!==null?Mc(e):null}function Mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mc(e);if(t!==null)return t;e=e.sibling}return null}var $c=Pe.unstable_scheduleCallback,Ia=Pe.unstable_cancelCallback,G0=Pe.unstable_shouldYield,Y0=Pe.unstable_requestPaint,J=Pe.unstable_now,K0=Pe.unstable_getCurrentPriorityLevel,js=Pe.unstable_ImmediatePriority,Oc=Pe.unstable_UserBlockingPriority,Mi=Pe.unstable_NormalPriority,Z0=Pe.unstable_LowPriority,Ac=Pe.unstable_IdlePriority,ao=null,be=null;function X0(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ao,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:b0,J0=Math.log,q0=Math.LN2;function b0(e){return e>>>=0,e===0?32:31-(J0(e)/q0|0)|0}var ei=64,ti=4194304;function ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=ur(s):(o&=l,o!==0&&(r=ur(o)))}else l=n&~i,l!==0?r=ur(l):o!==0&&(r=ur(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-He(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=ep(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dc(){var e=ei;return ei<<=1,!(ei&4194240)&&(ei=64),e}function Ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function np(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-He(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function _s(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bc,Ls,Uc,Wc,Hc,zl=!1,ni=[],Et=null,jt=null,_t=null,Er=new Map,jr=new Map,wt=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ra(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function bn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Vr(t),t!==null&&Ls(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ip(e,t,n,r,i){switch(t){case"focusin":return Et=bn(Et,e,t,n,r,i),!0;case"dragenter":return jt=bn(jt,e,t,n,r,i),!0;case"mouseover":return _t=bn(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Er.set(o,bn(Er.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,jr.set(o,bn(jr.get(o)||null,e,t,n,r,i)),!0}return!1}function Vc(e){var t=Gt(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Rc(n),t!==null){e.blockedOn=t,Hc(e.priority,function(){Uc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=Vr(n),t!==null&&Ls(t),e.blockedOn=n,!1;t.shift()}return!0}function Ta(e,t,n){gi(e)&&n.delete(t)}function op(){zl=!1,Et!==null&&gi(Et)&&(Et=null),jt!==null&&gi(jt)&&(jt=null),_t!==null&&gi(_t)&&(_t=null),Er.forEach(Ta),jr.forEach(Ta)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,zl||(zl=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,op)))}function _r(e){function t(i){return er(i,e)}if(0<ni.length){er(ni[0],e);for(var n=1;n<ni.length;n++){var r=ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&er(Et,e),jt!==null&&er(jt,e),_t!==null&&er(_t,e),Er.forEach(t),jr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Vc(n),n.blockedOn===null&&wt.shift()}var Ln=ft.ReactCurrentBatchConfig,Oi=!0;function lp(e,t,n,r){var i=D,o=Ln.transition;Ln.transition=null;try{D=1,Ps(e,t,n,r)}finally{D=i,Ln.transition=o}}function sp(e,t,n,r){var i=D,o=Ln.transition;Ln.transition=null;try{D=4,Ps(e,t,n,r)}finally{D=i,Ln.transition=o}}function Ps(e,t,n,r){if(Oi){var i=Nl(e,t,n,r);if(i===null)Yo(e,t,r,Ai,n),Ra(e,r);else if(ip(i,e,t,n,r))r.stopPropagation();else if(Ra(e,r),t&4&&-1<rp.indexOf(e)){for(;i!==null;){var o=Vr(i);if(o!==null&&Bc(o),o=Nl(e,t,n,r),o===null&&Yo(e,t,r,Ai,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Yo(e,t,r,null,n)}}var Ai=null;function Nl(e,t,n,r){if(Ai=null,e=Es(r),e=Gt(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ai=e,null}function Qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K0()){case js:return 1;case Oc:return 4;case Mi:case Z0:return 16;case Ac:return 536870912;default:return 16}default:return 16}}var kt=null,zs=null,yi=null;function Gc(){if(yi)return yi;var e,t=zs,n=t.length,r,i="value"in kt?kt.value:kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return yi=i.slice(e,1<r?1-r:void 0)}function wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function Ma(){return!1}function Ne(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ri:Ma,this.isPropagationStopped=Ma,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=Ne(Qn),Hr=Z({},Qn,{view:0,detail:0}),ap=Ne(Hr),Do,Fo,tr,uo=Z({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Do=e.screenX-tr.screenX,Fo=e.screenY-tr.screenY):Fo=Do=0,tr=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),$a=Ne(uo),up=Z({},uo,{dataTransfer:0}),cp=Ne(up),dp=Z({},Hr,{relatedTarget:0}),Bo=Ne(dp),fp=Z({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=Ne(fp),mp=Z({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=Ne(mp),vp=Z({},Qn,{data:0}),Oa=Ne(vp),gp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wp[e])?!!t[e]:!1}function Is(){return xp}var kp=Z({},Hr,{key:function(e){if(e.key){var t=gp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sp=Ne(kp),Cp=Z({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Aa=Ne(Cp),Ep=Z({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),jp=Ne(Ep),_p=Z({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lp=Ne(_p),Pp=Z({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zp=Ne(Pp),Np=[9,13,27,32],Rs=at&&"CompositionEvent"in window,pr=null;at&&"documentMode"in document&&(pr=document.documentMode);var Ip=at&&"TextEvent"in window&&!pr,Yc=at&&(!Rs||pr&&8<pr&&11>=pr),Da=String.fromCharCode(32),Fa=!1;function Kc(e,t){switch(e){case"keyup":return Np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function Rp(e,t){switch(e){case"compositionend":return Zc(t);case"keypress":return t.which!==32?null:(Fa=!0,Da);case"textInput":return e=t.data,e===Da&&Fa?null:e;default:return null}}function Tp(e,t){if(pn)return e==="compositionend"||!Rs&&Kc(e,t)?(e=Gc(),yi=zs=kt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yc&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function Xc(e,t,n,r){Lc(r),t=Di(t,"onChange"),0<t.length&&(n=new Ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,Lr=null;function $p(e){sd(e,0)}function co(e){var t=vn(e);if(xc(t))return e}function Op(e,t){if(e==="change")return t}var Jc=!1;if(at){var Uo;if(at){var Wo="oninput"in document;if(!Wo){var Ua=document.createElement("div");Ua.setAttribute("oninput","return;"),Wo=typeof Ua.oninput=="function"}Uo=Wo}else Uo=!1;Jc=Uo&&(!document.documentMode||9<document.documentMode)}function Wa(){mr&&(mr.detachEvent("onpropertychange",qc),Lr=mr=null)}function qc(e){if(e.propertyName==="value"&&co(Lr)){var t=[];Xc(t,Lr,e,Es(e)),Ic($p,t)}}function Ap(e,t,n){e==="focusin"?(Wa(),mr=t,Lr=n,mr.attachEvent("onpropertychange",qc)):e==="focusout"&&Wa()}function Dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(Lr)}function Fp(e,t){if(e==="click")return co(t)}function Bp(e,t){if(e==="input"||e==="change")return co(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Up;function Pr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fl.call(t,i)||!Ge(e[i],t[i]))return!1}return!0}function Ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Va(e,t){var n=Ha(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ha(n)}}function bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ed(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wp(e){var t=ed(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bc(n.ownerDocument.documentElement,n)){if(r!==null&&Ts(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Va(n,o);var l=Va(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hp=at&&"documentMode"in document&&11>=document.documentMode,mn=null,Il=null,hr=null,Rl=!1;function Qa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rl||mn==null||mn!==Ii(r)||(r=mn,"selectionStart"in r&&Ts(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Pr(hr,r)||(hr=r,r=Di(Il,"onSelect"),0<r.length&&(t=new Ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mn)))}function ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hn={animationend:ii("Animation","AnimationEnd"),animationiteration:ii("Animation","AnimationIteration"),animationstart:ii("Animation","AnimationStart"),transitionend:ii("Transition","TransitionEnd")},Ho={},td={};at&&(td=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function fo(e){if(Ho[e])return Ho[e];if(!hn[e])return e;var t=hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in td)return Ho[e]=t[n];return e}var nd=fo("animationend"),rd=fo("animationiteration"),id=fo("animationstart"),od=fo("transitionend"),ld=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){ld.set(e,t),ln(t,[e])}for(var Vo=0;Vo<Ga.length;Vo++){var Qo=Ga[Vo],Vp=Qo.toLowerCase(),Qp=Qo[0].toUpperCase()+Qo.slice(1);At(Vp,"on"+Qp)}At(nd,"onAnimationEnd");At(rd,"onAnimationIteration");At(id,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(od,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gp=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function Ya(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V0(r,t,void 0,e),e.currentTarget=null}function sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Ya(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Ya(i,s,u),o=a}}}if(Ti)throw e=Ll,Ti=!1,Ll=null,e}function W(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(ad(t,e,2,!1),n.add(r))}function Go(e,t,n){var r=0;t&&(r|=4),ad(n,e,r,t)}var oi="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[oi]){e[oi]=!0,hc.forEach(function(n){n!=="selectionchange"&&(Gp.has(n)||Go(n,!1,e),Go(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oi]||(t[oi]=!0,Go("selectionchange",!1,t))}}function ad(e,t,n,r){switch(Qc(t)){case 1:var i=lp;break;case 4:i=sp;break;default:i=Ps}n=i.bind(null,t,n,e),i=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Gt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Ic(function(){var u=o,p=Es(n),v=[];e:{var f=ld.get(e);if(f!==void 0){var g=Ns,x=e;switch(e){case"keypress":if(wi(n)===0)break e;case"keydown":case"keyup":g=Sp;break;case"focusin":x="focus",g=Bo;break;case"focusout":x="blur",g=Bo;break;case"beforeblur":case"afterblur":g=Bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jp;break;case nd:case rd:case id:g=pp;break;case od:g=Lp;break;case"scroll":g=ap;break;case"wheel":g=zp;break;case"copy":case"cut":case"paste":g=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Aa}var w=(t&4)!==0,z=!w&&e==="scroll",d=w?f!==null?f+"Capture":null:f;w=[];for(var c=u,m;c!==null;){m=c;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,d!==null&&(y=Cr(c,d),y!=null&&w.push(Nr(c,y,m)))),z)break;c=c.return}0<w.length&&(f=new g(f,x,null,n,p),v.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==El&&(x=n.relatedTarget||n.fromElement)&&(Gt(x)||x[ut]))break e;if((g||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Gt(x):null,x!==null&&(z=sn(x),x!==z||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(w=$a,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Aa,y="onPointerLeave",d="onPointerEnter",c="pointer"),z=g==null?f:vn(g),m=x==null?f:vn(x),f=new w(y,c+"leave",g,n,p),f.target=z,f.relatedTarget=m,y=null,Gt(p)===u&&(w=new w(d,c+"enter",x,n,p),w.target=m,w.relatedTarget=z,y=w),z=y,g&&x)t:{for(w=g,d=x,c=0,m=w;m;m=cn(m))c++;for(m=0,y=d;y;y=cn(y))m++;for(;0<c-m;)w=cn(w),c--;for(;0<m-c;)d=cn(d),m--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=cn(w),d=cn(d)}w=null}else w=null;g!==null&&Ka(v,f,g,w,!1),x!==null&&z!==null&&Ka(v,z,x,w,!0)}}e:{if(f=u?vn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=Op;else if(Ba(f))if(Jc)S=Bp;else{S=Dp;var _=Ap}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Fp);if(S&&(S=S(e,u))){Xc(v,S,n,p);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&wl(f,"number",f.value)}switch(_=u?vn(u):window,e){case"focusin":(Ba(_)||_.contentEditable==="true")&&(mn=_,Il=u,hr=null);break;case"focusout":hr=Il=mn=null;break;case"mousedown":Rl=!0;break;case"contextmenu":case"mouseup":case"dragend":Rl=!1,Qa(v,n,p);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":Qa(v,n,p)}var k;if(Rs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else pn?Kc(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Yc&&n.locale!=="ko"&&(pn||N!=="onCompositionStart"?N==="onCompositionEnd"&&pn&&(k=Gc()):(kt=p,zs="value"in kt?kt.value:kt.textContent,pn=!0)),_=Di(u,N),0<_.length&&(N=new Oa(N,e,null,n,p),v.push({event:N,listeners:_}),k?N.data=k:(k=Zc(n),k!==null&&(N.data=k)))),(k=Ip?Rp(e,n):Tp(e,n))&&(u=Di(u,"onBeforeInput"),0<u.length&&(p=new Oa("onBeforeInput","beforeinput",null,n,p),v.push({event:p,listeners:u}),p.data=k))}sd(v,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Di(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Cr(e,n),o!=null&&r.unshift(Nr(e,o,i)),o=Cr(e,t),o!=null&&r.push(Nr(e,o,i))),e=e.return}return r}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ka(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=Cr(n,o),a!=null&&l.unshift(Nr(n,a,s))):i||(a=Cr(n,o),a!=null&&l.push(Nr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Yp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function Za(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Kp,"")}function li(e,t,n){if(t=Za(t),Za(e)!==t&&n)throw Error(E(425))}function Fi(){}var Tl=null,Ml=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,Zp=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(Jp)}:Ol;function Jp(e){setTimeout(function(){throw e})}function Ko(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_r(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ja(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Gn,Ir="__reactProps$"+Gn,ut="__reactContainer$"+Gn,Al="__reactEvents$"+Gn,qp="__reactListeners$"+Gn,bp="__reactHandles$"+Gn;function Gt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ja(e);e!==null;){if(n=e[Je])return n;e=Ja(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[Je]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function po(e){return e[Ir]||null}var Dl=[],gn=-1;function Dt(e){return{current:e}}function V(e){0>gn||(e.current=Dl[gn],Dl[gn]=null,gn--)}function U(e,t){gn++,Dl[gn]=e.current,e.current=t}var $t={},pe=Dt($t),xe=Dt(!1),bt=$t;function Tn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function Bi(){V(xe),V(pe)}function qa(e,t,n){if(pe.current!==$t)throw Error(E(168));U(pe,t),U(xe,n)}function ud(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,A0(e)||"Unknown",i));return Z({},n,r)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,bt=pe.current,U(pe,e),U(xe,xe.current),!0}function ba(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=ud(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,V(xe),V(pe),U(pe,e)):V(xe),U(xe,n)}var rt=null,mo=!1,Zo=!1;function cd(e){rt===null?rt=[e]:rt.push(e)}function e1(e){mo=!0,cd(e)}function Ft(){if(!Zo&&rt!==null){Zo=!0;var e=0,t=D;try{var n=rt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}rt=null,mo=!1}catch(i){throw rt!==null&&(rt=rt.slice(e+1)),$c(js,Ft),i}finally{D=t,Zo=!1}}return null}var yn=[],wn=0,Wi=null,Hi=0,Re=[],Te=0,en=null,ot=1,lt="";function Vt(e,t){yn[wn++]=Hi,yn[wn++]=Wi,Wi=e,Hi=t}function dd(e,t,n){Re[Te++]=ot,Re[Te++]=lt,Re[Te++]=en,en=e;var r=ot;e=lt;var i=32-He(r)-1;r&=~(1<<i),n+=1;var o=32-He(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ot=1<<32-He(t)+i|n<<i|r,lt=o+e}else ot=1<<o|n<<i|r,lt=e}function Ms(e){e.return!==null&&(Vt(e,1),dd(e,1,0))}function $s(e){for(;e===Wi;)Wi=yn[--wn],yn[wn]=null,Hi=yn[--wn],yn[wn]=null;for(;e===en;)en=Re[--Te],Re[Te]=null,lt=Re[--Te],Re[Te]=null,ot=Re[--Te],Re[Te]=null}var Le=null,_e=null,G=!1,We=null;function fd(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,_e=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:ot,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,_e=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if(G){var t=_e;if(t){var n=t;if(!eu(e,t)){if(Fl(e))throw Error(E(418));t=Lt(n.nextSibling);var r=Le;t&&eu(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,G=!1,Le=e)}}else{if(Fl(e))throw Error(E(418));e.flags=e.flags&-4097|2,G=!1,Le=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function si(e){if(e!==Le)return!1;if(!G)return tu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=_e)){if(Fl(e))throw pd(),Error(E(418));for(;t;)fd(e,t),t=Lt(t.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Le?Lt(e.stateNode.nextSibling):null;return!0}function pd(){for(var e=_e;e;)e=Lt(e.nextSibling)}function Mn(){_e=Le=null,G=!1}function Os(e){We===null?We=[e]:We.push(e)}var t1=ft.ReactCurrentBatchConfig;function Be(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vi=Dt(null),Qi=null,xn=null,As=null;function Ds(){As=xn=Qi=null}function Fs(e){var t=Vi.current;V(Vi),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){Qi=e,As=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(As!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(Qi===null)throw Error(E(308));xn=e,Qi.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var Yt=null;function Bs(e){Yt===null?Yt=[e]:Yt.push(e)}function md(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bs(t)):(n.next=i.next,i.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Bs(r)):(t.next=i.next,i.next=t),r.interleaved=t,ct(e,n)}function xi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}function nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gi(e,t,n,r){var i=e.updateQueue;yt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(o!==null){var v=i.baseState;l=0,p=u=a=null,s=o;do{var f=s.lane,g=s.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(f=t,g=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){v=x.call(g,v,f);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,f=typeof x=="function"?x.call(g,v,f):x,f==null)break e;v=Z({},v,f);break e;case 2:yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else g={eventTime:g,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=g,a=v):p=p.next=g,l|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(p===null&&(a=v),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nn|=l,e.lanes=l,e.memoizedState=v}}function ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var vd=new mc.Component().refs;function Wl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=Nt(e),o=st(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pt(e,o,i),t!==null&&(Ve(t,e,i,r),xi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=Nt(e),o=st(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pt(e,o,i),t!==null&&(Ve(t,e,i,r),xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Nt(e),i=st(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pt(e,i,r),t!==null&&(Ve(t,e,r,n),xi(t,e,r))}};function iu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,o):!0}function gd(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Oe(o):(i=ke(t)?bt:pe.current,r=t.contextTypes,o=(r=r!=null)?Tn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function Hl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=vd,Us(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Oe(o):(o=ke(t)?bt:pe.current,i.context=Tn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Wl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ho.enqueueReplaceState(i,i.state,null),Gi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===vd&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lu(e){var t=e._init;return t(e._payload)}function yd(e){function t(d,c){if(e){var m=d.deletions;m===null?(d.deletions=[c],d.flags|=16):m.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=It(d,c),d.index=0,d.sibling=null,d}function o(d,c,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<c?(d.flags|=2,c):m):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,m,y){return c===null||c.tag!==6?(c=nl(m,d.mode,y),c.return=d,c):(c=i(c,m),c.return=d,c)}function a(d,c,m,y){var S=m.type;return S===fn?p(d,c,m.props.children,y,m.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gt&&lu(S)===c.type)?(y=i(c,m.props),y.ref=nr(d,c,m),y.return=d,y):(y=_i(m.type,m.key,m.props,null,d.mode,y),y.ref=nr(d,c,m),y.return=d,y)}function u(d,c,m,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=rl(m,d.mode,y),c.return=d,c):(c=i(c,m.children||[]),c.return=d,c)}function p(d,c,m,y,S){return c===null||c.tag!==7?(c=Jt(m,d.mode,y,S),c.return=d,c):(c=i(c,m),c.return=d,c)}function v(d,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=nl(""+c,d.mode,m),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jr:return m=_i(c.type,c.key,c.props,null,d.mode,m),m.ref=nr(d,null,c),m.return=d,m;case dn:return c=rl(c,d.mode,m),c.return=d,c;case gt:var y=c._init;return v(d,y(c._payload),m)}if(ar(c)||Jn(c))return c=Jt(c,d.mode,m,null),c.return=d,c;ai(d,c)}return null}function f(d,c,m,y){var S=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(d,c,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jr:return m.key===S?a(d,c,m,y):null;case dn:return m.key===S?u(d,c,m,y):null;case gt:return S=m._init,f(d,c,S(m._payload),y)}if(ar(m)||Jn(m))return S!==null?null:p(d,c,m,y,null);ai(d,m)}return null}function g(d,c,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(m)||null,s(c,d,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Jr:return d=d.get(y.key===null?m:y.key)||null,a(c,d,y,S);case dn:return d=d.get(y.key===null?m:y.key)||null,u(c,d,y,S);case gt:var _=y._init;return g(d,c,m,_(y._payload),S)}if(ar(y)||Jn(y))return d=d.get(m)||null,p(c,d,y,S,null);ai(c,y)}return null}function x(d,c,m,y){for(var S=null,_=null,k=c,N=c=0,F=null;k!==null&&N<m.length;N++){k.index>N?(F=k,k=null):F=k.sibling;var T=f(d,k,m[N],y);if(T===null){k===null&&(k=F);break}e&&k&&T.alternate===null&&t(d,k),c=o(T,c,N),_===null?S=T:_.sibling=T,_=T,k=F}if(N===m.length)return n(d,k),G&&Vt(d,N),S;if(k===null){for(;N<m.length;N++)k=v(d,m[N],y),k!==null&&(c=o(k,c,N),_===null?S=k:_.sibling=k,_=k);return G&&Vt(d,N),S}for(k=r(d,k);N<m.length;N++)F=g(k,d,N,m[N],y),F!==null&&(e&&F.alternate!==null&&k.delete(F.key===null?N:F.key),c=o(F,c,N),_===null?S=F:_.sibling=F,_=F);return e&&k.forEach(function(Ce){return t(d,Ce)}),G&&Vt(d,N),S}function w(d,c,m,y){var S=Jn(m);if(typeof S!="function")throw Error(E(150));if(m=S.call(m),m==null)throw Error(E(151));for(var _=S=null,k=c,N=c=0,F=null,T=m.next();k!==null&&!T.done;N++,T=m.next()){k.index>N?(F=k,k=null):F=k.sibling;var Ce=f(d,k,T.value,y);if(Ce===null){k===null&&(k=F);break}e&&k&&Ce.alternate===null&&t(d,k),c=o(Ce,c,N),_===null?S=Ce:_.sibling=Ce,_=Ce,k=F}if(T.done)return n(d,k),G&&Vt(d,N),S;if(k===null){for(;!T.done;N++,T=m.next())T=v(d,T.value,y),T!==null&&(c=o(T,c,N),_===null?S=T:_.sibling=T,_=T);return G&&Vt(d,N),S}for(k=r(d,k);!T.done;N++,T=m.next())T=g(k,d,N,T.value,y),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?N:T.key),c=o(T,c,N),_===null?S=T:_.sibling=T,_=T);return e&&k.forEach(function(Ut){return t(d,Ut)}),G&&Vt(d,N),S}function z(d,c,m,y){if(typeof m=="object"&&m!==null&&m.type===fn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Jr:e:{for(var S=m.key,_=c;_!==null;){if(_.key===S){if(S=m.type,S===fn){if(_.tag===7){n(d,_.sibling),c=i(_,m.props.children),c.return=d,d=c;break e}}else if(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gt&&lu(S)===_.type){n(d,_.sibling),c=i(_,m.props),c.ref=nr(d,_,m),c.return=d,d=c;break e}n(d,_);break}else t(d,_);_=_.sibling}m.type===fn?(c=Jt(m.props.children,d.mode,y,m.key),c.return=d,d=c):(y=_i(m.type,m.key,m.props,null,d.mode,y),y.ref=nr(d,c,m),y.return=d,d=y)}return l(d);case dn:e:{for(_=m.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(d,c.sibling),c=i(c,m.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=rl(m,d.mode,y),c.return=d,d=c}return l(d);case gt:return _=m._init,z(d,c,_(m._payload),y)}if(ar(m))return x(d,c,m,y);if(Jn(m))return w(d,c,m,y);ai(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,m),c.return=d,d=c):(n(d,c),c=nl(m,d.mode,y),c.return=d,d=c),l(d)):n(d,c)}return z}var $n=yd(!0),wd=yd(!1),Qr={},et=Dt(Qr),Rr=Dt(Qr),Tr=Dt(Qr);function Kt(e){if(e===Qr)throw Error(E(174));return e}function Ws(e,t){switch(U(Tr,t),U(Rr,e),U(et,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}V(et),U(et,t)}function On(){V(et),V(Rr),V(Tr)}function xd(e){Kt(Tr.current);var t=Kt(et.current),n=kl(t,e.type);t!==n&&(U(Rr,e),U(et,n))}function Hs(e){Rr.current===e&&(V(et),V(Rr))}var Y=Dt(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xo=[];function Vs(){for(var e=0;e<Xo.length;e++)Xo[e]._workInProgressVersionPrimary=null;Xo.length=0}var ki=ft.ReactCurrentDispatcher,Jo=ft.ReactCurrentBatchConfig,tn=0,K=null,te=null,re=null,Ki=!1,vr=!1,Mr=0,n1=0;function ue(){throw Error(E(321))}function Qs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Gs(e,t,n,r,i,o){if(tn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ki.current=e===null||e.memoizedState===null?l1:s1,e=n(r,i),vr){o=0;do{if(vr=!1,Mr=0,25<=o)throw Error(E(301));o+=1,re=te=null,t.updateQueue=null,ki.current=a1,e=n(r,i)}while(vr)}if(ki.current=Zi,t=te!==null&&te.next!==null,tn=0,re=te=K=null,Ki=!1,t)throw Error(E(300));return e}function Ys(){var e=Mr!==0;return Mr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?K.memoizedState=re=e:re=re.next=e,re}function Ae(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?K.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(E(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?K.memoizedState=re=e:re=re.next=e}return re}function $r(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var p=u.lane;if((tn&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var v={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=v,l=r):a=a.next=v,K.lanes|=p,nn|=p}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,Ge(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ge(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function kd(){}function Sd(e,t){var n=K,r=Ae(),i=t(),o=!Ge(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,Ks(jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Or(9,Ed.bind(null,n,r,i,t),void 0,null),oe===null)throw Error(E(349));tn&30||Cd(n,t,i)}return i}function Cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,r){t.value=n,t.getSnapshot=r,_d(t)&&Ld(e)}function jd(e,t,n){return n(function(){_d(t)&&Ld(e)})}function _d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Ld(e){var t=ct(e,1);t!==null&&Ve(t,e,1,-1)}function su(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=o1.bind(null,K,e),[t.memoizedState,e]}function Or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pd(){return Ae().memoizedState}function Si(e,t,n,r){var i=Xe();K.flags|=e,i.memoizedState=Or(1|t,n,void 0,r===void 0?null:r)}function vo(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&Qs(r,l.deps)){i.memoizedState=Or(t,n,o,r);return}}K.flags|=e,i.memoizedState=Or(1|t,n,o,r)}function au(e,t){return Si(8390656,8,e,t)}function Ks(e,t){return vo(2048,8,e,t)}function zd(e,t){return vo(4,2,e,t)}function Nd(e,t){return vo(4,4,e,t)}function Id(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){return n=n!=null?n.concat([e]):null,vo(4,4,Id.bind(null,t,e),n)}function Zs(){}function Td(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Md(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $d(e,t,n){return tn&21?(Ge(n,t)||(n=Dc(),K.lanes|=n,nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function r1(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Jo.transition;Jo.transition={};try{e(!1),t()}finally{D=n,Jo.transition=r}}function Od(){return Ae().memoizedState}function i1(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ad(e))Dd(t,n);else if(n=md(e,t,n,r),n!==null){var i=he();Ve(n,e,r,i),Fd(n,t,r)}}function o1(e,t,n){var r=Nt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ad(e))Dd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ge(s,l)){var a=t.interleaved;a===null?(i.next=i,Bs(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=md(e,t,i,r),n!==null&&(i=he(),Ve(n,e,r,i),Fd(n,t,r))}}function Ad(e){var t=e.alternate;return e===K||t!==null&&t===K}function Dd(e,t){vr=Ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_s(e,n)}}var Zi={readContext:Oe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},l1={readContext:Oe,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:au,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Si(4194308,4,Id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i1.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:su,useDebugValue:Zs,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=su(!1),t=e[0];return e=r1.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Xe();if(G){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),oe===null)throw Error(E(349));tn&30||Cd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,au(jd.bind(null,r,o,e),[e]),r.flags|=2048,Or(9,Ed.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=oe.identifierPrefix;if(G){var n=lt,r=ot;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s1={readContext:Oe,useCallback:Td,useContext:Oe,useEffect:Ks,useImperativeHandle:Rd,useInsertionEffect:zd,useLayoutEffect:Nd,useMemo:Md,useReducer:qo,useRef:Pd,useState:function(){return qo($r)},useDebugValue:Zs,useDeferredValue:function(e){var t=Ae();return $d(t,te.memoizedState,e)},useTransition:function(){var e=qo($r)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:Sd,useId:Od,unstable_isNewReconciler:!1},a1={readContext:Oe,useCallback:Td,useContext:Oe,useEffect:Ks,useImperativeHandle:Rd,useInsertionEffect:zd,useLayoutEffect:Nd,useMemo:Md,useReducer:bo,useRef:Pd,useState:function(){return bo($r)},useDebugValue:Zs,useDeferredValue:function(e){var t=Ae();return te===null?t.memoizedState=e:$d(t,te.memoizedState,e)},useTransition:function(){var e=bo($r)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:Sd,useId:Od,unstable_isNewReconciler:!1};function An(e,t){try{var n="",r=t;do n+=O0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function el(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var u1=typeof WeakMap=="function"?WeakMap:Map;function Bd(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ji||(Ji=!0,es=r),Vl(e,t)},n}function Ud(e,t,n){n=st(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Vl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vl(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new u1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=C1.bind(null,e,t,n),t.then(e,e))}function cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function du(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var c1=ft.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?wd(t,null,n,r):$n(t,e.child,n,r)}function fu(e,t,n,r,i){n=n.render;var o=t.ref;return Pn(t,i),r=Gs(e,t,n,r,o,i),n=Ys(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(G&&n&&Ms(t),t.flags|=1,me(e,t,r,i),t.child)}function pu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ra(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wd(e,t,o,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return dt(e,t,i)}return t.flags|=1,e=It(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pr(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,dt(e,t,i)}return Ql(e,t,n,r,i)}function Hd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Sn,je),je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Sn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Sn,je),je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Sn,je),je|=r;return me(e,t,i,n),t.child}function Vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,i){var o=ke(n)?bt:pe.current;return o=Tn(t,o),Pn(t,i),n=Gs(e,t,n,r,o,i),r=Ys(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dt(e,t,i)):(G&&r&&Ms(t),t.flags|=1,me(e,t,n,i),t.child)}function mu(e,t,n,r,i){if(ke(n)){var o=!0;Ui(t)}else o=!1;if(Pn(t,i),t.stateNode===null)Ci(e,t),gd(t,n,r),Hl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=ke(n)?bt:pe.current,u=Tn(t,u));var p=n.getDerivedStateFromProps,v=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ou(t,l,r,u),yt=!1;var f=t.memoizedState;l.state=f,Gi(t,r,l,i),a=t.memoizedState,s!==r||f!==a||xe.current||yt?(typeof p=="function"&&(Wl(t,n,p,r),a=t.memoizedState),(s=yt||iu(t,n,s,r,f,a,u))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,hd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Be(t.type,s),l.props=u,v=t.pendingProps,f=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Oe(a):(a=ke(n)?bt:pe.current,a=Tn(t,a));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||f!==a)&&ou(t,l,r,a),yt=!1,f=t.memoizedState,l.state=f,Gi(t,r,l,i);var x=t.memoizedState;s!==v||f!==x||xe.current||yt?(typeof g=="function"&&(Wl(t,n,g,r),x=t.memoizedState),(u=yt||iu(t,n,u,r,f,x,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Gl(e,t,n,r,o,i)}function Gl(e,t,n,r,i,o){Vd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ba(t,n,!1),dt(e,t,o);r=t.stateNode,c1.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=$n(t,e.child,null,o),t.child=$n(t,null,s,o)):me(e,t,s,o),t.memoizedState=r.state,i&&ba(t,n,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?qa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qa(e,t.context,!1),Ws(e,t.containerInfo)}function hu(e,t,n,r,i){return Mn(),Os(i),t.flags|=256,me(e,t,n,r),t.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gd(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Y,i&1),e===null)return Bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=wo(l,r,0,null),e=Jt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Kl(n),t.memoizedState=Yl,e):Xs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return d1(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=It(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=It(s,o):(o=Jt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Kl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Yl,r}return o=e.child,e=o.sibling,r=It(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ui(e,t,n,r){return r!==null&&Os(r),$n(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=el(Error(E(422))),ui(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wo({mode:"visible",children:r.children},i,0,null),o=Jt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&$n(t,e.child,null,l),t.child.memoizedState=Kl(l),t.memoizedState=Yl,o);if(!(t.mode&1))return ui(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=el(o,r,void 0),ui(e,t,l,r)}if(s=(l&e.childLanes)!==0,we||s){if(r=oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ct(e,i),Ve(r,e,i,-1))}return na(),r=el(Error(E(421))),ui(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=E1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Lt(i.nextSibling),Le=t,G=!0,We=null,e!==null&&(Re[Te++]=ot,Re[Te++]=lt,Re[Te++]=en,ot=e.id,lt=e.overflow,en=t),t=Xs(t,r.children),t.flags|=4096,t)}function vu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function tl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Yd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vu(e,n,t);else if(e.tag===19)vu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Yi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Yi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,o);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function f1(e,t,n){switch(t.tag){case 3:Qd(t),Mn();break;case 5:xd(t);break;case 1:ke(t.type)&&Ui(t);break;case 4:Ws(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Vi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Gd(e,t,n):(U(Y,Y.current&1),e=dt(e,t,n),e!==null?e.sibling:null);U(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Hd(e,t,n)}return dt(e,t,n)}var Kd,Zl,Zd,Xd;Kd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zl=function(){};Zd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kt(et.current);var o=null;switch(n){case"input":i=gl(e,i),r=gl(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=xl(e,i),r=xl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fi)}Sl(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(kr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(kr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&W("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Xd=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function p1(e,t,n){var r=t.pendingProps;switch($s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&Bi(),ce(t),null;case 3:return r=t.stateNode,On(),V(xe),V(pe),Vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(rs(We),We=null))),Zl(e,t),ce(t),null;case 5:Hs(t);var i=Kt(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return ce(t),null}if(e=Kt(et.current),si(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Je]=t,r[Ir]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<cr.length;i++)W(cr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ja(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":La(r,o),W("invalid",r)}Sl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&li(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&li(r.textContent,s,e),i=["children",""+s]):kr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":qr(r),_a(r,o,!0);break;case"textarea":qr(r),Pa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Je]=t,e[Ir]=r,Kd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Cl(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<cr.length;i++)W(cr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":ja(e,r),i=gl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":La(e,r),i=xl(e,r),W("invalid",e);break;default:i=r}Sl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?_c(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ec(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Sr(e,a):typeof a=="number"&&Sr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(kr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&W("scroll",e):a!=null&&xs(e,o,a,l))}switch(n){case"input":qr(e),_a(e,r,!1);break;case"textarea":qr(e),Pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?En(e,!!r.multiple,o,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Fi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Xd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Kt(Tr.current),Kt(et.current),si(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(o=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:li(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&li(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return ce(t),null;case 13:if(V(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&_e!==null&&t.mode&1&&!(t.flags&128))pd(),Mn(),t.flags|=98560,o=!1;else if(o=si(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Je]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else We!==null&&(rs(We),We=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ne===0&&(ne=3):na())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return On(),Zl(e,t),e===null&&zr(t.stateNode.containerInfo),ce(t),null;case 10:return Fs(t.type._context),ce(t),null;case 17:return ke(t.type)&&Bi(),ce(t),null;case 19:if(V(Y),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)rr(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yi(e),l!==null){for(t.flags|=128,rr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Dn&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return ce(t),null}else 2*J()-o.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=Y.current,U(Y,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function m1(e,t){switch($s(t),t.tag){case 1:return ke(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),V(xe),V(pe),Vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hs(t),null;case 13:if(V(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Y),null;case 4:return On(),null;case 10:return Fs(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var ci=!1,de=!1,h1=typeof WeakSet=="function"?WeakSet:Set,P=null;function kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Xl(e,t,n){try{n()}catch(r){X(e,t,r)}}var gu=!1;function v1(e,t){if(Tl=Oi,e=ed(),Ts(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,v=e,f=null;t:for(;;){for(var g;v!==n||i!==0&&v.nodeType!==3||(s=l+i),v!==o||r!==0&&v.nodeType!==3||(a=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(g=v.firstChild)!==null;)f=v,v=g;for(;;){if(v===e)break t;if(f===n&&++u===i&&(s=l),f===o&&++p===r&&(a=l),(g=v.nextSibling)!==null)break;v=f,f=v.parentNode}v=g}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ml={focusedElem:e,selectionRange:n},Oi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,z=x.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Be(t.type,w),z);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=gu,gu=!1,x}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Xl(t,n,o)}i=i.next}while(i!==r)}}function go(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[Ir],delete t[Al],delete t[qp],delete t[bp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qd(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fi));else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}var le=null,Ue=!1;function mt(e,t,n){for(n=n.child;n!==null;)bd(e,t,n),n=n.sibling}function bd(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ao,n)}catch{}switch(n.tag){case 5:de||kn(n,t);case 6:var r=le,i=Ue;le=null,mt(e,t,n),le=r,Ue=i,le!==null&&(Ue?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ue?(e=le,n=n.stateNode,e.nodeType===8?Ko(e.parentNode,n):e.nodeType===1&&Ko(e,n),_r(e)):Ko(le,n.stateNode));break;case 4:r=le,i=Ue,le=n.stateNode.containerInfo,Ue=!0,mt(e,t,n),le=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Xl(n,t,l),i=i.next}while(i!==r)}mt(e,t,n);break;case 1:if(!de&&(kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,mt(e,t,n),de=r):mt(e,t,n);break;default:mt(e,t,n)}}function wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new h1),t.forEach(function(r){var i=j1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Ue=!1;break e;case 3:le=s.stateNode.containerInfo,Ue=!0;break e;case 4:le=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(le===null)throw Error(E(160));bd(o,l,i),le=null,Ue=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ef(t,e),t=t.sibling}function ef(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),Ze(e),r&4){try{gr(3,e,e.return),go(3,e)}catch(w){X(e,e.return,w)}try{gr(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Fe(t,e),Ze(e),r&512&&n!==null&&kn(n,n.return);break;case 5:if(Fe(t,e),Ze(e),r&512&&n!==null&&kn(n,n.return),e.flags&32){var i=e.stateNode;try{Sr(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&kc(i,o),Cl(s,l);var u=Cl(s,o);for(l=0;l<a.length;l+=2){var p=a[l],v=a[l+1];p==="style"?_c(i,v):p==="dangerouslySetInnerHTML"?Ec(i,v):p==="children"?Sr(i,v):xs(i,p,v,u)}switch(s){case"input":yl(i,o);break;case"textarea":Sc(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?En(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?En(i,!!o.multiple,o.defaultValue,!0):En(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ir]=o}catch(w){X(e,e.return,w)}}break;case 6:if(Fe(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){X(e,e.return,w)}}break;case 3:if(Fe(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_r(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Fe(t,e),Ze(e);break;case 13:Fe(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bs=J())),r&4&&wu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||p,Fe(t,e),de=u):Fe(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(P=e,p=e.child;p!==null;){for(v=P=p;P!==null;){switch(f=P,g=f.child,f.tag){case 0:case 11:case 14:case 15:gr(4,f,f.return);break;case 1:kn(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:kn(f,f.return);break;case 22:if(f.memoizedState!==null){ku(v);continue}}g!==null?(g.return=f,P=g):ku(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{i=v.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=v.stateNode,a=v.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=jc("display",l))}catch(w){X(e,e.return,w)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(w){X(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Fe(t,e),Ze(e),r&4&&wu(e);break;case 21:break;default:Fe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qd(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sr(i,""),r.flags&=-33);var o=yu(e);bl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=yu(e);ql(e,s,l);break;default:throw Error(E(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g1(e,t,n){P=e,tf(e)}function tf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ci;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||de;s=ci;var u=de;if(ci=l,(de=a)&&!u)for(P=i;P!==null;)l=P,a=l.child,l.tag===22&&l.memoizedState!==null?Su(i):a!==null?(a.return=l,P=a):Su(i);for(;o!==null;)P=o,tf(o),o=o.sibling;P=i,ci=s,de=u}xu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):xu(e)}}function xu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||go(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ru(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ru(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&_r(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}de||t.flags&512&&Jl(t)}catch(f){X(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ku(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Su(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{go(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{Jl(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{Jl(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var y1=Math.ceil,Xi=ft.ReactCurrentDispatcher,Js=ft.ReactCurrentOwner,$e=ft.ReactCurrentBatchConfig,O=0,oe=null,b=null,se=0,je=0,Sn=Dt(0),ne=0,Ar=null,nn=0,yo=0,qs=0,yr=null,ye=null,bs=0,Dn=1/0,nt=null,Ji=!1,es=null,zt=null,di=!1,St=null,qi=0,wr=0,ts=null,Ei=-1,ji=0;function he(){return O&6?J():Ei!==-1?Ei:Ei=J()}function Nt(e){return e.mode&1?O&2&&se!==0?se&-se:t1.transition!==null?(ji===0&&(ji=Dc()),ji):(e=D,e!==0||(e=window.event,e=e===void 0?16:Qc(e.type)),e):1}function Ve(e,t,n,r){if(50<wr)throw wr=0,ts=null,Error(E(185));Wr(e,n,r),(!(O&2)||e!==oe)&&(e===oe&&(!(O&2)&&(yo|=n),ne===4&&xt(e,se)),Se(e,r),n===1&&O===0&&!(t.mode&1)&&(Dn=J()+500,mo&&Ft()))}function Se(e,t){var n=e.callbackNode;tp(e,t);var r=$i(e,e===oe?se:0);if(r===0)n!==null&&Ia(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ia(n),t===1)e.tag===0?e1(Cu.bind(null,e)):cd(Cu.bind(null,e)),Xp(function(){!(O&6)&&Ft()}),n=null;else{switch(Fc(r)){case 1:n=js;break;case 4:n=Oc;break;case 16:n=Mi;break;case 536870912:n=Ac;break;default:n=Mi}n=cf(n,nf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nf(e,t){if(Ei=-1,ji=0,O&6)throw Error(E(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=$i(e,e===oe?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bi(e,r);else{t=r;var i=O;O|=2;var o=of();(oe!==e||se!==t)&&(nt=null,Dn=J()+500,Xt(e,t));do try{k1();break}catch(s){rf(e,s)}while(1);Ds(),Xi.current=o,O=i,b!==null?t=0:(oe=null,se=0,t=ne)}if(t!==0){if(t===2&&(i=Pl(e),i!==0&&(r=i,t=ns(e,i))),t===1)throw n=Ar,Xt(e,0),xt(e,r),Se(e,J()),n;if(t===6)xt(e,r);else{if(i=e.current.alternate,!(r&30)&&!w1(i)&&(t=bi(e,r),t===2&&(o=Pl(e),o!==0&&(r=o,t=ns(e,o))),t===1))throw n=Ar,Xt(e,0),xt(e,r),Se(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Qt(e,ye,nt);break;case 3:if(xt(e,r),(r&130023424)===r&&(t=bs+500-J(),10<t)){if($i(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(Qt.bind(null,e,ye,nt),t);break}Qt(e,ye,nt);break;case 4:if(xt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-He(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y1(r/1960))-r,10<r){e.timeoutHandle=Ol(Qt.bind(null,e,ye,nt),r);break}Qt(e,ye,nt);break;case 5:Qt(e,ye,nt);break;default:throw Error(E(329))}}}return Se(e,J()),e.callbackNode===n?nf.bind(null,e):null}function ns(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=bi(e,t),e!==2&&(t=ye,ye=n,t!==null&&rs(t)),e}function rs(e){ye===null?ye=e:ye.push.apply(ye,e)}function w1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ge(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~qs,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Cu(e){if(O&6)throw Error(E(327));zn();var t=$i(e,0);if(!(t&1))return Se(e,J()),null;var n=bi(e,t);if(e.tag!==0&&n===2){var r=Pl(e);r!==0&&(t=r,n=ns(e,r))}if(n===1)throw n=Ar,Xt(e,0),xt(e,t),Se(e,J()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,ye,nt),Se(e,J()),null}function ea(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Dn=J()+500,mo&&Ft())}}function rn(e){St!==null&&St.tag===0&&!(O&6)&&zn();var t=O;O|=1;var n=$e.transition,r=D;try{if($e.transition=null,D=1,e)return e()}finally{D=r,$e.transition=n,O=t,!(O&6)&&Ft()}}function ta(){je=Sn.current,V(Sn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zp(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch($s(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bi();break;case 3:On(),V(xe),V(pe),Vs();break;case 5:Hs(r);break;case 4:On();break;case 13:V(Y);break;case 19:V(Y);break;case 10:Fs(r.type._context);break;case 22:case 23:ta()}n=n.return}if(oe=e,b=e=It(e.current,null),se=je=t,ne=0,Ar=null,qs=yo=nn=0,ye=yr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Yt=null}return e}function rf(e,t){do{var n=b;try{if(Ds(),ki.current=Zi,Ki){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ki=!1}if(tn=0,re=te=K=null,vr=!1,Mr=0,Js.current=null,n===null||n.return===null){ne=1,Ar=t,b=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=cu(l);if(g!==null){g.flags&=-257,du(g,l,s,o,t),g.mode&1&&uu(o,u,t),t=g,a=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){uu(o,u,t),na();break e}a=Error(E(426))}}else if(G&&s.mode&1){var z=cu(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),du(z,l,s,o,t),Os(An(a,s));break e}}o=a=An(a,s),ne!==4&&(ne=2),yr===null?yr=[o]:yr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Bd(o,a,t);nu(o,d);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zt===null||!zt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Ud(o,s,t);nu(o,y);break e}}o=o.return}while(o!==null)}sf(n)}catch(S){t=S,b===n&&n!==null&&(b=n=n.return);continue}break}while(1)}function of(){var e=Xi.current;return Xi.current=Zi,e===null?Zi:e}function na(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(nn&268435455)&&!(yo&268435455)||xt(oe,se)}function bi(e,t){var n=O;O|=2;var r=of();(oe!==e||se!==t)&&(nt=null,Xt(e,t));do try{x1();break}catch(i){rf(e,i)}while(1);if(Ds(),O=n,Xi.current=r,b!==null)throw Error(E(261));return oe=null,se=0,ne}function x1(){for(;b!==null;)lf(b)}function k1(){for(;b!==null&&!G0();)lf(b)}function lf(e){var t=uf(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?sf(e):b=t,Js.current=null}function sf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=m1(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,b=null;return}}else if(n=p1(n,t,je),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);ne===0&&(ne=5)}function Qt(e,t,n){var r=D,i=$e.transition;try{$e.transition=null,D=1,S1(e,t,n,r)}finally{$e.transition=i,D=r}return null}function S1(e,t,n,r){do zn();while(St!==null);if(O&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(np(e,o),e===oe&&(b=oe=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||di||(di=!0,cf(Mi,function(){return zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var l=D;D=1;var s=O;O|=4,Js.current=null,v1(e,n),ef(n,e),Wp(Ml),Oi=!!Tl,Ml=Tl=null,e.current=n,g1(n),Y0(),O=s,D=l,$e.transition=o}else e.current=n;if(di&&(di=!1,St=e,qi=i),o=e.pendingLanes,o===0&&(zt=null),X0(n.stateNode),Se(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ji)throw Ji=!1,e=es,es=null,e;return qi&1&&e.tag!==0&&zn(),o=e.pendingLanes,o&1?e===ts?wr++:(wr=0,ts=e):wr=0,Ft(),null}function zn(){if(St!==null){var e=Fc(qi),t=$e.transition,n=D;try{if($e.transition=null,D=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,qi=0,O&6)throw Error(E(331));var i=O;for(O|=4,P=e.current;P!==null;){var o=P,l=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(P=u;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:gr(8,p,o)}var v=p.child;if(v!==null)v.return=p,P=v;else for(;P!==null;){p=P;var f=p.sibling,g=p.return;if(Jd(p),p===u){P=null;break}if(f!==null){f.return=g,P=f;break}P=g}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}P=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,P=l;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:gr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,P=d;break e}P=o.return}}var c=e.current;for(P=c;P!==null;){l=P;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,P=m;else e:for(l=c;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:go(9,s)}}catch(S){X(s,s.return,S)}if(s===l){P=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,P=y;break e}P=s.return}}if(O=i,Ft(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ao,e)}catch{}r=!0}return r}finally{D=n,$e.transition=t}}return!1}function Eu(e,t,n){t=An(n,t),t=Bd(e,t,1),e=Pt(e,t,1),t=he(),e!==null&&(Wr(e,1,t),Se(e,t))}function X(e,t,n){if(e.tag===3)Eu(e,e,n);else for(;t!==null;){if(t.tag===3){Eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=An(n,e),e=Ud(t,e,1),t=Pt(t,e,1),e=he(),t!==null&&(Wr(t,1,e),Se(t,e));break}}t=t.return}}function C1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>J()-bs?Xt(e,0):qs|=n),Se(e,t)}function af(e,t){t===0&&(e.mode&1?(t=ti,ti<<=1,!(ti&130023424)&&(ti=4194304)):t=1);var n=he();e=ct(e,t),e!==null&&(Wr(e,t,n),Se(e,n))}function E1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),af(e,n)}function j1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),af(e,n)}var uf;uf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,f1(e,t,n);we=!!(e.flags&131072)}else we=!1,G&&t.flags&1048576&&dd(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ci(e,t),e=t.pendingProps;var i=Tn(t,pe.current);Pn(t,n),i=Gs(null,t,r,e,i,n);var o=Ys();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,Ui(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Us(t),i.updater=ho,t.stateNode=i,i._reactInternals=t,Hl(t,r,e,n),t=Gl(null,t,r,!0,o,n)):(t.tag=0,G&&o&&Ms(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ci(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=L1(r),e=Be(r,e),i){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=mu(null,t,r,e,n);break e;case 11:t=fu(null,t,r,e,n);break e;case 14:t=pu(null,t,r,Be(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),mu(e,t,r,i,n);case 3:e:{if(Qd(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hd(e,t),Gi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=An(Error(E(423)),t),t=hu(e,t,r,n,i);break e}else if(r!==i){i=An(Error(E(424)),t),t=hu(e,t,r,n,i);break e}else for(_e=Lt(t.stateNode.containerInfo.firstChild),Le=t,G=!0,We=null,n=wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===i){t=dt(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return xd(t),e===null&&Bl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,$l(r,i)?l=null:o!==null&&$l(r,o)&&(t.flags|=32),Vd(e,t),me(e,t,l,n),t.child;case 6:return e===null&&Bl(t),null;case 13:return Gd(e,t,n);case 4:return Ws(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$n(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),fu(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,U(Vi,r._currentValue),r._currentValue=l,o!==null)if(Ge(o.value,l)){if(o.children===i.children&&!xe.current){t=dt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=st(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ul(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ul(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pn(t,n),i=Oe(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),pu(e,t,r,i,n);case 15:return Wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ci(e,t),t.tag=1,ke(r)?(e=!0,Ui(t)):e=!1,Pn(t,n),gd(t,r,i),Hl(t,r,i,n),Gl(null,t,r,!0,e,n);case 19:return Yd(e,t,n);case 22:return Hd(e,t,n)}throw Error(E(156,t.tag))};function cf(e,t){return $c(e,t)}function _1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new _1(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function L1(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ss)return 11;if(e===Cs)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ra(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case fn:return Jt(n.children,i,o,t);case ks:l=8,i|=8;break;case pl:return e=Me(12,n,t,i|2),e.elementType=pl,e.lanes=o,e;case ml:return e=Me(13,n,t,i),e.elementType=ml,e.lanes=o,e;case hl:return e=Me(19,n,t,i),e.elementType=hl,e.lanes=o,e;case yc:return wo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vc:l=10;break e;case gc:l=9;break e;case Ss:l=11;break e;case Cs:l=14;break e;case gt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Me(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Jt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function wo(e,t,n,r){return e=Me(22,e,r,t),e.elementType=yc,e.lanes=n,e.stateNode={isHidden:!1},e}function nl(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function rl(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ao(0),this.expirationTimes=Ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ia(e,t,n,r,i,o,l,s,a){return e=new P1(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Us(o),e}function z1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function df(e){if(!e)return $t;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ke(n))return ud(e,n,t)}return t}function ff(e,t,n,r,i,o,l,s,a){return e=ia(n,r,!0,e,i,o,l,s,a),e.context=df(null),n=e.current,r=he(),i=Nt(n),o=st(r,i),o.callback=t??null,Pt(n,o,i),e.current.lanes=i,Wr(e,i,r),Se(e,r),e}function xo(e,t,n,r){var i=t.current,o=he(),l=Nt(i);return n=df(n),t.context===null?t.context=n:t.pendingContext=n,t=st(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(i,t,l),e!==null&&(Ve(e,i,l,o),xi(e,i,l)),l}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){ju(e,t),(e=e.alternate)&&ju(e,t)}function N1(){return null}var pf=typeof reportError=="function"?reportError:function(e){console.error(e)};function la(e){this._internalRoot=e}ko.prototype.render=la.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));xo(e,t,null,null)};ko.prototype.unmount=la.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){xo(null,e,null,null)}),t[ut]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Vc(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function I1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=eo(l);o.call(u)}}var l=ff(t,r,e,0,null,!1,!1,"",_u);return e._reactRootContainer=l,e[ut]=l.current,zr(e.nodeType===8?e.parentNode:e),rn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=eo(a);s.call(u)}}var a=ia(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=a,e[ut]=a.current,zr(e.nodeType===8?e.parentNode:e),rn(function(){xo(t,a,n,r)}),a}function Co(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=eo(l);s.call(a)}}xo(t,l,e,i)}else l=I1(n,t,e,i,r);return eo(l)}Bc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ur(t.pendingLanes);n!==0&&(_s(t,n|1),Se(t,J()),!(O&6)&&(Dn=J()+500,Ft()))}break;case 13:rn(function(){var r=ct(e,1);if(r!==null){var i=he();Ve(r,e,1,i)}}),oa(e,1)}};Ls=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=he();Ve(t,e,134217728,n)}oa(e,134217728)}};Uc=function(e){if(e.tag===13){var t=Nt(e),n=ct(e,t);if(n!==null){var r=he();Ve(n,e,t,r)}oa(e,t)}};Wc=function(){return D};Hc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};jl=function(e,t,n){switch(t){case"input":if(yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=po(r);if(!i)throw Error(E(90));xc(r),yl(r,i)}}}break;case"textarea":Sc(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}};zc=ea;Nc=rn;var R1={usingClientEntryPoint:!1,Events:[Vr,vn,po,Lc,Pc,ea]},ir={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},T1={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||N1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fi.isDisabled&&fi.supportsFiber)try{ao=fi.inject(T1),be=fi}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R1;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(E(200));return z1(e,t,null,n)};ze.createRoot=function(e,t){if(!sa(e))throw Error(E(299));var n=!1,r="",i=pf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ia(e,1,!1,null,null,n,!1,r,i),e[ut]=t.current,zr(e.nodeType===8?e.parentNode:e),new la(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Tc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return rn(e)};ze.hydrate=function(e,t,n){if(!So(t))throw Error(E(200));return Co(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!sa(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=pf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ff(t,null,e,1,n??null,i,!1,o,l),e[ut]=t.current,zr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ko(t)};ze.render=function(e,t,n){if(!So(t))throw Error(E(200));return Co(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!So(e))throw Error(E(40));return e._reactRootContainer?(rn(function(){Co(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};ze.unstable_batchedUpdates=ea;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!So(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Co(e,t,n,!1,r)};ze.version="18.2.0-next-9e3b772b8-20220608";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(e){console.error(e)}}mf(),dc.exports=ze;var M1=dc.exports,Lu=M1;dl.createRoot=Lu.createRoot,dl.hydrateRoot=Lu.hydrateRoot;var fe=function(){return fe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},fe.apply(this,arguments)};function Fn(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var H="-ms-",xr="-moz-",A="-webkit-",hf="comm",Eo="rule",aa="decl",$1="@import",vf="@keyframes",O1="@layer",A1=Math.abs,ua=String.fromCharCode,D1=Object.assign;function F1(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function gf(e){return e.trim()}function ht(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Li(e,t){return e.indexOf(t)}function ie(e,t){return e.charCodeAt(t)|0}function Bn(e,t,n){return e.slice(t,n)}function it(e){return e.length}function ca(e){return e.length}function pi(e,t){return t.push(e),e}function B1(e,t){return e.map(t).join("")}var jo=1,Un=1,yf=0,De=0,q=0,Yn="";function _o(e,t,n,r,i,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:jo,column:Un,length:l,return:""}}function or(e,t){return D1(_o("",null,null,"",null,null,0),e,{length:-e.length},t)}function U1(){return q}function W1(){return q=De>0?ie(Yn,--De):0,Un--,q===10&&(Un=1,jo--),q}function Qe(){return q=De<yf?ie(Yn,De++):0,Un++,q===10&&(Un=1,jo++),q}function qt(){return ie(Yn,De)}function Pi(){return De}function Lo(e,t){return Bn(Yn,e,t)}function is(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H1(e){return jo=Un=1,yf=it(Yn=e),De=0,[]}function V1(e){return Yn="",e}function il(e){return gf(Lo(De-1,os(e===91?e+2:e===40?e+1:e)))}function Q1(e){for(;(q=qt())&&q<33;)Qe();return is(e)>2||is(q)>3?"":" "}function G1(e,t){for(;--t&&Qe()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Lo(e,Pi()+(t<6&&qt()==32&&Qe()==32))}function os(e){for(;Qe();)switch(q){case e:return De;case 34:case 39:e!==34&&e!==39&&os(q);break;case 40:e===41&&os(e);break;case 92:Qe();break}return De}function Y1(e,t){for(;Qe()&&e+q!==47+10;)if(e+q===42+42&&qt()===47)break;return"/*"+Lo(t,De-1)+"*"+ua(e===47?e:Qe())}function K1(e){for(;!is(qt());)Qe();return Lo(e,De)}function Z1(e){return V1(zi("",null,null,null,[""],e=H1(e),0,[0],e))}function zi(e,t,n,r,i,o,l,s,a){for(var u=0,p=0,v=l,f=0,g=0,x=0,w=1,z=1,d=1,c=0,m="",y=i,S=o,_=r,k=m;z;)switch(x=c,c=Qe()){case 40:if(x!=108&&ie(k,v-1)==58){Li(k+=M(il(c),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=il(c);break;case 9:case 10:case 13:case 32:k+=Q1(x);break;case 92:k+=G1(Pi()-1,7);continue;case 47:switch(qt()){case 42:case 47:pi(X1(Y1(Qe(),Pi()),t,n),a);break;default:k+="/"}break;case 123*w:s[u++]=it(k)*d;case 125*w:case 59:case 0:switch(c){case 0:case 125:z=0;case 59+p:d==-1&&(k=M(k,/\f/g,"")),g>0&&it(k)-v&&pi(g>32?zu(k+";",r,n,v-1):zu(M(k," ","")+";",r,n,v-2),a);break;case 59:k+=";";default:if(pi(_=Pu(k,t,n,u,p,i,s,m,y=[],S=[],v),o),c===123)if(p===0)zi(k,t,_,_,y,o,v,s,S);else switch(f===99&&ie(k,3)===110?100:f){case 100:case 108:case 109:case 115:zi(e,_,_,r&&pi(Pu(e,_,_,0,0,i,s,m,i,y=[],v),S),i,S,v,s,r?y:S);break;default:zi(k,_,_,_,[""],S,0,s,S)}}u=p=g=0,w=d=1,m=k="",v=l;break;case 58:v=1+it(k),g=x;default:if(w<1){if(c==123)--w;else if(c==125&&w++==0&&W1()==125)continue}switch(k+=ua(c),c*w){case 38:d=p>0?1:(k+="\f",-1);break;case 44:s[u++]=(it(k)-1)*d,d=1;break;case 64:qt()===45&&(k+=il(Qe())),f=qt(),p=v=it(m=k+=K1(Pi())),c++;break;case 45:x===45&&it(k)==2&&(w=0)}}return o}function Pu(e,t,n,r,i,o,l,s,a,u,p){for(var v=i-1,f=i===0?o:[""],g=ca(f),x=0,w=0,z=0;x<r;++x)for(var d=0,c=Bn(e,v+1,v=A1(w=l[x])),m=e;d<g;++d)(m=gf(w>0?f[d]+" "+c:M(c,/&\f/g,f[d])))&&(a[z++]=m);return _o(e,t,n,i===0?Eo:s,a,u,p)}function X1(e,t,n){return _o(e,t,n,hf,ua(U1()),Bn(e,2,-2),0)}function zu(e,t,n,r){return _o(e,t,n,aa,Bn(e,0,r),Bn(e,r+1,-1),r)}function wf(e,t,n){switch(F1(e,t)){case 5103:return A+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+e+e;case 4789:return xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return A+e+xr+e+H+e+e;case 5936:switch(ie(e,t+11)){case 114:return A+e+H+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return A+e+H+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return A+e+H+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return A+e+H+e+e;case 6165:return A+e+H+"flex-"+e+e;case 5187:return A+e+M(e,/(\w+).+(:[^]+)/,A+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return A+e+H+"flex-item-"+M(e,/flex-|-self/g,"")+(ht(e,/flex-|baseline/)?"":H+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return A+e+H+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return A+e+H+M(e,"shrink","negative")+e;case 5292:return A+e+H+M(e,"basis","preferred-size")+e;case 6060:return A+"box-"+M(e,"-grow","")+A+e+H+M(e,"grow","positive")+e;case 4554:return A+M(e,/([^-])(transform)/g,"$1"+A+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+e+e;case 4200:if(!ht(e,/flex-|baseline/))return H+"grid-column-align"+Bn(e,t)+e;break;case 2592:case 3360:return H+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ht(r.props,/grid-\w+-end/)})?~Li(e+(n=n[t].value),"span")?e:H+M(e,"-start","")+e+H+"grid-row-span:"+(~Li(n,"span")?ht(n,/\d+/):+ht(n,/\d+/)-+ht(e,/\d+/))+";":H+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ht(r.props,/grid-\w+-start/)})?e:H+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,A+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+xr+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Li(e,"stretch")?wf(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,u){return H+i+":"+o+u+(l?H+i+"-span:"+(s?a:+a-+o)+u:"")+e});case 4949:if(ie(e,t+6)===121)return M(e,":",":"+A)+e;break;case 6444:switch(ie(e,ie(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+A+(ie(e,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+H+"$2box$3")+e;case 100:return M(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Nn(e,t){for(var n="",r=ca(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function J1(e,t,n,r){switch(e.type){case O1:if(e.children.length)break;case $1:case aa:return e.return=e.return||e.value;case hf:return"";case vf:return e.return=e.value+"{"+Nn(e.children,r)+"}";case Eo:e.value=e.props.join(",")}return it(n=Nn(e.children,r))?e.return=e.value+"{"+n+"}":""}function q1(e){var t=ca(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function b1(e){return function(t){t.root||(t=t.return)&&e(t)}}function em(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case aa:e.return=wf(e.value,e.length,n);return;case vf:return Nn([or(e,{value:M(e.value,"@","@"+A)})],r);case Eo:if(e.length)return B1(e.props,function(i){switch(ht(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Nn([or(e,{props:[M(i,/:(read-\w+)/,":"+xr+"$1")]})],r);case"::placeholder":return Nn([or(e,{props:[M(i,/:(plac\w+)/,":"+A+"input-$1")]}),or(e,{props:[M(i,/:(plac\w+)/,":"+xr+"$1")]}),or(e,{props:[M(i,/:(plac\w+)/,H+"input-$1")]})],r)}return""})}}var tm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",da=typeof window<"u"&&"HTMLElement"in window,nm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),rm={},xf=Object.freeze([]),on=Object.freeze({});function kf(e,t,n){return n===void 0&&(n=on),e.theme!==n.theme&&e.theme||t||n.theme}var Sf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),im=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,om=/(^-|-$)/g;function Nu(e){return e.replace(im,"-").replace(om,"")}var lm=/(a)(d)/gi,Iu=function(e){return String.fromCharCode(e+(e>25?39:97))};function ls(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Iu(t%52)+n;return(Iu(t%52)+n).replace(lm,"$1-$2")}var ol,Cn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Cf=function(e){return Cn(5381,e)};function fa(e){return ls(Cf(e)>>>0)}function sm(e){return e.displayName||e.name||"Component"}function ll(e){return typeof e=="string"&&!0}var Ef=typeof Symbol=="function"&&Symbol.for,jf=Ef?Symbol.for("react.memo"):60115,am=Ef?Symbol.for("react.forward_ref"):60112,um={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dm=((ol={})[am]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ol[jf]=_f,ol);function Ru(e){return("type"in(t=e)&&t.type.$$typeof)===jf?_f:"$$typeof"in e?dm[e.$$typeof]:um;var t}var fm=Object.defineProperty,pm=Object.getOwnPropertyNames,Tu=Object.getOwnPropertySymbols,mm=Object.getOwnPropertyDescriptor,hm=Object.getPrototypeOf,Mu=Object.prototype;function Lf(e,t,n){if(typeof t!="string"){if(Mu){var r=hm(t);r&&r!==Mu&&Lf(e,r,n)}var i=pm(t);Tu&&(i=i.concat(Tu(t)));for(var o=Ru(e),l=Ru(t),s=0;s<i.length;++s){var a=i[s];if(!(a in cm||n&&n[a]||l&&a in l||o&&a in o)){var u=mm(t,a);try{fm(e,a,u)}catch{}}}}return e}function Hn(e){return typeof e=="function"}function pa(e){return typeof e=="object"&&"styledComponentId"in e}function Zt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function to(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Dr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ss(e,t,n){if(n===void 0&&(n=!1),!n&&!Dr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ss(e[r],t[r]);else if(Dr(t))for(var r in t)e[r]=ss(e[r],t[r]);return e}function Gr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var vm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Gr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Ni=new Map,no=new Map,sl=1,mi=function(e){if(Ni.has(e))return Ni.get(e);for(;no.has(sl);)sl++;var t=sl++;return Ni.set(e,t),no.set(t,e),t},gm=function(e,t){Ni.set(e,t),no.set(t,e)},ym="style[".concat(Wn,"][").concat("data-styled-version",'="').concat("6.0.0-rc.3",'"]'),wm=new RegExp("^".concat(Wn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xm=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},km=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(wm);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(gm(p,u),xm(e,p,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function Sm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Pf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var a=s.childNodes,u=a.length;u>=0;u--){var p=a[u];if(p&&p.nodeType===1&&p.hasAttribute(Wn))return p}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Wn,"active"),r.setAttribute("data-styled-version","6.0.0-rc.3");var l=Sm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Cm=function(){function e(t){this.element=Pf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Gr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Em=function(){function e(t){this.element=Pf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),jm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$u=da,_m={isServer:!da,useCSSOMInjection:!nm},ro=function(){function e(t,n,r){t===void 0&&(t=on),n===void 0&&(n={}),this.options=fe(fe({},_m),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&da&&$u&&($u=!1,function(i){for(var o=document.querySelectorAll(ym),l=0,s=o.length;l<s;l++){var a=o[l];a&&a.getAttribute(Wn)!=="active"&&(km(i,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}return e.registerId=function(t){return mi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(fe(fe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jm(i):r?new Cm(i):new Em(i)}(this.options),new vm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(mi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(mi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(mi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(t){for(var n=t.getTag(),r=n.length,i="",o=function(s){var a=function(g){return no.get(g)}(s);if(a===void 0)return"continue";var u=t.names.get(a),p=n.getGroup(s);if(u===void 0||p.length===0)return"continue";var v="".concat(Wn,".g").concat(s,'[id="').concat(a,'"]'),f="";u!==void 0&&u.forEach(function(g){g.length>0&&(f+="".concat(g,","))}),i+="".concat(p).concat(v,'{content:"').concat(f,'"}').concat(`/*!sc*/
`)},l=0;l<r;l++)o(l);return i}(this)},e}(),Lm=/&/g,Pm=/^\s*\/\/.*$/gm;function zf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zf(n.children,t)),n})}function zm(e){var t,n,r,i=e===void 0?on:e,o=i.options,l=o===void 0?on:o,s=i.plugins,a=s===void 0?xf:s,u=function(f,g,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):f},p=a.slice();p.push(function(f){f.type===Eo&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Lm,n).replace(r,u))}),l.prefix&&p.push(em),p.push(J1);var v=function(f,g,x,w){g===void 0&&(g=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var z=f.replace(Pm,""),d=Z1(x||g?"".concat(x," ").concat(g," { ").concat(z," }"):z);l.namespace&&(d=zf(d,l.namespace));var c=[];return Nn(d,q1(p.concat(b1(function(m){return c.push(m)})))),c};return v.hash=a.length?a.reduce(function(f,g){return g.name||Gr(15),Cn(f,g.name)},5381).toString():"",v}var Nm=new ro,as=zm(),Nf=qe.createContext({shouldForwardProp:void 0,styleSheet:Nm,stylis:as});Nf.Consumer;qe.createContext(void 0);function us(){return C.useContext(Nf)}var If=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=as);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){throw Gr(12,String(r.name))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=as),this.name+t.hash},e}(),Im=function(e){return e>="A"&&e<="Z"};function Ou(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Im(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rf=function(e){return e==null||e===!1||e===""},Tf=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Rf(o)&&(Array.isArray(o)&&o.isCss||Hn(o)?r.push("".concat(Ou(i),":"),o,";"):Dr(o)?r.push.apply(r,Fn(Fn(["".concat(i," {")],Tf(o),!1),["}"],!1)):r.push("".concat(Ou(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in tm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rt(e,t,n,r){if(Rf(e))return[];if(pa(e))return[".".concat(e.styledComponentId)];if(Hn(e)){if(!Hn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Rt(i,t,n,r)}var o;return e instanceof If?n?(e.inject(n,r),[e.getName(r)]):[e]:Dr(e)?Tf(e):Array.isArray(e)?e.flatMap(function(l){return Rt(l,t,n,r)}):[e.toString()]}function Mf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Hn(n)&&!pa(n))return!1}return!0}var Rm=Cf("6.0.0-rc.3"),Tm=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Mf(t),this.componentId=n,this.baseHash=Cn(Rm,n),this.baseStyle=r,ro.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Zt(i,this.staticRulesId);else{var o=to(Rt(this.rules,t,n,r)),l=ls(Cn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Zt(i,l),this.staticRulesId=l}else{for(var a=Cn(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var v=this.rules[p];if(typeof v=="string")u+=v;else if(v){var f=to(Rt(v,t,n,r));a=Cn(a,f),u+=f}}if(u){var g=ls(a>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Zt(i,g)}}return i},e}(),$f=qe.createContext(void 0);$f.Consumer;function Of(){return C.useContext($f)}var al={};function Mm(e,t,n){var r,i=pa(e),o=e,l=!ll(e),s=t.componentId,a=s===void 0?function(S,_){var k=typeof S!="string"?"sc":Nu(S);al[k]=(al[k]||0)+1;var N="".concat(k,"-").concat(fa("6.0.0-rc.3"+k+al[k]));return _?"".concat(_,"-").concat(N):N}(t.displayName,t.parentComponentId):s,u=t.displayName,p=u===void 0?function(S){return ll(S)?"styled.".concat(S):"Styled(".concat(sm(S),")")}(e):u,v=(r=t.attrs)!==null&&r!==void 0?r:[],f=t.displayName&&t.componentId?"".concat(Nu(t.displayName),"-").concat(t.componentId):t.componentId||a,g=i&&o.attrs?o.attrs.concat(v).filter(Boolean):v,x=t.shouldForwardProp;if(i&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var z=t.shouldForwardProp;x=function(S,_){return w(S,_)&&z(S,_)}}else x=w}var d=new Tm(n,f,i?o.componentStyle:void 0),c=d.isStatic&&v.length===0;function m(S,_){return function(k,N,F,T){var Ce=k.attrs,Ut=k.componentStyle,Wt=k.defaultProps,Kr=k.foldedComponentIds,zo=k.styledComponentId,Zn=k.target,Xn=Of(),L=us(),R=k.shouldForwardProp||L.shouldForwardProp,I=function(Ie,Ke,No){for(var un,tt=fe(fe({},Ke),{className:void 0,theme:No}),Io=0;Io<Ie.length;Io+=1){var Zr=Hn(un=Ie[Io])?un(tt):un;for(var pt in Zr)tt[pt]=pt==="className"?Zt(tt[pt],Zr[pt]):pt==="style"?fe(fe({},tt[pt]),Zr[pt]):Zr[pt]}return Ke.className&&(tt.className=Zt(tt.className,Ke.className)),tt}(Ce,N,kf(N,Xn,Wt)||on),B=I.as||Zn,Q={};for(var Ee in I)I[Ee]===void 0||Ee[0]==="$"||Ee==="as"||Ee==="theme"||(Ee==="forwardedAs"?Q.as=I.forwardedAs:R&&!R(Ee,B)||(Q[Ee]=I[Ee]));var Ye=function(Ie,Ke,No){var un=us(),tt=Ie.generateAndInjectStyles(Ke?on:No,un.styleSheet,un.stylis);return tt}(Ut,T,I),Ht=Zt(Kr,zo);return Ye&&(Ht+=" "+Ye),I.className&&(Ht+=" "+I.className),Q[ll(B)&&!Sf.has(B)?"class":"className"]=Ht,Q.ref=F,C.createElement(B,Q)}(y,S,_,c)}m.displayName=p;var y=qe.forwardRef(m);return y.attrs=g,y.componentStyle=d,y.displayName=p,y.shouldForwardProp=x,y.foldedComponentIds=i?Zt(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=f,y.target=i?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=i?function(_){for(var k=[],N=1;N<arguments.length;N++)k[N-1]=arguments[N];for(var F=0,T=k;F<T.length;F++)ss(_,T[F],!0);return _}({},o.defaultProps,S):S}}),Object.defineProperty(y,"toString",{value:function(){return".".concat(y.styledComponentId)}}),l&&Lf(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function Au(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Du=function(e){return Object.assign(e,{isCss:!0})};function ma(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Hn(e)||Dr(e)){var r=e;return Du(Rt(Au(xf,Fn([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Rt(i):Du(Rt(Au(i,t)))}function cs(e,t,n){if(n===void 0&&(n=on),!t)throw Gr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,ma.apply(void 0,Fn([i],o,!1)))};return r.attrs=function(i){return cs(e,t,fe(fe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return cs(e,t,fe(fe({},n),i))},r}function Af(e){return cs(Mm,e)}var j=Af;Sf.forEach(function(e){j[e]=Af(e)});var $m=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Mf(t),ro.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(to(Rt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ro.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Om(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ma.apply(void 0,Fn([e],t,!1)),i="sc-global-".concat(fa(JSON.stringify(r))),o=new $m(r,i),l=function(a){var u=us(),p=Of(),v=qe.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&s(v,a,u.styleSheet,p,u.stylis),(qe.useInsertionEffect||qe.useLayoutEffect)(function(){if(!u.styleSheet.server)return s(v,a,u.styleSheet,p,u.stylis),function(){return o.removeStyles(v,u.styleSheet)}},[v,a,u.styleSheet,p,u.stylis]),null};function s(a,u,p,v,f){if(o.isStatic)o.renderStyles(a,rm,p,f);else{var g=fe(fe({},u),{theme:kf(u,v,l.defaultProps)});o.renderStyles(a,g,p,f)}}return qe.memo(l)}function Am(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=to(ma.apply(void 0,Fn([e],t,!1))),i=fa(r);return new If(i,r)}const Fu={mobile:"20rem",tablet:"48rem",laptop:"80rem"};Object.keys(Fu).reduce((e,t)=>(e[t]=(...n)=>`
		@media (min-width: ${Fu[t]}) {
			${n.join("")}
		}
	`,e),{});const Dm=Om`
  :root {
    --font-primary: 'Open Sans', sans-serif;
    --font-color: hsla(0, 100%, 100%, 1);
    --color-primary: hsla(168, 76%, 42%, 1);
    --color-secondary: hsla(211, 30%, 24%, 1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  html {
    height: 100%;
    scrollbar-width: none;

    & body {
      width: 100%;
      min-height: 100vh;
      min-height: 100dvh;
      font-family: var(--font-primary);
      color: var(--font-color);
      background-color: var(--color-primary);
      overflow-x: hidden;

      & a {
        color: var(--font-color);
        text-decoration: none;
      }
    }
  }
`;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fr(){return Fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fr.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));const Bu="popstate";function Fm(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ds("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:io(i)}return Um(t,n,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ha(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bm(){return Math.random().toString(36).substr(2,8)}function Uu(e,t){return{usr:e.state,key:e.key,idx:t}}function ds(e,t,n,r){return n===void 0&&(n=null),Fr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||r||Bm()})}function io(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Um(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Ct.Pop,a=null,u=p();u==null&&(u=0,l.replaceState(Fr({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function v(){s=Ct.Pop;let z=p(),d=z==null?null:z-u;u=z,a&&a({action:s,location:w.location,delta:d})}function f(z,d){s=Ct.Push;let c=ds(w.location,z,d);n&&n(c,z),u=p()+1;let m=Uu(c,u),y=w.createHref(c);try{l.pushState(m,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(y)}o&&a&&a({action:s,location:w.location,delta:1})}function g(z,d){s=Ct.Replace;let c=ds(w.location,z,d);n&&n(c,z),u=p();let m=Uu(c,u),y=w.createHref(c);l.replaceState(m,"",y),o&&a&&a({action:s,location:w.location,delta:0})}function x(z){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof z=="string"?z:io(z);return ee(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let w={get action(){return s},get location(){return e(i,l)},listen(z){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Bu,v),a=z,()=>{i.removeEventListener(Bu,v),a=null}},createHref(z){return t(i,z)},createURL:x,encodeLocation(z){let d=x(z);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:g,go(z){return l.go(z)}};return w}var Wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wu||(Wu={}));function Wm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Kn(t):t,i=va(r.pathname||"/",n);if(i==null)return null;let o=Df(e);Hm(o);let l=null;for(let s=0;l==null&&s<o.length;++s)l=qm(o[s],th(i));return l}function Df(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(ee(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Tt([r,a.relativePath]),p=n.concat(a);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Df(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Xm(u,o.index),routesMeta:p})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of Ff(o.path))i(o,l,a)}),t}function Ff(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Ff(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Hm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vm=/^:\w+$/,Qm=3,Gm=2,Ym=1,Km=10,Zm=-2,Hu=e=>e==="*";function Xm(e,t){let n=e.split("/"),r=n.length;return n.some(Hu)&&(r+=Zm),t&&(r+=Gm),n.filter(i=>!Hu(i)).reduce((i,o)=>i+(Vm.test(o)?Qm:o===""?Ym:Km),r)}function Jm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],a=l===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",p=bm({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},u);if(!p)return null;Object.assign(r,p.params);let v=s.route;o.push({params:r,pathname:Tt([i,p.pathname]),pathnameBase:oh(Tt([i,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(i=Tt([i,p.pathnameBase]))}return o}function bm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=eh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,p,v)=>{if(p==="*"){let f=s[v]||"";l=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[p]=nh(s[v]||"",p),u},{}),pathname:o,pathnameBase:l,pattern:e}}function eh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ha(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function th(e){try{return decodeURI(e)}catch(t){return ha(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nh(e,t){try{return decodeURIComponent(e)}catch(n){return ha(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function va(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Kn(e):e;return{pathname:n?n.startsWith("/")?n:ih(n,t):t,search:lh(r),hash:sh(i)}}function ih(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ul(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Uf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Kn(e):(i=Fr({},e),ee(!i.pathname||!i.pathname.includes("?"),ul("?","pathname","search",i)),ee(!i.pathname||!i.pathname.includes("#"),ul("#","pathname","hash",i)),ee(!i.search||!i.search.includes("#"),ul("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(r||l==null)s=n;else{let v=t.length-1;if(l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),v-=1;i.pathname=f.join("/")}s=v>=0?t[v]:"/"}let a=rh(i,s),u=l&&l!=="/"&&l.endsWith("/"),p=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||p)&&(a.pathname+="/"),a}const Tt=e=>e.join("/").replace(/\/\/+/g,"/"),oh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ah(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wf=["post","put","patch","delete"];new Set(Wf);const uh=["get",...Wf];new Set(uh);/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oo.apply(this,arguments)}const ch="startTransition";var Vu=E0[ch];const ga=C.createContext(null),Hf=C.createContext(null),an=C.createContext(null),Po=C.createContext(null),Bt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Vf=C.createContext(null);function dh(e,t){let{relative:n}=t===void 0?{}:t;Yr()||ee(!1);let{basename:r,navigator:i}=C.useContext(an),{hash:o,pathname:l,search:s}=ya(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Tt([r,l])),i.createHref({pathname:a,search:s,hash:o})}function Yr(){return C.useContext(Po)!=null}function Ot(){return Yr()||ee(!1),C.useContext(Po).location}function Qf(e){C.useContext(an).static||C.useLayoutEffect(e)}function fh(){let{isDataRoute:e}=C.useContext(Bt);return e?Lh():ph()}function ph(){Yr()||ee(!1);let e=C.useContext(ga),{basename:t,navigator:n}=C.useContext(an),{matches:r}=C.useContext(Bt),{pathname:i}=Ot(),o=JSON.stringify(Bf(r).map(a=>a.pathnameBase)),l=C.useRef(!1);return Qf(()=>{l.current=!0}),C.useCallback(function(a,u){if(u===void 0&&(u={}),!l.current)return;if(typeof a=="number"){n.go(a);return}let p=Uf(a,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Tt([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,o,i,e])}const mh=C.createContext(null);function hh(e){let t=C.useContext(Bt).outlet;return t&&C.createElement(mh.Provider,{value:e},t)}function ya(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Bt),{pathname:i}=Ot(),o=JSON.stringify(Bf(r).map(l=>l.pathnameBase));return C.useMemo(()=>Uf(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function vh(e,t){return gh(e,t)}function gh(e,t,n){Yr()||ee(!1);let{navigator:r}=C.useContext(an),{matches:i}=C.useContext(Bt),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let a=Ot(),u;if(t){var p;let w=typeof t=="string"?Kn(t):t;s==="/"||(p=w.pathname)!=null&&p.startsWith(s)||ee(!1),u=w}else u=a;let v=u.pathname||"/",f=s==="/"?v:v.slice(s.length)||"/",g=Wm(e,{pathname:f}),x=Sh(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Tt([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Tt([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&x?C.createElement(Po.Provider,{value:{location:oo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ct.Pop}},x):x}function yh(){let e=_h(),t=ah(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}const wh=C.createElement(yh,null);class xh extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Bt.Provider,{value:this.props.routeContext},C.createElement(Vf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kh(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(ga);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Bt.Provider,{value:t},r)}function Sh(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let s=o.findIndex(a=>a.route.id&&(l==null?void 0:l[a.route.id]));s>=0||ee(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,a,u)=>{let p=a.route.id?l==null?void 0:l[a.route.id]:null,v=null;n&&(v=a.route.errorElement||wh);let f=t.concat(o.slice(0,u+1)),g=()=>{let x;return p?x=v:a.route.Component?x=C.createElement(a.route.Component,null):a.route.element?x=a.route.element:x=s,C.createElement(kh,{match:a,routeContext:{outlet:s,matches:f,isDataRoute:n!=null},children:x})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?C.createElement(xh,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var fs;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(fs||(fs={}));var Br;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Br||(Br={}));function Ch(e){let t=C.useContext(ga);return t||ee(!1),t}function Eh(e){let t=C.useContext(Hf);return t||ee(!1),t}function jh(e){let t=C.useContext(Bt);return t||ee(!1),t}function Gf(e){let t=jh(),n=t.matches[t.matches.length-1];return n.route.id||ee(!1),n.route.id}function _h(){var e;let t=C.useContext(Vf),n=Eh(Br.UseRouteError),r=Gf(Br.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Lh(){let{router:e}=Ch(fs.UseNavigateStable),t=Gf(Br.UseNavigateStable),n=C.useRef(!1);return Qf(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oo({fromRouteId:t},o)))},[e,t])}function Ph(e){return hh(e.context)}function vt(e){ee(!1)}function zh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ct.Pop,navigator:o,static:l=!1}=e;Yr()&&ee(!1);let s=t.replace(/^\/*/,"/"),a=C.useMemo(()=>({basename:s,navigator:o,static:l}),[s,o,l]);typeof r=="string"&&(r=Kn(r));let{pathname:u="/",search:p="",hash:v="",state:f=null,key:g="default"}=r,x=C.useMemo(()=>{let w=va(u,s);return w==null?null:{location:{pathname:w,search:p,hash:v,state:f,key:g},navigationType:i}},[s,u,p,v,f,g,i]);return x==null?null:C.createElement(an.Provider,{value:a},C.createElement(Po.Provider,{children:n,value:x}))}function Nh(e){let{children:t,location:n}=e;return vh(ps(t),n)}var Qu;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Qu||(Qu={}));new Promise(()=>{});function ps(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,ps(r.props.children,o));return}r.type!==vt&&ee(!1),!r.props.index||!r.props.children||ee(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ps(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lo.apply(this,arguments)}function Yf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ih(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rh(e,t){return e.button===0&&(!t||t==="_self")&&!Ih(e)}const Th=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Mh=["aria-current","caseSensitive","className","end","style","to","children"];function $h(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=Fm({window:i,v5Compat:!0}));let l=o.current,[s,a]=C.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=C.useCallback(v=>{u&&Vu?Vu(()=>a(v)):a(v)},[a,u]);return C.useLayoutEffect(()=>l.listen(p),[l,p]),C.createElement(zh,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l})}const Oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dh=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:u,preventScrollReset:p}=t,v=Yf(t,Th),{basename:f}=C.useContext(an),g,x=!1;if(typeof u=="string"&&Ah.test(u)&&(g=u,Oh))try{let c=new URL(window.location.href),m=u.startsWith("//")?new URL(c.protocol+u):new URL(u),y=va(m.pathname,f);m.origin===c.origin&&y!=null?u=y+m.search+m.hash:x=!0}catch{}let w=dh(u,{relative:i}),z=Fh(u,{replace:l,state:s,target:a,preventScrollReset:p,relative:i});function d(c){r&&r(c),c.defaultPrevented||z(c)}return C.createElement("a",lo({},v,{href:g||w,onClick:x||o?r:d,ref:n,target:a}))}),In=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:a,children:u}=t,p=Yf(t,Mh),v=ya(a,{relative:p.relative}),f=Ot(),g=C.useContext(Hf),{navigator:x}=C.useContext(an),w=x.encodeLocation?x.encodeLocation(v).pathname:v.pathname,z=f.pathname,d=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(z=z.toLowerCase(),d=d?d.toLowerCase():null,w=w.toLowerCase());let c=z===w||!l&&z.startsWith(w)&&z.charAt(w.length)==="/",m=d!=null&&(d===w||!l&&d.startsWith(w)&&d.charAt(w.length)==="/"),y=c?r:void 0,S;typeof o=="function"?S=o({isActive:c,isPending:m}):S=[o,c?"active":null,m?"pending":null].filter(Boolean).join(" ");let _=typeof s=="function"?s({isActive:c,isPending:m}):s;return C.createElement(Dh,lo({},p,{"aria-current":y,className:S,ref:n,style:_,to:a}),typeof u=="function"?u({isActive:c,isPending:m}):u)});var Gu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Gu||(Gu={}));var Yu;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yu||(Yu={}));function Fh(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,s=fh(),a=Ot(),u=ya(e,{relative:l});return C.useCallback(p=>{if(Rh(p,n)){p.preventDefault();let v=r!==void 0?r:io(a)===io(u);s(e,{replace:v,state:i,preventScrollReset:o,relative:l})}},[a,s,u,r,i,n,e,o,l])}const Kf=()=>{const[e,t]=C.useState("");return C.useEffect(()=>{const n=()=>{window.scrollY===0?t(""):t("shrink")};return n(),document.addEventListener("scroll",n),()=>{document.removeEventListener("scroll",n)}},[]),e},Bh=({...e})=>h.jsx("svg",{...e,fill:"none",strokeWidth:"15",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 100 100",children:h.jsx("path",{d:"M-10 -10H110V110H-10V-10ZM10 10H90ZM10 50H90ZM10 90H90Z"})}),Uh=j(Bh)`
	display: flex;
	width: clamp(1.563rem, 0.759rem + 3.571vw, 2.188rem);
	stroke: hsla(360, 100%, 100%, 1);

	&:hover {
		stroke: var(--color-primary);
		cursor: pointer;
	}
`,Zf=j.div`
	position: absolute;
	top: ${e=>e.top};
	left: 1.5rem;
	background-color: var(--color-secondary);
	border: 0.1875rem solid hsla(360, 100%, 100%, 1);
	border-radius: 1.5rem;
	padding: 0.5rem;
	padding-right: 1rem;
	transition: top 0.5s ease-in-out;

	${({shrink:e})=>e&&`
    top: 4.125rem;
  `}
`;j(Zf)`
	top: 4.875rem;
`;const Wh=j(In)`
	display: block;
	font-size: clamp(1.25rem, 0.929rem + 1.429vw, 1.5rem);
	font-weight: 500;
	padding: 0.75rem 1rem;
	transition: transform 0.25s ease;

	&:hover {
		transform: scale(1.15) translate(0.5rem);
		color: var(--color-primary);
	}
`,Hh=[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"Work Samples",link:"/work-samples"},{name:"Contact",link:"/contact"}],Vh=()=>{const[e,t]=C.useState(!1),n=Kf(),r=Ot().pathname==="/work-samples",i=()=>{t(!e)};return h.jsxs(h.Fragment,{children:[h.jsx(Uh,{onClick:i}),e&&h.jsx(Zf,{top:r?"4.875rem":"6.25rem",shrink:n?"shrink":"",children:Hh.map((o,l)=>h.jsx(Wh,{to:o.link,onClick:i,children:o.name},l))})]})},Qh=({...e})=>h.jsx("svg",{...e,strokeWidth:"5",viewBox:"0 0 110 110",children:h.jsx("path",{d:"M15 5H95A10 10 0 0 1 105 15V95A10 10 0 0 1 95 105H15A10 10 0 0 1 5 95V15A10 10 0 0 1 15 5ZM30 30A1 1 0 0 1 37 30V80A1 1 0 0 1 30 80V30ZM32.5 27.5V82.5ZM73 30A1 1 0 0 1 80 30V80A1 1 0 0 1 73 80V30ZM77.5 27.5V82.5ZM30 52.5H80ZM30 57.5H80Z"})}),Xf=({...e})=>h.jsx("a",{href:"https://www.linkedin.com/in/josh-hawk-6591a3230/",target:"_blank",rel:"noreferrer",children:h.jsx("svg",{...e,fill:"none",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 110 110",children:h.jsx("path",{d:"M105 30V80A25 25 0 0 1 80 105H30A25 25 0 0 1 5 80V30A25 25 0 0 1 30 5H80A25 25 0 0 1 105 30M30 28A1 1 0 0 1 30 32A1 1 0 0 1 30 28M30 80V45M50 80V65M50 45V65M50 65C50 45 80 45 80 65V80"})})}),Jf=({...e})=>h.jsx("a",{href:"https://github.com/hawkjosh",target:"_blank",rel:"noreferrer",children:h.jsx("svg",{...e,fill:"none",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 110 110",children:h.jsx("path",{d:"M75 105V91A16 16 0 0 0 70 78A31.5 31.5 0 0 0 95 24A22 22 0 0 0 94 5A35 35 0 0 0 75 12A67 67 0 0 0 40 12A35 35 0 0 0 21 5A22 22 0 0 0 20 24A31.5 31.5 0 0 0 45 78A16 16 0 0 0 40 91V105M40 95C25 100 13 95 5 80"})})}),qf=({...e})=>h.jsx("a",{href:"https://codepen.io/hawkjosh",target:"_blank",rel:"noreferrer",children:h.jsx("svg",{...e,fill:"none",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 110 110",children:h.jsx("path",{d:"M105 38V71M5 71V38M55 105V71M55 5V38M55 71L5 38L55 5L105 38L55 71M55 105L5 71L55 38L105 71L55 105"})})}),bf=({...e})=>h.jsx("a",{href:"https://stackoverflow.com/users/19513873/hawkjosh?tab=profile",target:"_blank",rel:"noreferrer",children:h.jsx("svg",{...e,fill:"none",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 110 110",children:h.jsx("path",{d:"M98 73V105H5V73M78 84H25M78 72L25 62M83 59L34 40M93 49L51 21M105 39L72 5"})})}),Gh=Am`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,Yh=j.nav`
	height: ${e=>e.height};
	position: sticky;
	top: ${e=>e.top};
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--color-secondary);
	border-bottom: solid hsla(360, 100%, 100%, 1);
	transition: height 0.5s ease-in-out;

	${({shrink:e})=>e&&`
		height: 5rem;
  `}
`,Kh=j.div`
	height: 100%;
	flex-basis: 20%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1.5rem;

	@media (width >= 640px) {
		display: none;
	}
`,Zh=j.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;

	@media (width >= 1280px) {
		flex-basis: 31.5%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	@media (1024px <= width < 1280px) {
		flex-basis: 32%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	@media (640px <= width < 1024px) {
		flex-basis: 42.5%;
		justify-content: flex-start;
		padding-left: 2.5%;
	}
	@media (width < 640px) {
		flex-basis: 80%;
		flex-direction: row-reverse;
		justify-content: flex-start;
		padding-right: 1.5rem;
	}
`,e0=j(Qh)`
	display: flex;
	fill: var(--color-primary);
	stroke: hsla(0, 100%, 100%, 1);

	&:hover {
		fill: hsla(0, 100%, 100%, 1);
		stroke: var(--color-primary);
		cursor: grab;
		animation: ${Gh} 1.5s linear infinite;
	}
`,Xh=j(e0)`
	transition: width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(4.5rem, 2.833rem + 2.083vw, 5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(4rem, 1.992rem + 3.137vw, 4.5rem);
	}
	@media (640px <= width < 1024px) {
		width: clamp(3.5rem, 2.667rem + 2.083vw, 4rem);
	}
	@media (width < 640px) {
		width: clamp(3.5rem, 2.857rem + 2.857vw, 4rem);
	}

	${({shrink:e})=>e&&`
		@media (width >= 1280px) {
			width: clamp(3rem, 1.333rem + 2.083vw, 3.5rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(2.5rem, 0.5rem + 3.125vw, 3rem);
		}
		@media (640px <= width < 1024px) {
			width: clamp(2rem, 1.167rem + 2.083vw, 2.5rem);
		}
		@media (width < 640px) {
			width: clamp(2rem, 1.357rem + 2.857vw, 2.5rem);
		}
  `}
`,Jh=j(e0)`
	@media (width >= 1280px) {
		width: clamp(3.25rem, 2.417rem + 1.042vw, 3.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(3rem, 2rem + 1.563vw, 3.25rem);
	}
	@media (640px <= width < 1024px) {
		width: clamp(2.75rem, 2.333rem + 1.042vw, 3rem);
	}
	@media (width < 640px) {
		width: clamp(2.5rem, 2.179rem + 1.429vw, 2.75rem);
	}
`,t0=j.div`
	font-weight: 500;
	text-transform: uppercase;

	@media (width < 360px) {
		display: none;
	}
`,qh=j(t0)`
	transition: font-size 0.5s ease-in-out;

	@media (width >= 1280px) {
		font-size: clamp(1.75rem, 0.083rem + 2.083vw, 2.25rem);
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.35rem, -0.25rem + 2.5vw, 1.75rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1.15rem, 0.317rem + 2.083vw, 1.65rem);
	}
	@media (width < 640px) {
		font-size: clamp(1.15rem, 0.507rem + 2.857vw, 1.65rem);
	}

	${({shrink:e})=>e&&`
		@media (width >= 1280px) {
			font-size: clamp(1.5rem, 0.667rem + 1.042vw, 1.75rem);
		}
		@media (1024px <= width < 1280px) {
			font-size: clamp(1.15rem, -0.05rem + 1.875vw, 1.45rem);
		}
		@media (640px <= width < 1024px) {
			font-size: clamp(0.95rem, 0.617rem + 0.833vw, 1.15rem);
		}
		@media (width < 640px) {
			font-size: clamp(0.95rem, 0.693rem + 1.143vw, 1.15rem);
		}
  `}
`,bh=j(t0)`
	@media (width >= 1280px) {
		font-size: clamp(1.75rem, 0.917rem + 1.042vw, 2rem);
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.5rem, 0.5rem + 1.563vw, 1.75rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1.25rem, 0.833rem + 1.042vw, 1.5rem);
	}
	@media (width < 640px) {
		font-size: clamp(1rem, 0.679rem + 1.429vw, 1.25rem);
	}
`,Ku=j.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-left: solid hsla(360, 100%, 100%, 1);

	@media (width >= 1280px) {
		flex-basis: 43.5%;
		padding: 0rem 2.5%;
	}
	@media (1024px <= width < 1280px) {
		flex-basis: 43%;
		padding: 0rem 2.5%;
	}
	@media (640px <= width < 1024px) {
		flex-basis: 57.5%;
		justify-content: flex-end;
		padding-right: 2.5%;
		gap: 1.5rem;
	}
	@media (width < 640px) {
		display: none;
	}
`,n0=j(In)`
	text-transform: uppercase;

	&:hover {
		color: var(--color-primary);
		transform: scale(1.25);
	}
`,e2=j(n0)`
	transition: transform 0.25s ease-in-out, font-size 0.5s ease-in-out;

	@media (width >= 1280px) {
		font-size: clamp(1.25rem, 0.417rem + 1.042vw, 1.5rem);
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1rem, 0rem + 1.563vw, 1.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(0.85rem, 0.183rem + 1.667vw, 1.25rem);
	}

	${({shrink:e})=>e&&`
		@media (width >= 1280px) {
			font-size: clamp(1rem, 0.167rem + 1.042vw, 1.25rem);
		}
		@media (1024px <= width < 1280px) {
			font-size: clamp(0.85rem, -0.15rem + 1.563vw, 1.1rem);
		}
		@media (640px <= width < 1024px) {
			font-size: clamp(0.75rem, 0.333rem + 1.042vw, 1rem);
		}
  `}
`,t2=j(n0)`
	transition: transform 0.25s ease-in-out;

	@media (width >= 1280px) {
		font-size: clamp(1.25rem, 0.583rem + 0.833vw, 1.45rem);
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.05rem, 0.25rem + 1.25vw, 1.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(0.85rem, 0.517rem + 0.833vw, 1.05rem);
	}
`,n2=j.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-left: solid hsla(360, 100%, 100%, 1);
	padding: 0rem 2.5%;

	@media (width >= 1024px) {
		flex-basis: 25%;
	}
	@media (width < 1024px) {
		display: none;
	}
`,r2=j(Xf)`
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(1.65rem, 0.45rem + 1.875vw, 1.95rem);
	}

	&:hover {
		transform: scale(1.25);
		stroke: var(--color-primary);
		stroke-width: 8;
	}

	${({shrink:e})=>e&&`
		@media (width >= 1280px) {
			width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(1.45rem, 0.25rem + 1.875vw, 1.75rem);
		}
  `}
`,i2=j(Jf)`
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(1.65rem, 0.45rem + 1.875vw, 1.95rem);
	}

	&:hover {
		transform: scale(1.25);
		stroke: var(--color-primary);
		stroke-width: 8;
	}

	${({shrink:e})=>e&&`
		@media (width >= 1280px) {
			width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(1.45rem, 0.25rem + 1.875vw, 1.75rem);
		}
  `}
`,o2=j(qf)`
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(1.65rem, 0.45rem + 1.875vw, 1.95rem);
	}

	&:hover {
		transform: scale(1.25);
		stroke: var(--color-primary);
		stroke-width: 8;
	}

	${({shrink:e})=>e&&`
		@media (width >= 1280px) {
			width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(1.45rem, 0.25rem + 1.875vw, 1.75rem);
		}
  `}
`,l2=j(bf)`
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease, width 0.5s ease-in-out;

	@media (width >= 1280px) {
		width: clamp(2rem, 0.333rem + 2.083vw, 2.5rem);
	}
	@media (1024px <= width < 1280px) {
		width: clamp(1.65rem, 0.45rem + 1.875vw, 1.95rem);
	}

	&:hover {
		transform: scale(1.25);
		stroke: var(--color-primary);
		stroke-width: 8;
	}

	${({shrink:e})=>e&&`
		@media (width >= 1280px) {
			width: clamp(1.5rem, -0.167rem + 2.083vw, 2rem);
		}
		@media (1024px <= width < 1280px) {
			width: clamp(1.45rem, 0.25rem + 1.875vw, 1.75rem);
		}
  `}
`,Zu=[{title:"Home",url:"/"},{title:"About",url:"/about"},{title:"Work Samples",url:"/work-samples"},{title:"Contact",url:"/contact"}],s2=()=>{const e=Kf(),t=Ot().pathname==="/work-samples"||Ot().pathname==="/contact";return h.jsxs(Yh,{height:t?"6rem":"8rem",top:t?"0":"-0.0625rem",shrink:e?"shrink":"",children:[h.jsx(Kh,{children:h.jsx(Vh,{})}),h.jsx(Zh,{children:t?h.jsxs(h.Fragment,{children:[h.jsx(Jh,{shrink:e?"shrink":""}),h.jsx(bh,{shrink:e?"shrink":"",children:"The Hawk's Nest"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Xh,{shrink:e?"shrink":""}),h.jsx(qh,{shrink:e?"shrink":"",children:"The Hawk's Nest"})]})}),t?h.jsx(Ku,{children:Zu.map((n,r)=>h.jsx(t2,{to:n.url,shrink:e?"shrink":"",children:n.title},r))}):h.jsx(Ku,{children:Zu.map((n,r)=>h.jsx(e2,{to:n.url,shrink:e?"shrink":"",children:n.title},r))}),h.jsxs(n2,{children:[h.jsx(r2,{shrink:e?"shrink":""}),h.jsx(i2,{shrink:e?"shrink":""}),h.jsx(o2,{shrink:e?"shrink":""}),h.jsx(l2,{shrink:e?"shrink":""})]})]})},r0=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(!1),[l,s]=C.useState(!1),[a,u]=C.useState(!1),[p,v]=C.useState(!1);return C.useEffect(()=>{const f=()=>{t(window.innerWidth<640)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),C.useEffect(()=>{const f=()=>{r(window.innerWidth>=640&&window.innerWidth<1280)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),C.useEffect(()=>{const f=()=>{o(window.innerWidth>=1280)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),C.useEffect(()=>{const f=()=>{s(window.innerWidth>=1024)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),C.useEffect(()=>{const f=()=>{u(window.innerHeight<500)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),C.useEffect(()=>{const f=()=>{v(window.innerWidth<window.innerHeight)};return f(),window.addEventListener("orientationchange",f),()=>window.removeEventListener("orientationchange",f)},[]),{isMobile:e,isTablet:n,isLaptop:i,isWideScreen:l,isShortScreen:a,isPortrait:p}},a2=({...e})=>h.jsx("svg",{...e,strokeWidth:"50",viewBox:"0 0 700 700",preserveAspectRatio:"xMidYMid meet",children:h.jsx("path",{transform:"translate(0,700) scale(0.1,-0.1)",d:"M1253 6562c-42 -144 -54 -277 -34 -379 5 -25 5 -43 -1 -43 -11 0 -69 126 -123 265 -43 110 -69 155 -91 155 -27 0 -52 -38 -64 -97 -19 -90 -3 -197 65 -443 7 -25 7 -25 -22 5 -15 17 -86 98 -157 180 -141 165 -165 186 -190 166 -9 -8 -16 -21 -16 -30 1 -43 95 -284 149 -383 18 -32 28 -58 23 -58 -4 0 -62 43 -128 95 -119 96 -149 113 -180 101 -13 -5 -15 -15 -11 -51 9 -60 53 -145 126 -243 34 -44 61 -83 61 -86 0 -3 -21 7 -47 23 -73 44 -118 57 -137 42 -42 -35 5 -133 114 -243 43 -43 74 -78 68 -78 -5 0 -48 11 -94 26 -65 19 -88 23 -104 14 -61 -33 34 -146 210 -250 50 -29 88 -55 87 -57 -2 -2 -62 8 -133 23 -150 31 -171 32 -191 11 -50 -49 139 -212 310 -267 21 -6 35 -15 32 -18 -4 -4 -57 -7 -119 -7 -117 0 -146 -9 -146 -44 0 -42 124 -117 245 -149 36 -9 65 -20 65 -24 0 -3 -24 -14 -53 -22 -95 -28 -115 -78 -47 -121 24 -15 40 -33 40 -45 0 -10 4 -22 10 -25 5 -3 14 -24 20 -46 10 -34 8 -43 -10 -68 -11 -16 -20 -34 -20 -40 0 -23 32 -60 60 -70 29 -10 29 -10 13 -42 -16 -32 -16 -33 10 -55 16 -14 27 -33 27 -48 0 -28 24 -48 80 -67 19 -7 51 -24 70 -38 19 -14 37 -27 39 -28 3 -2 -10 -16 -29 -31 -29 -24 -31 -31 -22 -49 7 -12 25 -24 42 -27 16 -3 44 -9 60 -12 27 -5 43 -24 21 -24 -6 0 -22 -16 -38 -36 l-27 -36 22 -19c13 -10 43 -21 67 -25 43 -6 44 -7 30 -27 -38 -54 2 -97 90 -97 49 0 54 -8 29 -45 -9 -14 -13 -32 -9 -45 8 -24 60 -60 88 -60 9 0 17 -7 17 -15 0 -44 43 -85 90 -85 25 0 25 -18 0 -50 -11 -14 -20 -28 -20 -32 0 -5 23 -8 50 -8 l50 0 -6 -41c-6 -35 -4 -41 15 -46 16 -4 21 -13 21 -38 0 -38 21 -60 52 -52 15 4 32 -3 55 -23 19 -17 42 -30 52 -30 10 0 35 -15 54 -34 20 -19 54 -40 74 -46 103 -33 47 -38 -152 -14 -195 23 -377 69 -569 142 -67 26 -69 26 -83 7 -14 -20 -13 -82 2 -146 l7 -26 -86 -5c-48 -2 -92 -10 -98 -16 -20 -20 10 -92 58 -141 42 -42 48 -61 19 -61 -26 0 -86 -42 -100 -71 -24 -45 -19 -91 16 -139 17 -23 27 -46 22 -50 -4 -4 -25 -13 -47 -20 -52 -17 -112 -78 -118 -121 -11 -72 30 -111 126 -119 l61 -5 -21 -20c-36 -33 -74 -96 -74 -121 0 -13 10 -34 21 -45 20 -20 29 -21 95 -16 l73 7 -6 -49c-5 -43 -3 -50 18 -65 13 -9 40 -16 59 -16 l36 0 0 -50c0 -69 10 -76 78 -54 31 10 57 16 58 13 2 -2 11 -17 20 -34 26 -46 106 -86 185 -93 60 -5 67 -7 82 -35 28 -51 62 -87 104 -108 l40 -21 65 73c170 192 376 370 557 479 154 93 175 97 276 42 41 -22 101 -50 133 -61 33 -11 71 -32 85 -45 35 -33 92 -66 113 -66 11 0 27 -19 42 -49 25 -49 70 -95 104 -105 10 -4 24 -22 31 -41 24 -67 86 -120 161 -138 15 -4 33 -21 44 -42 24 -44 60 -64 126 -72 45 -5 50 -9 60 -39 13 -38 59 -81 98 -91 15 -3 50 -30 77 -60 44 -46 56 -53 89 -53 20 0 47 5 58 11 19 10 26 6 62 -35 51 -57 78 -67 140 -54 55 11 67 5 97 -54 23 -45 60 -71 101 -71 24 0 35 -8 54 -38 26 -42 67 -59 93 -40 34 24 44 24 63 0 123 -155 176 -202 203 -179 8 7 15 21 15 32 0 17 6 15 49 -16 67 -50 144 -83 217 -95 34 -5 81 -19 105 -31 57 -30 261 -38 351 -15 86 22 100 20 223 -29 60 -24 125 -47 143 -51 53 -11 52 16 -4 87 -32 41 -42 59 -29 54 176 -73 355 -105 430 -76 36 14 24 28 -63 76 -92 51 -275 174 -269 181 3 3 43 -9 89 -26 221 -82 508 -116 603 -70 34 16 36 33 3 37 -40 6 -307 102 -402 144 -144 64 -141 70 21 38 250 -48 595 -68 639 -36 19 14 19 15 0 29 -10 7 -71 29 -135 47 -251 72 -555 191 -698 272 -174 100 -323 205 -718 504 -140 106 -267 189 -441 289 -229 132 -396 237 -534 335 -63 45 -119 86 -125 91 -14 14 13 29 50 29 17 0 64 9 105 20 41 11 101 20 132 20 74 0 158 -18 164 -36 15 -50 13 -49 50 -13 44 45 54 99 30 162 -20 51 -44 79 -122 142 -32 26 -71 62 -85 79 -56 66 -159 98 -584 180 -288 56 -407 118 -559 292 -118 134 -181 241 -471 799 -130 252 -195 364 -248 434 -39 51 -180 204 -312 340 -133 135 -273 282 -312 326 -92 106 -213 270 -258 350 -20 36 -40 65 -45 65 -4 0 -14 -10 -22 -22 -14 -20 -16 -18 -52 58 -86 181 -174 414 -222 591 -35 129 -63 273 -57 290 3 7 -1 13 -8 13 -9 0 -23 -30 -36 -78z"})}),u2=j.footer`
	height: 4rem;
	position: relative;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: clamp(2.5rem, 1.145rem + 6.024vw, 5rem);
	background-color: var(--color-secondary);
	border-top: solid hsla(360, 100%, 100%, 1);
`,c2=j.div`
	font-size: clamp(1.5rem, 0.7rem + 1.25vw, 2rem);
	font-weight: 300;
`,d2=j(a2)`
	display: flex;
	width: clamp(3.25rem, 2.45rem + 1.25vw, 3.75rem);
	fill: hsla(360, 100%, 100%, 1);
	stroke: var(--color-primary);
	transition: transform 0.25s ease;

	&:hover {
		transform: scale(1.0625);
		fill: var(--color-primary);
		stroke: hsla(360, 100%, 100%, 1);
		cursor: grab;
	}
`,f2=j(Xf)`
	width: clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem);
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease;

	&:hover {
		transform: scale(1.125);
		stroke: var(--color-primary);
		stroke-width: 7.5;
	}
`,p2=j(Jf)`
	width: clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem);
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease;

	&:hover {
		transform: scale(1.125);
		stroke: var(--color-primary);
		stroke-width: 7.5;
	}
`,m2=j(qf)`
	width: clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem);
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease;

	&:hover {
		transform: scale(1.125);
		stroke: var(--color-primary);
		stroke-width: 7.5;
	}
`,h2=j(bf)`
	width: clamp(1.75rem, 1.343rem + 1.807vw, 2.5rem);
	display: flex;
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease;

	&:hover {
		transform: scale(1.125);
		stroke: var(--color-primary);
		stroke-width: 7.5;
	}
`,v2=()=>{const{isWideScreen:e}=r0();return h.jsx(u2,{children:e?h.jsxs(h.Fragment,{children:[h.jsxs(c2,{children:["© ",new Date().getFullYear()," Joshua Wilde Hawk"]}),h.jsx(d2,{})]}):h.jsxs(h.Fragment,{children:[h.jsx(f2,{}),h.jsx(p2,{}),h.jsx(m2,{}),h.jsx(h2,{})]})})},g2=j.section`
	min-height: 100vh;
	min-height: 100dvh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`,y2=()=>h.jsxs(g2,{children:[h.jsx(s2,{}),h.jsx(Ph,{}),h.jsx(v2,{})]}),w2="/assets/avatar-8d645757.svg",x2=({...e})=>h.jsxs("svg",{...e,viewBox:"0 0 925 550",children:[h.jsx("path",{d:"M199 69C199 34 228 5 263 5H647C682 5 711 34 711 69V257H650V66H260V257H199V69ZM140 298C140 288 149 279 159 279H751C761 279 770 288 770 298C770 321 736 355 693 355H217C174 355 140 321 140 298ZM416 141L385 172L416 202C425 212 425 228 416 237C407 246 391 246 382 237L334 189C325 180 325 164 334 155L382 107C391 98 407 98 416 107C425 116 425 132 416 141ZM528 107L576 155C585 164 585 180 576 189L528 237C519 246 503 246 494 237C485 228 485 212 494 203L525 172L494 141C485 132 485 116 494 107C503 98 519 98 528 107Z"}),h.jsx("text",{stroke:"none",fontSize:"95px",x:"10",y:"515",children:"Emerging Developer"})]}),k2=({...e})=>h.jsxs("svg",{...e,viewBox:"0 0 925 550",children:[h.jsx("path",{d:"M183 348L336 281L415 230L428 239L418 305L339 333A20 20 0 0 0 358 372L360 372L459 339A35 35 0 0 0 478 314L485 265L522 237A30 30 0 0 1 492 193L522 157L501 196A20 20 0 0 0 514 222L607 245A10 10 0 0 0 620 209L557 194L576 159L571 184L591 189A60 60 0 0 0 626 141L645 133A65 65 0 0 1 588 111L242 290A50 50 0 0 1 203 289L161 308A20 20 0 0 0 183 348ZM159 165L501 87C564 72 558 96 576 100L236 276A35 35 0 0 1 201 268L147 190A20 20 0 0 1 159 165ZM584 62A45 45 0 0 1 698 62A45 45 0 0 1 584 62ZM707 41L739 18A20 20 0 0 1 768 51L701 99A60 60 0 0 0 707 41Z"}),h.jsx("text",{stroke:"none",fontSize:"95px",x:"220",y:"515",children:"Super Dad"})]}),S2=({...e})=>h.jsxs("svg",{...e,viewBox:"0 0 925 550",children:[h.jsx("path",{d:"M140 15A10 10 0 0 1 150 5H250A10 10 0 0 1 260 15V225A25 25 0 0 0 285 250H380A25 25 0 0 0 400 230V155A25 25 0 0 0 380 135H275C265 100 310 100 315 70C320 35 355 35 360 20C365 10 365 5 375 5H495V250L400 355H270A135 130 0 0 1 140 225V15ZM505 5V345A10 10 0 0 0 515 355H600A10 10 0 0 0 610 345V155A25 25 0 0 1 625 135H660C670 135 670 125 675 115C690 85 715 105 725 75C740 40 770 60 770 5H505Z"}),h.jsx("text",{stroke:"none",fontSize:"95px",x:"185",y:"515",children:"Vol For Life"})]}),C2=j.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1.5rem;
`,E2=j.img`
	width: clamp(18.75rem, 12.711rem + 26.84vw, 40.625rem);
`,j2=j.div`
	width: 100%;
`,_2=j.hr`
	height: 0.15rem;
	background-color: hsla(360, 100%, 100%, 1);
	border-style: none;
	margin: 4rem 10%;

	@media (width < 640px) {
		margin: 4rem 17.5%;
	}
`,L2=j.div`
	width: 90%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	@media (width < 640px) {
		width: 100%;
		flex-direction: column;
		gap: 5rem;
	}
`,P2=j(x2)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);

	@media (width < 640px) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}

	& text {
		fill: hsla(360, 100%, 100%, 1);
	}

	&:hover {
		fill: hsla(360, 100%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 15;
		cursor: grab;
	}
`,z2=j(k2)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);

	@media (width < 640px) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}

	& text {
		fill: hsla(360, 100%, 100%, 1);
	}

	&:hover {
		fill: hsla(240, 100%, 50%, 1);
		stroke: hsla(0, 100%, 50%, 1);
		stroke-width: 8;
		cursor: grab;
	}
`,N2=j(S2)`
	width: clamp(9.375rem, 3.516rem + 14.648vw, 18.75rem);
	fill: var(--color-secondary);

	@media (width < 640px) {
		width: clamp(9.375rem, 5.357rem + 17.857vw, 12.5rem);
	}

	& text {
		fill: hsla(360, 100%, 100%, 1);
	}

	&:hover {
		fill: hsla(31, 100%, 48%, 1);
		stroke: hsla(360, 100%, 100%, 1);
		stroke-width: 8;
		cursor: grab;
	}
`,I2=()=>h.jsxs(C2,{children:[h.jsx(E2,{src:w2,alt:"My Avatar"}),h.jsx(j2,{children:h.jsx(_2,{})}),h.jsxs(L2,{children:[h.jsx(P2,{}),h.jsx(z2,{}),h.jsx(N2,{})]})]}),R2="/assets/profile-5367050c.png",i0=({...e})=>h.jsx("svg",{...e,viewBox:"0 0 32 32",children:h.jsx("path",{d:"M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"})}),T2=j.div`
	width: 100%;
	height: 100vh;
	height: 100dvh;
	background-color: hsla(0, 0%, 78%, 0.5);
	position: fixed;
	top: 0;
	left: 0;
`,M2=j.div`
	position: absolute;
	height: 80%;
	top: 50%;
	transform: translateY(-50%);
	border: 0.3125rem solid var(--color-secondary);
	border-radius: 1rem;
	background-color: hsla(360, 100%, 100%, 1);
	box-shadow: 0 0.3125rem 1.875rem hsla(0, 0%, 0%, 0.35);
	padding: 0.5rem 1.25rem 1.75rem;
	overflow-y: auto;
	scrollbar-width: none;

	@media (width >= 1280px) {
		width: 70%;
		left: 15%;
	}
	@media (960px <= width < 1280px) {
		width: 75%;
		left: 12.5%;
	}
	@media (640px <= width < 960px) {
		width: 80%;
		left: 10%;

		@media (orientation: landscape) {
			width: 90%;
			left: 5%;
		}
	}
	@media (width < 640px) {
		width: 85%;
		left: 7.5%;
	}
`,$2=j.div`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
	width: 5%;
	min-width: 1.75rem;
	max-width: 2.5rem;
`,O2=j(i0)`
	fill: var(--color-secondary);

	&:hover {
		fill: hsla(360, 100%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 3;
		cursor: pointer;
	}
`,A2=j.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	row-gap: clamp(2.5rem, 2rem + 1.25vw, 3rem);
	margin: 2.5rem 5% 0;

	@media (width >= 1280px) {
		column-gap: 2%;
	}
	@media (960px <= width < 1280px) {
		column-gap: calc(10% / 3);
	}
	@media (640px <= width < 960px) {
		column-gap: 2%;
	}
	@media (width < 640px) {
		column-gap: calc(10% / 3);
	}
`,D2=j.img`
	aspect-ratio: 3/2;
	object-fit: contain;
	transition: transform 0.25s ease-in-out;

	@media (width >= 1280px) {
		width: calc(80% / 6);
		max-width: 8.625rem;
	}
	@media (960px <= width < 1280px) {
		width: calc(80% / 4);
	}
	@media (640px <= width < 960px) {
		width: calc(80% / 4);

		@media (orientation: landscape) {
			width: calc(80% / 6);
		}
	}
	@media (width < 640px) {
		width: calc(80% / 4);
		min-width: 3rem;
	}

	&:hover {
		transform: scale(1.25);
		cursor: pointer;
	}
`,F2="/assets/apollo-c47b7bdc.svg",B2="/assets/babel-7ce05177.svg",U2="/assets/bootstrap-33b180f0.svg",W2="/assets/codepen-13736bfb.svg",H2="/assets/css3-3974d71d.svg",V2="/assets/eslint-e695578e.svg",Q2="/assets/git-2e4dd778.svg",G2="/assets/github-59164a72.svg",Y2="/assets/gitlab-5e851026.svg",K2="/assets/graphql-4507c69e.svg",Z2="/assets/handlebars-d1c03e79.svg",X2="/assets/heroku-b86ac743.svg",J2="/assets/html5-4c227dbb.svg",q2="/assets/javascript-6432a78f.svg",b2="/assets/jest-901cef0e.svg",ev="/assets/jquery-796abb5d.svg",tv="/assets/json-253df07c.svg",nv="/assets/linkedin-1e80210e.svg",rv="/assets/material-39466bb6.svg",iv="/assets/momentjs-eb2e7c15.svg",ov="/assets/mongodb-e7d251ac.svg",lv="/assets/mysql-5d3088a9.svg",sv="/assets/netlify-747e4931.svg",av="/assets/nodejs-55cebc03.svg",uv="/assets/nodemon-46aaf18d.svg",cv="/assets/npm-2e9a71ef.svg",dv="/assets/react-b1e400b7.svg",fv="/assets/redux-112309a2.svg",pv="/assets/sequelize-fccc2d9e.svg",mv="/assets/slack-749fa6fa.svg",hv="/assets/stackoverflow-cbf7f135.svg",vv="/assets/svg-13dd63a5.svg",gv="/assets/tailwind-88c87982.svg",yv="/assets/vite-b5e4326d.svg",wv="/assets/vscode-c3dbb3ab.svg",xv="/assets/webpack-33867cc5.svg",kv=[{name:"Apollo Icon",image:F2},{name:"Babel Icon",image:B2},{name:"Bootstrap Icon",image:U2},{name:"Codepen Icon",image:W2},{name:"CSS3 Icon",image:H2},{name:"ESLint Icon",image:V2},{name:"Git Icon",image:Q2},{name:"GitHub Icon",image:G2},{name:"GitLab Icon",image:Y2},{name:"GraphQL Icon",image:K2},{name:"Handlebars Icon",image:Z2},{name:"Heroku Icon",image:X2},{name:"HTML5 Icon",image:J2},{name:"JavaScript Icon",image:q2},{name:"Jest Icon",image:b2},{name:"JQuery Icon",image:ev},{name:"JSON Icon",image:tv},{name:"Linkedin Icon",image:nv},{name:"Material Icon",image:rv},{name:"MomentJS Icon",image:iv},{name:"MongoDB Icon",image:ov},{name:"MySQL Icon",image:lv},{name:"Netlify Icon",image:sv},{name:"NodeJS Icon",image:av},{name:"Nodemon Icon",image:uv},{name:"NPM Icon",image:cv},{name:"ReactJS Icon",image:dv},{name:"Redux Icon",image:fv},{name:"Sequelize Icon",image:pv},{name:"Slack Icon",image:mv},{name:"Stack Overflow Icon",image:hv},{name:"SVG Icon",image:vv},{name:"Tailwind Icon",image:gv},{name:"Vite Icon",image:yv},{name:"VSCode Icon",image:wv},{name:"WebPack Icon",image:xv}],Sv=({setShowToolbox:e})=>h.jsx(T2,{children:h.jsxs(M2,{children:[h.jsx($2,{children:h.jsx(O2,{onClick:()=>{e(!1)}})}),h.jsx(A2,{children:kv.map((t,n)=>h.jsx(D2,{src:t.image,alt:t.name},n))})]})}),Cv=j.div`
	width: 100%;
	height: 100vh;
	height: 100dvh;
	background-color: hsla(0, 0%, 78%, 0.5);
	position: fixed;
	top: 0;
	left: 0;
`,Ev=j.div`
	position: absolute;
	width: clamp(23.125rem, 3.857rem + 79.048vw, 75rem);
	height: calc(100vh - 8.5rem);
	height: calc(100dvh - 8.5rem);
	top: 4rem;
	left: 50%;
	transform: translateX(-50%);
	border: 0.3125rem solid var(--color-secondary);
	border-radius: 1rem;
	background-color: white;
	box-shadow: 0px 5px 30px hsla(0, 0%, 0%, 0.35);
	padding: 0.5rem 0.25rem 1.5rem;
	overflow-y: auto;
	scrollbar-width: none;
`,jv=j.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	margin: 2.5rem 0.5rem 0;
`,_v=j.img`
	width: clamp(21rem, 5.029rem + 65.524vw, 64rem);
	border: 0.03125rem solid hsla(0, 0%, 83%, 1);
	box-shadow: 0 0.3125rem 1.875rem hsla(0, 0%, 0%, 0.35);
`,Lv=j.button`
	font-size: 1.125rem;
	text-transform: uppercase;
	color: hsla(360, 100%, 100%, 1);
	background-color: var(--color-secondary);
	border: 0.25rem solid transparent;
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	transition: all 0.25s ease-in-out;

	&:hover {
		color: var(--color-secondary);
		background-color: var(--color-primary);
		border-color: var(--color-secondary);
		cursor: pointer;
	}
`,Pv=j.div`
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
  width: 5%;
	min-width: 1.75rem;
	max-width: 2.5rem;
`,zv=j(i0)`
	fill: var(--color-secondary);

	&:hover {
		fill: hsla(360, 100%, 100%, 1);
		stroke: var(--color-secondary);
		stroke-width: 3;
		cursor: pointer;
	}
`,Nv="/assets/resume-b26a4945.png",Iv=({setShowResume:e})=>{const t=()=>{window.open("https://1drv.ms/b/s!AjbK_Cd8W85etY8YbTzNuiafBgluAg?e=gtMTkI","_blank"),e(!1)};return h.jsx(Cv,{children:h.jsxs(Ev,{children:[h.jsxs(jv,{children:[h.jsx(_v,{src:Nv,alt:"My Resume"}),h.jsx(Lv,{onClick:t,children:"Download"})]}),h.jsx(Pv,{children:h.jsx(zv,{onClick:()=>{e(!1)}})})]})})},Rv=({...e})=>h.jsxs("svg",{fill:"currentColor",stroke:"currentColor",viewBox:"-7 -7 105 33",...e,children:[h.jsx("path",{stroke:"transparent",d:"M3.135 6.89c.933-.725 1.707-.225 2.74.971c.116.135.272-.023.361-.1c.088-.078 1.451-1.305 1.518-1.361c.066-.059.146-.169.041-.292a36.238 36.238 0 0 1-.743-.951c-1.808-2.365 4.946-3.969 3.909-3.994c-.528-.014-2.646-.039-2.963-.004c-1.283.135-2.894 1.334-3.705 1.893c-1.061.726-1.457 1.152-1.522 1.211c-.3.262-.048.867-.592 1.344c-.575.503-.934.122-1.267.414c-.165.146-.627.492-.759.607c-.133.117-.157.314-.021.471c0 0 1.264 1.396 1.37 1.52c.105.122.391.228.567.071c.177-.156.632-.553.708-.623c.078-.066-.05-.861.358-1.177zm5.708.517c-.12-.139-.269-.143-.397-.029L7.012 8.63a.289.289 0 0 0-.027.4l8.294 9.439c.194.223.53.246.751.053l.97-.813a.54.54 0 0 0 .052-.758L8.843 7.407zM19.902 3.39c-.074-.494-.33-.391-.463-.182c-.133.211-.721 1.102-.963 1.506c-.24.4-.832 1.191-1.934.41c-1.148-.811-.749-1.377-.549-1.758c.201-.383.818-1.457.907-1.59c.089-.135-.015-.527-.371-.363c-.357.164-2.523 1.025-2.823 2.26c-.307 1.256.257 2.379-.85 3.494l-1.343 1.4l1.349 1.566l1.654-1.57c.394-.396 1.236-.781 1.998-.607c1.633.369 2.524-.244 3.061-1.258c.482-.906.402-2.814.327-3.308zM2.739 17.053a.538.538 0 0 0 0 .758l.951.93c.208.209.538.121.746-.088l4.907-4.824l-1.503-1.714l-5.101 4.938z"}),h.jsx("text",{stroke:"transparent",fontSize:"12px",x:"25",y:"13.75",children:"My Toolbox"}),h.jsx("rect",{fill:"transparent",width:"100",height:"29",x:"-4.5",y:"-5",rx:"7.5",ry:"7.5"})]}),Tv=({...e})=>h.jsxs("svg",{fill:"currentColor",stroke:"currentColor",viewBox:"-7 -7 105 33",...e,children:[h.jsx("path",{fill:"transparent",d:"M2 19v-18h12l5 5v13h-17zM14 1v5h5M5 6h6M5 10.5h11M5 15h11"}),h.jsx("text",{stroke:"transparent",fontSize:"12px",x:"25",y:"13.75",children:"My Resume"}),h.jsx("rect",{fill:"transparent",width:"100",height:"29",x:"-4.5",y:"-5",rx:"7.5",ry:"7.5"})]}),Mv=j.div`
	max-width: 90rem;
	margin: 0 auto;
	padding: 2rem;
	padding-bottom: 4rem;

	@media (width < 640px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
`,$v=j.img`
	object-fit: cover;
	border: 0.25rem solid hsla(360, 100%, 100%, 1);
	border-radius: 50%;
	background-color: var(--color-secondary);
	box-shadow: -0.375rem 0.375rem 0.5rem 0.25rem hsla(0, 0%, 0%, 0.4);
	padding: 0.5rem;
	float: right;
	shape-outside: ellipse(50% 50% at 50% 50%);
	margin-left: clamp(2rem, 1.5rem + 1.25vw, 2.5rem);
	margin-bottom: 1rem;

	@media (width >= 1280px) {
		width: 23rem;
	}
	@media (960px <= width < 1280px) {
		width: clamp(20rem, 11rem + 15vw, 23rem);
	}
	@media (640px <= width < 960px) {
		width: clamp(18.5rem, 15.5rem + 7.5vw, 20rem);
	}
	@media (width < 640px) {
		width: clamp(16rem, 12.1rem + 16vw, 18.5rem);
		float: unset;
		shape-outside: unset;
		margin-left: 0;
		margin-bottom: 0;
	}
`,Ov=j.div`
	@media (width >= 1280px) {
		margin-bottom: 2.5rem;
	}
	@media (960px <= width < 1280px) {
		margin-bottom: clamp(2.25rem, 1.5rem + 1.25vw, 2.5rem);
	}
	@media (640px <= width < 960px) {
		margin-bottom: clamp(2rem, 1.5rem + 1.25vw, 2.25rem);
	}
	@media (width < 640px) {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}
`,Xu=j.p`
	font-weight: 200;
	text-align: justify;
	text-justify: inter-character;

	@media (width >= 1280px) {
		font-size: 1.5rem;
		line-height: 1.75;
	}
	@media (960px <= width < 1280px) {
		font-size: clamp(1.375rem, 1rem + 0.625vw, 1.5rem);
		line-height: 1.625;
	}
	@media (640px <= width < 960px) {
		font-size: clamp(1.25rem, 1rem + 0.625vw, 1.375rem);
		line-height: 1.5;
	}
	@media (width < 640px) {
		font-size: clamp(1.125rem, 0.93rem + 0.8vw, 1.25rem);
		line-height: 1.375;
	}

	&:nth-of-type(1) {
		margin-bottom: clamp(1.75rem, 1.25rem + 1.25vw, 2.25rem);

		@media (width < 640px) {
			margin-bottom: 0;
		}
	}
`,Av=j.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	justify-content: space-evenly;
	align-items: center;
	column-gap: 2rem;
	row-gap: 1.25rem;
	padding-top: 1rem;

	@media (width>= 1280px) {
		width: clamp(56rem, -8rem + 80vw, 64rem);
	}
	@media (960px <= width < 1280px) {
		width: 56rem;
	}
`,Dv=j(Rv)`
	fill: hsla(360, 100%, 100%, 1);
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease-in-out;

	@media (width >= 1280px) {
		width: 16rem;
	}
	@media (960px <= width < 1280px) {
		width: clamp(14rem, 8rem + 10vw, 16rem);
	}
	@media (640px <= width < 960px) {
		width: clamp(12rem, 8rem + 10vw, 14rem);
	}
	@media (width < 640px) {
		width: clamp(10rem, 6.88rem + 12.8vw, 12rem);
	}

	&:hover {
		fill: var(--color-secondary);
		stroke: var(--color-secondary);
		cursor: pointer;
		transform: scale(1.25);
	}
`,Fv=j(Tv)`
	fill: hsla(360, 100%, 100%, 1);
	stroke: hsla(360, 100%, 100%, 1);
	transition: transform 0.25s ease-in-out;

	@media (width >= 1280px) {
		width: 16rem;
	}
	@media (960px <= width < 1280px) {
		width: clamp(14rem, 8rem + 10vw, 16rem);
	}
	@media (640px <= width < 960px) {
		width: clamp(12rem, 8rem + 10vw, 14rem);
	}
	@media (width < 640px) {
		width: clamp(10rem, 6.88rem + 12.8vw, 12rem);
	}

	&:hover {
		fill: var(--color-secondary);
		stroke: var(--color-secondary);
		cursor: pointer;
		transform: scale(1.25);
	}
`,Ju=[{index:0,pid:"paragraph1of2",text:"Welcome to my online portfolio! My name is Josh Hawk and I recently decided to forge a new path into the exciting world of programming and web development. Having spent the last 15 years as a high school educator with no real background in coding, I enrolled in a full stack web development boot camp through Georgia Tech to jumpstart this career change. I finished the bootcamp this past fall and have coded nearly every day since, each one bringing new opportunities to reinforce what I've already learned and to expand my knowledge base of this incredible and continuously evolving field."},{index:1,pid:"paragraph2of2",text:"Please check out some of my favorite work samples while you're here. I've included individual and group projects I created throughout the boot camp, as well as some personal projects I tackled for fun. You can also look at the skills I've acquired and experiences I've gained by following the toolbox and resume links on this page. I'd love to hear from you so please feel free to reach out with any questions or comments using the contact link above. I hope you like what you see, and thanks for stopping by!"}],Bv=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),i=()=>{t(!0),window.scrollTo(0,0)},o=()=>{r(!0),window.scrollTo(0,0)};return h.jsxs(Mv,{style:{height:e||n?"calc(100vh - 12rem)":"auto",overflowY:e||n?"hidden":"visible"},children:[h.jsx($v,{src:R2,alt:"My Profile Photo"}),h.jsxs(Ov,{children:[h.jsx(Xu,{children:Ju[0].text}),h.jsx(Xu,{children:Ju[1].text})]}),h.jsxs(Av,{children:[h.jsx(Dv,{onClick:i}),h.jsx(Fv,{onClick:o})]}),e&&h.jsx(Sv,{setShowToolbox:t}),n&&h.jsx(Iv,{setShowResume:r})]})},Uv=j.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	display: flex;
	flex-direction: column;
	transition: all 1s ease-in-out;

	@media (width >= 1280px) {
		gap: 1rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			gap: 0.25rem;

			@media (height < 500px) {
				gap: 0.125rem;
			}
		}
		@media (orientation: portrait) {
			gap: 1rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			gap: 0.5rem;
		}
		@media (orientation: portrait) {
			gap: 0.5rem;
		}
	}

	&[data-status|='active'] {
		opacity: 1;
		transform: translateX(0) scale(1);
		visibility: visible;
	}
	&[data-status|='inactive'] {
		opacity: 0;
		transform: translateX(100%) scale(0);
		visibility: hidden;

		@media (640px <= width < 1280px) {
			@media (orientation: landscape) {
				@media (height < 500px) {
					transform: translateY(-100%) scale(0);
				}
			}
		}
	}
`,Wv=j.h2`
	text-align: center;
	text-transform: uppercase;

	@media (width >= 1280px) {
		font-size: 2.25rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			font-size: 1.75rem;

			@media (height < 500px) {
				font-size: 1.5rem;
			}
		}
		@media (orientation: portrait) {
			font-size: 2rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			font-size: 1.625rem;
		}
		@media (orientation: portrait) {
			font-size: 1.875rem;
		}
	}
`,Hv=j.p`
	font-weight: 200;

	@media (width >= 1280px) {
		font-size: 1.625rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			font-size: 1rem;

			@media (height < 500px) {
				font-size: 0.9375rem;
			}
		}
		@media (orientation: portrait) {
			font-size: 1.5rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			font-size: 0.875rem;
		}
		@media (orientation: portrait) {
			font-size: 1rem;
		}
	}
`,Vv=({item:e,activeIndex:t})=>h.jsxs(Uv,{"data-status":e.index===t?"active":"inactive",children:[h.jsx(Wv,{children:e.title}),h.jsx(Hv,{children:e.info})]}),qu=j.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	border-radius: 50%;
	background-color: transparent;
	font-size: 0;
	color: hsla(360, 100%, 100%, 1);
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	border: none;

	@media (width >= 1280px) {
		width: 3rem;
		height: 3.5rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			width: 2.5rem;
			height: 3rem;
		}
		@media (orientation: portrait) {
			width: 2.5rem;
			height: 3rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			width: 2rem;
			height: 2.5rem;
		}
		@media (orientation: portrait) {
			width: 2rem;
			height: 2.5rem;
		}
	}

	& svg {
		fill: var(--color-secondary);
		transition: fill 0.25s ease-in-out 0.125s;

		@media (width >= 1280px) {
			width: 3rem;
		}
		@media (640px <= width < 1280px) {
			@media (orientation: landscape) {
				width: 2.5rem;

				@media (height < 500px) {
					transition: fill 0.25s ease-in-out, transform 0.5s ease-in-out;
				}
			}
			@media (orientation: portrait) {
				width: 2.5rem;
			}
		}
		@media (width < 640px) {
			@media (orientation: landscape) {
				width: 2rem;
			}
			@media (orientation: portrait) {
				width: 2rem;
			}
		}
	}

	&:hover {
		border-radius: 2rem;
		background-color: var(--color-secondary);

		& > svg {
			fill: hsla(360, 100%, 100%, 1);
		}

		@media (width >= 1280px) {
			width: 11rem;
			font-size: 1.125rem;
		}
		@media (640px <= width < 1280px) {
			@media (orientation: landscape) {
				width: 10rem;
				font-size: 1rem;

				@media (height < 500px) {
					width: 2.5rem;
					background-color: transparent;
					transform: scale(1.25);
				}
			}
			@media (orientation: portrait) {
				width: 10rem;
				font-size: 1rem;
			}
		}
		@media (width < 640px) {
			@media (orientation: landscape) {
				width: 9rem;
				font-size: 0.875rem;
			}
			@media (orientation: portrait) {
				width: 9rem;
				font-size: 0.875rem;
			}
		}
	}
`,Qv=j.span`
	font-size: inherit;
	color: inherit;
`,cl=({icon:e,text:t})=>{const[n,r]=C.useState(!1),i=C.useRef(null),{isTablet:o,isShortScreen:l,isPortrait:s}=r0(),a=()=>{r(!0)},u=()=>{r(!1)};return h.jsx(h.Fragment,{children:o&&!s&&l?h.jsx(qu,{ref:i,onMouseEnter:a,onMouseLeave:u,children:e}):h.jsxs(qu,{ref:i,onMouseEnter:a,onMouseLeave:u,children:[e,n&&h.jsx(Qv,{children:t})]})})},Gv=({...e})=>h.jsx("svg",{...e,viewBox:"0 0 24 24",children:h.jsx("path",{d:"M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"})}),Yv=({...e})=>h.jsx("svg",{...e,viewBox:"0 0 32 32",children:h.jsx("path",{fillRule:"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"})}),Kv=({...e})=>h.jsx("svg",{...e,viewBox:"0 0 32 32",children:h.jsx("path",{d:"M26 10h-2.762A4.487 4.487 0 0 0 16 4.707A4.487 4.487 0 0 0 8.762 10H6a2.002 2.002 0 0 0-2 2v4a2.002 2.002 0 0 0 2 2v10a2.002 2.002 0 0 0 2 2h16a2.002 2.002 0 0 0 2-2V18a2.002 2.002 0 0 0 2-2v-4a2.002 2.002 0 0 0-2-2Zm-9-2.5a2.5 2.5 0 1 1 2.5 2.5H17ZM12.5 5A2.503 2.503 0 0 1 15 7.5V10h-2.5a2.5 2.5 0 0 1 0-5ZM6 12h9v4H6Zm2 6h7v10H8Zm16.001 10H17V18h7ZM17 16v-4h9l.001 4Z"})}),Zv=j.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-bottom: 1rem;
	transition: all 1s ease;

	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			@media (height < 500px) {
				flex-direction: column;
				padding-bottom: 0;
			}
		}
	}

	&[data-status|='active'] {
		opacity: 1;
		transform: translateX(0) scale(1);
		visibility: visible;
	}
	&[data-status|='inactive'] {
		opacity: 0;
		transform: translateX(100%) scale(0);
		visibility: hidden;
	}
`,Xv=({item:e,activeIndex:t})=>h.jsxs(Zv,{"data-status":e.index===t?"active":"inactive",children:[h.jsx(In,{to:e.website,target:"_blank",rel:"noreferrer",children:h.jsx(cl,{icon:h.jsx(Gv,{}),text:"Web App"})}),h.jsx(In,{to:e.github,target:"_blank",rel:"noreferrer",children:h.jsx(cl,{icon:h.jsx(Yv,{}),text:"Github Repo"})}),e.bonus!==null&&h.jsx(In,{to:e.bonus,target:"_blank",rel:"noreferrer",children:h.jsx(cl,{icon:h.jsx(Kv,{}),text:"Bonus"})})]}),Jv=({...e})=>h.jsxs("svg",{...e,viewBox:"0 0 512 322",children:[h.jsx("path",{transform:"translate(0 -95)",d:"M109.3 288H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"}),h.jsx("rect",{width:"512",height:"322",fill:"transparent"})]}),qv=({...e})=>h.jsxs("svg",{...e,viewBox:"0 0 512 322",children:[h.jsx("path",{transform:"translate(0 -95)",d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"}),h.jsx("rect",{width:"512",height:"322",fill:"transparent"})]}),bv=j.div`
	display: grid;
	height: calc(100vh - 10rem);
	height: calc(100dvh - 10rem);
	overflow: hidden;

	@media (width >= 1280px) {
		grid-template-columns: 62% 38%;
		grid-template-rows: 60% 27.5% 12.5%;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-template-columns: 52.5% 47.5%;
			grid-template-rows: 67.5% 20% 12.5%;

			@media (height < 500px) {
				grid-template-columns: 47.5% 45% 7.5%;
				grid-template-rows: 82.5% 17.5%;
			}
		}
		@media (orientation: portrait) {
			grid-template-columns: 1fr;
			grid-template-rows: 50% 30% 10% 10%;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-template-columns: 47.5% 52.5%;
			grid-template-rows: 60% 22.5% 17.5%;
		}
		@media (orientation: portrait) {
			grid-template-columns: 1fr;
			grid-template-rows: 45% 35% 10% 10%;
		}
	}
`,eg=j.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;

	@media (width >= 1280px) {
		grid-column: 1 / 2;
		grid-row: 1 / 4;
		border-right: solid white;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 1 / 2;
			grid-row: 1 / 4;
			border-right: solid hsla(360, 100%, 100%, 1);

			@media (height < 500px) {
				grid-column: 1 / 2;
				grid-row: 1 / 3;
				border-right: solid hsla(360, 100%, 100%, 1);
			}
		}
		@media (orientation: portrait) {
			grid-row: 1 / 2;
			border-bottom: solid hsla(360, 100%, 100%, 1);
		}
	}
	@media (width < 640px) {
		z-index: -1;
		@media (orientation: landscape) {
			grid-column: 1 / 2;
			grid-row: 1 / 4;
			border-right: solid hsla(360, 100%, 100%, 1);
		}
		@media (orientation: portrait) {
			grid-row: 1 / 2;
			border-bottom: solid hsla(360, 100%, 100%, 1);
		}
	}
`,tg=j.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	background-size: cover;
	background-repeat: no-repeat;
	transition: all 1s ease-in-out;

	@media (width < 640px) {
		&:nth-of-type(6) {
			background-position: center top;
		}
	}

	&[data-status|='active'] {
		opacity: 1;
		transform: translateX(0) scale(1);
		visibility: visible;
	}
	&[data-status|='inactive'] {
		opacity: 0;
		transform: translateX(-100%) scale(0);
		visibility: hidden;
	}
`,ng=j.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;

	@media (width >= 1280px) {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		padding: 1.25rem 1rem 0rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
			padding: 0.5rem 0.75rem 0.25rem;

			@media (height < 500px) {
				padding: 0.25rem 0.5rem 0.125rem;
			}
		}
		@media (orientation: portrait) {
			grid-row: 2 / 3;
			padding: 0.75rem 1rem 0.5rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
			padding: 0.25rem 0.5rem 0rem;
		}
		@media (orientation: portrait) {
			grid-row: 2 / 3;
			padding: 0.5rem 0.75rem 0.25rem;
		}
	}
`,rg=j.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	width: 100%;

	@media (width >= 1280px) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 2 / 3;

			@media (height < 500px) {
				grid-column: 3 / 4;
				grid-row: 1 / 3;
				border-left: solid hsla(360, 100%, 100%, 1);
			}
		}
		@media (orientation: portrait) {
			grid-row: 3 / 4;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
		}
		@media (orientation: portrait) {
			grid-row: 3 / 4;
		}
	}
`,ig=j.div`
	display: flex;
	justify-content: space-evenly;
	border-top: solid hsla(360, 100%, 100%, 1);
	cursor: pointer;

	@media (width >= 1280px) {
		grid-column: 2 / 3;
		grid-row: 3 / 4;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 3 / 4;

			@media (height < 500px) {
				grid-column: 2 / 3;
				grid-row: 2 / 3;
			}
		}
		@media (orientation: portrait) {
			grid-row: 4 / 5;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			grid-column: 2 / 3;
			grid-row: 3 / 4;
		}
		@media (orientation: portrait) {
			grid-row: 4 / 5;
		}
	}
`,o0=j(Jv)`
	fill: hsla(360, 100%, 100%, 1);
	transition: transform 0.375s ease-in-out;

	@media (width >= 1280px) {
		width: 3rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			width: 2rem;
		}
		@media (orientation: portrait) {
			width: 2.75rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			width: 2rem;
		}
		@media (orientation: portrait) {
			width: 2.75rem;
		}
	}
`,l0=j(qv)`
	fill: hsla(360, 100%, 100%, 1);
	transition: transform 0.375s ease-in-out;

	@media (width >= 1280px) {
		width: 3rem;
	}
	@media (640px <= width < 1280px) {
		@media (orientation: landscape) {
			width: 2rem;
		}
		@media (orientation: portrait) {
			width: 2.75rem;
		}
	}
	@media (width < 640px) {
		@media (orientation: landscape) {
			width: 2rem;
		}
		@media (orientation: portrait) {
			width: 2.75rem;
		}
	}
`,bu=j.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	transition: all 0.375s ease-in-out;

	&:nth-of-type(2) {
		border-left: solid hsla(360, 100%, 100%, 1);
	}

	&:hover {
		background-color: hsla(211, 30%, 24%, 0.5);

		& > ${o0}, ${l0} {
			transform: scale(1.25);
		}
	}
`,og="/assets/note_taker-a32955c9.png",lg="/assets/weather_dashboard-32779627.png",sg="/assets/workday_scheduler-a12af0b4.png",ag="/assets/course_tracker-aa8fcca0.png",ug="/assets/mini_games-df85d6a5.png",cg="/assets/song_search-1bb406ac.png",lr=[{index:0,image:og,alt:"Note Taker Image",title:"Note Taker",info:"A clean, crisp, and very usefuly note-taking app that uses localStorage to save and retrieve note data. BONUS: Check out an alternate version of this app at the link below that uses an express.js backend to save and retrieve notes from a JSON file.",website:"https://hawkjosh-note-taker.netlify.app/",github:"https://github.com/hawkjosh/note-taker-json",bonus:"https://hawkjosh-note-taker.onrender.com"},{index:1,image:lg,alt:"Weather Dashboard Image",title:"Weather Dashboard",info:"A nifty weather widget app that runs in the browser and retrieves current as well as forectast weather info via the WeatherAPI developer API.",website:"https://hawkjosh-weather-dashboard.onrender.com",github:"https://github.com/hawkjosh/weather-dashboard-update",bonus:null},{index:2,image:sg,alt:"Workday Scheduler Image",title:"Workday Scheduler",info:"A simple calendar/planner app that runs in the browser and features dynamically updated HTML and CSS powered by jQuery.",website:"https://hawkjosh-workday-scheduler.netlify.app/",github:"https://github.com/hawkjosh/workday-scheduler-update",bonus:null},{index:3,image:ag,alt:"Course Tracker Image",title:"Course Tracker",info:"A somewhat niche but very useful app that keeps track of online developer courses that you have purchased or have your eye on purchasing. It uses Netlify Functions to connect with an Airtable database where the user's information is stored.",website:"https://hawkjosh-course-tracker.netlify.app",github:"https://github.com/hawkjosh/course-tracker",bonus:null},{index:4,image:ug,alt:"Mini Games Image",title:"Mini Games",info:"A fun and entertaining way to kill some time, this app is a collection of some classic games built with the basics - HTML, CSS, and JavaScript.",website:"https://hawkjosh-mini-games.netlify.app",github:"https://github.com/hawkjosh/mini-games",bonus:null},{index:5,image:cg,alt:"Song Search Image",title:"Song Search",info:"A small but powerful music search tool that uses third party API's to retrieve song information via RESTful CRUD routes.",website:"https://hawkjosh-song-search.onrender.com",github:"https://github.com/hawkjosh/song-search-update",bonus:null}],dg=()=>{const[e,t]=C.useState(0),n=o=>{o<0?o=lr.length-1:o>=lr.length&&(o=0),t(o)},r=()=>{n(e-1)},i=()=>{n(e+1)};return h.jsxs(bv,{children:[h.jsx(eg,{children:lr.map(o=>h.jsx(tg,{"data-status":o.index===e?"active":"inactive",style:{backgroundImage:`url(${o.image})`}},o.index))}),h.jsx(ng,{children:lr.map(o=>h.jsx(Vv,{item:o,activeIndex:e},o.index))}),h.jsx(rg,{children:lr.map(o=>h.jsx(Xv,{item:o,activeIndex:e},o.index))}),h.jsxs(ig,{children:[h.jsx(bu,{onClick:r,children:h.jsx(o0,{})}),h.jsx(bu,{onClick:i,children:h.jsx(l0,{})})]})]})},fg=()=>{const e=C.useRef(null);return C.useEffect(()=>{const t=e.current;if(!t)return;const n=()=>{t.style.height="auto",t.style.height=`${t.scrollHeight}px`};return t.addEventListener("input",n),()=>{t.removeEventListener("input",n)}},[]),e},pg=j.div`
	height: 100%;
	max-height: calc(100dvh - 10rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
	padding: 1rem 0;
`,mg=j.h1`
	font-weight: 600;
	text-transform: uppercase;
	color: var(--color-secondary);

	@media (width >= 1280px) {
		font-size: 2.25rem;
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(2rem, 1rem + 1.563vw, 2.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1.75rem, 1.333rem + 1.042vw, 2rem);
	}
	@media (width < 640px) {
		font-size: 1.75rem;
	}
`,hg=j.form`
	width: 90%;
	max-width: 90rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
`,ec=j.input`
	width: 100%;
	line-height: 1.25;
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;

	@media (width >= 1280px) {
		font-size: 1.25rem;
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.125rem, 0.625rem + 0.781vw, 1.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1rem, 0.792rem + 0.521vw, 1.125rem);
	}
	@media (width < 640px) {
		font-size: 1rem;
	}

	&:focus {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}

	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
`,vg=j.textarea`
	width: 100%;
	height: 100%;
	justify-self: stretch;
	font-family: inherit;
	line-height: 1.25;
	color: var(--color-secondary);
	border: 0.125rem solid var(--color-secondary);
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	resize: none;

	@media (width >= 1280px) {
		font-size: 1.25rem;
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.125rem, 0.625rem + 0.781vw, 1.25rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1rem, 0.792rem + 0.521vw, 1.125rem);
	}
	@media (width < 640px) {
		font-size: 1rem;
	}

	&:focus {
		box-shadow: 0.1875rem 0.1875rem 0.75rem hsla(211, 30%, 24%, 0.75),
			-0.1875rem -0.1875rem 0.75rem hsla(211, 30%, 24%, 0.5);
		outline: none;
	}

	&::placeholder {
		color: hsla(0, 0%, 78%, 0.85);
	}
`,gg=j.button`
	text-transform: uppercase;
	line-height: 1.5;
	color: hsla(360, 100%, 100%, 1);
	background-color: var(--color-secondary);
	border: 0.125rem solid hsla(360, 100%, 100%, 1);
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	cursor: pointer;

	@media (width >= 1280px) {
		font-size: 1.5rem;
	}
	@media (1024px <= width < 1280px) {
		font-size: clamp(1.25rem, 0.25rem + 1.563vw, 1.5rem);
	}
	@media (640px <= width < 1024px) {
		font-size: clamp(1rem, 0.583rem + 1.042vw, 1.25rem);
	}
	@media (width < 640px) {
		font-size: 1rem;
	}

	&:is(:hover, :focus) {
		outline: none;
		transition: box-shadow 0.25s ease-in-out;
		box-shadow: 0.125rem 0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			-0.125rem -0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			-0.125rem 0.125rem 0.625rem hsla(0, 0%, 100%, 0.5),
			0.125rem -0.125rem 0.625rem hsla(0, 0%, 100%, 0.5);
	}
`,yg=()=>{const e=fg();return h.jsxs(pg,{children:[h.jsx(mg,{children:"Contact Me"}),h.jsxs(hg,{action:"https://formsubmit.co/fdc600bd598b4f6fe804872e952a9823",method:"POST",children:[h.jsx("input",{type:"hidden",name:"_captcha",value:"false"}),h.jsx("input",{type:"hidden",name:"_next",value:"http://localhost:5173/thanks"}),h.jsx(ec,{name:"name",type:"text",placeholder:"Full Name",required:!0}),h.jsx(ec,{name:"email",type:"email",placeholder:"Email Address",required:!0}),h.jsx(vg,{ref:e,name:"message",placeholder:"Your Message",required:!0}),h.jsx(gg,{type:"submit",children:"Submit Form"})]})]})},wg=j.div`
  height: 100dvh;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`,xg=j.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`,kg=j.h2`
	font-size: 1.625rem;
`,Sg=j.h4`
  font-size: 1.0625rem;
	font-weight: 400;
`,Cg=j(In)`
	background: hsla(360, 100%, 100%, 1);
	border-radius: 1.5rem;
	cursor: pointer;
	font-size: 1.5rem;
	color: var(--color-primary);
	padding: 0.5rem 0.75rem;
	line-height: 1.5;
	text-transform: uppercase;
	font-weight: 500;
`,Eg=()=>h.jsxs(wg,{children:[h.jsxs(xg,{children:[h.jsx(kg,{children:"Thanks for reaching out!"}),h.jsx(Sg,{children:"I'll get back to you as soon as possible."})]}),h.jsx(Cg,{to:"/",children:"Return"})]}),jg=()=>h.jsx(h.Fragment,{children:h.jsx("div",{children:"NoPage Component"})}),_g=()=>h.jsx($h,{children:h.jsxs(Nh,{children:[h.jsxs(vt,{path:"/",element:h.jsx(y2,{}),children:[h.jsx(vt,{index:!0,element:h.jsx(I2,{})}),h.jsx(vt,{path:"/about",element:h.jsx(Bv,{})}),h.jsx(vt,{path:"/work-samples",element:h.jsx(dg,{})}),h.jsx(vt,{path:"/contact",element:h.jsx(yg,{})})]}),h.jsx(vt,{path:"/thanks",element:h.jsx(Eg,{})}),h.jsx(vt,{path:"*",element:h.jsx(jg,{})})]})});dl.createRoot(document.getElementById("root")).render(h.jsxs(qe.StrictMode,{children:[h.jsx(Dm,{}),h.jsx(_g,{})]}));
