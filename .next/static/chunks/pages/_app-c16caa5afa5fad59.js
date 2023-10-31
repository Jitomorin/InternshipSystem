(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2373)}])},8384:function(e,t,n){"use strict";n.d(t,{Eu:function(){return h},Ho:function(){return u}});var r=n(7568),i=n(655),s=n(5893),a=n(7294),o=n(5935),l=(0,a.createContext)(null),u=function(e){var t=e.children,n=(0,a.useState)(null),u=n[0],h=n[1],c=(0,a.useState)(!0),d=c[0],f=c[1];return(0,a.useEffect)(function(){var e;(e=(0,r.Z)(function(){return(0,i.__generator)(this,function(e){var t;return o.I8.onAuthStateChanged((t=(0,r.Z)(function(e){return(0,i.__generator)(this,function(t){switch(t.label){case 0:return f(!0),console.log("Authetication state s changing..."),[4,o.RZ.collection("users").doc(null==e?void 0:e.uid).get().then(function(e){var t=e.data();console.log("User context: "+t),h(t||void 0),f(!1)})];case 1:return t.sent(),[2]}})}),function(e){return t.apply(this,arguments)})),[2]})}),function(){return e.apply(this,arguments)})()},[]),(0,s.jsx)(l.Provider,{value:{currentUser:u,isUserLoading:d},children:t})};function h(){return(0,a.useContext)(l)}},5935:function(e,t,n){"use strict";n.d(t,{I8:function(){return wr},RZ:function(){return wn}});var r,i,s,a,o,l,u,h,c,d,f,p,m={};n.r(m),n.d(m,{FirebaseError:function(){return F},SDK_VERSION:function(){return eF},_DEFAULT_ENTRY_NAME:function(){return ek},_addComponent:function(){return eN},_addOrOverwriteComponent:function(){return eD},_apps:function(){return eC},_clearComponents:function(){return eL},_components:function(){return eR},_getProvider:function(){return eO},_registerComponent:function(){return ex},_removeServiceInstance:function(){return eP},deleteApp:function(){return ej},getApp:function(){return eB},getApps:function(){return eq},initializeApp:function(){return eV},onLog:function(){return ez},registerVersion:function(){return eG},setLogLevel:function(){return eK}});var g=n(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let y=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):(64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},v=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let a=e[n++],o=e[n++],l=e[n++],u=((7&i)<<18|(63&a)<<12|(63&o)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{let h=e[n++],c=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&h)<<6|63&c)}}return t.join("")},w={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=s>>2,c=(3&s)<<4|o>>4,d=(15&o)<<2|u>>6,f=63&u;l||(f=64,a||(d=64)),r.push(n[h],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(y(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):v(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let s=n[e.charAt(i++)],a=i<e.length,o=a?n[e.charAt(i)]:0;++i;let l=i<e.length,u=l?n[e.charAt(i)]:64;++i;let h=i<e.length,c=h?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==u||null==c)throw Error();let d=s<<2|o>>4;if(r.push(d),64!==u){let f=o<<4&240|u>>2;if(r.push(f),64!==c){let p=u<<6&192|c;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},_=function(e){let t=y(e);return w.encodeByteArray(t,!0)},I=function(e){return _(e).replace(/\./g,"")},b=function(e){try{return w.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function T(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let n in t)t.hasOwnProperty(n)&&E(n)&&(e[n]=T(e[n],t[n]));return e}function E(e){return"__proto__"!==e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function S(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function k(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function A(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function C(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function R(){let e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N(){return"object"==typeof indexedDB}/**
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
 */ let D=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,x=()=>{if(void 0===g||void 0===g.env)return;let e=g.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},O=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let n=e&&b(e[1]);return n&&JSON.parse(n)},P=()=>{try{return D()||x()||O()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},L=()=>{var e;return null===(e=P())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
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
 */ function U(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[I(JSON.stringify({alg:"none",type:"JWT"})),I(JSON.stringify(s)),""].join(".")}class F extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var n,r;let i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],o=a?(n=a,r=i,n.replace(B,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`})):"Error",l=`${this.serviceName}: ${o} (${s}).`,u=new F(s,l,i);return u}}let B=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function j(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let s=e[i],a=t[i];if(G(s)&&G(a)){if(!j(s,a))return!1}else if(s!==a)return!1}for(let o of r)if(!n.includes(o))return!1;return!0}function G(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function z(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function K(e){let t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function $(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function H(e,t){let n=new W(e,t);return n.subscribe.bind(n)}class W{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:n}:e).next&&(r.next=Q),void 0===r.error&&(r.error=Q),void 0===r.complete&&(r.complete=Q);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}})}close(e){!this.finalized&&(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q(){}/**
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
 */ function Y(e){return e&&e._delegate?e._delegate:e}class X{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let J="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Z{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new M;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){var t;if(t=e,"EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:J})}catch(n){}for(let[r,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(r);try{let a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch(o){}}}}clearInstance(e=J){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=J){return this.instances.has(e)}getOptions(e=J){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[i,s]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(i);n===a&&s.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var n;let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===J?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=J){return this.component?this.component.multipleInstances?e:J:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ee{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Z(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let et=[];(sh=sg||(sg={}))[sh.DEBUG=0]="DEBUG",sh[sh.VERBOSE=1]="VERBOSE",sh[sh.INFO=2]="INFO",sh[sh.WARN=3]="WARN",sh[sh.ERROR=4]="ERROR",sh[sh.SILENT=5]="SILENT";let en={debug:sg.DEBUG,verbose:sg.VERBOSE,info:sg.INFO,warn:sg.WARN,error:sg.ERROR,silent:sg.SILENT},er=sg.INFO,ei={[sg.DEBUG]:"log",[sg.VERBOSE]:"log",[sg.INFO]:"info",[sg.WARN]:"warn",[sg.ERROR]:"error"},es=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=ei[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ea{constructor(e){this.name=e,this._logLevel=er,this._logHandler=es,this._userLogHandler=null,et.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in sg))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?en[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,sg.DEBUG,...e),this._logHandler(this,sg.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,sg.VERBOSE,...e),this._logHandler(this,sg.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,sg.INFO,...e),this._logHandler(this,sg.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,sg.WARN,...e),this._logHandler(this,sg.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,sg.ERROR,...e),this._logHandler(this,sg.ERROR,...e)}}let eo=(e,t)=>t.some(t=>e instanceof t),el,eu,eh=new WeakMap,ec=new WeakMap,ed=new WeakMap,ef=new WeakMap,ep=new WeakMap,em={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ec.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ed.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eg(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eg(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eg(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eh.set(t,e)}).catch(()=>{}),ep.set(t,e),t}(e);if(ef.has(e))return ef.get(e);let t=function(e){if("function"==typeof e){var t;return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(eu||(eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(e)?function(...t){return e.apply(ey(this),t),eg(eh.get(this))}:function(...t){return eg(e.apply(ey(this),t))}:function(t,...n){let r=e.call(ey(this),t,...n);return ed.set(r,t.sort?t.sort():[t]),eg(r)}}return(e instanceof IDBTransaction&&function(e){if(ec.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});ec.set(e,t)}(e),eo(e,el||(el=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(e,em):e}(e);return t!==e&&(ef.set(e,t),ep.set(t,e)),t}let ey=e=>ep.get(e),ev=["get","getKey","getAll","getAllKeys","count"],ew=["put","add","delete","clear"],e_=new Map;function eI(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(e_.get(t))return e_.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=ew.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ev.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done,]))[0]};return e_.set(t,s),s}em=(sc=e=>({...e,get:(t,n,r)=>eI(t,n)||e.get(t,n,r),has:(t,n)=>!!eI(t,n)||e.has(t,n)}))(em);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eb{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let eT="@firebase/app",eE="0.8.2",eS=new ea("@firebase/app"),ek="[DEFAULT]",eA={[eT]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eC=new Map,eR=new Map;function eN(e,t){try{e.container.addComponent(t)}catch(n){eS.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function eD(e,t){e.container.addOrOverwriteComponent(t)}function ex(e){let t=e.name;if(eR.has(t))return eS.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eR.set(t,e),eC.values()))eN(n,e);return!0}function eO(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function eP(e,t,n=ek){eO(e,t).clearInstance(n)}function eL(){eR.clear()}let eM=new V("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eU{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new X("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eM.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eF="9.12.1";function eV(e,t={}){let n=e;if("object"!=typeof t){let r=t;t={name:r}}let i=Object.assign({name:ek,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw eM.create("bad-app-name",{appName:String(s)});if(n||(n=L()),!n)throw eM.create("no-options");let a=eC.get(s);if(a){if(j(n,a.options)&&j(i,a.config))return a;throw eM.create("duplicate-app",{appName:s})}let o=new ee(s);for(let l of eR.values())o.addComponent(l);let u=new eU(n,i,o);return eC.set(s,u),u}function eB(e=ek){let t=eC.get(e);if(!t&&e===ek)return eV();if(!t)throw eM.create("no-app",{appName:e});return t}function eq(){return Array.from(eC.values())}async function ej(e){let t=e.name;eC.has(t)&&(eC.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function eG(e,t,n){var r;let i=null!==(r=eA[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eS.warn(o.join(" "));return}ex(new X(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function ez(e,t){if(null!==e&&"function"!=typeof e)throw eM.create("invalid-log-argument");!function(e,t){for(let n of et){let r=null;t&&t.level&&(r=en[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=(t,n,...i)=>{let s=i.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:sg[n].toLowerCase(),message:s,args:i,type:t.name})}}}(e,t)}function eK(e){var t;et.forEach(t=>{t.setLogLevel(e)})}let e$="firebase-heartbeat-store",eH=null;function eW(){return eH||(eH=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=eg(a);return r&&a.addEventListener("upgradeneeded",e=>{r(eg(a.result),e.oldVersion,e.newVersion,eg(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),o})("firebase-heartbeat-database",1,{upgrade(e,t){0===t&&e.createObjectStore(e$)}}).catch(e=>{throw eM.create("idb-open",{originalErrorMessage:e.message})})),eH}async function eQ(e){var t;try{let n=await eW();return n.transaction(e$).objectStore(e$).get(eX(e))}catch(i){if(i instanceof F)eS.warn(i.message);else{let r=eM.create("idb-get",{originalErrorMessage:null===(t=i)||void 0===t?void 0:t.message});eS.warn(r.message)}}}async function eY(e,t){var n;try{let r=await eW(),i=r.transaction(e$,"readwrite"),s=i.objectStore(e$);return await s.put(t,eX(e)),i.done}catch(o){if(o instanceof F)eS.warn(o.message);else{let a=eM.create("idb-set",{originalErrorMessage:null===(n=o)||void 0===n?void 0:n.message});eS.warn(a.message)}}}function eX(e){return`${e.name}!${e.options.appId}`}class eJ{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new e0(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=eZ();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eZ(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let s=n.find(e=>e.agent===i.agent);if(s){if(s.dates.push(i.date),e1(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),e1(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=I(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function eZ(){let e=new Date;return e.toISOString().substring(0,10)}class e0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!N()&&new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(s){t(s)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await eQ(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return eY(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let r=await this.read();return eY(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function e1(e){return I(JSON.stringify({version:2,heartbeats:e})).length}ex(new X("platform-logger",e=>new eb(e),"PRIVATE")),ex(new X("heartbeat",e=>new eJ(e),"PRIVATE")),eG(eT,eE,""),eG(eT,eE,"esm2017"),eG("fire-js","");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e2{constructor(e,t){this._delegate=e,this.firebase=t,eN(e,new X("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ej(this._delegate)))}_getService(e,t=ek){var n;this._delegate.checkDestroyed();let r=this._delegate.container.getProvider(e);return r.isInitialized()||(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)!=="EXPLICIT"||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=ek){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){eN(this._delegate,e)}_addOrOverwriteComponent(e){eD(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let e4=new V("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),e3=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e(){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){let t={},n={__esModule:!0,initializeApp:function(r,i={}){let s=eV(r,i);if(q(t,s.name))return t[s.name];let a=new e(s,n);return t[s.name]=a,a},app:r,registerVersion:eG,setLogLevel:eK,onLog:ez,apps:null,SDK_VERSION:eF,INTERNAL:{registerComponent:function(t){let i=t.name,s=i.replace("-compat","");if(ex(t)&&"PUBLIC"===t.type){let a=(e=r())=>{if("function"!=typeof e[s])throw e4.create("invalid-app-argument",{appName:i});return e[s]()};void 0!==t.serviceProps&&T(a,t.serviceProps),n[s]=a,e.prototype[s]=function(...e){let n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:m}};function r(e){if(!q(t,e=e||ek))throw e4.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),r.App=e,n}(e2);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){T(t,e)},createSubscribe:H,ErrorFactory:V,deepExtend:T}),t}(),e6=new ea("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ if("object"==typeof self&&self.self===self&&void 0!==self.firebase){e6.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let e5=self.firebase.SDK_VERSION;e5&&e5.indexOf("LITE")>=0&&e6.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}eG("@firebase/app-compat","0.1.37",void 0),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ e3.registerVersion("firebase","9.12.1","app-compat");var e8=n(655);let e9={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},e7={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function te(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let tt=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},tn=new V("auth","Firebase",te()),tr=new ea("@firebase/auth");function ti(e,...t){tr.logLevel<=sg.ERROR&&tr.error(`Auth (${eF}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ts(e,...t){throw tu(e,...t)}function ta(e,...t){return tu(e,...t)}function to(e,t,n){let r=Object.assign(Object.assign({},te()),{[t]:n}),i=new V("auth","Firebase",r);return i.create(t,{appName:e.name})}function tl(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ts(e,"argument-error"),to(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tu(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return tn.create(e,...t)}function th(e,t,...n){if(!e)throw tu(t,...n)}function tc(e){let t="INTERNAL ASSERTION FAILED: "+e;throw ti(t),Error(t)}function td(e,t){e||tc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tf=new Map;function tp(e){td(e instanceof Function,"Expected a class definition");let t=tf.get(e);return t?(td(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,tf.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tg(){return"http:"===ty()||"https:"===ty()}function ty(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tv{constructor(e,t){this.shortDelay=e,this.longDelay=t,td(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())||C()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(tg()||A()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tw(e,t){td(e.emulator,"Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void tc("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void tc("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void tc("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},tb=new tv(3e4,6e4);function tT(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tE(e,t,n,r,i={}){return tS(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});let a=z(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),t_.fetch()(tA(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))})}async function tS(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},tI),t);try{let i=new tC(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw tR(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===l)throw tR(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===l)throw tR(e,"email-already-in-use",a);if("USER_DISABLED"===l)throw tR(e,"user-disabled",a);let h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw to(e,h,u);ts(e,h)}}catch(c){if(c instanceof F)throw c;ts(e,"network-request-failed")}}async function tk(e,t,n,r,i={}){let s=await tE(e,t,n,r,i);return"mfaPendingCredential"in s&&ts(e,"multi-factor-auth-required",{_serverResponse:s}),s}function tA(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?tw(e.config,i):`${e.config.apiScheme}://${i}`}class tC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ta(this.auth,"network-request-failed")),tb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tR(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=ta(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tN(e,t){return tE(e,"POST","/v1/accounts:delete",t)}async function tD(e,t){return tE(e,"POST","/v1/accounts:update",t)}async function tx(e,t){return tE(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tO(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(n){}}async function tP(e,t=!1){let n=Y(e),r=await n.getIdToken(t),i=tM(r);th(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tO(tL(i.auth_time)),issuedAtTime:tO(tL(i.iat)),expirationTime:tO(tL(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function tL(e){return 1e3*Number(e)}function tM(e){var t;let[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return ti("JWT malformed, contained fewer than 3 sections"),null;try{let s=b(r);if(!s)return ti("Failed to decode base64 JWT payload"),null;return JSON.parse(s)}catch(a){return ti("Caught error parsing JWT payload as JSON",null===(t=a)||void 0===t?void 0:t.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tU(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof F&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tF{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}{this.errorBackoff=3e4;let r=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=r-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){(null===(e=t)||void 0===e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tV{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tO(this.lastLoginAt),this.creationTime=tO(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tB(e){var t,n;let r=e.auth,i=await e.getIdToken(),s=await tU(e,tx(r,{idToken:i}));th(null==s?void 0:s.users.length,r,"internal-error");let a=s.users[0];e._notifyReloadListener(a);let o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?(n=a.providerUserInfo,n.map(e=>{var{providerId:t}=e,n=(0,e8.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[],l=function(e,t){let n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}(e.providerData,o),u=e.isAnonymous,h=!(e.email&&a.passwordHash)&&!(null==l?void 0:l.length),c={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new tV(a.createdAt,a.lastLoginAt),isAnonymous:!!u&&h};Object.assign(e,c)}async function tq(e){let t=Y(e);await tB(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tj(e,t){let n=await tS(e,{},async()=>{let n=z({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=tA(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",t_.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tG{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){th(e.idToken,"internal-error"),th(void 0!==e.idToken,"internal-error"),th(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=tM(e);return th(t,"internal-error"),th(void 0!==t.exp,"internal-error"),th(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(th(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await tj(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new tG;return n&&(th("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(th("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(th("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tG,this.toJSON())}_performRefresh(){return tc("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tz(e,t){th("string"==typeof e||void 0===e,"internal-error",{appName:t})}class tK{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,e8.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tV(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await tU(this,this.stsTokenManager.getToken(this.auth,e));return th(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tP(this,e)}reload(){return tq(this)}_assign(e){this!==e&&(th(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new tK(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){th(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tB(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await tU(this,tN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;let h=null!==(n=t.displayName)&&void 0!==n?n:void 0,c=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:I,stsTokenManager:b}=t;th(v&&b,e,"internal-error");let T=tG.fromJSON(this.name,b);th("string"==typeof v,e,"internal-error"),tz(h,e.name),tz(c,e.name),th("boolean"==typeof w,e,"internal-error"),th("boolean"==typeof _,e,"internal-error"),tz(d,e.name),tz(f,e.name),tz(p,e.name),tz(m,e.name),tz(g,e.name),tz(y,e.name);let E=new tK({uid:v,auth:e,email:c,emailVerified:w,displayName:h,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(E.providerData=I.map(e=>Object.assign({},e))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){let r=new tG;r.updateFromServerResponse(t);let i=new tK({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await tB(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t${constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tH(e,t,n){return`firebase:${e}:${t}:${n}`}t$.type="NONE";class tW{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=tH(this.userKey,r.apiKey,i),this.fullPersistenceKey=tH("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?tK._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new tW(tp(t$),e,n);let r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=r[0]||tp(t$),s=tH(n,e.config.apiKey,e.name),a=null;for(let o of t)try{let l=await o._get(s);if(l){let u=tK._fromJSON(e,l);o!==i&&(a=u),i=o;break}}catch(h){}let c=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&c.length&&(i=c[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(t){}}))),new tW(i,e,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tQ(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tZ(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(tY(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(t1(t))return"Blackberry";if(t2(t))return"Webos";if(tX(t))return"Safari";if((t.includes("chrome/")||tJ(t))&&!t.includes("edge/"))return"Chrome";if(t0(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==n?void 0:n.length)===2)return n[1]}return"Other"}function tY(e=S()){return/firefox\//i.test(e)}function tX(e=S()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tJ(e=S()){return/crios\//i.test(e)}function tZ(e=S()){return/iemobile/i.test(e)}function t0(e=S()){return/android/i.test(e)}function t1(e=S()){return/blackberry/i.test(e)}function t2(e=S()){return/webos/i.test(e)}function t4(e=S()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function t3(e=S()){return t4(e)||t0(e)||t2(e)||t1(e)||/windows phone/i.test(e)||tZ(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function t6(e,t=[]){let n;switch(e){case"Browser":n=tQ(S());break;case"Worker":n=`${tQ(S())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${eF}/${r}`}/**
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
 */ class t5{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise((n,r)=>{try{let i=e(t);n(i)}catch(s){r(s)}});n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(a){for(let i of(n.reverse(),n))try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=a)||void 0===t?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t8{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t9(this),this.idTokenSubscription=new t9(this),this.beforeStateQueue=new t5(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tp(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await tW.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===a)&&(null==o?void 0:o.user)&&(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(th(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await tB(e)}catch(n){if((null===(t=n)||void 0===t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?Y(e):null;return t&&th(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&th(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tp(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new V("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&tp(e)||this._popupRedirectResolver;th(t,this,"argument-error"),this.redirectPersistenceManager=await tW.create(this,[tp(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return(th(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return th(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!(!e||this.frameworks.includes(e))&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t6(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}class t9{constructor(e){this.auth=e,this.observer=null,this.addObserver=H(e=>this.observer=e)}get next(){return th(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function t7(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ne(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tc("not implemented")}_getIdTokenResponse(e){return tc("not implemented")}_linkToIdToken(e,t){return tc("not implemented")}_getReauthenticationResolver(e){return tc("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nn(e,t){return tE(e,"POST","/v1/accounts:resetPassword",tT(e,t))}async function nr(e,t){return tE(e,"POST","/v1/accounts:update",t)}async function ni(e,t){return tE(e,"POST","/v1/accounts:update",tT(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ns(e,t){return tk(e,"POST","/v1/accounts:signInWithPassword",tT(e,t))}async function na(e,t){return tE(e,"POST","/v1/accounts:sendOobCode",tT(e,t))}async function no(e,t){return na(e,t)}async function nl(e,t){return na(e,t)}async function nu(e,t){return na(e,t)}async function nh(e,t){return na(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nc(e,t){return tk(e,"POST","/v1/accounts:signInWithEmailLink",tT(e,t))}async function nd(e,t){return tk(e,"POST","/v1/accounts:signInWithEmailLink",tT(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nf extends nt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new nf(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nf(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ns(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nc(e,{email:this._email,oobCode:this._password});default:ts(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nd(e,{idToken:t,email:this._email,oobCode:this._password});default:ts(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function np(e,t){return tk(e,"POST","/v1/accounts:signInWithIdp",tT(e,t))}class nm extends nt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new nm(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ts("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,e8.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new nm(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return np(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,np(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,np(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=z(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ng(e,t){return tE(e,"POST","/v1/accounts:sendVerificationCode",tT(e,t))}async function ny(e,t){return tk(e,"POST","/v1/accounts:signInWithPhoneNumber",tT(e,t))}async function nv(e,t){let n=await tk(e,"POST","/v1/accounts:signInWithPhoneNumber",tT(e,t));if(n.temporaryProof)throw tR(e,"account-exists-with-different-credential",n);return n}let nw={USER_NOT_FOUND:"user-not-found"};async function n_(e,t){let n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return tk(e,"POST","/v1/accounts:signInWithPhoneNumber",tT(e,n),nw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nI extends nt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new nI({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new nI({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ny(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nv(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return n_(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new nI({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class nb{constructor(e){var t,n,r,i,s,a;let o=K($(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(n=o.oobCode)&&void 0!==n?n:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);th(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=K($(e)).link,n=t?K($(t)).deep_link_id:null,r=K($(e)).deep_link_id,i=r?K($(r)).link:null;return i||r||n||t||e}(e);try{return new nb(t)}catch(n){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nT{constructor(){this.providerId=nT.PROVIDER_ID}static credential(e,t){return nf._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=nb.parseLink(t);return th(n,"argument-error"),nf._fromEmailAndCode(e,n.code,n.tenantId)}}nT.PROVIDER_ID="password",nT.EMAIL_PASSWORD_SIGN_IN_METHOD="password",nT.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nS extends nE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class nk extends nS{static credentialFromJSON(e){let t="string"==typeof e?JSON.parse(e):e;return th("providerId"in t&&"signInMethod"in t,"argument-error"),nm._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return th(e.idToken||e.accessToken,"argument-error"),nm._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return nk.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return nk.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:a}=e;if(!n&&!r&&!t&&!i||!a)return null;try{return new nk(a)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(o){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nA extends nS{constructor(){super("facebook.com")}static credential(e){return nm._fromParams({providerId:nA.PROVIDER_ID,signInMethod:nA.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nA.credentialFromTaggedObject(e)}static credentialFromError(e){return nA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nA.credential(e.oauthAccessToken)}catch(t){return null}}}nA.FACEBOOK_SIGN_IN_METHOD="facebook.com",nA.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nC extends nS{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nm._fromParams({providerId:nC.PROVIDER_ID,signInMethod:nC.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nC.credentialFromTaggedObject(e)}static credentialFromError(e){return nC.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return nC.credential(t,n)}catch(r){return null}}}nC.GOOGLE_SIGN_IN_METHOD="google.com",nC.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nR extends nS{constructor(){super("github.com")}static credential(e){return nm._fromParams({providerId:nR.PROVIDER_ID,signInMethod:nR.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nR.credentialFromTaggedObject(e)}static credentialFromError(e){return nR.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nR.credential(e.oauthAccessToken)}catch(t){return null}}}nR.GITHUB_SIGN_IN_METHOD="github.com",nR.PROVIDER_ID="github.com";class nN extends nt{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){let t=this.buildRequest();return np(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,np(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,np(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new nN(n,i):null}static _create(e,t){return new nN(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class nD extends nE{constructor(e){th(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return nD.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return nD.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){let t=nN.fromJSON(e);return th(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return nN._create(n,t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nx extends nS{constructor(){super("twitter.com")}static credential(e,t){return nm._fromParams({providerId:nx.PROVIDER_ID,signInMethod:nx.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nx.credentialFromTaggedObject(e)}static credentialFromError(e){return nx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return nx.credential(t,n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nO(e,t){return tk(e,"POST","/v1/accounts:signUp",tT(e,t))}nx.TWITTER_SIGN_IN_METHOD="twitter.com",nx.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nP{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await tK._fromIdTokenResponse(e,n,r),s=nL(n),a=new nP({user:i,providerId:s,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=nL(n);return new nP({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function nL(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nM(e){var t,n;let r=Y(e);if(await r._initializationPromise,null===(t=r.currentUser)||void 0===t?void 0:t.isAnonymous)return new nP({user:r.currentUser,providerId:null,operationType:"signIn"});let i=await nO(r,{returnSecureToken:!0}),s=await nP._fromIdTokenResponse(r,"signIn",i,!0);return await r._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nU extends F{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nU.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nU(e,t,n,r)}}function nF(e,t,n,r){let i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw nU._fromErrorAndOperation(e,n,t,r);throw n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nV(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nB(e,t){let n=Y(e);await nj(!0,n,t);let{providerUserInfo:r}=await tD(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=nV(r||[]);return n.providerData=n.providerData.filter(e=>i.has(e.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function nq(e,t,n=!1){let r=await tU(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nP._forOperation(e,"link",r)}async function nj(e,t,n){await tB(t);let r=nV(t.providerData);th(r.has(n)===e,t.auth,!1===e?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nG(e,t,n=!1){var r;let{auth:i}=e,s="reauthenticate";try{let a=await tU(e,nF(i,s,t,e),n);th(a.idToken,i,"internal-error");let o=tM(a.idToken);th(o,i,"internal-error");let{sub:l}=o;return th(e.uid===l,i,"user-mismatch"),nP._forOperation(e,s,a)}catch(u){throw(null===(r=u)||void 0===r?void 0:r.code)==="auth/user-not-found"&&ts(i,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nz(e,t,n=!1){let r="signIn",i=await nF(e,r,t),s=await nP._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function nK(e,t){var n;return nz(Y(e),t)}async function n$(e,t){let n=Y(e);return await nj(!1,n,t.providerId),nq(n,t)}async function nH(e,t){return nG(Y(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nW(e,t){return tk(e,"POST","/v1/accounts:signInWithCustomToken",tT(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nQ(e,t){var n;let r=Y(e),i=await nW(r,{token:t,returnSecureToken:!0}),s=await nP._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nY{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nX._fromServerResponse(e,t):ts(e,"internal-error")}}class nX extends nY{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nX(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nJ(e,t,n){var r;th((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),th(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(th(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(th(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function nZ(e,t,n){let r=Y(e),i={requestType:"PASSWORD_RESET",email:t};n&&nJ(r,i,n),await nl(r,i)}async function n0(e,t,n){await nn(Y(e),{oobCode:t,newPassword:n})}async function n1(e,t){await ni(Y(e),{oobCode:t})}async function n2(e,t){let n=Y(e),r=await nn(n,{oobCode:t}),i=r.requestType;switch(th(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":th(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":th(r.mfaInfo,n,"internal-error");default:th(r.email,n,"internal-error")}let s=null;if(r.mfaInfo){var a;s=nY._fromServerResponse(Y(n),r.mfaInfo)}return{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function n4(e,t){let{data:n}=await n2(Y(e),t);return n.email}async function n3(e,t,n){var r;let i=Y(e),s=await nO(i,{returnSecureToken:!0,email:t,password:n}),a=await nP._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function n6(e,t,n){let r=Y(e),i={requestType:"EMAIL_SIGNIN",email:t};th(n.handleCodeInApp,r,"argument-error"),n&&nJ(r,i,n),await nu(r,i)}async function n5(e,t,n){let r=Y(e),i=nT.credentialWithLink(t,n||tm());return th(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),nK(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function n8(e,t){return tE(e,"POST","/v1/accounts:createAuthUri",tT(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function n9(e,t){let n=tg()?tm():"http://localhost",{signinMethods:r}=await n8(Y(e),{identifier:t,continueUri:n});return r||[]}async function n7(e,t){let n=Y(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&nJ(n.auth,i,t);let{email:s}=await no(n.auth,i);s!==e.email&&await e.reload()}async function re(e,t,n){let r=Y(e),i=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};n&&nJ(r.auth,s,n);let{email:a}=await nh(r.auth,s);a!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rt(e,t){return tE(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;let r=Y(e),i=await r.getIdToken(),s=await tU(r,rt(r.auth,{idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0}));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;let a=r.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}async function rr(e,t,n){let{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);let a=await tU(e,nr(r,s));await e._updateTokensIfNecessary(a,!0)}class ri{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class rs extends ri{constructor(e,t,n,r){super(e,t,n),this.username=r}}class ra extends ri{constructor(e,t){super(e,"facebook.com",t)}}class ro extends rs{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class rl extends ri{constructor(e,t){super(e,"google.com",t)}}class ru extends rs{constructor(e,t,n){super(e,"twitter.com",t,n)}}class rh{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new rh("enroll",e,t)}static _fromMfaPendingCredential(e){return new rh("signin",e)}toJSON(){let e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return rh._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return rh._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rc{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){var n;let r=Y(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(e=>nY._fromServerResponse(r,e));th(i.mfaPendingCredential,r,"internal-error");let a=rh._fromMfaPendingCredential(i.mfaPendingCredential);return new rc(a,s,async e=>{let n=await e._process(r,a);delete i.mfaInfo,delete i.mfaPendingCredential;let s=Object.assign(Object.assign({},i),{idToken:n.idToken,refreshToken:n.refreshToken});switch(t.operationType){case"signIn":let o=await nP._fromIdTokenResponse(r,t.operationType,s);return await r._updateCurrentUser(o.user),o;case"reauthenticate":return th(t.user,r,"internal-error"),nP._forOperation(t.user,t.operationType,s);default:ts(r,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}class rd{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>nY._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new rd(e)}async getSession(){return rh._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){let n=await this.getSession(),r=await tU(this.user,e._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var t,n,r;let i="string"==typeof e?e:e.uid,s=await this.user.getIdToken(),a=await tU(this.user,tE(n=this.user.auth,"POST","/v2/accounts/mfaEnrollment:withdraw",tT(n,{idToken:s,mfaEnrollmentId:i})));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==i),await this.user._updateTokensIfNecessary(a);try{await this.user.reload()}catch(o){if((null===(t=o)||void 0===t?void 0:t.code)!=="auth/user-token-expired")throw o}}}let rf=new WeakMap,rp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(rp,"1"),this.storage.removeItem(rp),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class rg extends rm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=S();return tX(e)||t4(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=t3(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});return}let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let i=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);R()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rg.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ry extends rm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ry.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rv{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let n=new rv(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){var t;let{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});let a=Array.from(s).map(async t=>t(e.origin,i)),o=await Promise.all(a.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(n){return{fulfilled:!1,reason:n}}}));e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rw(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}rv.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw Error("connection_unavailable");let i,s;return new Promise((a,o)=>{let l=rw("",20);r.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(e.data.response);break;default:clearTimeout(u),clearTimeout(i),o(Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rI(){return window}/**
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
 */ function rb(){return void 0!==rI().WorkerGlobalScope&&"function"==typeof rI().importScripts}async function rT(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rE="firebaseLocalStorageDb",rS="firebaseLocalStorage",rk="fbase_key";class rA{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rC(e,t){return e.transaction([rS],t?"readwrite":"readonly").objectStore(rS)}function rR(){let e=indexedDB.open(rE,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(rS,{keyPath:rk})}catch(r){n(r)}}),e.addEventListener("success",async()=>{let n=e.result;n.objectStoreNames.contains(rS)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(rE);return new rA(e).toPromise()}(),t(await rR()))})})}async function rN(e,t,n){let r=rC(e,!0).put({[rk]:t,value:n});return new rA(r).toPromise()}async function rD(e,t){let n=rC(e,!1).get(t),r=await new rA(n).toPromise();return void 0===r?null:r.value}function rx(e,t){let n=rC(e,!0).delete(t);return new rA(n).toPromise()}class rO{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rR()),this.db}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(r){if(t++>3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rv._getInstance(rb()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new r_(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rR();return await rN(e,rp,"1"),await rx(e,rp),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rN(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>rD(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rx(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=rC(e,!1).getAll();return new rA(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rP(e){return(await tE(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}function rL(e){return new Promise((t,n)=>{var r,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=ta("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)})}function rM(e){return`__${e}${Math.floor(1e6*Math.random())}`}rO.type="LOCAL";class rU{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let n=this.counter;return this._widgets.set(n,new rF(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;let n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class rF{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let r="string"==typeof e?document.getElementById(e):e;th(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<50;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}(50);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rV=rM("rcb"),rB=new tv(3e4,6e4);class rq{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=rI().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){var n;return(th((n=t,n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)),e,"argument-error"),this.shouldResolveImmediately(t))?Promise.resolve(rI().grecaptcha):new Promise((n,r)=>{let i=rI().setTimeout(()=>{r(ta(e,"network-request-failed"))},rB.get());rI()[rV]=()=>{rI().clearTimeout(i),delete rI()[rV];let s=rI().grecaptcha;if(!s){r(ta(e,"internal-error"));return}let a=s.render;s.render=(e,t)=>{let n=a(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};let s=`https://www.google.com/recaptcha/api.js??${z({onload:rV,render:"explicit",hl:t})}`;rL(s).catch(()=>{clearTimeout(i),r(ta(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=rI().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class rj{async load(e){return new rU(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rG="recaptcha",rz={theme:"light",type:"image"};class rK{constructor(e,t=Object.assign({},rz),n){var r;this.parameters=t,this.type=rG,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Y(n),this.isInvisible="invisible"===this.parameters.size,th("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let i="string"==typeof e?document.getElementById(e):e;th(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new rj:new rq,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{let r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){th(!this.parameters.sitekey,this.auth,"argument-error"),th(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),th("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let n=rI()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){th(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;th(tg()&&!rb(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await rP(this.auth);th(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return th(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r${constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=nI._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function rH(e,t,n){var r;let i=Y(e),s=await rY(i,t,Y(n));return new r$(s,e=>nK(i,e))}async function rW(e,t,n){let r=Y(e);await nj(!1,r,"phone");let i=await rY(r.auth,t,Y(n));return new r$(i,e=>n$(r,e))}async function rQ(e,t,n){let r=Y(e),i=await rY(r.auth,t,Y(n));return new r$(i,e=>nH(r,e))}async function rY(e,t,n){var r,i,s,a,o;let l=await n.verify();try{th("string"==typeof l,e,"argument-error"),th(n.type===rG,e,"argument-error");let u;if(u="string"==typeof t?{phoneNumber:t}:t,"session"in u){let h=u.session;if("phoneNumber"in u){th("enroll"===h.type,e,"internal-error");let c=await (i=e,s={idToken:h.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:l}},tE(i,"POST","/v2/accounts/mfaEnrollment:start",tT(i,s)));return c.phoneSessionInfo.sessionInfo}{th("signin"===h.type,e,"internal-error");let d=(null===(r=u.multiFactorHint)||void 0===r?void 0:r.uid)||u.multiFactorUid;th(d,e,"missing-multi-factor-info");let f=await (a=e,o={mfaPendingCredential:h.credential,mfaEnrollmentId:d,phoneSignInInfo:{recaptchaToken:l}},tE(a,"POST","/v2/accounts/mfaSignIn:start",tT(a,o)));return f.phoneResponseInfo.sessionInfo}}{let{sessionInfo:p}=await ng(e,{phoneNumber:u.phoneNumber,recaptchaToken:l});return p}}finally{n._reset()}}async function rX(e,t){await nq(Y(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rJ{constructor(e){var t;this.providerId=rJ.PROVIDER_ID,this.auth=Y(e)}verifyPhoneNumber(e,t){return rY(this.auth,e,Y(t))}static credential(e,t){return nI._fromVerification(e,t)}static credentialFromResult(e){return rJ.credentialFromTaggedObject(e)}static credentialFromError(e){return rJ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?nI._fromTokenResponse(t,n):null}}/**
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
 */ function rZ(e,t){return t?tp(t):(th(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}rJ.PROVIDER_ID="phone",rJ.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r0 extends nt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return np(e,this._buildIdpRequest())}_linkToIdToken(e,t){return np(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return np(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function r1(e){return nz(e.auth,new r0(e),e.bypassAuthState)}function r2(e){let{auth:t,user:n}=e;return th(n,t,"internal-error"),nG(n,new r0(e),e.bypassAuthState)}async function r4(e){let{auth:t,user:n}=e;return th(n,t,"internal-error"),nq(n,new r0(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r3{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r1;case"linkViaPopup":case"linkViaRedirect":return r4;case"reauthViaPopup":case"reauthViaRedirect":return r2;default:ts(this.auth,"internal-error")}}resolve(e){td(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){td(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let r6=new tv(2e3,1e4);async function r5(e,t,n){var r;let i=Y(e);tl(e,t,nE);let s=rZ(i,n),a=new r7(i,"signInViaPopup",t,s);return a.executeNotNull()}async function r8(e,t,n){let r=Y(e);tl(r.auth,t,nE);let i=rZ(r.auth,n),s=new r7(r.auth,"reauthViaPopup",t,i,r);return s.executeNotNull()}async function r9(e,t,n){let r=Y(e);tl(r.auth,t,nE);let i=rZ(r.auth,n),s=new r7(r.auth,"linkViaPopup",t,i,r);return s.executeNotNull()}class r7 extends r3{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,r7.currentPopupAction&&r7.currentPopupAction.cancel(),r7.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return th(e,this.auth,"internal-error"),e}async onExecution(){td(1===this.filter.length,"Popup operations only handle one event");let e=rw();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ta(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ta(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r7.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ta(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,r6.get())};e()}}r7.currentPopupAction=null;let ie=new Map;class it extends r3{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ie.get(this.auth._key());if(!e){try{let t=await ir(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}ie.set(this.auth._key(),e)}return this.bypassAuthState||ie.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ir(e,t){let n=io(t),r=ia(e);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}async function ii(e,t){return ia(e)._set(io(t),"true")}function is(e,t){ie.set(e._key(),t)}function ia(e){return tp(e._redirectPersistence)}function io(e){return tH("pendingRedirect",e.config.apiKey,e.name)}async function il(e,t,n){var r;let i=Y(e);tl(e,t,nE);let s=rZ(i,n);return await ii(s,i),s._openRedirect(i,t,"signInViaRedirect")}async function iu(e,t,n){let r=Y(e);tl(r.auth,t,nE);let i=rZ(r.auth,n);await ii(i,r.auth);let s=await ip(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}async function ih(e,t,n){let r=Y(e);tl(r.auth,t,nE);let i=rZ(r.auth,n);await nj(!1,r,t.providerId),await ii(i,r.auth);let s=await ip(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}async function ic(e,t){var n;return await Y(e)._initializationPromise,id(e,t,!1)}async function id(e,t,n=!1){var r;let i=Y(e),s=rZ(i,t),a=new it(i,s,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function ip(e){let t=rw(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}class im{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iy(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!iy(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ta(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ig(e))}saveEventToCache(e){this.cachedEventUids.add(ig(e)),this.lastProcessedEventTime=Date.now()}}function ig(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function iy({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function iv(e,t={}){return tE(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i_=/^https?/;async function iI(e){if(e.config.emulator)return;let{authorizedDomains:t}=await iv(e);for(let n of t)try{if(ib(n))return}catch(r){}ts(e,"unauthorized-domain")}function ib(e){let t=tm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!i_.test(n))return!1;if(iw.test(e))return r===e;let s=e.replace(/\./g,"\\."),a=RegExp("^(.+\\."+s+"|"+s+")$","i");return a.test(r)}/**
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
 */ let iT=new tv(3e4,6e4);function iE(){let e=rI().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}let iS=null,ik=new tv(5e3,15e3),iA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function iR(e){var t,n;let r=await (iS=iS||new Promise((t,n)=>{var r,i,s;function a(){iE(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){iE(),n(ta(e,"network-request-failed"))},timeout:iT.get()})}if(null===(i=null===(r=rI().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=rI().gapi)||void 0===s?void 0:s.load)a();else{let o=rM("iframefcb");return rI()[o]=()=>{gapi.load?a():n(ta(e,"network-request-failed"))},rL(`https://apis.google.com/js/api.js?onload=${o}`).catch(e=>n(e))}}).catch(e=>{throw iS=null,e})),i=rI().gapi;return th(i,e,"internal-error"),r.open({where:document.body,url:function(e){let t=e.config;th(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?tw(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:eF},i=iC.get(e.config.apiHost);i&&(r.eid=i);let s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${z(r).slice(1)}`}(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iA,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=ta(e,"network-request-failed"),s=rI().setTimeout(()=>{r(i)},ik.get());function a(){rI().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}/**
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
 */ let iN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class iD{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ix(e,t,n,r,i,s){th(e.config.authDomain,e,"auth-domain-config-required"),th(e.config.apiKey,e,"invalid-api-key");let a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:eF,eventId:i};if(t instanceof nE)for(let[o,l]of(t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(a.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))a[o]=l;if(t instanceof nS){let u=t.getScopes().filter(e=>""!==e);u.length>0&&(a.scopes=u.join(","))}for(let h of(e.tenantId&&(a.tid=e.tenantId),Object.keys(a)))void 0===a[h]&&delete a[h];return`${function({config:e}){return e.emulator?tw(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${z(a).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iO="webStorageSupport",iP=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ry,this._completeRedirectFn=id,this._overrideRedirectResult=is}async _openPopup(e,t,n,r){var i;td(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");let s=ix(e,t,n,tm(),r);return function(e,t,n,r=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),o="",l=Object.assign(Object.assign({},iN),{width:r.toString(),height:i.toString(),top:s,left:a}),u=S().toLowerCase();n&&(o=tJ(u)?"_blank":n),tY(u)&&(t=t||"http://localhost",l.scrollbars="yes");let h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=S()){var t;return t4(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",o),new iD(null);let c=window.open(t||"",o,h);th(c,e,"popup-blocked");try{c.focus()}catch(d){}return new iD(c)}(e,s,rw())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=ix(e,t,n,tm(),r),rI().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:n,promise:r}=this.eventManagers[t];return n?Promise.resolve(n):(td(r,"If manager is not set, promise should be"),r)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await iR(e),n=new im(e);return t.register("authEvent",t=>{th(null==t?void 0:t.authEvent,e,"invalid-auth-event");let r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){let n=this.iframes[e._key()];n.send(iO,{type:iO},n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[iO];void 0!==i&&t(!!i),ts(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return t3()||tX()||t4()}};class iL{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return tc("unexpected MultiFactorSessionType")}}}class iM extends iL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new iM(e)}_finalizeEnroll(e,t,n){var r,i;return tE(e,"POST","/v2/accounts/mfaEnrollment:finalize",tT(e,i={idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){var n,r;return tE(e,"POST","/v2/accounts/mfaSignIn:finalize",tT(e,r={mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class iU{constructor(){}static assertion(e){return iM._fromCredential(e)}}iU.FACTOR_ID="phone";var iF="@firebase/auth",iV="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){th(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */ function iq(){return window}async function ij(e,t,n){var r;let{BuildInfo:i}=iq();td(t.sessionId,"AuthEvent did not contain a session ID");let s=await iK(t.sessionId),a={};return t4()?a.ibi=i.packageName:t0()?a.apn=i.packageName:ts(e,"operation-not-supported-in-this-environment"),i.displayName&&(a.appDisplayName=i.displayName),a.sessionId=s,ix(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,a)}async function iG(e){let{BuildInfo:t}=iq(),n={};t4()?n.iosBundleId=t.packageName:t0()?n.androidPackageName=t.packageName:ts(e,"operation-not-supported-in-this-environment"),await iv(e,n)}async function iz(e,t,n){let{cordova:r}=iq(),i=()=>{};try{await new Promise((s,a)=>{let o=null;function l(){var e;s();let t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function u(){!o&&(o=window.setTimeout(()=>{a(ta(e,"redirect-cancelled-by-user"))},2e3))}function h(){(null==document?void 0:document.visibilityState)==="visible"&&u()}t.addPassiveListener(l),document.addEventListener("resume",u,!1),t0()&&document.addEventListener("visibilitychange",h,!1),i=()=>{t.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",h,!1),o&&window.clearTimeout(o)}})}finally{i()}}async function iK(e){let t=function(e){if(td(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return new TextEncoder().encode(e);let t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map(e=>e.toString(16).padStart(2,"0")).join("")}sd="authIdTokenMaxAge",null===(sf=P())||void 0===sf||sf[`_${sd}`],sp="Browser",ex(new X("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{th(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),th(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});let r={apiKey:i,authDomain:s,clientPlatform:sp,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t6(sp)},a=new t8(e,n,r);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tp);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{let r=e.getProvider("auth-internal");r.initialize()})),ex(new X("auth-internal",e=>{var t,n;let r=Y(t=e.getProvider("auth").getImmediate());return new iB(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),eG(iF,iV,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(sp)),eG(iF,iV,"esm2017");class i$ extends im{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}async function iH(e){let t=await iW()._get(iQ(e));return t&&await iW()._remove(iQ(e)),t}function iW(){return tp(rg)}function iQ(e){return tH("authEvent",e.config.apiKey,e.name)}function iY(e){if(!(null==e?void 0:e.includes("?")))return{};let[t,...n]=e.split("?");return K(n.join("?"))}let iX=class{constructor(){this._redirectPersistence=ry,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=id,this._overrideRedirectResult=is}async _initialize(e){let t=e._key(),n=this.eventManagers.get(t);return n||(n=new i$(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){ts(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){var i,s;!function(e){var t,n,r,i,s,a,o,l,u,h;let c=iq();th("function"==typeof(null===(t=null==c?void 0:c.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),th(void 0!==(null===(n=null==c?void 0:c.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),th("function"==typeof(null===(s=null===(i=null===(r=null==c?void 0:c.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),th("function"==typeof(null===(l=null===(o=null===(a=null==c?void 0:c.cordova)||void 0===a?void 0:a.plugins)||void 0===o?void 0:o.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),th("function"==typeof(null===(h=null===(u=null==c?void 0:c.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);let a=await this._initialize(e);await a.initialized(),a.resetRedirect(),ie.clear(),await this._originValidation(e);let o=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:function(){let e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){let r=Math.floor(Math.random()*t.length);e.push(t.charAt(r))}return e.join("")}(),postBody:null,tenantId:e.tenantId,error:ta(e,"no-auth-event")}}(e,n,r);await iW()._set(iQ(e),o);let l=await ij(e,o,t),u=await function(e){let{cordova:t}=iq();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,!function(e=S()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_system":"_blank","location=yes"),n(i)})})}(l);return iz(e,a,u)}_isIframeWebStorageSupported(e,t){throw Error("Method not implemented.")}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iG(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){let{universalLinks:n,handleOpenURL:r,BuildInfo:i}=iq(),s=setTimeout(async()=>{await iH(e),t.onEvent(iJ())},500),a=async n=>{clearTimeout(s);let r=await iH(e),i=null;r&&(null==n?void 0:n.url)&&(i=function(e,t){var n,r;let i=function(e){let t=iY(e),n=t.link?decodeURIComponent(t.link):void 0,r=iY(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0,s=iY(i).link;return s||i||r||n||e}(t);if(i.includes("/__/auth/callback")){let s=iY(i),a=s.firebaseError?function(e){try{return JSON.parse(e)}catch(t){return null}}(decodeURIComponent(s.firebaseError)):null,o=null===(r=null===(n=null==a?void 0:a.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],l=o?ta(o):null;return l?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}(r,n.url)),t.onEvent(i||iJ())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,a);let o=`${i.packageName.toLowerCase()}://`;iq().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(o)&&a({url:e}),"function"==typeof r)try{r(e)}catch(t){console.error(t)}}}};function iJ(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ta("no-auth-event")}}function iZ(){var e;return(null===(e=null==self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function i0(e=S()){return!!(("file:"===iZ()||"ionic:"===iZ()||"capacitor:"===iZ())&&e.toLowerCase().match(/iphone|ipad|ipod|android/))}function i1(){try{let e=self.localStorage,t=rw();if(e){if(e.setItem(t,"1"),e.removeItem(t),function(e=S()){return R()&&(null==document?void 0:document.documentMode)===11||function(e=S()){return/Edge\/\d+/.test(e)}(e)}())return N();return!0}}catch(n){return i2()&&N()}return!1}function i2(){return void 0!==n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function i4(){return("http:"===iZ()||"https:"===iZ()||A()||i0())&&!(C()||k())&&i1()&&!i2()}function i3(){return i0()&&"undefined"!=typeof document}async function i6(){return!!i3()&&new Promise(e=>{let t=setTimeout(()=>{e(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i5={LOCAL:"local",NONE:"none",SESSION:"session"},i8="persistence";async function i9(e){await e._initializationPromise;let t=i7(),n=tH(i8,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function i7(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}class se{constructor(){this.browserResolver=tp(iP),this.cordovaResolver=tp(iX),this.underlyingResolver=null,this._redirectPersistence=ry,this._completeRedirectFn=id,this._overrideRedirectResult=is}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return i3()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return th(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;let e=await i6();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function st(e){return e.unwrap()}function sn(e){let{_tokenResponse:t}=e instanceof F?e.customData:e;if(!t)return null;if(!(e instanceof F)&&"temporaryProof"in t&&"phoneNumber"in t)return rJ.credentialFromResult(e);let n=t.providerId;if(!n||n===e9.PASSWORD)return null;let r;switch(n){case e9.GOOGLE:r=nC;break;case e9.FACEBOOK:r=nA;break;case e9.GITHUB:r=nR;break;case e9.TWITTER:r=nx;break;default:let{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:o,nonce:l}=t;if(!s&&!a&&!i&&!o)return null;if(o){if(n.startsWith("saml."))return nN._create(n,o);return nm._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:i,accessToken:s})}return new nk(n).credential({idToken:i,accessToken:s,rawNonce:l})}return e instanceof F?r.credentialFromError(e):r.credentialFromResult(e)}function sr(e,t){return t.catch(t=>{throw t instanceof F&&function(e,t){var n;let r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if((null==t?void 0:t.code)==="auth/multi-factor-auth-required"){let i=t;i.resolver=new ss(e,function(e,t){var n;let r=Y(e);return th(t.customData.operationType,r,"argument-error"),th(null===(n=t.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),rc._fromError(r,t)}(e,t))}else if(r){let s=sn(t),a=t;s&&(a.credential=s,a.tenantId=r.tenantId||void 0,a.email=r.email||void 0,a.phoneNumber=r.phoneNumber||void 0)}}(e,t),t}).then(e=>{var t;let n=e.operationType,r=e.user;return{operationType:n,credential:sn(e),additionalUserInfo:function(e){let{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){var t,n;if(!e)return null;let{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){let a=null===(n=null===(t=tM(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(a)return new ri(s,"anonymous"!==a&&"custom"!==a?a:null)}if(!r)return null;switch(r){case"facebook.com":return new ra(s,i);case"github.com":return new ro(s,i);case"google.com":return new rl(s,i);case"twitter.com":return new ru(s,i,e.screenName||null);case"custom":case"anonymous":return new ri(s,null);default:return new ri(s,r,i)}}(n)}(e),user:sa.getOrCreate(r)}})}async function si(e,t){let n=await t;return{verificationId:n.verificationId,confirm:t=>sr(e,n.confirm(t))}}class ss{constructor(e,t){var n;this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return sr(st(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sa{constructor(e){this._delegate=e,this.multiFactor=function(e){let t=Y(e);return rf.has(t)||rf.set(t,rd._fromUser(t)),rf.get(t)}(e)}static getOrCreate(e){return sa.USER_MAP.has(e)||sa.USER_MAP.set(e,new sa(e)),sa.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return sr(this.auth,n$(this._delegate,e))}async linkWithPhoneNumber(e,t){return si(this.auth,rW(this._delegate,e,t))}async linkWithPopup(e){return sr(this.auth,r9(this._delegate,e,se))}async linkWithRedirect(e){var t,n,r,i;return await i9(Y(t=this.auth)),ih(n=this._delegate,e,se)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return sr(this.auth,nH(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return si(this.auth,rQ(this._delegate,e,t))}reauthenticateWithPopup(e){return sr(this.auth,r8(this._delegate,e,se))}async reauthenticateWithRedirect(e){var t,n,r,i;return await i9(Y(t=this.auth)),iu(n=this._delegate,e,se)}sendEmailVerification(e){return n7(this._delegate,e)}async unlink(e){return await nB(this._delegate,e),this}updateEmail(e){var t,n;return rr(Y(t=this._delegate),e,null)}updatePassword(e){var t,n;return rr(Y(t=this._delegate),null,e)}updatePhoneNumber(e){return rX(this._delegate,e)}updateProfile(e){return rn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return re(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}sa.USER_MAP=new WeakMap;class so{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}let{apiKey:n}=e.options;th(n,"invalid-api-key",{appName:e.name}),th(n,"invalid-api-key",{appName:e.name});let r="undefined"!=typeof window?se:void 0;this._delegate=t.initialize({options:{persistence:function(e,t){let n=function(e,t){let n=i7();if(!n)return[];let r=tH(i8,e,t),i=n.getItem(r);switch(i){case i5.NONE:return[t$];case i5.LOCAL:return[rO,ry];case i5.SESSION:return[ry];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(rO)||n.push(rO),"undefined"!=typeof window)for(let r of[rg,ry])n.includes(r)||n.push(r);return n.includes(t$)||n.push(t$),n}(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(tt),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?sa.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){!function(e,t,n){var r;let i=Y(e);th(i._canInitEmulator,i,"emulator-config-failed"),th(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");let s=!!(null==n?void 0:n.disableWarnings),a=t7(t),{host:o,port:l}=function(e){let t=t7(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:ne(r.substr(s.length+1))}}{let[a,o]=r.split(":");return{host:a,port:ne(o)}}}(t),u=null===l?"":`:${l}`;i.config.emulator={url:`${a}//${o}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:l,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(this._delegate,e,t)}applyActionCode(e){return n1(this._delegate,e)}checkActionCode(e){return n2(this._delegate,e)}confirmPasswordReset(e,t){return n0(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return sr(this._delegate,n3(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return n9(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){let n=nb.parseLink(t);return(null==n?void 0:n.operation)==="EMAIL_SIGNIN"}(this._delegate,e)}async getRedirectResult(){th(i4(),this._delegate,"operation-not-supported-in-this-environment");let e=await ic(this._delegate,se);return e?sr(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){var n;Y(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){let{next:r,error:i,complete:s}=sl(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){let{next:r,error:i,complete:s}=sl(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return n6(this._delegate,e,t)}sendPasswordResetEmail(e,t){return nZ(this._delegate,e,t||void 0)}async setPersistence(e){!function(e,t){if(th(Object.values(i5).includes(t),e,"invalid-persistence-type"),C()){th(t!==i5.SESSION,e,"unsupported-persistence-type");return}if(k()){th(t===i5.NONE,e,"unsupported-persistence-type");return}if(i2()){th(t===i5.NONE||t===i5.LOCAL&&N(),e,"unsupported-persistence-type");return}th(t===i5.NONE||i1(),e,"unsupported-persistence-type")}(this._delegate,e);let t;switch(e){case i5.SESSION:t=ry;break;case i5.LOCAL:let n=await tp(rO)._isAvailable();t=n?rO:rg;break;case i5.NONE:t=t$;break;default:return ts("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return sr(this._delegate,nM(this._delegate))}signInWithCredential(e){return sr(this._delegate,nK(this._delegate,e))}signInWithCustomToken(e){return sr(this._delegate,nQ(this._delegate,e))}signInWithEmailAndPassword(e,t){var n,r,i;return sr(this._delegate,nK(Y(n=this._delegate),nT.credential(e,t)))}signInWithEmailLink(e,t){return sr(this._delegate,n5(this._delegate,e,t))}signInWithPhoneNumber(e,t){return si(this._delegate,rH(this._delegate,e,t))}async signInWithPopup(e){return th(i4(),this._delegate,"operation-not-supported-in-this-environment"),sr(this._delegate,r5(this._delegate,e,se))}async signInWithRedirect(e){var t,n,r;return th(i4(),this._delegate,"operation-not-supported-in-this-environment"),await i9(this._delegate),il(t=this._delegate,e,se)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return n4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function sl(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);let i=r,s=e=>i(e&&sa.getOrCreate(e));return{next:s,error:t,complete:n}}so.Persistence=i5;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class su{constructor(){this.providerId="phone",this._delegate=new rJ(st(e3.auth()))}static credential(e,t){return rJ.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}su.PHONE_SIGN_IN_METHOD=rJ.PHONE_SIGN_IN_METHOD,su.PROVIDER_ID=rJ.PROVIDER_ID;(sm=e3).INTERNAL.registerComponent(new X("auth-compat",e=>{let t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new so(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:e7.EMAIL_SIGNIN,PASSWORD_RESET:e7.PASSWORD_RESET,RECOVER_EMAIL:e7.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:e7.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:e7.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:e7.VERIFY_EMAIL}},EmailAuthProvider:nT,FacebookAuthProvider:nA,GithubAuthProvider:nR,GoogleAuthProvider:nC,OAuthProvider:nk,SAMLAuthProvider:nD,PhoneAuthProvider:su,PhoneMultiFactorGenerator:iU,RecaptchaVerifier:class e{constructor(e,t,n=e3.app()){var r;th(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new rK(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}},TwitterAuthProvider:nx,Auth:so,AuthCredential:nt,Error:F}).setInstantiationMode("LAZY").setMultipleInstances(!1)),sm.registerVersion("@firebase/auth-compat","0.2.23");var sh,sc,sd,sf,sp,sm,sg,sy,sv="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},sw={},s_=s_||{},sI=sv||self;function sb(){}function sT(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function sE(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function sS(e,t,n){return e.call.apply(e.bind,arguments)}function sk(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function sA(e,t,n){return(sA=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?sS:sk).apply(null,arguments)}function sC(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function sR(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function sN(){this.s=this.s,this.o=this.o}sN.prototype.s=!1,sN.prototype.na=function(){this.s||(this.s=!0,this.M())},sN.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let sD=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function sx(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function sO(e,t){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(sT(r)){let i=e.length||0,s=r.length||0;e.length=i+s;for(let a=0;a<s;a++)e[i+a]=r[a]}else e.push(r)}}function sP(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}sP.prototype.h=function(){this.defaultPrevented=!0};var sL=function(){if(!sI.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{sI.addEventListener("test",sb,t),sI.removeEventListener("test",sb,t)}catch(n){}return e}();function sM(e){return/^[\s\xa0]*$/.test(e)}var sU=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function sF(e,t){return e<t?-1:e>t?1:0}function sV(){var e=sI.navigator;return e&&(e=e.userAgent)?e:""}function sB(e){return -1!=sV().indexOf(e)}function sq(e){return sq[" "](e),e}sq[" "]=sb;var sj=sB("Opera"),sG=sB("Trident")||sB("MSIE"),sz=sB("Edge"),sK=sz||sG,s$=sB("Gecko")&&!(-1!=sV().toLowerCase().indexOf("webkit")&&!sB("Edge"))&&!(sB("Trident")||sB("MSIE"))&&!sB("Edge"),sH=-1!=sV().toLowerCase().indexOf("webkit")&&!sB("Edge");function sW(){var e=sI.document;return e?e.documentMode:void 0}a:{var sQ,sY="",sX=(sQ=sV(),s$?/rv:([^\);]+)(\)|;)/.exec(sQ):sz?/Edge\/([\d\.]+)/.exec(sQ):sG?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(sQ):sH?/WebKit\/(\S+)/.exec(sQ):sj?/(?:Version)[ \/]?(\S+)/.exec(sQ):void 0);if(sX&&(sY=sX?sX[1]:""),sG){var sJ=sW();if(null!=sJ&&sJ>parseFloat(sY)){l=String(sJ);break a}}l=sY}var sZ={};if(sI.document&&sG){u=sW()||parseInt(l,10)||void 0}else u=void 0;var s0=u;function s1(e,t){if(sP.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(s$){a:{try{sq(t.nodeName);var i=!0;break a}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:s2[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&s1.X.h.call(this)}}sR(s1,sP);var s2={2:"touch",3:"pen",4:"mouse"};s1.prototype.h=function(){s1.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var s4="closure_listenable_"+(1e6*Math.random()|0),s3=0;function s6(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++s3,this.ba=this.ea=!1}function s5(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function s8(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function s9(e){let t={};for(let n in e)t[n]=e[n];return t}let s7="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(let s=0;s<s7.length;s++)n=s7[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function at(e){this.src=e,this.g={},this.h=0}function an(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=sD(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(s5(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ar(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return -1}at.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=ar(e,t,r,i);return -1<a?(t=e[a],n||(t.ea=!1)):((t=new s6(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var ai="closure_lm_"+(1e6*Math.random()|0),as={};function aa(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=af(r),t&&t[s4]?t.O(n,r,sE(i)?!!i.capture:!!i,s):ao(t,n,r,!0,i,s)}(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)aa(e,t[s],n,r,i);return null}return n=af(n),e&&e[s4]?e.N(t,n,sE(r)?!!r.capture:!!r,i):ao(e,t,n,!1,r,i)}function ao(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=sE(i)?!!i.capture:!!i,o=ac(e);if(o||(e[ai]=o=new at(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}let t=ah;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)sL||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(au(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function al(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[s4])an(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(au(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ac(t))?(an(n,e),0==n.h&&(n.src=null,t[ai]=null)):s5(e)}}}function au(e){return e in as?as[e]:as[e]="on"+e}function ah(e,t){if(e.ba)e=!0;else{t=new s1(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&al(e),e=n.call(r,t)}return e}function ac(e){return(e=e[ai])instanceof at?e:null}var ad="__closure_events_fn_"+(1e9*Math.random()>>>0);function af(e){return"function"==typeof e?e:(e[ad]||(e[ad]=function(t){return e.handleEvent(t)}),e[ad])}function ap(){sN.call(this),this.i=new at(this),this.P=this,this.I=null}function am(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new sP(t,e);else if(t instanceof sP)t.target=t.target||e;else{var i=t;ae(t=new sP(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ag(a,r,!0,t)&&i}if(i=ag(a=t.g=e,r,!0,t)&&i,i=ag(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ag(a=t.g=n[s],r,!1,t)&&i}function ag(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.ea&&an(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}sR(ap,sN),ap.prototype[s4]=!0,ap.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=sE(i)?!!i.capture:!!i,r=af(r),t&&t[s4])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ar(a=t.g[n],r,i,s))&&(s5(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ac(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ar(n,r,i,s)),(r=-1<t?n[t]:null)&&al(r))}(this,e,t,n,r)},ap.prototype.M=function(){if(ap.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)s5(n[r]);delete t.g[e],t.h--}}this.I=null},ap.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ap.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ay=sI.JSON.stringify;function av(){var e=aE;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var aw=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new a_,e=>e.reset());class a_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function aI(e){sI.setTimeout(()=>{throw e},0)}function ab(e,t){var n;h||(n=sI.Promise.resolve(void 0),h=function(){n.then(aS)}),aT||(h(),aT=!0),aE.add(e,t)}var aT=!1,aE=new class{constructor(){this.h=this.g=null}add(e,t){let n=aw.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function aS(){for(var e;e=av();){try{e.h.call(e.g)}catch(t){aI(t)}var n=aw;n.j(e),100>n.h&&(n.h++,e.next=n.g,n.g=e)}aT=!1}function ak(e,t){ap.call(this),this.h=e||1,this.g=t||sI,this.j=sA(this.lb,this),this.l=Date.now()}function aA(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function aC(e,t,n){if("function"==typeof e)n&&(e=sA(e,n));else if(e&&"function"==typeof e.handleEvent)e=sA(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:sI.setTimeout(e,t||0)}sR(ak,ap),(sy=ak.prototype).ca=!1,sy.R=null,sy.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),am(this,"tick"),this.ca&&(aA(this),this.start()))}},sy.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},sy.M=function(){ak.X.M.call(this),aA(this),delete this.g};class aR extends sN{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=aC(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(sI.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function aN(e){sN.call(this),this.h=e,this.g={}}sR(aN,sN);var aD=[];function ax(e,t,n,r){Array.isArray(n)||(n&&(aD[0]=n.toString()),n=aD);for(var i=0;i<n.length;i++){var s=aa(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function aO(e){s8(e.g,function(e,t){this.g.hasOwnProperty(t)&&al(e)},e),e.g={}}function aP(){this.g=!0}function aL(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ay(n)}catch(o){return t}}(e,n)+(r?" "+r:"")})}aN.prototype.M=function(){aN.X.M.call(this),aO(this)},aN.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},aP.prototype.Aa=function(){this.g=!1},aP.prototype.info=function(){};var aM={},aU=null;function aF(){return aU=aU||new ap}function aV(e){sP.call(this,aM.Pa,e)}function aB(e){let t=aF();am(t,new aV(t,e))}function aq(e,t){sP.call(this,aM.STAT_EVENT,e),this.stat=t}function aj(e){let t=aF();am(t,new aq(t,e))}function aG(e,t){sP.call(this,aM.Qa,e),this.size=t}function az(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return sI.setTimeout(function(){e()},t)}aM.Pa="serverreachability",sR(aV,sP),aM.STAT_EVENT="statevent",sR(aq,sP),aM.Qa="timingevent",sR(aG,sP);var aK={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},a$={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function aH(){}function aW(e){return e.h||(e.h=e.i())}function aQ(){}aH.prototype.h=null;var aY={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function aX(){sP.call(this,"d")}function aJ(){sP.call(this,"c")}function aZ(){}function a0(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new aN(this),this.O=a2,e=sK?125:void 0,this.T=new ak(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new a1}function a1(){this.i=null,this.g="",this.h=!1}sR(aX,sP),sR(aJ,sP),sR(aZ,aH),aZ.prototype.g=function(){return new XMLHttpRequest},aZ.prototype.i=function(){return{}},c=new aZ;var a2=45e3,a4={},a3={};function a6(e,t,n){e.K=1,e.v=op(ou(t)),e.s=n,e.P=!0,a5(e,null)}function a5(e,t){e.F=Date.now(),oe(e),e.A=ou(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),oA(n.i,"t",r),e.C=0,n=e.l.H,e.h=new a1,e.g=ly(e.l,n?t:null,!e.s),0<e.N&&(e.L=new aR(sA(e.La,e,e.g),e.N)),ax(e.S,e.g,"readystatechange",e.ib),t=e.H?s9(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),aB(1),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.u,e.A,e.m,e.U,e.s)}function a8(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function a9(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if((i=a7(e,n))==a3){4==t&&(e.o=4,aj(14),r=!1),aL(e.j,e.m,null,"[Incomplete Response]");break}else if(i==a4){e.o=4,aj(15),aL(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else aL(e.j,e.m,i,null),os(e,i);a8(e)&&i!=a3&&i!=a4&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,aj(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),lu(t),t.K=!0,aj(11))):(aL(e.j,e.m,n,"[Invalid Chunked Response]"),oi(e),or(e))}function a7(e,t){var n=e.C,r=t.indexOf("\n",n);return -1==r?a3:isNaN(n=Number(t.substring(n,r)))?a4:(r+=1)+n>t.length?a3:(t=t.substr(r,n),e.C=r+n,t)}function oe(e){e.V=Date.now()+e.O,ot(e,e.O)}function ot(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=az(sA(e.gb,e),t)}function on(e){e.B&&(sI.clearTimeout(e.B),e.B=null)}function or(e){0==e.l.G||e.I||ld(e.l,e)}function oi(e){on(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,aA(e.T),aO(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function os(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||oP(n.h,e))){if(!e.J&&oP(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(i){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){a:if(!n.u){if(n.g){if(n.g.F+3e3<e.F)lc(n),lt(n);else break a}ll(n),aj(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=az(sA(n.cb,n),6e3));if(1>=oO(n.h)&&n.ja){try{n.ja()}catch(a){}n.ja=void 0}}else lp(n,11)}else if((e.J||n.g==e)&&lc(n),!sM(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let o=s[t];if(n.T=o[0],o=o[1],2==n.G){if("c"==o[0]){n.I=o[1],n.ka=o[2];let l=o[3];null!=l&&(n.ma=l,n.j.info("VER="+n.ma));let u=o[4];null!=u&&(n.Ca=u,n.j.info("SVER="+n.Ca));let h=o[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let c=e.g;if(c){let d=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var f=r.h;f.g||-1==d.indexOf("spdy")&&-1==d.indexOf("quic")&&-1==d.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(oL(f,f.h),f.h=null))}if(r.D){let p=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.za=p,of(r.F,r.D,p))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(r=n).sa=lg(r,r.H?r.ka:null,r.V),e.J){oM(r.h,e);var m=r.J;m&&e.setTimeout(m),e.B&&(on(e),oe(e)),r.g=e}else lo(r);0<n.i.length&&lr(n)}else"stop"!=o[0]&&"close"!=o[0]||lp(n,7)}else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?lp(n,7):le(n):"noop"!=o[0]&&n.l&&n.l.wa(o),n.A=0)}}aB(4)}catch(g){}}function oa(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(sT(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(sT(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(sT(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(sy=a0.prototype).setTimeout=function(e){this.O=e},sy.ib=function(e){e=e.target;let t=this.L;t&&3==o3(e)?t.l():this.La(e)},sy.La=function(e){try{if(e==this.g)a:{let t=o3(this.g);var n=this.g.Ea();let r=this.g.aa();if(!(3>t)&&(3!=t||sK||this.g&&(this.h.h||this.g.fa()||o6(this.g)))){this.I||4!=t||7==n||(8==n||0>=r?aB(3):aB(2)),on(this);var i=this.g.aa();this.Y=i;b:if(a8(this)){var s=o6(this.g);e="";var a=s.length,o=4==o3(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){oi(this),or(this);var l="";break b}this.h.i=new sI.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:o&&n==a-1});s.splice(0,a),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.fa();if(this.i=200==i,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.U,t,i),this.i){if(this.Z&&!this.J){b:{if(this.g){var u,h=this.g;if((u=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sM(u)){var c=u;break b}}c=null}if(i=c)aL(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,os(this,i);else{this.i=!1,this.o=3,aj(12),oi(this),or(this);break a}}this.P?(a9(this,t,l),sK&&this.i&&3==t&&(ax(this.S,this.T,"tick",this.hb),this.T.start())):(aL(this.j,this.m,l,null),os(this,l)),4==t&&oi(this),this.i&&!this.I&&(4==t?ld(this.l,this):(this.i=!1,oe(this)))}else 400==i&&0<l.indexOf("Unknown SID")?(this.o=3,aj(12)):(this.o=0,aj(13)),oi(this),or(this)}}}catch(d){}finally{}},sy.hb=function(){if(this.g){var e=o3(this.g),t=this.g.fa();this.C<t.length&&(on(this),a9(this,e,t),this.i&&4!=e&&oe(this))}},sy.cancel=function(){this.I=!0,oi(this)},sy.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.K&&(aB(3),aj(17)),oi(this),this.o=2,or(this)):ot(this,this.V-e)};var oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ol(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ol){this.h=void 0!==t?t:e.h,oh(this,e.j),this.s=e.s,this.g=e.g,oc(this,e.m),this.l=e.l,t=e.i;var n=new oT;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),od(this,n),this.o=e.o}else e&&(n=String(e).match(oo))?(this.h=!!t,oh(this,n[1]||"",!0),this.s=om(n[2]||""),this.g=om(n[3]||"",!0),oc(this,n[4]),this.l=om(n[5]||"",!0),od(this,n[6]||"",!0),this.o=om(n[7]||"")):(this.h=!!t,this.i=new oT(null,this.h))}function ou(e){return new ol(e)}function oh(e,t,n){e.j=n?om(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function oc(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function od(e,t,n){var r,i;t instanceof oT?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(oE(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(oS(this,t),oA(this,n,e))},r)),r.j=i):(n||(t=og(t,oI)),e.i=new oT(t,e.h))}function of(e,t,n){e.i.set(t,n)}function op(e){return of(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function om(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function og(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,oy),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function oy(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ol.prototype.toString=function(){var e=[],t=this.j;t&&e.push(og(t,ov,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(og(t,ov,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(og(n,"/"==n.charAt(0)?o_:ow,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",og(n,ob)),e.join("")};var ov=/[#\/\?@]/g,ow=/[#\?:]/g,o_=/[#\?]/g,oI=/[#\?@]/g,ob=/#/g;function oT(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function oE(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function oS(e,t){oE(e),t=oC(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ok(e,t){return oE(e),t=oC(e,t),e.g.has(t)}function oA(e,t,n){oS(e,t),0<n.length&&(e.i=null,e.g.set(oC(e,t),sx(n)),e.h+=n.length)}function oC(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(sy=oT.prototype).add=function(e,t){oE(this),this.i=null,e=oC(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},sy.forEach=function(e,t){oE(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},sy.oa=function(){oE(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n},sy.W=function(e){oE(this);let t=[];if("string"==typeof e)ok(this,e)&&(t=t.concat(this.g.get(oC(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},sy.set=function(e,t){return oE(this),this.i=null,ok(this,e=oC(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},sy.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},sy.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let i=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var a=i;""!==s[r]&&(a+="="+encodeURIComponent(String(s[r]))),e.push(a)}}return this.i=e.join("&")};var oR=class{constructor(e,t){this.h=e,this.g=t}};function oN(e){this.l=e||oD,e=sI.PerformanceNavigationTiming?0<(e=sI.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(sI.g&&sI.g.Ga&&sI.g.Ga()&&sI.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oD=10;function ox(e){return!!e.h||!!e.g&&e.g.size>=e.j}function oO(e){return e.h?1:e.g?e.g.size:0}function oP(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function oL(e,t){e.g?e.g.add(t):e.h=t}function oM(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function oU(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return sx(e.i)}function oF(){}function oV(){this.g=new oF}function oB(e,t,n){let r=n||"";try{oa(e,function(e,n){let i=e;sE(e)&&(i=ay(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function oq(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function oj(e){this.l=e.ac||null,this.j=e.jb||!1}function oG(e,t){ap.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=oz,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oN.prototype.cancel=function(){if(this.i=oU(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},oF.prototype.stringify=function(e){return sI.JSON.stringify(e,void 0)},oF.prototype.parse=function(e){return sI.JSON.parse(e,void 0)},sR(oj,aH),oj.prototype.g=function(){return new oG(this.l,this.j)},oj.prototype.i=(i={},function(){return i}),sR(oG,ap);var oz=0;function oK(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function o$(e){e.readyState=4,e.l=null,e.j=null,e.A=null,oH(e)}function oH(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(sy=oG.prototype).open=function(e,t){if(this.readyState!=oz)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,oH(this)},sy.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||sI).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},sy.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,o$(this)),this.readyState=oz},sy.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,oH(this)),this.g&&(this.readyState=3,oH(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==sI.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;oK(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))}},sy.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?o$(this):oH(this),3==this.readyState&&oK(this)}},sy.Va=function(e){this.g&&(this.response=this.responseText=e,o$(this))},sy.Ua=function(e){this.g&&(this.response=e,o$(this))},sy.ga=function(){this.g&&o$(this)},sy.setRequestHeader=function(e,t){this.v.append(e,t)},sy.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},sy.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(oG.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var oW=sI.JSON.parse;function oQ(e){ap.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=oY,this.K=this.L=!1}sR(oQ,ap);var oY="",oX=/^https?$/i,oJ=["POST","PUT"];function oZ(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,o0(e),o2(e)}function o0(e){e.D||(e.D=!0,am(e,"complete"),am(e,"error"))}function o1(e){if(e.h&&void 0!==s_&&(!e.C[1]||4!=o3(e)||2!=e.aa())){if(e.v&&4==o3(e))aC(e.Ha,0,e);else if(am(e,"readystatechange"),4==o3(e)){e.h=!1;try{let t=e.aa();a:switch(t){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n,r,i=!0;break a;default:i=!1}if(!(n=i)){if(r=0===t){var s=String(e.H).match(oo)[1]||null;if(!s&&sI.self&&sI.self.location){var a=sI.self.location.protocol;s=a.substr(0,a.length-1)}r=!oX.test(s?s.toLowerCase():"")}n=r}if(n)am(e,"complete"),am(e,"success");else{e.m=6;try{var o=2<o3(e)?e.g.statusText:""}catch(l){o=""}e.j=o+" ["+e.aa()+"]",o0(e)}}finally{o2(e)}}}}function o2(e,t){if(e.g){o4(e);let n=e.g,r=e.C[0]?sb:null;e.g=null,e.C=null,t||am(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function o4(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(sI.clearTimeout(e.A),e.A=null)}function o3(e){return e.g?e.g.readyState:0}function o6(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case oY:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function o5(e){let t="";return s8(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function o8(e,t,n){a:{for(r in n){var r=!1;break a}r=!0}r||(n=o5(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):of(e,t,n))}function o9(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function o7(e){this.Ca=0,this.i=[],this.j=new aP,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=o9("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=o9("baseRetryDelayMs",5e3,e),this.bb=o9("retryDelaySeedMs",1e4,e),this.$a=o9("forwardChannelMaxRetries",2,e),this.ta=o9("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new oN(e&&e.concurrentRequestLimit),this.Fa=new oV,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function le(e){if(ln(e),3==e.G){var t=e.U++,n=ou(e.F);of(n,"SID",e.I),of(n,"RID",t),of(n,"TYPE","terminate"),ls(e,n),(t=new a0(e,e.j,t,void 0)).K=2,t.v=op(ou(n)),n=!1,sI.navigator&&sI.navigator.sendBeacon&&(n=sI.navigator.sendBeacon(t.v.toString(),"")),!n&&sI.Image&&((new Image).src=t.v,n=!0),n||(t.g=ly(t.l,null),t.g.da(t.v)),t.F=Date.now(),oe(t)}lm(e)}function lt(e){e.g&&(lu(e),e.g.cancel(),e.g=null)}function ln(e){lt(e),e.u&&(sI.clearTimeout(e.u),e.u=null),lc(e),e.h.cancel(),e.m&&("number"==typeof e.m&&sI.clearTimeout(e.m),e.m=null)}function lr(e){ox(e.h)||e.m||(e.m=!0,ab(e.Ja,e),e.C=0)}function li(e,t){var n;n=t?t.m:e.U++;let r=ou(e.F);of(r,"SID",e.I),of(r,"RID",n),of(r,"AID",e.T),ls(e,r),e.o&&e.s&&o8(r,e.o,e.s),n=new a0(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=la(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),oL(e.h,n),a6(n,r,t)}function ls(e,t){e.ia&&s8(e.ia,function(e,n){of(t,n,e)}),e.l&&oa({},function(e,n){of(t,n,e)})}function la(e,t,n){n=Math.min(e.i.length,n);var r=e.l?sA(e.l.Ra,e.l,e):null;a:{var i=e.i;let s=-1;for(;;){let a=["count="+n];-1==s?0<n?(s=i[0].h,a.push("ofs="+s)):s=0:a.push("ofs="+s);let o=!0;for(let l=0;l<n;l++){let u=i[l].h,h=i[l].g;if(0>(u-=s))s=Math.max(0,i[l].h-100),o=!1;else try{oB(h,a,"req"+u+"_")}catch(c){r&&r(h)}}if(o){r=a.join("&");break a}}}return e=e.i.splice(0,n),t.D=e,r}function lo(e){e.g||e.u||(e.Z=1,ab(e.Ia,e),e.A=0)}function ll(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.Z++,e.u=az(sA(e.Ia,e),lf(e,e.A)),e.A++,!0)}function lu(e){null!=e.B&&(sI.clearTimeout(e.B),e.B=null)}function lh(e){e.g=new a0(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=ou(e.sa);of(t,"RID","rpc"),of(t,"SID",e.I),of(t,"CI",e.L?"0":"1"),of(t,"AID",e.T),of(t,"TYPE","xmlhttp"),ls(e,t),e.o&&e.s&&o8(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=op(ou(t)),n.s=null,n.P=!0,a5(n,e)}function lc(e){null!=e.v&&(sI.clearTimeout(e.v),e.v=null)}function ld(e,t){var n=null;if(e.g==t){lc(e),lu(e),e.g=null;var r=2}else{if(!oP(e.h,t))return;n=t.D,oM(e.h,t),r=1}if(0!=e.G){if(e.pa=t.Y,t.i){if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,a=e.C;am(r=aF(),new aG(r,n,t,a)),lr(e)}else lo(e)}else if(3==(a=t.o)||0==a&&0<e.pa||!(1==r&&(i=e,s=t,!(oO(i.h)>=i.h.j-(i.m?1:0))&&(i.m?(i.i=s.D.concat(i.i),!0):1!=i.G&&2!=i.G&&!(i.C>=(i.Za?0:i.$a))&&(i.m=az(sA(i.Ja,i,s),lf(i,i.C)),i.C++,!0)))||2==r&&ll(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),a){case 1:lp(e,5);break;case 4:lp(e,10);break;case 3:lp(e,6);break;default:lp(e,2)}}}function lf(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function lp(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=sA(e.kb,e);n||(n=new ol("//www.google.com/images/cleardot.gif"),sI.location&&"http"==sI.location.protocol||oh(n,"https"),op(n)),function(e,t){let n=new aP;if(sI.Image){let r=new Image;r.onload=sC(oq,n,r,"TestLoadImage: loaded",!0,t),r.onerror=sC(oq,n,r,"TestLoadImage: error",!1,t),r.onabort=sC(oq,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=sC(oq,n,r,"TestLoadImage: timeout",!1,t),sI.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else aj(2);e.G=0,e.l&&e.l.va(t),lm(e),ln(e)}function lm(e){if(e.G=0,e.la=[],e.l){let t=oU(e.h);(0!=t.length||0!=e.i.length)&&(sO(e.la,t),sO(e.la,e.i),e.h.i.length=0,sx(e.i),e.i.length=0),e.l.ua()}}function lg(e,t,n){var r=n instanceof ol?ou(n):new ol(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),oc(r,r.m);else{var i=sI.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ol(null,void 0);r&&oh(s,r),t&&(s.g=t),i&&oc(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&of(r,n,t),of(r,"VER",e.ma),ls(e,r),r}function ly(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new oQ(n&&e.Da&&!e.ra?new oj({jb:!0}):e.ra)).Ka(e.H),t}function lv(){}function lw(){if(sG&&!(10<=Number(s0)))throw Error("Environmental error: no available transport.")}function l_(e,t){ap.call(this),this.g=new o7(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!sM(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!sM(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new lT(this)}function lI(e){aX.call(this);var t=e.__sm__;if(t){a:{for(let n in t){e=n;break a}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function lb(){aJ.call(this),this.status=1}function lT(e){this.g=e}(sy=oQ.prototype).Ka=function(e){this.L=e},sy.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():c.g(),this.C=this.u?aW(this.u):aW(c),this.g.onreadystatechange=sA(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){oZ(this,i);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let a of r.keys())n.set(a,r.get(a));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[o,u]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=sI.FormData&&e instanceof sI.FormData,!(0<=sD(oJ,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(o,u);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var h,d,f;o4(this),0<this.B&&((this.K=(h=this.g,sG&&(d=function(){let e=0,t=sU(String(l)).split("."),n=sU("9").split("."),r=Math.max(t.length,n.length);for(let i=0;0==e&&i<r;i++){var s=t[i]||"",a=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==s[0].length&&0==a[0].length)break;e=sF(0==s[1].length?0:parseInt(s[1],10),0==a[1].length?0:parseInt(a[1],10))||sF(0==s[2].length,0==a[2].length)||sF(s[2],a[2]),s=s[3],a=a[3]}while(0==e)}return 0<=e},f=sZ,Object.prototype.hasOwnProperty.call(f,9)?f[9]:f[9]=d(9))&&"number"==typeof h.timeout&&void 0!==h.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=sA(this.qa,this)):this.A=aC(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(p){oZ(this,p)}},sy.qa=function(){void 0!==s_&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,am(this,"timeout"),this.abort(8))},sy.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,am(this,"complete"),am(this,"abort"),o2(this))},sy.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),o2(this,!0)),oQ.X.M.call(this)},sy.Ha=function(){this.s||(this.F||this.v||this.l?o1(this):this.fb())},sy.fb=function(){o1(this)},sy.aa=function(){try{return 2<o3(this)?this.g.status:-1}catch(e){return -1}},sy.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},sy.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),oW(t)}},sy.Ea=function(){return this.m},sy.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(sy=o7.prototype).ma=8,sy.G=1,sy.Ja=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let t=new a0(this,this.j,e,void 0),n=this.s;if(this.S&&(n?ae(n=s9(n),this.S):n=this.S),null!==this.o||this.N||(t.H=n,n=null),this.O)a:{for(var r=0,i=0;i<this.i.length;i++){b:{var s=this.i[i];if("__data__"in s.g&&"string"==typeof(s=s.g.__data__)){s=s.length;break b}s=void 0}if(void 0===s)break;if(4096<(r+=s)){r=i;break a}if(4096===r||i===this.i.length-1){r=i+1;break a}}r=1e3}else r=1e3;r=la(this,t,r),i=ou(this.F),of(i,"RID",e),of(i,"CVER",22),this.D&&of(i,"X-HTTP-Session-Id",this.D),ls(this,i),n&&(this.N?r="headers="+encodeURIComponent(String(o5(n)))+"&"+r:this.o&&o8(i,this.o,n)),oL(this.h,t),this.Ya&&of(i,"TYPE","init"),this.O?(of(i,"$req",r),of(i,"SID","null"),t.Z=!0,a6(t,i,null)):a6(t,i,r),this.G=2}}else 3==this.G&&(e?li(this,e):0==this.i.length||ox(this.h)||li(this))}},sy.Ia=function(){if(this.u=null,lh(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=az(sA(this.eb,this),e)}},sy.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,aj(10),lt(this),lh(this))},sy.cb=function(){null!=this.v&&(this.v=null,lt(this),ll(this),aj(19))},sy.kb=function(e){e?(this.j.info("Successfully pinged google.com"),aj(2)):(this.j.info("Failed to ping google.com"),aj(1))},(sy=lv.prototype).xa=function(){},sy.wa=function(){},sy.va=function(){},sy.ua=function(){},sy.Ra=function(){},lw.prototype.g=function(e,t){return new l_(e,t)},sR(l_,ap),l_.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;aj(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=lg(e,null,e.V),lr(e)},l_.prototype.close=function(){le(this.g)},l_.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=ay(e),e=n);t.i.push(new oR(t.ab++,e)),3==t.G&&lr(t)},l_.prototype.M=function(){this.g.l=null,delete this.j,le(this.g),delete this.g,l_.X.M.call(this)},sR(lI,aX),sR(lb,aJ),sR(lT,lv),lT.prototype.xa=function(){am(this.g,"a")},lT.prototype.wa=function(e){am(this.g,new lI(e))},lT.prototype.va=function(e){am(this.g,new lb(e))},lT.prototype.ua=function(){am(this.g,"b")},lw.prototype.createWebChannel=lw.prototype.g,l_.prototype.send=l_.prototype.u,l_.prototype.open=l_.prototype.m,l_.prototype.close=l_.prototype.close,aK.NO_ERROR=0,aK.TIMEOUT=8,aK.HTTP_ERROR=6,a$.COMPLETE="complete",aQ.EventType=aY,aY.OPEN="a",aY.CLOSE="b",aY.ERROR="c",aY.MESSAGE="d",ap.prototype.listen=ap.prototype.N,oQ.prototype.listenOnce=oQ.prototype.O,oQ.prototype.getLastError=oQ.prototype.Oa,oQ.prototype.getLastErrorCode=oQ.prototype.Ea,oQ.prototype.getStatus=oQ.prototype.aa,oQ.prototype.getResponseJson=oQ.prototype.Sa,oQ.prototype.getResponseText=oQ.prototype.fa,oQ.prototype.send=oQ.prototype.da,oQ.prototype.setWithCredentials=oQ.prototype.Ka;var lE=sw.createWebChannelTransport=function(){return new lw},lS=sw.getStatEventTarget=function(){return aF()},lk=sw.ErrorCode=aK,lA=sw.EventType=a$,lC=sw.Event=aM,lR=sw.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},lN=sw.FetchXmlHttpFactory=oj,lD=sw.WebChannel=aQ,lx=sw.XhrIo=oQ,lO=n(3454);let lP="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lL{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lL.UNAUTHENTICATED=new lL(null),lL.GOOGLE_CREDENTIALS=new lL("google-credentials-uid"),lL.FIRST_PARTY=new lL("first-party-uid"),lL.MOCK_USER=new lL("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let lM="9.12.1",lU=new ea("@firebase/firestore");function lF(){return lU.logLevel}function lV(e,...t){if(lU.logLevel<=sg.DEBUG){let n=t.map(lj);lU.debug(`Firestore (${lM}): ${e}`,...n)}}function lB(e,...t){if(lU.logLevel<=sg.ERROR){let n=t.map(lj);lU.error(`Firestore (${lM}): ${e}`,...n)}}function lq(e,...t){if(lU.logLevel<=sg.WARN){let n=t.map(lj);lU.warn(`Firestore (${lM}): ${e}`,...n)}}function lj(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lG(e="Unexpected state"){let t=`FIRESTORE (${lM}) INTERNAL ASSERTION FAILED: `+e;throw lB(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let lz={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lK extends F{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class l${constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lH{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lW{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(lL.UNAUTHENTICATED))}shutdown(){}}class lQ{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lY{constructor(e){this.t=e,this.currentUser=lL.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new l$;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new l$,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{lV("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(lV("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new l$)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>{var n;return this.i!==e?(lV("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||lG(),new lH(t.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||lG(),new lL(e)}}class lX{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=lL.FIRST_PARTY,this.p=new Map}I(){var e;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&lG(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class lJ{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new lX(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(lL.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lZ{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let n=e=>{null!=e.error&&lV("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.A;return this.A=e.token,lV("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{lV("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):lV("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>{var t;return e?("string"==typeof e.token||lG(),this.A=e.token,new lZ(e.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function l1(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class l2{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=l1(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function l4(e,t){return e<t?-1:e>t?1:0}function l3(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function l6(e){return e+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class l5{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new lK(lz.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new lK(lz.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return l5.fromMillis(Date.now())}static fromDate(e){return l5.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new l5(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?l4(this.nanoseconds,e.nanoseconds):l4(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class l8{constructor(e){this.timestamp=e}static fromTimestamp(e){return new l8(e)}static min(){return new l8(new l5(0,0))}static max(){return new l8(new l5(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class l9{constructor(e,t,n){void 0===t?t=0:t>e.length&&lG(),void 0===n?n=e.length-t:n>e.length-t&&lG(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===l9.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof l9?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let i=e.get(r),s=t.get(r);if(i<s)return -1;if(i>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class l7 extends l9{construct(e,t,n){return new l7(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new lK(lz.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new l7(t)}static emptyPath(){return new l7([])}}let ue=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends l9{construct(e,t,n){return new ut(e,t,n)}static isValidIdentifier(e){return ue.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new lK(lz.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let a=e[r];if("\\"===a){if(r+1===e.length)throw new lK(lz.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[r+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new lK(lz.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,r+=2}else"`"===a?(s=!s,r++):"."!==a||s?(n+=a,r++):(i(),r++)}if(i(),s)throw new lK(lz.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(t)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class un{constructor(e){this.path=e}static fromPath(e){return new un(l7.fromString(e))}static fromName(e){return new un(l7.fromString(e).popFirst(5))}static empty(){return new un(l7.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===l7.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return l7.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new un(new l7(e.slice()))}}/**
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
 */ class ur{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function ui(e){return e.fields.find(e=>2===e.kind)}function us(e){return e.fields.filter(e=>2!==e.kind)}ur.UNKNOWN_ID=-1;class ua{constructor(e,t){this.fieldPath=e,this.kind=t}}class uo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new uo(0,uh.min())}}function ul(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=l8.fromTimestamp(1e9===r?new l5(n+1,0):new l5(n,r));return new uh(i,un.empty(),t)}function uu(e){return new uh(e.readTime,e.key,-1)}class uh{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new uh(l8.min(),un.empty(),-1)}static max(){return new uh(l8.max(),un.empty(),-1)}}function uc(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=un.comparator(e.documentKey,t.documentKey))?n:l4(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function up(e){if(e.code!==lz.FAILED_PRECONDITION||e.message!==ud)throw e;lV("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class um{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&lG(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new um((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof um?t:um.resolve(t)}catch(n){return um.reject(n)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):um.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):um.reject(t)}static resolve(e){return new um((t,n)=>{t(e)})}static reject(e){return new um((t,n)=>{n(e)})}static waitFor(e){return new um((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=um.resolve(!1);for(let n of e)t=t.next(e=>e?um.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new um((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new um((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ug{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new l$,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new uw(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{let n=uE(t.target.error);this.P.reject(new uw(e,n))}}static open(e,t,n,r){try{return new ug(t,e.transaction(r,n))}catch(i){throw new uw(t,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(lV("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new uI(t)}}class uy{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===uy.D(S())&&lB("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return lV("SimpleDb","Removing database:",e),ub(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!N())return!1;if(uy.N())return!0;let e=S(),t=uy.D(e),n=uy.k(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static N(){var e;return void 0!==lO&&"YES"===(null===(e=lO.env)||void 0===e?void 0:e.O)}static M(e,t){return e.store(t)}static D(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){let t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(lV("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{let n=e.target.result;t(n)},r.onblocked=()=>{n(new uw(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new lK(lz.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new lK(lz.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new uw(e,r))},r.onupgradeneeded=e=>{lV("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next(()=>{lV("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.F(e);let a=ug.open(this.db,e,i?"readonly":"readwrite",n),o=r(a).next(e=>(a.V(),e)).catch(e=>(a.abort(e),um.reject(e))).toPromise();return o.catch(()=>{}),await a.v,o}catch(u){let l="FirebaseError"!==u.name&&s<3;if(lV("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class uv{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return ub(this.U.delete())}}class uw extends lK{constructor(e,t){super(lz.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function u_(e){return"IndexedDbTransactionError"===e.name}class uI{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(lV("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(lV("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ub(n)}add(e){return lV("SimpleDb","ADD",this.store.name,e,e),ub(this.store.add(e))}get(e){return ub(this.store.get(e)).next(t=>(void 0===t&&(t=null),lV("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return lV("SimpleDb","DELETE",this.store.name,e),ub(this.store.delete(e))}count(){return lV("SimpleDb","COUNT",this.store.name),ub(this.store.count())}W(e,t){let n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){let r=this.cursor(n),i=[];return this.H(r,(e,t)=>{i.push(t)}).next(()=>i)}{let s=this.store.getAll(n.range);return new um((e,t)=>{s.onerror=e=>{t(e.target.error)},s.onsuccess=t=>{e(t.target.result)}})}}J(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new um((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){lV("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.X=!1;let r=this.cursor(n);return this.H(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.H(r,t)}tt(e){let t=this.cursor({});return new um((n,r)=>{t.onerror=e=>{let t=uE(e.target.error);r(t)},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){let n=[];return new um((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new uv(i),a=t(i.primaryKey,i.value,s);if(a instanceof um){let o=a.catch(e=>(s.done(),um.reject(e)));n.push(o)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}}).next(()=>um.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ub(e){return new um((t,n)=>{e.onsuccess=e=>{let n=e.target.result;t(n)},e.onerror=e=>{let t=uE(e.target.error);n(t)}})}let uT=!1;function uE(e){let t=uy.D(S());if(t>=12.2&&t<13){let n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){let r=new lK("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return uT||(uT=!0,setTimeout(()=>{throw r},0)),r}}return e}class uS{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){lV("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{lV("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){u_(e)?lV("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await up(e)}await this.nt(6e4)})}}class uk{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){let n=new Set,r=t,i=!0;return um.doWhile(()=>!0===i&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return lV("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,r).next(e=>{r-=e,n.add(t)});i=!1})).next(()=>t-r)}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{let i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.ot(r,n)).next(n=>(lV("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>i.size)}))}ot(e,t){let n=e;return t.changes.forEach((e,t)=>{let r=uu(t);uc(r,n)>0&&(n=r)}),new uh(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */ class uA{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uC(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function uR(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function uN(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ uA.at=-1;class uD{constructor(e,t){this.comparator=e,this.root=t||uO.EMPTY}insert(e,t){return new uD(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,uO.BLACK,null,null))}remove(e){return new uD(this.comparator,this.root.remove(e,this.comparator).copy(null,null,uO.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ux(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ux(this.root,e,this.comparator,!1)}getReverseIterator(){return new ux(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ux(this.root,e,this.comparator,!0)}}class ux{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class uO{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:uO.RED,this.left=null!=r?r:uO.EMPTY,this.right=null!=i?i:uO.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new uO(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return uO.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return uO.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,uO.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,uO.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw lG();let e=this.left.check();if(e!==this.right.check())throw lG();return e+(this.isRed()?0:1)}}uO.EMPTY=null,uO.RED=!0,uO.BLACK=!1,uO.EMPTY=new class{constructor(){this.size=0}get key(){throw lG()}get value(){throw lG()}get color(){throw lG()}get left(){throw lG()}get right(){throw lG()}copy(e,t,n,r,i){return this}insert(e,t,n){return new uO(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uP{constructor(e){this.comparator=e,this.data=new uD(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uL(this.data.getIterator())}getIteratorFrom(e){return new uL(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof uP)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(r,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new uP(this.comparator);return t.data=e,t}}class uL{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function uM(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uU{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new uU([])}unionWith(e){let t=new uP(ut.comparator);for(let n of this.fields)t=t.add(n);for(let r of e)t=t.add(r);return new uU(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return l3(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uF{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new uF(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new uF(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return l4(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}uF.EMPTY_BYTE_STRING=new uF("");let uV=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function uB(e){if(!e&&lG(),"string"==typeof e){let t=0,n=uV.exec(e);if(!n&&lG(),n[1]){let r=n[1];t=Number(r=(r+"000000000").substr(0,9))}let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:uq(e.seconds),nanos:uq(e.nanos)}}function uq(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function uj(e){return"string"==typeof e?uF.fromBase64String(e):uF.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uG(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function uz(e){let t=uB(e.mapValue.fields.__local_write_time__.timestampValue);return new l5(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uK{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class u${constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new u$("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof u$&&e.projectId===this.projectId&&e.database===this.database}}function uH(e){return null==e}function uW(e){return 0===e&&1/e==-1/0}function uQ(e){return"number"==typeof e&&Number.isInteger(e)&&!uW(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let uY={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},uX={nullValue:"NULL_VALUE"};function uJ(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?uG(e)?4:ht(e)?9007199254740991:10:lG()}function uZ(e,t){var n,r,i,s;if(e===t)return!0;let a=uJ(e);if(a!==uJ(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return uz(e).isEqual(uz(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=uB(e.timestampValue),r=uB(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return uj(e.bytesValue).isEqual(uj(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return uq(e.geoPointValue.latitude)===uq(t.geoPointValue.latitude)&&uq(e.geoPointValue.longitude)===uq(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return uq(e.integerValue)===uq(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=uq(e.doubleValue),r=uq(t.doubleValue);return n===r?uW(n)===uW(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return l3(e.arrayValue.values||[],t.arrayValue.values||[],uZ);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(uC(n)!==uC(r))return!1;for(let i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!uZ(n[i],r[i])))return!1;return!0}(e,t);default:return lG()}}function u0(e,t){return void 0!==(e.values||[]).find(e=>uZ(e,t))}function u1(e,t){if(e===t)return 0;let n=uJ(e),r=uJ(t);if(n!==r)return l4(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return l4(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=uq(e.integerValue||e.doubleValue),r=uq(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return u2(e.timestampValue,t.timestampValue);case 4:return u2(uz(e),uz(t));case 5:return l4(e.stringValue,t.stringValue);case 6:return function(e,t){let n=uj(e),r=uj(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){let s=l4(n[i],r[i]);if(0!==s)return s}return l4(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=l4(uq(e.latitude),uq(t.latitude));return 0!==n?n:l4(uq(e.longitude),uq(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){let s=u1(n[i],r[i]);if(s)return s}return l4(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===uY.mapValue&&t===uY.mapValue)return 0;if(e===uY.mapValue)return 1;if(t===uY.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){let o=l4(r[a],s[a]);if(0!==o)return o;let l=u1(n[r[a]],i[s[a]]);if(0!==l)return l}return l4(r.length,s.length)}(e.mapValue,t.mapValue);default:throw lG()}}function u2(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return l4(e,t);let n=uB(e),r=uB(t),i=l4(n.seconds,r.seconds);return 0!==i?i:l4(n.nanos,r.nanos)}function u4(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=uB(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?uj(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,un.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=u4(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${u4(e.fields[i])}`;return n+"}"}(e.mapValue):lG()}function u3(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function u6(e){return!!e&&"integerValue"in e}function u5(e){return!!e&&"arrayValue"in e}function u8(e){return!!e&&"nullValue"in e}function u9(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function u7(e){return!!e&&"mapValue"in e}function he(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return uR(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=he(n)),t}if(e.arrayValue){let n={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=he(e.arrayValue.values[r]);return n}return Object.assign({},e)}function ht(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function hn(e){return"nullValue"in e?uX:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?u3(u$.empty(),un.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:lG()}function hr(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?u3(u$.empty(),un.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?uY:lG()}function hi(e,t){let n=u1(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function hs(e,t){let n=u1(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ha{constructor(e){this.value=e}static empty(){return new ha({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!u7(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=he(t)}setAll(e){let t=ut.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let s=this.getFieldsMap(t);this.applyChanges(s,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=he(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());u7(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return uZ(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];u7(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(uR(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new ha(he(this.value))}}function ho(e){let t=[];return uR(e.fields,(e,n)=>{let r=new ut([e]);if(u7(n)){let i=ho(n.mapValue).fields;if(0===i.length)t.push(r);else for(let s of i)t.push(r.child(s))}else t.push(r)}),new uU(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hl{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new hl(e,0,l8.min(),l8.min(),ha.empty(),0)}static newFoundDocument(e,t,n){return new hl(e,1,t,l8.min(),n,0)}static newNoDocument(e,t){return new hl(e,2,t,l8.min(),ha.empty(),0)}static newUnknownDocument(e,t){return new hl(e,3,t,l8.min(),ha.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ha.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ha.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=l8.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof hl&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hl(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hu{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ht=null}}function hh(e,t=null,n=[],r=[],i=null,s=null,a=null){return new hu(e,t,n,r,i,s,a)}function hc(e){var t;let n=e;if(null===n.ht){let r=n.path.canonicalString();null!==n.collectionGroup&&(r+="|cg:"+n.collectionGroup),r+="|f:",r+=n.filters.map(e=>{var t;return e.field.canonicalString()+e.op.toString()+u4(t=e.value)}).join(","),r+="|ob:",r+=n.orderBy.map(e=>{var t;return e.field.canonicalString()+e.dir}).join(","),uH(n.limit)||(r+="|l:",r+=n.limit),n.startAt&&(r+="|lb:",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(e=>{var t;return u4(e)}).join(",")),n.endAt&&(r+="|ub:",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(e=>{var t;return u4(e)}).join(",")),n.ht=r}return n.ht}function hd(e,t){var n,r;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!hC(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!uZ(n.value,r.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!hN(e.startAt,t.startAt)&&hN(e.endAt,t.endAt)}function hf(e){return un.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function hp(e,t){return e.filters.filter(e=>e instanceof hy&&e.field.isEqual(t))}function hm(e,t,n){let r=uX,i=!0;for(let s of hp(e,t)){let a=uX,o=!0;switch(s.op){case"<":case"<=":a=hn(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,o=!1;break;case"!=":case"not-in":a=uX}0>hi({value:r,inclusive:i},{value:a,inclusive:o})&&(r=a,i=o)}if(null!==n){for(let l=0;l<e.orderBy.length;++l)if(e.orderBy[l].field.isEqual(t)){let u=n.position[l];0>hi({value:r,inclusive:i},{value:u,inclusive:n.inclusive})&&(r=u,i=n.inclusive);break}}return{value:r,inclusive:i}}function hg(e,t,n){let r=uY,i=!0;for(let s of hp(e,t)){let a=uY,o=!0;switch(s.op){case">=":case">":a=hr(s.value),o=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,o=!1;break;case"!=":case"not-in":a=uY}hs({value:r,inclusive:i},{value:a,inclusive:o})>0&&(r=a,i=o)}if(null!==n){for(let l=0;l<e.orderBy.length;++l)if(e.orderBy[l].field.isEqual(t)){let u=n.position[l];hs({value:r,inclusive:i},{value:u,inclusive:n.inclusive})>0&&(r=u,i=n.inclusive);break}}return{value:r,inclusive:i}}class hy extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new hv(e,t,n):"array-contains"===t?new hb(e,n):"in"===t?new hT(e,n):"not-in"===t?new hE(e,n):"array-contains-any"===t?new hS(e,n):new hy(e,t,n)}static lt(e,t,n){return"in"===t?new hw(e,n):new h_(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(u1(t,this.value)):null!==t&&uJ(this.value)===uJ(t)&&this.ft(u1(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return lG()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hv extends hy{constructor(e,t,n){super(e,t,n),this.key=un.fromName(n.referenceValue)}matches(e){let t=un.comparator(e.key,this.key);return this.ft(t)}}class hw extends hy{constructor(e,t){super(e,"in",t),this.keys=hI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class h_ extends hy{constructor(e,t){super(e,"not-in",t),this.keys=hI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function hI(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>un.fromName(e.referenceValue))}class hb extends hy{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return u5(t)&&u0(t.arrayValue,this.value)}}class hT extends hy{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&u0(this.value.arrayValue,t)}}class hE extends hy{constructor(e,t){super(e,"not-in",t)}matches(e){if(u0(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!u0(this.value.arrayValue,t)}}class hS extends hy{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!u5(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>u0(this.value.arrayValue,e))}}class hk{constructor(e,t){this.position=e,this.inclusive=t}}class hA{constructor(e,t="asc"){this.field=e,this.dir=t}}function hC(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function hR(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?un.comparator(un.fromName(a.referenceValue),n.key):u1(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function hN(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!uZ(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hD{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function hx(e,t,n,r,i,s,a,o){return new hD(e,t,n,r,i,s,a,o)}function hO(e){return new hD(e)}function hP(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function hL(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function hM(e){for(let t of e.filters)if(t.dt())return t.field;return null}function hU(e){return null!==e.collectionGroup}function hF(e){var t;let n=e;if(null===n._t){n._t=[];let r=hM(n),i=hL(n);if(null!==r&&null===i)r.isKeyField()||n._t.push(new hA(r)),n._t.push(new hA(ut.keyField(),"asc"));else{let s=!1;for(let a of n.explicitOrderBy)n._t.push(a),a.field.isKeyField()&&(s=!0);if(!s){let o=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc";n._t.push(new hA(ut.keyField(),o))}}}return n._t}function hV(e){var t;let n=e;if(!n.wt){if("F"===n.limitType)n.wt=hh(n.path,n.collectionGroup,hF(n),n.filters,n.limit,n.startAt,n.endAt);else{let r=[];for(let i of hF(n)){let s="desc"===i.dir?"asc":"desc";r.push(new hA(i.field,s))}let a=n.endAt?new hk(n.endAt.position,n.endAt.inclusive):null,o=n.startAt?new hk(n.startAt.position,n.startAt.inclusive):null;n.wt=hh(n.path,n.collectionGroup,r,n.filters,n.limit,a,o)}}return n.wt}function hB(e,t,n){return new hD(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function hq(e,t){return hd(hV(e),hV(t))&&e.limitType===t.limitType}function hj(e){return`${hc(hV(e))}|lt:${e.limitType}`}function hG(e){var t;let n;return`Query(target=${n=(t=hV(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>{var t;return`${e.field.canonicalString()} ${e.op} ${u4(t=e.value)}`}).join(", ")}]`),uH(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>{var t;return`${e.field.canonicalString()} (${e.dir})`}).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(e=>{var t;return u4(e)}).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(e=>{var t;return u4(e)}).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function hz(e,t){var n,r;return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):un.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=hR(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,hF(e),t))&&(!e.endAt||!!function(e,t,n){let r=hR(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,hF(e),t))}function hK(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function h$(e){return(t,n)=>{let r=!1;for(let i of hF(e)){let s=hH(i,t,n);if(0!==s)return s;r=r||i.field.isKeyField()}return 0}}function hH(e,t,n){let r=e.field.isKeyField()?un.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?u1(r,i):lG()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return lG()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hW(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uW(t)?"-0":t}}function hQ(e){return{integerValue:""+e}}function hY(e,t){return uQ(t)?hQ(t):hW(e,t)}/**
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
 */ class hX{constructor(){this._=void 0}}function hJ(e,t,n){return e instanceof h1?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof h2?h4(e,t):e instanceof h3?h6(e,t):function(e,t){let n=h0(e,t),r=h8(n)+h8(e.yt);return u6(n)&&u6(e.yt)?hQ(r):hW(e.It,r)}(e,t)}function hZ(e,t,n){return e instanceof h2?h4(e,t):e instanceof h3?h6(e,t):n}function h0(e,t){var n;return e instanceof h5?u6(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class h1 extends hX{}class h2 extends hX{constructor(e){super(),this.elements=e}}function h4(e,t){let n=h9(t);for(let r of e.elements)n.some(e=>uZ(e,r))||n.push(r);return{arrayValue:{values:n}}}class h3 extends hX{constructor(e){super(),this.elements=e}}function h6(e,t){let n=h9(t);for(let r of e.elements)n=n.filter(e=>!uZ(e,r));return{arrayValue:{values:n}}}class h5 extends hX{constructor(e,t){super(),this.It=e,this.yt=t}}function h8(e){return uq(e.integerValue||e.doubleValue)}function h9(e){return u5(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class h7{constructor(e,t){this.field=e,this.transform=t}}class ce{constructor(e,t){this.version=e,this.transformResults=t}}class ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ct}static exists(e){return new ct(void 0,e)}static updateTime(e){return new ct(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class cr{}function ci(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new cp(e.key,ct.none()):new cu(e.key,e.data,ct.none());{let n=e.data,r=ha.empty(),i=new uP(ut.comparator);for(let s of t.fields)if(!i.has(s)){let a=n.field(s);null===a&&s.length>1&&(s=s.popLast(),a=n.field(s)),null===a?r.delete(s):r.set(s,a),i=i.add(s)}return new ch(e.key,r,new uU(i.toArray()),ct.none())}}function cs(e,t,n){e instanceof cu?function(e,t,n){let r=e.value.clone(),i=cd(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ch?function(e,t,n){if(!cn(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=cd(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(cc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ca(e,t,n,r){var i,s,a;return e instanceof cu?function(e,t,n,r){if(!cn(e.precondition,t))return n;let i=e.value.clone(),s=cf(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ch?function(e,t,n,r){if(!cn(e.precondition,t))return n;let i=cf(e.fieldTransforms,r,t),s=t.data;return(s.setAll(cc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):cn(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function co(e,t){let n=null;for(let r of e.fieldTransforms){let i=t.data.field(r.field),s=h0(r.transform,i||null);null!=s&&(null===n&&(n=ha.empty()),n.set(r.field,s))}return n||null}function cl(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&l3(n,r,(e,t)=>{var n,r,i,s;return e.field.isEqual(t.field)&&(i=e.transform,s=t.transform,i instanceof h2&&s instanceof h2||i instanceof h3&&s instanceof h3?l3(i.elements,s.elements,uZ):i instanceof h5&&s instanceof h5?uZ(i.yt,s.yt):i instanceof h1&&s instanceof h1)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class cu extends cr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ch extends cr{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cc(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function cd(e,t,n){var r;let i=new Map;(r=e.length===n.length)||lG();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,hZ(o,l,n[s]))}return i}function cf(e,t,n){let r=new Map;for(let i of e){let s=i.transform,a=n.data.field(i.field);r.set(i.field,hJ(s,a,t))}return r}class cp extends cr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cm extends cr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cg{constructor(e){this.count=e}}function cy(e){switch(e){default:return lG();case lz.CANCELLED:case lz.UNKNOWN:case lz.DEADLINE_EXCEEDED:case lz.RESOURCE_EXHAUSTED:case lz.INTERNAL:case lz.UNAVAILABLE:case lz.UNAUTHENTICATED:return!1;case lz.INVALID_ARGUMENT:case lz.NOT_FOUND:case lz.ALREADY_EXISTS:case lz.PERMISSION_DENIED:case lz.FAILED_PRECONDITION:case lz.ABORTED:case lz.OUT_OF_RANGE:case lz.UNIMPLEMENTED:case lz.DATA_LOSS:return!0}}function cv(e){if(void 0===e)return lB("GRPC error has no .code"),lz.UNKNOWN;switch(e){case d.OK:return lz.OK;case d.CANCELLED:return lz.CANCELLED;case d.UNKNOWN:return lz.UNKNOWN;case d.DEADLINE_EXCEEDED:return lz.DEADLINE_EXCEEDED;case d.RESOURCE_EXHAUSTED:return lz.RESOURCE_EXHAUSTED;case d.INTERNAL:return lz.INTERNAL;case d.UNAVAILABLE:return lz.UNAVAILABLE;case d.UNAUTHENTICATED:return lz.UNAUTHENTICATED;case d.INVALID_ARGUMENT:return lz.INVALID_ARGUMENT;case d.NOT_FOUND:return lz.NOT_FOUND;case d.ALREADY_EXISTS:return lz.ALREADY_EXISTS;case d.PERMISSION_DENIED:return lz.PERMISSION_DENIED;case d.FAILED_PRECONDITION:return lz.FAILED_PRECONDITION;case d.ABORTED:return lz.ABORTED;case d.OUT_OF_RANGE:return lz.OUT_OF_RANGE;case d.UNIMPLEMENTED:return lz.UNIMPLEMENTED;case d.DATA_LOSS:return lz.DATA_LOSS;default:return lG()}}(f=d||(d={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cw{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){uR(this.inner,(t,n)=>{for(let[r,i]of n)e(r,i)})}isEmpty(){return uN(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let c_=new uD(un.comparator),cI=new uD(un.comparator);function cb(...e){let t=cI;for(let n of e)t=t.insert(n.key,n);return t}function cT(e){let t=cI;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function cE(){return ck()}function cS(){return ck()}function ck(){return new cw(e=>e.toString(),(e,t)=>e.isEqual(t))}let cA=new uD(un.comparator),cC=new uP(un.comparator);function cR(...e){let t=cC;for(let n of e)t=t.add(n);return t}let cN=new uP(l4);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cD{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,cx.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new cD(l8.min(),r,cN,c_,cR())}}class cx{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new cx(n,t,cR(),cR(),cR())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cO{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class cP{constructor(e,t){this.targetId=e,this.At=t}}class cL{constructor(e,t,n=uF.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class cM{constructor(){this.Rt=0,this.bt=cV(),this.Pt=uF.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=cR(),t=cR(),n=cR();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:lG()}}),new cx(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=cV()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class cU{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=c_,this.qt=cF(),this.Kt=new uP(l4)}Gt(e){for(let t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(let n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{let n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:lG()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((e,n)=>{this.Ht(n)&&t(n)})}Yt(e){let t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){let i=r.target;if(hf(i)){if(0===n){let s=new un(i.path);this.jt(t,s,hl.newNoDocument(s,l8.min()))}else{var a;(a=1===n)||lG()}}else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){let t=new Map;this.Lt.forEach((n,r)=>{let i=this.Xt(r);if(i){if(n.current&&hf(i.target)){let s=new un(i.target.path);null!==this.Ut.get(s)||this.ee(r,s)||this.jt(r,s,hl.newNoDocument(s,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}});let n=cR();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Ut.forEach((t,n)=>n.setReadTime(e));let r=new cD(e,t,this.Kt,this.Ut,n);return this.Ut=c_,this.qt=cF(),this.Kt=new uP(l4),r}Qt(e,t){if(!this.Ht(e))return;let n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;let r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){let t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new cM,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new uP(l4),this.qt=this.qt.insert(e,t)),t}Ht(e){let t=null!==this.Xt(e);return t||lV("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new cM),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function cF(){return new uD(un.comparator)}function cV(){return new uD(un.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cB={asc:"ASCENDING",desc:"DESCENDING"},cq={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class cj{constructor(e,t){this.databaseId=e,this.gt=t}}function cG(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function cz(e,t){return e.gt?t.toBase64():t.toUint8Array()}function cK(e){return!e&&lG(),l8.fromTimestamp(function(e){let t=uB(e);return new l5(t.seconds,t.nanos)}(e))}function c$(e,t){var n;return new l7(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function cH(e){var t;let n=l7.fromString(e);return c7(n)||lG(),n}function cW(e,t){return c$(e.databaseId,t.path)}function cQ(e,t){let n=cH(t);if(n.get(1)!==e.databaseId.projectId)throw new lK(lz.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new lK(lz.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new un(cZ(n))}function cY(e,t){return c$(e.databaseId,t)}function cX(e){let t=cH(e);return 4===t.length?l7.emptyPath():cZ(t)}function cJ(e){return new l7(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function cZ(e){var t;return e.length>4&&"documents"===e.get(4)||lG(),e.popFirst(5)}function c0(e,t,n){return{name:cW(e,t),fields:n.value.mapValue.fields}}function c1(e,t,n){let r=cQ(e,t.name),i=cK(t.updateTime),s=new ha({mapValue:{fields:t.fields}}),a=hl.newFoundDocument(r,i,s);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function c2(e,t){var n,r,i,s;let a;if(t instanceof cu)a={update:c0(e,t.key,t.value)};else if(t instanceof cp)a={delete:cW(e,t.key)};else if(t instanceof ch)a={update:c0(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof cm))return lG();a={verify:cW(e,t.key)}}return t.fieldTransforms.length>0&&(a.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof h1)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof h2)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof h3)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof h5)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw lG()})(0,e))),t.precondition.isNone||(a.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:cG(e,(s=r.updateTime).toTimestamp())}:void 0!==r.exists?{exists:r.exists}:lG()),a}function c4(e,t){var n;let r=t.currentDocument?void 0!==(n=t.currentDocument).updateTime?ct.updateTime(cK(n.updateTime)):void 0!==n.exists?ct.exists(n.exists):ct.none():ct.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t){var r;"REQUEST_TIME"===t.setToServerValue||lG(),n=new h1}else if("appendMissingElements"in t){let i=t.appendMissingElements.values||[];n=new h2(i)}else if("removeAllFromArray"in t){let s=t.removeAllFromArray.values||[];n=new h3(s)}else"increment"in t?n=new h5(e,t.increment):lG();let a=ut.fromServerFormat(t.fieldPath);return new h7(a,n)})(e,t)):[];if(t.update){t.update.name;let s=cQ(e,t.update.name),a=new ha({mapValue:{fields:t.update.fields}});if(t.updateMask){let o=function(e){let t=e.fieldPaths||[];return new uU(t.map(e=>ut.fromServerFormat(e)))}(t.updateMask);return new ch(s,a,o,r,i)}return new cu(s,a,r,i)}if(t.delete){let l=cQ(e,t.delete);return new cp(l,r)}if(t.verify){let u=cQ(e,t.verify);return new cm(u,r)}return lG()}function c3(e,t){return{documents:[cY(e,t.path)]}}function c6(e,t){var n,r,i,s;let a={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(a.parent=cY(e,o),a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a.parent=cY(e,o.popLast()),a.structuredQuery.from=[{collectionId:o.lastSegment()}]);let l=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){var t;if("=="===e.op){if(u9(e.value))return{unaryFilter:{field:c8(e.field),op:"IS_NAN"}};if(u8(e.value))return{unaryFilter:{field:c8(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(u9(e.value))return{unaryFilter:{field:c8(e.field),op:"IS_NOT_NAN"}};if(u8(e.value))return{unaryFilter:{field:c8(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:c8(e.field),op:(t=e.op,cq[t]),value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);l&&(a.structuredQuery.where=l);let u=function(e){if(0!==e.length)return e.map(e=>{var t,n;return{field:c8(e.field),direction:(n=e.dir,cB[n])}})}(t.orderBy);u&&(a.structuredQuery.orderBy=u);let h=(i=t.limit,e.gt||uH(i)?i:{value:i});return null!==h&&(a.structuredQuery.limit=h),t.startAt&&(a.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(a.structuredQuery.endAt={before:!(s=t.endAt).inclusive,values:s.position}),a}function c5(e){var t,n;let r=cX(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){(t=1===s)||lG();let o=i.from[0];o.allDescendants?a=o.collectionId:r=r.child(o.collectionId)}let l=[];i.where&&(l=function e(t){var n;return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=c9(e.unaryFilter.field);return hy.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=c9(e.unaryFilter.field);return hy.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=c9(e.unaryFilter.field);return hy.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=c9(e.unaryFilter.field);return hy.create(i,"!=",{nullValue:"NULL_VALUE"});default:return lG()}}(t)]:void 0!==t.fieldFilter?[(n=t,hy.create(c9(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return lG()}}(n.fieldFilter.op),n.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):lG():[]}(i.where));let u=[];i.orderBy&&(u=i.orderBy.map(e=>{var t;return new hA(c9(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}));let h=null,c;i.limit&&(h=uH(c="object"==typeof(n=i.limit)?n.value:n)?null:c);let d=null;i.startAt&&(d=function(e){let t=!!e.before,n=e.values||[];return new hk(n,t)}(i.startAt));let f=null;return i.endAt&&(f=function(e){let t=!e.before,n=e.values||[];return new hk(n,t)}(i.endAt)),hx(r,a,u,l,h,"F",d,f)}function c8(e){return{fieldPath:e.canonicalString()}}function c9(e){return ut.fromServerFormat(e.fieldPath)}function c7(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function de(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=dn(t)),t=dt(e.get(n),t);return dn(t)}function dt(e,t){let n=t,r=e.length;for(let i=0;i<r;i++){let s=e.charAt(i);switch(s){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=s}}return n}function dn(e){return e+"\x01\x01"}function dr(e){var t;let n=e.length;if(n>=2||lG(),2===n)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||lG(),l7.emptyPath();let r=n-2,i=[],s="";for(let a=0;a<n;){let o=e.indexOf("\x01",a);switch((o<0||o>r)&&lG(),e.charAt(o+1)){case"\x01":let l=e.substring(a,o),u;0===s.length?u=l:(s+=l,u=s,s=""),i.push(u);break;case"\x10":s+=e.substring(a,o),s+="\0";break;case"\x11":s+=e.substring(a,o+1);break;default:lG()}a=o+2}return new l7(i)}/**
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
 */ let di=["userId","batchId"];/**
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
 */ function ds(e,t){return[e,de(t)]}function da(e,t,n){return[e,de(t),n]}let dl={},du=["prefixPath","collectionGroup","readTime","documentId"],dh=["prefixPath","collectionGroup","documentId"],dc=["collectionGroup","readTime","prefixPath","documentId"],dd=["canonicalId","targetId"],df=["targetId","path"],dp=["path","targetId"],dm=["collectionId","parent"],dg=["indexId","uid"],dy=["uid","sequenceNumber"],dv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],dw=["indexId","uid","orderedDocumentKey"],d_=["userId","collectionPath","documentId"],dI=["userId","collectionPath","largestBatchId"],db=["userId","collectionGroup","largestBatchId"],dT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],dE=[...dT,"documentOverlays"],dS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],dk=[...dS,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dA extends uf{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function dC(e,t){var n;return uy.M(e.ie,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dR{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let i=this.mutations[r];i.key.isEqual(e.key)&&cs(i,e,n[r])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=ca(n,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=ca(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=cS();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=ci(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(l8.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),cR())}isEqual(e){return this.batchId===e.batchId&&l3(this.mutations,e.mutations,(e,t)=>cl(e,t))&&l3(this.baseMutations,e.baseMutations,(e,t)=>cl(e,t))}}class dN{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){var r;(r=e.mutations.length===n.length)||lG();let i=cA,s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new dN(e,t,n,i)}}/**
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
 */ class dD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */ class dx{constructor(e,t,n,r,i=l8.min(),s=l8.min(),a=uF.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new dx(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new dx(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dx(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dO{constructor(e){this.re=e}}function dP(e,t){let n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:dL(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i,s;r.document={name:cW(i=e.re,t.key),fields:t.data.value.mapValue.fields,updateTime:cG(i,t.version.toTimestamp())}}else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:dM(t.version)};else{if(!t.isUnknownDocument())return lG();r.unknownDocument={path:n.path.toArray(),version:dM(t.version)}}return r}function dL(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function dM(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function dU(e){let t=new l5(e.seconds,e.nanoseconds);return l8.fromTimestamp(t)}function dF(e,t){let n=(t.baseMutations||[]).map(t=>c4(e.re,t));for(let r=0;r<t.mutations.length-1;++r){let i=t.mutations[r];if(r+1<t.mutations.length&&void 0!==t.mutations[r+1].transform){let s=t.mutations[r+1];i.updateTransforms=s.transform.fieldTransforms,t.mutations.splice(r+1,1),++r}}let a=t.mutations.map(t=>c4(e.re,t)),o=l5.fromMillis(t.localWriteTimeMs);return new dR(t.batchId,o,n,a)}function dV(e){var t,n,r;let i=dU(e.readTime),s=void 0!==e.lastLimboFreeSnapshotVersion?dU(e.lastLimboFreeSnapshotVersion):l8.min(),a;return void 0!==e.query.documents?(1===(t=e.query).documents.length||lG(),a=hV(hO(cX(t.documents[0])))):a=hV(c5(r=e.query)),new dx(a,e.targetId,0,e.lastListenSequenceNumber,i,s,uF.fromBase64String(e.resumeToken))}function dB(e,t){let n=dM(t.snapshotVersion),r=dM(t.lastLimboFreeSnapshotVersion),i;i=hf(t.target)?c3(e.re,t.target):c6(e.re,t.target);let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:hc(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function dq(e){let t=c5({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?hB(t,t.limit,"L"):t}function dj(e,t){return new dD(t.largestBatchId,c4(e.re,t.overlayMutation))}function dG(e,t){let n=t.path.lastSegment();return[e,de(t.path.popLast()),n]}function dz(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:dM(r.readTime),documentKey:de(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dK{getBundleMetadata(e,t){return d$(e).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:dU(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return d$(e).put({bundleId:t.id,createTime:dM(cK(t.createTime)),version:t.version})}getNamedQuery(e,t){return dH(e).get(t).next(e=>{if(e)return{name:e.name,query:dq(e.bundledQuery),readTime:dU(e.readTime)}})}saveNamedQuery(e,t){var n;return dH(e).put({name:t.name,readTime:dM(cK(t.readTime)),bundledQuery:t.bundledQuery})}}function d$(e){return dC(e,"bundles")}function dH(e){return dC(e,"namedQueries")}/**
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
 */ class dW{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){let n=t.uid||"";return new dW(e,n)}getOverlay(e,t){return dQ(e).get(dG(this.userId,t)).next(e=>e?dj(this.It,e):null)}getOverlays(e,t){let n=cE();return um.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){let r=[];return n.forEach((n,i)=>{let s=new dD(t,i);r.push(this.ue(e,s))}),um.waitFor(r)}removeOverlaysForBatchId(e,t,n){let r=new Set;t.forEach(e=>r.add(de(e.getCollectionPath())));let i=[];return r.forEach(t=>{let r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(dQ(e).Y("collectionPathOverlayIndex",r))}),um.waitFor(i)}getOverlaysForCollection(e,t,n){let r=cE(),i=de(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return dQ(e).W("collectionPathOverlayIndex",s).next(e=>{for(let t of e){let n=dj(this.It,t);r.set(n.getKey(),n)}return r})}getOverlaysForCollectionGroup(e,t,n,r){let i=cE(),s,a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return dQ(e).Z({index:"collectionGroupOverlayIndex",range:a},(e,t,n)=>{let a=dj(this.It,t);i.size()<r||a.largestBatchId===s?(i.set(a.getKey(),a),s=a.largestBatchId):n.done()}).next(()=>i)}ue(e,t){return dQ(e).put(function(e,t,n){let[r,i,s]=dG(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:c2(e.re,n.mutation)}}(this.It,this.userId,t))}}function dQ(e){return dC(e,"documentOverlays")}/**
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
 */ class dY{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(uq(e.integerValue));else if("doubleValue"in e){let n=uq(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),uW(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){let r=e.timestampValue;this.le(t,20),"string"==typeof r?t.de(r):(t.de(`${r.seconds||""}`),t.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(uj(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.le(t,45),t.fe(i.latitude||0),t.fe(i.longitude||0)}else"mapValue"in e?ht(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):lG()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){let n=e.fields||{};for(let r of(this.le(t,55),Object.keys(n)))this._e(r,t),this.ae(n[r],t)}pe(e,t){let n=e.values||[];for(let r of(this.le(t,50),n))this.ae(r,t)}ge(e,t){this.le(t,37),un.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}function dX(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function dJ(e){let t=64-function(e){let t=0;for(let n=0;n<8;++n){let r=dX(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}dY.Te=new dY;class dZ{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Pe(n.value),n=t.next();this.ve()}Ve(e){for(let t of e){let n=t.charCodeAt(0);if(n<128)this.Ae(n);else if(n<2048)this.Ae(960|n>>>6),this.Ae(128|63&n);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|n>>>12),this.Ae(128|63&n>>>6),this.Ae(128|63&n);else{let r=t.codePointAt(0);this.Ae(240|r>>>18),this.Ae(128|63&r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r)}}this.Re()}Se(e){for(let t of e){let n=t.charCodeAt(0);if(n<128)this.Pe(n);else if(n<2048)this.Pe(960|n>>>6),this.Pe(128|63&n);else if(t<"\ud800"||"\udbff"<t)this.Pe(480|n>>>12),this.Pe(128|63&n>>>6),this.Pe(128|63&n);else{let r=t.codePointAt(0);this.Pe(240|r>>>18),this.Pe(128|63&r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r)}}this.ve()}De(e){let t=this.Ce(e),n=dJ(t);this.xe(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ne(e){let t=this.Ce(e),n=dJ(t);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ae(e){let t=255&e;0===t?(this.Oe(0),this.Oe(255)):255===t?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){let t=255&e;0===t?(this.Fe(0),this.Fe(255)):255===t?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class d0{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class d1{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class d2{constructor(){this.Be=new dZ,this.Le=new d0(this.Be),this.Ue=new d1(this.Be)}seed(e){this.Be.seed(e)}qe(e){return 0===e?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */ class d4{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ke(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new d4(this.indexId,this.documentKey,this.arrayValue,n)}}function d3(e,t){let n=e.indexId-t.indexId;return 0!==n?n:0!==(n=d6(e.arrayValue,t.arrayValue))?n:0!==(n=d6(e.directionalValue,t.directionalValue))?n:un.comparator(e.documentKey,t.documentKey)}function d6(e,t){for(let n=0;n<e.length&&n<t.length;++n){let r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}/**
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
 */ class d5{constructor(e){for(let t of(this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[],e.filters)){let n=t;n.dt()?this.je=n:this.Qe.push(n)}}We(e){let t=ui(e);if(void 0!==t&&!this.ze(t))return!1;let n=us(e),r=0,i=0;for(;r<n.length&&this.ze(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.je){let s=n[r];if(!this.He(this.je,s)||!this.Je(this.Ge[i++],s))return!1;++r}for(;r<n.length;++r){let a=n[r];if(i>=this.Ge.length||!this.Je(this.Ge[i++],a))return!1}return!0}ze(e){for(let t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class d8{constructor(){this.Ye=new d9}addToCollectionParentIndex(e,t){return this.Ye.add(t),um.resolve()}getCollectionParents(e,t){return um.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return um.resolve()}deleteFieldIndex(e,t){return um.resolve()}getDocumentsMatchingTarget(e,t){return um.resolve(null)}getIndexType(e,t){return um.resolve(0)}getFieldIndexes(e,t){return um.resolve([])}getNextCollectionGroupToUpdate(e){return um.resolve(null)}getMinOffset(e,t){return um.resolve(uh.min())}getMinOffsetFromCollectionGroup(e,t){return um.resolve(uh.min())}updateCollectionGroup(e,t,n){return um.resolve()}updateIndexEntries(e,t){return um.resolve()}}class d9{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new uP(l7.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new uP(l7.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let d7=new Uint8Array(0);class fe{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new d9,this.Ze=new cw(e=>hc(e),(e,t)=>hd(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){let n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Xe.add(t)});let i={collectionId:n,parent:de(r)};return ft(e).put(i)}return um.resolve()}getCollectionParents(e,t){let n=[],r=IDBKeyRange.bound([t,""],[l6(t),""],!1,!0);return ft(e).W(r).next(e=>{for(let r of e){if(r.collectionId!==t)break;n.push(dr(r.parent))}return n})}addFieldIndex(e,t){var n;let r=fr(e),i={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete i.indexId;let s=r.add(i);if(t.indexState){let a=fi(e);return s.next(e=>{a.put(dz(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let n=fr(e),r=fi(e),i=fn(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){let n=fn(e),r=!0,i=new Map;return um.forEach(this.tn(t),t=>this.en(e,t).next(e=>{r&&(r=!!e),i.set(t,e)})).next(()=>{if(r){let e=cR(),s=[];return um.forEach(i,(r,i)=>{lV("IndexedDbIndexManager",`Using index id=${r.indexId}|cg=${r.collectionGroup}|f=${r.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${hc(t)}`);let a=function(e,t){let n=ui(t);if(void 0===n)return null;for(let r of hp(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,r),o=function(e,t){let n=new Map;for(let r of us(t))for(let i of hp(e,r.fieldPath))switch(i.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),i.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),i.value),Array.from(n.values())}return null}(i,r),l=function(e,t){let n=[],r=!0;for(let i of us(t)){let s=0===i.kind?hm(e,i.fieldPath,e.startAt):hg(e,i.fieldPath,e.startAt);n.push(s.value),r&&(r=s.inclusive)}return new hk(n,r)}(i,r),u=function(e,t){let n=[],r=!0;for(let i of us(t)){let s=0===i.kind?hg(e,i.fieldPath,e.endAt):hm(e,i.fieldPath,e.endAt);n.push(s.value),r&&(r=s.inclusive)}return new hk(n,r)}(i,r),h=this.nn(r,i,l),c=this.nn(r,i,u),d=this.sn(r,i,o),f=this.rn(r.indexId,a,h,l.inclusive,c,u.inclusive,d);return um.forEach(f,r=>n.J(r,t.limit).next(t=>{t.forEach(t=>{let n=un.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),s.push(n))})}))}).next(()=>s)}return um.resolve(null)})}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,n,r,i,s,a){let o=(null!=t?t.length:1)*Math.max(n.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let h=0;h<o;++h){let c=t?this.on(t[h/l]):d7,d=this.un(e,c,n[h%l],r),f=this.cn(e,c,i[h%l],s),p=a.map(t=>this.un(e,c,t,!0));u.push(...this.createRange(d,f,p))}return u}un(e,t,n,r){let i=new d4(e,un.empty(),t,n);return r?i:i.Ke()}cn(e,t,n,r){let i=new d4(e,un.empty(),t,n);return r?i.Ke():i}en(e,t){let n=new d5(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(let r of e)n.We(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;return um.forEach(this.tn(t),t=>this.en(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new uP(ut.comparator),n=!1;for(let r of e.filters){let i=r;i.field.isKeyField()||("array-contains"===i.op||"array-contains-any"===i.op?n=!0:t=t.add(i.field))}for(let s of e.orderBy)s.field.isKeyField()||(t=t.add(s.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>n)}an(e,t){let n=new d2;for(let r of us(e)){let i=t.data.field(r.fieldPath);if(null==i)return null;let s=n.qe(r.kind);dY.Te.ce(i,s)}return n.$e()}on(e){let t=new d2;return dY.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){let n=new d2;return dY.Te.ce(u3(this.databaseId,t),n.qe(function(e){let t=us(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}sn(e,t,n){if(null===n)return[];let r=[];r.push(new d2);let i=0;for(let s of us(e)){let a=n[i++];for(let o of r)if(this.ln(t,s.fieldPath)&&u5(a))r=this.fn(r,s,a);else{let l=o.qe(s.kind);dY.Te.ce(a,l)}}return this.dn(r)}nn(e,t,n){return this.sn(e,t,n.position)}dn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}fn(e,t,n){let r=[...e],i=[];for(let s of n.arrayValue.values||[])for(let a of r){let o=new d2;o.seed(a.$e()),dY.Te.ce(s,o.qe(t.kind)),i.push(o)}return i}ln(e,t){return!!e.filters.find(e=>e instanceof hy&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let n=fr(e),r=fi(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next(e=>{let t=[];return um.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){let n=t?new uo(t.sequenceNumber,new uh(dU(t.readTime),new un(dr(t.documentKey)),t.largestBatchId)):uo.empty(),r=e.fields.map(([e,t])=>new ua(ut.fromServerFormat(e),t));return new ur(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:l4(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){let r=fr(e),i=fi(e);return this._n(e).next(e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>um.forEach(t,t=>i.put(dz(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){let n=new Map;return um.forEach(t,(t,r)=>{let i=n.get(t.collectionGroup);return(i?um.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(n.set(t.collectionGroup,i),um.forEach(i,n=>this.wn(e,t,n).next(t=>{let i=this.mn(r,n);return t.isEqual(i)?um.resolve():this.gn(e,r,n,t,i)}))))})}yn(e,t,n,r){return fn(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(n,t.key),documentKey:t.key.path.toArray()})}pn(e,t,n,r){return fn(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(n,t.key),t.key.path.toArray()])}wn(e,t,n){let r=fn(e),i=new uP(d3);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,t)])},(e,r)=>{i=i.add(new d4(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>i)}mn(e,t){let n=new uP(d3),r=this.an(t,e);if(null==r)return n;let i=ui(t);if(null!=i){let s=e.data.field(i.fieldPath);if(u5(s))for(let a of s.arrayValue.values||[])n=n.add(new d4(t.indexId,e.key,this.on(a),r))}else n=n.add(new d4(t.indexId,e.key,d7,r));return n}gn(e,t,n,r,i){lV("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);let s=[];return function(e,t,n,r,i){let s=e.getIterator(),a=t.getIterator(),o=uM(s),l=uM(a);for(;o||l;){let u=!1,h=!1;if(o&&l){let c=n(o,l);c<0?h=!0:c>0&&(u=!0)}else null!=o?h=!0:u=!0;u?(r(l),l=uM(a)):h?(i(o),o=uM(s)):(o=uM(s),l=uM(a))}}(r,i,d3,r=>{s.push(this.yn(e,t,n,r))},r=>{s.push(this.pn(e,t,n,r))}),um.waitFor(s)}_n(e){let t=1;return fi(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>d3(e,t)).filter((e,t,n)=>!t||0!==d3(e,n[t-1]));let r=[];for(let i of(r.push(e),n)){let s=d3(i,e),a=d3(i,t);if(0===s)r[0]=e.Ke();else if(s>0&&a<0)r.push(i),r.push(i.Ke());else if(a>0)break}r.push(t);let o=[];for(let l=0;l<r.length;l+=2)o.push(IDBKeyRange.bound([r[l].indexId,this.uid,r[l].arrayValue,r[l].directionalValue,d7,[]],[r[l+1].indexId,this.uid,r[l+1].arrayValue,r[l+1].directionalValue,d7,[]]));return o}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fs)}getMinOffset(e,t){return um.mapArray(this.tn(t),t=>this.en(e,t).next(e=>e||lG())).next(fs)}}function ft(e){return dC(e,"collectionParents")}function fn(e){return dC(e,"indexEntries")}function fr(e){return dC(e,"indexConfiguration")}function fi(e){return dC(e,"indexState")}function fs(e){var t;(t=0!==e.length)||lG();let n=e[0].indexState.offset,r=n.largestBatchId;for(let i=1;i<e.length;i++){let s=e[i].indexState.offset;0>uc(s,n)&&(n=s),r<s.largestBatchId&&(r=s.largestBatchId)}return new uh(n.readTime,n.documentKey,r)}/**
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
 */ let fa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class fo{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new fo(e,fo.DEFAULT_COLLECTION_PERCENTILE,fo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fl(e,t,n){let r=e.store("mutations"),i=e.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId),o=0,l=r.Z({range:a},(e,t,n)=>(o++,n.delete()));s.push(l.next(()=>{var e;(e=1===o)||lG()}));let u=[];for(let h of n.mutations){let c=da(t,h.key.path,n.batchId);s.push(i.delete(c)),u.push(h.key)}return um.waitFor(s).next(()=>u)}function fu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw lG();t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ fo.DEFAULT_COLLECTION_PERCENTILE=10,fo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fo.DEFAULT=new fo(41943040,fo.DEFAULT_COLLECTION_PERCENTILE,fo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fo.DISABLED=new fo(-1,0,0);class fh{constructor(e,t,n,r){this.userId=e,this.It=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static oe(e,t,n,r){var i;(i=""!==e.uid)||lG();let s=e.isAuthenticated()?e.uid:"";return new fh(s,t,n,r)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return fd(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){let i=ff(e),s=fd(e);return s.add({}).next(a=>{var o;"number"==typeof a||lG();let l=new dR(a,t,n,r),u=function(e,t,n){let r=n.baseMutations.map(t=>c2(e.re,t)),i=n.mutations.map(t=>c2(e.re,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.It,this.userId,l),h=[],c=new uP((e,t)=>l4(e.canonicalString(),t.canonicalString()));for(let d of r){let f=da(this.userId,d.key.path,a);c=c.add(d.key.path.popLast()),h.push(s.put(u)),h.push(i.put(f,dl))}return c.forEach(t=>{h.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.In[a]=l.keys()}),um.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return fd(e).get(t).next(e=>{var t;return e?(e.userId===this.userId||lG(),dF(this.It,e)):null})}Tn(e,t){return this.In[t]?um.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let n=e.keys();return this.In[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]),i=null;return fd(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{var s;t.userId===this.userId&&(t.batchId>=n||lG(),i=dF(this.It,t)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1;return fd(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return fd(e).W("userMutationsIndex",t).next(e=>e.map(e=>dF(this.It,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=ds(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return ff(e).Z({range:r},(n,r,s)=>{let[a,o,l]=n,u=dr(o);if(a===this.userId&&t.path.isEqual(u))return fd(e).get(l).next(e=>{var t;if(!e)throw lG();e.userId===this.userId||lG(),i.push(dF(this.It,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new uP(l4),r=[];return t.forEach(t=>{let i=ds(this.userId,t.path),s=IDBKeyRange.lowerBound(i),a=ff(e).Z({range:s},(e,r,i)=>{let[s,a,o]=e,l=dr(a);s===this.userId&&t.path.isEqual(l)?n=n.add(o):i.done()});r.push(a)}),um.waitFor(r).next(()=>this.En(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=ds(this.userId,n),s=IDBKeyRange.lowerBound(i),a=new uP(l4);return ff(e).Z({range:s},(e,t,i)=>{let[s,o,l]=e,u=dr(o);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(a=a.add(l)):i.done()}).next(()=>this.En(e,a))}En(e,t){let n=[],r=[];return t.forEach(t=>{r.push(fd(e).get(t).next(e=>{var t;if(null===e)throw lG();e.userId===this.userId||lG(),n.push(dF(this.It,e))}))}),um.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return fl(e.ie,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),um.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return um.resolve();let n=IDBKeyRange.lowerBound([this.userId]),r=[];return ff(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){let i=dr(e[1]);r.push(i)}else n.done()}).next(()=>{var e;(e=0===r.length)||lG()})})}containsKey(e,t){return fc(e,this.userId,t)}Rn(e){return fp(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function fc(e,t,n){let r=ds(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r),a=!1;return ff(e).Z({range:s,X:!0},(e,n,r)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),r.done()}).next(()=>a)}function fd(e){return dC(e,"mutations")}function ff(e){return dC(e,"documentMutations")}function fp(e){return dC(e,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fm{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new fm(0)}static vn(){return new fm(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fg{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next(t=>{let n=new fm(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(e=>l8.fromTimestamp(new l5(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>fy(e).delete(t.targetId)).next(()=>this.Vn(e)).next(t=>{var n;return t.targetCount>0||lG(),t.targetCount-=1,this.Sn(e,t)})}removeTargets(e,t,n){let r=0,i=[];return fy(e).Z((s,a)=>{let o=dV(a);o.sequenceNumber<=t&&null===n.get(o.targetId)&&(r++,i.push(this.removeTargetData(e,o)))}).next(()=>um.waitFor(i)).next(()=>r)}forEachTarget(e,t){return fy(e).Z((e,n)=>{let r=dV(n);t(r)})}Vn(e){return fv(e).get("targetGlobalKey").next(e=>(null!==e||lG(),e))}Sn(e,t){return fv(e).put("targetGlobalKey",t)}Dn(e,t){return fy(e).put(dB(this.It,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next(e=>e.targetCount)}getTargetData(e,t){let n=hc(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null;return fy(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{let s=dV(n);hd(t,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(e,t,n){let r=[],i=fw(e);return t.forEach(t=>{let s=de(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))}),um.waitFor(r)}removeMatchingKeys(e,t,n){let r=fw(e);return um.forEach(t,t=>{let i=de(t.path);return um.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){let n=fw(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),r=fw(e),i=cR();return r.Z({range:n,X:!0},(e,t,n)=>{let r=dr(e[1]),s=new un(r);i=i.add(s)}).next(()=>i)}containsKey(e,t){let n=de(t.path),r=IDBKeyRange.bound([n],[l6(n)],!1,!0),i=0;return fw(e).Z({index:"documentTargetsIndex",X:!0,range:r},([e,t],n,r)=>{0!==e&&(i++,r.done())}).next(()=>i>0)}se(e,t){return fy(e).get(t).next(e=>e?dV(e):null)}}function fy(e){return dC(e,"targets")}function fv(e){return dC(e,"targetGlobal")}function fw(e){return dC(e,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function f_([e,t],[n,r]){let i=l4(e,n);return 0===i?l4(t,r):i}class fI{constructor(e){this.xn=e,this.buffer=new uP(f_),this.Nn=0}kn(){return++this.Nn}On(e){let t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{let n=this.buffer.last();0>f_(t,n)&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fb{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){lV("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){u_(e)?lV("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await up(e)}await this.Fn(3e5)})}}class fT{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return um.resolve(uA.at);let n=new fI(t);return this.$n.forEachTarget(e,e=>n.On(e.sequenceNumber)).next(()=>this.$n.Ln(e,e=>n.On(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(lV("LruGarbageCollector","Garbage collection skipped; disabled"),um.resolve(fa)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(lV("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fa):this.Un(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let n,r,i,s,a,o,l,u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(lV("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),lF()<=sg.DEBUG&&lV("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),um.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fE{constructor(e,t){var n,r;this.db=e,this.garbageCollector=new fT(this,t)}Bn(e){let t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}qn(e){let t=0;return this.Ln(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(e,n)=>t(n))}addReference(e,t,n){return fS(e,n)}removeReference(e,t,n){return fS(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return fS(e,t)}Gn(e,t){var n,r;let i;return i=!1,fp(e).tt(n=>fc(e,n,t).next(e=>(e&&(i=!0),um.resolve(!e)))).next(()=>i)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[],i=0;return this.Kn(e,(s,a)=>{if(a<=t){let o=this.Gn(e,s).next(t=>{if(!t)return i++,n.getEntry(e,s).next(()=>(n.removeEntry(s,l8.min()),fw(e).delete([0,de(s.path)])))});r.push(o)}}).next(()=>um.waitFor(r)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return fS(e,t)}Kn(e,t){let n=fw(e),r,i=uA.at;return n.Z({index:"documentTargetsIndex"},([e,n],{path:s,sequenceNumber:a})=>{0===e?(i!==uA.at&&t(new un(dr(r)),i),i=a,r=s):i=uA.at}).next(()=>{i!==uA.at&&t(new un(dr(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function fS(e,t){var n,r;return fw(e).put((r=e.currentSequenceNumber,{targetId:0,path:de(t.path),sequenceNumber:r}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fk{constructor(){this.changes=new cw(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hl.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?um.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fA{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return fD(e).put(n)}removeEntry(e,t,n){return fD(e).delete(function(e,t){let n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],dL(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.Qn(e,n)))}getEntry(e,t){let n=hl.newInvalidDocument(t);return fD(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(fx(t))},(e,r)=>{n=this.jn(t,r)}).next(()=>n)}Wn(e,t){let n={size:0,document:hl.newInvalidDocument(t)};return fD(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(fx(t))},(e,r)=>{n={document:this.jn(t,r),size:fu(r)}}).next(()=>n)}getEntries(e,t){let n=c_;return this.zn(e,t,(e,t)=>{let r=this.jn(e,t);n=n.insert(e,r)}).next(()=>n)}Hn(e,t){let n=c_,r=new uD(un.comparator);return this.zn(e,t,(e,t)=>{let i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,fu(t))}).next(()=>({documents:n,Jn:r}))}zn(e,t,n){if(t.isEmpty())return um.resolve();let r=new uP(fP);t.forEach(e=>r=r.add(e));let i=IDBKeyRange.bound(fx(r.first()),fx(r.last())),s=r.getIterator(),a=s.getNext();return fD(e).Z({index:"documentKeyIndex",range:i},(e,t,r)=>{let i=un.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>fP(a,i);)n(a,null),a=s.getNext();a&&a.isEqual(i)&&(n(a,t),a=s.hasNext()?s.getNext():null),a?r.j(fx(a)):r.done()}).next(()=>{for(;a;)n(a,null),a=s.hasNext()?s.getNext():null})}getAllFromCollection(e,t,n){let r=[t.popLast().toArray(),t.lastSegment(),dL(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fD(e).W(IDBKeyRange.bound(r,i,!0)).next(e=>{let t=c_;for(let n of e){let r=this.jn(un.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(r.key,r)}return t})}getAllFromCollectionGroup(e,t,n,r){let i=c_,s=fO(t,n),a=fO(t,uh.max());return fD(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,a,!0)},(e,t,n)=>{let s=this.jn(un.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===r&&n.done()}).next(()=>i)}newChangeBuffer(e){return new fR(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return fN(e).get("remoteDocumentGlobalKey").next(e=>(!e&&lG(),e))}Qn(e,t){return fN(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){let n=function(e,t){let n;if(t.document)n=c1(e.re,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let r=un.fromSegments(t.noDocument.path),i=dU(t.noDocument.readTime);n=hl.newNoDocument(r,i),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return lG();{let s=un.fromSegments(t.unknownDocument.path),a=dU(t.unknownDocument.version);n=hl.newUnknownDocument(s,a)}}return t.readTime&&n.setReadTime(function(e){let t=new l5(e[0],e[1]);return l8.fromTimestamp(t)}(t.readTime)),n}(this.It,t);if(!(n.isNoDocument()&&n.version.isEqual(l8.min())))return n}return hl.newInvalidDocument(e)}}function fC(e){return new fA(e)}class fR extends fk{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new cw(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],n=0,r=new uP((e,t)=>l4(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=dP(this.Yn.It,s);r=r.add(i.path.popLast());let l=fu(o);n+=l-a.size,t.push(this.Yn.addEntry(e,i,o))}else if(n-=a.size,this.trackRemovals){let u=dP(this.Yn.It,s.convertToNoDocument(l8.min()));t.push(this.Yn.addEntry(e,i,u))}}),r.forEach(n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Yn.updateMetadata(e,n)),um.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:e,Jn:t})=>(t.forEach((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function fN(e){return dC(e,"remoteDocumentGlobal")}function fD(e){return dC(e,"remoteDocumentsV14")}function fx(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function fO(e,t){let n=t.documentKey.path.toArray();return[e,dL(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function fP(e,t){let n=e.path.toArray(),r=t.path.toArray(),i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=l4(n[s],r[s]))return i;return(i=l4(n.length,r.length))||(i=l4(n[n.length-2],r[r.length-2]))||l4(n[n.length-1],r[r.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
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
 */ class fL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fM{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.getBaseDocument(e,t,n))).next(e=>(null!==n&&ca(n.mutation,e,uU.empty(),l5.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,cR()).next(()=>t))}getLocalViewOfDocuments(e,t,n=cR()){let r=cE();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=cb();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=cE();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,cR()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=c_,s=ck(),a=ck();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof ch)?i=i.insert(t.key,t):void 0!==a&&(s.set(t.key,a.mutation.getFieldMask()),ca(a.mutation,t,a.mutation.getFieldMask(),l5.now()))}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new fL(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ck(),r=new uD((e,t)=>e-t),i=cR();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||uU.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||cR()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,h=cS();u.forEach(e=>{if(!i.has(e)){let r=ci(t.get(e),n.get(e));null!==r&&h.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,h))}return um.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){var r;return un.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):hU(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):um.resolve(cE()),a=-1,o=i;return s.next(t=>um.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?um.resolve():this.getBaseDocument(e,t,n).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,cR())).next(e=>({batchId:a,changes:cT(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new un(t)).next(e=>{let t=cb();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=cb();return this.indexManager.getCollectionParents(e,r).next(s=>um.forEach(s,s=>{var a,o;let l=(o=s.child(r),new hD(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId))).next(e=>{e.forEach((e,t)=>{let n=t.getKey();null===r.get(n)&&(r=r.insert(n,hl.newInvalidDocument(n)))});let n=cb();return r.forEach((r,i)=>{let s=e.get(r);void 0!==s&&ca(s.mutation,i,uU.empty(),l5.now()),hz(t,i)&&(n=n.insert(r,i))}),n})}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):um.resolve(hl.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fU{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return um.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:cK(t.createTime)}),um.resolve()}getNamedQuery(e,t){return um.resolve(this.ts.get(t))}saveNamedQuery(e,t){var n;return this.ts.set(t.name,{name:t.name,query:dq(t.bundledQuery),readTime:cK(t.readTime)}),um.resolve()}}/**
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
 */ class fF{constructor(){this.overlays=new uD(un.comparator),this.es=new Map}getOverlay(e,t){return um.resolve(this.overlays.get(t))}getOverlays(e,t){let n=cE();return um.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ue(e,t,r)}),um.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),um.resolve()}getOverlaysForCollection(e,t,n){let r=cE(),i=t.length+1,s=new un(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&o.largestBatchId>n&&r.set(o.getKey(),o)}return um.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new uD((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let a=s.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>n){let o=i.get(a.largestBatchId);null===o&&(o=cE(),i=i.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=cE(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=r)););return um.resolve(l)}ue(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let i=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new dD(t,n));let s=this.es.get(t);void 0===s&&(s=cR(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fV{constructor(){this.ns=new uP(fB.ss),this.rs=new uP(fB.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let n=new fB(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new fB(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new un(new l7([])),n=new fB(t,e),r=new fB(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new un(new l7([])),n=new fB(t,e),r=new fB(t,e+1),i=cR();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new fB(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class fB{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return un.comparator(e.key,t.key)||l4(e._s,t._s)}static os(e,t){return l4(e._s,t._s)||un.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fq{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new uP(fB.ss)}checkEmpty(e){return um.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new dR(i,t,n,r);for(let a of(this.mutationQueue.push(s),r))this.gs=this.gs.add(new fB(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return um.resolve(s)}lookupMutationBatch(e,t){return um.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ps(t+1),r=n<0?0:n;return um.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return um.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return um.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new fB(t,0),r=new fB(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{let t=this.ys(e._s);i.push(t)}),um.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new uP(l4);return t.forEach(e=>{let t=new fB(e,0),r=new fB(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),um.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;un.isDocumentKey(i)||(i=i.child(""));let s=new fB(new un(i),0),a=new uP(l4);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e._s)),!0)},s),um.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){var n;0===this.Ts(t.batchId,"removed")||lG(),this.mutationQueue.shift();let r=this.gs;return um.forEach(t.mutations,n=>{let i=new fB(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,t){let n=new fB(t,0),r=this.gs.firstAfterOrEqual(n);return um.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,um.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fj{constructor(e){this.Es=e,this.docs=new uD(un.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return um.resolve(n?n.document.mutableCopy():hl.newInvalidDocument(t))}getEntries(e,t){let n=c_;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():hl.newInvalidDocument(e))}),um.resolve(n)}getAllFromCollection(e,t,n){let r=c_,i=new un(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){let{key:a,value:{document:o}}=s.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=uc(uu(o),n)||(r=r.insert(o.key,o.mutableCopy()))}return um.resolve(r)}getAllFromCollectionGroup(e,t,n,r){lG()}As(e,t){return um.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new fG(this)}getSize(e){return um.resolve(this.size)}}class fG extends fk{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),um.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fz{constructor(e){this.persistence=e,this.Rs=new cw(e=>hc(e),hd),this.lastRemoteSnapshotVersion=l8.min(),this.highestTargetId=0,this.bs=0,this.Ps=new fV,this.targetCount=0,this.vs=fm.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),um.resolve()}getLastRemoteSnapshotVersion(e){return um.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return um.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),um.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),um.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new fm(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,um.resolve()}updateTargetData(e,t){return this.Dn(t),um.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,um.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),um.waitFor(i).next(()=>r)}getTargetCount(e){return um.resolve(this.targetCount)}getTargetData(e,t){let n=this.Rs.get(t)||null;return um.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),um.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),um.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),um.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Ps.ds(t);return um.resolve(n)}containsKey(e,t){return um.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fK{constructor(e,t){var n;this.Vs={},this.overlays={},this.Ss=new uA(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new fz(this),this.indexManager=new d8,this.remoteDocumentCache=(n=e=>this.referenceDelegate.xs(e),new fj(n)),this.It=new dO(t),this.Ns=new fU(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fF,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new fq(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){lV("MemoryPersistence","Starting transaction:",e);let r=new f$(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return um.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class f$ extends uf{constructor(e){super(),this.currentSequenceNumber=e}}class fH{constructor(e){this.persistence=e,this.Fs=new fV,this.$s=null}static Bs(e){return new fH(e)}get Ls(){if(this.$s)return this.$s;throw lG()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),um.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),um.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),um.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return um.forEach(this.Ls,n=>{let r=un.fromPath(n);return this.Us(e,r).next(e=>{e||t.removeEntry(r,l8.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return um.or([()=>um.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fW{constructor(e){this.It=e}$(e,t,n,r){var i,s;let a=new ug("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",di,{unique:!0}),e.createObjectStore("documentMutations"),fQ(e),function(e){e.createObjectStore("remoteDocuments")}(e));let o=um.resolve();return n<3&&r>=3&&(0!==n&&(e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal"),fQ(e)),o=o.next(()=>(function(e){let t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:l8.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)})(a))),n<4&&r>=4&&(0!==n&&(o=o.next(()=>{var t,n;return a.store("mutations").W().next(t=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",di,{unique:!0});let n=a.store("mutations"),r=t.map(e=>n.put(e));return um.waitFor(r)})})),o=o.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(o=o.next(()=>this.qs(a))),n<6&&r>=6&&(o=o.next(()=>((function(e){e.createObjectStore("remoteDocumentGlobal")})(e),this.Ks(a)))),n<7&&r>=7&&(o=o.next(()=>this.Gs(a))),n<8&&r>=8&&(o=o.next(()=>this.Qs(e,a))),n<9&&r>=9&&(o=o.next(()=>{var t;e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),n<10&&r>=10&&(o=o.next(()=>this.js(a))),n<11&&r>=11&&(o=o.next(()=>{(function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(o=o.next(()=>{!function(e){let t=e.createObjectStore("documentOverlays",{keyPath:d_});t.createIndex("collectionPathOverlayIndex",dI,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",db,{unique:!1})}(e)})),n<13&&r>=13&&(o=o.next(()=>(function(e){let t=e.createObjectStore("remoteDocumentsV14",{keyPath:du});t.createIndex("documentKeyIndex",dh),t.createIndex("collectionGroupIndex",dc)})(e)).next(()=>this.Ws(e,a)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(o=o.next(()=>this.zs(e,a))),n<15&&r>=15&&(o=o.next(()=>{var t;e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:dg}).createIndex("sequenceNumberIndex",dy,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:dv}).createIndex("documentKeyIndex",dw,{unique:!1})})),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=fu(n)}).next(()=>e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",{byteSize:t}))}qs(e){let t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next(t=>um.forEach(t,t=>{let r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next(n=>um.forEach(n,n=>{var r;(r=n.userId===t.userId)||lG();let i=dF(this.It,n);return fl(e,t.userId,i).next(()=>{})}))}))}Gs(e){let t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{let r=[];return n.Z((n,i)=>{var s;let a=new l7(n),o=[0,de(a)];r.push(t.get(o).next(n=>{var r;return n?um.resolve():t.put({targetId:0,path:de(a),sequenceNumber:e.highestListenSequenceNumber})}))}).next(()=>um.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:dm});let n=t.store("collectionParents"),r=new d9,i=e=>{if(r.add(e)){let t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:de(i)})}};return t.store("remoteDocuments").Z({X:!0},(e,t)=>{let n=new l7(e);return i(n.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([e,t,n],r)=>{let s=dr(t);return i(s.popLast())}))}js(e){let t=e.store("targets");return t.Z((e,n)=>{let r=dV(n),i=dB(this.It,r);return t.put(i)})}Ws(e,t){let n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{let i=t.store("remoteDocumentsV14"),s=(n.document?new un(l7.fromString(n.document.name).popFirst(5)):n.noDocument?un.fromSegments(n.noDocument.path):n.unknownDocument?un.fromSegments(n.unknownDocument.path):lG()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))}).next(()=>um.waitFor(r))}zs(e,t){let n=t.store("mutations"),r=fC(this.It),i=new fK(fH.Bs,this.It.re);return n.W().next(e=>{let n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:cR();dF(this.It,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),um.forEach(n,(e,n)=>{let s=new lL(n),a=dW.oe(this.It,s),o=i.getIndexManager(s),l=fh.oe(s,this.It,o,i.referenceDelegate);return new fM(r,l,a,o).recalculateAndSaveOverlaysForDocumentKeys(new dA(t,uA.at),e).next()})})}}function fQ(e){e.createObjectStore("targetDocuments",{keyPath:df}).createIndex("documentTargetsIndex",dp,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",dd,{unique:!0}),e.createObjectStore("targetGlobal")}let fY="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fX{constructor(e,t,n,r,i,s,a,o,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=a,this.Js=l,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!fX.C())throw new lK(lz.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new fE(this,r),this.ii=t+"main",this.It=new dO(o),this.ri=new uy(this.ii,this.Xs,new fW(this.It)),this.Cs=new fg(this.referenceDelegate,this.It),this.remoteDocumentCache=fC(this.It),this.Ns=new dK,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===u&&lB("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new lK(lz.FAILED_PRECONDITION,fY);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new uA(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>fZ(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(u_(e))return lV("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return lV("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return fJ(e).get("owner").next(e=>um.resolve(this.mi(e)))}gi(e){return fZ(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=dC(e,"clientMetadata");return t.W().next(e=>{let n=this.Ii(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return um.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.oi)for(let t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?um.resolve(!0):fJ(e).get("owner").next(t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new lK(lz.FAILED_PRECONDITION,fY);return!1}}return!(!this.networkEnabled||!this.inForeground)||fZ(e).W().next(e=>void 0===this.Ii(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&lV("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{let t=new dA(e,uA.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>fZ(e).W().next(e=>this.Ii(e,18e5).map(e=>e.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return fh.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fe(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return dW.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){var r;lV("IndexedDbPersistence","Starting transaction:",e);let i=15===(r=this.Xs)?dk:14===r?dS:13===r?dS:12===r?dE:11===r?dT:void lG(),s;return this.ri.runTransaction(e,"readonly"===t?"readonly":"readwrite",i,r=>(s=new dA(r,this.Ss?this.Ss.next():uA.at),"readwrite-primary"===t?this.fi(s).next(e=>!!e||this.di(s)).next(t=>{if(!t)throw lB(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new lK(lz.FAILED_PRECONDITION,ud);return n(s)}).next(e=>this.wi(s).next(()=>e)):this.Vi(s).next(()=>n(s)))).then(e=>(s.raiseOnCommittedEvent(),e))}Vi(e){return fJ(e).get("owner").next(e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new lK(lz.FAILED_PRECONDITION,fY)})}wi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return fJ(e).put("owner",t)}static C(){return uy.C()}_i(e){let t=fJ(e);return t.get("owner").next(e=>this.mi(e)?(lV("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):um.resolve())}pi(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(lB(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),!k()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{let n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return lV("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(r){return lB("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){lB("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(e){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function fJ(e){return dC(e,"owner")}function fZ(e){return dC(e,"clientMetadata")}function f0(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f1{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=cR(),r=cR();for(let i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new f1(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f2{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(hP(t))return um.resolve(null);let n=hV(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=hB(t,null,"F"),n=hV(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=cR(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,hB(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,r){return hP(t)||r.isEqual(l8.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{let s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(lF()<=sg.DEBUG&&lV("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hG(t)),this.Bi(e,s,t,ul(r,-1)))})}Fi(e,t){let n=new uP(h$(e));return t.forEach((t,r)=>{hz(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return lF()<=sg.DEBUG&&lV("QueryEngine","Using full collection scan to execute query:",hG(t)),this.Ni.getDocumentsMatchingQuery(e,t,uh.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f4{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new uD(l4),this.qi=new cw(e=>hc(e),hd),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fM(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}function f3(e,t,n,r){return new f4(e,t,n,r)}async function f6(e,t){var n;return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.Qi(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=cR();for(let o of r)for(let l of(i.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(s.push(u.batchId),u.mutations))a=a.add(h.key);return e.localDocuments.getDocuments(n,a).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function f5(e){var t;return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function f8(e,t,n){let r=cR(),i=cR();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=c_;return n.forEach((n,s)=>{let a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(l8.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):lV("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{Wi:r,zi:i}})}function f9(e,t){var n;return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function f7(e,t){var n;let r=e;return r.persistence.runTransaction("Allocate target","readwrite",e=>{let n;return r.Cs.getTargetData(e,t).next(i=>i?(n=i,um.resolve(n)):r.Cs.allocateTargetId(e).next(i=>(n=new dx(t,i,0,e.currentSequenceNumber),r.Cs.addTargetData(e,n).next(()=>n))))}).then(e=>{let n=r.Ui.get(e.targetId);return(null===n||e.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(r.Ui=r.Ui.insert(e.targetId,e),r.qi.set(t,e.targetId)),e})}async function pe(e,t,n){var r;let i=e,s=i.Ui.get(t);try{n||await i.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",e=>i.persistence.referenceDelegate.removeTarget(e,s))}catch(a){if(!u_(a))throw a;lV("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}i.Ui=i.Ui.remove(t),i.qi.delete(s.target)}function pt(e,t,n){var r;let i=l8.min(),s=cR();return e.persistence.runTransaction("Execute query","readonly",r=>(function(e,t,n){var r;let i=e.qi.get(n);return void 0!==i?um.resolve(e.Ui.get(i)):e.Cs.getTargetData(t,n)})(e,r,hV(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(r,t.targetId).next(e=>{s=e})}).next(()=>e.Li.getDocumentsMatchingQuery(r,t,n?i:l8.min(),n?s:cR())).next(n=>(pi(e,hK(t),n),{documents:n,Hi:s})))}function pn(e,t){var n,r;let i=r=e.Cs,s=e.Ui.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",e=>i.se(e,t).next(e=>e?e.target:null))}function pr(e,t){var n;let r=e.Ki.get(t)||l8.min();return e.persistence.runTransaction("Get new document changes","readonly",n=>e.Gi.getAllFromCollectionGroup(n,t,ul(r,-1),Number.MAX_SAFE_INTEGER)).then(n=>(pi(e,t,n),n))}function pi(e,t,n){let r=e.Ki.get(t)||l8.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ki.set(t,r)}async function ps(e,t,n,r){var i,s;let a=cR(),o=c_;for(let l of n){let u=t.Ji(l.metadata.name);l.document&&(a=a.add(u));let h=t.Yi(l);h.setReadTime(t.Xi(l.metadata.readTime)),o=o.insert(u,h)}let c=e.Gi.newChangeBuffer({trackRemovals:!0}),d=await f7(e,hV(hO(l7.fromString(`__bundle__/docs/${r}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>f8(t,c,o).next(e=>(c.apply(t),e)).next(n=>e.Cs.removeMatchingKeysForTargetId(t,d.targetId).next(()=>e.Cs.addMatchingKeys(t,a,d.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,n.Wi,n.zi)).next(()=>n.Wi)))}async function pa(e,t,n=cR()){var r;let i=await f7(e,hV(dq(t.bundledQuery))),s=e;return s.persistence.runTransaction("Save named query","readwrite",e=>{let r=cK(t.readTime);if(i.snapshotVersion.compareTo(r)>=0)return s.Ns.saveNamedQuery(e,t);let a=i.withResumeToken(uF.EMPTY_BYTE_STRING,r);return s.Ui=s.Ui.insert(a.targetId,a),s.Cs.updateTargetData(e,a).next(()=>s.Cs.removeMatchingKeysForTargetId(e,i.targetId)).next(()=>s.Cs.addMatchingKeys(e,n,i.targetId)).next(()=>s.Ns.saveNamedQuery(e,t))})}function po(e,t){return`firestore_clients_${e}_${t}`}function pl(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function pu(e,t){return`firestore_targets_${e}_${t}`}class ph{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){let r=JSON.parse(n),i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(i=new lK(r.error.code,r.error.message)),s?new ph(e,t,r.state,i):(lB("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pc{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){let n=JSON.parse(t),r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(r=new lK(n.error.code,n.error.message)),i?new pc(e,n.state,r):(lB("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pd{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){let n=JSON.parse(t),r="object"==typeof n&&n.activeTargetIds instanceof Array,i=cN;for(let s=0;r&&s<n.activeTargetIds.length;++s)r=uQ(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new pd(e,i):(lB("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class pf{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new pf(t.clientId,t.onlineState):(lB("SharedClientState",`Failed to parse online state: ${e}`),null)}}class pp{constructor(){this.activeTargetIds=cN}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pm{constructor(e,t,n,r,i){var s,a,o;this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new uD(l4),this.started=!1,this.cr=[];let l=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=po(this.persistenceKey,this.sr),this.hr=`firestore_sequence_number_${s=this.persistenceKey}`,this.ur=this.ur.insert(this.sr,new pp),this.lr=RegExp(`^firestore_clients_${l}_([^_]*)$`),this.dr=RegExp(`^firestore_mutations_${l}_(\\d+)(?:_(.*))?$`),this._r=RegExp(`^firestore_targets_${l}_(\\d+)$`),this.wr=`firestore_online_state_${a=this.persistenceKey}`,this.mr=`firestore_bundle_loaded_v2_${o=this.persistenceKey}`,this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.vi();for(let t of e){if(t===this.sr)continue;let n=this.getItem(po(this.persistenceKey,t));if(n){let r=pd.Zi(t,n);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();let i=this.storage.getItem(this.wr);if(i){let s=this.yr(i);s&&this.pr(s)}for(let a of this.cr)this.rr(a);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){let n=this.storage.getItem(pu(this.persistenceKey,e));if(n){let r=pc.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(pu(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.Er(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return lV("SharedClientState","READ",e,t),t}setItem(e,t){lV("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){lV("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){if(e.storageArea===this.storage){if(lV("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ar)return void lB("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.lr.test(e.key)){if(null==e.newValue){let t=this.vr(e.key);return this.Vr(t,null)}{let n=this.Sr(e.key,e.newValue);if(n)return this.Vr(n.clientId,n)}}else if(this.dr.test(e.key)){if(null!==e.newValue){let r=this.Dr(e.key,e.newValue);if(r)return this.Cr(r)}}else if(this._r.test(e.key)){if(null!==e.newValue){let i=this.Nr(e.key,e.newValue);if(i)return this.kr(i)}}else if(e.key===this.wr){if(null!==e.newValue){let s=this.yr(e.newValue);if(s)return this.pr(s)}}else if(e.key===this.hr){let a=function(e){let t=uA.at;if(null!=e)try{let n=JSON.parse(e);"number"==typeof n||lG(),t=n}catch(r){lB("SharedClientState","Failed to read sequence number from WebStorage",r)}return t}(e.newValue);a!==uA.at&&this.sequenceNumberHandler(a)}else if(e.key===this.mr){let o=this.Or(e.newValue);await Promise.all(o.map(e=>this.syncEngine.Mr(e)))}}}else this.cr.push(e)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){let r=new ph(this.currentUser,e,t,n),i=pl(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){let t=pl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){let t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){let r=pu(this.persistenceKey,e),i=new pc(e,t,n);this.setItem(r,i.tr())}Pr(e){let t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){let t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){let n=this.vr(e);return pd.Zi(n,t)}Dr(e,t){let n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ph.Zi(new lL(i),r,t)}Nr(e,t){let n=this._r.exec(e),r=Number(n[1]);return pc.Zi(r,t)}yr(e){return pf.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);lV("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){let n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],a=[];return i.forEach(e=>{r.has(e)||s.push(e)}),r.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.Br(s,a).then(()=>{this.ur=n})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=cN;return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class pg{constructor(){this.Lr=new pp,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new pp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class py{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(lV("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(lV("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let pw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class p_{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){let s=this.ho(e,t);lV("RestConnection","Sending: ",s,n);let a={};return this.lo(a,r,i),this.fo(e,s,a,n).then(e=>(lV("RestConnection","Received: ",e),e),t=>{throw lq("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+lM,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){let n=pw[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{let a=new lx;a.setWithCredentials(!0),a.listenOnce(lA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case lk.NO_ERROR:let t=a.getResponseJson();lV("Connection","XHR received:",JSON.stringify(t)),i(t);break;case lk.TIMEOUT:lV("Connection",'RPC "'+e+'" timed out'),s(new lK(lz.DEADLINE_EXCEEDED,"Request time out"));break;case lk.HTTP_ERROR:let n=a.getStatus();if(lV("Connection",'RPC "'+e+'" failed with status:',n,"response text:",a.getResponseText()),n>0){let r=a.getResponseJson().error;if(r&&r.status&&r.message){let o=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(lz).indexOf(t)>=0?t:lz.UNKNOWN}(r.status);s(new lK(o,r.message))}else s(new lK(lz.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new lK(lz.UNAVAILABLE,"Connection failed."));break;default:lG()}}finally{lV("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(r);a.send(t,"POST",o,n,15)})}wo(e,t,n){let r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=lE(),s=lS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new lN({})),this.lo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;let o=r.join("");lV("Connection","Creating WebChannel: "+o,a);let l=i.createWebChannel(o,a),u=!1,h=!1,c=new p_({Hr(e){h?lV("Connection","Not sending because WebChannel is closed:",e):(u||(lV("Connection","Opening WebChannel transport."),l.open(),u=!0),lV("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),f=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return f(l,lD.EventType.OPEN,()=>{h||lV("Connection","WebChannel transport opened.")}),f(l,lD.EventType.CLOSE,()=>{h||(h=!0,lV("Connection","WebChannel transport closed"),c.io())}),f(l,lD.EventType.ERROR,e=>{h||(h=!0,lq("Connection","WebChannel transport errored:",e),c.io(new lK(lz.UNAVAILABLE,"The operation could not be completed")))}),f(l,lD.EventType.MESSAGE,e=>{var t,n;if(!h){let r=e.data[0];(n=!!r)||lG();let i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){lV("Connection","WebChannel received error:",i);let s=i.status,a=function(e){let t=d[e];if(void 0!==t)return cv(t)}(s),o=i.message;void 0===a&&(a=lz.INTERNAL,o="Unknown error status: "+s+" with message "+i.message),h=!0,c.io(new lK(a,o)),l.close()}else lV("Connection","WebChannel received:",r),c.ro(r)}}),f(s,lC.STAT_EVENT,e=>{e.stat===lR.PROXY?lV("Connection","Detected buffering proxy"):e.stat===lR.NOPROXY&&lV("Connection","Detected no buffering proxy")}),setTimeout(()=>{c.so()},0),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pb(){return"undefined"!=typeof window?window:null}function pT(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pE(e){return new cj(e,!0)}class pS{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&lV("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pk{constructor(e,t,n,r,i,s,a,o){this.Hs=e,this.vo=n,this.Vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new pS(e,t)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==e?this.No.reset():t&&t.code===lz.RESOURCE_EXHAUSTED?(lB(t.toString()),lB("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===lz.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Ko(){}auth(){this.state=1;let e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Do===t&&this.Qo(e,n)},t=>{e(()=>{let e=new lK(lz.UNKNOWN,"Fetching auth token failed: "+t.message);return this.jo(e)})})}Qo(e,t){let n=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.jo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return lV("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Hs.enqueueAndForget(()=>this.Do===e?t():(lV("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pA extends pk{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i,s,a;t.targetChange;let o="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:lG(),l=t.targetChange.targetIds||[],u=(s=t.targetChange.resumeToken,e.gt?(void 0===s||"string"==typeof s||lG(),uF.fromBase64String(s||"")):(void 0===s||s instanceof Uint8Array||lG(),uF.fromUint8Array(s||new Uint8Array))),h=t.targetChange.cause,c=h&&function(e){let t=void 0===e.code?lz.UNKNOWN:cv(e.code);return new lK(t,e.message||"")}(h);n=new cL(o,l,u,c||null)}else if("documentChange"in t){t.documentChange;let d=t.documentChange;d.document,d.document.name,d.document.updateTime;let f=cQ(e,d.document.name),p=cK(d.document.updateTime),m=new ha({mapValue:{fields:d.document.fields}}),g=hl.newFoundDocument(f,p,m),y=d.targetIds||[],v=d.removedTargetIds||[];n=new cO(y,v,g.key,g)}else if("documentDelete"in t){t.documentDelete;let w=t.documentDelete;w.document;let _=cQ(e,w.document),I=w.readTime?cK(w.readTime):l8.min(),b=hl.newNoDocument(_,I),T=w.removedTargetIds||[];n=new cO([],T,b.key,b)}else if("documentRemove"in t){t.documentRemove;let E=t.documentRemove;E.document;let S=cQ(e,E.document),k=E.removedTargetIds||[];n=new cO([],k,S,null)}else{if(!("filter"in t))return lG();{t.filter;let A=t.filter;A.targetId;let C=A.count||0,R=new cg(C),N=A.targetId;n=new cP(N,R)}}return n}(this.It,e),n=function(e){if(!("targetChange"in e))return l8.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?l8.min():t.readTime?cK(t.readTime):l8.min()}(e);return this.listener.zo(t,n)}Ho(e){let t={};t.database=cJ(this.It),t.addTarget=function(e,t){let n,r=t.target;return(n=hf(r)?{documents:c3(e,r)}:{query:c6(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=cz(e,t.resumeToken):t.snapshotVersion.compareTo(l8.min())>0&&(n.readTime=cG(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return lG()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,e);n&&(t.labels=n),this.Lo(t)}Jo(e){let t={};t.database=cJ(this.It),t.removeTarget=e,this.Lo(t)}}class pC extends pk{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){var t,n,r,i;if(!e.streamToken&&lG(),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();let s=(n=e.writeResults,r=e.commitTime,n&&n.length>0?(void 0!==r||lG(),n.map(e=>{var t,n;let i;return n=r,(i=e.updateTime?cK(e.updateTime):cK(n)).isEqual(l8.min())&&(i=cK(n)),new ce(i,e.transformResults||[])})):[]),a=cK(e.commitTime);return this.listener.tu(a,s)}return e.writeResults&&0!==e.writeResults.length&&lG(),this.Yo=!0,this.listener.eu()}nu(){let e={};e.database=cJ(this.It),this.Lo(e)}Zo(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>c2(this.It,e))};this.Lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pR extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=n,this.It=r,this.su=!1}iu(){if(this.su)throw new lK(lz.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.So.ao(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===lz.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new lK(lz.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So._o(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===lz.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new lK(lz.UNKNOWN,e.toString())})}terminate(){this.su=!0}}class pN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,"Online"===e&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(lB(t),this.uu=!1):lV("OnlineStateTracker",t)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pD{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr(e=>{n.enqueueAndForget(async()=>{pB(this)&&(lV("RemoteStore","Restarting streams for network reachability change."),await async function(e){var t;e.wu.add(4),await pO(e),e.yu.set("Unknown"),e.wu.delete(4),await px(e)}(this))})}),this.yu=new pN(n,r)}}async function px(e){if(pB(e))for(let t of e.mu)await t(!0)}async function pO(e){for(let t of e.mu)await t(!1)}function pP(e,t){var n;e._u.has(t.targetId)||(e._u.set(t.targetId,t),pV(e)?pF(e):p3(e).Oo()&&pM(e,t))}function pL(e,t){var n;let r=p3(e);e._u.delete(t),r.Oo()&&pU(e,t),0===e._u.size&&(r.Oo()?r.$o():pB(e)&&e.yu.set("Unknown"))}function pM(e,t){e.pu.Mt(t.targetId),p3(e).Ho(t)}function pU(e,t){e.pu.Mt(t),p3(e).Jo(t)}function pF(e){e.pu=new cU({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e._u.get(t)||null}),p3(e).start(),e.yu.cu()}function pV(e){return pB(e)&&!p3(e).ko()&&e._u.size>0}function pB(e){var t;return 0===e.wu.size}function pq(e){e.pu=void 0}async function pj(e){e._u.forEach((t,n)=>{pM(e,t)})}async function pG(e,t){pq(e),pV(e)?(e.yu.lu(t),pF(e)):e.yu.set("Unknown")}async function pz(e,t,n){if(e.yu.set("Online"),t instanceof cL&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e._u.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e._u.delete(r),e.pu.removeTarget(r))}(e,t)}catch(r){lV("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await pK(e,r)}else if(t instanceof cO?e.pu.Gt(t):t instanceof cP?e.pu.Yt(t):e.pu.Wt(t),!n.isEqual(l8.min()))try{let i=await f5(e.localStore);n.compareTo(i)>=0&&await function(e,t){let n=e.pu.te(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e._u.get(r);i&&e._u.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{let n=e._u.get(t);if(!n)return;e._u.set(t,n.withResumeToken(uF.EMPTY_BYTE_STRING,n.snapshotVersion)),pU(e,t);let r=new dx(n.target,t,1,n.sequenceNumber);pM(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){lV("RemoteStore","Failed to raise snapshot:",s),await pK(e,s)}}async function pK(e,t,n){if(!u_(t))throw t;e.wu.add(1),await pO(e),e.yu.set("Offline"),n||(n=()=>f5(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{lV("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await px(e)})}function p$(e,t){return t().catch(n=>pK(e,n,t))}async function pH(e){var t;let n=p6(e),r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;pW(e);)try{let i=await f9(e.localStore,r);if(null===i){0===e.du.length&&n.$o();break}r=i.batchId,pQ(e,i)}catch(s){await pK(e,s)}pY(e)&&pX(e)}function pW(e){return pB(e)&&e.du.length<10}function pQ(e,t){e.du.push(t);let n=p6(e);n.Oo()&&n.Xo&&n.Zo(t.mutations)}function pY(e){return pB(e)&&!p6(e).ko()&&e.du.length>0}function pX(e){p6(e).start()}async function pJ(e){p6(e).nu()}async function pZ(e){let t=p6(e);for(let n of e.du)t.Zo(n.mutations)}async function p0(e,t,n){let r=e.du.shift(),i=dN.from(r,t,n);await p$(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await pH(e)}async function p1(e,t){t&&p6(e).Xo&&await async function(e,t){var n;if(cy(n=t.code)&&n!==lz.ABORTED){let r=e.du.shift();p6(e).Fo(),await p$(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await pH(e)}}(e,t),pY(e)&&pX(e)}async function p2(e,t){var n;e.asyncQueue.verifyOperationInProgress(),lV("RemoteStore","RemoteStore received new credentials");let r=pB(e);e.wu.add(3),await pO(e),r&&e.yu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.wu.delete(3),await px(e)}async function p4(e,t){var n;t?(e.wu.delete(2),await px(e)):t||(e.wu.add(2),await pO(e),e.yu.set("Unknown"))}function p3(e){return e.Iu||(e.Iu=function(e,t,n){var r;return e.iu(),new pA(t,e.So,e.authCredentials,e.appCheckCredentials,e.It,n)}(e.datastore,e.asyncQueue,{Yr:pj.bind(null,e),Zr:pG.bind(null,e),zo:pz.bind(null,e)}),e.mu.push(async t=>{t?(e.Iu.Fo(),pV(e)?pF(e):e.yu.set("Unknown")):(await e.Iu.stop(),pq(e))})),e.Iu}function p6(e){return e.Tu||(e.Tu=function(e,t,n){var r;return e.iu(),new pC(t,e.So,e.authCredentials,e.appCheckCredentials,e.It,n)}(e.datastore,e.asyncQueue,{Yr:pJ.bind(null,e),Zr:p1.bind(null,e),eu:pZ.bind(null,e),tu:p0.bind(null,e)}),e.mu.push(async t=>{t?(e.Tu.Fo(),await pH(e)):(await e.Tu.stop(),e.du.length>0&&(lV("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))})),e.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class p5{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new l$,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new p5(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new lK(lz.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function p8(e,t){if(lB("AsyncQueue",`${t}: ${e}`),u_(e))return new lK(lz.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class p9{constructor(e){this.comparator=e?(t,n)=>e(t,n)||un.comparator(t.key,n.key):(e,t)=>un.comparator(e.key,t.key),this.keyedMap=cb(),this.sortedSet=new uD(this.comparator)}static emptySet(e){return new p9(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof p9)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new p9;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class p7{constructor(){this.Eu=new uD(un.comparator)}track(e){let t=e.doc.key,n=this.Eu.get(t);n?0!==e.type&&3===n.type?this.Eu=this.Eu.insert(t,e):3===e.type&&1!==n.type?this.Eu=this.Eu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Eu=this.Eu.remove(t):1===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):lG():this.Eu=this.Eu.insert(t,e)}Au(){let e=[];return this.Eu.inorderTraversal((t,n)=>{e.push(n)}),e}}class me{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new me(e,t,p9.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hq(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mt{constructor(){this.Ru=void 0,this.listeners=[]}}class mn{constructor(){this.queries=new cw(e=>hj(e),hq),this.onlineState="Unknown",this.bu=new Set}}async function mr(e,t){var n;let r=t.query,i=!1,s=e.queries.get(r);if(s||(i=!0,s=new mt),i)try{s.Ru=await e.onListen(r)}catch(o){let a=p8(o,`Initialization of query '${hG(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.Pu(e.onlineState),s.Ru&&t.vu(s.Ru)&&mo(e)}async function mi(e,t){var n;let r=t.query,i=!1,s=e.queries.get(r);if(s){let a=s.listeners.indexOf(t);a>=0&&(s.listeners.splice(a,1),i=0===s.listeners.length)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function ms(e,t){var n;let r=!1;for(let i of t){let s=i.query,a=e.queries.get(s);if(a){for(let o of a.listeners)o.vu(i)&&(r=!0);a.Ru=i}}r&&mo(e)}function ma(e,t,n){var r;let i=e.queries.get(t);if(i)for(let s of i.listeners)s.onError(n);e.queries.delete(t)}function mo(e){e.bu.forEach(e=>{e.next()})}class ml{constructor(e,t,n){this.query=e,this.Vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new me(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),r=!0):this.xu(e,this.onlineState)&&(this.Nu(e),r=!0),this.Du=e,r}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){return!e.fromCache||(!this.options.ku||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Cu(e){if(e.docChanges.length>0)return!0;let t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Nu(e){e=me.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mu{constructor(e,t){this.payload=e,this.byteLength=t}Ou(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mh{constructor(e){this.It=e}Ji(e){return cQ(this.It,e)}Yi(e){return e.metadata.exists?c1(this.It,e.document,!1):hl.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return cK(e)}}class mc{constructor(e,t,n){this.Mu=e,this.localStore=t,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=md(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;let n=l7.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){let t=new Map,n=new mh(this.It);for(let r of e)if(r.metadata.queries){let i=n.Ji(r.metadata.name);for(let s of r.metadata.queries){let a=(t.get(s)||cR()).add(i);t.set(s,a)}}return t}async complete(){let e=await ps(this.localStore,new mh(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(let n of this.queries)await pa(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function md(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mf{constructor(e){this.key=e}}class mp{constructor(e){this.key=e}}class mm{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=cR(),this.mutatedKeys=cR(),this.Gu=h$(e),this.Qu=new p9(this.Gu)}get ju(){return this.Uu}Wu(e,t){let n=t?t.zu:new p7,r=t?t.Qu:this.Qu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=hz(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(o&&this.Gu(h,o)>0||l&&0>this.Gu(h,l))&&(a=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let u="F"===this.query.limitType?s.last():s.first();s=s.delete(u.key),i=i.delete(u.key),n.track({type:1,doc:u})}return{Qu:s,zu:n,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let i=e.zu.Au();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return lG()}};return n(e)-n(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);let s=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.qu;return(this.qu=a,0!==i.length||o)?{snapshot:new me(this.query,e.Qu,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new p7,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.Uu=this.Uu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Uu=this.Uu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=cR(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new mp(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new mf(n))}),t}tc(e){this.Uu=e.Hi,this.Ku=cR();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return me.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class mg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class my{constructor(e){this.key=e,this.nc=!1}}class mv{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new cw(e=>hj(e),hq),this.rc=new Map,this.oc=new Set,this.uc=new uD(un.comparator),this.cc=new Map,this.ac=new fV,this.hc={},this.lc=new Map,this.fc=fm.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function mw(e,t){let n=mW(e),r,i,s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{let a=await f7(n.localStore,hV(t));n.isPrimaryClient&&pP(n.remoteStore,a);let o=n.sharedClientState.addLocalQueryTarget(a.targetId);i=await m_(n,t,r=a.targetId,"current"===o,a.resumeToken)}return i}async function m_(e,t,n,r,i){e._c=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await pt(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return mO(e,t.targetId,a.Xu),a.snapshot})(e,t,n,r);let s=await pt(e.localStore,t,!0),a=new mm(t,s.Hi),o=a.Wu(s.documents),l=cx.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);mO(e,n,u.Xu);let h=new mg(t,n,a);return e.ic.set(t,h),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function mI(e,t){var n;let r=e.ic.get(t),i=e.rc.get(r.targetId);if(i.length>1)return e.rc.set(r.targetId,i.filter(e=>!hq(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await pe(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),pL(e.remoteStore,r.targetId),mD(e,r.targetId)}).catch(up)):(mD(e,r.targetId),await pe(e.localStore,r.targetId,!0))}async function mb(e,t,n){let r=mQ(e);try{var i,s,a;let o=await function(e,t){var n;let r=l5.now(),i=t.reduce((e,t)=>e.add(t.key),cR()),s,a;return e.persistence.runTransaction("Locally write mutations","readwrite",n=>{let o=c_,l=cR();return e.Gi.getEntries(n,i).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(n,o)).next(i=>{s=i;let a=[];for(let o of t){let l=co(o,s.get(o.key).overlayedDocument);null!=l&&a.push(new ch(o.key,l,ho(l.value.mapValue),ct.exists(!0)))}return e.mutationQueue.addMutationBatch(n,r,a,t)}).next(t=>{a=t;let r=t.applyToLocalDocumentSet(s,l);return e.documentOverlayCache.saveOverlays(n,t.batchId,r)})}).then(()=>({batchId:a.batchId,changes:cT(s)}))}(r.localStore,t),l;r.sharedClientState.addPendingMutation(o.batchId),i=r,s=o.batchId,(l=i.hc[i.currentUser.toKey()])||(l=new uD(l4)),l=l.insert(s,n),i.hc[i.currentUser.toKey()]=l,await mM(r,o.changes),await pH(r.remoteStore)}catch(h){let u=p8(h,"Failed to persist write");n.reject(u)}}async function mT(e,t){var n;try{let r=await function(e,t){var n;let r=e,i=t.snapshotVersion,s=r.Ui;return r.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{let n=r.Gi.newChangeBuffer({trackRemovals:!0});s=r.Ui;let a=[];t.targetChanges.forEach((n,o)=>{var l,u,h;let c=s.get(o);if(!c)return;a.push(r.Cs.removeMatchingKeys(e,n.removedDocuments,o).next(()=>r.Cs.addMatchingKeys(e,n.addedDocuments,o)));let d=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(o)?d=d.withResumeToken(uF.EMPTY_BYTE_STRING,l8.min()).withLastLimboFreeSnapshotVersion(l8.min()):n.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(n.resumeToken,i)),s=s.insert(o,d),u=d,(0===c.resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)&&a.push(r.Cs.updateTargetData(e,d))});let o=c_,l=cR();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&a.push(r.persistence.referenceDelegate.updateLimboDocument(e,n))}),a.push(f8(e,n,t.documentUpdates).next(e=>{o=e.Wi,l=e.zi})),!i.isEqual(l8.min())){let u=r.Cs.getLastRemoteSnapshotVersion(e).next(t=>r.Cs.setTargetsMetadata(e,e.currentSequenceNumber,i));a.push(u)}return um.waitFor(a).next(()=>n.apply(e)).next(()=>r.localDocuments.getLocalViewOfDocuments(e,o,l)).next(()=>o)}).then(e=>(r.Ui=s,e))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{var r,i,s;let a=e.cc.get(n);a&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||lG(),t.addedDocuments.size>0?a.nc=!0:t.modifiedDocuments.size>0?(i=a.nc)||lG():t.removedDocuments.size>0&&(a.nc||lG(),a.nc=!1))}),await mM(e,r,t)}catch(i){await up(i)}}function mE(e,t,n){var r;let i=e;if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){let s=[];i.ic.forEach((e,n)=>{let r=n.view.Pu(t);r.snapshot&&s.push(r.snapshot)}),function(e,t){var n;let r=e;r.onlineState=t;let i=!1;r.queries.forEach((e,n)=>{for(let r of n.listeners)r.Pu(t)&&(i=!0)}),i&&mo(r)}(i.eventManager,t),s.length&&i.sc.zo(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function mS(e,t,n){var r;let i=e;i.sharedClientState.updateQueryState(t,"rejected",n);let s=i.cc.get(t),a=s&&s.key;if(a){let o=new uD(un.comparator);o=o.insert(a,hl.newNoDocument(a,l8.min()));let l=cR().add(a),u=new cD(l8.min(),new Map,new uP(l4),o,l);await mT(i,u),i.uc=i.uc.remove(a),i.cc.delete(t),mL(i)}else await pe(i.localStore,t,!1).then(()=>mD(i,t,n)).catch(up)}async function mk(e,t){var n;let r=t.batch.batchId;try{let i=await function(e,t){var n;return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{let r=t.batch.keys(),i=e.Gi.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=um.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||lG(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(e){let t=cR();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}(e.localStore,t);mN(e,r,null),mR(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await mM(e,i)}catch(s){await up(s)}}async function mA(e,t,n){var r;try{let i=await function(e,t){var n;return e.persistence.runTransaction("Reject batch","readwrite-primary",n=>{let r;return e.mutationQueue.lookupMutationBatch(n,t).next(t=>(null!==t||lG(),r=t.keys(),e.mutationQueue.removeMutationBatch(n,t))).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,r)).next(()=>e.localDocuments.getDocuments(n,r))})}(e.localStore,t);mN(e,t,n),mR(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await mM(e,i)}catch(s){await up(s)}}async function mC(e,t){var n;pB(e.remoteStore)||lV("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let r=await function(e){var t;return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.mutationQueue.getHighestUnacknowledgedBatchId(t))}(e.localStore);if(-1===r)return void t.resolve();let i=e.lc.get(r)||[];i.push(t),e.lc.set(r,i)}catch(a){let s=p8(a,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function mR(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function mN(e,t,n){var r;let i=e,s=i.hc[i.currentUser.toKey()];if(s){let a=s.get(t);a&&(n?a.reject(n):a.resolve(),s=s.remove(t)),i.hc[i.currentUser.toKey()]=s}}function mD(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||mx(e,t)})}function mx(e,t){e.oc.delete(t.path.canonicalString());let n=e.uc.get(t);null!==n&&(pL(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),mL(e))}function mO(e,t,n){for(let r of n)r instanceof mf?(e.ac.addReference(r.key,t),mP(e,r)):r instanceof mp?(lV("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||mx(e,r.key)):lG()}function mP(e,t){let n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(lV("SyncEngine","New document in limbo: "+n),e.oc.add(r),mL(e))}function mL(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){let t=e.oc.values().next().value;e.oc.delete(t);let n=new un(l7.fromString(t)),r=e.fc.next();e.cc.set(r,new my(n)),e.uc=e.uc.insert(n,r),pP(e.remoteStore,new dx(hV(hO(n.path)),r,2,uA.at))}}async function mM(e,t,n){var r;let i=[],s=[],a=[];e.ic.isEmpty()||(e.ic.forEach((r,o)=>{a.push(e._c(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);let r=f1.Ci(o.targetId,t);s.push(r)}}))}),await Promise.all(a),e.sc.zo(i),await async function(e,t){var n;let r=e;try{await r.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>um.forEach(t,t=>um.forEach(t.Si,n=>r.persistence.referenceDelegate.addReference(e,t.targetId,n)).next(()=>um.forEach(t.Di,n=>r.persistence.referenceDelegate.removeReference(e,t.targetId,n)))))}catch(i){if(!u_(i))throw i;lV("LocalStore","Failed to update sequence numbers: "+i)}for(let s of t){let a=s.targetId;if(!s.fromCache){let o=r.Ui.get(a),l=o.snapshotVersion,u=o.withLastLimboFreeSnapshotVersion(l);r.Ui=r.Ui.insert(a,u)}}}(e.localStore,s))}async function mU(e,t){var n,r,i;let s=e;if(!s.currentUser.isEqual(t)){lV("SyncEngine","User change. New user:",t.toKey());let a=await f6(s.localStore,t);s.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=s).lc.forEach(e=>{e.forEach(e=>{e.reject(new lK(lz.CANCELLED,i))})}),r.lc.clear(),s.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await mM(s,a.ji)}}function mF(e,t){var n;let r=e.cc.get(t);if(r&&r.nc)return cR().add(r.key);{let i=cR(),s=e.rc.get(t);if(!s)return i;for(let a of s){let o=e.ic.get(a);i=i.unionWith(o.view.ju)}return i}}async function mV(e,t){var n;let r=await pt(e.localStore,t.query,!0),i=t.view.tc(r);return e.isPrimaryClient&&mO(e,t.targetId,i.Xu),i}async function mB(e,t){var n;return pr(e.localStore,t).then(t=>mM(e,t))}async function mq(e,t,n,r){var i;let s=await function(e,t){var n,r;let i=r=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",n=>i.Tn(n,t).next(t=>t?e.localDocuments.getDocuments(n,t):um.resolve(null)))}(e.localStore,t);null!==s?("pending"===n?await pH(e.remoteStore):"acknowledged"===n||"rejected"===n?(mN(e,t,r||null),mR(e,t),function(e,t){var n,r;(r=e.mutationQueue).An(t)}(e.localStore,t)):lG(),await mM(e,s)):lV("SyncEngine","Cannot apply mutation batch with id: "+t)}async function mj(e,t){var n;let r=e;if(mW(r),mQ(r),!0===t&&!0!==r.dc){let i=r.sharedClientState.getAllActiveQueryTargets(),s=await mG(r,i.toArray());for(let a of(r.dc=!0,await p4(r.remoteStore,!0),s))pP(r.remoteStore,a)}else if(!1===t&&!1!==r.dc){let o=[],l=Promise.resolve();r.rc.forEach((e,t)=>{r.sharedClientState.isLocalQueryTarget(t)?o.push(t):l=l.then(()=>(mD(r,t),pe(r.localStore,t,!0))),pL(r.remoteStore,t)}),await l,await mG(r,o),function(e){var t;let n=e;n.cc.forEach((e,t)=>{pL(n.remoteStore,t)}),n.ac.fs(),n.cc=new Map,n.uc=new uD(un.comparator)}(r),r.dc=!1,await p4(r.remoteStore,!1)}}async function mG(e,t,n){var r;let i=[],s=[];for(let a of t){let o,l=e.rc.get(a);if(l&&0!==l.length)for(let u of(o=await f7(e.localStore,hV(l[0])),l)){let h=e.ic.get(u),c=await mV(e,h);c.snapshot&&s.push(c.snapshot)}else{let d=await pn(e.localStore,a);await m_(e,mz(d),a,!1,(o=await f7(e.localStore,d)).resumeToken)}i.push(o)}return e.sc.zo(s),i}function mz(e){return hx(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function mK(e){var t,n,r;return(r=(n=e.localStore).persistence).vi()}async function m$(e,t,n,r){var i;if(e.dc)return void lV("SyncEngine","Ignoring unexpected query state notification.");let s=e.rc.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{let a=await pr(e.localStore,hK(s[0])),o=cD.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,uF.EMPTY_BYTE_STRING);await mM(e,a,o);break}case"rejected":await pe(e.localStore,t,!0),mD(e,t,r);break;default:lG()}}async function mH(e,t,n){let r=mW(e);if(r.dc){for(let i of t){if(r.rc.has(i)){lV("SyncEngine","Adding an already active target "+i);continue}let s=await pn(r.localStore,i),a=await f7(r.localStore,s);await m_(r,mz(s),a.targetId,!1,a.resumeToken),pP(r.remoteStore,a)}for(let o of n)r.rc.has(o)&&await pe(r.localStore,o,!1).then(()=>{pL(r.remoteStore,o),mD(r,o)}).catch(up)}}function mW(e){var t;let n=e;return n.remoteStore.remoteSyncer.applyRemoteEvent=mT.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=mF.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=mS.bind(null,n),n.sc.zo=ms.bind(null,n.eventManager),n.sc.wc=ma.bind(null,n.eventManager),n}function mQ(e){var t;let n=e;return n.remoteStore.remoteSyncer.applySuccessfulWrite=mk.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=mA.bind(null,n),n}class mY{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=pE(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return f3(this.persistence,new f2,e.initialUser,this.It)}yc(e){return new fK(fH.Bs,this.It)}gc(e){return new pg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mX extends mY{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await mQ(this.Ac.syncEngine),await pH(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return f3(this.persistence,new f2,e.initialUser,this.It)}Tc(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new fb(n,e.asyncQueue,t)}Ec(e,t){let n=new uk(t,this.persistence);return new uS(e.asyncQueue,n)}yc(e){let t=f0(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?fo.withCacheSize(this.cacheSizeBytes):fo.DEFAULT;return new fX(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,pb(),pT(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new pg}}class mJ extends mX{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Ac.syncEngine;this.sharedClientState instanceof pm&&(this.sharedClientState.syncEngine={Fr:mq.bind(null,t),$r:m$.bind(null,t),Br:mH.bind(null,t),vi:mK.bind(null,t),Mr:mB.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async e=>{await mj(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}gc(e){let t=pb();if(!pm.C(t))throw new lK(lz.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=f0(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new pm(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class mZ{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>mE(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=mU.bind(null,this.syncEngine),await p4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mn}createDatastore(e){var t,n,r,i,s;let a=pE(e.databaseInfo.databaseId),o=(t=e.databaseInfo,new pI(t));return n=e.authCredentials,r=e.appCheckCredentials,new pR(n,r,o,a)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>mE(this.syncEngine,e,0),s=pv.C()?new pv:new py,new pD(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new mv(e,t,n,r,i,s);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){var t;lV("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await pO(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function m0(e,t,n){if(!n)throw new lK(lz.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function m1(e,t,n,r){if(!0===t&&!0===r)throw new lK(lz.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function m2(e){if(!un.isDocumentKey(e))throw new lK(lz.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function m4(e){if(un.isDocumentKey(e))throw new lK(lz.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function m3(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":lG()}function m6(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new lK(lz.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=m3(e);throw new lK(lz.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function m5(e,t){if(t<=0)throw new lK(lz.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let m8=new Map;class m9{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new lK(lz.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new lK(lz.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,m1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m7{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m9({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new lK(lz.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new lK(lz.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m9(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new lW;switch(e.type){case"gapi":let t=e.client;return new lJ(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new lK(lz.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=m8.get(e);t&&(lV("ComponentProvider","Removing Datastore"),m8.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ge{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}}class gt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new gt(this.firestore,e,this._query)}}class gn extends gt{constructor(e,t,n){super(e,t,hO(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new un(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function gr(e,t,...n){if(e=Y(e),m0("collection","path",t),e instanceof m7){let r=l7.fromString(t,...n);return m4(r),new gn(e,null,r)}{if(!(e instanceof ge||e instanceof gn))throw new lK(lz.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(l7.fromString(t,...n));return m4(i),new gn(e.firestore,null,i)}}function gi(e,t,...n){if(e=Y(e),1===arguments.length&&(t=l2.R()),m0("doc","path",t),e instanceof m7){let r=l7.fromString(t,...n);return m2(r),new ge(e,null,new un(r))}{if(!(e instanceof ge||e instanceof gn))throw new lK(lz.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(l7.fromString(t,...n));return m2(i),new ge(e.firestore,e instanceof gn?e.converter:null,new un(i))}}function gs(e,t){return e=Y(e),t=Y(t),(e instanceof ge||e instanceof gn)&&(t instanceof ge||t instanceof gn)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function ga(e,t){return e=Y(e),t=Y(t),e instanceof gt&&t instanceof gt&&e.firestore===t.firestore&&hq(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function go(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){let r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):lB("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gu{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new l$,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(e=>{e&&e.Ou()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.payload)}`))},e=>this.metadata.reject(e))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){let e=await this.Sc();if(null===e)return null;let t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);let r=await this.Cc(n);return new mu(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex(e=>123===e)}async Sc(){for(;0>this.xc()&&!await this.Nc(););if(0===this.buffer.length)return null;let e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");let t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),Error(`Invalid bundle format: ${e}`)}async Nc(){let e=await this.Pc.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gh{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new lK(lz.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let t=await async function(e,t){var n;let r=cJ(e.It)+"/documents",i={documents:t.map(t=>cW(e.It,t))},s=await e._o("BatchGetDocuments",r,i,t.length),a=new Map;s.forEach(t=>{var n,r;let i=(n=e.It,"found"in t?function(e,t){var n;t.found||lG(),t.found.name,t.found.updateTime;let r=cQ(e,t.found.name),i=cK(t.found.updateTime),s=new ha({mapValue:{fields:t.found.fields}});return hl.newFoundDocument(r,i,s)}(n,t):"missing"in t?function(e,t){var n,r;t.missing||lG(),!t.readTime&&lG();let i=cQ(e,t.missing),s=cK(t.readTime);return hl.newNoDocument(i,s)}(n,t):lG());a.set(i.key.toString(),i)});let o=[];return t.forEach(e=>{let t=a.get(e.toString());t||lG(),o.push(t)}),o}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastWriteError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new cp(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let n=un.fromPath(t);this.mutations.push(new cm(n,this.precondition(n)))}),await async function(e,t){var n;let r=cJ(e.It)+"/documents",i={writes:t.map(t=>c2(e.It,t))};await e.ao("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw lG();t=l8.min()}let n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new lK(lz.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(l8.min())?ct.exists(!1):ct.updateTime(t):ct.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(l8.min()))throw new lK(lz.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ct.updateTime(t)}return ct.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gc{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.No=new pS(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.No.Ro(async()=>{let e=new gh(this.datastore),t=this.Mc(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Fc(e)}))}).catch(e=>{this.Fc(e)})})}Mc(e){try{let t=this.updateFunction(e);return!uH(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||!cy(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=lL.UNAUTHENTICATED,this.clientId=l2.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{lV("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(lV("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new lK(lz.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new l$;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=p8(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function gf(e,t){e.asyncQueue.verifyOperationInProgress(),lV("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await f6(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function gp(e,t){e.asyncQueue.verifyOperationInProgress();let n=await gm(e);lV("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>p2(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>p2(t.remoteStore,n)),e.onlineComponents=t}async function gm(e){return e.offlineComponents||(lV("FirestoreClient","Using default OfflineComponentProvider"),await gf(e,new mY)),e.offlineComponents}async function gg(e){return e.onlineComponents||(lV("FirestoreClient","Using default OnlineComponentProvider"),await gp(e,new mZ)),e.onlineComponents}function gy(e){return gm(e).then(e=>e.persistence)}function gv(e){return gm(e).then(e=>e.localStore)}function gw(e){return gg(e).then(e=>e.remoteStore)}function g_(e){return gg(e).then(e=>e.syncEngine)}async function gI(e){let t=await gg(e),n=t.eventManager;return n.onListen=mw.bind(null,t.syncEngine),n.onUnlisten=mI.bind(null,t.syncEngine),n}function gb(e,t,n={}){let r=new l$;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new gl({next(s){t.enqueueAndForget(()=>mi(e,a));let o=s.docs.has(n);!o&&s.fromCache?i.reject(new lK(lz.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&r&&"server"===r.source?i.reject(new lK(lz.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new ml(hO(n.path),s,{includeMetadataChanges:!0,ku:!0});return mr(e,a)})(await gI(e),e.asyncQueue,t,n,r)),r.promise}function gT(e,t,n={}){let r=new l$;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new gl({next(n){t.enqueueAndForget(()=>mi(e,a)),n.fromCache&&"server"===r.source?i.reject(new lK(lz.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new ml(n,s,{includeMetadataChanges:!0,ku:!0});return mr(e,a)})(await gI(e),e.asyncQueue,t,n,r)),r.promise}class gE{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new pS(this,"async_queue_retry"),this.Wc=()=>{let e=pT();e&&lV("AsyncQueue","Visibility state changed to "+e.visibilityState),this.No.Po()};let e=pT();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;let t=pT();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});let t=new l$;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!u_(e))throw e;lV("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{var t;this.Kc=e,this.Gc=!1;let n,r=(n=e.message||"",e.stack&&(n=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),n);throw lB("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let r=p5.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.qc.push(r),r}zc(){this.Kc&&lG()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.qc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.qc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.qc.indexOf(e);this.qc.splice(t,1)}}function gS(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class gk{constructor(){this._progressObserver={},this._taskCompletionResolver=new l$,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}class gA extends m7{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new gE,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gR(this),this._firestoreClient.terminate()}}function gC(e){return e._firestoreClient||gR(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function gR(e){var t,n,r,i,s;let a=e._freezeSettings(),o=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new uK(n,r,i,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new gd(e._authCredentials,e._appCheckCredentials,e._queue,o)}function gN(e,t,n){let r=new l$;return e.asyncQueue.enqueue(async()=>{try{await gf(e,n),await gp(e,t),r.resolve()}catch(s){var i;if("FirebaseError"===s.name?s.code!==lz.FAILED_PRECONDITION&&s.code!==lz.UNIMPLEMENTED:!!("undefined"!=typeof DOMException&&s instanceof DOMException)&&22!==s.code&&20!==s.code&&11!==s.code)throw s;lq("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function gD(e){if(e._initialized||e._terminated)throw new lK(lz.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gx{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gx(uF.fromBase64String(e))}catch(t){throw new lK(lz.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gx(uF.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gO{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new lK(lz.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gP{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gL{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new lK(lz.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new lK(lz.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return l4(this._lat,e._lat)||l4(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let gM=/^__.*__$/;class gU{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ch(e,this.data,this.fieldMask,t,this.fieldTransforms):new cu(e,this.data,t,this.fieldTransforms)}}class gF{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ch(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function gV(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw lG()}}class gB{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new gB(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return g5(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(gV(this.sa)&&gM.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class gq{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||pE(e)}da(e,t,n,r=!1){return new gB({sa:e,methodName:t,fa:n,path:ut.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function gj(e){let t=e._freezeSettings(),n=pE(e._databaseId);return new gq(e._databaseId,!!t.ignoreUndefinedProperties,n)}function gG(e,t,n,r,i,s={}){let a=e.da(s.merge||s.mergeFields?2:0,t,n,i);g2("Data must be an object, but it was:",a,r);let o=g0(r,a),l,u;if(s.merge)l=new uU(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){let h=[];for(let c of s.mergeFields){let d=g4(t,c,n);if(!a.contains(d))throw new lK(lz.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);g8(h,d)||h.push(d)}l=new uU(h),u=a.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,u=a.fieldTransforms;return new gU(new ha(o),l,u)}class gz extends gP{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gz}}function gK(e,t,n){return new gB({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.It,t.ignoreUndefinedProperties)}class g$ extends gP{_toFieldTransform(e){return new h7(e.path,new h1)}isEqual(e){return e instanceof g$}}class gH extends gP{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){let t=gK(this,e,!0),n=this._a.map(e=>gZ(e,t)),r=new h2(n);return new h7(e.path,r)}isEqual(e){return this===e}}class gW extends gP{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){let t=gK(this,e,!0),n=this._a.map(e=>gZ(e,t)),r=new h3(n);return new h7(e.path,r)}isEqual(e){return this===e}}class gQ extends gP{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){let t=new h5(e.It,hY(e.It,this.wa));return new h7(e.path,t)}isEqual(e){return this===e}}function gY(e,t,n,r){let i=e.da(1,t,n);g2("Data must be an object, but it was:",i,r);let s=[],a=ha.empty();uR(r,(e,r)=>{let o=g6(t,e,n);r=Y(r);let l=i.ca(o);if(r instanceof gz)s.push(o);else{let u=gZ(r,l);null!=u&&(s.push(o),a.set(o,u))}});let o=new uU(s);return new gF(a,o,i.fieldTransforms)}function gX(e,t,n,r,i,s){let a=e.da(1,t,n),o=[g4(t,r,n)],l=[i];if(s.length%2!=0)throw new lK(lz.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<s.length;u+=2)o.push(g4(t,s[u])),l.push(s[u+1]);let h=[],c=ha.empty();for(let d=o.length-1;d>=0;--d)if(!g8(h,o[d])){let f=o[d],p=l[d];p=Y(p);let m=a.ca(f);if(p instanceof gz)h.push(f);else{let g=gZ(p,m);null!=g&&(h.push(f),c.set(f,g))}}let y=new uU(h);return new gF(c,y,a.fieldTransforms)}function gJ(e,t,n,r=!1){return gZ(n,e.da(r?4:3,t))}function gZ(e,t){if(g1(e=Y(e)))return g2("Unsupported field value:",t,e),g0(e,t);if(e instanceof gP)return function(e,t){if(!gV(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let s=gZ(i,t.aa(r));null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Y(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return hY(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=l5.fromDate(e);return{timestampValue:cG(t.It,n)}}if(e instanceof l5){let r=new l5(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:cG(t.It,r)}}if(e instanceof gL)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof gx)return{bytesValue:cz(t.It,e._byteString)};if(e instanceof ge){let i=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(i))throw t.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:c$(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${m3(e)}`)}(e,t)}function g0(e,t){let n={};return uN(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):uR(e,(e,r)=>{let i=gZ(r,t.ra(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function g1(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof l5||e instanceof gL||e instanceof gx||e instanceof ge||e instanceof gP)}function g2(e,t,n){var r;if(!g1(n)||"object"!=typeof n||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n)){let i=m3(n);throw"an object"===i?t.ha(e+" a custom object"):t.ha(e+" "+i)}}function g4(e,t,n){if((t=Y(t))instanceof gO)return t._internalPath;if("string"==typeof t)return g6(e,t);throw g5("Field path arguments must be of type string or ",e,!1,void 0,n)}let g3=RegExp("[~\\*/\\[\\]]");function g6(e,t,n){if(t.search(g3)>=0)throw g5(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new gO(...t.split("."))._internalPath}catch(r){throw g5(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function g5(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new lK(lz.INVALID_ARGUMENT,o+e+l)}function g8(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class g9{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new g7(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ye("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class g7 extends g9{data(){return super.data()}}function ye(e,t){return"string"==typeof t?g6(e,t):t instanceof gO?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yt(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new lK(lz.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yn{}function yr(e,...t){for(let n of t)e=n._apply(e);return e}class yi extends yn{constructor(e,t,n){super(),this.ma=e,this.ga=t,this.ya=n,this.type="where"}_apply(e){let t=gj(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new lK(lz.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){yc(a,s);let l=[];for(let u of a)l.push(yh(r,e,u));o={arrayValue:{values:l}}}else o=yh(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||yc(a,s),o=gJ(n,t,a,"in"===s||"not-in"===s);let h=hy.create(i,s,o);return function(e,t){if(t.dt()){let n=hM(e);if(null!==n&&!n.isEqual(t.field))throw new lK(lz.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);let r=hL(e);null!==r&&yd(e,t.field,r)}let i=function(e,t){for(let n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==i)throw i===t.op?new lK(lz.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new lK(lz.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${i.toString()}' filters.`)}(e,h),h}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new gt(e.firestore,e.converter,function(e,t){let n=e.filters.concat([t]);return new hD(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}class ys extends yn{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new lK(lz.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new lK(lz.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new hA(t,n);return function(e,t){if(null===hL(e)){let n=hM(e);null!==n&&yd(e,n,t.field)}}(e,r),r}(e._query,this.ma,this.pa);return new gt(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new hD(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class ya extends yn{constructor(e,t,n){super(),this.type=e,this.Ia=t,this.Ta=n}_apply(e){return new gt(e.firestore,e.converter,hB(e._query,this.Ia,this.Ta))}}class yo extends yn{constructor(e,t,n){super(),this.type=e,this.Ea=t,this.Aa=n}_apply(e){var t,n;let r=yu(e,this.type,this.Ea,this.Aa);return new gt(e.firestore,e.converter,(t=e._query,new hD(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,r,t.endAt)))}}class yl extends yn{constructor(e,t,n){super(),this.type=e,this.Ea=t,this.Aa=n}_apply(e){var t,n;let r=yu(e,this.type,this.Ea,this.Aa);return new gt(e.firestore,e.converter,(t=e._query,new hD(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,r)))}}function yu(e,t,n,r){if(n[0]=Y(n[0]),n[0]instanceof g9)return function(e,t,n,r,i){if(!r)throw new lK(lz.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let a of hF(e))if(a.field.isKeyField())s.push(u3(t,r.key));else{let o=r.data.field(a.field);if(uG(o))throw new lK(lz.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===o){let l=a.field.canonicalString();throw new lK(lz.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${l}' (used as the orderBy) does not exist.`)}s.push(o)}return new hk(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=gj(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new lK(lz.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let l=0;l<i.length;l++){let u=i[l];if(a[l].field.isKeyField()){if("string"!=typeof u)throw new lK(lz.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof u}`);if(!hU(e)&&-1!==u.indexOf("/"))throw new lK(lz.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${u}' contains a slash.`);let h=e.path.child(l7.fromString(u));if(!un.isDocumentKey(h))throw new lK(lz.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${h}' is not because it contains an odd number of segments.`);let c=new un(h);o.push(u3(t,c))}else{let d=gJ(n,r,u);o.push(d)}}return new hk(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function yh(e,t,n){if("string"==typeof(n=Y(n))){if(""===n)throw new lK(lz.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hU(t)&&-1!==n.indexOf("/"))throw new lK(lz.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(l7.fromString(n));if(!un.isDocumentKey(r))throw new lK(lz.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return u3(e,new un(r))}if(n instanceof ge)return u3(e,n._key);throw new lK(lz.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${m3(n)}.`)}function yc(e,t){if(!Array.isArray(e)||0===e.length)throw new lK(lz.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new lK(lz.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function yd(e,t,n){if(!n.isEqual(t))throw new lK(lz.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yf{convertValue(e,t="none"){switch(uJ(e)){case 0:return null;case 1:return e.booleanValue;case 2:return uq(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(uj(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw lG()}}convertObject(e,t){let n={};return uR(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new gL(uq(e.latitude),uq(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return uG(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(uz(e));default:return null}}convertTimestamp(e){let t=uB(e);return new l5(t.seconds,t.nanos)}convertDocumentKey(e,t){var n;let r=l7.fromString(e);(n=c7(r))||lG();let i=new u$(r.get(1),r.get(3)),s=new un(r.popFirst(5));return i.isEqual(t)||lB(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yp(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}class ym extends yf{constructor(e){super(),this.firestore=e}convertBytes(e){return new gx(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yy extends g9{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new yv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(ye("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class yv extends yy{data(e={}){return super.data(e)}}class yw{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new yg(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new yv(this._firestore,this._userDataWriter,n.key,n,new yg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new lK(lz.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let n=0;return e._snapshot.docChanges.map(t=>({type:"added",doc:new yv(e._firestore,e._userDataWriter,t.doc.key,t.doc,new yg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:n++}))}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new yv(e._firestore,e._userDataWriter,t.doc.key,t.doc,new yg(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return lG()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function y_(e,t){return e instanceof yy&&t instanceof yy?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof yw&&t instanceof yw&&e._firestore===t._firestore&&ga(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}class yI extends yf{constructor(e){super(),this.firestore=e}convertBytes(e){return new gx(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}function yb(e,t,n){e=m6(e,ge);let r=m6(e.firestore,gA),i=yp(e.converter,t,n);return yS(r,[gG(gj(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,ct.none())])}function yT(e,t,n,...r){e=m6(e,ge);let i=m6(e.firestore,gA),s=gj(i),a;return a="string"==typeof(t=Y(t))||t instanceof gO?gX(s,"updateDoc",e._key,t,n,r):gY(s,"updateDoc",e._key,t),yS(i,[a.toMutation(e._key,ct.exists(!0))])}function yE(e,...t){var n,r,i;e=Y(e);let s={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||gS(t[a])||(s=t[a],a++);let o={includeMetadataChanges:s.includeMetadataChanges};if(gS(t[a])){let l=t[a];t[a]=null===(n=l.next)||void 0===n?void 0:n.bind(l),t[a+1]=null===(r=l.error)||void 0===r?void 0:r.bind(l),t[a+2]=null===(i=l.complete)||void 0===i?void 0:i.bind(l)}let u,h,c;if(e instanceof ge)h=m6(e.firestore,gA),c=hO(e._key.path),u={next(n){t[a]&&t[a](yk(h,e,n))},error:t[a+1],complete:t[a+2]};else{let d=m6(e,gt);h=m6(d.firestore,gA),c=d._query;let f=new yI(h);u={next(e){t[a]&&t[a](new yw(h,f,d,e))},error:t[a+1],complete:t[a+2]},yt(e._query)}return function(e,t,n,r){let i=new gl(r),s=new ml(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>mr(await gI(e),s)),()=>{i.bc(),e.asyncQueue.enqueueAndForget(async()=>mi(await gI(e),s))}}(gC(h),c,o,u)}function yS(e,t){return function(e,t){let n=new l$;return e.asyncQueue.enqueueAndForget(async()=>mb(await g_(e),t,n)),n.promise}(gC(e),t)}function yk(e,t,n){let r=n.docs.get(t._key),i=new yI(e);return new yy(e,i,t._key,r,new yg(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */ let yA={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yC{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=gj(e)}set(e,t,n){this._verifyNotCommitted();let r=yR(e,this._firestore),i=yp(r.converter,t,n),s=gG(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,ct.none())),this}update(e,t,n,...r){this._verifyNotCommitted();let i=yR(e,this._firestore),s;return s="string"==typeof(t=Y(t))||t instanceof gO?gX(this._dataReader,"WriteBatch.update",i._key,t,n,r):gY(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,ct.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=yR(e,this._firestore);return this._mutations=this._mutations.concat(new cp(t._key,ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new lK(lz.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function yR(e,t){if((e=Y(e)).firestore!==t)throw new lK(lz.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yN extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=gj(e)}get(e){let t=yR(e,this._firestore),n=new ym(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return lG();let r=e[0];if(r.isFoundDocument())return new g9(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new g9(this._firestore,n,t._key,null,t.converter);throw lG()})}set(e,t,n){let r=yR(e,this._firestore),i=yp(r.converter,t,n),s=gG(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){let i=yR(e,this._firestore),s;return s="string"==typeof(t=Y(t))||t instanceof gO?gX(this._dataReader,"Transaction.update",i._key,t,n,r):gY(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){let t=yR(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=yR(e,this._firestore),n=new yI(this._firestore);return super.get(e).then(e=>new yy(this._firestore,n,t._key,e._document,new yg(!1,!1),t.converter))}}/**
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
 */ function yD(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new lK("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yx(){if("undefined"==typeof Uint8Array)throw new lK("unimplemented","Uint8Arrays are not available in this environment.")}function yO(){if(!("undefined"!=typeof atob))throw new lK("unimplemented","Blobs are unavailable in Firestore in this environment.")}!function(e,t=!0){lM=eF,ex(new X("firestore",(e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new gA(new lY(e.getProvider("auth-internal")),new l0(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new lK(lz.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new u$(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),eG(lP,"3.7.1",void 0),eG(lP,"3.7.1","esm2017")}();class yP{constructor(e){this._delegate=e}static fromBase64String(e){return yO(),new yP(gx.fromBase64String(e))}static fromUint8Array(e){return yx(),new yP(gx.fromUint8Array(e))}toBase64(){return yO(),this._delegate.toBase64()}toUint8Array(){return yx(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yL(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yM{enableIndexedDbPersistence(e,t){return function(e,t){gD(e=m6(e,gA));let n=gC(e),r=e._freezeSettings(),i=new mZ;return gN(n,i,new mX(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return function(e){gD(e=m6(e,gA));let t=gC(e),n=e._freezeSettings(),r=new mZ;return gN(t,r,new mJ(r,n.cacheSizeBytes))}(e._delegate)}clearIndexedDbPersistence(e){return function(e){if(e._initialized&&!e._terminated)throw new lK(lz.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new l$;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!uy.C())return Promise.resolve();await uy.delete(e+"main")}(f0(e._databaseId,e._persistenceKey)),t.resolve()}catch(n){t.reject(n)}}),t.promise}(e._delegate)}}class yU{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof u$||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){let t=this._delegate._getSettings();e.merge||t.host===e.host||lq("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){!function(e,t,n,r={}){var i;let s=(e=m6(e,m7))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&lq("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let a,o;if("string"==typeof r.mockUserToken)a=r.mockUserToken,o=lL.MOCK_USER;else{a=U(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new lK(lz.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new lL(l)}e._authCredentials=new lQ(new lH(a,o))}}(this._delegate,e,t,n)}enableNetwork(){var e,t;return(t=gC(e=m6(e=this._delegate,gA))).asyncQueue.enqueue(async()=>{let e=await gy(t),n=await gw(t);return e.setNetworkEnabled(!0),function(e){var t;return e.wu.delete(0),px(e)}(n)})}disableNetwork(){var e,t;return(t=gC(e=m6(e=this._delegate,gA))).asyncQueue.enqueue(async()=>{let e=await gy(t),n=await gw(t);return e.setNetworkEnabled(!1),async function(e){var t;e.wu.add(0),await pO(e),e.yu.set("Offline")}(n)})}enablePersistence(e){let t=!1,n=!1;return e&&m1("synchronizeTabs",t=!!e.synchronizeTabs,"experimentalForceOwningTab",n=!!e.experimentalForceOwningTab),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){var e;return function(e){let t=new l$;return e.asyncQueue.enqueueAndForget(async()=>mC(await g_(e),t)),t.promise}(gC(e=m6(e=this._delegate,gA)))}onSnapshotsInSync(e){var t,n;return function(e,t){let n=new gl(t);return e.asyncQueue.enqueueAndForget(async()=>{var t,r,i;(t=await gI(e)).bu.add(n),n.next()}),()=>{n.bc(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){var n;e.bu.delete(t)})(await gI(e),n))}}(gC(t=m6(t=this._delegate,gA)),gS(e)?e:{next:e})}get app(){if(!this._appCompat)throw new lK("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new yX(this,gr(this._delegate,e))}catch(t){throw yG(t,"collection()","Firestore.collection()")}}doc(e){try{return new yj(this,gi(this._delegate,e))}catch(t){throw yG(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new yW(this,function(e,t){var n;if(e=m6(e,m7),m0("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new lK(lz.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new gt(e,null,new hD(l7.emptyPath(),t))}(this._delegate,e))}catch(t){throw yG(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return function(e,t,n){e=m6(e,gA);let r=Object.assign(Object.assign({},yA),void 0);return!function(e){if(e.maxAttempts<1)throw new lK(lz.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){let r=new l$;return e.asyncQueue.enqueueAndForget(async()=>{var i;let s=await gg(e).then(e=>e.datastore);new gc(e.asyncQueue,s,n,t,r).run()}),r.promise}(gC(e),n=>t(new yN(e,n)),r)}(this._delegate,t=>e(new yV(this,t)))}batch(){return gC(this._delegate),new yB(new yC(this._delegate,e=>yS(this._delegate,e)))}loadBundle(e){return function(e,t){let n=gC(e=m6(e,gA)),r=new gk;return function(e,t,n,r){var i,s,a,o;let l,u=(s=pE(t),a=function(e,t){if(e instanceof Uint8Array)return go(e,t);if(e instanceof ArrayBuffer)return go(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof n?(new TextEncoder).encode(n):n),new gu(a,s));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){var r;(async function(e,t,n){try{let r=await t.getMetadata();if(await function(e,t){var n;let r=cK(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",n=>e.Ns.getBundleMetadata(n,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r)){var i;return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:r.totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}),Promise.resolve(new Set)}n._updateProgress(md(r));let s=new mc(r,e.localStore,t.It),a=await t.mc();for(;a;){let o=await s.Fu(a);o&&n._updateProgress(o),a=await t.mc()}let l=await s.complete();return await mM(e,l.Lu,void 0),await function(e,t){var n;return e.persistence.runTransaction("Save bundle","readwrite",n=>e.Ns.saveBundleMetadata(n,t))}(e.localStore,r),n._completeWith(l.progress),Promise.resolve(l.Bu)}catch(u){return lq("SyncEngine",`Loading bundle failed with ${u}`),n._failWith(u),Promise.resolve(new Set)}})(e,t,n).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await g_(e),u,r)})}(n,e._databaseId,t,r),r}(this._delegate,e)}namedQuery(e){var t,n,r,i;return(r=gC(t=m6(t=this._delegate,gA))).asyncQueue.enqueue(async()=>(function(e,t){var n;return e.persistence.runTransaction("Get named query","readonly",n=>e.Ns.getNamedQuery(n,t))})(await gv(r),e)).then(e=>e?new gt(t,null,e.query):null).then(e=>e?new yW(this,e):null)}}class yF extends yf{constructor(e){super(),this.firestore=e}convertBytes(e){return new yP(new gx(e))}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return yj.forKey(t,this.firestore,null)}}class yV{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new yF(e)}get(e){let t=yJ(e);return this._delegate.get(t).then(e=>new y$(this._firestore,new yy(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,n){let r=yJ(e);return n?(yD("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){let i=yJ(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){let t=yJ(e);return this._delegate.delete(t),this}}class yB{constructor(e){this._delegate=e}set(e,t,n){let r=yJ(e);return n?(yD("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){let i=yJ(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){let t=yJ(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class yq{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){let n=new yv(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new yH(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){let n=yq.INSTANCES,r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new yq(e,new yF(e),t),r.set(t,i)),i}}yq.INSTANCES=new WeakMap;class yj{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new yF(e)}static forPath(e,t,n){if(e.length%2!=0)throw new lK("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new yj(t,new ge(t._delegate,n,new un(e)))}static forKey(e,t,n){return new yj(t,new ge(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new yX(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new yX(this.firestore,gr(this._delegate,e))}catch(t){throw yG(t,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Y(e))instanceof ge&&gs(this._delegate,e)}set(e,t){t=yD("DocumentReference.set",t);try{if(t)return yb(this._delegate,e,t);return yb(this._delegate,e)}catch(n){throw yG(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{if(1===arguments.length)return yT(this._delegate,e);return yT(this._delegate,e,t,...n)}catch(r){throw yG(r,"updateDoc()","DocumentReference.update()")}}delete(){var e;return yS(m6((e=this._delegate).firestore,gA),[new cp(e._key,ct.none())])}onSnapshot(...e){let t=yz(e),n=yK(e,e=>new y$(this.firestore,new yy(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return yE(this._delegate,t,n)}get(e){let t;return((null==e?void 0:e.source)==="cache"?function(e){e=m6(e,ge);let t=m6(e.firestore,gA),n=gC(t),r=new yI(t);return(function(e,t){let n=new l$;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await function(e,t){var n;return e.persistence.runTransaction("read document","readonly",n=>e.localDocuments.getDocument(n,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new lK(lz.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(s){let i=p8(s,`Failed to get document '${t} from cache`);n.reject(i)}})(await gv(e),t,n)),n.promise})(n,e._key).then(n=>new yy(t,r,e._key,n,new yg(null!==n&&n.hasLocalMutations,!0),e.converter))}(this._delegate):(null==e?void 0:e.source)==="server"?function(e){e=m6(e,ge);let t=m6(e.firestore,gA);return gb(gC(t),e._key,{source:"server"}).then(n=>yk(t,e,n))}(this._delegate):/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){e=m6(e,ge);let t=m6(e.firestore,gA);return gb(gC(t),e._key).then(n=>yk(t,e,n))}(this._delegate)).then(e=>new y$(this.firestore,new yy(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new yj(this.firestore,e?this._delegate.withConverter(yq.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function yG(e,t,n){return e.message=e.message.replace(t,n),e}function yz(e){for(let t of e)if("object"==typeof t&&!yL(t))return t;return{}}function yK(e,t){var n,r;let i;return{next(e){i.next&&i.next(t(e))},error:null===(n=(i=yL(e[0])?e[0]:yL(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]}).error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class y${constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new yj(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return y_(this._delegate,e._delegate)}}class yH extends y${data(e){var t;let n=this._delegate.data(e);return(t=void 0!==n)||lG(),n}}class yW{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new yF(e)}where(e,t,n){try{return new yW(this.firestore,yr(this._delegate,function(e,t,n){let r=ye("where",e);return new yi(r,t,n)}(e,t,n)))}catch(r){throw yG(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new yW(this.firestore,yr(this._delegate,function(e,t="asc"){let n=ye("orderBy",e);return new ys(n,t)}(e,t)))}catch(n){throw yG(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{var t;return new yW(this.firestore,yr(this._delegate,(m5("limit",e),new ya("limit",e,"F"))))}catch(n){throw yG(n,"limit()","Query.limit()")}}limitToLast(e){try{var t;return new yW(this.firestore,yr(this._delegate,(m5("limitToLast",e),new ya("limitToLast",e,"L"))))}catch(n){throw yG(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new yW(this.firestore,yr(this._delegate,function(...e){return new yo("startAt",e,!0)}(...e)))}catch(t){throw yG(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new yW(this.firestore,yr(this._delegate,function(...e){return new yo("startAfter",e,!1)}(...e)))}catch(t){throw yG(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new yW(this.firestore,yr(this._delegate,function(...e){return new yl("endBefore",e,!1)}(...e)))}catch(t){throw yG(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new yW(this.firestore,yr(this._delegate,function(...e){return new yl("endAt",e,!0)}(...e)))}catch(t){throw yG(t,"endAt()","Query.endAt()")}}isEqual(e){return ga(this._delegate,e._delegate)}get(e){let t;return((null==e?void 0:e.source)==="cache"?function(e){e=m6(e,gt);let t=m6(e.firestore,gA),n=gC(t),r=new yI(t);return(function(e,t){let n=new l$;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{let r=await pt(e,t,!0),i=new mm(t,r.Hi),s=i.Wu(r.documents),a=i.applyChanges(s,!1);n.resolve(a.snapshot)}catch(l){let o=p8(l,`Failed to execute query '${t} against cache`);n.reject(o)}})(await gv(e),t,n)),n.promise})(n,e._query).then(n=>new yw(t,r,e,n))}(this._delegate):(null==e?void 0:e.source)==="server"?function(e){e=m6(e,gt);let t=m6(e.firestore,gA),n=gC(t),r=new yI(t);return gT(n,e._query,{source:"server"}).then(n=>new yw(t,r,e,n))}(this._delegate):function(e){e=m6(e,gt);let t=m6(e.firestore,gA),n=gC(t),r=new yI(t);return yt(e._query),gT(n,e._query).then(n=>new yw(t,r,e,n))}(this._delegate)).then(e=>new yY(this.firestore,new yw(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){let t=yz(e),n=yK(e,e=>new yY(this.firestore,new yw(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return yE(this._delegate,t,n)}withConverter(e){return new yW(this.firestore,e?this._delegate.withConverter(yq.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class yQ{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new yH(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class yY{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new yW(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new yH(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new yQ(this._firestore,e))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new yH(this._firestore,n))})}isEqual(e){return y_(this._delegate,e._delegate)}}class yX extends yW{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){let e=this._delegate.parent;return e?new yj(this.firestore,e):null}doc(e){try{if(void 0===e)return new yj(this.firestore,gi(this._delegate));return new yj(this.firestore,gi(this._delegate,e))}catch(t){throw yG(t,"doc()","CollectionReference.doc()")}}add(e){return(function(e,t){let n=m6(e.firestore,gA),r=gi(e),i=yp(e.converter,t);return yS(n,[gG(gj(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,ct.exists(!1))]).then(()=>r)})(this._delegate,e).then(e=>new yj(this.firestore,e))}isEqual(e){return gs(this._delegate,e._delegate)}withConverter(e){return new yX(this.firestore,e?this._delegate.withConverter(yq.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function yJ(e){return m6(e,ge)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yZ{constructor(...e){this._delegate=new gO(...e)}static documentId(){return new yZ(ut.keyField().canonicalString())}isEqual(e){return(e=Y(e))instanceof gO&&this._delegate._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y0{constructor(e){this._delegate=e}static serverTimestamp(){let e=new g$("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new y0(e)}static delete(){let e=new gz("deleteField");return e._methodName="FieldValue.delete",new y0(e)}static arrayUnion(...e){let t=function(...e){return new gH("arrayUnion",e)}(...e);return t._methodName="FieldValue.arrayUnion",new y0(t)}static arrayRemove(...e){let t=function(...e){return new gW("arrayRemove",e)}(...e);return t._methodName="FieldValue.arrayRemove",new y0(t)}static increment(e){var t;let n=new gQ("increment",e);return n._methodName="FieldValue.increment",new y0(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */ let y1={Firestore:yU,GeoPoint:gL,Timestamp:l5,Blob:yP,Transaction:yV,WriteBatch:yB,DocumentReference:yj,DocumentSnapshot:y$,Query:yW,QueryDocumentSnapshot:yH,QuerySnapshot:yY,CollectionReference:yX,FieldPath:yZ,FieldValue:y0,setLogLevel:function(e){var t;lU.setLogLevel(e)},CACHE_SIZE_UNLIMITED:-1};!function(e,t){e.INTERNAL.registerComponent(new X("firestore-compat",e=>{let n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)},"PUBLIC").setServiceProps(Object.assign({},y1)))}(e3,(e,t)=>new yU(e,t,new yM)),e3.registerVersion("@firebase/firestore-compat","0.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let y2="firebasestorage.googleapis.com",y4="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y3 extends F{constructor(e,t,n=0){super(y6(e),`Firebase Storage: ${t} (${y6(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,y3.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return y6(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function y6(e){return"storage/"+e}function y5(){return new y3("unknown","An unknown error occurred, please check the error payload for server response.")}function y8(){return new y3("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function y9(){return new y3("canceled","User canceled the upload/download.")}function y7(){return new y3("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function ve(e){return new y3("invalid-argument",e)}function vt(){return new y3("app-deleted","The Firebase app was deleted.")}function vn(e){return new y3("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vr(e,t){return new y3("invalid-format","String does not match format '"+e+"': "+t)}function vi(e){throw new y3("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vs{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){var n;let r;try{r=vs.makeFromUrl(e,t)}catch(i){return new vs(e,"")}if(""===r.path)return r;throw new y3("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null,r="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),o=RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===y2?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),u=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:o,indices:{bucket:1,path:3},postModify:s},{regex:l,indices:{bucket:1,path:2},postModify:s}];for(let h=0;h<u.length;h++){let c=u[h],d=c.regex.exec(e);if(d){let f=d[c.indices.bucket],p=d[c.indices.path];p||(p=""),n=new vs(f,p),c.postModify(n);break}}if(null==n){var m;throw new y3("invalid-url","Invalid URL '"+e+"'.")}return n}}class va{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function vo(e){return"string"==typeof e||e instanceof String}function vl(e){return vu()&&e instanceof Blob}function vu(){return"undefined"!=typeof Blob}function vh(e,t,n,r){if(r<t)throw ve(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw ve(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vc(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function vd(e){let t=encodeURIComponent,n="?";for(let r in e)if(e.hasOwnProperty(r)){let i=t(r)+"="+t(e[r]);n=n+i+"&"}return n.slice(0,-1)}/**
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
 */ function vf(e,t){let n=-1!==[408,429].indexOf(e),r=-1!==t.indexOf(e);return e>=500&&e<600||n||r}(a=p||(p={}))[a.NO_ERROR=0]="NO_ERROR",a[a.NETWORK_ERROR=1]="NETWORK_ERROR",a[a.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vp{constructor(e,t,n,r,i,s,a,o,l,u,h,c=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new vm(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=e=>{let t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let t=n.getErrorCode()===p.NO_ERROR,i=n.getStatus();if((!t||vf(i,this.additionalRetryCodes_))&&this.retry){let s=n.getErrorCode()===p.ABORT;e(!1,new vm(!1,null,s));return}let a=-1!==this.successCodes_.indexOf(i);e(!0,new vm(a,n))})},t=(e,t)=>{let n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{var s;let a=this.callback_(i,i.getResponse());void 0!==a?n(a):n()}catch(o){r(o)}else if(null!==i){let l=y5();l.serverResponse=i.getErrorText(),r(this.errorCallback_?this.errorCallback_(i,l):l)}else if(t.canceled){let u=this.appDelete_?vt():y9();r(u)}else{let h=y8();r(h)}};this.canceled_?t(!1,new vm(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,n){let r=1,i=null,s=null,a=!1,o=0;function l(){return 2===o}let u=!1;function h(...e){u||(u=!0,t.apply(null,e))}function c(t){i=setTimeout(()=>{i=null,e(f,l())},t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u){d();return}if(e){d(),h.call(null,e,...t);return}let n=l()||a;if(n){d(),h.call(null,e,...t);return}r<64&&(r*=2);let i;1===o?(o=2,i=0):i=(r+Math.random())*1e3,c(i)}let p=!1;function m(e){if(!p)p=!0,d(),!u&&(null!==i?(e||(o=2),clearTimeout(i),c(0)):e||(o=1))}return c(0),s=setTimeout(()=>{a=!0,m(!0)},n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){if(this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_){var t;(t=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class vm{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function vg(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}if(vu())return new Blob(e);throw new y3("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let vy={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vv{constructor(e,t){this.data=e,this.contentType=t||null}}function vw(e,t){switch(e){case vy.RAW:return new vv(v_(t));case vy.BASE64:case vy.BASE64URL:return new vv(vI(e,t));case vy.DATA_URL:return new vv(function(e){let t=new vb(e);return t.base64?vI(vy.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(n){throw vr(vy.DATA_URL,"Malformed data URL.")}return v_(t)}(t.rest)}(t),function(e){let t=new vb(e);return t.contentType}(t))}throw y5()}function v_(e){let t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if((64512&r)==55296){let i=n<e.length-1&&(64512&e.charCodeAt(n+1))==56320;if(i){let s=r,a=e.charCodeAt(++n);r=65536|(1023&s)<<10|1023&a,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else(64512&r)==56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function vI(e,t){switch(e){case vy.BASE64:{let n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw vr(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case vy.BASE64URL:{let i=-1!==t.indexOf("+"),s=-1!==t.indexOf("/");if(i||s)throw vr(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}let a;try{var o;o=t,a=atob(o)}catch(l){throw vr(e,"Invalid character found")}let u=new Uint8Array(a.length);for(let h=0;h<a.length;h++)u[h]=a.charCodeAt(h);return u}class vb{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw vr(vy.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let n=t[1]||null;null!=n&&(this.base64=function(e,t){let n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vT{constructor(e,t){let n=0,r="";vl(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(vl(this.data_)){var n,r,i;let s=this.data_,a=(n=s,r=e,i=t,n.webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===a?null:new vT(a)}{let o=new Uint8Array(this.data_.buffer,e,t-e);return new vT(o,!0)}}static getBlob(...e){if(vu()){let t=e.map(e=>e instanceof vT?e.data_:e);return new vT(vg.apply(null,t))}{let n=e.map(e=>vo(e)?vw(vy.RAW,e).data:e.data_),r=0;n.forEach(e=>{r+=e.byteLength});let i=new Uint8Array(r),s=0;return n.forEach(e=>{for(let t=0;t<e.length;t++)i[s++]=e[t]}),new vT(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vE(e){var t;let n;try{n=JSON.parse(e)}catch(r){return null}return"object"!=typeof(t=n)||Array.isArray(t)?null:n}function vS(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vk(e,t){return t}class vA{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||vk}}let vC=null;function vR(){if(vC)return vC;let e=[];e.push(new vA("bucket")),e.push(new vA("generation")),e.push(new vA("metageneration")),e.push(new vA("name","fullPath",!0));let t=new vA("name");t.xform=function(e,t){var n;return!vo(t)||t.length<2?t:vS(t)},e.push(t);let n=new vA("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new vA("timeCreated")),e.push(new vA("updated")),e.push(new vA("md5Hash",null,!0)),e.push(new vA("cacheControl",null,!0)),e.push(new vA("contentDisposition",null,!0)),e.push(new vA("contentEncoding",null,!0)),e.push(new vA("contentLanguage",null,!0)),e.push(new vA("contentType",null,!0)),e.push(new vA("metadata","customMetadata",!0)),vC=e}function vN(e,t,n){let r=vE(t);return null===r?null:function(e,t,n){var r,i;let s={};s.type="file";let a=n.length;for(let o=0;o<a;o++){let l=n[o];s[l.local]=l.xform(s,t[l.server])}return Object.defineProperty(s,"ref",{get:function(){let t=s.bucket,n=s.fullPath,r=new vs(t,n);return e._makeStorageReference(r)}}),s}(e,r,n)}function vD(e,t){let n={},r=t.length;for(let i=0;i<r;i++){let s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let vx="prefixes",vO="items";class vP{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vL(e){if(!e)throw y5()}function vM(e,t){return function(n,r){let i=vN(e,r,t);return vL(null!==i),i}}function vU(e){return function(t,n){var r,i;let s;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new y3("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new y3("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(r=e.bucket,s=new y3("quota-exceeded","Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,s=new y3("unauthorized","User does not have permission to access '"+i+"'.")):s=n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}}function vF(e){let t=vU(e);return function(n,r){let i=t(n,r);if(404===n.getStatus()){var s;s=e.path,i=new y3("object-not-found","Object '"+s+"' does not exist.")}return i.serverResponse=r.serverResponse,i}}function vV(e,t,n){let r=t.fullServerUrl(),i=vc(r,e.host,e._protocol),s=e.maxOperationRetryTime,a=new vP(i,"GET",vM(e,n),s);return a.errorHandler=vF(t),a}function vB(e,t,n){let r=Object.assign({},n);if(r.fullPath=e.path,r.size=t.size(),!r.contentType){var i,s;r.contentType=t&&t.type()||"application/octet-stream"}return r}class vq{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function vj(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){vL(!1)}return vL(!!n&&-1!==(t||["active"]).indexOf(n)),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let vG={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function vz(e){switch(e){case"running":case"pausing":case"canceling":return vG.RUNNING;case"paused":return vG.PAUSED;case"success":return vG.SUCCESS;case"canceled":return vG.CANCELED;default:return vG.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vK{constructor(e,t,n){var r;"function"==typeof e||null!=t||null!=n?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function v$(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class vH{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=p.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=p.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw vi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(let i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vi("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw vi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class vW extends vH{initXhr(){this.xhr_.responseType="text"}}function vQ(){return new vW}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vY{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=vR(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(vf(e.status,[])){if(t)e=y8();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let n=function(e,t,n,r,i){let s=t.bucketOnlyServerUrl(),a=vB(t,r,i),o={name:a.fullPath},l=vc(s,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},h=vD(a,n),c=e.maxUploadRetryTime,d=new vP(l,"POST",function(e){vj(e);let t;try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){vL(!1)}return vL(vo(t)),t},c);return d.urlParams=o,d.headers=u,d.body=h,d.errorHandler=vU(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,vQ,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,n)=>{let r=function(e,t,n,r){let i=e.maxUploadRetryTime,s=new vP(n,"POST",function(e){let t=vj(e,["active","final"]),n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){vL(!1)}n||vL(!1);let s=Number(n);return vL(!isNaN(s)),new vq(s,r.size(),"final"===t)},i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=vU(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,vQ,t,n);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new vq(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=function(e,t,n,r,i,s,a,o){let l=new vq(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new y3("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");let u=l.total-l.current,h=u;i>0&&(h=Math.min(h,i));let c=l.current,d=c+h,f="";f=0===h?"finalize":u===h?"upload, finalize":"upload";let p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},m=r.slice(c,d);if(null===m)throw y7();let g=t.maxUploadRetryTime,y=new vP(n,"POST",function(e,n){let i=vj(e,["active","final"]),a=l.current+h,o=r.size(),u;return u="final"===i?vM(t,s)(e,n):null,new vq(a,o,"final"===i,u)},g);return y.headers=p,y.body=m.uploadData(),y.progressCallback=o||null,y.errorHandler=vU(e),y}(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}let o=this._ref.storage._makeRequest(s,vQ,r,i,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let n=vV(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,vQ,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let n=function(e,t,n,r,i){let s=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},o=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+o;let l=vB(t,r,i),u=vD(l,n),h="--"+o+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+o+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",c=vT.getBlob(h,r,"\r\n--"+o+"--");if(null===c)throw y7();let d={name:l.fullPath},f=vc(s,e.host,e._protocol),p=e.maxUploadRetryTime,m=new vP(f,"POST",vM(e,n),p);return m.urlParams=d,m.headers=a,m.body=c.uploadData(),m.errorHandler=vU(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,vQ,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=y9(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=vz(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){let i=new vK(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(vz(this._state)){case vG.SUCCESS:v$(this._resolve.bind(null,this.snapshot))();break;case vG.CANCELED:case vG.ERROR:let t=this._reject;v$(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=vz(this._state);switch(t){case vG.RUNNING:case vG.PAUSED:e.next&&v$(e.next.bind(e,this.snapshot))();break;case vG.SUCCESS:e.complete&&v$(e.complete.bind(e))();break;case vG.CANCELED:case vG.ERROR:default:e.error&&v$(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vX{constructor(e,t){this._service=e,t instanceof vs?this._location=t:this._location=vs.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new vX(e,t)}get root(){let e=new vs(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vS(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let n=e.slice(0,t);return n}(this._location.path);if(null===e)return null;let t=new vs(this._location.bucket,e);return new vX(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw vn(e)}}async function vJ(e,t,n){let r=await vZ(e,{pageToken:n});t.prefixes.push(...r.prefixes),t.items.push(...r.items),null!=r.nextPageToken&&await vJ(e,t,r.nextPageToken)}function vZ(e,t){null!=t&&"number"==typeof t.maxResults&&vh("options.maxResults",1,1e3,t.maxResults);let n=t||{},r=function(e,t,n,r,i){var s,a;let o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),i&&(o.maxResults=i);let l=t.bucketOnlyServerUrl(),u=vc(l,e.host,e._protocol),h=e.maxOperationRetryTime,c=new vP(u,"GET",(a=t.bucket,function(t,n){let r=function(e,t,n){let r=vE(n);return null===r?null:function(e,t,n){let r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[vx])for(let i of n[vx]){let s=i.replace(/\/$/,""),a=e._makeStorageReference(new vs(t,s));r.prefixes.push(a)}if(n[vO])for(let o of n[vO]){let l=e._makeStorageReference(new vs(t,o.name));r.items.push(l)}return r}(e,t,r)}(e,a,n);return vL(null!==r),r}),h);return c.urlParams=o,c.errorHandler=vU(t),c}(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,vQ)}function v0(e,t){let n=function(e,t){let n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new vs(e._location.bucket,n);return new vX(e.storage,r)}function v1(e,t){let n=null==t?void 0:t[y4];return null==n?null:vs.makeFromBucketSpec(n,e)}class v2{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=y2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=vs.makeFromBucketSpec(r,this._host):this._bucket=v1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=vs.makeFromBucketSpec(this._url,e):this._bucket=v1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vX(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new va(vt());{let s=function(e,t,n,r,i,s,a=!0){var o,l,u,h,c,d,f,p;let m=vd(e.urlParams),g=e.url+m,y=Object.assign({},e.headers);return o=y,t&&(o["X-Firebase-GMPID"]=t),u=y,null!==n&&n.length>0&&(u.Authorization="Firebase "+n),(c=y)["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),f=y,null!==r&&(f["X-Firebase-AppCheck"]=r),new vp(g,e.method,y,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}let v4="@firebase/storage",v3="0.9.12";function v6(e,t){return function(e,t){var n,r,i;if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,n){if(t instanceof v2){if(null==t._bucket)throw new y3("no-default-bucket","No default bucket found. Did you set the '"+y4+"' property when initializing the app?");let r=new vX(t,t._bucket);return null!=n?e(r,n):r}return void 0!==n?v0(t,n):t}(e,t);if(e instanceof v2)return r=e,i=t,new vX(r,i);throw ve("To use ref(service, url), the first argument must be a Storage instance.")}(e=Y(e),t)}ex(new X("storage",function e(t,{instanceIdentifier:n}){let r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new v2(r,i,s,n,eF)},"PUBLIC").setMultipleInstances(!0)),eG(v4,v3,""),eG(v4,v3,"esm2017");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v5{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v8{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new v5(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new v5(t,this,this._ref))},t)}on(e,t,n,r){let i;return t&&(i="function"==typeof t?e=>t(new v5(e,this,this._ref)):{next:t.next?e=>t.next(new v5(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class v9{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new v7(e,this._service))}get items(){return this._delegate.items.map(e=>new v7(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v7{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){var t,n;let r=v0(t=this._delegate,e);return new v7(r,this.storage)}get root(){return new v7(this._delegate.root,this.storage)}get parent(){let e=this._delegate.parent;return null==e?null:new v7(e,this.storage)}put(e,t){var n,r,i,s,a,o;return this._throwIfRoot("put"),new v8(((s=n=Y(n=this._delegate))._throwIfRoot("uploadBytesResumable"),new vY(s,new vT(e),t)),this)}putString(e,t=vy.RAW,n){this._throwIfRoot("putString");let r=vw(t,e),i=Object.assign({},n);return null==i.contentType&&null!=r.contentType&&(i.contentType=r.contentType),new v8(new vY(this._delegate,new vT(r.data,!0),i),this)}listAll(){var e;return(function(e){let t={prefixes:[],items:[]};return vJ(e,t).then(()=>t)})(e=Y(e=this._delegate)).then(e=>new v9(e,this.storage))}list(e){var t,n;return(t=Y(t=this._delegate),vZ(t,e||void 0)).then(e=>new v9(e,this.storage))}getMetadata(){var e;return function(e){e._throwIfRoot("getMetadata");let t=vV(e.storage,e._location,vR());return e.storage.makeRequestWithTokens(t,vQ)}(e=Y(e=this._delegate))}updateMetadata(e){var t,n;return function(e,t){e._throwIfRoot("updateMetadata");let n=function(e,t,n,r){let i=t.fullServerUrl(),s=vc(i,e.host,e._protocol),a=vD(n,r),o=e.maxOperationRetryTime,l=new vP(s,"PATCH",vM(e,r),o);return l.headers={"Content-Type":"application/json; charset=utf-8"},l.body=a,l.errorHandler=vF(t),l}(e.storage,e._location,t,vR());return e.storage.makeRequestWithTokens(n,vQ)}(t=Y(t=this._delegate),e)}getDownloadURL(){var e;return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,n){var r,i;let s=t.fullServerUrl(),a=vc(s,e.host,e._protocol),o=e.maxOperationRetryTime,l=new vP(a,"GET",function(t,r){let i=vN(e,r,n);return vL(null!==i),function(e,t,n,r){let i=vE(t);if(null===i||!vo(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let a=encodeURIComponent,o=s.split(","),l=o.map(t=>{let i=e.bucket,s=e.fullPath,o="/b/"+a(i)+"/o/"+a(s),l=vc(o,n,r),u=vd({alt:"media",token:t});return l+u});return l[0]}(i,r,e.host,e._protocol)},o);return l.errorHandler=vF(t),l}(e.storage,e._location,vR());return e.storage.makeRequestWithTokens(t,vQ).then(e=>{if(null===e)throw new y3("no-download-url","The given file does not have any download URLs.");return e})}(e=Y(e=this._delegate))}delete(){var e;return this._throwIfRoot("delete"),function(e){e._throwIfRoot("deleteObject");let t=function(e,t){let n=t.fullServerUrl(),r=vc(n,e.host,e._protocol),i=e.maxOperationRetryTime,s=new vP(r,"DELETE",function(e,t){},i);return s.successCodes=[200,204],s.errorHandler=vF(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,vQ)}(e=Y(e=this._delegate))}_throwIfRoot(e){if(""===this._delegate._location.path)throw vn(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class we{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(wt(e))throw ve("ref() expected a child path but got a URL, use refFromURL instead.");return new v7(v6(this._delegate,e),this)}refFromURL(e){if(!wt(e))throw ve("refFromURL() expected a full URL but got a child path, use ref() instead.");try{vs.makeFromUrl(e,this._delegate.host)}catch(t){throw ve("refFromUrl() expected a valid full URL but got an invalid one.")}return new v7(v6(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){!function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";let{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:U(i,e.app.options.projectId))}(e,t,n,r)}(this._delegate,e,t,n)}}function wt(e){return/^[A-Za-z]+:\/\//.test(e)}e3.INTERNAL.registerComponent(new X("storage-compat",function e(t,{instanceIdentifier:n}){let r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("storage").getImmediate({identifier:n}),s=new we(r,i);return s},"PUBLIC").setServiceProps({TaskState:vG,TaskEvent:{STATE_CHANGED:"state_changed"},StringFormat:vy,Storage:we,Reference:v7}).setMultipleInstances(!0)),e3.registerVersion("@firebase/storage-compat","0.1.20"),e3.apps.length||e3.initializeApp({apiKey:"AIzaSyALGjwkYUUehwwkDU7cCUTQOTMJFxvjAzI",authDomain:"internhipsystem.firebaseapp.com",projectId:"internhipsystem",storageBucket:"internhipsystem.appspot.com",messagingSenderId:"413571173443",appId:"1:413571173443:web:3191d818d11e411f9018f6"});var wn=e3.firestore(),wr=e3.auth();e3.storage()},2373:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return a}});var i=n(5893),s=n(8384);n(906);var a=function(e){var t=e.Component,n=e.pageProps;return(0,i.jsx)(s.Ho,{children:(0,i.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}({},n))})}},906:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(r){n=a}}();var l=[],u=!1,h=-1;function c(){u&&r&&(u=!1,r.length?l=r.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=o(c);u=!0;for(var t=l.length;t;){for(r=l,l=[];++h<t;)r&&r[h].run();h=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},a=!0;try{t[e](s,s.exports,r),a=!1}finally{a&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},7568:function(e,t,n){"use strict";function r(e,t,n,r,i,s,a){try{var o=e[s](a),l=o.value}catch(u){n(u);return}o.done?t(l):Promise.resolve(l).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(i,s){var a=e.apply(t,n);function o(e){r(a,i,s,o,l,"next",e)}function l(e){r(a,i,s,o,l,"throw",e)}o(void 0)})}}n.d(t,{Z:function(){return i}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);