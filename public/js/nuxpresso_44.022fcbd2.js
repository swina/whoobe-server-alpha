(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nuxpresso_44"],{"30cc":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-col p-2 bg-gray-100 text-black"},[s("div",{staticClass:"flex flex-row"},[s("button",{class:"general"===e.mode?"bg-indigo-500 text-white":"",on:{click:function(t){e.mode="general"}}},[e._v("General")]),s("button",{class:"loop"===e.mode?"bg-indigo-500 text-white":"",on:{click:function(t){e.mode="loop"}}},[e._v("Loop")]),s("button",{class:"single"===e.mode?"bg-indigo-500 text-white":"",on:{click:function(t){e.mode="single"}}},[e._v("Single")])]),s("div",{staticClass:"border p-1"},[e._l(Object.keys(e.settings[e.mode]),(function(t){return[s("label",{staticClass:"capitalize"},[e._v(e._s(t))]),e.isObject(e.settings[e.mode][t])?s("div",[e._l(e.settings[e.mode][t],(function(i,n){return[e.isObject(i)?s("div",{staticClass:"w-full grid gap-2",class:"grid-cols-"+Object.keys(e.settings[e.mode][t]).length},e._l(Object.keys(i),(function(o){return s("div",{staticClass:"flex flex-col"},[0===n?s("label",[e._v(e._s(o))]):e._e(),e.isText(i[o])?s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings[e.mode][t][n][o],expression:"settings[mode][field][i][f]"}],attrs:{type:"text"},domProps:{value:e.settings[e.mode][t][n][o]},on:{input:function(s){s.target.composing||e.$set(e.settings[e.mode][t][n],o,s.target.value)}}}):e._e(),e.isBoolean(i[o])?s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings[e.mode][t][n][o],expression:"settings[mode][field][i][f]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.settings[e.mode][t][n][o])?e._i(e.settings[e.mode][t][n][o],null)>-1:e.settings[e.mode][t][n][o]},on:{change:function(s){var i=e.settings[e.mode][t][n][o],c=s.target,a=!!c.checked;if(Array.isArray(i)){var l=null,d=e._i(i,l);c.checked?d<0&&e.$set(e.settings[e.mode][t][n],o,i.concat([l])):d>-1&&e.$set(e.settings[e.mode][t][n],o,i.slice(0,d).concat(i.slice(d+1)))}else e.$set(e.settings[e.mode][t][n],o,a)}}}):e._e(),e.isNumber(i[o])?s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings[e.mode][t][n][o],expression:"settings[mode][field][i][f]"}],staticStyle:{width:"4rem"},attrs:{type:"number"},domProps:{value:e.settings[e.mode][t][n][o]},on:{input:function(s){s.target.composing||e.$set(e.settings[e.mode][t][n],o,s.target.value)}}}):e._e()])})),0):e._e()]}))],2):s("div",[e.isText(e.settings[e.mode][t])?s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings[e.mode][t],expression:"settings[mode][field]"}],attrs:{type:"text"},domProps:{value:e.settings[e.mode][t]},on:{input:function(s){s.target.composing||e.$set(e.settings[e.mode],t,s.target.value)}}}):e._e(),e.isBoolean(e.settings[e.mode][t])?s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings[e.mode][t],expression:"settings[mode][field]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.settings[e.mode][t])?e._i(e.settings[e.mode][t],null)>-1:e.settings[e.mode][t]},on:{change:function(s){var i=e.settings[e.mode][t],n=s.target,o=!!n.checked;if(Array.isArray(i)){var c=null,a=e._i(i,c);n.checked?a<0&&e.$set(e.settings[e.mode],t,i.concat([c])):a>-1&&e.$set(e.settings[e.mode],t,i.slice(0,a).concat(i.slice(a+1)))}else e.$set(e.settings[e.mode],t,o)}}}):e._e(),e.isNumber(e.settings[e.mode][t])?s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings[e.mode][t],expression:"settings[mode][field]"}],staticClass:"w-8",attrs:{type:"number",size:"4"},domProps:{value:e.settings[e.mode][t]},on:{input:function(s){s.target.composing||e.$set(e.settings[e.mode],t,s.target.value)}}}):e._e()])]}))],2),s("button",{staticClass:"m-auto",on:{click:e.save}},[e._v("Save")])])},n=[],o=s("53ca"),c={name:"VendurePluginSettings",data:function(){return{mode:"general",settings:{general:{url:"http://localhost:3000/shop-api",limit:12,collections:!0,collection:!1,layout_plain:!0,add_to_cart:"snipcart",orders:!1},loop:{cols:4,box_css:"",fields:[{field:"name",css:"",function:""},{field:"assets",css:"",function:""},{field:"price",css:"",function:""}],add_to_cart:!1},single:{layout_cols:2,fields:[{field:"assets",css:"",col:0,function:""},{field:"name",css:"",col:1,function:""},{field:"variants",css:"",col:1,function:""},{field:"price",css:"",col:1,function:""},{field:"description",css:"",col:-1,function:""}]}}}},methods:{isText:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:function(e){return"object"===Object(o["a"])(e)},isBoolean:function(e){return"boolean"===typeof e},save:function(){var e=this.$mapState().editor.current.plugin;e.component.settings=this.settings}},mounted:function(){this.settings=this.$mapState().editor.current.plugin.component.settings}},a=c,l=s("2877"),d=Object(l["a"])(a,i,n,!1,null,null,null);t["default"]=d.exports}}]);