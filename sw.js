var __wpo = {"assets":{"main":["/css-in-js-playground/9f0e56f7e164c1756812.worker.js","/css-in-js-playground/scripts/0.8ce14f419aebcded9bd1.js","/css-in-js-playground/scripts/1.e8a4f548b8a52e6548fa.js","/css-in-js-playground/scripts/2.6e59fd40497023c5586a.js","/css-in-js-playground/scripts/3.0588154e2e6e2a65a904.js","/css-in-js-playground/scripts/4.3e4f7358cf1b004159fb.js","/css-in-js-playground/scripts/5.1c85490bde31735fe78e.js","/css-in-js-playground/scripts/6.5a58d9a6e162012dedd1.js","/css-in-js-playground/scripts/7.a639d9add6e71d122a72.js","/css-in-js-playground/scripts/bundle.fbc968e4020c10639e93.js","/css-in-js-playground/scripts/vendor.ce3a6f16d9fd56289982.js","/css-in-js-playground/scripts/runtime.e5c0f28d9cac3d6d5c53.js","/css-in-js-playground/vendor.css","/css-in-js-playground/"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"578c18f95eaf1b26d53eb10ca8236a25a121be07":"/css-in-js-playground/9f0e56f7e164c1756812.worker.js","aea60368b0bae774b5f082c4108d92e944917bc8":"/css-in-js-playground/scripts/0.8ce14f419aebcded9bd1.js","14f53b372757f02b1061e8a09bd32337f2c1b19a":"/css-in-js-playground/scripts/1.e8a4f548b8a52e6548fa.js","ea05e5d378405b79817ddf911e245c3a671d883a":"/css-in-js-playground/scripts/2.6e59fd40497023c5586a.js","30c21a4435001ff14bea8880c59f7d1c61f8db3c":"/css-in-js-playground/scripts/3.0588154e2e6e2a65a904.js","8c67777f5968fc45cf7fe27b69de6efa96a8211b":"/css-in-js-playground/scripts/4.3e4f7358cf1b004159fb.js","302e498fb8da4b485e7445098f530518318cb810":"/css-in-js-playground/scripts/5.1c85490bde31735fe78e.js","5cc52ee73d05640691ae5d0b1d47ece0beb1dddf":"/css-in-js-playground/scripts/6.5a58d9a6e162012dedd1.js","f6e4650fbf8b2002dc4deecc645a5994dd0c6075":"/css-in-js-playground/scripts/7.a639d9add6e71d122a72.js","9c4e27a3964c6621a231a88658c2fe4e623f7b78":"/css-in-js-playground/scripts/bundle.fbc968e4020c10639e93.js","e99043756ebac3d5e5d578a951fae126878b6a5f":"/css-in-js-playground/scripts/vendor.ce3a6f16d9fd56289982.js","33f7e9b2fee29f764dc00f5cd4831c99f535ca09":"/css-in-js-playground/scripts/runtime.e5c0f28d9cac3d6d5c53.js","5d9eee62e6812277c910a6773e2fa7e1dfed04c2":"/css-in-js-playground/vendor.css","022d765737bc7fa13cf35f18e8a3a0fc7c736d5d":"/css-in-js-playground/"},"strategy":"changed","responseStrategy":"cache-first","version":"2017-9-10 15:54:02","name":"webpack-offline","pluginVersion":"4.8.3","relativePaths":false};

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/css-in-js-playground/",n(n.s="/home/travis/build/DSchau/css-in-js-playground/node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22loaders%22%3A%5B%5D%2C%22cacheMaps%22%3A%5B%5D%7D!/home/travis/build/DSchau/css-in-js-playground/node_modules/offline-plugin/tpls/empty-entry.js")}({"/home/travis/build/DSchau/css-in-js-playground/node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22loaders%22%3A%5B%5D%2C%22cacheMaps%22%3A%5B%5D%7D!/home/travis/build/DSchau/css-in-js-playground/node_modules/offline-plugin/tpls/empty-entry.js":function(e,n,t){"use strict";function r(e,n){return caches.match(e,{cacheName:n}).then(function(t){return a()?t:s(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function o(e,n){return e+(-1!==e.indexOf("?")?"&":"?")+"__uncache="+encodeURIComponent(n)}function i(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}function a(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function s(e){return a(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function c(e){return Object.keys(e).reduce(function(n,t){return n[t]=e[t],n},{})}function u(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}if(function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}(),void 0===l)var l=!1;!function(e,n){function t(){if(!k.additional.length)return Promise.resolve();l&&console.log("[SW]:","Caching additional");var e=void 0;return e="changed"===j?f("additional"):a("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function a(n){var t=k[n];return caches.open(P).then(function(n){return y(n,t,{bust:e.version,request:e.prefetchRequest})}).then(function(){u("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function f(n){return d().then(function(t){if(!t)return a(n);var r=t[0],o=t[1],i=t[2],s=i.hashmap,c=i.version;if(!i.hashmap||c===e.version)return a(n);var l=Object.keys(s).map(function(e){return s[e]}),f=o.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),h=k[n],d=[],p=h.filter(function(e){return-1===f.indexOf(e)||-1===l.indexOf(e)});Object.keys(R).forEach(function(e){var n=R[e];if(-1!==h.indexOf(n)&&-1===p.indexOf(n)&&-1===d.indexOf(n)){var t=s[e];t&&-1!==f.indexOf(t)?d.push([t,n]):p.push(n)}}),u("Changed assets: "+n,p),u("Moved assets: "+n,d);var v=Promise.all(d.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(P).then(function(n){var t=v.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([t,y(n,p,{bust:e.version,request:e.prefetchRequest})])})})}function h(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(W)&&0!==e.indexOf(P))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function d(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(W)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(q,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function p(){return caches.open(P).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:R}));return n.put(new URL(q,location).toString(),t)})}function v(e,n,t){return r(t,P).then(function(r){return r?(l&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(l&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&function(){var t=r.clone(),o=caches.open(P).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(o)}(),r):(l&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r)})})}function m(e,n,t){return fetch(e.request).then(function(e){if(e.ok)return l&&console.log("[SW]:","URL ["+n+"] from network"),e;throw new Error("Response is not ok")}).catch(function(){return l&&console.log("[SW]:","URL ["+n+"] from cache if possible"),r(t,P)})}function g(e){return e.catch(function(){}).then(function(e){var n=e&&e.ok,t=e&&"opaqueredirect"===e.type;return n||t&&!C?e:(l&&console.log("[SW]:","Loading navigation fallback ["+D+"] from cache"),r(D,P))})}function y(e,n,t){var r=!1!==t.allowLoaders,i=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(n.map(function(e){return i&&(e=o(e,i)),fetch(e,a).then(s)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(w(n[o],t)),e.put(n[o],t)});return i.length?function(){var r=c(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return n.length&&(o=o.concat(y(e,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function w(e,n){var t=Object.keys(_).map(function(t){if(-1!==_[t].indexOf(e)&&S[t])return S[t](n.clone())}).filter(function(e){return!!e});return Promise.all(t).then(function(e){return[].concat.apply([],e)})}function b(e){var n=e.url,t=new URL(n),r=void 0;r="navigate"===e.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<x.length;o++){var i=x[o];if(i&&(!i.requestTypes||-1!==i.requestTypes.indexOf(r))){var a=void 0;if((a="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to))&&a!==n)return a}}}var S=n.loaders,x=n.cacheMaps,j=e.strategy,O=e.responseStrategy,k=e.assets,_=e.loaders||{},R=e.hashesMap,U=e.externals,W=e.name,L=e.version,P=W+":"+L,q="__offline_webpack__data";!function(){Object.keys(k).forEach(function(e){k[e]=k[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===U.indexOf(e)&&(n.search=""),n.toString()})}),Object.keys(_).forEach(function(e){_[e]=_[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===U.indexOf(e)&&(n.search=""),n.toString()})}),R=Object.keys(R).reduce(function(e,n){var t=new URL(R[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),U=U.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})}();var E=[].concat(k.main,k.additional,k.optional),D=e.navigateFallbackURL,C=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===j?f("main"):a("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=t();n=n.then(p),n=n.then(h),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(n)}),self.addEventListener("fetch",function(e){var n=new URL(e.request.url);n.hash="";var t=n.toString();-1===U.indexOf(t)&&(n.search="",t=n.toString());var r="GET"===e.request.method,o=-1!==E.indexOf(t),a=t;if(!o){var s=b(e.request);s&&(a=s,o=!0)}if(!o&&r&&D&&i(e.request))return void e.respondWith(g(fetch(e.request)));if(!o||!r)return void(n.origin!==location.origin&&-1!==navigator.userAgent.indexOf("Firefox/44.")&&e.respondWith(fetch(e.request)));var c=void 0;c="network-first"===O?m(e,t,a):v(e,t,a),D&&i(e.request)&&(c=g(c)),e.respondWith(c)}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}(__wpo,{loaders:{},cacheMaps:[]}),e.exports=t("/home/travis/build/DSchau/css-in-js-playground/node_modules/source-map-loader/index.js!/home/travis/build/DSchau/css-in-js-playground/node_modules/offline-plugin/tpls/empty-entry.js")},"/home/travis/build/DSchau/css-in-js-playground/node_modules/source-map-loader/index.js!/home/travis/build/DSchau/css-in-js-playground/node_modules/offline-plugin/tpls/empty-entry.js":function(e,n){}});