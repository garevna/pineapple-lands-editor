(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9173d02e"],{"2f1f":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"mx-auto"},[n("ChangePicture",{attrs:{destination:"image",pictureURL:t.pictureURL,link:t.link},on:{"update:pictureURL":function(e){t.pictureURL=e},"update:picture-u-r-l":function(e){t.pictureURL=e},"update:link":function(e){t.link=e}}}),t.src?n("img",{attrs:{src:t.src},on:{"update:src":function(e){t.src=e}}}):n("Spinner",{staticClass:"spinner"})],1)},i=[],u=n("5530"),r=n("2f62"),a=n("a0f0"),s={name:"TopPicture",components:{Spinner:a["h"],ChangePicture:a["b"]},data:function(){return{src:null}},computed:Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(r["e"])(["imagesReady"])),Object(r["e"])("content",["top"])),Object(r["c"])("media",["getImageLink"])),{},{pictureURL:{get:function(){return this.top.pictureURL},set:function(t){this.update({prop:"pictureURL",value:t})}},link:{get:function(){return this.getImageLink(this.pictureURL)},set:function(t){this.$nextTick((function(){this.src=t}))}}}),watch:{link:{immediate:!0,handler:function(t){this.$nextTick((function(){this.src=t}))}}},methods:Object(u["a"])({},Object(r["d"])("content",{update:"UPDATE_TOP"}))},o=s,p=(n("7b1c"),n("2877")),f=Object(p["a"])(o,c,i,!1,null,"0a080dfc",null);e["default"]=f.exports},"7b1c":function(t,e,n){"use strict";var c=n("b4df"),i=n.n(c);i.a},b4df:function(t,e,n){}}]);