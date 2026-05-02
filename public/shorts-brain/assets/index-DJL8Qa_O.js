(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function eT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M_={exports:{}},zu={},L_={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),tT=Symbol.for("react.portal"),nT=Symbol.for("react.fragment"),rT=Symbol.for("react.strict_mode"),sT=Symbol.for("react.profiler"),iT=Symbol.for("react.provider"),oT=Symbol.for("react.context"),aT=Symbol.for("react.forward_ref"),lT=Symbol.for("react.suspense"),uT=Symbol.for("react.memo"),cT=Symbol.for("react.lazy"),bm=Symbol.iterator;function hT(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var j_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U_=Object.assign,F_={};function io(t,e,n){this.props=t,this.context=e,this.refs=F_,this.updater=n||j_}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $_(){}$_.prototype=io.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=F_,this.updater=n||j_}var Kd=Wd.prototype=new $_;Kd.constructor=Wd;U_(Kd,io.prototype);Kd.isPureReactComponent=!0;var Nm=Array.isArray,B_=Object.prototype.hasOwnProperty,Qd={current:null},z_={key:!0,ref:!0,__self:!0,__source:!0};function H_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)B_.call(e,r)&&!z_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Pa,type:t,key:i,ref:o,props:s,_owner:Qd.current}}function dT(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function fT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fT(""+t.key):e.toString(36)}function bl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pa:case tT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Lc(o,0):r,Nm(s)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),bl(s,e,n,"",function(c){return c})):s!=null&&(Jd(s)&&(s=dT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Pm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Nm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Lc(i,l);o+=bl(i,e,n,u,s)}else if(u=hT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Lc(i,l++),o+=bl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function rl(t,e,n){if(t==null)return t;var r=[],s=0;return bl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function pT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Nl={transition:null},mT={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:Qd};function q_(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=io;Ee.Fragment=nT;Ee.Profiler=sT;Ee.PureComponent=Wd;Ee.StrictMode=rT;Ee.Suspense=lT;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mT;Ee.act=q_;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=U_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Qd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)B_.call(e,u)&&!z_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Pa,type:t.type,key:s,ref:i,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:oT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iT,_context:t},t.Consumer=t};Ee.createElement=H_;Ee.createFactory=function(t){var e=H_.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:aT,render:t}};Ee.isValidElement=Jd;Ee.lazy=function(t){return{$$typeof:cT,_payload:{_status:-1,_result:t},_init:pT}};Ee.memo=function(t,e){return{$$typeof:uT,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};Ee.unstable_act=q_;Ee.useCallback=function(t,e){return un.current.useCallback(t,e)};Ee.useContext=function(t){return un.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return un.current.useEffect(t,e)};Ee.useId=function(){return un.current.useId()};Ee.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return un.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Ee.useRef=function(t){return un.current.useRef(t)};Ee.useState=function(t){return un.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return un.current.useTransition()};Ee.version="18.3.1";L_.exports=Ee;var ae=L_.exports;const gi=eT(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gT=ae,yT=Symbol.for("react.element"),_T=Symbol.for("react.fragment"),vT=Object.prototype.hasOwnProperty,wT=gT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ET={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vT.call(e,r)&&!ET.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:yT,type:t,key:i,ref:o,props:s,_owner:wT.current}}zu.Fragment=_T;zu.jsx=G_;zu.jsxs=G_;M_.exports=zu;var p=M_.exports,Sh={},W_={exports:{}},An={},K_={exports:{}},Q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Z){var $=z.length;z.push(Z);e:for(;0<$;){var xe=$-1>>>1,Ae=z[xe];if(0<s(Ae,Z))z[xe]=Z,z[$]=Ae,$=xe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],$=z.pop();if($!==Z){z[0]=$;e:for(var xe=0,Ae=z.length,Nt=Ae>>>1;xe<Nt;){var Pe=2*(xe+1)-1,Tt=z[Pe],it=Pe+1,rn=z[it];if(0>s(Tt,$))it<Ae&&0>s(rn,Tt)?(z[xe]=rn,z[it]=$,xe=it):(z[xe]=Tt,z[Pe]=$,xe=Pe);else if(it<Ae&&0>s(rn,$))z[xe]=rn,z[it]=$,xe=it;else break e}}return Z}function s(z,Z){var $=z.sortIndex-Z.sortIndex;return $!==0?$:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,C=!1,R=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=z)r(c),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(c)}}function P(z){if(N=!1,A(z),!R)if(n(u)!==null)R=!0,bt(j);else{var Z=n(c);Z!==null&&we(P,Z.startTime-z)}}function j(z,Z){R=!1,N&&(N=!1,I(v),v=-1),C=!0;var $=g;try{for(A(Z),m=n(u);m!==null&&(!(m.expirationTime>Z)||z&&!x());){var xe=m.callback;if(typeof xe=="function"){m.callback=null,g=m.priorityLevel;var Ae=xe(m.expirationTime<=Z);Z=t.unstable_now(),typeof Ae=="function"?m.callback=Ae:m===n(u)&&r(u),A(Z)}else r(u);m=n(u)}if(m!==null)var Nt=!0;else{var Pe=n(c);Pe!==null&&we(P,Pe.startTime-Z),Nt=!1}return Nt}finally{m=null,g=$,C=!1}}var U=!1,T=null,v=-1,S=5,y=-1;function x(){return!(t.unstable_now()-y<S)}function k(){if(T!==null){var z=t.unstable_now();y=z;var Z=!0;try{Z=T(!0,z)}finally{Z?w():(U=!1,T=null)}}else U=!1}var w;if(typeof E=="function")w=function(){E(k)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ue=J.port2;J.port1.onmessage=k,w=function(){ue.postMessage(null)}}else w=function(){O(k,0)};function bt(z){T=z,U||(U=!0,w())}function we(z,Z){v=O(function(){z(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||C||(R=!0,bt(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var $=g;g=Z;try{return z()}finally{g=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=g;g=z;try{return Z()}finally{g=$}},t.unstable_scheduleCallback=function(z,Z,$){var xe=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?xe+$:xe):$=xe,z){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=$+Ae,z={id:f++,callback:Z,priorityLevel:z,startTime:$,expirationTime:Ae,sortIndex:-1},$>xe?(z.sortIndex=$,e(c,z),n(u)===null&&z===n(c)&&(N?(I(v),v=-1):N=!0,we(P,$-xe))):(z.sortIndex=Ae,e(u,z),R||C||(R=!0,bt(j))),z},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(z){var Z=g;return function(){var $=g;g=Z;try{return z.apply(this,arguments)}finally{g=$}}}})(Q_);K_.exports=Q_;var TT=K_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT=ae,xn=TT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J_=new Set,sa={};function oi(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(sa[t]=e,t=0;t<e.length;t++)J_.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=Object.prototype.hasOwnProperty,ST=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Om={};function xT(t){return xh.call(Om,t)?!0:xh.call(Dm,t)?!1:ST.test(t)?Om[t]=!0:(Dm[t]=!0,!1)}function AT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kT(t,e,n,r){if(e===null||typeof e>"u"||AT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yd,Xd);qt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yd,Xd);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yd,Xd);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zd(t,e,n,r){var s=qt.hasOwnProperty(e)?qt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kT(e,n,s,r)&&(n=null),r||s===null?xT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lr=IT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),Ah=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),tf=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Ch=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),Gr=Symbol.for("react.lazy"),Z_=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Object.assign,jc;function Vo(t){if(jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jc=e&&e[1]||""}return`
`+jc+t}var Uc=!1;function Fc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function CT(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ei:return"Portal";case Ah:return"Profiler";case ef:return"StrictMode";case kh:return"Suspense";case Ch:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X_:return(t.displayName||"Context")+".Consumer";case Y_:return(t._context.displayName||"Context")+".Provider";case tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nf:return e=t.displayName||null,e!==null?e:Rh(t.type)||"Memo";case Gr:e=t._payload,t=t._init;try{return Rh(t(e))}catch{}}return null}function RT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rh(e);case 8:return e===ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bT(t){var e=e0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=bT(t))}function t0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bh(t,e){var n=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n0(t,e){e=e.checked,e!=null&&Zd(t,"checked",e,!1)}function Nh(t,e){n0(t,e);var n=gs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,gs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||Zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function Di(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Mo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gs(n)}}function r0(t,e){var n=gs(e.value),r=gs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,i0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NT=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(t){NT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bo[e]=Bo[t]})});function o0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bo.hasOwnProperty(t)&&Bo[t]?(""+e).trim():e+"px"}function a0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=o0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var PT=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vh(t,e){if(e){if(PT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jh=null,Oi=null,Vi=null;function Fm(t){if(t=Va(t)){if(typeof jh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Ku(e),jh(t.stateNode,t.type,e))}}function l0(t){Oi?Vi?Vi.push(t):Vi=[t]:Oi=t}function u0(){if(Oi){var t=Oi,e=Vi;if(Vi=Oi=null,Fm(t),e)for(t=0;t<e.length;t++)Fm(e[t])}}function c0(t,e){return t(e)}function h0(){}var $c=!1;function d0(t,e,n){if($c)return t(e,n);$c=!0;try{return c0(t,e,n)}finally{$c=!1,(Oi!==null||Vi!==null)&&(h0(),u0())}}function oa(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Uh=!1;if(Rr)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Uh=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Uh=!1}function DT(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var zo=!1,eu=null,tu=!1,Fh=null,OT={onError:function(t){zo=!0,eu=t}};function VT(t,e,n,r,s,i,o,l,u){zo=!1,eu=null,DT.apply(OT,arguments)}function MT(t,e,n,r,s,i,o,l,u){if(VT.apply(this,arguments),zo){if(zo){var c=eu;zo=!1,eu=null}else throw Error(F(198));tu||(tu=!0,Fh=c)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $m(t){if(ai(t)!==t)throw Error(F(188))}function LT(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return $m(s),t;if(i===r)return $m(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function p0(t){return t=LT(t),t!==null?m0(t):null}function m0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m0(t);if(e!==null)return e;t=t.sibling}return null}var g0=xn.unstable_scheduleCallback,Bm=xn.unstable_cancelCallback,jT=xn.unstable_shouldYield,UT=xn.unstable_requestPaint,dt=xn.unstable_now,FT=xn.unstable_getCurrentPriorityLevel,sf=xn.unstable_ImmediatePriority,y0=xn.unstable_UserBlockingPriority,nu=xn.unstable_NormalPriority,$T=xn.unstable_LowPriority,_0=xn.unstable_IdlePriority,Hu=null,lr=null;function BT(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(Hu,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:qT,zT=Math.log,HT=Math.LN2;function qT(t){return t>>>=0,t===0?32:31-(zT(t)/HT|0)|0}var al=64,ll=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Lo(l):(i&=o,i!==0&&(r=Lo(i)))}else o=n&~s,o!==0?r=Lo(o):i!==0&&(r=Lo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kn(e),s=1<<n,r|=t[n],e&=~s;return r}function GT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Kn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=GT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function $h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v0(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function KT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Kn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Fe=0;function w0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,af,T0,I0,S0,Bh=!1,ul=[],rs=null,ss=null,is=null,aa=new Map,la=new Map,Kr=[],QT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zm(t,e){switch(t){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":la.delete(e.pointerId)}}function ko(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Va(e),e!==null&&af(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function JT(t,e,n,r,s){switch(e){case"focusin":return rs=ko(rs,t,e,n,r,s),!0;case"dragenter":return ss=ko(ss,t,e,n,r,s),!0;case"mouseover":return is=ko(is,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return aa.set(i,ko(aa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,la.set(i,ko(la.get(i)||null,t,e,n,r,s)),!0}return!1}function x0(t){var e=Us(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=f0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){T0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lh=r,n.target.dispatchEvent(r),Lh=null}else return e=Va(n),e!==null&&af(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){Pl(t)&&n.delete(e)}function YT(){Bh=!1,rs!==null&&Pl(rs)&&(rs=null),ss!==null&&Pl(ss)&&(ss=null),is!==null&&Pl(is)&&(is=null),aa.forEach(Hm),la.forEach(Hm)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,Bh||(Bh=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,YT)))}function ua(t){function e(s){return Co(s,t)}if(0<ul.length){Co(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rs!==null&&Co(rs,t),ss!==null&&Co(ss,t),is!==null&&Co(is,t),aa.forEach(e),la.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)x0(n),n.blockedOn===null&&Kr.shift()}var Mi=Lr.ReactCurrentBatchConfig,su=!0;function XT(t,e,n,r){var s=Fe,i=Mi.transition;Mi.transition=null;try{Fe=1,lf(t,e,n,r)}finally{Fe=s,Mi.transition=i}}function ZT(t,e,n,r){var s=Fe,i=Mi.transition;Mi.transition=null;try{Fe=4,lf(t,e,n,r)}finally{Fe=s,Mi.transition=i}}function lf(t,e,n,r){if(su){var s=zh(t,e,n,r);if(s===null)Xc(t,e,r,iu,n),zm(t,r);else if(JT(s,t,e,n,r))r.stopPropagation();else if(zm(t,r),e&4&&-1<QT.indexOf(t)){for(;s!==null;){var i=Va(s);if(i!==null&&E0(i),i=zh(t,e,n,r),i===null&&Xc(t,e,r,iu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Xc(t,e,r,null,n)}}var iu=null;function zh(t,e,n,r){if(iu=null,t=rf(r),t=Us(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return iu=t,null}function A0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FT()){case sf:return 1;case y0:return 4;case nu:case $T:return 16;case _0:return 536870912;default:return 16}default:return 16}}var es=null,uf=null,Dl=null;function k0(){if(Dl)return Dl;var t,e=uf,n=e.length,r,s="value"in es?es.value:es.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Dl=s.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function qm(){return!1}function kn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cl:qm,this.isPropagationStopped=qm,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=kn(oo),Oa=rt({},oo,{view:0,detail:0}),eI=kn(Oa),zc,Hc,Ro,qu=rt({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(zc=t.screenX-Ro.screenX,Hc=t.screenY-Ro.screenY):Hc=zc=0,Ro=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Gm=kn(qu),tI=rt({},qu,{dataTransfer:0}),nI=kn(tI),rI=rt({},Oa,{relatedTarget:0}),qc=kn(rI),sI=rt({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),iI=kn(sI),oI=rt({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aI=kn(oI),lI=rt({},oo,{data:0}),Wm=kn(lI),uI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hI[t])?!!e[t]:!1}function hf(){return dI}var fI=rt({},Oa,{key:function(t){if(t.key){var e=uI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pI=kn(fI),mI=rt({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=kn(mI),gI=rt({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),yI=kn(gI),_I=rt({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),vI=kn(_I),wI=rt({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EI=kn(wI),TI=[9,13,27,32],df=Rr&&"CompositionEvent"in window,Ho=null;Rr&&"documentMode"in document&&(Ho=document.documentMode);var II=Rr&&"TextEvent"in window&&!Ho,C0=Rr&&(!df||Ho&&8<Ho&&11>=Ho),Qm=" ",Jm=!1;function R0(t,e){switch(t){case"keyup":return TI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function SI(t,e){switch(t){case"compositionend":return b0(e);case"keypress":return e.which!==32?null:(Jm=!0,Qm);case"textInput":return t=e.data,t===Qm&&Jm?null:t;default:return null}}function xI(t,e){if(Ii)return t==="compositionend"||!df&&R0(t,e)?(t=k0(),Dl=uf=es=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C0&&e.locale!=="ko"?null:e.data;default:return null}}var AI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AI[t.type]:e==="textarea"}function N0(t,e,n,r){l0(r),e=ou(e,"onChange"),0<e.length&&(n=new cf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qo=null,ca=null;function kI(t){B0(t,0)}function Gu(t){var e=Ai(t);if(t0(e))return t}function CI(t,e){if(t==="change")return e}var P0=!1;if(Rr){var Gc;if(Rr){var Wc="oninput"in document;if(!Wc){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),Wc=typeof Xm.oninput=="function"}Gc=Wc}else Gc=!1;P0=Gc&&(!document.documentMode||9<document.documentMode)}function Zm(){qo&&(qo.detachEvent("onpropertychange",D0),ca=qo=null)}function D0(t){if(t.propertyName==="value"&&Gu(ca)){var e=[];N0(e,ca,t,rf(t)),d0(kI,e)}}function RI(t,e,n){t==="focusin"?(Zm(),qo=e,ca=n,qo.attachEvent("onpropertychange",D0)):t==="focusout"&&Zm()}function bI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gu(ca)}function NI(t,e){if(t==="click")return Gu(e)}function PI(t,e){if(t==="input"||t==="change")return Gu(e)}function DI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:DI;function ha(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!xh.call(e,s)||!Xn(t[s],e[s]))return!1}return!0}function eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tg(t,e){var n=eg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eg(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V0(){for(var t=window,e=Zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zl(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OI(t){var e=V0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(r!==null&&ff(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=tg(n,i);var o=tg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VI=Rr&&"documentMode"in document&&11>=document.documentMode,Si=null,Hh=null,Go=null,qh=!1;function ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qh||Si==null||Si!==Zl(r)||(r=Si,"selectionStart"in r&&ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Go&&ha(Go,r)||(Go=r,r=ou(Hh,"onSelect"),0<r.length&&(e=new cf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xi={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Kc={},M0={};Rr&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function Wu(t){if(Kc[t])return Kc[t];if(!xi[t])return t;var e=xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M0)return Kc[t]=e[n];return t}var L0=Wu("animationend"),j0=Wu("animationiteration"),U0=Wu("animationstart"),F0=Wu("transitionend"),$0=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xs(t,e){$0.set(t,e),oi(e,[t])}for(var Qc=0;Qc<rg.length;Qc++){var Jc=rg[Qc],MI=Jc.toLowerCase(),LI=Jc[0].toUpperCase()+Jc.slice(1);xs(MI,"on"+LI)}xs(L0,"onAnimationEnd");xs(j0,"onAnimationIteration");xs(U0,"onAnimationStart");xs("dblclick","onDoubleClick");xs("focusin","onFocus");xs("focusout","onBlur");xs(F0,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jI=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MT(r,e,void 0,t),t.currentTarget=null}function B0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;sg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;sg(s,l,c),i=u}}}if(tu)throw t=Fh,tu=!1,Fh=null,t}function Je(t,e){var n=e[Jh];n===void 0&&(n=e[Jh]=new Set);var r=t+"__bubble";n.has(r)||(z0(e,t,2,!1),n.add(r))}function Yc(t,e,n){var r=0;e&&(r|=4),z0(n,t,r,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[dl]){t[dl]=!0,J_.forEach(function(n){n!=="selectionchange"&&(jI.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,Yc("selectionchange",!1,e))}}function z0(t,e,n,r){switch(A0(e)){case 1:var s=XT;break;case 4:s=ZT;break;default:s=lf}n=s.bind(null,e,n,t),s=void 0,!Uh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Xc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Us(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}d0(function(){var c=i,f=rf(n),m=[];e:{var g=$0.get(t);if(g!==void 0){var C=cf,R=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":C=pI;break;case"focusin":R="focus",C=qc;break;case"focusout":R="blur",C=qc;break;case"beforeblur":case"afterblur":C=qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=nI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=yI;break;case L0:case j0:case U0:C=iI;break;case F0:C=vI;break;case"scroll":C=eI;break;case"wheel":C=EI;break;case"copy":case"cut":case"paste":C=aI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Km}var N=(e&4)!==0,O=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;N=[];for(var E=c,A;E!==null;){A=E;var P=A.stateNode;if(A.tag===5&&P!==null&&(A=P,I!==null&&(P=oa(E,I),P!=null&&N.push(fa(E,P,A)))),O)break;E=E.return}0<N.length&&(g=new C(g,R,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",g&&n!==Lh&&(R=n.relatedTarget||n.fromElement)&&(Us(R)||R[br]))break e;if((C||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,C?(R=n.relatedTarget||n.toElement,C=c,R=R?Us(R):null,R!==null&&(O=ai(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(C=null,R=c),C!==R)){if(N=Gm,P="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=Km,P="onPointerLeave",I="onPointerEnter",E="pointer"),O=C==null?g:Ai(C),A=R==null?g:Ai(R),g=new N(P,E+"leave",C,n,f),g.target=O,g.relatedTarget=A,P=null,Us(f)===c&&(N=new N(I,E+"enter",R,n,f),N.target=A,N.relatedTarget=O,P=N),O=P,C&&R)t:{for(N=C,I=R,E=0,A=N;A;A=mi(A))E++;for(A=0,P=I;P;P=mi(P))A++;for(;0<E-A;)N=mi(N),E--;for(;0<A-E;)I=mi(I),A--;for(;E--;){if(N===I||I!==null&&N===I.alternate)break t;N=mi(N),I=mi(I)}N=null}else N=null;C!==null&&ig(m,g,C,N,!1),R!==null&&O!==null&&ig(m,O,R,N,!0)}}e:{if(g=c?Ai(c):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var j=CI;else if(Ym(g))if(P0)j=PI;else{j=bI;var U=RI}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=NI);if(j&&(j=j(t,c))){N0(m,j,n,f);break e}U&&U(t,g,c),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Ph(g,"number",g.value)}switch(U=c?Ai(c):window,t){case"focusin":(Ym(U)||U.contentEditable==="true")&&(Si=U,Hh=c,Go=null);break;case"focusout":Go=Hh=Si=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,ng(m,n,f);break;case"selectionchange":if(VI)break;case"keydown":case"keyup":ng(m,n,f)}var T;if(df)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ii?R0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(C0&&n.locale!=="ko"&&(Ii||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ii&&(T=k0()):(es=f,uf="value"in es?es.value:es.textContent,Ii=!0)),U=ou(c,v),0<U.length&&(v=new Wm(v,t,null,n,f),m.push({event:v,listeners:U}),T?v.data=T:(T=b0(n),T!==null&&(v.data=T)))),(T=II?SI(t,n):xI(t,n))&&(c=ou(c,"onBeforeInput"),0<c.length&&(f=new Wm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=T))}B0(m,e)})}function fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=oa(t,n),i!=null&&r.unshift(fa(t,i,s)),i=oa(t,e),i!=null&&r.push(fa(t,i,s))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ig(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=oa(n,i),u!=null&&o.unshift(fa(n,u,l))):s||(u=oa(n,i),u!=null&&o.push(fa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UI=/\r\n?/g,FI=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(UI,`
`).replace(FI,"")}function fl(t,e,n){if(e=og(e),og(t)!==e&&n)throw Error(F(425))}function au(){}var Gh=null,Wh=null;function Kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qh=typeof setTimeout=="function"?setTimeout:void 0,$I=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,BI=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(zI)}:Qh;function zI(t){setTimeout(function(){throw t})}function Zc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ua(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ua(e)}function os(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),or="__reactFiber$"+ao,pa="__reactProps$"+ao,br="__reactContainer$"+ao,Jh="__reactEvents$"+ao,HI="__reactListeners$"+ao,qI="__reactHandles$"+ao;function Us(t){var e=t[or];if(e)return e;for(var n=t.parentNode;n;){if(e=n[br]||n[or]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lg(t);t!==null;){if(n=t[or])return n;t=lg(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[or]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Ku(t){return t[pa]||null}var Yh=[],ki=-1;function As(t){return{current:t}}function Xe(t){0>ki||(t.current=Yh[ki],Yh[ki]=null,ki--)}function Ke(t,e){ki++,Yh[ki]=t.current,t.current=e}var ys={},tn=As(ys),yn=As(!1),Ks=ys;function Wi(t,e){var n=t.type.contextTypes;if(!n)return ys;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function _n(t){return t=t.childContextTypes,t!=null}function lu(){Xe(yn),Xe(tn)}function ug(t,e,n){if(tn.current!==ys)throw Error(F(168));Ke(tn,e),Ke(yn,n)}function H0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,RT(t)||"Unknown",s));return rt({},n,r)}function uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ys,Ks=tn.current,Ke(tn,t),Ke(yn,yn.current),!0}function cg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=H0(t,e,Ks),r.__reactInternalMemoizedMergedChildContext=t,Xe(yn),Xe(tn),Ke(tn,t)):Xe(yn),Ke(yn,n)}var wr=null,Qu=!1,eh=!1;function q0(t){wr===null?wr=[t]:wr.push(t)}function GI(t){Qu=!0,q0(t)}function ks(){if(!eh&&wr!==null){eh=!0;var t=0,e=Fe;try{var n=wr;for(Fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wr=null,Qu=!1}catch(s){throw wr!==null&&(wr=wr.slice(t+1)),g0(sf,ks),s}finally{Fe=e,eh=!1}}return null}var Ci=[],Ri=0,cu=null,hu=0,Nn=[],Pn=0,Qs=null,Ir=1,Sr="";function Ms(t,e){Ci[Ri++]=hu,Ci[Ri++]=cu,cu=t,hu=e}function G0(t,e,n){Nn[Pn++]=Ir,Nn[Pn++]=Sr,Nn[Pn++]=Qs,Qs=t;var r=Ir;t=Sr;var s=32-Kn(r)-1;r&=~(1<<s),n+=1;var i=32-Kn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ir=1<<32-Kn(e)+s|n<<s|r,Sr=i+t}else Ir=1<<i|n<<s|r,Sr=t}function pf(t){t.return!==null&&(Ms(t,1),G0(t,1,0))}function mf(t){for(;t===cu;)cu=Ci[--Ri],Ci[Ri]=null,hu=Ci[--Ri],Ci[Ri]=null;for(;t===Qs;)Qs=Nn[--Pn],Nn[Pn]=null,Sr=Nn[--Pn],Nn[Pn]=null,Ir=Nn[--Pn],Nn[Pn]=null}var Sn=null,In=null,Ze=!1,qn=null;function W0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,In=os(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qs!==null?{id:Ir,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,In=null,!0):!1;default:return!1}}function Xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zh(t){if(Ze){var e=In;if(e){var n=e;if(!hg(t,e)){if(Xh(t))throw Error(F(418));e=os(n.nextSibling);var r=Sn;e&&hg(t,e)?W0(r,n):(t.flags=t.flags&-4097|2,Ze=!1,Sn=t)}}else{if(Xh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ze=!1,Sn=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function pl(t){if(t!==Sn)return!1;if(!Ze)return dg(t),Ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kh(t.type,t.memoizedProps)),e&&(e=In)){if(Xh(t))throw K0(),Error(F(418));for(;e;)W0(t,e),e=os(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=os(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Sn?os(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=In;t;)t=os(t.nextSibling)}function Ki(){In=Sn=null,Ze=!1}function gf(t){qn===null?qn=[t]:qn.push(t)}var WI=Lr.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fg(t){var e=t._init;return e(t._payload)}function Q0(t){function e(I,E){if(t){var A=I.deletions;A===null?(I.deletions=[E],I.flags|=16):A.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=cs(I,E),I.index=0,I.sibling=null,I}function i(I,E,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<E?(I.flags|=2,E):A):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,A,P){return E===null||E.tag!==6?(E=ah(A,I.mode,P),E.return=I,E):(E=s(E,A),E.return=I,E)}function u(I,E,A,P){var j=A.type;return j===Ti?f(I,E,A.props.children,P,A.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Gr&&fg(j)===E.type)?(P=s(E,A.props),P.ref=bo(I,E,A),P.return=I,P):(P=$l(A.type,A.key,A.props,null,I.mode,P),P.ref=bo(I,E,A),P.return=I,P)}function c(I,E,A,P){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=lh(A,I.mode,P),E.return=I,E):(E=s(E,A.children||[]),E.return=I,E)}function f(I,E,A,P,j){return E===null||E.tag!==7?(E=qs(A,I.mode,P,j),E.return=I,E):(E=s(E,A),E.return=I,E)}function m(I,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ah(""+E,I.mode,A),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case sl:return A=$l(E.type,E.key,E.props,null,I.mode,A),A.ref=bo(I,null,E),A.return=I,A;case Ei:return E=lh(E,I.mode,A),E.return=I,E;case Gr:var P=E._init;return m(I,P(E._payload),A)}if(Mo(E)||xo(E))return E=qs(E,I.mode,A,null),E.return=I,E;ml(I,E)}return null}function g(I,E,A,P){var j=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(I,E,""+A,P);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case sl:return A.key===j?u(I,E,A,P):null;case Ei:return A.key===j?c(I,E,A,P):null;case Gr:return j=A._init,g(I,E,j(A._payload),P)}if(Mo(A)||xo(A))return j!==null?null:f(I,E,A,P,null);ml(I,A)}return null}function C(I,E,A,P,j){if(typeof P=="string"&&P!==""||typeof P=="number")return I=I.get(A)||null,l(E,I,""+P,j);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case sl:return I=I.get(P.key===null?A:P.key)||null,u(E,I,P,j);case Ei:return I=I.get(P.key===null?A:P.key)||null,c(E,I,P,j);case Gr:var U=P._init;return C(I,E,A,U(P._payload),j)}if(Mo(P)||xo(P))return I=I.get(A)||null,f(E,I,P,j,null);ml(E,P)}return null}function R(I,E,A,P){for(var j=null,U=null,T=E,v=E=0,S=null;T!==null&&v<A.length;v++){T.index>v?(S=T,T=null):S=T.sibling;var y=g(I,T,A[v],P);if(y===null){T===null&&(T=S);break}t&&T&&y.alternate===null&&e(I,T),E=i(y,E,v),U===null?j=y:U.sibling=y,U=y,T=S}if(v===A.length)return n(I,T),Ze&&Ms(I,v),j;if(T===null){for(;v<A.length;v++)T=m(I,A[v],P),T!==null&&(E=i(T,E,v),U===null?j=T:U.sibling=T,U=T);return Ze&&Ms(I,v),j}for(T=r(I,T);v<A.length;v++)S=C(T,I,v,A[v],P),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?v:S.key),E=i(S,E,v),U===null?j=S:U.sibling=S,U=S);return t&&T.forEach(function(x){return e(I,x)}),Ze&&Ms(I,v),j}function N(I,E,A,P){var j=xo(A);if(typeof j!="function")throw Error(F(150));if(A=j.call(A),A==null)throw Error(F(151));for(var U=j=null,T=E,v=E=0,S=null,y=A.next();T!==null&&!y.done;v++,y=A.next()){T.index>v?(S=T,T=null):S=T.sibling;var x=g(I,T,y.value,P);if(x===null){T===null&&(T=S);break}t&&T&&x.alternate===null&&e(I,T),E=i(x,E,v),U===null?j=x:U.sibling=x,U=x,T=S}if(y.done)return n(I,T),Ze&&Ms(I,v),j;if(T===null){for(;!y.done;v++,y=A.next())y=m(I,y.value,P),y!==null&&(E=i(y,E,v),U===null?j=y:U.sibling=y,U=y);return Ze&&Ms(I,v),j}for(T=r(I,T);!y.done;v++,y=A.next())y=C(T,I,v,y.value,P),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?v:y.key),E=i(y,E,v),U===null?j=y:U.sibling=y,U=y);return t&&T.forEach(function(k){return e(I,k)}),Ze&&Ms(I,v),j}function O(I,E,A,P){if(typeof A=="object"&&A!==null&&A.type===Ti&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case sl:e:{for(var j=A.key,U=E;U!==null;){if(U.key===j){if(j=A.type,j===Ti){if(U.tag===7){n(I,U.sibling),E=s(U,A.props.children),E.return=I,I=E;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Gr&&fg(j)===U.type){n(I,U.sibling),E=s(U,A.props),E.ref=bo(I,U,A),E.return=I,I=E;break e}n(I,U);break}else e(I,U);U=U.sibling}A.type===Ti?(E=qs(A.props.children,I.mode,P,A.key),E.return=I,I=E):(P=$l(A.type,A.key,A.props,null,I.mode,P),P.ref=bo(I,E,A),P.return=I,I=P)}return o(I);case Ei:e:{for(U=A.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(I,E.sibling),E=s(E,A.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=lh(A,I.mode,P),E.return=I,I=E}return o(I);case Gr:return U=A._init,O(I,E,U(A._payload),P)}if(Mo(A))return R(I,E,A,P);if(xo(A))return N(I,E,A,P);ml(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(I,E.sibling),E=s(E,A),E.return=I,I=E):(n(I,E),E=ah(A,I.mode,P),E.return=I,I=E),o(I)):n(I,E)}return O}var Qi=Q0(!0),J0=Q0(!1),du=As(null),fu=null,bi=null,yf=null;function _f(){yf=bi=fu=null}function vf(t){var e=du.current;Xe(du),t._currentValue=e}function ed(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Li(t,e){fu=t,yf=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(fu===null)throw Error(F(308));bi=t,fu.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var Fs=null;function wf(t){Fs===null?Fs=[t]:Fs.push(t)}function Y0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,wf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Nr(t,r)}function Nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function as(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Nr(t,n)}return s=r.interleaved,s===null?(e.next=e,wf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Nr(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,of(t,n)}}function pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pu(t,e,n,r){var s=t.updateQueue;Wr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,C=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(g=e,C=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){m=R.call(C,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,g=typeof R=="function"?R.call(C,m,g):R,g==null)break e;m=rt({},m,g);break e;case 2:Wr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else C={eventTime:C,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=C,u=m):f=f.next=C,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ys|=o,t.lanes=o,t.memoizedState=m}}function mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Ma={},ur=As(Ma),ma=As(Ma),ga=As(Ma);function $s(t){if(t===Ma)throw Error(F(174));return t}function Tf(t,e){switch(Ke(ga,e),Ke(ma,t),Ke(ur,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Oh(e,t)}Xe(ur),Ke(ur,e)}function Ji(){Xe(ur),Xe(ma),Xe(ga)}function Z0(t){$s(ga.current);var e=$s(ur.current),n=Oh(e,t.type);e!==n&&(Ke(ma,t),Ke(ur,n))}function If(t){ma.current===t&&(Xe(ur),Xe(ma))}var tt=As(0);function mu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var th=[];function Sf(){for(var t=0;t<th.length;t++)th[t]._workInProgressVersionPrimary=null;th.length=0}var Ml=Lr.ReactCurrentDispatcher,nh=Lr.ReactCurrentBatchConfig,Js=0,nt=null,xt=null,Ot=null,gu=!1,Wo=!1,ya=0,KI=0;function Qt(){throw Error(F(321))}function xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function Af(t,e,n,r,s,i){if(Js=i,nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?XI:ZI,t=n(r,s),Wo){i=0;do{if(Wo=!1,ya=0,25<=i)throw Error(F(301));i+=1,Ot=xt=null,e.updateQueue=null,Ml.current=eS,t=n(r,s)}while(Wo)}if(Ml.current=yu,e=xt!==null&&xt.next!==null,Js=0,Ot=xt=nt=null,gu=!1,e)throw Error(F(300));return t}function kf(){var t=ya!==0;return ya=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?nt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Fn(){if(xt===null){var t=nt.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=Ot===null?nt.memoizedState:Ot.next;if(e!==null)Ot=e,xt=t;else{if(t===null)throw Error(F(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Ot===null?nt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function _a(t,e){return typeof e=="function"?e(t):e}function rh(t){var e=Fn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=xt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((Js&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,nt.lanes|=f,Ys|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Xn(r,e.memoizedState)||(gn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,nt.lanes|=i,Ys|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sh(t){var e=Fn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Xn(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function ev(){}function tv(t,e){var n=nt,r=Fn(),s=e(),i=!Xn(r.memoizedState,s);if(i&&(r.memoizedState=s,gn=!0),r=r.queue,Cf(sv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,va(9,rv.bind(null,n,r,s,e),void 0,null),Vt===null)throw Error(F(349));Js&30||nv(n,e,s)}return s}function nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nt.updateQueue,e===null?(e={lastEffect:null,stores:null},nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,r){e.value=n,e.getSnapshot=r,iv(e)&&ov(t)}function sv(t,e,n){return n(function(){iv(e)&&ov(t)})}function iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function ov(t){var e=Nr(t,1);e!==null&&Qn(e,t,1,-1)}function gg(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e.queue=t,t=t.dispatch=YI.bind(null,nt,t),[e.memoizedState,t]}function va(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=nt.updateQueue,e===null?(e={lastEffect:null,stores:null},nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function av(){return Fn().memoizedState}function Ll(t,e,n,r){var s=sr();nt.flags|=t,s.memoizedState=va(1|e,n,void 0,r===void 0?null:r)}function Ju(t,e,n,r){var s=Fn();r=r===void 0?null:r;var i=void 0;if(xt!==null){var o=xt.memoizedState;if(i=o.destroy,r!==null&&xf(r,o.deps)){s.memoizedState=va(e,n,i,r);return}}nt.flags|=t,s.memoizedState=va(1|e,n,i,r)}function yg(t,e){return Ll(8390656,8,t,e)}function Cf(t,e){return Ju(2048,8,t,e)}function lv(t,e){return Ju(4,2,t,e)}function uv(t,e){return Ju(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4,4,cv.bind(null,e,t),n)}function Rf(){}function dv(t,e){var n=Fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fv(t,e){var n=Fn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pv(t,e,n){return Js&21?(Xn(n,e)||(n=v0(),nt.lanes|=n,Ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function QI(t,e){var n=Fe;Fe=n!==0&&4>n?n:4,t(!0);var r=nh.transition;nh.transition={};try{t(!1),e()}finally{Fe=n,nh.transition=r}}function mv(){return Fn().memoizedState}function JI(t,e,n){var r=us(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))yv(e,n);else if(n=Y0(t,e,n,r),n!==null){var s=ln();Qn(n,t,r,s),_v(n,e,r)}}function YI(t,e,n){var r=us(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))yv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Xn(l,o)){var u=e.interleaved;u===null?(s.next=s,wf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Y0(t,e,s,r),n!==null&&(s=ln(),Qn(n,t,r,s),_v(n,e,r))}}function gv(t){var e=t.alternate;return t===nt||e!==null&&e===nt}function yv(t,e){Wo=gu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,of(t,n)}}var yu={readContext:Un,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},XI={readContext:Un,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JI.bind(null,nt,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:gg,useDebugValue:Rf,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=gg(!1),e=t[0];return t=QI.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=nt,s=sr();if(Ze){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Vt===null)throw Error(F(349));Js&30||nv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,yg(sv.bind(null,r,i,t),[t]),r.flags|=2048,va(9,rv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=sr(),e=Vt.identifierPrefix;if(Ze){var n=Sr,r=Ir;n=(r&~(1<<32-Kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZI={readContext:Un,useCallback:dv,useContext:Un,useEffect:Cf,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:rh,useRef:av,useState:function(){return rh(_a)},useDebugValue:Rf,useDeferredValue:function(t){var e=Fn();return pv(e,xt.memoizedState,t)},useTransition:function(){var t=rh(_a)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},eS={readContext:Un,useCallback:dv,useContext:Un,useEffect:Cf,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:sh,useRef:av,useState:function(){return sh(_a)},useDebugValue:Rf,useDeferredValue:function(t){var e=Fn();return xt===null?e.memoizedState=t:pv(e,xt.memoizedState,t)},useTransition:function(){var t=sh(_a)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function td(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ln(),s=us(t),i=kr(r,s);i.payload=e,n!=null&&(i.callback=n),e=as(t,i,s),e!==null&&(Qn(e,t,s,r),Vl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ln(),s=us(t),i=kr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=as(t,i,s),e!==null&&(Qn(e,t,s,r),Vl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),r=us(t),s=kr(n,r);s.tag=2,e!=null&&(s.callback=e),e=as(t,s,r),e!==null&&(Qn(e,t,r,n),Vl(e,t,r))}};function _g(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,r)||!ha(s,i):!0}function vv(t,e,n){var r=!1,s=ys,i=e.contextType;return typeof i=="object"&&i!==null?i=Un(i):(s=_n(e)?Ks:tn.current,r=e.contextTypes,i=(r=r!=null)?Wi(t,s):ys),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function vg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function nd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ef(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Un(i):(i=_n(e)?Ks:tn.current,s.context=Wi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(td(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Yu.enqueueReplaceState(s,s.state,null),pu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Yi(t,e){try{var n="",r=e;do n+=CT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ih(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vu||(vu=!0,fd=r),rd(t,e)},n}function Ev(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){rd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof r!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=mS.bind(null,t,e,n),e.then(t,t))}function Eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,as(n,e,1))),n.lanes|=1),t)}var nS=Lr.ReactCurrentOwner,gn=!1;function on(t,e,n,r){e.child=t===null?J0(e,null,n,r):Qi(e,t.child,n,r)}function Ig(t,e,n,r,s){n=n.render;var i=e.ref;return Li(e,s),r=Af(t,e,n,r,i,s),n=kf(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pr(t,e,s)):(Ze&&n&&pf(e),e.flags|=1,on(t,e,r,s),e.child)}function Sg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Lf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Tv(t,e,i,r,s)):(t=$l(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(o,r)&&t.ref===e.ref)return Pr(t,e,s)}return e.flags|=1,t=cs(i,r),t.ref=e.ref,t.return=e,e.child=t}function Tv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ha(i,r)&&t.ref===e.ref)if(gn=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Pr(t,e,s)}return sd(t,e,n,r,s)}function Iv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Pi,En),En|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(Pi,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ke(Pi,En),En|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ke(Pi,En),En|=r;return on(t,e,s,n),e.child}function Sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,r,s){var i=_n(n)?Ks:tn.current;return i=Wi(e,i),Li(e,s),n=Af(t,e,n,r,i,s),r=kf(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pr(t,e,s)):(Ze&&r&&pf(e),e.flags|=1,on(t,e,n,s),e.child)}function xg(t,e,n,r,s){if(_n(n)){var i=!0;uu(e)}else i=!1;if(Li(e,s),e.stateNode===null)jl(t,e),vv(e,n,r),nd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=_n(n)?Ks:tn.current,c=Wi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&vg(e,o,r,c),Wr=!1;var g=e.memoizedState;o.state=g,pu(e,r,o,s),u=e.memoizedState,l!==r||g!==u||yn.current||Wr?(typeof f=="function"&&(td(e,n,f,r),u=e.memoizedState),(l=Wr||_g(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:zn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Un(u):(u=_n(n)?Ks:tn.current,u=Wi(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&vg(e,o,r,u),Wr=!1,g=e.memoizedState,o.state=g,pu(e,r,o,s);var R=e.memoizedState;l!==m||g!==R||yn.current||Wr?(typeof C=="function"&&(td(e,n,C,r),R=e.memoizedState),(c=Wr||_g(e,n,c,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return id(t,e,n,r,i,s)}function id(t,e,n,r,s,i){Sv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&cg(e,n,!1),Pr(t,e,i);r=e.stateNode,nS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qi(e,t.child,null,i),e.child=Qi(e,null,l,i)):on(t,e,l,i),e.memoizedState=r.state,s&&cg(e,n,!0),e.child}function xv(t){var e=t.stateNode;e.pendingContext?ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ug(t,e.context,!1),Tf(t,e.containerInfo)}function Ag(t,e,n,r,s){return Ki(),gf(s),e.flags|=256,on(t,e,n,r),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function Av(t,e,n){var r=e.pendingProps,s=tt.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ke(tt,s&1),t===null)return Zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ec(o,r,0,null),t=qs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ad(n),e.memoizedState=od,t):bf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return rS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cs(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=cs(l,i):(i=qs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=od,r}return i=t.child,t=i.sibling,r=cs(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bf(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&gf(r),Qi(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ih(Error(F(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ec({mode:"visible",children:r.children},s,0,null),i=qs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qi(e,t.child,null,o),e.child.memoizedState=ad(o),e.memoizedState=od,i);if(!(e.mode&1))return gl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=ih(i,r,void 0),gl(t,e,o,r)}if(l=(o&t.childLanes)!==0,gn||l){if(r=Vt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Nr(t,s),Qn(r,t,s,-1))}return Mf(),r=ih(Error(F(421))),gl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=gS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,In=os(s.nextSibling),Sn=e,Ze=!0,qn=null,t!==null&&(Nn[Pn++]=Ir,Nn[Pn++]=Sr,Nn[Pn++]=Qs,Ir=t.id,Sr=t.overflow,Qs=e),e=bf(e,r.children),e.flags|=4096,e)}function kg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ed(t.return,e,n)}function oh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function kv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(on(t,e,r.children,n),r=tt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,n,e);else if(t.tag===19)kg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ke(tt,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&mu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),oh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&mu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}oh(e,!0,n,null,i);break;case"together":oh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=cs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sS(t,e,n){switch(e.tag){case 3:xv(e),Ki();break;case 5:Z0(e);break;case 1:_n(e.type)&&uu(e);break;case 4:Tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ke(du,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ke(tt,tt.current&1),e.flags|=128,null):n&e.child.childLanes?Av(t,e,n):(Ke(tt,tt.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);Ke(tt,tt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ke(tt,tt.current),r)break;return null;case 22:case 23:return e.lanes=0,Iv(t,e,n)}return Pr(t,e,n)}var Cv,ld,Rv,bv;Cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ld=function(){};Rv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,$s(ur.current);var i=null;switch(n){case"input":s=bh(t,s),r=bh(t,r),i=[];break;case"select":s=rt({},s,{value:void 0}),r=rt({},r,{value:void 0}),i=[];break;case"textarea":s=Dh(t,s),r=Dh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=au)}Vh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Je("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};bv=function(t,e,n,r){n!==r&&(e.flags|=4)};function No(t,e){if(!Ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iS(t,e,n){var r=e.pendingProps;switch(mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return _n(e.type)&&lu(),Jt(e),null;case 3:return r=e.stateNode,Ji(),Xe(yn),Xe(tn),Sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(gd(qn),qn=null))),ld(t,e),Jt(e),null;case 5:If(e);var s=$s(ga.current);if(n=e.type,t!==null&&e.stateNode!=null)Rv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Jt(e),null}if(t=$s(ur.current),pl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[or]=e,r[pa]=i,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(s=0;s<jo.length;s++)Je(jo[s],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":Mm(r,i),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Je("invalid",r);break;case"textarea":jm(r,i),Je("invalid",r)}Vh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&fl(r.textContent,l,t),s=["children",""+l]):sa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Je("scroll",r)}switch(n){case"input":il(r),Lm(r,i,!0);break;case"textarea":il(r),Um(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=au)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[or]=e,t[pa]=r,Cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mh(n,r),n){case"dialog":Je("cancel",t),Je("close",t),s=r;break;case"iframe":case"object":case"embed":Je("load",t),s=r;break;case"video":case"audio":for(s=0;s<jo.length;s++)Je(jo[s],t);s=r;break;case"source":Je("error",t),s=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),s=r;break;case"details":Je("toggle",t),s=r;break;case"input":Mm(t,r),s=bh(t,r),Je("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=rt({},r,{value:void 0}),Je("invalid",t);break;case"textarea":jm(t,r),s=Dh(t,r),Je("invalid",t);break;default:s=r}Vh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?a0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&i0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ia(t,u):typeof u=="number"&&ia(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sa.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Je("scroll",t):u!=null&&Zd(t,i,u,o))}switch(n){case"input":il(t),Lm(t,r,!1);break;case"textarea":il(t),Um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Di(t,!!r.multiple,i,!1):r.defaultValue!=null&&Di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=au)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)bv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=$s(ga.current),$s(ur.current),pl(e)){if(r=e.stateNode,n=e.memoizedProps,r[or]=e,(i=r.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[or]=e,e.stateNode=r}return Jt(e),null;case 13:if(Xe(tt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ze&&In!==null&&e.mode&1&&!(e.flags&128))K0(),Ki(),e.flags|=98560,i=!1;else if(i=pl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[or]=e}else Ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),i=!1}else qn!==null&&(gd(qn),qn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||tt.current&1?At===0&&(At=3):Mf())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Ji(),ld(t,e),t===null&&da(e.stateNode.containerInfo),Jt(e),null;case 10:return vf(e.type._context),Jt(e),null;case 17:return _n(e.type)&&lu(),Jt(e),null;case 19:if(Xe(tt),i=e.memoizedState,i===null)return Jt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)No(i,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mu(t),o!==null){for(e.flags|=128,No(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(tt,tt.current&1|2),e.child}t=t.sibling}i.tail!==null&&dt()>Xi&&(e.flags|=128,r=!0,No(i,!1),e.lanes=4194304)}else{if(!r)if(t=mu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ze)return Jt(e),null}else 2*dt()-i.renderingStartTime>Xi&&n!==1073741824&&(e.flags|=128,r=!0,No(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=dt(),e.sibling=null,n=tt.current,Ke(tt,r?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return Vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?En&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function oS(t,e){switch(mf(e),e.tag){case 1:return _n(e.type)&&lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ji(),Xe(yn),Xe(tn),Sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return If(e),null;case 13:if(Xe(tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Xe(tt),null;case 4:return Ji(),null;case 10:return vf(e.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var yl=!1,Zt=!1,aS=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ut(t,e,r)}else n.current=null}function ud(t,e,n){try{n()}catch(r){ut(t,e,r)}}var Cg=!1;function lS(t,e){if(Gh=su,t=V0(),ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var C;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(C=m.firstChild)!==null;)g=m,m=C;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(C=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wh={focusedElem:t,selectionRange:n},su=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,O=R.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:zn(e.type,N),O);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(P){ut(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=Cg,Cg=!1,R}function Ko(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ud(e,n,i)}s=s.next}while(s!==r)}}function Xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[or],delete e[pa],delete e[Jh],delete e[HI],delete e[qI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pv(t){return t.tag===5||t.tag===3||t.tag===4}function Rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=au));else if(r!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Ut=null,Hn=!1;function Hr(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(Hu,n)}catch{}switch(n.tag){case 5:Zt||Ni(n,e);case 6:var r=Ut,s=Hn;Ut=null,Hr(t,e,n),Ut=r,Hn=s,Ut!==null&&(Hn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Hn?(t=Ut,n=n.stateNode,t.nodeType===8?Zc(t.parentNode,n):t.nodeType===1&&Zc(t,n),ua(t)):Zc(Ut,n.stateNode));break;case 4:r=Ut,s=Hn,Ut=n.stateNode.containerInfo,Hn=!0,Hr(t,e,n),Ut=r,Hn=s;break;case 0:case 11:case 14:case 15:if(!Zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ud(n,e,o),s=s.next}while(s!==r)}Hr(t,e,n);break;case 1:if(!Zt&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ut(n,e,l)}Hr(t,e,n);break;case 21:Hr(t,e,n);break;case 22:n.mode&1?(Zt=(r=Zt)||n.memoizedState!==null,Hr(t,e,n),Zt=r):Hr(t,e,n);break;default:Hr(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aS),e.forEach(function(r){var s=yS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ut=l.stateNode,Hn=!1;break e;case 3:Ut=l.stateNode.containerInfo,Hn=!0;break e;case 4:Ut=l.stateNode.containerInfo,Hn=!0;break e}l=l.return}if(Ut===null)throw Error(F(160));Dv(i,o,s),Ut=null,Hn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){ut(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),rr(t),r&4){try{Ko(3,t,t.return),Xu(3,t)}catch(N){ut(t,t.return,N)}try{Ko(5,t,t.return)}catch(N){ut(t,t.return,N)}}break;case 1:Bn(e,t),rr(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(Bn(e,t),rr(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var s=t.stateNode;try{ia(s,"")}catch(N){ut(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&n0(s,i),Mh(l,o);var c=Mh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?a0(s,m):f==="dangerouslySetInnerHTML"?i0(s,m):f==="children"?ia(s,m):Zd(s,f,m,c)}switch(l){case"input":Nh(s,i);break;case"textarea":r0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?Di(s,!!i.multiple,C,!1):g!==!!i.multiple&&(i.defaultValue!=null?Di(s,!!i.multiple,i.defaultValue,!0):Di(s,!!i.multiple,i.multiple?[]:"",!1))}s[pa]=i}catch(N){ut(t,t.return,N)}}break;case 6:if(Bn(e,t),rr(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){ut(t,t.return,N)}}break;case 3:if(Bn(e,t),rr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(e.containerInfo)}catch(N){ut(t,t.return,N)}break;case 4:Bn(e,t),rr(t);break;case 13:Bn(e,t),rr(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Df=dt())),r&4&&bg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||f,Bn(e,t),Zt=c):Bn(e,t),rr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(m=Q=f;Q!==null;){switch(g=Q,C=g.child,g.tag){case 0:case 11:case 14:case 15:Ko(4,g,g.return);break;case 1:Ni(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){ut(r,n,N)}}break;case 5:Ni(g,g.return);break;case 22:if(g.memoizedState!==null){Pg(m);continue}}C!==null?(C.return=g,Q=C):Pg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=o0("display",o))}catch(N){ut(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(N){ut(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Bn(e,t),rr(t),r&4&&bg(t);break;case 21:break;default:Bn(e,t),rr(t)}}function rr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Pv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ia(s,""),r.flags&=-33);var i=Rg(t);dd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rg(t);hd(t,l,o);break;default:throw Error(F(161))}}catch(u){ut(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uS(t,e,n){Q=t,Vv(t)}function Vv(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||yl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Zt;l=yl;var c=Zt;if(yl=o,(Zt=u)&&!c)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?Dg(s):u!==null?(u.return=o,Q=u):Dg(s);for(;i!==null;)Q=i,Vv(i),i=i.sibling;Q=s,yl=l,Zt=c}Ng(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):Ng(t)}}function Ng(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Zt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&mg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&ua(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Zt||e.flags&512&&cd(e)}catch(g){ut(e,e.return,g)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Pg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Dg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xu(4,e)}catch(u){ut(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ut(e,s,u)}}var i=e.return;try{cd(e)}catch(u){ut(e,i,u)}break;case 5:var o=e.return;try{cd(e)}catch(u){ut(e,o,u)}}}catch(u){ut(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var cS=Math.ceil,_u=Lr.ReactCurrentDispatcher,Nf=Lr.ReactCurrentOwner,jn=Lr.ReactCurrentBatchConfig,Ne=0,Vt=null,vt=null,Ht=0,En=0,Pi=As(0),At=0,wa=null,Ys=0,Zu=0,Pf=0,Qo=null,mn=null,Df=0,Xi=1/0,_r=null,vu=!1,fd=null,ls=null,_l=!1,ts=null,wu=0,Jo=0,pd=null,Ul=-1,Fl=0;function ln(){return Ne&6?dt():Ul!==-1?Ul:Ul=dt()}function us(t){return t.mode&1?Ne&2&&Ht!==0?Ht&-Ht:WI.transition!==null?(Fl===0&&(Fl=v0()),Fl):(t=Fe,t!==0||(t=window.event,t=t===void 0?16:A0(t.type)),t):1}function Qn(t,e,n,r){if(50<Jo)throw Jo=0,pd=null,Error(F(185));Da(t,n,r),(!(Ne&2)||t!==Vt)&&(t===Vt&&(!(Ne&2)&&(Zu|=n),At===4&&Qr(t,Ht)),vn(t,r),n===1&&Ne===0&&!(e.mode&1)&&(Xi=dt()+500,Qu&&ks()))}function vn(t,e){var n=t.callbackNode;WT(t,e);var r=ru(t,t===Vt?Ht:0);if(r===0)n!==null&&Bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bm(n),e===1)t.tag===0?GI(Og.bind(null,t)):q0(Og.bind(null,t)),BI(function(){!(Ne&6)&&ks()}),n=null;else{switch(w0(r)){case 1:n=sf;break;case 4:n=y0;break;case 16:n=nu;break;case 536870912:n=_0;break;default:n=nu}n=zv(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(Ul=-1,Fl=0,Ne&6)throw Error(F(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=ru(t,t===Vt?Ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eu(t,r);else{e=r;var s=Ne;Ne|=2;var i=jv();(Vt!==t||Ht!==e)&&(_r=null,Xi=dt()+500,Hs(t,e));do try{fS();break}catch(l){Lv(t,l)}while(!0);_f(),_u.current=i,Ne=s,vt!==null?e=0:(Vt=null,Ht=0,e=At)}if(e!==0){if(e===2&&(s=$h(t),s!==0&&(r=s,e=md(t,s))),e===1)throw n=wa,Hs(t,0),Qr(t,r),vn(t,dt()),n;if(e===6)Qr(t,r);else{if(s=t.current.alternate,!(r&30)&&!hS(s)&&(e=Eu(t,r),e===2&&(i=$h(t),i!==0&&(r=i,e=md(t,i))),e===1))throw n=wa,Hs(t,0),Qr(t,r),vn(t,dt()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Ls(t,mn,_r);break;case 3:if(Qr(t,r),(r&130023424)===r&&(e=Df+500-dt(),10<e)){if(ru(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ln(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Qh(Ls.bind(null,t,mn,_r),e);break}Ls(t,mn,_r);break;case 4:if(Qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Kn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=dt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cS(r/1960))-r,10<r){t.timeoutHandle=Qh(Ls.bind(null,t,mn,_r),r);break}Ls(t,mn,_r);break;case 5:Ls(t,mn,_r);break;default:throw Error(F(329))}}}return vn(t,dt()),t.callbackNode===n?Mv.bind(null,t):null}function md(t,e){var n=Qo;return t.current.memoizedState.isDehydrated&&(Hs(t,e).flags|=256),t=Eu(t,e),t!==2&&(e=mn,mn=n,e!==null&&gd(e)),t}function gd(t){mn===null?mn=t:mn.push.apply(mn,t)}function hS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Xn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qr(t,e){for(e&=~Pf,e&=~Zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),r=1<<n;t[n]=-1,e&=~r}}function Og(t){if(Ne&6)throw Error(F(327));ji();var e=ru(t,0);if(!(e&1))return vn(t,dt()),null;var n=Eu(t,e);if(t.tag!==0&&n===2){var r=$h(t);r!==0&&(e=r,n=md(t,r))}if(n===1)throw n=wa,Hs(t,0),Qr(t,e),vn(t,dt()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ls(t,mn,_r),vn(t,dt()),null}function Of(t,e){var n=Ne;Ne|=1;try{return t(e)}finally{Ne=n,Ne===0&&(Xi=dt()+500,Qu&&ks())}}function Xs(t){ts!==null&&ts.tag===0&&!(Ne&6)&&ji();var e=Ne;Ne|=1;var n=jn.transition,r=Fe;try{if(jn.transition=null,Fe=1,t)return t()}finally{Fe=r,jn.transition=n,Ne=e,!(Ne&6)&&ks()}}function Vf(){En=Pi.current,Xe(Pi)}function Hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$I(n)),vt!==null)for(n=vt.return;n!==null;){var r=n;switch(mf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&lu();break;case 3:Ji(),Xe(yn),Xe(tn),Sf();break;case 5:If(r);break;case 4:Ji();break;case 13:Xe(tt);break;case 19:Xe(tt);break;case 10:vf(r.type._context);break;case 22:case 23:Vf()}n=n.return}if(Vt=t,vt=t=cs(t.current,null),Ht=En=e,At=0,wa=null,Pf=Zu=Ys=0,mn=Qo=null,Fs!==null){for(e=0;e<Fs.length;e++)if(n=Fs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Fs=null}return t}function Lv(t,e){do{var n=vt;try{if(_f(),Ml.current=yu,gu){for(var r=nt.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}gu=!1}if(Js=0,Ot=xt=nt=null,Wo=!1,ya=0,Nf.current=null,n===null||n.return===null){At=1,wa=e,vt=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ht,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=Eg(o);if(C!==null){C.flags&=-257,Tg(C,o,l,i,e),C.mode&1&&wg(i,c,e),e=C,u=c;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){wg(i,c,e),Mf();break e}u=Error(F(426))}}else if(Ze&&l.mode&1){var O=Eg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Tg(O,o,l,i,e),gf(Yi(u,l));break e}}i=u=Yi(u,l),At!==4&&(At=2),Qo===null?Qo=[i]:Qo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=wv(i,u,e);pg(i,I);break e;case 1:l=u;var E=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(ls===null||!ls.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var P=Ev(i,l,e);pg(i,P);break e}}i=i.return}while(i!==null)}Fv(n)}catch(j){e=j,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(!0)}function jv(){var t=_u.current;return _u.current=yu,t===null?yu:t}function Mf(){(At===0||At===3||At===2)&&(At=4),Vt===null||!(Ys&268435455)&&!(Zu&268435455)||Qr(Vt,Ht)}function Eu(t,e){var n=Ne;Ne|=2;var r=jv();(Vt!==t||Ht!==e)&&(_r=null,Hs(t,e));do try{dS();break}catch(s){Lv(t,s)}while(!0);if(_f(),Ne=n,_u.current=r,vt!==null)throw Error(F(261));return Vt=null,Ht=0,At}function dS(){for(;vt!==null;)Uv(vt)}function fS(){for(;vt!==null&&!jT();)Uv(vt)}function Uv(t){var e=Bv(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?Fv(t):vt=e,Nf.current=null}function Fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oS(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,vt=null;return}}else if(n=iS(n,e,En),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);At===0&&(At=5)}function Ls(t,e,n){var r=Fe,s=jn.transition;try{jn.transition=null,Fe=1,pS(t,e,n,r)}finally{jn.transition=s,Fe=r}return null}function pS(t,e,n,r){do ji();while(ts!==null);if(Ne&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(KT(t,i),t===Vt&&(vt=Vt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,zv(nu,function(){return ji(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=jn.transition,jn.transition=null;var o=Fe;Fe=1;var l=Ne;Ne|=4,Nf.current=null,lS(t,n),Ov(n,t),OI(Wh),su=!!Gh,Wh=Gh=null,t.current=n,uS(n),UT(),Ne=l,Fe=o,jn.transition=i}else t.current=n;if(_l&&(_l=!1,ts=t,wu=s),i=t.pendingLanes,i===0&&(ls=null),BT(n.stateNode),vn(t,dt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(vu)throw vu=!1,t=fd,fd=null,t;return wu&1&&t.tag!==0&&ji(),i=t.pendingLanes,i&1?t===pd?Jo++:(Jo=0,pd=t):Jo=0,ks(),null}function ji(){if(ts!==null){var t=w0(wu),e=jn.transition,n=Fe;try{if(jn.transition=null,Fe=16>t?16:t,ts===null)var r=!1;else{if(t=ts,ts=null,wu=0,Ne&6)throw Error(F(331));var s=Ne;for(Ne|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Q=c;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:Ko(8,f,i)}var m=f.child;if(m!==null)m.return=f,Q=m;else for(;Q!==null;){f=Q;var g=f.sibling,C=f.return;if(Nv(f),f===c){Q=null;break}if(g!==null){g.return=C,Q=g;break}Q=C}}}var R=i.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ko(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,Q=I;break e}Q=i.return}}var E=t.current;for(Q=E;Q!==null;){o=Q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Q=A;else e:for(o=E;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xu(9,l)}}catch(j){ut(l,l.return,j)}if(l===o){Q=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,Q=P;break e}Q=l.return}}if(Ne=s,ks(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(Hu,t)}catch{}r=!0}return r}finally{Fe=n,jn.transition=e}}return!1}function Vg(t,e,n){e=Yi(n,e),e=wv(t,e,1),t=as(t,e,1),e=ln(),t!==null&&(Da(t,1,e),vn(t,e))}function ut(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ls===null||!ls.has(r))){t=Yi(n,t),t=Ev(e,t,1),e=as(e,t,1),t=ln(),e!==null&&(Da(e,1,t),vn(e,t));break}}e=e.return}}function mS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Ht&n)===n&&(At===4||At===3&&(Ht&130023424)===Ht&&500>dt()-Df?Hs(t,0):Pf|=n),vn(t,e)}function $v(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=ln();t=Nr(t,e),t!==null&&(Da(t,e,n),vn(t,n))}function gS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$v(t,n)}function yS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),$v(t,n)}var Bv;Bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,sS(t,e,n);gn=!!(t.flags&131072)}else gn=!1,Ze&&e.flags&1048576&&G0(e,hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var s=Wi(e,tn.current);Li(e,n),s=Af(null,e,r,t,s,n);var i=kf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(r)?(i=!0,uu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ef(e),s.updater=Yu,e.stateNode=s,s._reactInternals=e,nd(e,r,t,n),e=id(null,e,r,!0,i,n)):(e.tag=0,Ze&&i&&pf(e),on(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=vS(r),t=zn(r,t),s){case 0:e=sd(null,e,r,t,n);break e;case 1:e=xg(null,e,r,t,n);break e;case 11:e=Ig(null,e,r,t,n);break e;case 14:e=Sg(null,e,r,zn(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zn(r,s),sd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zn(r,s),xg(t,e,r,s,n);case 3:e:{if(xv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,X0(t,e),pu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Yi(Error(F(423)),e),e=Ag(t,e,r,n,s);break e}else if(r!==s){s=Yi(Error(F(424)),e),e=Ag(t,e,r,n,s);break e}else for(In=os(e.stateNode.containerInfo.firstChild),Sn=e,Ze=!0,qn=null,n=J0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===s){e=Pr(t,e,n);break e}on(t,e,r,n)}e=e.child}return e;case 5:return Z0(e),t===null&&Zh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Kh(r,s)?o=null:i!==null&&Kh(r,i)&&(e.flags|=32),Sv(t,e),on(t,e,o,n),e.child;case 6:return t===null&&Zh(e),null;case 13:return Av(t,e,n);case 4:return Tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qi(e,null,r,n):on(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zn(r,s),Ig(t,e,r,s,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ke(du,r._currentValue),r._currentValue=o,i!==null)if(Xn(i.value,o)){if(i.children===s.children&&!yn.current){e=Pr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=kr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ed(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ed(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}on(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Li(e,n),s=Un(s),r=r(s),e.flags|=1,on(t,e,r,n),e.child;case 14:return r=e.type,s=zn(r,e.pendingProps),s=zn(r.type,s),Sg(t,e,r,s,n);case 15:return Tv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zn(r,s),jl(t,e),e.tag=1,_n(r)?(t=!0,uu(e)):t=!1,Li(e,n),vv(e,r,s),nd(e,r,s,n),id(null,e,r,!0,t,n);case 19:return kv(t,e,n);case 22:return Iv(t,e,n)}throw Error(F(156,e.tag))};function zv(t,e){return g0(t,e)}function _S(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,r){return new _S(t,e,n,r)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vS(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tf)return 11;if(t===nf)return 14}return 2}function cs(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return qs(n.children,s,i,e);case ef:o=8,s|=8;break;case Ah:return t=Ln(12,n,e,s|2),t.elementType=Ah,t.lanes=i,t;case kh:return t=Ln(13,n,e,s),t.elementType=kh,t.lanes=i,t;case Ch:return t=Ln(19,n,e,s),t.elementType=Ch,t.lanes=i,t;case Z_:return ec(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y_:o=10;break e;case X_:o=9;break e;case tf:o=11;break e;case nf:o=14;break e;case Gr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function qs(t,e,n,r){return t=Ln(7,t,r,e),t.lanes=n,t}function ec(t,e,n,r){return t=Ln(22,t,r,e),t.elementType=Z_,t.lanes=n,t.stateNode={isHidden:!1},t}function ah(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function lh(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function jf(t,e,n,r,s,i,o,l,u){return t=new wS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ln(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ef(i),t}function ES(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hv(t){if(!t)return ys;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(_n(n))return H0(t,n,e)}return e}function qv(t,e,n,r,s,i,o,l,u){return t=jf(n,r,!0,t,s,i,o,l,u),t.context=Hv(null),n=t.current,r=ln(),s=us(n),i=kr(r,s),i.callback=e??null,as(n,i,s),t.current.lanes=s,Da(t,s,r),vn(t,r),t}function tc(t,e,n,r){var s=e.current,i=ln(),o=us(s);return n=Hv(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=as(s,e,o),t!==null&&(Qn(t,s,o,i),Vl(t,s,o)),o}function Tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uf(t,e){Mg(t,e),(t=t.alternate)&&Mg(t,e)}function TS(){return null}var Gv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ff(t){this._internalRoot=t}nc.prototype.render=Ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));tc(t,e,null,null)};nc.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xs(function(){tc(null,t,null,null)}),e[br]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=I0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&x0(t)}};function $f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function IS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Tu(o);i.call(c)}}var o=qv(e,r,t,0,null,!1,!1,"",Lg);return t._reactRootContainer=o,t[br]=o.current,da(t.nodeType===8?t.parentNode:t),Xs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Tu(u);l.call(c)}}var u=jf(t,0,!1,null,null,!1,!1,"",Lg);return t._reactRootContainer=u,t[br]=u.current,da(t.nodeType===8?t.parentNode:t),Xs(function(){tc(e,u,n,r)}),u}function sc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Tu(o);l.call(u)}}tc(e,o,t,s)}else o=IS(n,e,t,s,r);return Tu(o)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(of(e,n|1),vn(e,dt()),!(Ne&6)&&(Xi=dt()+500,ks()))}break;case 13:Xs(function(){var r=Nr(t,1);if(r!==null){var s=ln();Qn(r,t,1,s)}}),Uf(t,1)}};af=function(t){if(t.tag===13){var e=Nr(t,134217728);if(e!==null){var n=ln();Qn(e,t,134217728,n)}Uf(t,134217728)}};T0=function(t){if(t.tag===13){var e=us(t),n=Nr(t,e);if(n!==null){var r=ln();Qn(n,t,e,r)}Uf(t,e)}};I0=function(){return Fe};S0=function(t,e){var n=Fe;try{return Fe=t,e()}finally{Fe=n}};jh=function(t,e,n){switch(e){case"input":if(Nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ku(r);if(!s)throw Error(F(90));t0(r),Nh(r,s)}}}break;case"textarea":r0(t,n);break;case"select":e=n.value,e!=null&&Di(t,!!n.multiple,e,!1)}};c0=Of;h0=Xs;var SS={usingClientEntryPoint:!1,Events:[Va,Ai,Ku,l0,u0,Of]},Po={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xS={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p0(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||TS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Hu=vl.inject(xS),lr=vl}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$f(e))throw Error(F(200));return ES(t,e,null,n)};An.createRoot=function(t,e){if(!$f(t))throw Error(F(299));var n=!1,r="",s=Gv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=jf(t,1,!1,null,null,n,!1,r,s),t[br]=e.current,da(t.nodeType===8?t.parentNode:t),new Ff(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=p0(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Xs(t)};An.hydrate=function(t,e,n){if(!rc(e))throw Error(F(200));return sc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!$f(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Gv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qv(e,null,t,1,n??null,s,!1,i,o),t[br]=e.current,da(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new nc(e)};An.render=function(t,e,n){if(!rc(e))throw Error(F(200));return sc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!rc(t))throw Error(F(40));return t._reactRootContainer?(Xs(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};An.unstable_batchedUpdates=Of;An.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return sc(t,e,n,!1,r)};An.version="18.3.1-next-f1338f8080-20240426";function Wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv)}catch(t){console.error(t)}}Wv(),W_.exports=An;var AS=W_.exports,jg=AS;Sh.createRoot=jg.createRoot,Sh.hydrateRoot=jg.hydrateRoot;/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=t=>{const e=CS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=ae.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>ae.createElement("svg",{ref:u,...RS,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Kv("lucide",s),...!i&&!bS(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,f])=>ae.createElement(c,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(t,e)=>{const n=ae.forwardRef(({className:r,...s},i)=>ae.createElement(NS,{ref:i,iconNode:e,className:Kv(`lucide-${kS(Ug(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Ug(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],DS=me("binary",PS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Qv=me("brain",OS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Fg=me("calendar",VS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],LS=me("chart-column",MS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],US=me("chevron-down",jS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$S=me("chevron-left",FS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],zS=me("chevron-right",BS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],qS=me("chevron-up",HS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],WS=me("circle-alert",GS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],QS=me("circle-check",KS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],YS=me("clipboard-check",JS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Bf=me("clock",XS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],ex=me("cloud-upload",ZS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],nx=me("component",tx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$g=me("copy",rx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Jv=me("database",sx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ox=me("download",ix);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],lx=me("flag",ax);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],cx=me("folder-kanban",ux);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],dx=me("funnel",hx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Yv=me("globe",fx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],mx=me("layers",px);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],yx=me("lightbulb",gx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],vx=me("list-tree",_x);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ex=me("loader-circle",wx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Bg=me("map-pin",Tx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Sx=me("menu",Ix);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Ax=me("palette",xx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Cx=me("pen",kx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bx=me("play",Rx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Px=me("plus",Nx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],Ox=me("power",Dx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],Mx=me("refresh-ccw",Vx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jx=me("rotate-ccw",Lx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Fx=me("save",Ux);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Bx=me("settings-2",$x);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Hx=me("sparkles",zx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Xv=me("target",qx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Wx=me("trash-2",Gx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Zv=me("trending-up",Kx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Jx=me("users",Qx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Xx=me("wand-sparkles",Yx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],eA=me("x",Zx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],nA=me("zap-off",tA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],yd=me("zap",rA),sA=()=>{};var zg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},t1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,C=c&63;u||(C=64,o||(g=64)),r.push(n[f],n[m],n[g],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(e1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new oA;const g=i<<2|l>>4;if(r.push(g),c!==64){const C=l<<4&240|c>>2;if(r.push(C),m!==64){const R=c<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aA=function(t){const e=e1(t);return t1.encodeByteArray(e,!0)},Iu=function(t){return aA(t).replace(/\./g,"")},n1=function(t){try{return t1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uA=()=>lA().__FIREBASE_DEFAULTS__,cA=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n1(t[1]);return e&&JSON.parse(e)},ic=()=>{try{return sA()||uA()||cA()||hA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r1=t=>{var e,n;return(n=(e=ic())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},s1=t=>{const e=r1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},i1=()=>{var t;return(t=ic())==null?void 0:t.config},o1=t=>{var e;return(e=ic())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function a1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Iu(JSON.stringify(n)),Iu(JSON.stringify(o)),""].join(".")}const Yo={};function fA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Yo))Yo[e]?t.emulator.push(e):t.prod.push(e);return t}function pA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Hg=!1;function Hf(t,e){if(typeof window>"u"||typeof document>"u"||!Cs(window.location.host)||Yo[t]===e||Yo[t]||Hg)return;Yo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=fA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,C){g.setAttribute("width","24"),g.setAttribute("id",C),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Hg=!0,o()},g}function f(g,C){g.setAttribute("id",C),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=pA(r),C=n("text"),R=document.getElementById(C)||document.createElement("span"),N=n("learnmore"),O=document.getElementById(N)||document.createElement("a"),I=n("preprendIcon"),E=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),f(O,N);const P=c();u(E,I),A.append(E,R,O,P),document.body.appendChild(A)}i?(R.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function gA(){var e;const t=(e=ic())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _A(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wA(){const t=nn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EA(){return!gA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TA(){try{return typeof indexedDB=="object"}catch{return!1}}function IA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="FirebaseError";class yr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SA,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new yr(s,l,r)}}function xA(t,e){return t.replace(AA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AA=/\{\$([^}]+)}/g;function kA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qg(i)&&qg(o)){if(!Zs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function CA(t,e){const n=new RA(t,e);return n.subscribe.bind(n)}class RA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=uh),s.error===void 0&&(s.error=uh),s.complete===void 0&&(s.complete=uh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uh(){}/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class _s{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const js="[DEFAULT]";/**
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
 */class NA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DA(e))try{this.getOrInitializeService({instanceIdentifier:js})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=js){return this.instances.has(e)}getOptions(e=js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=js){return this.component?this.component.multipleInstances?e:js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PA(t){return t===js?void 0:t}function DA(t){return t.instantiationMode==="EAGER"}/**
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
 */class OA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const VA={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},MA=Te.INFO,LA={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},jA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qf{constructor(e){this.name=e,this._logLevel=MA,this._logHandler=jA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const UA=(t,e)=>e.some(n=>t instanceof n);let Gg,Wg;function FA(){return Gg||(Gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $A(){return Wg||(Wg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l1=new WeakMap,_d=new WeakMap,u1=new WeakMap,ch=new WeakMap,Gf=new WeakMap;function BA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(hs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&l1.set(n,t)}).catch(()=>{}),Gf.set(e,t),e}function zA(t){if(_d.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_d.set(t,e)}let vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||u1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HA(t){vd=t(vd)}function qA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hh(this),e,...n);return u1.set(r,e.sort?e.sort():[e]),hs(r)}:$A().includes(t)?function(...e){return t.apply(hh(this),e),hs(l1.get(this))}:function(...e){return hs(t.apply(hh(this),e))}}function GA(t){return typeof t=="function"?qA(t):(t instanceof IDBTransaction&&zA(t),UA(t,FA())?new Proxy(t,vd):t)}function hs(t){if(t instanceof IDBRequest)return BA(t);if(ch.has(t))return ch.get(t);const e=GA(t);return e!==t&&(ch.set(t,e),Gf.set(e,t)),e}const hh=t=>Gf.get(t);function WA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=hs(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hs(o.result),u.oldVersion,u.newVersion,hs(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const KA=["get","getKey","getAll","getAllKeys","count"],QA=["put","add","delete","clear"],dh=new Map;function Kg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dh.get(e))return dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return dh.set(e,i),i}HA(t=>({...t,get:(e,n,r)=>Kg(e,n)||t.get(e,n,r),has:(e,n)=>!!Kg(e,n)||t.has(e,n)}));/**
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
 */class JA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function YA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",Qg="0.14.9";/**
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
 */const Dr=new qf("@firebase/app"),XA="@firebase/app-compat",ZA="@firebase/analytics-compat",ek="@firebase/analytics",tk="@firebase/app-check-compat",nk="@firebase/app-check",rk="@firebase/auth",sk="@firebase/auth-compat",ik="@firebase/database",ok="@firebase/data-connect",ak="@firebase/database-compat",lk="@firebase/functions",uk="@firebase/functions-compat",ck="@firebase/installations",hk="@firebase/installations-compat",dk="@firebase/messaging",fk="@firebase/messaging-compat",pk="@firebase/performance",mk="@firebase/performance-compat",gk="@firebase/remote-config",yk="@firebase/remote-config-compat",_k="@firebase/storage",vk="@firebase/storage-compat",wk="@firebase/firestore",Ek="@firebase/ai",Tk="@firebase/firestore-compat",Ik="firebase",Sk="12.10.0";/**
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
 */const Ed="[DEFAULT]",xk={[wd]:"fire-core",[XA]:"fire-core-compat",[ek]:"fire-analytics",[ZA]:"fire-analytics-compat",[nk]:"fire-app-check",[tk]:"fire-app-check-compat",[rk]:"fire-auth",[sk]:"fire-auth-compat",[ik]:"fire-rtdb",[ok]:"fire-data-connect",[ak]:"fire-rtdb-compat",[lk]:"fire-fn",[uk]:"fire-fn-compat",[ck]:"fire-iid",[hk]:"fire-iid-compat",[dk]:"fire-fcm",[fk]:"fire-fcm-compat",[pk]:"fire-perf",[mk]:"fire-perf-compat",[gk]:"fire-rc",[yk]:"fire-rc-compat",[_k]:"fire-gcs",[vk]:"fire-gcs-compat",[wk]:"fire-fst",[Tk]:"fire-fst-compat",[Ek]:"fire-vertex","fire-js":"fire-js",[Ik]:"fire-js-all"};/**
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
 */const Su=new Map,Ak=new Map,Td=new Map;function Jg(t,e){try{t.container.addComponent(e)}catch(n){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ei(t){const e=t.name;if(Td.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,t);for(const n of Su.values())Jg(n,t);for(const n of Ak.values())Jg(n,t);return!0}function oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const kk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ds=new La("app","Firebase",kk);/**
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
 */class Ck{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const li=Sk;function c1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ed,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ds.create("bad-app-name",{appName:String(s)});if(n||(n=i1()),!n)throw ds.create("no-options");const i=Su.get(s);if(i){if(Zs(n,i.options)&&Zs(r,i.config))return i;throw ds.create("duplicate-app",{appName:s})}const o=new OA(s);for(const u of Td.values())o.addComponent(u);const l=new Ck(n,r,o);return Su.set(s,l),l}function Wf(t=Ed){const e=Su.get(t);if(!e&&t===Ed&&i1())return c1();if(!e)throw ds.create("no-app",{appName:t});return e}function cr(t,e,n){let r=xk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(o.join(" "));return}ei(new _s(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Rk="firebase-heartbeat-database",bk=1,Ea="firebase-heartbeat-store";let fh=null;function h1(){return fh||(fh=WA(Rk,bk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw ds.create("idb-open",{originalErrorMessage:t.message})})),fh}async function Nk(t){try{const n=(await h1()).transaction(Ea),r=await n.objectStore(Ea).get(d1(t));return await n.done,r}catch(e){if(e instanceof yr)Dr.warn(e.message);else{const n=ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(n.message)}}}async function Yg(t,e){try{const r=(await h1()).transaction(Ea,"readwrite");await r.objectStore(Ea).put(e,d1(t)),await r.done}catch(n){if(n instanceof yr)Dr.warn(n.message);else{const r=ds.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dr.warn(r.message)}}}function d1(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pk=1024,Dk=30;class Ok{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Dk){const o=Lk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xg(),{heartbeatsToSend:r,unsentEntries:s}=Vk(this._heartbeatsCache.heartbeats),i=Iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dr.warn(n),""}}}function Xg(){return new Date().toISOString().substring(0,10)}function Vk(t,e=Pk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TA()?IA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zg(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}function Lk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function jk(t){ei(new _s("platform-logger",e=>new JA(e),"PRIVATE")),ei(new _s("heartbeat",e=>new Ok(e),"PRIVATE")),cr(wd,Qg,t),cr(wd,Qg,"esm2020"),cr("fire-js","")}jk("");var Uk="firebase",Fk="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(Uk,Fk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="firebasestorage.googleapis.com",p1="storageBucket",$k=2*60*1e3,Bk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends yr{constructor(e,n,r=0){super(ph(e),`Firebase Storage: ${n} (${ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ft;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ft||(ft={}));function ph(t){return"storage/"+t}function Kf(){const t="An unknown error occurred, please check the error payload for server response.";return new pt(ft.UNKNOWN,t)}function zk(t){return new pt(ft.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Hk(t){return new pt(ft.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pt(ft.UNAUTHENTICATED,t)}function Gk(){return new pt(ft.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Wk(t){return new pt(ft.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Kk(){return new pt(ft.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qk(){return new pt(ft.CANCELED,"User canceled the upload/download.")}function Jk(t){return new pt(ft.INVALID_URL,"Invalid URL '"+t+"'.")}function Yk(t){return new pt(ft.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xk(){return new pt(ft.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+p1+"' property when initializing the app?")}function Zk(){return new pt(ft.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eC(t){return new pt(ft.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Id(t){return new pt(ft.INVALID_ARGUMENT,t)}function m1(){return new pt(ft.APP_DELETED,"The Firebase app was deleted.")}function tC(t){return new pt(ft.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xo(t,e){return new pt(ft.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Do(t){throw new pt(ft.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=an.makeFromUrl(e,n)}catch{return new an(e,"")}if(r.path==="")return r;throw Yk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",C=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},N=n===f1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",I=new RegExp(`^https?://${N}/${s}/${O}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:C,indices:R,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<A.length;P++){const j=A[P],U=j.regex.exec(e);if(U){const T=U[j.indices.bucket];let v=U[j.indices.path];v||(v=""),r=new an(T,v),j.postModify(r);break}}if(r==null)throw Jk(e);return r}}class nC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...O){c||(c=!0,e.apply(null,O))}function m(O){s=setTimeout(()=>{s=null,t(C,u())},O)}function g(){i&&clearTimeout(i)}function C(O,...I){if(c){g();return}if(O){g(),f.call(null,O,...I);return}if(u()||o){g(),f.call(null,O,...I);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,m(A)}let R=!1;function N(O){R||(R=!0,g(),!c&&(s!==null?(O||(l=2),clearTimeout(s),m(0)):O||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function sC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){return t!==void 0}function oC(t){return typeof t=="object"&&!Array.isArray(t)}function g1(t){return typeof t=="string"||t instanceof String}function ey(t){return Qf()&&t instanceof Blob}function Qf(){return typeof Blob<"u"}function Sd(t,e,n,r){if(r<e)throw Id(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Id(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function aC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Gs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Gs||(Gs={}));/**
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
 */function lC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n,r,s,i,o,l,u,c,f,m,g=!0,C=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new wl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Gs.NO_ERROR,u=i.getStatus();if(!l||lC(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Gs.ABORT;r(!1,new wl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new wl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());iC(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Kf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?m1():Qk();o(u)}else{const u=Kk();o(u)}};this.canceled_?n(!1,new wl(!1,null,!0)):this.backoffId_=rC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pC(t,e,n,r,s,i,o=!0,l=!1){const u=aC(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return dC(f,e),cC(f,n),hC(f,i),fC(f,r),new uC(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gC(...t){const e=mC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qf())return new Blob(t);throw new pt(ft.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _C(t){if(typeof atob>"u")throw eC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mh{constructor(e,n){this.data=e,this.contentType=n||null}}function vC(t,e){switch(t){case ar.RAW:return new mh(y1(e));case ar.BASE64:case ar.BASE64URL:return new mh(_1(t,e));case ar.DATA_URL:return new mh(EC(e),TC(e))}throw Kf()}function y1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function wC(t){let e;try{e=decodeURIComponent(t)}catch{throw Xo(ar.DATA_URL,"Malformed data URL.")}return y1(e)}function _1(t,e){switch(t){case ar.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Xo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ar.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Xo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_C(e)}catch(s){throw s.message.includes("polyfill")?s:Xo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class v1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xo(ar.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=IC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function EC(t){const e=new v1(t);return e.base64?_1(ar.BASE64,e.rest):wC(e.rest)}function TC(t){return new v1(t).contentType}function IC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){let r=0,s="";ey(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ey(this.data_)){const r=this.data_,s=yC(r,e,n);return s===null?null:new Jr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Jr(r,!0)}}static getBlob(...e){if(Qf()){const n=e.map(r=>r instanceof Jr?r.data_:r);return new Jr(gC.apply(null,n))}else{const n=e.map(o=>g1(o)?vC(ar.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Jr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){let e;try{e=JSON.parse(t)}catch{return null}return oC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function E1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){return e}class sn{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||AC}}let El=null;function kC(t){return!g1(t)||t.length<2?t:E1(t)}function CC(){if(El)return El;const t=[];t.push(new sn("bucket")),t.push(new sn("generation")),t.push(new sn("metageneration")),t.push(new sn("name","fullPath",!0));function e(i,o){return kC(o)}const n=new sn("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new sn("size");return s.xform=r,t.push(s),t.push(new sn("timeCreated")),t.push(new sn("updated")),t.push(new sn("md5Hash",null,!0)),t.push(new sn("cacheControl",null,!0)),t.push(new sn("contentDisposition",null,!0)),t.push(new sn("contentEncoding",null,!0)),t.push(new sn("contentLanguage",null,!0)),t.push(new sn("contentType",null,!0)),t.push(new sn("metadata","customMetadata",!0)),El=t,El}function RC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new an(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function bC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return RC(r,t),r}function NC(t,e,n){const r=w1(e);return r===null?null:bC(t,r,n)}function PC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
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
 */const ty="prefixes",ny="items";function DC(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ty])for(const s of n[ty]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new an(e,i));r.prefixes.push(o)}if(n[ny])for(const s of n[ny]){const i=t._makeStorageReference(new an(e,s.name));r.items.push(i)}return r}function OC(t,e,n){const r=w1(n);return r===null?null:DC(t,e,r)}class Yf{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){if(!t)throw Kf()}function VC(t,e){function n(r,s){const i=NC(t,s,e);return T1(i!==null),i}return n}function MC(t,e){function n(r,s){const i=OC(t,e,s);return T1(i!==null),i}return n}function Xf(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Gk():s=qk():n.getStatus()===402?s=Hk(t.bucket):n.getStatus()===403?s=Wk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function LC(t){const e=Xf(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=zk(t.path)),i.serverResponse=s.serverResponse,i}return n}function jC(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),l=Jf(o,t.host,t._protocol),u="GET",c=t.maxOperationRetryTime,f=new Yf(l,u,MC(t,e.bucket),c);return f.urlParams=i,f.errorHandler=Xf(e),f}function UC(t,e,n){const r=e.fullServerUrl(),s=Jf(r,t.host,t._protocol)+"?alt=media",i="GET",o=t.maxOperationRetryTime,l=new Yf(s,i,(u,c)=>c,o);return l.errorHandler=LC(e),l}function FC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $C(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=FC(null,e)),r}function BC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let P=0;P<2;P++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=$C(e,r,s),f=PC(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",C=Jr.getBlob(m,r,g);if(C===null)throw Zk();const R={name:c.fullPath},N=Jf(i,t.host,t._protocol),O="POST",I=t.maxUploadRetryTime,E=new Yf(N,O,VC(t,n),I);return E.urlParams=R,E.headers=o,E.body=C.uploadData(),E.errorHandler=Xf(e),E}class I1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Gs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Gs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Gs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Do("cannot .send() more than once");if(Cs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Do("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Do("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Do("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Do("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zC extends I1{initXhr(){this.xhr_.responseType="text"}}function S1(){return new zC}class HC extends I1{initXhr(){this.xhr_.responseType="arraybuffer"}}function qC(){return new HC}/**
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
 */class ti{constructor(e,n){this._service=e,n instanceof an?this._location=n:this._location=an.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ti(e,n)}get root(){const e=new an(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return E1(this._location.path)}get storage(){return this._service}get parent(){const e=SC(this._location.path);if(e===null)return null;const n=new an(this._location.bucket,e);return new ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw tC(e)}}function GC(t,e){t._throwIfRoot("getBytes");const n=UC(t.storage,t._location);return t.storage.makeRequestWithTokens(n,qC).then(r=>r)}function WC(t,e,n){t._throwIfRoot("uploadBytes");const r=BC(t.storage,t._location,CC(),new Jr(e,!0),n);return t.storage.makeRequestWithTokens(r,S1).then(s=>({metadata:s,ref:t}))}function KC(t){const e={prefixes:[],items:[]};return x1(t,e).then(()=>e)}async function x1(t,e,n){const s=await QC(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await x1(t,e,s.nextPageToken)}function QC(t,e){e!=null&&typeof e.maxResults=="number"&&Sd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=jC(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,S1)}function JC(t,e){const n=xC(t._location.path,e),r=new an(t._location.bucket,n);return new ti(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){return/^[A-Za-z]+:\/\//.test(t)}function XC(t,e){return new ti(t,e)}function A1(t,e){if(t instanceof Zf){const n=t;if(n._bucket==null)throw Xk();const r=new ti(n,n._bucket);return e!=null?A1(r,e):r}else return e!==void 0?JC(t,e):t}function ZC(t,e){if(e&&YC(e)){if(t instanceof Zf)return XC(t,e);throw Id("To use ref(service, url), the first argument must be a Storage instance.")}else return A1(t,e)}function ry(t,e){const n=e==null?void 0:e[p1];return n==null?null:an.makeFromBucketSpec(n,t)}function eR(t,e,n,r={}){t.host=`${e}:${n}`;const s=Cs(e);s&&(zf(`https://${t.host}/b`),Hf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:a1(i,t.app.options.projectId))}class Zf{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=f1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$k,this._maxUploadRetryTime=Bk,this._requests=new Set,s!=null?this._bucket=an.makeFromBucketSpec(s,this._host):this._bucket=ry(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=an.makeFromBucketSpec(this._url,e):this._bucket=ry(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new nC(m1());{const o=pC(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const sy="@firebase/storage",iy="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(t,e){return t=Rt(t),GC(t)}function nR(t,e,n){return t=Rt(t),WC(t,e,n)}function oy(t){return t=Rt(t),KC(t)}function ep(t,e){return t=Rt(t),ZC(t,e)}function rR(t=Wf(),e){t=Rt(t);const r=oc(t,k1).getImmediate({identifier:e}),s=s1("storage");return s&&sR(r,...s),r}function sR(t,e,n,r={}){eR(t,e,n,r)}function iR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Zf(n,r,s,e,li)}function oR(){ei(new _s(k1,iR,"PUBLIC").setMultipleInstances(!0)),cr(sy,iy,""),cr(sy,iy,"esm2020")}oR();var ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fs,C1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function S(){}S.prototype=v.prototype,T.F=v.prototype,T.prototype=new S,T.prototype.constructor=T,T.D=function(y,x,k){for(var w=Array(arguments.length-2),J=2;J<arguments.length;J++)w[J-2]=arguments[J];return v.prototype[x].apply(y,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,S){S||(S=0);const y=Array(16);if(typeof v=="string")for(var x=0;x<16;++x)y[x]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(x=0;x<16;++x)y[x]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=T.g[0],S=T.g[1],x=T.g[2];let k=T.g[3],w;w=v+(k^S&(x^k))+y[0]+3614090360&4294967295,v=S+(w<<7&4294967295|w>>>25),w=k+(x^v&(S^x))+y[1]+3905402710&4294967295,k=v+(w<<12&4294967295|w>>>20),w=x+(S^k&(v^S))+y[2]+606105819&4294967295,x=k+(w<<17&4294967295|w>>>15),w=S+(v^x&(k^v))+y[3]+3250441966&4294967295,S=x+(w<<22&4294967295|w>>>10),w=v+(k^S&(x^k))+y[4]+4118548399&4294967295,v=S+(w<<7&4294967295|w>>>25),w=k+(x^v&(S^x))+y[5]+1200080426&4294967295,k=v+(w<<12&4294967295|w>>>20),w=x+(S^k&(v^S))+y[6]+2821735955&4294967295,x=k+(w<<17&4294967295|w>>>15),w=S+(v^x&(k^v))+y[7]+4249261313&4294967295,S=x+(w<<22&4294967295|w>>>10),w=v+(k^S&(x^k))+y[8]+1770035416&4294967295,v=S+(w<<7&4294967295|w>>>25),w=k+(x^v&(S^x))+y[9]+2336552879&4294967295,k=v+(w<<12&4294967295|w>>>20),w=x+(S^k&(v^S))+y[10]+4294925233&4294967295,x=k+(w<<17&4294967295|w>>>15),w=S+(v^x&(k^v))+y[11]+2304563134&4294967295,S=x+(w<<22&4294967295|w>>>10),w=v+(k^S&(x^k))+y[12]+1804603682&4294967295,v=S+(w<<7&4294967295|w>>>25),w=k+(x^v&(S^x))+y[13]+4254626195&4294967295,k=v+(w<<12&4294967295|w>>>20),w=x+(S^k&(v^S))+y[14]+2792965006&4294967295,x=k+(w<<17&4294967295|w>>>15),w=S+(v^x&(k^v))+y[15]+1236535329&4294967295,S=x+(w<<22&4294967295|w>>>10),w=v+(x^k&(S^x))+y[1]+4129170786&4294967295,v=S+(w<<5&4294967295|w>>>27),w=k+(S^x&(v^S))+y[6]+3225465664&4294967295,k=v+(w<<9&4294967295|w>>>23),w=x+(v^S&(k^v))+y[11]+643717713&4294967295,x=k+(w<<14&4294967295|w>>>18),w=S+(k^v&(x^k))+y[0]+3921069994&4294967295,S=x+(w<<20&4294967295|w>>>12),w=v+(x^k&(S^x))+y[5]+3593408605&4294967295,v=S+(w<<5&4294967295|w>>>27),w=k+(S^x&(v^S))+y[10]+38016083&4294967295,k=v+(w<<9&4294967295|w>>>23),w=x+(v^S&(k^v))+y[15]+3634488961&4294967295,x=k+(w<<14&4294967295|w>>>18),w=S+(k^v&(x^k))+y[4]+3889429448&4294967295,S=x+(w<<20&4294967295|w>>>12),w=v+(x^k&(S^x))+y[9]+568446438&4294967295,v=S+(w<<5&4294967295|w>>>27),w=k+(S^x&(v^S))+y[14]+3275163606&4294967295,k=v+(w<<9&4294967295|w>>>23),w=x+(v^S&(k^v))+y[3]+4107603335&4294967295,x=k+(w<<14&4294967295|w>>>18),w=S+(k^v&(x^k))+y[8]+1163531501&4294967295,S=x+(w<<20&4294967295|w>>>12),w=v+(x^k&(S^x))+y[13]+2850285829&4294967295,v=S+(w<<5&4294967295|w>>>27),w=k+(S^x&(v^S))+y[2]+4243563512&4294967295,k=v+(w<<9&4294967295|w>>>23),w=x+(v^S&(k^v))+y[7]+1735328473&4294967295,x=k+(w<<14&4294967295|w>>>18),w=S+(k^v&(x^k))+y[12]+2368359562&4294967295,S=x+(w<<20&4294967295|w>>>12),w=v+(S^x^k)+y[5]+4294588738&4294967295,v=S+(w<<4&4294967295|w>>>28),w=k+(v^S^x)+y[8]+2272392833&4294967295,k=v+(w<<11&4294967295|w>>>21),w=x+(k^v^S)+y[11]+1839030562&4294967295,x=k+(w<<16&4294967295|w>>>16),w=S+(x^k^v)+y[14]+4259657740&4294967295,S=x+(w<<23&4294967295|w>>>9),w=v+(S^x^k)+y[1]+2763975236&4294967295,v=S+(w<<4&4294967295|w>>>28),w=k+(v^S^x)+y[4]+1272893353&4294967295,k=v+(w<<11&4294967295|w>>>21),w=x+(k^v^S)+y[7]+4139469664&4294967295,x=k+(w<<16&4294967295|w>>>16),w=S+(x^k^v)+y[10]+3200236656&4294967295,S=x+(w<<23&4294967295|w>>>9),w=v+(S^x^k)+y[13]+681279174&4294967295,v=S+(w<<4&4294967295|w>>>28),w=k+(v^S^x)+y[0]+3936430074&4294967295,k=v+(w<<11&4294967295|w>>>21),w=x+(k^v^S)+y[3]+3572445317&4294967295,x=k+(w<<16&4294967295|w>>>16),w=S+(x^k^v)+y[6]+76029189&4294967295,S=x+(w<<23&4294967295|w>>>9),w=v+(S^x^k)+y[9]+3654602809&4294967295,v=S+(w<<4&4294967295|w>>>28),w=k+(v^S^x)+y[12]+3873151461&4294967295,k=v+(w<<11&4294967295|w>>>21),w=x+(k^v^S)+y[15]+530742520&4294967295,x=k+(w<<16&4294967295|w>>>16),w=S+(x^k^v)+y[2]+3299628645&4294967295,S=x+(w<<23&4294967295|w>>>9),w=v+(x^(S|~k))+y[0]+4096336452&4294967295,v=S+(w<<6&4294967295|w>>>26),w=k+(S^(v|~x))+y[7]+1126891415&4294967295,k=v+(w<<10&4294967295|w>>>22),w=x+(v^(k|~S))+y[14]+2878612391&4294967295,x=k+(w<<15&4294967295|w>>>17),w=S+(k^(x|~v))+y[5]+4237533241&4294967295,S=x+(w<<21&4294967295|w>>>11),w=v+(x^(S|~k))+y[12]+1700485571&4294967295,v=S+(w<<6&4294967295|w>>>26),w=k+(S^(v|~x))+y[3]+2399980690&4294967295,k=v+(w<<10&4294967295|w>>>22),w=x+(v^(k|~S))+y[10]+4293915773&4294967295,x=k+(w<<15&4294967295|w>>>17),w=S+(k^(x|~v))+y[1]+2240044497&4294967295,S=x+(w<<21&4294967295|w>>>11),w=v+(x^(S|~k))+y[8]+1873313359&4294967295,v=S+(w<<6&4294967295|w>>>26),w=k+(S^(v|~x))+y[15]+4264355552&4294967295,k=v+(w<<10&4294967295|w>>>22),w=x+(v^(k|~S))+y[6]+2734768916&4294967295,x=k+(w<<15&4294967295|w>>>17),w=S+(k^(x|~v))+y[13]+1309151649&4294967295,S=x+(w<<21&4294967295|w>>>11),w=v+(x^(S|~k))+y[4]+4149444226&4294967295,v=S+(w<<6&4294967295|w>>>26),w=k+(S^(v|~x))+y[11]+3174756917&4294967295,k=v+(w<<10&4294967295|w>>>22),w=x+(v^(k|~S))+y[2]+718787259&4294967295,x=k+(w<<15&4294967295|w>>>17),w=S+(k^(x|~v))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(x+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+k&4294967295}r.prototype.v=function(T,v){v===void 0&&(v=T.length);const S=v-this.blockSize,y=this.C;let x=this.h,k=0;for(;k<v;){if(x==0)for(;k<=S;)s(this,T,k),k+=this.blockSize;if(typeof T=="string"){for(;k<v;)if(y[x++]=T.charCodeAt(k++),x==this.blockSize){s(this,y),x=0;break}}else for(;k<v;)if(y[x++]=T[k++],x==this.blockSize){s(this,y),x=0;break}}this.h=x,this.o+=v},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var S=T.length-8;S<T.length;++S)T[S]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,S=0;S<4;++S)for(let y=0;y<32;y+=8)T[v++]=this.g[S]>>>y&255;return T};function i(T,v){var S=l;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=v(T)}function o(T,v){this.h=v;const S=[];let y=!0;for(let x=T.length-1;x>=0;x--){const k=T[x]|0;y&&k==v||(S[x]=k,y=!1)}this.g=S}var l={};function u(T){return-128<=T&&T<128?i(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return O(c(-T));const v=[];let S=1;for(let y=0;T>=S;y++)v[y]=T/S|0,S*=4294967296;return new o(v,0)}function f(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return O(f(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=c(Math.pow(v,8));let y=m;for(let k=0;k<T.length;k+=8){var x=Math.min(8,T.length-k);const w=parseInt(T.substring(k,k+x),v);x<8?(x=c(Math.pow(v,x)),y=y.j(x).add(c(w))):(y=y.j(S),y=y.add(c(w)))}return y}var m=u(0),g=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();let T=0,v=1;for(let S=0;S<this.g.length;S++){const y=this.i(S);T+=(y>=0?y:4294967296+y)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(N(this))return"-"+O(this).toString(T);const v=c(Math.pow(T,6));var S=this;let y="";for(;;){const x=P(S,v).g;S=I(S,x.j(v));let k=((S.g.length>0?S.g[0]:S.h)>>>0).toString(T);if(S=x,R(S))return k+y;for(;k.length<6;)k="0"+k;y=k+y}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=I(this,T),N(T)?-1:R(T)?0:1};function O(T){const v=T.g.length,S=[];for(let y=0;y<v;y++)S[y]=~T.g[y];return new o(S,~T.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(T){const v=Math.max(this.g.length,T.g.length),S=[];let y=0;for(let x=0;x<=v;x++){let k=y+(this.i(x)&65535)+(T.i(x)&65535),w=(k>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);y=w>>>16,k&=65535,w&=65535,S[x]=w<<16|k}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(T,v){return T.add(O(v))}t.j=function(T){if(R(this)||R(T))return m;if(N(this))return N(T)?O(this).j(O(T)):O(O(this).j(T));if(N(T))return O(this.j(O(T)));if(this.l(C)<0&&T.l(C)<0)return c(this.m()*T.m());const v=this.g.length+T.g.length,S=[];for(var y=0;y<2*v;y++)S[y]=0;for(y=0;y<this.g.length;y++)for(let x=0;x<T.g.length;x++){const k=this.i(y)>>>16,w=this.i(y)&65535,J=T.i(x)>>>16,ue=T.i(x)&65535;S[2*y+2*x]+=w*ue,E(S,2*y+2*x),S[2*y+2*x+1]+=k*ue,E(S,2*y+2*x+1),S[2*y+2*x+1]+=w*J,E(S,2*y+2*x+1),S[2*y+2*x+2]+=k*J,E(S,2*y+2*x+2)}for(T=0;T<v;T++)S[T]=S[2*T+1]<<16|S[2*T];for(T=v;T<2*v;T++)S[T]=0;return new o(S,0)};function E(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function A(T,v){this.g=T,this.h=v}function P(T,v){if(R(v))throw Error("division by zero");if(R(T))return new A(m,m);if(N(T))return v=P(O(T),v),new A(O(v.g),O(v.h));if(N(v))return v=P(T,O(v)),new A(O(v.g),v.h);if(T.g.length>30){if(N(T)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var S=g,y=v;y.l(T)<=0;)S=j(S),y=j(y);var x=U(S,1),k=U(y,1);for(y=U(y,2),S=U(S,2);!R(y);){var w=k.add(y);w.l(T)<=0&&(x=x.add(S),k=w),y=U(y,1),S=U(S,1)}return v=I(T,x.j(v)),new A(x,v)}for(x=m;T.l(v)>=0;){for(S=Math.max(1,Math.floor(T.m()/v.m())),y=Math.ceil(Math.log(S)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),k=c(S),w=k.j(v);N(w)||w.l(T)>0;)S-=y,k=c(S),w=k.j(v);R(k)&&(k=g),x=x.add(k),T=I(T,w)}return new A(x,T)}t.B=function(T){return P(this,T).h},t.and=function(T){const v=Math.max(this.g.length,T.g.length),S=[];for(let y=0;y<v;y++)S[y]=this.i(y)&T.i(y);return new o(S,this.h&T.h)},t.or=function(T){const v=Math.max(this.g.length,T.g.length),S=[];for(let y=0;y<v;y++)S[y]=this.i(y)|T.i(y);return new o(S,this.h|T.h)},t.xor=function(T){const v=Math.max(this.g.length,T.g.length),S=[];for(let y=0;y<v;y++)S[y]=this.i(y)^T.i(y);return new o(S,this.h^T.h)};function j(T){const v=T.g.length+1,S=[];for(let y=0;y<v;y++)S[y]=T.i(y)<<1|T.i(y-1)>>>31;return new o(S,T.h)}function U(T,v){const S=v>>5;v%=32;const y=T.g.length-S,x=[];for(let k=0;k<y;k++)x[k]=v>0?T.i(k+S)>>>v|T.i(k+S+1)<<32-v:T.i(k+S);return new o(x,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,C1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,fs=o}).apply(typeof ay<"u"?ay:typeof self<"u"?self:typeof window<"u"?window:{});var Tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var R1,Uo,b1,Bl,xd,N1,P1,D1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tl=="object"&&Tl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var b=a[_];if(!(b in d))break e;d=d[b]}a=a[a.length-1],_=d[a],h=h(_),h!=_&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],_;for(_ in h)Object.prototype.hasOwnProperty.call(h,_)&&d.push([_,h[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,b,D){for(var H=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)H[_e-2]=arguments[_e];return h.prototype[b].apply(_,H)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const h=a.length;if(h>0){const d=Array(h);for(let _=0;_<h;_++)d[_]=a[_];return d}return[]}function R(a,h){for(let _=1;_<arguments.length;_++){const b=arguments[_];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const D=b.length||0;a.length=d+D;for(let H=0;H<D;H++)a[d+H]=b[H]}else a.push(b)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function I(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class E{constructor(){this.h=this.g=null}add(h,d){const _=A.get();_.set(h,d),this.h?this.h.next=_:this.g=_,this.h=_}}var A=new N(()=>new P,a=>a.reset());class P{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,U=!1,T=new E,v=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(S)}};function S(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){O(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}U=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function J(a,h){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(J,x),J.prototype.init=function(a,h){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&J.Z.h.call(this)},J.prototype.h=function(){J.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ue="closure_listenable_"+(Math.random()*1e6|0),bt=0;function we(a,h,d,_,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!_,this.ha=b,this.key=++bt,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Z(a,h,d){for(const _ in a)h.call(d,a[_],_,a)}function $(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function xe(a){const h={};for(const d in a)h[d]=a[d];return h}const Ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nt(a,h){let d,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(d in _)a[d]=_[d];for(let D=0;D<Ae.length;D++)d=Ae[D],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function Pe(a){this.src=a,this.g={},this.h=0}Pe.prototype.add=function(a,h,d,_,b){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const H=it(a,h,_,b);return H>-1?(h=a[H],d||(h.fa=!1)):(h=new we(h,this.src,D,!!_,b),h.fa=d,a.push(h)),h};function Tt(a,h){const d=h.type;if(d in a.g){var _=a.g[d],b=Array.prototype.indexOf.call(_,h,void 0),D;(D=b>=0)&&Array.prototype.splice.call(_,b,1),D&&(z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function it(a,h,d,_){for(let b=0;b<a.length;++b){const D=a[b];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==_)return b}return-1}var rn="closure_lm_"+(Math.random()*1e6|0),Cn={};function er(a,h,d,_,b){if(Array.isArray(h)){for(let D=0;D<h.length;D++)er(a,h[D],d,_,b);return null}return d=Mt(d),a&&a[ue]?a.J(h,d,l(_)?!!_.capture:!1,b):V(a,h,d,!1,_,b)}function V(a,h,d,_,b,D){if(!h)throw Error("Invalid event type");const H=l(b)?!!b.capture:!!b;let _e=$e(a);if(_e||(a[rn]=_e=new Pe(a)),d=_e.add(h,d,_,H,D),d.proxy)return d;if(_=B(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)k||(b=H),b===void 0&&(b=!1),a.addEventListener(h.toString(),_,b);else if(a.attachEvent)a.attachEvent(ce(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function B(){function a(d){return h.call(a.src,a.listener,d)}const h=Ue;return a}function ee(a,h,d,_,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)ee(a,h[D],d,_,b);else _=l(_)?!!_.capture:!!_,d=Mt(d),a&&a[ue]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=it(h,d,_,b),d>-1&&(z(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=$e(a))&&(h=a.g[h.toString()],a=-1,h&&(a=it(h,d,_,b)),(d=a>-1?h[a]:null)&&te(d))}function te(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ue])Tt(h.i,a);else{var d=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(d,_,a.capture):h.detachEvent?h.detachEvent(ce(d),_):h.addListener&&h.removeListener&&h.removeListener(_),(d=$e(h))?(Tt(d,a),d.h==0&&(d.src=null,h[rn]=null)):z(a)}}}function ce(a){return a in Cn?Cn[a]:Cn[a]="on"+a}function Ue(a,h){if(a.da)a=!0;else{h=new J(h,this);const d=a.listener,_=a.ha||a.src;a.fa&&te(a),a=d.call(_,h)}return a}function $e(a){return a=a[rn],a instanceof Pe?a:null}var ke="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mt(a){return typeof a=="function"?a:(a[ke]||(a[ke]=function(h){return a.handleEvent(h)}),a[ke])}function Le(){y.call(this),this.i=new Pe(this),this.M=this,this.G=null}m(Le,y),Le.prototype[ue]=!0,Le.prototype.removeEventListener=function(a,h,d,_){ee(this,a,h,d,_)};function ze(a,h){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var b=h;h=new x(_,a),Nt(h,b)}b=!0;let D,H;if(d)for(H=d.length-1;H>=0;H--)D=h.g=d[H],b=Oe(D,_,!0,h)&&b;if(D=h.g=a,b=Oe(D,_,!0,h)&&b,b=Oe(D,_,!1,h)&&b,d)for(H=0;H<d.length;H++)D=h.g=d[H],b=Oe(D,_,!1,h)&&b}Le.prototype.N=function(){if(Le.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let _=0;_<d.length;_++)z(d[_]);delete a.g[h],a.h--}}this.G=null},Le.prototype.J=function(a,h,d,_){return this.i.add(String(a),h,!1,d,_)},Le.prototype.K=function(a,h,d,_){return this.i.add(String(a),h,!0,d,_)};function Oe(a,h,d,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let b=!0;for(let D=0;D<h.length;++D){const H=h[D];if(H&&!H.da&&H.capture==d){const _e=H.listener,St=H.ha||H.src;H.fa&&Tt(a.i,H),b=_e.call(St,_)!==!1&&b}}return b&&!_.defaultPrevented}function ct(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Wt(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,Wt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Rn extends y{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Wt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(a){y.call(this),this.h=a,this.g={}}m(ot,y);var mt=[];function ne(a){Z(a.g,function(h,d){this.g.hasOwnProperty(d)&&te(h)},a),a.g={}}ot.prototype.N=function(){ot.Z.N.call(this),ne(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oe=o.JSON.stringify,Ve=o.JSON.parse,Ge=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function et(){}function q(){}var G={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function X(){x.call(this,"d")}m(X,x);function re(){x.call(this,"c")}m(re,x);var Y={},De=null;function ie(){return De=De||new Le}Y.Ia="serverreachability";function ye(a){x.call(this,Y.Ia,a)}m(ye,x);function fe(a){const h=ie();ze(h,new ye(h))}Y.STAT_EVENT="statevent";function Re(a,h){x.call(this,Y.STAT_EVENT,a),this.stat=h}m(Re,x);function de(a){const h=ie();ze(h,new Re(h,a))}Y.Ja="timingevent";function be(a,h){x.call(this,Y.Ja,a),this.size=h}m(be,x);function He(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function at(){this.g=!0}at.prototype.ua=function(){this.g=!1};function Me(a,h,d,_,b,D){a.info(function(){if(a.g)if(D){var H="",_e=D.split("&");for(let qe=0;qe<_e.length;qe++){var St=_e[qe].split("=");if(St.length>1){const Pt=St[0];St=St[1];const nr=Pt.split("_");H=nr.length>=2&&nr[1]=="type"?H+(Pt+"="+St+"&"):H+(Pt+"=redacted&")}}}else H=null;else H=D;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+d+`
`+H})}function Lt(a,h,d,_,b,D,H){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+d+`
`+D+" "+H})}function Kt(a,h,d,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+jt(a,d)+(_?" "+_:"")})}function $n(a,h){a.info(function(){return"TIMEOUT: "+h})}at.prototype.info=function(){};function jt(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(let H=1;H<_.length;H++)_[H]=""}}}}return oe(D)}catch{return h}}var It={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gt;function yt(){}m(yt,et),yt.prototype.g=function(){return new XMLHttpRequest},gt=new yt;function bs(a){return encodeURIComponent(String(a))}function Ns(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function jr(a,h,d,_){this.j=a,this.i=h,this.l=d,this.S=_||1,this.V=new ot(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wp}function Wp(){this.i=null,this.g="",this.h=!1}var Kp={},Sc={};function xc(a,h,d){a.M=1,a.A=Qa(tr(h)),a.u=d,a.R=!0,Qp(a,null)}function Qp(a,h){a.F=Date.now(),Ka(a),a.B=tr(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),lm(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Wp,a.g=Am(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Rn(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,_=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(mt[0]=b.toString()),b=mt);for(let D=0;D<b.length;D++){const H=er(d,b[D],_||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.J?xe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),fe(),Me(a.i,a.v,a.B,a.l,a.S,a.u)}jr.prototype.ba=function(a){a=a.target;const h=this.O;h&&$r(a)==3?h.j():this.Y(a)},jr.prototype.Y=function(a){try{if(a==this.g)e:{const _e=$r(this.g),St=this.g.ya(),qe=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||mm(this.g)))){this.K||_e!=4||St==7||(St==8||qe<=0?fe(3):fe(2)),Ac(this);var h=this.g.ca();this.X=h;var d=LE(this);if(this.o=h==200,Lt(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var _,b=this.g;if((_=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_)){var D=_;break t}}D=null}if(a=D)Kt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,kc(this,a);else{this.o=!1,this.m=3,de(12),Ps(this),mo(this);break e}}if(this.R){a=!0;let Pt;for(;!this.K&&this.C<d.length;)if(Pt=jE(this,d),Pt==Sc){_e==4&&(this.m=4,de(14),a=!1),Kt(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Kp){this.m=4,de(15),Kt(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Kt(this.i,this.l,Pt,null),kc(this,Pt);if(Jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,de(16),a=!1),this.o=this.o&&a,!a)Kt(this.i,this.l,d,"[Invalid Chunked Response]"),Ps(this),mo(this);else if(d.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Vc(H),H.P=!0,de(11))}}else Kt(this.i,this.l,d,null),kc(this,d);_e==4&&Ps(this),this.o&&!this.K&&(_e==4?Tm(this.j,this):(this.o=!1,Ka(this)))}else XE(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,de(12)):(this.m=0,de(13)),Ps(this),mo(this)}}}catch{}finally{}};function LE(a){if(!Jp(a))return a.g.la();const h=mm(a.g);if(h==="")return"";let d="";const _=h.length,b=$r(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ps(a),mo(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<_;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(b&&D==_-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Jp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function jE(a,h){var d=a.C,_=h.indexOf(`
`,d);return _==-1?Sc:(d=Number(h.substring(d,_)),isNaN(d)?Kp:(_+=1,_+d>h.length?Sc:(h=h.slice(_,_+d),a.C=_+d,h)))}jr.prototype.cancel=function(){this.K=!0,Ps(this)};function Ka(a){a.T=Date.now()+a.H,Yp(a,a.H)}function Yp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=He(c(a.aa,a),h)}function Ac(a){a.D&&(o.clearTimeout(a.D),a.D=null)}jr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?($n(this.i,this.B),this.M!=2&&(fe(),de(17)),Ps(this),this.m=2,mo(this)):Yp(this,this.T-a)};function mo(a){a.j.I==0||a.K||Tm(a.j,a)}function Ps(a){Ac(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ne(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function kc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Cc(d.h,a))){if(!a.L&&Cc(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)el(d),Xa(d);else break e;Oc(d),de(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=He(c(d.Va,d),6e3));em(d.h)<=1&&d.ta&&(d.ta=void 0)}else Os(d,11)}else if((a.L||d.g==a)&&el(d),!w(h))for(b=d.Ba.g.parse(h),h=0;h<b.length;h++){let qe=b[h];const Pt=qe[0];if(!(Pt<=d.K))if(d.K=Pt,qe=qe[1],d.I==2)if(qe[0]=="c"){d.M=qe[1],d.ba=qe[2];const nr=qe[3];nr!=null&&(d.ka=nr,d.j.info("VER="+d.ka));const Vs=qe[4];Vs!=null&&(d.za=Vs,d.j.info("SVER="+d.za));const Br=qe[5];Br!=null&&typeof Br=="number"&&Br>0&&(_=1.5*Br,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const zr=a.g;if(zr){const nl=zr.g?zr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var D=_.h;D.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Rc(D,D.h),D.h=null))}if(_.G){const Mc=zr.g?zr.g.getResponseHeader("X-HTTP-Session-Id"):null;Mc&&(_.wa=Mc,Qe(_.J,_.G,Mc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var H=a;if(_.na=xm(_,_.L?_.ba:null,_.W),H.L){tm(_.h,H);var _e=H,St=_.O;St&&(_e.H=St),_e.D&&(Ac(_e),Ka(_e)),_.g=H}else wm(_);d.i.length>0&&Za(d)}else qe[0]!="stop"&&qe[0]!="close"||Os(d,7);else d.I==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Os(d,7):Dc(d):qe[0]!="noop"&&d.l&&d.l.qa(qe),d.A=0)}}fe(4)}catch{}}var UE=class{constructor(a,h){this.g=a,this.map=h}};function Xp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function em(a){return a.h?1:a.g?a.g.size:0}function Cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Rc(a,h){a.g?a.g.add(h):a.h=h}function tm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Xp.prototype.cancel=function(){if(this.i=nm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return C(a.i)}var rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FE(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let b,D=null;_>=0?(b=a[d].substring(0,_),D=a[d].substring(_+1)):b=a[d],h(b,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ur(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Ur?(this.l=a.l,go(this,a.j),this.o=a.o,this.g=a.g,yo(this,a.u),this.h=a.h,bc(this,um(a.i)),this.m=a.m):a&&(h=String(a).match(rm))?(this.l=!1,go(this,h[1]||"",!0),this.o=_o(h[2]||""),this.g=_o(h[3]||"",!0),yo(this,h[4]),this.h=_o(h[5]||"",!0),bc(this,h[6]||"",!0),this.m=_o(h[7]||"")):(this.l=!1,this.i=new wo(null,this.l))}Ur.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(vo(h,sm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(vo(h,sm,!0),"@"),a.push(bs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(vo(d,d.charAt(0)=="/"?zE:BE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",vo(d,qE)),a.join("")},Ur.prototype.resolve=function(a){const h=tr(this);let d=!!a.j;d?go(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var _=a.h;if(d)yo(h,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var b=h.h.lastIndexOf("/");b!=-1&&(_=h.h.slice(0,b+1)+_)}if(b=_,b==".."||b==".")_="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){_=b.lastIndexOf("/",0)==0,b=b.split("/");const D=[];for(let H=0;H<b.length;){const _e=b[H++];_e=="."?_&&H==b.length&&D.push(""):_e==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),_&&H==b.length&&D.push("")):(D.push(_e),_=!0)}_=D.join("/")}else _=b}return d?h.h=_:d=a.i.toString()!=="",d?bc(h,um(a.i)):d=!!a.m,d&&(h.m=a.m),h};function tr(a){return new Ur(a)}function go(a,h,d){a.j=d?_o(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function yo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function bc(a,h,d){h instanceof wo?(a.i=h,GE(a.i,a.l)):(d||(h=vo(h,HE)),a.i=new wo(h,a.l))}function Qe(a,h,d){a.i.set(h,d)}function Qa(a){return Qe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function _o(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vo(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,$E),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $E(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sm=/[#\/\?@]/g,BE=/[#\?:]/g,zE=/[#\?]/g,HE=/[#\?@]/g,qE=/#/g;function wo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ds(a){a.g||(a.g=new Map,a.h=0,a.i&&FE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=wo.prototype,t.add=function(a,h){Ds(this),this.i=null,a=fi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function im(a,h){Ds(a),h=fi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function om(a,h){return Ds(a),h=fi(a,h),a.g.has(h)}t.forEach=function(a,h){Ds(this),this.g.forEach(function(d,_){d.forEach(function(b){a.call(h,b,_,this)},this)},this)};function am(a,h){Ds(a);let d=[];if(typeof h=="string")om(a,h)&&(d=d.concat(a.g.get(fi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Ds(this),this.i=null,a=fi(this,a),om(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=am(this,a),a.length>0?String(a[0]):h):h};function lm(a,h,d){im(a,h),d.length>0&&(a.i=null,a.g.set(fi(a,h),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let _=0;_<h.length;_++){var d=h[_];const b=bs(d);d=am(this,d);for(let D=0;D<d.length;D++){let H=b;d[D]!==""&&(H+="="+bs(d[D])),a.push(H)}}return this.i=a.join("&")};function um(a){const h=new wo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function fi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function GE(a,h){h&&!a.j&&(Ds(a),a.i=null,a.g.forEach(function(d,_){const b=_.toLowerCase();_!=b&&(im(this,_),lm(this,b,d))},a)),a.j=h}function WE(a,h){const d=new at;if(o.Image){const _=new Image;_.onload=f(Fr,d,"TestLoadImage: loaded",!0,h,_),_.onerror=f(Fr,d,"TestLoadImage: error",!1,h,_),_.onabort=f(Fr,d,"TestLoadImage: abort",!1,h,_),_.ontimeout=f(Fr,d,"TestLoadImage: timeout",!1,h,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function KE(a,h){const d=new at,_=new AbortController,b=setTimeout(()=>{_.abort(),Fr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(b),D.ok?Fr(d,"TestPingServer: ok",!0,h):Fr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Fr(d,"TestPingServer: error",!1,h)})}function Fr(a,h,d,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(d)}catch{}}function QE(){this.g=new Ge}function Nc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Nc,et),Nc.prototype.g=function(){return new Ja(this.i,this.h)};function Ja(a,h){Le.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ja,Le),t=Ja.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,To(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Eo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,To(this)),this.g&&(this.readyState=3,To(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function cm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Eo(this):To(this),this.readyState==3&&cm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Eo(this))},t.Na=function(a){this.g&&(this.response=a,Eo(this))},t.ga=function(){this.g&&Eo(this)};function Eo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,To(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function To(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hm(a){let h="";return Z(a,function(d,_){h+=_,h+=":",h+=d,h+=`\r
`}),h}function Pc(a,h,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=hm(d),typeof a=="string"?d!=null&&bs(d):Qe(a,h,d))}function lt(a){Le.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(lt,Le);var JE=/^https?$/i,YE=["POST","PUT"];t=lt.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gt.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){dm(this,D);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)d.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())d.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(YE,h,void 0)>=0)||_||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,H]of d)this.g.setRequestHeader(D,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){dm(this,D)}};function dm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,fm(a),Ya(a)}function fm(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ze(this,"complete"),ze(this,"abort"),Ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ya(this,!0)),lt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?pm(this):this.Xa())},t.Xa=function(){pm(this)};function pm(a){if(a.h&&typeof i<"u"){if(a.v&&$r(a)==4)setTimeout(a.Ca.bind(a),0);else if(ze(a,"readystatechange"),$r(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var _;if(_=D===0){let H=String(a.D).match(rm)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),_=!JE.test(H?H.toLowerCase():"")}d=_}if(d)ze(a,"complete"),ze(a,"success");else{a.o=6;try{var b=$r(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",fm(a)}}finally{Ya(a)}}}}function Ya(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||ze(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function $r(a){return a.g?a.g.readyState:0}t.ca=function(){try{return $r(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ve(h)}};function mm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function XE(a){const h={};a=(a.g&&$r(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(w(a[_]))continue;var d=Ns(a[_]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[b]||[];h[b]=D,D.push(d)}$(h,function(_){return _.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Io(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function gm(a){this.za=0,this.i=[],this.j=new at,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Io("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Io("baseRetryDelayMs",5e3,a),this.Za=Io("retryDelaySeedMs",1e4,a),this.Ta=Io("forwardChannelMaxRetries",2,a),this.va=Io("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Xp(a&&a.concurrentRequestLimit),this.Ba=new QE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=gm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,_){de(0),this.W=a,this.H=h||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=xm(this,null,this.W),Za(this)};function Dc(a){if(ym(a),a.I==3){var h=a.V++,d=tr(a.J);if(Qe(d,"SID",a.M),Qe(d,"RID",h),Qe(d,"TYPE","terminate"),So(a,d),h=new jr(a,a.j,h),h.M=2,h.A=Qa(tr(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Am(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ka(h)}Sm(a)}function Xa(a){a.g&&(Vc(a),a.g.cancel(),a.g=null)}function ym(a){Xa(a),a.v&&(o.clearTimeout(a.v),a.v=null),el(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Za(a){if(!Zp(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||v(),U||(j(),U=!0),T.add(h,a),a.D=0}}function ZE(a,h){return em(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=He(c(a.Ea,a,h),Im(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new jr(this,this.j,a);let D=this.o;if(this.U&&(D?(D=xe(D),Nt(D,this.U)):D=this.U),this.u!==null||this.R||(b.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=vm(this,b,h),d=tr(this.J),Qe(d,"RID",a),Qe(d,"CVER",22),this.G&&Qe(d,"X-HTTP-Session-Id",this.G),So(this,d),D&&(this.R?h="headers="+bs(hm(D))+"&"+h:this.u&&Pc(d,this.u,D)),Rc(this.h,b),this.Ra&&Qe(d,"TYPE","init"),this.S?(Qe(d,"$req",h),Qe(d,"SID","null"),b.U=!0,xc(b,d,null)):xc(b,d,h),this.I=2}}else this.I==3&&(a?_m(this,a):this.i.length==0||Zp(this.h)||_m(this))};function _m(a,h){var d;h?d=h.l:d=a.V++;const _=tr(a.J);Qe(_,"SID",a.M),Qe(_,"RID",d),Qe(_,"AID",a.K),So(a,_),a.u&&a.o&&Pc(_,a.u,a.o),d=new jr(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=vm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Rc(a.h,d),xc(d,_,h)}function So(a,h){a.H&&Z(a.H,function(d,_){Qe(h,_,d)}),a.l&&Z({},function(d,_){Qe(h,_,d)})}function vm(a,h,d){d=Math.min(a.i.length,d);const _=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let _e=-1;for(;;){const St=["count="+d];_e==-1?d>0?(_e=b[0].g,St.push("ofs="+_e)):_e=0:St.push("ofs="+_e);let qe=!0;for(let Pt=0;Pt<d;Pt++){var D=b[Pt].g;const nr=b[Pt].map;if(D-=_e,D<0)_e=Math.max(0,b[Pt].g-100),qe=!1;else try{D="req"+D+"_"||"";try{var H=nr instanceof Map?nr:Object.entries(nr);for(const[Vs,Br]of H){let zr=Br;l(Br)&&(zr=oe(Br)),St.push(D+Vs+"="+encodeURIComponent(zr))}}catch(Vs){throw St.push(D+"type="+encodeURIComponent("_badmap")),Vs}}catch{_&&_(nr)}}if(qe){H=St.join("&");break e}}H=void 0}return a=a.i.splice(0,d),h.G=a,H}function wm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||v(),U||(j(),U=!0),T.add(h,a),a.A=0}}function Oc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=He(c(a.Da,a),Im(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Em(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=He(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,de(10),Xa(this),Em(this))};function Vc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Em(a){a.g=new jr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=tr(a.na);Qe(h,"RID","rpc"),Qe(h,"SID",a.M),Qe(h,"AID",a.K),Qe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Qe(h,"TO",a.ia),Qe(h,"TYPE","xmlhttp"),So(a,h),a.u&&a.o&&Pc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Qa(tr(h)),d.u=null,d.R=!0,Qp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Xa(this),Oc(this),de(19))};function el(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Tm(a,h){var d=null;if(a.g==h){el(a),Vc(a),a.g=null;var _=2}else if(Cc(a.h,h))d=h.G,tm(a.h,h),_=1;else return;if(a.I!=0){if(h.o)if(_==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var b=a.D;_=ie(),ze(_,new be(_,d)),Za(a)}else wm(a);else if(b=h.m,b==3||b==0&&h.X>0||!(_==1&&ZE(a,h)||_==2&&Oc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),b){case 1:Os(a,5);break;case 4:Os(a,10);break;case 3:Os(a,6);break;default:Os(a,2)}}}function Im(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Os(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),_=a.Ua;const b=!_;_=new Ur(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||go(_,"https"),Qa(_),b?WE(_.toString(),d):KE(_.toString(),d)}else de(2);a.I=0,a.l&&a.l.pa(h),Sm(a),ym(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),de(2)):(this.j.info("Failed to ping google.com"),de(1))};function Sm(a){if(a.I=0,a.ja=[],a.l){const h=nm(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function xm(a,h,d){var _=d instanceof Ur?tr(d):new Ur(d);if(_.g!="")h&&(_.g=h+"."+_.g),yo(_,_.u);else{var b=o.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;const D=new Ur(null);_&&go(D,_),h&&(D.g=h),b&&yo(D,b),d&&(D.h=d),_=D}return d=a.G,h=a.wa,d&&h&&Qe(_,d,h),Qe(_,"VER",a.ka),So(a,_),_}function Am(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new lt(new Nc({ab:d})):new lt(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function km(){}t=km.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function tl(){}tl.prototype.g=function(a,h){return new wn(a,h)};function wn(a,h){Le.call(this),this.g=new gm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new pi(this)}m(wn,Le),wn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){Dc(this.g)},wn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=oe(a),a=d);h.i.push(new UE(h.Ya++,a)),h.I==3&&Za(h)},wn.prototype.N=function(){this.g.l=null,delete this.j,Dc(this.g),delete this.g,wn.Z.N.call(this)};function Cm(a){X.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Cm,X);function Rm(){re.call(this),this.status=1}m(Rm,re);function pi(a){this.g=a}m(pi,km),pi.prototype.ra=function(){ze(this.g,"a")},pi.prototype.qa=function(a){ze(this.g,new Cm(a))},pi.prototype.pa=function(a){ze(this.g,new Rm)},pi.prototype.oa=function(){ze(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,D1=function(){return new tl},P1=function(){return ie()},N1=Y,xd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},It.NO_ERROR=0,It.TIMEOUT=8,It.HTTP_ERROR=6,Bl=It,bn.COMPLETE="complete",b1=bn,q.EventType=G,G.OPEN="a",G.CLOSE="b",G.ERROR="c",G.MESSAGE="d",Le.prototype.listen=Le.prototype.J,Uo=q,lt.prototype.listenOnce=lt.prototype.K,lt.prototype.getLastError=lt.prototype.Ha,lt.prototype.getLastErrorCode=lt.prototype.ya,lt.prototype.getStatus=lt.prototype.ca,lt.prototype.getResponseJson=lt.prototype.La,lt.prototype.getResponseText=lt.prototype.la,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Fa,R1=lt}).apply(typeof Tl<"u"?Tl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo="12.10.0";function aR(t){lo=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ni=new qf("@firebase/firestore");function yi(){return ni.logLevel}function K(t,...e){if(ni.logLevel<=Te.DEBUG){const n=e.map(tp);ni.debug(`Firestore (${lo}): ${t}`,...n)}}function Or(t,...e){if(ni.logLevel<=Te.ERROR){const n=e.map(tp);ni.error(`Firestore (${lo}): ${t}`,...n)}}function ri(t,...e){if(ni.logLevel<=Te.WARN){const n=e.map(tp);ni.warn(`Firestore (${lo}): ${t}`,...n)}}function tp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,O1(t,r,n)}function O1(t,e,n){let r=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Or(r),new Error(r)}function je(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||O1(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends yr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class V1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class uR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cR{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){je(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new ps;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ps,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ps)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(je(typeof r.accessToken=="string",31837,{l:r}),new V1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string",2055,{h:e}),new Xt(e)}}class hR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ly{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){je(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ly(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(je(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ly(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ad(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return gh(s)===gh(i)?Ie(s,i):gh(s)?1:-1}return Ie(t.length,e.length)}const mR=55296,gR=57343;function gh(t){const e=t.charCodeAt(0);return e>=mR&&e<=gR}function Zi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="__name__";class ir{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=ir.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ie(e.length,n.length)}static compareSegments(e,n){const r=ir.isNumericId(e),s=ir.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ir.extractNumericId(e).compare(ir.extractNumericId(n)):Ad(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fs.fromString(e.substring(4,e.length-2))}}class We extends ir{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const yR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zt extends ir{construct(e,n,r){return new zt(e,n,r)}static isValidIdentifier(e){return yR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uy}static keyField(){return new zt([uy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zt(n)}static emptyPath(){return new zt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(We.fromString(e))}static fromName(e){return new se(We.fromString(e).popFirst(5))}static empty(){return new se(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new We(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _R(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cy(t){if(!se.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hy(t){if(se.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function L1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ac(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Ta(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ac(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Et(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ua(t,e){if(!L1(t))throw new W(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=-62135596800,fy=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*fy);return new Ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<dy)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fy}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ua(e,Ye._jsonSchema))return new Ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-dy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ye._jsonSchemaVersion="firestore/timestamp/1.0",Ye._jsonSchema={type:Et("string",Ye._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Ye(0,0))}static max(){return new pe(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ia=-1;function vR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new vs(s,se.empty(),e)}function wR(t){return new vs(t.readTime,t.key,Ia)}class vs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vs(pe.min(),se.empty(),Ia)}static max(){return new vs(pe.max(),se.empty(),Ia)}}function ER(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==TR)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function SR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function co(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=-1;function uc(t){return t==null}function xu(t){return t===0&&1/t==-1/0}function xR(t){return typeof t=="number"&&Number.isInteger(t)&&!xu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="";function AR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=py(e)),e=kR(t.get(n),e);return py(e)}function kR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case j1:n+="";break;default:n+=i}}return n}function py(t){return t+j1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Bt.RED,this.left=s??Bt.EMPTY,this.right=i??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Bt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Bt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gy(this.data.getIterator())}getIteratorFrom(e){return new gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.fields=e,e.sort(zt.comparator)}static empty(){return new Gn([])}unionWith(e){let n=new Ct(zt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class F1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new F1("Invalid base64 string: "+i):i}}(e);return new Gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const CR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ws(t){if(je(!!t,39018),typeof t=="string"){let e=0;const n=CR.exec(t);if(je(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?Gt.fromBase64String(t):Gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="server_timestamp",B1="__type__",z1="__previous_value__",H1="__local_write_time__";function sp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[B1])==null?void 0:r.stringValue)===$1}function cc(t){const e=t.mapValue.fields[z1];return sp(e)?cc(e):e}function Sa(t){const e=ws(t.mapValue.fields[H1].timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const Au="(default)";class xa{constructor(e,n){this.projectId=e,this.database=n||Au}static empty(){return new xa("","")}get isDefaultDatabase(){return this.database===Au}isEqual(e){return e instanceof xa&&e.projectId===this.projectId&&e.database===this.database}}function bR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xa(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="__type__",NR="__max__",Sl={mapValue:{}},G1="__vector__",ku="value";function Ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sp(t)?4:DR(t)?9007199254740991:PR(t)?10:11:le(28295,{value:t})}function mr(t,e){if(t===e)return!0;const n=Ts(t);if(n!==Ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sa(t).isEqual(Sa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ws(s.timestampValue),l=ws(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Es(s.bytesValue).isEqual(Es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ht(s.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ht(s.integerValue)===ht(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ht(s.doubleValue),l=ht(i.doubleValue);return o===l?xu(o)===xu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(my(o)!==my(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mr(o[u],l[u])))return!1;return!0}(t,e);default:return le(52216,{left:t})}}function Aa(t,e){return(t.values||[]).find(n=>mr(n,e))!==void 0}function eo(t,e){if(t===e)return 0;const n=Ts(t),r=Ts(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ht(i.integerValue||i.doubleValue),u=ht(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return yy(t.timestampValue,e.timestampValue);case 4:return yy(Sa(t),Sa(e));case 5:return Ad(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Es(i),u=Es(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=Ie(l[c],u[c]);if(f!==0)return f}return Ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ie(ht(i.latitude),ht(o.latitude));return l!==0?l:Ie(ht(i.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _y(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,C,R,N;const l=i.fields||{},u=o.fields||{},c=(g=l[ku])==null?void 0:g.arrayValue,f=(C=u[ku])==null?void 0:C.arrayValue,m=Ie(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:_y(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Sl.mapValue&&o===Sl.mapValue)return 0;if(i===Sl.mapValue)return 1;if(o===Sl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=Ad(u[m],f[m]);if(g!==0)return g;const C=eo(l[u[m]],c[f[m]]);if(C!==0)return C}return Ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function yy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=ws(t),r=ws(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function _y(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=eo(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function to(t){return kd(t)}function kd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ws(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kd(n.fields[o])}`;return s+"}"}(t.mapValue):le(61005,{value:t})}function zl(t){switch(Ts(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cc(t);return e?16+zl(e):16;case 5:return 2*t.stringValue.length;case 6:return Es(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ui(r.fields,(i,o)=>{s+=i.length+zl(o)}),s}(t.mapValue);default:throw le(13486,{value:t})}}function vy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cd(t){return!!t&&"integerValue"in t}function ip(t){return!!t&&"arrayValue"in t}function wy(t){return!!t&&"nullValue"in t}function Ey(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hl(t){return!!t&&"mapValue"in t}function PR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[q1])==null?void 0:r.stringValue)===G1}function Zo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zo(t.arrayValue.values[n]);return e}return{...t}}function DR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===NR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zo(n)}setAll(e){let n=zt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Zo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Hl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ui(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new On(Zo(this.value))}}function W1(t){const e=[];return ui(t.fields,(n,r)=>{const s=new zt([n]);if(Hl(r)){const i=W1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new en(e,0,pe.min(),pe.min(),pe.min(),On.empty(),0)}static newFoundDocument(e,n,r,s){return new en(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new en(e,2,n,pe.min(),pe.min(),On.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,pe.min(),pe.min(),On.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cu{constructor(e,n){this.position=e,this.inclusive=n}}function Ty(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=eo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Iy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function OR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class K1{}class wt extends K1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MR(e,n,r):n==="array-contains"?new UR(e,r):n==="in"?new FR(e,r):n==="not-in"?new $R(e,r):n==="array-contains-any"?new BR(e,r):new wt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LR(e,r):new jR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(eo(n,this.value)):n!==null&&Ts(this.value)===Ts(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends K1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Zn(e,n)}matches(e){return Q1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Q1(t){return t.op==="and"}function J1(t){return VR(t)&&Q1(t)}function VR(t){for(const e of t.filters)if(e instanceof Zn)return!1;return!0}function Rd(t){if(t instanceof wt)return t.field.canonicalString()+t.op.toString()+to(t.value);if(J1(t))return t.filters.map(e=>Rd(e)).join(",");{const e=t.filters.map(n=>Rd(n)).join(",");return`${t.op}(${e})`}}function Y1(t,e){return t instanceof wt?function(r,s){return s instanceof wt&&r.op===s.op&&r.field.isEqual(s.field)&&mr(r.value,s.value)}(t,e):t instanceof Zn?function(r,s){return s instanceof Zn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Y1(o,s.filters[l]),!0):!1}(t,e):void le(19439)}function X1(t){return t instanceof wt?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(t):t instanceof Zn?function(n){return n.op.toString()+" {"+n.getFilters().map(X1).join(" ,")+"}"}(t):"Filter"}class MR extends wt{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class LR extends wt{constructor(e,n){super(e,"in",n),this.keys=Z1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jR extends wt{constructor(e,n){super(e,"not-in",n),this.keys=Z1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Z1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class UR extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ip(n)&&Aa(n.arrayValue,this.value)}}class FR extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class $R extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Aa(this.value.arrayValue,n)}}class BR extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ip(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}/**
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
 */class zR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Sy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zR(t,e,n,r,s,i,o)}function op(t){const e=ge(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>to(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>to(r)).join(",")),e.Te=n}return e.Te}function ap(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Y1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Iy(t.startAt,e.startAt)&&Iy(t.endAt,e.endAt)}function bd(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function HR(t,e,n,r,s,i,o,l){return new ho(t,e,n,r,s,i,o,l)}function ew(t){return new ho(t)}function xy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qR(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function tw(t){return t.collectionGroup!==null}function ea(t){const e=ge(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ct(zt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ka(i,r))}),n.has(zt.keyField().canonicalString())||e.Ie.push(new ka(zt.keyField(),r))}return e.Ie}function hr(t){const e=ge(t);return e.Ee||(e.Ee=GR(e,ea(t))),e.Ee}function GR(t,e){if(t.limitType==="F")return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ka(s.field,i)});const n=t.endAt?new Cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cu(t.startAt.position,t.startAt.inclusive):null;return Sy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nd(t,e){const n=t.filters.concat([e]);return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function WR(t,e){const n=t.explicitOrderBy.concat([e]);return new ho(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Ru(t,e,n){return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return ap(hr(t),hr(e))&&t.limitType===e.limitType}function nw(t){return`${op(hr(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>X1(s)).join(", ")}]`),uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>to(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>to(s)).join(",")),`Target(${r})`}(hr(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ea(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Ty(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ea(r),s)||r.endAt&&!function(o,l,u){const c=Ty(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ea(r),s))}(t,e)}function KR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rw(t){return(e,n)=>{let r=!1;for(const s of ea(t)){const i=QR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QR(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?eo(u,c):le(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return U1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new st(se.comparator);function Vr(){return JR}const sw=new st(se.comparator);function Fo(...t){let e=sw;for(const n of t)e=e.insert(n.key,n);return e}function iw(t){let e=sw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Bs(){return ta()}function ow(){return ta()}function ta(){return new ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const YR=new st(se.comparator),XR=new Ct(se.comparator);function Se(...t){let e=XR;for(const n of t)e=e.add(n);return e}const ZR=new Ct(Ie);function e2(){return ZR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function aw(t){return{integerValue:""+t}}function t2(t,e){return xR(e)?aw(e):lp(t,e)}/**
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
 */class fc{constructor(){this._=void 0}}function n2(t,e,n){return t instanceof Ca?function(s,i){const o={fields:{[B1]:{stringValue:$1},[H1]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sp(i)&&(i=cc(i)),i&&(o.fields[z1]=i),{mapValue:o}}(n,e):t instanceof Ra?uw(t,e):t instanceof ba?cw(t,e):function(s,i){const o=lw(s,i),l=Ay(o)+Ay(s.Ae);return Cd(o)&&Cd(s.Ae)?aw(l):lp(s.serializer,l)}(t,e)}function r2(t,e,n){return t instanceof Ra?uw(t,e):t instanceof ba?cw(t,e):n}function lw(t,e){return t instanceof bu?function(r){return Cd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ca extends fc{}class Ra extends fc{constructor(e){super(),this.elements=e}}function uw(t,e){const n=hw(e);for(const r of t.elements)n.some(s=>mr(s,r))||n.push(r);return{arrayValue:{values:n}}}class ba extends fc{constructor(e){super(),this.elements=e}}function cw(t,e){let n=hw(e);for(const r of t.elements)n=n.filter(s=>!mr(s,r));return{arrayValue:{values:n}}}class bu extends fc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ay(t){return ht(t.integerValue||t.doubleValue)}function hw(t){return ip(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n){this.field=e,this.transform=n}}function i2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ra&&s instanceof Ra||r instanceof ba&&s instanceof ba?Zi(r.elements,s.elements,mr):r instanceof bu&&s instanceof bu?mr(r.Ae,s.Ae):r instanceof Ca&&s instanceof Ca}(t.transform,e.transform)}class o2{constructor(e,n){this.version=e,this.transformResults=n}}class Cr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cr}static exists(e){return new Cr(void 0,e)}static updateTime(e){return new Cr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pc{}function dw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pw(t.key,Cr.none()):new Fa(t.key,t.data,Cr.none());{const n=t.data,r=On.empty();let s=new Ct(zt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hi(t.key,r,new Gn(s.toArray()),Cr.none())}}function a2(t,e,n){t instanceof Fa?function(s,i,o){const l=s.value.clone(),u=Cy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(s,i,o){if(!ql(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Cy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(fw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function na(t,e,n,r){return t instanceof Fa?function(i,o,l,u){if(!ql(i.precondition,o))return l;const c=i.value.clone(),f=Ry(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hi?function(i,o,l,u){if(!ql(i.precondition,o))return l;const c=Ry(i.fieldTransforms,u,o),f=o.data;return f.setAll(fw(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return ql(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function l2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=lw(r.transform,s||null);i!=null&&(n===null&&(n=On.empty()),n.set(r.field,i))}return n||null}function ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zi(r,s,(i,o)=>i2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fa extends pc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hi extends pc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cy(t,e,n){const r=new Map;je(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,r2(o,l,n[s]))}return r}function Ry(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,n2(i,o,e))}return r}class pw extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u2 extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&a2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ow();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=dw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>ky(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>ky(n,r))}}class up{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){je(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return YR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new up(e,n,r,s)}}/**
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
 */class h2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class d2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,Ce;function f2(t){switch(t){case M.OK:return le(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function mw(t){if(t===void 0)return Or("GRPC error has no .code"),M.UNKNOWN;switch(t){case _t.OK:return M.OK;case _t.CANCELLED:return M.CANCELLED;case _t.UNKNOWN:return M.UNKNOWN;case _t.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case _t.INTERNAL:return M.INTERNAL;case _t.UNAVAILABLE:return M.UNAVAILABLE;case _t.UNAUTHENTICATED:return M.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case _t.NOT_FOUND:return M.NOT_FOUND;case _t.ALREADY_EXISTS:return M.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return M.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case _t.ABORTED:return M.ABORTED;case _t.OUT_OF_RANGE:return M.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return M.UNIMPLEMENTED;case _t.DATA_LOSS:return M.DATA_LOSS;default:return le(39323,{code:t})}}(Ce=_t||(_t={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function p2(){return new TextEncoder}/**
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
 */const m2=new fs([4294967295,4294967295],0);function by(t){const e=p2().encode(t),n=new C1;return n.update(e),new Uint8Array(n.digest())}function Ny(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fs([n,r],0),new fs([s,i],0)]}class cp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $o(`Invalid padding: ${n}`);if(r<0)throw new $o(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $o(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $o(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=fs.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(fs.fromNumber(r)));return s.compare(m2)===1&&(s=new fs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=by(e),[r,s]=Ny(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new cp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=by(e),[r,s]=Ny(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mc(pe.min(),s,new st(Ie),Vr(),Se())}}class $a{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $a(r,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class gw{constructor(e,n){this.targetId=e,this.Ce=n}}class yw{constructor(e,n,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Py{constructor(){this.ve=0,this.Fe=Dy(),this.Me=Gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),n=Se(),r=Se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}}),new $a(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Dy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,je(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class g2{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vr(),this.He=xl(),this.Je=xl(),this.Ze=new st(Ie)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(bd(i))if(r===0){const o=new se(i.path);this.et(n,o,en.newNoDocument(o,pe.min()))}else je(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Es(r).toUint8Array()}catch(u){if(u instanceof F1)return ri("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new cp(o,s,i)}catch(u){return ri(u instanceof $o?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&bd(l.target)){const u=new se(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,en.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=Se();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new mc(e,n,this.Ze,this.je,r);return this.je=Vr(),this.He=xl(),this.Je=xl(),this.Ze=new st(Ie),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Py,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ct(Ie),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ct(Ie),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Py),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function xl(){return new st(se.comparator)}function Dy(){return new st(se.comparator)}const y2={asc:"ASCENDING",desc:"DESCENDING"},_2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v2={and:"AND",or:"OR"};class w2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pd(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function Nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _w(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function E2(t,e){return Nu(t,e.toTimestamp())}function dr(t){return je(!!t,49232),pe.fromTimestamp(function(n){const r=ws(n);return new Ye(r.seconds,r.nanos)}(t))}function hp(t,e){return Dd(t,e).canonicalString()}function Dd(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vw(t){const e=We.fromString(t);return je(Sw(e),10190,{key:e.toString()}),e}function Od(t,e){return hp(t.databaseId,e.path)}function yh(t,e){const n=vw(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Ew(n))}function ww(t,e){return hp(t.databaseId,e)}function T2(t){const e=vw(t);return e.length===4?We.emptyPath():Ew(e)}function Vd(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ew(t){return je(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Oy(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function I2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(je(f===void 0||typeof f=="string",58123),Gt.fromBase64String(f||"")):(je(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Gt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:mw(c.code);return new W(f,c.message||"")}(o);n=new yw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yh(t,r.document.name),i=dr(r.document.updateTime),o=r.document.createTime?dr(r.document.createTime):pe.min(),l=new On({mapValue:{fields:r.document.fields}}),u=en.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Gl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yh(t,r.document),i=r.readTime?dr(r.readTime):pe.min(),o=en.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Gl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yh(t,r.document),i=r.removedTargetIds||[];n=new Gl([],i,s,null)}else{if(!("filter"in e))return le(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new d2(s,i),l=r.targetId;n=new gw(l,o)}}return n}function S2(t,e){let n;if(e instanceof Fa)n={update:Oy(t,e.key,e.value)};else if(e instanceof pw)n={delete:Od(t,e.key)};else if(e instanceof hi)n={update:Oy(t,e.key,e.data),updateMask:D2(e.fieldMask)};else{if(!(e instanceof u2))return le(16599,{dt:e.type});n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ba)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw le(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:E2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)}(t,e.precondition)),n}function x2(t,e){return t&&t.length>0?(je(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?dr(s.updateTime):dr(i);return o.isEqual(pe.min())&&(o=dr(i)),new o2(o,s.transformResults||[])}(n,e))):[]}function A2(t,e){return{documents:[ww(t,e.path)]}}function k2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ww(t,s);const i=function(c){if(c.length!==0)return Iw(Zn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:vi(g.field),direction:b2(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Pd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function C2(t){let e=T2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){je(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=Tw(m);return g instanceof Zn&&J1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new ka(wi(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,uc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,C=m.values||[];return new Cu(C,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,C=m.values||[];return new Cu(C,g)}(n.endAt)),HR(e,s,o,i,l,"F",u,c)}function R2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wi(n.unaryFilter.field);return wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=wi(n.unaryFilter.field);return wt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wi(n.unaryFilter.field);return wt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wi(n.unaryFilter.field);return wt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}}(t):t.fieldFilter!==void 0?function(n){return wt.create(wi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zn.create(n.compositeFilter.filters.map(r=>Tw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}}(n.compositeFilter.op))}(t):le(30097,{filter:t})}function b2(t){return y2[t]}function N2(t){return _2[t]}function P2(t){return v2[t]}function vi(t){return{fieldPath:t.canonicalString()}}function wi(t){return zt.fromServerFormat(t.fieldPath)}function Iw(t){return t instanceof wt?function(n){if(n.op==="=="){if(Ey(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(wy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ey(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(wy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:N2(n.op),value:n.value}}}(t):t instanceof Zn?function(n){const r=n.getFilters().map(s=>Iw(s));return r.length===1?r[0]:{compositeFilter:{op:P2(n.op),filters:r}}}(t):le(54877,{filter:t})}function D2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function xw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=Gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.yt=e}}function V2(t){const e=C2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
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
 */class M2{constructor(){this.Sn=new L2}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(vs.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(vs.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class L2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ct(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ct(We.comparator)).toArray()}}/**
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
 */const Vy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Aw=41943040;class pn{static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(Aw,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new no(0)}static ar(){return new no(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="LruGarbageCollector",j2=1048576;function Ly([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class U2{constructor(e){this.Pr=e,this.buffer=new Ct(Ly),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ly(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class F2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(My,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){co(n)?K(My,"Ignoring IndexedDB error during garbage collection: ",n):await uo(n)}await this.Ar(3e5)})}}class $2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(lc.ce);const r=new U2(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Vy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),yi()<=Te.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function B2(t,e){return new $2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.changes=new ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class H2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&na(r.mutation,s,Gn.empty(),Ye.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const s=Bs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Fo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Bs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Vr();const o=ta(),l=function(){return ta()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof hi)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),na(f.mutation,c,f.mutation.getFieldMask(),Ye.now())):o.set(c.key,Gn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new H2(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ta();let s=new st((o,l)=>o-l),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Gn.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||Se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=ow();f.forEach(g=>{if(!i.has(g)){const C=dw(n.get(g),r.get(g));C!==null&&m.set(g,C),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return qR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Bs());let l=Ia,u=i;return o.next(c=>L.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,Se())).next(f=>({batchId:l,changes:iw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Fo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Fo();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const c=function(m,g){return new ho(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,en.newInvalidDocument(f)))});let l=Fo();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&na(f.mutation,c,Gn.empty(),Ye.now()),dc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:dr(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:V2(s.bundledQuery),readTime:dr(s.readTime)}}(n)),L.resolve()}}/**
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
 */class W2{constructor(){this.overlays=new st(se.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Bs();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Bs(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new st((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Bs(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Bs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return L.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new h2(n,r));let i=this.Lr.get(n);i===void 0&&(i=Se(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class K2{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.kr=new Ct(Dt.Kr),this.qr=new Ct(Dt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Dt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Dt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new se(new We([])),r=new Dt(n,e),s=new Dt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new se(new We([])),r=new Dt(n,e),s=new Dt(n,e+1);let i=Se();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Dt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Dt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return se.comparator(e.key,n.key)||Ie(e.Hr,n.Hr)}static Ur(e,n){return Ie(e.Hr,n.Hr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ct(Dt.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new c2(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Dt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?rp:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Dt(n,0),s=new Dt(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(Ie);return n.forEach(s=>{const i=new Dt(s,0),o=new Dt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Dt(new se(i),0);let l=new Ct(Ie);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){je(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(n.mutations,s=>{const i=new Dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Dt(n,0),s=this.Jr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.ti=e,this.docs=function(){return new st(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let r=Vr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():en.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vr();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ER(wR(f),r)<=0||(s.has(f.key)||dc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Y2(this)}getSize(e){return L.resolve(this.size)}}class Y2 extends z2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.persistence=e,this.ri=new ci(n=>op(n),ap),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.ii=0,this.si=new dp,this.targetCount=0,this.oi=no._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new no(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this._i={},this.overlays={},this.ai=new lc(0),this.ui=!1,this.ui=!0,this.ci=new K2,this.referenceDelegate=e(this),this.li=new X2(this),this.indexManager=new M2,this.remoteDocumentCache=function(s){return new J2(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new O2(n),this.Pi=new G2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Q2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new Z2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Z2 extends IR{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Ri=new dp,this.Ai=null}static Vi(e){return new fp(e)}get di(){if(this.Ai)return this.Ai;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=se.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Pu{constructor(e,n){this.persistence=e,this.fi=new ci(r=>AR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=B2(this,n)}static Vi(e,n){return new Pu(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pp(e,n.fromCache,r,s)}}/**
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
 */class eb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return EA()?8:SR(nn())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new eb;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(yi()<=Te.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(yi()<=Te.DEBUG&&K("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(yi()<=Te.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(n))):L.resolve())}gs(e,n){if(xy(n))return L.resolve(null);let r=hr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ru(n,null,"F"),r=hr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Se(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,Ru(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return xy(n)||s.isEqual(pe.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?L.resolve(null):(yi()<=Te.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_i(n)),this.Ds(e,o,n,vR(s,Ia)).next(l=>l))})}bs(e,n){let r=new Ct(rw(e));return n.forEach((s,i)=>{dc(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return yi()<=Te.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",_i(n)),this.fs.getDocumentsMatchingQuery(e,n,vs.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="LocalStore",nb=3e8;class rb{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new st(Ie),this.Fs=new ci(i=>op(i),ap),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function sb(t,e,n,r){return new rb(t,e,n,r)}async function Cw(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=Se();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function ib(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let C=L.resolve();return g.forEach(R=>{C=C.next(()=>f.getEntry(u,R)).next(N=>{const O=c.docVersions.get(R);je(O!==null,48541),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Rw(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function ob(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let C=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken(Gt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),s=s.insert(m,C),function(N,O,I){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=nb?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,C,f)&&l.push(n.li.updateTargetData(i,C))});let u=Vr(),c=Se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(ab(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(pe.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function ab(t,e,n){let r=Se(),s=Se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Vr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(pe.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K(mp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function lb(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=rp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ub(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new ns(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Md(t,e,n){const r=ge(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!co(o))throw o;K(mp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function jy(t,e,n){const r=ge(t);let s=pe.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=ge(u),g=m.Fs.get(f);return g!==void 0?L.resolve(m.vs.get(g)):m.li.getTargetData(c,f)}(r,o,hr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Se())).next(l=>(cb(r,KR(e),l),{documents:l,ks:i})))}function cb(t,e,n){let r=t.Ms.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Uy{constructor(){this.activeTargetIds=e2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hb{constructor(){this.vo=new Uy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Uy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class db{Mo(e){}shutdown(){}}/**
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
 */const Fy="ConnectivityMonitor";class $y{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(Fy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(Fy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Al=null;function Ld(){return Al===null?Al=function(){return 268435456+Math.round(2147483648*Math.random())}():Al++,"0x"+Al.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="RestConnection",fb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class pb{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Au?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Ld(),l=this.Qo(e,n.toUriEncodedString());K(_h,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Cs(c);return this.zo(e,l,u,r,f).then(m=>(K(_h,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ri(_h,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=fb[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="WebChannelConnection",Oo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ui extends pb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ui.c_){const e=P1();Oo(e,N1.STAT_EVENT,n=>{n.stat===xd.PROXY?K(Yt,"STAT_EVENT: detected buffering proxy"):n.stat===xd.NOPROXY&&K(Yt,"STAT_EVENT: detected no buffering proxy")}),Ui.c_=!0}}zo(e,n,r,s,i){const o=Ld();return new Promise((l,u)=>{const c=new R1;c.setWithCredentials(!0),c.listenOnce(b1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Bl.NO_ERROR:const m=c.getResponseJson();K(Yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Bl.TIMEOUT:K(Yt,`RPC '${e}' ${o} timed out`),u(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const g=c.getStatus();if(K(Yt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let C=c.getResponseJson();Array.isArray(C)&&(C=C[0]);const R=C==null?void 0:C.error;if(R&&R.status&&R.message){const N=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(R.status);u(new W(N,R.message))}else u(new W(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(M.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{K(Yt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);K(Yt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Ld(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");K(Yt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,g=!1;const C=new mb({Ho:R=>{g?K(Yt,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(m||(K(Yt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),K(Yt,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Jo:()=>f.close()});return Oo(f,Uo.EventType.OPEN,()=>{g||(K(Yt,`RPC '${e}' stream ${s} transport opened.`),C.i_())}),Oo(f,Uo.EventType.CLOSE,()=>{g||(g=!0,K(Yt,`RPC '${e}' stream ${s} transport closed`),C.o_(),this.E_(f))}),Oo(f,Uo.EventType.ERROR,R=>{g||(g=!0,ri(Yt,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),C.o_(new W(M.UNAVAILABLE,"The operation could not be completed")))}),Oo(f,Uo.EventType.MESSAGE,R=>{var N;if(!g){const O=R.data[0];je(!!O,16349);const I=O,E=(I==null?void 0:I.error)||((N=I[0])==null?void 0:N.error);if(E){K(Yt,`RPC '${e}' stream ${s} received error:`,E);const A=E.status;let P=function(T){const v=_t[T];if(v!==void 0)return mw(v)}(A),j=E.message;A==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ri(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),P===void 0&&(P=M.INTERNAL,j="Unknown error status: "+A+" with message "+E.message),g=!0,C.o_(new W(P,j)),f.close()}else K(Yt,`RPC '${e}' stream ${s} received:`,O),C.__(O)}}),Ui.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return D1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){return new Ui(t)}function vh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){return new w2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui.c_=!1;class bw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="PersistentStream";class Nw{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(By,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(By,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yb extends Nw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=I2(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?dr(o.readTime):pe.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Vd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=bd(u)?{documents:A2(i,u)}:{query:k2(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_w(i,o.resumeToken);const c=Pd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=Nu(i,o.snapshotVersion.toTimestamp());const c=Pd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=R2(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Vd(this.serializer),n.removeTarget=e,this.K_(n)}}class _b extends Nw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return je(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){je(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=x2(e.writeResults,e.commitTime),r=dr(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Vd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>S2(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{}class wb extends vb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Dd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(M.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Dd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Eb(t,e,n,r){return new wb(t,e,n,r)}class Tb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Or(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="RemoteStore";class Ib{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{di(this)&&(K(si,"Restarting streams for network reachability change."),await async function(u){const c=ge(u);c.Ea.add(4),await Ba(c),c.Va.set("Unknown"),c.Ea.delete(4),await yc(c)}(this))})}),this.Va=new Tb(r,s)}}async function yc(t){if(di(t))for(const e of t.Ra)await e(!0)}async function Ba(t){for(const e of t.Ra)await e(!1)}function Pw(t,e){const n=ge(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),vp(n)?_p(n):fo(n).O_()&&yp(n,e))}function gp(t,e){const n=ge(t),r=fo(n);n.Ia.delete(e),r.O_()&&Dw(n,e),n.Ia.size===0&&(r.O_()?r.L_():di(n)&&n.Va.set("Unknown"))}function yp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}fo(t).Z_(e)}function Dw(t,e){t.da.$e(e),fo(t).X_(e)}function _p(t){t.da=new g2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),fo(t).start(),t.Va.ua()}function vp(t){return di(t)&&!fo(t).x_()&&t.Ia.size>0}function di(t){return ge(t).Ea.size===0}function Ow(t){t.da=void 0}async function Sb(t){t.Va.set("Online")}async function xb(t){t.Ia.forEach((e,n)=>{yp(t,e)})}async function Ab(t,e){Ow(t),vp(t)?(t.Va.ha(e),_p(t)):t.Va.set("Unknown")}async function kb(t,e,n){if(t.Va.set("Online"),e instanceof yw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){K(si,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Du(t,r)}else if(e instanceof Gl?t.da.Xe(e):e instanceof gw?t.da.st(e):t.da.tt(e),!n.isEqual(pe.min()))try{const r=await Rw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Gt.EMPTY_BYTE_STRING,f.snapshotVersion)),Dw(i,u);const m=new ns(f.target,u,c,f.sequenceNumber);yp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K(si,"Failed to raise snapshot:",r),await Du(t,r)}}async function Du(t,e,n){if(!co(e))throw e;t.Ea.add(1),await Ba(t),t.Va.set("Offline"),n||(n=()=>Rw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(si,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await yc(t)})}function Vw(t,e){return e().catch(n=>Du(t,n,e))}async function _c(t){const e=ge(t),n=Is(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:rp;for(;Cb(e);)try{const s=await lb(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Rb(e,s)}catch(s){await Du(e,s)}Mw(e)&&Lw(e)}function Cb(t){return di(t)&&t.Ta.length<10}function Rb(t,e){t.Ta.push(e);const n=Is(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Mw(t){return di(t)&&!Is(t).x_()&&t.Ta.length>0}function Lw(t){Is(t).start()}async function bb(t){Is(t).ra()}async function Nb(t){const e=Is(t);for(const n of t.Ta)e.ea(n.mutations)}async function Pb(t,e,n){const r=t.Ta.shift(),s=up.from(r,e,n);await Vw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await _c(t)}async function Db(t,e){e&&Is(t).Y_&&await async function(r,s){if(function(o){return f2(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Is(r).B_(),await Vw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await _c(r)}}(t,e),Mw(t)&&Lw(t)}async function zy(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),K(si,"RemoteStore received new credentials");const r=di(n);n.Ea.add(3),await Ba(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await yc(n)}async function Ob(t,e){const n=ge(t);e?(n.Ea.delete(2),await yc(n)):e||(n.Ea.add(2),await Ba(n),n.Va.set("Unknown"))}function fo(t){return t.ma||(t.ma=function(n,r,s){const i=ge(n);return i.sa(),new yb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:Sb.bind(null,t),Yo:xb.bind(null,t),t_:Ab.bind(null,t),J_:kb.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),vp(t)?_p(t):t.Va.set("Unknown")):(await t.ma.stop(),Ow(t))})),t.ma}function Is(t){return t.fa||(t.fa=function(n,r,s){const i=ge(n);return i.sa(),new _b(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bb.bind(null,t),t_:Db.bind(null,t),ta:Nb.bind(null,t),na:Pb.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await _c(t)):(await t.fa.stop(),t.Ta.length>0&&(K(si,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new wp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ep(t,e){if(Or("AsyncQueue",`${e}: ${t}`),co(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{static emptySet(e){return new Fi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Fo(),this.sortedSet=new st(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Hy{constructor(){this.ga=new st(se.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ro{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ro(e,n,Fi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Mb{constructor(){this.queries=qy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=qy(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function qy(){return new ci(t=>nw(t),hc)}async function Lb(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Vb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Ep(o,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Tp(n)}async function jb(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ub(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Tp(n)}function Fb(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Tp(t){t.Ca.forEach(e=>{e.next()})}var jd,Gy;(Gy=jd||(jd={})).Ma="default",Gy.Cache="cache";class $b{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==jd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.key=e}}class Uw{constructor(e){this.key=e}}class Bb{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Se(),this.mutatedKeys=Se(),this.eu=rw(e),this.tu=new Fi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Hy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),C=dc(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),N=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let O=!1;g&&C?g.data.isEqual(C.data)?R!==N&&(r.track({type:3,doc:C}),O=!0):this.su(g,C)||(r.track({type:2,doc:C}),O=!0,(u&&this.eu(C,u)>0||c&&this.eu(C,c)<0)&&(l=!0)):!g&&C?(r.track({type:0,doc:C}),O=!0):g&&!C&&(r.track({type:1,doc:g}),O=!0,(u||c)&&(l=!0)),O&&(C?(o=o.add(C),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(C,R){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Vt:O})}};return N(C)-N(R)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new ro(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Uw(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new jw(r))}),n}cu(e){this.Za=e.ks,this.Ya=Se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ro.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ip="SyncEngine";class zb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Hb{constructor(e){this.key=e,this.hu=!1}}class qb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ci(l=>nw(l),hc),this.Iu=new Map,this.Eu=new Set,this.Ru=new st(se.comparator),this.Au=new Map,this.Vu=new dp,this.du={},this.mu=new Map,this.fu=no.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Gb(t,e,n=!0){const r=qw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Fw(r,e,n,!0),s}async function Wb(t,e){const n=qw(t);await Fw(n,e,!0,!1)}async function Fw(t,e,n,r){const s=await ub(t.localStore,hr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Kb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Pw(t.remoteStore,s),l}async function Kb(t,e,n,r,s){t.pu=(m,g,C)=>async function(N,O,I,E){let A=O.view.ru(I);A.Ss&&(A=await jy(N.localStore,O.query,!1).then(({documents:T})=>O.view.ru(T,A)));const P=E&&E.targetChanges.get(O.targetId),j=E&&E.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(A,N.isPrimaryClient,P,j);return Ky(N,O.targetId,U.au),U.snapshot}(t,m,g,C);const i=await jy(t.localStore,e,!0),o=new Bb(e,i.ks),l=o.ru(i.documents),u=$a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Ky(t,n,c.au);const f=new zb(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function Qb(t,e,n){const r=ge(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!hc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Md(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&gp(r.remoteStore,s.targetId),Ud(r,s.targetId)}).catch(uo)):(Ud(r,s.targetId),await Md(r.localStore,s.targetId,!0))}async function Jb(t,e){const n=ge(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gp(n.remoteStore,r.targetId))}async function Yb(t,e,n){const r=sN(t);try{const s=await function(o,l){const u=ge(o),c=Ye.now(),f=l.reduce((C,R)=>C.add(R.key),Se());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let R=Vr(),N=Se();return u.xs.getEntries(C,f).next(O=>{R=O,R.forEach((I,E)=>{E.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,R)).next(O=>{m=O;const I=[];for(const E of l){const A=l2(E,m.get(E.key).overlayedDocument);A!=null&&I.push(new hi(E.key,A,W1(A.value.mapValue),Cr.exists(!0)))}return u.mutationQueue.addMutationBatch(C,c,I,l)}).next(O=>{g=O;const I=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(C,O.batchId,I)})}).then(()=>({batchId:g.batchId,changes:iw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new st(Ie)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await za(r,s.changes),await _c(r.remoteStore)}catch(s){const i=Ep(s,"Failed to persist write");n.reject(i)}}async function $w(t,e){const n=ge(t);try{const r=await ob(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(je(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?je(o.hu,14607):s.removedDocuments.size>0&&(je(o.hu,42227),o.hu=!1))}),await za(n,r,e)}catch(r){await uo(r)}}function Wy(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ge(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.ba)g.va(l)&&(c=!0)}),c&&Tp(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Xb(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new st(se.comparator);o=o.insert(i,en.newNoDocument(i,pe.min()));const l=Se().add(i),u=new mc(pe.min(),new Map,new st(Ie),o,l);await $w(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Sp(r)}else await Md(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(uo)}async function Zb(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await ib(n.localStore,e);zw(n,r,null),Bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await za(n,s)}catch(s){await uo(s)}}async function eN(t,e,n){const r=ge(t);try{const s=await function(o,l){const u=ge(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(je(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);zw(r,e,n),Bw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await za(r,s)}catch(s){await uo(s)}}function Bw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function zw(t,e,n){const r=ge(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Hw(t,r)})}function Hw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(gp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Sp(t))}function Ky(t,e,n){for(const r of n)r instanceof jw?(t.Vu.addReference(r.key,e),tN(t,r)):r instanceof Uw?(K(Ip,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Hw(t,r.key)):le(19791,{wu:r})}function tN(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(K(Ip,"New document in limbo: "+n),t.Eu.add(r),Sp(t))}function Sp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new se(We.fromString(e)),r=t.fu.next();t.Au.set(r,new Hb(n)),t.Ru=t.Ru.insert(n,r),Pw(t.remoteStore,new ns(hr(ew(n.path)),r,"TargetPurposeLimboResolution",lc.ce))}}async function za(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=pp.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=ge(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(c,g=>L.forEach(g.Ts,C=>f.persistence.referenceDelegate.addReference(m,g.targetId,C)).next(()=>L.forEach(g.Is,C=>f.persistence.referenceDelegate.removeReference(m,g.targetId,C)))))}catch(m){if(!co(m))throw m;K(mp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const C=f.vs.get(g),R=C.snapshotVersion,N=C.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(g,N)}}}(r.localStore,i))}async function nN(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){K(Ip,"User change. New user:",e.toKey());const r=await Cw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await za(n,r.Ns)}}function rN(t,e){const n=ge(t),r=n.Au.get(e);if(r&&r.hu)return Se().add(r.key);{let s=Se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function qw(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$w.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Xb.bind(null,e),e.Pu.J_=Ub.bind(null,e.eventManager),e.Pu.yu=Fb.bind(null,e.eventManager),e}function sN(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eN.bind(null,e),e}class Ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return sb(this.persistence,new tb,e.initialUser,this.serializer)}Cu(e){return new kw(fp.Vi,this.serializer)}Du(e){return new hb}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ou.provider={build:()=>new Ou};class iN extends Ou{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){je(this.persistence.referenceDelegate instanceof Pu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new F2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new kw(r=>Pu.Vi(r,n),this.serializer)}}class Fd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nN.bind(null,this.syncEngine),await Ob(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Mb}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),r=gb(e.databaseInfo);return Eb(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Ib(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Wy(this.syncEngine,n,0),function(){return $y.v()?new $y:new db}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new qb(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);K(si,"RemoteStore shutting down."),i.Ea.add(5),await Ba(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Fd.provider={build:()=>new Fd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="FirestoreClient";class aN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Xt.UNAUTHENTICATED,this.clientId=np.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(Ss,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(Ss,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wh(t,e){t.asyncQueue.verifyOperationInProgress(),K(Ss,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lN(t);K(Ss,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zy(e.remoteStore,s)),t._onlineComponents=e}async function lN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(Ss,"Using user provided OfflineComponentProvider");try{await wh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ri("Error using user provided cache. Falling back to memory cache: "+n),await wh(t,new Ou)}}else K(Ss,"Using default OfflineComponentProvider"),await wh(t,new iN(void 0));return t._offlineComponents}async function Gw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(Ss,"Using user provided OnlineComponentProvider"),await Qy(t,t._uninitializedComponentsProvider._online)):(K(Ss,"Using default OnlineComponentProvider"),await Qy(t,new Fd))),t._onlineComponents}function uN(t){return Gw(t).then(e=>e.syncEngine)}async function cN(t){const e=await Gw(t),n=e.eventManager;return n.onListen=Gb.bind(null,e.syncEngine),n.onUnlisten=Qb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Wb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Jb.bind(null,e.syncEngine),n}function hN(t,e,n={}){const r=new ps;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new oN({next:g=>{f.Nu(),o.enqueueAndForget(()=>jb(i,m)),g.fromCache&&u.source==="server"?c.reject(new W(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new $b(l,f,{includeMetadataChanges:!0,Ka:!0});return Lb(i,m)}(await cN(t),t.asyncQueue,e,n,r)),r.promise}function dN(t,e){const n=new ps;return t.asyncQueue.enqueueAndForget(async()=>Yb(await uN(t),e,n)),n.promise}/**
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
 */function Ww(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="ComponentProvider",Jy=new Map;function pN(t,e,n,r,s){return new RR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Ww(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="firestore.googleapis.com",Yy=!0;class Xy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kw,this.ssl=Yy}else this.host=e.host,this.ssl=e.ssl??Yy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<j2)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_R("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ww(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lR;switch(r.type){case"firstParty":return new dR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jy.get(n);r&&(K(fN,"Removing Datastore"),Jy.delete(n),r.terminate())}(this),Promise.resolve()}}function mN(t,e,n,r={}){var c;t=Ta(t,vc);const s=Cs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(zf(`https://${l}`),Hf("Firestore",!0)),i.host!==Kw&&i.host!==l&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Zs(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Xt.MOCK_USER;else{f=a1(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Xt(g)}t._authCredentials=new uR(new V1(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rs(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}toJSON(){return{type:kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ua(n,kt._jsonSchema))return new kt(e,r||null,new se(We.fromString(n.referencePath)))}}kt._jsonSchemaVersion="firestore/documentReference/1.0",kt._jsonSchema={type:Et("string",kt._jsonSchemaVersion),referencePath:Et("string")};class ms extends Rs{constructor(e,n,r){super(e,n,ew(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new se(e))}withConverter(e){return new ms(this.firestore,e,this._path)}}function Zy(t,e,...n){if(t=Rt(t),M1("collection","path",e),t instanceof vc){const r=We.fromString(e,...n);return hy(r),new ms(t,null,r)}{if(!(t instanceof kt||t instanceof ms))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return hy(r),new ms(t.firestore,null,r)}}function gN(t,e,...n){if(t=Rt(t),arguments.length===1&&(e=np.newId()),M1("doc","path",e),t instanceof vc){const r=We.fromString(e,...n);return cy(r),new kt(t,null,new se(r))}{if(!(t instanceof kt||t instanceof ms))throw new W(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return cy(r),new kt(t.firestore,t instanceof ms?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="AsyncQueue";class t_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bw(this,"async_queue_retry"),this._c=()=>{const r=vh();r&&K(e_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=vh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=vh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ps;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!co(e))throw e;K(e_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Or("INTERNAL UNHANDLED ERROR: ",n_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=wp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:n_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function n_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xp extends vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new t_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t_(e),this._firestoreClient=void 0,await e}}}function yN(t,e){const n=typeof t=="object"?t:Wf(),r=typeof t=="string"?t:Au,s=oc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=s1("firestore");i&&mN(s,...i)}return s}function Qw(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_N(t),t._firestoreClient}function _N(t){var r,s,i,o;const e=t._freezeSettings(),n=pN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new aN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(Gt.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vn(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ua(e,Vn._jsonSchema))return Vn.fromBase64String(e.bytes)}}Vn._jsonSchemaVersion="firestore/bytes/1.0",Vn._jsonSchema={type:Et("string",Vn._jsonSchemaVersion),bytes:Et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fr._jsonSchemaVersion}}static fromJSON(e){if(Ua(e,fr._jsonSchema))return new fr(e.latitude,e.longitude)}}fr._jsonSchemaVersion="firestore/geoPoint/1.0",fr._jsonSchema={type:Et("string",fr._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
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
 */class Jn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ua(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Jn(e.vectorValues);throw new W(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:Et("string",Jn._jsonSchemaVersion),vectorValues:Et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=/^__.*__$/;class wN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fa(e,this.data,n,this.fieldTransforms)}}function Yw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{dataSource:t})}}class kp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new kp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Vu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Yw(this.dataSource)&&vN.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class EN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gc(e)}createContext(e,n,r,s=!1){return new kp({dataSource:e,methodName:n,targetDoc:r,path:zt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xw(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new EN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TN(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);tE("Data must be an object, but it was:",o,r);const l=Zw(r,o);let u,c;if(i.merge)u=new Gn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Ha(e,m,n);if(!o.contains(g))throw new W(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);AN(f,g)||f.push(g)}u=new Gn(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new wN(new On(l),u,c)}class Cp extends Ap{_toFieldTransform(e){return new s2(e.path,new Ca)}isEqual(e){return e instanceof Cp}}function IN(t,e,n,r=!1){return Rp(n,t.createContext(r?4:3,e))}function Rp(t,e){if(eE(t=Rt(t)))return tE("Unsupported field value:",e,t),Zw(t,e);if(t instanceof Ap)return function(r,s){if(!Yw(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Rp(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return t2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:Nu(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nu(s.serializer,i)}}if(r instanceof fr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vn)return{bytesValue:_w(s.serializer,r._byteString)};if(r instanceof kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jn)return function(o,l){const u=o instanceof Jn?o.toArray():o;return{mapValue:{fields:{[q1]:{stringValue:G1},[ku]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return lp(l.serializer,f)})}}}}}}(r,s);if(xw(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${ac(r)}`)}(t,e)}function Zw(t,e){const n={};return U1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(r,s)=>{const i=Rp(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function eE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof fr||t instanceof Vn||t instanceof kt||t instanceof Ap||t instanceof Jn||xw(t))}function tE(t,e,n){if(!eE(n)||!L1(n)){const r=ac(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ha(t,e,n){if((e=Rt(e))instanceof Jw)return e._internalPath;if(typeof e=="string")return xN(t,e);throw Vu("Field path arguments must be of type string or ",t,!1,void 0,n)}const SN=new RegExp("[~\\*/\\[\\]]");function xN(t,e,n){if(e.search(SN)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jw(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function AN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{convertValue(e,n="none"){switch(Ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ui(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ku].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ht(o.doubleValue));return new Jn(n)}convertGeoPoint(e){return new fr(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sa(e));default:return null}}convertTimestamp(e){const n=ws(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);je(Sw(r),9688,{name:e});const s=new xa(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class CN extends kN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function RN(){return new Cp("serverTimestamp")}const r_="@firebase/firestore",s_="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ha("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bN extends nE{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bp{}class Np extends bp{}function i_(t,e,...n){let r=[];e instanceof bp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Pp).length,l=i.filter(u=>u instanceof wc).length;if(o>1||o>0&&l>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class wc extends Np{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new wc(e,n,r)}_apply(e){const n=this._parse(e);return rE(e._query,n),new Rs(e.firestore,e.converter,Nd(e._query,n))}_parse(e){const n=Xw(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){c_(m,f);const R=[];for(const N of m)R.push(u_(u,i,N));g={arrayValue:{values:R}}}else g=u_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||c_(m,f),g=IN(l,o,m,f==="in"||f==="not-in");return wt.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function o_(t,e,n){const r=e,s=Ha("where",t);return wc._create(s,r,n)}class Pp extends bp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)rE(o,u),o=Nd(o,u)}(e._query,n),new Rs(e.firestore,e.converter,Nd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dp extends Np{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ka(i,o)}(e._query,this._field,this._direction);return new Rs(e.firestore,e.converter,WR(e._query,n))}}function a_(t,e="asc"){const n=e,r=Ha("orderBy",t);return Dp._create(r,n)}class Op extends Np{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Op(e,n,r)}_apply(e){return new Rs(e.firestore,e.converter,Ru(e._query,this._limit,this._limitType))}}function l_(t){return Op._create("limit",t,"F")}function u_(t,e,n){if(typeof(n=Rt(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tw(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!se.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vy(t,new se(r))}if(n instanceof kt)return vy(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(n)}.`)}function c_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function PN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class kl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $i extends nE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ha("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=$i._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}$i._jsonSchemaVersion="firestore/documentSnapshot/1.0",$i._jsonSchema={type:Et("string",$i._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class Wl extends $i{data(e={}){return super.data(e)}}class Bi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new kl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wl(this._firestore,this._userDataWriter,r.key,r,new kl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Wl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new kl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Wl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new kl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:DN(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=np.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
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
 */Bi._jsonSchemaVersion="firestore/querySnapshot/1.0",Bi._jsonSchema={type:Et("string",Bi._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};function ON(t){t=Ta(t,Rs);const e=Ta(t.firestore,xp),n=Qw(e),r=new CN(e);return NN(t._query),hN(n,t._query).then(s=>new Bi(e,r,t,s))}function VN(t,e,n){t=Ta(t,kt);const r=Ta(t.firestore,xp),s=PN(t.converter,e,n),i=Xw(r);return MN(r,[TN(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Cr.none())])}function MN(t,e){const n=Qw(t);return dN(n,e)}(function(e,n=!0){aR(li),ei(new _s("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xp(new cR(r.getProvider("auth-internal")),new fR(o,r.getProvider("app-check-internal")),bR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),cr(r_,s_,e),cr(r_,s_,"esm2020")})();const LN={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},Vp=c1(LN),Mp=rR(Vp),$d=yN(Vp),Bd="shorts_brain_snapshots";function jN(t){const e=t?new Date(t):new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const n=new Date(e.getFullYear(),0,4),r=1+Math.round(((e.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7);return`${e.getFullYear()}-W${r.toString().padStart(2,"0")}`}async function UN(t){const e=ep(Mp,t),n=await tR(e);return new TextDecoder().decode(n)}async function FN({weekId:t,reportingDate:e,rawFiles:n}){const r=`shorts-brain/weekly/${t}`,s=[];if(n)for(const[o,l]of Object.entries(n)){if(!l)continue;const u=ep(Mp,`${r}/${o}.csv`);await nR(u,l,{contentType:"text/csv"}),s.push(o)}const i={weekId:t,reportingDate:e||null,savedAt:RN(),rawFileKeys:s};return await VN(gN($d,Bd,t),i,{merge:!0}),{weekId:t,savedAt:new Date().toISOString(),fileCount:s.length}}async function h_(t){let e=i_(Zy($d,Bd),a_("weekId","desc"),l_(52));t&&(e=i_(Zy($d,Bd),a_("weekId","desc"),o_("weekId",">=",`${t}-W01`),o_("weekId","<=",`${t}-W53`),l_(52)));const n=await ON(e),r=[];return n.forEach(s=>{const i=s.data();r.push({weekId:i.weekId,reportingDate:i.reportingDate,savedAt:i.savedAt,rawFileKeys:i.rawFileKeys||[]})}),{snapshots:r,count:r.length}}async function $N(t){const e=`shorts-brain/weekly/${t}`,n=ep(Mp,e);let r=[];try{const i=await oy(n);if(r=i.items,i.prefixes.length>0)for(const o of i.prefixes){const l=await oy(o);r=r.concat(l.items)}}catch(i){return console.error("Failed to list snapshot files:",i),null}const s={};return await Promise.all(r.map(async i=>{if(i.name.endsWith(".csv"))try{const o=await UN(i.fullPath),l=i.name.replace(".csv","");s[l]=o}catch(o){console.error(`Failed to download ${i.fullPath}:`,o)}})),s}const sE="https://drive.google.com/corp/drive/folders/18GCtCrz-Bs1YdXKtQs-tjugb6xudULaX?resourcekey=0-gMJCegK7SZkhgJeT_YTjSw",Er=["DAU-SCT","DAC-SCT","GenAI DAU-SCT","Impressions","CTR"],vr=["India","Indonesia","Japan","South Korea","AUNZ"],Mu={India:"IN",Indonesia:"ID",Japan:"JP","South Korea":"KR",AUNZ:"AUNZ"},zd={IN:"India",ID:"Indonesia",JP:"Japan",KR:"South Korea",AUNZ:"AUNZ"},Kl=["SSC","Shelf","UTS","MVR","UTS SFV","JP Proactive Container"],Ft=["female","male","total"],BN={female:"FEMALE",male:"MALE",total:"GenPop"},Tn=["18-24","25-34","18-34","35+","total"],zN={"18-24":"18-24","25-34":"25-34","18-34":"18-34","35+":"35-44",total:"GenPop"},HN={APAC:.15,INDIA:.16,INDONESIA:.29,JAPAN:1.2,"SOUTH KOREA":1.08,AUNZ:1.56,IN:.16,ID:.29,JP:1.2,KR:1.08},qN=[{id:"Upload",label:"Data Ingestion",icon:ex},{id:"OKR",label:"Shorts OKR Performance",icon:Xv},{id:"Global Hub",label:"Global Holdback",icon:Yv},{id:"Market Hub",label:"Campaign Holdback",icon:mx}],Cl=[{id:"AlwaysOn",label:"Always-On",icon:yd},{id:"ScaledCreation",label:"Scaled Creation",icon:Hx},{id:"Trends",label:"Trends",icon:Zv},{id:"CultMo",label:"CultMo",icon:nx},{id:"ArtMo",label:"ArtMo",icon:Ax},{id:"GenAI Hub",label:"GenAI Hub",icon:Xx}],Be=t=>(t||"").toString().replace(/['"]/g,"").replace(/\u00A0/g," ").trim(),$t=t=>{try{return Be(t).toUpperCase().replace(/[^\p{L}\p{N}]/gu,"")}catch{return Be(t).toUpperCase().replace(/[\s\-_&!?,.()'"\uFF01]/g,"")}},dn=(t,e)=>$t(t)===$t(e),GN=t=>$t(t).replace(/INDIA$|INDONESIA$|JAPAN$|SOUTHKOREA$|AUNZ$|IN$|ID$|JP$|KR$/g,"").trim(),WN=t=>t===0?"0.00":t==="NA"||t===null||t===void 0||isNaN(t)?"-":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t),Mn=t=>{const e=Be(t);if(!e||e==="-"||e==="Unknown")return null;try{if(e.includes("-")&&e.split("-")[0].length===4)return e;const n=e.split(/[-/]/);if(n.length===3){let s=parseInt(n[0],10),i=parseInt(n[1],10),o=parseInt(n[2],10);o<100&&(o+=2e3);let l,u;return s>12?(u=s,l=i):i>12?(l=s,u=i):(u=s,l=i),l>12?null:`${o}-${l.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return isNaN(r.getTime())?null:r.toISOString().split("T")[0]}catch{return null}},iE=(t,e)=>{const n=Mn(t),r=Mn(e)||new Date().toISOString().split("T")[0];if(!n)return 0;try{const s=new Date(n),i=new Date(r),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));return o>=0?o+1:1}catch{return 0}},KN=(t,e)=>{const n=Mn(t),r=Mn(e);if(!n||!r)return!1;try{return new Date(n)>=new Date(r)}catch{return!1}},fn=t=>{const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];i==='"'?r=!r:i===","&&!r?(e.push(n.trim()),n=""):n+=i}return e.push(n.trim()),e},ve=(t,e)=>{const n=t.map(s=>(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"")),r=e.map(s=>s.toUpperCase().replace(/[^A-Z0-9]/g,""));for(const s of r){const i=n.indexOf(s);if(i!==-1)return i}return n.findIndex(s=>r.some(i=>s.includes(i)))},QN=(t,e,n=null)=>{var i,o;const r=$t(t),s=GN(t);if(!r)return{};if(n){const l=$t(n);if((i=e[l])!=null&&i[r])return e[l][r];if((o=e[l])!=null&&o[s])return e[l][s]}for(const l in e){if(e[l][r])return e[l][r];if(e[l][s])return e[l][s]}return{}},hn=(t,e={},n={},r=["Campaign","Campaign Name","Country","Market"],s=!1,i=null,o=!1,l=!1)=>{try{const u=t.split(/\r?\n/).filter(E=>E.trim()!=="");if(u.length<2)return e;const c=fn(u[0]),f=ve(c,r),m=ve(c,["Country","Market","Market Name"]),g=ve(c,["Value Type","Metric Type"]),C=ve(c,["Slice","Segment"]),R=ve(c,["Date","Reporting Date","Day","Latest Date"]),N=ve(c,["Trend Start Date","Trend Start"]),O=ve(c,["Trend End Date","Trend End"]);if(f===-1)return e;const I={...e};return u.slice(1).forEach(E=>{const A=fn(E),P=g!==-1?(A[g]||"").replace(/['"]/g,"").trim().toUpperCase():"",j=C!==-1?(A[C]||"").replace(/['"]/g,"").trim().toUpperCase():"",U=R!==-1?Mn(A[R]):null,T=!s&&(P==="RATIO (%)"||P==="RATIO"||P.includes("LIFT")||P==="")&&(j==="CONTROL"||j===""||j==="TOTAL"),v=s&&(P.includes("DELTA")||P===""||P==="TOTAL"||P.includes("IMPRESSIONS")||P.includes("ABSOLUTE")||P.includes("VOLUME")||P.includes("CTR"))&&(j==="CONTROL"||j==="TEST"||j==="TREATMENT"||j===""||j==="TOTAL"),S=P.includes("TREND FAVORABILITY")&&(j==="CONTROL"||j===""||j==="TOTAL");if(!T&&!S&&!v)return;const y=Be(A[f])||"Unknown";let x=m!==-1?Be(A[m]):i||"APAC",k=zd[x.toUpperCase()]||x;const w=QN(y,n,k==="APAC"?null:k);k==="APAC"&&w&&w.market&&(k=w.market),k==="APAC"&&(k="India");const J=`${k}_${y}`;let ue=null;const bt=ve(c,["Gender","Sex"]);if(bt!==-1){const $=(A[bt]||"").toLowerCase().trim();$==="female"||$==="f"?ue="female":$==="male"||$==="m"?ue="male":($==="total"||$==="all"||$==="genpop"||$==="gen pop")&&(ue="total")}else ue="total";if(!ue)return;let we="total";const z=ve(c,["Age","Age Group"]);if(z!==-1){const $=(A[z]||"").toLowerCase().trim();$.includes("18-24")?we="18-24":$.includes("25-34")?we="25-34":$.includes("18-34")?we="18-34":$.includes("35")&&(we="35+")}const Z=o||$t(y).includes("GLOBALHOLDBACK");if(!I[J]){const $=N!==-1?Mn(A[N]):null,xe=O!==-1?Mn(A[O]):null;I[J]={country:y,market:k,metrics:{},isAnchor:Z,campaignStartDate:$||w.campaignStartDate||null,campaignEndDate:xe||w.campaignEndDate||null,optimisationEndDate:w.optimisationEndDate||U,segmentTag:w.subTab||"Campaign Hub",meta:w,dataMinDate:U,dataMaxDate:U,explicitTrendStart:$,explicitTrendEnd:xe},Er.forEach(Ae=>{I[J].metrics[Ae]={female:{},male:{},total:{}},Ft.forEach(Nt=>{Tn.forEach(Pe=>I[J].metrics[Ae][Nt][Pe]={v:0,sig:0,abs:0,isPaused:!1,launchDate:null})})})}U&&((!I[J].dataMinDate||U<I[J].dataMinDate)&&(I[J].dataMinDate=U),(!I[J].dataMaxDate||U>I[J].dataMaxDate)&&(I[J].dataMaxDate=U)),Er.forEach($=>{const xe={"DAU-SCT":["DAU-SCT","DAILY SHORTS CREATION TOOL ACTIVE USERS"],"DAC-SCT":["DAC-SCT","DAILY SHORTS CONVERTERS"],"GenAI DAU-SCT":["GENAI DAU","GENAI DAILY ACTIVE USERS"],Impressions:["IMPRESSIONS","TOTAL IMPRESSIONS","REACH","IMPS"],CTR:["CTR","CLICK THROUGH RATE","CLICK-THROUGH RATE"]},Ae=c.findIndex(B=>{const ee=B.toUpperCase(),te=(xe[$]||[]).some(Ue=>ee.includes(Ue)),ce=ee.includes("CONFIDENCE")||ee.includes("BOUND");return te&&!ce&&($!=="DAU-SCT"||!ee.includes("GENAI"))});if(Ae===-1)return;const Nt=(A[Ae]||"").replace(/['"]/g,"").trim(),Pe=parseFloat(Nt.replace(/[^\d.-]/g,""))||0,Tt=I[J].meta.targeting;let it=!1;if(Z||l)it=!0;else if(Tt){const B=Tt.ages.length===0||Tt.ages.includes(we),ee=Tt.genders.length===0||Tt.genders.includes(ue);it=B&&ee}else it=!0;const rn=$==="GenAI DAU-SCT",Cn=(I[J].meta.tab||"").toLowerCase()==="genai hub",er=it&&(!rn||Cn||Z),V=er?Pe:"NA";if(T)(V!=="NA"&&V!==0||I[J].metrics[$][ue][we].v===0||I[J].metrics[$][ue][we].v==="NA")&&(I[J].metrics[$][ue][we].v=V);else if(v)$==="Impressions"||$==="CTR"?(V!=="NA"&&V!==0||I[J].metrics[$][ue][we].v===0||I[J].metrics[$][ue][we].v==="NA")&&(I[J].metrics[$][ue][we].v=V):(V!=="NA"&&V!==0||I[J].metrics[$][ue][we].abs===0||I[J].metrics[$][ue][we].abs==="NA")&&(I[J].metrics[$][ue][we].abs=V);else if(S&&er){const B=Nt.toUpperCase(),ee=B.includes("POSITIVE")||B.includes("SSP")?1:B.includes("NEGATIVE")||B.includes("SSN")?-1:0;ee!==0&&(I[J].metrics[$][ue][we].sig=ee)}})}),I}catch(u){return console.error("CSV Parse Error:",u),e}},oE=({className:t})=>p.jsxs("svg",{className:t,viewBox:"0 0 1443 1250",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("path",{d:"M485.29 0L0 839.25l242.42 410.74 485.29-839.25H485.29z"}),p.jsx("path",{d:"M957.66 0l-242.43 419.63 485.29 830.36 242.54-419.63L957.66 0z",opacity:"0.8"}),p.jsx("path",{d:"M524.23 839.25l-242.42 410.74h960.54l242.42-410.74H524.23z",opacity:"0.6"})]}),JN=(t,e)=>e?{cardBg:"bg-[#1a1a1a]",color:"text-[#808080]",accent:"bg-[#3a3a3a]"}:t>=100?{cardBg:"bg-[#0a1f0a]",color:"text-emerald-400",accent:"bg-emerald-500"}:t>=70?{cardBg:"bg-[#1a1a1a]",color:"text-amber-400",accent:"bg-amber-500"}:{cardBg:"bg-[#1a0a0a]",color:"text-red-400",accent:"bg-red-500"},d_=({activeMetrics:t,toggleMetric:e,handleAllToggle:n,allowedMetrics:r=Er})=>p.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[p.jsx("div",{className:"flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]",children:r.map(s=>p.jsx("button",{onClick:()=>e(s),className:`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${t.includes(s)?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:s},s))}),p.jsx("button",{onClick:n,className:`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${t.length===r.length?"bg-white text-black border-white":"bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]"}`,children:t.length===r.length?"Selective View":"Sync All Metrics"})]}),f_=({data:t,activeMetrics:e,latestGlobalDate:n,isCampaignView:r=!1,hideDates:s=!1,isAlwaysOn:i=!1})=>{const o=ae.useRef(null),l={female:{1:"bg-blue-900/40 text-blue-100",2:"bg-blue-900/20",3:"bg-blue-950/40 text-blue-400"},male:{1:"bg-purple-900/40 text-purple-100",2:"bg-purple-900/20",3:"bg-purple-950/40 text-purple-400"},total:{1:"bg-amber-900/80 text-amber-50",2:"bg-amber-800/20",3:"bg-amber-950 text-amber-400 font-bold"}},u=c=>{o.current&&o.current.scrollBy({left:c==="left"?-600:600,behavior:"smooth"})};return!t||t.length===0?p.jsxs("div",{className:"py-40 text-center flex flex-col items-center justify-center gap-6",children:[p.jsx("div",{className:"p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]",children:p.jsx(nA,{className:"w-12 h-12 text-[#3a3a3a] animate-pulse"})}),p.jsx("p",{className:"text-[#808080] font-bold text-sm uppercase tracking-widest",children:"No Data Available"})]}):p.jsxs("div",{className:"relative group/table",children:[p.jsx("button",{onClick:()=>u("left"),className:"absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:p.jsx($S,{className:"w-6 h-6"})}),p.jsx("button",{onClick:()=>u("right"),className:"absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:p.jsx(zS,{className:"w-6 h-6"})}),p.jsx("div",{ref:o,className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto scroll-smooth",children:p.jsxs("table",{className:"w-full text-center border-collapse",children:[p.jsxs("thead",{children:[p.jsxs("tr",{className:"text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:[p.jsx("th",{rowSpan:3,className:"px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[300px]",children:i?"Trend Identifier":r?"Campaign Entity":"Country / Market"}),Ft.map((c,f)=>p.jsx("th",{colSpan:Tn.length*e.length,className:`py-6 border-white/10 ${l[c][1]} ${f<Ft.length-1?"border-r-2 border-white/20":""}`,children:p.jsxs("div",{className:"flex items-center justify-center gap-3",children:[p.jsx(Jx,{className:"w-4 h-4 opacity-50"}),BN[c]]})},c))]}),p.jsx("tr",{className:"text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:Ft.map(c=>p.jsx(gi.Fragment,{children:Tn.map((f,m)=>p.jsx("th",{colSpan:e.length,className:`py-4 transition-colors ${l[c][2]} ${m===Tn.length-1&&Ft.indexOf(c)<Ft.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:zN[f]},f))},c))}),p.jsx("tr",{className:"text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]",children:Ft.map(c=>p.jsx(gi.Fragment,{children:Tn.map((f,m)=>p.jsx(gi.Fragment,{children:e.map((g,C)=>p.jsx("th",{className:`py-3 px-3 font-mono ${l[c][3]} ${m===Tn.length-1&&C===e.length-1&&Ft.indexOf(c)<Ft.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:g.includes("GenAI")?"GenAI":g==="Impressions"?"Imprs":g.split("-")[0]},g))},f))},c))})]}),p.jsx("tbody",{className:"divide-y divide-white/5",children:t.map((c,f)=>{var A,P,j;const m=!!c.isAnchor,g=(j=(P=(A=c.metrics)==null?void 0:A[e[0]||"DAU-SCT"])==null?void 0:P.total)==null?void 0:j.total,C=g!=null&&g.isPaused&&(g!=null&&g.launchDate)&&g.launchDate!=="Ended"?g.launchDate:null,R=i?c.explicitTrendStart||c.dataMinDate||c.campaignStartDate:c.campaignStartDate||c.explicitTrendStart||c.dataMinDate,N=c.campaignEndDate||C||c.optimisationEndDate;let I=i?c.explicitTrendEnd||c.dataMaxDate||N:c.campaignEndDate||c.explicitTrendEnd||c.dataMaxDate||c.optimisationEndDate;!i&&n&&I&&new Date(I)>new Date(n)&&(I=n);const E=iE(R,I);return p.jsxs("tr",{className:`transition-all duration-200 ${m?"bg-white/[0.05]":"hover:bg-white/[0.03]"}`,children:[p.jsx("td",{className:`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 bg-[#111] ${m?"text-blue-400 font-bold":"text-[#e0e0e0]"}`,children:p.jsxs("div",{className:"flex flex-col gap-1.5",children:[p.jsx("span",{className:"font-bold text-[12px] uppercase tracking-tight",children:m?`${c.country} (Reference)`:String(c.country||"Unknown")}),!s&&!m&&(R||i)&&p.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 p-2 rounded bg-black/40 border border-white/5 shadow-inner",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Fg,{className:"w-3 h-3 text-blue-400"}),p.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[p.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend Start:":"Start:"}),String(R||"N/A")]})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Fg,{className:"w-3 h-3 text-amber-400"}),p.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[p.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend End:":"End:"}),String(r&&c.campaignEndDate?c.campaignEndDate:I||"Active")]})]}),p.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[p.jsx(Bf,{className:"w-3 h-3 text-emerald-400"}),p.jsxs("span",{className:"text-[9px] font-bold tracking-tighter uppercase text-emerald-400",children:[i?"Trend Days Live:":"Days Live:"," ",E]})]})]})]})}),Ft.map(U=>p.jsx(gi.Fragment,{children:Tn.map((T,v)=>p.jsx(gi.Fragment,{children:e.map(S=>{const y=c.metrics[S][U][T],x=v===Tn.length-1&&e.indexOf(S)===e.length-1;let k="text-slate-500 font-medium",w="";const J=y.isPaused&&!m;return J?(k="text-[#808080] font-bold",w="bg-[#1a1a1a]"):y.v!=="NA"&&y.sig===-1?(k="text-red-500 font-bold",w="bg-red-500/10"):y.v!=="NA"&&y.sig===1?(k="text-emerald-500 font-bold",w="bg-emerald-500/10"):y.v!==0&&y.v!=="NA"&&(k="text-slate-100 font-bold"),p.jsx("td",{className:`py-5 px-3 font-mono text-[13px] tabular-nums ${k} ${w} ${x&&Ft.indexOf(U)<Ft.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:p.jsx("div",{className:"flex flex-col items-center text-center",children:J?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"leading-none uppercase",children:"Paused"}),p.jsx("span",{className:"text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic",children:String(y.launchDate||"No Data")})]}):y.v==="NA"?p.jsx("span",{className:"text-gray-500 opacity-50 font-bold",children:"NA"}):p.jsxs(p.Fragment,{children:[p.jsx("span",{children:m&&(S==="Impressions"||S==="CTR")&&y.v===0?"NA":S==="Impressions"?WN(y.v):S==="CTR"?`${(y.v||0).toFixed(2)}%`:y.v===0?"0.00":y.v>0?`+${y.v.toFixed(2)}`:`${y.v.toFixed(2)}`}),y.abs!==0&&y.abs!=="NA"&&S!=="Impressions"&&S!=="CTR"&&p.jsxs("span",{className:"text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none",children:["(",y.abs>0?`+${Math.round(y.abs).toLocaleString()}`:Math.round(y.abs).toLocaleString(),")"]})]})})},`${f}-${S}-${U}-${T}`)})},T))},U))]},`${f}-${c.country}`)})})]})})]})},p_=async t=>{try{await navigator.clipboard.writeText(t)}catch{const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},YN=({globalData:t,regionalData:e,latestDate:n,quarterStart:r})=>{const[s,i]=ae.useState(null),[o,l]=ae.useState({}),[u,c]=ae.useState([]),[f,m]=ae.useState(!1),[g,C]=ae.useState(new Set),[R,N]=ae.useState(null),[O,I]=ae.useState({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}),E=y=>{N(y),setTimeout(()=>N(null),2e3)},A=ae.useMemo(()=>{if(!n)return"TBD";const y=new Date("2026-03-31"),x=new Date(n),k=Math.ceil((y-x)/(1e3*60*60*24));return k>0?k:0},[n]),P=ae.useMemo(()=>["APAC","India","Indonesia","Japan","South Korea","AUNZ"].map(y=>{var bt,we,z,Z;const x=t.find($=>dn($.country,y)||dn($.country,Mu[y])),k=(Z=(z=(we=(bt=x==null?void 0:x.metrics)==null?void 0:bt["DAU-SCT"])==null?void 0:we.total)==null?void 0:z.total)==null?void 0:Z.v,w=k==="NA"||k===void 0||isNaN(k)?0:k,J=HN[y.toUpperCase()]||1,ue=!x||k==="NA";return{market:y.toUpperCase(),actual:w,target:J,perfIndex:J>0?w/J*100:0,isOffline:ue}}),[t]),j=ae.useMemo(()=>{const y=[],x=["SHELF","SSC","UTS","MVR","UTSSFV"];return vr.forEach(w=>{(e[w]||[]).forEach((ue,bt)=>{var er,V,B,ee;if(KN(ue.optimisationEndDate,ue.campaignEndDate))return;const we=((er=ue.metrics)==null?void 0:er["DAU-SCT"])||{};if((B=(V=we.total)==null?void 0:V.total)!=null&&B.isPaused)return;const z=iE(ue.campaignStartDate,ue.optimisationEndDate),Z=z>=14,$=Mu[w]||w.toUpperCase(),xe=$t(ue.country),Ae=x.some(te=>xe.includes(te)),Nt=(te,ce,Ue)=>{var ct,Wt,Rn;const $e=(ct=we[te])==null?void 0:ct[ce];if(!$e||$e.v==="NA"||$e.isPaused)return;const ke=$e.v||0,Mt=$e.sig===-1,Le=Z?"PAUSE":"MAINTAIN",ze=Mt?"stat sig negative":"neutral negative";let Oe="";if(Ue==="G"&&ce!=="total"&&ke>=0){const ot=(Wt=we.male)==null?void 0:Wt[ce],mt=(Rn=we.female)==null?void 0:Rn[ce];if((ot==null?void 0:ot.v)!=="NA"&&(mt==null?void 0:mt.v)!=="NA"&&((ot==null?void 0:ot.v)||0)<-1e-4&&((mt==null?void 0:mt.v)||0)<-1e-4){const ne=Z?"Pause":"Maintain (Learning Phase)",oe=Z?"":` observed but hasn't reached maturity (Current: ${z}d / Required: 14d)`;Z&&Ae?Oe=`${$} ${ue.country} - Pause G${ce} given negative lift across both males (${ot.v.toFixed(2)}%) and females (${mt.v.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:Oe=`${$} ${ue.country} - ${ne} G${ce} given negative lift across both males (${ot.v.toFixed(2)}%) and females (${mt.v.toFixed(2)}%)${oe}`}}Oe||(Z?Ae?Oe=`${$} ${ue.country} - Pause ${Ue}${ce} given ${ze} (${ke.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:Oe=`${$} ${ue.country} - Pause ${Ue}${ce} given ${ze} (${ke.toFixed(2)}%)`:Oe=`${$} ${ue.country} - Maintain ${Ue}${ce} (Learning Phase): Negative lift (${ke.toFixed(2)}%) observed but hasn't reached maturity (Current: ${z}d / Required: 14d).`),y.push({id:`CAMP_${w}_${bt}_P_${te}_${ce}`,country:$,campaign:ue.country,age:ce==="total"?"GenPop":ce,gender:te==="total"?"GenPop":te.toUpperCase(),recommendation:Le,justification:Oe})},Pe=((ee=we.total)==null?void 0:ee.total)||{v:0,sig:0};!Ae&&Pe.v!=="NA"&&Pe.sig===1&&Pe.v>.001&&y.push({id:`CAMP_${w}_${bt}_SC`,country:$,campaign:ue.country,age:"GenPop",gender:"GenPop",recommendation:"SCALE",justification:`${$} ${ue.country} - Scale GenPop: Stat-sig positive lift (+${Pe.v.toFixed(2)}%) observed.`});const Tt=te=>{const ce=[];return["18-24","25-34","35+"].forEach(Ue=>{var $e,ke,Mt,Le;((ke=($e=we[te])==null?void 0:$e[Ue])==null?void 0:ke.v)!=="NA"&&(((Le=(Mt=we[te])==null?void 0:Mt[Ue])==null?void 0:Le.v)||0)<-1e-4&&ce.push(Ue)}),ce},it=Tt("male"),rn=Tt("female"),Cn=it.filter(te=>rn.includes(te));Cn.forEach(te=>Nt("total",te,"G")),it.filter(te=>!Cn.includes(te)).forEach(te=>Nt("male",te,"M")),rn.filter(te=>!Cn.includes(te)).forEach(te=>Nt("female",te,"F"))})}),[...y,...u].filter(w=>!g.has(w.id)).map(w=>o[w.id]?{...w,...o[w.id]}:w)},[e,u,g,o]),U=async y=>{const x=`${y.country}	${y.campaign}	${y.age}	${y.gender}	${y.recommendation}	${y.justification}`;await p_(x),E("Row Copied to Clipboard")},T=async()=>{if(j.length===0)return;const y="Market	Entity	Age	Gender	Directive	Justification",x=j.map(k=>`${k.country}	${k.campaign}	${k.age}	${k.gender}	${k.recommendation}	${k.justification}`).join(`
`);await p_(`${y}
${x}`),E("Full Matrix Copied for Sheets")},v=()=>{C(new Set),l({}),c([]),E("Matrix Restored to Baseline")},S=()=>{if(!O.campaign)return;const y=`MANUAL_${Date.now()}`;c(x=>[...x,{...O,id:y,statusType:O.recommendation==="PAUSE"?"danger":O.recommendation==="SCALE"?"success":"warning"}]),m(!1),I({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""})};return p.jsxs("div",{className:"w-full max-w-[1600px] mx-auto pb-32",children:[R&&p.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase",children:R}),p.jsx("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8",children:p.jsxs("div",{className:"space-y-4",children:[p.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase",children:"Shorts OKR Performance"}),p.jsxs("div",{className:"flex flex-wrap gap-10 pt-4",children:[p.jsxs("div",{className:"space-y-1",children:[p.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Quarter Start"}),p.jsx("p",{className:"text-lg font-bold text-white",children:r||"2026-02-01"})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Reporting Date (Latest)"}),p.jsx("p",{className:"text-lg font-bold text-emerald-400",children:n||"Awaiting Data..."})]}),p.jsxs("div",{className:"space-y-1",children:[p.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Days Left in Q1"}),p.jsxs("p",{className:"text-lg font-bold text-amber-400",children:[A," ",p.jsx("span",{className:"text-[10px] text-[#808080] ml-1 font-normal",children:"days remaining"})]})]})]})]})}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:P.map((y,x)=>{const k=JN(y.perfIndex,y.isOffline);return p.jsxs("div",{className:`relative ${k.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555]`,children:[p.jsx("div",{className:"flex justify-between items-start mb-6",children:p.jsx("h3",{className:"text-xl font-bold text-white uppercase",children:y.market})}),p.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[p.jsxs("span",{className:"text-3xl font-bold text-white",children:[y.perfIndex.toFixed(1),"%"]}),p.jsx("span",{className:"text-[9px] font-bold text-[#808080] uppercase",children:"INDEX"})]}),p.jsx("div",{className:"relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4",children:p.jsx("div",{className:`h-full ${k.accent}`,style:{width:`${Math.min(y.perfIndex,100)}%`}})}),p.jsxs("div",{className:"flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]",children:[p.jsxs("div",{className:"text-[#808080] uppercase",children:["Actual: ",p.jsxs("span",{className:"text-white",children:["+",y.actual.toFixed(2),"%"]})]}),p.jsxs("div",{className:"text-[#808080] uppercase",children:["Target: ",p.jsxs("span",{className:"text-[#b0b0b0]",children:[y.target.toFixed(2),"%"]})]})]})]},x)})}),p.jsxs("div",{className:"space-y-8",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6",children:[p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("div",{className:"p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]",children:p.jsx(yx,{className:"w-6 h-6 text-amber-400"})}),p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-bold text-white uppercase",children:"Strategic Guidance"}),p.jsx("p",{className:"text-[#808080] text-xs uppercase tracking-widest mt-1",children:"Manual Overrides"})]})]}),p.jsxs("div",{className:"flex flex-wrap gap-3",children:[p.jsxs("button",{onClick:()=>m(!0),className:"flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all",children:[p.jsx(Px,{className:"w-4 h-4"})," Add Pointer"]}),p.jsxs("button",{onClick:T,className:"flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[p.jsx($g,{className:"w-4 h-4"})," Copy All for Sheets"]}),p.jsxs("button",{onClick:v,className:"flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a]",children:[p.jsx(jx,{className:"w-4 h-4"})," Restore Defaults"]})]})]}),f&&p.jsxs("div",{className:"bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6",children:[p.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[p.jsxs("div",{children:[p.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Market"}),p.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase outline-none focus:border-[#FF0000] text-white",value:O.country,onChange:y=>I(x=>({...x,country:y.target.value.toUpperCase()}))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Entity"}),p.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",placeholder:"e.g. Veo Effects",value:O.campaign,onChange:y=>I(x=>({...x,campaign:y.target.value}))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Age"}),p.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:O.age,onChange:y=>I(x=>({...x,age:y.target.value}))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Gender"}),p.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:O.gender,onChange:y=>I(x=>({...x,gender:y.target.value}))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Directive"}),p.jsxs("select",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none text-white",value:O.recommendation,onChange:y=>I(x=>({...x,recommendation:y.target.value})),children:[p.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),p.jsx("option",{value:"SCALE",children:"SCALE"}),p.jsx("option",{value:"PAUSE",children:"PAUSE"})]})]})]}),p.jsx("textarea",{className:"w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] outline-none focus:border-[#FF0000] mb-4",placeholder:"Strategic justification context...",value:O.justification,onChange:y=>I(x=>({...x,justification:y.target.value}))}),p.jsxs("div",{className:"flex justify-end gap-3",children:[p.jsx("button",{onClick:()=>m(!1),className:"bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg hover:text-white font-bold text-[10px] uppercase transition-all border border-[#3a3a3a]",children:"Cancel"}),p.jsx("button",{onClick:S,className:"bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-500 font-bold text-[10px] uppercase transition-all",children:"Confirm Pointer"})]})]}),p.jsx("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto",children:p.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[p.jsx("thead",{children:p.jsxs("tr",{className:"bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold",children:[p.jsx("th",{className:"px-8 py-6 text-left",children:"Market"}),p.jsx("th",{className:"px-8 py-6 text-left",children:"Entity"}),p.jsx("th",{className:"px-8 py-6 text-center",children:"Age"}),p.jsx("th",{className:"px-8 py-6 text-center",children:"Gender"}),p.jsx("th",{className:"px-8 py-6 text-left",children:"Directive"}),p.jsx("th",{className:"px-8 py-6 text-left",children:"Justification"}),p.jsx("th",{className:"px-8 py-6 text-center",children:"Action"})]})}),p.jsx("tbody",{className:"divide-y divide-white/5",children:j.map(y=>{var x,k;return p.jsxs("tr",{className:`hover:bg-white/[0.02] group/row transition-colors ${y.recommendation==="PAUSE"?"bg-red-500/[0.03]":""}`,children:[p.jsx("td",{className:`px-8 py-4 font-bold uppercase ${y.isMarketAudit?"text-emerald-400":"text-blue-400"}`,children:y.country}),p.jsx("td",{className:"px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]",children:y.campaign}),p.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:y.age}),p.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:y.gender}),p.jsx("td",{className:"px-8 py-4 font-bold",children:s===y.id?p.jsxs("select",{className:"bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none",value:((x=o[y.id])==null?void 0:x.recommendation)||y.recommendation,onChange:w=>l(J=>({...J,[y.id]:{...J[y.id]||y,recommendation:w.target.value}})),children:[p.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),p.jsx("option",{value:"SCALE",children:"SCALE"}),p.jsx("option",{value:"PAUSE",children:"PAUSE"})]}):p.jsx("span",{className:`${y.recommendation==="PAUSE"?"text-red-400":y.recommendation==="SCALE"?"text-emerald-400":"text-amber-400"}`,children:y.recommendation})}),p.jsx("td",{className:"px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed",children:s===y.id?p.jsx("textarea",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none min-h-[60px]",value:((k=o[y.id])==null?void 0:k.justification)||y.justification,onChange:w=>l(J=>({...J,[y.id]:{...J[y.id]||y,justification:w.target.value}}))}):y.justification}),p.jsx("td",{className:"px-8 py-5 text-center",children:p.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity",children:[s===y.id?p.jsx("button",{onClick:()=>i(null),className:"p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg",children:p.jsx(Fx,{className:"w-4 h-4"})}):p.jsx("button",{onClick:()=>i(y.id),title:"Edit Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all",children:p.jsx(Cx,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>U(y),title:"Copy Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-all",children:p.jsx($g,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>C(w=>new Set(w).add(y.id)),title:"Delete Pointer",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500 hover:bg-white/10 transition-all",children:p.jsx(Wx,{className:"w-4 h-4"})})]})})]},y.id)})})]})})]})]})},m_=({type:t,title:e,icon:n,tag:r,uploadedFiles:s,handleFileUpload:i})=>{const o=t==="pct",l=o?"border-amber-500/30":"border-blue-500/30",u=o?"bg-[#1a1500]":"bg-[#0a0a1a]",c=o?"text-amber-500":"text-blue-500",f=o?"bg-amber-500/20":"bg-blue-500/20";return p.jsxs("div",{className:`p-6 rounded-lg border ${l} ${u} mb-6 transition-all`,children:[p.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[p.jsx("div",{className:`p-2 rounded-lg flex items-center justify-center ${f} ${c}`,children:p.jsx(n,{className:"w-5 h-5"})}),p.jsxs("div",{className:"text-left",children:[p.jsx("h2",{className:`text-lg font-bold uppercase tracking-tight ${c}`,children:e}),p.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:r})]})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left items-stretch",children:[p.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[p.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:m=>i(t,"global",m.target.files[0])}),p.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].global?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:p.jsx(Yv,{className:"w-7 h-7"})}),p.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"Global Hub"}),p.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].global?s[t].global.name:"PUSH_MASTER_FILE"})]}),p.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[p.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].countryHB).length>0?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:p.jsx(lx,{className:"w-7 h-7"})}),p.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Market Hub"}),p.jsx("div",{className:"w-full grid grid-cols-5 gap-1 px-1",children:vr.map(m=>p.jsxs("div",{className:"relative aspect-square group/item",children:[p.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:g=>i(t,"countryHB",g.target.files[0],m)}),p.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].countryHB[m]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:p.jsx("span",{className:"text-[7px] font-black uppercase",children:Mu[m]})})]},m))})]}),p.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[p.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].alwaysOn).length>0?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:p.jsx(yd,{className:"w-7 h-7"})}),p.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Always-On"}),p.jsx("div",{className:"w-full grid grid-cols-2 gap-1.5 px-2",children:Kl.filter(m=>m!=="JP Proactive Container").map(m=>p.jsxs("div",{className:"relative h-7 group/item",children:[p.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:g=>i(t,"alwaysOn",g.target.files[0],m)}),p.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].alwaysOn[m]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:p.jsx("span",{className:"text-[7px] font-black uppercase",children:m})})]},m))})]}),p.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[p.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:m=>i(t,"jpProactive",m.target.files[0])}),p.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].jpProactive?"bg-red-500/10 text-red-500":"bg-[#1a1a1a] text-[#555]"}`,children:p.jsx(yd,{className:"w-7 h-7"})}),p.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"JP Proactive Container"}),p.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].jpProactive?s[t].jpProactive.name:"PUSH_JP_PROACTIVE_CSV"})]})]})]})},XN=({uploadedFiles:t,handleFileUpload:e,startAnalysis:n,isAnalyzing:r,memoryIndex:s,loadHistoricalWeek:i,isLoadingMemory:o,historicalSnapshots:l})=>{var u,c;return p.jsx("div",{className:"min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0]",children:p.jsxs("div",{className:"max-w-[1500px] w-full z-10 text-center",children:[p.jsxs("div",{className:"mb-8",children:[p.jsx("div",{className:"inline-block mb-4",children:p.jsx("div",{className:"bg-[#FF0000] w-14 h-14 rounded-xl flex items-center justify-center mx-auto",children:p.jsx(Qv,{className:"text-white w-7 h-7"})})}),p.jsxs("h1",{className:"text-3xl font-bold tracking-tight mb-1 uppercase flex items-center justify-center gap-4",children:["Shorts Brain ",p.jsx("span",{className:"text-[#FF0000]",children:"2.0"}),p.jsx("a",{href:sE,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#555] hover:text-white hover:bg-white/10 transition-all",title:"Open Resource Drive",children:p.jsx(oE,{className:"w-5 h-5"})})]}),p.jsx("p",{className:"text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase",children:"APAC Marketing Hub"})]}),p.jsxs("div",{className:"p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all",children:[p.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[p.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500",children:p.jsx(Bx,{className:"w-5 h-5"})}),p.jsxs("div",{className:"text-left",children:[p.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-emerald-500",children:"Campaign Shared Meta"}),p.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Structural Definitions & Instructions"})]})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:[p.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[p.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.campaignInfo?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:p.jsx(YS,{className:"w-6 h-6"})}),p.jsxs("div",{className:"flex-1 text-left min-w-0",children:[p.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Structural Meta"}),p.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.campaignInfo?t.shared.campaignInfo.name:"PUSH_STRUCTURAL_CSV"})]}),p.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("shared","campaignInfo",f.target.files[0])})]}),p.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[p.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.pauseRelive?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:p.jsx(Ox,{className:"w-6 h-6"})}),p.jsxs("div",{className:"flex-1 text-left min-w-0",children:[p.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Pause/Relive Instructions"}),p.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.pauseRelive?t.shared.pauseRelive.name:"PUSH_INSTRUCTIONS_CSV"})]}),p.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("shared","pauseRelive",f.target.files[0])})]})]})]}),p.jsx(m_,{type:"pct",title:"Percentage Input Hub",tag:"Relative Lift Streams",icon:Zv,uploadedFiles:t,handleFileUpload:e}),p.jsx(m_,{type:"abs",title:"Absolute Input Hub",tag:"Discrete Volume Streams",icon:DS,uploadedFiles:t,handleFileUpload:e}),p.jsxs("div",{className:"p-6 rounded-lg border border-purple-500/30 bg-[#0d0a1a] mb-6 transition-all",children:[p.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[p.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500",children:p.jsx(Xv,{className:"w-5 h-5"})}),p.jsxs("div",{className:"text-left",children:[p.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-purple-500",children:"Attribution Analysis"}),p.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Marketing Pressure & Reach Metrics"})]})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:p.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[p.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${(u=t.attribution)!=null&&u.impressions?"bg-purple-500/10 text-purple-400":"bg-[#1a1a1a] text-[#555]"}`,children:p.jsx(LS,{className:"w-6 h-6"})}),p.jsxs("div",{className:"flex-1 text-left min-w-0",children:[p.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Impressions/CTR CSV"}),p.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:(c=t.attribution)!=null&&c.impressions?t.attribution.impressions.name:"PUSH_IMPRESSIONS_CTR_CSV"})]}),p.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("attribution","impressions",f.target.files[0])})]})})]}),p.jsxs("button",{onClick:n,disabled:r,className:"px-10 py-4 rounded-lg font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-3 mx-auto uppercase mt-4 border border-[#3a3a3a]",children:[r?p.jsx(Mx,{className:"w-5 h-5 animate-spin"}):p.jsx(bx,{className:"w-5 h-5"}),r?"INITIALIZING...":"EXECUTE ANALYSIS"]}),s.length>0&&p.jsxs("div",{className:"mt-10 p-6 rounded-lg border border-[#3a3a3a] bg-[#1a1a1a]",children:[p.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[p.jsx(Jv,{className:"w-5 h-5 text-[#808080]"}),p.jsx("h2",{className:"text-sm font-bold uppercase tracking-wider text-[#808080]",children:"Stored Snapshots"})]}),p.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3",children:s.map(f=>p.jsxs("button",{onClick:()=>i(f.weekId),disabled:o,className:"border border-[#3a3a3a] bg-black rounded-lg p-4 text-center hover:border-[#FF0000]/50 hover:bg-[#FF0000]/5 transition-all cursor-pointer group",children:[p.jsx(Bf,{className:"w-4 h-4 text-[#808080] mx-auto mb-2 group-hover:text-[#FF0000]"}),p.jsx("span",{className:"text-xs font-bold block text-white",children:f.weekId}),p.jsx("span",{className:"text-[8px] text-[#808080] block mt-1",children:f.reportingDate||"No date"}),p.jsxs("span",{className:"text-[8px] text-[#555] block",children:[f.globalCount||0," campaigns"]})]},f.weekId))})]})]})})},ZN=()=>{const[t,e]=ae.useState(!1),[n,r]=ae.useState(!1),[s,i]=ae.useState("OKR"),[o,l]=ae.useState(!0),[u,c]=ae.useState(["DAU-SCT"]),[f,m]=ae.useState(!1),[g,C]=ae.useState("India"),[R,N]=ae.useState(null),[O,I]=ae.useState({ScaledCreation:"India",Trends:"India",CultMo:"India",ArtMo:"India","GenAI Hub":"India",AlwaysOn:"India"}),[E,A]=ae.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[P,j]=ae.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[U,T]=ae.useState([]),[v,S]=ae.useState({}),[y,x]=ae.useState({}),[k,w]=ae.useState("2026-02-01"),[J,ue]=ae.useState({pct:{global:null,countryHB:{},alwaysOn:{},jpProactive:null},abs:{global:null,countryHB:{},alwaysOn:{},jpProactive:null},shared:{campaignInfo:null,pauseRelive:null},attribution:{impressions:null}}),[bt,we]=ae.useState([]),[z,Z]=ae.useState("idle"),[$,xe]=ae.useState(!1),[Ae,Nt]=ae.useState([]),Pe=ae.useMemo(()=>s==="Global Hub"||s==="AlwaysOn"?Er.filter(V=>V!=="Impressions"&&V!=="CTR"):Er,[s]),Tt=ae.useMemo(()=>{var ee;const V=O[s],B=(ee=y[s])==null?void 0:ee[V];return B?Object.keys(B).sort():[]},[s,O,y]),it=ae.useMemo(()=>{var te,ce;const V=O[s],B=E[s],ee=(ce=(te=y[s])==null?void 0:te[V])==null?void 0:ce[B];return ee?Object.keys(ee).sort():[]},[s,O,E,y]),rn=async()=>{var V,B;r(!0);try{const ee=q=>new Promise(G=>{q||G("");const X=new FileReader;X.onload=re=>G(re.target.result),X.readAsText(q)});let te={};const ce=J.shared.campaignInfo;if(ce){const G=(await ee(ce)).split(/\r?\n/).filter(X=>X.trim()!=="");if(G.length>1){const X=fn(G[0]),re=ve(X,["Campaign","Campaign Name"]),Y=ve(X,["Market","Country"]),De=ve(X,["Campaign Tabs","Tabs","Tab"]),ie=ve(X,["Campaign Sub tabs","Sub tabs","Sub tab","Sub-tabs","Subtab","Sub category"]),ye=ve(X,["Campaign Sub Sub tabs","Sub sub tabs","Sub-sub-tabs","Subsubtab"]),fe=ve(X,["Campaign Start Date","Start Date"]),Re=ve(X,["Campaign End Date","End Date"]),de=ve(X,["Optimisation End Date","Optimization Date"]),be=ve(X,["Age"]),He=ve(X,["Gender"]);G.slice(1).forEach(at=>{const Me=fn(at),Lt=Be(Me[re]);if(!Lt)return;const Kt=Be(Me[Y]).toUpperCase(),$n=zd[Kt]||vr.find(bn=>dn(bn,Kt))||"India",jt=$t($n),It=$t(Lt);if(te[jt]||(te[jt]={}),te[jt][It]||(te[jt][It]={market:$n,tab:Be(Me[De]),subTab:Be(Me[ie]),subSubTab:Be(Me[ye]),campaignStartDate:Be(Me[fe]),campaignEndDate:Be(Me[Re]),optimisationEndDate:Be(Me[de]),targeting:{ages:[],genders:[]}}),be!==-1&&Me[be]){const bn=Be(Me[be]).toLowerCase().split(",").map(yt=>yt.trim()),gt=[];bn.forEach(yt=>{yt.includes("18-24")&&gt.push("18-24"),yt.includes("25-34")&&gt.push("25-34"),yt.includes("18-34")&&gt.push("18-34"),(yt.includes("35-44")||yt.includes("35+"))&&gt.push("35+")}),gt.includes("18-24")&&gt.includes("25-34")&&gt.push("18-34"),gt.push("total"),te[jt][It].targeting.ages=[...new Set([...te[jt][It].targeting.ages,...gt])]}if(He!==-1&&Me[He]){const bn=Be(Me[He]).toLowerCase().split(",").map(yt=>yt.trim()),gt=[];bn.forEach(yt=>{(yt==="male"||yt==="m")&&gt.push("male"),(yt==="female"||yt==="f")&&gt.push("female")}),gt.push("total"),te[jt][It].targeting.genders=[...new Set([...te[jt][It].targeting.genders,...gt])]}})}}let Ue={};const $e=J.shared.pauseRelive;if($e){const G=(await ee($e)).split(/\r?\n/).filter(X=>X.trim()!=="");if(G.length>1){const X=fn(G[0]),re=ve(X,["Campaign","Campaign Name"]),Y=ve(X,["Age","Age Group"]),De=ve(X,["Gender"]),ie=ve(X,["Instruction","Action"]),ye=ve(X,["Launch Date","Date"]);G.slice(1).forEach(fe=>{const Re=fn(fe),de=$t(Re[re]);if(!de)return;const be=(Re[Y]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),He=(Re[De]||"total").toLowerCase().trim(),at=(Re[ie]||"").toUpperCase().trim(),Me=Be(Re[ye]);Ue[de]||(Ue[de]={}),Ue[de][He]||(Ue[de][He]={}),Ue[de][He][be]={instruction:at,launchDate:Me}})}}const ke={},Mt=(q,G,X=null,re=null)=>{Object.values(q).forEach(Y=>{const De=Y.meta||{};let ie=X||Be(De.tab)||"Uncategorized";const ye=Cl.find(Me=>dn(Me.id,ie)||dn(Me.label,ie)),fe=ye?ye.id:ie,Re=re||Be(De.subTab)||"Generic",de=Be(De.subSubTab)||"Default",be=De.market||G,He=$t(Y.country),at=Ue[$t(Y.country)];at&&Er.forEach(Me=>{Ft.forEach(Lt=>{Tn.forEach(Kt=>{var gt;const $n=Kt.replace(/[^a-z0-9+]/g,""),jt=$n==="1824"||$n==="2534"?"1834":null,It=[[Lt,$n],jt?[Lt,jt]:null,[Lt,"total"],["total",$n],jt?["total",jt]:null,["total","total"]].filter(Boolean);let bn=null;for(const[yt,bs]of It){const Ns=(gt=at[yt])==null?void 0:gt[bs];if(Ns&&Ns.instruction==="PAUSE"&&Ns.launchDate&&Ns.launchDate.trim()!==""){bn=Ns;break}}bn&&(Y.metrics[Me][Lt][Kt].isPaused=!0,Y.metrics[Me][Lt][Kt].launchDate=bn.launchDate)})})}),ke[fe]||(ke[fe]={}),ke[fe][be]||(ke[fe][be]={}),ke[fe][be][Re]||(ke[fe][be][Re]={}),ke[fe][be][Re][de]||(ke[fe][be][Re][de]={}),ke[fe][be][Re][de][He]=Y})};let Le=null;const ze=async(q,G=!1)=>{const X=J[q];let re={};if(X.global){const ye=await ee(X.global);if(q==="pct"){const fe=ye.split(/\r?\n/).filter(be=>be.trim()!==""),Re=fn(fe[0]),de=ve(Re,["Date","Reporting Date","Day"]);if(de!==-1){let be=null;fe.slice(1).forEach(He=>{const at=fn(He),Me=Mn(at[de]);Me&&(!be||Me>be)&&(be=Me)}),Le=be,N(be)}}re=hn(ye,{},te,["Country","Market","Campaign"],G,null,!0,!1)}const Y={};for(const ye of vr)if(X.countryHB[ye]){const fe=await ee(X.countryHB[ye]);Y[ye]=hn(fe,{},te,void 0,G,ye,!1,!1)}const De={};for(const ye of Kl)if(ye!=="JP Proactive Container"&&X.alwaysOn[ye]){const fe=await ee(X.alwaysOn[ye]);De[ye]=hn(fe,{},te,void 0,G,null,!1,!0)}let ie={};if(X.jpProactive){const ye=await ee(X.jpProactive);ie=hn(ye,{},te,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],G,"Japan",!1,!0)}return{streamGData:re,mHubParsed:Y,alwaysOnParsed:De,jpProactiveParsed:ie}},Oe=await ze("pct",!1),ct=await ze("abs",!0);let Wt={};if((V=J.attribution)!=null&&V.impressions){const q=await ee(J.attribution.impressions);Wt=hn(q,{},te,["Campaign","Campaign Name","Entity"],!0,null,!1,!1)}const Rn=q=>q.includes("_")?q.substring(q.indexOf("_")+1):q,ot=(q,G,X={})=>{const re={...q};return Object.keys(G).forEach(Y=>{if(!re[Y]){re[Y]=G[Y];return}Er.forEach(De=>{Ft.forEach(ie=>{Tn.forEach(ye=>{const fe=G[Y].metrics[De][ie][ye];re[Y].metrics[De][ie][ye].abs=fe.abs,(De==="Impressions"||De==="CTR")&&fe.v!==0&&fe.v!=="NA"&&(re[Y].metrics[De][ie][ye].v=fe.v)})})})}),Object.keys(re).forEach(Y=>{const De=Object.keys(X).find(ie=>{const ye=Rn(Y),fe=Rn(ie);if(re[Y].isAnchor&&X[ie].isAnchor){const Re=re[Y].market,de=X[ie].market;return dn(Re,de)||dn(re[Y].country,X[ie].country)}return dn(Y,ie)||Y.includes(ie)||ie.includes(Y)||dn(ye,fe)});De&&Ft.forEach(ie=>{Tn.forEach(ye=>{var de,be,He,at,Me,Lt;const fe=((He=(be=(de=X[De].metrics.Impressions)==null?void 0:de[ie])==null?void 0:be[ye])==null?void 0:He.v)||0;fe>0&&fe!=="NA"&&(re[Y].metrics.Impressions[ie][ye].v=fe);const Re=((Lt=(Me=(at=X[De].metrics.CTR)==null?void 0:at[ie])==null?void 0:Me[ye])==null?void 0:Lt.v)||0;Re>0&&Re!=="NA"&&(re[Y].metrics.CTR[ie][ye].v=Re)})})}),re},mt=ot(Oe.streamGData,ct.streamGData,Wt);Mt(mt,"APAC");const ne={};vr.forEach(q=>{const G=ot(Oe.mHubParsed[q]||{},ct.mHubParsed[q]||{},Wt);ne[q]=Object.values(G),Mt(G,q)}),Kl.forEach(q=>{if(q==="JP Proactive Container")return;const G=ot(Oe.alwaysOnParsed[q]||{},ct.alwaysOnParsed[q]||{},Wt);Mt(G,"India","AlwaysOn",q)});const oe=ot(Oe.jpProactiveParsed||{},ct.jpProactiveParsed||{},Wt);Object.values(oe).forEach(q=>{q.market||(q.market="Japan")}),Mt(oe,"Japan","AlwaysOn","JP Proactive Container");const Ve={};Object.keys(ke).forEach(q=>{Ve[q]={},Object.keys(ke[q]).forEach(G=>{Ve[q][G]={},Object.keys(ke[q][G]).forEach(X=>{Ve[q][G][X]={},Object.keys(ke[q][G][X]).forEach(re=>{Ve[q][G][X][re]=Object.values(ke[q][G][X][re])})})})});const Ge=Object.values(mt);T(Ge),S(ne),x(Ve),e(!0);const et=jN(Le||void 0);Z("saving");try{const q={},G=J;G.pct.global&&(q["pct-global"]=G.pct.global);for(const[re,Y]of Object.entries(G.pct.countryHB))Y&&(q[`pct-market-${re}`]=Y);for(const[re,Y]of Object.entries(G.pct.alwaysOn))Y&&(q[`pct-ao-${re}`]=Y);G.pct.jpProactive&&(q["pct-jp-proactive"]=G.pct.jpProactive),G.abs.global&&(q["abs-global"]=G.abs.global);for(const[re,Y]of Object.entries(G.abs.countryHB))Y&&(q[`abs-market-${re}`]=Y);for(const[re,Y]of Object.entries(G.abs.alwaysOn))Y&&(q[`abs-ao-${re}`]=Y);G.abs.jpProactive&&(q["abs-jp-proactive"]=G.abs.jpProactive),G.shared.campaignInfo&&(q["shared-meta"]=G.shared.campaignInfo),G.shared.pauseRelive&&(q["shared-instructions"]=G.shared.pauseRelive),(B=G.attribution)!=null&&B.impressions&&(q["attribution-impressions"]=G.attribution.impressions),await FN({weekId:et,reportingDate:Le,rawFiles:q}),Z("saved");const X=await h_(new Date().getFullYear());we(X.snapshots||[])}catch(q){console.error("Memory save failed:",q),Z("error")}}catch(ee){console.error(ee)}finally{r(!1)}};ae.useEffect(()=>{h_(new Date().getFullYear()).then(V=>we(V.snapshots||[])).catch(()=>{})},[]);const Cn=ae.useCallback(async V=>{xe(!0);try{const B=await $N(V);if(!B||Object.keys(B).length===0){console.error("No CSV files found for",V);return}let ee={};if(B["shared-meta"]){const ne=B["shared-meta"].split(/\r?\n/).filter(oe=>oe.trim()!=="");if(ne.length>1){const oe=fn(ne[0]),Ve=ve(oe,["Campaign","Campaign Name"]),Ge=ve(oe,["Market","Country"]),et=ve(oe,["Campaign Tabs","Tabs","Tab"]),q=ve(oe,["Sub Tab","SubTab","Sub-Tab"]),G=ve(oe,["Sub Sub Tab","SubSubTab","Sub-Sub-Tab"]),X=ve(oe,["Campaign Start Date","Start Date"]),re=ve(oe,["Campaign End Date","End Date"]),Y=ve(oe,["Optimisation End Date","Opt End Date"]);ne.slice(1).forEach(De=>{const ie=fn(De),ye=Be(ie[Ve]);if(!ye)return;const fe=Be(ie[Ge]).toUpperCase(),Re=zd[fe]||vr.find(He=>dn(He,fe))||"India",de=$t(Re),be=$t(ye);ee[de]||(ee[de]={}),ee[de][be]={market:Re,tab:Be(ie[et]),subTab:Be(ie[q]),subSubTab:Be(ie[G]),campaignStartDate:Mn(ie[X]),campaignEndDate:Mn(ie[re]),optimisationEndDate:Mn(ie[Y])}})}}const te={};if(B["shared-instructions"]){const ne=B["shared-instructions"].split(/\r?\n/).filter(oe=>oe.trim()!=="");if(ne.length>1){const oe=fn(ne[0]),Ve=ve(oe,["Campaign","Campaign Name"]),Ge=ve(oe,["Age","Age Group"]),et=ve(oe,["Gender"]),q=ve(oe,["Instruction","Action"]),G=ve(oe,["Launch Date","Date"]);ne.slice(1).forEach(X=>{const re=fn(X),Y=$t(re[Ve]);if(!Y)return;const De=(re[Ge]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),ie=(re[et]||"total").toLowerCase().trim(),ye=(re[q]||"").toUpperCase().trim(),fe=Be(re[G]);te[Y]||(te[Y]={}),te[Y][ie]||(te[Y][ie]={}),te[Y][ie][De]={instruction:ye,launchDate:fe}})}}const ce={},Ue=(ne,oe,Ve=null,Ge=null)=>{Object.values(ne).forEach(et=>{const q=et.meta||{};let G=Ve||Be(q.tab)||"Uncategorized";const X=Cl.find(Re=>dn(Re.id,G)||dn(Re.label,G)),re=X?X.id:G,Y=Ge||Be(q.subTab)||"Generic",De=Be(q.subSubTab)||"Default",ie=q.market||oe,ye=$t(et.country),fe=te[$t(et.country)];fe&&Er.forEach(Re=>{Ft.forEach(de=>{Tn.forEach(be=>{var Kt;const He=be.replace(/[^a-z0-9+]/g,""),at=He==="1824"||He==="2534"?"1834":null,Me=[[de,He],at?[de,at]:null,[de,"total"],["total",He],at?["total",at]:null,["total","total"]].filter(Boolean);let Lt=null;for(const[$n,jt]of Me){const It=(Kt=fe[$n])==null?void 0:Kt[jt];if(It&&It.instruction==="PAUSE"&&It.launchDate&&It.launchDate.trim()!==""){Lt=It;break}}Lt&&(et.metrics[Re][de][be].isPaused=!0,et.metrics[Re][de][be].launchDate=Lt.launchDate)})})}),ce[re]||(ce[re]={}),ce[re][ie]||(ce[re][ie]={}),ce[re][ie][Y]||(ce[re][ie][Y]={}),ce[re][ie][Y][De]||(ce[re][ie][Y][De]={}),ce[re][ie][Y][De][ye]=et})},$e=(ne,oe)=>{const Ve={...ne};return Object.keys(oe).forEach(Ge=>{if(!Ve[Ge]){Ve[Ge]=oe[Ge];return}Er.forEach(et=>{Ft.forEach(q=>{Tn.forEach(G=>{const X=oe[Ge].metrics[et][q][G];Ve[Ge].metrics[et][q][G].abs=X.abs,(et==="Impressions"||et==="CTR")&&X.v!==0&&X.v!=="NA"&&(Ve[Ge].metrics[et][q][G].v=X.v)})})})}),Ve},ke=B["attribution-impressions"]?hn(B["attribution-impressions"],{},ee,["Campaign","Campaign Name","Entity"],!0,null,!1,!1):{},Mt=B["pct-global"]?hn(B["pct-global"],{},ee,["Country","Market","Campaign"],!1,null,!0,!1):{},Le=B["abs-global"]?hn(B["abs-global"],{},ee,["Country","Market","Campaign"],!0,null,!0,!1):{},ze=$e(Mt,Le,ke);Ue(ze,"APAC");let Oe=null;if(B["pct-global"]){const ne=B["pct-global"].split(/\r?\n/).filter(oe=>oe.trim()!=="");if(ne.length>1){const oe=fn(ne[0]),Ve=ve(oe,["Date","Reporting Date","Day"]);Ve!==-1&&ne.slice(1).forEach(Ge=>{const et=fn(Ge),q=Mn(et[Ve]);q&&(!Oe||q>Oe)&&(Oe=q)})}}const ct={};vr.forEach(ne=>{const oe=B[`pct-market-${ne}`]?hn(B[`pct-market-${ne}`],{},ee,void 0,!1,ne,!1,!1):{},Ve=B[`abs-market-${ne}`]?hn(B[`abs-market-${ne}`],{},ee,void 0,!0,ne,!1,!1):{},Ge=$e(oe,Ve,ke);ct[ne]=Object.values(Ge),Ue(Ge,ne)}),Kl.forEach(ne=>{if(ne==="JP Proactive Container")return;const oe=B[`pct-ao-${ne}`]?hn(B[`pct-ao-${ne}`],{},ee,void 0,!1,null,!1,!0):{},Ve=B[`abs-ao-${ne}`]?hn(B[`abs-ao-${ne}`],{},ee,void 0,!0,null,!1,!0):{},Ge=$e(oe,Ve,ke);Ue(Ge,"India","AlwaysOn",ne)});const Wt=B["pct-jp-proactive"]?hn(B["pct-jp-proactive"],{},ee,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],!1,"Japan",!1,!0):{},Rn=B["abs-jp-proactive"]?hn(B["abs-jp-proactive"],{},ee,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],!0,"Japan",!1,!0):{},ot=$e(Wt,Rn,ke);Object.values(ot).forEach(ne=>{ne.market||(ne.market="Japan")}),Ue(ot,"Japan","AlwaysOn","JP Proactive Container");const mt={};Object.keys(ce).forEach(ne=>{mt[ne]={},Object.keys(ce[ne]).forEach(oe=>{mt[ne][oe]={},Object.keys(ce[ne][oe]).forEach(Ve=>{mt[ne][oe][Ve]={},Object.keys(ce[ne][oe][Ve]).forEach(Ge=>{mt[ne][oe][Ve][Ge]=Object.values(ce[ne][oe][Ve][Ge])})})})}),T(Object.values(ze)),S(ct),x(mt),N(Oe),e(!0),i("OKR"),Nt(ne=>ne.find(oe=>oe.weekId===V)?ne:[...ne,{weekId:V}])}catch(B){console.error("Failed to load snapshot:",B)}finally{xe(!1)}},[]);ae.useEffect(()=>{A(V=>({...V,[s]:""})),j(V=>({...V,[s]:""}))},[s,O[s]]);const er=(V,B,ee,te)=>{ue(ce=>{const Ue=B==="countryHB"||B==="alwaysOn",$e={...ce[V]};return Ue?$e[B]={...$e[B],[te]:ee}:$e[B]=ee,{...ce,[V]:$e}})};return t?p.jsxs("div",{className:"flex h-screen bg-black text-[#e0e0e0] overflow-hidden",children:[p.jsxs("aside",{className:`${o?"w-72":"w-20"} transition-all duration-300 bg-[#1a1a1a] border-r border-[#3a3a3a] flex flex-col z-50`,children:[p.jsxs("div",{className:"p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#3a3a3a]",children:[p.jsx("div",{className:"bg-[#FF0000] p-2 rounded-lg flex items-center justify-center",children:p.jsx(Qv,{className:"w-5 h-5 text-white"})}),o&&p.jsxs("div",{className:"flex-1",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("h2",{className:"text-lg font-bold tracking-tight",children:["BRAIN ",p.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),p.jsx("a",{href:sE,target:"_blank",rel:"noopener noreferrer",className:"text-[#444] hover:text-white transition-colors",title:"Source Drive",children:p.jsx(oE,{className:"w-4 h-4"})})]}),p.jsx("p",{className:"text-[8px] font-bold uppercase text-[#808080] tracking-widest",children:"APAC Shorts"})]})]}),p.jsxs("nav",{className:"flex-1 px-4 space-y-1 overflow-y-auto",children:[qN.map(V=>p.jsxs("button",{onClick:()=>{V.id==="Upload"?e(!1):i(V.id)},className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all group relative cursor-pointer ${s===V.id?"bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,children:[p.jsx(V.icon,{className:"w-5 h-5 shrink-0"}),o&&p.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:V.label})]},V.id)),p.jsxs("button",{onClick:()=>m(!f),className:"w-full flex items-center justify-between p-3 rounded-lg text-[#808080] hover:text-white cursor-pointer border border-transparent",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx(cx,{className:"w-5 h-5 shrink-0"}),o&&p.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:"Campaign Deepdive"})]}),o&&(f?p.jsx(qS,{className:"w-4 h-4"}):p.jsx(US,{className:"w-4 h-4"}))]}),f&&o&&p.jsx("div",{className:"pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300",children:Cl.map(V=>p.jsxs("button",{onClick:()=>i(V.id),className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${s===V.id?"bg-[#FF0000]/10 text-[#FF0000]":"text-[#555] hover:bg-white/5 hover:text-white"}`,children:[p.jsx(V.icon,{className:"w-4 h-4 shrink-0"}),p.jsx("span",{className:"text-[10px] font-bold uppercase",children:V.label})]},V.id))}),o&&p.jsxs("div",{className:"mt-6 pt-4 border-t border-[#3a3a3a]",children:[p.jsxs("div",{className:"flex items-center gap-2 px-3 mb-3",children:[p.jsx(Jv,{className:"w-4 h-4 text-[#808080]"}),p.jsx("span",{className:"text-[10px] font-bold uppercase text-[#808080] tracking-wider",children:"Memory"}),z==="saving"&&p.jsx(Ex,{className:"w-3 h-3 text-amber-400 animate-spin ml-auto"}),z==="saved"&&p.jsx(QS,{className:"w-3 h-3 text-emerald-400 ml-auto"}),z==="error"&&p.jsx(WS,{className:"w-3 h-3 text-red-400 ml-auto"})]}),p.jsx("div",{className:"space-y-1 max-h-[200px] overflow-y-auto px-1",children:bt.length===0?p.jsx("p",{className:"text-[9px] text-[#555] px-3 py-2",children:"No snapshots stored yet"}):bt.map(V=>p.jsxs("button",{onClick:()=>Cn(V.weekId),disabled:$,className:`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-all cursor-pointer ${Ae.some(B=>B.weekId===V.weekId)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,children:[p.jsx(Bf,{className:"w-3 h-3 shrink-0"}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("span",{className:"text-[10px] font-bold block",children:V.weekId}),p.jsx("span",{className:"text-[8px] opacity-60",children:V.reportingDate||"No date"})]}),p.jsx("span",{className:"text-[8px] opacity-50",children:V.globalCount||0})]},V.weekId))})]})]}),p.jsx("button",{type:"button",onClick:()=>l(!o),className:"p-6 border-t border-[#3a3a3a] text-[#555] hover:text-white flex items-center justify-center transition-colors",title:o?"Collapse sidebar":"Expand sidebar",children:o?p.jsx(eA,{className:"w-5 h-5"}):p.jsx(Sx,{className:"w-5 h-5"})})]}),p.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[p.jsxs("header",{className:"px-8 py-5 border-b border-[#3a3a3a] flex items-center justify-between bg-[#1a1a1a]",children:[p.jsx("div",{className:"flex items-center gap-4",children:p.jsx("h4",{className:"text-sm font-bold text-white uppercase",children:s})}),p.jsxs("button",{className:"bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[p.jsx(ox,{className:"w-4 h-4 mr-2 inline"})," Export Hub"]})]}),p.jsxs("main",{className:"flex-1 overflow-auto p-10 relative",children:[s==="OKR"&&p.jsx(YN,{globalData:U,regionalData:v,latestDate:R,quarterStart:k}),(s==="Global Hub"||s==="Market Hub")&&p.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[p.jsx(d_,{activeMetrics:u.filter(V=>Pe.includes(V)),allowedMetrics:Pe,toggleMetric:V=>c(B=>B.includes(V)?B.length>1?B.filter(ee=>ee!==V):B:[...B,V]),handleAllToggle:()=>c(V=>V.length===Pe.length?["DAU-SCT"]:[...Pe])}),s==="Market Hub"&&p.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[p.jsx(Bg,{className:"w-6 h-6 text-red-600"}),p.jsx("select",{value:g,onChange:V=>C(V.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:vr.map(V=>p.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))})]}),p.jsx(f_,{data:s==="Global Hub"?U:(()=>{const V=(v[g]||[]).filter(ee=>ee.country&&ee.country.toUpperCase()!=="UNKNOWN"),B=U.find(ee=>dn(ee.country,g)||dn(ee.country,Mu[g]));return B?[{...B,isAnchor:!0},...V]:V})(),activeMetrics:u.filter(V=>Pe.includes(V)),isCampaignView:s==="Market Hub",hideDates:s==="Global Hub",latestGlobalDate:R})]}),(Cl.some(V=>V.id===s)||y[s])&&s!=="OKR"&&p.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[p.jsx(d_,{activeMetrics:u.filter(V=>Pe.includes(V)),allowedMetrics:Pe,toggleMetric:V=>c(B=>B.includes(V)?B.length>1?B.filter(ee=>ee!==V):B:[...B,V]),handleAllToggle:()=>c(V=>V.length===Pe.length?["DAU-SCT"]:[...Pe])}),p.jsxs("div",{className:"flex flex-wrap gap-4",children:[p.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[p.jsx(Bg,{className:"w-6 h-6 text-red-600"}),p.jsx("select",{value:O[s],onChange:V=>I(B=>({...B,[s]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:vr.map(V=>p.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))})]}),Tt.length>0&&p.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[p.jsx(dx,{className:"w-6 h-6 text-amber-500"}),p.jsxs("select",{value:E[s],onChange:V=>A(B=>({...B,[s]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:[p.jsx("option",{value:"",className:"bg-neutral-900",children:"ALL SUB TABS"}),Tt.map(V=>p.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))]})]}),s!=="AlwaysOn"&&it.length>0&&E[s]!==""&&p.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[p.jsx(vx,{className:"w-6 h-6 text-purple-500"}),p.jsxs("select",{value:P[s],onChange:V=>j(B=>({...B,[s]:V.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:[p.jsx("option",{value:"",className:"bg-neutral-900",children:"ALL SUB SUB TABS"}),it.map(V=>p.jsx("option",{value:V,className:"bg-neutral-900",children:V},V))]})]})]}),p.jsx(f_,{data:(()=>{var te,ce,Ue,$e,ke,Mt,Le,ze;const V=O[s],B=E[s],ee=P[s];if(s==="AlwaysOn"&&B==="JP Proactive Container"){const Oe=(ce=(te=y.AlwaysOn)==null?void 0:te.Japan)==null?void 0:ce["JP Proactive Container"];return Oe?Object.values(Oe).flatMap(ct=>Array.isArray(ct)?ct:Object.values(ct).flat()):[]}if(!B){const Oe=(Ue=y[s])==null?void 0:Ue[V];return Oe?Object.values(Oe).flatMap(ct=>Object.values(ct).flat()):[]}if(!ee||s==="AlwaysOn"){const Oe=(ke=($e=y[s])==null?void 0:$e[V])==null?void 0:ke[B];if(!Oe)return[];const ct=Object.values(Oe).flat();return s==="AlwaysOn"?[...ct].sort((Wt,Rn)=>(Wt.explicitTrendStart||Wt.dataMinDate||"").localeCompare(Rn.explicitTrendStart||Rn.dataMinDate||"")):ct}return((ze=(Le=(Mt=y[s])==null?void 0:Mt[V])==null?void 0:Le[B])==null?void 0:ze[ee])||[]})(),activeMetrics:u.filter(V=>Pe.includes(V)),isCampaignView:!0,isAlwaysOn:s==="AlwaysOn",latestGlobalDate:R})]})]})]}),p.jsx("style",{children:`
        body { background-color: #000000; color: #e0e0e0; margin: 0; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 10px; }
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; padding-right: 2rem; }
      `})]}):p.jsx(XN,{uploadedFiles:J,handleFileUpload:er,startAnalysis:rn,isAnalyzing:n,memoryIndex:bt,loadHistoricalWeek:Cn,isLoadingMemory:$,historicalSnapshots:Ae})};function aE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eP=aE,lE=new La("auth","Firebase",aE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new qf("@firebase/auth");function tP(t,...e){Lu.logLevel<=Te.WARN&&Lu.warn(`Auth (${li}): ${t}`,...e)}function Ql(t,...e){Lu.logLevel<=Te.ERROR&&Lu.error(`Auth (${li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,...e){throw jp(t,...e)}function Yn(t,...e){return jp(t,...e)}function Lp(t,e,n){const r={...eP(),[e]:n};return new La("auth","Firebase",r).create(e,{appName:t.name})}function Ws(t){return Lp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gr(t,"argument-error"),Lp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lE.create(t,...e)}function he(t,e,...n){if(!t)throw jp(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function Mr(t,e){t||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function rP(){return g_()==="http:"||g_()==="https:"}function g_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rP()||_A()||"connection"in navigator)?navigator.onLine:!0}function iP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mr(n>e,"Short delay should be less than long delay!"),this.isMobile=mA()||vA()}get(){return sP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t,e){Mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lP=new qa(3e4,6e4);function Fp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function po(t,e,n,r,s={}){return cE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ja({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return yA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(c.credentials="include"),uE.fetch()(await hE(t,t.config.apiHost,n,l),c)})}async function cE(t,e,n){t._canInitEmulator=!1;const r={...oP,...e};try{const s=new cP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Rl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Rl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Rl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Lp(t,f,c);gr(t,f)}}catch(s){if(s instanceof yr)throw s;gr(t,"network-request-failed",{message:String(s)})}}async function uP(t,e,n,r,s={}){const i=await po(t,e,n,r,s);return"mfaPendingCredential"in i&&gr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function hE(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Up(t.config,s):`${t.config.apiScheme}://${s}`;return aP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class cP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yn(this.auth,"network-request-failed")),lP.get())})}}function Rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){return po(t,"POST","/v1/accounts:delete",e)}async function ju(t,e){return po(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dP(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),s=$p(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ra(Eh(s.auth_time)),issuedAtTime:ra(Eh(s.iat)),expirationTime:ra(Eh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Eh(t){return Number(t)*1e3}function $p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=n1(n);return s?JSON.parse(s):(Ql("Failed to decode base64 JWT payload"),null)}catch(s){return Ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function y_(t){const e=$p(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yr&&fP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Na(t,ju(e,{idToken:n}));he(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?dE(s.providerUserInfo):[],o=gP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new qd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function mP(t){const e=Rt(t);await Uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function dE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e){const n=await cE(t,{},async()=>{const r=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await hE(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(u.credentials="include"),uE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _P(t,e){return po(t,"POST","/v2/accounts:revokeToken",Fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=y_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zi;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new pP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Na(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dP(this,e)}reload(){return mP(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(Ws(this.auth));const e=await this.getIdToken();return await Na(this,hP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:C,providerData:R,stsTokenManager:N}=n;he(m&&N,e,"internal-error");const O=zi.fromJSON(this.name,N);he(typeof m=="string",e,"internal-error"),qr(r,e.name),qr(s,e.name),he(typeof g=="boolean",e,"internal-error"),he(typeof C=="boolean",e,"internal-error"),qr(i,e.name),qr(o,e.name),qr(l,e.name),qr(u,e.name),qr(c,e.name),qr(f,e.name);const I=new Wn({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:O,createdAt:c,lastLoginAt:f});return R&&Array.isArray(R)&&(I.providerData=R.map(E=>({...E}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new zi;s.updateFromServerResponse(n);const i=new Wn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Uu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?dE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zi;l.updateFromIdToken(r);const u=new Wn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new Map;function Ar(t){Mr(t instanceof Function,"Expected a class definition");let e=__.get(t);return e?(Mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,__.set(t,e),e)}/**
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
 */class fE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fE.type="NONE";const v_=fE;/**
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
 */function Jl(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ju(this.auth,{idToken:e}).catch(()=>{});return n?Wn._fromGetAccountInfoResponse(this.auth,n,e):null}return Wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(Ar(v_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ar(v_);const o=Jl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await ju(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Wn._fromGetAccountInfoResponse(e,g,f)}else m=Wn._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Hi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Hi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vE(e))return"Blackberry";if(wE(e))return"Webos";if(mE(e))return"Safari";if((e.includes("chrome/")||gE(e))&&!e.includes("edge/"))return"Chrome";if(_E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pE(t=nn()){return/firefox\//i.test(t)}function mE(t=nn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gE(t=nn()){return/crios\//i.test(t)}function yE(t=nn()){return/iemobile/i.test(t)}function _E(t=nn()){return/android/i.test(t)}function vE(t=nn()){return/blackberry/i.test(t)}function wE(t=nn()){return/webos/i.test(t)}function Bp(t=nn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vP(t=nn()){var e;return Bp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function wP(){return wA()&&document.documentMode===10}function EE(t=nn()){return Bp(t)||_E(t)||wE(t)||vE(t)||/windows phone/i.test(t)||yE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t,e=[]){let n;switch(t){case"Browser":n=w_(nn());break;case"Worker":n=`${w_(nn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
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
 */class EP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function TP(t,e={}){return po(t,"GET","/v2/passwordPolicy",Fp(t,e))}/**
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
 */const IP=6;class SP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??IP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new E_(this),this.idTokenSubscription=new E_(this),this.beforeStateQueue=new EP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ju(this,{idToken:e}),r=await Wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(Ws(this));const n=e?Rt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(Ws(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(Ws(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TP(this),n=new SP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _P(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&tP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ec(t){return Rt(t)}class E_{constructor(e){this.auth=e,this.observer=null,this.addObserver=CA(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AP(t){zp=t}function kP(t){return zp.loadJS(t)}function CP(){return zp.gapiScript}function RP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t,e){const n=oc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zs(i,e??{}))return s;gr(s,"already-initialized")}return n.initialize({options:e})}function NP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PP(t,e,n){const r=Ec(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=IE(e),{host:o,port:l}=DP(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(Zs(c,r.config.emulator)&&Zs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Cs(o)?(zf(`${i}//${o}${u}`),Hf("Auth",!0)):OP()}function IE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DP(t){const e=IE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:T_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:T_(o)}}}function T_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e){return uP(t,"POST","/v1/accounts:signInWithIdp",Fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="http://localhost";class ii extends SE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ii(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qi(e,n)}buildRequest(){const e={requestUri:VP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ja(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ga extends Hp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Ga{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Ga{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Ga{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zr.credential(n,r)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wn._fromIdTokenResponse(e,r,s),o=I_(r);return new so({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=I_(r);return new so({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function I_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends yr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fu(e,n,r,s)}}function xE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(t,i,e,r):i})}async function MP(t,e,n=!1){const r=await Na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return so._forOperation(t,"link",r)}/**
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
 */async function LP(t,e,n=!1){const{auth:r}=t;if(Dn(r.app))return Promise.reject(Ws(r));const s="reauthenticate";try{const i=await Na(t,xE(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=$p(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),so._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e,n=!1){if(Dn(t.app))return Promise.reject(Ws(t));const r="signIn",s=await xE(t,r,e),i=await so._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function UP(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function FP(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function $P(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function BP(t){return Rt(t).signOut()}const $u="__sak";/**
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
 */class AE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=1e3,HP=10;class kE extends AE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=EE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kE.type="LOCAL";const qP=kE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE extends AE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CE.type="SESSION";const RE=CE;/**
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
 */function GP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await GP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=qp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(){return window}function KP(t){pr().location.href=t}/**
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
 */function bE(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function QP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function YP(){return bE()?self:null}/**
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
 */const NE="firebaseLocalStorageDb",XP=1,Bu="firebaseLocalStorage",PE="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ic(t,e){return t.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function ZP(){const t=indexedDB.deleteDatabase(NE);return new Wa(t).toPromise()}function Gd(){const t=indexedDB.open(NE,XP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bu,{keyPath:PE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bu)?e(r):(r.close(),await ZP(),e(await Gd()))})})}async function S_(t,e,n){const r=Ic(t,!0).put({[PE]:e,value:n});return new Wa(r).toPromise()}async function e4(t,e){const n=Ic(t,!1).get(e),r=await new Wa(n).toPromise();return r===void 0?null:r.value}function x_(t,e){const n=Ic(t,!0).delete(e);return new Wa(n).toPromise()}const t4=800,n4=3;class DE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>n4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tc._getInstance(YP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await QP(),!this.activeServiceWorker)return;this.sender=new WP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gd();return await S_(e,$u,"1"),await x_(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>S_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>e4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>x_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ic(s,!1).getAll();return new Wa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DE.type="LOCAL";const r4=DE;new qa(3e4,6e4);/**
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
 */function OE(t,e){return e?Ar(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gp extends SE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function s4(t){return jP(t.auth,new Gp(t),t.bypassAuthState)}function i4(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),LP(n,new Gp(t),t.bypassAuthState)}async function o4(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),MP(n,new Gp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s4;case"linkViaPopup":case"linkViaRedirect":return o4;case"reauthViaPopup":case"reauthViaRedirect":return i4;default:gr(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=new qa(2e3,1e4);async function l4(t,e,n){if(Dn(t.app))return Promise.reject(Yn(t,"operation-not-supported-in-this-environment"));const r=Ec(t);nP(t,e,Hp);const s=OE(r,n);return new zs(r,"signInViaPopup",e,s).executeNotNull()}class zs extends VE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,a4.get())};e()}}zs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4="pendingRedirect",Yl=new Map;class c4 extends VE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yl.get(this.auth._key());if(!e){try{const r=await h4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yl.set(this.auth._key(),e)}return this.bypassAuthState||Yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function h4(t,e){const n=p4(e),r=f4(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function d4(t,e){Yl.set(t._key(),e)}function f4(t){return Ar(t._redirectPersistence)}function p4(t){return Jl(u4,t.config.apiKey,t.name)}async function m4(t,e,n=!1){if(Dn(t.app))return Promise.reject(Ws(t));const r=Ec(t),s=OE(r,e),o=await new c4(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=10*60*1e3;class y4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ME(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g4&&this.cachedEventUids.clear(),this.cachedEventUids.has(A_(e))}saveEventToCache(e){this.cachedEventUids.add(A_(e)),this.lastProcessedEventTime=Date.now()}}function A_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ME({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ME(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v4(t,e={}){return po(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E4=/^https?/;async function T4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await v4(t);for(const n of e)try{if(I4(n))return}catch{}gr(t,"unauthorized-domain")}function I4(t){const e=Hd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!E4.test(n))return!1;if(w4.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const S4=new qa(3e4,6e4);function k_(){const t=pr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x4(t){return new Promise((e,n)=>{var s,i,o;function r(){k_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{k_(),n(Yn(t,"network-request-failed"))},timeout:S4.get()})}if((i=(s=pr().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=pr().gapi)!=null&&o.load)r();else{const l=RP("iframefcb");return pr()[l]=()=>{gapi.load?r():n(Yn(t,"network-request-failed"))},kP(`${CP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Xl=null,e})}let Xl=null;function A4(t){return Xl=Xl||x4(t),Xl}/**
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
 */const k4=new qa(5e3,15e3),C4="__/auth/iframe",R4="emulator/auth/iframe",b4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P4(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Up(e,R4):`https://${t.config.authDomain}/${C4}`,r={apiKey:e.apiKey,appName:t.name,v:li},s=N4.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ja(r).slice(1)}`}async function D4(t){const e=await A4(t),n=pr().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:P4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b4,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Yn(t,"network-request-failed"),l=pr().setTimeout(()=>{i(o)},k4.get());function u(){pr().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const O4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V4=500,M4=600,L4="_blank",j4="http://localhost";class C_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U4(t,e,n,r=V4,s=M4){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...O4,width:r.toString(),height:s.toString(),top:i,left:o},c=nn().toLowerCase();n&&(l=gE(c)?L4:n),pE(c)&&(e=e||j4,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[C,R])=>`${g}${C}=${R},`,"");if(vP(c)&&l!=="_self")return F4(e||"",l),new C_(null);const m=window.open(e||"",l,f);he(m,t,"popup-blocked");try{m.focus()}catch{}return new C_(m)}function F4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $4="__/auth/handler",B4="emulator/auth/handler",z4=encodeURIComponent("fac");async function R_(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:s};if(e instanceof Hp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ga){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${z4}=${encodeURIComponent(u)}`:"";return`${H4(t)}?${ja(l).slice(1)}${c}`}function H4({config:t}){return t.emulator?Up(t,B4):`https://${t.authDomain}/${$4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="webStorageSupport";class q4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RE,this._completeRedirectFn=m4,this._overrideRedirectResult=d4}async _openPopup(e,n,r,s){var o;Mr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await R_(e,n,r,Hd(),s);return U4(e,i,qp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await R_(e,n,r,Hd(),s);return KP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await D4(e),r=new y4(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Th,{type:Th},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Th];i!==void 0&&n(!!i),gr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=T4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EE()||mE()||Bp()}}const G4=q4;var b_="@firebase/auth",N_="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q4(t){ei(new _s("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TE(t)},c=new xP(r,s,i,u);return NP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ei(new _s("auth-internal",e=>{const n=Ec(e.getProvider("auth").getImmediate());return(r=>new W4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(b_,N_,K4(t)),cr(b_,N_,"esm2020")}/**
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
 */const J4=5*60,Y4=o1("authIdTokenMaxAge")||J4;let P_=null;const X4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Y4)return;const s=n==null?void 0:n.token;P_!==s&&(P_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Z4(t=Wf()){const e=oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bP(t,{popupRedirectResolver:G4,persistence:[r4,qP,RE]}),r=o1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=X4(i.toString());FP(n,o,()=>o(n.currentUser)),UP(n,l=>o(l))}}const s=r1("auth");return s&&PP(n,`http://${s}`),n}function eD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}AP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",eD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q4("Browser");const Ih=Z4(Vp),tD=new Tr;function nD(t){return t?t==="ivanho.wz@gmail.com"?!0:t.endsWith("@google.com"):!1}const D_={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},O_={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},rD={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},sD={color:"#f87171",marginTop:16,fontSize:14},V_={color:"#737373",fontSize:13,marginTop:8};function iD({children:t}){const[e,n]=ae.useState(null),[r,s]=ae.useState(!0),[i,o]=ae.useState(null),[l,u]=ae.useState(!1);ae.useEffect(()=>$P(Ih,f=>{f&&!nD(f.email)?(BP(Ih),n(null),o(`${f.email} is not authorized.`)):(n(f),o(null)),s(!1)}),[]);const c=async()=>{u(!0),o(null);try{await l4(Ih,tD)}catch(f){o((f==null?void 0:f.message)||"Sign-in failed.")}finally{u(!1)}};return r?p.jsx("div",{style:D_,children:p.jsx("div",{style:O_,children:p.jsx("p",{style:V_,children:"Loading…"})})}):e?t:p.jsx("div",{style:D_,children:p.jsxs("div",{style:O_,children:[p.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Brain"}),p.jsx("p",{style:V_,children:"Sign in to continue"}),p.jsx("button",{style:rD,onClick:c,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&p.jsx("p",{style:sD,children:i})]})})}Sh.createRoot(document.getElementById("root")).render(p.jsx(gi.StrictMode,{children:p.jsx(iD,{children:p.jsx(ZN,{})})}));
//# sourceMappingURL=index-DJL8Qa_O.js.map
