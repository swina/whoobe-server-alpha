(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nuxpresso_42","nuxpresso_50","chunk-2d0e17a0"],{"30fa":function(e,t,n){"use strict";n.r(t);var o={products:"            items {                id                 name                 description                 facetValues {                     code                     name                 }                 variants {                     name                     price                    currencyCode                }                assets {                     name                     source                 }             }",collections:"query Collections { collections ( options:{ sort :{ id : ASC } }) { items { name parent { name } children { name id productVariants { items { id name assets { name source } price } } } }}}",collection:"query Collections { collections(options :{ filter :{ name : { contains : __filter__ }}}) {items {name productVariants { totalItems items { product { id name assets { name source } description id variants { name price currencyCode } facetValues { name code } }}}}}}"};t["default"]=o},"7b32":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.collections?n("div",{staticClass:"flex flex-row cursor-pointer z-highest my-4 mb-8"},[e._l(e.collections,(function(t){return["home"!=t.name.toLowerCase()&&"__root_collection__"===t.parent.name?n("div",{staticClass:"p-2 border flex flex-col relative mr-2 h-8 justify-center items-center",on:{click:function(n){return e.setCollection(t.name)}}},[e._v(" "+e._s(t.name)+" "),!e.$attrs.reload&&e.selected&&t.children&&e.selected===t.name?n("div",{staticClass:"flex flex-col  absolute top-0 mt-8 w-64 border border-t-0 shadow left-0 bg-white text-black z-highest items-start justify-start",on:{mouseleave:function(t){e.selected=null}}},[e._l(t.children,(function(t){return[n("div",{staticClass:"hover:bg-black hover:text-white p-1 w-full",on:{click:function(n){return e.filterCollection(t.name)}}},[e._v(e._s(t.name))])]}))],2):e._e()]):e._e()]}))],2):e._e()},s=[],i=(n("d3b7"),n("30fa")),l={name:"VendureCollections",data:function(){return{query:"",collections:null,selected:"",childName:""}},methods:{qry:function(){var e=this;this.$loading(!0),fetch("http://localhost:3000/shop-api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:this.query})}).then((function(e){return e.json()})).then((function(t){e.collections=t.data.collections.items,e.$loading()}))},setCollection:function(e){this.selected=e},filterCollection:function(e){this.selected=null,this.$emit("collection",e),this.selected=null}},watch:{"$attrs.reload":function(e){this.selected=e}},mounted:function(){this.query=i["default"].collections,this.qry(),this.selected=this.$attrs.reload}},c=l,r=n("2877"),a=Object(r["a"])(c,o,s,!1,null,null,null);t["default"]=a.exports}}]);