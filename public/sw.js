if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-2780d724"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/283-6814d38e2b5823ac.js",revision:"6814d38e2b5823ac"},{url:"/_next/static/chunks/399-51fad62a936d814c.js",revision:"51fad62a936d814c"},{url:"/_next/static/chunks/518.056ea5c984d1a55d.js",revision:"056ea5c984d1a55d"},{url:"/_next/static/chunks/535.6f6bd2b0e291e1e3.js",revision:"6f6bd2b0e291e1e3"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"884bc9854a9cfe85"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-21fbc9a5ad2df4ee.js",revision:"21fbc9a5ad2df4ee"},{url:"/_next/static/chunks/pages/404-63291310404fb5d6.js",revision:"63291310404fb5d6"},{url:"/_next/static/chunks/pages/_app-58a56c930cfdb4d1.js",revision:"58a56c930cfdb4d1"},{url:"/_next/static/chunks/pages/_error-815e492bede44f3e.js",revision:"815e492bede44f3e"},{url:"/_next/static/chunks/pages/auth-1fe56eddd2203b15.js",revision:"1fe56eddd2203b15"},{url:"/_next/static/chunks/pages/favorites-6c22b17bc8432aff.js",revision:"6c22b17bc8432aff"},{url:"/_next/static/chunks/pages/film/%5Bid%5D-cf92fd914f5a2e59.js",revision:"cf92fd914f5a2e59"},{url:"/_next/static/chunks/pages/index-63c6fbb7632ad78f.js",revision:"63c6fbb7632ad78f"},{url:"/_next/static/chunks/pages/lists/categories/movies-ca6fe30063cd3b66.js",revision:"ca6fe30063cd3b66"},{url:"/_next/static/chunks/pages/lists/categories/movies/cartoons-97f165aa779ba4f5.js",revision:"97f165aa779ba4f5"},{url:"/_next/static/chunks/pages/lists/categories/movies/series-7a6e8ccf053598b6.js",revision:"7a6e8ccf053598b6"},{url:"/_next/static/chunks/pages/lists/categories/movies/years-0b214033fbc0ddf2.js",revision:"0b214033fbc0ddf2"},{url:"/_next/static/chunks/pages/lists/movies/best_films-bf20cced95fc7d41.js",revision:"bf20cced95fc7d41"},{url:"/_next/static/chunks/pages/lists/movies/comedy_films-a703c579fc7a7c73.js",revision:"a703c579fc7a7c73"},{url:"/_next/static/chunks/pages/lists/movies/horror_films-867f0946ec81cef9.js",revision:"867f0946ec81cef9"},{url:"/_next/static/chunks/pages/lists/movies/war_films-c21ffa7097a5691c.js",revision:"c21ffa7097a5691c"},{url:"/_next/static/chunks/pages/search/%5Bid%5D-5f722681cd0c8b46.js",revision:"5f722681cd0c8b46"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-a0d8a58181d6d187.js",revision:"a0d8a58181d6d187"},{url:"/_next/static/css/0bd0f69a8da332df.css",revision:"0bd0f69a8da332df"},{url:"/_next/static/css/5fcbc1dc0332f9ad.css",revision:"5fcbc1dc0332f9ad"},{url:"/_next/static/css/715d5b9a69883054.css",revision:"715d5b9a69883054"},{url:"/_next/static/css/ec6bf5ff28e3f27f.css",revision:"ec6bf5ff28e3f27f"},{url:"/_next/static/css/f290e14b35247b28.css",revision:"f290e14b35247b28"},{url:"/_next/static/css/f6a5948fb470a426.css",revision:"f6a5948fb470a426"},{url:"/_next/static/css/f8e4de43f3c1f320.css",revision:"f8e4de43f3c1f320"},{url:"/_next/static/lGqCfjhfdBMkE3jHV7EJ2/_buildManifest.js",revision:"874a35efbeccacbda3cb62db4976612f"},{url:"/_next/static/lGqCfjhfdBMkE3jHV7EJ2/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/lGqCfjhfdBMkE3jHV7EJ2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"34ee9ed99273b178cfaab99b1fbc4d6a"},{url:"/icons/icon-128x128.png",revision:"ed71efe8c1e31e605897c4e0171f83f6"},{url:"/icons/icon-144x144.png",revision:"d9a869458a89e798459710e7a8028246"},{url:"/icons/icon-152x152.png",revision:"0dedc3071c2c73f0bda7b593f6558f15"},{url:"/icons/icon-192x192.png",revision:"0ce8446c4ac510e59c6d5ca0900db6fb"},{url:"/icons/icon-384x384.png",revision:"6057c09d0bbd6a8a4215d7ddfb051c6a"},{url:"/icons/icon-512x512.png",revision:"3650a08a216920abf8dd8d95cba53918"},{url:"/icons/icon-72x72.png",revision:"1deefc2ceb464b17a8627e38551cd2b3"},{url:"/icons/icon-96x96.png",revision:"d53dc757ae185536c1a84ff46eddd0d0"},{url:"/logo.svg",revision:"8c28fffbf8b0f5e24dc2faf8b70657dc"},{url:"/manifest.json",revision:"ed085b71e6220b327b4b98a7268b67bb"},{url:"/trailer.mp4",revision:"d6176db411467b57ee46707729152039"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
