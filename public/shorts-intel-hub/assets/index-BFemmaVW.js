import{j as d,D as fh,S as Ds,r as z,I as ph,a as mh,R as gh,C as ra,F as si,P as _h,T as yh,b as vh,c as _l,d as wh,e as Er,f as yl,g as Eh,X as vl,E as wl,L as Tr,h as Th,i as xh,k as bh,l as Ih,U as Ah,G as Rh,M as Sh,m as Nh,Z as Ch,H as Ph,n as kh,o as Ts,p as El,Y as Vh,q as Dh}from"./ui-vendor-BRW0m05G.js";import{a as jh}from"./react-vendor-OskAq2oX.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var ar={},sa;function Oh(){if(sa)return ar;sa=1;var n=jh();return ar.createRoot=n.createRoot,ar.hydrateRoot=n.hydrateRoot,ar}var Mh=Oh();function Lh({market:n,totalTrends:e,approvedCount:t}){const r=[{label:"Total Active Trends",value:e,icon:fh,color:"text-blue-600",bgColor:"bg-blue-100"},{label:"Approved This Week",value:t,icon:Ds,color:"text-green-600",bgColor:"bg-green-100"}];return d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map((s,o)=>{const a=s.icon;return d.jsxs("div",{className:"bg-card border border-border rounded-lg p-4",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-sm text-muted-foreground",children:s.label}),d.jsx("div",{className:`${s.bgColor} p-2 rounded-lg`,children:d.jsx(a,{className:`size-5 ${s.color}`})})]}),d.jsx("div",{className:"text-2xl font-bold text-foreground",children:s.value})]},o)})})}const Ye={monetization:{commercialMultiplier:1.15},stickiness:{min:.5,max:1.5},quality:{defaultScore:.5},creation:{bonusPerUpload:10},boosters:{tools:{threshold:100,multiplier:1.25},geo:{perCountryBoost:.05,maxMultiplier:1.5}}},hn={velocity:{trending:2.5,emerging:1.5,niche:1},breakout:{heavyMultiplier:1.5,lightMultiplier:1.2,baseMultiplier:1,heavyThreshold:5},scale:{creatorLed:1.5,viewerLed:1},complexity:{easy:1.5,medium:1.2,hard:1},distribution:{perPlatformBoost:.2,perMarketBoost:.15},freshness:{recentDays:7,staleDays:30,stalePenalty:.8},quality:{potentialSlopMultiplier:.6,slopHidden:!0},origin:{youtubeShortsBoost:1.2},irs:Ye},Fh="/shorts-intel-hub/api";async function ii(n,e){const t=`${Fh}${n}`;try{const r=await fetch(t,{...e,headers:{"Content-Type":"application/json",...e==null?void 0:e.headers}});if(!r.ok){const s=await r.json().catch(()=>({}));throw new Error(s.message||`API Error: ${r.status}`)}return r.json()}catch(r){throw console.error("API Fetch Error:",r),r}}async function Uh(){return ii("/ranking/configs")}async function Bh(n){return ii("/ranking/configs",{method:"PUT",body:JSON.stringify({config:n})})}function qh(n,e){return`${n}|${e}`}async function $h(n,e){const[t,r]=await Promise.all([n?ia(n):Promise.resolve(null),e?ia(e):Promise.resolve(null)]);return ii("/match-and-rank",{method:"POST",body:JSON.stringify({nyanCatContent:t,vaynerContent:r})})}function ia(n){return new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result,o=s.indexOf(",");e(o>=0?s.slice(o+1):s)},r.onerror=()=>t(r.error),r.readAsDataURL(n)})}function oa(n){var t,r,s,o,a,c,h,f;const e=hn;return n?{...e,...n,velocity:{...e.velocity,...n.velocity},breakout:{...e.breakout,...n.breakout},scale:{...e.scale,...n.scale},complexity:{...e.complexity,...n.complexity},distribution:{...e.distribution,...n.distribution},freshness:{...e.freshness,...n.freshness},quality:{...e.quality,...n.quality},origin:{...e.origin,...n.origin},irs:{...Ye,...n.irs??{},monetization:{...Ye.monetization,...((t=n.irs)==null?void 0:t.monetization)??{}},stickiness:{...Ye.stickiness,...((r=n.irs)==null?void 0:r.stickiness)??{}},quality:{...Ye.quality,...((s=n.irs)==null?void 0:s.quality)??{}},creation:{...Ye.creation,...((o=n.irs)==null?void 0:o.creation)??{}},boosters:{tools:{...Ye.boosters.tools,...((c=(a=n.irs)==null?void 0:a.boosters)==null?void 0:c.tools)??{}},geo:{...Ye.boosters.geo,...((f=(h=n.irs)==null?void 0:h.boosters)==null?void 0:f.geo)??{}}}}}:e}const Tl=[{title:"Velocity Multiplier",description:"Multiplier applied based on Vayner Trend Velocity tag.",group:"ERS",fields:[{label:"Trending",description:"Applied when Trend Velocity = Trending",path:["velocity","trending"],step:.1},{label:"Emerging",description:"Applied when Trend Velocity = Emerging",path:["velocity","emerging"],step:.1},{label:"Niche",description:"Applied when Trend Velocity = Niche",path:["velocity","niche"],step:.1}]},{title:"Breakout Multiplier",description:"Boost based on views relative to creator subs.",group:"ERS",fields:[{label:"Heavy multiplier",description:"Applied when views > subs × threshold",path:["breakout","heavyMultiplier"],step:.1},{label:"Light multiplier",description:"Applied when views > subs",path:["breakout","lightMultiplier"],step:.1},{label:"Base multiplier",description:"Applied otherwise",path:["breakout","baseMultiplier"],step:.1},{label:"Heavy threshold",description:'Multiple of subs for "heavy" breakout',path:["breakout","heavyThreshold"],step:1,min:1}]},{title:"Participation & Replicability",description:"How trend scale and creation complexity affect the score.",group:"ERS",fields:[{label:"Creation-Led scale",description:"Applied to Creation-Led / Creator-Led trends",path:["scale","creatorLed"],step:.1},{label:"Viewer-led scale",description:"Applied to Viewer-led trends",path:["scale","viewerLed"],step:.1},{label:"Easy complexity",description:"Easy or Low complexity",path:["complexity","easy"],step:.1},{label:"Medium complexity",description:"Medium complexity",path:["complexity","medium"],step:.1},{label:"Hard complexity",description:"Hard complexity",path:["complexity","hard"],step:.1}]},{title:"Distribution & Ubiquity",description:"Boost per platform and per market the trend appears in.",group:"ERS",fields:[{label:"Per-platform boost",description:"Added per platform listed (e.g. 0.2 = +20% per platform)",path:["distribution","perPlatformBoost"],step:.05},{label:"Per-market boost",description:"Added per primary market listed",path:["distribution","perMarketBoost"],step:.05}]},{title:"Freshness",description:"Reward trends caught early; penalize stale ones.",group:"ERS",fields:[{label:"Recent days threshold",description:"If identified within N days of publication, apply 1 + 1/days boost",path:["freshness","recentDays"],step:1,min:1},{label:"Stale days threshold",description:"Beyond N days, apply stale penalty",path:["freshness","staleDays"],step:1,min:1},{label:"Stale penalty",description:"Multiplier applied when stale",path:["freshness","stalePenalty"],step:.05,max:1}]},{title:"Quality & Origin",description:"Downweight Potential AI Slop and boost YT Shorts origin.",group:"ERS",fields:[{label:"Potential AI Slop multiplier",description:"Applied to trends flagged Potential AI Slop",path:["quality","potentialSlopMultiplier"],step:.05,max:1},{label:"YT Shorts origin boost",description:"Applied when Platform Origin includes YT Shorts",path:["origin","youtubeShortsBoost"],step:.1}]},{title:"Monetization",description:"Boost applied to CPM creators or videos with AVOD monetization enabled.",group:"IRS",fields:[{label:"Commercial multiplier",description:"Applied when Is_CPM_Creator or monetization_enabled_avod is true",path:["irs","monetization","commercialMultiplier"],step:.05}]},{title:"Stickiness Ratio",description:"Clamp range for watch_time / potential_watch_time ratio.",group:"IRS",fields:[{label:"Min stickiness",description:"Lower clamp — raw ratios below this are pulled up",path:["irs","stickiness","min"],step:.05,min:0},{label:"Max stickiness",description:"Upper clamp — raw ratios above this are pulled down",path:["irs","stickiness","max"],step:.05,min:0}]},{title:"Quality Default",description:"Fallback score used when a video has missing visual or audio quality signals.",group:"IRS",fields:[{label:"Default quality score",description:"Used when visual_quality_score or audio_quality_score is missing (0–1)",path:["irs","quality","defaultScore"],step:.05,min:0,max:1}]},{title:"Creation Anchor",description:"Additive bonus per downstream upload — rewards trends driving creator participation.",group:"IRS",fields:[{label:"Bonus per upload",description:"Points added for each downstream_uploads_7d (additive, not multiplicative)",path:["irs","creation","bonusPerUpload"],step:1,min:0}]},{title:"Optional Booster: Creation Tools",description:"Extra multiplier for creators who heavily use shorts creation tools.",group:"IRS",fields:[{label:"Uploads threshold",description:"shorts_creation_tools_uploads_lifetime must exceed this to trigger",path:["irs","boosters","tools","threshold"],step:10,min:0},{label:"Tools multiplier",description:"Applied once threshold is met",path:["irs","boosters","tools","multiplier"],step:.05,min:1}]},{title:"Optional Booster: Geo",description:"Extra multiplier scaling with number of distinct creator countries.",group:"IRS",fields:[{label:"Per-country boost",description:"Added to multiplier for each listed creator country",path:["irs","boosters","geo","perCountryBoost"],step:.01,min:0},{label:"Max multiplier",description:"Ceiling for the geo booster regardless of country count",path:["irs","boosters","geo","maxMultiplier"],step:.05,min:1}]}],zh=Tl.filter(n=>n.group==="ERS"),Hh=Tl.filter(n=>n.group==="IRS");function aa(n,e){return e.reduce((t,r)=>t==null?t:t[r],n)??0}function Kh(n,e,t){const r=JSON.parse(JSON.stringify(n));let s=r;for(let o=0;o<e.length-1;o++)s=s[e[o]];return s[e[e.length-1]]=t,r}function Gh(){const[n,e]=z.useState(hn),[t,r]=z.useState(hn),[s,o]=z.useState(!1),[a,c]=z.useState(!1),[h,f]=z.useState(null),[m,v]=z.useState(null);z.useEffect(()=>{let A=!1;return Uh().then(k=>{if(A)return;const M=oa(k.config);e(M),r(M)}).catch(()=>{}),()=>{A=!0}},[]);const b=(A,k)=>{e(M=>{const F=Kh(M,A,k);return o(!0),F})},S=()=>{e(A=>({...A,quality:{...A.quality,slopHidden:!A.quality.slopHidden}})),o(!0)},N=async()=>{c(!0),f(null),v(null);try{const A=await Bh(n),k=oa(A.config);r(k),e(k),o(!1),v("Scoring config saved — ranking will update on next upload.")}catch(A){f(A instanceof Error?A.message:"Save failed")}finally{c(!1)}},V=()=>{e(hn),o(JSON.stringify(hn)!==JSON.stringify(t))};return d.jsxs("div",{className:"max-w-4xl",children:[d.jsxs("div",{className:"mb-6 p-4 bg-card border border-border rounded-lg flex gap-3",children:[d.jsx(ph,{className:"size-5 text-primary flex-shrink-0 mt-0.5"}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-foreground font-medium mb-1",children:"Ranking Scores — ERS (Vayner) + IRS (Nyan Cat)"}),d.jsxs("p",{className:"text-muted-foreground text-sm",children:["Vayner trends are ranked by ",d.jsx("strong",{children:"ERS"})," (External Ranking Score) and Nyan Cat trends by ",d.jsx("strong",{children:"IRS"})," (Internal Ranking Score). Both pipelines apply the same hard safety filters upstream — Brand Safe=No, negative sentiment, or AI Slop → hidden. Tune the multipliers below; changes take effect on the next upload."]})]})]}),h&&d.jsx("div",{className:"mb-4 p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-red-500 text-sm",children:h}),m&&d.jsx("div",{className:"mb-4 p-3 rounded-lg border border-green-500/50 bg-green-500/10 text-green-600 text-sm",children:m}),d.jsxs("div",{className:"mb-3 pt-2",children:[d.jsx("h3",{className:"text-foreground font-semibold",children:"ERS — External Ranking Score (Vayner)"}),d.jsx("p",{className:"text-xs text-muted-foreground",children:"Applied to curated Vayner trend-level rows."})]}),zh.map(A=>d.jsxs("div",{className:"mb-6 bg-card border border-border rounded-lg p-5",children:[d.jsxs("div",{className:"mb-4",children:[d.jsx("h4",{className:"text-foreground font-medium mb-1",children:A.title}),d.jsx("p",{className:"text-muted-foreground text-sm",children:A.description})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:A.fields.map(k=>{const M=k.path,F=aa(n,M);return d.jsxs("div",{className:"p-3 rounded-lg bg-muted",children:[d.jsx("label",{className:"block text-sm font-medium text-foreground mb-1",children:k.label}),d.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:k.description}),d.jsx("input",{type:"number",step:k.step??.01,min:k.min,max:k.max,value:F,onChange:$=>b(M,parseFloat($.target.value)||0),className:"w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground"})]},M.join("."))})})]},A.title)),d.jsxs("div",{className:"mb-3 pt-4 border-t border-border",children:[d.jsx("h3",{className:"text-foreground font-semibold mt-4",children:"IRS — Internal Ranking Score (Nyan Cat)"}),d.jsx("p",{className:"text-xs text-muted-foreground",children:"Scored per video then aggregated by audio_id. Core signals (performance, velocity, quality, stickiness) come straight from the Nyan Cat feed."})]}),Hh.map(A=>d.jsxs("div",{className:"mb-6 bg-card border border-border rounded-lg p-5",children:[d.jsxs("div",{className:"mb-4",children:[d.jsx("h4",{className:"text-foreground font-medium mb-1",children:A.title}),d.jsx("p",{className:"text-muted-foreground text-sm",children:A.description})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:A.fields.map(k=>{const M=k.path,F=aa(n,M);return d.jsxs("div",{className:"p-3 rounded-lg bg-muted",children:[d.jsx("label",{className:"block text-sm font-medium text-foreground mb-1",children:k.label}),d.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:k.description}),d.jsx("input",{type:"number",step:k.step??.01,min:k.min,max:k.max,value:F,onChange:$=>b(M,parseFloat($.target.value)||0),className:"w-full px-3 py-2 rounded-lg border border-border bg-card text-foreground"})]},M.join("."))})})]},A.title)),d.jsxs("div",{className:"mb-6 bg-card border border-border rounded-lg p-5 flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("h4",{className:"text-foreground font-medium mb-1",children:"Hide AI Slop by default"}),d.jsx("p",{className:"text-muted-foreground text-sm",children:"When on, trends tagged AI Slop are hidden from dashboards. Turn off to include them in the ranking regardless."})]}),d.jsx("button",{onClick:S,className:`relative w-12 h-6 rounded-full transition-colors ${n.quality.slopHidden?"bg-primary":"bg-muted-foreground/30"}`,children:d.jsx("span",{className:`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${n.quality.slopHidden?"translate-x-6":""}`})})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsxs("button",{onClick:N,disabled:!s||a,className:`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-opacity ${!s||a?"bg-muted text-muted-foreground cursor-not-allowed":"bg-primary text-primary-foreground hover:opacity-90"}`,children:[d.jsx(mh,{className:"size-5"}),a?"Saving…":"Save Changes"]}),d.jsxs("button",{onClick:V,className:"flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors",children:[d.jsx(gh,{className:"size-5"}),"Reset to Defaults"]})]}),d.jsxs("div",{className:"mt-8 p-5 bg-muted rounded-lg",children:[d.jsx("h4",{className:"text-foreground font-medium mb-3",children:"ERS Formula (Vayner)"}),d.jsx("pre",{className:"text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed",children:`base_score = (likes + comments) / max(views, 1) * 100 * breakout_mult
context_bonus = scale × complexity × distribution × market × freshness × quality × origin
ERS = base_score × velocity × context_bonus

Hard filters → ERS = null (hidden):
  Brand Safe = No
  User Sentiment = Negative
  Content Quality = AI Slop

Soft filters → ERS reduced but visible with review pill:
  Content Quality = Potential AI Slop (× ${n.quality.potentialSlopMultiplier})`})]}),d.jsxs("div",{className:"mt-6 p-5 bg-muted rounded-lg",children:[d.jsx("h4",{className:"text-foreground font-medium mb-3",children:"IRS Formula (Nyan Cat)"}),d.jsx("pre",{className:"text-xs text-muted-foreground whitespace-pre-wrap leading-relaxed",children:`perf_efficiency   = log(watch_time_7D + 1) × engagement_7D × (Views_7D / max(subs, 1))
pred_velocity     = (Views_1D / max(Views_7D/7, 0.1)) × linear_reg_7d_pred
quality_scale     = (visual_quality + audio_quality) / 2
stickiness_mult   = clamp(watch_time / potential_watch_time, ${n.irs.stickiness.min}, ${n.irs.stickiness.max})
commercial_mult   = ${n.irs.monetization.commercialMultiplier} if CPM or monetized else 1.0

IRS_core  = perf_efficiency × pred_velocity × quality_scale × stickiness_mult × commercial_mult
IRS_final = IRS_core + (downstream_uploads_7d × ${n.irs.creation.bonusPerUpload})

Trend-level IRS = mean of per-video IRS across the audio_id group.

Same hard filters as ERS apply upstream (Brand Safe=No / AI Slop / Negative → hidden).`})]})]})}var la={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],c=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,v=(o&3)<<4|c>>4;let b=(c&15)<<2|f>>6,S=f&63;h||(S=64,a||(b=64)),r.push(t[m],t[v],t[b],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const v=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||v==null)throw new Qh;const b=o<<2|c>>4;if(r.push(b),f!==64){const S=c<<4&240|f>>2;if(r.push(S),v!==64){const N=f<<6&192|v;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yh=function(n){const e=xl(n);return bl.encodeByteArray(e,!0)},xr=function(n){return Yh(n).replace(/\./g,"")},Xh=function(n){try{return bl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zh=()=>Jh().__FIREBASE_DEFAULTS__,ed=()=>{if(typeof process>"u"||typeof la>"u")return;const n=la.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},td=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xh(n[1]);return e&&JSON.parse(e)},oi=()=>{try{return Zh()||ed()||td()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nd=n=>{var e,t;return(t=(e=oi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Il=n=>{const e=nd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Al=()=>{var n;return(n=oi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Rl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xr(JSON.stringify(t)),xr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function id(){var n;const e=(n=oi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function od(){return!id()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ad(){try{return typeof indexedDB=="object"}catch{return!1}}function ld(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="FirebaseError";class Et extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=cd,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?ud(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Et(s,c,r)}}function ud(n,e){return n.replace(hd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const hd=/\{\$([^}]+)}/g;function js(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(ca(o)&&ca(a)){if(!js(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ca(n){return n!==null&&typeof n=="object"}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class kt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pd(e))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dt){return this.instances.has(e)}getOptions(e=dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dt){return this.component?this.component.multipleInstances?e:dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fd(n){return n===dt?void 0:n}function pd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const gd={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},_d=G.INFO,yd={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},vd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=yd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=_d,this._logHandler=vd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const wd=(n,e)=>e.some(t=>n instanceof t);let ua,ha;function Ed(){return ua||(ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Td(){return ha||(ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cl=new WeakMap,Os=new WeakMap,Pl=new WeakMap,xs=new WeakMap,ai=new WeakMap;function xd(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Ze(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Cl.set(t,n)}).catch(()=>{}),ai.set(e,n),e}function bd(n){if(Os.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Os.set(n,e)}let Ms={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Os.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ze(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Id(n){Ms=n(Ms)}function Ad(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bs(this),e,...t);return Pl.set(r,e.sort?e.sort():[e]),Ze(r)}:Td().includes(n)?function(...e){return n.apply(bs(this),e),Ze(Cl.get(this))}:function(...e){return Ze(n.apply(bs(this),e))}}function Rd(n){return typeof n=="function"?Ad(n):(n instanceof IDBTransaction&&bd(n),wd(n,Ed())?new Proxy(n,Ms):n)}function Ze(n){if(n instanceof IDBRequest)return xd(n);if(xs.has(n))return xs.get(n);const e=Rd(n);return e!==n&&(xs.set(n,e),ai.set(e,n)),e}const bs=n=>ai.get(n);function Sd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),c=Ze(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ze(a.result),h.oldVersion,h.newVersion,Ze(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Nd=["get","getKey","getAll","getAllKeys","count"],Cd=["put","add","delete","clear"],Is=new Map;function da(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Is.get(e))return Is.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Cd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nd.includes(t)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&h.done]))[0]};return Is.set(e,o),o}Id(n=>({...n,get:(e,t,r)=>da(e,t)||n.get(e,t,r),has:(e,t)=>!!da(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function kd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ls="@firebase/app",fa="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Nl("@firebase/app"),Vd="@firebase/app-compat",Dd="@firebase/analytics-compat",jd="@firebase/analytics",Od="@firebase/app-check-compat",Md="@firebase/app-check",Ld="@firebase/auth",Fd="@firebase/auth-compat",Ud="@firebase/database",Bd="@firebase/data-connect",qd="@firebase/database-compat",$d="@firebase/functions",zd="@firebase/functions-compat",Hd="@firebase/installations",Kd="@firebase/installations-compat",Gd="@firebase/messaging",Wd="@firebase/messaging-compat",Qd="@firebase/performance",Yd="@firebase/performance-compat",Xd="@firebase/remote-config",Jd="@firebase/remote-config-compat",Zd="@firebase/storage",ef="@firebase/storage-compat",tf="@firebase/firestore",nf="@firebase/vertexai-preview",rf="@firebase/firestore-compat",sf="firebase",of="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="[DEFAULT]",af={[Ls]:"fire-core",[Vd]:"fire-core-compat",[jd]:"fire-analytics",[Dd]:"fire-analytics-compat",[Md]:"fire-app-check",[Od]:"fire-app-check-compat",[Ld]:"fire-auth",[Fd]:"fire-auth-compat",[Ud]:"fire-rtdb",[Bd]:"fire-data-connect",[qd]:"fire-rtdb-compat",[$d]:"fire-fn",[zd]:"fire-fn-compat",[Hd]:"fire-iid",[Kd]:"fire-iid-compat",[Gd]:"fire-fcm",[Wd]:"fire-fcm-compat",[Qd]:"fire-perf",[Yd]:"fire-perf-compat",[Xd]:"fire-rc",[Jd]:"fire-rc-compat",[Zd]:"fire-gcs",[ef]:"fire-gcs-compat",[tf]:"fire-fst",[rf]:"fire-fst-compat",[nf]:"fire-vertex","fire-js":"fire-js",[sf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Map,lf=new Map,Us=new Map;function pa(n,e){try{n.container.addComponent(e)}catch(t){$e.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bn(n){const e=n.name;if(Us.has(e))return $e.debug(`There were multiple attempts to register component ${e}.`),!1;Us.set(e,n);for(const t of xn.values())pa(t,n);for(const t of lf.values())pa(t,n);return!0}function kl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},et=new Sl("app","Firebase",cf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=of;function Dl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw et.create("bad-app-name",{appName:String(s)});if(t||(t=Al()),!t)throw et.create("no-options");const o=xn.get(s);if(o){if(js(t,o.options)&&js(r,o.config))return o;throw et.create("duplicate-app",{appName:s})}const a=new md(s);for(const h of Us.values())a.addComponent(h);const c=new uf(t,r,a);return xn.set(s,c),c}function li(n=Fs){const e=xn.get(n);if(!e&&n===Fs&&Al())return Dl();if(!e)throw et.create("no-app",{appName:n});return e}function hf(){return Array.from(xn.values())}function tt(n,e,t){var r;let s=(r=af[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$e.warn(c.join(" "));return}bn(new kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const df="firebase-heartbeat-database",ff=1,In="firebase-heartbeat-store";let As=null;function jl(){return As||(As=Sd(df,ff,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(In)}catch(t){console.warn(t)}}}}).catch(n=>{throw et.create("idb-open",{originalErrorMessage:n.message})})),As}async function pf(n){try{const t=(await jl()).transaction(In),r=await t.objectStore(In).get(Ol(n));return await t.done,r}catch(e){if(e instanceof Et)$e.warn(e.message);else{const t=et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$e.warn(t.message)}}}async function ma(n,e){try{const r=(await jl()).transaction(In,"readwrite");await r.objectStore(In).put(e,Ol(n)),await r.done}catch(t){if(t instanceof Et)$e.warn(t.message);else{const r=et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$e.warn(r.message)}}}function Ol(n){return`${n.name}!${n.options.appId}`}/**
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
 */const mf=1024,gf=720*60*60*1e3;class _f{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ga();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=gf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$e.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ga(),{heartbeatsToSend:r,unsentEntries:s}=yf(this._heartbeatsCache.heartbeats),o=xr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return $e.warn(t),""}}}function ga(){return new Date().toISOString().substring(0,10)}function yf(n,e=mf){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),_a(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),_a(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class vf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ad()?ld().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _a(n){return xr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){bn(new kt("platform-logger",e=>new Pd(e),"PRIVATE")),bn(new kt("heartbeat",e=>new _f(e),"PRIVATE")),tt(Ls,fa,n),tt(Ls,fa,"esm2017"),tt("fire-js","")}wf("");var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pt,Ml;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function _(){}_.prototype=g.prototype,E.D=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(w,T,I){for(var y=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)y[Fe-2]=arguments[Fe];return g.prototype[T].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)w[T]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(T=0;16>T;++T)w[T]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],T=E.g[2];var I=E.g[3],y=g+(I^_&(T^I))+w[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=I+(T^g&(_^T))+w[1]+3905402710&4294967295,I=g+(y<<12&4294967295|y>>>20),y=T+(_^I&(g^_))+w[2]+606105819&4294967295,T=I+(y<<17&4294967295|y>>>15),y=_+(g^T&(I^g))+w[3]+3250441966&4294967295,_=T+(y<<22&4294967295|y>>>10),y=g+(I^_&(T^I))+w[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(T^g&(_^T))+w[5]+1200080426&4294967295,I=g+(y<<12&4294967295|y>>>20),y=T+(_^I&(g^_))+w[6]+2821735955&4294967295,T=I+(y<<17&4294967295|y>>>15),y=_+(g^T&(I^g))+w[7]+4249261313&4294967295,_=T+(y<<22&4294967295|y>>>10),y=g+(I^_&(T^I))+w[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(T^g&(_^T))+w[9]+2336552879&4294967295,I=g+(y<<12&4294967295|y>>>20),y=T+(_^I&(g^_))+w[10]+4294925233&4294967295,T=I+(y<<17&4294967295|y>>>15),y=_+(g^T&(I^g))+w[11]+2304563134&4294967295,_=T+(y<<22&4294967295|y>>>10),y=g+(I^_&(T^I))+w[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=I+(T^g&(_^T))+w[13]+4254626195&4294967295,I=g+(y<<12&4294967295|y>>>20),y=T+(_^I&(g^_))+w[14]+2792965006&4294967295,T=I+(y<<17&4294967295|y>>>15),y=_+(g^T&(I^g))+w[15]+1236535329&4294967295,_=T+(y<<22&4294967295|y>>>10),y=g+(T^I&(_^T))+w[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^T&(g^_))+w[6]+3225465664&4294967295,I=g+(y<<9&4294967295|y>>>23),y=T+(g^_&(I^g))+w[11]+643717713&4294967295,T=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(T^I))+w[0]+3921069994&4294967295,_=T+(y<<20&4294967295|y>>>12),y=g+(T^I&(_^T))+w[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^T&(g^_))+w[10]+38016083&4294967295,I=g+(y<<9&4294967295|y>>>23),y=T+(g^_&(I^g))+w[15]+3634488961&4294967295,T=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(T^I))+w[4]+3889429448&4294967295,_=T+(y<<20&4294967295|y>>>12),y=g+(T^I&(_^T))+w[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^T&(g^_))+w[14]+3275163606&4294967295,I=g+(y<<9&4294967295|y>>>23),y=T+(g^_&(I^g))+w[3]+4107603335&4294967295,T=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(T^I))+w[8]+1163531501&4294967295,_=T+(y<<20&4294967295|y>>>12),y=g+(T^I&(_^T))+w[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=I+(_^T&(g^_))+w[2]+4243563512&4294967295,I=g+(y<<9&4294967295|y>>>23),y=T+(g^_&(I^g))+w[7]+1735328473&4294967295,T=I+(y<<14&4294967295|y>>>18),y=_+(I^g&(T^I))+w[12]+2368359562&4294967295,_=T+(y<<20&4294967295|y>>>12),y=g+(_^T^I)+w[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^T)+w[8]+2272392833&4294967295,I=g+(y<<11&4294967295|y>>>21),y=T+(I^g^_)+w[11]+1839030562&4294967295,T=I+(y<<16&4294967295|y>>>16),y=_+(T^I^g)+w[14]+4259657740&4294967295,_=T+(y<<23&4294967295|y>>>9),y=g+(_^T^I)+w[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^T)+w[4]+1272893353&4294967295,I=g+(y<<11&4294967295|y>>>21),y=T+(I^g^_)+w[7]+4139469664&4294967295,T=I+(y<<16&4294967295|y>>>16),y=_+(T^I^g)+w[10]+3200236656&4294967295,_=T+(y<<23&4294967295|y>>>9),y=g+(_^T^I)+w[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^T)+w[0]+3936430074&4294967295,I=g+(y<<11&4294967295|y>>>21),y=T+(I^g^_)+w[3]+3572445317&4294967295,T=I+(y<<16&4294967295|y>>>16),y=_+(T^I^g)+w[6]+76029189&4294967295,_=T+(y<<23&4294967295|y>>>9),y=g+(_^T^I)+w[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=I+(g^_^T)+w[12]+3873151461&4294967295,I=g+(y<<11&4294967295|y>>>21),y=T+(I^g^_)+w[15]+530742520&4294967295,T=I+(y<<16&4294967295|y>>>16),y=_+(T^I^g)+w[2]+3299628645&4294967295,_=T+(y<<23&4294967295|y>>>9),y=g+(T^(_|~I))+w[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~T))+w[7]+1126891415&4294967295,I=g+(y<<10&4294967295|y>>>22),y=T+(g^(I|~_))+w[14]+2878612391&4294967295,T=I+(y<<15&4294967295|y>>>17),y=_+(I^(T|~g))+w[5]+4237533241&4294967295,_=T+(y<<21&4294967295|y>>>11),y=g+(T^(_|~I))+w[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~T))+w[3]+2399980690&4294967295,I=g+(y<<10&4294967295|y>>>22),y=T+(g^(I|~_))+w[10]+4293915773&4294967295,T=I+(y<<15&4294967295|y>>>17),y=_+(I^(T|~g))+w[1]+2240044497&4294967295,_=T+(y<<21&4294967295|y>>>11),y=g+(T^(_|~I))+w[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~T))+w[15]+4264355552&4294967295,I=g+(y<<10&4294967295|y>>>22),y=T+(g^(I|~_))+w[6]+2734768916&4294967295,T=I+(y<<15&4294967295|y>>>17),y=_+(I^(T|~g))+w[13]+1309151649&4294967295,_=T+(y<<21&4294967295|y>>>11),y=g+(T^(_|~I))+w[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=I+(_^(g|~T))+w[11]+3174756917&4294967295,I=g+(y<<10&4294967295|y>>>22),y=T+(g^(I|~_))+w[2]+718787259&4294967295,T=I+(y<<15&4294967295|y>>>17),y=_+(I^(T|~g))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var _=g-this.blockSize,w=this.B,T=this.h,I=0;I<g;){if(T==0)for(;I<=_;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<g;)if(w[T++]=E.charCodeAt(I++),T==this.blockSize){s(this,w),T=0;break}}else for(;I<g;)if(w[T++]=E[I++],T==this.blockSize){s(this,w),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var _=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=_&255,_/=256;for(this.u(E),E=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)E[_++]=this.g[g]>>>w&255;return E};function o(E,g){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function a(E,g){this.h=g;for(var _=[],w=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;w&&I==g||(_[T]=I,w=!1)}this.g=_}var c={};function h(E){return-128<=E&&128>E?o(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return A(f(-E));for(var g=[],_=1,w=0;E>=_;w++)g[w]=E/_|0,_*=4294967296;return new a(g,0)}function m(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return A(m(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(g,8)),w=v,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),y=parseInt(E.substring(T,T+I),g);8>I?(I=f(Math.pow(g,I)),w=w.j(I).add(f(y))):(w=w.j(_),w=w.add(f(y)))}return w}var v=h(0),b=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(V(this))return-A(this).m();for(var E=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);E+=(0<=w?w:4294967296+w)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(V(this))return"-"+A(this).toString(E);for(var g=f(Math.pow(E,6)),_=this,w="";;){var T=$(_,g).g;_=k(_,T.j(g));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,N(_))return I+w;for(;6>I.length;)I="0"+I;w=I+w}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=k(this,E),V(E)?-1:N(E)?0:1};function A(E){for(var g=E.g.length,_=[],w=0;w<g;w++)_[w]=~E.g[w];return new a(_,~E.h).add(b)}n.abs=function(){return V(this)?A(this):this},n.add=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0,T=0;T<=g;T++){var I=w+(this.i(T)&65535)+(E.i(T)&65535),y=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);w=y>>>16,I&=65535,y&=65535,_[T]=y<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function k(E,g){return E.add(A(g))}n.j=function(E){if(N(this)||N(E))return v;if(V(this))return V(E)?A(this).j(A(E)):A(A(this).j(E));if(V(E))return A(this.j(A(E)));if(0>this.l(S)&&0>E.l(S))return f(this.m()*E.m());for(var g=this.g.length+E.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var T=0;T<E.g.length;T++){var I=this.i(w)>>>16,y=this.i(w)&65535,Fe=E.i(T)>>>16,Ht=E.i(T)&65535;_[2*w+2*T]+=y*Ht,M(_,2*w+2*T),_[2*w+2*T+1]+=I*Ht,M(_,2*w+2*T+1),_[2*w+2*T+1]+=y*Fe,M(_,2*w+2*T+1),_[2*w+2*T+2]+=I*Fe,M(_,2*w+2*T+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new a(_,0)};function M(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function F(E,g){this.g=E,this.h=g}function $(E,g){if(N(g))throw Error("division by zero");if(N(E))return new F(v,v);if(V(E))return g=$(A(E),g),new F(A(g.g),A(g.h));if(V(g))return g=$(E,A(g)),new F(A(g.g),g.h);if(30<E.g.length){if(V(E)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var _=b,w=g;0>=w.l(E);)_=ie(_),w=ie(w);var T=J(_,1),I=J(w,1);for(w=J(w,2),_=J(_,2);!N(w);){var y=I.add(w);0>=y.l(E)&&(T=T.add(_),I=y),w=J(w,1),_=J(_,1)}return g=k(E,T.j(g)),new F(T,g)}for(T=v;0<=E.l(g);){for(_=Math.max(1,Math.floor(E.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),I=f(_),y=I.j(g);V(y)||0<y.l(E);)_-=w,I=f(_),y=I.j(g);N(I)&&(I=b),T=T.add(I),E=k(E,y)}return new F(T,E)}n.A=function(E){return $(this,E).h},n.and=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&E.i(w);return new a(_,this.h&E.h)},n.or=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|E.i(w);return new a(_,this.h|E.h)},n.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^E.i(w);return new a(_,this.h^E.h)};function ie(E){for(var g=E.g.length+1,_=[],w=0;w<g;w++)_[w]=E.i(w)<<1|E.i(w-1)>>>31;return new a(_,E.h)}function J(E,g){var _=g>>5;g%=32;for(var w=E.g.length-_,T=[],I=0;I<w;I++)T[I]=0<g?E.i(I+_)>>>g|E.i(I+_+1)<<32-g:E.i(I+_);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ml=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,pt=a}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});var lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ll,dn,Fl,gr,Bs,Ul,Bl,ql;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof lr=="object"&&lr];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function s(i,l){if(l)e:{var u=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var x=i[p];if(!(x in u))break e;u=u[x]}i=i[i.length-1],p=u[i],l=l(p),l!=p&&l!=null&&e(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,p=!1,x={next:function(){if(!p&&u<i.length){var R=u++;return{value:l(R,i[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,u){return i.call.apply(i.bind,arguments)}function v(i,l,u){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,p),i.apply(l,x)}}return function(){return i.apply(l,arguments)}}function b(i,l,u){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,b.apply(null,arguments)}function S(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var p=u.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function N(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(p,x,R){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return l.prototype[x].apply(p,D)}}function V(i){const l=i.length;if(0<l){const u=Array(l);for(let p=0;p<l;p++)u[p]=i[p];return u}return[]}function A(i,l){for(let u=1;u<arguments.length;u++){const p=arguments[u];if(h(p)){const x=i.length||0,R=p.length||0;i.length=x+R;for(let D=0;D<R;D++)i[x+D]=p[D]}else i.push(p)}}class k{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(i){return/^[\s\xa0]*$/.test(i)}function F(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function $(i){return $[" "](i),i}$[" "]=function(){};var ie=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function J(i,l,u){for(const p in i)l.call(u,i[p],p,i)}function E(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function g(i){const l={};for(const u in i)l[u]=i[u];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(i,l){let u,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(u in p)i[u]=p[u];for(let R=0;R<_.length;R++)u=_[R],Object.prototype.hasOwnProperty.call(p,u)&&(i[u]=p[u])}}function T(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function I(i){c.setTimeout(()=>{throw i},0)}function y(){var i=Jr;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Fe{constructor(){this.h=this.g=null}add(l,u){const p=Ht.get();p.set(l,u),this.h?this.h.next=p:this.g=p,this.h=p}}var Ht=new k(()=>new ku,i=>i.reset());class ku{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,Gt=!1,Jr=new Fe,no=()=>{const i=c.Promise.resolve(void 0);Kt=()=>{i.then(Vu)}};var Vu=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(u){I(u)}var l=Ht;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Gt=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Du=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i})();function Wt(i,l){if(ge.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(ie){e:{try{$(l.nodeName);var x=!0;break e}catch{}x=!1}x||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ju[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Wt.aa.h.call(this)}}N(Wt,ge);var ju={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),Ou=0;function Mu(i,l,u,p,x){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!p,this.ha=x,this.key=++Ou,this.da=this.fa=!1}function $n(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function zn(i){this.src=i,this.g={},this.h=0}zn.prototype.add=function(i,l,u,p,x){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var D=es(i,l,p,x);return-1<D?(l=i[D],u||(l.fa=!1)):(l=new Mu(l,this.src,R,!!p,x),l.fa=u,i.push(l)),l};function Zr(i,l){var u=l.type;if(u in i.g){var p=i.g[u],x=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=x)&&Array.prototype.splice.call(p,x,1),R&&($n(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function es(i,l,u,p){for(var x=0;x<i.length;++x){var R=i[x];if(!R.da&&R.listener==l&&R.capture==!!u&&R.ha==p)return x}return-1}var ts="closure_lm_"+(1e6*Math.random()|0),ns={};function ro(i,l,u,p,x){if(Array.isArray(l)){for(var R=0;R<l.length;R++)ro(i,l[R],u,p,x);return null}return u=oo(u),i&&i[qn]?i.K(l,u,f(p)?!!p.capture:!1,x):Lu(i,l,u,!1,p,x)}function Lu(i,l,u,p,x,R){if(!l)throw Error("Invalid event type");var D=f(x)?!!x.capture:!!x,X=ss(i);if(X||(i[ts]=X=new zn(i)),u=X.add(l,u,p,D,R),u.proxy)return u;if(p=Fu(),u.proxy=p,p.src=i,p.listener=u,i.addEventListener)Du||(x=D),x===void 0&&(x=!1),i.addEventListener(l.toString(),p,x);else if(i.attachEvent)i.attachEvent(io(l.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Fu(){function i(u){return l.call(i.src,i.listener,u)}const l=Uu;return i}function so(i,l,u,p,x){if(Array.isArray(l))for(var R=0;R<l.length;R++)so(i,l[R],u,p,x);else p=f(p)?!!p.capture:!!p,u=oo(u),i&&i[qn]?(i=i.i,l=String(l).toString(),l in i.g&&(R=i.g[l],u=es(R,u,p,x),-1<u&&($n(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete i.g[l],i.h--)))):i&&(i=ss(i))&&(l=i.g[l.toString()],i=-1,l&&(i=es(l,u,p,x)),(u=-1<i?l[i]:null)&&rs(u))}function rs(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[qn])Zr(l.i,i);else{var u=i.type,p=i.proxy;l.removeEventListener?l.removeEventListener(u,p,i.capture):l.detachEvent?l.detachEvent(io(u),p):l.addListener&&l.removeListener&&l.removeListener(p),(u=ss(l))?(Zr(u,i),u.h==0&&(u.src=null,l[ts]=null)):$n(i)}}}function io(i){return i in ns?ns[i]:ns[i]="on"+i}function Uu(i,l){if(i.da)i=!0;else{l=new Wt(l,this);var u=i.listener,p=i.ha||i.src;i.fa&&rs(i),i=u.call(p,l)}return i}function ss(i){return i=i[ts],i instanceof zn?i:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function oo(i){return typeof i=="function"?i:(i[is]||(i[is]=function(l){return i.handleEvent(l)}),i[is])}function _e(){Ke.call(this),this.i=new zn(this),this.M=this,this.F=null}N(_e,Ke),_e.prototype[qn]=!0,_e.prototype.removeEventListener=function(i,l,u,p){so(this,i,l,u,p)};function xe(i,l){var u,p=i.F;if(p)for(u=[];p;p=p.F)u.push(p);if(i=i.M,p=l.type||l,typeof l=="string")l=new ge(l,i);else if(l instanceof ge)l.target=l.target||i;else{var x=l;l=new ge(p,i),w(l,x)}if(x=!0,u)for(var R=u.length-1;0<=R;R--){var D=l.g=u[R];x=Hn(D,p,!0,l)&&x}if(D=l.g=i,x=Hn(D,p,!0,l)&&x,x=Hn(D,p,!1,l)&&x,u)for(R=0;R<u.length;R++)D=l.g=u[R],x=Hn(D,p,!1,l)&&x}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],p=0;p<u.length;p++)$n(u[p]);delete i.g[l],i.h--}}this.F=null},_e.prototype.K=function(i,l,u,p){return this.i.add(String(i),l,!1,u,p)},_e.prototype.L=function(i,l,u,p){return this.i.add(String(i),l,!0,u,p)};function Hn(i,l,u,p){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var x=!0,R=0;R<l.length;++R){var D=l[R];if(D&&!D.da&&D.capture==u){var X=D.listener,he=D.ha||D.src;D.fa&&Zr(i.i,D),x=X.call(he,p)!==!1&&x}}return x&&!p.defaultPrevented}function ao(i,l,u){if(typeof i=="function")u&&(i=b(i,u));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function lo(i){i.g=ao(()=>{i.g=null,i.i&&(i.i=!1,lo(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Bu extends Ke{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:lo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qt(i){Ke.call(this),this.h=i,this.g={}}N(Qt,Ke);var co=[];function uo(i){J(i.g,function(l,u){this.g.hasOwnProperty(u)&&rs(l)},i),i.g={}}Qt.prototype.N=function(){Qt.aa.N.call(this),uo(this)},Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var os=c.JSON.stringify,qu=c.JSON.parse,$u=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function as(){}as.prototype.h=null;function ho(i){return i.h||(i.h=i.i())}function fo(){}var Yt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ls(){ge.call(this,"d")}N(ls,ge);function cs(){ge.call(this,"c")}N(cs,ge);var lt={},po=null;function Kn(){return po=po||new _e}lt.La="serverreachability";function mo(i){ge.call(this,lt.La,i)}N(mo,ge);function Xt(i){const l=Kn();xe(l,new mo(l))}lt.STAT_EVENT="statevent";function go(i,l){ge.call(this,lt.STAT_EVENT,i),this.stat=l}N(go,ge);function be(i){const l=Kn();xe(l,new go(l,i))}lt.Ma="timingevent";function _o(i,l){ge.call(this,lt.Ma,i),this.size=l}N(_o,ge);function Jt(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function Zt(){this.g=!0}Zt.prototype.xa=function(){this.g=!1};function zu(i,l,u,p,x,R){i.info(function(){if(i.g)if(R)for(var D="",X=R.split("&"),he=0;he<X.length;he++){var W=X[he].split("=");if(1<W.length){var ye=W[0];W=W[1];var ve=ye.split("_");D=2<=ve.length&&ve[1]=="type"?D+(ye+"="+W+"&"):D+(ye+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+l+`
`+u+`
`+D})}function Hu(i,l,u,p,x,R,D){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+l+`
`+u+`
`+R+" "+D})}function bt(i,l,u,p){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+Gu(i,u)+(p?" "+p:"")})}function Ku(i,l){i.info(function(){return"TIMEOUT: "+l})}Zt.prototype.info=function(){};function Gu(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var p=u[i];if(!(2>p.length)){var x=p[1];if(Array.isArray(x)&&!(1>x.length)){var R=x[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<x.length;D++)x[D]=""}}}}return os(u)}catch{return l}}var Gn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},us;function Wn(){}N(Wn,as),Wn.prototype.g=function(){return new XMLHttpRequest},Wn.prototype.i=function(){return{}},us=new Wn;function Ge(i,l,u,p){this.j=i,this.i=l,this.l=u,this.R=p||1,this.U=new Qt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vo}function vo(){this.i=null,this.g="",this.h=!1}var wo={},hs={};function ds(i,l,u){i.L=1,i.v=Jn(Ue(l)),i.m=u,i.P=!0,Eo(i,null)}function Eo(i,l){i.F=Date.now(),Qn(i),i.A=Ue(i.v);var u=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),jo(u.i,"t",p),i.C=0,u=i.j.J,i.h=new vo,i.g=Zo(i.j,u?l:null,!i.m),0<i.O&&(i.M=new Bu(b(i.Y,i,i.g),i.O)),l=i.U,u=i.g,p=i.ca;var x="readystatechange";Array.isArray(x)||(x&&(co[0]=x.toString()),x=co);for(var R=0;R<x.length;R++){var D=ro(u,x[R],p||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=i.H?g(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Xt(),zu(i.i,i.u,i.A,i.l,i.R,i.m)}Ge.prototype.ca=function(i){i=i.target;const l=this.M;l&&Be(i)==3?l.j():this.Y(i)},Ge.prototype.Y=function(i){try{if(i==this.g)e:{const ve=Be(this.g);var l=this.g.Ba();const Rt=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||qo(this.g)))){this.J||ve!=4||l==7||(l==8||0>=Rt?Xt(3):Xt(2)),fs(this);var u=this.g.Z();this.X=u;t:if(To(this)){var p=qo(this.g);i="";var x=p.length,R=Be(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ct(this),en(this);var D="";break t}this.h.i=new c.TextDecoder}for(l=0;l<x;l++)this.h.h=!0,i+=this.h.i.decode(p[l],{stream:!(R&&l==x-1)});p.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,Hu(this.i,this.u,this.A,this.l,this.R,ve,u),this.o){if(this.T&&!this.K){t:{if(this.g){var X,he=this.g;if((X=he.g?he.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(X)){var W=X;break t}}W=null}if(u=W)bt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,u);else{this.o=!1,this.s=3,be(12),ct(this),en(this);break e}}if(this.P){u=!0;let ke;for(;!this.J&&this.C<D.length;)if(ke=Wu(this,D),ke==hs){ve==4&&(this.s=4,be(14),u=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==wo){this.s=4,be(15),bt(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else bt(this.i,this.l,ke,null),ps(this,ke);if(To(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||D.length!=0||this.h.h||(this.s=1,be(16),u=!1),this.o=this.o&&u,!u)bt(this.i,this.l,D,"[Invalid Chunked Response]"),ct(this),en(this);else if(0<D.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ws(ye),ye.M=!0,be(11))}}else bt(this.i,this.l,D,null),ps(this,D);ve==4&&ct(this),this.o&&!this.J&&(ve==4?Qo(this.j,this):(this.o=!1,Qn(this)))}else hh(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),ct(this),en(this)}}}catch{}finally{}};function To(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Wu(i,l){var u=i.C,p=l.indexOf(`
`,u);return p==-1?hs:(u=Number(l.substring(u,p)),isNaN(u)?wo:(p+=1,p+u>l.length?hs:(l=l.slice(p,p+u),i.C=p+u,l)))}Ge.prototype.cancel=function(){this.J=!0,ct(this)};function Qn(i){i.S=Date.now()+i.I,xo(i,i.I)}function xo(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Jt(b(i.ba,i),l)}function fs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ge.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Ku(this.i,this.A),this.L!=2&&(Xt(),be(17)),ct(this),this.s=2,en(this)):xo(this,this.S-i)};function en(i){i.j.G==0||i.J||Qo(i.j,i)}function ct(i){fs(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,uo(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ps(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||ms(u.h,i))){if(!i.K&&ms(u.h,i)&&u.G==3){try{var p=u.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)sr(u),nr(u);else break e;vs(u),be(18)}}else u.za=x[1],0<u.za-u.T&&37500>x[2]&&u.F&&u.v==0&&!u.C&&(u.C=Jt(b(u.Za,u),6e3));if(1>=Ao(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else ht(u,11)}else if((i.K||u.g==i)&&sr(u),!M(l))for(x=u.Da.g.parse(l),l=0;l<x.length;l++){let W=x[l];if(u.T=W[0],W=W[1],u.G==2)if(W[0]=="c"){u.K=W[1],u.ia=W[2];const ye=W[3];ye!=null&&(u.la=ye,u.j.info("VER="+u.la));const ve=W[4];ve!=null&&(u.Aa=ve,u.j.info("SVER="+u.Aa));const Rt=W[5];Rt!=null&&typeof Rt=="number"&&0<Rt&&(p=1.5*Rt,u.L=p,u.j.info("backChannelRequestTimeoutMs_="+p)),p=u;const ke=i.g;if(ke){const or=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(or){var R=p.h;R.g||or.indexOf("spdy")==-1&&or.indexOf("quic")==-1&&or.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(gs(R,R.h),R.h=null))}if(p.D){const Es=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Es&&(p.ya=Es,Z(p.I,p.D,Es))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),p=u;var D=i;if(p.qa=Jo(p,p.J?p.ia:null,p.W),D.K){Ro(p.h,D);var X=D,he=p.L;he&&(X.I=he),X.B&&(fs(X),Qn(X)),p.g=D}else Go(p);0<u.i.length&&rr(u)}else W[0]!="stop"&&W[0]!="close"||ht(u,7);else u.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?ht(u,7):ys(u):W[0]!="noop"&&u.l&&u.l.ta(W),u.v=0)}}Xt(4)}catch{}}var Qu=class{constructor(i,l){this.g=i,this.map=l}};function bo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Io(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ao(i){return i.h?1:i.g?i.g.size:0}function ms(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function gs(i,l){i.g?i.g.add(l):i.h=l}function Ro(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}bo.prototype.cancel=function(){if(this.i=So(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function So(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return V(i.i)}function Yu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,p=0;p<u;p++)l.push(i[p]);return l}l=[],u=0;for(p in i)l[u++]=i[p];return l}function Xu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const p in i)l[u++]=p;return l}}}function No(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=Xu(i),p=Yu(i),x=p.length,R=0;R<x;R++)l.call(void 0,p[R],u&&u[R],i)}var Co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ju(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var p=i[u].indexOf("="),x=null;if(0<=p){var R=i[u].substring(0,p);x=i[u].substring(p+1)}else R=i[u];l(R,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ut(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ut){this.h=i.h,Yn(this,i.j),this.o=i.o,this.g=i.g,Xn(this,i.s),this.l=i.l;var l=i.i,u=new rn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Po(this,u),this.m=i.m}else i&&(l=String(i).match(Co))?(this.h=!1,Yn(this,l[1]||"",!0),this.o=tn(l[2]||""),this.g=tn(l[3]||"",!0),Xn(this,l[4]),this.l=tn(l[5]||"",!0),Po(this,l[6]||"",!0),this.m=tn(l[7]||"")):(this.h=!1,this.i=new rn(null,this.h))}ut.prototype.toString=function(){var i=[],l=this.j;l&&i.push(nn(l,ko,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(nn(l,ko,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(nn(u,u.charAt(0)=="/"?th:eh,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",nn(u,rh)),i.join("")};function Ue(i){return new ut(i)}function Yn(i,l,u){i.j=u?tn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Xn(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Po(i,l,u){l instanceof rn?(i.i=l,sh(i.i,i.h)):(u||(l=nn(l,nh)),i.i=new rn(l,i.h))}function Z(i,l,u){i.i.set(l,u)}function Jn(i){return Z(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function tn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function nn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,Zu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Zu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ko=/[#\/\?@]/g,eh=/[#\?:]/g,th=/[#\?]/g,nh=/[#\?@]/g,rh=/#/g;function rn(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function We(i){i.g||(i.g=new Map,i.h=0,i.i&&Ju(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=rn.prototype,n.add=function(i,l){We(this),this.i=null,i=It(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function Vo(i,l){We(i),l=It(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Do(i,l){return We(i),l=It(i,l),i.g.has(l)}n.forEach=function(i,l){We(this),this.g.forEach(function(u,p){u.forEach(function(x){i.call(l,x,p,this)},this)},this)},n.na=function(){We(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let p=0;p<l.length;p++){const x=i[p];for(let R=0;R<x.length;R++)u.push(l[p])}return u},n.V=function(i){We(this);let l=[];if(typeof i=="string")Do(this,i)&&(l=l.concat(this.g.get(It(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},n.set=function(i,l){return We(this),this.i=null,i=It(this,i),Do(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function jo(i,l,u){Vo(i,l),0<u.length&&(i.i=null,i.g.set(It(i,l),V(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var p=l[u];const R=encodeURIComponent(String(p)),D=this.V(p);for(p=0;p<D.length;p++){var x=R;D[p]!==""&&(x+="="+encodeURIComponent(String(D[p]))),i.push(x)}}return this.i=i.join("&")};function It(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function sh(i,l){l&&!i.j&&(We(i),i.i=null,i.g.forEach(function(u,p){var x=p.toLowerCase();p!=x&&(Vo(this,p),jo(this,x,u))},i)),i.j=l}function ih(i,l){const u=new Zt;if(c.Image){const p=new Image;p.onload=S(Qe,u,"TestLoadImage: loaded",!0,l,p),p.onerror=S(Qe,u,"TestLoadImage: error",!1,l,p),p.onabort=S(Qe,u,"TestLoadImage: abort",!1,l,p),p.ontimeout=S(Qe,u,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else l(!1)}function oh(i,l){const u=new Zt,p=new AbortController,x=setTimeout(()=>{p.abort(),Qe(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:p.signal}).then(R=>{clearTimeout(x),R.ok?Qe(u,"TestPingServer: ok",!0,l):Qe(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(x),Qe(u,"TestPingServer: error",!1,l)})}function Qe(i,l,u,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(u)}catch{}}function ah(){this.g=new $u}function lh(i,l,u){const p=u||"";try{No(i,function(x,R){let D=x;f(x)&&(D=os(x)),l.push(p+R+"="+encodeURIComponent(D))})}catch(x){throw l.push(p+"type="+encodeURIComponent("_badmap")),x}}function Zn(i){this.l=i.Ub||null,this.j=i.eb||!1}N(Zn,as),Zn.prototype.g=function(){return new er(this.l,this.j)},Zn.prototype.i=(function(i){return function(){return i}})({});function er(i,l){_e.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(er,_e),n=er.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,on(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?sn(this):on(this),this.readyState==3&&Oo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,sn(this))},n.Qa=function(i){this.g&&(this.response=i,sn(this))},n.ga=function(){this.g&&sn(this)};function sn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,on(i)}n.setRequestHeader=function(i,l){this.u.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function on(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Mo(i){let l="";return J(i,function(u,p){l+=p,l+=":",l+=u,l+=`\r
`}),l}function _s(i,l,u){e:{for(p in u){var p=!1;break e}p=!0}p||(u=Mo(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):Z(i,l,u))}function ne(i){_e.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ne,_e);var ch=/^https?$/i,uh=["POST","PUT"];n=ne.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,l,u,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():us.g(),this.v=this.o?ho(this.o):ho(us),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(R){Lo(this,R);return}if(i=u||"",u=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)u.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())u.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),x=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(uh,l,void 0))||p||x||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of u)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Lo(this,R)}};function Lo(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Fo(i),tr(i)}function Fo(i){i.A||(i.A=!0,xe(i,"complete"),xe(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,xe(this,"complete"),xe(this,"abort"),tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tr(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Uo(this):this.bb())},n.bb=function(){Uo(this)};function Uo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Be(i)!=4||i.Z()!=2)){if(i.u&&Be(i)==4)ao(i.Ea,0,i);else if(xe(i,"readystatechange"),Be(i)==4){i.h=!1;try{const D=i.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var p;if(p=D===0){var x=String(i.D).match(Co)[1]||null;!x&&c.self&&c.self.location&&(x=c.self.location.protocol.slice(0,-1)),p=!ch.test(x?x.toLowerCase():"")}u=p}if(u)xe(i,"complete"),xe(i,"success");else{i.m=6;try{var R=2<Be(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Fo(i)}}finally{tr(i)}}}}function tr(i,l){if(i.g){Bo(i);const u=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||xe(i,"ready");try{u.onreadystatechange=p}catch{}}}function Bo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Be(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Be(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),qu(l)}};function qo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function hh(i){const l={};i=(i.g&&2<=Be(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(M(i[p]))continue;var u=T(i[p]);const x=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=l[x]||[];l[x]=R,R.push(u)}E(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function an(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function $o(i){this.Aa=0,this.i=[],this.j=new Zt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=an("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=an("baseRetryDelayMs",5e3,i),this.cb=an("retryDelaySeedMs",1e4,i),this.Wa=an("forwardChannelMaxRetries",2,i),this.wa=an("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new bo(i&&i.concurrentRequestLimit),this.Da=new ah,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=$o.prototype,n.la=8,n.G=1,n.connect=function(i,l,u,p){be(0),this.W=i,this.H=l||{},u&&p!==void 0&&(this.H.OSID=u,this.H.OAID=p),this.F=this.X,this.I=Jo(this,null,this.W),rr(this)};function ys(i){if(zo(i),i.G==3){var l=i.U++,u=Ue(i.I);if(Z(u,"SID",i.K),Z(u,"RID",l),Z(u,"TYPE","terminate"),ln(i,u),l=new Ge(i,i.j,l),l.L=2,l.v=Jn(Ue(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Zo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Qn(l)}Xo(i)}function nr(i){i.g&&(ws(i),i.g.cancel(),i.g=null)}function zo(i){nr(i),i.u&&(c.clearTimeout(i.u),i.u=null),sr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function rr(i){if(!Io(i.h)&&!i.s){i.s=!0;var l=i.Ga;Kt||no(),Gt||(Kt(),Gt=!0),Jr.add(l,i),i.B=0}}function dh(i,l){return Ao(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Jt(b(i.Ga,i,l),Yo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const x=new Ge(this,this.j,i);let R=this.o;if(this.S&&(R?(R=g(R),w(R,this.S)):R=this.S),this.m!==null||this.O||(x.H=R,R=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var p=this.i[u];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Ko(this,x,l),u=Ue(this.I),Z(u,"RID",i),Z(u,"CVER",22),this.D&&Z(u,"X-HTTP-Session-Id",this.D),ln(this,u),R&&(this.O?l="headers="+encodeURIComponent(String(Mo(R)))+"&"+l:this.m&&_s(u,this.m,R)),gs(this.h,x),this.Ua&&Z(u,"TYPE","init"),this.P?(Z(u,"$req",l),Z(u,"SID","null"),x.T=!0,ds(x,u,null)):ds(x,u,l),this.G=2}}else this.G==3&&(i?Ho(this,i):this.i.length==0||Io(this.h)||Ho(this))};function Ho(i,l){var u;l?u=l.l:u=i.U++;const p=Ue(i.I);Z(p,"SID",i.K),Z(p,"RID",u),Z(p,"AID",i.T),ln(i,p),i.m&&i.o&&_s(p,i.m,i.o),u=new Ge(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Ko(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),gs(i.h,u),ds(u,p,l)}function ln(i,l){i.H&&J(i.H,function(u,p){Z(l,p,u)}),i.l&&No({},function(u,p){Z(l,p,u)})}function Ko(i,l,u){u=Math.min(i.i.length,u);var p=i.l?b(i.l.Na,i.l,i):null;e:{var x=i.i;let R=-1;for(;;){const D=["count="+u];R==-1?0<u?(R=x[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let X=!0;for(let he=0;he<u;he++){let W=x[he].g;const ye=x[he].map;if(W-=R,0>W)R=Math.max(0,x[he].g-100),X=!1;else try{lh(ye,D,"req"+W+"_")}catch{p&&p(ye)}}if(X){p=D.join("&");break e}}}return i=i.i.splice(0,u),l.D=i,p}function Go(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;Kt||no(),Gt||(Kt(),Gt=!0),Jr.add(l,i),i.v=0}}function vs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Jt(b(i.Fa,i),Yo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Wo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Jt(b(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,be(10),nr(this),Wo(this))};function ws(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Wo(i){i.g=new Ge(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Ue(i.qa);Z(l,"RID","rpc"),Z(l,"SID",i.K),Z(l,"AID",i.T),Z(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Z(l,"TO",i.ja),Z(l,"TYPE","xmlhttp"),ln(i,l),i.m&&i.o&&_s(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Jn(Ue(l)),u.m=null,u.P=!0,Eo(u,i)}n.Za=function(){this.C!=null&&(this.C=null,nr(this),vs(this),be(19))};function sr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Qo(i,l){var u=null;if(i.g==l){sr(i),ws(i),i.g=null;var p=2}else if(ms(i.h,l))u=l.D,Ro(i.h,l),p=1;else return;if(i.G!=0){if(l.o)if(p==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var x=i.B;p=Kn(),xe(p,new _o(p,u)),rr(i)}else Go(i);else if(x=l.s,x==3||x==0&&0<l.X||!(p==1&&dh(i,l)||p==2&&vs(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),x){case 1:ht(i,5);break;case 4:ht(i,10);break;case 3:ht(i,6);break;default:ht(i,2)}}}function Yo(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function ht(i,l){if(i.j.info("Error code "+l),l==2){var u=b(i.fb,i),p=i.Xa;const x=!p;p=new ut(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Yn(p,"https"),Jn(p),x?ih(p.toString(),u):oh(p.toString(),u)}else be(2);i.G=0,i.l&&i.l.sa(l),Xo(i),zo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function Xo(i){if(i.G=0,i.ka=[],i.l){const l=So(i.h);(l.length!=0||i.i.length!=0)&&(A(i.ka,l),A(i.ka,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.ra()}}function Jo(i,l,u){var p=u instanceof ut?Ue(u):new ut(u);if(p.g!="")l&&(p.g=l+"."+p.g),Xn(p,p.s);else{var x=c.location;p=x.protocol,l=l?l+"."+x.hostname:x.hostname,x=+x.port;var R=new ut(null);p&&Yn(R,p),l&&(R.g=l),x&&Xn(R,x),u&&(R.l=u),p=R}return u=i.D,l=i.ya,u&&l&&Z(p,u,l),Z(p,"VER",i.la),ln(i,p),p}function Zo(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new ne(new Zn({eb:u})):new ne(i.pa),l.Ha(i.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ea(){}n=ea.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ir(){}ir.prototype.g=function(i,l){return new Ne(i,l)};function Ne(i,l){_e.call(this),this.g=new $o(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!M(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!M(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new At(this)}N(Ne,_e),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){ys(this.g)},Ne.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=os(i),i=u);l.i.push(new Qu(l.Ya++,i)),l.G==3&&rr(l)},Ne.prototype.N=function(){this.g.l=null,delete this.j,ys(this.g),delete this.g,Ne.aa.N.call(this)};function ta(i){ls.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const u in l){i=u;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}N(ta,ls);function na(){cs.call(this),this.status=1}N(na,cs);function At(i){this.g=i}N(At,ea),At.prototype.ua=function(){xe(this.g,"a")},At.prototype.ta=function(i){xe(this.g,new ta(i))},At.prototype.sa=function(i){xe(this.g,new na)},At.prototype.ra=function(){xe(this.g,"b")},ir.prototype.createWebChannel=ir.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,ql=function(){return new ir},Bl=function(){return Kn()},Ul=lt,Bs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gn.NO_ERROR=0,Gn.TIMEOUT=8,Gn.HTTP_ERROR=6,gr=Gn,yo.COMPLETE="complete",Fl=yo,fo.EventType=Yt,Yt.OPEN="a",Yt.CLOSE="b",Yt.ERROR="c",Yt.MESSAGE="d",_e.prototype.listen=_e.prototype.K,dn=fo,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,Ll=ne}).apply(typeof lr<"u"?lr:typeof self<"u"?self:typeof window<"u"?window:{});const va="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Nl("@firebase/firestore");function cn(){return _t.logLevel}function O(n,...e){if(_t.logLevel<=G.DEBUG){const t=e.map(ci);_t.debug(`Firestore (${Bt}): ${n}`,...t)}}function ze(n,...e){if(_t.logLevel<=G.ERROR){const t=e.map(ci);_t.error(`Firestore (${Bt}): ${n}`,...t)}}function Vt(n,...e){if(_t.logLevel<=G.WARN){const t=e.map(ci);_t.warn(`Firestore (${Bt}): ${n}`,...t)}}function ci(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function U(n="Unexpected state"){const e=`FIRESTORE (${Bt}) INTERNAL ASSERTION FAILED: `+n;throw ze(e),new Error(e)}function Y(n,e){n||U()}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ef{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ee.UNAUTHENTICATED)))}shutdown(){}}class Tf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class xf{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},c=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new $l(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ee(e)}}class bf{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class If{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new bf(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Ee.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Af{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rf{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Y(this.o===void 0);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Y(typeof t.token=="string"),this.R=t.token,new Af(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Sf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%e.length))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function Dt(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ce(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new ce(0,0))}static max(){return new B(new ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=e.get(s),a=t.get(s);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ee extends An{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const Nf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends An{construct(e,t,r){return new fe(e,t,r)}static isValidIdentifier(e){return Nf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new j(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new j(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new j(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ee.fromString(e))}static fromName(e){return new L(ee.fromString(e).popFirst(5))}static empty(){return new L(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ee(e.slice()))}}function Cf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new rt(s,L.empty(),e)}function Pf(n){return new rt(n.readTime,n.key,-1)}class rt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rt(B.min(),L.empty(),-1)}static max(){return new rt(B.max(),L.empty(),-1)}}function kf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Df{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Vf)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,r)=>{t(e)}))}static reject(e){return new P(((t,r)=>{r(e)}))}static waitFor(e){return new P(((t,r)=>{let s=0,o=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++o,a&&o===s&&t()}),(h=>r(h)))})),a=!0,o===s&&t()}))}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next((s=>s?P.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,o)=>{r.push(t.call(this,s,o))})),this.waitFor(r)}static mapArray(e,t){return new P(((r,s)=>{const o=e.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next((m=>{a[f]=m,++c,c===o&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new P(((r,s)=>{const o=()=>{e()===!0?t().next((()=>{o()}),s):r()};o()}))}}function jf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ui{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ui.oe=-1;function Vr(n){return n==null}function br(n){return n===0&&1/n==-1/0}function Of(n){return typeof n=="number"&&Number.isInteger(n)&&!br(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Hl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cr(this.root,e,this.comparator,!0)}}class cr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??de.RED,this.left=s??de.EMPTY,this.right=o??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new de(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return de.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,t,r,s,o){return this}insert(e,t,r){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ea(this.data.getIterator())}getIteratorFrom(e){return new Ea(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class Ea{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new Ce([])}unionWith(e){let t=new pe(fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ce(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Dt(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Kl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Kl("Invalid base64 string: "+o):o}})(e);return new me(t)}static fromUint8Array(e){const t=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const Mf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function st(n){if(Y(!!n),typeof n=="string"){let e=0;const t=Mf.exec(n);if(Y(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function di(n){const e=n.mapValue.fields.__previous_value__;return hi(e)?di(e):e}function Rn(n){const e=st(n.mapValue.fields.__local_write_time__.timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t,r,s,o,a,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class Sn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={mapValue:{}};function vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hi(n)?4:Uf(n)?9007199254740991:Ff(n)?10:11:U()}function Le(n,e){if(n===e)return!0;const t=vt(n);if(t!==vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Rn(n).isEqual(Rn(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=st(s.timestampValue),c=st(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,o){return yt(s.bytesValue).isEqual(yt(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,o){return oe(s.geoPointValue.latitude)===oe(o.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(o.geoPointValue.longitude)})(n,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return oe(s.integerValue)===oe(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=oe(s.doubleValue),c=oe(o.doubleValue);return a===c?br(a)===br(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Dt(n.arrayValue.values||[],e.arrayValue.values||[],Le);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(wa(a)!==wa(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Le(a[h],c[h])))return!1;return!0})(n,e);default:return U()}}function Nn(n,e){return(n.values||[]).find((t=>Le(t,e)))!==void 0}function jt(n,e){if(n===e)return 0;const t=vt(n),r=vt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const c=oe(o.integerValue||o.doubleValue),h=oe(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,e);case 3:return Ta(n.timestampValue,e.timestampValue);case 4:return Ta(Rn(n),Rn(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return(function(o,a){const c=yt(o),h=yt(a);return c.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=Q(c[f],h[f]);if(m!==0)return m}return Q(c.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const c=Q(oe(o.latitude),oe(a.latitude));return c!==0?c:Q(oe(o.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return xa(n.arrayValue,e.arrayValue);case 10:return(function(o,a){var c,h,f,m;const v=o.fields||{},b=a.fields||{},S=(c=v.value)===null||c===void 0?void 0:c.arrayValue,N=(h=b.value)===null||h===void 0?void 0:h.arrayValue,V=Q(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0);return V!==0?V:xa(S,N)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===ur.mapValue&&a===ur.mapValue)return 0;if(o===ur.mapValue)return 1;if(a===ur.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let v=0;v<h.length&&v<m.length;++v){const b=Q(h[v],m[v]);if(b!==0)return b;const S=jt(c[h[v]],f[m[v]]);if(S!==0)return S}return Q(h.length,m.length)})(n.mapValue,e.mapValue);default:throw U()}}function Ta(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=st(n),r=st(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function xa(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=jt(t[s],r[s]);if(o)return o}return Q(t.length,r.length)}function Ot(n){return qs(n)}function qs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=st(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return yt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return L.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=qs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${qs(t.fields[a])}`;return s+"}"})(n.mapValue):U()}function ba(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $s(n){return!!n&&"integerValue"in n}function fi(n){return!!n&&"arrayValue"in n}function Ia(n){return!!n&&"nullValue"in n}function Aa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _r(n){return!!n&&"mapValue"in n}function Ff(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function yn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Tt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=yn(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Uf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_r(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yn(t)}setAll(e){let t=fe.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=yn(a):s.push(c.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());_r(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Le(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];_r(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Tt(t,((s,o)=>e[s]=o));for(const s of r)delete e[s]}clone(){return new Se(yn(this.value))}}function Gl(n){const e=[];return Tt(n.fields,((t,r)=>{const s=new fe([t]);if(_r(r)){const o=Gl(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)})),new Ce(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,r,s,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Te(e,0,B.min(),B.min(),B.min(),Se.empty(),0)}static newFoundDocument(e,t,r,s){return new Te(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new Te(e,2,t,B.min(),B.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,B.min(),B.min(),Se.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ir{constructor(e,t){this.position=e,this.inclusive=t}}function Ra(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=jt(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Le(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Cn{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wl{}class le extends Wl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $f(e,t,r):t==="array-contains"?new Kf(e,r):t==="in"?new Gf(e,r):t==="not-in"?new Wf(e,r):t==="array-contains-any"?new Qf(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new zf(e,r):new Hf(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jt(t,this.value)):t!==null&&vt(this.value)===vt(t)&&this.matchesComparison(jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class je extends Wl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new je(e,t)}matches(e){return Ql(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ql(n){return n.op==="and"}function Yl(n){return qf(n)&&Ql(n)}function qf(n){for(const e of n.filters)if(e instanceof je)return!1;return!0}function zs(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+Ot(n.value);if(Yl(n))return n.filters.map((e=>zs(e))).join(",");{const e=n.filters.map((t=>zs(t))).join(",");return`${n.op}(${e})`}}function Xl(n,e){return n instanceof le?(function(r,s){return s instanceof le&&r.op===s.op&&r.field.isEqual(s.field)&&Le(r.value,s.value)})(n,e):n instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,c)=>o&&Xl(a,s.filters[c])),!0):!1})(n,e):void U()}function Jl(n){return n instanceof le?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ot(t.value)}`})(n):n instanceof je?(function(t){return t.op.toString()+" {"+t.getFilters().map(Jl).join(" ,")+"}"})(n):"Filter"}class $f extends le{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class zf extends le{constructor(e,t){super(e,"in",t),this.keys=Zl("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Hf extends le{constructor(e,t){super(e,"not-in",t),this.keys=Zl("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Zl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>L.fromName(r.referenceValue)))}class Kf extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fi(t)&&Nn(t.arrayValue,this.value)}}class Gf extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nn(this.value.arrayValue,t)}}class Wf extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Nn(this.value.arrayValue,t)}}class Qf extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Nn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t=null,r=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function Na(n,e=null,t=[],r=[],s=null,o=null,a=null){return new Yf(n,e,t,r,s,o,a)}function pi(n){const e=q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>zs(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ot(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ot(r))).join(",")),e.ue=t}return e.ue}function mi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Bf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Xl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Sa(n.startAt,e.startAt)&&Sa(n.endAt,e.endAt)}function Hs(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Xf(n,e,t,r,s,o,a,c){return new qt(n,e,t,r,s,o,a,c)}function gi(n){return new qt(n)}function Ca(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ec(n){return n.collectionGroup!==null}function vn(n){const e=q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(fe.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Cn(o,r))})),t.has(fe.keyField().canonicalString())||e.ce.push(new Cn(fe.keyField(),r))}return e.ce}function Oe(n){const e=q(n);return e.le||(e.le=Jf(e,vn(n))),e.le}function Jf(n,e){if(n.limitType==="F")return Na(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Cn(s.field,o)}));const t=n.endAt?new Ir(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ir(n.startAt.position,n.startAt.inclusive):null;return Na(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ks(n,e){const t=n.filters.concat([e]);return new qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ar(n,e,t){return new qt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Dr(n,e){return mi(Oe(n),Oe(e))&&n.limitType===e.limitType}function tc(n){return`${pi(Oe(n))}|lt:${n.limitType}`}function St(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Jl(s))).join(", ")}]`),Vr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ot(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ot(s))).join(",")),`Target(${r})`})(Oe(n))}; limitType=${n.limitType})`}function jr(n,e){return e.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,s){for(const o of vn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,h){const f=Ra(a,c,h);return a.inclusive?f<=0:f<0})(r.startAt,vn(r),s)||r.endAt&&!(function(a,c,h){const f=Ra(a,c,h);return a.inclusive?f>=0:f>0})(r.endAt,vn(r),s))})(n,e)}function Zf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nc(n){return(e,t)=>{let r=!1;for(const s of vn(n)){const o=ep(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ep(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):(function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?jt(h,f):U()})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Tt(this.inner,((t,r)=>{for(const[s,o]of r)e(s,o)}))}isEmpty(){return Hl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new te(L.comparator);function He(){return tp}const rc=new te(L.comparator);function fn(...n){let e=rc;for(const t of n)e=e.insert(t.key,t);return e}function sc(n){let e=rc;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function ft(){return wn()}function ic(){return wn()}function wn(){return new $t((n=>n.toString()),((n,e)=>n.isEqual(e)))}const np=new te(L.comparator),rp=new pe(L.comparator);function H(...n){let e=rp;for(const t of n)e=e.add(t);return e}const sp=new pe(Q);function ip(){return sp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:br(e)?"-0":e}}function oc(n){return{integerValue:""+n}}function op(n,e){return Of(e)?oc(e):_i(n,e)}/**
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
 */class Or{constructor(){this._=void 0}}function ap(n,e,t){return n instanceof Pn?(function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&hi(o)&&(o=di(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}})(t,e):n instanceof kn?lc(n,e):n instanceof Vn?cc(n,e):(function(s,o){const a=ac(s,o),c=Pa(a)+Pa(s.Pe);return $s(a)&&$s(s.Pe)?oc(c):_i(s.serializer,c)})(n,e)}function lp(n,e,t){return n instanceof kn?lc(n,e):n instanceof Vn?cc(n,e):t}function ac(n,e){return n instanceof Rr?(function(r){return $s(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class Pn extends Or{}class kn extends Or{constructor(e){super(),this.elements=e}}function lc(n,e){const t=uc(e);for(const r of n.elements)t.some((s=>Le(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Vn extends Or{constructor(e){super(),this.elements=e}}function cc(n,e){let t=uc(e);for(const r of n.elements)t=t.filter((s=>!Le(s,r)));return{arrayValue:{values:t}}}class Rr extends Or{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Pa(n){return oe(n.integerValue||n.doubleValue)}function uc(n){return fi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){this.field=e,this.transform=t}}function up(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof kn&&s instanceof kn||r instanceof Vn&&s instanceof Vn?Dt(r.elements,s.elements,Le):r instanceof Rr&&s instanceof Rr?Le(r.Pe,s.Pe):r instanceof Pn&&s instanceof Pn})(n.transform,e.transform)}class hp{constructor(e,t){this.version=e,this.transformResults=t}}class De{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mr{}function hc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yi(n.key,De.none()):new On(n.key,n.data,De.none());{const t=n.data,r=Se.empty();let s=new pe(fe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ot(n.key,r,new Ce(s.toArray()),De.none())}}function dp(n,e,t){n instanceof On?(function(s,o,a){const c=s.value.clone(),h=Va(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof ot?(function(s,o,a){if(!yr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Va(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(dc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function En(n,e,t,r){return n instanceof On?(function(o,a,c,h){if(!yr(o.precondition,a))return c;const f=o.value.clone(),m=Da(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,e,t,r):n instanceof ot?(function(o,a,c,h){if(!yr(o.precondition,a))return c;const f=Da(o.fieldTransforms,h,a),m=a.data;return m.setAll(dc(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((v=>v.field)))})(n,e,t,r):(function(o,a,c){return yr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function fp(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=ac(r.transform,s||null);o!=null&&(t===null&&(t=Se.empty()),t.set(r.field,o))}return t||null}function ka(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Dt(r,s,((o,a)=>up(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class On extends Mr{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ot extends Mr{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function dc(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Va(n,e,t){const r=new Map;Y(n.length===t.length);for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,c=e.data.field(o.field);r.set(o.field,lp(a,c,t[s]))}return r}function Da(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,ap(o,a,e))}return r}class yi extends Mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pp extends Mr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&dp(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=En(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=En(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ic();return this.mutations.forEach((s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(s.key)?null:c;const h=hc(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(B.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),H())}isEqual(e){return this.batchId===e.batchId&&Dt(this.mutations,e.mutations,((t,r)=>ka(t,r)))&&Dt(this.baseMutations,e.baseMutations,((t,r)=>ka(t,r)))}}class vi{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Y(e.mutations.length===r.length);let s=(function(){return np})();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new vi(e,t,r,s)}}/**
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
 */class gp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _p{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,K;function yp(n){switch(n){default:return U();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function fc(n){if(n===void 0)return ze("GRPC error has no .code"),C.UNKNOWN;switch(n){case ae.OK:return C.OK;case ae.CANCELLED:return C.CANCELLED;case ae.UNKNOWN:return C.UNKNOWN;case ae.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ae.INTERNAL:return C.INTERNAL;case ae.UNAVAILABLE:return C.UNAVAILABLE;case ae.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ae.NOT_FOUND:return C.NOT_FOUND;case ae.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ae.ABORTED:return C.ABORTED;case ae.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ae.DATA_LOSS:return C.DATA_LOSS;default:return U()}}(K=ae||(ae={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vp(){return new TextEncoder}/**
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
 */const wp=new pt([4294967295,4294967295],0);function ja(n){const e=vp().encode(n),t=new Ml;return t.update(e),new Uint8Array(t.digest())}function Oa(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new pt([t,r],0),new pt([s,o],0)]}class wi{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new pn(`Invalid padding: ${t}`);if(r<0)throw new pn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new pn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=pt.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(pt.fromNumber(r)));return s.compare(wp)===1&&(s=new pt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ja(e),[r,s]=Oa(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new wi(o,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.Ie===0)return;const t=ja(e),[r,s]=Oa(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Mn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Lr(B.min(),s,new te(Q),He(),H())}}class Mn{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mn(r,t,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class pc{constructor(e,t){this.targetId=e,this.me=t}}class mc{constructor(e,t,r=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ma{constructor(){this.fe=0,this.ge=Fa(),this.pe=me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=H(),t=H(),r=H();return this.ge.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}})),new Mn(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Fa()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ep{constructor(e){this.Le=e,this.Be=new Map,this.ke=He(),this.qe=La(),this.Qe=new te(Q)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:U()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((r,s)=>{this.ze(s)&&t(s)}))}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const o=s.target;if(Hs(o))if(r===0){const a=new L(o.path);this.Ue(t,a,Te.newNoDocument(a,B.min()))}else Y(r===1);else{const a=this.Ye(t);if(a!==r){const c=this.Ze(e),h=c?this.Xe(c,e,a):1;if(h!==0){this.je(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,c;try{a=yt(r).toUint8Array()}catch(h){if(h instanceof Kl)return Vt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new wi(a,s,o)}catch(h){return Vt(h instanceof pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach((o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,o,null),s++)})),s}rt(e){const t=new Map;this.Be.forEach(((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Hs(c.target)){const h=new L(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Te.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}}));let r=H();this.qe.forEach(((o,a)=>{let c=!0;a.forEachWhile((h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.ke.forEach(((o,a)=>a.setReadTime(e)));const s=new Lr(e,t,this.Qe,this.ke,r);return this.ke=He(),this.qe=La(),this.Qe=new te(Q),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ma,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(Q),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ma),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function La(){return new te(L.comparator)}function Fa(){return new te(L.comparator)}const Tp={asc:"ASCENDING",desc:"DESCENDING"},xp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bp={and:"AND",or:"OR"};class Ip{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gs(n,e){return n.useProto3Json||Vr(e)?e:{value:e}}function Sr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ap(n,e){return Sr(n,e.toTimestamp())}function Me(n){return Y(!!n),B.fromTimestamp((function(t){const r=st(t);return new ce(r.seconds,r.nanos)})(n))}function Ei(n,e){return Ws(n,e).canonicalString()}function Ws(n,e){const t=(function(s){return new ee(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function _c(n){const e=ee.fromString(n);return Y(Tc(e)),e}function Qs(n,e){return Ei(n.databaseId,e.path)}function Rs(n,e){const t=_c(e);if(t.get(1)!==n.databaseId.projectId)throw new j(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(vc(t))}function yc(n,e){return Ei(n.databaseId,e)}function Rp(n){const e=_c(n);return e.length===4?ee.emptyPath():vc(e)}function Ys(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vc(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ua(n,e,t){return{name:Qs(n,e),fields:t.value.mapValue.fields}}function Sp(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:U()})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(f,m){return f.useProto3Json?(Y(m===void 0||typeof m=="string"),me.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array),me.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(f){const m=f.code===void 0?C.UNKNOWN:fc(f.code);return new j(m,f.message||"")})(a);t=new mc(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rs(n,r.document.name),o=Me(r.document.updateTime),a=r.document.createTime?Me(r.document.createTime):B.min(),c=new Se({mapValue:{fields:r.document.fields}}),h=Te.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];t=new vr(f,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rs(n,r.document),o=r.readTime?Me(r.readTime):B.min(),a=Te.newNoDocument(s,o),c=r.removedTargetIds||[];t=new vr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rs(n,r.document),o=r.removedTargetIds||[];t=new vr([],o,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new _p(s,o),c=r.targetId;t=new pc(c,a)}}return t}function Np(n,e){let t;if(e instanceof On)t={update:Ua(n,e.key,e.value)};else if(e instanceof yi)t={delete:Qs(n,e.key)};else if(e instanceof ot)t={update:Ua(n,e.key,e.data),updateMask:Lp(e.fieldMask)};else{if(!(e instanceof pp))return U();t={verify:Qs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const c=a.transform;if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof kn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Rr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw U()})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Ap(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()})(n,e.precondition)),t}function Cp(n,e){return n&&n.length>0?(Y(e!==void 0),n.map((t=>(function(s,o){let a=s.updateTime?Me(s.updateTime):Me(o);return a.isEqual(B.min())&&(a=Me(o)),new hp(a,s.transformResults||[])})(t,e)))):[]}function Pp(n,e){return{documents:[yc(n,e.path)]}}function kp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=yc(n,s);const o=(function(f){if(f.length!==0)return Ec(je.create(f,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(f){if(f.length!==0)return f.map((m=>(function(b){return{field:Nt(b.field),direction:jp(b.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Gs(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{_t:t,parent:s}}function Vp(n){let e=Rp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=(function(v){const b=wc(v);return b instanceof je&&Yl(b)?b.getFilters():[b]})(t.where));let a=[];t.orderBy&&(a=(function(v){return v.map((b=>(function(N){return new Cn(Ct(N.field),(function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(b)))})(t.orderBy));let c=null;t.limit&&(c=(function(v){let b;return b=typeof v=="object"?v.value:v,Vr(b)?null:b})(t.limit));let h=null;t.startAt&&(h=(function(v){const b=!!v.before,S=v.values||[];return new Ir(S,b)})(t.startAt));let f=null;return t.endAt&&(f=(function(v){const b=!v.before,S=v.values||[];return new Ir(S,b)})(t.endAt)),Xf(e,s,a,o,c,"F",h,f)}function Dp(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wc(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ct(t.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ct(t.unaryFilter.field);return le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ct(t.unaryFilter.field);return le.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ct(t.unaryFilter.field);return le.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}})(n):n.fieldFilter!==void 0?(function(t){return le.create(Ct(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return je.create(t.compositeFilter.filters.map((r=>wc(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}})(t.compositeFilter.op))})(n):U()}function jp(n){return Tp[n]}function Op(n){return xp[n]}function Mp(n){return bp[n]}function Nt(n){return{fieldPath:n.canonicalString()}}function Ct(n){return fe.fromServerFormat(n.fieldPath)}function Ec(n){return n instanceof le?(function(t){if(t.op==="=="){if(Aa(t.value))return{unaryFilter:{field:Nt(t.field),op:"IS_NAN"}};if(Ia(t.value))return{unaryFilter:{field:Nt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Aa(t.value))return{unaryFilter:{field:Nt(t.field),op:"IS_NOT_NAN"}};if(Ia(t.value))return{unaryFilter:{field:Nt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nt(t.field),op:Op(t.op),value:t.value}}})(n):n instanceof je?(function(t){const r=t.getFilters().map((s=>Ec(s)));return r.length===1?r[0]:{compositeFilter:{op:Mp(t.op),filters:r}}})(n):U()}function Lp(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Tc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t,r,s,o=B.min(),a=B.min(),c=me.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Je(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Je(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Je(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Je(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.ct=e}}function Up(n){const e=Vp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ar(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.un=new qp}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(rt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(rt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class qp{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(ee.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Mt(0)}static kn(){return new Mt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.changes=new $t((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&En(r.mutation,s,Ce.empty(),ce.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,H()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=H()){const s=ft();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((o=>{let a=fn();return o.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=ft();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,H())))}populateOverlays(e,t,r){const s=[];return r.forEach((o=>{t.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let o=He();const a=wn(),c=(function(){return wn()})();return t.forEach(((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof ot)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),En(m.mutation,f,m.mutation.getFieldMask(),ce.now())):a.set(f.key,Ce.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((f,m)=>a.set(f,m))),t.forEach(((f,m)=>{var v;return c.set(f,new zp(m,(v=a.get(f))!==null&&v!==void 0?v:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=wn();let s=new te(((a,c)=>a-c)),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((h=>{const f=t.get(h);if(f===null)return;let m=r.get(h)||Ce.empty();m=c.applyToLocalView(f,m),r.set(h,m);const v=(s.get(c.batchId)||H()).add(h);s=s.insert(c.batchId,v)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,v=ic();m.forEach((b=>{if(!o.has(b)){const S=hc(t.get(b),r.get(b));S!==null&&v.set(b,S),o=o.add(b)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,v))}return P.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ec(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):P.resolve(ft());let c=-1,h=o;return a.next((f=>P.forEach(f,((m,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(e,m).next((b=>{h=h.insert(m,b)}))))).next((()=>this.populateOverlays(e,f,o))).next((()=>this.computeViews(e,h,f,H()))).next((m=>({batchId:c,changes:sc(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next((r=>{let s=fn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=fn();return this.indexManager.getCollectionParents(e,o).next((c=>P.forEach(c,(h=>{const f=(function(v,b){return new qt(b,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next((m=>{m.forEach(((v,b)=>{a=a.insert(v,b)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s)))).next((a=>{o.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Te.newInvalidDocument(m)))}));let c=fn();return a.forEach(((h,f)=>{const m=o.get(h);m!==void 0&&En(m.mutation,f,Ce.empty(),ce.now()),jr(t,f)&&(c=c.insert(h,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Me(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(s){return{name:s.name,query:Up(s.bundledQuery),readTime:Me(s.readTime)}})(t)),P.resolve()}}/**
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
 */class Gp{constructor(){this.overlays=new te(L.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ft();return P.forEach(t,(s=>this.getOverlay(e,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,o)=>{this.ht(e,t,o)})),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=ft(),o=t.length+1,a=new L(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new te(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=ft(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=ft(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>c.set(f,m))),!(c.size()>=s)););return P.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new gp(t,r));let o=this.Ir.get(t);o===void 0&&(o=H(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
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
 */class Wp{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.Tr=new pe(ue.Er),this.dr=new pe(ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new ue(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Vr(new ue(e,t))}mr(e,t){e.forEach((r=>this.removeReference(r,t)))}gr(e){const t=new L(new ee([])),r=new ue(t,e),s=new ue(t,e+1),o=[];return this.dr.forEachInRange([r,s],(a=>{this.Vr(a),o.push(a.key)})),o}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new L(new ee([])),r=new ue(t,e),s=new ue(t,e+1);let o=H();return this.dr.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new ue(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ue{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return L.comparator(e.key,t.key)||Q(e.wr,t.wr)}static Ar(e,t){return Q(e.wr,t.wr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new pe(ue.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new mp(o,t,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new ue(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],(a=>{const c=this.Dr(a.wr);o.push(c)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(Q);return t.forEach((s=>{const o=new ue(s,0),a=new ue(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],(c=>{r=r.add(c.wr)}))})),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new ue(new L(o),0);let c=new pe(Q);return this.br.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.wr)),!0)}),a),P.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach((r=>{const s=this.Dr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Y(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,(s=>{const o=new ue(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.br=r}))}On(e){}containsKey(e,t){const r=new ue(t,0),s=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.Mr=e,this.docs=(function(){return new te(L.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=He();return t.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Te.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=He();const a=t.path,c=new L(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||kf(Pf(m),r)<=0||(s.has(m.key)||jr(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,s){U()}Or(e,t){return P.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Xp(this)}getSize(e){return P.resolve(this.size)}}class Xp extends $p{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)})),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e){this.persistence=e,this.Nr=new $t((t=>pi(t)),mi),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ti,this.targetCount=0,this.kr=Mt.Bn()}forEachTarget(e,t){return this.Nr.forEach(((r,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Mt(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.Nr.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),P.waitFor(o).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach((a=>{o.push(s.markPotentiallyOrphaned(e,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ui(0),this.Kr=!1,this.Kr=!0,this.$r=new Wp,this.referenceDelegate=e(this),this.Ur=new Jp(this),this.indexManager=new Bp,this.remoteDocumentCache=(function(s){return new Yp(s)})((r=>this.referenceDelegate.Wr(r))),this.serializer=new Fp(t),this.Gr=new Kp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Gp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Qp(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new em(this.Qr.next());return this.referenceDelegate.zr(),r(s).next((o=>this.referenceDelegate.jr(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Hr(e,t){return P.or(Object.values(this.qr).map((r=>()=>r.containsKey(e,t))))}}class em extends Df{constructor(e){super(),this.currentSequenceNumber=e}}class xi{constructor(e){this.persistence=e,this.Jr=new Ti,this.Yr=null}static Zr(e){return new xi(e)}get Xr(){if(this.Yr)return this.Yr;throw U()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((s=>this.Xr.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((o=>this.Xr.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,(r=>{const s=L.fromPath(r);return this.ei(e,s).next((o=>{o||t.removeEntry(s,B.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=H(),s=H();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new bi(e,t.fromCache,r,s)}}/**
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
 */class tm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return od()?8:jf(sd())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.Yi(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.Zi(e,t,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new tm;return this.Xi(e,t,a).next((c=>{if(o.result=c,this.zi)return this.es(e,t,a,c.size)}))})).next((()=>o.result))}es(e,t,r,s){return r.documentReadCount<this.ji?(cn()<=G.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",St(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(cn()<=G.DEBUG&&O("QueryEngine","Query:",St(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(cn()<=G.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",St(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Oe(t))):P.resolve())}Yi(e,t){if(Ca(t))return P.resolve(null);let r=Oe(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ar(t,null,"F"),r=Oe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=H(...o);return this.Ji.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((h=>{const f=this.ts(t,c);return this.ns(t,f,a,h.readTime)?this.Yi(e,Ar(t,null,"F")):this.rs(e,f,t,h)}))))})))))}Zi(e,t,r,s){return Ca(t)||s.isEqual(B.min())?P.resolve(null):this.Ji.getDocuments(e,r).next((o=>{const a=this.ts(t,o);return this.ns(t,a,r,s)?P.resolve(null):(cn()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),St(t)),this.rs(e,a,t,Cf(s,-1)).next((c=>c)))}))}ts(e,t){let r=new pe(nc(e));return t.forEach(((s,o)=>{jr(e,o)&&(r=r.add(o))})),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(e,t,r){return cn()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",St(t)),this.Ji.getDocumentsMatchingQuery(e,t,rt.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new te(Q),this._s=new $t((o=>pi(o)),mi),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function sm(n,e,t,r){return new rm(n,e,t,r)}async function xc(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],c=[];let h=H();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next((f=>({hs:f,removedBatchIds:a,addedBatchIds:c})))}))}))}function im(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return(function(c,h,f,m){const v=f.batch,b=v.keys();let S=P.resolve();return b.forEach((N=>{S=S.next((()=>m.getEntry(h,N))).next((V=>{const A=f.docVersions.get(N);Y(A!==null),V.version.compareTo(A)<0&&(v.applyToRemoteDocument(V,f),V.isValidDocument()&&(V.setReadTime(f.commitVersion),m.addEntry(V)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(h,v)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let h=H();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function bc(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function om(n,e){const t=q(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach(((m,v)=>{const b=s.get(v);if(!b)return;c.push(t.Ur.removeMatchingKeys(o,m.removedDocuments,v).next((()=>t.Ur.addMatchingKeys(o,m.addedDocuments,v))));let S=b.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(me.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(v,S),(function(V,A,k){return V.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0})(b,S,m)&&c.push(t.Ur.updateTargetData(o,S))}));let h=He(),f=H();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(am(o,a,e.documentUpdates).next((m=>{h=m.Ps,f=m.Is}))),!r.isEqual(B.min())){const m=t.Ur.getLastRemoteSnapshotVersion(o).next((v=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(m)}return P.waitFor(c).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,h,f))).next((()=>h))})).then((o=>(t.os=s,o)))}function am(n,e,t){let r=H(),s=H();return t.forEach((o=>r=r.add(o))),e.getEntries(n,r).next((o=>{let a=He();return t.forEach(((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(B.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)})),{Ps:a,Is:s}}))}function lm(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function cm(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Ur.getTargetData(r,e).next((o=>o?(s=o,P.resolve(s)):t.Ur.allocateTargetId(r).next((a=>(s=new Je(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r}))}async function Xs(n,e,t){const r=q(n),s=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!jn(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ba(n,e,t){const r=q(n);let s=B.min(),o=H();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const v=q(h),b=v._s.get(m);return b!==void 0?P.resolve(v.os.get(b)):v.Ur.getTargetData(f,m)})(r,a,Oe(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next((h=>{o=h}))})).next((()=>r.ss.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?o:H()))).next((c=>(um(r,Zf(e),c),{documents:c,Ts:o})))))}function um(n,e,t){let r=n.us.get(e)||B.min();t.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.us.set(e,r)}class qa{constructor(){this.activeTargetIds=ip()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hm{constructor(){this.so=new qa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qa,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hr=null;function Ss(){return hr===null?hr=(function(){return 268435456+Math.round(2147483648*Math.random())})():hr++,"0x"+hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="WebChannelConnection";class mm extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(t,r,s,o,a){const c=Ss(),h=this.xo(t,r.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(t,h,f,s).then((m=>(O("RestConnection",`Received RPC '${t}' ${c}: `,m),m)),(m=>{throw Vt("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",h,"request:",s),m}))}Lo(t,r,s,o,a,c){return this.Mo(t,r,s,o,a)}Oo(t,r,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bt})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((o,a)=>t[a]=o)),s&&s.headers.forEach(((o,a)=>t[a]=o))}xo(t,r){const s=fm[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const o=Ss();return new Promise(((a,c)=>{const h=new Ll;h.setWithCredentials(!0),h.listenOnce(Fl.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case gr.NO_ERROR:const m=h.getResponseJson();O(we,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case gr.TIMEOUT:O(we,`RPC '${e}' ${o} timed out`),c(new j(C.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:const v=h.getStatus();if(O(we,`RPC '${e}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const N=(function(A){const k=A.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(k)>=0?k:C.UNKNOWN})(S.status);c(new j(N,S.message))}else c(new j(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new j(C.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O(we,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);O(we,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)}))}Bo(e,t,r){const s=Ss(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ql(),c=Bl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=o.join("");O(we,`Creating RPC '${e}' stream ${s}: ${m}`,h);const v=a.createWebChannel(m,h);let b=!1,S=!1;const N=new pm({Io:A=>{S?O(we,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(b||(O(we,`Opening RPC '${e}' stream ${s} transport.`),v.open(),b=!0),O(we,`RPC '${e}' stream ${s} sending:`,A),v.send(A))},To:()=>v.close()}),V=(A,k,M)=>{A.listen(k,(F=>{try{M(F)}catch($){setTimeout((()=>{throw $}),0)}}))};return V(v,dn.EventType.OPEN,(()=>{S||(O(we,`RPC '${e}' stream ${s} transport opened.`),N.yo())})),V(v,dn.EventType.CLOSE,(()=>{S||(S=!0,O(we,`RPC '${e}' stream ${s} transport closed`),N.So())})),V(v,dn.EventType.ERROR,(A=>{S||(S=!0,Vt(we,`RPC '${e}' stream ${s} transport errored:`,A),N.So(new j(C.UNAVAILABLE,"The operation could not be completed")))})),V(v,dn.EventType.MESSAGE,(A=>{var k;if(!S){const M=A.data[0];Y(!!M);const F=M,$=F.error||((k=F[0])===null||k===void 0?void 0:k.error);if($){O(we,`RPC '${e}' stream ${s} received error:`,$);const ie=$.status;let J=(function(_){const w=ae[_];if(w!==void 0)return fc(w)})(ie),E=$.message;J===void 0&&(J=C.INTERNAL,E="Unknown error status: "+ie+" with message "+$.message),S=!0,N.So(new j(J,E)),v.close()}else O(we,`RPC '${e}' stream ${s} received:`,M),N.bo(M)}})),V(c,Ul.STAT_EVENT,(A=>{A.stat===Bs.PROXY?O(we,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===Bs.NOPROXY&&O(we,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.wo()}),0),N}}function Ns(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){return new Ip(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,r=1e3,s=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,r,s,o,a,c,h){this.ui=e,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ic(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ze(t.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.Yo===t&&this.P_(r,s)}),(r=>{e((()=>{const s=new j(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)}))}))}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{r((()=>this.listener.Eo()))})),this.stream.Ro((()=>{r((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((s=>{r((()=>this.I_(s)))})),this.stream.onMessage((s=>{r((()=>++this.e_==1?this.E_(s):this.onNext(s)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gm extends Ac{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=Sp(this.serializer,e),r=(function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Me(a.readTime):B.min()})(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ys(this.serializer),t.addTarget=(function(o,a){let c;const h=a.target;if(c=Hs(h)?{documents:Pp(o,h)}:{query:kp(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=gc(o,a.resumeToken);const f=Gs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=Sr(o,a.snapshotVersion.toTimestamp());const f=Gs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,e);const r=Dp(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ys(this.serializer),t.removeTarget=e,this.a_(t)}}class _m extends Ac{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Cp(e.writeResults,e.commitTime),r=Me(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ys(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Np(this.serializer,r)))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new j(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Mo(e,Ws(t,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(C.UNKNOWN,o.toString())}))}Lo(e,t,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Lo(e,Ws(t,r),s,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(C.UNKNOWN,a.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class vm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ze(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o((a=>{r.enqueueAndForget((async()=>{xt(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await(async function(h){const f=q(h);f.L_.add(4),await Ln(f),f.q_.set("Unknown"),f.L_.delete(4),await Ur(f)})(this))}))})),this.q_=new vm(r,s)}}async function Ur(n){if(xt(n))for(const e of n.B_)await e(!0)}async function Ln(n){for(const e of n.B_)await e(!1)}function Rc(n,e){const t=q(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Si(t)?Ri(t):zt(t).r_()&&Ai(t,e))}function Ii(n,e){const t=q(n),r=zt(t);t.N_.delete(e),r.r_()&&Sc(t,e),t.N_.size===0&&(r.r_()?r.o_():xt(t)&&t.q_.set("Unknown"))}function Ai(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zt(n).A_(e)}function Sc(n,e){n.Q_.xe(e),zt(n).R_(e)}function Ri(n){n.Q_=new Ep({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),zt(n).start(),n.q_.v_()}function Si(n){return xt(n)&&!zt(n).n_()&&n.N_.size>0}function xt(n){return q(n).L_.size===0}function Nc(n){n.Q_=void 0}async function Em(n){n.q_.set("Online")}async function Tm(n){n.N_.forEach(((e,t)=>{Ai(n,e)}))}async function xm(n,e){Nc(n),Si(n)?(n.q_.M_(e),Ri(n)):n.q_.set("Unknown")}async function bm(n,e,t){if(n.q_.set("Online"),e instanceof mc&&e.state===2&&e.cause)try{await(async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))})(n,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nr(n,r)}else if(e instanceof vr?n.Q_.Ke(e):e instanceof pc?n.Q_.He(e):n.Q_.We(e),!t.isEqual(B.min()))try{const r=await bc(n.localStore);t.compareTo(r)>=0&&await(function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.N_.get(f);m&&o.N_.set(f,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,f)=>{const m=o.N_.get(h);if(!m)return;o.N_.set(h,m.withResumeToken(me.EMPTY_BYTE_STRING,m.snapshotVersion)),Sc(o,h);const v=new Je(m.target,h,f,m.sequenceNumber);Ai(o,v)})),o.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Nr(n,r)}}async function Nr(n,e,t){if(!jn(e))throw e;n.L_.add(1),await Ln(n),n.q_.set("Offline"),t||(t=()=>bc(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ur(n)}))}function Cc(n,e){return e().catch((t=>Nr(n,t,e)))}async function Br(n){const e=q(n),t=it(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Im(e);)try{const s=await lm(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Am(e,s)}catch(s){await Nr(e,s)}Pc(e)&&kc(e)}function Im(n){return xt(n)&&n.O_.length<10}function Am(n,e){n.O_.push(e);const t=it(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Pc(n){return xt(n)&&!it(n).n_()&&n.O_.length>0}function kc(n){it(n).start()}async function Rm(n){it(n).p_()}async function Sm(n){const e=it(n);for(const t of n.O_)e.m_(t.mutations)}async function Nm(n,e,t){const r=n.O_.shift(),s=vi.from(r,e,t);await Cc(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Br(n)}async function Cm(n,e){e&&it(n).V_&&await(async function(r,s){if((function(a){return yp(a)&&a!==C.ABORTED})(s.code)){const o=r.O_.shift();it(r).s_(),await Cc(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Br(r)}})(n,e),Pc(n)&&kc(n)}async function za(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=xt(t);t.L_.add(3),await Ln(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ur(t)}async function Pm(n,e){const t=q(n);e?(t.L_.delete(2),await Ur(t)):e||(t.L_.add(2),await Ln(t),t.q_.set("Unknown"))}function zt(n){return n.K_||(n.K_=(function(t,r,s){const o=q(t);return o.w_(),new gm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Eo:Em.bind(null,n),Ro:Tm.bind(null,n),mo:xm.bind(null,n),d_:bm.bind(null,n)}),n.B_.push((async e=>{e?(n.K_.s_(),Si(n)?Ri(n):n.q_.set("Unknown")):(await n.K_.stop(),Nc(n))}))),n.K_}function it(n){return n.U_||(n.U_=(function(t,r,s){const o=q(t);return o.w_(),new _m(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rm.bind(null,n),mo:Cm.bind(null,n),f_:Sm.bind(null,n),g_:Nm.bind(null,n)}),n.B_.push((async e=>{e?(n.U_.s_(),await Br(n)):(await n.U_.stop(),n.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))}))),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,c=new Ni(e,t,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ci(n,e){if(ze("AsyncQueue",`${e}: ${n}`),jn(n))return new j(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=fn(),this.sortedSet=new te(this.comparator)}static emptySet(e){return new Pt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Pt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.W_=new te(L.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):U():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Lt{constructor(e,t,r,s,o,a,c,h,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Lt(e,t,Pt.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class Vm{constructor(){this.queries=Ka(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=q(t),o=s.queries;s.queries=Ka(),o.forEach(((a,c)=>{for(const h of c.j_)h.onError(r)}))})(this,new j(C.ABORTED,"Firestore shutting down"))}}function Ka(){return new $t((n=>tc(n)),Dr)}async function Dm(n,e){const t=q(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.H_()&&e.J_()&&(r=2):(o=new km,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(s,!0);break;case 1:o.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ci(a,`Initialization of query '${St(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Pi(t)}async function jm(n,e){const t=q(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=e.J_()?0:1:!o.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Om(n,e){const t=q(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Pi(t)}function Mm(n,e,t){const r=q(n),s=r.queries.get(e);if(s)for(const o of s.j_)o.onError(t);r.queries.delete(e)}function Pi(n){n.Y_.forEach((e=>{e.next()}))}var Js,Ga;(Ga=Js||(Js={})).ea="default",Ga.Cache="cache";class Lm{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Lt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Lt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Js.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.key=e}}class Dc{constructor(e){this.key=e}}class Fm{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=H(),this.mutatedKeys=H(),this.Aa=nc(e),this.Ra=new Pt(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Ha,s=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,v)=>{const b=s.get(m),S=jr(this.query,v)?v:null,N=!!b&&this.mutatedKeys.has(b.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let A=!1;b&&S?b.data.isEqual(S.data)?N!==V&&(r.track({type:3,doc:S}),A=!0):this.ga(b,S)||(r.track({type:2,doc:S}),A=!0,(h&&this.Aa(S,h)>0||f&&this.Aa(S,f)<0)&&(c=!0)):!b&&S?(r.track({type:0,doc:S}),A=!0):b&&!S&&(r.track({type:1,doc:b}),A=!0,(h||f)&&(c=!0)),A&&(S?(a=a.add(S),o=V?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort(((m,v)=>(function(S,N){const V=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return V(S)-V(N)})(m.type,v.type)||this.Aa(m.doc,v.doc))),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new Lt(this.query,e.Ra,o,a,e.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ha,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=H(),this.Ra.forEach((r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))}));const t=[];return e.forEach((r=>{this.da.has(r)||t.push(new Dc(r))})),this.da.forEach((r=>{e.has(r)||t.push(new Vc(r))})),t}ba(e){this.Ta=e.Ts,this.da=H();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Lt.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Um{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Bm{constructor(e){this.key=e,this.va=!1}}class qm{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new $t((c=>tc(c)),Dr),this.Ma=new Map,this.xa=new Set,this.Oa=new te(L.comparator),this.Na=new Map,this.La=new Ti,this.Ba={},this.ka=new Map,this.qa=Mt.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $m(n,e,t=!0){const r=Uc(n);let s;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await jc(r,e,t,!0),s}async function zm(n,e){const t=Uc(n);await jc(t,e,!0,!1)}async function jc(n,e,t,r){const s=await cm(n.localStore,Oe(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await Hm(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Rc(n.remoteStore,s),c}async function Hm(n,e,t,r,s){n.Ka=(v,b,S)=>(async function(V,A,k,M){let F=A.view.ma(k);F.ns&&(F=await Ba(V.localStore,A.query,!1).then((({documents:E})=>A.view.ma(E,F))));const $=M&&M.targetChanges.get(A.targetId),ie=M&&M.targetMismatches.get(A.targetId)!=null,J=A.view.applyChanges(F,V.isPrimaryClient,$,ie);return Qa(V,A.targetId,J.wa),J.snapshot})(n,v,b,S);const o=await Ba(n.localStore,e,!0),a=new Fm(e,o.Ts),c=a.ma(o.documents),h=Mn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);Qa(n,t,f.wa);const m=new Um(e,t,a);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),f.snapshot}async function Km(n,e,t){const r=q(n),s=r.Fa.get(e),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter((a=>!Dr(a,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xs(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ii(r.remoteStore,s.targetId),Zs(r,s.targetId)})).catch(Dn)):(Zs(r,s.targetId),await Xs(r.localStore,s.targetId,!0))}async function Gm(n,e){const t=q(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ii(t.remoteStore,r.targetId))}async function Wm(n,e,t){const r=tg(n);try{const s=await(function(a,c){const h=q(a),f=ce.now(),m=c.reduce(((S,N)=>S.add(N.key)),H());let v,b;return h.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let N=He(),V=H();return h.cs.getEntries(S,m).next((A=>{N=A,N.forEach(((k,M)=>{M.isValidDocument()||(V=V.add(k))}))})).next((()=>h.localDocuments.getOverlayedDocuments(S,N))).next((A=>{v=A;const k=[];for(const M of c){const F=fp(M,v.get(M.key).overlayedDocument);F!=null&&k.push(new ot(M.key,F,Gl(F.value.mapValue),De.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,k,c)})).next((A=>{b=A;const k=A.applyToLocalDocumentSet(v,V);return h.documentOverlayCache.saveOverlays(S,A.batchId,k)}))})).then((()=>({batchId:b.batchId,changes:sc(v)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,h){let f=a.Ba[a.currentUser.toKey()];f||(f=new te(Q)),f=f.insert(c,h),a.Ba[a.currentUser.toKey()]=f})(r,s.batchId,t),await Fn(r,s.changes),await Br(r.remoteStore)}catch(s){const o=Ci(s,"Failed to persist write");t.reject(o)}}async function Oc(n,e){const t=q(n);try{const r=await om(t.localStore,e);e.targetChanges.forEach(((s,o)=>{const a=t.Na.get(o);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Y(a.va):s.removedDocuments.size>0&&(Y(a.va),a.va=!1))})),await Fn(t,r,e)}catch(r){await Dn(r)}}function Wa(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach(((o,a)=>{const c=a.view.Z_(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const h=q(a);h.onlineState=c;let f=!1;h.queries.forEach(((m,v)=>{for(const b of v.j_)b.Z_(c)&&(f=!0)})),f&&Pi(h)})(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qm(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),o=s&&s.key;if(o){let a=new te(L.comparator);a=a.insert(o,Te.newNoDocument(o,B.min()));const c=H().add(o),h=new Lr(B.min(),new Map,new te(Q),a,c);await Oc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),ki(r)}else await Xs(r.localStore,e,!1).then((()=>Zs(r,e,t))).catch(Dn)}async function Ym(n,e){const t=q(n),r=e.batch.batchId;try{const s=await im(t.localStore,e);Lc(t,r,null),Mc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Fn(t,s)}catch(s){await Dn(s)}}async function Xm(n,e,t){const r=q(n);try{const s=await(function(a,c){const h=q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next((v=>(Y(v!==null),m=v.keys(),h.mutationQueue.removeMutationBatch(f,v)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(r.localStore,e);Lc(r,e,t),Mc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Fn(r,s)}catch(s){await Dn(s)}}function Mc(n,e){(n.ka.get(e)||[]).forEach((t=>{t.resolve()})),n.ka.delete(e)}function Lc(n,e,t){const r=q(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Zs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach((r=>{n.La.containsKey(r)||Fc(n,r)}))}function Fc(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Ii(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),ki(n))}function Qa(n,e,t){for(const r of t)r instanceof Vc?(n.La.addReference(r.key,e),Jm(n,r)):r instanceof Dc?(O("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Fc(n,r.key)):U()}function Jm(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(O("SyncEngine","New document in limbo: "+t),n.xa.add(r),ki(n))}function ki(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new L(ee.fromString(e)),r=n.qa.next();n.Na.set(r,new Bm(t)),n.Oa=n.Oa.insert(t,r),Rc(n.remoteStore,new Je(Oe(gi(t.path)),r,"TargetPurposeLimboResolution",ui.oe))}}async function Fn(n,e,t){const r=q(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach(((c,h)=>{a.push(r.Ka(h,e,t).then((f=>{var m;if((f||t)&&r.isPrimaryClient){const v=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){s.push(f);const v=bi.Wi(h.targetId,f);o.push(v)}})))})),await Promise.all(a),r.Ca.d_(s),await(async function(h,f){const m=q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>P.forEach(f,(b=>P.forEach(b.$i,(S=>m.persistence.referenceDelegate.addReference(v,b.targetId,S))).next((()=>P.forEach(b.Ui,(S=>m.persistence.referenceDelegate.removeReference(v,b.targetId,S)))))))))}catch(v){if(!jn(v))throw v;O("LocalStore","Failed to update sequence numbers: "+v)}for(const v of f){const b=v.targetId;if(!v.fromCache){const S=m.os.get(b),N=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(N);m.os=m.os.insert(b,V)}}})(r.localStore,o))}async function Zm(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await xc(t.localStore,e);t.currentUser=e,(function(o,a){o.ka.forEach((c=>{c.forEach((h=>{h.reject(new j(C.CANCELLED,a))}))})),o.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fn(t,r.hs)}}function eg(n,e){const t=q(n),r=t.Na.get(e);if(r&&r.va)return H().add(r.key);{let s=H();const o=t.Ma.get(e);if(!o)return s;for(const a of o){const c=t.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Uc(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qm.bind(null,e),e.Ca.d_=Om.bind(null,e.eventManager),e.Ca.$a=Mm.bind(null,e.eventManager),e}function tg(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ym.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xm.bind(null,e),e}class Cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fr(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return sm(this.persistence,new nm,e.initialUser,this.serializer)}Ga(e){return new Zp(xi.Zr,this.serializer)}Wa(e){return new hm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cr.provider={build:()=>new Cr};class ei{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zm.bind(null,this.syncEngine),await Pm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Vm})()}createDatastore(e){const t=Fr(e.databaseInfo.databaseId),r=(function(o){return new mm(o)})(e.databaseInfo);return(function(o,a,c,h){return new ym(o,a,c,h)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,o,a,c){return new wm(r,s,o,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Wa(this.syncEngine,t,0)),(function(){return $a.D()?new $a:new dm})())}createSyncEngine(e,t){return(function(s,o,a,c,h,f,m){const v=new qm(s,o,a,c,h,f);return m&&(v.Qa=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const o=q(s);O("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Ln(o),o.k_.shutdown(),o.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ei.provider={build:()=>new ei};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ng{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=zl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{O("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(O("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ci(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Cs(n,e){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await xc(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress();const t=await sg(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>za(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>za(e.remoteStore,s))),n._onlineComponents=e}async function sg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Vt("Error using user provided cache. Falling back to memory cache: "+t),await Cs(n,new Cr)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Cs(n,new Cr);return n._offlineComponents}async function Bc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Ya(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Ya(n,new ei))),n._onlineComponents}function ig(n){return Bc(n).then((e=>e.syncEngine))}async function Xa(n){const e=await Bc(n),t=e.eventManager;return t.onListen=$m.bind(null,e.syncEngine),t.onUnlisten=Km.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=zm.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Gm.bind(null,e.syncEngine),t}/**
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
 */function qc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n,e,t){if(!t)throw new j(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function og(n,e,t,r){if(e===!0&&r===!0)throw new j(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Za(n){if(!L.isDocumentKey(n))throw new j(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function el(n){if(L.isDocumentKey(n))throw new j(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function qe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qr(n);throw new j(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ag(n,e){if(e<=0)throw new j(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}og("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $r{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tl(e),e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ef;switch(r.type){case"firstParty":return new If(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ja.get(t);r&&(O("ComponentProvider","Removing Datastore"),Ja.delete(t),r.terminate())})(this),Promise.resolve()}}function lg(n,e,t,r={}){var s;const o=(n=qe(n,$r))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Vt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Ee.MOCK_USER;else{c=Rl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new j(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ee(f)}n._authCredentials=new Tf(new $l(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new at(this.firestore,e,this._query)}}class Ae{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}}class nt extends at{constructor(e,t,r){super(e,t,gi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new L(e))}withConverter(e){return new nt(this.firestore,e,this._path)}}function cg(n,e,...t){if(n=Re(n),$c("collection","path",e),n instanceof $r){const r=ee.fromString(e,...t);return el(r),new nt(n,null,r)}{if(!(n instanceof Ae||n instanceof nt))throw new j(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return el(r),new nt(n.firestore,null,r)}}function zr(n,e,...t){if(n=Re(n),arguments.length===1&&(e=zl.newId()),$c("doc","path",e),n instanceof $r){const r=ee.fromString(e,...t);return Za(r),new Ae(n,null,new L(r))}{if(!(n instanceof Ae||n instanceof nt))throw new j(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return Za(r),new Ae(n.firestore,n instanceof nt?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ic(this,"async_queue_retry"),this.Vu=()=>{const r=Ns();r&&O("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ns();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ns();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new mt;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!jn(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((r=>{this.Eu=r,this.du=!1;const s=(function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c})(r);throw ze("INTERNAL UNHANDLED ERROR: ",s),r})).then((r=>(this.du=!1,r))))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Ni.createAndSchedule(this,e,t,r,(o=>this.yu(o)));return this.Tu.push(s),s}fu(){this.Eu&&U()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function rl(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class Ft extends $r{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new nl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nl(e),this._firestoreClient=void 0,await e}}}function ug(n,e){const t=typeof n=="object"?n:li(),r=typeof n=="string"?n:"(default)",s=kl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Il("firestore");o&&lg(s,...o)}return s}function zc(n){if(n._terminated)throw new j(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hg(n),n._firestoreClient}function hg(n){var e,t,r;const s=n._freezeSettings(),o=(function(c,h,f,m){return new Lf(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,qc(m.experimentalLongPollingOptions),m.useFetchStreams)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new rg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ut(me.fromBase64String(e))}catch(t){throw new j(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ut(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */class Di{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=/^__.*__$/;class fg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new On(e,this.data,t,this.fieldTransforms)}}class Hc{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ot(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class ji{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ji(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Pr(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Kc(this.Cu)&&dg.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class pg{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fr(e)}Qu(e,t,r,s=!1){return new ji({Cu:e,methodName:t,qu:r,path:fe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oi(n){const e=n._freezeSettings(),t=Fr(n._databaseId);return new pg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mg(n,e,t,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,s);Li("Data must be an object, but it was:",a,r);const c=Gc(r,a);let h,f;if(o.merge)h=new Ce(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const b=ti(e,v,t);if(!a.contains(b))throw new j(C.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Qc(m,b)||m.push(b)}h=new Ce(m),f=a.fieldTransforms.filter((v=>h.covers(v.field)))}else h=null,f=a.fieldTransforms;return new fg(new Se(c),h,f)}class Un extends Kr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Un}}class Mi extends Kr{_toFieldTransform(e){return new cp(e.path,new Pn)}isEqual(e){return e instanceof Mi}}function gg(n,e,t,r){const s=n.Qu(1,e,t);Li("Data must be an object, but it was:",s,r);const o=[],a=Se.empty();Tt(r,((h,f)=>{const m=Fi(e,h,t);f=Re(f);const v=s.Nu(m);if(f instanceof Un)o.push(m);else{const b=Bn(f,v);b!=null&&(o.push(m),a.set(m,b))}}));const c=new Ce(o);return new Hc(a,c,s.fieldTransforms)}function _g(n,e,t,r,s,o){const a=n.Qu(1,e,t),c=[ti(e,r,t)],h=[s];if(o.length%2!=0)throw new j(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<o.length;b+=2)c.push(ti(e,o[b])),h.push(o[b+1]);const f=[],m=Se.empty();for(let b=c.length-1;b>=0;--b)if(!Qc(f,c[b])){const S=c[b];let N=h[b];N=Re(N);const V=a.Nu(S);if(N instanceof Un)f.push(S);else{const A=Bn(N,V);A!=null&&(f.push(S),m.set(S,A))}}const v=new Ce(f);return new Hc(m,v,a.fieldTransforms)}function yg(n,e,t,r=!1){return Bn(t,n.Qu(r?4:3,e))}function Bn(n,e){if(Wc(n=Re(n)))return Li("Unsupported field value:",e,n),Gc(n,e);if(n instanceof Kr)return(function(r,s){if(!Kc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const c of r){let h=Bn(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,s){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return op(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ce.fromDate(r);return{timestampValue:Sr(s.serializer,o)}}if(r instanceof ce){const o=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sr(s.serializer,o)}}if(r instanceof Vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ut)return{bytesValue:gc(s.serializer,r._byteString)};if(r instanceof Ae){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ei(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Di)return(function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return _i(c.serializer,h)}))}}}}}})(r,s);throw s.Bu(`Unsupported field value: ${qr(r)}`)})(n,e)}function Gc(n,e){const t={};return Hl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tt(n,((r,s)=>{const o=Bn(s,e.Mu(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function Wc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof Vi||n instanceof Ut||n instanceof Ae||n instanceof Kr||n instanceof Di)}function Li(n,e,t){if(!Wc(t)||!(function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)})(t)){const r=qr(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ti(n,e,t){if((e=Re(e))instanceof Hr)return e._internalPath;if(typeof e=="string")return Fi(n,e);throw Pr("Field path arguments must be of type string or ",n,!1,void 0,t)}const vg=new RegExp("[~\\*/\\[\\]]");function Fi(n,e,t){if(e.search(vg)>=0)throw Pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hr(...e.split("."))._internalPath}catch{throw Pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pr(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new j(C.INVALID_ARGUMENT,c+n+h)}function Qc(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ui("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wg extends Yc{data(){return super.data()}}function Ui(n,e){return typeof e=="string"?Fi(n,e):e instanceof Hr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bi{}class qi extends Bi{}function Tg(n,e,...t){let r=[];e instanceof Bi&&r.push(e),r=r.concat(t),(function(o){const a=o.filter((h=>h instanceof zi)).length,c=o.filter((h=>h instanceof $i)).length;if(a>1||a>0&&c>0)throw new j(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class $i extends qi{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new $i(e,t,r)}_apply(e){const t=this._parse(e);return Xc(e._query,t),new at(e.firestore,e.converter,Ks(e._query,t))}_parse(e){const t=Oi(e.firestore);return(function(o,a,c,h,f,m,v){let b;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new j(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){il(v,m);const S=[];for(const N of v)S.push(sl(h,o,N));b={arrayValue:{values:S}}}else b=sl(h,o,v)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||il(v,m),b=yg(c,a,v,m==="in"||m==="not-in");return le.create(f,m,b)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class zi extends Bi{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new zi(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)Xc(a,h),a=Ks(a,h)})(e._query,t),new at(e.firestore,e.converter,Ks(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hi extends qi{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Hi(e,t)}_apply(e){const t=(function(s,o,a){if(s.startAt!==null)throw new j(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cn(o,a)})(e._query,this._field,this._direction);return new at(e.firestore,e.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new qt(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function xg(n,e="asc"){const t=e,r=Ui("orderBy",n);return Hi._create(r,t)}class Ki extends qi{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ki(e,t,r)}_apply(e){return new at(e.firestore,e.converter,Ar(e._query,this._limit,this._limitType))}}function bg(n){return ag("limit",n),Ki._create("limit",n,"F")}function sl(n,e,t){if(typeof(t=Re(t))=="string"){if(t==="")throw new j(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ec(e)&&t.indexOf("/")!==-1)throw new j(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!L.isDocumentKey(r))throw new j(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ba(n,new L(r))}if(t instanceof Ae)return ba(n,t._key);throw new j(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qr(t)}.`)}function il(n,e){if(!Array.isArray(n)||n.length===0)throw new j(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xc(n,e){const t=(function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ig{convertValue(e,t="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Tt(e,((s,o)=>{r[s]=this.convertValue(o,t)})),r}convertVectorValue(e){var t,r,s;const o=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>oe(a.doubleValue)));return new Di(o)}convertGeoPoint(e){return new Vi(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=di(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Rn(e));default:return null}}convertTimestamp(e){const t=st(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);Y(Tc(r));const s=new Sn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return s.isEqual(t)||ze(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jc extends Yc{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ui("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class wr extends Jc{data(e={}){return super.data(e)}}class Rg{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new wr(this._firestore,this._userDataWriter,r.key,r,new mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const h=new wr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new wr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Sg(c.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Sg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class Zc extends Ig{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ut(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}}function Gr(n,e,t){n=qe(n,Ae);const r=qe(n.firestore,Ft),s=Ag(n.converter,e,t);return Gi(r,[mg(Oi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,De.none())])}function Ng(n,e,t,...r){n=qe(n,Ae);const s=qe(n.firestore,Ft),o=Oi(s);let a;return a=typeof(e=Re(e))=="string"||e instanceof Hr?_g(o,"updateDoc",n._key,e,t,r):gg(o,"updateDoc",n._key,e),Gi(s,[a.toMutation(n._key,De.exists(!0))])}function Cg(n){return Gi(qe(n.firestore,Ft),[new yi(n._key,De.none())])}function eu(n,...e){var t,r,s;n=Re(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||rl(e[a])||(o=e[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(rl(e[a])){const v=e[a];e[a]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[a+2]=(s=v.complete)===null||s===void 0?void 0:s.bind(v)}let h,f,m;if(n instanceof Ae)f=qe(n.firestore,Ft),m=gi(n._key.path),h={next:v=>{e[a]&&e[a](Pg(f,n,v))},error:e[a+1],complete:e[a+2]};else{const v=qe(n,at);f=qe(v.firestore,Ft),m=v._query;const b=new Zc(f);h={next:S=>{e[a]&&e[a](new Rg(f,b,v,S))},error:e[a+1],complete:e[a+2]},Eg(n._query)}return(function(b,S,N,V){const A=new ng(V),k=new Lm(S,A,N);return b.asyncQueue.enqueueAndForget((async()=>Dm(await Xa(b),k))),()=>{A.Za(),b.asyncQueue.enqueueAndForget((async()=>jm(await Xa(b),k)))}})(zc(f),m,c,h)}function Gi(n,e){return(function(r,s){const o=new mt;return r.asyncQueue.enqueueAndForget((async()=>Wm(await ig(r),s,o))),o.promise})(zc(n),e)}function Pg(n,e,t){const r=t.docs.get(e._key),s=new Zc(n);return new Jc(n,s,e._key,r,new mn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){return new Un("deleteField")}function Wi(){return new Mi("serverTimestamp")}(function(e,t=!0){(function(s){Bt=s})(Vl),bn(new kt("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ft(new xf(r.getProvider("auth-internal")),new Rf(r.getProvider("app-check-internal")),(function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new j(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sn(f.options.projectId,m)})(a,s),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),tt(va,"4.7.3",e),tt(va,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="firebasestorage.googleapis.com",nu="storageBucket",Vg=120*1e3,Dg=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Et{constructor(e,t,r=0){super(Ps(e),`Firebase Storage: ${t} (${Ps(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ps(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var re;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(re||(re={}));function Ps(n){return"storage/"+n}function Qi(){const n="An unknown error occurred, please check the error payload for server response.";return new se(re.UNKNOWN,n)}function jg(n){return new se(re.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Og(n){return new se(re.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Mg(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new se(re.UNAUTHENTICATED,n)}function Lg(){return new se(re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Fg(n){return new se(re.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Ug(){return new se(re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bg(){return new se(re.CANCELED,"User canceled the upload/download.")}function qg(n){return new se(re.INVALID_URL,"Invalid URL '"+n+"'.")}function $g(n){return new se(re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function zg(){return new se(re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nu+"' property when initializing the app?")}function Hg(){return new se(re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Kg(){return new se(re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gg(n){return new se(re.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ni(n){return new se(re.INVALID_ARGUMENT,n)}function ru(){return new se(re.APP_DELETED,"The Firebase app was deleted.")}function Wg(n){return new se(re.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Tn(n,e){return new se(re.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function un(n){throw new se(re.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Pe.makeFromUrl(e,t)}catch{return new Pe(e,"")}if(r.path==="")return r;throw $g(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function f($){$.path_=decodeURIComponent($.path)}const m="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",S=new RegExp(`^https?://${v}/${m}/b/${s}/o${b}`,"i"),N={bucket:1,path:3},V=t===tu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,A="([^?#]*)",k=new RegExp(`^https?://${V}/${s}/${A}`,"i"),F=[{regex:c,indices:h,postModify:o},{regex:S,indices:N,postModify:f},{regex:k,indices:{bucket:1,path:2},postModify:f}];for(let $=0;$<F.length;$++){const ie=F[$],J=ie.regex.exec(e);if(J){const E=J[ie.indices.bucket];let g=J[ie.indices.path];g||(g=""),r=new Pe(E,g),ie.postModify(r);break}}if(r==null)throw qg(e);return r}}class Qg{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n,e,t){let r=1,s=null,o=null,a=!1,c=0;function h(){return c===2}let f=!1;function m(...A){f||(f=!0,e.apply(null,A))}function v(A){s=setTimeout(()=>{s=null,n(S,h())},A)}function b(){o&&clearTimeout(o)}function S(A,...k){if(f){b();return}if(A){b(),m.call(null,A,...k);return}if(h()||a){b(),m.call(null,A,...k);return}r<64&&(r*=2);let F;c===1?(c=2,F=0):F=(r+Math.random())*1e3,v(F)}let N=!1;function V(A){N||(N=!0,b(),!f&&(s!==null?(A||(c=2),clearTimeout(s),v(0)):A||(c=1)))}return v(0),o=setTimeout(()=>{a=!0,V(!0)},t),V}function Xg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n){return n!==void 0}function Zg(n){return typeof n=="object"&&!Array.isArray(n)}function Yi(n){return typeof n=="string"||n instanceof String}function ol(n){return Xi()&&n instanceof Blob}function Xi(){return typeof Blob<"u"}function al(n,e,t,r){if(r<e)throw ni(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ni(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function su(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var gt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(gt||(gt={}));/**
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
 */function e_(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,r,s,o,a,c,h,f,m,v,b=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=v,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,N)=>{this.resolve_=S,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new dr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const h=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===gt.NO_ERROR,h=o.getStatus();if(!c||e_(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===gt.ABORT;r(!1,new dr(!1,null,m));return}const f=this.successCodes_.indexOf(h)!==-1;r(!0,new dr(f,o))})},t=(r,s)=>{const o=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());Jg(h)?o(h):o()}catch(h){a(h)}else if(c!==null){const h=Qi();h.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,h)):a(h)}else if(s.canceled){const h=this.appDelete_?ru():Bg();a(h)}else{const h=Ug();a(h)}};this.canceled_?t(!1,new dr(!1,null,!0)):this.backoffId_=Yg(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Xg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class dr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function n_(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function r_(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function s_(n,e){e&&(n["X-Firebase-GMPID"]=e)}function i_(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function o_(n,e,t,r,s,o,a=!0){const c=su(n.urlParams),h=n.url+c,f=Object.assign({},n.headers);return s_(f,e),n_(f,t),r_(f,o),i_(f,r),new t_(h,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function l_(...n){const e=a_();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Xi())return new Blob(n);throw new se(re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function c_(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function u_(n){if(typeof atob>"u")throw Gg("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ks{constructor(e,t){this.data=e,this.contentType=t||null}}function iu(n,e){switch(n){case Ve.RAW:return new ks(ou(e));case Ve.BASE64:case Ve.BASE64URL:return new ks(au(n,e));case Ve.DATA_URL:return new ks(d_(e),f_(e))}throw Qi()}function ou(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=n.charCodeAt(++t);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function h_(n){let e;try{e=decodeURIComponent(n)}catch{throw Tn(Ve.DATA_URL,"Malformed data URL.")}return ou(e)}function au(n,e){switch(n){case Ve.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw Tn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ve.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw Tn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=u_(e)}catch(s){throw s.message.includes("polyfill")?s:Tn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class lu{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Tn(Ve.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=p_(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function d_(n){const e=new lu(n);return e.base64?au(Ve.BASE64,e.rest):h_(e.rest)}function f_(n){return new lu(n).contentType}function p_(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){let r=0,s="";ol(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(ol(this.data_)){const r=this.data_,s=c_(r,e,t);return s===null?null:new Xe(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Xe(r,!0)}}static getBlob(...e){if(Xi()){const t=e.map(r=>r instanceof Xe?r.data_:r);return new Xe(l_.apply(null,t))}else{const t=e.map(a=>Yi(a)?iu(Ve.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return t.forEach(a=>{for(let c=0;c<a.length;c++)s[o++]=a[c]}),new Xe(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n){let e;try{e=JSON.parse(n)}catch{return null}return Zg(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function g_(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function uu(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(n,e){return e}class Ie{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||__}}let fr=null;function y_(n){return!Yi(n)||n.length<2?n:uu(n)}function hu(){if(fr)return fr;const n=[];n.push(new Ie("bucket")),n.push(new Ie("generation")),n.push(new Ie("metageneration")),n.push(new Ie("name","fullPath",!0));function e(o,a){return y_(a)}const t=new Ie("name");t.xform=e,n.push(t);function r(o,a){return a!==void 0?Number(a):a}const s=new Ie("size");return s.xform=r,n.push(s),n.push(new Ie("timeCreated")),n.push(new Ie("updated")),n.push(new Ie("md5Hash",null,!0)),n.push(new Ie("cacheControl",null,!0)),n.push(new Ie("contentDisposition",null,!0)),n.push(new Ie("contentEncoding",null,!0)),n.push(new Ie("contentLanguage",null,!0)),n.push(new Ie("contentType",null,!0)),n.push(new Ie("metadata","customMetadata",!0)),fr=n,fr}function v_(n,e){function t(){const r=n.bucket,s=n.fullPath,o=new Pe(r,s);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function w_(n,e,t){const r={};r.type="file";const s=t.length;for(let o=0;o<s;o++){const a=t[o];r[a.local]=a.xform(r,e[a.server])}return v_(r,n),r}function du(n,e,t){const r=cu(e);return r===null?null:w_(n,r,t)}function E_(n,e,t,r){const s=cu(e);if(s===null||!Yi(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const m=n.bucket,v=n.fullPath,b="/b/"+a(m)+"/o/"+a(v),S=Ji(b,t,r),N=su({alt:"media",token:f});return S+N})[0]}function T_(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const o=e[s];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}class fu{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n){if(!n)throw Qi()}function x_(n,e){function t(r,s){const o=du(n,s,e);return pu(o!==null),o}return t}function b_(n,e){function t(r,s){const o=du(n,s,e);return pu(o!==null),E_(o,s,n.host,n._protocol)}return t}function mu(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Lg():s=Mg():t.getStatus()===402?s=Og(n.bucket):t.getStatus()===403?s=Fg(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function I_(n){const e=mu(n);function t(r,s){let o=e(r,s);return r.getStatus()===404&&(o=jg(n.path)),o.serverResponse=s.serverResponse,o}return t}function A_(n,e,t){const r=e.fullServerUrl(),s=Ji(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,c=new fu(s,o,b_(n,t),a);return c.errorHandler=I_(e),c}function R_(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function S_(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=R_(null,e)),r}function N_(n,e,t,r,s){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let F="";for(let $=0;$<2;$++)F=F+Math.random().toString().slice(2);return F}const h=c();a["Content-Type"]="multipart/related; boundary="+h;const f=S_(e,r,s),m=T_(f,t),v="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,b=`\r
--`+h+"--",S=Xe.getBlob(v,r,b);if(S===null)throw Hg();const N={name:f.fullPath},V=Ji(o,n.host,n._protocol),A="POST",k=n.maxUploadRetryTime,M=new fu(V,A,x_(n,t),k);return M.urlParams=N,M.headers=a,M.body=S.uploadData(),M.errorHandler=mu(e),M}class C_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s){if(this.sent_)throw un("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw un("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw un("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw un("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw un("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class P_ extends C_{initXhr(){this.xhr_.responseType="text"}}function gu(){return new P_}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this._service=e,t instanceof Pe?this._location=t:this._location=Pe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new wt(e,t)}get root(){const e=new Pe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uu(this._location.path)}get storage(){return this._service}get parent(){const e=m_(this._location.path);if(e===null)return null;const t=new Pe(this._location.bucket,e);return new wt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Wg(e)}}function _u(n,e,t){n._throwIfRoot("uploadBytes");const r=N_(n.storage,n._location,hu(),new Xe(e,!0),t);return n.storage.makeRequestWithTokens(r,gu).then(s=>({metadata:s,ref:n}))}function k_(n,e,t=Ve.RAW,r){n._throwIfRoot("uploadString");const s=iu(t,e),o=Object.assign({},r);return o.contentType==null&&s.contentType!=null&&(o.contentType=s.contentType),_u(n,s.data,o)}function V_(n){n._throwIfRoot("getDownloadURL");const e=A_(n.storage,n._location,hu());return n.storage.makeRequestWithTokens(e,gu).then(t=>{if(t===null)throw Kg();return t})}function D_(n,e){const t=g_(n._location.path,e),r=new Pe(n._location.bucket,t);return new wt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n){return/^[A-Za-z]+:\/\//.test(n)}function O_(n,e){return new wt(n,e)}function yu(n,e){if(n instanceof Zi){const t=n;if(t._bucket==null)throw zg();const r=new wt(t,t._bucket);return e!=null?yu(r,e):r}else return e!==void 0?D_(n,e):n}function M_(n,e){if(e&&j_(e)){if(n instanceof Zi)return O_(n,e);throw ni("To use ref(service, url), the first argument must be a Storage instance.")}else return yu(n,e)}function ll(n,e){const t=e==null?void 0:e[nu];return t==null?null:Pe.makeFromBucketSpec(t,n)}function L_(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Rl(s,n.app.options.projectId))}class Zi{constructor(e,t,r,s,o){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=tu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vg,this._maxUploadRetryTime=Dg,this._requests=new Set,s!=null?this._bucket=Pe.makeFromBucketSpec(s,this._host):this._bucket=ll(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pe.makeFromBucketSpec(this._url,e):this._bucket=ll(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){al("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){al("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wt(this,e)}_makeRequest(e,t,r,s,o=!0){if(this._deleted)return new Qg(ru());{const a=o_(e,this._appId,r,s,t,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const cl="@firebase/storage",ul="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="storage";function F_(n,e,t){return n=Re(n),_u(n,e,t)}function U_(n,e,t,r){return n=Re(n),k_(n,e,t,r)}function wu(n){return n=Re(n),V_(n)}function Wr(n,e){return n=Re(n),M_(n,e)}function B_(n=li(),e){n=Re(n);const r=kl(n,vu).getImmediate({identifier:e}),s=Il("storage");return s&&q_(r,...s),r}function q_(n,e,t,r={}){L_(n,e,t,r)}function $_(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Zi(t,r,s,e,Vl)}function z_(){bn(new kt(vu,$_,"PUBLIC").setMultipleInstances(!0)),tt(cl,ul,""),tt(cl,ul,"esm2017")}z_();var H_="firebase",K_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(H_,K_,"app");const G_={apiKey:"AIzaSyBwtQBAZ_IewB2TYCkew3ctzB4HMs9Gyn0",authDomain:"v3-creative-engine.firebaseapp.com",projectId:"v3-creative-engine",storageBucket:"v3-creative-engine.firebasestorage.app",messagingSenderId:"964100659393",appId:"1:964100659393:web:bc6aa41fce9a8770d55c40"},Eu=hf().length?li():Dl(G_),Tu=ug(Eu),Qr=B_(Eu),Yr=zr(Tu,"shorts_intel_hub","current"),Xr=cg(Tu,"shorts_intel_hub_archive");function hl(){return{nyanCat:null,vayner:null,matchSummary:null,matchResult:null}}function W_(n){let e=null,t=null,r=null;return eu(Yr,async s=>{if(!s.exists()){e=null,t=null,r=null,n(hl());return}const o=s.data();t=o.matchSummary??null;const a=()=>n({nyanCat:o.nyanCat??null,vayner:o.vayner??null,matchSummary:t,matchResult:r});if(!t){e=null,r=null,a();return}if(t.storagePath===e&&r){a();return}a();try{const c=await wu(Wr(Qr,t.storagePath)),h=await fetch(c);if(!h.ok)throw new Error(`HTTP ${h.status}`);const f=await h.json();e=t.storagePath,r=f,a()}catch(c){console.error("[sharedState] failed to load match result from Storage:",c),r=null,a()}},s=>{console.error("[sharedState] subscribe failed:",s),n(hl())})}function Q_(n,e,t){const r=t.replace(/[^a-zA-Z0-9._-]/g,"_");return`shorts-intel-hub/uploads/${e}/${n}-${r}`}function Y_(n){return`shorts-intel-hub/results/${n}.json`}async function X_(n,e){const t=`upl-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,r=Q_(n,t,e.name);await F_(Wr(Qr,r),e,{contentType:e.type||"text/csv"});const s={name:e.name,storagePath:r,size:e.size,uploadedAt:new Date().toISOString(),uploadId:t};return await Gr(Yr,{[n]:s,updatedAt:Wi()},{merge:!0}),await ey(n,s),s}async function J_(n){await Ng(Yr,{[n]:kg(),updatedAt:Wi()})}async function Z_(n,e={nyanCatFile:null,vaynerFile:null}){var o,a;const t=`run-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,r=Y_(t);await U_(Wr(Qr,r),JSON.stringify(n),"raw",{contentType:"application/json"});const s={version:n.version??2,storagePath:r,markets:n.markets??[],weeks:n.weeks??[],stats:n.stats,nyanCatName:((o=e.nyanCatFile)==null?void 0:o.name)??null,vaynerName:((a=e.vaynerFile)==null?void 0:a.name)??null,updatedAt:new Date().toISOString()};return await Gr(Yr,{matchSummary:s,updatedAt:Wi()},{merge:!0}),await ty(s,e),s}async function dl(n){const e=await wu(Wr(Qr,n.storagePath)),t=await fetch(e);if(!t.ok)throw new Error(`Failed to download ${n.name}: HTTP ${t.status}`);const r=await t.blob();return new File([r],n.name,{type:r.type||"text/csv"})}async function ey(n,e){const t=`upload-${e.uploadId}-${n}`,r={id:t,type:"upload",kind:n,createdAt:e.uploadedAt,nyanCatFile:n==="nyanCat"?e:null,vaynerFile:n==="vayner"?e:null};await Gr(zr(Xr,t),r)}async function ty(n,e){const t=`run-${n.updatedAt}-${Math.random().toString(36).slice(2,6)}`,r={id:t,type:"run",createdAt:n.updatedAt,nyanCatFile:e.nyanCatFile,vaynerFile:e.vaynerFile,summary:n};await Gr(zr(Xr,t),r)}function ny(n,e=100){const t=Tg(Xr,xg("createdAt","desc"),bg(e));return eu(t,r=>{const s=[];r.forEach(o=>s.push(o.data())),n(s)},r=>{console.error("[sharedState] archive subscribe failed:",r),n([])})}async function ry(n){await Cg(zr(Xr,n))}function sy(n){try{return new Date(n).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}catch{return n}}function iy({market:n}){const[e,t]=z.useState([]),[r,s]=z.useState(new Set),[o,a]=z.useState(!1);z.useEffect(()=>ny(m=>{t(m),a(!0),s(v=>v.size>0||m.length===0?v:new Set([m[0].id]))}),[]);const c=f=>{s(m=>{const v=new Set(m);return v.has(f)?v.delete(f):v.add(f),v})},h=async f=>{await ry(f)};return d.jsxs("div",{children:[d.jsxs("div",{className:"mb-6 p-4 bg-card border border-border rounded-lg flex gap-3",children:[d.jsx(ra,{className:"size-5 text-primary flex-shrink-0 mt-0.5"}),d.jsxs("div",{children:[d.jsx("h4",{className:"text-foreground font-medium mb-1",children:"Historical Archive"}),d.jsx("p",{className:"text-muted-foreground text-sm",children:"Every CSV upload and every matching run is auto-archived here and shared across all visitors. Raw CSVs remain downloadable; run results link to the stored JSON."})]})]}),o?e.length===0?d.jsxs("div",{className:"p-8 text-center bg-card rounded-lg border border-border",children:[d.jsx(ra,{className:"size-12 mx-auto mb-4 text-muted-foreground"}),d.jsx("p",{className:"text-muted-foreground",children:"No archived entries yet. Uploading a CSV or running matching creates archive entries automatically."})]}):d.jsx("div",{className:"space-y-3",children:e.map(f=>{var V,A;const m=r.has(f.id),v=f.type==="upload",b=v?si:_h,S=v?"text-purple-400":"text-cyan-400",N=v?`Upload — ${f.kind==="nyanCat"?"Nyan Cat":"Vayner"}`:"Matching run";return d.jsxs("div",{className:"bg-card border border-border rounded-lg overflow-hidden",children:[d.jsxs("div",{className:"w-full px-5 py-4 flex items-center justify-between gap-3",children:[d.jsxs("button",{onClick:()=>c(f.id),className:"flex items-center gap-3 flex-1 text-left hover:opacity-80 transition-opacity",children:[d.jsx(b,{className:`size-5 ${S}`}),d.jsxs("div",{children:[d.jsxs("h3",{className:"text-foreground font-medium",children:[sy(f.createdAt)," — ",N]}),d.jsx("p",{className:"text-sm text-muted-foreground",children:v?((V=f.nyanCatFile)==null?void 0:V.name)||((A=f.vaynerFile)==null?void 0:A.name)||"—":f.summary?`${f.summary.stats.cellCount} cells · ${f.summary.weeks.length} weeks · ${f.summary.markets.length} markets`:"—"})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{onClick:()=>h(f.id),className:"p-2 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors","aria-label":"Delete archive entry",children:d.jsx(yh,{className:"size-4"})}),d.jsx("button",{onClick:()=>c(f.id),className:"p-1 rounded hover:bg-muted text-muted-foreground","aria-label":m?"Collapse":"Expand",children:m?d.jsx(vh,{className:"size-5"}):d.jsx(_l,{className:"size-5"})})]})]}),m&&d.jsxs("div",{className:"border-t border-border p-5 text-sm space-y-2",children:[f.nyanCatFile&&d.jsxs("div",{className:"text-muted-foreground",children:[d.jsx("span",{className:"text-foreground",children:"Nyan Cat:"})," ",f.nyanCatFile.name," (",(f.nyanCatFile.size/1024).toFixed(1)," KB)"]}),f.vaynerFile&&d.jsxs("div",{className:"text-muted-foreground",children:[d.jsx("span",{className:"text-foreground",children:"Vayner:"})," ",f.vaynerFile.name," (",(f.vaynerFile.size/1024).toFixed(1)," KB)"]}),f.summary&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-muted-foreground",children:[d.jsx("span",{className:"text-foreground",children:"Markets:"})," ",f.summary.markets.join(", ")||"—"]}),d.jsxs("div",{className:"text-muted-foreground",children:[d.jsx("span",{className:"text-foreground",children:"Weeks:"})," ",f.summary.weeks.join(", ")||"—"]}),d.jsxs("div",{className:"text-muted-foreground",children:[d.jsx("span",{className:"text-foreground",children:"Parsed:"})," ",f.summary.stats.internalParsed," internal · ",f.summary.stats.externalParsed," external",f.summary.stats.globalInternal+f.summary.stats.globalExternal>0&&d.jsxs(d.Fragment,{children:[" · ",f.summary.stats.globalInternal+f.summary.stats.globalExternal," Global"]})]}),f.summary.stats.internalSkippedNoWeek+f.summary.stats.externalSkippedNoWeek>0&&d.jsxs("div",{className:"text-yellow-500",children:[f.summary.stats.internalSkippedNoWeek+f.summary.stats.externalSkippedNoWeek," trends skipped (no date)"]})]})]})]},f.id)})}):d.jsx("div",{className:"p-8 text-center bg-card rounded-lg border border-border",children:d.jsx("p",{className:"text-muted-foreground",children:"Loading archive…"})})]})}const xu="shorts-intel-approved-v1",bu=52;function Iu(n=new Date){const e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())),t=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-t);const r=new Date(Date.UTC(e.getUTCFullYear(),0,1)),s=Math.ceil(((e.getTime()-r.getTime())/864e5+1)/7);return`${e.getUTCFullYear()}-W${String(s).padStart(2,"0")}`}function Au(n,e){return`${n}-${e}`}function eo(){if(typeof window>"u")return[];try{const n=window.localStorage.getItem(xu);if(!n)return[];const e=JSON.parse(n);return Array.isArray(e)?e:[]}catch{return[]}}function Ru(n){if(!(typeof window>"u"))try{window.localStorage.setItem(xu,JSON.stringify(n))}catch{}}function oy(n){const e=Iu(),t=Au(n,e),r=eo(),s=r.find(a=>a.id===t);if(s)return s;const o={id:t,market:n,weekId:e,createdAt:new Date().toISOString(),trends:[],sentAt:null,sentKbFilename:null,sentKbScope:null};return Ru([o,...r].slice(0,bu)),o}function ri(n){return oy(n)}function ay(n){const e=eo();return(n?e.filter(r=>r.market===n):e).sort((r,s)=>r.weekId<s.weekId?1:-1)}function to(n,e){const t=Iu(),r=Au(n,t),s=eo();let o=s.find(h=>h.id===r);o||(o={id:r,market:n,weekId:t,createdAt:new Date().toISOString(),trends:[],sentAt:null,sentKbFilename:null,sentKbScope:null});const a=e(o)??o,c=[a,...s.filter(h=>h.id!==r)].slice(0,bu);return Ru(c),a}function ly(n,e){return to(n,t=>t.sentAt||t.trends.some(r=>r.id===e.id)?t:{...t,trends:[...t.trends,e]})}function cy(n,e){return to(n,t=>t.sentAt?t:{...t,trends:t.trends.filter(r=>r.id!==e)})}function uy(n,e,t){return to(n,r=>({...r,sentAt:new Date().toISOString(),sentKbFilename:e,sentKbScope:t}))}const Su="https://agent-collective-v2-vx7ggif5xa-uc.a.run.app",hy={JP:"jp",KR:"kr",IN:"in",ID:"id"};function Nu(n){return hy[n]??"global"}function Cu(n){return`intel-hub-brief-${n.market.toLowerCase()}-${n.weekId}.md`}function Pu(n){const e=new Date().toISOString().slice(0,10),t=[];return t.push(`# Shorts Intel Hub — Approved Topics (${n.market}, ${n.weekId})`),t.push(""),t.push("**Source:** Shorts Intel Hub"),t.push(`**Market:** ${n.market}`),t.push(`**Week:** ${n.weekId}`),t.push(`**Sent:** ${e}`),t.push(`**Topic count:** ${n.trends.length}`),t.push(""),t.push("The following topics were human-approved by the APAC marketing team this week. Use them as the canonical brief inputs when generating creative concepts, prompts, or campaign strategies for this market."),t.push(""),t.push("---"),t.push(""),n.trends.forEach((r,s)=>{t.push(...dy(r,s+1)),t.push(""),t.push("---"),t.push("")}),t.join(`
`)}function dy(n,e){var c;const t=[];t.push(`## ${e}. ${n.topicName}`),t.push(""),n.description&&(t.push(n.description),t.push(""));const s=[["Source",n.source],["Target demo",n.targetDemo],["Primary markets",(c=n.primaryMarkets)==null?void 0:c.join(", ")],["Trend velocity",n.trendVelocity],["Trend scale",n.trendScale],["Creation complexity",n.creationComplexity],["Trend bucket",n.trendBucket],["Sentiment",n.sentiment],["Content quality",n.contentQuality],["Brand safe",n.brandSafe===void 0?void 0:n.brandSafe?"Yes":"No"],["GenAI",n.genAI?"Yes":void 0],["AI tool",n.aiTool],["Audio track",n.audio],["Rank",n.rank?`#${n.rank}`:void 0],["Score",typeof n.score=="number"?n.score.toFixed(1):void 0]].filter(([,h])=>h!=null&&h!=="");if(s.length){t.push("| Field | Value |"),t.push("|---|---|");for(const[h,f]of s)t.push(`| ${h} | ${f} |`);t.push("")}const a=[["Views",n.viewsVolume],["Views velocity",n.viewsVelocity],["Watchtime",n.watchtimeVolume],["Watchtime velocity",n.watchtimeVelocity],["Creation rate",n.creationRate],["Engagement rate",n.engagementRate!==void 0?`${(n.engagementRate*100).toFixed(1)}%`:void 0]].filter(h=>h[1]!==void 0&&h[1]!=="");if(a.length){t.push("**Performance**"),t.push("");for(const[h,f]of a)t.push(`- ${h}: ${f}`);t.push("")}return n.hashtags&&n.hashtags.length&&(t.push(`**Hashtags:** ${n.hashtags.map(h=>h.startsWith("#")?h:`#${h}`).join(" ")}`),t.push("")),n.referenceLink&&(t.push(`**Reference:** ${n.referenceLink}`),t.push("")),t}async function fy(n){if(!n.trends.length)throw new Error("No approved topics to send.");const e=Pu(n),t=Cu(n),r=Nu(n.market),s=new FormData;s.append("scope",r),s.append("file",new Blob([e],{type:"text/markdown"}),t);const o=await fetch(`${Su}/api/kb/upload`,{method:"POST",body:s});if(!o.ok){const a=await o.text().catch(()=>"");throw new Error(`Agent Collective upload failed (${o.status}): ${a||o.statusText}`)}return{ok:!0,kbFilename:t,kbScope:r,markdown:e}}function py(){return Su}function my({market:n,version:e,onChanged:t}){const[r,s]=z.useState(!1),[o,a]=z.useState(!1),[c,h]=z.useState(null),[f,m]=z.useState(!1),{current:v,history:b}=z.useMemo(()=>{const k=ay(n),M=ri(n),F=k.find(ie=>ie.id===M.id)??M,$=k.filter(ie=>ie.id!==F.id&&ie.sentAt);return{current:F,history:$}},[n,e]),S=Nu(n),N=!!v.sentAt,V=async()=>{a(!0),h(null);try{const k=await fy(v);uy(n,k.kbFilename,k.kbScope),t()}catch(k){h(k instanceof Error?k.message:"Send failed")}finally{a(!1)}},A=k=>{cy(n,k),t()};return r?d.jsxs("button",{type:"button",onClick:()=>s(!1),className:"flex flex-col items-center gap-2 px-2 py-3 rounded-l-lg border border-border bg-card hover:bg-accent",title:"Open approved topics",children:[d.jsx(wh,{className:"size-4 text-muted-foreground"}),d.jsx(Er,{className:"size-5 text-green-500"}),d.jsxs("span",{className:"text-[10px] text-muted-foreground [writing-mode:vertical-rl]",children:["Approved (",v.trends.length,")"]})]}):d.jsxs("aside",{className:"w-80 flex-shrink-0 rounded-lg border border-border bg-card flex flex-col min-h-0",children:[d.jsxs("div",{className:"px-3 py-2.5 border-b border-border flex items-center justify-between gap-2",children:[d.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[d.jsx(Er,{className:"size-4 text-green-500 flex-shrink-0"}),d.jsxs("h3",{className:"text-sm font-medium text-foreground truncate",children:["Approved — ",v.weekId]})]}),d.jsx("button",{type:"button",onClick:()=>s(!0),className:"p-1 rounded hover:bg-accent text-muted-foreground","aria-label":"Collapse sidebar",children:d.jsx(yl,{className:"size-4"})})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto",children:[d.jsxs("div",{className:"px-3 py-3 border-b border-border",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("span",{className:"text-xs text-muted-foreground",children:[v.trends.length," topic",v.trends.length===1?"":"s"," · ",n]}),N&&d.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px]",children:[d.jsx(Eh,{className:"size-2.5"}),"Sent"]})]}),v.trends.length===0?d.jsx("p",{className:"text-xs text-muted-foreground italic py-2",children:"Click Approve on any trend card to add it to this week's batch."}):d.jsx("ul",{className:"space-y-1.5",children:v.trends.map((k,M)=>d.jsxs("li",{className:"group flex items-start gap-2 p-2 rounded bg-muted/40 text-xs",children:[d.jsxs("span",{className:"text-muted-foreground flex-shrink-0 w-4 text-right",children:[M+1,"."]}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("div",{className:"text-foreground font-medium leading-snug",children:k.topicName}),d.jsxs("div",{className:"text-muted-foreground mt-0.5 truncate",children:[k.source,k.targetDemo?` · ${k.targetDemo}`:""]})]}),!N&&d.jsx("button",{type:"button",onClick:()=>A(k.id),className:"opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-accent text-muted-foreground flex-shrink-0","aria-label":`Remove ${k.topicName}`,title:"Remove",children:d.jsx(vl,{className:"size-3"})})]},k.id))})]}),d.jsx("div",{className:"px-3 py-3 border-b border-border space-y-2",children:N?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"text-[11px] text-muted-foreground",children:["Sent ",v.sentAt?new Date(v.sentAt).toLocaleString():""]}),v.sentKbFilename&&d.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] text-foreground",children:[d.jsx(si,{className:"size-3 flex-shrink-0 text-muted-foreground"}),d.jsx("code",{className:"truncate",children:v.sentKbFilename})]}),d.jsxs("a",{href:py(),target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-secondary text-secondary-foreground hover:bg-accent text-xs w-full justify-center",children:[d.jsx(wl,{className:"size-3"}),"Open Agent Collective"]})]}):d.jsxs(d.Fragment,{children:[d.jsxs("button",{type:"button",onClick:V,disabled:o||v.trends.length===0,className:"inline-flex items-center gap-1.5 px-3 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 text-xs w-full justify-center",children:[o?d.jsx(Tr,{className:"size-3 animate-spin"}):d.jsx(Th,{className:"size-3"}),o?"Sending…":"Send batch to Agent Collective"]}),d.jsxs("button",{type:"button",onClick:()=>m(k=>!k),className:"text-[11px] text-primary hover:underline",children:[f?"Hide":"Preview"," brief markdown"]}),d.jsxs("div",{className:"text-[10px] text-muted-foreground",children:["Uploads as ",d.jsx("code",{children:Cu(v)})," under KB scope ",d.jsx("code",{children:S}),"."]}),c&&d.jsx("div",{className:"p-2 rounded border border-red-500/50 bg-red-500/10 text-red-400 text-[11px]",children:c}),f&&v.trends.length>0&&d.jsx("pre",{className:"mt-2 p-2 bg-muted rounded text-[10px] text-foreground whitespace-pre-wrap max-h-64 overflow-auto",children:Pu(v)})]})}),b.length>0&&d.jsxs("div",{className:"px-3 py-3",children:[d.jsx("div",{className:"text-[10px] uppercase text-muted-foreground mb-2",children:"Past weeks"}),d.jsx("ul",{className:"space-y-1",children:b.map(k=>d.jsx(gy,{batch:k},k.id))})]})]})]})}function gy({batch:n}){const[e,t]=z.useState(!1);return d.jsxs("li",{className:"rounded border border-border/60 bg-muted/30 text-[11px]",children:[d.jsxs("button",{type:"button",onClick:()=>t(r=>!r),className:"w-full flex items-center justify-between px-2 py-1.5 text-left",children:[d.jsx("span",{className:"text-foreground",children:n.weekId}),d.jsxs("span",{className:"text-muted-foreground",children:[n.trends.length," · ",n.sentAt?"✓":"—"]})]}),e&&d.jsxs("ul",{className:"px-2 pb-2 space-y-0.5 text-muted-foreground",children:[n.trends.slice(0,10).map(r=>d.jsxs("li",{className:"truncate",children:["• ",r.topicName]},r.id)),n.trends.length>10&&d.jsxs("li",{className:"italic",children:["…",n.trends.length-10," more"]})]})]})}function fl(n){return n==null||!Number.isFinite(n)?null:n>=1e6?`${(n/1e6).toFixed(1)}M`:n>=1e3?`${(n/1e3).toFixed(1)}K`:String(Math.round(n))}function _y({s:n}){if(!n)return null;const e=n==="positive"?"bg-green-500/20 text-green-400":n==="negative"?"bg-red-500/20 text-red-400":n==="mixed"?"bg-orange-500/20 text-orange-400":"bg-gray-500/20 text-gray-400";return d.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[10px] capitalize ${e}`,children:n})}function yy({v:n}){if(!n)return null;const e=n==="Trending"?"bg-red-500/20 text-red-400":n==="Emerging"?"bg-yellow-500/20 text-yellow-400":"bg-gray-500/20 text-gray-400";return d.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[10px] ${e}`,children:n})}function kr({trend:n,onApprove:e,isApproved:t}){const[r,s]=z.useState(!1),o=n.contentQuality==="potentiallyAISlop",a=n.hidden?"border-dashed border-muted-foreground/40 opacity-70":t?"border-green-500 bg-green-500/5":"border-border hover:border-primary/50",c=n.viewsVolume||fl(n.views),h=n.watchtimeVolume||fl(n.watchtimeHours),f=n.engagementRate!==void 0?`${(n.engagementRate*100).toFixed(1)}%`:null;return d.jsxs("div",{className:`bg-card border rounded-md transition-all ${a}`,children:[d.jsx("button",{type:"button",onClick:()=>s(m=>!m),className:"w-full p-2.5 text-left","aria-expanded":r,children:d.jsxs("div",{className:"flex items-start gap-2",children:[d.jsxs("div",{className:"flex-shrink-0 size-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold",children:["#",n.rank]}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex items-start justify-between gap-2",children:[d.jsx("h4",{className:"text-sm text-foreground font-medium leading-tight line-clamp-2 flex-1 min-w-0",children:n.topicName}),d.jsxs("div",{className:"flex-shrink-0 flex items-center gap-1",children:[d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-sm font-bold text-foreground leading-none",children:n.score}),d.jsx("div",{className:"text-[10px] text-muted-foreground",children:"ERS"})]}),r?d.jsx(_l,{className:"size-4 text-muted-foreground"}):d.jsx(yl,{className:"size-4 text-muted-foreground"})]})]}),d.jsxs("div",{className:"flex flex-wrap gap-1 mt-1",children:[d.jsx(yy,{v:n.trendVelocity}),d.jsx(_y,{s:n.sentiment}),n.brandSafe===!1&&d.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px]",children:[d.jsx(xh,{className:"size-2.5"}),"Unsafe"]}),o&&d.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px]",children:[d.jsx(bh,{className:"size-2.5"}),"Review"]}),n.hidden&&d.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px]",children:[d.jsx(Ih,{className:"size-2.5"}),"Hidden"]}),n.genAI&&d.jsx("span",{className:"px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-[10px]",children:"GenAI"})]})]})]})}),r&&d.jsxs("div",{className:"px-2.5 pb-2.5 pt-1 border-t border-border space-y-2 text-[11px]",children:[n.description&&d.jsx("p",{className:"text-foreground leading-snug",children:n.description}),d.jsxs("div",{className:"grid grid-cols-2 gap-x-2 gap-y-1 text-muted-foreground",children:[n.targetDemo&&d.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[d.jsx(Ah,{className:"size-3 flex-shrink-0"}),d.jsx("span",{className:"truncate",children:n.targetDemo})]}),n.primaryMarkets&&n.primaryMarkets.length>0&&d.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[d.jsx(Rh,{className:"size-3 flex-shrink-0"}),d.jsx("span",{className:"truncate",children:n.primaryMarkets.join(", ")})]}),n.audio&&d.jsxs("div",{className:"flex items-center gap-1 col-span-2 min-w-0",children:[d.jsx(Sh,{className:"size-3 flex-shrink-0"}),d.jsx("span",{className:"truncate",children:n.audio})]}),n.brandSafe===!0&&d.jsxs("div",{className:"flex items-center gap-1 text-green-400",children:[d.jsx(Nh,{className:"size-3 flex-shrink-0"}),"Brand safe"]}),n.creationComplexity&&d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx(Ch,{className:"size-3 flex-shrink-0"}),n.creationComplexity]})]}),(c||h||n.creationRate||f)&&d.jsxs("div",{className:"grid grid-cols-4 gap-1 pt-1",children:[c&&d.jsx(pr,{label:"Views",value:c}),h&&d.jsx(pr,{label:"Watch",value:h}),n.creationRate&&d.jsx(pr,{label:"Creates",value:n.creationRate}),f&&d.jsx(pr,{label:"Eng.",value:f})]}),n.hashtags&&n.hashtags.length>0&&d.jsxs("div",{className:"flex items-start gap-1 text-muted-foreground",children:[d.jsx(Ph,{className:"size-3 flex-shrink-0 mt-0.5"}),d.jsx("span",{className:"leading-snug break-words",children:n.hashtags.slice(0,6).map(m=>m.replace(/^#/,"")).join(" · ")})]}),n.trendBucket&&d.jsxs("div",{className:"text-muted-foreground",children:[d.jsx("span",{className:"text-[10px] uppercase",children:"Bucket:"})," ",n.trendBucket]})]}),d.jsxs("div",{className:"flex items-center gap-1 px-2.5 pb-2.5",children:[n.referenceLink&&d.jsxs("a",{href:n.referenceLink,target:"_blank",rel:"noopener noreferrer",title:"View reference",onClick:m=>m.stopPropagation(),className:"inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary text-secondary-foreground hover:bg-accent text-[11px]",children:[d.jsx(wl,{className:"size-3"}),"Ref"]}),t?d.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-1 rounded bg-green-600 text-white text-[11px]",children:[d.jsx(Er,{className:"size-3"}),"Approved"]}):d.jsxs("button",{onClick:m=>{m.stopPropagation(),e(n.id)},title:"Approve for campaign",className:"inline-flex items-center gap-1 px-2 py-1 rounded bg-primary text-primary-foreground hover:opacity-90 text-[11px]",children:[d.jsx(Er,{className:"size-3"}),"Approve"]})]})]})}function pr({label:n,value:e}){return d.jsxs("div",{className:"p-1 rounded bg-muted/50 text-center",children:[d.jsx("div",{className:"text-[9px] uppercase text-muted-foreground",children:n}),d.jsx("div",{className:"text-[11px] text-foreground font-medium leading-tight",children:e})]})}function vy({pair:n,onApprove:e,approvedIds:t}){return d.jsxs("div",{className:"rounded-md border border-cyan-500/30 bg-card p-2",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsxs("div",{className:"size-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold",children:["#",n.rank]}),d.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px]",children:[d.jsx(kh,{className:"size-2.5"}),n.matchStage," · ",Math.round(n.matchScore*100),"%"]}),d.jsxs("div",{className:"ml-auto text-right",children:[d.jsx("div",{className:"text-sm font-bold text-foreground leading-none",children:n.combinedScore.toFixed(1)}),d.jsx("div",{className:"text-[10px] text-muted-foreground",children:"Combined"})]})]}),d.jsxs("div",{className:"space-y-1.5",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[10px] uppercase text-purple-400 mb-0.5",children:"Internal"}),d.jsx(kr,{trend:n.internal,onApprove:e,isApproved:t.has(n.internal.id)})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-[10px] uppercase text-cyan-400 mb-0.5",children:"External"}),d.jsx(kr,{trend:n.external,onApprove:e,isApproved:t.has(n.external.id)})]})]})]})}function Vs({title:n,count:e,accentClass:t,accentText:r,children:s}){return d.jsxs("div",{className:`flex flex-col rounded-lg border ${t} bg-card min-h-0`,children:[d.jsx("div",{className:"px-3 py-2.5 border-b border-border flex-shrink-0",children:d.jsxs("h3",{className:`font-medium text-sm ${r}`,children:[n," ",d.jsxs("span",{className:"text-muted-foreground font-normal",children:["(",e,")"]})]})}),d.jsx("div",{className:"p-2 space-y-2 overflow-y-auto flex-1 min-h-0",children:e===0?d.jsx("p",{className:"text-xs text-muted-foreground italic text-center py-6",children:"No trends in this track."}):s})]})}function wy({state:n,hydrated:e,market:t,week:r}){const{nyanCat:s,vayner:o,matchResult:a}=n,[c,h]=z.useState(!1),[f,m]=z.useState(null),[v,b]=z.useState(!1),[S,N]=z.useState(0),V=!!a&&a.version!==2,A=z.useMemo(()=>{var g;return!a||!r?null:((g=a.cells)==null?void 0:g[qh(t,r)])??null},[a,t,r]),k=z.useMemo(()=>{const g=ri(t);return new Set(g.trends.map(_=>_.id))},[t,S]),M=!!ri(t).sentAt,F=z.useMemo(()=>{if(!A)return new Map;const g=new Map;for(const _ of A.internal)g.set(_.id,_);for(const _ of A.external)g.set(_.id,_);for(const _ of A.matching)g.set(_.internal.id,_.internal),g.set(_.external.id,_.external);return g},[A]),$=g=>{if(M)return;const _=F.get(g);_&&(ly(t,_),N(w=>w+1))},ie=async()=>{if(!s&&!o){m("Upload at least one CSV on the Data Upload page (ideally both for matching to work).");return}h(!0),m(null);try{const[g,_]=await Promise.all([s?dl(s):Promise.resolve(null),o?dl(o):Promise.resolve(null)]),w=await $h(g,_);await Z_(w,{nyanCatFile:s,vaynerFile:o})}catch(g){m(g instanceof Error?g.message:"Matching failed")}finally{h(!1)}},J=g=>v?g:g.filter(_=>!_.hidden),E=(()=>{if(!e)return"Loading latest shared state…";const g=[];return s&&g.push(`Nyan Cat: ${s.name}`),o&&g.push(`Vayner: ${o.name}`),g.length?g.join(" · "):"No CSVs uploaded yet — head to the Data Upload tab."})();return d.jsxs("div",{className:"flex gap-3 items-start",children:[d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"mb-4 p-4 rounded-lg border border-border bg-card",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(Ds,{className:"size-5 text-primary"}),d.jsx("h3",{className:"text-foreground font-medium",children:"Run Topic Matching + ERS"})]}),d.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:E}),d.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[d.jsxs("button",{onClick:ie,disabled:c||!e||!s&&!o,className:"inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50",children:[c?d.jsx(Tr,{className:"size-4 animate-spin"}):d.jsx(Ds,{className:"size-4"}),c?"Matching + ranking…":"Run Matching + Ranking"]}),d.jsxs("label",{className:"flex items-center gap-2 text-sm text-foreground cursor-pointer",children:[d.jsx("input",{type:"checkbox",checked:v,onChange:g=>b(g.target.checked),className:"size-4"}),"Show hidden trends"]})]}),f&&d.jsx("div",{className:"mt-3 p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-red-500 text-sm",children:f})]}),V&&d.jsxs("div",{className:"mb-4 p-3 rounded-lg border border-yellow-500/40 bg-yellow-500/10 text-yellow-500 text-sm",children:["The cached result uses an older format. Click ",d.jsx("strong",{children:"Run Matching + Ranking"})," to refresh with per-market, per-week filtering + normalization."]}),a&&!V&&d.jsxs("div",{className:"mb-4 p-3 rounded-lg border border-border bg-card text-sm",children:[d.jsx("div",{className:"text-muted-foreground mb-1",children:"This upload"}),d.jsxs("div",{className:"flex flex-wrap gap-x-6 gap-y-1 text-foreground",children:[d.jsxs("span",{children:[d.jsx("strong",{children:a.stats.internalParsed})," Nyan Cat parsed"]}),d.jsxs("span",{children:[d.jsx("strong",{children:a.stats.externalParsed})," Vayner parsed"]}),d.jsxs("span",{children:[d.jsx("strong",{children:a.markets.length})," markets · ",d.jsx("strong",{children:a.weeks.length})," weeks · ",d.jsx("strong",{children:a.stats.cellCount})," cells"]}),a.stats.globalInternal+a.stats.globalExternal>0&&d.jsxs("span",{className:"text-cyan-400",children:[a.stats.globalInternal+a.stats.globalExternal," tagged Global"]})]}),(a.stats.internalSkippedNoWeek>0||a.stats.externalSkippedNoWeek>0)&&d.jsxs("div",{className:"mt-2 p-2 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs",children:[d.jsxs("strong",{children:["⚠ ",a.stats.internalSkippedNoWeek," Nyan Cat + ",a.stats.externalSkippedNoWeek," Vayner"]})," trends were skipped because their date column (Nyan: ",d.jsx("code",{children:"shorts_video_published_date"}),", Vayner: ",d.jsx("code",{children:"Date Identified"}),") was missing or unparseable. Check that column in your CSV — week filtering requires a valid date."]}),a.stats.internalParsed===0&&d.jsxs("div",{className:"mt-2 p-2 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs",children:[d.jsx("strong",{children:"⚠ No Nyan Cat trends parsed."})," Check that the CSV has an ",d.jsx("code",{children:"audio_id"})," (or ",d.jsx("code",{children:"Song_title"}),") column per row and that the file was uploaded into the Nyan Cat slot on the Data Upload tab."]}),a.weeks.length===0&&a.stats.internalParsed+a.stats.externalParsed>0&&d.jsxs("div",{className:"mt-2 p-2 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs",children:[d.jsx("strong",{children:"⚠ No weeks found in either CSV."})," Every trend is missing its date field, so nothing falls into a week cell."]})]}),a&&!V&&!A&&r&&d.jsxs("div",{className:"mb-4 p-3 rounded-lg border border-muted bg-muted/40 text-muted-foreground text-sm",children:["No topics for ",t," in ",r,". Try a different market or week."]}),A&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"mb-4 grid grid-cols-2 md:grid-cols-4 gap-2",children:[d.jsx(mr,{label:"Internal parsed",value:A.stats.internalParsed}),d.jsx(mr,{label:"External parsed",value:A.stats.externalParsed}),d.jsx(mr,{label:"Matched",value:A.stats.matched,sub:`${A.stats.matchedByKeyword} kw · ${A.stats.matchedBySemantic} sem`}),d.jsx(mr,{label:"Unique",value:A.stats.internalOnly+A.stats.externalOnly,sub:`${A.stats.internalOnly} int · ${A.stats.externalOnly} ext`})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",style:{height:"calc(100vh - 320px)",minHeight:"500px"},children:[d.jsx(Vs,{title:"Internal (Nyan Cat)",count:J(A.internal).length,accentClass:"border-purple-500/30",accentText:"text-purple-400",children:J(A.internal).map(g=>d.jsx(kr,{trend:g,onApprove:$,isApproved:k.has(g.id)},g.id))}),d.jsx(Vs,{title:"Matched Topics",count:A.matching.length,accentClass:"border-cyan-500/30",accentText:"text-cyan-400",children:A.matching.map(g=>d.jsx(vy,{pair:g,onApprove:$,approvedIds:k},`${g.internal.id}::${g.external.id}`))}),d.jsx(Vs,{title:"External (Vayner)",count:J(A.external).length,accentClass:"border-cyan-500/30",accentText:"text-cyan-400",children:J(A.external).map(g=>d.jsx(kr,{trend:g,onApprove:$,isApproved:k.has(g.id)},g.id))})]})]})]}),d.jsx(my,{market:t,version:S,onChanged:()=>N(g=>g+1)})]})}function mr({label:n,value:e,sub:t}){return d.jsxs("div",{className:"p-3 rounded-lg bg-muted",children:[d.jsx("div",{className:"text-[10px] uppercase text-muted-foreground mb-1",children:n}),d.jsx("div",{className:"text-xl font-bold text-foreground leading-none",children:e}),t&&d.jsx("div",{className:"text-[10px] text-muted-foreground mt-1",children:t})]})}const Ey=[{code:"JP",name:"Japan"},{code:"KR",name:"South Korea"},{code:"IN",name:"India"},{code:"ID",name:"Indonesia"}];function Ty({state:n,hydrated:e}){const[t,r]=z.useState("JP"),[s,o]=z.useState(null),[a]=z.useState(0),[c,h]=z.useState("summary"),f=z.useMemo(()=>{var m;return((m=n.matchResult)==null?void 0:m.weeks)??[]},[n.matchResult]);return z.useEffect(()=>{if(f.length===0){s!==null&&o(null);return}(!s||!f.includes(s))&&o(f[0])},[f,s]),d.jsx("div",{className:"px-6 py-6",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"mb-6 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.15)]",children:[d.jsxs("div",{className:"mb-6 flex flex-wrap gap-4",children:[d.jsxs("div",{className:"flex-1 min-w-[200px]",children:[d.jsx("label",{className:"block mb-2 text-foreground",children:"Market"}),d.jsx("select",{value:t,onChange:m=>r(m.target.value),className:"w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground",children:Ey.map(m=>d.jsx("option",{value:m.code,children:m.name},m.code))})]}),d.jsxs("div",{className:"flex-1 min-w-[200px]",children:[d.jsx("label",{className:"block mb-2 text-foreground",children:"Week"}),d.jsx("select",{value:s??"",onChange:m=>o(m.target.value||null),disabled:f.length===0,className:"w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground disabled:opacity-60",children:f.length===0?d.jsx("option",{value:"",children:"No data yet — run matching first"}):f.map(m=>d.jsx("option",{value:m,children:m},m))})]})]}),d.jsx("div",{className:"mb-6 border-b border-border",children:d.jsxs("div",{className:"flex gap-4",children:[d.jsxs("button",{onClick:()=>h("summary"),className:`px-4 py-3 font-medium transition-colors relative ${c==="summary"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Top Topics & Trends",c==="summary"&&d.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]}),d.jsxs("button",{onClick:()=>h("scoring"),className:`px-4 py-3 font-medium transition-colors relative ${c==="scoring"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Scoring Settings",c==="scoring"&&d.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]}),d.jsxs("button",{onClick:()=>h("archive"),className:`px-4 py-3 font-medium transition-colors relative ${c==="archive"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Archive",c==="archive"&&d.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]})]})}),c==="summary"&&d.jsx(Lh,{market:t,totalTrends:0,approvedCount:a})]}),c==="summary"?d.jsx(wy,{state:n,hydrated:e,market:t,week:s}):c==="scoring"?d.jsx(Gh,{}):d.jsx(iy,{market:t})]})})}const gn={id:"vayner",title:"Vayner CSV (External, trend-level)",subtitle:"One row per curated trend.",filename:"vayner-template.csv",rowGranularity:"One row per trend.",fields:[{name:"Topic Name",required:!0,description:"Short name of the trend",example:"Eid Modest Fashion Transitions"},{name:"Description",required:!0,description:"One-liner summary of the trend",example:"GRWM-style transitions showcasing modest Eid outfits"},{name:"Target Demo",required:!1,description:"Primary demo (free text)",example:"Females 18-34"},{name:"Reference Links",required:!1,description:"Direct link to a reference video",example:"https://youtube.com/shorts/abc123"},{name:"Hashtags (comma-separated)",required:!1,description:"Comma-separated hashtags",example:"#eid, #modest, #grwm"},{name:"Audio Track",required:!1,description:"Audio track name if applicable",example:"Aashiqui (Abdul Hannan)"},{name:"Content Quality",required:!0,description:"Quality gate — controls AI slop filtering",allowedValues:["Not AI Slop","Potential AI Slop","AI Slop",""]},{name:"Brand Safe",required:!0,description:"Hard filter — No hides the trend from default view",allowedValues:["Yes","No"]},{name:"User Sentiment",required:!0,description:"Audience sentiment — Negative hides the trend",allowedValues:["Positive","Mix-Sentiment","Negative","Neutral"]},{name:"Trend Velocity",required:!0,description:"ERS velocity multiplier input",allowedValues:["Trending","Emerging","Niche"]},{name:"Trend Bucket",required:!1,description:"Free-text category bucket",example:"Lifestyle"},{name:"Creation Complexity (Ease of Participation)",required:!1,description:"How hard it is for creators to participate",allowedValues:["Easy","Medium","Hard"]},{name:"Trend Scale (Creation-led/Viewer-led)",required:!1,description:"Who drives the trend",allowedValues:["Creation-Led","Viewer-led"]},{name:"Platforms Trending",required:!1,description:"Comma-separated platforms",example:"YT Shorts, TikTok, IG Reels"},{name:"Primary Markets",required:!1,description:"Comma-separated ISO / region codes",example:"JP, KR"},{name:"Secondary Markets",required:!1,description:"Comma-separated ISO / region codes",example:"ID, IN"},{name:"Platform Origin",required:!1,description:'Originating platform — triggers ERS origin boost if "YT Shorts"',example:"YT Shorts"},{name:"AI Tool",required:!1,description:"AI tool referenced in the trend (if any)",example:"Sora"},{name:"GenAI/non-GenAI",required:!1,description:"Whether the trend is AI-generated",allowedValues:["GenAI","non-GenAI"]},{name:"Initial Trigger",required:!1,description:"What kicked the trend off",example:"Viral TikTok from @creator"},{name:"Engagement Rate",required:!1,description:"Decimal engagement rate (e.g. 0.085 = 8.5%)",example:"0.085"},{name:"Views",required:!0,description:"Aggregate view count",example:"2500000"},{name:"Likes",required:!0,description:"Aggregate likes",example:"180000"},{name:"Comments",required:!0,description:"Aggregate comments",example:"12000"},{name:"Shares (TT-only",required:!1,description:"TikTok shares (header includes leading paren as-is)",example:"5400"},{name:"Saves (TT-only)",required:!1,description:"TikTok saves",example:"3200"},{name:"Creator Subscriber Count",required:!1,description:"Subscribers of the primary creator (drives breakout multiplier)",example:"120000"},{name:"Publication Date",required:!1,description:'Anything Date.parse understands — "March 25, 2026", ISO, etc.',example:"2026-03-25"},{name:"Date Identified",required:!1,description:"When the trend was first curated",example:"2026-03-28"}],notes:["Hard filters — rows matching any of these are scored 0 and hidden: `Brand Safe=No`, `Content Quality=AI Slop`, `User Sentiment=Negative`.",'`Content Quality=Potential AI Slop` surfaces the trend with a "For quality review" pill and applies the Potential AI Slop multiplier from Scoring Settings.',"`Creator Subscriber Count` drives the breakout multiplier: views > subs × heavyThreshold → heavy; views > subs → light.",'A blank cell is treated as "missing" — the scorer falls back to neutral defaults for that signal.']},_n={id:"nyancat",title:"Nyan Cat CSV (Internal, video-level)",subtitle:"One row per YouTube Short. Rows are grouped by audio_id into trends.",filename:"nyancat-template.csv",rowGranularity:"One row per YouTube Short.",groupedBy:"audio_id",fields:[{name:"external_video_id",required:!0,description:"Unique YouTube video ID",example:"dQw4w9WgXcQ"},{name:"audio_id",required:!0,description:"Audio / sound ID — videos are grouped by this into trends",example:"aud_abc123"},{name:"Song_title",required:!0,description:"Human-readable audio name — becomes the trend name",example:"Aashiqui (Abdul Hannan)"},{name:"Song_link",required:!1,description:"Link to the audio reference",example:"https://youtube.com/shorts/xyz"},{name:"Shorts_link",required:!1,description:"Link to this video (used as the reference link for the trend)",example:"https://youtube.com/shorts/abc"},{name:"title",required:!1,description:"Video title — used as description if the audio group has a single video",example:"My Eid GRWM ✨"},{name:"shorts_video_published_date",required:!0,description:"ISO date the video was published",example:"2026-03-22"},{name:"Hashtags",required:!1,description:'JSON array string, e.g. ["#eid","#grwm"]',example:'["#eid","#grwm"]'},{name:"creator_age_bucket",required:!1,description:"Creator age bucket",allowedValues:["AGE_13_17","AGE_18_24","AGE_25_34","AGE_35_44","AGE_45_54"]},{name:"creator_gender",required:!1,description:"Creator gender code",allowedValues:["f","m"]},{name:"shorts_video_upload_country",required:!1,description:"ISO country code — JP/KR/IN/ID/AU/NZ are mapped to market regions",example:"JP"},{name:"elmo_bucket",required:!0,description:"Safety classifier bucket — anything not TRUSTED or LOW_RISK marks the trend unsafe",allowedValues:["TRUSTED","LOW_RISK","MEDIUM_RISK","HIGH_RISK","UNKNOWN"]},{name:"visual_quality_score",required:!0,description:"0–1 score. Group avg <0.3 → AI Slop (hidden); <0.45 → Potential AI Slop",example:"0.72"},{name:"audio_quality_score",required:!0,description:"0–1 score used by IRS quality gate",example:"0.81"},{name:"Views_3D",required:!0,description:"Views in the first 3 days (summed across the audio group)",example:"125000"},{name:"watch_time_hour_3D",required:!0,description:"Watch-time hours in the first 3 days",example:"6200"},{name:"engagement_3D",required:!0,description:"Engagement count (likes + comments, approx) over 3 days",example:"14500"},{name:"downstream_uploads_3d_by_shorts_video_published_date",required:!0,description:"Downstream uploads in 3 days — drives Trending/Emerging/Niche classification",example:"48"},{name:"Total_followers_at_video_published_date",required:!0,description:"Subscribers the creator had when publishing — drives reach ratio",example:"82000"},{name:"Views_1D",required:!0,description:"Views on day 1 — IRS predictive velocity input",example:"38000"},{name:"Views_7D",required:!0,description:"Views in the first 7 days — IRS performance efficiency input",example:"240000"},{name:"watch_time_hour_7D",required:!0,description:"Watch-time hours in the first 7 days",example:"11500"},{name:"engagement_7D",required:!0,description:"Engagement count over 7 days",example:"28000"},{name:"potential_watch_time_hour_7D",required:!0,description:"Max possible watch-time — denominator for IRS stickiness ratio",example:"16000"},{name:"downstream_uploads_7d_by_shorts_video_published_date",required:!0,description:"Downstream uploads in 7 days — IRS additive creation bonus",example:"112"},{name:"linear_reg_7d_pred",required:!1,description:"Linear-regression prediction multiplier for IRS velocity (defaults to 1.0)",example:"1.15"},{name:"Is_CPM_Creator",required:!1,description:"Monetization flag — triggers IRS commercial multiplier",allowedValues:["true","false","yes","no","1","0"]},{name:"monetization_enabled_avod",required:!1,description:"AVOD monetization flag — also triggers IRS commercial multiplier",allowedValues:["true","false","yes","no","1","0"]},{name:"shorts_creation_tools_uploads_lifetime",required:!1,description:"Optional IRS booster — triggers tools multiplier when above threshold",example:"240"},{name:"creator_country_code",required:!1,description:"Optional IRS geo booster — comma-separated ISO codes scale the multiplier",example:"JP,KR"}],notes:["Rows are grouped by `audio_id` into trends; `Song_title` becomes the trend name.","Hard safety filters match Vayner — any non-TRUSTED/LOW_RISK `elmo_bucket` in the group marks the trend as unsafe; avg `visual_quality_score` <0.3 hides the trend.","IRS scores each row then averages across the audio group. Missing IRS fields fall back to neutral defaults (visual/audio quality default to 0.5, monetization to 1.0).","`Hashtags` must be a JSON-array string — rows with malformed JSON are skipped rather than failing the upload."]};function pl(n){if(n==null)return"";const e=String(n);return e.includes(",")||e.includes('"')||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function xy(n){const e=n.fields.map(r=>pl(r.name)).join(","),t=n.fields.map(r=>pl(r.example??"")).join(",");return`${e}
${t}
`}function by(){const n=e=>{const t=[];t.push(`## ${e.title}`),t.push(""),t.push(e.subtitle),e.groupedBy&&t.push(`Grouped by: \`${e.groupedBy}\``),t.push(""),t.push("| Column | Required | Description |"),t.push("|---|---|---|");for(const r of e.fields){const s=r.allowedValues?`${r.description} (values: ${r.allowedValues.map(o=>o===""?"*(blank)*":`\`${o}\``).join(", ")})`:r.description;t.push(`| \`${r.name}\` | ${r.required?"Yes":"No"} | ${s} |`)}t.push(""),t.push("### Notes");for(const r of e.notes)t.push(`- ${r}`);return t.push(""),t.join(`
`)};return["# Shorts Intel Hub — CSV Upload Spec","","Two CSV formats are supported. The server auto-detects the format from the headers — there is no source flag to set.","","---","",n(_n),"---","",n(gn),"---","","## Tips","","1. Export directly from your pipeline — the parser handles quoted/multi-line fields per RFC 4180.","2. CSV only. JSON is not supported.",'3. After uploading both files, switch to the Marketing Dashboard and click "Run Matching + Ranking" to generate the three-track view.',"4. These templates are kept in sync with the backend parsers. If your export has extra columns the parser ignores them; if it is missing required columns those signals fall back to neutral defaults.",""].join(`
`)}function ml(n,e,t){const r=new Blob([n],{type:t}),s=URL.createObjectURL(r),o=document.createElement("a");o.href=s,o.download=e,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}function gl({title:n,subtitle:e,accept:t,fileRef:r,kind:s}){const o=z.useRef(null),[a,c]=z.useState(!1),[h,f]=z.useState(!1),[m,v]=z.useState(null),b=async N=>{if(v(null),!N){f(!0);try{await J_(s)}catch(V){v(V instanceof Error?V.message:"Failed to clear file")}finally{f(!1)}return}f(!0);try{await X_(s,N)}catch(V){v(V instanceof Error?V.message:"Upload failed")}finally{f(!1)}},S=N=>{var A;N.preventDefault(),N.stopPropagation(),c(!1);const V=(A=N.dataTransfer.files)==null?void 0:A[0];V&&b(V)};return d.jsxs("div",{className:`flex-1 min-w-[280px] rounded-lg border-2 border-dashed p-6 transition-colors ${a?"border-primary bg-primary/5":"border-border bg-card hover:border-primary/50"}`,onDragEnter:N=>{N.preventDefault(),N.stopPropagation(),c(!0)},onDragOver:N=>{N.preventDefault(),N.stopPropagation()},onDragLeave:N=>{N.preventDefault(),N.stopPropagation(),c(!1)},onDrop:S,children:[d.jsxs("div",{className:"mb-3",children:[d.jsx("h4",{className:"text-foreground font-medium mb-1",children:n}),d.jsx("p",{className:"text-muted-foreground text-xs",children:e})]}),d.jsx("input",{ref:o,type:"file",accept:t,className:"hidden",onChange:N=>{var V;return b(((V=N.target.files)==null?void 0:V[0])??null)}}),r?d.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-md bg-muted",children:[d.jsx(si,{className:"size-5 text-primary flex-shrink-0"}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("div",{className:"text-sm text-foreground truncate",children:r.name}),d.jsxs("div",{className:"text-xs text-muted-foreground",children:[(r.size/1024).toFixed(1)," KB · uploaded ",new Date(r.uploadedAt).toLocaleString()]})]}),d.jsx("button",{type:"button",onClick:()=>b(null),disabled:h,className:"flex-shrink-0 p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground disabled:opacity-50","aria-label":"Remove file",children:h?d.jsx(Tr,{className:"size-4 animate-spin"}):d.jsx(vl,{className:"size-4"})})]}):d.jsx("button",{type:"button",onClick:()=>{var N;return(N=o.current)==null?void 0:N.click()},disabled:h,className:"w-full flex flex-col items-center gap-2 py-6 rounded-md border border-dashed border-border hover:border-primary/50 hover:bg-muted transition-colors disabled:opacity-60",children:h?d.jsxs(d.Fragment,{children:[d.jsx(Tr,{className:"size-6 text-muted-foreground animate-spin"}),d.jsx("span",{className:"text-sm text-foreground",children:"Uploading…"})]}):d.jsxs(d.Fragment,{children:[d.jsx(El,{className:"size-6 text-muted-foreground"}),d.jsx("span",{className:"text-sm text-foreground",children:"Drop CSV here or click to browse"})]})}),m&&d.jsx("div",{className:"mt-2 text-xs text-red-500",children:m})]})}function Iy({spec:n}){return d.jsxs("div",{className:"overflow-x-auto",children:[d.jsxs("table",{className:"w-full text-xs text-foreground",children:[d.jsx("thead",{children:d.jsxs("tr",{className:"border-b border-border text-muted-foreground",children:[d.jsx("th",{className:"text-left py-2 pr-3 font-medium",children:"Column"}),d.jsx("th",{className:"text-left py-2 pr-3 font-medium w-[70px]",children:"Required"}),d.jsx("th",{className:"text-left py-2 font-medium",children:"Description"})]})}),d.jsx("tbody",{children:n.fields.map(e=>d.jsxs("tr",{className:"border-b border-border/40 align-top",children:[d.jsx("td",{className:"py-2 pr-3 font-mono text-[11px] whitespace-nowrap",children:e.name}),d.jsx("td",{className:"py-2 pr-3",children:e.required?d.jsx("span",{className:"px-1.5 py-0.5 rounded bg-primary/15 text-primary text-[10px] font-medium",children:"Yes"}):d.jsx("span",{className:"text-muted-foreground text-[10px]",children:"No"})}),d.jsxs("td",{className:"py-2 pr-3 text-muted-foreground",children:[e.description,e.allowedValues&&d.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:e.allowedValues.map(t=>d.jsx("code",{className:"px-1 py-0.5 rounded bg-muted text-foreground text-[10px]",children:t===""?"(blank)":t},t))}),e.example&&!e.allowedValues&&d.jsxs("div",{className:"mt-1 text-[10px] text-muted-foreground/70",children:["e.g. ",d.jsx("code",{className:"text-foreground",children:e.example})]})]})]},e.name))})]}),n.notes.length>0&&d.jsx("div",{className:"mt-4 space-y-1 text-xs text-muted-foreground",children:n.notes.map((e,t)=>d.jsxs("p",{children:["• ",e]},t))})]})}function Ay({state:n,hydrated:e}){const[t,r]=z.useState("nyancat"),[s,o]=z.useState(!1),a=t==="nyancat"?_n:gn,c=by(),h=m=>{ml(xy(m),m.filename,"text/csv")},f=()=>{ml(c,"intel-hub-upload-guide.md","text/markdown")};return d.jsx("div",{className:"px-6 py-6",children:d.jsxs("div",{className:"max-w-5xl mx-auto",children:[d.jsxs("div",{className:"mb-6 p-4 bg-card border border-border rounded-lg",children:[d.jsx("h3",{className:"text-foreground mb-2",children:"Data Upload"}),d.jsx("p",{className:"text-muted-foreground",children:'Drop in the two CSVs that drive the three-track view: Nyan Cat (internal, video-level) and Vayner (external, trend-level). Files upload to shared storage — everyone viewing the Hub sees the same dataset. Switch to the Marketing Dashboard and click "Run Matching + Ranking" to process them.'}),!e&&d.jsx("p",{className:"text-muted-foreground text-xs mt-2",children:"Loading latest shared state…"})]}),d.jsxs("div",{className:"mb-6 flex flex-wrap gap-4",children:[d.jsx(gl,{title:"Nyan Cat CSV (Internal)",subtitle:`Video-level export — ${_n.fields.length} columns, grouped by audio_id.`,accept:".csv,text/csv",fileRef:n.nyanCat,kind:"nyanCat"}),d.jsx(gl,{title:"Vayner CSV (External)",subtitle:`Trend-level export — ${gn.fields.length} columns, one row per trend.`,accept:".csv,text/csv",fileRef:n.vayner,kind:"vayner"})]}),d.jsxs("div",{className:"mb-6 bg-card border border-border rounded-lg p-5",children:[d.jsxs("div",{className:"flex items-start justify-between mb-4 gap-4 flex-wrap",children:[d.jsxs("div",{className:"flex-1 min-w-[240px]",children:[d.jsx("h3",{className:"text-foreground mb-2",children:"Upload Templates & Field Reference"}),d.jsx("p",{className:"text-muted-foreground text-sm",children:"Two separate CSV templates — one per format. Each template includes the exact header row the parser reads plus one example row. Column specs below are generated from the parsers directly, so they stay in sync as the schemas evolve."})]}),d.jsxs("div",{className:"flex flex-col gap-2",children:[d.jsxs("button",{onClick:()=>h(_n),className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm",children:[d.jsx(Ts,{className:"size-4"}),"Nyan Cat template (.csv)"]}),d.jsxs("button",{onClick:()=>h(gn),className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm",children:[d.jsx(Ts,{className:"size-4"}),"Vayner template (.csv)"]}),d.jsxs("button",{onClick:f,className:"flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors text-sm",children:[d.jsx(Ts,{className:"size-4"}),"Full guide (.md)"]})]})]}),d.jsxs("div",{className:"mb-4 flex gap-2 border-b border-border",children:[d.jsxs("button",{onClick:()=>r("nyancat"),className:`px-3 py-2 text-sm font-medium transition-colors relative ${t==="nyancat"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Nyan Cat (",_n.fields.length,")",t==="nyancat"&&d.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]}),d.jsxs("button",{onClick:()=>r("vayner"),className:`px-3 py-2 text-sm font-medium transition-colors relative ${t==="vayner"?"text-primary":"text-muted-foreground hover:text-foreground"}`,children:["Vayner (",gn.fields.length,")",t==="vayner"&&d.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 bg-primary"})]})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("h4",{className:"text-foreground text-sm font-medium mb-1",children:a.title}),d.jsx("p",{className:"text-xs text-muted-foreground",children:a.subtitle})]}),d.jsx(Iy,{spec:a}),d.jsxs("button",{onClick:()=>o(!s),className:"mt-4 text-primary hover:underline text-sm",children:[s?"Hide":"Show"," markdown guide preview"]}),s&&d.jsx("div",{className:"mt-3 p-4 bg-muted rounded-lg overflow-auto max-h-96",children:d.jsx("pre",{className:"text-xs text-foreground whitespace-pre-wrap",children:c})})]}),d.jsxs("div",{className:"p-4 bg-muted rounded-lg",children:[d.jsx("h4",{className:"text-foreground mb-2",children:"Need Help?"}),d.jsxs("p",{className:"text-muted-foreground text-sm",children:["For questions about data format or submission guidelines, contact the APAC Shorts Intel Hub team at"," ",d.jsx("span",{className:"text-primary",children:"shorts-intel@example.com"})]})]})]})})}const Ry={nyanCat:null,vayner:null,matchSummary:null,matchResult:null};function Sy(){const[n,e]=z.useState("dashboard"),[t,r]=z.useState(Ry),[s,o]=z.useState(!1);return z.useEffect(()=>W_(c=>{r(c),o(!0)}),[]),d.jsxs("div",{className:"size-full flex flex-col bg-background",children:[d.jsx("header",{className:"border-b border-border bg-card",children:d.jsx("div",{className:"px-6 py-3",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("div",{className:"flex items-center gap-3",children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Vh,{className:"size-8 text-primary"}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-foreground text-lg",children:"Shorts Intel Hub"}),d.jsx("p",{className:"text-muted-foreground text-xs",children:"APAC Marketing Intelligence Platform"})]})]})}),d.jsxs("nav",{className:"flex gap-2",children:[d.jsxs("button",{onClick:()=>e("dashboard"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${n==="dashboard"?"bg-primary text-primary-foreground":"bg-secondary text-secondary-foreground hover:bg-accent"}`,children:[d.jsx(Dh,{className:"size-4"}),"Marketing Dashboard"]}),d.jsxs("button",{onClick:()=>e("upload"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${n==="upload"?"bg-primary text-primary-foreground":"bg-secondary text-secondary-foreground hover:bg-accent"}`,children:[d.jsx(El,{className:"size-4"}),"Data Upload"]})]})]})})}),d.jsx("main",{className:"flex-1 overflow-auto",children:n==="dashboard"?d.jsx(Ty,{state:t,hydrated:s}):d.jsx(Ay,{state:t,hydrated:s})})]})}Mh.createRoot(document.getElementById("root")).render(d.jsx(Sy,{}));
//# sourceMappingURL=index-BFemmaVW.js.map
