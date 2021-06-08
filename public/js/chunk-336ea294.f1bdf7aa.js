(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-336ea294","chunk-75a848e8","chunk-2d221a8f","chunk-2d216f26","chunk-2d0d36f1","chunk-2d0b91fa"],{"064f":function(e,t,n){},"0916":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.doc.pagination?n("moka-loop-pagination",{attrs:{start:e.start,limit:e.limit,total:e.total,doc:e.doc},on:{prev:function(t){e.start=e.start-e.limit},next:function(t){e.start=e.start+e.limit}}}):e._e(),e.apiID?n("div",{class:Object.values(e.doc.css).join(" ")},[e._l(e.dataset,(function(t,o){return[o>=e.start&&o<e.start+e.limit?n("moka-loop-record",{key:t.id,attrs:{currency:e.doc.currency||null,blocks:e.doc.blocks[0],data:t}}):e._e()]}))],2):e._e(),e.doc.pagination?n("moka-loop-pagination",{attrs:{start:e.start,limit:e.limit,total:e.total,doc:e.doc},on:{prev:function(t){e.start=e.start-e.limit},next:function(t){e.start=e.start+e.limit}}}):e._e()],1)},s=[],a=(n("4de4"),n("b0c0"),n("7ab3")),i=n("5d6b"),r={name:"MokaCollectionLoop",components:{MokaLoopRecord:a["default"],MokaLoopPagination:i["default"]},data:function(){return{apiID:"",dataset:null,start:0,limit:8,total:0,pagination:!1}},props:["doc"],mounted:function(){var e=this;this.limit=parseInt(this.doc.records),this.pagination=this.doc.pagination,this.$http.get("content-type-builder/content-types").then((function(t){console.log(t);var n=t.data.data.filter((function(t){return t.schema.name===e.doc.collection}));e.apiID=n[0],e.$http.get(e.apiID.schema.collectionName).then((function(t){e.dataset=t.data,e.total=e.dataset.length}))}))}},l=r,c=n("2877"),u=Object(c["a"])(l,o,s,!1,null,null,null);t["default"]=u.exports},2334:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.doc?n("div",{key:e.doc.id,ref:e.doc.id,class:e.classe(e.doc.css),style:e.doc.style+" "+e.background(e.doc),attrs:{id:e.doc&&e.doc.hasOwnProperty("anchor")?e.doc.anchor:e.doc.id,animateMe:e.refreshAnimation}},[e._l(e.doc.blocks,(function(t,o){return[t&&!t.hasOwnProperty("blocks")?n("moka-element",{key:t.id,attrs:{element:t,coords:[o],refreshAnimation:e.refreshAnimation||e.$attrs.refreshAnimation,develop:!1},on:{click:e.elementAction}}):e._e(),t&&t.hasOwnProperty("blocks")&&!t.hasOwnProperty("blocks_flip")?n("moka-slider-container",{key:t.id,ref:t.id,refInFor:!0,attrs:{id:t.id,doc:t,refreshAnimation:e.refreshAnimation},on:{action:e.elementAction}}):e._e(),t&&t.hasOwnProperty("blocks_flip")?n("moka-flipbox",{key:t.id,ref:t.id,refInFor:!0,attrs:{develop:!1,embeded:!0,doc:t}}):e._e(),t&&"plugin"===t.type&&t.hasOwnProperty("blocks")?n("moka-plugins-wrapper",{key:t.id,attrs:{settings:t.plugin.editor.settings,block:t,plugin:t,component:t.plugin.component}}):e._e()]}))],2):e._e()},s=[],a=n("5530"),i=n("dccf"),r=n("68b8"),l=n("3238"),c=n("2f62"),u=n("cffa"),d=n("1dac");u["a"].registerPlugin(d["a"]);d["a"];var p={name:"MokaSliderContainer",components:{MokaElement:i["default"],MokaFlipbox:r["default"],MokaPluginsWrapper:l["default"]},props:["doc"],computed:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["moka"])),{},{animations:function(){return gsapEffects},refreshAnimation:function(){return!(!this.$attrs.current||this.$attrs.current!==this.doc.id)&&(this.animate(this.doc,this.doc.id),!0)}}),methods:{classe:function(e){if(e)return e.hasOwnProperty("css")?e.css+" "+e.container:e},stile:function(e,t){if(e&&t){var n="";return e.hasOwnProperty("fontFamily")&&(n+='font-family:"'+e.fontFamily+'"; '),e.hasOwnProperty("style")?e.style+n:n}},background:function(e){if(e)return e.hasOwnProperty("image")?" background-image:url("+this.$imageURL(e.image)+");":""},elementAction:function(e){this.$emit("action",e)},animate:function(e,t){if(e){if(this.$refs&&e.hasOwnProperty("gsap")&&e.gsap.animation){var n=u["a"].effects[e.gsap.animation](this.$refs[t],{trigger:this.$refs[t],duration:parseFloat(e.gsap.duration),delay:parseFloat(e.gsap.delay),ease:e.gsap.ease});d["a"].create({id:t,start:"top 99%",trigger:this.$refs[t],toggleActions:"play pause restart none",animation:n,onEnter:function(){e.gsap.delay?n.play():n.play(0)}})}}}},mounted:function(){window.scrollTo(0,0),this.doc&&this.doc.hasOwnProperty("gsap")&&this.doc.gsap.animation&&this.animate(this.doc,this.doc.id)}},m=p,f=n("2877"),h=Object(f["a"])(m,o,s,!1,null,null,null);t["default"]=h.exports},2426:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"slideup"}},[e.doc&&e.doc.blocks.length&&e.modal?n("div",{key:e.renewID,ref:e.doc.id,class:"moka-popup-view overflow-hidden z-2xtop flex flex-no-wrap "+e.classe(e.doc.css),style:e.doc.style+" "+e.background(e.doc),attrs:{id:e.doc&&e.doc.hasOwnProperty("anchor")?e.doc.anchor:e.doc.id,ontouchstart:"this.classList.toggle('hover');"}},[n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"h-full w-full"},[e._l(e.doc.blocks,(function(t,o){return[t&&!t.hasOwnProperty("blocks")&&!t.hasOwnProperty("blocks")||t.hasOwnProperty("items")?n("moka-element",{key:t.id,attrs:{el:t,develop:!1},on:{click:e.elementAction}}):e._e(),t.hasOwnProperty("blocks")&&!t.hasOwnProperty("blocks_flip")?n("moka-preview-single-container",{key:t.id,attrs:{doc:t,component:e.$attrs.component,top:!1,flipside:o,master:e.doc.id,run:e.index,index:o,id:e.doc.id+o,level:parseInt(e.$attrs.level)+1,zi:e.$attrs.zi+parseInt(e.$attrs.level)}}):e._e(),t&&t.hasOwnProperty("blocks")&&t.hasOwnProperty("blocks_flip")?n("moka-flipbox",{key:t.id,attrs:{component:e.$attrs.component,top:!1,index:o,level:parseInt(e.$attrs.level)+1,doc:t}}):e._e()]}))],2)]),!e.doc.popup.modal&&e.doc.popup.close?n("i",{class:"z-2xtop material-icons absolute top-0 right-0 m-1 "+e.doc.popup.css.close_color+" "+e.doc.popup.css.close_size,on:{click:function(t){e.modal=!e.modal,e.$store.dispatch("popup",null)}}},[e._v("close")]):e._e()],1):e._e()]),e.modal&&e.doc.popup.modal?n("i",{class:"z-2xtop material-icons fixed top-0 right-0 m-2 "+e.doc.popup.css.close_color+" "+e.doc.popup.css.close_size,on:{click:function(t){e.modal=!e.modal,e.$store.dispatch("popup",null)}}},[e._v("close")]):e._e(),e.modal&&e.doc.popup.modal?n("div",{class:"fixed top-0 left-0 right-0 bottom-0 min-h-screen min-w-screen "+e.doc.popup.css.modal_background+" opacity-"+e.doc.popup.css.modal_opacity}):e._e()],1)},s=[],a=n("5530"),i=n("1160"),r=n("ff96"),l=n("68b8"),c=n("2f62"),u=n("cffa"),d=n("1dac");u["a"].registerPlugin(d["a"]);d["a"];var p={name:"MokaPopupContainer",data:function(){return{index:0,timer:null,current:null,currentID:null,renewID:null,modal:!1,animation:null}},components:{MokaElement:i["default"],MokaPreviewSingleContainer:r["default"],MokaFlipbox:l["default"]},props:["doc"],computed:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["moka"])),{},{animations:function(){return gsapEffects}}),watch:{"$store.state.moka.popup":function(e){e&&this.doc.hasOwnProperty("popup")&&this.doc.popup.trigger&&e===this.doc.popup.trigger?this.modal=!0:this.modal=!1},modal:function(e){e||window.sessionStorage.setItem("popup-"+this.doc.id,"true")}},methods:{elementAction:function(e){this.$emit("action",e)},getSideClass:function(e){return 1===e?" moka-flipper-back":" moka-flipper-front"},classe:function(e){if(e){var t=this.doc.popup.position,n=e.hasOwnProperty("css")?e.css+" moka-popup-"+this.doc.id+" "+e.container:e+" moka-popup-"+this.doc.id;return n+" modal"+t}},stile:function(e,t){if(e&&t){var n="";return e.hasOwnProperty("fontFamily")&&(n+='font-family:"'+e.fontFamily+'"; '),e.hasOwnProperty("style")?e.style+n:n}},background:function(e){if(e)return e.hasOwnProperty("image")?" background-image:url("+this.$imageURL(e.image)+");":""},animate:function(e,t){if(e){if(this.$refs&&e.hasOwnProperty("gsap")&&e.gsap.animation){var n=u["a"].effects[e.gsap.animation](this.$refs[t],{trigger:this.$refs[t],duration:parseFloat(e.gsap.duration),delay:parseFloat(e.gsap.delay),ease:e.gsap.ease});d["a"].create({id:t,start:"top 99%",trigger:this.$refs[t],toggleActions:"play pause restart none",animation:n,onEnter:function(){e.gsap.delay?n.play():n.play(0)}})}}}},mounted:function(){var e=this;if(this.renewID=this.$randomID(),this.doc.hasOwnProperty("popup")){if(this.doc.popup.delay)return this.modal=!1,void window.setTimeout((function(){e.modal=!0,window.clearTimeout()}),1e3*parseInt(this.doc.popup.delay));this.doc.popup.trigger||this.doc.popup.single&&window.sessionStorage.getItem("popup-"+this.doc.id)?this.modal=!1:this.modal=!0}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},m=p,f=(n("f877"),n("2877")),h=Object(f["a"])(m,o,s,!1,null,null,null);t["default"]=h.exports},3238:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative"},[n(e.component,{tag:"component",attrs:{config:e.$attrs.component.config,settings:e.$attrs.settings,plugin:e.$attrs.plugin,block:e.$attrs.block,el:e.$attrs.plugin}})],1)},s=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),{data:function(){return{component:null,enabled:!1}},computed:{},mounted:function(){var e=this.$attrs.component.path;this.component=function(){return n("cd88")("./"+e)}}}),i=a,r=n("2877"),l=Object(r["a"])(i,o,s,!1,null,null,null);t["default"]=l.exports},"4db0":function(e,t,n){},5046:function(e,t,n){"use strict";n("8557")},"5d6b":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"w-full p-4 cursor-pointer "+e.classe},[n("i",{staticClass:"mr-4 bi-chevron-left",on:{click:function(t){e.$attrs.start>0&&e.$emit("prev")}}}),n("small",[e._v(e._s(e.page))]),n("i",{staticClass:"ml-4 bi-chevron-right",on:{click:function(t){e.activeNext&&e.$emit("next")}}})])},s=[],a={name:"MokaPreviewLooopPagination",props:["doc"],computed:{classe:function(){var e="";return this.doc.hasOwnProperty("pagination_color")&&(e+=" "+this.doc.pagination_color),this.doc.hasOwnProperty("pagination_justify")&&(e+=" "+this.doc.pagination_justify),e},activeNext:function(){return parseInt(this.$attrs.start)+parseInt(this.$attrs.limit)<=parseInt(this.$attrs.total)},page:function(){var e=parseInt(this.$attrs.start)+1+"-";return parseInt(this.$attrs.start)+parseInt(this.$attrs.limit)>parseInt(this.$attrs.total)?e+=this.$attrs.total:e+=parseInt(this.$attrs.start)+parseInt(this.$attrs.limit),e}}},i=a,r=n("2877"),l=Object(r["a"])(i,o,s,!1,null,null,null);t["default"]=l.exports},"7ab3":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:Object.values(e.blocks.css).join(" "),style:"background-image:url("+e.$imageURL(e.blocks.image)+");"},[e._l(e.blocks.blocks,(function(t){return[t&&!t.hasOwnProperty("blocks")||t.hasOwnProperty("items")?n("moka-element",{key:t.id,attrs:{el:t,currency:e.$attrs.currency||null,data:e.data,develop:!1},on:{click:e.elementAction}}):e._e(),"container"!==t.tag||t.hasOwnProperty("blocks_flip")?e._e():n("moka-collection-record",{key:e.$randomID(),attrs:{data:e.data,currency:e.$attrs.currency||null,blocks:t}}),t&&t.hasOwnProperty("image_flip")?n("moka-flipbox",{key:t.id,ref:t.id,refInFor:!0,attrs:{develop:!0,embeded:!0,doc:t,data:e.data,currency:e.$attrs.currency||null,editor:!0}}):e._e()]}))],2)},s=[],a=n("f529"),i=n("1160"),r=n("68b8"),l={name:"MokaCollectionRecord",components:{MokaContainer:a["default"],MokaElement:i["default"],MokaFlipbox:r["default"]},props:["blocks","data"],methods:{elementAction:function(){return null}}},c=l,u=n("2877"),d=Object(u["a"])(c,o,s,!1,null,null,null);t["default"]=d.exports},8557:function(e,t,n){},b947:function(e,t,n){"use strict";n("4db0")},c542:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[!e.menu_show&&"menu"===e.el.element&&e.el.responsive?n("i",{class:"bi-list text-2xl z-highest fixed top-0 left-0 m-1 "+e.el.css.responsive_items,on:{click:function(t){e.nested=null,e.menu_show=!e.menu_show}}}):e._e(),e.menu_show?n("div",{staticClass:"fixed inset-0 transition duration-700",class:e.el.css.responsive},[e.nested?e._e():n("nav",{class:e.classe+""},["menu"===e.el.element&&e.el.responsive?n("i",{class:"bi-chevron-left moka-icons z-max top-0 left-0 m-1 text-2xl "+e.el.css.responsive_items,on:{click:function(t){e.menu_show=!e.menu_show}}}):e._e(),e._l(e.el.items,(function(t,o){return n("div",{class:" cursor-pointer relative p-1"},[t.submenu?e._e():n("a",{class:e.el.css.responsive_items,attrs:{href:t.link}},[e._v(e._s(t.label))]),t.submenu?n("a",{class:e.el.css.responsive_items,on:{click:function(n){e.nested=t}}},[e._v(e._s(t.label)+" "),e._m(0,!0)]):e._e()])}))],2),e.nested?n("nav",{class:e.classe+""},["menu"===e.el.element&&e.el.responsive?n("i",{class:"bi-chevron-left moka-icons z-max top-0 left-0 m-1 text-2xl "+e.el.css.responsive_items,on:{click:function(t){e.nested=null}}}):e._e(),e._l(e.nested.submenu,(function(t){return n("div",[n("a",{class:e.el.css.responsive_items,attrs:{href:t.link}},[e._v(e._s(t.label))])])}))],2):e._e()]):e._e()])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"absolute right-0"},[n("i",{staticClass:"bi-chevron-right"})])}],a={name:"WhoobeResponsiveMenu",data:function(){return{menu_show:!1,nested:""}},props:["el"],computed:{classe:function(){return this.menu_show?this.el.css.responsive+" width-grow":this.el.css.responsive+" width-grow-out"}}},i=a,r=n("2877"),l=Object(r["a"])(i,o,s,!1,null,null,null);t["default"]=l.exports},cafa:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("div",{staticClass:"absolute h-full overflow-hidden top-0 left-0 p-2 flex flex-col justify-center z-highest",class:e.classe,on:{click:function(t){return e.$emit("prev")}}},[n("icon",{staticClass:"z-highest",attrs:{css:e.navigation.color+" "+e.navigation.size,name:e.navigation.icons[0]}})],1),n("div",{staticClass:"absolute h-full overflow-hidden top-0  right-0 p-2 flex flex-col justify-center z-highest",class:e.classe,on:{click:function(t){return e.$emit("next")}}},[n("icon",{staticClass:"z-highest",attrs:{css:e.navigation.color+" "+e.navigation.size,name:e.navigation.icons[1]}})],1),e.dots&&e.dots.enable?n("div",{staticClass:"absolute bottom-0 left-0 text-center flex flex-row justify-center items-center w-full p-2 z-highest m-2"},e._l(e.$attrs.gallery.images.length,(function(t){return n("i",{staticClass:"material-icons mr-2",class:parseInt(e.$attrs.index)===t-1?"animate-ping "+e.dots.css:e.dots.css,on:{click:function(n){return e.$emit("goto",t-1)}}},[e._v("fiber_manual_record")])})),0):e._e()])},s=[],a={name:"WhoobeNavigationVert",props:["navigation","dots"],computed:{classe:function(){var e=this.navigation.css;return e+=" "+this.navigation.position,this.$clean(e)}}},i=a,r=n("2877"),l=Object(r["a"])(i,o,s,!1,null,null,null);t["default"]=l.exports},ce18:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.block?n("div",{attrs:{id:"carousel_"+e.block.id}},[e.block.gallery.navigation.enable?n("block-navigation",{staticClass:"z-highest",attrs:{navigation:e.block.gallery.navigation,dots:e.block.gallery.dots,gallery:e.block.gallery,index:e.index},on:{next:function(t){e.index++},prev:function(t){e.index--},goto:e.goToSlide}}):e._e()],1):e._e()},s=[],a=(n("159b"),n("cafa")),i={name:"WhoobePreviewCarousel",components:{BlockNavigation:a["default"]},data:function(){return{carouselKey:null,index:0}},props:["block"],watch:{index:function(e){e>this.block.gallery.images.length-1&&(this.index=0),e<0&&(this.index=this.block.gallery.images.length-1),this.goTo(this.index)}},methods:{goTo:function(e){var t=this;this.block.gallery.images.forEach((function(e,n){document.querySelector(".carousel_"+t.block.id+"_"+n).style.animation="",document.querySelector(".carousel_"+t.block.id+"_"+n).style.transition="all "+t.block.gallery.delay+"s linear",document.querySelector(".carousel_"+t.block.id+"_"+n).style.opacity=0}));var n=this.block.gallery.custom?this.block.gallery.custom:this.block.gallery.animation+"Navigation",o=document.querySelector(".carousel_"+this.block.id+"_"+e);o.style.animation=n,o.style.animationDuration=this.block.gallery.delay+"s",o.style.animationTimingFunction="linear",o.style.opacity=1},goToSlide:function(e){this.index=e,this.goTo(e)}},mounted:function(){var e=this,t=this.block,n=document.querySelector("#carousel_"+t.id);if(console.log("Init carousel ...",n),n){n.classList.add("absolute","bgcontainer","top-0","left-0","bottom-0","right-0","z-1");t.gallery.navigation.enable?"3s linear":(parseFloat(t.gallery.delay)*t.gallery.images.length+"s linear infinite 0s",!0);var o,s="imageFade";t.gallery.hasOwnProperty("custom")&&t.gallery.custom?s=t.gallery.custom:t.gallery.hasOwnProperty("animation")&&(s=t.gallery.animation),t.gallery.images.forEach((function(a,i){i<100&&(o=document.createElement("div"),n.appendChild(o),o.classList.add("absolute","top-0","left-0","bottom-0","right-0","bg-cover","bg-no-repeat","bg-top","carousel_"+t.id+"_"+i),o.style.animation=s,o.style.animationDelay=parseInt(t.gallery.delay)*i+"s",o.style.animationDuration=parseInt(t.gallery.delay)*t.gallery.images.length+"s",o.style.animationIterationCount="infinite",o.style.backgroundImage="url("+e.$imageURL(a)+")",o.style.zIndex=-1)}))}if(t.gallery.navigation.enable){this.block.gallery.images.forEach((function(t,n){document.querySelector(".carousel_"+e.block.id+"_"+n).style.opacity=0}));var a=document.querySelector(".carousel_"+t.id+"_0");a.style.animation=t.gallery.custom?t.gallery.custom:t.gallery.animation,a.style.animationDuration=t.gallery.delay+"s",a.style.animationTimingFunction="linear",a.style.zIndex=1,a.style.opacity=1}if(this.block.gallery.custom){var i=document.createElement("style");i.innerHTML="@keyframes "+this.block.gallery.custom+"{ "+this.block.gallery.keyframes+"}",n.appendChild(i)}}},r=i,l=(n("5046"),n("2877")),c=Object(l["a"])(r,o,s,!1,null,null,null);t["default"]=c.exports},d205:function(e,t,n){"use strict";n.r(t);var o,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"menu"===e.el.element?n("nav",{class:e.el.css.container+" invisible md:visible w-full z-top "+e.el.css.align+e.background(e.el)+" "+e.el.css.css,attrs:{menu_nav:""}},e._l(e.el.items,(function(t,o){return n("div",{key:e.el.id+"_"+o,class:e.el.css.items+" cursor-pointer relative ",attrs:{menu_item:""}},[e.hasNoSubmenu(t)?n("a",{class:e.el.css.items,attrs:{href:t.link},on:{mouseover:function(t){e.menuover=null}}},[t.icon?n("span",{class:e.el.css.items},[n("i",{class:"bi-"+t.icon})]):n("span",{class:e.el.css.items},[e._v(e._s(t.label))])]):e._e(),e.hasNoSubmenu(t)?e._e():n("span",{staticClass:"cursor-pointer",class:e.el.css.items},[t.icon?n("span",[n("i",{class:"bi-"+t.icon})]):n("span",{staticClass:"flex flex-row items-center",on:{mouseover:function(t){e.el.css.submenu_behavior&&(e.menuover=o)},click:function(t){e.menuover===o?e.menuover=null:e.menuover=o}}},[e._v(e._s(t.label)+" "),n("icon",{staticClass:"ml-1",attrs:{name:e.menuover===o?"expand_less":"expand_more"}})],1)]),t.submenu&&t.submenu.length?n("div",{ref:"submenu_"+o,refInFor:!0,class:e.isOver(o)+" "+e.el.css.submenu+" fixed flex flex-col z-highest",style:e.overStyle(o),attrs:{submenu:""},on:{mouseleave:function(t){e.el.css.submenu_behavior,e.menuover=null}}},[t.submenu[0].blocks&&e.menuover===o?n("div",{class:Object.values(t.submenu[0].blocks.css).join(" "),style:e.background(t.submenu[0].blocks)+e.getPos(o)},[e._l(t.submenu[0].blocks.blocks,(function(t){return[!t||t.hasOwnProperty("blocks")||t.hasOwnProperty("blocks")?e._e():n("moka-element",{key:t.id,attrs:{el:t,data:e.$attrs.data||null,currency:e.$attrs.currency||null,develop:!1}}),t.hasOwnProperty("blocks")?n("moka-preview-single-container",{key:t.id,attrs:{doc:t,level:"1"}}):e._e()]}))],2):n("div",[e._l(t.submenu,(function(t){return[n("div",{class:e.el.css.submenu_items},[e._v(" "+e._s(t.label)+" "),t.hasOwnProperty("image")?n("img",{staticClass:"w-1/2",attrs:{src:e.$imageURL(t.image)}}):e._e()])]}))],2)]):e._e()])})),0):e._e()},a=[],i=n("5530"),r=(n("ac1f"),n("1276"),n("4de4"),n("caad"),n("2532"),n("2f62")),l=(n("dccf"),n("2334")),c={name:"MokaMenu",props:["el"],components:{MokaPreviewSingleContainer:l["default"]},data:function(){return{opacity:"opacity-0",menuover:-1,menu_show:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["moka"])),{},{itemsCSS:function(){if(!this.el.css.responsive)return"";var e=this.el.css.responsive.split(" "),t=e.filter((function(e){return e.includes("linkcss")?e:null})),n=t.length?t[0].split(":")[1]:"";return n}}),methods:{hasNoSubmenu:function(e){return!(e.hasOwnProperty("submenu")&&(!e.hasOwnProperty("submenu")||e.submenu.length))},responsive:function(){var e=this.menu_show?"":"transform -translate-x-full";return e+=" "+this.el.css.responsive,e},showmenu:function(){this.menu_show=!this.menu_show},getPos:function(e,t){if(this.menuover===e){var n=this.$refs["submenu_"+e][0].getBoundingClientRect().x,o=this.$refs["submenu_"+e][0].getBoundingClientRect().y,s=this.$refs["submenu_"+e][0].clientWidth,a=this.$refs["submenu_"+e][0].clientHeight,i=window.innerWidth,r=window.innerHeight;n+s-i>0&&(this.$refs["submenu_"+e][0].style.left=i-s+"px"),console.log(r-a-50),o+a-r>0&&(this.$refs["submenu_"+e][0].style.transform="translateY(-110%)")}},isOver:function(e){return e<0?"opacity-0 invisible":this.menuover===e?"opacity-100 visible":"opacity-0 invisible"},overStyle:function(e){return e<0?"height:0px;width:0px;":this.menuover===e?"transition:height .5s linear;height:auto;":"transition:height .5s linear;height:0px;width:0px;"},menu_responsive:function(e){if(e.responsive&&"horizontal"===e.align)return"hidden md:flex md:flex-row";var t=e.responsive?"hidden":"",n=e.responsive?"md:":"";return"horizontal"===e.align?t+n+"flex "+n+"flex-row":t+n+"flex "+n+"flex-col"},background:function(e){return e&&e.hasOwnProperty("image")&&e.image&&e.image.url?" background-image:url("+this.$imageURL(e.image)+");":""}},mounted:function(){o=this.$animation(this.el,this.el.id,this.$refs)},beforeDestroy:function(){o&&o.timeline().kill()}},u=c,d=n("2877"),p=Object(d["a"])(u,s,a,!1,null,null,null);t["default"]=p.exports},f529:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.doc?n(e.semantic,{key:e.randomID,ref:e.doc.id,tag:"component",class:e.classe(e.doc.css),style:e.doc.style+" "+e.background(e.doc),attrs:{container:"",data:e.$attrs.data?e.$attrs.data:null,id:e.doc.hasOwnProperty("anchor")?e.doc.anchor:e.doc.id}},[e.doc.image&&(".mp4"===e.doc.image.ext||"webm"===e.doc.image.ext||e.doc.image.url.indexOf(".mp4")>-1)?n("div",{class:"fixed z-0 "+e.doc.css.css,attrs:{videobg:""}},[n("video",{staticClass:"object-cover h-full w-full",attrs:{playsinline:"",poster:e.doc.image.previewUrl,autoplay:"",loop:""}},[n("source",{attrs:{src:e.doc.image.url}})])]):e._e(),e.doc.hasOwnProperty("gallery")&&e.doc.gallery?n("block-carousel",{attrs:{block:e.doc}}):e._e(),"slides"===e.doc.type?n("block-slides",{attrs:{block:e.doc}}):e._e(),e._l(e.doc.blocks,(function(t,o){return[!t||t.hasOwnProperty("blocks")||"slides"==t.type||t.hasOwnProperty("items")?e._e():n("moka-element",{key:t.id,attrs:{data:e.$attrs.data||"",dataset:e.doc.hasOwnProperty("data")?e.doc.data:null,currency:e.$attrs.currency||null,el:t,coords:[o],develop:!1},on:{click:e.elementAction}}),!t||t.hasOwnProperty("slider")||!t.hasOwnProperty("blocks")||t.hasOwnProperty("items")||t.hasOwnProperty("image_flip")||t.hasOwnProperty("popup")||"plugin"==t.type||t.hasOwnProperty("collection")||"menu"==t.tag||"slides"==t.type?e._e():n("block-preview-container",{key:t.id,attrs:{data:e.$attrs.data||null,currency:e.$attrs.currency||null,doc:t,animation:e.$attrs.animation},on:{action:e.elementAction}}),"menu"===t.tag&&t.hasOwnProperty("blocks")?n("block-preview-menu",{key:t.id,attrs:{el:t}}):e._e(),t&&(t.hasOwnProperty("slider")||"slides"===t.type)?n("moka-slider",{key:t.id,ref:t.id,refInFor:!0,attrs:{develop:!0,embeded:!0,doc:t,editor:!0}}):e._e(),t&&t.hasOwnProperty("image_flip")?n("moka-flipbox",{key:t.id,ref:t.id,refInFor:!0,attrs:{develop:!0,embeded:!0,currency:e.$attrs.currency||null,doc:t,editor:!0}}):e._e(),t&&t.hasOwnProperty("popup")?n("moka-popup",{key:t.id,ref:t.id,refInFor:!0,attrs:{develop:!0,embeded:!0,doc:t,editor:!0}}):e._e(),t.hasOwnProperty("collection")?n("moka-loop",{key:t.id,attrs:{doc:t,level:o+1,coords:o}}):e._e()]}))],2):e._e()},s=[],a=n("5530"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("2532"),n("1160")),r=n("b76a"),l=n.n(r),c=n("8cdc"),u=n("68b8"),d=n("2426"),p=n("3238"),m=n("0916"),f=n("d205"),h=n("c542"),g=n("ce18"),y=n("2f62"),b=n("cffa"),v=n("1dac");n("52cd");b["a"].registerPlugin(v["a"]);v["a"];var k={name:"BlockPreviewContainer",components:{MokaElement:i["default"],MokaSlider:c["default"],draggable:l.a,MokaFlipbox:u["default"],MokaPopup:d["default"],MokaPluginsWrapper:p["default"],MokaLoop:m["default"],MokaMenu:f["default"],MokaMenuResponsive:h["default"],BlockCarousel:g["default"],"block-preview-menu":function(){return n.e("chunk-2d0ddc10").then(n.bind(null,"8376"))},"block-slides":function(){return n.e("chunk-711b7a81").then(n.bind(null,"b19c"))}},props:{doc:{type:Object}},data:function(){return{modal:!0,animation:null,randomID:null,timer:null,index:0,width:0}},computed:Object(a["a"])(Object(a["a"])({},Object(y["b"])(["moka"])),{},{animations:function(){return gsapEffects},semantic:function(){return this.doc.semantic?this.doc.semantic:"div"},responsive:function(){return!!(this.doc.hasOwnProperty("responsive")&&this.doc.responsive&&this.width<640)}}),methods:{classe:function(e){if(e){var t=e;return t=e.hasOwnProperty("css")?e.css+" "+e.container:e,t.includes("absolute")||t.includes("fixed")?t:t+" relative "}},stile:function(e,t){if(e&&t){var n="";return e.hasOwnProperty("fontFamily")&&(n+='font-family:"'+e.fontFamily+'"; '),e.hasOwnProperty("style")?e.style+n:n}},background:function(e){if(!e)return"";if(e.hasOwnProperty("gallery")&&!e.gallery||!e.hasOwnProperty("gallery")){var t="";return e.image&&e.image.url&&(e.image&&e.image.url&&e.image.url.indexOf(".mp4")<0&&(t=" background-image:url("+this.$imageURL(e.image)+");")),t}},nextCarousel:function(e,t){document.querySelector("#"+t.id).style.backgroundImage="url("+this.$imageURL(t.gallery.images[e])+");"},elementAction:function(e){this.$emit("action",e)},animate:function(e,t){var n=b["a"].effects[e.gsap.animation](this.$refs[t],{trigger:this.$refs[t],duration:parseFloat(e.gsap.duration),delay:parseFloat(e.gsap.delay),ease:e.gsap.ease});v["a"].create({id:t,start:"center 99%",trigger:this.$refs[t],toggleActions:"play pause restart none",animation:n,onEnter:function(){e.gsap.delay?n.play():n.play(0)}})}},mounted:function(){var e=this;if(window.scrollTo(0,0),this.width=window.innerWidth,window.addEventListener("resize",(function(){e.width=window.innerWidth})),"slides"===this.doc.type&&console.log("Slides detected"),this.doc.hasOwnProperty("gsap")&&this.doc.gsap.animation){if(this.doc.hasOwnProperty("popup")&&this.doc.popup.trigger)return;this.$animation(this.doc,this.doc.id,this.$refs)}}},_=k,w=(n("b947"),n("2877")),$=Object(w["a"])(_,o,s,!1,null,null,null);t["default"]=$.exports},f877:function(e,t,n){"use strict";n("064f")}}]);