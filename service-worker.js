if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const n=e=>c(e,d),l={module:{uri:d},exports:a,require:n};i[d]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c4f042aebe2844d9c0362e3b711c7e7d"},{url:"7f185260.html",revision:"0f8cfd33d5a13229b8a4c704938ed102"},{url:"about/index.html",revision:"ad8819b18e93d6111d71882b1dac8172"},{url:"archives/2022/04/index.html",revision:"41bb49560588247455c578b4ae61a547"},{url:"archives/2022/index.html",revision:"6f0c6cb28584ab014f47c9c7e55a8c7a"},{url:"archives/index.html",revision:"bedb95854d9e54d5c9bf01d2636c1cf4"},{url:"categories/index.html",revision:"3c6633224aa580aa793f580768988342"},{url:"categories/Java并发实现原理/index.html",revision:"af15de715b0ce48203b3439dd1fbe586"},{url:"css/index.css",revision:"090251268acf41c72426e09b2b7d1de8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fafa8499.html",revision:"259ec8484fc5e8f249b6e24cf01375dd"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"index.html",revision:"50baeb3212ef6362bccd3c32691bf093"},{url:"js/main.js",revision:"c6c7244917621228ebccbc3a5c60b0fc"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"1685cd43da0de7abd4a649dd5b2d81db"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"9f465e7dd29ec62dbc6af321882c2b59"},{url:"link/index.html",revision:"f600c7c2a5c9ebcf275ce817ea926eec"},{url:"movies/index.html",revision:"dc2f2a37c756980c94f57bb346937c06"},{url:"music/index.html",revision:"496c9ae2cc2283747395f34cac2c059f"},{url:"self/custom.css",revision:"ae89caee9d82ade28b645686015616a4"},{url:"self/duotone.css",revision:"29a29602ea7119362d963ef71bb07a13"},{url:"self/Kimbiedark.css",revision:"0897a9a533d730e50b6471fd1f93deb2"},{url:"tags/index.html",revision:"5a49ee2a9945ee20bd7e18f2a2696c5d"},{url:"tags/Java多线程/index.html",revision:"f734ab148007bb8bf713b7f8742d4b72"},{url:"tags/Java并发实现原理/index.html",revision:"6f07ff94ccee078b53fe97f552fb26e3"}],{}),e.registerRoute("https://blog.nesive.com",new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
