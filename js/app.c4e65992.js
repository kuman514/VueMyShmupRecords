(function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],s=0,f=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&f.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e6c5f496"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"0520ce3a"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===c))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],s=l.getAttribute("data-href");if(s===r||s===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/VueMyShmupRecords/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["h"])("Home"),u=Object(r["h"])(" | "),a=Object(r["h"])("Criteria"),i=Object(r["h"])(" | "),l=Object(r["h"])("My Records"),s=Object(r["h"])(" | "),f=Object(r["h"])("Licence");function d(e,t){var n=Object(r["y"])("router-link"),d=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",o,[Object(r["i"])(n,{to:"/"},{default:Object(r["D"])((function(){return[c]})),_:1}),u,Object(r["i"])(n,{to:"/criteria"},{default:Object(r["D"])((function(){return[a]})),_:1}),i,Object(r["i"])(n,{to:"/myrecords"},{default:Object(r["D"])((function(){return[l]})),_:1}),s,Object(r["i"])(n,{to:"/licence"},{default:Object(r["D"])((function(){return[f]})),_:1})]),Object(r["i"])(d)],64)}n("8cdc");var p=n("6b0d"),b=n.n(p);const h={},m=b()(h,[["render",d]]);var v=m,j=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),O=n("e91b"),y=n.n(O),g={class:"home"},w=Object(r["f"])("img",{alt:"My Shmup Records With Vue.js",src:y.a},null,-1),_=[w];function S(e,t,n,o,c,u){return Object(r["r"])(),Object(r["e"])("div",g,_)}var P={name:"Home",components:{}};const k=b()(P,[["render",S]]);var C=k,E=[{path:"/",name:"Home",component:C},{path:"/criteria",name:"Criteria",component:function(){return n.e("about").then(n.bind(null,"b848"))}},{path:"/myrecords",name:"MyRecords",component:function(){return n.e("about").then(n.bind(null,"96f0"))}},{path:"/licence",name:"Licence",component:function(){return n.e("about").then(n.bind(null,"e70f"))}}],x=Object(j["a"])({history:Object(j["b"])(),routes:E}),M=x;Object(r["c"])(v).use(M).mount("#app")},"8cdc":function(e,t,n){"use strict";n("e118")},e118:function(e,t,n){},e91b:function(e,t,n){e.exports=n.p+"img/truelogo.91a42a71.png"}});
//# sourceMappingURL=app.c4e65992.js.map