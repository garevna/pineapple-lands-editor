(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7e9b8b2"],{"2bc9":function(t,e,i){},"361b":function(t,e,i){"use strict";i("2bc9")},c267:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticStyle:{position:"relative"},attrs:{hover:"",width:t.cardWidth,height:t.cardHeight,"pa-4":""}},[i("img",{staticClass:"testimonial-photo",staticStyle:{"border-radius":"50%"},attrs:{src:t.photo,width:"40",height:"40",alt:""}}),i("p",{staticClass:"testimonial-name"},[t._v(t._s(t.name))]),i("p",{staticClass:"testimonial-text",style:{fontSize:t.textSize},domProps:{innerHTML:t._s(t.text)}}),t.ellipsis?i("p",{staticClass:"testimonial-text-ellipsis",style:{fontSize:t.textSize}},[t._v("...")]):t._e(),i("p",{staticClass:"testimonial-date"},[t._v(t._s(t.date))])])},a=[],n=i("5530"),o=i("2f62"),r={name:"TestimonialsCard",props:["date","photo","name","text"],data:function(){return{ellipsis:!1,cardHeight:"240px"}},computed:Object(n["a"])(Object(n["a"])({},Object(o["e"])(["viewportWidth"])),{},{cardWidth:function(){return this.viewportWidth<600?this.viewportWidth-100:376},textSize:function(){return this.viewportWidth<600?"12px":"14px"}}),mounted:function(){var t=document.body.appendChild(document.createElement("p"));t.style.marginTop="-1000px",t.style.width=this.cardWidth-40+"px",t.textContent=this.text,this.ellipsis=t.offsetHeight>86,t.remove()}},c=r,l=(i("361b"),i("2877")),p=i("6544"),d=i.n(p),h=i("b0af"),u=Object(l["a"])(c,s,a,!1,null,"30fce926",null);e["default"]=u.exports;d()(u,{VCard:h["a"]})}}]);