(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["first.fourth.second.testimonials.third"],{1681:function(t,e,i){},"20d6":function(t,e,i){},"36a4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.gallery,callback:function(e){t.gallery=e},expression:"gallery"}},[t.images?i("v-card",{staticClass:"pa-4"},[i("v-toolbar",{attrs:{dark:"",color:"secondary"}},[i("v-toolbar-items",[i("v-btn",{attrs:{icon:""},on:{click:t.getImages}},[i("v-icon",{attrs:{large:"",color:"#555"}},[t._v("mdi-reload")])],1)],1),i("v-toolbar-title",[t._v("Select image from below")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.$emit("update:activate",!1)}}},[i("v-icon",[t._v("mdi-close")])],1)],1)],1),i("v-row",t._l(t.images,(function(e,n){return i("v-col",{key:n},[i("v-card",{staticClass:"pa-0",attrs:{hover:"",tile:""},on:{click:function(e){return t.select(n)}}},[i("v-fab-transition",[i("v-btn",{attrs:{fab:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.askToRemovePicture(n)}}},[i("v-icon",{attrs:{color:"red darken-2"}},[t._v("mdi-delete")])],1)],1),i("v-card-text",[i("v-img",{attrs:{src:t.staticEndpoint+"/"+e,"max-height":t.imageSize,"max-width":t.imageSize,contain:""}})],1)],1)],1)})),1)],1):t._e()],1),i("RemovePopup",{attrs:{visibility:t.removePopupVisible,confirm:t.confirmRemoving,removing:"Image",details:t.details},on:{"update:visibility":function(e){t.removePopupVisible=e},"update:confirm":function(e){t.confirmRemoving=e}}})],1)},a=[],r=(i("99af"),i("4de4"),i("d3b7"),i("96cf"),i("1da1")),o=i("5530"),s=i("2f62"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"700"},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[i("v-card",{staticClass:"pa-8"},[i("v-card-title",{attrs:{color:"info"}},[i("v-icon",{attrs:{color:"warning"}},[t._v("mdi-alert")]),i("h3",[t._v(" You attempt to remove file on server")])],1),i("v-card",{staticClass:"pa-5",attrs:{flat:""}},[t.removing?i("v-card-text",{attrs:{color:"info"},domProps:{innerHTML:t._s(t.removing)}}):t._e()],1),i("v-card",{staticClass:"pa-5",attrs:{flat:""}},[t.details?i("v-card-text",{domProps:{innerHTML:t._s(t.details)}}):t._e()],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"info",text:""},on:{click:function(e){return t.$emit("update:visibility",!1)}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"error",text:""},on:{click:t.confirmRemove}},[t._v("Remove")])],1)],1)],1)],1)},l=[],u={name:"RemovePopup",props:{visibility:Boolean,confirm:Boolean,removing:{type:String,default:""},details:{type:[String,Object],default:""}},methods:{confirmRemove:function(){this.$emit("update:confirm",!0),this.$emit("update:visibility",!1)}}},d=u,h=i("2877"),p=i("6544"),v=i.n(p),f=i("8336"),m=i("b0af"),g=i("99d9"),b=i("169a"),_=i("132d"),y=i("0fd9"),S=i("2fa4"),x=Object(h["a"])(d,c,l,!1,null,null,null),O=x.exports;v()(x,{VBtn:f["a"],VCard:m["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:b["a"],VIcon:_["a"],VRow:y["a"],VSpacer:S["a"]});var w={name:"ImageGallery",components:{RemovePopup:O},props:{destination:String,selectedImageURL:String,activate:Boolean},data:function(){return{images:[],removePopupVisible:!1,confirmRemoving:!1,details:null,removing:null}},computed:Object(o["a"])({},Object(s["c"])("testimonials",{__uploadAvatar:"uploadEndpoint",__staticAvatar:"staticEndpoint",__avatarts:"avatarsEndpoint"}),{},Object(s["c"])("editor",{__uploadImage:"uploadImageEndpoint",__staticImage:"staticImageEndpoint",__images:"imagesEndpoint",__uploadIcon:"uploadIconEndpoint",__staticIcon:"staticIconEndpoint",__icons:"iconsEndpoint"}),{uploadEndpoint:function(){return"avatar"===this.destination?this.__uploadAvatar:"image"===this.destination?this.__uploadImage:this.__uploadIcon},staticEndpoint:function(){return"avatar"===this.destination?this.__staticAvatar:"image"===this.destination?this.__staticImage:this.__staticIcon},endpoint:function(){return"avatar"===this.destination?this.__avatarts:"image"===this.destination?this.__images:this.__icons},fileLimit:function(){return"avatar"===this.destination?5e4:"image"===this.destination?1e6:1e5},imageSize:function(){return"avatar"===this.destination?50:"image"===this.destination?300:150},gallery:{get:function(){return this.activate},set:function(t){this.$emit("update:activate",t)}}}),watch:{activate:function(t){t&&this.getImages()},confirmRemoving:function(t){t&&(this.removePicture(this.removing),this.getImages(),this.removePopupVisible=!1)}},methods:{getImages:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.endpoint);case 3:return e.next=5,e.sent.json();case 5:e.t0=function(t){return".gitkeep"!==t},t.images=e.sent.filter(e.t0),t.ready=!0,e.next=14;break;case 10:e.prev=10,e.t1=e["catch"](0),console.error(e.t1),t.ready=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},select:function(t){var e="".concat(this.staticEndpoint,"/").concat(this.images[t]);this.$emit("update:selectedImageURL",e),this.$emit("update:activate",!1)},askToRemovePicture:function(t){this.confirmRemoving=!1,this.removing=t,this.details='<img src="'.concat(this.staticEndpoint,"/").concat(this.images[t],'" width="120"/>'),this.removePopupVisible=!0},removePicture:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,fetch("".concat(e.endpoint,"/").concat(e.images[t]),{method:"DELETE",headers:{Authorization:localStorage.getItem("token")}});case 3:n=i.sent,console.log(n),i.next=11;break;case 7:i.prev=7,i.t0=i["catch"](0),console.error(i.t0),e.ready=!1;case 11:case"end":return i.stop()}}),i,null,[[0,7]])})))()}}},k=w,I=i("62ad"),j=i("0789"),R=i("adda"),E=i("71d9"),C=i("80d2"),$=Object(C["h"])("v-toolbar__title"),V=Object(C["h"])("v-toolbar__items"),L=(E["a"],Object(h["a"])(k,n,a,!1,null,null,null));e["a"]=L.exports;v()(L,{VBtn:f["a"],VCard:m["a"],VCardText:g["b"],VCol:I["a"],VDialog:b["a"],VFabTransition:j["c"],VIcon:_["a"],VImg:R["a"],VRow:y["a"],VSpacer:S["a"],VToolbar:E["a"],VToolbarItems:V,VToolbarTitle:$})},"36a7":function(t,e,i){},"5e23":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),a=i("5530"),r=(i("4b85"),i("a026")),o=i("d9f7"),s=i("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(s["w"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(s["w"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function p(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var v=new Map;e["a"]=r["default"].extend({name:"v-col",functional:!0,props:Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,a=e.data,r=e.children,s=(e.parent,"");for(var c in i)s+=String(i[c]);var l=v.get(s);return l||function(){var t,e;for(e in l=[],h)h[e].forEach((function(t){var n=i[t],a=p(e,t,n);a&&l.push(a)}));var a=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!a||!i.cols},Object(n["a"])(t,"col-".concat(i.cols),i.cols),Object(n["a"])(t,"offset-".concat(i.offset),i.offset),Object(n["a"])(t,"order-".concat(i.order),i.order),Object(n["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),v.set(s,l)}(),t(i.tag,Object(o["a"])(a,{class:l}),r)}})},"71d9":function(t,e,i){"use strict";i("0481"),i("4160"),i("4069"),i("a9e3");var n=i("3835"),a=i("5530"),r=(i("5e23"),i("8dd9")),o=i("adda"),s=i("80d2"),c=i("d9bd");e["a"]=r["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(a["a"])({},r["a"].options.computed.classes.call(this),{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(a["a"])({},this.measurableStyles,{height:Object(s["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(n["a"])(e,2),a=i[0],r=i[1];t.$attrs.hasOwnProperty(a)&&Object(c["a"])(a,r,t)}))},methods:{genBackground:function(){var t={height:Object(s["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(s["f"])(this.computedContentHeight)}},Object(s["n"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(s["f"])(this.extensionHeight)}},Object(s["n"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},8122:function(t,e,i){"use strict";var n=i("20d6"),a=i.n(n);a.a},"8cd0":function(t,e,i){},"8ce9":function(t,e,i){},"8efc":function(t,e,i){},a844:function(t,e,i){"use strict";i("a9e3");var n=i("5530"),a=(i("1681"),i("8654")),r=i("58df"),o=Object(r["a"])(a["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8efc");var n=i("90a2"),a=(i("36a7"),i("24b2")),r=i("58df"),o=Object(r["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),s=o,c=i("d9bd");e["a"]=s.extend({name:"v-img",directives:{intersect:n["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},hasIntersect:function(){return"undefined"!==typeof window&&"IntersectionObserver"in window},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!this.hasIntersect||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["b"])("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(c["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var a=t.naturalHeight,r=t.naturalWidth;a||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/a):null!=i&&setTimeout(n,i)};n()},genContent:function(){var t=s.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=s.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=this.hasIntersect?[{name:"intersect",options:this.options,modifiers:{once:!0},value:this.init}]:[],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),a=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,a=t.touchendY,r=.5,o=16;t.offsetX=i-e,t.offsetY=a-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&a<n-o&&t.up(t),t.down&&a>n+o&&t.down(t))};function r(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function s(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return s(t,e)}}}function l(t,e,i){var a=e.value,r=a.parent?t.parentElement:t,o=a.options||{passive:!0};if(r){var s=c(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=s,Object(n["s"])(s).forEach((function(t){r.addEventListener(t,s[t],o)}))}}function u(t,e,i){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var r=a._touchHandlers[i.context._uid];Object(n["s"])(r).forEach((function(t){a.removeEventListener(t,r[t])})),delete a._touchHandlers[i.context._uid]}}var d={inserted:l,unbind:u};e["a"]=d},ce7e:function(t,e,i){"use strict";var n=i("5530"),a=(i("8ce9"),i("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d8fc:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-speed-dial",{attrs:{top:"",left:"",direction:"right",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[i("v-btn",{attrs:{color:"info",dark:"",small:"",fab:""},model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}},[t.edit?i("v-icon",[t._v("mdi-close")]):i("v-icon",[t._v("mdi-pencil")])],1)]},proxy:!0}]),model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}},[t.action?i("v-tooltip",{attrs:{top:"",color:"info"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(e){return t.$emit("update:perform",t.index||!0)}}},n),[i("v-icon",[t._v("$delete")])],1)]}}],null,!1,125864965)},[i("span",[t._v("Remove current item")])]):t._e(),i("v-tooltip",{attrs:{top:"",color:"info"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"magenta"},on:{click:function(e){return t.$refs.picture.click()}}},n),[i("v-icon",[t._v("mdi-file-upload")])],1)]}}])},[i("span",[t._v("Change picture via upload")])]),i("v-tooltip",{attrs:{top:"",color:"info"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"warning"},on:{click:function(e){t.gallery=!0}}},n),[i("v-icon",[t._v("mdi-image-search")])],1)]}}])},[i("span",[t._v("Select picture from server")])])],1),i("input",{ref:"picture",staticStyle:{display:"none"},attrs:{type:"file"},on:{input:function(e){return t.uploadFile(e.target.files[0])}}}),i("ErrorPopup",{attrs:{visibility:t.errorPopupVisible,errorName:t.errorName,details:t.errorStack},on:{"update:visibility":function(e){t.errorPopupVisible=e}}}),i("ImageGallery",{attrs:{activate:t.gallery,destination:t.destination,selectedImageURL:t.imageURL},on:{"update:activate":function(e){t.gallery=e},"update:selectedImageURL":function(e){t.imageURL=e},"update:selected-image-u-r-l":function(e){t.imageURL=e}}})],1)},a=[],r=(i("c975"),i("a9e3"),i("2ca0"),i("96cf"),i("1da1")),o=i("5530"),s=i("2f62"),c=i("36a4"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[i("v-card",{staticClass:"pa-8"},[i("v-card-title",{staticClass:"error--text"},[i("v-icon",{attrs:{large:"",color:"error"}},[t._v("mdi-error")]),t._v(" "+t._s(t.errorName)+" ")],1),i("v-divider"),t.details?i("v-card",{attrs:{flat:""}},[i("v-card-text",[t._v(t._s(t.details))])],1):t._e(),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"info",text:""},on:{click:function(e){return t.$emit("update:visibility",!1)}}},[t._v("Close")])],1)],1)],1)],1)},u=[],d={name:"ErrorPopup",props:{visibility:Boolean,errorName:{type:String,default:"Error"},details:{type:[String,Object],default:"sorry... no comments..."}}},h=d,p=i("2877"),v=i("6544"),f=i.n(v),m=i("8336"),g=i("b0af"),b=i("99d9"),_=i("169a"),y=i("ce7e"),S=i("132d"),x=i("0fd9"),O=i("2fa4"),w=Object(p["a"])(h,l,u,!1,null,null,null),k=w.exports;f()(w,{VBtn:m["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VDialog:_["a"],VDivider:y["a"],VIcon:S["a"],VRow:x["a"],VSpacer:O["a"]});var I={name:"ChangePicture",components:{ImageGallery:c["a"],ErrorPopup:k},props:{destination:String,pictureURL:String,index:Number,action:Boolean,perform:Boolean},data:function(){return{edit:!1,errorPopupVisible:!1,errorName:"",errorStack:"",gallery:!1,availableSections:["avatar","icon","image"],availableMethods:["uploadAvatar","uploadIcon","uploadImage"]}},computed:{sectionNum:function(){return this.availableSections.indexOf(this.destination)},method:function(){return this.availableMethods[this.sectionNum]},error:{get:function(){return 2===this.sectionNum||this.index?"":"Index must be defined"},set:function(t){this.errorName="ERROR",this.errorStack=t}},imageURL:{get:function(){return this.pictureURL},set:function(t){this.$emit("update:pictureURL",t)}}},watch:{error:function(t){t&&(this.errorName="ERROR",this.errorStack=t,this.errorPopupVisible=!0,this.error="")}},methods:Object(o["a"])({},Object(s["b"])("editor",{showGallery:"SHOW_GALLERY",hideGallery:"HIDE_GALLERY",uploadImage:"UPLOAD_IMAGE",uploadIcon:"UPLOAD_ICON"}),{},Object(s["b"])("testimonials",{uploadAvatar:"UPLOAD_AVATAR"}),{testFile:function(t){return t.type.startsWith("image")?t.size>this.fileLimit?(this.errorName="Invalid file size",this.errorStack="File is too large. Please select file up to ".concat(Math.round(this.fileLimit/1e3),"Kb"),this.errorPopupVisible=!0,!1):Boolean(t):(this.errorName="Invalid file type",this.errorStack="File must be an image of any type such as: jpg, png, gif...",this.errorPopupVisible=!0,!1)},uploadFile:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.testFile(t)){i.next=2;break}return i.abrupt("return");case 2:return i.prev=2,i.next=5,e[e.method](t);case 5:n=i.sent,e.$emit("update:pictureURL",n),i.next=12;break;case 9:i.prev=9,i.t0=i["catch"](2),e.error=i.t0.message;case 12:case"end":return i.stop()}}),i,null,[[2,9]])})))()}})},j=I,R=(i("8122"),i("caad"),i("d81d"),i("b0c0"),i("c7cd"),i("ade3")),E=(i("8cd0"),i("f2e7")),C=i("fe6c"),$=i("a026"),V=$["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),L=i("a293"),P=i("58df"),B=Object(P["a"])(C["a"],E["a"],V).extend({name:"v-speed-dial",directives:{ClickOutside:L["a"]},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(R["a"])(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(R["a"])(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,i=[],n={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(n.on.mouseenter=function(){return e.isActive=!0},n.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var a=0;i=(this.$slots.default||[]).map((function(e,i){return!e.tag||"undefined"===typeof e.componentOptions||"v-btn"!==e.componentOptions.Ctor.options.name&&"v-tooltip"!==e.componentOptions.Ctor.options.name?(e.key=i,e):(a++,t("div",{style:{transitionDelay:.05*a+"s"},key:i},[e]))}))}var r=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},i);return t("div",n,[this.$slots.activator,r])}}),z=i("3a2f"),N=Object(p["a"])(j,n,a,!1,null,"e6a71290",null);e["a"]=N.exports;f()(N,{VBtn:m["a"],VIcon:S["a"],VSpeedDial:B,VTooltip:z["a"]})}}]);