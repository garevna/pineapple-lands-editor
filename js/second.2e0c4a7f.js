(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["second"],{"25cd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ready?a("v-container",{staticClass:"homefone",attrs:{fluid:""}},[a("AppHeader",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}}}),a("Top"),a("v-row",{attrs:{width:"100%"}},[a("Testimonials")],1),a("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[a("v-sheet",{staticClass:"mx-auto",attrs:{width:"100%","max-width":"1440",color:"homefone",tile:""}},[a("v-row",{staticClass:"mx-0 px-0"},[a("v-col",{staticClass:"aside-col",attrs:{cols:"12",md:"6"}},[a("Aside")],1),a("v-col",{staticClass:"mx-0 px-0",attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"transparent mx-0",attrs:{flat:""}},[a("v-card",{staticClass:"user-contact transparent mx-auto pa-0",staticStyle:{"margin-bottom":"80px"},attrs:{flat:""}},[a("UserContact")],1)],1)],1)],1)],1)],1),a("v-row",{attrs:{width:"100%"}},[a("section",{staticStyle:{width:"100%"},attrs:{id:"faq"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#faq"}}),a("FAQ",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}}})],1)])]),a("section",{staticClass:"homefone",attrs:{id:"footer"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#footer"}}),a("v-row",{attrs:{width:"100%"}},[a("Footer",{attrs:{page:t.page,user:t.user},on:{"update:page":function(e){t.page=e},"update:user":function(e){t.user=e}}})],1)],1)]),a("v-bottom-navigation",{staticClass:"buttons",attrs:{fixed:"",dark:""}},[t.authorized?a("v-btn",{on:{click:t.savePageContent}},[a("span",[t._v("Save")]),a("v-icon",[t._v("mdi-content-save-edit")])],1):t._e(),t.authorized?t._e():a("v-btn",{on:{click:function(e){t.login=!0}}},[a("span",[t._v("Sign In")]),a("v-icon",[t._v("mdi-login")])],1)],1),a("ImageGallery"),a("Popup")],1):t._e()},n=[],o=(a("96cf"),a("1da1")),r=a("5530"),s=a("2f62"),c=a("a4ce"),l=a("e9c9"),u=a("3d13"),d=a("f672"),p=a("7af8"),v=a("d2c1"),m=a("fd2d"),f=a("36a4"),h=a("9393"),g={name:"Second",components:{AppHeader:c["a"],Top:l["a"],Aside:u["a"],UserContact:d["a"],Testimonials:p["a"],FAQ:v["a"],Footer:m["a"],ImageGallery:f["a"],Popup:h["a"]},data:function(){return{ready:!1,page:0,contactUs:!1,getConnected:!1,user:{}}},computed:Object(r["a"])({},Object(s["d"])(["viewport","viewportWidth","authorized"])),watch:{page:function(t){this.selectors[t]&&this.$vuetify.goTo(this.selectors[t],{duration:500,offset:0,easing:"easeInOutCubic"})}},methods:Object(r["a"])({},Object(s["b"])({validateToken:"VALIDATE_TOKEN",saveSuccess:"SAVE_SUCCESS",saveFailure:"SAVE_FAILURE",accessDenied:"ACCESS_DENIED"}),{},Object(s["b"])("content",{getContent:"GET_CONTENT",saveContent:"SAVE_CONTENT"}),{},Object(s["b"])("testimonials",{getTestimonials:"GET_CONTENT",saveTestimonials:"SAVE_CONTENT"}),{savePageContent:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.saveContent(2);case 2:a=e.sent,i=200===a?"saveSuccess":403===a||401===a?"accessDenied":"saveFailure",t[i]();case 5:case"end":return e.stop()}}),e)})))()}}),beforeMount:function(){var t=this;this.getContent(2).then((function(e){t.ready=!!e,document.title=e,t.$store.commit("UPDATE_PAGES",{pages:t.$store.state.content.mainNavButtons,selectors:t.$store.state.content.selectors})})),this.getTestimonials()},mounted:function(){}},b=g,x=a("2877"),C=a("6544"),_=a.n(C),y=a("b81c"),T=a("8336"),E=a("b0af"),O=a("62ad"),w=a("a523"),S=a("132d"),P=a("0fd9"),k=a("8dd9"),V=Object(x["a"])(b,i,n,!1,null,null,null);e["default"]=V.exports;_()(V,{VBottomNavigation:y["a"],VBtn:T["a"],VCard:E["a"],VCol:O["a"],VContainer:w["a"],VIcon:S["a"],VRow:P["a"],VSheet:k["a"]})},"5d46":function(t,e,a){"use strict";var i=a("6f04"),n=a.n(i);n.a},"6f04":function(t,e,a){},"8cd0":function(t,e,a){},"8ce9":function(t,e,a){},"8f9f":function(t,e,a){},c3cf:function(t,e,a){"use strict";var i=a("8f9f"),n=a.n(i);n.a},ce7e:function(t,e,a){"use strict";var i=a("5530"),n=(a("8ce9"),a("7560"));e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},d8fc:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-speed-dial",{attrs:{top:"",left:"",direction:"right",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-btn",{style:{marginLeft:t.margin,marginTop:t.margin},attrs:{color:"info",dark:"",small:"",fab:""},model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}},[t.edit?a("v-icon",[t._v("mdi-close")]):a("v-icon",[t._v("mdi-pencil")])],1)]},proxy:!0}]),model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}},["testimonials"!==t.section?a("v-tooltip",{attrs:{top:"",color:"info"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"warning"},on:{click:function(e){return t.$emit("update:saveContent",!0)}}},i),[a("v-icon",[t._v("mdi-content-save")])],1)]}}],null,!1,3065837701)},[a("span",[t._v("Save section content")])]):t._e(),"testimonials"===t.section?a("v-tooltip",{attrs:{top:"",color:"info"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(e){return t.$store.commit("testimonials/REMOVE_ITEM",t.index)}}},i),[a("v-icon",[t._v("mdi-minus")])],1)]}}],null,!1,1017881383)},[a("span",[t._v("Remove current item")])]):t._e(),a("v-tooltip",{attrs:{top:"",color:"info"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"deepgreen"},on:{click:function(e){return t.$refs.picture.click()}}},i),[a("v-icon",[t._v("mdi-file-upload")])],1)]}}])},[a("span",[t._v("Change picture via upload")])]),a("v-tooltip",{attrs:{top:"",color:"info"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"red"},on:{click:function(e){return t.$emit("update:gallery",!0)}}},i),[a("v-icon",[t._v("mdi-image-search")])],1)]}}])},[a("span",[t._v("Select picture from server")])])],1),a("input",{ref:"picture",staticStyle:{display:"none"},attrs:{type:"file"},on:{input:function(e){return t.uploadPicture(e.target.files[0])}}}),a("ErrorPopup",{attrs:{visibility:t.errorPopupVisible,errorName:t.errorName,details:t.errorStack},on:{"update:visibility":function(e){t.errorPopupVisible=e}}})],1)},n=[],o=(a("2ca0"),a("96cf"),a("1da1")),r=a("5530"),s=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[a("v-card",{staticClass:"pa-8"},[a("v-card-title",{staticClass:"error--text"},[a("v-icon",{attrs:{large:"",color:"error"}},[t._v("mdi-error")]),t._v(" "+t._s(t.errorName)+" ")],1),a("v-divider"),t.details?a("v-card",{attrs:{flat:""}},[a("v-card-text",[t._v(t._s(t.details))])],1):t._e(),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"info",text:""},on:{click:function(e){return t.$emit("update:visibility",!1)}}},[t._v("Close")])],1)],1)],1)],1)},l=[],u={name:"ErrorPopup",props:{visibility:Boolean,errorName:{type:String,default:"Error"},details:{type:[String,Object],default:"sorry... no comments..."}}},d=u,p=a("2877"),v=a("6544"),m=a.n(v),f=a("8336"),h=a("b0af"),g=a("99d9"),b=a("169a"),x=a("ce7e"),C=a("132d"),_=a("0fd9"),y=a("2fa4"),T=Object(p["a"])(d,c,l,!1,null,null,null),E=T.exports;m()(T,{VBtn:f["a"],VCard:h["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:b["a"],VDivider:x["a"],VIcon:C["a"],VRow:_["a"],VSpacer:y["a"]});var O={name:"ChangePicture",components:{ErrorPopup:E},props:["index","pictureURL","pictureType","saveContent","module"],data:function(){return{edit:!1,imageDialog:!1,errorPopupVisible:!1,removePopupVisible:!1,confirmRemoving:!1,uploadDailog:!1,errorName:"",errorStack:"",gallery:!1}},computed:Object(r["a"])({},Object(s["d"])("editor",["selectedImage","section","num"]),{fileLimit:function(){return"image"===this.pictureType?1e6:5e4},margin:function(){return"image"===this.pictureType?0:"-32px"}}),watch:{selectedImage:function(t){console.log(t),console.log(this.index,this.num),console.log(this.section,this.module),this.section===this.module&&(this.index&&this.index!==this.num||(console.log("HERE!"),console.log(this.pictureURL),console.log(t),this.$emit("update:pictureURL",t),this.hideGallery()))}},methods:Object(r["a"])({},Object(s["b"])("editor",{showGallery:"SHOW_GALLERY",hideGallery:"HIDE_GALLERY",uploadImage:"UPLOAD_IMAGE"}),{testFile:function(t){return t.type.startsWith("image")?t.size>this.fileLimit?(this.errorName="Invalid file size",this.errorStack="File is too large. Please select file up to ".concat(Math.round(this.fileLimit/1e3),"Kb"),this.errorPopupVisible=!0,!1):Boolean(t):(this.errorName="Invalid file type",this.errorStack="File must be an image of any type such as: jpg, png, gif...",this.errorPopupVisible=!0,!1)},uploadPicture:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.testFile(t)){a.next=2;break}return a.abrupt("return");case 2:if(e.pictureType){a.next=4;break}return a.abrupt("return");case 4:return a.prev=4,a.next=7,e.uploadImage(t);case 7:i=a.sent,e.$emit("update:pictureURL",i),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](4),console.error(a.t0);case 14:case"end":return a.stop()}}),a,null,[[4,11]])})))()},selectFromGallery:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.showGallery({imageType:t.pictureType,section:"top"});case 1:case"end":return e.stop()}}),e)})))()}}),mounted:function(){console.log("PICTURE TYPE: ",this.pictureType)}},w=O,S=(a("5d46"),a("caad"),a("d81d"),a("b0c0"),a("c7cd"),a("ade3")),P=(a("8cd0"),a("f2e7")),k=a("fe6c"),V=a("a026"),A=V["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),R=a("a293"),$=a("58df"),j=Object($["a"])(k["a"],P["a"],A).extend({name:"v-speed-dial",directives:{ClickOutside:R["a"]},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(S["a"])(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(S["a"])(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,a=[],i={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(i.on.mouseenter=function(){return e.isActive=!0},i.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var n=0;a=(this.$slots.default||[]).map((function(e,a){return!e.tag||"undefined"===typeof e.componentOptions||"v-btn"!==e.componentOptions.Ctor.options.name&&"v-tooltip"!==e.componentOptions.Ctor.options.name?(e.key=a,e):(n++,t("div",{style:{transitionDelay:.05*n+"s"},key:a},[e]))}))}var o=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},a);return t("div",i,[this.$slots.activator,o])}}),L=a("3a2f"),U=Object(p["a"])(w,i,n,!1,null,"92271cfa",null);e["a"]=U.exports;m()(U,{VBtn:f["a"],VIcon:C["a"],VSpeedDial:j,VTooltip:L["a"]})},e9c9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"overflow-x":"hidden","margin-top":"160px","margin-bottom":"64px",padding:"40px!important"}},[a("v-card",{staticClass:"mx-auto homefone",attrs:{flat:"",width:"100%","max-width":"1440"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center mx-auto",attrs:{sm:"12",md:"6"}},[a("v-card",{staticClass:"transparent mx-auto top-element",attrs:{flat:"",width:"100%","max-width":"480"}},[a("v-card-text",{staticClass:"text-center text-md-left"},[a("h1",{ref:"topHeader",staticClass:"text-center text-md-left",attrs:{contenteditable:""},domProps:{textContent:t._s(t.top.header)}})]),a("v-card-text",{staticClass:"mx-auto mx-lg-0"},[a("p",{ref:"topText",staticClass:"text-center text-md-left",attrs:{contenteditable:""},domProps:{textContent:t._s(t.top.text)}})]),a("v-card-text",{staticClass:"text-center text-md-left"},[a("p",{ref:"topButton",staticClass:"submit-button mx-auto",attrs:{contenteditable:""},domProps:{textContent:t._s(t.top.button)}})])],1)],1),a("v-col",{attrs:{sm:"12",md:"6"}},[a("ChangePicture",{attrs:{gallery:t.gallery,saveContent:t.save},on:{"update:gallery":function(e){t.gallery=e},"update:saveContent":function(e){t.save=e},"update:save-content":function(e){t.save=e}}}),a("ImageGallery",{attrs:{activate:t.gallery,staticEndpoint:t.staticPictureEndpoint,endpoint:t.picturesEndpoint,selectedImageURL:t.imageURL,fileLimit:t.fileLimit,imageSize:t.imageSize},on:{"update:activate":function(e){t.gallery=e},"update:selectedImageURL":function(e){t.imageURL=e},"update:selected-image-u-r-l":function(e){t.imageURL=e}}}),a("v-card",{staticClass:"transparent",attrs:{flat:"",width:"100%","max-width":"600"}},[a("v-img",{staticClass:"mx-auto",attrs:{src:t.top.pictureURL,"max-width":"750"}})],1)],1)],1)],1)],1)},n=[],o=a("5530"),r=a("2f62"),s=a("d8fc"),c=a("36a4"),l={name:"Top",components:{ChangePicture:s["a"],ImageGallery:c["a"]},props:["page"],data:function(){return{close:!1,save:!1,gallery:!1,fileLimit:1e6,imageSize:360}},computed:Object(o["a"])({},Object(r["d"])("content",["top"]),{},Object(r["c"])("editor",["staticPictureEndpoint","picturesEndpoint"]),{imageURL:{get:function(){return this.top.pictureURL},set:function(t){this.$store.commit("content/UPDATE_TOP",{prop:"pictureURL",value:t})}}}),watch:{imageURL:function(t){console.log("TOP: selected image url is ",t)},save:function(t){t&&(this.saveContent(),this.save=!1,this.$store.commit("SET_POPUP_TITLE","SECTION CONTENT"),this.$store.commit("SET_POPUP_TEXT","Data successfully saved"),this.$store.commit("SHOW_POPUP"))}},methods:{saveContent:function(){this.$store.commit("content/UPDATE_TOP",{prop:"header",value:this.$refs.topHeader.innerText}),this.$store.commit("content/UPDATE_TOP",{prop:"text",value:this.$refs.topText.innerText}),this.$store.commit("content/UPDATE_TOP",{prop:"button",value:this.$refs.topButton.innerText})}},mounted:function(){}},u=l,d=(a("c3cf"),a("2877")),p=a("6544"),v=a.n(p),m=a("b0af"),f=a("99d9"),h=a("62ad"),g=a("a523"),b=a("adda"),x=a("0fd9"),C=Object(d["a"])(u,i,n,!1,null,"271b1f87",null);e["a"]=C.exports;v()(C,{VCard:m["a"],VCardText:f["b"],VCol:h["a"],VContainer:g["a"],VImg:b["a"],VRow:x["a"]})}}]);