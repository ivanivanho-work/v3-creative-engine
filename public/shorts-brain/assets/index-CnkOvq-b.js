(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function A1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c_={exports:{}},ju={},h_={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),k1=Symbol.for("react.portal"),C1=Symbol.for("react.fragment"),R1=Symbol.for("react.strict_mode"),N1=Symbol.for("react.profiler"),P1=Symbol.for("react.provider"),b1=Symbol.for("react.context"),D1=Symbol.for("react.forward_ref"),O1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),M1=Symbol.for("react.lazy"),dm=Symbol.iterator;function L1(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var d_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f_=Object.assign,p_={};function eo(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m_(){}m_.prototype=eo.prototype;function zd(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}var Bd=zd.prototype=new m_;Bd.constructor=zd;f_(Bd,eo.prototype);Bd.isPureReactComponent=!0;var fm=Array.isArray,g_=Object.prototype.hasOwnProperty,Hd={current:null},y_={key:!0,ref:!0,__self:!0,__source:!0};function __(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)g_.call(e,r)&&!y_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:xa,type:t,key:i,ref:o,props:s,_owner:Hd.current}}function j1(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function U1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U1(""+t.key):e.toString(36)}function xl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xa:case k1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+bc(o,0):r,fm(s)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),xl(s,e,n,"",function(c){return c})):s!=null&&(qd(s)&&(s=j1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(pm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",fm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+bc(i,l);o+=xl(i,e,n,u,s)}else if(u=L1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+bc(i,l++),o+=xl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],s=0;return xl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function F1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Al={transition:null},$1={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Al,ReactCurrentOwner:Hd};function v_(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=eo;Ee.Fragment=C1;Ee.Profiler=N1;Ee.PureComponent=zd;Ee.StrictMode=R1;Ee.Suspense=O1;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;Ee.act=v_;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=f_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Hd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)g_.call(e,u)&&!y_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:xa,type:t.type,key:s,ref:i,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:b1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P1,_context:t},t.Consumer=t};Ee.createElement=__;Ee.createFactory=function(t){var e=__.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:D1,render:t}};Ee.isValidElement=qd;Ee.lazy=function(t){return{$$typeof:M1,_payload:{_status:-1,_result:t},_init:F1}};Ee.memo=function(t,e){return{$$typeof:V1,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=Al.transition;Al.transition={};try{t()}finally{Al.transition=e}};Ee.unstable_act=v_;Ee.useCallback=function(t,e){return nn.current.useCallback(t,e)};Ee.useContext=function(t){return nn.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return nn.current.useEffect(t,e)};Ee.useId=function(){return nn.current.useId()};Ee.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return nn.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Ee.useRef=function(t){return nn.current.useRef(t)};Ee.useState=function(t){return nn.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return nn.current.useTransition()};Ee.version="18.3.1";h_.exports=Ee;var re=h_.exports;const _r=A1(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=re,B1=Symbol.for("react.element"),H1=Symbol.for("react.fragment"),q1=Object.prototype.hasOwnProperty,G1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W1={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)q1.call(e,r)&&!W1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:B1,type:t,key:i,ref:o,props:s,_owner:G1.current}}ju.Fragment=H1;ju.jsx=w_;ju.jsxs=w_;c_.exports=ju;var m=c_.exports,wh={},E_={exports:{}},wn={},T_={exports:{}},I_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,X){var z=B.length;B.push(X);e:for(;0<z;){var ce=z-1>>>1,_e=B[ce];if(0<s(_e,X))B[ce]=X,B[z]=_e,z=ce;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var X=B[0],z=B.pop();if(z!==X){B[0]=z;e:for(var ce=0,_e=B.length,We=_e>>>1;ce<We;){var at=2*(ce+1)-1,dt=B[at],ft=at+1,lt=B[ft];if(0>s(dt,z))ft<_e&&0>s(lt,dt)?(B[ce]=lt,B[ft]=z,ce=ft):(B[ce]=dt,B[at]=z,ce=at);else if(ft<_e&&0>s(lt,z))B[ce]=lt,B[ft]=z,ce=ft;else break e}}return X}function s(B,X){var z=B.sortIndex-X.sortIndex;return z!==0?z:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,v=3,k=!1,N=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(B){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=B)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function D(B){if(P=!1,A(B),!N)if(n(u)!==null)N=!0,wt(L);else{var X=n(c);X!==null&&pe(D,X.startTime-B)}}function L(B,X){N=!1,P&&(P=!1,S(y),y=-1),k=!0;var z=v;try{for(A(X),p=n(u);p!==null&&(!(p.expirationTime>X)||B&&!x());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,v=p.priorityLevel;var _e=ce(p.expirationTime<=X);X=t.unstable_now(),typeof _e=="function"?p.callback=_e:p===n(u)&&r(u),A(X)}else r(u);p=n(u)}if(p!==null)var We=!0;else{var at=n(c);at!==null&&pe(D,at.startTime-X),We=!1}return We}finally{p=null,v=z,k=!1}}var F=!1,g=null,y=-1,w=5,E=-1;function x(){return!(t.unstable_now()-E<w)}function C(){if(g!==null){var B=t.unstable_now();E=B;var X=!0;try{X=g(!0,B)}finally{X?T():(F=!1,g=null)}}else F=!1}var T;if(typeof I=="function")T=function(){I(C)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ye=te.port2;te.port1.onmessage=C,T=function(){ye.postMessage(null)}}else T=function(){V(C,0)};function wt(B){g=B,F||(F=!0,T())}function pe(B,X){y=V(function(){B(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||k||(N=!0,wt(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var z=v;v=X;try{return B()}finally{v=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var z=v;v=B;try{return X()}finally{v=z}},t.unstable_scheduleCallback=function(B,X,z){var ce=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ce+z:ce):z=ce,B){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=z+_e,B={id:f++,callback:X,priorityLevel:B,startTime:z,expirationTime:_e,sortIndex:-1},z>ce?(B.sortIndex=z,e(c,B),n(u)===null&&B===n(c)&&(P?(S(y),y=-1):P=!0,pe(D,z-ce))):(B.sortIndex=_e,e(u,B),N||k||(N=!0,wt(L))),B},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(B){var X=v;return function(){var z=v;v=X;try{return B.apply(this,arguments)}finally{v=z}}}})(I_);T_.exports=I_;var K1=T_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1=re,vn=K1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S_=new Set,Xo={};function ri(t,e){zi(t,e),zi(t+"Capture",e)}function zi(t,e){for(Xo[t]=e,t=0;t<e.length;t++)S_.add(e[t])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,J1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function Y1(t){return Eh.call(gm,t)?!0:Eh.call(mm,t)?!1:J1.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function X1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Z1(t,e,n,r){if(e===null||typeof e>"u"||X1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Wd);Ft[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Wd);Ft[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Wd);Ft[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,r){var s=Ft.hasOwnProperty(e)?Ft[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Z1(e,n,s,r)&&(n=null),r||s===null?Y1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mr=Q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),_i=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),ym=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var tt=Object.assign,Dc;function No(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Oc=!1;function Vc(t,e){if(!t||Oc)return"";Oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function eT(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=Vc(t.type,!1),t;case 11:return t=Vc(t.type.render,!1),t;case 1:return t=Vc(t.type,!0),t;default:return""}}function xh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case _i:return"Portal";case Th:return"Profiler";case Qd:return"StrictMode";case Ih:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A_:return(t.displayName||"Context")+".Consumer";case x_:return(t._context.displayName||"Context")+".Provider";case Jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:xh(t.type)||"Memo";case Gr:e=t._payload,t=t._init;try{return xh(t(e))}catch{}}return null}function tT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xh(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function C_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nT(t){var e=C_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=nT(t))}function R_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=C_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ah(t,e){var n=e.checked;return tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _m(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N_(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function kh(t,e){N_(t,e);var n=gs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,gs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ch(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Po(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gs(n)}}function P_(t,e){var n=gs(e.value),r=gs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function b_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?b_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var el,D_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rT=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){rT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function O_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function V_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=O_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var sT=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(sT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,Pi=null,bi=null;function Tm(t){if(t=Ca(t)){if(typeof Oh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Bu(e),Oh(t.stateNode,t.type,e))}}function M_(t){Pi?bi?bi.push(t):bi=[t]:Pi=t}function L_(){if(Pi){var t=Pi,e=bi;if(bi=Pi=null,Tm(t),e)for(t=0;t<e.length;t++)Tm(e[t])}}function j_(t,e){return t(e)}function U_(){}var Mc=!1;function F_(t,e,n){if(Mc)return t(e,n);Mc=!0;try{return j_(t,e,n)}finally{Mc=!1,(Pi!==null||bi!==null)&&(U_(),L_())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Bu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Vh=!1;if(Cr)try{var To={};Object.defineProperty(To,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Vh=!1}function iT(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Uo=!1,Kl=null,Ql=!1,Mh=null,oT={onError:function(t){Uo=!0,Kl=t}};function aT(t,e,n,r,s,i,o,l,u){Uo=!1,Kl=null,iT.apply(oT,arguments)}function lT(t,e,n,r,s,i,o,l,u){if(aT.apply(this,arguments),Uo){if(Uo){var c=Kl;Uo=!1,Kl=null}else throw Error(U(198));Ql||(Ql=!0,Mh=c)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(si(t)!==t)throw Error(U(188))}function uT(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Im(s),t;if(i===r)return Im(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function z_(t){return t=uT(t),t!==null?B_(t):null}function B_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=B_(t);if(e!==null)return e;t=t.sibling}return null}var H_=vn.unstable_scheduleCallback,Sm=vn.unstable_cancelCallback,cT=vn.unstable_shouldYield,hT=vn.unstable_requestPaint,ht=vn.unstable_now,dT=vn.unstable_getCurrentPriorityLevel,Zd=vn.unstable_ImmediatePriority,q_=vn.unstable_UserBlockingPriority,Jl=vn.unstable_NormalPriority,fT=vn.unstable_LowPriority,G_=vn.unstable_IdlePriority,Uu=null,tr=null;function pT(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Uu,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:yT,mT=Math.log,gT=Math.LN2;function yT(t){return t>>>=0,t===0?32:31-(mT(t)/gT|0)|0}var tl=64,nl=4194304;function bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=bo(l):(i&=o,i!==0&&(r=bo(i)))}else o=n&~s,o!==0?r=bo(o):i!==0&&(r=bo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zn(e),s=1<<n,r|=t[n],e&=~s;return r}function _T(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-zn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=_T(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function W_(){var t=tl;return tl<<=1,!(tl&4194240)&&(tl=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function wT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-zn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var be=0;function K_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q_,tf,J_,Y_,X_,jh=!1,rl=[],rs=null,ss=null,is=null,ta=new Map,na=new Map,Jr=[],ET="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(t,e){switch(t){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function Io(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ca(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function TT(t,e,n,r,s){switch(e){case"focusin":return rs=Io(rs,t,e,n,r,s),!0;case"dragenter":return ss=Io(ss,t,e,n,r,s),!0;case"mouseover":return is=Io(is,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ta.set(i,Io(ta.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,na.set(i,Io(na.get(i)||null,t,e,n,r,s)),!0}return!1}function Z_(t){var e=Ls(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=$_(n),e!==null){t.blockedOn=e,X_(t.priority,function(){J_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dh=r,n.target.dispatchEvent(r),Dh=null}else return e=Ca(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){kl(t)&&n.delete(e)}function IT(){jh=!1,rs!==null&&kl(rs)&&(rs=null),ss!==null&&kl(ss)&&(ss=null),is!==null&&kl(is)&&(is=null),ta.forEach(Am),na.forEach(Am)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,jh||(jh=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,IT)))}function ra(t){function e(s){return So(s,t)}if(0<rl.length){So(rl[0],t);for(var n=1;n<rl.length;n++){var r=rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rs!==null&&So(rs,t),ss!==null&&So(ss,t),is!==null&&So(is,t),ta.forEach(e),na.forEach(e),n=0;n<Jr.length;n++)r=Jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jr.length&&(n=Jr[0],n.blockedOn===null);)Z_(n),n.blockedOn===null&&Jr.shift()}var Di=Mr.ReactCurrentBatchConfig,Xl=!0;function ST(t,e,n,r){var s=be,i=Di.transition;Di.transition=null;try{be=1,nf(t,e,n,r)}finally{be=s,Di.transition=i}}function xT(t,e,n,r){var s=be,i=Di.transition;Di.transition=null;try{be=4,nf(t,e,n,r)}finally{be=s,Di.transition=i}}function nf(t,e,n,r){if(Xl){var s=Uh(t,e,n,r);if(s===null)Wc(t,e,r,Zl,n),xm(t,r);else if(TT(s,t,e,n,r))r.stopPropagation();else if(xm(t,r),e&4&&-1<ET.indexOf(t)){for(;s!==null;){var i=Ca(s);if(i!==null&&Q_(i),i=Uh(t,e,n,r),i===null&&Wc(t,e,r,Zl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Wc(t,e,r,null,n)}}var Zl=null;function Uh(t,e,n,r){if(Zl=null,t=Xd(r),t=Ls(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dT()){case Zd:return 1;case q_:return 4;case Jl:case fT:return 16;case G_:return 536870912;default:return 16}default:return 16}}var ts=null,rf=null,Cl=null;function tv(){if(Cl)return Cl;var t,e=rf,n=e.length,r,s="value"in ts?ts.value:ts.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Cl=s.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function km(){return!1}function En(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sl:km,this.isPropagationStopped=km,this}return tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=En(to),ka=tt({},to,{view:0,detail:0}),AT=En(ka),jc,Uc,xo,Fu=tt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(jc=t.screenX-xo.screenX,Uc=t.screenY-xo.screenY):Uc=jc=0,xo=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),Cm=En(Fu),kT=tt({},Fu,{dataTransfer:0}),CT=En(kT),RT=tt({},ka,{relatedTarget:0}),Fc=En(RT),NT=tt({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),PT=En(NT),bT=tt({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DT=En(bT),OT=tt({},to,{data:0}),Rm=En(OT),VT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LT[t])?!!e[t]:!1}function of(){return jT}var UT=tt({},ka,{key:function(t){if(t.key){var e=VT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FT=En(UT),$T=tt({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=En($T),zT=tt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),BT=En(zT),HT=tt({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),qT=En(HT),GT=tt({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WT=En(GT),KT=[9,13,27,32],af=Cr&&"CompositionEvent"in window,Fo=null;Cr&&"documentMode"in document&&(Fo=document.documentMode);var QT=Cr&&"TextEvent"in window&&!Fo,nv=Cr&&(!af||Fo&&8<Fo&&11>=Fo),Pm=" ",bm=!1;function rv(t,e){switch(t){case"keyup":return KT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wi=!1;function JT(t,e){switch(t){case"compositionend":return sv(e);case"keypress":return e.which!==32?null:(bm=!0,Pm);case"textInput":return t=e.data,t===Pm&&bm?null:t;default:return null}}function YT(t,e){if(wi)return t==="compositionend"||!af&&rv(t,e)?(t=tv(),Cl=rf=ts=null,wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var XT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XT[t.type]:e==="textarea"}function iv(t,e,n,r){M_(r),e=eu(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $o=null,sa=null;function ZT(t){gv(t,0)}function $u(t){var e=Ii(t);if(R_(e))return t}function eI(t,e){if(t==="change")return e}var ov=!1;if(Cr){var $c;if(Cr){var zc="oninput"in document;if(!zc){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),zc=typeof Om.oninput=="function"}$c=zc}else $c=!1;ov=$c&&(!document.documentMode||9<document.documentMode)}function Vm(){$o&&($o.detachEvent("onpropertychange",av),sa=$o=null)}function av(t){if(t.propertyName==="value"&&$u(sa)){var e=[];iv(e,sa,t,Xd(t)),F_(ZT,e)}}function tI(t,e,n){t==="focusin"?(Vm(),$o=e,sa=n,$o.attachEvent("onpropertychange",av)):t==="focusout"&&Vm()}function nI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $u(sa)}function rI(t,e){if(t==="click")return $u(e)}function sI(t,e){if(t==="input"||t==="change")return $u(e)}function iI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:iI;function ia(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Eh.call(e,s)||!Wn(t[s],e[s]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,e){var n=Mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function lv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uv(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oI(t){var e=uv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Lm(n,i);var o=Lm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aI=Cr&&"documentMode"in document&&11>=document.documentMode,Ei=null,Fh=null,zo=null,$h=!1;function jm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$h||Ei==null||Ei!==Wl(r)||(r=Ei,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ia(zo,r)||(zo=r,r=eu(Fh,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ei)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ti={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Bc={},cv={};Cr&&(cv=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function zu(t){if(Bc[t])return Bc[t];if(!Ti[t])return t;var e=Ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cv)return Bc[t]=e[n];return t}var hv=zu("animationend"),dv=zu("animationiteration"),fv=zu("animationstart"),pv=zu("transitionend"),mv=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function As(t,e){mv.set(t,e),ri(e,[t])}for(var Hc=0;Hc<Um.length;Hc++){var qc=Um[Hc],lI=qc.toLowerCase(),uI=qc[0].toUpperCase()+qc.slice(1);As(lI,"on"+uI)}As(hv,"onAnimationEnd");As(dv,"onAnimationIteration");As(fv,"onAnimationStart");As("dblclick","onDoubleClick");As("focusin","onFocus");As("focusout","onBlur");As(pv,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Fm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lT(r,e,void 0,t),t.currentTarget=null}function gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Fm(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Fm(s,l,c),i=u}}}if(Ql)throw t=Mh,Ql=!1,Mh=null,t}function ze(t,e){var n=e[Gh];n===void 0&&(n=e[Gh]=new Set);var r=t+"__bubble";n.has(r)||(yv(e,t,2,!1),n.add(r))}function Gc(t,e,n){var r=0;e&&(r|=4),yv(n,t,r,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[ol]){t[ol]=!0,S_.forEach(function(n){n!=="selectionchange"&&(cI.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ol]||(e[ol]=!0,Gc("selectionchange",!1,e))}}function yv(t,e,n,r){switch(ev(e)){case 1:var s=ST;break;case 4:s=xT;break;default:s=nf}n=s.bind(null,e,n,t),s=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Wc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ls(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}F_(function(){var c=i,f=Xd(n),p=[];e:{var v=mv.get(t);if(v!==void 0){var k=sf,N=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":k=FT;break;case"focusin":N="focus",k=Fc;break;case"focusout":N="blur",k=Fc;break;case"beforeblur":case"afterblur":k=Fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=CT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=BT;break;case hv:case dv:case fv:k=PT;break;case pv:k=qT;break;case"scroll":k=AT;break;case"wheel":k=WT;break;case"copy":case"cut":case"paste":k=DT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Nm}var P=(e&4)!==0,V=!P&&t==="scroll",S=P?v!==null?v+"Capture":null:v;P=[];for(var I=c,A;I!==null;){A=I;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,S!==null&&(D=ea(I,S),D!=null&&P.push(aa(I,D,A)))),V)break;I=I.return}0<P.length&&(v=new k(v,N,null,n,f),p.push({event:v,listeners:P}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==Dh&&(N=n.relatedTarget||n.fromElement)&&(Ls(N)||N[Rr]))break e;if((k||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=c,N=N?Ls(N):null,N!==null&&(V=si(N),N!==V||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=c),k!==N)){if(P=Cm,D="onMouseLeave",S="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(P=Nm,D="onPointerLeave",S="onPointerEnter",I="pointer"),V=k==null?v:Ii(k),A=N==null?v:Ii(N),v=new P(D,I+"leave",k,n,f),v.target=V,v.relatedTarget=A,D=null,Ls(f)===c&&(P=new P(S,I+"enter",N,n,f),P.target=A,P.relatedTarget=V,D=P),V=D,k&&N)t:{for(P=k,S=N,I=0,A=P;A;A=fi(A))I++;for(A=0,D=S;D;D=fi(D))A++;for(;0<I-A;)P=fi(P),I--;for(;0<A-I;)S=fi(S),A--;for(;I--;){if(P===S||S!==null&&P===S.alternate)break t;P=fi(P),S=fi(S)}P=null}else P=null;k!==null&&$m(p,v,k,P,!1),N!==null&&V!==null&&$m(p,V,N,P,!0)}}e:{if(v=c?Ii(c):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var L=eI;else if(Dm(v))if(ov)L=sI;else{L=nI;var F=tI}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(L=rI);if(L&&(L=L(t,c))){iv(p,L,n,f);break e}F&&F(t,v,c),t==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&Ch(v,"number",v.value)}switch(F=c?Ii(c):window,t){case"focusin":(Dm(F)||F.contentEditable==="true")&&(Ei=F,Fh=c,zo=null);break;case"focusout":zo=Fh=Ei=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,jm(p,n,f);break;case"selectionchange":if(aI)break;case"keydown":case"keyup":jm(p,n,f)}var g;if(af)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else wi?rv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(nv&&n.locale!=="ko"&&(wi||y!=="onCompositionStart"?y==="onCompositionEnd"&&wi&&(g=tv()):(ts=f,rf="value"in ts?ts.value:ts.textContent,wi=!0)),F=eu(c,y),0<F.length&&(y=new Rm(y,t,null,n,f),p.push({event:y,listeners:F}),g?y.data=g:(g=sv(n),g!==null&&(y.data=g)))),(g=QT?JT(t,n):YT(t,n))&&(c=eu(c,"onBeforeInput"),0<c.length&&(f=new Rm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=g))}gv(p,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ea(t,n),i!=null&&r.unshift(aa(t,i,s)),i=ea(t,e),i!=null&&r.push(aa(t,i,s))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $m(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=ea(n,i),u!=null&&o.unshift(aa(n,u,l))):s||(u=ea(n,i),u!=null&&o.push(aa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hI=/\r\n?/g,dI=/\u0000|\uFFFD/g;function zm(t){return(typeof t=="string"?t:""+t).replace(hI,`
`).replace(dI,"")}function al(t,e,n){if(e=zm(e),zm(t)!==e&&n)throw Error(U(425))}function tu(){}var zh=null,Bh=null;function Hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qh=typeof setTimeout=="function"?setTimeout:void 0,fI=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,pI=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(t){return Bm.resolve(null).then(t).catch(mI)}:qh;function mI(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ra(e)}function os(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),er="__reactFiber$"+no,la="__reactProps$"+no,Rr="__reactContainer$"+no,Gh="__reactEvents$"+no,gI="__reactListeners$"+no,yI="__reactHandles$"+no;function Ls(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rr]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hm(t);t!==null;){if(n=t[er])return n;t=Hm(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[er]||t[Rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Bu(t){return t[la]||null}var Wh=[],Si=-1;function ks(t){return{current:t}}function Ge(t){0>Si||(t.current=Wh[Si],Wh[Si]=null,Si--)}function je(t,e){Si++,Wh[Si]=t.current,t.current=e}var ys={},Yt=ks(ys),hn=ks(!1),Gs=ys;function Bi(t,e){var n=t.type.contextTypes;if(!n)return ys;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function dn(t){return t=t.childContextTypes,t!=null}function nu(){Ge(hn),Ge(Yt)}function qm(t,e,n){if(Yt.current!==ys)throw Error(U(168));je(Yt,e),je(hn,n)}function _v(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,tT(t)||"Unknown",s));return tt({},n,r)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ys,Gs=Yt.current,je(Yt,t),je(hn,hn.current),!0}function Gm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=_v(t,e,Gs),r.__reactInternalMemoizedMergedChildContext=t,Ge(hn),Ge(Yt),je(Yt,t)):Ge(hn),je(hn,n)}var yr=null,Hu=!1,Qc=!1;function vv(t){yr===null?yr=[t]:yr.push(t)}function _I(t){Hu=!0,vv(t)}function Cs(){if(!Qc&&yr!==null){Qc=!0;var t=0,e=be;try{var n=yr;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yr=null,Hu=!1}catch(s){throw yr!==null&&(yr=yr.slice(t+1)),H_(Zd,Cs),s}finally{be=e,Qc=!1}}return null}var xi=[],Ai=0,su=null,iu=0,Tn=[],In=0,Ws=null,wr=1,Er="";function Os(t,e){xi[Ai++]=iu,xi[Ai++]=su,su=t,iu=e}function wv(t,e,n){Tn[In++]=wr,Tn[In++]=Er,Tn[In++]=Ws,Ws=t;var r=wr;t=Er;var s=32-zn(r)-1;r&=~(1<<s),n+=1;var i=32-zn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,wr=1<<32-zn(e)+s|n<<s|r,Er=i+t}else wr=1<<i|n<<s|r,Er=t}function uf(t){t.return!==null&&(Os(t,1),wv(t,1,0))}function cf(t){for(;t===su;)su=xi[--Ai],xi[Ai]=null,iu=xi[--Ai],xi[Ai]=null;for(;t===Ws;)Ws=Tn[--In],Tn[In]=null,Er=Tn[--In],Tn[In]=null,wr=Tn[--In],Tn[In]=null}var _n=null,yn=null,Ke=!1,jn=null;function Ev(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,yn=os(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ws!==null?{id:wr,overflow:Er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,yn=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(Ke){var e=yn;if(e){var n=e;if(!Wm(t,e)){if(Kh(t))throw Error(U(418));e=os(n.nextSibling);var r=_n;e&&Wm(t,e)?Ev(r,n):(t.flags=t.flags&-4097|2,Ke=!1,_n=t)}}else{if(Kh(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ke=!1,_n=t}}}function Km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function ll(t){if(t!==_n)return!1;if(!Ke)return Km(t),Ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hh(t.type,t.memoizedProps)),e&&(e=yn)){if(Kh(t))throw Tv(),Error(U(418));for(;e;)Ev(t,e),e=os(e.nextSibling)}if(Km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=os(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=_n?os(t.stateNode.nextSibling):null;return!0}function Tv(){for(var t=yn;t;)t=os(t.nextSibling)}function Hi(){yn=_n=null,Ke=!1}function hf(t){jn===null?jn=[t]:jn.push(t)}var vI=Mr.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ul(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qm(t){var e=t._init;return e(t._payload)}function Iv(t){function e(S,I){if(t){var A=S.deletions;A===null?(S.deletions=[I],S.flags|=16):A.push(I)}}function n(S,I){if(!t)return null;for(;I!==null;)e(S,I),I=I.sibling;return null}function r(S,I){for(S=new Map;I!==null;)I.key!==null?S.set(I.key,I):S.set(I.index,I),I=I.sibling;return S}function s(S,I){return S=cs(S,I),S.index=0,S.sibling=null,S}function i(S,I,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<I?(S.flags|=2,I):A):(S.flags|=2,I)):(S.flags|=1048576,I)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,I,A,D){return I===null||I.tag!==6?(I=nh(A,S.mode,D),I.return=S,I):(I=s(I,A),I.return=S,I)}function u(S,I,A,D){var L=A.type;return L===vi?f(S,I,A.props.children,D,A.key):I!==null&&(I.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Gr&&Qm(L)===I.type)?(D=s(I,A.props),D.ref=Ao(S,I,A),D.return=S,D):(D=Ml(A.type,A.key,A.props,null,S.mode,D),D.ref=Ao(S,I,A),D.return=S,D)}function c(S,I,A,D){return I===null||I.tag!==4||I.stateNode.containerInfo!==A.containerInfo||I.stateNode.implementation!==A.implementation?(I=rh(A,S.mode,D),I.return=S,I):(I=s(I,A.children||[]),I.return=S,I)}function f(S,I,A,D,L){return I===null||I.tag!==7?(I=Bs(A,S.mode,D,L),I.return=S,I):(I=s(I,A),I.return=S,I)}function p(S,I,A){if(typeof I=="string"&&I!==""||typeof I=="number")return I=nh(""+I,S.mode,A),I.return=S,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Xa:return A=Ml(I.type,I.key,I.props,null,S.mode,A),A.ref=Ao(S,null,I),A.return=S,A;case _i:return I=rh(I,S.mode,A),I.return=S,I;case Gr:var D=I._init;return p(S,D(I._payload),A)}if(Po(I)||Eo(I))return I=Bs(I,S.mode,A,null),I.return=S,I;ul(S,I)}return null}function v(S,I,A,D){var L=I!==null?I.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return L!==null?null:l(S,I,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Xa:return A.key===L?u(S,I,A,D):null;case _i:return A.key===L?c(S,I,A,D):null;case Gr:return L=A._init,v(S,I,L(A._payload),D)}if(Po(A)||Eo(A))return L!==null?null:f(S,I,A,D,null);ul(S,A)}return null}function k(S,I,A,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(A)||null,l(I,S,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Xa:return S=S.get(D.key===null?A:D.key)||null,u(I,S,D,L);case _i:return S=S.get(D.key===null?A:D.key)||null,c(I,S,D,L);case Gr:var F=D._init;return k(S,I,A,F(D._payload),L)}if(Po(D)||Eo(D))return S=S.get(A)||null,f(I,S,D,L,null);ul(I,D)}return null}function N(S,I,A,D){for(var L=null,F=null,g=I,y=I=0,w=null;g!==null&&y<A.length;y++){g.index>y?(w=g,g=null):w=g.sibling;var E=v(S,g,A[y],D);if(E===null){g===null&&(g=w);break}t&&g&&E.alternate===null&&e(S,g),I=i(E,I,y),F===null?L=E:F.sibling=E,F=E,g=w}if(y===A.length)return n(S,g),Ke&&Os(S,y),L;if(g===null){for(;y<A.length;y++)g=p(S,A[y],D),g!==null&&(I=i(g,I,y),F===null?L=g:F.sibling=g,F=g);return Ke&&Os(S,y),L}for(g=r(S,g);y<A.length;y++)w=k(g,S,y,A[y],D),w!==null&&(t&&w.alternate!==null&&g.delete(w.key===null?y:w.key),I=i(w,I,y),F===null?L=w:F.sibling=w,F=w);return t&&g.forEach(function(x){return e(S,x)}),Ke&&Os(S,y),L}function P(S,I,A,D){var L=Eo(A);if(typeof L!="function")throw Error(U(150));if(A=L.call(A),A==null)throw Error(U(151));for(var F=L=null,g=I,y=I=0,w=null,E=A.next();g!==null&&!E.done;y++,E=A.next()){g.index>y?(w=g,g=null):w=g.sibling;var x=v(S,g,E.value,D);if(x===null){g===null&&(g=w);break}t&&g&&x.alternate===null&&e(S,g),I=i(x,I,y),F===null?L=x:F.sibling=x,F=x,g=w}if(E.done)return n(S,g),Ke&&Os(S,y),L;if(g===null){for(;!E.done;y++,E=A.next())E=p(S,E.value,D),E!==null&&(I=i(E,I,y),F===null?L=E:F.sibling=E,F=E);return Ke&&Os(S,y),L}for(g=r(S,g);!E.done;y++,E=A.next())E=k(g,S,y,E.value,D),E!==null&&(t&&E.alternate!==null&&g.delete(E.key===null?y:E.key),I=i(E,I,y),F===null?L=E:F.sibling=E,F=E);return t&&g.forEach(function(C){return e(S,C)}),Ke&&Os(S,y),L}function V(S,I,A,D){if(typeof A=="object"&&A!==null&&A.type===vi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Xa:e:{for(var L=A.key,F=I;F!==null;){if(F.key===L){if(L=A.type,L===vi){if(F.tag===7){n(S,F.sibling),I=s(F,A.props.children),I.return=S,S=I;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Gr&&Qm(L)===F.type){n(S,F.sibling),I=s(F,A.props),I.ref=Ao(S,F,A),I.return=S,S=I;break e}n(S,F);break}else e(S,F);F=F.sibling}A.type===vi?(I=Bs(A.props.children,S.mode,D,A.key),I.return=S,S=I):(D=Ml(A.type,A.key,A.props,null,S.mode,D),D.ref=Ao(S,I,A),D.return=S,S=D)}return o(S);case _i:e:{for(F=A.key;I!==null;){if(I.key===F)if(I.tag===4&&I.stateNode.containerInfo===A.containerInfo&&I.stateNode.implementation===A.implementation){n(S,I.sibling),I=s(I,A.children||[]),I.return=S,S=I;break e}else{n(S,I);break}else e(S,I);I=I.sibling}I=rh(A,S.mode,D),I.return=S,S=I}return o(S);case Gr:return F=A._init,V(S,I,F(A._payload),D)}if(Po(A))return N(S,I,A,D);if(Eo(A))return P(S,I,A,D);ul(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,I!==null&&I.tag===6?(n(S,I.sibling),I=s(I,A),I.return=S,S=I):(n(S,I),I=nh(A,S.mode,D),I.return=S,S=I),o(S)):n(S,I)}return V}var qi=Iv(!0),Sv=Iv(!1),ou=ks(null),au=null,ki=null,df=null;function ff(){df=ki=au=null}function pf(t){var e=ou.current;Ge(ou),t._currentValue=e}function Jh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oi(t,e){au=t,df=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(au===null)throw Error(U(308));ki=t,au.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var js=null;function mf(t){js===null?js=[t]:js.push(t)}function xv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,mf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Nr(t,r)}function Nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function as(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,xe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Nr(t,n)}return s=r.interleaved,s===null?(e.next=e,mf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Nr(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}function Jm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,r){var s=t.updateQueue;Wr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=c=u=null,l=i;do{var v=l.lane,k=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,P=l;switch(v=e,k=n,P.tag){case 1:if(N=P.payload,typeof N=="function"){p=N.call(k,p,v);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,v=typeof N=="function"?N.call(k,p,v):N,v==null)break e;p=tt({},p,v);break e;case 2:Wr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=k,u=p):f=f.next=k,o|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Qs|=o,t.lanes=o,t.memoizedState=p}}function Ym(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Ra={},nr=ks(Ra),ua=ks(Ra),ca=ks(Ra);function Us(t){if(t===Ra)throw Error(U(174));return t}function yf(t,e){switch(je(ca,e),je(ua,t),je(nr,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}Ge(nr),je(nr,e)}function Gi(){Ge(nr),Ge(ua),Ge(ca)}function kv(t){Us(ca.current);var e=Us(nr.current),n=Nh(e,t.type);e!==n&&(je(ua,t),je(nr,n))}function _f(t){ua.current===t&&(Ge(nr),Ge(ua))}var Ze=ks(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function vf(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var Pl=Mr.ReactCurrentDispatcher,Yc=Mr.ReactCurrentBatchConfig,Ks=0,et=null,St=null,Pt=null,cu=!1,Bo=!1,ha=0,wI=0;function Ht(){throw Error(U(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Ef(t,e,n,r,s,i){if(Ks=i,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?SI:xI,t=n(r,s),Bo){i=0;do{if(Bo=!1,ha=0,25<=i)throw Error(U(301));i+=1,Pt=St=null,e.updateQueue=null,Pl.current=AI,t=n(r,s)}while(Bo)}if(Pl.current=hu,e=St!==null&&St.next!==null,Ks=0,Pt=St=et=null,cu=!1,e)throw Error(U(300));return t}function Tf(){var t=ha!==0;return ha=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?et.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Nn(){if(St===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Pt===null?et.memoizedState:Pt.next;if(e!==null)Pt=e,St=t;else{if(t===null)throw Error(U(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Pt===null?et.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function da(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=St,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Ks&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,et.lanes|=f,Qs|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Wn(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,et.lanes|=i,Qs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Wn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Cv(){}function Rv(t,e){var n=et,r=Nn(),s=e(),i=!Wn(r.memoizedState,s);if(i&&(r.memoizedState=s,cn=!0),r=r.queue,If(bv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,fa(9,Pv.bind(null,n,r,s,e),void 0,null),bt===null)throw Error(U(349));Ks&30||Nv(n,e,s)}return s}function Nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pv(t,e,n,r){e.value=n,e.getSnapshot=r,Dv(e)&&Ov(t)}function bv(t,e,n){return n(function(){Dv(e)&&Ov(t)})}function Dv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function Ov(t){var e=Nr(t,1);e!==null&&Bn(e,t,1,-1)}function Xm(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},e.queue=t,t=t.dispatch=II.bind(null,et,t),[e.memoizedState,t]}function fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=et.updateQueue,e===null?(e={lastEffect:null,stores:null},et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vv(){return Nn().memoizedState}function bl(t,e,n,r){var s=Xn();et.flags|=t,s.memoizedState=fa(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var s=Nn();r=r===void 0?null:r;var i=void 0;if(St!==null){var o=St.memoizedState;if(i=o.destroy,r!==null&&wf(r,o.deps)){s.memoizedState=fa(e,n,i,r);return}}et.flags|=t,s.memoizedState=fa(1|e,n,i,r)}function Zm(t,e){return bl(8390656,8,t,e)}function If(t,e){return qu(2048,8,t,e)}function Mv(t,e){return qu(4,2,t,e)}function Lv(t,e){return qu(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uv(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,jv.bind(null,e,t),n)}function Sf(){}function Fv(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Ks&21?(Wn(n,e)||(n=W_(),et.lanes|=n,Qs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function EI(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Yc.transition;Yc.transition={};try{t(!1),e()}finally{be=n,Yc.transition=r}}function Bv(){return Nn().memoizedState}function TI(t,e,n){var r=us(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hv(t))qv(e,n);else if(n=xv(t,e,n,r),n!==null){var s=en();Bn(n,t,r,s),Gv(n,e,r)}}function II(t,e,n){var r=us(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hv(t))qv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Wn(l,o)){var u=e.interleaved;u===null?(s.next=s,mf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=xv(t,e,s,r),n!==null&&(s=en(),Bn(n,t,r,s),Gv(n,e,r))}}function Hv(t){var e=t.alternate;return t===et||e!==null&&e===et}function qv(t,e){Bo=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}var hu={readContext:Rn,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},SI={readContext:Rn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TI.bind(null,et,t),[r.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Xm,useDebugValue:Sf,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Xm(!1),e=t[0];return t=EI.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=et,s=Xn();if(Ke){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),bt===null)throw Error(U(349));Ks&30||Nv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Zm(bv.bind(null,r,i,t),[t]),r.flags|=2048,fa(9,Pv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Xn(),e=bt.identifierPrefix;if(Ke){var n=Er,r=wr;n=(r&~(1<<32-zn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xI={readContext:Rn,useCallback:Fv,useContext:Rn,useEffect:If,useImperativeHandle:Uv,useInsertionEffect:Mv,useLayoutEffect:Lv,useMemo:$v,useReducer:Xc,useRef:Vv,useState:function(){return Xc(da)},useDebugValue:Sf,useDeferredValue:function(t){var e=Nn();return zv(e,St.memoizedState,t)},useTransition:function(){var t=Xc(da)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:Bv,unstable_isNewReconciler:!1},AI={readContext:Rn,useCallback:Fv,useContext:Rn,useEffect:If,useImperativeHandle:Uv,useInsertionEffect:Mv,useLayoutEffect:Lv,useMemo:$v,useReducer:Zc,useRef:Vv,useState:function(){return Zc(da)},useDebugValue:Sf,useDeferredValue:function(t){var e=Nn();return St===null?e.memoizedState=t:zv(e,St.memoizedState,t)},useTransition:function(){var t=Zc(da)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Cv,useSyncExternalStore:Rv,useId:Bv,unstable_isNewReconciler:!1};function Mn(t,e){if(t&&t.defaultProps){e=tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=en(),s=us(t),i=Ar(r,s);i.payload=e,n!=null&&(i.callback=n),e=as(t,i,s),e!==null&&(Bn(e,t,s,r),Nl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=en(),s=us(t),i=Ar(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=as(t,i,s),e!==null&&(Bn(e,t,s,r),Nl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),r=us(t),s=Ar(n,r);s.tag=2,e!=null&&(s.callback=e),e=as(t,s,r),e!==null&&(Bn(e,t,r,n),Nl(e,t,r))}};function eg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,r)||!ia(s,i):!0}function Wv(t,e,n){var r=!1,s=ys,i=e.contextType;return typeof i=="object"&&i!==null?i=Rn(i):(s=dn(e)?Gs:Yt.current,r=e.contextTypes,i=(r=r!=null)?Bi(t,s):ys),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},gf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Rn(i):(i=dn(e)?Gs:Yt.current,s.context=Bi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Gu.enqueueReplaceState(s,s.state,null),lu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=eT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function eh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kI=typeof WeakMap=="function"?WeakMap:Map;function Kv(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fu||(fu=!0,ud=r),Zh(t,e)},n}function Qv(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Zh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=$I.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,as(n,e,1))),n.lanes|=1),t)}var CI=Mr.ReactCurrentOwner,cn=!1;function Zt(t,e,n,r){e.child=t===null?Sv(e,null,n,r):qi(e,t.child,n,r)}function ig(t,e,n,r,s){n=n.render;var i=e.ref;return Oi(e,s),r=Ef(t,e,n,r,i,s),n=Tf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pr(t,e,s)):(Ke&&n&&uf(e),e.flags|=1,Zt(t,e,r,s),e.child)}function og(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Jv(t,e,i,r,s)):(t=Ml(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,r)&&t.ref===e.ref)return Pr(t,e,s)}return e.flags|=1,t=cs(i,r),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ia(i,r)&&t.ref===e.ref)if(cn=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Pr(t,e,s)}return ed(t,e,n,r,s)}function Yv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Ri,gn),gn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,je(Ri,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,je(Ri,gn),gn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,je(Ri,gn),gn|=r;return Zt(t,e,s,n),e.child}function Xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,s){var i=dn(n)?Gs:Yt.current;return i=Bi(e,i),Oi(e,s),n=Ef(t,e,n,r,i,s),r=Tf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pr(t,e,s)):(Ke&&r&&uf(e),e.flags|=1,Zt(t,e,n,s),e.child)}function ag(t,e,n,r,s){if(dn(n)){var i=!0;ru(e)}else i=!1;if(Oi(e,s),e.stateNode===null)Dl(t,e),Wv(e,n,r),Xh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=dn(n)?Gs:Yt.current,c=Bi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&tg(e,o,r,c),Wr=!1;var v=e.memoizedState;o.state=v,lu(e,r,o,s),u=e.memoizedState,l!==r||v!==u||hn.current||Wr?(typeof f=="function"&&(Yh(e,n,f,r),u=e.memoizedState),(l=Wr||eg(e,n,l,r,v,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Av(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mn(e.type,l),o.props=c,p=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rn(u):(u=dn(n)?Gs:Yt.current,u=Bi(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||v!==u)&&tg(e,o,r,u),Wr=!1,v=e.memoizedState,o.state=v,lu(e,r,o,s);var N=e.memoizedState;l!==p||v!==N||hn.current||Wr?(typeof k=="function"&&(Yh(e,n,k,r),N=e.memoizedState),(c=Wr||eg(e,n,c,r,v,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,i,s)}function td(t,e,n,r,s,i){Xv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Gm(e,n,!1),Pr(t,e,i);r=e.stateNode,CI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,i),e.child=qi(e,null,l,i)):Zt(t,e,l,i),e.memoizedState=r.state,s&&Gm(e,n,!0),e.child}function Zv(t){var e=t.stateNode;e.pendingContext?qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qm(t,e.context,!1),yf(t,e.containerInfo)}function lg(t,e,n,r,s){return Hi(),hf(s),e.flags|=256,Zt(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function e0(t,e,n){var r=e.pendingProps,s=Ze.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),je(Ze,s&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Qu(o,r,0,null),t=Bs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=rd(n),e.memoizedState=nd,t):xf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return RI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cs(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=cs(l,i):(i=Bs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return i=t.child,t=i.sibling,r=cs(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xf(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&hf(r),qi(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=eh(Error(U(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Qu({mode:"visible",children:r.children},s,0,null),i=Bs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&qi(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,i);if(!(e.mode&1))return cl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=eh(i,r,void 0),cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,cn||l){if(r=bt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Nr(t,s),Bn(r,t,s,-1))}return Pf(),r=eh(Error(U(421))),cl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=zI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,yn=os(s.nextSibling),_n=e,Ke=!0,jn=null,t!==null&&(Tn[In++]=wr,Tn[In++]=Er,Tn[In++]=Ws,wr=t.id,Er=t.overflow,Ws=e),e=xf(e,r.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jh(t.return,e,n)}function th(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function t0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Zt(t,e,r.children,n),r=Ze.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(je(Ze,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),th(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&uu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}th(e,!0,n,null,i);break;case"together":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=cs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function NI(t,e,n){switch(e.tag){case 3:Zv(e),Hi();break;case 5:kv(e);break;case 1:dn(e.type)&&ru(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;je(ou,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(je(Ze,Ze.current&1),e.flags|=128,null):n&e.child.childLanes?e0(t,e,n):(je(Ze,Ze.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);je(Ze,Ze.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return t0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),je(Ze,Ze.current),r)break;return null;case 22:case 23:return e.lanes=0,Yv(t,e,n)}return Pr(t,e,n)}var n0,sd,r0,s0;n0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};r0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Us(nr.current);var i=null;switch(n){case"input":s=Ah(t,s),r=Ah(t,r),i=[];break;case"select":s=tt({},s,{value:void 0}),r=tt({},r,{value:void 0}),i=[];break;case"textarea":s=Rh(t,s),r=Rh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tu)}Ph(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ze("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};s0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ko(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PI(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return dn(e.type)&&nu(),qt(e),null;case 3:return r=e.stateNode,Gi(),Ge(hn),Ge(Yt),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(dd(jn),jn=null))),sd(t,e),qt(e),null;case 5:_f(e);var s=Us(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)r0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return qt(e),null}if(t=Us(nr.current),ll(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[er]=e,r[la]=i,t=(e.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(s=0;s<Do.length;s++)ze(Do[s],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":_m(r,i),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ze("invalid",r);break;case"textarea":wm(r,i),ze("invalid",r)}Ph(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&al(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&al(r.textContent,l,t),s=["children",""+l]):Xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ze("scroll",r)}switch(n){case"input":Za(r),vm(r,i,!0);break;case"textarea":Za(r),Em(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=b_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[la]=r,n0(t,e,!1,!1),e.stateNode=t;e:{switch(o=bh(n,r),n){case"dialog":ze("cancel",t),ze("close",t),s=r;break;case"iframe":case"object":case"embed":ze("load",t),s=r;break;case"video":case"audio":for(s=0;s<Do.length;s++)ze(Do[s],t);s=r;break;case"source":ze("error",t),s=r;break;case"img":case"image":case"link":ze("error",t),ze("load",t),s=r;break;case"details":ze("toggle",t),s=r;break;case"input":_m(t,r),s=Ah(t,r),ze("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=tt({},r,{value:void 0}),ze("invalid",t);break;case"textarea":wm(t,r),s=Rh(t,r),ze("invalid",t);break;default:s=r}Ph(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?V_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&D_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(t,u):typeof u=="number"&&Zo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ze("scroll",t):u!=null&&Kd(t,i,u,o))}switch(n){case"input":Za(t),vm(t,r,!1);break;case"textarea":Za(t),Em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ni(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)s0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Us(ca.current),Us(nr.current),ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(i=r.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:al(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return qt(e),null;case 13:if(Ge(Ze),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ke&&yn!==null&&e.mode&1&&!(e.flags&128))Tv(),Hi(),e.flags|=98560,i=!1;else if(i=ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[er]=e}else Hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),i=!1}else jn!==null&&(dd(jn),jn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ze.current&1?At===0&&(At=3):Pf())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Gi(),sd(t,e),t===null&&oa(e.stateNode.containerInfo),qt(e),null;case 10:return pf(e.type._context),qt(e),null;case 17:return dn(e.type)&&nu(),qt(e),null;case 19:if(Ge(Ze),i=e.memoizedState,i===null)return qt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ko(i,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,ko(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return je(Ze,Ze.current&1|2),e.child}t=t.sibling}i.tail!==null&&ht()>Ki&&(e.flags|=128,r=!0,ko(i,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ke)return qt(e),null}else 2*ht()-i.renderingStartTime>Ki&&n!==1073741824&&(e.flags|=128,r=!0,ko(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ht(),e.sibling=null,n=Ze.current,je(Ze,r?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function bI(t,e){switch(cf(e),e.tag){case 1:return dn(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),Ge(hn),Ge(Yt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(Ge(Ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ge(Ze),null;case 4:return Gi(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var hl=!1,Qt=!1,DI=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ot(t,e,r)}else n.current=null}function id(t,e,n){try{n()}catch(r){ot(t,e,r)}}var cg=!1;function OI(t,e){if(zh=Xl,t=uv(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,v=null;t:for(;;){for(var k;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)v=p,p=k;for(;;){if(p===t)break t;if(v===n&&++c===s&&(l=o),v===i&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bh={focusedElem:t,selectionRange:n},Xl=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var P=N.memoizedProps,V=N.memoizedState,S=e.stateNode,I=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Mn(e.type,P),V);S.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){ot(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return N=cg,cg=!1,N}function Ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&id(e,n,i)}s=s.next}while(s!==r)}}function Wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i0(t){var e=t.alternate;e!==null&&(t.alternate=null,i0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[la],delete e[Gh],delete e[gI],delete e[yI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o0(t){return t.tag===5||t.tag===3||t.tag===4}function hg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var Vt=null,Ln=!1;function Hr(t,e,n){for(n=n.child;n!==null;)a0(t,e,n),n=n.sibling}function a0(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Uu,n)}catch{}switch(n.tag){case 5:Qt||Ci(n,e);case 6:var r=Vt,s=Ln;Vt=null,Hr(t,e,n),Vt=r,Ln=s,Vt!==null&&(Ln?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Ln?(t=Vt,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),ra(t)):Kc(Vt,n.stateNode));break;case 4:r=Vt,s=Ln,Vt=n.stateNode.containerInfo,Ln=!0,Hr(t,e,n),Vt=r,Ln=s;break;case 0:case 11:case 14:case 15:if(!Qt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&id(n,e,o),s=s.next}while(s!==r)}Hr(t,e,n);break;case 1:if(!Qt&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ot(n,e,l)}Hr(t,e,n);break;case 21:Hr(t,e,n);break;case 22:n.mode&1?(Qt=(r=Qt)||n.memoizedState!==null,Hr(t,e,n),Qt=r):Hr(t,e,n);break;default:Hr(t,e,n)}}function dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DI),e.forEach(function(r){var s=BI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Vt=l.stateNode,Ln=!1;break e;case 3:Vt=l.stateNode.containerInfo,Ln=!0;break e;case 4:Vt=l.stateNode.containerInfo,Ln=!0;break e}l=l.return}if(Vt===null)throw Error(U(160));a0(i,o,s),Vt=null,Ln=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){ot(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l0(e,t),e=e.sibling}function l0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Yn(t),r&4){try{Ho(3,t,t.return),Wu(3,t)}catch(P){ot(t,t.return,P)}try{Ho(5,t,t.return)}catch(P){ot(t,t.return,P)}}break;case 1:Dn(e,t),Yn(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(Dn(e,t),Yn(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var s=t.stateNode;try{Zo(s,"")}catch(P){ot(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&N_(s,i),bh(l,o);var c=bh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?V_(s,p):f==="dangerouslySetInnerHTML"?D_(s,p):f==="children"?Zo(s,p):Kd(s,f,p,c)}switch(l){case"input":kh(s,i);break;case"textarea":P_(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Ni(s,!!i.multiple,k,!1):v!==!!i.multiple&&(i.defaultValue!=null?Ni(s,!!i.multiple,i.defaultValue,!0):Ni(s,!!i.multiple,i.multiple?[]:"",!1))}s[la]=i}catch(P){ot(t,t.return,P)}}break;case 6:if(Dn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){ot(t,t.return,P)}}break;case 3:if(Dn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(P){ot(t,t.return,P)}break;case 4:Dn(e,t),Yn(t);break;case 13:Dn(e,t),Yn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Cf=ht())),r&4&&dg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||f,Dn(e,t),Qt=c):Dn(e,t),Yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(p=K=f;K!==null;){switch(v=K,k=v.child,v.tag){case 0:case 11:case 14:case 15:Ho(4,v,v.return);break;case 1:Ci(v,v.return);var N=v.stateNode;if(typeof N.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(P){ot(r,n,P)}}break;case 5:Ci(v,v.return);break;case 22:if(v.memoizedState!==null){pg(p);continue}}k!==null?(k.return=v,K=k):pg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=O_("display",o))}catch(P){ot(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){ot(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Dn(e,t),Yn(t),r&4&&dg(t);break;case 21:break;default:Dn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Zo(s,""),r.flags&=-33);var i=hg(t);ld(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hg(t);ad(t,l,o);break;default:throw Error(U(161))}}catch(u){ot(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VI(t,e,n){K=t,u0(t)}function u0(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||hl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Qt;l=hl;var c=Qt;if(hl=o,(Qt=u)&&!c)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?mg(s):u!==null?(u.return=o,K=u):mg(s);for(;i!==null;)K=i,u0(i),i=i.sibling;K=s,hl=l,Qt=c}fg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):fg(t)}}function fg(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Mn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ym(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ym(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Qt||e.flags&512&&od(e)}catch(v){ot(e,e.return,v)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function pg(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function mg(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wu(4,e)}catch(u){ot(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ot(e,s,u)}}var i=e.return;try{od(e)}catch(u){ot(e,i,u)}break;case 5:var o=e.return;try{od(e)}catch(u){ot(e,o,u)}}}catch(u){ot(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var MI=Math.ceil,du=Mr.ReactCurrentDispatcher,Af=Mr.ReactCurrentOwner,Cn=Mr.ReactCurrentBatchConfig,xe=0,bt=null,yt=null,Ut=0,gn=0,Ri=ks(0),At=0,pa=null,Qs=0,Ku=0,kf=0,qo=null,un=null,Cf=0,Ki=1/0,gr=null,fu=!1,ud=null,ls=null,dl=!1,ns=null,pu=0,Go=0,cd=null,Ol=-1,Vl=0;function en(){return xe&6?ht():Ol!==-1?Ol:Ol=ht()}function us(t){return t.mode&1?xe&2&&Ut!==0?Ut&-Ut:vI.transition!==null?(Vl===0&&(Vl=W_()),Vl):(t=be,t!==0||(t=window.event,t=t===void 0?16:ev(t.type)),t):1}function Bn(t,e,n,r){if(50<Go)throw Go=0,cd=null,Error(U(185));Aa(t,n,r),(!(xe&2)||t!==bt)&&(t===bt&&(!(xe&2)&&(Ku|=n),At===4&&Yr(t,Ut)),fn(t,r),n===1&&xe===0&&!(e.mode&1)&&(Ki=ht()+500,Hu&&Cs()))}function fn(t,e){var n=t.callbackNode;vT(t,e);var r=Yl(t,t===bt?Ut:0);if(r===0)n!==null&&Sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sm(n),e===1)t.tag===0?_I(gg.bind(null,t)):vv(gg.bind(null,t)),pI(function(){!(xe&6)&&Cs()}),n=null;else{switch(K_(r)){case 1:n=Zd;break;case 4:n=q_;break;case 16:n=Jl;break;case 536870912:n=G_;break;default:n=Jl}n=y0(n,c0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function c0(t,e){if(Ol=-1,Vl=0,xe&6)throw Error(U(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=Yl(t,t===bt?Ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mu(t,r);else{e=r;var s=xe;xe|=2;var i=d0();(bt!==t||Ut!==e)&&(gr=null,Ki=ht()+500,zs(t,e));do try{UI();break}catch(l){h0(t,l)}while(!0);ff(),du.current=i,xe=s,yt!==null?e=0:(bt=null,Ut=0,e=At)}if(e!==0){if(e===2&&(s=Lh(t),s!==0&&(r=s,e=hd(t,s))),e===1)throw n=pa,zs(t,0),Yr(t,r),fn(t,ht()),n;if(e===6)Yr(t,r);else{if(s=t.current.alternate,!(r&30)&&!LI(s)&&(e=mu(t,r),e===2&&(i=Lh(t),i!==0&&(r=i,e=hd(t,i))),e===1))throw n=pa,zs(t,0),Yr(t,r),fn(t,ht()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Vs(t,un,gr);break;case 3:if(Yr(t,r),(r&130023424)===r&&(e=Cf+500-ht(),10<e)){if(Yl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){en(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qh(Vs.bind(null,t,un,gr),e);break}Vs(t,un,gr);break;case 4:if(Yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-zn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ht()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*MI(r/1960))-r,10<r){t.timeoutHandle=qh(Vs.bind(null,t,un,gr),r);break}Vs(t,un,gr);break;case 5:Vs(t,un,gr);break;default:throw Error(U(329))}}}return fn(t,ht()),t.callbackNode===n?c0.bind(null,t):null}function hd(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(zs(t,e).flags|=256),t=mu(t,e),t!==2&&(e=un,un=n,e!==null&&dd(e)),t}function dd(t){un===null?un=t:un.push.apply(un,t)}function LI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Wn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~kf,e&=~Ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),r=1<<n;t[n]=-1,e&=~r}}function gg(t){if(xe&6)throw Error(U(327));Vi();var e=Yl(t,0);if(!(e&1))return fn(t,ht()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var r=Lh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=pa,zs(t,0),Yr(t,e),fn(t,ht()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vs(t,un,gr),fn(t,ht()),null}function Rf(t,e){var n=xe;xe|=1;try{return t(e)}finally{xe=n,xe===0&&(Ki=ht()+500,Hu&&Cs())}}function Js(t){ns!==null&&ns.tag===0&&!(xe&6)&&Vi();var e=xe;xe|=1;var n=Cn.transition,r=be;try{if(Cn.transition=null,be=1,t)return t()}finally{be=r,Cn.transition=n,xe=e,!(xe&6)&&Cs()}}function Nf(){gn=Ri.current,Ge(Ri)}function zs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fI(n)),yt!==null)for(n=yt.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:Gi(),Ge(hn),Ge(Yt),vf();break;case 5:_f(r);break;case 4:Gi();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:pf(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(bt=t,yt=t=cs(t.current,null),Ut=gn=e,At=0,pa=null,kf=Ku=Qs=0,un=qo=null,js!==null){for(e=0;e<js.length;e++)if(n=js[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}js=null}return t}function h0(t,e){do{var n=yt;try{if(ff(),Pl.current=hu,cu){for(var r=et.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}cu=!1}if(Ks=0,Pt=St=et=null,Bo=!1,ha=0,Af.current=null,n===null||n.return===null){At=1,pa=e,yt=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ut,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=rg(o);if(k!==null){k.flags&=-257,sg(k,o,l,i,e),k.mode&1&&ng(i,c,e),e=k,u=c;var N=e.updateQueue;if(N===null){var P=new Set;P.add(u),e.updateQueue=P}else N.add(u);break e}else{if(!(e&1)){ng(i,c,e),Pf();break e}u=Error(U(426))}}else if(Ke&&l.mode&1){var V=rg(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),sg(V,o,l,i,e),hf(Wi(u,l));break e}}i=u=Wi(u,l),At!==4&&(At=2),qo===null?qo=[i]:qo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=Kv(i,u,e);Jm(i,S);break e;case 1:l=u;var I=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof I.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ls===null||!ls.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=Qv(i,l,e);Jm(i,D);break e}}i=i.return}while(i!==null)}p0(n)}catch(L){e=L,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function d0(){var t=du.current;return du.current=hu,t===null?hu:t}function Pf(){(At===0||At===3||At===2)&&(At=4),bt===null||!(Qs&268435455)&&!(Ku&268435455)||Yr(bt,Ut)}function mu(t,e){var n=xe;xe|=2;var r=d0();(bt!==t||Ut!==e)&&(gr=null,zs(t,e));do try{jI();break}catch(s){h0(t,s)}while(!0);if(ff(),xe=n,du.current=r,yt!==null)throw Error(U(261));return bt=null,Ut=0,At}function jI(){for(;yt!==null;)f0(yt)}function UI(){for(;yt!==null&&!cT();)f0(yt)}function f0(t){var e=g0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?p0(t):yt=e,Af.current=null}function p0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bI(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,yt=null;return}}else if(n=PI(n,e,gn),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);At===0&&(At=5)}function Vs(t,e,n){var r=be,s=Cn.transition;try{Cn.transition=null,be=1,FI(t,e,n,r)}finally{Cn.transition=s,be=r}return null}function FI(t,e,n,r){do Vi();while(ns!==null);if(xe&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(wT(t,i),t===bt&&(yt=bt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,y0(Jl,function(){return Vi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Cn.transition,Cn.transition=null;var o=be;be=1;var l=xe;xe|=4,Af.current=null,OI(t,n),l0(n,t),oI(Bh),Xl=!!zh,Bh=zh=null,t.current=n,VI(n),hT(),xe=l,be=o,Cn.transition=i}else t.current=n;if(dl&&(dl=!1,ns=t,pu=s),i=t.pendingLanes,i===0&&(ls=null),pT(n.stateNode),fn(t,ht()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fu)throw fu=!1,t=ud,ud=null,t;return pu&1&&t.tag!==0&&Vi(),i=t.pendingLanes,i&1?t===cd?Go++:(Go=0,cd=t):Go=0,Cs(),null}function Vi(){if(ns!==null){var t=K_(pu),e=Cn.transition,n=be;try{if(Cn.transition=null,be=16>t?16:t,ns===null)var r=!1;else{if(t=ns,ns=null,pu=0,xe&6)throw Error(U(331));var s=xe;for(xe|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(K=c;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:Ho(8,f,i)}var p=f.child;if(p!==null)p.return=f,K=p;else for(;K!==null;){f=K;var v=f.sibling,k=f.return;if(i0(f),f===c){K=null;break}if(v!==null){v.return=k,K=v;break}K=k}}}var N=i.alternate;if(N!==null){var P=N.child;if(P!==null){N.child=null;do{var V=P.sibling;P.sibling=null,P=V}while(P!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ho(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,K=S;break e}K=i.return}}var I=t.current;for(K=I;K!==null;){o=K;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,K=A;else e:for(o=I;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Wu(9,l)}}catch(L){ot(l,l.return,L)}if(l===o){K=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,K=D;break e}K=l.return}}if(xe=s,Cs(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Uu,t)}catch{}r=!0}return r}finally{be=n,Cn.transition=e}}return!1}function yg(t,e,n){e=Wi(n,e),e=Kv(t,e,1),t=as(t,e,1),e=en(),t!==null&&(Aa(t,1,e),fn(t,e))}function ot(t,e,n){if(t.tag===3)yg(t,t,n);else for(;e!==null;){if(e.tag===3){yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ls===null||!ls.has(r))){t=Wi(n,t),t=Qv(e,t,1),e=as(e,t,1),t=en(),e!==null&&(Aa(e,1,t),fn(e,t));break}}e=e.return}}function $I(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Ut&n)===n&&(At===4||At===3&&(Ut&130023424)===Ut&&500>ht()-Cf?zs(t,0):kf|=n),fn(t,e)}function m0(t,e){e===0&&(t.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var n=en();t=Nr(t,e),t!==null&&(Aa(t,e,n),fn(t,n))}function zI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m0(t,n)}function BI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),m0(t,n)}var g0;g0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,NI(t,e,n);cn=!!(t.flags&131072)}else cn=!1,Ke&&e.flags&1048576&&wv(e,iu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dl(t,e),t=e.pendingProps;var s=Bi(e,Yt.current);Oi(e,n),s=Ef(null,e,r,t,s,n);var i=Tf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(r)?(i=!0,ru(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gf(e),s.updater=Gu,e.stateNode=s,s._reactInternals=e,Xh(e,r,t,n),e=td(null,e,r,!0,i,n)):(e.tag=0,Ke&&i&&uf(e),Zt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=qI(r),t=Mn(r,t),s){case 0:e=ed(null,e,r,t,n);break e;case 1:e=ag(null,e,r,t,n);break e;case 11:e=ig(null,e,r,t,n);break e;case 14:e=og(null,e,r,Mn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),ed(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),ag(t,e,r,s,n);case 3:e:{if(Zv(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Av(t,e),lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Wi(Error(U(423)),e),e=lg(t,e,r,n,s);break e}else if(r!==s){s=Wi(Error(U(424)),e),e=lg(t,e,r,n,s);break e}else for(yn=os(e.stateNode.containerInfo.firstChild),_n=e,Ke=!0,jn=null,n=Sv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===s){e=Pr(t,e,n);break e}Zt(t,e,r,n)}e=e.child}return e;case 5:return kv(e),t===null&&Qh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Hh(r,s)?o=null:i!==null&&Hh(r,i)&&(e.flags|=32),Xv(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return e0(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):Zt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),ig(t,e,r,s,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,je(ou,r._currentValue),r._currentValue=o,i!==null)if(Wn(i.value,o)){if(i.children===s.children&&!hn.current){e=Pr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ar(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Jh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Zt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Oi(e,n),s=Rn(s),r=r(s),e.flags|=1,Zt(t,e,r,n),e.child;case 14:return r=e.type,s=Mn(r,e.pendingProps),s=Mn(r.type,s),og(t,e,r,s,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Mn(r,s),Dl(t,e),e.tag=1,dn(r)?(t=!0,ru(e)):t=!1,Oi(e,n),Wv(e,r,s),Xh(e,r,s,n),td(null,e,r,!0,t,n);case 19:return t0(t,e,n);case 22:return Yv(t,e,n)}throw Error(U(156,e.tag))};function y0(t,e){return H_(t,e)}function HI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,r){return new HI(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qI(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jd)return 11;if(t===Yd)return 14}return 2}function cs(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return Bs(n.children,s,i,e);case Qd:o=8,s|=8;break;case Th:return t=kn(12,n,e,s|2),t.elementType=Th,t.lanes=i,t;case Ih:return t=kn(13,n,e,s),t.elementType=Ih,t.lanes=i,t;case Sh:return t=kn(19,n,e,s),t.elementType=Sh,t.lanes=i,t;case k_:return Qu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x_:o=10;break e;case A_:o=9;break e;case Jd:o=11;break e;case Yd:o=14;break e;case Gr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=kn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Bs(t,e,n,r){return t=kn(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=kn(22,t,r,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function nh(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function rh(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,s,i,o,l,u){return t=new GI(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=kn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(i),t}function WI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _0(t){if(!t)return ys;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(dn(n))return _v(t,n,e)}return e}function v0(t,e,n,r,s,i,o,l,u){return t=Df(n,r,!0,t,s,i,o,l,u),t.context=_0(null),n=t.current,r=en(),s=us(n),i=Ar(r,s),i.callback=e??null,as(n,i,s),t.current.lanes=s,Aa(t,s,r),fn(t,r),t}function Ju(t,e,n,r){var s=e.current,i=en(),o=us(s);return n=_0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=as(s,e,o),t!==null&&(Bn(t,s,o,i),Nl(t,s,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){_g(t,e),(t=t.alternate)&&_g(t,e)}function KI(){return null}var w0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Yu.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Ju(t,e,null,null)};Yu.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Js(function(){Ju(null,t,null,null)}),e[Rr]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Y_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jr.length&&e!==0&&e<Jr[n].priority;n++);Jr.splice(n,0,t),n===0&&Z_(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vg(){}function QI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=gu(o);i.call(c)}}var o=v0(e,r,t,0,null,!1,!1,"",vg);return t._reactRootContainer=o,t[Rr]=o.current,oa(t.nodeType===8?t.parentNode:t),Js(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=gu(u);l.call(c)}}var u=Df(t,0,!1,null,null,!1,!1,"",vg);return t._reactRootContainer=u,t[Rr]=u.current,oa(t.nodeType===8?t.parentNode:t),Js(function(){Ju(e,u,n,r)}),u}function Zu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=gu(o);l.call(u)}}Ju(e,o,t,s)}else o=QI(n,e,t,s,r);return gu(o)}Q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bo(e.pendingLanes);n!==0&&(ef(e,n|1),fn(e,ht()),!(xe&6)&&(Ki=ht()+500,Cs()))}break;case 13:Js(function(){var r=Nr(t,1);if(r!==null){var s=en();Bn(r,t,1,s)}}),Of(t,1)}};tf=function(t){if(t.tag===13){var e=Nr(t,134217728);if(e!==null){var n=en();Bn(e,t,134217728,n)}Of(t,134217728)}};J_=function(t){if(t.tag===13){var e=us(t),n=Nr(t,e);if(n!==null){var r=en();Bn(n,t,e,r)}Of(t,e)}};Y_=function(){return be};X_=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};Oh=function(t,e,n){switch(e){case"input":if(kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Bu(r);if(!s)throw Error(U(90));R_(r),kh(r,s)}}}break;case"textarea":P_(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};j_=Rf;U_=Js;var JI={usingClientEntryPoint:!1,Events:[Ca,Ii,Bu,M_,L_,Rf]},Co={findFiberByHostInstance:Ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YI={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=z_(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||KI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Uu=fl.inject(YI),tr=fl}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JI;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(U(200));return WI(t,e,null,n)};wn.createRoot=function(t,e){if(!Mf(t))throw Error(U(299));var n=!1,r="",s=w0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,s),t[Rr]=e.current,oa(t.nodeType===8?t.parentNode:t),new Vf(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=z_(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Js(t)};wn.hydrate=function(t,e,n){if(!Xu(e))throw Error(U(200));return Zu(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=w0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=v0(e,null,t,1,n??null,s,!1,i,o),t[Rr]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Yu(e)};wn.render=function(t,e,n){if(!Xu(e))throw Error(U(200));return Zu(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Xu(t))throw Error(U(40));return t._reactRootContainer?(Js(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rr]=null})}),!0):!1};wn.unstable_batchedUpdates=Rf;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Zu(t,e,n,!1,r)};wn.version="18.3.1-next-f1338f8080-20240426";function E0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E0)}catch(t){console.error(t)}}E0(),E_.exports=wn;var XI=E_.exports,wg=XI;wh.createRoot=wg.createRoot,wh.hydrateRoot=wg.hydrateRoot;const ZI=()=>{};var Eg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},I0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|c>>6,k=c&63;u||(k=64,o||(v=64)),r.push(n[f],n[p],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new tS;const v=i<<2|l>>4;if(r.push(v),c!==64){const k=l<<4&240|c>>2;if(r.push(k),p!==64){const N=c<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nS=function(t){const e=T0(t);return I0.encodeByteArray(e,!0)},yu=function(t){return nS(t).replace(/\./g,"")},S0=function(t){try{return I0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sS=()=>rS().__FIREBASE_DEFAULTS__,iS=()=>{if(typeof process>"u"||typeof Eg>"u")return;const t=Eg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S0(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return ZI()||sS()||iS()||oS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x0=t=>{var e,n;return(n=(e=ec())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},A0=t=>{const e=x0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},k0=()=>{var t;return(t=ec())==null?void 0:t.config},C0=t=>{var e;return(e=ec())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function R0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xt())}function uS(){var e;const t=(e=ec())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fS(){const t=Xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pS(){return!uS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mS(){try{return typeof indexedDB=="object"}catch{return!1}}function gS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="FirebaseError";class pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yS,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_S(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new pr(s,l,r)}}function _S(t,e){return t.replace(vS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vS=/\{\$([^}]+)}/g;function wS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ys(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tg(i)&&Tg(o)){if(!Ys(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ES(t,e){const n=new TS(t,e);return n.subscribe.bind(n)}class TS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sh),s.error===void 0&&(s.error=sh),s.complete===void 0&&(s.complete=sh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sh(){}/**
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
 */function tn(t){return t&&t._delegate?t._delegate:t}/**
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
 */function ro(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lf(t){return(await fetch(t,{credentials:"include"})).ok}let _s=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Ms="[DEFAULT]";/**
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
 */class SS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AS(e))try{this.getOrInitializeService({instanceIdentifier:Ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ms){return this.instances.has(e)}getOptions(e=Ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ms){return this.component?this.component.multipleInstances?e:Ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xS(t){return t===Ms?void 0:t}function AS(t){return t.instantiationMode==="EAGER"}/**
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
 */class kS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const CS={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},RS=Te.INFO,NS={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},PS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=RS,this._logHandler=PS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const bS=(t,e)=>e.some(n=>t instanceof n);let Ig,Sg;function DS(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OS(){return Sg||(Sg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N0=new WeakMap,fd=new WeakMap,P0=new WeakMap,ih=new WeakMap,Uf=new WeakMap;function VS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N0.set(n,t)}).catch(()=>{}),Uf.set(e,t),e}function MS(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LS(t){pd=t(pd)}function jS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oh(this),e,...n);return P0.set(r,e.sort?e.sort():[e]),hs(r)}:OS().includes(t)?function(...e){return t.apply(oh(this),e),hs(N0.get(this))}:function(...e){return hs(t.apply(oh(this),e))}}function US(t){return typeof t=="function"?jS(t):(t instanceof IDBTransaction&&MS(t),bS(t,DS())?new Proxy(t,pd):t)}function hs(t){if(t instanceof IDBRequest)return VS(t);if(ih.has(t))return ih.get(t);const e=US(t);return e!==t&&(ih.set(t,e),Uf.set(e,t)),e}const oh=t=>Uf.get(t);function FS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=hs(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hs(o.result),u.oldVersion,u.newVersion,hs(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const $S=["get","getKey","getAll","getAllKeys","count"],zS=["put","add","delete","clear"],ah=new Map;function xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ah.get(e))return ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$S.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return ah.set(e,i),i}LS(t=>({...t,get:(e,n,r)=>xg(e,n)||t.get(e,n,r),has:(e,n)=>!!xg(e,n)||t.has(e,n)}));/**
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
 */class BS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",Ag="0.14.12";/**
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
 */const br=new jf("@firebase/app"),qS="@firebase/app-compat",GS="@firebase/analytics-compat",WS="@firebase/analytics",KS="@firebase/app-check-compat",QS="@firebase/app-check",JS="@firebase/auth",YS="@firebase/auth-compat",XS="@firebase/database",ZS="@firebase/data-connect",ex="@firebase/database-compat",tx="@firebase/functions",nx="@firebase/functions-compat",rx="@firebase/installations",sx="@firebase/installations-compat",ix="@firebase/messaging",ox="@firebase/messaging-compat",ax="@firebase/performance",lx="@firebase/performance-compat",ux="@firebase/remote-config",cx="@firebase/remote-config-compat",hx="@firebase/storage",dx="@firebase/storage-compat",fx="@firebase/firestore",px="@firebase/ai",mx="@firebase/firestore-compat",gx="firebase",yx="12.13.0";/**
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
 */const gd="[DEFAULT]",_x={[md]:"fire-core",[qS]:"fire-core-compat",[WS]:"fire-analytics",[GS]:"fire-analytics-compat",[QS]:"fire-app-check",[KS]:"fire-app-check-compat",[JS]:"fire-auth",[YS]:"fire-auth-compat",[XS]:"fire-rtdb",[ZS]:"fire-data-connect",[ex]:"fire-rtdb-compat",[tx]:"fire-fn",[nx]:"fire-fn-compat",[rx]:"fire-iid",[sx]:"fire-iid-compat",[ix]:"fire-fcm",[ox]:"fire-fcm-compat",[ax]:"fire-perf",[lx]:"fire-perf-compat",[ux]:"fire-rc",[cx]:"fire-rc-compat",[hx]:"fire-gcs",[dx]:"fire-gcs-compat",[fx]:"fire-fst",[mx]:"fire-fst-compat",[px]:"fire-vertex","fire-js":"fire-js",[gx]:"fire-js-all"};/**
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
 */const _u=new Map,vx=new Map,yd=new Map;function kg(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xs(t){const e=t.name;if(yd.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of _u.values())kg(n,t);for(const n of vx.values())kg(n,t);return!0}function tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new Na("app","Firebase",wx);/**
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
 */class Ex{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const ii=yx;function b0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ds.create("bad-app-name",{appName:String(s)});if(n||(n=k0()),!n)throw ds.create("no-options");const i=_u.get(s);if(i){if(Ys(n,i.options)&&Ys(r,i.config))return i;throw ds.create("duplicate-app",{appName:s})}const o=new kS(s);for(const u of yd.values())o.addComponent(u);const l=new Ex(n,r,o);return _u.set(s,l),l}function Ff(t=gd){const e=_u.get(t);if(!e&&t===gd&&k0())return b0();if(!e)throw ds.create("no-app",{appName:t});return e}function rr(t,e,n){let r=_x[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(o.join(" "));return}Xs(new _s(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Tx="firebase-heartbeat-database",Ix=1,ma="firebase-heartbeat-store";let lh=null;function D0(){return lh||(lh=FS(Tx,Ix,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw ds.create("idb-open",{originalErrorMessage:t.message})})),lh}async function Sx(t){try{const n=(await D0()).transaction(ma),r=await n.objectStore(ma).get(O0(t));return await n.done,r}catch(e){if(e instanceof pr)br.warn(e.message);else{const n=ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function Cg(t,e){try{const r=(await D0()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,O0(t)),await r.done}catch(n){if(n instanceof pr)br.warn(n.message);else{const r=ds.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function O0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xx=1024,Ax=30;class kx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Ax){const o=Nx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rg(),{heartbeatsToSend:r,unsentEntries:s}=Cx(this._heartbeatsCache.heartbeats),i=yu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return br.warn(n),""}}}function Rg(){return new Date().toISOString().substring(0,10)}function Cx(t,e=xx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ng(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mS()?gS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ng(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}function Nx(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Px(t){Xs(new _s("platform-logger",e=>new BS(e),"PRIVATE")),Xs(new _s("heartbeat",e=>new kx(e),"PRIVATE")),rr(md,Ag,t),rr(md,Ag,"esm2020"),rr("fire-js","")}Px("");function V0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bx=V0,M0=new Na("auth","Firebase",V0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new jf("@firebase/auth");function Dx(t,...e){vu.logLevel<=Te.WARN&&vu.warn(`Auth (${ii}): ${t}`,...e)}function Ll(t,...e){vu.logLevel<=Te.ERROR&&vu.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,...e){throw zf(t,...e)}function Hn(t,...e){return zf(t,...e)}function $f(t,e,n){const r={...bx(),[e]:n};return new Na("auth","Firebase",r).create(e,{appName:t.name})}function Hs(t){return $f(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ox(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ur(t,"argument-error"),$f(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M0.create(t,...e)}function oe(t,e,...n){if(!t)throw zf(e,...n)}function Tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function Dr(t,e){t||Tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Vx(){return Pg()==="http:"||Pg()==="https:"}function Pg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vx()||hS()||"connection"in navigator)?navigator.onLine:!0}function Lx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dr(n>e,"Short delay should be less than long delay!"),this.isMobile=lS()||dS()}get(){return Mx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e){Dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fx=new ba(3e4,6e4);function Hf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function so(t,e,n,r,s={}){return j0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return cS()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ro(t.emulatorConfig.host)&&(c.credentials="include"),L0.fetch()(await U0(t,t.config.apiHost,n,l),c)})}async function j0(t,e,n){t._canInitEmulator=!1;const r={...jx,...e};try{const s=new zx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $f(t,f,c);ur(t,f)}}catch(s){if(s instanceof pr)throw s;ur(t,"network-request-failed",{message:String(s)})}}async function $x(t,e,n,r,s={}){const i=await so(t,e,n,r,s);return"mfaPendingCredential"in i&&ur(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function U0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Bf(t.config,s):`${t.config.apiScheme}://${s}`;return Ux.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class zx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),Fx.get())})}}function pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Hn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bx(t,e){return so(t,"POST","/v1/accounts:delete",e)}async function wu(t,e){return so(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hx(t,e=!1){const n=tn(t),r=await n.getIdToken(e),s=qf(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wo(uh(s.auth_time)),issuedAtTime:Wo(uh(s.iat)),expirationTime:Wo(uh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uh(t){return Number(t)*1e3}function qf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const s=S0(n);return s?JSON.parse(s):(Ll("Failed to decode base64 JWT payload"),null)}catch(s){return Ll("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bg(t){const e=qf(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pr&&qx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await ga(t,wu(e,{idToken:n}));oe(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?F0(s.providerUserInfo):[],o=Kx(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function Wx(t){const e=tn(t);await Eu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function F0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(t,e){const n=await j0(t,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await U0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ro(t.emulatorConfig.host)&&(u.credentials="include"),L0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jx(t,e){return so(t,"POST","/v2/accounts:revokeToken",Hf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=bg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mi;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mi,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Gx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ga(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hx(this,e)}reload(){return Wx(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Eu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Hs(this.auth));const e=await this.getIdToken();return await ga(this,Bx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:k,providerData:N,stsTokenManager:P}=n;oe(p&&P,e,"internal-error");const V=Mi.fromJSON(this.name,P);oe(typeof p=="string",e,"internal-error"),qr(r,e.name),qr(s,e.name),oe(typeof v=="boolean",e,"internal-error"),oe(typeof k=="boolean",e,"internal-error"),qr(i,e.name),qr(o,e.name),qr(l,e.name),qr(u,e.name),qr(c,e.name),qr(f,e.name);const S=new Un({uid:p,auth:e,email:s,emailVerified:v,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:f});return N&&Array.isArray(N)&&(S.providerData=N.map(I=>({...I}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mi;s.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Eu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?F0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Mi;l.updateFromIdToken(r);const u=new Un({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new Map;function Ir(t){Dr(t instanceof Function,"Expected a class definition");let e=Dg.get(t);return e?(Dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dg.set(t,e),e)}/**
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
 */class $0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$0.type="NONE";const Og=$0;/**
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
 */function jl(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jl(this.userKey,s.apiKey,i),this.fullPersistenceKey=jl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wu(this.auth,{idToken:e}).catch(()=>{});return n?Un._fromGetAccountInfoResponse(this.auth,n,e):null}return Un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(Ir(Og),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ir(Og);const o=jl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const v=await wu(e,{idToken:f}).catch(()=>{});if(!v)break;p=await Un._fromGetAccountInfoResponse(e,v,f)}else p=Un._fromJSON(e,f);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Li(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Li(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W0(e))return"Blackberry";if(K0(e))return"Webos";if(B0(e))return"Safari";if((e.includes("chrome/")||H0(e))&&!e.includes("edge/"))return"Chrome";if(G0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z0(t=Xt()){return/firefox\//i.test(t)}function B0(t=Xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H0(t=Xt()){return/crios\//i.test(t)}function q0(t=Xt()){return/iemobile/i.test(t)}function G0(t=Xt()){return/android/i.test(t)}function W0(t=Xt()){return/blackberry/i.test(t)}function K0(t=Xt()){return/webos/i.test(t)}function Gf(t=Xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yx(t=Xt()){var e;return Gf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Xx(){return fS()&&document.documentMode===10}function Q0(t=Xt()){return Gf(t)||G0(t)||K0(t)||W0(t)||/windows phone/i.test(t)||q0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t,e=[]){let n;switch(t){case"Browser":n=Vg(Xt());break;case"Worker":n=`${Vg(Xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
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
 */class Zx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eA(t,e={}){return so(t,"GET","/v2/passwordPolicy",Hf(t,e))}/**
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
 */const tA=6;class nA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mg(this),this.idTokenSubscription=new Mg(this),this.beforeStateQueue=new Zx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ir(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wu(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Hs(this));const n=e?tn(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Hs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Hs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eA(this),n=new nA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ir(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[Ir(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Dx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function nc(t){return tn(t)}class Mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ES(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sA(t){Wf=t}function iA(t){return Wf.loadJS(t)}function oA(){return Wf.gapiScript}function aA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e){const n=tc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ys(i,e??{}))return s;ur(s,"already-initialized")}return n.initialize({options:e})}function uA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ir);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cA(t,e,n){const r=nc(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Y0(e),{host:o,port:l}=hA(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Ys(c,r.config.emulator)&&Ys(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ro(o)?Lf(`${i}//${o}${u}`):dA()}function Y0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hA(t){const e=Y0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lg(o)}}}function Lg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,n){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t,e){return $x(t,"POST","/v1/accounts:signInWithIdp",Hf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="http://localhost";class Zs extends X0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ur("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ji(e,n)}buildRequest(){const e={requestUri:fA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Da extends Kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Da{constructor(){super("facebook.com")}static credential(e){return Zs._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zs._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Da{constructor(){super("github.com")}static credential(e){return Zs._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.GITHUB_SIGN_IN_METHOD="github.com";Zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Da{constructor(){super("twitter.com")}static credential(e,n){return Zs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return es.credential(n,r)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Un._fromIdTokenResponse(e,r,s),o=jg(r);return new Qi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=jg(r);return new Qi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends pr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Tu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Tu(e,n,r,s)}}function Z0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(t,i,e,r):i})}async function pA(t,e,n=!1){const r=await ga(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qi._forOperation(t,"link",r)}/**
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
 */async function mA(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Hs(r));const s="reauthenticate";try{const i=await ga(t,Z0(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=qf(i.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),Qi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ur(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e,n=!1){if(Sn(t.app))return Promise.reject(Hs(t));const r="signIn",s=await Z0(t,r,e),i=await Qi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function yA(t,e,n,r){return tn(t).onIdTokenChanged(e,n,r)}function _A(t,e,n){return tn(t).beforeAuthStateChanged(e,n)}function ew(t,e,n,r){return tn(t).onAuthStateChanged(e,n,r)}function vA(t){return tn(t).signOut()}const Iu="__sak";/**
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
 */class tw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Iu,"1"),this.storage.removeItem(Iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=1e3,EA=10;class nw extends tw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nw.type="LOCAL";const TA=nw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function IA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await IA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Qf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===c)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function xA(t){sr().location.href=t}/**
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
 */function iw(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function AA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function CA(){return iw()?self:null}/**
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
 */const ow="firebaseLocalStorageDb",RA=1,Su="firebaseLocalStorage",aw="fbase_key";class Oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Su],e?"readwrite":"readonly").objectStore(Su)}function NA(){const t=indexedDB.deleteDatabase(ow);return new Oa(t).toPromise()}function wd(){const t=indexedDB.open(ow,RA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Su,{keyPath:aw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Su)?e(r):(r.close(),await NA(),e(await wd()))})})}async function Ug(t,e,n){const r=sc(t,!0).put({[aw]:e,value:n});return new Oa(r).toPromise()}async function PA(t,e){const n=sc(t,!1).get(e),r=await new Oa(n).toPromise();return r===void 0?null:r.value}function Fg(t,e){const n=sc(t,!0).delete(e);return new Oa(n).toPromise()}const bA=800,DA=3;class lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(CA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await AA(),!this.activeServiceWorker)return;this.sender=new SA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await Ug(e,Iu,"1"),await Fg(e,Iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ug(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sc(s,!1).getAll();return new Oa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lw.type="LOCAL";const OA=lw;new ba(3e4,6e4);/**
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
 */function uw(t,e){return e?Ir(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jf extends X0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VA(t){return gA(t.auth,new Jf(t),t.bypassAuthState)}function MA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),mA(n,new Jf(t),t.bypassAuthState)}async function LA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),pA(n,new Jf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VA;case"linkViaPopup":case"linkViaRedirect":return LA;case"reauthViaPopup":case"reauthViaRedirect":return MA;default:ur(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=new ba(2e3,1e4);async function UA(t,e,n){if(Sn(t.app))return Promise.reject(Hn(t,"operation-not-supported-in-this-environment"));const r=nc(t);Ox(t,e,Kf);const s=uw(r,n);return new Fs(r,"signInViaPopup",e,s).executeNotNull()}class Fs extends cw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jA.get())};e()}}Fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="pendingRedirect",Ul=new Map;class $A extends cw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await zA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zA(t,e){const n=qA(e),r=HA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function BA(t,e){Ul.set(t._key(),e)}function HA(t){return Ir(t._redirectPersistence)}function qA(t){return jl(FA,t.config.apiKey,t.name)}async function GA(t,e,n=!1){if(Sn(t.app))return Promise.reject(Hs(t));const r=nc(t),s=uw(r,e),o=await new $A(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=10*60*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WA&&this.cachedEventUids.clear(),this.cachedEventUids.has($g(e))}saveEventToCache(e){this.cachedEventUids.add($g(e)),this.lastProcessedEventTime=Date.now()}}function $g(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e={}){return so(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XA=/^https?/;async function ZA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JA(t);for(const n of e)try{if(ek(n))return}catch{}ur(t,"unauthorized-domain")}function ek(t){const e=_d(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XA.test(n))return!1;if(YA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tk=new ba(3e4,6e4);function zg(){const t=sr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nk(t){return new Promise((e,n)=>{var s,i,o;function r(){zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zg(),n(Hn(t,"network-request-failed"))},timeout:tk.get()})}if((i=(s=sr().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=sr().gapi)!=null&&o.load)r();else{const l=aA("iframefcb");return sr()[l]=()=>{gapi.load?r():n(Hn(t,"network-request-failed"))},iA(`${oA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Fl=null,e})}let Fl=null;function rk(t){return Fl=Fl||nk(t),Fl}/**
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
 */const sk=new ba(5e3,15e3),ik="__/auth/iframe",ok="emulator/auth/iframe",ak={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uk(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bf(e,ok):`https://${t.config.authDomain}/${ik}`,r={apiKey:e.apiKey,appName:t.name,v:ii},s=lk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pa(r).slice(1)}`}async function ck(t){const e=await rk(t),n=sr().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:uk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ak,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),l=sr().setTimeout(()=>{i(o)},sk.get());function u(){sr().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dk=500,fk=600,pk="_blank",mk="http://localhost";class Bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gk(t,e,n,r=dk,s=fk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...hk,width:r.toString(),height:s.toString(),top:i,left:o},c=Xt().toLowerCase();n&&(l=H0(c)?pk:n),z0(c)&&(e=e||mk,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[k,N])=>`${v}${k}=${N},`,"");if(Yx(c)&&l!=="_self")return yk(e||"",l),new Bg(null);const p=window.open(e||"",l,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new Bg(p)}function yk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _k="__/auth/handler",vk="emulator/auth/handler",wk=encodeURIComponent("fac");async function Hg(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:s};if(e instanceof Kf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Da){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${wk}=${encodeURIComponent(u)}`:"";return`${Ek(t)}?${Pa(l).slice(1)}${c}`}function Ek({config:t}){return t.emulator?Bf(t,vk):`https://${t.authDomain}/${_k}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="webStorageSupport";class Tk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sw,this._completeRedirectFn=GA,this._overrideRedirectResult=BA}async _openPopup(e,n,r,s){var o;Dr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Hg(e,n,r,_d(),s);return gk(e,i,Qf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hg(e,n,r,_d(),s);return xA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ck(e),r=new KA(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ch,{type:ch},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ch];i!==void 0&&n(!!i),ur(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q0()||B0()||Gf()}}const Ik=Tk;var qg="@firebase/auth",Gg="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ak(t){Xs(new _s("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J0(t)},c=new rA(r,s,i,u);return uA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xs(new _s("auth-internal",e=>{const n=nc(e.getProvider("auth").getImmediate());return(r=>new Sk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(qg,Gg,xk(t)),rr(qg,Gg,"esm2020")}/**
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
 */const kk=5*60,Ck=C0("authIdTokenMaxAge")||kk;let Wg=null;const Rk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ck)return;const s=n==null?void 0:n.token;Wg!==s&&(Wg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dw(t=Ff()){const e=tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lA(t,{popupRedirectResolver:Ik,persistence:[OA,TA,sw]}),r=C0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Rk(i.toString());_A(n,o,()=>o(n.currentUser)),yA(n,l=>o(l))}}const s=x0("auth");return s&&cA(n,`http://${s}`),n}function Nk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}sA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Nk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ak("Browser");var Pk="firebase",bk="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(Pk,bk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="firebasestorage.googleapis.com",Dk="storageBucket",Ok=2*60*1e3,Vk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends pr{constructor(e,n,r=0){super(hh(e),`Firebase Storage: ${n} (${hh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var cr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(cr||(cr={}));function hh(t){return"storage/"+t}function Mk(){const t="An unknown error occurred, please check the error payload for server response.";return new mr(cr.UNKNOWN,t)}function Lk(){return new mr(cr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jk(){return new mr(cr.CANCELED,"User canceled the upload/download.")}function Uk(t){return new mr(cr.INVALID_URL,"Invalid URL '"+t+"'.")}function Fk(t){return new mr(cr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Kg(t){return new mr(cr.INVALID_ARGUMENT,t)}function pw(){return new mr(cr.APP_DELETED,"The Firebase app was deleted.")}function $k(t){return new mr(cr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Fn.makeFromUrl(e,n)}catch{return new Fn(e,"")}if(r.path==="")return r;throw Fk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",k=new RegExp(`^https?://${p}/${f}/b/${s}/o${v}`,"i"),N={bucket:1,path:3},P=n===fw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",S=new RegExp(`^https?://${P}/${s}/${V}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:k,indices:N,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<A.length;D++){const L=A[D],F=L.regex.exec(e);if(F){const g=F[L.indices.bucket];let y=F[L.indices.path];y||(y=""),r=new Fn(g,y),L.postModify(r);break}}if(r==null)throw Uk(e);return r}}class zk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...V){c||(c=!0,e.apply(null,V))}function p(V){s=setTimeout(()=>{s=null,t(k,u())},V)}function v(){i&&clearTimeout(i)}function k(V,...S){if(c){v();return}if(V){v(),f.call(null,V,...S);return}if(u()||o){v(),f.call(null,V,...S);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,p(A)}let N=!1;function P(V){N||(N=!0,v(),!c&&(s!==null?(V||(l=2),clearTimeout(s),p(0)):V||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function Hk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t){return t!==void 0}function Qg(t,e,n,r){if(r<e)throw Kg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Kg(`Invalid value for '${t}'. Expected ${n} or less.`)}function Gk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var xu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xu||(xu={}));/**
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
 */function Wk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,s,i,o,l,u,c,f,p,v=!0,k=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=v,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,P)=>{this.resolve_=N,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ml(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===xu.NO_ERROR,u=i.getStatus();if(!l||Wk(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===xu.ABORT;r(!1,new ml(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ml(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());qk(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Mk();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?pw():jk();o(u)}else{const u=Lk();o(u)}};this.canceled_?n(!1,new ml(!1,null,!0)):this.backoffId_=Bk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Hk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ml{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Qk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Jk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Yk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Xk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Zk(t,e,n,r,s,i,o=!0,l=!1){const u=Gk(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return Yk(f,e),Qk(f,n),Jk(f,i),Xk(f,r),new Kk(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Au{constructor(e,n){this._service=e,n instanceof Fn?this._location=n:this._location=Fn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Au(e,n)}get root(){const e=new Fn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tC(this._location.path)}get storage(){return this._service}get parent(){const e=eC(this._location.path);if(e===null)return null;const n=new Fn(this._location.bucket,e);return new Au(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $k(e)}}function Jg(t,e){const n=e==null?void 0:e[Dk];return n==null?null:Fn.makeFromBucketSpec(n,t)}function nC(t,e,n,r={}){t.host=`${e}:${n}`;const s=ro(e);s&&Lf(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:R0(i,t.app.options.projectId))}class rC{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=fw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ok,this._maxUploadRetryTime=Vk,this._requests=new Set,s!=null?this._bucket=Fn.makeFromBucketSpec(s,this._host):this._bucket=Jg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fn.makeFromBucketSpec(this._url,e):this._bucket=Jg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Au(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new zk(pw());{const o=Zk(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Yg="@firebase/storage",Xg="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="storage";function sC(t=Ff(),e){t=tn(t);const r=tc(t,mw).getImmediate({identifier:e}),s=A0("storage");return s&&iC(r,...s),r}function iC(t,e,n,r={}){nC(t,e,n,r)}function oC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new rC(n,r,s,e,ii)}function aC(){Xs(new _s(mw,oC,"PUBLIC").setMultipleInstances(!0)),rr(Yg,Xg,""),rr(Yg,Xg,"esm2020")}aC();var Zg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fs,gw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function w(){}w.prototype=y.prototype,g.F=y.prototype,g.prototype=new w,g.prototype.constructor=g,g.D=function(E,x,C){for(var T=Array(arguments.length-2),te=2;te<arguments.length;te++)T[te-2]=arguments[te];return y.prototype[x].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(g,y,w){w||(w=0);const E=Array(16);if(typeof y=="string")for(var x=0;x<16;++x)E[x]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(x=0;x<16;++x)E[x]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=g.g[0],w=g.g[1],x=g.g[2];let C=g.g[3],T;T=y+(C^w&(x^C))+E[0]+3614090360&4294967295,y=w+(T<<7&4294967295|T>>>25),T=C+(x^y&(w^x))+E[1]+3905402710&4294967295,C=y+(T<<12&4294967295|T>>>20),T=x+(w^C&(y^w))+E[2]+606105819&4294967295,x=C+(T<<17&4294967295|T>>>15),T=w+(y^x&(C^y))+E[3]+3250441966&4294967295,w=x+(T<<22&4294967295|T>>>10),T=y+(C^w&(x^C))+E[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=C+(x^y&(w^x))+E[5]+1200080426&4294967295,C=y+(T<<12&4294967295|T>>>20),T=x+(w^C&(y^w))+E[6]+2821735955&4294967295,x=C+(T<<17&4294967295|T>>>15),T=w+(y^x&(C^y))+E[7]+4249261313&4294967295,w=x+(T<<22&4294967295|T>>>10),T=y+(C^w&(x^C))+E[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=C+(x^y&(w^x))+E[9]+2336552879&4294967295,C=y+(T<<12&4294967295|T>>>20),T=x+(w^C&(y^w))+E[10]+4294925233&4294967295,x=C+(T<<17&4294967295|T>>>15),T=w+(y^x&(C^y))+E[11]+2304563134&4294967295,w=x+(T<<22&4294967295|T>>>10),T=y+(C^w&(x^C))+E[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=C+(x^y&(w^x))+E[13]+4254626195&4294967295,C=y+(T<<12&4294967295|T>>>20),T=x+(w^C&(y^w))+E[14]+2792965006&4294967295,x=C+(T<<17&4294967295|T>>>15),T=w+(y^x&(C^y))+E[15]+1236535329&4294967295,w=x+(T<<22&4294967295|T>>>10),T=y+(x^C&(w^x))+E[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=C+(w^x&(y^w))+E[6]+3225465664&4294967295,C=y+(T<<9&4294967295|T>>>23),T=x+(y^w&(C^y))+E[11]+643717713&4294967295,x=C+(T<<14&4294967295|T>>>18),T=w+(C^y&(x^C))+E[0]+3921069994&4294967295,w=x+(T<<20&4294967295|T>>>12),T=y+(x^C&(w^x))+E[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=C+(w^x&(y^w))+E[10]+38016083&4294967295,C=y+(T<<9&4294967295|T>>>23),T=x+(y^w&(C^y))+E[15]+3634488961&4294967295,x=C+(T<<14&4294967295|T>>>18),T=w+(C^y&(x^C))+E[4]+3889429448&4294967295,w=x+(T<<20&4294967295|T>>>12),T=y+(x^C&(w^x))+E[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=C+(w^x&(y^w))+E[14]+3275163606&4294967295,C=y+(T<<9&4294967295|T>>>23),T=x+(y^w&(C^y))+E[3]+4107603335&4294967295,x=C+(T<<14&4294967295|T>>>18),T=w+(C^y&(x^C))+E[8]+1163531501&4294967295,w=x+(T<<20&4294967295|T>>>12),T=y+(x^C&(w^x))+E[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=C+(w^x&(y^w))+E[2]+4243563512&4294967295,C=y+(T<<9&4294967295|T>>>23),T=x+(y^w&(C^y))+E[7]+1735328473&4294967295,x=C+(T<<14&4294967295|T>>>18),T=w+(C^y&(x^C))+E[12]+2368359562&4294967295,w=x+(T<<20&4294967295|T>>>12),T=y+(w^x^C)+E[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=C+(y^w^x)+E[8]+2272392833&4294967295,C=y+(T<<11&4294967295|T>>>21),T=x+(C^y^w)+E[11]+1839030562&4294967295,x=C+(T<<16&4294967295|T>>>16),T=w+(x^C^y)+E[14]+4259657740&4294967295,w=x+(T<<23&4294967295|T>>>9),T=y+(w^x^C)+E[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=C+(y^w^x)+E[4]+1272893353&4294967295,C=y+(T<<11&4294967295|T>>>21),T=x+(C^y^w)+E[7]+4139469664&4294967295,x=C+(T<<16&4294967295|T>>>16),T=w+(x^C^y)+E[10]+3200236656&4294967295,w=x+(T<<23&4294967295|T>>>9),T=y+(w^x^C)+E[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=C+(y^w^x)+E[0]+3936430074&4294967295,C=y+(T<<11&4294967295|T>>>21),T=x+(C^y^w)+E[3]+3572445317&4294967295,x=C+(T<<16&4294967295|T>>>16),T=w+(x^C^y)+E[6]+76029189&4294967295,w=x+(T<<23&4294967295|T>>>9),T=y+(w^x^C)+E[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=C+(y^w^x)+E[12]+3873151461&4294967295,C=y+(T<<11&4294967295|T>>>21),T=x+(C^y^w)+E[15]+530742520&4294967295,x=C+(T<<16&4294967295|T>>>16),T=w+(x^C^y)+E[2]+3299628645&4294967295,w=x+(T<<23&4294967295|T>>>9),T=y+(x^(w|~C))+E[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=C+(w^(y|~x))+E[7]+1126891415&4294967295,C=y+(T<<10&4294967295|T>>>22),T=x+(y^(C|~w))+E[14]+2878612391&4294967295,x=C+(T<<15&4294967295|T>>>17),T=w+(C^(x|~y))+E[5]+4237533241&4294967295,w=x+(T<<21&4294967295|T>>>11),T=y+(x^(w|~C))+E[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=C+(w^(y|~x))+E[3]+2399980690&4294967295,C=y+(T<<10&4294967295|T>>>22),T=x+(y^(C|~w))+E[10]+4293915773&4294967295,x=C+(T<<15&4294967295|T>>>17),T=w+(C^(x|~y))+E[1]+2240044497&4294967295,w=x+(T<<21&4294967295|T>>>11),T=y+(x^(w|~C))+E[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=C+(w^(y|~x))+E[15]+4264355552&4294967295,C=y+(T<<10&4294967295|T>>>22),T=x+(y^(C|~w))+E[6]+2734768916&4294967295,x=C+(T<<15&4294967295|T>>>17),T=w+(C^(x|~y))+E[13]+1309151649&4294967295,w=x+(T<<21&4294967295|T>>>11),T=y+(x^(w|~C))+E[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=C+(w^(y|~x))+E[11]+3174756917&4294967295,C=y+(T<<10&4294967295|T>>>22),T=x+(y^(C|~w))+E[2]+718787259&4294967295,x=C+(T<<15&4294967295|T>>>17),T=w+(C^(x|~y))+E[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(x+(T<<21&4294967295|T>>>11))&4294967295,g.g[2]=g.g[2]+x&4294967295,g.g[3]=g.g[3]+C&4294967295}r.prototype.v=function(g,y){y===void 0&&(y=g.length);const w=y-this.blockSize,E=this.C;let x=this.h,C=0;for(;C<y;){if(x==0)for(;C<=w;)s(this,g,C),C+=this.blockSize;if(typeof g=="string"){for(;C<y;)if(E[x++]=g.charCodeAt(C++),x==this.blockSize){s(this,E),x=0;break}}else for(;C<y;)if(E[x++]=g[C++],x==this.blockSize){s(this,E),x=0;break}}this.h=x,this.o+=y},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;y=this.o*8;for(var w=g.length-8;w<g.length;++w)g[w]=y&255,y/=256;for(this.v(g),g=Array(16),y=0,w=0;w<4;++w)for(let E=0;E<32;E+=8)g[y++]=this.g[w]>>>E&255;return g};function i(g,y){var w=l;return Object.prototype.hasOwnProperty.call(w,g)?w[g]:w[g]=y(g)}function o(g,y){this.h=y;const w=[];let E=!0;for(let x=g.length-1;x>=0;x--){const C=g[x]|0;E&&C==y||(w[x]=C,E=!1)}this.g=w}var l={};function u(g){return-128<=g&&g<128?i(g,function(y){return new o([y|0],y<0?-1:0)}):new o([g|0],g<0?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return p;if(g<0)return V(c(-g));const y=[];let w=1;for(let E=0;g>=w;E++)y[E]=g/w|0,w*=4294967296;return new o(y,0)}function f(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return V(f(g.substring(1),y));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=c(Math.pow(y,8));let E=p;for(let C=0;C<g.length;C+=8){var x=Math.min(8,g.length-C);const T=parseInt(g.substring(C,C+x),y);x<8?(x=c(Math.pow(y,x)),E=E.j(x).add(c(T))):(E=E.j(w),E=E.add(c(T)))}return E}var p=u(0),v=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-V(this).m();let g=0,y=1;for(let w=0;w<this.g.length;w++){const E=this.i(w);g+=(E>=0?E:4294967296+E)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(N(this))return"0";if(P(this))return"-"+V(this).toString(g);const y=c(Math.pow(g,6));var w=this;let E="";for(;;){const x=D(w,y).g;w=S(w,x.j(y));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(g);if(w=x,N(w))return C+E;for(;C.length<6;)C="0"+C;E=C+E}},t.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function N(g){if(g.h!=0)return!1;for(let y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function P(g){return g.h==-1}t.l=function(g){return g=S(this,g),P(g)?-1:N(g)?0:1};function V(g){const y=g.g.length,w=[];for(let E=0;E<y;E++)w[E]=~g.g[E];return new o(w,~g.h).add(v)}t.abs=function(){return P(this)?V(this):this},t.add=function(g){const y=Math.max(this.g.length,g.g.length),w=[];let E=0;for(let x=0;x<=y;x++){let C=E+(this.i(x)&65535)+(g.i(x)&65535),T=(C>>>16)+(this.i(x)>>>16)+(g.i(x)>>>16);E=T>>>16,C&=65535,T&=65535,w[x]=T<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(g,y){return g.add(V(y))}t.j=function(g){if(N(this)||N(g))return p;if(P(this))return P(g)?V(this).j(V(g)):V(V(this).j(g));if(P(g))return V(this.j(V(g)));if(this.l(k)<0&&g.l(k)<0)return c(this.m()*g.m());const y=this.g.length+g.g.length,w=[];for(var E=0;E<2*y;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(let x=0;x<g.g.length;x++){const C=this.i(E)>>>16,T=this.i(E)&65535,te=g.i(x)>>>16,ye=g.i(x)&65535;w[2*E+2*x]+=T*ye,I(w,2*E+2*x),w[2*E+2*x+1]+=C*ye,I(w,2*E+2*x+1),w[2*E+2*x+1]+=T*te,I(w,2*E+2*x+1),w[2*E+2*x+2]+=C*te,I(w,2*E+2*x+2)}for(g=0;g<y;g++)w[g]=w[2*g+1]<<16|w[2*g];for(g=y;g<2*y;g++)w[g]=0;return new o(w,0)};function I(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function A(g,y){this.g=g,this.h=y}function D(g,y){if(N(y))throw Error("division by zero");if(N(g))return new A(p,p);if(P(g))return y=D(V(g),y),new A(V(y.g),V(y.h));if(P(y))return y=D(g,V(y)),new A(V(y.g),y.h);if(g.g.length>30){if(P(g)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var w=v,E=y;E.l(g)<=0;)w=L(w),E=L(E);var x=F(w,1),C=F(E,1);for(E=F(E,2),w=F(w,2);!N(E);){var T=C.add(E);T.l(g)<=0&&(x=x.add(w),C=T),E=F(E,1),w=F(w,1)}return y=S(g,x.j(y)),new A(x,y)}for(x=p;g.l(y)>=0;){for(w=Math.max(1,Math.floor(g.m()/y.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),C=c(w),T=C.j(y);P(T)||T.l(g)>0;)w-=E,C=c(w),T=C.j(y);N(C)&&(C=v),x=x.add(C),g=S(g,T)}return new A(x,g)}t.B=function(g){return D(this,g).h},t.and=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)&g.i(E);return new o(w,this.h&g.h)},t.or=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)|g.i(E);return new o(w,this.h|g.h)},t.xor=function(g){const y=Math.max(this.g.length,g.g.length),w=[];for(let E=0;E<y;E++)w[E]=this.i(E)^g.i(E);return new o(w,this.h^g.h)};function L(g){const y=g.g.length+1,w=[];for(let E=0;E<y;E++)w[E]=g.i(E)<<1|g.i(E-1)>>>31;return new o(w,g.h)}function F(g,y){const w=y>>5;y%=32;const E=g.g.length-w,x=[];for(let C=0;C<E;C++)x[C]=y>0?g.i(C+w)>>>y|g.i(C+w+1)<<32-y:g.i(C+w);return new o(x,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,gw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,fs=o}).apply(typeof Zg<"u"?Zg:typeof self<"u"?self:typeof window<"u"?window:{});var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yw,Oo,_w,$l,Ed,vw,ww,Ew;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof gl=="object"&&gl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var R=a[_];if(!(R in d))break e;d=d[R]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,R,b){for(var H=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)H[ge-2]=arguments[ge];return h.prototype[R].apply(_,H)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function N(a,h){for(let _=1;_<arguments.length;_++){const R=arguments[_];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const b=R.length||0;a.length=d+b;for(let H=0;H<b;H++)a[d+H]=R[H]}else a.push(R)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function S(){var a=g;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class I{constructor(){this.h=this.g=null}add(h,d){const _=A.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var A=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,F=!1,g=new I,y=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(w)}};function w(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){V(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function te(a,h){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(te,x),te.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ye="closure_listenable_"+(Math.random()*1e6|0),wt=0;function pe(a,h,d,_,R){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=R,this.key=++wt,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function X(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function z(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function ce(a){const h={};for(const d in a)h[d]=a[d];return h}const _e="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function We(a,h){let d,_;for(let R=1;R<arguments.length;R++){_=arguments[R];for(d in _)a[d]=_[d];for(let b=0;b<_e.length;b++)d=_e[b],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function at(a){this.src=a,this.g={},this.h=0}at.prototype.add=function(a,h,d,_,R){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const H=ft(a,h,_,R);return H>-1?(h=a[H],d||(h.fa=!1)):(h=new pe(h,this.src,b,!!_,R),h.fa=d,a.push(h)),h};function dt(a,h){const d=h.type;if(d in a.g){var _=a.g[d],R=Array.prototype.indexOf.call(_,h,void 0),b;(b=R>=0)&&Array.prototype.splice.call(_,R,1),b&&(B(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ft(a,h,d,_){for(let R=0;R<a.length;++R){const b=a[R];if(!b.da&&b.listener==h&&b.capture==!!d&&b.ha==_)return R}return-1}var lt="closure_lm_"+(Math.random()*1e6|0),zt={};function Ct(a,h,d,_,R){if(Array.isArray(h)){for(let b=0;b<h.length;b++)Ct(a,h[b],d,_,R);return null}return d=G(d),a&&a[ye]?a.J(h,d,l(_)?!!_.capture:!1,R):me(a,h,d,!1,_,R)}function me(a,h,d,_,R,b){if(!h)throw Error("Invalid event type");const H=l(R)?!!R.capture:!!R;let ge=$(a);if(ge||(a[lt]=ge=new at(a)),d=ge.add(h,d,_,H,b),d.proxy)return d;if(_=ke(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)C||(R=H),R===void 0&&(R=!1),a.addEventListener(h.toString(),_,R);else if(a.attachEvent)a.attachEvent(on(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ke(){function a(d){return h.call(a.src,a.listener,d)}const h=O;return a}function nt(a,h,d,_,R){if(Array.isArray(h))for(var b=0;b<h.length;b++)nt(a,h[b],d,_,R);else _=l(_)?!!_.capture:!!_,d=G(d),a&&a[ye]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],d=ft(h,d,_,R),d>-1&&(B(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=$(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ft(h,d,_,R)),(d=a>-1?h[a]:null)&&sn(d))}function sn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ye])dt(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(on(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=$(h))?(dt(d,a),d.h==0&&(d.src=null,h[lt]=null)):B(a)}}}function on(a){return a in zt?zt[a]:zt[a]="on"+a}function O(a,h){if(a.da)a=!0;else{h=new te(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&sn(a),a=d.call(_,h)}return a}function $(a){return a=a[lt],a instanceof at?a:null}var q="__closure_events_fn_"+(Math.random()*1e9>>>0);function G(a){return typeof a=="function"?a:(a[q]||(a[q]=function(h){return a.handleEvent(h)}),a[q])}function Q(){E.call(this),this.i=new at(this),this.M=this,this.G=null}p(Q,E),Q.prototype[ye]=!0,Q.prototype.removeEventListener=function(a,h,d,_){nt(this,a,h,d,_)};function J(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var R=h;h=new x(_,a),We(h,R)}R=!0;let b,H;if(d)for(H=d.length-1;H>=0;H--)b=h.g=d[H],R=ee(b,_,!0,h)&&R;if(b=h.g=a,R=ee(b,_,!0,h)&&R,R=ee(b,_,!1,h)&&R,d)for(H=0;H<d.length;H++)b=h.g=d[H],R=ee(b,_,!1,h)&&R}Q.prototype.N=function(){if(Q.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)B(d[_]);delete a.g[h],a.h--}}this.G=null},Q.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},Q.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function ee(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let b=0;b<h.length;++b){const H=h[b];if(H&&!H.da&&H.capture==d){const ge=H.listener,It=H.ha||H.src;H.fa&&dt(a.i,H),R=ge.call(It,_)!==!1&&R}}return R&&!_.defaultPrevented}function le(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Ue(a){a.g=le(()=>{a.g=null,a.i&&(a.i=!1,Ue(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Je extends E{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(a){E.call(this),this.h=a,this.g={}}p(De,E);var pt=[];function rt(a){X(a.g,function(h,d){this.g.hasOwnProperty(d)&&sn(h)},a),a.g={}}De.prototype.N=function(){De.Z.N.call(this),rt(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ye=o.JSON.stringify,Lr=o.JSON.parse,Dt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Pn(){}function ci(){}var jr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Rs(){x.call(this,"d")}p(Rs,x);function uo(){x.call(this,"c")}p(uo,x);var ae={},Oe=null;function ne(){return Oe=Oe||new Q}ae.Ia="serverreachability";function Le(a){x.call(this,ae.Ia,a)}p(Le,x);function he(a){const h=ne();J(h,new Le(h))}ae.STAT_EVENT="statevent";function Et(a,h){x.call(this,ae.STAT_EVENT,a),this.stat=h}p(Et,x);function Z(a){const h=ne();J(h,new Et(h,a))}ae.Ja="timingevent";function st(a,h){x.call(this,ae.Ja,a),this.size=h}p(st,x);function Re(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ie(){this.g=!0}Ie.prototype.ua=function(){this.g=!1};function Ne(a,h,d,_,R,b){a.info(function(){if(a.g)if(b){var H="",ge=b.split("&");for(let Ve=0;Ve<ge.length;Ve++){var It=ge[Ve].split("=");if(It.length>1){const Rt=It[0];It=It[1];const Jn=Rt.split("_");H=Jn.length>=2&&Jn[1]=="type"?H+(Rt+"="+It+"&"):H+(Rt+"=redacted&")}}}else H=null;else H=b;return"XMLHTTP REQ ("+_+") [attempt "+R+"]: "+h+`
`+d+`
`+H})}function Ae(a,h,d,_,R,b,H){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+R+"]: "+h+`
`+d+`
`+b+" "+H})}function Pe(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Fe(a,d)+(_?" "+_:"")})}function mt(a,h){a.info(function(){return"TIMEOUT: "+h})}Ie.prototype.info=function(){};function Fe(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var d=b[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var R=_[0];if(R!="noop"&&R!="stop"&&R!="close")for(let H=1;H<_.length;H++)_[H]=""}}}}return Ye(b)}catch{return h}}var Ot={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tt;function pn(){}p(pn,Pn),pn.prototype.g=function(){return new XMLHttpRequest},Tt=new pn;function bn(a){return encodeURIComponent(String(a))}function Bt(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Xe(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new De(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Rp}function Rp(){this.i=null,this.g="",this.h=!1}var Np={},vc={};function wc(a,h,d){a.M=1,a.A=Ba(Qn(h)),a.u=d,a.R=!0,Pp(a,null)}function Pp(a,h){a.F=Date.now(),za(a),a.B=Qn(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),Hp(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Rp,a.g=lm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Je(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(pt[0]=R.toString()),R=pt);for(let b=0;b<R.length;b++){const H=Ct(d,R[b],_||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.J?ce(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),he(),Ne(a.i,a.v,a.B,a.l,a.S,a.u)}Xe.prototype.ba=function(a){a=a.target;const h=this.O;h&&$r(a)==3?h.j():this.Y(a)},Xe.prototype.Y=function(a){try{if(a==this.g)e:{const ge=$r(this.g),It=this.g.ya(),Ve=this.g.ca();if(!(ge<3)&&(ge!=3||this.g&&(this.h.h||this.g.la()||Yp(this.g)))){this.K||ge!=4||It==7||(It==8||Ve<=0?he(3):he(2)),Ec(this);var h=this.g.ca();this.X=h;var d=u1(this);if(this.o=h==200,Ae(this.i,this.v,this.B,this.l,this.S,ge,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,R=this.g;if((_=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(_)){var b=_;break t}}b=null}if(a=b)Pe(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Tc(this,a);else{this.o=!1,this.m=3,Z(12),Ns(this),co(this);break e}}if(this.R){a=!0;let Rt;for(;!this.K&&this.C<d.length;)if(Rt=c1(this,d),Rt==vc){ge==4&&(this.m=4,Z(14),a=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Np){this.m=4,Z(15),Pe(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Pe(this.i,this.l,Rt,null),Tc(this,Rt);if(bp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||d.length!=0||this.h.h||(this.m=1,Z(16),a=!1),this.o=this.o&&a,!a)Pe(this.i,this.l,d,"[Invalid Chunked Response]"),Ns(this),co(this);else if(d.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Nc(H),H.P=!0,Z(11))}}else Pe(this.i,this.l,d,null),Tc(this,d);ge==4&&Ns(this),this.o&&!this.K&&(ge==4?sm(this.j,this):(this.o=!1,za(this)))}else S1(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Z(12)):(this.m=0,Z(13)),Ns(this),co(this)}}}catch{}finally{}};function u1(a){if(!bp(a))return a.g.la();const h=Yp(a.g);if(h==="")return"";let d="";const _=h.length,R=$r(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ns(a),co(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<_;b++)a.h.h=!0,d+=a.h.i.decode(h[b],{stream:!(R&&b==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function bp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function c1(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?vc:(d=Number(h.substring(d,_)),isNaN(d)?Np:(_+=1,_+d>h.length?vc:(h=h.slice(_,_+d),a.C=_+d,h)))}Xe.prototype.cancel=function(){this.K=!0,Ns(this)};function za(a){a.T=Date.now()+a.H,Dp(a,a.H)}function Dp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Re(c(a.aa,a),h)}function Ec(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Xe.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(mt(this.i,this.B),this.M!=2&&(he(),Z(17)),Ns(this),this.m=2,co(this)):Dp(this,this.T-a)};function co(a){a.j.I==0||a.K||sm(a.j,a)}function Ns(a){Ec(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,rt(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Tc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Ic(d.h,a))){if(!a.L&&Ic(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var R=_;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ka(d),Ga(d);else break e;Rc(d),Z(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Re(c(d.Va,d),6e3));Mp(d.h)<=1&&d.ta&&(d.ta=void 0)}else bs(d,11)}else if((a.L||d.g==a)&&Ka(d),!T(h))for(R=d.Ba.g.parse(h),h=0;h<R.length;h++){let Ve=R[h];const Rt=Ve[0];if(!(Rt<=d.K))if(d.K=Rt,Ve=Ve[1],d.I==2)if(Ve[0]=="c"){d.M=Ve[1],d.ba=Ve[2];const Jn=Ve[3];Jn!=null&&(d.ka=Jn,d.j.info("VER="+d.ka));const Ds=Ve[4];Ds!=null&&(d.za=Ds,d.j.info("SVER="+d.za));const zr=Ve[5];zr!=null&&typeof zr=="number"&&zr>0&&(_=1.5*zr,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Br=a.g;if(Br){const Ja=Br.g?Br.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ja){var b=_.h;b.g||Ja.indexOf("spdy")==-1&&Ja.indexOf("quic")==-1&&Ja.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Sc(b,b.h),b.h=null))}if(_.G){const Pc=Br.g?Br.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(_.wa=Pc,$e(_.J,_.G,Pc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var H=a;if(_.na=am(_,_.L?_.ba:null,_.W),H.L){Lp(_.h,H);var ge=H,It=_.O;It&&(ge.H=It),ge.D&&(Ec(ge),za(ge)),_.g=H}else nm(_);d.i.length>0&&Wa(d)}else Ve[0]!="stop"&&Ve[0]!="close"||bs(d,7);else d.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?bs(d,7):Cc(d):Ve[0]!="noop"&&d.l&&d.l.qa(Ve),d.A=0)}}he(4)}catch{}}var h1=class{constructor(a,h){this.g=a,this.map=h}};function Op(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Mp(a){return a.h?1:a.g?a.g.size:0}function Ic(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Sc(a,h){a.g?a.g.add(h):a.h=h}function Lp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Op.prototype.cancel=function(){if(this.i=jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return k(a.i)}var Up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d1(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let R,b=null;_>=0?(R=a[d].substring(0,_),b=a[d].substring(_+1)):R=a[d],h(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ur(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Ur?(this.l=a.l,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.u),this.h=a.h,xc(this,qp(a.i)),this.m=a.m):a&&(h=String(a).match(Up))?(this.l=!1,ho(this,h[1]||"",!0),this.o=po(h[2]||""),this.g=po(h[3]||"",!0),fo(this,h[4]),this.h=po(h[5]||"",!0),xc(this,h[6]||"",!0),this.m=po(h[7]||"")):(this.l=!1,this.i=new go(null,this.l))}Ur.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(mo(h,Fp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(mo(h,Fp,!0),"@"),a.push(bn(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(mo(d,d.charAt(0)=="/"?m1:p1,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",mo(d,y1)),a.join("")},Ur.prototype.resolve=function(a){const h=Qn(this);let d=!!a.j;d?ho(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)fo(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var R=h.h.lastIndexOf("/");R!=-1&&(_=h.h.slice(0,R+1)+_)}if(R=_,R==".."||R==".")_="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){_=R.lastIndexOf("/",0)==0,R=R.split("/");const b=[];for(let H=0;H<R.length;){const ge=R[H++];ge=="."?_&&H==R.length&&b.push(""):ge==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),_&&H==R.length&&b.push("")):(b.push(ge),_=!0)}_=b.join("/")}else _=R}return d?h.h=_:d=a.i.toString()!=="",d?xc(h,qp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Qn(a){return new Ur(a)}function ho(a,h,d){a.j=d?po(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function xc(a,h,d){h instanceof go?(a.i=h,_1(a.i,a.l)):(d||(h=mo(h,g1)),a.i=new go(h,a.l))}function $e(a,h,d){a.i.set(h,d)}function Ba(a){return $e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function po(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mo(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,f1),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function f1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fp=/[#\/\?@]/g,p1=/[#\?:]/g,m1=/[#\?]/g,g1=/[#\?@]/g,y1=/#/g;function go(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ps(a){a.g||(a.g=new Map,a.h=0,a.i&&d1(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=go.prototype,t.add=function(a,h){Ps(this),this.i=null,a=hi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function $p(a,h){Ps(a),h=hi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function zp(a,h){return Ps(a),h=hi(a,h),a.g.has(h)}t.forEach=function(a,h){Ps(this),this.g.forEach(function(d,_){d.forEach(function(R){a.call(h,R,_,this)},this)},this)};function Bp(a,h){Ps(a);let d=[];if(typeof h=="string")zp(a,h)&&(d=d.concat(a.g.get(hi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Ps(this),this.i=null,a=hi(this,a),zp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Bp(this,a),a.length>0?String(a[0]):h):h};function Hp(a,h,d){$p(a,h),d.length>0&&(a.i=null,a.g.set(hi(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const R=bn(d);d=Bp(this,d);for(let b=0;b<d.length;b++){let H=R;d[b]!==""&&(H+="="+bn(d[b])),a.push(H)}}return this.i=a.join("&")};function qp(a){const h=new go;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function hi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function _1(a,h){h&&!a.j&&(Ps(a),a.i=null,a.g.forEach(function(d,_){const R=_.toLowerCase();_!=R&&($p(this,_),Hp(this,R,d))},a)),a.j=h}function v1(a,h){const d=new Ie;if(o.Image){const _=new Image;_.onload=f(Fr,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Fr,d,"TestLoadImage: error",!1,h,_),_.onabort=f(Fr,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Fr,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function w1(a,h){const d=new Ie,_=new AbortController,R=setTimeout(()=>{_.abort(),Fr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(b=>{clearTimeout(R),b.ok?Fr(d,"TestPingServer: ok",!0,h):Fr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Fr(d,"TestPingServer: error",!1,h)})}function Fr(a,h,d,_,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),_(d)}catch{}}function E1(){this.g=new Dt}function Ac(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ac,Pn),Ac.prototype.g=function(){return new Ha(this.i,this.h)};function Ha(a,h){Q.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ha,Q),t=Ha.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,_o(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_o(this)),this.g&&(this.readyState=3,_o(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Gp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Gp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yo(this):_o(this),this.readyState==3&&Gp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,yo(this))},t.Na=function(a){this.g&&(this.response=a,yo(this))},t.ga=function(){this.g&&yo(this)};function yo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,_o(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function _o(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wp(a){let h="";return X(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function kc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=Wp(d),typeof a=="string"?d!=null&&bn(d):$e(a,h,d))}function it(a){Q.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(it,Q);var T1=/^https?$/i,I1=["POST","PUT"];t=it.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tt.g(),this.g.onreadystatechange=v(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){Kp(this,b);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var R in _)d.set(R,_[R]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const b of _.keys())d.set(b,_.get(b));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(I1,h,void 0)>=0)||_||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,H]of d)this.g.setRequestHeader(b,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){Kp(this,b)}};function Kp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Qp(a),qa(a)}function Qp(a){a.A||(a.A=!0,J(a,"complete"),J(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,J(this,"complete"),J(this,"abort"),qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qa(this,!0)),it.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Jp(this):this.Xa())},t.Xa=function(){Jp(this)};function Jp(a){if(a.h&&typeof i<"u"){if(a.v&&$r(a)==4)setTimeout(a.Ca.bind(a),0);else if(J(a,"readystatechange"),$r(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=b===0){let H=String(a.D).match(Up)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),_=!T1.test(H?H.toLowerCase():"")}d=_}if(d)J(a,"complete"),J(a,"success");else{a.o=6;try{var R=$r(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Qp(a)}}finally{qa(a)}}}}function qa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||J(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function $r(a){return a.g?a.g.readyState:0}t.ca=function(){try{return $r(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Lr(h)}};function Yp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function S1(a){const h={};a=(a.g&&$r(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(T(a[_]))continue;var d=Bt(a[_]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=h[R]||[];h[R]=b,b.push(d)}z(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vo(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Xp(a){this.za=0,this.i=[],this.j=new Ie,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vo("baseRetryDelayMs",5e3,a),this.Za=vo("retryDelaySeedMs",1e4,a),this.Ta=vo("forwardChannelMaxRetries",2,a),this.va=vo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Op(a&&a.concurrentRequestLimit),this.Ba=new E1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Xp.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,_){Z(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=am(this,null,this.W),Wa(this)};function Cc(a){if(Zp(a),a.I==3){var h=a.V++,d=Qn(a.J);if($e(d,"SID",a.M),$e(d,"RID",h),$e(d,"TYPE","terminate"),wo(a,d),h=new Xe(a,a.j,h),h.M=2,h.A=Ba(Qn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=lm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),za(h)}om(a)}function Ga(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function Zp(a){Ga(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ka(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Wa(a){if(!Vp(a.h)&&!a.m){a.m=!0;var h=a.Ea;L||y(),F||(L(),F=!0),g.add(h,a),a.D=0}}function x1(a,h){return Mp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Re(c(a.Ea,a,h),im(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Xe(this,this.j,a);let b=this.o;if(this.U&&(b?(b=ce(b),We(b,this.U)):b=this.U),this.u!==null||this.R||(R.J=b,b=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=tm(this,R,h),d=Qn(this.J),$e(d,"RID",a),$e(d,"CVER",22),this.G&&$e(d,"X-HTTP-Session-Id",this.G),wo(this,d),b&&(this.R?h="headers="+bn(Wp(b))+"&"+h:this.u&&kc(d,this.u,b)),Sc(this.h,R),this.Ra&&$e(d,"TYPE","init"),this.S?($e(d,"$req",h),$e(d,"SID","null"),R.U=!0,wc(R,d,null)):wc(R,d,h),this.I=2}}else this.I==3&&(a?em(this,a):this.i.length==0||Vp(this.h)||em(this))};function em(a,h){var d;h?d=h.l:d=a.V++;const _=Qn(a.J);$e(_,"SID",a.M),$e(_,"RID",d),$e(_,"AID",a.K),wo(a,_),a.u&&a.o&&kc(_,a.u,a.o),d=new Xe(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=tm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Sc(a.h,d),wc(d,_,h)}function wo(a,h){a.H&&X(a.H,function(d,_){$e(h,_,d)}),a.l&&X({},function(d,_){$e(h,_,d)})}function tm(a,h,d){d=Math.min(a.i.length,d);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var R=a.i;let ge=-1;for(;;){const It=["count="+d];ge==-1?d>0?(ge=R[0].g,It.push("ofs="+ge)):ge=0:It.push("ofs="+ge);let Ve=!0;for(let Rt=0;Rt<d;Rt++){var b=R[Rt].g;const Jn=R[Rt].map;if(b-=ge,b<0)ge=Math.max(0,R[Rt].g-100),Ve=!1;else try{b="req"+b+"_"||"";try{var H=Jn instanceof Map?Jn:Object.entries(Jn);for(const[Ds,zr]of H){let Br=zr;l(zr)&&(Br=Ye(zr)),It.push(b+Ds+"="+encodeURIComponent(Br))}}catch(Ds){throw It.push(b+"type="+encodeURIComponent("_badmap")),Ds}}catch{_&&_(Jn)}}if(Ve){H=It.join("&");break e}}H=void 0}return a=a.i.splice(0,d),h.G=a,H}function nm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;L||y(),F||(L(),F=!0),g.add(h,a),a.A=0}}function Rc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Re(c(a.Da,a),im(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,rm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Re(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Z(10),Ga(this),rm(this))};function Nc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function rm(a){a.g=new Xe(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Qn(a.na);$e(h,"RID","rpc"),$e(h,"SID",a.M),$e(h,"AID",a.K),$e(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&$e(h,"TO",a.ia),$e(h,"TYPE","xmlhttp"),wo(a,h),a.u&&a.o&&kc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ba(Qn(h)),d.u=null,d.R=!0,Pp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ga(this),Rc(this),Z(19))};function Ka(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function sm(a,h){var d=null;if(a.g==h){Ka(a),Nc(a),a.g=null;var _=2}else if(Ic(a.h,h))d=h.G,Lp(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var R=a.D;_=ne(),J(_,new st(_,d)),Wa(a)}else nm(a);else if(R=h.m,R==3||R==0&&h.X>0||!(_==1&&x1(a,h)||_==2&&Rc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),R){case 1:bs(a,5);break;case 4:bs(a,10);break;case 3:bs(a,6);break;default:bs(a,2)}}}function im(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function bs(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),_=a.Ua;const R=!_;_=new Ur(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ho(_,"https"),Ba(_),R?v1(_.toString(),d):w1(_.toString(),d)}else Z(2);a.I=0,a.l&&a.l.pa(h),om(a),Zp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Z(2)):(this.j.info("Failed to ping google.com"),Z(1))};function om(a){if(a.I=0,a.ja=[],a.l){const h=jp(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ja,h),N(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function am(a,h,d){var _=d instanceof Ur?Qn(d):new Ur(d);if(_.g!="")h&&(_.g=h+"."+_.g),fo(_,_.u);else{var R=o.location;_=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const b=new Ur(null);_&&ho(b,_),h&&(b.g=h),R&&fo(b,R),d&&(b.h=d),_=b}return d=a.G,h=a.wa,d&&h&&$e(_,d,h),$e(_,"VER",a.ka),wo(a,_),_}function lm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new it(new Ac({ab:d})):new it(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function um(){}t=um.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Qa(){}Qa.prototype.g=function(a,h){return new mn(a,h)};function mn(a,h){Q.call(this),this.g=new Xp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new di(this)}p(mn,Q),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Cc(this.g)},mn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ye(a),a=d);h.i.push(new h1(h.Ya++,a)),h.I==3&&Wa(h)},mn.prototype.N=function(){this.g.l=null,delete this.j,Cc(this.g),delete this.g,mn.Z.N.call(this)};function cm(a){Rs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(cm,Rs);function hm(){uo.call(this),this.status=1}p(hm,uo);function di(a){this.g=a}p(di,um),di.prototype.ra=function(){J(this.g,"a")},di.prototype.qa=function(a){J(this.g,new cm(a))},di.prototype.pa=function(a){J(this.g,new hm)},di.prototype.oa=function(){J(this.g,"b")},Qa.prototype.createWebChannel=Qa.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Ew=function(){return new Qa},ww=function(){return ne()},vw=ae,Ed={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ot.NO_ERROR=0,Ot.TIMEOUT=8,Ot.HTTP_ERROR=6,$l=Ot,Kn.COMPLETE="complete",_w=Kn,ci.EventType=jr,jr.OPEN="a",jr.CLOSE="b",jr.ERROR="c",jr.MESSAGE="d",Q.prototype.listen=Q.prototype.J,Oo=ci,it.prototype.listenOnce=it.prototype.K,it.prototype.getLastError=it.prototype.Ha,it.prototype.getLastErrorCode=it.prototype.ya,it.prototype.getStatus=it.prototype.ca,it.prototype.getResponseJson=it.prototype.La,it.prototype.getResponseText=it.prototype.la,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Fa,yw=it}).apply(typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Kt.UNAUTHENTICATED=new Kt(null),Kt.GOOGLE_CREDENTIALS=new Kt("google-credentials-uid"),Kt.FIRST_PARTY=new Kt("first-party-uid"),Kt.MOCK_USER=new Kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="12.13.0";function lC(t){io=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ei=new jf("@firebase/firestore");function pi(){return ei.logLevel}function W(t,...e){if(ei.logLevel<=Te.DEBUG){const n=e.map(Yf);ei.debug(`Firestore (${io}): ${t}`,...n)}}function Or(t,...e){if(ei.logLevel<=Te.ERROR){const n=e.map(Yf);ei.error(`Firestore (${io}): ${t}`,...n)}}function ti(t,...e){if(ei.logLevel<=Te.WARN){const n=e.map(Yf);ei.warn(`Firestore (${io}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Tw(t,r,n)}function Tw(t,e,n){let r=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Or(r),new Error(r)}function Ce(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Tw(e,s,r)}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Kt.UNAUTHENTICATED))}shutdown(){}}class cC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hC{constructor(e){this.t=e,this.currentUser=Kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ps;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ps,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ps)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new Iw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new Kt(e)}}class dC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Kt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class fC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ce(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ey(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ey(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Td(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return dh(s)===dh(i)?ve(s,i):dh(s)?1:-1}return ve(t.length,e.length)}const gC=55296,yC=57343;function dh(t){const e=t.charCodeAt(0);return e>=gC&&e<=yC}function Ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="__name__";class Zn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=Zn.isNumericId(e),s=Zn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zn.extractNumericId(e).compare(Zn.extractNumericId(n)):Td(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fs.fromString(e.substring(4,e.length-2))}}class He extends Zn{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const _C=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class jt extends Zn{construct(e,n,r){return new jt(e,n,r)}static isValidIdentifier(e){return _C.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ty}static keyField(){return new jt([ty])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jt(n)}static emptyPath(){return new jt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(He.fromString(e))}static fromName(e){return new se(He.fromString(e).popFirst(5))}static empty(){return new se(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e,n){if(!n)throw new Y(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vC(t,e,n,r){if(e===!0&&r===!0)throw new Y(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!se.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ry(t){if(se.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Zf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zf(t);throw new Y(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function _t(t,e){const n={typeString:t};return e&&(n.value=e),n}function Va(t,e){if(!xw(t))throw new Y(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=-62135596800,iy=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*iy);return new qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<sy)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iy}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Va(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-sy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:_t("string",qe._jsonSchemaVersion),seconds:_t("number"),nanoseconds:_t("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new qe(0,0))}static max(){return new ue(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ya=-1;function wC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new vs(s,se.empty(),e)}function EC(t){return new vs(t.readTime,t.key,ya)}class vs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vs(ue.min(),se.empty(),ya)}static max(){return new vs(ue.max(),se.empty(),ya)}}function TC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==IC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function xC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ao(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ic.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=-1;function oc(t){return t==null}function ku(t){return t===0&&1/t==-1/0}function AC(t){return typeof t=="number"&&Number.isInteger(t)&&!ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="";function kC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=oy(e)),e=CC(t.get(n),e);return oy(e)}function CC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Aw:n+="";break;default:n+=i}}return n}function oy(t){return t+Aw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yl(this.root,e,this.comparator,!0)}}class yl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ly(this.data.getIterator())}getIteratorFrom(e){return new ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.fields=e,e.sort(jt.comparator)}static empty(){return new $n([])}unionWith(e){let n=new kt(jt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $n(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cw("Invalid base64 string: "+i):i}}(e);return new $t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new $t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const RC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ws(t){if(Ce(!!t,39018),typeof t=="string"){let e=0;const n=RC.exec(t);if(Ce(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?$t.fromBase64String(t):$t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="server_timestamp",Nw="__type__",Pw="__previous_value__",bw="__local_write_time__";function tp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Nw])==null?void 0:r.stringValue)===Rw}function ac(t){const e=t.mapValue.fields[Pw];return tp(e)?ac(e):e}function _a(t){const e=ws(t.mapValue.fields[bw].timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,s,i,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const Cu="(default)";class va{constructor(e,n){this.projectId=e,this.database=n||Cu}static empty(){return new va("","")}get isDefaultDatabase(){return this.database===Cu}isEqual(e){return e instanceof va&&e.projectId===this.projectId&&e.database===this.database}}function PC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Y(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new va(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="__type__",bC="__max__",_l={mapValue:{}},Ow="__vector__",Ru="value";function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tp(t)?4:OC(t)?9007199254740991:DC(t)?10:11:ie(28295,{value:t})}function hr(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _a(t).isEqual(_a(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ws(s.timestampValue),l=ws(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Es(s.bytesValue).isEqual(Es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ct(s.geoPointValue.latitude)===ct(i.geoPointValue.latitude)&&ct(s.geoPointValue.longitude)===ct(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ct(s.integerValue)===ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ct(s.doubleValue),l=ct(i.doubleValue);return o===l?ku(o)===ku(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ji(t.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ay(o)!==ay(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!hr(o[u],l[u])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function wa(t,e){return(t.values||[]).find(n=>hr(n,e))!==void 0}function Yi(t,e){if(t===e)return 0;const n=Ts(t),r=Ts(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ct(i.integerValue||i.doubleValue),u=ct(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return uy(t.timestampValue,e.timestampValue);case 4:return uy(_a(t),_a(e));case 5:return Td(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Es(i),u=Es(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ve(l[c],u[c]);if(f!==0)return f}return ve(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(ct(i.latitude),ct(o.latitude));return l!==0?l:ve(ct(i.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var v,k,N,P;const l=i.fields||{},u=o.fields||{},c=(v=l[Ru])==null?void 0:v.arrayValue,f=(k=u[Ru])==null?void 0:k.arrayValue,p=ve(((N=c==null?void 0:c.values)==null?void 0:N.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return p!==0?p:cy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===_l.mapValue&&o===_l.mapValue)return 0;if(i===_l.mapValue)return 1;if(o===_l.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const v=Td(u[p],f[p]);if(v!==0)return v;const k=Yi(l[u[p]],c[f[p]]);if(k!==0)return k}return ve(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{he:n})}}function uy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=ws(t),r=ws(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function cy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Yi(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Xi(t){return Id(t)}function Id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ws(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Id(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Id(n.fields[o])}`;return s+"}"}(t.mapValue):ie(61005,{value:t})}function zl(t){switch(Ts(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(t);return e?16+zl(e):16;case 5:return 2*t.stringValue.length;case 6:return Es(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return oi(r.fields,(i,o)=>{s+=i.length+zl(o)}),s}(t.mapValue);default:throw ie(13486,{value:t})}}function Sd(t){return!!t&&"integerValue"in t}function np(t){return!!t&&"arrayValue"in t}function hy(t){return!!t&&"nullValue"in t}function dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bl(t){return!!t&&"mapValue"in t}function DC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Dw])==null?void 0:r.stringValue)===Ow}function Ko(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ko(t.arrayValue.values[n]);return e}return{...t}}function OC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===bC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ko(n)}setAll(e){let n=jt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ko(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xn(Ko(this.value))}}function Vw(t){const e=[];return oi(t.fields,(n,r)=>{const s=new jt([n]);if(Bl(r)){const i=Vw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Jt(e,0,ue.min(),ue.min(),ue.min(),xn.empty(),0)}static newFoundDocument(e,n,r,s){return new Jt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new Jt(e,2,n,ue.min(),ue.min(),xn.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,ue.min(),ue.min(),xn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nu{constructor(e,n){this.position=e,this.inclusive=n}}function fy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Yi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function py(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function VC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Mw{}class xt extends Mw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LC(e,n,r):n==="array-contains"?new FC(e,r):n==="in"?new $C(e,r):n==="not-in"?new zC(e,r):n==="array-contains-any"?new BC(e,r):new xt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jC(e,r):new UC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Yi(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(Yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends Mw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new dr(e,n)}matches(e){return Lw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lw(t){return t.op==="and"}function jw(t){return MC(t)&&Lw(t)}function MC(t){for(const e of t.filters)if(e instanceof dr)return!1;return!0}function xd(t){if(t instanceof xt)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if(jw(t))return t.filters.map(e=>xd(e)).join(",");{const e=t.filters.map(n=>xd(n)).join(",");return`${t.op}(${e})`}}function Uw(t,e){return t instanceof xt?function(r,s){return s instanceof xt&&r.op===s.op&&r.field.isEqual(s.field)&&hr(r.value,s.value)}(t,e):t instanceof dr?function(r,s){return s instanceof dr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Uw(o,s.filters[l]),!0):!1}(t,e):void ie(19439)}function Fw(t){return t instanceof xt?function(n){return`${n.field.canonicalString()} ${n.op} ${Xi(n.value)}`}(t):t instanceof dr?function(n){return n.op.toString()+" {"+n.getFilters().map(Fw).join(" ,")+"}"}(t):"Filter"}class LC extends xt{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class jC extends xt{constructor(e,n){super(e,"in",n),this.keys=$w("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UC extends xt{constructor(e,n){super(e,"not-in",n),this.keys=$w("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $w(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class FC extends xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return np(n)&&wa(n.arrayValue,this.value)}}class $C extends xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wa(this.value.arrayValue,n)}}class zC extends xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wa(this.value.arrayValue,n)}}class BC extends xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!np(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wa(this.value.arrayValue,r))}}/**
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
 */class HC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function my(t,e=null,n=[],r=[],s=null,i=null,o=null){return new HC(t,e,n,r,s,i,o)}function rp(t){const e=de(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xi(r)).join(",")),e.Te=n}return e.Te}function sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Uw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!py(t.startAt,e.startAt)&&py(t.endAt,e.endAt)}function Ad(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function qC(t,e,n,r,s,i,o,l){return new lc(t,e,n,r,s,i,o,l)}function uc(t){return new lc(t)}function gy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GC(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function WC(t){return t.collectionGroup!==null}function Qo(t){const e=de(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new kt(jt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Pu(i,r))}),n.has(jt.keyField().canonicalString())||e.Ie.push(new Pu(jt.keyField(),r))}return e.Ie}function or(t){const e=de(t);return e.Ee||(e.Ee=KC(e,Qo(t))),e.Ee}function KC(t,e){if(t.limitType==="F")return my(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pu(s.field,i)});const n=t.endAt?new Nu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nu(t.startAt.position,t.startAt.inclusive):null;return my(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kd(t,e,n){return new lc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return sp(or(t),or(e))&&t.limitType===e.limitType}function zw(t){return`${rp(or(t))}|lt:${t.limitType}`}function mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fw(s)).join(", ")}]`),oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Xi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Xi(s)).join(",")),`Target(${r})`}(or(t))}; limitType=${t.limitType})`}function hc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=fy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Qo(r),s)||r.endAt&&!function(o,l,u){const c=fy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Qo(r),s))}(t,e)}function QC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bw(t){return(e,n)=>{let r=!1;for(const s of Qo(t)){const i=JC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JC(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?Yi(u,c):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new Qe(se.comparator);function Vr(){return YC}const Hw=new Qe(se.comparator);function Vo(...t){let e=Hw;for(const n of t)e=e.insert(n.key,n);return e}function qw(t){let e=Hw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $s(){return Jo()}function Gw(){return Jo()}function Jo(){return new ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const XC=new Qe(se.comparator),ZC=new kt(se.comparator);function we(...t){let e=ZC;for(const n of t)e=e.add(n);return e}const eR=new kt(ve);function tR(){return eR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ku(e)?"-0":e}}function Ww(t){return{integerValue:""+t}}function nR(t,e){return AC(e)?Ww(e):ip(t,e)}/**
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
 */class dc{constructor(){this._=void 0}}function rR(t,e,n){return t instanceof Ea?function(s,i){const o={fields:{[Nw]:{stringValue:Rw},[bw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tp(i)&&(i=ac(i)),i&&(o.fields[Pw]=i),{mapValue:o}}(n,e):t instanceof Ta?Qw(t,e):t instanceof Ia?Jw(t,e):function(s,i){const o=Kw(s,i),l=yy(o)+yy(s.Ae);return Sd(o)&&Sd(s.Ae)?Ww(l):ip(s.serializer,l)}(t,e)}function sR(t,e,n){return t instanceof Ta?Qw(t,e):t instanceof Ia?Jw(t,e):n}function Kw(t,e){return t instanceof bu?function(r){return Sd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ea extends dc{}class Ta extends dc{constructor(e){super(),this.elements=e}}function Qw(t,e){const n=Yw(e);for(const r of t.elements)n.some(s=>hr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ia extends dc{constructor(e){super(),this.elements=e}}function Jw(t,e){let n=Yw(e);for(const r of t.elements)n=n.filter(s=>!hr(s,r));return{arrayValue:{values:n}}}class bu extends dc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function yy(t){return ct(t.integerValue||t.doubleValue)}function Yw(t){return np(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.field=e,this.transform=n}}function oR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ta&&s instanceof Ta||r instanceof Ia&&s instanceof Ia?Ji(r.elements,s.elements,hr):r instanceof bu&&s instanceof bu?hr(r.Ae,s.Ae):r instanceof Ea&&s instanceof Ea}(t.transform,e.transform)}class aR{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function Xw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new op(t.key,qn.none()):new Ma(t.key,t.data,qn.none());{const n=t.data,r=xn.empty();let s=new kt(jt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new li(t.key,r,new $n(s.toArray()),qn.none())}}function lR(t,e,n){t instanceof Ma?function(s,i,o){const l=s.value.clone(),u=vy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof li?function(s,i,o){if(!Hl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=vy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Zw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yo(t,e,n,r){return t instanceof Ma?function(i,o,l,u){if(!Hl(i.precondition,o))return l;const c=i.value.clone(),f=wy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof li?function(i,o,l,u){if(!Hl(i.precondition,o))return l;const c=wy(i.fieldTransforms,u,o),f=o.data;return f.setAll(Zw(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Hl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Kw(r.transform,s||null);i!=null&&(n===null&&(n=xn.empty()),n.set(r.field,i))}return n||null}function _y(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ji(r,s,(i,o)=>oR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ma extends fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class li extends fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Zw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vy(t,e,n){const r=new Map;Ce(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,sR(o,l,n[s]))}return r}function wy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rR(i,o,e))}return r}class op extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cR extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Gw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Xw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(n,r)=>_y(n,r))&&Ji(this.baseMutations,e.baseMutations,(n,r)=>_y(n,r))}}class ap{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return XC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ap(e,n,r,s)}}/**
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
 */class dR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Se;function pR(t){switch(t){case j.OK:return ie(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function eE(t){if(t===void 0)return Or("GRPC error has no .code"),j.UNKNOWN;switch(t){case gt.OK:return j.OK;case gt.CANCELLED:return j.CANCELLED;case gt.UNKNOWN:return j.UNKNOWN;case gt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case gt.INTERNAL:return j.INTERNAL;case gt.UNAVAILABLE:return j.UNAVAILABLE;case gt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case gt.NOT_FOUND:return j.NOT_FOUND;case gt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case gt.ABORTED:return j.ABORTED;case gt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case gt.DATA_LOSS:return j.DATA_LOSS;default:return ie(39323,{code:t})}}(Se=gt||(gt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mR(){return new TextEncoder}/**
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
 */const gR=new fs([4294967295,4294967295],0);function Ey(t){const e=mR().encode(t),n=new gw;return n.update(e),new Uint8Array(n.digest())}function Ty(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fs([n,r],0),new fs([s,i],0)]}class lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mo(`Invalid padding: ${n}`);if(r<0)throw new Mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Mo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=fs.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(fs.fromNumber(r)));return s.compare(gR)===1&&(s=new fs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ey(e),[r,s]=Ty(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ey(e),[r,s]=Ty(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ja.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new La(ue.min(),s,new Qe(ve),Vr(),we())}}class ja{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ja(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class tE{constructor(e,n){this.targetId=e,this.Ce=n}}class nE{constructor(e,n,r=$t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Iy{constructor(){this.ve=0,this.Fe=Sy(),this.Me=$t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=we(),n=we(),r=we();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}}),new ja(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Sy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ce(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class yR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vr(),this.Je=vl(),this.He=vl(),this.Ze=new Qe(ve)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ad(i))if(r===0){const o=new se(i.path);this.et(n,o,Jt.newNoDocument(o,ue.min()))}else Ce(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Es(r).toUint8Array()}catch(u){if(u instanceof Cw)return ti("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new lp(o,s,i)}catch(u){return ti(u instanceof Mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ad(l.target)){const u=new se(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Jt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=we();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new La(e,n,this.Ze,this.je,r);return this.je=Vr(),this.Je=vl(),this.He=vl(),this.Ze=new Qe(ve),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Iy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new kt(ve),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new kt(ve),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Iy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function vl(){return new Qe(se.comparator)}function Sy(){return new Qe(se.comparator)}const _R={asc:"ASCENDING",desc:"DESCENDING"},vR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wR={and:"AND",or:"OR"};class ER{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cd(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TR(t,e){return Du(t,e.toTimestamp())}function ar(t){return Ce(!!t,49232),ue.fromTimestamp(function(n){const r=ws(n);return new qe(r.seconds,r.nanos)}(t))}function up(t,e){return Rd(t,e).canonicalString()}function Rd(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sE(t){const e=He.fromString(t);return Ce(uE(e),10190,{key:e.toString()}),e}function Nd(t,e){return up(t.databaseId,e.path)}function fh(t,e){const n=sE(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(oE(n))}function iE(t,e){return up(t.databaseId,e)}function IR(t){const e=sE(t);return e.length===4?He.emptyPath():oE(e)}function Pd(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oE(t){return Ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function xy(t,e,n){return{name:Nd(t,e),fields:n.value.mapValue.fields}}function SR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ie(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(Ce(f===void 0||typeof f=="string",58123),$t.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),$t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?j.UNKNOWN:eE(c.code);return new Y(f,c.message||"")}(o);n=new nE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fh(t,r.document.name),i=ar(r.document.updateTime),o=r.document.createTime?ar(r.document.createTime):ue.min(),l=new xn({mapValue:{fields:r.document.fields}}),u=Jt.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new ql(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fh(t,r.document),i=r.readTime?ar(r.readTime):ue.min(),o=Jt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ql([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fh(t,r.document),i=r.removedTargetIds||[];n=new ql([],i,s,null)}else{if(!("filter"in e))return ie(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fR(s,i),l=r.targetId;n=new tE(l,o)}}return n}function xR(t,e){let n;if(e instanceof Ma)n={update:xy(t,e.key,e.value)};else if(e instanceof op)n={delete:Nd(t,e.key)};else if(e instanceof li)n={update:xy(t,e.key,e.data),updateMask:OR(e.fieldMask)};else{if(!(e instanceof cR))return ie(16599,{dt:e.type});n={verify:Nd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:TR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)}(t,e.precondition)),n}function AR(t,e){return t&&t.length>0?(Ce(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?ar(s.updateTime):ar(i);return o.isEqual(ue.min())&&(o=ar(i)),new aR(o,s.transformResults||[])}(n,e))):[]}function kR(t,e){return{documents:[iE(t,e.path)]}}function CR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iE(t,s);const i=function(c){if(c.length!==0)return lE(dr.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(v){return{field:gi(v.field),direction:PR(v.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Cd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function RR(t){let e=IR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const v=aE(p);return v instanceof dr&&jw(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(v=>function(N){return new Pu(yi(N.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,oc(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(p){const v=!!p.before,k=p.values||[];return new Nu(k,v)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const v=!p.before,k=p.values||[];return new Nu(k,v)}(n.endAt)),qC(e,s,o,i,l,"F",u,c)}function NR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=yi(n.unaryFilter.field);return xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yi(n.unaryFilter.field);return xt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yi(n.unaryFilter.field);return xt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yi(n.unaryFilter.field);return xt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return xt.create(yi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dr.create(n.compositeFilter.filters.map(r=>aE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function PR(t){return _R[t]}function bR(t){return vR[t]}function DR(t){return wR[t]}function gi(t){return{fieldPath:t.canonicalString()}}function yi(t){return jt.fromServerFormat(t.fieldPath)}function lE(t){return t instanceof xt?function(n){if(n.op==="=="){if(dy(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NAN"}};if(hy(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dy(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NOT_NAN"}};if(hy(n.value))return{unaryFilter:{field:gi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gi(n.field),op:bR(n.op),value:n.value}}}(t):t instanceof dr?function(n){const r=n.getFilters().map(s=>lE(s));return r.length===1?r[0]:{compositeFilter:{op:DR(n.op),filters:r}}}(t):ie(54877,{filter:t})}function OR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function cE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r,s,i=ue.min(),o=ue.min(),l=$t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.yt=e}}function MR(t){const e=RR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kd(e,e.limit,"L"):e}/**
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
 */class LR{constructor(){this.bn=new jR}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(vs.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(vs.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class jR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new kt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new kt(He.comparator)).toArray()}}/**
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
 */const Ay={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hE=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(hE,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Is(0)}static ar(){return new Is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="LruGarbageCollector",UR=1048576;function Cy([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class FR{constructor(e){this.Pr=e,this.buffer=new kt(Cy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Cy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $R{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(ky,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ao(n)?W(ky,"Ignoring IndexedDB error during garbage collection: ",n):await oo(n)}await this.Ar(3e5)})}}class zR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ic.ce);const r=new FR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ay)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ay):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),pi()<=Te.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function BR(t,e){return new zR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.changes=new ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Yo(r.mutation,s,$n.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=$s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Vo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Vr();const o=Jo(),l=function(){return Jo()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof li)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Yo(f.mutation,c,f.mutation.getFieldMask(),qe.now())):o.set(c.key,$n.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new qR(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Jo();let s=new Qe((o,l)=>o-l),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||$n.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(s.get(l.batchId)||we()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=Gw();f.forEach(v=>{if(!i.has(v)){const k=Xw(n.get(v),r.get(v));k!==null&&p.set(v,k),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return GC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve($s());let l=ya,u=i;return o.next(c=>M.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,we())).next(f=>({batchId:l,changes:qw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Vo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Vo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const c=function(p,v){return new lc(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Jt.newInvalidDocument(f)))});let l=Vo();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&Yo(f.mutation,c,$n.empty(),qe.now()),hc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ar(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:MR(s.bundledQuery),readTime:ar(s.readTime)}}(n)),M.resolve()}}/**
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
 */class KR{constructor(){this.overlays=new Qe(se.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$s();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=$s(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Qe((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=$s(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=$s(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return M.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dR(n,r));let i=this.Lr.get(n);i===void 0&&(i=we(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class QR{constructor(){this.sessionToken=$t.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.kr=new kt(Nt.Kr),this.qr=new kt(Nt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Nt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Nt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new se(new He([])),r=new Nt(n,e),s=new Nt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new se(new He([])),r=new Nt(n,e),s=new Nt(n,e+1);let i=we();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Nt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Nt{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return se.comparator(e.key,n.key)||ve(e.Jr,n.Jr)}static Ur(e,n){return ve(e.Jr,n.Jr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new kt(Nt.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new Nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ep:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Nt(n,0),s=new Nt(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(ve);return n.forEach(s=>{const i=new Nt(s,0),o=new Nt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Nt(new se(i),0);let l=new kt(ve);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,s=>{const i=new Nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Nt(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.ti=e,this.docs=function(){return new Qe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let r=Vr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Jt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vr();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||TC(EC(f),r)<=0||(s.has(f.key)||hc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XR(this)}getSize(e){return M.resolve(this.size)}}class XR extends HR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.persistence=e,this.ri=new ai(n=>rp(n),sp),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.ii=0,this.si=new cp,this.targetCount=0,this.oi=Is._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n){this._i={},this.overlays={},this.ai=new ic(0),this.ui=!1,this.ui=!0,this.ci=new QR,this.referenceDelegate=e(this),this.li=new ZR(this),this.indexManager=new LR,this.remoteDocumentCache=function(s){return new YR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new VR(n),this.Pi=new WR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new JR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new e2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class e2 extends SC{constructor(e){super(),this.currentSequenceNumber=e}}class hp{constructor(e){this.persistence=e,this.Ri=new cp,this.Ai=null}static Vi(e){return new hp(e)}get di(){if(this.Ai)return this.Ai;throw ie(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=se.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ou{constructor(e,n){this.persistence=e,this.fi=new ai(r=>kC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=BR(this,n)}static Vi(e,n){return new Ou(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dp(e,n.fromCache,r,s)}}/**
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
 */class t2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class n2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return pS()?8:xC(Xt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new t2;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(pi()<=Te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(pi()<=Te.DEBUG&&W("QueryEngine","Query:",mi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(pi()<=Te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(n))):M.resolve())}gs(e,n){if(gy(n))return M.resolve(null);let r=or(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=kd(n,null,"F"),r=or(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,kd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return gy(n)||s.isEqual(ue.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?M.resolve(null):(pi()<=Te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mi(n)),this.Ds(e,o,n,wC(s,ya)).next(l=>l))})}Ss(e,n){let r=new kt(Bw(e));return n.forEach((s,i)=>{hc(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return pi()<=Te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",mi(n)),this.fs.getDocumentsMatchingQuery(e,n,vs.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="LocalStore",r2=3e8;class s2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Qe(ve),this.Fs=new ai(i=>rp(i),sp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function i2(t,e,n,r){return new s2(t,e,n,r)}async function fE(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=we();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function o2(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,v=p.keys();let k=M.resolve();return v.forEach(N=>{k=k.next(()=>f.getEntry(u,N)).next(P=>{const V=c.docVersions.get(N);Ce(V!==null,48541),P.version.compareTo(V)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=we();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function pE(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function a2(t,e){const n=de(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const v=s.get(p);if(!v)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let k=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken($t.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(p,k),function(P,V,S){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=r2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(v,k,f)&&l.push(n.li.updateTargetData(i,k))});let u=Vr(),c=we();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(l2(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(ue.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function l2(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ue.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(fp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function u2(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ep),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function c2(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function bd(t,e,n){const r=de(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ao(o))throw o;W(fp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ry(t,e,n){const r=de(t);let s=ue.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=de(u),v=p.Fs.get(f);return v!==void 0?M.resolve(p.vs.get(v)):p.li.getTargetData(c,f)}(r,o,or(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:we())).next(l=>(h2(r,QC(e),l),{documents:l,ks:i})))}function h2(t,e,n){let r=t.Ms.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Ny{constructor(){this.activeTargetIds=tR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class d2{constructor(){this.vo=new Ny,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ny,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class f2{Mo(e){}shutdown(){}}/**
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
 */const Py="ConnectivityMonitor";class by{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(Py,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(Py,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wl=null;function Dd(){return wl===null?wl=function(){return 268435456+Math.round(2147483648*Math.random())}():wl++,"0x"+wl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="RestConnection",p2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class m2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Cu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Dd(),l=this.Qo(e,n.toUriEncodedString());W(ph,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=ro(c);return this.zo(e,l,u,r,f).then(p=>(W(ph,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ti(ph,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=p2[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="WebChannelConnection",Ro=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ui extends m2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ui.c_){const e=ww();Ro(e,vw.STAT_EVENT,n=>{n.stat===Ed.PROXY?W(Gt,"STAT_EVENT: detected buffering proxy"):n.stat===Ed.NOPROXY&&W(Gt,"STAT_EVENT: detected no buffering proxy")}),Ui.c_=!0}}zo(e,n,r,s,i){const o=Dd();return new Promise((l,u)=>{const c=new yw;c.setWithCredentials(!0),c.listenOnce(_w.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $l.NO_ERROR:const p=c.getResponseJson();W(Gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case $l.TIMEOUT:W(Gt,`RPC '${e}' ${o} timed out`),u(new Y(j.DEADLINE_EXCEEDED,"Request time out"));break;case $l.HTTP_ERROR:const v=c.getStatus();if(W(Gt,`RPC '${e}' ${o} failed with status:`,v,"response text:",c.getResponseText()),v>0){let k=c.getResponseJson();Array.isArray(k)&&(k=k[0]);const N=k==null?void 0:k.error;if(N&&N.status&&N.message){const P=function(S){const I=S.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(I)>=0?I:j.UNKNOWN}(N.status);u(new Y(P,N.message))}else u(new Y(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new Y(j.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(Gt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);W(Gt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Dd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");W(Gt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let p=!1,v=!1;const k=new g2({Jo:N=>{v?W(Gt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(p||(W(Gt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),W(Gt,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Ho:()=>f.close()});return Ro(f,Oo.EventType.OPEN,()=>{v||(W(Gt,`RPC '${e}' stream ${s} transport opened.`),k.i_())}),Ro(f,Oo.EventType.CLOSE,()=>{v||(v=!0,W(Gt,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(f))}),Ro(f,Oo.EventType.ERROR,N=>{v||(v=!0,ti(Gt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),k.o_(new Y(j.UNAVAILABLE,"The operation could not be completed")))}),Ro(f,Oo.EventType.MESSAGE,N=>{var P;if(!v){const V=N.data[0];Ce(!!V,16349);const S=V,I=(S==null?void 0:S.error)||((P=S[0])==null?void 0:P.error);if(I){W(Gt,`RPC '${e}' stream ${s} received error:`,I);const A=I.status;let D=function(g){const y=gt[g];if(y!==void 0)return eE(y)}(A),L=I.message;A==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&ti(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=j.INTERNAL,L="Unknown error status: "+A+" with message "+I.message),v=!0,k.o_(new Y(D,L)),f.close()}else W(Gt,`RPC '${e}' stream ${s} received:`,V),k.__(V)}}),Ui.u_(),setTimeout(()=>{k.s_()},0),k}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ew()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){return new Ui(t)}function mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t){return new ER(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui.c_=!1;class mE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="PersistentStream";class gE{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Y(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(Dy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(Dy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _2 extends gE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=SR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?ar(o.readTime):ue.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ad(u)?{documents:kR(i,u)}:{query:CR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rE(i,o.resumeToken);const c=Cd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ue.min())>0){l.readTime=Du(i,o.snapshotVersion.toTimestamp());const c=Cd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=NR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.K_(n)}}class v2 extends gE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=AR(e.writeResults,e.commitTime),r=ar(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Pd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xR(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{}class E2 extends w2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Rd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(j.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function T2(t,e,n,r){return new E2(t,e,n,r)}class I2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Or(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="RemoteStore";class S2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Is(1e3),this.Va=new Is(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{ui(this)&&(W(fr,"Restarting streams for network reachability change."),await async function(u){const c=de(u);c.da.add(4),await Ua(c),c.ga.set("Unknown"),c.da.delete(4),await mc(c)}(this))})}),this.ga=new I2(r,s)}}async function mc(t){if(ui(t))for(const e of t.ma)await e(!0)}async function Ua(t){for(const e of t.ma)await e(!1)}function Od(t,e){return t.Ea.get(e)||void 0}function yE(t,e){const n=de(t),r=Od(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const c=Od(l,u);c!==void 0&&l.Ra.delete(c);const f=function(v,k){return k%2!=0?v.Va.next():v.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);W(fr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Sr(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),yp(n)?gp(n):lo(n).O_()&&mp(n,i)}function pp(t,e){const n=de(t),r=lo(n),s=Od(n,e);W(fr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&_E(n,s),n.Ia.size===0&&(r.O_()?r.L_():ui(n)&&n.ga.set("Unknown"))}function mp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void W(fr,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}lo(t).Z_(e)}function _E(t,e){t.pa.$e(e),lo(t).X_(e)}function gp(t){t.pa=new yR({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):we()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.ga.ua()}function yp(t){return ui(t)&&!lo(t).x_()&&t.Ia.size>0}function ui(t){return de(t).da.size===0}function vE(t){t.pa=void 0}async function x2(t){t.ga.set("Online")}async function A2(t){t.Ia.forEach((e,n)=>{mp(t,e)})}async function k2(t,e){vE(t),yp(t)?(t.ga.ha(e),gp(t)):t.ga.set("Unknown")}async function C2(t,e,n){if(t.ga.set("Online"),e instanceof nE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){W(fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vu(t,r)}else if(e instanceof ql?t.pa.Xe(e):e instanceof tE?t.pa.st(e):t.pa.tt(e),!n.isEqual(ue.min()))try{const r=await pE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const p=i.Ia.get(c);if(!p)return;i.Ia.set(c,p.withResumeToken($t.EMPTY_BYTE_STRING,p.snapshotVersion)),_E(i,c);const v=new Sr(p.target,c,f,p.sequenceNumber);mp(i,v)});const u=function(f,p){const v=new Map;p.targetChanges.forEach((N,P)=>{const V=f.Ra.get(P);V!==void 0&&v.set(V,N)});let k=new Qe(ve);return p.targetMismatches.forEach((N,P)=>{const V=f.Ra.get(N);V!==void 0&&(k=k.insert(V,P))}),new La(p.snapshotVersion,v,k,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){W(fr,"Failed to raise snapshot:",r),await Vu(t,r)}}async function Vu(t,e,n){if(!ao(e))throw e;t.da.add(1),await Ua(t),t.ga.set("Offline"),n||(n=()=>pE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(fr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await mc(t)})}function wE(t,e){return e().catch(n=>Vu(t,n,e))}async function gc(t){const e=de(t),n=Ss(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ep;for(;R2(e);)try{const s=await u2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,N2(e,s)}catch(s){await Vu(e,s)}EE(e)&&TE(e)}function R2(t){return ui(t)&&t.Ta.length<10}function N2(t,e){t.Ta.push(e);const n=Ss(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function EE(t){return ui(t)&&!Ss(t).x_()&&t.Ta.length>0}function TE(t){Ss(t).start()}async function P2(t){Ss(t).ra()}async function b2(t){const e=Ss(t);for(const n of t.Ta)e.ea(n.mutations)}async function D2(t,e,n){const r=t.Ta.shift(),s=ap.from(r,e,n);await wE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gc(t)}async function O2(t,e){e&&Ss(t).Y_&&await async function(r,s){if(function(o){return pR(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Ss(r).B_(),await wE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gc(r)}}(t,e),EE(t)&&TE(t)}async function Oy(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),W(fr,"RemoteStore received new credentials");const r=ui(n);n.da.add(3),await Ua(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await mc(n)}async function V2(t,e){const n=de(t);e?(n.da.delete(2),await mc(n)):e||(n.da.add(2),await Ua(n),n.ga.set("Unknown"))}function lo(t){return t.ya||(t.ya=function(n,r,s){const i=de(n);return i.sa(),new _2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:x2.bind(null,t),Yo:A2.bind(null,t),t_:k2.bind(null,t),H_:C2.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),yp(t)?gp(t):t.ga.set("Unknown")):(await t.ya.stop(),vE(t))})),t.ya}function Ss(t){return t.wa||(t.wa=function(n,r,s){const i=de(n);return i.sa(),new v2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:P2.bind(null,t),t_:O2.bind(null,t),ta:b2.bind(null,t),na:D2.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await gc(t)):(await t.wa.stop(),t.Ta.length>0&&(W(fr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new _p(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vp(t,e){if(Or("AsyncQueue",`${e}: ${t}`),ao(t))return new Y(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{static emptySet(e){return new Fi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Vo(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.Sa=new Qe(se.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):ie(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Zi(e,n,Fi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class L2{constructor(){this.queries=My(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=My(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new Y(j.ABORTED,"Firestore shutting down"))}}function My(){return new ai(t=>zw(t),cc)}async function IE(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new M2,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vp(o,`Initialization of query '${mi(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&wp(n)}async function SE(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function j2(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&wp(n)}function U2(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function wp(t){t.xa.forEach(e=>{e.next()})}var Vd,Ly;(Ly=Vd||(Vd={})).Ba="default",Ly.Cache="cache";class xE{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Vd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.key=e}}class kE{constructor(e){this.key=e}}class F2{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=we(),this.mutatedKeys=we(),this.iu=Bw(e),this.su=new Fi(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Vy,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const v=s.get(f),k=hc(this.query,p)?p:null,N=!!v&&this.mutatedKeys.has(v.key),P=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let V=!1;v&&k?v.data.isEqual(k.data)?N!==P&&(r.track({type:3,doc:k}),V=!0):this.uu(v,k)||(r.track({type:2,doc:k}),V=!0,(u&&this.iu(k,u)>0||c&&this.iu(k,c)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),V=!0):v&&!k&&(r.track({type:1,doc:v}),V=!0,(u||c)&&(l=!0)),V&&(k?(o=o.add(k),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(k,N){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Vt:V})}};return P(k)-P(N)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new Zi(this.query,e.su,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Vy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=we(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new kE(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new AE(r))}),n}Tu(e){this.tu=e.ks,this.ru=we();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return Zi.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Ep="SyncEngine";class $2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class z2{constructor(e){this.key=e,this.Eu=!1}}class B2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new ai(l=>zw(l),cc),this.Vu=new Map,this.du=new Set,this.mu=new Qe(se.comparator),this.fu=new Map,this.gu=new cp,this.pu={},this.yu=new Map,this.wu=Is.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function H2(t,e,n=!0){const r=DE(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await CE(r,e,n,!0),s}async function q2(t,e){const n=DE(t);await CE(n,e,!0,!1)}async function CE(t,e,n,r){const s=await c2(t.localStore,or(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await G2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&yE(t.remoteStore,s),l}async function G2(t,e,n,r,s){t.bu=(p,v,k)=>async function(P,V,S,I){let A=V.view._u(S);A.bs&&(A=await Ry(P.localStore,V.query,!1).then(({documents:g})=>V.view._u(g,A)));const D=I&&I.targetChanges.get(V.targetId),L=I&&I.targetMismatches.get(V.targetId)!=null,F=V.view.applyChanges(A,P.isPrimaryClient,D,L);return Uy(P,V.targetId,F.hu),F.snapshot}(t,p,v,k);const i=await Ry(t.localStore,e,!0),o=new F2(e,i.ks),l=o._u(i.documents),u=ja.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Uy(t,n,c.hu);const f=new $2(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function W2(t,e,n){const r=de(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!cc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pp(r.remoteStore,s.targetId),Md(r,s.targetId)}).catch(oo)):(Md(r,s.targetId),await bd(r.localStore,s.targetId,!0))}async function K2(t,e){const n=de(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pp(n.remoteStore,r.targetId))}async function Q2(t,e,n){const r=nN(t);try{const s=await function(o,l){const u=de(o),c=qe.now(),f=l.reduce((k,N)=>k.add(N.key),we());let p,v;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let N=Vr(),P=we();return u.xs.getEntries(k,f).next(V=>{N=V,N.forEach((S,I)=>{I.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,N)).next(V=>{p=V;const S=[];for(const I of l){const A=uR(I,p.get(I.key).overlayedDocument);A!=null&&S.push(new li(I.key,A,Vw(A.value.mapValue),qn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,c,S,l)}).next(V=>{v=V;const S=V.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(k,V.batchId,S)})}).then(()=>({batchId:v.batchId,changes:qw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new Qe(ve)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,s.batchId,n),await Fa(r,s.changes),await gc(r.remoteStore)}catch(s){const i=vp(s,"Failed to persist write");n.reject(i)}}async function RE(t,e){const n=de(t);try{const r=await a2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?Ce(o.Eu,14607):s.removedDocuments.size>0&&(Ce(o.Eu,42227),o.Eu=!1))}),await Fa(n,r,e)}catch(r){await oo(r)}}function jy(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=de(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const v of p.va)v.Oa(l)&&(c=!0)}),c&&wp(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function J2(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new Qe(se.comparator);o=o.insert(i,Jt.newNoDocument(i,ue.min()));const l=we().add(i),u=new La(ue.min(),new Map,new Qe(ve),o,l);await RE(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Tp(r)}else await bd(r.localStore,e,!1).then(()=>Md(r,e,n)).catch(oo)}async function Y2(t,e){const n=de(t),r=e.batch.batchId;try{const s=await o2(n.localStore,e);PE(n,r,null),NE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fa(n,s)}catch(s){await oo(s)}}async function X2(t,e,n){const r=de(t);try{const s=await function(o,l){const u=de(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Ce(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);PE(r,e,n),NE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fa(r,s)}catch(s){await oo(s)}}function NE(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function PE(t,e,n){const r=de(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Md(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||bE(t,r)})}function bE(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(pp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Tp(t))}function Uy(t,e,n){for(const r of n)r instanceof AE?(t.gu.addReference(r.key,e),Z2(t,r)):r instanceof kE?(W(Ep,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||bE(t,r.key)):ie(19791,{Cu:r})}function Z2(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(W(Ep,"New document in limbo: "+n),t.du.add(r),Tp(t))}function Tp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new se(He.fromString(e)),r=t.wu.next();t.fu.set(r,new z2(n)),t.mu=t.mu.insert(n,r),yE(t.remoteStore,new Sr(or(uc(n.path)),r,"TargetPurposeLimboResolution",ic.ce))}}async function Fa(t,e,n){const r=de(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=dp.Es(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,c){const f=de(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,v=>M.forEach(v.Ts,k=>f.persistence.referenceDelegate.addReference(p,v.targetId,k)).next(()=>M.forEach(v.Is,k=>f.persistence.referenceDelegate.removeReference(p,v.targetId,k)))))}catch(p){if(!ao(p))throw p;W(fp,"Failed to update sequence numbers: "+p)}for(const p of c){const v=p.targetId;if(!p.fromCache){const k=f.vs.get(v),N=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(N);f.vs=f.vs.insert(v,P)}}}(r.localStore,i))}async function eN(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){W(Ep,"User change. New user:",e.toKey());const r=await fE(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new Y(j.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fa(n,r.Ns)}}function tN(t,e){const n=de(t),r=n.fu.get(e);if(r&&r.Eu)return we().add(r.key);{let s=we();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function DE(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=J2.bind(null,e),e.Ru.H_=j2.bind(null,e.eventManager),e.Ru.Du=U2.bind(null,e.eventManager),e}function nN(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Y2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X2.bind(null,e),e}class Mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return i2(this.persistence,new n2,e.initialUser,this.serializer)}xu(e){return new dE(hp.Vi,this.serializer)}Mu(e){return new d2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mu.provider={build:()=>new Mu};class rN extends Mu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){Ce(this.persistence.referenceDelegate instanceof Ou,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $R(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new dE(r=>Ou.Vi(r,n),this.serializer)}}class Ld{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eN.bind(null,this.syncEngine),await V2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new L2}()}createDatastore(e){const n=pc(e.databaseInfo.databaseId),r=y2(e.databaseInfo);return T2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new S2(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>jy(this.syncEngine,n,0),function(){return by.v()?new by:new f2}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const p=new B2(s,i,o,l,u,c);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);W(fr,"RemoteStore shutting down."),i.da.add(5),await Ua(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ld.provider={build:()=>new Ld};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="FirestoreClient";class sN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Kt.UNAUTHENTICATED,this.clientId=Xf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(xs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(xs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),W(xs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iN(t);W(xs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Oy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Oy(e.remoteStore,s)),t._onlineComponents=e}async function iN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(xs,"Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new Mu)}}else W(xs,"Using default OfflineComponentProvider"),await gh(t,new rN(void 0));return t._offlineComponents}async function VE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(xs,"Using user provided OnlineComponentProvider"),await Fy(t,t._uninitializedComponentsProvider._online)):(W(xs,"Using default OnlineComponentProvider"),await Fy(t,new Ld))),t._onlineComponents}function oN(t){return VE(t).then(e=>e.syncEngine)}async function jd(t){const e=await VE(t),n=e.eventManager;return n.onListen=H2.bind(null,e.syncEngine),n.onUnlisten=W2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=q2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=K2.bind(null,e.syncEngine),n}function aN(t,e,n,r){const s=new OE(r),i=new xE(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>IE(await jd(t),i)),()=>{s.Ku(),t.asyncQueue.enqueueAndForget(async()=>SE(await jd(t),i))}}function lN(t,e,n={}){const r=new ps;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new OE({next:v=>{f.Ku(),o.enqueueAndForget(()=>SE(i,p));const k=v.docs.has(l);!k&&v.fromCache?c.reject(new Y(j.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&v.fromCache&&u&&u.source==="server"?c.reject(new Y(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(v)},error:v=>c.reject(v)}),p=new xE(uc(l.path),f,{includeMetadataChanges:!0,Wa:!0});return IE(i,p)}(await jd(t),t.asyncQueue,e,n,r)),r.promise}function uN(t,e){const n=new ps;return t.asyncQueue.enqueueAndForget(async()=>Q2(await oN(t),e,n)),n.promise}/**
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
 */const cN="ComponentProvider",$y=new Map;function hN(t,e,n,r,s){return new NC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ME(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="firestore.googleapis.com",zy=!0;class By{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=LE,this.ssl=zy}else this.host=e.host,this.ssl=e.ssl??zy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<UR)throw new Y(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ME(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new By({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new By(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uC;switch(r.type){case"firstParty":return new fC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$y.get(n);r&&(W(cN,"Removing Datastore"),$y.delete(n),r.terminate())}(this),Promise.resolve()}}function dN(t,e,n,r={}){var c;t=ir(t,yc);const s=ro(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&Lf(`https://${l}`),i.host!==LE&&i.host!==l&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Ys(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Kt.MOCK_USER;else{f=R0(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new Y(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Kt(v)}t._authCredentials=new cC(new Iw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _c(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}toJSON(){return{type:vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Va(n,vt._jsonSchema))return new vt(e,r||null,new se(He.fromString(n.referencePath)))}}vt._jsonSchemaVersion="firestore/documentReference/1.0",vt._jsonSchema={type:_t("string",vt._jsonSchemaVersion),referencePath:_t("string")};class ms extends _c{constructor(e,n,r){super(e,n,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new se(e))}withConverter(e){return new ms(this.firestore,e,this._path)}}function jE(t,e,...n){if(t=tn(t),Sw("collection","path",e),t instanceof yc){const r=He.fromString(e,...n);return ry(r),new ms(t,null,r)}{if(!(t instanceof vt||t instanceof ms))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return ry(r),new ms(t.firestore,null,r)}}function Vn(t,e,...n){if(t=tn(t),arguments.length===1&&(e=Xf.newId()),Sw("doc","path",e),t instanceof yc){const r=He.fromString(e,...n);return ny(r),new vt(t,null,new se(r))}{if(!(t instanceof vt||t instanceof ms))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return ny(r),new vt(t.firestore,t instanceof ms?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="AsyncQueue";class qy{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new mE(this,"async_queue_retry"),this.lc=()=>{const r=mh();r&&W(Hy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=mh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new ps;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ao(e))throw e;W(Hy,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Or("INTERNAL UNHANDLED ERROR: ",Gy(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=_p.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&ie(47125,{Rc:Gy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Gy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ni extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new qy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qy(e),this._firestoreClient=void 0,await e}}}function UE(t,e){const n=typeof t=="object"?t:Ff(),r=typeof t=="string"?t:Cu,s=tc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=A0("firestore");i&&dN(s,...i)}return s}function Ip(t){if(t._terminated)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fN(t),t._firestoreClient}function fN(t){var r,s,i,o;const e=t._freezeSettings(),n=hN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new sN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._byteString=e}static fromBase64String(e){try{return new An($t.fromBase64String(e))}catch(n){throw new Y(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new An($t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:An._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Va(e,An._jsonSchema))return An.fromBase64String(e.bytes)}}An._jsonSchemaVersion="firestore/bytes/1.0",An._jsonSchema={type:_t("string",An._jsonSchemaVersion),bytes:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lr._jsonSchemaVersion}}static fromJSON(e){if(Va(e,lr._jsonSchema))return new lr(e.latitude,e.longitude)}}lr._jsonSchemaVersion="firestore/geoPoint/1.0",lr._jsonSchema={type:_t("string",lr._jsonSchemaVersion),latitude:_t("number"),longitude:_t("number")};/**
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
 */class Gn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Va(e,Gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Gn(e.vectorValues);throw new Y(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gn._jsonSchemaVersion="firestore/vectorValue/1.0",Gn._jsonSchema={type:_t("string",Gn._jsonSchemaVersion),vectorValues:_t("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=/^__.*__$/;class mN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ma(e,this.data,n,this.fieldTransforms)}}function $E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{dataSource:t})}}class xp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new xp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Lu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if($E(this.dataSource)&&pN.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class gN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pc(e)}V(e,n,r,s=!1){return new xp({dataSource:e,methodName:n,targetDoc:r,path:jt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zE(t){const e=t._freezeSettings(),n=pc(t._databaseId);return new gN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BE(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);WE("Data must be an object, but it was:",o,r);const l=qE(r,o);let u,c;if(i.merge)u=new $n(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const v=kp(e,p,n);if(!o.contains(v))throw new Y(j.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);vN(f,v)||f.push(v)}u=new $n(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new mN(new xn(l),u,c)}class Ap extends Sp{_toFieldTransform(e){return new iR(e.path,new Ea)}isEqual(e){return e instanceof Ap}}function HE(t,e){if(GE(t=tn(t)))return WE("Unsupported field value:",e,t),qE(t,e);if(t instanceof Sp)return function(r,s){if(!$E(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=HE(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:Du(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(s.serializer,i)}}if(r instanceof lr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof An)return{bytesValue:rE(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:up(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Gn)return function(o,l){const u=o instanceof Gn?o.toArray():o;return{mapValue:{fields:{[Dw]:{stringValue:Ow},[Ru]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return ip(l.serializer,f)})}}}}}}(r,s);if(cE(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Zf(r)}`)}(t,e)}function qE(t,e){const n={};return kw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,s)=>{const i=HE(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function GE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof lr||t instanceof An||t instanceof vt||t instanceof Sp||t instanceof Gn||cE(t))}function WE(t,e,n){if(!GE(n)||!xw(n)){const r=Zf(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function kp(t,e,n){if((e=tn(e))instanceof FE)return e._internalPath;if(typeof e=="string")return _N(t,e);throw Lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const yN=new RegExp("[~\\*/\\[\\]]");function _N(t,e,n){if(e.search(yN)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new FE(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Y(j.INVALID_ARGUMENT,l+t+u)}function vN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ru].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ct(o.doubleValue));return new Gn(n)}convertGeoPoint(e){return new lr(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ac(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_a(e));default:return null}}convertTimestamp(e){const n=ws(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Ce(uE(r),9688,{name:e});const s=new va(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class KE extends wN{constructor(e){super(),this.firestore=e}convertBytes(e){return new An(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function EN(){return new Ap("serverTimestamp")}const Wy="@firebase/firestore",Ky="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(kp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TN extends QE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function JE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qs extends QE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",qs._jsonSchema={type:_t("string",qs._jsonSchemaVersion),bundleSource:_t("string","DocumentSnapshot"),bundleName:_t("string"),bundle:_t("string")};class Gl extends qs{data(e={}){return super.data(e)}}class $i{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gl(this._firestore,this._userDataWriter,r.key,r,new Lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Gl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Gl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:SN(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$i._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function SN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
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
 */$i._jsonSchemaVersion="firestore/querySnapshot/1.0",$i._jsonSchema={type:_t("string",$i._jsonSchemaVersion),bundleSource:_t("string","QuerySnapshot"),bundleName:_t("string"),bundle:_t("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){t=ir(t,vt);const e=ir(t.firestore,ni),n=Ip(e);return lN(n,t._key).then(r=>YE(e,t,r))}function Tl(t,e,n){t=ir(t,vt);const r=ir(t.firestore,ni),s=JE(t.converter,e),i=zE(r);return Cp(r,[BE(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qn.none())])}function xN(t){return Cp(ir(t.firestore,ni),[new op(t._key,qn.none())])}function AN(t,e){const n=ir(t.firestore,ni),r=Vn(t),s=JE(t.converter,e),i=zE(t.firestore);return Cp(n,[BE(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qn.exists(!1))]).then(()=>r)}function Jy(t,...e){var c,f,p;t=tn(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Qy(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Qy(e[r])){const v=e[r];e[r]=(c=v.next)==null?void 0:c.bind(v),e[r+1]=(f=v.error)==null?void 0:f.bind(v),e[r+2]=(p=v.complete)==null?void 0:p.bind(v)}let i,o,l;if(t instanceof vt)o=ir(t.firestore,ni),l=uc(t._key.path),i={next:v=>{e[r]&&e[r](YE(o,t,v))},error:e[r+1],complete:e[r+2]};else{const v=ir(t,_c);o=ir(v.firestore,ni),l=v._query;const k=new KE(o);i={next:N=>{e[r]&&e[r](new $i(o,k,v,N))},error:e[r+1],complete:e[r+2]},IN(t._query)}const u=Ip(o);return aN(u,l,s,i)}function Cp(t,e){const n=Ip(t);return uN(n,e)}function YE(t,e,n){const r=n.docs.get(e._key),s=new KE(t);return new qs(t,s,e._key,r,new Lo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){lC(ii),Xs(new _s("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ni(new hC(r.getProvider("auth-internal")),new pC(o,r.getProvider("app-check-internal")),PC(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rr(Wy,Ky,e),rr(Wy,Ky,"esm2020")})();const kN={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},$a=b0(kN);sC($a);const CN=UE($a),RN="usage_events";function yh(t,e={},n="UNKNOWN"){AN(jE(CN,RN),{tool:"shorts_brain",event_type:t,timestamp:EN(),market:n,payload:e}).catch(r=>console.warn("[usage_events] write failed:",r.message))}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=t=>{const e=PN(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>re.createElement("svg",{ref:u,...bN,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:XE("lucide",s),...!i&&!DN(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,f])=>re.createElement(c,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(t,e)=>{const n=re.forwardRef(({className:r,...s},i)=>re.createElement(ON,{ref:i,iconNode:e,className:XE(`lucide-${NN(Yy(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Yy(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],MN=fe("binary",VN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],ZE=fe("brain",LN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Xy=fe("calendar",jN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],e1=fe("chart-column",UN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$N=fe("chevron-down",FN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],BN=fe("chevron-left",zN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qN=fe("chevron-right",HN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],WN=fe("chevron-up",GN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],QN=fe("clipboard-check",KN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],YN=fe("clock",JN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],ZN=fe("cloud-upload",XN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],tP=fe("component",eP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Zy=fe("copy",nP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],sP=fe("database",rP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],oP=fe("download",iP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],lP=fe("flag",aP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],cP=fe("folder-kanban",uP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],e_=fe("funnel",hP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],t1=fe("globe",dP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],pP=fe("layers",fP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],gP=fe("lightbulb",mP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],_P=fe("list-tree",yP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],t_=fe("map-pin",vP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],EP=fe("menu",wP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],IP=fe("palette",TP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],xP=fe("pen",SP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],kP=fe("play",AP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],RP=fe("plus",CP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],PP=fe("power",NP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],DP=fe("refresh-ccw",bP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],VP=fe("rotate-ccw",OP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],LP=fe("save",MP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],UP=fe("settings-2",jP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],$P=fe("sparkles",FP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],n1=fe("target",zP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],r1=fe("trash-2",BP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],s1=fe("trending-up",HP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],GP=fe("users",qP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],KP=fe("wand-sparkles",WP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],JP=fe("x",QP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],XP=fe("zap-off",YP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ud=fe("zap",ZP),On=UE($a),eb=dw($a),i1="https://drive.google.com/corp/drive/folders/18GCtCrz-Bs1YdXKtQs-tjugb6xudULaX?resourcekey=0-gMJCegK7SZkhgJeT_YTjSw",xr=["DAU-SCT","DAC-SCT","GenAI DAU-SCT","Impressions","CTR"],Kr=["India","Indonesia","Japan","South Korea","AUNZ"],Sa={India:"IN",Indonesia:"ID",Japan:"JP","South Korea":"KR",AUNZ:"AUNZ"},Fd={IN:"India",ID:"Indonesia",JP:"Japan",KR:"South Korea",AUNZ:"AUNZ"},$d=["SSC","Shelf","UTS","MVR","UTS SFV","JP Proactive Container"],tb=["kanishak@google.com","danilpalma@google.com","ivanho.wz@gmail.com","ivho@google.com"],nb={APAC:.4,INDIA:.16,INDONESIA:.29,JAPAN:1.2,"SOUTH KOREA":1.08,AUNZ:1.56,IN:.16,ID:.29,JP:1.2,KR:1.08},rb=["Effects","GenAI","Topical Moments","BAU","Others"],Mt=["female","male","total"],sb={female:"FEMALE",male:"MALE",total:"GenPop"},ln=["18-24","25-34","18-34","35+","total"],ib={"18-24":"18-24","25-34":"25-34","18-34":"18-34","35+":"35-44",total:"GenPop"},ob=[{id:"Upload",label:"Data Ingestion",icon:ZN},{id:"OKR",label:"Shorts OKR Performance",icon:n1},{id:"Global Hub",label:"Global Holdback",icon:t1},{id:"Market Hub",label:"Campaign Holdback",icon:pP}],_h=[{id:"AlwaysOn",label:"Always-On",icon:Ud},{id:"ScaledCreation",label:"Scaled Creation",icon:$P},{id:"Trends",label:"Trends",icon:s1},{id:"CultMo",label:"CultMo",icon:tP},{id:"ArtMo",label:"ArtMo",icon:IP},{id:"GenAI Hub",label:"GenAI Hub",icon:KP}],Be=t=>(t||"").toString().replace(/['"]/g,"").replace(/\u00A0/g," ").trim(),ut=t=>{try{return Be(t).toUpperCase().replace(/[^\p{L}\p{N}]/gu,"")}catch{return Be(t).toUpperCase().replace(/[\s\-_&!?,.()'"！]/g,"")}},Wt=(t,e)=>ut(t)===ut(e),ab=t=>ut(t).replace(/INDIA$|INDONESIA$|JAPAN$|SOUTHKOREA$|AUNZ$|IN$|ID$|JP$|KR$/g,"").trim(),lb=t=>{var n,r;const e=((t.country||"")+" "+(((n=t.meta)==null?void 0:n.tab)||"")+" "+(((r=t.meta)==null?void 0:r.subTab)||"")).toLowerCase();return e.includes("effect")?"Effects":e.includes("genai")||e.includes("gen ai")?"GenAI":e.includes("topical")||e.includes("cultmo")||e.includes("artmo")?"Topical Moments":e.includes("bau")||e.includes("alwayson")||e.includes("always-on")||e.includes("shelf")||e.includes("ssc")||e.includes("uts")||e.includes("mvr")||e.includes("scaled")?"BAU":"Others"},ub=t=>t===0?"0.00":t==="NA"||t===null||t===void 0||isNaN(t)?"-":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t),kr=t=>{const e=Be(t);if(!e||e==="-"||e==="Unknown")return null;try{if(e.includes("-")&&e.split("-")[0].length===4)return e;const n=e.split(/[-/]/);if(n.length===3){let s=parseInt(n[0],10),i=parseInt(n[1],10),o=parseInt(n[2],10);o<100&&(o+=2e3);let l,u;return s>12?(u=s,l=i):i>12?(l=s,u=i):(u=s,l=i),l>12?null:`${o}-${l.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return isNaN(r.getTime())?null:r.toISOString().split("T")[0]}catch{return null}},o1=(t,e)=>{const n=kr(t),r=kr(e);if(!n||!r)return 0;try{const s=new Date(n),o=new Date(r).getTime()-s.getTime(),l=Math.floor(o/(1e3*60*60*24));return l>=0?l+1:0}catch{return 0}},a1=(t,e)=>{const n=kr(t),r=kr(e);if(!n||!r)return!1;try{return new Date(n)>=new Date(r)}catch{return!1}},Qr=t=>{const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];i==='"'?r=!r:i===","&&!r?(e.push(n.trim()),n=""):n+=i}return e.push(n.trim()),e},Me=(t,e)=>{const n=t.map(s=>(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"")),r=e.map(s=>s.toUpperCase().replace(/[^A-Z0-9]/g,""));for(const s of r){const i=n.indexOf(s);if(i!==-1)return i}return n.findIndex(s=>r.some(i=>s.includes(i)))},cb=(t,e,n=null)=>{var i,o;const r=ut(t),s=ab(t);if(n){const l=ut(n);if((i=e[l])!=null&&i[r])return e[l][r];if((o=e[l])!=null&&o[s])return e[l][s]}for(const l in e){if(e[l][r])return e[l][r];if(e[l][s])return e[l][s]}return{}},n_=t=>{const e=t?new Date(t):new Date;if(isNaN(e.getTime()))return`SNAPSHOT-${Date.now()}`;const n=e.getFullYear(),r=new Date(n,0,1),s=Math.floor((e-r)/(24*60*60*1e3)),i=Math.ceil((e.getDay()+1+s)/7);return`${n}-W${i.toString().padStart(2,"0")}`},hb=(t,e)=>e?{cardBg:"bg-[#111]",color:"text-[#444]",accent:"bg-[#444]"}:t>=100?{cardBg:"bg-emerald-950/20",color:"text-emerald-400",accent:"bg-emerald-500"}:t>=80?{cardBg:"bg-amber-950/20",color:"text-amber-400",accent:"bg-amber-500"}:{cardBg:"bg-red-950/20",color:"text-red-400",accent:"bg-red-500"},Il=t=>{const e={...t,metrics:{}};return xr.forEach(n=>{t.metrics[n]&&Mt.forEach(r=>{ln.forEach(s=>{const i=t.metrics[n][r][s];i&&(i.v!==0||i.abs!==0||i.sig!==0||i.isPaused||i.v==="NA")&&(e.metrics[n]||(e.metrics[n]={}),e.metrics[n][r]||(e.metrics[n][r]={}),e.metrics[n][r][s]=i)})})}),e},db=t=>{const e={...t,metrics:{}};return xr.forEach(n=>{e.metrics[n]={female:{},male:{},total:{}},Mt.forEach(r=>{ln.forEach(s=>{var i,o,l;e.metrics[n][r][s]=((l=(o=(i=t.metrics)==null?void 0:i[n])==null?void 0:o[r])==null?void 0:l[s])||{v:0,sig:0,abs:0,isPaused:!1,launchDate:null}})})}),e},Sl=(t,e={},n={},r=["Campaign","Campaign Name","Country","Market"],s=!1,i=null,o=!1,l=!1)=>{try{const u=t.split(/\r?\n/).filter(I=>I.trim()!=="");if(u.length<2)return e;const c=Qr(u[0]),f=Me(c,r),p=Me(c,["Country","Market","Market Name"]),v=Me(c,["Value Type","Metric Type"]),k=Me(c,["Slice","Segment"]),N=Me(c,["Date","Reporting Date","Day","Latest Date"]),P=Me(c,["Trend Start Date","Trend Start"]),V=Me(c,["Trend End Date","Trend End"]);if(f===-1)return e;const S={...e};return u.slice(1).forEach(I=>{const A=Qr(I),D=v!==-1?(A[v]||"").replace(/['"]/g,"").trim().toUpperCase():"",L=k!==-1?(A[k]||"").replace(/['"]/g,"").trim().toUpperCase():"",F=N!==-1?kr(A[N]):null,g=!s&&(D==="RATIO (%)"||D==="RATIO"||D.includes("LIFT")||D==="")&&(L==="CONTROL"||L===""||L==="TOTAL"),y=s&&(D.includes("DELTA")||D===""||D==="TOTAL"||D.includes("IMPRESSIONS")||D.includes("ABSOLUTE")||D.includes("VOLUME")||D.includes("CTR"))&&(L==="CONTROL"||L==="TEST"||L==="TREATMENT"||L===""||L==="TOTAL"),w=D.includes("TREND FAVORABILITY")&&(L==="CONTROL"||L===""||L==="TOTAL");if(!g&&!w&&!y)return;const E=Be(A[f])||"Unknown";let x=p!==-1?Be(A[p]):i||"APAC",C=Fd[x.toUpperCase()]||x;const T=cb(E,n,C==="APAC"?null:C);C==="APAC"&&T&&T.market&&(C=T.market),C==="APAC"&&(C="India");const te=`${C}_${E}`;let ye=null;const wt=Me(c,["Gender","Sex"]);if(wt!==-1){const z=(A[wt]||"").toLowerCase().trim();z==="female"||z==="f"?ye="female":z==="male"||z==="m"?ye="male":(z==="total"||z==="all"||z==="genpop"||z==="gen pop")&&(ye="total")}else ye="total";if(!ye)return;let pe="total";const B=Me(c,["Age","Age Group"]);if(B!==-1){const z=(A[B]||"").toLowerCase().trim();z.includes("18-24")?pe="18-24":z.includes("25-34")?pe="25-34":z.includes("18-34")?pe="18-34":z.includes("35")&&(pe="35+")}const X=o||ut(E).includes("GLOBALHOLDBACK");if(!S[te]){const z=P!==-1?kr(A[P]):null,ce=V!==-1?kr(A[V]):null;S[te]={country:E,market:C,metrics:{},isAnchor:X,campaignStartDate:z||T.campaignStartDate||null,campaignEndDate:ce||T.campaignEndDate||null,optimisationEndDate:T.optimisationEndDate||F,segmentTag:T.subTab||"Campaign Hub",meta:T,dataMinDate:F,dataMaxDate:F,explicitTrendStart:z,explicitTrendEnd:ce},xr.forEach(_e=>{S[te].metrics[_e]={female:{},male:{},total:{}},Mt.forEach(We=>{ln.forEach(at=>S[te].metrics[_e][We][at]={v:0,sig:0,abs:0,isPaused:!1,launchDate:null})})})}xr.forEach(z=>{const ce={"DAU-SCT":["DAU-SCT","DAILY SHORTS CREATION TOOL ACTIVE USERS"],"DAC-SCT":["DAC-SCT","DAILY SHORTS CONVERTERS"],"GenAI DAU-SCT":["GENAI DAU","GENAI DAILY ACTIVE USERS"],Impressions:["IMPRESSIONS","TOTAL IMPRESSIONS","REACH","IMPS"],CTR:["CTR","CLICK THROUGH RATE","CLICK-THROUGH RATE"]},_e=c.findIndex(ke=>{const nt=ke.toUpperCase();return(ce[z]||[]).some(on=>nt.includes(on))&&!(nt.includes("CONFIDENCE")||nt.includes("BOUND"))});if(_e===-1)return;const We=(A[_e]||"").replace(/['"]/g,"").trim(),at=parseFloat(We.replace(/[^\d.-]/g,""))||0,dt=S[te].meta.targeting;let ft=!1;if(X||l)ft=!0;else if(dt){const ke=dt.ages.length===0||dt.ages.includes(pe),nt=dt.genders.length===0||dt.genders.includes(ye);ft=ke&&nt}const lt=z==="GenAI DAU-SCT",zt=(S[te].meta.tab||"").toLowerCase()==="genai hub",Ct=ft&&(!lt||zt||X),me=Ct?at:"NA";if(g)(me!=="NA"&&me!==0||S[te].metrics[z][ye][pe].v===0||S[te].metrics[z][ye][pe].v==="NA")&&(S[te].metrics[z][ye][pe].v=me);else if(y)z==="Impressions"||z==="CTR"?(me!=="NA"&&me!==0||S[te].metrics[z][ye][pe].v===0||S[te].metrics[z][ye][pe].v==="NA")&&(S[te].metrics[z][ye][pe].v=me):(me!=="NA"&&me!==0||S[te].metrics[z][ye][pe].abs===0||S[te].metrics[z][ye][pe].abs==="NA")&&(S[te].metrics[z][ye][pe].abs=me);else if(w&&Ct){const ke=We.toUpperCase(),nt=ke.includes("POSITIVE")||ke.includes("SSP")?1:ke.includes("NEGATIVE")||ke.includes("SSN")?-1:0;nt!==0&&(S[te].metrics[z][ye][pe].sig=nt)}})}),S}catch(u){return console.error("CSV Parse Error:",u),e}},r_=t=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch{}document.body.removeChild(e)},l1=({className:t})=>m.jsxs("svg",{className:t,viewBox:"0 0 1443 1250",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M485.29 0L0 839.25l242.42 410.74 485.29-839.25H485.29z"}),m.jsx("path",{d:"M957.66 0l-242.43 419.63 485.29 830.36 242.54-419.63L957.66 0z",opacity:"0.8"}),m.jsx("path",{d:"M524.23 839.25l-242.42 410.74h960.54l242.42-410.74H524.23z",opacity:"0.6"})]}),s_=({activeMetrics:t,toggleMetric:e,handleAllToggle:n,allowedMetrics:r=xr})=>m.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[m.jsx("div",{className:"flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]",children:r.map(s=>m.jsx("button",{type:"button",onClick:()=>e(s),className:`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${t.includes(s)?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:s},s))}),m.jsx("button",{type:"button",onClick:()=>n(),className:`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${t.length===r.length?"bg-white text-black border-white":"bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]"}`,children:t.length===r.length?"Selective View":"Sync All Metrics"})]}),i_=({data:t,activeMetrics:e,latestGlobalDate:n,isCampaignView:r=!1,hideDates:s=!1,isAlwaysOn:i=!1})=>{const o=re.useRef(null),l={female:{1:"bg-blue-900/40 text-blue-100",2:"bg-blue-900/20",3:"bg-blue-950/40 text-blue-400"},male:{1:"bg-purple-900/40 text-purple-100",2:"bg-purple-900/20",3:"bg-purple-950/40 text-purple-400"},total:{1:"bg-amber-900/80 text-amber-50",2:"bg-amber-800/20",3:"bg-amber-950 text-amber-400 font-bold"}},u=c=>{o.current&&o.current.scrollBy({left:c==="left"?-600:600,behavior:"smooth"})};return!t||t.length===0?m.jsxs("div",{className:"py-40 text-center flex flex-col items-center justify-center gap-6",children:[m.jsx("div",{className:"p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]",children:m.jsx(XP,{className:"w-12 h-12 text-[#3a3a3a] animate-pulse"})}),m.jsx("p",{className:"text-[#808080] font-bold text-sm uppercase tracking-widest",children:"No Data Available"})]}):m.jsxs("div",{className:"relative group/table",children:[m.jsx("button",{onClick:()=>u("left"),className:"absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:m.jsx(BN,{className:"w-6 h-6"})}),m.jsx("button",{onClick:()=>u("right"),className:"absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:m.jsx(qN,{className:"w-6 h-6"})}),m.jsx("div",{ref:o,className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto no-scrollbar scroll-smooth",children:m.jsxs("table",{className:"w-full text-center border-collapse",children:[m.jsxs("thead",{children:[m.jsxs("tr",{className:"text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:[m.jsx("th",{rowSpan:3,className:"px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[300px]",children:i?"Trend Identifier":r?"Campaign Entity":"Country / Market"}),Mt.map((c,f)=>m.jsx("th",{colSpan:ln.length*e.length,className:`py-6 border-white/10 ${l[c][1]} ${f<Mt.length-1?"border-r-2 border-white/20":""}`,children:m.jsxs("div",{className:"flex items-center justify-center gap-3",children:[m.jsx(GP,{className:"w-4 h-4 opacity-50"}),sb[c]]})},c))]}),m.jsx("tr",{className:"text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:Mt.map(c=>m.jsx(_r.Fragment,{children:ln.map((f,p)=>m.jsx("th",{colSpan:e.length,className:`py-4 transition-colors ${l[c][2]} ${p===ln.length-1&&Mt.indexOf(c)<Mt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:ib[f]},f))},c))}),m.jsx("tr",{className:"text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]",children:Mt.map(c=>m.jsx(_r.Fragment,{children:ln.map((f,p)=>m.jsx(_r.Fragment,{children:e.map((v,k)=>m.jsx("th",{className:`py-3 px-3 font-mono ${l[c][3]} ${p===ln.length-1&&k===e.length-1&&Mt.indexOf(c)<Mt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:v.includes("GenAI")?"GenAI":v==="Impressions"?"Imprs":v.split("-")[0]},v))},f))},c))})]}),m.jsx("tbody",{className:"divide-y divide-white/5",children:t.map((c,f)=>{var A,D,L;const p=!!c.isAnchor,v=(L=(D=(A=c.metrics)==null?void 0:A[e[0]||"DAU-SCT"])==null?void 0:D.total)==null?void 0:L.total,k=v!=null&&v.isPaused&&(v!=null&&v.launchDate)&&v.launchDate!=="Ended"?v.launchDate:null,N=i?c.explicitTrendStart||c.dataMinDate||c.campaignStartDate:c.campaignStartDate||c.explicitTrendStart||c.dataMinDate,P=c.campaignEndDate||k||c.optimisationEndDate;let S=i?c.explicitTrendEnd||c.dataMaxDate||P:c.campaignEndDate||c.explicitTrendEnd||c.dataMaxDate||c.optimisationEndDate;!i&&n&&S&&new Date(S)>new Date(n)&&(S=n);const I=o1(N,S);return m.jsxs("tr",{className:`transition-all duration-200 ${p?"bg-white/[0.05]":"hover:bg-white/[0.03]"}`,children:[m.jsx("td",{className:`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 bg-[#111] ${p?"text-blue-400 font-bold":"text-[#e0e0e0]"}`,children:m.jsxs("div",{className:"flex flex-col gap-1.5",children:[m.jsx("span",{className:"font-bold text-[12px] uppercase tracking-tight",children:String(c.country||"Unknown")}),!s&&!p&&(N||i)&&m.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 p-2 rounded bg-black/40 border border-white/5 shadow-inner",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Xy,{className:"w-3 h-3 text-blue-400"}),m.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[m.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend Start:":"Start:"}),String(N||"N/A")]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Xy,{className:"w-3 h-3 text-amber-400"}),m.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[m.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend End:":"End:"}),String(r&&c.campaignEndDate?c.campaignEndDate:S||"Active")]})]}),m.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[m.jsx(YN,{className:"w-3 h-3 text-emerald-400"}),m.jsxs("span",{className:"text-[9px] font-bold tracking-tighter uppercase text-emerald-400",children:[i?"Trend Days Live:":"Days Live:"," ",I]})]})]})]})}),Mt.map(F=>m.jsx(_r.Fragment,{children:ln.map((g,y)=>m.jsx(_r.Fragment,{children:e.map(w=>{const E=c.metrics[w][F][g],x=y===ln.length-1&&e.indexOf(w)===e.length-1;let C="text-slate-500 font-medium",T="";const te=E.isPaused&&!p;return te?(C="text-[#808080] font-bold",T="bg-[#1a1a1a]"):E.v!=="NA"&&E.sig===-1?(C="text-red-500 font-bold",T="bg-red-500/10"):E.v!=="NA"&&E.sig===1?(C="text-emerald-500 font-bold",T="bg-emerald-500/10"):E.v!==0&&E.v!=="NA"&&(C="text-slate-100 font-bold"),m.jsx("td",{className:`py-5 px-3 font-mono text-[13px] tabular-nums ${C} ${T} ${x&&Mt.indexOf(F)<Mt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:m.jsx("div",{className:"flex flex-col items-center text-center",children:te?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"leading-none uppercase",children:"Paused"}),m.jsx("span",{className:"text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic",children:String(E.launchDate||"No Data")})]}):E.v==="NA"?m.jsx("span",{className:"text-gray-500 opacity-50 font-bold",children:"NA"}):m.jsxs(m.Fragment,{children:[m.jsx("span",{children:p&&(w==="Impressions"||w==="CTR")&&E.v===0?"NA":w==="Impressions"?ub(E.v):w==="CTR"?`${E.v.toFixed(2)}%`:E.v===0?"0.00":E.v>0?`+${E.v.toFixed(2)}`:`${E.v.toFixed(2)}`}),E.abs!==0&&E.abs!=="NA"&&w!=="Impressions"&&w!=="CTR"&&m.jsxs("span",{className:"text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none",children:["(",E.abs>0?`+${Math.round(E.abs).toLocaleString()}`:Math.round(E.abs).toLocaleString(),")"]})]})})},`${f}-${w}-${F}-${g}`)})},g))},F))]},`${f}-${c.country}`)})})]})})]})},fb=({globalData:t,regionalData:e,latestDate:n,quarterStart:r})=>{const[s,i]=re.useState(null),[o,l]=re.useState({}),[u,c]=re.useState([]),[f,p]=re.useState(!1),[v,k]=re.useState(new Set),[N,P]=re.useState(null),[V,S]=re.useState({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}),I=g=>{P(g),setTimeout(()=>P(null),2e3)},A=re.useMemo(()=>{if(!n)return"TBD";const g=new Date("2026-06-30"),y=new Date(n),w=Math.ceil((g-y)/(1e3*60*60*24));return w>0?w:0},[n]),D=re.useMemo(()=>["APAC","India","Indonesia","Japan","South Korea","AUNZ"].map(g=>{var T,te,ye,wt;const y=t.find(pe=>Wt(pe.country,g)||Wt(pe.country,Sa[g])),w=(wt=(ye=(te=(T=y==null?void 0:y.metrics)==null?void 0:T["DAU-SCT"])==null?void 0:te.total)==null?void 0:ye.total)==null?void 0:wt.v,E=w==="NA"||isNaN(w)||w===void 0?0:w,x=nb[g.toUpperCase()]||.4,C=x>0?E/x*100:0;return{market:g.toUpperCase(),actual:E,target:x,perfIndex:C,isOffline:!y||w==="NA"}}),[t]),L=re.useMemo(()=>{const g=[],y=["SHELF","SSC","UTS","MVR","UTSSFV"];return Kr.forEach(E=>{(e[E]||[]).forEach((C,T)=>{var ft,lt,zt,Ct;if(a1(C.optimisationEndDate,C.campaignEndDate))return;const te=((ft=C.metrics)==null?void 0:ft["DAU-SCT"])||{};if((zt=(lt=te.total)==null?void 0:lt.total)!=null&&zt.isPaused)return;const ye=o1(C.campaignStartDate,C.optimisationEndDate),wt=ye>=14,pe=Sa[E]||E.toUpperCase(),B=ut(C.country),X=y.some(me=>B.includes(me)),z=(me,ke,nt)=>{var Q,J,ee,le,Ue;if(((J=(Q=te[me])==null?void 0:Q[ke])==null?void 0:J.v)==="NA")return;const sn=(ee=te[me])==null?void 0:ee[ke];if(!sn||sn.isPaused)return;const on=sn.v||0,O=sn.sig===-1,$=wt?"PAUSE":"MAINTAIN",q=O?"stat sig negative":"neutral negative";let G="";if(nt==="G"&&ke!=="total"&&on>=0){const Je=(le=te.male)==null?void 0:le[ke],De=(Ue=te.female)==null?void 0:Ue[ke];if((Je==null?void 0:Je.v)!=="NA"&&(De==null?void 0:De.v)!=="NA"&&((Je==null?void 0:Je.v)||0)<-1e-4&&((De==null?void 0:De.v)||0)<-1e-4){const pt=wt?"Pause":"Maintain (Learning Phase)",rt=wt?"":` observed but hasn't reached maturity (Current: ${ye}d / Required: 14d)`;wt&&X?G=`${pe} ${C.country} - Pause G${ke} given negative lift across both males (${Je.v.toFixed(2)}%) and females (${De.v.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:G=`${pe} ${C.country} - ${pt} G${ke} given negative lift across both males (${Je.v.toFixed(2)}%) and females (${De.v.toFixed(2)}%)${rt}`}}G||(wt?X?G=`${pe} ${C.country} - Pause ${nt}${ke} given ${q} (${on.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:G=`${pe} ${C.country} - Pause ${nt}${ke} given ${q} (${on.toFixed(2)}%)`:G=`${pe} ${C.country} - Maintain ${nt}${ke} (Learning Phase): Negative lift (${on.toFixed(2)}%) observed but hasn't reached maturity (Current: ${ye}d / Required: 14d).`),g.push({id:`CAMP_${E}_${T}_P_${me}_${ke}`,country:pe,campaign:C.country,age:ke==="total"?"GenPop":ke,gender:me==="total"?"GenPop":me.toUpperCase(),recommendation:$,justification:G})},ce=((Ct=te.total)==null?void 0:Ct.total)||{v:0,sig:0};!X&&ce.v!=="NA"&&ce.sig===1&&ce.v>.001&&g.push({id:`CAMP_${E}_${T}_SC`,country:pe,campaign:C.country,age:"GenPop",gender:"GenPop",recommendation:"SCALE",justification:`${pe} ${C.country} - Scale GenPop: Stat-sig positive lift (+${ce.v.toFixed(2)}%) observed.`});const _e=me=>{let ke=[];return["18-24","25-34","35+"].forEach(nt=>{var sn,on,O,$;((on=(sn=te[me])==null?void 0:sn[nt])==null?void 0:on.v)!=="NA"&&((($=(O=te[me])==null?void 0:O[nt])==null?void 0:$.v)||0)<-1e-4&&ke.push(nt)}),ke},We=_e("male"),at=_e("female"),dt=We.filter(me=>at.includes(me));dt.forEach(me=>z("total",me,"G")),We.filter(me=>!dt.includes(me)).forEach(me=>z("male",me,"M")),at.filter(me=>!dt.includes(me)).forEach(me=>z("female",me,"F"))})}),[...g,...u].filter(E=>!v.has(E.id)).map(E=>o[E.id]?{...E,...o[E.id]}:E)},[e,u,v,o]),F=()=>{V.campaign&&(c(g=>[...g,{...V,id:`MANUAL_${Date.now()}`}]),p(!1),S({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}))};return m.jsxs("div",{className:"w-full max-w-[1600px] mx-auto pb-32",children:[N&&m.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase shadow-xl",children:N}),m.jsx("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8",children:m.jsxs("div",{className:"space-y-4",children:[m.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase",children:"Shorts OKR Performance"}),m.jsxs("div",{className:"flex flex-wrap gap-10 pt-4",children:[m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Quarter Start"}),m.jsx("p",{className:"text-lg font-bold text-white",children:r||"TBD"})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Reporting Date"}),m.jsx("p",{className:"text-lg font-bold text-emerald-400",children:String(n||"Awaiting Data...")})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Days Left"}),m.jsxs("p",{className:"text-lg font-bold text-amber-400",children:[A," ",m.jsx("span",{className:"text-[10px] text-[#808080] ml-1 font-normal",children:"remaining"})]})]})]})]})}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:D.map((g,y)=>{const w=hb(g.perfIndex,g.isOffline);return m.jsxs("div",{className:`relative ${w.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555] shadow-sm`,children:[m.jsxs("div",{className:"flex justify-between items-start mb-6",children:[m.jsx("h3",{className:"text-xl font-bold text-white uppercase",children:g.market}),!g.isOffline&&m.jsx(e1,{className:`w-5 h-5 ${w.color}`})]}),m.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[m.jsxs("span",{className:"text-3xl font-bold text-white",children:[g.perfIndex.toFixed(1),"%"]}),m.jsx("span",{className:"text-[9px] font-bold text-[#808080] uppercase tracking-tighter",children:"INDEX"})]}),m.jsx("div",{className:"relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4",children:m.jsx("div",{className:`h-full ${w.accent} transition-all duration-1000`,style:{width:`${Math.min(g.perfIndex,100)}%`}})}),m.jsxs("div",{className:"flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]",children:[m.jsxs("div",{className:"text-[#808080] uppercase",children:["Actual: ",m.jsxs("span",{className:"text-white",children:[g.actual>0?"+":"",g.actual.toFixed(2),"%"]})]}),m.jsxs("div",{className:"text-[#808080] uppercase",children:["Target: ",m.jsxs("span",{className:"text-[#b0b0b0]",children:[g.target.toFixed(2),"%"]})]})]})]},y)})}),m.jsxs("div",{className:"space-y-8",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]",children:m.jsx(gP,{className:"w-6 h-6 text-amber-400"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-2xl font-bold text-white uppercase",children:"Strategic Guidance"}),m.jsx("p",{className:"text-[#808080] text-xs uppercase tracking-widest mt-1 font-medium",children:"Data-Driven Directives & Overrides"})]})]}),m.jsxs("div",{className:"flex flex-wrap gap-3",children:[m.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all active:scale-95",children:[m.jsx(RP,{className:"w-4 h-4"})," Add Pointer"]}),m.jsxs("button",{onClick:()=>{if(L.length===0)return;const g="Market	Entity	Age	Gender	Directive	Justification",y=L.map(w=>`${w.country}	${w.campaign}	${w.age}	${w.gender}	${w.recommendation}	${w.justification}`).join(`
`);r_(`${g}
${y}`),I("Matrix Copied")},className:"flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] shadow-lg transition-all active:scale-95",children:[m.jsx(Zy,{className:"w-4 h-4"})," Copy All"]}),m.jsxs("button",{onClick:()=>{k(new Set),l({}),c([]),I("Matrix Restored")},className:"flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a] active:scale-95",children:[m.jsx(VP,{className:"w-4 h-4"})," Restore"]})]})]}),f&&m.jsxs("div",{className:"bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6 shadow-2xl animate-in fade-in zoom-in duration-200",children:[m.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Market"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase text-white",value:V.country,onChange:g=>S(y=>({...y,country:g.target.value.toUpperCase()}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Entity"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",placeholder:"e.g. Veo",value:V.campaign,onChange:g=>S(y=>({...y,campaign:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Age"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:V.age,onChange:g=>S(y=>({...y,age:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Gender"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:V.gender,onChange:g=>S(y=>({...y,gender:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Directive"}),m.jsxs("select",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white",value:V.recommendation,onChange:g=>S(y=>({...y,recommendation:g.target.value})),children:[m.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),m.jsx("option",{value:"SCALE",children:"SCALE"}),m.jsx("option",{value:"PAUSE",children:"PAUSE"})]})]})]}),m.jsx("textarea",{className:"w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] mb-4 resize-none",value:V.justification,onChange:g=>S(y=>({...y,justification:g.target.value})),placeholder:"Context..."}),m.jsxs("div",{className:"flex justify-end gap-3",children:[m.jsx("button",{type:"button",onClick:()=>p(!1),className:"bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg font-bold text-[10px] uppercase border border-[#3a3a3a]",children:"Cancel"}),m.jsx("button",{onClick:F,className:"bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase shadow-lg",children:"Confirm"})]})]}),m.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto shadow-sm",children:[m.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold",children:[m.jsx("th",{className:"px-8 py-6 text-left",children:"Market"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Entity"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Age"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Gender"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Directive"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Justification"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Action"})]})}),m.jsx("tbody",{className:"divide-y divide-white/5",children:L.map(g=>{var y,w;return m.jsxs("tr",{className:`hover:bg-white/[0.02] group/row transition-colors ${g.recommendation==="PAUSE"?"bg-red-500/[0.03]":""}`,children:[m.jsx("td",{className:"px-8 py-4 font-bold uppercase text-blue-400",children:g.country}),m.jsx("td",{className:"px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]",children:g.campaign}),m.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase font-mono",children:g.age}),m.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase font-mono",children:g.gender}),m.jsx("td",{className:"px-8 py-4 font-bold",children:s===g.id?m.jsxs("select",{className:"bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] text-white",value:((y=o[g.id])==null?void 0:y.recommendation)||g.recommendation,onChange:E=>l(x=>({...x,[g.id]:{...x[g.id]||g,recommendation:E.target.value}})),children:[m.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),m.jsx("option",{value:"SCALE",children:"SCALE"}),m.jsx("option",{value:"PAUSE",children:"PAUSE"})]}):m.jsx("span",{className:g.recommendation==="PAUSE"?"text-red-400":g.recommendation==="SCALE"?"text-emerald-400":g.justification.includes("Learning")?"text-blue-400":"text-amber-400",children:g.recommendation})}),m.jsx("td",{className:"px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed",children:s===g.id?m.jsx("textarea",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] min-h-[60px] resize-none",value:((w=o[g.id])==null?void 0:w.justification)||g.justification,onChange:E=>l(x=>({...x,[g.id]:{...x[g.id]||g,justification:E.target.value}}))}):g.justification}),m.jsx("td",{className:"px-8 py-5 text-center",children:m.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity",children:[s===g.id?m.jsx("button",{onClick:()=>i(null),className:"p-2.5 rounded-xl bg-emerald-600 text-white",children:m.jsx(LP,{className:"w-4 h-4"})}):m.jsx("button",{onClick:()=>i(g.id),className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white",children:m.jsx(xP,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>{r_(`${g.country}	${g.campaign}	${g.age}	${g.gender}	${g.recommendation}	${g.justification}`),I("Row Copied")},className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400",children:m.jsx(Zy,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>k(E=>new Set([...E,g.id])),className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500",children:m.jsx(r1,{className:"w-4 h-4"})})]})})]},g.id)})})]}),L.length===0&&m.jsx("div",{className:"p-20 text-center text-[#555] font-bold uppercase tracking-widest text-[10px]",children:"Matrix Empty"})]})]})]})},o_=({type:t,title:e,icon:n,tag:r,uploadedFiles:s,handleFileUpload:i})=>{const o=t==="pct",l=o?"bg-[#1a1500]":"bg-[#0a0a0a]",u=o?"border-amber-500/30":"border-blue-500/30",c=o?"text-amber-500":"text-blue-500",f=o?"bg-amber-500/20":"bg-blue-500/20";return m.jsxs("div",{className:`p-6 rounded-lg border ${u} ${l} mb-6 transition-all shadow-xl`,children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:`p-2 rounded-lg flex items-center justify-center ${f} ${c}`,children:m.jsx(n,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:`text-lg font-bold uppercase tracking-tight ${c}`,children:e}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:r})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left items-stretch",children:[m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:p=>i(t,"global",p.target.files[0])}),m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].global?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(t1,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"Global Hub Master"}),m.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].global?s[t].global.name:"PUSH_MASTER_FILE"})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].countryHB).length>0?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(lP,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Market Hub Nodes"}),m.jsx("div",{className:"w-full grid grid-cols-5 gap-1 px-1",children:Kr.map(p=>m.jsxs("div",{className:"relative aspect-square group/item",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:v=>i(t,"countryHB",v.target.files[0],p)}),m.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].countryHB[p]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:m.jsx("span",{className:"text-[7px] font-black uppercase",children:Sa[p]})})]},p))})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].alwaysOn).length>0?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Ud,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Always-On Trends"}),m.jsx("div",{className:"w-full grid grid-cols-2 gap-1.5 px-2",children:$d.filter(p=>p!=="JP Proactive Container").map(p=>m.jsxs("div",{className:"relative h-7 group/item",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:v=>i(t,"alwaysOn",v.target.files[0],p)}),m.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].alwaysOn[p]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:m.jsx("span",{className:"text-[7px] font-black uppercase",children:p})})]},p))})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:p=>i(t,"jpProactive",p.target.files[0])}),m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].jpProactive?"bg-red-500/10 text-red-500":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Ud,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"JP Proactive Container"}),m.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].jpProactive?s[t].jpProactive.name:"PUSH_JP_PROACTIVE_CSV"})]})]})]})},pb=({uploadedFiles:t,handleFileUpload:e,startAnalysis:n,isAnalyzing:r})=>m.jsx("div",{className:"min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0] overflow-y-auto no-scrollbar",children:m.jsxs("div",{className:"max-w-[1500px] w-full z-10 text-center",children:[m.jsxs("div",{className:"mb-12",children:[m.jsx("div",{className:"inline-block mb-4",children:m.jsx("div",{className:"bg-[#FF0000] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-red-500/20",children:m.jsx(ZE,{className:"text-white w-8 h-8"})})}),m.jsxs("h1",{className:"text-4xl font-bold tracking-tighter mb-1 uppercase flex items-center justify-center gap-5",children:["Shorts Brain ",m.jsx("span",{className:"text-[#FF0000]",children:"2.0"}),m.jsx("a",{href:i1,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#555] hover:text-white hover:bg-white/10 transition-all hover:scale-105 group shadow-lg",title:"Open Resource Drive",children:m.jsx(l1,{className:"w-6 h-6"})})]}),m.jsx("p",{className:"text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase",children:"APAC Marketing Incrementality Hub"})]}),m.jsxs("div",{className:"p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all shadow-xl",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500",children:m.jsx(UP,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-emerald-500",children:"Structural Metadata Configuration"}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Campaign Definitions & State Instructions"})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:[m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.campaignInfo?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(QN,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"structural hierarchy"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.campaignInfo?t.shared.campaignInfo.name:"PUSH_STRUCTURAL_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("shared","campaignInfo",s.target.files[0])})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.pauseRelive?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(PP,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"State Instructions"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.pauseRelive?t.shared.pauseRelive.name:"PUSH_INSTRUCTIONS_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("shared","pauseRelive",s.target.files[0])})]})]})]}),m.jsx(o_,{type:"pct",title:"Ratio-Based Analysis",tag:"Relative Lift Streams (%)",icon:s1,uploadedFiles:t,handleFileUpload:e}),m.jsx(o_,{type:"abs",title:"Volume-Based Analysis",tag:"Discrete Delta Streams (Delta)",icon:MN,uploadedFiles:t,handleFileUpload:e}),m.jsxs("div",{className:"p-6 rounded-lg border border-purple-500/30 bg-[#0d0a1a] mb-6 transition-all shadow-xl",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500",children:m.jsx(n1,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-purple-500",children:"Attribution Analysis"}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Marketing Pressure & Reach Metrics"})]})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.attribution.impressions?"bg-purple-500/10 text-purple-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(e1,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Impressions/CTR CSV"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.attribution.impressions?t.attribution.impressions.name:"PUSH_IMPRESSIONS_CTR_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:s=>e("attribution","impressions",s.target.files[0])})]})})]}),m.jsxs("button",{type:"button",onClick:()=>n(),disabled:r,className:"px-12 py-5 rounded-2xl font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-4 mx-auto uppercase mt-8 border border-white/10 shadow-2xl shadow-red-500/30 active:scale-95 disabled:opacity-50",children:[r?m.jsx(DP,{className:"w-5 h-5 animate-spin"}):m.jsx(kP,{className:"w-5 h-5"}),r?"Processing APAC Data Streams...":"Execute Intelligent Engine"]})]})}),mb=({userEmail:t})=>{const[e,n]=re.useState(!1),[r,s]=re.useState(!1),[i,o]=re.useState("OKR"),[l,u]=re.useState(!0),[c,f]=re.useState(["DAU-SCT"]),[p,v]=re.useState(!1),[k,N]=re.useState("India"),[P,V]=re.useState(null),[S,I]=re.useState("2026-02-01"),[A,D]=re.useState(null),[L,F]=re.useState(""),[g,y]=re.useState(!1),w=tb.includes((t||"").toLowerCase()),E=re.useRef(!1),[x,C]=re.useState({AlwaysOn:"India",ScaledCreation:"India",Trends:"India",CultMo:"India",ArtMo:"India","GenAI Hub":"India"}),[T,te]=re.useState({AlwaysOn:"SSC",ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":""}),[ye,wt]=re.useState({AlwaysOn:"",ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":""}),[pe,B]=re.useState([]),[X,z]=re.useState({}),[ce,_e]=re.useState({}),[We,at]=re.useState({pct:{global:null,countryHB:{},alwaysOn:{}},abs:{global:null,countryHB:{},alwaysOn:{}},shared:{campaignInfo:null,pauseRelive:null},attribution:{impressions:null}}),[dt,ft]=re.useState([]),lt=re.useCallback(O=>{const $=[],q={};Kr.forEach(ee=>q[ee]=[]);const G={},Q=(ee,le,Ue=null,Je=null)=>{const De=ee.meta||{};let pt=Ue||Be(De.tab),rt=Je||Be(De.subTab)||"Generic",Ye=ee.market||le||"India";const Lr=ut(ee.country);(Be(De.subTab).toUpperCase()==="JP PROACTIVE CONTAINER"||Be(De.subSubTab).toUpperCase()==="JP PROACTIVE CONTAINER")&&(pt="AlwaysOn",rt="JP Proactive Container",Ye="Japan");const Dt=_h.find(Pn=>Wt(Pn.id,pt)||Wt(Pn.label,pt));if(Dt){const Pn=Be(De.subSubTab)||"Default";G[Dt.id]||(G[Dt.id]={}),G[Dt.id][Ye]||(G[Dt.id][Ye]={}),G[Dt.id][Ye][rt]||(G[Dt.id][Ye][rt]={}),G[Dt.id][Ye][rt][Pn]||(G[Dt.id][Ye][rt][Pn]={}),G[Dt.id][Ye][rt][Pn][Lr]=ee}};O.forEach(ee=>{const le=db(ee);le._source==="global"?($.push(le),Q(le,"APAC")):le._source==="market"?(q[le._market]&&q[le._market].push(le),Q(le,le._market)):le._source==="alwaysOn"?Q(le,null,"AlwaysOn",le._category):le._source==="jpProactive"&&Q(le,"Japan","AlwaysOn","JP Proactive Container")});const J={};return Object.keys(G).forEach(ee=>{J[ee]={},Object.keys(G[ee]).forEach(le=>{J[ee][le]={},Object.keys(G[ee][le]).forEach(Ue=>{J[ee][le][Ue]={},Object.keys(G[ee][le][Ue]).forEach(Je=>{J[ee][le][Ue][Je]=Object.values(G[ee][le][Ue][Je])})})})}),{gData:$,rData:q,cHub:J}},[]);re.useEffect(()=>{if(!A)return;const O=Jy(Vn(On,"shortsbrain_data","latest"),async $=>{if($.exists()){const q=$.data();if(q.batchId&&q.chunkCount!==void 0){let G=[];const Q=[];for(let ee=0;ee<q.chunkCount;ee++)Q.push(El(Vn(On,"shortsbrain_data",`chunk_${q.batchId}_${ee}`)));if((await Promise.all(Q)).forEach(ee=>{ee.exists()&&ee.data().data&&(G=G.concat(ee.data().data))}),G.length>0){const{gData:ee,rData:le,cHub:Ue}=lt(G);B(ee),z(le),_e(Ue),q.reportingDate&&V(q.reportingDate),q.quarterStart&&I(q.quarterStart),o("OKR"),E.current=!0}}else if(q.chunkCount!==void 0&&!q.batchId){let G=[];for(let Q=0;Q<q.chunkCount;Q++){const J=await El(Vn(On,"shortsbrain_data",`latest_chunk_${Q}`));J.exists()&&J.data().data&&(G=G.concat(J.data().data))}if(G.length>0){const{gData:Q,rData:J,cHub:ee}=lt(G);B(Q),z(J),_e(ee),q.reportingDate&&V(q.reportingDate),q.quarterStart&&I(q.quarterStart),o("OKR"),E.current=!0}}else if(q.masterList){const{gData:G,rData:Q,cHub:J}=lt(q.masterList);B(G),z(Q),_e(J),q.reportingDate&&V(q.reportingDate),q.quarterStart&&I(q.quarterStart),o("OKR"),E.current=!0}}});return()=>O()},[A,lt]);const zt=typeof __app_id<"u"?__app_id:"shorts-brain-v2",Ct=re.useMemo(()=>i==="Global Hub"||i==="AlwaysOn"?xr.filter(O=>O!=="Impressions"&&O!=="CTR"):xr,[i]),me=re.useMemo(()=>{var G;const O=x[i],$=(G=ce[i])==null?void 0:G[O];return $?Object.keys($).sort():[]},[i,x,ce]),ke=re.useMemo(()=>{var G,Q;const O=x[i],$=T[i],q=(Q=(G=ce[i])==null?void 0:G[O])==null?void 0:Q[$];return q?Object.keys(q).sort():[]},[i,x,T,ce]);re.useEffect(()=>{const O=ew(eb,D);return()=>O()},[]),re.useEffect(()=>{if(!A)return;const O=jE(On,"artifacts",zt,"public","data","snapshots"),$=Jy(O,q=>{const Q=[...q.docs.map(J=>({...J.data(),id:J.id})).filter(J=>!J.id.includes("_chunk_"))].sort((J,ee)=>(ee.timestamp||0)-(J.timestamp||0));ft(Q)},q=>console.error("Firestore Error:",q));return()=>$()},[A,zt]),re.useEffect(()=>{f(O=>{const $=O.filter(q=>Ct.includes(q));return $.length>0?$:[Ct[0]]})},[Ct]);const nt=async O=>{if(A)try{const $=`snap_${Date.now()}`,q=O.masterList,G=O.batchId||Date.now().toString(),Q=100,J=[];for(let le=0;le<q.length;le+=Q)J.push(q.slice(le,le+Q));const ee=J.map((le,Ue)=>Tl(Vn(On,"artifacts",zt,"public","data","snapshots",`${$}_chunk_${G}_${Ue}`),{data:le}));await Promise.all(ee),await Tl(Vn(On,"artifacts",zt,"public","data","snapshots",$),{batchId:G,chunkCount:J.length,timestamp:Date.now(),weekId:n_(O.reportingDate),quarterStart:S})}catch($){console.error("Cloud Save Error:",$)}},sn=async()=>{s(!0);try{const O=ae=>new Promise(Oe=>{ae||Oe("");const ne=new FileReader;ne.onload=Le=>Oe(Le.target.result),ne.readAsText(ae)});let $={};if(We.shared.campaignInfo){const Oe=(await O(We.shared.campaignInfo)).split(/\r?\n/).filter(ne=>ne.trim()!=="");if(Oe.length>1){const ne=Qr(Oe[0]),Le=Me(ne,["Campaign","Campaign Name"]),he=Me(ne,["Market","Country"]),Et=Me(ne,["Campaign Tabs","Tabs","Tab"]),Z=Me(ne,["Campaign Sub tabs","Sub tabs","Sub tab","Sub category"]),st=Me(ne,["Campaign Hub Sub Sub tabs","Sub sub tabs","Sub sub tab"]),Re=Me(ne,["Start Date"]),Ie=Me(ne,["End Date"]),Ne=Me(ne,["Optimisation End Date"]),Ae=Me(ne,["Age"]),Pe=Me(ne,["Gender"]);Oe.slice(1).forEach(mt=>{const Fe=Qr(mt),Ot=Be(Fe[Le]);if(Ot){const Kn=Be(Fe[he]).toUpperCase(),Tt=Fd[Kn]||Kr.find(bn=>Wt(bn,Kn))||"India";$[ut(Tt)]||($[ut(Tt)]={});const pn=ut(Ot);if($[ut(Tt)][pn]||($[ut(Tt)][pn]={market:Tt,tab:Be(Fe[Et]),subTab:Be(Fe[Z]),subSubTab:Be(Fe[st]),campaignStartDate:Be(Fe[Re]),campaignEndDate:Be(Fe[Ie]),optimisationEndDate:Be(Fe[Ne]),targeting:{ages:[],genders:[]}}),Ae!==-1&&Fe[Ae]){const bn=Be(Fe[Ae]).toLowerCase().split(",").map(Xe=>Xe.trim()),Bt=[];bn.forEach(Xe=>{Xe.includes("18-24")&&Bt.push("18-24"),Xe.includes("25-34")&&Bt.push("25-34"),Xe.includes("18-34")&&Bt.push("18-34"),(Xe.includes("35-44")||Xe.includes("35+"))&&Bt.push("35+")}),Bt.includes("18-24")&&Bt.includes("25-34")&&Bt.push("18-34"),Bt.push("total"),$[ut(Tt)][pn].targeting.ages=[...new Set([...$[ut(Tt)][pn].targeting.ages,...Bt])]}if(Pe!==-1&&Fe[Pe]){const bn=Be(Fe[Pe]).toLowerCase().split(",").map(Xe=>Xe.trim()),Bt=[];bn.forEach(Xe=>{(Xe==="male"||Xe==="m")&&Bt.push("male"),(Xe==="female"||Xe==="f")&&Bt.push("female")}),Bt.push("total"),$[ut(Tt)][pn].targeting.genders=[...new Set([...$[ut(Tt)][pn].targeting.genders,...Bt])]}}})}}let q={};if(We.shared.pauseRelive){const Oe=(await O(We.shared.pauseRelive)).split(/\r?\n/).filter(ne=>ne.trim()!=="");if(Oe.length>1){const ne=Qr(Oe[0]),Le=Me(ne,["Campaign","Campaign Name"]),he=Me(ne,["Market","Country"]),Et=Me(ne,["Age"]),Z=Me(ne,["Gender"]),st=Me(ne,["Instruction","Action"]),Re=Me(ne,["Launch Date"]);Oe.slice(1).forEach(Ie=>{const Ne=Qr(Ie),Ae=ut(Ne[Le]),Pe=Be(Ne[he]),mt=ut(Fd[Pe.toUpperCase()]||Pe);if(Ae&&mt){const Fe=(Be(Ne[Et])||"total").toLowerCase().replace(/[^a-z0-9+]/g,""),Ot=Fe==="genpop"?"total":Fe,Kn=(Be(Ne[Z])||"total").toLowerCase(),Tt=Kn==="genpop"?"total":Kn;q[mt]||(q[mt]={}),q[mt][Ae]||(q[mt][Ae]={}),q[mt][Ae][Tt]||(q[mt][Ae][Tt]={}),Be(Ne[st]).toUpperCase()==="PAUSE"&&(q[mt][Ae][Tt][Ot]=Be(Ne[Re]))}})}}let G=null,Q=S;const J=async(ae,Oe=!1)=>{const ne=We[ae];let Le={};if(ne.global){const Z=await O(ne.global);if(ae==="pct"){const st=Z.split(/\r?\n/).filter(Ae=>Ae.trim()!==""),Re=Qr(st[0]),Ie=Me(Re,["Latest Date","Date","Reporting Date"]),Ne=Me(Re,["Quarter Start Date","Quarter Start"]);if(st.length>1){const Ae=Qr(st[1]);if(Ie!==-1){const Pe=kr(Ae[Ie]);Pe&&(G=Pe,V(Pe))}if(Ne!==-1){const Pe=kr(Ae[Ne]);Pe&&(Q=Pe,I(Pe))}}}Le=Sl(Z,{},$,["Country","Market","Campaign"],Oe,null,!0,!1)}const he={};for(const Z of Kr)ne.countryHB[Z]&&(he[Z]=Sl(await O(ne.countryHB[Z]),{},$,void 0,Oe,Z,!1,!1));const Et={};for(const Z of $d)Z!=="JP Proactive Container"&&ne.alwaysOn[Z]&&(Et[Z]=Sl(await O(ne.alwaysOn[Z]),{},$,void 0,Oe,null,!1,!0));return{sgd:Le,mh:he,ao:Et}},ee=await J("pct",!1),le=await J("abs",!0);let Ue={};if(We.attribution.impressions){const ae=await O(We.attribution.impressions);Ue=Sl(ae,{},$,["Campaign","Campaign Name","Entity"],!0,null,!1,!1)}const Je=ae=>ae.includes("_")?ae.substring(ae.indexOf("_")+1):ae,De=(ae,Oe,ne={})=>{const Le={...ae};return Object.keys(Oe).forEach(he=>{const Et=Object.keys(Le).find(Z=>Wt(Z,he))||Object.keys(Le).find(Z=>Wt(Je(Z),Je(he)))||he;Le[Et]?xr.forEach(Z=>{Z!=="Impressions"&&Z!=="CTR"&&Mt.forEach(st=>{ln.forEach(Re=>{const Ie=Oe[he].metrics[Z][st][Re].abs;Ie!==0&&Ie!=="NA"&&(Le[Et].metrics[Z][st][Re].abs=Ie)})})}):Le[Et]=Oe[he]}),Object.keys(ne).forEach(he=>{const Et=Object.keys(Le).find(Z=>{const st=Je(Z),Re=Je(he);if(Le[Z].isAnchor&&ne[he].isAnchor){const Ie=Le[Z].market==="IN"?"India":Le[Z].market,Ne=ne[he].market==="IN"?"India":ne[he].market,Ae=ne[he].country==="IN"?"India":ne[he].country;return Wt(Ie,Ne)||Wt(Le[Z].country,Ae)||Wt(Ie,Ae)}return Wt(Z,he)||Z.includes(he)||he.includes(Z)||Wt(st,Re)});Et&&Mt.forEach(Z=>{ln.forEach(st=>{var Ne,Ae,Pe,mt,Fe,Ot;const Re=((Pe=(Ae=(Ne=ne[he].metrics.Impressions)==null?void 0:Ne[Z])==null?void 0:Ae[st])==null?void 0:Pe.v)||0;Re>0&&(Le[Et].metrics.Impressions[Z][st].v=Re);const Ie=((Ot=(Fe=(mt=ne[he].metrics.CTR)==null?void 0:mt[Z])==null?void 0:Fe[st])==null?void 0:Ot.v)||0;Ie>0&&(Le[Et].metrics.CTR[Z][st].v=Ie)})})}),Object.values(Le).forEach(he=>{const Et=ut(he.market),Z=ut(he.country),st=a1(he.optimisationEndDate,he.campaignEndDate);xr.forEach(Re=>{Mt.forEach(Ie=>{ln.forEach(Ne=>{var Pe,mt;if(st){he.metrics[Re][Ie][Ne].isPaused=!0,he.metrics[Re][Ie][Ne].launchDate=he.campaignEndDate||"Ended";return}const Ae=(Pe=q[Et])==null?void 0:Pe[Z];if(Ae){const Fe=Ne.replace(/[^a-z0-9+]/g,""),Ot=Fe==="1824"||Fe==="2534"?"1834":null,Kn=[[Ie,Fe],Ot?[Ie,Ot]:null,[Ie,"total"],["total",Fe],Ot?["total",Ot]:null,["total","total"]].filter(Boolean);for(const[Tt,pn]of Kn)if((mt=Ae[Tt])!=null&&mt[pn]){he.metrics[Re][Ie][Ne].isPaused=!0,he.metrics[Re][Ie][Ne].launchDate=Ae[Tt][pn];break}}})}),ln.forEach(Ie=>{const Ne=he.metrics[Re].male[Ie],Ae=he.metrics[Re].female[Ie];if(Ne&&Ae&&Ne.isPaused&&Ae.isPaused){he.metrics[Re].total[Ie].isPaused=!0;const Pe=new Date(Ne.launchDate||0),mt=new Date(Ae.launchDate||0);he.metrics[Re].total[Ie].launchDate=(Pe>=mt?Ne.launchDate:Ae.launchDate)||"Ended"}})})}),Le},pt=[],rt=De(ee.sgd,le.sgd,Ue);Object.values(rt).forEach(ae=>{ae._source="global",pt.push(Il(ae))}),Kr.forEach(ae=>{const Oe=De(ee.mh[ae]||{},le.mh[ae]||{},Ue);Object.values(Oe).forEach(ne=>{ne._source="market",ne._market=ae,pt.push(Il(ne))})}),$d.forEach(ae=>{if(ae!=="JP Proactive Container"){const Oe=De(ee.ao[ae]||{},le.ao[ae]||{},Ue);Object.values(Oe).forEach(ne=>{ne._source="alwaysOn",ne._category=ae,pt.push(Il(ne))})}});const Ye=De(ee.jpProactive||{},le.jpProactive||{},Ue);Object.values(Ye).forEach(ae=>{ae._source="jpProactive",pt.push(Il(ae))});const{gData:Lr,rData:Dt,cHub:Pn}=lt(pt);B(Lr),z(Dt),_e(Pn),E.current=!0,o("OKR"),n(!1);const ci=Date.now().toString(),jr=100,Rs=[];for(let ae=0;ae<pt.length;ae+=jr)Rs.push(pt.slice(ae,ae+jr));const uo=Rs.map((ae,Oe)=>Tl(Vn(On,"shortsbrain_data",`chunk_${ci}_${Oe}`),{data:ae}));await Promise.all(uo),await Tl(Vn(On,"shortsbrain_data","latest"),{batchId:ci,chunkCount:Rs.length,reportingDate:G,quarterStart:Q,lastUpdated:new Date().toISOString()}),await nt({masterList:pt,reportingDate:G,quarterStart:Q,batchId:ci}),yh("snapshot_saved",{week_id:n_(G)})}catch(O){console.error("Analysis failed:",O)}finally{s(!1)}},on=(O,$,q,G)=>at(Q=>{const J={...Q[O]};return $==="countryHB"||$==="alwaysOn"?J[$]={...J[$],[G]:q}:J[$]=q,{...Q,[O]:J}});return e?m.jsx(pb,{uploadedFiles:We,handleFileUpload:on,startAnalysis:sn,isAnalyzing:r}):m.jsxs("div",{className:"flex h-screen bg-black text-[#e0e0e0] overflow-hidden font-sans",children:[m.jsxs("aside",{className:`${l?"w-72":"w-20"} transition-all duration-300 bg-[#111] border-r border-[#2a2a2a] flex flex-col z-50`,children:[m.jsxs("div",{className:"p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#2a2a2a] relative group",children:[m.jsx("div",{className:"bg-[#FF0000] p-2 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20",children:m.jsx(ZE,{className:"text-white w-5 h-5"})}),l&&m.jsxs("div",{className:"flex-1",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("h2",{className:"text-lg font-bold tracking-tight",children:["BRAIN ",m.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),m.jsx("a",{href:i1,target:"_blank",rel:"noopener noreferrer",className:"text-[#444] hover:text-white transition-colors",title:"Source Drive",children:m.jsx(l1,{className:"w-4 h-4"})})]}),m.jsx("p",{className:"text-[8px] font-bold uppercase text-[#555] tracking-widest",children:"APAC Marketing Hub"})]})]}),m.jsxs("nav",{className:"flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar",children:[ob.map(O=>{const $=O.icon;return m.jsxs("button",{type:"button",onClick:()=>{if(O.id==="Upload"){if(!w){y(!0);return}y(!1),E.current=!0,n(!0)}else y(!1),o(O.id),yh("tab_viewed",{tab_id:O.id})},className:`w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${i===O.id?"bg-[#FF0000]/10 text-[#FF0000]":O.id==="Upload"&&!w?"text-[#444] cursor-not-allowed":"text-[#808080] hover:text-white"}`,children:[m.jsx($,{className:"w-5 h-5 shrink-0"}),l&&m.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:O.label}),l&&O.id==="Upload"&&!w&&m.jsx("span",{className:"ml-auto text-[7px] font-bold text-[#444] uppercase",children:"Read-only"})]},O.id)}),m.jsx("div",{className:"my-4 border-t border-[#222]"}),m.jsxs("button",{type:"button",onClick:()=>v(!p),className:"w-full flex items-center justify-between p-3 rounded-xl text-[#808080] hover:text-white cursor-pointer",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx(cP,{className:"w-5 h-5 shrink-0"}),l&&m.jsx("span",{className:"text-[11px] font-bold uppercase tracking-widest",children:"Campaign Hub"})]}),l&&(p?m.jsx(WN,{className:"w-4 h-4"}):m.jsx($N,{className:"w-4 h-4"}))]}),p&&l&&m.jsx("div",{className:"pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300",children:_h.map(O=>{const $=O.icon;return m.jsxs("button",{type:"button",onClick:()=>{o(O.id),yh("tab_viewed",{tab_id:"Campaign Hub",sub_view:O.id})},className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${i===O.id?"bg-[#FF0000]/10 text-[#FF0000]":"text-[#555] hover:bg-white/5 hover:text-white"}`,children:[m.jsx($,{className:"w-4 h-4"}),O.label]},O.id)})}),l&&dt.length>0&&m.jsxs("div",{className:"mt-8 pt-4 border-t border-[#222]",children:[m.jsxs("div",{className:"flex items-center gap-2 px-3 mb-3",children:[m.jsx(sP,{className:"w-4 h-4 text-[#444]"}),m.jsx("span",{className:"text-[10px] font-bold uppercase text-[#444] tracking-widest",children:"Memory"})]}),m.jsx("div",{className:"space-y-1 max-h-[300px] overflow-y-auto no-scrollbar",children:dt.map(O=>m.jsxs("div",{className:"w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all hover:bg-white/5 group",children:[m.jsx("button",{type:"button",onClick:async()=>{if(O.batchId&&O.chunkCount!==void 0){let $=[];const q=[];for(let Q=0;Q<O.chunkCount;Q++)q.push(El(Vn(On,"artifacts",zt,"public","data","snapshots",`${O.id}_chunk_${O.batchId}_${Q}`)));if((await Promise.all(q)).forEach(Q=>{Q.exists()&&Q.data().data&&($=$.concat(Q.data().data))}),$.length>0){const{gData:Q,rData:J,cHub:ee}=lt($);B(Q),z(J),_e(ee)}}else if(O.chunkCount!==void 0&&!O.batchId){let $=[];for(let J=0;J<O.chunkCount;J++){const ee=await El(Vn(On,"artifacts",zt,"public","data","snapshots",`${O.id}_chunk_${J}`));ee.exists()&&ee.data().data&&($=$.concat(ee.data().data))}const{gData:q,rData:G,cHub:Q}=lt($);B(q),z(G),_e(Q)}else B(O.globalData||[]),z(O.regionalData||{}),_e(O.campaignHubData||{});V(O.reportingDate),O.quarterStart&&I(O.quarterStart),o("OKR"),n(!1)},className:"flex-1 text-[10px] font-bold text-[#666] group-hover:text-white",children:String(O.weekId||"Snapshot")}),m.jsx("button",{type:"button",onClick:()=>xN(Vn(On,"artifacts",zt,"public","data","snapshots",O.id)),className:"opacity-0 group-hover:opacity-100 transition-opacity",children:m.jsx(r1,{className:"w-3 h-3 text-red-500"})})]},O.id))})]})]}),l&&(A==null?void 0:A.email)&&m.jsxs("div",{className:"px-4 py-3 border-t border-[#2a2a2a]",children:[m.jsx("div",{className:"text-[8px] font-mono text-[#555] truncate",children:A.email}),m.jsx("div",{className:"text-[8px] mt-0.5 uppercase tracking-wider font-bold",children:w?m.jsx("span",{className:"text-emerald-400",children:"Ingestion Admin"}):m.jsx("span",{className:"text-[#555]",children:"Read-only"})})]}),g&&l&&m.jsx("div",{className:"mx-4 mb-2 px-3 py-2 rounded-lg bg-red-900/30 border border-red-500/30 text-[8px] text-red-400 font-bold uppercase tracking-wider",children:"Access restricted"}),m.jsx("button",{type:"button",onClick:()=>u(!l),className:"p-6 border-t border-[#2a2a2a] text-[#555] hover:text-white flex items-center justify-center",children:l?m.jsx(JP,{className:"w-5 h-5"}):m.jsx(EP,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[m.jsxs("header",{className:"px-8 py-5 border-b border-[#2a2a2a] flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-40",children:[m.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-widest",children:i}),m.jsxs("button",{type:"button",onClick:()=>{const O=JSON.stringify({globalData:pe,regionalData:X,campaignHubData:ce,latestGlobalDate:P,quarterStart:S},null,2),$=new Blob([O],{type:"application/json"}),q=URL.createObjectURL($),G=document.createElement("a");G.href=q,G.download=`ShortsBrain_${P||"Snapshot"}.json`,G.click()},className:"bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] shadow-xl flex items-center gap-2 transition-colors",children:[m.jsx(oP,{className:"w-3.5 h-3.5"})," Export"]})]}),m.jsxs("main",{className:"flex-1 overflow-auto p-10 relative no-scrollbar",children:[i==="OKR"&&m.jsx(fb,{globalData:pe,regionalData:X,latestDate:P,quarterStart:S}),(i==="Global Hub"||i==="Market Hub")&&m.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[m.jsx(s_,{activeMetrics:c,allowedMetrics:Ct,toggleMetric:O=>f($=>$.includes(O)?$.length>1?$.filter(q=>q!==O):$:[...$,O]),handleAllToggle:()=>f(O=>O.length===Ct.length?["DAU-SCT"]:[...Ct])}),i==="Market Hub"&&m.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(t_,{className:"w-6 h-6 text-red-600"}),m.jsx("select",{value:k,onChange:O=>N(O.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:Kr.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))})]}),m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(e_,{className:"w-6 h-6 text-amber-500"}),m.jsxs("select",{value:L,onChange:O=>F(O.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:[m.jsx("option",{value:"",className:"bg-neutral-900",children:"ALL TYPES"}),rb.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))]})]})]}),m.jsx(i_,{data:i==="Global Hub"?pe:(()=>{const $=(X[k]||[]).filter(G=>G.country&&G.country.toUpperCase()!=="UNKNOWN"&&(Wt(G.market,k)||Wt(G.market,Sa[k]))&&(!L||lb(G)===L)),q=pe.find(G=>Wt(G.country,k)||Wt(G.country,Sa[k]));return q?[{...q,isAnchor:!0},...$]:$})(),activeMetrics:c,latestGlobalDate:P,isCampaignView:i==="Market Hub",hideDates:i==="Global Hub"})]}),_h.some(O=>O.id===i)&&m.jsxs("div",{className:"space-y-8 animate-in fade-in duration-500",children:[m.jsx(s_,{activeMetrics:c,allowedMetrics:Ct,toggleMetric:O=>f($=>$.includes(O)?$.length>1?$.filter(q=>q!==O):$:[...$,O]),handleAllToggle:()=>f(O=>O.length===Ct.length?["DAU-SCT"]:[...Ct])}),m.jsxs("div",{className:"flex flex-wrap gap-4",children:[m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(t_,{className:"w-6 h-6 text-red-600"}),m.jsx("select",{value:x[i],onChange:O=>C($=>({...$,[i]:O.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:Kr.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))})]}),me.length>0&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(e_,{className:"w-6 h-6 text-amber-500"}),m.jsxs("select",{value:T[i],onChange:O=>te($=>({...$,[i]:O.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:[m.jsx("option",{value:"",children:"ALL SUB TABS"}),me.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))]})]}),i!=="AlwaysOn"&&ke.length>0&&T[i]!==""&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg",children:[m.jsx(_P,{className:"w-6 h-6 text-purple-500"}),m.jsxs("select",{value:ye[i],onChange:O=>wt($=>({...$,[i]:O.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8",children:[m.jsx("option",{value:"",children:"ALL SUB SUB TABS"}),ke.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))]})]})]}),m.jsx(i_,{data:(()=>{var Q,J,ee,le,Ue,Je,De,pt;const O=x[i],$=T[i],q=ye[i];if(i==="AlwaysOn"&&$==="JP Proactive Container"){const rt=(J=(Q=ce.AlwaysOn)==null?void 0:Q.Japan)==null?void 0:J["JP Proactive Container"];return rt?Object.values(rt).flatMap(Ye=>Array.isArray(Ye)?Ye:Object.values(Ye).flat()):[]}if(!$){const rt=(ee=ce[i])==null?void 0:ee[O];return rt?Object.values(rt).flatMap(Ye=>Object.values(Ye).flat()):[]}if(!q||i==="AlwaysOn"){const rt=(Ue=(le=ce[i])==null?void 0:le[O])==null?void 0:Ue[$];if(!rt)return[];const Ye=Object.values(rt).flat();return i==="AlwaysOn"?[...Ye].sort((Lr,Dt)=>(Lr.explicitTrendStart||Lr.dataMinDate||"").localeCompare(Dt.explicitTrendStart||Dt.dataMinDate||"")):Ye}return((pt=(De=(Je=ce[i])==null?void 0:Je[O])==null?void 0:De[$])==null?void 0:pt[q])||[]})(),activeMetrics:c,latestGlobalDate:P,isCampaignView:!0,isAlwaysOn:i==="AlwaysOn"})]})]})]}),m.jsx("style",{children:`  
        ::-webkit-scrollbar { width: 5px; height: 5px; }  
        ::-webkit-scrollbar-track { background: transparent; }  
        ::-webkit-scrollbar { display: none; }  
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 10px; }  
        ::-webkit-scrollbar-thumb:hover { background: #444; }  
        .no-scrollbar::-webkit-scrollbar { display: none; }  
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; }  
        .animate-in { animation: fadeIn 0.4s ease-out; }  
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }  
      `})]})},vh=dw($a),gb=new vr;function yb(t){return t?t==="ivanho.wz@gmail.com"?!0:t.endsWith("@google.com"):!1}const a_={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},l_={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},_b={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},vb={color:"#f87171",marginTop:16,fontSize:14},u_={color:"#737373",fontSize:13,marginTop:8};function wb({children:t}){const[e,n]=re.useState(null),[r,s]=re.useState(!0),[i,o]=re.useState(null),[l,u]=re.useState(!1);re.useEffect(()=>ew(vh,f=>{f&&!yb(f.email)?(vA(vh),n(null),o(`${f.email} is not authorized.`)):(n(f),o(null)),s(!1)}),[]);const c=async()=>{u(!0),o(null);try{await UA(vh,gb)}catch(f){o((f==null?void 0:f.message)||"Sign-in failed.")}finally{u(!1)}};return r?m.jsx("div",{style:a_,children:m.jsx("div",{style:l_,children:m.jsx("p",{style:u_,children:"Loading…"})})}):e?_r.Children.map(t,f=>_r.isValidElement(f)?_r.cloneElement(f,{userEmail:e.email}):f):m.jsx("div",{style:a_,children:m.jsxs("div",{style:l_,children:[m.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Brain"}),m.jsx("p",{style:u_,children:"Sign in to continue"}),m.jsx("button",{style:_b,onClick:c,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&m.jsx("p",{style:vb,children:i})]})})}wh.createRoot(document.getElementById("root")).render(m.jsx(_r.StrictMode,{children:m.jsx(wb,{children:m.jsx(mb,{})})}));
//# sourceMappingURL=index-CnkOvq-b.js.map
