(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],r[s]&&d.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},s={app:0},r={app:0},a=[];function o(t){return c.p+"js/"+({admin:"admin",remote:"remote",settings:"settings"}[t]||t)+"."+{admin:"d69dfaa8",remote:"99a75ea2",settings:"a8c4a584"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={admin:1,remote:1,settings:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var i="css/"+({admin:"admin",remote:"remote",settings:"settings"}[t]||t)+"."+{admin:"11c6d0c6",remote:"f03db72a",settings:"61aebc48"}[t]+".css",r=c.p+i,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var l=a[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===i||u===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");a.request=i,delete s[t],p.parentNode.removeChild(p),n(a)},p.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(p)}).then(function(){s[t]=0}));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise(function(e,n){i=r[t]=[e,n]});e.push(i[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+i+": "+s+")");a.type=i,a.request=s,n[1](a)}r[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/conference-toolkit/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},1949:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.contest1Title?n("div",{staticClass:"card top"},[n("div",{staticClass:"left"}),n("div",{staticClass:"right"},[t.contest1Image?n("img",{staticClass:"helmet",attrs:{src:t.contest1Image,alt:"helmet"}}):t._e(),n("div",{staticClass:"productInfo"},[n("h1",{domProps:{innerHTML:t._s(t.contest1Title)}}),n("h2",[t._v(t._s(t.contest1Content))]),n("h2",{staticClass:"redznk"},[t._v("\n          "+t._s(t.contest1SubContent)+"\n        ")]),t._e()])])]):t._e(),t.contest2Title?n("div",{staticClass:"card bottom contest2"},[n("div",{staticClass:"right"},[n("div",{staticClass:"productInfo"},[n("img",{staticClass:"contest-img",attrs:{src:t.contest2Image,alt:"helmet"}})])]),n("div",{staticClass:"left"})]):t._e()])},s=[],r=(n("cadf"),n("551c"),n("f751"),n("097d"),{name:"Contest",props:{contest1Image:{type:String,default:null},contest1Title:{type:String,default:"Tee-shirt<br>C0d1ng Th3 W0rld"},contest1Content:{type:String,default:"Tente ta chance et repars avec notre tee-shirt !"},contest1SubContent:{type:String,default:"@AurelienLoyer @Vue.js @JavaScript"},contest2Title:{type:String,default:"Un super cadeau !"},contest2Content:{type:String,default:"Un tirage tous les soirs (17h) parmi les tweets contenant:"},contest2SubContent:{type:String,default:"@AurelienLoyer @Vue.js @JavaScript"},contest2Image:{type:String,default:"img/teeshirt.png"}},data:function(){return{contests:[]}},mounted:function(){},methods:{}}),a=r,o=(n("ec37"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,"33bf4005",null);e["a"]=c.exports},2:function(t,e){},"21bb":function(t,e,n){"use strict";var i=n("bcc9"),s=n.n(i);s.a},"263c":function(t,e,n){"use strict";var i=n("4f02"),s=n.n(i);s.a},"2b72":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"image",style:"width: "+t.width+"; top: "+t.top+"; right: "+t.right+";",attrs:{src:t.src,alt:"image 🦄"}})},s=[],r={name:"Logo",props:{src:{type:String,default:"https://aurelien-loyer.fr/"},width:{type:String,default:"30vw"},top:{type:String,default:"10vh"},right:{type:String,default:"10vw"}},data:function(){return{}}},a=r,o=(n("7c7d"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,"7a8e80f1",null);e["a"]=c.exports},3627:function(t,e,n){},"3fc6":function(t,e,n){},"476b":function(t,e,n){},"4dce":function(t,e,n){"use strict";var i=n("3627"),s=n.n(i);s.a},"4f02":function(t,e,n){},"54d6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("iframe",{style:"width: "+t.width+"; height: "+t.height+"; top: "+t.top+"; right: "+t.right+";",attrs:{src:t.src}})},s=[],r={name:"Iframe",props:{src:{type:String,default:"https://aurelien-loyer.fr/"},height:{type:String,default:"80vh"},width:{type:String,default:"80vh"},top:{type:String,default:"10vh"},right:{type:String,default:"10vw"}},data:function(){return{}}},a=r,o=(n("4dce"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,"962272e8",null);e["a"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=n("ce5b"),r=n.n(s),a=(n("bf40"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),o=[],c=(n("5c0b"),n("2877")),l={},u=Object(c["a"])(l,a,o,!1,null,null,null),d=u.exports,p=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:{"is-previous":t.isPreviousSlide,"first-load":t.isFirstLoad},attrs:{id:"home"}},[t._l(t.slides,function(e,i){return n("div",{key:"slide-"+i,staticClass:"slide-wrapper",class:{active:i===t.currentSlide},style:{"z-index":t.slides.length-i,"background-image":"url("+e.bgImg+")"}},[n("div",{staticClass:"slide-inner"},[n("div",{staticClass:"slide-bg-text"},[n("p",[t._v(t._s(e.headlineFirstLine))]),n("p",[t._v(t._s(e.headlineSecondLine))])]),e.logoImg?n("div",{staticClass:"slide-rect"},[n("c-logo",{attrs:{img:e.logoImg}})],1):t._e(),e.isHeadlineVisible?n("div",{staticClass:"slide-content"},[n("h1",{staticClass:"slide-content-text"},[n("p",[t._v(t._s(e.headlineFirstLine))]),n("p",[t._v(t._s(e.headlineSecondLine))])]),t._e()]):t._e(),e.sublineFirstLine?n("h2",{staticClass:"slide-side-text"},[n("span",[t._v(t._s(e.sublineFirstLine)+" /")]),n("span",[t._v(t._s(e.sublineSecondLine))])]):t._e(),e.content?n("div",{staticClass:"slide-custom"},["twitter"===e.content?n("c-twitter",{attrs:{"twitter-name":e.props.twitterName,width:e.props.width}}):t._e(),"youtube"===e.content?n("c-youtube",{attrs:{src:e.props.src,width:e.props.width}}):t._e(),"iframe"===e.content?n("c-iframe",{attrs:{src:e.props.src,width:e.props.width,height:e.props.height,top:e.props.top,right:e.props.right}}):t._e(),"image"===e.content?n("c-image",{attrs:{src:e.props.src,width:e.props.width,top:e.props.top,right:e.props.right}}):t._e(),"speakers"===e.content?n("c-speakers",{attrs:{"is-playing":t.isPlaying,counter:t.counter,timer:t.timer,speakers:e.props.speakers}}):t._e(),"contest"===e.content?n("c-contest",{attrs:{"contest1-image":e.props.contest1Image,"contest1-title":e.props.contest1Title,"contest1-content":e.props.contest1Content,"contest1-sub-content":e.props.contest1SubContent,"contest2-title":e.props.contest2Title,"contest2-content":e.props.contest2Content,"contest2-sub-content":e.props.contest2SubContent,"contest2-image":e.props.contest2Image}}):t._e(),"meetups"===e.content?n("c-meetups",{attrs:{meetups:e.props.meetups}}):t._e(),"trainings"===e.content?n("c-trainings",{attrs:{trainings:e.props.trainings,partners:e.props.partners}}):t._e()],1):t._e()])])}),n("div",{staticClass:"controls-container"},t._l(t.slides,function(e,i){return n("button",{key:"controls-"+i,staticClass:"controls-button",class:{active:i===t.currentSlide},on:{click:function(e){return t.updateSlide(i)}}},[t._v("\n      "+t._s(e.headlineFirstLine)+" "+t._s(e.headlineSecondLine)+"\n    ")])}),0),n("div",{staticClass:"pagination-container"},t._l(t.slides,function(e,i){return n("span",{key:"pagination-"+i,staticClass:"pagination-item",class:{active:i===t.currentSlide},on:{click:function(e){return t.updateSlide(i)}}})}),0),n("c-loader",{attrs:{progress:t.counter,timer:t.timer}})],2)},m=[],f=n("f499"),h=n.n(f),v=n("e814"),b=n.n(v),w=n("051a"),_=n.n(w),S=n("fd9b"),y=n("b5ea"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"logo",attrs:{src:t.img,alt:""}})},C=[],L={name:"Logo",props:{img:{type:String,default:"img/znk2.png"}},data:function(){return{}}},I=L,x=(n("d094"),Object(c["a"])(I,k,C,!1,null,"5194b1de",null)),E=x.exports,P=n("2b72"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[1!=t.progress?n("div",{staticClass:"progress",style:{width:10*t.progress/t.timer+"%"}}):t._e()])},O=[],T=(n("c5f6"),{name:"Loader",props:{progress:{type:Number,required:!0},timer:{type:Number,required:!0}}}),F=T,N=(n("ff6a"),Object(c["a"])(F,j,O,!1,null,"4a0e1f1a",null)),A=N.exports,M=n("de17"),B=n("1949"),H=n("54d6"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Meetups"},[n("div",{staticClass:"meetups"},t._l(t.meetups,function(e){return n("div",{key:e.name,staticClass:"meetup"},[n("div",{staticClass:"top"},[n("img",{staticClass:"image",style:"width: "+t.width+";",attrs:{src:e.logo,alt:e.name+" logo"}})]),n("div",{staticClass:"bottom"},[n("h2",[t._v(t._s(e.name))]),e.next?n("div",{staticClass:"content"},[n("h3",[t._v(t._s(e.next.title))]),n("button",[n("i",{staticClass:"far fa-calendar-alt"}),t._v("\n            "+t._s(e.next.date)+"\n          ")]),n("button",[n("i",{staticClass:"far fa-clock"}),t._v("\n            "+t._s(e.next.time)+"\n          ")])]):t._e()])])}),0)])},q=[],V={name:"Meetups",props:{meetups:{type:Array,required:!0},width:{type:String,default:"15vw"}}},J=V,z=(n("263c"),Object(c["a"])(J,$,q,!1,null,"afc9f3c6",null)),R=z.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Trainings"},[n("div",{staticClass:"trainings"},t._l(t.trainings,function(e){return n("div",{key:e.name,staticClass:"training"},[n("img",{staticClass:"image",style:"width: "+t.width+";",attrs:{src:e.logo,alt:e.name+" logo"}}),n("h2",[t._v(t._s(e.name))])])}),0),n("div",{staticClass:"partners"},t._l(t.partners,function(t){return n("div",{key:t.name,staticClass:"partner"},[n("img",{staticClass:"image",attrs:{src:t.logo,alt:t.name+" logo"}})])}),0)])},U=[],Z={name:"Trainings",props:{trainings:{type:Array,required:!0},partners:{type:Array,required:!0},width:{type:String,default:"8vw"}}},G=Z,X=(n("a296"),Object(c["a"])(G,D,U,!1,null,"5385d35c",null)),Y=X.exports,W=[{headlineFirstLine:"",headlineSecondLine:"Zlife",isHeadlineVisible:!0,sublineFirstLine:"",sublineSecondLine:"",bgImg:"./img/background-2-confoo-2020.png",rectImg:"./img/background-2-confoo-2020.png",logoImg:"./img/zenikanard-confoo-2020.png",content:"youtube",props:{width:"60vw",src:"https://www.youtube.com/embed/b_Gh5YIzs9o?list=PLQBUm8bePdvYOBJ_vyUVNeRPThdEECiqr&autoplay=1&mute=1&loop=1&controls=0"}},{headlineFirstLine:"Si tu rejoins",headlineSecondLine:"Zenika",isHeadlineVisible:!0,sublineFirstLine:"",sublineSecondLine:"",bgImg:"./img/background-2-confoo-2020.png",rectImg:"./img/background-2-confoo-2020.png",logoImg:"./img/zenikanard-confoo-2020.png",content:"image",props:{width:"60vw",top:"9vh",right:"9vh",src:"https://i.ibb.co/wCTHHZF/Plaquette-AVANTAGES-BLC-1.jpg"},isDisabled:!0},{headlineFirstLine:"",headlineSecondLine:"Twitter",isHeadlineVisible:!0,sublineFirstLine:"",sublineSecondLine:"",bgImg:"./img/background-2-confoo-2020.png",rectImg:"./img/background-2-confoo-2020.png",logoImg:"./img/zenikanard-confoo-2020.png",content:"twitter",props:{width:"40vw",twitterName:"ZenikaMontreal"},isDisabled:!1},{headlineFirstLine:"Les meetups",headlineSecondLine:"qu'on sponsorise",isHeadlineVisible:!0,sublineFirstLine:"",sublineSecondLine:"",bgImg:"./img/background-2-confoo-2020.png",rectImg:"./img/background-2-confoo-2020.png",logoImg:"https://www.stickpng.com/assets/images/584c57c01fc21103bb375bae.png",content:"meetups",props:{meetups:[{name:"Software Crafters Montréal",logo:"./img/meetup_software-craft.jpeg",next:{title:"Monthly community meetup",date:"Mercredi 4 mars",time:"18:30"}},{name:"P.O.S.S - Le Product Owner Safe Space",logo:"./img/meetup_poss.jpeg"},{name:"MTL React & React Native Monthly Meetup",logo:"./img/meetup_reactjs-mtl.png"}]},isDisabled:!1},{headlineFirstLine:"Formations",isHeadlineVisible:!0,sublineFirstLine:"",sublineSecondLine:"",bgImg:"./img/background-2-confoo-2020.png",rectImg:"./img/background-2-confoo-2020.png",logoImg:"./img/zenikanard-confoo-2020.png",content:"trainings",props:{trainings:[{name:"Vue.js",logo:"./img/vue_250x230.png"},{name:"ReactJS",logo:"./img/react_250x230.png"},{name:"Flutter",logo:"./img/flutter_250x230.png"},{name:"Node JS",logo:"./img/node_300x200.png"},{name:"Sensibilisation au Software Craftsmanship",logo:"./img/craft_250x230.png"}],partners:[{logo:"https://logos-download.com/wp-content/uploads/2016/10/Red_Hat_logo_RedHat.png",name:"Red Hat"},{logo:"https://www.btelligent.com/fileadmin/_processed_/d/8/csm_confluent-partner_9de1dbf103.png",name:"Confluent"},{logo:"https://iqm7l1pa7bn3d42rc278rat5-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/pivotal-logo.png",name:"Pivotal"},{logo:"https://logos-download.com/wp-content/uploads/2016/09/Elastic_logo.png",name:"Elastic"}]}},{headlineFirstLine:"Design",headlineSecondLine:"Sprint",isHeadlineVisible:!1,sublineFirstLine:"",sublineSecondLine:" ",bgImg:"./img/background-2-confoo-2020.png",rectImg:"./img/background-2-confoo-2020.png",logoImg:"",content:"iframe",props:{height:"80vh",width:"80vw",top:"5vh",right:"10vw",src:"https://docs.google.com/presentation/d/1ayHL5rMXfEMuLwNZc5p2pX0GGjOFTM-LN7Wka0XELO0/preview?slide=id.g33bfd5ce23_0_1"}},{headlineFirstLine:"Photo Booth",isHeadlineVisible:!0,logoImg:"./img/zenikanard-confoo-2020.png",bgImg:"./img/background-2-confoo-2020.png",rectImg:"./img/background-2-confoo-2020.png",content:"contest",props:{contest1Title:"Concourez pour gagner une console",contest1Content:"",contest1SubContent:"@ZenikaMontreal #confo2020",contest2Image:"./img/concours_photobooth.png"}},{headlineFirstLine:"Confoo",headlineSecondLine:"Speakers",sublineFirstLine:"Nicolas Cuillery",sublineSecondLine:"Anna Filina",logoImg:"./img/zenikanard-confoo-2020.png",bgImg:"./img/background-2-confoo-2020.png",rectImg:"./img/background-2-confoo-2020.png",content:"speakers",props:{speakers:[{firstname:"Nicolas",lastname:"CUILLERY",twitter:"ncuillery",picture:"img/nicolas_cuillery.png",job:"CTO | Consultant Web",talk:"Flutter: One framework to rule them all",talk_description:"Flutter is a new framework made by Google to build cross-platform application. Despite well-established competitors such as Ionic, React Native, Xamarin, etc., the growth and the adoption of Flutter is stunning.",talk_date:"26 février 2020",talk_time:"14:15"},{firstname:"Anna",lastname:"FILINA",twitter:"afilina",picture:"img/anna_filina.png",job:"IT Project Rescue",talk:"PHP Best Practices",talk_description:"Am I making a mistake? Is this the right decision in the long term? Join me as I show PHP code of over 10 years. I'll explain what worked well, what didn't and why.",talk_date:"26 février 2020",talk_time:"15:15"}]}}],Q=W,K={name:"Home",components:{"c-twitter":S["a"],"c-youtube":y["a"],"c-logo":E,"c-image":P["a"],"c-loader":A,"c-speakers":M["a"],"c-contest":B["a"],"c-iframe":H["a"],"c-meetups":R,"c-trainings":Y},data:function(){return{currentSlide:JSON.parse(window.localStorage.getItem("currentSlide"))||0,isLoopUp:!0,isPreviousSlide:!1,isFirstLoad:!0,isPlaying:JSON.parse(window.localStorage.getItem("isPlaying")),counter:0,timer:b()(window.localStorage.getItem("timer")),slides:JSON.parse(window.localStorage.getItem("slides")||"[]")||[],defaultSlides:Q}},mounted:function(){var t=this;if(this.timer){this.getSlides();var e=document.getElementById("home"),n=0,i=0;e.addEventListener("touchstart",function(t){return n=t.touches[0].pageX}),e.addEventListener("touchmove",function(t){return i=t.touches[0].pageX}),e.addEventListener("touchend",function(){var e=n-i;e<150&&0<t.currentSlide&&t.currentSlide--,e>-150&&t.currentSlide<t.slides.length-1&&t.currentSlide++}),window.addEventListener("keydown",function(e){"Space"===e.code?t.toggleIsPlaying():"ArrowRight"===e.code?(t.currentSlide===t.slides.length-1?t.currentSlide=0:t.currentSlide++,t.counter=0):"ArrowLeft"===e.code?(0===t.currentSlide?t.currentSlide=4:t.currentSlide--,t.counter=0):"Escape"===e.code&&t.$router.push("admin")}),setInterval(function(){t.isPlaying&&(t.counter===10*t.timer&&(t.currentSlide++,t.currentSlide===t.slides.length&&(t.currentSlide=0),t.counter=0),t.counter++)},100),this.p=new _.a({}),this.p.on("error",this.onError),this.p.on("signal",this.onSignal),this.p.on("data",this.onData),this.p.on("connect",function(){console.log("CONNECT"),t.p.send("whatever"+Math.random())}),console.log(this.p)}else this.$router.push("settings")},methods:{onError:function(t){console.log("error",t)},onSignal:function(t){console.log("SIGNAL",h()(t))},onData:function(t){console.log("data: "+t)},updateSlide:function(t){t<this.currentSlide?this.isPreviousSlide=!0:this.isPreviousSlide=!1,this.currentSlide=t,this.isFirstLoad=!1,this.counter=0},toggleIsPlaying:function(){this.isPlaying=!this.isPlaying},getSlides:function(){var t=this,e=JSON.parse(localStorage.getItem("configUrl"));e?fetch(e).then(function(t){return t.json()}).then(function(e){t.slides=e}):this.slides=this.defaultSlides}}},tt=K,et=(n("21bb"),Object(c["a"])(tt,g,m,!1,null,null,null)),nt=et.exports;i["default"].use(p["a"]);var it=new p["a"]({base:"/conference-toolkit/",routes:[{path:"/",name:"home",component:nt},{path:"/settings",name:"settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))}},{path:"/admin",name:"admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))}},{path:"/remote",name:"remote",component:function(){return n.e("remote").then(n.bind(null,"89dd"))}}]});i["default"].use(r.a,{}),i["default"].config.productionTip=!1,new i["default"]({router:it,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5e27":function(t,e,n){},"646f":function(t,e,n){},"7c7d":function(t,e,n){"use strict";var i=n("476b"),s=n.n(i);s.a},9605:function(t,e,n){"use strict";var i=n("3fc6"),s=n.n(i);s.a},"9c86":function(t,e,n){},"9de8":function(t,e,n){},a296:function(t,e,n){"use strict";var i=n("646f"),s=n.n(i);s.a},a4bf:function(t,e,n){},b5ea:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"youtube",style:"width: "+t.width+"; height: calc("+t.width+" / 1.60)"},[n("iframe",{attrs:{src:t.src,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])},s=[],r={name:"Youtube",props:{src:{type:String,default:""},width:{type:String,default:"60vw"}},data:function(){return{}}},a=r,o=(n("ea63"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,"ce8ac9ee",null);e["a"]=c.exports},b7ab:function(t,e,n){},bcc9:function(t,e,n){},c909:function(t,e,n){},d094:function(t,e,n){"use strict";var i=n("9de8"),s=n.n(i);s.a},d63d:function(t,e,n){"use strict";var i=n("a4bf"),s=n.n(i);s.a},de17:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card speakers"},[n("div",{staticClass:"left"},[n("div",{staticClass:"slider slider-left",on:{click:function(e){return t.prevSpeaker()}}},[n("i",{staticClass:"material-icons"},[t._v("arrow_back")])]),t._e()]),n("div",{staticClass:"right"},[n("img",{staticClass:"picture",attrs:{src:t.speakers[t.index].picture,alt:"picture"}}),n("div",{staticClass:"informations"},[n("h1",[t._v("\n          "+t._s(t.speakers[t.index].firstname)+"\n          "),n("br"),t._v("\n          "+t._s(t.speakers[t.index].lastname)+"\n        ")]),n("h2",[t._v(t._s(t.speakers[t.index].job))]),n("button",[n("i",{staticClass:"fab fa-twitter"}),t._v("\n          "+t._s(t.speakers[t.index].twitter)+"\n        ")]),n("div",{staticClass:"slider",on:{click:function(e){return t.nextSpeaker()}}},[n("i",{staticClass:"material-icons"},[t._v("arrow_forward")])])])])]),n("div",{staticClass:"card talks"},[n("div",{staticClass:"right"},[n("div",{staticClass:"content"},[n("h2",[t._v(t._s(t.speakers[t.index].talk))]),n("button",[n("i",{staticClass:"far fa-calendar-alt"}),t._v("\n          "+t._s(t.speakers[t.index].talk_date)+"\n        ")]),n("button",[n("i",{staticClass:"far fa-clock"}),t._v("\n          "+t._s(t.speakers[t.index].talk_time)+"\n        ")])])]),n("div",{staticClass:"left"})])])},s=[],r=(n("c5f6"),{name:"Speakers",props:{timer:{type:Number,required:!0},counter:{type:Number,required:!0},isPlaying:{type:Boolean,required:!0},speakers:{type:Array,required:!0}},data:function(){return{indexBase:0}},computed:{index:function(){if(this.isPlaying){var t=10*this.counter/this.timer,e=Math.round(t/(100/this.speakers.length)-.49);return e===this.speakers.length?this.speakers.length-1:e}return this.indexBase}},mounted:function(){var t=this;window.addEventListener("keydown",function(e){"ArrowUp"===e.code?t.nextSpeaker():"ArrowDown"===e.code&&t.prevSpeaker()})},methods:{nextSpeaker:function(){this.indexBase===this.speakers.length-1?this.indexBase=0:this.indexBase++},prevSpeaker:function(){this.indexBase-1<0?this.indexBase=this.speakers.length-1:this.indexBase--}}}),a=r,o=(n("d63d"),n("2877")),c=Object(o["a"])(a,i,s,!1,null,"0c21e325",null);e["a"]=c.exports},ea63:function(t,e,n){"use strict";var i=n("9c86"),s=n.n(i);s.a},ec37:function(t,e,n){"use strict";var i=n("c909"),s=n.n(i);s.a},fd9b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitter",style:"width: "+t.width+";"},[n("a",{staticClass:"twitter-timeline",attrs:{"data-chrome":"transparent nofooter noborders noheader noscrollbar","data-lang":"fr","data-theme":"dark","data-link-color":"$main-color",href:"https://twitter.com/"+t.twitterName+"?ref_src=twsrc%5Etfw"}},[t._v("Tweets by ZenikaMontreal")])])},s=[],r=(n("cadf"),n("551c"),n("f751"),n("097d"),n("5118")),a={name:"Twitter",props:{twitterName:{default:"AurelienLoyer",type:String},width:{type:String,default:"30vw"}},mounted:function(){void 0!=window.twttr&&window.twttr.widgets.load(),Object(r["setInterval"])(function(){window.twttr.widgets.load()},5e3)}},o=a,c=(n("9605"),n("2877")),l=Object(c["a"])(o,i,s,!1,null,"0554e34b",null);e["a"]=l.exports},ff6a:function(t,e,n){"use strict";var i=n("b7ab"),s=n.n(i);s.a}});