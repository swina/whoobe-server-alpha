(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nuxpresso_68"],{aaa1:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"flex flex-col p-4"},[s("div",{staticClass:"text-sm"},[s("button",{on:{click:function(i){t.resetFields(),t.json=null}}},[t._v("Reset")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.snipcart,expression:"snipcart"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.snipcart)?t._i(t.snipcart,null)>-1:t.snipcart},on:{change:function(i){var s=t.snipcart,e=i.target,a=!!e.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);e.checked?r<0&&(t.snipcart=s.concat([n])):r>-1&&(t.snipcart=s.slice(0,r).concat(s.slice(r+1)))}else t.snipcart=a}}}),t._v(" "),s("label",[t._v("Export to Snipcart")])]),t.schema?s("div",{staticClass:"grid"},[t._m(0),t._l(t.schema,(function(i,e){return[s("div",{staticClass:"grid grid-cols-2"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mapping[i],expression:"mapping[field]"}],staticClass:"w-3/4",attrs:{type:"text"},domProps:{value:t.mapping[i]},on:{input:function(s){s.target.composing||t.$set(t.mapping,i,s.target.value)}}}),s("i",{staticClass:"material-icons",on:{click:function(i){return t.disableField(e)}}},[t._v("close")])]),s("div",[t.products[0].hasOwnProperty(i)?s("span",[t._v(t._s(i)+" ")]):s("span",[t.snipcart?s("input",{directives:[{name:"model",rawName:"v-model",value:t.snipcartUrl,expression:"snipcartUrl"}],attrs:{type:"text"},domProps:{value:t.snipcartUrl},on:{input:function(i){i.target.composing||(t.snipcartUrl=i.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.mapping[i],expression:"mapping[field]"}],attrs:{type:"text"},domProps:{value:t.mapping[i]},on:{input:function(s){s.target.composing||t.$set(t.mapping,i,s.target.value)}}})])])])]})),s("button",{on:{click:function(i){return t.createJson()}}},[t._v("Export")])],2):t._e(),t.schema&&t.json?s("div",[s("div",{staticClass:"flex flex-col p-2"},[s("p",[t._v("You exporting "+t._s(t.products.length)+" products "),s("br")]),s("vue-blob-json-csv",{attrs:{"file-type":"json","file-name":"products",data:t.json}},[s("button",{staticClass:"my-2 success"},[t._v("Download Products")]),t._v(" Products: "+t._s(t.products.length)+" ")])],1)]):t._e()])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"grid grid-cols-2"},[s("label",[t._v("Export As")]),s("label",[t._v("Product Field")])])}],n=(s("a434"),s("b64b"),s("159b"),s("ac1f"),s("1276"),s("d81d"),s("caad"),s("2532"),{name:"MokaProductsExport",data:function(){return{files:[],schema:null,mapping:{},json:null,importOK:[],importError:[],products:null,snipcart:!1,prefix:"",snipcartUrl:"/product/$"}},computed:{},watch:{snipcart:function(t){t?(this.prefix="data-item-",this.schema.push("url"),this.mapping["url"]="",this.createMapping()):(this.prefix="",this.schema.splice(this.schema.indexOf("url"),1),delete this.mapping.url)}},mounted:function(){var t=this;this.$http.get("products").then((function(i){t.products=i.data;var s=t.products?Object.keys(t.products[0]):[];s.forEach((function(i){t.mapping[i]=t.prefix+i})),t.schema=s}))},methods:{resetFields:function(){var t=this,i=this.products?Object.keys(this.products[0]):[];i.forEach((function(i){t.mapping[i]=t.prefix+i})),this.schema=i},createMapping:function(){var t=this;this.schema.forEach((function(i){t.mapping[i]=t.prefix+i}))},disableField:function(t){this.schema.splice(t,1),this.createMapping()},setImport:function(t,i){this.mapping[t]=i},createJson:function(){var t=this;if(this.products){var i=[];this.products.forEach((function(s){var e={};t.schema.forEach((function(i){if("url"===i&&t.snipcart){var a=t.snipcartUrl.split("$");e[t.mapping[i]]=a[0]+s[a[1]]}else e[t.mapping[i]]=s[i]})),i.push(e)})),console.log(i),this.json=i}},exportProducts:function(){var t=this;this.importing=!0,this.importOK=[],this.importError=[],this.json.map((function(i){var s={};Object.keys(t.mapping).map((function(e){if(e.includes("$")){var a=t.mapping[e].split("$");a=a[0];var n=a[1];s[e]=a+i[n]}else s[e]=i[t.mapping[e]]}))}))}}}),r=n,c=s("2877"),p=Object(c["a"])(r,e,a,!1,null,null,null);i["default"]=p.exports}}]);