(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1a16"],{2156:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.desktop.tabs.length?n("div",{staticClass:"pt-8 w-full relative from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br min-h-screen theme-dark",class:t.$attrs.boxed?"pl-10":"",style:t.topPadding,attrs:{"desktop-container":""}},[t.component&&"in_editor_preview"!=t.editor.action?n(t.component,{key:t.desktop.tabs[t.currentTab].name,tag:"component",attrs:{develop:!0,filter:t.desktop.tabs[t.currentTab].filter,component:t.component,blocks:t.desktop.tabs[t.currentTab].blocks}}):t._e(),"in_editor_preview"!==t.editor.action||t.editor.preview_mobile?t._e():n("block-preview",{attrs:{develop:!0,doc:t.editor.component.json}}),"in_editor_preview"===t.editor.action&&t.editor.preview_mobile?n("iframe",{staticClass:"mt-10 border-8 border-gray-900 z-highest shadow-xl rounded-2xl h-screen m-auto",staticStyle:{width:"360px","border-width":"22px",height:"640px"},attrs:{src:"preview"}}):t._e(),"in_editor_preview"===t.editor.action?n("icon",{staticClass:"hover:bg-gray-300 hover:text-black mt-8 text-5xl text-gray-400 z-highest fixed top-0 right-0",attrs:{name:"close"},on:{click:function(e){return t.$action()}}}):t._e()],1):t._e()},r=[],i=n("5530"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("2f62")),s={name:"DesktopContainer",data:function(){return{topPadding:"",topMargin:""}},components:{"block-preview":function(){return Promise.all([n.e("chunk-5507f83c"),n.e("chunk-722d0488")]).then(n.bind(null,"a44b"))}},computed:Object(i["a"])(Object(i["a"])({},Object(a["b"])(["desktop","editor"])),{},{currentTab:function(){return this.desktop.currentTab>=this.desktop.tabs.length&&this.$store.dispatch("currentTab",0),this.desktop.currentTab},component:function(){if(this.topPadding="padding-top:"+document.querySelector(".desktop-tabs-container").getBoundingClientRect().height+"px;",this.topMargin="margin-top:"+document.querySelector(".desktop-tabs-container").getBoundingClientRect().height+"px;",1===this.desktop.tabs.length){this.desktop.currentTab=0;var t=this.desktop.tabs[0].component;return function(){return n("ce68")("./"+t)}}this.desktop.currentTab>this.desktop.tabs.length-1&&(this.desktop.currentTab=this.desktop.tabs.length-1);var e=this.desktop.tabs[this.desktop.currentTab].component;return function(){return n("ce68")("./"+e)}}})},c=s,d=n("2877"),p=Object(d["a"])(c,o,r,!1,null,null,null);e["default"]=p.exports}}]);