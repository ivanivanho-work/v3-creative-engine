(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Ab=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function C1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h_={exports:{}},Uu={},d_={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aa=Symbol.for("react.element"),R1=Symbol.for("react.portal"),P1=Symbol.for("react.fragment"),N1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),D1=Symbol.for("react.provider"),O1=Symbol.for("react.context"),V1=Symbol.for("react.forward_ref"),M1=Symbol.for("react.suspense"),L1=Symbol.for("react.memo"),j1=Symbol.for("react.lazy"),dm=Symbol.iterator;function U1(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var f_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p_=Object.assign,m_={};function to(t,e,n){this.props=t,this.context=e,this.refs=m_,this.updater=n||f_}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g_(){}g_.prototype=to.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=m_,this.updater=n||f_}var Hd=Bd.prototype=new g_;Hd.constructor=Bd;p_(Hd,to.prototype);Hd.isPureReactComponent=!0;var fm=Array.isArray,y_=Object.prototype.hasOwnProperty,qd={current:null},__={key:!0,ref:!0,__self:!0,__source:!0};function v_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)y_.call(e,r)&&!__.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Aa,type:t,key:i,ref:o,props:s,_owner:qd.current}}function F1(t,e){return{$$typeof:Aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Aa}function $1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$1(""+t.key):e.toString(36)}function xl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Aa:case R1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Oc(o,0):r,fm(s)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),xl(s,e,n,"",function(h){return h})):s!=null&&(Wd(s)&&(s=F1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(pm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",fm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Oc(i,l);o+=xl(i,e,n,u,s)}else if(u=U1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Oc(i,l++),o+=xl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var r=[],s=0;return xl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},Al={transition:null},B1={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:Al,ReactCurrentOwner:qd};function w_(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_e.Component=to;_e.Fragment=P1;_e.Profiler=b1;_e.PureComponent=Bd;_e.StrictMode=N1;_e.Suspense=M1;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;_e.act=w_;_e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=p_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=qd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)y_.call(e,u)&&!__.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Aa,type:t.type,key:s,ref:i,props:r,_owner:o}};_e.createContext=function(t){return t={$$typeof:O1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:D1,_context:t},t.Consumer=t};_e.createElement=v_;_e.createFactory=function(t){var e=v_.bind(null,t);return e.type=t,e};_e.createRef=function(){return{current:null}};_e.forwardRef=function(t){return{$$typeof:V1,render:t}};_e.isValidElement=Wd;_e.lazy=function(t){return{$$typeof:j1,_payload:{_status:-1,_result:t},_init:z1}};_e.memo=function(t,e){return{$$typeof:L1,type:t,compare:e===void 0?null:e}};_e.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};_e.unstable_act=w_;_e.useCallback=function(t,e){return en.current.useCallback(t,e)};_e.useContext=function(t){return en.current.useContext(t)};_e.useDebugValue=function(){};_e.useDeferredValue=function(t){return en.current.useDeferredValue(t)};_e.useEffect=function(t,e){return en.current.useEffect(t,e)};_e.useId=function(){return en.current.useId()};_e.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};_e.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};_e.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};_e.useMemo=function(t,e){return en.current.useMemo(t,e)};_e.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};_e.useRef=function(t){return en.current.useRef(t)};_e.useState=function(t){return en.current.useState(t)};_e.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};_e.useTransition=function(){return en.current.useTransition()};_e.version="18.3.1";d_.exports=_e;var Z=d_.exports;const yr=C1(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1=Z,q1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),G1=Object.prototype.hasOwnProperty,K1=H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q1={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)G1.call(e,r)&&!Q1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:q1,type:t,key:i,ref:o,props:s,_owner:K1.current}}Uu.Fragment=W1;Uu.jsx=E_;Uu.jsxs=E_;h_.exports=Uu;var m=h_.exports,Eh={},T_={exports:{}},_n={},I_={exports:{}},S_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var $=B.length;B.push(Y);e:for(;0<$;){var ie=$-1>>>1,ce=B[ie];if(0<s(ce,Y))B[ie]=Y,B[$]=ce,$=ie;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],$=B.pop();if($!==Y){B[0]=$;e:for(var ie=0,ce=B.length,Ke=ce>>>1;ie<Ke;){var ut=2*(ie+1)-1,Ft=B[ut],gt=ut+1,Tt=B[gt];if(0>s(Ft,$))gt<ce&&0>s(Tt,Ft)?(B[ie]=Tt,B[gt]=$,ie=gt):(B[ie]=Ft,B[ut]=$,ie=ut);else if(gt<ce&&0>s(Tt,$))B[ie]=Tt,B[gt]=$,ie=gt;else break e}}return Y}function s(B,Y){var $=B.sortIndex-Y.sortIndex;return $!==0?$:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,v=3,k=!1,P=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=B)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function b(B){if(N=!1,A(B),!P)if(n(u)!==null)P=!0,Ut(M);else{var Y=n(h);Y!==null&&Ee(b,Y.startTime-B)}}function M(B,Y){P=!1,N&&(N=!1,x(y),y=-1),k=!0;var $=v;try{for(A(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||B&&!I());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,v=p.priorityLevel;var ce=ie(p.expirationTime<=Y);Y=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),A(Y)}else r(u);p=n(u)}if(p!==null)var Ke=!0;else{var ut=n(h);ut!==null&&Ee(b,ut.startTime-Y),Ke=!1}return Ke}finally{p=null,v=$,k=!1}}var U=!1,g=null,y=-1,w=5,S=-1;function I(){return!(t.unstable_now()-S<w)}function C(){if(g!==null){var B=t.unstable_now();S=B;var Y=!0;try{Y=g(!0,B)}finally{Y?E():(U=!1,g=null)}}else U=!1}var E;if(typeof T=="function")E=function(){T(C)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ae=ne.port2;ne.port1.onmessage=C,E=function(){ae.postMessage(null)}}else E=function(){O(C,0)};function Ut(B){g=B,U||(U=!0,E())}function Ee(B,Y){y=O(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||k||(P=!0,Ut(M))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var $=v;v=Y;try{return B()}finally{v=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=v;v=B;try{return Y()}finally{v=$}},t.unstable_scheduleCallback=function(B,Y,$){var ie=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ie+$:ie):$=ie,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=$+ce,B={id:f++,callback:Y,priorityLevel:B,startTime:$,expirationTime:ce,sortIndex:-1},$>ie?(B.sortIndex=$,e(h,B),n(u)===null&&B===n(h)&&(N?(x(y),y=-1):N=!0,Ee(b,$-ie))):(B.sortIndex=ce,e(u,B),P||k||(P=!0,Ut(M))),B},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(B){var Y=v;return function(){var $=v;v=Y;try{return B.apply(this,arguments)}finally{v=$}}}})(S_);I_.exports=S_;var J1=I_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1=Z,yn=J1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x_=new Set,Zo={};function ni(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(Zo[t]=e,t=0;t<e.length;t++)x_.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Th=Object.prototype.hasOwnProperty,X1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function Z1(t){return Th.call(gm,t)?!0:Th.call(mm,t)?!1:X1.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function eT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tT(t,e,n,r){if(e===null||typeof e>"u"||eT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);Lt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);Lt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Kd);Lt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,r){var s=Lt.hasOwnProperty(e)?Lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tT(e,n,s,r)&&(n=null),r||s===null?Z1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vr=Y1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),vi=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Ih=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),k_=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),xh=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),C_=Symbol.for("react.offscreen"),ym=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var Xe=Object.assign,Vc;function No(t){if(Vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vc=e&&e[1]||""}return`
`+Vc+t}var Mc=!1;function Lc(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function nT(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wi:return"Fragment";case vi:return"Portal";case Ih:return"Profiler";case Jd:return"StrictMode";case Sh:return"Suspense";case xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k_:return(t.displayName||"Context")+".Consumer";case A_:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function rT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ps(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sT(t){var e=R_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=sT(t))}function P_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=R_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kh(t,e){var n=e.checked;return Xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _m(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ps(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N_(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function Ch(t,e){N_(t,e);var n=ps(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rh(t,e.type,ps(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rh(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bo=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ps(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ph(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(bo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ps(n)}}function b_(t,e){var n=ps(e.value),r=ps(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,O_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iT=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(t){iT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Uo[e]=Uo[t]})});function V_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Uo.hasOwnProperty(t)&&Uo[t]?(""+e).trim():e+"px"}function M_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=V_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var oT=Xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bh(t,e){if(e){if(oT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vh=null,bi=null,Di=null;function Tm(t){if(t=Ra(t)){if(typeof Vh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Hu(e),Vh(t.stateNode,t.type,e))}}function L_(t){bi?Di?Di.push(t):Di=[t]:bi=t}function j_(){if(bi){var t=bi,e=Di;if(Di=bi=null,Tm(t),e)for(t=0;t<e.length;t++)Tm(e[t])}}function U_(t,e){return t(e)}function F_(){}var jc=!1;function $_(t,e,n){if(jc)return t(e,n);jc=!0;try{return U_(t,e,n)}finally{jc=!1,(bi!==null||Di!==null)&&(F_(),j_())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var r=Hu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Mh=!1;if(kr)try{var To={};Object.defineProperty(To,"passive",{get:function(){Mh=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Mh=!1}function aT(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Fo=!1,Ql=null,Jl=!1,Lh=null,lT={onError:function(t){Fo=!0,Ql=t}};function uT(t,e,n,r,s,i,o,l,u){Fo=!1,Ql=null,aT.apply(lT,arguments)}function cT(t,e,n,r,s,i,o,l,u){if(uT.apply(this,arguments),Fo){if(Fo){var h=Ql;Fo=!1,Ql=null}else throw Error(F(198));Jl||(Jl=!0,Lh=h)}}function ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function z_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(ri(t)!==t)throw Error(F(188))}function hT(t){var e=t.alternate;if(!e){if(e=ri(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Im(s),t;if(i===r)return Im(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function B_(t){return t=hT(t),t!==null?H_(t):null}function H_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=H_(t);if(e!==null)return e;t=t.sibling}return null}var q_=yn.unstable_scheduleCallback,Sm=yn.unstable_cancelCallback,dT=yn.unstable_shouldYield,fT=yn.unstable_requestPaint,lt=yn.unstable_now,pT=yn.unstable_getCurrentPriorityLevel,ef=yn.unstable_ImmediatePriority,W_=yn.unstable_UserBlockingPriority,Yl=yn.unstable_NormalPriority,mT=yn.unstable_LowPriority,G_=yn.unstable_IdlePriority,Fu=null,Xn=null;function gT(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Fu,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:vT,yT=Math.log,_T=Math.LN2;function vT(t){return t>>>=0,t===0?32:31-(yT(t)/_T|0)|0}var nl=64,rl=4194304;function Do(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Do(l):(i&=o,i!==0&&(r=Do(i)))}else o=n&~s,o!==0?r=Do(o):i!==0&&(r=Do(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),s=1<<n,r|=t[n],e&=~s;return r}function wT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ET(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Un(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=wT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K_(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function TT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Un(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Oe=0;function Q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J_,nf,Y_,X_,Z_,Uh=!1,sl=[],ts=null,ns=null,rs=null,na=new Map,ra=new Map,Kr=[],IT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(e.pointerId)}}function Io(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ra(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function ST(t,e,n,r,s){switch(e){case"focusin":return ts=Io(ts,t,e,n,r,s),!0;case"dragenter":return ns=Io(ns,t,e,n,r,s),!0;case"mouseover":return rs=Io(rs,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return na.set(i,Io(na.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ra.set(i,Io(ra.get(i)||null,t,e,n,r,s)),!0}return!1}function ev(t){var e=Ms(t.target);if(e!==null){var n=ri(e);if(n!==null){if(e=n.tag,e===13){if(e=z_(n),e!==null){t.blockedOn=e,Z_(t.priority,function(){Y_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return e=Ra(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){kl(t)&&n.delete(e)}function xT(){Uh=!1,ts!==null&&kl(ts)&&(ts=null),ns!==null&&kl(ns)&&(ns=null),rs!==null&&kl(rs)&&(rs=null),na.forEach(Am),ra.forEach(Am)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,Uh||(Uh=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,xT)))}function sa(t){function e(s){return So(s,t)}if(0<sl.length){So(sl[0],t);for(var n=1;n<sl.length;n++){var r=sl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ts!==null&&So(ts,t),ns!==null&&So(ns,t),rs!==null&&So(rs,t),na.forEach(e),ra.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)ev(n),n.blockedOn===null&&Kr.shift()}var Oi=Vr.ReactCurrentBatchConfig,Zl=!0;function AT(t,e,n,r){var s=Oe,i=Oi.transition;Oi.transition=null;try{Oe=1,rf(t,e,n,r)}finally{Oe=s,Oi.transition=i}}function kT(t,e,n,r){var s=Oe,i=Oi.transition;Oi.transition=null;try{Oe=4,rf(t,e,n,r)}finally{Oe=s,Oi.transition=i}}function rf(t,e,n,r){if(Zl){var s=Fh(t,e,n,r);if(s===null)Qc(t,e,r,eu,n),xm(t,r);else if(ST(s,t,e,n,r))r.stopPropagation();else if(xm(t,r),e&4&&-1<IT.indexOf(t)){for(;s!==null;){var i=Ra(s);if(i!==null&&J_(i),i=Fh(t,e,n,r),i===null&&Qc(t,e,r,eu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Qc(t,e,r,null,n)}}var eu=null;function Fh(t,e,n,r){if(eu=null,t=Zd(r),t=Ms(t),t!==null)if(e=ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=z_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function tv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pT()){case ef:return 1;case W_:return 4;case Yl:case mT:return 16;case G_:return 536870912;default:return 16}default:return 16}}var Zr=null,sf=null,Cl=null;function nv(){if(Cl)return Cl;var t,e=sf,n=e.length,r,s="value"in Zr?Zr.value:Zr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Cl=s.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function km(){return!1}function vn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?il:km,this.isPropagationStopped=km,this}return Xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=vn(no),Ca=Xe({},no,{view:0,detail:0}),CT=vn(Ca),Fc,$c,xo,$u=Xe({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(Fc=t.screenX-xo.screenX,$c=t.screenY-xo.screenY):$c=Fc=0,xo=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Cm=vn($u),RT=Xe({},$u,{dataTransfer:0}),PT=vn(RT),NT=Xe({},Ca,{relatedTarget:0}),zc=vn(NT),bT=Xe({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),DT=vn(bT),OT=Xe({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VT=vn(OT),MT=Xe({},no,{data:0}),Rm=vn(MT),LT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UT[t])?!!e[t]:!1}function af(){return FT}var $T=Xe({},Ca,{key:function(t){if(t.key){var e=LT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zT=vn($T),BT=Xe({},$u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=vn(BT),HT=Xe({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),qT=vn(HT),WT=Xe({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),GT=vn(WT),KT=Xe({},$u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QT=vn(KT),JT=[9,13,27,32],lf=kr&&"CompositionEvent"in window,$o=null;kr&&"documentMode"in document&&($o=document.documentMode);var YT=kr&&"TextEvent"in window&&!$o,rv=kr&&(!lf||$o&&8<$o&&11>=$o),Nm=" ",bm=!1;function sv(t,e){switch(t){case"keyup":return JT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ei=!1;function XT(t,e){switch(t){case"compositionend":return iv(e);case"keypress":return e.which!==32?null:(bm=!0,Nm);case"textInput":return t=e.data,t===Nm&&bm?null:t;default:return null}}function ZT(t,e){if(Ei)return t==="compositionend"||!lf&&sv(t,e)?(t=nv(),Cl=sf=Zr=null,Ei=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rv&&e.locale!=="ko"?null:e.data;default:return null}}var eI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eI[t.type]:e==="textarea"}function ov(t,e,n,r){L_(r),e=tu(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zo=null,ia=null;function tI(t){yv(t,0)}function zu(t){var e=Si(t);if(P_(e))return t}function nI(t,e){if(t==="change")return e}var av=!1;if(kr){var Bc;if(kr){var Hc="oninput"in document;if(!Hc){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),Hc=typeof Om.oninput=="function"}Bc=Hc}else Bc=!1;av=Bc&&(!document.documentMode||9<document.documentMode)}function Vm(){zo&&(zo.detachEvent("onpropertychange",lv),ia=zo=null)}function lv(t){if(t.propertyName==="value"&&zu(ia)){var e=[];ov(e,ia,t,Zd(t)),$_(tI,e)}}function rI(t,e,n){t==="focusin"?(Vm(),zo=e,ia=n,zo.attachEvent("onpropertychange",lv)):t==="focusout"&&Vm()}function sI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(ia)}function iI(t,e){if(t==="click")return zu(e)}function oI(t,e){if(t==="input"||t==="change")return zu(e)}function aI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:aI;function oa(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Th.call(e,s)||!Hn(t[s],e[s]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lI(t){var e=cv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uv(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Lm(n,i);var o=Lm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uI=kr&&"documentMode"in document&&11>=document.documentMode,Ti=null,$h=null,Bo=null,zh=!1;function jm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||Ti==null||Ti!==Kl(r)||(r=Ti,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&oa(Bo,r)||(Bo=r,r=tu($h,"onSelect"),0<r.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ti)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ii={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},qc={},hv={};kr&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function Bu(t){if(qc[t])return qc[t];if(!Ii[t])return t;var e=Ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hv)return qc[t]=e[n];return t}var dv=Bu("animationend"),fv=Bu("animationiteration"),pv=Bu("animationstart"),mv=Bu("transitionend"),gv=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ss(t,e){gv.set(t,e),ni(e,[t])}for(var Wc=0;Wc<Um.length;Wc++){var Gc=Um[Wc],cI=Gc.toLowerCase(),hI=Gc[0].toUpperCase()+Gc.slice(1);Ss(cI,"on"+hI)}Ss(dv,"onAnimationEnd");Ss(fv,"onAnimationIteration");Ss(pv,"onAnimationStart");Ss("dblclick","onDoubleClick");Ss("focusin","onFocus");Ss("focusout","onBlur");Ss(mv,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Fm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cT(r,e,void 0,t),t.currentTarget=null}function yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Fm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Fm(s,l,h),i=u}}}if(Jl)throw t=Lh,Jl=!1,Lh=null,t}function $e(t,e){var n=e[Gh];n===void 0&&(n=e[Gh]=new Set);var r=t+"__bubble";n.has(r)||(_v(e,t,2,!1),n.add(r))}function Kc(t,e,n){var r=0;e&&(r|=4),_v(n,t,r,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[al]){t[al]=!0,x_.forEach(function(n){n!=="selectionchange"&&(dI.has(n)||Kc(n,!1,t),Kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,Kc("selectionchange",!1,e))}}function _v(t,e,n,r){switch(tv(e)){case 1:var s=AT;break;case 4:s=kT;break;default:s=rf}n=s.bind(null,e,n,t),s=void 0,!Mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Qc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ms(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}$_(function(){var h=i,f=Zd(n),p=[];e:{var v=gv.get(t);if(v!==void 0){var k=of,P=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":k=zT;break;case"focusin":P="focus",k=zc;break;case"focusout":P="blur",k=zc;break;case"beforeblur":case"afterblur":k=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=PT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=qT;break;case dv:case fv:case pv:k=DT;break;case mv:k=GT;break;case"scroll":k=CT;break;case"wheel":k=QT;break;case"copy":case"cut":case"paste":k=VT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Pm}var N=(e&4)!==0,O=!N&&t==="scroll",x=N?v!==null?v+"Capture":null:v;N=[];for(var T=h,A;T!==null;){A=T;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,x!==null&&(b=ta(T,x),b!=null&&N.push(la(T,b,A)))),O)break;T=T.return}0<N.length&&(v=new k(v,P,null,n,f),p.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==Oh&&(P=n.relatedTarget||n.fromElement)&&(Ms(P)||P[Cr]))break e;if((k||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,k?(P=n.relatedTarget||n.toElement,k=h,P=P?Ms(P):null,P!==null&&(O=ri(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(k=null,P=h),k!==P)){if(N=Cm,b="onMouseLeave",x="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(N=Pm,b="onPointerLeave",x="onPointerEnter",T="pointer"),O=k==null?v:Si(k),A=P==null?v:Si(P),v=new N(b,T+"leave",k,n,f),v.target=O,v.relatedTarget=A,b=null,Ms(f)===h&&(N=new N(x,T+"enter",P,n,f),N.target=A,N.relatedTarget=O,b=N),O=b,k&&P)t:{for(N=k,x=P,T=0,A=N;A;A=pi(A))T++;for(A=0,b=x;b;b=pi(b))A++;for(;0<T-A;)N=pi(N),T--;for(;0<A-T;)x=pi(x),A--;for(;T--;){if(N===x||x!==null&&N===x.alternate)break t;N=pi(N),x=pi(x)}N=null}else N=null;k!==null&&$m(p,v,k,N,!1),P!==null&&O!==null&&$m(p,O,P,N,!0)}}e:{if(v=h?Si(h):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var M=nI;else if(Dm(v))if(av)M=oI;else{M=sI;var U=rI}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(M=iI);if(M&&(M=M(t,h))){ov(p,M,n,f);break e}U&&U(t,v,h),t==="focusout"&&(U=v._wrapperState)&&U.controlled&&v.type==="number"&&Rh(v,"number",v.value)}switch(U=h?Si(h):window,t){case"focusin":(Dm(U)||U.contentEditable==="true")&&(Ti=U,$h=h,Bo=null);break;case"focusout":Bo=$h=Ti=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,jm(p,n,f);break;case"selectionchange":if(uI)break;case"keydown":case"keyup":jm(p,n,f)}var g;if(lf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ei?sv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(rv&&n.locale!=="ko"&&(Ei||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ei&&(g=nv()):(Zr=f,sf="value"in Zr?Zr.value:Zr.textContent,Ei=!0)),U=tu(h,y),0<U.length&&(y=new Rm(y,t,null,n,f),p.push({event:y,listeners:U}),g?y.data=g:(g=iv(n),g!==null&&(y.data=g)))),(g=YT?XT(t,n):ZT(t,n))&&(h=tu(h,"onBeforeInput"),0<h.length&&(f=new Rm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=g))}yv(p,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ta(t,n),i!=null&&r.unshift(la(t,i,s)),i=ta(t,e),i!=null&&r.push(la(t,i,s))),t=t.return}return r}function pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $m(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=ta(n,i),u!=null&&o.unshift(la(n,u,l))):s||(u=ta(n,i),u!=null&&o.push(la(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fI=/\r\n?/g,pI=/\u0000|\uFFFD/g;function zm(t){return(typeof t=="string"?t:""+t).replace(fI,`
`).replace(pI,"")}function ll(t,e,n){if(e=zm(e),zm(t)!==e&&n)throw Error(F(425))}function nu(){}var Bh=null,Hh=null;function qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wh=typeof setTimeout=="function"?setTimeout:void 0,mI=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,gI=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(t){return Bm.resolve(null).then(t).catch(yI)}:Wh;function yI(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),sa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);sa(e)}function ss(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ro=Math.random().toString(36).slice(2),Yn="__reactFiber$"+ro,ua="__reactProps$"+ro,Cr="__reactContainer$"+ro,Gh="__reactEvents$"+ro,_I="__reactListeners$"+ro,vI="__reactHandles$"+ro;function Ms(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hm(t);t!==null;){if(n=t[Yn])return n;t=Hm(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[Yn]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Hu(t){return t[ua]||null}var Kh=[],xi=-1;function xs(t){return{current:t}}function He(t){0>xi||(t.current=Kh[xi],Kh[xi]=null,xi--)}function Ue(t,e){xi++,Kh[xi]=t.current,t.current=e}var ms={},Kt=xs(ms),an=xs(!1),qs=ms;function Hi(t,e){var n=t.type.contextTypes;if(!n)return ms;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ln(t){return t=t.childContextTypes,t!=null}function ru(){He(an),He(Kt)}function qm(t,e,n){if(Kt.current!==ms)throw Error(F(168));Ue(Kt,e),Ue(an,n)}function vv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,rT(t)||"Unknown",s));return Xe({},n,r)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ms,qs=Kt.current,Ue(Kt,t),Ue(an,an.current),!0}function Wm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=vv(t,e,qs),r.__reactInternalMemoizedMergedChildContext=t,He(an),He(Kt),Ue(Kt,t)):He(an),Ue(an,n)}var gr=null,qu=!1,Yc=!1;function wv(t){gr===null?gr=[t]:gr.push(t)}function wI(t){qu=!0,wv(t)}function As(){if(!Yc&&gr!==null){Yc=!0;var t=0,e=Oe;try{var n=gr;for(Oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,qu=!1}catch(s){throw gr!==null&&(gr=gr.slice(t+1)),q_(ef,As),s}finally{Oe=e,Yc=!1}}return null}var Ai=[],ki=0,iu=null,ou=0,wn=[],En=0,Ws=null,vr=1,wr="";function Ds(t,e){Ai[ki++]=ou,Ai[ki++]=iu,iu=t,ou=e}function Ev(t,e,n){wn[En++]=vr,wn[En++]=wr,wn[En++]=Ws,Ws=t;var r=vr;t=wr;var s=32-Un(r)-1;r&=~(1<<s),n+=1;var i=32-Un(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,vr=1<<32-Un(e)+s|n<<s|r,wr=i+t}else vr=1<<i|n<<s|r,wr=t}function cf(t){t.return!==null&&(Ds(t,1),Ev(t,1,0))}function hf(t){for(;t===iu;)iu=Ai[--ki],Ai[ki]=null,ou=Ai[--ki],Ai[ki]=null;for(;t===Ws;)Ws=wn[--En],wn[En]=null,wr=wn[--En],wn[En]=null,vr=wn[--En],wn[En]=null}var gn=null,mn=null,We=!1,Vn=null;function Tv(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=ss(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ws!==null?{id:vr,overflow:wr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jh(t){if(We){var e=mn;if(e){var n=e;if(!Gm(t,e)){if(Qh(t))throw Error(F(418));e=ss(n.nextSibling);var r=gn;e&&Gm(t,e)?Tv(r,n):(t.flags=t.flags&-4097|2,We=!1,gn=t)}}else{if(Qh(t))throw Error(F(418));t.flags=t.flags&-4097|2,We=!1,gn=t}}}function Km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function ul(t){if(t!==gn)return!1;if(!We)return Km(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qh(t.type,t.memoizedProps)),e&&(e=mn)){if(Qh(t))throw Iv(),Error(F(418));for(;e;)Tv(t,e),e=ss(e.nextSibling)}if(Km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=ss(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?ss(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=mn;t;)t=ss(t.nextSibling)}function qi(){mn=gn=null,We=!1}function df(t){Vn===null?Vn=[t]:Vn.push(t)}var EI=Vr.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qm(t){var e=t._init;return e(t._payload)}function Sv(t){function e(x,T){if(t){var A=x.deletions;A===null?(x.deletions=[T],x.flags|=16):A.push(T)}}function n(x,T){if(!t)return null;for(;T!==null;)e(x,T),T=T.sibling;return null}function r(x,T){for(x=new Map;T!==null;)T.key!==null?x.set(T.key,T):x.set(T.index,T),T=T.sibling;return x}function s(x,T){return x=ls(x,T),x.index=0,x.sibling=null,x}function i(x,T,A){return x.index=A,t?(A=x.alternate,A!==null?(A=A.index,A<T?(x.flags|=2,T):A):(x.flags|=2,T)):(x.flags|=1048576,T)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,T,A,b){return T===null||T.tag!==6?(T=sh(A,x.mode,b),T.return=x,T):(T=s(T,A),T.return=x,T)}function u(x,T,A,b){var M=A.type;return M===wi?f(x,T,A.props.children,b,A.key):T!==null&&(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&Qm(M)===T.type)?(b=s(T,A.props),b.ref=Ao(x,T,A),b.return=x,b):(b=Ml(A.type,A.key,A.props,null,x.mode,b),b.ref=Ao(x,T,A),b.return=x,b)}function h(x,T,A,b){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=ih(A,x.mode,b),T.return=x,T):(T=s(T,A.children||[]),T.return=x,T)}function f(x,T,A,b,M){return T===null||T.tag!==7?(T=zs(A,x.mode,b,M),T.return=x,T):(T=s(T,A),T.return=x,T)}function p(x,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return T=sh(""+T,x.mode,A),T.return=x,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Za:return A=Ml(T.type,T.key,T.props,null,x.mode,A),A.ref=Ao(x,null,T),A.return=x,A;case vi:return T=ih(T,x.mode,A),T.return=x,T;case Hr:var b=T._init;return p(x,b(T._payload),A)}if(bo(T)||Eo(T))return T=zs(T,x.mode,A,null),T.return=x,T;cl(x,T)}return null}function v(x,T,A,b){var M=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return M!==null?null:l(x,T,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Za:return A.key===M?u(x,T,A,b):null;case vi:return A.key===M?h(x,T,A,b):null;case Hr:return M=A._init,v(x,T,M(A._payload),b)}if(bo(A)||Eo(A))return M!==null?null:f(x,T,A,b,null);cl(x,A)}return null}function k(x,T,A,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(A)||null,l(T,x,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Za:return x=x.get(b.key===null?A:b.key)||null,u(T,x,b,M);case vi:return x=x.get(b.key===null?A:b.key)||null,h(T,x,b,M);case Hr:var U=b._init;return k(x,T,A,U(b._payload),M)}if(bo(b)||Eo(b))return x=x.get(A)||null,f(T,x,b,M,null);cl(T,b)}return null}function P(x,T,A,b){for(var M=null,U=null,g=T,y=T=0,w=null;g!==null&&y<A.length;y++){g.index>y?(w=g,g=null):w=g.sibling;var S=v(x,g,A[y],b);if(S===null){g===null&&(g=w);break}t&&g&&S.alternate===null&&e(x,g),T=i(S,T,y),U===null?M=S:U.sibling=S,U=S,g=w}if(y===A.length)return n(x,g),We&&Ds(x,y),M;if(g===null){for(;y<A.length;y++)g=p(x,A[y],b),g!==null&&(T=i(g,T,y),U===null?M=g:U.sibling=g,U=g);return We&&Ds(x,y),M}for(g=r(x,g);y<A.length;y++)w=k(g,x,y,A[y],b),w!==null&&(t&&w.alternate!==null&&g.delete(w.key===null?y:w.key),T=i(w,T,y),U===null?M=w:U.sibling=w,U=w);return t&&g.forEach(function(I){return e(x,I)}),We&&Ds(x,y),M}function N(x,T,A,b){var M=Eo(A);if(typeof M!="function")throw Error(F(150));if(A=M.call(A),A==null)throw Error(F(151));for(var U=M=null,g=T,y=T=0,w=null,S=A.next();g!==null&&!S.done;y++,S=A.next()){g.index>y?(w=g,g=null):w=g.sibling;var I=v(x,g,S.value,b);if(I===null){g===null&&(g=w);break}t&&g&&I.alternate===null&&e(x,g),T=i(I,T,y),U===null?M=I:U.sibling=I,U=I,g=w}if(S.done)return n(x,g),We&&Ds(x,y),M;if(g===null){for(;!S.done;y++,S=A.next())S=p(x,S.value,b),S!==null&&(T=i(S,T,y),U===null?M=S:U.sibling=S,U=S);return We&&Ds(x,y),M}for(g=r(x,g);!S.done;y++,S=A.next())S=k(g,x,y,S.value,b),S!==null&&(t&&S.alternate!==null&&g.delete(S.key===null?y:S.key),T=i(S,T,y),U===null?M=S:U.sibling=S,U=S);return t&&g.forEach(function(C){return e(x,C)}),We&&Ds(x,y),M}function O(x,T,A,b){if(typeof A=="object"&&A!==null&&A.type===wi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Za:e:{for(var M=A.key,U=T;U!==null;){if(U.key===M){if(M=A.type,M===wi){if(U.tag===7){n(x,U.sibling),T=s(U,A.props.children),T.return=x,x=T;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Hr&&Qm(M)===U.type){n(x,U.sibling),T=s(U,A.props),T.ref=Ao(x,U,A),T.return=x,x=T;break e}n(x,U);break}else e(x,U);U=U.sibling}A.type===wi?(T=zs(A.props.children,x.mode,b,A.key),T.return=x,x=T):(b=Ml(A.type,A.key,A.props,null,x.mode,b),b.ref=Ao(x,T,A),b.return=x,x=b)}return o(x);case vi:e:{for(U=A.key;T!==null;){if(T.key===U)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){n(x,T.sibling),T=s(T,A.children||[]),T.return=x,x=T;break e}else{n(x,T);break}else e(x,T);T=T.sibling}T=ih(A,x.mode,b),T.return=x,x=T}return o(x);case Hr:return U=A._init,O(x,T,U(A._payload),b)}if(bo(A))return P(x,T,A,b);if(Eo(A))return N(x,T,A,b);cl(x,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,T!==null&&T.tag===6?(n(x,T.sibling),T=s(T,A),T.return=x,x=T):(n(x,T),T=sh(A,x.mode,b),T.return=x,x=T),o(x)):n(x,T)}return O}var Wi=Sv(!0),xv=Sv(!1),au=xs(null),lu=null,Ci=null,ff=null;function pf(){ff=Ci=lu=null}function mf(t){var e=au.current;He(au),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vi(t,e){lu=t,ff=Ci=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},Ci===null){if(lu===null)throw Error(F(308));Ci=t,lu.dependencies={lanes:0,firstContext:t}}else Ci=Ci.next=t;return e}var Ls=null;function gf(t){Ls===null?Ls=[t]:Ls.push(t)}function Av(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,gf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Rr(t,r)}function Rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function is(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,xe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Rr(t,n)}return s=r.interleaved,s===null?(e.next=e,gf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Rr(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}function Jm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var s=t.updateQueue;qr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var v=l.lane,k=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(v=e,k=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){p=P.call(k,p,v);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,v=typeof P=="function"?P.call(k,p,v):P,v==null)break e;p=Xe({},p,v);break e;case 2:qr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=p):f=f.next=k,o|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ks|=o,t.lanes=o,t.memoizedState=p}}function Ym(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Pa={},Zn=xs(Pa),ca=xs(Pa),ha=xs(Pa);function js(t){if(t===Pa)throw Error(F(174));return t}function _f(t,e){switch(Ue(ha,e),Ue(ca,t),Ue(Zn,Pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}He(Zn),Ue(Zn,e)}function Gi(){He(Zn),He(ca),He(ha)}function Cv(t){js(ha.current);var e=js(Zn.current),n=Nh(e,t.type);e!==n&&(Ue(ca,t),Ue(Zn,n))}function vf(t){ca.current===t&&(He(Zn),He(ca))}var Je=xs(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xc=[];function wf(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var Nl=Vr.ReactCurrentDispatcher,Zc=Vr.ReactCurrentBatchConfig,Gs=0,Ye=null,_t=null,Ct=null,hu=!1,Ho=!1,da=0,TI=0;function zt(){throw Error(F(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Tf(t,e,n,r,s,i){if(Gs=i,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?AI:kI,t=n(r,s),Ho){i=0;do{if(Ho=!1,da=0,25<=i)throw Error(F(301));i+=1,Ct=_t=null,e.updateQueue=null,Nl.current=CI,t=n(r,s)}while(Ho)}if(Nl.current=du,e=_t!==null&&_t.next!==null,Gs=0,Ct=_t=Ye=null,hu=!1,e)throw Error(F(300));return t}function If(){var t=da!==0;return da=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Ye.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Cn(){if(_t===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Ct===null?Ye.memoizedState:Ct.next;if(e!==null)Ct=e,_t=t;else{if(t===null)throw Error(F(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Ct===null?Ye.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function fa(t,e){return typeof e=="function"?e(t):e}function eh(t){var e=Cn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=_t,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Gs&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ye.lanes|=f,Ks|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Hn(r,e.memoizedState)||(on=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ye.lanes|=i,Ks|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function th(t){var e=Cn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Hn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Rv(){}function Pv(t,e){var n=Ye,r=Cn(),s=e(),i=!Hn(r.memoizedState,s);if(i&&(r.memoizedState=s,on=!0),r=r.queue,Sf(Dv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,pa(9,bv.bind(null,n,r,s,e),void 0,null),Rt===null)throw Error(F(349));Gs&30||Nv(n,e,s)}return s}function Nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bv(t,e,n,r){e.value=n,e.getSnapshot=r,Ov(e)&&Vv(t)}function Dv(t,e,n){return n(function(){Ov(e)&&Vv(t)})}function Ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function Vv(t){var e=Rr(t,1);e!==null&&Fn(e,t,1,-1)}function Xm(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=xI.bind(null,Ye,t),[e.memoizedState,t]}function pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Mv(){return Cn().memoizedState}function bl(t,e,n,r){var s=Qn();Ye.flags|=t,s.memoizedState=pa(1|e,n,void 0,r===void 0?null:r)}function Wu(t,e,n,r){var s=Cn();r=r===void 0?null:r;var i=void 0;if(_t!==null){var o=_t.memoizedState;if(i=o.destroy,r!==null&&Ef(r,o.deps)){s.memoizedState=pa(e,n,i,r);return}}Ye.flags|=t,s.memoizedState=pa(1|e,n,i,r)}function Zm(t,e){return bl(8390656,8,t,e)}function Sf(t,e){return Wu(2048,8,t,e)}function Lv(t,e){return Wu(4,2,t,e)}function jv(t,e){return Wu(4,4,t,e)}function Uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fv(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4,4,Uv.bind(null,e,t),n)}function xf(){}function $v(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zv(t,e){var n=Cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Bv(t,e,n){return Gs&21?(Hn(n,e)||(n=K_(),Ye.lanes|=n,Ks|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function II(t,e){var n=Oe;Oe=n!==0&&4>n?n:4,t(!0);var r=Zc.transition;Zc.transition={};try{t(!1),e()}finally{Oe=n,Zc.transition=r}}function Hv(){return Cn().memoizedState}function SI(t,e,n){var r=as(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Wv(e,n);else if(n=Av(t,e,n,r),n!==null){var s=Xt();Fn(n,t,r,s),Gv(n,e,r)}}function xI(t,e,n){var r=as(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Wv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Hn(l,o)){var u=e.interleaved;u===null?(s.next=s,gf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Av(t,e,s,r),n!==null&&(s=Xt(),Fn(n,t,r,s),Gv(n,e,r))}}function qv(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function Wv(t,e){Ho=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}var du={readContext:kn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},AI={readContext:kn,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,Uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Qn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SI.bind(null,Ye,t),[r.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:Xm,useDebugValue:xf,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=Xm(!1),e=t[0];return t=II.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ye,s=Qn();if(We){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Rt===null)throw Error(F(349));Gs&30||Nv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Zm(Dv.bind(null,r,i,t),[t]),r.flags|=2048,pa(9,bv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Qn(),e=Rt.identifierPrefix;if(We){var n=wr,r=vr;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kI={readContext:kn,useCallback:$v,useContext:kn,useEffect:Sf,useImperativeHandle:Fv,useInsertionEffect:Lv,useLayoutEffect:jv,useMemo:zv,useReducer:eh,useRef:Mv,useState:function(){return eh(fa)},useDebugValue:xf,useDeferredValue:function(t){var e=Cn();return Bv(e,_t.memoizedState,t)},useTransition:function(){var t=eh(fa)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Rv,useSyncExternalStore:Pv,useId:Hv,unstable_isNewReconciler:!1},CI={readContext:kn,useCallback:$v,useContext:kn,useEffect:Sf,useImperativeHandle:Fv,useInsertionEffect:Lv,useLayoutEffect:jv,useMemo:zv,useReducer:th,useRef:Mv,useState:function(){return th(fa)},useDebugValue:xf,useDeferredValue:function(t){var e=Cn();return _t===null?e.memoizedState=t:Bv(e,_t.memoizedState,t)},useTransition:function(){var t=th(fa)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Rv,useSyncExternalStore:Pv,useId:Hv,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=Xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xt(),s=as(t),i=xr(r,s);i.payload=e,n!=null&&(i.callback=n),e=is(t,i,s),e!==null&&(Fn(e,t,s,r),Pl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xt(),s=as(t),i=xr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=is(t,i,s),e!==null&&(Fn(e,t,s,r),Pl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),r=as(t),s=xr(n,r);s.tag=2,e!=null&&(s.callback=e),e=is(t,s,r),e!==null&&(Fn(e,t,r,n),Pl(e,t,r))}};function eg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,r)||!oa(s,i):!0}function Kv(t,e,n){var r=!1,s=ms,i=e.contextType;return typeof i=="object"&&i!==null?i=kn(i):(s=ln(e)?qs:Kt.current,r=e.contextTypes,i=(r=r!=null)?Hi(t,s):ms),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},yf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=kn(i):(i=ln(e)?qs:Kt.current,s.context=Hi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Xh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Gu.enqueueReplaceState(s,s.state,null),uu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ki(t,e){try{var n="",r=e;do n+=nT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function nh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RI=typeof WeakMap=="function"?WeakMap:Map;function Qv(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,cd=r),ed(t,e)},n}function Jv(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ed(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof r!="function"&&(os===null?os=new Set([this]):os.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new RI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=BI.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,is(n,e,1))),n.lanes|=1),t)}var PI=Vr.ReactCurrentOwner,on=!1;function Yt(t,e,n,r){e.child=t===null?xv(e,null,n,r):Wi(e,t.child,n,r)}function ig(t,e,n,r,s){n=n.render;var i=e.ref;return Vi(e,s),r=Tf(t,e,n,r,i,s),n=If(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pr(t,e,s)):(We&&n&&cf(e),e.flags|=1,Yt(t,e,r,s),e.child)}function og(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Df(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Yv(t,e,i,r,s)):(t=Ml(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,r)&&t.ref===e.ref)return Pr(t,e,s)}return e.flags|=1,t=ls(i,r),t.ref=e.ref,t.return=e,e.child=t}function Yv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(oa(i,r)&&t.ref===e.ref)if(on=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Pr(t,e,s)}return td(t,e,n,r,s)}function Xv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(Pi,pn),pn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ue(Pi,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ue(Pi,pn),pn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ue(Pi,pn),pn|=r;return Yt(t,e,s,n),e.child}function Zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,r,s){var i=ln(n)?qs:Kt.current;return i=Hi(e,i),Vi(e,s),n=Tf(t,e,n,r,i,s),r=If(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pr(t,e,s)):(We&&r&&cf(e),e.flags|=1,Yt(t,e,n,s),e.child)}function ag(t,e,n,r,s){if(ln(n)){var i=!0;su(e)}else i=!1;if(Vi(e,s),e.stateNode===null)Dl(t,e),Kv(e,n,r),Zh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=kn(h):(h=ln(n)?qs:Kt.current,h=Hi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&tg(e,o,r,h),qr=!1;var v=e.memoizedState;o.state=v,uu(e,r,o,s),u=e.memoizedState,l!==r||v!==u||an.current||qr?(typeof f=="function"&&(Xh(e,n,f,r),u=e.memoizedState),(l=qr||eg(e,n,l,r,v,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Dn(e.type,l),o.props=h,p=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=kn(u):(u=ln(n)?qs:Kt.current,u=Hi(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||v!==u)&&tg(e,o,r,u),qr=!1,v=e.memoizedState,o.state=v,uu(e,r,o,s);var P=e.memoizedState;l!==p||v!==P||an.current||qr?(typeof k=="function"&&(Xh(e,n,k,r),P=e.memoizedState),(h=qr||eg(e,n,h,r,v,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return nd(t,e,n,r,i,s)}function nd(t,e,n,r,s,i){Zv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Wm(e,n,!1),Pr(t,e,i);r=e.stateNode,PI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wi(e,t.child,null,i),e.child=Wi(e,null,l,i)):Yt(t,e,l,i),e.memoizedState=r.state,s&&Wm(e,n,!0),e.child}function e0(t){var e=t.stateNode;e.pendingContext?qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qm(t,e.context,!1),_f(t,e.containerInfo)}function lg(t,e,n,r,s){return qi(),df(s),e.flags|=256,Yt(t,e,n,r),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function t0(t,e,n){var r=e.pendingProps,s=Je.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ue(Je,s&1),t===null)return Jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ju(o,r,0,null),t=zs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=sd(n),e.memoizedState=rd,t):Af(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return NI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ls(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ls(l,i):(i=zs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=rd,r}return i=t.child,t=i.sibling,r=ls(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,r){return r!==null&&df(r),Wi(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=nh(Error(F(422))),hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ju({mode:"visible",children:r.children},s,0,null),i=zs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Wi(e,t.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=rd,i);if(!(e.mode&1))return hl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=nh(i,r,void 0),hl(t,e,o,r)}if(l=(o&t.childLanes)!==0,on||l){if(r=Rt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Rr(t,s),Fn(r,t,s,-1))}return bf(),r=nh(Error(F(421))),hl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=HI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,mn=ss(s.nextSibling),gn=e,We=!0,Vn=null,t!==null&&(wn[En++]=vr,wn[En++]=wr,wn[En++]=Ws,vr=t.id,wr=t.overflow,Ws=e),e=Af(e,r.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yh(t.return,e,n)}function rh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function n0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Yt(t,e,r.children,n),r=Je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ue(Je,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),rh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&cu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}rh(e,!0,n,null,i);break;case"together":rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ks|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ls(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ls(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bI(t,e,n){switch(e.tag){case 3:e0(e),qi();break;case 5:Cv(e);break;case 1:ln(e.type)&&su(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ue(au,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Je,Je.current&1),e.flags|=128,null):n&e.child.childLanes?t0(t,e,n):(Ue(Je,Je.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);Ue(Je,Je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return n0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ue(Je,Je.current),r)break;return null;case 22:case 23:return e.lanes=0,Xv(t,e,n)}return Pr(t,e,n)}var r0,id,s0,i0;r0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};s0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,js(Zn.current);var i=null;switch(n){case"input":s=kh(t,s),r=kh(t,r),i=[];break;case"select":s=Xe({},s,{value:void 0}),r=Xe({},r,{value:void 0}),i=[];break;case"textarea":s=Ph(t,s),r=Ph(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}bh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Zo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&$e("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};i0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ko(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DI(t,e,n){var r=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return ln(e.type)&&ru(),Bt(e),null;case 3:return r=e.stateNode,Gi(),He(an),He(Kt),wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(fd(Vn),Vn=null))),id(t,e),Bt(e),null;case 5:vf(e);var s=js(ha.current);if(n=e.type,t!==null&&e.stateNode!=null)s0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Bt(e),null}if(t=js(Zn.current),ul(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Yn]=e,r[ua]=i,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(s=0;s<Oo.length;s++)$e(Oo[s],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":_m(r,i),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$e("invalid",r);break;case"textarea":wm(r,i),$e("invalid",r)}bh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,l,t),s=["children",""+l]):Zo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&$e("scroll",r)}switch(n){case"input":el(r),vm(r,i,!0);break;case"textarea":el(r),Em(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=nu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yn]=e,t[ua]=r,r0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":$e("cancel",t),$e("close",t),s=r;break;case"iframe":case"object":case"embed":$e("load",t),s=r;break;case"video":case"audio":for(s=0;s<Oo.length;s++)$e(Oo[s],t);s=r;break;case"source":$e("error",t),s=r;break;case"img":case"image":case"link":$e("error",t),$e("load",t),s=r;break;case"details":$e("toggle",t),s=r;break;case"input":_m(t,r),s=kh(t,r),$e("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Xe({},r,{value:void 0}),$e("invalid",t);break;case"textarea":wm(t,r),s=Ph(t,r),$e("invalid",t);break;default:s=r}bh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?M_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&O_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ea(t,u):typeof u=="number"&&ea(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&$e("scroll",t):u!=null&&Qd(t,i,u,o))}switch(n){case"input":el(t),vm(t,r,!1);break;case"textarea":el(t),Em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ps(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ni(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)i0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=js(ha.current),js(Zn.current),ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(i=r.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return Bt(e),null;case 13:if(He(Je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&mn!==null&&e.mode&1&&!(e.flags&128))Iv(),qi(),e.flags|=98560,i=!1;else if(i=ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Yn]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),i=!1}else Vn!==null&&(fd(Vn),Vn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Je.current&1?wt===0&&(wt=3):bf())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Gi(),id(t,e),t===null&&aa(e.stateNode.containerInfo),Bt(e),null;case 10:return mf(e.type._context),Bt(e),null;case 17:return ln(e.type)&&ru(),Bt(e),null;case 19:if(He(Je),i=e.memoizedState,i===null)return Bt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ko(i,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,ko(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ue(Je,Je.current&1|2),e.child}t=t.sibling}i.tail!==null&&lt()>Qi&&(e.flags|=128,r=!0,ko(i,!1),e.lanes=4194304)}else{if(!r)if(t=cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!We)return Bt(e),null}else 2*lt()-i.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,ko(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=lt(),e.sibling=null,n=Je.current,Ue(Je,r?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function OI(t,e){switch(hf(e),e.tag){case 1:return ln(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),He(an),He(Kt),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vf(e),null;case 13:if(He(Je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return He(Je),null;case 4:return Gi(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var dl=!1,Wt=!1,VI=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(t,e,r)}else n.current=null}function od(t,e,n){try{n()}catch(r){et(t,e,r)}}var cg=!1;function MI(t,e){if(Bh=Zl,t=cv(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,v=null;t:for(;;){for(var k;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)v=p,p=k;for(;;){if(p===t)break t;if(v===n&&++h===s&&(l=o),v===i&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hh={focusedElem:t,selectionRange:n},Zl=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,O=P.memoizedState,x=e.stateNode,T=x.getSnapshotBeforeUpdate(e.elementType===e.type?N:Dn(e.type,N),O);x.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){et(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return P=cg,cg=!1,P}function qo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&od(e,n,i)}s=s.next}while(s!==r)}}function Ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o0(t){var e=t.alternate;e!==null&&(t.alternate=null,o0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[ua],delete e[Gh],delete e[_I],delete e[vI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a0(t){return t.tag===5||t.tag===3||t.tag===4}function hg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var bt=null,On=!1;function zr(t,e,n){for(n=n.child;n!==null;)l0(t,e,n),n=n.sibling}function l0(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:Wt||Ri(n,e);case 6:var r=bt,s=On;bt=null,zr(t,e,n),bt=r,On=s,bt!==null&&(On?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(On?(t=bt,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),sa(t)):Jc(bt,n.stateNode));break;case 4:r=bt,s=On,bt=n.stateNode.containerInfo,On=!0,zr(t,e,n),bt=r,On=s;break;case 0:case 11:case 14:case 15:if(!Wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&od(n,e,o),s=s.next}while(s!==r)}zr(t,e,n);break;case 1:if(!Wt&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){et(n,e,l)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(Wt=(r=Wt)||n.memoizedState!==null,zr(t,e,n),Wt=r):zr(t,e,n);break;default:zr(t,e,n)}}function dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VI),e.forEach(function(r){var s=qI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:bt=l.stateNode,On=!1;break e;case 3:bt=l.stateNode.containerInfo,On=!0;break e;case 4:bt=l.stateNode.containerInfo,On=!0;break e}l=l.return}if(bt===null)throw Error(F(160));l0(i,o,s),bt=null,On=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){et(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u0(e,t),e=e.sibling}function u0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Kn(t),r&4){try{qo(3,t,t.return),Ku(3,t)}catch(N){et(t,t.return,N)}try{qo(5,t,t.return)}catch(N){et(t,t.return,N)}}break;case 1:Pn(e,t),Kn(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(Pn(e,t),Kn(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var s=t.stateNode;try{ea(s,"")}catch(N){et(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&N_(s,i),Dh(l,o);var h=Dh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?M_(s,p):f==="dangerouslySetInnerHTML"?O_(s,p):f==="children"?ea(s,p):Qd(s,f,p,h)}switch(l){case"input":Ch(s,i);break;case"textarea":b_(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Ni(s,!!i.multiple,k,!1):v!==!!i.multiple&&(i.defaultValue!=null?Ni(s,!!i.multiple,i.defaultValue,!0):Ni(s,!!i.multiple,i.multiple?[]:"",!1))}s[ua]=i}catch(N){et(t,t.return,N)}}break;case 6:if(Pn(e,t),Kn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){et(t,t.return,N)}}break;case 3:if(Pn(e,t),Kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sa(e.containerInfo)}catch(N){et(t,t.return,N)}break;case 4:Pn(e,t),Kn(t);break;case 13:Pn(e,t),Kn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Rf=lt())),r&4&&dg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(h=Wt)||f,Pn(e,t),Wt=h):Pn(e,t),Kn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(p=Q=f;Q!==null;){switch(v=Q,k=v.child,v.tag){case 0:case 11:case 14:case 15:qo(4,v,v.return);break;case 1:Ri(v,v.return);var P=v.stateNode;if(typeof P.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){et(r,n,N)}}break;case 5:Ri(v,v.return);break;case 22:if(v.memoizedState!==null){pg(p);continue}}k!==null?(k.return=v,Q=k):pg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=V_("display",o))}catch(N){et(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(N){et(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pn(e,t),Kn(t),r&4&&dg(t);break;case 21:break;default:Pn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ea(s,""),r.flags&=-33);var i=hg(t);ud(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hg(t);ld(t,l,o);break;default:throw Error(F(161))}}catch(u){et(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LI(t,e,n){Q=t,c0(t)}function c0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||dl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Wt;l=dl;var h=Wt;if(dl=o,(Wt=u)&&!h)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?mg(s):u!==null?(u.return=o,Q=u):mg(s);for(;i!==null;)Q=i,c0(i),i=i.sibling;Q=s,dl=l,Wt=h}fg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):fg(t)}}function fg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Wt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ym(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ym(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&sa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Wt||e.flags&512&&ad(e)}catch(v){et(e,e.return,v)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function pg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function mg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ku(4,e)}catch(u){et(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){et(e,s,u)}}var i=e.return;try{ad(e)}catch(u){et(e,i,u)}break;case 5:var o=e.return;try{ad(e)}catch(u){et(e,o,u)}}}catch(u){et(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var jI=Math.ceil,fu=Vr.ReactCurrentDispatcher,kf=Vr.ReactCurrentOwner,An=Vr.ReactCurrentBatchConfig,xe=0,Rt=null,ft=null,Mt=0,pn=0,Pi=xs(0),wt=0,ma=null,Ks=0,Qu=0,Cf=0,Wo=null,sn=null,Rf=0,Qi=1/0,mr=null,pu=!1,cd=null,os=null,fl=!1,es=null,mu=0,Go=0,hd=null,Ol=-1,Vl=0;function Xt(){return xe&6?lt():Ol!==-1?Ol:Ol=lt()}function as(t){return t.mode&1?xe&2&&Mt!==0?Mt&-Mt:EI.transition!==null?(Vl===0&&(Vl=K_()),Vl):(t=Oe,t!==0||(t=window.event,t=t===void 0?16:tv(t.type)),t):1}function Fn(t,e,n,r){if(50<Go)throw Go=0,hd=null,Error(F(185));ka(t,n,r),(!(xe&2)||t!==Rt)&&(t===Rt&&(!(xe&2)&&(Qu|=n),wt===4&&Qr(t,Mt)),un(t,r),n===1&&xe===0&&!(e.mode&1)&&(Qi=lt()+500,qu&&As()))}function un(t,e){var n=t.callbackNode;ET(t,e);var r=Xl(t,t===Rt?Mt:0);if(r===0)n!==null&&Sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sm(n),e===1)t.tag===0?wI(gg.bind(null,t)):wv(gg.bind(null,t)),gI(function(){!(xe&6)&&As()}),n=null;else{switch(Q_(r)){case 1:n=ef;break;case 4:n=W_;break;case 16:n=Yl;break;case 536870912:n=G_;break;default:n=Yl}n=_0(n,h0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h0(t,e){if(Ol=-1,Vl=0,xe&6)throw Error(F(327));var n=t.callbackNode;if(Mi()&&t.callbackNode!==n)return null;var r=Xl(t,t===Rt?Mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var s=xe;xe|=2;var i=f0();(Rt!==t||Mt!==e)&&(mr=null,Qi=lt()+500,$s(t,e));do try{$I();break}catch(l){d0(t,l)}while(!0);pf(),fu.current=i,xe=s,ft!==null?e=0:(Rt=null,Mt=0,e=wt)}if(e!==0){if(e===2&&(s=jh(t),s!==0&&(r=s,e=dd(t,s))),e===1)throw n=ma,$s(t,0),Qr(t,r),un(t,lt()),n;if(e===6)Qr(t,r);else{if(s=t.current.alternate,!(r&30)&&!UI(s)&&(e=gu(t,r),e===2&&(i=jh(t),i!==0&&(r=i,e=dd(t,i))),e===1))throw n=ma,$s(t,0),Qr(t,r),un(t,lt()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Os(t,sn,mr);break;case 3:if(Qr(t,r),(r&130023424)===r&&(e=Rf+500-lt(),10<e)){if(Xl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Wh(Os.bind(null,t,sn,mr),e);break}Os(t,sn,mr);break;case 4:if(Qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Un(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jI(r/1960))-r,10<r){t.timeoutHandle=Wh(Os.bind(null,t,sn,mr),r);break}Os(t,sn,mr);break;case 5:Os(t,sn,mr);break;default:throw Error(F(329))}}}return un(t,lt()),t.callbackNode===n?h0.bind(null,t):null}function dd(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&($s(t,e).flags|=256),t=gu(t,e),t!==2&&(e=sn,sn=n,e!==null&&fd(e)),t}function fd(t){sn===null?sn=t:sn.push.apply(sn,t)}function UI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Hn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(t,e){for(e&=~Cf,e&=~Qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function gg(t){if(xe&6)throw Error(F(327));Mi();var e=Xl(t,0);if(!(e&1))return un(t,lt()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=jh(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=ma,$s(t,0),Qr(t,e),un(t,lt()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Os(t,sn,mr),un(t,lt()),null}function Pf(t,e){var n=xe;xe|=1;try{return t(e)}finally{xe=n,xe===0&&(Qi=lt()+500,qu&&As())}}function Qs(t){es!==null&&es.tag===0&&!(xe&6)&&Mi();var e=xe;xe|=1;var n=An.transition,r=Oe;try{if(An.transition=null,Oe=1,t)return t()}finally{Oe=r,An.transition=n,xe=e,!(xe&6)&&As()}}function Nf(){pn=Pi.current,He(Pi)}function $s(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mI(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:Gi(),He(an),He(Kt),wf();break;case 5:vf(r);break;case 4:Gi();break;case 13:He(Je);break;case 19:He(Je);break;case 10:mf(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(Rt=t,ft=t=ls(t.current,null),Mt=pn=e,wt=0,ma=null,Cf=Qu=Ks=0,sn=Wo=null,Ls!==null){for(e=0;e<Ls.length;e++)if(n=Ls[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ls=null}return t}function d0(t,e){do{var n=ft;try{if(pf(),Nl.current=du,hu){for(var r=Ye.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}hu=!1}if(Gs=0,Ct=_t=Ye=null,Ho=!1,da=0,kf.current=null,n===null||n.return===null){wt=1,ma=e,ft=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Mt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=rg(o);if(k!==null){k.flags&=-257,sg(k,o,l,i,e),k.mode&1&&ng(i,h,e),e=k,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){ng(i,h,e),bf();break e}u=Error(F(426))}}else if(We&&l.mode&1){var O=rg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),sg(O,o,l,i,e),df(Ki(u,l));break e}}i=u=Ki(u,l),wt!==4&&(wt=2),Wo===null?Wo=[i]:Wo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=Qv(i,u,e);Jm(i,x);break e;case 1:l=u;var T=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(os===null||!os.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Jv(i,l,e);Jm(i,b);break e}}i=i.return}while(i!==null)}m0(n)}catch(M){e=M,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(!0)}function f0(){var t=fu.current;return fu.current=du,t===null?du:t}function bf(){(wt===0||wt===3||wt===2)&&(wt=4),Rt===null||!(Ks&268435455)&&!(Qu&268435455)||Qr(Rt,Mt)}function gu(t,e){var n=xe;xe|=2;var r=f0();(Rt!==t||Mt!==e)&&(mr=null,$s(t,e));do try{FI();break}catch(s){d0(t,s)}while(!0);if(pf(),xe=n,fu.current=r,ft!==null)throw Error(F(261));return Rt=null,Mt=0,wt}function FI(){for(;ft!==null;)p0(ft)}function $I(){for(;ft!==null&&!dT();)p0(ft)}function p0(t){var e=y0(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?m0(t):ft=e,kf.current=null}function m0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OI(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,ft=null;return}}else if(n=DI(n,e,pn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);wt===0&&(wt=5)}function Os(t,e,n){var r=Oe,s=An.transition;try{An.transition=null,Oe=1,zI(t,e,n,r)}finally{An.transition=s,Oe=r}return null}function zI(t,e,n,r){do Mi();while(es!==null);if(xe&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(TT(t,i),t===Rt&&(ft=Rt=null,Mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,_0(Yl,function(){return Mi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=An.transition,An.transition=null;var o=Oe;Oe=1;var l=xe;xe|=4,kf.current=null,MI(t,n),u0(n,t),lI(Hh),Zl=!!Bh,Hh=Bh=null,t.current=n,LI(n),fT(),xe=l,Oe=o,An.transition=i}else t.current=n;if(fl&&(fl=!1,es=t,mu=s),i=t.pendingLanes,i===0&&(os=null),gT(n.stateNode),un(t,lt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(pu)throw pu=!1,t=cd,cd=null,t;return mu&1&&t.tag!==0&&Mi(),i=t.pendingLanes,i&1?t===hd?Go++:(Go=0,hd=t):Go=0,As(),null}function Mi(){if(es!==null){var t=Q_(mu),e=An.transition,n=Oe;try{if(An.transition=null,Oe=16>t?16:t,es===null)var r=!1;else{if(t=es,es=null,mu=0,xe&6)throw Error(F(331));var s=xe;for(xe|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(Q=h;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:qo(8,f,i)}var p=f.child;if(p!==null)p.return=f,Q=p;else for(;Q!==null;){f=Q;var v=f.sibling,k=f.return;if(o0(f),f===h){Q=null;break}if(v!==null){v.return=k,Q=v;break}Q=k}}}var P=i.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qo(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,Q=x;break e}Q=i.return}}var T=t.current;for(Q=T;Q!==null;){o=Q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Q=A;else e:for(o=T;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ku(9,l)}}catch(M){et(l,l.return,M)}if(l===o){Q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,Q=b;break e}Q=l.return}}if(xe=s,As(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Fu,t)}catch{}r=!0}return r}finally{Oe=n,An.transition=e}}return!1}function yg(t,e,n){e=Ki(n,e),e=Qv(t,e,1),t=is(t,e,1),e=Xt(),t!==null&&(ka(t,1,e),un(t,e))}function et(t,e,n){if(t.tag===3)yg(t,t,n);else for(;e!==null;){if(e.tag===3){yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(os===null||!os.has(r))){t=Ki(n,t),t=Jv(e,t,1),e=is(e,t,1),t=Xt(),e!==null&&(ka(e,1,t),un(e,t));break}}e=e.return}}function BI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Mt&n)===n&&(wt===4||wt===3&&(Mt&130023424)===Mt&&500>lt()-Rf?$s(t,0):Cf|=n),un(t,e)}function g0(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=Xt();t=Rr(t,e),t!==null&&(ka(t,e,n),un(t,n))}function HI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g0(t,n)}function qI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),g0(t,n)}var y0;y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,bI(t,e,n);on=!!(t.flags&131072)}else on=!1,We&&e.flags&1048576&&Ev(e,ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dl(t,e),t=e.pendingProps;var s=Hi(e,Kt.current);Vi(e,n),s=Tf(null,e,r,t,s,n);var i=If();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(i=!0,su(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,yf(e),s.updater=Gu,e.stateNode=s,s._reactInternals=e,Zh(e,r,t,n),e=nd(null,e,r,!0,i,n)):(e.tag=0,We&&i&&cf(e),Yt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=GI(r),t=Dn(r,t),s){case 0:e=td(null,e,r,t,n);break e;case 1:e=ag(null,e,r,t,n);break e;case 11:e=ig(null,e,r,t,n);break e;case 14:e=og(null,e,r,Dn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Dn(r,s),td(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Dn(r,s),ag(t,e,r,s,n);case 3:e:{if(e0(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,kv(t,e),uu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ki(Error(F(423)),e),e=lg(t,e,r,n,s);break e}else if(r!==s){s=Ki(Error(F(424)),e),e=lg(t,e,r,n,s);break e}else for(mn=ss(e.stateNode.containerInfo.firstChild),gn=e,We=!0,Vn=null,n=xv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===s){e=Pr(t,e,n);break e}Yt(t,e,r,n)}e=e.child}return e;case 5:return Cv(e),t===null&&Jh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,qh(r,s)?o=null:i!==null&&qh(r,i)&&(e.flags|=32),Zv(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&Jh(e),null;case 13:return t0(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wi(e,null,r,n):Yt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Dn(r,s),ig(t,e,r,s,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ue(au,r._currentValue),r._currentValue=o,i!==null)if(Hn(i.value,o)){if(i.children===s.children&&!an.current){e=Pr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xr(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Yh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Yh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Yt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Vi(e,n),s=kn(s),r=r(s),e.flags|=1,Yt(t,e,r,n),e.child;case 14:return r=e.type,s=Dn(r,e.pendingProps),s=Dn(r.type,s),og(t,e,r,s,n);case 15:return Yv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Dn(r,s),Dl(t,e),e.tag=1,ln(r)?(t=!0,su(e)):t=!1,Vi(e,n),Kv(e,r,s),Zh(e,r,s,n),nd(null,e,r,!0,t,n);case 19:return n0(t,e,n);case 22:return Xv(t,e,n)}throw Error(F(156,e.tag))};function _0(t,e){return q_(t,e)}function WI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,r){return new WI(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GI(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Xd)return 14}return 2}function ls(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wi:return zs(n.children,s,i,e);case Jd:o=8,s|=8;break;case Ih:return t=xn(12,n,e,s|2),t.elementType=Ih,t.lanes=i,t;case Sh:return t=xn(13,n,e,s),t.elementType=Sh,t.lanes=i,t;case xh:return t=xn(19,n,e,s),t.elementType=xh,t.lanes=i,t;case C_:return Ju(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A_:o=10;break e;case k_:o=9;break e;case Yd:o=11;break e;case Xd:o=14;break e;case Hr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=xn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function zs(t,e,n,r){return t=xn(7,t,r,e),t.lanes=n,t}function Ju(t,e,n,r){return t=xn(22,t,r,e),t.elementType=C_,t.lanes=n,t.stateNode={isHidden:!1},t}function sh(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function ih(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Of(t,e,n,r,s,i,o,l,u){return t=new KI(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=xn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(i),t}function QI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function v0(t){if(!t)return ms;t=t._reactInternals;e:{if(ri(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ln(n))return vv(t,n,e)}return e}function w0(t,e,n,r,s,i,o,l,u){return t=Of(n,r,!0,t,s,i,o,l,u),t.context=v0(null),n=t.current,r=Xt(),s=as(n),i=xr(r,s),i.callback=e??null,is(n,i,s),t.current.lanes=s,ka(t,s,r),un(t,r),t}function Yu(t,e,n,r){var s=e.current,i=Xt(),o=as(s);return n=v0(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=is(s,e,o),t!==null&&(Fn(t,s,o,i),Pl(t,s,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){_g(t,e),(t=t.alternate)&&_g(t,e)}function JI(){return null}var E0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mf(t){this._internalRoot=t}Xu.prototype.render=Mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Yu(t,e,null,null)};Xu.prototype.unmount=Mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qs(function(){Yu(null,t,null,null)}),e[Cr]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=X_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&ev(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vg(){}function YI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=yu(o);i.call(h)}}var o=w0(e,r,t,0,null,!1,!1,"",vg);return t._reactRootContainer=o,t[Cr]=o.current,aa(t.nodeType===8?t.parentNode:t),Qs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=yu(u);l.call(h)}}var u=Of(t,0,!1,null,null,!1,!1,"",vg);return t._reactRootContainer=u,t[Cr]=u.current,aa(t.nodeType===8?t.parentNode:t),Qs(function(){Yu(e,u,n,r)}),u}function ec(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=yu(o);l.call(u)}}Yu(e,o,t,s)}else o=YI(n,e,t,s,r);return yu(o)}J_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Do(e.pendingLanes);n!==0&&(tf(e,n|1),un(e,lt()),!(xe&6)&&(Qi=lt()+500,As()))}break;case 13:Qs(function(){var r=Rr(t,1);if(r!==null){var s=Xt();Fn(r,t,1,s)}}),Vf(t,1)}};nf=function(t){if(t.tag===13){var e=Rr(t,134217728);if(e!==null){var n=Xt();Fn(e,t,134217728,n)}Vf(t,134217728)}};Y_=function(t){if(t.tag===13){var e=as(t),n=Rr(t,e);if(n!==null){var r=Xt();Fn(n,t,e,r)}Vf(t,e)}};X_=function(){return Oe};Z_=function(t,e){var n=Oe;try{return Oe=t,e()}finally{Oe=n}};Vh=function(t,e,n){switch(e){case"input":if(Ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Hu(r);if(!s)throw Error(F(90));P_(r),Ch(r,s)}}}break;case"textarea":b_(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};U_=Pf;F_=Qs;var XI={usingClientEntryPoint:!1,Events:[Ra,Si,Hu,L_,j_,Pf]},Co={findFiberByHostInstance:Ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZI={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B_(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||JI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Fu=pl.inject(ZI),Xn=pl}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XI;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(F(200));return QI(t,e,null,n)};_n.createRoot=function(t,e){if(!Lf(t))throw Error(F(299));var n=!1,r="",s=E0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Of(t,1,!1,null,null,n,!1,r,s),t[Cr]=e.current,aa(t.nodeType===8?t.parentNode:t),new Mf(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=B_(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Qs(t)};_n.hydrate=function(t,e,n){if(!Zu(e))throw Error(F(200));return ec(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=E0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=w0(e,null,t,1,n??null,s,!1,i,o),t[Cr]=e.current,aa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Xu(e)};_n.render=function(t,e,n){if(!Zu(e))throw Error(F(200));return ec(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Zu(t))throw Error(F(40));return t._reactRootContainer?(Qs(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};_n.unstable_batchedUpdates=Pf;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ec(t,e,n,!1,r)};_n.version="18.3.1-next-f1338f8080-20240426";function T0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T0)}catch(t){console.error(t)}}T0(),T_.exports=_n;var eS=T_.exports,wg=eS;Eh.createRoot=wg.createRoot,Eh.hydrateRoot=wg.hydrateRoot;const tS="modulepreload",nS=function(t){return"/shorts-brain/"+t},Eg={},Tg=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=nS(u),u in Eg)return;Eg[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":tS,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((v,k)=>{p.addEventListener("load",v),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},rS=()=>{};var Ig={};/**
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
 */const I0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},S0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(v=64)),r.push(n[f],n[p],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new iS;const v=i<<2|l>>4;if(r.push(v),h!==64){const k=l<<4&240|h>>2;if(r.push(k),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oS=function(t){const e=I0(t);return S0.encodeByteArray(e,!0)},_u=function(t){return oS(t).replace(/\./g,"")},x0=function(t){try{return S0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const lS=()=>aS().__FIREBASE_DEFAULTS__,uS=()=>{if(typeof process>"u"||typeof Ig>"u")return;const t=Ig.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&x0(t[1]);return e&&JSON.parse(e)},tc=()=>{try{return rS()||lS()||uS()||cS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A0=t=>{var e,n;return(n=(e=tc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},k0=t=>{const e=A0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},C0=()=>{var t;return(t=tc())==null?void 0:t.config},R0=t=>{var e;return(e=tc())==null?void 0:e[`_${t}`]};/**
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
 */function P0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[_u(JSON.stringify(n)),_u(JSON.stringify(o)),""].join(".")}/**
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
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function fS(){var e;const t=(e=tc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yS(){const t=Qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _S(){return!fS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vS(){try{return typeof indexedDB=="object"}catch{return!1}}function wS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ES="FirebaseError";class hr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ES,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TS(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new hr(s,l,r)}}function TS(t,e){return t.replace(IS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const IS=/\{\$([^}]+)}/g;function SS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Js(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Sg(i)&&Sg(o)){if(!Js(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Sg(t){return t!==null&&typeof t=="object"}/**
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
 */function ba(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xS(t,e){const n=new AS(t,e);return n.subscribe.bind(n)}class AS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=oh),s.error===void 0&&(s.error=oh),s.complete===void 0&&(s.complete=oh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oh(){}/**
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
 */function Zt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function so(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jf(t){return(await fetch(t,{credentials:"include"})).ok}let gs=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Vs="[DEFAULT]";/**
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
 */class CS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PS(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RS(t){return t===Vs?void 0:t}function PS(t){return t.instantiationMode==="EAGER"}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const bS={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},DS=we.INFO,OS={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},VS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uf{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=VS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const MS=(t,e)=>e.some(n=>t instanceof n);let xg,Ag;function LS(){return xg||(xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jS(){return Ag||(Ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N0=new WeakMap,pd=new WeakMap,b0=new WeakMap,ah=new WeakMap,Ff=new WeakMap;function US(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(us(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N0.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function FS(t){if(pd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pd.set(t,e)}let md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||b0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $S(t){md=t(md)}function zS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lh(this),e,...n);return b0.set(r,e.sort?e.sort():[e]),us(r)}:jS().includes(t)?function(...e){return t.apply(lh(this),e),us(N0.get(this))}:function(...e){return us(t.apply(lh(this),e))}}function BS(t){return typeof t=="function"?zS(t):(t instanceof IDBTransaction&&FS(t),MS(t,LS())?new Proxy(t,md):t)}function us(t){if(t instanceof IDBRequest)return US(t);if(ah.has(t))return ah.get(t);const e=BS(t);return e!==t&&(ah.set(t,e),Ff.set(e,t)),e}const lh=t=>Ff.get(t);function HS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=us(o);return r&&o.addEventListener("upgradeneeded",u=>{r(us(o.result),u.oldVersion,u.newVersion,us(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const qS=["get","getKey","getAll","getAllKeys","count"],WS=["put","add","delete","clear"],uh=new Map;function kg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uh.get(e))return uh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=WS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return uh.set(e,i),i}$S(t=>({...t,get:(e,n,r)=>kg(e,n)||t.get(e,n,r),has:(e,n)=>!!kg(e,n)||t.has(e,n)}));/**
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
 */class GS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",Cg="0.14.12";/**
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
 */const Nr=new Uf("@firebase/app"),QS="@firebase/app-compat",JS="@firebase/analytics-compat",YS="@firebase/analytics",XS="@firebase/app-check-compat",ZS="@firebase/app-check",ex="@firebase/auth",tx="@firebase/auth-compat",nx="@firebase/database",rx="@firebase/data-connect",sx="@firebase/database-compat",ix="@firebase/functions",ox="@firebase/functions-compat",ax="@firebase/installations",lx="@firebase/installations-compat",ux="@firebase/messaging",cx="@firebase/messaging-compat",hx="@firebase/performance",dx="@firebase/performance-compat",fx="@firebase/remote-config",px="@firebase/remote-config-compat",mx="@firebase/storage",gx="@firebase/storage-compat",yx="@firebase/firestore",_x="@firebase/ai",vx="@firebase/firestore-compat",wx="firebase",Ex="12.13.0";/**
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
 */const yd="[DEFAULT]",Tx={[gd]:"fire-core",[QS]:"fire-core-compat",[YS]:"fire-analytics",[JS]:"fire-analytics-compat",[ZS]:"fire-app-check",[XS]:"fire-app-check-compat",[ex]:"fire-auth",[tx]:"fire-auth-compat",[nx]:"fire-rtdb",[rx]:"fire-data-connect",[sx]:"fire-rtdb-compat",[ix]:"fire-fn",[ox]:"fire-fn-compat",[ax]:"fire-iid",[lx]:"fire-iid-compat",[ux]:"fire-fcm",[cx]:"fire-fcm-compat",[hx]:"fire-perf",[dx]:"fire-perf-compat",[fx]:"fire-rc",[px]:"fire-rc-compat",[mx]:"fire-gcs",[gx]:"fire-gcs-compat",[yx]:"fire-fst",[vx]:"fire-fst-compat",[_x]:"fire-vertex","fire-js":"fire-js",[wx]:"fire-js-all"};/**
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
 */const vu=new Map,Ix=new Map,_d=new Map;function Rg(t,e){try{t.container.addComponent(e)}catch(n){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ys(t){const e=t.name;if(_d.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,t);for(const n of vu.values())Rg(n,t);for(const n of Ix.values())Rg(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Sx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cs=new Na("app","Firebase",Sx);/**
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
 */const si=Ex;function D0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:yd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw cs.create("bad-app-name",{appName:String(s)});if(n||(n=C0()),!n)throw cs.create("no-options");const i=vu.get(s);if(i){if(Js(n,i.options)&&Js(r,i.config))return i;throw cs.create("duplicate-app",{appName:s})}const o=new NS(s);for(const u of _d.values())o.addComponent(u);const l=new xx(n,r,o);return vu.set(s,l),l}function $f(t=yd){const e=vu.get(t);if(!e&&t===yd&&C0())return D0();if(!e)throw cs.create("no-app",{appName:t});return e}function er(t,e,n){let r=Tx[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(o.join(" "));return}Ys(new gs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ax="firebase-heartbeat-database",kx=1,ga="firebase-heartbeat-store";let ch=null;function O0(){return ch||(ch=HS(Ax,kx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ga)}catch(n){console.warn(n)}}}}).catch(t=>{throw cs.create("idb-open",{originalErrorMessage:t.message})})),ch}async function Cx(t){try{const n=(await O0()).transaction(ga),r=await n.objectStore(ga).get(V0(t));return await n.done,r}catch(e){if(e instanceof hr)Nr.warn(e.message);else{const n=cs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(n.message)}}}async function Pg(t,e){try{const r=(await O0()).transaction(ga,"readwrite");await r.objectStore(ga).put(e,V0(t)),await r.done}catch(n){if(n instanceof hr)Nr.warn(n.message);else{const r=cs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nr.warn(r.message)}}}function V0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rx=1024,Px=30;class Nx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ng();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Px){const o=Ox(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ng(),{heartbeatsToSend:r,unsentEntries:s}=bx(this._heartbeatsCache.heartbeats),i=_u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nr.warn(n),""}}}function Ng(){return new Date().toISOString().substring(0,10)}function bx(t,e=Rx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vS()?wS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function bg(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}function Ox(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Vx(t){Ys(new gs("platform-logger",e=>new GS(e),"PRIVATE")),Ys(new gs("heartbeat",e=>new Nx(e),"PRIVATE")),er(gd,Cg,t),er(gd,Cg,"esm2020"),er("fire-js","")}Vx("");function M0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mx=M0,L0=new Na("auth","Firebase",M0());/**
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
 */const wu=new Uf("@firebase/auth");function Lx(t,...e){wu.logLevel<=we.WARN&&wu.warn(`Auth (${si}): ${t}`,...e)}function Ll(t,...e){wu.logLevel<=we.ERROR&&wu.error(`Auth (${si}): ${t}`,...e)}/**
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
 */function or(t,...e){throw Bf(t,...e)}function $n(t,...e){return Bf(t,...e)}function zf(t,e,n){const r={...Mx(),[e]:n};return new Na("auth","Firebase",r).create(e,{appName:t.name})}function Bs(t){return zf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&or(t,"argument-error"),zf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L0.create(t,...e)}function oe(t,e,...n){if(!t)throw Bf(e,...n)}function Er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function br(t,e){t||Er(e)}/**
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
 */function vd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Ux(){return Dg()==="http:"||Dg()==="https:"}function Dg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=dS()||gS()}get(){return Fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hf(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class j0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Hx=new Da(3e4,6e4);function qf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function io(t,e,n,r,s={}){return U0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ba({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return pS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&so(t.emulatorConfig.host)&&(h.credentials="include"),j0.fetch()(await F0(t,t.config.apiHost,n,l),h)})}async function U0(t,e,n){t._canInitEmulator=!1;const r={...zx,...e};try{const s=new Wx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ml(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ml(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ml(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ml(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zf(t,f,h);or(t,f)}}catch(s){if(s instanceof hr)throw s;or(t,"network-request-failed",{message:String(s)})}}async function qx(t,e,n,r,s={}){const i=await io(t,e,n,r,s);return"mfaPendingCredential"in i&&or(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function F0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Hf(t.config,s):`${t.config.apiScheme}://${s}`;return Bx.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Wx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),Hx.get())})}}function ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$n(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Gx(t,e){return io(t,"POST","/v1/accounts:delete",e)}async function Eu(t,e){return io(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ko(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kx(t,e=!1){const n=Zt(t),r=await n.getIdToken(e),s=Wf(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ko(hh(s.auth_time)),issuedAtTime:Ko(hh(s.iat)),expirationTime:Ko(hh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hh(t){return Number(t)*1e3}function Wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const s=x0(n);return s?JSON.parse(s):(Ll("Failed to decode base64 JWT payload"),null)}catch(s){return Ll("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Og(t){const e=Wf(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ya(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hr&&Qx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await ya(t,Eu(e,{idToken:n}));oe(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?$0(s.providerUserInfo):[],o=Xx(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new wd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Yx(t){const e=Zt(t);await Tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Zx(t,e){const n=await U0(t,{},async()=>{const r=ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await F0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&so(t.emulatorConfig.host)&&(u.credentials="include"),j0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eA(t,e){return io(t,"POST","/v2/accounts:revokeToken",qf(t,e))}/**
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
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Og(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Og(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Zx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Li;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
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
 */function Br(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ya(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kx(this,e)}reload(){return Yx(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Bs(this.auth));const e=await this.getIdToken();return await ya(this,Gx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:k,providerData:P,stsTokenManager:N}=n;oe(p&&N,e,"internal-error");const O=Li.fromJSON(this.name,N);oe(typeof p=="string",e,"internal-error"),Br(r,e.name),Br(s,e.name),oe(typeof v=="boolean",e,"internal-error"),oe(typeof k=="boolean",e,"internal-error"),Br(i,e.name),Br(o,e.name),Br(l,e.name),Br(u,e.name),Br(h,e.name),Br(f,e.name);const x=new Mn({uid:p,auth:e,email:s,emailVerified:v,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:O,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(x.providerData=P.map(T=>({...T}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Li;s.updateFromServerResponse(n);const i=new Mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Li;l.updateFromIdToken(r);const u=new Mn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Vg=new Map;function Tr(t){br(t instanceof Function,"Expected a class definition");let e=Vg.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vg.set(t,e),e)}/**
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
 */class z0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z0.type="NONE";const Mg=z0;/**
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
 */function jl(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jl(this.userKey,s.apiKey,i),this.fullPersistenceKey=jl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Eu(this.auth,{idToken:e}).catch(()=>{});return n?Mn._fromGetAccountInfoResponse(this.auth,n,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(Tr(Mg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Tr(Mg);const o=jl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const v=await Eu(e,{idToken:f}).catch(()=>{});if(!v)break;p=await Mn._fromGetAccountInfoResponse(e,v,f)}else p=Mn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ji(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ji(i,e,r))}}/**
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
 */function Lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K0(e))return"Blackberry";if(Q0(e))return"Webos";if(H0(e))return"Safari";if((e.includes("chrome/")||q0(e))&&!e.includes("edge/"))return"Chrome";if(G0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B0(t=Qt()){return/firefox\//i.test(t)}function H0(t=Qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q0(t=Qt()){return/crios\//i.test(t)}function W0(t=Qt()){return/iemobile/i.test(t)}function G0(t=Qt()){return/android/i.test(t)}function K0(t=Qt()){return/blackberry/i.test(t)}function Q0(t=Qt()){return/webos/i.test(t)}function Gf(t=Qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tA(t=Qt()){var e;return Gf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function nA(){return yS()&&document.documentMode===10}function J0(t=Qt()){return Gf(t)||G0(t)||Q0(t)||K0(t)||/windows phone/i.test(t)||W0(t)}/**
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
 */function Y0(t,e=[]){let n;switch(t){case"Browser":n=Lg(Qt());break;case"Worker":n=`${Lg(Qt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
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
 */async function sA(t,e={}){return io(t,"GET","/v2/passwordPolicy",qf(t,e))}/**
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
 */class aA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jg(this),this.idTokenSubscription=new jg(this),this.beforeStateQueue=new rA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Eu(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Bs(this));const n=e?Zt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Bs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Bs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sA(this),n=new oA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tr(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[Tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Lx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rc(t){return Zt(t)}class jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=xS(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lA(t){Kf=t}function uA(t){return Kf.loadJS(t)}function cA(){return Kf.gapiScript}function hA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dA(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Js(i,e??{}))return s;or(s,"already-initialized")}return n.initialize({options:e})}function fA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pA(t,e,n){const r=rc(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=X0(e),{host:o,port:l}=mA(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Js(h,r.config.emulator)&&Js(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,so(o)?jf(`${i}//${o}${u}`):gA()}function X0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mA(t){const e=X0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ug(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ug(o)}}}function Ug(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Z0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,n){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
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
 */async function Ui(t,e){return qx(t,"POST","/v1/accounts:signInWithIdp",qf(t,e))}/**
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
 */const yA="http://localhost";class Xs extends Z0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Xs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:yA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ba(n)}return e}}/**
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
 */class Qf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oa extends Qf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jr extends Oa{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
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
 */class _r extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
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
 */class Yr extends Oa{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class Xr extends Oa{constructor(){super("twitter.com")}static credential(e,n){return Xs._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
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
 */class Ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mn._fromIdTokenResponse(e,r,s),o=Fg(r);return new Ji({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fg(r);return new Ji({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Iu extends hr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Iu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Iu(e,n,r,s)}}function ew(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(t,i,e,r):i})}async function _A(t,e,n=!1){const r=await ya(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ji._forOperation(t,"link",r)}/**
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
 */async function vA(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(Bs(r));const s="reauthenticate";try{const i=await ya(t,ew(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=Wf(i.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),Ji._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&or(r,"user-mismatch"),i}}/**
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
 */async function wA(t,e,n=!1){if(Tn(t.app))return Promise.reject(Bs(t));const r="signIn",s=await ew(t,r,e),i=await Ji._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function EA(t,e,n,r){return Zt(t).onIdTokenChanged(e,n,r)}function TA(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}function tw(t,e,n,r){return Zt(t).onAuthStateChanged(e,n,r)}function IA(t){return Zt(t).signOut()}const Su="__sak";/**
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
 */class nw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SA=1e3,xA=10;class rw extends nw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);nA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rw.type="LOCAL";const AA=rw;/**
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
 */class sw extends nw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sw.type="SESSION";const iw=sw;/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await kA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
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
 */function Jf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class CA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Jf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ow(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function PA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bA(){return ow()?self:null}/**
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
 */const aw="firebaseLocalStorageDb",DA=1,xu="firebaseLocalStorage",lw="fbase_key";class Va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ic(t,e){return t.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function OA(){const t=indexedDB.deleteDatabase(aw);return new Va(t).toPromise()}function Ed(){const t=indexedDB.open(aw,DA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xu,{keyPath:lw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xu)?e(r):(r.close(),await OA(),e(await Ed()))})})}async function $g(t,e,n){const r=ic(t,!0).put({[lw]:e,value:n});return new Va(r).toPromise()}async function VA(t,e){const n=ic(t,!1).get(e),r=await new Va(n).toPromise();return r===void 0?null:r.value}function zg(t,e){const n=ic(t,!0).delete(e);return new Va(n).toPromise()}const MA=800,LA=3;class uw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(bA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await PA(),!this.activeServiceWorker)return;this.sender=new CA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ed();return await $g(e,Su,"1"),await zg(e,Su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ic(s,!1).getAll();return new Va(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uw.type="LOCAL";const jA=uw;new Da(3e4,6e4);/**
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
 */function cw(t,e){return e?Tr(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yf extends Z0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UA(t){return wA(t.auth,new Yf(t),t.bypassAuthState)}function FA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),vA(n,new Yf(t),t.bypassAuthState)}async function $A(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),_A(n,new Yf(t),t.bypassAuthState)}/**
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
 */class hw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UA;case"linkViaPopup":case"linkViaRedirect":return $A;case"reauthViaPopup":case"reauthViaRedirect":return FA;default:or(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zA=new Da(2e3,1e4);async function BA(t,e,n){if(Tn(t.app))return Promise.reject($n(t,"operation-not-supported-in-this-environment"));const r=rc(t);jx(t,e,Qf);const s=cw(r,n);return new Us(r,"signInViaPopup",e,s).executeNotNull()}class Us extends hw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=Jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zA.get())};e()}}Us.currentPopupAction=null;/**
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
 */const HA="pendingRedirect",Ul=new Map;class qA extends hw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await WA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WA(t,e){const n=QA(e),r=KA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function GA(t,e){Ul.set(t._key(),e)}function KA(t){return Tr(t._redirectPersistence)}function QA(t){return jl(HA,t.config.apiKey,t.name)}async function JA(t,e,n=!1){if(Tn(t.app))return Promise.reject(Bs(t));const r=rc(t),s=cw(r,e),o=await new qA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YA=10*60*1e3;class XA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bg(e))}saveEventToCache(e){this.cachedEventUids.add(Bg(e)),this.lastProcessedEventTime=Date.now()}}function Bg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dw(t);default:return!1}}/**
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
 */async function ek(t,e={}){return io(t,"GET","/v1/projects",e)}/**
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
 */const tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nk=/^https?/;async function rk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ek(t);for(const n of e)try{if(sk(n))return}catch{}or(t,"unauthorized-domain")}function sk(t){const e=vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nk.test(n))return!1;if(tk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ik=new Da(3e4,6e4);function Hg(){const t=tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ok(t){return new Promise((e,n)=>{var s,i,o;function r(){Hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hg(),n($n(t,"network-request-failed"))},timeout:ik.get()})}if((i=(s=tr().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=tr().gapi)!=null&&o.load)r();else{const l=hA("iframefcb");return tr()[l]=()=>{gapi.load?r():n($n(t,"network-request-failed"))},uA(`${cA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function ak(t){return Fl=Fl||ok(t),Fl}/**
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
 */const lk=new Da(5e3,15e3),uk="__/auth/iframe",ck="emulator/auth/iframe",hk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fk(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hf(e,ck):`https://${t.config.authDomain}/${uk}`,r={apiKey:e.apiKey,appName:t.name,v:si},s=dk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ba(r).slice(1)}`}async function pk(t){const e=await ak(t),n=tr().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:fk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),l=tr().setTimeout(()=>{i(o)},lk.get());function u(){tr().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const mk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gk=500,yk=600,_k="_blank",vk="http://localhost";class qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wk(t,e,n,r=gk,s=yk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...mk,width:r.toString(),height:s.toString(),top:i,left:o},h=Qt().toLowerCase();n&&(l=q0(h)?_k:n),B0(h)&&(e=e||vk,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[k,P])=>`${v}${k}=${P},`,"");if(tA(h)&&l!=="_self")return Ek(e||"",l),new qg(null);const p=window.open(e||"",l,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new qg(p)}function Ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tk="__/auth/handler",Ik="emulator/auth/handler",Sk=encodeURIComponent("fac");async function Wg(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:s};if(e instanceof Qf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Oa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Sk}=${encodeURIComponent(u)}`:"";return`${xk(t)}?${ba(l).slice(1)}${h}`}function xk({config:t}){return t.emulator?Hf(t,Ik):`https://${t.authDomain}/${Tk}`}/**
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
 */const dh="webStorageSupport";class Ak{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iw,this._completeRedirectFn=JA,this._overrideRedirectResult=GA}async _openPopup(e,n,r,s){var o;br((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Wg(e,n,r,vd(),s);return wk(e,i,Jf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wg(e,n,r,vd(),s);return RA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(br(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pk(e),r=new XA(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dh,{type:dh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[dh];i!==void 0&&n(!!i),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J0()||H0()||Gf()}}const kk=Ak;var Gg="@firebase/auth",Kg="1.13.1";/**
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
 */function Rk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pk(t){Ys(new gs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y0(t)},h=new aA(r,s,i,u);return fA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ys(new gs("auth-internal",e=>{const n=rc(e.getProvider("auth").getImmediate());return(r=>new Ck(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(Gg,Kg,Rk(t)),er(Gg,Kg,"esm2020")}/**
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
 */const Nk=5*60,bk=R0("authIdTokenMaxAge")||Nk;let Qg=null;const Dk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bk)return;const s=n==null?void 0:n.token;Qg!==s&&(Qg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fw(t=$f()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dA(t,{popupRedirectResolver:kk,persistence:[jA,AA,iw]}),r=R0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Dk(i.toString());TA(n,o,()=>o(n.currentUser)),EA(n,l=>o(l))}}const s=A0("auth");return s&&pA(n,`http://${s}`),n}function Ok(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}lA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ok().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pk("Browser");var Vk="firebase",Mk="12.13.0";/**
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
 */const pw="firebasestorage.googleapis.com",Lk="storageBucket",jk=2*60*1e3,Uk=10*60*1e3;/**
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
 */class dr extends hr{constructor(e,n,r=0){super(fh(e),`Firebase Storage: ${n} (${fh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ar;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ar||(ar={}));function fh(t){return"storage/"+t}function Fk(){const t="An unknown error occurred, please check the error payload for server response.";return new dr(ar.UNKNOWN,t)}function $k(){return new dr(ar.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zk(){return new dr(ar.CANCELED,"User canceled the upload/download.")}function Bk(t){return new dr(ar.INVALID_URL,"Invalid URL '"+t+"'.")}function Hk(t){return new dr(ar.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jg(t){return new dr(ar.INVALID_ARGUMENT,t)}function mw(){return new dr(ar.APP_DELETED,"The Firebase app was deleted.")}function qk(t){return new dr(ar.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ln.makeFromUrl(e,n)}catch{return new Ln(e,"")}if(r.path==="")return r;throw Hk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",k=new RegExp(`^https?://${p}/${f}/b/${s}/o${v}`,"i"),P={bucket:1,path:3},N=n===pw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",x=new RegExp(`^https?://${N}/${s}/${O}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:k,indices:P,postModify:h},{regex:x,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<A.length;b++){const M=A[b],U=M.regex.exec(e);if(U){const g=U[M.indices.bucket];let y=U[M.indices.path];y||(y=""),r=new Ln(g,y),M.postModify(r);break}}if(r==null)throw Bk(e);return r}}class Wk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Gk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(k,u())},O)}function v(){i&&clearTimeout(i)}function k(O,...x){if(h){v();return}if(O){v(),f.call(null,O,...x);return}if(u()||o){v(),f.call(null,O,...x);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,p(A)}let P=!1;function N(O){P||(P=!0,v(),!h&&(s!==null?(O||(l=2),clearTimeout(s),p(0)):O||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function Kk(t){t(!1)}/**
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
 */function Qk(t){return t!==void 0}function Yg(t,e,n,r){if(r<e)throw Jg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jg(`Invalid value for '${t}'. Expected ${n} or less.`)}function Jk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Au;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Au||(Au={}));/**
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
 */class Xk{constructor(e,n,r,s,i,o,l,u,h,f,p,v=!0,k=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=v,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,N)=>{this.resolve_=P,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new gl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Au.NO_ERROR,u=i.getStatus();if(!l||Yk(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Au.ABORT;r(!1,new gl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new gl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Qk(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Fk();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?mw():zk();o(u)}else{const u=$k();o(u)}};this.canceled_?n(!1,new gl(!1,null,!0)):this.backoffId_=Gk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Kk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Zk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rC(t,e,n,r,s,i,o=!0,l=!1){const u=Jk(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return tC(f,e),Zk(f,n),eC(f,i),nC(f,r),new Xk(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */class ku{constructor(e,n){this._service=e,n instanceof Ln?this._location=n:this._location=Ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ku(e,n)}get root(){const e=new Ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iC(this._location.path)}get storage(){return this._service}get parent(){const e=sC(this._location.path);if(e===null)return null;const n=new Ln(this._location.bucket,e);return new ku(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qk(e)}}function Xg(t,e){const n=e==null?void 0:e[Lk];return n==null?null:Ln.makeFromBucketSpec(n,t)}function oC(t,e,n,r={}){t.host=`${e}:${n}`;const s=so(e);s&&jf(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:P0(i,t.app.options.projectId))}class aC{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=pw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jk,this._maxUploadRetryTime=Uk,this._requests=new Set,s!=null?this._bucket=Ln.makeFromBucketSpec(s,this._host):this._bucket=Xg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ln.makeFromBucketSpec(this._url,e):this._bucket=Xg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ku(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Wk(mw());{const o=rC(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Zg="@firebase/storage",ey="0.14.3";/**
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
 */const gw="storage";function lC(t=$f(),e){t=Zt(t);const r=nc(t,gw).getImmediate({identifier:e}),s=k0("storage");return s&&uC(r,...s),r}function uC(t,e,n,r={}){oC(t,e,n,r)}function cC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new aC(n,r,s,e,si)}function hC(){Ys(new gs(gw,cC,"PUBLIC").setMultipleInstances(!0)),er(Zg,ey,""),er(Zg,ey,"esm2020")}hC();var ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hs,yw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function w(){}w.prototype=y.prototype,g.F=y.prototype,g.prototype=new w,g.prototype.constructor=g,g.D=function(S,I,C){for(var E=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)E[ne-2]=arguments[ne];return y.prototype[I].apply(S,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(g,y,w){w||(w=0);const S=Array(16);if(typeof y=="string")for(var I=0;I<16;++I)S[I]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(I=0;I<16;++I)S[I]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=g.g[0],w=g.g[1],I=g.g[2];let C=g.g[3],E;E=y+(C^w&(I^C))+S[0]+3614090360&4294967295,y=w+(E<<7&4294967295|E>>>25),E=C+(I^y&(w^I))+S[1]+3905402710&4294967295,C=y+(E<<12&4294967295|E>>>20),E=I+(w^C&(y^w))+S[2]+606105819&4294967295,I=C+(E<<17&4294967295|E>>>15),E=w+(y^I&(C^y))+S[3]+3250441966&4294967295,w=I+(E<<22&4294967295|E>>>10),E=y+(C^w&(I^C))+S[4]+4118548399&4294967295,y=w+(E<<7&4294967295|E>>>25),E=C+(I^y&(w^I))+S[5]+1200080426&4294967295,C=y+(E<<12&4294967295|E>>>20),E=I+(w^C&(y^w))+S[6]+2821735955&4294967295,I=C+(E<<17&4294967295|E>>>15),E=w+(y^I&(C^y))+S[7]+4249261313&4294967295,w=I+(E<<22&4294967295|E>>>10),E=y+(C^w&(I^C))+S[8]+1770035416&4294967295,y=w+(E<<7&4294967295|E>>>25),E=C+(I^y&(w^I))+S[9]+2336552879&4294967295,C=y+(E<<12&4294967295|E>>>20),E=I+(w^C&(y^w))+S[10]+4294925233&4294967295,I=C+(E<<17&4294967295|E>>>15),E=w+(y^I&(C^y))+S[11]+2304563134&4294967295,w=I+(E<<22&4294967295|E>>>10),E=y+(C^w&(I^C))+S[12]+1804603682&4294967295,y=w+(E<<7&4294967295|E>>>25),E=C+(I^y&(w^I))+S[13]+4254626195&4294967295,C=y+(E<<12&4294967295|E>>>20),E=I+(w^C&(y^w))+S[14]+2792965006&4294967295,I=C+(E<<17&4294967295|E>>>15),E=w+(y^I&(C^y))+S[15]+1236535329&4294967295,w=I+(E<<22&4294967295|E>>>10),E=y+(I^C&(w^I))+S[1]+4129170786&4294967295,y=w+(E<<5&4294967295|E>>>27),E=C+(w^I&(y^w))+S[6]+3225465664&4294967295,C=y+(E<<9&4294967295|E>>>23),E=I+(y^w&(C^y))+S[11]+643717713&4294967295,I=C+(E<<14&4294967295|E>>>18),E=w+(C^y&(I^C))+S[0]+3921069994&4294967295,w=I+(E<<20&4294967295|E>>>12),E=y+(I^C&(w^I))+S[5]+3593408605&4294967295,y=w+(E<<5&4294967295|E>>>27),E=C+(w^I&(y^w))+S[10]+38016083&4294967295,C=y+(E<<9&4294967295|E>>>23),E=I+(y^w&(C^y))+S[15]+3634488961&4294967295,I=C+(E<<14&4294967295|E>>>18),E=w+(C^y&(I^C))+S[4]+3889429448&4294967295,w=I+(E<<20&4294967295|E>>>12),E=y+(I^C&(w^I))+S[9]+568446438&4294967295,y=w+(E<<5&4294967295|E>>>27),E=C+(w^I&(y^w))+S[14]+3275163606&4294967295,C=y+(E<<9&4294967295|E>>>23),E=I+(y^w&(C^y))+S[3]+4107603335&4294967295,I=C+(E<<14&4294967295|E>>>18),E=w+(C^y&(I^C))+S[8]+1163531501&4294967295,w=I+(E<<20&4294967295|E>>>12),E=y+(I^C&(w^I))+S[13]+2850285829&4294967295,y=w+(E<<5&4294967295|E>>>27),E=C+(w^I&(y^w))+S[2]+4243563512&4294967295,C=y+(E<<9&4294967295|E>>>23),E=I+(y^w&(C^y))+S[7]+1735328473&4294967295,I=C+(E<<14&4294967295|E>>>18),E=w+(C^y&(I^C))+S[12]+2368359562&4294967295,w=I+(E<<20&4294967295|E>>>12),E=y+(w^I^C)+S[5]+4294588738&4294967295,y=w+(E<<4&4294967295|E>>>28),E=C+(y^w^I)+S[8]+2272392833&4294967295,C=y+(E<<11&4294967295|E>>>21),E=I+(C^y^w)+S[11]+1839030562&4294967295,I=C+(E<<16&4294967295|E>>>16),E=w+(I^C^y)+S[14]+4259657740&4294967295,w=I+(E<<23&4294967295|E>>>9),E=y+(w^I^C)+S[1]+2763975236&4294967295,y=w+(E<<4&4294967295|E>>>28),E=C+(y^w^I)+S[4]+1272893353&4294967295,C=y+(E<<11&4294967295|E>>>21),E=I+(C^y^w)+S[7]+4139469664&4294967295,I=C+(E<<16&4294967295|E>>>16),E=w+(I^C^y)+S[10]+3200236656&4294967295,w=I+(E<<23&4294967295|E>>>9),E=y+(w^I^C)+S[13]+681279174&4294967295,y=w+(E<<4&4294967295|E>>>28),E=C+(y^w^I)+S[0]+3936430074&4294967295,C=y+(E<<11&4294967295|E>>>21),E=I+(C^y^w)+S[3]+3572445317&4294967295,I=C+(E<<16&4294967295|E>>>16),E=w+(I^C^y)+S[6]+76029189&4294967295,w=I+(E<<23&4294967295|E>>>9),E=y+(w^I^C)+S[9]+3654602809&4294967295,y=w+(E<<4&4294967295|E>>>28),E=C+(y^w^I)+S[12]+3873151461&4294967295,C=y+(E<<11&4294967295|E>>>21),E=I+(C^y^w)+S[15]+530742520&4294967295,I=C+(E<<16&4294967295|E>>>16),E=w+(I^C^y)+S[2]+3299628645&4294967295,w=I+(E<<23&4294967295|E>>>9),E=y+(I^(w|~C))+S[0]+4096336452&4294967295,y=w+(E<<6&4294967295|E>>>26),E=C+(w^(y|~I))+S[7]+1126891415&4294967295,C=y+(E<<10&4294967295|E>>>22),E=I+(y^(C|~w))+S[14]+2878612391&4294967295,I=C+(E<<15&4294967295|E>>>17),E=w+(C^(I|~y))+S[5]+4237533241&4294967295,w=I+(E<<21&4294967295|E>>>11),E=y+(I^(w|~C))+S[12]+1700485571&4294967295,y=w+(E<<6&4294967295|E>>>26),E=C+(w^(y|~I))+S[3]+2399980690&4294967295,C=y+(E<<10&4294967295|E>>>22),E=I+(y^(C|~w))+S[10]+4293915773&4294967295,I=C+(E<<15&4294967295|E>>>17),E=w+(C^(I|~y))+S[1]+2240044497&4294967295,w=I+(E<<21&4294967295|E>>>11),E=y+(I^(w|~C))+S[8]+1873313359&4294967295,y=w+(E<<6&4294967295|E>>>26),E=C+(w^(y|~I))+S[15]+4264355552&4294967295,C=y+(E<<10&4294967295|E>>>22),E=I+(y^(C|~w))+S[6]+2734768916&4294967295,I=C+(E<<15&4294967295|E>>>17),E=w+(C^(I|~y))+S[13]+1309151649&4294967295,w=I+(E<<21&4294967295|E>>>11),E=y+(I^(w|~C))+S[4]+4149444226&4294967295,y=w+(E<<6&4294967295|E>>>26),E=C+(w^(y|~I))+S[11]+3174756917&4294967295,C=y+(E<<10&4294967295|E>>>22),E=I+(y^(C|~w))+S[2]+718787259&4294967295,I=C+(E<<15&4294967295|E>>>17),E=w+(C^(I|~y))+S[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,g.g[2]=g.g[2]+I&4294967295,g.g[3]=g.g[3]+C&4294967295}r.prototype.v=function(g,y){y===void 0&&(y=g.length);const w=y-this.blockSize,S=this.C;let I=this.h,C=0;for(;C<y;){if(I==0)for(;C<=w;)s(this,g,C),C+=this.blockSize;if(typeof g=="string"){for(;C<y;)if(S[I++]=g.charCodeAt(C++),I==this.blockSize){s(this,S),I=0;break}}else for(;C<y;)if(S[I++]=g[C++],I==this.blockSize){s(this,S),I=0;break}}this.h=I,this.o+=y},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;y=this.o*8;for(var w=g.length-8;w<g.length;++w)g[w]=y&255,y/=256;for(this.v(g),g=Array(16),y=0,w=0;w<4;++w)for(let S=0;S<32;S+=8)g[y++]=this.g[w]>>>S&255;return g};function i(g,y){var w=l;return Object.prototype.hasOwnProperty.call(w,g)?w[g]:w[g]=y(g)}function o(g,y){this.h=y;const w=[];let S=!0;for(let I=g.length-1;I>=0;I--){const C=g[I]|0;S&&C==y||(w[I]=C,S=!1)}this.g=w}var l={};function u(g){return-128<=g&&g<128?i(g,function(y){return new o([y|0],y<0?-1:0)}):new o([g|0],g<0?-1:0)}function h(g){if(isNaN(g)||!isFinite(g))return p;if(g<0)return O(h(-g));const y=[];let w=1;for(let S=0;g>=w;S++)y[S]=g/w|0,w*=4294967296;return new o(y,0)}function f(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return O(f(g.substring(1),y));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let S=p;for(let C=0;C<g.length;C+=8){var I=Math.min(8,g.length-C);const E=parseInt(g.substring(C,C+I),y);I<8?(I=h(Math.pow(y,I)),S=S.j(I).add(h(E))):(S=S.j(w),S=S.add(h(E)))}return S}var p=u(0),v=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();let g=0,y=1;for(let w=0;w<this.g.length;w++){const S=this.i(w);g+=(S>=0?S:4294967296+S)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(P(this))return"0";if(N(this))return"-"+O(this).toString(g);const y=h(Math.pow(g,6));var w=this;let S="";for(;;){const I=b(w,y).g;w=x(w,I.j(y));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(g);if(w=I,P(w))return C+S;for(;C.length<6;)C="0"+C;S=C+S}},t.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function P(g){if(g.h!=0)return!1;for(let y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function N(g){return g.h==-1}t.l=function(g){return g=x(this,g),N(g)?-1:P(g)?0:1};function O(g){const y=g.g.length,w=[];for(let S=0;S<y;S++)w[S]=~g.g[S];return new o(w,~g.h).add(v)}t.abs=function(){return N(this)?O(this):this},t.add=function(g){const y=Math.max(this.g.length,g.g.length),w=[];let S=0;for(let I=0;I<=y;I++){let C=S+(this.i(I)&65535)+(g.i(I)&65535),E=(C>>>16)+(this.i(I)>>>16)+(g.i(I)>>>16);S=E>>>16,C&=65535,E&=65535,w[I]=E<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function x(g,y){return g.add(O(y))}t.j=function(g){if(P(this)||P(g))return p;if(N(this))return N(g)?O(this).j(O(g)):O(O(this).j(g));if(N(g))return O(this.j(O(g)));if(this.l(k)<0&&g.l(k)<0)return h(this.m()*g.m());const y=this.g.length+g.g.length,w=[];for(var S=0;S<2*y;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(let I=0;I<g.g.length;I++){const C=this.i(S)>>>16,E=this.i(S)&65535,ne=g.i(I)>>>16,ae=g.i(I)&65535;w[2*S+2*I]+=E*ae,T(w,2*S+2*I),w[2*S+2*I+1]+=C*ae,T(w,2*S+2*I+1),w[2*S+2*I+1]+=E*ne,T(w,2*S+2*I+1),w[2*S+2*I+2]+=C*ne,T(w,2*S+2*I+2)}for(g=0;g<y;g++)w[g]=w[2*g+1]<<16|w[2*g];for(g=y;g<2*y;g++)w[g]=0;return new o(w,0)};function T(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function A(g,y){this.g=g,this.h=y}function b(g,y){if(P(y))throw Error("division by zero");if(P(g))return new A(p,p);if(N(g))return y=b(O(g),y),new A(O(y.g),O(y.h));if(N(y))return y=b(g,O(y)),new A(O(y.g),y.h);if(g.g.length>30){if(N(g)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var w=v,S=y;S.l(g)<=0;)w=M(w),S=M(S);var I=U(w,1),C=U(S,1);for(S=U(S,2),w=U(w,2);!P(S);){var E=C.add(S);E.l(g)<=0&&(I=I.add(w),C=E),S=U(S,1),w=U(w,1)}return y=x(g,I.j(y)),new A(I,y)}for(I=p;g.l(y)>=0;){for(w=Math.max(1,Math.floor(g.m()/y.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),C=h(w),E=C.j(y);N(E)||E.l(g)>0;)w-=S,C=h(w),E=C.j(y);P(C)&&(C=v),I=I.add(C),g=x(g,E)}return new A(I,g)}t.B=function(g){return b(this,g).h},t.and=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let S=0;S<y;S++)w[S]=this.i(S)&g.i(S);return new o(w,this.h&g.h)},t.or=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let S=0;S<y;S++)w[S]=this.i(S)|g.i(S);return new o(w,this.h|g.h)},t.xor=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let S=0;S<y;S++)w[S]=this.i(S)^g.i(S);return new o(w,this.h^g.h)};function M(g){const y=g.g.length+1,w=[];for(let S=0;S<y;S++)w[S]=g.i(S)<<1|g.i(S-1)>>>31;return new o(w,g.h)}function U(g,y){const w=y>>5;y%=32;const S=g.g.length-w,I=[];for(let C=0;C<S;C++)I[C]=y>0?g.i(C+w)>>>y|g.i(C+w+1)<<32-y:g.i(C+w);return new o(I,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,yw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,hs=o}).apply(typeof ty<"u"?ty:typeof self<"u"?self:typeof window<"u"?window:{});var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _w,Vo,vw,$l,Td,ww,Ew,Tw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yl=="object"&&yl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var R=a[_];if(!(R in d))break e;d=d[R]}a=a[a.length-1],_=d[a],c=c(_),c!=_&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],_;for(_ in c)Object.prototype.hasOwnProperty.call(c,_)&&d.push([_,c[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,R,D){for(var H=Array(arguments.length-2),me=2;me<arguments.length;me++)H[me-2]=arguments[me];return c.prototype[R].apply(_,H)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const c=a.length;if(c>0){const d=Array(c);for(let _=0;_<c;_++)d[_]=a[_];return d}return[]}function P(a,c){for(let _=1;_<arguments.length;_++){const R=arguments[_];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const D=R.length||0;a.length=d+D;for(let H=0;H<D;H++)a[d+H]=R[H]}else a.push(R)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(a){o.setTimeout(()=>{throw a},0)}function x(){var a=g;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,d){const _=A.get();_.set(c,d),this.h?this.h.next=_:this.g=_,this.h=_}}var A=new N(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,g=new T,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(w)}};function w(){for(var a;a=x();){try{a.h.call(a.g)}catch(d){O(d)}var c=A;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}U=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function ne(a,c){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(ne,I),ne.prototype.init=function(a,c){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ae="closure_listenable_"+(Math.random()*1e6|0),Ut=0;function Ee(a,c,d,_,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!_,this.ha=R,this.key=++Ut,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,c,d){for(const _ in a)c.call(d,a[_],_,a)}function $(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ie(a){const c={};for(const d in a)c[d]=a[d];return c}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ke(a,c){let d,_;for(let R=1;R<arguments.length;R++){_=arguments[R];for(d in _)a[d]=_[d];for(let D=0;D<ce.length;D++)d=ce[D],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function ut(a){this.src=a,this.g={},this.h=0}ut.prototype.add=function(a,c,d,_,R){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const H=gt(a,c,_,R);return H>-1?(c=a[H],d||(c.fa=!1)):(c=new Ee(c,this.src,D,!!_,R),c.fa=d,a.push(c)),c};function Ft(a,c){const d=c.type;if(d in a.g){var _=a.g[d],R=Array.prototype.indexOf.call(_,c,void 0),D;(D=R>=0)&&Array.prototype.splice.call(_,R,1),D&&(B(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function gt(a,c,d,_){for(let R=0;R<a.length;++R){const D=a[R];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==_)return R}return-1}var Tt="closure_lm_"+(Math.random()*1e6|0),cn={};function Jt(a,c,d,_,R){if(Array.isArray(c)){for(let D=0;D<c.length;D++)Jt(a,c[D],d,_,R);return null}return d=q(d),a&&a[ae]?a.J(c,d,l(_)?!!_.capture:!1,R):Pt(a,c,d,!1,_,R)}function Pt(a,c,d,_,R,D){if(!c)throw Error("Invalid event type");const H=l(R)?!!R.capture:!!R;let me=V(a);if(me||(a[Tt]=me=new ut(a)),d=me.add(c,d,_,H,D),d.proxy)return d;if(_=hn(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)C||(R=H),R===void 0&&(R=!1),a.addEventListener(c.toString(),_,R);else if(a.attachEvent)a.attachEvent(ci(c.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function hn(){function a(d){return c.call(a.src,a.listener,d)}const c=wc;return a}function dn(a,c,d,_,R){if(Array.isArray(c))for(var D=0;D<c.length;D++)dn(a,c[D],d,_,R);else _=l(_)?!!_.capture:!!_,d=q(d),a&&a[ae]?(a=a.i,D=String(c).toString(),D in a.g&&(c=a.g[D],d=gt(c,d,_,R),d>-1&&(B(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[D],a.h--)))):a&&(a=V(a))&&(c=a.g[c.toString()],a=-1,c&&(a=gt(c,d,_,R)),(d=a>-1?c[a]:null)&&ui(d))}function ui(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[ae])Ft(c.i,a);else{var d=a.type,_=a.proxy;c.removeEventListener?c.removeEventListener(d,_,a.capture):c.detachEvent?c.detachEvent(ci(d),_):c.addListener&&c.removeListener&&c.removeListener(_),(d=V(c))?(Ft(d,a),d.h==0&&(d.src=null,c[Tt]=null)):B(a)}}}function ci(a){return a in cn?cn[a]:cn[a]="on"+a}function wc(a,c){if(a.da)a=!0;else{c=new ne(c,this);const d=a.listener,_=a.ha||a.src;a.fa&&ui(a),a=d.call(_,c)}return a}function V(a){return a=a[Tt],a instanceof ut?a:null}var z="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(a){return typeof a=="function"?a:(a[z]||(a[z]=function(c){return a.handleEvent(c)}),a[z])}function W(){S.call(this),this.i=new ut(this),this.M=this,this.G=null}p(W,S),W.prototype[ae]=!0,W.prototype.removeEventListener=function(a,c,d,_){dn(this,a,c,d,_)};function K(a,c){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=c.type||c,typeof c=="string")c=new I(c,a);else if(c instanceof I)c.target=c.target||a;else{var R=c;c=new I(_,a),Ke(c,R)}R=!0;let D,H;if(d)for(H=d.length-1;H>=0;H--)D=c.g=d[H],R=re(D,_,!0,c)&&R;if(D=c.g=a,R=re(D,_,!0,c)&&R,R=re(D,_,!1,c)&&R,d)for(H=0;H<d.length;H++)D=c.g=d[H],R=re(D,_,!1,c)&&R}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let _=0;_<d.length;_++)B(d[_]);delete a.g[c],a.h--}}this.G=null},W.prototype.J=function(a,c,d,_){return this.i.add(String(a),c,!1,d,_)},W.prototype.K=function(a,c,d,_){return this.i.add(String(a),c,!0,d,_)};function re(a,c,d,_){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let D=0;D<c.length;++D){const H=c[D];if(H&&!H.da&&H.capture==d){const me=H.listener,yt=H.ha||H.src;H.fa&&Ft(a.i,H),R=me.call(yt,_)!==!1&&R}}return R&&!_.defaultPrevented}function te(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function le(a){a.g=te(()=>{a.g=null,a.i&&(a.i=!1,le(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class qe extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:le(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(a){S.call(this),this.h=a,this.g={}}p(tt,S);var It=[];function ct(a){Y(a.g,function(c,d){this.g.hasOwnProperty(d)&&ui(c)},a),a.g={}}tt.prototype.N=function(){tt.Z.N.call(this),ct(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nt=o.JSON.stringify,rt=o.JSON.parse,Mr=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function St(){}function Rn(){}var fr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function hi(){I.call(this,"d")}p(hi,I);function ks(){I.call(this,"c")}p(ks,I);var pr={},fe=null;function Ce(){return fe=fe||new W}pr.Ia="serverreachability";function X(a){I.call(this,pr.Ia,a)}p(X,I);function Ne(a){const c=Ce();K(c,new X(c))}pr.STAT_EVENT="statevent";function pe(a,c){I.call(this,pr.STAT_EVENT,a),this.stat=c}p(pe,I);function Ae(a){const c=Ce();K(c,new pe(c,a))}pr.Ja="timingevent";function Te(a,c){I.call(this,pr.Ja,a),this.size=c}p(Te,I);function Ie(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Re(){this.g=!0}Re.prototype.ua=function(){this.g=!1};function ke(a,c,d,_,R,D){a.info(function(){if(a.g)if(D){var H="",me=D.split("&");for(let Me=0;Me<me.length;Me++){var yt=me[Me].split("=");if(yt.length>1){const xt=yt[0];yt=yt[1];const Gn=xt.split("_");H=Gn.length>=2&&Gn[1]=="type"?H+(xt+"="+yt+"&"):H+(xt+"=redacted&")}}}else H=null;else H=D;return"XMLHTTP REQ ("+_+") [attempt "+R+"]: "+c+`
`+d+`
`+H})}function be(a,c,d,_,R,D,H){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+R+"]: "+c+`
`+d+`
`+D+" "+H})}function ve(a,c,d,_){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+De(a,d)+(_?" "+_:"")})}function st(a,c){a.info(function(){return"TIMEOUT: "+c})}Re.prototype.info=function(){};function De(a,c){if(!a.g)return c;if(!c)return null;try{const D=JSON.parse(c);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var R=_[0];if(R!="noop"&&R!="stop"&&R!="close")for(let H=1;H<_.length;H++)_[H]=""}}}}return nt(D)}catch{return c}}var Ve={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$t={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qn;function it(){}p(it,St),it.prototype.g=function(){return new XMLHttpRequest},qn=new it;function ht(a){return encodeURIComponent(String(a))}function Cs(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Qe(a,c,d,_){this.j=a,this.i=c,this.l=d,this.S=_||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}var Pp={},Ec={};function Tc(a,c,d){a.M=1,a.A=Ha(Wn(c)),a.u=d,a.R=!0,Np(a,null)}function Np(a,c){a.F=Date.now(),Ba(a),a.B=Wn(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Hp(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Nt,a.g=lm(a.j,d?c:null,!a.u),a.P>0&&(a.O=new qe(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,_=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(It[0]=R.toString()),R=It);for(let D=0;D<R.length;D++){const H=Jt(d,R[D],_||c.handleEvent,!1,c.h||c);if(!H)break;c.g[H.key]=H}c=a.J?ie(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),Ne(),ke(a.i,a.v,a.B,a.l,a.S,a.u)}Qe.prototype.ba=function(a){a=a.target;const c=this.O;c&&Ur(a)==3?c.j():this.Y(a)},Qe.prototype.Y=function(a){try{if(a==this.g)e:{const me=Ur(this.g),yt=this.g.ya(),Me=this.g.ca();if(!(me<3)&&(me!=3||this.g&&(this.h.h||this.g.la()||Yp(this.g)))){this.K||me!=4||yt==7||(yt==8||Me<=0?Ne(3):Ne(2)),Ic(this);var c=this.g.ca();this.X=c;var d=h1(this);if(this.o=c==200,be(this.i,this.v,this.B,this.l,this.S,me,c),this.o){if(this.U&&!this.L){t:{if(this.g){var _,R=this.g;if((_=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(_)){var D=_;break t}}D=null}if(a=D)ve(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Sc(this,a);else{this.o=!1,this.m=3,Ae(12),Rs(this),co(this);break e}}if(this.R){a=!0;let xt;for(;!this.K&&this.C<d.length;)if(xt=d1(this,d),xt==Ec){me==4&&(this.m=4,Ae(14),a=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Pp){this.m=4,Ae(15),ve(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ve(this.i,this.l,xt,null),Sc(this,xt);if(bp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||d.length!=0||this.h.h||(this.m=1,Ae(16),a=!1),this.o=this.o&&a,!a)ve(this.i,this.l,d,"[Invalid Chunked Response]"),Rs(this),co(this);else if(d.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),bc(H),H.P=!0,Ae(11))}}else ve(this.i,this.l,d,null),Sc(this,d);me==4&&Rs(this),this.o&&!this.K&&(me==4?sm(this.j,this):(this.o=!1,Ba(this)))}else A1(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ae(12)):(this.m=0,Ae(13)),Rs(this),co(this)}}}catch{}finally{}};function h1(a){if(!bp(a))return a.g.la();const c=Yp(a.g);if(c==="")return"";let d="";const _=c.length,R=Ur(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Rs(a),co(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<_;D++)a.h.h=!0,d+=a.h.i.decode(c[D],{stream:!(R&&D==_-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function bp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function d1(a,c){var d=a.C,_=c.indexOf(`
`,d);return _==-1?Ec:(d=Number(c.substring(d,_)),isNaN(d)?Pp:(_+=1,_+d>c.length?Ec:(c=c.slice(_,_+d),a.C=_+d,c)))}Qe.prototype.cancel=function(){this.K=!0,Rs(this)};function Ba(a){a.T=Date.now()+a.H,Dp(a,a.H)}function Dp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ie(h(a.aa,a),c)}function Ic(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Qe.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(st(this.i,this.B),this.M!=2&&(Ne(),Ae(17)),Rs(this),this.m=2,co(this)):Dp(this,this.T-a)};function co(a){a.j.I==0||a.K||sm(a.j,a)}function Rs(a){Ic(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,ct(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Sc(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||xc(d.h,a))){if(!a.L&&xc(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var R=_;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Qa(d),Ga(d);else break e;Nc(d),Ae(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ie(h(d.Va,d),6e3));Mp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Ns(d,11)}else if((a.L||d.g==a)&&Qa(d),!E(c))for(R=d.Ba.g.parse(c),c=0;c<R.length;c++){let Me=R[c];const xt=Me[0];if(!(xt<=d.K))if(d.K=xt,Me=Me[1],d.I==2)if(Me[0]=="c"){d.M=Me[1],d.ba=Me[2];const Gn=Me[3];Gn!=null&&(d.ka=Gn,d.j.info("VER="+d.ka));const bs=Me[4];bs!=null&&(d.za=bs,d.j.info("SVER="+d.za));const Fr=Me[5];Fr!=null&&typeof Fr=="number"&&Fr>0&&(_=1.5*Fr,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const $r=a.g;if($r){const Ya=$r.g?$r.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ya){var D=_.h;D.g||Ya.indexOf("spdy")==-1&&Ya.indexOf("quic")==-1&&Ya.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ac(D,D.h),D.h=null))}if(_.G){const Dc=$r.g?$r.g.getResponseHeader("X-HTTP-Session-Id"):null;Dc&&(_.wa=Dc,Fe(_.J,_.G,Dc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var H=a;if(_.na=am(_,_.L?_.ba:null,_.W),H.L){Lp(_.h,H);var me=H,yt=_.O;yt&&(me.H=yt),me.D&&(Ic(me),Ba(me)),_.g=H}else nm(_);d.i.length>0&&Ka(d)}else Me[0]!="stop"&&Me[0]!="close"||Ns(d,7);else d.I==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Ns(d,7):Pc(d):Me[0]!="noop"&&d.l&&d.l.qa(Me),d.A=0)}}Ne(4)}catch{}}var f1=class{constructor(a,c){this.g=a,this.map=c}};function Op(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Mp(a){return a.h?1:a.g?a.g.size:0}function xc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ac(a,c){a.g?a.g.add(c):a.h=c}function Lp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Op.prototype.cancel=function(){if(this.i=jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return k(a.i)}var Up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function p1(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let R,D=null;_>=0?(R=a[d].substring(0,_),D=a[d].substring(_+1)):R=a[d],c(R,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Lr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Lr?(this.l=a.l,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.u),this.h=a.h,kc(this,qp(a.i)),this.m=a.m):a&&(c=String(a).match(Up))?(this.l=!1,ho(this,c[1]||"",!0),this.o=po(c[2]||""),this.g=po(c[3]||"",!0),fo(this,c[4]),this.h=po(c[5]||"",!0),kc(this,c[6]||"",!0),this.m=po(c[7]||"")):(this.l=!1,this.i=new go(null,this.l))}Lr.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(mo(c,Fp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(mo(c,Fp,!0),"@"),a.push(ht(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(mo(d,d.charAt(0)=="/"?y1:g1,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",mo(d,v1)),a.join("")},Lr.prototype.resolve=function(a){const c=Wn(this);let d=!!a.j;d?ho(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var _=a.h;if(d)fo(c,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var R=c.h.lastIndexOf("/");R!=-1&&(_=c.h.slice(0,R+1)+_)}if(R=_,R==".."||R==".")_="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){_=R.lastIndexOf("/",0)==0,R=R.split("/");const D=[];for(let H=0;H<R.length;){const me=R[H++];me=="."?_&&H==R.length&&D.push(""):me==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),_&&H==R.length&&D.push("")):(D.push(me),_=!0)}_=D.join("/")}else _=R}return d?c.h=_:d=a.i.toString()!=="",d?kc(c,qp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Wn(a){return new Lr(a)}function ho(a,c,d){a.j=d?po(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function kc(a,c,d){c instanceof go?(a.i=c,w1(a.i,a.l)):(d||(c=mo(c,_1)),a.i=new go(c,a.l))}function Fe(a,c,d){a.i.set(c,d)}function Ha(a){return Fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function po(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mo(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,m1),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function m1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fp=/[#\/\?@]/g,g1=/[#\?:]/g,y1=/[#\?]/g,_1=/[#\?@]/g,v1=/#/g;function go(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ps(a){a.g||(a.g=new Map,a.h=0,a.i&&p1(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=go.prototype,t.add=function(a,c){Ps(this),this.i=null,a=di(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function $p(a,c){Ps(a),c=di(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function zp(a,c){return Ps(a),c=di(a,c),a.g.has(c)}t.forEach=function(a,c){Ps(this),this.g.forEach(function(d,_){d.forEach(function(R){a.call(c,R,_,this)},this)},this)};function Bp(a,c){Ps(a);let d=[];if(typeof c=="string")zp(a,c)&&(d=d.concat(a.g.get(di(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Ps(this),this.i=null,a=di(this,a),zp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Bp(this,a),a.length>0?String(a[0]):c):c};function Hp(a,c,d){$p(a,c),d.length>0&&(a.i=null,a.g.set(di(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let _=0;_<c.length;_++){var d=c[_];const R=ht(d);d=Bp(this,d);for(let D=0;D<d.length;D++){let H=R;d[D]!==""&&(H+="="+ht(d[D])),a.push(H)}}return this.i=a.join("&")};function qp(a){const c=new go;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function di(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function w1(a,c){c&&!a.j&&(Ps(a),a.i=null,a.g.forEach(function(d,_){const R=_.toLowerCase();_!=R&&($p(this,_),Hp(this,R,d))},a)),a.j=c}function E1(a,c){const d=new Re;if(o.Image){const _=new Image;_.onload=f(jr,d,"TestLoadImage: loaded",!0,c,_),_.onerror=f(jr,d,"TestLoadImage: error",!1,c,_),_.onabort=f(jr,d,"TestLoadImage: abort",!1,c,_),_.ontimeout=f(jr,d,"TestLoadImage: timeout",!1,c,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else c(!1)}function T1(a,c){const d=new Re,_=new AbortController,R=setTimeout(()=>{_.abort(),jr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(R),D.ok?jr(d,"TestPingServer: ok",!0,c):jr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),jr(d,"TestPingServer: error",!1,c)})}function jr(a,c,d,_,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),_(d)}catch{}}function I1(){this.g=new Mr}function Cc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Cc,St),Cc.prototype.g=function(){return new qa(this.i,this.h)};function qa(a,c){W.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(qa,W),t=qa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,_o(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_o(this)),this.g&&(this.readyState=3,_o(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Wp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Wp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?yo(this):_o(this),this.readyState==3&&Wp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,yo(this))},t.Na=function(a){this.g&&(this.response=a,yo(this))},t.ga=function(){this.g&&yo(this)};function yo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,_o(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function _o(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gp(a){let c="";return Y(a,function(d,_){c+=_,c+=":",c+=d,c+=`\r
`}),c}function Rc(a,c,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Gp(d),typeof a=="string"?d!=null&&ht(d):Fe(a,c,d))}function Ze(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ze,W);var S1=/^https?$/i,x1=["POST","PUT"];t=Ze.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qn.g(),this.g.onreadystatechange=v(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Kp(this,D);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var R in _)d.set(R,_[R]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())d.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(x1,c,void 0)>=0)||_||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,H]of d)this.g.setRequestHeader(D,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){Kp(this,D)}};function Kp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Qp(a),Wa(a)}function Qp(a){a.A||(a.A=!0,K(a,"complete"),K(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,K(this,"complete"),K(this,"abort"),Wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wa(this,!0)),Ze.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Jp(this):this.Xa())},t.Xa=function(){Jp(this)};function Jp(a){if(a.h&&typeof i<"u"){if(a.v&&Ur(a)==4)setTimeout(a.Ca.bind(a),0);else if(K(a,"readystatechange"),Ur(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var _;if(_=D===0){let H=String(a.D).match(Up)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),_=!S1.test(H?H.toLowerCase():"")}d=_}if(d)K(a,"complete"),K(a,"success");else{a.o=6;try{var R=Ur(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Qp(a)}}finally{Wa(a)}}}}function Wa(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||K(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ur(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),rt(c)}};function Yp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function A1(a){const c={};a=(a.g&&Ur(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(E(a[_]))continue;var d=Cs(a[_]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[R]||[];c[R]=D,D.push(d)}$(c,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vo(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Xp(a){this.za=0,this.i=[],this.j=new Re,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vo("baseRetryDelayMs",5e3,a),this.Za=vo("retryDelaySeedMs",1e4,a),this.Ta=vo("forwardChannelMaxRetries",2,a),this.va=vo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Op(a&&a.concurrentRequestLimit),this.Ba=new I1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Xp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,_){Ae(0),this.W=a,this.H=c||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=am(this,null,this.W),Ka(this)};function Pc(a){if(Zp(a),a.I==3){var c=a.V++,d=Wn(a.J);if(Fe(d,"SID",a.M),Fe(d,"RID",c),Fe(d,"TYPE","terminate"),wo(a,d),c=new Qe(a,a.j,c),c.M=2,c.A=Ha(Wn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=lm(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ba(c)}om(a)}function Ga(a){a.g&&(bc(a),a.g.cancel(),a.g=null)}function Zp(a){Ga(a),a.v&&(o.clearTimeout(a.v),a.v=null),Qa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ka(a){if(!Vp(a.h)&&!a.m){a.m=!0;var c=a.Ea;M||y(),U||(M(),U=!0),g.add(c,a),a.D=0}}function k1(a,c){return Mp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ie(h(a.Ea,a,c),im(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Qe(this,this.j,a);let D=this.o;if(this.U&&(D?(D=ie(D),Ke(D,this.U)):D=this.U),this.u!==null||this.R||(R.J=D,D=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=tm(this,R,c),d=Wn(this.J),Fe(d,"RID",a),Fe(d,"CVER",22),this.G&&Fe(d,"X-HTTP-Session-Id",this.G),wo(this,d),D&&(this.R?c="headers="+ht(Gp(D))+"&"+c:this.u&&Rc(d,this.u,D)),Ac(this.h,R),this.Ra&&Fe(d,"TYPE","init"),this.S?(Fe(d,"$req",c),Fe(d,"SID","null"),R.U=!0,Tc(R,d,null)):Tc(R,d,c),this.I=2}}else this.I==3&&(a?em(this,a):this.i.length==0||Vp(this.h)||em(this))};function em(a,c){var d;c?d=c.l:d=a.V++;const _=Wn(a.J);Fe(_,"SID",a.M),Fe(_,"RID",d),Fe(_,"AID",a.K),wo(a,_),a.u&&a.o&&Rc(_,a.u,a.o),d=new Qe(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=tm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ac(a.h,d),Tc(d,_,c)}function wo(a,c){a.H&&Y(a.H,function(d,_){Fe(c,_,d)}),a.l&&Y({},function(d,_){Fe(c,_,d)})}function tm(a,c,d){d=Math.min(a.i.length,d);const _=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let me=-1;for(;;){const yt=["count="+d];me==-1?d>0?(me=R[0].g,yt.push("ofs="+me)):me=0:yt.push("ofs="+me);let Me=!0;for(let xt=0;xt<d;xt++){var D=R[xt].g;const Gn=R[xt].map;if(D-=me,D<0)me=Math.max(0,R[xt].g-100),Me=!1;else try{D="req"+D+"_"||"";try{var H=Gn instanceof Map?Gn:Object.entries(Gn);for(const[bs,Fr]of H){let $r=Fr;l(Fr)&&($r=nt(Fr)),yt.push(D+bs+"="+encodeURIComponent($r))}}catch(bs){throw yt.push(D+"type="+encodeURIComponent("_badmap")),bs}}catch{_&&_(Gn)}}if(Me){H=yt.join("&");break e}}H=void 0}return a=a.i.splice(0,d),c.G=a,H}function nm(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;M||y(),U||(M(),U=!0),g.add(c,a),a.A=0}}function Nc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ie(h(a.Da,a),im(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,rm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ie(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ae(10),Ga(this),rm(this))};function bc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function rm(a){a.g=new Qe(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Wn(a.na);Fe(c,"RID","rpc"),Fe(c,"SID",a.M),Fe(c,"AID",a.K),Fe(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&Fe(c,"TO",a.ia),Fe(c,"TYPE","xmlhttp"),wo(a,c),a.u&&a.o&&Rc(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ha(Wn(c)),d.u=null,d.R=!0,Np(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ga(this),Nc(this),Ae(19))};function Qa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function sm(a,c){var d=null;if(a.g==c){Qa(a),bc(a),a.g=null;var _=2}else if(xc(a.h,c))d=c.G,Lp(a.h,c),_=1;else return;if(a.I!=0){if(c.o)if(_==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var R=a.D;_=Ce(),K(_,new Te(_,d)),Ka(a)}else nm(a);else if(R=c.m,R==3||R==0&&c.X>0||!(_==1&&k1(a,c)||_==2&&Nc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Ns(a,5);break;case 4:Ns(a,10);break;case 3:Ns(a,6);break;default:Ns(a,2)}}}function im(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Ns(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),_=a.Ua;const R=!_;_=new Lr(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ho(_,"https"),Ha(_),R?E1(_.toString(),d):T1(_.toString(),d)}else Ae(2);a.I=0,a.l&&a.l.pa(c),om(a),Zp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function om(a){if(a.I=0,a.ja=[],a.l){const c=jp(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function am(a,c,d){var _=d instanceof Lr?Wn(d):new Lr(d);if(_.g!="")c&&(_.g=c+"."+_.g),fo(_,_.u);else{var R=o.location;_=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const D=new Lr(null);_&&ho(D,_),c&&(D.g=c),R&&fo(D,R),d&&(D.h=d),_=D}return d=a.G,c=a.wa,d&&c&&Fe(_,d,c),Fe(_,"VER",a.ka),wo(a,_),_}function lm(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ze(new Cc({ab:d})):new Ze(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function um(){}t=um.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ja(){}Ja.prototype.g=function(a,c){return new fn(a,c)};function fn(a,c){W.call(this),this.g=new Xp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!E(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new fi(this)}p(fn,W),fn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Pc(this.g)},fn.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=nt(a),a=d);c.i.push(new f1(c.Ya++,a)),c.I==3&&Ka(c)},fn.prototype.N=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,fn.Z.N.call(this)};function cm(a){hi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(cm,hi);function hm(){ks.call(this),this.status=1}p(hm,ks);function fi(a){this.g=a}p(fi,um),fi.prototype.ra=function(){K(this.g,"a")},fi.prototype.qa=function(a){K(this.g,new cm(a))},fi.prototype.pa=function(a){K(this.g,new hm)},fi.prototype.oa=function(){K(this.g,"b")},Ja.prototype.createWebChannel=Ja.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,Tw=function(){return new Ja},Ew=function(){return Ce()},ww=pr,Td={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ve.NO_ERROR=0,Ve.TIMEOUT=8,Ve.HTTP_ERROR=6,$l=Ve,$t.COMPLETE="complete",vw=$t,Rn.EventType=fr,fr.OPEN="a",fr.CLOSE="b",fr.ERROR="c",fr.MESSAGE="d",W.prototype.listen=W.prototype.J,Vo=Rn,Ze.prototype.listenOnce=Ze.prototype.K,Ze.prototype.getLastError=Ze.prototype.Ha,Ze.prototype.getLastErrorCode=Ze.prototype.ya,Ze.prototype.getStatus=Ze.prototype.ca,Ze.prototype.getResponseJson=Ze.prototype.La,Ze.prototype.getResponseText=Ze.prototype.la,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Fa,_w=Ze}).apply(typeof yl<"u"?yl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
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
 */let oo="12.13.0";function dC(t){oo=t}/**
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
 */const Zs=new Uf("@firebase/firestore");function mi(){return Zs.logLevel}function G(t,...e){if(Zs.logLevel<=we.DEBUG){const n=e.map(Xf);Zs.debug(`Firestore (${oo}): ${t}`,...n)}}function Dr(t,...e){if(Zs.logLevel<=we.ERROR){const n=e.map(Xf);Zs.error(`Firestore (${oo}): ${t}`,...n)}}function ei(t,...e){if(Zs.logLevel<=we.WARN){const n=e.map(Xf);Zs.warn(`Firestore (${oo}): ${t}`,...n)}}function Xf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Iw(t,r,n)}function Iw(t,e,n){let r=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Dr(r),new Error(r)}function Pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Iw(e,s,r)}function he(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends hr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qt.UNAUTHENTICATED))}shutdown(){}}class pC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mC{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ds;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ds,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ds)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new Sw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new qt(e)}}class gC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class yC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new gC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ny{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _C{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Pe(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ny(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ny(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Zf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=vC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Id(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ph(s)===ph(i)?ge(s,i):ph(s)?1:-1}return ge(t.length,e.length)}const wC=55296,EC=57343;function ph(t){const e=t.charCodeAt(0);return e>=wC&&e<=EC}function Yi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const ry="__name__";class Jn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Jn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=Jn.isNumericId(e),s=Jn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Jn.extractNumericId(e).compare(Jn.extractNumericId(n)):Id(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hs.fromString(e.substring(4,e.length-2))}}class ze extends Jn{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const TC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends Jn{construct(e,n,r){return new Vt(e,n,r)}static isValidIdentifier(e){return TC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ry}static keyField(){return new Vt([ry])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new J(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(n)}static emptyPath(){return new Vt([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(ze.fromString(e))}static fromName(e){return new ee(ze.fromString(e).popFirst(5))}static empty(){return new ee(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new ze(e.slice()))}}/**
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
 */function xw(t,e,n){if(!n)throw new J(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IC(t,e,n,r){if(e===!0&&r===!0)throw new J(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sy(t){if(!ee.isDocumentKey(t))throw new J(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iy(t){if(ee.isDocumentKey(t))throw new J(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Aw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ep(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ep(t);throw new J(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function pt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ma(t,e){if(!Aw(t))throw new J(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const oy=-62135596800,ay=1e6;class Be{static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ay);return new Be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<oy)throw new J(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ay}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ma(e,Be._jsonSchema))return new Be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-oy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Be._jsonSchemaVersion="firestore/timestamp/1.0",Be._jsonSchema={type:pt("string",Be._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Be(0,0))}static max(){return new ue(new Be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const _a=-1;function SC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new ys(s,ee.empty(),e)}function xC(t){return new ys(t.readTime,t.key,_a)}class ys{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ys(ue.min(),ee.empty(),_a)}static max(){return new ys(ue.max(),ee.empty(),_a)}}function AC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */async function ao(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==kC)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function RC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}oc.ce=-1;/**
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
 */const tp=-1;function ac(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function PC(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const kw="";function NC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ly(e)),e=bC(t.get(n),e);return ly(e)}function bC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case kw:n+="";break;default:n+=i}}return n}function ly(t){return t+kw+""}/**
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
 */function uy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Ot.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ot.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _l(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _l(this.root,e,this.comparator,!1)}getReverseIterator(){return new _l(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _l(this.root,e,this.comparator,!0)}}class _l{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ot.RED,this.left=s??Ot.EMPTY,this.right=i??Ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}Ot.EMPTY=null,Ot.RED=!0,Ot.BLACK=!1;Ot.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cy(this.data.getIterator())}getIteratorFrom(e){return new cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Et(this.comparator);return n.data=e,n}}class cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class jn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new jn([])}unionWith(e){let n=new Et(Vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Rw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Rw("Invalid base64 string: "+i):i}}(e);return new jt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const DC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(t){if(Pe(!!t,39018),typeof t=="string"){let e=0;const n=DC.exec(t);if(Pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vs(t){return typeof t=="string"?jt.fromBase64String(t):jt.fromUint8Array(t)}/**
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
 */const Pw="server_timestamp",Nw="__type__",bw="__previous_value__",Dw="__local_write_time__";function np(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Nw])==null?void 0:r.stringValue)===Pw}function lc(t){const e=t.mapValue.fields[bw];return np(e)?lc(e):e}function va(t){const e=_s(t.mapValue.fields[Dw].timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class OC{constructor(e,n,r,s,i,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Ru="(default)";class wa{constructor(e,n){this.projectId=e,this.database=n||Ru}static empty(){return new wa("","")}get isDefaultDatabase(){return this.database===Ru}isEqual(e){return e instanceof wa&&e.projectId===this.projectId&&e.database===this.database}}function VC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new J(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wa(t.options.projectId,e)}/**
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
 */const Ow="__type__",MC="__max__",vl={mapValue:{}},Vw="__vector__",Pu="value";function ws(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?np(t)?4:jC(t)?9007199254740991:LC(t)?10:11:se(28295,{value:t})}function lr(t,e){if(t===e)return!0;const n=ws(t);if(n!==ws(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return va(t).isEqual(va(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_s(s.timestampValue),l=_s(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vs(s.bytesValue).isEqual(vs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=at(s.doubleValue),l=at(i.doubleValue);return o===l?Cu(o)===Cu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Yi(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(uy(o)!==uy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!lr(o[u],l[u])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function Ea(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function Xi(t,e){if(t===e)return 0;const n=ws(t),r=ws(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=at(i.integerValue||i.doubleValue),u=at(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return hy(t.timestampValue,e.timestampValue);case 4:return hy(va(t),va(e));case 5:return Id(t.stringValue,e.stringValue);case 6:return function(i,o){const l=vs(i),u=vs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ge(l[h],u[h]);if(f!==0)return f}return ge(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ge(at(i.latitude),at(o.latitude));return l!==0?l:ge(at(i.longitude),at(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return dy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var v,k,P,N;const l=i.fields||{},u=o.fields||{},h=(v=l[Pu])==null?void 0:v.arrayValue,f=(k=u[Pu])==null?void 0:k.arrayValue,p=ge(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:dy(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===vl.mapValue&&o===vl.mapValue)return 0;if(i===vl.mapValue)return 1;if(o===vl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const v=Id(u[p],f[p]);if(v!==0)return v;const k=Xi(l[u[p]],h[f[p]]);if(k!==0)return k}return ge(u.length,f.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=_s(t),r=_s(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function dy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Xi(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Zi(t){return Sd(t)}function Sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_s(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sd(n.fields[o])}`;return s+"}"}(t.mapValue):se(61005,{value:t})}function zl(t){switch(ws(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=lc(t);return e?16+zl(e):16;case 5:return 2*t.stringValue.length;case 6:return vs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ii(r.fields,(i,o)=>{s+=i.length+zl(o)}),s}(t.mapValue);default:throw se(13486,{value:t})}}function xd(t){return!!t&&"integerValue"in t}function rp(t){return!!t&&"arrayValue"in t}function fy(t){return!!t&&"nullValue"in t}function py(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bl(t){return!!t&&"mapValue"in t}function LC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Ow])==null?void 0:r.stringValue)===Vw}function Qo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qo(t.arrayValue.values[n]);return e}return{...t}}function jC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===MC}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qo(n)}setAll(e){let n=Vt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Qo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new In(Qo(this.value))}}function Mw(t){const e=[];return ii(t.fields,(n,r)=>{const s=new Vt([n]);if(Bl(r)){const i=Mw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new jn(e)}/**
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
 */class Gt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Gt(e,0,ue.min(),ue.min(),ue.min(),In.empty(),0)}static newFoundDocument(e,n,r,s){return new Gt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new Gt(e,2,n,ue.min(),ue.min(),In.empty(),0)}static newUnknownDocument(e,n){return new Gt(e,3,n,ue.min(),ue.min(),In.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nu{constructor(e,n){this.position=e,this.inclusive=n}}function my(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=Xi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bu{constructor(e,n="asc"){this.field=e,this.dir=n}}function UC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Lw{}class vt extends Lw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $C(e,n,r):n==="array-contains"?new HC(e,r):n==="in"?new qC(e,r):n==="not-in"?new WC(e,r):n==="array-contains-any"?new GC(e,r):new vt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zC(e,r):new BC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Xi(n,this.value)):n!==null&&ws(this.value)===ws(n)&&this.matchesComparison(Xi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends Lw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ur(e,n)}matches(e){return jw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function jw(t){return t.op==="and"}function Uw(t){return FC(t)&&jw(t)}function FC(t){for(const e of t.filters)if(e instanceof ur)return!1;return!0}function Ad(t){if(t instanceof vt)return t.field.canonicalString()+t.op.toString()+Zi(t.value);if(Uw(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function Fw(t,e){return t instanceof vt?function(r,s){return s instanceof vt&&r.op===s.op&&r.field.isEqual(s.field)&&lr(r.value,s.value)}(t,e):t instanceof ur?function(r,s){return s instanceof ur&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Fw(o,s.filters[l]),!0):!1}(t,e):void se(19439)}function $w(t){return t instanceof vt?function(n){return`${n.field.canonicalString()} ${n.op} ${Zi(n.value)}`}(t):t instanceof ur?function(n){return n.op.toString()+" {"+n.getFilters().map($w).join(" ,")+"}"}(t):"Filter"}class $C extends vt{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class zC extends vt{constructor(e,n){super(e,"in",n),this.keys=zw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BC extends vt{constructor(e,n){super(e,"not-in",n),this.keys=zw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class HC extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rp(n)&&Ea(n.arrayValue,this.value)}}class qC extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ea(this.value.arrayValue,n)}}class WC extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ea(this.value.arrayValue,n)}}class GC extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ea(this.value.arrayValue,r))}}/**
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
 */class KC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function yy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KC(t,e,n,r,s,i,o)}function sp(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ac(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zi(r)).join(",")),e.Te=n}return e.Te}function ip(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gy(t.startAt,e.startAt)&&gy(t.endAt,e.endAt)}function kd(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class uc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function QC(t,e,n,r,s,i,o,l){return new uc(t,e,n,r,s,i,o,l)}function cc(t){return new uc(t)}function _y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JC(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function YC(t){return t.collectionGroup!==null}function Jo(t){const e=he(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Et(Vt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new bu(i,r))}),n.has(Vt.keyField().canonicalString())||e.Ie.push(new bu(Vt.keyField(),r))}return e.Ie}function rr(t){const e=he(t);return e.Ee||(e.Ee=XC(e,Jo(t))),e.Ee}function XC(t,e){if(t.limitType==="F")return yy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bu(s.field,i)});const n=t.endAt?new Nu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nu(t.startAt.position,t.startAt.inclusive):null;return yy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cd(t,e,n){return new uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return ip(rr(t),rr(e))&&t.limitType===e.limitType}function Bw(t){return`${sp(rr(t))}|lt:${t.limitType}`}function gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$w(s)).join(", ")}]`),ac(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Zi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Zi(s)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Jo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=my(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Jo(r),s)||r.endAt&&!function(o,l,u){const h=my(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Jo(r),s))}(t,e)}function ZC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hw(t){return(e,n)=>{let r=!1;for(const s of Jo(t)){const i=eR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eR(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Xi(u,h):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
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
 */class oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cw(this.inner)}size(){return this.innerSize}}/**
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
 */const tR=new Ge(ee.comparator);function Or(){return tR}const qw=new Ge(ee.comparator);function Mo(...t){let e=qw;for(const n of t)e=e.insert(n.key,n);return e}function Ww(t){let e=qw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fs(){return Yo()}function Gw(){return Yo()}function Yo(){return new oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const nR=new Ge(ee.comparator),rR=new Et(ee.comparator);function ye(...t){let e=rR;for(const n of t)e=e.add(n);return e}const sR=new Et(ge);function iR(){return sR}/**
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
 */function op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function Kw(t){return{integerValue:""+t}}function oR(t,e){return PC(e)?Kw(e):op(t,e)}/**
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
 */class fc{constructor(){this._=void 0}}function aR(t,e,n){return t instanceof Ta?function(s,i){const o={fields:{[Nw]:{stringValue:Pw},[Dw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&np(i)&&(i=lc(i)),i&&(o.fields[bw]=i),{mapValue:o}}(n,e):t instanceof Ia?Jw(t,e):t instanceof Sa?Yw(t,e):function(s,i){const o=Qw(s,i),l=vy(o)+vy(s.Ae);return xd(o)&&xd(s.Ae)?Kw(l):op(s.serializer,l)}(t,e)}function lR(t,e,n){return t instanceof Ia?Jw(t,e):t instanceof Sa?Yw(t,e):n}function Qw(t,e){return t instanceof Du?function(r){return xd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ta extends fc{}class Ia extends fc{constructor(e){super(),this.elements=e}}function Jw(t,e){const n=Xw(e);for(const r of t.elements)n.some(s=>lr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Sa extends fc{constructor(e){super(),this.elements=e}}function Yw(t,e){let n=Xw(e);for(const r of t.elements)n=n.filter(s=>!lr(s,r));return{arrayValue:{values:n}}}class Du extends fc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function vy(t){return at(t.integerValue||t.doubleValue)}function Xw(t){return rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class uR{constructor(e,n){this.field=e,this.transform=n}}function cR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ia&&s instanceof Ia||r instanceof Sa&&s instanceof Sa?Yi(r.elements,s.elements,lr):r instanceof Du&&s instanceof Du?lr(r.Ae,s.Ae):r instanceof Ta&&s instanceof Ta}(t.transform,e.transform)}class hR{constructor(e,n){this.version=e,this.transformResults=n}}class zn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zn}static exists(e){return new zn(void 0,e)}static updateTime(e){return new zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pc{}function Zw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ap(t.key,zn.none()):new La(t.key,t.data,zn.none());{const n=t.data,r=In.empty();let s=new Et(Vt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ai(t.key,r,new jn(s.toArray()),zn.none())}}function dR(t,e,n){t instanceof La?function(s,i,o){const l=s.value.clone(),u=Ey(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ai?function(s,i,o){if(!Hl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ey(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(eE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof La?function(i,o,l,u){if(!Hl(i.precondition,o))return l;const h=i.value.clone(),f=Ty(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ai?function(i,o,l,u){if(!Hl(i.precondition,o))return l;const h=Ty(i.fieldTransforms,u,o),f=o.data;return f.setAll(eE(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Hl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function fR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Qw(r.transform,s||null);i!=null&&(n===null&&(n=In.empty()),n.set(r.field,i))}return n||null}function wy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Yi(r,s,(i,o)=>cR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends pc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ai extends pc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function eE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ey(t,e,n){const r=new Map;Pe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,lR(o,l,n[s]))}return r}function Ty(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,aR(i,o,e))}return r}class ap extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pR extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Gw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Zw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Yi(this.mutations,e.mutations,(n,r)=>wy(n,r))&&Yi(this.baseMutations,e.baseMutations,(n,r)=>wy(n,r))}}class lp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return nR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lp(e,n,r,s)}}/**
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
 */var dt,Se;function _R(t){switch(t){case j.OK:return se(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function tE(t){if(t===void 0)return Dr("GRPC error has no .code"),j.UNKNOWN;switch(t){case dt.OK:return j.OK;case dt.CANCELLED:return j.CANCELLED;case dt.UNKNOWN:return j.UNKNOWN;case dt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case dt.INTERNAL:return j.INTERNAL;case dt.UNAVAILABLE:return j.UNAVAILABLE;case dt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case dt.NOT_FOUND:return j.NOT_FOUND;case dt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case dt.ABORTED:return j.ABORTED;case dt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case dt.DATA_LOSS:return j.DATA_LOSS;default:return se(39323,{code:t})}}(Se=dt||(dt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const wR=new hs([4294967295,4294967295],0);function Iy(t){const e=vR().encode(t),n=new yw;return n.update(e),new Uint8Array(n.digest())}function Sy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hs([n,r],0),new hs([s,i],0)]}class up{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Lo(`Invalid padding: ${n}`);if(r<0)throw new Lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Lo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=hs.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(hs.fromNumber(r)));return s.compare(wR)===1&&(s=new hs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Iy(e),[r,s]=Sy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new up(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Iy(e),[r,s]=Sy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ja(ue.min(),s,new Ge(ge),Or(),ye())}}class Ua{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ua(r,n,ye(),ye(),ye())}}/**
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
 */class ql{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class nE{constructor(e,n){this.targetId=e,this.Ce=n}}class rE{constructor(e,n,r=jt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xy{constructor(){this.ve=0,this.Fe=Ay(),this.Me=jt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}}),new Ua(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Ay()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ER{constructor(e){this.Ge=e,this.ze=new Map,this.je=Or(),this.Je=wl(),this.He=wl(),this.Ze=new Ge(ge)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(kd(i))if(r===0){const o=new ee(i.path);this.et(n,o,Gt.newNoDocument(o,ue.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=vs(r).toUint8Array()}catch(u){if(u instanceof Rw)return ei("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new up(o,s,i)}catch(u){return ei(u instanceof Lo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&kd(l.target)){const u=new ee(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Gt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ye();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ja(e,n,this.Ze,this.je,r);return this.je=Or(),this.Je=wl(),this.He=wl(),this.Ze=new Ge(ge),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new xy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Et(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Et(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new xy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function wl(){return new Ge(ee.comparator)}function Ay(){return new Ge(ee.comparator)}const TR={asc:"ASCENDING",desc:"DESCENDING"},IR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SR={and:"AND",or:"OR"};class xR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||ac(e)?e:{value:e}}function Ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AR(t,e){return Ou(t,e.toTimestamp())}function sr(t){return Pe(!!t,49232),ue.fromTimestamp(function(n){const r=_s(n);return new Be(r.seconds,r.nanos)}(t))}function cp(t,e){return Pd(t,e).canonicalString()}function Pd(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iE(t){const e=ze.fromString(t);return Pe(cE(e),10190,{key:e.toString()}),e}function Nd(t,e){return cp(t.databaseId,e.path)}function mh(t,e){const n=iE(e);if(n.get(1)!==t.databaseId.projectId)throw new J(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(aE(n))}function oE(t,e){return cp(t.databaseId,e)}function kR(t){const e=iE(t);return e.length===4?ze.emptyPath():aE(e)}function bd(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aE(t){return Pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ky(t,e,n){return{name:Nd(t,e),fields:n.value.mapValue.fields}}function CR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:se(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Pe(f===void 0||typeof f=="string",58123),jt.fromBase64String(f||"")):(Pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),jt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?j.UNKNOWN:tE(h.code);return new J(f,h.message||"")}(o);n=new rE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=mh(t,r.document.name),i=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):ue.min(),l=new In({mapValue:{fields:r.document.fields}}),u=Gt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ql(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=mh(t,r.document),i=r.readTime?sr(r.readTime):ue.min(),o=Gt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ql([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=mh(t,r.document),i=r.removedTargetIds||[];n=new ql([],i,s,null)}else{if(!("filter"in e))return se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yR(s,i),l=r.targetId;n=new nE(l,o)}}return n}function RR(t,e){let n;if(e instanceof La)n={update:ky(t,e.key,e.value)};else if(e instanceof ap)n={delete:Nd(t,e.key)};else if(e instanceof ai)n={update:ky(t,e.key,e.data),updateMask:jR(e.fieldMask)};else{if(!(e instanceof pR))return se(16599,{dt:e.type});n={verify:Nd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Du)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)}(t,e.precondition)),n}function PR(t,e){return t&&t.length>0?(Pe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?sr(s.updateTime):sr(i);return o.isEqual(ue.min())&&(o=sr(i)),new hR(o,s.transformResults||[])}(n,e))):[]}function NR(t,e){return{documents:[oE(t,e.path)]}}function bR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oE(t,s);const i=function(h){if(h.length!==0)return uE(ur.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:yi(v.field),direction:VR(v.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function DR(t){let e=kR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const v=lE(p);return v instanceof ur&&Uw(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(v=>function(P){return new bu(_i(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,ac(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(p){const v=!!p.before,k=p.values||[];return new Nu(k,v)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const v=!p.before,k=p.values||[];return new Nu(k,v)}(n.endAt)),QC(e,s,o,i,l,"F",u,h)}function OR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_i(n.unaryFilter.field);return vt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_i(n.unaryFilter.field);return vt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return vt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return vt.create(_i(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ur.create(n.compositeFilter.filters.map(r=>lE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function VR(t){return TR[t]}function MR(t){return IR[t]}function LR(t){return SR[t]}function yi(t){return{fieldPath:t.canonicalString()}}function _i(t){return Vt.fromServerFormat(t.fieldPath)}function uE(t){return t instanceof vt?function(n){if(n.op==="=="){if(py(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NAN"}};if(fy(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(py(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NAN"}};if(fy(n.value))return{unaryFilter:{field:yi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(n.field),op:MR(n.op),value:n.value}}}(t):t instanceof ur?function(n){const r=n.getFilters().map(s=>uE(s));return r.length===1?r[0]:{compositeFilter:{op:LR(n.op),filters:r}}}(t):se(54877,{filter:t})}function jR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function hE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Ir{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=jt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class UR{constructor(e){this.yt=e}}function FR(t){const e=DR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cd(e,e.limit,"L"):e}/**
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
 */class $R{constructor(){this.bn=new zR}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ys.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class zR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Et(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Et(ze.comparator)).toArray()}}/**
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
 */const Cy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dE=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(dE,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
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
 */const Ry="LruGarbageCollector",BR=1048576;function Py([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class HR{constructor(e){this.Pr=e,this.buffer=new Et(Py),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Py(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){G(Ry,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){lo(n)?G(Ry,"Ignoring IndexedDB error during garbage collection: ",n):await ao(n)}await this.Ar(3e5)})}}class WR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(oc.ce);const r=new HR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Cy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),mi()<=we.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function GR(t,e){return new WR(t,e)}/**
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
 */class KR{constructor(){this.changes=new oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xo(r.mutation,s,jn.empty(),Be.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=Fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Mo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Or();const o=Yo(),l=function(){return Yo()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ai)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Xo(f.mutation,h,f.mutation.getFieldMask(),Be.now())):o.set(h.key,jn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new QR(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Yo();let s=new Ge((o,l)=>o-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||jn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||ye()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Gw();f.forEach(v=>{if(!i.has(v)){const k=Zw(n.get(v),r.get(v));k!==null&&p.set(v,k),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return JC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Fs());let l=_a,u=i;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ye())).next(f=>({batchId:l,changes:Ww(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=Mo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Mo();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const h=function(p,v){return new uc(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Gt.newInvalidDocument(f)))});let l=Mo();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Xo(f.mutation,h,jn.empty(),Be.now()),dc(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class XR{constructor(){this.overlays=new Ge(ee.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fs();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Fs(),i=n.length+1,o=new ee(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Fs(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Fs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gR(n,r));let i=this.Lr.get(n);i===void 0&&(i=ye(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class ZR{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class hp{constructor(){this.kr=new Et(kt.Kr),this.qr=new Et(kt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new kt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new kt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new ee(new ze([])),r=new kt(n,e),s=new kt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new ee(new ze([])),r=new kt(n,e),s=new kt(n,e+1);let i=ye();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new kt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class kt{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return ee.comparator(e.key,n.key)||ge(e.Jr,n.Jr)}static Ur(e,n){return ge(e.Jr,n.Jr)||ee.comparator(e.key,n.key)}}/**
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
 */class e2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Et(kt.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new kt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?tp:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new kt(n,0),s=new kt(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Et(ge);return n.forEach(s=>{const i=new kt(s,0),o=new kt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new kt(new ee(i),0);let l=new Et(ge);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,s=>{const i=new kt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new kt(n,0),s=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class t2{constructor(e){this.ti=e,this.docs=function(){return new Ge(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(n))}getEntries(e,n){let r=Or();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Gt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Or();const o=n.path,l=new ee(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||AC(xC(f),r)<=0||(s.has(f.key)||dc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new n2(this)}getSize(e){return L.resolve(this.size)}}class n2 extends KR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class r2{constructor(e){this.persistence=e,this.ri=new oi(n=>sp(n),ip),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.ii=0,this.si=new hp,this.targetCount=0,this.oi=Es._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
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
 */class fE{constructor(e,n){this._i={},this.overlays={},this.ai=new oc(0),this.ui=!1,this.ui=!0,this.ci=new ZR,this.referenceDelegate=e(this),this.li=new r2(this),this.indexManager=new $R,this.remoteDocumentCache=function(s){return new t2(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new UR(n),this.Pi=new YR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new e2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new s2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class s2 extends CC{constructor(e){super(),this.currentSequenceNumber=e}}class dp{constructor(e){this.persistence=e,this.Ri=new hp,this.Ai=null}static Vi(e){return new dp(e)}get di(){if(this.Ai)return this.Ai;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=ee.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Vu{constructor(e,n){this.persistence=e,this.fi=new oi(r=>NC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=GR(this,n)}static Vi(e,n){return new Vu(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fp(e,n.fromCache,r,s)}}/**
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
 */class o2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _S()?8:RC(Qt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new i2;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(mi()<=we.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(mi()<=we.DEBUG&&G("QueryEngine","Query:",gi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(mi()<=we.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):L.resolve())}gs(e,n){if(_y(n))return L.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Cd(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,Cd(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return _y(n)||s.isEqual(ue.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?L.resolve(null):(mi()<=we.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gi(n)),this.Ds(e,o,n,SC(s,_a)).next(l=>l))})}Ss(e,n){let r=new Et(Hw(e));return n.forEach((s,i)=>{dc(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return mi()<=we.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",gi(n)),this.fs.getDocumentsMatchingQuery(e,n,ys.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const pp="LocalStore",a2=3e8;class l2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ge(ge),this.Fs=new oi(i=>sp(i),ip),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function u2(t,e,n,r){return new l2(t,e,n,r)}async function pE(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ye();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function c2(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,v=p.keys();let k=L.resolve();return v.forEach(P=>{k=k.next(()=>f.getEntry(u,P)).next(N=>{const O=h.docVersions.get(P);Pe(O!==null,48541),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function mE(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function h2(t,e){const n=he(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const v=s.get(p);if(!v)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let k=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(jt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(p,k),function(N,O,x){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=a2?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(v,k,f)&&l.push(n.li.updateTargetData(i,k))});let u=Or(),h=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(d2(i,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(ue.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function d2(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Or();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G(pp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function f2(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=tp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function p2(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Dd(t,e,n){const r=he(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!lo(o))throw o;G(pp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ny(t,e,n){const r=he(t);let s=ue.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=he(u),v=p.Fs.get(f);return v!==void 0?L.resolve(p.vs.get(v)):p.li.getTargetData(h,f)}(r,o,rr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:ye())).next(l=>(m2(r,ZC(e),l),{documents:l,ks:i})))}function m2(t,e,n){let r=t.Ms.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class by{constructor(){this.activeTargetIds=iR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g2{constructor(){this.vo=new by,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new by,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const Dy="ConnectivityMonitor";class Oy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){G(Dy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){G(Dy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let El=null;function Od(){return El===null?El=function(){return 268435456+Math.round(2147483648*Math.random())}():El++,"0x"+El.toString(16)}/**
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
 */const gh="RestConnection",_2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class v2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Ru?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Od(),l=this.Qo(e,n.toUriEncodedString());G(gh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=so(h);return this.zo(e,l,u,r,f).then(p=>(G(gh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ei(gh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=_2[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */const Ht="WebChannelConnection",Ro=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Fi extends v2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fi.c_){const e=Ew();Ro(e,ww.STAT_EVENT,n=>{n.stat===Td.PROXY?G(Ht,"STAT_EVENT: detected buffering proxy"):n.stat===Td.NOPROXY&&G(Ht,"STAT_EVENT: detected no buffering proxy")}),Fi.c_=!0}}zo(e,n,r,s,i){const o=Od();return new Promise((l,u)=>{const h=new _w;h.setWithCredentials(!0),h.listenOnce(vw.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case $l.NO_ERROR:const p=h.getResponseJson();G(Ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case $l.TIMEOUT:G(Ht,`RPC '${e}' ${o} timed out`),u(new J(j.DEADLINE_EXCEEDED,"Request time out"));break;case $l.HTTP_ERROR:const v=h.getStatus();if(G(Ht,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const P=k==null?void 0:k.error;if(P&&P.status&&P.message){const N=function(x){const T=x.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(P.status);u(new J(N,P.message))}else u(new J(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new J(j.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{G(Ht,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);G(Ht,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Od(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");G(Ht,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let p=!1,v=!1;const k=new w2({Jo:P=>{v?G(Ht,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(G(Ht,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),G(Ht,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Ho:()=>f.close()});return Ro(f,Vo.EventType.OPEN,()=>{v||(G(Ht,`RPC '${e}' stream ${s} transport opened.`),k.i_())}),Ro(f,Vo.EventType.CLOSE,()=>{v||(v=!0,G(Ht,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(f))}),Ro(f,Vo.EventType.ERROR,P=>{v||(v=!0,ei(Ht,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),k.o_(new J(j.UNAVAILABLE,"The operation could not be completed")))}),Ro(f,Vo.EventType.MESSAGE,P=>{var N;if(!v){const O=P.data[0];Pe(!!O,16349);const x=O,T=(x==null?void 0:x.error)||((N=x[0])==null?void 0:N.error);if(T){G(Ht,`RPC '${e}' stream ${s} received error:`,T);const A=T.status;let b=function(g){const y=dt[g];if(y!==void 0)return tE(y)}(A),M=T.message;A==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&ei(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),b===void 0&&(b=j.INTERNAL,M="Unknown error status: "+A+" with message "+T.message),v=!0,k.o_(new J(b,M)),f.close()}else G(Ht,`RPC '${e}' stream ${s} received:`,O),k.__(O)}}),Fi.u_(),setTimeout(()=>{k.s_()},0),k}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Tw()}}/**
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
 */function E2(t){return new Fi(t)}function yh(){return typeof document<"u"?document:null}/**
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
 */function mc(t){return new xR(t,!0)}/**
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
 */Fi.c_=!1;class gE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Vy="PersistentStream";class yE{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Dr(n.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new J(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(Vy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(G(Vy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class T2 extends yE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=CR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?sr(o.readTime):ue.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=bd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=kd(u)?{documents:NR(i,u)}:{query:bR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=sE(i,o.resumeToken);const h=Rd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=Ou(i,o.snapshotVersion.toTimestamp());const h=Rd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=OR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=bd(this.serializer),n.removeTarget=e,this.K_(n)}}class I2 extends yE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=PR(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RR(this.serializer,r))};this.K_(n)}}/**
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
 */class S2{}class x2 extends S2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new J(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Pd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(j.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Pd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function A2(t,e,n,r){return new x2(t,e,n,r)}class k2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dr(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const cr="RemoteStore";class C2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Es(1e3),this.Va=new Es(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{li(this)&&(G(cr,"Restarting streams for network reachability change."),await async function(u){const h=he(u);h.da.add(4),await Fa(h),h.ga.set("Unknown"),h.da.delete(4),await gc(h)}(this))})}),this.ga=new k2(r,s)}}async function gc(t){if(li(t))for(const e of t.ma)await e(!0)}async function Fa(t){for(const e of t.ma)await e(!1)}function Vd(t,e){return t.Ea.get(e)||void 0}function _E(t,e){const n=he(t),r=Vd(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const h=Vd(l,u);h!==void 0&&l.Ra.delete(h);const f=function(v,k){return k%2!=0?v.Va.next():v.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);G(cr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Ir(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),_p(n)?yp(n):uo(n).O_()&&gp(n,i)}function mp(t,e){const n=he(t),r=uo(n),s=Vd(n,e);G(cr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&vE(n,s),n.Ia.size===0&&(r.O_()?r.L_():li(n)&&n.ga.set("Unknown"))}function gp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void G(cr,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}uo(t).Z_(e)}function vE(t,e){t.pa.$e(e),uo(t).X_(e)}function yp(t){t.pa=new ER({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ye()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),uo(t).start(),t.ga.ua()}function _p(t){return li(t)&&!uo(t).x_()&&t.Ia.size>0}function li(t){return he(t).da.size===0}function wE(t){t.pa=void 0}async function R2(t){t.ga.set("Online")}async function P2(t){t.Ia.forEach((e,n)=>{gp(t,e)})}async function N2(t,e){wE(t),_p(t)?(t.ga.ha(e),yp(t)):t.ga.set("Unknown")}async function b2(t,e,n){if(t.ga.set("Online"),e instanceof rE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){G(cr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mu(t,r)}else if(e instanceof ql?t.pa.Xe(e):e instanceof nE?t.pa.st(e):t.pa.tt(e),!n.isEqual(ue.min()))try{const r=await mE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=i.Ia.get(h);if(!p)return;i.Ia.set(h,p.withResumeToken(jt.EMPTY_BYTE_STRING,p.snapshotVersion)),vE(i,h);const v=new Ir(p.target,h,f,p.sequenceNumber);gp(i,v)});const u=function(f,p){const v=new Map;p.targetChanges.forEach((P,N)=>{const O=f.Ra.get(N);O!==void 0&&v.set(O,P)});let k=new Ge(ge);return p.targetMismatches.forEach((P,N)=>{const O=f.Ra.get(P);O!==void 0&&(k=k.insert(O,N))}),new ja(p.snapshotVersion,v,k,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){G(cr,"Failed to raise snapshot:",r),await Mu(t,r)}}async function Mu(t,e,n){if(!lo(e))throw e;t.da.add(1),await Fa(t),t.ga.set("Offline"),n||(n=()=>mE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(cr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await gc(t)})}function EE(t,e){return e().catch(n=>Mu(t,n,e))}async function yc(t){const e=he(t),n=Ts(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:tp;for(;D2(e);)try{const s=await f2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,O2(e,s)}catch(s){await Mu(e,s)}TE(e)&&IE(e)}function D2(t){return li(t)&&t.Ta.length<10}function O2(t,e){t.Ta.push(e);const n=Ts(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function TE(t){return li(t)&&!Ts(t).x_()&&t.Ta.length>0}function IE(t){Ts(t).start()}async function V2(t){Ts(t).ra()}async function M2(t){const e=Ts(t);for(const n of t.Ta)e.ea(n.mutations)}async function L2(t,e,n){const r=t.Ta.shift(),s=lp.from(r,e,n);await EE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yc(t)}async function j2(t,e){e&&Ts(t).Y_&&await async function(r,s){if(function(o){return _R(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Ts(r).B_(),await EE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yc(r)}}(t,e),TE(t)&&IE(t)}async function My(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),G(cr,"RemoteStore received new credentials");const r=li(n);n.da.add(3),await Fa(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await gc(n)}async function U2(t,e){const n=he(t);e?(n.da.delete(2),await gc(n)):e||(n.da.add(2),await Fa(n),n.ga.set("Unknown"))}function uo(t){return t.ya||(t.ya=function(n,r,s){const i=he(n);return i.sa(),new T2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:R2.bind(null,t),Yo:P2.bind(null,t),t_:N2.bind(null,t),H_:b2.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),_p(t)?yp(t):t.ga.set("Unknown")):(await t.ya.stop(),wE(t))})),t.ya}function Ts(t){return t.wa||(t.wa=function(n,r,s){const i=he(n);return i.sa(),new I2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:V2.bind(null,t),t_:j2.bind(null,t),ta:M2.bind(null,t),na:L2.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await yc(t)):(await t.wa.stop(),t.Ta.length>0&&(G(cr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
 */class vp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new vp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wp(t,e){if(Dr("AsyncQueue",`${e}: ${t}`),lo(t))return new J(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $i{static emptySet(e){return new $i(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=Mo(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ly{constructor(){this.Sa=new Ge(ee.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):se(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class eo{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new eo(e,n,$i.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class F2{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class $2{constructor(){this.queries=jy(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=jy(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new J(j.ABORTED,"Firestore shutting down"))}}function jy(){return new oi(t=>Bw(t),hc)}async function SE(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new F2,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=wp(o,`Initialization of query '${gi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&Ep(n)}async function xE(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function z2(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&Ep(n)}function B2(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function Ep(t){t.xa.forEach(e=>{e.next()})}var Md,Uy;(Uy=Md||(Md={})).Ba="default",Uy.Cache="cache";class AE{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Md.Cache}}/**
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
 */class kE{constructor(e){this.key=e}}class CE{constructor(e){this.key=e}}class H2{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ye(),this.mutatedKeys=ye(),this.iu=Hw(e),this.su=new $i(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Ly,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const v=s.get(f),k=dc(this.query,p)?p:null,P=!!v&&this.mutatedKeys.has(v.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;v&&k?v.data.isEqual(k.data)?P!==N&&(r.track({type:3,doc:k}),O=!0):this.uu(v,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.iu(k,u)>0||h&&this.iu(k,h)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),O=!0):v&&!k&&(r.track({type:1,doc:v}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(k,P){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Vt:O})}};return N(k)-N(P)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,h=u!==this.nu;return this.nu=u,o.length!==0||h?{snapshot:new eo(this.query,e.su,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Ly,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ye(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new CE(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new kE(r))}),n}Tu(e){this.tu=e.ks,this.ru=ye();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return eo.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Tp="SyncEngine";class q2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class W2{constructor(e){this.key=e,this.Eu=!1}}class G2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new oi(l=>Bw(l),hc),this.Vu=new Map,this.du=new Set,this.mu=new Ge(ee.comparator),this.fu=new Map,this.gu=new hp,this.pu={},this.yu=new Map,this.wu=Es.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function K2(t,e,n=!0){const r=OE(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await RE(r,e,n,!0),s}async function Q2(t,e){const n=OE(t);await RE(n,e,!0,!1)}async function RE(t,e,n,r){const s=await p2(t.localStore,rr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await J2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&_E(t.remoteStore,s),l}async function J2(t,e,n,r,s){t.bu=(p,v,k)=>async function(N,O,x,T){let A=O.view._u(x);A.bs&&(A=await Ny(N.localStore,O.query,!1).then(({documents:g})=>O.view._u(g,A)));const b=T&&T.targetChanges.get(O.targetId),M=T&&T.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(A,N.isPrimaryClient,b,M);return $y(N,O.targetId,U.hu),U.snapshot}(t,p,v,k);const i=await Ny(t.localStore,e,!0),o=new H2(e,i.ks),l=o._u(i.documents),u=Ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);$y(t,n,h.hu);const f=new q2(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function Y2(t,e,n){const r=he(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!hc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Dd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&mp(r.remoteStore,s.targetId),Ld(r,s.targetId)}).catch(ao)):(Ld(r,s.targetId),await Dd(r.localStore,s.targetId,!0))}async function X2(t,e){const n=he(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),mp(n.remoteStore,r.targetId))}async function Z2(t,e,n){const r=oP(t);try{const s=await function(o,l){const u=he(o),h=Be.now(),f=l.reduce((k,P)=>k.add(P.key),ye());let p,v;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let P=Or(),N=ye();return u.xs.getEntries(k,f).next(O=>{P=O,P.forEach((x,T)=>{T.isValidDocument()||(N=N.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,P)).next(O=>{p=O;const x=[];for(const T of l){const A=fR(T,p.get(T.key).overlayedDocument);A!=null&&x.push(new ai(T.key,A,Mw(A.value.mapValue),zn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,x,l)}).next(O=>{v=O;const x=O.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,x)})}).then(()=>({batchId:v.batchId,changes:Ww(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new Ge(ge)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,s.batchId,n),await $a(r,s.changes),await yc(r.remoteStore)}catch(s){const i=wp(s,"Failed to persist write");n.reject(i)}}async function PE(t,e){const n=he(t);try{const r=await h2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?Pe(o.Eu,14607):s.removedDocuments.size>0&&(Pe(o.Eu,42227),o.Eu=!1))}),await $a(n,r,e)}catch(r){await ao(r)}}function Fy(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=he(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const v of p.va)v.Oa(l)&&(h=!0)}),h&&Ep(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eP(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new Ge(ee.comparator);o=o.insert(i,Gt.newNoDocument(i,ue.min()));const l=ye().add(i),u=new ja(ue.min(),new Map,new Ge(ge),o,l);await PE(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Ip(r)}else await Dd(r.localStore,e,!1).then(()=>Ld(r,e,n)).catch(ao)}async function tP(t,e){const n=he(t),r=e.batch.batchId;try{const s=await c2(n.localStore,e);bE(n,r,null),NE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $a(n,s)}catch(s){await ao(s)}}async function nP(t,e,n){const r=he(t);try{const s=await function(o,l){const u=he(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(Pe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);bE(r,e,n),NE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $a(r,s)}catch(s){await ao(s)}}function NE(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function bE(t,e,n){const r=he(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||DE(t,r)})}function DE(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(mp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Ip(t))}function $y(t,e,n){for(const r of n)r instanceof kE?(t.gu.addReference(r.key,e),rP(t,r)):r instanceof CE?(G(Tp,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||DE(t,r.key)):se(19791,{Cu:r})}function rP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(G(Tp,"New document in limbo: "+n),t.du.add(r),Ip(t))}function Ip(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new ee(ze.fromString(e)),r=t.wu.next();t.fu.set(r,new W2(n)),t.mu=t.mu.insert(n,r),_E(t.remoteStore,new Ir(rr(cc(n.path)),r,"TargetPurposeLimboResolution",oc.ce))}}async function $a(t,e,n){const r=he(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=fp.Es(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,h){const f=he(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,v=>L.forEach(v.Ts,k=>f.persistence.referenceDelegate.addReference(p,v.targetId,k)).next(()=>L.forEach(v.Is,k=>f.persistence.referenceDelegate.removeReference(p,v.targetId,k)))))}catch(p){if(!lo(p))throw p;G(pp,"Failed to update sequence numbers: "+p)}for(const p of h){const v=p.targetId;if(!p.fromCache){const k=f.vs.get(v),P=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(v,N)}}}(r.localStore,i))}async function sP(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){G(Tp,"User change. New user:",e.toKey());const r=await pE(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new J(j.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $a(n,r.Ns)}}function iP(t,e){const n=he(t),r=n.fu.get(e);if(r&&r.Eu)return ye().add(r.key);{let s=ye();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function OE(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eP.bind(null,e),e.Ru.H_=z2.bind(null,e.eventManager),e.Ru.Du=B2.bind(null,e.eventManager),e}function oP(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nP.bind(null,e),e}class Lu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return u2(this.persistence,new o2,e.initialUser,this.serializer)}xu(e){return new fE(dp.Vi,this.serializer)}Mu(e){return new g2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lu.provider={build:()=>new Lu};class aP extends Lu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){Pe(this.persistence.referenceDelegate instanceof Vu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new fE(r=>Vu.Vi(r,n),this.serializer)}}class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sP.bind(null,this.syncEngine),await U2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $2}()}createDatastore(e){const n=mc(e.databaseInfo.databaseId),r=E2(e.databaseInfo);return A2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new C2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fy(this.syncEngine,n,0),function(){return Oy.v()?new Oy:new y2}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new G2(s,i,o,l,u,h);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=he(s);G(cr,"RemoteStore shutting down."),i.da.add(5),await Fa(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}jd.provider={build:()=>new jd};/**
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
 */class VE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Is="FirestoreClient";class lP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=qt.UNAUTHENTICATED,this.clientId=Zf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(Is,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(Is,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ds;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _h(t,e){t.asyncQueue.verifyOperationInProgress(),G(Is,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await pE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uP(t);G(Is,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>My(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>My(e.remoteStore,s)),t._onlineComponents=e}async function uP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(Is,"Using user provided OfflineComponentProvider");try{await _h(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await _h(t,new Lu)}}else G(Is,"Using default OfflineComponentProvider"),await _h(t,new aP(void 0));return t._offlineComponents}async function ME(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(Is,"Using user provided OnlineComponentProvider"),await zy(t,t._uninitializedComponentsProvider._online)):(G(Is,"Using default OnlineComponentProvider"),await zy(t,new jd))),t._onlineComponents}function cP(t){return ME(t).then(e=>e.syncEngine)}async function Ud(t){const e=await ME(t),n=e.eventManager;return n.onListen=K2.bind(null,e.syncEngine),n.onUnlisten=Y2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Q2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=X2.bind(null,e.syncEngine),n}function hP(t,e,n,r){const s=new VE(r),i=new AE(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>SE(await Ud(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>xE(await Ud(t),i))}}function dP(t,e,n={}){const r=new ds;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new VE({next:v=>{f.Ku(),o.enqueueAndForget(()=>xE(i,p));const k=v.docs.has(l);!k&&v.fromCache?h.reject(new J(j.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&v.fromCache&&u&&u.source==="server"?h.reject(new J(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),p=new AE(cc(l.path),f,{includeMetadataChanges:!0,Wa:!0});return SE(i,p)}(await Ud(t),t.asyncQueue,e,n,r)),r.promise}function fP(t,e){const n=new ds;return t.asyncQueue.enqueueAndForget(async()=>Z2(await cP(t),e,n)),n.promise}/**
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
 */function LE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const pP="ComponentProvider",By=new Map;function mP(t,e,n,r,s){return new OC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,LE(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const jE="firestore.googleapis.com",Hy=!0;class qy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jE,this.ssl=Hy}else this.host=e.host,this.ssl=e.ssl??Hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BR)throw new J(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fC;switch(r.type){case"firstParty":return new yC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=By.get(n);r&&(G(pP,"Removing Datastore"),By.delete(n),r.terminate())}(this),Promise.resolve()}}function gP(t,e,n,r={}){var h;t=nr(t,_c);const s=so(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&jf(`https://${l}`),i.host!==jE&&i.host!==l&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Js(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=qt.MOCK_USER;else{f=P0(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new J(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new qt(v)}t._authCredentials=new pC(new Sw(f,p))}}/**
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
 */class vc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vc(this.firestore,e,this._query)}}class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ma(n,mt._jsonSchema))return new mt(e,r||null,new ee(ze.fromString(n.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:pt("string",mt._jsonSchemaVersion),referencePath:pt("string")};class fs extends vc{constructor(e,n,r){super(e,n,cc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new ee(e))}withConverter(e){return new fs(this.firestore,e,this._path)}}function UE(t,e,...n){if(t=Zt(t),xw("collection","path",e),t instanceof _c){const r=ze.fromString(e,...n);return iy(r),new fs(t,null,r)}{if(!(t instanceof mt||t instanceof fs))throw new J(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return iy(r),new fs(t.firestore,null,r)}}function bn(t,e,...n){if(t=Zt(t),arguments.length===1&&(e=Zf.newId()),xw("doc","path",e),t instanceof _c){const r=ze.fromString(e,...n);return sy(r),new mt(t,null,new ee(r))}{if(!(t instanceof mt||t instanceof fs))throw new J(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return sy(r),new mt(t.firestore,t instanceof fs?t.converter:null,new ee(r))}}/**
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
 */const Wy="AsyncQueue";class Gy{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new gE(this,"async_queue_retry"),this.lc=()=>{const r=yh();r&&G(Wy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=yh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=yh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new ds;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!lo(e))throw e;G(Wy,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Dr("INTERNAL UNHANDLED ERROR: ",Ky(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=vp.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&se(47125,{Rc:Ky(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Ky(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ti extends _c{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gy(e),this._firestoreClient=void 0,await e}}}function FE(t,e){const n=typeof t=="object"?t:$f(),r=typeof t=="string"?t:Ru,s=nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=k0("firestore");i&&gP(s,...i)}return s}function Sp(t){if(t._terminated)throw new J(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yP(t),t._firestoreClient}function yP(t){var r,s,i,o;const e=t._freezeSettings(),n=mP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new lP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(jt.fromBase64String(e))}catch(n){throw new J(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sn(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ma(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:pt("string",Sn._jsonSchemaVersion),bytes:pt("string")};/**
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
 */class $E{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xp{constructor(e){this._methodName=e}}/**
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
 */class ir{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ir._jsonSchemaVersion}}static fromJSON(e){if(Ma(e,ir._jsonSchema))return new ir(e.latitude,e.longitude)}}ir._jsonSchemaVersion="firestore/geoPoint/1.0",ir._jsonSchema={type:pt("string",ir._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
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
 */class Bn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ma(e,Bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Bn(e.vectorValues);throw new J(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bn._jsonSchemaVersion="firestore/vectorValue/1.0",Bn._jsonSchema={type:pt("string",Bn._jsonSchemaVersion),vectorValues:pt("object")};/**
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
 */const _P=/^__.*__$/;class vP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ai(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}function zE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{dataSource:t})}}class Ap{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(zE(this.dataSource)&&_P.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class wP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mc(e)}V(e,n,r,s=!1){return new Ap({dataSource:e,methodName:n,targetDoc:r,path:Vt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function BE(t){const e=t._freezeSettings(),n=mc(t._databaseId);return new wP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HE(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);KE("Data must be an object, but it was:",o,r);const l=WE(r,o);let u,h;if(i.merge)u=new jn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const v=Cp(e,p,n);if(!o.contains(v))throw new J(j.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);IP(f,v)||f.push(v)}u=new jn(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new vP(new In(l),u,h)}class kp extends xp{_toFieldTransform(e){return new uR(e.path,new Ta)}isEqual(e){return e instanceof kp}}function qE(t,e){if(GE(t=Zt(t)))return KE("Unsupported field value:",e,t),WE(t,e);if(t instanceof xp)return function(r,s){if(!zE(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=qE(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Be.fromDate(r);return{timestampValue:Ou(s.serializer,i)}}if(r instanceof Be){const i=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ou(s.serializer,i)}}if(r instanceof ir)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sn)return{bytesValue:sE(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bn)return function(o,l){const u=o instanceof Bn?o.toArray():o;return{mapValue:{fields:{[Ow]:{stringValue:Vw},[Pu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return op(l.serializer,f)})}}}}}}(r,s);if(hE(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${ep(r)}`)}(t,e)}function WE(t,e){const n={};return Cw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,s)=>{const i=qE(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function GE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof ir||t instanceof Sn||t instanceof mt||t instanceof xp||t instanceof Bn||hE(t))}function KE(t,e,n){if(!GE(n)||!Aw(n)){const r=ep(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Cp(t,e,n){if((e=Zt(e))instanceof $E)return e._internalPath;if(typeof e=="string")return TP(t,e);throw ju("Field path arguments must be of type string or ",t,!1,void 0,n)}const EP=new RegExp("[~\\*/\\[\\]]");function TP(t,e,n){if(e.search(EP)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $E(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ju(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new J(j.INVALID_ARGUMENT,l+t+u)}function IP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class SP{convertValue(e,n="none"){switch(ws(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Pu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>at(o.doubleValue));return new Bn(n)}convertGeoPoint(e){return new ir(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(va(e));default:return null}}convertTimestamp(e){const n=_s(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);Pe(cE(r),9688,{name:e});const s=new wa(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||Dr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class QE extends SP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function xP(){return new kp("serverTimestamp")}const Qy="@firebase/firestore",Jy="4.14.1";/**
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
 */function Yy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class JE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Cp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AP extends JE{data(){return super.data()}}/**
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
 */function kP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function YE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hs extends JE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Cp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hs._jsonSchema={type:pt("string",Hs._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class Wl extends Hs{data(e={}){return super.data(e)}}class zi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new jo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wl(this._firestore,this._userDataWriter,r.key,r,new jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Wl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Wl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:CP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
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
 */zi._jsonSchemaVersion="firestore/querySnapshot/1.0",zi._jsonSchema={type:pt("string",zi._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};/**
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
 */function Tl(t){t=nr(t,mt);const e=nr(t.firestore,ti),n=Sp(e);return dP(n,t._key).then(r=>XE(e,t,r))}function Il(t,e,n){t=nr(t,mt);const r=nr(t.firestore,ti),s=YE(t.converter,e),i=BE(r);return Rp(r,[HE(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,zn.none())])}function RP(t){return Rp(nr(t.firestore,ti),[new ap(t._key,zn.none())])}function PP(t,e){const n=nr(t.firestore,ti),r=bn(t),s=YE(t.converter,e),i=BE(t.firestore);return Rp(n,[HE(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,zn.exists(!1))]).then(()=>r)}function Xy(t,...e){var h,f,p;t=Zt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Yy(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Yy(e[r])){const v=e[r];e[r]=(h=v.next)==null?void 0:h.bind(v),e[r+1]=(f=v.error)==null?void 0:f.bind(v),e[r+2]=(p=v.complete)==null?void 0:p.bind(v)}let i,o,l;if(t instanceof mt)o=nr(t.firestore,ti),l=cc(t._key.path),i={next:v=>{e[r]&&e[r](XE(o,t,v))},error:e[r+1],complete:e[r+2]};else{const v=nr(t,vc);o=nr(v.firestore,ti),l=v._query;const k=new QE(o);i={next:P=>{e[r]&&e[r](new zi(o,k,v,P))},error:e[r+1],complete:e[r+2]},kP(t._query)}const u=Sp(o);return hP(u,l,s,i)}function Rp(t,e){const n=Sp(t);return fP(n,e)}function XE(t,e,n){const r=n.docs.get(e._key),s=new QE(t);return new Hs(t,s,e._key,r,new jo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){dC(si),Ys(new gs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ti(new mC(r.getProvider("auth-internal")),new _C(o,r.getProvider("app-check-internal")),VC(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),er(Qy,Jy,e),er(Qy,Jy,"esm2020")})();const NP={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},za=D0(NP);lC(za);const bP=FE(za),DP="usage_events";function vh(t,e={},n="UNKNOWN"){PP(UE(bP,DP),{tool:"shorts_brain",event_type:t,timestamp:xP(),market:n,payload:e}).catch(r=>console.warn("[usage_events] write failed:",r.message))}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
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
 */const Zy=t=>{const e=VP(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
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
 */const jP=Z.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>Z.createElement("svg",{ref:u,...MP,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:ZE("lucide",s),...!i&&!LP(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>Z.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(t,e)=>{const n=Z.forwardRef(({className:r,...s},i)=>Z.createElement(jP,{ref:i,iconNode:e,className:ZE(`lucide-${OP(Zy(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Zy(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],FP=de("binary",UP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],e1=de("brain",$P);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],e_=de("calendar",zP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],t1=de("chart-column",BP);/**
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
 */const oN=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],t_=de("copy",oN);/**
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
 */const yN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],n1=de("globe",yN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],vN=de("layers",_N);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],r1=de("lightbulb",wN);/**
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
 */const xN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],n_=de("map-pin",xN);/**
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
 */const KN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],s1=de("target",KN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],i1=de("trash-2",QN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],o1=de("trending-up",JN);/**
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
 */const ib=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Fd=de("zap",ib),Nn=FE(za),ob=fw(za),a1="https://drive.google.com/corp/drive/folders/18GCtCrz-Bs1YdXKtQs-tjugb6xudULaX?resourcekey=0-gMJCegK7SZkhgJeT_YTjSw",Sr=["DAU-SCT","DAC-SCT","GenAI DAU-SCT","Impressions","CTR"],Wr=["India","Indonesia","Japan","South Korea","AUNZ"],xa={India:"IN",Indonesia:"ID",Japan:"JP","South Korea":"KR",AUNZ:"AUNZ"},$d={IN:"India",ID:"Indonesia",JP:"Japan",KR:"South Korea",AUNZ:"AUNZ"},zd=["SSC","Shelf","UTS","MVR","UTS SFV","JP Proactive Container"],ab=["kanishak@google.com","danilpalma@google.com","ivanho.wz@gmail.com","ivho@google.com"],Dt=["female","male","total"],lb={female:"FEMALE",male:"MALE",total:"GenPop"},rn=["18-24","25-34","18-34","35+","total"],ub={"18-24":"18-24","25-34":"25-34","18-34":"18-34","35+":"35-44",total:"GenPop"},cb=t=>t&&t>="2026-10-01"?1:t&&t>="2026-07-01"?.65:.4,hb=[{id:"Upload",label:"Data Ingestion",icon:rN},{id:"OKR",label:"Shorts OKR Performance",icon:s1},{id:"Global Hub",label:"Global Holdback",icon:n1},{id:"Market Hub",label:"Campaign Holdback",icon:vN}],Gl=[{id:"AlwaysOn",label:"Always-On",icon:Fd},{id:"ScaledCreation",label:"Scaled Creation",icon:GN},{id:"Effects",label:"Effects",icon:r1},{id:"Trends",label:"Trends",icon:o1},{id:"CultMo",label:"CultMo",icon:iN},{id:"ArtMo",label:"ArtMo",icon:RN},{id:"GenAI Hub",label:"GenAI Hub",icon:eb}],je=t=>(t||"").toString().replace(/['"]/g,"").replace(/\u00A0/g," ").trim(),ot=t=>{try{return je(t).toUpperCase().replace(/[^\p{L}\p{N}]/gu,"")}catch{return je(t).toUpperCase().replace(/[\s\-_&!?,.()'"！]/g,"")}},At=(t,e)=>ot(t)===ot(e),db=t=>ot(t).replace(/INDIA$|INDONESIA$|JAPAN$|SOUTHKOREA$|AUNZ$|IN$|ID$|JP$|KR$/g,"").trim(),fb=t=>t===0?"0.00":t==="NA"||t===null||t===void 0||isNaN(t)?"-":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t),Ar=t=>{const e=je(t);if(!e||e==="-"||e==="Unknown")return null;try{if(e.includes("-")&&e.split("-")[0].length===4)return e;const n=e.split(/[-/]/);if(n.length===3){let s=parseInt(n[0],10),i=parseInt(n[1],10),o=parseInt(n[2],10);o<100&&(o+=2e3);let l,u;return s>12?(u=s,l=i):i>12?(l=s,u=i):(u=s,l=i),l>12?null:`${o}-${l.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return isNaN(r.getTime())?null:r.toISOString().split("T")[0]}catch{return null}},l1=(t,e)=>{const n=Ar(t),r=Ar(e);if(!n||!r)return 0;try{const s=new Date(n),o=new Date(r).getTime()-s.getTime(),l=Math.floor(o/(1e3*60*60*24));return l>=0?l+1:0}catch{return 0}},u1=(t,e)=>{const n=Ar(t),r=Ar(e);if(!n||!r)return!1;try{return new Date(n)>=new Date(r)}catch{return!1}},Gr=t=>{const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];i==='"'?r=!r:i===","&&!r?(e.push(n.trim()),n=""):n+=i}return e.push(n.trim()),e},Le=(t,e)=>{const n=t.map(s=>(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"")),r=e.map(s=>s.toUpperCase().replace(/[^A-Z0-9]/g,""));for(const s of r){const i=n.indexOf(s);if(i!==-1)return i}return n.findIndex(s=>r.some(i=>s.includes(i)))},pb=(t,e,n=null)=>{var i,o;const r=ot(t),s=db(t);if(n){const l=ot(n);if((i=e[l])!=null&&i[r])return e[l][r];if((o=e[l])!=null&&o[s])return e[l][s]}for(const l in e){if(e[l][r])return e[l][r];if(e[l][s])return e[l][s]}return{}},r_=t=>{const e=t?new Date(t):new Date;if(isNaN(e.getTime()))return`SNAPSHOT-${Date.now()}`;const n=e.getFullYear(),r=new Date(n,0,1),s=Math.floor((e-r)/(24*60*60*1e3)),i=Math.ceil((e.getDay()+1+s)/7);return`${n}-W${i.toString().padStart(2,"0")}`},mb=(t,e)=>e?{cardBg:"bg-[#111]",color:"text-[#444]",accent:"bg-[#444]"}:t>=100?{cardBg:"bg-emerald-950/20",color:"text-emerald-400",accent:"bg-emerald-500"}:t>=80?{cardBg:"bg-amber-950/20",color:"text-amber-400",accent:"bg-amber-500"}:{cardBg:"bg-red-950/20",color:"text-red-400",accent:"bg-red-500"},Sl=t=>{const e={...t,metrics:{}};return Sr.forEach(n=>{t.metrics[n]&&Dt.forEach(r=>{rn.forEach(s=>{const i=t.metrics[n][r][s];i&&(i.v!==0||i.abs!==0||i.sig!==0||i.isPaused||i.v==="NA")&&(e.metrics[n]||(e.metrics[n]={}),e.metrics[n][r]||(e.metrics[n][r]={}),e.metrics[n][r][s]=i)})})}),e},gb=t=>{const e={...t,metrics:{}};return Sr.forEach(n=>{e.metrics[n]={female:{},male:{},total:{}},Dt.forEach(r=>{rn.forEach(s=>{var i,o,l;e.metrics[n][r][s]=((l=(o=(i=t.metrics)==null?void 0:i[n])==null?void 0:o[r])==null?void 0:l[s])||{v:0,sig:0,abs:0,isPaused:!1,launchDate:null}})})}),e},Po=(t,e={},n={},r=["Campaign","Campaign Name","Country","Market"],s=!1,i=null,o=!1,l=!1)=>{try{const u=t.split(/\r?\n/).filter(T=>T.trim()!=="");if(u.length<2)return e;const h=Gr(u[0]),f=Le(h,r),p=Le(h,["Country","Market","Market Name"]),v=Le(h,["Value Type","Metric Type"]),k=Le(h,["Slice","Segment"]),P=Le(h,["Date","Reporting Date","Day","Latest Date"]),N=Le(h,["Trend Start Date","Trend Start"]),O=Le(h,["Trend End Date","Trend End"]);if(f===-1)return e;const x={...e};return u.slice(1).forEach(T=>{const A=Gr(T),b=v!==-1?(A[v]||"").replace(/['"]/g,"").trim().toUpperCase():"",M=k!==-1?(A[k]||"").replace(/['"]/g,"").trim().toUpperCase():"",U=P!==-1?Ar(A[P]):null,g=!s&&(b==="RATIO (%)"||b==="RATIO"||b.includes("LIFT")||b==="")&&(M==="CONTROL"||M===""||M==="TOTAL"),y=s&&(b.includes("DELTA")||b===""||b==="TOTAL"||b.includes("IMPRESSIONS")||b.includes("ABSOLUTE")||b.includes("VOLUME")||b.includes("CTR"))&&(M==="CONTROL"||M==="TEST"||M==="TREATMENT"||M===""||M==="TOTAL"),w=b.includes("TREND FAVORABILITY")&&(M==="CONTROL"||M===""||M==="TOTAL");if(!g&&!w&&!y)return;const S=je(A[f])||"Unknown";let I=p!==-1?je(A[p]):i||"APAC",C=$d[I.toUpperCase()]||I;const E=pb(S,n,C==="APAC"?null:C);C==="APAC"&&E&&E.market&&(C=E.market),C==="APAC"&&(C="India");const ne=`${C}_${S}`;let ae=null;const Ut=Le(h,["Gender","Sex"]);if(Ut!==-1){const $=(A[Ut]||"").toLowerCase().trim();$==="female"||$==="f"?ae="female":$==="male"||$==="m"?ae="male":($==="total"||$==="all"||$==="genpop"||$==="gen pop")&&(ae="total")}else ae="total";if(!ae)return;let Ee="total";const B=Le(h,["Age","Age Group"]);if(B!==-1){const $=(A[B]||"").toLowerCase().trim();$.includes("18-24")?Ee="18-24":$.includes("25-34")?Ee="25-34":$.includes("18-34")?Ee="18-34":$.includes("35")&&(Ee="35+")}const Y=o||ot(S).includes("GLOBALHOLDBACK");if(!x[ne]){const $=N!==-1?Ar(A[N]):null,ie=O!==-1?Ar(A[O]):null;x[ne]={country:S,market:C,metrics:{},isAnchor:Y,campaignStartDate:$||E.campaignStartDate||null,campaignEndDate:ie||E.campaignEndDate||null,optimisationEndDate:E.optimisationEndDate||U,segmentTag:E.subTab||"Campaign Hub",meta:E,dataMinDate:U,dataMaxDate:U,explicitTrendStart:$,explicitTrendEnd:ie},Sr.forEach(ce=>{x[ne].metrics[ce]={female:{},male:{},total:{}},Dt.forEach(Ke=>{rn.forEach(ut=>x[ne].metrics[ce][Ke][ut]={v:0,sig:0,abs:0,isPaused:!1,launchDate:null})})})}Sr.forEach($=>{const ie={"DAU-SCT":["DAU-SCT","DAILY SHORTS CREATION TOOL ACTIVE USERS"],"DAC-SCT":["DAC-SCT","DAILY SHORTS CONVERTERS"],"GenAI DAU-SCT":["GENAI DAU","GENAI DAILY ACTIVE USERS"],Impressions:["IMPRESSIONS","TOTAL IMPRESSIONS","REACH","IMPS"],CTR:["CTR","CLICK THROUGH RATE","CLICK-THROUGH RATE"]},ce=h.findIndex(hn=>{const dn=hn.toUpperCase();return(ie[$]||[]).some(ci=>dn.includes(ci))&&!(dn.includes("CONFIDENCE")||dn.includes("BOUND"))});if(ce===-1)return;const Ke=(A[ce]||"").replace(/['"]/g,"").trim(),ut=parseFloat(Ke.replace(/[^\d.-]/g,""))||0,Ft=x[ne].meta.targeting;let gt=!1;if(Y||l)gt=!0;else if(Ft){const hn=Ft.ages.length===0||Ft.ages.includes(Ee),dn=Ft.genders.length===0||Ft.genders.includes(ae);gt=hn&&dn}else gt=!0;($==="Impressions"||$==="CTR")&&(gt=!0);const Tt=$==="GenAI DAU-SCT",cn=(x[ne].meta.tab||"").toLowerCase()==="genai hub",Jt=gt&&(!Tt||cn||Y),Pt=Jt?ut:"NA";if(g)(Pt!=="NA"&&Pt!==0||x[ne].metrics[$][ae][Ee].v===0||x[ne].metrics[$][ae][Ee].v==="NA")&&(x[ne].metrics[$][ae][Ee].v=Pt);else if(y)$==="Impressions"||$==="CTR"?(Pt!=="NA"&&Pt!==0||x[ne].metrics[$][ae][Ee].v===0||x[ne].metrics[$][ae][Ee].v==="NA")&&(x[ne].metrics[$][ae][Ee].v=Pt):(Pt!=="NA"&&Pt!==0||x[ne].metrics[$][ae][Ee].abs===0||x[ne].metrics[$][ae][Ee].abs==="NA")&&(x[ne].metrics[$][ae][Ee].abs=Pt);else if(w&&Jt){const hn=Ke.toUpperCase(),dn=hn.includes("POSITIVE")||hn.includes("SSP")?1:hn.includes("NEGATIVE")||hn.includes("SSN")?-1:0;dn!==0&&(x[ne].metrics[$][ae][Ee].sig=dn)}})}),x}catch(u){return console.error("CSV Parse Error:",u),e}},yb=t=>{const e=[],n=["SHELF","SSC","UTS","MVR","UTSSFV"];return Wr.forEach(r=>{(t[r]||[]).forEach((i,o)=>{var b,M,U;if(u1(i.optimisationEndDate,i.campaignEndDate))return;const l=(b=i.meta)!=null&&b.tab?je(i.meta.tab):null;if(l&&Gl.some(g=>At(g.id,l)||At(g.label,l)))return;const u=((M=i.metrics)==null?void 0:M["DAU-SCT"])||{},h=l1(i.campaignStartDate,i.optimisationEndDate),f=h>=14,p=xa[r]||r.toUpperCase(),v=ot(i.country),k=n.some(g=>v.includes(g)),P=(g,y,w)=>{var Ut,Ee,B,Y,$;if(((Ee=(Ut=u[g])==null?void 0:Ut[y])==null?void 0:Ee.v)==="NA")return;const S=(B=u[g])==null?void 0:B[y];if(!S)return;const I=S.v||0,C=S.sig===-1,E=f?"PAUSE":"MAINTAIN",ne=C?"stat sig negative":"neutral negative";let ae="";if(w==="G"&&y!=="total"&&I>=0){const ie=(Y=u.male)==null?void 0:Y[y],ce=($=u.female)==null?void 0:$[y];if((ie==null?void 0:ie.v)!=="NA"&&(ce==null?void 0:ce.v)!=="NA"&&((ie==null?void 0:ie.v)||0)<-1e-4&&((ce==null?void 0:ce.v)||0)<-1e-4){const Ke=f?"Pause":"Maintain (Learning Phase)",ut=f?"":` observed but hasn't reached maturity (Current: ${h}d / Required: 14d)`;f&&k?ae=`${p} ${i.country} - Pause G${y} given negative lift across both males (${ie.v.toFixed(2)}%) and females (${ce.v.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:ae=`${p} ${i.country} - ${Ke} G${y} given negative lift across both males (${ie.v.toFixed(2)}%) and females (${ce.v.toFixed(2)}%)${ut}`}}ae||(f?k?ae=`${p} ${i.country} - Pause ${w}${y} given ${ne} (${I.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:ae=`${p} ${i.country} - Pause ${w}${y} given ${ne} (${I.toFixed(2)}%)`:ae=`${p} ${i.country} - Maintain ${w}${y} (Learning Phase): Negative lift (${I.toFixed(2)}%) observed but hasn't reached maturity (Current: ${h}d / Required: 14d).`),e.push({id:`CAMP_${r}_${o}_P_${g}_${y}`,country:p,campaign:i.country,age:y==="total"?"GenPop":y,gender:g==="total"?"GenPop":g.toUpperCase(),recommendation:E,justification:ae})},N=((U=u.total)==null?void 0:U.total)||{v:0,sig:0};!k&&N.v!=="NA"&&N.sig===1&&N.v>.001&&e.push({id:`CAMP_${r}_${o}_SC`,country:p,campaign:i.country,age:"GenPop",gender:"GenPop",recommendation:"SCALE",justification:`${p} ${i.country} - Scale GenPop: Stat-sig positive lift (+${N.v.toFixed(2)}%) observed.`});const O=g=>{let y=[];return["18-24","25-34","35+"].forEach(w=>{var S,I,C,E;((I=(S=u[g])==null?void 0:S[w])==null?void 0:I.v)!=="NA"&&(((E=(C=u[g])==null?void 0:C[w])==null?void 0:E.v)||0)<-1e-4&&y.push(w)}),y},x=O("male"),T=O("female"),A=x.filter(g=>T.includes(g));A.forEach(g=>P("total",g,"G")),x.filter(g=>!A.includes(g)).forEach(g=>P("male",g,"M")),T.filter(g=>!A.includes(g)).forEach(g=>P("female",g,"F"))})}),e},s_=t=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch{}document.body.removeChild(e)},c1=({className:t})=>m.jsxs("svg",{className:t,viewBox:"0 0 1443 1250",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M485.29 0L0 839.25l242.42 410.74 485.29-839.25H485.29z"}),m.jsx("path",{d:"M957.66 0l-242.43 419.63 485.29 830.36 242.54-419.63L957.66 0z",opacity:"0.8"}),m.jsx("path",{d:"M524.23 839.25l-242.42 410.74h960.54l242.42-410.74H524.23z",opacity:"0.6"})]}),i_=({activeMetrics:t,toggleMetric:e,handleAllToggle:n,allowedMetrics:r=Sr})=>m.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[m.jsx("div",{className:"flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]",children:r.map(s=>m.jsx("button",{type:"button",onClick:()=>e(s),className:`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${t.includes(s)?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:s},s))}),m.jsx("button",{type:"button",onClick:()=>n(),className:`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${t.length===r.length?"bg-white text-black border-white":"bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]"}`,children:t.length===r.length?"Selective View":"Sync All Metrics"})]}),o_=({data:t,activeMetrics:e,latestGlobalDate:n,isCampaignView:r=!1,hideDates:s=!1,isAlwaysOn:i=!1,ignorePaused:o=!1})=>{const l=Z.useRef(null),u={female:{1:"bg-blue-900/40 text-blue-100",2:"bg-blue-900/20",3:"bg-blue-950/40 text-blue-400"},male:{1:"bg-purple-900/40 text-purple-100",2:"bg-purple-900/20",3:"bg-purple-950/40 text-purple-400"},total:{1:"bg-amber-900/80 text-amber-50",2:"bg-amber-800/20",3:"bg-amber-950 text-amber-400 font-bold"}},h=f=>{l.current&&l.current.scrollBy({left:f==="left"?-600:600,behavior:"smooth"})};return!t||t.length===0?m.jsxs("div",{className:"py-40 text-center flex flex-col items-center justify-center gap-6",children:[m.jsx("div",{className:"p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]",children:m.jsx(sb,{className:"w-12 h-12 text-[#3a3a3a] animate-pulse"})}),m.jsx("p",{className:"text-[#808080] font-bold text-sm uppercase tracking-widest",children:"No Data Available"})]}):m.jsxs("div",{className:"relative group/table",children:[m.jsx("button",{onClick:()=>h("left"),className:"absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:m.jsx(GP,{className:"w-6 h-6"})}),m.jsx("button",{onClick:()=>h("right"),className:"absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:m.jsx(QP,{className:"w-6 h-6"})}),m.jsx("div",{ref:l,className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto no-scrollbar scroll-smooth",children:m.jsxs("table",{className:"w-full text-center border-collapse",children:[m.jsxs("thead",{children:[m.jsxs("tr",{className:"text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:[m.jsx("th",{rowSpan:3,className:"px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[300px]",children:i?"Trend Identifier":r?"Campaign Entity":"Country / Market"}),Dt.map((f,p)=>m.jsx("th",{colSpan:rn.length*e.length,className:`py-6 border-white/10 ${u[f][1]} ${p<Dt.length-1?"border-r-2 border-white/20":""}`,children:m.jsxs("div",{className:"flex items-center justify-center gap-3",children:[m.jsx(XN,{className:"w-4 h-4 opacity-50"}),lb[f]]})},f))]}),m.jsx("tr",{className:"text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:Dt.map(f=>m.jsx(yr.Fragment,{children:rn.map((p,v)=>m.jsx("th",{colSpan:e.length,className:`py-4 transition-colors ${u[f][2]} ${v===rn.length-1&&Dt.indexOf(f)<Dt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:ub[p]},p))},f))}),m.jsx("tr",{className:"text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]",children:Dt.map(f=>m.jsx(yr.Fragment,{children:rn.map((p,v)=>m.jsx(yr.Fragment,{children:e.map((k,P)=>m.jsx("th",{className:`py-3 px-3 font-mono ${u[f][3]} ${v===rn.length-1&&P===e.length-1&&Dt.indexOf(f)<Dt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:k.includes("GenAI")?"GenAI":k==="Impressions"?"Imprs":k.split("-")[0]},k))},p))},f))})]}),m.jsx("tbody",{className:"divide-y divide-white/5",children:t.map((f,p)=>{var b,M,U;const v=!!f.isAnchor,k=(U=(M=(b=f.metrics)==null?void 0:b[e[0]||"DAU-SCT"])==null?void 0:M.total)==null?void 0:U.total,P=!o&&(k!=null&&k.isPaused)&&(k!=null&&k.launchDate)&&k.launchDate!=="Ended"?k.launchDate:null,N=i?f.explicitTrendStart||f.dataMinDate||f.campaignStartDate:f.campaignStartDate||f.explicitTrendStart||f.dataMinDate,O=f.campaignEndDate||P||f.optimisationEndDate;let T=i?f.explicitTrendEnd||f.dataMaxDate||O:f.campaignEndDate||f.explicitTrendEnd||f.dataMaxDate||f.optimisationEndDate;!i&&n&&T&&new Date(T)>new Date(n)&&(T=n);const A=l1(N,T);return m.jsxs("tr",{className:`transition-all duration-200 ${v?"bg-white/[0.05]":"hover:bg-white/[0.03]"}`,children:[m.jsx("td",{className:`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 bg-[#111] ${v?"text-blue-400 font-bold":"text-[#e0e0e0]"}`,children:m.jsxs("div",{className:"flex flex-col gap-1.5",children:[m.jsx("span",{className:"font-bold text-[12px] uppercase tracking-tight",children:String(f.country||"Unknown")}),!s&&!v&&(N||i)&&m.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 p-2 rounded bg-black/40 border border-white/5 shadow-inner",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(e_,{className:"w-3 h-3 text-blue-400"}),m.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[m.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend Start:":"Start:"}),String(N||"N/A")]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(e_,{className:"w-3 h-3 text-amber-400"}),m.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[m.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend End:":"End:"}),String(r&&f.campaignEndDate?f.campaignEndDate:T||"Active")]})]}),m.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[m.jsx(tN,{className:"w-3 h-3 text-emerald-400"}),m.jsxs("span",{className:"text-[9px] font-bold tracking-tighter uppercase text-emerald-400",children:[i?"Trend Days Live:":"Days Live:"," ",A]})]})]})]})}),Dt.map(g=>m.jsx(yr.Fragment,{children:rn.map((y,w)=>m.jsx(yr.Fragment,{children:e.map(S=>{const I=f.metrics[S][g][y],C=w===rn.length-1&&e.indexOf(S)===e.length-1;let E="text-slate-500 font-medium",ne="";const ae=I.isPaused&&!v&&!o;return ae?(E="text-[#808080] font-bold",ne="bg-[#1a1a1a]"):I.v!=="NA"&&I.sig===-1?(E="text-red-500 font-bold",ne="bg-red-500/10"):I.v!=="NA"&&I.sig===1?(E="text-emerald-500 font-bold",ne="bg-emerald-500/10"):I.v!==0&&I.v!=="NA"&&(E="text-slate-100 font-bold"),m.jsx("td",{className:`py-5 px-3 font-mono text-[13px] tabular-nums ${E} ${ne} ${C&&Dt.indexOf(g)<Dt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:m.jsx("div",{className:"flex flex-col items-center text-center",children:ae?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"leading-none uppercase",children:"Paused"}),m.jsx("span",{className:"text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic",children:String(I.launchDate||"No Data")})]}):I.v==="NA"?m.jsx("span",{className:"text-gray-500 opacity-50 font-bold",children:"NA"}):m.jsxs(m.Fragment,{children:[m.jsx("span",{children:v&&(S==="Impressions"||S==="CTR")&&I.v===0?"NA":S==="Impressions"?fb(I.v):S==="CTR"?`${I.v.toFixed(2)}%`:I.v===0?"0.00":I.v>0?`+${I.v.toFixed(2)}`:`${I.v.toFixed(2)}`}),I.abs!==0&&I.abs!=="NA"&&S!=="Impressions"&&S!=="CTR"&&m.jsxs("span",{className:"text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none",children:["(",I.abs>0?`+${Math.round(I.abs).toLocaleString()}`:Math.round(I.abs).toLocaleString(),")"]})]})})},`${p}-${S}-${g}-${y}`)})},y))},g))]},`${p}-${f.country}`)})})]})})]})},_b=({globalData:t,regionalData:e,latestDate:n,quarterStart:r})=>{const[s,i]=Z.useState(null),[o,l]=Z.useState({}),[u,h]=Z.useState([]),[f,p]=Z.useState(!1),[v,k]=Z.useState(new Set),[P,N]=Z.useState(null),[O,x]=Z.useState({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}),T=g=>{N(g),setTimeout(()=>N(null),2e3)},A=Z.useMemo(()=>{if(!n)return"TBD";const g=new Date("2026-06-30"),y=new Date(n),w=Math.ceil((g-y)/(1e3*60*60*24));return w>0?w:0},[n]),b=Z.useMemo(()=>["APAC","India","Indonesia","Japan","South Korea","AUNZ"].map(g=>{var E,ne,ae,Ut;const y=t.find(Ee=>At(Ee.country,g)||At(Ee.country,xa[g])),w=(Ut=(ae=(ne=(E=y==null?void 0:y.metrics)==null?void 0:E["DAU-SCT"])==null?void 0:ne.total)==null?void 0:ae.total)==null?void 0:Ut.v,S=w==="NA"||isNaN(w)||w===void 0?0:w,I=cb(r),C=I>0?S/I*100:0;return{market:g.toUpperCase(),actual:S,target:I,perfIndex:C,isOffline:!y||w==="NA"}}),[t,r]),M=Z.useMemo(()=>[...yb(e),...u].filter(w=>!v.has(w.id)).map(w=>o[w.id]?{...w,...o[w.id]}:w),[e,u,v,o]),U=()=>{O.campaign&&(h(g=>[...g,{...O,id:`MANUAL_${Date.now()}`}]),p(!1),x({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}))};return m.jsxs("div",{className:"w-full max-w-[1600px] mx-auto pb-32",children:[P&&m.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase shadow-xl",children:P}),m.jsx("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8",children:m.jsxs("div",{className:"space-y-4",children:[m.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase",children:"Shorts OKR Performance"}),m.jsxs("div",{className:"flex flex-wrap gap-10 pt-4",children:[m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Quarter Start"}),m.jsx("p",{className:"text-lg font-bold text-white",children:r||"TBD"})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Reporting Date"}),m.jsx("p",{className:"text-lg font-bold text-emerald-400",children:String(n||"Awaiting Data...")})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Days Left"}),m.jsxs("p",{className:"text-lg font-bold text-amber-400",children:[A," ",m.jsx("span",{className:"text-[10px] text-[#808080] ml-1 font-normal",children:"remaining"})]})]})]})]})}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:b.map((g,y)=>{const w=mb(g.perfIndex,g.isOffline);return m.jsxs("div",{className:`relative ${w.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555] shadow-sm`,children:[m.jsxs("div",{className:"flex justify-between items-start mb-6",children:[m.jsx("h3",{className:"text-xl font-bold text-white uppercase",children:g.market}),!g.isOffline&&m.jsx(t1,{className:`w-5 h-5 ${w.color}`})]}),m.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[m.jsxs("span",{className:"text-3xl font-bold text-white",children:[g.perfIndex.toFixed(1),"%"]}),m.jsx("span",{className:"text-[9px] font-bold text-[#808080] uppercase tracking-tighter",children:"INDEX"})]}),m.jsx("div",{className:"relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4",children:m.jsx("div",{className:`h-full ${w.accent} transition-all duration-1000`,style:{width:`${Math.min(g.perfIndex,100)}%`}})}),m.jsxs("div",{className:"flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]",children:[m.jsxs("div",{className:"text-[#808080] uppercase",children:["Actual: ",m.jsxs("span",{className:"text-white",children:[g.actual>0?"+":"",g.actual.toFixed(2),"%"]})]}),m.jsxs("div",{className:"text-[#808080] uppercase",children:["Target: ",m.jsxs("span",{className:"text-[#b0b0b0]",children:[g.target.toFixed(2),"%"]})]})]})]},y)})}),m.jsxs("div",{className:"space-y-8",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]",children:m.jsx(r1,{className:"w-6 h-6 text-amber-400"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-2xl font-bold text-white uppercase",children:"Strategic Guidance"}),m.jsx("p",{className:"text-[#808080] text-xs uppercase tracking-widest mt-1 font-medium",children:"Data-Driven Directives & Overrides"})]})]}),m.jsxs("div",{className:"flex flex-wrap gap-3",children:[m.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all active:scale-95",children:[m.jsx(VN,{className:"w-4 h-4"})," Add Pointer"]}),m.jsxs("button",{onClick:()=>{if(M.length===0)return;const g="Market	Entity	Age	Gender	Directive	Justification",y=M.map(w=>`${w.country}	${w.campaign}	${w.age}	${w.gender}	${w.recommendation}	${w.justification}`).join(`
`);s_(`${g}
${y}`),T("Matrix Copied")},className:"flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] shadow-lg transition-all active:scale-95",children:[m.jsx(t_,{className:"w-4 h-4"})," Copy All"]}),m.jsxs("button",{onClick:()=>{k(new Set),l({}),h([]),T("Matrix Restored")},className:"flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a] active:scale-95",children:[m.jsx($N,{className:"w-4 h-4"})," Restore"]})]})]}),f&&m.jsxs("div",{className:"bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6 shadow-2xl animate-in fade-in zoom-in duration-200",children:[m.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Market"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase text-white",value:O.country,onChange:g=>x(y=>({...y,country:g.target.value.toUpperCase()}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Entity"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",placeholder:"e.g. Veo",value:O.campaign,onChange:g=>x(y=>({...y,campaign:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Age"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:O.age,onChange:g=>x(y=>({...y,age:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Gender"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:O.gender,onChange:g=>x(y=>({...y,gender:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Directive"}),m.jsxs("select",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:O.recommendation,onChange:g=>x(y=>({...y,recommendation:g.target.value})),children:[m.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),m.jsx("option",{value:"SCALE",children:"SCALE"}),m.jsx("option",{value:"PAUSE",children:"PAUSE"})]})]})]}),m.jsx("textarea",{className:"w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] mb-4 resize-none",value:O.justification,onChange:g=>x(y=>({...y,justification:g.target.value})),placeholder:"Context..."}),m.jsxs("div",{className:"flex justify-end gap-3",children:[m.jsx("button",{type:"button",onClick:()=>p(!1),className:"bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg font-bold text-[10px] uppercase border border-[#3a3a3a]",children:"Cancel"}),m.jsx("button",{onClick:U,className:"bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase shadow-lg",children:"Confirm"})]})]}),m.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto shadow-sm",children:[m.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold",children:[m.jsx("th",{className:"px-8 py-6 text-left",children:"Market"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Entity"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Age"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Gender"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Directive"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Justification"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Action"})]})}),m.jsx("tbody",{className:"divide-y divide-white/5",children:M.map(g=>{var y,w;return m.jsxs("tr",{className:`hover:bg-white/[0.02] group/row transition-colors ${g.recommendation==="PAUSE"?"bg-red-500/[0.03]":""}`,children:[m.jsx("td",{className:"px-8 py-4 font-bold uppercase text-blue-400",children:g.country}),m.jsx("td",{className:"px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]",children:g.campaign}),m.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase font-mono",children:g.age}),m.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase font-mono",children:g.gender}),m.jsx("td",{className:"px-8 py-4 font-bold",children:s===g.id?m.jsxs("select",{className:"bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] text-white",value:((y=o[g.id])==null?void 0:y.recommendation)||g.recommendation,onChange:S=>l(I=>({...I,[g.id]:{...I[g.id]||g,recommendation:S.target.value}})),children:[m.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),m.jsx("option",{value:"SCALE",children:"SCALE"}),m.jsx("option",{value:"PAUSE",children:"PAUSE"})]}):m.jsx("span",{className:g.recommendation==="PAUSE"?"text-red-400":g.recommendation==="SCALE"?"text-emerald-400":g.justification.includes("Learning")?"text-blue-400":"text-amber-400",children:g.recommendation})}),m.jsx("td",{className:"px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed",children:s===g.id?m.jsx("textarea",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] min-h-[60px] resize-none",value:((w=o[g.id])==null?void 0:w.justification)||g.justification,onChange:S=>l(I=>({...I,[g.id]:{...I[g.id]||g,justification:S.target.value}}))}):g.justification}),m.jsx("td",{className:"px-8 py-5 text-center",children:m.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity",children:[s===g.id?m.jsx("button",{onClick:()=>i(null),className:"p-2.5 rounded-xl bg-emerald-600 text-white",children:m.jsx(BN,{className:"w-4 h-4"})}):m.jsx("button",{onClick:()=>i(g.id),className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white",children:m.jsx(NN,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>{s_(`${g.country}	${g.campaign}	${g.age}	${g.gender}	${g.recommendation}	${g.justification}`),T("Row Copied")},className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400",children:m.jsx(t_,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>k(S=>new Set([...S,g.id])),className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500",children:m.jsx(i1,{className:"w-4 h-4"})})]})})]},g.id)})})]}),M.length===0&&m.jsx("div",{className:"p-20 text-center text-[#555] font-bold uppercase tracking-widest text-[10px]",children:"Matrix Empty"})]})]})]})},a_=({type:t,title:e,icon:n,tag:r,uploadedFiles:s,handleFileUpload:i})=>{const o=t==="pct",l=o?"bg-[#1a1500]":"bg-[#0a0a0a]",u=o?"border-amber-500/30":"border-blue-500/30",h=o?"text-amber-500":"text-blue-500",f=o?"bg-amber-500/20":"bg-blue-500/20";return m.jsxs("div",{className:`p-6 rounded-lg border ${u} ${l} mb-6 transition-all shadow-xl`,children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:`p-2 rounded-lg flex items-center justify-center ${f} ${h}`,children:m.jsx(n,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:`text-lg font-bold uppercase tracking-tight ${h}`,children:e}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:r})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left items-stretch",children:[m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:p=>i(t,"global",p.target.files[0])}),m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].global?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(n1,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"Global Hub Master"}),m.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].global?s[t].global.name:"PUSH_MASTER_FILE"})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].countryHB).length>0?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(dN,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Market Hub Nodes"}),m.jsx("div",{className:"w-full grid grid-cols-5 gap-1 px-1",children:Wr.map(p=>m.jsxs("div",{className:"relative aspect-square group/item",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:v=>i(t,"countryHB",v.target.files[0],p)}),m.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].countryHB[p]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:m.jsx("span",{className:"text-[7px] font-black uppercase",children:xa[p]})})]},p))})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].alwaysOn).length>0?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Fd,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Always-On Trends"}),m.jsx("div",{className:"w-full grid grid-cols-2 gap-1.5 px-2",children:zd.filter(p=>p!=="JP Proactive Container").map(p=>m.jsxs("div",{className:"relative h-7 group/item",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:v=>i(t,"alwaysOn",v.target.files[0],p)}),m.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].alwaysOn[p]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:m.jsx("span",{className:"text-[7px] font-black uppercase",children:p})})]},p))})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:p=>i(t,"jpProactive",p.target.files[0])}),m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].jpProactive?"bg-red-500/10 text-red-500":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Fd,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"JP Proactive Container"}),m.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].jpProactive?s[t].jpProactive.name:"PUSH_JP_PROACTIVE_CSV"})]})]})]})},vb=({uploadedFiles:t,handleFileUpload:e,startAnalysis:n,isAnalyzing:r})=>m.jsx("div",{className:"min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0] overflow-y-auto no-scrollbar",children:m.jsxs("div",{className:"max-w-[1500px] w-full z-10 text-center",children:[m.jsxs("div",{className:"mb-12",children:[m.jsx("div",{className:"inline-block mb-4",children:m.jsx("div",{className:"bg-[#FF0000] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-red-500/20",children:m.jsx(e1,{className:"text-white w-8 h-8"})})}),m.jsxs("h1",{className:"text-4xl font-bold tracking-tighter mb-1 uppercase flex items-center justify-center gap-5",children:["Shorts Brain ",m.jsx("span",{className:"text-[#FF0000]",children:"2.0"}),m.jsx("a",{href:a1,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#555] hover:text-white hover:bg-white/10 transition-all hover:scale-105 group shadow-lg",title:"Open Resource Drive",children:m.jsx(c1,{className:"w-6 h-6"})})]}),m.jsx("p",{className:"text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase",children:"APAC Marketing Incrementality Hub"})]}),m.jsxs("div",{className:"p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all shadow-xl",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500",children:m.jsx(qN,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-emerald-500",children:"Structural Metadata Configuration"}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Campaign Definitions & State Instructions"})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:[m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.campaignInfo?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(ZP,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"structural hierarchy"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.campaignInfo?t.shared.campaignInfo.name:"PUSH_STRUCTURAL_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("shared","campaignInfo",s.target.files[0])})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.pauseRelive?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(LN,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"State Instructions"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.pauseRelive?t.shared.pauseRelive.name:"PUSH_INSTRUCTIONS_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("shared","pauseRelive",s.target.files[0])})]})]})]}),m.jsx(a_,{type:"pct",title:"Ratio-Based Analysis",tag:"Relative Lift Streams (%)",icon:o1,uploadedFiles:t,handleFileUpload:e}),m.jsx(a_,{type:"abs",title:"Volume-Based Analysis",tag:"Discrete Delta Streams (Delta)",icon:FP,uploadedFiles:t,handleFileUpload:e}),m.jsxs("div",{className:"p-6 rounded-lg border border-purple-500/30 bg-[#0d0a1a] mb-6 transition-all shadow-xl",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500",children:m.jsx(s1,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-purple-500",children:"Attribution Analysis"}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Marketing Pressure & Reach Metrics"})]})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.attribution.impressions?"bg-purple-500/10 text-purple-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(t1,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Impressions/CTR CSV"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.attribution.impressions?t.attribution.impressions.name:"PUSH_IMPRESSIONS_CTR_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("attribution","impressions",s.target.files[0])})]})})]}),m.jsxs("button",{type:"button",onClick:()=>n(),disabled:r,className:"px-12 py-5 rounded-2xl font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-4 mx-auto uppercase mt-8 border border-white/10 shadow-2xl shadow-red-500/30 active:scale-95 disabled:opacity-50",children:[r?m.jsx(UN,{className:"w-5 h-5 animate-spin"}):m.jsx(DN,{className:"w-5 h-5"}),r?"Processing APAC Data Streams...":"Execute Intelligent Engine"]})]})}),wb=({userEmail:t})=>{const[e,n]=Z.useState(!1),[r,s]=Z.useState(!1),[i,o]=Z.useState("OKR"),[l,u]=Z.useState(!0),[h,f]=Z.useState(["DAU-SCT"]),[p,v]=Z.useState(!1),[k,P]=Z.useState("India"),[N,O]=Z.useState(null),[x,T]=Z.useState("2026-02-01"),[A,b]=Z.useState(null),[M,U]=Z.useState(!1),[g,y]=Z.useState(!1),w=ab.includes((t||"").toLowerCase()),S=Z.useRef(!1),[I,C]=Z.useState({AlwaysOn:"India",ScaledCreation:"India",Effects:"India",Trends:"India",CultMo:"India",ArtMo:"India","GenAI Hub":"India"}),[E,ne]=Z.useState({AlwaysOn:"SSC",ScaledCreation:"",Effects:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":""}),[ae,Ut]=Z.useState({AlwaysOn:"",ScaledCreation:"",Effects:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":""}),[Ee,B]=Z.useState([]),[Y,$]=Z.useState({}),[ie,ce]=Z.useState({}),[Ke,ut]=Z.useState({pct:{global:null,countryHB:{},alwaysOn:{}},abs:{global:null,countryHB:{},alwaysOn:{}},shared:{campaignInfo:null,pauseRelive:null},attribution:{impressions:null}}),[Ft,gt]=Z.useState([]),Tt=Z.useCallback(V=>{const z=[],q={};Wr.forEach(te=>q[te]=[]);const W={},K=(te,le,qe=null,tt=null)=>{const It=te.meta||{};let ct=qe||je(It.tab),nt=tt||je(It.subTab)||"Generic",rt=te.market||le||"India";const Mr=ot(te.country);(je(It.subTab).toUpperCase()==="JP PROACTIVE CONTAINER"||je(It.subSubTab).toUpperCase()==="JP PROACTIVE CONTAINER")&&(ct="AlwaysOn",nt="JP Proactive Container",rt="Japan");const St=Gl.find(Rn=>At(Rn.id,ct)||At(Rn.label,ct));if(St){const Rn=je(It.subSubTab)||"Default";W[St.id]||(W[St.id]={}),W[St.id][rt]||(W[St.id][rt]={}),W[St.id][rt][nt]||(W[St.id][rt][nt]={}),W[St.id][rt][nt][Rn]||(W[St.id][rt][nt][Rn]={}),W[St.id][rt][nt][Rn][Mr]=te}};V.forEach(te=>{const le=gb(te);le._source==="global"?(z.push(le),K(le,"APAC")):le._source==="market"?(q[le._market]&&q[le._market].push(le),K(le,le._market)):le._source==="alwaysOn"?K(le,null,"AlwaysOn",le._category):le._source==="jpProactive"&&K(le,"Japan","AlwaysOn","JP Proactive Container")});const re={};return Object.keys(W).forEach(te=>{re[te]={},Object.keys(W[te]).forEach(le=>{re[te][le]={},Object.keys(W[te][le]).forEach(qe=>{re[te][le][qe]={},Object.keys(W[te][le][qe]).forEach(tt=>{re[te][le][qe][tt]=Object.values(W[te][le][qe][tt])})})})}),{gData:z,rData:q,cHub:re}},[]);Z.useEffect(()=>{if(!A)return;const V=Xy(bn(Nn,"shortsbrain_data","latest"),async z=>{if(z.exists()){const q=z.data();if(q.batchId&&q.chunkCount!==void 0){let W=[];const K=[];for(let te=0;te<q.chunkCount;te++)K.push(Tl(bn(Nn,"shortsbrain_data",`chunk_${q.batchId}_${te}`)));if((await Promise.all(K)).forEach(te=>{te.exists()&&te.data().data&&(W=W.concat(te.data().data))}),W.length>0){const{gData:te,rData:le,cHub:qe}=Tt(W);B(te),$(le),ce(qe),q.reportingDate&&O(q.reportingDate),q.quarterStart&&T(q.quarterStart),o("OKR"),S.current=!0}}else if(q.chunkCount!==void 0&&!q.batchId){let W=[];for(let K=0;K<q.chunkCount;K++){const re=await Tl(bn(Nn,"shortsbrain_data",`latest_chunk_${K}`));re.exists()&&re.data().data&&(W=W.concat(re.data().data))}if(W.length>0){const{gData:K,rData:re,cHub:te}=Tt(W);B(K),$(re),ce(te),q.reportingDate&&O(q.reportingDate),q.quarterStart&&T(q.quarterStart),o("OKR"),S.current=!0}}else if(q.masterList){const{gData:W,rData:K,cHub:re}=Tt(q.masterList);B(W),$(K),ce(re),q.reportingDate&&O(q.reportingDate),q.quarterStart&&T(q.quarterStart),o("OKR"),S.current=!0}}});return()=>V()},[A,Tt]);const cn=typeof __app_id<"u"?__app_id:"shorts-brain-v2",Jt=Z.useMemo(()=>i==="Global Hub"||i==="AlwaysOn"?Sr.filter(V=>V!=="Impressions"&&V!=="CTR"):Sr,[i]),Pt=Z.useMemo(()=>{var W;const V=I[i],z=(W=ie[i])==null?void 0:W[V];return z?Object.keys(z).sort():[]},[i,I,ie]),hn=Z.useMemo(()=>{var W,K;const V=I[i],z=E[i],q=(K=(W=ie[i])==null?void 0:W[V])==null?void 0:K[z];return q?Object.keys(q).sort():[]},[i,I,E,ie]);Z.useEffect(()=>{const V=tw(ob,b);return()=>V()},[]),Z.useEffect(()=>{if(!A)return;const V=UE(Nn,"artifacts",cn,"public","data","snapshots"),z=Xy(V,q=>{const K=[...q.docs.map(re=>({...re.data(),id:re.id})).filter(re=>!re.id.includes("_chunk_"))].sort((re,te)=>(te.timestamp||0)-(re.timestamp||0));gt(K)},q=>console.error("Firestore Error:",q));return()=>z()},[A,cn]),Z.useEffect(()=>{f(V=>{const z=V.filter(q=>Jt.includes(q));return z.length>0?z:[Jt[0]]})},[Jt]);const dn=async V=>{if(A)try{const z=`snap_${Date.now()}`,q=V.masterList,W=V.batchId||Date.now().toString(),K=100,re=[];for(let le=0;le<q.length;le+=K)re.push(q.slice(le,le+K));const te=re.map((le,qe)=>Il(bn(Nn,"artifacts",cn,"public","data","snapshots",`${z}_chunk_${W}_${qe}`),{data:le}));await Promise.all(te),await Il(bn(Nn,"artifacts",cn,"public","data","snapshots",z),{batchId:W,chunkCount:re.length,timestamp:Date.now(),weekId:r_(V.reportingDate),quarterStart:x})}catch(z){console.error("Cloud Save Error:",z)}},ui=async()=>{s(!0);try{const V=fe=>new Promise(Ce=>{fe||Ce("");const X=new FileReader;X.onload=Ne=>Ce(Ne.target.result),X.readAsText(fe)});let z={};if(Ke.shared.campaignInfo){const Ce=(await V(Ke.shared.campaignInfo)).split(/\r?\n/).filter(X=>X.trim()!=="");if(Ce.length>1){const X=Gr(Ce[0]),Ne=Le(X,["Campaign","Campaign Name"]),pe=Le(X,["Market","Country"]),Ae=Le(X,["Campaign Tabs","Tabs","Tab"]),Te=Le(X,["Campaign Sub tabs","Sub tabs","Sub tab","Sub category"]),Ie=Le(X,["Campaign Hub Sub Sub tabs","Sub sub tabs","Sub sub tab"]),Re=Le(X,["Start Date"]),ke=Le(X,["End Date"]),be=Le(X,["Optimisation End Date"]),ve=Le(X,["Age"]),st=Le(X,["Gender"]);Ce.slice(1).forEach(De=>{const Ve=Gr(De),$t=je(Ve[Ne]);if($t){const qn=je(Ve[pe]).toUpperCase(),it=$d[qn]||Wr.find(Cs=>At(Cs,qn))||"India";z[ot(it)]||(z[ot(it)]={});const ht=ot($t);if(z[ot(it)][ht]||(z[ot(it)][ht]={market:it,tab:je(Ve[Ae]),subTab:je(Ve[Te]),subSubTab:je(Ve[Ie]),campaignStartDate:je(Ve[Re]),campaignEndDate:je(Ve[ke]),optimisationEndDate:je(Ve[be]),targeting:{ages:[],genders:[]}}),ve!==-1&&Ve[ve]){const Cs=je(Ve[ve]).toLowerCase().split(",").map(Nt=>Nt.trim()),Qe=[];Cs.forEach(Nt=>{Nt.includes("18-24")&&Qe.push("18-24"),Nt.includes("25-34")&&Qe.push("25-34"),Nt.includes("18-34")&&Qe.push("18-34"),(Nt.includes("35-44")||Nt.includes("35+"))&&Qe.push("35+")}),Qe.includes("18-24")&&Qe.includes("25-34")&&Qe.push("18-34"),Qe.push("total"),z[ot(it)][ht].targeting.ages=[...new Set([...z[ot(it)][ht].targeting.ages,...Qe])]}if(st!==-1&&Ve[st]){const Cs=je(Ve[st]).toLowerCase().split(",").map(Nt=>Nt.trim()),Qe=[];Cs.forEach(Nt=>{(Nt==="male"||Nt==="m")&&Qe.push("male"),(Nt==="female"||Nt==="f")&&Qe.push("female")}),Qe.push("total"),z[ot(it)][ht].targeting.genders=[...new Set([...z[ot(it)][ht].targeting.genders,...Qe])]}}})}}let q={};if(Ke.shared.pauseRelive){const Ce=(await V(Ke.shared.pauseRelive)).split(/\r?\n/).filter(X=>X.trim()!=="");if(Ce.length>1){const X=Gr(Ce[0]),Ne=Le(X,["Campaign","Campaign Name"]),pe=Le(X,["Market","Country"]),Ae=Le(X,["Age"]),Te=Le(X,["Gender"]),Ie=Le(X,["Instruction","Action"]),Re=Le(X,["Launch Date"]);Ce.slice(1).forEach(ke=>{const be=Gr(ke),ve=ot(be[Ne]),st=je(be[pe]),De=ot($d[st.toUpperCase()]||st);if(ve&&De){const Ve=(je(be[Ae])||"total").toLowerCase().replace(/[^a-z0-9+]/g,""),$t=Ve==="genpop"?"total":Ve,qn=(je(be[Te])||"total").toLowerCase(),it=qn==="genpop"?"total":qn;q[De]||(q[De]={}),q[De][ve]||(q[De][ve]={}),q[De][ve][it]||(q[De][ve][it]={});const ht=je(be[Ie]).toUpperCase();ht==="PAUSE"?q[De][ve][it][$t]=je(be[Re]):(ht==="RELIVE"||ht==="RELAUNCH"||ht==="LIVE")&&delete q[De][ve][it][$t]}})}}let W=null,K=x;const re=async(fe,Ce=!1)=>{const X=Ke[fe];let Ne={};if(X.global){const Ie=await V(X.global);if(fe==="pct"){const Re=Ie.split(/\r?\n/).filter(st=>st.trim()!==""),ke=Gr(Re[0]),be=Le(ke,["Latest Date","Date","Reporting Date"]),ve=Le(ke,["Quarter Start Date","Quarter Start"]);if(Re.length>1){const st=Gr(Re[1]);if(be!==-1){const De=Ar(st[be]);De&&(W=De,O(De))}if(ve!==-1){const De=Ar(st[ve]);De&&(K=De,T(De))}}}Ne=Po(Ie,{},z,["Country","Market","Campaign"],Ce,null,!0,!1)}const pe={};for(const Ie of Wr)X.countryHB[Ie]&&(pe[Ie]=Po(await V(X.countryHB[Ie]),{},z,void 0,Ce,Ie,!1,!1));const Ae={};for(const Ie of zd)Ie!=="JP Proactive Container"&&X.alwaysOn[Ie]&&(Ae[Ie]=Po(await V(X.alwaysOn[Ie]),{},z,void 0,Ce,null,!1,!0));let Te={};return X.jpProactive&&(Te=Po(await V(X.jpProactive),{},z,void 0,Ce,"Japan",!1,!0)),{sgd:Ne,mh:pe,ao:Ae,jpProactive:Te}},te=await re("pct",!1),le=await re("abs",!0);let qe={};if(Ke.attribution.impressions){const fe=await V(Ke.attribution.impressions);qe=Po(fe,{},z,["Campaign","Campaign Name","Entity"],!0,null,!1,!1)}const tt=fe=>fe.includes("_")?fe.substring(fe.indexOf("_")+1):fe,It=(fe,Ce,X={})=>{const Ne={...fe};return Object.keys(Ce).forEach(pe=>{const Ae=Object.keys(Ne).find(Te=>At(Te,pe))||Object.keys(Ne).find(Te=>At(tt(Te),tt(pe)))||pe;Ne[Ae]?Sr.forEach(Te=>{Te!=="Impressions"&&Te!=="CTR"&&Dt.forEach(Ie=>{rn.forEach(Re=>{const ke=Ce[pe].metrics[Te][Ie][Re].abs;ke!==0&&ke!=="NA"&&(Ne[Ae].metrics[Te][Ie][Re].abs=ke)})})}):Ne[Ae]=Ce[pe]}),Object.keys(X).forEach(pe=>{const Ae=Object.keys(Ne).find(Te=>{const Ie=tt(Te),Re=tt(pe);if(Ne[Te].isAnchor&&X[pe].isAnchor){const ke=Ne[Te].market==="IN"?"India":Ne[Te].market,be=X[pe].market==="IN"?"India":X[pe].market,ve=X[pe].country==="IN"?"India":X[pe].country;return At(ke,be)||At(Ne[Te].country,ve)||At(ke,ve)}return At(Te,pe)||Te.includes(pe)||pe.includes(Te)||At(Ie,Re)});Ae&&Dt.forEach(Te=>{rn.forEach(Ie=>{var be,ve,st,De,Ve,$t;const Re=((st=(ve=(be=X[pe].metrics.Impressions)==null?void 0:be[Te])==null?void 0:ve[Ie])==null?void 0:st.v)||0;Re>0&&(Ne[Ae].metrics.Impressions[Te][Ie].v=Re);const ke=(($t=(Ve=(De=X[pe].metrics.CTR)==null?void 0:De[Te])==null?void 0:Ve[Ie])==null?void 0:$t.v)||0;ke>0&&(Ne[Ae].metrics.CTR[Te][Ie].v=ke)})})}),Object.values(Ne).forEach(pe=>{const Ae=ot(pe.market),Te=ot(pe.country),Ie=u1(pe.optimisationEndDate,pe.campaignEndDate);Sr.forEach(Re=>{Dt.forEach(ke=>{rn.forEach(be=>{var st,De;if(Ie){pe.metrics[Re][ke][be].isPaused=!0,pe.metrics[Re][ke][be].launchDate=pe.campaignEndDate||"Ended";return}const ve=(st=q[Ae])==null?void 0:st[Te];if(ve){const Ve=be.replace(/[^a-z0-9+]/g,""),$t=Ve==="1824"||Ve==="2534"?"1834":null,qn=[[ke,Ve],$t?[ke,$t]:null,[ke,"total"],["total",Ve],$t?["total",$t]:null,["total","total"]].filter(Boolean);for(const[it,ht]of qn)if((De=ve[it])!=null&&De[ht]){pe.metrics[Re][ke][be].isPaused=!0,pe.metrics[Re][ke][be].launchDate=ve[it][ht];break}}})}),rn.forEach(ke=>{const be=pe.metrics[Re].male[ke],ve=pe.metrics[Re].female[ke];if(be&&ve&&be.isPaused&&ve.isPaused){pe.metrics[Re].total[ke].isPaused=!0;const st=new Date(be.launchDate||0),De=new Date(ve.launchDate||0);pe.metrics[Re].total[ke].launchDate=(st>=De?be.launchDate:ve.launchDate)||"Ended"}})})}),Ne},ct=[],nt=It(te.sgd,le.sgd,qe);Object.values(nt).forEach(fe=>{fe._source="global",ct.push(Sl(fe))}),Wr.forEach(fe=>{const Ce=It(te.mh[fe]||{},le.mh[fe]||{},qe);Object.values(Ce).forEach(X=>{X._source="market",X._market=fe,ct.push(Sl(X))})}),zd.forEach(fe=>{if(fe!=="JP Proactive Container"){const Ce=It(te.ao[fe]||{},le.ao[fe]||{},qe);Object.values(Ce).forEach(X=>{X._source="alwaysOn",X._category=fe,ct.push(Sl(X))})}});const rt=It(te.jpProactive||{},le.jpProactive||{},qe);Object.values(rt).forEach(fe=>{fe._source="jpProactive",ct.push(Sl(fe))});const{gData:Mr,rData:St,cHub:Rn}=Tt(ct);B(Mr),$(St),ce(Rn),S.current=!0,o("OKR"),n(!1);const fr=Date.now().toString(),hi=100,ks=[];for(let fe=0;fe<ct.length;fe+=hi)ks.push(ct.slice(fe,fe+hi));const pr=ks.map((fe,Ce)=>Il(bn(Nn,"shortsbrain_data",`chunk_${fr}_${Ce}`),{data:fe}));await Promise.all(pr),await Il(bn(Nn,"shortsbrain_data","latest"),{batchId:fr,chunkCount:ks.length,reportingDate:W,quarterStart:K,lastUpdated:new Date().toISOString()}),await dn({masterList:ct,reportingDate:W,quarterStart:K,batchId:fr}),vh("snapshot_saved",{week_id:r_(W)})}catch(V){console.error("Analysis failed:",V)}finally{s(!1)}},ci=(V,z,q,W)=>ut(K=>{const re={...K[V]};return z==="countryHB"||z==="alwaysOn"?re[z]={...re[z],[W]:q}:re[z]=q,{...K,[V]:re}}),wc=async()=>{if(!g){y(!0);try{const[{default:V},{default:z}]=await Promise.all([Tg(()=>import("./html2canvas.esm-CBrSDip1.js"),[]),Tg(()=>import("./jspdf.es.min-BWgwGGKh.js").then(ct=>ct.j),[])]),q=await V(document.documentElement,{backgroundColor:"#0a0a0a",scale:1.5,useCORS:!0,logging:!1,windowWidth:document.documentElement.scrollWidth,windowHeight:document.documentElement.scrollHeight}),W=q.width>=q.height?"landscape":"portrait",K=new z({orientation:W,unit:"pt",format:"a4"}),re=K.internal.pageSize.getWidth(),te=K.internal.pageSize.getHeight(),le=Math.min(re/q.width,te/q.height),qe=q.width*le,tt=q.height*le;K.addImage(q.toDataURL("image/png"),"PNG",(re-qe)/2,(te-tt)/2,qe,tt);const It=String(i).replace(/\s+/g,"");K.save(`ShortsBrain_${It}_${N||"Snapshot"}.pdf`)}catch(V){console.error("PDF export failed:",V)}finally{y(!1)}}};return e?m.jsx(vb,{uploadedFiles:Ke,handleFileUpload:ci,startAnalysis:ui,isAnalyzing:r}):m.jsxs("div",{className:"flex h-screen bg-black text-[#e0e0e0] overflow-hidden font-sans",children:[m.jsxs("aside",{className:`${l?"w-72":"w-20"} transition-all duration-300 bg-[#111] border-r border-[#2a2a2a] flex flex-col z-50`,children:[m.jsxs("div",{className:"p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#2a2a2a] relative group",children:[m.jsx("div",{className:"bg-[#FF0000] p-2 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20",children:m.jsx(e1,{className:"text-white w-5 h-5"})}),l&&m.jsxs("div",{className:"flex-1",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("h2",{className:"text-lg font-bold tracking-tight",children:["BRAIN ",m.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),m.jsx("a",{href:a1,target:"_blank",rel:"noopener noreferrer",className:"text-[#444] hover:text-white transition-colors",title:"Source Drive",children:m.jsx(c1,{className:"w-4 h-4"})})]}),m.jsx("p",{className:"text-[8px] font-bold uppercase text-[#555] tracking-widest",children:"APAC Marketing Hub"})]})]}),m.jsxs("nav",{className:"flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar",children:[hb.map(V=>{const z=V.icon;return m.jsxs("button",{type:"button",onClick:()=>{if(V.id==="Upload"){if(!w){U(!0);return}U(!1),S.current=!0,n(!0)}else U(!1),o(V.id),vh("tab_viewed",{tab_id:V.id})},className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${i===V.id?"bg-[#FF0000]/10 text-[#FF0000]":V.id==="Upload"&&!w?"text-[#444] cursor-not-allowed":"text-[#808080] hover:text-white"}`,children:[m.jsx(z,{className:"w-5 h-5 shrink-0"}),l&&m.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:V.label}),l&&V.id==="Upload"&&!w&&m.jsx("span",{className:"ml-auto text-[7px] font-bold text-[#444] uppercase",children:"Read-only"})]},V.id)}),m.jsx("div",{className:"my-4 border-t border-[#222]"}),m.jsxs("button",{type:"button",onClick:()=>v(!p),className:"w-full flex items-center justify-between p-3 rounded-xl text-[#808080] hover:text-white cursor-pointer",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx(pN,{className:"w-5 h-5 shrink-0"}),l&&m.jsx("span",{className:"text-[11px] font-bold uppercase tracking-widest",children:"Campaign Hub"})]}),l&&(p?m.jsx(YP,{className:"w-4 h-4"}):m.jsx(qP,{className:"w-4 h-4"}))]}),p&&l&&m.jsx("div",{className:"pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300",children:Gl.map(V=>{const z=V.icon;return m.jsxs("button",{type:"button",onClick:()=>{o(V.id),vh("tab_viewed",{tab_id:"Campaign Hub",sub_view:V.id})},className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${i===V.id?"bg-[#FF0000]/10 text-[#FF0000]":"text-[#555] hover:bg-white/5 hover:text-white"}`,children:[m.jsx(z,{className:"w-4 h-4"}),V.label]},V.id)})}),l&&Ft.length>0&&m.jsxs("div",{className:"mt-8 pt-4 border-t border-[#222]",children:[m.jsxs("div",{className:"flex items-center gap-2 px-3 mb-3",children:[m.jsx(lN,{className:"w-4 h-4 text-[#444]"}),m.jsx("span",{className:"text-[10px] font-bold uppercase text-[#444] tracking-widest",children:"Memory"})]}),m.jsx("div",{className:"space-y-1 max-h-[300px] overflow-y-auto no-scrollbar",children:Ft.map(V=>m.jsxs("div",{className:"w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all hover:bg-white/5 group",children:[m.jsx("button",{type:"button",onClick:async()=>{if(V.batchId&&V.chunkCount!==void 0){let z=[];const q=[];for(let K=0;K<V.chunkCount;K++)q.push(Tl(bn(Nn,"artifacts",cn,"public","data","snapshots",`${V.id}_chunk_${V.batchId}_${K}`)));if((await Promise.all(q)).forEach(K=>{K.exists()&&K.data().data&&(z=z.concat(K.data().data))}),z.length>0){const{gData:K,rData:re,cHub:te}=Tt(z);B(K),$(re),ce(te)}}else if(V.chunkCount!==void 0&&!V.batchId){let z=[];for(let re=0;re<V.chunkCount;re++){const te=await Tl(bn(Nn,"artifacts",cn,"public","data","snapshots",`${V.id}_chunk_${re}`));te.exists()&&te.data().data&&(z=z.concat(te.data().data))}const{gData:q,rData:W,cHub:K}=Tt(z);B(q),$(W),ce(K)}else B(V.globalData||[]),$(V.regionalData||{}),ce(V.campaignHubData||{});O(V.reportingDate),V.quarterStart&&T(V.quarterStart),o("OKR"),n(!1)},className:"flex-1 text-[10px] font-bold text-[#666] group-hover:text-white",children:String(V.weekId||"Snapshot")}),m.jsx("button",{type:"button",onClick:()=>RP(bn(Nn,"artifacts",cn,"public","data","snapshots",V.id)),className:"opacity-0 group-hover:opacity-100 transition-opacity",children:m.jsx(i1,{className:"w-3 h-3 text-red-500"})})]},V.id))})]})]}),l&&(A==null?void 0:A.email)&&m.jsxs("div",{className:"px-4 py-3 border-t border-[#2a2a2a]",children:[m.jsx("div",{className:"text-[8px] font-mono text-[#555] truncate",children:A.email}),m.jsx("div",{className:"text-[8px] mt-0.5 uppercase tracking-wider font-bold",children:w?m.jsx("span",{className:"text-emerald-400",children:"Ingestion Admin"}):m.jsx("span",{className:"text-[#555]",children:"Read-only"})})]}),M&&l&&m.jsx("div",{className:"mx-4 mb-2 px-3 py-2 rounded-lg bg-red-900/30 border border-red-500/30 text-[8px] text-red-400 font-bold uppercase tracking-wider",children:"Access restricted"}),m.jsx("button",{type:"button",onClick:()=>u(!l),className:"p-6 border-t border-[#2a2a2a] text-[#555] hover:text-white flex items-center justify-center",children:l?m.jsx(nb,{className:"w-5 h-5"}):m.jsx(kN,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[m.jsxs("header",{className:"px-8 py-5 border-b border-[#2a2a2a] flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-40",children:[m.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-widest",children:i}),m.jsxs("button",{type:"button",onClick:wc,disabled:g,className:"bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] shadow-xl flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-wait",children:[g?m.jsx(SN,{className:"w-3.5 h-3.5 animate-spin"}):m.jsx(cN,{className:"w-3.5 h-3.5"}),g?"Exporting…":"Export PDF"]})]}),m.jsxs("main",{className:"flex-1 overflow-auto p-10 relative no-scrollbar",children:[i==="OKR"&&m.jsx(_b,{globalData:Ee,regionalData:Y,latestDate:N,quarterStart:x}),(i==="Global Hub"||i==="Market Hub")&&m.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[m.jsx(i_,{activeMetrics:h,allowedMetrics:Jt,toggleMetric:V=>f(z=>z.includes(V)?z.length>1?z.filter(q=>q!==V):z:[...z,V]),handleAllToggle:()=>f(V=>V.length===Jt.length?["DAU-SCT"]:[...Jt])}),i==="Market Hub"&&m.jsx("div",{className:"flex flex-wrap items-center gap-4",children:m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(n_,{className:"w-6 h-6 text-red-600"}),m.jsx("select",{value:k,onChange:V=>P(V.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:Wr.map(V=>m.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))})]})}),m.jsx(o_,{data:i==="Global Hub"?Ee:(()=>{const z=(Y[k]||[]).filter(W=>W.country&&W.country.toUpperCase()!=="UNKNOWN"&&(At(W.market,k)||At(W.market,xa[k]))),q=Ee.find(W=>At(W.country,k)||At(W.country,xa[k]));return q?[{...q,isAnchor:!0},...z]:z})(),activeMetrics:h,latestGlobalDate:N,isCampaignView:i==="Market Hub",hideDates:i==="Global Hub"})]}),Gl.some(V=>V.id===i)&&m.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[m.jsx(i_,{activeMetrics:h,allowedMetrics:Jt,toggleMetric:V=>f(z=>z.includes(V)?z.length>1?z.filter(q=>q!==V):z:[...z,V]),handleAllToggle:()=>f(V=>V.length===Jt.length?["DAU-SCT"]:[...Jt])}),m.jsxs("div",{className:"flex flex-wrap gap-4",children:[m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(n_,{className:"w-6 h-6 text-red-600"}),m.jsx("select",{value:I[i],onChange:V=>C(z=>({...z,[i]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:Wr.map(V=>m.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))})]}),Pt.length>0&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(gN,{className:"w-6 h-6 text-amber-500"}),m.jsxs("select",{value:E[i],onChange:V=>ne(z=>({...z,[i]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:[m.jsx("option",{value:"",children:"ALL SUB TABS"}),Pt.map(V=>m.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))]})]}),i!=="AlwaysOn"&&hn.length>0&&E[i]!==""&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(TN,{className:"w-6 h-6 text-purple-500"}),m.jsxs("select",{value:ae[i],onChange:V=>Ut(z=>({...z,[i]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:[m.jsx("option",{value:"",children:"ALL SUB SUB TABS"}),hn.map(V=>m.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))]})]})]}),m.jsx(o_,{data:(()=>{var K,re,te,le,qe,tt,It,ct;const V=I[i],z=E[i],q=ae[i];if(i==="AlwaysOn"&&z==="JP Proactive Container"){const nt=(re=(K=ie.AlwaysOn)==null?void 0:K.Japan)==null?void 0:re["JP Proactive Container"];return nt?Object.values(nt).flatMap(rt=>Array.isArray(rt)?rt:Object.values(rt).flat()):[]}if(!z){const nt=(te=ie[i])==null?void 0:te[V];return nt?Object.values(nt).flatMap(rt=>Object.values(rt).flat()):[]}if(!q||i==="AlwaysOn"){const nt=(qe=(le=ie[i])==null?void 0:le[V])==null?void 0:qe[z];if(!nt)return[];const rt=Object.values(nt).flat();return i==="AlwaysOn"?[...rt].sort((Mr,St)=>(Mr.explicitTrendStart||Mr.dataMinDate||"").localeCompare(St.explicitTrendStart||St.dataMinDate||"")):rt}return((ct=(It=(tt=ie[i])==null?void 0:tt[V])==null?void 0:It[z])==null?void 0:ct[q])||[]})(),activeMetrics:h,latestGlobalDate:N,isCampaignView:!0,isAlwaysOn:i==="AlwaysOn",ignorePaused:!0})]})]})]}),m.jsx("style",{children:`  
        ::-webkit-scrollbar { width: 5px; height: 5px; }  
        ::-webkit-scrollbar-track { background: transparent; }  
        ::-webkit-scrollbar { display: none; }  
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 10px; }  
        ::-webkit-scrollbar-thumb:hover { background: #444; }  
        .no-scrollbar::-webkit-scrollbar { display: none; }  
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; }  
        .animate-in { animation: fadeIn 0.4s ease-out; }  
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }  
      `})]})},wh=fw(za),Eb=new _r;function Tb(t){return t?t==="ivanho.wz@gmail.com"?!0:t.endsWith("@google.com"):!1}const l_={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},u_={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},Ib={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},Sb={color:"#f87171",marginTop:16,fontSize:14},c_={color:"#737373",fontSize:13,marginTop:8};function xb({children:t}){const[e,n]=Z.useState(null),[r,s]=Z.useState(!0),[i,o]=Z.useState(null),[l,u]=Z.useState(!1);Z.useEffect(()=>tw(wh,f=>{f&&!Tb(f.email)?(IA(wh),n(null),o(`${f.email} is not authorized.`)):(n(f),o(null)),s(!1)}),[]);const h=async()=>{u(!0),o(null);try{await BA(wh,Eb)}catch(f){o((f==null?void 0:f.message)||"Sign-in failed.")}finally{u(!1)}};return r?m.jsx("div",{style:l_,children:m.jsx("div",{style:u_,children:m.jsx("p",{style:c_,children:"Loading…"})})}):e?yr.Children.map(t,f=>yr.isValidElement(f)?yr.cloneElement(f,{userEmail:e.email}):f):m.jsx("div",{style:l_,children:m.jsxs("div",{style:u_,children:[m.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Brain"}),m.jsx("p",{style:c_,children:"Sign in to continue"}),m.jsx("button",{style:Ib,onClick:h,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&m.jsx("p",{style:Sb,children:i})]})})}Eh.createRoot(document.getElementById("root")).render(m.jsx(yr.StrictMode,{children:m.jsx(xb,{children:m.jsx(wb,{})})}));export{Tg as _,Ab as c,C1 as g};
//# sourceMappingURL=index-DQnlG_M8.js.map
