(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c851eafa","chunk-3cda09ce"],{"59f3":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"absolute top-0 bg-gray-700 text-white p-2 w-full z-50 cursor-pointer right-0"},[a("div",{staticClass:"flex flex-row justify-start"},[a("div",[a("div",[e._v("Palette")]),a("div",{staticClass:"flex flex-row m-auto mb-2"},[a("i",{staticClass:"material-icons border border-black text-xl font-bold rounded-full h-6 w-6 mr-2 bg-transparent text-red-500",attrs:{title:"transparent"},on:{click:function(t){return e.$emit("color","","")}}},[e._v("clear")]),a("div",{staticClass:"border border-black rounded-full  w-6 h-6 mr-2 bg-white",attrs:{title:"white"},on:{click:function(t){return e.$emit("color","white","")}}}),a("div",{staticClass:"border border-black rounded-full  w-6 h-6 mr-2 bg-black",attrs:{title:"black"},on:{click:function(t){return e.$emit("color","black","")}}})]),a("div",{staticClass:"m-auto"},e._l(e.colors,(function(t,l){return a("div",[a("div",{key:"color_"+l,staticClass:"flex flex-row mb-2"},e._l(9,(function(l){return a("div",{key:e.density+"_"+t+"_"+l,class:"bg-"+t+"-"+100*l+" rounded-full border border-black  w-5 h-5 mr-1",attrs:{title:t+"-"+100*l},on:{click:function(a){return e.$emit("color",t,100*l)}}})})),0)])})),0)]),e.$attrs.field?a("div",[e._v(" Image "),e.$attrs.field.image?e._e():a("i",{staticClass:"material-icons text-white text-sm border rounded-full",on:{click:function(t){return e.$emit("media")}}},[e._v("add")]),e.$attrs.field.image?a("img",{attrs:{src:e.$attrs.field.image.url},on:{click:function(t){return e.$emit("media")}}}):e._e(),e.$attrs.field.image?a("span",{staticClass:"text-xs",on:{click:e.remove}},[e._v("Remove")]):e._e()]):e._e()]),a("button",{staticClass:"mt-1 xs",on:{click:function(t){return e.$emit("close")}}},[e._v("OK")])])},r=[],o=a("deff"),i={name:"NuxpAdminPalette",data:function(){return{neutral:["transparent","white","black"],density:{extralight:100,verylight:200,mediumlight:300,light:400,normal:500,mediumdark:600,dark:700,verydark:800,extradark:900},css:"",opacity:100}},computed:{colors:function(){return o["a"]["colors"]}},mounted:function(){this.css=this.$attrs.css},watch:{opacity:function(e){this.$emit("opacity",e)}},methods:{setCSS:function(){this.$emit("classe",this.$attrs.css)},remove:function(){console.log("remove image"),this.$emit("removeimage")}}},n=i,s=a("2877"),d=Object(s["a"])(n,l,r,!1,null,null,null);t["default"]=d.exports},a828:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v(" Gradient "),a("div",{staticClass:"flex flex-row justify-between"},[a("div",[e._v(" From "),a("div",{class:"mb-1 w-8 h-8 border-2 rounded-full "+e.color("from"),on:{click:function(t){return e.getColor("from")}}})]),a("div",[e._v(" Via "),a("div",{class:"mb-1 w-8 h-8 border-2 rounded-full "+e.color("via"),on:{click:function(t){return e.getColor("via")}}})]),a("div",[e._v(" To "),a("div",{class:"mb-1 w-8 h-8 border-2 rounded-full "+e.color("to"),on:{click:function(t){return e.getColor("to")}}})])]),e._v(" Direction "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.direction,expression:"direction"}],staticClass:"nodark",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.direction=t.target.multiple?a:a[0]},e.update]}},[a("option",{attrs:{value:""}},[e._v("reset")]),e._l(e.directions,(function(t,l){return a("option",{key:t.label,domProps:{value:t.value}},[e._v(e._s(t.label))])}))],2),a("div",{class:"w-full border my-1 h-10 "+e.direction+" "+Object.values(e.twgradient).join(" ")}),a("transition",{attrs:{name:"slidedown"}},[e.palette?a("moka-colors",{attrs:{css:""},on:{close:function(t){e.palette=!e.palette},color:e.setColor}}):e._e()],1)],1)},r=[],o=(a("ac1f"),a("1276"),a("159b"),a("5319"),a("a15b"),a("07ac"),a("59f3")),i=a("deff"),n={components:{MokaColors:o["default"]},data:function(){return{twgradient:{direction:"",from:"",via:"",to:""},gradients:["from","to","via"],direction:"",directions:[{label:"Top",value:"bg-gradient-to-t"},{label:"Top Right",value:"bg-gradient-to-tr"},{label:"Right",value:"bg-gradient-to-r"},{label:"Bottom Right",value:"bg-gradient-to-br"},{label:"Bottom",value:"bg-gradient-to-b"},{label:"Bottom Left",value:"bg-gradient-to-bl"},{label:"Left",value:"bg-gradient-to-l"},{label:"Top Left",value:"bg-gradient-to-tl"}],palette:!1,currentCss:"",target:null}},props:["css"],computed:{colors:function(){return i["a"].colors}},mounted:function(){var e=this;if(this.css){var t=this.css,a=t.split(" ");a.forEach((function(t,a){" "!=t.replaceAll(" ","")&&e.gradients.forEach((function(a){t.indexOf(a)>-1&&e.colors.forEach((function(l){t.indexOf(a+"-"+l)>-1&&(e.twgradient[a]=t)}))}))})),this.directions.forEach((function(a){e.css.indexOf(a.value)>-1&&(e.direction=a.value,t=t.replace(a.value,""))}))}},watch:{},methods:{update:function(){if(!this.direction){var e={direction:"",gradient:"",from:"",to:"",via:""};return this.$emit("input",Object.values(e).join(" ")),void this.$emit("css","")}this.twgradient.direction=this.direction,this.$emit("input",Object.values(this.twgradient).join(" ")),this.$emit("css",Object.values(this.twgradient).join(" "))},color:function(e){return this.twgradient[e]?this.twgradient[e].replace(e,"bg"):""},getColor:function(e){this.target=e,this.palette=!this.palette},setColor:function(e,t){if(this.palette=!1,e){var a=t?"-"+t:"";"from"===this.target?this.twgradient[this.target]="from-"+e+a:"to"===this.target?this.twgradient[this.target]="to-"+e+a:"via"===this.target&&(this.twgradient[this.target]="via-"+e+a),this.update()}}}},s=n,d=a("2877"),c=Object(d["a"])(s,l,r,!1,null,null,null);t["default"]=c.exports},deff:function(e,t,a){"use strict";a("ac1f"),a("1276"),a("159b"),a("fb6a");var l="Asap+Condensed|Barlow+Condensed|Abel|Alice|Alegreya|Amethysta|Archivo+Black|Montserrat|Nunito+Sans|Open+Sans|Roboto|Roboto+Condensed|Quattrocento|Raleway|Lora|PT+Sans|Alfa+Slab+One".replaceAll("+"," ").split("|"),r=[1,4,8,12,16,20,24,32,40,48,64,80,96,128,160,192,224,256],o=["full","1/2","1/3","2/3","1/4","3/4","1/5","2/5","3/5","4/5","1/6","2/6","4/6","5/6","1/12","2/12","3/12","4/12","5/12","7/12","8/12","9/12","10/12","11/12"],i=["gray","bluegray","brown","red","orange","yellow","green","lime","teal","blue","indigo","purple","pink"];function n(e){var t=[];return o.forEach((function(a){t.push(e+"-"+a)})),t}function s(e,t){var a=[];if(t){var l=r;l.slice().reverse().forEach((function(t){a.push("-"+e+"-"+parseInt(t/4))})),a.push(" ")}return r.forEach((function(t){a.push(e+"-"+parseInt(t/4))})),a}function d(e){for(var t=[],a=0;a<5;a++)t.push(e+"-"+25*a);return t}function c(e){var t=["transparent","white","black"];return i.forEach((function(a){t.push(e+"-"+a),t.push("hover:"+e+"-"+a)})),t}var u={width:[{label:"auto",value:"w-auto"},{label:"0",value:"w-0"},{label:"1",value:"w-1"},{label:"2",value:"w-2"},{label:"3",value:"w-3"},{label:"4",value:"w-4"},{label:"5",value:"w-5"},{label:"6",value:"w-6"},{label:"8",value:"w-8"},{label:"10",value:"w-10"},{label:"12",value:"w-12"},{label:"16",value:"w-16"},{label:"20",value:"w-20"},{label:"24",value:"w-24"},{label:"32",value:"w-32"},{label:"40",value:"w-40"},{label:"48",value:"w-48"},{label:"56",value:"w-56"},{label:"64",value:"w-64"},{label:"8%",value:"w-1/12"},{label:"16%",value:"w-1/6"},{label:"20%",value:"w-1/5"},{label:"25%",value:"w-1/4"},{label:"33%",value:"w-1/3"},{label:"40%",value:"w-2/5"},{label:"50%",value:"w-1/2"},{label:"60%",value:"w-3/5"},{label:"66%",value:"w-2/3"},{label:"75%",value:"w-3/4"},{label:"80%",value:"w-4/5"},{label:"83%",value:"w-5/6"},{label:"90%",value:"w-11/12"},{label:"100%",value:"w-full"},{label:"screen",value:"w-screen"}],height:[{label:"auto",value:"h-auto"},{label:"0",value:"h-0"},{label:"1",value:"h-1"},{label:"2",value:"h-2"},{label:"3",value:"h-3"},{label:"4",value:"h-4"},{label:"5",value:"h-5"},{label:"6",value:"h-6"},{label:"8",value:"h-8"},{label:"10",value:"h-10"},{label:"12",value:"h-12"},{label:"16",value:"h-16"},{label:"20",value:"h-20"},{label:"24",value:"h-24"},{label:"32",value:"h-32"},{label:"40",value:"h-40"},{label:"48",value:"h-48"},{label:"56",value:"h-56"},{label:"64",value:"h-64"},{label:"20%",value:"h-1/5"},{label:"25%",value:"h-1/4"},{label:"33%",value:"h-1/3"},{label:"40%",value:"h-2/5"},{label:"50%",value:"h-1/2"},{label:"60%",value:"h-3/5"},{label:"66%",value:"h-2/3"},{label:"75%",value:"h-3/4"},{label:"80%",value:"h-4/5"},{label:"full",value:"h-full"},{label:"screen",value:"h-screen"}],semantics:["article","aside","details","figcaption","figure","footer","header","main","mark","nav","product","section","summary","time"],textSize:["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl","text-6xl","text-7xl","text-8xl","text-9xl","text-10xl","text-20xl"],textAlign:["text-left","text-center","text-right","text-justify"],textlineheight:["leading-none","leading-tight","leading-snug","leading-normal","leading-relaxed","leading-loose"],textSpacing:["tracking-tighter","tracking-tight","tracking-normal","tracking-wide","tracking-wider","tracking-widest"],textOpacity:d("text-opacity"),textcolor:c("text"),fontfamily:l,fontWeight:["font-thin","font-extralight","font-light","font-normal","font-medium","font-semibold","font-bold","font-extrabold","font-black"],bgOpacity:d("bg-opacity"),opacity:d("opacity"),colors:i,bgcolor:c("bg"),from:c("from"),to:c("to"),via:c("via"),gradient:[{label:"Top",value:"bg-gradient-to-t"},{label:"Top Right",value:"bg-gradient-to-tr"},{label:"Right",value:"bg-gradient-to-r"},{label:"Bottom Right",value:"bg-gradient-to-br"},{label:"Bottom",value:"bg-gradient-to-b"},{label:"Bottom Left",value:"bg-gradient-to-bl"},{label:"Left",value:"bg-gradient-to-l"},{label:"Top Left",value:"bg-gradient-to-tl"}],blur:["blur-1","blur-2","blur-3","blur-4","blur-5"],flexdirection:["flex-col","flex-row","flex-col-reverse","flex-row-reverse"],flexorder:["order-first","order-last","order-none"],flexwrap:["flex-wrap","flex-nowrap","flex-wrap-reverse"],flexgrow:["flex-grow","flex-grow-0"],flexshrink:["flex-shrink","flex-shrink-0"],zindex:["z-auto","z-0","z-1","z-2","z-3","z-4","z-5","z-6","z-7","z-8","z-9","z-10","z-20","z-30","z-40","z-50","z-max","z-top","z-2xtop"],gridcols:["md:grid-cols-1","md:grid-cols-2","md:grid-cols-3","md:grid-cols-4","md:grid-cols-5","md:grid-cols-6","md:grid-cols-7","md:grid-cols-8","md:grid-cols-9","md:grid-cols-10","md:grid-cols-11","md:grid-cols-12","md:grid-cols-none"],colspan:["md:col-span-auto","md:col-span-1","md:col-span-2","md:col-span-3","md:col-span-4","md:col-span-5","md:col-span-6","md:col-span-7","md:col-span-8","md:col-span-9","md:col-span-10","md:col-span-11","md:col-span-12","md:col-span-full"],gridgap:["gap-1","gap-2","gap-3","gap-4","gap-5","gap-6","gap-8","gap-10","gap-12","gap-16","gap-20","gap-24","gap-32","gap-40","gap-48","gap-56","gap-64"],alignitems:["items-start","items-center","items-end","items-baseline","items-stretch"],aligncontent:["content-start","content-center","content-end","content-between","content-around","content-evenly"],alignself:["self-auto","self-start","self-center","self-end","self-stretch"],justifycontent:["justify-start","justify-center","justify-end","justify-between","justify-around","justify-evenly"],justifyitems:["justify-items-auto","justify-items-start","justify-items-center","justify-items-end","justify-items-stretch"],justifyself:["justify-self-auto","justify-self-start","justify-self-center","justify-self-end","justify-self-stretch"],bordercolor:c("border"),border:["border","border-2","border-4","border-8"],borderTop:["border-t","border-t-2","border-t-4","border-t-8"],borderLeft:["border-l","border-l-2","border-l-4","border-l-8"],borderRight:["border-r","border-r-2","border-r-4","border-r-8"],borderBottom:["border-b","border-b-2","border-b-4","border-b-8"],borderOpacity:d("border-opacity"),padding:s("p"),paddingTop:s("pt"),paddingBottom:s("pb"),paddingLeft:s("pl"),paddingRight:s("pr"),spacing:n("p"),spacingTop:n("pt"),spacingBottom:n("pb"),spacingLeft:n("pl"),spacingRight:n("pr"),margin:s("m",!0),marginTop:s("mt",!0),marginBottom:s("mb",!0),marginLeft:s("ml",!0),marginRight:s("mr",!0),mauto:["m-auto"],borderType:["border-solid","border-dashed","border-dotted","border-double","border-none"],positionelement:["static","fixed","absolute","relative","sticky","modal"],positionTop:["top-0"],positionLeft:["left-0"],positionBottom:["bottom-0"],positionRight:["right-0"],objectfit:["object-contain","object-cover","object-fill","object-none","object-scale"],rotate:["rotate-0","rotate-1","rotate-2","rotate-3","rotate-6","rotate-12","rotate-45","rotate-90","rotate-180","-rotate-0","-rotate-1","-rotate-2","-rotate-3","-rotate-6","-rotate-12","-rotate-45","-rotate-90","-rotate-180"],skewX:["skew-x-0","skew-x-1","skew-x-2","skew-x-3","skew-x-6","skew-x-12","-skew-x-0","-skew-x-1","-skew-x-2","-skew-x-3","-skew-x-6","-skew-x-12"],skewY:["skew-y-0","skew-y-1","skew-y-2","skew-y-3","skew-y-6","skew-y-12","-skew-y-0","-skew-y-1","-skew-y-2","-skew-y-3","-skew-y-6","-skew-y-12"],rotate3D:["perspective-rotate3dX","perspective-rotate3dX-inverse","perspective-rotate3dY","perspective-rotate3dY-inverse"],rounded:["rounded-none","rounded-sm","rounded","rounded-md","rounded-lg","rounded-xl","rounded-2xl","rounded-3xl","rounded-full"],shadow:["shadow","shadow-xs","shadow-sm","shadow-md","shadow-lg","shadow-xl","shadow-2xl"],grayscale:["grayscale"],animation:["animate-none","animate-ping","animate-bounce","animate-spin","animate-pulse","animate-slidein","animate-slideout"],clipPath:["clip-path-angle-left","clip-path-angle-right","clip-path-arrow-left","clip-path-arrow-right","clip-path-triangle","clip-path-circle","clip-path-tag-down","clip-path-trapezoid-left","clip-path-trapezoid-right","clip-path-rombus","clip-path-parallelogram","clip-path-frame","clip-path-cross","clip-path-stairs","clip-path-stairs-2"],transition:["transition-none","transition-all","transition","transition-colors","transition-opacity","transition-shadow","transition-transform"],transitionDuration:["duration-75","duration-100","duration-150","duration-200","duration-300","duration-500","duration-700","duration-1000"],transitionTiming:["ease-linear","ease-in","ease-out","ease-in-out"],transitionDelay:["delay-75","delay-100","delay-150","delay-200","delay-300","delay-500","delay-700","delay-1000"]};t["a"]=u}}]);