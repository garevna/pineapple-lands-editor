(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fourth"],{"4ca1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"homefone",attrs:{fluid:""}},[a("AppHeader",{attrs:{pages:t.pages,selected:t.page},on:{"update:selected":function(e){t.page=e}}}),a("Top"),a("v-row",{staticClass:"pa-0 ma-0",attrs:{justify:"center"}},[a("v-sheet",{staticClass:"mx-auto",attrs:{width:"100%","max-width":"1440",color:"homefone",tile:""}},[a("v-row",{staticClass:"mx-0 px-0"},[a("v-col",{staticClass:"aside-col",attrs:{cols:"12",md:"6"}},[a("Aside")],1),a("v-col",{staticClass:"mx-0 px-0",attrs:{cols:"12",md:"6"}},[a("v-card",{staticClass:"transparent mx-0",attrs:{flat:""}},[a("v-card",{staticClass:"user-contact transparent mx-auto pa-0",staticStyle:{"margin-bottom":"80px"},attrs:{flat:""}},[a("UserContact")],1)],1)],1)],1)],1)],1),a("v-row",{attrs:{width:"100%"}},[a("HowToConnect",{attrs:{contact:t.contactUs,connect:t.getConnected},on:{"update:contact":function(e){t.contactUs=e},"update:connect":function(e){t.getConnected=e}}})],1),a("v-row",{attrs:{width:"100%",justify:"center"}},[a("section",{attrs:{id:"plans"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#plans"}}),a("InternetPlans",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}}})],1)])]),a("v-row",{attrs:{width:"100%"}},[a("Testimonials")],1),a("v-row",{attrs:{width:"100%"}},[a("section",{staticStyle:{width:"100%"},attrs:{id:"faq"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#faq"}}),a("FAQ",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}}})],1)])]),a("section",{staticClass:"homefone",attrs:{id:"footer"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#footer"}}),a("v-row",{attrs:{width:"100%"}},[a("Footer",{attrs:{page:t.page,user:t.user},on:{"update:page":function(e){t.page=e},"update:user":function(e){t.user=e}}})],1)],1)]),a("ImageGallery"),a("Popup")],1)},n=[],o=(a("c975"),a("96cf"),a("1da1")),c=a("5530"),i=a("2f62"),r=a("a4ce"),u=a("e9c9"),d=a("3d13"),l=a("f672"),p=a("1e8c"),f=a("7af8"),h=a("bd44"),g=a("d2c1"),C=a("fd2d"),v=a("36a4"),m=a("9393"),w={name:"First",components:{AppHeader:r["a"],Top:u["a"],Aside:d["a"],UserContact:l["a"],HowToConnect:p["a"],Testimonials:f["a"],InternetPlans:h["a"],FAQ:g["a"],Footer:C["a"],ImageGallery:v["a"],Popup:m["a"]},data:function(){return{section:null,contactUs:!1,getConnected:!1,user:{}}},computed:Object(c["a"])({},Object(i["d"])(["viewport","viewportWidth","pages","selectors","authorized"]),{},Object(i["c"])("editor",["contentEndpoint"])),watch:{business:function(t){t&&(this.page=this.pages.indexOf("Business"))},residential:function(t){this.page=this.pages.indexOf("Residential")},section:function(t){if("#connect"===this.selectors[t])return this.addressAvalable?this.$router.push({name:"connect"}):this.$vuetify.goTo("#check",{duration:500,offset:200,easing:"easeInOutCubic"}),void(this.page=void 0);"#contact"!==this.selectors[t]?("#plans"===this.selectors[t]&&this.$store.commit("CHANGE_PLAN",this.pages[this.page].toLowerCase()),this.selectors[t]&&this.$vuetify.goTo(this.selectors[t],{duration:500,offset:0,easing:"easeInOutCubic"})):this.$router.push({name:"contact"})}},methods:Object(c["a"])({},Object(i["b"])({validateToken:"VALIDATE_TOKEN",saveSuccess:"SAVE_SUCCESS",saveFailure:"SAVE_FAILURE",accessDenied:"ACCESS_DENIED"}),{},Object(i["b"])("content",{getContent:"GET_CONTENT",saveContent:"SAVE_CONTENT"}),{},Object(i["b"])("testimonials",{saveTestimonials:"SAVE_CONTENT"}),{savePageContent:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.saveContent(4);case 2:a=e.sent,s=200===a?"saveSuccess":403===a||401===a?"accessDenied":"saveFailure",t[s]();case 5:case"end":return e.stop()}}),e)})))()}}),beforeMount:function(){this.getContent(4)},mounted:function(){}},b=w,T=a("2877"),E=a("6544"),A=a.n(E),O=a("b0af"),x=a("62ad"),S=a("a523"),j=a("0fd9"),N=a("8dd9"),V=Object(T["a"])(b,s,n,!1,null,null,null);e["default"]=V.exports;A()(V,{VCard:O["a"],VCol:x["a"],VContainer:S["a"],VRow:j["a"],VSheet:N["a"]})}}]);