(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da328"],{"6b28":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.doc?e("div",{class:"absolute transform border top-0 left-0 bottom-0 right-0 z-"+t.$attrs.zindex+" "+t.active(t.doc.id,t.doc),attrs:{id:t.doc.id},on:{click:function(o){t.setCurrent(t.doc,o),t.$action()},contextmenu:function(o){return t.setCurrent(t.doc)}}},[t.doc&&t.doc.hasOwnProperty("loop")&&t.doc.loop?e("span",{staticClass:"text-xs"},[e("i",{staticClass:"material-icons"},[t._v("article")]),t.doc.hasOwnProperty("collection")?e("span",[t._v(t._s(t.doc.collection)+" Loop")]):e("span",[t._v("Article Loop")])]):t._e(),t.doc&&t.doc.hasOwnProperty("blocks_flip")?e("span",{staticClass:"text-xs"},[e("i",{staticClass:"material-icons"},[t._v("flip_camera_android")]),t._v(" Flipbox")]):t._e(),e("div",{staticClass:"h-2 w-2 absolute top-0 right-0 bg-lime-500 rounded-full -m-1",attrs:{title:"click to move up"},on:{click:function(o){return t.moveUp(1)}}}),e("div",{staticClass:"h-3 w-3 absolute top-0 left-0 bg-blue-500 rounded-full -m-2",attrs:{title:"Dblclick to add an element"},on:{dblclick:function(o){return t.$action("block_add_element")}}}),e("div",{staticClass:"h-2 w-2 absolute bottom-0 right-0 bg-lime-500 rounded-full -m-1",attrs:{title:"click to move down"},on:{click:function(o){return t.moveUp(-1)}}}),e("div",{staticClass:"h-2 w-2 absolute bottom-0 left-0 bg-black rounded-full -m-1"}),t.doc&&t.doc.hasOwnProperty("slider")?e("span",{staticClass:"px-4 py-1 rounded-xl text-sm bg-yellow-500"},[t._v("SLIDER")]):t._e()]):t._e()},r=[],s=e("5530"),c=(e("159b"),e("a434"),e("2f62")),d=e("52cd"),n=e.n(d),l={name:"BlockContainerSelector",props:["doc"],data:function(){return{coords:null}},computed:Object(s["a"])({},Object(c["b"])(["editor"])),methods:{tooltip:function(){},active:function(t,o){if(o){if(this.editor&&this.editor.selected&&this.editor.selected===this.doc.id)if(document.querySelector("#"+this.doc.id)){var e=document.querySelector("#"+this.doc.id).getBoundingClientRect();console.log(this.$attrs.root),this.coords={x:e.x-57+window.pageXOffset-parseInt(8*this.$attrs.root),y:e.y-66+window.pageYOffset-parseInt(8*this.$attrs.root),width:e.width,height:e.height},this.editor.current.coords=this.coords}else this.editor.current.coords=null;var i="border-blue-500 ";return o&&!o.hasOwnProperty("type")&&(i="border-red-500 "),o&&o.hasOwnProperty("slider")&&(i="border-yellow-500 "),o&&o.hasOwnProperty("popup")&&(i="border-teal-200 "),o&&o.hasOwnProperty("plugin")&&(i="border-orange-600 "),o&&"menu"===o.type&&(i="border-pink-500 "),"flex"===o.type&&(i=o.hasOwnProperty("popup")?"border-teal-200 border-2 ":"border-red-500 border-2 bg-gray-300 bg-opacity-0 "),this.editor&&this.editor.selected?this.editor.selected===this.doc.id?i+"opacity-100 ":i+"opacity-0 hover:opacity-100":i+"opacity-0 hover:opacity-100 "}},setCurrent:function(t,o){this.$store.dispatch("selected",this.doc.id),this.$store.dispatch("setCurrent",this.doc)},moveUp:function(t){var o,e=this,i=this.editor.component.json,r=n.a.parent(i,'$..blocks[?(@.id=="'+this.doc.id+'")]');if(1!==r.length&&(r.forEach((function(t,i){t.id===e.doc.id&&(o=i)})),o>0)){Object.assign({},this.doc);r.splice(o,1),r.splice(o-t,0,this.doc)}}}},a=l,p=e("2877"),u=Object(p["a"])(a,i,r,!1,null,null,null);o["default"]=u.exports}}]);