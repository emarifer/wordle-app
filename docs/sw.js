if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const c=e=>n(e,r),t={module:{uri:r},exports:d,require:c};i[r]=Promise.all(s.map((e=>t[e]||c(e)))).then((e=>(o(...e),d)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.00d1345d.js",revision:null},{url:"assets/index.2684e1dc.css",revision:null},{url:"assets/vendor.5b8a4d2f.js",revision:null},{url:"index.html",revision:"d895f9cc953adb9df243f0d05ee2f365"},{url:"img/favicon.ico",revision:"546e041936ff8ccd1846cd29fe50b9b8"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"fonts/ubuntu.woff2",revision:"d6de97c4deeb4b0352f51d3d5a3db476"},{url:"icons/apple-touch-icon.png",revision:"125730f9ca0a7728947098129a710dec"},{url:"icons/android-chrome-192x192.png",revision:"e57e94890ca403d3aae3e53cd793bce8"},{url:"icons/android-chrome-512x512.png",revision:"d8f125202cfd0b0d7af562c194b131b8"},{url:"manifest.webmanifest",revision:"33e351f1b22c380062659732c0e1075c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));