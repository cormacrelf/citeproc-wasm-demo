(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{392:function(n,t,r){"use strict";(function(n){r.d(t,"a",function(){return j}),r.d(t,"F",function(){return x}),r.d(t,"z",function(){return k}),r.d(t,"D",function(){return D}),r.d(t,"E",function(){return O}),r.d(t,"h",function(){return A}),r.d(t,"g",function(){return R}),r.d(t,"C",function(){return q}),r.d(t,"d",function(){return P}),r.d(t,"l",function(){return F}),r.d(t,"k",function(){return I}),r.d(t,"y",function(){return T}),r.d(t,"f",function(){return B}),r.d(t,"o",function(){return S}),r.d(t,"u",function(){return U}),r.d(t,"e",function(){return z}),r.d(t,"n",function(){return J}),r.d(t,"b",function(){return V}),r.d(t,"p",function(){return G}),r.d(t,"s",function(){return L}),r.d(t,"x",function(){return M}),r.d(t,"w",function(){return H}),r.d(t,"B",function(){return N}),r.d(t,"t",function(){return K}),r.d(t,"v",function(){return Q}),r.d(t,"r",function(){return W}),r.d(t,"c",function(){return X}),r.d(t,"m",function(){return Y}),r.d(t,"i",function(){return Z}),r.d(t,"j",function(){return $}),r.d(t,"q",function(){return nn}),r.d(t,"H",function(){return tn}),r.d(t,"I",function(){return rn}),r.d(t,"G",function(){return en}),r.d(t,"A",function(){return un});var e=r(393);const u=new Array(32).fill(void 0);function o(n){return u[n]}u.push(void 0,null,!0,!1);let i=u.length;function c(n){const t=o(n);return function(n){n<36||(u[n]=i,i=n)}(n),t}let f=0,d=null;function a(){return null!==d&&d.buffer===e.E.buffer||(d=new Uint8Array(e.E.buffer)),d}let _=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const l="function"==typeof _.encodeInto?function(n,t){return _.encodeInto(n,t)}:function(n,t){const r=_.encode(n);return t.set(r),{read:n.length,written:r.length}};function s(n,t,r){if(void 0===r){const r=_.encode(n),e=t(r.length);return a().subarray(e,e+r.length).set(r),f=r.length,e}let e=n.length,u=t(e);const o=a();let i=0;for(;i<e;i++){const t=n.charCodeAt(i);if(t>127)break;o[u+i]=t}if(i!==e){0!==i&&(n=n.slice(i)),u=r(u,e,e=i+3*n.length);const t=a().subarray(u+i,u+e);i+=l(n,t).written}return f=i,u}let b=null;function g(){return null!==b&&b.buffer===e.E.buffer||(b=new Int32Array(e.E.buffer)),b}function w(n){i===u.length&&u.push(u.length+1);const t=i;return i=u[t],u[t]=n,t}let p=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function h(n,t){return p.decode(a().subarray(n,n+t))}function y(n,t,r){e.h(n,t,w(r))}p.decode();let v=null;function m(n,t){const r=t(4*n.length),u=(null!==v&&v.buffer===e.E.buffer||(v=new Uint32Array(e.E.buffer)),v);for(let t=0;t<n.length;t++)u[r/4+t]=w(n[t]);return f=n.length,r}function E(n){return function(){try{return n.apply(this,arguments)}catch(n){e.b(w(n))}}}function C(n,t){return a().subarray(n/1,n/1+t)}class j{static __wrap(n){const t=Object.create(j.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,e.a(n)}static new(n,t,r){var u=s(n,e.f,e.g),o=f,i=s(r,e.f,e.g),c=f,d=e.v(u,o,w(t),i,c);return j.__wrap(d)}setStyle(n){var t=s(n,e.f,e.g),r=f;e.C(this.ptr,t,r)}resetReferences(n){var t=m(n,e.f),r=f;e.A(this.ptr,t,r)}insertReferences(n){var t=m(n,e.f),r=f;e.t(this.ptr,t,r)}insertReference(n){e.s(this.ptr,w(n))}removeReference(n){var t=s(n,e.f,e.g),r=f;e.z(this.ptr,t,r)}includeUncited(n){e.p(this.ptr,w(n))}toFetch(){return c(e.D(this.ptr))}randomClusterId(){try{const r=e.d.value-16;e.d.value=r,e.x(r,this.ptr);var n=g()[r/4+0],t=g()[r/4+1];return h(n,t)}finally{e.d.value+=16,e.e(n,t)}}insertCluster(n){e.r(this.ptr,w(n))}removeCluster(n){var t=s(n,e.f,e.g),r=f;e.y(this.ptr,t,r)}initClusters(n){var t=m(n,e.f),r=f;e.q(this.ptr,t,r)}builtCluster(n){var t=s(n,e.f,e.g),r=f;return c(e.k(this.ptr,t,r))}previewCitationCluster(n,t,r){var u=m(n,e.f),o=f,i=m(t,e.f),d=f,a=s(r,e.f,e.g),_=f;return c(e.w(this.ptr,u,o,i,d,a,_))}makeBibliography(){return c(e.u(this.ptr))}bibliographyMeta(){return c(e.j(this.ptr))}setClusterOrder(n){var t=m(n,e.f),r=f;e.B(this.ptr,t,r)}batchedUpdates(){return c(e.i(this.ptr))}fullRender(){return c(e.o(this.ptr))}drain(){e.m(this.ptr)}fetchAll(){return c(e.n(this.ptr))}disambiguationDfaDot(n){try{const i=e.d.value-16;e.d.value=i;var t=s(n,e.f,e.g),r=f;e.l(i,this.ptr,t,r);var u=g()[i/4+0],o=g()[i/4+1];return h(u,o)}finally{e.d.value+=16,e.e(u,o)}}}const x=function(n){c(n)},k=function(n){const t=c(n).original;if(1==t.cnt--)return t.a=0,!0;return!1},D=function(n,t){const r=o(t);var u=s(JSON.stringify(void 0===r?null:r),e.f,e.g),i=f;g()[n/4+1]=i,g()[n/4+0]=u},O=function(n){return w(o(n))},A=function(n,t,r){return w(o(n).fetchLocale(h(t,r)))},R=function(n){console.error(c(n))},q=function(n,t){return w(JSON.parse(h(n,t)))},P=function(n,t){console.debug(h(n,t))},F=function(n,t){console.log(h(n,t))},I=function(n,t){console.info(h(n,t))},T=function(n,t){console.warn(h(n,t))},B=function(n,t){console.error(h(n,t))},S=function(){return w(new Error)},U=function(n,t){var r=s(o(t).stack,e.f,e.g),u=f;g()[n/4+1]=u,g()[n/4+0]=r},z=function(n,t){try{console.error(h(n,t))}finally{e.e(n,t)}},J=function(n,t){return w(new Error(h(n,t)))},V=E(function(n,t,r){return w(o(n).call(o(t),o(r)))}),G=function(n,t){try{var r={a:n,b:t},u=new Promise((n,t)=>{const u=r.a;r.a=0;try{return function(n,t,r,u){e.F(n,t,w(r),w(u))}(u,r.b,n,t)}finally{r.a=u}});return w(u)}finally{r.a=r.b=0}},L=function(n){return w(Promise.resolve(o(n)))},M=function(n,t){return w(o(n).then(o(t)))},H=function(n,t,r){return w(o(n).then(o(t),o(r)))},N=function(n){return void 0===o(n)},K=E(function(){return w(self.self)}),Q=function(){return w(n)},W=function(n,t,r){return w(o(n).require(h(t,r)))},X=function(n){return w(o(n).crypto)},Y=function(n){return w(o(n).msCrypto)},Z=function(n){return w(o(n).getRandomValues)},$=function(n,t,r){o(n).getRandomValues(C(t,r))},nn=function(n,t,r){o(n).randomFillSync(C(t,r))},tn=function(n,t){const r=o(t);var u="string"==typeof r?r:void 0,i=null==u?0:s(u,e.f,e.g),c=f;g()[n/4+1]=c,g()[n/4+0]=i},rn=function(n,t){throw new Error(h(n,t))},en=function(n){throw c(n)},un=function(n,t,r){return w(function(n,t,r,u){const o={a:n,b:t,cnt:1,dtor:r},i=(...n)=>{o.cnt++;const t=o.a;o.a=0;try{return u(t,o.b,...n)}finally{0==--o.cnt?e.c.get(o.dtor)(t,o.b):o.a=t}};return i.original=o,i}(n,t,291,y))}}).call(this,r(394)(n))},393:function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(392);e.G()},394:function(n,t){n.exports=function(n){if(!n.webpackPolyfill){var t=Object.create(n);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},395:function(n,t,r){"use strict";r.r(t);var e=r(392);r.d(t,"Driver",function(){return e.a}),r.d(t,"__wbindgen_object_drop_ref",function(){return e.F}),r.d(t,"__wbindgen_cb_drop",function(){return e.z}),r.d(t,"__wbindgen_json_serialize",function(){return e.D}),r.d(t,"__wbindgen_object_clone_ref",function(){return e.E}),r.d(t,"__wbg_fetchLocale_8f52b973b0739a6c",function(){return e.h}),r.d(t,"__wbg_error_e549f7fed6d655aa",function(){return e.g}),r.d(t,"__wbindgen_json_parse",function(){return e.C}),r.d(t,"__wbg_debug_4885c3f7d6f044a3",function(){return e.d}),r.d(t,"__wbg_log_bee3ea1a89f334d8",function(){return e.l}),r.d(t,"__wbg_info_0547ff9513f2019b",function(){return e.k}),r.d(t,"__wbg_warn_a478dea6e6e05394",function(){return e.y}),r.d(t,"__wbg_error_72e88ba6901b6eee",function(){return e.f}),r.d(t,"__wbg_new_59cb74e423758ede",function(){return e.o}),r.d(t,"__wbg_stack_558ba5917b466edd",function(){return e.u}),r.d(t,"__wbg_error_4bb6c2a97407129a",function(){return e.e}),r.d(t,"__wbg_new_1192d65414040ad9",function(){return e.n}),r.d(t,"__wbg_call_d713ea0274dfc6d2",function(){return e.b}),r.d(t,"__wbg_new_d0c63652ab4d825c",function(){return e.p}),r.d(t,"__wbg_resolve_2529512c3bb73938",function(){return e.s}),r.d(t,"__wbg_then_4a7a614abbbe6d81",function(){return e.x}),r.d(t,"__wbg_then_3b7ac098cfda2fa5",function(){return e.w}),r.d(t,"__wbindgen_is_undefined",function(){return e.B}),r.d(t,"__wbg_self_1c83eb4471d9eb9b",function(){return e.t}),r.d(t,"__wbg_static_accessor_MODULE_abf5ae284bffdf45",function(){return e.v}),r.d(t,"__wbg_require_5b2b5b594d809d9f",function(){return e.r}),r.d(t,"__wbg_crypto_c12f14e810edcaa2",function(){return e.c}),r.d(t,"__wbg_msCrypto_679be765111ba775",function(){return e.m}),r.d(t,"__wbg_getRandomValues_05a60bf171bfc2be",function(){return e.i}),r.d(t,"__wbg_getRandomValues_3ac1b33c90b52596",function(){return e.j}),r.d(t,"__wbg_randomFillSync_6f956029658662ec",function(){return e.q}),r.d(t,"__wbindgen_string_get",function(){return e.H}),r.d(t,"__wbindgen_throw",function(){return e.I}),r.d(t,"__wbindgen_rethrow",function(){return e.G}),r.d(t,"__wbindgen_closure_wrapper952",function(){return e.A})}}]);