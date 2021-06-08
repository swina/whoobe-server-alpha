(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d77a"],{f82d:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full theme-dark"},[o("div",{staticClass:"p-2 flex flex-row items-center justify-center"},[o("button",{on:{click:function(e){return t.$action("component_create")}}},[t._v("New")]),o("button",{on:{click:function(e){return t.$action("component_import")}}},[t._v("Import")]),o("button",{on:{click:function(e){t.$mapState().editor.export="category",t.$action("component_export")}}},[t._v("Export All")])]),t.objects?o("div",{staticClass:"px-2 py-4 m-auto whoobe-components-gallery flex flex-row flex-wrap justify-center "},t._l(t.objects,(function(e){return o("div",{key:e._id,staticClass:"mx-4 my-4 w-48",attrs:{title:e.name+"-"+e.description+" "+e.updatedAt}},[o("div",{staticClass:"pl-1 h-7 text-xs text-gray-400"},[t._v(" "+t._s(e.name)+" ")]),o("div",{staticClass:"w-48 h-32 flex flex-col items-center justify-center border border-gray-700",on:{click:function(o){return t.selectComponent(e.id,"component",e)}}},[e.image?o("img",{staticClass:"object-cover object-top object-left w-48 h-32",class:"image_"+e._id,attrs:{src:t.$imageURL(e.image),title:"Click to edit"}}):t._e(),e.image?t._e():o("icon",{staticClass:"text-8xl m-auto",attrs:{name:"view_quilt"}})],1),o("div",{staticClass:"text-xs text-gray-600 opacity-0 hover:opacity-100",on:{mouseleave:function(e){t.moreID=null}}},[o("div",[t.moreID===e._id?o("div",{staticClass:"menu absolute -translate-y-24 transform bg-gray-900 w-48",on:{mouseleave:function(e){t.moreID=null}}},[o("div",{staticClass:"pl-1 hover:bg-white",attrs:{title:"Restore from autosave"},on:{click:function(o){return t.restoreAutosave(e)}}},[t._v(" Restore ")]),o("div",{staticClass:"pl-1 hover:bg-white",attrs:{title:"Export"},on:{click:function(o){return t.addToLibrary(e,"library")}}},[t._v(" Add to export ")]),o("div",{staticClass:"pl-1 hover:bg-white",attrs:{title:"Duplicate"},on:{click:function(o){return t.duplicateComponent(e)}}},[t._v(" Duplicate ")]),o("div",{staticClass:"pl-1 hover:bg-white",on:{click:function(o){t.current=e,t.confirmModal=!t.confirmModal}}},[t._v(" Delete ")])]):t._e(),o("div",{staticClass:"w-full p-1 flex flex-row justify-around"},[o("i",{staticClass:"material-icons xs mr-2 hover:text-blue-500",attrs:{title:"Edit"},on:{click:function(o){return t.selectComponent(e.id,"component",e)}}},[t._v("edit")]),o("i",{staticClass:"material-icons xs ml-2 hover:text-blue-500",attrs:{title:"Preview"},on:{click:function(o){return t.openPreview(e)}}},[t._v("preview")]),o("i",{staticClass:"material-icons",on:{click:function(o){t.moreID=e._id}}},[t._v("more_vert")])])])])])})),0):t._e(),o("transition",{attrs:{name:"fade"}},[t.confirmModal?o("modal",{attrs:{fixed:!0,size:"sm",position:"modal",close:!0},on:{close:function(e){t.confirm=!1,t.confirmModal=!1,t.$action()},click_0:function(e){t.confirm=!1,t.confirmModal=!1,t.$action()},click_1:function(e){t.confirm=!0,t.confirmModal=!t.confirmModal,t.removeComponent()}}},[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("Delete object")]),o("div",{staticClass:"p-4",attrs:{slot:"content"},slot:"content"},[t._v(" Remove "),o("strong",[t._v(t._s(t.current.name))]),t._v(" ? ")])]):t._e()],1)],1)},n=[],s=(o("b0c0"),o("4de4"),{name:"BlocksGallery",props:["objects"],data:function(){return{moreID:null,currImage:null,current:null,blocks:null,confirmModal:!1,confirm:!1}},methods:{duplicateComponent:function(t){var e=this,o=JSON.parse(JSON.stringify(t));o.name=o.name+" COPY",delete o._id,this.$api.service("components").create(o).then((function(t){e.$emit("duplicated")}))},selectComponent:function(t,e,o){this.$mapState().desktop.tabs.push({component:"blocks/editor/block.editor",name:o.name,filter:"",mode:"block",icon:"edit",blocks:o}),this.$mapState().editor.current=o.json,this.$mapState().editor.component=o,this.$mapState().desktop.currentTab=this.$mapState().desktop.tabs.length-1,window.localStorage.setItem("whoobe-desktop",JSON.stringify(this.$mapState().desktop.tabs))},openPreview:function(t){this.$mapState().editor.preview=t,window.localStorage.setItem("whoobe-preview",JSON.stringify(t.json)),window.localStorage.setItem("whoobe-component",JSON.stringify(t));var e=this.$router.resolve({path:"/preview"}),o=window.open(e.href,"whoobe","width="+window.screen.availWidth);o.focus()},restoreAutosave:function(t){},saveToLibrary:function(t){},removeComponent:function(){var t=this;this.$loading(!0),this.$api.service("components").remove(this.current._id).then((function(e){console.log("removed => ",e),t.$loading(!1)}))}},mounted:function(){this.blocks=this.objects.filter((function(t){return t.hasOwnProperty("name")}))}}),r=s,a=o("2877"),c=Object(a["a"])(r,i,n,!1,null,null,null);e["default"]=c.exports}}]);