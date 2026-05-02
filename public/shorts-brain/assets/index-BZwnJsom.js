(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function JE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D_={exports:{}},ju={},O_={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),XE=Symbol.for("react.portal"),ZE=Symbol.for("react.fragment"),eT=Symbol.for("react.strict_mode"),tT=Symbol.for("react.profiler"),nT=Symbol.for("react.provider"),rT=Symbol.for("react.context"),sT=Symbol.for("react.forward_ref"),iT=Symbol.for("react.suspense"),oT=Symbol.for("react.memo"),aT=Symbol.for("react.lazy"),km=Symbol.iterator;function lT(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var V_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M_=Object.assign,L_={};function Xi(t,e,n){this.props=t,this.context=e,this.refs=L_,this.updater=n||V_}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function j_(){}j_.prototype=Xi.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=L_,this.updater=n||V_}var zd=Bd.prototype=new j_;zd.constructor=Bd;M_(zd,Xi.prototype);zd.isPureReactComponent=!0;var Cm=Array.isArray,U_=Object.prototype.hasOwnProperty,Hd={current:null},F_={key:!0,ref:!0,__self:!0,__source:!0};function $_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)U_.call(e,r)&&!F_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:xa,type:t,key:i,ref:o,props:s,_owner:Hd.current}}function uT(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function cT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rm=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cT(""+t.key):e.toString(36)}function Al(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xa:case XE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Dc(o,0):r,Cm(s)?(n="",t!=null&&(n=t.replace(Rm,"$&/")+"/"),Al(s,e,n,"",function(c){return c})):s!=null&&(qd(s)&&(s=uT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Rm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Cm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Dc(i,l);o+=Al(i,e,n,u,s)}else if(u=lT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Dc(i,l++),o+=Al(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var r=[],s=0;return Al(t,r,"","",function(i){return e.call(n,i,s++)}),r}function hT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},xl={transition:null},dT={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:xl,ReactCurrentOwner:Hd};function B_(){throw Error("act(...) is not supported in production builds of React.")}Te.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Te.Component=Xi;Te.Fragment=ZE;Te.Profiler=tT;Te.PureComponent=Bd;Te.StrictMode=eT;Te.Suspense=iT;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dT;Te.act=B_;Te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=M_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Hd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)U_.call(e,u)&&!F_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:xa,type:t.type,key:s,ref:i,props:r,_owner:o}};Te.createContext=function(t){return t={$$typeof:rT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nT,_context:t},t.Consumer=t};Te.createElement=$_;Te.createFactory=function(t){var e=$_.bind(null,t);return e.type=t,e};Te.createRef=function(){return{current:null}};Te.forwardRef=function(t){return{$$typeof:sT,render:t}};Te.isValidElement=qd;Te.lazy=function(t){return{$$typeof:aT,_payload:{_status:-1,_result:t},_init:hT}};Te.memo=function(t,e){return{$$typeof:oT,type:t,compare:e===void 0?null:e}};Te.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};Te.unstable_act=B_;Te.useCallback=function(t,e){return en.current.useCallback(t,e)};Te.useContext=function(t){return en.current.useContext(t)};Te.useDebugValue=function(){};Te.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Te.useEffect=function(t,e){return en.current.useEffect(t,e)};Te.useId=function(){return en.current.useId()};Te.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Te.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Te.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Te.useMemo=function(t,e){return en.current.useMemo(t,e)};Te.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Te.useRef=function(t){return en.current.useRef(t)};Te.useState=function(t){return en.current.useState(t)};Te.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Te.useTransition=function(){return en.current.useTransition()};Te.version="18.3.1";O_.exports=Te;var ie=O_.exports;const ui=JE(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fT=ie,pT=Symbol.for("react.element"),mT=Symbol.for("react.fragment"),gT=Object.prototype.hasOwnProperty,yT=fT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_T={key:!0,ref:!0,__self:!0,__source:!0};function z_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gT.call(e,r)&&!_T.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:pT,type:t,key:i,ref:o,props:s,_owner:yT.current}}ju.Fragment=mT;ju.jsx=z_;ju.jsxs=z_;D_.exports=ju;var g=D_.exports,wh={},H_={exports:{}},yn={},q_={exports:{}},G_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,H){var B=$.length;$.push(H);e:for(;0<B;){var Ie=B-1>>>1,ge=$[Ie];if(0<s(ge,H))$[Ie]=H,$[B]=ge,B=Ie;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var H=$[0],B=$.pop();if(B!==H){$[0]=B;e:for(var Ie=0,ge=$.length,ye=ge>>>1;Ie<ye;){var ae=2*(Ie+1)-1,Qt=$[ae],yt=ae+1,vn=$[yt];if(0>s(Qt,B))yt<ge&&0>s(vn,Qt)?($[Ie]=vn,$[yt]=B,Ie=yt):($[Ie]=Qt,$[ae]=B,Ie=ae);else if(yt<ge&&0>s(vn,B))$[Ie]=vn,$[yt]=B,Ie=yt;else break e}}return H}function s($,H){var B=$.sortIndex-H.sortIndex;return B!==0?B:$.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,y=3,k=!1,R=!1,P=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=$)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function N($){if(P=!1,x($),!R)if(n(u)!==null)R=!0,qe(L);else{var H=n(c);H!==null&&ee(N,H.startTime-$)}}function L($,H){R=!1,P&&(P=!1,S(v),v=-1),k=!0;var B=y;try{for(x(H),p=n(u);p!==null&&(!(p.expirationTime>H)||$&&!A());){var Ie=p.callback;if(typeof Ie=="function"){p.callback=null,y=p.priorityLevel;var ge=Ie(p.expirationTime<=H);H=t.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(u)&&r(u),x(H)}else r(u);p=n(u)}if(p!==null)var ye=!0;else{var ae=n(c);ae!==null&&ee(N,ae.startTime-H),ye=!1}return ye}finally{p=null,y=B,k=!1}}var U=!1,I=null,v=-1,m=5,w=-1;function A(){return!(t.unstable_now()-w<m)}function C(){if(I!==null){var $=t.unstable_now();w=$;var H=!0;try{H=I(!0,$)}finally{H?E():(U=!1,I=null)}}else U=!1}var E;if(typeof T=="function")E=function(){T(C)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,fe=X.port2;X.port1.onmessage=C,E=function(){fe.postMessage(null)}}else E=function(){O(C,0)};function qe($){I=$,U||(U=!0,E())}function ee($,H){v=O(function(){$(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||k||(R=!0,qe(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var B=y;y=H;try{return $()}finally{y=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,H){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var B=y;y=$;try{return H()}finally{y=B}},t.unstable_scheduleCallback=function($,H,B){var Ie=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Ie+B:Ie):B=Ie,$){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=B+ge,$={id:f++,callback:H,priorityLevel:$,startTime:B,expirationTime:ge,sortIndex:-1},B>Ie?($.sortIndex=B,e(c,$),n(u)===null&&$===n(c)&&(P?(S(v),v=-1):P=!0,ee(N,B-Ie))):($.sortIndex=ge,e(u,$),R||k||(R=!0,qe(L))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var H=y;return function(){var B=y;y=H;try{return $.apply(this,arguments)}finally{y=B}}}})(G_);q_.exports=G_;var vT=q_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT=ie,gn=vT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var W_=new Set,Xo={};function Zs(t,e){Ui(t,e),Ui(t+"Capture",e)}function Ui(t,e){for(Xo[t]=e,t=0;t<e.length;t++)W_.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,ET=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bm={},Pm={};function TT(t){return Eh.call(Pm,t)?!0:Eh.call(bm,t)?!1:ET.test(t)?Pm[t]=!0:(bm[t]=!0,!1)}function IT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ST(t,e,n,r){if(e===null||typeof e>"u"||IT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Wd);Vt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Wd);Vt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Wd);Vt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,r){var s=Vt.hasOwnProperty(e)?Vt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ST(e,n,s,r)&&(n=null),r||s===null?TT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=wT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),pi=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),Q_=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),Y_=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Object.assign,Oc;function Ro(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Vc=!1;function Mc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function AT(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mi:return"Fragment";case pi:return"Portal";case Th:return"Profiler";case Qd:return"StrictMode";case Ih:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q_:return(t.displayName||"Context")+".Consumer";case K_:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function xT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kT(t){var e=J_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=kT(t))}function X_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=J_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xh(t,e){var n=e.checked;return nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z_(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function kh(t,e){Z_(t,e);var n=cs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,cs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Om(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ch(t,e,n){(e!=="number"||Ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(bo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cs(n)}}function e0(t,e){var n=cs(e.value),r=cs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CT=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){CT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function s0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=r0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var RT=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(RT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,ki=null,Ci=null;function Lm(t){if(t=Ra(t)){if(typeof Oh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=zu(e),Oh(t.stateNode,t.type,e))}}function i0(t){ki?Ci?Ci.push(t):Ci=[t]:ki=t}function o0(){if(ki){var t=ki,e=Ci;if(Ci=ki=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function a0(t,e){return t(e)}function l0(){}var Lc=!1;function u0(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return a0(t,e,n)}finally{Lc=!1,(ki!==null||Ci!==null)&&(l0(),o0())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Vh=!1;if(Er)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Vh=!1}function bT(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Lo=!1,Yl=null,Jl=!1,Mh=null,PT={onError:function(t){Lo=!0,Yl=t}};function NT(t,e,n,r,s,i,o,l,u){Lo=!1,Yl=null,bT.apply(PT,arguments)}function DT(t,e,n,r,s,i,o,l,u){if(NT.apply(this,arguments),Lo){if(Lo){var c=Yl;Lo=!1,Yl=null}else throw Error(F(198));Jl||(Jl=!0,Mh=c)}}function ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jm(t){if(ei(t)!==t)throw Error(F(188))}function OT(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return jm(s),t;if(i===r)return jm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function h0(t){return t=OT(t),t!==null?d0(t):null}function d0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d0(t);if(e!==null)return e;t=t.sibling}return null}var f0=gn.unstable_scheduleCallback,Um=gn.unstable_cancelCallback,VT=gn.unstable_shouldYield,MT=gn.unstable_requestPaint,ut=gn.unstable_now,LT=gn.unstable_getCurrentPriorityLevel,Zd=gn.unstable_ImmediatePriority,p0=gn.unstable_UserBlockingPriority,Xl=gn.unstable_NormalPriority,jT=gn.unstable_LowPriority,m0=gn.unstable_IdlePriority,Uu=null,Zn=null;function UT(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:BT,FT=Math.log,$T=Math.LN2;function BT(t){return t>>>=0,t===0?32:31-(FT(t)/$T|0)|0}var nl=64,rl=4194304;function Po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Po(l):(i&=o,i!==0&&(r=Po(i)))}else o=n&~s,o!==0?r=Po(o):i!==0&&(r=Po(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jn(e),s=1<<n,r|=t[n],e&=~s;return r}function zT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-jn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=zT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function qT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-jn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Oe=0;function y0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _0,tf,v0,w0,E0,jh=!1,sl=[],Jr=null,Xr=null,Zr=null,ta=new Map,na=new Map,Br=[],GT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fm(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function Eo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ra(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function WT(t,e,n,r,s){switch(e){case"focusin":return Jr=Eo(Jr,t,e,n,r,s),!0;case"dragenter":return Xr=Eo(Xr,t,e,n,r,s),!0;case"mouseover":return Zr=Eo(Zr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ta.set(i,Eo(ta.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,na.set(i,Eo(na.get(i)||null,t,e,n,r,s)),!0}return!1}function T0(t){var e=Ns(t.target);if(e!==null){var n=ei(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,E0(t.priority,function(){v0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dh=r,n.target.dispatchEvent(r),Dh=null}else return e=Ra(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function $m(t,e,n){kl(t)&&n.delete(e)}function KT(){jh=!1,Jr!==null&&kl(Jr)&&(Jr=null),Xr!==null&&kl(Xr)&&(Xr=null),Zr!==null&&kl(Zr)&&(Zr=null),ta.forEach($m),na.forEach($m)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,jh||(jh=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,KT)))}function ra(t){function e(s){return To(s,t)}if(0<sl.length){To(sl[0],t);for(var n=1;n<sl.length;n++){var r=sl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&To(Jr,t),Xr!==null&&To(Xr,t),Zr!==null&&To(Zr,t),ta.forEach(e),na.forEach(e),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)T0(n),n.blockedOn===null&&Br.shift()}var Ri=Rr.ReactCurrentBatchConfig,eu=!0;function QT(t,e,n,r){var s=Oe,i=Ri.transition;Ri.transition=null;try{Oe=1,nf(t,e,n,r)}finally{Oe=s,Ri.transition=i}}function YT(t,e,n,r){var s=Oe,i=Ri.transition;Ri.transition=null;try{Oe=4,nf(t,e,n,r)}finally{Oe=s,Ri.transition=i}}function nf(t,e,n,r){if(eu){var s=Uh(t,e,n,r);if(s===null)Kc(t,e,r,tu,n),Fm(t,r);else if(WT(s,t,e,n,r))r.stopPropagation();else if(Fm(t,r),e&4&&-1<GT.indexOf(t)){for(;s!==null;){var i=Ra(s);if(i!==null&&_0(i),i=Uh(t,e,n,r),i===null&&Kc(t,e,r,tu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var tu=null;function Uh(t,e,n,r){if(tu=null,t=Xd(r),t=Ns(t),t!==null)if(e=ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tu=t,null}function I0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LT()){case Zd:return 1;case p0:return 4;case Xl:case jT:return 16;case m0:return 536870912;default:return 16}default:return 16}}var Kr=null,rf=null,Cl=null;function S0(){if(Cl)return Cl;var t,e=rf,n=e.length,r,s="value"in Kr?Kr.value:Kr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Cl=s.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function Bm(){return!1}function _n(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?il:Bm,this.isPropagationStopped=Bm,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=_n(Zi),Ca=nt({},Zi,{view:0,detail:0}),JT=_n(Ca),Uc,Fc,Io,Fu=nt({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(Uc=t.screenX-Io.screenX,Fc=t.screenY-Io.screenY):Fc=Uc=0,Io=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),zm=_n(Fu),XT=nt({},Fu,{dataTransfer:0}),ZT=_n(XT),eI=nt({},Ca,{relatedTarget:0}),$c=_n(eI),tI=nt({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),nI=_n(tI),rI=nt({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sI=_n(rI),iI=nt({},Zi,{data:0}),Hm=_n(iI),oI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lI[t])?!!e[t]:!1}function of(){return uI}var cI=nt({},Ca,{key:function(t){if(t.key){var e=oI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hI=_n(cI),dI=nt({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qm=_n(dI),fI=nt({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),pI=_n(fI),mI=nt({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gI=_n(mI),yI=nt({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_I=_n(yI),vI=[9,13,27,32],af=Er&&"CompositionEvent"in window,jo=null;Er&&"documentMode"in document&&(jo=document.documentMode);var wI=Er&&"TextEvent"in window&&!jo,A0=Er&&(!af||jo&&8<jo&&11>=jo),Gm=" ",Wm=!1;function x0(t,e){switch(t){case"keyup":return vI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function EI(t,e){switch(t){case"compositionend":return k0(e);case"keypress":return e.which!==32?null:(Wm=!0,Gm);case"textInput":return t=e.data,t===Gm&&Wm?null:t;default:return null}}function TI(t,e){if(gi)return t==="compositionend"||!af&&x0(t,e)?(t=S0(),Cl=rf=Kr=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A0&&e.locale!=="ko"?null:e.data;default:return null}}var II={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!II[t.type]:e==="textarea"}function C0(t,e,n,r){i0(r),e=nu(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Uo=null,sa=null;function SI(t){U0(t,0)}function $u(t){var e=vi(t);if(X_(e))return t}function AI(t,e){if(t==="change")return e}var R0=!1;if(Er){var Bc;if(Er){var zc="oninput"in document;if(!zc){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),zc=typeof Qm.oninput=="function"}Bc=zc}else Bc=!1;R0=Bc&&(!document.documentMode||9<document.documentMode)}function Ym(){Uo&&(Uo.detachEvent("onpropertychange",b0),sa=Uo=null)}function b0(t){if(t.propertyName==="value"&&$u(sa)){var e=[];C0(e,sa,t,Xd(t)),u0(SI,e)}}function xI(t,e,n){t==="focusin"?(Ym(),Uo=e,sa=n,Uo.attachEvent("onpropertychange",b0)):t==="focusout"&&Ym()}function kI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $u(sa)}function CI(t,e){if(t==="click")return $u(e)}function RI(t,e){if(t==="input"||t==="change")return $u(e)}function bI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:bI;function ia(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Eh.call(e,s)||!Bn(t[s],e[s]))return!1}return!0}function Jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,e){var n=Jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jm(n)}}function P0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?P0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N0(){for(var t=window,e=Ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ql(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PI(t){var e=N0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&P0(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Xm(n,i);var o=Xm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NI=Er&&"documentMode"in document&&11>=document.documentMode,yi=null,Fh=null,Fo=null,$h=!1;function Zm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$h||yi==null||yi!==Ql(r)||(r=yi,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&ia(Fo,r)||(Fo=r,r=nu(Fh,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=yi)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},Hc={},D0={};Er&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function Bu(t){if(Hc[t])return Hc[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return Hc[t]=e[n];return t}var O0=Bu("animationend"),V0=Bu("animationiteration"),M0=Bu("animationstart"),L0=Bu("transitionend"),j0=new Map,eg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vs(t,e){j0.set(t,e),Zs(e,[t])}for(var qc=0;qc<eg.length;qc++){var Gc=eg[qc],DI=Gc.toLowerCase(),OI=Gc[0].toUpperCase()+Gc.slice(1);vs(DI,"on"+OI)}vs(O0,"onAnimationEnd");vs(V0,"onAnimationIteration");vs(M0,"onAnimationStart");vs("dblclick","onDoubleClick");vs("focusin","onFocus");vs("focusout","onBlur");vs(L0,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VI=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,DT(r,e,void 0,t),t.currentTarget=null}function U0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;tg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;tg(s,l,c),i=u}}}if(Jl)throw t=Mh,Jl=!1,Mh=null,t}function We(t,e){var n=e[Gh];n===void 0&&(n=e[Gh]=new Set);var r=t+"__bubble";n.has(r)||(F0(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),F0(n,t,r,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[al]){t[al]=!0,W_.forEach(function(n){n!=="selectionchange"&&(VI.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Wc("selectionchange",!1,e))}}function F0(t,e,n,r){switch(I0(e)){case 1:var s=QT;break;case 4:s=YT;break;default:s=nf}n=s.bind(null,e,n,t),s=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ns(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}u0(function(){var c=i,f=Xd(n),p=[];e:{var y=j0.get(t);if(y!==void 0){var k=sf,R=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":k=hI;break;case"focusin":R="focus",k=$c;break;case"focusout":R="blur",k=$c;break;case"beforeblur":case"afterblur":k=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ZT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=pI;break;case O0:case V0:case M0:k=nI;break;case L0:k=gI;break;case"scroll":k=JT;break;case"wheel":k=_I;break;case"copy":case"cut":case"paste":k=sI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=qm}var P=(e&4)!==0,O=!P&&t==="scroll",S=P?y!==null?y+"Capture":null:y;P=[];for(var T=c,x;T!==null;){x=T;var N=x.stateNode;if(x.tag===5&&N!==null&&(x=N,S!==null&&(N=ea(T,S),N!=null&&P.push(aa(T,N,x)))),O)break;T=T.return}0<P.length&&(y=new k(y,R,null,n,f),p.push({event:y,listeners:P}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==Dh&&(R=n.relatedTarget||n.fromElement)&&(Ns(R)||R[Tr]))break e;if((k||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,k?(R=n.relatedTarget||n.toElement,k=c,R=R?Ns(R):null,R!==null&&(O=ei(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(k=null,R=c),k!==R)){if(P=zm,N="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(P=qm,N="onPointerLeave",S="onPointerEnter",T="pointer"),O=k==null?y:vi(k),x=R==null?y:vi(R),y=new P(N,T+"leave",k,n,f),y.target=O,y.relatedTarget=x,N=null,Ns(f)===c&&(P=new P(S,T+"enter",R,n,f),P.target=x,P.relatedTarget=O,N=P),O=N,k&&R)t:{for(P=k,S=R,T=0,x=P;x;x=li(x))T++;for(x=0,N=S;N;N=li(N))x++;for(;0<T-x;)P=li(P),T--;for(;0<x-T;)S=li(S),x--;for(;T--;){if(P===S||S!==null&&P===S.alternate)break t;P=li(P),S=li(S)}P=null}else P=null;k!==null&&ng(p,y,k,P,!1),R!==null&&O!==null&&ng(p,O,R,P,!0)}}e:{if(y=c?vi(c):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var L=AI;else if(Km(y))if(R0)L=RI;else{L=kI;var U=xI}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(L=CI);if(L&&(L=L(t,c))){C0(p,L,n,f);break e}U&&U(t,y,c),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&Ch(y,"number",y.value)}switch(U=c?vi(c):window,t){case"focusin":(Km(U)||U.contentEditable==="true")&&(yi=U,Fh=c,Fo=null);break;case"focusout":Fo=Fh=yi=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,Zm(p,n,f);break;case"selectionchange":if(NI)break;case"keydown":case"keyup":Zm(p,n,f)}var I;if(af)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else gi?x0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(A0&&n.locale!=="ko"&&(gi||v!=="onCompositionStart"?v==="onCompositionEnd"&&gi&&(I=S0()):(Kr=f,rf="value"in Kr?Kr.value:Kr.textContent,gi=!0)),U=nu(c,v),0<U.length&&(v=new Hm(v,t,null,n,f),p.push({event:v,listeners:U}),I?v.data=I:(I=k0(n),I!==null&&(v.data=I)))),(I=wI?EI(t,n):TI(t,n))&&(c=nu(c,"onBeforeInput"),0<c.length&&(f=new Hm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=I))}U0(p,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ea(t,n),i!=null&&r.unshift(aa(t,i,s)),i=ea(t,e),i!=null&&r.push(aa(t,i,s))),t=t.return}return r}function li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ng(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=ea(n,i),u!=null&&o.unshift(aa(n,u,l))):s||(u=ea(n,i),u!=null&&o.push(aa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MI=/\r\n?/g,LI=/\u0000|\uFFFD/g;function rg(t){return(typeof t=="string"?t:""+t).replace(MI,`
`).replace(LI,"")}function ll(t,e,n){if(e=rg(e),rg(t)!==e&&n)throw Error(F(425))}function ru(){}var Bh=null,zh=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,jI=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,UI=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(t){return sg.resolve(null).then(t).catch(FI)}:qh;function FI(t){setTimeout(function(){throw t})}function Qc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ra(e)}function es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ig(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Jn="__reactFiber$"+eo,la="__reactProps$"+eo,Tr="__reactContainer$"+eo,Gh="__reactEvents$"+eo,$I="__reactListeners$"+eo,BI="__reactHandles$"+eo;function Ns(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tr]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ig(t);t!==null;){if(n=t[Jn])return n;t=ig(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[Jn]||t[Tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function zu(t){return t[la]||null}var Wh=[],wi=-1;function ws(t){return{current:t}}function Qe(t){0>wi||(t.current=Wh[wi],Wh[wi]=null,wi--)}function He(t,e){wi++,Wh[wi]=t.current,t.current=e}var hs={},Wt=ws(hs),an=ws(!1),$s=hs;function Fi(t,e){var n=t.type.contextTypes;if(!n)return hs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ln(t){return t=t.childContextTypes,t!=null}function su(){Qe(an),Qe(Wt)}function og(t,e,n){if(Wt.current!==hs)throw Error(F(168));He(Wt,e),He(an,n)}function $0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,xT(t)||"Unknown",s));return nt({},n,r)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hs,$s=Wt.current,He(Wt,t),He(an,an.current),!0}function ag(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=$0(t,e,$s),r.__reactInternalMemoizedMergedChildContext=t,Qe(an),Qe(Wt),He(Wt,t)):Qe(an),He(an,n)}var dr=null,Hu=!1,Yc=!1;function B0(t){dr===null?dr=[t]:dr.push(t)}function zI(t){Hu=!0,B0(t)}function Es(){if(!Yc&&dr!==null){Yc=!0;var t=0,e=Oe;try{var n=dr;for(Oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dr=null,Hu=!1}catch(s){throw dr!==null&&(dr=dr.slice(t+1)),f0(Zd,Es),s}finally{Oe=e,Yc=!1}}return null}var Ei=[],Ti=0,ou=null,au=0,En=[],Tn=0,Bs=null,mr=1,gr="";function Rs(t,e){Ei[Ti++]=au,Ei[Ti++]=ou,ou=t,au=e}function z0(t,e,n){En[Tn++]=mr,En[Tn++]=gr,En[Tn++]=Bs,Bs=t;var r=mr;t=gr;var s=32-jn(r)-1;r&=~(1<<s),n+=1;var i=32-jn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,mr=1<<32-jn(e)+s|n<<s|r,gr=i+t}else mr=1<<i|n<<s|r,gr=t}function uf(t){t.return!==null&&(Rs(t,1),z0(t,1,0))}function cf(t){for(;t===ou;)ou=Ei[--Ti],Ei[Ti]=null,au=Ei[--Ti],Ei[Ti]=null;for(;t===Bs;)Bs=En[--Tn],En[Tn]=null,gr=En[--Tn],En[Tn]=null,mr=En[--Tn],En[Tn]=null}var mn=null,pn=null,Je=!1,Vn=null;function H0(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=es(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bs!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(Je){var e=pn;if(e){var n=e;if(!lg(t,e)){if(Kh(t))throw Error(F(418));e=es(n.nextSibling);var r=mn;e&&lg(t,e)?H0(r,n):(t.flags=t.flags&-4097|2,Je=!1,mn=t)}}else{if(Kh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Je=!1,mn=t}}}function ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function ul(t){if(t!==mn)return!1;if(!Je)return ug(t),Je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=pn)){if(Kh(t))throw q0(),Error(F(418));for(;e;)H0(t,e),e=es(e.nextSibling)}if(ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?es(t.stateNode.nextSibling):null;return!0}function q0(){for(var t=pn;t;)t=es(t.nextSibling)}function $i(){pn=mn=null,Je=!1}function hf(t){Vn===null?Vn=[t]:Vn.push(t)}var HI=Rr.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cg(t){var e=t._init;return e(t._payload)}function G0(t){function e(S,T){if(t){var x=S.deletions;x===null?(S.deletions=[T],S.flags|=16):x.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function s(S,T){return S=ss(S,T),S.index=0,S.sibling=null,S}function i(S,T,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<T?(S.flags|=2,T):x):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,T,x,N){return T===null||T.tag!==6?(T=rh(x,S.mode,N),T.return=S,T):(T=s(T,x),T.return=S,T)}function u(S,T,x,N){var L=x.type;return L===mi?f(S,T,x.props.children,N,x.key):T!==null&&(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Fr&&cg(L)===T.type)?(N=s(T,x.props),N.ref=So(S,T,x),N.return=S,N):(N=Ml(x.type,x.key,x.props,null,S.mode,N),N.ref=So(S,T,x),N.return=S,N)}function c(S,T,x,N){return T===null||T.tag!==4||T.stateNode.containerInfo!==x.containerInfo||T.stateNode.implementation!==x.implementation?(T=sh(x,S.mode,N),T.return=S,T):(T=s(T,x.children||[]),T.return=S,T)}function f(S,T,x,N,L){return T===null||T.tag!==7?(T=js(x,S.mode,N,L),T.return=S,T):(T=s(T,x),T.return=S,T)}function p(S,T,x){if(typeof T=="string"&&T!==""||typeof T=="number")return T=rh(""+T,S.mode,x),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Za:return x=Ml(T.type,T.key,T.props,null,S.mode,x),x.ref=So(S,null,T),x.return=S,x;case pi:return T=sh(T,S.mode,x),T.return=S,T;case Fr:var N=T._init;return p(S,N(T._payload),x)}if(bo(T)||vo(T))return T=js(T,S.mode,x,null),T.return=S,T;cl(S,T)}return null}function y(S,T,x,N){var L=T!==null?T.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:l(S,T,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return x.key===L?u(S,T,x,N):null;case pi:return x.key===L?c(S,T,x,N):null;case Fr:return L=x._init,y(S,T,L(x._payload),N)}if(bo(x)||vo(x))return L!==null?null:f(S,T,x,N,null);cl(S,x)}return null}function k(S,T,x,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return S=S.get(x)||null,l(T,S,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Za:return S=S.get(N.key===null?x:N.key)||null,u(T,S,N,L);case pi:return S=S.get(N.key===null?x:N.key)||null,c(T,S,N,L);case Fr:var U=N._init;return k(S,T,x,U(N._payload),L)}if(bo(N)||vo(N))return S=S.get(x)||null,f(T,S,N,L,null);cl(T,N)}return null}function R(S,T,x,N){for(var L=null,U=null,I=T,v=T=0,m=null;I!==null&&v<x.length;v++){I.index>v?(m=I,I=null):m=I.sibling;var w=y(S,I,x[v],N);if(w===null){I===null&&(I=m);break}t&&I&&w.alternate===null&&e(S,I),T=i(w,T,v),U===null?L=w:U.sibling=w,U=w,I=m}if(v===x.length)return n(S,I),Je&&Rs(S,v),L;if(I===null){for(;v<x.length;v++)I=p(S,x[v],N),I!==null&&(T=i(I,T,v),U===null?L=I:U.sibling=I,U=I);return Je&&Rs(S,v),L}for(I=r(S,I);v<x.length;v++)m=k(I,S,v,x[v],N),m!==null&&(t&&m.alternate!==null&&I.delete(m.key===null?v:m.key),T=i(m,T,v),U===null?L=m:U.sibling=m,U=m);return t&&I.forEach(function(A){return e(S,A)}),Je&&Rs(S,v),L}function P(S,T,x,N){var L=vo(x);if(typeof L!="function")throw Error(F(150));if(x=L.call(x),x==null)throw Error(F(151));for(var U=L=null,I=T,v=T=0,m=null,w=x.next();I!==null&&!w.done;v++,w=x.next()){I.index>v?(m=I,I=null):m=I.sibling;var A=y(S,I,w.value,N);if(A===null){I===null&&(I=m);break}t&&I&&A.alternate===null&&e(S,I),T=i(A,T,v),U===null?L=A:U.sibling=A,U=A,I=m}if(w.done)return n(S,I),Je&&Rs(S,v),L;if(I===null){for(;!w.done;v++,w=x.next())w=p(S,w.value,N),w!==null&&(T=i(w,T,v),U===null?L=w:U.sibling=w,U=w);return Je&&Rs(S,v),L}for(I=r(S,I);!w.done;v++,w=x.next())w=k(I,S,v,w.value,N),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?v:w.key),T=i(w,T,v),U===null?L=w:U.sibling=w,U=w);return t&&I.forEach(function(C){return e(S,C)}),Je&&Rs(S,v),L}function O(S,T,x,N){if(typeof x=="object"&&x!==null&&x.type===mi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:e:{for(var L=x.key,U=T;U!==null;){if(U.key===L){if(L=x.type,L===mi){if(U.tag===7){n(S,U.sibling),T=s(U,x.props.children),T.return=S,S=T;break e}}else if(U.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Fr&&cg(L)===U.type){n(S,U.sibling),T=s(U,x.props),T.ref=So(S,U,x),T.return=S,S=T;break e}n(S,U);break}else e(S,U);U=U.sibling}x.type===mi?(T=js(x.props.children,S.mode,N,x.key),T.return=S,S=T):(N=Ml(x.type,x.key,x.props,null,S.mode,N),N.ref=So(S,T,x),N.return=S,S=N)}return o(S);case pi:e:{for(U=x.key;T!==null;){if(T.key===U)if(T.tag===4&&T.stateNode.containerInfo===x.containerInfo&&T.stateNode.implementation===x.implementation){n(S,T.sibling),T=s(T,x.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=sh(x,S.mode,N),T.return=S,S=T}return o(S);case Fr:return U=x._init,O(S,T,U(x._payload),N)}if(bo(x))return R(S,T,x,N);if(vo(x))return P(S,T,x,N);cl(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,T!==null&&T.tag===6?(n(S,T.sibling),T=s(T,x),T.return=S,S=T):(n(S,T),T=rh(x,S.mode,N),T.return=S,S=T),o(S)):n(S,T)}return O}var Bi=G0(!0),W0=G0(!1),lu=ws(null),uu=null,Ii=null,df=null;function ff(){df=Ii=uu=null}function pf(t){var e=lu.current;Qe(lu),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){uu=t,df=Ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},Ii===null){if(uu===null)throw Error(F(308));Ii=t,uu.dependencies={lanes:0,firstContext:t}}else Ii=Ii.next=t;return e}var Ds=null;function mf(t){Ds===null?Ds=[t]:Ds.push(t)}function K0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,mf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Ir(t,r)}function Ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $r=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Ir(t,n)}return s=r.interleaved,s===null?(e.next=e,mf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Ir(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}function hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cu(t,e,n,r){var s=t.updateQueue;$r=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=c=u=null,l=i;do{var y=l.lane,k=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(y=e,k=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(k,p,y);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,y=typeof R=="function"?R.call(k,p,y):R,y==null)break e;p=nt({},p,y);break e;case 2:$r=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=k,u=p):f=f.next=k,o|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Hs|=o,t.lanes=o,t.memoizedState=p}}function dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var ba={},er=ws(ba),ua=ws(ba),ca=ws(ba);function Os(t){if(t===ba)throw Error(F(174));return t}function yf(t,e){switch(He(ca,e),He(ua,t),He(er,ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bh(e,t)}Qe(er),He(er,e)}function zi(){Qe(er),Qe(ua),Qe(ca)}function Y0(t){Os(ca.current);var e=Os(er.current),n=bh(e,t.type);e!==n&&(He(ua,t),He(er,n))}function _f(t){ua.current===t&&(Qe(er),Qe(ua))}var et=ws(0);function hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function vf(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Pl=Rr.ReactCurrentDispatcher,Xc=Rr.ReactCurrentBatchConfig,zs=0,tt=null,wt=null,Rt=null,du=!1,$o=!1,ha=0,qI=0;function Ut(){throw Error(F(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Ef(t,e,n,r,s,i){if(zs=i,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?QI:YI,t=n(r,s),$o){i=0;do{if($o=!1,ha=0,25<=i)throw Error(F(301));i+=1,Rt=wt=null,e.updateQueue=null,Pl.current=JI,t=n(r,s)}while($o)}if(Pl.current=fu,e=wt!==null&&wt.next!==null,zs=0,Rt=wt=tt=null,du=!1,e)throw Error(F(300));return t}function Tf(){var t=ha!==0;return ha=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?tt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function bn(){if(wt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Rt===null?tt.memoizedState:Rt.next;if(e!==null)Rt=e,wt=t;else{if(t===null)throw Error(F(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Rt===null?tt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function da(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=bn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=wt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((zs&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,tt.lanes|=f,Hs|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Bn(r,e.memoizedState)||(on=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,tt.lanes|=i,Hs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eh(t){var e=bn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Bn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function J0(){}function X0(t,e){var n=tt,r=bn(),s=e(),i=!Bn(r.memoizedState,s);if(i&&(r.memoizedState=s,on=!0),r=r.queue,If(tv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,fa(9,ev.bind(null,n,r,s,e),void 0,null),bt===null)throw Error(F(349));zs&30||Z0(n,e,s)}return s}function Z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ev(t,e,n,r){e.value=n,e.getSnapshot=r,nv(e)&&rv(t)}function tv(t,e,n){return n(function(){nv(e)&&rv(t)})}function nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function rv(t){var e=Ir(t,1);e!==null&&Un(e,t,1,-1)}function fg(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=KI.bind(null,tt,t),[e.memoizedState,t]}function fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sv(){return bn().memoizedState}function Nl(t,e,n,r){var s=Kn();tt.flags|=t,s.memoizedState=fa(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var s=bn();r=r===void 0?null:r;var i=void 0;if(wt!==null){var o=wt.memoizedState;if(i=o.destroy,r!==null&&wf(r,o.deps)){s.memoizedState=fa(e,n,i,r);return}}tt.flags|=t,s.memoizedState=fa(1|e,n,i,r)}function pg(t,e){return Nl(8390656,8,t,e)}function If(t,e){return qu(2048,8,t,e)}function iv(t,e){return qu(4,2,t,e)}function ov(t,e){return qu(4,4,t,e)}function av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lv(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,av.bind(null,e,t),n)}function Sf(){}function uv(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cv(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hv(t,e,n){return zs&21?(Bn(n,e)||(n=g0(),tt.lanes|=n,Hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function GI(t,e){var n=Oe;Oe=n!==0&&4>n?n:4,t(!0);var r=Xc.transition;Xc.transition={};try{t(!1),e()}finally{Oe=n,Xc.transition=r}}function dv(){return bn().memoizedState}function WI(t,e,n){var r=rs(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fv(t))pv(e,n);else if(n=K0(t,e,n,r),n!==null){var s=Zt();Un(n,t,r,s),mv(n,e,r)}}function KI(t,e,n){var r=rs(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fv(t))pv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Bn(l,o)){var u=e.interleaved;u===null?(s.next=s,mf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=K0(t,e,s,r),n!==null&&(s=Zt(),Un(n,t,r,s),mv(n,e,r))}}function fv(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function pv(t,e){$o=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}var fu={readContext:Rn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},QI={readContext:Rn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WI.bind(null,tt,t),[r.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:Sf,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=GI.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=tt,s=Kn();if(Je){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),bt===null)throw Error(F(349));zs&30||Z0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,pg(tv.bind(null,r,i,t),[t]),r.flags|=2048,fa(9,ev.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Kn(),e=bt.identifierPrefix;if(Je){var n=gr,r=mr;n=(r&~(1<<32-jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YI={readContext:Rn,useCallback:uv,useContext:Rn,useEffect:If,useImperativeHandle:lv,useInsertionEffect:iv,useLayoutEffect:ov,useMemo:cv,useReducer:Zc,useRef:sv,useState:function(){return Zc(da)},useDebugValue:Sf,useDeferredValue:function(t){var e=bn();return hv(e,wt.memoizedState,t)},useTransition:function(){var t=Zc(da)[0],e=bn().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:X0,useId:dv,unstable_isNewReconciler:!1},JI={readContext:Rn,useCallback:uv,useContext:Rn,useEffect:If,useImperativeHandle:lv,useInsertionEffect:iv,useLayoutEffect:ov,useMemo:cv,useReducer:eh,useRef:sv,useState:function(){return eh(da)},useDebugValue:Sf,useDeferredValue:function(t){var e=bn();return wt===null?e.memoizedState=t:hv(e,wt.memoizedState,t)},useTransition:function(){var t=eh(da)[0],e=bn().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:X0,useId:dv,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Zt(),s=rs(t),i=vr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ts(t,i,s),e!==null&&(Un(e,t,s,r),bl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Zt(),s=rs(t),i=vr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ts(t,i,s),e!==null&&(Un(e,t,s,r),bl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),r=rs(t),s=vr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ts(t,s,r),e!==null&&(Un(e,t,r,n),bl(e,t,r))}};function mg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,r)||!ia(s,i):!0}function gv(t,e,n){var r=!1,s=hs,i=e.contextType;return typeof i=="object"&&i!==null?i=Rn(i):(s=ln(e)?$s:Wt.current,r=e.contextTypes,i=(r=r!=null)?Fi(t,s):hs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},gf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Rn(i):(i=ln(e)?$s:Wt.current,s.context=Fi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Gu.enqueueReplaceState(s,s.state,null),cu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Hi(t,e){try{var n="",r=e;do n+=AT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XI=typeof WeakMap=="function"?WeakMap:Map;function yv(t,e,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mu||(mu=!0,ud=r),Zh(t,e)},n}function _v(t,e,n){n=vr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Zh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=dS.bind(null,t,e,n),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vr(-1,1),e.tag=2,ts(n,e,1))),n.lanes|=1),t)}var ZI=Rr.ReactCurrentOwner,on=!1;function Jt(t,e,n,r){e.child=t===null?W0(e,null,n,r):Bi(e,t.child,n,r)}function wg(t,e,n,r,s){n=n.render;var i=e.ref;return bi(e,s),r=Ef(t,e,n,r,i,s),n=Tf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Sr(t,e,s)):(Je&&n&&uf(e),e.flags|=1,Jt(t,e,r,s),e.child)}function Eg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Nf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,vv(t,e,i,r,s)):(t=Ml(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,r)&&t.ref===e.ref)return Sr(t,e,s)}return e.flags|=1,t=ss(i,r),t.ref=e.ref,t.return=e,e.child=t}function vv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ia(i,r)&&t.ref===e.ref)if(on=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Sr(t,e,s)}return ed(t,e,n,r,s)}function wv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Ai,fn),fn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,He(Ai,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,He(Ai,fn),fn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,He(Ai,fn),fn|=r;return Jt(t,e,s,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,s){var i=ln(n)?$s:Wt.current;return i=Fi(e,i),bi(e,s),n=Ef(t,e,n,r,i,s),r=Tf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Sr(t,e,s)):(Je&&r&&uf(e),e.flags|=1,Jt(t,e,n,s),e.child)}function Tg(t,e,n,r,s){if(ln(n)){var i=!0;iu(e)}else i=!1;if(bi(e,s),e.stateNode===null)Dl(t,e),gv(e,n,r),Xh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=ln(n)?$s:Wt.current,c=Fi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&gg(e,o,r,c),$r=!1;var y=e.memoizedState;o.state=y,cu(e,r,o,s),u=e.memoizedState,l!==r||y!==u||an.current||$r?(typeof f=="function"&&(Jh(e,n,f,r),u=e.memoizedState),(l=$r||mg(e,n,l,r,y,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Dn(e.type,l),o.props=c,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rn(u):(u=ln(n)?$s:Wt.current,u=Fi(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&gg(e,o,r,u),$r=!1,y=e.memoizedState,o.state=y,cu(e,r,o,s);var R=e.memoizedState;l!==p||y!==R||an.current||$r?(typeof k=="function"&&(Jh(e,n,k,r),R=e.memoizedState),(c=$r||mg(e,n,c,r,y,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,i,s)}function td(t,e,n,r,s,i){Ev(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ag(e,n,!1),Sr(t,e,i);r=e.stateNode,ZI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,i),e.child=Bi(e,null,l,i)):Jt(t,e,l,i),e.memoizedState=r.state,s&&ag(e,n,!0),e.child}function Tv(t){var e=t.stateNode;e.pendingContext?og(t,e.pendingContext,e.pendingContext!==e.context):e.context&&og(t,e.context,!1),yf(t,e.containerInfo)}function Ig(t,e,n,r,s){return $i(),hf(s),e.flags|=256,Jt(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iv(t,e,n){var r=e.pendingProps,s=et.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),He(et,s&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Qu(o,r,0,null),t=js(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=rd(n),e.memoizedState=nd,t):Af(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return eS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ss(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ss(l,i):(i=js(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return i=t.child,t=i.sibling,r=ss(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,r){return r!==null&&hf(r),Bi(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=th(Error(F(422))),hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Qu({mode:"visible",children:r.children},s,0,null),i=js(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,i);if(!(e.mode&1))return hl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=th(i,r,void 0),hl(t,e,o,r)}if(l=(o&t.childLanes)!==0,on||l){if(r=bt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ir(t,s),Un(r,t,s,-1))}return Pf(),r=th(Error(F(421))),hl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,pn=es(s.nextSibling),mn=e,Je=!0,Vn=null,t!==null&&(En[Tn++]=mr,En[Tn++]=gr,En[Tn++]=Bs,mr=t.id,gr=t.overflow,Bs=e),e=Af(e,r.children),e.flags|=4096,e)}function Sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yh(t.return,e,n)}function nh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Sv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Jt(t,e,r.children,n),r=et.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,n,e);else if(t.tag===19)Sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(He(et,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&hu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),nh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&hu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}nh(e,!0,n,null,i);break;case"together":nh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ss(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ss(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tS(t,e,n){switch(e.tag){case 3:Tv(e),$i();break;case 5:Y0(e);break;case 1:ln(e.type)&&iu(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;He(lu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(He(et,et.current&1),e.flags|=128,null):n&e.child.childLanes?Iv(t,e,n):(He(et,et.current&1),t=Sr(t,e,n),t!==null?t.sibling:null);He(et,et.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),He(et,et.current),r)break;return null;case 22:case 23:return e.lanes=0,wv(t,e,n)}return Sr(t,e,n)}var Av,sd,xv,kv;Av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};xv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Os(er.current);var i=null;switch(n){case"input":s=xh(t,s),r=xh(t,r),i=[];break;case"select":s=nt({},s,{value:void 0}),r=nt({},r,{value:void 0}),i=[];break;case"textarea":s=Rh(t,s),r=Rh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ru)}Ph(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&We("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};kv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ao(t,e){if(!Je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nS(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return ln(e.type)&&su(),Ft(e),null;case 3:return r=e.stateNode,zi(),Qe(an),Qe(Wt),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(dd(Vn),Vn=null))),sd(t,e),Ft(e),null;case 5:_f(e);var s=Os(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)xv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ft(e),null}if(t=Os(er.current),ul(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Jn]=e,r[la]=i,t=(e.mode&1)!==0,n){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(s=0;s<No.length;s++)We(No[s],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":Dm(r,i),We("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},We("invalid",r);break;case"textarea":Vm(r,i),We("invalid",r)}Ph(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,l,t),s=["children",""+l]):Xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&We("scroll",r)}switch(n){case"input":el(r),Om(r,i,!0);break;case"textarea":el(r),Mm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ru)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jn]=e,t[la]=r,Av(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nh(n,r),n){case"dialog":We("cancel",t),We("close",t),s=r;break;case"iframe":case"object":case"embed":We("load",t),s=r;break;case"video":case"audio":for(s=0;s<No.length;s++)We(No[s],t);s=r;break;case"source":We("error",t),s=r;break;case"img":case"image":case"link":We("error",t),We("load",t),s=r;break;case"details":We("toggle",t),s=r;break;case"input":Dm(t,r),s=xh(t,r),We("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=nt({},r,{value:void 0}),We("invalid",t);break;case"textarea":Vm(t,r),s=Rh(t,r),We("invalid",t);break;default:s=r}Ph(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?s0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&n0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(t,u):typeof u=="number"&&Zo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&We("scroll",t):u!=null&&Kd(t,i,u,o))}switch(n){case"input":el(t),Om(t,r,!1);break;case"textarea":el(t),Mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?xi(t,!!r.multiple,i,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ru)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)kv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Os(ca.current),Os(er.current),ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jn]=e,(i=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jn]=e,e.stateNode=r}return Ft(e),null;case 13:if(Qe(et),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Je&&pn!==null&&e.mode&1&&!(e.flags&128))q0(),$i(),e.flags|=98560,i=!1;else if(i=ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Jn]=e}else $i(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),i=!1}else Vn!==null&&(dd(Vn),Vn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||et.current&1?Et===0&&(Et=3):Pf())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return zi(),sd(t,e),t===null&&oa(e.stateNode.containerInfo),Ft(e),null;case 10:return pf(e.type._context),Ft(e),null;case 17:return ln(e.type)&&su(),Ft(e),null;case 19:if(Qe(et),i=e.memoizedState,i===null)return Ft(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ao(i,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hu(t),o!==null){for(e.flags|=128,Ao(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return He(et,et.current&1|2),e.child}t=t.sibling}i.tail!==null&&ut()>qi&&(e.flags|=128,r=!0,Ao(i,!1),e.lanes=4194304)}else{if(!r)if(t=hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Je)return Ft(e),null}else 2*ut()-i.renderingStartTime>qi&&n!==1073741824&&(e.flags|=128,r=!0,Ao(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ut(),e.sibling=null,n=et.current,He(et,r?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return bf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?fn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function rS(t,e){switch(cf(e),e.tag){case 1:return ln(e.type)&&su(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(),Qe(an),Qe(Wt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(Qe(et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));$i()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(et),null;case 4:return zi(),null;case 10:return pf(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var dl=!1,qt=!1,sS=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ot(t,e,r)}else n.current=null}function id(t,e,n){try{n()}catch(r){ot(t,e,r)}}var Ag=!1;function iS(t,e){if(Bh=eu,t=N0(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,y=null;t:for(;;){for(var k;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)y=p,p=k;for(;;){if(p===t)break t;if(y===n&&++c===s&&(l=o),y===i&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:t,selectionRange:n},eu=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,O=R.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Dn(e.type,P),O);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(N){ot(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=Ag,Ag=!1,R}function Bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&id(e,n,i)}s=s.next}while(s!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cv(t){var e=t.alternate;e!==null&&(t.alternate=null,Cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[la],delete e[Gh],delete e[$I],delete e[BI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rv(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ru));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Pt=null,On=!1;function jr(t,e,n){for(n=n.child;n!==null;)bv(t,e,n),n=n.sibling}function bv(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:qt||Si(n,e);case 6:var r=Pt,s=On;Pt=null,jr(t,e,n),Pt=r,On=s,Pt!==null&&(On?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(On?(t=Pt,n=n.stateNode,t.nodeType===8?Qc(t.parentNode,n):t.nodeType===1&&Qc(t,n),ra(t)):Qc(Pt,n.stateNode));break;case 4:r=Pt,s=On,Pt=n.stateNode.containerInfo,On=!0,jr(t,e,n),Pt=r,On=s;break;case 0:case 11:case 14:case 15:if(!qt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&id(n,e,o),s=s.next}while(s!==r)}jr(t,e,n);break;case 1:if(!qt&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ot(n,e,l)}jr(t,e,n);break;case 21:jr(t,e,n);break;case 22:n.mode&1?(qt=(r=qt)||n.memoizedState!==null,jr(t,e,n),qt=r):jr(t,e,n);break;default:jr(t,e,n)}}function kg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sS),e.forEach(function(r){var s=pS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Pt=l.stateNode,On=!1;break e;case 3:Pt=l.stateNode.containerInfo,On=!0;break e;case 4:Pt=l.stateNode.containerInfo,On=!0;break e}l=l.return}if(Pt===null)throw Error(F(160));bv(i,o,s),Pt=null,On=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){ot(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pv(e,t),e=e.sibling}function Pv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Wn(t),r&4){try{Bo(3,t,t.return),Wu(3,t)}catch(P){ot(t,t.return,P)}try{Bo(5,t,t.return)}catch(P){ot(t,t.return,P)}}break;case 1:Nn(e,t),Wn(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Nn(e,t),Wn(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var s=t.stateNode;try{Zo(s,"")}catch(P){ot(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Z_(s,i),Nh(l,o);var c=Nh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?s0(s,p):f==="dangerouslySetInnerHTML"?n0(s,p):f==="children"?Zo(s,p):Kd(s,f,p,c)}switch(l){case"input":kh(s,i);break;case"textarea":e0(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?xi(s,!!i.multiple,k,!1):y!==!!i.multiple&&(i.defaultValue!=null?xi(s,!!i.multiple,i.defaultValue,!0):xi(s,!!i.multiple,i.multiple?[]:"",!1))}s[la]=i}catch(P){ot(t,t.return,P)}}break;case 6:if(Nn(e,t),Wn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){ot(t,t.return,P)}}break;case 3:if(Nn(e,t),Wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(P){ot(t,t.return,P)}break;case 4:Nn(e,t),Wn(t);break;case 13:Nn(e,t),Wn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Cf=ut())),r&4&&kg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||f,Nn(e,t),qt=c):Nn(e,t),Wn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(p=Q=f;Q!==null;){switch(y=Q,k=y.child,y.tag){case 0:case 11:case 14:case 15:Bo(4,y,y.return);break;case 1:Si(y,y.return);var R=y.stateNode;if(typeof R.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){ot(r,n,P)}}break;case 5:Si(y,y.return);break;case 22:if(y.memoizedState!==null){Rg(p);continue}}k!==null?(k.return=y,Q=k):Rg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=r0("display",o))}catch(P){ot(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){ot(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Nn(e,t),Wn(t),r&4&&kg(t);break;case 21:break;default:Nn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Zo(s,""),r.flags&=-33);var i=xg(t);ld(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xg(t);ad(t,l,o);break;default:throw Error(F(161))}}catch(u){ot(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oS(t,e,n){Q=t,Nv(t)}function Nv(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||dl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||qt;l=dl;var c=qt;if(dl=o,(qt=u)&&!c)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?bg(s):u!==null?(u.return=o,Q=u):bg(s);for(;i!==null;)Q=i,Nv(i),i=i.sibling;Q=s,dl=l,qt=c}Cg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):Cg(t)}}function Cg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&dg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}qt||e.flags&512&&od(e)}catch(y){ot(e,e.return,y)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Rg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function bg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(u){ot(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ot(e,s,u)}}var i=e.return;try{od(e)}catch(u){ot(e,i,u)}break;case 5:var o=e.return;try{od(e)}catch(u){ot(e,o,u)}}}catch(u){ot(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var aS=Math.ceil,pu=Rr.ReactCurrentDispatcher,xf=Rr.ReactCurrentOwner,Cn=Rr.ReactCurrentBatchConfig,Pe=0,bt=null,pt=null,Ot=0,fn=0,Ai=ws(0),Et=0,pa=null,Hs=0,Ku=0,kf=0,zo=null,sn=null,Cf=0,qi=1/0,cr=null,mu=!1,ud=null,ns=null,fl=!1,Qr=null,gu=0,Ho=0,cd=null,Ol=-1,Vl=0;function Zt(){return Pe&6?ut():Ol!==-1?Ol:Ol=ut()}function rs(t){return t.mode&1?Pe&2&&Ot!==0?Ot&-Ot:HI.transition!==null?(Vl===0&&(Vl=g0()),Vl):(t=Oe,t!==0||(t=window.event,t=t===void 0?16:I0(t.type)),t):1}function Un(t,e,n,r){if(50<Ho)throw Ho=0,cd=null,Error(F(185));ka(t,n,r),(!(Pe&2)||t!==bt)&&(t===bt&&(!(Pe&2)&&(Ku|=n),Et===4&&zr(t,Ot)),un(t,r),n===1&&Pe===0&&!(e.mode&1)&&(qi=ut()+500,Hu&&Es()))}function un(t,e){var n=t.callbackNode;HT(t,e);var r=Zl(t,t===bt?Ot:0);if(r===0)n!==null&&Um(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Um(n),e===1)t.tag===0?zI(Pg.bind(null,t)):B0(Pg.bind(null,t)),UI(function(){!(Pe&6)&&Es()}),n=null;else{switch(y0(r)){case 1:n=Zd;break;case 4:n=p0;break;case 16:n=Xl;break;case 536870912:n=m0;break;default:n=Xl}n=Fv(n,Dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dv(t,e){if(Ol=-1,Vl=0,Pe&6)throw Error(F(327));var n=t.callbackNode;if(Pi()&&t.callbackNode!==n)return null;var r=Zl(t,t===bt?Ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yu(t,r);else{e=r;var s=Pe;Pe|=2;var i=Vv();(bt!==t||Ot!==e)&&(cr=null,qi=ut()+500,Ls(t,e));do try{cS();break}catch(l){Ov(t,l)}while(!0);ff(),pu.current=i,Pe=s,pt!==null?e=0:(bt=null,Ot=0,e=Et)}if(e!==0){if(e===2&&(s=Lh(t),s!==0&&(r=s,e=hd(t,s))),e===1)throw n=pa,Ls(t,0),zr(t,r),un(t,ut()),n;if(e===6)zr(t,r);else{if(s=t.current.alternate,!(r&30)&&!lS(s)&&(e=yu(t,r),e===2&&(i=Lh(t),i!==0&&(r=i,e=hd(t,i))),e===1))throw n=pa,Ls(t,0),zr(t,r),un(t,ut()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:bs(t,sn,cr);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=Cf+500-ut(),10<e)){if(Zl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Zt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qh(bs.bind(null,t,sn,cr),e);break}bs(t,sn,cr);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-jn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ut()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aS(r/1960))-r,10<r){t.timeoutHandle=qh(bs.bind(null,t,sn,cr),r);break}bs(t,sn,cr);break;case 5:bs(t,sn,cr);break;default:throw Error(F(329))}}}return un(t,ut()),t.callbackNode===n?Dv.bind(null,t):null}function hd(t,e){var n=zo;return t.current.memoizedState.isDehydrated&&(Ls(t,e).flags|=256),t=yu(t,e),t!==2&&(e=sn,sn=n,e!==null&&dd(e)),t}function dd(t){sn===null?sn=t:sn.push.apply(sn,t)}function lS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Bn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~kf,e&=~Ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),r=1<<n;t[n]=-1,e&=~r}}function Pg(t){if(Pe&6)throw Error(F(327));Pi();var e=Zl(t,0);if(!(e&1))return un(t,ut()),null;var n=yu(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=pa,Ls(t,0),zr(t,e),un(t,ut()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bs(t,sn,cr),un(t,ut()),null}function Rf(t,e){var n=Pe;Pe|=1;try{return t(e)}finally{Pe=n,Pe===0&&(qi=ut()+500,Hu&&Es())}}function qs(t){Qr!==null&&Qr.tag===0&&!(Pe&6)&&Pi();var e=Pe;Pe|=1;var n=Cn.transition,r=Oe;try{if(Cn.transition=null,Oe=1,t)return t()}finally{Oe=r,Cn.transition=n,Pe=e,!(Pe&6)&&Es()}}function bf(){fn=Ai.current,Qe(Ai)}function Ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jI(n)),pt!==null)for(n=pt.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&su();break;case 3:zi(),Qe(an),Qe(Wt),vf();break;case 5:_f(r);break;case 4:zi();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:pf(r.type._context);break;case 22:case 23:bf()}n=n.return}if(bt=t,pt=t=ss(t.current,null),Ot=fn=e,Et=0,pa=null,kf=Ku=Hs=0,sn=zo=null,Ds!==null){for(e=0;e<Ds.length;e++)if(n=Ds[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ds=null}return t}function Ov(t,e){do{var n=pt;try{if(ff(),Pl.current=fu,du){for(var r=tt.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}du=!1}if(zs=0,Rt=wt=tt=null,$o=!1,ha=0,xf.current=null,n===null||n.return===null){Et=1,pa=e,pt=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ot,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=_g(o);if(k!==null){k.flags&=-257,vg(k,o,l,i,e),k.mode&1&&yg(i,c,e),e=k,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){yg(i,c,e),Pf();break e}u=Error(F(426))}}else if(Je&&l.mode&1){var O=_g(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),vg(O,o,l,i,e),hf(Hi(u,l));break e}}i=u=Hi(u,l),Et!==4&&(Et=2),zo===null?zo=[i]:zo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=yv(i,u,e);hg(i,S);break e;case 1:l=u;var T=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ns===null||!ns.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var N=_v(i,l,e);hg(i,N);break e}}i=i.return}while(i!==null)}Lv(n)}catch(L){e=L,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(!0)}function Vv(){var t=pu.current;return pu.current=fu,t===null?fu:t}function Pf(){(Et===0||Et===3||Et===2)&&(Et=4),bt===null||!(Hs&268435455)&&!(Ku&268435455)||zr(bt,Ot)}function yu(t,e){var n=Pe;Pe|=2;var r=Vv();(bt!==t||Ot!==e)&&(cr=null,Ls(t,e));do try{uS();break}catch(s){Ov(t,s)}while(!0);if(ff(),Pe=n,pu.current=r,pt!==null)throw Error(F(261));return bt=null,Ot=0,Et}function uS(){for(;pt!==null;)Mv(pt)}function cS(){for(;pt!==null&&!VT();)Mv(pt)}function Mv(t){var e=Uv(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?Lv(t):pt=e,xf.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rS(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,pt=null;return}}else if(n=nS(n,e,fn),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);Et===0&&(Et=5)}function bs(t,e,n){var r=Oe,s=Cn.transition;try{Cn.transition=null,Oe=1,hS(t,e,n,r)}finally{Cn.transition=s,Oe=r}return null}function hS(t,e,n,r){do Pi();while(Qr!==null);if(Pe&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(qT(t,i),t===bt&&(pt=bt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,Fv(Xl,function(){return Pi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Cn.transition,Cn.transition=null;var o=Oe;Oe=1;var l=Pe;Pe|=4,xf.current=null,iS(t,n),Pv(n,t),PI(zh),eu=!!Bh,zh=Bh=null,t.current=n,oS(n),MT(),Pe=l,Oe=o,Cn.transition=i}else t.current=n;if(fl&&(fl=!1,Qr=t,gu=s),i=t.pendingLanes,i===0&&(ns=null),UT(n.stateNode),un(t,ut()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(mu)throw mu=!1,t=ud,ud=null,t;return gu&1&&t.tag!==0&&Pi(),i=t.pendingLanes,i&1?t===cd?Ho++:(Ho=0,cd=t):Ho=0,Es(),null}function Pi(){if(Qr!==null){var t=y0(gu),e=Cn.transition,n=Oe;try{if(Cn.transition=null,Oe=16>t?16:t,Qr===null)var r=!1;else{if(t=Qr,Qr=null,gu=0,Pe&6)throw Error(F(331));var s=Pe;for(Pe|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Q=c;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:Bo(8,f,i)}var p=f.child;if(p!==null)p.return=f,Q=p;else for(;Q!==null;){f=Q;var y=f.sibling,k=f.return;if(Cv(f),f===c){Q=null;break}if(y!==null){y.return=k,Q=y;break}Q=k}}}var R=i.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var O=P.sibling;P.sibling=null,P=O}while(P!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bo(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,Q=S;break e}Q=i.return}}var T=t.current;for(Q=T;Q!==null;){o=Q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Q=x;else e:for(o=T;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wu(9,l)}}catch(L){ot(l,l.return,L)}if(l===o){Q=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,Q=N;break e}Q=l.return}}if(Pe=s,Es(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Uu,t)}catch{}r=!0}return r}finally{Oe=n,Cn.transition=e}}return!1}function Ng(t,e,n){e=Hi(n,e),e=yv(t,e,1),t=ts(t,e,1),e=Zt(),t!==null&&(ka(t,1,e),un(t,e))}function ot(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ns===null||!ns.has(r))){t=Hi(n,t),t=_v(e,t,1),e=ts(e,t,1),t=Zt(),e!==null&&(ka(e,1,t),un(e,t));break}}e=e.return}}function dS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Ot&n)===n&&(Et===4||Et===3&&(Ot&130023424)===Ot&&500>ut()-Cf?Ls(t,0):kf|=n),un(t,e)}function jv(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=Zt();t=Ir(t,e),t!==null&&(ka(t,e,n),un(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jv(t,n)}function pS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),jv(t,n)}var Uv;Uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,tS(t,e,n);on=!!(t.flags&131072)}else on=!1,Je&&e.flags&1048576&&z0(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dl(t,e),t=e.pendingProps;var s=Fi(e,Wt.current);bi(e,n),s=Ef(null,e,r,t,s,n);var i=Tf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(i=!0,iu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gf(e),s.updater=Gu,e.stateNode=s,s._reactInternals=e,Xh(e,r,t,n),e=td(null,e,r,!0,i,n)):(e.tag=0,Je&&i&&uf(e),Jt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=gS(r),t=Dn(r,t),s){case 0:e=ed(null,e,r,t,n);break e;case 1:e=Tg(null,e,r,t,n);break e;case 11:e=wg(null,e,r,t,n);break e;case 14:e=Eg(null,e,r,Dn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Dn(r,s),ed(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Dn(r,s),Tg(t,e,r,s,n);case 3:e:{if(Tv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Q0(t,e),cu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Hi(Error(F(423)),e),e=Ig(t,e,r,n,s);break e}else if(r!==s){s=Hi(Error(F(424)),e),e=Ig(t,e,r,n,s);break e}else for(pn=es(e.stateNode.containerInfo.firstChild),mn=e,Je=!0,Vn=null,n=W0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===s){e=Sr(t,e,n);break e}Jt(t,e,r,n)}e=e.child}return e;case 5:return Y0(e),t===null&&Qh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Hh(r,s)?o=null:i!==null&&Hh(r,i)&&(e.flags|=32),Ev(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return Iv(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):Jt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Dn(r,s),wg(t,e,r,s,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,He(lu,r._currentValue),r._currentValue=o,i!==null)if(Bn(i.value,o)){if(i.children===s.children&&!an.current){e=Sr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=vr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Yh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Jt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,bi(e,n),s=Rn(s),r=r(s),e.flags|=1,Jt(t,e,r,n),e.child;case 14:return r=e.type,s=Dn(r,e.pendingProps),s=Dn(r.type,s),Eg(t,e,r,s,n);case 15:return vv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Dn(r,s),Dl(t,e),e.tag=1,ln(r)?(t=!0,iu(e)):t=!1,bi(e,n),gv(e,r,s),Xh(e,r,s,n),td(null,e,r,!0,t,n);case 19:return Sv(t,e,n);case 22:return wv(t,e,n)}throw Error(F(156,e.tag))};function Fv(t,e){return f0(t,e)}function mS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,r){return new mS(t,e,n,r)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gS(t){if(typeof t=="function")return Nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Jd)return 14}return 2}function ss(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Nf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mi:return js(n.children,s,i,e);case Qd:o=8,s|=8;break;case Th:return t=kn(12,n,e,s|2),t.elementType=Th,t.lanes=i,t;case Ih:return t=kn(13,n,e,s),t.elementType=Ih,t.lanes=i,t;case Sh:return t=kn(19,n,e,s),t.elementType=Sh,t.lanes=i,t;case Y_:return Qu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K_:o=10;break e;case Q_:o=9;break e;case Yd:o=11;break e;case Jd:o=14;break e;case Fr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=kn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function js(t,e,n,r){return t=kn(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=kn(22,t,r,e),t.elementType=Y_,t.lanes=n,t.stateNode={isHidden:!1},t}function rh(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function sh(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,s,i,o,l,u){return t=new yS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=kn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(i),t}function _S(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $v(t){if(!t)return hs;t=t._reactInternals;e:{if(ei(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ln(n))return $0(t,n,e)}return e}function Bv(t,e,n,r,s,i,o,l,u){return t=Df(n,r,!0,t,s,i,o,l,u),t.context=$v(null),n=t.current,r=Zt(),s=rs(n),i=vr(r,s),i.callback=e??null,ts(n,i,s),t.current.lanes=s,ka(t,s,r),un(t,r),t}function Yu(t,e,n,r){var s=e.current,i=Zt(),o=rs(s);return n=$v(n),e.context===null?e.context=n:e.pendingContext=n,e=vr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ts(s,e,o),t!==null&&(Un(t,s,o,i),bl(t,s,o)),o}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){Dg(t,e),(t=t.alternate)&&Dg(t,e)}function vS(){return null}var zv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Ju.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Yu(t,e,null,null)};Ju.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qs(function(){Yu(null,t,null,null)}),e[Tr]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=w0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&T0(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Og(){}function wS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=_u(o);i.call(c)}}var o=Bv(e,r,t,0,null,!1,!1,"",Og);return t._reactRootContainer=o,t[Tr]=o.current,oa(t.nodeType===8?t.parentNode:t),qs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=_u(u);l.call(c)}}var u=Df(t,0,!1,null,null,!1,!1,"",Og);return t._reactRootContainer=u,t[Tr]=u.current,oa(t.nodeType===8?t.parentNode:t),qs(function(){Yu(e,u,n,r)}),u}function Zu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=_u(o);l.call(u)}}Yu(e,o,t,s)}else o=wS(n,e,t,s,r);return _u(o)}_0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Po(e.pendingLanes);n!==0&&(ef(e,n|1),un(e,ut()),!(Pe&6)&&(qi=ut()+500,Es()))}break;case 13:qs(function(){var r=Ir(t,1);if(r!==null){var s=Zt();Un(r,t,1,s)}}),Of(t,1)}};tf=function(t){if(t.tag===13){var e=Ir(t,134217728);if(e!==null){var n=Zt();Un(e,t,134217728,n)}Of(t,134217728)}};v0=function(t){if(t.tag===13){var e=rs(t),n=Ir(t,e);if(n!==null){var r=Zt();Un(n,t,e,r)}Of(t,e)}};w0=function(){return Oe};E0=function(t,e){var n=Oe;try{return Oe=t,e()}finally{Oe=n}};Oh=function(t,e,n){switch(e){case"input":if(kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=zu(r);if(!s)throw Error(F(90));X_(r),kh(r,s)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};a0=Rf;l0=qs;var ES={usingClientEntryPoint:!1,Events:[Ra,vi,zu,i0,o0,Rf]},xo={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TS={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h0(t),t===null?null:t.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||vS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Uu=pl.inject(TS),Zn=pl}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(F(200));return _S(t,e,null,n)};yn.createRoot=function(t,e){if(!Mf(t))throw Error(F(299));var n=!1,r="",s=zv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,s),t[Tr]=e.current,oa(t.nodeType===8?t.parentNode:t),new Vf(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=h0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return qs(t)};yn.hydrate=function(t,e,n){if(!Xu(e))throw Error(F(200));return Zu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=zv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bv(e,null,t,1,n??null,s,!1,i,o),t[Tr]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ju(e)};yn.render=function(t,e,n){if(!Xu(e))throw Error(F(200));return Zu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(F(40));return t._reactRootContainer?(qs(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tr]=null})}),!0):!1};yn.unstable_batchedUpdates=Rf;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Zu(t,e,n,!1,r)};yn.version="18.3.1-next-f1338f8080-20240426";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),H_.exports=yn;var IS=H_.exports,Vg=IS;wh.createRoot=Vg.createRoot,wh.hydrateRoot=Vg.hydrateRoot;/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=t=>{const e=AS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=ie.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>ie.createElement("svg",{ref:u,...xS,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:qv("lucide",s),...!i&&!kS(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,f])=>ie.createElement(c,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(t,e)=>{const n=ie.forwardRef(({className:r,...s},i)=>ie.createElement(CS,{ref:i,iconNode:e,className:qv(`lucide-${SS(Mg(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Mg(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],bS=we("binary",RS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Gv=we("brain",PS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Lg=we("calendar",NS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],OS=we("chevron-down",DS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],MS=we("chevron-left",VS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jS=we("chevron-right",LS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],FS=we("chevron-up",US);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],BS=we("circle-alert",$S);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],HS=we("circle-check",zS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],GS=we("clipboard-check",qS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Lf=we("clock",WS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],QS=we("cloud-upload",KS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],JS=we("component",YS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],jg=we("copy",XS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Wv=we("database",ZS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],tA=we("download",eA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],rA=we("flag",nA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],iA=we("folder-kanban",sA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Kv=we("globe",oA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],lA=we("layers",aA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],cA=we("lightbulb",uA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],dA=we("loader-circle",hA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ug=we("map-pin",fA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],mA=we("palette",pA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],yA=we("pen",gA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],vA=we("play",_A);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],EA=we("plus",wA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],IA=we("power",TA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],AA=we("refresh-ccw",SA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],kA=we("rotate-ccw",xA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],RA=we("save",CA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],PA=we("settings-2",bA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],DA=we("sparkles",NA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],VA=we("target",OA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],LA=we("trash-2",MA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Qv=we("trending-up",jA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],FA=we("users",UA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],BA=we("wand-sparkles",$A);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],HA=we("zap-off",zA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Yv=we("zap",qA),GA=()=>{};var Fg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},WA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|c>>6,k=c&63;u||(k=64,o||(y=64)),r.push(n[f],n[p],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new KA;const y=i<<2|l>>4;if(r.push(y),c!==64){const k=l<<4&240|c>>2;if(r.push(k),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class KA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QA=function(t){const e=Jv(t);return Xv.encodeByteArray(e,!0)},vu=function(t){return QA(t).replace(/\./g,"")},Zv=function(t){try{return Xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=()=>YA().__FIREBASE_DEFAULTS__,XA=()=>{if(typeof process>"u"||typeof Fg>"u")return;const t=Fg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zv(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return GA()||JA()||XA()||ZA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},e1=t=>{var e,n;return(n=(e=ec())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},t1=t=>{const e=e1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},n1=()=>{var t;return(t=ec())==null?void 0:t.config},r1=t=>{var e;return(e=ec())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[vu(JSON.stringify(n)),vu(JSON.stringify(o)),""].join(".")}const qo={};function tx(){const t={prod:[],emulator:[]};for(const e of Object.keys(qo))qo[e]?t.emulator.push(e):t.prod.push(e);return t}function nx(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let $g=!1;function Uf(t,e){if(typeof window>"u"||typeof document>"u"||!Ts(window.location.host)||qo[t]===e||qo[t]||$g)return;qo[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=tx().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,k){y.setAttribute("width","24"),y.setAttribute("id",k),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function c(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{$g=!0,o()},y}function f(y,k){y.setAttribute("id",k),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=nx(r),k=n("text"),R=document.getElementById(k)||document.createElement("span"),P=n("learnmore"),O=document.getElementById(P)||document.createElement("a"),S=n("preprendIcon"),T=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const x=y.element;l(x),f(O,P);const N=c();u(T,S),x.append(T,R,O,N),document.body.appendChild(x)}i?(R.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function sx(){var e;const t=(e=ec())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ix(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ox(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ax(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lx(){const t=Kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ux(){return!sx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cx(){try{return typeof indexedDB=="object"}catch{return!1}}function hx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="FirebaseError";class lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dx,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fx(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new lr(s,l,r)}}function fx(t,e){return t.replace(px,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const px=/\{\$([^}]+)}/g;function mx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bg(i)&&Bg(o)){if(!Gs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gx(t,e){const n=new yx(t,e);return n.subscribe.bind(n)}class yx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_x(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ih),s.error===void 0&&(s.error=ih),s.complete===void 0&&(s.complete=ih);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _x(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return t&&t._delegate?t._delegate:t}class ds{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ex;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ex(e))try{this.getOrInitializeService({instanceIdentifier:Ps})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ps){return this.instances.has(e)}getOptions(e=Ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ps){return this.component?this.component.multipleInstances?e:Ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wx(t){return t===Ps?void 0:t}function Ex(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const Ix={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},Sx=Se.INFO,Ax={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},xx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ax[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=Sx,this._logHandler=xx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ix[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const kx=(t,e)=>e.some(n=>t instanceof n);let zg,Hg;function Cx(){return zg||(zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rx(){return Hg||(Hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i1=new WeakMap,fd=new WeakMap,o1=new WeakMap,oh=new WeakMap,$f=new WeakMap;function bx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(is(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&i1.set(n,t)}).catch(()=>{}),$f.set(e,t),e}function Px(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||o1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return is(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nx(t){pd=t(pd)}function Dx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ah(this),e,...n);return o1.set(r,e.sort?e.sort():[e]),is(r)}:Rx().includes(t)?function(...e){return t.apply(ah(this),e),is(i1.get(this))}:function(...e){return is(t.apply(ah(this),e))}}function Ox(t){return typeof t=="function"?Dx(t):(t instanceof IDBTransaction&&Px(t),kx(t,Cx())?new Proxy(t,pd):t)}function is(t){if(t instanceof IDBRequest)return bx(t);if(oh.has(t))return oh.get(t);const e=Ox(t);return e!==t&&(oh.set(t,e),$f.set(e,t)),e}const ah=t=>$f.get(t);function Vx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=is(o);return r&&o.addEventListener("upgradeneeded",u=>{r(is(o.result),u.oldVersion,u.newVersion,is(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Mx=["get","getKey","getAll","getAllKeys","count"],Lx=["put","add","delete","clear"],lh=new Map;function qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Lx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Mx.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return lh.set(e,i),i}Nx(t=>({...t,get:(e,n,r)=>qg(e,n)||t.get(e,n,r),has:(e,n)=>!!qg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ux(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ux(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",Gg="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Ff("@firebase/app"),Fx="@firebase/app-compat",$x="@firebase/analytics-compat",Bx="@firebase/analytics",zx="@firebase/app-check-compat",Hx="@firebase/app-check",qx="@firebase/auth",Gx="@firebase/auth-compat",Wx="@firebase/database",Kx="@firebase/data-connect",Qx="@firebase/database-compat",Yx="@firebase/functions",Jx="@firebase/functions-compat",Xx="@firebase/installations",Zx="@firebase/installations-compat",ek="@firebase/messaging",tk="@firebase/messaging-compat",nk="@firebase/performance",rk="@firebase/performance-compat",sk="@firebase/remote-config",ik="@firebase/remote-config-compat",ok="@firebase/storage",ak="@firebase/storage-compat",lk="@firebase/firestore",uk="@firebase/ai",ck="@firebase/firestore-compat",hk="firebase",dk="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="[DEFAULT]",fk={[md]:"fire-core",[Fx]:"fire-core-compat",[Bx]:"fire-analytics",[$x]:"fire-analytics-compat",[Hx]:"fire-app-check",[zx]:"fire-app-check-compat",[qx]:"fire-auth",[Gx]:"fire-auth-compat",[Wx]:"fire-rtdb",[Kx]:"fire-data-connect",[Qx]:"fire-rtdb-compat",[Yx]:"fire-fn",[Jx]:"fire-fn-compat",[Xx]:"fire-iid",[Zx]:"fire-iid-compat",[ek]:"fire-fcm",[tk]:"fire-fcm-compat",[nk]:"fire-perf",[rk]:"fire-perf-compat",[sk]:"fire-rc",[ik]:"fire-rc-compat",[ok]:"fire-gcs",[ak]:"fire-gcs-compat",[lk]:"fire-fst",[ck]:"fire-fst-compat",[uk]:"fire-vertex","fire-js":"fire-js",[hk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map,pk=new Map,yd=new Map;function Wg(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ws(t){const e=t.name;if(yd.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of wu.values())Wg(n,t);for(const n of pk.values())Wg(n,t);return!0}function tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},os=new Pa("app","Firebase",mk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw os.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=dk;function a1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw os.create("bad-app-name",{appName:String(s)});if(n||(n=n1()),!n)throw os.create("no-options");const i=wu.get(s);if(i){if(Gs(n,i.options)&&Gs(r,i.config))return i;throw os.create("duplicate-app",{appName:s})}const o=new Tx(s);for(const u of yd.values())o.addComponent(u);const l=new gk(n,r,o);return wu.set(s,l),l}function Bf(t=gd){const e=wu.get(t);if(!e&&t===gd&&n1())return a1();if(!e)throw os.create("no-app",{appName:t});return e}function tr(t,e,n){let r=fk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(o.join(" "));return}Ws(new ds(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="firebase-heartbeat-database",_k=1,ma="firebase-heartbeat-store";let uh=null;function l1(){return uh||(uh=Vx(yk,_k,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw os.create("idb-open",{originalErrorMessage:t.message})})),uh}async function vk(t){try{const n=(await l1()).transaction(ma),r=await n.objectStore(ma).get(u1(t));return await n.done,r}catch(e){if(e instanceof lr)Ar.warn(e.message);else{const n=os.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(n.message)}}}async function Kg(t,e){try{const r=(await l1()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,u1(t)),await r.done}catch(n){if(n instanceof lr)Ar.warn(n.message);else{const r=os.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ar.warn(r.message)}}}function u1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=1024,Ek=30;class Tk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ek){const o=Ak(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qg(),{heartbeatsToSend:r,unsentEntries:s}=Ik(this._heartbeatsCache.heartbeats),i=vu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ar.warn(n),""}}}function Qg(){return new Date().toISOString().substring(0,10)}function Ik(t,e=wk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Sk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cx()?hx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yg(t){return vu(JSON.stringify({version:2,heartbeats:t})).length}function Ak(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){Ws(new ds("platform-logger",e=>new jx(e),"PRIVATE")),Ws(new ds("heartbeat",e=>new Tk(e),"PRIVATE")),tr(md,Gg,t),tr(md,Gg,"esm2020"),tr("fire-js","")}xk("");var kk="firebase",Ck="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(kk,Ck,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1="firebasestorage.googleapis.com",h1="storageBucket",Rk=2*60*1e3,bk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends lr{constructor(e,n,r=0){super(ch(e),`Firebase Storage: ${n} (${ch(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ht.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ch(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ct;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ct||(ct={}));function ch(t){return"storage/"+t}function zf(){const t="An unknown error occurred, please check the error payload for server response.";return new ht(ct.UNKNOWN,t)}function Pk(t){return new ht(ct.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Nk(t){return new ht(ct.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Dk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ht(ct.UNAUTHENTICATED,t)}function Ok(){return new ht(ct.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Vk(t){return new ht(ct.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Mk(){return new ht(ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lk(){return new ht(ct.CANCELED,"User canceled the upload/download.")}function jk(t){return new ht(ct.INVALID_URL,"Invalid URL '"+t+"'.")}function Uk(t){return new ht(ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Fk(){return new ht(ct.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h1+"' property when initializing the app?")}function $k(){return new ht(ct.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Bk(t){return new ht(ct.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _d(t){return new ht(ct.INVALID_ARGUMENT,t)}function d1(){return new ht(ct.APP_DELETED,"The Firebase app was deleted.")}function zk(t){return new ht(ct.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Go(t,e){return new ht(ct.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ko(t){throw new ht(ct.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(r.path==="")return r;throw Uk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",k=new RegExp(`^https?://${p}/${f}/b/${s}/o${y}`,"i"),R={bucket:1,path:3},P=n===c1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",S=new RegExp(`^https?://${P}/${s}/${O}`,"i"),x=[{regex:l,indices:u,postModify:i},{regex:k,indices:R,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<x.length;N++){const L=x[N],U=L.regex.exec(e);if(U){const I=U[L.indices.bucket];let v=U[L.indices.path];v||(v=""),r=new Xt(I,v),L.postModify(r);break}}if(r==null)throw jk(e);return r}}class Hk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...O){c||(c=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(k,u())},O)}function y(){i&&clearTimeout(i)}function k(O,...S){if(c){y();return}if(O){y(),f.call(null,O,...S);return}if(u()||o){y(),f.call(null,O,...S);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,p(x)}let R=!1;function P(O){R||(R=!0,y(),!c&&(s!==null?(O||(l=2),clearTimeout(s),p(0)):O||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function Gk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t){return t!==void 0}function Kk(t){return typeof t=="object"&&!Array.isArray(t)}function f1(t){return typeof t=="string"||t instanceof String}function Jg(t){return Hf()&&t instanceof Blob}function Hf(){return typeof Blob<"u"}function vd(t,e,n,r){if(r<e)throw _d(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _d(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Qk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Us;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Us||(Us={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,s,i,o,l,u,c,f,p,y=!0,k=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=y,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,P)=>{this.resolve_=R,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ml(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Us.NO_ERROR,u=i.getStatus();if(!l||Yk(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Us.ABORT;r(!1,new ml(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ml(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Wk(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=zf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?d1():Lk();o(u)}else{const u=Mk();o(u)}};this.canceled_?n(!1,new ml(!1,null,!0)):this.backoffId_=qk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Gk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ml{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Xk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Zk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nC(t,e,n,r,s,i,o=!0,l=!1){const u=Qk(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return eC(f,e),Xk(f,n),Zk(f,i),tC(f,r),new Jk(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sC(...t){const e=rC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Hf())return new Blob(t);throw new ht(ct.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){if(typeof atob>"u")throw Bk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hh{constructor(e,n){this.data=e,this.contentType=n||null}}function aC(t,e){switch(t){case Xn.RAW:return new hh(p1(e));case Xn.BASE64:case Xn.BASE64URL:return new hh(m1(t,e));case Xn.DATA_URL:return new hh(uC(e),cC(e))}throw zf()}function p1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lC(t){let e;try{e=decodeURIComponent(t)}catch{throw Go(Xn.DATA_URL,"Malformed data URL.")}return p1(e)}function m1(t,e){switch(t){case Xn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Go(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Xn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Go(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oC(e)}catch(s){throw s.message.includes("polyfill")?s:Go(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class g1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Go(Xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=hC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uC(t){const e=new g1(t);return e.base64?m1(Xn.BASE64,e.rest):lC(e.rest)}function cC(t){return new g1(t).contentType}function hC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){let r=0,s="";Jg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Jg(this.data_)){const r=this.data_,s=iC(r,e,n);return s===null?null:new Hr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Hr(r,!0)}}static getBlob(...e){if(Hf()){const n=e.map(r=>r instanceof Hr?r.data_:r);return new Hr(sC.apply(null,n))}else{const n=e.map(o=>f1(o)?aC(Xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Hr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){let e;try{e=JSON.parse(t)}catch{return null}return Kk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e){return e}class Yt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||pC}}let gl=null;function mC(t){return!f1(t)||t.length<2?t:_1(t)}function gC(){if(gl)return gl;const t=[];t.push(new Yt("bucket")),t.push(new Yt("generation")),t.push(new Yt("metageneration")),t.push(new Yt("name","fullPath",!0));function e(i,o){return mC(o)}const n=new Yt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Yt("size");return s.xform=r,t.push(s),t.push(new Yt("timeCreated")),t.push(new Yt("updated")),t.push(new Yt("md5Hash",null,!0)),t.push(new Yt("cacheControl",null,!0)),t.push(new Yt("contentDisposition",null,!0)),t.push(new Yt("contentEncoding",null,!0)),t.push(new Yt("contentLanguage",null,!0)),t.push(new Yt("contentType",null,!0)),t.push(new Yt("metadata","customMetadata",!0)),gl=t,gl}function yC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Xt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function _C(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return yC(r,t),r}function vC(t,e,n){const r=y1(e);return r===null?null:_C(t,r,n)}function wC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="prefixes",Zg="items";function EC(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Xg])for(const s of n[Xg]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new Xt(e,i));r.prefixes.push(o)}if(n[Zg])for(const s of n[Zg]){const i=t._makeStorageReference(new Xt(e,s.name));r.items.push(i)}return r}function TC(t,e,n){const r=y1(n);return r===null?null:EC(t,e,r)}class Gf{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t){if(!t)throw zf()}function IC(t,e){function n(r,s){const i=vC(t,s,e);return v1(i!==null),i}return n}function SC(t,e){function n(r,s){const i=TC(t,e,s);return v1(i!==null),i}return n}function Wf(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Ok():s=Dk():n.getStatus()===402?s=Nk(t.bucket):n.getStatus()===403?s=Vk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function AC(t){const e=Wf(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Pk(t.path)),i.serverResponse=s.serverResponse,i}return n}function xC(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),l=qf(o,t.host,t._protocol),u="GET",c=t.maxOperationRetryTime,f=new Gf(l,u,SC(t,e.bucket),c);return f.urlParams=i,f.errorHandler=Wf(e),f}function kC(t,e,n){const r=e.fullServerUrl(),s=qf(r,t.host,t._protocol)+"?alt=media",i="GET",o=t.maxOperationRetryTime,l=new Gf(s,i,(u,c)=>c,o);return l.errorHandler=AC(e),l}function CC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function RC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=CC(null,e)),r}function bC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let x="";for(let N=0;N<2;N++)x=x+Math.random().toString().slice(2);return x}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=RC(e,r,s),f=wC(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,y=`\r
--`+u+"--",k=Hr.getBlob(p,r,y);if(k===null)throw $k();const R={name:c.fullPath},P=qf(i,t.host,t._protocol),O="POST",S=t.maxUploadRetryTime,T=new Gf(P,O,IC(t,n),S);return T.urlParams=R,T.headers=o,T.body=k.uploadData(),T.errorHandler=Wf(e),T}class w1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ko("cannot .send() more than once");if(Ts(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ko("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ko("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ko("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ko("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PC extends w1{initXhr(){this.xhr_.responseType="text"}}function E1(){return new PC}class NC extends w1{initXhr(){this.xhr_.responseType="arraybuffer"}}function DC(){return new NC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ks(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _1(this._location.path)}get storage(){return this._service}get parent(){const e=dC(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new Ks(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zk(e)}}function OC(t,e){t._throwIfRoot("getBytes");const n=kC(t.storage,t._location);return t.storage.makeRequestWithTokens(n,DC).then(r=>r)}function VC(t,e,n){t._throwIfRoot("uploadBytes");const r=bC(t.storage,t._location,gC(),new Hr(e,!0),n);return t.storage.makeRequestWithTokens(r,E1).then(s=>({metadata:s,ref:t}))}function MC(t){const e={prefixes:[],items:[]};return T1(t,e).then(()=>e)}async function T1(t,e,n){const s=await LC(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await T1(t,e,s.nextPageToken)}function LC(t,e){e!=null&&typeof e.maxResults=="number"&&vd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=xC(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,E1)}function jC(t,e){const n=fC(t._location.path,e),r=new Xt(t._location.bucket,n);return new Ks(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){return/^[A-Za-z]+:\/\//.test(t)}function FC(t,e){return new Ks(t,e)}function I1(t,e){if(t instanceof Kf){const n=t;if(n._bucket==null)throw Fk();const r=new Ks(n,n._bucket);return e!=null?I1(r,e):r}else return e!==void 0?jC(t,e):t}function $C(t,e){if(e&&UC(e)){if(t instanceof Kf)return FC(t,e);throw _d("To use ref(service, url), the first argument must be a Storage instance.")}else return I1(t,e)}function ey(t,e){const n=e==null?void 0:e[h1];return n==null?null:Xt.makeFromBucketSpec(n,t)}function BC(t,e,n,r={}){t.host=`${e}:${n}`;const s=Ts(e);s&&(jf(`https://${t.host}/b`),Uf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:s1(i,t.app.options.projectId))}class Kf{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=c1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rk,this._maxUploadRetryTime=bk,this._requests=new Set,s!=null?this._bucket=Xt.makeFromBucketSpec(s,this._host):this._bucket=ey(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=ey(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(In(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ks(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Hk(d1());{const o=nC(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ty="@firebase/storage",ny="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t,e){return t=St(t),OC(t)}function HC(t,e,n){return t=St(t),VC(t,e,n)}function ry(t){return t=St(t),MC(t)}function Qf(t,e){return t=St(t),$C(t,e)}function qC(t=Bf(),e){t=St(t);const r=tc(t,S1).getImmediate({identifier:e}),s=t1("storage");return s&&GC(r,...s),r}function GC(t,e,n,r={}){BC(t,e,n,r)}function WC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Kf(n,r,s,e,ti)}function KC(){Ws(new ds(S1,WC,"PUBLIC").setMultipleInstances(!0)),tr(ty,ny,""),tr(ty,ny,"esm2020")}KC();var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,A1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function m(){}m.prototype=v.prototype,I.F=v.prototype,I.prototype=new m,I.prototype.constructor=I,I.D=function(w,A,C){for(var E=Array(arguments.length-2),X=2;X<arguments.length;X++)E[X-2]=arguments[X];return v.prototype[A].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,m){m||(m=0);const w=Array(16);if(typeof v=="string")for(var A=0;A<16;++A)w[A]=v.charCodeAt(m++)|v.charCodeAt(m++)<<8|v.charCodeAt(m++)<<16|v.charCodeAt(m++)<<24;else for(A=0;A<16;++A)w[A]=v[m++]|v[m++]<<8|v[m++]<<16|v[m++]<<24;v=I.g[0],m=I.g[1],A=I.g[2];let C=I.g[3],E;E=v+(C^m&(A^C))+w[0]+3614090360&4294967295,v=m+(E<<7&4294967295|E>>>25),E=C+(A^v&(m^A))+w[1]+3905402710&4294967295,C=v+(E<<12&4294967295|E>>>20),E=A+(m^C&(v^m))+w[2]+606105819&4294967295,A=C+(E<<17&4294967295|E>>>15),E=m+(v^A&(C^v))+w[3]+3250441966&4294967295,m=A+(E<<22&4294967295|E>>>10),E=v+(C^m&(A^C))+w[4]+4118548399&4294967295,v=m+(E<<7&4294967295|E>>>25),E=C+(A^v&(m^A))+w[5]+1200080426&4294967295,C=v+(E<<12&4294967295|E>>>20),E=A+(m^C&(v^m))+w[6]+2821735955&4294967295,A=C+(E<<17&4294967295|E>>>15),E=m+(v^A&(C^v))+w[7]+4249261313&4294967295,m=A+(E<<22&4294967295|E>>>10),E=v+(C^m&(A^C))+w[8]+1770035416&4294967295,v=m+(E<<7&4294967295|E>>>25),E=C+(A^v&(m^A))+w[9]+2336552879&4294967295,C=v+(E<<12&4294967295|E>>>20),E=A+(m^C&(v^m))+w[10]+4294925233&4294967295,A=C+(E<<17&4294967295|E>>>15),E=m+(v^A&(C^v))+w[11]+2304563134&4294967295,m=A+(E<<22&4294967295|E>>>10),E=v+(C^m&(A^C))+w[12]+1804603682&4294967295,v=m+(E<<7&4294967295|E>>>25),E=C+(A^v&(m^A))+w[13]+4254626195&4294967295,C=v+(E<<12&4294967295|E>>>20),E=A+(m^C&(v^m))+w[14]+2792965006&4294967295,A=C+(E<<17&4294967295|E>>>15),E=m+(v^A&(C^v))+w[15]+1236535329&4294967295,m=A+(E<<22&4294967295|E>>>10),E=v+(A^C&(m^A))+w[1]+4129170786&4294967295,v=m+(E<<5&4294967295|E>>>27),E=C+(m^A&(v^m))+w[6]+3225465664&4294967295,C=v+(E<<9&4294967295|E>>>23),E=A+(v^m&(C^v))+w[11]+643717713&4294967295,A=C+(E<<14&4294967295|E>>>18),E=m+(C^v&(A^C))+w[0]+3921069994&4294967295,m=A+(E<<20&4294967295|E>>>12),E=v+(A^C&(m^A))+w[5]+3593408605&4294967295,v=m+(E<<5&4294967295|E>>>27),E=C+(m^A&(v^m))+w[10]+38016083&4294967295,C=v+(E<<9&4294967295|E>>>23),E=A+(v^m&(C^v))+w[15]+3634488961&4294967295,A=C+(E<<14&4294967295|E>>>18),E=m+(C^v&(A^C))+w[4]+3889429448&4294967295,m=A+(E<<20&4294967295|E>>>12),E=v+(A^C&(m^A))+w[9]+568446438&4294967295,v=m+(E<<5&4294967295|E>>>27),E=C+(m^A&(v^m))+w[14]+3275163606&4294967295,C=v+(E<<9&4294967295|E>>>23),E=A+(v^m&(C^v))+w[3]+4107603335&4294967295,A=C+(E<<14&4294967295|E>>>18),E=m+(C^v&(A^C))+w[8]+1163531501&4294967295,m=A+(E<<20&4294967295|E>>>12),E=v+(A^C&(m^A))+w[13]+2850285829&4294967295,v=m+(E<<5&4294967295|E>>>27),E=C+(m^A&(v^m))+w[2]+4243563512&4294967295,C=v+(E<<9&4294967295|E>>>23),E=A+(v^m&(C^v))+w[7]+1735328473&4294967295,A=C+(E<<14&4294967295|E>>>18),E=m+(C^v&(A^C))+w[12]+2368359562&4294967295,m=A+(E<<20&4294967295|E>>>12),E=v+(m^A^C)+w[5]+4294588738&4294967295,v=m+(E<<4&4294967295|E>>>28),E=C+(v^m^A)+w[8]+2272392833&4294967295,C=v+(E<<11&4294967295|E>>>21),E=A+(C^v^m)+w[11]+1839030562&4294967295,A=C+(E<<16&4294967295|E>>>16),E=m+(A^C^v)+w[14]+4259657740&4294967295,m=A+(E<<23&4294967295|E>>>9),E=v+(m^A^C)+w[1]+2763975236&4294967295,v=m+(E<<4&4294967295|E>>>28),E=C+(v^m^A)+w[4]+1272893353&4294967295,C=v+(E<<11&4294967295|E>>>21),E=A+(C^v^m)+w[7]+4139469664&4294967295,A=C+(E<<16&4294967295|E>>>16),E=m+(A^C^v)+w[10]+3200236656&4294967295,m=A+(E<<23&4294967295|E>>>9),E=v+(m^A^C)+w[13]+681279174&4294967295,v=m+(E<<4&4294967295|E>>>28),E=C+(v^m^A)+w[0]+3936430074&4294967295,C=v+(E<<11&4294967295|E>>>21),E=A+(C^v^m)+w[3]+3572445317&4294967295,A=C+(E<<16&4294967295|E>>>16),E=m+(A^C^v)+w[6]+76029189&4294967295,m=A+(E<<23&4294967295|E>>>9),E=v+(m^A^C)+w[9]+3654602809&4294967295,v=m+(E<<4&4294967295|E>>>28),E=C+(v^m^A)+w[12]+3873151461&4294967295,C=v+(E<<11&4294967295|E>>>21),E=A+(C^v^m)+w[15]+530742520&4294967295,A=C+(E<<16&4294967295|E>>>16),E=m+(A^C^v)+w[2]+3299628645&4294967295,m=A+(E<<23&4294967295|E>>>9),E=v+(A^(m|~C))+w[0]+4096336452&4294967295,v=m+(E<<6&4294967295|E>>>26),E=C+(m^(v|~A))+w[7]+1126891415&4294967295,C=v+(E<<10&4294967295|E>>>22),E=A+(v^(C|~m))+w[14]+2878612391&4294967295,A=C+(E<<15&4294967295|E>>>17),E=m+(C^(A|~v))+w[5]+4237533241&4294967295,m=A+(E<<21&4294967295|E>>>11),E=v+(A^(m|~C))+w[12]+1700485571&4294967295,v=m+(E<<6&4294967295|E>>>26),E=C+(m^(v|~A))+w[3]+2399980690&4294967295,C=v+(E<<10&4294967295|E>>>22),E=A+(v^(C|~m))+w[10]+4293915773&4294967295,A=C+(E<<15&4294967295|E>>>17),E=m+(C^(A|~v))+w[1]+2240044497&4294967295,m=A+(E<<21&4294967295|E>>>11),E=v+(A^(m|~C))+w[8]+1873313359&4294967295,v=m+(E<<6&4294967295|E>>>26),E=C+(m^(v|~A))+w[15]+4264355552&4294967295,C=v+(E<<10&4294967295|E>>>22),E=A+(v^(C|~m))+w[6]+2734768916&4294967295,A=C+(E<<15&4294967295|E>>>17),E=m+(C^(A|~v))+w[13]+1309151649&4294967295,m=A+(E<<21&4294967295|E>>>11),E=v+(A^(m|~C))+w[4]+4149444226&4294967295,v=m+(E<<6&4294967295|E>>>26),E=C+(m^(v|~A))+w[11]+3174756917&4294967295,C=v+(E<<10&4294967295|E>>>22),E=A+(v^(C|~m))+w[2]+718787259&4294967295,A=C+(E<<15&4294967295|E>>>17),E=m+(C^(A|~v))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.v=function(I,v){v===void 0&&(v=I.length);const m=v-this.blockSize,w=this.C;let A=this.h,C=0;for(;C<v;){if(A==0)for(;C<=m;)s(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<v;)if(w[A++]=I.charCodeAt(C++),A==this.blockSize){s(this,w),A=0;break}}else for(;C<v;)if(w[A++]=I[C++],A==this.blockSize){s(this,w),A=0;break}}this.h=A,this.o+=v},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var m=I.length-8;m<I.length;++m)I[m]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,m=0;m<4;++m)for(let w=0;w<32;w+=8)I[v++]=this.g[m]>>>w&255;return I};function i(I,v){var m=l;return Object.prototype.hasOwnProperty.call(m,I)?m[I]:m[I]=v(I)}function o(I,v){this.h=v;const m=[];let w=!0;for(let A=I.length-1;A>=0;A--){const C=I[A]|0;w&&C==v||(m[A]=C,w=!1)}this.g=m}var l={};function u(I){return-128<=I&&I<128?i(I,function(v){return new o([v|0],v<0?-1:0)}):new o([I|0],I<0?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return O(c(-I));const v=[];let m=1;for(let w=0;I>=m;w++)v[w]=I/m|0,m*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return O(f(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const m=c(Math.pow(v,8));let w=p;for(let C=0;C<I.length;C+=8){var A=Math.min(8,I.length-C);const E=parseInt(I.substring(C,C+A),v);A<8?(A=c(Math.pow(v,A)),w=w.j(A).add(c(E))):(w=w.j(m),w=w.add(c(E)))}return w}var p=u(0),y=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();let I=0,v=1;for(let m=0;m<this.g.length;m++){const w=this.i(m);I+=(w>=0?w:4294967296+w)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(P(this))return"-"+O(this).toString(I);const v=c(Math.pow(I,6));var m=this;let w="";for(;;){const A=N(m,v).g;m=S(m,A.j(v));let C=((m.g.length>0?m.g[0]:m.h)>>>0).toString(I);if(m=A,R(m))return C+w;for(;C.length<6;)C="0"+C;w=C+w}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=S(this,I),P(I)?-1:R(I)?0:1};function O(I){const v=I.g.length,m=[];for(let w=0;w<v;w++)m[w]=~I.g[w];return new o(m,~I.h).add(y)}t.abs=function(){return P(this)?O(this):this},t.add=function(I){const v=Math.max(this.g.length,I.g.length),m=[];let w=0;for(let A=0;A<=v;A++){let C=w+(this.i(A)&65535)+(I.i(A)&65535),E=(C>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);w=E>>>16,C&=65535,E&=65535,m[A]=E<<16|C}return new o(m,m[m.length-1]&-2147483648?-1:0)};function S(I,v){return I.add(O(v))}t.j=function(I){if(R(this)||R(I))return p;if(P(this))return P(I)?O(this).j(O(I)):O(O(this).j(I));if(P(I))return O(this.j(O(I)));if(this.l(k)<0&&I.l(k)<0)return c(this.m()*I.m());const v=this.g.length+I.g.length,m=[];for(var w=0;w<2*v;w++)m[w]=0;for(w=0;w<this.g.length;w++)for(let A=0;A<I.g.length;A++){const C=this.i(w)>>>16,E=this.i(w)&65535,X=I.i(A)>>>16,fe=I.i(A)&65535;m[2*w+2*A]+=E*fe,T(m,2*w+2*A),m[2*w+2*A+1]+=C*fe,T(m,2*w+2*A+1),m[2*w+2*A+1]+=E*X,T(m,2*w+2*A+1),m[2*w+2*A+2]+=C*X,T(m,2*w+2*A+2)}for(I=0;I<v;I++)m[I]=m[2*I+1]<<16|m[2*I];for(I=v;I<2*v;I++)m[I]=0;return new o(m,0)};function T(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function x(I,v){this.g=I,this.h=v}function N(I,v){if(R(v))throw Error("division by zero");if(R(I))return new x(p,p);if(P(I))return v=N(O(I),v),new x(O(v.g),O(v.h));if(P(v))return v=N(I,O(v)),new x(O(v.g),v.h);if(I.g.length>30){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var m=y,w=v;w.l(I)<=0;)m=L(m),w=L(w);var A=U(m,1),C=U(w,1);for(w=U(w,2),m=U(m,2);!R(w);){var E=C.add(w);E.l(I)<=0&&(A=A.add(m),C=E),w=U(w,1),m=U(m,1)}return v=S(I,A.j(v)),new x(A,v)}for(A=p;I.l(v)>=0;){for(m=Math.max(1,Math.floor(I.m()/v.m())),w=Math.ceil(Math.log(m)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),C=c(m),E=C.j(v);P(E)||E.l(I)>0;)m-=w,C=c(m),E=C.j(v);R(C)&&(C=y),A=A.add(C),I=S(I,E)}return new x(A,I)}t.B=function(I){return N(this,I).h},t.and=function(I){const v=Math.max(this.g.length,I.g.length),m=[];for(let w=0;w<v;w++)m[w]=this.i(w)&I.i(w);return new o(m,this.h&I.h)},t.or=function(I){const v=Math.max(this.g.length,I.g.length),m=[];for(let w=0;w<v;w++)m[w]=this.i(w)|I.i(w);return new o(m,this.h|I.h)},t.xor=function(I){const v=Math.max(this.g.length,I.g.length),m=[];for(let w=0;w<v;w++)m[w]=this.i(w)^I.i(w);return new o(m,this.h^I.h)};function L(I){const v=I.g.length+1,m=[];for(let w=0;w<v;w++)m[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(m,I.h)}function U(I,v){const m=v>>5;v%=32;const w=I.g.length-m,A=[];for(let C=0;C<w;C++)A[C]=v>0?I.i(C+m)>>>v|I.i(C+m+1)<<32-v:I.i(C+m);return new o(A,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,A1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,as=o}).apply(typeof sy<"u"?sy:typeof self<"u"?self:typeof window<"u"?window:{});var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var x1,Do,k1,Ll,wd,C1,R1,b1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yl=="object"&&yl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var b=a[_];if(!(b in d))break e;d=d[b]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,b,D){for(var z=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)z[ve-2]=arguments[ve];return h.prototype[b].apply(_,z)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function R(a,h){for(let _=1;_<arguments.length;_++){const b=arguments[_];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const D=b.length||0;a.length=d+D;for(let z=0;z<D;z++)a[d+z]=b[z]}else a.push(b)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function S(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class T{constructor(){this.h=this.g=null}add(h,d){const _=x.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var x=new P(()=>new N,a=>a.reset());class N{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,U=!1,I=new T,v=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(m)}};function m(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){O(d)}var h=x;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function X(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(X,A),X.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&X.Z.h.call(this)},X.prototype.h=function(){X.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fe="closure_listenable_"+(Math.random()*1e6|0),qe=0;function ee(a,h,d,_,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=b,this.key=++qe,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function H(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function B(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Ie(a){const h={};for(const d in a)h[d]=a[d];return h}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ye(a,h){let d,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(d in _)a[d]=_[d];for(let D=0;D<ge.length;D++)d=ge[D],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function ae(a){this.src=a,this.g={},this.h=0}ae.prototype.add=function(a,h,d,_,b){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const z=yt(a,h,_,b);return z>-1?(h=a[z],d||(h.fa=!1)):(h=new ee(h,this.src,D,!!_,b),h.fa=d,a.push(h)),h};function Qt(a,h){const d=h.type;if(d in a.g){var _=a.g[d],b=Array.prototype.indexOf.call(_,h,void 0),D;(D=b>=0)&&Array.prototype.splice.call(_,b,1),D&&($(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function yt(a,h,d,_){for(let b=0;b<a.length;++b){const D=a[b];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==_)return b}return-1}var vn="closure_lm_"+(Math.random()*1e6|0),j={};function q(a,h,d,_,b){if(Array.isArray(h)){for(let D=0;D<h.length;D++)q(a,h[D],d,_,b);return null}return d=Pn(d),a&&a[fe]?a.J(h,d,l(_)?!!_.capture:!1,b):re(a,h,d,!1,_,b)}function re(a,h,d,_,b,D){if(!h)throw Error("Invalid event type");const z=l(b)?!!b.capture:!!b;let ve=br(a);if(ve||(a[vn]=ve=new ae(a)),d=ve.add(h,d,_,z,D),d.proxy)return d;if(_=_e(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)C||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),_,b);else if(a.attachEvent)a.attachEvent(Xe(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _e(){function a(d){return h.call(a.src,a.listener,d)}const h=cn;return a}function ue(a,h,d,_,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)ue(a,h[D],d,_,b);else _=l(_)?!!_.capture:!!_,d=Pn(d),a&&a[fe]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=yt(h,d,_,b),d>-1&&($(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=br(a))&&(h=a.g[h.toString()],a=-1,h&&(a=yt(h,d,_,b)),(d=a>-1?h[a]:null)&&pe(d))}function pe(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[fe])Qt(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(Xe(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=br(h))?(Qt(d,a),d.h==0&&(d.src=null,h[vn]=null)):$(a)}}}function Xe(a){return a in j?j[a]:j[a]="on"+a}function cn(a,h){if(a.da)a=!0;else{h=new X(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&pe(a),a=d.call(_,h)}return a}function br(a){return a=a[vn],a instanceof ae?a:null}var Hn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pn(a){return typeof a=="function"?a:(a[Hn]||(a[Hn]=function(h){return a.handleEvent(h)}),a[Hn])}function Ze(){w.call(this),this.i=new ae(this),this.M=this,this.G=null}p(Ze,w),Ze.prototype[fe]=!0,Ze.prototype.removeEventListener=function(a,h,d,_){ue(this,a,h,d,_)};function Ye(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var b=h;h=new A(_,a),ye(h,b)}b=!0;let D,z;if(d)for(z=d.length-1;z>=0;z--)D=h.g=d[z],b=te(D,_,!0,h)&&b;if(D=h.g=a,b=te(D,_,!0,h)&&b,b=te(D,_,!1,h)&&b,d)for(z=0;z<d.length;z++)D=h.g=d[z],b=te(D,_,!1,h)&&b}Ze.prototype.N=function(){if(Ze.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)$(d[_]);delete a.g[h],a.h--}}this.G=null},Ze.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},Ze.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function te(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let D=0;D<h.length;++D){const z=h[D];if(z&&!z.da&&z.capture==d){const ve=z.listener,vt=z.ha||z.src;z.fa&&Qt(a.i,z),b=ve.call(vt,_)!==!1&&b}}return b&&!_.defaultPrevented}function se(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Ve(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,Ve(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $e extends w{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ve(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function K(a){w.call(this),this.h=a,this.g={}}p(K,w);var Y=[];function J(a){H(a.g,function(h,d){this.g.hasOwnProperty(d)&&pe(h)},a),a.g={}}K.prototype.N=function(){K.Z.N.call(this),J(this)},K.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var he=o.JSON.stringify,ne=o.JSON.parse,Ne=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ke(){}function me(){}var Me={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Le(){A.call(this,"d")}p(Le,A);function Re(){A.call(this,"c")}p(Re,A);var be={},dt=null;function st(){return dt=dt||new Ze}be.Ia="serverreachability";function je(a){A.call(this,be.Ia,a)}p(je,A);function Lt(a){const h=st();Ye(h,new je(h))}be.STAT_EVENT="statevent";function hn(a,h){A.call(this,be.STAT_EVENT,a),this.stat=h}p(hn,A);function Be(a){const h=st();Ye(h,new hn(h,a))}be.Ja="timingevent";function At(a,h){A.call(this,be.Ja,a),this.size=h}p(At,A);function jt(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function at(){this.g=!0}at.prototype.ua=function(){this.g=!1};function _t(a,h,d,_,b,D){a.info(function(){if(a.g)if(D){var z="",ve=D.split("&");for(let Fe=0;Fe<ve.length;Fe++){var vt=ve[Fe].split("=");if(vt.length>1){const kt=vt[0];vt=vt[1];const Gn=kt.split("_");z=Gn.length>=2&&Gn[1]=="type"?z+(kt+"="+vt+"&"):z+(kt+"=redacted&")}}}else z=null;else z=D;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+d+`
`+z})}function xt(a,h,d,_,b,D,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+d+`
`+D+" "+z})}function Pr(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+NE(a,d)+(_?" "+_:"")})}function Ss(a,h){a.info(function(){return"TIMEOUT: "+h})}at.prototype.info=function(){};function NE(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(let z=1;z<_.length;z++)_[z]=""}}}}return he(D)}catch{return h}}var Ba={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},zp;function vc(){}p(vc,ke),vc.prototype.g=function(){return new XMLHttpRequest},zp=new vc;function ao(a){return encodeURIComponent(String(a))}function DE(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Nr(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new K(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var qp={},wc={};function Ec(a,h,d){a.M=1,a.A=Ha(qn(h)),a.u=d,a.R=!0,Gp(a,null)}function Gp(a,h){a.F=Date.now(),za(a),a.B=qn(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),im(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Hp,a.g=Im(a.j,d?h:null,!a.u),a.P>0&&(a.O=new $e(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Y[0]=b.toString()),b=Y);for(let D=0;D<b.length;D++){const z=q(d,b[D],_||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?Ie(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Lt(),_t(a.i,a.v,a.B,a.l,a.S,a.u)}Nr.prototype.ba=function(a){a=a.target;const h=this.O;h&&Vr(a)==3?h.j():this.Y(a)},Nr.prototype.Y=function(a){try{if(a==this.g)e:{const ve=Vr(this.g),vt=this.g.ya(),Fe=this.g.ca();if(!(ve<3)&&(ve!=3||this.g&&(this.h.h||this.g.la()||dm(this.g)))){this.K||ve!=4||vt==7||(vt==8||Fe<=0?Lt(3):Lt(2)),Tc(this);var h=this.g.ca();this.X=h;var d=OE(this);if(this.o=h==200,xt(this.i,this.v,this.B,this.l,this.S,ve,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,b=this.g;if((_=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(_)){var D=_;break t}}D=null}if(a=D)Pr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ic(this,a);else{this.o=!1,this.m=3,Be(12),As(this),lo(this);break e}}if(this.R){a=!0;let kt;for(;!this.K&&this.C<d.length;)if(kt=VE(this,d),kt==wc){ve==4&&(this.m=4,Be(14),a=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==qp){this.m=4,Be(15),Pr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Pr(this.i,this.l,kt,null),Ic(this,kt);if(Wp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||d.length!=0||this.h.h||(this.m=1,Be(16),a=!1),this.o=this.o&&a,!a)Pr(this.i,this.l,d,"[Invalid Chunked Response]"),As(this),lo(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Pc(z),z.P=!0,Be(11))}}else Pr(this.i,this.l,d,null),Ic(this,d);ve==4&&As(this),this.o&&!this.K&&(ve==4?vm(this.j,this):(this.o=!1,za(this)))}else QE(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),As(this),lo(this)}}}catch{}finally{}};function OE(a){if(!Wp(a))return a.g.la();const h=dm(a.g);if(h==="")return"";let d="";const _=h.length,b=Vr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return As(a),lo(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<_;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(b&&D==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Wp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function VE(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?wc:(d=Number(h.substring(d,_)),isNaN(d)?qp:(_+=1,_+d>h.length?wc:(h=h.slice(_,_+d),a.C=_+d,h)))}Nr.prototype.cancel=function(){this.K=!0,As(this)};function za(a){a.T=Date.now()+a.H,Kp(a,a.H)}function Kp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=jt(c(a.aa,a),h)}function Tc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ss(this.i,this.B),this.M!=2&&(Lt(),Be(17)),As(this),this.m=2,lo(this)):Kp(this,this.T-a)};function lo(a){a.j.I==0||a.K||vm(a.j,a)}function As(a){Tc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,J(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Ic(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Sc(d.h,a))){if(!a.L&&Sc(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Qa(d),Wa(d);else break e;bc(d),Be(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=jt(c(d.Va,d),6e3));Jp(d.h)<=1&&d.ta&&(d.ta=void 0)}else ks(d,11)}else if((a.L||d.g==a)&&Qa(d),!E(h))for(b=d.Ba.g.parse(h),h=0;h<b.length;h++){let Fe=b[h];const kt=Fe[0];if(!(kt<=d.K))if(d.K=kt,Fe=Fe[1],d.I==2)if(Fe[0]=="c"){d.M=Fe[1],d.ba=Fe[2];const Gn=Fe[3];Gn!=null&&(d.ka=Gn,d.j.info("VER="+d.ka));const Cs=Fe[4];Cs!=null&&(d.za=Cs,d.j.info("SVER="+d.za));const Mr=Fe[5];Mr!=null&&typeof Mr=="number"&&Mr>0&&(_=1.5*Mr,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Lr=a.g;if(Lr){const Ja=Lr.g?Lr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ja){var D=_.h;D.g||Ja.indexOf("spdy")==-1&&Ja.indexOf("quic")==-1&&Ja.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ac(D,D.h),D.h=null))}if(_.G){const Nc=Lr.g?Lr.g.getResponseHeader("X-HTTP-Session-Id"):null;Nc&&(_.wa=Nc,Ge(_.J,_.G,Nc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var z=a;if(_.na=Tm(_,_.L?_.ba:null,_.W),z.L){Xp(_.h,z);var ve=z,vt=_.O;vt&&(ve.H=vt),ve.D&&(Tc(ve),za(ve)),_.g=z}else ym(_);d.i.length>0&&Ka(d)}else Fe[0]!="stop"&&Fe[0]!="close"||ks(d,7);else d.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?ks(d,7):Rc(d):Fe[0]!="noop"&&d.l&&d.l.qa(Fe),d.A=0)}}Lt(4)}catch{}}var ME=class{constructor(a,h){this.g=a,this.map=h}};function Qp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Yp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jp(a){return a.h?1:a.g?a.g.size:0}function Sc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ac(a,h){a.g?a.g.add(h):a.h=h}function Xp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Qp.prototype.cancel=function(){if(this.i=Zp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return k(a.i)}var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LE(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let b,D=null;_>=0?(b=a[d].substring(0,_),D=a[d].substring(_+1)):b=a[d],h(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Dr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Dr?(this.l=a.l,uo(this,a.j),this.o=a.o,this.g=a.g,co(this,a.u),this.h=a.h,xc(this,om(a.i)),this.m=a.m):a&&(h=String(a).match(em))?(this.l=!1,uo(this,h[1]||"",!0),this.o=ho(h[2]||""),this.g=ho(h[3]||"",!0),co(this,h[4]),this.h=ho(h[5]||"",!0),xc(this,h[6]||"",!0),this.m=ho(h[7]||"")):(this.l=!1,this.i=new po(null,this.l))}Dr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(fo(h,tm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(fo(h,tm,!0),"@"),a.push(ao(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(fo(d,d.charAt(0)=="/"?FE:UE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",fo(d,BE)),a.join("")},Dr.prototype.resolve=function(a){const h=qn(this);let d=!!a.j;d?uo(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)co(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var b=h.h.lastIndexOf("/");b!=-1&&(_=h.h.slice(0,b+1)+_)}if(b=_,b==".."||b==".")_="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){_=b.lastIndexOf("/",0)==0,b=b.split("/");const D=[];for(let z=0;z<b.length;){const ve=b[z++];ve=="."?_&&z==b.length&&D.push(""):ve==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),_&&z==b.length&&D.push("")):(D.push(ve),_=!0)}_=D.join("/")}else _=b}return d?h.h=_:d=a.i.toString()!=="",d?xc(h,om(a.i)):d=!!a.m,d&&(h.m=a.m),h};function qn(a){return new Dr(a)}function uo(a,h,d){a.j=d?ho(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function co(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function xc(a,h,d){h instanceof po?(a.i=h,zE(a.i,a.l)):(d||(h=fo(h,$E)),a.i=new po(h,a.l))}function Ge(a,h,d){a.i.set(h,d)}function Ha(a){return Ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ho(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fo(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,jE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tm=/[#\/\?@]/g,UE=/[#\?:]/g,FE=/[#\?]/g,$E=/[#\?@]/g,BE=/#/g;function po(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function xs(a){a.g||(a.g=new Map,a.h=0,a.i&&LE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=po.prototype,t.add=function(a,h){xs(this),this.i=null,a=oi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function nm(a,h){xs(a),h=oi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function rm(a,h){return xs(a),h=oi(a,h),a.g.has(h)}t.forEach=function(a,h){xs(this),this.g.forEach(function(d,_){d.forEach(function(b){a.call(h,b,_,this)},this)},this)};function sm(a,h){xs(a);let d=[];if(typeof h=="string")rm(a,h)&&(d=d.concat(a.g.get(oi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return xs(this),this.i=null,a=oi(this,a),rm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=sm(this,a),a.length>0?String(a[0]):h):h};function im(a,h,d){nm(a,h),d.length>0&&(a.i=null,a.g.set(oi(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const b=ao(d);d=sm(this,d);for(let D=0;D<d.length;D++){let z=b;d[D]!==""&&(z+="="+ao(d[D])),a.push(z)}}return this.i=a.join("&")};function om(a){const h=new po;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function oi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function zE(a,h){h&&!a.j&&(xs(a),a.i=null,a.g.forEach(function(d,_){const b=_.toLowerCase();_!=b&&(nm(this,_),im(this,b,d))},a)),a.j=h}function HE(a,h){const d=new at;if(o.Image){const _=new Image;_.onload=f(Or,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Or,d,"TestLoadImage: error",!1,h,_),_.onabort=f(Or,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Or,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function qE(a,h){const d=new at,_=new AbortController,b=setTimeout(()=>{_.abort(),Or(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(b),D.ok?Or(d,"TestPingServer: ok",!0,h):Or(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Or(d,"TestPingServer: error",!1,h)})}function Or(a,h,d,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(d)}catch{}}function GE(){this.g=new Ne}function kc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(kc,ke),kc.prototype.g=function(){return new qa(this.i,this.h)};function qa(a,h){Ze.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(qa,Ze),t=qa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,go(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;am(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function am(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?mo(this):go(this),this.readyState==3&&am(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,mo(this))},t.Na=function(a){this.g&&(this.response=a,mo(this))},t.ga=function(){this.g&&mo(this)};function mo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,go(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function go(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lm(a){let h="";return H(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function Cc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=lm(d),typeof a=="string"?d!=null&&ao(d):Ge(a,h,d))}function it(a){Ze.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(it,Ze);var WE=/^https?$/i,KE=["POST","PUT"];t=it.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():zp.g(),this.g.onreadystatechange=y(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){um(this,D);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)d.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())d.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(KE,h,void 0)>=0)||_||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){um(this,D)}};function um(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,cm(a),Ga(a)}function cm(a){a.A||(a.A=!0,Ye(a,"complete"),Ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ye(this,"complete"),Ye(this,"abort"),Ga(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ga(this,!0)),it.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?hm(this):this.Xa())},t.Xa=function(){hm(this)};function hm(a){if(a.h&&typeof i<"u"){if(a.v&&Vr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ye(a,"readystatechange"),Vr(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=D===0){let z=String(a.D).match(em)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),_=!WE.test(z?z.toLowerCase():"")}d=_}if(d)Ye(a,"complete"),Ye(a,"success");else{a.o=6;try{var b=Vr(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",cm(a)}}finally{Ga(a)}}}}function Ga(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||Ye(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Vr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Vr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ne(h)}};function dm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function QE(a){const h={};a=(a.g&&Vr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(E(a[_]))continue;var d=DE(a[_]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[b]||[];h[b]=D,D.push(d)}B(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yo(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function fm(a){this.za=0,this.i=[],this.j=new at,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yo("baseRetryDelayMs",5e3,a),this.Za=yo("retryDelaySeedMs",1e4,a),this.Ta=yo("forwardChannelMaxRetries",2,a),this.va=yo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Qp(a&&a.concurrentRequestLimit),this.Ba=new GE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=fm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,_){Be(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=Tm(this,null,this.W),Ka(this)};function Rc(a){if(pm(a),a.I==3){var h=a.V++,d=qn(a.J);if(Ge(d,"SID",a.M),Ge(d,"RID",h),Ge(d,"TYPE","terminate"),_o(a,d),h=new Nr(a,a.j,h),h.M=2,h.A=Ha(qn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Im(h.j,null),h.g.ea(h.A)),h.F=Date.now(),za(h)}Em(a)}function Wa(a){a.g&&(Pc(a),a.g.cancel(),a.g=null)}function pm(a){Wa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Qa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ka(a){if(!Yp(a.h)&&!a.m){a.m=!0;var h=a.Ea;L||v(),U||(L(),U=!0),I.add(h,a),a.D=0}}function YE(a,h){return Jp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=jt(c(a.Ea,a,h),wm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new Nr(this,this.j,a);let D=this.o;if(this.U&&(D?(D=Ie(D),ye(D,this.U)):D=this.U),this.u!==null||this.R||(b.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=gm(this,b,h),d=qn(this.J),Ge(d,"RID",a),Ge(d,"CVER",22),this.G&&Ge(d,"X-HTTP-Session-Id",this.G),_o(this,d),D&&(this.R?h="headers="+ao(lm(D))+"&"+h:this.u&&Cc(d,this.u,D)),Ac(this.h,b),this.Ra&&Ge(d,"TYPE","init"),this.S?(Ge(d,"$req",h),Ge(d,"SID","null"),b.U=!0,Ec(b,d,null)):Ec(b,d,h),this.I=2}}else this.I==3&&(a?mm(this,a):this.i.length==0||Yp(this.h)||mm(this))};function mm(a,h){var d;h?d=h.l:d=a.V++;const _=qn(a.J);Ge(_,"SID",a.M),Ge(_,"RID",d),Ge(_,"AID",a.K),_o(a,_),a.u&&a.o&&Cc(_,a.u,a.o),d=new Nr(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=gm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ac(a.h,d),Ec(d,_,h)}function _o(a,h){a.H&&H(a.H,function(d,_){Ge(h,_,d)}),a.l&&H({},function(d,_){Ge(h,_,d)})}function gm(a,h,d){d=Math.min(a.i.length,d);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let ve=-1;for(;;){const vt=["count="+d];ve==-1?d>0?(ve=b[0].g,vt.push("ofs="+ve)):ve=0:vt.push("ofs="+ve);let Fe=!0;for(let kt=0;kt<d;kt++){var D=b[kt].g;const Gn=b[kt].map;if(D-=ve,D<0)ve=Math.max(0,b[kt].g-100),Fe=!1;else try{D="req"+D+"_"||"";try{var z=Gn instanceof Map?Gn:Object.entries(Gn);for(const[Cs,Mr]of z){let Lr=Mr;l(Mr)&&(Lr=he(Mr)),vt.push(D+Cs+"="+encodeURIComponent(Lr))}}catch(Cs){throw vt.push(D+"type="+encodeURIComponent("_badmap")),Cs}}catch{_&&_(Gn)}}if(Fe){z=vt.join("&");break e}}z=void 0}return a=a.i.splice(0,d),h.G=a,z}function ym(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;L||v(),U||(L(),U=!0),I.add(h,a),a.A=0}}function bc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=jt(c(a.Da,a),wm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,_m(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=jt(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),Wa(this),_m(this))};function Pc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _m(a){a.g=new Nr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=qn(a.na);Ge(h,"RID","rpc"),Ge(h,"SID",a.M),Ge(h,"AID",a.K),Ge(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ge(h,"TO",a.ia),Ge(h,"TYPE","xmlhttp"),_o(a,h),a.u&&a.o&&Cc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ha(qn(h)),d.u=null,d.R=!0,Gp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Wa(this),bc(this),Be(19))};function Qa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function vm(a,h){var d=null;if(a.g==h){Qa(a),Pc(a),a.g=null;var _=2}else if(Sc(a.h,h))d=h.G,Xp(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;_=st(),Ye(_,new At(_,d)),Ka(a)}else ym(a);else if(b=h.m,b==3||b==0&&h.X>0||!(_==1&&YE(a,h)||_==2&&bc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),b){case 1:ks(a,5);break;case 4:ks(a,10);break;case 3:ks(a,6);break;default:ks(a,2)}}}function wm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function ks(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),_=a.Ua;const b=!_;_=new Dr(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||uo(_,"https"),Ha(_),b?HE(_.toString(),d):qE(_.toString(),d)}else Be(2);a.I=0,a.l&&a.l.pa(h),Em(a),pm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Em(a){if(a.I=0,a.ja=[],a.l){const h=Zp(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Tm(a,h,d){var _=d instanceof Dr?qn(d):new Dr(d);if(_.g!="")h&&(_.g=h+"."+_.g),co(_,_.u);else{var b=o.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const D=new Dr(null);_&&uo(D,_),h&&(D.g=h),b&&co(D,b),d&&(D.h=d),_=D}return d=a.G,h=a.wa,d&&h&&Ge(_,d,h),Ge(_,"VER",a.ka),_o(a,_),_}function Im(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new it(new kc({ab:d})):new it(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sm(){}t=Sm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ya(){}Ya.prototype.g=function(a,h){return new dn(a,h)};function dn(a,h){Ze.call(this),this.g=new fm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ai(this)}p(dn,Ze),dn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){Rc(this.g)},dn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=he(a),a=d);h.i.push(new ME(h.Ya++,a)),h.I==3&&Ka(h)},dn.prototype.N=function(){this.g.l=null,delete this.j,Rc(this.g),delete this.g,dn.Z.N.call(this)};function Am(a){Le.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Am,Le);function xm(){Re.call(this),this.status=1}p(xm,Re);function ai(a){this.g=a}p(ai,Sm),ai.prototype.ra=function(){Ye(this.g,"a")},ai.prototype.qa=function(a){Ye(this.g,new Am(a))},ai.prototype.pa=function(a){Ye(this.g,new xm)},ai.prototype.oa=function(){Ye(this.g,"b")},Ya.prototype.createWebChannel=Ya.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,b1=function(){return new Ya},R1=function(){return st()},C1=be,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ba.NO_ERROR=0,Ba.TIMEOUT=8,Ba.HTTP_ERROR=6,Ll=Ba,Bp.COMPLETE="complete",k1=Bp,me.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",Ze.prototype.listen=Ze.prototype.J,Do=me,it.prototype.listenOnce=it.prototype.K,it.prototype.getLastError=it.prototype.Ha,it.prototype.getLastErrorCode=it.prototype.ya,it.prototype.getStatus=it.prototype.ca,it.prototype.getResponseJson=it.prototype.La,it.prototype.getResponseText=it.prototype.la,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Fa,x1=it}).apply(typeof yl<"u"?yl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to="12.10.0";function QC(t){to=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Ff("@firebase/firestore");function ci(){return Qs.logLevel}function W(t,...e){if(Qs.logLevel<=Se.DEBUG){const n=e.map(Yf);Qs.debug(`Firestore (${to}): ${t}`,...n)}}function xr(t,...e){if(Qs.logLevel<=Se.ERROR){const n=e.map(Yf);Qs.error(`Firestore (${to}): ${t}`,...n)}}function Ys(t,...e){if(Qs.logLevel<=Se.WARN){const n=e.map(Yf);Qs.warn(`Firestore (${to}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,P1(t,r,n)}function P1(t,e,n){let r=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw xr(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||P1(e,s,r)}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ht.UNAUTHENTICATED))}shutdown(){}}class JC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XC{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ls,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ls)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new N1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class ZC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class eR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ZC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,In(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new iy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new iy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Ed(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return dh(s)===dh(i)?Ae(s,i):dh(s)?1:-1}return Ae(t.length,e.length)}const rR=55296,sR=57343;function dh(t){const e=t.charCodeAt(0);return e>=rR&&e<=sR}function Gi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="__name__";class Qn{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Qn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ae(e.length,n.length)}static compareSegments(e,n){const r=Qn.isNumericId(e),s=Qn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Qn.extractNumericId(e).compare(Qn.extractNumericId(n)):Ed(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return as.fromString(e.substring(4,e.length-2))}}class ze extends Qn{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const iR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Qn{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return iR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oy}static keyField(){return new Dt([oy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(ze.fromString(e))}static fromName(e){return new Z(ze.fromString(e).popFirst(5))}static empty(){return new Z(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new ze(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t,e,n){if(!n)throw new G(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oR(t,e,n,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ay(t){if(!Z.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ly(t){if(Z.isDocumentKey(t))throw new G(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function O1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function ga(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nc(t);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Da(t,e){if(!O1(t))throw new G(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new G(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=-62135596800,cy=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*cy);return new Ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<uy)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cy}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Da(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:gt("string",Ke._jsonSchemaVersion),seconds:gt("number"),nanoseconds:gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new Ke(0,0))}static max(){return new ce(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=-1;function aR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new fs(s,Z.empty(),e)}function lR(t){return new fs(t.readTime,t.key,ya)}class fs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fs(ce.min(),Z.empty(),ya)}static max(){return new fs(ce.max(),Z.empty(),ya)}}function uR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==cR)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function dR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=-1;function sc(t){return t==null}function Eu(t){return t===0&&1/t==-1/0}function fR(t){return typeof t=="number"&&Number.isInteger(t)&&!Eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="";function pR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hy(e)),e=mR(t.get(n),e);return hy(e)}function mR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case V1:n+="";break;default:n+=i}}return n}function hy(t){return t+V1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function M1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||Nt.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _l(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _l(this.root,e,this.comparator,!1)}getReverseIterator(){return new _l(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _l(this.root,e,this.comparator,!0)}}class _l{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Nt.RED,this.left=s??Nt.EMPTY,this.right=i??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fy(this.data.getIterator())}getIteratorFrom(e){return new fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Mn([])}unionWith(e){let n=new It(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new L1("Invalid base64 string: "+i):i}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const gR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ps(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=gR.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ms(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="server_timestamp",U1="__type__",F1="__previous_value__",$1="__local_write_time__";function Zf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[U1])==null?void 0:r.stringValue)===j1}function ic(t){const e=t.mapValue.fields[F1];return Zf(e)?ic(e):e}function _a(t){const e=ps(t.mapValue.fields[$1].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,s,i,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const Tu="(default)";class va{constructor(e,n){this.projectId=e,this.database=n||Tu}static empty(){return new va("","")}get isDefaultDatabase(){return this.database===Tu}isEqual(e){return e instanceof va&&e.projectId===this.projectId&&e.database===this.database}}function _R(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new va(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="__type__",vR="__max__",vl={mapValue:{}},z1="__vector__",Iu="value";function gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zf(t)?4:ER(t)?9007199254740991:wR(t)?10:11:oe(28295,{value:t})}function or(t,e){if(t===e)return!0;const n=gs(t);if(n!==gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _a(t).isEqual(_a(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ps(s.timestampValue),l=ps(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ms(s.bytesValue).isEqual(ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return lt(s.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return lt(s.integerValue)===lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=lt(s.doubleValue),l=lt(i.doubleValue);return o===l?Eu(o)===Eu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Gi(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(dy(o)!==dy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!or(o[u],l[u])))return!1;return!0}(t,e);default:return oe(52216,{left:t})}}function wa(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function Wi(t,e){if(t===e)return 0;const n=gs(t),r=gs(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=lt(i.integerValue||i.doubleValue),u=lt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return py(t.timestampValue,e.timestampValue);case 4:return py(_a(t),_a(e));case 5:return Ed(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ms(i),u=ms(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=Ae(l[c],u[c]);if(f!==0)return f}return Ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(lt(i.latitude),lt(o.latitude));return l!==0?l:Ae(lt(i.longitude),lt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return my(t.arrayValue,e.arrayValue);case 10:return function(i,o){var y,k,R,P;const l=i.fields||{},u=o.fields||{},c=(y=l[Iu])==null?void 0:y.arrayValue,f=(k=u[Iu])==null?void 0:k.arrayValue,p=Ae(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return p!==0?p:my(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===vl.mapValue&&o===vl.mapValue)return 0;if(i===vl.mapValue)return 1;if(o===vl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=Ed(u[p],f[p]);if(y!==0)return y;const k=Wi(l[u[p]],c[f[p]]);if(k!==0)return k}return Ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function py(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=ps(t),r=ps(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function my(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Wi(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function Ki(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ps(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Td(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Td(n.fields[o])}`;return s+"}"}(t.mapValue):oe(61005,{value:t})}function jl(t){switch(gs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(t);return e?16+jl(e):16;case 5:return 2*t.stringValue.length;case 6:return ms(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+jl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ni(r.fields,(i,o)=>{s+=i.length+jl(o)}),s}(t.mapValue);default:throw oe(13486,{value:t})}}function gy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Id(t){return!!t&&"integerValue"in t}function ep(t){return!!t&&"arrayValue"in t}function yy(t){return!!t&&"nullValue"in t}function _y(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function wR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[B1])==null?void 0:r.stringValue)===z1}function Wo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wo(t.arrayValue.values[n]);return e}return{...t}}function ER(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===vR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wo(n)}setAll(e){let n=Dt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Wo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ul(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Sn(Wo(this.value))}}function H1(t){const e=[];return ni(t.fields,(n,r)=>{const s=new Dt([n]);if(Ul(r)){const i=H1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Gt(e,0,ce.min(),ce.min(),ce.min(),Sn.empty(),0)}static newFoundDocument(e,n,r,s){return new Gt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new Gt(e,2,n,ce.min(),ce.min(),Sn.empty(),0)}static newUnknownDocument(e,n){return new Gt(e,3,n,ce.min(),ce.min(),Sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.position=e,this.inclusive=n}}function vy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function TR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{}class mt extends q1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SR(e,n,r):n==="array-contains"?new kR(e,r):n==="in"?new CR(e,r):n==="not-in"?new RR(e,r):n==="array-contains-any"?new bR(e,r):new mt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AR(e,r):new xR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Wi(n,this.value)):n!==null&&gs(this.value)===gs(n)&&this.matchesComparison(Wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends q1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zn(e,n)}matches(e){return G1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function G1(t){return t.op==="and"}function W1(t){return IR(t)&&G1(t)}function IR(t){for(const e of t.filters)if(e instanceof zn)return!1;return!0}function Sd(t){if(t instanceof mt)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(W1(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function K1(t,e){return t instanceof mt?function(r,s){return s instanceof mt&&r.op===s.op&&r.field.isEqual(s.field)&&or(r.value,s.value)}(t,e):t instanceof zn?function(r,s){return s instanceof zn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&K1(o,s.filters[l]),!0):!1}(t,e):void oe(19439)}function Q1(t){return t instanceof mt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof zn?function(n){return n.op.toString()+" {"+n.getFilters().map(Q1).join(" ,")+"}"}(t):"Filter"}class SR extends mt{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class AR extends mt{constructor(e,n){super(e,"in",n),this.keys=Y1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xR extends mt{constructor(e,n){super(e,"not-in",n),this.keys=Y1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Y1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class kR extends mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ep(n)&&wa(n.arrayValue,this.value)}}class CR extends mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wa(this.value.arrayValue,n)}}class RR extends mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wa(this.value.arrayValue,n)}}class bR extends mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ey(t,e=null,n=[],r=[],s=null,i=null,o=null){return new PR(t,e,n,r,s,i,o)}function tp(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.Te=n}return e.Te}function np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!K1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wy(t.startAt,e.startAt)&&wy(t.endAt,e.endAt)}function Ad(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function NR(t,e,n,r,s,i,o,l){return new so(t,e,n,r,s,i,o,l)}function J1(t){return new so(t)}function Ty(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DR(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function X1(t){return t.collectionGroup!==null}function Ko(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new It(Dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ea(i,r))}),n.has(Dt.keyField().canonicalString())||e.Ie.push(new Ea(Dt.keyField(),r))}return e.Ie}function nr(t){const e=de(t);return e.Ee||(e.Ee=OR(e,Ko(t))),e.Ee}function OR(t,e){if(t.limitType==="F")return Ey(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ea(s.field,i)});const n=t.endAt?new Su(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Su(t.startAt.position,t.startAt.inclusive):null;return Ey(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xd(t,e){const n=t.filters.concat([e]);return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function VR(t,e){const n=t.explicitOrderBy.concat([e]);return new so(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Au(t,e,n){return new so(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return np(nr(t),nr(e))&&t.limitType===e.limitType}function Z1(t){return`${tp(nr(t))}|lt:${t.limitType}`}function hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Q1(s)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ki(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ki(s)).join(",")),`Target(${r})`}(nr(t))}; limitType=${t.limitType})`}function ac(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ko(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=vy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ko(r),s)||r.endAt&&!function(o,l,u){const c=vy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ko(r),s))}(t,e)}function MR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ew(t){return(e,n)=>{let r=!1;for(const s of Ko(t)){const i=LR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LR(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Wi(u,c):oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return M1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=new rt(Z.comparator);function kr(){return jR}const tw=new rt(Z.comparator);function Oo(...t){let e=tw;for(const n of t)e=e.insert(n.key,n);return e}function nw(t){let e=tw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vs(){return Qo()}function rw(){return Qo()}function Qo(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const UR=new rt(Z.comparator),FR=new It(Z.comparator);function xe(...t){let e=FR;for(const n of t)e=e.add(n);return e}const $R=new It(Ae);function BR(){return $R}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Eu(e)?"-0":e}}function sw(t){return{integerValue:""+t}}function zR(t,e){return fR(e)?sw(e):rp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this._=void 0}}function HR(t,e,n){return t instanceof Ta?function(s,i){const o={fields:{[U1]:{stringValue:j1},[$1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zf(i)&&(i=ic(i)),i&&(o.fields[F1]=i),{mapValue:o}}(n,e):t instanceof Ia?ow(t,e):t instanceof Sa?aw(t,e):function(s,i){const o=iw(s,i),l=Iy(o)+Iy(s.Ae);return Id(o)&&Id(s.Ae)?sw(l):rp(s.serializer,l)}(t,e)}function qR(t,e,n){return t instanceof Ia?ow(t,e):t instanceof Sa?aw(t,e):n}function iw(t,e){return t instanceof xu?function(r){return Id(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ta extends lc{}class Ia extends lc{constructor(e){super(),this.elements=e}}function ow(t,e){const n=lw(e);for(const r of t.elements)n.some(s=>or(s,r))||n.push(r);return{arrayValue:{values:n}}}class Sa extends lc{constructor(e){super(),this.elements=e}}function aw(t,e){let n=lw(e);for(const r of t.elements)n=n.filter(s=>!or(s,r));return{arrayValue:{values:n}}}class xu extends lc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Iy(t){return lt(t.integerValue||t.doubleValue)}function lw(t){return ep(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n){this.field=e,this.transform=n}}function WR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ia&&s instanceof Ia||r instanceof Sa&&s instanceof Sa?Gi(r.elements,s.elements,or):r instanceof xu&&s instanceof xu?or(r.Ae,s.Ae):r instanceof Ta&&s instanceof Ta}(t.transform,e.transform)}class KR{constructor(e,n){this.version=e,this.transformResults=n}}class wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uc{}function uw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hw(t.key,wr.none()):new Oa(t.key,t.data,wr.none());{const n=t.data,r=Sn.empty();let s=new It(Dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new si(t.key,r,new Mn(s.toArray()),wr.none())}}function QR(t,e,n){t instanceof Oa?function(s,i,o){const l=s.value.clone(),u=Ay(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof si?function(s,i,o){if(!Fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ay(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(cw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yo(t,e,n,r){return t instanceof Oa?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const c=i.value.clone(),f=xy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof si?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const c=xy(i.fieldTransforms,u,o),f=o.data;return f.setAll(cw(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function YR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=iw(r.transform,s||null);i!=null&&(n===null&&(n=Sn.empty()),n.set(r.field,i))}return n||null}function Sy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gi(r,s,(i,o)=>WR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends uc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class si extends uc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ay(t,e,n){const r=new Map;De(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,qR(o,l,n[s]))}return r}function xy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,HR(i,o,e))}return r}class hw extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JR extends uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=uw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),xe())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,(n,r)=>Sy(n,r))&&Gi(this.baseMutations,e.baseMutations,(n,r)=>Sy(n,r))}}class sp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return UR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new sp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Ce;function t2(t){switch(t){case V.OK:return oe(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function dw(t){if(t===void 0)return xr("GRPC error has no .code"),V.UNKNOWN;switch(t){case ft.OK:return V.OK;case ft.CANCELLED:return V.CANCELLED;case ft.UNKNOWN:return V.UNKNOWN;case ft.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ft.INTERNAL:return V.INTERNAL;case ft.UNAVAILABLE:return V.UNAVAILABLE;case ft.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ft.NOT_FOUND:return V.NOT_FOUND;case ft.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ft.ABORTED:return V.ABORTED;case ft.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ft.DATA_LOSS:return V.DATA_LOSS;default:return oe(39323,{code:t})}}(Ce=ft||(ft={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=new as([4294967295,4294967295],0);function ky(t){const e=n2().encode(t),n=new A1;return n.update(e),new Uint8Array(n.digest())}function Cy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new as([n,r],0),new as([s,i],0)]}class ip{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vo(`Invalid padding: ${n}`);if(r<0)throw new Vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=as.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(as.fromNumber(r)));return s.compare(r2)===1&&(s=new as([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ky(e),[r,s]=Cy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ip(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=ky(e),[r,s]=Cy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cc(ce.min(),s,new rt(Ae),kr(),xe())}}class Va{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Va(r,n,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class fw{constructor(e,n){this.targetId=e,this.Ce=n}}class pw{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ry{constructor(){this.ve=0,this.Fe=by(),this.Me=Mt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),n=xe(),r=xe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new Va(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=by()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,De(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class s2{constructor(e){this.Ge=e,this.ze=new Map,this.je=kr(),this.He=wl(),this.Je=wl(),this.Ze=new rt(Ae)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ad(i))if(r===0){const o=new Z(i.path);this.et(n,o,Gt.newNoDocument(o,ce.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ms(r).toUint8Array()}catch(u){if(u instanceof L1)return Ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ip(o,s,i)}catch(u){return Ys(u instanceof Vo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ad(l.target)){const u=new Z(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Gt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=xe();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new cc(e,n,this.Ze,this.je,r);return this.je=kr(),this.He=wl(),this.Je=wl(),this.Ze=new rt(Ae),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ry,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new It(Ae),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new It(Ae),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ry),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function wl(){return new rt(Z.comparator)}function by(){return new rt(Z.comparator)}const i2={asc:"ASCENDING",desc:"DESCENDING"},o2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a2={and:"AND",or:"OR"};class l2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function u2(t,e){return ku(t,e.toTimestamp())}function rr(t){return De(!!t,49232),ce.fromTimestamp(function(n){const r=ps(n);return new Ke(r.seconds,r.nanos)}(t))}function op(t,e){return Cd(t,e).canonicalString()}function Cd(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function gw(t){const e=ze.fromString(t);return De(Ew(e),10190,{key:e.toString()}),e}function Rd(t,e){return op(t.databaseId,e.path)}function fh(t,e){const n=gw(e);if(n.get(1)!==t.databaseId.projectId)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(_w(n))}function yw(t,e){return op(t.databaseId,e)}function c2(t){const e=gw(t);return e.length===4?ze.emptyPath():_w(e)}function bd(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _w(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Py(t,e,n){return{name:Rd(t,e),fields:n.value.mapValue.fields}}function h2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:oe(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(De(f===void 0||typeof f=="string",58123),Mt.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Mt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?V.UNKNOWN:dw(c.code);return new G(f,c.message||"")}(o);n=new pw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fh(t,r.document.name),i=rr(r.document.updateTime),o=r.document.createTime?rr(r.document.createTime):ce.min(),l=new Sn({mapValue:{fields:r.document.fields}}),u=Gt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new $l(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fh(t,r.document),i=r.readTime?rr(r.readTime):ce.min(),o=Gt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new $l([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fh(t,r.document),i=r.removedTargetIds||[];n=new $l([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new e2(s,i),l=r.targetId;n=new fw(l,o)}}return n}function d2(t,e){let n;if(e instanceof Oa)n={update:Py(t,e.key,e.value)};else if(e instanceof hw)n={delete:Rd(t,e.key)};else if(e instanceof si)n={update:Py(t,e.key,e.data),updateMask:E2(e.fieldMask)};else{if(!(e instanceof JR))return oe(16599,{dt:e.type});n={verify:Rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw oe(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:u2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(t,e.precondition)),n}function f2(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?rr(s.updateTime):rr(i);return o.isEqual(ce.min())&&(o=rr(i)),new KR(o,s.transformResults||[])}(n,e))):[]}function p2(t,e){return{documents:[yw(t,e.path)]}}function m2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=yw(t,s);const i=function(c){if(c.length!==0)return ww(zn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(y){return{field:di(y.field),direction:_2(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function g2(t){let e=c2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const y=vw(p);return y instanceof zn&&W1(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(R){return new Ea(fi(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,sc(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,k=p.values||[];return new Su(k,y)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const y=!p.before,k=p.values||[];return new Su(k,y)}(n.endAt)),NR(e,s,o,i,l,"F",u,c)}function y2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fi(n.unaryFilter.field);return mt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fi(n.unaryFilter.field);return mt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fi(n.unaryFilter.field);return mt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(n.unaryFilter.field);return mt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return mt.create(fi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zn.create(n.compositeFilter.filters.map(r=>vw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(n.compositeFilter.op))}(t):oe(30097,{filter:t})}function _2(t){return i2[t]}function v2(t){return o2[t]}function w2(t){return a2[t]}function di(t){return{fieldPath:t.canonicalString()}}function fi(t){return Dt.fromServerFormat(t.fieldPath)}function ww(t){return t instanceof mt?function(n){if(n.op==="=="){if(_y(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if(yy(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_y(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if(yy(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:v2(n.op),value:n.value}}}(t):t instanceof zn?function(n){const r=n.getFilters().map(s=>ww(s));return r.length===1?r[0]:{compositeFilter:{op:w2(n.op),filters:r}}}(t):oe(54877,{filter:t})}function E2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ew(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Tw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),l=Mt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.yt=e}}function I2(t){const e=g2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Au(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(){this.Sn=new A2}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(fs.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(fs.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class A2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new It(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new It(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Iw=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(Iw,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Qi(0)}static ar(){return new Qi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="LruGarbageCollector",x2=1048576;function Oy([t,e],[n,r]){const s=Ae(t,n);return s===0?Ae(e,r):s}class k2{constructor(e){this.Pr=e,this.buffer=new It(Oy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Oy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class C2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(Dy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ro(n)?W(Dy,"Ignoring IndexedDB error during garbage collection: ",n):await no(n)}await this.Ar(3e5)})}}class R2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(rc.ce);const r=new k2(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ny)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ny):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),ci()<=Se.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function b2(t,e){return new R2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Yo(r.mutation,s,Mn.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,xe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=xe()){const s=Vs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,xe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=kr();const o=Qo(),l=function(){return Qo()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof si)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Yo(f.mutation,c,f.mutation.getFieldMask(),Ke.now())):o.set(c.key,Mn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new N2(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Qo();let s=new rt((o,l)=>o-l),i=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Mn.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(s.get(l.batchId)||xe()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=rw();f.forEach(y=>{if(!i.has(y)){const k=uw(n.get(y),r.get(y));k!==null&&p.set(y,k),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return DR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):X1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Vs());let l=ya,u=i;return o.next(c=>M.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,xe())).next(f=>({batchId:l,changes:nw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=Oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const c=function(p,y){return new so(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Gt.newInvalidDocument(f)))});let l=Oo();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&Yo(f.mutation,c,Mn.empty(),Ke.now()),ac(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rr(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:I2(s.bundledQuery),readTime:rr(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.overlays=new rt(Z.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vs();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Vs(),i=n.length+1,o=new Z(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new rt((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Vs(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Vs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZR(n,r));let i=this.Lr.get(n);i===void 0&&(i=xe(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.kr=new It(Ct.Kr),this.qr=new It(Ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ct(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ct(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Z(new ze([])),r=new Ct(n,e),s=new Ct(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Z(new ze([])),r=new Ct(n,e),s=new Ct(n,e+1);let i=xe();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ct(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ct{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Z.comparator(e.key,n.key)||Ae(e.Hr,n.Hr)}static Ur(e,n){return Ae(e.Hr,n.Hr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new It(Ct.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Xf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ct(n,0),s=new Ct(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(Ae);return n.forEach(s=>{const i=new Ct(s,0),o=new Ct(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new Ct(new Z(i),0);let l=new It(Ae);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new Ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Ct(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.ti=e,this.docs=function(){return new rt(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(n))}getEntries(e,n){let r=kr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Gt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kr();const o=n.path,l=new Z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||uR(lR(f),r)<=0||(s.has(f.key)||ac(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new U2(this)}getSize(e){return M.resolve(this.size)}}class U2 extends P2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.persistence=e,this.ri=new ri(n=>tp(n),np),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.ii=0,this.si=new ap,this.targetCount=0,this.oi=Qi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,n){this._i={},this.overlays={},this.ai=new rc(0),this.ui=!1,this.ui=!0,this.ci=new M2,this.referenceDelegate=e(this),this.li=new F2(this),this.indexManager=new S2,this.remoteDocumentCache=function(s){return new j2(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new T2(n),this.Pi=new O2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new V2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new L2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new $2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class $2 extends hR{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.Ri=new ap,this.Ai=null}static Vi(e){return new lp(e)}get di(){if(this.Ai)return this.Ai;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=Z.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Cu{constructor(e,n){this.persistence=e,this.fi=new ri(r=>pR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=b2(this,n)}static Vi(e,n){return new Cu(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=jl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=xe(),s=xe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new up(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ux()?8:dR(Kt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new B2;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ci()<=Se.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(ci()<=Se.DEBUG&&W("QueryEngine","Query:",hi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ci()<=Se.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(n))):M.resolve())}gs(e,n){if(Ty(n))return M.resolve(null);let r=nr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Au(n,null,"F"),r=nr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=xe(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,Au(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Ty(n)||s.isEqual(ce.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(ci()<=Se.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hi(n)),this.Ds(e,o,n,aR(s,ya)).next(l=>l))})}bs(e,n){let r=new It(ew(e));return n.forEach((s,i)=>{ac(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ci()<=Se.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",hi(n)),this.fs.getDocumentsMatchingQuery(e,n,fs.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="LocalStore",H2=3e8;class q2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new rt(Ae),this.Fs=new ri(i=>tp(i),np),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new D2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function G2(t,e,n,r){return new q2(t,e,n,r)}async function Aw(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=xe();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function W2(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,y=p.keys();let k=M.resolve();return y.forEach(R=>{k=k.next(()=>f.getEntry(u,R)).next(P=>{const O=c.docVersions.get(R);De(O!==null,48541),P.version.compareTo(O)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=xe();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function xw(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function K2(t,e){const n=de(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const y=s.get(p);if(!y)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let k=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(Mt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(p,k),function(P,O,S){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=H2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,k,f)&&l.push(n.li.updateTargetData(i,k))});let u=kr(),c=xe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(Q2(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(ce.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function Q2(t,e,n){let r=xe(),s=xe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ce.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(cp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function Y2(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function J2(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Pd(t,e,n){const r=de(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ro(o))throw o;W(cp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Vy(t,e,n){const r=de(t);let s=ce.min(),i=xe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=de(u),y=p.Fs.get(f);return y!==void 0?M.resolve(p.vs.get(y)):p.li.getTargetData(c,f)}(r,o,nr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:xe())).next(l=>(X2(r,MR(e),l),{documents:l,ks:i})))}function X2(t,e,n){let r=t.Ms.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class My{constructor(){this.activeTargetIds=BR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Z2{constructor(){this.vo=new My,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new My,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="ConnectivityMonitor";class jy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(Ly,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(Ly,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El=null;function Nd(){return El===null?El=function(){return 268435456+Math.round(2147483648*Math.random())}():El++,"0x"+El.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="RestConnection",tb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class nb{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Tu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Nd(),l=this.Qo(e,n.toUriEncodedString());W(ph,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Ts(c);return this.zo(e,l,u,r,f).then(p=>(W(ph,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ys(ph,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+to}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=tb[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection",Co=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ni extends nb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ni.c_){const e=R1();Co(e,C1.STAT_EVENT,n=>{n.stat===wd.PROXY?W($t,"STAT_EVENT: detected buffering proxy"):n.stat===wd.NOPROXY&&W($t,"STAT_EVENT: detected no buffering proxy")}),Ni.c_=!0}}zo(e,n,r,s,i){const o=Nd();return new Promise((l,u)=>{const c=new x1;c.setWithCredentials(!0),c.listenOnce(k1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ll.NO_ERROR:const p=c.getResponseJson();W($t,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ll.TIMEOUT:W($t,`RPC '${e}' ${o} timed out`),u(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const y=c.getStatus();if(W($t,`RPC '${e}' ${o} failed with status:`,y,"response text:",c.getResponseText()),y>0){let k=c.getResponseJson();Array.isArray(k)&&(k=k[0]);const R=k==null?void 0:k.error;if(R&&R.status&&R.message){const P=function(S){const T=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(R.status);u(new G(P,R.message))}else u(new G(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new G(V.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W($t,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);W($t,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Nd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");W($t,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let p=!1,y=!1;const k=new rb({Ho:R=>{y?W($t,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(p||(W($t,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),W($t,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Jo:()=>f.close()});return Co(f,Do.EventType.OPEN,()=>{y||(W($t,`RPC '${e}' stream ${s} transport opened.`),k.i_())}),Co(f,Do.EventType.CLOSE,()=>{y||(y=!0,W($t,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(f))}),Co(f,Do.EventType.ERROR,R=>{y||(y=!0,Ys($t,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),k.o_(new G(V.UNAVAILABLE,"The operation could not be completed")))}),Co(f,Do.EventType.MESSAGE,R=>{var P;if(!y){const O=R.data[0];De(!!O,16349);const S=O,T=(S==null?void 0:S.error)||((P=S[0])==null?void 0:P.error);if(T){W($t,`RPC '${e}' stream ${s} received error:`,T);const x=T.status;let N=function(I){const v=ft[I];if(v!==void 0)return dw(v)}(x),L=T.message;x==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&Ys(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),N===void 0&&(N=V.INTERNAL,L="Unknown error status: "+x+" with message "+T.message),y=!0,k.o_(new G(N,L)),f.close()}else W($t,`RPC '${e}' stream ${s} received:`,O),k.__(O)}}),Ni.u_(),setTimeout(()=>{k.s_()},0),k}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return b1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){return new Ni(t)}function mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){return new l2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni.c_=!1;class kw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="PersistentStream";class Cw{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new kw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(Uy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(Uy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ib extends Cw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=h2(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?rr(o.readTime):ce.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=bd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ad(u)?{documents:p2(i,u)}:{query:m2(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=mw(i,o.resumeToken);const c=kd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=ku(i,o.snapshotVersion.toTimestamp());const c=kd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=y2(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=bd(this.serializer),n.removeTarget=e,this.K_(n)}}class ob extends Cw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=f2(e.writeResults,e.commitTime),r=rr(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>d2(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{}class lb extends ab{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Cd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Cd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function ub(t,e,n,r){return new lb(t,e,n,r)}class cb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="RemoteStore";class hb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ii(this)&&(W(Js,"Restarting streams for network reachability change."),await async function(u){const c=de(u);c.Ea.add(4),await Ma(c),c.Va.set("Unknown"),c.Ea.delete(4),await dc(c)}(this))})}),this.Va=new cb(r,s)}}async function dc(t){if(ii(t))for(const e of t.Ra)await e(!0)}async function Ma(t){for(const e of t.Ra)await e(!1)}function Rw(t,e){const n=de(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),pp(n)?fp(n):io(n).O_()&&dp(n,e))}function hp(t,e){const n=de(t),r=io(n);n.Ia.delete(e),r.O_()&&bw(n,e),n.Ia.size===0&&(r.O_()?r.L_():ii(n)&&n.Va.set("Unknown"))}function dp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}io(t).Z_(e)}function bw(t,e){t.da.$e(e),io(t).X_(e)}function fp(t){t.da=new s2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),io(t).start(),t.Va.ua()}function pp(t){return ii(t)&&!io(t).x_()&&t.Ia.size>0}function ii(t){return de(t).Ea.size===0}function Pw(t){t.da=void 0}async function db(t){t.Va.set("Online")}async function fb(t){t.Ia.forEach((e,n)=>{dp(t,e)})}async function pb(t,e){Pw(t),pp(t)?(t.Va.ha(e),fp(t)):t.Va.set("Unknown")}async function mb(t,e,n){if(t.Va.set("Online"),e instanceof pw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){W(Js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ru(t,r)}else if(e instanceof $l?t.da.Xe(e):e instanceof fw?t.da.st(e):t.da.tt(e),!n.isEqual(ce.min()))try{const r=await xw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Mt.EMPTY_BYTE_STRING,f.snapshotVersion)),bw(i,u);const p=new Yr(f.target,u,c,f.sequenceNumber);dp(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(Js,"Failed to raise snapshot:",r),await Ru(t,r)}}async function Ru(t,e,n){if(!ro(e))throw e;t.Ea.add(1),await Ma(t),t.Va.set("Offline"),n||(n=()=>xw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Js,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await dc(t)})}function Nw(t,e){return e().catch(n=>Ru(t,n,e))}async function fc(t){const e=de(t),n=ys(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xf;for(;gb(e);)try{const s=await Y2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,yb(e,s)}catch(s){await Ru(e,s)}Dw(e)&&Ow(e)}function gb(t){return ii(t)&&t.Ta.length<10}function yb(t,e){t.Ta.push(e);const n=ys(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Dw(t){return ii(t)&&!ys(t).x_()&&t.Ta.length>0}function Ow(t){ys(t).start()}async function _b(t){ys(t).ra()}async function vb(t){const e=ys(t);for(const n of t.Ta)e.ea(n.mutations)}async function wb(t,e,n){const r=t.Ta.shift(),s=sp.from(r,e,n);await Nw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fc(t)}async function Eb(t,e){e&&ys(t).Y_&&await async function(r,s){if(function(o){return t2(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();ys(r).B_(),await Nw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fc(r)}}(t,e),Dw(t)&&Ow(t)}async function Fy(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),W(Js,"RemoteStore received new credentials");const r=ii(n);n.Ea.add(3),await Ma(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await dc(n)}async function Tb(t,e){const n=de(t);e?(n.Ea.delete(2),await dc(n)):e||(n.Ea.add(2),await Ma(n),n.Va.set("Unknown"))}function io(t){return t.ma||(t.ma=function(n,r,s){const i=de(n);return i.sa(),new ib(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:db.bind(null,t),Yo:fb.bind(null,t),t_:pb.bind(null,t),J_:mb.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),pp(t)?fp(t):t.Va.set("Unknown")):(await t.ma.stop(),Pw(t))})),t.ma}function ys(t){return t.fa||(t.fa=function(n,r,s){const i=de(n);return i.sa(),new ob(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:_b.bind(null,t),t_:Eb.bind(null,t),ta:vb.bind(null,t),na:wb.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await fc(t)):(await t.fa.stop(),t.Ta.length>0&&(W(Js,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new mp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gp(t,e){if(xr("AsyncQueue",`${e}: ${t}`),ro(t))return new G(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{static emptySet(e){return new Di(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.ga=new rt(Z.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):oe(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Yi(e,n,Di.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Sb{constructor(){this.queries=By(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=By(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new G(V.ABORTED,"Firestore shutting down"))}}function By(){return new ri(t=>Z1(t),oc)}async function Ab(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Ib,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=gp(o,`Initialization of query '${hi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&yp(n)}async function xb(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kb(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&yp(n)}function Cb(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function yp(t){t.Ca.forEach(e=>{e.next()})}var Dd,zy;(zy=Dd||(Dd={})).Ma="default",zy.Cache="cache";class Rb{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.key=e}}class Mw{constructor(e){this.key=e}}class bb{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=xe(),this.mutatedKeys=xe(),this.eu=ew(e),this.tu=new Di(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new $y,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const y=s.get(f),k=ac(this.query,p)?p:null,R=!!y&&this.mutatedKeys.has(y.key),P=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;y&&k?y.data.isEqual(k.data)?R!==P&&(r.track({type:3,doc:k}),O=!0):this.su(y,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.eu(k,u)>0||c&&this.eu(k,c)<0)&&(l=!0)):!y&&k?(r.track({type:0,doc:k}),O=!0):y&&!k&&(r.track({type:1,doc:y}),O=!0,(u||c)&&(l=!0)),O&&(k?(o=o.add(k),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(k,R){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Vt:O})}};return P(k)-P(R)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new Yi(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $y,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=xe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Mw(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Vw(r))}),n}cu(e){this.Za=e.ks,this.Ya=xe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Yi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _p="SyncEngine";class Pb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Nb{constructor(e){this.key=e,this.hu=!1}}class Db{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ri(l=>Z1(l),oc),this.Iu=new Map,this.Eu=new Set,this.Ru=new rt(Z.comparator),this.Au=new Map,this.Vu=new ap,this.du={},this.mu=new Map,this.fu=Qi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ob(t,e,n=!0){const r=Bw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Lw(r,e,n,!0),s}async function Vb(t,e){const n=Bw(t);await Lw(n,e,!0,!1)}async function Lw(t,e,n,r){const s=await J2(t.localStore,nr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Mb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Rw(t.remoteStore,s),l}async function Mb(t,e,n,r,s){t.pu=(p,y,k)=>async function(P,O,S,T){let x=O.view.ru(S);x.Ss&&(x=await Vy(P.localStore,O.query,!1).then(({documents:I})=>O.view.ru(I,x)));const N=T&&T.targetChanges.get(O.targetId),L=T&&T.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(x,P.isPrimaryClient,N,L);return qy(P,O.targetId,U.au),U.snapshot}(t,p,y,k);const i=await Vy(t.localStore,e,!0),o=new bb(e,i.ks),l=o.ru(i.documents),u=Va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);qy(t,n,c.au);const f=new Pb(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function Lb(t,e,n){const r=de(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!oc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hp(r.remoteStore,s.targetId),Od(r,s.targetId)}).catch(no)):(Od(r,s.targetId),await Pd(r.localStore,s.targetId,!0))}async function jb(t,e){const n=de(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hp(n.remoteStore,r.targetId))}async function Ub(t,e,n){const r=Gb(t);try{const s=await function(o,l){const u=de(o),c=Ke.now(),f=l.reduce((k,R)=>k.add(R.key),xe());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let R=kr(),P=xe();return u.xs.getEntries(k,f).next(O=>{R=O,R.forEach((S,T)=>{T.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,R)).next(O=>{p=O;const S=[];for(const T of l){const x=YR(T,p.get(T.key).overlayedDocument);x!=null&&S.push(new si(T.key,x,H1(x.value.mapValue),wr.exists(!0)))}return u.mutationQueue.addMutationBatch(k,c,S,l)}).next(O=>{y=O;const S=O.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(k,O.batchId,S)})}).then(()=>({batchId:y.batchId,changes:nw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new rt(Ae)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await La(r,s.changes),await fc(r.remoteStore)}catch(s){const i=gp(s,"Failed to persist write");n.reject(i)}}async function jw(t,e){const n=de(t);try{const r=await K2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?De(o.hu,14607):s.removedDocuments.size>0&&(De(o.hu,42227),o.hu=!1))}),await La(n,r,e)}catch(r){await no(r)}}function Hy(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=de(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const y of p.ba)y.va(l)&&(c=!0)}),c&&yp(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fb(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new rt(Z.comparator);o=o.insert(i,Gt.newNoDocument(i,ce.min()));const l=xe().add(i),u=new cc(ce.min(),new Map,new rt(Ae),o,l);await jw(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),vp(r)}else await Pd(r.localStore,e,!1).then(()=>Od(r,e,n)).catch(no)}async function $b(t,e){const n=de(t),r=e.batch.batchId;try{const s=await W2(n.localStore,e);Fw(n,r,null),Uw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await La(n,s)}catch(s){await no(s)}}async function Bb(t,e,n){const r=de(t);try{const s=await function(o,l){const u=de(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(De(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);Fw(r,e,n),Uw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await La(r,s)}catch(s){await no(s)}}function Uw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Fw(t,e,n){const r=de(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||$w(t,r)})}function $w(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(hp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),vp(t))}function qy(t,e,n){for(const r of n)r instanceof Vw?(t.Vu.addReference(r.key,e),zb(t,r)):r instanceof Mw?(W(_p,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||$w(t,r.key)):oe(19791,{wu:r})}function zb(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(W(_p,"New document in limbo: "+n),t.Eu.add(r),vp(t))}function vp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Z(ze.fromString(e)),r=t.fu.next();t.Au.set(r,new Nb(n)),t.Ru=t.Ru.insert(n,r),Rw(t.remoteStore,new Yr(nr(J1(n.path)),r,"TargetPurposeLimboResolution",rc.ce))}}async function La(t,e,n){const r=de(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=up.Es(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=de(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,y=>M.forEach(y.Ts,k=>f.persistence.referenceDelegate.addReference(p,y.targetId,k)).next(()=>M.forEach(y.Is,k=>f.persistence.referenceDelegate.removeReference(p,y.targetId,k)))))}catch(p){if(!ro(p))throw p;W(cp,"Failed to update sequence numbers: "+p)}for(const p of c){const y=p.targetId;if(!p.fromCache){const k=f.vs.get(y),R=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(y,P)}}}(r.localStore,i))}async function Hb(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){W(_p,"User change. New user:",e.toKey());const r=await Aw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new G(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await La(n,r.Ns)}}function qb(t,e){const n=de(t),r=n.Au.get(e);if(r&&r.hu)return xe().add(r.key);{let s=xe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Bw(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fb.bind(null,e),e.Pu.J_=kb.bind(null,e.eventManager),e.Pu.yu=Cb.bind(null,e.eventManager),e}function Gb(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$b.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bb.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return G2(this.persistence,new z2,e.initialUser,this.serializer)}Cu(e){return new Sw(lp.Vi,this.serializer)}Du(e){return new Z2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class Wb extends bu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){De(this.persistence.referenceDelegate instanceof Cu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new C2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new Sw(r=>Cu.Vi(r,n),this.serializer)}}class Vd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hb.bind(null,this.syncEngine),await Tb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Sb}()}createDatastore(e){const n=hc(e.databaseInfo.databaseId),r=sb(e.databaseInfo);return ub(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new hb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Hy(this.syncEngine,n,0),function(){return jy.v()?new jy:new eb}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const p=new Db(s,i,o,l,u,c);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);W(Js,"RemoteStore shutting down."),i.Ea.add(5),await Ma(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Vd.provider={build:()=>new Vd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="FirestoreClient";class Qb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Ht.UNAUTHENTICATED,this.clientId=Jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(_s,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(_s,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),W(_s,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Aw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Yb(t);W(_s,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Fy(e.remoteStore,s)),t._onlineComponents=e}async function Yb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(_s,"Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ys("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new bu)}}else W(_s,"Using default OfflineComponentProvider"),await gh(t,new Wb(void 0));return t._offlineComponents}async function zw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(_s,"Using user provided OnlineComponentProvider"),await Gy(t,t._uninitializedComponentsProvider._online)):(W(_s,"Using default OnlineComponentProvider"),await Gy(t,new Vd))),t._onlineComponents}function Jb(t){return zw(t).then(e=>e.syncEngine)}async function Xb(t){const e=await zw(t),n=e.eventManager;return n.onListen=Ob.bind(null,e.syncEngine),n.onUnlisten=Lb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Vb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jb.bind(null,e.syncEngine),n}function Zb(t,e,n={}){const r=new ls;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new Kb({next:y=>{f.Nu(),o.enqueueAndForget(()=>xb(i,p)),y.fromCache&&u.source==="server"?c.reject(new G(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(y)},error:y=>c.reject(y)}),p=new Rb(l,f,{includeMetadataChanges:!0,Ka:!0});return Ab(i,p)}(await Xb(t),t.asyncQueue,e,n,r)),r.promise}function eP(t,e){const n=new ls;return t.asyncQueue.enqueueAndForget(async()=>Ub(await Jb(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP="ComponentProvider",Wy=new Map;function nP(t,e,n,r,s){return new yR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Hw(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="firestore.googleapis.com",Ky=!0;class Qy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qw,this.ssl=Ky}else this.host=e.host,this.ssl=e.ssl??Ky;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Iw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<x2)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YC;switch(r.type){case"firstParty":return new eR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wy.get(n);r&&(W(tP,"Removing Datastore"),Wy.delete(n),r.terminate())}(this),Promise.resolve()}}function rP(t,e,n,r={}){var c;t=ga(t,pc);const s=Ts(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(jf(`https://${l}`),Uf("Firestore",!0)),i.host!==qw&&i.host!==l&&Ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Gs(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ht.MOCK_USER;else{f=s1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ht(y)}t._authCredentials=new JC(new N1(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new us(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Da(n,Tt._jsonSchema))return new Tt(e,r||null,new Z(ze.fromString(n.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:gt("string",Tt._jsonSchemaVersion),referencePath:gt("string")};class us extends Is{constructor(e,n,r){super(e,n,J1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new Z(e))}withConverter(e){return new us(this.firestore,e,this._path)}}function Yy(t,e,...n){if(t=St(t),D1("collection","path",e),t instanceof pc){const r=ze.fromString(e,...n);return ly(r),new us(t,null,r)}{if(!(t instanceof Tt||t instanceof us))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return ly(r),new us(t.firestore,null,r)}}function sP(t,e,...n){if(t=St(t),arguments.length===1&&(e=Jf.newId()),D1("doc","path",e),t instanceof pc){const r=ze.fromString(e,...n);return ay(r),new Tt(t,null,new Z(r))}{if(!(t instanceof Tt||t instanceof us))throw new G(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return ay(r),new Tt(t.firestore,t instanceof us?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="AsyncQueue";class Xy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new kw(this,"async_queue_retry"),this._c=()=>{const r=mh();r&&W(Jy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=mh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ls;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ro(e))throw e;W(Jy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",Zy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=mp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:Zy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class wp extends pc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xy(e),this._firestoreClient=void 0,await e}}}function iP(t,e){const n=typeof t=="object"?t:Bf(),r=typeof t=="string"?t:Tu,s=tc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=t1("firestore");i&&rP(s,...i)}return s}function Gw(t){if(t._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oP(t),t._firestoreClient}function oP(t){var r,s,i,o;const e=t._freezeSettings(),n=nP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Qb(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Mt.fromBase64String(e))}catch(n){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new An(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Da(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:gt("string",An._jsonSchemaVersion),bytes:gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sr._jsonSchemaVersion}}static fromJSON(e){if(Da(e,sr._jsonSchema))return new sr(e.latitude,e.longitude)}}sr._jsonSchemaVersion="firestore/geoPoint/1.0",sr._jsonSchema={type:gt("string",sr._jsonSchemaVersion),latitude:gt("number"),longitude:gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Da(e,Fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Fn(e.vectorValues);throw new G(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fn._jsonSchemaVersion="firestore/vectorValue/1.0",Fn._jsonSchema={type:gt("string",Fn._jsonSchemaVersion),vectorValues:gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=/^__.*__$/;class lP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new si(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oa(e,this.data,n,this.fieldTransforms)}}function Kw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{dataSource:t})}}class Tp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Tp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Pu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Kw(this.dataSource)&&aP.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class uP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hc(e)}createContext(e,n,r,s=!1){return new Tp({dataSource:e,methodName:n,targetDoc:r,path:Dt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qw(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new uP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cP(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Xw("Data must be an object, but it was:",o,r);const l=Yw(r,o);let u,c;if(i.merge)u=new Mn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const y=ja(e,p,n);if(!o.contains(y))throw new G(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);pP(f,y)||f.push(y)}u=new Mn(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new lP(new Sn(l),u,c)}class Ip extends Ep{_toFieldTransform(e){return new GR(e.path,new Ta)}isEqual(e){return e instanceof Ip}}function hP(t,e,n,r=!1){return Sp(n,t.createContext(r?4:3,e))}function Sp(t,e){if(Jw(t=St(t)))return Xw("Unsupported field value:",e,t),Yw(t,e);if(t instanceof Ep)return function(r,s){if(!Kw(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Sp(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=St(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:ku(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(s.serializer,i)}}if(r instanceof sr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof An)return{bytesValue:mw(s.serializer,r._byteString)};if(r instanceof Tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:op(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fn)return function(o,l){const u=o instanceof Fn?o.toArray():o;return{mapValue:{fields:{[B1]:{stringValue:z1},[Iu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return rp(l.serializer,f)})}}}}}}(r,s);if(Tw(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${nc(r)}`)}(t,e)}function Yw(t,e){const n={};return M1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,s)=>{const i=Sp(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Jw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof sr||t instanceof An||t instanceof Tt||t instanceof Ep||t instanceof Fn||Tw(t))}function Xw(t,e,n){if(!Jw(n)||!O1(n)){const r=nc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function ja(t,e,n){if((e=St(e))instanceof Ww)return e._internalPath;if(typeof e=="string")return fP(t,e);throw Pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const dP=new RegExp("[~\\*/\\[\\]]");function fP(t,e,n){if(e.search(dP)>=0)throw Pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ww(...e.split("."))._internalPath}catch{throw Pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new G(V.INVALID_ARGUMENT,l+t+u)}function pP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{convertValue(e,n="none"){switch(gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Iu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>lt(o.doubleValue));return new Fn(n)}convertGeoPoint(e){return new sr(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_a(e));default:return null}}convertTimestamp(e){const n=ps(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);De(Ew(r),9688,{name:e});const s=new va(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||xr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP extends mP{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function yP(){return new Ip("serverTimestamp")}const e_="@firebase/firestore",t_="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ja("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _P extends Zw{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ap{}class xp extends Ap{}function n_(t,e,...n){let r=[];e instanceof Ap&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof kp).length,l=i.filter(u=>u instanceof mc).length;if(o>1||o>0&&l>0)throw new G(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class mc extends xp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new mc(e,n,r)}_apply(e){const n=this._parse(e);return eE(e._query,n),new Is(e.firestore,e.converter,xd(e._query,n))}_parse(e){const n=Qw(e.firestore);return function(i,o,l,u,c,f,p){let y;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){a_(p,f);const R=[];for(const P of p)R.push(o_(u,i,P));y={arrayValue:{values:R}}}else y=o_(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||a_(p,f),y=hP(l,o,p,f==="in"||f==="not-in");return mt.create(c,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function r_(t,e,n){const r=e,s=ja("where",t);return mc._create(s,r,n)}class kp extends Ap{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)eE(o,u),o=xd(o,u)}(e._query,n),new Is(e.firestore,e.converter,xd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cp extends xp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new G(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ea(i,o)}(e._query,this._field,this._direction);return new Is(e.firestore,e.converter,VR(e._query,n))}}function s_(t,e="asc"){const n=e,r=ja("orderBy",t);return Cp._create(r,n)}class Rp extends xp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Rp(e,n,r)}_apply(e){return new Is(e.firestore,e.converter,Au(e._query,this._limit,this._limitType))}}function i_(t){return Rp._create("limit",t,"F")}function o_(t,e,n){if(typeof(n=St(n))=="string"){if(n==="")throw new G(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!X1(e)&&n.indexOf("/")!==-1)throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ze.fromString(n));if(!Z.isDocumentKey(r))throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gy(t,new Z(r))}if(n instanceof Tt)return gy(t,n._key);throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nc(n)}.`)}function a_(t,e){if(!Array.isArray(t)||t.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function eE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function wP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Tl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oi extends Zw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ja("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Oi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Oi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Oi._jsonSchema={type:gt("string",Oi._jsonSchemaVersion),bundleSource:gt("string","DocumentSnapshot"),bundleName:gt("string"),bundle:gt("string")};class Bl extends Oi{data(e={}){return super.data(e)}}class Vi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Tl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new Tl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Tl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Tl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:EP(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi._jsonSchemaVersion="firestore/querySnapshot/1.0",Vi._jsonSchema={type:gt("string",Vi._jsonSchemaVersion),bundleSource:gt("string","QuerySnapshot"),bundleName:gt("string"),bundle:gt("string")};function TP(t){t=ga(t,Is);const e=ga(t.firestore,wp),n=Gw(e),r=new gP(e);return vP(t._query),Zb(n,t._query).then(s=>new Vi(e,r,t,s))}function IP(t,e,n){t=ga(t,Tt);const r=ga(t.firestore,wp),s=wP(t.converter,e,n),i=Qw(r);return SP(r,[cP(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,wr.none())])}function SP(t,e){const n=Gw(t);return eP(n,e)}(function(e,n=!0){QC(ti),Ws(new ds("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new wp(new XC(r.getProvider("auth-internal")),new tR(o,r.getProvider("app-check-internal")),_R(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),tr(e_,t_,e),tr(e_,t_,"esm2020")})();const AP={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},bp=a1(AP),Pp=qC(bp),Md=iP(bp),Ld="shorts_brain_snapshots";function xP(t){const e=t?new Date(t):new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const n=new Date(e.getFullYear(),0,4),r=1+Math.round(((e.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7);return`${e.getFullYear()}-W${r.toString().padStart(2,"0")}`}async function kP(t){const e=Qf(Pp,t),n=await zC(e);return new TextDecoder().decode(n)}async function CP({weekId:t,reportingDate:e,rawFiles:n}){const r=`shorts-brain/weekly/${t}`,s=[];if(n)for(const[o,l]of Object.entries(n)){if(!l)continue;const u=Qf(Pp,`${r}/${o}.csv`);await HC(u,l,{contentType:"text/csv"}),s.push(o)}const i={weekId:t,reportingDate:e||null,savedAt:yP(),rawFileKeys:s};return await IP(sP(Md,Ld,t),i,{merge:!0}),{weekId:t,savedAt:new Date().toISOString(),fileCount:s.length}}async function l_(t){let e=n_(Yy(Md,Ld),s_("weekId","desc"),i_(52));t&&(e=n_(Yy(Md,Ld),s_("weekId","desc"),r_("weekId",">=",`${t}-W01`),r_("weekId","<=",`${t}-W53`),i_(52)));const n=await TP(e),r=[];return n.forEach(s=>{const i=s.data();r.push({weekId:i.weekId,reportingDate:i.reportingDate,savedAt:i.savedAt,rawFileKeys:i.rawFileKeys||[]})}),{snapshots:r,count:r.length}}async function RP(t){const e=`shorts-brain/weekly/${t}`,n=Qf(Pp,e);let r=[];try{const i=await ry(n);if(r=i.items,i.prefixes.length>0)for(const o of i.prefixes){const l=await ry(o);r=r.concat(l.items)}}catch(i){return console.error("Failed to list snapshot files:",i),null}const s={};return await Promise.all(r.map(async i=>{if(i.name.endsWith(".csv"))try{const o=await kP(i.fullPath),l=i.name.replace(".csv","");s[l]=o}catch(o){console.error(`Failed to download ${i.fullPath}:`,o)}})),s}const fr=["DAU-SCT","DAC-SCT","GenAI DAU-SCT","Impressions","CTR"],hr=["India","Indonesia","Japan","South Korea","AUNZ"],zl={India:"IN",Indonesia:"ID",Japan:"JP","South Korea":"KR",AUNZ:"AUNZ"},jd={IN:"India",ID:"Indonesia",JP:"Japan",KR:"South Korea",AUNZ:"AUNZ"},Hl=["SSC","Shelf","UTS","MVR","UTS SFV","JP Proactive Container"],Bt=["female","male","total"],bP={female:"FEMALE",male:"MALE",total:"GenPop"},wn=["18-24","25-34","18-34","35+","total"],PP={"18-24":"18-24","25-34":"25-34","18-34":"18-34","35+":"35-44",total:"GenPop"},u_={APAC:.15,INDIA:.16,INDONESIA:.29,JAPAN:1.2,"SOUTH KOREA":1.08,AUNZ:1.56,IN:.16,ID:.29,JP:1.2,KR:1.08},NP=[{id:"Upload",label:"Data Ingestion",icon:QS},{id:"OKR",label:"Shorts OKR Performance",icon:VA},{id:"Global Hub",label:"Global Holdback",icon:Kv},{id:"Market Hub",label:"Campaign Holdback",icon:lA}],Il=[{id:"AlwaysOn",label:"Always-On",icon:Yv},{id:"ScaledCreation",label:"Scaled Creation",icon:DA},{id:"Trends",label:"Trends",icon:Qv},{id:"CultMo",label:"CultMo",icon:JS},{id:"ArtMo",label:"ArtMo",icon:mA},{id:"GenAI Hub",label:"GenAI Hub",icon:BA}],DP=[{g:"total",a:"total",label:"GenPop"},{g:"total",a:"18-34",label:"GenPop 18-34"},{g:"total",a:"18-24",label:"GenPop 18-24"},{g:"total",a:"25-34",label:"GenPop 25-34"},{g:"total",a:"35+",label:"GenPop 35+"},{g:"male",a:"total",label:"Male GenPop"},{g:"female",a:"total",label:"Female GenPop"},{g:"female",a:"18-34",label:"Female 18-34"},{g:"female",a:"18-24",label:"Female 18-24"},{g:"female",a:"25-34",label:"Female 25-34"},{g:"female",a:"35+",label:"Female 35+"},{g:"male",a:"18-34",label:"Male 18-34"},{g:"male",a:"18-24",label:"Male 18-24"},{g:"male",a:"25-34",label:"Male 25-34"},{g:"male",a:"35+",label:"Male 35+"}],Ue=t=>(t||"").toString().replace(/['"]/g,"").replace(/\u00A0/g," ").trim(),zt=t=>{try{return Ue(t).toUpperCase().replace(/[^\p{L}\p{N}]/gu,"")}catch{return Ue(t).toUpperCase().replace(/[\s\-_&!?,.()'"\uFF01]/g,"")}},Yn=(t,e)=>zt(t)===zt(e),OP=t=>zt(t).replace(/INDIA$|INDONESIA$|JAPAN$|SOUTHKOREA$|AUNZ$|IN$|ID$|JP$|KR$/g,"").trim(),VP=t=>t===0?"0.00":t==="NA"||t===null||t===void 0||isNaN(t)?"-":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t),xn=t=>{const e=Ue(t);if(!e||e==="-"||e==="Unknown")return null;try{if(e.includes("-")&&e.split("-")[0].length===4)return e;const n=e.split(/[-/]/);if(n.length===3){let s=parseInt(n[0],10),i=parseInt(n[1],10),o=parseInt(n[2],10);o<100&&(o+=2e3);let l,u;return s>12?(u=s,l=i):i>12?(l=s,u=i):(u=s,l=i),l>12?null:`${o}-${l.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return isNaN(r.getTime())?null:r.toISOString().split("T")[0]}catch{return null}},tE=(t,e)=>{const n=xn(t),r=xn(e)||new Date().toISOString().split("T")[0];if(!n)return 0;try{const s=new Date(n),i=new Date(r),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));return o>=0?o+1:1}catch{return 0}},MP=(t,e)=>{const n=xn(t),r=xn(e);if(!n||!r)return!1;try{return new Date(n)>=new Date(r)}catch{return!1}},nn=t=>{const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];i==='"'?r=!r:i===","&&!r?(e.push(n.trim()),n=""):n+=i}return e.push(n.trim()),e},Ee=(t,e)=>{const n=t.map(s=>(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"")),r=e.map(s=>s.toUpperCase().replace(/[^A-Z0-9]/g,""));for(const s of r){const i=n.indexOf(s);if(i!==-1)return i}return n.findIndex(s=>r.some(i=>s.includes(i)))},LP=(t,e,n=null)=>{var i,o;const r=zt(t),s=OP(t);if(!r)return{};if(n){const l=zt(n);if((i=e[l])!=null&&i[r])return e[l][r];if((o=e[l])!=null&&o[s])return e[l][s]}for(const l in e){if(e[l][r])return e[l][r];if(e[l][s])return e[l][s]}return{}},ur=(t,e={},n={},r=["Campaign","Campaign Name","Country","Market"],s=!1,i=null,o=!1,l=!1)=>{try{const u=t.split(/\r?\n/).filter(T=>T.trim()!=="");if(u.length<2)return e;const c=nn(u[0]),f=Ee(c,r),p=Ee(c,["Country","Market","Market Name"]),y=Ee(c,["Value Type","Metric Type"]),k=Ee(c,["Slice","Segment"]),R=Ee(c,["Date","Reporting Date","Day","Latest Date"]),P=Ee(c,["Trend Start Date","Trend Start"]),O=Ee(c,["Trend End Date","Trend End"]);if(f===-1)return e;const S={...e};return u.slice(1).forEach(T=>{const x=nn(T),N=y!==-1?(x[y]||"").replace(/['"]/g,"").trim().toUpperCase():"",L=k!==-1?(x[k]||"").replace(/['"]/g,"").trim().toUpperCase():"",U=R!==-1?xn(x[R]):null,I=!s&&(N==="RATIO (%)"||N==="RATIO"||N.includes("LIFT")||N==="")&&(L==="CONTROL"||L===""||L==="TOTAL"),v=s&&(N.includes("DELTA")||N===""||N==="TOTAL"||N.includes("IMPRESSIONS")||N.includes("ABSOLUTE")||N.includes("VOLUME")||N.includes("CTR"))&&(L==="CONTROL"||L==="TEST"||L==="TREATMENT"||L===""||L==="TOTAL"),m=N.includes("TREND FAVORABILITY")&&(L==="CONTROL"||L===""||L==="TOTAL");if(!I&&!m&&!v)return;const w=Ue(x[f])||"Unknown";let A=p!==-1?Ue(x[p]):i||"APAC",C=jd[A.toUpperCase()]||A;const E=LP(w,n,C==="APAC"?null:C);C==="APAC"&&E&&E.market&&(C=E.market),C==="APAC"&&(C="India");const X=`${C}_${w}`;let fe=null;const qe=Ee(c,["Gender","Sex"]);if(qe!==-1){const B=(x[qe]||"").toLowerCase().trim();B==="female"||B==="f"?fe="female":B==="male"||B==="m"?fe="male":(B==="total"||B==="all"||B==="genpop"||B==="gen pop")&&(fe="total")}else fe="total";if(!fe)return;let ee="total";const $=Ee(c,["Age","Age Group"]);if($!==-1){const B=(x[$]||"").toLowerCase().trim();B.includes("18-24")?ee="18-24":B.includes("25-34")?ee="25-34":B.includes("18-34")?ee="18-34":B.includes("35")&&(ee="35+")}const H=o||zt(w).includes("GLOBALHOLDBACK");if(!S[X]){const B=P!==-1?xn(x[P]):null,Ie=O!==-1?xn(x[O]):null;S[X]={country:w,market:C,metrics:{},isAnchor:H,campaignStartDate:B||E.campaignStartDate||null,campaignEndDate:Ie||E.campaignEndDate||null,optimisationEndDate:E.optimisationEndDate||U,segmentTag:E.subTab||"Campaign Hub",meta:E,dataMinDate:U,dataMaxDate:U,explicitTrendStart:B,explicitTrendEnd:Ie},fr.forEach(ge=>{S[X].metrics[ge]={female:{},male:{},total:{}},Bt.forEach(ye=>{wn.forEach(ae=>S[X].metrics[ge][ye][ae]={v:0,sig:0,abs:0,isPaused:!1,launchDate:null})})})}U&&((!S[X].dataMinDate||U<S[X].dataMinDate)&&(S[X].dataMinDate=U),(!S[X].dataMaxDate||U>S[X].dataMaxDate)&&(S[X].dataMaxDate=U)),fr.forEach(B=>{const Ie={"DAU-SCT":["DAU-SCT","DAILY SHORTS CREATION TOOL ACTIVE USERS"],"DAC-SCT":["DAC-SCT","DAILY SHORTS CONVERTERS"],"GenAI DAU-SCT":["GENAI DAU","GENAI DAILY ACTIVE USERS"],Impressions:["IMPRESSIONS","TOTAL IMPRESSIONS","REACH","IMPS"],CTR:["CTR","CLICK THROUGH RATE","CLICK-THROUGH RATE"]},ge=c.findIndex(_e=>{const ue=_e.toUpperCase(),pe=(Ie[B]||[]).some(cn=>ue.includes(cn)),Xe=ue.includes("CONFIDENCE")||ue.includes("BOUND");return pe&&!Xe&&(B!=="DAU-SCT"||!ue.includes("GENAI"))});if(ge===-1)return;const ye=(x[ge]||"").replace(/['"]/g,"").trim(),ae=parseFloat(ye.replace(/[^\d.-]/g,""))||0,Qt=S[X].meta.targeting;let yt=!1;if(H||l)yt=!0;else if(Qt){const _e=Qt.ages.length===0||Qt.ages.includes(ee),ue=Qt.genders.length===0||Qt.genders.includes(fe);yt=_e&&ue}else yt=!0;const vn=B==="GenAI DAU-SCT",j=(S[X].meta.tab||"").toLowerCase()==="genai hub",q=yt&&(!vn||j||H),re=q?ae:"NA";if(I)(re!=="NA"&&re!==0||S[X].metrics[B][fe][ee].v===0||S[X].metrics[B][fe][ee].v==="NA")&&(S[X].metrics[B][fe][ee].v=re);else if(v)B==="Impressions"||B==="CTR"?(re!=="NA"&&re!==0||S[X].metrics[B][fe][ee].v===0||S[X].metrics[B][fe][ee].v==="NA")&&(S[X].metrics[B][fe][ee].v=re):(re!=="NA"&&re!==0||S[X].metrics[B][fe][ee].abs===0||S[X].metrics[B][fe][ee].abs==="NA")&&(S[X].metrics[B][fe][ee].abs=re);else if(m&&q){const _e=ye.toUpperCase(),ue=_e.includes("POSITIVE")||_e.includes("SSP")?1:_e.includes("NEGATIVE")||_e.includes("SSN")?-1:0;ue!==0&&(S[X].metrics[B][fe][ee].sig=ue)}})}),S}catch(u){return console.error("CSV Parse Error:",u),e}},jP=(t,e)=>e?{cardBg:"bg-[#1a1a1a]",color:"text-[#808080]",accent:"bg-[#3a3a3a]"}:t>=100?{cardBg:"bg-[#0a1f0a]",color:"text-emerald-400",accent:"bg-emerald-500"}:t>=70?{cardBg:"bg-[#1a1a1a]",color:"text-amber-400",accent:"bg-amber-500"}:{cardBg:"bg-[#1a0a0a]",color:"text-red-400",accent:"bg-red-500"},c_=({activeMetrics:t,toggleMetric:e,handleAllToggle:n,allowedMetrics:r=fr})=>g.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[g.jsx("div",{className:"flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]",children:r.map(s=>g.jsx("button",{onClick:()=>e(s),className:`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${t.includes(s)?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:s},s))}),g.jsx("button",{onClick:n,className:`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${t.length===r.length?"bg-white text-black border-white":"bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]"}`,children:t.length===r.length?"Selective View":"Sync All Metrics"})]}),h_=({data:t,activeMetrics:e,latestGlobalDate:n,isCampaignView:r=!1,hideDates:s=!1,isAlwaysOn:i=!1})=>{const o=ie.useRef(null),l={female:{1:"bg-blue-900/40 text-blue-100",2:"bg-blue-900/20",3:"bg-blue-950/40 text-blue-400"},male:{1:"bg-purple-900/40 text-purple-100",2:"bg-purple-900/20",3:"bg-purple-950/40 text-purple-400"},total:{1:"bg-amber-900/80 text-amber-50",2:"bg-amber-800/20",3:"bg-amber-950 text-amber-400 font-bold"}},u=c=>{o.current&&o.current.scrollBy({left:c==="left"?-600:600,behavior:"smooth"})};return!t||t.length===0?g.jsxs("div",{className:"py-40 text-center flex flex-col items-center justify-center gap-6",children:[g.jsx("div",{className:"p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]",children:g.jsx(HA,{className:"w-12 h-12 text-[#3a3a3a] animate-pulse"})}),g.jsx("p",{className:"text-[#808080] font-bold text-sm uppercase tracking-widest",children:"No Data Available"})]}):g.jsxs("div",{className:"relative group/table",children:[g.jsx("button",{onClick:()=>u("left"),className:"absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:g.jsx(MS,{className:"w-6 h-6"})}),g.jsx("button",{onClick:()=>u("right"),className:"absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:g.jsx(jS,{className:"w-6 h-6"})}),g.jsx("div",{ref:o,className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto scroll-smooth",children:g.jsxs("table",{className:"w-full text-center border-collapse",children:[g.jsxs("thead",{children:[g.jsxs("tr",{className:"text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:[g.jsx("th",{rowSpan:3,className:"px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[300px]",children:i?"Trend Identifier":r?"Campaign Entity":"Country / Market"}),Bt.map((c,f)=>g.jsx("th",{colSpan:wn.length*e.length,className:`py-6 border-white/10 ${l[c][1]} ${f<Bt.length-1?"border-r-2 border-white/20":""}`,children:g.jsxs("div",{className:"flex items-center justify-center gap-3",children:[g.jsx(FA,{className:"w-4 h-4 opacity-50"}),bP[c]]})},c))]}),g.jsx("tr",{className:"text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:Bt.map(c=>g.jsx(ui.Fragment,{children:wn.map((f,p)=>g.jsx("th",{colSpan:e.length,className:`py-4 transition-colors ${l[c][2]} ${p===wn.length-1&&Bt.indexOf(c)<Bt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:PP[f]},f))},c))}),g.jsx("tr",{className:"text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]",children:Bt.map(c=>g.jsx(ui.Fragment,{children:wn.map((f,p)=>g.jsx(ui.Fragment,{children:e.map((y,k)=>g.jsx("th",{className:`py-3 px-3 font-mono ${l[c][3]} ${p===wn.length-1&&k===e.length-1&&Bt.indexOf(c)<Bt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:y.includes("GenAI")?"GenAI":y==="Impressions"?"Imprs":y.split("-")[0]},y))},f))},c))})]}),g.jsx("tbody",{className:"divide-y divide-white/5",children:t.map((c,f)=>{var x,N,L;const p=!!c.isAnchor,y=(L=(N=(x=c.metrics)==null?void 0:x[e[0]||"DAU-SCT"])==null?void 0:N.total)==null?void 0:L.total,k=y!=null&&y.isPaused&&(y!=null&&y.launchDate)&&y.launchDate!=="Ended"?y.launchDate:null,R=i?c.explicitTrendStart||c.dataMinDate||c.campaignStartDate:c.campaignStartDate||c.explicitTrendStart||c.dataMinDate,P=c.campaignEndDate||k||c.optimisationEndDate;let S=i?c.explicitTrendEnd||c.dataMaxDate||P:c.campaignEndDate||c.explicitTrendEnd||c.dataMaxDate||c.optimisationEndDate;!i&&n&&S&&new Date(S)>new Date(n)&&(S=n);const T=tE(R,S);return g.jsxs("tr",{className:`transition-all duration-200 ${p?"bg-white/[0.05]":"hover:bg-white/[0.03]"}`,children:[g.jsx("td",{className:`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 bg-[#111] ${p?"text-blue-400 font-bold":"text-[#e0e0e0]"}`,children:g.jsxs("div",{className:"flex flex-col gap-1.5",children:[g.jsx("span",{className:"font-bold text-[12px] uppercase tracking-tight",children:p?`${c.country} (Reference)`:String(c.country||"Unknown")}),!s&&!p&&(R||i)&&g.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 p-2 rounded bg-black/40 border border-white/5 shadow-inner",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Lg,{className:"w-3 h-3 text-blue-400"}),g.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[g.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend Start:":"Start:"}),String(R||"N/A")]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Lg,{className:"w-3 h-3 text-amber-400"}),g.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[g.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend End:":"End:"}),String(r&&c.campaignEndDate?c.campaignEndDate:S||"Active")]})]}),g.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[g.jsx(Lf,{className:"w-3 h-3 text-emerald-400"}),g.jsxs("span",{className:"text-[9px] font-bold tracking-tighter uppercase text-emerald-400",children:[i?"Trend Days Live:":"Days Live:"," ",T]})]})]})]})}),Bt.map(U=>g.jsx(ui.Fragment,{children:wn.map((I,v)=>g.jsx(ui.Fragment,{children:e.map(m=>{const w=c.metrics[m][U][I],A=v===wn.length-1&&e.indexOf(m)===e.length-1;let C="text-slate-500 font-medium",E="";const X=w.isPaused&&!p;return X?(C="text-[#808080] font-bold",E="bg-[#1a1a1a]"):w.v!=="NA"&&w.sig===-1?(C="text-red-500 font-bold",E="bg-red-500/10"):w.v!=="NA"&&w.sig===1?(C="text-emerald-500 font-bold",E="bg-emerald-500/10"):w.v!==0&&w.v!=="NA"&&(C="text-slate-100 font-bold"),g.jsx("td",{className:`py-5 px-3 font-mono text-[13px] tabular-nums ${C} ${E} ${A&&Bt.indexOf(U)<Bt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:g.jsx("div",{className:"flex flex-col items-center text-center",children:X?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"leading-none uppercase",children:"Paused"}),g.jsx("span",{className:"text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic",children:String(w.launchDate||"No Data")})]}):w.v==="NA"?g.jsx("span",{className:"text-gray-500 opacity-50 font-bold",children:"NA"}):g.jsxs(g.Fragment,{children:[g.jsx("span",{children:p&&(m==="Impressions"||m==="CTR")&&w.v===0?"NA":m==="Impressions"?VP(w.v):m==="CTR"?`${(w.v||0).toFixed(2)}%`:w.v===0?"0.00":w.v>0?`+${w.v.toFixed(2)}`:`${w.v.toFixed(2)}`}),w.abs!==0&&w.abs!=="NA"&&m!=="Impressions"&&m!=="CTR"&&g.jsxs("span",{className:"text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none",children:["(",w.abs>0?`+${Math.round(w.abs).toLocaleString()}`:Math.round(w.abs).toLocaleString(),")"]})]})})},`${f}-${m}-${U}-${I}`)})},I))},U))]},`${f}-${c.country}`)})})]})})]})},d_=async t=>{try{await navigator.clipboard.writeText(t)}catch{const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},UP=({globalData:t,regionalData:e,latestDate:n})=>{const[r,s]=ie.useState(null),[i,o]=ie.useState({}),[l,u]=ie.useState([]),[c,f]=ie.useState(!1),[p,y]=ie.useState(new Set),[k,R]=ie.useState(null),[P,O]=ie.useState({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}),S=m=>{R(m),setTimeout(()=>R(null),2e3)},T=ie.useMemo(()=>{if(!n)return"TBD";const m=new Date("2026-03-31"),w=new Date(n),A=Math.ceil((m-w)/(1e3*60*60*24));return A>0?A:0},[n]),x=ie.useMemo(()=>["APAC","India","Indonesia","Japan","South Korea","AUNZ"].map(m=>{var E,X,fe,qe;const w=t.find(ee=>Yn(ee.country,m)||Yn(ee.country,zl[m])),A=((qe=(fe=(X=(E=w==null?void 0:w.metrics)==null?void 0:E["DAU-SCT"])==null?void 0:X.total)==null?void 0:fe.total)==null?void 0:qe.v)||0,C=u_[m.toUpperCase()]||1;return{market:m.toUpperCase(),actual:A,target:C,perfIndex:C>0?A/C*100:0,isOffline:!w}}),[t]),N=ie.useMemo(()=>{const m=[];return["APAC","India","Indonesia","Japan","South Korea","AUNZ"].forEach(A=>{var E,X,fe,qe;const C=t.find(ee=>Yn(ee.country,A)||Yn(ee.country,zl[A]));if(C){const ee=((qe=(fe=(X=(E=C.metrics)==null?void 0:E["DAU-SCT"])==null?void 0:X.total)==null?void 0:fe.total)==null?void 0:qe.v)||0,$=u_[A.toUpperCase()]||1,H=ee/$*100;let B="MEET TARGET";H<70?B="AT RISK":H<100&&(B="ON TRACK"),m.push({id:`MARKET_${A}`,country:A.toUpperCase(),campaign:"GLOBAL HUB AUDIT",age:"GenPop",gender:"GenPop",segment:"MARKET HEALTH",recommendation:B,justification:`${A} lift: ${ee.toFixed(3)}% (${H.toFixed(1)}% of target).`,isMarketAudit:!0})}}),hr.forEach(A=>{(e[A]||[]).forEach((E,X)=>{if(MP(E.optimisationEndDate,E.campaignEndDate))return;const fe=tE(E.campaignStartDate,E.optimisationEndDate),qe=[];DP.forEach(ee=>{var B,Ie,ge;const $=((ge=(Ie=(B=E.metrics)==null?void 0:B["DAU-SCT"])==null?void 0:Ie[ee.g])==null?void 0:ge[ee.a])||{v:0,sig:0},H=ee.label;$.isPaused||($.sig===-1?qe.push({g:ee.g,a:ee.a,label:H,recommendation:"PAUSE",justification:`Pause ${H}: Stat-sig negative lift (-${Math.abs($.v).toFixed(2)}%).`,statusType:"danger"}):ee.g==="total"&&ee.a==="total"&&fe>14&&$.v<-.01?qe.push({g:ee.g,a:ee.a,label:H,recommendation:"PAUSE",justification:`Pause ${H}: Negative lift observed post-learning.`,statusType:"danger"}):$.sig===1&&$.v>.001?qe.push({g:ee.g,a:ee.a,label:H,recommendation:"SCALE",justification:`Scale ${H}: Stat-sig positive lift (+${$.v.toFixed(2)}%).`,statusType:"success"}):ee.g==="total"&&ee.a==="total"&&fe<=14&&fe>0&&qe.push({g:ee.g,a:ee.a,label:H,recommendation:"MAINTAIN",justification:"Learning phase stage (<14d).",statusType:"warning"}))}),qe.length>0&&["PAUSE","SCALE","MAINTAIN"].forEach($=>{let H=qe.filter(ye=>ye.recommendation===$);if(H.length===0)return;const B=H.find(ye=>ye.g==="male"&&ye.a==="total"),Ie=H.find(ye=>ye.g==="female"&&ye.a==="total");B&&Ie&&(H.find(ae=>ae.g==="total"&&ae.a==="total")||H.push({g:"total",a:"total",label:"GenPop",recommendation:$,justification:`Consolidated ${$}: Impact observed across GenPop.`,statusType:B.statusType}),H=H.filter(ae=>!(ae.a==="total"&&(ae.g==="male"||ae.g==="female"))));const ge=new Set;H.forEach(ye=>{H.forEach(ae=>{if(!(ye===ae||ge.has(ae))){if(ye.g==="total"&&ye.a==="total"){ge.add(ae);return}if(ye.a==="total"&&ye.g===ae.g&&ae.a!=="total"){ge.add(ae);return}if(ye.a==="18-34"&&(ae.a==="18-24"||ae.a==="25-34")&&ye.g===ae.g){ge.add(ae);return}}})}),H.forEach((ye,ae)=>{ge.has(ye)||m.push({...ye,id:`CAMP_${A}_${X}_${$}_${ae}`,country:zl[A]||A.toUpperCase(),campaign:E.country,segment:E.segmentTag||"Campaign Hub",daysLive:fe.toString(),age:ye.a==="total"?"GenPop":ye.a,gender:ye.g==="total"?"GenPop":ye.g.toUpperCase()})})})})}),[...m,...l].filter(A=>!p.has(A.id)).map(A=>i[A.id]?{...A,...i[A.id]}:A)},[t,e,l,p,i]),L=async m=>{const w=`${m.country}	${m.campaign}	${m.age}	${m.gender}	${m.recommendation}	${m.justification}`;await d_(w),S("Row Copied to Clipboard")},U=async()=>{if(N.length===0)return;const m="Market	Entity	Age	Gender	Directive	Justification",w=N.map(A=>`${A.country}	${A.campaign}	${A.age}	${A.gender}	${A.recommendation}	${A.justification}`).join(`
`);await d_(`${m}
${w}`),S("Full Matrix Copied for Sheets")},I=()=>{y(new Set),o({}),u([]),S("Matrix Restored to Baseline")},v=()=>{if(!P.campaign)return;const m=`MANUAL_${Date.now()}`;u(w=>[...w,{...P,id:m,statusType:P.recommendation==="PAUSE"?"danger":P.recommendation==="SCALE"?"success":"warning"}]),f(!1),O({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""})};return g.jsxs("div",{className:"w-full max-w-[1600px] mx-auto pb-32",children:[k&&g.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase",children:k}),g.jsx("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8",children:g.jsxs("div",{className:"space-y-4",children:[g.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase",children:"Shorts OKR Performance"}),g.jsxs("div",{className:"flex flex-wrap gap-10 pt-4",children:[g.jsxs("div",{className:"space-y-1",children:[g.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Quarter Start"}),g.jsx("p",{className:"text-lg font-bold text-white",children:"2026-02-01"})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Reporting Date (Latest)"}),g.jsx("p",{className:"text-lg font-bold text-emerald-400",children:n||"Awaiting Data..."})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Days Left in Q1"}),g.jsxs("p",{className:"text-lg font-bold text-amber-400",children:[T," ",g.jsx("span",{className:"text-[10px] text-[#808080] ml-1 font-normal",children:"days remaining"})]})]})]})]})}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:x.map((m,w)=>{const A=jP(m.perfIndex,m.isOffline);return g.jsxs("div",{className:`relative ${A.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555]`,children:[g.jsx("div",{className:"flex justify-between items-start mb-6",children:g.jsx("h3",{className:"text-xl font-bold text-white uppercase",children:m.market})}),g.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[g.jsxs("span",{className:"text-3xl font-bold text-white",children:[m.perfIndex.toFixed(1),"%"]}),g.jsx("span",{className:"text-[9px] font-bold text-[#808080] uppercase",children:"INDEX"})]}),g.jsx("div",{className:"relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4",children:g.jsx("div",{className:`h-full ${A.accent}`,style:{width:`${Math.min(m.perfIndex,100)}%`}})}),g.jsxs("div",{className:"flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]",children:[g.jsxs("div",{className:"text-[#808080] uppercase",children:["Actual: ",g.jsxs("span",{className:"text-white",children:["+",m.actual.toFixed(2),"%"]})]}),g.jsxs("div",{className:"text-[#808080] uppercase",children:["Target: ",g.jsxs("span",{className:"text-[#b0b0b0]",children:[m.target.toFixed(2),"%"]})]})]})]},w)})}),g.jsxs("div",{className:"space-y-8",children:[g.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("div",{className:"p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]",children:g.jsx(cA,{className:"w-6 h-6 text-amber-400"})}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold text-white uppercase",children:"Strategic Guidance"}),g.jsx("p",{className:"text-[#808080] text-xs uppercase tracking-widest mt-1",children:"Manual Overrides"})]})]}),g.jsxs("div",{className:"flex flex-wrap gap-3",children:[g.jsxs("button",{onClick:()=>f(!0),className:"flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all",children:[g.jsx(EA,{className:"w-4 h-4"})," Add Pointer"]}),g.jsxs("button",{onClick:U,className:"flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[g.jsx(jg,{className:"w-4 h-4"})," Copy All for Sheets"]}),g.jsxs("button",{onClick:I,className:"flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a]",children:[g.jsx(kA,{className:"w-4 h-4"})," Restore Defaults"]})]})]}),c&&g.jsxs("div",{className:"bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6",children:[g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Market"}),g.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase outline-none focus:border-[#FF0000] text-white",value:P.country,onChange:m=>O(w=>({...w,country:m.target.value.toUpperCase()}))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Entity"}),g.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",placeholder:"e.g. Veo Effects",value:P.campaign,onChange:m=>O(w=>({...w,campaign:m.target.value}))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Age"}),g.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:P.age,onChange:m=>O(w=>({...w,age:m.target.value}))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Gender"}),g.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:P.gender,onChange:m=>O(w=>({...w,gender:m.target.value}))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Directive"}),g.jsxs("select",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none text-white",value:P.recommendation,onChange:m=>O(w=>({...w,recommendation:m.target.value})),children:[g.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),g.jsx("option",{value:"SCALE",children:"SCALE"}),g.jsx("option",{value:"PAUSE",children:"PAUSE"})]})]})]}),g.jsx("textarea",{className:"w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] outline-none focus:border-[#FF0000] mb-4",placeholder:"Strategic justification context...",value:P.justification,onChange:m=>O(w=>({...w,justification:m.target.value}))}),g.jsxs("div",{className:"flex justify-end gap-3",children:[g.jsx("button",{onClick:()=>f(!1),className:"bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg hover:text-white font-bold text-[10px] uppercase transition-all border border-[#3a3a3a]",children:"Cancel"}),g.jsx("button",{onClick:v,className:"bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-500 font-bold text-[10px] uppercase transition-all",children:"Confirm Pointer"})]})]}),g.jsx("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto",children:g.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[g.jsx("thead",{children:g.jsxs("tr",{className:"bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold",children:[g.jsx("th",{className:"px-8 py-6 text-left",children:"Market"}),g.jsx("th",{className:"px-8 py-6 text-left",children:"Entity"}),g.jsx("th",{className:"px-8 py-6 text-center",children:"Age"}),g.jsx("th",{className:"px-8 py-6 text-center",children:"Gender"}),g.jsx("th",{className:"px-8 py-6 text-left",children:"Directive"}),g.jsx("th",{className:"px-8 py-6 text-left",children:"Justification"}),g.jsx("th",{className:"px-8 py-6 text-center",children:"Action"})]})}),g.jsx("tbody",{className:"divide-y divide-white/5",children:N.map(m=>{var w,A;return g.jsxs("tr",{className:`hover:bg-white/[0.02] group/row transition-colors ${m.recommendation==="PAUSE"?"bg-red-500/[0.03]":""}`,children:[g.jsx("td",{className:`px-8 py-4 font-bold uppercase ${m.isMarketAudit?"text-emerald-400":"text-blue-400"}`,children:m.country}),g.jsx("td",{className:"px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]",children:m.campaign}),g.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:m.age}),g.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:m.gender}),g.jsx("td",{className:"px-8 py-4 font-bold",children:r===m.id?g.jsxs("select",{className:"bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none",value:((w=i[m.id])==null?void 0:w.recommendation)||m.recommendation,onChange:C=>o(E=>({...E,[m.id]:{...E[m.id]||m,recommendation:C.target.value}})),children:[g.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),g.jsx("option",{value:"SCALE",children:"SCALE"}),g.jsx("option",{value:"PAUSE",children:"PAUSE"})]}):g.jsx("span",{className:`${m.recommendation==="PAUSE"?"text-red-400":m.recommendation==="SCALE"?"text-emerald-400":"text-amber-400"}`,children:m.recommendation})}),g.jsx("td",{className:"px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed",children:r===m.id?g.jsx("textarea",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none min-h-[60px]",value:((A=i[m.id])==null?void 0:A.justification)||m.justification,onChange:C=>o(E=>({...E,[m.id]:{...E[m.id]||m,justification:C.target.value}}))}):m.justification}),g.jsx("td",{className:"px-8 py-5 text-center",children:g.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity",children:[r===m.id?g.jsx("button",{onClick:()=>s(null),className:"p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg",children:g.jsx(RA,{className:"w-4 h-4"})}):g.jsx("button",{onClick:()=>s(m.id),title:"Edit Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all",children:g.jsx(yA,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>L(m),title:"Copy Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-all",children:g.jsx(jg,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>y(C=>new Set(C).add(m.id)),title:"Delete Pointer",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500 hover:bg-white/10 transition-all",children:g.jsx(LA,{className:"w-4 h-4"})})]})})]},m.id)})})]})})]})]})},FP=({uploadedFiles:t,handleFileUpload:e,startAnalysis:n,isAnalyzing:r,memoryIndex:s,loadHistoricalWeek:i,isLoadingMemory:o,historicalSnapshots:l})=>{const u=({type:c,title:f,icon:p,tag:y})=>g.jsxs("div",{className:`p-6 rounded-lg border ${c==="pct"?"border-amber-500/30 bg-[#1a1500]":"border-blue-500/30 bg-[#0a0a1a]"} mb-6 transition-all`,children:[g.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[g.jsx("div",{className:`p-2 rounded-lg flex items-center justify-center ${c==="pct"?"bg-amber-500/20 text-amber-500":"bg-blue-500/20 text-blue-500"}`,children:g.jsx(p,{className:"w-5 h-5"})}),g.jsxs("div",{className:"text-left",children:[g.jsx("h2",{className:`text-lg font-bold uppercase tracking-tight ${c==="pct"?"text-amber-500":"text-blue-500"}`,children:f}),g.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:y})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left items-stretch",children:[g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:k=>e(c,"global",k.target.files[0])}),g.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${t[c].global?c==="pct"?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(Kv,{className:"w-7 h-7"})}),g.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"Global Hub"}),g.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:t[c].global?t[c].global.name:"PUSH_MASTER_FILE"})]}),g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[g.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(t[c].countryHB).length>0?c==="pct"?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(rA,{className:"w-7 h-7"})}),g.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Market Hub"}),g.jsx("div",{className:"w-full grid grid-cols-5 gap-1 px-1",children:hr.map(k=>g.jsxs("div",{className:"relative aspect-square group/item",children:[g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:R=>e(c,"countryHB",R.target.files[0],k)}),g.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${t[c].countryHB[k]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:g.jsx("span",{className:"text-[7px] font-black uppercase",children:zl[k]})})]},k))})]}),g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[g.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(t[c].alwaysOn).length>0?c==="pct"?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(Yv,{className:"w-7 h-7"})}),g.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Always-On"}),g.jsx("div",{className:"w-full grid grid-cols-2 gap-1.5 px-2",children:Hl.map(k=>g.jsxs("div",{className:"relative h-7 group/item",children:[g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:R=>e(c,"alwaysOn",R.target.files[0],k)}),g.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${t[c].alwaysOn[k]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:g.jsx("span",{className:"text-[7px] font-black uppercase",children:k})})]},k))})]})]})]});return g.jsx("div",{className:"min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0]",children:g.jsxs("div",{className:"max-w-[1500px] w-full z-10 text-center",children:[g.jsxs("div",{className:"mb-8",children:[g.jsx("div",{className:"inline-block mb-4",children:g.jsx("div",{className:"bg-[#FF0000] w-14 h-14 rounded-xl flex items-center justify-center mx-auto",children:g.jsx(Gv,{className:"text-white w-7 h-7"})})}),g.jsxs("h1",{className:"text-3xl font-bold tracking-tight mb-1 uppercase",children:["Shorts Brain ",g.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),g.jsx("p",{className:"text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase",children:"APAC Marketing Hub"})]}),g.jsxs("div",{className:"p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all",children:[g.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[g.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500",children:g.jsx(PA,{className:"w-5 h-5"})}),g.jsxs("div",{className:"text-left",children:[g.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-emerald-500",children:"Campaign Shared Meta"}),g.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Structural Definitions & Instructions"})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:[g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[g.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.campaignInfo?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(GS,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex-1 text-left min-w-0",children:[g.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Structural Meta"}),g.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.campaignInfo?t.shared.campaignInfo.name:"PUSH_STRUCTURAL_CSV"})]}),g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:c=>e("shared","campaignInfo",c.target.files[0])})]}),g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[g.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.pauseRelive?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(IA,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex-1 text-left min-w-0",children:[g.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Pause/Relive Instructions"}),g.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.pauseRelive?t.shared.pauseRelive.name:"PUSH_INSTRUCTIONS_CSV"})]}),g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:c=>e("shared","pauseRelive",c.target.files[0])})]})]})]}),g.jsx(u,{type:"pct",title:"Percentage Input Hub",tag:"Relative Lift Streams",icon:Qv}),g.jsx(u,{type:"abs",title:"Absolute Input Hub",tag:"Discrete Volume Streams",icon:bS}),g.jsxs("button",{onClick:n,disabled:r,className:"px-10 py-4 rounded-lg font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-3 mx-auto uppercase mt-4 border border-[#3a3a3a]",children:[r?g.jsx(AA,{className:"w-5 h-5 animate-spin"}):g.jsx(vA,{className:"w-5 h-5"}),r?"INITIALIZING...":"EXECUTE ANALYSIS"]}),s.length>0&&g.jsxs("div",{className:"mt-10 p-6 rounded-lg border border-[#3a3a3a] bg-[#1a1a1a]",children:[g.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[g.jsx(Wv,{className:"w-5 h-5 text-[#808080]"}),g.jsx("h2",{className:"text-sm font-bold uppercase tracking-wider text-[#808080]",children:"Stored Snapshots"})]}),g.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3",children:s.map(c=>g.jsxs("button",{onClick:()=>i(c.weekId),disabled:o,className:"border border-[#3a3a3a] bg-black rounded-lg p-4 text-center hover:border-[#FF0000]/50 hover:bg-[#FF0000]/5 transition-all cursor-pointer group",children:[g.jsx(Lf,{className:"w-4 h-4 text-[#808080] mx-auto mb-2 group-hover:text-[#FF0000]"}),g.jsx("span",{className:"text-xs font-bold block text-white",children:c.weekId}),g.jsx("span",{className:"text-[8px] text-[#808080] block mt-1",children:c.reportingDate||"No date"}),g.jsxs("span",{className:"text-[8px] text-[#555] block",children:[c.globalCount||0," campaigns"]})]},c.weekId))})]})]})})},$P=()=>{const[t,e]=ie.useState(!1),[n,r]=ie.useState(!1),[s,i]=ie.useState("OKR"),[o,l]=ie.useState(!0),[u,c]=ie.useState(["DAU-SCT"]),[f,p]=ie.useState(!1),[y,k]=ie.useState("India"),[R,P]=ie.useState(null),[O,S]=ie.useState({ScaledCreation:"India",Trends:"India",CultMo:"India",ArtMo:"India","GenAI Hub":"India",AlwaysOn:"India"}),[T,x]=ie.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[N,L]=ie.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[U,I]=ie.useState([]),[v,m]=ie.useState({}),[w,A]=ie.useState({}),[C,E]=ie.useState({pct:{global:null,countryHB:{},alwaysOn:{}},abs:{global:null,countryHB:{},alwaysOn:{}},shared:{campaignInfo:null,pauseRelive:null}}),[X,fe]=ie.useState([]),[qe,ee]=ie.useState("idle"),[$,H]=ie.useState(!1),[B,Ie]=ie.useState([]),ge=ie.useCallback((j,q)=>{var ue;const re=((ue=w[j])==null?void 0:ue[q])||{},_e=Object.keys(re).filter(pe=>pe!=="Generic");return _e.length>0?_e.sort():[]},[w]),ye=ie.useCallback((j,q,re)=>{var pe,Xe;const _e=((Xe=(pe=w[j])==null?void 0:pe[q])==null?void 0:Xe[re])||{},ue=Object.keys(_e).filter(cn=>cn!=="Default");return ue.length>0?ue.sort():[]},[w]),ae=ie.useMemo(()=>s==="Global Hub"||s==="AlwaysOn"?fr.filter(j=>j!=="Impressions"&&j!=="CTR"):fr,[s]),Qt=async()=>{r(!0);try{const j=K=>new Promise(Y=>{K||Y("");const J=new FileReader;J.onload=he=>Y(he.target.result),J.readAsText(K)});let q={};const re=C.shared.campaignInfo;if(re){const Y=(await j(re)).split(/\r?\n/).filter(J=>J.trim()!=="");if(Y.length>1){const J=nn(Y[0]),he=Ee(J,["Campaign","Campaign Name"]),ne=Ee(J,["Market","Country"]),Ne=Ee(J,["Campaign Tabs","Tabs","Tab"]),ke=Ee(J,["Campaign Sub tabs","Sub tabs","Sub tab","Sub-tabs","Subtab","Sub category"]),me=Ee(J,["Campaign Sub Sub tabs","Sub sub tabs","Sub-sub-tabs","Subsubtab"]),Me=Ee(J,["Campaign Start Date","Start Date"]),Le=Ee(J,["Campaign End Date","End Date"]),Re=Ee(J,["Optimisation End Date","Optimization Date"]),be=Ee(J,["Age"]),dt=Ee(J,["Gender"]);Y.slice(1).forEach(st=>{const je=nn(st),Lt=Ue(je[he]);if(!Lt)return;const hn=Ue(je[ne]).toUpperCase(),Be=jd[hn]||hr.find(at=>Yn(at,hn))||"India",At=zt(Be),jt=zt(Lt);if(q[At]||(q[At]={}),q[At][jt]||(q[At][jt]={market:Be,tab:Ue(je[Ne]),subTab:Ue(je[ke]),subSubTab:Ue(je[me]),campaignStartDate:Ue(je[Me]),campaignEndDate:Ue(je[Le]),optimisationEndDate:Ue(je[Re]),targeting:{ages:[],genders:[]}}),be!==-1&&je[be]){const at=Ue(je[be]).toLowerCase().split(",").map(xt=>xt.trim()),_t=[];at.forEach(xt=>{xt.includes("18-24")&&_t.push("18-24"),xt.includes("25-34")&&_t.push("25-34"),xt.includes("18-34")&&_t.push("18-34"),(xt.includes("35-44")||xt.includes("35+"))&&_t.push("35+")}),_t.includes("18-24")&&_t.includes("25-34")&&_t.push("18-34"),_t.push("total"),q[At][jt].targeting.ages=[...new Set([...q[At][jt].targeting.ages,..._t])]}if(dt!==-1&&je[dt]){const at=Ue(je[dt]).toLowerCase().split(",").map(xt=>xt.trim()),_t=[];at.forEach(xt=>{(xt==="male"||xt==="m")&&_t.push("male"),(xt==="female"||xt==="f")&&_t.push("female")}),_t.push("total"),q[At][jt].targeting.genders=[...new Set([...q[At][jt].targeting.genders,..._t])]}})}}let _e={};const ue=C.shared.pauseRelive;if(ue){const Y=(await j(ue)).split(/\r?\n/).filter(J=>J.trim()!=="");if(Y.length>1){const J=nn(Y[0]),he=Ee(J,["Campaign","Campaign Name"]),ne=Ee(J,["Age","Age Group"]),Ne=Ee(J,["Gender"]),ke=Ee(J,["Instruction","Action"]),me=Ee(J,["Launch Date","Date"]);Y.slice(1).forEach(Me=>{const Le=nn(Me),Re=zt(Le[he]);if(!Re)return;const be=(Le[ne]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),dt=(Le[Ne]||"total").toLowerCase().trim(),st=(Le[ke]||"").toUpperCase().trim(),je=Ue(Le[me]);_e[Re]||(_e[Re]={}),_e[Re][dt]||(_e[Re][dt]={}),_e[Re][dt][be]={instruction:st,launchDate:je}})}}const pe={},Xe=(K,Y,J=null,he=null)=>{Object.values(K).forEach(ne=>{const Ne=ne.meta||{};let ke=J||Ue(Ne.tab)||"Uncategorized";const me=Il.find(je=>Yn(je.id,ke)||Yn(je.label,ke)),Me=me?me.id:ke,Le=he||Ue(Ne.subTab)||"Generic",Re=Ue(Ne.subSubTab)||"Default",be=Ne.market||Y,dt=zt(ne.country),st=_e[zt(ne.country)];st&&fr.forEach(je=>{Bt.forEach(Lt=>{wn.forEach(hn=>{var _t;const Be=hn.replace(/[^a-z0-9+]/g,""),At=Be==="1824"||Be==="2534"?"1834":null,jt=[[Lt,Be],At?[Lt,At]:null,[Lt,"total"],["total",Be],At?["total",At]:null,["total","total"]].filter(Boolean);let at=null;for(const[xt,Pr]of jt){const Ss=(_t=st[xt])==null?void 0:_t[Pr];if(Ss&&Ss.instruction==="PAUSE"&&Ss.launchDate&&Ss.launchDate.trim()!==""){at=Ss;break}}at&&(ne.metrics[je][Lt][hn].isPaused=!0,ne.metrics[je][Lt][hn].launchDate=at.launchDate)})})}),pe[Me]||(pe[Me]={}),pe[Me][be]||(pe[Me][be]={}),pe[Me][be][Le]||(pe[Me][be][Le]={}),pe[Me][be][Le][Re]||(pe[Me][be][Le][Re]={}),pe[Me][be][Le][Re][dt]=ne})};let cn=null;const br=async(K,Y=!1)=>{const J=C[K];let he={};if(J.global){const ke=await j(J.global);if(K==="pct"){const me=ke.split(/\r?\n/).filter(Re=>Re.trim()!==""),Me=nn(me[0]),Le=Ee(Me,["Date","Reporting Date","Day"]);if(Le!==-1){let Re=null;me.slice(1).forEach(be=>{const dt=nn(be),st=xn(dt[Le]);st&&(!Re||st>Re)&&(Re=st)}),cn=Re,P(Re)}}he=ur(ke,{},q,["Country","Market","Campaign"],Y,null,!0,!1)}const ne={};for(const ke of hr)if(J.countryHB[ke]){const me=await j(J.countryHB[ke]);ne[ke]=ur(me,{},q,void 0,Y,ke,!1,!1)}const Ne={};for(const ke of Hl)if(J.alwaysOn[ke]){const me=await j(J.alwaysOn[ke]);Ne[ke]=ur(me,{},q,void 0,Y,null,!1,!0)}return{streamGData:he,mHubParsed:ne,alwaysOnParsed:Ne}},Hn=await br("pct",!1),Pn=await br("abs",!0),Ze=(K,Y)=>{const J={...K};return Object.keys(Y).forEach(he=>{if(!J[he]){J[he]=Y[he];return}fr.forEach(ne=>{Bt.forEach(Ne=>{wn.forEach(ke=>{const me=Y[he].metrics[ne][Ne][ke];J[he].metrics[ne][Ne][ke].abs=me.abs,(ne==="Impressions"||ne==="CTR")&&me.v!==0&&me.v!=="NA"&&(J[he].metrics[ne][Ne][ke].v=me.v)})})})}),J},Ye=Ze(Hn.streamGData,Pn.streamGData);Xe(Ye,"APAC");const te={};hr.forEach(K=>{const Y=Ze(Hn.mHubParsed[K]||{},Pn.mHubParsed[K]||{});te[K]=Object.values(Y),Xe(Y,K)}),Hl.forEach(K=>{const Y=Ze(Hn.alwaysOnParsed[K]||{},Pn.alwaysOnParsed[K]||{});Xe(Y,"India","AlwaysOn",K)});const se={};Object.keys(pe).forEach(K=>{se[K]={},Object.keys(pe[K]).forEach(Y=>{se[K][Y]={},Object.keys(pe[K][Y]).forEach(J=>{se[K][Y][J]={},Object.keys(pe[K][Y][J]).forEach(he=>{se[K][Y][J][he]=Object.values(pe[K][Y][J][he])})})})});const Ve=Object.values(Ye);I(Ve),m(te),A(se),e(!0);const $e=xP(cn||void 0);ee("saving");try{const K={},Y=C;Y.pct.global&&(K["pct-global"]=Y.pct.global);for(const[he,ne]of Object.entries(Y.pct.countryHB))ne&&(K[`pct-market-${he}`]=ne);for(const[he,ne]of Object.entries(Y.pct.alwaysOn))ne&&(K[`pct-ao-${he}`]=ne);Y.abs.global&&(K["abs-global"]=Y.abs.global);for(const[he,ne]of Object.entries(Y.abs.countryHB))ne&&(K[`abs-market-${he}`]=ne);for(const[he,ne]of Object.entries(Y.abs.alwaysOn))ne&&(K[`abs-ao-${he}`]=ne);Y.shared.campaignInfo&&(K["shared-meta"]=Y.shared.campaignInfo),Y.shared.pauseRelive&&(K["shared-instructions"]=Y.shared.pauseRelive),await CP({weekId:$e,reportingDate:cn,rawFiles:K}),ee("saved");const J=await l_(new Date().getFullYear());fe(J.snapshots||[])}catch(K){console.error("Memory save failed:",K),ee("error")}}catch(j){console.error(j)}finally{r(!1)}};ie.useEffect(()=>{l_(new Date().getFullYear()).then(j=>fe(j.snapshots||[])).catch(()=>{})},[]);const yt=ie.useCallback(async j=>{H(!0);try{const q=await RP(j);if(!q||Object.keys(q).length===0){console.error("No CSV files found for",j);return}let re={};if(q["shared-meta"]){const te=q["shared-meta"].split(/\r?\n/).filter(se=>se.trim()!=="");if(te.length>1){const se=nn(te[0]),Ve=Ee(se,["Campaign","Campaign Name"]),$e=Ee(se,["Market","Country"]),K=Ee(se,["Campaign Tabs","Tabs","Tab"]),Y=Ee(se,["Sub Tab","SubTab","Sub-Tab"]),J=Ee(se,["Sub Sub Tab","SubSubTab","Sub-Sub-Tab"]),he=Ee(se,["Campaign Start Date","Start Date"]),ne=Ee(se,["Campaign End Date","End Date"]),Ne=Ee(se,["Optimisation End Date","Opt End Date"]);te.slice(1).forEach(ke=>{const me=nn(ke),Me=Ue(me[Ve]);if(!Me)return;const Le=Ue(me[$e]).toUpperCase(),Re=jd[Le]||hr.find(st=>Yn(st,Le))||"India",be=zt(Re),dt=zt(Me);re[be]||(re[be]={}),re[be][dt]={market:Re,tab:Ue(me[K]),subTab:Ue(me[Y]),subSubTab:Ue(me[J]),campaignStartDate:xn(me[he]),campaignEndDate:xn(me[ne]),optimisationEndDate:xn(me[Ne])}})}}const _e={};if(q["shared-instructions"]){const te=q["shared-instructions"].split(/\r?\n/).filter(se=>se.trim()!=="");if(te.length>1){const se=nn(te[0]),Ve=Ee(se,["Campaign","Campaign Name"]),$e=Ee(se,["Age","Age Group"]),K=Ee(se,["Gender"]),Y=Ee(se,["Instruction","Action"]),J=Ee(se,["Launch Date","Date"]);te.slice(1).forEach(he=>{const ne=nn(he),Ne=zt(ne[Ve]);if(!Ne)return;const ke=(ne[$e]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),me=(ne[K]||"total").toLowerCase().trim(),Me=(ne[Y]||"").toUpperCase().trim(),Le=Ue(ne[J]);_e[Ne]||(_e[Ne]={}),_e[Ne][me]||(_e[Ne][me]={}),_e[Ne][me][ke]={instruction:Me,launchDate:Le}})}}const ue={},pe=(te,se,Ve=null,$e=null)=>{Object.values(te).forEach(K=>{const Y=K.meta||{};let J=Ve||Ue(Y.tab)||"Uncategorized";const he=Il.find(Re=>Yn(Re.id,J)||Yn(Re.label,J)),ne=he?he.id:J,Ne=$e||Ue(Y.subTab)||"Generic",ke=Ue(Y.subSubTab)||"Default",me=Y.market||se,Me=zt(K.country),Le=_e[zt(K.country)];Le&&fr.forEach(Re=>{Bt.forEach(be=>{wn.forEach(dt=>{var Be;const st=dt.replace(/[^a-z0-9+]/g,""),je=st==="1824"||st==="2534"?"1834":null,Lt=[[be,st],je?[be,je]:null,[be,"total"],["total",st],je?["total",je]:null,["total","total"]].filter(Boolean);let hn=null;for(const[At,jt]of Lt){const at=(Be=Le[At])==null?void 0:Be[jt];if(at&&at.instruction==="PAUSE"&&at.launchDate&&at.launchDate.trim()!==""){hn=at;break}}hn&&(K.metrics[Re][be][dt].isPaused=!0,K.metrics[Re][be][dt].launchDate=hn.launchDate)})})}),ue[ne]||(ue[ne]={}),ue[ne][me]||(ue[ne][me]={}),ue[ne][me][Ne]||(ue[ne][me][Ne]={}),ue[ne][me][Ne][ke]||(ue[ne][me][Ne][ke]={}),ue[ne][me][Ne][ke][Me]=K})},Xe=(te,se)=>{const Ve={...te};return Object.keys(se).forEach($e=>{if(!Ve[$e]){Ve[$e]=se[$e];return}fr.forEach(K=>{Bt.forEach(Y=>{wn.forEach(J=>{const he=se[$e].metrics[K][Y][J];Ve[$e].metrics[K][Y][J].abs=he.abs,(K==="Impressions"||K==="CTR")&&he.v!==0&&he.v!=="NA"&&(Ve[$e].metrics[K][Y][J].v=he.v)})})})}),Ve},cn=q["pct-global"]?ur(q["pct-global"],{},re,["Country","Market","Campaign"],!1,null,!0,!1):{},br=q["abs-global"]?ur(q["abs-global"],{},re,["Country","Market","Campaign"],!0,null,!0,!1):{},Hn=Xe(cn,br);pe(Hn,"APAC");let Pn=null;if(q["pct-global"]){const te=q["pct-global"].split(/\r?\n/).filter(se=>se.trim()!=="");if(te.length>1){const se=nn(te[0]),Ve=Ee(se,["Date","Reporting Date","Day"]);Ve!==-1&&te.slice(1).forEach($e=>{const K=nn($e),Y=xn(K[Ve]);Y&&(!Pn||Y>Pn)&&(Pn=Y)})}}const Ze={};hr.forEach(te=>{const se=q[`pct-market-${te}`]?ur(q[`pct-market-${te}`],{},re,void 0,!1,te,!1,!1):{},Ve=q[`abs-market-${te}`]?ur(q[`abs-market-${te}`],{},re,void 0,!0,te,!1,!1):{},$e=Xe(se,Ve);Ze[te]=Object.values($e),pe($e,te)}),Hl.forEach(te=>{const se=q[`pct-ao-${te}`]?ur(q[`pct-ao-${te}`],{},re,void 0,!1,null,!1,!0):{},Ve=q[`abs-ao-${te}`]?ur(q[`abs-ao-${te}`],{},re,void 0,!0,null,!1,!0):{},$e=Xe(se,Ve);pe($e,"India","AlwaysOn",te)});const Ye={};Object.keys(ue).forEach(te=>{Ye[te]={},Object.keys(ue[te]).forEach(se=>{Ye[te][se]={},Object.keys(ue[te][se]).forEach(Ve=>{Ye[te][se][Ve]={},Object.keys(ue[te][se][Ve]).forEach($e=>{Ye[te][se][Ve][$e]=Object.values(ue[te][se][Ve][$e])})})})}),I(Object.values(Hn)),m(Ze),A(Ye),P(Pn),e(!0),i("OKR"),Ie(te=>te.find(se=>se.weekId===j)?te:[...te,{weekId:j}])}catch(q){console.error("Failed to load snapshot:",q)}finally{H(!1)}},[]);ie.useEffect(()=>{if(s&&w[s]){const j=O[s]||"India",q=ge(s,j);if(q.length>0){const re=T[s],_e=q.includes(re)?re:q[0];re!==_e&&x(pe=>({...pe,[s]:_e}));const ue=ye(s,j,_e);if(ue.length>0){const pe=N[s],Xe=ue.includes(pe)?pe:ue[0];pe!==Xe&&L(cn=>({...cn,[s]:Xe}))}else L(pe=>({...pe,[s]:"Default"}))}else x(re=>({...re,[s]:"Generic"})),L(re=>({...re,[s]:"Default"}))}},[s,O,w,ge,ye,T,N]);const vn=(j,q,re,_e)=>{E(ue=>{const pe=q==="countryHB"||q==="alwaysOn",Xe={...ue[j]};return pe?Xe[q]={...Xe[q],[_e]:re}:Xe[q]=re,{...ue,[j]:Xe}})};return t?g.jsxs("div",{className:"flex h-screen bg-black text-[#e0e0e0] overflow-hidden",children:[g.jsxs("aside",{className:`${o?"w-72":"w-20"} transition-all duration-300 bg-[#1a1a1a] border-r border-[#3a3a3a] flex flex-col z-50`,children:[g.jsxs("div",{className:"p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#3a3a3a]",children:[g.jsx("div",{className:"bg-[#FF0000] p-2 rounded-lg flex items-center justify-center",children:g.jsx(Gv,{className:"w-5 h-5 text-white"})}),o&&g.jsxs("div",{children:[g.jsxs("h2",{className:"text-lg font-bold tracking-tight",children:["BRAIN ",g.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),g.jsx("p",{className:"text-[8px] font-bold uppercase text-[#808080] tracking-widest",children:"APAC Shorts"})]})]}),g.jsxs("nav",{className:"flex-1 px-4 space-y-1 overflow-y-auto",children:[NP.map(j=>g.jsxs("button",{onClick:()=>{j.id==="Upload"?e(!1):i(j.id)},className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all group relative cursor-pointer ${s===j.id?"bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,children:[g.jsx(j.icon,{className:"w-5 h-5 shrink-0"}),o&&g.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:j.label})]},j.id)),g.jsxs("button",{onClick:()=>p(!f),className:"w-full flex items-center justify-between p-3 rounded-lg text-[#808080] hover:text-white cursor-pointer border border-transparent",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx(iA,{className:"w-5 h-5 shrink-0"}),o&&g.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:"Campaign Deepdive"})]}),o&&(f?g.jsx(FS,{className:"w-4 h-4"}):g.jsx(OS,{className:"w-4 h-4"}))]}),f&&o&&g.jsx("div",{className:"pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300",children:Il.map(j=>g.jsxs("button",{onClick:()=>i(j.id),className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${s===j.id?"bg-[#FF0000]/10 text-[#FF0000]":"text-[#555] hover:bg-white/5 hover:text-white"}`,children:[g.jsx(j.icon,{className:"w-4 h-4 shrink-0"}),g.jsx("span",{className:"text-[10px] font-bold uppercase",children:j.label})]},j.id))}),o&&g.jsxs("div",{className:"mt-6 pt-4 border-t border-[#3a3a3a]",children:[g.jsxs("div",{className:"flex items-center gap-2 px-3 mb-3",children:[g.jsx(Wv,{className:"w-4 h-4 text-[#808080]"}),g.jsx("span",{className:"text-[10px] font-bold uppercase text-[#808080] tracking-wider",children:"Memory"}),qe==="saving"&&g.jsx(dA,{className:"w-3 h-3 text-amber-400 animate-spin ml-auto"}),qe==="saved"&&g.jsx(HS,{className:"w-3 h-3 text-emerald-400 ml-auto"}),qe==="error"&&g.jsx(BS,{className:"w-3 h-3 text-red-400 ml-auto"})]}),g.jsx("div",{className:"space-y-1 max-h-[200px] overflow-y-auto px-1",children:X.length===0?g.jsx("p",{className:"text-[9px] text-[#555] px-3 py-2",children:"No snapshots stored yet"}):X.map(j=>g.jsxs("button",{onClick:()=>yt(j.weekId),disabled:$,className:`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-all cursor-pointer ${B.some(q=>q.weekId===j.weekId)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,children:[g.jsx(Lf,{className:"w-3 h-3 shrink-0"}),g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsx("span",{className:"text-[10px] font-bold block",children:j.weekId}),g.jsx("span",{className:"text-[8px] opacity-60",children:j.reportingDate||"No date"})]}),g.jsx("span",{className:"text-[8px] opacity-50",children:j.globalCount||0})]},j.weekId))})]})]})]}),g.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[g.jsxs("header",{className:"px-8 py-5 border-b border-[#3a3a3a] flex items-center justify-between bg-[#1a1a1a]",children:[g.jsx("div",{className:"flex items-center gap-4",children:g.jsx("h4",{className:"text-sm font-bold text-white uppercase",children:s})}),g.jsxs("button",{className:"bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[g.jsx(tA,{className:"w-4 h-4 mr-2 inline"})," Export Hub"]})]}),g.jsxs("main",{className:"flex-1 overflow-auto p-10 relative",children:[s==="OKR"&&g.jsx(UP,{globalData:U,regionalData:v,latestDate:R}),(s==="Global Hub"||s==="Market Hub")&&g.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[g.jsx(c_,{activeMetrics:u.filter(j=>ae.includes(j)),allowedMetrics:ae,toggleMetric:j=>c(q=>q.includes(j)?q.length>1?q.filter(re=>re!==j):q:[...q,j]),handleAllToggle:()=>c(j=>j.length===ae.length?["DAU-SCT"]:[...ae])}),s==="Market Hub"&&g.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[g.jsx(Ug,{className:"w-6 h-6 text-red-600"}),g.jsx("select",{value:y,onChange:j=>k(j.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:hr.map(j=>g.jsx("option",{value:j,className:"bg-neutral-900",children:j},j))})]}),g.jsx(h_,{data:s==="Global Hub"?U:v[y]||[],activeMetrics:u.filter(j=>ae.includes(j)),isCampaignView:s==="Market Hub",latestGlobalDate:R})]}),(Il.some(j=>j.id===s)||w[s])&&s!=="OKR"&&g.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[g.jsx(c_,{activeMetrics:u.filter(j=>ae.includes(j)),allowedMetrics:ae,toggleMetric:j=>c(q=>q.includes(j)?q.length>1?q.filter(re=>re!==j):q:[...q,j]),handleAllToggle:()=>c(j=>j.length===ae.length?["DAU-SCT"]:[...ae])}),g.jsxs("div",{className:"flex flex-col gap-6",children:[g.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[g.jsx(Ug,{className:"w-6 h-6 text-red-600"}),g.jsx("select",{value:O[s],onChange:j=>S(q=>({...q,[s]:j.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:hr.map(j=>g.jsx("option",{value:j,className:"bg-neutral-900",children:j},j))})]}),ge(s,O[s]).length>0&&g.jsx("div",{className:"flex gap-2 p-1 bg-[#1a1a1a] rounded-lg w-fit border border-[#3a3a3a] overflow-x-auto max-w-full",children:ge(s,O[s]).map(j=>g.jsx("button",{onClick:()=>x(q=>({...q,[s]:j})),className:`px-5 py-2 rounded-md text-[9px] font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${T[s]===j?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:j},j))}),ye(s,O[s],T[s]).length>0&&g.jsx("div",{className:"flex gap-2 p-1 bg-[#1a1a1a] rounded-lg w-fit border border-[#3a3a3a] overflow-x-auto max-w-full",children:ye(s,O[s],T[s]).map(j=>g.jsx("button",{onClick:()=>L(q=>({...q,[s]:j})),className:`px-4 py-1.5 rounded-md text-[8px] font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${N[s]===j?"bg-white text-black":"text-[#555] hover:text-white"}`,children:j},j))})]}),g.jsx(h_,{data:(()=>{var ue,pe;const j=O[s],q=T[s]||"Generic",re=N[s]||"Default",_e=(pe=(ue=w[s])==null?void 0:ue[j])==null?void 0:pe[q];return re==="Default"||!re?_e?Object.values(_e).flat():[]:(_e==null?void 0:_e[re])||[]})(),activeMetrics:u.filter(j=>ae.includes(j)),isCampaignView:!0,isAlwaysOn:s==="AlwaysOn",latestGlobalDate:R})]})]})]}),g.jsx("style",{children:`
        body { background-color: #000000; color: #e0e0e0; margin: 0; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 10px; }
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; padding-right: 2rem; }
      `})]}):g.jsx(FP,{uploadedFiles:C,handleFileUpload:vn,startAnalysis:Qt,isAnalyzing:n,memoryIndex:X,loadHistoricalWeek:yt,isLoadingMemory:$,historicalSnapshots:B})};function nE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BP=nE,rE=new Pa("auth","Firebase",nE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Ff("@firebase/auth");function zP(t,...e){Nu.logLevel<=Se.WARN&&Nu.warn(`Auth (${ti}): ${t}`,...e)}function ql(t,...e){Nu.logLevel<=Se.ERROR&&Nu.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,...e){throw Dp(t,...e)}function $n(t,...e){return Dp(t,...e)}function Np(t,e,n){const r={...BP(),[e]:n};return new Pa("auth","Firebase",r).create(e,{appName:t.name})}function Fs(t){return Np(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ar(t,"argument-error"),Np(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rE.create(t,...e)}function le(t,e,...n){if(!t)throw Dp(e,...n)}function yr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function Cr(t,e){t||yr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function qP(){return f_()==="http:"||f_()==="https:"}function f_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qP()||ox()||"connection"in navigator)?navigator.onLine:!0}function WP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cr(n>e,"Short delay should be less than long delay!"),this.isMobile=rx()||ax()}get(){return GP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e){Cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YP=new Ua(3e4,6e4);function Vp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function oo(t,e,n,r,s={}){return iE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Na({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return ix()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(c.credentials="include"),sE.fetch()(await oE(t,t.config.apiHost,n,l),c)})}async function iE(t,e,n){t._canInitEmulator=!1;const r={...KP,...e};try{const s=new XP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Sl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Sl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Np(t,f,c);ar(t,f)}}catch(s){if(s instanceof lr)throw s;ar(t,"network-request-failed",{message:String(s)})}}async function JP(t,e,n,r,s={}){const i=await oo(t,e,n,r,s);return"mfaPendingCredential"in i&&ar(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function oE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Op(t.config,s):`${t.config.apiScheme}://${s}`;return QP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class XP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),YP.get())})}}function Sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$n(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t,e){return oo(t,"POST","/v1/accounts:delete",e)}async function Du(t,e){return oo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eN(t,e=!1){const n=St(t),r=await n.getIdToken(e),s=Mp(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Jo(yh(s.auth_time)),issuedAtTime:Jo(yh(s.iat)),expirationTime:Jo(yh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yh(t){return Number(t)*1e3}function Mp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zv(n);return s?JSON.parse(s):(ql("Failed to decode base64 JWT payload"),null)}catch(s){return ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function p_(t){const e=Mp(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lr&&tN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Aa(t,Du(e,{idToken:n}));le(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?aE(s.providerUserInfo):[],o=sN(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Fd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function rN(t){const e=St(t);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function aE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t,e){const n=await iE(t,{},async()=>{const r=Na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await oE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(u.credentials="include"),sE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oN(t,e){return oo(t,"POST","/v2/accounts:revokeToken",Vp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=p_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await iN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mi;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mi,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new nN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eN(this,e)}reload(){return rN(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Fs(this.auth));const e=await this.getIdToken();return await Aa(this,ZP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:k,providerData:R,stsTokenManager:P}=n;le(p&&P,e,"internal-error");const O=Mi.fromJSON(this.name,P);le(typeof p=="string",e,"internal-error"),Ur(r,e.name),Ur(s,e.name),le(typeof y=="boolean",e,"internal-error"),le(typeof k=="boolean",e,"internal-error"),Ur(i,e.name),Ur(o,e.name),Ur(l,e.name),Ur(u,e.name),Ur(c,e.name),Ur(f,e.name);const S=new Ln({uid:p,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:O,createdAt:c,lastLoginAt:f});return R&&Array.isArray(R)&&(S.providerData=R.map(T=>({...T}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mi;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ou(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?aE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Mi;l.updateFromIdToken(r);const u=new Ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=new Map;function _r(t){Cr(t instanceof Function,"Expected a class definition");let e=m_.get(t);return e?(Cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,m_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lE.type="NONE";const g_=lE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Du(this.auth,{idToken:e}).catch(()=>{});return n?Ln._fromGetAccountInfoResponse(this.auth,n,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(_r(g_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||_r(g_);const o=Gl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const y=await Du(e,{idToken:f}).catch(()=>{});if(!y)break;p=await Ln._fromGetAccountInfoResponse(e,y,f)}else p=Ln._fromJSON(e,f);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Li(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Li(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pE(e))return"Blackberry";if(mE(e))return"Webos";if(cE(e))return"Safari";if((e.includes("chrome/")||hE(e))&&!e.includes("edge/"))return"Chrome";if(fE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uE(t=Kt()){return/firefox\//i.test(t)}function cE(t=Kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hE(t=Kt()){return/crios\//i.test(t)}function dE(t=Kt()){return/iemobile/i.test(t)}function fE(t=Kt()){return/android/i.test(t)}function pE(t=Kt()){return/blackberry/i.test(t)}function mE(t=Kt()){return/webos/i.test(t)}function Lp(t=Kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aN(t=Kt()){var e;return Lp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function lN(){return lx()&&document.documentMode===10}function gE(t=Kt()){return Lp(t)||fE(t)||mE(t)||pE(t)||/windows phone/i.test(t)||dE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e=[]){let n;switch(t){case"Browser":n=y_(Kt());break;case"Worker":n=`${y_(Kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e={}){return oo(t,"GET","/v2/passwordPolicy",Vp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=6;class dN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??hN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new __(this),this.idTokenSubscription=new __(this),this.beforeStateQueue=new uN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_r(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Du(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Fs(this));const n=e?St(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Fs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Fs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cN(this),n=new dN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_r(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[_r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(In(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&zP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gc(t){return St(t)}class __{constructor(e){this.auth=e,this.observer=null,this.addObserver=gx(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pN(t){jp=t}function mN(t){return jp.loadJS(t)}function gN(){return jp.gapiScript}function yN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t,e){const n=tc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Gs(i,e??{}))return s;ar(s,"already-initialized")}return n.initialize({options:e})}function vN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_r);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wN(t,e,n){const r=gc(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_E(e),{host:o,port:l}=EN(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Gs(c,r.config.emulator)&&Gs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ts(o)?(jf(`${i}//${o}${u}`),Uf("Auth",!0)):TN()}function _E(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EN(t){const e=_E(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:v_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:v_(o)}}}function v_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,n){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t,e){return JP(t,"POST","/v1/accounts:signInWithIdp",Vp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="http://localhost";class Xs extends vE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ar("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Xs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ji(e,n)}buildRequest(){const e={requestUri:IN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Na(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Up{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Fa{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xs._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Fa{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Fa{constructor(){super("twitter.com")}static credential(e,n){return Xs._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=w_(r);return new Ji({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=w_(r);return new Ji({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function w_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends lr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vu(e,n,r,s)}}function wE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(t,i,e,r):i})}async function SN(t,e,n=!1){const r=await Aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ji._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(t,e,n=!1){const{auth:r}=t;if(In(r.app))return Promise.reject(Fs(r));const s="reauthenticate";try{const i=await Aa(t,wE(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=Mp(i.idToken);le(o,r,"internal-error");const{sub:l}=o;return le(t.uid===l,r,"user-mismatch"),Ji._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ar(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t,e,n=!1){if(In(t.app))return Promise.reject(Fs(t));const r="signIn",s=await wE(t,r,e),i=await Ji._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function kN(t,e,n,r){return St(t).onIdTokenChanged(e,n,r)}function CN(t,e,n){return St(t).beforeAuthStateChanged(e,n)}function RN(t,e,n,r){return St(t).onAuthStateChanged(e,n,r)}function bN(t){return St(t).signOut()}const Mu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mu,"1"),this.storage.removeItem(Mu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=1e3,NN=10;class TE extends EE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,NN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const DN=TE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends EE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}IE.type="SESSION";const SE=IE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await ON(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Fp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function MN(t){ir().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function LN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function UN(){return AE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firebaseLocalStorageDb",FN=1,Lu="firebaseLocalStorage",kE="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _c(t,e){return t.transaction([Lu],e?"readwrite":"readonly").objectStore(Lu)}function $N(){const t=indexedDB.deleteDatabase(xE);return new $a(t).toPromise()}function $d(){const t=indexedDB.open(xE,FN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lu,{keyPath:kE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lu)?e(r):(r.close(),await $N(),e(await $d()))})})}async function E_(t,e,n){const r=_c(t,!0).put({[kE]:e,value:n});return new $a(r).toPromise()}async function BN(t,e){const n=_c(t,!1).get(e),r=await new $a(n).toPromise();return r===void 0?null:r.value}function T_(t,e){const n=_c(t,!0).delete(e);return new $a(n).toPromise()}const zN=800,HN=3;class CE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yc._getInstance(UN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await LN(),!this.activeServiceWorker)return;this.sender=new VN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $d();return await E_(e,Mu,"1"),await T_(e,Mu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_c(s,!1).getAll();return new $a(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CE.type="LOCAL";const qN=CE;new Ua(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t,e){return e?_r(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends vE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GN(t){return xN(t.auth,new $p(t),t.bypassAuthState)}function WN(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),AN(n,new $p(t),t.bypassAuthState)}async function KN(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),SN(n,new $p(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GN;case"linkViaPopup":case"linkViaRedirect":return KN;case"reauthViaPopup":case"reauthViaRedirect":return WN;default:ar(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new Ua(2e3,1e4);async function YN(t,e,n){if(In(t.app))return Promise.reject($n(t,"operation-not-supported-in-this-environment"));const r=gc(t);HP(t,e,Up);const s=RE(r,n);return new Ms(r,"signInViaPopup",e,s).executeNotNull()}class Ms extends bE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=Fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QN.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN="pendingRedirect",Wl=new Map;class XN extends bE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await ZN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZN(t,e){const n=nD(e),r=tD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eD(t,e){Wl.set(t._key(),e)}function tD(t){return _r(t._redirectPersistence)}function nD(t){return Gl(JN,t.config.apiKey,t.name)}async function rD(t,e,n=!1){if(In(t.app))return Promise.reject(Fs(t));const r=gc(t),s=RE(r,e),o=await new XN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=10*60*1e3;class iD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sD&&this.cachedEventUids.clear(),this.cachedEventUids.has(I_(e))}saveEventToCache(e){this.cachedEventUids.add(I_(e)),this.lastProcessedEventTime=Date.now()}}function I_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(t,e={}){return oo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uD=/^https?/;async function cD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aD(t);for(const n of e)try{if(hD(n))return}catch{}ar(t,"unauthorized-domain")}function hD(t){const e=Ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uD.test(n))return!1;if(lD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=new Ua(3e4,6e4);function S_(){const t=ir().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fD(t){return new Promise((e,n)=>{var s,i,o;function r(){S_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S_(),n($n(t,"network-request-failed"))},timeout:dD.get()})}if((i=(s=ir().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ir().gapi)!=null&&o.load)r();else{const l=yN("iframefcb");return ir()[l]=()=>{gapi.load?r():n($n(t,"network-request-failed"))},mN(`${gN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Kl=null,e})}let Kl=null;function pD(t){return Kl=Kl||fD(t),Kl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=new Ua(5e3,15e3),gD="__/auth/iframe",yD="emulator/auth/iframe",_D={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wD(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Op(e,yD):`https://${t.config.authDomain}/${gD}`,r={apiKey:e.apiKey,appName:t.name,v:ti},s=vD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Na(r).slice(1)}`}async function ED(t){const e=await pD(t),n=ir().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:wD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_D,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),l=ir().setTimeout(()=>{i(o)},mD.get());function u(){ir().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ID=500,SD=600,AD="_blank",xD="http://localhost";class A_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kD(t,e,n,r=ID,s=SD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...TD,width:r.toString(),height:s.toString(),top:i,left:o},c=Kt().toLowerCase();n&&(l=hE(c)?AD:n),uE(c)&&(e=e||xD,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[k,R])=>`${y}${k}=${R},`,"");if(aN(c)&&l!=="_self")return CD(e||"",l),new A_(null);const p=window.open(e||"",l,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new A_(p)}function CD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD="__/auth/handler",bD="emulator/auth/handler",PD=encodeURIComponent("fac");async function x_(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:s};if(e instanceof Up){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Fa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${PD}=${encodeURIComponent(u)}`:"";return`${ND(t)}?${Na(l).slice(1)}${c}`}function ND({config:t}){return t.emulator?Op(t,bD):`https://${t.authDomain}/${RD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="webStorageSupport";class DD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SE,this._completeRedirectFn=rD,this._overrideRedirectResult=eD}async _openPopup(e,n,r,s){var o;Cr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await x_(e,n,r,Ud(),s);return kD(e,i,Fp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await x_(e,n,r,Ud(),s);return MN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ED(e),r=new iD(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[_h];i!==void 0&&n(!!i),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gE()||cE()||Lp()}}const OD=DD;var k_="@firebase/auth",C_="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LD(t){Ws(new ds("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yE(t)},c=new fN(r,s,i,u);return vN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ws(new ds("auth-internal",e=>{const n=gc(e.getProvider("auth").getImmediate());return(r=>new VD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(k_,C_,MD(t)),tr(k_,C_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=5*60,UD=r1("authIdTokenMaxAge")||jD;let R_=null;const FD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UD)return;const s=n==null?void 0:n.token;R_!==s&&(R_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $D(t=Bf()){const e=tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_N(t,{popupRedirectResolver:OD,persistence:[qN,DN,SE]}),r=r1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=FD(i.toString());CN(n,o,()=>o(n.currentUser)),kN(n,l=>o(l))}}const s=e1("auth");return s&&wN(n,`http://${s}`),n}function BD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}pN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",BD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LD("Browser");const vh=$D(bp),zD=new pr;function HD(t){return t?t==="ivanho.wz@gmail.com"?!0:t.endsWith("@google.com"):!1}const b_={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},P_={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},qD={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},GD={color:"#f87171",marginTop:16,fontSize:14},N_={color:"#737373",fontSize:13,marginTop:8};function WD({children:t}){const[e,n]=ie.useState(null),[r,s]=ie.useState(!0),[i,o]=ie.useState(null),[l,u]=ie.useState(!1);ie.useEffect(()=>RN(vh,f=>{f&&!HD(f.email)?(bN(vh),n(null),o(`${f.email} is not authorized.`)):(n(f),o(null)),s(!1)}),[]);const c=async()=>{u(!0),o(null);try{await YN(vh,zD)}catch(f){o((f==null?void 0:f.message)||"Sign-in failed.")}finally{u(!1)}};return r?g.jsx("div",{style:b_,children:g.jsx("div",{style:P_,children:g.jsx("p",{style:N_,children:"Loading…"})})}):e?t:g.jsx("div",{style:b_,children:g.jsxs("div",{style:P_,children:[g.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Brain"}),g.jsx("p",{style:N_,children:"Sign in to continue"}),g.jsx("button",{style:qD,onClick:c,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&g.jsx("p",{style:GD,children:i})]})})}wh.createRoot(document.getElementById("root")).render(g.jsx(ui.StrictMode,{children:g.jsx(WD,{children:g.jsx($P,{})})}));
//# sourceMappingURL=index-BZwnJsom.js.map
