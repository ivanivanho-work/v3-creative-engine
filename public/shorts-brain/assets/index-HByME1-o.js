(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function YE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b_={exports:{}},Mu={},N_={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),JE=Symbol.for("react.portal"),XE=Symbol.for("react.fragment"),ZE=Symbol.for("react.strict_mode"),eT=Symbol.for("react.profiler"),tT=Symbol.for("react.provider"),nT=Symbol.for("react.context"),rT=Symbol.for("react.forward_ref"),sT=Symbol.for("react.suspense"),iT=Symbol.for("react.memo"),oT=Symbol.for("react.lazy"),Am=Symbol.iterator;function aT(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var D_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O_=Object.assign,V_={};function Yi(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||D_}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M_(){}M_.prototype=Yi.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=V_,this.updater=n||D_}var zd=Bd.prototype=new M_;zd.constructor=Bd;O_(zd,Yi.prototype);zd.isPureReactComponent=!0;var xm=Array.isArray,L_=Object.prototype.hasOwnProperty,$d={current:null},F_={key:!0,ref:!0,__self:!0,__source:!0};function U_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)L_.call(e,r)&&!F_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Sa,type:t,key:i,ref:o,props:s,_owner:$d.current}}function lT(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function uT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var km=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uT(""+t.key):e.toString(36)}function Il(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case JE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Dc(o,0):r,xm(s)?(n="",t!=null&&(n=t.replace(km,"$&/")+"/"),Il(s,e,n,"",function(h){return h})):s!=null&&(Hd(s)&&(s=lT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(km,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",xm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Dc(i,l);o+=Il(i,e,n,u,s)}else if(u=aT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Dc(i,l++),o+=Il(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],s=0;return Il(t,r,"","",function(i){return e.call(n,i,s++)}),r}function cT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Sl={transition:null},hT={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:$d};function j_(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Yi;he.Fragment=XE;he.Profiler=eT;he.PureComponent=Bd;he.StrictMode=ZE;he.Suspense=sT;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hT;he.act=j_;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=O_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=$d.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)L_.call(e,u)&&!F_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Sa,type:t.type,key:s,ref:i,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:nT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tT,_context:t},t.Consumer=t};he.createElement=U_;he.createFactory=function(t){var e=U_.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:rT,render:t}};he.isValidElement=Hd;he.lazy=function(t){return{$$typeof:oT,_payload:{_status:-1,_result:t},_init:cT}};he.memo=function(t,e){return{$$typeof:iT,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};he.unstable_act=j_;he.useCallback=function(t,e){return qt.current.useCallback(t,e)};he.useContext=function(t){return qt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};he.useEffect=function(t,e){return qt.current.useEffect(t,e)};he.useId=function(){return qt.current.useId()};he.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return qt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};he.useRef=function(t){return qt.current.useRef(t)};he.useState=function(t){return qt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return qt.current.useTransition()};he.version="18.3.1";N_.exports=he;var re=N_.exports;const ai=YE(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dT=re,fT=Symbol.for("react.element"),pT=Symbol.for("react.fragment"),mT=Object.prototype.hasOwnProperty,gT=dT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yT={key:!0,ref:!0,__self:!0,__source:!0};function B_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mT.call(e,r)&&!yT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:fT,type:t,key:i,ref:o,props:s,_owner:gT.current}}Mu.Fragment=pT;Mu.jsx=B_;Mu.jsxs=B_;b_.exports=Mu;var _=b_.exports,wh={},z_={exports:{}},ln={},$_={exports:{}},H_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,$){var Z=j.length;j.push($);e:for(;0<Z;){var ke=Z-1>>>1,ve=j[ke];if(0<s(ve,$))j[ke]=$,j[Z]=ve,Z=ke;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var $=j[0],Z=j.pop();if(Z!==$){j[0]=Z;e:for(var ke=0,ve=j.length,fe=ve>>>1;ke<fe;){var Ee=2*(ke+1)-1,Mn=j[Ee],en=Ee+1,U=j[en];if(0>s(Mn,Z))en<ve&&0>s(U,Mn)?(j[ke]=U,j[en]=Z,ke=en):(j[ke]=Mn,j[Ee]=Z,ke=Ee);else if(en<ve&&0>s(U,Z))j[ke]=U,j[en]=Z,ke=en;else break e}}return $}function s(j,$){var Z=j.sortIndex-$.sortIndex;return Z!==0?Z:j.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,x=!1,P=!1,b=!1,O=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(j){for(var $=n(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=j)r(h),$.sortIndex=$.expirationTime,e(u,$);else break;$=n(h)}}function D(j){if(b=!1,k(j),!P)if(n(u)!==null)P=!0,We(L);else{var $=n(h);$!==null&&_e(D,$.startTime-j)}}function L(j,$){P=!1,b&&(b=!1,A(v),v=-1),x=!0;var Z=m;try{for(k($),p=n(u);p!==null&&(!(p.expirationTime>$)||j&&!S());){var ke=p.callback;if(typeof ke=="function"){p.callback=null,m=p.priorityLevel;var ve=ke(p.expirationTime<=$);$=t.unstable_now(),typeof ve=="function"?p.callback=ve:p===n(u)&&r(u),k($)}else r(u);p=n(u)}if(p!==null)var fe=!0;else{var Ee=n(h);Ee!==null&&_e(D,Ee.startTime-$),fe=!1}return fe}finally{p=null,m=Z,x=!1}}var B=!1,w=null,v=-1,g=5,T=-1;function S(){return!(t.unstable_now()-T<g)}function C(){if(w!==null){var j=t.unstable_now();T=j;var $=!0;try{$=w(!0,j)}finally{$?I():(B=!1,w=null)}}else B=!1}var I;if(typeof E=="function")I=function(){E(C)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,je=xe.port2;xe.port1.onmessage=C,I=function(){je.postMessage(null)}}else I=function(){O(C,0)};function We(j){w=j,B||(B=!0,I())}function _e(j,$){v=O(function(){j(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){P||x||(P=!0,We(L))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var Z=m;m=$;try{return j()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Z=m;m=j;try{return $()}finally{m=Z}},t.unstable_scheduleCallback=function(j,$,Z){var ke=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ke+Z:ke):Z=ke,j){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,j={id:f++,callback:$,priorityLevel:j,startTime:Z,expirationTime:ve,sortIndex:-1},Z>ke?(j.sortIndex=Z,e(h,j),n(u)===null&&j===n(h)&&(b?(A(v),v=-1):b=!0,_e(D,Z-ke))):(j.sortIndex=ve,e(u,j),P||x||(P=!0,We(L))),j},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(j){var $=m;return function(){var Z=m;m=$;try{return j.apply(this,arguments)}finally{m=Z}}}})(H_);$_.exports=H_;var _T=$_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT=re,an=_T;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q_=new Set,Yo={};function Qs(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Yo[t]=e,t=0;t<e.length;t++)q_.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,wT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},Rm={};function ET(t){return Eh.call(Rm,t)?!0:Eh.call(Cm,t)?!1:wT.test(t)?Rm[t]=!0:(Cm[t]=!0,!1)}function TT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IT(t,e,n,r){if(e===null||typeof e>"u"||TT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,Gd);Rt[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,Gd);Rt[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,Gd);Rt[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,r){var s=Rt.hasOwnProperty(e)?Rt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IT(e,n,s,r)&&(n=null),r||s===null?ET(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sr=vT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),di=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),K_=Symbol.for("react.offscreen"),Pm=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var Ze=Object.assign,Oc;function ko(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Vc=!1;function Mc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ko(t):""}function ST(t){switch(t.tag){case 5:return ko(t.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fi:return"Fragment";case di:return"Portal";case Th:return"Profiler";case Kd:return"StrictMode";case Ih:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W_:return(t.displayName||"Context")+".Consumer";case G_:return(t._context.displayName||"Context")+".Provider";case Qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case Vr:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function AT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function as(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xT(t){var e=Q_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=xT(t))}function Y_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Q_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xh(t,e){var n=e.checked;return Ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=as(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J_(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function kh(t,e){J_(t,e);var n=as(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,as(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ch(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+as(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Co(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:as(n)}}function X_(t,e){var n=as(e.value),r=as(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Z_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Z_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,e0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kT=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){kT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function t0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function n0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=t0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var CT=Ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bh(t,e){if(e){if(CT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,Ai=null,xi=null;function Vm(t){if(t=ka(t)){if(typeof Oh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Bu(e),Oh(t.stateNode,t.type,e))}}function r0(t){Ai?xi?xi.push(t):xi=[t]:Ai=t}function s0(){if(Ai){var t=Ai,e=xi;if(xi=Ai=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function i0(t,e){return t(e)}function o0(){}var Lc=!1;function a0(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return i0(t,e,n)}finally{Lc=!1,(Ai!==null||xi!==null)&&(o0(),s0())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var r=Bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Vh=!1;if(gr)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Vh=!1}function RT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Vo=!1,Kl=null,Ql=!1,Mh=null,PT={onError:function(t){Vo=!0,Kl=t}};function bT(t,e,n,r,s,i,o,l,u){Vo=!1,Kl=null,RT.apply(PT,arguments)}function NT(t,e,n,r,s,i,o,l,u){if(bT.apply(this,arguments),Vo){if(Vo){var h=Kl;Vo=!1,Kl=null}else throw Error(F(198));Ql||(Ql=!0,Mh=h)}}function Ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function l0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mm(t){if(Ys(t)!==t)throw Error(F(188))}function DT(t){var e=t.alternate;if(!e){if(e=Ys(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Mm(s),t;if(i===r)return Mm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function u0(t){return t=DT(t),t!==null?c0(t):null}function c0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c0(t);if(e!==null)return e;t=t.sibling}return null}var h0=an.unstable_scheduleCallback,Lm=an.unstable_cancelCallback,OT=an.unstable_shouldYield,VT=an.unstable_requestPaint,ot=an.unstable_now,MT=an.unstable_getCurrentPriorityLevel,Xd=an.unstable_ImmediatePriority,d0=an.unstable_UserBlockingPriority,Yl=an.unstable_NormalPriority,LT=an.unstable_LowPriority,f0=an.unstable_IdlePriority,Lu=null,Wn=null;function FT(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(Lu,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:BT,UT=Math.log,jT=Math.LN2;function BT(t){return t>>>=0,t===0?32:31-(UT(t)/jT|0)|0}var el=64,tl=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ro(l):(i&=o,i!==0&&(r=Ro(i)))}else o=n&~s,o!==0?r=Ro(o):i!==0&&(r=Ro(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),s=1<<n,r|=t[n],e&=~s;return r}function zT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $T(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Pn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=zT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p0(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function HT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Pn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ne=0;function m0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var g0,ef,y0,_0,v0,Fh=!1,nl=[],Kr=null,Qr=null,Yr=null,Zo=new Map,ea=new Map,Fr=[],qT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fm(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function vo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ka(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function GT(t,e,n,r,s){switch(e){case"focusin":return Kr=vo(Kr,t,e,n,r,s),!0;case"dragenter":return Qr=vo(Qr,t,e,n,r,s),!0;case"mouseover":return Yr=vo(Yr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Zo.set(i,vo(Zo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ea.set(i,vo(ea.get(i)||null,t,e,n,r,s)),!0}return!1}function w0(t){var e=Cs(t.target);if(e!==null){var n=Ys(e);if(n!==null){if(e=n.tag,e===13){if(e=l0(n),e!==null){t.blockedOn=e,v0(t.priority,function(){y0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dh=r,n.target.dispatchEvent(r),Dh=null}else return e=ka(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function Um(t,e,n){Al(t)&&n.delete(e)}function WT(){Fh=!1,Kr!==null&&Al(Kr)&&(Kr=null),Qr!==null&&Al(Qr)&&(Qr=null),Yr!==null&&Al(Yr)&&(Yr=null),Zo.forEach(Um),ea.forEach(Um)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,WT)))}function ta(t){function e(s){return wo(s,t)}if(0<nl.length){wo(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kr!==null&&wo(Kr,t),Qr!==null&&wo(Qr,t),Yr!==null&&wo(Yr,t),Zo.forEach(e),ea.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)w0(n),n.blockedOn===null&&Fr.shift()}var ki=Sr.ReactCurrentBatchConfig,Xl=!0;function KT(t,e,n,r){var s=Ne,i=ki.transition;ki.transition=null;try{Ne=1,tf(t,e,n,r)}finally{Ne=s,ki.transition=i}}function QT(t,e,n,r){var s=Ne,i=ki.transition;ki.transition=null;try{Ne=4,tf(t,e,n,r)}finally{Ne=s,ki.transition=i}}function tf(t,e,n,r){if(Xl){var s=Uh(t,e,n,r);if(s===null)Kc(t,e,r,Zl,n),Fm(t,r);else if(GT(s,t,e,n,r))r.stopPropagation();else if(Fm(t,r),e&4&&-1<qT.indexOf(t)){for(;s!==null;){var i=ka(s);if(i!==null&&g0(i),i=Uh(t,e,n,r),i===null&&Kc(t,e,r,Zl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var Zl=null;function Uh(t,e,n,r){if(Zl=null,t=Jd(r),t=Cs(t),t!==null)if(e=Ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=l0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function E0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MT()){case Xd:return 1;case d0:return 4;case Yl:case LT:return 16;case f0:return 536870912;default:return 16}default:return 16}}var Hr=null,nf=null,xl=null;function T0(){if(xl)return xl;var t,e=nf,n=e.length,r,s="value"in Hr?Hr.value:Hr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return xl=s.slice(t,1<r?1-r:void 0)}function kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function jm(){return!1}function un(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?rl:jm,this.isPropagationStopped=jm,this}return Ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=un(Ji),xa=Ze({},Ji,{view:0,detail:0}),YT=un(xa),Uc,jc,Eo,Fu=Ze({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Uc=t.screenX-Eo.screenX,jc=t.screenY-Eo.screenY):jc=Uc=0,Eo=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Bm=un(Fu),JT=Ze({},Fu,{dataTransfer:0}),XT=un(JT),ZT=Ze({},xa,{relatedTarget:0}),Bc=un(ZT),eI=Ze({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),tI=un(eI),nI=Ze({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rI=un(nI),sI=Ze({},Ji,{data:0}),zm=un(sI),iI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aI[t])?!!e[t]:!1}function sf(){return lI}var uI=Ze({},xa,{key:function(t){if(t.key){var e=iI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cI=un(uI),hI=Ze({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=un(hI),dI=Ze({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),fI=un(dI),pI=Ze({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),mI=un(pI),gI=Ze({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yI=un(gI),_I=[9,13,27,32],of=gr&&"CompositionEvent"in window,Mo=null;gr&&"documentMode"in document&&(Mo=document.documentMode);var vI=gr&&"TextEvent"in window&&!Mo,I0=gr&&(!of||Mo&&8<Mo&&11>=Mo),Hm=" ",qm=!1;function S0(t,e){switch(t){case"keyup":return _I.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function wI(t,e){switch(t){case"compositionend":return A0(e);case"keypress":return e.which!==32?null:(qm=!0,Hm);case"textInput":return t=e.data,t===Hm&&qm?null:t;default:return null}}function EI(t,e){if(pi)return t==="compositionend"||!of&&S0(t,e)?(t=T0(),xl=nf=Hr=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return I0&&e.locale!=="ko"?null:e.data;default:return null}}var TI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TI[t.type]:e==="textarea"}function x0(t,e,n,r){r0(r),e=eu(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Lo=null,na=null;function II(t){L0(t,0)}function Uu(t){var e=yi(t);if(Y_(e))return t}function SI(t,e){if(t==="change")return e}var k0=!1;if(gr){var zc;if(gr){var $c="oninput"in document;if(!$c){var Wm=document.createElement("div");Wm.setAttribute("oninput","return;"),$c=typeof Wm.oninput=="function"}zc=$c}else zc=!1;k0=zc&&(!document.documentMode||9<document.documentMode)}function Km(){Lo&&(Lo.detachEvent("onpropertychange",C0),na=Lo=null)}function C0(t){if(t.propertyName==="value"&&Uu(na)){var e=[];x0(e,na,t,Jd(t)),a0(II,e)}}function AI(t,e,n){t==="focusin"?(Km(),Lo=e,na=n,Lo.attachEvent("onpropertychange",C0)):t==="focusout"&&Km()}function xI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(na)}function kI(t,e){if(t==="click")return Uu(e)}function CI(t,e){if(t==="input"||t==="change")return Uu(e)}function RI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:RI;function ra(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Eh.call(e,s)||!On(t[s],e[s]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=Qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function R0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P0(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PI(t){var e=P0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R0(n.ownerDocument.documentElement,n)){if(r!==null&&af(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ym(n,i);var o=Ym(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bI=gr&&"documentMode"in document&&11>=document.documentMode,mi=null,jh=null,Fo=null,Bh=!1;function Jm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||mi==null||mi!==Wl(r)||(r=mi,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&ra(Fo,r)||(Fo=r,r=eu(jh,"onSelect"),0<r.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gi={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Hc={},b0={};gr&&(b0=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function ju(t){if(Hc[t])return Hc[t];if(!gi[t])return t;var e=gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in b0)return Hc[t]=e[n];return t}var N0=ju("animationend"),D0=ju("animationiteration"),O0=ju("animationstart"),V0=ju("transitionend"),M0=new Map,Xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gs(t,e){M0.set(t,e),Qs(e,[t])}for(var qc=0;qc<Xm.length;qc++){var Gc=Xm[qc],NI=Gc.toLowerCase(),DI=Gc[0].toUpperCase()+Gc.slice(1);gs(NI,"on"+DI)}gs(N0,"onAnimationEnd");gs(D0,"onAnimationIteration");gs(O0,"onAnimationStart");gs("dblclick","onDoubleClick");gs("focusin","onFocus");gs("focusout","onBlur");gs(V0,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NT(r,e,void 0,t),t.currentTarget=null}function L0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Zm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Zm(s,l,h),i=u}}}if(Ql)throw t=Mh,Ql=!1,Mh=null,t}function He(t,e){var n=e[Gh];n===void 0&&(n=e[Gh]=new Set);var r=t+"__bubble";n.has(r)||(F0(e,t,2,!1),n.add(r))}function Wc(t,e,n){var r=0;e&&(r|=4),F0(n,t,r,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[il]){t[il]=!0,q_.forEach(function(n){n!=="selectionchange"&&(OI.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,Wc("selectionchange",!1,e))}}function F0(t,e,n,r){switch(E0(e)){case 1:var s=KT;break;case 4:s=QT;break;default:s=tf}n=s.bind(null,e,n,t),s=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Cs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}a0(function(){var h=i,f=Jd(n),p=[];e:{var m=M0.get(t);if(m!==void 0){var x=rf,P=t;switch(t){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":x=cI;break;case"focusin":P="focus",x=Bc;break;case"focusout":P="blur",x=Bc;break;case"beforeblur":case"afterblur":x=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=XT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=fI;break;case N0:case D0:case O0:x=tI;break;case V0:x=mI;break;case"scroll":x=YT;break;case"wheel":x=yI;break;case"copy":case"cut":case"paste":x=rI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=$m}var b=(e&4)!==0,O=!b&&t==="scroll",A=b?m!==null?m+"Capture":null:m;b=[];for(var E=h,k;E!==null;){k=E;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,A!==null&&(D=Xo(E,A),D!=null&&b.push(ia(E,D,k)))),O)break;E=E.return}0<b.length&&(m=new x(m,P,null,n,f),p.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",m&&n!==Dh&&(P=n.relatedTarget||n.fromElement)&&(Cs(P)||P[yr]))break e;if((x||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,x?(P=n.relatedTarget||n.toElement,x=h,P=P?Cs(P):null,P!==null&&(O=Ys(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(x=null,P=h),x!==P)){if(b=Bm,D="onMouseLeave",A="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(b=$m,D="onPointerLeave",A="onPointerEnter",E="pointer"),O=x==null?m:yi(x),k=P==null?m:yi(P),m=new b(D,E+"leave",x,n,f),m.target=O,m.relatedTarget=k,D=null,Cs(f)===h&&(b=new b(A,E+"enter",P,n,f),b.target=k,b.relatedTarget=O,D=b),O=D,x&&P)t:{for(b=x,A=P,E=0,k=b;k;k=oi(k))E++;for(k=0,D=A;D;D=oi(D))k++;for(;0<E-k;)b=oi(b),E--;for(;0<k-E;)A=oi(A),k--;for(;E--;){if(b===A||A!==null&&b===A.alternate)break t;b=oi(b),A=oi(A)}b=null}else b=null;x!==null&&eg(p,m,x,b,!1),P!==null&&O!==null&&eg(p,O,P,b,!0)}}e:{if(m=h?yi(h):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var L=SI;else if(Gm(m))if(k0)L=CI;else{L=xI;var B=AI}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=kI);if(L&&(L=L(t,h))){x0(p,L,n,f);break e}B&&B(t,m,h),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&Ch(m,"number",m.value)}switch(B=h?yi(h):window,t){case"focusin":(Gm(B)||B.contentEditable==="true")&&(mi=B,jh=h,Fo=null);break;case"focusout":Fo=jh=mi=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Jm(p,n,f);break;case"selectionchange":if(bI)break;case"keydown":case"keyup":Jm(p,n,f)}var w;if(of)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else pi?S0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(I0&&n.locale!=="ko"&&(pi||v!=="onCompositionStart"?v==="onCompositionEnd"&&pi&&(w=T0()):(Hr=f,nf="value"in Hr?Hr.value:Hr.textContent,pi=!0)),B=eu(h,v),0<B.length&&(v=new zm(v,t,null,n,f),p.push({event:v,listeners:B}),w?v.data=w:(w=A0(n),w!==null&&(v.data=w)))),(w=vI?wI(t,n):EI(t,n))&&(h=eu(h,"onBeforeInput"),0<h.length&&(f=new zm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=w))}L0(p,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Xo(t,n),i!=null&&r.unshift(ia(t,i,s)),i=Xo(t,e),i!=null&&r.push(ia(t,i,s))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Xo(n,i),u!=null&&o.unshift(ia(n,u,l))):s||(u=Xo(n,i),u!=null&&o.push(ia(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VI=/\r\n?/g,MI=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(VI,`
`).replace(MI,"")}function ol(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(F(425))}function tu(){}var zh=null,$h=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,LI=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,FI=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(UI)}:qh;function UI(t){setTimeout(function(){throw t})}function Qc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ta(e)}function Jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xi=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Xi,oa="__reactProps$"+Xi,yr="__reactContainer$"+Xi,Gh="__reactEvents$"+Xi,jI="__reactListeners$"+Xi,BI="__reactHandles$"+Xi;function Cs(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[Hn])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[Hn]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Bu(t){return t[oa]||null}var Wh=[],_i=-1;function ys(t){return{current:t}}function Ge(t){0>_i||(t.current=Wh[_i],Wh[_i]=null,_i--)}function Ue(t,e){_i++,Wh[_i]=t.current,t.current=e}var ls={},Lt=ys(ls),Jt=ys(!1),Ls=ls;function Fi(t,e){var n=t.type.contextTypes;if(!n)return ls;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Xt(t){return t=t.childContextTypes,t!=null}function nu(){Ge(Jt),Ge(Lt)}function sg(t,e,n){if(Lt.current!==ls)throw Error(F(168));Ue(Lt,e),Ue(Jt,n)}function U0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,AT(t)||"Unknown",s));return Ze({},n,r)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ls,Ls=Lt.current,Ue(Lt,t),Ue(Jt,Jt.current),!0}function ig(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=U0(t,e,Ls),r.__reactInternalMemoizedMergedChildContext=t,Ge(Jt),Ge(Lt),Ue(Lt,t)):Ge(Jt),Ue(Jt,n)}var or=null,zu=!1,Yc=!1;function j0(t){or===null?or=[t]:or.push(t)}function zI(t){zu=!0,j0(t)}function _s(){if(!Yc&&or!==null){Yc=!0;var t=0,e=Ne;try{var n=or;for(Ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}or=null,zu=!1}catch(s){throw or!==null&&(or=or.slice(t+1)),h0(Xd,_s),s}finally{Ne=e,Yc=!1}}return null}var vi=[],wi=0,su=null,iu=0,mn=[],gn=0,Fs=null,cr=1,hr="";function As(t,e){vi[wi++]=iu,vi[wi++]=su,su=t,iu=e}function B0(t,e,n){mn[gn++]=cr,mn[gn++]=hr,mn[gn++]=Fs,Fs=t;var r=cr;t=hr;var s=32-Pn(r)-1;r&=~(1<<s),n+=1;var i=32-Pn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,cr=1<<32-Pn(e)+s|n<<s|r,hr=i+t}else cr=1<<i|n<<s|r,hr=t}function lf(t){t.return!==null&&(As(t,1),B0(t,1,0))}function uf(t){for(;t===su;)su=vi[--wi],vi[wi]=null,iu=vi[--wi],vi[wi]=null;for(;t===Fs;)Fs=mn[--gn],mn[gn]=null,hr=mn[--gn],mn[gn]=null,cr=mn[--gn],mn[gn]=null}var on=null,sn=null,Ke=!1,kn=null;function z0(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,sn=Jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fs!==null?{id:cr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,sn=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(Ke){var e=sn;if(e){var n=e;if(!og(t,e)){if(Kh(t))throw Error(F(418));e=Jr(n.nextSibling);var r=on;e&&og(t,e)?z0(r,n):(t.flags=t.flags&-4097|2,Ke=!1,on=t)}}else{if(Kh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ke=!1,on=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function al(t){if(t!==on)return!1;if(!Ke)return ag(t),Ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=sn)){if(Kh(t))throw $0(),Error(F(418));for(;e;)z0(t,e),e=Jr(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=Jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=on?Jr(t.stateNode.nextSibling):null;return!0}function $0(){for(var t=sn;t;)t=Jr(t.nextSibling)}function Ui(){sn=on=null,Ke=!1}function cf(t){kn===null?kn=[t]:kn.push(t)}var $I=Sr.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function H0(t){function e(A,E){if(t){var k=A.deletions;k===null?(A.deletions=[E],A.flags|=16):k.push(E)}}function n(A,E){if(!t)return null;for(;E!==null;)e(A,E),E=E.sibling;return null}function r(A,E){for(A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function s(A,E){return A=ts(A,E),A.index=0,A.sibling=null,A}function i(A,E,k){return A.index=k,t?(k=A.alternate,k!==null?(k=k.index,k<E?(A.flags|=2,E):k):(A.flags|=2,E)):(A.flags|=1048576,E)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,E,k,D){return E===null||E.tag!==6?(E=rh(k,A.mode,D),E.return=A,E):(E=s(E,k),E.return=A,E)}function u(A,E,k,D){var L=k.type;return L===fi?f(A,E,k.props.children,D,k.key):E!==null&&(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Vr&&lg(L)===E.type)?(D=s(E,k.props),D.ref=To(A,E,k),D.return=A,D):(D=Ol(k.type,k.key,k.props,null,A.mode,D),D.ref=To(A,E,k),D.return=A,D)}function h(A,E,k,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=sh(k,A.mode,D),E.return=A,E):(E=s(E,k.children||[]),E.return=A,E)}function f(A,E,k,D,L){return E===null||E.tag!==7?(E=Os(k,A.mode,D,L),E.return=A,E):(E=s(E,k),E.return=A,E)}function p(A,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=rh(""+E,A.mode,k),E.return=A,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ja:return k=Ol(E.type,E.key,E.props,null,A.mode,k),k.ref=To(A,null,E),k.return=A,k;case di:return E=sh(E,A.mode,k),E.return=A,E;case Vr:var D=E._init;return p(A,D(E._payload),k)}if(Co(E)||yo(E))return E=Os(E,A.mode,k,null),E.return=A,E;ll(A,E)}return null}function m(A,E,k,D){var L=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return L!==null?null:l(A,E,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ja:return k.key===L?u(A,E,k,D):null;case di:return k.key===L?h(A,E,k,D):null;case Vr:return L=k._init,m(A,E,L(k._payload),D)}if(Co(k)||yo(k))return L!==null?null:f(A,E,k,D,null);ll(A,k)}return null}function x(A,E,k,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return A=A.get(k)||null,l(E,A,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ja:return A=A.get(D.key===null?k:D.key)||null,u(E,A,D,L);case di:return A=A.get(D.key===null?k:D.key)||null,h(E,A,D,L);case Vr:var B=D._init;return x(A,E,k,B(D._payload),L)}if(Co(D)||yo(D))return A=A.get(k)||null,f(E,A,D,L,null);ll(E,D)}return null}function P(A,E,k,D){for(var L=null,B=null,w=E,v=E=0,g=null;w!==null&&v<k.length;v++){w.index>v?(g=w,w=null):g=w.sibling;var T=m(A,w,k[v],D);if(T===null){w===null&&(w=g);break}t&&w&&T.alternate===null&&e(A,w),E=i(T,E,v),B===null?L=T:B.sibling=T,B=T,w=g}if(v===k.length)return n(A,w),Ke&&As(A,v),L;if(w===null){for(;v<k.length;v++)w=p(A,k[v],D),w!==null&&(E=i(w,E,v),B===null?L=w:B.sibling=w,B=w);return Ke&&As(A,v),L}for(w=r(A,w);v<k.length;v++)g=x(w,A,v,k[v],D),g!==null&&(t&&g.alternate!==null&&w.delete(g.key===null?v:g.key),E=i(g,E,v),B===null?L=g:B.sibling=g,B=g);return t&&w.forEach(function(S){return e(A,S)}),Ke&&As(A,v),L}function b(A,E,k,D){var L=yo(k);if(typeof L!="function")throw Error(F(150));if(k=L.call(k),k==null)throw Error(F(151));for(var B=L=null,w=E,v=E=0,g=null,T=k.next();w!==null&&!T.done;v++,T=k.next()){w.index>v?(g=w,w=null):g=w.sibling;var S=m(A,w,T.value,D);if(S===null){w===null&&(w=g);break}t&&w&&S.alternate===null&&e(A,w),E=i(S,E,v),B===null?L=S:B.sibling=S,B=S,w=g}if(T.done)return n(A,w),Ke&&As(A,v),L;if(w===null){for(;!T.done;v++,T=k.next())T=p(A,T.value,D),T!==null&&(E=i(T,E,v),B===null?L=T:B.sibling=T,B=T);return Ke&&As(A,v),L}for(w=r(A,w);!T.done;v++,T=k.next())T=x(w,A,v,T.value,D),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?v:T.key),E=i(T,E,v),B===null?L=T:B.sibling=T,B=T);return t&&w.forEach(function(C){return e(A,C)}),Ke&&As(A,v),L}function O(A,E,k,D){if(typeof k=="object"&&k!==null&&k.type===fi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ja:e:{for(var L=k.key,B=E;B!==null;){if(B.key===L){if(L=k.type,L===fi){if(B.tag===7){n(A,B.sibling),E=s(B,k.props.children),E.return=A,A=E;break e}}else if(B.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Vr&&lg(L)===B.type){n(A,B.sibling),E=s(B,k.props),E.ref=To(A,B,k),E.return=A,A=E;break e}n(A,B);break}else e(A,B);B=B.sibling}k.type===fi?(E=Os(k.props.children,A.mode,D,k.key),E.return=A,A=E):(D=Ol(k.type,k.key,k.props,null,A.mode,D),D.ref=To(A,E,k),D.return=A,A=D)}return o(A);case di:e:{for(B=k.key;E!==null;){if(E.key===B)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){n(A,E.sibling),E=s(E,k.children||[]),E.return=A,A=E;break e}else{n(A,E);break}else e(A,E);E=E.sibling}E=sh(k,A.mode,D),E.return=A,A=E}return o(A);case Vr:return B=k._init,O(A,E,B(k._payload),D)}if(Co(k))return P(A,E,k,D);if(yo(k))return b(A,E,k,D);ll(A,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(n(A,E.sibling),E=s(E,k),E.return=A,A=E):(n(A,E),E=rh(k,A.mode,D),E.return=A,A=E),o(A)):n(A,E)}return O}var ji=H0(!0),q0=H0(!1),ou=ys(null),au=null,Ei=null,hf=null;function df(){hf=Ei=au=null}function ff(t){var e=ou.current;Ge(ou),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){au=t,hf=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(hf!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(au===null)throw Error(F(308));Ei=t,au.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var Rs=null;function pf(t){Rs===null?Rs=[t]:Rs.push(t)}function G0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,pf(e)):(n.next=s.next,s.next=n),e.interleaved=n,_r(t,r)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Se&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,_r(t,n)}return s=r.interleaved,s===null?(e.next=e,pf(r)):(e.next=s.next,s.next=e),r.interleaved=e,_r(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zd(t,n)}}function ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,r){var s=t.updateQueue;Mr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var m=l.lane,x=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,b=l;switch(m=e,x=n,b.tag){case 1:if(P=b.payload,typeof P=="function"){p=P.call(x,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=b.payload,m=typeof P=="function"?P.call(x,p,m):P,m==null)break e;p=Ze({},p,m);break e;case 2:Mr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else x={eventTime:x,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=x,u=p):f=f.next=x,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);js|=o,t.lanes=o,t.memoizedState=p}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Ca={},Kn=ys(Ca),aa=ys(Ca),la=ys(Ca);function Ps(t){if(t===Ca)throw Error(F(174));return t}function gf(t,e){switch(Ue(la,e),Ue(aa,t),Ue(Kn,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ph(e,t)}Ge(Kn),Ue(Kn,e)}function Bi(){Ge(Kn),Ge(aa),Ge(la)}function K0(t){Ps(la.current);var e=Ps(Kn.current),n=Ph(e,t.type);e!==n&&(Ue(aa,t),Ue(Kn,n))}function yf(t){aa.current===t&&(Ge(Kn),Ge(aa))}var Je=ys(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function _f(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Rl=Sr.ReactCurrentDispatcher,Xc=Sr.ReactCurrentBatchConfig,Us=0,Xe=null,gt=null,It=null,cu=!1,Uo=!1,ua=0,HI=0;function bt(){throw Error(F(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function wf(t,e,n,r,s,i){if(Us=i,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?KI:QI,t=n(r,s),Uo){i=0;do{if(Uo=!1,ua=0,25<=i)throw Error(F(301));i+=1,It=gt=null,e.updateQueue=null,Rl.current=YI,t=n(r,s)}while(Uo)}if(Rl.current=hu,e=gt!==null&&gt.next!==null,Us=0,It=gt=Xe=null,cu=!1,e)throw Error(F(300));return t}function Ef(){var t=ua!==0;return ua=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Xe.memoizedState=It=t:It=It.next=t,It}function In(){if(gt===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=It===null?Xe.memoizedState:It.next;if(e!==null)It=e,gt=t;else{if(t===null)throw Error(F(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?Xe.memoizedState=It=t:It=It.next=t}return It}function ca(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=In(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=gt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Us&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Xe.lanes|=f,js|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,On(r,e.memoizedState)||(Yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Xe.lanes|=i,js|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eh(t){var e=In(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);On(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Q0(){}function Y0(t,e){var n=Xe,r=In(),s=e(),i=!On(r.memoizedState,s);if(i&&(r.memoizedState=s,Yt=!0),r=r.queue,Tf(Z0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,ha(9,X0.bind(null,n,r,s,e),void 0,null),St===null)throw Error(F(349));Us&30||J0(n,e,s)}return s}function J0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X0(t,e,n,r){e.value=n,e.getSnapshot=r,ev(e)&&tv(t)}function Z0(t,e,n){return n(function(){ev(e)&&tv(t)})}function ev(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function tv(t){var e=_r(t,1);e!==null&&bn(e,t,1,-1)}function hg(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=WI.bind(null,Xe,t),[e.memoizedState,t]}function ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nv(){return In().memoizedState}function Pl(t,e,n,r){var s=zn();Xe.flags|=t,s.memoizedState=ha(1|e,n,void 0,r===void 0?null:r)}function $u(t,e,n,r){var s=In();r=r===void 0?null:r;var i=void 0;if(gt!==null){var o=gt.memoizedState;if(i=o.destroy,r!==null&&vf(r,o.deps)){s.memoizedState=ha(e,n,i,r);return}}Xe.flags|=t,s.memoizedState=ha(1|e,n,i,r)}function dg(t,e){return Pl(8390656,8,t,e)}function Tf(t,e){return $u(2048,8,t,e)}function rv(t,e){return $u(4,2,t,e)}function sv(t,e){return $u(4,4,t,e)}function iv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ov(t,e,n){return n=n!=null?n.concat([t]):null,$u(4,4,iv.bind(null,e,t),n)}function If(){}function av(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lv(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uv(t,e,n){return Us&21?(On(n,e)||(n=p0(),Xe.lanes|=n,js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function qI(t,e){var n=Ne;Ne=n!==0&&4>n?n:4,t(!0);var r=Xc.transition;Xc.transition={};try{t(!1),e()}finally{Ne=n,Xc.transition=r}}function cv(){return In().memoizedState}function GI(t,e,n){var r=es(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hv(t))dv(e,n);else if(n=G0(t,e,n,r),n!==null){var s=Ht();bn(n,t,r,s),fv(n,e,r)}}function WI(t,e,n){var r=es(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(t))dv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,On(l,o)){var u=e.interleaved;u===null?(s.next=s,pf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=G0(t,e,s,r),n!==null&&(s=Ht(),bn(n,t,r,s),fv(n,e,r))}}function hv(t){var e=t.alternate;return t===Xe||e!==null&&e===Xe}function dv(t,e){Uo=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zd(t,n)}}var hu={readContext:Tn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},KI={readContext:Tn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4194308,4,iv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pl(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GI.bind(null,Xe,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:hg,useDebugValue:If,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=hg(!1),e=t[0];return t=qI.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Xe,s=zn();if(Ke){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),St===null)throw Error(F(349));Us&30||J0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,dg(Z0.bind(null,r,i,t),[t]),r.flags|=2048,ha(9,X0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=zn(),e=St.identifierPrefix;if(Ke){var n=hr,r=cr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QI={readContext:Tn,useCallback:av,useContext:Tn,useEffect:Tf,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:lv,useReducer:Zc,useRef:nv,useState:function(){return Zc(ca)},useDebugValue:If,useDeferredValue:function(t){var e=In();return uv(e,gt.memoizedState,t)},useTransition:function(){var t=Zc(ca)[0],e=In().memoizedState;return[t,e]},useMutableSource:Q0,useSyncExternalStore:Y0,useId:cv,unstable_isNewReconciler:!1},YI={readContext:Tn,useCallback:av,useContext:Tn,useEffect:Tf,useImperativeHandle:ov,useInsertionEffect:rv,useLayoutEffect:sv,useMemo:lv,useReducer:eh,useRef:nv,useState:function(){return eh(ca)},useDebugValue:If,useDeferredValue:function(t){var e=In();return gt===null?e.memoizedState=t:uv(e,gt.memoizedState,t)},useTransition:function(){var t=eh(ca)[0],e=In().memoizedState;return[t,e]},useMutableSource:Q0,useSyncExternalStore:Y0,useId:cv,unstable_isNewReconciler:!1};function An(t,e){if(t&&t.defaultProps){e=Ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hu={isMounted:function(t){return(t=t._reactInternals)?Ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),s=es(t),i=pr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Xr(t,i,s),e!==null&&(bn(e,t,s,r),Cl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),s=es(t),i=pr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Xr(t,i,s),e!==null&&(bn(e,t,s,r),Cl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=es(t),s=pr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Xr(t,s,r),e!==null&&(bn(e,t,r,n),Cl(e,t,r))}};function fg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(s,i):!0}function pv(t,e,n){var r=!1,s=ls,i=e.contextType;return typeof i=="object"&&i!==null?i=Tn(i):(s=Xt(e)?Ls:Lt.current,r=e.contextTypes,i=(r=r!=null)?Fi(t,s):ls),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hu.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},mf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Tn(i):(i=Xt(e)?Ls:Lt.current,s.context=Fi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Hu.enqueueReplaceState(s,s.state,null),lu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=ST(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var JI=typeof WeakMap=="function"?WeakMap:Map;function mv(t,e,n){n=pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fu||(fu=!0,ud=r),Zh(t,e)},n}function gv(t,e,n){n=pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Zh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new JI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=hS.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t)}var XI=Sr.ReactCurrentOwner,Yt=!1;function zt(t,e,n,r){e.child=t===null?q0(e,null,n,r):ji(e,t.child,n,r)}function _g(t,e,n,r,s){n=n.render;var i=e.ref;return Ci(e,s),r=wf(t,e,n,r,i,s),n=Ef(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,vr(t,e,s)):(Ke&&n&&lf(e),e.flags|=1,zt(t,e,r,s),e.child)}function vg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,yv(t,e,i,r,s)):(t=Ol(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return vr(t,e,s)}return e.flags|=1,t=ts(i,r),t.ref=e.ref,t.return=e,e.child=t}function yv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ra(i,r)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,vr(t,e,s)}return ed(t,e,n,r,s)}function _v(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(Ii,nn),nn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ue(Ii,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ue(Ii,nn),nn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ue(Ii,nn),nn|=r;return zt(t,e,s,n),e.child}function vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,s){var i=Xt(n)?Ls:Lt.current;return i=Fi(e,i),Ci(e,s),n=wf(t,e,n,r,i,s),r=Ef(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,vr(t,e,s)):(Ke&&r&&lf(e),e.flags|=1,zt(t,e,n,s),e.child)}function wg(t,e,n,r,s){if(Xt(n)){var i=!0;ru(e)}else i=!1;if(Ci(e,s),e.stateNode===null)bl(t,e),pv(e,n,r),Xh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Tn(h):(h=Xt(n)?Ls:Lt.current,h=Fi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&pg(e,o,r,h),Mr=!1;var m=e.memoizedState;o.state=m,lu(e,r,o,s),u=e.memoizedState,l!==r||m!==u||Jt.current||Mr?(typeof f=="function"&&(Jh(e,n,f,r),u=e.memoizedState),(l=Mr||fg(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,W0(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:An(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tn(u):(u=Xt(n)?Ls:Lt.current,u=Fi(e,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&pg(e,o,r,u),Mr=!1,m=e.memoizedState,o.state=m,lu(e,r,o,s);var P=e.memoizedState;l!==p||m!==P||Jt.current||Mr?(typeof x=="function"&&(Jh(e,n,x,r),P=e.memoizedState),(h=Mr||fg(e,n,h,r,m,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,i,s)}function td(t,e,n,r,s,i){vv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&ig(e,n,!1),vr(t,e,i);r=e.stateNode,XI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ji(e,t.child,null,i),e.child=ji(e,null,l,i)):zt(t,e,l,i),e.memoizedState=r.state,s&&ig(e,n,!0),e.child}function wv(t){var e=t.stateNode;e.pendingContext?sg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sg(t,e.context,!1),gf(t,e.containerInfo)}function Eg(t,e,n,r,s){return Ui(),cf(s),e.flags|=256,zt(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ev(t,e,n){var r=e.pendingProps,s=Je.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ue(Je,s&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Wu(o,r,0,null),t=Os(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=rd(n),e.memoizedState=nd,t):Sf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return ZI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ts(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ts(l,i):(i=Os(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return i=t.child,t=i.sibling,r=ts(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Sf(t,e){return e=Wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&cf(r),ji(e,t.child,null,n),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=th(Error(F(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Wu({mode:"visible",children:r.children},s,0,null),i=Os(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ji(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,i);if(!(e.mode&1))return ul(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=th(i,r,void 0),ul(t,e,o,r)}if(l=(o&t.childLanes)!==0,Yt||l){if(r=St,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,_r(t,s),bn(r,t,s,-1))}return Pf(),r=th(Error(F(421))),ul(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=dS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,sn=Jr(s.nextSibling),on=e,Ke=!0,kn=null,t!==null&&(mn[gn++]=cr,mn[gn++]=hr,mn[gn++]=Fs,cr=t.id,hr=t.overflow,Fs=e),e=Sf(e,r.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yh(t.return,e,n)}function nh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Tv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(zt(t,e,r.children,n),r=Je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ue(Je,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),nh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&uu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}nh(e,!0,n,null,i);break;case"together":nh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ts(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ts(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eS(t,e,n){switch(e.tag){case 3:wv(e),Ui();break;case 5:K0(e);break;case 1:Xt(e.type)&&ru(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ue(ou,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Je,Je.current&1),e.flags|=128,null):n&e.child.childLanes?Ev(t,e,n):(Ue(Je,Je.current&1),t=vr(t,e,n),t!==null?t.sibling:null);Ue(Je,Je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Tv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ue(Je,Je.current),r)break;return null;case 22:case 23:return e.lanes=0,_v(t,e,n)}return vr(t,e,n)}var Iv,sd,Sv,Av;Iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};Sv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ps(Kn.current);var i=null;switch(n){case"input":s=xh(t,s),r=xh(t,r),i=[];break;case"select":s=Ze({},s,{value:void 0}),r=Ze({},r,{value:void 0}),i=[];break;case"textarea":s=Rh(t,s),r=Rh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tu)}bh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Yo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&He("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Av=function(t,e,n,r){n!==r&&(e.flags|=4)};function Io(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tS(t,e,n){var r=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Xt(e.type)&&nu(),Nt(e),null;case 3:return r=e.stateNode,Bi(),Ge(Jt),Ge(Lt),_f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(dd(kn),kn=null))),sd(t,e),Nt(e),null;case 5:yf(e);var s=Ps(la.current);if(n=e.type,t!==null&&e.stateNode!=null)Sv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Nt(e),null}if(t=Ps(Kn.current),al(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Hn]=e,r[oa]=i,t=(e.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(s=0;s<Po.length;s++)He(Po[s],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":bm(r,i),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},He("invalid",r);break;case"textarea":Dm(r,i),He("invalid",r)}bh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),s=["children",""+l]):Yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&He("scroll",r)}switch(n){case"input":Xa(r),Nm(r,i,!0);break;case"textarea":Xa(r),Om(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Z_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Hn]=e,t[oa]=r,Iv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nh(n,r),n){case"dialog":He("cancel",t),He("close",t),s=r;break;case"iframe":case"object":case"embed":He("load",t),s=r;break;case"video":case"audio":for(s=0;s<Po.length;s++)He(Po[s],t);s=r;break;case"source":He("error",t),s=r;break;case"img":case"image":case"link":He("error",t),He("load",t),s=r;break;case"details":He("toggle",t),s=r;break;case"input":bm(t,r),s=xh(t,r),He("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ze({},r,{value:void 0}),He("invalid",t);break;case"textarea":Dm(t,r),s=Rh(t,r),He("invalid",t);break;default:s=r}bh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?n0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&e0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jo(t,u):typeof u=="number"&&Jo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&He("scroll",t):u!=null&&Wd(t,i,u,o))}switch(n){case"input":Xa(t),Nm(t,r,!1);break;case"textarea":Xa(t),Om(t);break;case"option":r.value!=null&&t.setAttribute("value",""+as(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Si(t,!!r.multiple,i,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)Av(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ps(la.current),Ps(Kn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(i=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return Nt(e),null;case 13:if(Ge(Je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&sn!==null&&e.mode&1&&!(e.flags&128))$0(),Ui(),e.flags|=98560,i=!1;else if(i=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Hn]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),i=!1}else kn!==null&&(dd(kn),kn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Je.current&1?yt===0&&(yt=3):Pf())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return Bi(),sd(t,e),t===null&&sa(e.stateNode.containerInfo),Nt(e),null;case 10:return ff(e.type._context),Nt(e),null;case 17:return Xt(e.type)&&nu(),Nt(e),null;case 19:if(Ge(Je),i=e.memoizedState,i===null)return Nt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Io(i,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,Io(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ue(Je,Je.current&1|2),e.child}t=t.sibling}i.tail!==null&&ot()>$i&&(e.flags|=128,r=!0,Io(i,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ke)return Nt(e),null}else 2*ot()-i.renderingStartTime>$i&&n!==1073741824&&(e.flags|=128,r=!0,Io(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ot(),e.sibling=null,n=Je.current,Ue(Je,r?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function nS(t,e){switch(uf(e),e.tag){case 1:return Xt(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bi(),Ge(Jt),Ge(Lt),_f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(Ge(Je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ge(Je),null;case 4:return Bi(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var cl=!1,Vt=!1,rS=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){st(t,e,r)}else n.current=null}function id(t,e,n){try{n()}catch(r){st(t,e,r)}}var Ig=!1;function sS(t,e){if(zh=Xl,t=P0(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var x;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===t)break t;if(m===n&&++h===s&&(l=o),m===i&&++f===r&&(u=o),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($h={focusedElem:t,selectionRange:n},Xl=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var b=P.memoizedProps,O=P.memoizedState,A=e.stateNode,E=A.getSnapshotBeforeUpdate(e.elementType===e.type?b:An(e.type,b),O);A.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){st(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return P=Ig,Ig=!1,P}function jo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&id(e,n,i)}s=s.next}while(s!==r)}}function qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xv(t){var e=t.alternate;e!==null&&(t.alternate=null,xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[oa],delete e[Gh],delete e[jI],delete e[BI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kv(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var At=null,xn=!1;function Nr(t,e,n){for(n=n.child;n!==null;)Cv(t,e,n),n=n.sibling}function Cv(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 5:Vt||Ti(n,e);case 6:var r=At,s=xn;At=null,Nr(t,e,n),At=r,xn=s,At!==null&&(xn?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(xn?(t=At,n=n.stateNode,t.nodeType===8?Qc(t.parentNode,n):t.nodeType===1&&Qc(t,n),ta(t)):Qc(At,n.stateNode));break;case 4:r=At,s=xn,At=n.stateNode.containerInfo,xn=!0,Nr(t,e,n),At=r,xn=s;break;case 0:case 11:case 14:case 15:if(!Vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&id(n,e,o),s=s.next}while(s!==r)}Nr(t,e,n);break;case 1:if(!Vt&&(Ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){st(n,e,l)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(Vt=(r=Vt)||n.memoizedState!==null,Nr(t,e,n),Vt=r):Nr(t,e,n);break;default:Nr(t,e,n)}}function Ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rS),e.forEach(function(r){var s=fS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:At=l.stateNode,xn=!1;break e;case 3:At=l.stateNode.containerInfo,xn=!0;break e;case 4:At=l.stateNode.containerInfo,xn=!0;break e}l=l.return}if(At===null)throw Error(F(160));Cv(i,o,s),At=null,xn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){st(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rv(e,t),e=e.sibling}function Rv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Bn(t),r&4){try{jo(3,t,t.return),qu(3,t)}catch(b){st(t,t.return,b)}try{jo(5,t,t.return)}catch(b){st(t,t.return,b)}}break;case 1:Sn(e,t),Bn(t),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(Sn(e,t),Bn(t),r&512&&n!==null&&Ti(n,n.return),t.flags&32){var s=t.stateNode;try{Jo(s,"")}catch(b){st(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&J_(s,i),Nh(l,o);var h=Nh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?n0(s,p):f==="dangerouslySetInnerHTML"?e0(s,p):f==="children"?Jo(s,p):Wd(s,f,p,h)}switch(l){case"input":kh(s,i);break;case"textarea":X_(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Si(s,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Si(s,!!i.multiple,i.defaultValue,!0):Si(s,!!i.multiple,i.multiple?[]:"",!1))}s[oa]=i}catch(b){st(t,t.return,b)}}break;case 6:if(Sn(e,t),Bn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){st(t,t.return,b)}}break;case 3:if(Sn(e,t),Bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(b){st(t,t.return,b)}break;case 4:Sn(e,t),Bn(t);break;case 13:Sn(e,t),Bn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(kf=ot())),r&4&&Ag(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(h=Vt)||f,Sn(e,t),Vt=h):Sn(e,t),Bn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(p=K=f;K!==null;){switch(m=K,x=m.child,m.tag){case 0:case 11:case 14:case 15:jo(4,m,m.return);break;case 1:Ti(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(b){st(r,n,b)}}break;case 5:Ti(m,m.return);break;case 22:if(m.memoizedState!==null){kg(p);continue}}x!==null?(x.return=m,K=x):kg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=t0("display",o))}catch(b){st(t,t.return,b)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(b){st(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Sn(e,t),Bn(t),r&4&&Ag(t);break;case 21:break;default:Sn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Jo(s,""),r.flags&=-33);var i=Sg(t);ld(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sg(t);ad(t,l,o);break;default:throw Error(F(161))}}catch(u){st(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){K=t,Pv(t)}function Pv(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||cl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Vt;l=cl;var h=Vt;if(cl=o,(Vt=u)&&!h)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Cg(s):u!==null?(u.return=o,K=u):Cg(s);for(;i!==null;)K=i,Pv(i),i=i.sibling;K=s,cl=l,Vt=h}xg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):xg(t)}}function xg(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Vt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&cg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Vt||e.flags&512&&od(e)}catch(m){st(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function kg(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Cg(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qu(4,e)}catch(u){st(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){st(e,s,u)}}var i=e.return;try{od(e)}catch(u){st(e,i,u)}break;case 5:var o=e.return;try{od(e)}catch(u){st(e,o,u)}}}catch(u){st(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var oS=Math.ceil,du=Sr.ReactCurrentDispatcher,Af=Sr.ReactCurrentOwner,En=Sr.ReactCurrentBatchConfig,Se=0,St=null,ht=null,Ct=0,nn=0,Ii=ys(0),yt=0,da=null,js=0,Gu=0,xf=0,Bo=null,Qt=null,kf=0,$i=1/0,ir=null,fu=!1,ud=null,Zr=null,hl=!1,qr=null,pu=0,zo=0,cd=null,Nl=-1,Dl=0;function Ht(){return Se&6?ot():Nl!==-1?Nl:Nl=ot()}function es(t){return t.mode&1?Se&2&&Ct!==0?Ct&-Ct:$I.transition!==null?(Dl===0&&(Dl=p0()),Dl):(t=Ne,t!==0||(t=window.event,t=t===void 0?16:E0(t.type)),t):1}function bn(t,e,n,r){if(50<zo)throw zo=0,cd=null,Error(F(185));Aa(t,n,r),(!(Se&2)||t!==St)&&(t===St&&(!(Se&2)&&(Gu|=n),yt===4&&Ur(t,Ct)),Zt(t,r),n===1&&Se===0&&!(e.mode&1)&&($i=ot()+500,zu&&_s()))}function Zt(t,e){var n=t.callbackNode;$T(t,e);var r=Jl(t,t===St?Ct:0);if(r===0)n!==null&&Lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lm(n),e===1)t.tag===0?zI(Rg.bind(null,t)):j0(Rg.bind(null,t)),FI(function(){!(Se&6)&&_s()}),n=null;else{switch(m0(r)){case 1:n=Xd;break;case 4:n=d0;break;case 16:n=Yl;break;case 536870912:n=f0;break;default:n=Yl}n=Fv(n,bv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bv(t,e){if(Nl=-1,Dl=0,Se&6)throw Error(F(327));var n=t.callbackNode;if(Ri()&&t.callbackNode!==n)return null;var r=Jl(t,t===St?Ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mu(t,r);else{e=r;var s=Se;Se|=2;var i=Dv();(St!==t||Ct!==e)&&(ir=null,$i=ot()+500,Ds(t,e));do try{uS();break}catch(l){Nv(t,l)}while(!0);df(),du.current=i,Se=s,ht!==null?e=0:(St=null,Ct=0,e=yt)}if(e!==0){if(e===2&&(s=Lh(t),s!==0&&(r=s,e=hd(t,s))),e===1)throw n=da,Ds(t,0),Ur(t,r),Zt(t,ot()),n;if(e===6)Ur(t,r);else{if(s=t.current.alternate,!(r&30)&&!aS(s)&&(e=mu(t,r),e===2&&(i=Lh(t),i!==0&&(r=i,e=hd(t,i))),e===1))throw n=da,Ds(t,0),Ur(t,r),Zt(t,ot()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:xs(t,Qt,ir);break;case 3:if(Ur(t,r),(r&130023424)===r&&(e=kf+500-ot(),10<e)){if(Jl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qh(xs.bind(null,t,Qt,ir),e);break}xs(t,Qt,ir);break;case 4:if(Ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Pn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oS(r/1960))-r,10<r){t.timeoutHandle=qh(xs.bind(null,t,Qt,ir),r);break}xs(t,Qt,ir);break;case 5:xs(t,Qt,ir);break;default:throw Error(F(329))}}}return Zt(t,ot()),t.callbackNode===n?bv.bind(null,t):null}function hd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Ds(t,e).flags|=256),t=mu(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&dd(e)),t}function dd(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function aS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!On(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(t,e){for(e&=~xf,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function Rg(t){if(Se&6)throw Error(F(327));Ri();var e=Jl(t,0);if(!(e&1))return Zt(t,ot()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=da,Ds(t,0),Ur(t,e),Zt(t,ot()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xs(t,Qt,ir),Zt(t,ot()),null}function Cf(t,e){var n=Se;Se|=1;try{return t(e)}finally{Se=n,Se===0&&($i=ot()+500,zu&&_s())}}function Bs(t){qr!==null&&qr.tag===0&&!(Se&6)&&Ri();var e=Se;Se|=1;var n=En.transition,r=Ne;try{if(En.transition=null,Ne=1,t)return t()}finally{Ne=r,En.transition=n,Se=e,!(Se&6)&&_s()}}function Rf(){nn=Ii.current,Ge(Ii)}function Ds(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LI(n)),ht!==null)for(n=ht.return;n!==null;){var r=n;switch(uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:Bi(),Ge(Jt),Ge(Lt),_f();break;case 5:yf(r);break;case 4:Bi();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:ff(r.type._context);break;case 22:case 23:Rf()}n=n.return}if(St=t,ht=t=ts(t.current,null),Ct=nn=e,yt=0,da=null,xf=Gu=js=0,Qt=Bo=null,Rs!==null){for(e=0;e<Rs.length;e++)if(n=Rs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Rs=null}return t}function Nv(t,e){do{var n=ht;try{if(df(),Rl.current=hu,cu){for(var r=Xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}cu=!1}if(Us=0,It=gt=Xe=null,Uo=!1,ua=0,Af.current=null,n===null||n.return===null){yt=1,da=e,ht=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ct,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=gg(o);if(x!==null){x.flags&=-257,yg(x,o,l,i,e),x.mode&1&&mg(i,h,e),e=x,u=h;var P=e.updateQueue;if(P===null){var b=new Set;b.add(u),e.updateQueue=b}else P.add(u);break e}else{if(!(e&1)){mg(i,h,e),Pf();break e}u=Error(F(426))}}else if(Ke&&l.mode&1){var O=gg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),yg(O,o,l,i,e),cf(zi(u,l));break e}}i=u=zi(u,l),yt!==4&&(yt=2),Bo===null?Bo=[i]:Bo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var A=mv(i,u,e);ug(i,A);break e;case 1:l=u;var E=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Zr===null||!Zr.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=gv(i,l,e);ug(i,D);break e}}i=i.return}while(i!==null)}Vv(n)}catch(L){e=L,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(!0)}function Dv(){var t=du.current;return du.current=hu,t===null?hu:t}function Pf(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||!(js&268435455)&&!(Gu&268435455)||Ur(St,Ct)}function mu(t,e){var n=Se;Se|=2;var r=Dv();(St!==t||Ct!==e)&&(ir=null,Ds(t,e));do try{lS();break}catch(s){Nv(t,s)}while(!0);if(df(),Se=n,du.current=r,ht!==null)throw Error(F(261));return St=null,Ct=0,yt}function lS(){for(;ht!==null;)Ov(ht)}function uS(){for(;ht!==null&&!OT();)Ov(ht)}function Ov(t){var e=Lv(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?Vv(t):ht=e,Af.current=null}function Vv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nS(n,e),n!==null){n.flags&=32767,ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,ht=null;return}}else if(n=tS(n,e,nn),n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);yt===0&&(yt=5)}function xs(t,e,n){var r=Ne,s=En.transition;try{En.transition=null,Ne=1,cS(t,e,n,r)}finally{En.transition=s,Ne=r}return null}function cS(t,e,n,r){do Ri();while(qr!==null);if(Se&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(HT(t,i),t===St&&(ht=St=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,Fv(Yl,function(){return Ri(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=En.transition,En.transition=null;var o=Ne;Ne=1;var l=Se;Se|=4,Af.current=null,sS(t,n),Rv(n,t),PI($h),Xl=!!zh,$h=zh=null,t.current=n,iS(n),VT(),Se=l,Ne=o,En.transition=i}else t.current=n;if(hl&&(hl=!1,qr=t,pu=s),i=t.pendingLanes,i===0&&(Zr=null),FT(n.stateNode),Zt(t,ot()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fu)throw fu=!1,t=ud,ud=null,t;return pu&1&&t.tag!==0&&Ri(),i=t.pendingLanes,i&1?t===cd?zo++:(zo=0,cd=t):zo=0,_s(),null}function Ri(){if(qr!==null){var t=m0(pu),e=En.transition,n=Ne;try{if(En.transition=null,Ne=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,pu=0,Se&6)throw Error(F(331));var s=Se;for(Se|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(K=h;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:jo(8,f,i)}var p=f.child;if(p!==null)p.return=f,K=p;else for(;K!==null;){f=K;var m=f.sibling,x=f.return;if(xv(f),f===h){K=null;break}if(m!==null){m.return=x,K=m;break}K=x}}}var P=i.alternate;if(P!==null){var b=P.child;if(b!==null){P.child=null;do{var O=b.sibling;b.sibling=null,b=O}while(b!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:jo(9,i,i.return)}var A=i.sibling;if(A!==null){A.return=i.return,K=A;break e}K=i.return}}var E=t.current;for(K=E;K!==null;){o=K;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,K=k;else e:for(o=E;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qu(9,l)}}catch(L){st(l,l.return,L)}if(l===o){K=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,K=D;break e}K=l.return}}if(Se=s,_s(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(Lu,t)}catch{}r=!0}return r}finally{Ne=n,En.transition=e}}return!1}function Pg(t,e,n){e=zi(n,e),e=mv(t,e,1),t=Xr(t,e,1),e=Ht(),t!==null&&(Aa(t,1,e),Zt(t,e))}function st(t,e,n){if(t.tag===3)Pg(t,t,n);else for(;e!==null;){if(e.tag===3){Pg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zr===null||!Zr.has(r))){t=zi(n,t),t=gv(e,t,1),e=Xr(e,t,1),t=Ht(),e!==null&&(Aa(e,1,t),Zt(e,t));break}}e=e.return}}function hS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(Ct&n)===n&&(yt===4||yt===3&&(Ct&130023424)===Ct&&500>ot()-kf?Ds(t,0):xf|=n),Zt(t,e)}function Mv(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=Ht();t=_r(t,e),t!==null&&(Aa(t,e,n),Zt(t,n))}function dS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mv(t,n)}function fS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Mv(t,n)}var Lv;Lv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,eS(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Ke&&e.flags&1048576&&B0(e,iu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var s=Fi(e,Lt.current);Ci(e,n),s=wf(null,e,r,t,s,n);var i=Ef();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(r)?(i=!0,ru(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,mf(e),s.updater=Hu,e.stateNode=s,s._reactInternals=e,Xh(e,r,t,n),e=td(null,e,r,!0,i,n)):(e.tag=0,Ke&&i&&lf(e),zt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=mS(r),t=An(r,t),s){case 0:e=ed(null,e,r,t,n);break e;case 1:e=wg(null,e,r,t,n);break e;case 11:e=_g(null,e,r,t,n);break e;case 14:e=vg(null,e,r,An(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:An(r,s),ed(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:An(r,s),wg(t,e,r,s,n);case 3:e:{if(wv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,W0(t,e),lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=zi(Error(F(423)),e),e=Eg(t,e,r,n,s);break e}else if(r!==s){s=zi(Error(F(424)),e),e=Eg(t,e,r,n,s);break e}else for(sn=Jr(e.stateNode.containerInfo.firstChild),on=e,Ke=!0,kn=null,n=q0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===s){e=vr(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return K0(e),t===null&&Qh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Hh(r,s)?o=null:i!==null&&Hh(r,i)&&(e.flags|=32),vv(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return Ev(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ji(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:An(r,s),_g(t,e,r,s,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ue(ou,r._currentValue),r._currentValue=o,i!==null)if(On(i.value,o)){if(i.children===s.children&&!Jt.current){e=vr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=pr(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Yh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}zt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ci(e,n),s=Tn(s),r=r(s),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,s=An(r,e.pendingProps),s=An(r.type,s),vg(t,e,r,s,n);case 15:return yv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:An(r,s),bl(t,e),e.tag=1,Xt(r)?(t=!0,ru(e)):t=!1,Ci(e,n),pv(e,r,s),Xh(e,r,s,n),td(null,e,r,!0,t,n);case 19:return Tv(t,e,n);case 22:return _v(t,e,n)}throw Error(F(156,e.tag))};function Fv(t,e){return h0(t,e)}function pS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,r){return new pS(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mS(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qd)return 11;if(t===Yd)return 14}return 2}function ts(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fi:return Os(n.children,s,i,e);case Kd:o=8,s|=8;break;case Th:return t=wn(12,n,e,s|2),t.elementType=Th,t.lanes=i,t;case Ih:return t=wn(13,n,e,s),t.elementType=Ih,t.lanes=i,t;case Sh:return t=wn(19,n,e,s),t.elementType=Sh,t.lanes=i,t;case K_:return Wu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G_:o=10;break e;case W_:o=9;break e;case Qd:o=11;break e;case Yd:o=14;break e;case Vr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=wn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Os(t,e,n,r){return t=wn(7,t,r,e),t.lanes=n,t}function Wu(t,e,n,r){return t=wn(22,t,r,e),t.elementType=K_,t.lanes=n,t.stateNode={isHidden:!1},t}function rh(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function sh(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,r,s,i,o,l,u){return t=new gS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=wn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(i),t}function yS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uv(t){if(!t)return ls;t=t._reactInternals;e:{if(Ys(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Xt(n))return U0(t,n,e)}return e}function jv(t,e,n,r,s,i,o,l,u){return t=Nf(n,r,!0,t,s,i,o,l,u),t.context=Uv(null),n=t.current,r=Ht(),s=es(n),i=pr(r,s),i.callback=e??null,Xr(n,i,s),t.current.lanes=s,Aa(t,s,r),Zt(t,r),t}function Ku(t,e,n,r){var s=e.current,i=Ht(),o=es(s);return n=Uv(n),e.context===null?e.context=n:e.pendingContext=n,e=pr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xr(s,e,o),t!==null&&(bn(t,s,o,i),Cl(t,s,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function _S(){return null}var Bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Qu.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ku(t,e,null,null)};Qu.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bs(function(){Ku(null,t,null,null)}),e[yr]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=_0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&w0(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function vS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=gu(o);i.call(h)}}var o=jv(e,r,t,0,null,!1,!1,"",Ng);return t._reactRootContainer=o,t[yr]=o.current,sa(t.nodeType===8?t.parentNode:t),Bs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=gu(u);l.call(h)}}var u=Nf(t,0,!1,null,null,!1,!1,"",Ng);return t._reactRootContainer=u,t[yr]=u.current,sa(t.nodeType===8?t.parentNode:t),Bs(function(){Ku(e,u,n,r)}),u}function Ju(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=gu(o);l.call(u)}}Ku(e,o,t,s)}else o=vS(n,e,t,s,r);return gu(o)}g0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(Zd(e,n|1),Zt(e,ot()),!(Se&6)&&($i=ot()+500,_s()))}break;case 13:Bs(function(){var r=_r(t,1);if(r!==null){var s=Ht();bn(r,t,1,s)}}),Df(t,1)}};ef=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=Ht();bn(e,t,134217728,n)}Df(t,134217728)}};y0=function(t){if(t.tag===13){var e=es(t),n=_r(t,e);if(n!==null){var r=Ht();bn(n,t,e,r)}Df(t,e)}};_0=function(){return Ne};v0=function(t,e){var n=Ne;try{return Ne=t,e()}finally{Ne=n}};Oh=function(t,e,n){switch(e){case"input":if(kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Bu(r);if(!s)throw Error(F(90));Y_(r),kh(r,s)}}}break;case"textarea":X_(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};i0=Cf;o0=Bs;var wS={usingClientEntryPoint:!1,Events:[ka,yi,Bu,r0,s0,Cf]},So={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=u0(t),t===null?null:t.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||_S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Lu=dl.inject(ES),Wn=dl}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wS;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(F(200));return yS(t,e,null,n)};ln.createRoot=function(t,e){if(!Vf(t))throw Error(F(299));var n=!1,r="",s=Bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,r,s),t[yr]=e.current,sa(t.nodeType===8?t.parentNode:t),new Of(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=u0(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return Bs(t)};ln.hydrate=function(t,e,n){if(!Yu(e))throw Error(F(200));return Ju(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Bv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jv(e,null,t,1,n??null,s,!1,i,o),t[yr]=e.current,sa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Qu(e)};ln.render=function(t,e,n){if(!Yu(e))throw Error(F(200));return Ju(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!Yu(t))throw Error(F(40));return t._reactRootContainer?(Bs(function(){Ju(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};ln.unstable_batchedUpdates=Cf;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Ju(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zv)}catch(t){console.error(t)}}zv(),z_.exports=ln;var TS=z_.exports,Dg=TS;wh.createRoot=Dg.createRoot,wh.hydrateRoot=Dg.hydrateRoot;/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=t=>{const e=SS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>re.createElement("svg",{ref:u,...AS,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:$v("lucide",s),...!i&&!xS(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>re.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(t,e)=>{const n=re.forwardRef(({className:r,...s},i)=>re.createElement(kS,{ref:i,iconNode:e,className:$v(`lucide-${IS(Og(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Og(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],RS=de("binary",CS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Hv=de("brain",PS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],NS=de("chevron-down",bS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],OS=de("chevron-up",DS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],MS=de("circle-alert",VS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],FS=de("circle-check",LS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],jS=de("clipboard-check",US);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],qv=de("clock",BS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],$S=de("cloud-upload",zS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],qS=de("component",HS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Vg=de("copy",GS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Gv=de("database",WS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],QS=de("download",KS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],JS=de("flag",YS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],ZS=de("folder-kanban",XS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Wv=de("globe",eA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],nA=de("layers",tA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],sA=de("lightbulb",rA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],oA=de("loader-circle",iA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Mg=de("map-pin",aA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],uA=de("palette",lA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],hA=de("pen",cA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],fA=de("play",dA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],mA=de("plus",pA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],yA=de("power",gA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],vA=de("refresh-ccw",_A);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],EA=de("rotate-ccw",wA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],IA=de("save",TA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],AA=de("settings-2",SA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],kA=de("sparkles",xA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],RA=de("target",CA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],bA=de("trash-2",PA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Kv=de("trending-up",NA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],OA=de("users",DA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],MA=de("wand-sparkles",VA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],FA=de("zap-off",LA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Qv=de("zap",UA),jA=()=>{};var Lg={};/**
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
 */const Yv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,x=h&63;u||(x=64,o||(m=64)),r.push(n[f],n[p],n[m],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new zA;const m=i<<2|l>>4;if(r.push(m),h!==64){const x=l<<4&240|h>>2;if(r.push(x),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $A=function(t){const e=Yv(t);return Jv.encodeByteArray(e,!0)},yu=function(t){return $A(t).replace(/\./g,"")},Xv=function(t){try{return Jv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qA=()=>HA().__FIREBASE_DEFAULTS__,GA=()=>{if(typeof process>"u"||typeof Lg>"u")return;const t=Lg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xv(t[1]);return e&&JSON.parse(e)},Xu=()=>{try{return jA()||qA()||GA()||WA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zv=t=>{var e,n;return(n=(e=Xu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ew=t=>{const e=Zv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tw=()=>{var t;return(t=Xu())==null?void 0:t.config},nw=t=>{var e;return(e=Xu())==null?void 0:e[`_${t}`]};/**
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
 */class KA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function vs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function rw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),""].join(".")}const $o={};function QA(){const t={prod:[],emulator:[]};for(const e of Object.keys($o))$o[e]?t.emulator.push(e):t.prod.push(e);return t}function YA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Fg=!1;function Lf(t,e){if(typeof window>"u"||typeof document>"u"||!vs(window.location.host)||$o[t]===e||$o[t]||Fg)return;$o[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=QA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,x){m.setAttribute("width","24"),m.setAttribute("id",x),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Fg=!0,o()},m}function f(m,x){m.setAttribute("id",x),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=YA(r),x=n("text"),P=document.getElementById(x)||document.createElement("span"),b=n("learnmore"),O=document.getElementById(b)||document.createElement("a"),A=n("preprendIcon"),E=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const k=m.element;l(k),f(O,b);const D=h();u(E,A),k.append(E,P,O,D),document.body.appendChild(k)}i?(P.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function XA(){var e;const t=(e=Xu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ex(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nx(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rx(){return!XA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sx(){try{return typeof indexedDB=="object"}catch{return!1}}function ix(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ox="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ox,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ax(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new nr(s,l,r)}}function ax(t,e){return t.replace(lx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lx=/\{\$([^}]+)}/g;function ux(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ug(i)&&Ug(o)){if(!zs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ug(t){return t!==null&&typeof t=="object"}/**
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
 */function Pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cx(t,e){const n=new hx(t,e);return n.subscribe.bind(n)}class hx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dx(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ih),s.error===void 0&&(s.error=ih),s.complete===void 0&&(s.complete=ih);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ih(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class us{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class fx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mx(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:px(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function px(t){return t===ks?void 0:t}function mx(t){return t.instantiationMode==="EAGER"}/**
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
 */class gx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const yx={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},_x=me.INFO,vx={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},wx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=_x,this._logHandler=wx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Ex=(t,e)=>e.some(n=>t instanceof n);let jg,Bg;function Tx(){return jg||(jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ix(){return Bg||(Bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sw=new WeakMap,fd=new WeakMap,iw=new WeakMap,oh=new WeakMap,Uf=new WeakMap;function Sx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ns(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sw.set(n,t)}).catch(()=>{}),Uf.set(e,t),e}function Ax(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ns(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xx(t){pd=t(pd)}function kx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ah(this),e,...n);return iw.set(r,e.sort?e.sort():[e]),ns(r)}:Ix().includes(t)?function(...e){return t.apply(ah(this),e),ns(sw.get(this))}:function(...e){return ns(t.apply(ah(this),e))}}function Cx(t){return typeof t=="function"?kx(t):(t instanceof IDBTransaction&&Ax(t),Ex(t,Tx())?new Proxy(t,pd):t)}function ns(t){if(t instanceof IDBRequest)return Sx(t);if(oh.has(t))return oh.get(t);const e=Cx(t);return e!==t&&(oh.set(t,e),Uf.set(e,t)),e}const ah=t=>Uf.get(t);function Rx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ns(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ns(o.result),u.oldVersion,u.newVersion,ns(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Px=["get","getKey","getAll","getAllKeys","count"],bx=["put","add","delete","clear"],lh=new Map;function zg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lh.get(e))return lh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Px.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return lh.set(e,i),i}xx(t=>({...t,get:(e,n,r)=>zg(e,n)||t.get(e,n,r),has:(e,n)=>!!zg(e,n)||t.has(e,n)}));/**
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
 */class Nx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Dx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",$g="0.14.9";/**
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
 */const wr=new Ff("@firebase/app"),Ox="@firebase/app-compat",Vx="@firebase/analytics-compat",Mx="@firebase/analytics",Lx="@firebase/app-check-compat",Fx="@firebase/app-check",Ux="@firebase/auth",jx="@firebase/auth-compat",Bx="@firebase/database",zx="@firebase/data-connect",$x="@firebase/database-compat",Hx="@firebase/functions",qx="@firebase/functions-compat",Gx="@firebase/installations",Wx="@firebase/installations-compat",Kx="@firebase/messaging",Qx="@firebase/messaging-compat",Yx="@firebase/performance",Jx="@firebase/performance-compat",Xx="@firebase/remote-config",Zx="@firebase/remote-config-compat",ek="@firebase/storage",tk="@firebase/storage-compat",nk="@firebase/firestore",rk="@firebase/ai",sk="@firebase/firestore-compat",ik="firebase",ok="12.10.0";/**
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
 */const gd="[DEFAULT]",ak={[md]:"fire-core",[Ox]:"fire-core-compat",[Mx]:"fire-analytics",[Vx]:"fire-analytics-compat",[Fx]:"fire-app-check",[Lx]:"fire-app-check-compat",[Ux]:"fire-auth",[jx]:"fire-auth-compat",[Bx]:"fire-rtdb",[zx]:"fire-data-connect",[$x]:"fire-rtdb-compat",[Hx]:"fire-fn",[qx]:"fire-fn-compat",[Gx]:"fire-iid",[Wx]:"fire-iid-compat",[Kx]:"fire-fcm",[Qx]:"fire-fcm-compat",[Yx]:"fire-perf",[Jx]:"fire-perf-compat",[Xx]:"fire-rc",[Zx]:"fire-rc-compat",[ek]:"fire-gcs",[tk]:"fire-gcs-compat",[nk]:"fire-fst",[sk]:"fire-fst-compat",[rk]:"fire-vertex","fire-js":"fire-js",[ik]:"fire-js-all"};/**
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
 */const _u=new Map,lk=new Map,yd=new Map;function Hg(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $s(t){const e=t.name;if(yd.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of _u.values())Hg(n,t);for(const n of lk.values())Hg(n,t);return!0}function Zu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rs=new Ra("app","Firebase",uk);/**
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
 */class ck{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=ok;function ow(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw rs.create("bad-app-name",{appName:String(s)});if(n||(n=tw()),!n)throw rs.create("no-options");const i=_u.get(s);if(i){if(zs(n,i.options)&&zs(r,i.config))return i;throw rs.create("duplicate-app",{appName:s})}const o=new gx(s);for(const u of yd.values())o.addComponent(u);const l=new ck(n,r,o);return _u.set(s,l),l}function jf(t=gd){const e=_u.get(t);if(!e&&t===gd&&tw())return ow();if(!e)throw rs.create("no-app",{appName:t});return e}function Qn(t,e,n){let r=ak[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(o.join(" "));return}$s(new us(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hk="firebase-heartbeat-database",dk=1,fa="firebase-heartbeat-store";let uh=null;function aw(){return uh||(uh=Rx(hk,dk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw rs.create("idb-open",{originalErrorMessage:t.message})})),uh}async function fk(t){try{const n=(await aw()).transaction(fa),r=await n.objectStore(fa).get(lw(t));return await n.done,r}catch(e){if(e instanceof nr)wr.warn(e.message);else{const n=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function qg(t,e){try{const r=(await aw()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,lw(t)),await r.done}catch(n){if(n instanceof nr)wr.warn(n.message);else{const r=rs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function lw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pk=1024,mk=30;class gk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _k(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>mk){const o=vk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gg(),{heartbeatsToSend:r,unsentEntries:s}=yk(this._heartbeatsCache.heartbeats),i=yu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wr.warn(n),""}}}function Gg(){return new Date().toISOString().substring(0,10)}function yk(t,e=pk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _k{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sx()?ix().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wg(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}function vk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function wk(t){$s(new us("platform-logger",e=>new Nx(e),"PRIVATE")),$s(new us("heartbeat",e=>new gk(e),"PRIVATE")),Qn(md,$g,t),Qn(md,$g,"esm2020"),Qn("fire-js","")}wk("");var Ek="firebase",Tk="12.10.0";/**
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
 */Qn(Ek,Tk,"app");/**
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
 */const uw="firebasestorage.googleapis.com",cw="storageBucket",Ik=2*60*1e3,Sk=10*60*1e3;/**
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
 */class lt extends nr{constructor(e,n,r=0){super(ch(e),`Firebase Storage: ${n} (${ch(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ch(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var at;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(at||(at={}));function ch(t){return"storage/"+t}function Bf(){const t="An unknown error occurred, please check the error payload for server response.";return new lt(at.UNKNOWN,t)}function Ak(t){return new lt(at.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function xk(t){return new lt(at.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new lt(at.UNAUTHENTICATED,t)}function Ck(){return new lt(at.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Rk(t){return new lt(at.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Pk(){return new lt(at.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bk(){return new lt(at.CANCELED,"User canceled the upload/download.")}function Nk(t){return new lt(at.INVALID_URL,"Invalid URL '"+t+"'.")}function Dk(t){return new lt(at.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ok(){return new lt(at.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cw+"' property when initializing the app?")}function Vk(){return new lt(at.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mk(t){return new lt(at.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _d(t){return new lt(at.INVALID_ARGUMENT,t)}function hw(){return new lt(at.APP_DELETED,"The Firebase app was deleted.")}function Lk(t){return new lt(at.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ho(t,e){return new lt(at.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ao(t){throw new lt(at.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class $t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=$t.makeFromUrl(e,n)}catch{return new $t(e,"")}if(r.path==="")return r;throw Dk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",x=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),P={bucket:1,path:3},b=n===uw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",A=new RegExp(`^https?://${b}/${s}/${O}`,"i"),k=[{regex:l,indices:u,postModify:i},{regex:x,indices:P,postModify:h},{regex:A,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<k.length;D++){const L=k[D],B=L.regex.exec(e);if(B){const w=B[L.indices.bucket];let v=B[L.indices.path];v||(v=""),r=new $t(w,v),L.postModify(r);break}}if(r==null)throw Nk(e);return r}}class Fk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Uk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(x,u())},O)}function m(){i&&clearTimeout(i)}function x(O,...A){if(h){m();return}if(O){m(),f.call(null,O,...A);return}if(u()||o){m(),f.call(null,O,...A);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,p(k)}let P=!1;function b(O){P||(P=!0,m(),!h&&(s!==null?(O||(l=2),clearTimeout(s),p(0)):O||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function jk(t){t(!1)}/**
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
 */function Bk(t){return t!==void 0}function zk(t){return typeof t=="object"&&!Array.isArray(t)}function dw(t){return typeof t=="string"||t instanceof String}function Kg(t){return zf()&&t instanceof Blob}function zf(){return typeof Blob<"u"}function vd(t,e,n,r){if(r<e)throw _d(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _d(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function $f(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $k(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Vs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vs||(Vs={}));/**
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
 */function Hk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class qk{constructor(e,n,r,s,i,o,l,u,h,f,p,m=!0,x=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,b)=>{this.resolve_=P,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new fl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Vs.NO_ERROR,u=i.getStatus();if(!l||Hk(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Vs.ABORT;r(!1,new fl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new fl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Bk(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Bf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?hw():bk();o(u)}else{const u=Pk();o(u)}};this.canceled_?n(!1,new fl(!1,null,!0)):this.backoffId_=Uk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Gk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Wk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Kk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Qk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Yk(t,e,n,r,s,i,o=!0,l=!1){const u=$k(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return Kk(f,e),Gk(f,n),Wk(f,i),Qk(f,r),new qk(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function Jk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xk(...t){const e=Jk();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(zf())return new Blob(t);throw new lt(at.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function eC(t){if(typeof atob>"u")throw Mk("base-64");return atob(t)}/**
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
 */const Gn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hh{constructor(e,n){this.data=e,this.contentType=n||null}}function tC(t,e){switch(t){case Gn.RAW:return new hh(fw(e));case Gn.BASE64:case Gn.BASE64URL:return new hh(pw(t,e));case Gn.DATA_URL:return new hh(rC(e),sC(e))}throw Bf()}function fw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nC(t){let e;try{e=decodeURIComponent(t)}catch{throw Ho(Gn.DATA_URL,"Malformed data URL.")}return fw(e)}function pw(t,e){switch(t){case Gn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ho(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Gn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ho(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eC(e)}catch(s){throw s.message.includes("polyfill")?s:Ho(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class mw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ho(Gn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rC(t){const e=new mw(t);return e.base64?pw(Gn.BASE64,e.rest):nC(e.rest)}function sC(t){return new mw(t).contentType}function iC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class jr{constructor(e,n){let r=0,s="";Kg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Kg(this.data_)){const r=this.data_,s=Zk(r,e,n);return s===null?null:new jr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new jr(r,!0)}}static getBlob(...e){if(zf()){const n=e.map(r=>r instanceof jr?r.data_:r);return new jr(Xk.apply(null,n))}else{const n=e.map(o=>dw(o)?tC(Gn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new jr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function gw(t){let e;try{e=JSON.parse(t)}catch{return null}return zk(e)?e:null}/**
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
 */function oC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function yw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function lC(t,e){return e}class Bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||lC}}let pl=null;function uC(t){return!dw(t)||t.length<2?t:yw(t)}function cC(){if(pl)return pl;const t=[];t.push(new Bt("bucket")),t.push(new Bt("generation")),t.push(new Bt("metageneration")),t.push(new Bt("name","fullPath",!0));function e(i,o){return uC(o)}const n=new Bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Bt("size");return s.xform=r,t.push(s),t.push(new Bt("timeCreated")),t.push(new Bt("updated")),t.push(new Bt("md5Hash",null,!0)),t.push(new Bt("cacheControl",null,!0)),t.push(new Bt("contentDisposition",null,!0)),t.push(new Bt("contentEncoding",null,!0)),t.push(new Bt("contentLanguage",null,!0)),t.push(new Bt("contentType",null,!0)),t.push(new Bt("metadata","customMetadata",!0)),pl=t,pl}function hC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new $t(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function dC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return hC(r,t),r}function fC(t,e,n){const r=gw(e);return r===null?null:dC(t,r,n)}function pC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
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
 */const Qg="prefixes",Yg="items";function mC(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Qg])for(const s of n[Qg]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new $t(e,i));r.prefixes.push(o)}if(n[Yg])for(const s of n[Yg]){const i=t._makeStorageReference(new $t(e,s.name));r.items.push(i)}return r}function gC(t,e,n){const r=gw(n);return r===null?null:mC(t,e,r)}class Hf{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _w(t){if(!t)throw Bf()}function yC(t,e){function n(r,s){const i=fC(t,s,e);return _w(i!==null),i}return n}function _C(t,e){function n(r,s){const i=gC(t,e,s);return _w(i!==null),i}return n}function qf(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Ck():s=kk():n.getStatus()===402?s=xk(t.bucket):n.getStatus()===403?s=Rk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function vC(t){const e=qf(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Ak(t.path)),i.serverResponse=s.serverResponse,i}return n}function wC(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),l=$f(o,t.host,t._protocol),u="GET",h=t.maxOperationRetryTime,f=new Hf(l,u,_C(t,e.bucket),h);return f.urlParams=i,f.errorHandler=qf(e),f}function EC(t,e,n){const r=e.fullServerUrl(),s=$f(r,t.host,t._protocol)+"?alt=media",i="GET",o=t.maxOperationRetryTime,l=new Hf(s,i,(u,h)=>h,o);return l.errorHandler=vC(e),l}function TC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function IC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=TC(null,e)),r}function SC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let D=0;D<2;D++)k=k+Math.random().toString().slice(2);return k}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=IC(e,r,s),f=pC(h,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+u+"--",x=jr.getBlob(p,r,m);if(x===null)throw Vk();const P={name:h.fullPath},b=$f(i,t.host,t._protocol),O="POST",A=t.maxUploadRetryTime,E=new Hf(b,O,yC(t,n),A);return E.urlParams=P,E.headers=o,E.body=x.uploadData(),E.errorHandler=qf(e),E}class vw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ao("cannot .send() more than once");if(vs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ao("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ao("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ao("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ao("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class AC extends vw{initXhr(){this.xhr_.responseType="text"}}function ww(){return new AC}class xC extends vw{initXhr(){this.xhr_.responseType="arraybuffer"}}function kC(){return new xC}/**
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
 */class Hs{constructor(e,n){this._service=e,n instanceof $t?this._location=n:this._location=$t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hs(e,n)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yw(this._location.path)}get storage(){return this._service}get parent(){const e=oC(this._location.path);if(e===null)return null;const n=new $t(this._location.bucket,e);return new Hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Lk(e)}}function CC(t,e){t._throwIfRoot("getBytes");const n=EC(t.storage,t._location);return t.storage.makeRequestWithTokens(n,kC).then(r=>r)}function RC(t,e,n){t._throwIfRoot("uploadBytes");const r=SC(t.storage,t._location,cC(),new jr(e,!0),n);return t.storage.makeRequestWithTokens(r,ww).then(s=>({metadata:s,ref:t}))}function PC(t){const e={prefixes:[],items:[]};return Ew(t,e).then(()=>e)}async function Ew(t,e,n){const s=await bC(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Ew(t,e,s.nextPageToken)}function bC(t,e){e!=null&&typeof e.maxResults=="number"&&vd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=wC(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ww)}function NC(t,e){const n=aC(t._location.path,e),r=new $t(t._location.bucket,n);return new Hs(t.storage,r)}/**
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
 */function DC(t){return/^[A-Za-z]+:\/\//.test(t)}function OC(t,e){return new Hs(t,e)}function Tw(t,e){if(t instanceof Gf){const n=t;if(n._bucket==null)throw Ok();const r=new Hs(n,n._bucket);return e!=null?Tw(r,e):r}else return e!==void 0?NC(t,e):t}function VC(t,e){if(e&&DC(e)){if(t instanceof Gf)return OC(t,e);throw _d("To use ref(service, url), the first argument must be a Storage instance.")}else return Tw(t,e)}function Jg(t,e){const n=e==null?void 0:e[cw];return n==null?null:$t.makeFromBucketSpec(n,t)}function MC(t,e,n,r={}){t.host=`${e}:${n}`;const s=vs(e);s&&(Mf(`https://${t.host}/b`),Lf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:rw(i,t.app.options.projectId))}class Gf{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=uw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ik,this._maxUploadRetryTime=Sk,this._requests=new Set,s!=null?this._bucket=$t.makeFromBucketSpec(s,this._host):this._bucket=Jg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=Jg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Fk(hw());{const o=Yk(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Xg="@firebase/storage",Zg="0.14.1";/**
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
 */const Iw="storage";/**
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
 */function LC(t,e){return t=wt(t),CC(t)}function FC(t,e,n){return t=wt(t),RC(t,e,n)}function ey(t){return t=wt(t),PC(t)}function Wf(t,e){return t=wt(t),VC(t,e)}function UC(t=jf(),e){t=wt(t);const r=Zu(t,Iw).getImmediate({identifier:e}),s=ew("storage");return s&&jC(r,...s),r}function jC(t,e,n,r={}){MC(t,e,n,r)}function BC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Gf(n,r,s,e,Js)}function zC(){$s(new us(Iw,BC,"PUBLIC").setMultipleInstances(!0)),Qn(Xg,Zg,""),Qn(Xg,Zg,"esm2020")}zC();var ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ss,Sw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function g(){}g.prototype=v.prototype,w.F=v.prototype,w.prototype=new g,w.prototype.constructor=w,w.D=function(T,S,C){for(var I=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)I[xe-2]=arguments[xe];return v.prototype[S].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,g){g||(g=0);const T=Array(16);if(typeof v=="string")for(var S=0;S<16;++S)T[S]=v.charCodeAt(g++)|v.charCodeAt(g++)<<8|v.charCodeAt(g++)<<16|v.charCodeAt(g++)<<24;else for(S=0;S<16;++S)T[S]=v[g++]|v[g++]<<8|v[g++]<<16|v[g++]<<24;v=w.g[0],g=w.g[1],S=w.g[2];let C=w.g[3],I;I=v+(C^g&(S^C))+T[0]+3614090360&4294967295,v=g+(I<<7&4294967295|I>>>25),I=C+(S^v&(g^S))+T[1]+3905402710&4294967295,C=v+(I<<12&4294967295|I>>>20),I=S+(g^C&(v^g))+T[2]+606105819&4294967295,S=C+(I<<17&4294967295|I>>>15),I=g+(v^S&(C^v))+T[3]+3250441966&4294967295,g=S+(I<<22&4294967295|I>>>10),I=v+(C^g&(S^C))+T[4]+4118548399&4294967295,v=g+(I<<7&4294967295|I>>>25),I=C+(S^v&(g^S))+T[5]+1200080426&4294967295,C=v+(I<<12&4294967295|I>>>20),I=S+(g^C&(v^g))+T[6]+2821735955&4294967295,S=C+(I<<17&4294967295|I>>>15),I=g+(v^S&(C^v))+T[7]+4249261313&4294967295,g=S+(I<<22&4294967295|I>>>10),I=v+(C^g&(S^C))+T[8]+1770035416&4294967295,v=g+(I<<7&4294967295|I>>>25),I=C+(S^v&(g^S))+T[9]+2336552879&4294967295,C=v+(I<<12&4294967295|I>>>20),I=S+(g^C&(v^g))+T[10]+4294925233&4294967295,S=C+(I<<17&4294967295|I>>>15),I=g+(v^S&(C^v))+T[11]+2304563134&4294967295,g=S+(I<<22&4294967295|I>>>10),I=v+(C^g&(S^C))+T[12]+1804603682&4294967295,v=g+(I<<7&4294967295|I>>>25),I=C+(S^v&(g^S))+T[13]+4254626195&4294967295,C=v+(I<<12&4294967295|I>>>20),I=S+(g^C&(v^g))+T[14]+2792965006&4294967295,S=C+(I<<17&4294967295|I>>>15),I=g+(v^S&(C^v))+T[15]+1236535329&4294967295,g=S+(I<<22&4294967295|I>>>10),I=v+(S^C&(g^S))+T[1]+4129170786&4294967295,v=g+(I<<5&4294967295|I>>>27),I=C+(g^S&(v^g))+T[6]+3225465664&4294967295,C=v+(I<<9&4294967295|I>>>23),I=S+(v^g&(C^v))+T[11]+643717713&4294967295,S=C+(I<<14&4294967295|I>>>18),I=g+(C^v&(S^C))+T[0]+3921069994&4294967295,g=S+(I<<20&4294967295|I>>>12),I=v+(S^C&(g^S))+T[5]+3593408605&4294967295,v=g+(I<<5&4294967295|I>>>27),I=C+(g^S&(v^g))+T[10]+38016083&4294967295,C=v+(I<<9&4294967295|I>>>23),I=S+(v^g&(C^v))+T[15]+3634488961&4294967295,S=C+(I<<14&4294967295|I>>>18),I=g+(C^v&(S^C))+T[4]+3889429448&4294967295,g=S+(I<<20&4294967295|I>>>12),I=v+(S^C&(g^S))+T[9]+568446438&4294967295,v=g+(I<<5&4294967295|I>>>27),I=C+(g^S&(v^g))+T[14]+3275163606&4294967295,C=v+(I<<9&4294967295|I>>>23),I=S+(v^g&(C^v))+T[3]+4107603335&4294967295,S=C+(I<<14&4294967295|I>>>18),I=g+(C^v&(S^C))+T[8]+1163531501&4294967295,g=S+(I<<20&4294967295|I>>>12),I=v+(S^C&(g^S))+T[13]+2850285829&4294967295,v=g+(I<<5&4294967295|I>>>27),I=C+(g^S&(v^g))+T[2]+4243563512&4294967295,C=v+(I<<9&4294967295|I>>>23),I=S+(v^g&(C^v))+T[7]+1735328473&4294967295,S=C+(I<<14&4294967295|I>>>18),I=g+(C^v&(S^C))+T[12]+2368359562&4294967295,g=S+(I<<20&4294967295|I>>>12),I=v+(g^S^C)+T[5]+4294588738&4294967295,v=g+(I<<4&4294967295|I>>>28),I=C+(v^g^S)+T[8]+2272392833&4294967295,C=v+(I<<11&4294967295|I>>>21),I=S+(C^v^g)+T[11]+1839030562&4294967295,S=C+(I<<16&4294967295|I>>>16),I=g+(S^C^v)+T[14]+4259657740&4294967295,g=S+(I<<23&4294967295|I>>>9),I=v+(g^S^C)+T[1]+2763975236&4294967295,v=g+(I<<4&4294967295|I>>>28),I=C+(v^g^S)+T[4]+1272893353&4294967295,C=v+(I<<11&4294967295|I>>>21),I=S+(C^v^g)+T[7]+4139469664&4294967295,S=C+(I<<16&4294967295|I>>>16),I=g+(S^C^v)+T[10]+3200236656&4294967295,g=S+(I<<23&4294967295|I>>>9),I=v+(g^S^C)+T[13]+681279174&4294967295,v=g+(I<<4&4294967295|I>>>28),I=C+(v^g^S)+T[0]+3936430074&4294967295,C=v+(I<<11&4294967295|I>>>21),I=S+(C^v^g)+T[3]+3572445317&4294967295,S=C+(I<<16&4294967295|I>>>16),I=g+(S^C^v)+T[6]+76029189&4294967295,g=S+(I<<23&4294967295|I>>>9),I=v+(g^S^C)+T[9]+3654602809&4294967295,v=g+(I<<4&4294967295|I>>>28),I=C+(v^g^S)+T[12]+3873151461&4294967295,C=v+(I<<11&4294967295|I>>>21),I=S+(C^v^g)+T[15]+530742520&4294967295,S=C+(I<<16&4294967295|I>>>16),I=g+(S^C^v)+T[2]+3299628645&4294967295,g=S+(I<<23&4294967295|I>>>9),I=v+(S^(g|~C))+T[0]+4096336452&4294967295,v=g+(I<<6&4294967295|I>>>26),I=C+(g^(v|~S))+T[7]+1126891415&4294967295,C=v+(I<<10&4294967295|I>>>22),I=S+(v^(C|~g))+T[14]+2878612391&4294967295,S=C+(I<<15&4294967295|I>>>17),I=g+(C^(S|~v))+T[5]+4237533241&4294967295,g=S+(I<<21&4294967295|I>>>11),I=v+(S^(g|~C))+T[12]+1700485571&4294967295,v=g+(I<<6&4294967295|I>>>26),I=C+(g^(v|~S))+T[3]+2399980690&4294967295,C=v+(I<<10&4294967295|I>>>22),I=S+(v^(C|~g))+T[10]+4293915773&4294967295,S=C+(I<<15&4294967295|I>>>17),I=g+(C^(S|~v))+T[1]+2240044497&4294967295,g=S+(I<<21&4294967295|I>>>11),I=v+(S^(g|~C))+T[8]+1873313359&4294967295,v=g+(I<<6&4294967295|I>>>26),I=C+(g^(v|~S))+T[15]+4264355552&4294967295,C=v+(I<<10&4294967295|I>>>22),I=S+(v^(C|~g))+T[6]+2734768916&4294967295,S=C+(I<<15&4294967295|I>>>17),I=g+(C^(S|~v))+T[13]+1309151649&4294967295,g=S+(I<<21&4294967295|I>>>11),I=v+(S^(g|~C))+T[4]+4149444226&4294967295,v=g+(I<<6&4294967295|I>>>26),I=C+(g^(v|~S))+T[11]+3174756917&4294967295,C=v+(I<<10&4294967295|I>>>22),I=S+(v^(C|~g))+T[2]+718787259&4294967295,S=C+(I<<15&4294967295|I>>>17),I=g+(C^(S|~v))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.v=function(w,v){v===void 0&&(v=w.length);const g=v-this.blockSize,T=this.C;let S=this.h,C=0;for(;C<v;){if(S==0)for(;C<=g;)s(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<v;)if(T[S++]=w.charCodeAt(C++),S==this.blockSize){s(this,T),S=0;break}}else for(;C<v;)if(T[S++]=w[C++],S==this.blockSize){s(this,T),S=0;break}}this.h=S,this.o+=v},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;v=this.o*8;for(var g=w.length-8;g<w.length;++g)w[g]=v&255,v/=256;for(this.v(w),w=Array(16),v=0,g=0;g<4;++g)for(let T=0;T<32;T+=8)w[v++]=this.g[g]>>>T&255;return w};function i(w,v){var g=l;return Object.prototype.hasOwnProperty.call(g,w)?g[w]:g[w]=v(w)}function o(w,v){this.h=v;const g=[];let T=!0;for(let S=w.length-1;S>=0;S--){const C=w[S]|0;T&&C==v||(g[S]=C,T=!1)}this.g=g}var l={};function u(w){return-128<=w&&w<128?i(w,function(v){return new o([v|0],v<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return O(h(-w));const v=[];let g=1;for(let T=0;w>=g;T++)v[T]=w/g|0,g*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return O(f(w.substring(1),v));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=h(Math.pow(v,8));let T=p;for(let C=0;C<w.length;C+=8){var S=Math.min(8,w.length-C);const I=parseInt(w.substring(C,C+S),v);S<8?(S=h(Math.pow(v,S)),T=T.j(S).add(h(I))):(T=T.j(g),T=T.add(h(I)))}return T}var p=u(0),m=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-O(this).m();let w=0,v=1;for(let g=0;g<this.g.length;g++){const T=this.i(g);w+=(T>=0?T:4294967296+T)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(b(this))return"-"+O(this).toString(w);const v=h(Math.pow(w,6));var g=this;let T="";for(;;){const S=D(g,v).g;g=A(g,S.j(v));let C=((g.g.length>0?g.g[0]:g.h)>>>0).toString(w);if(g=S,P(g))return C+T;for(;C.length<6;)C="0"+C;T=C+T}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function b(w){return w.h==-1}t.l=function(w){return w=A(this,w),b(w)?-1:P(w)?0:1};function O(w){const v=w.g.length,g=[];for(let T=0;T<v;T++)g[T]=~w.g[T];return new o(g,~w.h).add(m)}t.abs=function(){return b(this)?O(this):this},t.add=function(w){const v=Math.max(this.g.length,w.g.length),g=[];let T=0;for(let S=0;S<=v;S++){let C=T+(this.i(S)&65535)+(w.i(S)&65535),I=(C>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);T=I>>>16,C&=65535,I&=65535,g[S]=I<<16|C}return new o(g,g[g.length-1]&-2147483648?-1:0)};function A(w,v){return w.add(O(v))}t.j=function(w){if(P(this)||P(w))return p;if(b(this))return b(w)?O(this).j(O(w)):O(O(this).j(w));if(b(w))return O(this.j(O(w)));if(this.l(x)<0&&w.l(x)<0)return h(this.m()*w.m());const v=this.g.length+w.g.length,g=[];for(var T=0;T<2*v;T++)g[T]=0;for(T=0;T<this.g.length;T++)for(let S=0;S<w.g.length;S++){const C=this.i(T)>>>16,I=this.i(T)&65535,xe=w.i(S)>>>16,je=w.i(S)&65535;g[2*T+2*S]+=I*je,E(g,2*T+2*S),g[2*T+2*S+1]+=C*je,E(g,2*T+2*S+1),g[2*T+2*S+1]+=I*xe,E(g,2*T+2*S+1),g[2*T+2*S+2]+=C*xe,E(g,2*T+2*S+2)}for(w=0;w<v;w++)g[w]=g[2*w+1]<<16|g[2*w];for(w=v;w<2*v;w++)g[w]=0;return new o(g,0)};function E(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function k(w,v){this.g=w,this.h=v}function D(w,v){if(P(v))throw Error("division by zero");if(P(w))return new k(p,p);if(b(w))return v=D(O(w),v),new k(O(v.g),O(v.h));if(b(v))return v=D(w,O(v)),new k(O(v.g),v.h);if(w.g.length>30){if(b(w)||b(v))throw Error("slowDivide_ only works with positive integers.");for(var g=m,T=v;T.l(w)<=0;)g=L(g),T=L(T);var S=B(g,1),C=B(T,1);for(T=B(T,2),g=B(g,2);!P(T);){var I=C.add(T);I.l(w)<=0&&(S=S.add(g),C=I),T=B(T,1),g=B(g,1)}return v=A(w,S.j(v)),new k(S,v)}for(S=p;w.l(v)>=0;){for(g=Math.max(1,Math.floor(w.m()/v.m())),T=Math.ceil(Math.log(g)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),C=h(g),I=C.j(v);b(I)||I.l(w)>0;)g-=T,C=h(g),I=C.j(v);P(C)&&(C=m),S=S.add(C),w=A(w,I)}return new k(S,w)}t.B=function(w){return D(this,w).h},t.and=function(w){const v=Math.max(this.g.length,w.g.length),g=[];for(let T=0;T<v;T++)g[T]=this.i(T)&w.i(T);return new o(g,this.h&w.h)},t.or=function(w){const v=Math.max(this.g.length,w.g.length),g=[];for(let T=0;T<v;T++)g[T]=this.i(T)|w.i(T);return new o(g,this.h|w.h)},t.xor=function(w){const v=Math.max(this.g.length,w.g.length),g=[];for(let T=0;T<v;T++)g[T]=this.i(T)^w.i(T);return new o(g,this.h^w.h)};function L(w){const v=w.g.length+1,g=[];for(let T=0;T<v;T++)g[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(g,w.h)}function B(w,v){const g=v>>5;v%=32;const T=w.g.length-g,S=[];for(let C=0;C<T;C++)S[C]=v>0?w.i(C+g)>>>v|w.i(C+g+1)<<32-v:w.i(C+g);return new o(S,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Sw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ss=o}).apply(typeof ty<"u"?ty:typeof self<"u"?self:typeof window<"u"?window:{});var ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Aw,bo,xw,Vl,wd,kw,Cw,Rw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ml=="object"&&ml];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in d))break e;d=d[R]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],y;for(y in c)Object.prototype.hasOwnProperty.call(c,y)&&d.push([y,c[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,R,N){for(var z=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)z[ae-2]=arguments[ae];return c.prototype[R].apply(y,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function x(a){const c=a.length;if(c>0){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function P(a,c){for(let y=1;y<arguments.length;y++){const R=arguments[y];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const N=R.length||0;a.length=d+N;for(let z=0;z<N;z++)a[d+z]=R[z]}else a.push(R)}}class b{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(a){o.setTimeout(()=>{throw a},0)}function A(){var a=w;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const y=k.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var k=new b(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,B=!1,w=new E,v=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(g)}};function g(){for(var a;a=A();){try{a.h.call(a.g)}catch(d){O(d)}var c=k;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}B=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function xe(a,c){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(xe,S),xe.prototype.init=function(a,c){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),We=0;function _e(a,c,d,y,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=R,this.key=++We,this.da=this.fa=!1}function j(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function Z(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ke(a){const c={};for(const d in a)c[d]=a[d];return c}const ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fe(a,c){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)a[d]=y[d];for(let N=0;N<ve.length;N++)d=ve[N],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,c,d,y,R){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const z=en(a,c,y,R);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new _e(c,this.src,N,!!y,R),c.fa=d,a.push(c)),c};function Mn(a,c){const d=c.type;if(d in a.g){var y=a.g[d],R=Array.prototype.indexOf.call(y,c,void 0),N;(N=R>=0)&&Array.prototype.splice.call(y,R,1),N&&(j(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function en(a,c,d,y){for(let R=0;R<a.length;++R){const N=a[R];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==y)return R}return-1}var U="closure_lm_"+(Math.random()*1e6|0),G={};function pe(a,c,d,y,R){if(Array.isArray(c)){for(let N=0;N<c.length;N++)pe(a,c[N],d,y,R);return null}return d=rr(d),a&&a[je]?a.J(c,d,l(y)?!!y.capture:!1,R):Ae(a,c,d,!1,y,R)}function Ae(a,c,d,y,R,N){if(!c)throw Error("Invalid event type");const z=l(R)?!!R.capture:!!R;let ae=Ln(a);if(ae||(a[U]=ae=new Ee(a)),d=ae.add(c,d,y,z,N),d.proxy)return d;if(y=we(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)C||(R=z),R===void 0&&(R=!1),a.addEventListener(c.toString(),y,R);else if(a.attachEvent)a.attachEvent(cn(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function we(){function a(d){return c.call(a.src,a.listener,d)}const c=ni;return a}function le(a,c,d,y,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)le(a,c[N],d,y,R);else y=l(y)?!!y.capture:!!y,d=rr(d),a&&a[je]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=en(c,d,y,R),d>-1&&(j(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=Ln(a))&&(c=a.g[c.toString()],a=-1,c&&(a=en(c,d,y,R)),(d=a>-1?c[a]:null)&&tt(d))}function tt(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[je])Mn(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(cn(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Ln(c))?(Mn(d,a),d.h==0&&(d.src=null,c[U]=null)):j(a)}}}function cn(a){return a in G?G[a]:G[a]="on"+a}function ni(a,c){if(a.da)a=!0;else{c=new xe(c,this);const d=a.listener,y=a.ha||a.src;a.fa&&tt(a),a=d.call(y,c)}return a}function Ln(a){return a=a[U],a instanceof Ee?a:null}var hn="__closure_events_fn_"+(Math.random()*1e9>>>0);function rr(a){return typeof a=="function"?a:(a[hn]||(a[hn]=function(c){return a.handleEvent(c)}),a[hn])}function Be(){T.call(this),this.i=new Ee(this),this.M=this,this.G=null}p(Be,T),Be.prototype[je]=!0,Be.prototype.removeEventListener=function(a,c,d,y){le(this,a,c,d,y)};function Q(a,c){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new S(c,a);else if(c instanceof S)c.target=c.target||a;else{var R=c;c=new S(y,a),fe(c,R)}R=!0;let N,z;if(d)for(z=d.length-1;z>=0;z--)N=c.g=d[z],R=ee(N,y,!0,c)&&R;if(N=c.g=a,R=ee(N,y,!0,c)&&R,R=ee(N,y,!1,c)&&R,d)for(z=0;z<d.length;z++)N=c.g=d[z],R=ee(N,y,!1,c)&&R}Be.prototype.N=function(){if(Be.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let y=0;y<d.length;y++)j(d[y]);delete a.g[c],a.h--}}this.G=null},Be.prototype.J=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},Be.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function ee(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let N=0;N<c.length;++N){const z=c[N];if(z&&!z.da&&z.capture==d){const ae=z.listener,mt=z.ha||z.src;z.fa&&Mn(a.i,z),R=ae.call(mt,y)!==!1&&R}}return R&&!y.defaultPrevented}function Me(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Le(a){a.g=Me(()=>{a.g=null,a.i&&(a.i=!1,Le(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Y extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function W(a){T.call(this),this.h=a,this.g={}}p(W,T);var J=[];function ue(a){$(a.g,function(c,d){this.g.hasOwnProperty(d)&&tt(c)},a),a.g={}}W.prototype.N=function(){W.Z.N.call(this),ue(this)},W.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var te=o.JSON.stringify,Ce=o.JSON.parse,Re=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ce(){}function ze(){}var Oe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pe(){S.call(this,"d")}p(Pe,S);function Qe(){S.call(this,"c")}p(Qe,S);var De={},pt=null;function ut(){return pt=pt||new Be}De.Ia="serverreachability";function dn(a){S.call(this,De.Ia,a)}p(dn,S);function Ut(a){const c=ut();Q(c,new dn(c))}De.STAT_EVENT="statevent";function Fn(a,c){S.call(this,De.STAT_EVENT,a),this.stat=c}p(Fn,S);function nt(a){const c=ut();Q(c,new Fn(c,a))}De.Ja="timingevent";function ri(a,c){S.call(this,De.Ja,a),this.size=c}p(ri,S);function jt(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Ar(){this.g=!0}Ar.prototype.ua=function(){this.g=!1};function yc(a,c,d,y,R,N){a.info(function(){if(a.g)if(N){var z="",ae=N.split("&");for(let Ve=0;Ve<ae.length;Ve++){var mt=ae[Ve].split("=");if(mt.length>1){const Et=mt[0];mt=mt[1];const jn=Et.split("_");z=jn.length>=2&&jn[1]=="type"?z+(Et+"="+mt+"&"):z+(Et+"=redacted&")}}}else z=null;else z=N;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+c+`
`+d+`
`+z})}function _c(a,c,d,y,R,N,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+c+`
`+d+`
`+N+" "+z})}function fn(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+bE(a,d)+(y?" "+y:"")})}function PE(a,c){a.info(function(){return"TIMEOUT: "+c})}Ar.prototype.info=function(){};function bE(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var R=y[0];if(R!="noop"&&R!="stop"&&R!="close")for(let z=1;z<y.length;z++)y[z]=""}}}}return te(N)}catch{return c}}var ja={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Bp;function vc(){}p(vc,ce),vc.prototype.g=function(){return new XMLHttpRequest},Bp=new vc;function io(a){return encodeURIComponent(String(a))}function NE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function xr(a,c,d,y){this.j=a,this.i=c,this.l=d,this.S=y||1,this.V=new W(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zp}function zp(){this.i=null,this.g="",this.h=!1}var $p={},wc={};function Ec(a,c,d){a.M=1,a.A=za(Un(c)),a.u=d,a.R=!0,Hp(a,null)}function Hp(a,c){a.F=Date.now(),Ba(a),a.B=Un(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),rm(d.i,"t",y),a.C=0,d=a.j.L,a.h=new zp,a.g=Em(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Y(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,y=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(J[0]=R.toString()),R=J);for(let N=0;N<R.length;N++){const z=pe(d,R[N],y||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?ke(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),Ut(),yc(a.i,a.v,a.B,a.l,a.S,a.u)}xr.prototype.ba=function(a){a=a.target;const c=this.O;c&&Rr(a)==3?c.j():this.Y(a)},xr.prototype.Y=function(a){try{if(a==this.g)e:{const ae=Rr(this.g),mt=this.g.ya(),Ve=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||cm(this.g)))){this.K||ae!=4||mt==7||(mt==8||Ve<=0?Ut(3):Ut(2)),Tc(this);var c=this.g.ca();this.X=c;var d=DE(this);if(this.o=c==200,_c(this.i,this.v,this.B,this.l,this.S,ae,c),this.o){if(this.U&&!this.L){t:{if(this.g){var y,R=this.g;if((y=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var N=y;break t}}N=null}if(a=N)fn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ic(this,a);else{this.o=!1,this.m=3,nt(12),Es(this),oo(this);break e}}if(this.R){a=!0;let Et;for(;!this.K&&this.C<d.length;)if(Et=OE(this,d),Et==wc){ae==4&&(this.m=4,nt(14),a=!1),fn(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==$p){this.m=4,nt(15),fn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else fn(this.i,this.l,Et,null),Ic(this,Et);if(qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||d.length!=0||this.h.h||(this.m=1,nt(16),a=!1),this.o=this.o&&a,!a)fn(this.i,this.l,d,"[Invalid Chunked Response]"),Es(this),oo(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),bc(z),z.P=!0,nt(11))}}else fn(this.i,this.l,d,null),Ic(this,d);ae==4&&Es(this),this.o&&!this.K&&(ae==4?ym(this.j,this):(this.o=!1,Ba(this)))}else KE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),Es(this),oo(this)}}}catch{}finally{}};function DE(a){if(!qp(a))return a.g.la();const c=cm(a.g);if(c==="")return"";let d="";const y=c.length,R=Rr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Es(a),oo(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<y;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(R&&N==y-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function qp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function OE(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?wc:(d=Number(c.substring(d,y)),isNaN(d)?$p:(y+=1,y+d>c.length?wc:(c=c.slice(y,y+d),a.C=y+d,c)))}xr.prototype.cancel=function(){this.K=!0,Es(this)};function Ba(a){a.T=Date.now()+a.H,Gp(a,a.H)}function Gp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=jt(h(a.aa,a),c)}function Tc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}xr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(PE(this.i,this.B),this.M!=2&&(Ut(),nt(17)),Es(this),this.m=2,oo(this)):Gp(this,this.T-a)};function oo(a){a.j.I==0||a.K||ym(a.j,a)}function Es(a){Tc(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,ue(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Ic(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Sc(d.h,a))){if(!a.L&&Sc(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Wa(d),qa(d);else break e;Pc(d),nt(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=jt(h(d.Va,d),6e3));Qp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Is(d,11)}else if((a.L||d.g==a)&&Wa(d),!I(c))for(R=d.Ba.g.parse(c),c=0;c<R.length;c++){let Ve=R[c];const Et=Ve[0];if(!(Et<=d.K))if(d.K=Et,Ve=Ve[1],d.I==2)if(Ve[0]=="c"){d.M=Ve[1],d.ba=Ve[2];const jn=Ve[3];jn!=null&&(d.ka=jn,d.j.info("VER="+d.ka));const Ss=Ve[4];Ss!=null&&(d.za=Ss,d.j.info("SVER="+d.za));const Pr=Ve[5];Pr!=null&&typeof Pr=="number"&&Pr>0&&(y=1.5*Pr,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const br=a.g;if(br){const Qa=br.g?br.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var N=y.h;N.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Ac(N,N.h),N.h=null))}if(y.G){const Nc=br.g?br.g.getResponseHeader("X-HTTP-Session-Id"):null;Nc&&(y.wa=Nc,$e(y.J,y.G,Nc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var z=a;if(y.na=wm(y,y.L?y.ba:null,y.W),z.L){Yp(y.h,z);var ae=z,mt=y.O;mt&&(ae.H=mt),ae.D&&(Tc(ae),Ba(ae)),y.g=z}else mm(y);d.i.length>0&&Ga(d)}else Ve[0]!="stop"&&Ve[0]!="close"||Is(d,7);else d.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Is(d,7):Rc(d):Ve[0]!="noop"&&d.l&&d.l.qa(Ve),d.A=0)}}Ut(4)}catch{}}var VE=class{constructor(a,c){this.g=a,this.map=c}};function Wp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Kp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qp(a){return a.h?1:a.g?a.g.size:0}function Sc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ac(a,c){a.g?a.g.add(c):a.h=c}function Yp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Wp.prototype.cancel=function(){if(this.i=Jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return x(a.i)}var Xp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ME(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let R,N=null;y>=0?(R=a[d].substring(0,y),N=a[d].substring(y+1)):R=a[d],c(R,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function kr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof kr?(this.l=a.l,ao(this,a.j),this.o=a.o,this.g=a.g,lo(this,a.u),this.h=a.h,xc(this,sm(a.i)),this.m=a.m):a&&(c=String(a).match(Xp))?(this.l=!1,ao(this,c[1]||"",!0),this.o=uo(c[2]||""),this.g=uo(c[3]||"",!0),lo(this,c[4]),this.h=uo(c[5]||"",!0),xc(this,c[6]||"",!0),this.m=uo(c[7]||"")):(this.l=!1,this.i=new ho(null,this.l))}kr.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(co(c,Zp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(co(c,Zp,!0),"@"),a.push(io(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(co(d,d.charAt(0)=="/"?UE:FE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",co(d,BE)),a.join("")},kr.prototype.resolve=function(a){const c=Un(this);let d=!!a.j;d?ao(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var y=a.h;if(d)lo(c,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var R=c.h.lastIndexOf("/");R!=-1&&(y=c.h.slice(0,R+1)+y)}if(R=y,R==".."||R==".")y="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){y=R.lastIndexOf("/",0)==0,R=R.split("/");const N=[];for(let z=0;z<R.length;){const ae=R[z++];ae=="."?y&&z==R.length&&N.push(""):ae==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),y&&z==R.length&&N.push("")):(N.push(ae),y=!0)}y=N.join("/")}else y=R}return d?c.h=y:d=a.i.toString()!=="",d?xc(c,sm(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Un(a){return new kr(a)}function ao(a,c,d){a.j=d?uo(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function lo(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function xc(a,c,d){c instanceof ho?(a.i=c,zE(a.i,a.l)):(d||(c=co(c,jE)),a.i=new ho(c,a.l))}function $e(a,c,d){a.i.set(c,d)}function za(a){return $e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function uo(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function co(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,LE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function LE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zp=/[#\/\?@]/g,FE=/[#\?:]/g,UE=/[#\?]/g,jE=/[#\?@]/g,BE=/#/g;function ho(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ts(a){a.g||(a.g=new Map,a.h=0,a.i&&ME(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ho.prototype,t.add=function(a,c){Ts(this),this.i=null,a=si(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function em(a,c){Ts(a),c=si(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function tm(a,c){return Ts(a),c=si(a,c),a.g.has(c)}t.forEach=function(a,c){Ts(this),this.g.forEach(function(d,y){d.forEach(function(R){a.call(c,R,y,this)},this)},this)};function nm(a,c){Ts(a);let d=[];if(typeof c=="string")tm(a,c)&&(d=d.concat(a.g.get(si(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Ts(this),this.i=null,a=si(this,a),tm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=nm(this,a),a.length>0?String(a[0]):c):c};function rm(a,c,d){em(a,c),d.length>0&&(a.i=null,a.g.set(si(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let y=0;y<c.length;y++){var d=c[y];const R=io(d);d=nm(this,d);for(let N=0;N<d.length;N++){let z=R;d[N]!==""&&(z+="="+io(d[N])),a.push(z)}}return this.i=a.join("&")};function sm(a){const c=new ho;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function si(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function zE(a,c){c&&!a.j&&(Ts(a),a.i=null,a.g.forEach(function(d,y){const R=y.toLowerCase();y!=R&&(em(this,y),rm(this,R,d))},a)),a.j=c}function $E(a,c){const d=new Ar;if(o.Image){const y=new Image;y.onload=f(Cr,d,"TestLoadImage: loaded",!0,c,y),y.onerror=f(Cr,d,"TestLoadImage: error",!1,c,y),y.onabort=f(Cr,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=f(Cr,d,"TestLoadImage: timeout",!1,c,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function HE(a,c){const d=new Ar,y=new AbortController,R=setTimeout(()=>{y.abort(),Cr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(N=>{clearTimeout(R),N.ok?Cr(d,"TestPingServer: ok",!0,c):Cr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Cr(d,"TestPingServer: error",!1,c)})}function Cr(a,c,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function qE(){this.g=new Re}function kc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(kc,ce),kc.prototype.g=function(){return new $a(this.i,this.h)};function $a(a,c){Be.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p($a,Be),t=$a.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,po(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;im(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function im(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?fo(this):po(this),this.readyState==3&&im(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,fo(this))},t.Na=function(a){this.g&&(this.response=a,fo(this))},t.ga=function(){this.g&&fo(this)};function fo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,po(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function po(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function om(a){let c="";return $(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function Cc(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=om(d),typeof a=="string"?d!=null&&io(d):$e(a,c,d))}function rt(a){Be.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(rt,Be);var GE=/^https?$/i,WE=["POST","PUT"];t=rt.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Bp.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){am(this,N);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const N of y.keys())d.set(N,y.get(N));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(WE,c,void 0)>=0)||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){am(this,N)}};function am(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,lm(a),Ha(a)}function lm(a){a.A||(a.A=!0,Q(a,"complete"),Q(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Q(this,"complete"),Q(this,"abort"),Ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ha(this,!0)),rt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?um(this):this.Xa())},t.Xa=function(){um(this)};function um(a){if(a.h&&typeof i<"u"){if(a.v&&Rr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Q(a,"readystatechange"),Rr(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=N===0){let z=String(a.D).match(Xp)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),y=!GE.test(z?z.toLowerCase():"")}d=y}if(d)Q(a,"complete"),Q(a,"success");else{a.o=6;try{var R=Rr(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",lm(a)}}finally{Ha(a)}}}}function Ha(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Q(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Rr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Rr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ce(c)}};function cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function KE(a){const c={};a=(a.g&&Rr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var d=NE(a[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[R]||[];c[R]=N,N.push(d)}Z(c,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function hm(a){this.za=0,this.i=[],this.j=new Ar,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mo("baseRetryDelayMs",5e3,a),this.Za=mo("retryDelaySeedMs",1e4,a),this.Ta=mo("forwardChannelMaxRetries",2,a),this.va=mo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Wp(a&&a.concurrentRequestLimit),this.Ba=new qE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=hm.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,y){nt(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=wm(this,null,this.W),Ga(this)};function Rc(a){if(dm(a),a.I==3){var c=a.V++,d=Un(a.J);if($e(d,"SID",a.M),$e(d,"RID",c),$e(d,"TYPE","terminate"),go(a,d),c=new xr(a,a.j,c),c.M=2,c.A=za(Un(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Em(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ba(c)}vm(a)}function qa(a){a.g&&(bc(a),a.g.cancel(),a.g=null)}function dm(a){qa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Wa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ga(a){if(!Kp(a.h)&&!a.m){a.m=!0;var c=a.Ea;L||v(),B||(L(),B=!0),w.add(c,a),a.D=0}}function QE(a,c){return Qp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=jt(h(a.Ea,a,c),_m(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new xr(this,this.j,a);let N=this.o;if(this.U&&(N?(N=ke(N),fe(N,this.U)):N=this.U),this.u!==null||this.R||(R.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=pm(this,R,c),d=Un(this.J),$e(d,"RID",a),$e(d,"CVER",22),this.G&&$e(d,"X-HTTP-Session-Id",this.G),go(this,d),N&&(this.R?c="headers="+io(om(N))+"&"+c:this.u&&Cc(d,this.u,N)),Ac(this.h,R),this.Ra&&$e(d,"TYPE","init"),this.S?($e(d,"$req",c),$e(d,"SID","null"),R.U=!0,Ec(R,d,null)):Ec(R,d,c),this.I=2}}else this.I==3&&(a?fm(this,a):this.i.length==0||Kp(this.h)||fm(this))};function fm(a,c){var d;c?d=c.l:d=a.V++;const y=Un(a.J);$e(y,"SID",a.M),$e(y,"RID",d),$e(y,"AID",a.K),go(a,y),a.u&&a.o&&Cc(y,a.u,a.o),d=new xr(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=pm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ac(a.h,d),Ec(d,y,c)}function go(a,c){a.H&&$(a.H,function(d,y){$e(c,y,d)}),a.l&&$({},function(d,y){$e(c,y,d)})}function pm(a,c,d){d=Math.min(a.i.length,d);const y=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let ae=-1;for(;;){const mt=["count="+d];ae==-1?d>0?(ae=R[0].g,mt.push("ofs="+ae)):ae=0:mt.push("ofs="+ae);let Ve=!0;for(let Et=0;Et<d;Et++){var N=R[Et].g;const jn=R[Et].map;if(N-=ae,N<0)ae=Math.max(0,R[Et].g-100),Ve=!1;else try{N="req"+N+"_"||"";try{var z=jn instanceof Map?jn:Object.entries(jn);for(const[Ss,Pr]of z){let br=Pr;l(Pr)&&(br=te(Pr)),mt.push(N+Ss+"="+encodeURIComponent(br))}}catch(Ss){throw mt.push(N+"type="+encodeURIComponent("_badmap")),Ss}}catch{y&&y(jn)}}if(Ve){z=mt.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function mm(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;L||v(),B||(L(),B=!0),w.add(c,a),a.A=0}}function Pc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=jt(h(a.Da,a),_m(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,gm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=jt(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),qa(this),gm(this))};function bc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gm(a){a.g=new xr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Un(a.na);$e(c,"RID","rpc"),$e(c,"SID",a.M),$e(c,"AID",a.K),$e(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&$e(c,"TO",a.ia),$e(c,"TYPE","xmlhttp"),go(a,c),a.u&&a.o&&Cc(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=za(Un(c)),d.u=null,d.R=!0,Hp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,qa(this),Pc(this),nt(19))};function Wa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ym(a,c){var d=null;if(a.g==c){Wa(a),bc(a),a.g=null;var y=2}else if(Sc(a.h,c))d=c.G,Yp(a.h,c),y=1;else return;if(a.I!=0){if(c.o)if(y==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var R=a.D;y=ut(),Q(y,new ri(y,d)),Ga(a)}else mm(a);else if(R=c.m,R==3||R==0&&c.X>0||!(y==1&&QE(a,c)||y==2&&Pc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Is(a,5);break;case 4:Is(a,10);break;case 3:Is(a,6);break;default:Is(a,2)}}}function _m(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Is(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),y=a.Ua;const R=!y;y=new kr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ao(y,"https"),za(y),R?$E(y.toString(),d):HE(y.toString(),d)}else nt(2);a.I=0,a.l&&a.l.pa(c),vm(a),dm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function vm(a){if(a.I=0,a.ja=[],a.l){const c=Jp(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.oa()}}function wm(a,c,d){var y=d instanceof kr?Un(d):new kr(d);if(y.g!="")c&&(y.g=c+"."+y.g),lo(y,y.u);else{var R=o.location;y=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const N=new kr(null);y&&ao(N,y),c&&(N.g=c),R&&lo(N,R),d&&(N.h=d),y=N}return d=a.G,c=a.wa,d&&c&&$e(y,d,c),$e(y,"VER",a.ka),go(a,y),y}function Em(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new rt(new kc({ab:d})):new rt(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tm(){}t=Tm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ka(){}Ka.prototype.g=function(a,c){return new tn(a,c)};function tn(a,c){Be.call(this),this.g=new hm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!I(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!I(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ii(this)}p(tn,Be),tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Rc(this.g)},tn.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=te(a),a=d);c.i.push(new VE(c.Ya++,a)),c.I==3&&Ga(c)},tn.prototype.N=function(){this.g.l=null,delete this.j,Rc(this.g),delete this.g,tn.Z.N.call(this)};function Im(a){Pe.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Im,Pe);function Sm(){Qe.call(this),this.status=1}p(Sm,Qe);function ii(a){this.g=a}p(ii,Tm),ii.prototype.ra=function(){Q(this.g,"a")},ii.prototype.qa=function(a){Q(this.g,new Im(a))},ii.prototype.pa=function(a){Q(this.g,new Sm)},ii.prototype.oa=function(){Q(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,Rw=function(){return new Ka},Cw=function(){return ut()},kw=De,wd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ja.NO_ERROR=0,ja.TIMEOUT=8,ja.HTTP_ERROR=6,Vl=ja,jp.COMPLETE="complete",xw=jp,ze.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",Be.prototype.listen=Be.prototype.J,bo=ze,rt.prototype.listenOnce=rt.prototype.K,rt.prototype.getLastError=rt.prototype.Ha,rt.prototype.getLastErrorCode=rt.prototype.ya,rt.prototype.getStatus=rt.prototype.ca,rt.prototype.getResponseJson=rt.prototype.La,rt.prototype.getResponseText=rt.prototype.la,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Fa,Aw=rt}).apply(typeof ml<"u"?ml:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
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
 */let Zi="12.10.0";function $C(t){Zi=t}/**
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
 */const qs=new Ff("@firebase/firestore");function li(){return qs.logLevel}function q(t,...e){if(qs.logLevel<=me.DEBUG){const n=e.map(Kf);qs.debug(`Firestore (${Zi}): ${t}`,...n)}}function Er(t,...e){if(qs.logLevel<=me.ERROR){const n=e.map(Kf);qs.error(`Firestore (${Zi}): ${t}`,...n)}}function Gs(t,...e){if(qs.logLevel<=me.WARN){const n=e.map(Kf);qs.warn(`Firestore (${Zi}): ${t}`,...n)}}function Kf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ne(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Pw(t,r,n)}function Pw(t,e,n){let r=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Er(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Pw(e,s,r)}function oe(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class is{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class bw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class qC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GC{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new is;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new is,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new is)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new bw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new Ot(e)}}class WC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class KC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new WC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ny{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ny(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ny(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function YC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=YC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Ed(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return dh(s)===dh(i)?ge(s,i):dh(s)?1:-1}return ge(t.length,e.length)}const JC=55296,XC=57343;function dh(t){const e=t.charCodeAt(0);return e>=JC&&e<=XC}function Hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const ry="__name__";class $n{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ne(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=$n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=$n.isNumericId(e),s=$n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?$n.extractNumericId(e).compare($n.extractNumericId(n)):Ed(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ss.fromString(e.substring(4,e.length-2))}}class Fe extends $n{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const ZC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends $n{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return ZC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ry}static keyField(){return new kt([ry])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Fe.fromString(e))}static fromName(e){return new X(Fe.fromString(e).popFirst(5))}static empty(){return new X(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Fe(e.slice()))}}/**
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
 */function Nw(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eR(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sy(t){if(!X.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iy(t){if(X.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function pa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function ba(t,e){if(!Dw(t))throw new H(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new H(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const oy=-62135596800,ay=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ay);return new qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<oy)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ay}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ba(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-oy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:ft("string",qe._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};/**
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
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new qe(0,0))}static max(){return new ie(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ma=-1;function tR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new cs(s,X.empty(),e)}function nR(t){return new cs(t.readTime,t.key,ma)}class cs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cs(ie.min(),X.empty(),ma)}static max(){return new cs(ie.max(),X.empty(),ma)}}function rR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const sR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function eo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==sR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function oR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function to(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class tc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}tc.ce=-1;/**
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
 */const Yf=-1;function nc(t){return t==null}function vu(t){return t===0&&1/t==-1/0}function aR(t){return typeof t=="number"&&Number.isInteger(t)&&!vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ow="";function lR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ly(e)),e=uR(t.get(n),e);return ly(e)}function uR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ow:n+="";break;default:n+=i}}return n}function ly(t){return t+Ow+""}/**
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
 */function uy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class et{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gl(this.root,e,this.comparator,!0)}}class gl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??xt.RED,this.left=s??xt.EMPTY,this.right=i??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new xt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return xt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cy(this.data.getIterator())}getIteratorFrom(e){return new cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new vt(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mw("Invalid base64 string: "+i):i}}(e);return new Pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const cR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hs(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=cR.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
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
 */const Lw="server_timestamp",Fw="__type__",Uw="__previous_value__",jw="__local_write_time__";function Jf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Fw])==null?void 0:r.stringValue)===Lw}function rc(t){const e=t.mapValue.fields[Uw];return Jf(e)?rc(e):e}function ga(t){const e=hs(t.mapValue.fields[jw].timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class hR{constructor(e,n,r,s,i,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const wu="(default)";class ya{constructor(e,n){this.projectId=e,this.database=n||wu}static empty(){return new ya("","")}get isDefaultDatabase(){return this.database===wu}isEqual(e){return e instanceof ya&&e.projectId===this.projectId&&e.database===this.database}}function dR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ya(t.options.projectId,e)}/**
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
 */const Bw="__type__",fR="__max__",yl={mapValue:{}},zw="__vector__",Eu="value";function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jf(t)?4:mR(t)?9007199254740991:pR(t)?10:11:ne(28295,{value:t})}function er(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ga(t).isEqual(ga(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hs(s.timestampValue),l=hs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ds(s.bytesValue).isEqual(ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=it(s.doubleValue),l=it(i.doubleValue);return o===l?vu(o)===vu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(uy(o)!==uy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!er(o[u],l[u])))return!1;return!0}(t,e);default:return ne(52216,{left:t})}}function _a(t,e){return(t.values||[]).find(n=>er(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=fs(t),r=fs(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=it(i.integerValue||i.doubleValue),u=it(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return hy(t.timestampValue,e.timestampValue);case 4:return hy(ga(t),ga(e));case 5:return Ed(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ds(i),u=ds(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ge(l[h],u[h]);if(f!==0)return f}return ge(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ge(it(i.latitude),it(o.latitude));return l!==0?l:ge(it(i.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return dy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,x,P,b;const l=i.fields||{},u=o.fields||{},h=(m=l[Eu])==null?void 0:m.arrayValue,f=(x=u[Eu])==null?void 0:x.arrayValue,p=ge(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((b=f==null?void 0:f.values)==null?void 0:b.length)||0);return p!==0?p:dy(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===yl.mapValue&&o===yl.mapValue)return 0;if(i===yl.mapValue)return 1;if(o===yl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Ed(u[p],f[p]);if(m!==0)return m;const x=qi(l[u[p]],h[f[p]]);if(x!==0)return x}return ge(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ne(23264,{he:n})}}function hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=hs(t),r=hs(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function dy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qi(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Gi(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Td(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Td(n.fields[o])}`;return s+"}"}(t.mapValue):ne(61005,{value:t})}function Ml(t){switch(fs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rc(t);return e?16+Ml(e):16;case 5:return 2*t.stringValue.length;case 6:return ds(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ml(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Xs(r.fields,(i,o)=>{s+=i.length+Ml(o)}),s}(t.mapValue);default:throw ne(13486,{value:t})}}function fy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Id(t){return!!t&&"integerValue"in t}function Xf(t){return!!t&&"arrayValue"in t}function py(t){return!!t&&"nullValue"in t}function my(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function pR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Bw])==null?void 0:r.stringValue)===zw}function qo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return{...t}}function mR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===fR}/**
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
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=kt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=qo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ll(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Xs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _n(qo(this.value))}}function $w(t){const e=[];return Xs(t.fields,(n,r)=>{const s=new kt([n]);if(Ll(r)){const i=$w(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Cn(e)}/**
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
 */class Mt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Mt(e,0,ie.min(),ie.min(),ie.min(),_n.empty(),0)}static newFoundDocument(e,n,r,s){return new Mt(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new Mt(e,2,n,ie.min(),ie.min(),_n.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,ie.min(),ie.min(),_n.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tu{constructor(e,n){this.position=e,this.inclusive=n}}function gy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function yy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!er(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class va{constructor(e,n="asc"){this.field=e,this.dir=n}}function gR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hw{}class dt extends Hw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _R(e,n,r):n==="array-contains"?new ER(e,r):n==="in"?new TR(e,r):n==="not-in"?new IR(e,r):n==="array-contains-any"?new SR(e,r):new dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vR(e,r):new wR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qi(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends Hw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Vn(e,n)}matches(e){return qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qw(t){return t.op==="and"}function Gw(t){return yR(t)&&qw(t)}function yR(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Sd(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+Gi(t.value);if(Gw(t))return t.filters.map(e=>Sd(e)).join(",");{const e=t.filters.map(n=>Sd(n)).join(",");return`${t.op}(${e})`}}function Ww(t,e){return t instanceof dt?function(r,s){return s instanceof dt&&r.op===s.op&&r.field.isEqual(s.field)&&er(r.value,s.value)}(t,e):t instanceof Vn?function(r,s){return s instanceof Vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Ww(o,s.filters[l]),!0):!1}(t,e):void ne(19439)}function Kw(t){return t instanceof dt?function(n){return`${n.field.canonicalString()} ${n.op} ${Gi(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(Kw).join(" ,")+"}"}(t):"Filter"}class _R extends dt{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class vR extends dt{constructor(e,n){super(e,"in",n),this.keys=Qw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wR extends dt{constructor(e,n){super(e,"not-in",n),this.keys=Qw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class ER extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xf(n)&&_a(n.arrayValue,this.value)}}class TR extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_a(this.value.arrayValue,n)}}class IR extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!_a(this.value.arrayValue,n)}}class SR extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_a(this.value.arrayValue,r))}}/**
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
 */class AR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function _y(t,e=null,n=[],r=[],s=null,i=null,o=null){return new AR(t,e,n,r,s,i,o)}function Zf(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Gi(r)).join(",")),e.Te=n}return e.Te}function ep(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ww(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yy(t.startAt,e.startAt)&&yy(t.endAt,e.endAt)}function Ad(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class no{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function xR(t,e,n,r,s,i,o,l){return new no(t,e,n,r,s,i,o,l)}function Yw(t){return new no(t)}function vy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kR(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Jw(t){return t.collectionGroup!==null}function Go(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new vt(kt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new va(i,r))}),n.has(kt.keyField().canonicalString())||e.Ie.push(new va(kt.keyField(),r))}return e.Ie}function Yn(t){const e=oe(t);return e.Ee||(e.Ee=CR(e,Go(t))),e.Ee}function CR(t,e){if(t.limitType==="F")return _y(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new va(s.field,i)});const n=t.endAt?new Tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tu(t.startAt.position,t.startAt.inclusive):null;return _y(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xd(t,e){const n=t.filters.concat([e]);return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function RR(t,e){const n=t.explicitOrderBy.concat([e]);return new no(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Iu(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return ep(Yn(t),Yn(e))&&t.limitType===e.limitType}function Xw(t){return`${Zf(Yn(t))}|lt:${t.limitType}`}function ui(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Kw(s)).join(", ")}]`),nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Gi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Gi(s)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=gy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Go(r),s)||r.endAt&&!function(o,l,u){const h=gy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Go(r),s))}(t,e)}function PR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zw(t){return(e,n)=>{let r=!1;for(const s of Go(t)){const i=bR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bR(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?qi(u,h):ne(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:t.dir})}}/**
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
 */class Zs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Vw(this.inner)}size(){return this.innerSize}}/**
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
 */const NR=new et(X.comparator);function Tr(){return NR}const e1=new et(X.comparator);function No(...t){let e=e1;for(const n of t)e=e.insert(n.key,n);return e}function t1(t){let e=e1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bs(){return Wo()}function n1(){return Wo()}function Wo(){return new Zs(t=>t.toString(),(t,e)=>t.isEqual(e))}const DR=new et(X.comparator),OR=new vt(X.comparator);function ye(...t){let e=OR;for(const n of t)e=e.add(n);return e}const VR=new vt(ge);function MR(){return VR}/**
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
 */function tp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(e)?"-0":e}}function r1(t){return{integerValue:""+t}}function LR(t,e){return aR(e)?r1(e):tp(t,e)}/**
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
 */class oc{constructor(){this._=void 0}}function FR(t,e,n){return t instanceof wa?function(s,i){const o={fields:{[Fw]:{stringValue:Lw},[jw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Jf(i)&&(i=rc(i)),i&&(o.fields[Uw]=i),{mapValue:o}}(n,e):t instanceof Ea?i1(t,e):t instanceof Ta?o1(t,e):function(s,i){const o=s1(s,i),l=wy(o)+wy(s.Ae);return Id(o)&&Id(s.Ae)?r1(l):tp(s.serializer,l)}(t,e)}function UR(t,e,n){return t instanceof Ea?i1(t,e):t instanceof Ta?o1(t,e):n}function s1(t,e){return t instanceof Su?function(r){return Id(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class wa extends oc{}class Ea extends oc{constructor(e){super(),this.elements=e}}function i1(t,e){const n=a1(e);for(const r of t.elements)n.some(s=>er(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ta extends oc{constructor(e){super(),this.elements=e}}function o1(t,e){let n=a1(e);for(const r of t.elements)n=n.filter(s=>!er(s,r));return{arrayValue:{values:n}}}class Su extends oc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function wy(t){return it(t.integerValue||t.doubleValue)}function a1(t){return Xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class jR{constructor(e,n){this.field=e,this.transform=n}}function BR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ea&&s instanceof Ea||r instanceof Ta&&s instanceof Ta?Hi(r.elements,s.elements,er):r instanceof Su&&s instanceof Su?er(r.Ae,s.Ae):r instanceof wa&&s instanceof wa}(t.transform,e.transform)}class zR{constructor(e,n){this.version=e,this.transformResults=n}}class mr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mr}static exists(e){return new mr(void 0,e)}static updateTime(e){return new mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ac{}function l1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new c1(t.key,mr.none()):new Na(t.key,t.data,mr.none());{const n=t.data,r=_n.empty();let s=new vt(kt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ei(t.key,r,new Cn(s.toArray()),mr.none())}}function $R(t,e,n){t instanceof Na?function(s,i,o){const l=s.value.clone(),u=Ty(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(s,i,o){if(!Fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ty(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(u1(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof Na?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const h=i.value.clone(),f=Iy(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const h=Iy(i.fieldTransforms,u,o),f=o.data;return f.setAll(u1(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function HR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=s1(r.transform,s||null);i!=null&&(n===null&&(n=_n.empty()),n.set(r.field,i))}return n||null}function Ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hi(r,s,(i,o)=>BR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Na extends ac{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ei extends ac{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function u1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ty(t,e,n){const r=new Map;be(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,UR(o,l,n[s]))}return r}function Iy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,FR(i,o,e))}return r}class c1 extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qR extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$R(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=n1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=l1(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>Ey(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>Ey(n,r))}}class np{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return DR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new np(e,n,r,s)}}/**
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
 */class WR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ct,Te;function QR(t){switch(t){case V.OK:return ne(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function h1(t){if(t===void 0)return Er("GRPC error has no .code"),V.UNKNOWN;switch(t){case ct.OK:return V.OK;case ct.CANCELLED:return V.CANCELLED;case ct.UNKNOWN:return V.UNKNOWN;case ct.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ct.INTERNAL:return V.INTERNAL;case ct.UNAVAILABLE:return V.UNAVAILABLE;case ct.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ct.NOT_FOUND:return V.NOT_FOUND;case ct.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ct.ABORTED:return V.ABORTED;case ct.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ct.DATA_LOSS:return V.DATA_LOSS;default:return ne(39323,{code:t})}}(Te=ct||(ct={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YR(){return new TextEncoder}/**
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
 */const JR=new ss([4294967295,4294967295],0);function Sy(t){const e=YR().encode(t),n=new Sw;return n.update(e),new Uint8Array(n.digest())}function Ay(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ss([n,r],0),new ss([s,i],0)]}class rp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ss.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ss.fromNumber(r)));return s.compare(JR)===1&&(s=new ss([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Sy(e),[r,s]=Ay(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new rp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Sy(e),[r,s]=Ay(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lc(ie.min(),s,new et(ge),Tr(),ye())}}class Da{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Da(r,n,ye(),ye(),ye())}}/**
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
 */class Ul{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class d1{constructor(e,n){this.targetId=e,this.Ce=n}}class f1{constructor(e,n,r=Pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xy{constructor(){this.ve=0,this.Fe=ky(),this.Me=Pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne(38017,{changeType:i})}}),new Da(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=ky()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class XR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tr(),this.He=_l(),this.Je=_l(),this.Ze=new et(ge)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ad(i))if(r===0){const o=new X(i.path);this.et(n,o,Mt.newNoDocument(o,ie.min()))}else be(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ds(r).toUint8Array()}catch(u){if(u instanceof Mw)return Gs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new rp(o,s,i)}catch(u){return Gs(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ad(l.target)){const u=new X(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Mt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ye();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new lc(e,n,this.Ze,this.je,r);return this.je=Tr(),this.He=_l(),this.Je=_l(),this.Ze=new et(ge),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new xy,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new vt(ge),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new vt(ge),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new xy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function _l(){return new et(X.comparator)}function ky(){return new et(X.comparator)}const ZR={asc:"ASCENDING",desc:"DESCENDING"},e2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t2={and:"AND",or:"OR"};class n2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||nc(e)?e:{value:e}}function Au(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function r2(t,e){return Au(t,e.toTimestamp())}function Jn(t){return be(!!t,49232),ie.fromTimestamp(function(n){const r=hs(n);return new qe(r.seconds,r.nanos)}(t))}function sp(t,e){return Cd(t,e).canonicalString()}function Cd(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function m1(t){const e=Fe.fromString(t);return be(w1(e),10190,{key:e.toString()}),e}function Rd(t,e){return sp(t.databaseId,e.path)}function fh(t,e){const n=m1(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(y1(n))}function g1(t,e){return sp(t.databaseId,e)}function s2(t){const e=m1(t);return e.length===4?Fe.emptyPath():y1(e)}function Pd(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function y1(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Cy(t,e,n){return{name:Rd(t,e),fields:n.value.mapValue.fields}}function i2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string",58123),Pt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Pt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:h1(h.code);return new H(f,h.message||"")}(o);n=new f1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fh(t,r.document.name),i=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):ie.min(),l=new _n({mapValue:{fields:r.document.fields}}),u=Mt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ul(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fh(t,r.document),i=r.readTime?Jn(r.readTime):ie.min(),o=Mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fh(t,r.document),i=r.removedTargetIds||[];n=new Ul([],i,s,null)}else{if(!("filter"in e))return ne(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KR(s,i),l=r.targetId;n=new d1(l,o)}}return n}function o2(t,e){let n;if(e instanceof Na)n={update:Cy(t,e.key,e.value)};else if(e instanceof c1)n={delete:Rd(t,e.key)};else if(e instanceof ei)n={update:Cy(t,e.key,e.data),updateMask:m2(e.fieldMask)};else{if(!(e instanceof qR))return ne(16599,{dt:e.type});n={verify:Rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof wa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Su)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ne(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:r2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)}(t,e.precondition)),n}function a2(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Jn(s.updateTime):Jn(i);return o.isEqual(ie.min())&&(o=Jn(i)),new zR(o,s.transformResults||[])}(n,e))):[]}function l2(t,e){return{documents:[g1(t,e.path)]}}function u2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=g1(t,s);const i=function(h){if(h.length!==0)return v1(Vn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:ci(m.field),direction:d2(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function c2(t){let e=s2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=_1(p);return m instanceof Vn&&Gw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new va(hi(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,nc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,x=p.values||[];return new Tu(x,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,x=p.values||[];return new Tu(x,m)}(n.endAt)),xR(e,s,o,i,l,"F",u,h)}function h2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hi(n.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hi(n.unaryFilter.field);return dt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hi(n.unaryFilter.field);return dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(t):t.fieldFilter!==void 0?function(n){return dt.create(hi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>_1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(n.compositeFilter.op))}(t):ne(30097,{filter:t})}function d2(t){return ZR[t]}function f2(t){return e2[t]}function p2(t){return t2[t]}function ci(t){return{fieldPath:t.canonicalString()}}function hi(t){return kt.fromServerFormat(t.fieldPath)}function v1(t){return t instanceof dt?function(n){if(n.op==="=="){if(my(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(py(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(my(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(py(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:f2(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(s=>v1(s));return r.length===1?r[0]:{compositeFilter:{op:p2(n.op),filters:r}}}(t):ne(54877,{filter:t})}function m2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function w1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function E1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Gr{constructor(e,n,r,s,i=ie.min(),o=ie.min(),l=Pt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class g2{constructor(e){this.yt=e}}function y2(t){const e=c2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Iu(e,e.limit,"L"):e}/**
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
 */class _2{constructor(){this.Sn=new v2}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(cs.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(cs.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class v2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new vt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new vt(Fe.comparator)).toArray()}}/**
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
 */const Ry={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},T1=41943040;class Kt{static withCacheSize(e){return new Kt(e,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Kt.DEFAULT_COLLECTION_PERCENTILE=10,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kt.DEFAULT=new Kt(T1,Kt.DEFAULT_COLLECTION_PERCENTILE,Kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kt.DISABLED=new Kt(-1,0,0);/**
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
 */class Wi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Wi(0)}static ar(){return new Wi(-1)}}/**
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
 */const Py="LruGarbageCollector",w2=1048576;function by([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class E2{constructor(e){this.Pr=e,this.buffer=new vt(by),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();by(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class T2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(Py,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){to(n)?q(Py,"Ignoring IndexedDB error during garbage collection: ",n):await eo(n)}await this.Ar(3e5)})}}class I2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(tc.ce);const r=new E2(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ry)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ry):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),li()<=me.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function S2(t,e){return new I2(t,e)}/**
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
 */class A2{constructor(){this.changes=new Zs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class k2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ko(r.mutation,s,Cn.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=bs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=No();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Tr();const o=Wo(),l=function(){return Wo()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ei)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ko(f.mutation,h,f.mutation.getFieldMask(),qe.now())):o.set(h.key,Cn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new x2(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Wo();let s=new et((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Cn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||ye()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=n1();f.forEach(m=>{if(!i.has(m)){const x=l1(n.get(m),r.get(m));x!==null&&p.set(m,x),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return kR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Jw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(bs());let l=ma,u=i;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ye())).next(f=>({batchId:l,changes:t1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=No();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=No();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(p,m){return new no(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Mt.newInvalidDocument(f)))});let l=No();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Ko(f.mutation,h,Cn.empty(),qe.now()),ic(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class C2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:y2(s.bundledQuery),readTime:Jn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class R2{constructor(){this.overlays=new et(X.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bs();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=bs(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new et((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=bs(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=bs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new WR(n,r));let i=this.Lr.get(n);i===void 0&&(i=ye(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class P2{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class ip{constructor(){this.kr=new vt(Tt.Kr),this.qr=new vt(Tt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Tt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Tt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new Fe([])),r=new Tt(n,e),s=new Tt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new X(new Fe([])),r=new Tt(n,e),s=new Tt(n,e+1);let i=ye();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Tt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Tt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return X.comparator(e.key,n.key)||ge(e.Hr,n.Hr)}static Ur(e,n){return ge(e.Hr,n.Hr)||X.comparator(e.key,n.key)}}/**
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
 */class b2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new vt(Tt.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Tt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Yf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Tt(n,0),s=new Tt(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new vt(ge);return n.forEach(s=>{const i=new Tt(s,0),o=new Tt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new Tt(new X(i),0);let l=new vt(ge);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){be(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new Tt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Tt(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class N2{constructor(e){this.ti=e,this.docs=function(){return new et(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Mt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tr();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||rR(nR(f),r)<=0||(s.has(f.key)||ic(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new D2(this)}getSize(e){return M.resolve(this.size)}}class D2 extends A2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class O2{constructor(e){this.persistence=e,this.ri=new Zs(n=>Zf(n),ep),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.ii=0,this.si=new ip,this.targetCount=0,this.oi=Wi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Wi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class I1{constructor(e,n){this._i={},this.overlays={},this.ai=new tc(0),this.ui=!1,this.ui=!0,this.ci=new P2,this.referenceDelegate=e(this),this.li=new O2(this),this.indexManager=new _2,this.remoteDocumentCache=function(s){return new N2(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new g2(n),this.Pi=new C2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new R2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new b2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new V2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class V2 extends iR{constructor(e){super(),this.currentSequenceNumber=e}}class op{constructor(e){this.persistence=e,this.Ri=new ip,this.Ai=null}static Vi(e){return new op(e)}get di(){if(this.Ai)return this.Ai;throw ne(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=X.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class xu{constructor(e,n){this.persistence=e,this.fi=new Zs(r=>lR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=S2(this,n)}static Vi(e,n){return new xu(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ml(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ap{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ap(e,n.fromCache,r,s)}}/**
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
 */class M2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class L2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return rx()?8:oR(Ft())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new M2;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(li()<=me.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(li()<=me.DEBUG&&q("QueryEngine","Query:",ui(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(li()<=me.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):M.resolve())}gs(e,n){if(vy(n))return M.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Iu(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ss(n,h,o,u.readTime)?this.gs(e,Iu(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return vy(n)||s.isEqual(ie.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(li()<=me.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ui(n)),this.Ds(e,o,n,tR(s,ma)).next(l=>l))})}bs(e,n){let r=new vt(Zw(e));return n.forEach((s,i)=>{ic(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return li()<=me.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",ui(n)),this.fs.getDocumentsMatchingQuery(e,n,cs.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const lp="LocalStore",F2=3e8;class U2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new et(ge),this.Fs=new Zs(i=>Zf(i),ep),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new k2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function j2(t,e,n,r){return new U2(t,e,n,r)}async function S1(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ye();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function B2(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let x=M.resolve();return m.forEach(P=>{x=x.next(()=>f.getEntry(u,P)).next(b=>{const O=h.docVersions.get(P);be(O!==null,48541),b.version.compareTo(O)<0&&(p.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),f.addEntry(b)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function A1(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function z2(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let x=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?x=x.withResumeToken(Pt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(p,x),function(b,O,A){return b.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=F2?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(m,x,f)&&l.push(n.li.updateTargetData(i,x))});let u=Tr(),h=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push($2(i,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(ie.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function $2(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tr();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(lp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function H2(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Yf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function q2(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function bd(t,e,n){const r=oe(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!to(o))throw o;q(lp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ny(t,e,n){const r=oe(t);let s=ie.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=oe(u),m=p.Fs.get(f);return m!==void 0?M.resolve(p.vs.get(m)):p.li.getTargetData(h,f)}(r,o,Yn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:ye())).next(l=>(G2(r,PR(e),l),{documents:l,ks:i})))}function G2(t,e,n){let r=t.Ms.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Dy{constructor(){this.activeTargetIds=MR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class W2{constructor(){this.vo=new Dy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class K2{Mo(e){}shutdown(){}}/**
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
 */const Oy="ConnectivityMonitor";class Vy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(Oy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(Oy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vl=null;function Nd(){return vl===null?vl=function(){return 268435456+Math.round(2147483648*Math.random())}():vl++,"0x"+vl.toString(16)}/**
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
 */const ph="RestConnection",Q2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Y2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===wu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Nd(),l=this.Qo(e,n.toUriEncodedString());q(ph,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=vs(h);return this.zo(e,l,u,r,f).then(p=>(q(ph,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Gs(ph,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=Q2[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class J2{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Dt="WebChannelConnection",xo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Pi extends Y2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Pi.c_){const e=Cw();xo(e,kw.STAT_EVENT,n=>{n.stat===wd.PROXY?q(Dt,"STAT_EVENT: detected buffering proxy"):n.stat===wd.NOPROXY&&q(Dt,"STAT_EVENT: detected no buffering proxy")}),Pi.c_=!0}}zo(e,n,r,s,i){const o=Nd();return new Promise((l,u)=>{const h=new Aw;h.setWithCredentials(!0),h.listenOnce(xw.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Vl.NO_ERROR:const p=h.getResponseJson();q(Dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Vl.TIMEOUT:q(Dt,`RPC '${e}' ${o} timed out`),u(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const m=h.getStatus();if(q(Dt,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let x=h.getResponseJson();Array.isArray(x)&&(x=x[0]);const P=x==null?void 0:x.error;if(P&&P.status&&P.message){const b=function(A){const E=A.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(P.status);u(new H(b,P.message))}else u(new H(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(V.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{q(Dt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(Dt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Nd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");q(Dt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let p=!1,m=!1;const x=new J2({Ho:P=>{m?q(Dt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(q(Dt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),q(Dt,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Jo:()=>f.close()});return xo(f,bo.EventType.OPEN,()=>{m||(q(Dt,`RPC '${e}' stream ${s} transport opened.`),x.i_())}),xo(f,bo.EventType.CLOSE,()=>{m||(m=!0,q(Dt,`RPC '${e}' stream ${s} transport closed`),x.o_(),this.E_(f))}),xo(f,bo.EventType.ERROR,P=>{m||(m=!0,Gs(Dt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),x.o_(new H(V.UNAVAILABLE,"The operation could not be completed")))}),xo(f,bo.EventType.MESSAGE,P=>{var b;if(!m){const O=P.data[0];be(!!O,16349);const A=O,E=(A==null?void 0:A.error)||((b=A[0])==null?void 0:b.error);if(E){q(Dt,`RPC '${e}' stream ${s} received error:`,E);const k=E.status;let D=function(w){const v=ct[w];if(v!==void 0)return h1(v)}(k),L=E.message;k==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&Gs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,L="Unknown error status: "+k+" with message "+E.message),m=!0,x.o_(new H(D,L)),f.close()}else q(Dt,`RPC '${e}' stream ${s} received:`,O),x.__(O)}}),Pi.u_(),setTimeout(()=>{x.s_()},0),x}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Rw()}}/**
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
 */function X2(t){return new Pi(t)}function mh(){return typeof document<"u"?document:null}/**
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
 */function uc(t){return new n2(t,!0)}/**
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
 */Pi.c_=!1;class x1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const My="PersistentStream";class k1{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new x1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(My,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(My,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Z2 extends k1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=i2(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?Jn(o.readTime):ie.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ad(u)?{documents:l2(i,u)}:{query:u2(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=p1(i,o.resumeToken);const h=kd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ie.min())>0){l.readTime=Au(i,o.snapshotVersion.toTimestamp());const h=kd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=h2(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.K_(n)}}class eP extends k1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=a2(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Pd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>o2(this.serializer,r))};this.K_(n)}}/**
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
 */class tP{}class nP extends tP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Cd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Cd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function rP(t,e,n,r){return new nP(t,e,n,r)}class sP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Er(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ws="RemoteStore";class iP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ti(this)&&(q(Ws,"Restarting streams for network reachability change."),await async function(u){const h=oe(u);h.Ea.add(4),await Oa(h),h.Va.set("Unknown"),h.Ea.delete(4),await cc(h)}(this))})}),this.Va=new sP(r,s)}}async function cc(t){if(ti(t))for(const e of t.Ra)await e(!0)}async function Oa(t){for(const e of t.Ra)await e(!1)}function C1(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),dp(n)?hp(n):ro(n).O_()&&cp(n,e))}function up(t,e){const n=oe(t),r=ro(n);n.Ia.delete(e),r.O_()&&R1(n,e),n.Ia.size===0&&(r.O_()?r.L_():ti(n)&&n.Va.set("Unknown"))}function cp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ro(t).Z_(e)}function R1(t,e){t.da.$e(e),ro(t).X_(e)}function hp(t){t.da=new XR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ro(t).start(),t.Va.ua()}function dp(t){return ti(t)&&!ro(t).x_()&&t.Ia.size>0}function ti(t){return oe(t).Ea.size===0}function P1(t){t.da=void 0}async function oP(t){t.Va.set("Online")}async function aP(t){t.Ia.forEach((e,n)=>{cp(t,e)})}async function lP(t,e){P1(t),dp(t)?(t.Va.ha(e),hp(t)):t.Va.set("Unknown")}async function uP(t,e,n){if(t.Va.set("Online"),e instanceof f1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){q(Ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ku(t,r)}else if(e instanceof Ul?t.da.Xe(e):e instanceof d1?t.da.st(e):t.da.tt(e),!n.isEqual(ie.min()))try{const r=await A1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Pt.EMPTY_BYTE_STRING,f.snapshotVersion)),R1(i,u);const p=new Gr(f.target,u,h,f.sequenceNumber);cp(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(Ws,"Failed to raise snapshot:",r),await ku(t,r)}}async function ku(t,e,n){if(!to(e))throw e;t.Ea.add(1),await Oa(t),t.Va.set("Offline"),n||(n=()=>A1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Ws,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await cc(t)})}function b1(t,e){return e().catch(n=>ku(t,n,e))}async function hc(t){const e=oe(t),n=ps(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yf;for(;cP(e);)try{const s=await H2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,hP(e,s)}catch(s){await ku(e,s)}N1(e)&&D1(e)}function cP(t){return ti(t)&&t.Ta.length<10}function hP(t,e){t.Ta.push(e);const n=ps(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function N1(t){return ti(t)&&!ps(t).x_()&&t.Ta.length>0}function D1(t){ps(t).start()}async function dP(t){ps(t).ra()}async function fP(t){const e=ps(t);for(const n of t.Ta)e.ea(n.mutations)}async function pP(t,e,n){const r=t.Ta.shift(),s=np.from(r,e,n);await b1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hc(t)}async function mP(t,e){e&&ps(t).Y_&&await async function(r,s){if(function(o){return QR(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();ps(r).B_(),await b1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hc(r)}}(t,e),N1(t)&&D1(t)}async function Ly(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),q(Ws,"RemoteStore received new credentials");const r=ti(n);n.Ea.add(3),await Oa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await cc(n)}async function gP(t,e){const n=oe(t);e?(n.Ea.delete(2),await cc(n)):e||(n.Ea.add(2),await Oa(n),n.Va.set("Unknown"))}function ro(t){return t.ma||(t.ma=function(n,r,s){const i=oe(n);return i.sa(),new Z2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:oP.bind(null,t),Yo:aP.bind(null,t),t_:lP.bind(null,t),J_:uP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),dp(t)?hp(t):t.Va.set("Unknown")):(await t.ma.stop(),P1(t))})),t.ma}function ps(t){return t.fa||(t.fa=function(n,r,s){const i=oe(n);return i.sa(),new eP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:dP.bind(null,t),t_:mP.bind(null,t),ta:fP.bind(null,t),na:pP.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await hc(t)):(await t.fa.stop(),t.Ta.length>0&&(q(Ws,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class fp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new fp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(t,e){if(Er("AsyncQueue",`${e}: ${t}`),to(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bi{static emptySet(e){return new bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=No(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fy{constructor(){this.ga=new et(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ne(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ki(e,n,bi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class yP{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class _P{constructor(){this.queries=Uy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=Uy(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function Uy(){return new Zs(t=>Xw(t),sc)}async function vP(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new yP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=pp(o,`Initialization of query '${ui(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&mp(n)}async function wP(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EP(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&mp(n)}function TP(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function mp(t){t.Ca.forEach(e=>{e.next()})}var Dd,jy;(jy=Dd||(Dd={})).Ma="default",jy.Cache="cache";class IP{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dd.Cache}}/**
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
 */class O1{constructor(e){this.key=e}}class V1{constructor(e){this.key=e}}class SP{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ye(),this.mutatedKeys=ye(),this.eu=Zw(e),this.tu=new bi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Fy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),x=ic(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),b=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let O=!1;m&&x?m.data.isEqual(x.data)?P!==b&&(r.track({type:3,doc:x}),O=!0):this.su(m,x)||(r.track({type:2,doc:x}),O=!0,(u&&this.eu(x,u)>0||h&&this.eu(x,h)<0)&&(l=!0)):!m&&x?(r.track({type:0,doc:x}),O=!0):m&&!x&&(r.track({type:1,doc:m}),O=!0,(u||h)&&(l=!0)),O&&(x?(o=o.add(x),i=b?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(x,P){const b=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Vt:O})}};return b(x)-b(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new Ki(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new V1(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new O1(r))}),n}cu(e){this.Za=e.ks,this.Ya=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ki.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const gp="SyncEngine";class AP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xP{constructor(e){this.key=e,this.hu=!1}}class kP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Zs(l=>Xw(l),sc),this.Iu=new Map,this.Eu=new Set,this.Ru=new et(X.comparator),this.Au=new Map,this.Vu=new ip,this.du={},this.mu=new Map,this.fu=Wi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function CP(t,e,n=!0){const r=B1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await M1(r,e,n,!0),s}async function RP(t,e){const n=B1(t);await M1(n,e,!0,!1)}async function M1(t,e,n,r){const s=await q2(t.localStore,Yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await PP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&C1(t.remoteStore,s),l}async function PP(t,e,n,r,s){t.pu=(p,m,x)=>async function(b,O,A,E){let k=O.view.ru(A);k.Ss&&(k=await Ny(b.localStore,O.query,!1).then(({documents:w})=>O.view.ru(w,k)));const D=E&&E.targetChanges.get(O.targetId),L=E&&E.targetMismatches.get(O.targetId)!=null,B=O.view.applyChanges(k,b.isPrimaryClient,D,L);return zy(b,O.targetId,B.au),B.snapshot}(t,p,m,x);const i=await Ny(t.localStore,e,!0),o=new SP(e,i.ks),l=o.ru(i.documents),u=Da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);zy(t,n,h.au);const f=new AP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function bP(t,e,n){const r=oe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!sc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&up(r.remoteStore,s.targetId),Od(r,s.targetId)}).catch(eo)):(Od(r,s.targetId),await bd(r.localStore,s.targetId,!0))}async function NP(t,e){const n=oe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),up(n.remoteStore,r.targetId))}async function DP(t,e,n){const r=jP(t);try{const s=await function(o,l){const u=oe(o),h=qe.now(),f=l.reduce((x,P)=>x.add(P.key),ye());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let P=Tr(),b=ye();return u.xs.getEntries(x,f).next(O=>{P=O,P.forEach((A,E)=>{E.isValidDocument()||(b=b.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,P)).next(O=>{p=O;const A=[];for(const E of l){const k=HR(E,p.get(E.key).overlayedDocument);k!=null&&A.push(new ei(E.key,k,$w(k.value.mapValue),mr.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,A,l)}).next(O=>{m=O;const A=O.applyToLocalDocumentSet(p,b);return u.documentOverlayCache.saveOverlays(x,O.batchId,A)})}).then(()=>({batchId:m.batchId,changes:t1(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new et(ge)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,s.batchId,n),await Va(r,s.changes),await hc(r.remoteStore)}catch(s){const i=pp(s,"Failed to persist write");n.reject(i)}}async function L1(t,e){const n=oe(t);try{const r=await z2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?be(o.hu,14607):s.removedDocuments.size>0&&(be(o.hu,42227),o.hu=!1))}),await Va(n,r,e)}catch(r){await eo(r)}}function By(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.ba)m.va(l)&&(h=!0)}),h&&mp(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OP(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new et(X.comparator);o=o.insert(i,Mt.newNoDocument(i,ie.min()));const l=ye().add(i),u=new lc(ie.min(),new Map,new et(ge),o,l);await L1(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),yp(r)}else await bd(r.localStore,e,!1).then(()=>Od(r,e,n)).catch(eo)}async function VP(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await B2(n.localStore,e);U1(n,r,null),F1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Va(n,s)}catch(s){await eo(s)}}async function MP(t,e,n){const r=oe(t);try{const s=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(be(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);U1(r,e,n),F1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Va(r,s)}catch(s){await eo(s)}}function F1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function U1(t,e,n){const r=oe(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||j1(t,r)})}function j1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(up(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),yp(t))}function zy(t,e,n){for(const r of n)r instanceof O1?(t.Vu.addReference(r.key,e),LP(t,r)):r instanceof V1?(q(gp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||j1(t,r.key)):ne(19791,{wu:r})}function LP(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(gp,"New document in limbo: "+n),t.Eu.add(r),yp(t))}function yp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new X(Fe.fromString(e)),r=t.fu.next();t.Au.set(r,new xP(n)),t.Ru=t.Ru.insert(n,r),C1(t.remoteStore,new Gr(Yn(Yw(n.path)),r,"TargetPurposeLimboResolution",tc.ce))}}async function Va(t,e,n){const r=oe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ap.Es(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,h){const f=oe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.Ts,x=>f.persistence.referenceDelegate.addReference(p,m.targetId,x)).next(()=>M.forEach(m.Is,x=>f.persistence.referenceDelegate.removeReference(p,m.targetId,x)))))}catch(p){if(!to(p))throw p;q(lp,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const x=f.vs.get(m),P=x.snapshotVersion,b=x.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(m,b)}}}(r.localStore,i))}async function FP(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){q(gp,"User change. New user:",e.toKey());const r=await S1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Va(n,r.Ns)}}function UP(t,e){const n=oe(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let s=ye();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function B1(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=L1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OP.bind(null,e),e.Pu.J_=EP.bind(null,e.eventManager),e.Pu.yu=TP.bind(null,e.eventManager),e}function jP(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MP.bind(null,e),e}class Cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return j2(this.persistence,new L2,e.initialUser,this.serializer)}Cu(e){return new I1(op.Vi,this.serializer)}Du(e){return new W2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cu.provider={build:()=>new Cu};class BP extends Cu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){be(this.persistence.referenceDelegate instanceof xu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new T2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Kt.withCacheSize(this.cacheSizeBytes):Kt.DEFAULT;return new I1(r=>xu.Vi(r,n),this.serializer)}}class Vd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>By(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FP.bind(null,this.syncEngine),await gP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _P}()}createDatastore(e){const n=uc(e.databaseInfo.databaseId),r=X2(e.databaseInfo);return rP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new iP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>By(this.syncEngine,n,0),function(){return Vy.v()?new Vy:new K2}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new kP(s,i,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=oe(s);q(Ws,"RemoteStore shutting down."),i.Ea.add(5),await Oa(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Vd.provider={build:()=>new Vd};/**
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
 */class zP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ms="FirestoreClient";class $P{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Ot.UNAUTHENTICATED,this.clientId=Qf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(ms,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(ms,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),q(ms,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await S1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $y(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HP(t);q(ms,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ly(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ly(e.remoteStore,s)),t._onlineComponents=e}async function HP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(ms,"Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new Cu)}}else q(ms,"Using default OfflineComponentProvider"),await gh(t,new BP(void 0));return t._offlineComponents}async function z1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(ms,"Using user provided OnlineComponentProvider"),await $y(t,t._uninitializedComponentsProvider._online)):(q(ms,"Using default OnlineComponentProvider"),await $y(t,new Vd))),t._onlineComponents}function qP(t){return z1(t).then(e=>e.syncEngine)}async function GP(t){const e=await z1(t),n=e.eventManager;return n.onListen=CP.bind(null,e.syncEngine),n.onUnlisten=bP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=NP.bind(null,e.syncEngine),n}function WP(t,e,n={}){const r=new is;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new zP({next:m=>{f.Nu(),o.enqueueAndForget(()=>wP(i,p)),m.fromCache&&u.source==="server"?h.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new IP(l,f,{includeMetadataChanges:!0,Ka:!0});return vP(i,p)}(await GP(t),t.asyncQueue,e,n,r)),r.promise}function KP(t,e){const n=new is;return t.asyncQueue.enqueueAndForget(async()=>DP(await qP(t),e,n)),n.promise}/**
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
 */function $1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const QP="ComponentProvider",Hy=new Map;function YP(t,e,n,r,s){return new hR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,$1(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const H1="firestore.googleapis.com",qy=!0;class Gy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=H1,this.ssl=qy}else this.host=e.host,this.ssl=e.ssl??qy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=T1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<w2)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HC;switch(r.type){case"firstParty":return new KC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hy.get(n);r&&(q(QP,"Removing Datastore"),Hy.delete(n),r.terminate())}(this),Promise.resolve()}}function JP(t,e,n,r={}){var h;t=pa(t,dc);const s=vs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Mf(`https://${l}`),Lf("Firestore",!0)),i.host!==H1&&i.host!==l&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!zs(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ot.MOCK_USER;else{f=rw(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ot(m)}t._authCredentials=new qC(new bw(f,p))}}/**
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
 */class ws{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ws(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ba(n,_t._jsonSchema))return new _t(e,r||null,new X(Fe.fromString(n.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:ft("string",_t._jsonSchemaVersion),referencePath:ft("string")};class os extends ws{constructor(e,n,r){super(e,n,Yw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new X(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function Wy(t,e,...n){if(t=wt(t),Nw("collection","path",e),t instanceof dc){const r=Fe.fromString(e,...n);return iy(r),new os(t,null,r)}{if(!(t instanceof _t||t instanceof os))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return iy(r),new os(t.firestore,null,r)}}function XP(t,e,...n){if(t=wt(t),arguments.length===1&&(e=Qf.newId()),Nw("doc","path",e),t instanceof dc){const r=Fe.fromString(e,...n);return sy(r),new _t(t,null,new X(r))}{if(!(t instanceof _t||t instanceof os))throw new H(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return sy(r),new _t(t.firestore,t instanceof os?t.converter:null,new X(r))}}/**
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
 */const Ky="AsyncQueue";class Qy{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new x1(this,"async_queue_retry"),this._c=()=>{const r=mh();r&&q(Ky,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=mh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new is;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!to(e))throw e;q(Ky,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Er("INTERNAL UNHANDLED ERROR: ",Yy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=fp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ne(47125,{Pc:Yy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Yy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class _p extends dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Qy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qy(e),this._firestoreClient=void 0,await e}}}function ZP(t,e){const n=typeof t=="object"?t:jf(),r=typeof t=="string"?t:wu,s=Zu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ew("firestore");i&&JP(s,...i)}return s}function q1(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eb(t),t._firestoreClient}function eb(t){var r,s,i,o;const e=t._freezeSettings(),n=YP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new $P(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(Pt.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vn(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ba(e,vn._jsonSchema))return vn.fromBase64String(e.bytes)}}vn._jsonSchemaVersion="firestore/bytes/1.0",vn._jsonSchema={type:ft("string",vn._jsonSchemaVersion),bytes:ft("string")};/**
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
 */class G1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vp{constructor(e){this._methodName=e}}/**
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
 */class Xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(ba(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:ft("string",Xn._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class Nn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ba(e,Nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Nn(e.vectorValues);throw new H(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:ft("string",Nn._jsonSchemaVersion),vectorValues:ft("object")};/**
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
 */const tb=/^__.*__$/;class nb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new Na(e,this.data,n,this.fieldTransforms)}}function W1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{dataSource:t})}}class wp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new wp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ru(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(W1(this.dataSource)&&tb.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class rb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uc(e)}createContext(e,n,r,s=!1){return new wp({dataSource:e,methodName:n,targetDoc:r,path:kt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function K1(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new rb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sb(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);J1("Data must be an object, but it was:",o,r);const l=Q1(r,o);let u,h;if(i.merge)u=new Cn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Ma(e,p,n);if(!o.contains(m))throw new H(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);lb(f,m)||f.push(m)}u=new Cn(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new nb(new _n(l),u,h)}class Ep extends vp{_toFieldTransform(e){return new jR(e.path,new wa)}isEqual(e){return e instanceof Ep}}function ib(t,e,n,r=!1){return Tp(n,t.createContext(r?4:3,e))}function Tp(t,e){if(Y1(t=wt(t)))return J1("Unsupported field value:",e,t),Q1(t,e);if(t instanceof vp)return function(r,s){if(!W1(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Tp(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:Au(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Au(s.serializer,i)}}if(r instanceof Xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:p1(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nn)return function(o,l){const u=o instanceof Nn?o.toArray():o;return{mapValue:{fields:{[Bw]:{stringValue:zw},[Eu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return tp(l.serializer,f)})}}}}}}(r,s);if(E1(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${ec(r)}`)}(t,e)}function Q1(t,e){const n={};return Vw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(r,s)=>{const i=Tp(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Y1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Xn||t instanceof vn||t instanceof _t||t instanceof vp||t instanceof Nn||E1(t))}function J1(t,e,n){if(!Y1(n)||!Dw(n)){const r=ec(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ma(t,e,n){if((e=wt(e))instanceof G1)return e._internalPath;if(typeof e=="string")return ab(t,e);throw Ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const ob=new RegExp("[~\\*/\\[\\]]");function ab(t,e,n){if(e.search(ob)>=0)throw Ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new G1(...e.split("."))._internalPath}catch{throw Ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ru(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function lb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ub{convertValue(e,n="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Eu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>it(o.doubleValue));return new Nn(n)}convertGeoPoint(e){return new Xn(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ga(e));default:return null}}convertTimestamp(e){const n=hs(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);be(w1(r),9688,{name:e});const s=new ya(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class cb extends ub{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function hb(){return new Ep("serverTimestamp")}const Jy="@firebase/firestore",Xy="4.12.0";/**
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
 */class X1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new db(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ma("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class db extends X1{data(){return super.data()}}/**
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
 */function fb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ip{}class Sp extends Ip{}function Zy(t,e,...n){let r=[];e instanceof Ip&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Ap).length,l=i.filter(u=>u instanceof fc).length;if(o>1||o>0&&l>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class fc extends Sp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fc(e,n,r)}_apply(e){const n=this._parse(e);return Z1(e._query,n),new ws(e.firestore,e.converter,xd(e._query,n))}_parse(e){const n=K1(e.firestore);return function(i,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){s_(p,f);const P=[];for(const b of p)P.push(r_(u,i,b));m={arrayValue:{values:P}}}else m=r_(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||s_(p,f),m=ib(l,o,p,f==="in"||f==="not-in");return dt.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function e_(t,e,n){const r=e,s=Ma("where",t);return fc._create(s,r,n)}class Ap extends Ip{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ap(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Z1(o,u),o=xd(o,u)}(e._query,n),new ws(e.firestore,e.converter,xd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xp extends Sp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new va(i,o)}(e._query,this._field,this._direction);return new ws(e.firestore,e.converter,RR(e._query,n))}}function t_(t,e="asc"){const n=e,r=Ma("orderBy",t);return xp._create(r,n)}class kp extends Sp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new kp(e,n,r)}_apply(e){return new ws(e.firestore,e.converter,Iu(e._query,this._limit,this._limitType))}}function n_(t){return kp._create("limit",t,"F")}function r_(t,e,n){if(typeof(n=wt(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jw(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!X.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fy(t,new X(r))}if(n instanceof _t)return fy(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function s_(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Z1(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function pb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class wl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ni extends X1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ma("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ni._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ni._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ni._jsonSchema={type:ft("string",Ni._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class jl extends Ni{data(e={}){return super.data(e)}}class Di{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new wl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jl(this._firestore,this._userDataWriter,r.key,r,new wl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new jl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new wl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new jl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new wl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:mb(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Di._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}/**
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
 */Di._jsonSchemaVersion="firestore/querySnapshot/1.0",Di._jsonSchema={type:ft("string",Di._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};function gb(t){t=pa(t,ws);const e=pa(t.firestore,_p),n=q1(e),r=new cb(e);return fb(t._query),WP(n,t._query).then(s=>new Di(e,r,t,s))}function yb(t,e,n){t=pa(t,_t);const r=pa(t.firestore,_p),s=pb(t.converter,e,n),i=K1(r);return _b(r,[sb(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,mr.none())])}function _b(t,e){const n=q1(t);return KP(n,e)}(function(e,n=!0){$C(Js),$s(new us("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new _p(new GC(r.getProvider("auth-internal")),new QC(o,r.getProvider("app-check-internal")),dR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qn(Jy,Xy,e),Qn(Jy,Xy,"esm2020")})();const vb={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},Cp=ow(vb),Rp=UC(Cp),Md=ZP(Cp),Ld="shorts_brain_snapshots";function wb(t){const e=t?new Date(t):new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const n=new Date(e.getFullYear(),0,4),r=1+Math.round(((e.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7);return`${e.getFullYear()}-W${r.toString().padStart(2,"0")}`}async function Eb(t){const e=Wf(Rp,t),n=await LC(e);return new TextDecoder().decode(n)}async function Tb({weekId:t,reportingDate:e,rawFiles:n}){const r=`shorts-brain/weekly/${t}`,s=[];if(n)for(const[o,l]of Object.entries(n)){if(!l)continue;const u=Wf(Rp,`${r}/${o}.csv`);await FC(u,l,{contentType:"text/csv"}),s.push(o)}const i={weekId:t,reportingDate:e||null,savedAt:hb(),rawFileKeys:s};return await yb(XP(Md,Ld,t),i,{merge:!0}),{weekId:t,savedAt:new Date().toISOString(),fileCount:s.length}}async function i_(t){let e=Zy(Wy(Md,Ld),t_("weekId","desc"),n_(52));t&&(e=Zy(Wy(Md,Ld),t_("weekId","desc"),e_("weekId",">=",`${t}-W01`),e_("weekId","<=",`${t}-W53`),n_(52)));const n=await gb(e),r=[];return n.forEach(s=>{const i=s.data();r.push({weekId:i.weekId,reportingDate:i.reportingDate,savedAt:i.savedAt,rawFileKeys:i.rawFileKeys||[]})}),{snapshots:r,count:r.length}}async function Ib(t){const e=`shorts-brain/weekly/${t}`,n=Wf(Rp,e);let r=[];try{const i=await ey(n);if(r=i.items,i.prefixes.length>0)for(const o of i.prefixes){const l=await ey(o);r=r.concat(l.items)}}catch(i){return console.error("Failed to list snapshot files:",i),null}const s={};return await Promise.all(r.map(async i=>{if(i.name.endsWith(".csv"))try{const o=await Eb(i.fullPath),l=i.name.replace(".csv","");s[l]=o}catch(o){console.error(`Failed to download ${i.fullPath}:`,o)}})),s}const rn=["DAU-SCT","DAC-SCT","GenAI DAU-SCT"],Lr=["India","Indonesia","Japan","South Korea","AUNZ"],Bl={India:"IN",Indonesia:"ID",Japan:"JP","South Korea":"KR",AUNZ:"AUNZ"},Sb={IN:"India",ID:"Indonesia",JP:"Japan",KR:"South Korea",AUNZ:"AUNZ"},zl=["SSC","Shelf","UTS","MVR"],Wr=["female","male","total"],Dr=["FEMALE","MALE","GenPop"],qn=["18-24","25-34","18-34","35+","total"],o_=["18-24","25-34","18-34","35+","GenPop"],a_={APAC:.15,INDIA:.16,INDONESIA:.29,JAPAN:1.2,"SOUTH KOREA":1.08,AUNZ:1.56,IN:.16,ID:.29,JP:1.2,KR:1.08},Ab=[{id:"Upload",label:"Data Ingestion",icon:$S},{id:"OKR",label:"Shorts OKR Performance",icon:RA},{id:"Global Hub",label:"Global Holdback",icon:Wv},{id:"Market Hub",label:"Campaign Holdback",icon:nA}],El=[{id:"AlwaysOn",label:"Always-On",icon:Qv},{id:"ScaledCreation",label:"Scaled Creation",icon:kA},{id:"Trends",label:"Trends",icon:Kv},{id:"CultMo",label:"CultMo",icon:qS},{id:"ArtMo",label:"ArtMo",icon:uA},{id:"GenAI Hub",label:"GenAI Hub",icon:MA}],xb=[{g:"total",a:"total",label:"GenPop"},{g:"total",a:"18-34",label:"GenPop 18-34"},{g:"total",a:"18-24",label:"GenPop 18-24"},{g:"total",a:"25-34",label:"GenPop 25-34"},{g:"total",a:"35+",label:"GenPop 35+"},{g:"male",a:"total",label:"Male GenPop"},{g:"female",a:"total",label:"Female GenPop"},{g:"female",a:"18-34",label:"Female 18-34"},{g:"female",a:"18-24",label:"Female 18-24"},{g:"female",a:"25-34",label:"Female 25-34"},{g:"female",a:"35+",label:"Female 35+"},{g:"male",a:"18-34",label:"Male 18-34"},{g:"male",a:"18-24",label:"Male 18-24"},{g:"male",a:"25-34",label:"Male 25-34"},{g:"male",a:"35+",label:"Male 35+"}],Ye=t=>(t||"").toString().replace(/['"]/g,"").replace(/\u00A0/g," ").trim(),pn=t=>Ye(t).toUpperCase().replace(/[^A-Z0-9]/g,""),ar=(t,e)=>pn(t)===pn(e),lr=t=>{const e=Ye(t);if(!e||e==="-"||e==="Unknown")return null;try{if(e.includes("-")&&e.split("-")[0].length===4)return e;const n=e.split(/[-/]/);if(n.length===3){let s=parseInt(n[0],10),i=parseInt(n[1],10),o=parseInt(n[2],10);o<100&&(o+=2e3);let l,u;return s>12?(u=s,l=i):(i>12,l=s,u=i),`${o}-${l.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return isNaN(r.getTime())?null:r.toISOString().split("T")[0]}catch{return null}},kb=(t,e)=>{const n=lr(t),r=lr(e)||new Date().toISOString().split("T")[0];if(!n)return 0;try{const s=new Date(n),i=new Date(r),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));return o>=0?o+1:1}catch{return 0}},Cb=(t,e)=>{const n=lr(t),r=lr(e);if(!n||!r)return!1;try{return new Date(n)>=new Date(r)}catch{return!1}},Wt=t=>{const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];i==='"'?r=!r:i===","&&!r?(e.push(n.trim()),n=""):n+=i}return e.push(n.trim()),e},Ie=(t,e)=>{const n=t.map(s=>(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"")),r=e.map(s=>s.toUpperCase().replace(/[^A-Z0-9]/g,""));for(const s of r){const i=n.indexOf(s);if(i!==-1)return i}return n.findIndex(s=>r.some(i=>s.includes(i)))},Rb=(t,e)=>{const n=pn(t);if(!n)return{};if(e[n])return e[n];const s=Object.keys(e).find(i=>i.length>=5&&(n.includes(i)||i.includes(n)));return s?e[s]:{}},sr=(t,e={},n={},r=["Campaign","Campaign Name","Country","Market"],s=!1)=>{try{const i=t.split(/\r?\n/).filter(p=>p.trim()!=="");if(i.length<2)return e;const o=Wt(i[0]),l=Ie(o,r),u=Ie(o,["Value Type","Metric Type"]),h=Ie(o,["Slice"]);if(l===-1||u===-1)return e;const f={...e};return i.slice(1).forEach(p=>{const m=Wt(p),x=(m[u]||"").replace(/['"]/g,"").trim().toUpperCase(),P=h!==-1?(m[h]||"").replace(/['"]/g,"").trim().toUpperCase():"",b=!s&&(x==="RATIO (%)"||x==="RATIO"||x.includes("LIFT")),O=s&&x==="DELTA"&&P==="CONTROL",A=x.includes("TREND FAVORABILITY");if(!b&&!A&&!O)return;const E=Ye(m[l])||"Unknown";if(!f[E]){const w=Rb(E,n);f[E]={country:E,metrics:{},isAnchor:pn(E).includes("GLOBALHOLDBACK"),campaignStartDate:w.campaignStartDate||null,campaignEndDate:w.campaignEndDate||null,optimisationEndDate:w.optimisationEndDate||null,segmentTag:w.subTab||"Campaign Hub",meta:w},rn.forEach(v=>{f[E].metrics[v]={female:{},male:{},total:{}},Wr.forEach(g=>{qn.forEach(T=>f[E].metrics[v][g][T]={v:0,sig:0,abs:0,isPaused:!1,launchDate:null})})})}let k="total";const D=Ie(o,["Gender"]);if(D!==-1){const w=(m[D]||"").toLowerCase().trim();w==="female"||w==="f"?k="female":(w==="male"||w==="m")&&(k="male")}let L="total";const B=Ie(o,["Age","Age Group"]);if(B!==-1){const w=(m[B]||"").toLowerCase().trim();w.includes("18-24")?L="18-24":w.includes("25-34")?L="25-34":w.includes("18-34")?L="18-34":w.includes("35")&&(L="35+")}rn.forEach(w=>{const v={"DAU-SCT":["DAILY SHORTS CREATION TOOL ACTIVE USERS","DAU-SCT"],"DAC-SCT":["DAILY SHORTS CONVERTERS","DAC-SCT"],"GenAI DAU-SCT":["GENAI DAU","GENAI DAILY ACTIVE USERS"]},g=o.findIndex(C=>{const I=C.toUpperCase(),xe=(v[w]||[]).some(We=>I.includes(We)),je=I.includes("CONFIDENCE")||I.includes("BOUND");return xe&&!je&&(w!=="DAU-SCT"||!I.includes("GENAI"))});if(g===-1)return;const T=(m[g]||"").replace(/['"]/g,"").trim(),S=parseFloat(T.replace(/[^\d.-]/g,""))||0;if(b)f[E].metrics[w][k][L].v=S;else if(O)f[E].metrics[w][k][L].abs=S;else if(A){const C=T.toUpperCase();f[E].metrics[w][k][L].sig=C.includes("POSITIVE")||C.includes("SSP")?1:C.includes("NEGATIVE")||C.includes("SSN")?-1:0}})}),f}catch{return e}},Pb=(t,e)=>e?{cardBg:"bg-[#1a1a1a]",color:"text-[#808080]",accent:"bg-[#3a3a3a]"}:t>=100?{cardBg:"bg-[#0a1f0a]",color:"text-emerald-400",accent:"bg-emerald-500"}:t>=70?{cardBg:"bg-[#1a1a1a]",color:"text-amber-400",accent:"bg-amber-500"}:{cardBg:"bg-[#1a0a0a]",color:"text-red-400",accent:"bg-red-500"},l_=({activeMetrics:t,toggleMetric:e,handleAllToggle:n})=>_.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[_.jsx("div",{className:"flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]",children:rn.map(r=>_.jsx("button",{onClick:()=>e(r),className:`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${t.includes(r)?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:r},r))}),_.jsx("button",{onClick:n,className:`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${t.length===rn.length?"bg-white text-black border-white":"bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]"}`,children:t.length===rn.length?"Selective View":"Sync All Metrics"})]}),u_=({data:t,activeMetrics:e,isCampaignView:n=!1})=>{const r={FEMALE:{1:"bg-blue-900/40 text-blue-100",2:"bg-blue-900/20",3:"bg-blue-950/40 text-blue-400"},MALE:{1:"bg-purple-900/40 text-purple-100",2:"bg-purple-900/20",3:"bg-purple-950/40 text-purple-400"},GenPop:{1:"bg-amber-900/80 text-amber-50",2:"bg-amber-800/20",3:"bg-amber-950 text-amber-400 font-bold"}};return!t||t.length===0?_.jsxs("div",{className:"py-40 text-center flex flex-col items-center justify-center gap-6",children:[_.jsx("div",{className:"p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]",children:_.jsx(FA,{className:"w-12 h-12 text-[#3a3a3a] animate-pulse"})}),_.jsx("p",{className:"text-[#808080] font-bold text-sm uppercase tracking-widest",children:"No Data Available"})]}):_.jsx("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto",children:_.jsxs("table",{className:"w-full text-center border-collapse",children:[_.jsxs("thead",{children:[_.jsxs("tr",{className:"text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:[_.jsx("th",{rowSpan:3,className:"px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[280px]",children:n?"Campaign Name":"Country / Market"}),Dr.map((s,i)=>_.jsx("th",{colSpan:qn.length*e.length,className:`py-6 border-white/10 ${r[s][1]} ${i<Dr.length-1?"border-r-2 border-white/20":""}`,children:_.jsxs("div",{className:"flex items-center justify-center gap-3",children:[_.jsx(OA,{className:"w-4 h-4 opacity-50"}),s]})},s))]}),_.jsx("tr",{className:"text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:Dr.map(s=>_.jsx(ai.Fragment,{children:o_.map((i,o)=>_.jsx("th",{colSpan:e.length,className:`py-4 transition-colors ${r[s][2]} ${o===o_.length-1&&Dr.indexOf(s)<Dr.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:i},i))},s))}),_.jsx("tr",{className:"text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]",children:Dr.map(s=>_.jsx(ai.Fragment,{children:qn.map((i,o)=>_.jsx(ai.Fragment,{children:e.map((l,u)=>_.jsx("th",{className:`py-3 px-3 font-mono ${r[s][3]} ${o===qn.length-1&&u===e.length-1&&Dr.indexOf(s)<Dr.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:l.includes("GenAI")?"GenAI":l.split("-")[0]},l))},i))},s))})]}),_.jsx("tbody",{className:"divide-y divide-white/5",children:t.map((s,i)=>_.jsxs("tr",{className:`transition-all duration-200 ${s.isAnchor?"bg-white/[0.05]":"hover:bg-white/[0.03]"}`,children:[_.jsx("td",{className:`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 font-bold text-[12px] uppercase tracking-tight bg-[#111] ${s.isAnchor?"text-blue-400":"text-[#e0e0e0]"}`,children:s.isAnchor?`${s.country} (Reference)`:s.country}),Wr.map(o=>_.jsx(ai.Fragment,{children:qn.map((l,u)=>_.jsx(ai.Fragment,{children:e.map(h=>{const f=s.metrics[h][o][l],p=u===qn.length-1&&e.indexOf(h)===e.length-1;let m="text-slate-500 font-medium",x="";return f.isPaused?(m="text-[#808080] font-bold",x="bg-[#1a1a1a]"):f.sig===-1?(m="text-red-500 font-bold",x="bg-red-500/10"):f.sig===1?(m="text-emerald-500 font-bold",x="bg-emerald-500/10"):f.v!==0&&(m="text-slate-100 font-bold"),_.jsx("td",{className:`py-5 px-3 font-mono text-[13px] tabular-nums ${m} ${x} ${p&&Wr.indexOf(o)<Wr.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:_.jsx("div",{className:"flex flex-col items-center text-center",children:f.isPaused?_.jsxs(_.Fragment,{children:[_.jsx("span",{className:"leading-none uppercase",children:"Paused"}),_.jsx("span",{className:`text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic ${s.isAnchor?"text-slate-600":""}`,children:f.launchDate||"No Data"})]}):_.jsxs(_.Fragment,{children:[_.jsx("span",{children:f.v===0?"0.00":f.v>0?`+${f.v.toFixed(2)}`:`${f.v.toFixed(2)}`}),f.abs!==0&&_.jsxs("span",{className:"text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none",children:["(",f.abs>0?`+${Math.round(f.abs).toLocaleString()}`:Math.round(f.abs).toLocaleString(),")"]})]})})},h)})},l))},o))]},i))})]})})},c_=async t=>{try{await navigator.clipboard.writeText(t)}catch{const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},bb=({globalData:t,regionalData:e,latestDate:n})=>{const[r,s]=re.useState(null),[i,o]=re.useState({}),[l,u]=re.useState([]),[h,f]=re.useState(!1),[p,m]=re.useState(new Set),[x,P]=re.useState(null),[b,O]=re.useState({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}),A=g=>{P(g),setTimeout(()=>P(null),2e3)},E=re.useMemo(()=>{if(!n)return"TBD";const g=new Date("2026-03-31"),T=new Date(n),S=Math.ceil((g-T)/(1e3*60*60*24));return S>0?S:0},[n]),k=re.useMemo(()=>["APAC","India","Indonesia","Japan","South Korea","AUNZ"].map(g=>{var I,xe,je,We;const T=t.find(_e=>ar(_e.country,g)||ar(_e.country,Bl[g])),S=((We=(je=(xe=(I=T==null?void 0:T.metrics)==null?void 0:I["DAU-SCT"])==null?void 0:xe.total)==null?void 0:je.total)==null?void 0:We.v)||0,C=a_[g.toUpperCase()]||1;return{market:g.toUpperCase(),actual:S,target:C,perfIndex:C>0?S/C*100:0,isOffline:!T}}),[t]),D=re.useMemo(()=>{const g=[];return["APAC","India","Indonesia","Japan","South Korea","AUNZ"].forEach(S=>{var I,xe,je,We;const C=t.find(_e=>ar(_e.country,S)||ar(_e.country,Bl[S]));if(C){const _e=((We=(je=(xe=(I=C.metrics)==null?void 0:I["DAU-SCT"])==null?void 0:xe.total)==null?void 0:je.total)==null?void 0:We.v)||0,j=a_[S.toUpperCase()]||1,$=_e/j*100;let Z="MEET TARGET";$<70?Z="AT RISK":$<100&&(Z="ON TRACK"),g.push({id:`MARKET_${S}`,country:S.toUpperCase(),campaign:"GLOBAL HUB AUDIT",age:"GenPop",gender:"GenPop",segment:"MARKET HEALTH",recommendation:Z,justification:`${S} lift: ${_e.toFixed(3)}% (${$.toFixed(1)}% of target).`,isMarketAudit:!0})}}),Lr.forEach(S=>{(e[S]||[]).forEach((I,xe)=>{if(Cb(I.optimisationEndDate,I.campaignEndDate))return;const je=kb(I.campaignStartDate,I.optimisationEndDate),We=[];xb.forEach(_e=>{var Z,ke,ve;const j=((ve=(ke=(Z=I.metrics)==null?void 0:Z["DAU-SCT"])==null?void 0:ke[_e.g])==null?void 0:ve[_e.a])||{v:0,sig:0},$=_e.label;j.isPaused||(j.sig===-1?We.push({g:_e.g,a:_e.a,label:$,recommendation:"PAUSE",justification:`Pause ${$}: Stat-sig negative lift (-${Math.abs(j.v).toFixed(2)}%).`,statusType:"danger"}):_e.g==="total"&&_e.a==="total"&&je>14&&j.v<-.01?We.push({g:_e.g,a:_e.a,label:$,recommendation:"PAUSE",justification:`Pause ${$}: Negative lift observed post-learning.`,statusType:"danger"}):j.sig===1&&j.v>.001?We.push({g:_e.g,a:_e.a,label:$,recommendation:"SCALE",justification:`Scale ${$}: Stat-sig positive lift (+${j.v.toFixed(2)}%).`,statusType:"success"}):_e.g==="total"&&_e.a==="total"&&je<=14&&je>0&&We.push({g:_e.g,a:_e.a,label:$,recommendation:"MAINTAIN",justification:"Learning phase stage (<14d).",statusType:"warning"}))}),We.length>0&&["PAUSE","SCALE","MAINTAIN"].forEach(j=>{let $=We.filter(fe=>fe.recommendation===j);if($.length===0)return;const Z=$.find(fe=>fe.g==="male"&&fe.a==="total"),ke=$.find(fe=>fe.g==="female"&&fe.a==="total");Z&&ke&&($.find(Ee=>Ee.g==="total"&&Ee.a==="total")||$.push({g:"total",a:"total",label:"GenPop",recommendation:j,justification:`Consolidated ${j}: Impact observed across GenPop.`,statusType:Z.statusType}),$=$.filter(Ee=>!(Ee.a==="total"&&(Ee.g==="male"||Ee.g==="female"))));const ve=new Set;$.forEach(fe=>{$.forEach(Ee=>{if(!(fe===Ee||ve.has(Ee))){if(fe.g==="total"&&fe.a==="total"){ve.add(Ee);return}if(fe.a==="total"&&fe.g===Ee.g&&Ee.a!=="total"){ve.add(Ee);return}if(fe.a==="18-34"&&(Ee.a==="18-24"||Ee.a==="25-34")&&fe.g===Ee.g){ve.add(Ee);return}}})}),$.forEach((fe,Ee)=>{ve.has(fe)||g.push({...fe,id:`CAMP_${S}_${xe}_${j}_${Ee}`,country:Bl[S]||S.toUpperCase(),campaign:I.country,segment:I.segmentTag||"Campaign Hub",daysLive:je.toString(),age:fe.a==="total"?"GenPop":fe.a,gender:fe.g==="total"?"GenPop":fe.g.toUpperCase()})})})})}),[...g,...l].filter(S=>!p.has(S.id)).map(S=>i[S.id]?{...S,...i[S.id]}:S)},[t,e,l,p,i]),L=async g=>{const T=`${g.country}	${g.campaign}	${g.age}	${g.gender}	${g.recommendation}	${g.justification}`;await c_(T),A("Row Copied to Clipboard")},B=async()=>{if(D.length===0)return;const g="Market	Entity	Age	Gender	Directive	Justification",T=D.map(S=>`${S.country}	${S.campaign}	${S.age}	${S.gender}	${S.recommendation}	${S.justification}`).join(`
`);await c_(`${g}
${T}`),A("Full Matrix Copied for Sheets")},w=()=>{m(new Set),o({}),u([]),A("Matrix Restored to Baseline")},v=()=>{if(!b.campaign)return;const g=`MANUAL_${Date.now()}`;u(T=>[...T,{...b,id:g,statusType:b.recommendation==="PAUSE"?"danger":b.recommendation==="SCALE"?"success":"warning"}]),f(!1),O({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""})};return _.jsxs("div",{className:"w-full max-w-[1600px] mx-auto pb-32",children:[x&&_.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase",children:x}),_.jsx("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8",children:_.jsxs("div",{className:"space-y-4",children:[_.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase",children:"Shorts OKR Performance"}),_.jsxs("div",{className:"flex flex-wrap gap-10 pt-4",children:[_.jsxs("div",{className:"space-y-1",children:[_.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Quarter Start"}),_.jsx("p",{className:"text-lg font-bold text-white",children:"2026-02-01"})]}),_.jsxs("div",{className:"space-y-1",children:[_.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Reporting Date (Latest)"}),_.jsx("p",{className:"text-lg font-bold text-emerald-400",children:n||"Awaiting Data..."})]}),_.jsxs("div",{className:"space-y-1",children:[_.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Days Left in Q1"}),_.jsxs("p",{className:"text-lg font-bold text-amber-400",children:[E," ",_.jsx("span",{className:"text-[10px] text-[#808080] ml-1 font-normal",children:"days remaining"})]})]})]})]})}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:k.map((g,T)=>{const S=Pb(g.perfIndex,g.isOffline);return _.jsxs("div",{className:`relative ${S.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555]`,children:[_.jsx("div",{className:"flex justify-between items-start mb-6",children:_.jsx("h3",{className:"text-xl font-bold text-white uppercase",children:g.market})}),_.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[_.jsxs("span",{className:"text-3xl font-bold text-white",children:[g.perfIndex.toFixed(1),"%"]}),_.jsx("span",{className:"text-[9px] font-bold text-[#808080] uppercase",children:"INDEX"})]}),_.jsx("div",{className:"relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4",children:_.jsx("div",{className:`h-full ${S.accent}`,style:{width:`${Math.min(g.perfIndex,100)}%`}})}),_.jsxs("div",{className:"flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]",children:[_.jsxs("div",{className:"text-[#808080] uppercase",children:["Actual: ",_.jsxs("span",{className:"text-white",children:["+",g.actual.toFixed(2),"%"]})]}),_.jsxs("div",{className:"text-[#808080] uppercase",children:["Target: ",_.jsxs("span",{className:"text-[#b0b0b0]",children:[g.target.toFixed(2),"%"]})]})]})]},T)})}),_.jsxs("div",{className:"space-y-8",children:[_.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6",children:[_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsx("div",{className:"p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]",children:_.jsx(sA,{className:"w-6 h-6 text-amber-400"})}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-2xl font-bold text-white uppercase",children:"Strategic Guidance"}),_.jsx("p",{className:"text-[#808080] text-xs uppercase tracking-widest mt-1",children:"Manual Overrides"})]})]}),_.jsxs("div",{className:"flex flex-wrap gap-3",children:[_.jsxs("button",{onClick:()=>f(!0),className:"flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all",children:[_.jsx(mA,{className:"w-4 h-4"})," Add Pointer"]}),_.jsxs("button",{onClick:B,className:"flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[_.jsx(Vg,{className:"w-4 h-4"})," Copy All for Sheets"]}),_.jsxs("button",{onClick:w,className:"flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a]",children:[_.jsx(EA,{className:"w-4 h-4"})," Restore Defaults"]})]})]}),h&&_.jsxs("div",{className:"bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6",children:[_.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[_.jsxs("div",{children:[_.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Market"}),_.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase outline-none focus:border-[#FF0000] text-white",value:b.country,onChange:g=>O(T=>({...T,country:g.target.value.toUpperCase()}))})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Entity"}),_.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",placeholder:"e.g. Veo Effects",value:b.campaign,onChange:g=>O(T=>({...T,campaign:g.target.value}))})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Age"}),_.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:b.age,onChange:g=>O(T=>({...T,age:g.target.value}))})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Gender"}),_.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:b.gender,onChange:g=>O(T=>({...T,gender:g.target.value}))})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Directive"}),_.jsxs("select",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none text-white",value:b.recommendation,onChange:g=>O(T=>({...T,recommendation:g.target.value})),children:[_.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),_.jsx("option",{value:"SCALE",children:"SCALE"}),_.jsx("option",{value:"PAUSE",children:"PAUSE"})]})]})]}),_.jsx("textarea",{className:"w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] outline-none focus:border-[#FF0000] mb-4",placeholder:"Strategic justification context...",value:b.justification,onChange:g=>O(T=>({...T,justification:g.target.value}))}),_.jsxs("div",{className:"flex justify-end gap-3",children:[_.jsx("button",{onClick:()=>f(!1),className:"bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg hover:text-white font-bold text-[10px] uppercase transition-all border border-[#3a3a3a]",children:"Cancel"}),_.jsx("button",{onClick:v,className:"bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-500 font-bold text-[10px] uppercase transition-all",children:"Confirm Pointer"})]})]}),_.jsx("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto",children:_.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[_.jsx("thead",{children:_.jsxs("tr",{className:"bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold",children:[_.jsx("th",{className:"px-8 py-6 text-left",children:"Market"}),_.jsx("th",{className:"px-8 py-6 text-left",children:"Entity"}),_.jsx("th",{className:"px-8 py-6 text-center",children:"Age"}),_.jsx("th",{className:"px-8 py-6 text-center",children:"Gender"}),_.jsx("th",{className:"px-8 py-6 text-left",children:"Directive"}),_.jsx("th",{className:"px-8 py-6 text-left",children:"Justification"}),_.jsx("th",{className:"px-8 py-6 text-center",children:"Action"})]})}),_.jsx("tbody",{className:"divide-y divide-white/5",children:D.map(g=>{var T,S;return _.jsxs("tr",{className:`hover:bg-white/[0.02] group/row transition-colors ${g.recommendation==="PAUSE"?"bg-red-500/[0.03]":""}`,children:[_.jsx("td",{className:`px-8 py-4 font-bold uppercase ${g.isMarketAudit?"text-emerald-400":"text-blue-400"}`,children:g.country}),_.jsx("td",{className:"px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]",children:g.campaign}),_.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:g.age}),_.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:g.gender}),_.jsx("td",{className:"px-8 py-4 font-bold",children:r===g.id?_.jsxs("select",{className:"bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none",value:((T=i[g.id])==null?void 0:T.recommendation)||g.recommendation,onChange:C=>o(I=>({...I,[g.id]:{...I[g.id]||g,recommendation:C.target.value}})),children:[_.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),_.jsx("option",{value:"SCALE",children:"SCALE"}),_.jsx("option",{value:"PAUSE",children:"PAUSE"})]}):_.jsx("span",{className:`${g.recommendation==="PAUSE"?"text-red-400":g.recommendation==="SCALE"?"text-emerald-400":"text-amber-400"}`,children:g.recommendation})}),_.jsx("td",{className:"px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed",children:r===g.id?_.jsx("textarea",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none min-h-[60px]",value:((S=i[g.id])==null?void 0:S.justification)||g.justification,onChange:C=>o(I=>({...I,[g.id]:{...I[g.id]||g,justification:C.target.value}}))}):g.justification}),_.jsx("td",{className:"px-8 py-5 text-center",children:_.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity",children:[r===g.id?_.jsx("button",{onClick:()=>s(null),className:"p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg",children:_.jsx(IA,{className:"w-4 h-4"})}):_.jsx("button",{onClick:()=>s(g.id),title:"Edit Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all",children:_.jsx(hA,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>L(g),title:"Copy Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-all",children:_.jsx(Vg,{className:"w-4 h-4"})}),_.jsx("button",{onClick:()=>m(C=>new Set(C).add(g.id)),title:"Delete Pointer",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500 hover:bg-white/10 transition-all",children:_.jsx(bA,{className:"w-4 h-4"})})]})})]},g.id)})})]})})]})]})},Nb=({uploadedFiles:t,handleFileUpload:e,startAnalysis:n,isAnalyzing:r,memoryIndex:s,loadHistoricalWeek:i,isLoadingMemory:o,historicalSnapshots:l})=>{const u=({type:h,title:f,icon:p,tag:m})=>_.jsxs("div",{className:`p-6 rounded-lg border ${h==="pct"?"border-amber-500/30 bg-[#1a1500]":"border-blue-500/30 bg-[#0a0a1a]"} mb-6 transition-all`,children:[_.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[_.jsx("div",{className:`p-2 rounded-lg flex items-center justify-center ${h==="pct"?"bg-amber-500/20 text-amber-500":"bg-blue-500/20 text-blue-500"}`,children:_.jsx(p,{className:"w-5 h-5"})}),_.jsxs("div",{className:"text-left",children:[_.jsx("h2",{className:`text-lg font-bold uppercase tracking-tight ${h==="pct"?"text-amber-500":"text-blue-500"}`,children:f}),_.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:m})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left items-stretch",children:[_.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[_.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:x=>e(h,"global",x.target.files[0])}),_.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${t[h].global?h==="pct"?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:_.jsx(Wv,{className:"w-7 h-7"})}),_.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"Global Hub"}),_.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:t[h].global?t[h].global.name:"PUSH_MASTER_FILE"})]}),_.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[_.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(t[h].countryHB).length>0?h==="pct"?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:_.jsx(JS,{className:"w-7 h-7"})}),_.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Market Hub"}),_.jsx("div",{className:"w-full grid grid-cols-5 gap-1 px-1",children:Lr.map(x=>_.jsxs("div",{className:"relative aspect-square group/item",children:[_.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:P=>e(h,"countryHB",P.target.files[0],x)}),_.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${t[h].countryHB[x]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:_.jsx("span",{className:"text-[7px] font-black uppercase",children:Bl[x]})})]},x))})]}),_.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[_.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(t[h].alwaysOn).length>0?h==="pct"?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:_.jsx(Qv,{className:"w-7 h-7"})}),_.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Always-On"}),_.jsx("div",{className:"w-full grid grid-cols-2 gap-1.5 px-2",children:zl.map(x=>_.jsxs("div",{className:"relative h-7 group/item",children:[_.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:P=>e(h,"alwaysOn",P.target.files[0],x)}),_.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${t[h].alwaysOn[x]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:_.jsx("span",{className:"text-[7px] font-black uppercase",children:x})})]},x))})]})]})]});return _.jsx("div",{className:"min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0]",children:_.jsxs("div",{className:"max-w-[1500px] w-full z-10 text-center",children:[_.jsxs("div",{className:"mb-8",children:[_.jsx("div",{className:"inline-block mb-4",children:_.jsx("div",{className:"bg-[#FF0000] w-14 h-14 rounded-xl flex items-center justify-center mx-auto",children:_.jsx(Hv,{className:"text-white w-7 h-7"})})}),_.jsxs("h1",{className:"text-3xl font-bold tracking-tight mb-1 uppercase",children:["Shorts Brain ",_.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),_.jsx("p",{className:"text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase",children:"APAC Marketing Hub"})]}),_.jsxs("div",{className:"p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all",children:[_.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[_.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500",children:_.jsx(AA,{className:"w-5 h-5"})}),_.jsxs("div",{className:"text-left",children:[_.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-emerald-500",children:"Campaign Shared Meta"}),_.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Structural Definitions & Instructions"})]})]}),_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:[_.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[_.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.campaignInfo?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:_.jsx(jS,{className:"w-6 h-6"})}),_.jsxs("div",{className:"flex-1 text-left min-w-0",children:[_.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Structural Meta"}),_.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.campaignInfo?t.shared.campaignInfo.name:"PUSH_STRUCTURAL_CSV"})]}),_.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:h=>e("shared","campaignInfo",h.target.files[0])})]}),_.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[_.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.pauseRelive?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:_.jsx(yA,{className:"w-6 h-6"})}),_.jsxs("div",{className:"flex-1 text-left min-w-0",children:[_.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Pause/Relive Instructions"}),_.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.pauseRelive?t.shared.pauseRelive.name:"PUSH_INSTRUCTIONS_CSV"})]}),_.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:h=>e("shared","pauseRelive",h.target.files[0])})]})]})]}),_.jsx(u,{type:"pct",title:"Percentage Input Hub",tag:"Relative Lift Streams",icon:Kv}),_.jsx(u,{type:"abs",title:"Absolute Input Hub",tag:"Discrete Volume Streams",icon:RS}),_.jsxs("button",{onClick:n,disabled:r,className:"px-10 py-4 rounded-lg font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-3 mx-auto uppercase mt-4 border border-[#3a3a3a]",children:[r?_.jsx(vA,{className:"w-5 h-5 animate-spin"}):_.jsx(fA,{className:"w-5 h-5"}),r?"INITIALIZING...":"EXECUTE ANALYSIS"]}),s.length>0&&_.jsxs("div",{className:"mt-10 p-6 rounded-lg border border-[#3a3a3a] bg-[#1a1a1a]",children:[_.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[_.jsx(Gv,{className:"w-5 h-5 text-[#808080]"}),_.jsx("h2",{className:"text-sm font-bold uppercase tracking-wider text-[#808080]",children:"Stored Snapshots"})]}),_.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3",children:s.map(h=>_.jsxs("button",{onClick:()=>i(h.weekId),disabled:o,className:"border border-[#3a3a3a] bg-black rounded-lg p-4 text-center hover:border-[#FF0000]/50 hover:bg-[#FF0000]/5 transition-all cursor-pointer group",children:[_.jsx(qv,{className:"w-4 h-4 text-[#808080] mx-auto mb-2 group-hover:text-[#FF0000]"}),_.jsx("span",{className:"text-xs font-bold block text-white",children:h.weekId}),_.jsx("span",{className:"text-[8px] text-[#808080] block mt-1",children:h.reportingDate||"No date"}),_.jsxs("span",{className:"text-[8px] text-[#555] block",children:[h.globalCount||0," campaigns"]})]},h.weekId))})]})]})})},Db=()=>{const[t,e]=re.useState(!1),[n,r]=re.useState(!1),[s,i]=re.useState("OKR"),[o,l]=re.useState(!0),[u,h]=re.useState(["DAU-SCT"]),[f,p]=re.useState(!1),[m,x]=re.useState("India"),[P,b]=re.useState(null),[O,A]=re.useState({ScaledCreation:"India",Trends:"India",CultMo:"India",ArtMo:"India","GenAI Hub":"India",AlwaysOn:"India"}),[E,k]=re.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[D,L]=re.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[B,w]=re.useState([]),[v,g]=re.useState({}),[T,S]=re.useState({}),[C,I]=re.useState({pct:{global:null,countryHB:{},alwaysOn:{}},abs:{global:null,countryHB:{},alwaysOn:{}},shared:{campaignInfo:null,pauseRelive:null}}),[xe,je]=re.useState([]),[We,_e]=re.useState("idle"),[j,$]=re.useState(!1),[Z,ke]=re.useState([]),ve=re.useCallback((U,G)=>{var we;const pe=((we=T[U])==null?void 0:we[G])||{},Ae=Object.keys(pe).filter(le=>le!=="Generic");return Ae.length>0?Ae.sort():[]},[T]),fe=re.useCallback((U,G,pe)=>{var le,tt;const Ae=((tt=(le=T[U])==null?void 0:le[G])==null?void 0:tt[pe])||{},we=Object.keys(Ae).filter(cn=>cn!=="Default");return we.length>0?we.sort():[]},[T]),Ee=async()=>{r(!0);try{const U=Y=>new Promise(W=>{Y||W("");const J=new FileReader;J.onload=ue=>W(ue.target.result),J.readAsText(Y)});let G={};const pe=C.shared.campaignInfo;if(pe){const W=(await U(pe)).split(/\r?\n/).filter(J=>J.trim()!=="");if(W.length>1){const J=Wt(W[0]),ue=Ie(J,["Campaign","Campaign Name"]),te=Ie(J,["Market","Country"]),Ce=Ie(J,["Campaign Tabs","Tabs","Tab"]),Re=Ie(J,["Campaign Sub tabs","Sub tabs","Sub tab","Sub-tabs","Subtab","Sub category"]),ce=Ie(J,["Campaign Sub Sub tabs","Sub sub tabs","Sub-sub-tabs","Subsubtab"]),ze=Ie(J,["Campaign Start Date","Start Date"]),Oe=Ie(J,["Campaign End Date","End Date"]),Pe=Ie(J,["Optimisation End Date","Optimization Date"]);W.slice(1).forEach(Qe=>{const De=Wt(Qe),pt=Ye(De[ue]);if(pt){const ut=Ye(De[te]),dn=Sb[ut.toUpperCase()]||Lr.find(Ut=>ar(Ut,ut))||"India";G[pn(pt)]={market:dn,tab:Ye(De[Ce]),subTab:Ye(De[Re]),subSubTab:Ye(De[ce]),campaignStartDate:Ye(De[ze]),campaignEndDate:Ye(De[Oe]),optimisationEndDate:Ye(De[Pe])}}})}}let Ae={};const we=C.shared.pauseRelive;if(we){const W=(await U(we)).split(/\r?\n/).filter(J=>J.trim()!=="");if(W.length>1){const J=Wt(W[0]),ue=Ie(J,["Campaign","Campaign Name"]),te=Ie(J,["Age","Age Group"]),Ce=Ie(J,["Gender"]),Re=Ie(J,["Instruction","Action"]),ce=Ie(J,["Launch Date","Date"]);W.slice(1).forEach(ze=>{const Oe=Wt(ze),Pe=pn(Oe[ue]);if(!Pe)return;const Qe=(Oe[te]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),De=(Oe[Ce]||"total").toLowerCase().trim(),pt=(Oe[Re]||"").toUpperCase().trim(),ut=Ye(Oe[ce]);Ae[Pe]||(Ae[Pe]={}),Ae[Pe][De]||(Ae[Pe][De]={}),Ae[Pe][De][Qe]={instruction:pt,launchDate:ut}})}}const le={},tt=(Y,W,J=null,ue=null)=>{Object.values(Y).forEach(te=>{const Ce=te.meta||{};let Re=J||Ye(Ce.tab)||"Uncategorized";const ce=El.find(ut=>ar(ut.id,Re)||ar(ut.label,Re)),ze=ce?ce.id:Re,Oe=ue||Ye(Ce.subTab)||"Generic",Pe=Ye(Ce.subSubTab)||"Default",Qe=Ce.market||W,De=pn(te.country),pt=Ae[pn(te.country)];pt&&rn.forEach(ut=>{Wr.forEach(dn=>{qn.forEach(Ut=>{var Ar;const Fn=Ut.replace(/[^a-z0-9+]/g,""),nt=Fn==="1824"||Fn==="2534"?"1834":null,ri=[[dn,Fn],nt?[dn,nt]:null,[dn,"total"],["total",Fn],nt?["total",nt]:null,["total","total"]].filter(Boolean);let jt=null;for(const[yc,_c]of ri){const fn=(Ar=pt[yc])==null?void 0:Ar[_c];if(fn&&fn.instruction==="PAUSE"&&fn.launchDate&&fn.launchDate.trim()!==""){jt=fn;break}}jt&&(te.metrics[ut][dn][Ut].isPaused=!0,te.metrics[ut][dn][Ut].launchDate=jt.launchDate)})})}),le[ze]||(le[ze]={}),le[ze][Qe]||(le[ze][Qe]={}),le[ze][Qe][Oe]||(le[ze][Qe][Oe]={}),le[ze][Qe][Oe][Pe]||(le[ze][Qe][Oe][Pe]={}),le[ze][Qe][Oe][Pe][De]=te})};let cn=null;const ni=async(Y,W=!1)=>{const J=C[Y];let ue={};if(J.global){const Re=await U(J.global);if(Y==="pct"){const ce=Re.split(/\r?\n/).filter(Pe=>Pe.trim()!==""),ze=Wt(ce[0]),Oe=Ie(ze,["Date","Reporting Date","Day"]);if(Oe!==-1){let Pe=null;ce.slice(1).forEach(Qe=>{const De=Wt(Qe),pt=lr(De[Oe]);pt&&(!Pe||pt>Pe)&&(Pe=pt)}),cn=Pe,b(Pe)}}ue=sr(Re,{},G,["Country","Market","Campaign"],W)}const te={};for(const Re of Lr)if(J.countryHB[Re]){const ce=await U(J.countryHB[Re]);te[Re]=sr(ce,{},G,void 0,W)}const Ce={};for(const Re of zl)if(J.alwaysOn[Re]){const ce=await U(J.alwaysOn[Re]);Ce[Re]=sr(ce,{},G,void 0,W)}return{streamGData:ue,mHubParsed:te,alwaysOnParsed:Ce}},Ln=await ni("pct",!1),hn=await ni("abs",!0),rr=(Y,W)=>{const J={...Y};return Object.keys(W).forEach(ue=>{J[ue]?rn.forEach(te=>{Wr.forEach(Ce=>{qn.forEach(Re=>{J[ue].metrics[te][Ce][Re].abs=W[ue].metrics[te][Ce][Re].abs})})}):J[ue]=W[ue]}),J},Be=rr(Ln.streamGData,hn.streamGData);tt(Be,"APAC");const Q={};Lr.forEach(Y=>{const W=rr(Ln.mHubParsed[Y]||{},hn.mHubParsed[Y]||{});Q[Y]=Object.values(W),tt(W,Y)}),zl.forEach(Y=>{const W=rr(Ln.alwaysOnParsed[Y]||{},hn.alwaysOnParsed[Y]||{});tt(W,"India","AlwaysOn",Y)});const ee={};Object.keys(le).forEach(Y=>{ee[Y]={},Object.keys(le[Y]).forEach(W=>{ee[Y][W]={},Object.keys(le[Y][W]).forEach(J=>{ee[Y][W][J]={},Object.keys(le[Y][W][J]).forEach(ue=>{ee[Y][W][J][ue]=Object.values(le[Y][W][J][ue])})})})});const Me=Object.values(Be);w(Me),g(Q),S(ee),e(!0);const Le=wb(cn||void 0);_e("saving");try{const Y={},W=C;W.pct.global&&(Y["pct-global"]=W.pct.global);for(const[ue,te]of Object.entries(W.pct.countryHB))te&&(Y[`pct-market-${ue}`]=te);for(const[ue,te]of Object.entries(W.pct.alwaysOn))te&&(Y[`pct-ao-${ue}`]=te);W.abs.global&&(Y["abs-global"]=W.abs.global);for(const[ue,te]of Object.entries(W.abs.countryHB))te&&(Y[`abs-market-${ue}`]=te);for(const[ue,te]of Object.entries(W.abs.alwaysOn))te&&(Y[`abs-ao-${ue}`]=te);W.shared.campaignInfo&&(Y["shared-meta"]=W.shared.campaignInfo),W.shared.pauseRelive&&(Y["shared-instructions"]=W.shared.pauseRelive),await Tb({weekId:Le,reportingDate:cn,rawFiles:Y}),_e("saved");const J=await i_(new Date().getFullYear());je(J.snapshots||[])}catch(Y){console.error("Memory save failed:",Y),_e("error")}}catch(U){console.error(U)}finally{r(!1)}};re.useEffect(()=>{i_(new Date().getFullYear()).then(U=>je(U.snapshots||[])).catch(()=>{})},[]);const Mn=re.useCallback(async U=>{$(!0);try{const G=await Ib(U);if(!G||Object.keys(G).length===0){console.error("No CSV files found for",U);return}let pe={};if(G["shared-meta"]){const Q=G["shared-meta"].split(/\r?\n/).filter(ee=>ee.trim()!=="");if(Q.length>1){const ee=Wt(Q[0]),Me=Ie(ee,["Campaign","Campaign Name"]),Le=Ie(ee,["Market","Country"]),Y=Ie(ee,["Campaign Tabs","Tabs","Tab"]),W=Ie(ee,["Sub Tab","SubTab","Sub-Tab"]),J=Ie(ee,["Sub Sub Tab","SubSubTab","Sub-Sub-Tab"]),ue=Ie(ee,["Campaign Start Date","Start Date"]),te=Ie(ee,["Campaign End Date","End Date"]),Ce=Ie(ee,["Optimisation End Date","Opt End Date"]);Q.slice(1).forEach(Re=>{const ce=Wt(Re),ze=pn(ce[Me]);ze&&(pe[ze]={market:Ye(ce[Le]),tab:Ye(ce[Y]),subTab:Ye(ce[W]),subSubTab:Ye(ce[J]),campaignStartDate:lr(ce[ue]),campaignEndDate:lr(ce[te]),optimisationEndDate:lr(ce[Ce])})})}}const Ae={};if(G["shared-instructions"]){const Q=G["shared-instructions"].split(/\r?\n/).filter(ee=>ee.trim()!=="");if(Q.length>1){const ee=Wt(Q[0]),Me=Ie(ee,["Campaign","Campaign Name"]),Le=Ie(ee,["Age","Age Group"]),Y=Ie(ee,["Gender"]),W=Ie(ee,["Instruction","Action"]),J=Ie(ee,["Launch Date","Date"]);Q.slice(1).forEach(ue=>{const te=Wt(ue),Ce=pn(te[Me]);if(!Ce)return;const Re=(te[Le]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),ce=(te[Y]||"total").toLowerCase().trim(),ze=(te[W]||"").toUpperCase().trim(),Oe=Ye(te[J]);Ae[Ce]||(Ae[Ce]={}),Ae[Ce][ce]||(Ae[Ce][ce]={}),Ae[Ce][ce][Re]={instruction:ze,launchDate:Oe}})}}const we={},le=(Q,ee,Me=null,Le=null)=>{Object.values(Q).forEach(Y=>{const W=Y.meta||{};let J=Me||Ye(W.tab)||"Uncategorized";const ue=El.find(Pe=>ar(Pe.id,J)||ar(Pe.label,J)),te=ue?ue.id:J,Ce=Le||Ye(W.subTab)||"Generic",Re=Ye(W.subSubTab)||"Default",ce=W.market||ee,ze=pn(Y.country),Oe=Ae[pn(Y.country)];Oe&&rn.forEach(Pe=>{Wr.forEach(Qe=>{qn.forEach(De=>{var Fn;const pt=De.replace(/[^a-z0-9+]/g,""),ut=pt==="1824"||pt==="2534"?"1834":null,dn=[[Qe,pt],ut?[Qe,ut]:null,[Qe,"total"],["total",pt],ut?["total",ut]:null,["total","total"]].filter(Boolean);let Ut=null;for(const[nt,ri]of dn){const jt=(Fn=Oe[nt])==null?void 0:Fn[ri];if(jt&&jt.instruction==="PAUSE"&&jt.launchDate&&jt.launchDate.trim()!==""){Ut=jt;break}}Ut&&(Y.metrics[Pe][Qe][De].isPaused=!0,Y.metrics[Pe][Qe][De].launchDate=Ut.launchDate)})})}),we[te]||(we[te]={}),we[te][ce]||(we[te][ce]={}),we[te][ce][Ce]||(we[te][ce][Ce]={}),we[te][ce][Ce][Re]||(we[te][ce][Ce][Re]={}),we[te][ce][Ce][Re][ze]=Y})},tt=(Q,ee)=>{const Me={...Q};return Object.keys(ee).forEach(Le=>{Me[Le]?rn.forEach(Y=>{Wr.forEach(W=>{qn.forEach(J=>{Me[Le].metrics[Y][W][J].abs=ee[Le].metrics[Y][W][J].abs})})}):Me[Le]=ee[Le]}),Me},cn=G["pct-global"]?sr(G["pct-global"],{},pe,["Country","Market","Campaign"],!1):{},ni=G["abs-global"]?sr(G["abs-global"],{},pe,["Country","Market","Campaign"],!0):{},Ln=tt(cn,ni);le(Ln,"APAC");let hn=null;if(G["pct-global"]){const Q=G["pct-global"].split(/\r?\n/).filter(ee=>ee.trim()!=="");if(Q.length>1){const ee=Wt(Q[0]),Me=Ie(ee,["Date","Reporting Date","Day"]);Me!==-1&&Q.slice(1).forEach(Le=>{const Y=Wt(Le),W=lr(Y[Me]);W&&(!hn||W>hn)&&(hn=W)})}}const rr={};Lr.forEach(Q=>{const ee=G[`pct-market-${Q}`]?sr(G[`pct-market-${Q}`],{},pe,void 0,!1):{},Me=G[`abs-market-${Q}`]?sr(G[`abs-market-${Q}`],{},pe,void 0,!0):{},Le=tt(ee,Me);rr[Q]=Object.values(Le),le(Le,Q)}),zl.forEach(Q=>{const ee=G[`pct-ao-${Q}`]?sr(G[`pct-ao-${Q}`],{},pe,void 0,!1):{},Me=G[`abs-ao-${Q}`]?sr(G[`abs-ao-${Q}`],{},pe,void 0,!0):{},Le=tt(ee,Me);le(Le,"India","AlwaysOn",Q)});const Be={};Object.keys(we).forEach(Q=>{Be[Q]={},Object.keys(we[Q]).forEach(ee=>{Be[Q][ee]={},Object.keys(we[Q][ee]).forEach(Me=>{Be[Q][ee][Me]={},Object.keys(we[Q][ee][Me]).forEach(Le=>{Be[Q][ee][Me][Le]=Object.values(we[Q][ee][Me][Le])})})})}),w(Object.values(Ln)),g(rr),S(Be),b(hn),e(!0),i("OKR"),ke(Q=>Q.find(ee=>ee.weekId===U)?Q:[...Q,{weekId:U}])}catch(G){console.error("Failed to load snapshot:",G)}finally{$(!1)}},[]);re.useEffect(()=>{if(s&&T[s]){const U=O[s]||"India",G=ve(s,U);if(G.length>0){const pe=E[s],Ae=G.includes(pe)?pe:G[0];pe!==Ae&&k(le=>({...le,[s]:Ae}));const we=fe(s,U,Ae);if(we.length>0){const le=D[s],tt=we.includes(le)?le:we[0];le!==tt&&L(cn=>({...cn,[s]:tt}))}else L(le=>({...le,[s]:"Default"}))}else k(pe=>({...pe,[s]:"Generic"})),L(pe=>({...pe,[s]:"Default"}))}},[s,O,T,ve,fe,E,D]);const en=(U,G,pe,Ae)=>{I(we=>{const le=G==="countryHB"||G==="alwaysOn",tt={...we[U]};return le?tt[G]={...tt[G],[Ae]:pe}:tt[G]=pe,{...we,[U]:tt}})};return t?_.jsxs("div",{className:"flex h-screen bg-black text-[#e0e0e0] overflow-hidden",children:[_.jsxs("aside",{className:`${o?"w-72":"w-20"} transition-all duration-300 bg-[#1a1a1a] border-r border-[#3a3a3a] flex flex-col z-50`,children:[_.jsxs("div",{className:"p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#3a3a3a]",children:[_.jsx("div",{className:"bg-[#FF0000] p-2 rounded-lg flex items-center justify-center",children:_.jsx(Hv,{className:"w-5 h-5 text-white"})}),o&&_.jsxs("div",{children:[_.jsxs("h2",{className:"text-lg font-bold tracking-tight",children:["BRAIN ",_.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),_.jsx("p",{className:"text-[8px] font-bold uppercase text-[#808080] tracking-widest",children:"APAC Shorts"})]})]}),_.jsxs("nav",{className:"flex-1 px-4 space-y-1 overflow-y-auto",children:[Ab.map(U=>_.jsxs("button",{onClick:()=>{U.id==="Upload"?e(!1):i(U.id)},className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all group relative cursor-pointer ${s===U.id?"bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,children:[_.jsx(U.icon,{className:"w-5 h-5 shrink-0"}),o&&_.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:U.label})]},U.id)),_.jsxs("button",{onClick:()=>p(!f),className:"w-full flex items-center justify-between p-3 rounded-lg text-[#808080] hover:text-white cursor-pointer border border-transparent",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx(ZS,{className:"w-5 h-5 shrink-0"}),o&&_.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:"Campaign Deepdive"})]}),o&&(f?_.jsx(OS,{className:"w-4 h-4"}):_.jsx(NS,{className:"w-4 h-4"}))]}),f&&o&&_.jsx("div",{className:"pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300",children:El.map(U=>_.jsxs("button",{onClick:()=>i(U.id),className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${s===U.id?"bg-[#FF0000]/10 text-[#FF0000]":"text-[#555] hover:bg-white/5 hover:text-white"}`,children:[_.jsx(U.icon,{className:"w-4 h-4 shrink-0"}),_.jsx("span",{className:"text-[10px] font-bold uppercase",children:U.label})]},U.id))}),o&&_.jsxs("div",{className:"mt-6 pt-4 border-t border-[#3a3a3a]",children:[_.jsxs("div",{className:"flex items-center gap-2 px-3 mb-3",children:[_.jsx(Gv,{className:"w-4 h-4 text-[#808080]"}),_.jsx("span",{className:"text-[10px] font-bold uppercase text-[#808080] tracking-wider",children:"Memory"}),We==="saving"&&_.jsx(oA,{className:"w-3 h-3 text-amber-400 animate-spin ml-auto"}),We==="saved"&&_.jsx(FS,{className:"w-3 h-3 text-emerald-400 ml-auto"}),We==="error"&&_.jsx(MS,{className:"w-3 h-3 text-red-400 ml-auto"})]}),_.jsx("div",{className:"space-y-1 max-h-[200px] overflow-y-auto px-1",children:xe.length===0?_.jsx("p",{className:"text-[9px] text-[#555] px-3 py-2",children:"No snapshots stored yet"}):xe.map(U=>_.jsxs("button",{onClick:()=>Mn(U.weekId),disabled:j,className:`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-all cursor-pointer ${Z.some(G=>G.weekId===U.weekId)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,children:[_.jsx(qv,{className:"w-3 h-3 shrink-0"}),_.jsxs("div",{className:"flex-1 min-w-0",children:[_.jsx("span",{className:"text-[10px] font-bold block",children:U.weekId}),_.jsx("span",{className:"text-[8px] opacity-60",children:U.reportingDate||"No date"})]}),_.jsx("span",{className:"text-[8px] opacity-50",children:U.globalCount||0})]},U.weekId))})]})]})]}),_.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[_.jsxs("header",{className:"px-8 py-5 border-b border-[#3a3a3a] flex items-center justify-between bg-[#1a1a1a]",children:[_.jsx("div",{className:"flex items-center gap-4",children:_.jsx("h4",{className:"text-sm font-bold text-white uppercase",children:s})}),_.jsxs("button",{className:"bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[_.jsx(QS,{className:"w-4 h-4 mr-2 inline"})," Export Hub"]})]}),_.jsxs("main",{className:"flex-1 overflow-auto p-10 relative",children:[s==="OKR"&&_.jsx(bb,{globalData:B,regionalData:v,latestDate:P}),(s==="Global Hub"||s==="Market Hub")&&_.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[_.jsx(l_,{activeMetrics:u,toggleMetric:U=>h(G=>G.includes(U)?G.length>1?G.filter(pe=>pe!==U):G:[...G,U]),handleAllToggle:()=>h(U=>U.length===rn.length?["DAU-SCT"]:[...rn])}),s==="Market Hub"&&_.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[_.jsx(Mg,{className:"w-6 h-6 text-red-600"}),_.jsx("select",{value:m,onChange:U=>x(U.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:Lr.map(U=>_.jsx("option",{value:U,className:"bg-neutral-900",children:U},U))})]}),_.jsx(u_,{data:s==="Global Hub"?B:v[m]||[],activeMetrics:u,isCampaignView:s==="Market Hub"})]}),(El.some(U=>U.id===s)||T[s])&&s!=="OKR"&&_.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[_.jsx(l_,{activeMetrics:u,toggleMetric:U=>h(G=>G.includes(U)?G.length>1?G.filter(pe=>pe!==U):G:[...G,U]),handleAllToggle:()=>h(U=>U.length===rn.length?["DAU-SCT"]:[...rn])}),_.jsxs("div",{className:"flex flex-col gap-6",children:[_.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[_.jsx(Mg,{className:"w-6 h-6 text-red-600"}),_.jsx("select",{value:O[s],onChange:U=>A(G=>({...G,[s]:U.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:Lr.map(U=>_.jsx("option",{value:U,className:"bg-neutral-900",children:U},U))})]}),ve(s,O[s]).length>0&&_.jsx("div",{className:"flex gap-2 p-1 bg-[#1a1a1a] rounded-lg w-fit border border-[#3a3a3a] overflow-x-auto max-w-full",children:ve(s,O[s]).map(U=>_.jsx("button",{onClick:()=>k(G=>({...G,[s]:U})),className:`px-5 py-2 rounded-md text-[9px] font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${E[s]===U?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:U},U))}),fe(s,O[s],E[s]).length>0&&_.jsx("div",{className:"flex gap-2 p-1 bg-[#1a1a1a] rounded-lg w-fit border border-[#3a3a3a] overflow-x-auto max-w-full",children:fe(s,O[s],E[s]).map(U=>_.jsx("button",{onClick:()=>L(G=>({...G,[s]:U})),className:`px-4 py-1.5 rounded-md text-[8px] font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${D[s]===U?"bg-white text-black":"text-[#555] hover:text-white"}`,children:U},U))})]}),_.jsx(u_,{data:(()=>{var we,le;const U=O[s],G=E[s]||"Generic",pe=D[s]||"Default",Ae=(le=(we=T[s])==null?void 0:we[U])==null?void 0:le[G];return pe==="Default"||!pe?Ae?Object.values(Ae).flat():[]:(Ae==null?void 0:Ae[pe])||[]})(),activeMetrics:u,isCampaignView:!0})]})]})]}),_.jsx("style",{children:`
        body { background-color: #000000; color: #e0e0e0; margin: 0; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 10px; }
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; padding-right: 2rem; }
      `})]}):_.jsx(Nb,{uploadedFiles:C,handleFileUpload:en,startAnalysis:Ee,isAnalyzing:n,memoryIndex:xe,loadHistoricalWeek:Mn,isLoadingMemory:j,historicalSnapshots:Z})};function eE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ob=eE,tE=new Ra("auth","Firebase",eE());/**
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
 */const Pu=new Ff("@firebase/auth");function Vb(t,...e){Pu.logLevel<=me.WARN&&Pu.warn(`Auth (${Js}): ${t}`,...e)}function $l(t,...e){Pu.logLevel<=me.ERROR&&Pu.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function tr(t,...e){throw bp(t,...e)}function Dn(t,...e){return bp(t,...e)}function Pp(t,e,n){const r={...Ob(),[e]:n};return new Ra("auth","Firebase",r).create(e,{appName:t.name})}function Ms(t){return Pp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mb(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tr(t,"argument-error"),Pp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tE.create(t,...e)}function se(t,e,...n){if(!t)throw bp(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $l(e),new Error(e)}function Ir(t,e){t||dr(e)}/**
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
 */function Fd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Lb(){return h_()==="http:"||h_()==="https:"}function h_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Fb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lb()||ex()||"connection"in navigator)?navigator.onLine:!0}function Ub(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class La{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ir(n>e,"Short delay should be less than long delay!"),this.isMobile=JA()||tx()}get(){return Fb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Np(t,e){Ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zb=new La(3e4,6e4);function Dp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function so(t,e,n,r,s={}){return rE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return ZA()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&vs(t.emulatorConfig.host)&&(h.credentials="include"),nE.fetch()(await sE(t,t.config.apiHost,n,l),h)})}async function rE(t,e,n){t._canInitEmulator=!1;const r={...jb,...e};try{const s=new Hb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Tl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Tl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pp(t,f,h);tr(t,f)}}catch(s){if(s instanceof nr)throw s;tr(t,"network-request-failed",{message:String(s)})}}async function $b(t,e,n,r,s={}){const i=await so(t,e,n,r,s);return"mfaPendingCredential"in i&&tr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function sE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Np(t.config,s):`${t.config.apiScheme}://${s}`;return Bb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Hb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),zb.get())})}}function Tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Dn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function qb(t,e){return so(t,"POST","/v1/accounts:delete",e)}async function bu(t,e){return so(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gb(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=Op(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qo(yh(s.auth_time)),issuedAtTime:Qo(yh(s.iat)),expirationTime:Qo(yh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yh(t){return Number(t)*1e3}function Op(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $l("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xv(n);return s?JSON.parse(s):($l("Failed to decode base64 JWT payload"),null)}catch(s){return $l("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function d_(t){const e=Op(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&Wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Kb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qo(this.lastLoginAt),this.creationTime=Qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ia(t,bu(e,{idToken:n}));se(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?iE(s.providerUserInfo):[],o=Yb(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Qb(t){const e=wt(t);await Nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function iE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Jb(t,e){const n=await rE(t,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await sE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&vs(t.emulatorConfig.host)&&(u.credentials="include"),nE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xb(t,e){return so(t,"POST","/v2/accounts:revokeToken",Dp(t,e))}/**
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
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):d_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=d_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Jb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Oi;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
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
 */function Or(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Kb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ud(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ia(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gb(this,e)}reload(){return Qb(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Ms(this.auth));const e=await this.getIdToken();return await Ia(this,qb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:x,providerData:P,stsTokenManager:b}=n;se(p&&b,e,"internal-error");const O=Oi.fromJSON(this.name,b);se(typeof p=="string",e,"internal-error"),Or(r,e.name),Or(s,e.name),se(typeof m=="boolean",e,"internal-error"),se(typeof x=="boolean",e,"internal-error"),Or(i,e.name),Or(o,e.name),Or(l,e.name),Or(u,e.name),Or(h,e.name),Or(f,e.name);const A=new Rn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:x,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:O,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(A.providerData=P.map(E=>({...E}))),u&&(A._redirectEventId=u),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new Oi;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?iE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Oi;l.updateFromIdToken(r);const u=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const f_=new Map;function fr(t){Ir(t instanceof Function,"Expected a class definition");let e=f_.get(t);return e?(Ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,f_.set(t,e),e)}/**
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
 */class oE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oE.type="NONE";const p_=oE;/**
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
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bu(this.auth,{idToken:e}).catch(()=>{});return n?Rn._fromGetAccountInfoResponse(this.auth,n,e):null}return Rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(fr(p_),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||fr(p_);const o=Hl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await bu(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Rn._fromGetAccountInfoResponse(e,m,f)}else p=Rn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Vi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Vi(i,e,r))}}/**
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
 */function m_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dE(e))return"Blackberry";if(fE(e))return"Webos";if(lE(e))return"Safari";if((e.includes("chrome/")||uE(e))&&!e.includes("edge/"))return"Chrome";if(hE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aE(t=Ft()){return/firefox\//i.test(t)}function lE(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uE(t=Ft()){return/crios\//i.test(t)}function cE(t=Ft()){return/iemobile/i.test(t)}function hE(t=Ft()){return/android/i.test(t)}function dE(t=Ft()){return/blackberry/i.test(t)}function fE(t=Ft()){return/webos/i.test(t)}function Vp(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zb(t=Ft()){var e;return Vp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function eN(){return nx()&&document.documentMode===10}function pE(t=Ft()){return Vp(t)||hE(t)||fE(t)||dE(t)||/windows phone/i.test(t)||cE(t)}/**
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
 */function mE(t,e=[]){let n;switch(t){case"Browser":n=m_(Ft());break;case"Worker":n=`${m_(Ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${r}`}/**
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
 */class tN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nN(t,e={}){return so(t,"GET","/v2/passwordPolicy",Dp(t,e))}/**
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
 */const rN=6;class sN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??rN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class iN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new g_(this),this.idTokenSubscription=new g_(this),this.beforeStateQueue=new tN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bu(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ub()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Ms(this));const n=e?wt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nN(this),n=new sN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Vb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function pc(t){return wt(t)}class g_{constructor(e){this.auth=e,this.observer=null,this.addObserver=cx(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oN(t){Mp=t}function aN(t){return Mp.loadJS(t)}function lN(){return Mp.gapiScript}function uN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cN(t,e){const n=Zu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zs(i,e??{}))return s;tr(s,"already-initialized")}return n.initialize({options:e})}function hN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dN(t,e,n){const r=pc(t);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gE(e),{host:o,port:l}=fN(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(zs(h,r.config.emulator)&&zs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,vs(o)?(Mf(`${i}//${o}${u}`),Lf("Auth",!0)):pN()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fN(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:y_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:y_(o)}}}function y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,n){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}/**
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
 */async function Mi(t,e){return $b(t,"POST","/v1/accounts:signInWithIdp",Dp(t,e))}/**
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
 */const mN="http://localhost";class Ks extends yE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Ks(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:mN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pa(n)}return e}}/**
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
 */class Lp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fa extends Lp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Br extends Fa{constructor(){super("facebook.com")}static credential(e){return Ks._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
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
 */class ur extends Fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ks._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class zr extends Fa{constructor(){super("github.com")}static credential(e){return Ks._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
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
 */class $r extends Fa{constructor(){super("twitter.com")}static credential(e,n){return Ks._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */class Qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=__(r);return new Qi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=__(r);return new Qi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function __(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Du extends nr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Du.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Du(e,n,r,s)}}function _E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Du._fromErrorAndOperation(t,i,e,r):i})}async function gN(t,e,n=!1){const r=await Ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qi._forOperation(t,"link",r)}/**
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
 */async function yN(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject(Ms(r));const s="reauthenticate";try{const i=await Ia(t,_E(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=Op(i.idToken);se(o,r,"internal-error");const{sub:l}=o;return se(t.uid===l,r,"user-mismatch"),Qi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tr(r,"user-mismatch"),i}}/**
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
 */async function _N(t,e,n=!1){if(yn(t.app))return Promise.reject(Ms(t));const r="signIn",s=await _E(t,r,e),i=await Qi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function vN(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function wN(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function EN(t,e,n,r){return wt(t).onAuthStateChanged(e,n,r)}function TN(t){return wt(t).signOut()}const Ou="__sak";/**
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
 */class vE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ou,"1"),this.storage.removeItem(Ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IN=1e3,SN=10;class wE extends vE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wE.type="LOCAL";const AN=wE;/**
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
 */class EE extends vE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}EE.type="SESSION";const TE=EE;/**
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
 */function xN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await xN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mc.receivers=[];/**
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
 */class kN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Fp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zn(){return window}function CN(t){Zn().location.href=t}/**
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
 */function IE(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function RN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bN(){return IE()?self:null}/**
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
 */const SE="firebaseLocalStorageDb",NN=1,Vu="firebaseLocalStorage",AE="fbase_key";class Ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gc(t,e){return t.transaction([Vu],e?"readwrite":"readonly").objectStore(Vu)}function DN(){const t=indexedDB.deleteDatabase(SE);return new Ua(t).toPromise()}function jd(){const t=indexedDB.open(SE,NN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vu,{keyPath:AE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vu)?e(r):(r.close(),await DN(),e(await jd()))})})}async function v_(t,e,n){const r=gc(t,!0).put({[AE]:e,value:n});return new Ua(r).toPromise()}async function ON(t,e){const n=gc(t,!1).get(e),r=await new Ua(n).toPromise();return r===void 0?null:r.value}function w_(t,e){const n=gc(t,!0).delete(e);return new Ua(n).toPromise()}const VN=800,MN=3;class xE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mc._getInstance(bN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await RN(),!this.activeServiceWorker)return;this.sender=new kN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await v_(e,Ou,"1"),await w_(e,Ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ON(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gc(s,!1).getAll();return new Ua(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xE.type="LOCAL";const LN=xE;new La(3e4,6e4);/**
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
 */function kE(t,e){return e?fr(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Up extends yE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FN(t){return _N(t.auth,new Up(t),t.bypassAuthState)}function UN(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),yN(n,new Up(t),t.bypassAuthState)}async function jN(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),gN(n,new Up(t),t.bypassAuthState)}/**
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
 */class CE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FN;case"linkViaPopup":case"linkViaRedirect":return jN;case"reauthViaPopup":case"reauthViaRedirect":return UN;default:tr(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BN=new La(2e3,1e4);async function zN(t,e,n){if(yn(t.app))return Promise.reject(Dn(t,"operation-not-supported-in-this-environment"));const r=pc(t);Mb(t,e,Lp);const s=kE(r,n);return new Ns(r,"signInViaPopup",e,s).executeNotNull()}class Ns extends CE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BN.get())};e()}}Ns.currentPopupAction=null;/**
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
 */const $N="pendingRedirect",ql=new Map;class HN extends CE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ql.get(this.auth._key());if(!e){try{const r=await qN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ql.set(this.auth._key(),e)}return this.bypassAuthState||ql.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qN(t,e){const n=KN(e),r=WN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function GN(t,e){ql.set(t._key(),e)}function WN(t){return fr(t._redirectPersistence)}function KN(t){return Hl($N,t.config.apiKey,t.name)}async function QN(t,e,n=!1){if(yn(t.app))return Promise.reject(Ms(t));const r=pc(t),s=kE(r,e),o=await new HN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YN=10*60*1e3;class JN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RE(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YN&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RE(t);default:return!1}}/**
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
 */async function ZN(t,e={}){return so(t,"GET","/v1/projects",e)}/**
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
 */const e4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t4=/^https?/;async function n4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZN(t);for(const n of e)try{if(r4(n))return}catch{}tr(t,"unauthorized-domain")}function r4(t){const e=Fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!t4.test(n))return!1;if(e4.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const s4=new La(3e4,6e4);function T_(){const t=Zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function i4(t){return new Promise((e,n)=>{var s,i,o;function r(){T_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T_(),n(Dn(t,"network-request-failed"))},timeout:s4.get()})}if((i=(s=Zn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Zn().gapi)!=null&&o.load)r();else{const l=uN("iframefcb");return Zn()[l]=()=>{gapi.load?r():n(Dn(t,"network-request-failed"))},aN(`${lN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Gl=null,e})}let Gl=null;function o4(t){return Gl=Gl||i4(t),Gl}/**
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
 */const a4=new La(5e3,15e3),l4="__/auth/iframe",u4="emulator/auth/iframe",c4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d4(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Np(e,u4):`https://${t.config.authDomain}/${l4}`,r={apiKey:e.apiKey,appName:t.name,v:Js},s=h4.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pa(r).slice(1)}`}async function f4(t){const e=await o4(t),n=Zn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:d4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),l=Zn().setTimeout(()=>{i(o)},a4.get());function u(){Zn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const p4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m4=500,g4=600,y4="_blank",_4="http://localhost";class I_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v4(t,e,n,r=m4,s=g4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...p4,width:r.toString(),height:s.toString(),top:i,left:o},h=Ft().toLowerCase();n&&(l=uE(h)?y4:n),aE(h)&&(e=e||_4,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[x,P])=>`${m}${x}=${P},`,"");if(Zb(h)&&l!=="_self")return w4(e||"",l),new I_(null);const p=window.open(e||"",l,f);se(p,t,"popup-blocked");try{p.focus()}catch{}return new I_(p)}function w4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const E4="__/auth/handler",T4="emulator/auth/handler",I4=encodeURIComponent("fac");async function S_(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Js,eventId:s};if(e instanceof Lp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ux(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Fa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${I4}=${encodeURIComponent(u)}`:"";return`${S4(t)}?${Pa(l).slice(1)}${h}`}function S4({config:t}){return t.emulator?Np(t,T4):`https://${t.authDomain}/${E4}`}/**
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
 */const _h="webStorageSupport";class A4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TE,this._completeRedirectFn=QN,this._overrideRedirectResult=GN}async _openPopup(e,n,r,s){var o;Ir((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await S_(e,n,r,Fd(),s);return v4(e,i,Fp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await S_(e,n,r,Fd(),s);return CN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await f4(e),r=new JN(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[_h];i!==void 0&&n(!!i),tr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pE()||lE()||Vp()}}const x4=A4;var A_="@firebase/auth",x_="1.12.1";/**
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
 */class k4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function C4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R4(t){$s(new us("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mE(t)},h=new iN(r,s,i,u);return hN(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$s(new us("auth-internal",e=>{const n=pc(e.getProvider("auth").getImmediate());return(r=>new k4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(A_,x_,C4(t)),Qn(A_,x_,"esm2020")}/**
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
 */const P4=5*60,b4=nw("authIdTokenMaxAge")||P4;let k_=null;const N4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>b4)return;const s=n==null?void 0:n.token;k_!==s&&(k_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function D4(t=jf()){const e=Zu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cN(t,{popupRedirectResolver:x4,persistence:[LN,AN,TE]}),r=nw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=N4(i.toString());wN(n,o,()=>o(n.currentUser)),vN(n,l=>o(l))}}const s=Zv("auth");return s&&dN(n,`http://${s}`),n}function O4(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}oN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",O4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R4("Browser");const vh=D4(Cp),V4=new ur;function M4(t){return t?t==="ivanho.wz@gmail.com"?!0:t.endsWith("@google.com"):!1}const C_={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},R_={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},L4={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},F4={color:"#f87171",marginTop:16,fontSize:14},P_={color:"#737373",fontSize:13,marginTop:8};function U4({children:t}){const[e,n]=re.useState(null),[r,s]=re.useState(!0),[i,o]=re.useState(null),[l,u]=re.useState(!1);re.useEffect(()=>EN(vh,f=>{f&&!M4(f.email)?(TN(vh),n(null),o(`${f.email} is not authorized.`)):(n(f),o(null)),s(!1)}),[]);const h=async()=>{u(!0),o(null);try{await zN(vh,V4)}catch(f){o((f==null?void 0:f.message)||"Sign-in failed.")}finally{u(!1)}};return r?_.jsx("div",{style:C_,children:_.jsx("div",{style:R_,children:_.jsx("p",{style:P_,children:"Loading…"})})}):e?t:_.jsx("div",{style:C_,children:_.jsxs("div",{style:R_,children:[_.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Brain"}),_.jsx("p",{style:P_,children:"Sign in to continue"}),_.jsx("button",{style:L4,onClick:h,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&_.jsx("p",{style:F4,children:i})]})})}wh.createRoot(document.getElementById("root")).render(_.jsx(ai.StrictMode,{children:_.jsx(U4,{children:_.jsx(Db,{})})}));
//# sourceMappingURL=index-HByME1-o.js.map
