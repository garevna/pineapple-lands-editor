(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["live"],{c638:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.pageContentReady?a("v-container",{staticClass:"homefone",attrs:{fluid:""}},[a("MainNavBar",{attrs:{page:e.page},on:{"update:page":function(t){e.page=t}}}),a("v-card",{staticClass:"transparent",attrs:{flat:"",width:"100%"}},[a("Home")],1)],1):e._e()},i=[],o=(a("c975"),a("d3b7"),a("5530")),d=a("2f62"),c={name:"Live",components:{Home:function(){return a.e("chunk-2d0a3ea7").then(a.bind(null,"03e3"))}},data:function(){return{ready:!1,navigationOpened:!1,page:void 0,goto:void 0,section:0,pageIndex:void 0,contactUs:!1,getConnected:!1}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(d["e"])(["viewport","viewportWidth","authorized","pages","error","pageContentReady"])),Object(d["e"])("content",["mainNavButtons","mainNavSectors"])),{},{pageId:function(){return this.pages[this.pageIndex].id}}),watch:{page:function(e){if(e)return 0===e.indexOf("#")?(this.$vuetify.goTo(e,{duration:500,offset:80,easing:"easeInOutCubic"}),void(this.page=void 0)):0===e.indexOf("http")?(window.open(e,"_blank"),void(this.page=void 0)):void(this.page=void 0)}},methods:Object(o["a"])({},Object(d["d"])({setReady:"SET_PAGE_CONTENT_READY"})),beforeRouteLeave:function(e,t,a){this.setReady(!1),a()}},s=c,r=a("2877"),p=a("6544"),u=a.n(p),v=a("b0af"),f=a("a523"),g=Object(r["a"])(s,n,i,!1,null,null,null);t["default"]=g.exports;u()(g,{VCard:v["a"],VContainer:f["a"]})}}]);