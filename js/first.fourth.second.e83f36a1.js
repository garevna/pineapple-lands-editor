(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["first.fourth.second"],{"117d":function(t,e,a){},"2e2a":function(t,e,a){},"31ef":function(t,e,a){t.exports=a.p+"img/dgtek-logo.ada5061d.png"},"3d13":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"aside-card transparent mx-auto my-12",attrs:{flat:"",width:"480"}},[n("v-card",{staticClass:"transparent",attrs:{flat:""}},[n("v-card-title",[n("SubHeader",{attrs:{value:t.header},on:{"update:value":function(e){t.header=e}}})],1),n("v-card-text",[n("Paragraph",{attrs:{value:t.text},on:{"update:value":function(e){t.text=e}}})],1),t._l(t.offer,(function(e,a){return n("v-card",{key:a,staticClass:"ml-4",attrs:{flat:""}},[t.info.offer.length>0?n("v-btn",{staticStyle:{"margin-left":"-60px","margin-top":"48px"},attrs:{absolute:"",fab:"",dark:"",small:"",top:"",left:"",color:"#900"},on:{click:function(e){return t.$store.commit("content/REMOVE_OFFER",a)}}},[n("v-icon",[t._v("mdi-minus")])],1):t._e(),n("v-row",[n("v-col",[n("GreenText",{attrs:{index:a}})],1),n("v-col",[n("BlackText",{attrs:{index:a}})],1)],1)],1)})),n("v-btn",{staticStyle:{"margin-bottom":"-8px"},attrs:{absolute:"",fab:"",dark:"",small:"",bottom:"",right:"",color:"#09b"},on:{click:t.addOffer}},[n("v-icon",[t._v("mdi-plus")])],1)],2),n("v-card-text",{staticClass:"my-12"},[n("span",{staticClass:"small text-left",staticStyle:{"margin-right":"16px"}},[t._v("Pineapple NET is powered by")]),n("v-img",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{src:a("31ef"),width:"50"}})],1)],1)},o=[],r=a("2c9d"),s=a("c469"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",{staticClass:"green-text",attrs:{"hide-details":"",color:"#72BF44"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})},c=[],u={name:"GreenText",props:["index"],computed:{inputValue:{get:function(){return this.$store.state.content.info.offer[this.index].greenText},set:function(t){this.$store.commit("content/UPDATE_OFFER_GREEN_TEXT",{num:this.index,value:t})}}}},l=u,d=(a("5071"),a("efc1"),a("2877")),f=a("6544"),m=a.n(f),p=a("8654"),h=Object(d["a"])(l,i,c,!1,null,"08205f3c",null),v=h.exports;m()(h,{VTextField:p["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-textarea",{staticClass:"black-text",attrs:{"hide-details":""},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})},g=[],T={name:"BlackText",props:["index"],computed:{inputValue:{get:function(){return this.$store.state.content.info.offer[this.index].blackText},set:function(t){this.$store.commit("content/UPDATE_OFFER_BLACK_TEXT",{num:this.index,value:t})}}}},b=T,C=(a("7da5"),a("a844")),_=Object(d["a"])(b,x,g,!1,null,"c3ef8b34",null),E=_.exports;m()(_,{VTextarea:C["a"]});var P={name:"Aside",components:{SubHeader:r["a"],Paragraph:s["a"],GreenText:v,BlackText:E},data:function(){return{changed:!1,offer:this.$store.state.content.info.offer}},computed:{info:function(){return this.$store.state.content.info},header:{get:function(){return this.info.header},set:function(t){this.$store.commit("content/UPDATE_INFO",{prop:"header",value:t})}},text:{get:function(){return this.info.header},set:function(t){this.$store.commit("content/UPDATE_INFO",{prop:"text",value:t})}}},watch:{changed:function(t){t&&(this.offer=this.$store.state.content.info.offer,this.changed=!1)},offer:function(t){console.log("Info offer changed:\n",t)}},methods:{addOffer:function(){this.$store.commit("content/ADD_OFFER"),this.changed=!0},removeOffer:function(t){this.$store.commit("content/REMOVE_OFFER",t),this.changed=!0}}},V=P,O=(a("d32d"),a("8336")),$=a("b0af"),w=a("99d9"),k=a("62ad"),F=a("132d"),U=a("adda"),R=a("0fd9"),S=Object(d["a"])(V,n,o,!1,null,"3f68bb4d",null);e["a"]=S.exports;m()(S,{VBtn:O["a"],VCard:$["a"],VCardText:w["b"],VCardTitle:w["c"],VCol:k["a"],VIcon:F["a"],VImg:U["a"],VRow:R["a"]})},"45ca":function(t,e,a){},"4ec9e":function(t,e,a){},5071:function(t,e,a){"use strict";var n=a("4ec9e"),o=a.n(n);o.a},"55d6":function(t,e,a){},"61e0":function(t,e,a){"use strict";var n=a("117d"),o=a.n(n);o.a},7039:function(t,e,a){},"7da5":function(t,e,a){"use strict";var n=a("55d6"),o=a.n(n);o.a},a211:function(t,e,a){"use strict";var n=a("7039"),o=a.n(n);o.a},d32d:function(t,e,a){"use strict";var n=a("45ca"),o=a.n(n);o.a},e9c9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticStyle:{"overflow-x":"hidden","margin-top":"160px","margin-bottom":"64px",padding:"40px!important"}},[a("v-card",{staticClass:"mx-auto homefone",attrs:{flat:"",width:"100%","max-width":"1440"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center mx-auto",attrs:{sm:"12",md:"6"}},[a("v-card",{staticClass:"transparent mx-auto top-element",attrs:{flat:"",width:"100%","max-width":"480"}},[a("v-card-text",{staticClass:"text-center text-md-left"},[a("TopHeader",{attrs:{value:t.topHeader},on:{"update:value":function(e){t.topHeader=e}}})],1),a("v-card-text",{staticClass:"mx-auto mx-lg-0"},[a("Paragraph",{attrs:{value:t.topText},on:{"update:value":function(e){t.topText=e}}})],1),a("v-card-text",{staticClass:"text-center text-md-left"},[a("Button",{attrs:{value:t.topButton},on:{"update:value":function(e){t.topButton=e}}})],1)],1)],1),a("v-col",{attrs:{sm:"12",md:"6"}},[a("v-card",{staticClass:"transparent",attrs:{flat:"",width:"100%","max-width":"600"}},[a("ChangePicture",{attrs:{destination:"image",pictureURL:t.imageSrc},on:{"update:pictureURL":function(e){t.imageSrc=e},"update:picture-u-r-l":function(e){t.imageSrc=e}}}),a("v-img",{staticClass:"mx-auto",attrs:{src:t.top.pictureURL,"max-width":"750"}})],1)],1)],1)],1)],1)},o=[],r=a("5530"),s=a("2f62"),i=a("d8fc"),c=a("9e17"),u=a("c469"),l=a("a889"),d={name:"Top",components:{ChangePicture:i["a"],TopHeader:c["a"],Paragraph:u["a"],Button:l["a"]},props:["page"],data:function(){return{imageSrc:"",clicked:!1}},computed:Object(r["a"])({},Object(s["d"])("content",["top"]),{topHeader:{get:function(){return this.top.header},set:function(t){this.$store.commit("content/UPDATE_TOP",{prop:"header",value:t})}},topText:{get:function(){return this.top.text},set:function(t){this.$store.commit("content/UPDATE_TOP",{prop:"text",value:t})}},topButton:{get:function(){return this.top.button},set:function(t){this.$store.commit("content/UPDATE_TOP",{prop:"button",value:t})}}}),watch:{imageSrc:function(t){console.log("WATCHER: Image src changed: ",t),this.$store.commit("content/UPDATE_TOP",{prop:"pictureURL",value:t})},clicked:function(t){t&&(console.log("Clicked!"),this.clicked=!1)}}},f=d,m=(a("a211"),a("2877")),p=a("6544"),h=a.n(p),v=a("b0af"),x=a("99d9"),g=a("62ad"),T=a("a523"),b=a("adda"),C=a("0fd9"),_=Object(m["a"])(f,n,o,!1,null,"449fe084",null);e["a"]=_.exports;h()(_,{VCard:v["a"],VCardText:x["b"],VCol:g["a"],VContainer:T["a"],VImg:b["a"],VRow:C["a"]})},efc1:function(t,e,a){"use strict";var n=a("2e2a"),o=a.n(n);o.a},f672:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"user-info mx-auto pa-6 homefone",attrs:{width:"480"}},[a("v-tooltip",{attrs:{top:"",color:"info"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"warning"},on:{click:t.saveContent}},n),[a("v-icon",[t._v("mdi-content-save")])],1)]}}])},[a("span",[t._v("Save section content")])]),a("v-card-title",[a("h4",{ref:"userContactHeader",attrs:{contenteditable:""},domProps:{textContent:t._s(t.userForm.title)}})]),a("v-card-text",{staticClass:"mx-0 px-0",attrs:{width:"100%"}},[t._l(t.items,(function(t,e){return a("v-text-field",{key:e,staticClass:"user-inputs",attrs:{placeholder:t.placeholder,outlined:"",dense:"","hide-details":"",height:"32"}})})),a("v-textarea",{staticClass:"user-inputs",attrs:{placeholder:t.userForm.messagePlaceholder,outlined:"",color:"#656565","auto-grow":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],2),a("v-card-actions",[a("p",{ref:"userContactButton",staticClass:"submit-button mx-auto",attrs:{contenteditable:""},domProps:{textContent:t._s(t.userForm.button)}})])],1)},o=[],r=a("5530"),s=a("2f62"),i={name:"UserContact",data:function(){return{message:"",items:{name:{value:"",placeholder:"Full name*"},email:{value:"",placeholder:"Email*"},phone:{value:"",placeholder:"Phone"}}}},computed:Object(r["a"])({},Object(s["d"])("content",["userForm"])),methods:{initFields:function(){for(var t in this.items)this.items[t].value="";this.message=""},saveContent:function(){this.$store.commit("content/UPDATE_USER_FORM",{prop:"title",value:this.$refs.userContactHeader.innerText}),this.$store.commit("content/UPDATE_USER_FORM",{prop:"button",value:this.$refs.userContactButton.innerText}),this.$store.commit("content/UPDATE_USER_FORM",{prop:"messagePlaceholder",value:this.message}),this.$store.commit("SET_POPUP_TITLE","SECTION CONTENT"),this.$store.commit("SET_POPUP_TEXT","Data successfully saved"),this.$store.commit("SHOW_POPUP")}},mounted:function(){this.initFields()}},c=i,u=(a("61e0"),a("2877")),l=a("6544"),d=a.n(l),f=a("8336"),m=a("b0af"),p=a("99d9"),h=a("132d"),v=a("8654"),x=a("a844"),g=a("3a2f"),T=Object(u["a"])(c,n,o,!1,null,"5e26e91e",null);e["a"]=T.exports;d()(T,{VBtn:f["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VIcon:h["a"],VTextField:v["a"],VTextarea:x["a"],VTooltip:g["a"]})}}]);