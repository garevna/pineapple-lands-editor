(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40565a93"],{7541:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"homefone"},[t.pageContentReady?a("v-container",{staticClass:"homefone",attrs:{fluid:""}},[a("MainNavBar",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}}}),a("section",{attrs:{id:"top"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#top"}}),a("TopOfPage")],1)]),a("section",{staticStyle:{width:"100%"},attrs:{id:"testimonials"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#testimonials"}}),a("Testimonials",{attrs:{page:t.goto},on:{"update:page":function(e){t.goto=e}}})],1)]),a("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[a("v-sheet",{staticClass:"mx-auto",attrs:{width:"100%","max-width":"1440",color:"homefone",tile:""}},[a("v-row",{staticClass:"my-12",attrs:{align:"start",justify:"center"}},[a("v-card",{staticClass:"deepgreen mx-auto my-12 pa-8",attrs:{dark:"",width:"100%"}},[a("h3",{staticStyle:{color:"#fff!important","text-wrap":"normal"}},[t._v(" "+t._s(t.address.formatted)+" ")]),a("h5",{staticStyle:{color:"#fff!important","text-align":"center"}},[t._v(" "+t._s(t.addressLine)+" ")])])],1),a("v-row",{staticClass:"mx-0 px-0"},[a("v-col",{staticClass:"aside-col",attrs:{cols:"12",md:"6"}},[a("Aside")],1),a("v-col",{staticClass:"mx-0 px-0",attrs:{cols:"12",md:"6"}},[a("section",{staticStyle:{width:"100%"},attrs:{id:"contact"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#contact"}}),a("UserContact")],1)])])],1)],1)],1),a("v-row",{attrs:{width:"100%"}},[a("section",{staticStyle:{width:"100%"},attrs:{id:"faq"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#faq"}}),a("FAQ",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}}})],1)])]),a("section",{staticClass:"homefone",attrs:{id:"footer"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#footer"}}),a("v-row",{attrs:{width:"100%"}},[a("Footer",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}}})],1)],1)])],1):t._e(),a("v-snackbar",{attrs:{top:"",center:"",timeout:216e5},model:{value:t.hidden,callback:function(e){t.hidden=e},expression:"hidden"}},[t._v(" This page is hidden ")])],1)},i=[],o=(a("99af"),a("7db0"),a("c975"),a("fb6a"),a("5530")),n=a("2f62"),c=a("2af9"),r=c.TopOfPage,d=c.Aside,l=c.UserContact,u=c.Testimonials,h=c.FAQ,f=c.Footer,p={name:"Page",components:{TopOfPage:r,Aside:d,UserContact:l,Testimonials:u,FAQ:h,Footer:f},data:function(){return{page:null,goto:null,editInfo:!1,addressLine:""}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(n["e"])(["pages","currentLand","pageContentReady"])),Object(n["e"])("content",["address"])),{},{buildingName:function(){var t;return null===(t=this.address)||void 0===t?void 0:t.formatted},hidden:function(){var t=this,e=this.pages.find((function(e){return e.id===t.currentLand.slice(5)}));return e.hidden}}),watch:{address:{deep:!0,immediate:!0,handler:function(t){this.addressLine=this.getAddressLine(t)}},page:function(t){if(t){if(0===t.indexOf("#"))return this.$vuetify.goTo(t,{duration:500,offset:80,easing:"easeInOutCubic"}),void(this.page=void 0);if(0===t.indexOf("http"))return window.open(t,"_blank"),void(this.page=void 0);"home"===t&&this.$router.push({path:"/live"}),this.page=void 0}}},methods:{getAddressLine:function(t){var e=t.streetNumber,a=void 0===e?"":e,s=t.streetName,i=void 0===s?"":s,o=t.city,n=void 0===o?"":o,c=t.state,r=void 0===c?"":c,d=t.postcode,l=void 0===d?"":d;return"".concat(a," ").concat(i).concat(i?",":""," ").concat(n," ").concat(r," ").concat(l)}},mounted:function(){this.page=void 0}},v=p,m=a("2877"),g=a("6544"),b=a.n(g),C=a("7496"),w=a("b0af"),k=a("62ad"),O=a("a523"),T=a("0fd9"),y=a("8dd9"),x=(a("a9e3"),a("ca71"),a("a9ad")),A=a("f2e7"),_=a("fe6c"),j=a("58df"),L=a("d9bd"),S=Object(j["a"])(x["a"],A["a"],Object(_["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(L["d"])("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper",attrs:{role:"alert"}}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),V=Object(m["a"])(v,s,i,!1,null,null,null);e["default"]=V.exports;b()(V,{VApp:C["a"],VCard:w["a"],VCol:k["a"],VContainer:O["a"],VRow:T["a"],VSheet:y["a"],VSnackbar:S})},ca71:function(t,e,a){}}]);