(function(e){function t(t){for(var i,o,a=t[0],c=t[1],l=t[2],u=0,f=[];u<a.length;u++)o=a[u],r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},s=[];function o(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"40d22058"}[e]+".js"}function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=r[e]=[t,i]});t.push(n[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=o(e),s=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+i+": "+s+")");o.type=i,o.request=s,n[1](o)}r[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/conference-toolkit/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"096c":function(e,t,n){},"21bb":function(e,t,n){"use strict";var i=n("bcc9"),r=n.n(i);r.a},"2c72":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("5c0b"),n("2877")),a={},c=Object(o["a"])(a,r,s,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",class:{"is-previous":e.isPreviousSlide,"first-load":e.isFirstLoad},attrs:{id:"home"}},[e._l(e.slides,function(t,i){return n("div",{key:"slide-"+i,staticClass:"slide-wrapper",class:{active:i===e.currentSlide},style:{"z-index":e.slides.length-i,"background-image":"url("+t.bgImg+")"}},[n("div",{staticClass:"slide-inner"},[n("div",{staticClass:"slide-bg-text"},[n("p",[e._v(e._s(t.headlineFirstLine))]),n("p",[e._v(e._s(t.headlineSecondLine))])]),n("div",{staticClass:"slide-rect-filter"},[n("div",{staticClass:"slide-rect",style:{"border-image-source":"url("+t.rectImg+")"}})]),n("div",{staticClass:"slide-content"},[n("h1",{staticClass:"slide-content-text"},[n("p",[e._v(e._s(t.headlineFirstLine))]),n("p",[e._v(e._s(t.headlineSecondLine))])]),n("a",{staticClass:"slide-content-cta"},[e._v("Call To Action")])]),n("h2",{staticClass:"slide-side-text"},[n("span",[e._v(e._s(t.sublineFirstLine)+" /")]),n("span",[e._v(e._s(t.sublineSecondLine))])]),t.content?n("div",{staticClass:"slide-custom"},["twitter"===t.content?n("c-twitter"):e._e(),"youtube"===t.content?n("c-youtube"):e._e()],1):e._e()])])}),n("div",{staticClass:"controls-container"},e._l(e.slides,function(t,i){return n("button",{key:"controls-"+i,staticClass:"controls-button",class:{active:i===e.currentSlide},on:{click:function(t){return e.updateSlide(i)}}},[e._v(e._s(t.headlineFirstLine)+" "+e._s(t.headlineSecondLine))])}),0),n("div",{staticClass:"pagination-container"},e._l(e.slides,function(t,i){return n("span",{key:"pagination-"+i,staticClass:"pagination-item",class:{active:i===e.currentSlide},on:{click:function(t){return e.updateSlide(i)}}})}),0),n("c-logo")],2)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"twitter"},[n("a",{staticClass:"twitter-timeline",attrs:{"data-lang":"fr","data-theme":"dark","data-link-color":"#E81C4F",href:"https://twitter.com/"+e.twittername+"?ref_src=twsrc%5Etfw"}},[e._v("Tweets by ZenikaMontreal")])])},m=[],g={name:"Twitter",data:function(){return{twittername:"AurelienLoyer"}}},h=g,b=(n("805d"),Object(o["a"])(h,p,m,!1,null,"5119f725",null)),v=b.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"youtube"},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/b_Gh5YIzs9o?&autoplay=1&mute=1",frameborder:"0",allowfullscreen:""}})])}],L={name:"Youtube",data:function(){return{}}},S=L,y=(n("c482"),Object(o["a"])(S,w,_,!1,null,"1328af5a",null)),C=y.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{staticClass:"logo",attrs:{src:"/img/znk2.png",alt:""}})},k=[],F={name:"Logo",data:function(){return{}}},I=F,x=(n("688e"),Object(o["a"])(I,j,k,!1,null,"572059bf",null)),E=x.exports,O={name:"Home",components:{"c-twitter":v,"c-youtube":C,"c-logo":E},data:function(){return{currentSlide:0,isLoopUp:!0,isPreviousSlide:!1,isFirstLoad:!0,slides:[{headlineFirstLine:"C0d1ng",headlineSecondLine:"Th3 St4rs",sublineFirstLine:"Lead by passion",sublineSecondLine:"Zenika",bgImg:"./img/sw2.png",rectImg:"./img/sw2.png"},{headlineFirstLine:"Zenika",headlineSecondLine:"Twitter",sublineFirstLine:"Il n'y a rien de neuf sous",sublineSecondLine:"le soleil",bgImg:"./img/sw4.jpg",rectImg:"./img/sw4.jpg",content:"twitter"},{headlineFirstLine:"Contest",headlineSecondLine:"Zenika",sublineFirstLine:"Il n'y a rien de neuf sous",sublineSecondLine:"le soleil",bgImg:"./img/sw3.jpg",rectImg:"./img/sw3-1.jpg"},{headlineFirstLine:"Zenika",headlineSecondLine:"Speakers",sublineFirstLine:"Aurelien Loyer",sublineSecondLine:"Anna Filina",bgImg:"./img/sw1.jpg",rectImg:"./img/sw1.jpg"},{headlineFirstLine:"zLife",headlineSecondLine:"",sublineFirstLine:"Enter in the",sublineSecondLine:"zLife",bgImg:"./img/sw6.jpg",rectImg:"./img/sw6.jpg",content:"youtube"}]}},mounted:function(){var e=this,t=document.getElementById("home"),n=0,i=0;t.addEventListener("touchstart",function(e){return n=e.touches[0].pageX}),t.addEventListener("touchmove",function(e){return i=e.touches[0].pageX}),t.addEventListener("touchend",function(){var t=n-i;t<150&&0<e.currentSlide&&e.currentSlide--,t>-150&&e.currentSlide<e.slides.length-1&&e.currentSlide++}),setInterval(function(){e.currentSlide++,e.currentSlide===e.slides.length&&(e.currentSlide=0)},2e4)},methods:{updateSlide:function(e){e<this.currentSlide?this.isPreviousSlide=!0:this.isPreviousSlide=!1,this.currentSlide=e,this.isFirstLoad=!1}}},P=O,T=(n("21bb"),Object(o["a"])(P,d,f,!1,null,null,null)),$=T.exports;i["a"].use(u["a"]);var z=new u["a"]({mode:"history",base:"/conference-toolkit/",routes:[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});i["a"].config.productionTip=!1,new i["a"]({router:z,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(e,t,n){},"688e":function(e,t,n){"use strict";var i=n("096c"),r=n.n(i);r.a},"805d":function(e,t,n){"use strict";var i=n("ea1c"),r=n.n(i);r.a},bcc9:function(e,t,n){},c482:function(e,t,n){"use strict";var i=n("2c72"),r=n.n(i);r.a},ea1c:function(e,t,n){}});
//# sourceMappingURL=app.208b6e6d.js.map