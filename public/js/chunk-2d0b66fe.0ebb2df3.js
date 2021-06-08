(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b66fe"],{"1cc9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.categories?a("div",{staticClass:"m-2 bg-gray-100 text-black"},[a("h4",[e._v("Categories")]),a("div",{staticClass:"flex flex-row flex-wrap p-2 bg-gray-200 text-black border",attrs:{title:"click to add a new category"}},[e._l(e.categories,(function(t,s){return[a("div",{staticClass:"flex flex-row items-center mr-2 bg-purple-500 text-white rounded my-2 text-lg px-2 py-1",attrs:{title:"click to manage facets"}},[e._v(e._s(t.name)+" "),a("icon",{staticClass:"ml-2",attrs:{name:"edit"},on:{click:function(a){e.index=s,e.selected=t,e.getFacets(t._id)}}}),e._v(" "),a("icon",{staticClass:"ml-2",attrs:{name:"close"}})],1)]})),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCategory,expression:"newCategory"}],staticClass:"new_category text-lg bg-gray-200",attrs:{type:"text",placeholder:""},domProps:{value:e.newCategory},on:{keydown:function(t){return e.addCategory(t)},input:function(t){t.target.composing||(e.newCategory=t.target.value)}}})],2),e.selected?a("div",{staticClass:"p-8 text-lg"},[a("label",[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.categories[e.index].name,expression:"categories[index].name"}],attrs:{type:"text"},domProps:{value:e.categories[e.index].name},on:{input:function(t){t.target.composing||e.$set(e.categories[e.index],"name",t.target.value)}}}),a("label",[e._v("Slug")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.categories[e.index].slug,expression:"categories[index].slug"}],attrs:{type:"text"},domProps:{value:e.categories[e.index].slug},on:{input:function(t){t.target.composing||e.$set(e.categories[e.index],"slug",t.target.value)}}}),a("toggle",{attrs:{status:e.categories[e.index].active},on:{click:e.setStatus},model:{value:e.categories[e.index].active,callback:function(t){e.$set(e.categories[e.index],"active",t)},expression:"categories[index].active"}}),a("button",{staticClass:"lg success"},[e._v("Save")])],1):e._e(),e.selected?a("div",{staticClass:"bg-purple-500 text-white text-lg p-2"},[e._v(e._s(e.selected.name)+" Facets")]):e._e(),e.facets?a("div",{staticClass:"flex flex-row flex-wrap p-2 bg-gray-200 text-black border",attrs:{title:"click to add a new facet"}},[e._l(e.facets,(function(t){return[a("div",{staticClass:"flex flex-row items-center mr-2 bg-teal-500 text-white rounded my-2 text-lg px-2 py-1",attrs:{title:"click to manage facets"}},[e._v(e._s(t.name)+" "),a("icon",{staticClass:"ml-2",attrs:{name:"close"}})],1)]})),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newFacet,expression:"newFacet"}],staticClass:"new_facet text-lg bg-gray-200",attrs:{type:"text",title:"Enter to save",placeholder:"click to add"},domProps:{value:e.newFacet},on:{keydown:function(t){return e.addFacet(t)},input:function(t){t.target.composing||(e.newFacet=t.target.value)}}})],2):e._e(),a("div",{staticClass:"p-4 m-10 mt-24 m-auto bg-gray-100 text-black text-center text-2xl"},[e._v(" Removal of categories/facets can affect the product search and display. Before to remove checkout your products settings. ")])]):e._e()},i=[],n=a("2909"),c=a("5530"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("4de4"),a("b64b"),a("ac1f"),a("1276"),a("a15b"),a("d81d"),a("6062"),a("7db0"),a("2f62")),r={name:"WhoobeCategories",components:{toggle:function(){return a.e("chunk-2d0bff5d").then(a.bind(null,"406a"))}},data:function(){return{index:null,categories:null,facets:null,newCategory:"",newFacet:"",selected:null}},computed:Object(c["a"])({},Object(o["b"])(["datastore"])),methods:{setCategory:function(){var e=this,t=Object.keys(this.selected).filter((function(t){return e.selected[t]}));console.log(t),t=t.map((function(e){return e.split("|")})).join(",").split(",");var a=Object(n["a"])(new Set(t));console.log(a)},setStatus:function(e){this.categories[this.index].active=e},getFacets:function(e){var t=this;this.$api.service("categories").find({query:{collection:e}}).then((function(e){t.facets=e.data}))},slugit:function(e,t){t.slug=this.$slugify(e)},save:function(e){var t=this;this.$api.service("categories").patch(e.id,e).then((function(e){t.$store.dispatch("message","Category saved"),t.$find("setup")}))},add:function(e){var t=this;this.$api.service("categories").create(e).then((function(e){t.$store.dispatch("message","Category added"),t.category={name:"",slug:""},t.datastore.dataset.setup[0].categories.articles.push(e.data)}))}},mounted:function(){var e=this;this.$api.service("categories").find({query:{$limit:50,type:"article"}}).then((function(t){e.categories=t.data}))}},l=r,d=a("2877"),u=Object(d["a"])(l,s,i,!1,null,null,null);t["default"]=u.exports}}]);