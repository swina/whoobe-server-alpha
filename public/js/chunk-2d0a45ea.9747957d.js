(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a45ea"],{"05c2":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.menu?s("div",{staticClass:"w-full z-max bg-gray-400 text-black overflow-y-auto h-4/5 mb-2 shadow"},[s("button",{staticClass:"w-24",class:"css"===e.tab?"bg-blue-400":"",on:{click:function(t){e.tab="css"}}},[e._v("Customize")]),s("button",{staticClass:"w-24",class:"responsive"===e.tab?"bg-blue-400":"",on:{click:function(t){e.tab="responsive"}}},[e._v("Responsive")]),"items"===e.tab?s("div",{staticClass:"p-6 flex flex-row border"},[s("div",{staticClass:"w-1/4 border rounded px-2"},[s("div",{staticClass:"flex flex-col items-center cursor-pointer p-1 my-1"},[s("div",{staticClass:"flex flex-row items-center"},[s("span",{staticClass:"font-bold",on:{click:function(t){e.showItems=!e.showItems}}},[e._v("Menu Items")]),s("button",{staticClass:"xs ml-2",on:{click:e.addItem}},[e._v("Add")]),s("i",{staticClass:"material-icons nuxpresso-icon-circle text-xs ml-2 mr-4",on:{click:e.addItem}},[e._v("add")])])]),s("transition",{attrs:{name:"slideleft"}},[s("div",{staticClass:"relative text-gray-800 overflow-y-auto h-full w-full p-1"},[s("draggable",{staticClass:"relative",model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},e._l(e.items,(function(t,n){return e.showItems?s("div",{staticClass:"flex flex-col text-sm cursor-pointer pb-1"},[e.currentIndex<0||e.currentIndex===n?s("div",{staticClass:"bg-gray-600 text-white p-1 flex flex-col",on:{click:function(t){e.subIndex=-1,e.currentIndex<0||e.currentIndex!=n?e.currentIndex=n:e.currentIndex=-1,e.currentFocus=n}}},[e._v(e._s(t.label))]):e._e(),s("transition",[e.currentIndex===n?s("div",{staticClass:"relative bg-gray-200 p-1 flex flex-col mb-1"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.items[n].label,expression:"items[i].label"}],attrs:{type:"text"},domProps:{value:e.items[n].label},on:{focus:function(t){e.currentFocus=n},input:function(t){t.target.composing||e.$set(e.items[n],"label",t.target.value)}}}),s("a",{staticClass:"mx-1",attrs:{href:"#"},on:{click:function(t){e.setIcon=!e.setIcon,e.currentFocus=n}}},[e._v("Icon")]),e.items[n].hasOwnProperty("icon")&&e.items[n].icon?s("i",{class:"text-lg bi-"+e.items[n].icon,on:{click:function(t){e.setIcon=!e.setIcon,e.currentFocus=n}}}):e._e()]),e.currentFocus===n&&e.setIcon?s("div",{staticClass:"bg-white shadow fixed z-2xtop w-64 h-64 mb-2 border p-1",staticStyle:{"margin-left":"20vw"}},[s("moka-edit-icon",{attrs:{tag:"icon_bt"},on:{input:function(t){e.setIcon=!e.setIcon},close:function(t){e.setIcon=!e.setIcon}},model:{value:e.items[n].icon,callback:function(t){e.$set(e.items[n],"icon",t)},expression:"items[i].icon"}})],1):e._e(),e.currentFocus===n?s("div",{staticClass:"flex flex-col"},[s("label",[e._v("URL")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.items[n].link,expression:"items[i].link"}],attrs:{type:"text"},domProps:{value:e.items[n].link},on:{focus:function(t){e.currentFocus=n},input:function(t){t.target.composing||e.$set(e.items[n],"link",t.target.value)}}}),s("label",[e._v("Page")]),s("div",{staticClass:"flex flex-row items-center"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.items[n].link,expression:"items[i].link"}],staticClass:"w-full",on:{focus:function(t){e.currentFocus=n},change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.items[n],"link",t.target.multiple?s:s[0])}}},e._l(e.$datastore("articles"),(function(t,n){return s("option",{domProps:{value:"/"+t.slug}},[e._v(e._s(t.title))])})),0),s("i",{staticClass:"material-icons",on:{click:function(t){return e.refresh()}}},[e._v("refresh")])])]):e._e(),s("a",{staticClass:"text-xs",attrs:{href:"#"},on:{click:function(t){return e.items.splice(n,1)}}},[e._v("Remove")]),s("a",{staticClass:"text-xs",attrs:{href:"#"},on:{click:function(t){return e.addSubMenu(n)}}},[e._v("Add Submenu")])]):e._e()])],1):e._e()})),0),s("div",{staticClass:"-mt-4 pl-2 flex flex-col w-full"},[e.currentIndex>-1&&e.items[e.currentIndex].hasOwnProperty("submenu")&&e.items[e.currentIndex].submenu.length?s("div",{},[s("draggable",{model:{value:e.items[e.currentIndex].submenu,callback:function(t){e.$set(e.items[e.currentIndex],"submenu",t)},expression:"items[currentIndex].submenu"}},e._l(e.items[e.currentIndex].submenu,(function(t,n){return s("div",[s("div",{staticClass:" border p-1 bg-gray-500 text-white mb-1 text-sm cursor-pointer",on:{click:function(t){e.subIndex<0||e.subIndex!=n?e.subIndex=n:e.subIndex=-1}}},[e._v(" "+e._s(t.label)+" ")]),s("transition",{attrs:{name:"fade"}},[e.subIndex===n?s("div",{staticClass:"mr-1 flex flex-col mb-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.items[e.currentIndex].submenu[n].label,expression:"items[currentIndex].submenu[s].label"}],attrs:{type:"text"},domProps:{value:e.items[e.currentIndex].submenu[n].label},on:{input:[function(t){t.target.composing||e.$set(e.items[e.currentIndex].submenu[n],"label",t.target.value)},function(t){e.subIndex=-1,e.subIndex=n}]}}),s("div",{staticClass:"flex flex-col text-sm"},[s("label",[e._v("URL")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.items[e.currentIndex].submenu[n].link,expression:"items[currentIndex].submenu[s].link"}],attrs:{type:"text"},domProps:{value:e.items[e.currentIndex].submenu[n].link},on:{input:function(t){t.target.composing||e.$set(e.items[e.currentIndex].submenu[n],"link",t.target.value)}}}),s("label",[e._v("Page")]),s("div",{staticClass:"flex flex-row items-center"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.items[e.currentIndex].submenu[n].link,expression:"items[currentIndex].submenu[s].link"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.items[e.currentIndex].submenu[n],"link",t.target.multiple?s:s[0])}}},e._l(e.$datastore("articles"),(function(t,n){return s("option",{domProps:{value:"/"+t.slug}},[e._v(e._s(t.title))])})),0),s("i",{staticClass:"material-icons",on:{click:function(t){return e.refresh()}}},[e._v("refresh")])]),s("div",{staticClass:"flex p-1 border rounded"},[s("button",{on:{click:function(t){e.blocks=!e.blocks,e.subIndex=n}}},[e._v("Add Block")]),s("button",{staticClass:"mx-2",on:{click:function(t){return e.pasteFromClipboard()}}},[e._v("Paste")]),e.items[e.currentIndex].submenu[n].blocks?s("button",{on:{click:function(t){e.items[e.currentIndex].submenu[n].blocks=null}}},[e._v("Remove Block")]):e._e()]),s("label",[e._v("Image")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.items[e.currentIndex].submenu[n].image,expression:"items[currentIndex].submenu[s].image"}],attrs:{type:"text"},domProps:{value:e.items[e.currentIndex].submenu[n].image},on:{input:function(t){t.target.composing||e.$set(e.items[e.currentIndex].submenu[n],"image",t.target.value)}}}),s("div",{staticClass:"relative w-24"},[e.items[e.currentIndex].submenu[n].hasOwnProperty("image")?s("img",{staticClass:"w-24",attrs:{src:e.$imageURL(e.items[e.currentIndex].submenu[n].image)}}):e._e(),s("i",{staticClass:"material-icons absolute top-0 right-0 bg-white p-1"},[e._v("delete")])])]),s("a",{staticClass:"text-xs",attrs:{href:"#"},on:{click:function(t){e.items[e.currentIndex].submenu.splice(n,1),e.subIndex=-1,e.subIndex=n}}},[e._v("Remove Item")])]):e._e()])],1)})),0)],1):e._e()])],1)])],1),e.currentIndex>-1&&e.subIndex>-1&&e.items[e.currentIndex].submenu[e.subIndex].blocks?s("div",{staticClass:"flex w-full relative p-1 border",staticStyle:{resize:"both",overflow:"auto"}},[s("div",[s("block-container",{attrs:{doc:e.items[e.currentIndex].submenu[e.subIndex].blocks,editor:!1}}),s("i",{staticClass:"absolute top-0 right-0 z-2xtop cursor-pointer material-icons p-1 bg-gray-100 rounded-full",on:{click:function(t){return e.copyToClipboard(e.items[e.currentIndex].submenu[e.subIndex].blocks)}}},[e._v("file_copy")])],1)]):e._e()]):e._e(),"css"===e.tab?s("div",{staticClass:"p-4 bg-gray-400"},[s("div",{staticClass:"flex flex-col w-1/3 text-sm"},[e._v(" Justify "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.menu.css.align,expression:"menu.css.align"}],staticClass:"w-full",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.menu.css,"align",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}}),s("option",{attrs:{value:"justify-around"}},[e._v("around")]),s("option",{attrs:{value:"justify-between"}},[e._v("between")]),s("option",{attrs:{value:"justify-start"}},[e._v("start")]),s("option",{attrs:{value:"justify-end"}},[e._v("end")]),s("option",{attrs:{value:"justify-center"}},[e._v("center")])]),s("div",{staticClass:"flex flex-col mt-2"},[e._v(" Orientation "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.menu.type,expression:"menu.type"}],staticClass:"w-full",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.menu,"type",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"horizontal"}},[e._v("Horizontal")]),s("option",{attrs:{value:"vertical"}},[e._v("Vertical")])])]),s("div",{staticClass:"flex flex-col mt-2"},[e._v(" Menu CSS "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.menu.css.css,expression:"menu.css.css"}],staticClass:"w-full",domProps:{value:e.menu.css.css},on:{focus:function(t){e.currentCSSKey="css",e.customize=!0},input:function(t){t.target.composing||e.$set(e.menu.css,"css",t.target.value)}}})]),e._v(" "+e._s(e.menu.css.container)+" "),s("div",{staticClass:"flex flex-col mt-2"},[e._v(" Item CSS "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.menu.css.items,expression:"menu.css.items"}],staticClass:"w-full",domProps:{value:e.menu.css.items},on:{focus:function(t){e.currentCSSKey="items",e.customize=!0},input:function(t){t.target.composing||e.$set(e.menu.css,"items",t.target.value)}}})]),s("div",{staticClass:"text-sm"},[e._v(" Submenu CSS "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.menu.css.submenu,expression:"menu.css.submenu"}],staticClass:" w-full",domProps:{value:e.menu.css.submenu},on:{focus:function(t){e.currentCSSKey="submenu",e.customize=!0},input:function(t){t.target.composing||e.$set(e.menu.css,"submenu",t.target.value)}}})]),s("div",{staticClass:"text-sm"},[e._v(" Submenu Items CSS "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.menu.css.submenu_items,expression:"menu.css.submenu_items"}],staticClass:" w-full",domProps:{value:e.menu.css.submenu_items},on:{focus:function(t){e.currentCSSKey="submenu_items",e.customize=!0},input:function(t){t.target.composing||e.$set(e.menu.css,"submenu_items",t.target.value)}}})]),s("div",{staticClass:"text-sm flex flex-col"},[s("label",[e._v(" Show submenu on mouseover ")]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.menu.css.submenu_behavior,expression:"menu.css.submenu_behavior"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.menu.css.submenu_behavior)?e._i(e.menu.css.submenu_behavior,null)>-1:e.menu.css.submenu_behavior},on:{change:function(t){var s=e.menu.css.submenu_behavior,n=t.target,i=!!n.checked;if(Array.isArray(s)){var u=null,o=e._i(s,u);n.checked?o<0&&e.$set(e.menu.css,"submenu_behavior",s.concat([u])):o>-1&&e.$set(e.menu.css,"submenu_behavior",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.menu.css,"submenu_behavior",i)}}}),e._v(" Mouseover ")])])])]):e._e(),"responsive"===e.tab?s("div",{staticClass:"p-4"},[s("div",{staticClass:"flex flex-col border rounded p-4"},[s("div",{staticClass:"flex flex-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.menu.responsive,expression:"menu.responsive"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.menu.responsive)?e._i(e.menu.responsive,null)>-1:e.menu.responsive},on:{change:function(t){var s=e.menu.responsive,n=t.target,i=!!n.checked;if(Array.isArray(s)){var u=null,o=e._i(s,u);n.checked?o<0&&e.$set(e.menu,"responsive",s.concat([u])):o>-1&&e.$set(e.menu,"responsive",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(e.menu,"responsive",i)}}}),e._v(" Responsive "),s("span",{staticClass:"text-xs ml-2"},[e._v("(Max 1 responsive menu x page)")])]),e.menu.responsive?s("div",{staticClass:"text-sm flex flex-col"},[e._v(" CSS Responsive "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.menu.css.responsive,expression:"menu.css.responsive"}],staticClass:"w-64",domProps:{value:e.menu.css.responsive},on:{focus:function(t){e.currentCSSKey="responsive",e.customize=!0},input:function(t){t.target.composing||e.$set(e.menu.css,"responsive",t.target.value)}}}),e._v(" Items CSS "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.menu.css.responsive_items,expression:"menu.css.responsive_items"}],staticClass:"w-64",domProps:{value:e.menu.css.responsive_items},on:{focus:function(t){e.currentCSSKey="responsive_items",e.customize=!0},input:function(t){t.target.composing||e.$set(e.menu.css,"responsive_items",t.target.value)}}})]):e._e()])]):e._e(),s("transition",{attrs:{name:"slidedown"}},[e.blocks?s("modal",{attrs:{size:"md",position:"modal-top-right"},on:{close:function(t){e.blocks=!e.blocks}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("Blocks Gallery")]),s("div",{attrs:{slot:"content"},slot:"content"})]):e._e()],1),s("transition",{attrs:{name:"slideright"}},[e.customize?s("modal",{attrs:{size:"sm",buttons:"none",position:"modal-top-right"},on:{close:function(t){e.customize=!e.customize}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("Customize Menu "+e._s(e.currentCSSKey))]),s("block-tailwind",{attrs:{slot:"content",mode:"menu",cssKey:e.currentCSSKey,css:e.menu.css[e.currentCSSKey]},on:{css:e.setCSS},slot:"content"})],1):e._e()],1)],1):e._e()},i=[],u=(s("d3b7"),s("3ca3"),s("ddb0"),s("7db0"),s("b76a")),o=s.n(u),a={name:"WhoobeMenuEditor",components:{draggable:o.a,"block-customize-icon":function(){return Promise.all([s.e("chunk-944fc728"),s.e("chunk-2d22bef3")]).then(s.bind(null,"f0a4"))},"block-tailwind":function(){return s.e("chunk-3e6406bb").then(s.bind(null,"ee55"))},"block-container":function(){return Promise.resolve().then(s.bind(null,"a68f"))}},data:function(){return{tab:"items",menu:null,currentIndex:-1,currentFocus:-1,subIndex:-1,showItems:!0,setIcon:!1,items:null,menuAlign:"",blocks:!1,customize:!1,currentCSSKey:"",currentCSS:""}},mounted:function(){this.menu=this.$mapState().editor.current,this.items=this.menu.items,!this.menu.css.submenu&&(this.menu.css.submenu=this.menu.css.css+" w-64 p-4 shadow-xl"),this.menu.responsive&&(!this.menu.css.responsive&&(this.menu.css.responsive="fixed top-0 left-0 h-screen p-2 z-2xtop"))},watch:{items:function(e){this.items.hasOwnProperty("submenu")&&(!this.items.submenu.length&&delete this.items.submenu),this.menu.items=this.items}},methods:{addItem:function(){this.items.push({label:"new item",link:"#",title:"",id:this.$randomID()})},addSubMenu:function(e){!this.items[e].submenu&&(this.items[e].submenu=[]),this.items[e].submenu&&this.items[e].submenu.length&&this.items[e].submenu[0].blocks?this.$message("This submenu has a block component. You can't add any more items"):(this.items[e].submenu.push({label:"submenu item #"+parseInt(this.items[e].submenu.length+1),link:"#",id:this.$randomID()}),this.currentIndex=-1,this.currentIndex=e)},addBlock:function(e){console.log(e);var t=JSON.parse(JSON.stringify(e));t.id=this.$randomID(),t=this.$clone(t),this.blocks=!1,this.menu.items[this.currentIndex].submenu[this.subIndex].blocks=t},setCSS:function(e){console.log("menu css ",this.currentCSSKey," => ",this.menu.css[this.currentCSSKey]),this.currentCss=e},refresh:function(){var e=this;this.$api.service("articles").find({query:{$select:["_id","title","slug"]}}).then((function(t){e.$store.dispatch("dataset",{table:"articles",data:t.data})}))},pasteFromClipboard:function(){var e=JSON.parse(window.localStorage.getItem("nuxpresso-clipboard"));e.id=this.$randomID(),e=this.$clone(e),console.log(e),this.menu.items[this.currentIndex].submenu[this.subIndex].blocks=e},copyToClipboard:function(e){window.localStorage.setItem("nuxpresso-clipboard",JSON.stringify(e)),console.log("copied"),this.$message("Blocks copied")}}},r=a,c=s("2877"),l=Object(c["a"])(r,n,i,!1,null,null,null);t["default"]=l.exports}}]);