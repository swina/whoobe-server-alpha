(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ebc6"],{b145:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full flex flex-col"},[n("div",{staticClass:"flex flex-row"},[n("button",{class:e.tab("main"),on:{click:function(t){e.mode="main"}}},[e._v("Main")]),e.submenu?n("button",{class:e.tab("submenu"),on:{click:function(t){e.mode="submenu"}}},[e._v("Submenu/Dropdown")]):e._e(),e.editor.current.responsive?n("button",{class:e.tab("responsive"),on:{click:function(t){e.mode="responsive"}}},[e._v("Responsive")]):e._e()]),n("div",{staticClass:"flex flex-col p-4"},[e._l(e.keys[e.mode],(function(t){return[n("div",{staticClass:"flex-row-center"},[e._v(" "+e._s(t.label)+" "),n("icon",{staticClass:"ml-2",attrs:{name:"edit"},on:{click:function(n){e.currentCSSKey=t.key,e.customize=!0}}})],1),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editor.current.css[t.key],expression:"editor.current.css[classe.key]"}],staticClass:"h-32 w-full text-black",domProps:{value:e.editor.current.css[t.key]},on:{focus:function(n){e.cssCurrentKey=t.key},input:function(n){n.target.composing||e.$set(e.editor.current.css,t.key,n.target.value)}}})]})),e._v(" Responsive "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.editor.current.responsive,expression:"editor.current.responsive"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.editor.current.responsive)?e._i(e.editor.current.responsive,null)>-1:e.editor.current.responsive},on:{change:function(t){var n=e.editor.current.responsive,s=t.target,o=!!s.checked;if(Array.isArray(n)){var c=null,i=e._i(n,c);s.checked?i<0&&e.$set(e.editor.current,"responsive",n.concat([c])):i>-1&&e.$set(e.editor.current,"responsive",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(e.editor.current,"responsive",o)}}}),e.editor.current.responsive&&"responsive"===e.mode?n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex-row-center mb-2"},[n("icon",{staticClass:"p-1 rounded-full  border border-dashed mr-2",attrs:{name:e.editor.current.icons.burger,title:"Click to change"},on:{click:function(t){e.icon=!e.icon,e.iconType="burger"}}}),e._v(" Burger Icon ")],1),n("div",{staticClass:"flex-row-cener"},[n("icon",{staticClass:"p-1 rounded-full  border border-dashed mr-2",attrs:{name:e.editor.current.icons.back,title:"Click to change"},on:{click:function(t){e.icon=!e.icon,e.iconType="back"}}}),e._v(" Close Icon ")],1)]):e._e(),"submenu"===e.mode?n("div",{staticClass:"mt-2"},[n("icon",{staticClass:"p-1 rounded-full  border border-dashed mr-2",attrs:{name:e.editor.current.icons.submenu,title:"Click to change"},on:{click:function(t){e.icon=!e.icon,e.iconType="submenu"}}}),e._v(" Submenu/Dropdown Icon ")],1):e._e()],2),n("transition",{attrs:{name:"fade"}},[e.icon?n("modal",{attrs:{size:"sm",position:"modal-top-right",buttons:"none"},on:{close:function(t){e.icon=!e.icon}}},[n("div",{attrs:{slot:"title"},slot:"title"},[e._v("Icon")]),n("block-icons",{attrs:{slot:"content",type:"material"},on:{icon:e.setIcon},slot:"content"})],1):e._e()],1),n("transition",{attrs:{name:"slideright"}},[e.customize?n("modal",{attrs:{size:"sm",buttons:"none",position:"modal-top-right"},on:{close:function(t){e.customize=!e.customize}}},[n("div",{attrs:{slot:"title"},slot:"title"},[e._v("Customize Menu "+e._s(e.currentCSSKey))]),n("block-tailwind",{attrs:{slot:"content",mode:"menu",cssKey:e.currentCSSKey,css:e.css},on:{css:e.setCSS},slot:"content"})],1):e._e()],1)],1)},o=[],c=n("5530"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("2f62")),r={name:"BlockMenuStyle",components:{"block-icons":function(){return Promise.all([n.e("chunk-944fc728"),n.e("chunk-2d2384fe")]).then(n.bind(null,"ff9a"))},"block-tailwind":function(){return n.e("chunk-3e6406bb").then(n.bind(null,"ee55"))}},data:function(){return{mode:"main",customize:!1,icon:!1,iconType:"burger",currentCSSKey:"css",css:"",keys:{main:[{label:"Menu CSS",key:"css"},{label:"Menu Items CSS",key:"items"}],submenu:[{label:"Submenu/Dropdown CSS",key:"submenu"},{label:"Submenu/Dropdown Items CSS",key:"submenu_items"}],responsive:[{label:"Responsive CSS",key:"responsive"},{label:"Responsive Items CSS",key:"responsive_items"}]}}},computed:Object(c["a"])(Object(c["a"])({},Object(i["b"])(["editor"])),{},{submenu:function(){return this.editor.current.blocks.length}}),watch:{currentCSSKey:function(e){this.css=this.editor.current.css[e]}},methods:{tab:function(e){return this.mode===e?"bg-purple-800":"bg-gray-900"},setIcon:function(e){this.editor.current.icons[this.iconType]=e,this.icon=!1},setCSS:function(e){console.log(e,this.currentCSSKey)}},mounted:function(){this.css=this.editor.current.css.css}},u=r,l=n("2877"),a=Object(l["a"])(u,s,o,!1,null,null,null);t["default"]=a.exports}}]);