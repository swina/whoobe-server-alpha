(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f02ae"],{"9ae5":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fixed bottom-0 left-0 pl-4 w-full theme-dark flex flex-row items-center h-10 text-gray-300 p-1 z-highest flex flex-row items-center justify-around border-t border-gray-700"},[o("div",{staticClass:"lg:w-1/4 md:w-1/3 w-1/2 flex justify-around flex-row items-center"},[o("icon",{staticClass:"text-orange-400",attrs:{name:"more_vert",title:"Options"},on:{click:function(e){t.docOptions=!t.docOptions}}}),o("icon",{staticClass:"text-gray-300 hover:text-indigo-500",attrs:{name:"border_clear",title:"Select document"},on:{click:function(e){t.$store.dispatch("setCurrent",t.doc),t.$store.dispatch("selected",t.doc.id)}}}),!t.editor.current||"document"!==t.editor.current.tag&&"grid"!==t.editor.current.type&&"flex"!==t.editor.current.type?t._e():o("icon",{staticClass:"text-gray-300 hover:text-indigo-500",attrs:{name:"add",title:"Add block"},on:{click:function(e){return t.$action("block_add_element")}}}),!t.editor.current||"document"!==t.editor.current.tag&&"grid"!==t.editor.current.type&&"flex"!==t.editor.current.type?t._e():o("icon",{staticClass:"text-gray-300 hover:text-indigo-500",attrs:{name:"widgets",title:"Add reusable block"},on:{click:function(e){t.$action("addreusable"),t.addBlock=!0}}}),o("icon",{staticClass:"text-gray-300 hover:text-indigo-500",attrs:{name:"preview",title:"Preview in a new window"},on:{click:function(e){return t.openPreview()}}}),o("icon",{staticClass:"text-gray-300 hover:text-indigo-500",attrs:{name:"laptop",title:"Preview"},on:{click:function(e){return t.previewTab("laptop")}}}),o("icon",{staticClass:"text-gray-300 hover:text-indigo-500",attrs:{name:"smartphone",title:"Preview"},on:{click:function(e){return t.previewTab("mobile")}}}),o("icon",{staticClass:"hover:text-indigo-500 cursor-pointer",attrs:{name:"save",title:"Save document"},on:{click:function(e){return t.$action("savecomponent")}}})],1),t.editor.current?o("div",{staticClass:"lg:w-2/3 w-1/2 border-l border-gray-700 pl-4 mr-10 w-full flex text-sm flex-row items-center",attrs:{title:t.editor.current.id}},[t.editor.current.icon?o("i",{staticClass:"material-icons text-sm mx-1"},[t._v(t._s(t.editor.current.icon))]):o("span",[t._v("CONTAINER "),o("i",{staticClass:"material-icons text-sm mx-1"},[t._v("select_all")])]),o("span",{staticClass:"capitalize ml-2 cursor-pointer",attrs:{title:"Edit CSS/Style"},on:{click:function(e){return t.$action("edit_css")}}},[t._v("CSS")]),t.editor.current&&!t.editor.current.css.hasOwnProperty("css")?o("input",{directives:[{name:"model",rawName:"v-model",value:t.editor.current.css,expression:"editor.current.css"}],staticClass:"bg-gray-900 ml-2 w-4/5 border-0 text-white rounded-none",attrs:{type:"text"},domProps:{value:t.editor.current.css},on:{input:function(e){e.target.composing||t.$set(t.editor.current,"css",e.target.value)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:t.editor.current.css.css,expression:"editor.current.css.css"}],staticClass:"ml-2 w-4/5 text-white border-0 rounded-none bg-gray-900",attrs:{type:"text"},domProps:{value:t.editor.current.css.css},on:{input:function(e){e.target.composing||t.$set(t.editor.current.css,"css",e.target.value)}}}),o("i",{staticClass:"material-icons moka-icons ml-2",attrs:{title:"Edit CSS classes"},on:{click:function(e){return t.$action("edit_css")}}},[t._v("edit")])]):t._e(),t.docOptions?o("div",{staticClass:"flex flex-col fixed bottom-0 left-0 ml-10 mb-10 theme-dark w-1/3 lg:w-1/4 cursor-pointer z-2xtop opacity-100",on:{mouseleave:function(e){t.docOptions=!t.docOptions}}},[o("div",{staticClass:"p-1 hover:bg-gray-900",on:{click:function(e){return t.$action("component_createpage")}}},[t._v("Create article")]),o("div",{staticClass:"p-1 hover:bg-gray-900",on:{click:function(e){t.editor.export="single",t.$action("component_export")}}},[t._v("Export")]),o("div",{staticClass:"p-1 hover:bg-gray-900",on:{click:function(e){return t.$action("component_settings")}}},[t._v("Settings")])]):t._e(),t.editor.current.coords?o("div",{staticClass:"absolute right-0 mb-20 mt-2 text-base text-gray-600 bg-white p-1"},[t._v(" "+t._s(t.editor.current.coords.width.toFixed(2))+" x "+t._s(t.editor.current.coords.height.toFixed(2))+" | x: "+t._s(t.editor.current.coords.x.toFixed(2))+" y: "+t._s(t.editor.current.coords.y.toFixed(2))+" ")]):t._e()])},r=[],n={name:"WhoobeEditorStatusBar",data:function(){return{docOptions:!1}},computed:{doc:function(){return this.$mapState().editor.component.json},component:function(){return this.$mapState().editor.component=this.$attrs.component,this.$attrs.component},editor:function(){return this.$mapState().editor}},methods:{saveComponent:function(){},openPreview:function(){this.$mapState().editor.preview=this.component,window.localStorage.setItem("whoobe-preview",JSON.stringify(this.doc)),window.localStorage.setItem("whoobe-component",JSON.stringify(this.editor.component));var t=this.$router.resolve({path:"/preview"}),e=window.open(t.href,"whoobe","width="+window.screen.availWidth);e.focus()},previewTab:function(t){this.$mapState().editor.component=this.component,"mobile"===t?(window.localStorage.setItem("whoobe-preview",JSON.stringify(this.doc)),window.localStorage.setItem("whoobe-component",JSON.stringify(this.component)),this.$mapState().editor.preview_mobile=!0):this.$mapState().editor.preview_mobile=!1,this.$action("in_editor_preview")}}},s=n,c=o("2877"),a=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=a.exports}}]);