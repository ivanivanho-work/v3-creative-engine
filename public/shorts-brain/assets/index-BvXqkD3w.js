(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function tT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j_={exports:{}},Yu={},U_={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),nT=Symbol.for("react.portal"),rT=Symbol.for("react.fragment"),sT=Symbol.for("react.strict_mode"),iT=Symbol.for("react.profiler"),oT=Symbol.for("react.provider"),aT=Symbol.for("react.context"),lT=Symbol.for("react.forward_ref"),uT=Symbol.for("react.suspense"),cT=Symbol.for("react.memo"),hT=Symbol.for("react.lazy"),Nm=Symbol.iterator;function dT(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var F_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$_=Object.assign,z_={};function fo(t,e,n){this.props=t,this.context=e,this.refs=z_,this.updater=n||F_}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B_(){}B_.prototype=fo.prototype;function Zd(t,e,n){this.props=t,this.context=e,this.refs=z_,this.updater=n||F_}var ef=Zd.prototype=new B_;ef.constructor=Zd;$_(ef,fo.prototype);ef.isPureReactComponent=!0;var Pm=Array.isArray,H_=Object.prototype.hasOwnProperty,tf={current:null},q_={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)H_.call(e,r)&&!q_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ua,type:t,key:i,ref:o,props:s,_owner:tf.current}}function fT(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function pT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dm=/\/+/g;function zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pT(""+t.key):e.toString(36)}function jl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case nT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+zc(o,0):r,Pm(s)?(n="",t!=null&&(n=t.replace(Dm,"$&/")+"/"),jl(s,e,n,"",function(c){return c})):s!=null&&(nf(s)&&(s=fT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Dm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Pm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+zc(i,l);o+=jl(i,e,n,u,s)}else if(u=dT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+zc(i,l++),o+=jl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var r=[],s=0;return jl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function mT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},Ul={transition:null},gT={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:tf};function W_(){throw Error("act(...) is not supported in production builds of React.")}Te.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Te.Component=fo;Te.Fragment=rT;Te.Profiler=iT;Te.PureComponent=Zd;Te.StrictMode=sT;Te.Suspense=uT;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gT;Te.act=W_;Te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=tf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)H_.call(e,u)&&!q_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ua,type:t.type,key:s,ref:i,props:r,_owner:o}};Te.createContext=function(t){return t={$$typeof:aT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oT,_context:t},t.Consumer=t};Te.createElement=G_;Te.createFactory=function(t){var e=G_.bind(null,t);return e.type=t,e};Te.createRef=function(){return{current:null}};Te.forwardRef=function(t){return{$$typeof:lT,render:t}};Te.isValidElement=nf;Te.lazy=function(t){return{$$typeof:hT,_payload:{_status:-1,_result:t},_init:mT}};Te.memo=function(t,e){return{$$typeof:cT,type:t,compare:e===void 0?null:e}};Te.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};Te.unstable_act=W_;Te.useCallback=function(t,e){return hn.current.useCallback(t,e)};Te.useContext=function(t){return hn.current.useContext(t)};Te.useDebugValue=function(){};Te.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Te.useEffect=function(t,e){return hn.current.useEffect(t,e)};Te.useId=function(){return hn.current.useId()};Te.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Te.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Te.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Te.useMemo=function(t,e){return hn.current.useMemo(t,e)};Te.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Te.useRef=function(t){return hn.current.useRef(t)};Te.useState=function(t){return hn.current.useState(t)};Te.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Te.useTransition=function(){return hn.current.useTransition()};Te.version="18.3.1";U_.exports=Te;var ie=U_.exports;const Nr=tT(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yT=ie,_T=Symbol.for("react.element"),vT=Symbol.for("react.fragment"),wT=Object.prototype.hasOwnProperty,ET=yT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TT={key:!0,ref:!0,__self:!0,__source:!0};function K_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wT.call(e,r)&&!TT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:_T,type:t,key:i,ref:o,props:s,_owner:ET.current}}Yu.Fragment=vT;Yu.jsx=K_;Yu.jsxs=K_;j_.exports=Yu;var m=j_.exports,Rh={},Q_={exports:{}},Dn={},J_={exports:{}},Y_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,K){var ee=U.length;U.push(K);e:for(;0<ee;){var J=ee-1>>>1,Oe=U[J];if(0<s(Oe,K))U[J]=K,U[ee]=Oe,ee=J;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var K=U[0],ee=U.pop();if(ee!==K){U[0]=ee;e:for(var J=0,Oe=U.length,qe=Oe>>>1;J<qe;){var Je=2*(J+1)-1,Rt=U[Je],et=Je+1,ft=U[et];if(0>s(Rt,ee))et<Oe&&0>s(ft,Rt)?(U[J]=ft,U[et]=ee,J=et):(U[J]=Rt,U[Je]=ee,J=Je);else if(et<Oe&&0>s(ft,ee))U[J]=ft,U[et]=ee,J=et;else break e}}return K}function s(U,K){var ee=U.sortIndex-K.sortIndex;return ee!==0?ee:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,v=3,k=!1,b=!1,N=!1,V=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(U){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=U)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function P(U){if(N=!1,A(U),!b)if(n(u)!==null)b=!0,Ae(j);else{var K=n(c);K!==null&&ot(P,K.startTime-U)}}function j(U,K){b=!1,N&&(N=!1,I(_),_=-1),k=!0;var ee=v;try{for(A(K),p=n(u);p!==null&&(!(p.expirationTime>K)||U&&!x());){var J=p.callback;if(typeof J=="function"){p.callback=null,v=p.priorityLevel;var Oe=J(p.expirationTime<=K);K=t.unstable_now(),typeof Oe=="function"?p.callback=Oe:p===n(u)&&r(u),A(K)}else r(u);p=n(u)}if(p!==null)var qe=!0;else{var Je=n(c);Je!==null&&ot(P,Je.startTime-K),qe=!1}return qe}finally{p=null,v=ee,k=!1}}var $=!1,E=null,_=-1,T=5,g=-1;function x(){return!(t.unstable_now()-g<T)}function C(){if(E!==null){var U=t.unstable_now();g=U;var K=!0;try{K=E(!0,U)}finally{K?w():($=!1,E=null)}}else $=!1}var w;if(typeof S=="function")w=function(){S(C)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,re=me.port2;me.port1.onmessage=C,w=function(){re.postMessage(null)}}else w=function(){V(C,0)};function Ae(U){E=U,$||($=!0,w())}function ot(U,K){_=V(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){b||k||(b=!0,Ae(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var ee=v;v=K;try{return U()}finally{v=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=v;v=U;try{return K()}finally{v=ee}},t.unstable_scheduleCallback=function(U,K,ee){var J=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?J+ee:J):ee=J,U){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=ee+Oe,U={id:f++,callback:K,priorityLevel:U,startTime:ee,expirationTime:Oe,sortIndex:-1},ee>J?(U.sortIndex=ee,e(c,U),n(u)===null&&U===n(c)&&(N?(I(_),_=-1):N=!0,ot(P,ee-J))):(U.sortIndex=Oe,e(u,U),b||k||(b=!0,Ae(j))),U},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(U){var K=v;return function(){var ee=v;v=K;try{return U.apply(this,arguments)}finally{v=ee}}}})(Y_);J_.exports=Y_;var IT=J_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST=ie,Pn=IT;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X_=new Set,ha={};function pi(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(ha[t]=e,t=0;t<e.length;t++)X_.add(e[t])}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,xT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},Vm={};function AT(t){return bh.call(Vm,t)?!0:bh.call(Om,t)?!1:xT.test(t)?Vm[t]=!0:(Om[t]=!0,!1)}function kT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CT(t,e,n,r){if(e===null||typeof e>"u"||kT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var rf=/[\-:]([a-z])/g;function sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rf,sf);qt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rf,sf);qt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rf,sf);qt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function of(t,e,n,r){var s=qt.hasOwnProperty(e)?qt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CT(e,n,s,r)&&(n=null),r||s===null?AT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kr=ST.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),af=Symbol.for("react.strict_mode"),Nh=Symbol.for("react.profiler"),Z_=Symbol.for("react.provider"),e0=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),Ph=Symbol.for("react.suspense"),Dh=Symbol.for("react.suspense_list"),uf=Symbol.for("react.memo"),ns=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var it=Object.assign,Bc;function Bo(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var Hc=!1;function qc(t,e){if(!t||Hc)return"";Hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function RT(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=qc(t.type,!1),t;case 11:return t=qc(t.type.render,!1),t;case 1:return t=qc(t.type,!0),t;default:return""}}function Oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bi:return"Fragment";case Ri:return"Portal";case Nh:return"Profiler";case af:return"StrictMode";case Ph:return"Suspense";case Dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Z_:return(t._context.displayName||"Context")+".Provider";case lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uf:return e=t.displayName||null,e!==null?e:Oh(t.type)||"Memo";case ns:e=t._payload,t=t._init;try{return Oh(t(e))}catch{}}return null}function bT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oh(e);case 8:return e===af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function As(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NT(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=NT(t))}function r0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=n0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vh(t,e){var n=e.checked;return it({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=As(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function s0(t,e){e=e.checked,e!=null&&of(t,"checked",e,!1)}function Mh(t,e){s0(t,e);var n=As(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lh(t,e.type,As(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lh(t,e,n){(e!=="number"||au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+As(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function jh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return it({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ho(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:As(n)}}function i0(t,e){var n=As(e.value),r=As(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,a0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PT=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(t){PT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jo[e]=Jo[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jo.hasOwnProperty(t)&&Jo[t]?(""+e).trim():e+"px"}function u0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=l0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var DT=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fh(t,e){if(e){if(DT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function $h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bh=null,zi=null,Bi=null;function $m(t){if(t=za(t)){if(typeof Bh!="function")throw Error(z(280));var e=t.stateNode;e&&(e=nc(e),Bh(t.stateNode,t.type,e))}}function c0(t){zi?Bi?Bi.push(t):Bi=[t]:zi=t}function h0(){if(zi){var t=zi,e=Bi;if(Bi=zi=null,$m(t),e)for(t=0;t<e.length;t++)$m(e[t])}}function d0(t,e){return t(e)}function f0(){}var Gc=!1;function p0(t,e,n){if(Gc)return t(e,n);Gc=!0;try{return d0(t,e,n)}finally{Gc=!1,(zi!==null||Bi!==null)&&(f0(),h0())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var r=nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Hh=!1;if(Fr)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Hh=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Hh=!1}function OT(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Yo=!1,lu=null,uu=!1,qh=null,VT={onError:function(t){Yo=!0,lu=t}};function MT(t,e,n,r,s,i,o,l,u){Yo=!1,lu=null,OT.apply(VT,arguments)}function LT(t,e,n,r,s,i,o,l,u){if(MT.apply(this,arguments),Yo){if(Yo){var c=lu;Yo=!1,lu=null}else throw Error(z(198));uu||(uu=!0,qh=c)}}function mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zm(t){if(mi(t)!==t)throw Error(z(188))}function jT(t){var e=t.alternate;if(!e){if(e=mi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return zm(s),t;if(i===r)return zm(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function g0(t){return t=jT(t),t!==null?y0(t):null}function y0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=y0(t);if(e!==null)return e;t=t.sibling}return null}var _0=Pn.unstable_scheduleCallback,Bm=Pn.unstable_cancelCallback,UT=Pn.unstable_shouldYield,FT=Pn.unstable_requestPaint,ct=Pn.unstable_now,$T=Pn.unstable_getCurrentPriorityLevel,hf=Pn.unstable_ImmediatePriority,v0=Pn.unstable_UserBlockingPriority,cu=Pn.unstable_NormalPriority,zT=Pn.unstable_LowPriority,w0=Pn.unstable_IdlePriority,Xu=null,gr=null;function BT(t){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(Xu,t,void 0,(t.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:GT,HT=Math.log,qT=Math.LN2;function GT(t){return t>>>=0,t===0?32:31-(HT(t)/qT|0)|0}var gl=64,yl=4194304;function qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=qo(l):(i&=o,i!==0&&(r=qo(i)))}else o=n&~s,o!==0?r=qo(o):i!==0&&(r=qo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-er(e),s=1<<n,r|=t[n],e&=~s;return r}function WT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-er(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=WT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E0(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function Wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-er(e),t[e]=n}function QT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-er(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-er(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var je=0;function T0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I0,ff,S0,x0,A0,Wh=!1,_l=[],fs=null,ps=null,ms=null,pa=new Map,ma=new Map,ss=[],JT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Oo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=za(e),e!==null&&ff(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function YT(t,e,n,r,s){switch(e){case"focusin":return fs=Oo(fs,t,e,n,r,s),!0;case"dragenter":return ps=Oo(ps,t,e,n,r,s),!0;case"mouseover":return ms=Oo(ms,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return pa.set(i,Oo(pa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ma.set(i,Oo(ma.get(i)||null,t,e,n,r,s)),!0}return!1}function k0(t){var e=Ks(t.target);if(e!==null){var n=mi(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,A0(t.priority,function(){S0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Kh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zh=r,n.target.dispatchEvent(r),zh=null}else return e=za(n),e!==null&&ff(e),t.blockedOn=n,!1;e.shift()}return!0}function qm(t,e,n){Fl(t)&&n.delete(e)}function XT(){Wh=!1,fs!==null&&Fl(fs)&&(fs=null),ps!==null&&Fl(ps)&&(ps=null),ms!==null&&Fl(ms)&&(ms=null),pa.forEach(qm),ma.forEach(qm)}function Vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wh||(Wh=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,XT)))}function ga(t){function e(s){return Vo(s,t)}if(0<_l.length){Vo(_l[0],t);for(var n=1;n<_l.length;n++){var r=_l[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fs!==null&&Vo(fs,t),ps!==null&&Vo(ps,t),ms!==null&&Vo(ms,t),pa.forEach(e),ma.forEach(e),n=0;n<ss.length;n++)r=ss[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ss.length&&(n=ss[0],n.blockedOn===null);)k0(n),n.blockedOn===null&&ss.shift()}var Hi=Kr.ReactCurrentBatchConfig,du=!0;function ZT(t,e,n,r){var s=je,i=Hi.transition;Hi.transition=null;try{je=1,pf(t,e,n,r)}finally{je=s,Hi.transition=i}}function eI(t,e,n,r){var s=je,i=Hi.transition;Hi.transition=null;try{je=4,pf(t,e,n,r)}finally{je=s,Hi.transition=i}}function pf(t,e,n,r){if(du){var s=Kh(t,e,n,r);if(s===null)rh(t,e,r,fu,n),Hm(t,r);else if(YT(s,t,e,n,r))r.stopPropagation();else if(Hm(t,r),e&4&&-1<JT.indexOf(t)){for(;s!==null;){var i=za(s);if(i!==null&&I0(i),i=Kh(t,e,n,r),i===null&&rh(t,e,r,fu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else rh(t,e,r,null,n)}}var fu=null;function Kh(t,e,n,r){if(fu=null,t=cf(r),t=Ks(t),t!==null)if(e=mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fu=t,null}function C0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($T()){case hf:return 1;case v0:return 4;case cu:case zT:return 16;case w0:return 536870912;default:return 16}default:return 16}}var hs=null,mf=null,$l=null;function R0(){if($l)return $l;var t,e=mf,n=e.length,r,s="value"in hs?hs.value:hs.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return $l=s.slice(t,1<r?1-r:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Gm(){return!1}function On(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vl:Gm,this.isPropagationStopped=Gm,this}return it(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gf=On(po),$a=it({},po,{view:0,detail:0}),tI=On($a),Kc,Qc,Mo,Zu=it({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Kc=t.screenX-Mo.screenX,Qc=t.screenY-Mo.screenY):Qc=Kc=0,Mo=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Qc}}),Wm=On(Zu),nI=it({},Zu,{dataTransfer:0}),rI=On(nI),sI=it({},$a,{relatedTarget:0}),Jc=On(sI),iI=it({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),oI=On(iI),aI=it({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lI=On(aI),uI=it({},po,{data:0}),Km=On(uI),cI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dI[t])?!!e[t]:!1}function yf(){return fI}var pI=it({},$a,{key:function(t){if(t.key){var e=cI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mI=On(pI),gI=it({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=On(gI),yI=it({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),_I=On(yI),vI=it({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),wI=On(vI),EI=it({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TI=On(EI),II=[9,13,27,32],_f=Fr&&"CompositionEvent"in window,Xo=null;Fr&&"documentMode"in document&&(Xo=document.documentMode);var SI=Fr&&"TextEvent"in window&&!Xo,b0=Fr&&(!_f||Xo&&8<Xo&&11>=Xo),Jm=" ",Ym=!1;function N0(t,e){switch(t){case"keyup":return II.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function xI(t,e){switch(t){case"compositionend":return P0(e);case"keypress":return e.which!==32?null:(Ym=!0,Jm);case"textInput":return t=e.data,t===Jm&&Ym?null:t;default:return null}}function AI(t,e){if(Ni)return t==="compositionend"||!_f&&N0(t,e)?(t=R0(),$l=mf=hs=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b0&&e.locale!=="ko"?null:e.data;default:return null}}var kI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kI[t.type]:e==="textarea"}function D0(t,e,n,r){c0(r),e=pu(e,"onChange"),0<e.length&&(n=new gf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Zo=null,ya=null;function CI(t){H0(t,0)}function ec(t){var e=Oi(t);if(r0(e))return t}function RI(t,e){if(t==="change")return e}var O0=!1;if(Fr){var Yc;if(Fr){var Xc="oninput"in document;if(!Xc){var Zm=document.createElement("div");Zm.setAttribute("oninput","return;"),Xc=typeof Zm.oninput=="function"}Yc=Xc}else Yc=!1;O0=Yc&&(!document.documentMode||9<document.documentMode)}function eg(){Zo&&(Zo.detachEvent("onpropertychange",V0),ya=Zo=null)}function V0(t){if(t.propertyName==="value"&&ec(ya)){var e=[];D0(e,ya,t,cf(t)),p0(CI,e)}}function bI(t,e,n){t==="focusin"?(eg(),Zo=e,ya=n,Zo.attachEvent("onpropertychange",V0)):t==="focusout"&&eg()}function NI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(ya)}function PI(t,e){if(t==="click")return ec(e)}function DI(t,e){if(t==="input"||t==="change")return ec(e)}function OI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sr=typeof Object.is=="function"?Object.is:OI;function _a(t,e){if(sr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!bh.call(e,s)||!sr(t[s],e[s]))return!1}return!0}function tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ng(t,e){var n=tg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tg(n)}}function M0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L0(){for(var t=window,e=au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=au(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VI(t){var e=L0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M0(n.ownerDocument.documentElement,n)){if(r!==null&&vf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=ng(n,i);var o=ng(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var MI=Fr&&"documentMode"in document&&11>=document.documentMode,Pi=null,Qh=null,ea=null,Jh=!1;function rg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jh||Pi==null||Pi!==au(r)||(r=Pi,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ea&&_a(ea,r)||(ea=r,r=pu(Qh,"onSelect"),0<r.length&&(e=new gf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pi)))}function wl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Zc={},j0={};Fr&&(j0=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function tc(t){if(Zc[t])return Zc[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j0)return Zc[t]=e[n];return t}var U0=tc("animationend"),F0=tc("animationiteration"),$0=tc("animationstart"),z0=tc("transitionend"),B0=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ms(t,e){B0.set(t,e),pi(e,[t])}for(var eh=0;eh<sg.length;eh++){var th=sg[eh],LI=th.toLowerCase(),jI=th[0].toUpperCase()+th.slice(1);Ms(LI,"on"+jI)}Ms(U0,"onAnimationEnd");Ms(F0,"onAnimationIteration");Ms($0,"onAnimationStart");Ms("dblclick","onDoubleClick");Ms("focusin","onFocus");Ms("focusout","onBlur");Ms(z0,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function ig(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LT(r,e,void 0,t),t.currentTarget=null}function H0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;ig(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;ig(s,l,c),i=u}}}if(uu)throw t=qh,uu=!1,qh=null,t}function We(t,e){var n=e[td];n===void 0&&(n=e[td]=new Set);var r=t+"__bubble";n.has(r)||(q0(e,t,2,!1),n.add(r))}function nh(t,e,n){var r=0;e&&(r|=4),q0(n,t,r,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[El]){t[El]=!0,X_.forEach(function(n){n!=="selectionchange"&&(UI.has(n)||nh(n,!1,t),nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,nh("selectionchange",!1,e))}}function q0(t,e,n,r){switch(C0(e)){case 1:var s=ZT;break;case 4:s=eI;break;default:s=pf}n=s.bind(null,e,n,t),s=void 0,!Hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function rh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ks(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}p0(function(){var c=i,f=cf(n),p=[];e:{var v=B0.get(t);if(v!==void 0){var k=gf,b=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":k=mI;break;case"focusin":b="focus",k=Jc;break;case"focusout":b="blur",k=Jc;break;case"beforeblur":case"afterblur":k=Jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=rI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=_I;break;case U0:case F0:case $0:k=oI;break;case z0:k=wI;break;case"scroll":k=tI;break;case"wheel":k=TI;break;case"copy":case"cut":case"paste":k=lI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Qm}var N=(e&4)!==0,V=!N&&t==="scroll",I=N?v!==null?v+"Capture":null:v;N=[];for(var S=c,A;S!==null;){A=S;var P=A.stateNode;if(A.tag===5&&P!==null&&(A=P,I!==null&&(P=fa(S,I),P!=null&&N.push(wa(S,P,A)))),V)break;S=S.return}0<N.length&&(v=new k(v,b,null,n,f),p.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==zh&&(b=n.relatedTarget||n.fromElement)&&(Ks(b)||b[$r]))break e;if((k||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,k?(b=n.relatedTarget||n.toElement,k=c,b=b?Ks(b):null,b!==null&&(V=mi(b),b!==V||b.tag!==5&&b.tag!==6)&&(b=null)):(k=null,b=c),k!==b)){if(N=Wm,P="onMouseLeave",I="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(N=Qm,P="onPointerLeave",I="onPointerEnter",S="pointer"),V=k==null?v:Oi(k),A=b==null?v:Oi(b),v=new N(P,S+"leave",k,n,f),v.target=V,v.relatedTarget=A,P=null,Ks(f)===c&&(N=new N(I,S+"enter",b,n,f),N.target=A,N.relatedTarget=V,P=N),V=P,k&&b)t:{for(N=k,I=b,S=0,A=N;A;A=Si(A))S++;for(A=0,P=I;P;P=Si(P))A++;for(;0<S-A;)N=Si(N),S--;for(;0<A-S;)I=Si(I),A--;for(;S--;){if(N===I||I!==null&&N===I.alternate)break t;N=Si(N),I=Si(I)}N=null}else N=null;k!==null&&og(p,v,k,N,!1),b!==null&&V!==null&&og(p,V,b,N,!0)}}e:{if(v=c?Oi(c):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var j=RI;else if(Xm(v))if(O0)j=DI;else{j=NI;var $=bI}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(j=PI);if(j&&(j=j(t,c))){D0(p,j,n,f);break e}$&&$(t,v,c),t==="focusout"&&($=v._wrapperState)&&$.controlled&&v.type==="number"&&Lh(v,"number",v.value)}switch($=c?Oi(c):window,t){case"focusin":(Xm($)||$.contentEditable==="true")&&(Pi=$,Qh=c,ea=null);break;case"focusout":ea=Qh=Pi=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,rg(p,n,f);break;case"selectionchange":if(MI)break;case"keydown":case"keyup":rg(p,n,f)}var E;if(_f)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ni?N0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(b0&&n.locale!=="ko"&&(Ni||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ni&&(E=R0()):(hs=f,mf="value"in hs?hs.value:hs.textContent,Ni=!0)),$=pu(c,_),0<$.length&&(_=new Km(_,t,null,n,f),p.push({event:_,listeners:$}),E?_.data=E:(E=P0(n),E!==null&&(_.data=E)))),(E=SI?xI(t,n):AI(t,n))&&(c=pu(c,"onBeforeInput"),0<c.length&&(f=new Km("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=E))}H0(p,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=fa(t,n),i!=null&&r.unshift(wa(t,i,s)),i=fa(t,e),i!=null&&r.push(wa(t,i,s))),t=t.return}return r}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function og(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=fa(n,i),u!=null&&o.unshift(wa(n,u,l))):s||(u=fa(n,i),u!=null&&o.push(wa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FI=/\r\n?/g,$I=/\u0000|\uFFFD/g;function ag(t){return(typeof t=="string"?t:""+t).replace(FI,`
`).replace($I,"")}function Tl(t,e,n){if(e=ag(e),ag(t)!==e&&n)throw Error(z(425))}function mu(){}var Yh=null,Xh=null;function Zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,zI=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,BI=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(t){return lg.resolve(null).then(t).catch(HI)}:ed;function HI(t){setTimeout(function(){throw t})}function sh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ga(e)}function gs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ug(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),pr="__reactFiber$"+mo,Ea="__reactProps$"+mo,$r="__reactContainer$"+mo,td="__reactEvents$"+mo,qI="__reactListeners$"+mo,GI="__reactHandles$"+mo;function Ks(t){var e=t[pr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[pr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ug(t);t!==null;){if(n=t[pr])return n;t=ug(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[pr]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function nc(t){return t[Ea]||null}var nd=[],Vi=-1;function Ls(t){return{current:t}}function Qe(t){0>Vi||(t.current=nd[Vi],nd[Vi]=null,Vi--)}function He(t,e){Vi++,nd[Vi]=t.current,t.current=e}var ks={},nn=Ls(ks),wn=Ls(!1),ri=ks;function to(t,e){var n=t.type.contextTypes;if(!n)return ks;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function En(t){return t=t.childContextTypes,t!=null}function gu(){Qe(wn),Qe(nn)}function cg(t,e,n){if(nn.current!==ks)throw Error(z(168));He(nn,e),He(wn,n)}function G0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,bT(t)||"Unknown",s));return it({},n,r)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ks,ri=nn.current,He(nn,t),He(wn,wn.current),!0}function hg(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=G0(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,Qe(wn),Qe(nn),He(nn,t)):Qe(wn),He(wn,n)}var br=null,rc=!1,ih=!1;function W0(t){br===null?br=[t]:br.push(t)}function WI(t){rc=!0,W0(t)}function js(){if(!ih&&br!==null){ih=!0;var t=0,e=je;try{var n=br;for(je=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}br=null,rc=!1}catch(s){throw br!==null&&(br=br.slice(t+1)),_0(hf,js),s}finally{je=e,ih=!1}}return null}var Mi=[],Li=0,_u=null,vu=0,Ln=[],jn=0,si=null,Dr=1,Or="";function qs(t,e){Mi[Li++]=vu,Mi[Li++]=_u,_u=t,vu=e}function K0(t,e,n){Ln[jn++]=Dr,Ln[jn++]=Or,Ln[jn++]=si,si=t;var r=Dr;t=Or;var s=32-er(r)-1;r&=~(1<<s),n+=1;var i=32-er(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Dr=1<<32-er(e)+s|n<<s|r,Or=i+t}else Dr=1<<i|n<<s|r,Or=t}function wf(t){t.return!==null&&(qs(t,1),K0(t,1,0))}function Ef(t){for(;t===_u;)_u=Mi[--Li],Mi[Li]=null,vu=Mi[--Li],Mi[Li]=null;for(;t===si;)si=Ln[--jn],Ln[jn]=null,Or=Ln[--jn],Ln[jn]=null,Dr=Ln[--jn],Ln[jn]=null}var Nn=null,bn=null,Xe=!1,Yn=null;function Q0(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,bn=gs(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=si!==null?{id:Dr,overflow:Or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,bn=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(Xe){var e=bn;if(e){var n=e;if(!dg(t,e)){if(rd(t))throw Error(z(418));e=gs(n.nextSibling);var r=Nn;e&&dg(t,e)?Q0(r,n):(t.flags=t.flags&-4097|2,Xe=!1,Nn=t)}}else{if(rd(t))throw Error(z(418));t.flags=t.flags&-4097|2,Xe=!1,Nn=t}}}function fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Il(t){if(t!==Nn)return!1;if(!Xe)return fg(t),Xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zh(t.type,t.memoizedProps)),e&&(e=bn)){if(rd(t))throw J0(),Error(z(418));for(;e;)Q0(t,e),e=gs(e.nextSibling)}if(fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=gs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Nn?gs(t.stateNode.nextSibling):null;return!0}function J0(){for(var t=bn;t;)t=gs(t.nextSibling)}function no(){bn=Nn=null,Xe=!1}function Tf(t){Yn===null?Yn=[t]:Yn.push(t)}var KI=Kr.ReactCurrentBatchConfig;function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pg(t){var e=t._init;return e(t._payload)}function Y0(t){function e(I,S){if(t){var A=I.deletions;A===null?(I.deletions=[S],I.flags|=16):A.push(S)}}function n(I,S){if(!t)return null;for(;S!==null;)e(I,S),S=S.sibling;return null}function r(I,S){for(I=new Map;S!==null;)S.key!==null?I.set(S.key,S):I.set(S.index,S),S=S.sibling;return I}function s(I,S){return I=ws(I,S),I.index=0,I.sibling=null,I}function i(I,S,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<S?(I.flags|=2,S):A):(I.flags|=2,S)):(I.flags|=1048576,S)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,S,A,P){return S===null||S.tag!==6?(S=dh(A,I.mode,P),S.return=I,S):(S=s(S,A),S.return=I,S)}function u(I,S,A,P){var j=A.type;return j===bi?f(I,S,A.props.children,P,A.key):S!==null&&(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ns&&pg(j)===S.type)?(P=s(S,A.props),P.ref=Lo(I,S,A),P.return=I,P):(P=Ql(A.type,A.key,A.props,null,I.mode,P),P.ref=Lo(I,S,A),P.return=I,P)}function c(I,S,A,P){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=fh(A,I.mode,P),S.return=I,S):(S=s(S,A.children||[]),S.return=I,S)}function f(I,S,A,P,j){return S===null||S.tag!==7?(S=ei(A,I.mode,P,j),S.return=I,S):(S=s(S,A),S.return=I,S)}function p(I,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return S=dh(""+S,I.mode,A),S.return=I,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fl:return A=Ql(S.type,S.key,S.props,null,I.mode,A),A.ref=Lo(I,null,S),A.return=I,A;case Ri:return S=fh(S,I.mode,A),S.return=I,S;case ns:var P=S._init;return p(I,P(S._payload),A)}if(Ho(S)||Po(S))return S=ei(S,I.mode,A,null),S.return=I,S;Sl(I,S)}return null}function v(I,S,A,P){var j=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(I,S,""+A,P);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case fl:return A.key===j?u(I,S,A,P):null;case Ri:return A.key===j?c(I,S,A,P):null;case ns:return j=A._init,v(I,S,j(A._payload),P)}if(Ho(A)||Po(A))return j!==null?null:f(I,S,A,P,null);Sl(I,A)}return null}function k(I,S,A,P,j){if(typeof P=="string"&&P!==""||typeof P=="number")return I=I.get(A)||null,l(S,I,""+P,j);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case fl:return I=I.get(P.key===null?A:P.key)||null,u(S,I,P,j);case Ri:return I=I.get(P.key===null?A:P.key)||null,c(S,I,P,j);case ns:var $=P._init;return k(I,S,A,$(P._payload),j)}if(Ho(P)||Po(P))return I=I.get(A)||null,f(S,I,P,j,null);Sl(S,P)}return null}function b(I,S,A,P){for(var j=null,$=null,E=S,_=S=0,T=null;E!==null&&_<A.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var g=v(I,E,A[_],P);if(g===null){E===null&&(E=T);break}t&&E&&g.alternate===null&&e(I,E),S=i(g,S,_),$===null?j=g:$.sibling=g,$=g,E=T}if(_===A.length)return n(I,E),Xe&&qs(I,_),j;if(E===null){for(;_<A.length;_++)E=p(I,A[_],P),E!==null&&(S=i(E,S,_),$===null?j=E:$.sibling=E,$=E);return Xe&&qs(I,_),j}for(E=r(I,E);_<A.length;_++)T=k(E,I,_,A[_],P),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),S=i(T,S,_),$===null?j=T:$.sibling=T,$=T);return t&&E.forEach(function(x){return e(I,x)}),Xe&&qs(I,_),j}function N(I,S,A,P){var j=Po(A);if(typeof j!="function")throw Error(z(150));if(A=j.call(A),A==null)throw Error(z(151));for(var $=j=null,E=S,_=S=0,T=null,g=A.next();E!==null&&!g.done;_++,g=A.next()){E.index>_?(T=E,E=null):T=E.sibling;var x=v(I,E,g.value,P);if(x===null){E===null&&(E=T);break}t&&E&&x.alternate===null&&e(I,E),S=i(x,S,_),$===null?j=x:$.sibling=x,$=x,E=T}if(g.done)return n(I,E),Xe&&qs(I,_),j;if(E===null){for(;!g.done;_++,g=A.next())g=p(I,g.value,P),g!==null&&(S=i(g,S,_),$===null?j=g:$.sibling=g,$=g);return Xe&&qs(I,_),j}for(E=r(I,E);!g.done;_++,g=A.next())g=k(E,I,_,g.value,P),g!==null&&(t&&g.alternate!==null&&E.delete(g.key===null?_:g.key),S=i(g,S,_),$===null?j=g:$.sibling=g,$=g);return t&&E.forEach(function(C){return e(I,C)}),Xe&&qs(I,_),j}function V(I,S,A,P){if(typeof A=="object"&&A!==null&&A.type===bi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case fl:e:{for(var j=A.key,$=S;$!==null;){if($.key===j){if(j=A.type,j===bi){if($.tag===7){n(I,$.sibling),S=s($,A.props.children),S.return=I,I=S;break e}}else if($.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ns&&pg(j)===$.type){n(I,$.sibling),S=s($,A.props),S.ref=Lo(I,$,A),S.return=I,I=S;break e}n(I,$);break}else e(I,$);$=$.sibling}A.type===bi?(S=ei(A.props.children,I.mode,P,A.key),S.return=I,I=S):(P=Ql(A.type,A.key,A.props,null,I.mode,P),P.ref=Lo(I,S,A),P.return=I,I=P)}return o(I);case Ri:e:{for($=A.key;S!==null;){if(S.key===$)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){n(I,S.sibling),S=s(S,A.children||[]),S.return=I,I=S;break e}else{n(I,S);break}else e(I,S);S=S.sibling}S=fh(A,I.mode,P),S.return=I,I=S}return o(I);case ns:return $=A._init,V(I,S,$(A._payload),P)}if(Ho(A))return b(I,S,A,P);if(Po(A))return N(I,S,A,P);Sl(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,S!==null&&S.tag===6?(n(I,S.sibling),S=s(S,A),S.return=I,I=S):(n(I,S),S=dh(A,I.mode,P),S.return=I,I=S),o(I)):n(I,S)}return V}var ro=Y0(!0),X0=Y0(!1),wu=Ls(null),Eu=null,ji=null,If=null;function Sf(){If=ji=Eu=null}function xf(t){var e=wu.current;Qe(wu),t._currentValue=e}function id(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){Eu=t,If=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(If!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(Eu===null)throw Error(z(308));ji=t,Eu.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Qs=null;function Af(t){Qs===null?Qs=[t]:Qs.push(t)}function Z0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Af(e)):(n.next=s.next,s.next=n),e.interleaved=n,zr(t,r)}function zr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rs=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ev(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ys(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,zr(t,n)}return s=r.interleaved,s===null?(e.next=e,Af(r)):(e.next=s.next,s.next=e),r.interleaved=e,zr(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,df(t,n)}}function mg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tu(t,e,n,r){var s=t.updateQueue;rs=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=c=u=null,l=i;do{var v=l.lane,k=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,N=l;switch(v=e,k=n,N.tag){case 1:if(b=N.payload,typeof b=="function"){p=b.call(k,p,v);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,v=typeof b=="function"?b.call(k,p,v):b,v==null)break e;p=it({},p,v);break e;case 2:rs=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=k,u=p):f=f.next=k,o|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=p}}function gg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var Ba={},yr=Ls(Ba),Ta=Ls(Ba),Ia=Ls(Ba);function Js(t){if(t===Ba)throw Error(z(174));return t}function Cf(t,e){switch(He(Ia,e),He(Ta,t),He(yr,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uh(e,t)}Qe(yr),He(yr,e)}function so(){Qe(yr),Qe(Ta),Qe(Ia)}function tv(t){Js(Ia.current);var e=Js(yr.current),n=Uh(e,t.type);e!==n&&(He(Ta,t),He(yr,n))}function Rf(t){Ta.current===t&&(Qe(yr),Qe(Ta))}var rt=Ls(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function bf(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var Hl=Kr.ReactCurrentDispatcher,ah=Kr.ReactCurrentBatchConfig,ii=0,st=null,St=null,Mt=null,Su=!1,ta=!1,Sa=0,QI=0;function Jt(){throw Error(z(321))}function Nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sr(t[n],e[n]))return!1;return!0}function Pf(t,e,n,r,s,i){if(ii=i,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?ZI:eS,t=n(r,s),ta){i=0;do{if(ta=!1,Sa=0,25<=i)throw Error(z(301));i+=1,Mt=St=null,e.updateQueue=null,Hl.current=tS,t=n(r,s)}while(ta)}if(Hl.current=xu,e=St!==null&&St.next!==null,ii=0,Mt=St=st=null,Su=!1,e)throw Error(z(300));return t}function Df(){var t=Sa!==0;return Sa=0,t}function dr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?st.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Gn(){if(St===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Mt===null?st.memoizedState:Mt.next;if(e!==null)Mt=e,St=t;else{if(t===null)throw Error(z(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Mt===null?st.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function xa(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=Gn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=St,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((ii&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,st.lanes|=f,oi|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,sr(r,e.memoizedState)||(vn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,st.lanes|=i,oi|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uh(t){var e=Gn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);sr(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function nv(){}function rv(t,e){var n=st,r=Gn(),s=e(),i=!sr(r.memoizedState,s);if(i&&(r.memoizedState=s,vn=!0),r=r.queue,Of(ov.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Mt!==null&&Mt.memoizedState.tag&1){if(n.flags|=2048,Aa(9,iv.bind(null,n,r,s,e),void 0,null),Lt===null)throw Error(z(349));ii&30||sv(n,e,s)}return s}function sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iv(t,e,n,r){e.value=n,e.getSnapshot=r,av(e)&&lv(t)}function ov(t,e,n){return n(function(){av(e)&&lv(t)})}function av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sr(t,n)}catch{return!0}}function lv(t){var e=zr(t,1);e!==null&&tr(e,t,1,-1)}function yg(t){var e=dr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=XI.bind(null,st,t),[e.memoizedState,t]}function Aa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uv(){return Gn().memoizedState}function ql(t,e,n,r){var s=dr();st.flags|=t,s.memoizedState=Aa(1|e,n,void 0,r===void 0?null:r)}function sc(t,e,n,r){var s=Gn();r=r===void 0?null:r;var i=void 0;if(St!==null){var o=St.memoizedState;if(i=o.destroy,r!==null&&Nf(r,o.deps)){s.memoizedState=Aa(e,n,i,r);return}}st.flags|=t,s.memoizedState=Aa(1|e,n,i,r)}function _g(t,e){return ql(8390656,8,t,e)}function Of(t,e){return sc(2048,8,t,e)}function cv(t,e){return sc(4,2,t,e)}function hv(t,e){return sc(4,4,t,e)}function dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fv(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,dv.bind(null,e,t),n)}function Vf(){}function pv(t,e){var n=Gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mv(t,e){var n=Gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gv(t,e,n){return ii&21?(sr(n,e)||(n=E0(),st.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function JI(t,e){var n=je;je=n!==0&&4>n?n:4,t(!0);var r=ah.transition;ah.transition={};try{t(!1),e()}finally{je=n,ah.transition=r}}function yv(){return Gn().memoizedState}function YI(t,e,n){var r=vs(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_v(t))vv(e,n);else if(n=Z0(t,e,n,r),n!==null){var s=cn();tr(n,t,r,s),wv(n,e,r)}}function XI(t,e,n){var r=vs(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_v(t))vv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,sr(l,o)){var u=e.interleaved;u===null?(s.next=s,Af(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Z0(t,e,s,r),n!==null&&(s=cn(),tr(n,t,r,s),wv(n,e,r))}}function _v(t){var e=t.alternate;return t===st||e!==null&&e===st}function vv(t,e){ta=Su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,df(t,n)}}var xu={readContext:qn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},ZI={readContext:qn,useCallback:function(t,e){return dr().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:_g,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=dr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YI.bind(null,st,t),[r.memoizedState,t]},useRef:function(t){var e=dr();return t={current:t},e.memoizedState=t},useState:yg,useDebugValue:Vf,useDeferredValue:function(t){return dr().memoizedState=t},useTransition:function(){var t=yg(!1),e=t[0];return t=JI.bind(null,t[1]),dr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=st,s=dr();if(Xe){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Lt===null)throw Error(z(349));ii&30||sv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,_g(ov.bind(null,r,i,t),[t]),r.flags|=2048,Aa(9,iv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=dr(),e=Lt.identifierPrefix;if(Xe){var n=Or,r=Dr;n=(r&~(1<<32-er(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eS={readContext:qn,useCallback:pv,useContext:qn,useEffect:Of,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:hv,useMemo:mv,useReducer:lh,useRef:uv,useState:function(){return lh(xa)},useDebugValue:Vf,useDeferredValue:function(t){var e=Gn();return gv(e,St.memoizedState,t)},useTransition:function(){var t=lh(xa)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:nv,useSyncExternalStore:rv,useId:yv,unstable_isNewReconciler:!1},tS={readContext:qn,useCallback:pv,useContext:qn,useEffect:Of,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:hv,useMemo:mv,useReducer:uh,useRef:uv,useState:function(){return uh(xa)},useDebugValue:Vf,useDeferredValue:function(t){var e=Gn();return St===null?e.memoizedState=t:gv(e,St.memoizedState,t)},useTransition:function(){var t=uh(xa)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:nv,useSyncExternalStore:rv,useId:yv,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=it({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:it({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=cn(),s=vs(t),i=jr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ys(t,i,s),e!==null&&(tr(e,t,s,r),Bl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=cn(),s=vs(t),i=jr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ys(t,i,s),e!==null&&(tr(e,t,s,r),Bl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),r=vs(t),s=jr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ys(t,s,r),e!==null&&(tr(e,t,r,n),Bl(e,t,r))}};function vg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,r)||!_a(s,i):!0}function Ev(t,e,n){var r=!1,s=ks,i=e.contextType;return typeof i=="object"&&i!==null?i=qn(i):(s=En(e)?ri:nn.current,r=e.contextTypes,i=(r=r!=null)?to(t,s):ks),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},kf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=qn(i):(i=En(e)?ri:nn.current,s.context=to(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(od(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ic.enqueueReplaceState(s,s.state,null),Tu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e){try{var n="",r=e;do n+=RT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ch(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nS=typeof WeakMap=="function"?WeakMap:Map;function Tv(t,e,n){n=jr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ku||(ku=!0,_d=r),ld(t,e)},n}function Iv(t,e,n){n=jr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ld(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ld(t,e),typeof r!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new nS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=gS.bind(null,t,e,n),e.then(t,t))}function Tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ig(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jr(-1,1),e.tag=2,ys(n,e,1))),n.lanes|=1),t)}var rS=Kr.ReactCurrentOwner,vn=!1;function ln(t,e,n,r){e.child=t===null?X0(e,null,n,r):ro(e,t.child,n,r)}function Sg(t,e,n,r,s){n=n.render;var i=e.ref;return qi(e,s),r=Pf(t,e,n,r,i,s),n=Df(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Br(t,e,s)):(Xe&&n&&wf(e),e.flags|=1,ln(t,e,r,s),e.child)}function xg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Sv(t,e,i,r,s)):(t=Ql(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,r)&&t.ref===e.ref)return Br(t,e,s)}return e.flags|=1,t=ws(i,r),t.ref=e.ref,t.return=e,e.child=t}function Sv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(_a(i,r)&&t.ref===e.ref)if(vn=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Br(t,e,s)}return ud(t,e,n,r,s)}function xv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Fi,Cn),Cn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,He(Fi,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,He(Fi,Cn),Cn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,He(Fi,Cn),Cn|=r;return ln(t,e,s,n),e.child}function Av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,r,s){var i=En(n)?ri:nn.current;return i=to(e,i),qi(e,s),n=Pf(t,e,n,r,i,s),r=Df(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Br(t,e,s)):(Xe&&r&&wf(e),e.flags|=1,ln(t,e,n,s),e.child)}function Ag(t,e,n,r,s){if(En(n)){var i=!0;yu(e)}else i=!1;if(qi(e,s),e.stateNode===null)Gl(t,e),Ev(e,n,r),ad(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=En(n)?ri:nn.current,c=to(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&wg(e,o,r,c),rs=!1;var v=e.memoizedState;o.state=v,Tu(e,r,o,s),u=e.memoizedState,l!==r||v!==u||wn.current||rs?(typeof f=="function"&&(od(e,n,f,r),u=e.memoizedState),(l=rs||vg(e,n,l,r,v,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ev(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Qn(e.type,l),o.props=c,p=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qn(u):(u=En(n)?ri:nn.current,u=to(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||v!==u)&&wg(e,o,r,u),rs=!1,v=e.memoizedState,o.state=v,Tu(e,r,o,s);var b=e.memoizedState;l!==p||v!==b||wn.current||rs?(typeof k=="function"&&(od(e,n,k,r),b=e.memoizedState),(c=rs||vg(e,n,c,r,v,b,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return cd(t,e,n,r,i,s)}function cd(t,e,n,r,s,i){Av(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&hg(e,n,!1),Br(t,e,i);r=e.stateNode,rS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,i),e.child=ro(e,null,l,i)):ln(t,e,l,i),e.memoizedState=r.state,s&&hg(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cg(t,e.context,!1),Cf(t,e.containerInfo)}function kg(t,e,n,r,s){return no(),Tf(s),e.flags|=256,ln(t,e,n,r),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cv(t,e,n){var r=e.pendingProps,s=rt.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),He(rt,s&1),t===null)return sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=lc(o,r,0,null),t=ei(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=dd(n),e.memoizedState=hd,t):Mf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return sS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ws(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=ws(l,i):(i=ei(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=hd,r}return i=t.child,t=i.sibling,r=ws(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mf(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xl(t,e,n,r){return r!==null&&Tf(r),ro(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ch(Error(z(422))),xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=lc({mode:"visible",children:r.children},s,0,null),i=ei(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=dd(o),e.memoizedState=hd,i);if(!(e.mode&1))return xl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(z(419)),r=ch(i,r,void 0),xl(t,e,o,r)}if(l=(o&t.childLanes)!==0,vn||l){if(r=Lt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,zr(t,s),tr(r,t,s,-1))}return zf(),r=ch(Error(z(421))),xl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=yS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,bn=gs(s.nextSibling),Nn=e,Xe=!0,Yn=null,t!==null&&(Ln[jn++]=Dr,Ln[jn++]=Or,Ln[jn++]=si,Dr=t.id,Or=t.overflow,si=e),e=Mf(e,r.children),e.flags|=4096,e)}function Cg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),id(t.return,e,n)}function hh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Rv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ln(t,e,r.children,n),r=rt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cg(t,n,e);else if(t.tag===19)Cg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(He(rt,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Iu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),hh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Iu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}hh(e,!0,n,null,i);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Br(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ws(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ws(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iS(t,e,n){switch(e.tag){case 3:kv(e),no();break;case 5:tv(e);break;case 1:En(e.type)&&yu(e);break;case 4:Cf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;He(wu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(He(rt,rt.current&1),e.flags|=128,null):n&e.child.childLanes?Cv(t,e,n):(He(rt,rt.current&1),t=Br(t,e,n),t!==null?t.sibling:null);He(rt,rt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),He(rt,rt.current),r)break;return null;case 22:case 23:return e.lanes=0,xv(t,e,n)}return Br(t,e,n)}var bv,fd,Nv,Pv;bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};Nv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Js(yr.current);var i=null;switch(n){case"input":s=Vh(t,s),r=Vh(t,r),i=[];break;case"select":s=it({},s,{value:void 0}),r=it({},r,{value:void 0}),i=[];break;case"textarea":s=jh(t,s),r=jh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mu)}Fh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&We("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Pv=function(t,e,n,r){n!==r&&(e.flags|=4)};function jo(t,e){if(!Xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function oS(t,e,n){var r=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return En(e.type)&&gu(),Yt(e),null;case 3:return r=e.stateNode,so(),Qe(wn),Qe(nn),bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(Ed(Yn),Yn=null))),fd(t,e),Yt(e),null;case 5:Rf(e);var s=Js(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)Nv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Yt(e),null}if(t=Js(yr.current),Il(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[pr]=e,r[Ea]=i,t=(e.mode&1)!==0,n){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(s=0;s<Go.length;s++)We(Go[s],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":Lm(r,i),We("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},We("invalid",r);break;case"textarea":Um(r,i),We("invalid",r)}Fh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Tl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Tl(r.textContent,l,t),s=["children",""+l]):ha.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&We("scroll",r)}switch(n){case"input":pl(r),jm(r,i,!0);break;case"textarea":pl(r),Fm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=mu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pr]=e,t[Ea]=r,bv(t,e,!1,!1),e.stateNode=t;e:{switch(o=$h(n,r),n){case"dialog":We("cancel",t),We("close",t),s=r;break;case"iframe":case"object":case"embed":We("load",t),s=r;break;case"video":case"audio":for(s=0;s<Go.length;s++)We(Go[s],t);s=r;break;case"source":We("error",t),s=r;break;case"img":case"image":case"link":We("error",t),We("load",t),s=r;break;case"details":We("toggle",t),s=r;break;case"input":Lm(t,r),s=Vh(t,r),We("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=it({},r,{value:void 0}),We("invalid",t);break;case"textarea":Um(t,r),s=jh(t,r),We("invalid",t);break;default:s=r}Fh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?u0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&a0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&da(t,u):typeof u=="number"&&da(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ha.hasOwnProperty(i)?u!=null&&i==="onScroll"&&We("scroll",t):u!=null&&of(t,i,u,o))}switch(n){case"input":pl(t),jm(t,r,!1);break;case"textarea":pl(t),Fm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+As(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?$i(t,!!r.multiple,i,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Pv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Js(Ia.current),Js(yr.current),Il(e)){if(r=e.stateNode,n=e.memoizedProps,r[pr]=e,(i=r.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:Tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pr]=e,e.stateNode=r}return Yt(e),null;case 13:if(Qe(rt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xe&&bn!==null&&e.mode&1&&!(e.flags&128))J0(),no(),e.flags|=98560,i=!1;else if(i=Il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[pr]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),i=!1}else Yn!==null&&(Ed(Yn),Yn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||rt.current&1?xt===0&&(xt=3):zf())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return so(),fd(t,e),t===null&&va(e.stateNode.containerInfo),Yt(e),null;case 10:return xf(e.type._context),Yt(e),null;case 17:return En(e.type)&&gu(),Yt(e),null;case 19:if(Qe(rt),i=e.memoizedState,i===null)return Yt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)jo(i,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Iu(t),o!==null){for(e.flags|=128,jo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return He(rt,rt.current&1|2),e.child}t=t.sibling}i.tail!==null&&ct()>oo&&(e.flags|=128,r=!0,jo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),jo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Xe)return Yt(e),null}else 2*ct()-i.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,jo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ct(),e.sibling=null,n=rt.current,He(rt,r?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return $f(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Cn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function aS(t,e){switch(Ef(e),e.tag){case 1:return En(e.type)&&gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),Qe(wn),Qe(nn),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(Qe(rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(rt),null;case 4:return so(),null;case 10:return xf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var Al=!1,en=!1,lS=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){lt(t,e,r)}else n.current=null}function pd(t,e,n){try{n()}catch(r){lt(t,e,r)}}var Rg=!1;function uS(t,e){if(Yh=du,t=L0(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,v=null;t:for(;;){for(var k;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)v=p,p=k;for(;;){if(p===t)break t;if(v===n&&++c===s&&(l=o),v===i&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xh={focusedElem:t,selectionRange:n},du=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var N=b.memoizedProps,V=b.memoizedState,I=e.stateNode,S=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Qn(e.type,N),V);I.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(P){lt(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return b=Rg,Rg=!1,b}function na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&pd(e,n,i)}s=s.next}while(s!==r)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dv(t){var e=t.alternate;e!==null&&(t.alternate=null,Dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pr],delete e[Ea],delete e[td],delete e[qI],delete e[GI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ov(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ov(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mu));else if(r!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var Ut=null,Jn=!1;function es(t,e,n){for(n=n.child;n!==null;)Vv(t,e,n),n=n.sibling}function Vv(t,e,n){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(Xu,n)}catch{}switch(n.tag){case 5:en||Ui(n,e);case 6:var r=Ut,s=Jn;Ut=null,es(t,e,n),Ut=r,Jn=s,Ut!==null&&(Jn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Jn?(t=Ut,n=n.stateNode,t.nodeType===8?sh(t.parentNode,n):t.nodeType===1&&sh(t,n),ga(t)):sh(Ut,n.stateNode));break;case 4:r=Ut,s=Jn,Ut=n.stateNode.containerInfo,Jn=!0,es(t,e,n),Ut=r,Jn=s;break;case 0:case 11:case 14:case 15:if(!en&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&pd(n,e,o),s=s.next}while(s!==r)}es(t,e,n);break;case 1:if(!en&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){lt(n,e,l)}es(t,e,n);break;case 21:es(t,e,n);break;case 22:n.mode&1?(en=(r=en)||n.memoizedState!==null,es(t,e,n),en=r):es(t,e,n);break;default:es(t,e,n)}}function Ng(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lS),e.forEach(function(r){var s=_S.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ut=l.stateNode,Jn=!1;break e;case 3:Ut=l.stateNode.containerInfo,Jn=!0;break e;case 4:Ut=l.stateNode.containerInfo,Jn=!0;break e}l=l.return}if(Ut===null)throw Error(z(160));Vv(i,o,s),Ut=null,Jn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){lt(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mv(e,t),e=e.sibling}function Mv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),hr(t),r&4){try{na(3,t,t.return),oc(3,t)}catch(N){lt(t,t.return,N)}try{na(5,t,t.return)}catch(N){lt(t,t.return,N)}}break;case 1:Kn(e,t),hr(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(Kn(e,t),hr(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var s=t.stateNode;try{da(s,"")}catch(N){lt(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&s0(s,i),$h(l,o);var c=$h(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?u0(s,p):f==="dangerouslySetInnerHTML"?a0(s,p):f==="children"?da(s,p):of(s,f,p,c)}switch(l){case"input":Mh(s,i);break;case"textarea":i0(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?$i(s,!!i.multiple,k,!1):v!==!!i.multiple&&(i.defaultValue!=null?$i(s,!!i.multiple,i.defaultValue,!0):$i(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ea]=i}catch(N){lt(t,t.return,N)}}break;case 6:if(Kn(e,t),hr(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){lt(t,t.return,N)}}break;case 3:if(Kn(e,t),hr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(N){lt(t,t.return,N)}break;case 4:Kn(e,t),hr(t);break;case 13:Kn(e,t),hr(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Uf=ct())),r&4&&Ng(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||f,Kn(e,t),en=c):Kn(e,t),hr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(p=Q=f;Q!==null;){switch(v=Q,k=v.child,v.tag){case 0:case 11:case 14:case 15:na(4,v,v.return);break;case 1:Ui(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(N){lt(r,n,N)}}break;case 5:Ui(v,v.return);break;case 22:if(v.memoizedState!==null){Dg(p);continue}}k!==null?(k.return=v,Q=k):Dg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=l0("display",o))}catch(N){lt(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){lt(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Kn(e,t),hr(t),r&4&&Ng(t);break;case 21:break;default:Kn(e,t),hr(t)}}function hr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ov(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(da(s,""),r.flags&=-33);var i=bg(t);yd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bg(t);gd(t,l,o);break;default:throw Error(z(161))}}catch(u){lt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cS(t,e,n){Q=t,Lv(t)}function Lv(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Al;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||en;l=Al;var c=en;if(Al=o,(en=u)&&!c)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?Og(s):u!==null?(u.return=o,Q=u):Og(s);for(;i!==null;)Q=i,Lv(i),i=i.sibling;Q=s,Al=l,en=c}Pg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):Pg(t)}}function Pg(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||oc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!en)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&gg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ga(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}en||e.flags&512&&md(e)}catch(v){lt(e,e.return,v)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Dg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Og(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(u){lt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){lt(e,s,u)}}var i=e.return;try{md(e)}catch(u){lt(e,i,u)}break;case 5:var o=e.return;try{md(e)}catch(u){lt(e,o,u)}}}catch(u){lt(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var hS=Math.ceil,Au=Kr.ReactCurrentDispatcher,Lf=Kr.ReactCurrentOwner,Hn=Kr.ReactCurrentBatchConfig,Pe=0,Lt=null,vt=null,Ht=0,Cn=0,Fi=Ls(0),xt=0,ka=null,oi=0,ac=0,jf=0,ra=null,_n=null,Uf=0,oo=1/0,Cr=null,ku=!1,_d=null,_s=null,kl=!1,ds=null,Cu=0,sa=0,vd=null,Wl=-1,Kl=0;function cn(){return Pe&6?ct():Wl!==-1?Wl:Wl=ct()}function vs(t){return t.mode&1?Pe&2&&Ht!==0?Ht&-Ht:KI.transition!==null?(Kl===0&&(Kl=E0()),Kl):(t=je,t!==0||(t=window.event,t=t===void 0?16:C0(t.type)),t):1}function tr(t,e,n,r){if(50<sa)throw sa=0,vd=null,Error(z(185));Fa(t,n,r),(!(Pe&2)||t!==Lt)&&(t===Lt&&(!(Pe&2)&&(ac|=n),xt===4&&is(t,Ht)),Tn(t,r),n===1&&Pe===0&&!(e.mode&1)&&(oo=ct()+500,rc&&js()))}function Tn(t,e){var n=t.callbackNode;KT(t,e);var r=hu(t,t===Lt?Ht:0);if(r===0)n!==null&&Bm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bm(n),e===1)t.tag===0?WI(Vg.bind(null,t)):W0(Vg.bind(null,t)),BI(function(){!(Pe&6)&&js()}),n=null;else{switch(T0(r)){case 1:n=hf;break;case 4:n=v0;break;case 16:n=cu;break;case 536870912:n=w0;break;default:n=cu}n=qv(n,jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jv(t,e){if(Wl=-1,Kl=0,Pe&6)throw Error(z(327));var n=t.callbackNode;if(Gi()&&t.callbackNode!==n)return null;var r=hu(t,t===Lt?Ht:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ru(t,r);else{e=r;var s=Pe;Pe|=2;var i=Fv();(Lt!==t||Ht!==e)&&(Cr=null,oo=ct()+500,Zs(t,e));do try{pS();break}catch(l){Uv(t,l)}while(!0);Sf(),Au.current=i,Pe=s,vt!==null?e=0:(Lt=null,Ht=0,e=xt)}if(e!==0){if(e===2&&(s=Gh(t),s!==0&&(r=s,e=wd(t,s))),e===1)throw n=ka,Zs(t,0),is(t,r),Tn(t,ct()),n;if(e===6)is(t,r);else{if(s=t.current.alternate,!(r&30)&&!dS(s)&&(e=Ru(t,r),e===2&&(i=Gh(t),i!==0&&(r=i,e=wd(t,i))),e===1))throw n=ka,Zs(t,0),is(t,r),Tn(t,ct()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Gs(t,_n,Cr);break;case 3:if(is(t,r),(r&130023424)===r&&(e=Uf+500-ct(),10<e)){if(hu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){cn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ed(Gs.bind(null,t,_n,Cr),e);break}Gs(t,_n,Cr);break;case 4:if(is(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-er(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hS(r/1960))-r,10<r){t.timeoutHandle=ed(Gs.bind(null,t,_n,Cr),r);break}Gs(t,_n,Cr);break;case 5:Gs(t,_n,Cr);break;default:throw Error(z(329))}}}return Tn(t,ct()),t.callbackNode===n?jv.bind(null,t):null}function wd(t,e){var n=ra;return t.current.memoizedState.isDehydrated&&(Zs(t,e).flags|=256),t=Ru(t,e),t!==2&&(e=_n,_n=n,e!==null&&Ed(e)),t}function Ed(t){_n===null?_n=t:_n.push.apply(_n,t)}function dS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!sr(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function is(t,e){for(e&=~jf,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-er(e),r=1<<n;t[n]=-1,e&=~r}}function Vg(t){if(Pe&6)throw Error(z(327));Gi();var e=hu(t,0);if(!(e&1))return Tn(t,ct()),null;var n=Ru(t,e);if(t.tag!==0&&n===2){var r=Gh(t);r!==0&&(e=r,n=wd(t,r))}if(n===1)throw n=ka,Zs(t,0),is(t,e),Tn(t,ct()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gs(t,_n,Cr),Tn(t,ct()),null}function Ff(t,e){var n=Pe;Pe|=1;try{return t(e)}finally{Pe=n,Pe===0&&(oo=ct()+500,rc&&js())}}function ai(t){ds!==null&&ds.tag===0&&!(Pe&6)&&Gi();var e=Pe;Pe|=1;var n=Hn.transition,r=je;try{if(Hn.transition=null,je=1,t)return t()}finally{je=r,Hn.transition=n,Pe=e,!(Pe&6)&&js()}}function $f(){Cn=Fi.current,Qe(Fi)}function Zs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zI(n)),vt!==null)for(n=vt.return;n!==null;){var r=n;switch(Ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gu();break;case 3:so(),Qe(wn),Qe(nn),bf();break;case 5:Rf(r);break;case 4:so();break;case 13:Qe(rt);break;case 19:Qe(rt);break;case 10:xf(r.type._context);break;case 22:case 23:$f()}n=n.return}if(Lt=t,vt=t=ws(t.current,null),Ht=Cn=e,xt=0,ka=null,jf=ac=oi=0,_n=ra=null,Qs!==null){for(e=0;e<Qs.length;e++)if(n=Qs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Qs=null}return t}function Uv(t,e){do{var n=vt;try{if(Sf(),Hl.current=xu,Su){for(var r=st.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Su=!1}if(ii=0,Mt=St=st=null,ta=!1,Sa=0,Lf.current=null,n===null||n.return===null){xt=1,ka=e,vt=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ht,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Tg(o);if(k!==null){k.flags&=-257,Ig(k,o,l,i,e),k.mode&1&&Eg(i,c,e),e=k,u=c;var b=e.updateQueue;if(b===null){var N=new Set;N.add(u),e.updateQueue=N}else b.add(u);break e}else{if(!(e&1)){Eg(i,c,e),zf();break e}u=Error(z(426))}}else if(Xe&&l.mode&1){var V=Tg(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Ig(V,o,l,i,e),Tf(io(u,l));break e}}i=u=io(u,l),xt!==4&&(xt=2),ra===null?ra=[i]:ra.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=Tv(i,u,e);mg(i,I);break e;case 1:l=u;var S=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof S.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(_s===null||!_s.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var P=Iv(i,l,e);mg(i,P);break e}}i=i.return}while(i!==null)}zv(n)}catch(j){e=j,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(!0)}function Fv(){var t=Au.current;return Au.current=xu,t===null?xu:t}function zf(){(xt===0||xt===3||xt===2)&&(xt=4),Lt===null||!(oi&268435455)&&!(ac&268435455)||is(Lt,Ht)}function Ru(t,e){var n=Pe;Pe|=2;var r=Fv();(Lt!==t||Ht!==e)&&(Cr=null,Zs(t,e));do try{fS();break}catch(s){Uv(t,s)}while(!0);if(Sf(),Pe=n,Au.current=r,vt!==null)throw Error(z(261));return Lt=null,Ht=0,xt}function fS(){for(;vt!==null;)$v(vt)}function pS(){for(;vt!==null&&!UT();)$v(vt)}function $v(t){var e=Hv(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?zv(t):vt=e,Lf.current=null}function zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aS(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,vt=null;return}}else if(n=oS(n,e,Cn),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);xt===0&&(xt=5)}function Gs(t,e,n){var r=je,s=Hn.transition;try{Hn.transition=null,je=1,mS(t,e,n,r)}finally{Hn.transition=s,je=r}return null}function mS(t,e,n,r){do Gi();while(ds!==null);if(Pe&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(QT(t,i),t===Lt&&(vt=Lt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,qv(cu,function(){return Gi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Hn.transition,Hn.transition=null;var o=je;je=1;var l=Pe;Pe|=4,Lf.current=null,uS(t,n),Mv(n,t),VI(Xh),du=!!Yh,Xh=Yh=null,t.current=n,cS(n),FT(),Pe=l,je=o,Hn.transition=i}else t.current=n;if(kl&&(kl=!1,ds=t,Cu=s),i=t.pendingLanes,i===0&&(_s=null),BT(n.stateNode),Tn(t,ct()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ku)throw ku=!1,t=_d,_d=null,t;return Cu&1&&t.tag!==0&&Gi(),i=t.pendingLanes,i&1?t===vd?sa++:(sa=0,vd=t):sa=0,js(),null}function Gi(){if(ds!==null){var t=T0(Cu),e=Hn.transition,n=je;try{if(Hn.transition=null,je=16>t?16:t,ds===null)var r=!1;else{if(t=ds,ds=null,Cu=0,Pe&6)throw Error(z(331));var s=Pe;for(Pe|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Q=c;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:na(8,f,i)}var p=f.child;if(p!==null)p.return=f,Q=p;else for(;Q!==null;){f=Q;var v=f.sibling,k=f.return;if(Dv(f),f===c){Q=null;break}if(v!==null){v.return=k,Q=v;break}Q=k}}}var b=i.alternate;if(b!==null){var N=b.child;if(N!==null){b.child=null;do{var V=N.sibling;N.sibling=null,N=V}while(N!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:na(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,Q=I;break e}Q=i.return}}var S=t.current;for(Q=S;Q!==null;){o=Q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,Q=A;else e:for(o=S;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:oc(9,l)}}catch(j){lt(l,l.return,j)}if(l===o){Q=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,Q=P;break e}Q=l.return}}if(Pe=s,js(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(Xu,t)}catch{}r=!0}return r}finally{je=n,Hn.transition=e}}return!1}function Mg(t,e,n){e=io(n,e),e=Tv(t,e,1),t=ys(t,e,1),e=cn(),t!==null&&(Fa(t,1,e),Tn(t,e))}function lt(t,e,n){if(t.tag===3)Mg(t,t,n);else for(;e!==null;){if(e.tag===3){Mg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_s===null||!_s.has(r))){t=io(n,t),t=Iv(e,t,1),e=ys(e,t,1),t=cn(),e!==null&&(Fa(e,1,t),Tn(e,t));break}}e=e.return}}function gS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ht&n)===n&&(xt===4||xt===3&&(Ht&130023424)===Ht&&500>ct()-Uf?Zs(t,0):jf|=n),Tn(t,e)}function Bv(t,e){e===0&&(t.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var n=cn();t=zr(t,e),t!==null&&(Fa(t,e,n),Tn(t,n))}function yS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bv(t,n)}function _S(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),Bv(t,n)}var Hv;Hv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,iS(t,e,n);vn=!!(t.flags&131072)}else vn=!1,Xe&&e.flags&1048576&&K0(e,vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gl(t,e),t=e.pendingProps;var s=to(e,nn.current);qi(e,n),s=Pf(null,e,r,t,s,n);var i=Df();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,En(r)?(i=!0,yu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,kf(e),s.updater=ic,e.stateNode=s,s._reactInternals=e,ad(e,r,t,n),e=cd(null,e,r,!0,i,n)):(e.tag=0,Xe&&i&&wf(e),ln(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=wS(r),t=Qn(r,t),s){case 0:e=ud(null,e,r,t,n);break e;case 1:e=Ag(null,e,r,t,n);break e;case 11:e=Sg(null,e,r,t,n);break e;case 14:e=xg(null,e,r,Qn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qn(r,s),ud(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qn(r,s),Ag(t,e,r,s,n);case 3:e:{if(kv(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,ev(t,e),Tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=io(Error(z(423)),e),e=kg(t,e,r,n,s);break e}else if(r!==s){s=io(Error(z(424)),e),e=kg(t,e,r,n,s);break e}else for(bn=gs(e.stateNode.containerInfo.firstChild),Nn=e,Xe=!0,Yn=null,n=X0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===s){e=Br(t,e,n);break e}ln(t,e,r,n)}e=e.child}return e;case 5:return tv(e),t===null&&sd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Zh(r,s)?o=null:i!==null&&Zh(r,i)&&(e.flags|=32),Av(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&sd(e),null;case 13:return Cv(t,e,n);case 4:return Cf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):ln(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qn(r,s),Sg(t,e,r,s,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,He(wu,r._currentValue),r._currentValue=o,i!==null)if(sr(i.value,o)){if(i.children===s.children&&!wn.current){e=Br(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=jr(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),id(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),id(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ln(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,qi(e,n),s=qn(s),r=r(s),e.flags|=1,ln(t,e,r,n),e.child;case 14:return r=e.type,s=Qn(r,e.pendingProps),s=Qn(r.type,s),xg(t,e,r,s,n);case 15:return Sv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qn(r,s),Gl(t,e),e.tag=1,En(r)?(t=!0,yu(e)):t=!1,qi(e,n),Ev(e,r,s),ad(e,r,s,n),cd(null,e,r,!0,t,n);case 19:return Rv(t,e,n);case 22:return xv(t,e,n)}throw Error(z(156,e.tag))};function qv(t,e){return _0(t,e)}function vS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,r){return new vS(t,e,n,r)}function Bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wS(t){if(typeof t=="function")return Bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lf)return 11;if(t===uf)return 14}return 2}function ws(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bi:return ei(n.children,s,i,e);case af:o=8,s|=8;break;case Nh:return t=Bn(12,n,e,s|2),t.elementType=Nh,t.lanes=i,t;case Ph:return t=Bn(13,n,e,s),t.elementType=Ph,t.lanes=i,t;case Dh:return t=Bn(19,n,e,s),t.elementType=Dh,t.lanes=i,t;case t0:return lc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z_:o=10;break e;case e0:o=9;break e;case lf:o=11;break e;case uf:o=14;break e;case ns:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ei(t,e,n,r){return t=Bn(7,t,r,e),t.lanes=n,t}function lc(t,e,n,r){return t=Bn(22,t,r,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ES(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wc(0),this.expirationTimes=Wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Hf(t,e,n,r,s,i,o,l,u){return t=new ES(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Bn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(i),t}function TS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gv(t){if(!t)return ks;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(En(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(En(n))return G0(t,n,e)}return e}function Wv(t,e,n,r,s,i,o,l,u){return t=Hf(n,r,!0,t,s,i,o,l,u),t.context=Gv(null),n=t.current,r=cn(),s=vs(n),i=jr(r,s),i.callback=e??null,ys(n,i,s),t.current.lanes=s,Fa(t,s,r),Tn(t,r),t}function uc(t,e,n,r){var s=e.current,i=cn(),o=vs(s);return n=Gv(n),e.context===null?e.context=n:e.pendingContext=n,e=jr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ys(s,e,o),t!==null&&(tr(t,s,o,i),Bl(t,s,o)),o}function bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Lg(t,e),(t=t.alternate)&&Lg(t,e)}function IS(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gf(t){this._internalRoot=t}cc.prototype.render=Gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));uc(t,e,null,null)};cc.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){uc(null,t,null,null)}),e[$r]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=x0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ss.length&&e!==0&&e<ss[n].priority;n++);ss.splice(n,0,t),n===0&&k0(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jg(){}function SS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=bu(o);i.call(c)}}var o=Wv(e,r,t,0,null,!1,!1,"",jg);return t._reactRootContainer=o,t[$r]=o.current,va(t.nodeType===8?t.parentNode:t),ai(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=bu(u);l.call(c)}}var u=Hf(t,0,!1,null,null,!1,!1,"",jg);return t._reactRootContainer=u,t[$r]=u.current,va(t.nodeType===8?t.parentNode:t),ai(function(){uc(e,u,n,r)}),u}function dc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=bu(o);l.call(u)}}uc(e,o,t,s)}else o=SS(n,e,t,s,r);return bu(o)}I0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qo(e.pendingLanes);n!==0&&(df(e,n|1),Tn(e,ct()),!(Pe&6)&&(oo=ct()+500,js()))}break;case 13:ai(function(){var r=zr(t,1);if(r!==null){var s=cn();tr(r,t,1,s)}}),qf(t,1)}};ff=function(t){if(t.tag===13){var e=zr(t,134217728);if(e!==null){var n=cn();tr(e,t,134217728,n)}qf(t,134217728)}};S0=function(t){if(t.tag===13){var e=vs(t),n=zr(t,e);if(n!==null){var r=cn();tr(n,t,e,r)}qf(t,e)}};x0=function(){return je};A0=function(t,e){var n=je;try{return je=t,e()}finally{je=n}};Bh=function(t,e,n){switch(e){case"input":if(Mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=nc(r);if(!s)throw Error(z(90));r0(r),Mh(r,s)}}}break;case"textarea":i0(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};d0=Ff;f0=ai;var xS={usingClientEntryPoint:!1,Events:[za,Oi,nc,c0,h0,Ff]},Uo={findFiberByHostInstance:Ks,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AS={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g0(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||IS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Xu=Cl.inject(AS),gr=Cl}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xS;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(z(200));return TS(t,e,null,n)};Dn.createRoot=function(t,e){if(!Wf(t))throw Error(z(299));var n=!1,r="",s=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Hf(t,1,!1,null,null,n,!1,r,s),t[$r]=e.current,va(t.nodeType===8?t.parentNode:t),new Gf(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=g0(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return ai(t)};Dn.hydrate=function(t,e,n){if(!hc(e))throw Error(z(200));return dc(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wv(e,null,t,1,n??null,s,!1,i,o),t[$r]=e.current,va(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new cc(e)};Dn.render=function(t,e,n){if(!hc(e))throw Error(z(200));return dc(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!hc(t))throw Error(z(40));return t._reactRootContainer?(ai(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1};Dn.unstable_batchedUpdates=Ff;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return dc(t,e,n,!1,r)};Dn.version="18.3.1-next-f1338f8080-20240426";function Qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qv)}catch(t){console.error(t)}}Qv(),Q_.exports=Dn;var kS=Q_.exports,Ug=kS;Rh.createRoot=Ug.createRoot,Rh.hydrateRoot=Ug.hydrateRoot;/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=t=>{const e=RS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=ie.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>ie.createElement("svg",{ref:u,...bS,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Jv("lucide",s),...!i&&!NS(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,f])=>ie.createElement(c,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(t,e)=>{const n=ie.forwardRef(({className:r,...s},i)=>ie.createElement(PS,{ref:i,iconNode:e,className:Jv(`lucide-${CS(Fg(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Fg(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],OS=fe("binary",DS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Yv=fe("brain",VS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],$g=fe("calendar",MS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],jS=fe("chart-column",LS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],FS=fe("chevron-down",US);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],zS=fe("chevron-left",$S);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],HS=fe("chevron-right",BS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],GS=fe("chevron-up",qS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],KS=fe("circle-alert",WS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],JS=fe("circle-check",QS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],XS=fe("clipboard-check",YS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Kf=fe("clock",ZS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Xv=fe("cloud-upload",ex);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],nx=fe("component",tx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],zg=fe("copy",rx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Zv=fe("database",sx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ox=fe("download",ix);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]],lx=fe("flag",ax);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],cx=fe("folder-kanban",ux);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Bg=fe("funnel",hx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ew=fe("globe",dx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],px=fe("layers",fx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],gx=fe("lightbulb",mx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"M3 10a2 2 0 0 0 2 2h3",key:"1npucw"}],["path",{d:"M3 5v12a2 2 0 0 0 2 2h3",key:"x1gjn2"}]],_x=fe("list-tree",yx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],wx=fe("loader-circle",vx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Hg=fe("map-pin",Ex);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ix=fe("menu",Tx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],xx=fe("palette",Sx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],kx=fe("pen",Ax);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Rx=fe("play",Cx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Nx=fe("plus",bx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],Dx=fe("power",Px);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],Vx=fe("refresh-ccw",Ox);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Lx=fe("rotate-ccw",Mx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ux=fe("save",jx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],$x=fe("settings-2",Fx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Bx=fe("sparkles",zx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],tw=fe("target",Hx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Gx=fe("trash-2",qx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],nw=fe("trending-up",Wx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Qx=fe("users",Kx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Yx=fe("wand-sparkles",Jx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zx=fe("x",Xx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],tA=fe("zap-off",eA);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Td=fe("zap",nA),rA=()=>{};var qg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let v=(l&15)<<2|c>>6,k=c&63;u||(k=64,o||(v=64)),r.push(n[f],n[p],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||p==null)throw new iA;const v=i<<2|l>>4;if(r.push(v),c!==64){const k=l<<4&240|c>>2;if(r.push(k),p!==64){const b=c<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oA=function(t){const e=rw(t);return sw.encodeByteArray(e,!0)},Nu=function(t){return oA(t).replace(/\./g,"")},iw=function(t){try{return sw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const lA=()=>aA().__FIREBASE_DEFAULTS__,uA=()=>{if(typeof process>"u"||typeof qg>"u")return;const t=qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iw(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return rA()||lA()||uA()||cA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ow=t=>{var e,n;return(n=(e=fc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},aw=t=>{const e=ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lw=()=>{var t;return(t=fc())==null?void 0:t.config},uw=t=>{var e;return(e=fc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Nu(JSON.stringify(n)),Nu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())}function fA(){var e;const t=(e=fc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yA(){const t=rn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _A(){return!fA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vA(){try{return typeof indexedDB=="object"}catch{return!1}}function wA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="FirebaseError";class Ar extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EA,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Ar(s,l,r)}}function TA(t,e){return t.replace(IA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const IA=/\{\$([^}]+)}/g;function SA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function li(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gg(i)&&Gg(o)){if(!li(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xA(t,e){const n=new AA(t,e);return n.subscribe.bind(n)}class AA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ph),s.error===void 0&&(s.error=ph),s.complete===void 0&&(s.complete=ph);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ph(){}/**
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
 */function Ct(t){return t&&t._delegate?t._delegate:t}/**
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
 */function gi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qf(t){return(await fetch(t,{credentials:"include"})).ok}class Cs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ws="[DEFAULT]";/**
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
 */class CA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bA(e))try{this.getOrInitializeService({instanceIdentifier:Ws})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ws){return this.instances.has(e)}getOptions(e=Ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ws){return this.component?this.component.multipleInstances?e:Ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RA(t){return t===Ws?void 0:t}function bA(t){return t.instantiationMode==="EAGER"}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const PA={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},DA=Ie.INFO,OA={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},VA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=OA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jf{constructor(e){this.name=e,this._logLevel=DA,this._logHandler=VA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const MA=(t,e)=>e.some(n=>t instanceof n);let Wg,Kg;function LA(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jA(){return Kg||(Kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hw=new WeakMap,Id=new WeakMap,dw=new WeakMap,mh=new WeakMap,Yf=new WeakMap;function UA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Es(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hw.set(n,t)}).catch(()=>{}),Yf.set(e,t),e}function FA(t){if(Id.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Id.set(t,e)}let Sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Id.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $A(t){Sd=t(Sd)}function zA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gh(this),e,...n);return dw.set(r,e.sort?e.sort():[e]),Es(r)}:jA().includes(t)?function(...e){return t.apply(gh(this),e),Es(hw.get(this))}:function(...e){return Es(t.apply(gh(this),e))}}function BA(t){return typeof t=="function"?zA(t):(t instanceof IDBTransaction&&FA(t),MA(t,LA())?new Proxy(t,Sd):t)}function Es(t){if(t instanceof IDBRequest)return UA(t);if(mh.has(t))return mh.get(t);const e=BA(t);return e!==t&&(mh.set(t,e),Yf.set(e,t)),e}const gh=t=>Yf.get(t);function HA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Es(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Es(o.result),u.oldVersion,u.newVersion,Es(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const qA=["get","getKey","getAll","getAllKeys","count"],GA=["put","add","delete","clear"],yh=new Map;function Qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yh.get(e))return yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=GA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return yh.set(e,i),i}$A(t=>({...t,get:(e,n,r)=>Qg(e,n)||t.get(e,n,r),has:(e,n)=>!!Qg(e,n)||t.has(e,n)}));/**
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
 */class WA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xd="@firebase/app",Jg="0.14.12";/**
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
 */const Hr=new Jf("@firebase/app"),QA="@firebase/app-compat",JA="@firebase/analytics-compat",YA="@firebase/analytics",XA="@firebase/app-check-compat",ZA="@firebase/app-check",ek="@firebase/auth",tk="@firebase/auth-compat",nk="@firebase/database",rk="@firebase/data-connect",sk="@firebase/database-compat",ik="@firebase/functions",ok="@firebase/functions-compat",ak="@firebase/installations",lk="@firebase/installations-compat",uk="@firebase/messaging",ck="@firebase/messaging-compat",hk="@firebase/performance",dk="@firebase/performance-compat",fk="@firebase/remote-config",pk="@firebase/remote-config-compat",mk="@firebase/storage",gk="@firebase/storage-compat",yk="@firebase/firestore",_k="@firebase/ai",vk="@firebase/firestore-compat",wk="firebase",Ek="12.13.0";/**
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
 */const Ad="[DEFAULT]",Tk={[xd]:"fire-core",[QA]:"fire-core-compat",[YA]:"fire-analytics",[JA]:"fire-analytics-compat",[ZA]:"fire-app-check",[XA]:"fire-app-check-compat",[ek]:"fire-auth",[tk]:"fire-auth-compat",[nk]:"fire-rtdb",[rk]:"fire-data-connect",[sk]:"fire-rtdb-compat",[ik]:"fire-fn",[ok]:"fire-fn-compat",[ak]:"fire-iid",[lk]:"fire-iid-compat",[uk]:"fire-fcm",[ck]:"fire-fcm-compat",[hk]:"fire-perf",[dk]:"fire-perf-compat",[fk]:"fire-rc",[pk]:"fire-rc-compat",[mk]:"fire-gcs",[gk]:"fire-gcs-compat",[yk]:"fire-fst",[vk]:"fire-fst-compat",[_k]:"fire-vertex","fire-js":"fire-js",[wk]:"fire-js-all"};/**
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
 */const Pu=new Map,Ik=new Map,kd=new Map;function Yg(t,e){try{t.container.addComponent(e)}catch(n){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(kd.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;kd.set(e,t);for(const n of Pu.values())Yg(n,t);for(const n of Ik.values())Yg(n,t);return!0}function pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Sk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ts=new Ha("app","Firebase",Sk);/**
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
 */class xk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ts.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=Ek;function fw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ad,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ts.create("bad-app-name",{appName:String(s)});if(n||(n=lw()),!n)throw Ts.create("no-options");const i=Pu.get(s);if(i){if(li(n,i.options)&&li(r,i.config))return i;throw Ts.create("duplicate-app",{appName:s})}const o=new NA(s);for(const u of kd.values())o.addComponent(u);const l=new xk(n,r,o);return Pu.set(s,l),l}function Xf(t=Ad){const e=Pu.get(t);if(!e&&t===Ad&&lw())return fw();if(!e)throw Ts.create("no-app",{appName:t});return e}function _r(t,e,n){let r=Tk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(o.join(" "));return}ui(new Cs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ak="firebase-heartbeat-database",kk=1,Ca="firebase-heartbeat-store";let _h=null;function pw(){return _h||(_h=HA(Ak,kk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ca)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ts.create("idb-open",{originalErrorMessage:t.message})})),_h}async function Ck(t){try{const n=(await pw()).transaction(Ca),r=await n.objectStore(Ca).get(mw(t));return await n.done,r}catch(e){if(e instanceof Ar)Hr.warn(e.message);else{const n=Ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(n.message)}}}async function Xg(t,e){try{const r=(await pw()).transaction(Ca,"readwrite");await r.objectStore(Ca).put(e,mw(t)),await r.done}catch(n){if(n instanceof Ar)Hr.warn(n.message);else{const r=Ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hr.warn(r.message)}}}function mw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rk=1024,bk=30;class Nk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>bk){const o=Ok(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Hr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zg(),{heartbeatsToSend:r,unsentEntries:s}=Pk(this._heartbeatsCache.heartbeats),i=Nu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Hr.warn(n),""}}}function Zg(){return new Date().toISOString().substring(0,10)}function Pk(t,e=Rk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ey(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vA()?wA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ck(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ey(t){return Nu(JSON.stringify({version:2,heartbeats:t})).length}function Ok(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Vk(t){ui(new Cs("platform-logger",e=>new WA(e),"PRIVATE")),ui(new Cs("heartbeat",e=>new Nk(e),"PRIVATE")),_r(xd,Jg,t),_r(xd,Jg,"esm2020"),_r("fire-js","")}Vk("");var Mk="firebase",Lk="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r(Mk,Lk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="firebasestorage.googleapis.com",yw="storageBucket",jk=2*60*1e3,Uk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Ar{constructor(e,n,r=0){super(vh(e),`Firebase Storage: ${n} (${vh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ht;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ht||(ht={}));function vh(t){return"storage/"+t}function Zf(){const t="An unknown error occurred, please check the error payload for server response.";return new dt(ht.UNKNOWN,t)}function Fk(t){return new dt(ht.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function $k(t){return new dt(ht.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new dt(ht.UNAUTHENTICATED,t)}function Bk(){return new dt(ht.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Hk(t){return new dt(ht.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qk(){return new dt(ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gk(){return new dt(ht.CANCELED,"User canceled the upload/download.")}function Wk(t){return new dt(ht.INVALID_URL,"Invalid URL '"+t+"'.")}function Kk(t){return new dt(ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qk(){return new dt(ht.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+yw+"' property when initializing the app?")}function Jk(){return new dt(ht.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Yk(t){return new dt(ht.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cd(t){return new dt(ht.INVALID_ARGUMENT,t)}function _w(){return new dt(ht.APP_DELETED,"The Firebase app was deleted.")}function Xk(t){return new dt(ht.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ia(t,e){return new dt(ht.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Fo(t){throw new dt(ht.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=un.makeFromUrl(e,n)}catch{return new un(e,"")}if(r.path==="")return r;throw Kk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(P){P.path_=decodeURIComponent(P.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",k=new RegExp(`^https?://${p}/${f}/b/${s}/o${v}`,"i"),b={bucket:1,path:3},N=n===gw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",I=new RegExp(`^https?://${N}/${s}/${V}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:k,indices:b,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let P=0;P<A.length;P++){const j=A[P],$=j.regex.exec(e);if($){const E=$[j.indices.bucket];let _=$[j.indices.path];_||(_=""),r=new un(E,_),j.postModify(r);break}}if(r==null)throw Wk(e);return r}}class Zk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...V){c||(c=!0,e.apply(null,V))}function p(V){s=setTimeout(()=>{s=null,t(k,u())},V)}function v(){i&&clearTimeout(i)}function k(V,...I){if(c){v();return}if(V){v(),f.call(null,V,...I);return}if(u()||o){v(),f.call(null,V,...I);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,p(A)}let b=!1;function N(V){b||(b=!0,v(),!c&&(s!==null?(V||(l=2),clearTimeout(s),p(0)):V||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function tC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t){return t!==void 0}function rC(t){return typeof t=="object"&&!Array.isArray(t)}function vw(t){return typeof t=="string"||t instanceof String}function ty(t){return ep()&&t instanceof Blob}function ep(){return typeof Blob<"u"}function Rd(t,e,n,r){if(r<e)throw Cd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Cd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ti;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ti||(ti={}));/**
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
 */class oC{constructor(e,n,r,s,i,o,l,u,c,f,p,v=!0,k=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=v,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,N)=>{this.resolve_=b,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Rl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ti.NO_ERROR,u=i.getStatus();if(!l||iC(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ti.ABORT;r(!1,new Rl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Rl(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());nC(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Zf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?_w():Gk();o(u)}else{const u=qk();o(u)}};this.canceled_?n(!1,new Rl(!1,null,!0)):this.backoffId_=eC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function aC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hC(t,e,n,r,s,i,o=!0,l=!1){const u=sC(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return uC(f,e),aC(f,n),lC(f,i),cC(f,r),new oC(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fC(...t){const e=dC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ep())return new Blob(t);throw new dt(ht.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */const mr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wh{constructor(e,n){this.data=e,this.contentType=n||null}}function gC(t,e){switch(t){case mr.RAW:return new wh(ww(e));case mr.BASE64:case mr.BASE64URL:return new wh(Ew(t,e));case mr.DATA_URL:return new wh(_C(e),vC(e))}throw Zf()}function ww(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function yC(t){let e;try{e=decodeURIComponent(t)}catch{throw ia(mr.DATA_URL,"Malformed data URL.")}return ww(e)}function Ew(t,e){switch(t){case mr.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ia(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case mr.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ia(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=mC(e)}catch(s){throw s.message.includes("polyfill")?s:ia(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Tw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ia(mr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=wC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function _C(t){const e=new Tw(t);return e.base64?Ew(mr.BASE64,e.rest):yC(e.rest)}function vC(t){return new Tw(t).contentType}function wC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){let r=0,s="";ty(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ty(this.data_)){const r=this.data_,s=pC(r,e,n);return s===null?null:new os(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new os(r,!0)}}static getBlob(...e){if(ep()){const n=e.map(r=>r instanceof os?r.data_:r);return new os(fC.apply(null,n))}else{const n=e.map(o=>vw(o)?gC(mr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new os(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){let e;try{e=JSON.parse(t)}catch{return null}return rC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Sw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e){return e}class on{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||IC}}let bl=null;function SC(t){return!vw(t)||t.length<2?t:Sw(t)}function xC(){if(bl)return bl;const t=[];t.push(new on("bucket")),t.push(new on("generation")),t.push(new on("metageneration")),t.push(new on("name","fullPath",!0));function e(i,o){return SC(o)}const n=new on("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new on("size");return s.xform=r,t.push(s),t.push(new on("timeCreated")),t.push(new on("updated")),t.push(new on("md5Hash",null,!0)),t.push(new on("cacheControl",null,!0)),t.push(new on("contentDisposition",null,!0)),t.push(new on("contentEncoding",null,!0)),t.push(new on("contentLanguage",null,!0)),t.push(new on("contentType",null,!0)),t.push(new on("metadata","customMetadata",!0)),bl=t,bl}function AC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new un(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function kC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return AC(r,t),r}function CC(t,e,n){const r=Iw(e);return r===null?null:kC(t,r,n)}function RC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
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
 */const ny="prefixes",ry="items";function bC(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ny])for(const s of n[ny]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new un(e,i));r.prefixes.push(o)}if(n[ry])for(const s of n[ry]){const i=t._makeStorageReference(new un(e,s.name));r.items.push(i)}return r}function NC(t,e,n){const r=Iw(n);return r===null?null:bC(t,e,r)}class np{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t){if(!t)throw Zf()}function PC(t,e){function n(r,s){const i=CC(t,s,e);return xw(i!==null),i}return n}function DC(t,e){function n(r,s){const i=NC(t,e,s);return xw(i!==null),i}return n}function rp(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Bk():s=zk():n.getStatus()===402?s=$k(t.bucket):n.getStatus()===403?s=Hk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function OC(t){const e=rp(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Fk(t.path)),i.serverResponse=s.serverResponse,i}return n}function VC(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),l=tp(o,t.host,t._protocol),u="GET",c=t.maxOperationRetryTime,f=new np(l,u,DC(t,e.bucket),c);return f.urlParams=i,f.errorHandler=rp(e),f}function MC(t,e,n){const r=e.fullServerUrl(),s=tp(r,t.host,t._protocol)+"?alt=media",i="GET",o=t.maxOperationRetryTime,l=new np(s,i,(u,c)=>c,o);return l.errorHandler=OC(e),l}function LC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=LC(null,e)),r}function UC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let P=0;P<2;P++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=jC(e,r,s),f=RC(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,v=`\r
--`+u+"--",k=os.getBlob(p,r,v);if(k===null)throw Jk();const b={name:c.fullPath},N=tp(i,t.host,t._protocol),V="POST",I=t.maxUploadRetryTime,S=new np(N,V,PC(t,n),I);return S.urlParams=b,S.headers=o,S.body=k.uploadData(),S.errorHandler=rp(e),S}class Aw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ti.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ti.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ti.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Fo("cannot .send() more than once");if(gi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FC extends Aw{initXhr(){this.xhr_.responseType="text"}}function kw(){return new FC}class $C extends Aw{initXhr(){this.xhr_.responseType="arraybuffer"}}function zC(){return new $C}/**
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
 */class ci{constructor(e,n){this._service=e,n instanceof un?this._location=n:this._location=un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ci(e,n)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Sw(this._location.path)}get storage(){return this._service}get parent(){const e=EC(this._location.path);if(e===null)return null;const n=new un(this._location.bucket,e);return new ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Xk(e)}}function BC(t,e){t._throwIfRoot("getBytes");const n=MC(t.storage,t._location);return t.storage.makeRequestWithTokens(n,zC).then(r=>r)}function HC(t,e,n){t._throwIfRoot("uploadBytes");const r=UC(t.storage,t._location,xC(),new os(e,!0),n);return t.storage.makeRequestWithTokens(r,kw).then(s=>({metadata:s,ref:t}))}function qC(t){const e={prefixes:[],items:[]};return Cw(t,e).then(()=>e)}async function Cw(t,e,n){const s=await GC(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await Cw(t,e,s.nextPageToken)}function GC(t,e){e!=null&&typeof e.maxResults=="number"&&Rd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=VC(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,kw)}function WC(t,e){const n=TC(t._location.path,e),r=new un(t._location.bucket,n);return new ci(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){return/^[A-Za-z]+:\/\//.test(t)}function QC(t,e){return new ci(t,e)}function Rw(t,e){if(t instanceof sp){const n=t;if(n._bucket==null)throw Qk();const r=new ci(n,n._bucket);return e!=null?Rw(r,e):r}else return e!==void 0?WC(t,e):t}function JC(t,e){if(e&&KC(e)){if(t instanceof sp)return QC(t,e);throw Cd("To use ref(service, url), the first argument must be a Storage instance.")}else return Rw(t,e)}function sy(t,e){const n=e==null?void 0:e[yw];return n==null?null:un.makeFromBucketSpec(n,t)}function YC(t,e,n,r={}){t.host=`${e}:${n}`;const s=gi(e);s&&Qf(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:cw(i,t.app.options.projectId))}class sp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=gw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jk,this._maxUploadRetryTime=Uk,this._requests=new Set,s!=null?this._bucket=un.makeFromBucketSpec(s,this._host):this._bucket=sy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=sy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ci(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Zk(_w());{const o=hC(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const iy="@firebase/storage",oy="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t,e){return t=Ct(t),BC(t)}function ZC(t,e,n){return t=Ct(t),HC(t,e,n)}function ay(t){return t=Ct(t),qC(t)}function ip(t,e){return t=Ct(t),JC(t,e)}function eR(t=Xf(),e){t=Ct(t);const r=pc(t,bw).getImmediate({identifier:e}),s=aw("storage");return s&&tR(r,...s),r}function tR(t,e,n,r={}){YC(t,e,n,r)}function nR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new sp(n,r,s,e,yi)}function rR(){ui(new Cs(bw,nR,"PUBLIC").setMultipleInstances(!0)),_r(iy,oy,""),_r(iy,oy,"esm2020")}rR();var ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,Nw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.F=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(g,x,C){for(var w=Array(arguments.length-2),me=2;me<arguments.length;me++)w[me-2]=arguments[me];return _.prototype[x].apply(g,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,T){T||(T=0);const g=Array(16);if(typeof _=="string")for(var x=0;x<16;++x)g[x]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(x=0;x<16;++x)g[x]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],x=E.g[2];let C=E.g[3],w;w=_+(C^T&(x^C))+g[0]+3614090360&4294967295,_=T+(w<<7&4294967295|w>>>25),w=C+(x^_&(T^x))+g[1]+3905402710&4294967295,C=_+(w<<12&4294967295|w>>>20),w=x+(T^C&(_^T))+g[2]+606105819&4294967295,x=C+(w<<17&4294967295|w>>>15),w=T+(_^x&(C^_))+g[3]+3250441966&4294967295,T=x+(w<<22&4294967295|w>>>10),w=_+(C^T&(x^C))+g[4]+4118548399&4294967295,_=T+(w<<7&4294967295|w>>>25),w=C+(x^_&(T^x))+g[5]+1200080426&4294967295,C=_+(w<<12&4294967295|w>>>20),w=x+(T^C&(_^T))+g[6]+2821735955&4294967295,x=C+(w<<17&4294967295|w>>>15),w=T+(_^x&(C^_))+g[7]+4249261313&4294967295,T=x+(w<<22&4294967295|w>>>10),w=_+(C^T&(x^C))+g[8]+1770035416&4294967295,_=T+(w<<7&4294967295|w>>>25),w=C+(x^_&(T^x))+g[9]+2336552879&4294967295,C=_+(w<<12&4294967295|w>>>20),w=x+(T^C&(_^T))+g[10]+4294925233&4294967295,x=C+(w<<17&4294967295|w>>>15),w=T+(_^x&(C^_))+g[11]+2304563134&4294967295,T=x+(w<<22&4294967295|w>>>10),w=_+(C^T&(x^C))+g[12]+1804603682&4294967295,_=T+(w<<7&4294967295|w>>>25),w=C+(x^_&(T^x))+g[13]+4254626195&4294967295,C=_+(w<<12&4294967295|w>>>20),w=x+(T^C&(_^T))+g[14]+2792965006&4294967295,x=C+(w<<17&4294967295|w>>>15),w=T+(_^x&(C^_))+g[15]+1236535329&4294967295,T=x+(w<<22&4294967295|w>>>10),w=_+(x^C&(T^x))+g[1]+4129170786&4294967295,_=T+(w<<5&4294967295|w>>>27),w=C+(T^x&(_^T))+g[6]+3225465664&4294967295,C=_+(w<<9&4294967295|w>>>23),w=x+(_^T&(C^_))+g[11]+643717713&4294967295,x=C+(w<<14&4294967295|w>>>18),w=T+(C^_&(x^C))+g[0]+3921069994&4294967295,T=x+(w<<20&4294967295|w>>>12),w=_+(x^C&(T^x))+g[5]+3593408605&4294967295,_=T+(w<<5&4294967295|w>>>27),w=C+(T^x&(_^T))+g[10]+38016083&4294967295,C=_+(w<<9&4294967295|w>>>23),w=x+(_^T&(C^_))+g[15]+3634488961&4294967295,x=C+(w<<14&4294967295|w>>>18),w=T+(C^_&(x^C))+g[4]+3889429448&4294967295,T=x+(w<<20&4294967295|w>>>12),w=_+(x^C&(T^x))+g[9]+568446438&4294967295,_=T+(w<<5&4294967295|w>>>27),w=C+(T^x&(_^T))+g[14]+3275163606&4294967295,C=_+(w<<9&4294967295|w>>>23),w=x+(_^T&(C^_))+g[3]+4107603335&4294967295,x=C+(w<<14&4294967295|w>>>18),w=T+(C^_&(x^C))+g[8]+1163531501&4294967295,T=x+(w<<20&4294967295|w>>>12),w=_+(x^C&(T^x))+g[13]+2850285829&4294967295,_=T+(w<<5&4294967295|w>>>27),w=C+(T^x&(_^T))+g[2]+4243563512&4294967295,C=_+(w<<9&4294967295|w>>>23),w=x+(_^T&(C^_))+g[7]+1735328473&4294967295,x=C+(w<<14&4294967295|w>>>18),w=T+(C^_&(x^C))+g[12]+2368359562&4294967295,T=x+(w<<20&4294967295|w>>>12),w=_+(T^x^C)+g[5]+4294588738&4294967295,_=T+(w<<4&4294967295|w>>>28),w=C+(_^T^x)+g[8]+2272392833&4294967295,C=_+(w<<11&4294967295|w>>>21),w=x+(C^_^T)+g[11]+1839030562&4294967295,x=C+(w<<16&4294967295|w>>>16),w=T+(x^C^_)+g[14]+4259657740&4294967295,T=x+(w<<23&4294967295|w>>>9),w=_+(T^x^C)+g[1]+2763975236&4294967295,_=T+(w<<4&4294967295|w>>>28),w=C+(_^T^x)+g[4]+1272893353&4294967295,C=_+(w<<11&4294967295|w>>>21),w=x+(C^_^T)+g[7]+4139469664&4294967295,x=C+(w<<16&4294967295|w>>>16),w=T+(x^C^_)+g[10]+3200236656&4294967295,T=x+(w<<23&4294967295|w>>>9),w=_+(T^x^C)+g[13]+681279174&4294967295,_=T+(w<<4&4294967295|w>>>28),w=C+(_^T^x)+g[0]+3936430074&4294967295,C=_+(w<<11&4294967295|w>>>21),w=x+(C^_^T)+g[3]+3572445317&4294967295,x=C+(w<<16&4294967295|w>>>16),w=T+(x^C^_)+g[6]+76029189&4294967295,T=x+(w<<23&4294967295|w>>>9),w=_+(T^x^C)+g[9]+3654602809&4294967295,_=T+(w<<4&4294967295|w>>>28),w=C+(_^T^x)+g[12]+3873151461&4294967295,C=_+(w<<11&4294967295|w>>>21),w=x+(C^_^T)+g[15]+530742520&4294967295,x=C+(w<<16&4294967295|w>>>16),w=T+(x^C^_)+g[2]+3299628645&4294967295,T=x+(w<<23&4294967295|w>>>9),w=_+(x^(T|~C))+g[0]+4096336452&4294967295,_=T+(w<<6&4294967295|w>>>26),w=C+(T^(_|~x))+g[7]+1126891415&4294967295,C=_+(w<<10&4294967295|w>>>22),w=x+(_^(C|~T))+g[14]+2878612391&4294967295,x=C+(w<<15&4294967295|w>>>17),w=T+(C^(x|~_))+g[5]+4237533241&4294967295,T=x+(w<<21&4294967295|w>>>11),w=_+(x^(T|~C))+g[12]+1700485571&4294967295,_=T+(w<<6&4294967295|w>>>26),w=C+(T^(_|~x))+g[3]+2399980690&4294967295,C=_+(w<<10&4294967295|w>>>22),w=x+(_^(C|~T))+g[10]+4293915773&4294967295,x=C+(w<<15&4294967295|w>>>17),w=T+(C^(x|~_))+g[1]+2240044497&4294967295,T=x+(w<<21&4294967295|w>>>11),w=_+(x^(T|~C))+g[8]+1873313359&4294967295,_=T+(w<<6&4294967295|w>>>26),w=C+(T^(_|~x))+g[15]+4264355552&4294967295,C=_+(w<<10&4294967295|w>>>22),w=x+(_^(C|~T))+g[6]+2734768916&4294967295,x=C+(w<<15&4294967295|w>>>17),w=T+(C^(x|~_))+g[13]+1309151649&4294967295,T=x+(w<<21&4294967295|w>>>11),w=_+(x^(T|~C))+g[4]+4149444226&4294967295,_=T+(w<<6&4294967295|w>>>26),w=C+(T^(_|~x))+g[11]+3174756917&4294967295,C=_+(w<<10&4294967295|w>>>22),w=x+(_^(C|~T))+g[2]+718787259&4294967295,x=C+(w<<15&4294967295|w>>>17),w=T+(C^(x|~_))+g[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(x+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+x&4294967295,E.g[3]=E.g[3]+C&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const T=_-this.blockSize,g=this.C;let x=this.h,C=0;for(;C<_;){if(x==0)for(;C<=T;)s(this,E,C),C+=this.blockSize;if(typeof E=="string"){for(;C<_;)if(g[x++]=E.charCodeAt(C++),x==this.blockSize){s(this,g),x=0;break}}else for(;C<_;)if(g[x++]=E[C++],x==this.blockSize){s(this,g),x=0;break}}this.h=x,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,T=0;T<4;++T)for(let g=0;g<32;g+=8)E[_++]=this.g[T]>>>g&255;return E};function i(E,_){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;const T=[];let g=!0;for(let x=E.length-1;x>=0;x--){const C=E[x]|0;g&&C==_||(T[x]=C,g=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return V(c(-E));const _=[];let T=1;for(let g=0;E>=T;g++)_[g]=E/T|0,T*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return V(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(_,8));let g=p;for(let C=0;C<E.length;C+=8){var x=Math.min(8,E.length-C);const w=parseInt(E.substring(C,C+x),_);x<8?(x=c(Math.pow(_,x)),g=g.j(x).add(c(w))):(g=g.j(T),g=g.add(c(w)))}return g}var p=u(0),v=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-V(this).m();let E=0,_=1;for(let T=0;T<this.g.length;T++){const g=this.i(T);E+=(g>=0?g:4294967296+g)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(b(this))return"0";if(N(this))return"-"+V(this).toString(E);const _=c(Math.pow(E,6));var T=this;let g="";for(;;){const x=P(T,_).g;T=I(T,x.j(_));let C=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=x,b(T))return C+g;for(;C.length<6;)C="0"+C;g=C+g}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function b(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=I(this,E),N(E)?-1:b(E)?0:1};function V(E){const _=E.g.length,T=[];for(let g=0;g<_;g++)T[g]=~E.g[g];return new o(T,~E.h).add(v)}t.abs=function(){return N(this)?V(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),T=[];let g=0;for(let x=0;x<=_;x++){let C=g+(this.i(x)&65535)+(E.i(x)&65535),w=(C>>>16)+(this.i(x)>>>16)+(E.i(x)>>>16);g=w>>>16,C&=65535,w&=65535,T[x]=w<<16|C}return new o(T,T[T.length-1]&-2147483648?-1:0)};function I(E,_){return E.add(V(_))}t.j=function(E){if(b(this)||b(E))return p;if(N(this))return N(E)?V(this).j(V(E)):V(V(this).j(E));if(N(E))return V(this.j(V(E)));if(this.l(k)<0&&E.l(k)<0)return c(this.m()*E.m());const _=this.g.length+E.g.length,T=[];for(var g=0;g<2*_;g++)T[g]=0;for(g=0;g<this.g.length;g++)for(let x=0;x<E.g.length;x++){const C=this.i(g)>>>16,w=this.i(g)&65535,me=E.i(x)>>>16,re=E.i(x)&65535;T[2*g+2*x]+=w*re,S(T,2*g+2*x),T[2*g+2*x+1]+=C*re,S(T,2*g+2*x+1),T[2*g+2*x+1]+=w*me,S(T,2*g+2*x+1),T[2*g+2*x+2]+=C*me,S(T,2*g+2*x+2)}for(E=0;E<_;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=_;E<2*_;E++)T[E]=0;return new o(T,0)};function S(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function A(E,_){this.g=E,this.h=_}function P(E,_){if(b(_))throw Error("division by zero");if(b(E))return new A(p,p);if(N(E))return _=P(V(E),_),new A(V(_.g),V(_.h));if(N(_))return _=P(E,V(_)),new A(V(_.g),_.h);if(E.g.length>30){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var T=v,g=_;g.l(E)<=0;)T=j(T),g=j(g);var x=$(T,1),C=$(g,1);for(g=$(g,2),T=$(T,2);!b(g);){var w=C.add(g);w.l(E)<=0&&(x=x.add(T),C=w),g=$(g,1),T=$(T,1)}return _=I(E,x.j(_)),new A(x,_)}for(x=p;E.l(_)>=0;){for(T=Math.max(1,Math.floor(E.m()/_.m())),g=Math.ceil(Math.log(T)/Math.LN2),g=g<=48?1:Math.pow(2,g-48),C=c(T),w=C.j(_);N(w)||w.l(E)>0;)T-=g,C=c(T),w=C.j(_);b(C)&&(C=v),x=x.add(C),E=I(E,w)}return new A(x,E)}t.B=function(E){return P(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let g=0;g<_;g++)T[g]=this.i(g)&E.i(g);return new o(T,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let g=0;g<_;g++)T[g]=this.i(g)|E.i(g);return new o(T,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let g=0;g<_;g++)T[g]=this.i(g)^E.i(g);return new o(T,this.h^E.h)};function j(E){const _=E.g.length+1,T=[];for(let g=0;g<_;g++)T[g]=E.i(g)<<1|E.i(g-1)>>>31;return new o(T,E.h)}function $(E,_){const T=_>>5;_%=32;const g=E.g.length-T,x=[];for(let C=0;C<g;C++)x[C]=_>0?E.i(C+T)>>>_|E.i(C+T+1)<<32-_:E.i(C+T);return new o(x,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Nw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Is=o}).apply(typeof ly<"u"?ly:typeof self<"u"?self:typeof window<"u"?window:{});var Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pw,Wo,Dw,Jl,bd,Ow,Vw,Mw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nl=="object"&&Nl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in d))break e;d=d[R]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&d.push([y,h[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,R,D){for(var B=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)B[_e-2]=arguments[_e];return h.prototype[R].apply(y,B)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const h=a.length;if(h>0){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function b(a,h){for(let y=1;y<arguments.length;y++){const R=arguments[y];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const D=R.length||0;a.length=d+D;for(let B=0;B<D;B++)a[d+B]=R[B]}else a.push(R)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function I(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class S{constructor(){this.h=this.g=null}add(h,d){const y=A.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var A=new N(()=>new P,a=>a.reset());class P{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,$=!1,E=new S,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(T)}};function T(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){V(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}$=!1}function g(){this.u=this.u,this.C=this.C}g.prototype.u=!1,g.prototype.dispose=function(){this.u||(this.u=!0,this.N())},g.prototype[Symbol.dispose]=function(){this.dispose()},g.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function me(a,h){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(me,x),me.prototype.init=function(a,h){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),Ae=0;function ot(a,h,d,y,R){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=R,this.key=++Ae,this.da=this.fa=!1}function U(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function ee(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function J(a){const h={};for(const d in a)h[d]=a[d];return h}const Oe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qe(a,h){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)a[d]=y[d];for(let D=0;D<Oe.length;D++)d=Oe[D],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function Je(a){this.src=a,this.g={},this.h=0}Je.prototype.add=function(a,h,d,y,R){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const B=et(a,h,y,R);return B>-1?(h=a[B],d||(h.fa=!1)):(h=new ot(h,this.src,D,!!y,R),h.fa=d,a.push(h)),h};function Rt(a,h){const d=h.type;if(d in a.g){var y=a.g[d],R=Array.prototype.indexOf.call(y,h,void 0),D;(D=R>=0)&&Array.prototype.splice.call(y,R,1),D&&(U(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function et(a,h,d,y){for(let R=0;R<a.length;++R){const D=a[R];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==y)return R}return-1}var ft="closure_lm_"+(Math.random()*1e6|0),In={};function or(a,h,d,y,R){if(Array.isArray(h)){for(let D=0;D<h.length;D++)or(a,h[D],d,y,R);return null}return d=kr(d),a&&a[re]?a.J(h,d,l(y)?!!y.capture:!1,R):ar(a,h,d,!1,y,R)}function ar(a,h,d,y,R,D){if(!h)throw Error("Invalid event type");const B=l(R)?!!R.capture:!!R;let _e=Kt(a);if(_e||(a[ft]=_e=new Je(a)),d=_e.add(h,d,y,B,D),d.proxy)return d;if(y=pt(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)C||(R=B),R===void 0&&(R=!1),a.addEventListener(h.toString(),y,R);else if(a.attachEvent)a.attachEvent(tt(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pt(){function a(d){return h.call(a.src,a.listener,d)}const h=sn;return a}function Wt(a,h,d,y,R){if(Array.isArray(h))for(var D=0;D<h.length;D++)Wt(a,h[D],d,y,R);else y=l(y)?!!y.capture:!!y,d=kr(d),a&&a[re]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=et(h,d,y,R),d>-1&&(U(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Kt(a))&&(h=a.g[h.toString()],a=-1,h&&(a=et(h,d,y,R)),(d=a>-1?h[a]:null)&&ce(d))}function ce(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[re])Rt(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(tt(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=Kt(h))?(Rt(d,a),d.h==0&&(d.src=null,h[ft]=null)):U(a)}}}function tt(a){return a in In?In[a]:In[a]="on"+a}function sn(a,h){if(a.da)a=!0;else{h=new me(h,this);const d=a.listener,y=a.ha||a.src;a.fa&&ce(a),a=d.call(y,h)}return a}function Kt(a){return a=a[ft],a instanceof Je?a:null}var Qt="__closure_events_fn_"+(Math.random()*1e9>>>0);function kr(a){return typeof a=="function"?a:(a[Qt]||(a[Qt]=function(h){return a.handleEvent(h)}),a[Qt])}function O(){g.call(this),this.i=new Je(this),this.M=this,this.G=null}p(O,g),O.prototype[re]=!0,O.prototype.removeEventListener=function(a,h,d,y){Wt(this,a,h,d,y)};function F(a,h){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var R=h;h=new x(y,a),qe(h,R)}R=!0;let D,B;if(d)for(B=d.length-1;B>=0;B--)D=h.g=d[B],R=Y(D,y,!0,h)&&R;if(D=h.g=a,R=Y(D,y,!0,h)&&R,R=Y(D,y,!1,h)&&R,d)for(B=0;B<d.length;B++)D=h.g=d[B],R=Y(D,y,!1,h)&&R}O.prototype.N=function(){if(O.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let y=0;y<d.length;y++)U(d[y]);delete a.g[h],a.h--}}this.G=null},O.prototype.J=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},O.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function Y(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let D=0;D<h.length;++D){const B=h[D];if(B&&!B.da&&B.capture==d){const _e=B.listener,It=B.ha||B.src;B.fa&&Rt(a.i,B),R=_e.call(It,y)!==!1&&R}}return R&&!y.defaultPrevented}function ge(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function ke(a){a.g=ge(()=>{a.g=null,a.i&&(a.i=!1,ke(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class nt extends g{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ke(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(a){g.call(this),this.h=a,this.g={}}p(Me,g);var Ce=[];function fn(a){K(a.g,function(h,d){this.g.hasOwnProperty(d)&&ce(h)},a),a.g={}}Me.prototype.N=function(){Me.Z.N.call(this),fn(this)},Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pn=o.JSON.stringify,lr=o.JSON.parse,mt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Tt(){}function Sn(){}var xn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wn(){x.call(this,"d")}p(Wn,x);function Vn(){x.call(this,"c")}p(Vn,x);var te={},le=null;function Re(){return le=le||new O}te.Ia="serverreachability";function Fe(a){x.call(this,te.Ia,a)}p(Fe,x);function ze(a){const h=Re();F(h,new Fe(h))}te.STAT_EVENT="statevent";function q(a,h){x.call(this,te.STAT_EVENT,a),this.stat=h}p(q,x);function H(a){const h=Re();F(h,new q(h,a))}te.Ja="timingevent";function X(a,h){x.call(this,te.Ja,a),this.size=h}p(X,x);function ne(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Z(){this.g=!0}Z.prototype.ua=function(){this.g=!1};function Ve(a,h,d,y,R,D){a.info(function(){if(a.g)if(D){var B="",_e=D.split("&");for(let $e=0;$e<_e.length;$e++){var It=_e[$e].split("=");if(It.length>1){const Ot=It[0];It=It[1];const cr=Ot.split("_");B=cr.length>=2&&cr[1]=="type"?B+(Ot+"="+It+"&"):B+(Ot+"=redacted&")}}}else B=null;else B=D;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+h+`
`+d+`
`+B})}function oe(a,h,d,y,R,D,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+h+`
`+d+`
`+D+" "+B})}function he(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+De(a,d)+(y?" "+y:"")})}function ye(a,h){a.info(function(){return"TIMEOUT: "+h})}Z.prototype.info=function(){};function De(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var R=y[0];if(R!="noop"&&R!="stop"&&R!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return pn(D)}catch{return h}}var Se={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ne={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ye;function gt(){}p(gt,Tt),gt.prototype.g=function(){return new XMLHttpRequest},Ye=new gt;function xe(a){return encodeURIComponent(String(a))}function jt(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function bt(a,h,d,y){this.j=a,this.i=h,this.l=d,this.S=y||1,this.V=new Me(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Mn}function Mn(){this.i=null,this.g="",this.h=!1}var Nt={},Pt={};function An(a,h,d){a.M=1,a.A=sl(ur(h)),a.u=d,a.R=!0,yt(a,null)}function yt(a,h){a.F=Date.now(),rl(a),a.B=ur(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),um(d.i,"t",y),a.C=0,d=a.j.L,a.h=new Mn,a.g=km(a.j,d?h:null,!a.u),a.P>0&&(a.O=new nt(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,y=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(Ce[0]=R.toString()),R=Ce);for(let D=0;D<R.length;D++){const B=or(d,R[D],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?J(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ze(),Ve(a.i,a.v,a.B,a.l,a.S,a.u)}bt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Yr(a)==3?h.j():this.Y(a)},bt.prototype.Y=function(a){try{if(a==this.g)e:{const _e=Yr(this.g),It=this.g.ya(),$e=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||gm(this.g)))){this.K||_e!=4||It==7||(It==8||$e<=0?ze(3):ze(2)),Nc(this);var h=this.g.ca();this.X=h;var d=Dt(this);if(this.o=h==200,oe(this.i,this.v,this.B,this.l,this.S,_e,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,R=this.g;if((y=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(y)){var D=y;break t}}D=null}if(a=D)he(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Pc(this,a);else{this.o=!1,this.m=3,H(12),$s(this),To(this);break e}}if(this.R){a=!0;let Ot;for(;!this.K&&this.C<d.length;)if(Ot=Fs(this,d),Ot==Pt){_e==4&&(this.m=4,H(14),a=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==Nt){this.m=4,H(15),he(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else he(this.i,this.l,Ot,null),Pc(this,Ot);if(nl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||d.length!=0||this.h.h||(this.m=1,H(16),a=!1),this.o=this.o&&a,!a)he(this.i,this.l,d,"[Invalid Chunked Response]"),$s(this),To(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Fc(B),B.P=!0,H(11))}}else he(this.i,this.l,d,null),Pc(this,d);_e==4&&$s(this),this.o&&!this.K&&(_e==4?Im(this.j,this):(this.o=!1,rl(this)))}else Z1(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,H(12)):(this.m=0,H(13)),$s(this),To(this)}}}catch{}finally{}};function Dt(a){if(!nl(a))return a.g.la();const h=gm(a.g);if(h==="")return"";let d="";const y=h.length,R=Yr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return $s(a),To(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<y;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(R&&D==y-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function nl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Fs(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?Pt:(d=Number(h.substring(d,y)),isNaN(d)?Nt:(y+=1,y+d>h.length?Pt:(h=h.slice(y,y+d),a.C=y+d,h)))}bt.prototype.cancel=function(){this.K=!0,$s(this)};function rl(a){a.T=Date.now()+a.H,Xp(a,a.H)}function Xp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ne(c(a.aa,a),h)}function Nc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}bt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ye(this.i,this.B),this.M!=2&&(ze(),H(17)),$s(this),this.m=2,To(this)):Xp(this,this.T-a)};function To(a){a.j.I==0||a.K||Im(a.j,a)}function $s(a){Nc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,fn(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Pc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Dc(d.h,a))){if(!a.L&&Dc(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ul(d),al(d);else break e;Uc(d),H(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ne(c(d.Va,d),6e3));tm(d.h)<=1&&d.ta&&(d.ta=void 0)}else Bs(d,11)}else if((a.L||d.g==a)&&ul(d),!w(h))for(R=d.Ba.g.parse(h),h=0;h<R.length;h++){let $e=R[h];const Ot=$e[0];if(!(Ot<=d.K))if(d.K=Ot,$e=$e[1],d.I==2)if($e[0]=="c"){d.M=$e[1],d.ba=$e[2];const cr=$e[3];cr!=null&&(d.ka=cr,d.j.info("VER="+d.ka));const Hs=$e[4];Hs!=null&&(d.za=Hs,d.j.info("SVER="+d.za));const Xr=$e[5];Xr!=null&&typeof Xr=="number"&&Xr>0&&(y=1.5*Xr,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Zr=a.g;if(Zr){const hl=Zr.g?Zr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hl){var D=y.h;D.g||hl.indexOf("spdy")==-1&&hl.indexOf("quic")==-1&&hl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Oc(D,D.h),D.h=null))}if(y.G){const $c=Zr.g?Zr.g.getResponseHeader("X-HTTP-Session-Id"):null;$c&&(y.wa=$c,Ge(y.J,y.G,$c))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var B=a;if(y.na=Am(y,y.L?y.ba:null,y.W),B.L){nm(y.h,B);var _e=B,It=y.O;It&&(_e.H=It),_e.D&&(Nc(_e),rl(_e)),y.g=B}else Em(y);d.i.length>0&&ll(d)}else $e[0]!="stop"&&$e[0]!="close"||Bs(d,7);else d.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?Bs(d,7):jc(d):$e[0]!="noop"&&d.l&&d.l.qa($e),d.A=0)}}ze(4)}catch{}}var F1=class{constructor(a,h){this.g=a,this.map=h}};function Zp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function em(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tm(a){return a.h?1:a.g?a.g.size:0}function Dc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Oc(a,h){a.g?a.g.add(h):a.h=h}function nm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Zp.prototype.cancel=function(){if(this.i=rm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return k(a.i)}var sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $1(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let R,D=null;y>=0?(R=a[d].substring(0,y),D=a[d].substring(y+1)):R=a[d],h(R,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Qr?(this.l=a.l,Io(this,a.j),this.o=a.o,this.g=a.g,So(this,a.u),this.h=a.h,Vc(this,cm(a.i)),this.m=a.m):a&&(h=String(a).match(sm))?(this.l=!1,Io(this,h[1]||"",!0),this.o=xo(h[2]||""),this.g=xo(h[3]||"",!0),So(this,h[4]),this.h=xo(h[5]||"",!0),Vc(this,h[6]||"",!0),this.m=xo(h[7]||"")):(this.l=!1,this.i=new ko(null,this.l))}Qr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ao(h,im,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ao(h,im,!0),"@"),a.push(xe(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ao(d,d.charAt(0)=="/"?H1:B1,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ao(d,G1)),a.join("")},Qr.prototype.resolve=function(a){const h=ur(this);let d=!!a.j;d?Io(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var y=a.h;if(d)So(h,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var R=h.h.lastIndexOf("/");R!=-1&&(y=h.h.slice(0,R+1)+y)}if(R=y,R==".."||R==".")y="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){y=R.lastIndexOf("/",0)==0,R=R.split("/");const D=[];for(let B=0;B<R.length;){const _e=R[B++];_e=="."?y&&B==R.length&&D.push(""):_e==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),y&&B==R.length&&D.push("")):(D.push(_e),y=!0)}y=D.join("/")}else y=R}return d?h.h=y:d=a.i.toString()!=="",d?Vc(h,cm(a.i)):d=!!a.m,d&&(h.m=a.m),h};function ur(a){return new Qr(a)}function Io(a,h,d){a.j=d?xo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function So(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Vc(a,h,d){h instanceof ko?(a.i=h,W1(a.i,a.l)):(d||(h=Ao(h,q1)),a.i=new ko(h,a.l))}function Ge(a,h,d){a.i.set(h,d)}function sl(a){return Ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function xo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ao(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,z1),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function z1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var im=/[#\/\?@]/g,B1=/[#\?:]/g,H1=/[#\?]/g,q1=/[#\?@]/g,G1=/#/g;function ko(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function zs(a){a.g||(a.g=new Map,a.h=0,a.i&&$1(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ko.prototype,t.add=function(a,h){zs(this),this.i=null,a=Ti(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function om(a,h){zs(a),h=Ti(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function am(a,h){return zs(a),h=Ti(a,h),a.g.has(h)}t.forEach=function(a,h){zs(this),this.g.forEach(function(d,y){d.forEach(function(R){a.call(h,R,y,this)},this)},this)};function lm(a,h){zs(a);let d=[];if(typeof h=="string")am(a,h)&&(d=d.concat(a.g.get(Ti(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return zs(this),this.i=null,a=Ti(this,a),am(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=lm(this,a),a.length>0?String(a[0]):h):h};function um(a,h,d){om(a,h),d.length>0&&(a.i=null,a.g.set(Ti(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var d=h[y];const R=xe(d);d=lm(this,d);for(let D=0;D<d.length;D++){let B=R;d[D]!==""&&(B+="="+xe(d[D])),a.push(B)}}return this.i=a.join("&")};function cm(a){const h=new ko;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ti(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function W1(a,h){h&&!a.j&&(zs(a),a.i=null,a.g.forEach(function(d,y){const R=y.toLowerCase();y!=R&&(om(this,y),um(this,R,d))},a)),a.j=h}function K1(a,h){const d=new Z;if(o.Image){const y=new Image;y.onload=f(Jr,d,"TestLoadImage: loaded",!0,h,y),y.onerror=f(Jr,d,"TestLoadImage: error",!1,h,y),y.onabort=f(Jr,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=f(Jr,d,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Q1(a,h){const d=new Z,y=new AbortController,R=setTimeout(()=>{y.abort(),Jr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(R),D.ok?Jr(d,"TestPingServer: ok",!0,h):Jr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),Jr(d,"TestPingServer: error",!1,h)})}function Jr(a,h,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function J1(){this.g=new mt}function Mc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Mc,Tt),Mc.prototype.g=function(){return new il(this.i,this.h)};function il(a,h){O.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(il,O),t=il.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ro(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ro(this)),this.g&&(this.readyState=3,Ro(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Co(this):Ro(this),this.readyState==3&&hm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Co(this))},t.Na=function(a){this.g&&(this.response=a,Co(this))},t.ga=function(){this.g&&Co(this)};function Co(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ro(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ro(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dm(a){let h="";return K(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function Lc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=dm(d),typeof a=="string"?d!=null&&xe(d):Ge(a,h,d))}function at(a){O.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(at,O);var Y1=/^https?$/i,X1=["POST","PUT"];t=at.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ye.g(),this.g.onreadystatechange=v(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){fm(this,D);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())d.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(X1,h,void 0)>=0)||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of d)this.g.setRequestHeader(D,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){fm(this,D)}};function fm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,pm(a),ol(a)}function pm(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,F(this,"complete"),F(this,"abort"),ol(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ol(this,!0)),at.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?mm(this):this.Xa())},t.Xa=function(){mm(this)};function mm(a){if(a.h&&typeof i<"u"){if(a.v&&Yr(a)==4)setTimeout(a.Ca.bind(a),0);else if(F(a,"readystatechange"),Yr(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=D===0){let B=String(a.D).match(sm)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!Y1.test(B?B.toLowerCase():"")}d=y}if(d)F(a,"complete"),F(a,"success");else{a.o=6;try{var R=Yr(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",pm(a)}}finally{ol(a)}}}}function ol(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||F(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Yr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Yr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),lr(h)}};function gm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Z1(a){const h={};a=(a.g&&Yr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var d=jt(a[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[R]||[];h[R]=D,D.push(d)}ee(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function bo(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function ym(a){this.za=0,this.i=[],this.j=new Z,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=bo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=bo("baseRetryDelayMs",5e3,a),this.Za=bo("retryDelaySeedMs",1e4,a),this.Ta=bo("forwardChannelMaxRetries",2,a),this.va=bo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Zp(a&&a.concurrentRequestLimit),this.Ba=new J1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ym.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,y){H(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=Am(this,null,this.W),ll(this)};function jc(a){if(_m(a),a.I==3){var h=a.V++,d=ur(a.J);if(Ge(d,"SID",a.M),Ge(d,"RID",h),Ge(d,"TYPE","terminate"),No(a,d),h=new bt(a,a.j,h),h.M=2,h.A=sl(ur(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=km(h.j,null),h.g.ea(h.A)),h.F=Date.now(),rl(h)}xm(a)}function al(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function _m(a){al(a),a.v&&(o.clearTimeout(a.v),a.v=null),ul(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ll(a){if(!em(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),$||(j(),$=!0),E.add(h,a),a.D=0}}function eT(a,h){return tm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ne(c(a.Ea,a,h),Sm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new bt(this,this.j,a);let D=this.o;if(this.U&&(D?(D=J(D),qe(D,this.U)):D=this.U),this.u!==null||this.R||(R.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=wm(this,R,h),d=ur(this.J),Ge(d,"RID",a),Ge(d,"CVER",22),this.G&&Ge(d,"X-HTTP-Session-Id",this.G),No(this,d),D&&(this.R?h="headers="+xe(dm(D))+"&"+h:this.u&&Lc(d,this.u,D)),Oc(this.h,R),this.Ra&&Ge(d,"TYPE","init"),this.S?(Ge(d,"$req",h),Ge(d,"SID","null"),R.U=!0,An(R,d,null)):An(R,d,h),this.I=2}}else this.I==3&&(a?vm(this,a):this.i.length==0||em(this.h)||vm(this))};function vm(a,h){var d;h?d=h.l:d=a.V++;const y=ur(a.J);Ge(y,"SID",a.M),Ge(y,"RID",d),Ge(y,"AID",a.K),No(a,y),a.u&&a.o&&Lc(y,a.u,a.o),d=new bt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=wm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Oc(a.h,d),An(d,y,h)}function No(a,h){a.H&&K(a.H,function(d,y){Ge(h,y,d)}),a.l&&K({},function(d,y){Ge(h,y,d)})}function wm(a,h,d){d=Math.min(a.i.length,d);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var R=a.i;let _e=-1;for(;;){const It=["count="+d];_e==-1?d>0?(_e=R[0].g,It.push("ofs="+_e)):_e=0:It.push("ofs="+_e);let $e=!0;for(let Ot=0;Ot<d;Ot++){var D=R[Ot].g;const cr=R[Ot].map;if(D-=_e,D<0)_e=Math.max(0,R[Ot].g-100),$e=!1;else try{D="req"+D+"_"||"";try{var B=cr instanceof Map?cr:Object.entries(cr);for(const[Hs,Xr]of B){let Zr=Xr;l(Xr)&&(Zr=pn(Xr)),It.push(D+Hs+"="+encodeURIComponent(Zr))}}catch(Hs){throw It.push(D+"type="+encodeURIComponent("_badmap")),Hs}}catch{y&&y(cr)}}if($e){B=It.join("&");break e}}B=void 0}return a=a.i.splice(0,d),h.G=a,B}function Em(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),$||(j(),$=!0),E.add(h,a),a.A=0}}function Uc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ne(c(a.Da,a),Sm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Tm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ne(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,H(10),al(this),Tm(this))};function Fc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Tm(a){a.g=new bt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=ur(a.na);Ge(h,"RID","rpc"),Ge(h,"SID",a.M),Ge(h,"AID",a.K),Ge(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ge(h,"TO",a.ia),Ge(h,"TYPE","xmlhttp"),No(a,h),a.u&&a.o&&Lc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=sl(ur(h)),d.u=null,d.R=!0,yt(d,a)}t.Va=function(){this.C!=null&&(this.C=null,al(this),Uc(this),H(19))};function ul(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Im(a,h){var d=null;if(a.g==h){ul(a),Fc(a),a.g=null;var y=2}else if(Dc(a.h,h))d=h.G,nm(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var R=a.D;y=Re(),F(y,new X(y,d)),ll(a)}else Em(a);else if(R=h.m,R==3||R==0&&h.X>0||!(y==1&&eT(a,h)||y==2&&Uc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),R){case 1:Bs(a,5);break;case 4:Bs(a,10);break;case 3:Bs(a,6);break;default:Bs(a,2)}}}function Sm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Bs(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),y=a.Ua;const R=!y;y=new Qr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Io(y,"https"),sl(y),R?K1(y.toString(),d):Q1(y.toString(),d)}else H(2);a.I=0,a.l&&a.l.pa(h),xm(a),_m(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),H(2)):(this.j.info("Failed to ping google.com"),H(1))};function xm(a){if(a.I=0,a.ja=[],a.l){const h=rm(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ja,h),b(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Am(a,h,d){var y=d instanceof Qr?ur(d):new Qr(d);if(y.g!="")h&&(y.g=h+"."+y.g),So(y,y.u);else{var R=o.location;y=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const D=new Qr(null);y&&Io(D,y),h&&(D.g=h),R&&So(D,R),d&&(D.h=d),y=D}return d=a.G,h=a.wa,d&&h&&Ge(y,d,h),Ge(y,"VER",a.ka),No(a,y),y}function km(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new at(new Mc({ab:d})):new at(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cm(){}t=Cm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function cl(){}cl.prototype.g=function(a,h){return new kn(a,h)};function kn(a,h){O.call(this),this.g=new ym(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!w(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ii(this)}p(kn,O),kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kn.prototype.close=function(){jc(this.g)},kn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=pn(a),a=d);h.i.push(new F1(h.Ya++,a)),h.I==3&&ll(h)},kn.prototype.N=function(){this.g.l=null,delete this.j,jc(this.g),delete this.g,kn.Z.N.call(this)};function Rm(a){Wn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Rm,Wn);function bm(){Vn.call(this),this.status=1}p(bm,Vn);function Ii(a){this.g=a}p(Ii,Cm),Ii.prototype.ra=function(){F(this.g,"a")},Ii.prototype.qa=function(a){F(this.g,new Rm(a))},Ii.prototype.pa=function(a){F(this.g,new bm)},Ii.prototype.oa=function(){F(this.g,"b")},cl.prototype.createWebChannel=cl.prototype.g,kn.prototype.send=kn.prototype.o,kn.prototype.open=kn.prototype.m,kn.prototype.close=kn.prototype.close,Mw=function(){return new cl},Vw=function(){return Re()},Ow=te,bd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Se.NO_ERROR=0,Se.TIMEOUT=8,Se.HTTP_ERROR=6,Jl=Se,Ne.COMPLETE="complete",Dw=Ne,Sn.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",O.prototype.listen=O.prototype.J,Wo=Sn,at.prototype.listenOnce=at.prototype.K,at.prototype.getLastError=at.prototype.Ha,at.prototype.getLastErrorCode=at.prototype.ya,at.prototype.getStatus=at.prototype.ca,at.prototype.getResponseJson=at.prototype.La,at.prototype.getResponseText=at.prototype.la,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Fa,Pw=at}).apply(typeof Nl<"u"?Nl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go="12.13.0";function sR(t){go=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const hi=new Jf("@firebase/firestore");function xi(){return hi.logLevel}function G(t,...e){if(hi.logLevel<=Ie.DEBUG){const n=e.map(op);hi.debug(`Firestore (${go}): ${t}`,...n)}}function qr(t,...e){if(hi.logLevel<=Ie.ERROR){const n=e.map(op);hi.error(`Firestore (${go}): ${t}`,...n)}}function di(t,...e){if(hi.logLevel<=Ie.WARN){const n=e.map(op);hi.warn(`Firestore (${go}): ${t}`,...n)}}function op(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Lw(t,r,n)}function Lw(t,e,n){let r=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw qr(r),new Error(r)}function Le(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Lw(e,s,r)}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Ar{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Zt.UNAUTHENTICATED))}shutdown(){}}class oR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aR{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ss,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ss)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string",31837,{l:r}),new jw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string",2055,{h:e}),new Zt(e)}}class lR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class uR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Le(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new uy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new uy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Nd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Eh(s)===Eh(i)?we(s,i):Eh(s)?1:-1}return we(t.length,e.length)}const dR=55296,fR=57343;function Eh(t){const e=t.charCodeAt(0);return e>=dR&&e<=fR}function ao(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="__name__";class fr{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=fr.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=fr.isNumericId(e),s=fr.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?fr.extractNumericId(e).compare(fr.extractNumericId(n)):Nd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Is.fromString(e.substring(4,e.length-2))}}class Be extends fr{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const pR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends fr{construct(e,n,r){return new Bt(e,n,r)}static isValidIdentifier(e){return pR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cy}static keyField(){return new Bt([cy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(n)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Be.fromString(e))}static fromName(e){return new se(Be.fromString(e).popFirst(5))}static empty(){return new se(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mR(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hy(t){if(!se.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dy(t){if(se.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function Ra(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mc(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Et(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ga(t,e){if(!Fw(t))throw new W(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=-62135596800,py=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*py);return new Ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fy)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/py}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ga(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:Et("string",Ke._jsonSchemaVersion),seconds:Et("number"),nanoseconds:Et("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new Ke(0,0))}static max(){return new de(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ba=-1;function gR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Rs(s,se.empty(),e)}function yR(t){return new Rs(t.readTime,t.key,ba)}class Rs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rs(de.min(),se.empty(),ba)}static max(){return new Rs(de.max(),se.empty(),ba)}}function _R(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function yo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==vR)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ER(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _o(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}gc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=-1;function yc(t){return t==null}function Du(t){return t===0&&1/t==-1/0}function TR(t){return typeof t=="number"&&Number.isInteger(t)&&!Du(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="";function IR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=my(e)),e=SR(t.get(n),e);return my(e)}function SR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case $w:n+="";break;default:n+=i}}return n}function my(t){return t+$w+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||zt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pl(this.root,e,this.comparator,!0)}}class Pl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??zt.RED,this.left=s??zt.EMPTY,this.right=i??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new zt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return zt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new zt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yy(this.data.getIterator())}getIteratorFrom(e){return new yy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class yy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new Xn([])}unionWith(e){let n=new kt(Bt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bw("Invalid base64 string: "+i):i}}(e);return new Gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const xR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(t){if(Le(!!t,39018),typeof t=="string"){let e=0;const n=xR.exec(t);if(Le(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ut(t.seconds),nanos:ut(t.nanos)}}function ut(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?Gt.fromBase64String(t):Gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="server_timestamp",qw="__type__",Gw="__previous_value__",Ww="__local_write_time__";function up(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[qw])==null?void 0:r.stringValue)===Hw}function _c(t){const e=t.mapValue.fields[Gw];return up(e)?_c(e):e}function Na(t){const e=bs(t.mapValue.fields[Ww].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,s,i,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const Ou="(default)";class Pa{constructor(e,n){this.projectId=e,this.database=n||Ou}static empty(){return new Pa("","")}get isDefaultDatabase(){return this.database===Ou}isEqual(e){return e instanceof Pa&&e.projectId===this.projectId&&e.database===this.database}}function kR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pa(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="__type__",CR="__max__",Dl={mapValue:{}},Qw="__vector__",Vu="value";function Ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?up(t)?4:bR(t)?9007199254740991:RR(t)?10:11:ae(28295,{value:t})}function Ir(t,e){if(t===e)return!0;const n=Ps(t);if(n!==Ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Na(t).isEqual(Na(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=bs(s.timestampValue),l=bs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ns(s.bytesValue).isEqual(Ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ut(s.geoPointValue.latitude)===ut(i.geoPointValue.latitude)&&ut(s.geoPointValue.longitude)===ut(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ut(s.integerValue)===ut(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ut(s.doubleValue),l=ut(i.doubleValue);return o===l?Du(o)===Du(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(gy(o)!==gy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Ir(o[u],l[u])))return!1;return!0}(t,e);default:return ae(52216,{left:t})}}function Da(t,e){return(t.values||[]).find(n=>Ir(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=Ps(t),r=Ps(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=ut(i.integerValue||i.doubleValue),u=ut(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return _y(t.timestampValue,e.timestampValue);case 4:return _y(Na(t),Na(e));case 5:return Nd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ns(i),u=Ns(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=we(l[c],u[c]);if(f!==0)return f}return we(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=we(ut(i.latitude),ut(o.latitude));return l!==0?l:we(ut(i.longitude),ut(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var v,k,b,N;const l=i.fields||{},u=o.fields||{},c=(v=l[Vu])==null?void 0:v.arrayValue,f=(k=u[Vu])==null?void 0:k.arrayValue,p=we(((b=c==null?void 0:c.values)==null?void 0:b.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:vy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Dl.mapValue&&o===Dl.mapValue)return 0;if(i===Dl.mapValue)return 1;if(o===Dl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const v=Nd(u[p],f[p]);if(v!==0)return v;const k=lo(l[u[p]],c[f[p]]);if(k!==0)return k}return we(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ae(23264,{he:n})}}function _y(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=bs(t),r=bs(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function vy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=lo(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function uo(t){return Pd(t)}function Pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Pd(n.fields[o])}`;return s+"}"}(t.mapValue):ae(61005,{value:t})}function Yl(t){switch(Ps(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_c(t);return e?16+Yl(e):16;case 5:return 2*t.stringValue.length;case 6:return Ns(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Yl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return _i(r.fields,(i,o)=>{s+=i.length+Yl(o)}),s}(t.mapValue);default:throw ae(13486,{value:t})}}function wy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dd(t){return!!t&&"integerValue"in t}function cp(t){return!!t&&"arrayValue"in t}function Ey(t){return!!t&&"nullValue"in t}function Ty(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xl(t){return!!t&&"mapValue"in t}function RR(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Kw])==null?void 0:r.stringValue)===Qw}function oa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return _i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(t.arrayValue.values[n]);return e}return{...t}}function bR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.value=e}static empty(){return new Fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(n)}setAll(e){let n=Bt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=oa(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_i(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Fn(oa(this.value))}}function Jw(t){const e=[];return _i(t.fields,(n,r)=>{const s=new Bt([n]);if(Xl(r)){const i=Jw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tn(e,0,de.min(),de.min(),de.min(),Fn.empty(),0)}static newFoundDocument(e,n,r,s){return new tn(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new tn(e,2,n,de.min(),de.min(),Fn.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,de.min(),de.min(),Fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mu{constructor(e,n){this.position=e,this.inclusive=n}}function Iy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=lo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ir(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function NR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yw{}class wt extends Yw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DR(e,n,r):n==="array-contains"?new MR(e,r):n==="in"?new LR(e,r):n==="not-in"?new jR(e,r):n==="array-contains-any"?new UR(e,r):new wt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OR(e,r):new VR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(lo(n,this.value)):n!==null&&Ps(this.value)===Ps(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends Yw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ir(e,n)}matches(e){return Xw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xw(t){return t.op==="and"}function Zw(t){return PR(t)&&Xw(t)}function PR(t){for(const e of t.filters)if(e instanceof ir)return!1;return!0}function Od(t){if(t instanceof wt)return t.field.canonicalString()+t.op.toString()+uo(t.value);if(Zw(t))return t.filters.map(e=>Od(e)).join(",");{const e=t.filters.map(n=>Od(n)).join(",");return`${t.op}(${e})`}}function eE(t,e){return t instanceof wt?function(r,s){return s instanceof wt&&r.op===s.op&&r.field.isEqual(s.field)&&Ir(r.value,s.value)}(t,e):t instanceof ir?function(r,s){return s instanceof ir&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&eE(o,s.filters[l]),!0):!1}(t,e):void ae(19439)}function tE(t){return t instanceof wt?function(n){return`${n.field.canonicalString()} ${n.op} ${uo(n.value)}`}(t):t instanceof ir?function(n){return n.op.toString()+" {"+n.getFilters().map(tE).join(" ,")+"}"}(t):"Filter"}class DR extends wt{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class OR extends wt{constructor(e,n){super(e,"in",n),this.keys=nE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VR extends wt{constructor(e,n){super(e,"not-in",n),this.keys=nE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class MR extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cp(n)&&Da(n.arrayValue,this.value)}}class LR extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Da(this.value.arrayValue,n)}}class jR extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Da(this.value.arrayValue,n)}}class UR extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Da(this.value.arrayValue,r))}}/**
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
 */class FR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function xy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new FR(t,e,n,r,s,i,o)}function hp(t){const e=pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Od(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),e.Te=n}return e.Te}function dp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sy(t.startAt,e.startAt)&&Sy(t.endAt,e.endAt)}function Vd(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function $R(t,e,n,r,s,i,o,l){return new vo(t,e,n,r,s,i,o,l)}function rE(t){return new vo(t)}function Ay(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zR(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function sE(t){return t.collectionGroup!==null}function aa(t){const e=pe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new kt(Bt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Oa(i,r))}),n.has(Bt.keyField().canonicalString())||e.Ie.push(new Oa(Bt.keyField(),r))}return e.Ie}function vr(t){const e=pe(t);return e.Ee||(e.Ee=BR(e,aa(t))),e.Ee}function BR(t,e){if(t.limitType==="F")return xy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oa(s.field,i)});const n=t.endAt?new Mu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mu(t.startAt.position,t.startAt.inclusive):null;return xy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Md(t,e){const n=t.filters.concat([e]);return new vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function HR(t,e){const n=t.explicitOrderBy.concat([e]);return new vo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Lu(t,e,n){return new vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return dp(vr(t),vr(e))&&t.limitType===e.limitType}function iE(t){return`${hp(vr(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>tE(s)).join(", ")}]`),yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>uo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>uo(s)).join(",")),`Target(${r})`}(vr(t))}; limitType=${t.limitType})`}function wc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of aa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Iy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,aa(r),s)||r.endAt&&!function(o,l,u){const c=Iy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,aa(r),s))}(t,e)}function qR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oE(t){return(e,n)=>{let r=!1;for(const s of aa(t)){const i=GR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GR(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?lo(u,c):ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return zw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=new Ze(se.comparator);function Gr(){return WR}const aE=new Ze(se.comparator);function Ko(...t){let e=aE;for(const n of t)e=e.insert(n.key,n);return e}function lE(t){let e=aE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ys(){return la()}function uE(){return la()}function la(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const KR=new Ze(se.comparator),QR=new kt(se.comparator);function Ee(...t){let e=QR;for(const n of t)e=e.add(n);return e}const JR=new kt(we);function YR(){return JR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Du(e)?"-0":e}}function cE(t){return{integerValue:""+t}}function XR(t,e){return TR(e)?cE(e):fp(t,e)}/**
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
 */class Ec{constructor(){this._=void 0}}function ZR(t,e,n){return t instanceof Va?function(s,i){const o={fields:{[qw]:{stringValue:Hw},[Ww]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&up(i)&&(i=_c(i)),i&&(o.fields[Gw]=i),{mapValue:o}}(n,e):t instanceof Ma?dE(t,e):t instanceof La?fE(t,e):function(s,i){const o=hE(s,i),l=ky(o)+ky(s.Ae);return Dd(o)&&Dd(s.Ae)?cE(l):fp(s.serializer,l)}(t,e)}function eb(t,e,n){return t instanceof Ma?dE(t,e):t instanceof La?fE(t,e):n}function hE(t,e){return t instanceof ju?function(r){return Dd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Va extends Ec{}class Ma extends Ec{constructor(e){super(),this.elements=e}}function dE(t,e){const n=pE(e);for(const r of t.elements)n.some(s=>Ir(s,r))||n.push(r);return{arrayValue:{values:n}}}class La extends Ec{constructor(e){super(),this.elements=e}}function fE(t,e){let n=pE(e);for(const r of t.elements)n=n.filter(s=>!Ir(s,r));return{arrayValue:{values:n}}}class ju extends Ec{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ky(t){return ut(t.integerValue||t.doubleValue)}function pE(t){return cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.field=e,this.transform=n}}function nb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ma&&s instanceof Ma||r instanceof La&&s instanceof La?ao(r.elements,s.elements,Ir):r instanceof ju&&s instanceof ju?Ir(r.Ae,s.Ae):r instanceof Va&&s instanceof Va}(t.transform,e.transform)}class rb{constructor(e,n){this.version=e,this.transformResults=n}}class Ur{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ur}static exists(e){return new Ur(void 0,e)}static updateTime(e){return new Ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tc{}function mE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yE(t.key,Ur.none()):new Wa(t.key,t.data,Ur.none());{const n=t.data,r=Fn.empty();let s=new kt(Bt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wi(t.key,r,new Xn(s.toArray()),Ur.none())}}function sb(t,e,n){t instanceof Wa?function(s,i,o){const l=s.value.clone(),u=Ry(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof wi?function(s,i,o){if(!Zl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ry(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(gE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ua(t,e,n,r){return t instanceof Wa?function(i,o,l,u){if(!Zl(i.precondition,o))return l;const c=i.value.clone(),f=by(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof wi?function(i,o,l,u){if(!Zl(i.precondition,o))return l;const c=by(i.fieldTransforms,u,o),f=o.data;return f.setAll(gE(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Zl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ib(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hE(r.transform,s||null);i!=null&&(n===null&&(n=Fn.empty()),n.set(r.field,i))}return n||null}function Cy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ao(r,s,(i,o)=>nb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wa extends Tc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wi extends Tc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ry(t,e,n){const r=new Map;Le(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eb(o,l,n[s]))}return r}function by(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZR(i,o,e))}return r}class yE extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ob extends Tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=mE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(n,r)=>Cy(n,r))&&ao(this.baseMutations,e.baseMutations,(n,r)=>Cy(n,r))}}class pp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return KR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new pp(e,n,r,s)}}/**
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
 */var _t,be;function cb(t){switch(t){case M.OK:return ae(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function _E(t){if(t===void 0)return qr("GRPC error has no .code"),M.UNKNOWN;switch(t){case _t.OK:return M.OK;case _t.CANCELLED:return M.CANCELLED;case _t.UNKNOWN:return M.UNKNOWN;case _t.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case _t.INTERNAL:return M.INTERNAL;case _t.UNAVAILABLE:return M.UNAVAILABLE;case _t.UNAUTHENTICATED:return M.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case _t.NOT_FOUND:return M.NOT_FOUND;case _t.ALREADY_EXISTS:return M.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return M.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case _t.ABORTED:return M.ABORTED;case _t.OUT_OF_RANGE:return M.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return M.UNIMPLEMENTED;case _t.DATA_LOSS:return M.DATA_LOSS;default:return ae(39323,{code:t})}}(be=_t||(_t={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const db=new Is([4294967295,4294967295],0);function Ny(t){const e=hb().encode(t),n=new Nw;return n.update(e),new Uint8Array(n.digest())}function Py(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Is([n,r],0),new Is([s,i],0)]}class mp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qo(`Invalid padding: ${n}`);if(r<0)throw new Qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Is.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Is.fromNumber(r)));return s.compare(db)===1&&(s=new Is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ny(e),[r,s]=Py(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ny(e),[r,s]=Py(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ka(de.min(),s,new Ze(we),Gr(),Ee())}}class Qa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qa(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class vE{constructor(e,n){this.targetId=e,this.Ce=n}}class wE{constructor(e,n,r=Gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Dy{constructor(){this.ve=0,this.Fe=Oy(),this.Me=Gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),n=Ee(),r=Ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}}),new Qa(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Oy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Gr(),this.Je=Ol(),this.He=Ol(),this.Ze=new Ze(we)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ae(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Vd(i))if(r===0){const o=new se(i.path);this.et(n,o,tn.newNoDocument(o,de.min()))}else Le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ns(r).toUint8Array()}catch(u){if(u instanceof Bw)return di("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new mp(o,s,i)}catch(u){return di(u instanceof Qo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Vd(l.target)){const u=new se(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,tn.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=Ee();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ka(e,n,this.Ze,this.je,r);return this.je=Gr(),this.Je=Ol(),this.He=Ol(),this.Ze=new Ze(we),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Dy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new kt(we),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new kt(we),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Dy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ol(){return new Ze(se.comparator)}function Oy(){return new Ze(se.comparator)}const pb={asc:"ASCENDING",desc:"DESCENDING"},mb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gb={and:"AND",or:"OR"};class yb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ld(t,e){return t.useProto3Json||yc(e)?e:{value:e}}function Uu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _b(t,e){return Uu(t,e.toTimestamp())}function wr(t){return Le(!!t,49232),de.fromTimestamp(function(n){const r=bs(n);return new Ke(r.seconds,r.nanos)}(t))}function gp(t,e){return jd(t,e).canonicalString()}function jd(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function TE(t){const e=Be.fromString(t);return Le(kE(e),10190,{key:e.toString()}),e}function Ud(t,e){return gp(t.databaseId,e.path)}function Th(t,e){const n=TE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(SE(n))}function IE(t,e){return gp(t.databaseId,e)}function vb(t){const e=TE(t);return e.length===4?Be.emptyPath():SE(e)}function Fd(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function SE(t){return Le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Vy(t,e,n){return{name:Ud(t,e),fields:n.value.mapValue.fields}}function wb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(Le(f===void 0||typeof f=="string",58123),Gt.fromBase64String(f||"")):(Le(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Gt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:_E(c.code);return new W(f,c.message||"")}(o);n=new wE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Th(t,r.document.name),i=wr(r.document.updateTime),o=r.document.createTime?wr(r.document.createTime):de.min(),l=new Fn({mapValue:{fields:r.document.fields}}),u=tn.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new eu(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Th(t,r.document),i=r.readTime?wr(r.readTime):de.min(),o=tn.newNoDocument(s,i),l=r.removedTargetIds||[];n=new eu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Th(t,r.document),i=r.removedTargetIds||[];n=new eu([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ub(s,i),l=r.targetId;n=new vE(l,o)}}return n}function Eb(t,e){let n;if(e instanceof Wa)n={update:Vy(t,e.key,e.value)};else if(e instanceof yE)n={delete:Ud(t,e.key)};else if(e instanceof wi)n={update:Vy(t,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof ob))return ae(16599,{dt:e.type});n={verify:Ud(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ma)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof La)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ju)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ae(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_b(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)}(t,e.precondition)),n}function Tb(t,e){return t&&t.length>0?(Le(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?wr(s.updateTime):wr(i);return o.isEqual(de.min())&&(o=wr(i)),new rb(o,s.transformResults||[])}(n,e))):[]}function Ib(t,e){return{documents:[IE(t,e.path)]}}function Sb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=IE(t,s);const i=function(c){if(c.length!==0)return AE(ir.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(v){return{field:ki(v.field),direction:kb(v.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ld(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function xb(t){let e=vb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Le(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const v=xE(p);return v instanceof ir&&Zw(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(v=>function(b){return new Oa(Ci(b.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(p){let v;return v=typeof p=="object"?p.value:p,yc(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(p){const v=!!p.before,k=p.values||[];return new Mu(k,v)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const v=!p.before,k=p.values||[];return new Mu(k,v)}(n.endAt)),$R(e,s,o,i,l,"F",u,c)}function Ab(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ci(n.unaryFilter.field);return wt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ci(n.unaryFilter.field);return wt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return wt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(t):t.fieldFilter!==void 0?function(n){return wt.create(Ci(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ir.create(n.compositeFilter.filters.map(r=>xE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(n.compositeFilter.op))}(t):ae(30097,{filter:t})}function kb(t){return pb[t]}function Cb(t){return mb[t]}function Rb(t){return gb[t]}function ki(t){return{fieldPath:t.canonicalString()}}function Ci(t){return Bt.fromServerFormat(t.fieldPath)}function AE(t){return t instanceof wt?function(n){if(n.op==="=="){if(Ty(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NAN"}};if(Ey(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ty(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NAN"}};if(Ey(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(n.field),op:Cb(n.op),value:n.value}}}(t):t instanceof ir?function(n){const r=n.getFilters().map(s=>AE(s));return r.length===1?r[0]:{compositeFilter:{op:Rb(n.op),filters:r}}}(t):ae(54877,{filter:t})}function bb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function CE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=Gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.yt=e}}function Pb(t){const e=xb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lu(e,e.limit,"L"):e}/**
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
 */class Db{constructor(){this.bn=new Ob}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Rs.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Rs.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Ob{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new kt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new kt(Be.comparator)).toArray()}}/**
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
 */const My={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},RE=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(RE,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ds(0)}static ar(){return new Ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="LruGarbageCollector",Vb=1048576;function jy([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class Mb{constructor(e){this.Pr=e,this.buffer=new kt(jy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();jy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Lb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){G(Ly,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_o(n)?G(Ly,"Ignoring IndexedDB error during garbage collection: ",n):await yo(n)}await this.Ar(3e5)})}}class jb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(gc.ce);const r=new Mb(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(My)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),My):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),xi()<=Ie.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
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
 */class Fb{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ua(r.mutation,s,Xn.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ko();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Gr();const o=la(),l=function(){return la()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof wi)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ua(f.mutation,c,f.mutation.getFieldMask(),Ke.now())):o.set(c.key,Xn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new $b(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=la();let s=new Ze((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Xn.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(s.get(l.batchId)||Ee()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=uE();f.forEach(v=>{if(!i.has(v)){const k=mE(n.get(v),r.get(v));k!==null&&p.set(v,k),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return zR(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Ys());let l=ba,u=i;return o.next(c=>L.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,Ee())).next(f=>({batchId:l,changes:lE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Ko();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ko();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const c=function(p,v){return new vo(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,tn.newInvalidDocument(f)))});let l=Ko();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&ua(f.mutation,c,Xn.empty(),Ke.now()),wc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wr(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Pb(s.bundledQuery),readTime:wr(s.readTime)}}(n)),L.resolve()}}/**
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
 */class Hb{constructor(){this.overlays=new Ze(se.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ys();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Ys(),i=n.length+1,o=new se(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ze((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=Ys(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Ys(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return L.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lb(n,r));let i=this.Lr.get(n);i===void 0&&(i=Ee(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class qb{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.kr=new kt(Vt.Kr),this.qr=new kt(Vt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Vt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Vt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new se(new Be([])),r=new Vt(n,e),s=new Vt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new se(new Be([])),r=new Vt(n,e),s=new Vt(n,e+1);let i=Ee();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Vt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Vt{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return se.comparator(e.key,n.key)||we(e.Jr,n.Jr)}static Ur(e,n){return we(e.Jr,n.Jr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new kt(Vt.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ab(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Hr=this.Hr.add(new Vt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?lp:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Vt(n,0),s=new Vt(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const l=this.Zr(o.Jr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(we);return n.forEach(s=>{const i=new Vt(s,0),o=new Vt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Vt(new se(i),0);let l=new kt(we);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Le(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,s=>{const i=new Vt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Vt(n,0),s=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.ti=e,this.docs=function(){return new Ze(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let r=Gr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tn.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Gr();const o=n.path,l=new se(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_R(yR(f),r)<=0||(s.has(f.key)||wc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kb(this)}getSize(e){return L.resolve(this.size)}}class Kb extends Fb{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.persistence=e,this.ri=new vi(n=>hp(n),dp),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.ii=0,this.si=new yp,this.targetCount=0,this.oi=Ds._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n){this._i={},this.overlays={},this.ai=new gc(0),this.ui=!1,this.ui=!0,this.ci=new qb,this.referenceDelegate=e(this),this.li=new Qb(this),this.indexManager=new Db,this.remoteDocumentCache=function(s){return new Wb(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Nb(n),this.Pi=new Bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Gb(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new Jb(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Jb extends wR{constructor(e){super(),this.currentSequenceNumber=e}}class _p{constructor(e){this.persistence=e,this.Ri=new yp,this.Ai=null}static Vi(e){return new _p(e)}get di(){if(this.Ai)return this.Ai;throw ae(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=se.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Fu{constructor(e,n){this.persistence=e,this.fi=new vi(r=>IR(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ub(this,n)}static Vi(e,n){return new Fu(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Yl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vp(e,n.fromCache,r,s)}}/**
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
 */class Xb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _A()?8:ER(rn())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Yb;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(xi()<=Ie.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(xi()<=Ie.DEBUG&&G("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(xi()<=Ie.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vr(n))):L.resolve())}gs(e,n){if(Ay(n))return L.resolve(null);let r=vr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lu(n,null,"F"),r=vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,Lu(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Ay(n)||s.isEqual(de.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?L.resolve(null):(xi()<=Ie.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ai(n)),this.Ds(e,o,n,gR(s,ba)).next(l=>l))})}Ss(e,n){let r=new kt(oE(e));return n.forEach((s,i)=>{wc(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return xi()<=Ie.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.fs.getDocumentsMatchingQuery(e,n,Rs.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="LocalStore",Zb=3e8;class eN{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ze(we),this.Fs=new vi(i=>hp(i),dp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function tN(t,e,n,r){return new eN(t,e,n,r)}async function NE(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=Ee();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function nN(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,v=p.keys();let k=L.resolve();return v.forEach(b=>{k=k.next(()=>f.getEntry(u,b)).next(N=>{const V=c.docVersions.get(b);Le(V!==null,48541),N.version.compareTo(V)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function PE(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function rN(t,e){const n=pe(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const v=s.get(p);if(!v)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,p)));let k=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(Gt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(p,k),function(N,V,I){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Zb?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(v,k,f)&&l.push(n.li.updateTargetData(i,k))});let u=Gr(),c=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(sN(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(de.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function sN(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Gr();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(de.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):G(wp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function iN(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oN(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function $d(t,e,n){const r=pe(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_o(o))throw o;G(wp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Uy(t,e,n){const r=pe(t);let s=de.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=pe(u),v=p.Fs.get(f);return v!==void 0?L.resolve(p.vs.get(v)):p.li.getTargetData(c,f)}(r,o,vr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ee())).next(l=>(aN(r,qR(e),l),{documents:l,ks:i})))}function aN(t,e,n){let r=t.Ms.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Fy{constructor(){this.activeTargetIds=YR()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lN{constructor(){this.vo=new Fy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Fy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const $y="ConnectivityMonitor";class zy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){G($y,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){G($y,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vl=null;function zd(){return Vl===null?Vl=function(){return 268435456+Math.round(2147483648*Math.random())}():Vl++,"0x"+Vl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="RestConnection",cN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hN{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Ou?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=zd(),l=this.Qo(e,n.toUriEncodedString());G(Ih,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=gi(c);return this.zo(e,l,u,r,f).then(p=>(G(Ih,`Received RPC '${e}' ${o}: `,p),p),p=>{throw di(Ih,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=cN[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xt="WebChannelConnection",$o=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Wi extends hN{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Wi.c_){const e=Vw();$o(e,Ow.STAT_EVENT,n=>{n.stat===bd.PROXY?G(Xt,"STAT_EVENT: detected buffering proxy"):n.stat===bd.NOPROXY&&G(Xt,"STAT_EVENT: detected no buffering proxy")}),Wi.c_=!0}}zo(e,n,r,s,i){const o=zd();return new Promise((l,u)=>{const c=new Pw;c.setWithCredentials(!0),c.listenOnce(Dw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Jl.NO_ERROR:const p=c.getResponseJson();G(Xt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Jl.TIMEOUT:G(Xt,`RPC '${e}' ${o} timed out`),u(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Jl.HTTP_ERROR:const v=c.getStatus();if(G(Xt,`RPC '${e}' ${o} failed with status:`,v,"response text:",c.getResponseText()),v>0){let k=c.getResponseJson();Array.isArray(k)&&(k=k[0]);const b=k==null?void 0:k.error;if(b&&b.status&&b.message){const N=function(I){const S=I.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(b.status);u(new W(N,b.message))}else u(new W(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(M.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{G(Xt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);G(Xt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=zd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");G(Xt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let p=!1,v=!1;const k=new dN({Jo:b=>{v?G(Xt,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(p||(G(Xt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),G(Xt,`RPC '${e}' stream ${s} sending:`,b),f.send(b))},Ho:()=>f.close()});return $o(f,Wo.EventType.OPEN,()=>{v||(G(Xt,`RPC '${e}' stream ${s} transport opened.`),k.i_())}),$o(f,Wo.EventType.CLOSE,()=>{v||(v=!0,G(Xt,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(f))}),$o(f,Wo.EventType.ERROR,b=>{v||(v=!0,di(Xt,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),k.o_(new W(M.UNAVAILABLE,"The operation could not be completed")))}),$o(f,Wo.EventType.MESSAGE,b=>{var N;if(!v){const V=b.data[0];Le(!!V,16349);const I=V,S=(I==null?void 0:I.error)||((N=I[0])==null?void 0:N.error);if(S){G(Xt,`RPC '${e}' stream ${s} received error:`,S);const A=S.status;let P=function(E){const _=_t[E];if(_!==void 0)return _E(_)}(A),j=S.message;A==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&di(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),P===void 0&&(P=M.INTERNAL,j="Unknown error status: "+A+" with message "+S.message),v=!0,k.o_(new W(P,j)),f.close()}else G(Xt,`RPC '${e}' stream ${s} received:`,V),k.__(V)}}),Wi.u_(),setTimeout(()=>{k.s_()},0),k}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Mw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){return new Wi(t)}function Sh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return new yb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wi.c_=!1;class DE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="PersistentStream";class OE{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new DE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(qr(n.toString()),qr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(By,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(G(By,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pN extends OE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=wb(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?wr(o.readTime):de.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Fd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Vd(u)?{documents:Ib(i,u)}:{query:Sb(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=EE(i,o.resumeToken);const c=Ld(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Uu(i,o.snapshotVersion.toTimestamp());const c=Ld(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Ab(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Fd(this.serializer),n.removeTarget=e,this.K_(n)}}class mN extends OE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Tb(e.writeResults,e.commitTime),r=wr(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Fd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Eb(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{}class yN extends gN{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,jd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(M.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,jd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _N(t,e,n,r){return new yN(t,e,n,r)}class vN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qr(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="RemoteStore";class wN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ds(1e3),this.Va=new Ds(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{Ei(this)&&(G(Sr,"Restarting streams for network reachability change."),await async function(u){const c=pe(u);c.da.add(4),await Ja(c),c.ga.set("Unknown"),c.da.delete(4),await Sc(c)}(this))})}),this.ga=new vN(r,s)}}async function Sc(t){if(Ei(t))for(const e of t.ma)await e(!0)}async function Ja(t){for(const e of t.ma)await e(!1)}function Bd(t,e){return t.Ea.get(e)||void 0}function VE(t,e){const n=pe(t),r=Bd(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const s=function(l,u){const c=Bd(l,u);c!==void 0&&l.Ra.delete(c);const f=function(v,k){return k%2!=0?v.Va.next():v.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);G(Sr,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Vr(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(s,i),Sp(n)?Ip(n):wo(n).O_()&&Tp(n,i)}function Ep(t,e){const n=pe(t),r=wo(n),s=Bd(n,e);G(Sr,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),n.Ia.delete(s),n.Ea.delete(e),n.Ra.delete(s),r.O_()&&ME(n,s),n.Ia.size===0&&(r.O_()?r.L_():Ei(n)&&n.ga.set("Unknown"))}function Tp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void G(Sr,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}wo(t).Z_(e)}function ME(t,e){t.pa.$e(e),wo(t).X_(e)}function Ip(t){t.pa=new fb({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):Ee()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),wo(t).start(),t.ga.ua()}function Sp(t){return Ei(t)&&!wo(t).x_()&&t.Ia.size>0}function Ei(t){return pe(t).da.size===0}function LE(t){t.pa=void 0}async function EN(t){t.ga.set("Online")}async function TN(t){t.Ia.forEach((e,n)=>{Tp(t,e)})}async function IN(t,e){LE(t),Sp(t)?(t.ga.ha(e),Ip(t)):t.ga.set("Unknown")}async function SN(t,e,n){if(t.ga.set("Online"),e instanceof wE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.Ia.has(l)){const u=s.Ra.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.Ea.delete(u),s.Ra.delete(l)),s.Ia.delete(l)}s.pa.removeTarget(l)}}(t,e)}catch(r){G(Sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $u(t,r)}else if(e instanceof eu?t.pa.Xe(e):e instanceof vE?t.pa.st(e):t.pa.tt(e),!n.isEqual(de.min()))try{const r=await PE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const p=i.Ia.get(f);p&&i.Ia.set(f,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const p=i.Ia.get(c);if(!p)return;i.Ia.set(c,p.withResumeToken(Gt.EMPTY_BYTE_STRING,p.snapshotVersion)),ME(i,c);const v=new Vr(p.target,c,f,p.sequenceNumber);Tp(i,v)});const u=function(f,p){const v=new Map;p.targetChanges.forEach((b,N)=>{const V=f.Ra.get(N);V!==void 0&&v.set(V,b)});let k=new Ze(we);return p.targetMismatches.forEach((b,N)=>{const V=f.Ra.get(b);V!==void 0&&(k=k.insert(V,N))}),new Ka(p.snapshotVersion,v,k,p.documentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){G(Sr,"Failed to raise snapshot:",r),await $u(t,r)}}async function $u(t,e,n){if(!_o(e))throw e;t.da.add(1),await Ja(t),t.ga.set("Offline"),n||(n=()=>PE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(Sr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Sc(t)})}function jE(t,e){return e().catch(n=>$u(t,n,e))}async function xc(t){const e=pe(t),n=Os(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lp;for(;xN(e);)try{const s=await iN(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,AN(e,s)}catch(s){await $u(e,s)}UE(e)&&FE(e)}function xN(t){return Ei(t)&&t.Ta.length<10}function AN(t,e){t.Ta.push(e);const n=Os(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function UE(t){return Ei(t)&&!Os(t).x_()&&t.Ta.length>0}function FE(t){Os(t).start()}async function kN(t){Os(t).ra()}async function CN(t){const e=Os(t);for(const n of t.Ta)e.ea(n.mutations)}async function RN(t,e,n){const r=t.Ta.shift(),s=pp.from(r,e,n);await jE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xc(t)}async function bN(t,e){e&&Os(t).Y_&&await async function(r,s){if(function(o){return cb(o)&&o!==M.ABORTED}(s.code)){const i=r.Ta.shift();Os(r).B_(),await jE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xc(r)}}(t,e),UE(t)&&FE(t)}async function Hy(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),G(Sr,"RemoteStore received new credentials");const r=Ei(n);n.da.add(3),await Ja(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Sc(n)}async function NN(t,e){const n=pe(t);e?(n.da.delete(2),await Sc(n)):e||(n.da.add(2),await Ja(n),n.ga.set("Unknown"))}function wo(t){return t.ya||(t.ya=function(n,r,s){const i=pe(n);return i.sa(),new pN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:EN.bind(null,t),Yo:TN.bind(null,t),t_:IN.bind(null,t),H_:SN.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Sp(t)?Ip(t):t.ga.set("Unknown")):(await t.ya.stop(),LE(t))})),t.ya}function Os(t){return t.wa||(t.wa=function(n,r,s){const i=pe(n);return i.sa(),new mN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kN.bind(null,t),t_:bN.bind(null,t),ta:CN.bind(null,t),na:RN.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await xc(t)):(await t.wa.stop(),t.Ta.length>0&&(G(Sr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new xp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ap(t,e){if(qr("AsyncQueue",`${e}: ${t}`),_o(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{static emptySet(e){return new Ki(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ko(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.Sa=new Ze(se.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):ae(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class co{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new co(e,n,Ki.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class DN{constructor(){this.queries=Gy(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const s=pe(n),i=s.queries;s.queries=Gy(),i.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function Gy(){return new vi(t=>iE(t),vc)}async function ON(t,e){const n=pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new PN,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await n.onListen(s,!0);break;case 1:i.Ca=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Ap(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.va.push(e),e.Oa(n.onlineState),i.Ca&&e.Na(i.Ca)&&kp(n)}async function VN(t,e){const n=pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MN(t,e){const n=pe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.va)l.Na(s)&&(r=!0);o.Ca=s}}r&&kp(n)}function LN(t,e,n){const r=pe(t),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(n);r.queries.delete(e)}function kp(t){t.xa.forEach(e=>{e.next()})}var Hd,Wy;(Wy=Hd||(Hd={})).Ba="default",Wy.Cache="cache";class jN{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Hd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.key=e}}class zE{constructor(e){this.key=e}}class UN{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=Ee(),this.mutatedKeys=Ee(),this.iu=oE(e),this.su=new Ki(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new qy,s=n?n.su:this.su;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const v=s.get(f),k=wc(this.query,p)?p:null,b=!!v&&this.mutatedKeys.has(v.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let V=!1;v&&k?v.data.isEqual(k.data)?b!==N&&(r.track({type:3,doc:k}),V=!0):this.uu(v,k)||(r.track({type:2,doc:k}),V=!0,(u&&this.iu(k,u)>0||c&&this.iu(k,c)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),V=!0):v&&!k&&(r.track({type:1,doc:v}),V=!0,(u||c)&&(l=!0)),V&&(k?(o=o.add(k),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:i}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(k,b){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Vt:V})}};return N(k)-N(b)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),s=s??!1;const l=n&&!s?this.lu():[],u=this.ru.size===0&&this.current&&!s?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new co(this.query,e.su,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new qy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=Ee(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new zE(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new $E(r))}),n}Tu(e){this.tu=e.ks,this.ru=Ee();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return co.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Cp="SyncEngine";class FN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $N{constructor(e){this.key=e,this.Eu=!1}}class zN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new vi(l=>iE(l),vc),this.Vu=new Map,this.du=new Set,this.mu=new Ze(se.comparator),this.fu=new Map,this.gu=new yp,this.pu={},this.yu=new Map,this.wu=Ds.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function BN(t,e,n=!0){const r=KE(t);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await BE(r,e,n,!0),s}async function HN(t,e){const n=KE(t);await BE(n,e,!0,!1)}async function BE(t,e,n,r){const s=await oN(t.localStore,vr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await qN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&VE(t.remoteStore,s),l}async function qN(t,e,n,r,s){t.bu=(p,v,k)=>async function(N,V,I,S){let A=V.view._u(I);A.bs&&(A=await Uy(N.localStore,V.query,!1).then(({documents:E})=>V.view._u(E,A)));const P=S&&S.targetChanges.get(V.targetId),j=S&&S.targetMismatches.get(V.targetId)!=null,$=V.view.applyChanges(A,N.isPrimaryClient,P,j);return Qy(N,V.targetId,$.hu),$.snapshot}(t,p,v,k);const i=await Uy(t.localStore,e,!0),o=new UN(e,i.ks),l=o._u(i.documents),u=Qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Qy(t,n,c.hu);const f=new FN(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function GN(t,e,n){const r=pe(t),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter(o=>!vc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $d(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ep(r.remoteStore,s.targetId),qd(r,s.targetId)}).catch(yo)):(qd(r,s.targetId),await $d(r.localStore,s.targetId,!0))}async function WN(t,e){const n=pe(t),r=n.Au.get(e),s=n.Vu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ep(n.remoteStore,r.targetId))}async function KN(t,e,n){const r=tP(t);try{const s=await function(o,l){const u=pe(o),c=Ke.now(),f=l.reduce((k,b)=>k.add(b.key),Ee());let p,v;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let b=Gr(),N=Ee();return u.xs.getEntries(k,f).next(V=>{b=V,b.forEach((I,S)=>{S.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,b)).next(V=>{p=V;const I=[];for(const S of l){const A=ib(S,p.get(S.key).overlayedDocument);A!=null&&I.push(new wi(S.key,A,Jw(A.value.mapValue),Ur.exists(!0)))}return u.mutationQueue.addMutationBatch(k,c,I,l)}).next(V=>{v=V;const I=V.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(k,V.batchId,I)})}).then(()=>({batchId:v.batchId,changes:lE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new Ze(we)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ya(r,s.changes),await xc(r.remoteStore)}catch(s){const i=Ap(s,"Failed to persist write");n.reject(i)}}async function HE(t,e){const n=pe(t);try{const r=await rN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.fu.get(i);o&&(Le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?Le(o.Eu,14607):s.removedDocuments.size>0&&(Le(o.Eu,42227),o.Eu=!1))}),await Ya(n,r,e)}catch(r){await yo(r)}}function Ky(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Au.forEach((i,o)=>{const l=o.view.Oa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=pe(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const v of p.va)v.Oa(l)&&(c=!0)}),c&&kp(u)}(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QN(t,e,n){const r=pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new Ze(se.comparator);o=o.insert(i,tn.newNoDocument(i,de.min()));const l=Ee().add(i),u=new Ka(de.min(),new Map,new Ze(we),o,l);await HE(r,u),r.mu=r.mu.remove(i),r.fu.delete(e),Rp(r)}else await $d(r.localStore,e,!1).then(()=>qd(r,e,n)).catch(yo)}async function JN(t,e){const n=pe(t),r=e.batch.batchId;try{const s=await nN(n.localStore,e);GE(n,r,null),qE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ya(n,s)}catch(s){await yo(s)}}async function YN(t,e,n){const r=pe(t);try{const s=await function(o,l){const u=pe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Le(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);GE(r,e,n),qE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ya(r,s)}catch(s){await yo(s)}}function qE(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function GE(t,e,n){const r=pe(t);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function qd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||WE(t,r)})}function WE(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(Ep(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Rp(t))}function Qy(t,e,n){for(const r of n)r instanceof $E?(t.gu.addReference(r.key,e),XN(t,r)):r instanceof zE?(G(Cp,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||WE(t,r.key)):ae(19791,{Cu:r})}function XN(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(G(Cp,"New document in limbo: "+n),t.du.add(r),Rp(t))}function Rp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new se(Be.fromString(e)),r=t.wu.next();t.fu.set(r,new $N(n)),t.mu=t.mu.insert(n,r),VE(t.remoteStore,new Vr(vr(rE(n.path)),r,"TargetPurposeLimboResolution",gc.ce))}}async function Ya(t,e,n){const r=pe(t),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){s.push(c);const p=vp.Es(u.targetId,c);i.push(p)}}))}),await Promise.all(o),r.Ru.H_(s),await async function(u,c){const f=pe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,v=>L.forEach(v.Ts,k=>f.persistence.referenceDelegate.addReference(p,v.targetId,k)).next(()=>L.forEach(v.Is,k=>f.persistence.referenceDelegate.removeReference(p,v.targetId,k)))))}catch(p){if(!_o(p))throw p;G(wp,"Failed to update sequence numbers: "+p)}for(const p of c){const v=p.targetId;if(!p.fromCache){const k=f.vs.get(v),b=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(b);f.vs=f.vs.insert(v,N)}}}(r.localStore,i))}async function ZN(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){G(Cp,"User change. New user:",e.toKey());const r=await NE(n.localStore,e);n.currentUser=e,function(i,o){i.yu.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ya(n,r.Ns)}}function eP(t,e){const n=pe(t),r=n.fu.get(e);if(r&&r.Eu)return Ee().add(r.key);{let s=Ee();const i=n.Vu.get(e);if(!i)return s;for(const o of i){const l=n.Au.get(o);s=s.unionWith(l.view.ou)}return s}}function KE(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QN.bind(null,e),e.Ru.H_=MN.bind(null,e.eventManager),e.Ru.Du=LN.bind(null,e.eventManager),e}function tP(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YN.bind(null,e),e}class zu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return tN(this.persistence,new Xb,e.initialUser,this.serializer)}xu(e){return new bE(_p.Vi,this.serializer)}Mu(e){return new lN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zu.provider={build:()=>new zu};class nP extends zu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){Le(this.persistence.referenceDelegate instanceof Fu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Lb(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new bE(r=>Fu.Vi(r,n),this.serializer)}}class Gd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ky(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZN.bind(null,this.syncEngine),await NN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DN}()}createDatastore(e){const n=Ic(e.databaseInfo.databaseId),r=fN(e.databaseInfo);return _N(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new wN(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ky(this.syncEngine,n,0),function(){return zy.v()?new zy:new uN}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const p=new zN(s,i,o,l,u,c);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=pe(s);G(Sr,"RemoteStore shutting down."),i.da.add(5),await Ja(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Gd.provider={build:()=>new Gd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):qr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="FirestoreClient";class sP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Zt.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(Vs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(Vs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ap(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xh(t,e){t.asyncQueue.verifyOperationInProgress(),G(Vs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await NE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iP(t);G(Vs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Hy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Hy(e.remoteStore,s)),t._onlineComponents=e}async function iP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(Vs,"Using user provided OfflineComponentProvider");try{await xh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;di("Error using user provided cache. Falling back to memory cache: "+n),await xh(t,new zu)}}else G(Vs,"Using default OfflineComponentProvider"),await xh(t,new nP(void 0));return t._offlineComponents}async function QE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(Vs,"Using user provided OnlineComponentProvider"),await Jy(t,t._uninitializedComponentsProvider._online)):(G(Vs,"Using default OnlineComponentProvider"),await Jy(t,new Gd))),t._onlineComponents}function oP(t){return QE(t).then(e=>e.syncEngine)}async function aP(t){const e=await QE(t),n=e.eventManager;return n.onListen=BN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WN.bind(null,e.syncEngine),n}function lP(t,e,n={}){const r=new Ss;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new rP({next:v=>{f.Ku(),o.enqueueAndForget(()=>VN(i,p)),v.fromCache&&u.source==="server"?c.reject(new W(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(v)},error:v=>c.reject(v)}),p=new jN(l,f,{includeMetadataChanges:!0,Wa:!0});return ON(i,p)}(await aP(t),t.asyncQueue,e,n,r)),r.promise}function uP(t,e){const n=new Ss;return t.asyncQueue.enqueueAndForget(async()=>KN(await oP(t),e,n)),n.promise}/**
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
 */function JE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="ComponentProvider",Yy=new Map;function hP(t,e,n,r,s){return new AR(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,JE(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firestore.googleapis.com",Xy=!0;class Zy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=YE,this.ssl=Xy}else this.host=e.host,this.ssl=e.ssl??Xy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=RE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Vb)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ac{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iR;switch(r.type){case"firstParty":return new uR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Yy.get(n);r&&(G(cP,"Removing Datastore"),Yy.delete(n),r.terminate())}(this),Promise.resolve()}}function dP(t,e,n,r={}){var c;t=Ra(t,Ac);const s=gi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&Qf(`https://${l}`),i.host!==YE&&i.host!==l&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!li(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Zt.MOCK_USER;else{f=cw(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Zt(v)}t._authCredentials=new oR(new jw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Us(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ga(n,At._jsonSchema))return new At(e,r||null,new se(Be.fromString(n.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:Et("string",At._jsonSchemaVersion),referencePath:Et("string")};class xs extends Us{constructor(e,n,r){super(e,n,rE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new se(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function e_(t,e,...n){if(t=Ct(t),Uw("collection","path",e),t instanceof Ac){const r=Be.fromString(e,...n);return dy(r),new xs(t,null,r)}{if(!(t instanceof At||t instanceof xs))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return dy(r),new xs(t.firestore,null,r)}}function fP(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=ap.newId()),Uw("doc","path",e),t instanceof Ac){const r=Be.fromString(e,...n);return hy(r),new At(t,null,new se(r))}{if(!(t instanceof At||t instanceof xs))throw new W(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return hy(r),new At(t.firestore,t instanceof xs?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="AsyncQueue";class n_{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new DE(this,"async_queue_retry"),this.lc=()=>{const r=Sh();r&&G(t_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Sh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Ss;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!_o(e))throw e;G(t_,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,qr("INTERNAL UNHANDLED ERROR: ",r_(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const s=xp.createAndSchedule(this,e,n,r,i=>this.Ec(i));return this.oc.push(s),s}Pc(){this._c&&ae(47125,{Rc:r_(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function r_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class bp extends Ac{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new n_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new n_(e),this._firestoreClient=void 0,await e}}}function pP(t,e){const n=typeof t=="object"?t:Xf(),r=typeof t=="string"?t:Ou,s=pc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aw("firestore");i&&dP(s,...i)}return s}function XE(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mP(t),t._firestoreClient}function mP(t){var r,s,i,o;const e=t._freezeSettings(),n=hP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new sP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(Gt.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $n(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ga(e,$n._jsonSchema))return $n.fromBase64String(e.bytes)}}$n._jsonSchemaVersion="firestore/bytes/1.0",$n._jsonSchema={type:Et("string",$n._jsonSchemaVersion),bytes:Et("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Er._jsonSchemaVersion}}static fromJSON(e){if(Ga(e,Er._jsonSchema))return new Er(e.latitude,e.longitude)}}Er._jsonSchemaVersion="firestore/geoPoint/1.0",Er._jsonSchema={type:Et("string",Er._jsonSchemaVersion),latitude:Et("number"),longitude:Et("number")};/**
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
 */class nr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ga(e,nr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new nr(e.vectorValues);throw new W(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nr._jsonSchemaVersion="firestore/vectorValue/1.0",nr._jsonSchema={type:Et("string",nr._jsonSchemaVersion),vectorValues:Et("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=/^__.*__$/;class yP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wa(e,this.data,n,this.fieldTransforms)}}function e1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{dataSource:t})}}class Pp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Pp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Bu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(e1(this.dataSource)&&gP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class _P{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ic(e)}V(e,n,r,s=!1){return new Pp({dataSource:e,methodName:n,targetDoc:r,path:Bt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function t1(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new _P(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vP(t,e,n,r,s,i={}){const o=t.V(i.merge||i.mergeFields?2:0,e,n,s);s1("Data must be an object, but it was:",o,r);const l=n1(r,o);let u,c;if(i.merge)u=new Xn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const v=Xa(e,p,n);if(!o.contains(v))throw new W(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);IP(f,v)||f.push(v)}u=new Xn(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new yP(new Fn(l),u,c)}class Dp extends Np{_toFieldTransform(e){return new tb(e.path,new Va)}isEqual(e){return e instanceof Dp}}function wP(t,e,n,r=!1){return Op(n,t.V(r?4:3,e))}function Op(t,e){if(r1(t=Ct(t)))return s1("Unsupported field value:",e,t),n1(t,e);if(t instanceof Np)return function(r,s){if(!e1(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Op(l,s.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Uu(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uu(s.serializer,i)}}if(r instanceof Er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $n)return{bytesValue:EE(s.serializer,r._byteString)};if(r instanceof At){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nr)return function(o,l){const u=o instanceof nr?o.toArray():o;return{mapValue:{fields:{[Kw]:{stringValue:Qw},[Vu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return fp(l.serializer,f)})}}}}}}(r,s);if(CE(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${mc(r)}`)}(t,e)}function n1(t,e){const n={};return zw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(t,(r,s)=>{const i=Op(s,e.yc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function r1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Er||t instanceof $n||t instanceof At||t instanceof Np||t instanceof nr||CE(t))}function s1(t,e,n){if(!r1(n)||!Fw(n)){const r=mc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Xa(t,e,n){if((e=Ct(e))instanceof ZE)return e._internalPath;if(typeof e=="string")return TP(t,e);throw Bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const EP=new RegExp("[~\\*/\\[\\]]");function TP(t,e,n){if(e.search(EP)>=0)throw Bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ZE(...e.split("."))._internalPath}catch{throw Bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function IP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{convertValue(e,n="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _i(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Vu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ut(o.doubleValue));return new nr(n)}convertGeoPoint(e){return new Er(ut(e.latitude),ut(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_c(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Na(e));default:return null}}convertTimestamp(e){const n=bs(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Le(kE(r),9688,{name:e});const s=new Pa(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||qr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class xP extends SP{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function AP(){return new Dp("serverTimestamp")}const s_="@firebase/firestore",i_="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Xa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kP extends i1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vp{}class Mp extends Vp{}function o_(t,e,...n){let r=[];e instanceof Vp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Lp).length,l=i.filter(u=>u instanceof kc).length;if(o>1||o>0&&l>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class kc extends Mp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new kc(e,n,r)}_apply(e){const n=this._parse(e);return o1(e._query,n),new Us(e.firestore,e.converter,Md(e._query,n))}_parse(e){const n=t1(e.firestore);return function(i,o,l,u,c,f,p){let v;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){h_(p,f);const b=[];for(const N of p)b.push(c_(u,i,N));v={arrayValue:{values:b}}}else v=c_(u,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||h_(p,f),v=wP(l,o,p,f==="in"||f==="not-in");return wt.create(c,f,v)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function a_(t,e,n){const r=e,s=Xa("where",t);return kc._create(s,r,n)}class Lp extends Vp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ir.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)o1(o,u),o=Md(o,u)}(e._query,n),new Us(e.firestore,e.converter,Md(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jp extends Mp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oa(i,o)}(e._query,this._field,this._direction);return new Us(e.firestore,e.converter,HR(e._query,n))}}function l_(t,e="asc"){const n=e,r=Xa("orderBy",t);return jp._create(r,n)}class Up extends Mp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Up(e,n,r)}_apply(e){return new Us(e.firestore,e.converter,Lu(e._query,this._limit,this._limitType))}}function u_(t){return Up._create("limit",t,"F")}function c_(t,e,n){if(typeof(n=Ct(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sE(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!se.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wy(t,new se(r))}if(n instanceof At)return wy(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(n)}.`)}function h_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function o1(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function RP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ml{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qi extends i1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qi._jsonSchema={type:Et("string",Qi._jsonSchemaVersion),bundleSource:Et("string","DocumentSnapshot"),bundleName:Et("string"),bundle:Et("string")};class tu extends Qi{data(e={}){return super.data(e)}}class Ji{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ml(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tu(this._firestore,this._userDataWriter,r.key,r,new Ml(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new tu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ml(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new tu(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ml(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:bP(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ji._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ap.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}/**
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
 */Ji._jsonSchemaVersion="firestore/querySnapshot/1.0",Ji._jsonSchema={type:Et("string",Ji._jsonSchemaVersion),bundleSource:Et("string","QuerySnapshot"),bundleName:Et("string"),bundle:Et("string")};function NP(t){t=Ra(t,Us);const e=Ra(t.firestore,bp),n=XE(e),r=new xP(e);return CP(t._query),lP(n,t._query).then(s=>new Ji(e,r,t,s))}function PP(t,e,n){t=Ra(t,At);const r=Ra(t.firestore,bp),s=RP(t.converter,e,n),i=t1(r);return DP(r,[vP(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ur.none())])}function DP(t,e){const n=XE(t);return uP(n,e)}(function(e,n=!0){sR(yi),ui(new Cs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new bp(new aR(r.getProvider("auth-internal")),new cR(o,r.getProvider("app-check-internal")),kR(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),_r(s_,i_,e),_r(s_,i_,"esm2020")})();const OP={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},Fp=fw(OP),$p=eR(Fp),Wd=pP(Fp),Kd="shorts_brain_snapshots";function VP(t){const e=t?new Date(t):new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);const n=new Date(e.getFullYear(),0,4),r=1+Math.round(((e.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7);return`${e.getFullYear()}-W${r.toString().padStart(2,"0")}`}async function MP(t){const e=ip($p,t),n=await XC(e);return new TextDecoder().decode(n)}async function LP({weekId:t,reportingDate:e,rawFiles:n}){const r=`shorts-brain/weekly/${t}`,s=[];if(n)for(const[o,l]of Object.entries(n)){if(!l)continue;const u=ip($p,`${r}/${o}.csv`);await ZC(u,l,{contentType:"text/csv"}),s.push(o)}const i={weekId:t,reportingDate:e||null,savedAt:AP(),rawFileKeys:s};return await PP(fP(Wd,Kd,t),i,{merge:!0}),{weekId:t,savedAt:new Date().toISOString(),fileCount:s.length}}async function d_(t){let e=o_(e_(Wd,Kd),l_("weekId","desc"),u_(52));t&&(e=o_(e_(Wd,Kd),l_("weekId","desc"),a_("weekId",">=",`${t}-W01`),a_("weekId","<=",`${t}-W53`),u_(52)));const n=await NP(e),r=[];return n.forEach(s=>{const i=s.data();r.push({weekId:i.weekId,reportingDate:i.reportingDate,savedAt:i.savedAt,rawFileKeys:i.rawFileKeys||[]})}),{snapshots:r,count:r.length}}async function jP(t){const e=`shorts-brain/weekly/${t}`,n=ip($p,e);let r=[];try{const i=await ay(n);if(r=i.items,i.prefixes.length>0)for(const o of i.prefixes){const l=await ay(o);r=r.concat(l.items)}}catch(i){return console.error("Failed to list snapshot files:",i),null}const s={};return await Promise.all(r.map(async i=>{if(i.name.endsWith(".csv"))try{const o=await MP(i.fullPath),l=i.name.replace(".csv","");s[l]=o}catch(o){console.error(`Failed to download ${i.fullPath}:`,o)}})),s}const a1="https://drive.google.com/corp/drive/folders/18GCtCrz-Bs1YdXKtQs-tjugb6xudULaX?resourcekey=0-gMJCegK7SZkhgJeT_YTjSw",f_=["ivanho.wz@gmail.com","ivho@google.com","kanishak@google.com"],as=["DAU-SCT","DAC-SCT","GenAI DAU-SCT","Impressions","CTR"],Rr=["India","Indonesia","Japan","South Korea","AUNZ"],Hu={India:"IN",Indonesia:"ID",Japan:"JP","South Korea":"KR",AUNZ:"AUNZ"},Qd={IN:"India",ID:"Indonesia",JP:"Japan",KR:"South Korea",AUNZ:"AUNZ"},nu=["SSC","Shelf","UTS","MVR","UTS SFV","JP Proactive Container"],Ft=["female","male","total"],UP={female:"FEMALE",male:"MALE",total:"GenPop"},Rn=["18-24","25-34","18-34","35+","total"],FP={"18-24":"18-24","25-34":"25-34","18-34":"18-34","35+":"35-44",total:"GenPop"},$P={APAC:.15,INDIA:.16,INDONESIA:.29,JAPAN:1.2,"SOUTH KOREA":1.08,AUNZ:1.56,IN:.16,ID:.29,JP:1.2,KR:1.08},zP=[{id:"Upload",label:"Data Ingestion",icon:Xv},{id:"OKR",label:"Shorts OKR Performance",icon:tw},{id:"Global Hub",label:"Global Holdback",icon:ew},{id:"Market Hub",label:"Campaign Holdback",icon:px}],zo=[{id:"AlwaysOn",label:"Always-On",icon:Td},{id:"ScaledCreation",label:"Scaled Creation",icon:Bx},{id:"Trends",label:"Trends",icon:nw},{id:"CultMo",label:"CultMo",icon:nx},{id:"ArtMo",label:"ArtMo",icon:xx},{id:"GenAI Hub",label:"GenAI Hub",icon:Yx}],Ue=t=>(t||"").toString().replace(/['"]/g,"").replace(/\u00A0/g," ").trim(),$t=t=>{try{return Ue(t).toUpperCase().replace(/[^\p{L}\p{N}]/gu,"")}catch{return Ue(t).toUpperCase().replace(/[\s\-_&!?,.()'"\uFF01]/g,"")}},an=(t,e)=>$t(t)===$t(e),BP=t=>$t(t).replace(/INDIA$|INDONESIA$|JAPAN$|SOUTHKOREA$|AUNZ$|IN$|ID$|JP$|KR$/g,"").trim(),HP=t=>t===0?"0.00":t==="NA"||t===null||t===void 0||isNaN(t)?"-":new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(t),zn=t=>{const e=Ue(t);if(!e||e==="-"||e==="Unknown")return null;try{if(e.includes("-")&&e.split("-")[0].length===4)return e;const n=e.split(/[-/]/);if(n.length===3){let s=parseInt(n[0],10),i=parseInt(n[1],10),o=parseInt(n[2],10);o<100&&(o+=2e3);let l,u;return s>12?(u=s,l=i):i>12?(l=s,u=i):(u=s,l=i),l>12?null:`${o}-${l.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`}const r=new Date(e);return isNaN(r.getTime())?null:r.toISOString().split("T")[0]}catch{return null}},l1=(t,e)=>{const n=zn(t),r=zn(e)||new Date().toISOString().split("T")[0];if(!n)return 0;try{const s=new Date(n),i=new Date(r),o=Math.floor((i.getTime()-s.getTime())/(1e3*60*60*24));return o>=0?o+1:1}catch{return 0}},qP=(t,e)=>{const n=zn(t),r=zn(e);if(!n||!r)return!1;try{return new Date(n)>=new Date(r)}catch{return!1}},gn=t=>{const e=[];let n="",r=!1;for(let s=0;s<t.length;s++){const i=t[s];i==='"'?r=!r:i===","&&!r?(e.push(n.trim()),n=""):n+=i}return e.push(n.trim()),e},ve=(t,e)=>{const n=t.map(s=>(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"")),r=e.map(s=>s.toUpperCase().replace(/[^A-Z0-9]/g,""));for(const s of r){const i=n.indexOf(s);if(i!==-1)return i}return n.findIndex(s=>r.some(i=>s.includes(i)))},GP=(t,e,n=null)=>{var i,o;const r=$t(t),s=BP(t);if(!r)return{};if(n){const l=$t(n);if((i=e[l])!=null&&i[r])return e[l][r];if((o=e[l])!=null&&o[s])return e[l][s]}for(const l in e){if(e[l][r])return e[l][r];if(e[l][s])return e[l][s]}return{}},mn=(t,e={},n={},r=["Campaign","Campaign Name","Country","Market"],s=!1,i=null,o=!1,l=!1)=>{try{const u=t.split(/\r?\n/).filter(S=>S.trim()!=="");if(u.length<2)return e;const c=gn(u[0]),f=ve(c,r),p=ve(c,["Country","Market","Market Name"]),v=ve(c,["Value Type","Metric Type"]),k=ve(c,["Slice","Segment"]),b=ve(c,["Date","Reporting Date","Day","Latest Date"]),N=ve(c,["Trend Start Date","Trend Start"]),V=ve(c,["Trend End Date","Trend End"]);if(f===-1)return e;const I={...e};return u.slice(1).forEach(S=>{const A=gn(S),P=v!==-1?(A[v]||"").replace(/['"]/g,"").trim().toUpperCase():"",j=k!==-1?(A[k]||"").replace(/['"]/g,"").trim().toUpperCase():"",$=b!==-1?zn(A[b]):null,E=!s&&(P==="RATIO (%)"||P==="RATIO"||P.includes("LIFT")||P==="")&&(j==="CONTROL"||j===""||j==="TOTAL"),_=P.includes("IMPRESSIONS")||P.includes("CTR"),T=s&&(P.includes("DELTA")||P===""||P==="TOTAL"||P.includes("IMPRESSIONS")||P.includes("ABSOLUTE")||P.includes("VOLUME")||P.includes("CTR"))&&(_||j==="CONTROL"||j==="TEST"||j==="TREATMENT"||j===""||j==="TOTAL"),g=P.includes("TREND FAVORABILITY")&&(j==="CONTROL"||j===""||j==="TOTAL");if(!E&&!g&&!T)return;const x=Ue(A[f])||"Unknown";let C=p!==-1?Ue(A[p]):i||"APAC",w=Qd[C.toUpperCase()]||C;const me=GP(x,n,w==="APAC"?null:w);w==="APAC"&&me&&me.market&&(w=me.market),w==="APAC"&&(w="India");const re=`${w}_${x}`;let Ae=null;const ot=ve(c,["Gender","Sex","declared_gender"]);if(ot!==-1){const J=(A[ot]||"").toLowerCase().trim();J==="female"||J==="f"?Ae="female":J==="male"||J==="m"?Ae="male":(J==="total"||J==="all"||J==="genpop"||J==="gen pop")&&(Ae="total")}else Ae="total";if(!Ae)return;let U="total";const K=ve(c,["Age","Age Group","declared_age_bucket"]);if(K!==-1){const J=(A[K]||"").toLowerCase().trim();J.includes("18-24")?U="18-24":J.includes("25-34")?U="25-34":J.includes("18-34")?U="18-34":J.includes("35")&&(U="35+")}const ee=o||$t(x).includes("GLOBALHOLDBACK");if(!I[re]){const J=N!==-1?zn(A[N]):null,Oe=V!==-1?zn(A[V]):null;I[re]={country:x,market:w,metrics:{},isAnchor:ee,campaignStartDate:J||me.campaignStartDate||null,campaignEndDate:Oe||me.campaignEndDate||null,optimisationEndDate:me.optimisationEndDate||$,segmentTag:me.subTab||"Campaign Hub",meta:me,dataMinDate:$,dataMaxDate:$,explicitTrendStart:J,explicitTrendEnd:Oe},as.forEach(qe=>{I[re].metrics[qe]={female:{},male:{},total:{}},Ft.forEach(Je=>{Rn.forEach(Rt=>I[re].metrics[qe][Je][Rt]={v:0,sig:0,abs:0,isPaused:!1,launchDate:null})})})}$&&((!I[re].dataMinDate||$<I[re].dataMinDate)&&(I[re].dataMinDate=$),(!I[re].dataMaxDate||$>I[re].dataMaxDate)&&(I[re].dataMaxDate=$)),as.forEach(J=>{const Oe={"DAU-SCT":["DAU-SCT","DAILY SHORTS CREATION TOOL ACTIVE USERS"],"DAC-SCT":["DAC-SCT","DAILY SHORTS CONVERTERS"],"GenAI DAU-SCT":["GENAI DAU","GENAI DAILY ACTIVE USERS"],Impressions:["IMPRESSIONS","TOTAL IMPRESSIONS","REACH","IMPS"],CTR:["CTR","CLICK THROUGH RATE","CLICK-THROUGH RATE"]},qe=c.findIndex(Wt=>{const ce=Wt.toUpperCase(),tt=(Oe[J]||[]).some(Kt=>ce.includes(Kt)),sn=ce.includes("CONFIDENCE")||ce.includes("BOUND");return tt&&!sn&&(J!=="DAU-SCT"||!ce.includes("GENAI"))});if(qe===-1)return;const Je=(A[qe]||"").replace(/['"]/g,"").trim(),Rt=parseFloat(Je.replace(/[^\d.-]/g,""))||0,et=I[re].meta.targeting;let ft=!1;if(ee||l)ft=!0;else if(et){const Wt=et.ages.length===0||et.ages.includes(U),ce=et.genders.length===0||et.genders.includes(Ae);ft=Wt&&ce}else ft=!0;const In=J==="GenAI DAU-SCT",or=(I[re].meta.tab||"").toLowerCase()==="genai hub",ar=ft&&(!In||or||ee),pt=ar?Rt:"NA";if(E)(pt!=="NA"&&pt!==0||I[re].metrics[J][Ae][U].v===0||I[re].metrics[J][Ae][U].v==="NA")&&(I[re].metrics[J][Ae][U].v=pt);else if(T)J==="Impressions"||J==="CTR"?(pt!=="NA"&&pt!==0||I[re].metrics[J][Ae][U].v===0||I[re].metrics[J][Ae][U].v==="NA")&&(I[re].metrics[J][Ae][U].v=pt):(pt!=="NA"&&pt!==0||I[re].metrics[J][Ae][U].abs===0||I[re].metrics[J][Ae][U].abs==="NA")&&(I[re].metrics[J][Ae][U].abs=pt);else if(g&&ar){const Wt=Je.toUpperCase(),ce=Wt.includes("POSITIVE")||Wt.includes("SSP")?1:Wt.includes("NEGATIVE")||Wt.includes("SSN")?-1:0;ce!==0&&(I[re].metrics[J][Ae][U].sig=ce)}})}),I}catch(u){return console.error("CSV Parse Error:",u),e}},u1=({className:t})=>m.jsxs("svg",{className:t,viewBox:"0 0 1443 1250",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M485.29 0L0 839.25l242.42 410.74 485.29-839.25H485.29z"}),m.jsx("path",{d:"M957.66 0l-242.43 419.63 485.29 830.36 242.54-419.63L957.66 0z",opacity:"0.8"}),m.jsx("path",{d:"M524.23 839.25l-242.42 410.74h960.54l242.42-410.74H524.23z",opacity:"0.6"})]}),WP=(t,e)=>e?{cardBg:"bg-[#1a1a1a]",color:"text-[#808080]",accent:"bg-[#3a3a3a]"}:t>=100?{cardBg:"bg-[#0a1f0a]",color:"text-emerald-400",accent:"bg-emerald-500"}:t>=70?{cardBg:"bg-[#1a1a1a]",color:"text-amber-400",accent:"bg-amber-500"}:{cardBg:"bg-[#1a0a0a]",color:"text-red-400",accent:"bg-red-500"},p_=({activeMetrics:t,toggleMetric:e,handleAllToggle:n,allowedMetrics:r=as})=>m.jsxs("div",{className:"bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6",children:[m.jsx("div",{className:"flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]",children:r.map(s=>m.jsx("button",{onClick:()=>e(s),className:`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${t.includes(s)?"bg-[#FF0000] text-white":"text-[#808080] hover:text-white"}`,children:s},s))}),m.jsx("button",{onClick:n,className:`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${t.length===r.length?"bg-white text-black border-white":"bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]"}`,children:t.length===r.length?"Selective View":"Sync All Metrics"})]}),m_=({data:t,activeMetrics:e,latestGlobalDate:n,isCampaignView:r=!1,hideDates:s=!1,isAlwaysOn:i=!1})=>{const o=ie.useRef(null),l={female:{1:"bg-blue-900/40 text-blue-100",2:"bg-blue-900/20",3:"bg-blue-950/40 text-blue-400"},male:{1:"bg-purple-900/40 text-purple-100",2:"bg-purple-900/20",3:"bg-purple-950/40 text-purple-400"},total:{1:"bg-amber-900/80 text-amber-50",2:"bg-amber-800/20",3:"bg-amber-950 text-amber-400 font-bold"}},u=c=>{o.current&&o.current.scrollBy({left:c==="left"?-600:600,behavior:"smooth"})};return!t||t.length===0?m.jsxs("div",{className:"py-40 text-center flex flex-col items-center justify-center gap-6",children:[m.jsx("div",{className:"p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]",children:m.jsx(tA,{className:"w-12 h-12 text-[#3a3a3a] animate-pulse"})}),m.jsx("p",{className:"text-[#808080] font-bold text-sm uppercase tracking-widest",children:"No Data Available"})]}):m.jsxs("div",{className:"relative group/table",children:[m.jsx("button",{onClick:()=>u("left"),className:"absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:m.jsx(zS,{className:"w-6 h-6"})}),m.jsx("button",{onClick:()=>u("right"),className:"absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95",children:m.jsx(HS,{className:"w-6 h-6"})}),m.jsx("div",{ref:o,className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto scroll-smooth",children:m.jsxs("table",{className:"w-full text-center border-collapse",children:[m.jsxs("thead",{children:[m.jsxs("tr",{className:"text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:[m.jsx("th",{rowSpan:3,className:"px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[300px]",children:i?"Trend Identifier":r?"Campaign Entity":"Country / Market"}),Ft.map((c,f)=>m.jsx("th",{colSpan:Rn.length*e.length,className:`py-6 border-white/10 ${l[c][1]} ${f<Ft.length-1?"border-r-2 border-white/20":""}`,children:m.jsxs("div",{className:"flex items-center justify-center gap-3",children:[m.jsx(Qx,{className:"w-4 h-4 opacity-50"}),UP[c]]})},c))]}),m.jsx("tr",{className:"text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]",children:Ft.map(c=>m.jsx(Nr.Fragment,{children:Rn.map((f,p)=>m.jsx("th",{colSpan:e.length,className:`py-4 transition-colors ${l[c][2]} ${p===Rn.length-1&&Ft.indexOf(c)<Ft.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:FP[f]},f))},c))}),m.jsx("tr",{className:"text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]",children:Ft.map(c=>m.jsx(Nr.Fragment,{children:Rn.map((f,p)=>m.jsx(Nr.Fragment,{children:e.map((v,k)=>m.jsx("th",{className:`py-3 px-3 font-mono ${l[c][3]} ${p===Rn.length-1&&k===e.length-1&&Ft.indexOf(c)<Ft.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:v.includes("GenAI")?"GenAI":v==="Impressions"?"Imprs":v.split("-")[0]},v))},f))},c))})]}),m.jsx("tbody",{className:"divide-y divide-white/5",children:t.map((c,f)=>{var A,P,j;const p=!!c.isAnchor,v=(j=(P=(A=c.metrics)==null?void 0:A[e[0]||"DAU-SCT"])==null?void 0:P.total)==null?void 0:j.total,k=v!=null&&v.isPaused&&(v!=null&&v.launchDate)&&v.launchDate!=="Ended"?v.launchDate:null,b=i?c.explicitTrendStart||c.dataMinDate||c.campaignStartDate:c.campaignStartDate||c.explicitTrendStart||c.dataMinDate,N=c.campaignEndDate||k||c.optimisationEndDate;let I=i?c.explicitTrendEnd||c.dataMaxDate||N:c.campaignEndDate||c.explicitTrendEnd||c.dataMaxDate||c.optimisationEndDate;!i&&n&&I&&new Date(I)>new Date(n)&&(I=n);const S=l1(b,I);return m.jsxs("tr",{className:`transition-all duration-200 ${p?"bg-white/[0.05]":"hover:bg-white/[0.03]"}`,children:[m.jsx("td",{className:`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 bg-[#111] ${p?"text-blue-400 font-bold":"text-[#e0e0e0]"}`,children:m.jsxs("div",{className:"flex flex-col gap-1.5",children:[m.jsx("span",{className:"font-bold text-[12px] uppercase tracking-tight",children:p?`${c.country} (Reference)`:String(c.country||"Unknown")}),!s&&!p&&(b||i)&&m.jsxs("div",{className:"flex flex-col gap-1.5 mt-2 p-2 rounded bg-black/40 border border-white/5 shadow-inner",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx($g,{className:"w-3 h-3 text-blue-400"}),m.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[m.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend Start:":"Start:"}),String(b||"N/A")]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx($g,{className:"w-3 h-3 text-amber-400"}),m.jsxs("span",{className:"text-[9px] font-mono tracking-tighter text-[#888]",children:[m.jsx("span",{className:"font-bold uppercase text-[8px] mr-1",children:i?"Trend End:":"End:"}),String(r&&c.campaignEndDate?c.campaignEndDate:I||"Active")]})]}),m.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[m.jsx(Kf,{className:"w-3 h-3 text-emerald-400"}),m.jsxs("span",{className:"text-[9px] font-bold tracking-tighter uppercase text-emerald-400",children:[i?"Trend Days Live:":"Days Live:"," ",S]})]})]})]})}),Ft.map($=>m.jsx(Nr.Fragment,{children:Rn.map((E,_)=>m.jsx(Nr.Fragment,{children:e.map(T=>{const g=c.metrics[T][$][E],x=_===Rn.length-1&&e.indexOf(T)===e.length-1;let C="text-slate-500 font-medium",w="";const me=g.isPaused&&!p;return me?(C="text-[#808080] font-bold",w="bg-[#1a1a1a]"):g.v!=="NA"&&g.sig===-1?(C="text-red-500 font-bold",w="bg-red-500/10"):g.v!=="NA"&&g.sig===1?(C="text-emerald-500 font-bold",w="bg-emerald-500/10"):g.v!==0&&g.v!=="NA"&&(C="text-slate-100 font-bold"),m.jsx("td",{className:`py-5 px-3 font-mono text-[13px] tabular-nums ${C} ${w} ${x&&Ft.indexOf($)<Ft.length-1?"border-r-2 border-white/20":"border-r border-white/5"}`,children:m.jsx("div",{className:"flex flex-col items-center text-center",children:me?m.jsxs(m.Fragment,{children:[m.jsx("span",{className:"leading-none uppercase",children:"Paused"}),m.jsx("span",{className:"text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic",children:String(g.launchDate||"No Data")})]}):g.v==="NA"?m.jsx("span",{className:"text-gray-500 opacity-50 font-bold",children:"NA"}):m.jsxs(m.Fragment,{children:[m.jsx("span",{children:T==="Impressions"?HP(g.v):T==="CTR"?`${(g.v||0).toFixed(2)}%`:g.v===0?"0.00":g.v>0?`+${g.v.toFixed(2)}`:`${g.v.toFixed(2)}`}),g.abs!==0&&g.abs!=="NA"&&T!=="Impressions"&&T!=="CTR"&&m.jsxs("span",{className:"text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none",children:["(",g.abs>0?`+${Math.round(g.abs).toLocaleString()}`:Math.round(g.abs).toLocaleString(),")"]})]})})},`${f}-${T}-${$}-${E}`)})},E))},$))]},`${f}-${c.country}`)})})]})})]})},g_=async t=>{try{await navigator.clipboard.writeText(t)}catch{const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},KP=({globalData:t,regionalData:e,latestDate:n,quarterStart:r})=>{const[s,i]=ie.useState(null),[o,l]=ie.useState({}),[u,c]=ie.useState([]),[f,p]=ie.useState(!1),[v,k]=ie.useState(new Set),[b,N]=ie.useState(null),[V,I]=ie.useState({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""}),S=g=>{N(g),setTimeout(()=>N(null),2e3)},A=ie.useMemo(()=>{if(!n)return"TBD";const g=new Date("2026-03-31"),x=new Date(n),C=Math.ceil((g-x)/(1e3*60*60*24));return C>0?C:0},[n]),P=ie.useMemo(()=>["APAC","India","Indonesia","Japan","South Korea","AUNZ"].map(g=>{var Ae,ot,U,K;const x=t.find(ee=>an(ee.country,g)||an(ee.country,Hu[g])),C=(K=(U=(ot=(Ae=x==null?void 0:x.metrics)==null?void 0:Ae["DAU-SCT"])==null?void 0:ot.total)==null?void 0:U.total)==null?void 0:K.v,w=C==="NA"||C===void 0||isNaN(C)?0:C,me=$P[g.toUpperCase()]||1,re=!x||C==="NA";return{market:g.toUpperCase(),actual:w,target:me,perfIndex:me>0?w/me*100:0,isOffline:re}}),[t]),j=ie.useMemo(()=>{const g=[],x=["SHELF","SSC","UTS","MVR","UTSSFV"];return Rr.forEach(w=>{(e[w]||[]).forEach((re,Ae)=>{var or,ar,pt,Wt;if(qP(re.optimisationEndDate,re.campaignEndDate))return;const ot=((or=re.metrics)==null?void 0:or["DAU-SCT"])||{};if((pt=(ar=ot.total)==null?void 0:ar.total)!=null&&pt.isPaused)return;const U=l1(re.campaignStartDate,re.optimisationEndDate),K=U>=14,ee=Hu[w]||w.toUpperCase(),J=$t(re.country),Oe=x.some(ce=>J.includes(ce)),qe=(ce,tt,sn)=>{var ge,ke,nt;const Kt=(ge=ot[ce])==null?void 0:ge[tt];if(!Kt||Kt.v==="NA"||Kt.isPaused)return;const Qt=Kt.v||0,kr=Kt.sig===-1,O=K?"PAUSE":"MAINTAIN",F=kr?"stat sig negative":"neutral negative";let Y="";if(sn==="G"&&tt!=="total"&&Qt>=0){const Me=(ke=ot.male)==null?void 0:ke[tt],Ce=(nt=ot.female)==null?void 0:nt[tt];if((Me==null?void 0:Me.v)!=="NA"&&(Ce==null?void 0:Ce.v)!=="NA"&&((Me==null?void 0:Me.v)||0)<-1e-4&&((Ce==null?void 0:Ce.v)||0)<-1e-4){const fn=K?"Pause":"Maintain (Learning Phase)",pn=K?"":` observed but hasn't reached maturity (Current: ${U}d / Required: 14d)`;K&&Oe?Y=`${ee} ${re.country} - Pause G${tt} given negative lift across both males (${Me.v.toFixed(2)}%) and females (${Ce.v.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:Y=`${ee} ${re.country} - ${fn} G${tt} given negative lift across both males (${Me.v.toFixed(2)}%) and females (${Ce.v.toFixed(2)}%)${pn}`}}Y||(K?Oe?Y=`${ee} ${re.country} - Pause ${sn}${tt} given ${F} (${Qt.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`:Y=`${ee} ${re.country} - Pause ${sn}${tt} given ${F} (${Qt.toFixed(2)}%)`:Y=`${ee} ${re.country} - Maintain ${sn}${tt} (Learning Phase): Negative lift (${Qt.toFixed(2)}%) observed but hasn't reached maturity (Current: ${U}d / Required: 14d).`),g.push({id:`CAMP_${w}_${Ae}_P_${ce}_${tt}`,country:ee,campaign:re.country,age:tt==="total"?"GenPop":tt,gender:ce==="total"?"GenPop":ce.toUpperCase(),recommendation:O,justification:Y})},Je=((Wt=ot.total)==null?void 0:Wt.total)||{v:0,sig:0};!Oe&&Je.v!=="NA"&&Je.sig===1&&Je.v>.001&&g.push({id:`CAMP_${w}_${Ae}_SC`,country:ee,campaign:re.country,age:"GenPop",gender:"GenPop",recommendation:"SCALE",justification:`${ee} ${re.country} - Scale GenPop: Stat-sig positive lift (+${Je.v.toFixed(2)}%) observed.`});const Rt=ce=>{const tt=[];return["18-24","25-34","35+"].forEach(sn=>{var Kt,Qt,kr,O;((Qt=(Kt=ot[ce])==null?void 0:Kt[sn])==null?void 0:Qt.v)!=="NA"&&(((O=(kr=ot[ce])==null?void 0:kr[sn])==null?void 0:O.v)||0)<-1e-4&&tt.push(sn)}),tt},et=Rt("male"),ft=Rt("female"),In=et.filter(ce=>ft.includes(ce));In.forEach(ce=>qe("total",ce,"G")),et.filter(ce=>!In.includes(ce)).forEach(ce=>qe("male",ce,"M")),ft.filter(ce=>!In.includes(ce)).forEach(ce=>qe("female",ce,"F"))})}),[...g,...u].filter(w=>!v.has(w.id)).map(w=>o[w.id]?{...w,...o[w.id]}:w)},[e,u,v,o]),$=async g=>{const x=`${g.country}	${g.campaign}	${g.age}	${g.gender}	${g.recommendation}	${g.justification}`;await g_(x),S("Row Copied to Clipboard")},E=async()=>{if(j.length===0)return;const g="Market	Entity	Age	Gender	Directive	Justification",x=j.map(C=>`${C.country}	${C.campaign}	${C.age}	${C.gender}	${C.recommendation}	${C.justification}`).join(`
`);await g_(`${g}
${x}`),S("Full Matrix Copied for Sheets")},_=()=>{k(new Set),l({}),c([]),S("Matrix Restored to Baseline")},T=()=>{if(!V.campaign)return;const g=`MANUAL_${Date.now()}`;c(x=>[...x,{...V,id:g,statusType:V.recommendation==="PAUSE"?"danger":V.recommendation==="SCALE"?"success":"warning"}]),p(!1),I({country:"APAC",campaign:"",age:"GenPop",gender:"GenPop",recommendation:"MAINTAIN",justification:""})};return m.jsxs("div",{className:"w-full max-w-[1600px] mx-auto pb-32",children:[b&&m.jsx("div",{className:"fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase",children:b}),m.jsx("div",{className:"flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8",children:m.jsxs("div",{className:"space-y-4",children:[m.jsx("h1",{className:"text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase",children:"Shorts OKR Performance"}),m.jsxs("div",{className:"flex flex-wrap gap-10 pt-4",children:[m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Quarter Start"}),m.jsx("p",{className:"text-lg font-bold text-white",children:r||"2026-02-01"})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Reporting Date (Latest)"}),m.jsx("p",{className:"text-lg font-bold text-emerald-400",children:n||"Awaiting Data..."})]}),m.jsxs("div",{className:"space-y-1",children:[m.jsx("p",{className:"text-[10px] font-bold text-[#808080] uppercase tracking-widest",children:"Days Left in Q1"}),m.jsxs("p",{className:"text-lg font-bold text-amber-400",children:[A," ",m.jsx("span",{className:"text-[10px] text-[#808080] ml-1 font-normal",children:"days remaining"})]})]})]})]})}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16",children:P.map((g,x)=>{const C=WP(g.perfIndex,g.isOffline);return m.jsxs("div",{className:`relative ${C.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555]`,children:[m.jsx("div",{className:"flex justify-between items-start mb-6",children:m.jsx("h3",{className:"text-xl font-bold text-white uppercase",children:g.market})}),m.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[m.jsxs("span",{className:"text-3xl font-bold text-white",children:[g.perfIndex.toFixed(1),"%"]}),m.jsx("span",{className:"text-[9px] font-bold text-[#808080] uppercase",children:"INDEX"})]}),m.jsx("div",{className:"relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4",children:m.jsx("div",{className:`h-full ${C.accent}`,style:{width:`${Math.min(g.perfIndex,100)}%`}})}),m.jsxs("div",{className:"flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]",children:[m.jsxs("div",{className:"text-[#808080] uppercase",children:["Actual: ",m.jsxs("span",{className:"text-white",children:["+",g.actual.toFixed(2),"%"]})]}),m.jsxs("div",{className:"text-[#808080] uppercase",children:["Target: ",m.jsxs("span",{className:"text-[#b0b0b0]",children:[g.target.toFixed(2),"%"]})]})]})]},x)})}),m.jsxs("div",{className:"space-y-8",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-6",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]",children:m.jsx(gx,{className:"w-6 h-6 text-amber-400"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-2xl font-bold text-white uppercase",children:"Strategic Guidance"}),m.jsx("p",{className:"text-[#808080] text-xs uppercase tracking-widest mt-1",children:"Manual Overrides"})]})]}),m.jsxs("div",{className:"flex flex-wrap gap-3",children:[m.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all",children:[m.jsx(Nx,{className:"w-4 h-4"})," Add Pointer"]}),m.jsxs("button",{onClick:E,className:"flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[m.jsx(zg,{className:"w-4 h-4"})," Copy All for Sheets"]}),m.jsxs("button",{onClick:_,className:"flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a]",children:[m.jsx(Lx,{className:"w-4 h-4"})," Restore Defaults"]})]})]}),f&&m.jsxs("div",{className:"bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6",children:[m.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mb-6",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Market"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase outline-none focus:border-[#FF0000] text-white",value:V.country,onChange:g=>I(x=>({...x,country:g.target.value.toUpperCase()}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Entity"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",placeholder:"e.g. Veo Effects",value:V.campaign,onChange:g=>I(x=>({...x,campaign:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Age"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:V.age,onChange:g=>I(x=>({...x,age:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Gender"}),m.jsx("input",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white",value:V.gender,onChange:g=>I(x=>({...x,gender:g.target.value}))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[9px] font-bold text-[#808080] uppercase block mb-2",children:"Directive"}),m.jsxs("select",{className:"w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none text-white",value:V.recommendation,onChange:g=>I(x=>({...x,recommendation:g.target.value})),children:[m.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),m.jsx("option",{value:"SCALE",children:"SCALE"}),m.jsx("option",{value:"PAUSE",children:"PAUSE"})]})]})]}),m.jsx("textarea",{className:"w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] outline-none focus:border-[#FF0000] mb-4",placeholder:"Strategic justification context...",value:V.justification,onChange:g=>I(x=>({...x,justification:g.target.value}))}),m.jsxs("div",{className:"flex justify-end gap-3",children:[m.jsx("button",{onClick:()=>p(!1),className:"bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg hover:text-white font-bold text-[10px] uppercase transition-all border border-[#3a3a3a]",children:"Cancel"}),m.jsx("button",{onClick:T,className:"bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-500 font-bold text-[10px] uppercase transition-all",children:"Confirm Pointer"})]})]}),m.jsx("div",{className:"bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto",children:m.jsxs("table",{className:"w-full border-collapse text-[11px]",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold",children:[m.jsx("th",{className:"px-8 py-6 text-left",children:"Market"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Entity"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Age"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Gender"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Directive"}),m.jsx("th",{className:"px-8 py-6 text-left",children:"Justification"}),m.jsx("th",{className:"px-8 py-6 text-center",children:"Action"})]})}),m.jsx("tbody",{className:"divide-y divide-white/5",children:j.map(g=>{var x,C;return m.jsxs("tr",{className:`hover:bg-white/[0.02] group/row transition-colors ${g.recommendation==="PAUSE"?"bg-red-500/[0.03]":""}`,children:[m.jsx("td",{className:`px-8 py-4 font-bold uppercase ${g.isMarketAudit?"text-emerald-400":"text-blue-400"}`,children:g.country}),m.jsx("td",{className:"px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]",children:g.campaign}),m.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:g.age}),m.jsx("td",{className:"px-8 py-4 text-center text-[#b0b0b0] uppercase",children:g.gender}),m.jsx("td",{className:"px-8 py-4 font-bold",children:s===g.id?m.jsxs("select",{className:"bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none",value:((x=o[g.id])==null?void 0:x.recommendation)||g.recommendation,onChange:w=>l(me=>({...me,[g.id]:{...me[g.id]||g,recommendation:w.target.value}})),children:[m.jsx("option",{value:"MAINTAIN",children:"MAINTAIN"}),m.jsx("option",{value:"SCALE",children:"SCALE"}),m.jsx("option",{value:"PAUSE",children:"PAUSE"})]}):m.jsx("span",{className:`${g.recommendation==="PAUSE"?"text-red-400":g.recommendation==="SCALE"?"text-emerald-400":"text-amber-400"}`,children:g.recommendation})}),m.jsx("td",{className:"px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed",children:s===g.id?m.jsx("textarea",{className:"w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none min-h-[60px]",value:((C=o[g.id])==null?void 0:C.justification)||g.justification,onChange:w=>l(me=>({...me,[g.id]:{...me[g.id]||g,justification:w.target.value}}))}):g.justification}),m.jsx("td",{className:"px-8 py-5 text-center",children:m.jsxs("div",{className:"flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity",children:[s===g.id?m.jsx("button",{onClick:()=>i(null),className:"p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg",children:m.jsx(Ux,{className:"w-4 h-4"})}):m.jsx("button",{onClick:()=>i(g.id),title:"Edit Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all",children:m.jsx(kx,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>$(g),title:"Copy Row",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-all",children:m.jsx(zg,{className:"w-4 h-4"})}),m.jsx("button",{onClick:()=>k(w=>new Set(w).add(g.id)),title:"Delete Pointer",className:"p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500 hover:bg-white/10 transition-all",children:m.jsx(Gx,{className:"w-4 h-4"})})]})})]},g.id)})})]})})]})]})},y_=({type:t,title:e,icon:n,tag:r,uploadedFiles:s,handleFileUpload:i})=>{const o=t==="pct",l=o?"border-amber-500/30":"border-blue-500/30",u=o?"bg-[#1a1500]":"bg-[#0a0a1a]",c=o?"text-amber-500":"text-blue-500",f=o?"bg-amber-500/20":"bg-blue-500/20";return m.jsxs("div",{className:`p-6 rounded-lg border ${l} ${u} mb-6 transition-all`,children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:`p-2 rounded-lg flex items-center justify-center ${f} ${c}`,children:m.jsx(n,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:`text-lg font-bold uppercase tracking-tight ${c}`,children:e}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:r})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left items-stretch",children:[m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:p=>i(t,"global",p.target.files[0])}),m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].global?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(ew,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"Global Hub"}),m.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].global?s[t].global.name:"PUSH_MASTER_FILE"})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].countryHB).length>0?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(lx,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Market Hub"}),m.jsx("div",{className:"w-full grid grid-cols-5 gap-1 px-1",children:Rr.map(p=>m.jsxs("div",{className:"relative aspect-square group/item",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:v=>i(t,"countryHB",v.target.files[0],p)}),m.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].countryHB[p]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:m.jsx("span",{className:"text-[7px] font-black uppercase",children:Hu[p]})})]},p))})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center",children:[m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(s[t].alwaysOn).length>0?o?"bg-amber-500/20 text-amber-400":"bg-blue-500/20 text-blue-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Td,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]",children:"Always-On"}),m.jsx("div",{className:"w-full grid grid-cols-2 gap-1.5 px-2",children:nu.filter(p=>p!=="JP Proactive Container").map(p=>m.jsxs("div",{className:"relative h-7 group/item",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:v=>i(t,"alwaysOn",v.target.files[0],p)}),m.jsx("div",{className:`w-full h-full rounded-lg border flex items-center justify-center transition-all ${s[t].alwaysOn[p]?"bg-emerald-500/10 border-emerald-500/30 text-emerald-400":"bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]"}`,children:m.jsx("span",{className:"text-[7px] font-black uppercase",children:p})})]},p))})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center",children:[m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:p=>i(t,"jpProactive",p.target.files[0])}),m.jsx("div",{className:`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${s[t].jpProactive?"bg-red-500/10 text-red-500":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Td,{className:"w-7 h-7"})}),m.jsx("h3",{className:"font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]",children:"JP Proactive Container"}),m.jsx("div",{className:"text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center",children:s[t].jpProactive?s[t].jpProactive.name:"PUSH_JP_PROACTIVE_CSV"})]})]})]})},QP=({uploadedFiles:t,handleFileUpload:e,startAnalysis:n,isAnalyzing:r,memoryIndex:s,loadHistoricalWeek:i,isLoadingMemory:o,historicalSnapshots:l})=>{var u,c;return m.jsx("div",{className:"min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0]",children:m.jsxs("div",{className:"max-w-[1500px] w-full z-10 text-center",children:[m.jsxs("div",{className:"mb-8",children:[m.jsx("div",{className:"inline-block mb-4",children:m.jsx("div",{className:"bg-[#FF0000] w-14 h-14 rounded-xl flex items-center justify-center mx-auto",children:m.jsx(Yv,{className:"text-white w-7 h-7"})})}),m.jsxs("h1",{className:"text-3xl font-bold tracking-tight mb-1 uppercase flex items-center justify-center gap-4",children:["Shorts Brain ",m.jsx("span",{className:"text-[#FF0000]",children:"2.0"}),m.jsx("a",{href:a1,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#555] hover:text-white hover:bg-white/10 transition-all",title:"Open Resource Drive",children:m.jsx(u1,{className:"w-5 h-5"})})]}),m.jsx("p",{className:"text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase",children:"APAC Marketing Hub"})]}),m.jsxs("div",{className:"p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500",children:m.jsx($x,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-emerald-500",children:"Campaign Shared Meta"}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Structural Definitions & Instructions"})]})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:[m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.campaignInfo?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(XS,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Structural Meta"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.campaignInfo?t.shared.campaignInfo.name:"PUSH_STRUCTURAL_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("shared","campaignInfo",f.target.files[0])})]}),m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${t.shared.pauseRelive?"bg-emerald-500/10 text-emerald-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(Dx,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Pause/Relive Instructions"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:t.shared.pauseRelive?t.shared.pauseRelive.name:"PUSH_INSTRUCTIONS_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("shared","pauseRelive",f.target.files[0])})]})]})]}),m.jsx(y_,{type:"pct",title:"Percentage Input Hub",tag:"Relative Lift Streams",icon:nw,uploadedFiles:t,handleFileUpload:e}),m.jsx(y_,{type:"abs",title:"Absolute Input Hub",tag:"Discrete Volume Streams",icon:OS,uploadedFiles:t,handleFileUpload:e}),m.jsxs("div",{className:"p-6 rounded-lg border border-purple-500/30 bg-[#0d0a1a] mb-6 transition-all",children:[m.jsxs("div",{className:"flex items-center gap-4 mb-6 px-4",children:[m.jsx("div",{className:"p-2 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500",children:m.jsx(tw,{className:"w-5 h-5"})}),m.jsxs("div",{className:"text-left",children:[m.jsx("h2",{className:"text-lg font-bold uppercase tracking-tight text-purple-500",children:"Attribution Analysis"}),m.jsx("p",{className:"text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]",children:"Marketing Pressure & Reach Metrics"})]})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4",children:m.jsxs("div",{className:"group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all",children:[m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${(u=t.attribution)!=null&&u.impressions?"bg-purple-500/10 text-purple-400":"bg-[#1a1a1a] text-[#555]"}`,children:m.jsx(jS,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex-1 text-left min-w-0",children:[m.jsx("h4",{className:"text-[10px] font-bold uppercase text-[#e0e0e0] mb-1",children:"Impressions/CTR CSV"}),m.jsx("div",{className:"text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]",children:(c=t.attribution)!=null&&c.impressions?t.attribution.impressions.name:"PUSH_IMPRESSIONS_CTR_CSV"})]}),m.jsx("input",{type:"file",className:"absolute inset-0 opacity-0 cursor-pointer z-20",onChange:f=>e("attribution","impressions",f.target.files[0])})]})})]}),m.jsxs("button",{onClick:n,disabled:r,className:"px-10 py-4 rounded-lg font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-3 mx-auto uppercase mt-4 border border-[#3a3a3a]",children:[r?m.jsx(Vx,{className:"w-5 h-5 animate-spin"}):m.jsx(Rx,{className:"w-5 h-5"}),r?"INITIALIZING...":"EXECUTE ANALYSIS"]}),s.length>0&&m.jsxs("div",{className:"mt-10 p-6 rounded-lg border border-[#3a3a3a] bg-[#1a1a1a]",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[m.jsx(Zv,{className:"w-5 h-5 text-[#808080]"}),m.jsx("h2",{className:"text-sm font-bold uppercase tracking-wider text-[#808080]",children:"Stored Snapshots"})]}),m.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3",children:s.map(f=>m.jsxs("button",{onClick:()=>i(f.weekId),disabled:o,className:"border border-[#3a3a3a] bg-black rounded-lg p-4 text-center hover:border-[#FF0000]/50 hover:bg-[#FF0000]/5 transition-all cursor-pointer group",children:[m.jsx(Kf,{className:"w-4 h-4 text-[#808080] mx-auto mb-2 group-hover:text-[#FF0000]"}),m.jsx("span",{className:"text-xs font-bold block text-white",children:f.weekId}),m.jsx("span",{className:"text-[8px] text-[#808080] block mt-1",children:f.reportingDate||"No date"}),m.jsxs("span",{className:"text-[8px] text-[#555] block",children:[f.globalCount||0," campaigns"]})]},f.weekId))})]})]})})},JP=({userEmail:t})=>{const e=(t==null?void 0:t.trim().toLowerCase())||"",n=f_.includes(e),[r,s]=ie.useState(!1),[i,o]=ie.useState(!1),[l,u]=ie.useState(!1),[c,f]=ie.useState(!0),[p,v]=ie.useState("OKR"),[k,b]=ie.useState(!0),[N,V]=ie.useState(["DAU-SCT"]),[I,S]=ie.useState(!1),[A,P]=ie.useState("India"),[j,$]=ie.useState(""),[E,_]=ie.useState(null),[T,g]=ie.useState({ScaledCreation:"India",Trends:"India",CultMo:"India",ArtMo:"India","GenAI Hub":"India",AlwaysOn:"India"}),[x,C]=ie.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[w,me]=ie.useState({ScaledCreation:"",Trends:"",CultMo:"",ArtMo:"","GenAI Hub":"",AlwaysOn:""}),[re,Ae]=ie.useState([]),[ot,U]=ie.useState({}),[K,ee]=ie.useState({}),[J,Oe]=ie.useState("2026-02-01"),[qe,Je]=ie.useState({pct:{global:null,countryHB:{},alwaysOn:{},jpProactive:null},abs:{global:null,countryHB:{},alwaysOn:{},jpProactive:null},shared:{campaignInfo:null,pauseRelive:null},attribution:{impressions:null}}),[Rt,et]=ie.useState([]),[ft,In]=ie.useState("idle"),[or,ar]=ie.useState(!1),[pt,Wt]=ie.useState([]),ce=ie.useMemo(()=>as,[]),tt=ie.useMemo(()=>{const O=K[p];if(!O)return[];if(p==="AlwaysOn"){const ge=new Set;return Object.values(O).forEach(ke=>{Object.keys(ke||{}).forEach(nt=>ge.add(nt))}),[...ge].sort()}const F=T[p],Y=O[F];return Y?Object.keys(Y).sort():[]},[p,T,K]),sn=ie.useMemo(()=>{var ge,ke;const O=T[p],F=x[p],Y=(ke=(ge=K[p])==null?void 0:ge[O])==null?void 0:ke[F];return Y?Object.keys(Y).sort():[]},[p,T,x,K]),Kt=async()=>{var O,F;u(!0);try{const Y=q=>new Promise(H=>{q||H("");const X=new FileReader;X.onload=ne=>H(ne.target.result),X.readAsText(q)});let ge={};const ke=qe.shared.campaignInfo;if(ke){const H=(await Y(ke)).split(/\r?\n/).filter(X=>X.trim()!=="");if(H.length>1){const X=gn(H[0]),ne=ve(X,["Campaign","Campaign Name"]),Z=ve(X,["Market","Country"]),Ve=ve(X,["Campaign Tabs","Tabs","Tab"]),oe=ve(X,["Campaign Sub tabs","Sub tabs","Sub tab","Sub-tabs","Subtab","Sub category"]),he=ve(X,["Campaign Sub Sub tabs","Sub sub tabs","Sub-sub-tabs","Subsubtab"]),ye=ve(X,["Campaign Start Date","Start Date"]),De=ve(X,["Campaign End Date","End Date"]),Se=ve(X,["Optimisation End Date","Optimization Date"]),Ne=ve(X,["Age"]),Ye=ve(X,["Gender"]);H.slice(1).forEach(gt=>{const xe=gn(gt),jt=Ue(xe[ne]);if(!jt)return;const bt=Ue(xe[Z]).toUpperCase(),Mn=Qd[bt]||Rr.find(An=>an(An,bt))||"India",Nt=$t(Mn),Pt=$t(jt);if(ge[Nt]||(ge[Nt]={}),ge[Nt][Pt]||(ge[Nt][Pt]={market:Mn,tab:Ue(xe[Ve]),subTab:Ue(xe[oe]),subSubTab:Ue(xe[he]),campaignStartDate:Ue(xe[ye]),campaignEndDate:Ue(xe[De]),optimisationEndDate:Ue(xe[Se]),targeting:{ages:[],genders:[]}}),Ne!==-1&&xe[Ne]){const An=Ue(xe[Ne]).toLowerCase().split(",").map(Dt=>Dt.trim()),yt=[];An.forEach(Dt=>{Dt.includes("18-24")&&yt.push("18-24"),Dt.includes("25-34")&&yt.push("25-34"),Dt.includes("18-34")&&yt.push("18-34"),(Dt.includes("35-44")||Dt.includes("35+"))&&yt.push("35+")}),yt.includes("18-24")&&yt.includes("25-34")&&yt.push("18-34"),yt.push("total"),ge[Nt][Pt].targeting.ages=[...new Set([...ge[Nt][Pt].targeting.ages,...yt])]}if(Ye!==-1&&xe[Ye]){const An=Ue(xe[Ye]).toLowerCase().split(",").map(Dt=>Dt.trim()),yt=[];An.forEach(Dt=>{(Dt==="male"||Dt==="m")&&yt.push("male"),(Dt==="female"||Dt==="f")&&yt.push("female")}),yt.push("total"),ge[Nt][Pt].targeting.genders=[...new Set([...ge[Nt][Pt].targeting.genders,...yt])]}})}}let nt={};const Me=qe.shared.pauseRelive;if(Me){const H=(await Y(Me)).split(/\r?\n/).filter(X=>X.trim()!=="");if(H.length>1){const X=gn(H[0]),ne=ve(X,["Campaign","Campaign Name"]),Z=ve(X,["Age","Age Group"]),Ve=ve(X,["Gender"]),oe=ve(X,["Instruction","Action"]),he=ve(X,["Launch Date","Date"]);H.slice(1).forEach(ye=>{const De=gn(ye),Se=$t(De[ne]);if(!Se)return;const Ne=(De[Z]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),Ye=(De[Ve]||"total").toLowerCase().trim(),gt=(De[oe]||"").toUpperCase().trim(),xe=Ue(De[he]);nt[Se]||(nt[Se]={}),nt[Se][Ye]||(nt[Se][Ye]={}),nt[Se][Ye][Ne]={instruction:gt,launchDate:xe}})}}const Ce={},fn=(q,H,X=null,ne=null)=>{Object.values(q).forEach(Z=>{const Ve=Z.meta||{};let oe=X||Ue(Ve.tab)||"Uncategorized";const he=zo.find(xe=>an(xe.id,oe)||an(xe.label,oe)),ye=he?he.id:oe,De=ne||Ue(Ve.subTab)||"Generic",Se=Ue(Ve.subSubTab)||"Default",Ne=Ve.market||H,Ye=$t(Z.country),gt=nt[$t(Z.country)];gt&&as.forEach(xe=>{Ft.forEach(jt=>{Rn.forEach(bt=>{var yt;const Mn=bt.replace(/[^a-z0-9+]/g,""),Nt=Mn==="1824"||Mn==="2534"?"1834":null,Pt=[[jt,Mn],Nt?[jt,Nt]:null,[jt,"total"],["total",Mn],Nt?["total",Nt]:null,["total","total"]].filter(Boolean);let An=null;for(const[Dt,nl]of Pt){const Fs=(yt=gt[Dt])==null?void 0:yt[nl];if(Fs&&Fs.instruction==="PAUSE"&&Fs.launchDate&&Fs.launchDate.trim()!==""){An=Fs;break}}An&&(Z.metrics[xe][jt][bt].isPaused=!0,Z.metrics[xe][jt][bt].launchDate=An.launchDate)})})}),Ce[ye]||(Ce[ye]={}),Ce[ye][Ne]||(Ce[ye][Ne]={}),Ce[ye][Ne][De]||(Ce[ye][Ne][De]={}),Ce[ye][Ne][De][Se]||(Ce[ye][Ne][De][Se]={}),Ce[ye][Ne][De][Se][Ye]=Z})};let pn=null;const lr=async(q,H=!1)=>{const X=qe[q];let ne={};if(X.global){const he=await Y(X.global);if(q==="pct"){const ye=he.split(/\r?\n/).filter(Ne=>Ne.trim()!==""),De=gn(ye[0]),Se=ve(De,["Date","Reporting Date","Day"]);if(Se!==-1){let Ne=null;ye.slice(1).forEach(Ye=>{const gt=gn(Ye),xe=zn(gt[Se]);xe&&(!Ne||xe>Ne)&&(Ne=xe)}),pn=Ne,_(Ne)}}ne=mn(he,{},ge,["Country","Market","Campaign"],H,null,!0,!1)}const Z={};for(const he of Rr)if(X.countryHB[he]){const ye=await Y(X.countryHB[he]);Z[he]=mn(ye,{},ge,void 0,H,he,!1,!1)}const Ve={};for(const he of nu)if(he!=="JP Proactive Container"&&X.alwaysOn[he]){const ye=await Y(X.alwaysOn[he]);Ve[he]=mn(ye,{},ge,void 0,H,null,!1,!0)}let oe={};if(X.jpProactive){const he=await Y(X.jpProactive);oe=mn(he,{},ge,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],H,"Japan",!1,!0)}return{streamGData:ne,mHubParsed:Z,alwaysOnParsed:Ve,jpProactiveParsed:oe}},mt=await lr("pct",!1),Tt=await lr("abs",!0);let Sn={};if((O=qe.attribution)!=null&&O.impressions){const q=await Y(qe.attribution.impressions);Sn=mn(q,{},ge,["Campaign","Campaign Name","Entity"],!0,null,!1,!1)}const xn=q=>q.includes("_")?q.substring(q.indexOf("_")+1):q,Wn=(q,H,X={})=>{const ne={...q};return Object.keys(H).forEach(Z=>{if(!ne[Z]){ne[Z]=H[Z];return}as.forEach(Ve=>{Ft.forEach(oe=>{Rn.forEach(he=>{const ye=H[Z].metrics[Ve][oe][he];ne[Z].metrics[Ve][oe][he].abs=ye.abs,(Ve==="Impressions"||Ve==="CTR")&&ye.v!==0&&ye.v!=="NA"&&(ne[Z].metrics[Ve][oe][he].v=ye.v)})})})}),Object.keys(ne).forEach(Z=>{const Ve=Object.keys(X).find(oe=>{const he=xn(Z),ye=xn(oe);if(ne[Z].isAnchor&&X[oe].isAnchor){const De=ne[Z].market,Se=X[oe].market;return an(De,Se)||an(ne[Z].country,X[oe].country)}return an(Z,oe)||Z.includes(oe)||oe.includes(Z)||an(he,ye)});Ve&&Ft.forEach(oe=>{Rn.forEach(he=>{var Se,Ne,Ye,gt,xe,jt;const ye=((Ye=(Ne=(Se=X[Ve].metrics.Impressions)==null?void 0:Se[oe])==null?void 0:Ne[he])==null?void 0:Ye.v)||0;ye>0&&ye!=="NA"&&(ne[Z].metrics.Impressions[oe][he].v=ye);const De=((jt=(xe=(gt=X[Ve].metrics.CTR)==null?void 0:gt[oe])==null?void 0:xe[he])==null?void 0:jt.v)||0;De>0&&De!=="NA"&&(ne[Z].metrics.CTR[oe][he].v=De)})})}),ne},Vn=Wn(mt.streamGData,Tt.streamGData,Sn);fn(Vn,"APAC");const te={};Rr.forEach(q=>{const H=Wn(mt.mHubParsed[q]||{},Tt.mHubParsed[q]||{},Sn);te[q]=Object.values(H),fn(H,q)}),nu.forEach(q=>{if(q==="JP Proactive Container")return;const H=Wn(mt.alwaysOnParsed[q]||{},Tt.alwaysOnParsed[q]||{},Sn);fn(H,"India","AlwaysOn",q)});const le=Wn(mt.jpProactiveParsed||{},Tt.jpProactiveParsed||{},Sn);Object.values(le).forEach(q=>{q.market||(q.market="Japan")}),fn(le,"Japan","AlwaysOn","JP Proactive Container");const Re={};Object.keys(Ce).forEach(q=>{Re[q]={},Object.keys(Ce[q]).forEach(H=>{Re[q][H]={},Object.keys(Ce[q][H]).forEach(X=>{Re[q][H][X]={},Object.keys(Ce[q][H][X]).forEach(ne=>{Re[q][H][X][ne]=Object.values(Ce[q][H][X][ne])})})})});const Fe=Object.values(Vn);Ae(Fe),U(te),ee(Re),o(!0);const ze=VP(pn||void 0);In("saving");try{const q={},H=qe;H.pct.global&&(q["pct-global"]=H.pct.global);for(const[ne,Z]of Object.entries(H.pct.countryHB))Z&&(q[`pct-market-${ne}`]=Z);for(const[ne,Z]of Object.entries(H.pct.alwaysOn))Z&&(q[`pct-ao-${ne}`]=Z);H.pct.jpProactive&&(q["pct-jp-proactive"]=H.pct.jpProactive),H.abs.global&&(q["abs-global"]=H.abs.global);for(const[ne,Z]of Object.entries(H.abs.countryHB))Z&&(q[`abs-market-${ne}`]=Z);for(const[ne,Z]of Object.entries(H.abs.alwaysOn))Z&&(q[`abs-ao-${ne}`]=Z);H.abs.jpProactive&&(q["abs-jp-proactive"]=H.abs.jpProactive),H.shared.campaignInfo&&(q["shared-meta"]=H.shared.campaignInfo),H.shared.pauseRelive&&(q["shared-instructions"]=H.shared.pauseRelive),(F=H.attribution)!=null&&F.impressions&&(q["attribution-impressions"]=H.attribution.impressions),await LP({weekId:ze,reportingDate:pn,rawFiles:q}),In("saved");const X=await d_(new Date().getFullYear());et(X.snapshots||[])}catch(q){console.error("Memory save failed:",q),In("error")}}catch(Y){console.error(Y)}finally{u(!1)}},Qt=ie.useCallback(async O=>{ar(!0);try{const F=await jP(O);if(!F||Object.keys(F).length===0){console.error("No CSV files found for",O);return}let Y={};if(F["shared-meta"]){const te=F["shared-meta"].split(/\r?\n/).filter(le=>le.trim()!=="");if(te.length>1){const le=gn(te[0]),Re=ve(le,["Campaign","Campaign Name"]),Fe=ve(le,["Market","Country"]),ze=ve(le,["Campaign Tabs","Tabs","Tab"]),q=ve(le,["Sub Tab","SubTab","Sub-Tab"]),H=ve(le,["Sub Sub Tab","SubSubTab","Sub-Sub-Tab"]),X=ve(le,["Campaign Start Date","Start Date"]),ne=ve(le,["Campaign End Date","End Date"]),Z=ve(le,["Optimisation End Date","Opt End Date"]);te.slice(1).forEach(Ve=>{const oe=gn(Ve),he=Ue(oe[Re]);if(!he)return;const ye=Ue(oe[Fe]).toUpperCase(),De=Qd[ye]||Rr.find(Ye=>an(Ye,ye))||"India",Se=$t(De),Ne=$t(he);Y[Se]||(Y[Se]={}),Y[Se][Ne]={market:De,tab:Ue(oe[ze]),subTab:Ue(oe[q]),subSubTab:Ue(oe[H]),campaignStartDate:zn(oe[X]),campaignEndDate:zn(oe[ne]),optimisationEndDate:zn(oe[Z])}})}}const ge={};if(F["shared-instructions"]){const te=F["shared-instructions"].split(/\r?\n/).filter(le=>le.trim()!=="");if(te.length>1){const le=gn(te[0]),Re=ve(le,["Campaign","Campaign Name"]),Fe=ve(le,["Age","Age Group"]),ze=ve(le,["Gender"]),q=ve(le,["Instruction","Action"]),H=ve(le,["Launch Date","Date"]);te.slice(1).forEach(X=>{const ne=gn(X),Z=$t(ne[Re]);if(!Z)return;const Ve=(ne[Fe]||"total").toLowerCase().trim().replace(/[^a-z0-9+]/g,""),oe=(ne[ze]||"total").toLowerCase().trim(),he=(ne[q]||"").toUpperCase().trim(),ye=Ue(ne[H]);ge[Z]||(ge[Z]={}),ge[Z][oe]||(ge[Z][oe]={}),ge[Z][oe][Ve]={instruction:he,launchDate:ye}})}}const ke={},nt=(te,le,Re=null,Fe=null)=>{Object.values(te).forEach(ze=>{const q=ze.meta||{};let H=Re||Ue(q.tab)||"Uncategorized";const X=zo.find(De=>an(De.id,H)||an(De.label,H)),ne=X?X.id:H,Z=Fe||Ue(q.subTab)||"Generic",Ve=Ue(q.subSubTab)||"Default",oe=q.market||le,he=$t(ze.country),ye=ge[$t(ze.country)];ye&&as.forEach(De=>{Ft.forEach(Se=>{Rn.forEach(Ne=>{var bt;const Ye=Ne.replace(/[^a-z0-9+]/g,""),gt=Ye==="1824"||Ye==="2534"?"1834":null,xe=[[Se,Ye],gt?[Se,gt]:null,[Se,"total"],["total",Ye],gt?["total",gt]:null,["total","total"]].filter(Boolean);let jt=null;for(const[Mn,Nt]of xe){const Pt=(bt=ye[Mn])==null?void 0:bt[Nt];if(Pt&&Pt.instruction==="PAUSE"&&Pt.launchDate&&Pt.launchDate.trim()!==""){jt=Pt;break}}jt&&(ze.metrics[De][Se][Ne].isPaused=!0,ze.metrics[De][Se][Ne].launchDate=jt.launchDate)})})}),ke[ne]||(ke[ne]={}),ke[ne][oe]||(ke[ne][oe]={}),ke[ne][oe][Z]||(ke[ne][oe][Z]={}),ke[ne][oe][Z][Ve]||(ke[ne][oe][Z][Ve]={}),ke[ne][oe][Z][Ve][he]=ze})},Me=(te,le)=>{const Re={...te};return Object.keys(le).forEach(Fe=>{if(!Re[Fe]){Re[Fe]=le[Fe];return}as.forEach(ze=>{Ft.forEach(q=>{Rn.forEach(H=>{const X=le[Fe].metrics[ze][q][H];Re[Fe].metrics[ze][q][H].abs=X.abs,(ze==="Impressions"||ze==="CTR")&&X.v!==0&&X.v!=="NA"&&(Re[Fe].metrics[ze][q][H].v=X.v)})})})}),Re},Ce=F["attribution-impressions"]?mn(F["attribution-impressions"],{},Y,["Campaign","Campaign Name","Entity"],!0,null,!1,!1):{},fn=F["pct-global"]?mn(F["pct-global"],{},Y,["Country","Market","Campaign"],!1,null,!0,!1):{},pn=F["abs-global"]?mn(F["abs-global"],{},Y,["Country","Market","Campaign"],!0,null,!0,!1):{},lr=Me(fn,pn,Ce);nt(lr,"APAC");let mt=null;if(F["pct-global"]){const te=F["pct-global"].split(/\r?\n/).filter(le=>le.trim()!=="");if(te.length>1){const le=gn(te[0]),Re=ve(le,["Date","Reporting Date","Day"]);Re!==-1&&te.slice(1).forEach(Fe=>{const ze=gn(Fe),q=zn(ze[Re]);q&&(!mt||q>mt)&&(mt=q)})}}const Tt={};Rr.forEach(te=>{const le=F[`pct-market-${te}`]?mn(F[`pct-market-${te}`],{},Y,void 0,!1,te,!1,!1):{},Re=F[`abs-market-${te}`]?mn(F[`abs-market-${te}`],{},Y,void 0,!0,te,!1,!1):{},Fe=Me(le,Re,Ce);Tt[te]=Object.values(Fe),nt(Fe,te)}),nu.forEach(te=>{if(te==="JP Proactive Container")return;const le=F[`pct-ao-${te}`]?mn(F[`pct-ao-${te}`],{},Y,void 0,!1,null,!1,!0):{},Re=F[`abs-ao-${te}`]?mn(F[`abs-ao-${te}`],{},Y,void 0,!0,null,!1,!0):{},Fe=Me(le,Re,Ce);nt(Fe,"India","AlwaysOn",te)});const Sn=F["pct-jp-proactive"]?mn(F["pct-jp-proactive"],{},Y,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],!1,"Japan",!1,!0):{},xn=F["abs-jp-proactive"]?mn(F["abs-jp-proactive"],{},Y,["Campaign","Campaign Name","Entity","Trend Identifier","Trend","Name"],!0,"Japan",!1,!0):{},Wn=Me(Sn,xn,Ce);Object.values(Wn).forEach(te=>{te.market||(te.market="Japan")}),nt(Wn,"Japan","AlwaysOn","JP Proactive Container");const Vn={};Object.keys(ke).forEach(te=>{Vn[te]={},Object.keys(ke[te]).forEach(le=>{Vn[te][le]={},Object.keys(ke[te][le]).forEach(Re=>{Vn[te][le][Re]={},Object.keys(ke[te][le][Re]).forEach(Fe=>{Vn[te][le][Re][Fe]=Object.values(ke[te][le][Re][Fe])})})})}),Ae(Object.values(lr)),U(Tt),ee(Vn),_(mt),o(!0),v("OKR"),Wt(te=>te.find(le=>le.weekId===O)?te:[...te,{weekId:O}])}catch(F){console.error("Failed to load snapshot:",F)}finally{ar(!1)}},[]);ie.useEffect(()=>{d_(new Date().getFullYear()).then(async O=>{const F=O.snapshots||[];if(et(F),F.length>0){const Y=F[F.length-1];await Qt(Y.weekId)}}).catch(()=>{}).finally(()=>f(!1))},[Qt]),ie.useEffect(()=>{C(O=>({...O,[p]:""})),me(O=>({...O,[p]:""}))},[p,T[p]]);const kr=(O,F,Y,ge)=>{Je(ke=>{const nt=F==="countryHB"||F==="alwaysOn",Me={...ke[O]};return nt?Me[F]={...Me[F],[ge]:Y}:Me[F]=Y,{...ke,[O]:Me}})};return c?m.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},children:m.jsxs("div",{style:{textAlign:"center"},children:[m.jsxs("div",{style:{fontSize:22,fontWeight:700},children:["BRAIN ",m.jsx("span",{style:{color:"#FF0000"},children:"2.0"})]}),m.jsx("p",{style:{color:"#737373",fontSize:13,marginTop:8},children:"Loading latest data…"})]})}):i?m.jsxs("div",{className:"flex h-screen bg-black text-[#e0e0e0] overflow-hidden",children:[m.jsxs("aside",{className:`${k?"w-72":"w-20"} transition-all duration-300 bg-[#1a1a1a] border-r border-[#3a3a3a] flex flex-col z-50`,children:[m.jsxs("div",{className:"p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#3a3a3a]",children:[m.jsx("div",{className:"bg-[#FF0000] p-2 rounded-lg flex items-center justify-center",children:m.jsx(Yv,{className:"w-5 h-5 text-white"})}),k&&m.jsxs("div",{className:"flex-1",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("h2",{className:"text-lg font-bold tracking-tight",children:["BRAIN ",m.jsx("span",{className:"text-[#FF0000]",children:"2.0"})]}),m.jsx("a",{href:a1,target:"_blank",rel:"noopener noreferrer",className:"text-[#444] hover:text-white transition-colors",title:"Source Drive",children:m.jsx(u1,{className:"w-4 h-4"})})]}),m.jsx("p",{className:"text-[8px] font-bold uppercase text-[#808080] tracking-widest",children:"APAC Shorts"})]})]}),m.jsxs("nav",{className:"flex-1 px-4 space-y-1 overflow-y-auto",children:[zP.map(O=>{const F=O.id==="Upload"&&!n,Y=()=>{O.id==="Upload"?F?s(!0):(s(!1),o(!1)):(s(!1),v(O.id))},ge=O.id==="Upload"?r:p===O.id&&!r;return m.jsxs("button",{onClick:Y,className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all group relative cursor-pointer ${ge?"bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,title:F?"Admin access required — click for details":O.label,children:[m.jsx(O.icon,{className:"w-5 h-5 shrink-0"}),k&&m.jsxs("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:[O.label,F?" 🔒":""]})]},O.id)}),m.jsxs("button",{onClick:()=>S(!I),className:"w-full flex items-center justify-between p-3 rounded-lg text-[#808080] hover:text-white cursor-pointer border border-transparent",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx(cx,{className:"w-5 h-5 shrink-0"}),k&&m.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider",children:"Campaign Deepdive"})]}),k&&(I?m.jsx(GS,{className:"w-4 h-4"}):m.jsx(FS,{className:"w-4 h-4"}))]}),I&&k&&m.jsx("div",{className:"pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300",children:zo.map(O=>m.jsxs("button",{onClick:()=>v(O.id),className:`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${p===O.id?"bg-[#FF0000]/10 text-[#FF0000]":"text-[#555] hover:bg-white/5 hover:text-white"}`,children:[m.jsx(O.icon,{className:"w-4 h-4 shrink-0"}),m.jsx("span",{className:"text-[10px] font-bold uppercase",children:O.label})]},O.id))}),k&&m.jsxs("div",{className:"mt-6 pt-4 border-t border-[#3a3a3a]",children:[m.jsxs("div",{className:"flex items-center gap-2 px-3 mb-3",children:[m.jsx(Zv,{className:"w-4 h-4 text-[#808080]"}),m.jsx("span",{className:"text-[10px] font-bold uppercase text-[#808080] tracking-wider",children:"Memory"}),ft==="saving"&&m.jsx(wx,{className:"w-3 h-3 text-amber-400 animate-spin ml-auto"}),ft==="saved"&&m.jsx(JS,{className:"w-3 h-3 text-emerald-400 ml-auto"}),ft==="error"&&m.jsx(KS,{className:"w-3 h-3 text-red-400 ml-auto"})]}),m.jsx("div",{className:"space-y-1 max-h-[200px] overflow-y-auto px-1",children:Rt.length===0?m.jsx("p",{className:"text-[9px] text-[#555] px-3 py-2",children:"No snapshots stored yet"}):Rt.map(O=>m.jsxs("button",{onClick:()=>Qt(O.weekId),disabled:or,className:`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-all cursor-pointer ${pt.some(F=>F.weekId===O.weekId)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"text-[#808080] hover:bg-white/5 hover:text-white border border-transparent"}`,children:[m.jsx(Kf,{className:"w-3 h-3 shrink-0"}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("span",{className:"text-[10px] font-bold block",children:O.weekId}),m.jsx("span",{className:"text-[8px] opacity-60",children:O.reportingDate||"No date"})]}),m.jsx("span",{className:"text-[8px] opacity-50",children:O.globalCount||0})]},O.weekId))})]})]}),k&&m.jsxs("div",{className:"px-6 py-3 border-t border-[#3a3a3a] text-[#808080]",children:[m.jsx("div",{className:"text-[8px] font-bold uppercase tracking-widest text-[#555] mb-1",children:"Signed in"}),m.jsx("div",{className:"text-[10px] truncate",title:e,children:e||"—"}),m.jsx("div",{className:"text-[8px] mt-1 uppercase tracking-wider",children:n?m.jsx("span",{className:"text-emerald-400",children:"Ingestion admin"}):m.jsx("span",{className:"text-[#555]",children:"Read-only"})})]}),m.jsx("button",{type:"button",onClick:()=>b(!k),className:"p-6 border-t border-[#3a3a3a] text-[#555] hover:text-white flex items-center justify-center transition-colors",title:k?"Collapse sidebar":"Expand sidebar",children:k?m.jsx(Zx,{className:"w-5 h-5"}):m.jsx(Ix,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden relative",children:[m.jsxs("header",{className:"px-8 py-5 border-b border-[#3a3a3a] flex items-center justify-between bg-[#1a1a1a]",children:[m.jsx("div",{className:"flex items-center gap-4",children:m.jsx("h4",{className:"text-sm font-bold text-white uppercase",children:r?"Data Ingestion":p})}),m.jsxs("button",{className:"bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all",children:[m.jsx(ox,{className:"w-4 h-4 mr-2 inline"})," Export Hub"]})]}),m.jsxs("main",{className:"flex-1 overflow-auto p-10 relative",children:[r&&m.jsxs("div",{className:"max-w-2xl mx-auto mt-12 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-10",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[m.jsx("div",{className:"bg-[#FF0000]/10 p-2 rounded-lg",children:m.jsx(Xv,{className:"w-5 h-5 text-[#FF0000]"})}),m.jsx("h2",{className:"text-lg font-bold text-white",children:"Data Ingestion — Access Required"})]}),m.jsx("p",{className:"text-[13px] text-[#a0a0a0] leading-relaxed mb-6",children:"Data Ingestion is restricted to a small admin allowlist because it overwrites the saved snapshot for everyone on EXECUTE."}),m.jsxs("div",{className:"space-y-4 mb-6",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-[9px] font-bold uppercase tracking-widest text-[#808080] mb-1",children:"You are signed in as"}),m.jsx("div",{className:"text-[14px] text-white font-mono",children:e||"(no email reported)"})]}),m.jsxs("div",{children:[m.jsx("div",{className:"text-[9px] font-bold uppercase tracking-widest text-[#808080] mb-1",children:"Allowlisted admins"}),m.jsx("ul",{className:"text-[12px] text-[#e0e0e0] font-mono space-y-1",children:f_.map(O=>m.jsx("li",{children:O},O))})]})]}),m.jsx("div",{className:"text-[12px] text-[#808080] border-t border-[#3a3a3a] pt-5",children:"To request access, contact one of the admins above. If you believe you should already be on this list, your sign-in email above may not match exactly — check casing or alias."}),m.jsxs("button",{onClick:()=>s(!1),className:"mt-6 text-[10px] font-bold uppercase tracking-widest text-[#808080] hover:text-white transition-colors",children:["← Back to ",p]})]}),!r&&p==="OKR"&&m.jsx(KP,{globalData:re,regionalData:ot,latestDate:E,quarterStart:J}),!r&&(p==="Global Hub"||p==="Market Hub")&&m.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[m.jsx(p_,{activeMetrics:N.filter(O=>ce.includes(O)),allowedMetrics:ce,toggleMetric:O=>V(F=>F.includes(O)?F.length>1?F.filter(Y=>Y!==O):F:[...F,O]),handleAllToggle:()=>V(O=>O.length===ce.length?["DAU-SCT"]:[...ce])}),p==="Market Hub"&&m.jsxs("div",{className:"flex flex-wrap gap-4",children:[m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(Hg,{className:"w-6 h-6 text-red-600"}),m.jsx("select",{value:A,onChange:O=>P(O.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:Rr.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))})]}),m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(Bg,{className:"w-6 h-6 text-amber-500"}),m.jsxs("select",{value:j,onChange:O=>$(O.target.value),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:[m.jsx("option",{value:"",className:"bg-neutral-900",children:"ALL CAMPAIGN TYPES"}),zo.map(O=>m.jsx("option",{value:O.id,className:"bg-neutral-900",children:O.label},O.id))]})]})]}),m.jsx(m_,{data:p==="Global Hub"?re:(()=>{let O=(ot[A]||[]).filter(Y=>Y.country&&Y.country.toUpperCase()!=="UNKNOWN");j&&(O=O.filter(Y=>{var ge;return an((ge=Y.meta)==null?void 0:ge.tab,j)}));const F=re.find(Y=>an(Y.country,A)||an(Y.country,Hu[A]));return F?[{...F,isAnchor:!0},...O]:O})(),activeMetrics:N.filter(O=>ce.includes(O)),isCampaignView:p==="Market Hub",hideDates:p==="Global Hub",latestGlobalDate:E})]}),!r&&(zo.some(O=>O.id===p)||K[p])&&p!=="OKR"&&m.jsxs("div",{className:"space-y-8 animate-in fade-in",children:[m.jsx(p_,{activeMetrics:N.filter(O=>ce.includes(O)),allowedMetrics:ce,toggleMetric:O=>V(F=>F.includes(O)?F.length>1?F.filter(Y=>Y!==O):F:[...F,O]),handleAllToggle:()=>V(O=>O.length===ce.length?["DAU-SCT"]:[...ce])}),m.jsxs("div",{className:"flex flex-wrap gap-4",children:[m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(Hg,{className:"w-6 h-6 text-red-600"}),m.jsx("select",{value:T[p],onChange:O=>g(F=>({...F,[p]:O.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:Rr.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))})]}),tt.length>0&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(Bg,{className:"w-6 h-6 text-amber-500"}),m.jsxs("select",{value:x[p],onChange:O=>C(F=>({...F,[p]:O.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:[m.jsx("option",{value:"",className:"bg-neutral-900",children:"ALL SUB TABS"}),tt.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))]})]}),p!=="AlwaysOn"&&sn.length>0&&x[p]!==""&&m.jsxs("div",{className:"flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit",children:[m.jsx(_x,{className:"w-6 h-6 text-purple-500"}),m.jsxs("select",{value:w[p],onChange:O=>me(F=>({...F,[p]:O.target.value})),className:"bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4",children:[m.jsx("option",{value:"",className:"bg-neutral-900",children:"ALL SUB SUB TABS"}),sn.map(O=>m.jsx("option",{value:O,className:"bg-neutral-900",children:O},O))]})]})]}),m.jsx(m_,{data:(()=>{var ge,ke,nt,Me,Ce,fn,pn,lr;const O=T[p],F=x[p],Y=w[p];if(p==="AlwaysOn"&&F==="JP Proactive Container"){const mt=(ke=(ge=K.AlwaysOn)==null?void 0:ge.Japan)==null?void 0:ke["JP Proactive Container"];return mt?Object.values(mt).flatMap(Tt=>Array.isArray(Tt)?Tt:Object.values(Tt).flat()):[]}if(!F){const mt=(nt=K[p])==null?void 0:nt[O];return mt?Object.values(mt).flatMap(Tt=>Object.values(Tt).flat()):[]}if(!Y||p==="AlwaysOn"){const mt=(Ce=(Me=K[p])==null?void 0:Me[O])==null?void 0:Ce[F];if(!mt)return[];const Tt=Object.values(mt).flat();return p==="AlwaysOn"?[...Tt].sort((Sn,xn)=>(Sn.explicitTrendStart||Sn.dataMinDate||"").localeCompare(xn.explicitTrendStart||xn.dataMinDate||"")):Tt}return((lr=(pn=(fn=K[p])==null?void 0:fn[O])==null?void 0:pn[F])==null?void 0:lr[Y])||[]})(),activeMetrics:N.filter(O=>ce.includes(O)),isCampaignView:!0,isAlwaysOn:p==="AlwaysOn",latestGlobalDate:E})]})]})]}),m.jsx("style",{children:`
        body { background-color: #000000; color: #e0e0e0; margin: 0; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 10px; }
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; padding-right: 2rem; }
      `})]}):m.jsx(QP,{uploadedFiles:qe,handleFileUpload:kr,startAnalysis:Kt,isAnalyzing:l,memoryIndex:Rt,loadHistoricalWeek:Qt,isLoadingMemory:or,historicalSnapshots:pt})};function c1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YP=c1,h1=new Ha("auth","Firebase",c1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Jf("@firebase/auth");function XP(t,...e){qu.logLevel<=Ie.WARN&&qu.warn(`Auth (${yi}): ${t}`,...e)}function ru(t,...e){qu.logLevel<=Ie.ERROR&&qu.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,...e){throw Bp(t,...e)}function rr(t,...e){return Bp(t,...e)}function zp(t,e,n){const r={...YP(),[e]:n};return new Ha("auth","Firebase",r).create(e,{appName:t.name})}function ni(t){return zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xr(t,"argument-error"),zp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h1.create(t,...e)}function ue(t,e,...n){if(!t)throw Bp(e,...n)}function Mr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ru(e),new Error(e)}function Wr(t,e){t||Mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function e2(){return __()==="http:"||__()==="https:"}function __(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Za{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wr(n>e,"Short delay should be less than long delay!"),this.isMobile=dA()||gA()}get(){return t2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t,e){Wr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const s2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],i2=new Za(3e4,6e4);function qp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Eo(t,e,n,r,s={}){return f1(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=qa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return pA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&gi(t.emulatorConfig.host)&&(c.credentials="include"),d1.fetch()(await p1(t,t.config.apiHost,n,l),c)})}async function f1(t,e,n){t._canInitEmulator=!1;const r={...r2,...e};try{const s=new a2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ll(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ll(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ll(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ll(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zp(t,f,c);xr(t,f)}}catch(s){if(s instanceof Ar)throw s;xr(t,"network-request-failed",{message:String(s)})}}async function o2(t,e,n,r,s={}){const i=await Eo(t,e,n,r,s);return"mfaPendingCredential"in i&&xr(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function p1(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Hp(t.config,s):`${t.config.apiScheme}://${s}`;return s2.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class a2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rr(this.auth,"network-request-failed")),i2.get())})}}function Ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rr(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(t,e){return Eo(t,"POST","/v1/accounts:delete",e)}async function Gu(t,e){return Eo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u2(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),s=Gp(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ca(Ah(s.auth_time)),issuedAtTime:ca(Ah(s.iat)),expirationTime:ca(Ah(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ah(t){return Number(t)*1e3}function Gp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ru("JWT malformed, contained fewer than 3 sections"),null;try{const s=iw(n);return s?JSON.parse(s):(ru("Failed to decode base64 JWT payload"),null)}catch(s){return ru("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function v_(t){const e=Gp(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ar&&c2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function c2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ca(this.lastLoginAt),this.creationTime=ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await ja(t,Gu(e,{idToken:n}));ue(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?m1(s.providerUserInfo):[],o=f2(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Yd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function d2(t){const e=Ct(t);await Wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function m1(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e){const n=await f1(t,{},async()=>{const r=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await p1(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&gi(t.emulatorConfig.host)&&(u.credentials="include"),d1.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function m2(t,e){return Eo(t,"POST","/v2/accounts:revokeToken",qp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):v_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=v_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await p2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yi;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yi,this.toJSON())}_performRefresh(){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new h2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ja(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return u2(this,e)}reload(){return d2(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(ni(this.auth));const e=await this.getIdToken();return await ja(this,l2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:v,isAnonymous:k,providerData:b,stsTokenManager:N}=n;ue(p&&N,e,"internal-error");const V=Yi.fromJSON(this.name,N);ue(typeof p=="string",e,"internal-error"),ts(r,e.name),ts(s,e.name),ue(typeof v=="boolean",e,"internal-error"),ue(typeof k=="boolean",e,"internal-error"),ts(i,e.name),ts(o,e.name),ts(l,e.name),ts(u,e.name),ts(c,e.name),ts(f,e.name);const I=new Zn({uid:p,auth:e,email:s,emailVerified:v,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:f});return b&&Array.isArray(b)&&(I.providerData=b.map(S=>({...S}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yi;s.updateFromServerResponse(n);const i=new Zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?m1(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Yi;l.updateFromIdToken(r);const u=new Zn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new Map;function Lr(t){Wr(t instanceof Function,"Expected a class definition");let e=w_.get(t);return e?(Wr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w_.set(t,e),e)}/**
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
 */class g1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g1.type="NONE";const E_=g1;/**
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
 */function su(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=su(this.userKey,s.apiKey,i),this.fullPersistenceKey=su("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Gu(this.auth,{idToken:e}).catch(()=>{});return n?Zn._fromGetAccountInfoResponse(this.auth,n,e):null}return Zn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(Lr(E_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Lr(E_);const o=su(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const v=await Gu(e,{idToken:f}).catch(()=>{});if(!v)break;p=await Zn._fromGetAccountInfoResponse(e,v,f)}else p=Zn._fromJSON(e,f);c!==i&&(l=p),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Xi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Xi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(y1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T1(e))return"Blackberry";if(I1(e))return"Webos";if(_1(e))return"Safari";if((e.includes("chrome/")||v1(e))&&!e.includes("edge/"))return"Chrome";if(E1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function y1(t=rn()){return/firefox\//i.test(t)}function _1(t=rn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v1(t=rn()){return/crios\//i.test(t)}function w1(t=rn()){return/iemobile/i.test(t)}function E1(t=rn()){return/android/i.test(t)}function T1(t=rn()){return/blackberry/i.test(t)}function I1(t=rn()){return/webos/i.test(t)}function Wp(t=rn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g2(t=rn()){var e;return Wp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function y2(){return yA()&&document.documentMode===10}function S1(t=rn()){return Wp(t)||E1(t)||I1(t)||T1(t)||/windows phone/i.test(t)||w1(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t,e=[]){let n;switch(t){case"Browser":n=T_(rn());break;case"Worker":n=`${T_(rn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */async function v2(t,e={}){return Eo(t,"GET","/v2/passwordPolicy",qp(t,e))}/**
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
 */class T2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new I_(this),this.idTokenSubscription=new I_(this),this.beforeStateQueue=new _2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gu(this,{idToken:e}),r=await Zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(ni(this));const n=e?Ct(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v2(this),n=new E2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await m2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lr(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[Lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&XP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cc(t){return Ct(t)}class I_{constructor(e){this.auth=e,this.observer=null,this.addObserver=xA(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I2(t){Kp=t}function S2(t){return Kp.loadJS(t)}function x2(){return Kp.gapiScript}function A2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t,e){const n=pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(li(i,e??{}))return s;xr(s,"already-initialized")}return n.initialize({options:e})}function C2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R2(t,e,n){const r=Cc(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=A1(e),{host:o,port:l}=b2(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(li(c,r.config.emulator)&&li(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,gi(o)?Qf(`${i}//${o}${u}`):N2()}function A1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function b2(t){const e=A1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:S_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:S_(o)}}}function S_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mr("not implemented")}_getIdTokenResponse(e){return Mr("not implemented")}_linkToIdToken(e,n){return Mr("not implemented")}_getReauthenticationResolver(e){return Mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(t,e){return o2(t,"POST","/v1/accounts:signInWithIdp",qp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="http://localhost";class fi extends k1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new fi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zi(e,n)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class el extends Qp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends el{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.FACEBOOK_SIGN_IN_METHOD="facebook.com";ls.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.GOOGLE_SIGN_IN_METHOD="google.com";Pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends el{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.GITHUB_SIGN_IN_METHOD="github.com";us.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends el{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cs.credential(n,r)}catch{return null}}}cs.TWITTER_SIGN_IN_METHOD="twitter.com";cs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zn._fromIdTokenResponse(e,r,s),o=x_(r);return new ho({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=x_(r);return new ho({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function x_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Ar{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ku(e,n,r,s)}}function C1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(t,i,e,r):i})}async function D2(t,e,n=!1){const r=await ja(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ho._forOperation(t,"link",r)}/**
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
 */async function O2(t,e,n=!1){const{auth:r}=t;if(Un(r.app))return Promise.reject(ni(r));const s="reauthenticate";try{const i=await ja(t,C1(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Gp(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(t.uid===l,r,"user-mismatch"),ho._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xr(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(t,e,n=!1){if(Un(t.app))return Promise.reject(ni(t));const r="signIn",s=await C1(t,r,e),i=await ho._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function M2(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function L2(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function j2(t,e,n,r){return Ct(t).onAuthStateChanged(e,n,r)}function U2(t){return Ct(t).signOut()}const Qu="__sak";/**
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
 */class R1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=1e3,$2=10;class b1 extends R1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);y2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},F2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}b1.type="LOCAL";const z2=b1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1 extends R1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N1.type="SESSION";const P1=N1;/**
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
 */class Rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await B2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class H2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Jp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const v=p;if(v.data.eventId===c)switch(v.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(){return window}function q2(t){Tr().location.href=t}/**
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
 */function D1(){return typeof Tr().WorkerGlobalScope<"u"&&typeof Tr().importScripts=="function"}async function G2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function K2(){return D1()?self:null}/**
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
 */const O1="firebaseLocalStorageDb",Q2=1,Ju="firebaseLocalStorage",V1="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bc(t,e){return t.transaction([Ju],e?"readwrite":"readonly").objectStore(Ju)}function J2(){const t=indexedDB.deleteDatabase(O1);return new tl(t).toPromise()}function Xd(){const t=indexedDB.open(O1,Q2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ju,{keyPath:V1})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ju)?e(r):(r.close(),await J2(),e(await Xd()))})})}async function A_(t,e,n){const r=bc(t,!0).put({[V1]:e,value:n});return new tl(r).toPromise()}async function Y2(t,e){const n=bc(t,!1).get(e),r=await new tl(n).toPromise();return r===void 0?null:r.value}function k_(t,e){const n=bc(t,!0).delete(e);return new tl(n).toPromise()}const X2=800,Z2=3;class M1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Z2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rc._getInstance(K2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await G2(),!this.activeServiceWorker)return;this.sender=new H2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||W2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xd();return await A_(e,Qu,"1"),await k_(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>A_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Y2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>k_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bc(s,!1).getAll();return new tl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M1.type="LOCAL";const eD=M1;new Za(3e4,6e4);/**
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
 */function L1(t,e){return e?Lr(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yp extends k1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tD(t){return V2(t.auth,new Yp(t),t.bypassAuthState)}function nD(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),O2(n,new Yp(t),t.bypassAuthState)}async function rD(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),D2(n,new Yp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tD;case"linkViaPopup":case"linkViaRedirect":return rD;case"reauthViaPopup":case"reauthViaRedirect":return nD;default:xr(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new Za(2e3,1e4);async function iD(t,e,n){if(Un(t.app))return Promise.reject(rr(t,"operation-not-supported-in-this-environment"));const r=Cc(t);ZP(t,e,Qp);const s=L1(r,n);return new Xs(r,"signInViaPopup",e,s).executeNotNull()}class Xs extends j1{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Wr(this.filter.length===1,"Popup operations only handle one event");const e=Jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sD.get())};e()}}Xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="pendingRedirect",iu=new Map;class aD extends j1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=iu.get(this.auth._key());if(!e){try{const r=await lD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}iu.set(this.auth._key(),e)}return this.bypassAuthState||iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lD(t,e){const n=hD(e),r=cD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uD(t,e){iu.set(t._key(),e)}function cD(t){return Lr(t._redirectPersistence)}function hD(t){return su(oD,t.config.apiKey,t.name)}async function dD(t,e,n=!1){if(Un(t.app))return Promise.reject(ni(t));const r=Cc(t),s=L1(r,e),o=await new aD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=10*60*1e3;class pD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!U1(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fD&&this.cachedEventUids.clear(),this.cachedEventUids.has(C_(e))}saveEventToCache(e){this.cachedEventUids.add(C_(e)),this.lastProcessedEventTime=Date.now()}}function C_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function U1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return U1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e={}){return Eo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_D=/^https?/;async function vD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gD(t);for(const n of e)try{if(wD(n))return}catch{}xr(t,"unauthorized-domain")}function wD(t){const e=Jd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_D.test(n))return!1;if(yD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ED=new Za(3e4,6e4);function R_(){const t=Tr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TD(t){return new Promise((e,n)=>{var s,i,o;function r(){R_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{R_(),n(rr(t,"network-request-failed"))},timeout:ED.get()})}if((i=(s=Tr().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Tr().gapi)!=null&&o.load)r();else{const l=A2("iframefcb");return Tr()[l]=()=>{gapi.load?r():n(rr(t,"network-request-failed"))},S2(`${x2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ou=null,e})}let ou=null;function ID(t){return ou=ou||TD(t),ou}/**
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
 */const SD=new Za(5e3,15e3),xD="__/auth/iframe",AD="emulator/auth/iframe",kD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RD(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hp(e,AD):`https://${t.config.authDomain}/${xD}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=CD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qa(r).slice(1)}`}async function bD(t){const e=await ID(t),n=Tr().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:RD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rr(t,"network-request-failed"),l=Tr().setTimeout(()=>{i(o)},SD.get());function u(){Tr().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const ND={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PD=500,DD=600,OD="_blank",VD="http://localhost";class b_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MD(t,e,n,r=PD,s=DD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...ND,width:r.toString(),height:s.toString(),top:i,left:o},c=rn().toLowerCase();n&&(l=v1(c)?OD:n),y1(c)&&(e=e||VD,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[k,b])=>`${v}${k}=${b},`,"");if(g2(c)&&l!=="_self")return LD(e||"",l),new b_(null);const p=window.open(e||"",l,f);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new b_(p)}function LD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jD="__/auth/handler",UD="emulator/auth/handler",FD=encodeURIComponent("fac");async function N_(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof Qp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof el){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${FD}=${encodeURIComponent(u)}`:"";return`${$D(t)}?${qa(l).slice(1)}${c}`}function $D({config:t}){return t.emulator?Hp(t,UD):`https://${t.authDomain}/${jD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="webStorageSupport";class zD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P1,this._completeRedirectFn=dD,this._overrideRedirectResult=uD}async _openPopup(e,n,r,s){var o;Wr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await N_(e,n,r,Jd(),s);return MD(e,i,Jp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await N_(e,n,r,Jd(),s);return q2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bD(e),r=new pD(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kh,{type:kh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[kh];i!==void 0&&n(!!i),xr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return S1()||_1()||Wp()}}const BD=zD;var P_="@firebase/auth",D_="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GD(t){ui(new Cs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x1(t)},c=new T2(r,s,i,u);return C2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Cs("auth-internal",e=>{const n=Cc(e.getProvider("auth").getImmediate());return(r=>new HD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(P_,D_,qD(t)),_r(P_,D_,"esm2020")}/**
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
 */const WD=5*60,KD=uw("authIdTokenMaxAge")||WD;let O_=null;const QD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KD)return;const s=n==null?void 0:n.token;O_!==s&&(O_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JD(t=Xf()){const e=pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=k2(t,{popupRedirectResolver:BD,persistence:[eD,z2,P1]}),r=uw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=QD(i.toString());L2(n,o,()=>o(n.currentUser)),M2(n,l=>o(l))}}const s=ow("auth");return s&&R2(n,`http://${s}`),n}function YD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}I2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rr("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",YD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GD("Browser");const Ch=JD(Fp),XD=new Pr;function ZD(t){return t?t==="ivanho.wz@gmail.com"?!0:t.endsWith("@google.com"):!1}const V_={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},M_={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},e4={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},t4={color:"#f87171",marginTop:16,fontSize:14},L_={color:"#737373",fontSize:13,marginTop:8};function n4({children:t}){const[e,n]=ie.useState(null),[r,s]=ie.useState(!0),[i,o]=ie.useState(null),[l,u]=ie.useState(!1);ie.useEffect(()=>j2(Ch,f=>{f&&!ZD(f.email)?(U2(Ch),n(null),o(`${f.email} is not authorized.`)):(n(f),o(null)),s(!1)}),[]);const c=async()=>{u(!0),o(null);try{await iD(Ch,XD)}catch(f){o((f==null?void 0:f.message)||"Sign-in failed.")}finally{u(!1)}};return r?m.jsx("div",{style:V_,children:m.jsx("div",{style:M_,children:m.jsx("p",{style:L_,children:"Loading…"})})}):e?Nr.Children.map(t,f=>Nr.isValidElement(f)?Nr.cloneElement(f,{userEmail:e.email}):f):m.jsx("div",{style:V_,children:m.jsxs("div",{style:M_,children:[m.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Brain"}),m.jsx("p",{style:L_,children:"Sign in to continue"}),m.jsx("button",{style:e4,onClick:c,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&m.jsx("p",{style:t4,children:i})]})})}Rh.createRoot(document.getElementById("root")).render(m.jsx(Nr.StrictMode,{children:m.jsx(n4,{children:m.jsx(JP,{})})}));
//# sourceMappingURL=index-BvXqkD3w.js.map
