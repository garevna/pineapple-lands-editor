(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fast-fibre-internet"],{e8ed:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.pageContentReady?e("v-container",{staticClass:"homefone",attrs:{fluid:""}},[e("MainNavBar",{attrs:{page:t.page},on:{"update:page":function(a){t.page=a}}}),e("section",{attrs:{id:"top"}},[e("div",{staticClass:"base-title"},[e("a",{staticClass:"core-goto",attrs:{href:"#top"}}),e("Top")],1)]),e("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[e("v-col",{staticClass:"aside-col",attrs:{cols:"12",md:"6"}},[e("section",{staticStyle:{width:"100%"},attrs:{id:"benefits"}},[e("div",{staticClass:"base-title"},[e("a",{staticClass:"core-goto",attrs:{href:"#benefits"}}),e("Aside")],1)])]),e("v-col",{staticClass:"mx-0 px-0",attrs:{cols:"12",md:"6"}},[e("section",{staticStyle:{width:"100%"},attrs:{id:"contact"}},[e("div",{staticClass:"base-title"},[e("a",{staticClass:"core-goto",attrs:{href:"#contact"}}),e("UserContact")],1)])])],1),e("v-row",{attrs:{width:"100%",justify:"center"}},[e("section",{attrs:{id:"how-to-connect"}},[e("div",{staticClass:"base-title"},[e("a",{staticClass:"core-goto",attrs:{href:"#how-to-connect"}}),e("HowToConnect",{attrs:{contact:t.contactUs,connect:t.getConnected},on:{"update:contact":function(a){t.contactUs=a},"update:connect":function(a){t.getConnected=a}}})],1)])]),e("v-row",{attrs:{width:"100%",justify:"center"}},[e("section",{attrs:{id:"plans"}},[e("div",{staticClass:"base-title"},[e("a",{staticClass:"core-goto",attrs:{href:"#plans"}}),e("InternetPlans",{attrs:{page:t.page},on:{"update:page":function(a){t.page=a}}})],1)])]),e("section",{staticStyle:{width:"100%"},attrs:{id:"testimonials"}},[e("div",{staticClass:"base-title"},[e("a",{staticClass:"core-goto",attrs:{href:"#testimonials"}}),e("Testimonials",{attrs:{page:t.page},on:{"update:page":function(a){t.page=a}}})],1)]),e("v-row",{attrs:{width:"100%"}},[e("section",{staticStyle:{width:"100%"},attrs:{id:"faq"}},[e("div",{staticClass:"base-title"},[e("a",{staticClass:"core-goto",attrs:{href:"#faq"}}),e("FAQ",{attrs:{page:t.page},on:{"update:page":function(a){t.page=a}}})],1)])])],1):t._e()},o=[],n=e("5530"),i=e("2f62"),c=e("2af9"),r={name:"First",components:{Top:c["Top"],Aside:c["Aside"],UserContact:c["UserContact"],HowToConnect:c["HowToConnect"],Testimonials:c["Testimonials"],InternetPlans:c["InternetPlans"],FAQ:c["FAQ"]},data:function(){return{page:0,goto:void 0,section:null,contactUs:!1,getConnected:!1,user:{}}},computed:Object(n["a"])({},Object(i["e"])(["pageContentReady"])),watch:{page:function(t){this.$vuetify.goTo(t,{duration:500,offset:0,easing:"easeInOutCubic"})}},methods:Object(n["a"])({},Object(i["d"])({setReady:"SET_PAGE_CONTENT_READY"})),beforeRouteLeave:function(t,a,e){this.setReady(!1),e()}},l=r,d=e("2877"),p=e("6544"),f=e.n(p),u=e("62ad"),g=e("a523"),C=e("0fd9"),w=Object(d["a"])(l,s,o,!1,null,null,null);a["default"]=w.exports;f()(w,{VCol:u["a"],VContainer:g["a"],VRow:C["a"]})}}]);