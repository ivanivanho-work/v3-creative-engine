import{j as f,D as Ef,S as Di,_ as so,r as B,I as If,a as bf,R as xf,C as fl,F as io,P as Af,T as Rf,b as Sf,c as Kc,d as Cf,e as rs,f as Gc,g as Nf,X as Qc,E as Jc,L as ss,h as Pf,i as kf,k as Df,l as Vf,U as Of,G as Mf,M as Lf,m as jf,Z as Uf,H as Ff,n as Bf,o as _i,p as Yc,Y as qf,q as $f}from"./ui-vendor-D71G0vmX.js";import{a as zf}from"./react-vendor-OskAq2oX.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var jr={},pl;function Hf(){if(pl)return jr;pl=1;var n=zf();return jr.createRoot=n.createRoot,jr.hydrateRoot=n.hydrateRoot,jr}var Wf=Hf();function Kf({market:n,totalTrends:e,approvedCount:t}){const r=[{label:"Total Active Trends",value:e,icon:Ef,color:"text-blue-600",bgColor:"bg-blue-100"},{label:"Approved This Week",value:t,icon:Di,color:"text-green-600",bgColor:"bg-green-100"}];return f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map((s,i)=>{const a=s.icon;return f.jsxs("div",{className:"bg-card border border-border rounded-lg p-4",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("span",{className:"text-sm text-muted-foreground",children:s.label}),f.jsx("div",{className:`${s.bgColor} p-2 rounded-lg`,children:f.jsx(a,{className:`size-5 ${s.color}`})})]}),f.jsx("div",{className:"text-2xl font-bold text-foreground",children:s.value})]},i)})})}const ut={monetization:{commercialMultiplier:1.15},stickiness:{min:.5,max:1.5},quality:{defaultScore:.5},creation:{bonusPerUpload:10},boosters:{tools:{threshold:100,multiplier:1.25},geo:{perCountryBoost:.05,maxMultiplier:1.5}}},Mn={velocity:{trending:2.5,emerging:1.5,niche:1},breakout:{heavyMultiplier:1.5,lightMultiplier:1.2,baseMultiplier:1,heavyThreshold:5},scale:{creatorLed:1.5,viewerLed:1},complexity:{easy:1.5,medium:1.2,hard:1},distribution:{perPlatformBoost:.2,perMarketBoost:.15},freshness:{recentDays:7,staleDays:30,stalePenalty:.8},quality:{potentialSlopMultiplier:.6,slopHidden:!0},origin:{youtubeShortsBoost:1.2},irs:ut};var ml={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,_=(i&3)<<4|l>>4;let I=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(I=64)),r.push(t[p],t[_],t[I],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||_==null)throw new Qf;const I=i<<2|l>>4;if(r.push(I),d!==64){const S=l<<4&240|d>>2;if(r.push(S),_!==64){const C=d<<6&192|_;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jf=function(n){const e=Xc(n);return Zc.encodeByteArray(e,!0)},is=function(n){return Jf(n).replace(/\./g,"")},eu=function(n){try{return Zc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xf=()=>Yf().__FIREBASE_DEFAULTS__,Zf=()=>{if(typeof process>"u"||typeof ml>"u")return;const n=ml.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ep=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&eu(n[1]);return e&&JSON.parse(e)},Ts=()=>{try{return Xf()||Zf()||ep()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tu=n=>{var e,t;return(t=(e=Ts())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nu=n=>{const e=tu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ru=()=>{var n;return(n=Ts())===null||n===void 0?void 0:n.config},su=n=>{var e;return(e=Ts())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function iu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[is(JSON.stringify(t)),is(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function rp(){var n;const e=(n=Ts())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ip(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function op(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ap(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lp(){return!rp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cp(){try{return typeof indexedDB=="object"}catch{return!1}}function up(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="FirebaseError";class He extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=hp,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?dp(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new He(s,l,r)}}function dp(n,e){return n.replace(fp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const fp=/\{\$([^}]+)}/g;function pp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function os(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(gl(i)&&gl(a)){if(!os(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function gl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mp(n,e){const t=new gp(n,e);return t.subscribe.bind(t)}class gp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");_p(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=yi),s.error===void 0&&(s.error=yi),s.complete===void 0&&(s.complete=yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _p(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function yi(){}/**
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
 */function re(n){return n&&n._delegate?n._delegate:n}class vt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ct="[DEFAULT]";/**
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
 */class yp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new tp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wp(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vp(n){return n===Ct?void 0:n}function wp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Ep={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Ip=K.INFO,bp={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},xp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=bp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oo{constructor(e){this.name=e,this._logLevel=Ip,this._logHandler=xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ep[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const Ap=(n,e)=>e.some(t=>n instanceof t);let _l,yl;function Rp(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sp(){return yl||(yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ou=new WeakMap,Vi=new WeakMap,au=new WeakMap,vi=new WeakMap,ao=new WeakMap;function Cp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(gt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ou.set(t,n)}).catch(()=>{}),ao.set(e,n),e}function Np(n){if(Vi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Vi.set(n,e)}let Oi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||au.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Pp(n){Oi=n(Oi)}function kp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(wi(this),e,...t);return au.set(r,e.sort?e.sort():[e]),gt(r)}:Sp().includes(n)?function(...e){return n.apply(wi(this),e),gt(ou.get(this))}:function(...e){return gt(n.apply(wi(this),e))}}function Dp(n){return typeof n=="function"?kp(n):(n instanceof IDBTransaction&&Np(n),Ap(n,Rp())?new Proxy(n,Oi):n)}function gt(n){if(n instanceof IDBRequest)return Cp(n);if(vi.has(n))return vi.get(n);const e=Dp(n);return e!==n&&(vi.set(n,e),ao.set(e,n)),e}const wi=n=>ao.get(n);function Vp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=gt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(gt(a.result),u.oldVersion,u.newVersion,gt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Op=["get","getKey","getAll","getAllKeys","count"],Mp=["put","add","delete","clear"],Ti=new Map;function vl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Mp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Op.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return Ti.set(e,i),i}Pp(n=>({...n,get:(e,t,r)=>vl(e,t)||n.get(e,t,r),has:(e,t)=>!!vl(e,t)||n.has(e,t)}));/**
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
 */class Lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function jp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mi="@firebase/app",wl="0.10.13";/**
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
 */const tt=new oo("@firebase/app"),Up="@firebase/app-compat",Fp="@firebase/analytics-compat",Bp="@firebase/analytics",qp="@firebase/app-check-compat",$p="@firebase/app-check",zp="@firebase/auth",Hp="@firebase/auth-compat",Wp="@firebase/database",Kp="@firebase/data-connect",Gp="@firebase/database-compat",Qp="@firebase/functions",Jp="@firebase/functions-compat",Yp="@firebase/installations",Xp="@firebase/installations-compat",Zp="@firebase/messaging",em="@firebase/messaging-compat",tm="@firebase/performance",nm="@firebase/performance-compat",rm="@firebase/remote-config",sm="@firebase/remote-config-compat",im="@firebase/storage",om="@firebase/storage-compat",am="@firebase/firestore",lm="@firebase/vertexai-preview",cm="@firebase/firestore-compat",um="firebase",hm="10.14.1";/**
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
 */const Li="[DEFAULT]",dm={[Mi]:"fire-core",[Up]:"fire-core-compat",[Bp]:"fire-analytics",[Fp]:"fire-analytics-compat",[$p]:"fire-app-check",[qp]:"fire-app-check-compat",[zp]:"fire-auth",[Hp]:"fire-auth-compat",[Wp]:"fire-rtdb",[Kp]:"fire-data-connect",[Gp]:"fire-rtdb-compat",[Qp]:"fire-fn",[Jp]:"fire-fn-compat",[Yp]:"fire-iid",[Xp]:"fire-iid-compat",[Zp]:"fire-fcm",[em]:"fire-fcm-compat",[tm]:"fire-perf",[nm]:"fire-perf-compat",[rm]:"fire-rc",[sm]:"fire-rc-compat",[im]:"fire-gcs",[om]:"fire-gcs-compat",[am]:"fire-fst",[cm]:"fire-fst-compat",[lm]:"fire-vertex","fire-js":"fire-js",[um]:"fire-js-all"};/**
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
 */const Qn=new Map,fm=new Map,ji=new Map;function Tl(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Mt(n){const e=n.name;if(ji.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;ji.set(e,n);for(const t of Qn.values())Tl(t,n);for(const t of fm.values())Tl(t,n);return!0}function Es(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Je(n){return n.settings!==void 0}/**
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
 */const pm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_t=new or("app","Firebase",pm);/**
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
 */class mm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
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
 */const qt=hm;function lu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Li,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _t.create("bad-app-name",{appName:String(s)});if(t||(t=ru()),!t)throw _t.create("no-options");const i=Qn.get(s);if(i){if(os(t,i.options)&&os(r,i.config))return i;throw _t.create("duplicate-app",{appName:s})}const a=new Tp(s);for(const u of ji.values())a.addComponent(u);const l=new mm(t,r,a);return Qn.set(s,l),l}function Is(n=Li){const e=Qn.get(n);if(!e&&n===Li&&ru())return lu();if(!e)throw _t.create("no-app",{appName:n});return e}function gm(){return Array.from(Qn.values())}function Ue(n,e,t){var r;let s=(r=dm[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(l.join(" "));return}Mt(new vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _m="firebase-heartbeat-database",ym=1,Jn="firebase-heartbeat-store";let Ei=null;function cu(){return Ei||(Ei=Vp(_m,ym,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Jn)}catch(t){console.warn(t)}}}}).catch(n=>{throw _t.create("idb-open",{originalErrorMessage:n.message})})),Ei}async function vm(n){try{const t=(await cu()).transaction(Jn),r=await t.objectStore(Jn).get(uu(n));return await t.done,r}catch(e){if(e instanceof He)tt.warn(e.message);else{const t=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function El(n,e){try{const r=(await cu()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(e,uu(n)),await r.done}catch(t){if(t instanceof He)tt.warn(t.message);else{const r=_t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(r.message)}}}function uu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wm=1024,Tm=720*60*60*1e3;class Em{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Il();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Tm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Il(),{heartbeatsToSend:r,unsentEntries:s}=Im(this._heartbeatsCache.heartbeats),i=is(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return tt.warn(t),""}}}function Il(){return new Date().toISOString().substring(0,10)}function Im(n,e=wm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),bl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cp()?up().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return El(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return El(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bl(n){return is(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function xm(n){Mt(new vt("platform-logger",e=>new Lp(e),"PRIVATE")),Mt(new vt("heartbeat",e=>new Em(e),"PRIVATE")),Ue(Mi,wl,n),Ue(Mi,wl,"esm2017"),Ue("fire-js","")}xm("");function hu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Am=hu,du=new or("auth","Firebase",hu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new oo("@firebase/auth");function Rm(n,...e){as.logLevel<=K.WARN&&as.warn(`Auth (${qt}): ${n}`,...e)}function Gr(n,...e){as.logLevel<=K.ERROR&&as.error(`Auth (${qt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,...e){throw co(n,...e)}function Me(n,...e){return co(n,...e)}function lo(n,e,t){const r=Object.assign(Object.assign({},Am()),{[e]:t});return new or("auth","Firebase",r).create(e,{appName:n.name})}function kt(n){return lo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sm(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&$e(n,"argument-error"),lo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function co(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return du.create(n,...e)}function F(n,e,...t){if(!n)throw co(e,...t)}function Ye(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gr(e),new Error(e)}function nt(n,e){n||Ye(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Cm(){return xl()==="http:"||xl()==="https:"}function xl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cm()||ip()||"connection"in navigator)?navigator.onLine:!0}function Pm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.shortDelay=e,this.longDelay=t,nt(t>e,"Short delay should be less than long delay!"),this.isMobile=np()||op()}get(){return Nm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n,e){nt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new lr(3e4,6e4);function ho(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function dn(n,e,t,r,s={}){return pu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=ar(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return sp()||(d.referrerPolicy="no-referrer"),fu.fetch()(mu(n,n.config.apiHost,t,l),d)})}async function pu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},km),e);try{const s=new Om(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ur(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ur(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ur(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw lo(n,p,d);$e(n,p)}}catch(s){if(s instanceof He)throw s;$e(n,"network-request-failed",{message:String(s)})}}async function Vm(n,e,t,r,s={}){const i=await dn(n,e,t,r,s);return"mfaPendingCredential"in i&&$e(n,"multi-factor-auth-required",{_serverResponse:i}),i}function mu(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?uo(n.config,s):`${n.config.apiScheme}://${s}`}class Om{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),Dm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ur(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Me(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(n,e){return dn(n,"POST","/v1/accounts:delete",e)}async function gu(n,e){return dn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lm(n,e=!1){const t=re(n),r=await t.getIdToken(e),s=fo(r);F(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$n(Ii(s.auth_time)),issuedAtTime:$n(Ii(s.iat)),expirationTime:$n(Ii(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ii(n){return Number(n)*1e3}function fo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=eu(t);return s?JSON.parse(s):(Gr("Failed to decode base64 JWT payload"),null)}catch(s){return Gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Al(n){const e=fo(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof He&&jm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ls(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Yn(n,gu(t,{idToken:r}));F(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_u(i.providerUserInfo):[],l=Bm(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Fi(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,_)}async function Fm(n){const e=re(n);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bm(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _u(n){return n.map(e=>{var{providerId:t}=e,r=so(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(n,e){const t=await pu(n,{},async()=>{const r=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=mu(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fu.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $m(n,e){return dn(n,"POST","/v2/accounts:revokeToken",ho(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Al(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Al(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await qm(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Xt;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xt,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=so(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Um(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Lm(this,e)}reload(){return Fm(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(kt(this.auth));const e=await this.getIdToken();return await Yn(this,Mm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,d,p;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,A=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,k=(d=t.createdAt)!==null&&d!==void 0?d:void 0,L=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:j,emailVerified:$,isAnonymous:X,providerData:Z,stsTokenManager:y}=t;F(j&&y,e,"internal-error");const g=Xt.fromJSON(this.name,y);F(typeof j=="string",e,"internal-error"),ct(_,e.name),ct(I,e.name),F(typeof $=="boolean",e,"internal-error"),F(typeof X=="boolean",e,"internal-error"),ct(S,e.name),ct(C,e.name),ct(D,e.name),ct(A,e.name),ct(k,e.name),ct(L,e.name);const v=new Xe({uid:j,auth:e,email:I,emailVerified:$,displayName:_,isAnonymous:X,photoURL:C,phoneNumber:S,tenantId:D,stsTokenManager:g,createdAt:k,lastLoginAt:L});return Z&&Array.isArray(Z)&&(v.providerData=Z.map(T=>Object.assign({},T))),A&&(v._redirectEventId=A),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Xt;s.updateFromServerResponse(t);const i=new Xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ls(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];F(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_u(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Xt;l.updateFromIdToken(r);const u=new Xe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Map;function Ze(n){nt(n instanceof Function,"Expected a class definition");let e=Rl.get(n);return e?(nt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rl.set(n,e),e)}/**
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
 */class yu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yu.type="NONE";const Sl=yu;/**
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
 */function Qr(n,e,t){return`firebase:${n}:${e}:${t}`}class Zt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zt(Ze(Sl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ze(Sl);const a=Qr(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){const _=Xe._fromJSON(e,p);d!==i&&(l=_),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Zt(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Zt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bu(e))return"Blackberry";if(xu(e))return"Webos";if(wu(e))return"Safari";if((e.includes("chrome/")||Tu(e))&&!e.includes("edge/"))return"Chrome";if(Iu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vu(n=xe()){return/firefox\//i.test(n)}function wu(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tu(n=xe()){return/crios\//i.test(n)}function Eu(n=xe()){return/iemobile/i.test(n)}function Iu(n=xe()){return/android/i.test(n)}function bu(n=xe()){return/blackberry/i.test(n)}function xu(n=xe()){return/webos/i.test(n)}function po(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zm(n=xe()){var e;return po(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hm(){return ap()&&document.documentMode===10}function Au(n=xe()){return po(n)||Iu(n)||xu(n)||bu(n)||/windows phone/i.test(n)||Eu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n,e=[]){let t;switch(n){case"Browser":t=Cl(xe());break;case"Worker":t=`${Cl(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qt}/${r}`}/**
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
 */class Wm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Km(n,e={}){return dn(n,"GET","/v2/passwordPolicy",ho(n,e))}/**
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
 */const Gm=6;class Qm{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Gm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nl(this),this.idTokenSubscription=new Nl(this),this.beforeStateQueue=new Wm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=du,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ze(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Zt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gu(this,{idToken:e}),r=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(kt(this));const t=e?re(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Km(this),t=new Qm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await $m(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ze(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await Zt.create(this,[Ze(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ru(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Rm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bs(n){return re(n)}class Nl{constructor(e){this.auth=e,this.observer=null,this.addObserver=mp(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ym(n){mo=n}function Xm(n){return mo.loadJS(n)}function Zm(){return mo.gapiScript}function eg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e){const t=Es(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(os(i,e??{}))return s;$e(s,"already-initialized")}return t.initialize({options:e})}function ng(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ze);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rg(n,e,t){const r=bs(n);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Su(e),{host:a,port:l}=sg(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ig()}function Su(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sg(n){const e=Su(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Pl(a)}}}function Pl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ig(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,t){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(n,e){return Vm(n,"POST","/v1/accounts:signInWithIdp",ho(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="http://localhost";class Lt extends Cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=so(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Lt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return en(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,en(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,en(e,t)}buildRequest(){const e={requestUri:og,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ar(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cr extends go{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends cr{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qe.credential(t,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends cr{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends cr{constructor(){super("twitter.com")}static credential(e,t){return Lt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ft.credential(t,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Xe._fromIdTokenResponse(e,r,s),a=kl(r);return new nn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=kl(r);return new nn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function kl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends He{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new cs(e,t,r,s)}}function Nu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(n,i,e,r):i})}async function ag(n,e,t=!1){const r=await Yn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return nn._forOperation(n,"link",r)}/**
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
 */async function lg(n,e,t=!1){const{auth:r}=n;if(Je(r.app))return Promise.reject(kt(r));const s="reauthenticate";try{const i=await Yn(n,Nu(r,s,e,n),t);F(i.idToken,r,"internal-error");const a=fo(i.idToken);F(a,r,"internal-error");const{sub:l}=a;return F(n.uid===l,r,"user-mismatch"),nn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(n,e,t=!1){if(Je(n.app))return Promise.reject(kt(n));const r="signIn",s=await Nu(n,r,e),i=await nn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function ug(n,e,t,r){return re(n).onIdTokenChanged(e,t,r)}function hg(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function dg(n,e,t,r){return re(n).onAuthStateChanged(e,t,r)}function fg(n){return re(n).signOut()}const us="__sak";/**
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
 */class Pu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(us,"1"),this.storage.removeItem(us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=1e3,mg=10;class ku extends Pu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Au(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Hm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ku.type="LOCAL";const gg=ku;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Pu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Du.type="SESSION";const Vu=Du;/**
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
 */function _g(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new xs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await _g(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class yg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=_o("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const I=_;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(I.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function vg(n){Fe().location.href=n}/**
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
 */function Ou(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function wg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Eg(){return Ou()?self:null}/**
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
 */const Mu="firebaseLocalStorageDb",Ig=1,hs="firebaseLocalStorage",Lu="fbase_key";class ur{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function As(n,e){return n.transaction([hs],e?"readwrite":"readonly").objectStore(hs)}function bg(){const n=indexedDB.deleteDatabase(Mu);return new ur(n).toPromise()}function Bi(){const n=indexedDB.open(Mu,Ig);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(hs,{keyPath:Lu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(hs)?e(r):(r.close(),await bg(),e(await Bi()))})})}async function Dl(n,e,t){const r=As(n,!0).put({[Lu]:e,value:t});return new ur(r).toPromise()}async function xg(n,e){const t=As(n,!1).get(e),r=await new ur(t).toPromise();return r===void 0?null:r.value}function Vl(n,e){const t=As(n,!0).delete(e);return new ur(t).toPromise()}const Ag=800,Rg=3;class ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ou()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xs._getInstance(Eg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wg(),!this.activeServiceWorker)return;this.sender=new yg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bi();return await Dl(e,us,"1"),await Vl(e,us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=As(s,!1).getAll();return new ur(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ju.type="LOCAL";const Sg=ju;new lr(3e4,6e4);/**
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
 */function Uu(n,e){return e?Ze(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class yo extends Cu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return en(e,this._buildIdpRequest())}_linkToIdToken(e,t){return en(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return en(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cg(n){return cg(n.auth,new yo(n),n.bypassAuthState)}function Ng(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),lg(t,new yo(n),n.bypassAuthState)}async function Pg(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),ag(t,new yo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cg;case"linkViaPopup":case"linkViaRedirect":return Pg;case"reauthViaPopup":case"reauthViaRedirect":return Ng;default:$e(this.auth,"internal-error")}}resolve(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new lr(2e3,1e4);async function Dg(n,e,t){if(Je(n.app))return Promise.reject(Me(n,"operation-not-supported-in-this-environment"));const r=bs(n);Sm(n,e,go);const s=Uu(r,t);return new Nt(r,"signInViaPopup",e,s).executeNotNull()}class Nt extends Fu{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){nt(this.filter.length===1,"Popup operations only handle one event");const e=_o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kg.get())};e()}}Nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="pendingRedirect",Jr=new Map;class Og extends Fu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const r=await Mg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mg(n,e){const t=Ug(e),r=jg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Lg(n,e){Jr.set(n._key(),e)}function jg(n){return Ze(n._redirectPersistence)}function Ug(n){return Qr(Vg,n.config.apiKey,n.name)}async function Fg(n,e,t=!1){if(Je(n.app))return Promise.reject(kt(n));const r=bs(n),s=Uu(r,e),a=await new Og(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=600*1e3;class qg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$g(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Me(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ol(e))}saveEventToCache(e){this.cachedEventUids.add(Ol(e)),this.lastProcessedEventTime=Date.now()}}function Ol(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $g(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(n,e={}){return dn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wg=/^https?/;async function Kg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zg(n);for(const t of e)try{if(Gg(t))return}catch{}$e(n,"unauthorized-domain")}function Gg(n){const e=Ui(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Wg.test(t))return!1;if(Hg.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Qg=new lr(3e4,6e4);function Ml(){const n=Fe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jg(n){return new Promise((e,t)=>{var r,s,i;function a(){Ml(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ml(),t(Me(n,"network-request-failed"))},timeout:Qg.get()})}if(!((s=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Fe().gapi)===null||i===void 0)&&i.load)a();else{const l=eg("iframefcb");return Fe()[l]=()=>{gapi.load?a():t(Me(n,"network-request-failed"))},Xm(`${Zm()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Yr=null,e})}let Yr=null;function Yg(n){return Yr=Yr||Jg(n),Yr}/**
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
 */const Xg=new lr(5e3,15e3),Zg="__/auth/iframe",e_="emulator/auth/iframe",t_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r_(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?uo(e,e_):`https://${n.config.authDomain}/${Zg}`,r={apiKey:e.apiKey,appName:n.name,v:qt},s=n_.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ar(r).slice(1)}`}async function s_(n){const e=await Yg(n),t=Fe().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:r_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Me(n,"network-request-failed"),l=Fe().setTimeout(()=>{i(a)},Xg.get());function u(){Fe().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const i_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o_=500,a_=600,l_="_blank",c_="http://localhost";class Ll{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u_(n,e,t,r=o_,s=a_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},i_),{width:r.toString(),height:s.toString(),top:i,left:a}),d=xe().toLowerCase();t&&(l=Tu(d)?l_:t),vu(d)&&(e=e||c_,u.scrollbars="yes");const p=Object.entries(u).reduce((I,[S,C])=>`${I}${S}=${C},`,"");if(zm(d)&&l!=="_self")return h_(e||"",l),new Ll(null);const _=window.open(e||"",l,p);F(_,n,"popup-blocked");try{_.focus()}catch{}return new Ll(_)}function h_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const d_="__/auth/handler",f_="emulator/auth/handler",p_=encodeURIComponent("fac");async function jl(n,e,t,r,s,i){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qt,eventId:s};if(e instanceof go){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",pp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof cr){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${p_}=${encodeURIComponent(u)}`:"";return`${m_(n)}?${ar(l).slice(1)}${d}`}function m_({config:n}){return n.emulator?uo(n,f_):`https://${n.authDomain}/${d_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="webStorageSupport";class g_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vu,this._completeRedirectFn=Fg,this._overrideRedirectResult=Lg}async _openPopup(e,t,r,s){var i;nt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await jl(e,t,r,Ui(),s);return u_(e,a,_o())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await jl(e,t,r,Ui(),s);return vg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(nt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await s_(e),r=new qg(e);return t.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bi,{type:bi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[bi];a!==void 0&&t(!!a),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Au()||wu()||po()}}const __=g_;var Ul="@firebase/auth",Fl="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w_(n){Mt(new vt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ru(n)},d=new Jm(r,s,i,u);return ng(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Mt(new vt("auth-internal",e=>{const t=bs(e.getProvider("auth").getImmediate());return(r=>new y_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Ul,Fl,v_(n)),Ue(Ul,Fl,"esm2017")}/**
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
 */const T_=300,E_=su("authIdTokenMaxAge")||T_;let Bl=null;const I_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>E_)return;const s=t==null?void 0:t.token;Bl!==s&&(Bl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qu(n=Is()){const e=Es(n,"auth");if(e.isInitialized())return e.getImmediate();const t=tg(n,{popupRedirectResolver:__,persistence:[Sg,gg,Vu]}),r=su("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=I_(i.toString());hg(t,a,()=>a(t.currentUser)),ug(t,l=>a(l))}}const s=tu("auth");return s&&rg(t,`http://${s}`),t}function b_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ym({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Me("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",b_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w_("Browser");var x_="firebase",A_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(x_,A_,"app");var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dt,$u;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,g){function v(){}v.prototype=g.prototype,y.D=g.prototype,y.prototype=new v,y.prototype.constructor=y,y.C=function(T,E,x){for(var w=Array(arguments.length-2),We=2;We<arguments.length;We++)w[We-2]=arguments[We];return g.prototype[E].apply(T,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,g,v){v||(v=0);var T=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)T[E]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(E=0;16>E;++E)T[E]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=y.g[0],v=y.g[1],E=y.g[2];var x=y.g[3],w=g+(x^v&(E^x))+T[0]+3614090360&4294967295;g=v+(w<<7&4294967295|w>>>25),w=x+(E^g&(v^E))+T[1]+3905402710&4294967295,x=g+(w<<12&4294967295|w>>>20),w=E+(v^x&(g^v))+T[2]+606105819&4294967295,E=x+(w<<17&4294967295|w>>>15),w=v+(g^E&(x^g))+T[3]+3250441966&4294967295,v=E+(w<<22&4294967295|w>>>10),w=g+(x^v&(E^x))+T[4]+4118548399&4294967295,g=v+(w<<7&4294967295|w>>>25),w=x+(E^g&(v^E))+T[5]+1200080426&4294967295,x=g+(w<<12&4294967295|w>>>20),w=E+(v^x&(g^v))+T[6]+2821735955&4294967295,E=x+(w<<17&4294967295|w>>>15),w=v+(g^E&(x^g))+T[7]+4249261313&4294967295,v=E+(w<<22&4294967295|w>>>10),w=g+(x^v&(E^x))+T[8]+1770035416&4294967295,g=v+(w<<7&4294967295|w>>>25),w=x+(E^g&(v^E))+T[9]+2336552879&4294967295,x=g+(w<<12&4294967295|w>>>20),w=E+(v^x&(g^v))+T[10]+4294925233&4294967295,E=x+(w<<17&4294967295|w>>>15),w=v+(g^E&(x^g))+T[11]+2304563134&4294967295,v=E+(w<<22&4294967295|w>>>10),w=g+(x^v&(E^x))+T[12]+1804603682&4294967295,g=v+(w<<7&4294967295|w>>>25),w=x+(E^g&(v^E))+T[13]+4254626195&4294967295,x=g+(w<<12&4294967295|w>>>20),w=E+(v^x&(g^v))+T[14]+2792965006&4294967295,E=x+(w<<17&4294967295|w>>>15),w=v+(g^E&(x^g))+T[15]+1236535329&4294967295,v=E+(w<<22&4294967295|w>>>10),w=g+(E^x&(v^E))+T[1]+4129170786&4294967295,g=v+(w<<5&4294967295|w>>>27),w=x+(v^E&(g^v))+T[6]+3225465664&4294967295,x=g+(w<<9&4294967295|w>>>23),w=E+(g^v&(x^g))+T[11]+643717713&4294967295,E=x+(w<<14&4294967295|w>>>18),w=v+(x^g&(E^x))+T[0]+3921069994&4294967295,v=E+(w<<20&4294967295|w>>>12),w=g+(E^x&(v^E))+T[5]+3593408605&4294967295,g=v+(w<<5&4294967295|w>>>27),w=x+(v^E&(g^v))+T[10]+38016083&4294967295,x=g+(w<<9&4294967295|w>>>23),w=E+(g^v&(x^g))+T[15]+3634488961&4294967295,E=x+(w<<14&4294967295|w>>>18),w=v+(x^g&(E^x))+T[4]+3889429448&4294967295,v=E+(w<<20&4294967295|w>>>12),w=g+(E^x&(v^E))+T[9]+568446438&4294967295,g=v+(w<<5&4294967295|w>>>27),w=x+(v^E&(g^v))+T[14]+3275163606&4294967295,x=g+(w<<9&4294967295|w>>>23),w=E+(g^v&(x^g))+T[3]+4107603335&4294967295,E=x+(w<<14&4294967295|w>>>18),w=v+(x^g&(E^x))+T[8]+1163531501&4294967295,v=E+(w<<20&4294967295|w>>>12),w=g+(E^x&(v^E))+T[13]+2850285829&4294967295,g=v+(w<<5&4294967295|w>>>27),w=x+(v^E&(g^v))+T[2]+4243563512&4294967295,x=g+(w<<9&4294967295|w>>>23),w=E+(g^v&(x^g))+T[7]+1735328473&4294967295,E=x+(w<<14&4294967295|w>>>18),w=v+(x^g&(E^x))+T[12]+2368359562&4294967295,v=E+(w<<20&4294967295|w>>>12),w=g+(v^E^x)+T[5]+4294588738&4294967295,g=v+(w<<4&4294967295|w>>>28),w=x+(g^v^E)+T[8]+2272392833&4294967295,x=g+(w<<11&4294967295|w>>>21),w=E+(x^g^v)+T[11]+1839030562&4294967295,E=x+(w<<16&4294967295|w>>>16),w=v+(E^x^g)+T[14]+4259657740&4294967295,v=E+(w<<23&4294967295|w>>>9),w=g+(v^E^x)+T[1]+2763975236&4294967295,g=v+(w<<4&4294967295|w>>>28),w=x+(g^v^E)+T[4]+1272893353&4294967295,x=g+(w<<11&4294967295|w>>>21),w=E+(x^g^v)+T[7]+4139469664&4294967295,E=x+(w<<16&4294967295|w>>>16),w=v+(E^x^g)+T[10]+3200236656&4294967295,v=E+(w<<23&4294967295|w>>>9),w=g+(v^E^x)+T[13]+681279174&4294967295,g=v+(w<<4&4294967295|w>>>28),w=x+(g^v^E)+T[0]+3936430074&4294967295,x=g+(w<<11&4294967295|w>>>21),w=E+(x^g^v)+T[3]+3572445317&4294967295,E=x+(w<<16&4294967295|w>>>16),w=v+(E^x^g)+T[6]+76029189&4294967295,v=E+(w<<23&4294967295|w>>>9),w=g+(v^E^x)+T[9]+3654602809&4294967295,g=v+(w<<4&4294967295|w>>>28),w=x+(g^v^E)+T[12]+3873151461&4294967295,x=g+(w<<11&4294967295|w>>>21),w=E+(x^g^v)+T[15]+530742520&4294967295,E=x+(w<<16&4294967295|w>>>16),w=v+(E^x^g)+T[2]+3299628645&4294967295,v=E+(w<<23&4294967295|w>>>9),w=g+(E^(v|~x))+T[0]+4096336452&4294967295,g=v+(w<<6&4294967295|w>>>26),w=x+(v^(g|~E))+T[7]+1126891415&4294967295,x=g+(w<<10&4294967295|w>>>22),w=E+(g^(x|~v))+T[14]+2878612391&4294967295,E=x+(w<<15&4294967295|w>>>17),w=v+(x^(E|~g))+T[5]+4237533241&4294967295,v=E+(w<<21&4294967295|w>>>11),w=g+(E^(v|~x))+T[12]+1700485571&4294967295,g=v+(w<<6&4294967295|w>>>26),w=x+(v^(g|~E))+T[3]+2399980690&4294967295,x=g+(w<<10&4294967295|w>>>22),w=E+(g^(x|~v))+T[10]+4293915773&4294967295,E=x+(w<<15&4294967295|w>>>17),w=v+(x^(E|~g))+T[1]+2240044497&4294967295,v=E+(w<<21&4294967295|w>>>11),w=g+(E^(v|~x))+T[8]+1873313359&4294967295,g=v+(w<<6&4294967295|w>>>26),w=x+(v^(g|~E))+T[15]+4264355552&4294967295,x=g+(w<<10&4294967295|w>>>22),w=E+(g^(x|~v))+T[6]+2734768916&4294967295,E=x+(w<<15&4294967295|w>>>17),w=v+(x^(E|~g))+T[13]+1309151649&4294967295,v=E+(w<<21&4294967295|w>>>11),w=g+(E^(v|~x))+T[4]+4149444226&4294967295,g=v+(w<<6&4294967295|w>>>26),w=x+(v^(g|~E))+T[11]+3174756917&4294967295,x=g+(w<<10&4294967295|w>>>22),w=E+(g^(x|~v))+T[2]+718787259&4294967295,E=x+(w<<15&4294967295|w>>>17),w=v+(x^(E|~g))+T[9]+3951481745&4294967295,y.g[0]=y.g[0]+g&4294967295,y.g[1]=y.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,y.g[2]=y.g[2]+E&4294967295,y.g[3]=y.g[3]+x&4294967295}r.prototype.u=function(y,g){g===void 0&&(g=y.length);for(var v=g-this.blockSize,T=this.B,E=this.h,x=0;x<g;){if(E==0)for(;x<=v;)s(this,y,x),x+=this.blockSize;if(typeof y=="string"){for(;x<g;)if(T[E++]=y.charCodeAt(x++),E==this.blockSize){s(this,T),E=0;break}}else for(;x<g;)if(T[E++]=y[x++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var g=1;g<y.length-8;++g)y[g]=0;var v=8*this.o;for(g=y.length-8;g<y.length;++g)y[g]=v&255,v/=256;for(this.u(y),y=Array(16),g=v=0;4>g;++g)for(var T=0;32>T;T+=8)y[v++]=this.g[g]>>>T&255;return y};function i(y,g){var v=l;return Object.prototype.hasOwnProperty.call(v,y)?v[y]:v[y]=g(y)}function a(y,g){this.h=g;for(var v=[],T=!0,E=y.length-1;0<=E;E--){var x=y[E]|0;T&&x==g||(v[E]=x,T=!1)}this.g=v}var l={};function u(y){return-128<=y&&128>y?i(y,function(g){return new a([g|0],0>g?-1:0)}):new a([y|0],0>y?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return _;if(0>y)return A(d(-y));for(var g=[],v=1,T=0;y>=v;T++)g[T]=y/v|0,v*=4294967296;return new a(g,0)}function p(y,g){if(y.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(y.charAt(0)=="-")return A(p(y.substring(1),g));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),T=_,E=0;E<y.length;E+=8){var x=Math.min(8,y.length-E),w=parseInt(y.substring(E,E+x),g);8>x?(x=d(Math.pow(g,x)),T=T.j(x).add(d(w))):(T=T.j(v),T=T.add(d(w)))}return T}var _=u(0),I=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-A(this).m();for(var y=0,g=1,v=0;v<this.g.length;v++){var T=this.i(v);y+=(0<=T?T:4294967296+T)*g,g*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C(this))return"0";if(D(this))return"-"+A(this).toString(y);for(var g=d(Math.pow(y,6)),v=this,T="";;){var E=$(v,g).g;v=k(v,E.j(g));var x=((0<v.g.length?v.g[0]:v.h)>>>0).toString(y);if(v=E,C(v))return x+T;for(;6>x.length;)x="0"+x;T=x+T}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function C(y){if(y.h!=0)return!1;for(var g=0;g<y.g.length;g++)if(y.g[g]!=0)return!1;return!0}function D(y){return y.h==-1}n.l=function(y){return y=k(this,y),D(y)?-1:C(y)?0:1};function A(y){for(var g=y.g.length,v=[],T=0;T<g;T++)v[T]=~y.g[T];return new a(v,~y.h).add(I)}n.abs=function(){return D(this)?A(this):this},n.add=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],T=0,E=0;E<=g;E++){var x=T+(this.i(E)&65535)+(y.i(E)&65535),w=(x>>>16)+(this.i(E)>>>16)+(y.i(E)>>>16);T=w>>>16,x&=65535,w&=65535,v[E]=w<<16|x}return new a(v,v[v.length-1]&-2147483648?-1:0)};function k(y,g){return y.add(A(g))}n.j=function(y){if(C(this)||C(y))return _;if(D(this))return D(y)?A(this).j(A(y)):A(A(this).j(y));if(D(y))return A(this.j(A(y)));if(0>this.l(S)&&0>y.l(S))return d(this.m()*y.m());for(var g=this.g.length+y.g.length,v=[],T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<y.g.length;E++){var x=this.i(T)>>>16,w=this.i(T)&65535,We=y.i(E)>>>16,_n=y.i(E)&65535;v[2*T+2*E]+=w*_n,L(v,2*T+2*E),v[2*T+2*E+1]+=x*_n,L(v,2*T+2*E+1),v[2*T+2*E+1]+=w*We,L(v,2*T+2*E+1),v[2*T+2*E+2]+=x*We,L(v,2*T+2*E+2)}for(T=0;T<g;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=g;T<2*g;T++)v[T]=0;return new a(v,0)};function L(y,g){for(;(y[g]&65535)!=y[g];)y[g+1]+=y[g]>>>16,y[g]&=65535,g++}function j(y,g){this.g=y,this.h=g}function $(y,g){if(C(g))throw Error("division by zero");if(C(y))return new j(_,_);if(D(y))return g=$(A(y),g),new j(A(g.g),A(g.h));if(D(g))return g=$(y,A(g)),new j(A(g.g),g.h);if(30<y.g.length){if(D(y)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=I,T=g;0>=T.l(y);)v=X(v),T=X(T);var E=Z(v,1),x=Z(T,1);for(T=Z(T,2),v=Z(v,2);!C(T);){var w=x.add(T);0>=w.l(y)&&(E=E.add(v),x=w),T=Z(T,1),v=Z(v,1)}return g=k(y,E.j(g)),new j(E,g)}for(E=_;0<=y.l(g);){for(v=Math.max(1,Math.floor(y.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),x=d(v),w=x.j(g);D(w)||0<w.l(y);)v-=T,x=d(v),w=x.j(g);C(x)&&(x=I),E=E.add(x),y=k(y,w)}return new j(E,y)}n.A=function(y){return $(this,y).h},n.and=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)&y.i(T);return new a(v,this.h&y.h)},n.or=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)|y.i(T);return new a(v,this.h|y.h)},n.xor=function(y){for(var g=Math.max(this.g.length,y.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)^y.i(T);return new a(v,this.h^y.h)};function X(y){for(var g=y.g.length+1,v=[],T=0;T<g;T++)v[T]=y.i(T)<<1|y.i(T-1)>>>31;return new a(v,y.h)}function Z(y,g){var v=g>>5;g%=32;for(var T=y.g.length-v,E=[],x=0;x<T;x++)E[x]=0<g?y.i(x+v)>>>g|y.i(x+v+1)<<32-g:y.i(x+v);return new a(E,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$u=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Dt=a}).apply(typeof ql<"u"?ql:typeof self<"u"?self:typeof window<"u"?window:{});var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zu,Ln,Hu,Xr,qi,Wu,Ku,Gu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fr=="object"&&Fr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var b=o[m];if(!(b in h))break e;h=h[b]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,m=!1,b={next:function(){if(!m&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return m=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function _(o,c,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,m),o.apply(c,b)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,I.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,b,R){for(var V=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)V[ee-2]=arguments[ee];return c.prototype[b].apply(m,V)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function A(o,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(u(m)){const b=o.length||0,R=m.length||0;o.length=b+R;for(let V=0;V<R;V++)o[b+V]=m[V]}else o.push(m)}}class k{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function $(o){return $[" "](o),o}$[" "]=function(){};var X=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Z(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function y(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,m;for(let b=1;b<arguments.length;b++){m=arguments[b];for(h in m)o[h]=m[h];for(let R=0;R<v.length;R++)h=v[R],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function E(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function x(o){l.setTimeout(()=>{throw o},0)}function w(){var o=Ks;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class We{constructor(){this.h=this.g=null}add(c,h){const m=_n.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var _n=new k(()=>new Fd,o=>o.reset());class Fd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let yn,vn=!1,Ks=new We,fa=()=>{const o=l.Promise.resolve(void 0);yn=()=>{o.then(Bd)}};var Bd=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(h){x(h)}var c=_n;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}vn=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var qd=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o})();function wn(o,c){if(ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(X){e:{try{$(c.nodeName);var b=!0;break e}catch{}b=!1}b||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$d[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&wn.aa.h.call(this)}}C(wn,ye);var $d={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var vr="closure_listenable_"+(1e6*Math.random()|0),zd=0;function Hd(o,c,h,m,b){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=b,this.key=++zd,this.da=this.fa=!1}function wr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Tr(o){this.src=o,this.g={},this.h=0}Tr.prototype.add=function(o,c,h,m,b){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var V=Qs(o,c,m,b);return-1<V?(c=o[V],h||(c.fa=!1)):(c=new Hd(c,this.src,R,!!m,b),c.fa=h,o.push(c)),c};function Gs(o,c){var h=c.type;if(h in o.g){var m=o.g[h],b=Array.prototype.indexOf.call(m,c,void 0),R;(R=0<=b)&&Array.prototype.splice.call(m,b,1),R&&(wr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Qs(o,c,h,m){for(var b=0;b<o.length;++b){var R=o[b];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==m)return b}return-1}var Js="closure_lm_"+(1e6*Math.random()|0),Ys={};function pa(o,c,h,m,b){if(Array.isArray(c)){for(var R=0;R<c.length;R++)pa(o,c[R],h,m,b);return null}return h=_a(h),o&&o[vr]?o.K(c,h,d(m)?!!m.capture:!1,b):Wd(o,c,h,!1,m,b)}function Wd(o,c,h,m,b,R){if(!c)throw Error("Invalid event type");var V=d(b)?!!b.capture:!!b,ee=Zs(o);if(ee||(o[Js]=ee=new Tr(o)),h=ee.add(c,h,m,V,R),h.proxy)return h;if(m=Kd(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)qd||(b=V),b===void 0&&(b=!1),o.addEventListener(c.toString(),m,b);else if(o.attachEvent)o.attachEvent(ga(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Kd(){function o(h){return c.call(o.src,o.listener,h)}const c=Gd;return o}function ma(o,c,h,m,b){if(Array.isArray(c))for(var R=0;R<c.length;R++)ma(o,c[R],h,m,b);else m=d(m)?!!m.capture:!!m,h=_a(h),o&&o[vr]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=Qs(R,h,m,b),-1<h&&(wr(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=Zs(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Qs(c,h,m,b)),(h=-1<o?c[o]:null)&&Xs(h))}function Xs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[vr])Gs(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(ga(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Zs(c))?(Gs(h,o),h.h==0&&(h.src=null,c[Js]=null)):wr(o)}}}function ga(o){return o in Ys?Ys[o]:Ys[o]="on"+o}function Gd(o,c){if(o.da)o=!0;else{c=new wn(c,this);var h=o.listener,m=o.ha||o.src;o.fa&&Xs(o),o=h.call(m,c)}return o}function Zs(o){return o=o[Js],o instanceof Tr?o:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function _a(o){return typeof o=="function"?o:(o[ei]||(o[ei]=function(c){return o.handleEvent(c)}),o[ei])}function ve(){it.call(this),this.i=new Tr(this),this.M=this,this.F=null}C(ve,it),ve.prototype[vr]=!0,ve.prototype.removeEventListener=function(o,c,h,m){ma(this,o,c,h,m)};function Ae(o,c){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new ye(c,o);else if(c instanceof ye)c.target=c.target||o;else{var b=c;c=new ye(m,o),T(c,b)}if(b=!0,h)for(var R=h.length-1;0<=R;R--){var V=c.g=h[R];b=Er(V,m,!0,c)&&b}if(V=c.g=o,b=Er(V,m,!0,c)&&b,b=Er(V,m,!1,c)&&b,h)for(R=0;R<h.length;R++)V=c.g=h[R],b=Er(V,m,!1,c)&&b}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],m=0;m<h.length;m++)wr(h[m]);delete o.g[c],o.h--}}this.F=null},ve.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},ve.prototype.L=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function Er(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var b=!0,R=0;R<c.length;++R){var V=c[R];if(V&&!V.da&&V.capture==h){var ee=V.listener,fe=V.ha||V.src;V.fa&&Gs(o.i,V),b=ee.call(fe,m)!==!1&&b}}return b&&!m.defaultPrevented}function ya(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function va(o){o.g=ya(()=>{o.g=null,o.i&&(o.i=!1,va(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Qd extends it{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:va(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tn(o){it.call(this),this.h=o,this.g={}}C(Tn,it);var wa=[];function Ta(o){Z(o.g,function(c,h){this.g.hasOwnProperty(h)&&Xs(c)},o),o.g={}}Tn.prototype.N=function(){Tn.aa.N.call(this),Ta(this)},Tn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=l.JSON.stringify,Jd=l.JSON.parse,Yd=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ni(){}ni.prototype.h=null;function Ea(o){return o.h||(o.h=o.i())}function Ia(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ri(){ye.call(this,"d")}C(ri,ye);function si(){ye.call(this,"c")}C(si,ye);var xt={},ba=null;function Ir(){return ba=ba||new ve}xt.La="serverreachability";function xa(o){ye.call(this,xt.La,o)}C(xa,ye);function In(o){const c=Ir();Ae(c,new xa(c))}xt.STAT_EVENT="statevent";function Aa(o,c){ye.call(this,xt.STAT_EVENT,o),this.stat=c}C(Aa,ye);function Re(o){const c=Ir();Ae(c,new Aa(c,o))}xt.Ma="timingevent";function Ra(o,c){ye.call(this,xt.Ma,o),this.size=c}C(Ra,ye);function bn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function Xd(o,c,h,m,b,R){o.info(function(){if(o.g)if(R)for(var V="",ee=R.split("&"),fe=0;fe<ee.length;fe++){var Q=ee[fe].split("=");if(1<Q.length){var we=Q[0];Q=Q[1];var Te=we.split("_");V=2<=Te.length&&Te[1]=="type"?V+(we+"="+Q+"&"):V+(we+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+m+") [attempt "+b+"]: "+c+`
`+h+`
`+V})}function Zd(o,c,h,m,b,R,V){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+b+"]: "+c+`
`+h+`
`+R+" "+V})}function Ht(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+tf(o,h)+(m?" "+m:"")})}function ef(o,c){o.info(function(){return"TIMEOUT: "+c})}xn.prototype.info=function(){};function tf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var b=m[1];if(Array.isArray(b)&&!(1>b.length)){var R=b[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<b.length;V++)b[V]=""}}}}return ti(h)}catch{return c}}var br={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ii;function xr(){}C(xr,ni),xr.prototype.g=function(){return new XMLHttpRequest},xr.prototype.i=function(){return{}},ii=new xr;function ot(o,c,h,m){this.j=o,this.i=c,this.l=h,this.R=m||1,this.U=new Tn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ca}function Ca(){this.i=null,this.g="",this.h=!1}var Na={},oi={};function ai(o,c,h){o.L=1,o.v=Cr(Ke(c)),o.m=h,o.P=!0,Pa(o,null)}function Pa(o,c){o.F=Date.now(),Ar(o),o.A=Ke(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Ha(h.i,"t",m),o.C=0,h=o.j.J,o.h=new Ca,o.g=cl(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Qd(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,m=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(wa[0]=b.toString()),b=wa);for(var R=0;R<b.length;R++){var V=pa(h,b[R],m||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),In(),Xd(o.i,o.u,o.A,o.l,o.R,o.m)}ot.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ge(o)==3?c.j():this.Y(o)},ot.prototype.Y=function(o){try{if(o==this.g)e:{const Te=Ge(this.g);var c=this.g.Ba();const Gt=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Xa(this.g)))){this.J||Te!=4||c==7||(c==8||0>=Gt?In(3):In(2)),li(this);var h=this.g.Z();this.X=h;t:if(ka(this)){var m=Xa(this.g);o="";var b=m.length,R=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){At(this),An(this);var V="";break t}this.h.i=new l.TextDecoder}for(c=0;c<b;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(R&&c==b-1)});m.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,Zd(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,fe=this.g;if((ee=fe.g?fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ee)){var Q=ee;break t}}Q=null}if(h=Q)Ht(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ci(this,h);else{this.o=!1,this.s=3,Re(12),At(this),An(this);break e}}if(this.P){h=!0;let Ve;for(;!this.J&&this.C<V.length;)if(Ve=nf(this,V),Ve==oi){Te==4&&(this.s=4,Re(14),h=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(Ve==Na){this.s=4,Re(15),Ht(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else Ht(this.i,this.l,Ve,null),ci(this,Ve);if(ka(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||V.length!=0||this.h.h||(this.s=1,Re(16),h=!1),this.o=this.o&&h,!h)Ht(this.i,this.l,V,"[Invalid Chunked Response]"),At(this),An(this);else if(0<V.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),mi(we),we.M=!0,Re(11))}}else Ht(this.i,this.l,V,null),ci(this,V);Te==4&&At(this),this.o&&!this.J&&(Te==4?il(this.j,this):(this.o=!1,Ar(this)))}else wf(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),At(this),An(this)}}}catch{}finally{}};function ka(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function nf(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?oi:(h=Number(c.substring(h,m)),isNaN(h)?Na:(m+=1,m+h>c.length?oi:(c=c.slice(m,m+h),o.C=m+h,c)))}ot.prototype.cancel=function(){this.J=!0,At(this)};function Ar(o){o.S=Date.now()+o.I,Da(o,o.I)}function Da(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=bn(I(o.ba,o),c)}function li(o){o.B&&(l.clearTimeout(o.B),o.B=null)}ot.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ef(this.i,this.A),this.L!=2&&(In(),Re(17)),At(this),this.s=2,An(this)):Da(this,this.S-o)};function An(o){o.j.G==0||o.J||il(o.j,o)}function At(o){li(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ta(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ci(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ui(h.h,o))){if(!o.K&&ui(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var b=m;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Or(h),Dr(h);else break e;pi(h),Re(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=bn(I(h.Za,h),6e3));if(1>=Ma(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else St(h,11)}else if((o.K||h.g==o)&&Or(h),!L(c))for(b=h.Da.g.parse(c),c=0;c<b.length;c++){let Q=b[c];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const we=Q[3];we!=null&&(h.la=we,h.j.info("VER="+h.la));const Te=Q[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const Gt=Q[5];Gt!=null&&typeof Gt=="number"&&0<Gt&&(m=1.5*Gt,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Ve=o.g;if(Ve){const Lr=Ve.g?Ve.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Lr){var R=m.h;R.g||Lr.indexOf("spdy")==-1&&Lr.indexOf("quic")==-1&&Lr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(hi(R,R.h),R.h=null))}if(m.D){const gi=Ve.g?Ve.g.getResponseHeader("X-HTTP-Session-Id"):null;gi&&(m.ya=gi,te(m.I,m.D,gi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var V=o;if(m.qa=ll(m,m.J?m.ia:null,m.W),V.K){La(m.h,V);var ee=V,fe=m.L;fe&&(ee.I=fe),ee.B&&(li(ee),Ar(ee)),m.g=V}else rl(m);0<h.i.length&&Vr(h)}else Q[0]!="stop"&&Q[0]!="close"||St(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?St(h,7):fi(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}In(4)}catch{}}var rf=class{constructor(o,c){this.g=o,this.map=c}};function Va(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ma(o){return o.h?1:o.g?o.g.size:0}function ui(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function hi(o,c){o.g?o.g.add(c):o.h=c}function La(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Va.prototype.cancel=function(){if(this.i=ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ja(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function sf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,m=0;m<h;m++)c.push(o[m]);return c}c=[],h=0;for(m in o)c[h++]=o[m];return c}function of(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const m in o)c[h++]=m;return c}}}function Ua(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=of(o),m=sf(o),b=m.length,R=0;R<b;R++)c.call(void 0,m[R],h&&h[R],o)}var Fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function af(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),b=null;if(0<=m){var R=o[h].substring(0,m);b=o[h].substring(m+1)}else R=o[h];c(R,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Rt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Rt){this.h=o.h,Rr(this,o.j),this.o=o.o,this.g=o.g,Sr(this,o.s),this.l=o.l;var c=o.i,h=new Cn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Ba(this,h),this.m=o.m}else o&&(c=String(o).match(Fa))?(this.h=!1,Rr(this,c[1]||"",!0),this.o=Rn(c[2]||""),this.g=Rn(c[3]||"",!0),Sr(this,c[4]),this.l=Rn(c[5]||"",!0),Ba(this,c[6]||"",!0),this.m=Rn(c[7]||"")):(this.h=!1,this.i=new Cn(null,this.h))}Rt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Sn(c,qa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Sn(c,qa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Sn(h,h.charAt(0)=="/"?uf:cf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Sn(h,df)),o.join("")};function Ke(o){return new Rt(o)}function Rr(o,c,h){o.j=h?Rn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Sr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ba(o,c,h){c instanceof Cn?(o.i=c,ff(o.i,o.h)):(h||(c=Sn(c,hf)),o.i=new Cn(c,o.h))}function te(o,c,h){o.i.set(c,h)}function Cr(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Rn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Sn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,lf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function lf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var qa=/[#\/\?@]/g,cf=/[#\?:]/g,uf=/[#\?]/g,hf=/[#\?@]/g,df=/#/g;function Cn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function at(o){o.g||(o.g=new Map,o.h=0,o.i&&af(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Cn.prototype,n.add=function(o,c){at(this),this.i=null,o=Wt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function $a(o,c){at(o),c=Wt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function za(o,c){return at(o),c=Wt(o,c),o.g.has(c)}n.forEach=function(o,c){at(this),this.g.forEach(function(h,m){h.forEach(function(b){o.call(c,b,m,this)},this)},this)},n.na=function(){at(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const b=o[m];for(let R=0;R<b.length;R++)h.push(c[m])}return h},n.V=function(o){at(this);let c=[];if(typeof o=="string")za(this,o)&&(c=c.concat(this.g.get(Wt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return at(this),this.i=null,o=Wt(this,o),za(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ha(o,c,h){$a(o,c),0<h.length&&(o.i=null,o.g.set(Wt(o,c),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const R=encodeURIComponent(String(m)),V=this.V(m);for(m=0;m<V.length;m++){var b=R;V[m]!==""&&(b+="="+encodeURIComponent(String(V[m]))),o.push(b)}}return this.i=o.join("&")};function Wt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function ff(o,c){c&&!o.j&&(at(o),o.i=null,o.g.forEach(function(h,m){var b=m.toLowerCase();m!=b&&($a(this,m),Ha(this,b,h))},o)),o.j=c}function pf(o,c){const h=new xn;if(l.Image){const m=new Image;m.onload=S(lt,h,"TestLoadImage: loaded",!0,c,m),m.onerror=S(lt,h,"TestLoadImage: error",!1,c,m),m.onabort=S(lt,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=S(lt,h,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function mf(o,c){const h=new xn,m=new AbortController,b=setTimeout(()=>{m.abort(),lt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(R=>{clearTimeout(b),R.ok?lt(h,"TestPingServer: ok",!0,c):lt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),lt(h,"TestPingServer: error",!1,c)})}function lt(o,c,h,m,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),m(h)}catch{}}function gf(){this.g=new Yd}function _f(o,c,h){const m=h||"";try{Ua(o,function(b,R){let V=b;d(b)&&(V=ti(b)),c.push(m+R+"="+encodeURIComponent(V))})}catch(b){throw c.push(m+"type="+encodeURIComponent("_badmap")),b}}function Nr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Nr,ni),Nr.prototype.g=function(){return new Pr(this.l,this.j)},Nr.prototype.i=(function(o){return function(){return o}})({});function Pr(o,c){ve.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Pr,ve),n=Pr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Pn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Nn(this):Pn(this),this.readyState==3&&Wa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Nn(this))},n.Qa=function(o){this.g&&(this.response=o,Nn(this))},n.ga=function(){this.g&&Nn(this)};function Nn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Pn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Pn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ka(o){let c="";return Z(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function di(o,c,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Ka(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,c,h))}function ie(o){ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ie,ve);var yf=/^https?$/i,vf=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?Ea(this.o):Ea(ii),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Ga(this,R);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var b in m)h.set(b,m[b]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())h.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(vf,c,void 0))||m||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of h)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ya(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Ga(this,R)}};function Ga(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Qa(o),kr(o)}function Qa(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),kr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kr(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ja(this):this.bb())},n.bb=function(){Ja(this)};function Ja(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ge(o)!=4||o.Z()!=2)){if(o.u&&Ge(o)==4)ya(o.Ea,0,o);else if(Ae(o,"readystatechange"),Ge(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var m;if(m=V===0){var b=String(o.D).match(Fa)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),m=!yf.test(b?b.toLowerCase():"")}h=m}if(h)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var R=2<Ge(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Qa(o)}}finally{kr(o)}}}}function kr(o,c){if(o.g){Ya(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ae(o,"ready");try{h.onreadystatechange=m}catch{}}}function Ya(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ge(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Jd(c)}};function Xa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wf(o){const c={};o=(o.g&&2<=Ge(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(L(o[m]))continue;var h=E(o[m]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[b]||[];c[b]=R,R.push(h)}y(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Za(o){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kn("baseRetryDelayMs",5e3,o),this.cb=kn("retryDelaySeedMs",1e4,o),this.Wa=kn("forwardChannelMaxRetries",2,o),this.wa=kn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Va(o&&o.concurrentRequestLimit),this.Da=new gf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Za.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,m){Re(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=ll(this,null,this.W),Vr(this)};function fi(o){if(el(o),o.G==3){var c=o.U++,h=Ke(o.I);if(te(h,"SID",o.K),te(h,"RID",c),te(h,"TYPE","terminate"),Dn(o,h),c=new ot(o,o.j,c),c.L=2,c.v=Cr(Ke(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=cl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ar(c)}al(o)}function Dr(o){o.g&&(mi(o),o.g.cancel(),o.g=null)}function el(o){Dr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Or(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Vr(o){if(!Oa(o.h)&&!o.s){o.s=!0;var c=o.Ga;yn||fa(),vn||(yn(),vn=!0),Ks.add(c,o),o.B=0}}function Tf(o,c){return Ma(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=bn(I(o.Ga,o,c),ol(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new ot(this,this.j,o);let R=this.o;if(this.S&&(R?(R=g(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(b.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=nl(this,b,c),h=Ke(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),Dn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(Ka(R)))+"&"+c:this.m&&di(h,this.m,R)),hi(this.h,b),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",c),te(h,"SID","null"),b.T=!0,ai(b,h,null)):ai(b,h,c),this.G=2}}else this.G==3&&(o?tl(this,o):this.i.length==0||Oa(this.h)||tl(this))};function tl(o,c){var h;c?h=c.l:h=o.U++;const m=Ke(o.I);te(m,"SID",o.K),te(m,"RID",h),te(m,"AID",o.T),Dn(o,m),o.m&&o.o&&di(m,o.m,o.o),h=new ot(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=nl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),hi(o.h,h),ai(h,m,c)}function Dn(o,c){o.H&&Z(o.H,function(h,m){te(c,m,h)}),o.l&&Ua({},function(h,m){te(c,m,h)})}function nl(o,c,h){h=Math.min(o.i.length,h);var m=o.l?I(o.l.Na,o.l,o):null;e:{var b=o.i;let R=-1;for(;;){const V=["count="+h];R==-1?0<h?(R=b[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let ee=!0;for(let fe=0;fe<h;fe++){let Q=b[fe].g;const we=b[fe].map;if(Q-=R,0>Q)R=Math.max(0,b[fe].g-100),ee=!1;else try{_f(we,V,"req"+Q+"_")}catch{m&&m(we)}}if(ee){m=V.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,m}function rl(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;yn||fa(),vn||(yn(),vn=!0),Ks.add(c,o),o.v=0}}function pi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=bn(I(o.Fa,o),ol(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,sl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=bn(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),Dr(this),sl(this))};function mi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function sl(o){o.g=new ot(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ke(o.qa);te(c,"RID","rpc"),te(c,"SID",o.K),te(c,"AID",o.T),te(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(c,"TO",o.ja),te(c,"TYPE","xmlhttp"),Dn(o,c),o.m&&o.o&&di(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Cr(Ke(c)),h.m=null,h.P=!0,Pa(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Dr(this),pi(this),Re(19))};function Or(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function il(o,c){var h=null;if(o.g==c){Or(o),mi(o),o.g=null;var m=2}else if(ui(o.h,c))h=c.D,La(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var b=o.B;m=Ir(),Ae(m,new Ra(m,h)),Vr(o)}else rl(o);else if(b=c.s,b==3||b==0&&0<c.X||!(m==1&&Tf(o,c)||m==2&&pi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),b){case 1:St(o,5);break;case 4:St(o,10);break;case 3:St(o,6);break;default:St(o,2)}}}function ol(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function St(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),m=o.Xa;const b=!m;m=new Rt(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Rr(m,"https"),Cr(m),b?pf(m.toString(),h):mf(m.toString(),h)}else Re(2);o.G=0,o.l&&o.l.sa(c),al(o),el(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function al(o){if(o.G=0,o.ka=[],o.l){const c=ja(o.h);(c.length!=0||o.i.length!=0)&&(A(o.ka,c),A(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function ll(o,c,h){var m=h instanceof Rt?Ke(h):new Rt(h);if(m.g!="")c&&(m.g=c+"."+m.g),Sr(m,m.s);else{var b=l.location;m=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;var R=new Rt(null);m&&Rr(R,m),c&&(R.g=c),b&&Sr(R,b),h&&(R.l=h),m=R}return h=o.D,c=o.ya,h&&c&&te(m,h,c),te(m,"VER",o.la),Dn(o,m),m}function cl(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ie(new Nr({eb:h})):new ie(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ul(){}n=ul.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Mr(){}Mr.prototype.g=function(o,c){return new Pe(o,c)};function Pe(o,c){ve.call(this),this.g=new Za(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!L(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Kt(this)}C(Pe,ve),Pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){fi(this.g)},Pe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ti(o),o=h);c.i.push(new rf(c.Ya++,o)),c.G==3&&Vr(c)},Pe.prototype.N=function(){this.g.l=null,delete this.j,fi(this.g),delete this.g,Pe.aa.N.call(this)};function hl(o){ri.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(hl,ri);function dl(){si.call(this),this.status=1}C(dl,si);function Kt(o){this.g=o}C(Kt,ul),Kt.prototype.ua=function(){Ae(this.g,"a")},Kt.prototype.ta=function(o){Ae(this.g,new hl(o))},Kt.prototype.sa=function(o){Ae(this.g,new dl)},Kt.prototype.ra=function(){Ae(this.g,"b")},Mr.prototype.createWebChannel=Mr.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,Gu=function(){return new Mr},Ku=function(){return Ir()},Wu=xt,qi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},br.NO_ERROR=0,br.TIMEOUT=8,br.HTTP_ERROR=6,Xr=br,Sa.COMPLETE="complete",Hu=Sa,Ia.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",ve.prototype.listen=ve.prototype.K,Ln=Ia,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,zu=ie}).apply(typeof Fr<"u"?Fr:typeof self<"u"?self:typeof window<"u"?window:{});const $l="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new oo("@firebase/firestore");function Vn(){return jt.logLevel}function M(n,...e){if(jt.logLevel<=K.DEBUG){const t=e.map(vo);jt.debug(`Firestore (${fn}): ${n}`,...t)}}function rt(n,...e){if(jt.logLevel<=K.ERROR){const t=e.map(vo);jt.error(`Firestore (${fn}): ${n}`,...t)}}function rn(n,...e){if(jt.logLevel<=K.WARN){const t=e.map(vo);jt.warn(`Firestore (${fn}): ${n}`,...t)}}function vo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n="Unexpected state"){const e=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: `+n;throw rt(e),new Error(e)}function Y(n,e){n||q()}function H(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends He{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ie.UNAUTHENTICATED)))}shutdown(){}}class S_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class C_{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new Qu(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ie(e)}}class N_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class P_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new N_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class k_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Y(this.o===void 0);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Y(typeof t.token=="string"),this.R=t.token,new k_(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=V_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function sn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new he(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new he(0,0))}static max(){return new z(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(),r===void 0?r=e.length-t:r>e.length-t&&q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xn?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends Xn{construct(e,t,r){return new ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ne(t)}static emptyPath(){return new ne([])}}const O_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends Xn{construct(e,t,r){return new me(e,t,r)}static isValidIdentifier(e){return O_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new O(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new O(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ne.fromString(e))}static fromName(e){return new U(ne.fromString(e).popFirst(5))}static empty(){return new U(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ne(e.slice()))}}function M_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new wt(s,U.empty(),e)}function L_(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(z.min(),U.empty(),-1)}static max(){return new wt(z.max(),U.empty(),-1)}}function j_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class F_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==U_)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,r)=>{t(e)}))}static reject(e){return new P(((t,r)=>{r(e)}))}static waitFor(e){return new P(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next((s=>s?P.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new P(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((p=>{a[d]=p,++l,l===i&&r(a)}),(p=>s(p)))}}))}static doWhile(e,t){return new P(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function B_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function dr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wo.oe=-1;function Rs(n){return n==null}function ds(n){return n===0&&1/n==-1/0}function q_(n){return typeof n=="number"&&Number.isInteger(n)&&!ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $t(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||pe.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pe.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}}class Br{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??pe.RED,this.left=s??pe.EMPTY,this.right=i??pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new pe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return pe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}pe.EMPTY=null,pe.RED=!0,pe.BLACK=!1;pe.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,r,s,i){return this}insert(e,t,r){return new pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hl(this.data.getIterator())}getIteratorFrom(e){return new Hl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class Hl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new ke([])}unionWith(e){let t=new ge(me.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Xu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xu("Invalid base64 string: "+i):i}})(e);return new _e(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const $_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tt(n){if(Y(!!n),typeof n=="string"){let e=0;const t=$_.exec(n);if(Y(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ut(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Eo(n){const e=n.mapValue.fields.__previous_value__;return To(e)?Eo(e):e}function Zn(n){const e=Tt(n.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,r,s,i,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class er{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof er&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr={mapValue:{}};function Ft(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?To(n)?4:W_(n)?9007199254740991:H_(n)?10:11:q()}function ze(n,e){if(n===e)return!0;const t=Ft(n);if(t!==Ft(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zn(n).isEqual(Zn(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Tt(s.timestampValue),l=Tt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Ut(s.bytesValue).isEqual(Ut(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=le(s.doubleValue),l=le(i.doubleValue);return a===l?ds(a)===ds(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return sn(n.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(zl(a)!==zl(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ze(a[u],l[u])))return!1;return!0})(n,e);default:return q()}}function tr(n,e){return(n.values||[]).find((t=>ze(t,e)))!==void 0}function on(n,e){if(n===e)return 0;const t=Ft(n),r=Ft(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=le(i.integerValue||i.doubleValue),u=le(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return Wl(n.timestampValue,e.timestampValue);case 4:return Wl(Zn(n),Zn(e));case 5:return J(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Ut(i),u=Ut(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=J(l[d],u[d]);if(p!==0)return p}return J(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=J(le(i.latitude),le(a.latitude));return l!==0?l:J(le(i.longitude),le(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Kl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var l,u,d,p;const _=i.fields||{},I=a.fields||{},S=(l=_.value)===null||l===void 0?void 0:l.arrayValue,C=(u=I.value)===null||u===void 0?void 0:u.arrayValue,D=J(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:Kl(S,C)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===qr.mapValue&&a===qr.mapValue)return 0;if(i===qr.mapValue)return 1;if(a===qr.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let _=0;_<u.length&&_<p.length;++_){const I=J(u[_],p[_]);if(I!==0)return I;const S=on(l[u[_]],d[p[_]]);if(S!==0)return S}return J(u.length,p.length)})(n.mapValue,e.mapValue);default:throw q()}}function Wl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Tt(n),r=Tt(e),s=J(t.seconds,r.seconds);return s!==0?s:J(t.nanos,r.nanos)}function Kl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=on(t[s],r[s]);if(i)return i}return J(t.length,r.length)}function an(n){return $i(n)}function $i(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Tt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ut(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return U.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=$i(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${$i(t.fields[a])}`;return s+"}"})(n.mapValue):q()}function Gl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function zi(n){return!!n&&"integerValue"in n}function Io(n){return!!n&&"arrayValue"in n}function Ql(n){return!!n&&"nullValue"in n}function Jl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zr(n){return!!n&&"mapValue"in n}function H_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function zn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $t(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=zn(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function W_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zn(t)}setAll(e){let t=me.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=zn(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Zr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ze(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Zr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){$t(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ne(zn(this.value))}}function Zu(n){const e=[];return $t(n.fields,((t,r)=>{const s=new me([t]);if(Zr(r)){const i=Zu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new be(e,0,z.min(),z.min(),z.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,s){return new be(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new be(e,2,t,z.min(),z.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,z.min(),z.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fs{constructor(e,t){this.position=e,this.inclusive=t}}function Yl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=on(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ze(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class nr{constructor(e,t="asc"){this.field=e,this.dir=t}}function K_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class eh{}class ue extends eh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Q_(e,t,r):t==="array-contains"?new X_(e,r):t==="in"?new Z_(e,r):t==="not-in"?new ey(e,r):t==="array-contains-any"?new ty(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new J_(e,r):new Y_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(on(t,this.value)):t!==null&&Ft(this.value)===Ft(t)&&this.matchesComparison(on(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class je extends eh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new je(e,t)}matches(e){return th(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function th(n){return n.op==="and"}function nh(n){return G_(n)&&th(n)}function G_(n){for(const e of n.filters)if(e instanceof je)return!1;return!0}function Hi(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+an(n.value);if(nh(n))return n.filters.map((e=>Hi(e))).join(",");{const e=n.filters.map((t=>Hi(t))).join(",");return`${n.op}(${e})`}}function rh(n,e){return n instanceof ue?(function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&ze(r.value,s.value)})(n,e):n instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&rh(a,s.filters[l])),!0):!1})(n,e):void q()}function sh(n){return n instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${an(t.value)}`})(n):n instanceof je?(function(t){return t.op.toString()+" {"+t.getFilters().map(sh).join(" ,")+"}"})(n):"Filter"}class Q_ extends ue{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class J_ extends ue{constructor(e,t){super(e,"in",t),this.keys=ih("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Y_ extends ue{constructor(e,t){super(e,"not-in",t),this.keys=ih("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ih(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>U.fromName(r.referenceValue)))}class X_ extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Io(t)&&tr(t.arrayValue,this.value)}}class Z_ extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tr(this.value.arrayValue,t)}}class ey extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!tr(this.value.arrayValue,t)}}class ty extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Io(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>tr(this.value.arrayValue,r)))}}/**
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
 */class ny{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Zl(n,e=null,t=[],r=[],s=null,i=null,a=null){return new ny(n,e,t,r,s,i,a)}function bo(n){const e=H(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Hi(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Rs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>an(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>an(r))).join(",")),e.ue=t}return e.ue}function xo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!K_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!rh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xl(n.startAt,e.startAt)&&Xl(n.endAt,e.endAt)}function Wi(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ry(n,e,t,r,s,i,a,l){return new pn(n,e,t,r,s,i,a,l)}function Ao(n){return new pn(n)}function ec(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function oh(n){return n.collectionGroup!==null}function Hn(n){const e=H(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ge(me.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new nr(i,r))})),t.has(me.keyField().canonicalString())||e.ce.push(new nr(me.keyField(),r))}return e.ce}function Be(n){const e=H(n);return e.le||(e.le=sy(e,Hn(n))),e.le}function sy(n,e){if(n.limitType==="F")return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new nr(s.field,i)}));const t=n.endAt?new fs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fs(n.startAt.position,n.startAt.inclusive):null;return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ki(n,e){const t=n.filters.concat([e]);return new pn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ps(n,e,t){return new pn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ss(n,e){return xo(Be(n),Be(e))&&n.limitType===e.limitType}function ah(n){return`${bo(Be(n))}|lt:${n.limitType}`}function Qt(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>sh(s))).join(", ")}]`),Rs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>an(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>an(s))).join(",")),`Target(${r})`})(Be(n))}; limitType=${n.limitType})`}function Cs(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Hn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,u){const d=Yl(a,l,u);return a.inclusive?d<=0:d<0})(r.startAt,Hn(r),s)||r.endAt&&!(function(a,l,u){const d=Yl(a,l,u);return a.inclusive?d>=0:d>0})(r.endAt,Hn(r),s))})(n,e)}function iy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lh(n){return(e,t)=>{let r=!1;for(const s of Hn(n)){const i=oy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oy(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):(function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?on(u,d):q()})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$t(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Yu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new se(U.comparator);function st(){return ay}const ch=new se(U.comparator);function jn(...n){let e=ch;for(const t of n)e=e.insert(t.key,t);return e}function uh(n){let e=ch;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Pt(){return Wn()}function hh(){return Wn()}function Wn(){return new mn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ly=new se(U.comparator),cy=new ge(U.comparator);function W(...n){let e=cy;for(const t of n)e=e.add(t);return e}const uy=new ge(J);function hy(){return uy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(e)?"-0":e}}function dh(n){return{integerValue:""+n}}function dy(n,e){return q_(e)?dh(e):Ro(n,e)}/**
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
 */class Ns{constructor(){this._=void 0}}function fy(n,e,t){return n instanceof rr?(function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&To(i)&&(i=Eo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}})(t,e):n instanceof sr?ph(n,e):n instanceof ir?mh(n,e):(function(s,i){const a=fh(s,i),l=tc(a)+tc(s.Pe);return zi(a)&&zi(s.Pe)?dh(l):Ro(s.serializer,l)})(n,e)}function py(n,e,t){return n instanceof sr?ph(n,e):n instanceof ir?mh(n,e):t}function fh(n,e){return n instanceof ms?(function(r){return zi(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class rr extends Ns{}class sr extends Ns{constructor(e){super(),this.elements=e}}function ph(n,e){const t=gh(e);for(const r of n.elements)t.some((s=>ze(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ir extends Ns{constructor(e){super(),this.elements=e}}function mh(n,e){let t=gh(e);for(const r of n.elements)t=t.filter((s=>!ze(s,r)));return{arrayValue:{values:t}}}class ms extends Ns{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function tc(n){return le(n.integerValue||n.doubleValue)}function gh(n){return Io(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t){this.field=e,this.transform=t}}function gy(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof sr&&s instanceof sr||r instanceof ir&&s instanceof ir?sn(r.elements,s.elements,ze):r instanceof ms&&s instanceof ms?ze(r.Pe,s.Pe):r instanceof rr&&s instanceof rr})(n.transform,e.transform)}class _y{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function es(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ps{}function _h(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new So(n.key,Le.none()):new fr(n.key,n.data,Le.none());{const t=n.data,r=Ne.empty();let s=new ge(me.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new It(n.key,r,new ke(s.toArray()),Le.none())}}function yy(n,e,t){n instanceof fr?(function(s,i,a){const l=s.value.clone(),u=rc(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof It?(function(s,i,a){if(!es(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=rc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(yh(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Kn(n,e,t,r){return n instanceof fr?(function(i,a,l,u){if(!es(i.precondition,a))return l;const d=i.value.clone(),p=sc(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof It?(function(i,a,l,u){if(!es(i.precondition,a))return l;const d=sc(i.fieldTransforms,u,a),p=a.data;return p.setAll(yh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((_=>_.field)))})(n,e,t,r):(function(i,a,l){return es(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function vy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=fh(r.transform,s||null);i!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,i))}return t||null}function nc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&sn(r,s,((i,a)=>gy(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class fr extends Ps{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class It extends Ps{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function rc(n,e,t){const r=new Map;Y(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,py(a,l,t[s]))}return r}function sc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,fy(i,a,e))}return r}class So extends Ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wy extends Ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&yy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=hh();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=_h(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(z.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&sn(this.mutations,e.mutations,((t,r)=>nc(t,r)))&&sn(this.baseMutations,e.baseMutations,((t,r)=>nc(t,r)))}}class Co{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Y(e.mutations.length===r.length);let s=(function(){return ly})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Co(e,t,r,s)}}/**
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
 */class Ey{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Iy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,G;function by(n){switch(n){default:return q();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function vh(n){if(n===void 0)return rt("GRPC error has no .code"),N.UNKNOWN;switch(n){case ce.OK:return N.OK;case ce.CANCELLED:return N.CANCELLED;case ce.UNKNOWN:return N.UNKNOWN;case ce.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case ce.INTERNAL:return N.INTERNAL;case ce.UNAVAILABLE:return N.UNAVAILABLE;case ce.UNAUTHENTICATED:return N.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case ce.NOT_FOUND:return N.NOT_FOUND;case ce.ALREADY_EXISTS:return N.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return N.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case ce.ABORTED:return N.ABORTED;case ce.OUT_OF_RANGE:return N.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return N.UNIMPLEMENTED;case ce.DATA_LOSS:return N.DATA_LOSS;default:return q()}}(G=ce||(ce={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xy(){return new TextEncoder}/**
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
 */const Ay=new Dt([4294967295,4294967295],0);function ic(n){const e=xy().encode(n),t=new $u;return t.update(e),new Uint8Array(t.digest())}function oc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dt([t,r],0),new Dt([s,i],0)]}class No{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Un(`Invalid padding: ${t}`);if(r<0)throw new Un(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Un(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Dt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Dt.fromNumber(r)));return s.compare(Ay)===1&&(s=new Dt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ic(e),[r,s]=oc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new No(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.Ie===0)return;const t=ic(e),[r,s]=oc(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,pr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ks(z.min(),s,new se(J),st(),W())}}class pr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new pr(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class wh{constructor(e,t){this.targetId=e,this.me=t}}class Th{constructor(e,t,r=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ac{constructor(){this.fe=0,this.ge=cc(),this.pe=_e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=W(),t=W(),r=W();return this.ge.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q()}})),new pr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=cc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ry{constructor(e){this.Le=e,this.Be=new Map,this.ke=st(),this.qe=lc(),this.Qe=new se(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:q()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((r,s)=>{this.ze(s)&&t(s)}))}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Wi(i))if(r===0){const a=new U(i.path);this.Ue(t,a,be.newNoDocument(a,z.min()))}else Y(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Ut(r).toUint8Array()}catch(u){if(u instanceof Xu)return rn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new No(a,s,i)}catch(u){return rn(u instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)})),s}rt(e){const t=new Map;this.Be.forEach(((i,a)=>{const l=this.Je(a);if(l){if(i.current&&Wi(l.target)){const u=new U(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,be.newNoDocument(u,e))}i.be&&(t.set(a,i.ve()),i.Ce())}}));let r=W();this.qe.forEach(((i,a)=>{let l=!0;a.forEachWhile((u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ke.forEach(((i,a)=>a.setReadTime(e)));const s=new ks(e,t,this.Qe,this.ke,r);return this.ke=st(),this.qe=lc(),this.Qe=new se(J),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ac,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ge(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ac),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function lc(){return new se(U.comparator)}function cc(){return new se(U.comparator)}const Sy={asc:"ASCENDING",desc:"DESCENDING"},Cy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ny={and:"AND",or:"OR"};class Py{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gi(n,e){return n.useProto3Json||Rs(e)?e:{value:e}}function gs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Eh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ky(n,e){return gs(n,e.toTimestamp())}function qe(n){return Y(!!n),z.fromTimestamp((function(t){const r=Tt(t);return new he(r.seconds,r.nanos)})(n))}function Po(n,e){return Qi(n,e).canonicalString()}function Qi(n,e){const t=(function(s){return new ne(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Ih(n){const e=ne.fromString(n);return Y(Sh(e)),e}function Ji(n,e){return Po(n.databaseId,e.path)}function xi(n,e){const t=Ih(e);if(t.get(1)!==n.databaseId.projectId)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(xh(t))}function bh(n,e){return Po(n.databaseId,e)}function Dy(n){const e=Ih(n);return e.length===4?ne.emptyPath():xh(e)}function Yi(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xh(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function uc(n,e,t){return{name:Ji(n,e),fields:t.value.mapValue.fields}}function Vy(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q()})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,p){return d.useProto3Json?(Y(p===void 0||typeof p=="string"),_e.fromBase64String(p||"")):(Y(p===void 0||p instanceof Buffer||p instanceof Uint8Array),_e.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(d){const p=d.code===void 0?N.UNKNOWN:vh(d.code);return new O(p,d.message||"")})(a);t=new Th(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xi(n,r.document.name),i=qe(r.document.updateTime),a=r.document.createTime?qe(r.document.createTime):z.min(),l=new Ne({mapValue:{fields:r.document.fields}}),u=be.newFoundDocument(s,i,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ts(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xi(n,r.document),i=r.readTime?qe(r.readTime):z.min(),a=be.newNoDocument(s,i),l=r.removedTargetIds||[];t=new ts([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xi(n,r.document),i=r.removedTargetIds||[];t=new ts([],i,s,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Iy(s,i),l=r.targetId;t=new wh(l,a)}}return t}function Oy(n,e){let t;if(e instanceof fr)t={update:uc(n,e.key,e.value)};else if(e instanceof So)t={delete:Ji(n,e.key)};else if(e instanceof It)t={update:uc(n,e.key,e.data),updateMask:zy(e.fieldMask)};else{if(!(e instanceof wy))return q();t={verify:Ji(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof sr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ir)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ms)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw q()})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ky(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()})(n,e.precondition)),t}function My(n,e){return n&&n.length>0?(Y(e!==void 0),n.map((t=>(function(s,i){let a=s.updateTime?qe(s.updateTime):qe(i);return a.isEqual(z.min())&&(a=qe(i)),new _y(a,s.transformResults||[])})(t,e)))):[]}function Ly(n,e){return{documents:[bh(n,e.path)]}}function jy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=bh(n,s);const i=(function(d){if(d.length!==0)return Rh(je.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((p=>(function(I){return{field:Jt(I.field),direction:By(I.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Gi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{_t:t,parent:s}}function Uy(n){let e=Dy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=(function(_){const I=Ah(_);return I instanceof je&&nh(I)?I.getFilters():[I]})(t.where));let a=[];t.orderBy&&(a=(function(_){return _.map((I=>(function(C){return new nr(Yt(C.field),(function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(I)))})(t.orderBy));let l=null;t.limit&&(l=(function(_){let I;return I=typeof _=="object"?_.value:_,Rs(I)?null:I})(t.limit));let u=null;t.startAt&&(u=(function(_){const I=!!_.before,S=_.values||[];return new fs(S,I)})(t.startAt));let d=null;return t.endAt&&(d=(function(_){const I=!_.before,S=_.values||[];return new fs(S,I)})(t.endAt)),ry(e,s,a,i,l,"F",u,d)}function Fy(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ah(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Yt(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yt(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yt(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yt(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}})(n):n.fieldFilter!==void 0?(function(t){return ue.create(Yt(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return je.create(t.compositeFilter.filters.map((r=>Ah(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}})(t.compositeFilter.op))})(n):q()}function By(n){return Sy[n]}function qy(n){return Cy[n]}function $y(n){return Ny[n]}function Jt(n){return{fieldPath:n.canonicalString()}}function Yt(n){return me.fromServerFormat(n.fieldPath)}function Rh(n){return n instanceof ue?(function(t){if(t.op==="=="){if(Jl(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NAN"}};if(Ql(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jl(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NAN"}};if(Ql(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(t.field),op:qy(t.op),value:t.value}}})(n):n instanceof je?(function(t){const r=t.getFilters().map((s=>Rh(s)));return r.length===1?r[0]:{compositeFilter:{op:$y(t.op),filters:r}}})(n):q()}function zy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t,r,s,i=z.min(),a=z.min(),l=_e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.ct=e}}function Wy(n){const e=Uy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ps(e,e.limit,"L"):e}/**
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
 */class Ky{constructor(){this.un=new Gy}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(wt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Gy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ge(ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ge(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ln(0)}static kn(){return new ln(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.changes=new mn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Kn(r.mutation,s,ke.empty(),he.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,W()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=W()){const s=Pt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=jn();return i.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Pt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,W())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=st();const a=Wn(),l=(function(){return Wn()})();return t.forEach(((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof It)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Kn(p.mutation,d,p.mutation.getFieldMask(),he.now())):a.set(d.key,ke.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>{var _;return l.set(d,new Jy(p,(_=a.get(d))!==null&&_!==void 0?_:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=Wn();let s=new se(((a,l)=>a-l)),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||ke.empty();p=l.applyToLocalView(d,p),r.set(u,p);const _=(s.get(l.batchId)||W()).add(u);s=s.insert(l.batchId,_)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,_=hh();p.forEach((I=>{if(!i.has(I)){const S=_h(t.get(I),r.get(I));S!==null&&_.set(I,S),i=i.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return P.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(Pt());let l=-1,u=i;return a.next((d=>P.forEach(d,((p,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next((I=>{u=u.insert(p,I)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,W()))).next((p=>({batchId:l,changes:uh(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next((r=>{let s=jn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=jn();return this.indexManager.getCollectionParents(e,i).next((l=>P.forEach(l,(u=>{const d=(function(_,I){return new pn(I,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((p=>{p.forEach(((_,I)=>{a=a.insert(_,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,be.newInvalidDocument(p)))}));let l=jn();return a.forEach(((u,d)=>{const p=i.get(u);p!==void 0&&Kn(p.mutation,d,ke.empty(),he.now()),Cs(t,d)&&(l=l.insert(u,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:qe(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(s){return{name:s.name,query:Wy(s.bundledQuery),readTime:qe(s.readTime)}})(t)),P.resolve()}}/**
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
 */class Zy{constructor(){this.overlays=new se(U.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Pt();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.ht(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=Pt(),i=t.length+1,a=new U(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Pt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Pt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,p)=>l.set(d,p))),!(l.size()>=s)););return P.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ey(t,r));let i=this.Ir.get(t);i===void 0&&(i=W(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
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
 */class ev{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.Tr=new ge(de.Er),this.dr=new ge(de.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new de(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Vr(new de(e,t))}mr(e,t){e.forEach((r=>this.removeReference(r,t)))}gr(e){const t=new U(new ne([])),r=new de(t,e),s=new de(t,e+1),i=[];return this.dr.forEachInRange([r,s],(a=>{this.Vr(a),i.push(a.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new U(new ne([])),r=new de(t,e),s=new de(t,e+1);let i=W();return this.dr.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new de(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return U.comparator(e.key,t.key)||J(e.wr,t.wr)}static Ar(e,t){return J(e.wr,t.wr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ge(de.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ty(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new de(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),s=new de(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],(a=>{const l=this.Dr(a.wr);i.push(l)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ge(J);return t.forEach((s=>{const i=new de(s,0),a=new de(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],(l=>{r=r.add(l.wr)}))})),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const a=new de(new U(i),0);let l=new ge(J);return this.br.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)}),a),P.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach((r=>{const s=this.Dr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Y(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,(s=>{const i=new de(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.br=r}))}On(e){}containsKey(e,t){const r=new de(t,0),s=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.Mr=e,this.docs=(function(){return new se(U.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():be.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=st();const a=t.path,l=new U(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||j_(L_(p),r)<=0||(s.has(p.key)||Cs(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){q()}Or(e,t){return P.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new rv(this)}getSize(e){return P.resolve(this.size)}}class rv extends Qy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)})),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.persistence=e,this.Nr=new mn((t=>bo(t)),xo),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ko,this.targetCount=0,this.kr=ln.Bn()}forEachTarget(e,t){return this.Nr.forEach(((r,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ln(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),P.waitFor(i).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t){this.qr={},this.overlays={},this.Qr=new wo(0),this.Kr=!1,this.Kr=!0,this.$r=new ev,this.referenceDelegate=e(this),this.Ur=new sv(this),this.indexManager=new Ky,this.remoteDocumentCache=(function(s){return new nv(s)})((r=>this.referenceDelegate.Wr(r))),this.serializer=new Hy(t),this.Gr=new Xy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new tv(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new ov(this.Qr.next());return this.referenceDelegate.zr(),r(s).next((i=>this.referenceDelegate.jr(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Hr(e,t){return P.or(Object.values(this.qr).map((r=>()=>r.containsKey(e,t))))}}class ov extends F_{constructor(e){super(),this.currentSequenceNumber=e}}class Do{constructor(e){this.persistence=e,this.Jr=new ko,this.Yr=null}static Zr(e){return new Do(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((s=>this.Xr.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.Xr.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,(r=>{const s=U.fromPath(r);return this.ei(e,s).next((i=>{i||t.removeEntry(s,z.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vo(e,t.fromCache,r,s)}}/**
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
 */class av{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lv{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return lp()?8:B_(xe())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.Zi(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new av;return this.Xi(e,t,a).next((l=>{if(i.result=l,this.zi)return this.es(e,t,a,l.size)}))})).next((()=>i.result))}es(e,t,r,s){return r.documentReadCount<this.ji?(Vn()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Vn()<=K.DEBUG&&M("QueryEngine","Query:",Qt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vn()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):P.resolve())}Yi(e,t){if(ec(t))return P.resolve(null);let r=Be(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ps(t,null,"F"),r=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=W(...i);return this.Ji.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.ts(t,l);return this.ns(t,d,a,u.readTime)?this.Yi(e,ps(t,null,"F")):this.rs(e,d,t,u)}))))})))))}Zi(e,t,r,s){return ec(t)||s.isEqual(z.min())?P.resolve(null):this.Ji.getDocuments(e,r).next((i=>{const a=this.ts(t,i);return this.ns(t,a,r,s)?P.resolve(null):(Vn()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qt(t)),this.rs(e,a,t,M_(s,-1)).next((l=>l)))}))}ts(e,t){let r=new ge(lh(e));return t.forEach(((s,i)=>{Cs(e,i)&&(r=r.add(i))})),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return Vn()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Qt(t)),this.Ji.getDocumentsMatchingQuery(e,t,wt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new se(J),this._s=new mn((i=>bo(i)),xo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function uv(n,e,t,r){return new cv(n,e,t,r)}async function Ch(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let u=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next((d=>({hs:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function hv(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return(function(l,u,d,p){const _=d.batch,I=_.keys();let S=P.resolve();return I.forEach((C=>{S=S.next((()=>p.getEntry(u,C))).next((D=>{const A=d.docVersions.get(C);Y(A!==null),D.version.compareTo(A)<0&&(_.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(u,_)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let u=W();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Nh(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function dv(n,e){const t=H(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach(((p,_)=>{const I=s.get(_);if(!I)return;l.push(t.Ur.removeMatchingKeys(i,p.removedDocuments,_).next((()=>t.Ur.addMatchingKeys(i,p.addedDocuments,_))));let S=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?S=S.withResumeToken(_e.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(_,S),(function(D,A,k){return D.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0})(I,S,p)&&l.push(t.Ur.updateTargetData(i,S))}));let u=st(),d=W();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))})),l.push(fv(i,a,e.documentUpdates).next((p=>{u=p.Ps,d=p.Is}))),!r.isEqual(z.min())){const p=t.Ur.getLastRemoteSnapshotVersion(i).next((_=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(p)}return P.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.os=s,i)))}function fv(n,e,t){let r=W(),s=W();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=st();return t.forEach(((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(z.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)})),{Ps:a,Is:s}}))}function pv(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function mv(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Ur.getTargetData(r,e).next((i=>i?(s=i,P.resolve(s)):t.Ur.allocateTargetId(r).next((a=>(s=new mt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r}))}async function Xi(n,e,t){const r=H(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!dr(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function hc(n,e,t){const r=H(n);let s=z.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,p){const _=H(u),I=_._s.get(p);return I!==void 0?P.resolve(_.os.get(I)):_.Ur.getTargetData(d,p)})(r,a,Be(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next((u=>{i=u}))})).next((()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:z.min(),t?i:W()))).next((l=>(gv(r,iy(e),l),{documents:l,Ts:i})))))}function gv(n,e,t){let r=n.us.get(e)||z.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.us.set(e,r)}class dc{constructor(){this.activeTargetIds=hy()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _v{constructor(){this.so=new dc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new dc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yv{_o(e){}shutdown(){}}/**
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
 */class fc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $r=null;function Ai(){return $r===null?$r=(function(){return 268435456+Math.round(2147483648*Math.random())})():$r++,"0x"+$r.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="WebChannelConnection";class Tv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,a){const l=Ai(),u=this.xo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(t,u,d,s).then((p=>(M("RestConnection",`Received RPC '${t}' ${l}: `,p),p)),(p=>{throw rn("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",u,"request:",s),p}))}Lo(t,r,s,i,a,l){return this.Mo(t,r,s,i,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+fn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((i,a)=>t[a]=i)),s&&s.headers.forEach(((i,a)=>t[a]=i))}xo(t,r){const s=vv[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Ai();return new Promise(((a,l)=>{const u=new zu;u.setWithCredentials(!0),u.listenOnce(Hu.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Xr.NO_ERROR:const p=u.getResponseJson();M(Ee,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case Xr.TIMEOUT:M(Ee,`RPC '${e}' ${i} timed out`),l(new O(N.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const _=u.getStatus();if(M(Ee,`RPC '${e}' ${i} failed with status:`,_,"response text:",u.getResponseText()),_>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const C=(function(A){const k=A.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(k)>=0?k:N.UNKNOWN})(S.status);l(new O(C,S.message))}else l(new O(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new O(N.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{M(Ee,`RPC '${e}' ${i} completed.`)}}));const d=JSON.stringify(s);M(Ee,`RPC '${e}' ${i} sending request:`,s),u.send(t,"POST",d,r,15)}))}Bo(e,t,r){const s=Ai(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Gu(),l=Ku(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");M(Ee,`Creating RPC '${e}' stream ${s}: ${p}`,u);const _=a.createWebChannel(p,u);let I=!1,S=!1;const C=new wv({Io:A=>{S?M(Ee,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(I||(M(Ee,`Opening RPC '${e}' stream ${s} transport.`),_.open(),I=!0),M(Ee,`RPC '${e}' stream ${s} sending:`,A),_.send(A))},To:()=>_.close()}),D=(A,k,L)=>{A.listen(k,(j=>{try{L(j)}catch($){setTimeout((()=>{throw $}),0)}}))};return D(_,Ln.EventType.OPEN,(()=>{S||(M(Ee,`RPC '${e}' stream ${s} transport opened.`),C.yo())})),D(_,Ln.EventType.CLOSE,(()=>{S||(S=!0,M(Ee,`RPC '${e}' stream ${s} transport closed`),C.So())})),D(_,Ln.EventType.ERROR,(A=>{S||(S=!0,rn(Ee,`RPC '${e}' stream ${s} transport errored:`,A),C.So(new O(N.UNAVAILABLE,"The operation could not be completed")))})),D(_,Ln.EventType.MESSAGE,(A=>{var k;if(!S){const L=A.data[0];Y(!!L);const j=L,$=j.error||((k=j[0])===null||k===void 0?void 0:k.error);if($){M(Ee,`RPC '${e}' stream ${s} received error:`,$);const X=$.status;let Z=(function(v){const T=ce[v];if(T!==void 0)return vh(T)})(X),y=$.message;Z===void 0&&(Z=N.INTERNAL,y="Unknown error status: "+X+" with message "+$.message),S=!0,C.So(new O(Z,y)),_.close()}else M(Ee,`RPC '${e}' stream ${s} received:`,L),C.bo(L)}})),D(l,Wu.STAT_EVENT,(A=>{A.stat===qi.PROXY?M(Ee,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===qi.NOPROXY&&M(Ee,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.wo()}),0),C}}function Ri(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){return new Py(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,r,s,i,a,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ph(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(rt(t.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.Yo===t&&this.P_(r,s)}),(r=>{e((()=>{const s=new O(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)}))}))}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{r((()=>this.listener.Eo()))})),this.stream.Ro((()=>{r((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((s=>{r((()=>this.I_(s)))})),this.stream.onMessage((s=>{r((()=>++this.e_==1?this.E_(s):this.onNext(s)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ev extends kh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Vy(this.serializer,e),r=(function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?qe(a.readTime):z.min()})(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Yi(this.serializer),t.addTarget=(function(i,a){let l;const u=a.target;if(l=Wi(u)?{documents:Ly(i,u)}:{query:jy(i,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Eh(i,a.resumeToken);const d=Gi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){l.readTime=gs(i,a.snapshotVersion.toTimestamp());const d=Gi(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const r=Fy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Yi(this.serializer),t.removeTarget=e,this.a_(t)}}class Iv extends kh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=My(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Yi(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Oy(this.serializer,r)))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Mo(e,Qi(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(N.UNKNOWN,i.toString())}))}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Lo(e,Qi(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(N.UNKNOWN,a.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class xv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(rt(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((a=>{r.enqueueAndForget((async()=>{zt(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await(async function(u){const d=H(u);d.L_.add(4),await mr(d),d.q_.set("Unknown"),d.L_.delete(4),await Vs(d)})(this))}))})),this.q_=new xv(r,s)}}async function Vs(n){if(zt(n))for(const e of n.B_)await e(!0)}async function mr(n){for(const e of n.B_)await e(!1)}function Dh(n,e){const t=H(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),jo(t)?Lo(t):gn(t).r_()&&Mo(t,e))}function Oo(n,e){const t=H(n),r=gn(t);t.N_.delete(e),r.r_()&&Vh(t,e),t.N_.size===0&&(r.r_()?r.o_():zt(t)&&t.q_.set("Unknown"))}function Mo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gn(n).A_(e)}function Vh(n,e){n.Q_.xe(e),gn(n).R_(e)}function Lo(n){n.Q_=new Ry({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),gn(n).start(),n.q_.v_()}function jo(n){return zt(n)&&!gn(n).n_()&&n.N_.size>0}function zt(n){return H(n).L_.size===0}function Oh(n){n.Q_=void 0}async function Rv(n){n.q_.set("Online")}async function Sv(n){n.N_.forEach(((e,t)=>{Mo(n,e)}))}async function Cv(n,e){Oh(n),jo(n)?(n.q_.M_(e),Lo(n)):n.q_.set("Unknown")}async function Nv(n,e,t){if(n.q_.set("Online"),e instanceof Th&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))})(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _s(n,r)}else if(e instanceof ts?n.Q_.Ke(e):e instanceof wh?n.Q_.He(e):n.Q_.We(e),!t.isEqual(z.min()))try{const r=await Nh(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(_e.EMPTY_BYTE_STRING,p.snapshotVersion)),Vh(i,u);const _=new mt(p.target,u,d,p.sequenceNumber);Mo(i,_)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await _s(n,r)}}async function _s(n,e,t){if(!dr(e))throw e;n.L_.add(1),await mr(n),n.q_.set("Offline"),t||(t=()=>Nh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Vs(n)}))}function Mh(n,e){return e().catch((t=>_s(n,t,e)))}async function Os(n){const e=H(n),t=Et(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Pv(e);)try{const s=await pv(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,kv(e,s)}catch(s){await _s(e,s)}Lh(e)&&jh(e)}function Pv(n){return zt(n)&&n.O_.length<10}function kv(n,e){n.O_.push(e);const t=Et(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Lh(n){return zt(n)&&!Et(n).n_()&&n.O_.length>0}function jh(n){Et(n).start()}async function Dv(n){Et(n).p_()}async function Vv(n){const e=Et(n);for(const t of n.O_)e.m_(t.mutations)}async function Ov(n,e,t){const r=n.O_.shift(),s=Co.from(r,e,t);await Mh(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Os(n)}async function Mv(n,e){e&&Et(n).V_&&await(async function(r,s){if((function(a){return by(a)&&a!==N.ABORTED})(s.code)){const i=r.O_.shift();Et(r).s_(),await Mh(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Os(r)}})(n,e),Lh(n)&&jh(n)}async function pc(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=zt(t);t.L_.add(3),await mr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Vs(t)}async function Lv(n,e){const t=H(n);e?(t.L_.delete(2),await Vs(t)):e||(t.L_.add(2),await mr(t),t.q_.set("Unknown"))}function gn(n){return n.K_||(n.K_=(function(t,r,s){const i=H(t);return i.w_(),new Ev(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Eo:Rv.bind(null,n),Ro:Sv.bind(null,n),mo:Cv.bind(null,n),d_:Nv.bind(null,n)}),n.B_.push((async e=>{e?(n.K_.s_(),jo(n)?Lo(n):n.q_.set("Unknown")):(await n.K_.stop(),Oh(n))}))),n.K_}function Et(n){return n.U_||(n.U_=(function(t,r,s){const i=H(t);return i.w_(),new Iv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Dv.bind(null,n),mo:Mv.bind(null,n),f_:Vv.bind(null,n),g_:Ov.bind(null,n)}),n.B_.push((async e=>{e?(n.U_.s_(),await Os(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))}))),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Uo(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(n,e){if(rt("AsyncQueue",`${e}: ${n}`),dr(n))return new O(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=jn(),this.sortedSet=new se(this.comparator)}static emptySet(e){return new tn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.W_=new se(U.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,r)=>{e.push(r)})),e}}class cn{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new cn(e,t,tn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ss(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class Uv{constructor(){this.queries=gc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=H(t),i=s.queries;s.queries=gc(),i.forEach(((a,l)=>{for(const u of l.j_)u.onError(r)}))})(this,new O(N.ABORTED,"Firestore shutting down"))}}function gc(){return new mn((n=>ah(n)),Ss)}async function Fv(n,e){const t=H(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new jv,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Fo(a,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Bo(t)}async function Bv(n,e){const t=H(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qv(n,e){const t=H(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Bo(t)}function $v(n,e,t){const r=H(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Bo(n){n.Y_.forEach((e=>{e.next()}))}var Zi,_c;(_c=Zi||(Zi={})).ea="default",_c.Cache="cache";class zv{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=cn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.key=e}}class Fh{constructor(e){this.key=e}}class Hv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=W(),this.mutatedKeys=W(),this.Aa=lh(e),this.Ra=new tn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new mc,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,_)=>{const I=s.get(p),S=Cs(this.query,_)?_:null,C=!!I&&this.mutatedKeys.has(I.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let A=!1;I&&S?I.data.isEqual(S.data)?C!==D&&(r.track({type:3,doc:S}),A=!0):this.ga(I,S)||(r.track({type:2,doc:S}),A=!0,(u&&this.Aa(S,u)>0||d&&this.Aa(S,d)<0)&&(l=!0)):!I&&S?(r.track({type:0,doc:S}),A=!0):I&&!S&&(r.track({type:1,doc:I}),A=!0,(u||d)&&(l=!0)),A&&(S?(a=a.add(S),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort(((p,_)=>(function(S,C){const D=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return D(S)-D(C)})(p.type,_.type)||this.Aa(p.doc,_.doc))),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new cn(this.query,e.Ra,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new mc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=W(),this.Ra.forEach((r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))}));const t=[];return e.forEach((r=>{this.da.has(r)||t.push(new Fh(r))})),this.da.forEach((r=>{e.has(r)||t.push(new Uh(r))})),t}ba(e){this.Ta=e.Ts,this.da=W();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return cn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Wv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Kv{constructor(e){this.key=e,this.va=!1}}class Gv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new mn((l=>ah(l)),Ss),this.Ma=new Map,this.xa=new Set,this.Oa=new se(U.comparator),this.Na=new Map,this.La=new ko,this.Ba={},this.ka=new Map,this.qa=ln.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Qv(n,e,t=!0){const r=Wh(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Bh(r,e,t,!0),s}async function Jv(n,e){const t=Wh(n);await Bh(t,e,!0,!1)}async function Bh(n,e,t,r){const s=await mv(n.localStore,Be(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Yv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Dh(n.remoteStore,s),l}async function Yv(n,e,t,r,s){n.Ka=(_,I,S)=>(async function(D,A,k,L){let j=A.view.ma(k);j.ns&&(j=await hc(D.localStore,A.query,!1).then((({documents:y})=>A.view.ma(y,j))));const $=L&&L.targetChanges.get(A.targetId),X=L&&L.targetMismatches.get(A.targetId)!=null,Z=A.view.applyChanges(j,D.isPrimaryClient,$,X);return vc(D,A.targetId,Z.wa),Z.snapshot})(n,_,I,S);const i=await hc(n.localStore,e,!0),a=new Hv(e,i.Ts),l=a.ma(i.documents),u=pr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);vc(n,t,d.wa);const p=new Wv(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Xv(n,e,t){const r=H(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter((a=>!Ss(a,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xi(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Oo(r.remoteStore,s.targetId),eo(r,s.targetId)})).catch(hr)):(eo(r,s.targetId),await Xi(r.localStore,s.targetId,!0))}async function Zv(n,e){const t=H(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Oo(t.remoteStore,r.targetId))}async function ew(n,e,t){const r=aw(n);try{const s=await(function(a,l){const u=H(a),d=he.now(),p=l.reduce(((S,C)=>S.add(C.key)),W());let _,I;return u.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let C=st(),D=W();return u.cs.getEntries(S,p).next((A=>{C=A,C.forEach(((k,L)=>{L.isValidDocument()||(D=D.add(k))}))})).next((()=>u.localDocuments.getOverlayedDocuments(S,C))).next((A=>{_=A;const k=[];for(const L of l){const j=vy(L,_.get(L.key).overlayedDocument);j!=null&&k.push(new It(L.key,j,Zu(j.value.mapValue),Le.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,k,l)})).next((A=>{I=A;const k=A.applyToLocalDocumentSet(_,D);return u.documentOverlayCache.saveOverlays(S,A.batchId,k)}))})).then((()=>({batchId:I.batchId,changes:uh(_)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new se(J)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d})(r,s.batchId,t),await gr(r,s.changes),await Os(r.remoteStore)}catch(s){const i=Fo(s,"Failed to persist write");t.reject(i)}}async function qh(n,e){const t=H(n);try{const r=await dv(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Na.get(i);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Y(a.va):s.removedDocuments.size>0&&(Y(a.va),a.va=!1))})),await gr(t,r,e)}catch(r){await hr(r)}}function yc(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach(((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const u=H(a);u.onlineState=l;let d=!1;u.queries.forEach(((p,_)=>{for(const I of _.j_)I.Z_(l)&&(d=!0)})),d&&Bo(u)})(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tw(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new se(U.comparator);a=a.insert(i,be.newNoDocument(i,z.min()));const l=W().add(i),u=new ks(z.min(),new Map,new se(J),a,l);await qh(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),qo(r)}else await Xi(r.localStore,e,!1).then((()=>eo(r,e,t))).catch(hr)}async function nw(n,e){const t=H(n),r=e.batch.batchId;try{const s=await hv(t.localStore,e);zh(t,r,null),$h(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await gr(t,s)}catch(s){await hr(s)}}async function rw(n,e,t){const r=H(n);try{const s=await(function(a,l){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next((_=>(Y(_!==null),p=_.keys(),u.mutationQueue.removeMutationBatch(d,_)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>u.localDocuments.getDocuments(d,p)))}))})(r.localStore,e);zh(r,e,t),$h(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await gr(r,s)}catch(s){await hr(s)}}function $h(n,e){(n.ka.get(e)||[]).forEach((t=>{t.resolve()})),n.ka.delete(e)}function zh(n,e,t){const r=H(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function eo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach((r=>{n.La.containsKey(r)||Hh(n,r)}))}function Hh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Oo(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),qo(n))}function vc(n,e,t){for(const r of t)r instanceof Uh?(n.La.addReference(r.key,e),sw(n,r)):r instanceof Fh?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Hh(n,r.key)):q()}function sw(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(r),qo(n))}function qo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new U(ne.fromString(e)),r=n.qa.next();n.Na.set(r,new Kv(t)),n.Oa=n.Oa.insert(t,r),Dh(n.remoteStore,new mt(Be(Ao(t.path)),r,"TargetPurposeLimboResolution",wo.oe))}}async function gr(n,e,t){const r=H(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach(((l,u)=>{a.push(r.Ka(u,e,t).then((d=>{var p;if((d||t)&&r.isPrimaryClient){const _=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){s.push(d);const _=Vo.Wi(u.targetId,d);i.push(_)}})))})),await Promise.all(a),r.Ca.d_(s),await(async function(u,d){const p=H(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(_=>P.forEach(d,(I=>P.forEach(I.$i,(S=>p.persistence.referenceDelegate.addReference(_,I.targetId,S))).next((()=>P.forEach(I.Ui,(S=>p.persistence.referenceDelegate.removeReference(_,I.targetId,S)))))))))}catch(_){if(!dr(_))throw _;M("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of d){const I=_.targetId;if(!_.fromCache){const S=p.os.get(I),C=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(C);p.os=p.os.insert(I,D)}}})(r.localStore,i))}async function iw(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Ch(t.localStore,e);t.currentUser=e,(function(i,a){i.ka.forEach((l=>{l.forEach((u=>{u.reject(new O(N.CANCELLED,a))}))})),i.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gr(t,r.hs)}}function ow(n,e){const t=H(n),r=t.Na.get(e);if(r&&r.va)return W().add(r.key);{let s=W();const i=t.Ma.get(e);if(!i)return s;for(const a of i){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Wh(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ow.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tw.bind(null,e),e.Ca.d_=qv.bind(null,e.eventManager),e.Ca.$a=$v.bind(null,e.eventManager),e}function aw(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rw.bind(null,e),e}class ys{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ds(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return uv(this.persistence,new lv,e.initialUser,this.serializer)}Ga(e){return new iv(Do.Zr,this.serializer)}Wa(e){return new _v}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ys.provider={build:()=>new ys};class to{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iw.bind(null,this.syncEngine),await Lv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Uv})()}createDatastore(e){const t=Ds(e.databaseInfo.databaseId),r=(function(i){return new Tv(i)})(e.databaseInfo);return(function(i,a,l,u){return new bv(i,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new Av(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>yc(this.syncEngine,t,0)),(function(){return fc.D()?new fc:new yv})())}createSyncEngine(e,t){return(function(s,i,a,l,u,d,p){const _=new Gv(s,i,a,l,u,d);return p&&(_.Qa=!0),_})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=H(s);M("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await mr(i),i.k_.shutdown(),i.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}to.provider={build:()=>new to};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ie.UNAUTHENTICATED,this.clientId=Ju.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Fo(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Si(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ch(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function wc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uw(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>pc(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>pc(e.remoteStore,s))),n._onlineComponents=e}async function uw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Si(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;rn("Error using user provided cache. Falling back to memory cache: "+t),await Si(n,new ys)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Si(n,new ys);return n._offlineComponents}async function Kh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await wc(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await wc(n,new to))),n._onlineComponents}function hw(n){return Kh(n).then((e=>e.syncEngine))}async function Tc(n){const e=await Kh(n),t=e.eventManager;return t.onListen=Qv.bind(null,e.syncEngine),t.onUnlisten=Xv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Jv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Zv.bind(null,e.syncEngine),t}/**
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
 */function Gh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n,e,t){if(!t)throw new O(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dw(n,e,t,r){if(e===!0&&r===!0)throw new O(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ic(n){if(!U.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bc(n){if(U.isDocumentKey(n))throw new O(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function et(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ms(n);throw new O(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function fw(n,e){if(e<=0)throw new O(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ls{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xc(e),e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new R_;switch(r.type){case"firstParty":return new P_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ec.get(t);r&&(M("ComponentProvider","Removing Datastore"),Ec.delete(t),r.terminate())})(this),Promise.resolve()}}function pw(n,e,t,r={}){var s;const i=(n=et(n,Ls))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ie.MOCK_USER;else{l=iu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ie(d)}n._authCredentials=new S_(new Qu(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bt(this.firestore,e,this._query)}}class Ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}}class yt extends bt{constructor(e,t,r){super(e,t,Ao(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new U(e))}withConverter(e){return new yt(this.firestore,e,this._path)}}function mw(n,e,...t){if(n=re(n),Qh("collection","path",e),n instanceof Ls){const r=ne.fromString(e,...t);return bc(r),new yt(n,null,r)}{if(!(n instanceof Ce||n instanceof yt))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return bc(r),new yt(n.firestore,null,r)}}function js(n,e,...t){if(n=re(n),arguments.length===1&&(e=Ju.newId()),Qh("doc","path",e),n instanceof Ls){const r=ne.fromString(e,...t);return Ic(r),new Ce(n,null,new U(r))}{if(!(n instanceof Ce||n instanceof yt))throw new O(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ne.fromString(e,...t));return Ic(r),new Ce(n.firestore,n instanceof yt?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ph(this,"async_queue_retry"),this.Vu=()=>{const r=Ri();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ri();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ri();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new Vt;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!dr(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((r=>{this.Eu=r,this.du=!1;const s=(function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l})(r);throw rt("INTERNAL UNHANDLED ERROR: ",s),r})).then((r=>(this.du=!1,r))))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Uo.createAndSchedule(this,e,t,r,(i=>this.yu(i)));return this.Tu.push(s),s}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Rc(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class un extends Ls{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ac,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ac(e),this._firestoreClient=void 0,await e}}}function gw(n,e){const t=typeof n=="object"?n:Is(),r=typeof n=="string"?n:"(default)",s=Es(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nu("firestore");i&&pw(s,...i)}return s}function Jh(n){if(n._terminated)throw new O(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_w(n),n._firestoreClient}function _w(n){var e,t,r;const s=n._freezeSettings(),i=(function(l,u,d,p){return new z_(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Gh(p.experimentalLongPollingOptions),p.useFetchStreams)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new cw(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(_e.fromBase64String(e))}catch(t){throw new O(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hn(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */class zo{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=/^__.*__$/;class vw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new It(e,this.data,this.fieldMask,t,this.fieldTransforms):new fr(e,this.data,t,this.fieldTransforms)}}class Yh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new It(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Ho{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ho(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vs(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Xh(this.Cu)&&yw.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ww{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ds(e)}Qu(e,t,r,s=!1){return new Ho({Cu:e,methodName:t,qu:r,path:me.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wo(n){const e=n._freezeSettings(),t=Ds(n._databaseId);return new ww(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tw(n,e,t,r,s,i={}){const a=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Go("Data must be an object, but it was:",a,r);const l=Zh(r,a);let u,d;if(i.merge)u=new ke(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const _ of i.mergeFields){const I=no(e,_,t);if(!a.contains(I))throw new O(N.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);td(p,I)||p.push(I)}u=new ke(p),d=a.fieldTransforms.filter((_=>u.covers(_.field)))}else u=null,d=a.fieldTransforms;return new vw(new Ne(l),u,d)}class _r extends Fs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _r}}class Ko extends Fs{_toFieldTransform(e){return new my(e.path,new rr)}isEqual(e){return e instanceof Ko}}function Ew(n,e,t,r){const s=n.Qu(1,e,t);Go("Data must be an object, but it was:",s,r);const i=[],a=Ne.empty();$t(r,((u,d)=>{const p=Qo(e,u,t);d=re(d);const _=s.Nu(p);if(d instanceof _r)i.push(p);else{const I=yr(d,_);I!=null&&(i.push(p),a.set(p,I))}}));const l=new ke(i);return new Yh(a,l,s.fieldTransforms)}function Iw(n,e,t,r,s,i){const a=n.Qu(1,e,t),l=[no(e,r,t)],u=[s];if(i.length%2!=0)throw new O(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)l.push(no(e,i[I])),u.push(i[I+1]);const d=[],p=Ne.empty();for(let I=l.length-1;I>=0;--I)if(!td(d,l[I])){const S=l[I];let C=u[I];C=re(C);const D=a.Nu(S);if(C instanceof _r)d.push(S);else{const A=yr(C,D);A!=null&&(d.push(S),p.set(S,A))}}const _=new ke(d);return new Yh(p,_,a.fieldTransforms)}function bw(n,e,t,r=!1){return yr(t,n.Qu(r?4:3,e))}function yr(n,e){if(ed(n=re(n)))return Go("Unsupported field value:",e,n),Zh(n,e);if(n instanceof Fs)return(function(r,s){if(!Xh(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let u=yr(l,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=he.fromDate(r);return{timestampValue:gs(s.serializer,i)}}if(r instanceof he){const i=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gs(s.serializer,i)}}if(r instanceof $o)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hn)return{bytesValue:Eh(s.serializer,r._byteString)};if(r instanceof Ce){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Po(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zo)return(function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map((u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Ro(l.serializer,u)}))}}}}}})(r,s);throw s.Bu(`Unsupported field value: ${Ms(r)}`)})(n,e)}function Zh(n,e){const t={};return Yu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$t(n,((r,s)=>{const i=yr(s,e.Mu(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function ed(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof $o||n instanceof hn||n instanceof Ce||n instanceof Fs||n instanceof zo)}function Go(n,e,t){if(!ed(t)||!(function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)})(t)){const r=Ms(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function no(n,e,t){if((e=re(e))instanceof Us)return e._internalPath;if(typeof e=="string")return Qo(n,e);throw vs("Field path arguments must be of type string or ",n,!1,void 0,t)}const xw=new RegExp("[~\\*/\\[\\]]");function Qo(n,e,t){if(e.search(xw)>=0)throw vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Us(...e.split("."))._internalPath}catch{throw vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(N.INVALID_ARGUMENT,l+n+u)}function td(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Aw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Aw extends nd{data(){return super.data()}}function Jo(n,e){return typeof e=="string"?Qo(n,e):e instanceof Us?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yo{}class Xo extends Yo{}function Sw(n,e,...t){let r=[];e instanceof Yo&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof ea)).length,l=i.filter((u=>u instanceof Zo)).length;if(a>1||a>0&&l>0)throw new O(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Zo extends Xo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Zo(e,t,r)}_apply(e){const t=this._parse(e);return rd(e._query,t),new bt(e.firestore,e.converter,Ki(e._query,t))}_parse(e){const t=Wo(e.firestore);return(function(i,a,l,u,d,p,_){let I;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Cc(_,p);const S=[];for(const C of _)S.push(Sc(u,i,C));I={arrayValue:{values:S}}}else I=Sc(u,i,_)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Cc(_,p),I=bw(l,a,_,p==="in"||p==="not-in");return ue.create(d,p,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class ea extends Yo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ea(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const u of l)rd(a,u),a=Ki(a,u)})(e._query,t),new bt(e.firestore,e.converter,Ki(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ta extends Xo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ta(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new O(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nr(i,a)})(e._query,this._field,this._direction);return new bt(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new pn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Cw(n,e="asc"){const t=e,r=Jo("orderBy",n);return ta._create(r,t)}class na extends Xo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new na(e,t,r)}_apply(e){return new bt(e.firestore,e.converter,ps(e._query,this._limit,this._limitType))}}function Nw(n){return fw("limit",n),na._create("limit",n,"F")}function Sc(n,e,t){if(typeof(t=re(t))=="string"){if(t==="")throw new O(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oh(e)&&t.indexOf("/")!==-1)throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ne.fromString(t));if(!U.isDocumentKey(r))throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gl(n,new U(r))}if(t instanceof Ce)return Gl(n,t._key);throw new O(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ms(t)}.`)}function Cc(n,e){if(!Array.isArray(n)||n.length===0)throw new O(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rd(n,e){const t=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Pw{convertValue(e,t="none"){switch(Ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $t(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>le(a.doubleValue)));return new zo(i)}convertGeoPoint(e){return new $o(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Eo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zn(e));default:return null}}convertTimestamp(e){const t=Tt(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ne.fromString(e);Y(Sh(r));const s=new er(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||rt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sd extends nd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ns extends sd{data(e={}){return super.data(e)}}class Dw{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Fn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ns(this._firestore,this._userDataWriter,r.key,r,new Fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const u=new ns(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Fn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const u=new ns(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Fn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Vw(l.type),doc:u,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Vw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class id extends Pw{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}}function Bs(n,e,t){n=et(n,Ce);const r=et(n.firestore,un),s=kw(n.converter,e,t);return ra(r,[Tw(Wo(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Le.none())])}function Ow(n,e,t,...r){n=et(n,Ce);const s=et(n.firestore,un),i=Wo(s);let a;return a=typeof(e=re(e))=="string"||e instanceof Us?Iw(i,"updateDoc",n._key,e,t,r):Ew(i,"updateDoc",n._key,e),ra(s,[a.toMutation(n._key,Le.exists(!0))])}function Mw(n){return ra(et(n.firestore,un),[new So(n._key,Le.none())])}function od(n,...e){var t,r,s;n=re(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Rc(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Rc(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(s=_.complete)===null||s===void 0?void 0:s.bind(_)}let u,d,p;if(n instanceof Ce)d=et(n.firestore,un),p=Ao(n._key.path),u={next:_=>{e[a]&&e[a](Lw(d,n,_))},error:e[a+1],complete:e[a+2]};else{const _=et(n,bt);d=et(_.firestore,un),p=_._query;const I=new id(d);u={next:S=>{e[a]&&e[a](new Dw(d,I,_,S))},error:e[a+1],complete:e[a+2]},Rw(n._query)}return(function(I,S,C,D){const A=new lw(D),k=new zv(S,A,C);return I.asyncQueue.enqueueAndForget((async()=>Fv(await Tc(I),k))),()=>{A.Za(),I.asyncQueue.enqueueAndForget((async()=>Bv(await Tc(I),k)))}})(Jh(d),p,l,u)}function ra(n,e){return(function(r,s){const i=new Vt;return r.asyncQueue.enqueueAndForget((async()=>ew(await hw(r),s,i))),i.promise})(Jh(n),e)}function Lw(n,e,t){const r=t.docs.get(e._key),s=new id(n);return new sd(n,s,e._key,r,new Fn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){return new _r("deleteField")}function sa(){return new Ko("serverTimestamp")}(function(e,t=!0){(function(s){fn=s})(qt),Mt(new vt("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new un(new C_(r.getProvider("auth-internal")),new D_(r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(d.options.projectId,p)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Ue($l,"4.7.3",e),Ue($l,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="firebasestorage.googleapis.com",ld="storageBucket",Uw=120*1e3,Fw=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends He{constructor(e,t,r=0){super(Ci(e),`Firebase Storage: ${t} (${Ci(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ci(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var oe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(oe||(oe={}));function Ci(n){return"storage/"+n}function ia(){const n="An unknown error occurred, please check the error payload for server response.";return new ae(oe.UNKNOWN,n)}function Bw(n){return new ae(oe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function qw(n){return new ae(oe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $w(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ae(oe.UNAUTHENTICATED,n)}function zw(){return new ae(oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Hw(n){return new ae(oe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Ww(){return new ae(oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Kw(){return new ae(oe.CANCELED,"User canceled the upload/download.")}function Gw(n){return new ae(oe.INVALID_URL,"Invalid URL '"+n+"'.")}function Qw(n){return new ae(oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Jw(){return new ae(oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ld+"' property when initializing the app?")}function Yw(){return new ae(oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Xw(){return new ae(oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Zw(n){return new ae(oe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ro(n){return new ae(oe.INVALID_ARGUMENT,n)}function cd(){return new ae(oe.APP_DELETED,"The Firebase app was deleted.")}function eT(n){return new ae(oe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gn(n,e){return new ae(oe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function On(n){throw new ae(oe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=De.makeFromUrl(e,t)}catch{return new De(e,"")}if(r.path==="")return r;throw Qw(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d($){$.path_=decodeURIComponent($.path)}const p="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",S=new RegExp(`^https?://${_}/${p}/b/${s}/o${I}`,"i"),C={bucket:1,path:3},D=t===ad?"(?:storage.googleapis.com|storage.cloud.google.com)":t,A="([^?#]*)",k=new RegExp(`^https?://${D}/${s}/${A}`,"i"),j=[{regex:l,indices:u,postModify:i},{regex:S,indices:C,postModify:d},{regex:k,indices:{bucket:1,path:2},postModify:d}];for(let $=0;$<j.length;$++){const X=j[$],Z=X.regex.exec(e);if(Z){const y=Z[X.indices.bucket];let g=Z[X.indices.path];g||(g=""),r=new De(y,g),X.postModify(r);break}}if(r==null)throw Gw(e);return r}}class tT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function u(){return l===2}let d=!1;function p(...A){d||(d=!0,e.apply(null,A))}function _(A){s=setTimeout(()=>{s=null,n(S,u())},A)}function I(){i&&clearTimeout(i)}function S(A,...k){if(d){I();return}if(A){I(),p.call(null,A,...k);return}if(u()||a){I(),p.call(null,A,...k);return}r<64&&(r*=2);let j;l===1?(l=2,j=0):j=(r+Math.random())*1e3,_(j)}let C=!1;function D(A){C||(C=!0,I(),!d&&(s!==null?(A||(l=2),clearTimeout(s),_(0)):A||(l=1)))}return _(0),i=setTimeout(()=>{a=!0,D(!0)},t),D}function rT(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(n){return n!==void 0}function iT(n){return typeof n=="object"&&!Array.isArray(n)}function oa(n){return typeof n=="string"||n instanceof String}function Nc(n){return aa()&&n instanceof Blob}function aa(){return typeof Blob<"u"}function Pc(n,e,t,r){if(r<e)throw ro(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ro(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function ud(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ot;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ot||(Ot={}));/**
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
 */function oT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,r,s,i,a,l,u,d,p,_,I=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=_,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,C)=>{this.resolve_=S,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new zr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Ot.NO_ERROR,u=i.getStatus();if(!l||oT(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Ot.ABORT;r(!1,new zr(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new zr(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());sT(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=ia();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?cd():Kw();a(u)}else{const u=Ww();a(u)}};this.canceled_?t(!1,new zr(!1,null,!0)):this.backoffId_=nT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function lT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function cT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function hT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function dT(n,e,t,r,s,i,a=!0){const l=ud(n.urlParams),u=n.url+l,d=Object.assign({},n.headers);return uT(d,e),lT(d,t),cT(d,i),hT(d,r),new aT(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pT(...n){const e=fT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(aa())return new Blob(n);throw new ae(oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mT(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function gT(n){if(typeof atob>"u")throw Zw("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ni{constructor(e,t){this.data=e,this.contentType=t||null}}function hd(n,e){switch(n){case Oe.RAW:return new Ni(dd(e));case Oe.BASE64:case Oe.BASE64URL:return new Ni(fd(n,e));case Oe.DATA_URL:return new Ni(yT(e),vT(e))}throw ia()}function dd(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _T(n){let e;try{e=decodeURIComponent(n)}catch{throw Gn(Oe.DATA_URL,"Malformed data URL.")}return dd(e)}function fd(n,e){switch(n){case Oe.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Gn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Oe.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Gn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=gT(e)}catch(s){throw s.message.includes("polyfill")?s:Gn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class pd{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Gn(Oe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=wT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function yT(n){const e=new pd(n);return e.base64?fd(Oe.BASE64,e.rest):_T(e.rest)}function vT(n){return new pd(n).contentType}function wT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){let r=0,s="";Nc(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Nc(this.data_)){const r=this.data_,s=mT(r,e,t);return s===null?null:new pt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new pt(r,!0)}}static getBlob(...e){if(aa()){const t=e.map(r=>r instanceof pt?r.data_:r);return new pt(pT.apply(null,t))}else{const t=e.map(a=>oa(a)?hd(Oe.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new pt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n){let e;try{e=JSON.parse(n)}catch{return null}return iT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ET(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function gd(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n,e){return e}class Se{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||IT}}let Hr=null;function bT(n){return!oa(n)||n.length<2?n:gd(n)}function _d(){if(Hr)return Hr;const n=[];n.push(new Se("bucket")),n.push(new Se("generation")),n.push(new Se("metageneration")),n.push(new Se("name","fullPath",!0));function e(i,a){return bT(a)}const t=new Se("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Se("size");return s.xform=r,n.push(s),n.push(new Se("timeCreated")),n.push(new Se("updated")),n.push(new Se("md5Hash",null,!0)),n.push(new Se("cacheControl",null,!0)),n.push(new Se("contentDisposition",null,!0)),n.push(new Se("contentEncoding",null,!0)),n.push(new Se("contentLanguage",null,!0)),n.push(new Se("contentType",null,!0)),n.push(new Se("metadata","customMetadata",!0)),Hr=n,Hr}function xT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new De(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function AT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return xT(r,n),r}function yd(n,e,t){const r=md(e);return r===null?null:AT(n,r,t)}function RT(n,e,t,r){const s=md(e);if(s===null||!oa(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=n.bucket,_=n.fullPath,I="/b/"+a(p)+"/o/"+a(_),S=la(I,t,r),C=ud({alt:"media",token:d});return S+C})[0]}function ST(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class vd{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n){if(!n)throw ia()}function CT(n,e){function t(r,s){const i=yd(n,s,e);return wd(i!==null),i}return t}function NT(n,e){function t(r,s){const i=yd(n,s,e);return wd(i!==null),RT(i,s,n.host,n._protocol)}return t}function Td(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=zw():s=$w():t.getStatus()===402?s=qw(n.bucket):t.getStatus()===403?s=Hw(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function PT(n){const e=Td(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Bw(n.path)),i.serverResponse=s.serverResponse,i}return t}function kT(n,e,t){const r=e.fullServerUrl(),s=la(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new vd(s,i,NT(n,t),a);return l.errorHandler=PT(e),l}function DT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function VT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=DT(null,e)),r}function OT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let j="";for(let $=0;$<2;$++)j=j+Math.random().toString().slice(2);return j}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const d=VT(e,r,s),p=ST(d,t),_="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,I=`\r
--`+u+"--",S=pt.getBlob(_,r,I);if(S===null)throw Yw();const C={name:d.fullPath},D=la(i,n.host,n._protocol),A="POST",k=n.maxUploadRetryTime,L=new vd(D,A,CT(n,t),k);return L.urlParams=C,L.headers=a,L.body=S.uploadData(),L.errorHandler=Td(e),L}class MT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ot.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ot.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ot.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw On("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw On("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw On("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw On("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw On("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class LT extends MT{initXhr(){this.xhr_.responseType="text"}}function Ed(){return new LT}/**
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
 */class Bt{constructor(e,t){this._service=e,t instanceof De?this._location=t:this._location=De.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Bt(e,t)}get root(){const e=new De(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gd(this._location.path)}get storage(){return this._service}get parent(){const e=TT(this._location.path);if(e===null)return null;const t=new De(this._location.bucket,e);return new Bt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw eT(e)}}function Id(n,e,t){n._throwIfRoot("uploadBytes");const r=OT(n.storage,n._location,_d(),new pt(e,!0),t);return n.storage.makeRequestWithTokens(r,Ed).then(s=>({metadata:s,ref:n}))}function jT(n,e,t=Oe.RAW,r){n._throwIfRoot("uploadString");const s=hd(t,e),i=Object.assign({},r);return i.contentType==null&&s.contentType!=null&&(i.contentType=s.contentType),Id(n,s.data,i)}function UT(n){n._throwIfRoot("getDownloadURL");const e=kT(n.storage,n._location,_d());return n.storage.makeRequestWithTokens(e,Ed).then(t=>{if(t===null)throw Xw();return t})}function FT(n,e){const t=ET(n._location.path,e),r=new De(n._location.bucket,t);return new Bt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(n){return/^[A-Za-z]+:\/\//.test(n)}function qT(n,e){return new Bt(n,e)}function bd(n,e){if(n instanceof ca){const t=n;if(t._bucket==null)throw Jw();const r=new Bt(t,t._bucket);return e!=null?bd(r,e):r}else return e!==void 0?FT(n,e):n}function $T(n,e){if(e&&BT(e)){if(n instanceof ca)return qT(n,e);throw ro("To use ref(service, url), the first argument must be a Storage instance.")}else return bd(n,e)}function kc(n,e){const t=e==null?void 0:e[ld];return t==null?null:De.makeFromBucketSpec(t,n)}function zT(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:iu(s,n.app.options.projectId))}class ca{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ad,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Uw,this._maxUploadRetryTime=Fw,this._requests=new Set,s!=null?this._bucket=De.makeFromBucketSpec(s,this._host):this._bucket=kc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=De.makeFromBucketSpec(this._url,e):this._bucket=kc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new tT(cd());{const a=dT(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Dc="@firebase/storage",Vc="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="storage";function HT(n,e,t){return n=re(n),Id(n,e,t)}function WT(n,e,t,r){return n=re(n),jT(n,e,t,r)}function Ad(n){return n=re(n),UT(n)}function qs(n,e){return n=re(n),$T(n,e)}function KT(n=Is(),e){n=re(n);const r=Es(n,xd).getImmediate({identifier:e}),s=nu("storage");return s&&GT(r,...s),r}function GT(n,e,t,r={}){zT(n,e,t,r)}function QT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ca(t,r,s,e,qt)}function JT(){Mt(new vt(xd,QT,"PUBLIC").setMultipleInstances(!0)),Ue(Dc,Vc,""),Ue(Dc,Vc,"esm2017")}JT();const YT={apiKey:"AIzaSyBjw05ng3dqmRrs7SKA57MAjSnUdeuJLj8",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},$s=gm().length?Is():lu(YT),Pi=qu($s),Rd=gw($s),zs=KT($s),XT="/shorts-intel-hub/api",ZT=qu($s);async function eE(){const n=ZT.currentUser;return n?n.getIdToken():""}async function ua(n,e){const t=`${XT}${n}`;try{const r=await eE(),s=await fetch(t,{...e,headers:{"Content-Type":"application/json",...r?{Authorization:`Bearer ${r}`}:{},...e==null?void 0:e.headers}});if(!s.ok){const i=await s.json().catch(()=>({}));throw new Error(i.message||`API Error: ${s.status}`)}return s.json()}catch(r){throw console.error("API Fetch Error:",r),r}}async function tE(){return ua("/ranking/configs")}async function nE(n){return ua("/ranking/configs",{method:"PUT",body:JSON.stringify({config:n})})}function rE(n,e){return`${n}|${e}`}async function sE(n,e){const[t,r]=await Promise.all([n?Oc(n):Promise.resolve(null),e?Oc(e):Promise.resolve(null)]);return ua("/match-and-rank",{method:"POST",body:JSON.stringify({nyanCatContent:t,vaynerContent:r})})}function Oc(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result,i=s.indexOf(",");e(i>=0?s.slice(i+1):s)},r.onerror=()=>t(r.error),r.readAsDataURL(n)})}function Mc(n){var t,r,s,i,a,l,u,d;const e=Mn;return n?{...e,...n,velocity:{...e.velocity,...n.velocity},breakout:{...e.breakout,...n.breakout},scale:{...e.scale,...n.scale},complexity:{...e.complexity,...n.complexity},distribution:{...e.distribution,...n.distribution},freshness:{...e.freshness,...n.freshness},quality:{...e.quality,...n.quality},origin:{...e.origin,...n.origin},irs:{...ut,...n.irs??{},monetization:{...ut.monetization,...((t=n.irs)==null?void 0:t.monetization)??{}},stickiness:{...ut.stickiness,...((r=n.irs)==null?void 0:r.stickiness)??{}},quality:{...ut.quality,...((s=n.irs)==null?void 0:s.quality)??{}},creation:{...ut.creation,...((i=n.irs)==null?void 0:i.creation)??{}},boosters:{tools:{...ut.boosters.tools,...((l=(a=n.irs)==null?void 0:a.boosters)==null?void 0:l.tools)??{}},geo:{...ut.boosters.geo,...((d=(u=n.irs)==null?void 0:u.boosters)==null?void 0:d.geo)??{}}}}}:e}const Sd=[{title:"Velocity Multiplier",description:"Multiplier applied based on Vayner Trend Velocity tag.",group:"ERS",fields:[{label:"Trending",description:"Applied when Trend Velocity = Trending",path:["velocity","trending"],step:.1},{label:"Emerging",description:"Applied when Trend Velocity = Emerging",path:["velocity","emerging"],step:.1},{label:"Niche",description:"Applied when Trend Velocity = Niche",path:["velocity","niche"],step:.1}]},{title:"Breakout Multiplier",description:"Boost based on views relative to creator subs.",group:"ERS",fields:[{label:"Heavy multiplier",description:"Applied when views > subs × threshold",path:["breakout","heavyMultiplier"],step:.1},{label:"Light multiplier",description:"Applied when views > subs",path:["breakout","lightMultiplier"],step:.1},{label:"Base multiplier",description:"Applied otherwise",path:["breakout","baseMultiplier"],step:.1},{label:"Heavy threshold",description:'Multiple of subs for "heavy" breakout',path:["breakout","heavyThreshold"],step:1,min:1}]},{title:"Participation & Replicability",description:"How trend scale and creation complexity affect the score.",group:"ERS",fields:[{label:"Creation-Led scale",description:"Applied to Creation-Led / Creator-Led trends",path:["scale","creatorLed"],step:.1},{label:"Viewer-led scale",description:"Applied to Viewer-led trends",path:["scale","viewerLed"],step:.1},{label:"Easy complexity",description:"Easy or Low complexity",path:["complexity","easy"],step:.1},{label:"Medium complexity",description:"Medium complexity",path:["complexity","medium"],step:.1},{label:"Hard complexity",description:"Hard complexity",path:["complexity","hard"],step:.1}]},{title:"Distribution & Ubiquity",description:"Boost per platform and per market the trend appears in.",group:"ERS",fields:[{label:"Per-platform boost",description:"Added per platform listed (e.g. 0.2 = +20% per platform)",path:["distribution","perPlatformBoost"],step:.05},{label:"Per-market boost",description:"Added per primary market listed",path:["distribution","perMarketBoost"],step:.05}]},{title:"Freshness",description:"Reward trends caught early; penalize stale ones.",group:"ERS",fields:[{label:"Recent days threshold",description:"If identified within N days of publication, apply 1 + 1/days boost",path:["freshness","recentDays"],step:1,min:1},{label:"Stale days threshold",description:"Beyond N days, apply stale penalty",path:["freshness","staleDays"],step:1,min:1},{label:"Stale penalty",description:"Multiplier applied when stale",path:["freshness","stalePenalty"],step:.05,max:1}]},{title:"Quality & Origin",description:"Downweight Potential AI Slop and boost YT Shorts origin.",group:"ERS",fields:[{label:"Potential AI Slop multiplier",description:"Applied to trends flagged Potential AI Slop",path:["quality","potentialSlopMultiplier"],step:.05,max:1},{label:"YT Shorts origin boost",description:"Applied when Platform Origin includes YT Shorts",path:["origin","youtubeShortsBoost"],step:.1}]},{title:"Monetization",description:"Boost applied to CPM creators or videos with AVOD monetization enabled.",group:"IRS",fields:[{label:"Commercial multiplier",description:"Applied when Is_CPM_Creator or monetization_enabled_avod is true",path:["irs","monetization","commercialMultiplier"],step:.05}]},{title:"Stickiness Ratio",description:"Clamp range for watch_time / potential_watch_time ratio.",group:"IRS",fields:[{label:"Min stickiness",description:"Lower clamp — raw ratios below this are pulled up",path:["irs","stickiness","min"],step:.05,min:0},{label:"Max stickiness",description:"Upper clamp — raw ratios above this are pulled down",path:["irs","stickiness","max"],step:.05,min:0}]},{title:"Quality Default",description:"Fallback score used when a video has missing visual or audio quality signals.",group:"IRS",fields:[{label:"Default quality score",description:"Used when visual_quality_score or audio_quality_score is missing (0–1)",path:["irs","quality","defaultScore"],step:.05,min:0,max:1}]},{title:"Creation Anchor",description:"Additive bonus per downstream upload — rewards trends driving creator participation.",group:"IRS",fields:[{label:"Bonus per upload",description:"Points added for each downstream_uploads_7d (additive, not multiplicative)",path:["irs","creation","bonusPerUpload"],step:1,min:0}]},{title:"Optional Booster: Creation Tools",description:"Extra multiplier for creators who heavily use shorts creation tools.",group:"IRS",fields:[{label:"Uploads threshold",description:"shorts_creation_tools_uploads_lifetime must exceed this to trigger",path:["irs","boosters","tools","threshold"],step:10,min:0},{label:"Tools multiplier",description:"Applied once threshold is met",path:["irs","boosters","tools","multiplier"],step:.05,min:1}]},{title:"Optional Booster: Geo",description:"Extra multiplier scaling with number of distinct creator countries.",group:"IRS",fields:[{label:"Per-country boost",description:"Added to multiplier for each listed creator country",path:["irs","boosters","geo","perCountryBoost"],step:.01,min:0},{label:"Max multiplier",description:"Ceiling for the geo booster regardless of country count",path:["irs","boosters","geo","maxMultiplier"],step:.05,min:1}]}],iE=Sd.filter(n=>n.group==="ERS"),oE=Sd.filter(n=>n.group==="IRS");function Lc(n,e){return e.reduce((t,r)=>t==null?t:t[r],n)??0}function aE(n,e,t){const r=JSON.parse(JSON.stringify(n));let s=r;for(let i=0;i<e.length-1;i++)s=s[e[i]];return s[e[e.length-1]]=t,r}function lE(){const[n,e]=B.useState(Mn),[t,r]=B.useState(Mn),[s,i]=B.useState(!1),[a,l]=B.useState(!1),[u,d]=B.useState(null),[p,_]=B.useState(null);B.useEffect(()=>{let A=!1;return tE().then(k=>{if(A)return;const L=Mc(k.config);e(L),r(L)}).catch(()=>{}),()=>{A=!0}},[]);const I=(A,k)=>{e(L=>{const j=aE(L,A,k);return i(!0),j})},S=()=>{e(A=>({...A,quality:{...A.quality,slopHidden:!A.quality.slopHidden}})),i(!0)},C=async()=>{l(!0),d(null),_(null);try{const A=await nE(n),k=Mc(A.config);r(k),e(k),i(!1),_("Scoring config saved — ranking will update on next upload.")}catch(A){d(A instanceof Error?A.message:"Save failed")}finally{l(!1)}},D=()=>{e(Mn),i(JSON.stringify(Mn)!==JSON.stringify(t))};return f.jsxs("div",{className:"max-w-4xl",children:[f.jsxs("div",{className:"mb-6 p-4 bg-card border border-border rounded-lg flex gap-3",children:[f.jsx(If,{className:"size-5 text-primary flex-shrink-0 mt-0.5"}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-foreground font-medium mb-1",children:"Ranking Scores — ERS (Vayner) + IRS (Nyan Cat)"}),f.jsxs("p",{className:"text-muted-foreground text-sm",children:["Vayner trends are ranked by ",f.jsx("strong",{children:"ERS"})," (External Ranking Score) and Nyan Cat trends by ",f.jsx("strong",{children:"IRS"})," (Internal Ranking Score). Both pipelines apply the same hard safety filters upstream — Brand Safe=No, negative sentiment, or AI Slop → hidden. Tune the multipliers below; changes take effect on the next upload."]})]})]}),u&&f.jsx("div",{className:"mb-4 p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-red-500 text-sm",children:u}),p&&f.jsx("div",{className:"mb-4 p-3 rounded-lg border border-green-500/50 bg-green-500/10 text-green-600 text-sm",children:p}),f.jsxs("div",{className:"mb-3 pt-2",children:[f.jsx("h3",{className:"text-foreground font-semibold",children:"ERS — External Ranking Score (Vayner)"}),f.jsx("p",{className:"text-xs text-muted-foreground",children:"Applied to curated Vayner trend-level rows."})]}),iE.map(A=>f.jsxs("div",{className:"mb-6 bg-card border border-border rounded-lg p-5",children:[f.jsxs("div",{className:"mb-4",children:[f.jsx("h4",{className:"text-foreground font-medium mb-1",children:A.title}),f.jsx("p",{className:"text-muted-foreground text-sm",children:A.description})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:A.fields.map(k=>{const L=k.path,j=Lc(n,L);return f.jsxs("div",{className:"p-3 rounded-lg bg-muted",children:[f.jsx("label",{className:"block text-sm font-medium text-foreground mb-1",children:k.label}),f.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:k.description}),f.jsx("input",{type:"number",step:k.step??.01,min:k.min,max:k.max,value:j,onChange:$=>I(L,parseFloat($.target.value)||0),className:"w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground"})]},L.join("."))})})]},A.title)),f.jsxs("div",{className:"mb-3 pt-4 border-t border-border",children:[f.jsx("h3",{className:"text-foreground font-semibold mt-4",children:"IRS — Internal Ranking Score (Nyan Cat)"}),f.jsx("p",{className:"text-xs text-muted-foreground",children:"Scored per video then aggregated by audio_id. Core signals (performance, velocity, quality, stickiness) come straight from the Nyan Cat feed."})]}),oE.map(A=>f.jsxs("div",{className:"mb-6 bg-card border border-border rounded-lg p-5",children:[f.jsxs("div",{className:"mb-4",children:[f.jsx("h4",{className:"text-foreground font-medium mb-1",children:A.title}),f.jsx("p",{className:"text-muted-foreground text-sm",children:A.description})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:A.fields.map(k=>{const L=k.path,j=Lc(n,L);return f.jsxs("div",{className:"p-3 rounded-lg bg-muted",children:[f.jsx("label",{className:"block text-sm font-medium text-foreground mb-1",children:k.label}),f.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:k.description}),f.jsx("input",{type:"number",step:k.step??.01,min:k.min,max:k.max,value:j,onChange:$=>I(L,parseFloat($.target.value)||0),className:"w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground"})]},L.join("."))})})]},A.title)),f.jsxs("div",{className:"mb-6 bg-card border border-border rounded-lg p-5 flex items-center justify-between",children:[f.jsxs("div",{children:[f.jsx("h4",{className:"text-foreground font-medium mb-1",children:"Hide AI Slop by default"}),f.jsx("p",{className:"text-muted-foreground text-sm",children:"When on, trends tagged AI Slop are hidden from dashboards. Turn off to include them in the ranking regardless."})]}),f.jsx("button",{onClick:S,className:`relative w-12 h-6 rounded-full transition-colors ${n.quality.slopHidden?"bg-primary":"bg-muted-foreground/30"}`,children:f.jsx("span",{className:`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${n.quality.slopHidden?"translate-x-6":""}`})})]}),f.jsxs("div",{className:"flex gap-3",children:[f.jsxs("button",{onClick:C,disabled:!s||a,className:`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity ${!s||a?"bg-muted text-muted-foreground cursor-not-allowed":"bg-primary text-primary-foreground hover:opacity-90"}`,children:[f.jsx(bf,{className:"size-5"}),a?"Saving…":"Save Changes"]}),f.jsxs("button",{onClick:D,className:"flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors",children:[f.jsx(xf,{className:"size-5"}),"Reset to Defaults"]})]}),f.jsxs("div",{className:"mt-8 p-5 bg-muted rounded-lg",children:[f.jsx("h4",{className:"text-foreground font-medium mb-3",children:"ERS Formula (Vayner)"}),f.jsx("pre",{className:"text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed",children:`base_score = (likes + comments) / max(views, 1) * 100 * breakout_mult
context_bonus = scale × complexity × distribution × market × freshness × quality × origin
ERS = base_score × velocity × context_bonus

Hard filters → ERS = null (hidden):
  Brand Safe = No
  User Sentiment = Negative
  Content Quality = AI Slop

Soft filters → ERS reduced but visible with review pill:
  Content Quality = Potential AI Slop (× ${n.quality.potentialSlopMultiplier})`})]}),f.jsxs("div",{className:"mt-6 p-5 bg-muted rounded-lg",children:[f.jsx("h4",{className:"text-foreground font-medium mb-3",children:"IRS Formula (Nyan Cat)"}),f.jsx("pre",{className:"text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed",children:`perf_efficiency   = log(watch_time_7D + 1) × engagement_7D × (Views_7D / max(subs, 1))
pred_velocity     = (Views_1D / max(Views_7D/7, 0.1)) × linear_reg_7d_pred
quality_scale     = (visual_quality + audio_quality) / 2
stickiness_mult   = clamp(watch_time / potential_watch_time, ${n.irs.stickiness.min}, ${n.irs.stickiness.max})
commercial_mult   = ${n.irs.monetization.commercialMultiplier} if CPM or monetized else 1.0

IRS_core  = perf_efficiency × pred_velocity × quality_scale × stickiness_mult × commercial_mult
IRS_final = IRS_core + (downstream_uploads_7d × ${n.irs.creation.bonusPerUpload})

Trend-level IRS = mean of per-video IRS across the audio_id group.

Same hard filters as ERS apply upstream (Brand Safe=No / AI Slop / Negative → hidden).`})]})]})}const Hs=js(Rd,"shorts_intel_hub","current"),Ws=mw(Rd,"shorts_intel_hub_archive");function jc(){return{nyanCat:null,vayner:null,matchSummary:null,matchResult:null}}function cE(n){let e=null,t=null,r=null;return od(Hs,async s=>{if(!s.exists()){e=null,t=null,r=null,n(jc());return}const i=s.data();t=i.matchSummary??null;const a=()=>n({nyanCat:i.nyanCat??null,vayner:i.vayner??null,matchSummary:t,matchResult:r});if(!t){e=null,r=null,a();return}if(t.storagePath===e&&r){a();return}a();try{const l=await Ad(qs(zs,t.storagePath)),u=await fetch(l);if(!u.ok)throw new Error(`HTTP ${u.status}`);const d=await u.json();e=t.storagePath,r=d,a()}catch(l){console.error("[sharedState] failed to load match result from Storage:",l),r=null,a()}},s=>{console.error("[sharedState] subscribe failed:",s),n(jc())})}function uE(n,e,t){const r=t.replace(/[^a-zA-Z0-9._-]/g,"_");return`shorts-intel-hub/uploads/${e}/${n}-${r}`}function hE(n){return`shorts-intel-hub/results/${n}.json`}async function dE(n,e){const t=`upl-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,r=uE(n,t,e.name);await HT(qs(zs,r),e,{contentType:e.type||"text/csv"});const s={name:e.name,storagePath:r,size:e.size,uploadedAt:new Date().toISOString(),uploadId:t};return await Bs(Hs,{[n]:s,updatedAt:sa()},{merge:!0}),await mE(n,s),s}async function fE(n){await Ow(Hs,{[n]:jw(),updatedAt:sa()})}async function pE(n,e={nyanCatFile:null,vaynerFile:null}){var i,a;const t=`run-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,r=hE(t);await WT(qs(zs,r),JSON.stringify(n),"raw",{contentType:"application/json"});const s={version:n.version??2,storagePath:r,markets:n.markets??[],weeks:n.weeks??[],stats:n.stats,nyanCatName:((i=e.nyanCatFile)==null?void 0:i.name)??null,vaynerName:((a=e.vaynerFile)==null?void 0:a.name)??null,updatedAt:new Date().toISOString()};return await Bs(Hs,{matchSummary:s,updatedAt:sa()},{merge:!0}),await gE(s,e),s}async function Uc(n){const e=await Ad(qs(zs,n.storagePath)),t=await fetch(e);if(!t.ok)throw new Error(`Failed to download ${n.name}: HTTP ${t.status}`);const r=await t.blob();return new File([r],n.name,{type:r.type||"text/csv"})}async function mE(n,e){const t=`upload-${e.uploadId}-${n}`,r={id:t,type:"upload",kind:n,createdAt:e.uploadedAt,nyanCatFile:n==="nyanCat"?e:null,vaynerFile:n==="vayner"?e:null};await Bs(js(Ws,t),r)}async function gE(n,e){const t=`run-${n.updatedAt}-${Math.random().toString(36).slice(2,6)}`,r={id:t,type:"run",createdAt:n.updatedAt,nyanCatFile:e.nyanCatFile,vaynerFile:e.vaynerFile,summary:n};await Bs(js(Ws,t),r)}function _E(n,e=100){const t=Sw(Ws,Cw("createdAt","desc"),Nw(e));return od(t,r=>{const s=[];r.forEach(i=>s.push(i.data())),n(s)},r=>{console.error("[sharedState] archive subscribe failed:",r),n([])})}async function yE(n){await Mw(js(Ws,n))}function vE(n){try{return new Date(n).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}catch{return n}}function wE({market:n}){const[e,t]=B.useState([]),[r,s]=B.useState(new Set),[i,a]=B.useState(!1);B.useEffect(()=>_E(p=>{t(p),a(!0),s(_=>_.size>0||p.length===0?_:new Set([p[0].id]))}),[]);const l=d=>{s(p=>{const _=new Set(p);return _.has(d)?_.delete(d):_.add(d),_})},u=async d=>{await yE(d)};return f.jsxs("div",{children:[f.jsxs("div",{className:"mb-6 p-4 bg-card border border-border rounded-lg flex gap-3",children:[f.jsx(fl,{className:"size-5 text-primary flex-shrink-0 mt-0.5"}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-foreground font-medium mb-1",children:"Historical Archive"}),f.jsx("p",{className:"text-muted-foreground text-sm",children:"Every CSV upload and every matching run is auto-archived here and shared across all visitors. Raw CSVs remain downloadable; run results link to the stored JSON."})]})]}),i?e.length===0?f.jsxs("div",{className:"p-8 text-center bg-card rounded-lg border border-border",children:[f.jsx(fl,{className:"size-12 mx-auto mb-4 text-muted-foreground"}),f.jsx("p",{className:"text-muted-foreground",children:"No archived entries yet. Uploading a CSV or running matching creates archive entries automatically."})]}):f.jsx("div",{className:"space-y-3",children:e.map(d=>{var D,A;const p=r.has(d.id),_=d.type==="upload",I=_?io:Af,S=_?"text-purple-400":"text-cyan-400",C=_?`Upload — ${d.kind==="nyanCat"?"Nyan Cat":"Vayner"}`:"Matching run";return f.jsxs("div",{className:"bg-card border border-border rounded-lg overflow-hidden",children:[f.jsxs("div",{className:"w-full px-5 py-4 flex items-center justify-between gap-3",children:[f.jsxs("button",{onClick:()=>l(d.id),className:"flex items-center gap-3 flex-1 text-left hover:opacity-80 transition-opacity",children:[f.jsx(I,{className:`size-5 ${S}`}),f.jsxs("div",{children:[f.jsxs("h3",{className:"text-foreground font-medium",children:[vE(d.createdAt)," — ",C]}),f.jsx("p",{className:"text-sm text-muted-foreground",children:_?((D=d.nyanCatFile)==null?void 0:D.name)||((A=d.vaynerFile)==null?void 0:A.name)||"—":d.summary?`${d.summary.stats.cellCount} cells · ${d.summary.weeks.length} weeks · ${d.summary.markets.length} markets`:"—"})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{onClick:()=>u(d.id),className:"p-2 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors","aria-label":"Delete archive entry",children:f.jsx(Rf,{className:"size-4"})}),f.jsx("button",{onClick:()=>l(d.id),className:"p-1 rounded hover:bg-muted text-muted-foreground","aria-label":p?"Collapse":"Expand",children:p?f.jsx(Sf,{className:"size-5"}):f.jsx(Kc,{className:"size-5"})})]})]}),p&&f.jsxs("div",{className:"border-t border-border p-5 text-sm space-y-2",children:[d.nyanCatFile&&f.jsxs("div",{className:"text-muted-foreground",children:[f.jsx("span",{className:"text-foreground",children:"Nyan Cat:"})," ",d.nyanCatFile.name," (",(d.nyanCatFile.size/1024).toFixed(1)," KB)"]}),d.vaynerFile&&f.jsxs("div",{className:"text-muted-foreground",children:[f.jsx("span",{className:"text-foreground",children:"Vayner:"})," ",d.vaynerFile.name," (",(d.vaynerFile.size/1024).toFixed(1)," KB)"]}),d.summary&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"text-muted-foreground",children:[f.jsx("span",{className:"text-foreground",children:"Markets:"})," ",d.summary.markets.join(", ")||"—"]}),f.jsxs("div",{className:"text-muted-foreground",children:[f.jsx("span",{className:"text-foreground",children:"Weeks:"})," ",d.summary.weeks.join(", ")||"—"]}),f.jsxs("div",{className:"text-muted-foreground",children:[f.jsx("span",{className:"text-foreground",children:"Parsed:"})," ",d.summary.stats.internalParsed," internal · ",d.summary.stats.externalParsed," external",d.summary.stats.globalInternal+d.summary.stats.globalExternal>0&&f.jsxs(f.Fragment,{children:[" · ",d.summary.stats.globalInternal+d.summary.stats.globalExternal," Global"]})]}),d.summary.stats.internalSkippedNoWeek+d.summary.stats.externalSkippedNoWeek>0&&f.jsxs("div",{className:"text-yellow-500",children:[d.summary.stats.internalSkippedNoWeek+d.summary.stats.externalSkippedNoWeek," trends skipped (no date)"]})]})]})]},d.id)})}):f.jsx("div",{className:"p-8 text-center bg-card rounded-lg border border-border",children:f.jsx("p",{className:"text-muted-foreground",children:"Loading archive…"})})]})}const Cd="shorts-intel-approved-v1",Nd=52;function Pd(n=new Date){const e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),t=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-t);const r=new Date(Date.UTC(e.getUTCFullYear(),0,1)),s=Math.ceil(((e.getTime()-r.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(s).padStart(2,"0")}`}function kd(n){const e=n.match(/^(\d{4})-W(\d{2})$/);if(!e)return n;const t=parseInt(e[1],10),r=parseInt(e[2],10),s=new Date(Date.UTC(t,0,4)),i=new Date(s.getTime());i.setUTCDate(s.getUTCDate()-(s.getUTCDay()+6)%7+(r-1)*7);const a=["January","February","March","April","May","June","July","August","September","October","November","December"];return`Week of ${i.getUTCDate()} ${a[i.getUTCMonth()]} ${i.getUTCFullYear()}`}function Dd(n,e){return`${n}-${e}`}function ha(){if(typeof window>"u")return[];try{const n=window.localStorage.getItem(Cd);if(!n)return[];const e=JSON.parse(n);return Array.isArray(e)?e:[]}catch{return[]}}function Vd(n){if(!(typeof window>"u"))try{window.localStorage.setItem(Cd,JSON.stringify(n))}catch{}}function TE(n){const e=Pd(),t=Dd(n,e),r=ha(),s=r.find(a=>a.id===t);if(s)return s;const i={id:t,market:n,weekId:e,createdAt:new Date().toISOString(),trends:[],sentAt:null,sentKbFilename:null,sentKbScope:null};return Vd([i,...r].slice(0,Nd)),i}function Od(n){return TE(n)}function EE(n){const e=ha();return(n?e.filter(r=>r.market===n):e).sort((r,s)=>r.weekId<s.weekId?1:-1)}function da(n,e){const t=Pd(),r=Dd(n,t),s=ha();let i=s.find(u=>u.id===r);i||(i={id:r,market:n,weekId:t,createdAt:new Date().toISOString(),trends:[],sentAt:null,sentKbFilename:null,sentKbScope:null});const a=e(i)??i,l=[a,...s.filter(u=>u.id!==r)].slice(0,Nd);return Vd(l),a}function IE(n,e){return da(n,t=>t.trends.some(r=>r.id===e.id)?t:{...t,trends:[...t.trends,e],sentAt:null,sentKbFilename:null,sentKbScope:null})}function bE(n,e){return da(n,t=>({...t,trends:t.trends.filter(r=>r.id!==e),sentAt:null,sentKbFilename:null,sentKbScope:null}))}function xE(n,e,t){return da(n,r=>({...r,sentAt:new Date().toISOString(),sentKbFilename:e,sentKbScope:t}))}const Md="https://agent-collective-v2-vx7ggif5xa-uc.a.run.app",AE={JP:"jp",KR:"kr",IN:"in",ID:"id"};function Ld(n){return AE[n]??"global"}function jd(n){return`intel-hub-brief-${n.market.toLowerCase()}-${n.weekId}.md`}function Ud(n){const e=new Date().toISOString().slice(0,10),t=[];return t.push(`# Shorts Intel Hub — Approved Topics (${n.market}, ${n.weekId})`),t.push(""),t.push("**Source:** Shorts Intel Hub"),t.push(`**Market:** ${n.market}`),t.push(`**Week:** ${n.weekId}`),t.push(`**Sent:** ${e}`),t.push(`**Topic count:** ${n.trends.length}`),t.push(""),t.push("The following topics were human-approved by the APAC marketing team this week. Use them as the canonical brief inputs when generating creative concepts, prompts, or campaign strategies for this market."),t.push(""),t.push("---"),t.push(""),n.trends.forEach((r,s)=>{t.push(...RE(r,s+1)),t.push(""),t.push("---"),t.push("")}),t.join(`
`)}function RE(n,e){var l;const t=[];t.push(`## ${e}. ${n.topicName}`),t.push(""),n.description&&(t.push(n.description),t.push(""));const s=[["Source",n.source],["Target demo",n.targetDemo],["Primary markets",(l=n.primaryMarkets)==null?void 0:l.join(", ")],["Trend velocity",n.trendVelocity],["Trend scale",n.trendScale],["Creation complexity",n.creationComplexity],["Trend bucket",n.trendBucket],["Sentiment",n.sentiment],["Content quality",n.contentQuality],["Brand safe",n.brandSafe===void 0?void 0:n.brandSafe?"Yes":"No"],["GenAI",n.genAI?"Yes":void 0],["AI tool",n.aiTool],["Audio track",n.audio],["Rank",n.rank?`#${n.rank}`:void 0],["Score",typeof n.score=="number"?n.score.toFixed(1):void 0]].filter(([,u])=>u!=null&&u!=="");if(s.length){t.push("| Field | Value |"),t.push("|---|---|");for(const[u,d]of s)t.push(`| ${u} | ${d} |`);t.push("")}const a=[["Views",n.viewsVolume],["Views velocity",n.viewsVelocity],["Watchtime",n.watchtimeVolume],["Watchtime velocity",n.watchtimeVelocity],["Creation rate",n.creationRate],["Engagement rate",n.engagementRate!==void 0?`${(n.engagementRate*100).toFixed(1)}%`:void 0]].filter(u=>u[1]!==void 0&&u[1]!=="");if(a.length){t.push("**Performance**"),t.push("");for(const[u,d]of a)t.push(`- ${u}: ${d}`);t.push("")}return n.hashtags&&n.hashtags.length&&(t.push(`**Hashtags:** ${n.hashtags.map(u=>u.startsWith("#")?u:`#${u}`).join(" ")}`),t.push("")),n.referenceLink&&(t.push(`**Reference:** ${n.referenceLink}`),t.push("")),t}async function SE(n){if(!n.trends.length)throw new Error("No approved topics to send.");const e=Ud(n),t=jd(n),r=Ld(n.market),s=new FormData;s.append("scope",r),s.append("file",new Blob([e],{type:"text/markdown"}),t);const i=await fetch(`${Md}/api/kb/upload`,{method:"POST",body:s});if(!i.ok){const a=await i.text().catch(()=>"");throw new Error(`Agent Collective upload failed (${i.status}): ${a||i.statusText}`)}return{ok:!0,kbFilename:t,kbScope:r,markdown:e}}function CE(){return Md}function NE({market:n,version:e,onChanged:t}){const[r,s]=B.useState(!1),[i,a]=B.useState(!1),[l,u]=B.useState(null),[d,p]=B.useState(!1),{current:_,history:I}=B.useMemo(()=>{const k=EE(n),L=Od(n),j=k.find(X=>X.id===L.id)??L,$=k.filter(X=>X.id!==j.id&&X.sentAt);return{current:j,history:$}},[n,e]),S=Ld(n),C=!!_.sentAt,D=async()=>{a(!0),u(null);try{const k=await SE(_);xE(n,k.kbFilename,k.kbScope),t()}catch(k){u(k instanceof Error?k.message:"Send failed")}finally{a(!1)}},A=k=>{bE(n,k),t()};return r?f.jsxs("button",{type:"button",onClick:()=>s(!1),className:"flex flex-col items-center gap-2 px-2 py-3 rounded-l-lg border border-border bg-card hover:bg-accent",title:"Open approved topics",children:[f.jsx(Cf,{className:"size-4 text-muted-foreground"}),f.jsx(rs,{className:"size-5 text-green-500"}),f.jsxs("span",{className:"text-[10px] text-muted-foreground [writing-mode:vertical-rl]",children:["Approved (",_.trends.length,")"]})]}):f.jsxs("aside",{className:"w-80 flex-shrink-0 rounded-lg border border-border bg-card flex flex-col min-h-0",children:[f.jsxs("div",{className:"px-3 py-2.5 border-b border-border flex items-center justify-between gap-2",children:[f.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[f.jsx(rs,{className:"size-4 text-green-500 flex-shrink-0"}),f.jsxs("h3",{className:"text-sm font-medium text-foreground truncate",children:["Approved — ",kd(_.weekId)]})]}),f.jsx("button",{type:"button",onClick:()=>s(!0),className:"p-1 rounded hover:bg-accent text-muted-foreground","aria-label":"Collapse sidebar",children:f.jsx(Gc,{className:"size-4"})})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto",children:[f.jsxs("div",{className:"px-3 py-3 border-b border-border",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsxs("span",{className:"text-xs text-muted-foreground",children:[_.trends.length," topic",_.trends.length===1?"":"s"," · ",n]}),C&&f.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px]",children:[f.jsx(Nf,{className:"size-2.5"}),"Sent"]})]}),_.trends.length===0?f.jsx("p",{className:"text-xs text-muted-foreground italic py-2",children:"Click Approve on any trend card to add it to this week's batch."}):f.jsx("ul",{className:"space-y-1.5",children:_.trends.map((k,L)=>f.jsxs("li",{className:"group flex items-start gap-2 p-2 rounded bg-muted/40 text-xs",children:[f.jsxs("span",{className:"text-muted-foreground flex-shrink-0 w-4 text-right",children:[L+1,"."]}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("div",{className:"text-foreground font-medium leading-snug",children:k.topicName}),f.jsxs("div",{className:"text-muted-foreground mt-0.5 truncate",children:[k.source,k.targetDemo?` · ${k.targetDemo}`:""]})]}),f.jsx("button",{type:"button",onClick:()=>A(k.id),className:"opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-accent text-muted-foreground flex-shrink-0","aria-label":`Remove ${k.topicName}`,title:"Remove",children:f.jsx(Qc,{className:"size-3"})})]},k.id))})]}),f.jsx("div",{className:"px-3 py-3 border-b border-border space-y-2",children:C?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"text-[11px] text-muted-foreground",children:["Sent ",_.sentAt?new Date(_.sentAt).toLocaleString():""]}),_.sentKbFilename&&f.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] text-foreground",children:[f.jsx(io,{className:"size-3 flex-shrink-0 text-muted-foreground"}),f.jsx("code",{className:"truncate",children:_.sentKbFilename})]}),f.jsxs("a",{href:CE(),target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-secondary text-secondary-foreground hover:bg-accent text-xs w-full justify-center",children:[f.jsx(Jc,{className:"size-3"}),"Open Agent Collective"]})]}):f.jsxs(f.Fragment,{children:[f.jsxs("button",{type:"button",onClick:D,disabled:i||_.trends.length===0,className:"inline-flex items-center gap-1.5 px-3 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 text-xs w-full justify-center",children:[i?f.jsx(ss,{className:"size-3 animate-spin"}):f.jsx(Pf,{className:"size-3"}),i?"Sending…":"Send batch to Agent Collective"]}),f.jsxs("button",{type:"button",onClick:()=>p(k=>!k),className:"text-[11px] text-primary hover:underline",children:[d?"Hide":"Preview"," brief markdown"]}),f.jsxs("div",{className:"text-[10px] text-muted-foreground",children:["Uploads as ",f.jsx("code",{children:jd(_)})," under KB scope ",f.jsx("code",{children:S}),"."]}),l&&f.jsx("div",{className:"p-2 rounded border border-red-500/50 bg-red-500/10 text-red-400 text-[11px]",children:l}),d&&_.trends.length>0&&f.jsx("pre",{className:"mt-2 p-2 bg-muted rounded text-[10px] text-foreground whitespace-pre-wrap max-h-64 overflow-auto",children:Ud(_)})]})}),I.length>0&&f.jsxs("div",{className:"px-3 py-3",children:[f.jsx("div",{className:"text-[10px] uppercase text-muted-foreground mb-2",children:"Past weeks"}),f.jsx("ul",{className:"space-y-1",children:I.map(k=>f.jsx(PE,{batch:k},k.id))})]})]})]})}function PE({batch:n}){const[e,t]=B.useState(!1);return f.jsxs("li",{className:"rounded border border-border/60 bg-muted/30 text-[11px]",children:[f.jsxs("button",{type:"button",onClick:()=>t(r=>!r),className:"w-full flex items-center justify-between px-2 py-1.5 text-left",children:[f.jsx("span",{className:"text-foreground",children:kd(n.weekId)}),f.jsxs("span",{className:"text-muted-foreground",children:[n.trends.length," · ",n.sentAt?"✓":"—"]})]}),e&&f.jsxs("ul",{className:"px-2 pb-2 space-y-0.5 text-muted-foreground",children:[n.trends.slice(0,10).map(r=>f.jsxs("li",{className:"truncate",children:["• ",r.topicName]},r.id)),n.trends.length>10&&f.jsxs("li",{className:"italic",children:["…",n.trends.length-10," more"]})]})]})}function Fc(n){return n==null||!Number.isFinite(n)?null:n>=1e6?`${(n/1e6).toFixed(1)}M`:n>=1e3?`${(n/1e3).toFixed(1)}K`:String(Math.round(n))}function kE({s:n}){if(!n)return null;const e=n==="positive"?"bg-green-500/20 text-green-400":n==="negative"?"bg-red-500/20 text-red-400":n==="mixed"?"bg-orange-500/20 text-orange-400":"bg-gray-500/20 text-gray-400";return f.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[10px] capitalize ${e}`,children:n})}function DE({v:n}){if(!n)return null;const e=n==="Trending"?"bg-red-500/20 text-red-400":n==="Emerging"?"bg-yellow-500/20 text-yellow-400":"bg-gray-500/20 text-gray-400";return f.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[10px] ${e}`,children:n})}function ws({trend:n,onApprove:e,isApproved:t}){const[r,s]=B.useState(!1),i=n.contentQuality==="potentiallyAISlop",a=n.hidden?"border-dashed border-muted-foreground/40 opacity-70":t?"border-green-500 bg-green-500/5":"border-border hover:border-primary/50",l=n.viewsVolume||Fc(n.views),u=n.watchtimeVolume||Fc(n.watchtimeHours),d=n.engagementRate!==void 0?`${(n.engagementRate*100).toFixed(1)}%`:null;return f.jsxs("div",{className:`bg-card border rounded-md transition-all ${a}`,children:[f.jsx("button",{type:"button",onClick:()=>s(p=>!p),className:"w-full p-2.5 text-left","aria-expanded":r,children:f.jsxs("div",{className:"flex items-start gap-2",children:[f.jsxs("div",{className:"flex-shrink-0 size-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold",children:["#",n.rank]}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex items-start justify-between gap-2",children:[f.jsx("h4",{className:"text-sm text-foreground font-medium leading-tight line-clamp-2 flex-1 min-w-0",children:n.topicName}),f.jsxs("div",{className:"flex-shrink-0 flex items-center gap-1",children:[f.jsxs("div",{className:"text-right",children:[f.jsx("div",{className:"text-sm font-bold text-foreground leading-none",children:n.score}),f.jsx("div",{className:"text-[10px] text-muted-foreground",children:"ERS"})]}),r?f.jsx(Kc,{className:"size-4 text-muted-foreground"}):f.jsx(Gc,{className:"size-4 text-muted-foreground"})]})]}),f.jsxs("div",{className:"flex flex-wrap gap-1 mt-1",children:[f.jsx(DE,{v:n.trendVelocity}),f.jsx(kE,{s:n.sentiment}),n.brandSafe===!1&&f.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px]",children:[f.jsx(kf,{className:"size-2.5"}),"Unsafe"]}),i&&f.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px]",children:[f.jsx(Df,{className:"size-2.5"}),"Review"]}),n.hidden&&f.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px]",children:[f.jsx(Vf,{className:"size-2.5"}),"Hidden"]}),n.genAI&&f.jsx("span",{className:"px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-[10px]",children:"GenAI"})]})]})]})}),r&&f.jsxs("div",{className:"px-2.5 pb-2.5 pt-1 border-t border-border space-y-2 text-[11px]",children:[n.description&&f.jsx("p",{className:"text-foreground leading-snug",children:n.description}),f.jsxs("div",{className:"grid grid-cols-2 gap-x-2 gap-y-1 text-muted-foreground",children:[n.targetDemo&&f.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[f.jsx(Of,{className:"size-3 flex-shrink-0"}),f.jsx("span",{className:"truncate",children:n.targetDemo})]}),n.primaryMarkets&&n.primaryMarkets.length>0&&f.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[f.jsx(Mf,{className:"size-3 flex-shrink-0"}),f.jsx("span",{className:"truncate",children:n.primaryMarkets.join(", ")})]}),n.audio&&f.jsxs("div",{className:"flex items-center gap-1 col-span-2 min-w-0",children:[f.jsx(Lf,{className:"size-3 flex-shrink-0"}),f.jsx("span",{className:"truncate",children:n.audio})]}),n.brandSafe===!0&&f.jsxs("div",{className:"flex items-center gap-1 text-green-400",children:[f.jsx(jf,{className:"size-3 flex-shrink-0"}),"Brand safe"]}),n.creationComplexity&&f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(Uf,{className:"size-3 flex-shrink-0"}),n.creationComplexity]})]}),(l||u||n.creationRate||d)&&f.jsxs("div",{className:"grid grid-cols-4 gap-1 pt-1",children:[l&&f.jsx(Wr,{label:"Views",value:l}),u&&f.jsx(Wr,{label:"Watch",value:u}),n.creationRate&&f.jsx(Wr,{label:"Creates",value:n.creationRate}),d&&f.jsx(Wr,{label:"Eng.",value:d})]}),n.hashtags&&n.hashtags.length>0&&f.jsxs("div",{className:"flex items-start gap-1 text-muted-foreground",children:[f.jsx(Ff,{className:"size-3 flex-shrink-0 mt-0.5"}),f.jsx("span",{className:"leading-snug break-words",children:n.hashtags.slice(0,6).map(p=>p.replace(/^#/,"")).join(" · ")})]}),n.trendBucket&&f.jsxs("div",{className:"text-muted-foreground",children:[f.jsx("span",{className:"text-[10px] uppercase",children:"Bucket:"})," ",n.trendBucket]})]}),f.jsxs("div",{className:"flex items-center gap-1 px-2.5 pb-2.5",children:[n.referenceLink&&f.jsxs("a",{href:n.referenceLink,target:"_blank",rel:"noopener noreferrer",title:"View reference",onClick:p=>p.stopPropagation(),className:"inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary text-secondary-foreground hover:bg-accent text-[11px]",children:[f.jsx(Jc,{className:"size-3"}),"Ref"]}),t?f.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 rounded bg-green-600 text-white text-[11px]",children:[f.jsx(rs,{className:"size-3"}),"Approved"]}):f.jsxs("button",{onClick:p=>{p.stopPropagation(),e(n.id)},title:"Approve for campaign",className:"inline-flex items-center gap-1 px-2 py-1 rounded bg-primary text-primary-foreground hover:opacity-90 text-[11px]",children:[f.jsx(rs,{className:"size-3"}),"Approve"]})]})]})}function Wr({label:n,value:e}){return f.jsxs("div",{className:"p-1 rounded bg-muted/50 text-center",children:[f.jsx("div",{className:"text-[9px] uppercase text-muted-foreground",children:n}),f.jsx("div",{className:"text-[11px] text-foreground font-medium leading-tight",children:e})]})}function VE({pair:n,onApprove:e,approvedIds:t}){return f.jsxs("div",{className:"rounded-md border border-cyan-500/30 bg-card p-2",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[f.jsxs("div",{className:"size-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold",children:["#",n.rank]}),f.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px]",children:[f.jsx(Bf,{className:"size-2.5"}),n.matchStage," · ",Math.round(n.matchScore*100),"%"]}),f.jsxs("div",{className:"ml-auto text-right",children:[f.jsx("div",{className:"text-sm font-bold text-foreground leading-none",children:n.combinedScore.toFixed(1)}),f.jsx("div",{className:"text-[10px] text-muted-foreground",children:"Combined"})]})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-[10px] uppercase text-purple-400 mb-0.5",children:"Internal"}),f.jsx(ws,{trend:n.internal,onApprove:e,isApproved:t.has(n.internal.id)})]}),f.jsxs("div",{children:[f.jsx("div",{className:"text-[10px] uppercase text-cyan-400 mb-0.5",children:"External"}),f.jsx(ws,{trend:n.external,onApprove:e,isApproved:t.has(n.external.id)})]})]})]})}function ki({title:n,count:e,accentClass:t,accentText:r,children:s}){return f.jsxs("div",{className:`flex flex-col rounded-lg border ${t} bg-card min-h-0`,children:[f.jsx("div",{className:"px-3 py-2.5 border-b border-border flex-shrink-0",children:f.jsxs("h3",{className:`font-medium text-sm ${r}`,children:[n," ",f.jsxs("span",{className:"text-muted-foreground font-normal",children:["(",e,")"]})]})}),f.jsx("div",{className:"p-2 space-y-2 overflow-y-auto flex-1 min-h-0",children:e===0?f.jsx("p",{className:"text-xs text-muted-foreground italic text-center py-6",children:"No trends in this track."}):s})]})}function OE({state:n,hydrated:e,market:t,week:r}){const{nyanCat:s,vayner:i,matchResult:a}=n,[l,u]=B.useState(!1),[d,p]=B.useState(null),[_,I]=B.useState(!1),[S,C]=B.useState(0),D=!!a&&a.version!==2,A=B.useMemo(()=>{var y;return!a||!r?null:((y=a.cells)==null?void 0:y[rE(t,r)])??null},[a,t,r]),k=B.useMemo(()=>{const y=Od(t);return new Set(y.trends.map(g=>g.id))},[t,S]),L=B.useMemo(()=>{if(!A)return new Map;const y=new Map;for(const g of A.internal)y.set(g.id,g);for(const g of A.external)y.set(g.id,g);for(const g of A.matching)y.set(g.internal.id,g.internal),y.set(g.external.id,g.external);return y},[A]),j=y=>{const g=L.get(y);g&&(IE(t,g),C(v=>v+1))},$=async()=>{if(!s&&!i){p("Upload at least one CSV on the Data Upload page (ideally both for matching to work).");return}u(!0),p(null);try{const[y,g]=await Promise.all([s?Uc(s):Promise.resolve(null),i?Uc(i):Promise.resolve(null)]),v=await sE(y,g);await pE(v,{nyanCatFile:s,vaynerFile:i})}catch(y){p(y instanceof Error?y.message:"Matching failed")}finally{u(!1)}},X=y=>_?y:y.filter(g=>!g.hidden),Z=(()=>{if(!e)return"Loading latest shared state…";const y=[];return s&&y.push(`Nyan Cat: ${s.name}`),i&&y.push(`Vayner: ${i.name}`),y.length?y.join(" · "):"No CSVs uploaded yet — head to the Data Upload tab."})();return f.jsxs("div",{className:"flex gap-3 items-start",children:[f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"mb-4 p-4 rounded-lg border border-border bg-card",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[f.jsx(Di,{className:"size-5 text-primary"}),f.jsx("h3",{className:"text-foreground font-medium",children:"Run Topic Matching + ERS"})]}),f.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:Z}),f.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[f.jsxs("button",{onClick:$,disabled:l||!e||!s&&!i,className:"inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50",children:[l?f.jsx(ss,{className:"size-4 animate-spin"}):f.jsx(Di,{className:"size-4"}),l?"Matching + ranking…":"Run Matching + Ranking"]}),f.jsxs("label",{className:"flex items-center gap-2 text-sm text-foreground cursor-pointer",children:[f.jsx("input",{type:"checkbox",checked:_,onChange:y=>I(y.target.checked),className:"size-4"}),"Show hidden trends"]})]}),d&&f.jsx("div",{className:"mt-3 p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-red-500 text-sm",children:d})]}),D&&f.jsxs("div",{className:"mb-4 p-3 rounded-lg border border-yellow-500/40 bg-yellow-500/10 text-yellow-500 text-sm",children:["The cached result uses an older format. Click ",f.jsx("strong",{children:"Run Matching + Ranking"})," to refresh with per-market, per-week filtering + normalization."]}),a&&!D&&f.jsxs("div",{className:"mb-4 p-3 rounded-lg border border-border bg-card text-sm",children:[f.jsx("div",{className:"text-muted-foreground mb-1",children:"This upload"}),f.jsxs("div",{className:"flex flex-wrap gap-x-6 gap-y-1 text-foreground",children:[f.jsxs("span",{children:[f.jsx("strong",{children:a.stats.internalParsed})," Nyan Cat parsed"]}),f.jsxs("span",{children:[f.jsx("strong",{children:a.stats.externalParsed})," Vayner parsed"]}),f.jsxs("span",{children:[f.jsx("strong",{children:a.markets.length})," markets · ",f.jsx("strong",{children:a.weeks.length})," weeks · ",f.jsx("strong",{children:a.stats.cellCount})," cells"]}),a.stats.globalInternal+a.stats.globalExternal>0&&f.jsxs("span",{className:"text-cyan-400",children:[a.stats.globalInternal+a.stats.globalExternal," tagged Global"]})]}),(a.stats.internalSkippedNoWeek>0||a.stats.externalSkippedNoWeek>0)&&f.jsxs("div",{className:"mt-2 p-2 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs",children:[f.jsxs("strong",{children:["⚠ ",a.stats.internalSkippedNoWeek," Nyan Cat + ",a.stats.externalSkippedNoWeek," Vayner"]})," trends were skipped because their date column (Nyan: ",f.jsx("code",{children:"shorts_video_published_date"}),", Vayner: ",f.jsx("code",{children:"Date Identified"}),") was missing or unparseable. Check that column in your CSV — week filtering requires a valid date."]}),a.stats.internalParsed===0&&f.jsxs("div",{className:"mt-2 p-2 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs",children:[f.jsx("strong",{children:"⚠ No Nyan Cat trends parsed."})," Check that the CSV has an ",f.jsx("code",{children:"audio_id"})," (or ",f.jsx("code",{children:"Song_title"}),") column per row and that the file was uploaded into the Nyan Cat slot on the Data Upload tab."]}),a.weeks.length===0&&a.stats.internalParsed+a.stats.externalParsed>0&&f.jsxs("div",{className:"mt-2 p-2 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs",children:[f.jsx("strong",{children:"⚠ No weeks found in either CSV."})," Every trend is missing its date field, so nothing falls into a week cell."]})]}),a&&!D&&!A&&r&&f.jsxs("div",{className:"mb-4 p-3 rounded-lg border border-muted bg-muted/40 text-muted-foreground text-sm",children:["No topics for ",t," in ",r,". Try a different market or week."]}),A&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"mb-4 grid grid-cols-2 md:grid-cols-4 gap-2",children:[f.jsx(Kr,{label:"Internal parsed",value:A.stats.internalParsed}),f.jsx(Kr,{label:"External parsed",value:A.stats.externalParsed}),f.jsx(Kr,{label:"Matched",value:A.stats.matched,sub:`${A.stats.matchedByKeyword} kw · ${A.stats.matchedBySemantic} sem`}),f.jsx(Kr,{label:"Unique",value:A.stats.internalOnly+A.stats.externalOnly,sub:`${A.stats.internalOnly} int · ${A.stats.externalOnly} ext`})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",style:{height:"calc(100vh - 320px)",minHeight:"500px"},children:[f.jsx(ki,{title:"Internal (Nyan Cat)",count:X(A.internal).length,accentClass:"border-purple-500/30",accentText:"text-purple-400",children:X(A.internal).map(y=>f.jsx(ws,{trend:y,onApprove:j,isApproved:k.has(y.id)},y.id))}),f.jsx(ki,{title:"Matched Topics",count:A.matching.length,accentClass:"border-cyan-500/30",accentText:"text-cyan-400",children:A.matching.map(y=>f.jsx(VE,{pair:y,onApprove:j,approvedIds:k},`${y.internal.id}::${y.external.id}`))}),f.jsx(ki,{title:"External (Vayner)",count:X(A.external).length,accentClass:"border-cyan-500/30",accentText:"text-cyan-400",children:X(A.external).map(y=>f.jsx(ws,{trend:y,onApprove:j,isApproved:k.has(y.id)},y.id))})]})]})]}),f.jsx(NE,{market:t,version:S,onChanged:()=>C(y=>y+1)})]})}function Kr({label:n,value:e,sub:t}){return f.jsxs("div",{className:"p-3 rounded-lg bg-muted",children:[f.jsx("div",{className:"text-[10px] uppercase text-muted-foreground mb-1",children:n}),f.jsx("div",{className:"text-xl font-bold text-foreground leading-none",children:e}),t&&f.jsx("div",{className:"text-[10px] text-muted-foreground mt-1",children:t})]})}const ME=[{code:"JP",name:"Japan"},{code:"KR",name:"South Korea"},{code:"IN",name:"India"},{code:"ID",name:"Indonesia"}];function LE({state:n,hydrated:e}){const[t,r]=B.useState("JP"),[s,i]=B.useState(null),[a]=B.useState(0),[l,u]=B.useState("summary"),d=B.useMemo(()=>{var p;return((p=n.matchResult)==null?void 0:p.weeks)??[]},[n.matchResult]);return B.useEffect(()=>{if(d.length===0){s!==null&&i(null);return}(!s||!d.includes(s))&&i(d[0])},[d,s]),f.jsx("div",{className:"px-6 py-6",children:f.jsxs("div",{className:"max-w-7xl mx-auto",children:[f.jsxs("div",{className:"mb-6 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.15)]",children:[f.jsxs("div",{className:"mb-6 flex flex-wrap gap-4",children:[f.jsxs("div",{className:"flex-1 min-w-[200px]",children:[f.jsx("label",{className:"block mb-2 text-foreground",children:"Market"}),f.jsx("select",{value:t,onChange:p=>r(p.target.value),className:"w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground",children:ME.map(p=>f.jsx("option",{value:p.code,children:p.name},p.code))})]}),f.jsxs("div",{className:"flex-1 min-w-[200px]",children:[f.jsx("label",{className:"block mb-2 text-foreground",children:"Week"}),f.jsx("select",{value:s??"",onChange:p=>i(p.target.value||null),disabled:d.length===0,className:"w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground disabled:opacity-60",children:d.length===0?f.jsx("option",{value:"",children:"No data yet — run matching first"}):d.map(p=>f.jsx("option",{value:p,children:p},p))})]})]}),f.jsx("div",{className:"mb-6 border-b border-border",children:f.jsxs("div",{className:"flex gap-4",children:[f.jsxs("button",{onClick:()=>u("summary"),className:`px-4 py-3 font-medium transition-colors relative ${l==="summary"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Top Topics & Trends",l==="summary"&&f.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]}),f.jsxs("button",{onClick:()=>u("scoring"),className:`px-4 py-3 font-medium transition-colors relative ${l==="scoring"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Scoring Settings",l==="scoring"&&f.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]}),f.jsxs("button",{onClick:()=>u("archive"),className:`px-4 py-3 font-medium transition-colors relative ${l==="archive"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Archive",l==="archive"&&f.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]})]})}),l==="summary"&&f.jsx(Kf,{market:t,totalTrends:0,approvedCount:a})]}),l==="summary"?f.jsx(OE,{state:n,hydrated:e,market:t,week:s}):l==="scoring"?f.jsx(lE,{}):f.jsx(wE,{market:t})]})})}const Bn={id:"vayner",title:"Vayner CSV (External, trend-level)",subtitle:"One row per curated trend.",filename:"vayner-template.csv",rowGranularity:"One row per trend.",fields:[{name:"Topic Name",required:!0,description:"Short name of the trend",example:"Eid Modest Fashion Transitions"},{name:"Description",required:!0,description:"One-liner summary of the trend",example:"GRWM-style transitions showcasing modest Eid outfits"},{name:"Target Demo",required:!1,description:"Primary demo (free text)",example:"Females 18-34"},{name:"Reference Links",required:!1,description:"Direct link to a reference video",example:"https://youtube.com/shorts/abc123"},{name:"Hashtags (comma-separated)",required:!1,description:"Comma-separated hashtags",example:"#eid, #modest, #grwm"},{name:"Audio Track",required:!1,description:"Audio track name if applicable",example:"Aashiqui (Abdul Hannan)"},{name:"Content Quality",required:!0,description:"Quality gate — controls AI slop filtering",allowedValues:["Not AI Slop","Potential AI Slop","AI Slop",""]},{name:"Brand Safe",required:!0,description:"Hard filter — No hides the trend from default view",allowedValues:["Yes","No"]},{name:"User Sentiment",required:!0,description:"Audience sentiment — Negative hides the trend",allowedValues:["Positive","Mix-Sentiment","Negative","Neutral"]},{name:"Trend Velocity",required:!0,description:"ERS velocity multiplier input",allowedValues:["Trending","Emerging","Niche"]},{name:"Trend Bucket",required:!1,description:"Free-text category bucket",example:"Lifestyle"},{name:"Creation Complexity (Ease of Participation)",required:!1,description:"How hard it is for creators to participate",allowedValues:["Easy","Medium","Hard"]},{name:"Trend Scale (Creation-led/Viewer-led)",required:!1,description:"Who drives the trend",allowedValues:["Creation-Led","Viewer-led"]},{name:"Platforms Trending",required:!1,description:"Comma-separated platforms",example:"YT Shorts, TikTok, IG Reels"},{name:"Primary Markets",required:!1,description:"Comma-separated ISO / region codes",example:"JP, KR"},{name:"Secondary Markets",required:!1,description:"Comma-separated ISO / region codes",example:"ID, IN"},{name:"Platform Origin",required:!1,description:'Originating platform — triggers ERS origin boost if "YT Shorts"',example:"YT Shorts"},{name:"AI Tool",required:!1,description:"AI tool referenced in the trend (if any)",example:"Sora"},{name:"GenAI/non-GenAI",required:!1,description:"Whether the trend is AI-generated",allowedValues:["GenAI","non-GenAI"]},{name:"Initial Trigger",required:!1,description:"What kicked the trend off",example:"Viral TikTok from @creator"},{name:"Engagement Rate",required:!1,description:"Decimal engagement rate (e.g. 0.085 = 8.5%)",example:"0.085"},{name:"Views",required:!0,description:"Aggregate view count",example:"2500000"},{name:"Likes",required:!0,description:"Aggregate likes",example:"180000"},{name:"Comments",required:!0,description:"Aggregate comments",example:"12000"},{name:"Shares (TT-only",required:!1,description:"TikTok shares (header includes leading paren as-is)",example:"5400"},{name:"Saves (TT-only)",required:!1,description:"TikTok saves",example:"3200"},{name:"Creator Subscriber Count",required:!1,description:"Subscribers of the primary creator (drives breakout multiplier)",example:"120000"},{name:"Publication Date",required:!1,description:'Anything Date.parse understands — "March 25, 2026", ISO, etc.',example:"2026-03-25"},{name:"Date Identified",required:!1,description:"When the trend was first curated",example:"2026-03-28"}],notes:["Hard filters — rows matching any of these are scored 0 and hidden: `Brand Safe=No`, `Content Quality=AI Slop`, `User Sentiment=Negative`.",'`Content Quality=Potential AI Slop` surfaces the trend with a "For quality review" pill and applies the Potential AI Slop multiplier from Scoring Settings.',"`Creator Subscriber Count` drives the breakout multiplier: views > subs × heavyThreshold → heavy; views > subs → light.",'A blank cell is treated as "missing" — the scorer falls back to neutral defaults for that signal.']},qn={id:"nyancat",title:"Nyan Cat CSV (Internal, video-level)",subtitle:"One row per YouTube Short. Rows are grouped by audio_id into trends.",filename:"nyancat-template.csv",rowGranularity:"One row per YouTube Short.",groupedBy:"audio_id",fields:[{name:"external_video_id",required:!0,description:"Unique YouTube video ID",example:"dQw4w9WgXcQ"},{name:"audio_id",required:!0,description:"Audio / sound ID — videos are grouped by this into trends",example:"aud_abc123"},{name:"Song_title",required:!0,description:"Human-readable audio name — becomes the trend name",example:"Aashiqui (Abdul Hannan)"},{name:"Song_link",required:!1,description:"Link to the audio reference",example:"https://youtube.com/shorts/xyz"},{name:"Shorts_link",required:!1,description:"Link to this video (used as the reference link for the trend)",example:"https://youtube.com/shorts/abc"},{name:"title",required:!1,description:"Video title — used as description if the audio group has a single video",example:"My Eid GRWM ✨"},{name:"shorts_video_published_date",required:!0,description:"ISO date the video was published",example:"2026-03-22"},{name:"Hashtags",required:!1,description:'JSON array string, e.g. ["#eid","#grwm"]',example:'["#eid","#grwm"]'},{name:"creator_age_bucket",required:!1,description:"Creator age bucket",allowedValues:["AGE_13_17","AGE_18_24","AGE_25_34","AGE_35_44","AGE_45_54"]},{name:"creator_gender",required:!1,description:"Creator gender code",allowedValues:["f","m"]},{name:"shorts_video_upload_country",required:!1,description:"ISO country code — JP/KR/IN/ID/AU/NZ are mapped to market regions",example:"JP"},{name:"elmo_bucket",required:!0,description:"Safety classifier bucket — anything not TRUSTED or LOW_RISK marks the trend unsafe",allowedValues:["TRUSTED","LOW_RISK","MEDIUM_RISK","HIGH_RISK","UNKNOWN"]},{name:"visual_quality_score",required:!0,description:"0–1 score. Group avg <0.3 → AI Slop (hidden); <0.45 → Potential AI Slop",example:"0.72"},{name:"audio_quality_score",required:!0,description:"0–1 score used by IRS quality gate",example:"0.81"},{name:"Views_3D",required:!0,description:"Views in the first 3 days (summed across the audio group)",example:"125000"},{name:"watch_time_hour_3D",required:!0,description:"Watch-time hours in the first 3 days",example:"6200"},{name:"engagement_3D",required:!0,description:"Engagement count (likes + comments, approx) over 3 days",example:"14500"},{name:"downstream_uploads_3d_by_shorts_video_published_date",required:!0,description:"Downstream uploads in 3 days — drives Trending/Emerging/Niche classification",example:"48"},{name:"Total_followers_at_video_published_date",required:!0,description:"Subscribers the creator had when publishing — drives reach ratio",example:"82000"},{name:"Views_1D",required:!0,description:"Views on day 1 — IRS predictive velocity input",example:"38000"},{name:"Views_7D",required:!0,description:"Views in the first 7 days — IRS performance efficiency input",example:"240000"},{name:"watch_time_hour_7D",required:!0,description:"Watch-time hours in the first 7 days",example:"11500"},{name:"engagement_7D",required:!0,description:"Engagement count over 7 days",example:"28000"},{name:"potential_watch_time_hour_7D",required:!0,description:"Max possible watch-time — denominator for IRS stickiness ratio",example:"16000"},{name:"downstream_uploads_7d_by_shorts_video_published_date",required:!0,description:"Downstream uploads in 7 days — IRS additive creation bonus",example:"112"},{name:"linear_reg_7d_pred",required:!1,description:"Linear-regression prediction multiplier for IRS velocity (defaults to 1.0)",example:"1.15"},{name:"Is_CPM_Creator",required:!1,description:"Monetization flag — triggers IRS commercial multiplier",allowedValues:["true","false","yes","no","1","0"]},{name:"monetization_enabled_avod",required:!1,description:"AVOD monetization flag — also triggers IRS commercial multiplier",allowedValues:["true","false","yes","no","1","0"]},{name:"shorts_creation_tools_uploads_lifetime",required:!1,description:"Optional IRS booster — triggers tools multiplier when above threshold",example:"240"},{name:"creator_country_code",required:!1,description:"Optional IRS geo booster — comma-separated ISO codes scale the multiplier",example:"JP,KR"}],notes:["Rows are grouped by `audio_id` into trends; `Song_title` becomes the trend name.","Hard safety filters match Vayner — any non-TRUSTED/LOW_RISK `elmo_bucket` in the group marks the trend as unsafe; avg `visual_quality_score` <0.3 hides the trend.","IRS scores each row then averages across the audio group. Missing IRS fields fall back to neutral defaults (visual/audio quality default to 0.5, monetization to 1.0).","`Hashtags` must be a JSON-array string — rows with malformed JSON are skipped rather than failing the upload."]};function Bc(n){if(n==null)return"";const e=String(n);return e.includes(",")||e.includes('"')||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function jE(n){const e=n.fields.map(r=>Bc(r.name)).join(","),t=n.fields.map(r=>Bc(r.example??"")).join(",");return`${e}
${t}
`}function UE(){const n=e=>{const t=[];t.push(`## ${e.title}`),t.push(""),t.push(e.subtitle),e.groupedBy&&t.push(`Grouped by: \`${e.groupedBy}\``),t.push(""),t.push("| Column | Required | Description |"),t.push("|---|---|---|");for(const r of e.fields){const s=r.allowedValues?`${r.description} (values: ${r.allowedValues.map(i=>i===""?"*(blank)*":`\`${i}\``).join(", ")})`:r.description;t.push(`| \`${r.name}\` | ${r.required?"Yes":"No"} | ${s} |`)}t.push(""),t.push("### Notes");for(const r of e.notes)t.push(`- ${r}`);return t.push(""),t.join(`
`)};return["# Shorts Intel Hub — CSV Upload Spec","","Two CSV formats are supported. The server auto-detects the format from the headers — there is no source flag to set.","","---","",n(qn),"---","",n(Bn),"---","","## Tips","","1. Export directly from your pipeline — the parser handles quoted/multi-line fields per RFC 4180.","2. CSV only. JSON is not supported.",'3. After uploading both files, switch to the Marketing Dashboard and click "Run Matching + Ranking" to generate the three-track view.',"4. These templates are kept in sync with the backend parsers. If your export has extra columns the parser ignores them; if it is missing required columns those signals fall back to neutral defaults.",""].join(`
`)}function qc(n,e,t){const r=new Blob([n],{type:t}),s=URL.createObjectURL(r),i=document.createElement("a");i.href=s,i.download=e,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(s)}function $c({title:n,subtitle:e,accept:t,fileRef:r,kind:s}){const i=B.useRef(null),[a,l]=B.useState(!1),[u,d]=B.useState(!1),[p,_]=B.useState(null),I=async C=>{if(_(null),!C){d(!0);try{await fE(s)}catch(D){_(D instanceof Error?D.message:"Failed to clear file")}finally{d(!1)}return}d(!0);try{await dE(s,C)}catch(D){_(D instanceof Error?D.message:"Upload failed")}finally{d(!1)}},S=C=>{var A;C.preventDefault(),C.stopPropagation(),l(!1);const D=(A=C.dataTransfer.files)==null?void 0:A[0];D&&I(D)};return f.jsxs("div",{className:`flex-1 min-w-[280px] rounded-lg border-2 border-dashed p-6 transition-colors ${a?"border-primary bg-primary/5":"border-border bg-card hover:border-primary/50"}`,onDragEnter:C=>{C.preventDefault(),C.stopPropagation(),l(!0)},onDragOver:C=>{C.preventDefault(),C.stopPropagation()},onDragLeave:C=>{C.preventDefault(),C.stopPropagation(),l(!1)},onDrop:S,children:[f.jsxs("div",{className:"mb-3",children:[f.jsx("h4",{className:"text-foreground font-medium mb-1",children:n}),f.jsx("p",{className:"text-muted-foreground text-xs",children:e})]}),f.jsx("input",{ref:i,type:"file",accept:t,className:"hidden",onChange:C=>{var D;return I(((D=C.target.files)==null?void 0:D[0])??null)}}),r?f.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-md bg-muted",children:[f.jsx(io,{className:"size-5 text-primary flex-shrink-0"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("div",{className:"text-sm text-foreground truncate",children:r.name}),f.jsxs("div",{className:"text-xs text-muted-foreground",children:[(r.size/1024).toFixed(1)," KB · uploaded ",new Date(r.uploadedAt).toLocaleString()]})]}),f.jsx("button",{type:"button",onClick:()=>I(null),disabled:u,className:"flex-shrink-0 p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground disabled:opacity-50","aria-label":"Remove file",children:u?f.jsx(ss,{className:"size-4 animate-spin"}):f.jsx(Qc,{className:"size-4"})})]}):f.jsx("button",{type:"button",onClick:()=>{var C;return(C=i.current)==null?void 0:C.click()},disabled:u,className:"w-full flex flex-col items-center gap-2 py-6 rounded-md border border-dashed border-border hover:border-primary/50 hover:bg-muted transition-colors disabled:opacity-60",children:u?f.jsxs(f.Fragment,{children:[f.jsx(ss,{className:"size-6 text-muted-foreground animate-spin"}),f.jsx("span",{className:"text-sm text-foreground",children:"Uploading…"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Yc,{className:"size-6 text-muted-foreground"}),f.jsx("span",{className:"text-sm text-foreground",children:"Drop CSV here or click to browse"})]})}),p&&f.jsx("div",{className:"mt-2 text-xs text-red-500",children:p})]})}function FE({spec:n}){return f.jsxs("div",{className:"overflow-x-auto",children:[f.jsxs("table",{className:"w-full text-xs text-foreground",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"border-b border-border text-muted-foreground",children:[f.jsx("th",{className:"text-left py-2 pr-3 font-medium",children:"Column"}),f.jsx("th",{className:"text-left py-2 pr-3 font-medium w-[70px]",children:"Required"}),f.jsx("th",{className:"text-left py-2 font-medium",children:"Description"})]})}),f.jsx("tbody",{children:n.fields.map(e=>f.jsxs("tr",{className:"border-b border-border/40 align-top",children:[f.jsx("td",{className:"py-2 pr-3 font-mono text-[11px] whitespace-nowrap",children:e.name}),f.jsx("td",{className:"py-2 pr-3",children:e.required?f.jsx("span",{className:"px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] font-medium",children:"Yes"}):f.jsx("span",{className:"text-muted-foreground text-[10px]",children:"No"})}),f.jsxs("td",{className:"py-2 pr-3 text-muted-foreground",children:[e.description,e.allowedValues&&f.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:e.allowedValues.map(t=>f.jsx("code",{className:"px-1 py-0.5 rounded bg-muted text-foreground text-[10px]",children:t===""?"(blank)":t},t))}),e.example&&!e.allowedValues&&f.jsxs("div",{className:"mt-1 text-[10px] text-muted-foreground/70",children:["e.g. ",f.jsx("code",{className:"text-foreground",children:e.example})]})]})]},e.name))})]}),n.notes.length>0&&f.jsx("div",{className:"mt-4 space-y-1 text-xs text-muted-foreground",children:n.notes.map((e,t)=>f.jsxs("p",{children:["• ",e]},t))})]})}function BE({state:n,hydrated:e}){const[t,r]=B.useState("nyancat"),[s,i]=B.useState(!1),a=t==="nyancat"?qn:Bn,l=UE(),u=p=>{qc(jE(p),p.filename,"text/csv")},d=()=>{qc(l,"intel-hub-upload-guide.md","text/markdown")};return f.jsx("div",{className:"px-6 py-6",children:f.jsxs("div",{className:"max-w-5xl mx-auto",children:[f.jsxs("div",{className:"mb-6 p-4 bg-card border border-border rounded-lg",children:[f.jsx("h3",{className:"text-foreground mb-2",children:"Data Upload"}),f.jsx("p",{className:"text-muted-foreground",children:'Drop in the two CSVs that drive the three-track view: Nyan Cat (internal, video-level) and Vayner (external, trend-level). Files upload to shared storage — everyone viewing the Hub sees the same dataset. Switch to the Marketing Dashboard and click "Run Matching + Ranking" to process them.'}),!e&&f.jsx("p",{className:"text-muted-foreground text-xs mt-2",children:"Loading latest shared state…"})]}),f.jsxs("div",{className:"mb-6 flex flex-wrap gap-4",children:[f.jsx($c,{title:"Nyan Cat CSV (Internal)",subtitle:`Video-level export — ${qn.fields.length} columns, grouped by audio_id.`,accept:".csv,text/csv",fileRef:n.nyanCat,kind:"nyanCat"}),f.jsx($c,{title:"Vayner CSV (External)",subtitle:`Trend-level export — ${Bn.fields.length} columns, one row per trend.`,accept:".csv,text/csv",fileRef:n.vayner,kind:"vayner"})]}),f.jsxs("div",{className:"mb-6 bg-card border border-border rounded-lg p-5",children:[f.jsxs("div",{className:"flex items-start justify-between mb-4 gap-4 flex-wrap",children:[f.jsxs("div",{className:"flex-1 min-w-[240px]",children:[f.jsx("h3",{className:"text-foreground mb-2",children:"Upload Templates & Field Reference"}),f.jsx("p",{className:"text-muted-foreground text-sm",children:"Two separate CSV templates — one per format. Each template includes the exact header row the parser reads plus one example row. Column specs below are generated from the parsers directly, so they stay in sync as the schemas evolve."})]}),f.jsxs("div",{className:"flex flex-col gap-2",children:[f.jsxs("button",{onClick:()=>u(qn),className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm",children:[f.jsx(_i,{className:"size-4"}),"Nyan Cat template (.csv)"]}),f.jsxs("button",{onClick:()=>u(Bn),className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm",children:[f.jsx(_i,{className:"size-4"}),"Vayner template (.csv)"]}),f.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors text-sm",children:[f.jsx(_i,{className:"size-4"}),"Full guide (.md)"]})]})]}),f.jsxs("div",{className:"mb-4 flex gap-2 border-b border-border",children:[f.jsxs("button",{onClick:()=>r("nyancat"),className:`px-3 py-2 text-sm font-medium transition-colors relative ${t==="nyancat"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Nyan Cat (",qn.fields.length,")",t==="nyancat"&&f.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]}),f.jsxs("button",{onClick:()=>r("vayner"),className:`px-3 py-2 text-sm font-medium transition-colors relative ${t==="vayner"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Vayner (",Bn.fields.length,")",t==="vayner"&&f.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]})]}),f.jsxs("div",{className:"mb-4",children:[f.jsx("h4",{className:"text-foreground text-sm font-medium mb-1",children:a.title}),f.jsx("p",{className:"text-xs text-muted-foreground",children:a.subtitle})]}),f.jsx(FE,{spec:a}),f.jsxs("button",{onClick:()=>i(!s),className:"mt-4 text-primary hover:underline text-sm",children:[s?"Hide":"Show"," markdown guide preview"]}),s&&f.jsx("div",{className:"mt-3 p-4 bg-muted rounded-lg overflow-auto max-h-96",children:f.jsx("pre",{className:"text-xs text-foreground whitespace-pre-wrap",children:l})})]}),f.jsxs("div",{className:"p-4 bg-muted rounded-lg",children:[f.jsx("h4",{className:"text-foreground mb-2",children:"Need Help?"}),f.jsxs("p",{className:"text-muted-foreground text-sm",children:["For questions about data format or submission guidelines, contact the APAC Shorts Intel Hub team at"," ",f.jsx("span",{className:"text-primary",children:"shorts-intel@example.com"})]})]})]})})}const qE={nyanCat:null,vayner:null,matchSummary:null,matchResult:null};function $E(){const[n,e]=B.useState("dashboard"),[t,r]=B.useState(qE),[s,i]=B.useState(!1);return B.useEffect(()=>cE(l=>{r(l),i(!0)}),[]),f.jsxs("div",{className:"size-full flex flex-col bg-background",children:[f.jsx("header",{className:"border-b border-border bg-card",children:f.jsx("div",{className:"px-6 py-3",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("div",{className:"flex items-center gap-3",children:f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(qf,{className:"size-8 text-primary"}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-foreground text-lg",children:"Shorts Intel Hub"}),f.jsx("p",{className:"text-muted-foreground text-xs",children:"APAC Marketing Intelligence Platform"})]})]})}),f.jsxs("nav",{className:"flex gap-2",children:[f.jsxs("button",{onClick:()=>e("dashboard"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${n==="dashboard"?"bg-primary text-primary-foreground":"bg-secondary text-secondary-foreground hover:bg-accent"}`,children:[f.jsx($f,{className:"size-4"}),"Marketing Dashboard"]}),f.jsxs("button",{onClick:()=>e("upload"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${n==="upload"?"bg-primary text-primary-foreground":"bg-secondary text-secondary-foreground hover:bg-accent"}`,children:[f.jsx(Yc,{className:"size-4"}),"Data Upload"]})]})]})})}),f.jsx("main",{className:"flex-1 overflow-auto",children:n==="dashboard"?f.jsx(LE,{state:t,hydrated:s}):f.jsx(BE,{state:t,hydrated:s})})]})}const zE=new Qe;function HE(n){return n?n==="ivanho.wz@gmail.com"?!0:n.endsWith("@google.com"):!1}const zc={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#e5e5e5",fontFamily:"system-ui, sans-serif"},Hc={background:"#171717",border:"1px solid #262626",borderRadius:12,padding:40,maxWidth:420,width:"90%",textAlign:"center"},WE={marginTop:20,background:"#fff",color:"#000",border:"none",padding:"10px 20px",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"},KE={color:"#f87171",marginTop:16,fontSize:14},Wc={color:"#737373",fontSize:13,marginTop:8};function GE({children:n}){const[e,t]=B.useState(null),[r,s]=B.useState(!0),[i,a]=B.useState(null),[l,u]=B.useState(!1);B.useEffect(()=>dg(Pi,p=>{p&&!HE(p.email)?(fg(Pi),t(null),a(`${p.email} is not authorized.`)):(t(p),a(null)),s(!1)}),[]);const d=async()=>{u(!0),a(null);try{await Dg(Pi,zE)}catch(p){const _=p instanceof Error?p.message:"Sign-in failed.";a(_)}finally{u(!1)}};return r?f.jsx("div",{style:zc,children:f.jsx("div",{style:Hc,children:f.jsx("p",{style:Wc,children:"Loading…"})})}):e?f.jsx(f.Fragment,{children:n}):f.jsx("div",{style:zc,children:f.jsxs("div",{style:Hc,children:[f.jsx("h1",{style:{margin:0,fontSize:22},children:"Shorts Intel Hub"}),f.jsx("p",{style:Wc,children:"Sign in to continue"}),f.jsx("button",{style:WE,onClick:d,disabled:l,children:l?"Signing in…":"Sign in with Google"}),i&&f.jsx("p",{style:KE,children:i})]})})}Wf.createRoot(document.getElementById("root")).render(f.jsx(GE,{children:f.jsx($E,{})}));
//# sourceMappingURL=index-DNvhf9_o.js.map
