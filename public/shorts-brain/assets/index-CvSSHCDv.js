(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function eT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M_={exports:{}},Qu={},L_={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),tT=Symbol.for("react.portal"),nT=Symbol.for("react.fragment"),rT=Symbol.for("react.strict_mode"),sT=Symbol.for("react.profiler"),iT=Symbol.for("react.provider"),oT=Symbol.for("react.context"),aT=Symbol.for("react.forward_ref"),lT=Symbol.for("react.suspense"),uT=Symbol.for("react.memo"),cT=Symbol.for("react.lazy"),bm=Symbol.iterator;function hT(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var j_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U_=Object.assign,F_={};function co(t,e,n){this.props=t,this.context=e,this.refs=F_,this.updater=n||j_}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $_(){}$_.prototype=co.prototype;function Yd(t,e,n){this.props=t,this.context=e,this.refs=F_,this.updater=n||j_}var Xd=Yd.prototype=new $_;Xd.constructor=Yd;U_(Xd,co.prototype);Xd.isPureReactComponent=!0;var Nm=Array.isArray,z_=Object.prototype.hasOwnProperty,Zd={current:null},B_={key:!0,ref:!0,__self:!0,__source:!0};function H_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)z_.call(e,r)&&!B_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ma,type:t,key:i,ref:o,props:s,_owner:Zd.current}}function dT(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function fT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fT(""+t.key):e.toString(36)}function Ml(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case tT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Fc(o,0):r,Nm(s)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),Ml(s,e,n,"",function(c){return c})):s!=null&&(ef(s)&&(s=dT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Pm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Nm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Fc(i,l);o+=Ml(i,e,n,u,s)}else if(u=hT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Fc(i,l++),o+=Ml(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ul(t,e,n){if(t==null)return t;var r=[],s=0;return Ml(t,r,"","",function(i){return e.call(n,i,s++)}),r}function pT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},Ll={transition:null},mT={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:Zd};function q_(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:ul,forEach:function(t,e,n){ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ul(t,function(){e++}),e},toArray:function(t){return ul(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};xe.Component=co;xe.Fragment=nT;xe.Profiler=sT;xe.PureComponent=Yd;xe.StrictMode=rT;xe.Suspense=lT;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mT;xe.act=q_;xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=U_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Zd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)z_.call(e,u)&&!B_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ma,type:t.type,key:s,ref:i,props:r,_owner:o}};xe.createContext=function(t){return t={$$typeof:oT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iT,_context:t},t.Consumer=t};xe.createElement=H_;xe.createFactory=function(t){var e=H_.bind(null,t);return e.type=t,e};xe.createRef=function(){return{current:null}};xe.forwardRef=function(t){return{$$typeof:aT,render:t}};xe.isValidElement=ef;xe.lazy=function(t){return{$$typeof:cT,_payload:{_status:-1,_result:t},_init:pT}};xe.memo=function(t,e){return{$$typeof:uT,type:t,compare:e===void 0?null:e}};xe.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};xe.unstable_act=q_;xe.useCallback=function(t,e){return hn.current.useCallback(t,e)};xe.useContext=function(t){return hn.current.useContext(t)};xe.useDebugValue=function(){};xe.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};xe.useEffect=function(t,e){return hn.current.useEffect(t,e)};xe.useId=function(){return hn.current.useId()};xe.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};xe.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};xe.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};xe.useMemo=function(t,e){return hn.current.useMemo(t,e)};xe.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};xe.useRef=function(t){return hn.current.useRef(t)};xe.useState=function(t){return hn.current.useState(t)};xe.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};xe.useTransition=function(){return hn.current.useTransition()};xe.version="18.3.1";L_.exports=xe;var ae=L_.exports;const Rr=eT(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gT=ae,yT=Symbol.for("react.element"),_T=Symbol.for("react.fragment"),vT=Object.prototype.hasOwnProperty,wT=gT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ET={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vT.call(e,r)&&!ET.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:yT,type:t,key:i,ref:o,props:s,_owner:wT.current}}Qu.Fragment=_T;Qu.jsx=G_;Qu.jsxs=G_;M_.exports=Qu;var m=M_.exports,kh={},W_={exports:{}},bn={},K_={exports:{}},Q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Z){var te=U.length;U.push(Z);e:for(;0<te;){var G=te-1>>>1,Ne=U[G];if(0<s(Ne,Z))U[G]=Z,U[te]=Ne,te=G;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Z=U[0],te=U.pop();if(te!==Z){U[0]=te;e:for(var G=0,Ne=U.length,ht=Ne>>>1;G<ht;){var Ge=2*(G+1)-1,Dt=U[Ge],Xe=Ge+1,St=U[Xe];if(0>s(Dt,te))Xe<Ne&&0>s(St,Dt)?(U[G]=St,U[Xe]=te,G=Xe):(U[G]=Dt,U[Ge]=te,G=Ge);else if(Xe<Ne&&0>s(St,te))U[G]=St,U[Xe]=te,G=Xe;else break e}}return Z}function s(U,Z){var te=U.sortIndex-Z.sortIndex;return te!==0?te:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,v=3,k=!1,b=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(U){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=U)r(c),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(c)}}function P(U){if(N=!1,A(U),!b)if(n(u)!==null)b=!0,Ce(j);else{var Z=n(c);Z!==null&&Me(P,Z.startTime-U)}}function j(U,Z){b=!1,N&&(N=!1,T(_),_=-1),k=!0;var te=v;try{for(A(Z),p=n(u);p!==null&&(!(p.expirationTime>Z)||U&&!x());){var G=p.callback;if(typeof G=="function"){p.callback=null,v=p.priorityLevel;var Ne=G(p.expirationTime<=Z);Z=t.unstable_now(),typeof Ne=="function"?p.callback=Ne:p===n(u)&&r(u),A(Z)}else r(u);p=n(u)}if(p!==null)var ht=!0;else{var Ge=n(c);Ge!==null&&Me(P,Ge.startTime-Z),ht=!1}return ht}finally{p=null,v=te,k=!1}}var F=!1,E=null,_=-1,I=5,g=-1;function x(){return!(t.unstable_now()-g<I)}function C(){if(E!==null){var U=t.unstable_now();g=U;var Z=!0;try{Z=E(!0,U)}finally{Z?w():(F=!1,E=null)}}else F=!1}var w;if(typeof S=="function")w=function(){S(C)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ne=pe.port2;pe.port1.onmessage=C,w=function(){ne.postMessage(null)}}else w=function(){O(C,0)};function Ce(U){E=U,F||(F=!0,w())}function Me(U,Z){_=O(function(){U(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){b||k||(b=!0,Ce(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var te=v;v=Z;try{return U()}finally{v=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var te=v;v=U;try{return Z()}finally{v=te}},t.unstable_scheduleCallback=function(U,Z,te){var G=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?G+te:G):te=G,U){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=te+Ne,U={id:f++,callback:Z,priorityLevel:U,startTime:te,expirationTime:Ne,sortIndex:-1},te>G?(U.sortIndex=te,e(c,U),n(u)===null&&U===n(c)&&(N?(T(_),_=-1):N=!0,Me(P,te-G))):(U.sortIndex=Ne,e(u,U),b||k||(b=!0,Ce(j))),U},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(U){var Z=v;return function(){var te=v;v=Z;try{return U.apply(this,arguments)}finally{v=te}}}})(Q_);K_.exports=Q_;var TT=K_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IT=ae,Rn=TT;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J_=new Set,la={};function di(t,e){Xi(t,e),Xi(t+"Capture",e)}function Xi(t,e){for(la[t]=e,t=0;t<e.length;t++)J_.add(e[t])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ch=Object.prototype.hasOwnProperty,ST=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Om={};function xT(t){return Ch.call(Om,t)?!0:Ch.call(Dm,t)?!1:ST.test(t)?Om[t]=!0:(Dm[t]=!0,!1)}function AT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kT(t,e,n,r){if(e===null||typeof e>"u"||AT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);Kt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);Kt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);Kt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,r){var s=Kt.hasOwnProperty(e)?Kt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kT(e,n,s,r)&&(n=null),r||s===null?xT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gr=IT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),ki=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),bh=Symbol.for("react.suspense"),Nh=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),es=Symbol.for("react.lazy"),Z_=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,$c;function Fo(t){if($c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$c=e&&e[1]||""}return`
`+$c+t}var zc=!1;function Bc(t,e){if(!t||zc)return"";zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function CT(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=Bc(t.type,!1),t;case 11:return t=Bc(t.type.render,!1),t;case 1:return t=Bc(t.type,!0),t;default:return""}}function Ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case ki:return"Portal";case Rh:return"Profiler";case sf:return"StrictMode";case bh:return"Suspense";case Nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X_:return(t.displayName||"Context")+".Consumer";case Y_:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:Ph(t.type)||"Memo";case es:e=t._payload,t=t._init;try{return Ph(t(e))}catch{}}return null}function RT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ph(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ss(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bT(t){var e=e0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=bT(t))}function t0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dh(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ss(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n0(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Oh(t,e){n0(t,e);var n=Ss(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vh(t,e.type,Ss(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vh(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function Ui(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ss(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Mh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if($o(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ss(n)}}function r0(t,e){var n=Ss(e.value),r=Ss(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var dl,i0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NT=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){NT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function o0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function a0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=o0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var PT=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jh(t,e){if(e){if(PT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fh=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $h=null,Fi=null,$i=null;function Fm(t){if(t=Ua(t)){if(typeof $h!="function")throw Error($(280));var e=t.stateNode;e&&(e=ec(e),$h(t.stateNode,t.type,e))}}function l0(t){Fi?$i?$i.push(t):$i=[t]:Fi=t}function u0(){if(Fi){var t=Fi,e=$i;if($i=Fi=null,Fm(t),e)for(t=0;t<e.length;t++)Fm(e[t])}}function c0(t,e){return t(e)}function h0(){}var Hc=!1;function d0(t,e,n){if(Hc)return t(e,n);Hc=!0;try{return c0(t,e,n)}finally{Hc=!1,(Fi!==null||$i!==null)&&(h0(),u0())}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var r=ec(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var zh=!1;if(jr)try{var No={};Object.defineProperty(No,"passive",{get:function(){zh=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{zh=!1}function DT(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ko=!1,ou=null,au=!1,Bh=null,OT={onError:function(t){Ko=!0,ou=t}};function VT(t,e,n,r,s,i,o,l,u){Ko=!1,ou=null,DT.apply(OT,arguments)}function MT(t,e,n,r,s,i,o,l,u){if(VT.apply(this,arguments),Ko){if(Ko){var c=ou;Ko=!1,ou=null}else throw Error($(198));au||(au=!0,Bh=c)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $m(t){if(fi(t)!==t)throw Error($(188))}function LT(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return $m(s),t;if(i===r)return $m(s),e;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function p0(t){return t=LT(t),t!==null?m0(t):null}function m0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m0(t);if(e!==null)return e;t=t.sibling}return null}var g0=Rn.unstable_scheduleCallback,zm=Rn.unstable_cancelCallback,jT=Rn.unstable_shouldYield,UT=Rn.unstable_requestPaint,mt=Rn.unstable_now,FT=Rn.unstable_getCurrentPriorityLevel,uf=Rn.unstable_ImmediatePriority,y0=Rn.unstable_UserBlockingPriority,lu=Rn.unstable_NormalPriority,$T=Rn.unstable_LowPriority,_0=Rn.unstable_IdlePriority,Ju=null,pr=null;function zT(t){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(Ju,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:qT,BT=Math.log,HT=Math.LN2;function qT(t){return t>>>=0,t===0?32:31-(BT(t)/HT|0)|0}var fl=64,pl=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=zo(l):(i&=o,i!==0&&(r=zo(i)))}else o=n&~s,o!==0?r=zo(o):i!==0&&(r=zo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xn(e),s=1<<n,r|=t[n],e&=~s;return r}function GT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Xn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=GT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v0(){var t=fl;return fl<<=1,!(fl&4194240)&&(fl=64),t}function qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function KT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Xn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Le=0;function w0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,hf,T0,I0,S0,qh=!1,ml=[],hs=null,ds=null,fs=null,ha=new Map,da=new Map,ns=[],QT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(t,e){switch(t){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function Po(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ua(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function JT(t,e,n,r,s){switch(e){case"focusin":return hs=Po(hs,t,e,n,r,s),!0;case"dragenter":return ds=Po(ds,t,e,n,r,s),!0;case"mouseover":return fs=Po(fs,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ha.set(i,Po(ha.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,da.set(i,Po(da.get(i)||null,t,e,n,r,s)),!0}return!1}function x0(t){var e=Gs(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=f0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){T0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fh=r,n.target.dispatchEvent(r),Fh=null}else return e=Ua(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){jl(t)&&n.delete(e)}function YT(){qh=!1,hs!==null&&jl(hs)&&(hs=null),ds!==null&&jl(ds)&&(ds=null),fs!==null&&jl(fs)&&(fs=null),ha.forEach(Hm),da.forEach(Hm)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,qh||(qh=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,YT)))}function fa(t){function e(s){return Do(s,t)}if(0<ml.length){Do(ml[0],t);for(var n=1;n<ml.length;n++){var r=ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hs!==null&&Do(hs,t),ds!==null&&Do(ds,t),fs!==null&&Do(fs,t),ha.forEach(e),da.forEach(e),n=0;n<ns.length;n++)r=ns[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ns.length&&(n=ns[0],n.blockedOn===null);)x0(n),n.blockedOn===null&&ns.shift()}var zi=Gr.ReactCurrentBatchConfig,cu=!0;function XT(t,e,n,r){var s=Le,i=zi.transition;zi.transition=null;try{Le=1,df(t,e,n,r)}finally{Le=s,zi.transition=i}}function ZT(t,e,n,r){var s=Le,i=zi.transition;zi.transition=null;try{Le=4,df(t,e,n,r)}finally{Le=s,zi.transition=i}}function df(t,e,n,r){if(cu){var s=Gh(t,e,n,r);if(s===null)th(t,e,r,hu,n),Bm(t,r);else if(JT(s,t,e,n,r))r.stopPropagation();else if(Bm(t,r),e&4&&-1<QT.indexOf(t)){for(;s!==null;){var i=Ua(s);if(i!==null&&E0(i),i=Gh(t,e,n,r),i===null&&th(t,e,r,hu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else th(t,e,r,null,n)}}var hu=null;function Gh(t,e,n,r){if(hu=null,t=lf(r),t=Gs(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hu=t,null}function A0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FT()){case uf:return 1;case y0:return 4;case lu:case $T:return 16;case _0:return 536870912;default:return 16}default:return 16}}var us=null,ff=null,Ul=null;function k0(){if(Ul)return Ul;var t,e=ff,n=e.length,r,s="value"in us?us.value:us.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ul=s.slice(t,1<r?1-r:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function qm(){return!1}function Nn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?gl:qm,this.isPropagationStopped=qm,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=Nn(ho),ja=at({},ho,{view:0,detail:0}),eI=Nn(ja),Gc,Wc,Oo,Yu=at({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oo&&(Oo&&t.type==="mousemove"?(Gc=t.screenX-Oo.screenX,Wc=t.screenY-Oo.screenY):Wc=Gc=0,Oo=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Gm=Nn(Yu),tI=at({},Yu,{dataTransfer:0}),nI=Nn(tI),rI=at({},ja,{relatedTarget:0}),Kc=Nn(rI),sI=at({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),iI=Nn(sI),oI=at({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aI=Nn(oI),lI=at({},ho,{data:0}),Wm=Nn(lI),uI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hI[t])?!!e[t]:!1}function mf(){return dI}var fI=at({},ja,{key:function(t){if(t.key){var e=uI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pI=Nn(fI),mI=at({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Nn(mI),gI=at({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),yI=Nn(gI),_I=at({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),vI=Nn(_I),wI=at({},Yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EI=Nn(wI),TI=[9,13,27,32],gf=jr&&"CompositionEvent"in window,Qo=null;jr&&"documentMode"in document&&(Qo=document.documentMode);var II=jr&&"TextEvent"in window&&!Qo,C0=jr&&(!gf||Qo&&8<Qo&&11>=Qo),Qm=" ",Jm=!1;function R0(t,e){switch(t){case"keyup":return TI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ri=!1;function SI(t,e){switch(t){case"compositionend":return b0(e);case"keypress":return e.which!==32?null:(Jm=!0,Qm);case"textInput":return t=e.data,t===Qm&&Jm?null:t;default:return null}}function xI(t,e){if(Ri)return t==="compositionend"||!gf&&R0(t,e)?(t=k0(),Ul=ff=us=null,Ri=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C0&&e.locale!=="ko"?null:e.data;default:return null}}var AI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AI[t.type]:e==="textarea"}function N0(t,e,n,r){l0(r),e=du(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Jo=null,pa=null;function kI(t){z0(t,0)}function Xu(t){var e=Pi(t);if(t0(e))return t}function CI(t,e){if(t==="change")return e}var P0=!1;if(jr){var Qc;if(jr){var Jc="oninput"in document;if(!Jc){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),Jc=typeof Xm.oninput=="function"}Qc=Jc}else Qc=!1;P0=Qc&&(!document.documentMode||9<document.documentMode)}function Zm(){Jo&&(Jo.detachEvent("onpropertychange",D0),pa=Jo=null)}function D0(t){if(t.propertyName==="value"&&Xu(pa)){var e=[];N0(e,pa,t,lf(t)),d0(kI,e)}}function RI(t,e,n){t==="focusin"?(Zm(),Jo=e,pa=n,Jo.attachEvent("onpropertychange",D0)):t==="focusout"&&Zm()}function bI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(pa)}function NI(t,e){if(t==="click")return Xu(e)}function PI(t,e){if(t==="input"||t==="change")return Xu(e)}function DI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:DI;function ma(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ch.call(e,s)||!nr(t[s],e[s]))return!1}return!0}function eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tg(t,e){var n=eg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eg(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V0(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OI(t){var e=V0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(r!==null&&yf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=tg(n,i);var o=tg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VI=jr&&"documentMode"in document&&11>=document.documentMode,bi=null,Wh=null,Yo=null,Kh=!1;function ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kh||bi==null||bi!==iu(r)||(r=bi,"selectionStart"in r&&yf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yo&&ma(Yo,r)||(Yo=r,r=du(Wh,"onSelect"),0<r.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ni={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Yc={},M0={};jr&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function Zu(t){if(Yc[t])return Yc[t];if(!Ni[t])return t;var e=Ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M0)return Yc[t]=e[n];return t}var L0=Zu("animationend"),j0=Zu("animationiteration"),U0=Zu("animationstart"),F0=Zu("transitionend"),$0=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Os(t,e){$0.set(t,e),di(e,[t])}for(var Xc=0;Xc<rg.length;Xc++){var Zc=rg[Xc],MI=Zc.toLowerCase(),LI=Zc[0].toUpperCase()+Zc.slice(1);Os(MI,"on"+LI)}Os(L0,"onAnimationEnd");Os(j0,"onAnimationIteration");Os(U0,"onAnimationStart");Os("dblclick","onDoubleClick");Os("focusin","onFocus");Os("focusout","onBlur");Os(F0,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MT(r,e,void 0,t),t.currentTarget=null}function z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;sg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;sg(s,l,c),i=u}}}if(au)throw t=Bh,au=!1,Bh=null,t}function Qe(t,e){var n=e[Zh];n===void 0&&(n=e[Zh]=new Set);var r=t+"__bubble";n.has(r)||(B0(e,t,2,!1),n.add(r))}function eh(t,e,n){var r=0;e&&(r|=4),B0(n,t,r,e)}var _l="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[_l]){t[_l]=!0,J_.forEach(function(n){n!=="selectionchange"&&(jI.has(n)||eh(n,!1,t),eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_l]||(e[_l]=!0,eh("selectionchange",!1,e))}}function B0(t,e,n,r){switch(A0(e)){case 1:var s=XT;break;case 4:s=ZT;break;default:s=df}n=s.bind(null,e,n,t),s=void 0,!zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function th(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Gs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}d0(function(){var c=i,f=lf(n),p=[];e:{var v=$0.get(t);if(v!==void 0){var k=pf,b=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":k=pI;break;case"focusin":b="focus",k=Kc;break;case"focusout":b="blur",k=Kc;break;case"beforeblur":case"afterblur":k=Kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=nI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=yI;break;case L0:case j0:case U0:k=iI;break;case F0:k=vI;break;case"scroll":k=eI;break;case"wheel":k=EI;break;case"copy":case"cut":case"paste":k=aI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Km}var N=(e&4)!==0,O=!N&&t==="scroll",T=N?v!==null?v+"Capture":null:v;N=[];for(var S=c,A;S!==null;){A=S;var P=A.stateNode;if(A.tag===5&&P!==null&&(A=P,T!==null&&(P=ca(S,T),P!=null&&N.push(ya(S,P,A)))),O)break;S=S.return}0<N.length&&(v=new k(v,b,null,n,f),p.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==Fh&&(b=n.relatedTarget||n.fromElement)&&(Gs(b)||b[Ur]))break e;if((k||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,k?(b=n.relatedTarget||n.toElement,k=c,b=b?Gs(b):null,b!==null&&(O=fi(b),b!==O||b.tag!==5&&b.tag!==6)&&(b=null)):(k=null,b=c),k!==b)){if(N=Gm,P="onMouseLeave",T="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(N=Km,P="onPointerLeave",T="onPointerEnter",S="pointer"),O=k==null?v:Pi(k),A=b==null?v:Pi(b),v=new N(P,S+"leave",k,n,f),v.target=O,v.relatedTarget=A,P=null,Gs(f)===c&&(N=new N(T,S+"enter",b,n,f),N.target=A,N.relatedTarget=O,P=N),O=P,k&&b)t:{for(N=k,T=b,S=0,A=N;A;A=Ti(A))S++;for(A=0,P=T;P;P=Ti(P))A++;for(;0<S-A;)N=Ti(N),S--;for(;0<A-S;)T=Ti(T),A--;for(;S--;){if(N===T||T!==null&&N===T.alternate)break t;N=Ti(N),T=Ti(T)}N=null}else N=null;k!==null&&ig(p,v,k,N,!1),b!==null&&O!==null&&ig(p,O,b,N,!0)}}e:{if(v=c?Pi(c):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var j=CI;else if(Ym(v))if(P0)j=PI;else{j=bI;var F=RI}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(j=NI);if(j&&(j=j(t,c))){N0(p,j,n,f);break e}F&&F(t,v,c),t==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&Vh(v,"number",v.value)}switch(F=c?Pi(c):window,t){case"focusin":(Ym(F)||F.contentEditable==="true")&&(bi=F,Wh=c,Yo=null);break;case"focusout":Yo=Wh=bi=null;break;case"mousedown":Kh=!0;break;case"contextmenu":case"mouseup":case"dragend":Kh=!1,ng(p,n,f);break;case"selectionchange":if(VI)break;case"keydown":case"keyup":ng(p,n,f)}var E;if(gf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ri?R0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(C0&&n.locale!=="ko"&&(Ri||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ri&&(E=k0()):(us=f,ff="value"in us?us.value:us.textContent,Ri=!0)),F=du(c,_),0<F.length&&(_=new Wm(_,t,null,n,f),p.push({event:_,listeners:F}),E?_.data=E:(E=b0(n),E!==null&&(_.data=E)))),(E=II?SI(t,n):xI(t,n))&&(c=du(c,"onBeforeInput"),0<c.length&&(f=new Wm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=E))}z0(p,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function du(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ca(t,n),i!=null&&r.unshift(ya(t,i,s)),i=ca(t,e),i!=null&&r.push(ya(t,i,s))),t=t.return}return r}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ig(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=ca(n,i),u!=null&&o.unshift(ya(n,u,l))):s||(u=ca(n,i),u!=null&&o.push(ya(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UI=/\r\n?/g,FI=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(UI,`
`).replace(FI,"")}function vl(t,e,n){if(e=og(e),og(t)!==e&&n)throw Error($(425))}function fu(){}var Qh=null,Jh=null;function Yh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,$I=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,zI=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(BI)}:Xh;function BI(t){setTimeout(function(){throw t})}function nh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),fa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);fa(e)}function ps(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),dr="__reactFiber$"+fo,_a="__reactProps$"+fo,Ur="__reactContainer$"+fo,Zh="__reactEvents$"+fo,HI="__reactListeners$"+fo,qI="__reactHandles$"+fo;function Gs(t){var e=t[dr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ur]||n[dr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lg(t);t!==null;){if(n=t[dr])return n;t=lg(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[dr]||t[Ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function ec(t){return t[_a]||null}var ed=[],Di=-1;function Vs(t){return{current:t}}function Ye(t){0>Di||(t.current=ed[Di],ed[Di]=null,Di--)}function qe(t,e){Di++,ed[Di]=t.current,t.current=e}var xs={},rn=Vs(xs),wn=Vs(!1),ti=xs;function Zi(t,e){var n=t.type.contextTypes;if(!n)return xs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function En(t){return t=t.childContextTypes,t!=null}function pu(){Ye(wn),Ye(rn)}function ug(t,e,n){if(rn.current!==xs)throw Error($(168));qe(rn,e),qe(wn,n)}function H0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error($(108,RT(t)||"Unknown",s));return at({},n,r)}function mu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,ti=rn.current,qe(rn,t),qe(wn,wn.current),!0}function cg(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=H0(t,e,ti),r.__reactInternalMemoizedMergedChildContext=t,Ye(wn),Ye(rn),qe(rn,t)):Ye(wn),qe(wn,n)}var Cr=null,tc=!1,rh=!1;function q0(t){Cr===null?Cr=[t]:Cr.push(t)}function GI(t){tc=!0,q0(t)}function Ms(){if(!rh&&Cr!==null){rh=!0;var t=0,e=Le;try{var n=Cr;for(Le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cr=null,tc=!1}catch(s){throw Cr!==null&&(Cr=Cr.slice(t+1)),g0(uf,Ms),s}finally{Le=e,rh=!1}}return null}var Oi=[],Vi=0,gu=null,yu=0,Vn=[],Mn=0,ni=null,Nr=1,Pr="";function Bs(t,e){Oi[Vi++]=yu,Oi[Vi++]=gu,gu=t,yu=e}function G0(t,e,n){Vn[Mn++]=Nr,Vn[Mn++]=Pr,Vn[Mn++]=ni,ni=t;var r=Nr;t=Pr;var s=32-Xn(r)-1;r&=~(1<<s),n+=1;var i=32-Xn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Nr=1<<32-Xn(e)+s|n<<s|r,Pr=i+t}else Nr=1<<i|n<<s|r,Pr=t}function _f(t){t.return!==null&&(Bs(t,1),G0(t,1,0))}function vf(t){for(;t===gu;)gu=Oi[--Vi],Oi[Vi]=null,yu=Oi[--Vi],Oi[Vi]=null;for(;t===ni;)ni=Vn[--Mn],Vn[Mn]=null,Pr=Vn[--Mn],Vn[Mn]=null,Nr=Vn[--Mn],Vn[Mn]=null}var Cn=null,kn=null,nt=!1,Qn=null;function W0(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,kn=ps(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ni!==null?{id:Nr,overflow:Pr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,kn=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(nt){var e=kn;if(e){var n=e;if(!hg(t,e)){if(td(t))throw Error($(418));e=ps(n.nextSibling);var r=Cn;e&&hg(t,e)?W0(r,n):(t.flags=t.flags&-4097|2,nt=!1,Cn=t)}}else{if(td(t))throw Error($(418));t.flags=t.flags&-4097|2,nt=!1,Cn=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function wl(t){if(t!==Cn)return!1;if(!nt)return dg(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yh(t.type,t.memoizedProps)),e&&(e=kn)){if(td(t))throw K0(),Error($(418));for(;e;)W0(t,e),e=ps(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kn=ps(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=Cn?ps(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=kn;t;)t=ps(t.nextSibling)}function eo(){kn=Cn=null,nt=!1}function wf(t){Qn===null?Qn=[t]:Qn.push(t)}var WI=Gr.ReactCurrentBatchConfig;function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function El(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fg(t){var e=t._init;return e(t._payload)}function Q0(t){function e(T,S){if(t){var A=T.deletions;A===null?(T.deletions=[S],T.flags|=16):A.push(S)}}function n(T,S){if(!t)return null;for(;S!==null;)e(T,S),S=S.sibling;return null}function r(T,S){for(T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function s(T,S){return T=_s(T,S),T.index=0,T.sibling=null,T}function i(T,S,A){return T.index=A,t?(A=T.alternate,A!==null?(A=A.index,A<S?(T.flags|=2,S):A):(T.flags|=2,S)):(T.flags|=1048576,S)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,S,A,P){return S===null||S.tag!==6?(S=ch(A,T.mode,P),S.return=T,S):(S=s(S,A),S.return=T,S)}function u(T,S,A,P){var j=A.type;return j===Ci?f(T,S,A.props.children,P,A.key):S!==null&&(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===es&&fg(j)===S.type)?(P=s(S,A.props),P.ref=Vo(T,S,A),P.return=T,P):(P=Wl(A.type,A.key,A.props,null,T.mode,P),P.ref=Vo(T,S,A),P.return=T,P)}function c(T,S,A,P){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=hh(A,T.mode,P),S.return=T,S):(S=s(S,A.children||[]),S.return=T,S)}function f(T,S,A,P,j){return S===null||S.tag!==7?(S=Xs(A,T.mode,P,j),S.return=T,S):(S=s(S,A),S.return=T,S)}function p(T,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return S=ch(""+S,T.mode,A),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case cl:return A=Wl(S.type,S.key,S.props,null,T.mode,A),A.ref=Vo(T,null,S),A.return=T,A;case ki:return S=hh(S,T.mode,A),S.return=T,S;case es:var P=S._init;return p(T,P(S._payload),A)}if($o(S)||bo(S))return S=Xs(S,T.mode,A,null),S.return=T,S;El(T,S)}return null}function v(T,S,A,P){var j=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(T,S,""+A,P);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case cl:return A.key===j?u(T,S,A,P):null;case ki:return A.key===j?c(T,S,A,P):null;case es:return j=A._init,v(T,S,j(A._payload),P)}if($o(A)||bo(A))return j!==null?null:f(T,S,A,P,null);El(T,A)}return null}function k(T,S,A,P,j){if(typeof P=="string"&&P!==""||typeof P=="number")return T=T.get(A)||null,l(S,T,""+P,j);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case cl:return T=T.get(P.key===null?A:P.key)||null,u(S,T,P,j);case ki:return T=T.get(P.key===null?A:P.key)||null,c(S,T,P,j);case es:var F=P._init;return k(T,S,A,F(P._payload),j)}if($o(P)||bo(P))return T=T.get(A)||null,f(S,T,P,j,null);El(S,P)}return null}function b(T,S,A,P){for(var j=null,F=null,E=S,_=S=0,I=null;E!==null&&_<A.length;_++){E.index>_?(I=E,E=null):I=E.sibling;var g=v(T,E,A[_],P);if(g===null){E===null&&(E=I);break}t&&E&&g.alternate===null&&e(T,E),S=i(g,S,_),F===null?j=g:F.sibling=g,F=g,E=I}if(_===A.length)return n(T,E),nt&&Bs(T,_),j;if(E===null){for(;_<A.length;_++)E=p(T,A[_],P),E!==null&&(S=i(E,S,_),F===null?j=E:F.sibling=E,F=E);return nt&&Bs(T,_),j}for(E=r(T,E);_<A.length;_++)I=k(E,T,_,A[_],P),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?_:I.key),S=i(I,S,_),F===null?j=I:F.sibling=I,F=I);return t&&E.forEach(function(x){return e(T,x)}),nt&&Bs(T,_),j}function N(T,S,A,P){var j=bo(A);if(typeof j!="function")throw Error($(150));if(A=j.call(A),A==null)throw Error($(151));for(var F=j=null,E=S,_=S=0,I=null,g=A.next();E!==null&&!g.done;_++,g=A.next()){E.index>_?(I=E,E=null):I=E.sibling;var x=v(T,E,g.value,P);if(x===null){E===null&&(E=I);break}t&&E&&x.alternate===null&&e(T,E),S=i(x,S,_),F===null?j=x:F.sibling=x,F=x,E=I}if(g.done)return n(T,E),nt&&Bs(T,_),j;if(E===null){for(;!g.done;_++,g=A.next())g=p(T,g.value,P),g!==null&&(S=i(g,S,_),F===null?j=g:F.sibling=g,F=g);return nt&&Bs(T,_),j}for(E=r(T,E);!g.done;_++,g=A.next())g=k(E,T,_,g.value,P),g!==null&&(t&&g.alternate!==null&&E.delete(g.key===null?_:g.key),S=i(g,S,_),F===null?j=g:F.sibling=g,F=g);return t&&E.forEach(function(C){return e(T,C)}),nt&&Bs(T,_),j}function O(T,S,A,P){if(typeof A=="object"&&A!==null&&A.type===Ci&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case cl:e:{for(var j=A.key,F=S;F!==null;){if(F.key===j){if(j=A.type,j===Ci){if(F.tag===7){n(T,F.sibling),S=s(F,A.props.children),S.return=T,T=S;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===es&&fg(j)===F.type){n(T,F.sibling),S=s(F,A.props),S.ref=Vo(T,F,A),S.return=T,T=S;break e}n(T,F);break}else e(T,F);F=F.sibling}A.type===Ci?(S=Xs(A.props.children,T.mode,P,A.key),S.return=T,T=S):(P=Wl(A.type,A.key,A.props,null,T.mode,P),P.ref=Vo(T,S,A),P.return=T,T=P)}return o(T);case ki:e:{for(F=A.key;S!==null;){if(S.key===F)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){n(T,S.sibling),S=s(S,A.children||[]),S.return=T,T=S;break e}else{n(T,S);break}else e(T,S);S=S.sibling}S=hh(A,T.mode,P),S.return=T,T=S}return o(T);case es:return F=A._init,O(T,S,F(A._payload),P)}if($o(A))return b(T,S,A,P);if(bo(A))return N(T,S,A,P);El(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,S!==null&&S.tag===6?(n(T,S.sibling),S=s(S,A),S.return=T,T=S):(n(T,S),S=ch(A,T.mode,P),S.return=T,T=S),o(T)):n(T,S)}return O}var to=Q0(!0),J0=Q0(!1),_u=Vs(null),vu=null,Mi=null,Ef=null;function Tf(){Ef=Mi=vu=null}function If(t){var e=_u.current;Ye(_u),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){vu=t,Ef=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},Mi===null){if(vu===null)throw Error($(308));Mi=t,vu.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return e}var Ws=null;function Sf(t){Ws===null?Ws=[t]:Ws.push(t)}function Y0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Sf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Fr(t,r)}function Fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ts=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ms(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Fr(t,n)}return s=r.interleaved,s===null?(e.next=e,Sf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Fr(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}function pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wu(t,e,n,r){var s=t.updateQueue;ts=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=c=u=null,l=i;do{var v=l.lane,k=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,N=l;switch(v=e,k=n,N.tag){case 1:if(b=N.payload,typeof b=="function"){p=b.call(k,p,v);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,v=typeof b=="function"?b.call(k,p,v):b,v==null)break e;p=at({},p,v);break e;case 2:ts=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=k,u=p):f=f.next=k,o|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);si|=o,t.lanes=o,t.memoizedState=p}}function mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error($(191,s));s.call(r)}}}var Fa={},mr=Vs(Fa),va=Vs(Fa),wa=Vs(Fa);function Ks(t){if(t===Fa)throw Error($(174));return t}function Af(t,e){switch(qe(wa,e),qe(va,t),qe(mr,Fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lh(e,t)}Ye(mr),qe(mr,e)}function no(){Ye(mr),Ye(va),Ye(wa)}function Z0(t){Ks(wa.current);var e=Ks(mr.current),n=Lh(e,t.type);e!==n&&(qe(va,t),qe(mr,n))}function kf(t){va.current===t&&(Ye(mr),Ye(va))}var it=Vs(0);function Eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sh=[];function Cf(){for(var t=0;t<sh.length;t++)sh[t]._workInProgressVersionPrimary=null;sh.length=0}var zl=Gr.ReactCurrentDispatcher,ih=Gr.ReactCurrentBatchConfig,ri=0,ot=null,Ct=null,Lt=null,Tu=!1,Xo=!1,Ea=0,KI=0;function Yt(){throw Error($(321))}function Rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function bf(t,e,n,r,s,i){if(ri=i,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?XI:ZI,t=n(r,s),Xo){i=0;do{if(Xo=!1,Ea=0,25<=i)throw Error($(301));i+=1,Lt=Ct=null,e.updateQueue=null,zl.current=eS,t=n(r,s)}while(Xo)}if(zl.current=Iu,e=Ct!==null&&Ct.next!==null,ri=0,Lt=Ct=ot=null,Tu=!1,e)throw Error($(300));return t}function Nf(){var t=Ea!==0;return Ea=0,t}function cr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ot.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Hn(){if(Ct===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Lt===null?ot.memoizedState:Lt.next;if(e!==null)Lt=e,Ct=t;else{if(t===null)throw Error($(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Lt===null?ot.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Ta(t,e){return typeof e=="function"?e(t):e}function oh(t){var e=Hn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Ct,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((ri&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ot.lanes|=f,si|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,nr(r,e.memoizedState)||(vn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ot.lanes|=i,si|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ah(t){var e=Hn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);nr(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function ev(){}function tv(t,e){var n=ot,r=Hn(),s=e(),i=!nr(r.memoizedState,s);if(i&&(r.memoizedState=s,vn=!0),r=r.queue,Pf(sv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Ia(9,rv.bind(null,n,r,s,e),void 0,null),jt===null)throw Error($(349));ri&30||nv(n,e,s)}return s}function nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,r){e.value=n,e.getSnapshot=r,iv(e)&&ov(t)}function sv(t,e,n){return n(function(){iv(e)&&ov(t)})}function iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function ov(t){var e=Fr(t,1);e!==null&&Zn(e,t,1,-1)}function gg(t){var e=cr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=YI.bind(null,ot,t),[e.memoizedState,t]}function Ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function av(){return Hn().memoizedState}function Bl(t,e,n,r){var s=cr();ot.flags|=t,s.memoizedState=Ia(1|e,n,void 0,r===void 0?null:r)}function nc(t,e,n,r){var s=Hn();r=r===void 0?null:r;var i=void 0;if(Ct!==null){var o=Ct.memoizedState;if(i=o.destroy,r!==null&&Rf(r,o.deps)){s.memoizedState=Ia(e,n,i,r);return}}ot.flags|=t,s.memoizedState=Ia(1|e,n,i,r)}function yg(t,e){return Bl(8390656,8,t,e)}function Pf(t,e){return nc(2048,8,t,e)}function lv(t,e){return nc(4,2,t,e)}function uv(t,e){return nc(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,cv.bind(null,e,t),n)}function Df(){}function dv(t,e){var n=Hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fv(t,e){var n=Hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pv(t,e,n){return ri&21?(nr(n,e)||(n=v0(),ot.lanes|=n,si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function QI(t,e){var n=Le;Le=n!==0&&4>n?n:4,t(!0);var r=ih.transition;ih.transition={};try{t(!1),e()}finally{Le=n,ih.transition=r}}function mv(){return Hn().memoizedState}function JI(t,e,n){var r=ys(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))yv(e,n);else if(n=Y0(t,e,n,r),n!==null){var s=cn();Zn(n,t,r,s),_v(n,e,r)}}function YI(t,e,n){var r=ys(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))yv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,nr(l,o)){var u=e.interleaved;u===null?(s.next=s,Sf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Y0(t,e,s,r),n!==null&&(s=cn(),Zn(n,t,r,s),_v(n,e,r))}}function gv(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function yv(t,e){Xo=Tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}var Iu={readContext:Bn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},XI={readContext:Bn,useCallback:function(t,e){return cr().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:yg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=cr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JI.bind(null,ot,t),[r.memoizedState,t]},useRef:function(t){var e=cr();return t={current:t},e.memoizedState=t},useState:gg,useDebugValue:Df,useDeferredValue:function(t){return cr().memoizedState=t},useTransition:function(){var t=gg(!1),e=t[0];return t=QI.bind(null,t[1]),cr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ot,s=cr();if(nt){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),jt===null)throw Error($(349));ri&30||nv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,yg(sv.bind(null,r,i,t),[t]),r.flags|=2048,Ia(9,rv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=cr(),e=jt.identifierPrefix;if(nt){var n=Pr,r=Nr;n=(r&~(1<<32-Xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZI={readContext:Bn,useCallback:dv,useContext:Bn,useEffect:Pf,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:oh,useRef:av,useState:function(){return oh(Ta)},useDebugValue:Df,useDeferredValue:function(t){var e=Hn();return pv(e,Ct.memoizedState,t)},useTransition:function(){var t=oh(Ta)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},eS={readContext:Bn,useCallback:dv,useContext:Bn,useEffect:Pf,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:ah,useRef:av,useState:function(){return ah(Ta)},useDebugValue:Df,useDeferredValue:function(t){var e=Hn();return Ct===null?e.memoizedState=t:pv(e,Ct.memoizedState,t)},useTransition:function(){var t=ah(Ta)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rc={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=cn(),s=ys(t),i=Mr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ms(t,i,s),e!==null&&(Zn(e,t,s,r),$l(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=cn(),s=ys(t),i=Mr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ms(t,i,s),e!==null&&(Zn(e,t,s,r),$l(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),r=ys(t),s=Mr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ms(t,s,r),e!==null&&(Zn(e,t,r,n),$l(e,t,r))}};function _g(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,r)||!ma(s,i):!0}function vv(t,e,n){var r=!1,s=xs,i=e.contextType;return typeof i=="object"&&i!==null?i=Bn(i):(s=En(e)?ti:rn.current,r=e.contextTypes,i=(r=r!=null)?Zi(t,s):xs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function vg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rc.enqueueReplaceState(e,e.state,null)}function id(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},xf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Bn(i):(i=En(e)?ti:rn.current,s.context=Zi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(sd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&rc.enqueueReplaceState(s,s.state,null),wu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",r=e;do n+=CT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function lh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=Mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xu||(xu=!0,gd=r),od(t,e)},n}function Ev(t,e,n){n=Mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){od(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof r!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=mS.bind(null,t,e,n),e.then(t,t))}function Eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mr(-1,1),e.tag=2,ms(n,e,1))),n.lanes|=1),t)}var nS=Gr.ReactCurrentOwner,vn=!1;function ln(t,e,n,r){e.child=t===null?J0(e,null,n,r):to(e,t.child,n,r)}function Ig(t,e,n,r,s){n=n.render;var i=e.ref;return Bi(e,s),r=bf(t,e,n,r,i,s),n=Nf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,$r(t,e,s)):(nt&&n&&_f(e),e.flags|=1,ln(t,e,r,s),e.child)}function Sg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!$f(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Tv(t,e,i,r,s)):(t=Wl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,r)&&t.ref===e.ref)return $r(t,e,s)}return e.flags|=1,t=_s(i,r),t.ref=e.ref,t.return=e,e.child=t}function Tv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ma(i,r)&&t.ref===e.ref)if(vn=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,$r(t,e,s)}return ad(t,e,n,r,s)}function Iv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(ji,xn),xn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,qe(ji,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,qe(ji,xn),xn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,qe(ji,xn),xn|=r;return ln(t,e,s,n),e.child}function Sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ad(t,e,n,r,s){var i=En(n)?ti:rn.current;return i=Zi(e,i),Bi(e,s),n=bf(t,e,n,r,i,s),r=Nf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,$r(t,e,s)):(nt&&r&&_f(e),e.flags|=1,ln(t,e,n,s),e.child)}function xg(t,e,n,r,s){if(En(n)){var i=!0;mu(e)}else i=!1;if(Bi(e,s),e.stateNode===null)Hl(t,e),vv(e,n,r),id(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=En(n)?ti:rn.current,c=Zi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&vg(e,o,r,c),ts=!1;var v=e.memoizedState;o.state=v,wu(e,r,o,s),u=e.memoizedState,l!==r||v!==u||wn.current||ts?(typeof f=="function"&&(sd(e,n,f,r),u=e.memoizedState),(l=ts||_g(e,n,l,r,v,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Wn(e.type,l),o.props=c,p=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bn(u):(u=En(n)?ti:rn.current,u=Zi(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||v!==u)&&vg(e,o,r,u),ts=!1,v=e.memoizedState,o.state=v,wu(e,r,o,s);var b=e.memoizedState;l!==p||v!==b||wn.current||ts?(typeof k=="function"&&(sd(e,n,k,r),b=e.memoizedState),(c=ts||_g(e,n,c,r,v,b,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return ld(t,e,n,r,i,s)}function ld(t,e,n,r,s,i){Sv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&cg(e,n,!1),$r(t,e,i);r=e.stateNode,nS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,i),e.child=to(e,null,l,i)):ln(t,e,l,i),e.memoizedState=r.state,s&&cg(e,n,!0),e.child}function xv(t){var e=t.stateNode;e.pendingContext?ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ug(t,e.context,!1),Af(t,e.containerInfo)}function Ag(t,e,n,r,s){return eo(),wf(s),e.flags|=256,ln(t,e,n,r),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Av(t,e,n){var r=e.pendingProps,s=it.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),qe(it,s&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=oc(o,r,0,null),t=Xs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=cd(n),e.memoizedState=ud,t):Of(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return rS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_s(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=_s(l,i):(i=Xs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?cd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=ud,r}return i=t.child,t=i.sibling,r=_s(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Of(t,e){return e=oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,r){return r!==null&&wf(r),to(e,t.child,null,n),t=Of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=lh(Error($(422))),Tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=oc({mode:"visible",children:r.children},s,0,null),i=Xs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=cd(o),e.memoizedState=ud,i);if(!(e.mode&1))return Tl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error($(419)),r=lh(i,r,void 0),Tl(t,e,o,r)}if(l=(o&t.childLanes)!==0,vn||l){if(r=jt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Fr(t,s),Zn(r,t,s,-1))}return Ff(),r=lh(Error($(421))),Tl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=gS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,kn=ps(s.nextSibling),Cn=e,nt=!0,Qn=null,t!==null&&(Vn[Mn++]=Nr,Vn[Mn++]=Pr,Vn[Mn++]=ni,Nr=t.id,Pr=t.overflow,ni=e),e=Of(e,r.children),e.flags|=4096,e)}function kg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rd(t.return,e,n)}function uh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function kv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ln(t,e,r.children,n),r=it.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,n,e);else if(t.tag===19)kg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(qe(it,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Eu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),uh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Eu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}uh(e,!0,n,null,i);break;case"together":uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=_s(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_s(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sS(t,e,n){switch(e.tag){case 3:xv(e),eo();break;case 5:Z0(e);break;case 1:En(e.type)&&mu(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;qe(_u,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(qe(it,it.current&1),e.flags|=128,null):n&e.child.childLanes?Av(t,e,n):(qe(it,it.current&1),t=$r(t,e,n),t!==null?t.sibling:null);qe(it,it.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),qe(it,it.current),r)break;return null;case 22:case 23:return e.lanes=0,Iv(t,e,n)}return $r(t,e,n)}var Cv,hd,Rv,bv;Cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};Rv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ks(mr.current);var i=null;switch(n){case"input":s=Dh(t,s),r=Dh(t,r),i=[];break;case"select":s=at({},s,{value:void 0}),r=at({},r,{value:void 0}),i=[];break;case"textarea":s=Mh(t,s),r=Mh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fu)}jh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Qe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};bv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mo(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iS(t,e,n){var r=e.pendingProps;switch(vf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return En(e.type)&&pu(),Xt(e),null;case 3:return r=e.stateNode,no(),Ye(wn),Ye(rn),Cf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(vd(Qn),Qn=null))),hd(t,e),Xt(e),null;case 5:kf(e);var s=Ks(wa.current);if(n=e.type,t!==null&&e.stateNode!=null)Rv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Xt(e),null}if(t=Ks(mr.current),wl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[dr]=e,r[_a]=i,t=(e.mode&1)!==0,n){case"dialog":Qe("cancel",r),Qe("close",r);break;case"iframe":case"object":case"embed":Qe("load",r);break;case"video":case"audio":for(s=0;s<Bo.length;s++)Qe(Bo[s],r);break;case"source":Qe("error",r);break;case"img":case"image":case"link":Qe("error",r),Qe("load",r);break;case"details":Qe("toggle",r);break;case"input":Mm(r,i),Qe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Qe("invalid",r);break;case"textarea":jm(r,i),Qe("invalid",r)}jh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&vl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&vl(r.textContent,l,t),s=["children",""+l]):la.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Qe("scroll",r)}switch(n){case"input":hl(r),Lm(r,i,!0);break;case"textarea":hl(r),Um(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dr]=e,t[_a]=r,Cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uh(n,r),n){case"dialog":Qe("cancel",t),Qe("close",t),s=r;break;case"iframe":case"object":case"embed":Qe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Bo.length;s++)Qe(Bo[s],t);s=r;break;case"source":Qe("error",t),s=r;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),s=r;break;case"details":Qe("toggle",t),s=r;break;case"input":Mm(t,r),s=Dh(t,r),Qe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=at({},r,{value:void 0}),Qe("invalid",t);break;case"textarea":jm(t,r),s=Mh(t,r),Qe("invalid",t);break;default:s=r}jh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?a0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&i0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ua(t,u):typeof u=="number"&&ua(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(la.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Qe("scroll",t):u!=null&&rf(t,i,u,o))}switch(n){case"input":hl(t),Lm(t,r,!1);break;case"textarea":hl(t),Um(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ss(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ui(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)bv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Ks(wa.current),Ks(mr.current),wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[dr]=e,(i=r.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:vl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dr]=e,e.stateNode=r}return Xt(e),null;case 13:if(Ye(it),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&kn!==null&&e.mode&1&&!(e.flags&128))K0(),eo(),e.flags|=98560,i=!1;else if(i=wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error($(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[dr]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),i=!1}else Qn!==null&&(vd(Qn),Qn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||it.current&1?Rt===0&&(Rt=3):Ff())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return no(),hd(t,e),t===null&&ga(e.stateNode.containerInfo),Xt(e),null;case 10:return If(e.type._context),Xt(e),null;case 17:return En(e.type)&&pu(),Xt(e),null;case 19:if(Ye(it),i=e.memoizedState,i===null)return Xt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Mo(i,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Eu(t),o!==null){for(e.flags|=128,Mo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return qe(it,it.current&1|2),e.child}t=t.sibling}i.tail!==null&&mt()>so&&(e.flags|=128,r=!0,Mo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Eu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!nt)return Xt(e),null}else 2*mt()-i.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,r=!0,Mo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=mt(),e.sibling=null,n=it.current,qe(it,r?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function oS(t,e){switch(vf(e),e.tag){case 1:return En(e.type)&&pu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),Ye(wn),Ye(rn),Cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kf(e),null;case 13:if(Ye(it),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ye(it),null;case 4:return no(),null;case 10:return If(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var Il=!1,tn=!1,aS=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ct(t,e,r)}else n.current=null}function dd(t,e,n){try{n()}catch(r){ct(t,e,r)}}var Cg=!1;function lS(t,e){if(Qh=cu,t=V0(),yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,v=null;t:for(;;){for(var k;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)v=p,p=k;for(;;){if(p===t)break t;if(v===n&&++c===s&&(l=o),v===i&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jh={focusedElem:t,selectionRange:n},cu=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var N=b.memoizedProps,O=b.memoizedState,T=e.stateNode,S=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:Wn(e.type,N),O);T.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(P){ct(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return b=Cg,Cg=!1,b}function Zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&dd(e,n,i)}s=s.next}while(s!==r)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dr],delete e[_a],delete e[Zh],delete e[HI],delete e[qI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Pv(t){return t.tag===5||t.tag===3||t.tag===4}function Rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fu));else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var zt=null,Kn=!1;function Xr(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(Ju,n)}catch{}switch(n.tag){case 5:tn||Li(n,e);case 6:var r=zt,s=Kn;zt=null,Xr(t,e,n),zt=r,Kn=s,zt!==null&&(Kn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Kn?(t=zt,n=n.stateNode,t.nodeType===8?nh(t.parentNode,n):t.nodeType===1&&nh(t,n),fa(t)):nh(zt,n.stateNode));break;case 4:r=zt,s=Kn,zt=n.stateNode.containerInfo,Kn=!0,Xr(t,e,n),zt=r,Kn=s;break;case 0:case 11:case 14:case 15:if(!tn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&dd(n,e,o),s=s.next}while(s!==r)}Xr(t,e,n);break;case 1:if(!tn&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ct(n,e,l)}Xr(t,e,n);break;case 21:Xr(t,e,n);break;case 22:n.mode&1?(tn=(r=tn)||n.memoizedState!==null,Xr(t,e,n),tn=r):Xr(t,e,n);break;default:Xr(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aS),e.forEach(function(r){var s=yS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:zt=l.stateNode,Kn=!1;break e;case 3:zt=l.stateNode.containerInfo,Kn=!0;break e;case 4:zt=l.stateNode.containerInfo,Kn=!0;break e}l=l.return}if(zt===null)throw Error($(160));Dv(i,o,s),zt=null,Kn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){ct(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ur(t),r&4){try{Zo(3,t,t.return),sc(3,t)}catch(N){ct(t,t.return,N)}try{Zo(5,t,t.return)}catch(N){ct(t,t.return,N)}}break;case 1:Gn(e,t),ur(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(Gn(e,t),ur(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var s=t.stateNode;try{ua(s,"")}catch(N){ct(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&n0(s,i),Uh(l,o);var c=Uh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?a0(s,p):f==="dangerouslySetInnerHTML"?i0(s,p):f==="children"?ua(s,p):rf(s,f,p,c)}switch(l){case"input":Oh(s,i);break;case"textarea":r0(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Ui(s,!!i.multiple,k,!1):v!==!!i.multiple&&(i.defaultValue!=null?Ui(s,!!i.multiple,i.defaultValue,!0):Ui(s,!!i.multiple,i.multiple?[]:"",!1))}s[_a]=i}catch(N){ct(t,t.return,N)}}break;case 6:if(Gn(e,t),ur(t),r&4){if(t.stateNode===null)throw Error($(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){ct(t,t.return,N)}}break;case 3:if(Gn(e,t),ur(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(N){ct(t,t.return,N)}break;case 4:Gn(e,t),ur(t);break;case 13:Gn(e,t),ur(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Lf=mt())),r&4&&bg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||f,Gn(e,t),tn=c):Gn(e,t),ur(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Y=t,f=t.child;f!==null;){for(p=Y=f;Y!==null;){switch(v=Y,k=v.child,v.tag){case 0:case 11:case 14:case 15:Zo(4,v,v.return);break;case 1:Li(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(N){ct(r,n,N)}}break;case 5:Li(v,v.return);break;case 22:if(v.memoizedState!==null){Pg(p);continue}}k!==null?(k.return=v,Y=k):Pg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=o0("display",o))}catch(N){ct(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){ct(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gn(e,t),ur(t),r&4&&bg(t);break;case 21:break;default:Gn(e,t),ur(t)}}function ur(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Pv(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ua(s,""),r.flags&=-33);var i=Rg(t);md(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rg(t);pd(t,l,o);break;default:throw Error($(161))}}catch(u){ct(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uS(t,e,n){Y=t,Vv(t)}function Vv(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var s=Y,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Il;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||tn;l=Il;var c=tn;if(Il=o,(tn=u)&&!c)for(Y=s;Y!==null;)o=Y,u=o.child,o.tag===22&&o.memoizedState!==null?Dg(s):u!==null?(u.return=o,Y=u):Dg(s);for(;i!==null;)Y=i,Vv(i),i=i.sibling;Y=s,Il=l,tn=c}Ng(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Y=i):Ng(t)}}function Ng(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||sc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tn)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&mg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&fa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}tn||e.flags&512&&fd(e)}catch(v){ct(e,e.return,v)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Pg(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Dg(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(u){ct(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ct(e,s,u)}}var i=e.return;try{fd(e)}catch(u){ct(e,i,u)}break;case 5:var o=e.return;try{fd(e)}catch(u){ct(e,o,u)}}}catch(u){ct(e,e.return,u)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var cS=Math.ceil,Su=Gr.ReactCurrentDispatcher,Vf=Gr.ReactCurrentOwner,zn=Gr.ReactCurrentBatchConfig,be=0,jt=null,Et=null,Wt=0,xn=0,ji=Vs(0),Rt=0,Sa=null,si=0,ic=0,Mf=0,ea=null,_n=null,Lf=0,so=1/0,Ar=null,xu=!1,gd=null,gs=null,Sl=!1,cs=null,Au=0,ta=0,yd=null,ql=-1,Gl=0;function cn(){return be&6?mt():ql!==-1?ql:ql=mt()}function ys(t){return t.mode&1?be&2&&Wt!==0?Wt&-Wt:WI.transition!==null?(Gl===0&&(Gl=v0()),Gl):(t=Le,t!==0||(t=window.event,t=t===void 0?16:A0(t.type)),t):1}function Zn(t,e,n,r){if(50<ta)throw ta=0,yd=null,Error($(185));La(t,n,r),(!(be&2)||t!==jt)&&(t===jt&&(!(be&2)&&(ic|=n),Rt===4&&rs(t,Wt)),Tn(t,r),n===1&&be===0&&!(e.mode&1)&&(so=mt()+500,tc&&Ms()))}function Tn(t,e){var n=t.callbackNode;WT(t,e);var r=uu(t,t===jt?Wt:0);if(r===0)n!==null&&zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zm(n),e===1)t.tag===0?GI(Og.bind(null,t)):q0(Og.bind(null,t)),zI(function(){!(be&6)&&Ms()}),n=null;else{switch(w0(r)){case 1:n=uf;break;case 4:n=y0;break;case 16:n=lu;break;case 536870912:n=_0;break;default:n=lu}n=Bv(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(ql=-1,Gl=0,be&6)throw Error($(327));var n=t.callbackNode;if(Hi()&&t.callbackNode!==n)return null;var r=uu(t,t===jt?Wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var s=be;be|=2;var i=jv();(jt!==t||Wt!==e)&&(Ar=null,so=mt()+500,Ys(t,e));do try{fS();break}catch(l){Lv(t,l)}while(!0);Tf(),Su.current=i,be=s,Et!==null?e=0:(jt=null,Wt=0,e=Rt)}if(e!==0){if(e===2&&(s=Hh(t),s!==0&&(r=s,e=_d(t,s))),e===1)throw n=Sa,Ys(t,0),rs(t,r),Tn(t,mt()),n;if(e===6)rs(t,r);else{if(s=t.current.alternate,!(r&30)&&!hS(s)&&(e=ku(t,r),e===2&&(i=Hh(t),i!==0&&(r=i,e=_d(t,i))),e===1))throw n=Sa,Ys(t,0),rs(t,r),Tn(t,mt()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Hs(t,_n,Ar);break;case 3:if(rs(t,r),(r&130023424)===r&&(e=Lf+500-mt(),10<e)){if(uu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){cn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Xh(Hs.bind(null,t,_n,Ar),e);break}Hs(t,_n,Ar);break;case 4:if(rs(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Xn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=mt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cS(r/1960))-r,10<r){t.timeoutHandle=Xh(Hs.bind(null,t,_n,Ar),r);break}Hs(t,_n,Ar);break;case 5:Hs(t,_n,Ar);break;default:throw Error($(329))}}}return Tn(t,mt()),t.callbackNode===n?Mv.bind(null,t):null}function _d(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(Ys(t,e).flags|=256),t=ku(t,e),t!==2&&(e=_n,_n=n,e!==null&&vd(e)),t}function vd(t){_n===null?_n=t:_n.push.apply(_n,t)}function hS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!nr(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rs(t,e){for(e&=~Mf,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),r=1<<n;t[n]=-1,e&=~r}}function Og(t){if(be&6)throw Error($(327));Hi();var e=uu(t,0);if(!(e&1))return Tn(t,mt()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=Hh(t);r!==0&&(e=r,n=_d(t,r))}if(n===1)throw n=Sa,Ys(t,0),rs(t,e),Tn(t,mt()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hs(t,_n,Ar),Tn(t,mt()),null}function jf(t,e){var n=be;be|=1;try{return t(e)}finally{be=n,be===0&&(so=mt()+500,tc&&Ms())}}function ii(t){cs!==null&&cs.tag===0&&!(be&6)&&Hi();var e=be;be|=1;var n=zn.transition,r=Le;try{if(zn.transition=null,Le=1,t)return t()}finally{Le=r,zn.transition=n,be=e,!(be&6)&&Ms()}}function Uf(){xn=ji.current,Ye(ji)}function Ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$I(n)),Et!==null)for(n=Et.return;n!==null;){var r=n;switch(vf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pu();break;case 3:no(),Ye(wn),Ye(rn),Cf();break;case 5:kf(r);break;case 4:no();break;case 13:Ye(it);break;case 19:Ye(it);break;case 10:If(r.type._context);break;case 22:case 23:Uf()}n=n.return}if(jt=t,Et=t=_s(t.current,null),Wt=xn=e,Rt=0,Sa=null,Mf=ic=si=0,_n=ea=null,Ws!==null){for(e=0;e<Ws.length;e++)if(n=Ws[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ws=null}return t}function Lv(t,e){do{var n=Et;try{if(Tf(),zl.current=Iu,Tu){for(var r=ot.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Tu=!1}if(ri=0,Lt=Ct=ot=null,Xo=!1,Ea=0,Vf.current=null,n===null||n.return===null){Rt=1,Sa=e,Et=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Wt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Eg(o);if(k!==null){k.flags&=-257,Tg(k,o,l,i,e),k.mode&1&&wg(i,c,e),e=k,u=c;var b=e.updateQueue;if(b===null){var N=new Set;N.add(u),e.updateQueue=N}else b.add(u);break e}else{if(!(e&1)){wg(i,c,e),Ff();break e}u=Error($(426))}}else if(nt&&l.mode&1){var O=Eg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Tg(O,o,l,i,e),wf(ro(u,l));break e}}i=u=ro(u,l),Rt!==4&&(Rt=2),ea===null?ea=[i]:ea.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=wv(i,u,e);pg(i,T);break e;case 1:l=u;var S=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof S.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(gs===null||!gs.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var P=Ev(i,l,e);pg(i,P);break e}}i=i.return}while(i!==null)}Fv(n)}catch(j){e=j,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function jv(){var t=Su.current;return Su.current=Iu,t===null?Iu:t}function Ff(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),jt===null||!(si&268435455)&&!(ic&268435455)||rs(jt,Wt)}function ku(t,e){var n=be;be|=2;var r=jv();(jt!==t||Wt!==e)&&(Ar=null,Ys(t,e));do try{dS();break}catch(s){Lv(t,s)}while(!0);if(Tf(),be=n,Su.current=r,Et!==null)throw Error($(261));return jt=null,Wt=0,Rt}function dS(){for(;Et!==null;)Uv(Et)}function fS(){for(;Et!==null&&!jT();)Uv(Et)}function Uv(t){var e=zv(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Fv(t):Et=e,Vf.current=null}function Fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oS(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Et=null;return}}else if(n=iS(n,e,xn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Rt===0&&(Rt=5)}function Hs(t,e,n){var r=Le,s=zn.transition;try{zn.transition=null,Le=1,pS(t,e,n,r)}finally{zn.transition=s,Le=r}return null}function pS(t,e,n,r){do Hi();while(cs!==null);if(be&6)throw Error($(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(KT(t,i),t===jt&&(Et=jt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,Bv(lu,function(){return Hi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=zn.transition,zn.transition=null;var o=Le;Le=1;var l=be;be|=4,Vf.current=null,lS(t,n),Ov(n,t),OI(Jh),cu=!!Qh,Jh=Qh=null,t.current=n,uS(n),UT(),be=l,Le=o,zn.transition=i}else t.current=n;if(Sl&&(Sl=!1,cs=t,Au=s),i=t.pendingLanes,i===0&&(gs=null),zT(n.stateNode),Tn(t,mt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(xu)throw xu=!1,t=gd,gd=null,t;return Au&1&&t.tag!==0&&Hi(),i=t.pendingLanes,i&1?t===yd?ta++:(ta=0,yd=t):ta=0,Ms(),null}function Hi(){if(cs!==null){var t=w0(Au),e=zn.transition,n=Le;try{if(zn.transition=null,Le=16>t?16:t,cs===null)var r=!1;else{if(t=cs,cs=null,Au=0,be&6)throw Error($(331));var s=be;for(be|=4,Y=t.current;Y!==null;){var i=Y,o=i.child;if(Y.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Y=c;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:Zo(8,f,i)}var p=f.child;if(p!==null)p.return=f,Y=p;else for(;Y!==null;){f=Y;var v=f.sibling,k=f.return;if(Nv(f),f===c){Y=null;break}if(v!==null){v.return=k,Y=v;break}Y=k}}}var b=i.alternate;if(b!==null){var N=b.child;if(N!==null){b.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}Y=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Y=o;else e:for(;Y!==null;){if(i=Y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Zo(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,Y=T;break e}Y=i.return}}var S=t.current;for(Y=S;Y!==null;){o=Y;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Y=A;else e:for(o=S;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:sc(9,l)}}catch(j){ct(l,l.return,j)}if(l===o){Y=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,Y=P;break e}Y=l.return}}if(be=s,Ms(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(Ju,t)}catch{}r=!0}return r}finally{Le=n,zn.transition=e}}return!1}function Vg(t,e,n){e=ro(n,e),e=wv(t,e,1),t=ms(t,e,1),e=cn(),t!==null&&(La(t,1,e),Tn(t,e))}function ct(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gs===null||!gs.has(r))){t=ro(n,t),t=Ev(e,t,1),e=ms(e,t,1),t=cn(),e!==null&&(La(e,1,t),Tn(e,t));break}}e=e.return}}function mS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Wt&n)===n&&(Rt===4||Rt===3&&(Wt&130023424)===Wt&&500>mt()-Lf?Ys(t,0):Mf|=n),Tn(t,e)}function $v(t,e){e===0&&(t.mode&1?(e=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):e=1);var n=cn();t=Fr(t,e),t!==null&&(La(t,e,n),Tn(t,n))}function gS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$v(t,n)}function yS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),$v(t,n)}var zv;zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,sS(t,e,n);vn=!!(t.flags&131072)}else vn=!1,nt&&e.flags&1048576&&G0(e,yu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hl(t,e),t=e.pendingProps;var s=Zi(e,rn.current);Bi(e,n),s=bf(null,e,r,t,s,n);var i=Nf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(r)?(i=!0,mu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,xf(e),s.updater=rc,e.stateNode=s,s._reactInternals=e,id(e,r,t,n),e=ld(null,e,r,!0,i,n)):(e.tag=0,nt&&i&&_f(e),ln(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=vS(r),t=Wn(r,t),s){case 0:e=ad(null,e,r,t,n);break e;case 1:e=xg(null,e,r,t,n);break e;case 11:e=Ig(null,e,r,t,n);break e;case 14:e=Sg(null,e,r,Wn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Wn(r,s),ad(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Wn(r,s),xg(t,e,r,s,n);case 3:e:{if(xv(e),t===null)throw Error($(387));r=e.pendingProps,i=e.memoizedState,s=i.element,X0(t,e),wu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ro(Error($(423)),e),e=Ag(t,e,r,n,s);break e}else if(r!==s){s=ro(Error($(424)),e),e=Ag(t,e,r,n,s);break e}else for(kn=ps(e.stateNode.containerInfo.firstChild),Cn=e,nt=!0,Qn=null,n=J0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),r===s){e=$r(t,e,n);break e}ln(t,e,r,n)}e=e.child}return e;case 5:return Z0(e),t===null&&nd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Yh(r,s)?o=null:i!==null&&Yh(r,i)&&(e.flags|=32),Sv(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&nd(e),null;case 13:return Av(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=to(e,null,r,n):ln(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Wn(r,s),Ig(t,e,r,s,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,qe(_u,r._currentValue),r._currentValue=o,i!==null)if(nr(i.value,o)){if(i.children===s.children&&!wn.current){e=$r(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Mr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),rd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ln(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Bi(e,n),s=Bn(s),r=r(s),e.flags|=1,ln(t,e,r,n),e.child;case 14:return r=e.type,s=Wn(r,e.pendingProps),s=Wn(r.type,s),Sg(t,e,r,s,n);case 15:return Tv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Wn(r,s),Hl(t,e),e.tag=1,En(r)?(t=!0,mu(e)):t=!1,Bi(e,n),vv(e,r,s),id(e,r,s,n),ld(null,e,r,!0,t,n);case 19:return kv(t,e,n);case 22:return Iv(t,e,n)}throw Error($(156,e.tag))};function Bv(t,e){return g0(t,e)}function _S(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,r){return new _S(t,e,n,r)}function $f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vS(t){if(typeof t=="function")return $f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function _s(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")$f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Xs(n.children,s,i,e);case sf:o=8,s|=8;break;case Rh:return t=$n(12,n,e,s|2),t.elementType=Rh,t.lanes=i,t;case bh:return t=$n(13,n,e,s),t.elementType=bh,t.lanes=i,t;case Nh:return t=$n(19,n,e,s),t.elementType=Nh,t.lanes=i,t;case Z_:return oc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y_:o=10;break e;case X_:o=9;break e;case of:o=11;break e;case af:o=14;break e;case es:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=$n(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Xs(t,e,n,r){return t=$n(7,t,r,e),t.lanes=n,t}function oc(t,e,n,r){return t=$n(22,t,r,e),t.elementType=Z_,t.lanes=n,t.stateNode={isHidden:!1},t}function ch(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function hh(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qc(0),this.expirationTimes=qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function zf(t,e,n,r,s,i,o,l,u){return t=new wS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=$n(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(i),t}function ES(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hv(t){if(!t)return xs;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(En(n))return H0(t,n,e)}return e}function qv(t,e,n,r,s,i,o,l,u){return t=zf(n,r,!0,t,s,i,o,l,u),t.context=Hv(null),n=t.current,r=cn(),s=ys(n),i=Mr(r,s),i.callback=e??null,ms(n,i,s),t.current.lanes=s,La(t,s,r),Tn(t,r),t}function ac(t,e,n,r){var s=e.current,i=cn(),o=ys(s);return n=Hv(n),e.context===null?e.context=n:e.pendingContext=n,e=Mr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ms(s,e,o),t!==null&&(Zn(t,s,o,i),$l(t,s,o)),o}function Cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){Mg(t,e),(t=t.alternate)&&Mg(t,e)}function TS(){return null}var Gv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}lc.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));ac(t,e,null,null)};lc.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){ac(null,t,null,null)}),e[Ur]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=I0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ns.length&&e!==0&&e<ns[n].priority;n++);ns.splice(n,0,t),n===0&&x0(t)}};function qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function IS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Cu(o);i.call(c)}}var o=qv(e,r,t,0,null,!1,!1,"",Lg);return t._reactRootContainer=o,t[Ur]=o.current,ga(t.nodeType===8?t.parentNode:t),ii(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Cu(u);l.call(c)}}var u=zf(t,0,!1,null,null,!1,!1,"",Lg);return t._reactRootContainer=u,t[Ur]=u.current,ga(t.nodeType===8?t.parentNode:t),ii(function(){ac(e,u,n,r)}),u}function cc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Cu(o);l.call(u)}}ac(e,o,t,s)}else o=IS(n,e,t,s,r);return Cu(o)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(cf(e,n|1),Tn(e,mt()),!(be&6)&&(so=mt()+500,Ms()))}break;case 13:ii(function(){var r=Fr(t,1);if(r!==null){var s=cn();Zn(r,t,1,s)}}),Bf(t,1)}};hf=function(t){if(t.tag===13){var e=Fr(t,134217728);if(e!==null){var n=cn();Zn(e,t,134217728,n)}Bf(t,134217728)}};T0=function(t){if(t.tag===13){var e=ys(t),n=Fr(t,e);if(n!==null){var r=cn();Zn(n,t,e,r)}Bf(t,e)}};I0=function(){return Le};S0=function(t,e){var n=Le;try{return Le=t,e()}finally{Le=n}};$h=function(t,e,n){switch(e){case"input":if(Oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ec(r);if(!s)throw Error($(90));t0(r),Oh(r,s)}}}break;case"textarea":r0(t,n);break;case"select":e=n.value,e!=null&&Ui(t,!!n.multiple,e,!1)}};c0=jf;h0=ii;var SS={usingClientEntryPoint:!1,Events:[Ua,Pi,ec,l0,u0,jf]},Lo={findFiberByHostInstance:Gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xS={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p0(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||TS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Ju=xl.inject(xS),pr=xl}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(e))throw Error($(200));return ES(t,e,null,n)};bn.createRoot=function(t,e){if(!qf(t))throw Error($(299));var n=!1,r="",s=Gv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=zf(t,1,!1,null,null,n,!1,r,s),t[Ur]=e.current,ga(t.nodeType===8?t.parentNode:t),new Hf(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=p0(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return ii(t)};bn.hydrate=function(t,e,n){if(!uc(e))throw Error($(200));return cc(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!qf(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Gv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qv(e,null,t,1,n??null,s,!1,i,o),t[Ur]=e.current,ga(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new lc(e)};bn.render=function(t,e,n){if(!uc(e))throw Error($(200));return cc(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!uc(t))throw Error($(40));return t._reactRootContainer?(ii(function(){cc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ur]=null})}),!0):!1};bn.unstable_batchedUpdates=jf;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return cc(t,e,n,!1,r)};bn.version="18.3.1-next-f1338f8080-20240426";function Wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv)}catch(t){console.error(t)}}Wv(),W_.exports=bn;var AS=W_.exports,jg=AS;kh.createRoot=jg.createRoot,kh.hydrateRoot=jg.hydrateRoot;/**
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
 */const de=(t,e)=>{const n=ae.forwardRef(({className:r,...s},i)=>ae.createElement(NS,{ref:i,iconNode:e,className:Kv(`lucide-${kS(Ug(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Ug(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],DS=de("binary",PS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Qv=de("brain",OS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Fg=de("calendar",VS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],LS=de("chart-column",MS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],US=de("chevron-down",jS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$S=de("chevron-left",FS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],BS=de("chevron-right",zS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],qS=de("chevron-up",HS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],WS=de("circle-alert",GS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],QS=de("circle-check",KS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],YS=de("clipboard-check",JS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Gf=de("clock",XS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Jv=de("cloud-upload",ZS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],tx=de("component",ex);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$g=de("copy",nx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Yv=de("database",rx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ix=de("download",sx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],ax=de("flag",ox);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],ux=de("folder-kanban",lx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],hx=de("funnel",cx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Xv=de("globe",dx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],px=de("layers",fx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],gx=de("lightbulb",mx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],_x=de("list-tree",yx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],wx=de("loader-circle",vx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],zg=de("map-pin",Ex);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ix=de("menu",Tx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],xx=de("palette",Sx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],kx=de("pen",Ax);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rx=de("play",Cx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Nx=de("plus",bx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],Dx=de("power",Px);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],Vx=de("refresh-ccw",Ox);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Lx=de("rotate-ccw",Mx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ux=de("save",jx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],$x=de("settings-2",Fx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Bx=de("sparkles",zx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Zv=de("target",Hx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Gx=de("trash-2",qx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],ew=de("trending-up",Wx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Qx=de("users",Kx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Yx=de("wand-sparkles",Jx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zx=de("x",Xx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],tA=de("zap-off",eA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],wd=de("zap",nA),rA=()=>{};var Bg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|c>>6,k=c&63;u||(k=64,o||(v=64)),r.push(n[f],n[p],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new iA;const v=i<<2|l>>4;if(r.push(v),c!==64){const k=l<<4&240|c>>2;if(r.push(k),p!==64){const b=c<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oA=function(t){const e=tw(t);return nw.encodeByteArray(e,!0)},Ru=function(t){return oA(t).replace(/\./g,"")},rw=function(t){try{return nw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lA=()=>aA().__FIREBASE_DEFAULTS__,uA=()=>{if(typeof process>"u"||typeof Bg>"u")return;const t=Bg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rw(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return rA()||lA()||uA()||cA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sw=t=>{var e,n;return(n=(e=hc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},iw=t=>{const e=sw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ow=()=>{var t;return(t=hc())==null?void 0:t.config},aw=t=>{var e;return(e=hc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function lw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ru(JSON.stringify(n)),Ru(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function fA(){var e;const t=(e=hc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yA(){const t=sn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _A(){return!fA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vA(){try{return typeof indexedDB=="object"}catch{return!1}}function wA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="FirebaseError";class Sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EA,Object.setPrototypeOf(this,Sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Sr(s,l,r)}}function TA(t,e){return t.replace(IA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const IA=/\{\$([^}]+)}/g;function SA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Hg(i)&&Hg(o)){if(!oi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xA(t,e){const n=new AA(t,e);return n.subscribe.bind(n)}class AA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=dh),s.error===void 0&&(s.error=dh),s.complete===void 0&&(s.complete=dh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dh(){}/**
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
 */function Pt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function pi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wf(t){return(await fetch(t,{credentials:"include"})).ok}class As{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qs="[DEFAULT]";/**
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
 */class CA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bA(e))try{this.getOrInitializeService({instanceIdentifier:qs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qs){return this.instances.has(e)}getOptions(e=qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qs){return this.component?this.component.multipleInstances?e:qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RA(t){return t===qs?void 0:t}function bA(t){return t.instantiationMode==="EAGER"}/**
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
 */class NA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const PA={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},DA=Ae.INFO,OA={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},VA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kf{constructor(e){this.name=e,this._logLevel=DA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const MA=(t,e)=>e.some(n=>t instanceof n);let qg,Gg;function LA(){return qg||(qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jA(){return Gg||(Gg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uw=new WeakMap,Ed=new WeakMap,cw=new WeakMap,fh=new WeakMap,Qf=new WeakMap;function UA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uw.set(n,t)}).catch(()=>{}),Qf.set(e,t),e}function FA(t){if(Ed.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ed.set(t,e)}let Td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $A(t){Td=t(Td)}function zA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ph(this),e,...n);return cw.set(r,e.sort?e.sort():[e]),vs(r)}:jA().includes(t)?function(...e){return t.apply(ph(this),e),vs(uw.get(this))}:function(...e){return vs(t.apply(ph(this),e))}}function BA(t){return typeof t=="function"?zA(t):(t instanceof IDBTransaction&&FA(t),MA(t,LA())?new Proxy(t,Td):t)}function vs(t){if(t instanceof IDBRequest)return UA(t);if(fh.has(t))return fh.get(t);const e=BA(t);return e!==t&&(fh.set(t,e),Qf.set(e,t)),e}const ph=t=>Qf.get(t);function HA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=vs(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vs(o.result),u.oldVersion,u.newVersion,vs(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const qA=["get","getKey","getAll","getAllKeys","count"],GA=["put","add","delete","clear"],mh=new Map;function Wg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mh.get(e))return mh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=GA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return mh.set(e,i),i}$A(t=>({...t,get:(e,n,r)=>Wg(e,n)||t.get(e,n,r),has:(e,n)=>!!Wg(e,n)||t.has(e,n)}));/**
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
 */class WA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Id="@firebase/app",Kg="0.14.12";/**
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
 */const zr=new Kf("@firebase/app"),QA="@firebase/app-compat",JA="@firebase/analytics-compat",YA="@firebase/analytics",XA="@firebase/app-check-compat",ZA="@firebase/app-check",ek="@firebase/auth",tk="@firebase/auth-compat",nk="@firebase/database",rk="@firebase/data-connect",sk="@firebase/database-compat",ik="@firebase/functions",ok="@firebase/functions-compat",ak="@firebase/installations",lk="@firebase/installations-compat",uk="@firebase/messaging",ck="@firebase/messaging-compat",hk="@firebase/performance",dk="@firebase/performance-compat",fk="@firebase/remote-config",pk="@firebase/remote-config-compat",mk="@firebase/storage",gk="@firebase/storage-compat",yk="@firebase/firestore",_k="@firebase/ai",vk="@firebase/firestore-compat",wk="firebase",Ek="12.13.0";/**
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
 */const Sd="[DEFAULT]",Tk={[Id]:"fire-core",[QA]:"fire-core-compat",[YA]:"fire-analytics",[JA]:"fire-analytics-compat",[ZA]:"fire-app-check",[XA]:"fire-app-check-compat",[ek]:"fire-auth",[tk]:"fire-auth-compat",[nk]:"fire-rtdb",[rk]:"fire-data-connect",[sk]:"fire-rtdb-compat",[ik]:"fire-fn",[ok]:"fire-fn-compat",[ak]:"fire-iid",[lk]:"fire-iid-compat",[uk]:"fire-fcm",[ck]:"fire-fcm-compat",[hk]:"fire-perf",[dk]:"fire-perf-compat",[fk]:"fire-rc",[pk]:"fire-rc-compat",[mk]:"fire-gcs",[gk]:"fire-gcs-compat",[yk]:"fire-fst",[vk]:"fire-fst-compat",[_k]:"fire-vertex","fire-js":"fire-js",[wk]:"fire-js-all"};/**
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
 */const bu=new Map,Ik=new Map,xd=new Map;function Qg(t,e){try{t.container.addComponent(e)}catch(n){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(xd.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,t);for(const n of bu.values())Qg(n,t);for(const n of Ik.values())Qg(n,t);return!0}function dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Sk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ws=new $a("app","Firebase",Sk);/**
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
 */class xk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ws.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=Ek;function hw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Sd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ws.create("bad-app-name",{appName:String(s)});if(n||(n=ow()),!n)throw ws.create("no-options");const i=bu.get(s);if(i){if(oi(n,i.options)&&oi(r,i.config))return i;throw ws.create("duplicate-app",{appName:s})}const o=new NA(s);for(const u of xd.values())o.addComponent(u);const l=new xk(n,r,o);return bu.set(s,l),l}function Jf(t=Sd){const e=bu.get(t);if(!e&&t===Sd&&ow())return hw();if(!e)throw ws.create("no-app",{appName:t});return e}function gr(t,e,n){let r=Tk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(o.join(" "));return}ai(new As(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ak="firebase-heartbeat-database",kk=1,xa="firebase-heartbeat-store";let gh=null;function dw(){return gh||(gh=HA(Ak,kk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xa)}catch(n){console.warn(n)}}}}).catch(t=>{throw ws.create("idb-open",{originalErrorMessage:t.message})})),gh}async function Ck(t){try{const n=(await dw()).transaction(xa),r=await n.objectStore(xa).get(fw(t));return await n.done,r}catch(e){if(e instanceof Sr)zr.warn(e.message);else{const n=ws.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(n.message)}}}async function Jg(t,e){try{const r=(await dw()).transaction(xa,"readwrite");await r.objectStore(xa).put(e,fw(t)),await r.done}catch(n){if(n instanceof Sr)zr.warn(n.message);else{const r=ws.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zr.warn(r.message)}}}function fw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rk=1024,bk=30;class Nk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>bk){const o=Ok(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yg(),{heartbeatsToSend:r,unsentEntries:s}=Pk(this._heartbeatsCache.heartbeats),i=Ru(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return zr.warn(n),""}}}function Yg(){return new Date().toISOString().substring(0,10)}function Pk(t,e=Rk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vA()?wA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ck(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Jg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xg(t){return Ru(JSON.stringify({version:2,heartbeats:t})).length}function Ok(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Vk(t){ai(new As("platform-logger",e=>new WA(e),"PRIVATE")),ai(new As("heartbeat",e=>new Nk(e),"PRIVATE")),gr(Id,Kg,t),gr(Id,Kg,"esm2020"),gr("fire-js","")}Vk("");var Mk="firebase",Lk="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(Mk,Lk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firebasestorage.googleapis.com",mw="storageBucket",jk=2*60*1e3,Uk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Sr{constructor(e,n,r=0){super(yh(e),`Firebase Storage: ${n} (${yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gt||(gt={}));function yh(t){return"storage/"+t}function Yf(){const t="An unknown error occurred, please check the error payload for server response.";return new yt(gt.UNKNOWN,t)}function Fk(t){return new yt(gt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function $k(t){return new yt(gt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new yt(gt.UNAUTHENTICATED,t)}function Bk(){return new yt(gt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Hk(t){return new yt(gt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qk(){return new yt(gt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gk(){return new yt(gt.CANCELED,"User canceled the upload/download.")}function Wk(t){return new yt(gt.INVALID_URL,"Invalid URL '"+t+"'.")}function Kk(t){return new yt(gt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qk(){return new yt(gt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mw+"' property when initializing the app?")}function Jk(){return new yt(gt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Yk(t){return new yt(gt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ad(t){return new yt(gt.INVALID_ARGUMENT,t)}function gw(){return new yt(gt.APP_DELETED,"The Firebase app was deleted.")}function Xk(t){return new yt(gt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function na(t,e){return new yt(gt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function jo(t){throw new yt(gt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=un.makeFromUrl(e,n)}catch{return new un(e,"")}if(r.path==="")return r;throw Kk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",k=new RegExp(`^https?://${p}/${f}/b/${s}/o${v}`,"i"),b={bucket:1,path:3},N=n===pw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",T=new RegExp(`^https?://${N}/${s}/${O}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:k,indices:b,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<A.length;P++){const j=A[P],F=j.regex.exec(e);if(F){const E=F[j.indices.bucket];let _=F[j.indices.path];_||(_=""),r=new un(E,_),j.postModify(r);break}}if(r==null)throw Wk(e);return r}}class Zk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...O){c||(c=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(k,u())},O)}function v(){i&&clearTimeout(i)}function k(O,...T){if(c){v();return}if(O){v(),f.call(null,O,...T);return}if(u()||o){v(),f.call(null,O,...T);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,p(A)}let b=!1;function N(O){b||(b=!0,v(),!c&&(s!==null?(O||(l=2),clearTimeout(s),p(0)):O||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function tC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t){return t!==void 0}function rC(t){return typeof t=="object"&&!Array.isArray(t)}function yw(t){return typeof t=="string"||t instanceof String}function Zg(t){return Xf()&&t instanceof Blob}function Xf(){return typeof Blob<"u"}function kd(t,e,n,r){if(r<e)throw Ad(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ad(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Zs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zs||(Zs={}));/**
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
 */function iC(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,s,i,o,l,u,c,f,p,v=!0,k=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=v,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,N)=>{this.resolve_=b,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Al(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Zs.NO_ERROR,u=i.getStatus();if(!l||iC(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Zs.ABORT;r(!1,new Al(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Al(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());nC(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Yf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?gw():Gk();o(u)}else{const u=qk();o(u)}};this.canceled_?n(!1,new Al(!1,null,!0)):this.backoffId_=eC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Al{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function aC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hC(t,e,n,r,s,i,o=!0,l=!1){const u=sC(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return uC(f,e),aC(f,n),lC(f,i),cC(f,r),new oC(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fC(...t){const e=dC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xf())return new Blob(t);throw new yt(gt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function mC(t){if(typeof atob>"u")throw Yk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _h{constructor(e,n){this.data=e,this.contentType=n||null}}function gC(t,e){switch(t){case fr.RAW:return new _h(_w(e));case fr.BASE64:case fr.BASE64URL:return new _h(vw(t,e));case fr.DATA_URL:return new _h(_C(e),vC(e))}throw Yf()}function _w(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function yC(t){let e;try{e=decodeURIComponent(t)}catch{throw na(fr.DATA_URL,"Malformed data URL.")}return _w(e)}function vw(t,e){switch(t){case fr.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw na(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case fr.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw na(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mC(e)}catch(s){throw s.message.includes("polyfill")?s:na(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ww{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw na(fr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=wC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function _C(t){const e=new ww(t);return e.base64?vw(fr.BASE64,e.rest):yC(e.rest)}function vC(t){return new ww(t).contentType}function wC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){let r=0,s="";Zg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Zg(this.data_)){const r=this.data_,s=pC(r,e,n);return s===null?null:new ss(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ss(r,!0)}}static getBlob(...e){if(Xf()){const n=e.map(r=>r instanceof ss?r.data_:r);return new ss(fC.apply(null,n))}else{const n=e.map(o=>yw(o)?gC(fr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new ss(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t){let e;try{e=JSON.parse(t)}catch{return null}return rC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Tw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e){return e}class an{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||IC}}let kl=null;function SC(t){return!yw(t)||t.length<2?t:Tw(t)}function xC(){if(kl)return kl;const t=[];t.push(new an("bucket")),t.push(new an("generation")),t.push(new an("metageneration")),t.push(new an("name","fullPath",!0));function e(i,o){return SC(o)}const n=new an("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new an("size");return s.xform=r,t.push(s),t.push(new an("timeCreated")),t.push(new an("updated")),t.push(new an("md5Hash",null,!0)),t.push(new an("cacheControl",null,!0)),t.push(new an("contentDisposition",null,!0)),t.push(new an("contentEncoding",null,!0)),t.push(new an("contentLanguage",null,!0)),t.push(new an("contentType",null,!0)),t.push(new an("metadata","customMetadata",!0)),kl=t,kl}function AC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new un(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function kC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return AC(r,t),r}function CC(t,e,n){const r=Ew(e);return r===null?null:kC(t,r,n)}function RC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
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
 */const ey="prefixes",ty="items";function bC(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ey])for(const s of n[ey]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new un(e,i));r.prefixes.push(o)}if(n[ty])for(const s of n[ty]){const i=t._makeStorageReference(new un(e,s.name));r.items.push(i)}return r}function NC(t,e,n){const r=Ew(n);return r===null?null:bC(t,e,r)}class ep{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){if(!t)throw Yf()}function PC(t,e){function n(r,s){const i=CC(t,s,e);return Iw(i!==null),i}return n}function DC(t,e){function n(r,s){const i=NC(t,e,s);return Iw(i!==null),i}return n}function tp(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Bk():s=zk():n.getStatus()===402?s=$k(t.bucket):n.getStatus()===403?s=Hk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function OC(t){const e=tp(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Fk(t.path)),i.serverResponse=s.serverResponse,i}return n}function VC(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),l=Zf(o,t.host,t._protocol),u="GET",c=t.maxOperationRetryTime,f=new ep(l,u,DC(t,e.bucket),c);return f.urlParams=i,f.errorHandler=tp(e),f}function MC(t,e,n){const r=e.fullServerUrl(),s=Zf(r,t.host,t._protocol)+"?alt=media",i="GET",o=t.maxOperationRetryTime,l=new ep(s,i,(u,c)=>c,o);return l.errorHandler=OC(e),l}function LC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=LC(null,e)),r}function UC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let P=0;P<2;P++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=jC(e,r,s),f=RC(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,v=`\r
--`+u+"--",k=ss.getBlob(p,r,v);if(k===null)throw Jk();const b={name:c.fullPath},N=Zf(i,t.host,t._protocol),O="POST",T=t.maxUploadRetryTime,S=new ep(N,O,PC(t,n),T);return S.urlParams=b,S.headers=o,S.body=k.uploadData(),S.errorHandler=tp(e),S}class Sw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Zs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Zs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Zs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw jo("cannot .send() more than once");if(pi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw jo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw jo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw jo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw jo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FC extends Sw{initXhr(){this.xhr_.responseType="text"}}function xw(){return new FC}class $C extends Sw{initXhr(){this.xhr_.responseType="arraybuffer"}}function zC(){return new $C}/**
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
 */class li{constructor(e,n){this._service=e,n instanceof un?this._location=n:this._location=un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new li(e,n)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tw(this._location.path)}get storage(){return this._service}get parent(){const e=EC(this._location.path);if(e===null)return null;const n=new un(this._location.bucket,e);return new li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Xk(e)}}function BC(t,e){t._throwIfRoot("getBytes");const n=MC(t.storage,t._location);return t.storage.makeRequestWithTokens(n,zC).then(r=>r)}function HC(t,e,n){t._throwIfRoot("uploadBytes");const r=UC(t.storage,t._location,xC(),new ss(e,!0),n);return t.storage.makeRequestWithTokens(r,xw).then(s=>({metadata:s,ref:t}))}function qC(t){const e={prefixes:[],items:[]};return Aw(t,e).then(()=>e)}async function Aw(t,e,n){const s=await GC(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Aw(t,e,s.nextPageToken)}function GC(t,e){e!=null&&typeof e.maxResults=="number"&&kd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=VC(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,xw)}function WC(t,e){const n=TC(t._location.path,e),r=new un(t._location.bucket,n);return new li(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){return/^[A-Za-z]+:\/\//.test(t)}function QC(t,e){return new li(t,e)}function kw(t,e){if(t instanceof np){const n=t;if(n._bucket==null)throw Qk();const r=new li(n,n._bucket);return e!=null?kw(r,e):r}else return e!==void 0?WC(t,e):t}function JC(t,e){if(e&&KC(e)){if(t instanceof np)return QC(t,e);throw Ad("To use ref(service, url), the first argument must be a Storage instance.")}else return kw(t,e)}function ny(t,e){const n=e==null?void 0:e[mw];return n==null?null:un.makeFromBucketSpec(n,t)}function YC(t,e,n,r={}){t.host=`${e}:${n}`;const s=pi(e);s&&Wf(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:lw(i,t.app.options.projectId))}class np{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=pw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jk,this._maxUploadRetryTime=Uk,this._requests=new Set,s!=null?this._bucket=un.makeFromBucketSpec(s,this._host):this._bucket=ny(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=ny(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new li(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Zk(gw());{const o=hC(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ry="@firebase/storage",sy="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t,e){return t=Pt(t),BC(t)}function ZC(t,e,n){return t=Pt(t),HC(t,e,n)}function iy(t){return t=Pt(t),qC(t)}function rp(t,e){return t=Pt(t),JC(t,e)}function eR(t=Jf(),e){t=Pt(t);const r=dc(t,Cw).getImmediate({identifier:e}),s=iw("storage");return s&&tR(r,...s),r}function tR(t,e,n,r={}){YC(t,e,n,r)}function nR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new np(n,r,s,e,mi)}function rR(){ai(new As(Cw,nR,"PUBLIC").setMultipleInstances(!0)),gr(ry,sy,""),gr(ry,sy,"esm2020")}rR();var oy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es,Rw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function I(){}I.prototype=_.prototype,E.F=_.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(g,x,C){for(var w=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)w[pe-2]=arguments[pe];return _.prototype[x].apply(g,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,I){I||(I=0);const g=Array(16);if(typeof _=="string")for(var x=0;x<16;++x)g[x]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(x=0;x<16;++x)g[x]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=E.g[0],I=E.g[1],x=E.g[2];let C=E.g[3],w;w=_+(C^I&(x^C))+g[0]+3614090360&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(x^_&(I^x))+g[1]+3905402710&4294967295,C=_+(w<<12&4294967295|w>>>20),w=x+(I^C&(_^I))+g[2]+606105819&4294967295,x=C+(w<<17&4294967295|w>>>15),w=I+(_^x&(C^_))+g[3]+3250441966&4294967295,I=x+(w<<22&4294967295|w>>>10),w=_+(C^I&(x^C))+g[4]+4118548399&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(x^_&(I^x))+g[5]+1200080426&4294967295,C=_+(w<<12&4294967295|w>>>20),w=x+(I^C&(_^I))+g[6]+2821735955&4294967295,x=C+(w<<17&4294967295|w>>>15),w=I+(_^x&(C^_))+g[7]+4249261313&4294967295,I=x+(w<<22&4294967295|w>>>10),w=_+(C^I&(x^C))+g[8]+1770035416&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(x^_&(I^x))+g[9]+2336552879&4294967295,C=_+(w<<12&4294967295|w>>>20),w=x+(I^C&(_^I))+g[10]+4294925233&4294967295,x=C+(w<<17&4294967295|w>>>15),w=I+(_^x&(C^_))+g[11]+2304563134&4294967295,I=x+(w<<22&4294967295|w>>>10),w=_+(C^I&(x^C))+g[12]+1804603682&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(x^_&(I^x))+g[13]+4254626195&4294967295,C=_+(w<<12&4294967295|w>>>20),w=x+(I^C&(_^I))+g[14]+2792965006&4294967295,x=C+(w<<17&4294967295|w>>>15),w=I+(_^x&(C^_))+g[15]+1236535329&4294967295,I=x+(w<<22&4294967295|w>>>10),w=_+(x^C&(I^x))+g[1]+4129170786&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^x&(_^I))+g[6]+3225465664&4294967295,C=_+(w<<9&4294967295|w>>>23),w=x+(_^I&(C^_))+g[11]+643717713&4294967295,x=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(x^C))+g[0]+3921069994&4294967295,I=x+(w<<20&4294967295|w>>>12),w=_+(x^C&(I^x))+g[5]+3593408605&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^x&(_^I))+g[10]+38016083&4294967295,C=_+(w<<9&4294967295|w>>>23),w=x+(_^I&(C^_))+g[15]+3634488961&4294967295,x=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(x^C))+g[4]+3889429448&4294967295,I=x+(w<<20&4294967295|w>>>12),w=_+(x^C&(I^x))+g[9]+568446438&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^x&(_^I))+g[14]+3275163606&4294967295,C=_+(w<<9&4294967295|w>>>23),w=x+(_^I&(C^_))+g[3]+4107603335&4294967295,x=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(x^C))+g[8]+1163531501&4294967295,I=x+(w<<20&4294967295|w>>>12),w=_+(x^C&(I^x))+g[13]+2850285829&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^x&(_^I))+g[2]+4243563512&4294967295,C=_+(w<<9&4294967295|w>>>23),w=x+(_^I&(C^_))+g[7]+1735328473&4294967295,x=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(x^C))+g[12]+2368359562&4294967295,I=x+(w<<20&4294967295|w>>>12),w=_+(I^x^C)+g[5]+4294588738&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^x)+g[8]+2272392833&4294967295,C=_+(w<<11&4294967295|w>>>21),w=x+(C^_^I)+g[11]+1839030562&4294967295,x=C+(w<<16&4294967295|w>>>16),w=I+(x^C^_)+g[14]+4259657740&4294967295,I=x+(w<<23&4294967295|w>>>9),w=_+(I^x^C)+g[1]+2763975236&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^x)+g[4]+1272893353&4294967295,C=_+(w<<11&4294967295|w>>>21),w=x+(C^_^I)+g[7]+4139469664&4294967295,x=C+(w<<16&4294967295|w>>>16),w=I+(x^C^_)+g[10]+3200236656&4294967295,I=x+(w<<23&4294967295|w>>>9),w=_+(I^x^C)+g[13]+681279174&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^x)+g[0]+3936430074&4294967295,C=_+(w<<11&4294967295|w>>>21),w=x+(C^_^I)+g[3]+3572445317&4294967295,x=C+(w<<16&4294967295|w>>>16),w=I+(x^C^_)+g[6]+76029189&4294967295,I=x+(w<<23&4294967295|w>>>9),w=_+(I^x^C)+g[9]+3654602809&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^x)+g[12]+3873151461&4294967295,C=_+(w<<11&4294967295|w>>>21),w=x+(C^_^I)+g[15]+530742520&4294967295,x=C+(w<<16&4294967295|w>>>16),w=I+(x^C^_)+g[2]+3299628645&4294967295,I=x+(w<<23&4294967295|w>>>9),w=_+(x^(I|~C))+g[0]+4096336452&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~x))+g[7]+1126891415&4294967295,C=_+(w<<10&4294967295|w>>>22),w=x+(_^(C|~I))+g[14]+2878612391&4294967295,x=C+(w<<15&4294967295|w>>>17),w=I+(C^(x|~_))+g[5]+4237533241&4294967295,I=x+(w<<21&4294967295|w>>>11),w=_+(x^(I|~C))+g[12]+1700485571&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~x))+g[3]+2399980690&4294967295,C=_+(w<<10&4294967295|w>>>22),w=x+(_^(C|~I))+g[10]+4293915773&4294967295,x=C+(w<<15&4294967295|w>>>17),w=I+(C^(x|~_))+g[1]+2240044497&4294967295,I=x+(w<<21&4294967295|w>>>11),w=_+(x^(I|~C))+g[8]+1873313359&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~x))+g[15]+4264355552&4294967295,C=_+(w<<10&4294967295|w>>>22),w=x+(_^(C|~I))+g[6]+2734768916&4294967295,x=C+(w<<15&4294967295|w>>>17),w=I+(C^(x|~_))+g[13]+1309151649&4294967295,I=x+(w<<21&4294967295|w>>>11),w=_+(x^(I|~C))+g[4]+4149444226&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~x))+g[11]+3174756917&4294967295,C=_+(w<<10&4294967295|w>>>22),w=x+(_^(C|~I))+g[2]+718787259&4294967295,x=C+(w<<15&4294967295|w>>>17),w=I+(C^(x|~_))+g[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(x+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+x&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const I=_-this.blockSize,g=this.C;let x=this.h,C=0;for(;C<_;){if(x==0)for(;C<=I;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<_;)if(g[x++]=E.charCodeAt(C++),x==this.blockSize){s(this,g),x=0;break}}else for(;C<_;)if(g[x++]=E[C++],x==this.blockSize){s(this,g),x=0;break}}this.h=x,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,I=0;I<4;++I)for(let g=0;g<32;g+=8)E[_++]=this.g[I]>>>g&255;return E};function i(E,_){var I=l;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=_(E)}function o(E,_){this.h=_;const I=[];let g=!0;for(let x=E.length-1;x>=0;x--){const C=E[x]|0;g&&C==_||(I[x]=C,g=!1)}this.g=I}var l={};function u(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return O(c(-E));const _=[];let I=1;for(let g=0;E>=I;g++)_[g]=E/I|0,I*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return O(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=c(Math.pow(_,8));let g=p;for(let C=0;C<E.length;C+=8){var x=Math.min(8,E.length-C);const w=parseInt(E.substring(C,C+x),_);x<8?(x=c(Math.pow(_,x)),g=g.j(x).add(c(w))):(g=g.j(I),g=g.add(c(w)))}return g}var p=u(0),v=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();let E=0,_=1;for(let I=0;I<this.g.length;I++){const g=this.i(I);E+=(g>=0?g:4294967296+g)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(b(this))return"0";if(N(this))return"-"+O(this).toString(E);const _=c(Math.pow(E,6));var I=this;let g="";for(;;){const x=P(I,_).g;I=T(I,x.j(_));let C=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=x,b(I))return C+g;for(;C.length<6;)C="0"+C;g=C+g}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function b(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=T(this,E),N(E)?-1:b(E)?0:1};function O(E){const _=E.g.length,I=[];for(let g=0;g<_;g++)I[g]=~E.g[g];return new o(I,~E.h).add(v)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),I=[];let g=0;for(let x=0;x<=_;x++){let C=g+(this.i(x)&65535)+(E.i(x)&65535),w=(C>>>16)+(this.i(x)>>>16)+(E.i(x)>>>16);g=w>>>16,C&=65535,w&=65535,I[x]=w<<16|C}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(E,_){return E.add(O(_))}t.j=function(E){if(b(this)||b(E))return p;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(this.l(k)<0&&E.l(k)<0)return c(this.m()*E.m());const _=this.g.length+E.g.length,I=[];for(var g=0;g<2*_;g++)I[g]=0;for(g=0;g<this.g.length;g++)for(let x=0;x<E.g.length;x++){const C=this.i(g)>>>16,w=this.i(g)&65535,pe=E.i(x)>>>16,ne=E.i(x)&65535;I[2*g+2*x]+=w*ne,S(I,2*g+2*x),I[2*g+2*x+1]+=C*ne,S(I,2*g+2*x+1),I[2*g+2*x+1]+=w*pe,S(I,2*g+2*x+1),I[2*g+2*x+2]+=C*pe,S(I,2*g+2*x+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function S(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function A(E,_){this.g=E,this.h=_}function P(E,_){if(b(_))throw Error("division by zero");if(b(E))return new A(p,p);if(N(E))return _=P(O(E),_),new A(O(_.g),O(_.h));if(N(_))return _=P(E,O(_)),new A(O(_.g),_.h);if(E.g.length>30){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=v,g=_;g.l(E)<=0;)I=j(I),g=j(g);var x=F(I,1),C=F(g,1);for(g=F(g,2),I=F(I,2);!b(g);){var w=C.add(g);w.l(E)<=0&&(x=x.add(I),C=w),g=F(g,1),I=F(I,1)}return _=T(E,x.j(_)),new A(x,_)}for(x=p;E.l(_)>=0;){for(I=Math.max(1,Math.floor(E.m()/_.m())),g=Math.ceil(Math.log(I)/Math.LN2),g=g<=48?1:Math.pow(2,g-48),C=c(I),w=C.j(_);N(w)||w.l(E)>0;)I-=g,C=c(I),w=C.j(_);b(C)&&(C=v),x=x.add(C),E=T(E,w)}return new A(x,E)}t.B=function(E){return P(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let g=0;g<_;g++)I[g]=this.i(g)&E.i(g);return new o(I,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let g=0;g<_;g++)I[g]=this.i(g)|E.i(g);return new o(I,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),I=[];for(let g=0;g<_;g++)I[g]=this.i(g)^E.i(g);return new o(I,this.h^E.h)};function j(E){const _=E.g.length+1,I=[];for(let g=0;g<_;g++)I[g]=E.i(g)<<1|E.i(g-1)>>>31;return new o(I,E.h)}function F(E,_){const I=_>>5;_%=32;const g=E.g.length-I,x=[];for(let C=0;C<g;C++)x[C]=_>0?E.i(C+I)>>>_|E.i(C+I+1)<<32-_:E.i(C+I);return new o(x,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Rw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Es=o}).apply(typeof oy<"u"?oy:typeof self<"u"?self:typeof window<"u"?window:{});var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bw,Ho,Nw,Kl,Cd,Pw,Dw,Ow;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cl=="object"&&Cl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in d))break e;d=d[R]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&d.push([y,h[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,R,D){for(var B=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)B[_e-2]=arguments[_e];return h.prototype[R].apply(y,B)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const h=a.length;if(h>0){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function b(a,h){for(let y=1;y<arguments.length;y++){const R=arguments[y];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const D=R.length||0;a.length=d+D;for(let B=0;B<D;B++)a[d+B]=R[B]}else a.push(R)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){o.setTimeout(()=>{throw a},0)}function T(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class S{constructor(){this.h=this.g=null}add(h,d){const y=A.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var A=new N(()=>new P,a=>a.reset());class P{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,E=new S,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(I)}};function I(){for(var a;a=T();){try{a.h.call(a.g)}catch(d){O(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function g(){this.u=this.u,this.C=this.C}g.prototype.u=!1,g.prototype.dispose=function(){this.u||(this.u=!0,this.N())},g.prototype[Symbol.dispose]=function(){this.dispose()},g.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function pe(a,h){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(pe,x),pe.prototype.init=function(a,h){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&pe.Z.h.call(this)},pe.prototype.h=function(){pe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),Ce=0;function Me(a,h,d,y,R){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=R,this.key=++Ce,this.da=this.fa=!1}function U(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Z(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function te(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function G(a){const h={};for(const d in a)h[d]=a[d];return h}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ht(a,h){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)a[d]=y[d];for(let D=0;D<Ne.length;D++)d=Ne[D],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function Ge(a){this.src=a,this.g={},this.h=0}Ge.prototype.add=function(a,h,d,y,R){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const B=Xe(a,h,y,R);return B>-1?(h=a[B],d||(h.fa=!1)):(h=new Me(h,this.src,D,!!y,R),h.fa=d,a.push(h)),h};function Dt(a,h){const d=h.type;if(d in a.g){var y=a.g[d],R=Array.prototype.indexOf.call(y,h,void 0),D;(D=R>=0)&&Array.prototype.splice.call(y,R,1),D&&(U(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Xe(a,h,d,y){for(let R=0;R<a.length;++R){const D=a[R];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==y)return R}return-1}var St="closure_lm_"+(Math.random()*1e6|0),Pn={};function sr(a,h,d,y,R){if(Array.isArray(h)){for(let D=0;D<h.length;D++)sr(a,h[D],d,y,R);return null}return d=z(d),a&&a[ne]?a.J(h,d,l(y)?!!y.capture:!1,R):xr(a,h,d,!1,y,R)}function xr(a,h,d,y,R,D){if(!h)throw Error("Invalid event type");const B=l(R)?!!R.capture:!!R;let _e=Jt(a);if(_e||(a[St]=_e=new Ge(a)),d=_e.add(h,d,y,B,D),d.proxy)return d;if(y=je(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)C||(R=B),R===void 0&&(R=!1),a.addEventListener(h.toString(),y,R);else if(a.attachEvent)a.attachEvent(lt(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function je(){function a(d){return h.call(a.src,a.listener,d)}const h=Ft;return a}function Ut(a,h,d,y,R){if(Array.isArray(h))for(var D=0;D<h.length;D++)Ut(a,h[D],d,y,R);else y=l(y)?!!y.capture:!!y,d=z(d),a&&a[ne]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=Xe(h,d,y,R),d>-1&&(U(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Jt(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Xe(h,d,y,R)),(d=a>-1?h[a]:null)&&we(d))}function we(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ne])Dt(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(lt(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=Jt(h))?(Dt(d,a),d.h==0&&(d.src=null,h[St]=null)):U(a)}}}function lt(a){return a in Pn?Pn[a]:Pn[a]="on"+a}function Ft(a,h){if(a.da)a=!0;else{h=new pe(h,this);const d=a.listener,y=a.ha||a.src;a.fa&&we(a),a=d.call(y,h)}return a}function Jt(a){return a=a[St],a instanceof Ge?a:null}var M="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[M]||(a[M]=function(h){return a.handleEvent(h)}),a[M])}function W(){g.call(this),this.i=new Ge(this),this.M=this,this.G=null}p(W,g),W.prototype[ne]=!0,W.prototype.removeEventListener=function(a,h,d,y){Ut(this,a,h,d,y)};function oe(a,h){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var R=h;h=new x(y,a),ht(h,R)}R=!0;let D,B;if(d)for(B=d.length-1;B>=0;B--)D=h.g=d[B],R=me(D,y,!0,h)&&R;if(D=h.g=a,R=me(D,y,!0,h)&&R,R=me(D,y,!1,h)&&R,d)for(B=0;B<d.length;B++)D=h.g=d[B],R=me(D,y,!1,h)&&R}W.prototype.N=function(){if(W.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let y=0;y<d.length;y++)U(d[y]);delete a.g[h],a.h--}}this.G=null},W.prototype.J=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},W.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function me(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let D=0;D<h.length;++D){const B=h[D];if(B&&!B.da&&B.capture==d){const _e=B.listener,kt=B.ha||B.src;B.fa&&Dt(a.i,B),R=_e.call(kt,y)!==!1&&R}}return R&&!y.defaultPrevented}function st(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function dt(a){a.g=st(()=>{a.g=null,a.i&&(a.i=!1,dt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Fe extends g{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(a){g.call(this),this.h=a,this.g={}}p(Ze,g);var _t=[];function In(a){Z(a.g,function(h,d){this.g.hasOwnProperty(d)&&we(h)},a),a.g={}}Ze.prototype.N=function(){Ze.Z.N.call(this),In(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=o.JSON.stringify,Ot=o.JSON.parse,Dn=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ir(){}function or(){}var fn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function se(){x.call(this,"d")}p(se,x);function ue(){x.call(this,"c")}p(ue,x);var Ee={},$e=null;function We(){return $e=$e||new W}Ee.Ia="serverreachability";function H(a){x.call(this,Ee.Ia,a)}p(H,x);function K(a){const h=We();oe(h,new H(h))}Ee.STAT_EVENT="statevent";function X(a,h){x.call(this,Ee.STAT_EVENT,a),this.stat=h}p(X,x);function J(a){const h=We();oe(h,new X(h,a))}Ee.Ja="timingevent";function ee(a,h){x.call(this,Ee.Ja,a),this.size=h}p(ee,x);function ke(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ie(){this.g=!0}ie.prototype.ua=function(){this.g=!1};function ge(a,h,d,y,R,D){a.info(function(){if(a.g)if(D){var B="",_e=D.split("&");for(let ze=0;ze<_e.length;ze++){var kt=_e[ze].split("=");if(kt.length>1){const Vt=kt[0];kt=kt[1];const lr=Vt.split("_");B=lr.length>=2&&lr[1]=="type"?B+(Vt+"="+kt+"&"):B+(Vt+"=redacted&")}}}else B=null;else B=D;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+h+`
`+d+`
`+B})}function ye(a,h,d,y,R,D,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+h+`
`+d+`
`+D+" "+B})}function Te(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+De(a,d)+(y?" "+y:"")})}function Pe(a,h){a.info(function(){return"TIMEOUT: "+h})}ie.prototype.info=function(){};function De(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var R=y[0];if(R!="noop"&&R!="stop"&&R!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return et(D)}catch{return h}}var Be={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Oe;function At(){}p(At,ir),At.prototype.g=function(){return new XMLHttpRequest},Oe=new At;function on(a){return encodeURIComponent(String(a))}function qn(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function tt(a,h,d,y){this.j=a,this.i=h,this.l=d,this.S=y||1,this.V=new Ze(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $t}function $t(){this.i=null,this.g="",this.h=!1}var On={},ft={};function vt(a,h,d){a.M=1,a.A=tl(ar(h)),a.u=d,a.R=!0,Za(a,null)}function Za(a,h){a.F=Date.now(),el(a),a.B=ar(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),lm(d.i,"t",y),a.C=0,d=a.j.L,a.h=new $t,a.g=Am(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Fe(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,y=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(_t[0]=R.toString()),R=_t);for(let D=0;D<R.length;D++){const B=sr(d,R[D],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?G(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),K(),ge(a.i,a.v,a.B,a.l,a.S,a.u)}tt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Qr(a)==3?h.j():this.Y(a)},tt.prototype.Y=function(a){try{if(a==this.g)e:{const _e=Qr(this.g),kt=this.g.ya(),ze=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||mm(this.g)))){this.K||_e!=4||kt==7||(kt==8||ze<=0?K(3):K(2)),Rc(this);var h=this.g.ca();this.X=h;var d=js(this);if(this.o=h==200,ye(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,R=this.g;if((y=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(y)){var D=y;break t}}D=null}if(a=D)Te(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bc(this,a);else{this.o=!1,this.m=3,J(12),Us(this),wo(this);break e}}if(this.R){a=!0;let Vt;for(;!this.K&&this.C<d.length;)if(Vt=j1(this,d),Vt==ft){_e==4&&(this.m=4,J(14),a=!1),Te(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==On){this.m=4,J(15),Te(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Te(this.i,this.l,Vt,null),bc(this,Vt);if(Jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,J(16),a=!1),this.o=this.o&&a,!a)Te(this.i,this.l,d,"[Invalid Chunked Response]"),Us(this),wo(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),jc(B),B.P=!0,J(11))}}else Te(this.i,this.l,d,null),bc(this,d);_e==4&&Us(this),this.o&&!this.K&&(_e==4?Tm(this.j,this):(this.o=!1,el(this)))}else X1(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,J(12)):(this.m=0,J(13)),Us(this),wo(this)}}}catch{}finally{}};function js(a){if(!Jp(a))return a.g.la();const h=mm(a.g);if(h==="")return"";let d="";const y=h.length,R=Qr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Us(a),wo(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<y;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(R&&D==y-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Jp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function j1(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?ft:(d=Number(h.substring(d,y)),isNaN(d)?On:(y+=1,y+d>h.length?ft:(h=h.slice(y,y+d),a.C=y+d,h)))}tt.prototype.cancel=function(){this.K=!0,Us(this)};function el(a){a.T=Date.now()+a.H,Yp(a,a.H)}function Yp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ke(c(a.aa,a),h)}function Rc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}tt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Pe(this.i,this.B),this.M!=2&&(K(),J(17)),Us(this),this.m=2,wo(this)):Yp(this,this.T-a)};function wo(a){a.j.I==0||a.K||Tm(a.j,a)}function Us(a){Rc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,In(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function bc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Nc(d.h,a))){if(!a.L&&Nc(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ol(d),sl(d);else break e;Lc(d),J(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ke(c(d.Va,d),6e3));em(d.h)<=1&&d.ta&&(d.ta=void 0)}else $s(d,11)}else if((a.L||d.g==a)&&ol(d),!w(h))for(R=d.Ba.g.parse(h),h=0;h<R.length;h++){let ze=R[h];const Vt=ze[0];if(!(Vt<=d.K))if(d.K=Vt,ze=ze[1],d.I==2)if(ze[0]=="c"){d.M=ze[1],d.ba=ze[2];const lr=ze[3];lr!=null&&(d.ka=lr,d.j.info("VER="+d.ka));const zs=ze[4];zs!=null&&(d.za=zs,d.j.info("SVER="+d.za));const Jr=ze[5];Jr!=null&&typeof Jr=="number"&&Jr>0&&(y=1.5*Jr,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Yr=a.g;if(Yr){const ll=Yr.g?Yr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ll){var D=y.h;D.g||ll.indexOf("spdy")==-1&&ll.indexOf("quic")==-1&&ll.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Pc(D,D.h),D.h=null))}if(y.G){const Uc=Yr.g?Yr.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(y.wa=Uc,Ke(y.J,y.G,Uc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var B=a;if(y.na=xm(y,y.L?y.ba:null,y.W),B.L){tm(y.h,B);var _e=B,kt=y.O;kt&&(_e.H=kt),_e.D&&(Rc(_e),el(_e)),y.g=B}else wm(y);d.i.length>0&&il(d)}else ze[0]!="stop"&&ze[0]!="close"||$s(d,7);else d.I==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?$s(d,7):Mc(d):ze[0]!="noop"&&d.l&&d.l.qa(ze),d.A=0)}}K(4)}catch{}}var U1=class{constructor(a,h){this.g=a,this.map=h}};function Xp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function em(a){return a.h?1:a.g?a.g.size:0}function Nc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Pc(a,h){a.g?a.g.add(h):a.h=h}function tm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Xp.prototype.cancel=function(){if(this.i=nm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return k(a.i)}var rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F1(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let R,D=null;y>=0?(R=a[d].substring(0,y),D=a[d].substring(y+1)):R=a[d],h(R,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Wr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Wr?(this.l=a.l,Eo(this,a.j),this.o=a.o,this.g=a.g,To(this,a.u),this.h=a.h,Dc(this,um(a.i)),this.m=a.m):a&&(h=String(a).match(rm))?(this.l=!1,Eo(this,h[1]||"",!0),this.o=Io(h[2]||""),this.g=Io(h[3]||"",!0),To(this,h[4]),this.h=Io(h[5]||"",!0),Dc(this,h[6]||"",!0),this.m=Io(h[7]||"")):(this.l=!1,this.i=new xo(null,this.l))}Wr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(So(h,sm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(So(h,sm,!0),"@"),a.push(on(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(So(d,d.charAt(0)=="/"?B1:z1,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",So(d,q1)),a.join("")},Wr.prototype.resolve=function(a){const h=ar(this);let d=!!a.j;d?Eo(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var y=a.h;if(d)To(h,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var R=h.h.lastIndexOf("/");R!=-1&&(y=h.h.slice(0,R+1)+y)}if(R=y,R==".."||R==".")y="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){y=R.lastIndexOf("/",0)==0,R=R.split("/");const D=[];for(let B=0;B<R.length;){const _e=R[B++];_e=="."?y&&B==R.length&&D.push(""):_e==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),y&&B==R.length&&D.push("")):(D.push(_e),y=!0)}y=D.join("/")}else y=R}return d?h.h=y:d=a.i.toString()!=="",d?Dc(h,um(a.i)):d=!!a.m,d&&(h.m=a.m),h};function ar(a){return new Wr(a)}function Eo(a,h,d){a.j=d?Io(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function To(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Dc(a,h,d){h instanceof xo?(a.i=h,G1(a.i,a.l)):(d||(h=So(h,H1)),a.i=new xo(h,a.l))}function Ke(a,h,d){a.i.set(h,d)}function tl(a){return Ke(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Io(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function So(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,$1),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sm=/[#\/\?@]/g,z1=/[#\?:]/g,B1=/[#\?]/g,H1=/[#\?@]/g,q1=/#/g;function xo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Fs(a){a.g||(a.g=new Map,a.h=0,a.i&&F1(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=xo.prototype,t.add=function(a,h){Fs(this),this.i=null,a=wi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function im(a,h){Fs(a),h=wi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function om(a,h){return Fs(a),h=wi(a,h),a.g.has(h)}t.forEach=function(a,h){Fs(this),this.g.forEach(function(d,y){d.forEach(function(R){a.call(h,R,y,this)},this)},this)};function am(a,h){Fs(a);let d=[];if(typeof h=="string")om(a,h)&&(d=d.concat(a.g.get(wi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Fs(this),this.i=null,a=wi(this,a),om(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=am(this,a),a.length>0?String(a[0]):h):h};function lm(a,h,d){im(a,h),d.length>0&&(a.i=null,a.g.set(wi(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var d=h[y];const R=on(d);d=am(this,d);for(let D=0;D<d.length;D++){let B=R;d[D]!==""&&(B+="="+on(d[D])),a.push(B)}}return this.i=a.join("&")};function um(a){const h=new xo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function wi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function G1(a,h){h&&!a.j&&(Fs(a),a.i=null,a.g.forEach(function(d,y){const R=y.toLowerCase();y!=R&&(im(this,y),lm(this,R,d))},a)),a.j=h}function W1(a,h){const d=new ie;if(o.Image){const y=new Image;y.onload=f(Kr,d,"TestLoadImage: loaded",!0,h,y),y.onerror=f(Kr,d,"TestLoadImage: error",!1,h,y),y.onabort=f(Kr,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=f(Kr,d,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function K1(a,h){const d=new ie,y=new AbortController,R=setTimeout(()=>{y.abort(),Kr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(R),D.ok?Kr(d,"TestPingServer: ok",!0,h):Kr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Kr(d,"TestPingServer: error",!1,h)})}function Kr(a,h,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function Q1(){this.g=new Dn}function Oc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Oc,ir),Oc.prototype.g=function(){return new nl(this.i,this.h)};function nl(a,h){W.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(nl,W),t=nl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ko(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ko(this)),this.g&&(this.readyState=3,ko(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function cm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ao(this):ko(this),this.readyState==3&&cm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ao(this))},t.Na=function(a){this.g&&(this.response=a,Ao(this))},t.ga=function(){this.g&&Ao(this)};function Ao(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ko(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ko(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hm(a){let h="";return Z(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function Vc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=hm(d),typeof a=="string"?d!=null&&on(d):Ke(a,h,d))}function ut(a){W.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ut,W);var J1=/^https?$/i,Y1=["POST","PUT"];t=ut.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oe.g(),this.g.onreadystatechange=v(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){dm(this,D);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())d.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Y1,h,void 0)>=0)||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of d)this.g.setRequestHeader(D,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){dm(this,D)}};function dm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,fm(a),rl(a)}function fm(a){a.A||(a.A=!0,oe(a,"complete"),oe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,oe(this,"complete"),oe(this,"abort"),rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rl(this,!0)),ut.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?pm(this):this.Xa())},t.Xa=function(){pm(this)};function pm(a){if(a.h&&typeof i<"u"){if(a.v&&Qr(a)==4)setTimeout(a.Ca.bind(a),0);else if(oe(a,"readystatechange"),Qr(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=D===0){let B=String(a.D).match(rm)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!J1.test(B?B.toLowerCase():"")}d=y}if(d)oe(a,"complete"),oe(a,"success");else{a.o=6;try{var R=Qr(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",fm(a)}}finally{rl(a)}}}}function rl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||oe(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ot(h)}};function mm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function X1(a){const h={};a=(a.g&&Qr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var d=qn(a[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[R]||[];h[R]=D,D.push(d)}te(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Co(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function gm(a){this.za=0,this.i=[],this.j=new ie,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Co("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Co("baseRetryDelayMs",5e3,a),this.Za=Co("retryDelaySeedMs",1e4,a),this.Ta=Co("forwardChannelMaxRetries",2,a),this.va=Co("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Xp(a&&a.concurrentRequestLimit),this.Ba=new Q1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=gm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,y){J(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=xm(this,null,this.W),il(this)};function Mc(a){if(ym(a),a.I==3){var h=a.V++,d=ar(a.J);if(Ke(d,"SID",a.M),Ke(d,"RID",h),Ke(d,"TYPE","terminate"),Ro(a,d),h=new tt(a,a.j,h),h.M=2,h.A=tl(ar(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Am(h.j,null),h.g.ea(h.A)),h.F=Date.now(),el(h)}Sm(a)}function sl(a){a.g&&(jc(a),a.g.cancel(),a.g=null)}function ym(a){sl(a),a.v&&(o.clearTimeout(a.v),a.v=null),ol(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function il(a){if(!Zp(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),F||(j(),F=!0),E.add(h,a),a.D=0}}function Z1(a,h){return em(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ke(c(a.Ea,a,h),Im(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new tt(this,this.j,a);let D=this.o;if(this.U&&(D?(D=G(D),ht(D,this.U)):D=this.U),this.u!==null||this.R||(R.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=vm(this,R,h),d=ar(this.J),Ke(d,"RID",a),Ke(d,"CVER",22),this.G&&Ke(d,"X-HTTP-Session-Id",this.G),Ro(this,d),D&&(this.R?h="headers="+on(hm(D))+"&"+h:this.u&&Vc(d,this.u,D)),Pc(this.h,R),this.Ra&&Ke(d,"TYPE","init"),this.S?(Ke(d,"$req",h),Ke(d,"SID","null"),R.U=!0,vt(R,d,null)):vt(R,d,h),this.I=2}}else this.I==3&&(a?_m(this,a):this.i.length==0||Zp(this.h)||_m(this))};function _m(a,h){var d;h?d=h.l:d=a.V++;const y=ar(a.J);Ke(y,"SID",a.M),Ke(y,"RID",d),Ke(y,"AID",a.K),Ro(a,y),a.u&&a.o&&Vc(y,a.u,a.o),d=new tt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=vm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Pc(a.h,d),vt(d,y,h)}function Ro(a,h){a.H&&Z(a.H,function(d,y){Ke(h,y,d)}),a.l&&Z({},function(d,y){Ke(h,y,d)})}function vm(a,h,d){d=Math.min(a.i.length,d);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var R=a.i;let _e=-1;for(;;){const kt=["count="+d];_e==-1?d>0?(_e=R[0].g,kt.push("ofs="+_e)):_e=0:kt.push("ofs="+_e);let ze=!0;for(let Vt=0;Vt<d;Vt++){var D=R[Vt].g;const lr=R[Vt].map;if(D-=_e,D<0)_e=Math.max(0,R[Vt].g-100),ze=!1;else try{D="req"+D+"_"||"";try{var B=lr instanceof Map?lr:Object.entries(lr);for(const[zs,Jr]of B){let Yr=Jr;l(Jr)&&(Yr=et(Jr)),kt.push(D+zs+"="+encodeURIComponent(Yr))}}catch(zs){throw kt.push(D+"type="+encodeURIComponent("_badmap")),zs}}catch{y&&y(lr)}}if(ze){B=kt.join("&");break e}}B=void 0}return a=a.i.splice(0,d),h.G=a,B}function wm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),F||(j(),F=!0),E.add(h,a),a.A=0}}function Lc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ke(c(a.Da,a),Im(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Em(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ke(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,J(10),sl(this),Em(this))};function jc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Em(a){a.g=new tt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=ar(a.na);Ke(h,"RID","rpc"),Ke(h,"SID",a.M),Ke(h,"AID",a.K),Ke(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ke(h,"TO",a.ia),Ke(h,"TYPE","xmlhttp"),Ro(a,h),a.u&&a.o&&Vc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=tl(ar(h)),d.u=null,d.R=!0,Za(d,a)}t.Va=function(){this.C!=null&&(this.C=null,sl(this),Lc(this),J(19))};function ol(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Tm(a,h){var d=null;if(a.g==h){ol(a),jc(a),a.g=null;var y=2}else if(Nc(a.h,h))d=h.G,tm(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var R=a.D;y=We(),oe(y,new ee(y,d)),il(a)}else wm(a);else if(R=h.m,R==3||R==0&&h.X>0||!(y==1&&Z1(a,h)||y==2&&Lc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),R){case 1:$s(a,5);break;case 4:$s(a,10);break;case 3:$s(a,6);break;default:$s(a,2)}}}function Im(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function $s(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),y=a.Ua;const R=!y;y=new Wr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Eo(y,"https"),tl(y),R?W1(y.toString(),d):K1(y.toString(),d)}else J(2);a.I=0,a.l&&a.l.pa(h),Sm(a),ym(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Sm(a){if(a.I=0,a.ja=[],a.l){const h=nm(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ja,h),b(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function xm(a,h,d){var y=d instanceof Wr?ar(d):new Wr(d);if(y.g!="")h&&(y.g=h+"."+y.g),To(y,y.u);else{var R=o.location;y=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const D=new Wr(null);y&&Eo(D,y),h&&(D.g=h),R&&To(D,R),d&&(D.h=d),y=D}return d=a.G,h=a.wa,d&&h&&Ke(y,d,h),Ke(y,"VER",a.ka),Ro(a,y),y}function Am(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ut(new Oc({ab:d})):new ut(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function km(){}t=km.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function al(){}al.prototype.g=function(a,h){return new Sn(a,h)};function Sn(a,h){W.call(this),this.g=new gm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ei(this)}p(Sn,W),Sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){Mc(this.g)},Sn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=et(a),a=d);h.i.push(new U1(h.Ya++,a)),h.I==3&&il(h)},Sn.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,Sn.Z.N.call(this)};function Cm(a){se.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Cm,se);function Rm(){ue.call(this),this.status=1}p(Rm,ue);function Ei(a){this.g=a}p(Ei,km),Ei.prototype.ra=function(){oe(this.g,"a")},Ei.prototype.qa=function(a){oe(this.g,new Cm(a))},Ei.prototype.pa=function(a){oe(this.g,new Rm)},Ei.prototype.oa=function(){oe(this.g,"b")},al.prototype.createWebChannel=al.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,Ow=function(){return new al},Dw=function(){return We()},Pw=Ee,Cd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Be.NO_ERROR=0,Be.TIMEOUT=8,Be.HTTP_ERROR=6,Kl=Be,xt.COMPLETE="complete",Nw=xt,or.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",W.prototype.listen=W.prototype.J,Ho=or,ut.prototype.listenOnce=ut.prototype.K,ut.prototype.getLastError=ut.prototype.Ha,ut.prototype.getLastErrorCode=ut.prototype.ya,ut.prototype.getStatus=ut.prototype.ca,ut.prototype.getResponseJson=ut.prototype.La,ut.prototype.getResponseText=ut.prototype.la,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Fa,bw=ut}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po="12.13.0";function sR(t){po=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ui=new Kf("@firebase/firestore");function Ii(){return ui.logLevel}function q(t,...e){if(ui.logLevel<=Ae.DEBUG){const n=e.map(sp);ui.debug(`Firestore (${po}): ${t}`,...n)}}function Br(t,...e){if(ui.logLevel<=Ae.ERROR){const n=e.map(sp);ui.error(`Firestore (${po}): ${t}`,...n)}}function ci(t,...e){if(ui.logLevel<=Ae.WARN){const n=e.map(sp);ui.warn(`Firestore (${po}): ${t}`,...n)}}function sp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Vw(t,r,n)}function Vw(t,e,n){let r=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Br(r),new Error(r)}function Ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Vw(e,s,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(en.UNAUTHENTICATED))}shutdown(){}}class oR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aR{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Ts;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ts,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ts)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string",31837,{l:r}),new Mw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class lR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=en.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class uR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(en.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ay{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ve(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ay(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ay(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Rd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return vh(s)===vh(i)?Ie(s,i):vh(s)?1:-1}return Ie(t.length,e.length)}const dR=55296,fR=57343;function vh(t){const e=t.charCodeAt(0);return e>=dR&&e<=fR}function io(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="__name__";class hr{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=hr.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ie(e.length,n.length)}static compareSegments(e,n){const r=hr.isNumericId(e),s=hr.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?hr.extractNumericId(e).compare(hr.extractNumericId(n)):Rd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Es.fromString(e.substring(4,e.length-2))}}class He extends hr{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const pR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends hr{construct(e,n,r){return new Gt(e,n,r)}static isValidIdentifier(e){return pR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ly}static keyField(){return new Gt([ly])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(He.fromString(e))}static fromName(e){return new re(He.fromString(e).popFirst(5))}static empty(){return new re(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t,e,n){if(!n)throw new Q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mR(t,e,n,r){if(e===!0&&r===!0)throw new Q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uy(t){if(!re.isDocumentKey(t))throw new Q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cy(t){if(re.isDocumentKey(t))throw new Q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function fc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function Aa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fc(t);throw new Q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function It(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ba(t,e){if(!jw(t))throw new Q(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=-62135596800,dy=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*dy);return new Je(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hy)throw new Q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dy}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ba(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:It("string",Je._jsonSchemaVersion),seconds:It("number"),nanoseconds:It("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new Je(0,0))}static max(){return new he(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ka=-1;function gR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new ks(s,re.empty(),e)}function yR(t){return new ks(t.readTime,t.key,ka)}class ks{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ks(he.min(),re.empty(),ka)}static max(){return new ks(he.max(),re.empty(),ka)}}function _R(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==vR)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ER(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function go(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}pc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=-1;function mc(t){return t==null}function Nu(t){return t===0&&1/t==-1/0}function TR(t){return typeof t=="number"&&Number.isInteger(t)&&!Nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="";function IR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fy(e)),e=SR(t.get(n),e);return fy(e)}function SR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Uw:n+="";break;default:n+=i}}return n}function fy(t){return t+Uw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.comparator=e,this.root=n||qt.EMPTY}insert(e,n){return new rt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rl(this.root,e,this.comparator,!0)}}class Rl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??qt.RED,this.left=s??qt.EMPTY,this.right=i??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new qt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return qt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new qt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new my(this.data.getIterator())}getIteratorFrom(e){return new my(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class my{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new Jn([])}unionWith(e){let n=new Nt(Gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $w extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $w("Invalid base64 string: "+i):i}}(e);return new Qt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const xR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cs(t){if(Ve(!!t,39018),typeof t=="string"){let e=0;const n=xR.exec(t);if(Ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pt(t.seconds),nanos:pt(t.nanos)}}function pt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rs(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="server_timestamp",Bw="__type__",Hw="__previous_value__",qw="__local_write_time__";function ap(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Bw])==null?void 0:r.stringValue)===zw}function gc(t){const e=t.mapValue.fields[Hw];return ap(e)?gc(e):e}function Ca(t){const e=Cs(t.mapValue.fields[qw].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,s,i,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const Pu="(default)";class Ra{constructor(e,n){this.projectId=e,this.database=n||Pu}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database===Pu}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}function kR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="__type__",CR="__max__",bl={mapValue:{}},Ww="__vector__",Du="value";function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ap(t)?4:bR(t)?9007199254740991:RR(t)?10:11:le(28295,{value:t})}function Er(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cs(s.timestampValue),l=Cs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rs(s.bytesValue).isEqual(Rs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return pt(s.geoPointValue.latitude)===pt(i.geoPointValue.latitude)&&pt(s.geoPointValue.longitude)===pt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return pt(s.integerValue)===pt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=pt(s.doubleValue),l=pt(i.doubleValue);return o===l?Nu(o)===Nu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return io(t.arrayValue.values||[],e.arrayValue.values||[],Er);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(py(o)!==py(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Er(o[u],l[u])))return!1;return!0}(t,e);default:return le(52216,{left:t})}}function ba(t,e){return(t.values||[]).find(n=>Er(n,e))!==void 0}function oo(t,e){if(t===e)return 0;const n=bs(t),r=bs(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=pt(i.integerValue||i.doubleValue),u=pt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return gy(t.timestampValue,e.timestampValue);case 4:return gy(Ca(t),Ca(e));case 5:return Rd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Rs(i),u=Rs(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=Ie(l[c],u[c]);if(f!==0)return f}return Ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ie(pt(i.latitude),pt(o.latitude));return l!==0?l:Ie(pt(i.longitude),pt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var v,k,b,N;const l=i.fields||{},u=o.fields||{},c=(v=l[Du])==null?void 0:v.arrayValue,f=(k=u[Du])==null?void 0:k.arrayValue,p=Ie(((b=c==null?void 0:c.values)==null?void 0:b.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:yy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===bl.mapValue&&o===bl.mapValue)return 0;if(i===bl.mapValue)return 1;if(o===bl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const v=Rd(u[p],f[p]);if(v!==0)return v;const k=oo(l[u[p]],c[f[p]]);if(k!==0)return k}return Ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function gy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Cs(t),r=Cs(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function yy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=oo(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function ao(t){return bd(t)}function bd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=bd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bd(n.fields[o])}`;return s+"}"}(t.mapValue):le(61005,{value:t})}function Ql(t){switch(bs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(t);return e?16+Ql(e):16;case 5:return 2*t.stringValue.length;case 6:return Rs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ql(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return gi(r.fields,(i,o)=>{s+=i.length+Ql(o)}),s}(t.mapValue);default:throw le(13486,{value:t})}}function _y(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nd(t){return!!t&&"integerValue"in t}function lp(t){return!!t&&"arrayValue"in t}function vy(t){return!!t&&"nullValue"in t}function wy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jl(t){return!!t&&"mapValue"in t}function RR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Gw])==null?void 0:r.stringValue)===Ww}function ra(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return gi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ra(t.arrayValue.values[n]);return e}return{...t}}function bR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.value=e}static empty(){return new jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ra(n)}setAll(e){let n=Gt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ra(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Jl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new jn(ra(this.value))}}function Kw(t){const e=[];return gi(t.fields,(n,r)=>{const s=new Gt([n]);if(Jl(r)){const i=Kw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nn(e,0,he.min(),he.min(),he.min(),jn.empty(),0)}static newFoundDocument(e,n,r,s){return new nn(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new nn(e,2,n,he.min(),he.min(),jn.empty(),0)}static newUnknownDocument(e,n){return new nn(e,3,n,he.min(),he.min(),jn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ou{constructor(e,n){this.position=e,this.inclusive=n}}function Ey(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=oo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Er(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Na{constructor(e,n="asc"){this.field=e,this.dir=n}}function NR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Qw{}class Tt extends Qw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DR(e,n,r):n==="array-contains"?new MR(e,r):n==="in"?new LR(e,r):n==="not-in"?new jR(e,r):n==="array-contains-any"?new UR(e,r):new Tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OR(e,r):new VR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(oo(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(oo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends Qw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new rr(e,n)}matches(e){return Jw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jw(t){return t.op==="and"}function Yw(t){return PR(t)&&Jw(t)}function PR(t){for(const e of t.filters)if(e instanceof rr)return!1;return!0}function Pd(t){if(t instanceof Tt)return t.field.canonicalString()+t.op.toString()+ao(t.value);if(Yw(t))return t.filters.map(e=>Pd(e)).join(",");{const e=t.filters.map(n=>Pd(n)).join(",");return`${t.op}(${e})`}}function Xw(t,e){return t instanceof Tt?function(r,s){return s instanceof Tt&&r.op===s.op&&r.field.isEqual(s.field)&&Er(r.value,s.value)}(t,e):t instanceof rr?function(r,s){return s instanceof rr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Xw(o,s.filters[l]),!0):!1}(t,e):void le(19439)}function Zw(t){return t instanceof Tt?function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`}(t):t instanceof rr?function(n){return n.op.toString()+" {"+n.getFilters().map(Zw).join(" ,")+"}"}(t):"Filter"}class DR extends Tt{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class OR extends Tt{constructor(e,n){super(e,"in",n),this.keys=eE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VR extends Tt{constructor(e,n){super(e,"not-in",n),this.keys=eE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class MR extends Tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lp(n)&&ba(n.arrayValue,this.value)}}class LR extends Tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ba(this.value.arrayValue,n)}}class jR extends Tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ba(this.value.arrayValue,n)}}class UR extends Tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ba(this.value.arrayValue,r))}}/**
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
 */class FR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Iy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new FR(t,e,n,r,s,i,o)}function up(t){const e=fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ao(r)).join(",")),e.Te=n}return e.Te}function cp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ty(t.startAt,e.startAt)&&Ty(t.endAt,e.endAt)}function Dd(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function $R(t,e,n,r,s,i,o,l){return new yo(t,e,n,r,s,i,o,l)}function tE(t){return new yo(t)}function Sy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zR(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function nE(t){return t.collectionGroup!==null}function sa(t){const e=fe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Nt(Gt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Na(i,r))}),n.has(Gt.keyField().canonicalString())||e.Ie.push(new Na(Gt.keyField(),r))}return e.Ie}function yr(t){const e=fe(t);return e.Ee||(e.Ee=BR(e,sa(t))),e.Ee}function BR(t,e){if(t.limitType==="F")return Iy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Na(s.field,i)});const n=t.endAt?new Ou(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ou(t.startAt.position,t.startAt.inclusive):null;return Iy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Od(t,e){const n=t.filters.concat([e]);return new yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function HR(t,e){const n=t.explicitOrderBy.concat([e]);return new yo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Vu(t,e,n){return new yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yc(t,e){return cp(yr(t),yr(e))&&t.limitType===e.limitType}function rE(t){return`${up(yr(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zw(s)).join(", ")}]`),mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ao(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ao(s)).join(",")),`Target(${r})`}(yr(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of sa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,sa(r),s)||r.endAt&&!function(o,l,u){const c=Ey(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,sa(r),s))}(t,e)}function qR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sE(t){return(e,n)=>{let r=!1;for(const s of sa(t)){const i=GR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GR(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?oo(u,c):le(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Fw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=new rt(re.comparator);function Hr(){return WR}const iE=new rt(re.comparator);function qo(...t){let e=iE;for(const n of t)e=e.insert(n.key,n);return e}function oE(t){let e=iE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qs(){return ia()}function aE(){return ia()}function ia(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const KR=new rt(re.comparator),QR=new Nt(re.comparator);function Se(...t){let e=QR;for(const n of t)e=e.add(n);return e}const JR=new Nt(Ie);function YR(){return JR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nu(e)?"-0":e}}function lE(t){return{integerValue:""+t}}function XR(t,e){return TR(e)?lE(e):hp(t,e)}/**
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
 */class vc{constructor(){this._=void 0}}function ZR(t,e,n){return t instanceof Pa?function(s,i){const o={fields:{[Bw]:{stringValue:zw},[qw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ap(i)&&(i=gc(i)),i&&(o.fields[Hw]=i),{mapValue:o}}(n,e):t instanceof Da?cE(t,e):t instanceof Oa?hE(t,e):function(s,i){const o=uE(s,i),l=xy(o)+xy(s.Ae);return Nd(o)&&Nd(s.Ae)?lE(l):hp(s.serializer,l)}(t,e)}function eb(t,e,n){return t instanceof Da?cE(t,e):t instanceof Oa?hE(t,e):n}function uE(t,e){return t instanceof Mu?function(r){return Nd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Pa extends vc{}class Da extends vc{constructor(e){super(),this.elements=e}}function cE(t,e){const n=dE(e);for(const r of t.elements)n.some(s=>Er(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oa extends vc{constructor(e){super(),this.elements=e}}function hE(t,e){let n=dE(e);for(const r of t.elements)n=n.filter(s=>!Er(s,r));return{arrayValue:{values:n}}}class Mu extends vc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function xy(t){return pt(t.integerValue||t.doubleValue)}function dE(t){return lp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.field=e,this.transform=n}}function nb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Da&&s instanceof Da||r instanceof Oa&&s instanceof Oa?io(r.elements,s.elements,Er):r instanceof Mu&&s instanceof Mu?Er(r.Ae,s.Ae):r instanceof Pa&&s instanceof Pa}(t.transform,e.transform)}class rb{constructor(e,n){this.version=e,this.transformResults=n}}class Lr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lr}static exists(e){return new Lr(void 0,e)}static updateTime(e){return new Lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wc{}function fE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mE(t.key,Lr.none()):new Ha(t.key,t.data,Lr.none());{const n=t.data,r=jn.empty();let s=new Nt(Gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _i(t.key,r,new Jn(s.toArray()),Lr.none())}}function sb(t,e,n){t instanceof Ha?function(s,i,o){const l=s.value.clone(),u=ky(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof _i?function(s,i,o){if(!Yl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ky(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function oa(t,e,n,r){return t instanceof Ha?function(i,o,l,u){if(!Yl(i.precondition,o))return l;const c=i.value.clone(),f=Cy(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof _i?function(i,o,l,u){if(!Yl(i.precondition,o))return l;const c=Cy(i.fieldTransforms,u,o),f=o.data;return f.setAll(pE(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Yl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ib(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=uE(r.transform,s||null);i!=null&&(n===null&&(n=jn.empty()),n.set(r.field,i))}return n||null}function Ay(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&io(r,s,(i,o)=>nb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ha extends wc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _i extends wc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ky(t,e,n){const r=new Map;Ve(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eb(o,l,n[s]))}return r}function Cy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZR(i,o,e))}return r}class mE extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ob extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=oa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=oa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=fE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(n,r)=>Ay(n,r))&&io(this.baseMutations,e.baseMutations,(n,r)=>Ay(n,r))}}class dp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return KR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new dp(e,n,r,s)}}/**
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
 */class lb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ub{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,Re;function cb(t){switch(t){case V.OK:return le(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return le(15467,{code:t})}}function gE(t){if(t===void 0)return Br("GRPC error has no .code"),V.UNKNOWN;switch(t){case wt.OK:return V.OK;case wt.CANCELLED:return V.CANCELLED;case wt.UNKNOWN:return V.UNKNOWN;case wt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case wt.INTERNAL:return V.INTERNAL;case wt.UNAVAILABLE:return V.UNAVAILABLE;case wt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case wt.NOT_FOUND:return V.NOT_FOUND;case wt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case wt.ABORTED:return V.ABORTED;case wt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case wt.DATA_LOSS:return V.DATA_LOSS;default:return le(39323,{code:t})}}(Re=wt||(wt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hb(){return new TextEncoder}/**
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
 */const db=new Es([4294967295,4294967295],0);function Ry(t){const e=hb().encode(t),n=new Rw;return n.update(e),new Uint8Array(n.digest())}function by(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Es([n,r],0),new Es([s,i],0)]}class fp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Go(`Invalid padding: ${n}`);if(r<0)throw new Go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Go(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Es.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Es.fromNumber(r)));return s.compare(db)===1&&(s=new Es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ry(e),[r,s]=by(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ry(e),[r,s]=by(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qa(he.min(),s,new rt(Ie),Hr(),Se())}}class Ga{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ga(r,n,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class yE{constructor(e,n){this.targetId=e,this.Ce=n}}class _E{constructor(e,n,r=Qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ny{constructor(){this.ve=0,this.Fe=Py(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),n=Se(),r=Se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}}),new Ga(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Py()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ve(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hr(),this.Je=Nl(),this.He=Nl(),this.Ze=new rt(Ie)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Dd(i))if(r===0){const o=new re(i.path);this.et(n,o,nn.newNoDocument(o,he.min()))}else Ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Rs(r).toUint8Array()}catch(u){if(u instanceof $w)return ci("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new fp(o,s,i)}catch(u){return ci(u instanceof Go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Dd(l.target)){const u=new re(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,nn.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=Se();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new qa(e,n,this.Ze,this.je,r);return this.je=Hr(),this.Je=Nl(),this.He=Nl(),this.Ze=new rt(Ie),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ny,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Nt(Ie),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Nt(Ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ny),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Nl(){return new rt(re.comparator)}function Py(){return new rt(re.comparator)}const pb={asc:"ASCENDING",desc:"DESCENDING"},mb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gb={and:"AND",or:"OR"};class yb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vd(t,e){return t.useProto3Json||mc(e)?e:{value:e}}function Lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _b(t,e){return Lu(t,e.toTimestamp())}function _r(t){return Ve(!!t,49232),he.fromTimestamp(function(n){const r=Cs(n);return new Je(r.seconds,r.nanos)}(t))}function pp(t,e){return Md(t,e).canonicalString()}function Md(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wE(t){const e=He.fromString(t);return Ve(xE(e),10190,{key:e.toString()}),e}function Ld(t,e){return pp(t.databaseId,e.path)}function wh(t,e){const n=wE(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(TE(n))}function EE(t,e){return pp(t.databaseId,e)}function vb(t){const e=wE(t);return e.length===4?He.emptyPath():TE(e)}function jd(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TE(t){return Ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Dy(t,e,n){return{name:Ld(t,e),fields:n.value.mapValue.fields}}function wb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:le(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(Ve(f===void 0||typeof f=="string",58123),Qt.fromBase64String(f||"")):(Ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?V.UNKNOWN:gE(c.code);return new Q(f,c.message||"")}(o);n=new _E(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wh(t,r.document.name),i=_r(r.document.updateTime),o=r.document.createTime?_r(r.document.createTime):he.min(),l=new jn({mapValue:{fields:r.document.fields}}),u=nn.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Xl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wh(t,r.document),i=r.readTime?_r(r.readTime):he.min(),o=nn.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Xl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wh(t,r.document),i=r.removedTargetIds||[];n=new Xl([],i,s,null)}else{if(!("filter"in e))return le(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ub(s,i),l=r.targetId;n=new yE(l,o)}}return n}function Eb(t,e){let n;if(e instanceof Ha)n={update:Dy(t,e.key,e.value)};else if(e instanceof mE)n={delete:Ld(t,e.key)};else if(e instanceof _i)n={update:Dy(t,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof ob))return le(16599,{dt:e.type});n={verify:Ld(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Da)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw le(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_b(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:le(27497)}(t,e.precondition)),n}function Tb(t,e){return t&&t.length>0?(Ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?_r(s.updateTime):_r(i);return o.isEqual(he.min())&&(o=_r(i)),new rb(o,s.transformResults||[])}(n,e))):[]}function Ib(t,e){return{documents:[EE(t,e.path)]}}function Sb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=EE(t,s);const i=function(c){if(c.length!==0)return SE(rr.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(v){return{field:xi(v.field),direction:kb(v.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function xb(t){let e=vb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const v=IE(p);return v instanceof rr&&Yw(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(v=>function(b){return new Na(Ai(b.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,mc(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(p){const v=!!p.before,k=p.values||[];return new Ou(k,v)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const v=!p.before,k=p.values||[];return new Ou(k,v)}(n.endAt)),$R(e,s,o,i,l,"F",u,c)}function Ab(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function IE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ai(n.unaryFilter.field);return Tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ai(n.unaryFilter.field);return Tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ai(n.unaryFilter.field);return Tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ai(n.unaryFilter.field);return Tt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}}(t):t.fieldFilter!==void 0?function(n){return Tt.create(Ai(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rr.create(n.compositeFilter.filters.map(r=>IE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}}(n.compositeFilter.op))}(t):le(30097,{filter:t})}function kb(t){return pb[t]}function Cb(t){return mb[t]}function Rb(t){return gb[t]}function xi(t){return{fieldPath:t.canonicalString()}}function Ai(t){return Gt.fromServerFormat(t.fieldPath)}function SE(t){return t instanceof Tt?function(n){if(n.op==="=="){if(wy(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NAN"}};if(vy(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wy(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NAN"}};if(vy(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(n.field),op:Cb(n.op),value:n.value}}}(t):t instanceof rr?function(n){const r=n.getFilters().map(s=>SE(s));return r.length===1?r[0]:{compositeFilter:{op:Rb(n.op),filters:r}}}(t):le(54877,{filter:t})}function bb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function AE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,s,i=he.min(),o=he.min(),l=Qt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.yt=e}}function Pb(t){const e=xb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vu(e,e.limit,"L"):e}/**
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
 */class Db{constructor(){this.bn=new Ob}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ks.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Ob{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Nt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Nt(He.comparator)).toArray()}}/**
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
 */const Oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kE=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(kE,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ns(0)}static ar(){return new Ns(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="LruGarbageCollector",Vb=1048576;function My([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class Mb{constructor(e){this.Pr=e,this.buffer=new Nt(My),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();My(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Lb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(Vy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){go(n)?q(Vy,"Ignoring IndexedDB error during garbage collection: ",n):await mo(n)}await this.Ar(3e5)})}}class jb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(pc.ce);const r=new Mb(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Oy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Oy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ii()<=Ae.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Ub(t,e){return new jb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $b{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&oa(r.mutation,s,Jn.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const s=Qs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Hr();const o=ia(),l=function(){return ia()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof _i)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),oa(f.mutation,c,f.mutation.getFieldMask(),Je.now())):o.set(c.key,Jn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new $b(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ia();let s=new rt((o,l)=>o-l),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Jn.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(s.get(l.batchId)||Se()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=aE();f.forEach(v=>{if(!i.has(v)){const k=fE(n.get(v),r.get(v));k!==null&&p.set(v,k),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return zR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Qs());let l=ka,u=i;return o.next(c=>L.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,Se())).next(f=>({batchId:l,changes:oE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=qo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qo();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const c=function(p,v){return new yo(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,nn.newInvalidDocument(f)))});let l=qo();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&oa(f.mutation,c,Jn.empty(),Je.now()),_c(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_r(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Pb(s.bundledQuery),readTime:_r(s.readTime)}}(n)),L.resolve()}}/**
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
 */class Hb{constructor(){this.overlays=new rt(re.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qs();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Qs(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new rt((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Qs(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Qs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lb(n,r));let i=this.Lr.get(n);i===void 0&&(i=Se(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class qb{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.kr=new Nt(Mt.Kr),this.qr=new Nt(Mt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Mt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Mt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new re(new He([])),r=new Mt(n,e),s=new Mt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new re(new He([])),r=new Mt(n,e),s=new Mt(n,e+1);let i=Se();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Mt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Mt{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return re.comparator(e.key,n.key)||Ie(e.Jr,n.Jr)}static Ur(e,n){return Ie(e.Jr,n.Jr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Nt(Mt.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ab(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new Mt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?op:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Mt(n,0),s=new Mt(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Nt(Ie);return n.forEach(s=>{const i=new Mt(s,0),o=new Mt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new Mt(new re(i),0);let l=new Nt(Ie);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,s=>{const i=new Mt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Mt(n,0),s=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.ti=e,this.docs=function(){return new rt(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():nn.newInvalidDocument(n))}getEntries(e,n){let r=Hr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nn.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Hr();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_R(yR(f),r)<=0||(s.has(f.key)||_c(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kb(this)}getSize(e){return L.resolve(this.size)}}class Kb extends Fb{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.persistence=e,this.ri=new yi(n=>up(n),cp),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.ii=0,this.si=new mp,this.targetCount=0,this.oi=Ns._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n){this._i={},this.overlays={},this.ai=new pc(0),this.ui=!1,this.ui=!0,this.ci=new qb,this.referenceDelegate=e(this),this.li=new Qb(this),this.indexManager=new Db,this.remoteDocumentCache=function(s){return new Wb(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Nb(n),this.Pi=new Bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Gb(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new Jb(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Jb extends wR{constructor(e){super(),this.currentSequenceNumber=e}}class gp{constructor(e){this.persistence=e,this.Ri=new mp,this.Ai=null}static Vi(e){return new gp(e)}get di(){if(this.Ai)return this.Ai;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=re.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ju{constructor(e,n){this.persistence=e,this.fi=new yi(r=>IR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ub(this,n)}static Vi(e,n){return new ju(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ql(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yp(e,n.fromCache,r,s)}}/**
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
 */class Yb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Xb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _A()?8:ER(sn())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Yb;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ii()<=Ae.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Ii()<=Ae.DEBUG&&q("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ii()<=Ae.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(n))):L.resolve())}gs(e,n){if(Sy(n))return L.resolve(null);let r=yr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vu(n,null,"F"),r=yr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Se(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,Vu(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Sy(n)||s.isEqual(he.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?L.resolve(null):(Ii()<=Ae.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Si(n)),this.Ds(e,o,n,gR(s,ka)).next(l=>l))})}Ss(e,n){let r=new Nt(sE(e));return n.forEach((s,i)=>{_c(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ii()<=Ae.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Si(n)),this.fs.getDocumentsMatchingQuery(e,n,ks.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="LocalStore",Zb=3e8;class eN{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new rt(Ie),this.Fs=new yi(i=>up(i),cp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function tN(t,e,n,r){return new eN(t,e,n,r)}async function RE(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=Se();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function nN(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,v=p.keys();let k=L.resolve();return v.forEach(b=>{k=k.next(()=>f.getEntry(u,b)).next(N=>{const O=c.docVersions.get(b);Ve(O!==null,48541),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function bE(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function rN(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const v=s.get(p);if(!v)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let k=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(Qt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(p,k),function(N,O,T){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Zb?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(v,k,f)&&l.push(n.li.updateTargetData(i,k))});let u=Hr(),c=Se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(sN(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(he.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function sN(t,e,n){let r=Se(),s=Se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Hr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(he.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(_p,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function iN(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=op),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oN(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ud(t,e,n){const r=fe(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!go(o))throw o;q(_p,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ly(t,e,n){const r=fe(t);let s=he.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=fe(u),v=p.Fs.get(f);return v!==void 0?L.resolve(p.vs.get(v)):p.li.getTargetData(c,f)}(r,o,yr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:Se())).next(l=>(aN(r,qR(e),l),{documents:l,ks:i})))}function aN(t,e,n){let r=t.Ms.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class jy{constructor(){this.activeTargetIds=YR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lN{constructor(){this.vo=new jy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new jy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uN{Mo(e){}shutdown(){}}/**
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
 */const Uy="ConnectivityMonitor";class Fy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(Uy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(Uy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pl=null;function Fd(){return Pl===null?Pl=function(){return 268435456+Math.round(2147483648*Math.random())}():Pl++,"0x"+Pl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="RestConnection",cN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hN{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Pu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Fd(),l=this.Qo(e,n.toUriEncodedString());q(Eh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=pi(c);return this.zo(e,l,u,r,f).then(p=>(q(Eh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ci(Eh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=cN[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="WebChannelConnection",Uo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class qi extends hN{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qi.c_){const e=Dw();Uo(e,Pw.STAT_EVENT,n=>{n.stat===Cd.PROXY?q(Zt,"STAT_EVENT: detected buffering proxy"):n.stat===Cd.NOPROXY&&q(Zt,"STAT_EVENT: detected no buffering proxy")}),qi.c_=!0}}zo(e,n,r,s,i){const o=Fd();return new Promise((l,u)=>{const c=new bw;c.setWithCredentials(!0),c.listenOnce(Nw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kl.NO_ERROR:const p=c.getResponseJson();q(Zt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Kl.TIMEOUT:q(Zt,`RPC '${e}' ${o} timed out`),u(new Q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Kl.HTTP_ERROR:const v=c.getStatus();if(q(Zt,`RPC '${e}' ${o} failed with status:`,v,"response text:",c.getResponseText()),v>0){let k=c.getResponseJson();Array.isArray(k)&&(k=k[0]);const b=k==null?void 0:k.error;if(b&&b.status&&b.message){const N=function(T){const S=T.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(S)>=0?S:V.UNKNOWN}(b.status);u(new Q(N,b.message))}else u(new Q(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new Q(V.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{q(Zt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(Zt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Fd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");q(Zt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let p=!1,v=!1;const k=new dN({Jo:b=>{v?q(Zt,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(p||(q(Zt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),q(Zt,`RPC '${e}' stream ${s} sending:`,b),f.send(b))},Ho:()=>f.close()});return Uo(f,Ho.EventType.OPEN,()=>{v||(q(Zt,`RPC '${e}' stream ${s} transport opened.`),k.i_())}),Uo(f,Ho.EventType.CLOSE,()=>{v||(v=!0,q(Zt,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(f))}),Uo(f,Ho.EventType.ERROR,b=>{v||(v=!0,ci(Zt,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),k.o_(new Q(V.UNAVAILABLE,"The operation could not be completed")))}),Uo(f,Ho.EventType.MESSAGE,b=>{var N;if(!v){const O=b.data[0];Ve(!!O,16349);const T=O,S=(T==null?void 0:T.error)||((N=T[0])==null?void 0:N.error);if(S){q(Zt,`RPC '${e}' stream ${s} received error:`,S);const A=S.status;let P=function(E){const _=wt[E];if(_!==void 0)return gE(_)}(A),j=S.message;A==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ci(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),P===void 0&&(P=V.INTERNAL,j="Unknown error status: "+A+" with message "+S.message),v=!0,k.o_(new Q(P,j)),f.close()}else q(Zt,`RPC '${e}' stream ${s} received:`,O),k.__(O)}}),qi.u_(),setTimeout(()=>{k.s_()},0),k}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ow()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){return new qi(t)}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t){return new yb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qi.c_=!1;class NE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="PersistentStream";class PE{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new NE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Br(n.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q($y,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q($y,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pN extends PE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=wb(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?_r(o.readTime):he.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=jd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Dd(u)?{documents:Ib(i,u)}:{query:Sb(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=vE(i,o.resumeToken);const c=Vd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(he.min())>0){l.readTime=Lu(i,o.snapshotVersion.toTimestamp());const c=Vd(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Ab(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=jd(this.serializer),n.removeTarget=e,this.K_(n)}}class mN extends PE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Tb(e.writeResults,e.commitTime),r=_r(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=jd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Eb(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{}class yN extends gN{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Md(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Md(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _N(t,e,n,r){return new yN(t,e,n,r)}class vN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Br(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="RemoteStore";class wN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ns(1e3),this.Va=new Ns(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{vi(this)&&(q(Tr,"Restarting streams for network reachability change."),await async function(u){const c=fe(u);c.da.add(4),await Wa(c),c.ga.set("Unknown"),c.da.delete(4),await Tc(c)}(this))})}),this.ga=new vN(r,s)}}async function Tc(t){if(vi(t))for(const e of t.ma)await e(!0)}async function Wa(t){for(const e of t.ma)await e(!1)}function $d(t,e){return t.Ea.get(e)||void 0}function DE(t,e){const n=fe(t),r=$d(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const c=$d(l,u);c!==void 0&&l.Ra.delete(c);const f=function(v,k){return k%2!=0?v.Va.next():v.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);q(Tr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Dr(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),Tp(n)?Ep(n):_o(n).O_()&&wp(n,i)}function vp(t,e){const n=fe(t),r=_o(n),s=$d(n,e);q(Tr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&OE(n,s),n.Ia.size===0&&(r.O_()?r.L_():vi(n)&&n.ga.set("Unknown"))}function wp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void q(Tr,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}_o(t).Z_(e)}function OE(t,e){t.pa.$e(e),_o(t).X_(e)}function Ep(t){t.pa=new fb({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):Se()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),_o(t).start(),t.ga.ua()}function Tp(t){return vi(t)&&!_o(t).x_()&&t.Ia.size>0}function vi(t){return fe(t).da.size===0}function VE(t){t.pa=void 0}async function EN(t){t.ga.set("Online")}async function TN(t){t.Ia.forEach((e,n)=>{wp(t,e)})}async function IN(t,e){VE(t),Tp(t)?(t.ga.ha(e),Ep(t)):t.ga.set("Unknown")}async function SN(t,e,n){if(t.ga.set("Online"),e instanceof _E&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){q(Tr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uu(t,r)}else if(e instanceof Xl?t.pa.Xe(e):e instanceof yE?t.pa.st(e):t.pa.tt(e),!n.isEqual(he.min()))try{const r=await bE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const p=i.Ia.get(c);if(!p)return;i.Ia.set(c,p.withResumeToken(Qt.EMPTY_BYTE_STRING,p.snapshotVersion)),OE(i,c);const v=new Dr(p.target,c,f,p.sequenceNumber);wp(i,v)});const u=function(f,p){const v=new Map;p.targetChanges.forEach((b,N)=>{const O=f.Ra.get(N);O!==void 0&&v.set(O,b)});let k=new rt(Ie);return p.targetMismatches.forEach((b,N)=>{const O=f.Ra.get(b);O!==void 0&&(k=k.insert(O,N))}),new qa(p.snapshotVersion,v,k,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){q(Tr,"Failed to raise snapshot:",r),await Uu(t,r)}}async function Uu(t,e,n){if(!go(e))throw e;t.da.add(1),await Wa(t),t.ga.set("Offline"),n||(n=()=>bE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Tr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Tc(t)})}function ME(t,e){return e().catch(n=>Uu(t,n,e))}async function Ic(t){const e=fe(t),n=Ps(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:op;for(;xN(e);)try{const s=await iN(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,AN(e,s)}catch(s){await Uu(e,s)}LE(e)&&jE(e)}function xN(t){return vi(t)&&t.Ta.length<10}function AN(t,e){t.Ta.push(e);const n=Ps(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function LE(t){return vi(t)&&!Ps(t).x_()&&t.Ta.length>0}function jE(t){Ps(t).start()}async function kN(t){Ps(t).ra()}async function CN(t){const e=Ps(t);for(const n of t.Ta)e.ea(n.mutations)}async function RN(t,e,n){const r=t.Ta.shift(),s=dp.from(r,e,n);await ME(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ic(t)}async function bN(t,e){e&&Ps(t).Y_&&await async function(r,s){if(function(o){return cb(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();Ps(r).B_(),await ME(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ic(r)}}(t,e),LE(t)&&jE(t)}async function zy(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),q(Tr,"RemoteStore received new credentials");const r=vi(n);n.da.add(3),await Wa(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Tc(n)}async function NN(t,e){const n=fe(t);e?(n.da.delete(2),await Tc(n)):e||(n.da.add(2),await Wa(n),n.ga.set("Unknown"))}function _o(t){return t.ya||(t.ya=function(n,r,s){const i=fe(n);return i.sa(),new pN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:EN.bind(null,t),Yo:TN.bind(null,t),t_:IN.bind(null,t),H_:SN.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Tp(t)?Ep(t):t.ga.set("Unknown")):(await t.ya.stop(),VE(t))})),t.ya}function Ps(t){return t.wa||(t.wa=function(n,r,s){const i=fe(n);return i.sa(),new mN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kN.bind(null,t),t_:bN.bind(null,t),ta:CN.bind(null,t),na:RN.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await Ic(t)):(await t.wa.stop(),t.Ta.length>0&&(q(Tr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ip(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sp(t,e){if(Br("AsyncQueue",`${e}: ${t}`),go(t))return new Q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{static emptySet(e){return new Gi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=qo(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.Sa=new rt(re.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):le(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class lo{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new lo(e,n,Gi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class DN{constructor(){this.queries=Hy(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Hy(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new Q(V.ABORTED,"Firestore shutting down"))}}function Hy(){return new yi(t=>rE(t),yc)}async function ON(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new PN,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Sp(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&xp(n)}async function VN(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MN(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&xp(n)}function LN(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function xp(t){t.xa.forEach(e=>{e.next()})}var zd,qy;(qy=zd||(zd={})).Ba="default",qy.Cache="cache";class jN{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==zd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.key=e}}class FE{constructor(e){this.key=e}}class UN{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=Se(),this.mutatedKeys=Se(),this.iu=sE(e),this.su=new Gi(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new By,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const v=s.get(f),k=_c(this.query,p)?p:null,b=!!v&&this.mutatedKeys.has(v.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;v&&k?v.data.isEqual(k.data)?b!==N&&(r.track({type:3,doc:k}),O=!0):this.uu(v,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.iu(k,u)>0||c&&this.iu(k,c)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),O=!0):v&&!k&&(r.track({type:1,doc:v}),O=!0,(u||c)&&(l=!0)),O&&(k?(o=o.add(k),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(k,b){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Vt:O})}};return N(k)-N(b)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new lo(this.query,e.su,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new By,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=Se(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new FE(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new UE(r))}),n}Tu(e){this.tu=e.ks,this.ru=Se();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return lo.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Ap="SyncEngine";class FN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $N{constructor(e){this.key=e,this.Eu=!1}}class zN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new yi(l=>rE(l),yc),this.Vu=new Map,this.du=new Set,this.mu=new rt(re.comparator),this.fu=new Map,this.gu=new mp,this.pu={},this.yu=new Map,this.wu=Ns.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function BN(t,e,n=!0){const r=GE(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await $E(r,e,n,!0),s}async function HN(t,e){const n=GE(t);await $E(n,e,!0,!1)}async function $E(t,e,n,r){const s=await oN(t.localStore,yr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await qN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&DE(t.remoteStore,s),l}async function qN(t,e,n,r,s){t.bu=(p,v,k)=>async function(N,O,T,S){let A=O.view._u(T);A.bs&&(A=await Ly(N.localStore,O.query,!1).then(({documents:E})=>O.view._u(E,A)));const P=S&&S.targetChanges.get(O.targetId),j=S&&S.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(A,N.isPrimaryClient,P,j);return Wy(N,O.targetId,F.hu),F.snapshot}(t,p,v,k);const i=await Ly(t.localStore,e,!0),o=new UN(e,i.ks),l=o._u(i.documents),u=Ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Wy(t,n,c.hu);const f=new FN(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function GN(t,e,n){const r=fe(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!yc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ud(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vp(r.remoteStore,s.targetId),Bd(r,s.targetId)}).catch(mo)):(Bd(r,s.targetId),await Ud(r.localStore,s.targetId,!0))}async function WN(t,e){const n=fe(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vp(n.remoteStore,r.targetId))}async function KN(t,e,n){const r=tP(t);try{const s=await function(o,l){const u=fe(o),c=Je.now(),f=l.reduce((k,b)=>k.add(b.key),Se());let p,v;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let b=Hr(),N=Se();return u.xs.getEntries(k,f).next(O=>{b=O,b.forEach((T,S)=>{S.isValidDocument()||(N=N.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,b)).next(O=>{p=O;const T=[];for(const S of l){const A=ib(S,p.get(S.key).overlayedDocument);A!=null&&T.push(new _i(S.key,A,Kw(A.value.mapValue),Lr.exists(!0)))}return u.mutationQueue.addMutationBatch(k,c,T,l)}).next(O=>{v=O;const T=O.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,T)})}).then(()=>({batchId:v.batchId,changes:oE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new rt(Ie)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ka(r,s.changes),await Ic(r.remoteStore)}catch(s){const i=Sp(s,"Failed to persist write");n.reject(i)}}async function zE(t,e){const n=fe(t);try{const r=await rN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?Ve(o.Eu,14607):s.removedDocuments.size>0&&(Ve(o.Eu,42227),o.Eu=!1))}),await Ka(n,r,e)}catch(r){await mo(r)}}function Gy(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=fe(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const v of p.va)v.Oa(l)&&(c=!0)}),c&&xp(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QN(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new rt(re.comparator);o=o.insert(i,nn.newNoDocument(i,he.min()));const l=Se().add(i),u=new qa(he.min(),new Map,new rt(Ie),o,l);await zE(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),kp(r)}else await Ud(r.localStore,e,!1).then(()=>Bd(r,e,n)).catch(mo)}async function JN(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await nN(n.localStore,e);HE(n,r,null),BE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ka(n,s)}catch(s){await mo(s)}}async function YN(t,e,n){const r=fe(t);try{const s=await function(o,l){const u=fe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Ve(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);HE(r,e,n),BE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ka(r,s)}catch(s){await mo(s)}}function BE(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function HE(t,e,n){const r=fe(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Bd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||qE(t,r)})}function qE(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(vp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),kp(t))}function Wy(t,e,n){for(const r of n)r instanceof UE?(t.gu.addReference(r.key,e),XN(t,r)):r instanceof FE?(q(Ap,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||qE(t,r.key)):le(19791,{Cu:r})}function XN(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(q(Ap,"New document in limbo: "+n),t.du.add(r),kp(t))}function kp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new re(He.fromString(e)),r=t.wu.next();t.fu.set(r,new $N(n)),t.mu=t.mu.insert(n,r),DE(t.remoteStore,new Dr(yr(tE(n.path)),r,"TargetPurposeLimboResolution",pc.ce))}}async function Ka(t,e,n){const r=fe(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=yp.Es(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,c){const f=fe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,v=>L.forEach(v.Ts,k=>f.persistence.referenceDelegate.addReference(p,v.targetId,k)).next(()=>L.forEach(v.Is,k=>f.persistence.referenceDelegate.removeReference(p,v.targetId,k)))))}catch(p){if(!go(p))throw p;q(_p,"Failed to update sequence numbers: "+p)}for(const p of c){const v=p.targetId;if(!p.fromCache){const k=f.vs.get(v),b=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(b);f.vs=f.vs.insert(v,N)}}}(r.localStore,i))}async function ZN(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){q(Ap,"User change. New user:",e.toKey());const r=await RE(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new Q(V.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ka(n,r.Ns)}}function eP(t,e){const n=fe(t),r=n.fu.get(e);if(r&&r.Eu)return Se().add(r.key);{let s=Se();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function GE(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QN.bind(null,e),e.Ru.H_=MN.bind(null,e.eventManager),e.Ru.Du=LN.bind(null,e.eventManager),e}function tP(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YN.bind(null,e),e}class Fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return tN(this.persistence,new Xb,e.initialUser,this.serializer)}xu(e){return new CE(gp.Vi,this.serializer)}Mu(e){return new lN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fu.provider={build:()=>new Fu};class nP extends Fu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){Ve(this.persistence.referenceDelegate instanceof ju,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Lb(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new CE(r=>ju.Vi(r,n),this.serializer)}}class Hd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZN.bind(null,this.syncEngine),await NN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DN}()}createDatastore(e){const n=Ec(e.databaseInfo.databaseId),r=fN(e.databaseInfo);return _N(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new wN(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Gy(this.syncEngine,n,0),function(){return Fy.v()?new Fy:new uN}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const p=new zN(s,i,o,l,u,c);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);q(Tr,"RemoteStore shutting down."),i.da.add(5),await Wa(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Hd.provider={build:()=>new Hd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="FirestoreClient";class sP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=en.UNAUTHENTICATED,this.clientId=ip.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(Ds,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Ds,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ih(t,e){t.asyncQueue.verifyOperationInProgress(),q(Ds,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await RE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ky(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iP(t);q(Ds,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zy(e.remoteStore,s)),t._onlineComponents=e}async function iP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Ds,"Using user provided OfflineComponentProvider");try{await Ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ci("Error using user provided cache. Falling back to memory cache: "+n),await Ih(t,new Fu)}}else q(Ds,"Using default OfflineComponentProvider"),await Ih(t,new nP(void 0));return t._offlineComponents}async function WE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Ds,"Using user provided OnlineComponentProvider"),await Ky(t,t._uninitializedComponentsProvider._online)):(q(Ds,"Using default OnlineComponentProvider"),await Ky(t,new Hd))),t._onlineComponents}function oP(t){return WE(t).then(e=>e.syncEngine)}async function aP(t){const e=await WE(t),n=e.eventManager;return n.onListen=BN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WN.bind(null,e.syncEngine),n}function lP(t,e,n={}){const r=new Ts;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new rP({next:v=>{f.Ku(),o.enqueueAndForget(()=>VN(i,p)),v.fromCache&&u.source==="server"?c.reject(new Q(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(v)},error:v=>c.reject(v)}),p=new jN(l,f,{includeMetadataChanges:!0,Wa:!0});return ON(i,p)}(await aP(t),t.asyncQueue,e,n,r)),r.promise}function uP(t,e){const n=new Ts;return t.asyncQueue.enqueueAndForget(async()=>KN(await oP(t),e,n)),n.promise}/**
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
 */function KE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="ComponentProvider",Qy=new Map;function hP(t,e,n,r,s){return new AR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,KE(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="firestore.googleapis.com",Jy=!0;class Yy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=QE,this.ssl=Jy}else this.host=e.host,this.ssl=e.ssl??Jy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Vb)throw new Q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iR;switch(r.type){case"firstParty":return new uR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qy.get(n);r&&(q(cP,"Removing Datastore"),Qy.delete(n),r.terminate())}(this),Promise.resolve()}}function dP(t,e,n,r={}){var c;t=Aa(t,Sc);const s=pi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&Wf(`https://${l}`),i.host!==QE&&i.host!==l&&ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!oi(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=en.MOCK_USER;else{f=lw(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new Q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new en(v)}t._authCredentials=new oR(new Mw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}toJSON(){return{type:bt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ba(n,bt._jsonSchema))return new bt(e,r||null,new re(He.fromString(n.referencePath)))}}bt._jsonSchemaVersion="firestore/documentReference/1.0",bt._jsonSchema={type:It("string",bt._jsonSchemaVersion),referencePath:It("string")};class Is extends Ls{constructor(e,n,r){super(e,n,tE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new re(e))}withConverter(e){return new Is(this.firestore,e,this._path)}}function Xy(t,e,...n){if(t=Pt(t),Lw("collection","path",e),t instanceof Sc){const r=He.fromString(e,...n);return cy(r),new Is(t,null,r)}{if(!(t instanceof bt||t instanceof Is))throw new Q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return cy(r),new Is(t.firestore,null,r)}}function fP(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=ip.newId()),Lw("doc","path",e),t instanceof Sc){const r=He.fromString(e,...n);return uy(r),new bt(t,null,new re(r))}{if(!(t instanceof bt||t instanceof Is))throw new Q(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return uy(r),new bt(t.firestore,t instanceof Is?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="AsyncQueue";class e_{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new NE(this,"async_queue_retry"),this.lc=()=>{const r=Th();r&&q(Zy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Ts;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!go(e))throw e;q(Zy,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Br("INTERNAL UNHANDLED ERROR: ",t_(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=Ip.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&le(47125,{Rc:t_(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function t_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Cp extends Sc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new e_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new e_(e),this._firestoreClient=void 0,await e}}}function pP(t,e){const n=typeof t=="object"?t:Jf(),r=typeof t=="string"?t:Pu,s=dc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=iw("firestore");i&&dP(s,...i)}return s}function JE(t){if(t._terminated)throw new Q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mP(t),t._firestoreClient}function mP(t){var r,s,i,o;const e=t._freezeSettings(),n=hP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new sP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Qt.fromBase64String(e))}catch(n){throw new Q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Un._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ba(e,Un._jsonSchema))return Un.fromBase64String(e.bytes)}}Un._jsonSchemaVersion="firestore/bytes/1.0",Un._jsonSchema={type:It("string",Un._jsonSchemaVersion),bytes:It("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:vr._jsonSchemaVersion}}static fromJSON(e){if(Ba(e,vr._jsonSchema))return new vr(e.latitude,e.longitude)}}vr._jsonSchemaVersion="firestore/geoPoint/1.0",vr._jsonSchema={type:It("string",vr._jsonSchemaVersion),latitude:It("number"),longitude:It("number")};/**
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
 */class er{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ba(e,er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new er(e.vectorValues);throw new Q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}er._jsonSchemaVersion="firestore/vectorValue/1.0",er._jsonSchema={type:It("string",er._jsonSchemaVersion),vectorValues:It("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=/^__.*__$/;class yP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _i(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ha(e,this.data,n,this.fieldTransforms)}}function XE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{dataSource:t})}}class bp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new bp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return $u(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(XE(this.dataSource)&&gP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class _P{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ec(e)}V(e,n,r,s=!1){return new bp({dataSource:e,methodName:n,targetDoc:r,path:Gt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZE(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new _P(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vP(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);n1("Data must be an object, but it was:",o,r);const l=e1(r,o);let u,c;if(i.merge)u=new Jn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const v=Qa(e,p,n);if(!o.contains(v))throw new Q(V.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);IP(f,v)||f.push(v)}u=new Jn(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new yP(new jn(l),u,c)}class Np extends Rp{_toFieldTransform(e){return new tb(e.path,new Pa)}isEqual(e){return e instanceof Np}}function wP(t,e,n,r=!1){return Pp(n,t.V(r?4:3,e))}function Pp(t,e){if(t1(t=Pt(t)))return n1("Unsupported field value:",e,t),e1(t,e);if(t instanceof Rp)return function(r,s){if(!XE(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Pp(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:Lu(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lu(s.serializer,i)}}if(r instanceof vr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Un)return{bytesValue:vE(s.serializer,r._byteString)};if(r instanceof bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:pp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof er)return function(o,l){const u=o instanceof er?o.toArray():o;return{mapValue:{fields:{[Gw]:{stringValue:Ww},[Du]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return hp(l.serializer,f)})}}}}}}(r,s);if(AE(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${fc(r)}`)}(t,e)}function e1(t,e){const n={};return Fw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gi(t,(r,s)=>{const i=Pp(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function t1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof vr||t instanceof Un||t instanceof bt||t instanceof Rp||t instanceof er||AE(t))}function n1(t,e,n){if(!t1(n)||!jw(n)){const r=fc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Qa(t,e,n){if((e=Pt(e))instanceof YE)return e._internalPath;if(typeof e=="string")return TP(t,e);throw $u("Field path arguments must be of type string or ",t,!1,void 0,n)}const EP=new RegExp("[~\\*/\\[\\]]");function TP(t,e,n){if(e.search(EP)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new YE(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $u(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Q(V.INVALID_ARGUMENT,l+t+u)}function IP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Du].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>pt(o.doubleValue));return new er(n)}convertGeoPoint(e){return new vr(pt(e.latitude),pt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const n=Cs(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);Ve(xE(r),9688,{name:e});const s=new Ra(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Br(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class xP extends SP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function AP(){return new Np("serverTimestamp")}const n_="@firebase/firestore",r_="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Qa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kP extends r1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dp{}class Op extends Dp{}function s_(t,e,...n){let r=[];e instanceof Dp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Vp).length,l=i.filter(u=>u instanceof xc).length;if(o>1||o>0&&l>0)throw new Q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class xc extends Op{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xc(e,n,r)}_apply(e){const n=this._parse(e);return s1(e._query,n),new Ls(e.firestore,e.converter,Od(e._query,n))}_parse(e){const n=ZE(e.firestore);return function(i,o,l,u,c,f,p){let v;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){u_(p,f);const b=[];for(const N of p)b.push(l_(u,i,N));v={arrayValue:{values:b}}}else v=l_(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||u_(p,f),v=wP(l,o,p,f==="in"||f==="not-in");return Tt.create(c,f,v)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function i_(t,e,n){const r=e,s=Qa("where",t);return xc._create(s,r,n)}class Vp extends Dp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)s1(o,u),o=Od(o,u)}(e._query,n),new Ls(e.firestore,e.converter,Od(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mp extends Op{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Mp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Q(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Na(i,o)}(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,HR(e._query,n))}}function o_(t,e="asc"){const n=e,r=Qa("orderBy",t);return Mp._create(r,n)}class Lp extends Op{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Lp(e,n,r)}_apply(e){return new Ls(e.firestore,e.converter,Vu(e._query,this._limit,this._limitType))}}function a_(t){return Lp._create("limit",t,"F")}function l_(t,e,n){if(typeof(n=Pt(n))=="string"){if(n==="")throw new Q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nE(e)&&n.indexOf("/")!==-1)throw new Q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!re.isDocumentKey(r))throw new Q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _y(t,new re(r))}if(n instanceof bt)return _y(t,n._key);throw new Q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fc(n)}.`)}function u_(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function s1(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function RP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Dl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wi extends r1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Wi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Wi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wi._jsonSchema={type:It("string",Wi._jsonSchemaVersion),bundleSource:It("string","DocumentSnapshot"),bundleName:It("string"),bundle:It("string")};class Zl extends Wi{data(e={}){return super.data(e)}}class Ki{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Dl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zl(this._firestore,this._userDataWriter,r.key,r,new Dl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Dl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Zl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Dl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:bP(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ki._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ip.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
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
 */Ki._jsonSchemaVersion="firestore/querySnapshot/1.0",Ki._jsonSchema={type:It("string",Ki._jsonSchemaVersion),bundleSource:It("string","QuerySnapshot"),bundleName:It("string"),bundle:It("string")};function NP(t){t=Aa(t,Ls);const e=Aa(t.firestore,Cp),n=JE(e),r=new xP(e);return CP(t._query),lP(n,t._query).then(s=>new Ki(e,r,t,s))}function PP(t,e,n){t=Aa(t,bt);const r=Aa(t.firestore,Cp),s=RP(t.converter,e,n),i=ZE(r);return DP(r,[vP(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Lr.none())])}function DP(t,e){const n=JE(t);return uP(n,e)}(function(e,n=!0){sR(mi),ai(new As("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Cp(new aR(r.getProvider("auth-internal")),new cR(o,r.getProvider("app-check-internal")),kR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),gr(n_,r_,e),gr(n_,r_,"esm2020")})();const OP={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},jp=hw(OP),Up=eR(jp),qd=pP(jp),Gd="shorts_brain_snapshots";function VP(t){const e=t?new Date(t):new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const n=new Date(e.getFullYear(),0,4),r=1+Math.round(((e.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7);return`${e.getFullYear()}-W${r.toString().padStart(2,"0")}`}async function MP(t){const e=rp(Up,t),n=await XC(e);return new TextDecoder().decode(n)}async function LP({weekId:t,reportingDate:e,rawFiles:n}){const r=`shorts-brain/weekly/${t}`,s=[];if(n)for(const[o,l]of Object.entries(n)){if(!l)continue;const u=rp(Up,`${r}/${o}.csv`);await ZC(u,l,{contentType:"text/csv"}),s.push(o)}const i={weekId:t,reportingDate:e||null,savedAt:AP(),rawFileKeys:s};return await PP(fP(qd,Gd,t),i,{merge:!0}),{weekId:t,savedAt:new Date().toISOString(),fileCount:s.length}}async function c_(t){let e=s_(Xy(qd,Gd),o_("weekId","desc"),a_(52));t&&(e=s_(Xy(qd,Gd),o_("weekId","desc"),i_("weekId",">=",`${t}-W01`),i_("weekId","<=",`${t}-W53`),a_(52)));const n=await NP(e),r=[];return n.forEach(s=>{const i=s.data();r.push({weekId:i.weekId,reportingDate:i.reportingDate,savedAt:i.savedAt,rawFileKeys:i.rawFileKeys||[]})}),{snapshots:r,count:r.length}}async function jP(t){const e=`shorts-brain/weekly/${t}`,n=rp(Up,e);let r=[];try{const i=await iy(n);if(r=i.items,i.prefixes.length>0)for(const o of i.prefixes){const l=await iy(o);r=r.concat(l.items)}}catch(i){return console.error("Failed to list snapshot files:",i),null}const s={};return await Promise.all(r.map(async i=>{if(i.name.endsWith(".csv"))try{const o=await MP(i.fullPath),l=i.name.replace(".csv","");s[l]=o}catch(o){console.error(`Failed to download ${i.fullPath}:`,o)}})),s}const i1="https://drive.google.com/corp/drive/folders/18GCtCrz-Bs1YdXKtQs-tjugb6xudULaX?resourcekey=0-gMJCegK7SZkhgJeT_YTjSw",h_=["ivanho.wz@gmail.com","ivho@google.com","kanishak@google.com"],is=["DAU-SCT","DAC-SCT","GenAI DAU-SCT","Impressions","CTR"],kr=["India","Indonesia","Japan","South Korea","AUNZ"],zu={India:"IN",Indonesia:"ID",Japan:"JP","South Korea":"KR",AUNZ:"AUNZ"},Wd={IN:"India",ID:"Indonesia",JP:"Japan",KR:"South Korea",AUNZ:"AUNZ"},eu=["SSC","Shelf","UTS","MVR","UTS SFV","JP Proactive Container"],Bt=["female","male","total"],UP={female:"FEMALE",male:"MALE",total:"GenPop"},An=["18-24","25-34","18-34","35+","total"],FP={"18-24":"18-24","25-34":"25-34","18-34":"18-34","35+":"35-44",total:"GenPop"},$P={APAC:.15,INDIA:.16,INDONESIA:.29,JAPAN:1.2,"SOUTH KOREA":1.08,AUNZ:1.56,IN:.16,ID:.29,JP:1.2,KR:1.08},zP=[{id:"Upload",label:"Data Ingestion",icon:Jv},{id:"OKR",label:"Shorts OKR Performance",icon:Zv},{id:"Global Hub",label:"Global Holdback",icon:Xv},{id:"Market Hub",label:"Campaign Holdback",icon:px}],Ol=[{id:"AlwaysOn",label:"Always-On",icon:wd},{id:"ScaledCreation",label:"Scaled Creation",icon:Bx},{id:"Trends",label:"Trends",icon:ew},{id:"CultMo",label:"CultMo",icon:tx},{id:"ArtMo",label:"ArtMo",icon:xx},{id:"GenAI Hub",label:"GenAI Hub",icon:Yx}],Ue=t=>(t||"").toString().replace(/['"]/g,"").replace(/\u00A0/g," ").trim(),Ht=t=>{try{return Ue(t).toUpperCase().replace(/[^\p{L}\p{N}]/gu,"")}catch{return Ue(t).toUpperCase().replace(/[\s\-_&!?,.()'"\uFF01]/g,"")}},mn=(t,e)=>Ht(t)===Ht(e),BP=t=>Ht(t).replace(/INDIA$|INDONESIA$|JAPAN$|SOUTHKOREA$|AUNZ$|IN$|ID$|JP$|KR$/g,"").trim(),HP=t=>t===0?"0.00":t==="NA"||t===null||t===void 0||isNaN(t)?"-":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t),Fn=t=>{const e=Ue(t);if(!e||e==="-"||e==="Unknown")return null;try{if(e.includes("-")&&e.split("-")[0].length===4)return e;const n=e.split(/[-/]/);if(n.length===3){let s=parseInt(n[0],10),i=parseInt(n[1],10),o=parseInt(n[2],10);o<100&&(o+=2e3);let l,u;return s>12?(u=s,l=i):i>12?(l=s,u=i):(u=s,l=i),l>12?null:`${o}-${l.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return isNaN(r.getTime())?null:r.toISOString().split("T")[0]}catch{return null}},o1=(t,e)=>{const n=Fn(t),r=Fn(e)||new Date().toISOString().split("T")[0];if(!n)return 0;try{const s=new Date(n),i=new Date(r),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));return o>=0?o+1:1}catch{return 0}},qP=(t,e)=>{const n=Fn(t),r=Fn(e);if(!n||!r)return!1;try{return new Date(n)>=new Date(r)}catch{return!1}},gn=t=>{const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];i==='"'?r=!r:i===","&&!r?(e.push(n.trim()),n=""):n+=i}return e.push(n.trim()),e},ve=(t,e)=>{const n=t.map(s=>(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"")),r=e.map(s=>s.toUpperCase().replace(/[^A-Z0-9]/g,""));for(const s of r){const i=n.indexOf(s);if(i!==-1)return i}return n.findIndex(s=>r.some(i=>s.includes(i)))},GP=(t,e,n=null)=>{var i,o;const r=Ht(t),s=BP(t);if(!r)return{};if(n){const l=Ht(n);if((i=e[l])!=null&&i[r])return e[l][r];if((o=e[l])!=null&&o[s])return e[l][s]}for(const l in e){if(e[l][r])return e[l][r];if(e[l][s])return e[l][s]}return{}},pn=(t,e={},n={},r=["Campaign","Campaign Name","Country","Market"],s=!1,i=null,o=!1,l=!1)=>{try{const u=t.split(/\r?\n/).filter(S=>S.trim()!=="");if(u.length<2)return e;const c=gn(u[0]),f=ve(c,r),p=ve(c,["Country","Market","Market Name"]),v=ve(c,["Value Type","Metric Type"]),k=ve(c,["Slice","Segment"]),b=ve(c,["Date","Reporting Date","Day","Latest Date"]),N=ve(c,["Trend Start Date","Trend Start"]),O=ve(c,["Trend End Date","Trend End"]);if(f===-1)return e;const T={...e};return u.slice(1).forEach(S=>{const A=gn(S),P=v!==-1?(A[v]||"").replace(/['"]/g,"").trim().toUpperCase():"",j=k!==-1?(A[k]||"").replace(/['"]/g,"").trim().toUpperCase():"",F=b!==-1?Fn(A[b]):null,E=!s&&(P==="RATIO (%)"||P==="RATIO"||P.includes("LIFT")||P==="")&&(j==="CONTROL"||j===""||j==="TOTAL"),_=P.includes("IMPRESSIONS")||P.includes("CTR"),I=s&&(P.includes("DELTA")||P===""||P==="TOTAL"||P.includes("IMPRESSIONS")||P.includes("ABSOLUTE")||P.includes("VOLUME")||P.includes("CTR"))&&(_||j==="CONTROL"||j==="TEST"||j==="TREATMENT"||j===""||j==="TOTAL"),g=P.includes("TREND FAVORABILITY")&&(j==="CONTROL"||j===""||j==="TOTAL");if(!E&&!g&&!I)return;const x=Ue(A[f])||"Unknown";let C=p!==-1?Ue(A[p]):i||"APAC",w=Wd[C.toUpperCase()]||C;const pe=GP(x,n,w==="APAC"?null:w);w==="APAC"&&pe&&pe.market&&(w=pe.market),w==="APAC"&&(w="India");const ne=`${w}_${x}`;let Ce=null;const Me=ve(c,["Gender","Sex","declared_gender"]);if(Me!==-1){const G=(A[Me]||"").toLowerCase().trim();G==="female"||G==="f"?Ce="female":G==="male"||G==="m"?Ce="male":(G==="total"||G==="all"||G==="genpop"||G==="gen pop")&&(Ce="total")}else Ce="total";if(!Ce)return;let U="total";const Z=ve(c,["Age","Age Group","declared_age_bucket"]);if(Z!==-1){const G=(A[Z]||"").toLowerCase().trim();G.includes("18-24")?U="18-24":G.includes("25-34")?U="25-34":G.includes("18-34")?U="18-34":G.includes("35")&&(U="35+")}const te=o||Ht(x).includes("GLOBALHOLDBACK");if(!T[ne]){const G=N!==-1?Fn(A[N]):null,Ne=O!==-1?Fn(A[O]):null;T[ne]={country:x,market:w,metrics:{},isAnchor:te,campaignStartDate:G||pe.campaignStartDate||null,campaignEndDate:Ne||pe.campaignEndDate||null,optimisationEndDate:pe.optimisationEndDate||F,segmentTag:pe.subTab||"Campaign Hub",meta:pe,dataMinDate:F,dataMaxDate:F,explicitTrendStart:G,explicitTrendEnd:Ne},is.forEach(ht=>{T[ne].metrics[ht]={female:{},male:{},total:{}},Bt.forEach(Ge=>{An.forEach(Dt=>T[ne].metrics[ht][Ge][Dt]={v:0,sig:0,abs:0,isPaused:!1,launchDate:null})})})}F&&((!T[ne].dataMinDate||F<T[ne].dataMinDate)&&(T[ne].dataMinDate=F),(!T[ne].dataMaxDate||F>T[ne].dataMaxDate)&&(T[ne].dataMaxDate=F)),is.forEach(G=>{const Ne={"DAU-SCT":["DAU-SCT","DAILY SHORTS CREATION TOOL ACTIVE USERS"],"DAC-SCT":["DAC-SCT","DAILY SHORTS CONVERTERS"],"GenAI DAU-SCT":["GENAI DAU","GENAI DAILY ACTIVE USERS"],Impressions:["IMPRESSIONS","TOTAL IMPRESSIONS","REACH","IMPS"],CTR:["CTR","CLICK THROUGH RATE","CLICK-THROUGH RATE"]},ht=c.findIndex(Ut=>{const we=Ut.toUpperCase(),lt=(Ne[G]||[]).some(Jt=>we.includes(Jt)),Ft=we.includes("CONFIDENCE")||we.includes("BOUND");return lt&&!Ft&&(G!=="DAU-SCT"||!we.includes("GENAI"))});if(ht===-1)return;const Ge=(A[ht]||"").replace(/['"]/g,"").trim(),Dt=parseFloat(Ge.replace(/[^\d.-]/g,""))||0,Xe=T[ne].meta.targeting;let St=!1;if(te||l)St=!0;else if(Xe){const Ut=Xe.ages.length===0||Xe.ages.includes(U),we=Xe.genders.length===0||Xe.genders.includes(Ce);St=Ut&&we}else St=!0;const Pn=G==="GenAI DAU-SCT",sr=(T[ne].meta.tab||"").toLowerCase()==="genai hub",xr=St&&(!Pn||sr||te),je=xr?Dt:"NA";if(E)(je!=="NA"&&je!==0||T[ne].metrics[G][Ce][U].v===0||T[ne].metrics[G][Ce][U].v==="NA")&&(T[ne].metrics[G][Ce][U].v=je);else if(I)G==="Impressions"||G==="CTR"?(je!=="NA"&&je!==0||T[ne].metrics[G][Ce][U].v===0||T[ne].metrics[G][Ce][U].v==="NA")&&(T[ne].metrics[G][Ce][U].v=je):(je!=="NA"&&je!==0||T[ne].metrics[G][Ce][U].abs===0||T[ne].metrics[G][Ce][U].abs==="NA")&&(T[ne].metrics[G][Ce][U].abs=je);else if(g&&xr){const Ut=Ge.toUpperCase(),we=Ut.includes("POSITIVE")||Ut.includes("SSP")?1:Ut.includes("NEGATIVE")||Ut.includes("SSN")?-1:0;we!==0&&(T[ne].metrics[G][Ce][U].sig=we)}})}),T}catch(u){return console.error("CSV Parse Error:",u),e}},a1=({className:t})=>m.jsxs("svg",{className:t,viewBox:"0 0 1443 1250",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M485.29 0L0 839.25l242.42 410.74 485.29-839.25H485.29z"}),m.jsx("path",{d:"M957.66 0l-242.43 419.63 485.29 830.36 242.54-419.63L957.66 0z",opacity:"0.8"}),m.jsx("path",{d:"M524.23 839.25l-242.42 410.74h960.54l242.42-410.74H524.23z",opacity:"0.6"})]}),WP=(t,e)=>e?{cardBg:"bg-[#1a1a1a]",color:"text-[#808080]",accent:"bg-[#3a3a3a]"}:t>=100?{cardBg:"bg-[#0a1f0a]",color:"text-emerald-400",accent:"bg-emerald-500"}:t>=70?{cardBg:"bg-[#1a1a1a]",color:"text-amber-400",accent:"bg-amber-500"}:{cardBg:"bg-[#1a0a0a]",color:"text-red-400",accent:"bg-red-500"},d_=({activeMetrics:t,toggleMetric:e,handleAllToggle:n,allowedMetrics:r=is})=>m.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[m.jsx("div",{className:"flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]",children:r.map(s=>m.jsx("button",{onClick:()=>e(s),className:`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${t.includes(s)?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:s},s))}),m.jsx("button",{onClick:n,className:`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${t.length===r.length?"bg-white text-black border-white":"bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]"}`,children:t.length===r.length?"Selective View":"Sync All Metrics"})]}),f_=({data:t,activeMetrics:e,latestGlobalDate:n,isCampaignView:r=!1,hideDates:s=!1,isAlwaysOn:i=!1})=>{const o=ae.useRef(null),l={female:{1:"bg-blue-900/40 text-blue-100",2:"bg-blue-900/20",3:"bg-blue-950/40 text-blue-400"},male:{1:"bg-purple-900/40 text-purple-100",2:"bg-purple-900/20",3:"bg-purple-950/40 text-purple-400"},total:{1:"bg-amber-900/80 text-amber-50",2:"bg-amber-800/20",3:"bg-amber-950 text-amber-400 font-bold"}},u=c=>{o.current&&o.current.scrollBy({left:c==="left"?-600:600,behavior:"smooth"})};return!t||t.length===0?m.jsxs("div",{className:"py-40 text-center flex flex-col items-center justify-center gap-6",children:[m.jsx("div",{className:"p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]",children:m.jsx(tA,{className:"w-12 h-12 text-[#3a3a3a] animate-pulse"})}),m.jsx("p",{className:"text-[#808080] font-bold text-sm uppercase tracking-widest",children:"No Data Available"})]}):m.jsxs("div",{className:"relative group/table",children:[m.jsx("button",{onClick:()=>u("left"),className:"absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:m.jsx($S,{className:"w-6 h-6"})}),m.jsx("button",{onClick:()=>u("right"),className:"absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:m.jsx(BS,{className:"w-6 h-6"})}),m.jsx("div",{ref:o,className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto scroll-smooth",children:m.jsxs("table",{className:"w-full text-center border-collapse",children:[m.jsxs("thead",{children:[m.jsxs("tr",{className:"text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:[m.jsx("th",{rowSpan:3,className:"px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[300px]",children:i?"Trend Identifier":r?"Campaign Entity":"Country / Market"}),Bt.map((c,f)=>m.jsx("th",{colSpan:An.length*e.length,className:`py-6 border-white/10 ${l[c][1]} ${f<Bt.length-1?"border-r-2 border-white/20":""}`,children:m.jsxs("div",{className:"flex items-center justify-center gap-3",children:[m.jsx(Qx,{className:"w-4 h-4 opacity-50"}),UP[c]]})},c))]}),m.jsx("tr",{className:"text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:Bt.map(c=>m.jsx(Rr.Fragment,{children:An.map((f,p)=>m.jsx("th",{colSpan:e.length,className:`py-4 transition-colors ${l[c][2]} ${p===An.length-1&&Bt.indexOf(c)<Bt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:FP[f]},f))},c))}),m.jsx("tr",{className:"text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]",children:Bt.map(c=>m.jsx(Rr.Fragment,{children:An.map((f,p)=>m.jsx(Rr.Fragment,{children:e.map((v,k)=>m.jsx("th",{className:`py-3 px-3 font-mono ${l[c][3]} ${p===An.length-1&&k===e.length-1&&Bt.indexOf(c)<Bt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:v.includes("GenAI")?"GenAI":v==="Impressions"?"Imprs":v.split("-")[0]},v))},f))},c))})]}),m.jsx("tbody",{className:"divide-y divide-white/5",children:t.map((c,f)=>{var A,P,j;const p=!!c.isAnchor,v=(j=(P=(A=c.metrics)==null?void 0:A[e[0]||"DAU-SCT"])==null?void 0:P.total)==null?void 0:j.total,k=v!=null&&v.isPaused&&(v!=null&&v.launchDate)&&v.launchDate!=="Ended"?v.launchDate:null,b=i?c.explicitTrendStart||c.dataMinDate||c.campaignStartDate:c.campaignStartDate||c.explicitTrendStart||c.dataMinDate,N=c.campaignEndDate||k||c.optimisationEndDate;let T=i?c.explicitTrendEnd||c.dataMaxDate||N:c.campaignEndDate||c.explicitTrendEnd||c.dataMaxDate||c.optimisationEndDate;!i&&n&&T&&new Date(T)>new Date(n)&&(T=n);const S=o1(b,T);return m.jsxs("tr",{className:`transition-all duration-200 ${p?"bg-white/[0.05]":"hover:bg-white/[0.03]"}`,children:[m.jsx("td",{className:`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 bg-[#111] ${p?"text-blue-400 font-bold":"text-[#e0e0e0]"}`,children:m.jsxs("div",{className:"flex flex-col gap-1.5",children:[m.jsx("span",{className:"font-bold text-[12px] uppercase tracking-tight",children:p?`${c.country} (Reference)`:String(c.country||"Unknown")}),!s&&!p&&(b||i)&&m.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 p-2 rounded bg-black/40 border border-white/5 shadow-inner",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Fg,{className:"w-3 h-3 text-blue-400"}),m.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[m.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend Start:":"Start:"}),String(b||"N/A")]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Fg,{className:"w-3 h-3 text-amber-400"}),m.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[m.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend End:":"End:"}),String(r&&c.campaignEndDate?c.campaignEndDate:T||"Active")]})]}),m.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[m.jsx(Gf,{className:"w-3 h-3 text-emerald-400"}),m.jsxs("span",{className:"text-[9px] font-bold tracking-tighter uppercase text-emerald-400",children:[i?"Trend Days Live:":"Days Live:"," ",S]})]})]})]})}),Bt.map(F=>m.jsx(Rr.Fragment,{children:An.map((E,_)=>m.jsx(Rr.Fragment,{children:e.map(I=>{const g=c.metrics[I][F][E],x=_===An.length-1&&e.indexOf(I)===e.length-1;let C="text-slate-500 font-medium",w="";const pe=g.isPaused&&!p;return pe?(C="text-[#808080] font-bold",w="bg-[#1a1a1a]"):g.v!=="NA"&&g.sig===-1?(C="text-red-500 font-bold",w="bg-red-500/10"):g.v!=="NA"&&g.sig===1?(C="text-emerald-500 font-bold",w="bg-emerald-500/10"):g.v!==0&&g.v!=="NA"&&(C="text-slate-100 font-bold"),m.jsx("td",{className:`py-5 px-3 font-mono text-[13px] tabular-nums ${C} ${w} ${x&&Bt.indexOf(F)<Bt.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:m.jsx("div",{className:"flex flex-col items-center text-center",children:pe?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"leading-none uppercase",children:"Paused"}),m.jsx("span",{className:"text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic",children:String(g.launchDate||"No Data")})]}):g.v==="NA"?m.jsx("span",{className:"text-gray-500 opacity-50 font-bold",children:"NA"}):m.jsxs(m.Fragment,{children:[m.jsx("span",{children:I==="Impressions"?HP(g.v):I==="CTR"?`${(g.v||0).toFixed(2)}%`:g.v===0?"0.00":g.v>0?`+${g.v.toFixed(2)}`:`${g.v.toFixed(2)}`}),g.abs!==0&&g.abs!=="NA"&&I!=="Impressions"&&I!=="CTR"&&m.jsxs("span",{className:"text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none",children:["(",g.abs>0?`+${Math.round(g.abs).toLocaleString()}`:Math.round(g.abs).toLocaleString(),")"]})]})})},`${f}-${I}-${F}-${E}`)})},E))},F))]},`${f}-${c.country}`)})})]})})]})},p_=async t=>{try{await navigator.clipboard.writeText(t)}catch{const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},KP=({globalData:t,regionalData:e,latestDate:n,quarterStart:r})=>{const[s,i]=ae.useState(null),[o,l]=ae.useState({}),[u,c]=ae.useState([]),[f,p]=ae.useState(!1),[v,k]=ae.useState(new Set),[b,N]=ae.useState(null),[O,T]=ae.useState({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}),S=g=>{N(g),setTimeout(()=>N(null),2e3)},A=ae.useMemo(()=>{if(!n)return"TBD";const g=new Date("2026-03-31"),x=new Date(n),C=Math.ceil((g-x)/(1e3*60*60*24));return C>0?C:0},[n]),P=ae.useMemo(()=>["APAC","India","Indonesia","Japan","South Korea","AUNZ"].map(g=>{var Ce,Me,U,Z;const x=t.find(te=>mn(te.country,g)||mn(te.country,zu[g])),C=(Z=(U=(Me=(Ce=x==null?void 0:x.metrics)==null?void 0:Ce["DAU-SCT"])==null?void 0:Me.total)==null?void 0:U.total)==null?void 0:Z.v,w=C==="NA"||C===void 0||isNaN(C)?0:C,pe=$P[g.toUpperCase()]||1,ne=!x||C==="NA";return{market:g.toUpperCase(),actual:w,target:pe,perfIndex:pe>0?w/pe*100:0,isOffline:ne}}),[t]),j=ae.useMemo(()=>{const g=[],x=["SHELF","SSC","UTS","MVR","UTSSFV"];return kr.forEach(w=>{(e[w]||[]).forEach((ne,Ce)=>{var sr,xr,je,Ut;if(qP(ne.optimisationEndDate,ne.campaignEndDate))return;const Me=((sr=ne.metrics)==null?void 0:sr["DAU-SCT"])||{};if((je=(xr=Me.total)==null?void 0:xr.total)!=null&&je.isPaused)return;const U=o1(ne.campaignStartDate,ne.optimisationEndDate),Z=U>=14,te=zu[w]||w.toUpperCase(),G=Ht(ne.country),Ne=x.some(we=>G.includes(we)),ht=(we,lt,Ft)=>{var st,dt,Fe;const Jt=(st=Me[we])==null?void 0:st[lt];if(!Jt||Jt.v==="NA"||Jt.isPaused)return;const M=Jt.v||0,z=Jt.sig===-1,W=Z?"PAUSE":"MAINTAIN",oe=z?"stat sig negative":"neutral negative";let me="";if(Ft==="G"&&lt!=="total"&&M>=0){const Ze=(dt=Me.male)==null?void 0:dt[lt],_t=(Fe=Me.female)==null?void 0:Fe[lt];if((Ze==null?void 0:Ze.v)!=="NA"&&(_t==null?void 0:_t.v)!=="NA"&&((Ze==null?void 0:Ze.v)||0)<-1e-4&&((_t==null?void 0:_t.v)||0)<-1e-4){const In=Z?"Pause":"Maintain (Learning Phase)",et=Z?"":` observed but hasn't reached maturity (Current: ${U}d / Required: 14d)`;Z&&Ne?me=`${te} ${ne.country} - Pause G${lt} given negative lift across both males (${Ze.v.toFixed(2)}%) and females (${_t.v.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:me=`${te} ${ne.country} - ${In} G${lt} given negative lift across both males (${Ze.v.toFixed(2)}%) and females (${_t.v.toFixed(2)}%)${et}`}}me||(Z?Ne?me=`${te} ${ne.country} - Pause ${Ft}${lt} given ${oe} (${M.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:me=`${te} ${ne.country} - Pause ${Ft}${lt} given ${oe} (${M.toFixed(2)}%)`:me=`${te} ${ne.country} - Maintain ${Ft}${lt} (Learning Phase): Negative lift (${M.toFixed(2)}%) observed but hasn't reached maturity (Current: ${U}d / Required: 14d).`),g.push({id:`CAMP_${w}_${Ce}_P_${we}_${lt}`,country:te,campaign:ne.country,age:lt==="total"?"GenPop":lt,gender:we==="total"?"GenPop":we.toUpperCase(),recommendation:W,justification:me})},Ge=((Ut=Me.total)==null?void 0:Ut.total)||{v:0,sig:0};!Ne&&Ge.v!=="NA"&&Ge.sig===1&&Ge.v>.001&&g.push({id:`CAMP_${w}_${Ce}_SC`,country:te,campaign:ne.country,age:"GenPop",gender:"GenPop",recommendation:"SCALE",justification:`${te} ${ne.country} - Scale GenPop: Stat-sig positive lift (+${Ge.v.toFixed(2)}%) observed.`});const Dt=we=>{const lt=[];return["18-24","25-34","35+"].forEach(Ft=>{var Jt,M,z,W;((M=(Jt=Me[we])==null?void 0:Jt[Ft])==null?void 0:M.v)!=="NA"&&(((W=(z=Me[we])==null?void 0:z[Ft])==null?void 0:W.v)||0)<-1e-4&&lt.push(Ft)}),lt},Xe=Dt("male"),St=Dt("female"),Pn=Xe.filter(we=>St.includes(we));Pn.forEach(we=>ht("total",we,"G")),Xe.filter(we=>!Pn.includes(we)).forEach(we=>ht("male",we,"M")),St.filter(we=>!Pn.includes(we)).forEach(we=>ht("female",we,"F"))})}),[...g,...u].filter(w=>!v.has(w.id)).map(w=>o[w.id]?{...w,...o[w.id]}:w)},[e,u,v,o]),F=async g=>{const x=`${g.country}	${g.campaign}	${g.age}	${g.gender}	${g.recommendation}	${g.justification}`;await p_(x),S("Row Copied to Clipboard")},E=async()=>{if(j.length===0)return;const g="Market	Entity	Age	Gender	Directive	Justification",x=j.map(C=>`${C.country}	${C.campaign}	${C.age}	${C.gender}	${C.recommendation}	${C.justification}`).join(`
`);await p_(`${g}
${x}`),S("Full Matrix Copied for Sheets")},_=()=>{k(new Set),l({}),c([]),S("Matrix Restored to Baseline")},I=()=>{if(!O.campaign)return;const g=`MANUAL_${Date.now()}`;c(x=>[...x,{...O,id:g,statusType:O.recommendation==="PAUSE"?"danger":O.recommendation==="SCALE"?"success":"warning"}]),p(!1),T({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""})};return m.jsxs("div",{className:"w-full max-w-[1600px] mx-auto pb-32",children:[b&&m.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase",children:b}),m.jsx("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8",children:m.jsxs("div",{className:"space-y-4",children:[m.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase",children:"Shorts OKR Performance"}),m.jsxs("div",{className:"flex flex-wrap gap-10 pt-4",children:[m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Quarter Start"}),m.jsx("p",{className:"text-lg font-bold text-white",children:r||"2026-02-01"})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Reporting Date (Latest)"}),m.jsx("p",{className:"text-lg font-bold text-emerald-400",children:n||"Awaiting Data..."})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Days Left in Q1"}),m.jsxs("p",{className:"text-lg font-bold text-amber-400",children:[A," ",m.jsx("span",{className:"text-[10px] text-[#808080] ml-1 font-normal",children:"days remaining"})]})]})]})]})}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:P.map((g,x)=>{const C=WP(g.perfIndex,g.isOffline);return m.jsxs("div",{className:`relative ${C.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555]`,children:[m.jsx("div",{className:"flex justify-between items-start mb-6",children:m.jsx("h3",{className:"text-xl font-bold text-white uppercase",children:g.market})}),m.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[m.jsxs("span",{className:"text-3xl font-bold text-white",children:[g.perfIndex.toFixed(1),"%"]}),m.jsx("span",{className:"text-[9px] font-bold text-[#808080] uppercase",children:"INDEX"})]}),m.jsx("div",{className:"relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4",children:m.jsx("div",{className:`h-full ${C.accent}`,style:{width:`${Math.min(g.perfIndex,100)}%`}})}),m.jsxs("div",{className:"flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]",children:[m.jsxs("div",{className:"text-[#808080] uppercase",children:["Actual: ",m.jsxs("span",{className:"text-white",children:["+",g.actual.toFixed(2),"%"]})]}),m.jsxs("div",{className:"text-[#808080] uppercase",children:["Target: ",m.jsxs("span",{className:"text-[#b0b0b0]",children:[g.target.toFixed(2),"%"]})]})]})]},x)})}),m.jsxs("div",{className:"space-y-8",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]",children:m.jsx(gx,{className:"w-6 h-6 text-amber-400"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-2xl font-bold text-white uppercase",children:"Strategic Guidance"}),m.jsx("p",{className:"text-[#808080] text-xs uppercase tracking-widest mt-1",children:"Manual Overrides"})]})]}),m.jsxs("div",{className:"flex flex-wrap gap-3",children:[m.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all",children:[m.jsx(Nx,{className:"w-4 h-4"})," Add Pointer"]}),m.jsxs("button",{onClick:E,className:"flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[m.jsx($g,{className:"w-4 h-4"})," Copy All for Sheets"]}),m.jsxs("button",{onClick:_,className:"flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a]",children:[m.jsx(Lx,{className:"w-4 h-4"})," Restore Defaults"]})]})]}),f&&m.jsxs("div",{className:"bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6",children:[m.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Market"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase outline-none focus:border-[#FF0000] text-white",value:O.country,onChange:g=>T(x=>({...x,country:g.target.value.toUpperCase()}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Entity"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",placeholder:"e.g. Veo Effects",value:O.campaign,onChange:g=>T(x=>({...x,campaign:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Age"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:O.age,onChange:g=>T(x=>({...x,age:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Gender"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:O.gender,onChange:g=>T(x=>({...x,gender:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Directive"}),m.jsxs("select",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none text-white",value:O.recommendation,onChange:g=>T(x=>({...x,recommendation:g.target.value})),children:[m.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),m.jsx("option",{value:"SCALE",children:"SCALE"}),m.jsx("option",{value:"PAUSE",children:"PAUSE"})]})]})]}),m.jsx("textarea",{className:"w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] outline-none focus:border-[#FF0000] mb-4",placeholder:"Strategic justification context...",value:O.justification,onChange:g=>T(x=>({...x,justification:g.target.value}))}),m.jsxs("div",{className:"flex justify-end gap-3",children:[m.jsx("button",{onClick:()=>p(!1),className:"bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg hover:text-white font-bold text-[10px] uppercase transition-all border border-[#3a3a3a]",children:"Cancel"}),m.jsx("button",{onClick:I,className:"bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-500 font-bold text-[10px] uppercase transition-all",children:"Confirm Pointer"})]})]}),m.jsx("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto",children:m.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold",children:[m.jsx("th",{className:"px-8 py-6 text-left",children:"Market"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Entity"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Age"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Gender"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Directive"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Justification"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Action"})]})}),m.jsx("tbody",{className:"divide-y divide-white/5",children:j.map(g=>{var x,C;return m.jsxs("tr",{className:`hover:bg-white/[0.02] group/row transition-colors ${g.recommendation==="PAUSE"?"bg-red-500/[0.03]":""}`,children:[m.jsx("td",{className:`px-8 py-4 font-bold uppercase ${g.isMarketAudit?"text-emerald-400":"text-blue-400"}`,children:g.country}),m.jsx("td",{className:"px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]",children:g.campaign}),m.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:g.age}),m.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:g.gender}),m.jsx("td",{className:"px-8 py-4 font-bold",children:s===g.id?m.jsxs("select",{className:"bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none",value:((x=o[g.id])==null?void 0:x.recommendation)||g.recommendation,onChange:w=>l(pe=>({...pe,[g.id]:{...pe[g.id]||g,recommendation:w.target.value}})),children:[m.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),m.jsx("option",{value:"SCALE",children:"SCALE"}),m.jsx("option",{value:"PAUSE",children:"PAUSE"})]}):m.jsx("span",{className:`${g.recommendation==="PAUSE"?"text-red-400":g.recommendation==="SCALE"?"text-emerald-400":"text-amber-400"}`,children:g.recommendation})}),m.jsx("td",{className:"px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed",children:s===g.id?m.jsx("textarea",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none min-h-[60px]",value:((C=o[g.id])==null?void 0:C.justification)||g.justification,onChange:w=>l(pe=>({...pe,[g.id]:{...pe[g.id]||g,justification:w.target.value}}))}):g.justification}),m.jsx("td",{className:"px-8 py-5 text-center",children:m.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity",children:[s===g.id?m.jsx("button",{onClick:()=>i(null),className:"p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg",children:m.jsx(Ux,{className:"w-4 h-4"})}):m.jsx("button",{onClick:()=>i(g.id),title:"Edit Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all",children:m.jsx(kx,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>F(g),title:"Copy Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-all",children:m.jsx($g,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>k(w=>new Set(w).add(g.id)),title:"Delete Pointer",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500 hover:bg-white/10 transition-all",children:m.jsx(Gx,{className:"w-4 h-4"})})]})})]},g.id)})})]})})]})]})},m_=({type:t,title:e,icon:n,tag:r,uploadedFiles:s,handleFileUpload:i})=>{const o=t==="pct",l=o?"border-amber-500/30":"border-blue-500/30",u=o?"bg-[#1a1500]":"bg-[#0a0a1a]",c=o?"text-amber-500":"text-blue-500",f=o?"bg-amber-500/20":"bg-blue-500/20";return m.jsxs("div",{className:`p-6 rounded-lg border ${l} ${u} mb-6 transition-all`,children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:`p-2 rounded-lg flex items-center justify-center ${f} ${c}`,children:m.jsx(n,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:`text-lg font-bold uppercase tracking-tight ${c}`,children:e}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:r})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left items-stretch",children:[m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:p=>i(t,"global",p.target.files[0])}),m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].global?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Xv,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"Global Hub"}),m.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].global?s[t].global.name:"PUSH_MASTER_FILE"})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].countryHB).length>0?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(ax,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Market Hub"}),m.jsx("div",{className:"w-full grid grid-cols-5 gap-1 px-1",children:kr.map(p=>m.jsxs("div",{className:"relative aspect-square group/item",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:v=>i(t,"countryHB",v.target.files[0],p)}),m.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].countryHB[p]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:m.jsx("span",{className:"text-[7px] font-black uppercase",children:zu[p]})})]},p))})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].alwaysOn).length>0?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(wd,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Always-On"}),m.jsx("div",{className:"w-full grid grid-cols-2 gap-1.5 px-2",children:eu.filter(p=>p!=="JP Proactive Container").map(p=>m.jsxs("div",{className:"relative h-7 group/item",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:v=>i(t,"alwaysOn",v.target.files[0],p)}),m.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].alwaysOn[p]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:m.jsx("span",{className:"text-[7px] font-black uppercase",children:p})})]},p))})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:p=>i(t,"jpProactive",p.target.files[0])}),m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].jpProactive?"bg-red-500/10 text-red-500":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(wd,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"JP Proactive Container"}),m.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].jpProactive?s[t].jpProactive.name:"PUSH_JP_PROACTIVE_CSV"})]})]})]})},QP=({uploadedFiles:t,handleFileUpload:e,startAnalysis:n,isAnalyzing:r,memoryIndex:s,loadHistoricalWeek:i,isLoadingMemory:o,historicalSnapshots:l})=>{var u,c;return m.jsx("div",{className:"min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0]",children:m.jsxs("div",{className:"max-w-[1500px] w-full z-10 text-center",children:[m.jsxs("div",{className:"mb-8",children:[m.jsx("div",{className:"inline-block mb-4",children:m.jsx("div",{className:"bg-[#FF0000] w-14 h-14 rounded-xl flex items-center justify-center mx-auto",children:m.jsx(Qv,{className:"text-white w-7 h-7"})})}),m.jsxs("h1",{className:"text-3xl font-bold tracking-tight mb-1 uppercase flex items-center justify-center gap-4",children:["Shorts Brain ",m.jsx("span",{className:"text-[#FF0000]",children:"2.0"}),m.jsx("a",{href:i1,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#555] hover:text-white hover:bg-white/10 transition-all",title:"Open Resource Drive",children:m.jsx(a1,{className:"w-5 h-5"})})]}),m.jsx("p",{className:"text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase",children:"APAC Marketing Hub"})]}),m.jsxs("div",{className:"p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500",children:m.jsx($x,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-emerald-500",children:"Campaign Shared Meta"}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Structural Definitions & Instructions"})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:[m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.campaignInfo?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(YS,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Structural Meta"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.campaignInfo?t.shared.campaignInfo.name:"PUSH_STRUCTURAL_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("shared","campaignInfo",f.target.files[0])})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.pauseRelive?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Dx,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Pause/Relive Instructions"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.pauseRelive?t.shared.pauseRelive.name:"PUSH_INSTRUCTIONS_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("shared","pauseRelive",f.target.files[0])})]})]})]}),m.jsx(m_,{type:"pct",title:"Percentage Input Hub",tag:"Relative Lift Streams",icon:ew,uploadedFiles:t,handleFileUpload:e}),m.jsx(m_,{type:"abs",title:"Absolute Input Hub",tag:"Discrete Volume Streams",icon:DS,uploadedFiles:t,handleFileUpload:e}),m.jsxs("div",{className:"p-6 rounded-lg border border-purple-500/30 bg-[#0d0a1a] mb-6 transition-all",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500",children:m.jsx(Zv,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-purple-500",children:"Attribution Analysis"}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Marketing Pressure & Reach Metrics"})]})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${(u=t.attribution)!=null&&u.impressions?"bg-purple-500/10 text-purple-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(LS,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Impressions/CTR CSV"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:(c=t.attribution)!=null&&c.impressions?t.attribution.impressions.name:"PUSH_IMPRESSIONS_CTR_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("attribution","impressions",f.target.files[0])})]})})]}),m.jsxs("button",{onClick:n,disabled:r,className:"px-10 py-4 rounded-lg font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-3 mx-auto uppercase mt-4 border border-[#3a3a3a]",children:[r?m.jsx(Vx,{className:"w-5 h-5 animate-spin"}):m.jsx(Rx,{className:"w-5 h-5"}),r?"INITIALIZING...":"EXECUTE ANALYSIS"]}),s.length>0&&m.jsxs("div",{className:"mt-10 p-6 rounded-lg border border-[#3a3a3a] bg-[#1a1a1a]",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[m.jsx(Yv,{className:"w-5 h-5 text-[#808080]"}),m.jsx("h2",{className:"text-sm font-bold uppercase tracking-wider text-[#808080]",children:"Stored Snapshots"})]}),m.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3",children:s.map(f=>m.jsxs("button",{onClick:()=>i(f.weekId),disabled:o,className:"border border-[#3a3a3a] bg-black rounded-lg p-4 text-center hover:border-[#FF0000]/50 hover:bg-[#FF0000]/5 transition-all cursor-pointer group",children:[m.jsx(Gf,{className:"w-4 h-4 text-[#808080] mx-auto mb-2 group-hover:text-[#FF0000]"}),m.jsx("span",{className:"text-xs font-bold block text-white",children:f.weekId}),m.jsx("span",{className:"text-[8px] text-[#808080] block mt-1",children:f.reportingDate||"No date"}),m.jsxs("span",{className:"text-[8px] text-[#555] block",children:[f.globalCount||0," campaigns"]})]},f.weekId))})]})]})})},JP=({userEmail:t})=>{const e=(t==null?void 0:t.trim().toLowerCase())||"",n=h_.includes(e),[r,s]=ae.useState(!1),[i,o]=ae.useState(!1),[l,u]=ae.useState(!1),[c,f]=ae.useState(!0),[p,v]=ae.useState("OKR"),[k,b]=ae.useState(!0),[N,O]=ae.useState(["DAU-SCT"]),[T,S]=ae.useState(!1),[A,P]=ae.useState("India"),[j,F]=ae.useState(null),[E,_]=ae.useState({ScaledCreation:"India",Trends:"India",CultMo:"India",ArtMo:"India","GenAI Hub":"India",AlwaysOn:"India"}),[I,g]=ae.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[x,C]=ae.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[w,pe]=ae.useState([]),[ne,Ce]=ae.useState({}),[Me,U]=ae.useState({}),[Z,te]=ae.useState("2026-02-01"),[G,Ne]=ae.useState({pct:{global:null,countryHB:{},alwaysOn:{},jpProactive:null},abs:{global:null,countryHB:{},alwaysOn:{},jpProactive:null},shared:{campaignInfo:null,pauseRelive:null},attribution:{impressions:null}}),[ht,Ge]=ae.useState([]),[Dt,Xe]=ae.useState("idle"),[St,Pn]=ae.useState(!1),[sr,xr]=ae.useState([]),je=ae.useMemo(()=>is,[]),Ut=ae.useMemo(()=>{const M=Me[p];if(!M)return[];if(p==="AlwaysOn"){const oe=new Set;return Object.values(M).forEach(me=>{Object.keys(me||{}).forEach(st=>oe.add(st))}),[...oe].sort()}const z=E[p],W=M[z];return W?Object.keys(W).sort():[]},[p,E,Me]),we=ae.useMemo(()=>{var oe,me;const M=E[p],z=I[p],W=(me=(oe=Me[p])==null?void 0:oe[M])==null?void 0:me[z];return W?Object.keys(W).sort():[]},[p,E,I,Me]),lt=async()=>{var M,z;u(!0);try{const W=H=>new Promise(K=>{H||K("");const X=new FileReader;X.onload=J=>K(J.target.result),X.readAsText(H)});let oe={};const me=G.shared.campaignInfo;if(me){const K=(await W(me)).split(/\r?\n/).filter(X=>X.trim()!=="");if(K.length>1){const X=gn(K[0]),J=ve(X,["Campaign","Campaign Name"]),ee=ve(X,["Market","Country"]),ke=ve(X,["Campaign Tabs","Tabs","Tab"]),ie=ve(X,["Campaign Sub tabs","Sub tabs","Sub tab","Sub-tabs","Subtab","Sub category"]),ge=ve(X,["Campaign Sub Sub tabs","Sub sub tabs","Sub-sub-tabs","Subsubtab"]),ye=ve(X,["Campaign Start Date","Start Date"]),Te=ve(X,["Campaign End Date","End Date"]),Pe=ve(X,["Optimisation End Date","Optimization Date"]),De=ve(X,["Age"]),Be=ve(X,["Gender"]);K.slice(1).forEach(xt=>{const Oe=gn(xt),At=Ue(Oe[J]);if(!At)return;const on=Ue(Oe[ee]).toUpperCase(),qn=Wd[on]||kr.find(On=>mn(On,on))||"India",tt=Ht(qn),$t=Ht(At);if(oe[tt]||(oe[tt]={}),oe[tt][$t]||(oe[tt][$t]={market:qn,tab:Ue(Oe[ke]),subTab:Ue(Oe[ie]),subSubTab:Ue(Oe[ge]),campaignStartDate:Ue(Oe[ye]),campaignEndDate:Ue(Oe[Te]),optimisationEndDate:Ue(Oe[Pe]),targeting:{ages:[],genders:[]}}),De!==-1&&Oe[De]){const On=Ue(Oe[De]).toLowerCase().split(",").map(vt=>vt.trim()),ft=[];On.forEach(vt=>{vt.includes("18-24")&&ft.push("18-24"),vt.includes("25-34")&&ft.push("25-34"),vt.includes("18-34")&&ft.push("18-34"),(vt.includes("35-44")||vt.includes("35+"))&&ft.push("35+")}),ft.includes("18-24")&&ft.includes("25-34")&&ft.push("18-34"),ft.push("total"),oe[tt][$t].targeting.ages=[...new Set([...oe[tt][$t].targeting.ages,...ft])]}if(Be!==-1&&Oe[Be]){const On=Ue(Oe[Be]).toLowerCase().split(",").map(vt=>vt.trim()),ft=[];On.forEach(vt=>{(vt==="male"||vt==="m")&&ft.push("male"),(vt==="female"||vt==="f")&&ft.push("female")}),ft.push("total"),oe[tt][$t].targeting.genders=[...new Set([...oe[tt][$t].targeting.genders,...ft])]}})}}let st={};const dt=G.shared.pauseRelive;if(dt){const K=(await W(dt)).split(/\r?\n/).filter(X=>X.trim()!=="");if(K.length>1){const X=gn(K[0]),J=ve(X,["Campaign","Campaign Name"]),ee=ve(X,["Age","Age Group"]),ke=ve(X,["Gender"]),ie=ve(X,["Instruction","Action"]),ge=ve(X,["Launch Date","Date"]);K.slice(1).forEach(ye=>{const Te=gn(ye),Pe=Ht(Te[J]);if(!Pe)return;const De=(Te[ee]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),Be=(Te[ke]||"total").toLowerCase().trim(),xt=(Te[ie]||"").toUpperCase().trim(),Oe=Ue(Te[ge]);st[Pe]||(st[Pe]={}),st[Pe][Be]||(st[Pe][Be]={}),st[Pe][Be][De]={instruction:xt,launchDate:Oe}})}}const Fe={},Ze=(H,K,X=null,J=null)=>{Object.values(H).forEach(ee=>{const ke=ee.meta||{};let ie=X||Ue(ke.tab)||"Uncategorized";const ge=Ol.find(Oe=>mn(Oe.id,ie)||mn(Oe.label,ie)),ye=ge?ge.id:ie,Te=J||Ue(ke.subTab)||"Generic",Pe=Ue(ke.subSubTab)||"Default",De=ke.market||K,Be=Ht(ee.country),xt=st[Ht(ee.country)];xt&&is.forEach(Oe=>{Bt.forEach(At=>{An.forEach(on=>{var ft;const qn=on.replace(/[^a-z0-9+]/g,""),tt=qn==="1824"||qn==="2534"?"1834":null,$t=[[At,qn],tt?[At,tt]:null,[At,"total"],["total",qn],tt?["total",tt]:null,["total","total"]].filter(Boolean);let On=null;for(const[vt,Za]of $t){const js=(ft=xt[vt])==null?void 0:ft[Za];if(js&&js.instruction==="PAUSE"&&js.launchDate&&js.launchDate.trim()!==""){On=js;break}}On&&(ee.metrics[Oe][At][on].isPaused=!0,ee.metrics[Oe][At][on].launchDate=On.launchDate)})})}),Fe[ye]||(Fe[ye]={}),Fe[ye][De]||(Fe[ye][De]={}),Fe[ye][De][Te]||(Fe[ye][De][Te]={}),Fe[ye][De][Te][Pe]||(Fe[ye][De][Te][Pe]={}),Fe[ye][De][Te][Pe][Be]=ee})};let _t=null;const In=async(H,K=!1)=>{const X=G[H];let J={};if(X.global){const ge=await W(X.global);if(H==="pct"){const ye=ge.split(/\r?\n/).filter(De=>De.trim()!==""),Te=gn(ye[0]),Pe=ve(Te,["Date","Reporting Date","Day"]);if(Pe!==-1){let De=null;ye.slice(1).forEach(Be=>{const xt=gn(Be),Oe=Fn(xt[Pe]);Oe&&(!De||Oe>De)&&(De=Oe)}),_t=De,F(De)}}J=pn(ge,{},oe,["Country","Market","Campaign"],K,null,!0,!1)}const ee={};for(const ge of kr)if(X.countryHB[ge]){const ye=await W(X.countryHB[ge]);ee[ge]=pn(ye,{},oe,void 0,K,ge,!1,!1)}const ke={};for(const ge of eu)if(ge!=="JP Proactive Container"&&X.alwaysOn[ge]){const ye=await W(X.alwaysOn[ge]);ke[ge]=pn(ye,{},oe,void 0,K,null,!1,!0)}let ie={};if(X.jpProactive){const ge=await W(X.jpProactive);ie=pn(ge,{},oe,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],K,"Japan",!1,!0)}return{streamGData:J,mHubParsed:ee,alwaysOnParsed:ke,jpProactiveParsed:ie}},et=await In("pct",!1),Ot=await In("abs",!0);let Dn={};if((M=G.attribution)!=null&&M.impressions){const H=await W(G.attribution.impressions);Dn=pn(H,{},oe,["Campaign","Campaign Name","Entity"],!0,null,!1,!1)}const ir=H=>H.includes("_")?H.substring(H.indexOf("_")+1):H,or=(H,K,X={})=>{const J={...H};return Object.keys(K).forEach(ee=>{if(!J[ee]){J[ee]=K[ee];return}is.forEach(ke=>{Bt.forEach(ie=>{An.forEach(ge=>{const ye=K[ee].metrics[ke][ie][ge];J[ee].metrics[ke][ie][ge].abs=ye.abs,(ke==="Impressions"||ke==="CTR")&&ye.v!==0&&ye.v!=="NA"&&(J[ee].metrics[ke][ie][ge].v=ye.v)})})})}),Object.keys(J).forEach(ee=>{const ke=Object.keys(X).find(ie=>{const ge=ir(ee),ye=ir(ie);if(J[ee].isAnchor&&X[ie].isAnchor){const Te=J[ee].market,Pe=X[ie].market;return mn(Te,Pe)||mn(J[ee].country,X[ie].country)}return mn(ee,ie)||ee.includes(ie)||ie.includes(ee)||mn(ge,ye)});ke&&Bt.forEach(ie=>{An.forEach(ge=>{var Pe,De,Be,xt,Oe,At;const ye=((Be=(De=(Pe=X[ke].metrics.Impressions)==null?void 0:Pe[ie])==null?void 0:De[ge])==null?void 0:Be.v)||0;ye>0&&ye!=="NA"&&(J[ee].metrics.Impressions[ie][ge].v=ye);const Te=((At=(Oe=(xt=X[ke].metrics.CTR)==null?void 0:xt[ie])==null?void 0:Oe[ge])==null?void 0:At.v)||0;Te>0&&Te!=="NA"&&(J[ee].metrics.CTR[ie][ge].v=Te)})})}),J},fn=or(et.streamGData,Ot.streamGData,Dn);Ze(fn,"APAC");const se={};kr.forEach(H=>{const K=or(et.mHubParsed[H]||{},Ot.mHubParsed[H]||{},Dn);se[H]=Object.values(K),Ze(K,H)}),eu.forEach(H=>{if(H==="JP Proactive Container")return;const K=or(et.alwaysOnParsed[H]||{},Ot.alwaysOnParsed[H]||{},Dn);Ze(K,"India","AlwaysOn",H)});const ue=or(et.jpProactiveParsed||{},Ot.jpProactiveParsed||{},Dn);Object.values(ue).forEach(H=>{H.market||(H.market="Japan")}),Ze(ue,"Japan","AlwaysOn","JP Proactive Container");const Ee={};Object.keys(Fe).forEach(H=>{Ee[H]={},Object.keys(Fe[H]).forEach(K=>{Ee[H][K]={},Object.keys(Fe[H][K]).forEach(X=>{Ee[H][K][X]={},Object.keys(Fe[H][K][X]).forEach(J=>{Ee[H][K][X][J]=Object.values(Fe[H][K][X][J])})})})});const $e=Object.values(fn);pe($e),Ce(se),U(Ee),o(!0);const We=VP(_t||void 0);Xe("saving");try{const H={},K=G;K.pct.global&&(H["pct-global"]=K.pct.global);for(const[J,ee]of Object.entries(K.pct.countryHB))ee&&(H[`pct-market-${J}`]=ee);for(const[J,ee]of Object.entries(K.pct.alwaysOn))ee&&(H[`pct-ao-${J}`]=ee);K.pct.jpProactive&&(H["pct-jp-proactive"]=K.pct.jpProactive),K.abs.global&&(H["abs-global"]=K.abs.global);for(const[J,ee]of Object.entries(K.abs.countryHB))ee&&(H[`abs-market-${J}`]=ee);for(const[J,ee]of Object.entries(K.abs.alwaysOn))ee&&(H[`abs-ao-${J}`]=ee);K.abs.jpProactive&&(H["abs-jp-proactive"]=K.abs.jpProactive),K.shared.campaignInfo&&(H["shared-meta"]=K.shared.campaignInfo),K.shared.pauseRelive&&(H["shared-instructions"]=K.shared.pauseRelive),(z=K.attribution)!=null&&z.impressions&&(H["attribution-impressions"]=K.attribution.impressions),await LP({weekId:We,reportingDate:_t,rawFiles:H}),Xe("saved");const X=await c_(new Date().getFullYear());Ge(X.snapshots||[])}catch(H){console.error("Memory save failed:",H),Xe("error")}}catch(W){console.error(W)}finally{u(!1)}},Ft=ae.useCallback(async M=>{Pn(!0);try{const z=await jP(M);if(!z||Object.keys(z).length===0){console.error("No CSV files found for",M);return}let W={};if(z["shared-meta"]){const se=z["shared-meta"].split(/\r?\n/).filter(ue=>ue.trim()!=="");if(se.length>1){const ue=gn(se[0]),Ee=ve(ue,["Campaign","Campaign Name"]),$e=ve(ue,["Market","Country"]),We=ve(ue,["Campaign Tabs","Tabs","Tab"]),H=ve(ue,["Sub Tab","SubTab","Sub-Tab"]),K=ve(ue,["Sub Sub Tab","SubSubTab","Sub-Sub-Tab"]),X=ve(ue,["Campaign Start Date","Start Date"]),J=ve(ue,["Campaign End Date","End Date"]),ee=ve(ue,["Optimisation End Date","Opt End Date"]);se.slice(1).forEach(ke=>{const ie=gn(ke),ge=Ue(ie[Ee]);if(!ge)return;const ye=Ue(ie[$e]).toUpperCase(),Te=Wd[ye]||kr.find(Be=>mn(Be,ye))||"India",Pe=Ht(Te),De=Ht(ge);W[Pe]||(W[Pe]={}),W[Pe][De]={market:Te,tab:Ue(ie[We]),subTab:Ue(ie[H]),subSubTab:Ue(ie[K]),campaignStartDate:Fn(ie[X]),campaignEndDate:Fn(ie[J]),optimisationEndDate:Fn(ie[ee])}})}}const oe={};if(z["shared-instructions"]){const se=z["shared-instructions"].split(/\r?\n/).filter(ue=>ue.trim()!=="");if(se.length>1){const ue=gn(se[0]),Ee=ve(ue,["Campaign","Campaign Name"]),$e=ve(ue,["Age","Age Group"]),We=ve(ue,["Gender"]),H=ve(ue,["Instruction","Action"]),K=ve(ue,["Launch Date","Date"]);se.slice(1).forEach(X=>{const J=gn(X),ee=Ht(J[Ee]);if(!ee)return;const ke=(J[$e]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),ie=(J[We]||"total").toLowerCase().trim(),ge=(J[H]||"").toUpperCase().trim(),ye=Ue(J[K]);oe[ee]||(oe[ee]={}),oe[ee][ie]||(oe[ee][ie]={}),oe[ee][ie][ke]={instruction:ge,launchDate:ye}})}}const me={},st=(se,ue,Ee=null,$e=null)=>{Object.values(se).forEach(We=>{const H=We.meta||{};let K=Ee||Ue(H.tab)||"Uncategorized";const X=Ol.find(Te=>mn(Te.id,K)||mn(Te.label,K)),J=X?X.id:K,ee=$e||Ue(H.subTab)||"Generic",ke=Ue(H.subSubTab)||"Default",ie=H.market||ue,ge=Ht(We.country),ye=oe[Ht(We.country)];ye&&is.forEach(Te=>{Bt.forEach(Pe=>{An.forEach(De=>{var on;const Be=De.replace(/[^a-z0-9+]/g,""),xt=Be==="1824"||Be==="2534"?"1834":null,Oe=[[Pe,Be],xt?[Pe,xt]:null,[Pe,"total"],["total",Be],xt?["total",xt]:null,["total","total"]].filter(Boolean);let At=null;for(const[qn,tt]of Oe){const $t=(on=ye[qn])==null?void 0:on[tt];if($t&&$t.instruction==="PAUSE"&&$t.launchDate&&$t.launchDate.trim()!==""){At=$t;break}}At&&(We.metrics[Te][Pe][De].isPaused=!0,We.metrics[Te][Pe][De].launchDate=At.launchDate)})})}),me[J]||(me[J]={}),me[J][ie]||(me[J][ie]={}),me[J][ie][ee]||(me[J][ie][ee]={}),me[J][ie][ee][ke]||(me[J][ie][ee][ke]={}),me[J][ie][ee][ke][ge]=We})},dt=(se,ue)=>{const Ee={...se};return Object.keys(ue).forEach($e=>{if(!Ee[$e]){Ee[$e]=ue[$e];return}is.forEach(We=>{Bt.forEach(H=>{An.forEach(K=>{const X=ue[$e].metrics[We][H][K];Ee[$e].metrics[We][H][K].abs=X.abs,(We==="Impressions"||We==="CTR")&&X.v!==0&&X.v!=="NA"&&(Ee[$e].metrics[We][H][K].v=X.v)})})})}),Ee},Fe=z["attribution-impressions"]?pn(z["attribution-impressions"],{},W,["Campaign","Campaign Name","Entity"],!0,null,!1,!1):{},Ze=z["pct-global"]?pn(z["pct-global"],{},W,["Country","Market","Campaign"],!1,null,!0,!1):{},_t=z["abs-global"]?pn(z["abs-global"],{},W,["Country","Market","Campaign"],!0,null,!0,!1):{},In=dt(Ze,_t,Fe);st(In,"APAC");let et=null;if(z["pct-global"]){const se=z["pct-global"].split(/\r?\n/).filter(ue=>ue.trim()!=="");if(se.length>1){const ue=gn(se[0]),Ee=ve(ue,["Date","Reporting Date","Day"]);Ee!==-1&&se.slice(1).forEach($e=>{const We=gn($e),H=Fn(We[Ee]);H&&(!et||H>et)&&(et=H)})}}const Ot={};kr.forEach(se=>{const ue=z[`pct-market-${se}`]?pn(z[`pct-market-${se}`],{},W,void 0,!1,se,!1,!1):{},Ee=z[`abs-market-${se}`]?pn(z[`abs-market-${se}`],{},W,void 0,!0,se,!1,!1):{},$e=dt(ue,Ee,Fe);Ot[se]=Object.values($e),st($e,se)}),eu.forEach(se=>{if(se==="JP Proactive Container")return;const ue=z[`pct-ao-${se}`]?pn(z[`pct-ao-${se}`],{},W,void 0,!1,null,!1,!0):{},Ee=z[`abs-ao-${se}`]?pn(z[`abs-ao-${se}`],{},W,void 0,!0,null,!1,!0):{},$e=dt(ue,Ee,Fe);st($e,"India","AlwaysOn",se)});const Dn=z["pct-jp-proactive"]?pn(z["pct-jp-proactive"],{},W,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],!1,"Japan",!1,!0):{},ir=z["abs-jp-proactive"]?pn(z["abs-jp-proactive"],{},W,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],!0,"Japan",!1,!0):{},or=dt(Dn,ir,Fe);Object.values(or).forEach(se=>{se.market||(se.market="Japan")}),st(or,"Japan","AlwaysOn","JP Proactive Container");const fn={};Object.keys(me).forEach(se=>{fn[se]={},Object.keys(me[se]).forEach(ue=>{fn[se][ue]={},Object.keys(me[se][ue]).forEach(Ee=>{fn[se][ue][Ee]={},Object.keys(me[se][ue][Ee]).forEach($e=>{fn[se][ue][Ee][$e]=Object.values(me[se][ue][Ee][$e])})})})}),pe(Object.values(In)),Ce(Ot),U(fn),F(et),o(!0),v("OKR"),xr(se=>se.find(ue=>ue.weekId===M)?se:[...se,{weekId:M}])}catch(z){console.error("Failed to load snapshot:",z)}finally{Pn(!1)}},[]);ae.useEffect(()=>{c_(new Date().getFullYear()).then(async M=>{const z=M.snapshots||[];if(Ge(z),z.length>0){const W=z[z.length-1];await Ft(W.weekId)}}).catch(()=>{}).finally(()=>f(!1))},[Ft]),ae.useEffect(()=>{g(M=>({...M,[p]:""})),C(M=>({...M,[p]:""}))},[p,E[p]]);const Jt=(M,z,W,oe)=>{Ne(me=>{const st=z==="countryHB"||z==="alwaysOn",dt={...me[M]};return st?dt[z]={...dt[z],[oe]:W}:dt[z]=W,{...me,[M]:dt}})};return c?m.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},children:m.jsxs("div",{style:{textAlign:"center"},children:[m.jsxs("div",{style:{fontSize:22,fontWeight:700},children:["BRAIN ",m.jsx("span",{style:{color:"#FF0000"},children:"2.0"})]}),m.jsx("p",{style:{color:"#737373",fontSize:13,marginTop:8},children:"Loading latest data…"})]})}):i?m.jsxs("div",{className:"flex h-screen bg-black text-[#e0e0e0] overflow-hidden",children:[m.jsxs("aside",{className:`${k?"w-72":"w-20"} transition-all duration-300 bg-[#1a1a1a] border-r border-[#3a3a3a] flex flex-col z-50`,children:[m.jsxs("div",{className:"p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#3a3a3a]",children:[m.jsx("div",{className:"bg-[#FF0000] p-2 rounded-lg flex items-center justify-center",children:m.jsx(Qv,{className:"w-5 h-5 text-white"})}),k&&m.jsxs("div",{className:"flex-1",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("h2",{className:"text-lg font-bold tracking-tight",children:["BRAIN ",m.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),m.jsx("a",{href:i1,target:"_blank",rel:"noopener noreferrer",className:"text-[#444] hover:text-white transition-colors",title:"Source Drive",children:m.jsx(a1,{className:"w-4 h-4"})})]}),m.jsx("p",{className:"text-[8px] font-bold uppercase text-[#808080] tracking-widest",children:"APAC Shorts"})]})]}),m.jsxs("nav",{className:"flex-1 px-4 space-y-1 overflow-y-auto",children:[zP.map(M=>{const z=M.id==="Upload"&&!n,W=()=>{M.id==="Upload"?z?s(!0):(s(!1),o(!1)):(s(!1),v(M.id))},oe=M.id==="Upload"?r:p===M.id&&!r;return m.jsxs("button",{onClick:W,className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all group relative cursor-pointer ${oe?"bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,title:z?"Admin access required — click for details":M.label,children:[m.jsx(M.icon,{className:"w-5 h-5 shrink-0"}),k&&m.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:[M.label,z?" 🔒":""]})]},M.id)}),m.jsxs("button",{onClick:()=>S(!T),className:"w-full flex items-center justify-between p-3 rounded-lg text-[#808080] hover:text-white cursor-pointer border border-transparent",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx(ux,{className:"w-5 h-5 shrink-0"}),k&&m.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:"Campaign Deepdive"})]}),k&&(T?m.jsx(qS,{className:"w-4 h-4"}):m.jsx(US,{className:"w-4 h-4"}))]}),T&&k&&m.jsx("div",{className:"pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300",children:Ol.map(M=>m.jsxs("button",{onClick:()=>v(M.id),className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${p===M.id?"bg-[#FF0000]/10 text-[#FF0000]":"text-[#555] hover:bg-white/5 hover:text-white"}`,children:[m.jsx(M.icon,{className:"w-4 h-4 shrink-0"}),m.jsx("span",{className:"text-[10px] font-bold uppercase",children:M.label})]},M.id))}),k&&m.jsxs("div",{className:"mt-6 pt-4 border-t border-[#3a3a3a]",children:[m.jsxs("div",{className:"flex items-center gap-2 px-3 mb-3",children:[m.jsx(Yv,{className:"w-4 h-4 text-[#808080]"}),m.jsx("span",{className:"text-[10px] font-bold uppercase text-[#808080] tracking-wider",children:"Memory"}),Dt==="saving"&&m.jsx(wx,{className:"w-3 h-3 text-amber-400 animate-spin ml-auto"}),Dt==="saved"&&m.jsx(QS,{className:"w-3 h-3 text-emerald-400 ml-auto"}),Dt==="error"&&m.jsx(WS,{className:"w-3 h-3 text-red-400 ml-auto"})]}),m.jsx("div",{className:"space-y-1 max-h-[200px] overflow-y-auto px-1",children:ht.length===0?m.jsx("p",{className:"text-[9px] text-[#555] px-3 py-2",children:"No snapshots stored yet"}):ht.map(M=>m.jsxs("button",{onClick:()=>Ft(M.weekId),disabled:St,className:`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-all cursor-pointer ${sr.some(z=>z.weekId===M.weekId)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,children:[m.jsx(Gf,{className:"w-3 h-3 shrink-0"}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("span",{className:"text-[10px] font-bold block",children:M.weekId}),m.jsx("span",{className:"text-[8px] opacity-60",children:M.reportingDate||"No date"})]}),m.jsx("span",{className:"text-[8px] opacity-50",children:M.globalCount||0})]},M.weekId))})]})]}),k&&m.jsxs("div",{className:"px-6 py-3 border-t border-[#3a3a3a] text-[#808080]",children:[m.jsx("div",{className:"text-[8px] font-bold uppercase tracking-widest text-[#555] mb-1",children:"Signed in"}),m.jsx("div",{className:"text-[10px] truncate",title:e,children:e||"—"}),m.jsx("div",{className:"text-[8px] mt-1 uppercase tracking-wider",children:n?m.jsx("span",{className:"text-emerald-400",children:"Ingestion admin"}):m.jsx("span",{className:"text-[#555]",children:"Read-only"})})]}),m.jsx("button",{type:"button",onClick:()=>b(!k),className:"p-6 border-t border-[#3a3a3a] text-[#555] hover:text-white flex items-center justify-center transition-colors",title:k?"Collapse sidebar":"Expand sidebar",children:k?m.jsx(Zx,{className:"w-5 h-5"}):m.jsx(Ix,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[m.jsxs("header",{className:"px-8 py-5 border-b border-[#3a3a3a] flex items-center justify-between bg-[#1a1a1a]",children:[m.jsx("div",{className:"flex items-center gap-4",children:m.jsx("h4",{className:"text-sm font-bold text-white uppercase",children:r?"Data Ingestion":p})}),m.jsxs("button",{className:"bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[m.jsx(ix,{className:"w-4 h-4 mr-2 inline"})," Export Hub"]})]}),m.jsxs("main",{className:"flex-1 overflow-auto p-10 relative",children:[r&&m.jsxs("div",{className:"max-w-2xl mx-auto mt-12 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-10",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[m.jsx("div",{className:"bg-[#FF0000]/10 p-2 rounded-lg",children:m.jsx(Jv,{className:"w-5 h-5 text-[#FF0000]"})}),m.jsx("h2",{className:"text-lg font-bold text-white",children:"Data Ingestion — Access Required"})]}),m.jsx("p",{className:"text-[13px] text-[#a0a0a0] leading-relaxed mb-6",children:"Data Ingestion is restricted to a small admin allowlist because it overwrites the saved snapshot for everyone on EXECUTE."}),m.jsxs("div",{className:"space-y-4 mb-6",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-[9px] font-bold uppercase tracking-widest text-[#808080] mb-1",children:"You are signed in as"}),m.jsx("div",{className:"text-[14px] text-white font-mono",children:e||"(no email reported)"})]}),m.jsxs("div",{children:[m.jsx("div",{className:"text-[9px] font-bold uppercase tracking-widest text-[#808080] mb-1",children:"Allowlisted admins"}),m.jsx("ul",{className:"text-[12px] text-[#e0e0e0] font-mono space-y-1",children:h_.map(M=>m.jsx("li",{children:M},M))})]})]}),m.jsx("div",{className:"text-[12px] text-[#808080] border-t border-[#3a3a3a] pt-5",children:"To request access, contact one of the admins above. If you believe you should already be on this list, your sign-in email above may not match exactly — check casing or alias."}),m.jsxs("button",{onClick:()=>s(!1),className:"mt-6 text-[10px] font-bold uppercase tracking-widest text-[#808080] hover:text-white transition-colors",children:["← Back to ",p]})]}),!r&&p==="OKR"&&m.jsx(KP,{globalData:w,regionalData:ne,latestDate:j,quarterStart:Z}),!r&&(p==="Global Hub"||p==="Market Hub")&&m.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[m.jsx(d_,{activeMetrics:N.filter(M=>je.includes(M)),allowedMetrics:je,toggleMetric:M=>O(z=>z.includes(M)?z.length>1?z.filter(W=>W!==M):z:[...z,M]),handleAllToggle:()=>O(M=>M.length===je.length?["DAU-SCT"]:[...je])}),p==="Market Hub"&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(zg,{className:"w-6 h-6 text-red-600"}),m.jsx("select",{value:A,onChange:M=>P(M.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:kr.map(M=>m.jsx("option",{value:M,className:"bg-neutral-900",children:M},M))})]}),m.jsx(f_,{data:p==="Global Hub"?w:(()=>{const M=(ne[A]||[]).filter(W=>W.country&&W.country.toUpperCase()!=="UNKNOWN"),z=w.find(W=>mn(W.country,A)||mn(W.country,zu[A]));return z?[{...z,isAnchor:!0},...M]:M})(),activeMetrics:N.filter(M=>je.includes(M)),isCampaignView:p==="Market Hub",hideDates:p==="Global Hub",latestGlobalDate:j})]}),!r&&(Ol.some(M=>M.id===p)||Me[p])&&p!=="OKR"&&m.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[m.jsx(d_,{activeMetrics:N.filter(M=>je.includes(M)),allowedMetrics:je,toggleMetric:M=>O(z=>z.includes(M)?z.length>1?z.filter(W=>W!==M):z:[...z,M]),handleAllToggle:()=>O(M=>M.length===je.length?["DAU-SCT"]:[...je])}),m.jsxs("div",{className:"flex flex-wrap gap-4",children:[m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(zg,{className:"w-6 h-6 text-red-600"}),m.jsx("select",{value:E[p],onChange:M=>_(z=>({...z,[p]:M.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:kr.map(M=>m.jsx("option",{value:M,className:"bg-neutral-900",children:M},M))})]}),Ut.length>0&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(hx,{className:"w-6 h-6 text-amber-500"}),m.jsxs("select",{value:I[p],onChange:M=>g(z=>({...z,[p]:M.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:[m.jsx("option",{value:"",className:"bg-neutral-900",children:"ALL SUB TABS"}),Ut.map(M=>m.jsx("option",{value:M,className:"bg-neutral-900",children:M},M))]})]}),p!=="AlwaysOn"&&we.length>0&&I[p]!==""&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(_x,{className:"w-6 h-6 text-purple-500"}),m.jsxs("select",{value:x[p],onChange:M=>C(z=>({...z,[p]:M.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:[m.jsx("option",{value:"",className:"bg-neutral-900",children:"ALL SUB SUB TABS"}),we.map(M=>m.jsx("option",{value:M,className:"bg-neutral-900",children:M},M))]})]})]}),m.jsx(f_,{data:(()=>{var oe,me,st,dt,Fe,Ze,_t,In;const M=E[p],z=I[p],W=x[p];if(p==="AlwaysOn"&&z==="JP Proactive Container"){const et=(me=(oe=Me.AlwaysOn)==null?void 0:oe.Japan)==null?void 0:me["JP Proactive Container"];return et?Object.values(et).flatMap(Ot=>Array.isArray(Ot)?Ot:Object.values(Ot).flat()):[]}if(!z){const et=(st=Me[p])==null?void 0:st[M];return et?Object.values(et).flatMap(Ot=>Object.values(Ot).flat()):[]}if(!W||p==="AlwaysOn"){const et=(Fe=(dt=Me[p])==null?void 0:dt[M])==null?void 0:Fe[z];if(!et)return[];const Ot=Object.values(et).flat();return p==="AlwaysOn"?[...Ot].sort((Dn,ir)=>(Dn.explicitTrendStart||Dn.dataMinDate||"").localeCompare(ir.explicitTrendStart||ir.dataMinDate||"")):Ot}return((In=(_t=(Ze=Me[p])==null?void 0:Ze[M])==null?void 0:_t[z])==null?void 0:In[W])||[]})(),activeMetrics:N.filter(M=>je.includes(M)),isCampaignView:!0,isAlwaysOn:p==="AlwaysOn",latestGlobalDate:j})]})]})]}),m.jsx("style",{children:`
        body { background-color: #000000; color: #e0e0e0; margin: 0; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 10px; }
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; padding-right: 2rem; }
      `})]}):m.jsx(QP,{uploadedFiles:G,handleFileUpload:Jt,startAnalysis:lt,isAnalyzing:l,memoryIndex:ht,loadHistoricalWeek:Ft,isLoadingMemory:St,historicalSnapshots:sr})};function l1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YP=l1,u1=new $a("auth","Firebase",l1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=new Kf("@firebase/auth");function XP(t,...e){Bu.logLevel<=Ae.WARN&&Bu.warn(`Auth (${mi}): ${t}`,...e)}function tu(t,...e){Bu.logLevel<=Ae.ERROR&&Bu.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,...e){throw $p(t,...e)}function tr(t,...e){return $p(t,...e)}function Fp(t,e,n){const r={...YP(),[e]:n};return new $a("auth","Firebase",r).create(e,{appName:t.name})}function ei(t){return Fp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ir(t,"argument-error"),Fp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $p(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u1.create(t,...e)}function ce(t,e,...n){if(!t)throw $p(e,...n)}function Or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tu(e),new Error(e)}function qr(t,e){t||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function e2(){return g_()==="http:"||g_()==="https:"}function g_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e2()||mA()||"connection"in navigator)?navigator.onLine:!0}function n2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,qr(n>e,"Short delay should be less than long delay!"),this.isMobile=dA()||gA()}get(){return t2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t,e){qr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i2=new Ja(3e4,6e4);function Bp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vo(t,e,n,r,s={}){return h1(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=za({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return pA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&pi(t.emulatorConfig.host)&&(c.credentials="include"),c1.fetch()(await d1(t,t.config.apiHost,n,l),c)})}async function h1(t,e,n){t._canInitEmulator=!1;const r={...r2,...e};try{const s=new a2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Vl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Vl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Vl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fp(t,f,c);Ir(t,f)}}catch(s){if(s instanceof Sr)throw s;Ir(t,"network-request-failed",{message:String(s)})}}async function o2(t,e,n,r,s={}){const i=await vo(t,e,n,r,s);return"mfaPendingCredential"in i&&Ir(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function d1(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?zp(t.config,s):`${t.config.apiScheme}://${s}`;return s2.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class a2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tr(this.auth,"network-request-failed")),i2.get())})}}function Vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tr(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(t,e){return vo(t,"POST","/v1/accounts:delete",e)}async function Hu(t,e){return vo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u2(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),s=Hp(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:aa(Sh(s.auth_time)),issuedAtTime:aa(Sh(s.iat)),expirationTime:aa(Sh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function Hp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tu("JWT malformed, contained fewer than 3 sections"),null;try{const s=rw(n);return s?JSON.parse(s):(tu("Failed to decode base64 JWT payload"),null)}catch(s){return tu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function y_(t){const e=Hp(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sr&&c2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function c2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=aa(this.lastLoginAt),this.creationTime=aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Va(t,Hu(e,{idToken:n}));ce(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?f1(s.providerUserInfo):[],o=f2(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Qd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function d2(t){const e=Pt(t);await qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function f1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e){const n=await h1(t,{},async()=>{const r=za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await d1(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&pi(t.emulatorConfig.host)&&(u.credentials="include"),c1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function m2(t,e){return vo(t,"POST","/v2/accounts:revokeToken",Bp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=y_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await p2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qi;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new h2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Va(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return u2(this,e)}reload(){return d2(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(ei(this.auth));const e=await this.getIdToken();return await Va(this,l2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:k,providerData:b,stsTokenManager:N}=n;ce(p&&N,e,"internal-error");const O=Qi.fromJSON(this.name,N);ce(typeof p=="string",e,"internal-error"),Zr(r,e.name),Zr(s,e.name),ce(typeof v=="boolean",e,"internal-error"),ce(typeof k=="boolean",e,"internal-error"),Zr(i,e.name),Zr(o,e.name),Zr(l,e.name),Zr(u,e.name),Zr(c,e.name),Zr(f,e.name);const T=new Yn({uid:p,auth:e,email:s,emailVerified:v,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:O,createdAt:c,lastLoginAt:f});return b&&Array.isArray(b)&&(T.providerData=b.map(S=>({...S}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qi;s.updateFromServerResponse(n);const i=new Yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?f1(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qi;l.updateFromIdToken(r);const u=new Yn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new Map;function Vr(t){qr(t instanceof Function,"Expected a class definition");let e=__.get(t);return e?(qr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,__.set(t,e),e)}/**
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
 */class p1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}p1.type="NONE";const v_=p1;/**
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
 */function nu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nu(this.userKey,s.apiKey,i),this.fullPersistenceKey=nu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hu(this.auth,{idToken:e}).catch(()=>{});return n?Yn._fromGetAccountInfoResponse(this.auth,n,e):null}return Yn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ji(Vr(v_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Vr(v_);const o=nu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const v=await Hu(e,{idToken:f}).catch(()=>{});if(!v)break;p=await Yn._fromGetAccountInfoResponse(e,v,f)}else p=Yn._fromJSON(e,f);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ji(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ji(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w1(e))return"Blackberry";if(E1(e))return"Webos";if(g1(e))return"Safari";if((e.includes("chrome/")||y1(e))&&!e.includes("edge/"))return"Chrome";if(v1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function m1(t=sn()){return/firefox\//i.test(t)}function g1(t=sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y1(t=sn()){return/crios\//i.test(t)}function _1(t=sn()){return/iemobile/i.test(t)}function v1(t=sn()){return/android/i.test(t)}function w1(t=sn()){return/blackberry/i.test(t)}function E1(t=sn()){return/webos/i.test(t)}function qp(t=sn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g2(t=sn()){var e;return qp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function y2(){return yA()&&document.documentMode===10}function T1(t=sn()){return qp(t)||v1(t)||E1(t)||w1(t)||/windows phone/i.test(t)||_1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t,e=[]){let n;switch(t){case"Browser":n=w_(sn());break;case"Worker":n=`${w_(sn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
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
 */class _2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function v2(t,e={}){return vo(t,"GET","/v2/passwordPolicy",Bp(t,e))}/**
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
 */const w2=6;class E2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??w2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new E_(this),this.idTokenSubscription=new E_(this),this.beforeStateQueue=new _2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hu(this,{idToken:e}),r=await Yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(ei(this));const n=e?Pt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v2(this),n=new E2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await m2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vr(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[Vr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&XP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ac(t){return Pt(t)}class E_{constructor(e){this.auth=e,this.observer=null,this.addObserver=xA(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I2(t){Gp=t}function S2(t){return Gp.loadJS(t)}function x2(){return Gp.gapiScript}function A2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t,e){const n=dc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(oi(i,e??{}))return s;Ir(s,"already-initialized")}return n.initialize({options:e})}function C2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R2(t,e,n){const r=Ac(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=S1(e),{host:o,port:l}=b2(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(oi(c,r.config.emulator)&&oi(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,pi(o)?Wf(`${i}//${o}${u}`):N2()}function S1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function b2(t){const e=S1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:T_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:T_(o)}}}function T_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,n){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t,e){return o2(t,"POST","/v1/accounts:signInWithIdp",Bp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="http://localhost";class hi extends x1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ir("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new hi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=za(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ya extends Wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Ya{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return os.credential(e.oauthAccessToken)}catch{return null}}}os.FACEBOOK_SIGN_IN_METHOD="facebook.com";os.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Ya{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Ya{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ls.credential(n,r)}catch{return null}}}ls.TWITTER_SIGN_IN_METHOD="twitter.com";ls.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Yn._fromIdTokenResponse(e,r,s),o=I_(r);return new uo({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=I_(r);return new uo({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function I_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends Sr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Gu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Gu(e,n,r,s)}}function A1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Gu._fromErrorAndOperation(t,i,e,r):i})}async function D2(t,e,n=!1){const r=await Va(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return uo._forOperation(t,"link",r)}/**
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
 */async function O2(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(ei(r));const s="reauthenticate";try{const i=await Va(t,A1(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Hp(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),uo._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ir(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(t,e,n=!1){if(Ln(t.app))return Promise.reject(ei(t));const r="signIn",s=await A1(t,r,e),i=await uo._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function M2(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function L2(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function j2(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}function U2(t){return Pt(t).signOut()}const Wu="__sak";/**
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
 */class k1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wu,"1"),this.storage.removeItem(Wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=1e3,$2=10;class C1 extends k1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);y2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},F2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C1.type="LOCAL";const z2=C1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1 extends k1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R1.type="SESSION";const b1=R1;/**
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
 */function B2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await B2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class H2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Kp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===c)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(){return window}function q2(t){wr().location.href=t}/**
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
 */function N1(){return typeof wr().WorkerGlobalScope<"u"&&typeof wr().importScripts=="function"}async function G2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function K2(){return N1()?self:null}/**
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
 */const P1="firebaseLocalStorageDb",Q2=1,Ku="firebaseLocalStorage",D1="fbase_key";class Xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function J2(){const t=indexedDB.deleteDatabase(P1);return new Xa(t).toPromise()}function Jd(){const t=indexedDB.open(P1,Q2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:D1})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await J2(),e(await Jd()))})})}async function S_(t,e,n){const r=Cc(t,!0).put({[D1]:e,value:n});return new Xa(r).toPromise()}async function Y2(t,e){const n=Cc(t,!1).get(e),r=await new Xa(n).toPromise();return r===void 0?null:r.value}function x_(t,e){const n=Cc(t,!0).delete(e);return new Xa(n).toPromise()}const X2=800,Z2=3;class O1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Z2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(K2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await G2(),!this.activeServiceWorker)return;this.sender=new H2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||W2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jd();return await S_(e,Wu,"1"),await x_(e,Wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>S_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Y2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>x_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cc(s,!1).getAll();return new Xa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O1.type="LOCAL";const eD=O1;new Ja(3e4,6e4);/**
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
 */function V1(t,e){return e?Vr(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qp extends x1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tD(t){return V2(t.auth,new Qp(t),t.bypassAuthState)}function nD(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),O2(n,new Qp(t),t.bypassAuthState)}async function rD(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),D2(n,new Qp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tD;case"linkViaPopup":case"linkViaRedirect":return rD;case"reauthViaPopup":case"reauthViaRedirect":return nD;default:Ir(this.auth,"internal-error")}}resolve(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new Ja(2e3,1e4);async function iD(t,e,n){if(Ln(t.app))return Promise.reject(tr(t,"operation-not-supported-in-this-environment"));const r=Ac(t);ZP(t,e,Wp);const s=V1(r,n);return new Js(r,"signInViaPopup",e,s).executeNotNull()}class Js extends M1{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Js.currentPopupAction&&Js.currentPopupAction.cancel(),Js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const e=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sD.get())};e()}}Js.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="pendingRedirect",ru=new Map;class aD extends M1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ru.get(this.auth._key());if(!e){try{const r=await lD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ru.set(this.auth._key(),e)}return this.bypassAuthState||ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lD(t,e){const n=hD(e),r=cD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uD(t,e){ru.set(t._key(),e)}function cD(t){return Vr(t._redirectPersistence)}function hD(t){return nu(oD,t.config.apiKey,t.name)}async function dD(t,e,n=!1){if(Ln(t.app))return Promise.reject(ei(t));const r=Ac(t),s=V1(r,e),o=await new aD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=10*60*1e3;class pD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!L1(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(tr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fD&&this.cachedEventUids.clear(),this.cachedEventUids.has(A_(e))}saveEventToCache(e){this.cachedEventUids.add(A_(e)),this.lastProcessedEventTime=Date.now()}}function A_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function L1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e={}){return vo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_D=/^https?/;async function vD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gD(t);for(const n of e)try{if(wD(n))return}catch{}Ir(t,"unauthorized-domain")}function wD(t){const e=Kd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_D.test(n))return!1;if(yD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ED=new Ja(3e4,6e4);function k_(){const t=wr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TD(t){return new Promise((e,n)=>{var s,i,o;function r(){k_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{k_(),n(tr(t,"network-request-failed"))},timeout:ED.get()})}if((i=(s=wr().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=wr().gapi)!=null&&o.load)r();else{const l=A2("iframefcb");return wr()[l]=()=>{gapi.load?r():n(tr(t,"network-request-failed"))},S2(`${x2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw su=null,e})}let su=null;function ID(t){return su=su||TD(t),su}/**
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
 */const SD=new Ja(5e3,15e3),xD="__/auth/iframe",AD="emulator/auth/iframe",kD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RD(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zp(e,AD):`https://${t.config.authDomain}/${xD}`,r={apiKey:e.apiKey,appName:t.name,v:mi},s=CD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${za(r).slice(1)}`}async function bD(t){const e=await ID(t),n=wr().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:RD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tr(t,"network-request-failed"),l=wr().setTimeout(()=>{i(o)},SD.get());function u(){wr().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const ND={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PD=500,DD=600,OD="_blank",VD="http://localhost";class C_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MD(t,e,n,r=PD,s=DD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...ND,width:r.toString(),height:s.toString(),top:i,left:o},c=sn().toLowerCase();n&&(l=y1(c)?OD:n),m1(c)&&(e=e||VD,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[k,b])=>`${v}${k}=${b},`,"");if(g2(c)&&l!=="_self")return LD(e||"",l),new C_(null);const p=window.open(e||"",l,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new C_(p)}function LD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jD="__/auth/handler",UD="emulator/auth/handler",FD=encodeURIComponent("fac");async function R_(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:s};if(e instanceof Wp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ya){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${FD}=${encodeURIComponent(u)}`:"";return`${$D(t)}?${za(l).slice(1)}${c}`}function $D({config:t}){return t.emulator?zp(t,UD):`https://${t.authDomain}/${jD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="webStorageSupport";class zD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b1,this._completeRedirectFn=dD,this._overrideRedirectResult=uD}async _openPopup(e,n,r,s){var o;qr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await R_(e,n,r,Kd(),s);return MD(e,i,Kp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await R_(e,n,r,Kd(),s);return q2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bD(e),r=new pD(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xh,{type:xh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[xh];i!==void 0&&n(!!i),Ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T1()||g1()||qp()}}const BD=zD;var b_="@firebase/auth",N_="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GD(t){ai(new As("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I1(t)},c=new T2(r,s,i,u);return C2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ai(new As("auth-internal",e=>{const n=Ac(e.getProvider("auth").getImmediate());return(r=>new HD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(b_,N_,qD(t)),gr(b_,N_,"esm2020")}/**
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
 */const WD=5*60,KD=aw("authIdTokenMaxAge")||WD;let P_=null;const QD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KD)return;const s=n==null?void 0:n.token;P_!==s&&(P_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JD(t=Jf()){const e=dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=k2(t,{popupRedirectResolver:BD,persistence:[eD,z2,b1]}),r=aw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=QD(i.toString());L2(n,o,()=>o(n.currentUser)),M2(n,l=>o(l))}}const s=sw("auth");return s&&R2(n,`http://${s}`),n}function YD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}I2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tr("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",YD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GD("Browser");const Ah=JD(jp),XD=new br;function ZD(t){return t?t==="ivanho.wz@gmail.com"?!0:t.endsWith("@google.com"):!1}const D_={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},O_={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},e4={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},t4={color:"#f87171",marginTop:16,fontSize:14},V_={color:"#737373",fontSize:13,marginTop:8};function n4({children:t}){const[e,n]=ae.useState(null),[r,s]=ae.useState(!0),[i,o]=ae.useState(null),[l,u]=ae.useState(!1);ae.useEffect(()=>j2(Ah,f=>{f&&!ZD(f.email)?(U2(Ah),n(null),o(`${f.email} is not authorized.`)):(n(f),o(null)),s(!1)}),[]);const c=async()=>{u(!0),o(null);try{await iD(Ah,XD)}catch(f){o((f==null?void 0:f.message)||"Sign-in failed.")}finally{u(!1)}};return r?m.jsx("div",{style:D_,children:m.jsx("div",{style:O_,children:m.jsx("p",{style:V_,children:"Loading…"})})}):e?Rr.Children.map(t,f=>Rr.isValidElement(f)?Rr.cloneElement(f,{userEmail:e.email}):f):m.jsx("div",{style:D_,children:m.jsxs("div",{style:O_,children:[m.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Brain"}),m.jsx("p",{style:V_,children:"Sign in to continue"}),m.jsx("button",{style:e4,onClick:c,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&m.jsx("p",{style:t4,children:i})]})})}kh.createRoot(document.getElementById("root")).render(m.jsx(Rr.StrictMode,{children:m.jsx(n4,{children:m.jsx(JP,{})})}));
//# sourceMappingURL=index-CvSSHCDv.js.map
