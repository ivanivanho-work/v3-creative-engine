(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Ab=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function C1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c_={exports:{}},Lu={},h_={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),R1=Symbol.for("react.portal"),P1=Symbol.for("react.fragment"),N1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),D1=Symbol.for("react.provider"),O1=Symbol.for("react.context"),V1=Symbol.for("react.forward_ref"),M1=Symbol.for("react.suspense"),L1=Symbol.for("react.memo"),j1=Symbol.for("react.lazy"),hm=Symbol.iterator;function U1(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var d_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f_=Object.assign,p_={};function Xi(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}Xi.prototype.isReactComponent={};Xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m_(){}m_.prototype=Xi.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}var zd=$d.prototype=new m_;zd.constructor=$d;f_(zd,Xi.prototype);zd.isPureReactComponent=!0;var dm=Array.isArray,g_=Object.prototype.hasOwnProperty,Bd={current:null},y_={key:!0,ref:!0,__self:!0,__source:!0};function __(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)g_.call(e,r)&&!y_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Sa,type:t,key:i,ref:o,props:s,_owner:Bd.current}}function F1(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function $1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fm=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$1(""+t.key):e.toString(36)}function Sl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case R1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+bc(o,0):r,dm(s)?(n="",t!=null&&(n=t.replace(fm,"$&/")+"/"),Sl(s,e,n,"",function(h){return h})):s!=null&&(Hd(s)&&(s=F1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(fm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",dm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+bc(i,l);o+=Sl(i,e,n,u,s)}else if(u=U1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+bc(i,l++),o+=Sl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var r=[],s=0;return Sl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},xl={transition:null},B1={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:xl,ReactCurrentOwner:Bd};function v_(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=Xi;Ee.Fragment=P1;Ee.Profiler=b1;Ee.PureComponent=$d;Ee.StrictMode=N1;Ee.Suspense=M1;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;Ee.act=v_;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=f_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Bd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)g_.call(e,u)&&!y_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Sa,type:t.type,key:s,ref:i,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:O1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:D1,_context:t},t.Consumer=t};Ee.createElement=__;Ee.createFactory=function(t){var e=__.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:V1,render:t}};Ee.isValidElement=Hd;Ee.lazy=function(t){return{$$typeof:j1,_payload:{_status:-1,_result:t},_init:z1}};Ee.memo=function(t,e){return{$$typeof:L1,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};Ee.unstable_act=v_;Ee.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Ee.useContext=function(t){return Zt.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Ee.useId=function(){return Zt.current.useId()};Ee.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Ee.useRef=function(t){return Zt.current.useRef(t)};Ee.useState=function(t){return Zt.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return Zt.current.useTransition()};Ee.version="18.3.1";h_.exports=Ee;var ee=h_.exports;const gr=C1(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1=ee,q1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),G1=Object.prototype.hasOwnProperty,K1=H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q1={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)G1.call(e,r)&&!Q1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:q1,type:t,key:i,ref:o,props:s,_owner:K1.current}}Lu.Fragment=W1;Lu.jsx=w_;Lu.jsxs=w_;c_.exports=Lu;var g=c_.exports,vh={},E_={exports:{}},vn={},T_={exports:{}},I_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,J){var B=H.length;H.push(J);e:for(;0<B;){var pe=B-1>>>1,ae=H[pe];if(0<s(ae,J))H[pe]=J,H[B]=ae,B=pe;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var J=H[0],B=H.pop();if(B!==J){H[0]=B;e:for(var pe=0,ae=H.length,Ve=ae>>>1;pe<Ve;){var Ue=2*(pe+1)-1,Nt=H[Ue],pt=Ue+1,En=H[pt];if(0>s(Nt,B))pt<ae&&0>s(En,Nt)?(H[pe]=En,H[pt]=B,pe=pt):(H[pe]=Nt,H[Ue]=B,pe=Ue);else if(pt<ae&&0>s(En,B))H[pe]=En,H[pt]=B,pe=pt;else break e}}return J}function s(H,J){var B=H.sortIndex-J.sortIndex;return B!==0?B:H.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,_=3,A=!1,P=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(H){for(var J=n(h);J!==null;){if(J.callback===null)r(h);else if(J.startTime<=H)r(h),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(h)}}function b(H){if(N=!1,k(H),!P)if(n(u)!==null)P=!0,nt(M);else{var J=n(h);J!==null&&Ce(b,J.startTime-H)}}function M(H,J){P=!1,N&&(N=!1,x(p),p=-1),A=!0;var B=_;try{for(k(J),m=n(u);m!==null&&(!(m.expirationTime>J)||H&&!S());){var pe=m.callback;if(typeof pe=="function"){m.callback=null,_=m.priorityLevel;var ae=pe(m.expirationTime<=J);J=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(u)&&r(u),k(J)}else r(u);m=n(u)}if(m!==null)var Ve=!0;else{var Ue=n(h);Ue!==null&&Ce(b,Ue.startTime-J),Ve=!1}return Ve}finally{m=null,_=B,A=!1}}var U=!1,E=null,p=-1,v=5,w=-1;function S(){return!(t.unstable_now()-w<v)}function C(){if(E!==null){var H=t.unstable_now();w=H;var J=!0;try{J=E(!0,H)}finally{J?I():(U=!1,E=null)}}else U=!1}var I;if(typeof T=="function")I=function(){T(C)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,fe=X.port2;X.port1.onmessage=C,I=function(){fe.postMessage(null)}}else I=function(){O(C,0)};function nt(H){E=H,U||(U=!0,I())}function Ce(H,J){p=O(function(){H(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,nt(M))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var B=_;_=J;try{return H()}finally{_=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var B=_;_=H;try{return J()}finally{_=B}},t.unstable_scheduleCallback=function(H,J,B){var pe=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?pe+B:pe):B=pe,H){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=B+ae,H={id:f++,callback:J,priorityLevel:H,startTime:B,expirationTime:ae,sortIndex:-1},B>pe?(H.sortIndex=B,e(h,H),n(u)===null&&H===n(h)&&(N?(x(p),p=-1):N=!0,Ce(b,B-pe))):(H.sortIndex=ae,e(u,H),P||A||(P=!0,nt(M))),H},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(H){var J=_;return function(){var B=_;_=J;try{return H.apply(this,arguments)}finally{_=B}}}})(I_);T_.exports=I_;var J1=T_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1=ee,_n=J1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S_=new Set,Yo={};function ei(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(Yo[t]=e,t=0;t<e.length;t++)S_.add(e[t])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wh=Object.prototype.hasOwnProperty,X1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pm={},mm={};function Z1(t){return wh.call(mm,t)?!0:wh.call(pm,t)?!1:X1.test(t)?mm[t]=!0:(pm[t]=!0,!1)}function eT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tT(t,e,n,r){if(e===null||typeof e>"u"||eT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,Wd);jt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,Wd);jt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,Wd);jt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,r){var s=jt.hasOwnProperty(e)?jt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tT(e,n,s,r)&&(n=null),r||s===null?Z1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Or=Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Eh=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),Th=Symbol.for("react.suspense"),Ih=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),gm=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var tt=Object.assign,Dc;function Ro(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Oc=!1;function Vc(t,e){if(!t||Oc)return"";Oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function nT(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=Vc(t.type,!1),t;case 11:return t=Vc(t.type.render,!1),t;case 1:return t=Vc(t.type,!0),t;default:return""}}function Sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case Eh:return"Profiler";case Kd:return"StrictMode";case Th:return"Suspense";case Ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A_:return(t.displayName||"Context")+".Consumer";case x_:return(t._context.displayName||"Context")+".Provider";case Qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Sh(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return Sh(t(e))}catch{}}return null}function rT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ps(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function C_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sT(t){var e=C_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=sT(t))}function R_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=C_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xh(t,e){var n=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ps(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P_(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function Ah(t,e){P_(t,e);var n=ps(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&kh(t,e.type,ps(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kh(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ps(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Po(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ps(n)}}function N_(t,e){var n=ps(e.value),r=ps(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function b_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?b_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,D_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iT=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){iT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function O_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function V_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=O_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var oT=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(oT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function Yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,Ri=null,Pi=null;function Em(t){if(t=ka(t)){if(typeof Dh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=zu(e),Dh(t.stateNode,t.type,e))}}function M_(t){Ri?Pi?Pi.push(t):Pi=[t]:Ri=t}function L_(){if(Ri){var t=Ri,e=Pi;if(Pi=Ri=null,Em(t),e)for(t=0;t<e.length;t++)Em(e[t])}}function j_(t,e){return t(e)}function U_(){}var Mc=!1;function F_(t,e,n){if(Mc)return t(e,n);Mc=!0;try{return j_(t,e,n)}finally{Mc=!1,(Ri!==null||Pi!==null)&&(U_(),L_())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Oh=!1;if(Ar)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Oh=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Oh=!1}function aT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var jo=!1,Gl=null,Kl=!1,Vh=null,lT={onError:function(t){jo=!0,Gl=t}};function uT(t,e,n,r,s,i,o,l,u){jo=!1,Gl=null,aT.apply(lT,arguments)}function cT(t,e,n,r,s,i,o,l,u){if(uT.apply(this,arguments),jo){if(jo){var h=Gl;jo=!1,Gl=null}else throw Error(F(198));Kl||(Kl=!0,Vh=h)}}function ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tm(t){if(ti(t)!==t)throw Error(F(188))}function hT(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Tm(s),t;if(i===r)return Tm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function z_(t){return t=hT(t),t!==null?B_(t):null}function B_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=B_(t);if(e!==null)return e;t=t.sibling}return null}var H_=_n.unstable_scheduleCallback,Im=_n.unstable_cancelCallback,dT=_n.unstable_shouldYield,fT=_n.unstable_requestPaint,ft=_n.unstable_now,pT=_n.unstable_getCurrentPriorityLevel,Xd=_n.unstable_ImmediatePriority,q_=_n.unstable_UserBlockingPriority,Ql=_n.unstable_NormalPriority,mT=_n.unstable_LowPriority,W_=_n.unstable_IdlePriority,ju=null,Xn=null;function gT(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(ju,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:vT,yT=Math.log,_T=Math.LN2;function vT(t){return t>>>=0,t===0?32:31-(yT(t)/_T|0)|0}var el=64,tl=4194304;function No(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=No(l):(i&=o,i!==0&&(r=No(i)))}else o=n&~s,o!==0?r=No(o):i!==0&&(r=No(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fn(e),s=1<<n,r|=t[n],e&=~s;return r}function wT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ET(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Fn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=wT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G_(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function TT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Fn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Le=0;function K_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q_,ef,J_,Y_,X_,Lh=!1,nl=[],ts=null,ns=null,rs=null,ea=new Map,ta=new Map,Kr=[],IT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function Eo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ka(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function ST(t,e,n,r,s){switch(e){case"focusin":return ts=Eo(ts,t,e,n,r,s),!0;case"dragenter":return ns=Eo(ns,t,e,n,r,s),!0;case"mouseover":return rs=Eo(rs,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ea.set(i,Eo(ea.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ta.set(i,Eo(ta.get(i)||null,t,e,n,r,s)),!0}return!1}function Z_(t){var e=Os(t.target);if(e!==null){var n=ti(e);if(n!==null){if(e=n.tag,e===13){if(e=$_(n),e!==null){t.blockedOn=e,X_(t.priority,function(){J_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=ka(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){Al(t)&&n.delete(e)}function xT(){Lh=!1,ts!==null&&Al(ts)&&(ts=null),ns!==null&&Al(ns)&&(ns=null),rs!==null&&Al(rs)&&(rs=null),ea.forEach(xm),ta.forEach(xm)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,Lh||(Lh=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,xT)))}function na(t){function e(s){return To(s,t)}if(0<nl.length){To(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ts!==null&&To(ts,t),ns!==null&&To(ns,t),rs!==null&&To(rs,t),ea.forEach(e),ta.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)Z_(n),n.blockedOn===null&&Kr.shift()}var Ni=Or.ReactCurrentBatchConfig,Yl=!0;function AT(t,e,n,r){var s=Le,i=Ni.transition;Ni.transition=null;try{Le=1,tf(t,e,n,r)}finally{Le=s,Ni.transition=i}}function kT(t,e,n,r){var s=Le,i=Ni.transition;Ni.transition=null;try{Le=4,tf(t,e,n,r)}finally{Le=s,Ni.transition=i}}function tf(t,e,n,r){if(Yl){var s=jh(t,e,n,r);if(s===null)Gc(t,e,r,Xl,n),Sm(t,r);else if(ST(s,t,e,n,r))r.stopPropagation();else if(Sm(t,r),e&4&&-1<IT.indexOf(t)){for(;s!==null;){var i=ka(s);if(i!==null&&Q_(i),i=jh(t,e,n,r),i===null&&Gc(t,e,r,Xl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}var Xl=null;function jh(t,e,n,r){if(Xl=null,t=Yd(r),t=Os(t),t!==null)if(e=ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pT()){case Xd:return 1;case q_:return 4;case Ql:case mT:return 16;case W_:return 536870912;default:return 16}default:return 16}}var Zr=null,nf=null,kl=null;function tv(){if(kl)return kl;var t,e=nf,n=e.length,r,s="value"in Zr?Zr.value:Zr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return kl=s.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function Am(){return!1}function wn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?rl:Am,this.isPropagationStopped=Am,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=wn(Zi),Aa=tt({},Zi,{view:0,detail:0}),CT=wn(Aa),jc,Uc,Io,Uu=tt({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(jc=t.screenX-Io.screenX,Uc=t.screenY-Io.screenY):Uc=jc=0,Io=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),km=wn(Uu),RT=tt({},Uu,{dataTransfer:0}),PT=wn(RT),NT=tt({},Aa,{relatedTarget:0}),Fc=wn(NT),bT=tt({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),DT=wn(bT),OT=tt({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VT=wn(OT),MT=tt({},Zi,{data:0}),Cm=wn(MT),LT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UT[t])?!!e[t]:!1}function sf(){return FT}var $T=tt({},Aa,{key:function(t){if(t.key){var e=LT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zT=wn($T),BT=tt({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=wn(BT),HT=tt({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),qT=wn(HT),WT=tt({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),GT=wn(WT),KT=tt({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QT=wn(KT),JT=[9,13,27,32],of=Ar&&"CompositionEvent"in window,Uo=null;Ar&&"documentMode"in document&&(Uo=document.documentMode);var YT=Ar&&"TextEvent"in window&&!Uo,nv=Ar&&(!of||Uo&&8<Uo&&11>=Uo),Pm=" ",Nm=!1;function rv(t,e){switch(t){case"keyup":return JT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _i=!1;function XT(t,e){switch(t){case"compositionend":return sv(e);case"keypress":return e.which!==32?null:(Nm=!0,Pm);case"textInput":return t=e.data,t===Pm&&Nm?null:t;default:return null}}function ZT(t,e){if(_i)return t==="compositionend"||!of&&rv(t,e)?(t=tv(),kl=nf=Zr=null,_i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var eI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eI[t.type]:e==="textarea"}function iv(t,e,n,r){M_(r),e=Zl(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fo=null,ra=null;function tI(t){gv(t,0)}function Fu(t){var e=Ei(t);if(R_(e))return t}function nI(t,e){if(t==="change")return e}var ov=!1;if(Ar){var $c;if(Ar){var zc="oninput"in document;if(!zc){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),zc=typeof Dm.oninput=="function"}$c=zc}else $c=!1;ov=$c&&(!document.documentMode||9<document.documentMode)}function Om(){Fo&&(Fo.detachEvent("onpropertychange",av),ra=Fo=null)}function av(t){if(t.propertyName==="value"&&Fu(ra)){var e=[];iv(e,ra,t,Yd(t)),F_(tI,e)}}function rI(t,e,n){t==="focusin"?(Om(),Fo=e,ra=n,Fo.attachEvent("onpropertychange",av)):t==="focusout"&&Om()}function sI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fu(ra)}function iI(t,e){if(t==="click")return Fu(e)}function oI(t,e){if(t==="input"||t==="change")return Fu(e)}function aI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:aI;function sa(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!wh.call(e,s)||!qn(t[s],e[s]))return!1}return!0}function Vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,e){var n=Vm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vm(n)}}function lv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uv(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lI(t){var e=uv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(r!==null&&af(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Mm(n,i);var o=Mm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uI=Ar&&"documentMode"in document&&11>=document.documentMode,vi=null,Uh=null,$o=null,Fh=!1;function Lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fh||vi==null||vi!==Wl(r)||(r=vi,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&sa($o,r)||($o=r,r=Zl(Uh,"onSelect"),0<r.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Bc={},cv={};Ar&&(cv=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function $u(t){if(Bc[t])return Bc[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cv)return Bc[t]=e[n];return t}var hv=$u("animationend"),dv=$u("animationiteration"),fv=$u("animationstart"),pv=$u("transitionend"),mv=new Map,jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ss(t,e){mv.set(t,e),ei(e,[t])}for(var Hc=0;Hc<jm.length;Hc++){var qc=jm[Hc],cI=qc.toLowerCase(),hI=qc[0].toUpperCase()+qc.slice(1);Ss(cI,"on"+hI)}Ss(hv,"onAnimationEnd");Ss(dv,"onAnimationIteration");Ss(fv,"onAnimationStart");Ss("dblclick","onDoubleClick");Ss("focusin","onFocus");Ss("focusout","onBlur");Ss(pv,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dI=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Um(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cT(r,e,void 0,t),t.currentTarget=null}function gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Um(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Um(s,l,h),i=u}}}if(Kl)throw t=Vh,Kl=!1,Vh=null,t}function He(t,e){var n=e[qh];n===void 0&&(n=e[qh]=new Set);var r=t+"__bubble";n.has(r)||(yv(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),yv(n,t,r,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[il]){t[il]=!0,S_.forEach(function(n){n!=="selectionchange"&&(dI.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,Wc("selectionchange",!1,e))}}function yv(t,e,n,r){switch(ev(e)){case 1:var s=AT;break;case 4:s=kT;break;default:s=tf}n=s.bind(null,e,n,t),s=void 0,!Oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Os(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}F_(function(){var h=i,f=Yd(n),m=[];e:{var _=mv.get(t);if(_!==void 0){var A=rf,P=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":A=zT;break;case"focusin":P="focus",A=Fc;break;case"focusout":P="blur",A=Fc;break;case"beforeblur":case"afterblur":A=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=PT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=qT;break;case hv:case dv:case fv:A=DT;break;case pv:A=GT;break;case"scroll":A=CT;break;case"wheel":A=QT;break;case"copy":case"cut":case"paste":A=VT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Rm}var N=(e&4)!==0,O=!N&&t==="scroll",x=N?_!==null?_+"Capture":null:_;N=[];for(var T=h,k;T!==null;){k=T;var b=k.stateNode;if(k.tag===5&&b!==null&&(k=b,x!==null&&(b=Zo(T,x),b!=null&&N.push(oa(T,b,k)))),O)break;T=T.return}0<N.length&&(_=new A(_,P,null,n,f),m.push({event:_,listeners:N}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",_&&n!==bh&&(P=n.relatedTarget||n.fromElement)&&(Os(P)||P[kr]))break e;if((A||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Os(P):null,P!==null&&(O=ti(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(N=km,b="onMouseLeave",x="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(N=Rm,b="onPointerLeave",x="onPointerEnter",T="pointer"),O=A==null?_:Ei(A),k=P==null?_:Ei(P),_=new N(b,T+"leave",A,n,f),_.target=O,_.relatedTarget=k,b=null,Os(f)===h&&(N=new N(x,T+"enter",P,n,f),N.target=k,N.relatedTarget=O,b=N),O=b,A&&P)t:{for(N=A,x=P,T=0,k=N;k;k=hi(k))T++;for(k=0,b=x;b;b=hi(b))k++;for(;0<T-k;)N=hi(N),T--;for(;0<k-T;)x=hi(x),k--;for(;T--;){if(N===x||x!==null&&N===x.alternate)break t;N=hi(N),x=hi(x)}N=null}else N=null;A!==null&&Fm(m,_,A,N,!1),P!==null&&O!==null&&Fm(m,O,P,N,!0)}}e:{if(_=h?Ei(h):window,A=_.nodeName&&_.nodeName.toLowerCase(),A==="select"||A==="input"&&_.type==="file")var M=nI;else if(bm(_))if(ov)M=oI;else{M=sI;var U=rI}else(A=_.nodeName)&&A.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(M=iI);if(M&&(M=M(t,h))){iv(m,M,n,f);break e}U&&U(t,_,h),t==="focusout"&&(U=_._wrapperState)&&U.controlled&&_.type==="number"&&kh(_,"number",_.value)}switch(U=h?Ei(h):window,t){case"focusin":(bm(U)||U.contentEditable==="true")&&(vi=U,Uh=h,$o=null);break;case"focusout":$o=Uh=vi=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Lm(m,n,f);break;case"selectionchange":if(uI)break;case"keydown":case"keyup":Lm(m,n,f)}var E;if(of)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else _i?rv(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(nv&&n.locale!=="ko"&&(_i||p!=="onCompositionStart"?p==="onCompositionEnd"&&_i&&(E=tv()):(Zr=f,nf="value"in Zr?Zr.value:Zr.textContent,_i=!0)),U=Zl(h,p),0<U.length&&(p=new Cm(p,t,null,n,f),m.push({event:p,listeners:U}),E?p.data=E:(E=sv(n),E!==null&&(p.data=E)))),(E=YT?XT(t,n):ZT(t,n))&&(h=Zl(h,"onBeforeInput"),0<h.length&&(f=new Cm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}gv(m,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Zo(t,n),i!=null&&r.unshift(oa(t,i,s)),i=Zo(t,e),i!=null&&r.push(oa(t,i,s))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Zo(n,i),u!=null&&o.unshift(oa(n,u,l))):s||(u=Zo(n,i),u!=null&&o.push(oa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fI=/\r\n?/g,pI=/\u0000|\uFFFD/g;function $m(t){return(typeof t=="string"?t:""+t).replace(fI,`
`).replace(pI,"")}function ol(t,e,n){if(e=$m(e),$m(t)!==e&&n)throw Error(F(425))}function eu(){}var $h=null,zh=null;function Bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,mI=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,gI=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(t){return zm.resolve(null).then(t).catch(yI)}:Hh;function yI(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);na(e)}function ss(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Yn="__reactFiber$"+eo,aa="__reactProps$"+eo,kr="__reactContainer$"+eo,qh="__reactEvents$"+eo,_I="__reactListeners$"+eo,vI="__reactHandles$"+eo;function Os(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bm(t);t!==null;){if(n=t[Yn])return n;t=Bm(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[Yn]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function zu(t){return t[aa]||null}var Wh=[],Ti=-1;function xs(t){return{current:t}}function Ke(t){0>Ti||(t.current=Wh[Ti],Wh[Ti]=null,Ti--)}function ze(t,e){Ti++,Wh[Ti]=t.current,t.current=e}var ms={},Gt=xs(ms),ln=xs(!1),Bs=ms;function $i(t,e){var n=t.type.contextTypes;if(!n)return ms;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function un(t){return t=t.childContextTypes,t!=null}function tu(){Ke(ln),Ke(Gt)}function Hm(t,e,n){if(Gt.current!==ms)throw Error(F(168));ze(Gt,e),ze(ln,n)}function _v(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,rT(t)||"Unknown",s));return tt({},n,r)}function nu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ms,Bs=Gt.current,ze(Gt,t),ze(ln,ln.current),!0}function qm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=_v(t,e,Bs),r.__reactInternalMemoizedMergedChildContext=t,Ke(ln),Ke(Gt),ze(Gt,t)):Ke(ln),ze(ln,n)}var mr=null,Bu=!1,Qc=!1;function vv(t){mr===null?mr=[t]:mr.push(t)}function wI(t){Bu=!0,vv(t)}function As(){if(!Qc&&mr!==null){Qc=!0;var t=0,e=Le;try{var n=mr;for(Le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,Bu=!1}catch(s){throw mr!==null&&(mr=mr.slice(t+1)),H_(Xd,As),s}finally{Le=e,Qc=!1}}return null}var Ii=[],Si=0,ru=null,su=0,Tn=[],In=0,Hs=null,_r=1,vr="";function Ns(t,e){Ii[Si++]=su,Ii[Si++]=ru,ru=t,su=e}function wv(t,e,n){Tn[In++]=_r,Tn[In++]=vr,Tn[In++]=Hs,Hs=t;var r=_r;t=vr;var s=32-Fn(r)-1;r&=~(1<<s),n+=1;var i=32-Fn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,_r=1<<32-Fn(e)+s|n<<s|r,vr=i+t}else _r=1<<i|n<<s|r,vr=t}function lf(t){t.return!==null&&(Ns(t,1),wv(t,1,0))}function uf(t){for(;t===ru;)ru=Ii[--Si],Ii[Si]=null,su=Ii[--Si],Ii[Si]=null;for(;t===Hs;)Hs=Tn[--In],Tn[In]=null,vr=Tn[--In],Tn[In]=null,_r=Tn[--In],Tn[In]=null}var yn=null,gn=null,Je=!1,Mn=null;function Ev(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,gn=ss(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hs!==null?{id:_r,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,gn=null,!0):!1;default:return!1}}function Gh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kh(t){if(Je){var e=gn;if(e){var n=e;if(!Wm(t,e)){if(Gh(t))throw Error(F(418));e=ss(n.nextSibling);var r=yn;e&&Wm(t,e)?Ev(r,n):(t.flags=t.flags&-4097|2,Je=!1,yn=t)}}else{if(Gh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Je=!1,yn=t}}}function Gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function al(t){if(t!==yn)return!1;if(!Je)return Gm(t),Je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bh(t.type,t.memoizedProps)),e&&(e=gn)){if(Gh(t))throw Tv(),Error(F(418));for(;e;)Ev(t,e),e=ss(e.nextSibling)}if(Gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=ss(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=yn?ss(t.stateNode.nextSibling):null;return!0}function Tv(){for(var t=gn;t;)t=ss(t.nextSibling)}function zi(){gn=yn=null,Je=!1}function cf(t){Mn===null?Mn=[t]:Mn.push(t)}var EI=Or.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Km(t){var e=t._init;return e(t._payload)}function Iv(t){function e(x,T){if(t){var k=x.deletions;k===null?(x.deletions=[T],x.flags|=16):k.push(T)}}function n(x,T){if(!t)return null;for(;T!==null;)e(x,T),T=T.sibling;return null}function r(x,T){for(x=new Map;T!==null;)T.key!==null?x.set(T.key,T):x.set(T.index,T),T=T.sibling;return x}function s(x,T){return x=ls(x,T),x.index=0,x.sibling=null,x}function i(x,T,k){return x.index=k,t?(k=x.alternate,k!==null?(k=k.index,k<T?(x.flags|=2,T):k):(x.flags|=2,T)):(x.flags|=1048576,T)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,T,k,b){return T===null||T.tag!==6?(T=nh(k,x.mode,b),T.return=x,T):(T=s(T,k),T.return=x,T)}function u(x,T,k,b){var M=k.type;return M===yi?f(x,T,k.props.children,b,k.key):T!==null&&(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&Km(M)===T.type)?(b=s(T,k.props),b.ref=So(x,T,k),b.return=x,b):(b=Vl(k.type,k.key,k.props,null,x.mode,b),b.ref=So(x,T,k),b.return=x,b)}function h(x,T,k,b){return T===null||T.tag!==4||T.stateNode.containerInfo!==k.containerInfo||T.stateNode.implementation!==k.implementation?(T=rh(k,x.mode,b),T.return=x,T):(T=s(T,k.children||[]),T.return=x,T)}function f(x,T,k,b,M){return T===null||T.tag!==7?(T=Fs(k,x.mode,b,M),T.return=x,T):(T=s(T,k),T.return=x,T)}function m(x,T,k){if(typeof T=="string"&&T!==""||typeof T=="number")return T=nh(""+T,x.mode,k),T.return=x,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ya:return k=Vl(T.type,T.key,T.props,null,x.mode,k),k.ref=So(x,null,T),k.return=x,k;case gi:return T=rh(T,x.mode,k),T.return=x,T;case Hr:var b=T._init;return m(x,b(T._payload),k)}if(Po(T)||vo(T))return T=Fs(T,x.mode,k,null),T.return=x,T;ll(x,T)}return null}function _(x,T,k,b){var M=T!==null?T.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return M!==null?null:l(x,T,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ya:return k.key===M?u(x,T,k,b):null;case gi:return k.key===M?h(x,T,k,b):null;case Hr:return M=k._init,_(x,T,M(k._payload),b)}if(Po(k)||vo(k))return M!==null?null:f(x,T,k,b,null);ll(x,k)}return null}function A(x,T,k,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(k)||null,l(T,x,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ya:return x=x.get(b.key===null?k:b.key)||null,u(T,x,b,M);case gi:return x=x.get(b.key===null?k:b.key)||null,h(T,x,b,M);case Hr:var U=b._init;return A(x,T,k,U(b._payload),M)}if(Po(b)||vo(b))return x=x.get(k)||null,f(T,x,b,M,null);ll(T,b)}return null}function P(x,T,k,b){for(var M=null,U=null,E=T,p=T=0,v=null;E!==null&&p<k.length;p++){E.index>p?(v=E,E=null):v=E.sibling;var w=_(x,E,k[p],b);if(w===null){E===null&&(E=v);break}t&&E&&w.alternate===null&&e(x,E),T=i(w,T,p),U===null?M=w:U.sibling=w,U=w,E=v}if(p===k.length)return n(x,E),Je&&Ns(x,p),M;if(E===null){for(;p<k.length;p++)E=m(x,k[p],b),E!==null&&(T=i(E,T,p),U===null?M=E:U.sibling=E,U=E);return Je&&Ns(x,p),M}for(E=r(x,E);p<k.length;p++)v=A(E,x,p,k[p],b),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?p:v.key),T=i(v,T,p),U===null?M=v:U.sibling=v,U=v);return t&&E.forEach(function(S){return e(x,S)}),Je&&Ns(x,p),M}function N(x,T,k,b){var M=vo(k);if(typeof M!="function")throw Error(F(150));if(k=M.call(k),k==null)throw Error(F(151));for(var U=M=null,E=T,p=T=0,v=null,w=k.next();E!==null&&!w.done;p++,w=k.next()){E.index>p?(v=E,E=null):v=E.sibling;var S=_(x,E,w.value,b);if(S===null){E===null&&(E=v);break}t&&E&&S.alternate===null&&e(x,E),T=i(S,T,p),U===null?M=S:U.sibling=S,U=S,E=v}if(w.done)return n(x,E),Je&&Ns(x,p),M;if(E===null){for(;!w.done;p++,w=k.next())w=m(x,w.value,b),w!==null&&(T=i(w,T,p),U===null?M=w:U.sibling=w,U=w);return Je&&Ns(x,p),M}for(E=r(x,E);!w.done;p++,w=k.next())w=A(E,x,p,w.value,b),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?p:w.key),T=i(w,T,p),U===null?M=w:U.sibling=w,U=w);return t&&E.forEach(function(C){return e(x,C)}),Je&&Ns(x,p),M}function O(x,T,k,b){if(typeof k=="object"&&k!==null&&k.type===yi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ya:e:{for(var M=k.key,U=T;U!==null;){if(U.key===M){if(M=k.type,M===yi){if(U.tag===7){n(x,U.sibling),T=s(U,k.props.children),T.return=x,x=T;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&Km(M)===U.type){n(x,U.sibling),T=s(U,k.props),T.ref=So(x,U,k),T.return=x,x=T;break e}n(x,U);break}else e(x,U);U=U.sibling}k.type===yi?(T=Fs(k.props.children,x.mode,b,k.key),T.return=x,x=T):(b=Vl(k.type,k.key,k.props,null,x.mode,b),b.ref=So(x,T,k),b.return=x,x=b)}return o(x);case gi:e:{for(U=k.key;T!==null;){if(T.key===U)if(T.tag===4&&T.stateNode.containerInfo===k.containerInfo&&T.stateNode.implementation===k.implementation){n(x,T.sibling),T=s(T,k.children||[]),T.return=x,x=T;break e}else{n(x,T);break}else e(x,T);T=T.sibling}T=rh(k,x.mode,b),T.return=x,x=T}return o(x);case Hr:return U=k._init,O(x,T,U(k._payload),b)}if(Po(k))return P(x,T,k,b);if(vo(k))return N(x,T,k,b);ll(x,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,T!==null&&T.tag===6?(n(x,T.sibling),T=s(T,k),T.return=x,x=T):(n(x,T),T=nh(k,x.mode,b),T.return=x,x=T),o(x)):n(x,T)}return O}var Bi=Iv(!0),Sv=Iv(!1),iu=xs(null),ou=null,xi=null,hf=null;function df(){hf=xi=ou=null}function ff(t){var e=iu.current;Ke(iu),t._currentValue=e}function Qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){ou=t,hf=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(hf!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(ou===null)throw Error(F(308));xi=t,ou.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Vs=null;function pf(t){Vs===null?Vs=[t]:Vs.push(t)}function xv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,pf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function is(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Cr(t,n)}return s=r.interleaved,s===null?(e.next=e,pf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Cr(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zd(t,n)}}function Qm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function au(t,e,n,r){var s=t.updateQueue;qr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=h=u=null,l=i;do{var _=l.lane,A=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(_=e,A=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){m=P.call(A,m,_);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,_=typeof P=="function"?P.call(A,m,_):P,_==null)break e;m=tt({},m,_);break e;case 2:qr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[l]:_.push(l))}else A={eventTime:A,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=_;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;_=l,l=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ws|=o,t.lanes=o,t.memoizedState=m}}function Jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Ca={},Zn=xs(Ca),la=xs(Ca),ua=xs(Ca);function Ms(t){if(t===Ca)throw Error(F(174));return t}function gf(t,e){switch(ze(ua,e),ze(la,t),ze(Zn,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}Ke(Zn),ze(Zn,e)}function Hi(){Ke(Zn),Ke(la),Ke(ua)}function kv(t){Ms(ua.current);var e=Ms(Zn.current),n=Rh(e,t.type);e!==n&&(ze(la,t),ze(Zn,n))}function yf(t){la.current===t&&(Ke(Zn),Ke(la))}var Ze=xs(0);function lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function _f(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Pl=Or.ReactCurrentDispatcher,Yc=Or.ReactCurrentBatchConfig,qs=0,et=null,Tt=null,Rt=null,uu=!1,zo=!1,ca=0,TI=0;function Ft(){throw Error(F(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function wf(t,e,n,r,s,i){if(qs=i,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?AI:kI,t=n(r,s),zo){i=0;do{if(zo=!1,ca=0,25<=i)throw Error(F(301));i+=1,Rt=Tt=null,e.updateQueue=null,Pl.current=CI,t=n(r,s)}while(zo)}if(Pl.current=cu,e=Tt!==null&&Tt.next!==null,qs=0,Rt=Tt=et=null,uu=!1,e)throw Error(F(300));return t}function Ef(){var t=ca!==0;return ca=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?et.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Pn(){if(Tt===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Rt===null?et.memoizedState:Rt.next;if(e!==null)Rt=e,Tt=t;else{if(t===null)throw Error(F(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Rt===null?et.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function ha(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Tt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((qs&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,et.lanes|=f,Ws|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,qn(r,e.memoizedState)||(an=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,et.lanes|=i,Ws|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);qn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Cv(){}function Rv(t,e){var n=et,r=Pn(),s=e(),i=!qn(r.memoizedState,s);if(i&&(r.memoizedState=s,an=!0),r=r.queue,Tf(bv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,da(9,Nv.bind(null,n,r,s,e),void 0,null),Pt===null)throw Error(F(349));qs&30||Pv(n,e,s)}return s}function Pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nv(t,e,n,r){e.value=n,e.getSnapshot=r,Dv(e)&&Ov(t)}function bv(t,e,n){return n(function(){Dv(e)&&Ov(t)})}function Dv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function Ov(t){var e=Cr(t,1);e!==null&&$n(e,t,1,-1)}function Ym(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=xI.bind(null,et,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vv(){return Pn().memoizedState}function Nl(t,e,n,r){var s=Qn();et.flags|=t,s.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function Hu(t,e,n,r){var s=Pn();r=r===void 0?null:r;var i=void 0;if(Tt!==null){var o=Tt.memoizedState;if(i=o.destroy,r!==null&&vf(r,o.deps)){s.memoizedState=da(e,n,i,r);return}}et.flags|=t,s.memoizedState=da(1|e,n,i,r)}function Xm(t,e){return Nl(8390656,8,t,e)}function Tf(t,e){return Hu(2048,8,t,e)}function Mv(t,e){return Hu(4,2,t,e)}function Lv(t,e){return Hu(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uv(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4,4,jv.bind(null,e,t),n)}function If(){}function Fv(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=Pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return qs&21?(qn(n,e)||(n=G_(),et.lanes|=n,Ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function II(t,e){var n=Le;Le=n!==0&&4>n?n:4,t(!0);var r=Yc.transition;Yc.transition={};try{t(!1),e()}finally{Le=n,Yc.transition=r}}function Bv(){return Pn().memoizedState}function SI(t,e,n){var r=as(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(t))qv(e,n);else if(n=xv(t,e,n,r),n!==null){var s=Yt();$n(n,t,r,s),Wv(n,e,r)}}function xI(t,e,n){var r=as(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(t))qv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,qn(l,o)){var u=e.interleaved;u===null?(s.next=s,pf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=xv(t,e,s,r),n!==null&&(s=Yt(),$n(n,t,r,s),Wv(n,e,r))}}function Hv(t){var e=t.alternate;return t===et||e!==null&&e===et}function qv(t,e){zo=uu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zd(t,n)}}var cu={readContext:Rn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},AI={readContext:Rn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SI.bind(null,et,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Ym,useDebugValue:If,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Ym(!1),e=t[0];return t=II.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=et,s=Qn();if(Je){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Pt===null)throw Error(F(349));qs&30||Pv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Xm(bv.bind(null,r,i,t),[t]),r.flags|=2048,da(9,Nv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Qn(),e=Pt.identifierPrefix;if(Je){var n=vr,r=_r;n=(r&~(1<<32-Fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kI={readContext:Rn,useCallback:Fv,useContext:Rn,useEffect:Tf,useImperativeHandle:Uv,useInsertionEffect:Mv,useLayoutEffect:Lv,useMemo:$v,useReducer:Xc,useRef:Vv,useState:function(){return Xc(ha)},useDebugValue:If,useDeferredValue:function(t){var e=Pn();return zv(e,Tt.memoizedState,t)},useTransition:function(){var t=Xc(ha)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:Bv,unstable_isNewReconciler:!1},CI={readContext:Rn,useCallback:Fv,useContext:Rn,useEffect:Tf,useImperativeHandle:Uv,useInsertionEffect:Mv,useLayoutEffect:Lv,useMemo:$v,useReducer:Zc,useRef:Vv,useState:function(){return Zc(ha)},useDebugValue:If,useDeferredValue:function(t){var e=Pn();return Tt===null?e.memoizedState=t:zv(e,Tt.memoizedState,t)},useTransition:function(){var t=Zc(ha)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:Bv,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qu={isMounted:function(t){return(t=t._reactInternals)?ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),s=as(t),i=Sr(r,s);i.payload=e,n!=null&&(i.callback=n),e=is(t,i,s),e!==null&&($n(e,t,s,r),Rl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),s=as(t),i=Sr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=is(t,i,s),e!==null&&($n(e,t,s,r),Rl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=as(t),s=Sr(n,r);s.tag=2,e!=null&&(s.callback=e),e=is(t,s,r),e!==null&&($n(e,t,r,n),Rl(e,t,r))}};function Zm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(s,i):!0}function Gv(t,e,n){var r=!1,s=ms,i=e.contextType;return typeof i=="object"&&i!==null?i=Rn(i):(s=un(e)?Bs:Gt.current,r=e.contextTypes,i=(r=r!=null)?$i(t,s):ms),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function eg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&qu.enqueueReplaceState(e,e.state,null)}function Yh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},mf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Rn(i):(i=un(e)?Bs:Gt.current,s.context=$i(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&qu.enqueueReplaceState(s,s.state,null),au(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function qi(t,e){try{var n="",r=e;do n+=nT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RI=typeof WeakMap=="function"?WeakMap:Map;function Kv(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){du||(du=!0,ld=r),Xh(t,e)},n}function Qv(t,e,n){n=Sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Xh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xh(t,e),typeof r!="function"&&(os===null?os=new Set([this]):os.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new RI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=BI.bind(null,t,e,n),e.then(t,t))}function ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,is(n,e,1))),n.lanes|=1),t)}var PI=Or.ReactCurrentOwner,an=!1;function Jt(t,e,n,r){e.child=t===null?Sv(e,null,n,r):Bi(e,t.child,n,r)}function sg(t,e,n,r,s){n=n.render;var i=e.ref;return bi(e,s),r=wf(t,e,n,r,i,s),n=Ef(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rr(t,e,s)):(Je&&n&&lf(e),e.flags|=1,Jt(t,e,r,s),e.child)}function ig(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Nf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Jv(t,e,i,r,s)):(t=Vl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return Rr(t,e,s)}return e.flags|=1,t=ls(i,r),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(sa(i,r)&&t.ref===e.ref)if(an=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Rr(t,e,s)}return Zh(t,e,n,r,s)}function Yv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(ki,mn),mn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ze(ki,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ze(ki,mn),mn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ze(ki,mn),mn|=r;return Jt(t,e,s,n),e.child}function Xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zh(t,e,n,r,s){var i=un(n)?Bs:Gt.current;return i=$i(e,i),bi(e,s),n=wf(t,e,n,r,i,s),r=Ef(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Rr(t,e,s)):(Je&&r&&lf(e),e.flags|=1,Jt(t,e,n,s),e.child)}function og(t,e,n,r,s){if(un(n)){var i=!0;nu(e)}else i=!1;if(bi(e,s),e.stateNode===null)bl(t,e),Gv(e,n,r),Yh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Rn(h):(h=un(n)?Bs:Gt.current,h=$i(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&eg(e,o,r,h),qr=!1;var _=e.memoizedState;o.state=_,au(e,r,o,s),u=e.memoizedState,l!==r||_!==u||ln.current||qr?(typeof f=="function"&&(Jh(e,n,f,r),u=e.memoizedState),(l=qr||Zm(e,n,l,r,_,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Av(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:On(e.type,l),o.props=h,m=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rn(u):(u=un(n)?Bs:Gt.current,u=$i(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||_!==u)&&eg(e,o,r,u),qr=!1,_=e.memoizedState,o.state=_,au(e,r,o,s);var P=e.memoizedState;l!==m||_!==P||ln.current||qr?(typeof A=="function"&&(Jh(e,n,A,r),P=e.memoizedState),(h=qr||Zm(e,n,h,r,_,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return ed(t,e,n,r,i,s)}function ed(t,e,n,r,s,i){Xv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&qm(e,n,!1),Rr(t,e,i);r=e.stateNode,PI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,i),e.child=Bi(e,null,l,i)):Jt(t,e,l,i),e.memoizedState=r.state,s&&qm(e,n,!0),e.child}function Zv(t){var e=t.stateNode;e.pendingContext?Hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hm(t,e.context,!1),gf(t,e.containerInfo)}function ag(t,e,n,r,s){return zi(),cf(s),e.flags|=256,Jt(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function e0(t,e,n){var r=e.pendingProps,s=Ze.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ze(Ze,s&1),t===null)return Kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ku(o,r,0,null),t=Fs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=nd(n),e.memoizedState=td,t):Sf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return NI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ls(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ls(l,i):(i=Fs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=td,r}return i=t.child,t=i.sibling,r=ls(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sf(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&cf(r),Bi(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(F(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ku({mode:"visible",children:r.children},s,0,null),i=Fs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,i);if(!(e.mode&1))return ul(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=eh(i,r,void 0),ul(t,e,o,r)}if(l=(o&t.childLanes)!==0,an||l){if(r=Pt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Cr(t,s),$n(r,t,s,-1))}return Pf(),r=eh(Error(F(421))),ul(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=HI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,gn=ss(s.nextSibling),yn=e,Je=!0,Mn=null,t!==null&&(Tn[In++]=_r,Tn[In++]=vr,Tn[In++]=Hs,_r=t.id,vr=t.overflow,Hs=e),e=Sf(e,r.children),e.flags|=4096,e)}function lg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qh(t.return,e,n)}function th(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function t0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Jt(t,e,r.children,n),r=Ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,n,e);else if(t.tag===19)lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ze(Ze,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&lu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),th(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&lu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}th(e,!0,n,null,i);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ls(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ls(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bI(t,e,n){switch(e.tag){case 3:Zv(e),zi();break;case 5:kv(e);break;case 1:un(e.type)&&nu(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ze(iu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ze(Ze,Ze.current&1),e.flags|=128,null):n&e.child.childLanes?e0(t,e,n):(ze(Ze,Ze.current&1),t=Rr(t,e,n),t!==null?t.sibling:null);ze(Ze,Ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return t0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ze(Ze,Ze.current),r)break;return null;case 22:case 23:return e.lanes=0,Yv(t,e,n)}return Rr(t,e,n)}var n0,rd,r0,s0;n0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};r0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ms(Zn.current);var i=null;switch(n){case"input":s=xh(t,s),r=xh(t,r),i=[];break;case"select":s=tt({},s,{value:void 0}),r=tt({},r,{value:void 0}),i=[];break;case"textarea":s=Ch(t,s),r=Ch(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=eu)}Ph(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Yo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&He("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};s0=function(t,e,n,r){n!==r&&(e.flags|=4)};function xo(t,e){if(!Je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DI(t,e,n){var r=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return un(e.type)&&tu(),$t(e),null;case 3:return r=e.stateNode,Hi(),Ke(ln),Ke(Gt),_f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(hd(Mn),Mn=null))),rd(t,e),$t(e),null;case 5:yf(e);var s=Ms(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)r0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return $t(e),null}if(t=Ms(Zn.current),al(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Yn]=e,r[aa]=i,t=(e.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(s=0;s<bo.length;s++)He(bo[s],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":ym(r,i),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},He("invalid",r);break;case"textarea":vm(r,i),He("invalid",r)}Ph(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),s=["children",""+l]):Yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&He("scroll",r)}switch(n){case"input":Xa(r),_m(r,i,!0);break;case"textarea":Xa(r),wm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=eu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=b_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[aa]=r,n0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nh(n,r),n){case"dialog":He("cancel",t),He("close",t),s=r;break;case"iframe":case"object":case"embed":He("load",t),s=r;break;case"video":case"audio":for(s=0;s<bo.length;s++)He(bo[s],t);s=r;break;case"source":He("error",t),s=r;break;case"img":case"image":case"link":He("error",t),He("load",t),s=r;break;case"details":He("toggle",t),s=r;break;case"input":ym(t,r),s=xh(t,r),He("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=tt({},r,{value:void 0}),He("invalid",t);break;case"textarea":vm(t,r),s=Ch(t,r),He("invalid",t);break;default:s=r}Ph(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?V_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&D_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xo(t,u):typeof u=="number"&&Xo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&He("scroll",t):u!=null&&Gd(t,i,u,o))}switch(n){case"input":Xa(t),_m(t,r,!1);break;case"textarea":Xa(t),wm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ps(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ci(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=eu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)s0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ms(ua.current),Ms(Zn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(i=r.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return $t(e),null;case 13:if(Ke(Ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Je&&gn!==null&&e.mode&1&&!(e.flags&128))Tv(),zi(),e.flags|=98560,i=!1;else if(i=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Yn]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),i=!1}else Mn!==null&&(hd(Mn),Mn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ze.current&1?St===0&&(St=3):Pf())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Hi(),rd(t,e),t===null&&ia(e.stateNode.containerInfo),$t(e),null;case 10:return ff(e.type._context),$t(e),null;case 17:return un(e.type)&&tu(),$t(e),null;case 19:if(Ke(Ze),i=e.memoizedState,i===null)return $t(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)xo(i,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lu(t),o!==null){for(e.flags|=128,xo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ze(Ze,Ze.current&1|2),e.child}t=t.sibling}i.tail!==null&&ft()>Wi&&(e.flags|=128,r=!0,xo(i,!1),e.lanes=4194304)}else{if(!r)if(t=lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Je)return $t(e),null}else 2*ft()-i.renderingStartTime>Wi&&n!==1073741824&&(e.flags|=128,r=!0,xo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ft(),e.sibling=null,n=Ze.current,ze(Ze,r?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function OI(t,e){switch(uf(e),e.tag){case 1:return un(e.type)&&tu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hi(),Ke(ln),Ke(Gt),_f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(Ke(Ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ke(Ze),null;case 4:return Hi(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var cl=!1,qt=!1,VI=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){at(t,e,r)}else n.current=null}function sd(t,e,n){try{n()}catch(r){at(t,e,r)}}var ug=!1;function MI(t,e){if($h=Yl,t=uv(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,_=null;t:for(;;){for(var A;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)_=m,m=A;for(;;){if(m===t)break t;if(_===n&&++h===s&&(l=o),_===i&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zh={focusedElem:t,selectionRange:n},Yl=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,O=P.memoizedState,x=e.stateNode,T=x.getSnapshotBeforeUpdate(e.elementType===e.type?N:On(e.type,N),O);x.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){at(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return P=ug,ug=!1,P}function Bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&sd(e,n,i)}s=s.next}while(s!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i0(t){var e=t.alternate;e!==null&&(t.alternate=null,i0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[aa],delete e[qh],delete e[_I],delete e[vI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o0(t){return t.tag===5||t.tag===3||t.tag===4}function cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=eu));else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Dt=null,Vn=!1;function zr(t,e,n){for(n=n.child;n!==null;)a0(t,e,n),n=n.sibling}function a0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:qt||Ai(n,e);case 6:var r=Dt,s=Vn;Dt=null,zr(t,e,n),Dt=r,Vn=s,Dt!==null&&(Vn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Vn?(t=Dt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),na(t)):Kc(Dt,n.stateNode));break;case 4:r=Dt,s=Vn,Dt=n.stateNode.containerInfo,Vn=!0,zr(t,e,n),Dt=r,Vn=s;break;case 0:case 11:case 14:case 15:if(!qt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&sd(n,e,o),s=s.next}while(s!==r)}zr(t,e,n);break;case 1:if(!qt&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){at(n,e,l)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(qt=(r=qt)||n.memoizedState!==null,zr(t,e,n),qt=r):zr(t,e,n);break;default:zr(t,e,n)}}function hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VI),e.forEach(function(r){var s=qI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Dt=l.stateNode,Vn=!1;break e;case 3:Dt=l.stateNode.containerInfo,Vn=!0;break e;case 4:Dt=l.stateNode.containerInfo,Vn=!0;break e}l=l.return}if(Dt===null)throw Error(F(160));a0(i,o,s),Dt=null,Vn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){at(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l0(e,t),e=e.sibling}function l0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Kn(t),r&4){try{Bo(3,t,t.return),Wu(3,t)}catch(N){at(t,t.return,N)}try{Bo(5,t,t.return)}catch(N){at(t,t.return,N)}}break;case 1:Nn(e,t),Kn(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Nn(e,t),Kn(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var s=t.stateNode;try{Xo(s,"")}catch(N){at(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&P_(s,i),Nh(l,o);var h=Nh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?V_(s,m):f==="dangerouslySetInnerHTML"?D_(s,m):f==="children"?Xo(s,m):Gd(s,f,m,h)}switch(l){case"input":Ah(s,i);break;case"textarea":N_(s,i);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Ci(s,!!i.multiple,A,!1):_!==!!i.multiple&&(i.defaultValue!=null?Ci(s,!!i.multiple,i.defaultValue,!0):Ci(s,!!i.multiple,i.multiple?[]:"",!1))}s[aa]=i}catch(N){at(t,t.return,N)}}break;case 6:if(Nn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){at(t,t.return,N)}}break;case 3:if(Nn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(N){at(t,t.return,N)}break;case 4:Nn(e,t),Kn(t);break;case 13:Nn(e,t),Kn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(kf=ft())),r&4&&hg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(h=qt)||f,Nn(e,t),qt=h):Nn(e,t),Kn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(m=K=f;K!==null;){switch(_=K,A=_.child,_.tag){case 0:case 11:case 14:case 15:Bo(4,_,_.return);break;case 1:Ai(_,_.return);var P=_.stateNode;if(typeof P.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){at(r,n,N)}}break;case 5:Ai(_,_.return);break;case 22:if(_.memoizedState!==null){fg(m);continue}}A!==null?(A.return=_,K=A):fg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=O_("display",o))}catch(N){at(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){at(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Nn(e,t),Kn(t),r&4&&hg(t);break;case 21:break;default:Nn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Xo(s,""),r.flags&=-33);var i=cg(t);ad(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=cg(t);od(t,l,o);break;default:throw Error(F(161))}}catch(u){at(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LI(t,e,n){K=t,u0(t)}function u0(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||cl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||qt;l=cl;var h=qt;if(cl=o,(qt=u)&&!h)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?pg(s):u!==null?(u.return=o,K=u):pg(s);for(;i!==null;)K=i,u0(i),i=i.sibling;K=s,cl=l,qt=h}dg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):dg(t)}}function dg(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Jm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&na(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}qt||e.flags&512&&id(e)}catch(_){at(e,e.return,_)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function fg(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function pg(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(u){at(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){at(e,s,u)}}var i=e.return;try{id(e)}catch(u){at(e,i,u)}break;case 5:var o=e.return;try{id(e)}catch(u){at(e,o,u)}}}catch(u){at(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var jI=Math.ceil,hu=Or.ReactCurrentDispatcher,xf=Or.ReactCurrentOwner,Cn=Or.ReactCurrentBatchConfig,ke=0,Pt=null,yt=null,Lt=0,mn=0,ki=xs(0),St=0,fa=null,Ws=0,Gu=0,Af=0,Ho=null,on=null,kf=0,Wi=1/0,pr=null,du=!1,ld=null,os=null,hl=!1,es=null,fu=0,qo=0,ud=null,Dl=-1,Ol=0;function Yt(){return ke&6?ft():Dl!==-1?Dl:Dl=ft()}function as(t){return t.mode&1?ke&2&&Lt!==0?Lt&-Lt:EI.transition!==null?(Ol===0&&(Ol=G_()),Ol):(t=Le,t!==0||(t=window.event,t=t===void 0?16:ev(t.type)),t):1}function $n(t,e,n,r){if(50<qo)throw qo=0,ud=null,Error(F(185));xa(t,n,r),(!(ke&2)||t!==Pt)&&(t===Pt&&(!(ke&2)&&(Gu|=n),St===4&&Qr(t,Lt)),cn(t,r),n===1&&ke===0&&!(e.mode&1)&&(Wi=ft()+500,Bu&&As()))}function cn(t,e){var n=t.callbackNode;ET(t,e);var r=Jl(t,t===Pt?Lt:0);if(r===0)n!==null&&Im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Im(n),e===1)t.tag===0?wI(mg.bind(null,t)):vv(mg.bind(null,t)),gI(function(){!(ke&6)&&As()}),n=null;else{switch(K_(r)){case 1:n=Xd;break;case 4:n=q_;break;case 16:n=Ql;break;case 536870912:n=W_;break;default:n=Ql}n=y0(n,c0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function c0(t,e){if(Dl=-1,Ol=0,ke&6)throw Error(F(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=Jl(t,t===Pt?Lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=pu(t,r);else{e=r;var s=ke;ke|=2;var i=d0();(Pt!==t||Lt!==e)&&(pr=null,Wi=ft()+500,Us(t,e));do try{$I();break}catch(l){h0(t,l)}while(!0);df(),hu.current=i,ke=s,yt!==null?e=0:(Pt=null,Lt=0,e=St)}if(e!==0){if(e===2&&(s=Mh(t),s!==0&&(r=s,e=cd(t,s))),e===1)throw n=fa,Us(t,0),Qr(t,r),cn(t,ft()),n;if(e===6)Qr(t,r);else{if(s=t.current.alternate,!(r&30)&&!UI(s)&&(e=pu(t,r),e===2&&(i=Mh(t),i!==0&&(r=i,e=cd(t,i))),e===1))throw n=fa,Us(t,0),Qr(t,r),cn(t,ft()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:bs(t,on,pr);break;case 3:if(Qr(t,r),(r&130023424)===r&&(e=kf+500-ft(),10<e)){if(Jl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Hh(bs.bind(null,t,on,pr),e);break}bs(t,on,pr);break;case 4:if(Qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Fn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ft()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jI(r/1960))-r,10<r){t.timeoutHandle=Hh(bs.bind(null,t,on,pr),r);break}bs(t,on,pr);break;case 5:bs(t,on,pr);break;default:throw Error(F(329))}}}return cn(t,ft()),t.callbackNode===n?c0.bind(null,t):null}function cd(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(Us(t,e).flags|=256),t=pu(t,e),t!==2&&(e=on,on=n,e!==null&&hd(e)),t}function hd(t){on===null?on=t:on.push.apply(on,t)}function UI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!qn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(t,e){for(e&=~Af,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),r=1<<n;t[n]=-1,e&=~r}}function mg(t){if(ke&6)throw Error(F(327));Di();var e=Jl(t,0);if(!(e&1))return cn(t,ft()),null;var n=pu(t,e);if(t.tag!==0&&n===2){var r=Mh(t);r!==0&&(e=r,n=cd(t,r))}if(n===1)throw n=fa,Us(t,0),Qr(t,e),cn(t,ft()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bs(t,on,pr),cn(t,ft()),null}function Cf(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(Wi=ft()+500,Bu&&As())}}function Gs(t){es!==null&&es.tag===0&&!(ke&6)&&Di();var e=ke;ke|=1;var n=Cn.transition,r=Le;try{if(Cn.transition=null,Le=1,t)return t()}finally{Le=r,Cn.transition=n,ke=e,!(ke&6)&&As()}}function Rf(){mn=ki.current,Ke(ki)}function Us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mI(n)),yt!==null)for(n=yt.return;n!==null;){var r=n;switch(uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tu();break;case 3:Hi(),Ke(ln),Ke(Gt),_f();break;case 5:yf(r);break;case 4:Hi();break;case 13:Ke(Ze);break;case 19:Ke(Ze);break;case 10:ff(r.type._context);break;case 22:case 23:Rf()}n=n.return}if(Pt=t,yt=t=ls(t.current,null),Lt=mn=e,St=0,fa=null,Af=Gu=Ws=0,on=Ho=null,Vs!==null){for(e=0;e<Vs.length;e++)if(n=Vs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Vs=null}return t}function h0(t,e){do{var n=yt;try{if(df(),Pl.current=cu,uu){for(var r=et.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}uu=!1}if(qs=0,Rt=Tt=et=null,zo=!1,ca=0,xf.current=null,n===null||n.return===null){St=1,fa=e,yt=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Lt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=ng(o);if(A!==null){A.flags&=-257,rg(A,o,l,i,e),A.mode&1&&tg(i,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){tg(i,h,e),Pf();break e}u=Error(F(426))}}else if(Je&&l.mode&1){var O=ng(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),rg(O,o,l,i,e),cf(qi(u,l));break e}}i=u=qi(u,l),St!==4&&(St=2),Ho===null?Ho=[i]:Ho.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=Kv(i,u,e);Qm(i,x);break e;case 1:l=u;var T=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(os===null||!os.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Qv(i,l,e);Qm(i,b);break e}}i=i.return}while(i!==null)}p0(n)}catch(M){e=M,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function d0(){var t=hu.current;return hu.current=cu,t===null?cu:t}function Pf(){(St===0||St===3||St===2)&&(St=4),Pt===null||!(Ws&268435455)&&!(Gu&268435455)||Qr(Pt,Lt)}function pu(t,e){var n=ke;ke|=2;var r=d0();(Pt!==t||Lt!==e)&&(pr=null,Us(t,e));do try{FI();break}catch(s){h0(t,s)}while(!0);if(df(),ke=n,hu.current=r,yt!==null)throw Error(F(261));return Pt=null,Lt=0,St}function FI(){for(;yt!==null;)f0(yt)}function $I(){for(;yt!==null&&!dT();)f0(yt)}function f0(t){var e=g0(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?p0(t):yt=e,xf.current=null}function p0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OI(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,yt=null;return}}else if(n=DI(n,e,mn),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);St===0&&(St=5)}function bs(t,e,n){var r=Le,s=Cn.transition;try{Cn.transition=null,Le=1,zI(t,e,n,r)}finally{Cn.transition=s,Le=r}return null}function zI(t,e,n,r){do Di();while(es!==null);if(ke&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(TT(t,i),t===Pt&&(yt=Pt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,y0(Ql,function(){return Di(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Cn.transition,Cn.transition=null;var o=Le;Le=1;var l=ke;ke|=4,xf.current=null,MI(t,n),l0(n,t),lI(zh),Yl=!!$h,zh=$h=null,t.current=n,LI(n),fT(),ke=l,Le=o,Cn.transition=i}else t.current=n;if(hl&&(hl=!1,es=t,fu=s),i=t.pendingLanes,i===0&&(os=null),gT(n.stateNode),cn(t,ft()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(du)throw du=!1,t=ld,ld=null,t;return fu&1&&t.tag!==0&&Di(),i=t.pendingLanes,i&1?t===ud?qo++:(qo=0,ud=t):qo=0,As(),null}function Di(){if(es!==null){var t=K_(fu),e=Cn.transition,n=Le;try{if(Cn.transition=null,Le=16>t?16:t,es===null)var r=!1;else{if(t=es,es=null,fu=0,ke&6)throw Error(F(331));var s=ke;for(ke|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(K=h;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:Bo(8,f,i)}var m=f.child;if(m!==null)m.return=f,K=m;else for(;K!==null;){f=K;var _=f.sibling,A=f.return;if(i0(f),f===h){K=null;break}if(_!==null){_.return=A,K=_;break}K=A}}}var P=i.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Bo(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,K=x;break e}K=i.return}}var T=t.current;for(K=T;K!==null;){o=K;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,K=k;else e:for(o=T;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wu(9,l)}}catch(M){at(l,l.return,M)}if(l===o){K=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,K=b;break e}K=l.return}}if(ke=s,As(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(ju,t)}catch{}r=!0}return r}finally{Le=n,Cn.transition=e}}return!1}function gg(t,e,n){e=qi(n,e),e=Kv(t,e,1),t=is(t,e,1),e=Yt(),t!==null&&(xa(t,1,e),cn(t,e))}function at(t,e,n){if(t.tag===3)gg(t,t,n);else for(;e!==null;){if(e.tag===3){gg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(os===null||!os.has(r))){t=qi(n,t),t=Qv(e,t,1),e=is(e,t,1),t=Yt(),e!==null&&(xa(e,1,t),cn(e,t));break}}e=e.return}}function BI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Lt&n)===n&&(St===4||St===3&&(Lt&130023424)===Lt&&500>ft()-kf?Us(t,0):Af|=n),cn(t,e)}function m0(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=Yt();t=Cr(t,e),t!==null&&(xa(t,e,n),cn(t,n))}function HI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m0(t,n)}function qI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),m0(t,n)}var g0;g0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,bI(t,e,n);an=!!(t.flags&131072)}else an=!1,Je&&e.flags&1048576&&wv(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var s=$i(e,Gt.current);bi(e,n),s=wf(null,e,r,t,s,n);var i=Ef();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(r)?(i=!0,nu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,mf(e),s.updater=qu,e.stateNode=s,s._reactInternals=e,Yh(e,r,t,n),e=ed(null,e,r,!0,i,n)):(e.tag=0,Je&&i&&lf(e),Jt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=GI(r),t=On(r,t),s){case 0:e=Zh(null,e,r,t,n);break e;case 1:e=og(null,e,r,t,n);break e;case 11:e=sg(null,e,r,t,n);break e;case 14:e=ig(null,e,r,On(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:On(r,s),Zh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:On(r,s),og(t,e,r,s,n);case 3:e:{if(Zv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Av(t,e),au(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=qi(Error(F(423)),e),e=ag(t,e,r,n,s);break e}else if(r!==s){s=qi(Error(F(424)),e),e=ag(t,e,r,n,s);break e}else for(gn=ss(e.stateNode.containerInfo.firstChild),yn=e,Je=!0,Mn=null,n=Sv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===s){e=Rr(t,e,n);break e}Jt(t,e,r,n)}e=e.child}return e;case 5:return kv(e),t===null&&Kh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Bh(r,s)?o=null:i!==null&&Bh(r,i)&&(e.flags|=32),Xv(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Kh(e),null;case 13:return e0(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):Jt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:On(r,s),sg(t,e,r,s,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ze(iu,r._currentValue),r._currentValue=o,i!==null)if(qn(i.value,o)){if(i.children===s.children&&!ln.current){e=Rr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Sr(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Qh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Jt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,bi(e,n),s=Rn(s),r=r(s),e.flags|=1,Jt(t,e,r,n),e.child;case 14:return r=e.type,s=On(r,e.pendingProps),s=On(r.type,s),ig(t,e,r,s,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:On(r,s),bl(t,e),e.tag=1,un(r)?(t=!0,nu(e)):t=!1,bi(e,n),Gv(e,r,s),Yh(e,r,s,n),ed(null,e,r,!0,t,n);case 19:return t0(t,e,n);case 22:return Yv(t,e,n)}throw Error(F(156,e.tag))};function y0(t,e){return H_(t,e)}function WI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,r){return new WI(t,e,n,r)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GI(t){if(typeof t=="function")return Nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qd)return 11;if(t===Jd)return 14}return 2}function ls(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Nf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return Fs(n.children,s,i,e);case Kd:o=8,s|=8;break;case Eh:return t=kn(12,n,e,s|2),t.elementType=Eh,t.lanes=i,t;case Th:return t=kn(13,n,e,s),t.elementType=Th,t.lanes=i,t;case Ih:return t=kn(19,n,e,s),t.elementType=Ih,t.lanes=i,t;case k_:return Ku(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x_:o=10;break e;case A_:o=9;break e;case Qd:o=11;break e;case Jd:o=14;break e;case Hr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=kn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Fs(t,e,n,r){return t=kn(7,t,r,e),t.lanes=n,t}function Ku(t,e,n,r){return t=kn(22,t,r,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function bf(t,e,n,r,s,i,o,l,u){return t=new KI(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=kn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(i),t}function QI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _0(t){if(!t)return ms;t=t._reactInternals;e:{if(ti(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(un(n))return _v(t,n,e)}return e}function v0(t,e,n,r,s,i,o,l,u){return t=bf(n,r,!0,t,s,i,o,l,u),t.context=_0(null),n=t.current,r=Yt(),s=as(n),i=Sr(r,s),i.callback=e??null,is(n,i,s),t.current.lanes=s,xa(t,s,r),cn(t,r),t}function Qu(t,e,n,r){var s=e.current,i=Yt(),o=as(s);return n=_0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=is(s,e,o),t!==null&&($n(t,s,o,i),Rl(t,s,o)),o}function mu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){yg(t,e),(t=t.alternate)&&yg(t,e)}function JI(){return null}var w0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Ju.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Qu(t,e,null,null)};Ju.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gs(function(){Qu(null,t,null,null)}),e[kr]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=Y_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&Z_(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function YI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=mu(o);i.call(h)}}var o=v0(e,r,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[kr]=o.current,ia(t.nodeType===8?t.parentNode:t),Gs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=mu(u);l.call(h)}}var u=bf(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=u,t[kr]=u.current,ia(t.nodeType===8?t.parentNode:t),Gs(function(){Qu(e,u,n,r)}),u}function Xu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=mu(o);l.call(u)}}Qu(e,o,t,s)}else o=YI(n,e,t,s,r);return mu(o)}Q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=No(e.pendingLanes);n!==0&&(Zd(e,n|1),cn(e,ft()),!(ke&6)&&(Wi=ft()+500,As()))}break;case 13:Gs(function(){var r=Cr(t,1);if(r!==null){var s=Yt();$n(r,t,1,s)}}),Df(t,1)}};ef=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Yt();$n(e,t,134217728,n)}Df(t,134217728)}};J_=function(t){if(t.tag===13){var e=as(t),n=Cr(t,e);if(n!==null){var r=Yt();$n(n,t,e,r)}Df(t,e)}};Y_=function(){return Le};X_=function(t,e){var n=Le;try{return Le=t,e()}finally{Le=n}};Dh=function(t,e,n){switch(e){case"input":if(Ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=zu(r);if(!s)throw Error(F(90));R_(r),Ah(r,s)}}}break;case"textarea":N_(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};j_=Cf;U_=Gs;var XI={usingClientEntryPoint:!1,Events:[ka,Ei,zu,M_,L_,Cf]},Ao={findFiberByHostInstance:Os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZI={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=z_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||JI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ju=dl.inject(ZI),Xn=dl}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XI;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(F(200));return QI(t,e,null,n)};vn.createRoot=function(t,e){if(!Vf(t))throw Error(F(299));var n=!1,r="",s=w0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=bf(t,1,!1,null,null,n,!1,r,s),t[kr]=e.current,ia(t.nodeType===8?t.parentNode:t),new Of(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=z_(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Gs(t)};vn.hydrate=function(t,e,n){if(!Yu(e))throw Error(F(200));return Xu(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=w0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=v0(e,null,t,1,n??null,s,!1,i,o),t[kr]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ju(e)};vn.render=function(t,e,n){if(!Yu(e))throw Error(F(200));return Xu(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Yu(t))throw Error(F(40));return t._reactRootContainer?(Gs(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};vn.unstable_batchedUpdates=Cf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Xu(t,e,n,!1,r)};vn.version="18.3.1-next-f1338f8080-20240426";function E0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E0)}catch(t){console.error(t)}}E0(),E_.exports=vn;var eS=E_.exports,vg=eS;vh.createRoot=vg.createRoot,vh.hydrateRoot=vg.hydrateRoot;const tS="modulepreload",nS=function(t){return"/shorts-brain/"+t},wg={},Eg=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=nS(u),u in wg)return;wg[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":tS,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((_,A)=>{m.addEventListener("load",_),m.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},rS=()=>{};var Tg={};/**
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
 */const T0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},I0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(_=64)),r.push(n[f],n[m],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new iS;const _=i<<2|l>>4;if(r.push(_),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oS=function(t){const e=T0(t);return I0.encodeByteArray(e,!0)},gu=function(t){return oS(t).replace(/\./g,"")},S0=function(t){try{return I0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lS=()=>aS().__FIREBASE_DEFAULTS__,uS=()=>{if(typeof process>"u"||typeof Tg>"u")return;const t=Tg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S0(t[1]);return e&&JSON.parse(e)},Zu=()=>{try{return rS()||lS()||uS()||cS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x0=t=>{var e,n;return(n=(e=Zu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},A0=t=>{const e=x0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},k0=()=>{var t;return(t=Zu())==null?void 0:t.config},C0=t=>{var e;return(e=Zu())==null?void 0:e[`_${t}`]};/**
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
 */class hS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function R0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),""].join(".")}/**
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
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function fS(){var e;const t=(e=Zu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yS(){const t=Kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _S(){return!fS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vS(){try{return typeof indexedDB=="object"}catch{return!1}}function wS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ES="FirebaseError";class hr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ES,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new hr(s,l,r)}}function TS(t,e){return t.replace(IS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const IS=/\{\$([^}]+)}/g;function SS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ks(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ig(i)&&Ig(o)){if(!Ks(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ig(t){return t!==null&&typeof t=="object"}/**
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
 */function Pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xS(t,e){const n=new AS(t,e);return n.subscribe.bind(n)}class AS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sh),s.error===void 0&&(s.error=sh),s.complete===void 0&&(s.complete=sh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sh(){}/**
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
 */function Xt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function to(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mf(t){return(await fetch(t,{credentials:"include"})).ok}let gs=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Ds="[DEFAULT]";/**
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
 */class CS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PS(e))try{this.getOrInitializeService({instanceIdentifier:Ds})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ds){return this.instances.has(e)}getOptions(e=Ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ds){return this.component?this.component.multipleInstances?e:Ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RS(t){return t===Ds?void 0:t}function PS(t){return t.instantiationMode==="EAGER"}/**
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
 */class NS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const bS={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},DS=Te.INFO,OS={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},VS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lf{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=VS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const MS=(t,e)=>e.some(n=>t instanceof n);let Sg,xg;function LS(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jS(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P0=new WeakMap,dd=new WeakMap,N0=new WeakMap,ih=new WeakMap,jf=new WeakMap;function US(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(us(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&P0.set(n,t)}).catch(()=>{}),jf.set(e,t),e}function FS(t){if(dd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $S(t){fd=t(fd)}function zS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return N0.set(r,e.sort?e.sort():[e]),us(r)}:jS().includes(t)?function(...e){return t.apply(oh(this),e),us(P0.get(this))}:function(...e){return us(t.apply(oh(this),e))}}function BS(t){return typeof t=="function"?zS(t):(t instanceof IDBTransaction&&FS(t),MS(t,LS())?new Proxy(t,fd):t)}function us(t){if(t instanceof IDBRequest)return US(t);if(ih.has(t))return ih.get(t);const e=BS(t);return e!==t&&(ih.set(t,e),jf.set(e,t)),e}const oh=t=>jf.get(t);function HS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=us(o);return r&&o.addEventListener("upgradeneeded",u=>{r(us(o.result),u.oldVersion,u.newVersion,us(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const qS=["get","getKey","getAll","getAllKeys","count"],WS=["put","add","delete","clear"],ah=new Map;function Ag(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return ah.set(e,i),i}$S(t=>({...t,get:(e,n,r)=>Ag(e,n)||t.get(e,n,r),has:(e,n)=>!!Ag(e,n)||t.has(e,n)}));/**
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
 */class GS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",kg="0.14.12";/**
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
 */const Pr=new Lf("@firebase/app"),QS="@firebase/app-compat",JS="@firebase/analytics-compat",YS="@firebase/analytics",XS="@firebase/app-check-compat",ZS="@firebase/app-check",ex="@firebase/auth",tx="@firebase/auth-compat",nx="@firebase/database",rx="@firebase/data-connect",sx="@firebase/database-compat",ix="@firebase/functions",ox="@firebase/functions-compat",ax="@firebase/installations",lx="@firebase/installations-compat",ux="@firebase/messaging",cx="@firebase/messaging-compat",hx="@firebase/performance",dx="@firebase/performance-compat",fx="@firebase/remote-config",px="@firebase/remote-config-compat",mx="@firebase/storage",gx="@firebase/storage-compat",yx="@firebase/firestore",_x="@firebase/ai",vx="@firebase/firestore-compat",wx="firebase",Ex="12.13.0";/**
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
 */const md="[DEFAULT]",Tx={[pd]:"fire-core",[QS]:"fire-core-compat",[YS]:"fire-analytics",[JS]:"fire-analytics-compat",[ZS]:"fire-app-check",[XS]:"fire-app-check-compat",[ex]:"fire-auth",[tx]:"fire-auth-compat",[nx]:"fire-rtdb",[rx]:"fire-data-connect",[sx]:"fire-rtdb-compat",[ix]:"fire-fn",[ox]:"fire-fn-compat",[ax]:"fire-iid",[lx]:"fire-iid-compat",[ux]:"fire-fcm",[cx]:"fire-fcm-compat",[hx]:"fire-perf",[dx]:"fire-perf-compat",[fx]:"fire-rc",[px]:"fire-rc-compat",[mx]:"fire-gcs",[gx]:"fire-gcs-compat",[yx]:"fire-fst",[vx]:"fire-fst-compat",[_x]:"fire-vertex","fire-js":"fire-js",[wx]:"fire-js-all"};/**
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
 */const yu=new Map,Ix=new Map,gd=new Map;function Cg(t,e){try{t.container.addComponent(e)}catch(n){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qs(t){const e=t.name;if(gd.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,t);for(const n of yu.values())Cg(n,t);for(const n of Ix.values())Cg(n,t);return!0}function ec(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Sx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cs=new Ra("app","Firebase",Sx);/**
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
 */class xx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cs.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=Ex;function b0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:md,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw cs.create("bad-app-name",{appName:String(s)});if(n||(n=k0()),!n)throw cs.create("no-options");const i=yu.get(s);if(i){if(Ks(n,i.options)&&Ks(r,i.config))return i;throw cs.create("duplicate-app",{appName:s})}const o=new NS(s);for(const u of gd.values())o.addComponent(u);const l=new xx(n,r,o);return yu.set(s,l),l}function Uf(t=md){const e=yu.get(t);if(!e&&t===md&&k0())return b0();if(!e)throw cs.create("no-app",{appName:t});return e}function er(t,e,n){let r=Tx[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(o.join(" "));return}Qs(new gs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ax="firebase-heartbeat-database",kx=1,pa="firebase-heartbeat-store";let lh=null;function D0(){return lh||(lh=HS(Ax,kx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pa)}catch(n){console.warn(n)}}}}).catch(t=>{throw cs.create("idb-open",{originalErrorMessage:t.message})})),lh}async function Cx(t){try{const n=(await D0()).transaction(pa),r=await n.objectStore(pa).get(O0(t));return await n.done,r}catch(e){if(e instanceof hr)Pr.warn(e.message);else{const n=cs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(n.message)}}}async function Rg(t,e){try{const r=(await D0()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,O0(t)),await r.done}catch(n){if(n instanceof hr)Pr.warn(n.message);else{const r=cs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pr.warn(r.message)}}}function O0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rx=1024,Px=30;class Nx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Px){const o=Ox(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pg(),{heartbeatsToSend:r,unsentEntries:s}=bx(this._heartbeatsCache.heartbeats),i=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pr.warn(n),""}}}function Pg(){return new Date().toISOString().substring(0,10)}function bx(t,e=Rx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ng(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vS()?wS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ng(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}function Ox(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Vx(t){Qs(new gs("platform-logger",e=>new GS(e),"PRIVATE")),Qs(new gs("heartbeat",e=>new Nx(e),"PRIVATE")),er(pd,kg,t),er(pd,kg,"esm2020"),er("fire-js","")}Vx("");function V0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mx=V0,M0=new Ra("auth","Firebase",V0());/**
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
 */const _u=new Lf("@firebase/auth");function Lx(t,...e){_u.logLevel<=Te.WARN&&_u.warn(`Auth (${ni}): ${t}`,...e)}function Ml(t,...e){_u.logLevel<=Te.ERROR&&_u.error(`Auth (${ni}): ${t}`,...e)}/**
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
 */function or(t,...e){throw $f(t,...e)}function zn(t,...e){return $f(t,...e)}function Ff(t,e,n){const r={...Mx(),[e]:n};return new Ra("auth","Firebase",r).create(e,{appName:t.name})}function $s(t){return Ff(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&or(t,"argument-error"),Ff(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $f(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M0.create(t,...e)}function oe(t,e,...n){if(!t)throw $f(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function Nr(t,e){t||wr(e)}/**
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
 */function yd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Ux(){return bg()==="http:"||bg()==="https:"}function bg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ux()||mS()||"connection"in navigator)?navigator.onLine:!0}function $x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nr(n>e,"Short delay should be less than long delay!"),this.isMobile=dS()||gS()}get(){return Fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zf(t,e){Nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class L0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hx=new Na(3e4,6e4);function Bf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function no(t,e,n,r,s={}){return j0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return pS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&to(t.emulatorConfig.host)&&(h.credentials="include"),L0.fetch()(await U0(t,t.config.apiHost,n,l),h)})}async function j0(t,e,n){t._canInitEmulator=!1;const r={...zx,...e};try{const s=new Wx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw fl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ff(t,f,h);or(t,f)}}catch(s){if(s instanceof hr)throw s;or(t,"network-request-failed",{message:String(s)})}}async function qx(t,e,n,r,s={}){const i=await no(t,e,n,r,s);return"mfaPendingCredential"in i&&or(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function U0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?zf(t.config,s):`${t.config.apiScheme}://${s}`;return Bx.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Wx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zn(this.auth,"network-request-failed")),Hx.get())})}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Gx(t,e){return no(t,"POST","/v1/accounts:delete",e)}async function vu(t,e){return no(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kx(t,e=!1){const n=Xt(t),r=await n.getIdToken(e),s=Hf(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wo(uh(s.auth_time)),issuedAtTime:Wo(uh(s.iat)),expirationTime:Wo(uh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uh(t){return Number(t)*1e3}function Hf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const s=S0(n);return s?JSON.parse(s):(Ml("Failed to decode base64 JWT payload"),null)}catch(s){return Ml("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dg(t){const e=Hf(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ma(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hr&&Qx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ma(t,vu(e,{idToken:n}));oe(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?F0(s.providerUserInfo):[],o=Xx(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new _d(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Yx(t){const e=Xt(t);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function F0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Zx(t,e){const n=await j0(t,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await U0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&to(t.emulatorConfig.host)&&(u.credentials="include"),L0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eA(t,e){return no(t,"POST","/v2/accounts:revokeToken",Bf(t,e))}/**
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
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Zx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Oi;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function Br(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _d(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ma(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kx(this,e)}reload(){return Yx(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject($s(this.auth));const e=await this.getIdToken();return await ma(this,Gx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:A,providerData:P,stsTokenManager:N}=n;oe(m&&N,e,"internal-error");const O=Oi.fromJSON(this.name,N);oe(typeof m=="string",e,"internal-error"),Br(r,e.name),Br(s,e.name),oe(typeof _=="boolean",e,"internal-error"),oe(typeof A=="boolean",e,"internal-error"),Br(i,e.name),Br(o,e.name),Br(l,e.name),Br(u,e.name),Br(h,e.name),Br(f,e.name);const x=new Ln({uid:m,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:O,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(x.providerData=P.map(T=>({...T}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Oi;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?F0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Oi;l.updateFromIdToken(r);const u=new Ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _d(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Og=new Map;function Er(t){Nr(t instanceof Function,"Expected a class definition");let e=Og.get(t);return e?(Nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Og.set(t,e),e)}/**
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
 */class $0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$0.type="NONE";const Vg=$0;/**
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
 */function Ll(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ll(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ll("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vu(this.auth,{idToken:e}).catch(()=>{});return n?Ln._fromGetAccountInfoResponse(this.auth,n,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(Er(Vg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Er(Vg);const o=Ll(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const _=await vu(e,{idToken:f}).catch(()=>{});if(!_)break;m=await Ln._fromGetAccountInfoResponse(e,_,f)}else m=Ln._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Vi(i,e,r))}}/**
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
 */function Mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(G0(e))return"Blackberry";if(K0(e))return"Webos";if(B0(e))return"Safari";if((e.includes("chrome/")||H0(e))&&!e.includes("edge/"))return"Chrome";if(W0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z0(t=Kt()){return/firefox\//i.test(t)}function B0(t=Kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H0(t=Kt()){return/crios\//i.test(t)}function q0(t=Kt()){return/iemobile/i.test(t)}function W0(t=Kt()){return/android/i.test(t)}function G0(t=Kt()){return/blackberry/i.test(t)}function K0(t=Kt()){return/webos/i.test(t)}function qf(t=Kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tA(t=Kt()){var e;return qf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function nA(){return yS()&&document.documentMode===10}function Q0(t=Kt()){return qf(t)||W0(t)||K0(t)||G0(t)||/windows phone/i.test(t)||q0(t)}/**
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
 */function J0(t,e=[]){let n;switch(t){case"Browser":n=Mg(Kt());break;case"Worker":n=`${Mg(Kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
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
 */class rA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sA(t,e={}){return no(t,"GET","/v2/passwordPolicy",Bf(t,e))}/**
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
 */const iA=6;class oA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??iA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class aA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lg(this),this.idTokenSubscription=new Lg(this),this.beforeStateQueue=new rA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vu(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject($s(this));const n=e?Xt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject($s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject($s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sA(this),n=new oA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Lx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tc(t){return Xt(t)}class Lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=xS(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lA(t){Wf=t}function uA(t){return Wf.loadJS(t)}function cA(){return Wf.gapiScript}function hA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dA(t,e){const n=ec(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ks(i,e??{}))return s;or(s,"already-initialized")}return n.initialize({options:e})}function fA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pA(t,e,n){const r=tc(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Y0(e),{host:o,port:l}=mA(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Ks(h,r.config.emulator)&&Ks(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,to(o)?Mf(`${i}//${o}${u}`):gA()}function Y0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mA(t){const e=Y0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jg(o)}}}function jg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class X0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
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
 */async function Mi(t,e){return qx(t,"POST","/v1/accounts:signInWithIdp",Bf(t,e))}/**
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
 */const yA="http://localhost";class Js extends X0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Js(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:yA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pa(n)}return e}}/**
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
 */class Gf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ba extends Gf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jr extends ba{constructor(){super("facebook.com")}static credential(e){return Js._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
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
 */class yr extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Js._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
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
 */class Yr extends ba{constructor(){super("github.com")}static credential(e){return Js._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class Xr extends ba{constructor(){super("twitter.com")}static credential(e,n){return Js._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
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
 */class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=Ug(r);return new Gi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ug(r);return new Gi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Eu extends hr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Eu(e,n,r,s)}}function Z0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,i,e,r):i})}async function _A(t,e,n=!1){const r=await ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gi._forOperation(t,"link",r)}/**
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
 */async function vA(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject($s(r));const s="reauthenticate";try{const i=await ma(t,Z0(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=Hf(i.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),Gi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&or(r,"user-mismatch"),i}}/**
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
 */async function wA(t,e,n=!1){if(Sn(t.app))return Promise.reject($s(t));const r="signIn",s=await Z0(t,r,e),i=await Gi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function EA(t,e,n,r){return Xt(t).onIdTokenChanged(e,n,r)}function TA(t,e,n){return Xt(t).beforeAuthStateChanged(e,n)}function ew(t,e,n,r){return Xt(t).onAuthStateChanged(e,n,r)}function IA(t){return Xt(t).signOut()}const Tu="__sak";/**
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
 */class tw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SA=1e3,xA=10;class nw extends tw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);nA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nw.type="LOCAL";const AA=nw;/**
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
 */class rw extends tw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rw.type="SESSION";const sw=rw;/**
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
 */function kA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await kA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
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
 */function Kf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class CA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Kf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tr(){return window}function RA(t){tr().location.href=t}/**
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
 */function iw(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function PA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bA(){return iw()?self:null}/**
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
 */const ow="firebaseLocalStorageDb",DA=1,Iu="firebaseLocalStorage",aw="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function OA(){const t=indexedDB.deleteDatabase(ow);return new Da(t).toPromise()}function vd(){const t=indexedDB.open(ow,DA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Iu,{keyPath:aw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Iu)?e(r):(r.close(),await OA(),e(await vd()))})})}async function Fg(t,e,n){const r=rc(t,!0).put({[aw]:e,value:n});return new Da(r).toPromise()}async function VA(t,e){const n=rc(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function $g(t,e){const n=rc(t,!0).delete(e);return new Da(n).toPromise()}const MA=800,LA=3;class lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(bA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await PA(),!this.activeServiceWorker)return;this.sender=new CA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await Fg(e,Tu,"1"),await $g(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$g(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new Da(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lw.type="LOCAL";const jA=lw;new Na(3e4,6e4);/**
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
 */function uw(t,e){return e?Er(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qf extends X0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UA(t){return wA(t.auth,new Qf(t),t.bypassAuthState)}function FA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),vA(n,new Qf(t),t.bypassAuthState)}async function $A(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),_A(n,new Qf(t),t.bypassAuthState)}/**
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
 */class cw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UA;case"linkViaPopup":case"linkViaRedirect":return $A;case"reauthViaPopup":case"reauthViaRedirect":return FA;default:or(this.auth,"internal-error")}}resolve(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zA=new Na(2e3,1e4);async function BA(t,e,n){if(Sn(t.app))return Promise.reject(zn(t,"operation-not-supported-in-this-environment"));const r=tc(t);jx(t,e,Gf);const s=uw(r,n);return new Ls(r,"signInViaPopup",e,s).executeNotNull()}class Ls extends cw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const e=Kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zA.get())};e()}}Ls.currentPopupAction=null;/**
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
 */const HA="pendingRedirect",jl=new Map;class qA extends cw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{const r=await WA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jl.set(this.auth._key(),e)}return this.bypassAuthState||jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WA(t,e){const n=QA(e),r=KA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function GA(t,e){jl.set(t._key(),e)}function KA(t){return Er(t._redirectPersistence)}function QA(t){return Ll(HA,t.config.apiKey,t.name)}async function JA(t,e,n=!1){if(Sn(t.app))return Promise.reject($s(t));const r=tc(t),s=uw(r,e),o=await new qA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YA=10*60*1e3;class XA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(zn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YA&&this.cachedEventUids.clear(),this.cachedEventUids.has(zg(e))}saveEventToCache(e){this.cachedEventUids.add(zg(e)),this.lastProcessedEventTime=Date.now()}}function zg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hw(t);default:return!1}}/**
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
 */async function ek(t,e={}){return no(t,"GET","/v1/projects",e)}/**
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
 */const tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nk=/^https?/;async function rk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ek(t);for(const n of e)try{if(sk(n))return}catch{}or(t,"unauthorized-domain")}function sk(t){const e=yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nk.test(n))return!1;if(tk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ik=new Na(3e4,6e4);function Bg(){const t=tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ok(t){return new Promise((e,n)=>{var s,i,o;function r(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),n(zn(t,"network-request-failed"))},timeout:ik.get()})}if((i=(s=tr().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=tr().gapi)!=null&&o.load)r();else{const l=hA("iframefcb");return tr()[l]=()=>{gapi.load?r():n(zn(t,"network-request-failed"))},uA(`${cA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function ak(t){return Ul=Ul||ok(t),Ul}/**
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
 */const lk=new Na(5e3,15e3),uk="__/auth/iframe",ck="emulator/auth/iframe",hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fk(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zf(e,ck):`https://${t.config.authDomain}/${uk}`,r={apiKey:e.apiKey,appName:t.name,v:ni},s=dk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pa(r).slice(1)}`}async function pk(t){const e=await ak(t),n=tr().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:fk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zn(t,"network-request-failed"),l=tr().setTimeout(()=>{i(o)},lk.get());function u(){tr().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gk=500,yk=600,_k="_blank",vk="http://localhost";class Hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wk(t,e,n,r=gk,s=yk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...mk,width:r.toString(),height:s.toString(),top:i,left:o},h=Kt().toLowerCase();n&&(l=H0(h)?_k:n),z0(h)&&(e=e||vk,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[A,P])=>`${_}${A}=${P},`,"");if(tA(h)&&l!=="_self")return Ek(e||"",l),new Hg(null);const m=window.open(e||"",l,f);oe(m,t,"popup-blocked");try{m.focus()}catch{}return new Hg(m)}function Ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tk="__/auth/handler",Ik="emulator/auth/handler",Sk=encodeURIComponent("fac");async function qg(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:s};if(e instanceof Gf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ba){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Sk}=${encodeURIComponent(u)}`:"";return`${xk(t)}?${Pa(l).slice(1)}${h}`}function xk({config:t}){return t.emulator?zf(t,Ik):`https://${t.authDomain}/${Tk}`}/**
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
 */const ch="webStorageSupport";class Ak{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sw,this._completeRedirectFn=JA,this._overrideRedirectResult=GA}async _openPopup(e,n,r,s){var o;Nr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await qg(e,n,r,yd(),s);return wk(e,i,Kf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qg(e,n,r,yd(),s);return RA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Nr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pk(e),r=new XA(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ch,{type:ch},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ch];i!==void 0&&n(!!i),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q0()||B0()||qf()}}const kk=Ak;var Wg="@firebase/auth",Gg="1.13.1";/**
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
 */class Ck{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pk(t){Qs(new gs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J0(t)},h=new aA(r,s,i,u);return fA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qs(new gs("auth-internal",e=>{const n=tc(e.getProvider("auth").getImmediate());return(r=>new Ck(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(Wg,Gg,Rk(t)),er(Wg,Gg,"esm2020")}/**
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
 */const Nk=5*60,bk=C0("authIdTokenMaxAge")||Nk;let Kg=null;const Dk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bk)return;const s=n==null?void 0:n.token;Kg!==s&&(Kg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dw(t=Uf()){const e=ec(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dA(t,{popupRedirectResolver:kk,persistence:[jA,AA,sw]}),r=C0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Dk(i.toString());TA(n,o,()=>o(n.currentUser)),EA(n,l=>o(l))}}const s=x0("auth");return s&&pA(n,`http://${s}`),n}function Ok(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}lA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ok().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pk("Browser");var Vk="firebase",Mk="12.13.0";/**
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
 */er(Vk,Mk,"app");/**
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
 */const fw="firebasestorage.googleapis.com",Lk="storageBucket",jk=2*60*1e3,Uk=10*60*1e3;/**
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
 */class dr extends hr{constructor(e,n,r=0){super(hh(e),`Firebase Storage: ${n} (${hh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ar;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ar||(ar={}));function hh(t){return"storage/"+t}function Fk(){const t="An unknown error occurred, please check the error payload for server response.";return new dr(ar.UNKNOWN,t)}function $k(){return new dr(ar.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zk(){return new dr(ar.CANCELED,"User canceled the upload/download.")}function Bk(t){return new dr(ar.INVALID_URL,"Invalid URL '"+t+"'.")}function Hk(t){return new dr(ar.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qg(t){return new dr(ar.INVALID_ARGUMENT,t)}function pw(){return new dr(ar.APP_DELETED,"The Firebase app was deleted.")}function qk(t){return new dr(ar.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class jn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jn.makeFromUrl(e,n)}catch{return new jn(e,"")}if(r.path==="")return r;throw Hk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",A=new RegExp(`^https?://${m}/${f}/b/${s}/o${_}`,"i"),P={bucket:1,path:3},N=n===fw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",x=new RegExp(`^https?://${N}/${s}/${O}`,"i"),k=[{regex:l,indices:u,postModify:i},{regex:A,indices:P,postModify:h},{regex:x,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<k.length;b++){const M=k[b],U=M.regex.exec(e);if(U){const E=U[M.indices.bucket];let p=U[M.indices.path];p||(p=""),r=new jn(E,p),M.postModify(r);break}}if(r==null)throw Bk(e);return r}}class Wk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Gk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function m(O){s=setTimeout(()=>{s=null,t(A,u())},O)}function _(){i&&clearTimeout(i)}function A(O,...x){if(h){_();return}if(O){_(),f.call(null,O,...x);return}if(u()||o){_(),f.call(null,O,...x);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let P=!1;function N(O){P||(P=!0,_(),!h&&(s!==null?(O||(l=2),clearTimeout(s),m(0)):O||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function Kk(t){t(!1)}/**
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
 */function Qk(t){return t!==void 0}function Jg(t,e,n,r){if(r<e)throw Qg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qg(`Invalid value for '${t}'. Expected ${n} or less.`)}function Jk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Su;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Su||(Su={}));/**
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
 */class Xk{constructor(e,n,r,s,i,o,l,u,h,f,m,_=!0,A=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=_,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,N)=>{this.resolve_=P,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new pl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Su.NO_ERROR,u=i.getStatus();if(!l||Yk(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Su.ABORT;r(!1,new pl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new pl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Qk(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Fk();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?pw():zk();o(u)}else{const u=$k();o(u)}};this.canceled_?n(!1,new pl(!1,null,!0)):this.backoffId_=Gk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Kk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Zk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rC(t,e,n,r,s,i,o=!0,l=!1){const u=Jk(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return tC(f,e),Zk(f,n),eC(f,i),nC(f,r),new Xk(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function sC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class xu{constructor(e,n){this._service=e,n instanceof jn?this._location=n:this._location=jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xu(e,n)}get root(){const e=new jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iC(this._location.path)}get storage(){return this._service}get parent(){const e=sC(this._location.path);if(e===null)return null;const n=new jn(this._location.bucket,e);return new xu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qk(e)}}function Yg(t,e){const n=e==null?void 0:e[Lk];return n==null?null:jn.makeFromBucketSpec(n,t)}function oC(t,e,n,r={}){t.host=`${e}:${n}`;const s=to(e);s&&Mf(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:R0(i,t.app.options.projectId))}class aC{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=fw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jk,this._maxUploadRetryTime=Uk,this._requests=new Set,s!=null?this._bucket=jn.makeFromBucketSpec(s,this._host):this._bucket=Yg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jn.makeFromBucketSpec(this._url,e):this._bucket=Yg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xu(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Wk(pw());{const o=rC(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Xg="@firebase/storage",Zg="0.14.3";/**
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
 */const mw="storage";function lC(t=Uf(),e){t=Xt(t);const r=ec(t,mw).getImmediate({identifier:e}),s=A0("storage");return s&&uC(r,...s),r}function uC(t,e,n,r={}){oC(t,e,n,r)}function cC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new aC(n,r,s,e,ni)}function hC(){Qs(new gs(mw,cC,"PUBLIC").setMultipleInstances(!0)),er(Xg,Zg,""),er(Xg,Zg,"esm2020")}hC();var ey=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hs,gw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function v(){}v.prototype=p.prototype,E.F=p.prototype,E.prototype=new v,E.prototype.constructor=E,E.D=function(w,S,C){for(var I=Array(arguments.length-2),X=2;X<arguments.length;X++)I[X-2]=arguments[X];return p.prototype[S].apply(w,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,v){v||(v=0);const w=Array(16);if(typeof p=="string")for(var S=0;S<16;++S)w[S]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(S=0;S<16;++S)w[S]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=E.g[0],v=E.g[1],S=E.g[2];let C=E.g[3],I;I=p+(C^v&(S^C))+w[0]+3614090360&4294967295,p=v+(I<<7&4294967295|I>>>25),I=C+(S^p&(v^S))+w[1]+3905402710&4294967295,C=p+(I<<12&4294967295|I>>>20),I=S+(v^C&(p^v))+w[2]+606105819&4294967295,S=C+(I<<17&4294967295|I>>>15),I=v+(p^S&(C^p))+w[3]+3250441966&4294967295,v=S+(I<<22&4294967295|I>>>10),I=p+(C^v&(S^C))+w[4]+4118548399&4294967295,p=v+(I<<7&4294967295|I>>>25),I=C+(S^p&(v^S))+w[5]+1200080426&4294967295,C=p+(I<<12&4294967295|I>>>20),I=S+(v^C&(p^v))+w[6]+2821735955&4294967295,S=C+(I<<17&4294967295|I>>>15),I=v+(p^S&(C^p))+w[7]+4249261313&4294967295,v=S+(I<<22&4294967295|I>>>10),I=p+(C^v&(S^C))+w[8]+1770035416&4294967295,p=v+(I<<7&4294967295|I>>>25),I=C+(S^p&(v^S))+w[9]+2336552879&4294967295,C=p+(I<<12&4294967295|I>>>20),I=S+(v^C&(p^v))+w[10]+4294925233&4294967295,S=C+(I<<17&4294967295|I>>>15),I=v+(p^S&(C^p))+w[11]+2304563134&4294967295,v=S+(I<<22&4294967295|I>>>10),I=p+(C^v&(S^C))+w[12]+1804603682&4294967295,p=v+(I<<7&4294967295|I>>>25),I=C+(S^p&(v^S))+w[13]+4254626195&4294967295,C=p+(I<<12&4294967295|I>>>20),I=S+(v^C&(p^v))+w[14]+2792965006&4294967295,S=C+(I<<17&4294967295|I>>>15),I=v+(p^S&(C^p))+w[15]+1236535329&4294967295,v=S+(I<<22&4294967295|I>>>10),I=p+(S^C&(v^S))+w[1]+4129170786&4294967295,p=v+(I<<5&4294967295|I>>>27),I=C+(v^S&(p^v))+w[6]+3225465664&4294967295,C=p+(I<<9&4294967295|I>>>23),I=S+(p^v&(C^p))+w[11]+643717713&4294967295,S=C+(I<<14&4294967295|I>>>18),I=v+(C^p&(S^C))+w[0]+3921069994&4294967295,v=S+(I<<20&4294967295|I>>>12),I=p+(S^C&(v^S))+w[5]+3593408605&4294967295,p=v+(I<<5&4294967295|I>>>27),I=C+(v^S&(p^v))+w[10]+38016083&4294967295,C=p+(I<<9&4294967295|I>>>23),I=S+(p^v&(C^p))+w[15]+3634488961&4294967295,S=C+(I<<14&4294967295|I>>>18),I=v+(C^p&(S^C))+w[4]+3889429448&4294967295,v=S+(I<<20&4294967295|I>>>12),I=p+(S^C&(v^S))+w[9]+568446438&4294967295,p=v+(I<<5&4294967295|I>>>27),I=C+(v^S&(p^v))+w[14]+3275163606&4294967295,C=p+(I<<9&4294967295|I>>>23),I=S+(p^v&(C^p))+w[3]+4107603335&4294967295,S=C+(I<<14&4294967295|I>>>18),I=v+(C^p&(S^C))+w[8]+1163531501&4294967295,v=S+(I<<20&4294967295|I>>>12),I=p+(S^C&(v^S))+w[13]+2850285829&4294967295,p=v+(I<<5&4294967295|I>>>27),I=C+(v^S&(p^v))+w[2]+4243563512&4294967295,C=p+(I<<9&4294967295|I>>>23),I=S+(p^v&(C^p))+w[7]+1735328473&4294967295,S=C+(I<<14&4294967295|I>>>18),I=v+(C^p&(S^C))+w[12]+2368359562&4294967295,v=S+(I<<20&4294967295|I>>>12),I=p+(v^S^C)+w[5]+4294588738&4294967295,p=v+(I<<4&4294967295|I>>>28),I=C+(p^v^S)+w[8]+2272392833&4294967295,C=p+(I<<11&4294967295|I>>>21),I=S+(C^p^v)+w[11]+1839030562&4294967295,S=C+(I<<16&4294967295|I>>>16),I=v+(S^C^p)+w[14]+4259657740&4294967295,v=S+(I<<23&4294967295|I>>>9),I=p+(v^S^C)+w[1]+2763975236&4294967295,p=v+(I<<4&4294967295|I>>>28),I=C+(p^v^S)+w[4]+1272893353&4294967295,C=p+(I<<11&4294967295|I>>>21),I=S+(C^p^v)+w[7]+4139469664&4294967295,S=C+(I<<16&4294967295|I>>>16),I=v+(S^C^p)+w[10]+3200236656&4294967295,v=S+(I<<23&4294967295|I>>>9),I=p+(v^S^C)+w[13]+681279174&4294967295,p=v+(I<<4&4294967295|I>>>28),I=C+(p^v^S)+w[0]+3936430074&4294967295,C=p+(I<<11&4294967295|I>>>21),I=S+(C^p^v)+w[3]+3572445317&4294967295,S=C+(I<<16&4294967295|I>>>16),I=v+(S^C^p)+w[6]+76029189&4294967295,v=S+(I<<23&4294967295|I>>>9),I=p+(v^S^C)+w[9]+3654602809&4294967295,p=v+(I<<4&4294967295|I>>>28),I=C+(p^v^S)+w[12]+3873151461&4294967295,C=p+(I<<11&4294967295|I>>>21),I=S+(C^p^v)+w[15]+530742520&4294967295,S=C+(I<<16&4294967295|I>>>16),I=v+(S^C^p)+w[2]+3299628645&4294967295,v=S+(I<<23&4294967295|I>>>9),I=p+(S^(v|~C))+w[0]+4096336452&4294967295,p=v+(I<<6&4294967295|I>>>26),I=C+(v^(p|~S))+w[7]+1126891415&4294967295,C=p+(I<<10&4294967295|I>>>22),I=S+(p^(C|~v))+w[14]+2878612391&4294967295,S=C+(I<<15&4294967295|I>>>17),I=v+(C^(S|~p))+w[5]+4237533241&4294967295,v=S+(I<<21&4294967295|I>>>11),I=p+(S^(v|~C))+w[12]+1700485571&4294967295,p=v+(I<<6&4294967295|I>>>26),I=C+(v^(p|~S))+w[3]+2399980690&4294967295,C=p+(I<<10&4294967295|I>>>22),I=S+(p^(C|~v))+w[10]+4293915773&4294967295,S=C+(I<<15&4294967295|I>>>17),I=v+(C^(S|~p))+w[1]+2240044497&4294967295,v=S+(I<<21&4294967295|I>>>11),I=p+(S^(v|~C))+w[8]+1873313359&4294967295,p=v+(I<<6&4294967295|I>>>26),I=C+(v^(p|~S))+w[15]+4264355552&4294967295,C=p+(I<<10&4294967295|I>>>22),I=S+(p^(C|~v))+w[6]+2734768916&4294967295,S=C+(I<<15&4294967295|I>>>17),I=v+(C^(S|~p))+w[13]+1309151649&4294967295,v=S+(I<<21&4294967295|I>>>11),I=p+(S^(v|~C))+w[4]+4149444226&4294967295,p=v+(I<<6&4294967295|I>>>26),I=C+(v^(p|~S))+w[11]+3174756917&4294967295,C=p+(I<<10&4294967295|I>>>22),I=S+(p^(C|~v))+w[2]+718787259&4294967295,S=C+(I<<15&4294967295|I>>>17),I=v+(C^(S|~p))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+S&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.v=function(E,p){p===void 0&&(p=E.length);const v=p-this.blockSize,w=this.C;let S=this.h,C=0;for(;C<p;){if(S==0)for(;C<=v;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<p;)if(w[S++]=E.charCodeAt(C++),S==this.blockSize){s(this,w),S=0;break}}else for(;C<p;)if(w[S++]=E[C++],S==this.blockSize){s(this,w),S=0;break}}this.h=S,this.o+=p},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;p=this.o*8;for(var v=E.length-8;v<E.length;++v)E[v]=p&255,p/=256;for(this.v(E),E=Array(16),p=0,v=0;v<4;++v)for(let w=0;w<32;w+=8)E[p++]=this.g[v]>>>w&255;return E};function i(E,p){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=p(E)}function o(E,p){this.h=p;const v=[];let w=!0;for(let S=E.length-1;S>=0;S--){const C=E[S]|0;w&&C==p||(v[S]=C,w=!1)}this.g=v}var l={};function u(E){return-128<=E&&E<128?i(E,function(p){return new o([p|0],p<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return O(h(-E));const p=[];let v=1;for(let w=0;E>=v;w++)p[w]=E/v|0,v*=4294967296;return new o(p,0)}function f(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return O(f(E.substring(1),p));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(p,8));let w=m;for(let C=0;C<E.length;C+=8){var S=Math.min(8,E.length-C);const I=parseInt(E.substring(C,C+S),p);S<8?(S=h(Math.pow(p,S)),w=w.j(S).add(h(I))):(w=w.j(v),w=w.add(h(I)))}return w}var m=u(0),_=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();let E=0,p=1;for(let v=0;v<this.g.length;v++){const w=this.i(v);E+=(w>=0?w:4294967296+w)*p,p*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(N(this))return"-"+O(this).toString(E);const p=h(Math.pow(E,6));var v=this;let w="";for(;;){const S=b(v,p).g;v=x(v,S.j(p));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(E);if(v=S,P(v))return C+w;for(;C.length<6;)C="0"+C;w=C+w}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(let p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=x(this,E),N(E)?-1:P(E)?0:1};function O(E){const p=E.g.length,v=[];for(let w=0;w<p;w++)v[w]=~E.g[w];return new o(v,~E.h).add(_)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){const p=Math.max(this.g.length,E.g.length),v=[];let w=0;for(let S=0;S<=p;S++){let C=w+(this.i(S)&65535)+(E.i(S)&65535),I=(C>>>16)+(this.i(S)>>>16)+(E.i(S)>>>16);w=I>>>16,C&=65535,I&=65535,v[S]=I<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function x(E,p){return E.add(O(p))}t.j=function(E){if(P(this)||P(E))return m;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(this.l(A)<0&&E.l(A)<0)return h(this.m()*E.m());const p=this.g.length+E.g.length,v=[];for(var w=0;w<2*p;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(let S=0;S<E.g.length;S++){const C=this.i(w)>>>16,I=this.i(w)&65535,X=E.i(S)>>>16,fe=E.i(S)&65535;v[2*w+2*S]+=I*fe,T(v,2*w+2*S),v[2*w+2*S+1]+=C*fe,T(v,2*w+2*S+1),v[2*w+2*S+1]+=I*X,T(v,2*w+2*S+1),v[2*w+2*S+2]+=C*X,T(v,2*w+2*S+2)}for(E=0;E<p;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=p;E<2*p;E++)v[E]=0;return new o(v,0)};function T(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function k(E,p){this.g=E,this.h=p}function b(E,p){if(P(p))throw Error("division by zero");if(P(E))return new k(m,m);if(N(E))return p=b(O(E),p),new k(O(p.g),O(p.h));if(N(p))return p=b(E,O(p)),new k(O(p.g),p.h);if(E.g.length>30){if(N(E)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var v=_,w=p;w.l(E)<=0;)v=M(v),w=M(w);var S=U(v,1),C=U(w,1);for(w=U(w,2),v=U(v,2);!P(w);){var I=C.add(w);I.l(E)<=0&&(S=S.add(v),C=I),w=U(w,1),v=U(v,1)}return p=x(E,S.j(p)),new k(S,p)}for(S=m;E.l(p)>=0;){for(v=Math.max(1,Math.floor(E.m()/p.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),C=h(v),I=C.j(p);N(I)||I.l(E)>0;)v-=w,C=h(v),I=C.j(p);P(C)&&(C=_),S=S.add(C),E=x(E,I)}return new k(S,E)}t.B=function(E){return b(this,E).h},t.and=function(E){const p=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<p;w++)v[w]=this.i(w)&E.i(w);return new o(v,this.h&E.h)},t.or=function(E){const p=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<p;w++)v[w]=this.i(w)|E.i(w);return new o(v,this.h|E.h)},t.xor=function(E){const p=Math.max(this.g.length,E.g.length),v=[];for(let w=0;w<p;w++)v[w]=this.i(w)^E.i(w);return new o(v,this.h^E.h)};function M(E){const p=E.g.length+1,v=[];for(let w=0;w<p;w++)v[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(v,E.h)}function U(E,p){const v=p>>5;p%=32;const w=E.g.length-v,S=[];for(let C=0;C<w;C++)S[C]=p>0?E.i(C+v)>>>p|E.i(C+v+1)<<32-p:E.i(C+v);return new o(S,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,gw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,hs=o}).apply(typeof ey<"u"?ey:typeof self<"u"?self:typeof window<"u"?window:{});var ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yw,Do,_w,Fl,wd,vw,ww,Ew;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ml=="object"&&ml];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in d))break e;d=d[R]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],y;for(y in c)Object.prototype.hasOwnProperty.call(c,y)&&d.push([y,c[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,R,D){for(var q=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)q[ge-2]=arguments[ge];return c.prototype[R].apply(y,q)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function P(a,c){for(let y=1;y<arguments.length;y++){const R=arguments[y];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const D=R.length||0;a.length=d+D;for(let q=0;q<D;q++)a[d+q]=R[q]}else a.push(R)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(a){o.setTimeout(()=>{throw a},0)}function x(){var a=E;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,d){const y=k.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var k=new N(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,E=new T,p=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(v)}};function v(){for(var a;a=x();){try{a.h.call(a.g)}catch(d){O(d)}var c=k;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}U=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function X(a,c){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(X,S),X.prototype.init=function(a,c){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&X.Z.h.call(this)},X.prototype.h=function(){X.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fe="closure_listenable_"+(Math.random()*1e6|0),nt=0;function Ce(a,c,d,y,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=R,this.key=++nt,this.da=this.fa=!1}function H(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function J(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function B(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function pe(a){const c={};for(const d in a)c[d]=a[d];return c}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ve(a,c){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)a[d]=y[d];for(let D=0;D<ae.length;D++)d=ae[D],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function Ue(a){this.src=a,this.g={},this.h=0}Ue.prototype.add=function(a,c,d,y,R){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const q=pt(a,c,y,R);return q>-1?(c=a[q],d||(c.fa=!1)):(c=new Ce(c,this.src,D,!!y,R),c.fa=d,a.push(c)),c};function Nt(a,c){const d=c.type;if(d in a.g){var y=a.g[d],R=Array.prototype.indexOf.call(y,c,void 0),D;(D=R>=0)&&Array.prototype.splice.call(y,R,1),D&&(H(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function pt(a,c,d,y){for(let R=0;R<a.length;++R){const D=a[R];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==y)return R}return-1}var En="closure_lm_"+(Math.random()*1e6|0),hn={};function dn(a,c,d,y,R){if(Array.isArray(c)){for(let D=0;D<c.length;D++)dn(a,c[D],d,y,R);return null}return d=z(d),a&&a[fe]?a.J(c,d,l(y)?!!y.capture:!1,R):Qe(a,c,d,!1,y,R)}function Qe(a,c,d,y,R,D){if(!c)throw Error("Invalid event type");const q=l(R)?!!R.capture:!!R;let ge=ao(a);if(ge||(a[En]=ge=new Ue(a)),d=ge.add(c,d,y,q,D),d.proxy)return d;if(y=fn(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)C||(R=q),R===void 0&&(R=!1),a.addEventListener(c.toString(),y,R);else if(a.attachEvent)a.attachEvent(li(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function fn(){function a(d){return c.call(a.src,a.listener,d)}const c=_c;return a}function tn(a,c,d,y,R){if(Array.isArray(c))for(var D=0;D<c.length;D++)tn(a,c[D],d,y,R);else y=l(y)?!!y.capture:!!y,d=z(d),a&&a[fe]?(a=a.i,D=String(c).toString(),D in a.g&&(c=a.g[D],d=pt(c,d,y,R),d>-1&&(H(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[D],a.h--)))):a&&(a=ao(a))&&(c=a.g[c.toString()],a=-1,c&&(a=pt(c,d,y,R)),(d=a>-1?c[a]:null)&&ai(d))}function ai(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[fe])Nt(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(li(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=ao(c))?(Nt(d,a),d.h==0&&(d.src=null,c[En]=null)):H(a)}}}function li(a){return a in hn?hn[a]:hn[a]="on"+a}function _c(a,c){if(a.da)a=!0;else{c=new X(c,this);const d=a.listener,y=a.ha||a.src;a.fa&&ai(a),a=d.call(y,c)}return a}function ao(a){return a=a[En],a instanceof Ue?a:null}var V="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[V]||(a[V]=function(c){return a.handleEvent(c)}),a[V])}function $(){w.call(this),this.i=new Ue(this),this.M=this,this.G=null}m($,w),$.prototype[fe]=!0,$.prototype.removeEventListener=function(a,c,d,y){tn(this,a,c,d,y)};function W(a,c){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new S(c,a);else if(c instanceof S)c.target=c.target||a;else{var R=c;c=new S(y,a),Ve(c,R)}R=!0;let D,q;if(d)for(q=d.length-1;q>=0;q--)D=c.g=d[q],R=Z(D,y,!0,c)&&R;if(D=c.g=a,R=Z(D,y,!0,c)&&R,R=Z(D,y,!1,c)&&R,d)for(q=0;q<d.length;q++)D=c.g=d[q],R=Z(D,y,!1,c)&&R}$.prototype.N=function(){if($.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let y=0;y<d.length;y++)H(d[y]);delete a.g[c],a.h--}}this.G=null},$.prototype.J=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},$.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function Z(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let D=0;D<c.length;++D){const q=c[D];if(q&&!q.da&&q.capture==d){const ge=q.listener,Et=q.ha||q.src;q.fa&&Nt(a.i,q),R=ge.call(Et,y)!==!1&&R}}return R&&!y.defaultPrevented}function ie(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function te(a){a.g=ie(()=>{a.g=null,a.i&&(a.i=!1,te(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ce extends w{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:te(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(a){w.call(this),this.h=a,this.g={}}m(Ie,w);var rt=[];function wt(a){J(a.g,function(c,d){this.g.hasOwnProperty(d)&&ai(c)},a),a.g={}}Ie.prototype.N=function(){Ie.Z.N.call(this),wt(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=o.JSON.stringify,lt=o.JSON.parse,ye=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ne(){}function st(){}var nn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function le(){S.call(this,"d")}m(le,S);function be(){S.call(this,"c")}m(be,S);var Q={},je=null;function re(){return je=je||new $}Q.Ia="serverreachability";function ut(a){S.call(this,Q.Ia,a)}m(ut,S);function _e(a){const c=re();W(c,new ut(c))}Q.STAT_EVENT="statevent";function Pe(a,c){S.call(this,Q.STAT_EVENT,a),this.stat=c}m(Pe,S);function me(a){const c=re();W(c,new Pe(c,a))}Q.Ja="timingevent";function Re(a,c){S.call(this,Q.Ja,a),this.size=c}m(Re,S);function Ae(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Se(){this.g=!0}Se.prototype.ua=function(){this.g=!1};function ct(a,c,d,y,R,D){a.info(function(){if(a.g)if(D){var q="",ge=D.split("&");for(let Fe=0;Fe<ge.length;Fe++){var Et=ge[Fe].split("=");if(Et.length>1){const kt=Et[0];Et=Et[1];const Gn=kt.split("_");q=Gn.length>=2&&Gn[1]=="type"?q+(kt+"="+Et+"&"):q+(kt+"=redacted&")}}}else q=null;else q=D;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+c+`
`+d+`
`+q})}function Me(a,c,d,y,R,D,q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+c+`
`+d+`
`+D+" "+q})}function De(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+fr(a,d)+(y?" "+y:"")})}function Qt(a,c){a.info(function(){return"TIMEOUT: "+c})}Se.prototype.info=function(){};function fr(a,c){if(!a.g)return c;if(!c)return null;try{const D=JSON.parse(c);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var R=y[0];if(R!="noop"&&R!="stop"&&R!="close")for(let q=1;q<y.length;q++)y[q]=""}}}}return Xe(D)}catch{return c}}var it={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Vr;function At(){}m(At,Ne),At.prototype.g=function(){return new XMLHttpRequest},Vr=new At;function mt(a){return encodeURIComponent(String(a))}function c1(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Mr(a,c,d,y){this.j=a,this.i=c,this.l=d,this.S=y||1,this.V=new Ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Cp}function Cp(){this.i=null,this.g="",this.h=!1}var Rp={},vc={};function wc(a,c,d){a.M=1,a.A=za(Wn(c)),a.u=d,a.R=!0,Pp(a,null)}function Pp(a,c){a.F=Date.now(),$a(a),a.B=Wn(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Bp(d.i,"t",y),a.C=0,d=a.j.L,a.h=new Cp,a.g=am(a.j,d?c:null,!a.u),a.P>0&&(a.O=new ce(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,y=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(rt[0]=R.toString()),R=rt);for(let D=0;D<R.length;D++){const q=dn(d,R[D],y||c.handleEvent,!1,c.h||c);if(!q)break;c.g[q.key]=q}c=a.J?pe(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),_e(),ct(a.i,a.v,a.B,a.l,a.S,a.u)}Mr.prototype.ba=function(a){a=a.target;const c=this.O;c&&Ur(a)==3?c.j():this.Y(a)},Mr.prototype.Y=function(a){try{if(a==this.g)e:{const ge=Ur(this.g),Et=this.g.ya(),Fe=this.g.ca();if(!(ge<3)&&(ge!=3||this.g&&(this.h.h||this.g.la()||Jp(this.g)))){this.K||ge!=4||Et==7||(Et==8||Fe<=0?_e(3):_e(2)),Ec(this);var c=this.g.ca();this.X=c;var d=h1(this);if(this.o=c==200,Me(this.i,this.v,this.B,this.l,this.S,ge,c),this.o){if(this.U&&!this.L){t:{if(this.g){var y,R=this.g;if((y=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var D=y;break t}}D=null}if(a=D)De(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tc(this,a);else{this.o=!1,this.m=3,me(12),ks(this),lo(this);break e}}if(this.R){a=!0;let kt;for(;!this.K&&this.C<d.length;)if(kt=d1(this,d),kt==vc){ge==4&&(this.m=4,me(14),a=!1),De(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Rp){this.m=4,me(15),De(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else De(this.i,this.l,kt,null),Tc(this,kt);if(Np(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||d.length!=0||this.h.h||(this.m=1,me(16),a=!1),this.o=this.o&&a,!a)De(this.i,this.l,d,"[Invalid Chunked Response]"),ks(this),lo(this);else if(d.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Pc(q),q.P=!0,me(11))}}else De(this.i,this.l,d,null),Tc(this,d);ge==4&&ks(this),this.o&&!this.K&&(ge==4?rm(this.j,this):(this.o=!1,$a(this)))}else A1(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,me(12)):(this.m=0,me(13)),ks(this),lo(this)}}}catch{}finally{}};function h1(a){if(!Np(a))return a.g.la();const c=Jp(a.g);if(c==="")return"";let d="";const y=c.length,R=Ur(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ks(a),lo(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<y;D++)a.h.h=!0,d+=a.h.i.decode(c[D],{stream:!(R&&D==y-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Np(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function d1(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?vc:(d=Number(c.substring(d,y)),isNaN(d)?Rp:(y+=1,y+d>c.length?vc:(c=c.slice(y,y+d),a.C=y+d,c)))}Mr.prototype.cancel=function(){this.K=!0,ks(this)};function $a(a){a.T=Date.now()+a.H,bp(a,a.H)}function bp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ae(h(a.aa,a),c)}function Ec(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Qt(this.i,this.B),this.M!=2&&(_e(),me(17)),ks(this),this.m=2,lo(this)):bp(this,this.T-a)};function lo(a){a.j.I==0||a.K||rm(a.j,a)}function ks(a){Ec(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,wt(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Tc(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Ic(d.h,a))){if(!a.L&&Ic(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ga(d),qa(d);else break e;Rc(d),me(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ae(h(d.Va,d),6e3));Vp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Rs(d,11)}else if((a.L||d.g==a)&&Ga(d),!I(c))for(R=d.Ba.g.parse(c),c=0;c<R.length;c++){let Fe=R[c];const kt=Fe[0];if(!(kt<=d.K))if(d.K=kt,Fe=Fe[1],d.I==2)if(Fe[0]=="c"){d.M=Fe[1],d.ba=Fe[2];const Gn=Fe[3];Gn!=null&&(d.ka=Gn,d.j.info("VER="+d.ka));const Ps=Fe[4];Ps!=null&&(d.za=Ps,d.j.info("SVER="+d.za));const Fr=Fe[5];Fr!=null&&typeof Fr=="number"&&Fr>0&&(y=1.5*Fr,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const $r=a.g;if($r){const Qa=$r.g?$r.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var D=y.h;D.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Sc(D,D.h),D.h=null))}if(y.G){const Nc=$r.g?$r.g.getResponseHeader("X-HTTP-Session-Id"):null;Nc&&(y.wa=Nc,Be(y.J,y.G,Nc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var q=a;if(y.na=om(y,y.L?y.ba:null,y.W),q.L){Mp(y.h,q);var ge=q,Et=y.O;Et&&(ge.H=Et),ge.D&&(Ec(ge),$a(ge)),y.g=q}else tm(y);d.i.length>0&&Wa(d)}else Fe[0]!="stop"&&Fe[0]!="close"||Rs(d,7);else d.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Rs(d,7):Cc(d):Fe[0]!="noop"&&d.l&&d.l.qa(Fe),d.A=0)}}_e(4)}catch{}}var f1=class{constructor(a,c){this.g=a,this.map=c}};function Dp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Op(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vp(a){return a.h?1:a.g?a.g.size:0}function Ic(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Sc(a,c){a.g?a.g.add(c):a.h=c}function Mp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Dp.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function p1(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let R,D=null;y>=0?(R=a[d].substring(0,y),D=a[d].substring(y+1)):R=a[d],c(R,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Lr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Lr?(this.l=a.l,uo(this,a.j),this.o=a.o,this.g=a.g,co(this,a.u),this.h=a.h,xc(this,Hp(a.i)),this.m=a.m):a&&(c=String(a).match(jp))?(this.l=!1,uo(this,c[1]||"",!0),this.o=ho(c[2]||""),this.g=ho(c[3]||"",!0),co(this,c[4]),this.h=ho(c[5]||"",!0),xc(this,c[6]||"",!0),this.m=ho(c[7]||"")):(this.l=!1,this.i=new po(null,this.l))}Lr.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(fo(c,Up,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(fo(c,Up,!0),"@"),a.push(mt(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(fo(d,d.charAt(0)=="/"?y1:g1,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",fo(d,v1)),a.join("")},Lr.prototype.resolve=function(a){const c=Wn(this);let d=!!a.j;d?uo(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var y=a.h;if(d)co(c,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var R=c.h.lastIndexOf("/");R!=-1&&(y=c.h.slice(0,R+1)+y)}if(R=y,R==".."||R==".")y="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){y=R.lastIndexOf("/",0)==0,R=R.split("/");const D=[];for(let q=0;q<R.length;){const ge=R[q++];ge=="."?y&&q==R.length&&D.push(""):ge==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),y&&q==R.length&&D.push("")):(D.push(ge),y=!0)}y=D.join("/")}else y=R}return d?c.h=y:d=a.i.toString()!=="",d?xc(c,Hp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Wn(a){return new Lr(a)}function uo(a,c,d){a.j=d?ho(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function co(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function xc(a,c,d){c instanceof po?(a.i=c,w1(a.i,a.l)):(d||(c=fo(c,_1)),a.i=new po(c,a.l))}function Be(a,c,d){a.i.set(c,d)}function za(a){return Be(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ho(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fo(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,m1),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function m1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Up=/[#\/\?@]/g,g1=/[#\?:]/g,y1=/[#\?]/g,_1=/[#\?@]/g,v1=/#/g;function po(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Cs(a){a.g||(a.g=new Map,a.h=0,a.i&&p1(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=po.prototype,t.add=function(a,c){Cs(this),this.i=null,a=ui(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Fp(a,c){Cs(a),c=ui(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function $p(a,c){return Cs(a),c=ui(a,c),a.g.has(c)}t.forEach=function(a,c){Cs(this),this.g.forEach(function(d,y){d.forEach(function(R){a.call(c,R,y,this)},this)},this)};function zp(a,c){Cs(a);let d=[];if(typeof c=="string")$p(a,c)&&(d=d.concat(a.g.get(ui(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Cs(this),this.i=null,a=ui(this,a),$p(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=zp(this,a),a.length>0?String(a[0]):c):c};function Bp(a,c,d){Fp(a,c),d.length>0&&(a.i=null,a.g.set(ui(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let y=0;y<c.length;y++){var d=c[y];const R=mt(d);d=zp(this,d);for(let D=0;D<d.length;D++){let q=R;d[D]!==""&&(q+="="+mt(d[D])),a.push(q)}}return this.i=a.join("&")};function Hp(a){const c=new po;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ui(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function w1(a,c){c&&!a.j&&(Cs(a),a.i=null,a.g.forEach(function(d,y){const R=y.toLowerCase();y!=R&&(Fp(this,y),Bp(this,R,d))},a)),a.j=c}function E1(a,c){const d=new Se;if(o.Image){const y=new Image;y.onload=f(jr,d,"TestLoadImage: loaded",!0,c,y),y.onerror=f(jr,d,"TestLoadImage: error",!1,c,y),y.onabort=f(jr,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=f(jr,d,"TestLoadImage: timeout",!1,c,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function T1(a,c){const d=new Se,y=new AbortController,R=setTimeout(()=>{y.abort(),jr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(R),D.ok?jr(d,"TestPingServer: ok",!0,c):jr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),jr(d,"TestPingServer: error",!1,c)})}function jr(a,c,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function I1(){this.g=new ye}function Ac(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Ac,Ne),Ac.prototype.g=function(){return new Ba(this.i,this.h)};function Ba(a,c){$.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ba,$),t=Ba.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,go(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function qp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?mo(this):go(this),this.readyState==3&&qp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,mo(this))},t.Na=function(a){this.g&&(this.response=a,mo(this))},t.ga=function(){this.g&&mo(this)};function mo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,go(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function go(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wp(a){let c="";return J(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function kc(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Wp(d),typeof a=="string"?d!=null&&mt(d):Be(a,c,d))}function ot(a){$.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ot,$);var S1=/^https?$/i,x1=["POST","PUT"];t=ot.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Vr.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Gp(this,D);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())d.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(x1,c,void 0)>=0)||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,q]of d)this.g.setRequestHeader(D,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Gp(this,D)}};function Gp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Kp(a),Ha(a)}function Kp(a){a.A||(a.A=!0,W(a,"complete"),W(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,W(this,"complete"),W(this,"abort"),Ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ha(this,!0)),ot.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Qp(this):this.Xa())},t.Xa=function(){Qp(this)};function Qp(a){if(a.h&&typeof i<"u"){if(a.v&&Ur(a)==4)setTimeout(a.Ca.bind(a),0);else if(W(a,"readystatechange"),Ur(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=D===0){let q=String(a.D).match(jp)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),y=!S1.test(q?q.toLowerCase():"")}d=y}if(d)W(a,"complete"),W(a,"success");else{a.o=6;try{var R=Ur(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Kp(a)}}finally{Ha(a)}}}}function Ha(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||W(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ur(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),lt(c)}};function Jp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function A1(a){const c={};a=(a.g&&Ur(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var d=c1(a[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[R]||[];c[R]=D,D.push(d)}B(c,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yo(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Yp(a){this.za=0,this.i=[],this.j=new Se,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yo("baseRetryDelayMs",5e3,a),this.Za=yo("retryDelaySeedMs",1e4,a),this.Ta=yo("forwardChannelMaxRetries",2,a),this.va=yo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Dp(a&&a.concurrentRequestLimit),this.Ba=new I1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Yp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,y){me(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=om(this,null,this.W),Wa(this)};function Cc(a){if(Xp(a),a.I==3){var c=a.V++,d=Wn(a.J);if(Be(d,"SID",a.M),Be(d,"RID",c),Be(d,"TYPE","terminate"),_o(a,d),c=new Mr(a,a.j,c),c.M=2,c.A=za(Wn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=am(c.j,null),c.g.ea(c.A)),c.F=Date.now(),$a(c)}im(a)}function qa(a){a.g&&(Pc(a),a.g.cancel(),a.g=null)}function Xp(a){qa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ga(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Wa(a){if(!Op(a.h)&&!a.m){a.m=!0;var c=a.Ea;M||p(),U||(M(),U=!0),E.add(c,a),a.D=0}}function k1(a,c){return Vp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ae(h(a.Ea,a,c),sm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Mr(this,this.j,a);let D=this.o;if(this.U&&(D?(D=pe(D),Ve(D,this.U)):D=this.U),this.u!==null||this.R||(R.J=D,D=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=em(this,R,c),d=Wn(this.J),Be(d,"RID",a),Be(d,"CVER",22),this.G&&Be(d,"X-HTTP-Session-Id",this.G),_o(this,d),D&&(this.R?c="headers="+mt(Wp(D))+"&"+c:this.u&&kc(d,this.u,D)),Sc(this.h,R),this.Ra&&Be(d,"TYPE","init"),this.S?(Be(d,"$req",c),Be(d,"SID","null"),R.U=!0,wc(R,d,null)):wc(R,d,c),this.I=2}}else this.I==3&&(a?Zp(this,a):this.i.length==0||Op(this.h)||Zp(this))};function Zp(a,c){var d;c?d=c.l:d=a.V++;const y=Wn(a.J);Be(y,"SID",a.M),Be(y,"RID",d),Be(y,"AID",a.K),_o(a,y),a.u&&a.o&&kc(y,a.u,a.o),d=new Mr(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=em(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Sc(a.h,d),wc(d,y,c)}function _o(a,c){a.H&&J(a.H,function(d,y){Be(c,y,d)}),a.l&&J({},function(d,y){Be(c,y,d)})}function em(a,c,d){d=Math.min(a.i.length,d);const y=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let ge=-1;for(;;){const Et=["count="+d];ge==-1?d>0?(ge=R[0].g,Et.push("ofs="+ge)):ge=0:Et.push("ofs="+ge);let Fe=!0;for(let kt=0;kt<d;kt++){var D=R[kt].g;const Gn=R[kt].map;if(D-=ge,D<0)ge=Math.max(0,R[kt].g-100),Fe=!1;else try{D="req"+D+"_"||"";try{var q=Gn instanceof Map?Gn:Object.entries(Gn);for(const[Ps,Fr]of q){let $r=Fr;l(Fr)&&($r=Xe(Fr)),Et.push(D+Ps+"="+encodeURIComponent($r))}}catch(Ps){throw Et.push(D+"type="+encodeURIComponent("_badmap")),Ps}}catch{y&&y(Gn)}}if(Fe){q=Et.join("&");break e}}q=void 0}return a=a.i.splice(0,d),c.G=a,q}function tm(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;M||p(),U||(M(),U=!0),E.add(c,a),a.A=0}}function Rc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ae(h(a.Da,a),sm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,nm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ae(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,me(10),qa(this),nm(this))};function Pc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function nm(a){a.g=new Mr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Wn(a.na);Be(c,"RID","rpc"),Be(c,"SID",a.M),Be(c,"AID",a.K),Be(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&Be(c,"TO",a.ia),Be(c,"TYPE","xmlhttp"),_o(a,c),a.u&&a.o&&kc(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=za(Wn(c)),d.u=null,d.R=!0,Pp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,qa(this),Rc(this),me(19))};function Ga(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function rm(a,c){var d=null;if(a.g==c){Ga(a),Pc(a),a.g=null;var y=2}else if(Ic(a.h,c))d=c.G,Mp(a.h,c),y=1;else return;if(a.I!=0){if(c.o)if(y==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var R=a.D;y=re(),W(y,new Re(y,d)),Wa(a)}else tm(a);else if(R=c.m,R==3||R==0&&c.X>0||!(y==1&&k1(a,c)||y==2&&Rc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Rs(a,5);break;case 4:Rs(a,10);break;case 3:Rs(a,6);break;default:Rs(a,2)}}}function sm(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Rs(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),y=a.Ua;const R=!y;y=new Lr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||uo(y,"https"),za(y),R?E1(y.toString(),d):T1(y.toString(),d)}else me(2);a.I=0,a.l&&a.l.pa(c),im(a),Xp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),me(2)):(this.j.info("Failed to ping google.com"),me(1))};function im(a){if(a.I=0,a.ja=[],a.l){const c=Lp(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function om(a,c,d){var y=d instanceof Lr?Wn(d):new Lr(d);if(y.g!="")c&&(y.g=c+"."+y.g),co(y,y.u);else{var R=o.location;y=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const D=new Lr(null);y&&uo(D,y),c&&(D.g=c),R&&co(D,R),d&&(D.h=d),y=D}return d=a.G,c=a.wa,d&&c&&Be(y,d,c),Be(y,"VER",a.ka),_o(a,y),y}function am(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new ot(new Ac({ab:d})):new ot(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lm(){}t=lm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ka(){}Ka.prototype.g=function(a,c){return new pn(a,c)};function pn(a,c){$.call(this),this.g=new Yp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!I(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!I(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ci(this)}m(pn,$),pn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Cc(this.g)},pn.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Xe(a),a=d);c.i.push(new f1(c.Ya++,a)),c.I==3&&Wa(c)},pn.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,pn.Z.N.call(this)};function um(a){le.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(um,le);function cm(){be.call(this),this.status=1}m(cm,be);function ci(a){this.g=a}m(ci,lm),ci.prototype.ra=function(){W(this.g,"a")},ci.prototype.qa=function(a){W(this.g,new um(a))},ci.prototype.pa=function(a){W(this.g,new cm)},ci.prototype.oa=function(){W(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,Ew=function(){return new Ka},ww=function(){return re()},vw=Q,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},it.NO_ERROR=0,it.TIMEOUT=8,it.HTTP_ERROR=6,Fl=it,bt.COMPLETE="complete",_w=bt,st.EventType=nn,nn.OPEN="a",nn.CLOSE="b",nn.ERROR="c",nn.MESSAGE="d",$.prototype.listen=$.prototype.J,Do=st,ot.prototype.listenOnce=ot.prototype.K,ot.prototype.getLastError=ot.prototype.Ha,ot.prototype.getLastErrorCode=ot.prototype.ya,ot.prototype.getStatus=ot.prototype.ca,ot.prototype.getResponseJson=ot.prototype.La,ot.prototype.getResponseText=ot.prototype.la,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Fa,yw=ot}).apply(typeof ml<"u"?ml:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let ro="12.13.0";function dC(t){ro=t}/**
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
 */const Ys=new Lf("@firebase/firestore");function di(){return Ys.logLevel}function G(t,...e){if(Ys.logLevel<=Te.DEBUG){const n=e.map(Jf);Ys.debug(`Firestore (${ro}): ${t}`,...n)}}function br(t,...e){if(Ys.logLevel<=Te.ERROR){const n=e.map(Jf);Ys.error(`Firestore (${ro}): ${t}`,...n)}}function Xs(t,...e){if(Ys.logLevel<=Te.WARN){const n=e.map(Jf);Ys.warn(`Firestore (${ro}): ${t}`,...n)}}function Jf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Tw(t,r,n)}function Tw(t,e,n){let r=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw br(r),new Error(r)}function Oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Tw(e,s,r)}function he(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends hr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ds{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Iw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ht.UNAUTHENTICATED))}shutdown(){}}class pC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mC{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ds;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ds,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ds)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string",31837,{l:r}),new Iw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class gC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class yC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new gC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ty{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _C{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Oe(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ty(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ty(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Yf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=vC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Ed(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return dh(s)===dh(i)?ve(s,i):dh(s)?1:-1}return ve(t.length,e.length)}const wC=55296,EC=57343;function dh(t){const e=t.charCodeAt(0);return e>=wC&&e<=EC}function Ki(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const ny="__name__";class Jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Jn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=Jn.isNumericId(e),s=Jn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Jn.extractNumericId(e).compare(Jn.extractNumericId(n)):Ed(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hs.fromString(e.substring(4,e.length-2))}}class We extends Jn{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const TC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends Jn{construct(e,n,r){return new Mt(e,n,r)}static isValidIdentifier(e){return TC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ny}static keyField(){return new Mt([ny])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(n)}static emptyPath(){return new Mt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(We.fromString(e))}static fromName(e){return new ne(We.fromString(e).popFirst(5))}static empty(){return new ne(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new We(e.slice()))}}/**
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
 */function Sw(t,e,n){if(!n)throw new Y(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IC(t,e,n,r){if(e===!0&&r===!0)throw new Y(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ry(t){if(!ne.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sy(t){if(ne.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Xf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xf(t);throw new Y(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function _t(t,e){const n={typeString:t};return e&&(n.value=e),n}function Oa(t,e){if(!xw(t))throw new Y(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const iy=-62135596800,oy=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*oy);return new Ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<iy)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/oy}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Oa(e,Ge._jsonSchema))return new Ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-iy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:_t("string",Ge._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ge(0,0))}static max(){return new ue(new Ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ga=-1;function SC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new ys(s,ne.empty(),e)}function xC(t){return new ys(t.readTime,t.key,ga)}class ys{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ys(ue.min(),ne.empty(),ga)}static max(){return new ys(ue.max(),ne.empty(),ga)}}function AC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const kC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function so(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==kC)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function RC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function io(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sc.ce=-1;/**
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
 */const Zf=-1;function ic(t){return t==null}function Au(t){return t===0&&1/t==-1/0}function PC(t){return typeof t=="number"&&Number.isInteger(t)&&!Au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Aw="";function NC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ay(e)),e=bC(t.get(n),e);return ay(e)}function bC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Aw:n+="";break;default:n+=i}}return n}function ay(t){return t+Aw+""}/**
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
 */function ly(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||Vt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Vt.RED,this.left=s??Vt.EMPTY,this.right=i??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Vt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Vt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Vt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uy(this.data.getIterator())}getIteratorFrom(e){return new uy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new xt(this.comparator);return n.data=e,n}}class uy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new Un([])}unionWith(e){let n=new xt(Mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Cw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cw("Invalid base64 string: "+i):i}}(e);return new Ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const DC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(t){if(Oe(!!t,39018),typeof t=="string"){let e=0;const n=DC.exec(t);if(Oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vs(t){return typeof t=="string"?Ut.fromBase64String(t):Ut.fromUint8Array(t)}/**
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
 */const Rw="server_timestamp",Pw="__type__",Nw="__previous_value__",bw="__local_write_time__";function ep(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Pw])==null?void 0:r.stringValue)===Rw}function oc(t){const e=t.mapValue.fields[Nw];return ep(e)?oc(e):e}function ya(t){const e=_s(t.mapValue.fields[bw].timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class OC{constructor(e,n,r,s,i,o,l,u,h,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const ku="(default)";class _a{constructor(e,n){this.projectId=e,this.database=n||ku}static empty(){return new _a("","")}get isDefaultDatabase(){return this.database===ku}isEqual(e){return e instanceof _a&&e.projectId===this.projectId&&e.database===this.database}}function VC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Y(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _a(t.options.projectId,e)}/**
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
 */const Dw="__type__",MC="__max__",yl={mapValue:{}},Ow="__vector__",Cu="value";function ws(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ep(t)?4:jC(t)?9007199254740991:LC(t)?10:11:se(28295,{value:t})}function lr(t,e){if(t===e)return!0;const n=ws(t);if(n!==ws(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ya(t).isEqual(ya(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_s(s.timestampValue),l=_s(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vs(s.bytesValue).isEqual(vs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return dt(s.geoPointValue.latitude)===dt(i.geoPointValue.latitude)&&dt(s.geoPointValue.longitude)===dt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return dt(s.integerValue)===dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=dt(s.doubleValue),l=dt(i.doubleValue);return o===l?Au(o)===Au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ly(o)!==ly(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!lr(o[u],l[u])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function va(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function Qi(t,e){if(t===e)return 0;const n=ws(t),r=ws(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=dt(i.integerValue||i.doubleValue),u=dt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return cy(t.timestampValue,e.timestampValue);case 4:return cy(ya(t),ya(e));case 5:return Ed(t.stringValue,e.stringValue);case 6:return function(i,o){const l=vs(i),u=vs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ve(l[h],u[h]);if(f!==0)return f}return ve(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(dt(i.latitude),dt(o.latitude));return l!==0?l:ve(dt(i.longitude),dt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var _,A,P,N;const l=i.fields||{},u=o.fields||{},h=(_=l[Cu])==null?void 0:_.arrayValue,f=(A=u[Cu])==null?void 0:A.arrayValue,m=ve(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:hy(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===yl.mapValue&&o===yl.mapValue)return 0;if(i===yl.mapValue)return 1;if(o===yl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=Ed(u[m],f[m]);if(_!==0)return _;const A=Qi(l[u[m]],h[f[m]]);if(A!==0)return A}return ve(u.length,f.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=_s(t),r=_s(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function hy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Qi(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Ji(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_s(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Td(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Td(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function $l(t){switch(ws(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(t);return e?16+$l(e):16;case 5:return 2*t.stringValue.length;case 6:return vs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+$l(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ri(r.fields,(i,o)=>{s+=i.length+$l(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function Id(t){return!!t&&"integerValue"in t}function tp(t){return!!t&&"arrayValue"in t}function dy(t){return!!t&&"nullValue"in t}function fy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zl(t){return!!t&&"mapValue"in t}function LC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Dw])==null?void 0:r.stringValue)===Ow}function Go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Go(t.arrayValue.values[n]);return e}return{...t}}function jC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===MC}/**
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
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Go(n)}setAll(e){let n=Mt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Go(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];zl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ri(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xn(Go(this.value))}}function Vw(t){const e=[];return ri(t.fields,(n,r)=>{const s=new Mt([n]);if(zl(r)){const i=Vw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Un(e)}/**
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
 */class Wt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Wt(e,0,ue.min(),ue.min(),ue.min(),xn.empty(),0)}static newFoundDocument(e,n,r,s){return new Wt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new Wt(e,2,n,ue.min(),ue.min(),xn.empty(),0)}static newUnknownDocument(e,n){return new Wt(e,3,n,ue.min(),ue.min(),xn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ru{constructor(e,n){this.position=e,this.inclusive=n}}function py(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Qi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function my(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function UC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Mw{}class It extends Mw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $C(e,n,r):n==="array-contains"?new HC(e,r):n==="in"?new qC(e,r):n==="not-in"?new WC(e,r):n==="array-contains-any"?new GC(e,r):new It(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zC(e,r):new BC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Qi(n,this.value)):n!==null&&ws(this.value)===ws(n)&&this.matchesComparison(Qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends Mw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ur(e,n)}matches(e){return Lw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lw(t){return t.op==="and"}function jw(t){return FC(t)&&Lw(t)}function FC(t){for(const e of t.filters)if(e instanceof ur)return!1;return!0}function Sd(t){if(t instanceof It)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(jw(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function Uw(t,e){return t instanceof It?function(r,s){return s instanceof It&&r.op===s.op&&r.field.isEqual(s.field)&&lr(r.value,s.value)}(t,e):t instanceof ur?function(r,s){return s instanceof ur&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Uw(o,s.filters[l]),!0):!1}(t,e):void se(19439)}function Fw(t){return t instanceof It?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof ur?function(n){return n.op.toString()+" {"+n.getFilters().map(Fw).join(" ,")+"}"}(t):"Filter"}class $C extends It{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class zC extends It{constructor(e,n){super(e,"in",n),this.keys=$w("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BC extends It{constructor(e,n){super(e,"not-in",n),this.keys=$w("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $w(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class HC extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tp(n)&&va(n.arrayValue,this.value)}}class qC extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&va(this.value.arrayValue,n)}}class WC extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!va(this.value.arrayValue,n)}}class GC extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>va(this.value.arrayValue,r))}}/**
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
 */class KC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function gy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KC(t,e,n,r,s,i,o)}function np(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ji(r)).join(",")),e.Te=n}return e.Te}function rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Uw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!my(t.startAt,e.startAt)&&my(t.endAt,e.endAt)}function xd(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ac{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function QC(t,e,n,r,s,i,o,l){return new ac(t,e,n,r,s,i,o,l)}function lc(t){return new ac(t)}function yy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JC(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function YC(t){return t.collectionGroup!==null}function Ko(t){const e=he(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new xt(Mt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Pu(i,r))}),n.has(Mt.keyField().canonicalString())||e.Ie.push(new Pu(Mt.keyField(),r))}return e.Ie}function rr(t){const e=he(t);return e.Ee||(e.Ee=XC(e,Ko(t))),e.Ee}function XC(t,e){if(t.limitType==="F")return gy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pu(s.field,i)});const n=t.endAt?new Ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ru(t.startAt.position,t.startAt.inclusive):null;return gy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ad(t,e,n){return new ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uc(t,e){return rp(rr(t),rr(e))&&t.limitType===e.limitType}function zw(t){return`${np(rr(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fw(s)).join(", ")}]`),ic(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ji(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ji(s)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ko(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=py(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ko(r),s)||r.endAt&&!function(o,l,u){const h=py(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ko(r),s))}(t,e)}function ZC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bw(t){return(e,n)=>{let r=!1;for(const s of Ko(t)){const i=eR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eR(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Qi(u,h):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
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
 */class si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kw(this.inner)}size(){return this.innerSize}}/**
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
 */const tR=new Ye(ne.comparator);function Dr(){return tR}const Hw=new Ye(ne.comparator);function Oo(...t){let e=Hw;for(const n of t)e=e.insert(n.key,n);return e}function qw(t){let e=Hw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function js(){return Qo()}function Ww(){return Qo()}function Qo(){return new si(t=>t.toString(),(t,e)=>t.isEqual(e))}const nR=new Ye(ne.comparator),rR=new xt(ne.comparator);function we(...t){let e=rR;for(const n of t)e=e.add(n);return e}const sR=new xt(ve);function iR(){return sR}/**
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
 */function sp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function Gw(t){return{integerValue:""+t}}function oR(t,e){return PC(e)?Gw(e):sp(t,e)}/**
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
 */class hc{constructor(){this._=void 0}}function aR(t,e,n){return t instanceof wa?function(s,i){const o={fields:{[Pw]:{stringValue:Rw},[bw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ep(i)&&(i=oc(i)),i&&(o.fields[Nw]=i),{mapValue:o}}(n,e):t instanceof Ea?Qw(t,e):t instanceof Ta?Jw(t,e):function(s,i){const o=Kw(s,i),l=_y(o)+_y(s.Ae);return Id(o)&&Id(s.Ae)?Gw(l):sp(s.serializer,l)}(t,e)}function lR(t,e,n){return t instanceof Ea?Qw(t,e):t instanceof Ta?Jw(t,e):n}function Kw(t,e){return t instanceof Nu?function(r){return Id(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wa extends hc{}class Ea extends hc{constructor(e){super(),this.elements=e}}function Qw(t,e){const n=Yw(e);for(const r of t.elements)n.some(s=>lr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ta extends hc{constructor(e){super(),this.elements=e}}function Jw(t,e){let n=Yw(e);for(const r of t.elements)n=n.filter(s=>!lr(s,r));return{arrayValue:{values:n}}}class Nu extends hc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function _y(t){return dt(t.integerValue||t.doubleValue)}function Yw(t){return tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class uR{constructor(e,n){this.field=e,this.transform=n}}function cR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ea&&s instanceof Ea||r instanceof Ta&&s instanceof Ta?Ki(r.elements,s.elements,lr):r instanceof Nu&&s instanceof Nu?lr(r.Ae,s.Ae):r instanceof wa&&s instanceof wa}(t.transform,e.transform)}class hR{constructor(e,n){this.version=e,this.transformResults=n}}class Bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dc{}function Xw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ip(t.key,Bn.none()):new Va(t.key,t.data,Bn.none());{const n=t.data,r=xn.empty();let s=new xt(Mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ii(t.key,r,new Un(s.toArray()),Bn.none())}}function dR(t,e,n){t instanceof Va?function(s,i,o){const l=s.value.clone(),u=wy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ii?function(s,i,o){if(!Bl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=wy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Zw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Jo(t,e,n,r){return t instanceof Va?function(i,o,l,u){if(!Bl(i.precondition,o))return l;const h=i.value.clone(),f=Ey(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ii?function(i,o,l,u){if(!Bl(i.precondition,o))return l;const h=Ey(i.fieldTransforms,u,o),f=o.data;return f.setAll(Zw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Bl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function fR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Kw(r.transform,s||null);i!=null&&(n===null&&(n=xn.empty()),n.set(r.field,i))}return n||null}function vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ki(r,s,(i,o)=>cR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends dc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ii extends dc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wy(t,e,n){const r=new Map;Oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,lR(o,l,n[s]))}return r}function Ey(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,aR(i,o,e))}return r}class ip extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pR extends dc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ww();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Xw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>vy(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>vy(n,r))}}class op{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return nR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new op(e,n,r,s)}}/**
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
 */class gR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var gt,xe;function _R(t){switch(t){case j.OK:return se(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function eE(t){if(t===void 0)return br("GRPC error has no .code"),j.UNKNOWN;switch(t){case gt.OK:return j.OK;case gt.CANCELLED:return j.CANCELLED;case gt.UNKNOWN:return j.UNKNOWN;case gt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case gt.INTERNAL:return j.INTERNAL;case gt.UNAVAILABLE:return j.UNAVAILABLE;case gt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case gt.NOT_FOUND:return j.NOT_FOUND;case gt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case gt.ABORTED:return j.ABORTED;case gt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case gt.DATA_LOSS:return j.DATA_LOSS;default:return se(39323,{code:t})}}(xe=gt||(gt={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vR(){return new TextEncoder}/**
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
 */const wR=new hs([4294967295,4294967295],0);function Ty(t){const e=vR().encode(t),n=new gw;return n.update(e),new Uint8Array(n.digest())}function Iy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hs([n,r],0),new hs([s,i],0)]}class ap{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vo(`Invalid padding: ${n}`);if(r<0)throw new Vo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=hs.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(hs.fromNumber(r)));return s.compare(wR)===1&&(s=new hs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ty(e),[r,s]=Iy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ap(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ty(e),[r,s]=Iy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,La.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ma(ue.min(),s,new Ye(ve),Dr(),we())}}class La{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new La(r,n,we(),we(),we())}}/**
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
 */class Hl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class tE{constructor(e,n){this.targetId=e,this.Ce=n}}class nE{constructor(e,n,r=Ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Sy{constructor(){this.ve=0,this.Fe=xy(),this.Me=Ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=we(),n=we(),r=we();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new La(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=xy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ER{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dr(),this.Je=_l(),this.He=_l(),this.Ze=new Ye(ve)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(xd(i))if(r===0){const o=new ne(i.path);this.et(n,o,Wt.newNoDocument(o,ue.min()))}else Oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=vs(r).toUint8Array()}catch(u){if(u instanceof Cw)return Xs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ap(o,s,i)}catch(u){return Xs(u instanceof Vo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&xd(l.target)){const u=new ne(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Wt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=we();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ma(e,n,this.Ze,this.je,r);return this.je=Dr(),this.Je=_l(),this.He=_l(),this.Ze=new Ye(ve),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Sy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new xt(ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new xt(ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function _l(){return new Ye(ne.comparator)}function xy(){return new Ye(ne.comparator)}const TR={asc:"ASCENDING",desc:"DESCENDING"},IR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SR={and:"AND",or:"OR"};class xR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||ic(e)?e:{value:e}}function bu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AR(t,e){return bu(t,e.toTimestamp())}function sr(t){return Oe(!!t,49232),ue.fromTimestamp(function(n){const r=_s(n);return new Ge(r.seconds,r.nanos)}(t))}function lp(t,e){return Cd(t,e).canonicalString()}function Cd(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sE(t){const e=We.fromString(t);return Oe(uE(e),10190,{key:e.toString()}),e}function Rd(t,e){return lp(t.databaseId,e.path)}function fh(t,e){const n=sE(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(oE(n))}function iE(t,e){return lp(t.databaseId,e)}function kR(t){const e=sE(t);return e.length===4?We.emptyPath():oE(e)}function Pd(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oE(t){return Oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ay(t,e,n){return{name:Rd(t,e),fields:n.value.mapValue.fields}}function CR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:se(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Oe(f===void 0||typeof f=="string",58123),Ut.fromBase64String(f||"")):(Oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ut.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?j.UNKNOWN:eE(h.code);return new Y(f,h.message||"")}(o);n=new nE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fh(t,r.document.name),i=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):ue.min(),l=new xn({mapValue:{fields:r.document.fields}}),u=Wt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Hl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fh(t,r.document),i=r.readTime?sr(r.readTime):ue.min(),o=Wt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fh(t,r.document),i=r.removedTargetIds||[];n=new Hl([],i,s,null)}else{if(!("filter"in e))return se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yR(s,i),l=r.targetId;n=new tE(l,o)}}return n}function RR(t,e){let n;if(e instanceof Va)n={update:Ay(t,e.key,e.value)};else if(e instanceof ip)n={delete:Rd(t,e.key)};else if(e instanceof ii)n={update:Ay(t,e.key,e.data),updateMask:jR(e.fieldMask)};else{if(!(e instanceof pR))return se(16599,{dt:e.type});n={verify:Rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof wa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Nu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function PR(t,e){return t&&t.length>0?(Oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?sr(s.updateTime):sr(i);return o.isEqual(ue.min())&&(o=sr(i)),new hR(o,s.transformResults||[])}(n,e))):[]}function NR(t,e){return{documents:[iE(t,e.path)]}}function bR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iE(t,s);const i=function(h){if(h.length!==0)return lE(ur.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:pi(_.field),direction:VR(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function DR(t){let e=kR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const _=aE(m);return _ instanceof ur&&jw(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(_=>function(P){return new Pu(mi(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,ic(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(m){const _=!!m.before,A=m.values||[];return new Ru(A,_)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const _=!m.before,A=m.values||[];return new Ru(A,_)}(n.endAt)),QC(e,s,o,i,l,"F",u,h)}function OR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mi(n.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=mi(n.unaryFilter.field);return It.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mi(n.unaryFilter.field);return It.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(n.unaryFilter.field);return It.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return It.create(mi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ur.create(n.compositeFilter.filters.map(r=>aE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function VR(t){return TR[t]}function MR(t){return IR[t]}function LR(t){return SR[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return Mt.fromServerFormat(t.fieldPath)}function lE(t){return t instanceof It?function(n){if(n.op==="=="){if(fy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NAN"}};if(dy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NAN"}};if(dy(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(n.field),op:MR(n.op),value:n.value}}}(t):t instanceof ur?function(n){const r=n.getFilters().map(s=>lE(s));return r.length===1?r[0]:{compositeFilter:{op:LR(n.op),filters:r}}}(t):se(54877,{filter:t})}function jR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function cE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Tr{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=Ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class UR{constructor(e){this.yt=e}}function FR(t){const e=DR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
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
 */class $R{constructor(){this.bn=new zR}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ys.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class zR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new xt(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xt(We.comparator)).toArray()}}/**
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
 */const ky={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hE=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(hE,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class Es{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Es(0)}static ar(){return new Es(-1)}}/**
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
 */const Cy="LruGarbageCollector",BR=1048576;function Ry([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class HR{constructor(e){this.Pr=e,this.buffer=new xt(Ry),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ry(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){G(Cy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){io(n)?G(Cy,"Ignoring IndexedDB error during garbage collection: ",n):await so(n)}await this.Ar(3e5)})}}class WR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(sc.ce);const r=new HR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ky)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ky):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),di()<=Te.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function GR(t,e){return new WR(t,e)}/**
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
 */class KR{constructor(){this.changes=new si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Jo(r.mutation,s,Un.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=js();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Oo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=js();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Dr();const o=Qo(),l=function(){return Qo()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ii)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Jo(f.mutation,h,f.mutation.getFieldMask(),Ge.now())):o.set(h.key,Un.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new QR(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Qo();let s=new Ye((o,l)=>o-l),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Un.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(s.get(l.batchId)||we()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Ww();f.forEach(_=>{if(!i.has(_)){const A=Xw(n.get(_),r.get(_));A!==null&&m.set(_,A),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return JC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(js());let l=ga,u=i;return o.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,we())).next(f=>({batchId:l,changes:qw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=Oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Oo();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const h=function(m,_){return new ac(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Wt.newInvalidDocument(f)))});let l=Oo();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Jo(f.mutation,h,Un.empty(),Ge.now()),cc(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class YR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:sr(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:FR(s.bundledQuery),readTime:sr(s.readTime)}}(n)),L.resolve()}}/**
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
 */class XR{constructor(){this.overlays=new Ye(ne.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=js();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=js(),i=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=js(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=js(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gR(n,r));let i=this.Lr.get(n);i===void 0&&(i=we(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class ZR{constructor(){this.sessionToken=Ut.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class up{constructor(){this.kr=new xt(Ct.Kr),this.qr=new xt(Ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ct(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ct(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new ne(new We([])),r=new Ct(n,e),s=new Ct(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new ne(new We([])),r=new Ct(n,e),s=new Ct(n,e+1);let i=we();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ct(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ct{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return ne.comparator(e.key,n.key)||ve(e.Jr,n.Jr)}static Ur(e,n){return ve(e.Jr,n.Jr)||ne.comparator(e.key,n.key)}}/**
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
 */class e2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new xt(Ct.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new Ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Zf:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ct(n,0),s=new Ct(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new xt(ve);return n.forEach(s=>{const i=new Ct(s,0),o=new Ct(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new Ct(new ne(i),0);let l=new xt(ve);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,s=>{const i=new Ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ct(n,0),s=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class t2{constructor(e){this.ti=e,this.docs=function(){return new Ye(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Wt.newInvalidDocument(n))}getEntries(e,n){let r=Dr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Wt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dr();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||AC(xC(f),r)<=0||(s.has(f.key)||cc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new n2(this)}getSize(e){return L.resolve(this.size)}}class n2 extends KR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class r2{constructor(e){this.persistence=e,this.ri=new si(n=>np(n),rp),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.ii=0,this.si=new up,this.targetCount=0,this.oi=Es._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
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
 */class dE{constructor(e,n){this._i={},this.overlays={},this.ai=new sc(0),this.ui=!1,this.ui=!0,this.ci=new ZR,this.referenceDelegate=e(this),this.li=new r2(this),this.indexManager=new $R,this.remoteDocumentCache=function(s){return new t2(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new UR(n),this.Pi=new YR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new e2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new s2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class s2 extends CC{constructor(e){super(),this.currentSequenceNumber=e}}class cp{constructor(e){this.persistence=e,this.Ri=new up,this.Ai=null}static Vi(e){return new cp(e)}get di(){if(this.Ai)return this.Ai;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=ne.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Du{constructor(e,n){this.persistence=e,this.fi=new si(r=>NC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=GR(this,n)}static Vi(e,n){return new Du(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=$l(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hp(e,n.fromCache,r,s)}}/**
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
 */class i2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class o2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _S()?8:RC(Kt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new i2;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(di()<=Te.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(di()<=Te.DEBUG&&G("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(di()<=Te.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):L.resolve())}gs(e,n){if(yy(n))return L.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ad(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,Ad(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return yy(n)||s.isEqual(ue.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?L.resolve(null):(di()<=Te.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fi(n)),this.Ds(e,o,n,SC(s,ga)).next(l=>l))})}Ss(e,n){let r=new xt(Bw(e));return n.forEach((s,i)=>{cc(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return di()<=Te.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",fi(n)),this.fs.getDocumentsMatchingQuery(e,n,ys.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const dp="LocalStore",a2=3e8;class l2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ye(ve),this.Fs=new si(i=>np(i),rp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function u2(t,e,n,r){return new l2(t,e,n,r)}async function fE(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=we();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function c2(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,_=m.keys();let A=L.resolve();return _.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(N=>{const O=h.docVersions.get(P);Oe(O!==null,48541),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=we();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function pE(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function h2(t,e){const n=he(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let A=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(Ut.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),s=s.insert(m,A),function(N,O,x){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=a2?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(_,A,f)&&l.push(n.li.updateTargetData(i,A))});let u=Dr(),h=we();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(d2(i,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(ue.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function d2(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dr();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G(dp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function f2(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function p2(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Nd(t,e,n){const r=he(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!io(o))throw o;G(dp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Py(t,e,n){const r=he(t);let s=ue.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=he(u),_=m.Fs.get(f);return _!==void 0?L.resolve(m.vs.get(_)):m.li.getTargetData(h,f)}(r,o,rr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:we())).next(l=>(m2(r,ZC(e),l),{documents:l,ks:i})))}function m2(t,e,n){let r=t.Ms.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Ny{constructor(){this.activeTargetIds=iR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g2{constructor(){this.vo=new Ny,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ny,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class y2{Mo(e){}shutdown(){}}/**
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
 */const by="ConnectivityMonitor";class Dy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){G(by,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){G(by,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vl=null;function bd(){return vl===null?vl=function(){return 268435456+Math.round(2147483648*Math.random())}():vl++,"0x"+vl.toString(16)}/**
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
 */const ph="RestConnection",_2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class v2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ku?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=bd(),l=this.Qo(e,n.toUriEncodedString());G(ph,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=to(h);return this.zo(e,l,u,r,f).then(m=>(G(ph,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Xs(ph,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=_2[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class w2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const zt="WebChannelConnection",ko=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Li extends v2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Li.c_){const e=ww();ko(e,vw.STAT_EVENT,n=>{n.stat===wd.PROXY?G(zt,"STAT_EVENT: detected buffering proxy"):n.stat===wd.NOPROXY&&G(zt,"STAT_EVENT: detected no buffering proxy")}),Li.c_=!0}}zo(e,n,r,s,i){const o=bd();return new Promise((l,u)=>{const h=new yw;h.setWithCredentials(!0),h.listenOnce(_w.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Fl.NO_ERROR:const m=h.getResponseJson();G(zt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Fl.TIMEOUT:G(zt,`RPC '${e}' ${o} timed out`),u(new Y(j.DEADLINE_EXCEEDED,"Request time out"));break;case Fl.HTTP_ERROR:const _=h.getStatus();if(G(zt,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const N=function(x){const T=x.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(P.status);u(new Y(N,P.message))}else u(new Y(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new Y(j.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{G(zt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);G(zt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=bd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");G(zt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let m=!1,_=!1;const A=new w2({Jo:P=>{_?G(zt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(G(zt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),G(zt,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Ho:()=>f.close()});return ko(f,Do.EventType.OPEN,()=>{_||(G(zt,`RPC '${e}' stream ${s} transport opened.`),A.i_())}),ko(f,Do.EventType.CLOSE,()=>{_||(_=!0,G(zt,`RPC '${e}' stream ${s} transport closed`),A.o_(),this.E_(f))}),ko(f,Do.EventType.ERROR,P=>{_||(_=!0,Xs(zt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),A.o_(new Y(j.UNAVAILABLE,"The operation could not be completed")))}),ko(f,Do.EventType.MESSAGE,P=>{var N;if(!_){const O=P.data[0];Oe(!!O,16349);const x=O,T=(x==null?void 0:x.error)||((N=x[0])==null?void 0:N.error);if(T){G(zt,`RPC '${e}' stream ${s} received error:`,T);const k=T.status;let b=function(E){const p=gt[E];if(p!==void 0)return eE(p)}(k),M=T.message;k==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Xs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),b===void 0&&(b=j.INTERNAL,M="Unknown error status: "+k+" with message "+T.message),_=!0,A.o_(new Y(b,M)),f.close()}else G(zt,`RPC '${e}' stream ${s} received:`,O),A.__(O)}}),Li.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ew()}}/**
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
 */function E2(t){return new Li(t)}function mh(){return typeof document<"u"?document:null}/**
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
 */function fc(t){return new xR(t,!0)}/**
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
 */Li.c_=!1;class mE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Oy="PersistentStream";class gE{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(br(n.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Y(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(Oy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(G(Oy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T2 extends gE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=CR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?sr(o.readTime):ue.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=xd(u)?{documents:NR(i,u)}:{query:bR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rE(i,o.resumeToken);const h=kd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=bu(i,o.snapshotVersion.toTimestamp());const h=kd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=OR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.K_(n)}}class I2 extends gE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=PR(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Pd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RR(this.serializer,r))};this.K_(n)}}/**
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
 */class S2{}class x2 extends S2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Cd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(j.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Cd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function A2(t,e,n,r){return new x2(t,e,n,r)}class k2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(br(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const cr="RemoteStore";class C2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Es(1e3),this.Va=new Es(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{oi(this)&&(G(cr,"Restarting streams for network reachability change."),await async function(u){const h=he(u);h.da.add(4),await ja(h),h.ga.set("Unknown"),h.da.delete(4),await pc(h)}(this))})}),this.ga=new k2(r,s)}}async function pc(t){if(oi(t))for(const e of t.ma)await e(!0)}async function ja(t){for(const e of t.ma)await e(!1)}function Dd(t,e){return t.Ea.get(e)||void 0}function yE(t,e){const n=he(t),r=Dd(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const h=Dd(l,u);h!==void 0&&l.Ra.delete(h);const f=function(_,A){return A%2!=0?_.Va.next():_.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);G(cr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Tr(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),gp(n)?mp(n):oo(n).O_()&&pp(n,i)}function fp(t,e){const n=he(t),r=oo(n),s=Dd(n,e);G(cr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&_E(n,s),n.Ia.size===0&&(r.O_()?r.L_():oi(n)&&n.ga.set("Unknown"))}function pp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void G(cr,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}oo(t).Z_(e)}function _E(t,e){t.pa.$e(e),oo(t).X_(e)}function mp(t){t.pa=new ER({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):we()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),oo(t).start(),t.ga.ua()}function gp(t){return oi(t)&&!oo(t).x_()&&t.Ia.size>0}function oi(t){return he(t).da.size===0}function vE(t){t.pa=void 0}async function R2(t){t.ga.set("Online")}async function P2(t){t.Ia.forEach((e,n)=>{pp(t,e)})}async function N2(t,e){vE(t),gp(t)?(t.ga.ha(e),mp(t)):t.ga.set("Unknown")}async function b2(t,e,n){if(t.ga.set("Online"),e instanceof nE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){G(cr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof Hl?t.pa.Xe(e):e instanceof tE?t.pa.st(e):t.pa.tt(e),!n.isEqual(ue.min()))try{const r=await pE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=i.Ia.get(f);m&&i.Ia.set(f,m.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const m=i.Ia.get(h);if(!m)return;i.Ia.set(h,m.withResumeToken(Ut.EMPTY_BYTE_STRING,m.snapshotVersion)),_E(i,h);const _=new Tr(m.target,h,f,m.sequenceNumber);pp(i,_)});const u=function(f,m){const _=new Map;m.targetChanges.forEach((P,N)=>{const O=f.Ra.get(N);O!==void 0&&_.set(O,P)});let A=new Ye(ve);return m.targetMismatches.forEach((P,N)=>{const O=f.Ra.get(P);O!==void 0&&(A=A.insert(O,N))}),new Ma(m.snapshotVersion,_,A,m.documentUpdates,m.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){G(cr,"Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!io(e))throw e;t.da.add(1),await ja(t),t.ga.set("Offline"),n||(n=()=>pE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(cr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await pc(t)})}function wE(t,e){return e().catch(n=>Ou(t,n,e))}async function mc(t){const e=he(t),n=Ts(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zf;for(;D2(e);)try{const s=await f2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,O2(e,s)}catch(s){await Ou(e,s)}EE(e)&&TE(e)}function D2(t){return oi(t)&&t.Ta.length<10}function O2(t,e){t.Ta.push(e);const n=Ts(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function EE(t){return oi(t)&&!Ts(t).x_()&&t.Ta.length>0}function TE(t){Ts(t).start()}async function V2(t){Ts(t).ra()}async function M2(t){const e=Ts(t);for(const n of t.Ta)e.ea(n.mutations)}async function L2(t,e,n){const r=t.Ta.shift(),s=op.from(r,e,n);await wE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await mc(t)}async function j2(t,e){e&&Ts(t).Y_&&await async function(r,s){if(function(o){return _R(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Ts(r).B_(),await wE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mc(r)}}(t,e),EE(t)&&TE(t)}async function Vy(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),G(cr,"RemoteStore received new credentials");const r=oi(n);n.da.add(3),await ja(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await pc(n)}async function U2(t,e){const n=he(t);e?(n.da.delete(2),await pc(n)):e||(n.da.add(2),await ja(n),n.ga.set("Unknown"))}function oo(t){return t.ya||(t.ya=function(n,r,s){const i=he(n);return i.sa(),new T2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:R2.bind(null,t),Yo:P2.bind(null,t),t_:N2.bind(null,t),H_:b2.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),gp(t)?mp(t):t.ga.set("Unknown")):(await t.ya.stop(),vE(t))})),t.ya}function Ts(t){return t.wa||(t.wa=function(n,r,s){const i=he(n);return i.sa(),new I2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:V2.bind(null,t),t_:j2.bind(null,t),ta:M2.bind(null,t),na:L2.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await mc(t)):(await t.wa.stop(),t.Ta.length>0&&(G(cr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
 */class yp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new yp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _p(t,e){if(br("AsyncQueue",`${e}: ${t}`),io(t))return new Y(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ji{static emptySet(e){return new ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class My{constructor(){this.Sa=new Ye(ne.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):se(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Yi{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Yi(e,n,ji.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class F2{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class $2{constructor(){this.queries=Ly(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=Ly(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new Y(j.ABORTED,"Firestore shutting down"))}}function Ly(){return new si(t=>zw(t),uc)}async function IE(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new F2,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=_p(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&vp(n)}async function SE(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function z2(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&vp(n)}function B2(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function vp(t){t.xa.forEach(e=>{e.next()})}var Od,jy;(jy=Od||(Od={})).Ba="default",jy.Cache="cache";class xE{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=Yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Od.Cache}}/**
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
 */class AE{constructor(e){this.key=e}}class kE{constructor(e){this.key=e}}class H2{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=we(),this.mutatedKeys=we(),this.iu=Bw(e),this.su=new ji(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new My,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),A=cc(this.query,m)?m:null,P=!!_&&this.mutatedKeys.has(_.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;_&&A?_.data.isEqual(A.data)?P!==N&&(r.track({type:3,doc:A}),O=!0):this.uu(_,A)||(r.track({type:2,doc:A}),O=!0,(u&&this.iu(A,u)>0||h&&this.iu(A,h)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),O=!0):_&&!A&&(r.track({type:1,doc:_}),O=!0,(u||h)&&(l=!0)),O&&(A?(o=o.add(A),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,m)=>function(A,P){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Vt:O})}};return N(A)-N(P)}(f.type,m.type)||this.iu(f.doc,m.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,h=u!==this.nu;return this.nu=u,o.length!==0||h?{snapshot:new Yi(this.query,e.su,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new My,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=we(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new kE(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new AE(r))}),n}Tu(e){this.tu=e.ks,this.ru=we();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return Yi.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const wp="SyncEngine";class q2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class W2{constructor(e){this.key=e,this.Eu=!1}}class G2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new si(l=>zw(l),uc),this.Vu=new Map,this.du=new Set,this.mu=new Ye(ne.comparator),this.fu=new Map,this.gu=new up,this.pu={},this.yu=new Map,this.wu=Es.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function K2(t,e,n=!0){const r=DE(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await CE(r,e,n,!0),s}async function Q2(t,e){const n=DE(t);await CE(n,e,!0,!1)}async function CE(t,e,n,r){const s=await p2(t.localStore,rr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await J2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&yE(t.remoteStore,s),l}async function J2(t,e,n,r,s){t.bu=(m,_,A)=>async function(N,O,x,T){let k=O.view._u(x);k.bs&&(k=await Py(N.localStore,O.query,!1).then(({documents:E})=>O.view._u(E,k)));const b=T&&T.targetChanges.get(O.targetId),M=T&&T.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(k,N.isPrimaryClient,b,M);return Fy(N,O.targetId,U.hu),U.snapshot}(t,m,_,A);const i=await Py(t.localStore,e,!0),o=new H2(e,i.ks),l=o._u(i.documents),u=La.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Fy(t,n,h.hu);const f=new q2(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function Y2(t,e,n){const r=he(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!uc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fp(r.remoteStore,s.targetId),Vd(r,s.targetId)}).catch(so)):(Vd(r,s.targetId),await Nd(r.localStore,s.targetId,!0))}async function X2(t,e){const n=he(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fp(n.remoteStore,r.targetId))}async function Z2(t,e,n){const r=oP(t);try{const s=await function(o,l){const u=he(o),h=Ge.now(),f=l.reduce((A,P)=>A.add(P.key),we());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Dr(),N=we();return u.xs.getEntries(A,f).next(O=>{P=O,P.forEach((x,T)=>{T.isValidDocument()||(N=N.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(O=>{m=O;const x=[];for(const T of l){const k=fR(T,m.get(T.key).overlayedDocument);k!=null&&x.push(new ii(T.key,k,Vw(k.value.mapValue),Bn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,x,l)}).next(O=>{_=O;const x=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(A,O.batchId,x)})}).then(()=>({batchId:_.batchId,changes:qw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new Ye(ve)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ua(r,s.changes),await mc(r.remoteStore)}catch(s){const i=_p(s,"Failed to persist write");n.reject(i)}}async function RE(t,e){const n=he(t);try{const r=await h2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?Oe(o.Eu,14607):s.removedDocuments.size>0&&(Oe(o.Eu,42227),o.Eu=!1))}),await Ua(n,r,e)}catch(r){await so(r)}}function Uy(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=he(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const _ of m.va)_.Oa(l)&&(h=!0)}),h&&vp(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eP(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new Ye(ne.comparator);o=o.insert(i,Wt.newNoDocument(i,ue.min()));const l=we().add(i),u=new Ma(ue.min(),new Map,new Ye(ve),o,l);await RE(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Ep(r)}else await Nd(r.localStore,e,!1).then(()=>Vd(r,e,n)).catch(so)}async function tP(t,e){const n=he(t),r=e.batch.batchId;try{const s=await c2(n.localStore,e);NE(n,r,null),PE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ua(n,s)}catch(s){await so(s)}}async function nP(t,e,n){const r=he(t);try{const s=await function(o,l){const u=he(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Oe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);NE(r,e,n),PE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ua(r,s)}catch(s){await so(s)}}function PE(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function NE(t,e,n){const r=he(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||bE(t,r)})}function bE(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(fp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Ep(t))}function Fy(t,e,n){for(const r of n)r instanceof AE?(t.gu.addReference(r.key,e),rP(t,r)):r instanceof kE?(G(wp,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||bE(t,r.key)):se(19791,{Cu:r})}function rP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(G(wp,"New document in limbo: "+n),t.du.add(r),Ep(t))}function Ep(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new ne(We.fromString(e)),r=t.wu.next();t.fu.set(r,new W2(n)),t.mu=t.mu.insert(n,r),yE(t.remoteStore,new Tr(rr(lc(n.path)),r,"TargetPurposeLimboResolution",sc.ce))}}async function Ua(t,e,n){const r=he(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=hp.Es(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,h){const f=he(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,_=>L.forEach(_.Ts,A=>f.persistence.referenceDelegate.addReference(m,_.targetId,A)).next(()=>L.forEach(_.Is,A=>f.persistence.referenceDelegate.removeReference(m,_.targetId,A)))))}catch(m){if(!io(m))throw m;G(dp,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const A=f.vs.get(_),P=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(_,N)}}}(r.localStore,i))}async function sP(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){G(wp,"User change. New user:",e.toKey());const r=await fE(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new Y(j.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ua(n,r.Ns)}}function iP(t,e){const n=he(t),r=n.fu.get(e);if(r&&r.Eu)return we().add(r.key);{let s=we();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function DE(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eP.bind(null,e),e.Ru.H_=z2.bind(null,e.eventManager),e.Ru.Du=B2.bind(null,e.eventManager),e}function oP(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nP.bind(null,e),e}class Vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return u2(this.persistence,new o2,e.initialUser,this.serializer)}xu(e){return new dE(cp.Vi,this.serializer)}Mu(e){return new g2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vu.provider={build:()=>new Vu};class aP extends Vu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){Oe(this.persistence.referenceDelegate instanceof Du,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new dE(r=>Du.Vi(r,n),this.serializer)}}class Md{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sP.bind(null,this.syncEngine),await U2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $2}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=E2(e.databaseInfo);return A2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new C2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Uy(this.syncEngine,n,0),function(){return Dy.v()?new Dy:new y2}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const m=new G2(s,i,o,l,u,h);return f&&(m.Su=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);G(cr,"RemoteStore shutting down."),i.da.add(5),await ja(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Md.provider={build:()=>new Md};/**
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
 */class OE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Is="FirestoreClient";class lP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Ht.UNAUTHENTICATED,this.clientId=Yf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(Is,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(Is,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ds;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_p(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),G(Is,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $y(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uP(t);G(Is,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Vy(e.remoteStore,s)),t._onlineComponents=e}async function uP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(Is,"Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Xs("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new Vu)}}else G(Is,"Using default OfflineComponentProvider"),await gh(t,new aP(void 0));return t._offlineComponents}async function VE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(Is,"Using user provided OnlineComponentProvider"),await $y(t,t._uninitializedComponentsProvider._online)):(G(Is,"Using default OnlineComponentProvider"),await $y(t,new Md))),t._onlineComponents}function cP(t){return VE(t).then(e=>e.syncEngine)}async function Ld(t){const e=await VE(t),n=e.eventManager;return n.onListen=K2.bind(null,e.syncEngine),n.onUnlisten=Y2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Q2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=X2.bind(null,e.syncEngine),n}function hP(t,e,n,r){const s=new OE(r),i=new xE(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>IE(await Ld(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>SE(await Ld(t),i))}}function dP(t,e,n={}){const r=new ds;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new OE({next:_=>{f.Ku(),o.enqueueAndForget(()=>SE(i,m));const A=_.docs.has(l);!A&&_.fromCache?h.reject(new Y(j.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&u&&u.source==="server"?h.reject(new Y(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new xE(lc(l.path),f,{includeMetadataChanges:!0,Wa:!0});return IE(i,m)}(await Ld(t),t.asyncQueue,e,n,r)),r.promise}function fP(t,e){const n=new ds;return t.asyncQueue.enqueueAndForget(async()=>Z2(await cP(t),e,n)),n.promise}/**
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
 */function ME(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const pP="ComponentProvider",zy=new Map;function mP(t,e,n,r,s){return new OC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ME(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const LE="firestore.googleapis.com",By=!0;class Hy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=LE,this.ssl=By}else this.host=e.host,this.ssl=e.ssl??By;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BR)throw new Y(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ME(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fC;switch(r.type){case"firstParty":return new yC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zy.get(n);r&&(G(pP,"Removing Datastore"),zy.delete(n),r.terminate())}(this),Promise.resolve()}}function gP(t,e,n,r={}){var h;t=nr(t,gc);const s=to(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&Mf(`https://${l}`),i.host!==LE&&i.host!==l&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Ks(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ht.MOCK_USER;else{f=R0(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new Y(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ht(_)}t._authCredentials=new pC(new Iw(f,m))}}/**
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
 */class yc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yc(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Oa(n,vt._jsonSchema))return new vt(e,r||null,new ne(We.fromString(n.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:_t("string",vt._jsonSchemaVersion),referencePath:_t("string")};class fs extends yc{constructor(e,n,r){super(e,n,lc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new ne(e))}withConverter(e){return new fs(this.firestore,e,this._path)}}function jE(t,e,...n){if(t=Xt(t),Sw("collection","path",e),t instanceof gc){const r=We.fromString(e,...n);return sy(r),new fs(t,null,r)}{if(!(t instanceof vt||t instanceof fs))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return sy(r),new fs(t.firestore,null,r)}}function Dn(t,e,...n){if(t=Xt(t),arguments.length===1&&(e=Yf.newId()),Sw("doc","path",e),t instanceof gc){const r=We.fromString(e,...n);return ry(r),new vt(t,null,new ne(r))}{if(!(t instanceof vt||t instanceof fs))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return ry(r),new vt(t.firestore,t instanceof fs?t.converter:null,new ne(r))}}/**
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
 */const qy="AsyncQueue";class Wy{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new mE(this,"async_queue_retry"),this.lc=()=>{const r=mh();r&&G(qy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=mh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new ds;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!io(e))throw e;G(qy,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,br("INTERNAL UNHANDLED ERROR: ",Gy(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=yp.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&se(47125,{Rc:Gy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Gy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Zs extends gc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Wy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wy(e),this._firestoreClient=void 0,await e}}}function UE(t,e){const n=typeof t=="object"?t:Uf(),r=typeof t=="string"?t:ku,s=ec(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=A0("firestore");i&&gP(s,...i)}return s}function Tp(t){if(t._terminated)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yP(t),t._firestoreClient}function yP(t){var r,s,i,o;const e=t._freezeSettings(),n=mP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new lP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An(Ut.fromBase64String(e))}catch(n){throw new Y(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new An(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Oa(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:_t("string",An._jsonSchemaVersion),bytes:_t("string")};/**
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
 */class FE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ip{constructor(e){this._methodName=e}}/**
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
 */class ir{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ir._jsonSchemaVersion}}static fromJSON(e){if(Oa(e,ir._jsonSchema))return new ir(e.latitude,e.longitude)}}ir._jsonSchemaVersion="firestore/geoPoint/1.0",ir._jsonSchema={type:_t("string",ir._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
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
 */class Hn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Oa(e,Hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Hn(e.vectorValues);throw new Y(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Hn._jsonSchemaVersion="firestore/vectorValue/1.0",Hn._jsonSchema={type:_t("string",Hn._jsonSchemaVersion),vectorValues:_t("object")};/**
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
 */const _P=/^__.*__$/;class vP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{dataSource:t})}}class Sp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Sp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Mu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if($E(this.dataSource)&&_P.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class wP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}V(e,n,r,s=!1){return new Sp({dataSource:e,methodName:n,targetDoc:r,path:Mt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zE(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new wP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BE(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);GE("Data must be an object, but it was:",o,r);const l=qE(r,o);let u,h;if(i.merge)u=new Un(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Ap(e,m,n);if(!o.contains(_))throw new Y(j.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);IP(f,_)||f.push(_)}u=new Un(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new vP(new xn(l),u,h)}class xp extends Ip{_toFieldTransform(e){return new uR(e.path,new wa)}isEqual(e){return e instanceof xp}}function HE(t,e){if(WE(t=Xt(t)))return GE("Unsupported field value:",e,t),qE(t,e);if(t instanceof Ip)return function(r,s){if(!$E(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=HE(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:bu(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bu(s.serializer,i)}}if(r instanceof ir)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof An)return{bytesValue:rE(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hn)return function(o,l){const u=o instanceof Hn?o.toArray():o;return{mapValue:{fields:{[Dw]:{stringValue:Ow},[Cu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return sp(l.serializer,f)})}}}}}}(r,s);if(cE(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Xf(r)}`)}(t,e)}function qE(t,e){const n={};return kw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(t,(r,s)=>{const i=HE(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function WE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof ir||t instanceof An||t instanceof vt||t instanceof Ip||t instanceof Hn||cE(t))}function GE(t,e,n){if(!WE(n)||!xw(n)){const r=Xf(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Ap(t,e,n){if((e=Xt(e))instanceof FE)return e._internalPath;if(typeof e=="string")return TP(t,e);throw Mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const EP=new RegExp("[~\\*/\\[\\]]");function TP(t,e,n){if(e.search(EP)>=0)throw Mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new FE(...e.split("."))._internalPath}catch{throw Mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Y(j.INVALID_ARGUMENT,l+t+u)}function IP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class SP{convertValue(e,n="none"){switch(ws(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ri(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Cu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>dt(o.doubleValue));return new Hn(n)}convertGeoPoint(e){return new ir(dt(e.latitude),dt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=oc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ya(e));default:return null}}convertTimestamp(e){const n=_s(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Oe(uE(r),9688,{name:e});const s=new _a(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||br(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class KE extends SP{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function xP(){return new xp("serverTimestamp")}const Ky="@firebase/firestore",Qy="4.14.1";/**
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
 */function Jy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class QE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ap("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AP extends QE{data(){return super.data()}}/**
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
 */function kP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function JE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zs extends QE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ql(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ap("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=zs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}zs._jsonSchemaVersion="firestore/documentSnapshot/1.0",zs._jsonSchema={type:_t("string",zs._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class ql extends zs{data(e={}){return super.data(e)}}class Ui{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Mo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ql(this._firestore,this._userDataWriter,r.key,r,new Mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new ql(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ql(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Mo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:CP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ui._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
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
 */Ui._jsonSchemaVersion="firestore/querySnapshot/1.0",Ui._jsonSchema={type:_t("string",Ui._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};/**
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
 */function wl(t){t=nr(t,vt);const e=nr(t.firestore,Zs),n=Tp(e);return dP(n,t._key).then(r=>YE(e,t,r))}function El(t,e,n){t=nr(t,vt);const r=nr(t.firestore,Zs),s=JE(t.converter,e),i=zE(r);return kp(r,[BE(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Bn.none())])}function RP(t){return kp(nr(t.firestore,Zs),[new ip(t._key,Bn.none())])}function PP(t,e){const n=nr(t.firestore,Zs),r=Dn(t),s=JE(t.converter,e),i=zE(t.firestore);return kp(n,[BE(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bn.exists(!1))]).then(()=>r)}function Yy(t,...e){var h,f,m;t=Xt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Jy(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Jy(e[r])){const _=e[r];e[r]=(h=_.next)==null?void 0:h.bind(_),e[r+1]=(f=_.error)==null?void 0:f.bind(_),e[r+2]=(m=_.complete)==null?void 0:m.bind(_)}let i,o,l;if(t instanceof vt)o=nr(t.firestore,Zs),l=lc(t._key.path),i={next:_=>{e[r]&&e[r](YE(o,t,_))},error:e[r+1],complete:e[r+2]};else{const _=nr(t,yc);o=nr(_.firestore,Zs),l=_._query;const A=new KE(o);i={next:P=>{e[r]&&e[r](new Ui(o,A,_,P))},error:e[r+1],complete:e[r+2]},kP(t._query)}const u=Tp(o);return hP(u,l,s,i)}function kp(t,e){const n=Tp(t);return fP(n,e)}function YE(t,e,n){const r=n.docs.get(e._key),s=new KE(t);return new zs(t,s,e._key,r,new Mo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){dC(ni),Qs(new gs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Zs(new mC(r.getProvider("auth-internal")),new _C(o,r.getProvider("app-check-internal")),VC(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),er(Ky,Qy,e),er(Ky,Qy,"esm2020")})();const NP={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},Fa=b0(NP);lC(Fa);const bP=UE(Fa),DP="usage_events";function Tl(t,e={},n="UNKNOWN"){PP(jE(bP,DP),{tool:"shorts_brain",event_type:t,timestamp:xP(),market:n,payload:e}).catch(r=>console.warn("[usage_events] write failed:",r.message))}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=t=>{const e=VP(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=ee.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>ee.createElement("svg",{ref:u,...MP,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:XE("lucide",s),...!i&&!LP(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>ee.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(t,e)=>{const n=ee.forwardRef(({className:r,...s},i)=>ee.createElement(jP,{ref:i,iconNode:e,className:XE(`lucide-${OP(Xy(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Xy(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],FP=de("binary",UP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],ZE=de("brain",$P);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Zy=de("calendar",zP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],e1=de("chart-column",BP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qP=de("chevron-down",HP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],GP=de("chevron-left",WP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],QP=de("chevron-right",KP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],YP=de("chevron-up",JP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],ZP=de("clipboard-check",XP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],tN=de("clock",eN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],rN=de("cloud-upload",nN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],iN=de("component",sN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],e_=de("copy",oN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],lN=de("database",aN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],cN=de("download",uN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],dN=de("flag",hN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],pN=de("folder-kanban",fN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],gN=de("funnel",mN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],t1=de("globe",yN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],vN=de("layers",_N);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],n1=de("lightbulb",wN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],TN=de("list-tree",EN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],SN=de("loader-circle",IN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],t_=de("map-pin",xN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],kN=de("menu",AN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],RN=de("palette",CN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],NN=de("pen",PN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],DN=de("play",bN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],VN=de("plus",ON);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],LN=de("power",MN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],UN=de("refresh-ccw",jN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],$N=de("rotate-ccw",FN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],BN=de("save",zN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],qN=de("settings-2",HN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],GN=de("sparkles",WN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],r1=de("target",KN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],s1=de("trash-2",QN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],i1=de("trending-up",JN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],XN=de("users",YN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],eb=de("wand-sparkles",ZN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nb=de("x",tb);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],sb=de("zap-off",rb);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],jd=de("zap",ib),bn=UE(Fa),ob=dw(Fa),o1="https://drive.google.com/corp/drive/folders/18GCtCrz-Bs1YdXKtQs-tjugb6xudULaX?resourcekey=0-gMJCegK7SZkhgJeT_YTjSw",Ir=["DAU-SCT","DAC-SCT","GenAI DAU-SCT","Impressions","CTR"],Wr=["India","Indonesia","Japan","South Korea","AUNZ"],Ia={India:"IN",Indonesia:"ID",Japan:"JP","South Korea":"KR",AUNZ:"AUNZ"},Ud={IN:"India",ID:"Indonesia",JP:"Japan",KR:"South Korea",AUNZ:"AUNZ"},Fd=["SSC","Shelf","UTS","MVR","UTS SFV","JP Proactive Container"],ab=["kanishak@google.com","danilpalma@google.com","ivanho.wz@gmail.com","ivho@google.com"],Ot=["female","male","total"],lb={female:"FEMALE",male:"MALE",total:"GenPop"},sn=["18-24","25-34","18-34","35+","total"],ub={"18-24":"18-24","25-34":"25-34","18-34":"18-34","35+":"35-44",total:"GenPop"},cb=t=>t&&t>="2026-10-01"?1:t&&t>="2026-07-01"?.65:.4,hb=[{id:"Upload",label:"Data Ingestion",icon:rN},{id:"OKR",label:"Shorts OKR Performance",icon:r1},{id:"Global Hub",label:"Global Holdback",icon:t1},{id:"Market Hub",label:"Campaign Holdback",icon:vN}],yh=[{id:"AlwaysOn",label:"Always-On",icon:jd},{id:"ScaledCreation",label:"Scaled Creation",icon:GN},{id:"Effects",label:"Effects",icon:n1},{id:"Trends",label:"Trends",icon:i1},{id:"CultMo",label:"CultMo",icon:iN},{id:"ArtMo",label:"ArtMo",icon:RN},{id:"GenAI Hub",label:"GenAI Hub",icon:eb}],qe=t=>(t||"").toString().replace(/['"]/g,"").replace(/\u00A0/g," ").trim(),ht=t=>{try{return qe(t).toUpperCase().replace(/[^\p{L}\p{N}]/gu,"")}catch{return qe(t).toUpperCase().replace(/[\s\-_&!?,.()'"！]/g,"")}},Bt=(t,e)=>ht(t)===ht(e),db=t=>ht(t).replace(/INDIA$|INDONESIA$|JAPAN$|SOUTHKOREA$|AUNZ$|IN$|ID$|JP$|KR$/g,"").trim(),fb=t=>t===0?"0.00":t==="NA"||t===null||t===void 0||isNaN(t)?"-":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t),xr=t=>{const e=qe(t);if(!e||e==="-"||e==="Unknown")return null;try{if(e.includes("-")&&e.split("-")[0].length===4)return e;const n=e.split(/[-/]/);if(n.length===3){let s=parseInt(n[0],10),i=parseInt(n[1],10),o=parseInt(n[2],10);o<100&&(o+=2e3);let l,u;return s>12?(u=s,l=i):i>12?(l=s,u=i):(u=s,l=i),l>12?null:`${o}-${l.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return isNaN(r.getTime())?null:r.toISOString().split("T")[0]}catch{return null}},a1=(t,e)=>{const n=xr(t),r=xr(e);if(!n||!r)return 0;try{const s=new Date(n),o=new Date(r).getTime()-s.getTime(),l=Math.floor(o/(1e3*60*60*24));return l>=0?l+1:0}catch{return 0}},l1=(t,e)=>{const n=xr(t),r=xr(e);if(!n||!r)return!1;try{return new Date(n)>=new Date(r)}catch{return!1}},Gr=t=>{const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];i==='"'?r=!r:i===","&&!r?(e.push(n.trim()),n=""):n+=i}return e.push(n.trim()),e},$e=(t,e)=>{const n=t.map(s=>(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"")),r=e.map(s=>s.toUpperCase().replace(/[^A-Z0-9]/g,""));for(const s of r){const i=n.indexOf(s);if(i!==-1)return i}return n.findIndex(s=>r.some(i=>s.includes(i)))},pb=(t,e,n=null)=>{var i,o;const r=ht(t),s=db(t);if(n){const l=ht(n);if((i=e[l])!=null&&i[r])return e[l][r];if((o=e[l])!=null&&o[s])return e[l][s]}for(const l in e){if(e[l][r])return e[l][r];if(e[l][s])return e[l][s]}return{}},n_=t=>{const e=t?new Date(t):new Date;if(isNaN(e.getTime()))return`SNAPSHOT-${Date.now()}`;const n=e.getFullYear(),r=new Date(n,0,1),s=Math.floor((e-r)/(24*60*60*1e3)),i=Math.ceil((e.getDay()+1+s)/7);return`${n}-W${i.toString().padStart(2,"0")}`},mb=(t,e)=>e?{cardBg:"bg-[#111]",color:"text-[#444]",accent:"bg-[#444]"}:t>=100?{cardBg:"bg-emerald-950/20",color:"text-emerald-400",accent:"bg-emerald-500"}:t>=80?{cardBg:"bg-amber-950/20",color:"text-amber-400",accent:"bg-amber-500"}:{cardBg:"bg-red-950/20",color:"text-red-400",accent:"bg-red-500"},Il=t=>{const e={...t,metrics:{}};return Ir.forEach(n=>{t.metrics[n]&&Ot.forEach(r=>{sn.forEach(s=>{const i=t.metrics[n][r][s];i&&(i.v!==0||i.abs!==0||i.sig!==0||i.isPaused||i.v==="NA")&&(e.metrics[n]||(e.metrics[n]={}),e.metrics[n][r]||(e.metrics[n][r]={}),e.metrics[n][r][s]=i)})})}),e},gb=t=>{const e={...t,metrics:{}};return Ir.forEach(n=>{e.metrics[n]={female:{},male:{},total:{}},Ot.forEach(r=>{sn.forEach(s=>{var i,o,l;e.metrics[n][r][s]=((l=(o=(i=t.metrics)==null?void 0:i[n])==null?void 0:o[r])==null?void 0:l[s])||{v:0,sig:0,abs:0,isPaused:!1,launchDate:null}})})}),e},Co=(t,e={},n={},r=["Campaign","Campaign Name","Country","Market"],s=!1,i=null,o=!1,l=!1)=>{try{const u=t.split(/\r?\n/).filter(T=>T.trim()!=="");if(u.length<2)return e;const h=Gr(u[0]),f=$e(h,r),m=$e(h,["Country","Market","Market Name"]),_=$e(h,["Value Type","Metric Type"]),A=$e(h,["Slice","Segment"]),P=$e(h,["Date","Reporting Date","Day","Latest Date"]),N=$e(h,["Trend Start Date","Trend Start"]),O=$e(h,["Trend End Date","Trend End"]);if(f===-1)return e;const x={...e};return u.slice(1).forEach(T=>{const k=Gr(T),b=_!==-1?(k[_]||"").replace(/['"]/g,"").trim().toUpperCase():"",M=A!==-1?(k[A]||"").replace(/['"]/g,"").trim().toUpperCase():"",U=P!==-1?xr(k[P]):null,E=!s&&(b==="RATIO (%)"||b==="RATIO"||b.includes("LIFT")||b==="")&&(M==="CONTROL"||M===""||M==="TOTAL"),p=s&&(b.includes("DELTA")||b===""||b==="TOTAL"||b.includes("IMPRESSIONS")||b.includes("ABSOLUTE")||b.includes("VOLUME")||b.includes("CTR"))&&(M==="CONTROL"||M==="TEST"||M==="TREATMENT"||M===""||M==="TOTAL"),v=b.includes("TREND FAVORABILITY")&&(M==="CONTROL"||M===""||M==="TOTAL");if(!E&&!v&&!p)return;const w=qe(k[f])||"Unknown";let S=m!==-1?qe(k[m]):i||"APAC",C=Ud[S.toUpperCase()]||S;const I=pb(w,n,C==="APAC"?null:C);C==="APAC"&&I&&I.market&&(C=I.market),C==="APAC"&&(C="India");const X=`${C}_${w}`;let fe=null;const nt=$e(h,["Gender","Sex"]);if(nt!==-1){const B=(k[nt]||"").toLowerCase().trim();B==="female"||B==="f"?fe="female":B==="male"||B==="m"?fe="male":(B==="total"||B==="all"||B==="genpop"||B==="gen pop")&&(fe="total")}else fe="total";if(!fe)return;let Ce="total";const H=$e(h,["Age","Age Group"]);if(H!==-1){const B=(k[H]||"").toLowerCase().trim();B.includes("18-24")?Ce="18-24":B.includes("25-34")?Ce="25-34":B.includes("18-34")?Ce="18-34":B.includes("35")&&(Ce="35+")}const J=o||ht(w).includes("GLOBALHOLDBACK");if(!x[X]){const B=N!==-1?xr(k[N]):null,pe=O!==-1?xr(k[O]):null;x[X]={country:w,market:C,metrics:{},isAnchor:J,campaignStartDate:B||I.campaignStartDate||null,campaignEndDate:pe||I.campaignEndDate||null,optimisationEndDate:I.optimisationEndDate||U,segmentTag:I.subTab||"Campaign Hub",meta:I,dataMinDate:U,dataMaxDate:U,explicitTrendStart:B,explicitTrendEnd:pe},Ir.forEach(ae=>{x[X].metrics[ae]={female:{},male:{},total:{}},Ot.forEach(Ve=>{sn.forEach(Ue=>x[X].metrics[ae][Ve][Ue]={v:0,sig:0,abs:0,isPaused:!1,launchDate:null})})})}Ir.forEach(B=>{const pe={"DAU-SCT":["DAU-SCT","DAILY SHORTS CREATION TOOL ACTIVE USERS"],"DAC-SCT":["DAC-SCT","DAILY SHORTS CONVERTERS"],"GenAI DAU-SCT":["GENAI DAU","GENAI DAILY ACTIVE USERS"],Impressions:["IMPRESSIONS","TOTAL IMPRESSIONS","REACH","IMPS"],CTR:["CTR","CLICK THROUGH RATE","CLICK-THROUGH RATE"]},ae=h.findIndex(fn=>{const tn=fn.toUpperCase();return(pe[B]||[]).some(li=>tn.includes(li))&&!(tn.includes("CONFIDENCE")||tn.includes("BOUND"))});if(ae===-1)return;const Ve=(k[ae]||"").replace(/['"]/g,"").trim(),Ue=parseFloat(Ve.replace(/[^\d.-]/g,""))||0,Nt=x[X].meta.targeting;let pt=!1;if(J||l)pt=!0;else if(Nt){const fn=Nt.ages.length===0||Nt.ages.includes(Ce),tn=Nt.genders.length===0||Nt.genders.includes(fe);pt=fn&&tn}else pt=!0;(B==="Impressions"||B==="CTR")&&(pt=!0);const En=B==="GenAI DAU-SCT",hn=(x[X].meta.tab||"").toLowerCase()==="genai hub",dn=pt&&(!En||hn||J),Qe=dn?Ue:"NA";if(E)(Qe!=="NA"&&Qe!==0||x[X].metrics[B][fe][Ce].v===0||x[X].metrics[B][fe][Ce].v==="NA")&&(x[X].metrics[B][fe][Ce].v=Qe);else if(p)B==="Impressions"||B==="CTR"?(Qe!=="NA"&&Qe!==0||x[X].metrics[B][fe][Ce].v===0||x[X].metrics[B][fe][Ce].v==="NA")&&(x[X].metrics[B][fe][Ce].v=Qe):(Qe!=="NA"&&Qe!==0||x[X].metrics[B][fe][Ce].abs===0||x[X].metrics[B][fe][Ce].abs==="NA")&&(x[X].metrics[B][fe][Ce].abs=Qe);else if(v&&dn){const fn=Ve.toUpperCase(),tn=fn.includes("POSITIVE")||fn.includes("SSP")?1:fn.includes("NEGATIVE")||fn.includes("SSN")?-1:0;tn!==0&&(x[X].metrics[B][fe][Ce].sig=tn)}})}),x}catch(u){return console.error("CSV Parse Error:",u),e}},yb=(t,e=null)=>{const n=[],r=["SHELF","SSC","UTS","MVR","UTSSFV"],s={total:0,skippedEnded:0,evaluated:0,noSignal:0};return Wr.forEach(i=>{(t[i]||[]).forEach((l,u)=>{var U,E;if(s.total+=1,l1(l.optimisationEndDate,l.campaignEndDate)){s.skippedEnded+=1;return}s.evaluated+=1;const h=n.length,f=((U=l.metrics)==null?void 0:U["DAU-SCT"])||{},m=a1(l.campaignStartDate,l.optimisationEndDate),_=m>=14,A=Ia[i]||i.toUpperCase(),P=ht(l.country),N=r.some(p=>P.includes(p)),O=(p,v,w)=>{var Ce,H,J,B,pe;if(((H=(Ce=f[p])==null?void 0:Ce[v])==null?void 0:H.v)==="NA")return;const S=(J=f[p])==null?void 0:J[v];if(!S)return;const C=S.v||0,I=S.sig===-1,X=_?"PAUSE":"MAINTAIN",fe=I?"stat sig negative":"neutral negative";let nt="";if(w==="G"&&v!=="total"&&C>=0){const ae=(B=f.male)==null?void 0:B[v],Ve=(pe=f.female)==null?void 0:pe[v];if((ae==null?void 0:ae.v)!=="NA"&&(Ve==null?void 0:Ve.v)!=="NA"&&((ae==null?void 0:ae.v)||0)<-1e-4&&((Ve==null?void 0:Ve.v)||0)<-1e-4){const Ue=_?"Pause":"Maintain (Learning Phase)",Nt=_?"":` observed but hasn't reached maturity (Current: ${m}d / Required: 14d)`;_&&N?nt=`${A} ${l.country} - Pause G${v} given negative lift across both males (${ae.v.toFixed(2)}%) and females (${Ve.v.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:nt=`${A} ${l.country} - ${Ue} G${v} given negative lift across both males (${ae.v.toFixed(2)}%) and females (${Ve.v.toFixed(2)}%)${Nt}`}}nt||(_?N?nt=`${A} ${l.country} - Pause ${w}${v} given ${fe} (${C.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:nt=`${A} ${l.country} - Pause ${w}${v} given ${fe} (${C.toFixed(2)}%)`:nt=`${A} ${l.country} - Maintain ${w}${v} (Learning Phase): Negative lift (${C.toFixed(2)}%) observed but hasn't reached maturity (Current: ${m}d / Required: 14d).`),n.push({id:`CAMP_${i}_${u}_P_${p}_${v}`,country:A,campaign:l.country,age:v==="total"?"GenPop":v,gender:p==="total"?"GenPop":p.toUpperCase(),recommendation:X,justification:nt})},x=((E=f.total)==null?void 0:E.total)||{v:0,sig:0};!N&&x.v!=="NA"&&x.sig===1&&x.v>.001&&n.push({id:`CAMP_${i}_${u}_SC`,country:A,campaign:l.country,age:"GenPop",gender:"GenPop",recommendation:"SCALE",justification:`${A} ${l.country} - Scale GenPop: Stat-sig positive lift (+${x.v.toFixed(2)}%) observed.`});const T=p=>{let v=[];return["18-24","25-34","35+"].forEach(w=>{var S,C,I,X;((C=(S=f[p])==null?void 0:S[w])==null?void 0:C.v)!=="NA"&&(((X=(I=f[p])==null?void 0:I[w])==null?void 0:X.v)||0)<-1e-4&&v.push(w)}),v},k=T("male"),b=T("female"),M=k.filter(p=>b.includes(p));M.forEach(p=>O("total",p,"G")),k.filter(p=>!M.includes(p)).forEach(p=>O("male",p,"M")),b.filter(p=>!M.includes(p)).forEach(p=>O("female",p,"F")),n.length===h&&(s.noSignal+=1)})}),e&&Object.assign(e,s),n},r_=t=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch{}document.body.removeChild(e)},u1=({className:t})=>g.jsxs("svg",{className:t,viewBox:"0 0 1443 1250",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[g.jsx("path",{d:"M485.29 0L0 839.25l242.42 410.74 485.29-839.25H485.29z"}),g.jsx("path",{d:"M957.66 0l-242.43 419.63 485.29 830.36 242.54-419.63L957.66 0z",opacity:"0.8"}),g.jsx("path",{d:"M524.23 839.25l-242.42 410.74h960.54l242.42-410.74H524.23z",opacity:"0.6"})]}),s_=({activeMetrics:t,toggleMetric:e,handleAllToggle:n,allowedMetrics:r=Ir})=>g.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[g.jsx("div",{className:"flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]",children:r.map(s=>g.jsx("button",{type:"button",onClick:()=>e(s),className:`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${t.includes(s)?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:s},s))}),g.jsx("button",{type:"button",onClick:()=>n(),className:`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${t.length===r.length?"bg-white text-black border-white":"bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]"}`,children:t.length===r.length?"Selective View":"Sync All Metrics"})]}),i_=({data:t,activeMetrics:e,latestGlobalDate:n,isCampaignView:r=!1,hideDates:s=!1,isAlwaysOn:i=!1,ignorePaused:o=!1})=>{const l=ee.useRef(null),u={female:{1:"bg-blue-900/40 text-blue-100",2:"bg-blue-900/20",3:"bg-blue-950/40 text-blue-400"},male:{1:"bg-purple-900/40 text-purple-100",2:"bg-purple-900/20",3:"bg-purple-950/40 text-purple-400"},total:{1:"bg-amber-900/80 text-amber-50",2:"bg-amber-800/20",3:"bg-amber-950 text-amber-400 font-bold"}},h=f=>{l.current&&l.current.scrollBy({left:f==="left"?-600:600,behavior:"smooth"})};return!t||t.length===0?g.jsxs("div",{className:"py-40 text-center flex flex-col items-center justify-center gap-6",children:[g.jsx("div",{className:"p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]",children:g.jsx(sb,{className:"w-12 h-12 text-[#3a3a3a] animate-pulse"})}),g.jsx("p",{className:"text-[#808080] font-bold text-sm uppercase tracking-widest",children:"No Data Available"})]}):g.jsxs("div",{className:"relative group/table",children:[g.jsx("button",{onClick:()=>h("left"),className:"absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:g.jsx(GP,{className:"w-6 h-6"})}),g.jsx("button",{onClick:()=>h("right"),className:"absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:g.jsx(QP,{className:"w-6 h-6"})}),g.jsx("div",{ref:l,className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto no-scrollbar scroll-smooth",children:g.jsxs("table",{className:"w-full text-center border-collapse",children:[g.jsxs("thead",{children:[g.jsxs("tr",{className:"text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:[g.jsx("th",{rowSpan:3,className:"px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[300px]",children:i?"Trend Identifier":r?"Campaign Entity":"Country / Market"}),Ot.map((f,m)=>g.jsx("th",{colSpan:sn.length*e.length,className:`py-6 border-white/10 ${u[f][1]} ${m<Ot.length-1?"border-r-2 border-white/20":""}`,children:g.jsxs("div",{className:"flex items-center justify-center gap-3",children:[g.jsx(XN,{className:"w-4 h-4 opacity-50"}),lb[f]]})},f))]}),g.jsx("tr",{className:"text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:Ot.map(f=>g.jsx(gr.Fragment,{children:sn.map((m,_)=>g.jsx("th",{colSpan:e.length,className:`py-4 transition-colors ${u[f][2]} ${_===sn.length-1&&Ot.indexOf(f)<Ot.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:ub[m]},m))},f))}),g.jsx("tr",{className:"text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]",children:Ot.map(f=>g.jsx(gr.Fragment,{children:sn.map((m,_)=>g.jsx(gr.Fragment,{children:e.map((A,P)=>g.jsx("th",{className:`py-3 px-3 font-mono ${u[f][3]} ${_===sn.length-1&&P===e.length-1&&Ot.indexOf(f)<Ot.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:A.includes("GenAI")?"GenAI":A==="Impressions"?"Imprs":A.split("-")[0]},A))},m))},f))})]}),g.jsx("tbody",{className:"divide-y divide-white/5",children:t.map((f,m)=>{var b,M,U;const _=!!f.isAnchor,A=(U=(M=(b=f.metrics)==null?void 0:b[e[0]||"DAU-SCT"])==null?void 0:M.total)==null?void 0:U.total,P=!o&&(A!=null&&A.isPaused)&&(A!=null&&A.launchDate)&&A.launchDate!=="Ended"?A.launchDate:null,N=i?f.explicitTrendStart||f.dataMinDate||f.campaignStartDate:f.campaignStartDate||f.explicitTrendStart||f.dataMinDate,O=f.campaignEndDate||P||f.optimisationEndDate;let T=i?f.explicitTrendEnd||f.dataMaxDate||O:f.campaignEndDate||f.explicitTrendEnd||f.dataMaxDate||f.optimisationEndDate;!i&&n&&T&&new Date(T)>new Date(n)&&(T=n);const k=a1(N,T);return g.jsxs("tr",{className:`transition-all duration-200 ${_?"bg-white/[0.05]":"hover:bg-white/[0.03]"}`,children:[g.jsx("td",{className:`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 bg-[#111] ${_?"text-blue-400 font-bold":"text-[#e0e0e0]"}`,children:g.jsxs("div",{className:"flex flex-col gap-1.5",children:[g.jsx("span",{className:"font-bold text-[12px] uppercase tracking-tight",children:String(f.country||"Unknown")}),!s&&!_&&(N||i)&&g.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 p-2 rounded bg-black/40 border border-white/5 shadow-inner",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Zy,{className:"w-3 h-3 text-blue-400"}),g.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[g.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend Start:":"Start:"}),String(N||"N/A")]})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Zy,{className:"w-3 h-3 text-amber-400"}),g.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[g.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend End:":"End:"}),String(r&&f.campaignEndDate?f.campaignEndDate:T||"Active")]})]}),g.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[g.jsx(tN,{className:"w-3 h-3 text-emerald-400"}),g.jsxs("span",{className:"text-[9px] font-bold tracking-tighter uppercase text-emerald-400",children:[i?"Trend Days Live:":"Days Live:"," ",k]})]})]})]})}),Ot.map(E=>g.jsx(gr.Fragment,{children:sn.map((p,v)=>g.jsx(gr.Fragment,{children:e.map(w=>{const S=f.metrics[w][E][p],C=v===sn.length-1&&e.indexOf(w)===e.length-1;let I="text-slate-500 font-medium",X="";const fe=S.isPaused&&!_&&!o;return fe?(I="text-[#808080] font-bold",X="bg-[#1a1a1a]"):S.v!=="NA"&&S.sig===-1?(I="text-red-500 font-bold",X="bg-red-500/10"):S.v!=="NA"&&S.sig===1?(I="text-emerald-500 font-bold",X="bg-emerald-500/10"):S.v!==0&&S.v!=="NA"&&(I="text-slate-100 font-bold"),g.jsx("td",{className:`py-5 px-3 font-mono text-[13px] tabular-nums ${I} ${X} ${C&&Ot.indexOf(E)<Ot.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:g.jsx("div",{className:"flex flex-col items-center text-center",children:fe?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"leading-none uppercase",children:"Paused"}),g.jsx("span",{className:"text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic",children:String(S.launchDate||"No Data")})]}):S.v==="NA"?g.jsx("span",{className:"text-gray-500 opacity-50 font-bold",children:"NA"}):g.jsxs(g.Fragment,{children:[g.jsx("span",{children:_&&(w==="Impressions"||w==="CTR")&&S.v===0?"NA":w==="Impressions"?fb(S.v):w==="CTR"?`${S.v.toFixed(2)}%`:S.v===0?"0.00":S.v>0?`+${S.v.toFixed(2)}`:`${S.v.toFixed(2)}`}),S.abs!==0&&S.abs!=="NA"&&w!=="Impressions"&&w!=="CTR"&&g.jsxs("span",{className:"text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none",children:["(",S.abs>0?`+${Math.round(S.abs).toLocaleString()}`:Math.round(S.abs).toLocaleString(),")"]})]})})},`${m}-${w}-${E}-${p}`)})},p))},E))]},`${m}-${f.country}`)})})]})})]})},_b=({globalData:t,regionalData:e,latestDate:n,quarterStart:r})=>{const[s,i]=ee.useState(null),[o,l]=ee.useState({}),[u,h]=ee.useState([]),[f,m]=ee.useState(!1),[_,A]=ee.useState(new Set),[P,N]=ee.useState(null),[O,x]=ee.useState({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}),T=p=>{N(p),setTimeout(()=>N(null),2e3)},k=ee.useMemo(()=>{if(!n)return"TBD";const p=new Date("2026-06-30"),v=new Date(n),w=Math.ceil((p-v)/(1e3*60*60*24));return w>0?w:0},[n]),b=ee.useMemo(()=>["APAC","India","Indonesia","Japan","South Korea","AUNZ"].map(p=>{var X,fe,nt,Ce;const v=t.find(H=>Bt(H.country,p)||Bt(H.country,Ia[p])),w=(Ce=(nt=(fe=(X=v==null?void 0:v.metrics)==null?void 0:X["DAU-SCT"])==null?void 0:fe.total)==null?void 0:nt.total)==null?void 0:Ce.v,S=w==="NA"||isNaN(w)||w===void 0?0:w,C=cb(r),I=C>0?S/C*100:0;return{market:p.toUpperCase(),actual:S,target:C,perfIndex:I,isOffline:!v||w==="NA"}}),[t,r]),{rows:M,stats:U}=ee.useMemo(()=>{const p={},S=[...yb(e,p),...u].filter(C=>!_.has(C.id)).map(C=>o[C.id]?{...C,...o[C.id]}:C);return S.length===0&&console.info("[StrategicGuidance] matrix empty — guard breakdown:",p),{rows:S,stats:p}},[e,u,_,o]),E=()=>{O.campaign&&(h(p=>[...p,{...O,id:`MANUAL_${Date.now()}`}]),m(!1),x({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}))};return g.jsxs("div",{className:"w-full max-w-[1600px] mx-auto pb-32",children:[P&&g.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase shadow-xl",children:P}),g.jsx("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8",children:g.jsxs("div",{className:"space-y-4",children:[g.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase",children:"Shorts OKR Performance"}),g.jsxs("div",{className:"flex flex-wrap gap-10 pt-4",children:[g.jsxs("div",{className:"space-y-1",children:[g.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Quarter Start"}),g.jsx("p",{className:"text-lg font-bold text-white",children:r||"TBD"})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Reporting Date"}),g.jsx("p",{className:"text-lg font-bold text-emerald-400",children:String(n||"Awaiting Data...")})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Days Left"}),g.jsxs("p",{className:"text-lg font-bold text-amber-400",children:[k," ",g.jsx("span",{className:"text-[10px] text-[#808080] ml-1 font-normal",children:"remaining"})]})]})]})]})}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:b.map((p,v)=>{const w=mb(p.perfIndex,p.isOffline);return g.jsxs("div",{className:`relative ${w.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555] shadow-sm`,children:[g.jsxs("div",{className:"flex justify-between items-start mb-6",children:[g.jsx("h3",{className:"text-xl font-bold text-white uppercase",children:p.market}),!p.isOffline&&g.jsx(e1,{className:`w-5 h-5 ${w.color}`})]}),g.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[g.jsxs("span",{className:"text-3xl font-bold text-white",children:[p.perfIndex.toFixed(1),"%"]}),g.jsx("span",{className:"text-[9px] font-bold text-[#808080] uppercase tracking-tighter",children:"INDEX"})]}),g.jsx("div",{className:"relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4",children:g.jsx("div",{className:`h-full ${w.accent} transition-all duration-1000`,style:{width:`${Math.min(p.perfIndex,100)}%`}})}),g.jsxs("div",{className:"flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]",children:[g.jsxs("div",{className:"text-[#808080] uppercase",children:["Actual: ",g.jsxs("span",{className:"text-white",children:[p.actual>0?"+":"",p.actual.toFixed(2),"%"]})]}),g.jsxs("div",{className:"text-[#808080] uppercase",children:["Target: ",g.jsxs("span",{className:"text-[#b0b0b0]",children:[p.target.toFixed(2),"%"]})]})]})]},v)})}),g.jsxs("div",{className:"space-y-8",children:[g.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("div",{className:"p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]",children:g.jsx(n1,{className:"w-6 h-6 text-amber-400"})}),g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold text-white uppercase",children:"Strategic Guidance"}),g.jsx("p",{className:"text-[#808080] text-xs uppercase tracking-widest mt-1 font-medium",children:"Data-Driven Directives & Overrides"})]})]}),g.jsxs("div",{className:"flex flex-wrap gap-3",children:[g.jsxs("button",{onClick:()=>m(!0),className:"flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all active:scale-95",children:[g.jsx(VN,{className:"w-4 h-4"})," Add Pointer"]}),g.jsxs("button",{onClick:()=>{if(M.length===0)return;const p="Market	Entity	Age	Gender	Directive	Justification",v=M.map(w=>`${w.country}	${w.campaign}	${w.age}	${w.gender}	${w.recommendation}	${w.justification}`).join(`
`);r_(`${p}
${v}`),T("Matrix Copied")},className:"flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] shadow-lg transition-all active:scale-95",children:[g.jsx(e_,{className:"w-4 h-4"})," Copy All"]}),g.jsxs("button",{onClick:()=>{A(new Set),l({}),h([]),T("Matrix Restored")},className:"flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a] active:scale-95",children:[g.jsx($N,{className:"w-4 h-4"})," Restore"]})]})]}),f&&g.jsxs("div",{className:"bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6 shadow-2xl animate-in fade-in zoom-in duration-200",children:[g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Market"}),g.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase text-white",value:O.country,onChange:p=>x(v=>({...v,country:p.target.value.toUpperCase()}))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Entity"}),g.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",placeholder:"e.g. Veo",value:O.campaign,onChange:p=>x(v=>({...v,campaign:p.target.value}))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Age"}),g.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:O.age,onChange:p=>x(v=>({...v,age:p.target.value}))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Gender"}),g.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:O.gender,onChange:p=>x(v=>({...v,gender:p.target.value}))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Directive"}),g.jsxs("select",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:O.recommendation,onChange:p=>x(v=>({...v,recommendation:p.target.value})),children:[g.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),g.jsx("option",{value:"SCALE",children:"SCALE"}),g.jsx("option",{value:"PAUSE",children:"PAUSE"})]})]})]}),g.jsx("textarea",{className:"w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] mb-4 resize-none",value:O.justification,onChange:p=>x(v=>({...v,justification:p.target.value})),placeholder:"Context..."}),g.jsxs("div",{className:"flex justify-end gap-3",children:[g.jsx("button",{type:"button",onClick:()=>m(!1),className:"bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg font-bold text-[10px] uppercase border border-[#3a3a3a]",children:"Cancel"}),g.jsx("button",{onClick:E,className:"bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase shadow-lg",children:"Confirm"})]})]}),g.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto shadow-sm",children:[g.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[g.jsx("thead",{children:g.jsxs("tr",{className:"bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold",children:[g.jsx("th",{className:"px-8 py-6 text-left",children:"Market"}),g.jsx("th",{className:"px-8 py-6 text-left",children:"Entity"}),g.jsx("th",{className:"px-8 py-6 text-center",children:"Age"}),g.jsx("th",{className:"px-8 py-6 text-center",children:"Gender"}),g.jsx("th",{className:"px-8 py-6 text-left",children:"Directive"}),g.jsx("th",{className:"px-8 py-6 text-left",children:"Justification"}),g.jsx("th",{className:"px-8 py-6 text-center",children:"Action"})]})}),g.jsx("tbody",{className:"divide-y divide-white/5",children:M.map(p=>{var v,w;return g.jsxs("tr",{className:`hover:bg-white/[0.02] group/row transition-colors ${p.recommendation==="PAUSE"?"bg-red-500/[0.03]":""}`,children:[g.jsx("td",{className:"px-8 py-4 font-bold uppercase text-blue-400",children:p.country}),g.jsx("td",{className:"px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]",children:p.campaign}),g.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase font-mono",children:p.age}),g.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase font-mono",children:p.gender}),g.jsx("td",{className:"px-8 py-4 font-bold",children:s===p.id?g.jsxs("select",{className:"bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] text-white",value:((v=o[p.id])==null?void 0:v.recommendation)||p.recommendation,onChange:S=>l(C=>({...C,[p.id]:{...C[p.id]||p,recommendation:S.target.value}})),children:[g.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),g.jsx("option",{value:"SCALE",children:"SCALE"}),g.jsx("option",{value:"PAUSE",children:"PAUSE"})]}):g.jsx("span",{className:p.recommendation==="PAUSE"?"text-red-400":p.recommendation==="SCALE"?"text-emerald-400":p.justification.includes("Learning")?"text-blue-400":"text-amber-400",children:p.recommendation})}),g.jsx("td",{className:"px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed",children:s===p.id?g.jsx("textarea",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] min-h-[60px] resize-none",value:((w=o[p.id])==null?void 0:w.justification)||p.justification,onChange:S=>l(C=>({...C,[p.id]:{...C[p.id]||p,justification:S.target.value}}))}):p.justification}),g.jsx("td",{className:"px-8 py-5 text-center",children:g.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity",children:[s===p.id?g.jsx("button",{onClick:()=>i(null),className:"p-2.5 rounded-xl bg-emerald-600 text-white",children:g.jsx(BN,{className:"w-4 h-4"})}):g.jsx("button",{onClick:()=>i(p.id),className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white",children:g.jsx(NN,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>{r_(`${p.country}	${p.campaign}	${p.age}	${p.gender}	${p.recommendation}	${p.justification}`),T("Row Copied")},className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400",children:g.jsx(e_,{className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>A(S=>new Set([...S,p.id])),className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500",children:g.jsx(s1,{className:"w-4 h-4"})})]})})]},p.id)})})]}),M.length===0&&g.jsxs("div",{className:"p-20 text-center",children:[g.jsx("div",{className:"text-[#555] font-bold uppercase tracking-widest text-[10px]",children:"Matrix Empty"}),g.jsx("div",{className:"mt-3 text-[#777] text-[10px] uppercase tracking-wider leading-relaxed max-w-2xl mx-auto",children:U.total===0?"No campaigns found in the Market Holdback data — check that the per-market Holdback CSVs were uploaded and analyzed.":`${U.total} campaigns scanned — ${U.skippedEnded} ended, ${U.evaluated} evaluated, ${U.noSignal} of those without a qualifying signal (no negative age-level lift and no stat-sig positive GenPop lift).`})]})]})]})]})},o_=({type:t,title:e,icon:n,tag:r,uploadedFiles:s,handleFileUpload:i})=>{const o=t==="pct",l=o?"bg-[#1a1500]":"bg-[#0a0a0a]",u=o?"border-amber-500/30":"border-blue-500/30",h=o?"text-amber-500":"text-blue-500",f=o?"bg-amber-500/20":"bg-blue-500/20";return g.jsxs("div",{className:`p-6 rounded-lg border ${u} ${l} mb-6 transition-all shadow-xl`,children:[g.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[g.jsx("div",{className:`p-2 rounded-lg flex items-center justify-center ${f} ${h}`,children:g.jsx(n,{className:"w-5 h-5"})}),g.jsxs("div",{className:"text-left",children:[g.jsx("h2",{className:`text-lg font-bold uppercase tracking-tight ${h}`,children:e}),g.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:r})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left items-stretch",children:[g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:m=>i(t,"global",m.target.files[0])}),g.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].global?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(t1,{className:"w-7 h-7"})}),g.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"Global Hub Master"}),g.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].global?s[t].global.name:"PUSH_MASTER_FILE"})]}),g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[g.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].countryHB).length>0?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(dN,{className:"w-7 h-7"})}),g.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Market Hub Nodes"}),g.jsx("div",{className:"w-full grid grid-cols-5 gap-1 px-1",children:Wr.map(m=>g.jsxs("div",{className:"relative aspect-square group/item",children:[g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:_=>i(t,"countryHB",_.target.files[0],m)}),g.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].countryHB[m]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:g.jsx("span",{className:"text-[7px] font-black uppercase",children:Ia[m]})})]},m))})]}),g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[g.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].alwaysOn).length>0?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(jd,{className:"w-7 h-7"})}),g.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Always-On Trends"}),g.jsx("div",{className:"w-full grid grid-cols-2 gap-1.5 px-2",children:Fd.filter(m=>m!=="JP Proactive Container").map(m=>g.jsxs("div",{className:"relative h-7 group/item",children:[g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:_=>i(t,"alwaysOn",_.target.files[0],m)}),g.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].alwaysOn[m]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:g.jsx("span",{className:"text-[7px] font-black uppercase",children:m})})]},m))})]}),g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:m=>i(t,"jpProactive",m.target.files[0])}),g.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].jpProactive?"bg-red-500/10 text-red-500":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(jd,{className:"w-7 h-7"})}),g.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"JP Proactive Container"}),g.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].jpProactive?s[t].jpProactive.name:"PUSH_JP_PROACTIVE_CSV"})]})]})]})},vb=({uploadedFiles:t,handleFileUpload:e,startAnalysis:n,isAnalyzing:r})=>g.jsx("div",{className:"min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0] overflow-y-auto no-scrollbar",children:g.jsxs("div",{className:"max-w-[1500px] w-full z-10 text-center",children:[g.jsxs("div",{className:"mb-12",children:[g.jsx("div",{className:"inline-block mb-4",children:g.jsx("div",{className:"bg-[#FF0000] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-red-500/20",children:g.jsx(ZE,{className:"text-white w-8 h-8"})})}),g.jsxs("h1",{className:"text-4xl font-bold tracking-tighter mb-1 uppercase flex items-center justify-center gap-5",children:["Shorts Brain ",g.jsx("span",{className:"text-[#FF0000]",children:"2.0"}),g.jsx("a",{href:o1,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#555] hover:text-white hover:bg-white/10 transition-all hover:scale-105 group shadow-lg",title:"Open Resource Drive",children:g.jsx(u1,{className:"w-6 h-6"})})]}),g.jsx("p",{className:"text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase",children:"APAC Marketing Incrementality Hub"})]}),g.jsxs("div",{className:"p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all shadow-xl",children:[g.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[g.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500",children:g.jsx(qN,{className:"w-5 h-5"})}),g.jsxs("div",{className:"text-left",children:[g.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-emerald-500",children:"Structural Metadata Configuration"}),g.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Campaign Definitions & State Instructions"})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:[g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[g.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.campaignInfo?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(ZP,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex-1 text-left min-w-0",children:[g.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"structural hierarchy"}),g.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.campaignInfo?t.shared.campaignInfo.name:"PUSH_STRUCTURAL_CSV"})]}),g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("shared","campaignInfo",s.target.files[0])})]}),g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[g.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.pauseRelive?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(LN,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex-1 text-left min-w-0",children:[g.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"State Instructions"}),g.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.pauseRelive?t.shared.pauseRelive.name:"PUSH_INSTRUCTIONS_CSV"})]}),g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("shared","pauseRelive",s.target.files[0])})]})]})]}),g.jsx(o_,{type:"pct",title:"Ratio-Based Analysis",tag:"Relative Lift Streams (%)",icon:i1,uploadedFiles:t,handleFileUpload:e}),g.jsx(o_,{type:"abs",title:"Volume-Based Analysis",tag:"Discrete Delta Streams (Delta)",icon:FP,uploadedFiles:t,handleFileUpload:e}),g.jsxs("div",{className:"p-6 rounded-lg border border-purple-500/30 bg-[#0d0a1a] mb-6 transition-all shadow-xl",children:[g.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[g.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500",children:g.jsx(r1,{className:"w-5 h-5"})}),g.jsxs("div",{className:"text-left",children:[g.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-purple-500",children:"Attribution Analysis"}),g.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Marketing Pressure & Reach Metrics"})]})]}),g.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:g.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[g.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.attribution.impressions?"bg-purple-500/10 text-purple-400":"bg-[#1a1a1a] text-[#555]"}`,children:g.jsx(e1,{className:"w-6 h-6"})}),g.jsxs("div",{className:"flex-1 text-left min-w-0",children:[g.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Impressions/CTR CSV"}),g.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.attribution.impressions?t.attribution.impressions.name:"PUSH_IMPRESSIONS_CTR_CSV"})]}),g.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("attribution","impressions",s.target.files[0])})]})})]}),g.jsxs("button",{type:"button",onClick:()=>n(),disabled:r,className:"px-12 py-5 rounded-2xl font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-4 mx-auto uppercase mt-8 border border-white/10 shadow-2xl shadow-red-500/30 active:scale-95 disabled:opacity-50",children:[r?g.jsx(UN,{className:"w-5 h-5 animate-spin"}):g.jsx(DN,{className:"w-5 h-5"}),r?"Processing APAC Data Streams...":"Execute Intelligent Engine"]})]})}),wb=({userEmail:t})=>{const[e,n]=ee.useState(!1),[r,s]=ee.useState(!1),[i,o]=ee.useState("OKR"),[l,u]=ee.useState(!0),[h,f]=ee.useState(["DAU-SCT"]),[m,_]=ee.useState(!1),[A,P]=ee.useState("India"),[N,O]=ee.useState(null),[x,T]=ee.useState("2026-02-01"),[k,b]=ee.useState(null),[M,U]=ee.useState(!1),[E,p]=ee.useState(!1),v=ab.includes((t||"").toLowerCase()),w=ee.useRef(!1),S=ee.useRef(null),[C,I]=ee.useState({AlwaysOn:"India",ScaledCreation:"India",Effects:"India",Trends:"India",CultMo:"India",ArtMo:"India","GenAI Hub":"India"}),[X,fe]=ee.useState({AlwaysOn:"SSC",ScaledCreation:"",Effects:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":""}),[nt,Ce]=ee.useState({AlwaysOn:"",ScaledCreation:"",Effects:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":""}),[H,J]=ee.useState([]),[B,pe]=ee.useState({}),[ae,Ve]=ee.useState({}),[Ue,Nt]=ee.useState({pct:{global:null,countryHB:{},alwaysOn:{}},abs:{global:null,countryHB:{},alwaysOn:{}},shared:{campaignInfo:null,pauseRelive:null},attribution:{impressions:null}}),[pt,En]=ee.useState([]),hn=ee.useCallback(V=>{const z=[],$={};Wr.forEach(te=>$[te]=[]);const W={},Z=(te,ce,Ie=null,rt=null)=>{const wt=te.meta||{};let Xe=Ie||qe(wt.tab),lt=rt||qe(wt.subTab)||"Generic",ye=te.market||ce||"India";const Ne=ht(te.country);(qe(wt.subTab).toUpperCase()==="JP PROACTIVE CONTAINER"||qe(wt.subSubTab).toUpperCase()==="JP PROACTIVE CONTAINER")&&(Xe="AlwaysOn",lt="JP Proactive Container",ye="Japan");const st=yh.find(nn=>Bt(nn.id,Xe)||Bt(nn.label,Xe));if(st){const nn=qe(wt.subSubTab)||"Default";W[st.id]||(W[st.id]={}),W[st.id][ye]||(W[st.id][ye]={}),W[st.id][ye][lt]||(W[st.id][ye][lt]={}),W[st.id][ye][lt][nn]||(W[st.id][ye][lt][nn]={}),W[st.id][ye][lt][nn][Ne]=te}};V.forEach(te=>{const ce=gb(te);ce._source==="global"?(z.push(ce),Z(ce,"APAC")):ce._source==="market"?($[ce._market]&&$[ce._market].push(ce),Z(ce,ce._market)):ce._source==="alwaysOn"?Z(ce,null,"AlwaysOn",ce._category):ce._source==="jpProactive"&&Z(ce,"Japan","AlwaysOn","JP Proactive Container")});const ie={};return Object.keys(W).forEach(te=>{ie[te]={},Object.keys(W[te]).forEach(ce=>{ie[te][ce]={},Object.keys(W[te][ce]).forEach(Ie=>{ie[te][ce][Ie]={},Object.keys(W[te][ce][Ie]).forEach(rt=>{ie[te][ce][Ie][rt]=Object.values(W[te][ce][Ie][rt])})})})}),{gData:z,rData:$,cHub:ie}},[]);ee.useEffect(()=>{if(!k)return;const V=Yy(Dn(bn,"shortsbrain_data","latest"),async z=>{if(z.exists()){const $=z.data();if($.batchId&&$.chunkCount!==void 0){let W=[];const Z=[];for(let te=0;te<$.chunkCount;te++)Z.push(wl(Dn(bn,"shortsbrain_data",`chunk_${$.batchId}_${te}`)));if((await Promise.all(Z)).forEach(te=>{te.exists()&&te.data().data&&(W=W.concat(te.data().data))}),W.length>0){const{gData:te,rData:ce,cHub:Ie}=hn(W);J(te),pe(ce),Ve(Ie),$.reportingDate&&O($.reportingDate),$.quarterStart&&T($.quarterStart),o("OKR"),w.current=!0}}else if($.chunkCount!==void 0&&!$.batchId){let W=[];for(let Z=0;Z<$.chunkCount;Z++){const ie=await wl(Dn(bn,"shortsbrain_data",`latest_chunk_${Z}`));ie.exists()&&ie.data().data&&(W=W.concat(ie.data().data))}if(W.length>0){const{gData:Z,rData:ie,cHub:te}=hn(W);J(Z),pe(ie),Ve(te),$.reportingDate&&O($.reportingDate),$.quarterStart&&T($.quarterStart),o("OKR"),w.current=!0}}else if($.masterList){const{gData:W,rData:Z,cHub:ie}=hn($.masterList);J(W),pe(Z),Ve(ie),$.reportingDate&&O($.reportingDate),$.quarterStart&&T($.quarterStart),o("OKR"),w.current=!0}}},z=>{console.error("Persistent memory restore failed:",z)});return()=>V()},[k,hn]);const dn=globalThis.__app_id??"shorts-brain-v2",Qe=ee.useMemo(()=>i==="Global Hub"||i==="AlwaysOn"?Ir.filter(V=>V!=="Impressions"&&V!=="CTR"):Ir,[i]),fn=ee.useMemo(()=>{var W;const V=C[i],z=(W=ae[i])==null?void 0:W[V];return z?Object.keys(z).sort():[]},[i,C,ae]),tn=ee.useMemo(()=>{var W,Z;const V=C[i],z=X[i],$=(Z=(W=ae[i])==null?void 0:W[V])==null?void 0:Z[z];return $?Object.keys($).sort():[]},[i,C,X,ae]);ee.useEffect(()=>{const V=ew(ob,b);return()=>V()},[]),ee.useEffect(()=>{if(!k)return;const V=jE(bn,"artifacts",dn,"public","data","snapshots"),z=Yy(V,$=>{const Z=[...$.docs.map(ie=>({...ie.data(),id:ie.id})).filter(ie=>!ie.id.includes("_chunk_"))].sort((ie,te)=>(te.timestamp||0)-(ie.timestamp||0));En(Z)},$=>console.error("Firestore Error:",$));return()=>z()},[k,dn]),ee.useEffect(()=>{f(V=>{const z=V.filter($=>Qe.includes($));return z.length>0?z:[Qe[0]]})},[Qe]);const ai=async V=>{if(k)try{const z=`snap_${Date.now()}`,$=V.masterList,W=V.batchId||Date.now().toString(),Z=100,ie=[];for(let ce=0;ce<$.length;ce+=Z)ie.push($.slice(ce,ce+Z));const te=ie.map((ce,Ie)=>El(Dn(bn,"artifacts",dn,"public","data","snapshots",`${z}_chunk_${W}_${Ie}`),{data:ce}));await Promise.all(te),await El(Dn(bn,"artifacts",dn,"public","data","snapshots",z),{batchId:W,chunkCount:ie.length,timestamp:Date.now(),weekId:n_(V.reportingDate),quarterStart:x})}catch(z){console.error("Cloud Save Error:",z)}},li=async()=>{s(!0);try{const V=le=>new Promise(be=>{le||be("");const Q=new FileReader;Q.onload=je=>be(je.target.result),Q.readAsText(le)});let z={};if(Ue.shared.campaignInfo){const be=(await V(Ue.shared.campaignInfo)).split(/\r?\n/).filter(Q=>Q.trim()!=="");if(be.length>1){const Q=Gr(be[0]),je=$e(Q,["Campaign","Campaign Name"]),re=$e(Q,["Market","Country"]),ut=$e(Q,["Campaign Tabs","Tabs","Tab"]),_e=$e(Q,["Campaign Sub tabs","Sub tabs","Sub tab","Sub category"]),Pe=$e(Q,["Campaign Hub Sub Sub tabs","Sub sub tabs","Sub sub tab"]),me=$e(Q,["Start Date"]),Re=$e(Q,["End Date"]),Ae=$e(Q,["Optimisation End Date"]),Se=$e(Q,["Age"]),ct=$e(Q,["Gender"]);be.slice(1).forEach(Me=>{const De=Gr(Me),Qt=qe(De[je]);if(Qt){const fr=qe(De[re]).toUpperCase(),it=Ud[fr]||Wr.find(Vr=>Bt(Vr,fr))||"India";z[ht(it)]||(z[ht(it)]={});const bt=ht(Qt);if(z[ht(it)][bt]||(z[ht(it)][bt]={market:it,tab:qe(De[ut]),subTab:qe(De[_e]),subSubTab:qe(De[Pe]),campaignStartDate:qe(De[me]),campaignEndDate:qe(De[Re]),optimisationEndDate:qe(De[Ae]),targeting:{ages:[],genders:[]}}),Se!==-1&&De[Se]){const Vr=qe(De[Se]).toLowerCase().split(",").map(mt=>mt.trim()),At=[];Vr.forEach(mt=>{mt.includes("18-24")&&At.push("18-24"),mt.includes("25-34")&&At.push("25-34"),mt.includes("18-34")&&At.push("18-34"),(mt.includes("35-44")||mt.includes("35+"))&&At.push("35+")}),At.includes("18-24")&&At.includes("25-34")&&At.push("18-34"),At.push("total"),z[ht(it)][bt].targeting.ages=[...new Set([...z[ht(it)][bt].targeting.ages,...At])]}if(ct!==-1&&De[ct]){const Vr=qe(De[ct]).toLowerCase().split(",").map(mt=>mt.trim()),At=[];Vr.forEach(mt=>{(mt==="male"||mt==="m")&&At.push("male"),(mt==="female"||mt==="f")&&At.push("female")}),At.push("total"),z[ht(it)][bt].targeting.genders=[...new Set([...z[ht(it)][bt].targeting.genders,...At])]}}})}}let $={};if(Ue.shared.pauseRelive){const be=(await V(Ue.shared.pauseRelive)).split(/\r?\n/).filter(Q=>Q.trim()!=="");if(be.length>1){const Q=Gr(be[0]),je=$e(Q,["Campaign","Campaign Name"]),re=$e(Q,["Market","Country"]),ut=$e(Q,["Age"]),_e=$e(Q,["Gender"]),Pe=$e(Q,["Instruction","Action"]),me=$e(Q,["Launch Date"]);be.slice(1).forEach(Re=>{const Ae=Gr(Re),Se=ht(Ae[je]),ct=qe(Ae[re]),Me=ht(Ud[ct.toUpperCase()]||ct);if(Se&&Me){const De=(qe(Ae[ut])||"total").toLowerCase().replace(/[^a-z0-9+]/g,""),Qt=De==="genpop"?"total":De,fr=(qe(Ae[_e])||"total").toLowerCase(),it=fr==="genpop"?"total":fr;$[Me]||($[Me]={}),$[Me][Se]||($[Me][Se]={}),$[Me][Se][it]||($[Me][Se][it]={});const bt=qe(Ae[Pe]).toUpperCase();bt==="PAUSE"?$[Me][Se][it][Qt]=qe(Ae[me]):(bt==="RELIVE"||bt==="RELAUNCH"||bt==="LIVE")&&delete $[Me][Se][it][Qt]}})}}let W=null,Z=x;const ie=async(le,be=!1)=>{const Q=Ue[le];let je={};if(Q.global){const Pe=await V(Q.global);if(le==="pct"){const me=Pe.split(/\r?\n/).filter(ct=>ct.trim()!==""),Re=Gr(me[0]),Ae=$e(Re,["Latest Date","Date","Reporting Date"]),Se=$e(Re,["Quarter Start Date","Quarter Start"]);if(me.length>1){const ct=Gr(me[1]);if(Ae!==-1){const Me=xr(ct[Ae]);Me&&(W=Me,O(Me))}if(Se!==-1){const Me=xr(ct[Se]);Me&&(Z=Me,T(Me))}}}je=Co(Pe,{},z,["Country","Market","Campaign"],be,null,!0,!1)}const re={};for(const Pe of Wr)Q.countryHB[Pe]&&(re[Pe]=Co(await V(Q.countryHB[Pe]),{},z,void 0,be,Pe,!1,!1));const ut={};for(const Pe of Fd)Pe!=="JP Proactive Container"&&Q.alwaysOn[Pe]&&(ut[Pe]=Co(await V(Q.alwaysOn[Pe]),{},z,void 0,be,null,!1,!0));let _e={};return Q.jpProactive&&(_e=Co(await V(Q.jpProactive),{},z,void 0,be,"Japan",!1,!0)),{sgd:je,mh:re,ao:ut,jpProactive:_e}},te=await ie("pct",!1),ce=await ie("abs",!0);let Ie={};if(Ue.attribution.impressions){const le=await V(Ue.attribution.impressions);Ie=Co(le,{},z,["Campaign","Campaign Name","Entity"],!0,null,!1,!1)}const rt=le=>le.includes("_")?le.substring(le.indexOf("_")+1):le,wt=(le,be,Q={})=>{const je={...le};return Object.keys(be).forEach(re=>{const ut=Object.keys(je).find(_e=>Bt(_e,re))||Object.keys(je).find(_e=>Bt(rt(_e),rt(re)))||re;je[ut]?Ir.forEach(_e=>{_e!=="Impressions"&&_e!=="CTR"&&Ot.forEach(Pe=>{sn.forEach(me=>{const Re=be[re].metrics[_e][Pe][me].abs;Re!==0&&Re!=="NA"&&(je[ut].metrics[_e][Pe][me].abs=Re)})})}):je[ut]=be[re]}),Object.keys(Q).forEach(re=>{const ut=Object.keys(je).find(_e=>{const Pe=rt(_e),me=rt(re);if(je[_e].isAnchor&&Q[re].isAnchor){const Re=je[_e].market==="IN"?"India":je[_e].market,Ae=Q[re].market==="IN"?"India":Q[re].market,Se=Q[re].country==="IN"?"India":Q[re].country;return Bt(Re,Ae)||Bt(je[_e].country,Se)||Bt(Re,Se)}return Bt(_e,re)||_e.includes(re)||re.includes(_e)||Bt(Pe,me)});ut&&Ot.forEach(_e=>{sn.forEach(Pe=>{var Ae,Se,ct,Me,De,Qt;const me=((ct=(Se=(Ae=Q[re].metrics.Impressions)==null?void 0:Ae[_e])==null?void 0:Se[Pe])==null?void 0:ct.v)||0;me>0&&(je[ut].metrics.Impressions[_e][Pe].v=me);const Re=((Qt=(De=(Me=Q[re].metrics.CTR)==null?void 0:Me[_e])==null?void 0:De[Pe])==null?void 0:Qt.v)||0;Re>0&&(je[ut].metrics.CTR[_e][Pe].v=Re)})})}),Object.values(je).forEach(re=>{const ut=ht(re.market),_e=ht(re.country),Pe=l1(re.optimisationEndDate,re.campaignEndDate);Ir.forEach(me=>{Ot.forEach(Re=>{sn.forEach(Ae=>{var ct,Me;if(Pe){re.metrics[me][Re][Ae].isPaused=!0,re.metrics[me][Re][Ae].launchDate=re.campaignEndDate||"Ended";return}const Se=(ct=$[ut])==null?void 0:ct[_e];if(Se){const De=Ae.replace(/[^a-z0-9+]/g,""),Qt=De==="1824"||De==="2534"?"1834":null,fr=[[Re,De],Qt?[Re,Qt]:null,[Re,"total"],["total",De],Qt?["total",Qt]:null,["total","total"]].filter(Boolean);for(const[it,bt]of fr)if((Me=Se[it])!=null&&Me[bt]){re.metrics[me][Re][Ae].isPaused=!0,re.metrics[me][Re][Ae].launchDate=Se[it][bt];break}}})}),sn.forEach(Re=>{const Ae=re.metrics[me].male[Re],Se=re.metrics[me].female[Re];if(Ae&&Se&&Ae.isPaused&&Se.isPaused){re.metrics[me].total[Re].isPaused=!0;const ct=new Date(Ae.launchDate||0),Me=new Date(Se.launchDate||0);re.metrics[me].total[Re].launchDate=(ct>=Me?Ae.launchDate:Se.launchDate)||"Ended"}})})}),je},Xe=[],lt=wt(te.sgd,ce.sgd,Ie);Object.values(lt).forEach(le=>{le._source="global",Xe.push(Il(le))}),Wr.forEach(le=>{const be=wt(te.mh[le]||{},ce.mh[le]||{},Ie);Object.values(be).forEach(Q=>{Q._source="market",Q._market=le,Xe.push(Il(Q))})}),Fd.forEach(le=>{if(le!=="JP Proactive Container"){const be=wt(te.ao[le]||{},ce.ao[le]||{},Ie);Object.values(be).forEach(Q=>{Q._source="alwaysOn",Q._category=le,Xe.push(Il(Q))})}});const ye=wt(te.jpProactive||{},ce.jpProactive||{},Ie);Object.values(ye).forEach(le=>{le._source="jpProactive",Xe.push(Il(le))});const{gData:Ne,rData:st,cHub:nn}=hn(Xe);J(Ne),pe(st),Ve(nn),w.current=!0,o("OKR"),n(!1);try{const le=Date.now().toString(),be=100,Q=[];for(let re=0;re<Xe.length;re+=be)Q.push(Xe.slice(re,re+be));const je=Q.map((re,ut)=>El(Dn(bn,"shortsbrain_data",`chunk_${le}_${ut}`),{data:re}));await Promise.all(je),await El(Dn(bn,"shortsbrain_data","latest"),{batchId:le,chunkCount:Q.length,reportingDate:W,quarterStart:Z,lastUpdated:new Date().toISOString()}),await ai({masterList:Xe,reportingDate:W,quarterStart:Z,batchId:le}),Tl("snapshot_saved",{week_id:n_(W)})}catch(le){console.error("Cloud save failed:",le),window.alert(`Analysis complete, but saving to cloud memory failed — this data will NOT survive a refresh.

Error: ${(le==null?void 0:le.message)||le}`)}}catch(V){console.error("Analysis failed:",V)}finally{s(!1)}},_c=(V,z,$,W)=>Nt(Z=>{const ie={...Z[V]};return z==="countryHB"||z==="alwaysOn"?ie[z]={...ie[z],[W]:$}:ie[z]=$,{...Z,[V]:ie}}),ao=async()=>{if(!E){p(!0);try{const[{default:V},{jsPDF:z}]=await Promise.all([Eg(()=>import("./html2canvas.esm-CBrSDip1.js"),[]),Eg(()=>import("./jspdf.es.min-B_qx1i6B.js").then(ye=>ye.j),[])]),$=S.current;if(!$)throw new Error("Content pane not mounted");let W=0;$.querySelectorAll(".overflow-x-auto, .overflow-auto").forEach(ye=>{ye.scrollWidth>ye.clientWidth&&(W=Math.max(W,ye.scrollWidth-ye.clientWidth))});const Z=$.scrollWidth+W,ie=$.scrollHeight,te=16e3,ce=Math.max(.5,Math.min(1.5,te/Z,te/ie)),Ie=await V($,{backgroundColor:"#0a0a0a",scale:ce,useCORS:!0,logging:!1,width:Z,height:ie,windowWidth:Z,windowHeight:ie,onclone:ye=>{ye.querySelectorAll(".overflow-hidden, .overflow-auto, .overflow-x-auto, .overflow-y-auto").forEach(Ne=>{Ne.style.overflow="visible",Ne.style.maxHeight="none"}),ye.querySelectorAll(".h-screen").forEach(Ne=>{Ne.style.height="auto"}),ye.querySelectorAll("table").forEach(Ne=>{Ne.style.width="max-content",Ne.style.minWidth="100%"}),ye.querySelectorAll(".sticky").forEach(Ne=>{Ne.style.position="static"})}}),rt=Math.floor(Ie.width*(210/297)),wt=Math.max(1,Math.ceil(Ie.height/rt)),Xe=new z({orientation:"landscape",unit:"px",format:[Ie.width,rt],hotfixes:["px_scaling"]});for(let ye=0;ye<wt;ye++){ye>0&&Xe.addPage([Ie.width,rt],"landscape");const Ne=document.createElement("canvas");Ne.width=Ie.width,Ne.height=Math.min(rt,Ie.height-ye*rt);const st=Ne.getContext("2d");st.fillStyle="#0a0a0a",st.fillRect(0,0,Ne.width,Ne.height),st.drawImage(Ie,0,ye*rt,Ie.width,Ne.height,0,0,Ie.width,Ne.height),Xe.addImage(Ne.toDataURL("image/jpeg",.92),"JPEG",0,0,Ne.width,Ne.height)}const lt=String(i).replace(/\s+/g,"");Xe.save(`ShortsBrain_${lt}_${N||"Snapshot"}.pdf`),Tl("pdf_exported",{tab_id:i,pages:wt})}catch(V){console.error("PDF export failed:",V),window.alert(`PDF export failed: ${(V==null?void 0:V.message)||V}`)}finally{p(!1)}}};return e?g.jsx(vb,{uploadedFiles:Ue,handleFileUpload:_c,startAnalysis:li,isAnalyzing:r}):g.jsxs("div",{className:"flex h-screen bg-black text-[#e0e0e0] overflow-hidden font-sans",children:[g.jsxs("aside",{className:`${l?"w-72":"w-20"} transition-all duration-300 bg-[#111] border-r border-[#2a2a2a] flex flex-col z-50`,children:[g.jsxs("div",{className:"p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#2a2a2a] relative group",children:[g.jsx("div",{className:"bg-[#FF0000] p-2 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20",children:g.jsx(ZE,{className:"text-white w-5 h-5"})}),l&&g.jsxs("div",{className:"flex-1",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("h2",{className:"text-lg font-bold tracking-tight",children:["BRAIN ",g.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),g.jsx("a",{href:o1,target:"_blank",rel:"noopener noreferrer",className:"text-[#444] hover:text-white transition-colors",title:"Source Drive",children:g.jsx(u1,{className:"w-4 h-4"})})]}),g.jsx("p",{className:"text-[8px] font-bold uppercase text-[#555] tracking-widest",children:"APAC Marketing Hub"})]})]}),g.jsxs("nav",{className:"flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar",children:[hb.map(V=>{const z=V.icon;return g.jsxs("button",{type:"button",onClick:()=>{if(V.id==="Upload"){if(!v){U(!0);return}U(!1),w.current=!0,n(!0)}else U(!1),o(V.id),Tl("tab_viewed",{tab_id:V.id})},className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${i===V.id?"bg-[#FF0000]/10 text-[#FF0000]":V.id==="Upload"&&!v?"text-[#444] cursor-not-allowed":"text-[#808080] hover:text-white"}`,children:[g.jsx(z,{className:"w-5 h-5 shrink-0"}),l&&g.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:V.label}),l&&V.id==="Upload"&&!v&&g.jsx("span",{className:"ml-auto text-[7px] font-bold text-[#444] uppercase",children:"Read-only"})]},V.id)}),g.jsx("div",{className:"my-4 border-t border-[#222]"}),g.jsxs("button",{type:"button",onClick:()=>_(!m),className:"w-full flex items-center justify-between p-3 rounded-xl text-[#808080] hover:text-white cursor-pointer",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx(pN,{className:"w-5 h-5 shrink-0"}),l&&g.jsx("span",{className:"text-[11px] font-bold uppercase tracking-widest",children:"Campaign Hub"})]}),l&&(m?g.jsx(YP,{className:"w-4 h-4"}):g.jsx(qP,{className:"w-4 h-4"}))]}),m&&l&&g.jsx("div",{className:"pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300",children:yh.map(V=>{const z=V.icon;return g.jsxs("button",{type:"button",onClick:()=>{o(V.id),Tl("tab_viewed",{tab_id:"Campaign Hub",sub_view:V.id})},className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${i===V.id?"bg-[#FF0000]/10 text-[#FF0000]":"text-[#555] hover:bg-white/5 hover:text-white"}`,children:[g.jsx(z,{className:"w-4 h-4"}),V.label]},V.id)})}),l&&pt.length>0&&g.jsxs("div",{className:"mt-8 pt-4 border-t border-[#222]",children:[g.jsxs("div",{className:"flex items-center gap-2 px-3 mb-3",children:[g.jsx(lN,{className:"w-4 h-4 text-[#444]"}),g.jsx("span",{className:"text-[10px] font-bold uppercase text-[#444] tracking-widest",children:"Memory"})]}),g.jsx("div",{className:"space-y-1 max-h-[300px] overflow-y-auto no-scrollbar",children:pt.map(V=>g.jsxs("div",{className:"w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all hover:bg-white/5 group",children:[g.jsx("button",{type:"button",onClick:async()=>{if(V.batchId&&V.chunkCount!==void 0){let z=[];const $=[];for(let Z=0;Z<V.chunkCount;Z++)$.push(wl(Dn(bn,"artifacts",dn,"public","data","snapshots",`${V.id}_chunk_${V.batchId}_${Z}`)));if((await Promise.all($)).forEach(Z=>{Z.exists()&&Z.data().data&&(z=z.concat(Z.data().data))}),z.length>0){const{gData:Z,rData:ie,cHub:te}=hn(z);J(Z),pe(ie),Ve(te)}}else if(V.chunkCount!==void 0&&!V.batchId){let z=[];for(let ie=0;ie<V.chunkCount;ie++){const te=await wl(Dn(bn,"artifacts",dn,"public","data","snapshots",`${V.id}_chunk_${ie}`));te.exists()&&te.data().data&&(z=z.concat(te.data().data))}const{gData:$,rData:W,cHub:Z}=hn(z);J($),pe(W),Ve(Z)}else J(V.globalData||[]),pe(V.regionalData||{}),Ve(V.campaignHubData||{});O(V.reportingDate),V.quarterStart&&T(V.quarterStart),o("OKR"),n(!1)},className:"flex-1 text-[10px] font-bold text-[#666] group-hover:text-white",children:String(V.weekId||"Snapshot")}),g.jsx("button",{type:"button",onClick:()=>RP(Dn(bn,"artifacts",dn,"public","data","snapshots",V.id)),className:"opacity-0 group-hover:opacity-100 transition-opacity",children:g.jsx(s1,{className:"w-3 h-3 text-red-500"})})]},V.id))})]})]}),l&&(k==null?void 0:k.email)&&g.jsxs("div",{className:"px-4 py-3 border-t border-[#2a2a2a]",children:[g.jsx("div",{className:"text-[8px] font-mono text-[#555] truncate",children:k.email}),g.jsx("div",{className:"text-[8px] mt-0.5 uppercase tracking-wider font-bold",children:v?g.jsx("span",{className:"text-emerald-400",children:"Ingestion Admin"}):g.jsx("span",{className:"text-[#555]",children:"Read-only"})})]}),M&&l&&g.jsx("div",{className:"mx-4 mb-2 px-3 py-2 rounded-lg bg-red-900/30 border border-red-500/30 text-[8px] text-red-400 font-bold uppercase tracking-wider",children:"Access restricted"}),g.jsx("button",{type:"button",onClick:()=>u(!l),className:"p-6 border-t border-[#2a2a2a] text-[#555] hover:text-white flex items-center justify-center",children:l?g.jsx(nb,{className:"w-5 h-5"}):g.jsx(kN,{className:"w-5 h-5"})})]}),g.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[g.jsxs("header",{className:"px-8 py-5 border-b border-[#2a2a2a] flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-40",children:[g.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-widest",children:i}),g.jsxs("button",{type:"button",onClick:ao,disabled:E,className:"bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] shadow-xl flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-wait",children:[E?g.jsx(SN,{className:"w-3.5 h-3.5 animate-spin"}):g.jsx(cN,{className:"w-3.5 h-3.5"}),E?"Exporting…":"Export PDF"]})]}),g.jsxs("main",{ref:S,className:"flex-1 overflow-auto p-10 relative no-scrollbar",children:[i==="OKR"&&g.jsx(_b,{globalData:H,regionalData:B,latestDate:N,quarterStart:x}),(i==="Global Hub"||i==="Market Hub")&&g.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[g.jsx(s_,{activeMetrics:h,allowedMetrics:Qe,toggleMetric:V=>f(z=>z.includes(V)?z.length>1?z.filter($=>$!==V):z:[...z,V]),handleAllToggle:()=>f(V=>V.length===Qe.length?["DAU-SCT"]:[...Qe])}),i==="Market Hub"&&g.jsx("div",{className:"flex flex-wrap items-center gap-4",children:g.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[g.jsx(t_,{className:"w-6 h-6 text-red-600"}),g.jsx("select",{value:A,onChange:V=>P(V.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:Wr.map(V=>g.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))})]})}),g.jsx(i_,{data:i==="Global Hub"?H:(()=>{const z=(B[A]||[]).filter(W=>W.country&&W.country.toUpperCase()!=="UNKNOWN"&&(Bt(W.market,A)||Bt(W.market,Ia[A]))),$=H.find(W=>Bt(W.country,A)||Bt(W.country,Ia[A]));return $?[{...$,isAnchor:!0},...z]:z})(),activeMetrics:h,latestGlobalDate:N,isCampaignView:i==="Market Hub",hideDates:i==="Global Hub"})]}),yh.some(V=>V.id===i)&&g.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[g.jsx(s_,{activeMetrics:h,allowedMetrics:Qe,toggleMetric:V=>f(z=>z.includes(V)?z.length>1?z.filter($=>$!==V):z:[...z,V]),handleAllToggle:()=>f(V=>V.length===Qe.length?["DAU-SCT"]:[...Qe])}),g.jsxs("div",{className:"flex flex-wrap gap-4",children:[g.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[g.jsx(t_,{className:"w-6 h-6 text-red-600"}),g.jsx("select",{value:C[i],onChange:V=>I(z=>({...z,[i]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:Wr.map(V=>g.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))})]}),fn.length>0&&g.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[g.jsx(gN,{className:"w-6 h-6 text-amber-500"}),g.jsxs("select",{value:X[i],onChange:V=>fe(z=>({...z,[i]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:[g.jsx("option",{value:"",children:"ALL SUB TABS"}),fn.map(V=>g.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))]})]}),i!=="AlwaysOn"&&tn.length>0&&X[i]!==""&&g.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[g.jsx(TN,{className:"w-6 h-6 text-purple-500"}),g.jsxs("select",{value:nt[i],onChange:V=>Ce(z=>({...z,[i]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:[g.jsx("option",{value:"",children:"ALL SUB SUB TABS"}),tn.map(V=>g.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))]})]})]}),g.jsx(i_,{data:(()=>{var Z,ie,te,ce,Ie,rt,wt,Xe;const V=C[i],z=X[i],$=nt[i];if(i==="AlwaysOn"&&z==="JP Proactive Container"){const lt=(ie=(Z=ae.AlwaysOn)==null?void 0:Z.Japan)==null?void 0:ie["JP Proactive Container"];return lt?Object.values(lt).flatMap(ye=>Array.isArray(ye)?ye:Object.values(ye).flat()):[]}if(!z){const lt=(te=ae[i])==null?void 0:te[V];return lt?Object.values(lt).flatMap(ye=>Object.values(ye).flat()):[]}if(!$||i==="AlwaysOn"){const lt=(Ie=(ce=ae[i])==null?void 0:ce[V])==null?void 0:Ie[z];if(!lt)return[];const ye=Object.values(lt).flat();return i==="AlwaysOn"?[...ye].sort((Ne,st)=>(Ne.explicitTrendStart||Ne.dataMinDate||"").localeCompare(st.explicitTrendStart||st.dataMinDate||"")):ye}return((Xe=(wt=(rt=ae[i])==null?void 0:rt[V])==null?void 0:wt[z])==null?void 0:Xe[$])||[]})(),activeMetrics:h,latestGlobalDate:N,isCampaignView:!0,isAlwaysOn:i==="AlwaysOn",ignorePaused:!0})]})]})]}),g.jsx("style",{children:`  
        ::-webkit-scrollbar { width: 5px; height: 5px; }  
        ::-webkit-scrollbar-track { background: transparent; }  
        ::-webkit-scrollbar { display: none; }  
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 10px; }  
        ::-webkit-scrollbar-thumb:hover { background: #444; }  
        .no-scrollbar::-webkit-scrollbar { display: none; }  
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; }  
        .animate-in { animation: fadeIn 0.4s ease-out; }  
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }  
      `})]})},_h=dw(Fa),Eb=new yr;function Tb(t){return t?t==="ivanho.wz@gmail.com"?!0:t.endsWith("@google.com"):!1}const a_={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},l_={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},Ib={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},Sb={color:"#f87171",marginTop:16,fontSize:14},u_={color:"#737373",fontSize:13,marginTop:8};function xb({children:t}){const[e,n]=ee.useState(null),[r,s]=ee.useState(!0),[i,o]=ee.useState(null),[l,u]=ee.useState(!1);ee.useEffect(()=>ew(_h,f=>{f&&!Tb(f.email)?(IA(_h),n(null),o(`${f.email} is not authorized.`)):(n(f),o(null)),s(!1)}),[]);const h=async()=>{u(!0),o(null);try{await BA(_h,Eb)}catch(f){o((f==null?void 0:f.message)||"Sign-in failed.")}finally{u(!1)}};return r?g.jsx("div",{style:a_,children:g.jsx("div",{style:l_,children:g.jsx("p",{style:u_,children:"Loading…"})})}):e?gr.Children.map(t,f=>gr.isValidElement(f)?gr.cloneElement(f,{userEmail:e.email}):f):g.jsx("div",{style:a_,children:g.jsxs("div",{style:l_,children:[g.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Brain"}),g.jsx("p",{style:u_,children:"Sign in to continue"}),g.jsx("button",{style:Ib,onClick:h,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&g.jsx("p",{style:Sb,children:i})]})})}vh.createRoot(document.getElementById("root")).render(g.jsx(gr.StrictMode,{children:g.jsx(xb,{children:g.jsx(wb,{})})}));export{Eg as _,Ab as c,C1 as g};
//# sourceMappingURL=index-CLtlqF61.js.map
