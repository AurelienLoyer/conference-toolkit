(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"0f84":function(e,t,i){},"124d":function(e,t,i){"use strict";i("e654")},"1bd1":function(e,t,i){"use strict";i("0f84")},2539:function(e,t,i){},"2b98":function(e,t,i){"use strict";i("2539")},"2c57":function(e,t,i){},3530:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{attrs:{id:"keep"}},[i("router-link",{staticClass:"goback",attrs:{to:"/"}},[i("p",[e._v("🚪")]),i("span",[e._v("Go to slides")])]),i("v-toolbar",{staticClass:"test",attrs:{color:"amber",app:"",absolute:""}},[i("v-spacer"),i("span",{staticClass:"title ml-3 mr-5"},[e._v("🎤 📺 Conference Toolkit Settings")]),i("v-spacer")],1),i("v-content",[i("v-tabs",{attrs:{color:"dark",dark:"","slider-color":"yellow"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("v-tab",{key:"setting",attrs:{ripple:""}},[e._v("🎛 Settins")]),i("v-tab",{key:"howtouse",attrs:{ripple:""}},[e._v("🤷‍ How to use")]),i("v-tab",{key:"help",attrs:{ripple:""}},[e._v("🙏 Help")]),i("v-tab-item",{key:"setting"},[i("c-settings")],1),i("v-tab-item",{key:"howtouse"},[i("c-howtouse")],1),i("v-tab-item",{key:"help"},[i("c-help")],1)],1)],1),i("v-footer",{staticClass:"pa-3",attrs:{color:"amber"}},[i("v-spacer"),i("div",[e._v("\n      </> with ❤️by \n      "),i("a",{attrs:{target:"_blank",href:"https://twitter.com/AurelienLoyer"}},[e._v("Aurélien Loyer")])]),i("v-spacer")],1)],1)},l=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"howtouse"},[i("h1",{attrs:{title:"How to use ?"}},[e._v("🤷‍")]),i("v-card",{staticClass:"pa-4 mt-4"},[i("div",{staticClass:"keys"},e._l(e.keys,(function(t,s){return i("div",{key:"key-"+s,staticClass:"item"},[i("div",{staticClass:"key"},[e._v(e._s(t.value))]),i("label",[e._v(e._s(t.label))])])})),0)])],1)},n=[],o={data:function(){return{keys:[{value:"␠ Space",label:"Play / Pause slider"},{value:"␛ Escape",label:"Go to settings"},{value:"👉 Right",label:"Next slide"},{value:"👈 Left",label:"Previous slide"},{value:"👆 Up",label:"Next slide content"},{value:"👇 Down",label:"Previous slide content"}]}}},r=o,c=(i("124d"),i("2877")),d=Object(c["a"])(r,a,n,!1,null,"4818e398",null),u=d.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"settings"},[i("v-alert",{staticClass:"mt-5",attrs:{value:!0,type:"info"}},[e._v("First time on Conference Toolkit ? Take time to configure slides 📺, app settings 🎛 and look controls 🤷‍♂️")]),i("h1",{attrs:{title:"Slides"}},[e._v("📺")]),i("v-card",{staticClass:"pa-4 mt-4"},[i("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[i("h4",{staticClass:"bolder mb-4 pa-0"},[e._v("Slides")])]),e.isEditing?e._e():i("v-layout",{attrs:{row:"",wrap:""}},[e._l(e.slides,(function(t,s){return i("v-slide",{key:"slide-"+s,attrs:{slide:t,index:s},on:{edit:function(t){return e.activeEdition(s)}}})})),i("v-btn",{staticClass:"add-slide",attrs:{absolute:"",fab:"",top:"",right:"",small:"",color:"amber"},on:{click:e.addNewSlide}},[i("v-icon",{attrs:{dark:""}},[e._v("add")])],1)],2),e.isEditing?i("v-slide-form",{attrs:{isnew:e.isNew,slide:e.editingSlide},on:{cancel:e.cancel,delete:e.deleteSlide,validate:e.validate}}):e._e()],1),i("h1",{attrs:{title:"Settings"}},[e._v("🎛")]),i("v-card",{staticClass:"pa-4"},[i("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[i("h4",{staticClass:"bolder mb-4 pa-0"},[e._v("Global settings")])]),i("v-form",{ref:"form"},[i("v-text-field",{attrs:{type:"number",name:"currentSlide",label:"Default start slide (start at 0)"},on:{change:function(t){return e.save()}},model:{value:e.currentSlide,callback:function(t){e.currentSlide=t},expression:"currentSlide"}}),i("v-text-field",{attrs:{type:"number",name:"timer",label:"Default slide timer (seconde)"},on:{change:function(t){return e.save()}},model:{value:e.timer,callback:function(t){e.timer=t},expression:"timer"}}),i("v-checkbox",{attrs:{type:"checkbox",name:"isPlaying",label:"Slider is playing "},on:{change:function(t){return e.save()}},model:{value:e.isPlaying,callback:function(t){e.isPlaying=t},expression:"isPlaying"}})],1)],1),i("c-import-save",{on:{onSlidesImport:e.loadSlides}})],1)},v=[],f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-flex",{attrs:{xs12:"",sm6:"",lg4:""}},[i("v-card",{staticClass:"ma-3 slide"},[e.slide.isDisabled?i("div",{staticClass:"disabled"}):e._e(),i("v-img",{staticClass:"white--text image",attrs:{height:"200px",src:e.slide.bgImg}},[i("v-container",{attrs:{"fill-height":"",fluid:""}},[i("v-layout",{attrs:{"fill-height":""}},[i("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[i("span",{staticClass:"headline"},[e._v(e._s(e.slide.headlineFirstLine))]),i("br"),i("span",{staticClass:"headline"},[e._v(e._s(e.slide.headlineSecondLine))]),i("br")])],1)],1)],1),i("v-card-title",[i("div",[i("span",{staticClass:"grey--text"},[e._v("# "+e._s(e.slide.content))]),e._v(" -\n        "),i("span",[e._v(e._s(e.slide.sublineFirstLine)+" / "+e._s(e.slide.sublineSecondLine))])])]),i("strong",[e._v("Configuration")]),i("pre",{staticClass:"config"},[e._v(e._s(e.slide.props))]),i("v-card-actions",[i("v-btn",{attrs:{flat:"",color:"blue"},on:{click:function(t){return e.edit()}}},[e._v("EDIT")])],1)],1)],1)},m=[],b={props:["slide","index"],methods:{edit:function(){this.$emit("edit",this.index)}}},h=b,g=(i("2b98"),Object(c["a"])(h,f,m,!1,null,null,null)),x=g.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-layout",{attrs:{wrap:"","justify-space-between":""}},[i("v-flex",{attrs:{xs10:"",md4:""}},[i("v-text-field",{attrs:{type:"text",label:"Headline First Line"},model:{value:e.slide.headlineFirstLine,callback:function(t){e.$set(e.slide,"headlineFirstLine",t)},expression:"slide.headlineFirstLine"}})],1),i("v-flex",{attrs:{xs12:"",md4:""}},[i("v-text-field",{attrs:{type:"text",label:"Headline Second Line"},model:{value:e.slide.headlineSecondLine,callback:function(t){e.$set(e.slide,"headlineSecondLine",t)},expression:"slide.headlineSecondLine"}})],1),i("v-flex",{attrs:{xs12:"",md3:""}},[i("v-checkbox",{attrs:{type:"checkbox",label:"Headline Visible ?"},model:{value:e.slide.isHeadlineVisible,callback:function(t){e.$set(e.slide,"isHeadlineVisible",t)},expression:"slide.isHeadlineVisible"}})],1),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Subline First Line"},model:{value:e.slide.sublineFirstLine,callback:function(t){e.$set(e.slide,"sublineFirstLine",t)},expression:"slide.sublineFirstLine"}})],1),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Subline Second Line"},model:{value:e.slide.sublineSecondLine,callback:function(t){e.$set(e.slide,"sublineSecondLine",t)},expression:"slide.sublineSecondLine"}})],1),i("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Background Image"},model:{value:e.slide.bgImg,callback:function(t){e.$set(e.slide,"bgImg",t)},expression:"slide.bgImg"}})],1),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Rect Image"},model:{value:e.slide.rectImg,callback:function(t){e.$set(e.slide,"rectImg",t)},expression:"slide.rectImg"}})],1),i("v-flex",{attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"text",label:"Logo Image"},model:{value:e.slide.logoImg,callback:function(t){e.$set(e.slide,"logoImg",t)},expression:"slide.logoImg"}})],1),i("v-flex",{attrs:{xs12:"",md3:""}},[i("v-checkbox",{attrs:{type:"checkbox",label:"Disable Slide ?"},model:{value:e.slide.isDisabled,callback:function(t){e.$set(e.slide,"isDisabled",t)},expression:"slide.isDisabled"}})],1),i("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),i("v-flex",{attrs:{xs12:"",md12:""}},[i("v-select",{attrs:{clearable:!0,items:e.contents,label:"Content type"},on:{change:e.loadProps},model:{value:e.slide.content,callback:function(t){e.$set(e.slide,"content",t)},expression:"slide.content"}})],1),i("v-flex",{attrs:{xs12:"",md12:"","mt-4":""}}),e._l(e.props,(function(t,s){return i("v-flex",{key:"prop-"+s,attrs:{xs12:"",md5:""}},[i("v-text-field",{attrs:{type:"prop.type",label:"("+t.label+")"},model:{value:e.slide.props[t.key],callback:function(i){e.$set(e.slide.props,t.key,i)},expression:"slide.props[prop.key]"}})],1)}))],2),e.isnew?e._e():i("v-btn",{attrs:{color:"red"},on:{click:function(t){return e.$emit("delete")}}},[i("v-icon",[e._v("delete")])],1),i("v-btn",{attrs:{color:"amber"},on:{click:function(t){return e.$emit("cancel")}}},[e._v("Cancel")]),i("v-btn",{attrs:{disabled:!e.valid,color:"blue"},on:{click:e.validate}},[e._v("Validate")])],1)},y=[],k=(i("7f7f"),i("ac6a"),i("456d"),i("2b72")),_=i("54d6"),w=i("1949"),C=i("de17"),L=i("fd9b"),I=i("b5ea"),N={data:function(){return{valid:!1,contents:["image","iframe","contest","speaker","twitter","youtube"],propsByContent:{image:k["a"].props,iframe:_["a"].props,contest:w["a"].props,speaker:C["a"].props,twitter:L["a"].props,youtube:I["a"].props},props:[]}},props:["isnew","slide"],methods:{validate:function(){this.$emit("validate",this.slide)},loadProps:function(){var e=this;this.props=[],Object.keys(this.propsByContent[this.slide.content])&&(Object.keys(this.propsByContent[this.slide.content]).forEach((function(t){e.props.push({key:t,label:"Key : ".concat(t," /  : ").concat(e.propsByContent[e.slide.content][t].default),type:e.propsByContent[e.slide.content][t].type.name.toLowerCase(),value:e.propsByContent[e.slide.content][t].default})})),console.log(this.props))}},mounted:function(){this.loadProps()}},j=N,O=Object(c["a"])(j,S,y,!1,null,"4a8cc626",null),E=O.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",{attrs:{title:"Import / Save"}},[e._v("🚜 / 💾")]),i("v-card",{staticClass:"pa-4 mt-4"},[i("v-card-title",{staticClass:"pa-0",attrs:{"primary-title":""}},[i("h4",{staticClass:"bolder mb-4 pa-0"},[e._v("Import")])]),i("v-text-field",{attrs:{type:"file",id:"file",accept:".json",label:"Import json configuration from file"}}),i("v-btn",{attrs:{color:"info",disabled:!e.json},on:{click:e.importFromFile}},[e._v("Import from file")]),i("v-text-field",{attrs:{type:"text",label:"Import json configuration from url"},model:{value:e.slideUrl,callback:function(t){e.slideUrl=t},expression:"slideUrl"}}),i("v-btn",{attrs:{color:"info",disabled:!e.slideUrl},on:{click:e.importFromUrl}},[e._v("Import from url")]),i("v-card-title",{staticClass:"mt-4 pa-0",attrs:{"primary-title":""}},[i("h4",{staticClass:"bolder mb-4 pa-0"},[e._v("Export")])]),i("v-text-field",{attrs:{type:"text",label:"Configuration name"},model:{value:e.saveName,callback:function(t){e.saveName=t},expression:"saveName"}}),i("v-btn",{attrs:{disabled:!e.saveName,color:"info"},on:{click:e.exportConf}},[e._v("Export")])],1)],1)},F=[],P={data:function(){return{slideUrl:null,json:null,saveName:null,slides:JSON.parse(window.localStorage.getItem("slides")||"[]")||[]}},mounted:function(){document.getElementById("file").addEventListener("change",this.onChange)},methods:{onChange:function(e){var t=new FileReader;t.onload=this.onReaderLoad,e.target.files[0]&&t.readAsText(e.target.files[0])},onReaderLoad:function(e){this.json=JSON.parse(e.target.result)},importFromFile:function(){this.json&&(localStorage.setItem("slides",JSON.stringify(this.json)),console.log("💾 save json"),this.$emit("onSlidesImport"),this.json=null)},importFromUrl:function(){var e=this;this.slideUrl&&fetch(this.slideUrl).then((function(e){return e.json()})).then((function(t){e.slides=t,localStorage.setItem("slides",JSON.stringify(t)),e.$emit("onSlidesImport"),e.slideUrl=null}))},exportConf:function(){this.slides=JSON.parse(window.localStorage.getItem("slides")||"[]")||[],this.saveName&&this.slides.length&&this.downloadObjectAsJson(this.slides,this.saveName)},downloadObjectAsJson:function(e,t){var i="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("download",t+".json"),document.body.appendChild(s),s.click(),s.remove()}}},T=P,U=(i("79d5"),Object(c["a"])(T,$,F,!1,null,"004aea1f",null)),D=U.exports,J={components:{"v-slide":x,"v-slide-form":E,"c-import-save":D},data:function(){return{timer:window.localStorage.getItem("timer"),slides:JSON.parse(window.localStorage.getItem("slides")||"[]")||[],configUrl:window.localStorage.getItem("configUrl"),currentSlide:window.localStorage.getItem("currentSlide"),isPlaying:JSON.parse(window.localStorage.getItem("isPlaying")),isEditing:!1,isNew:!1,editingSlide:{},editingSlideIndex:null}},mounted:function(){},methods:{save:function(){window.localStorage.setItem("timer",this.timer),window.localStorage.setItem("configUrl",this.configUrl),window.localStorage.setItem("currentSlide",this.currentSlide),window.localStorage.setItem("isPlaying",this.isPlaying),console.log("💾")},loadSlides:function(){this.slides=JSON.parse(window.localStorage.getItem("slides")||"[]")||[]},addNewSlide:function(){this.editingSlide={props:{}},this.isEditing=!0,this.isNew=!0},activeEdition:function(e){this.editingSlideIndex=e,this.editingSlide=Object.assign({},this.slides[e]),this.isEditing=!0},cancel:function(){this.isEditing=!1,this.isNew=!1},deleteSlide:function(){this.slides.splice(this.editingSlideIndex,1),this.isEditing=!1,this.isNew=!1},validate:function(e){this.isNew?this.slides.push(e):this.slides[this.editingSlideIndex]=Object.assign({},e),this.isEditing=!1,this.isNew=!1,window.localStorage.setItem("slides",JSON.stringify(this.slides))}}},H=J,V=(i("377d"),Object(c["a"])(H,p,v,!1,null,null,null)),A=V.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"help"},[i("h1",{attrs:{title:"Credits"}},[e._v("👏")]),i("v-card",{staticClass:"pa-4 mt-4"},[i("a",{attrs:{target:"_blank",href:"https://github.com/T3kstiil3/conference-toolkit/issues"}},[e._v("Problem ? 🛠")]),i("br"),i("a",{attrs:{target:"_blank",href:"https://github.com/T3kstiil3/conference-toolkit/"}},[e._v("Contribute 🐙")])])],1)},R=[],B=(i("1bd1"),{}),G=Object(c["a"])(B,M,R,!1,null,"4d711838",null),q=G.exports,z={data:function(){return{active:""}},props:{source:String},components:{"c-howtouse":u,"c-settings":A,"c-help":q}},K=z,Q=(i("4a9a"),Object(c["a"])(K,s,l,!1,null,null,null));t["default"]=Q.exports},"377d":function(e,t,i){"use strict";i("4e41")},"456d":function(e,t,i){var s=i("4bf8"),l=i("0d58");i("5eda")("keys",(function(){return function(e){return l(s(e))}}))},"4a9a":function(e,t,i){"use strict";i("2c57")},"4e41":function(e,t,i){},"5eda":function(e,t,i){var s=i("5ca1"),l=i("8378"),a=i("79e5");e.exports=function(e,t){var i=(l.Object||{})[e]||Object[e],n={};n[e]=t(i),s(s.S+s.F*a((function(){i(1)})),"Object",n)}},"79d5":function(e,t,i){"use strict";i("add3")},"7f7f":function(e,t,i){var s=i("86cc").f,l=Function.prototype,a=/^\s*function ([^ (]*)/,n="name";n in l||i("9e1e")&&s(l,n,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},ac6a:function(e,t,i){for(var s=i("cadf"),l=i("0d58"),a=i("2aba"),n=i("7726"),o=i("32e9"),r=i("84f2"),c=i("2b4c"),d=c("iterator"),u=c("toStringTag"),p=r.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=l(v),m=0;m<f.length;m++){var b,h=f[m],g=v[h],x=n[h],S=x&&x.prototype;if(S&&(S[d]||o(S,d,p),S[u]||o(S,u,h),r[h]=p,g))for(b in s)S[b]||a(S,b,s[b],!0)}},add3:function(e,t,i){},e654:function(e,t,i){}}]);
//# sourceMappingURL=admin.89f7d296.js.map