(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nuxpresso_8"],{c484:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.current?n("div",{staticClass:"m-2 p-2 bg-gray-100 text-gray-700"},[e._l(Object.keys(e.datastore.schema.plugins),(function(t,r){return[e.current.hasOwnProperty(t)?n("details",[n("summary",{staticClass:"p-1 mt-1 text-lime-600 text-lg outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold",on:{click:function(n){e.summary=t}}},[e._v(e._s(t))]),e.summary.includes(t)?n("div",{staticClass:"grid grid-cols-2"},[e._l(Object.keys(e.current[t]),(function(r){return[e.current[t].hasOwnProperty(r)&&"object"===typeof e.current[t][r]?n("div",{staticClass:"p-2 bg-gray-200"},[n("details",[n("summary",{staticClass:"outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold",on:{click:function(n){e.summary=t+r}}},[e._v(e._s(r))]),e.summary===t+r?n("div",[e._l(Object.keys(e.current[t][r]),(function(a){return[e.current[t][r].hasOwnProperty(a)?n("div",{key:t+r+a},[n("label",[e._v(e._s(a))]),"string"===typeof e.current[t][r][a]&&"config"!=a?n("input",{directives:[{name:"model",rawName:"v-model",value:e.current[t][r][a],expression:"current[field][f][ff]"}],staticClass:"w-full",attrs:{type:"text"},domProps:{value:e.current[t][r][a]},on:{input:function(n){n.target.composing||e.$set(e.current[t][r],a,n.target.value)}}}):e._e(),"number"===typeof e.current[t][r][a]&&"config"!=a?n("input",{directives:[{name:"model",rawName:"v-model",value:e.current[t][r][a],expression:"current[field][f][ff]"}],staticClass:"w-full",attrs:{type:"number"},domProps:{value:e.current[t][r][a]},on:{input:function(n){n.target.composing||e.$set(e.current[t][r],a,n.target.value)}}}):e._e(),"boolean"===typeof e.current[t][r][a]?n("input",{directives:[{name:"model",rawName:"v-model",value:e.current[t][r][a],expression:"current[field][f][ff]"}],staticClass:"float-left",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.current[t][r][a])?e._i(e.current[t][r][a],null)>-1:e.current[t][r][a]},on:{change:function(n){var u=e.current[t][r][a],s=n.target,c=!!s.checked;if(Array.isArray(u)){var i=null,o=e._i(u,i);s.checked?o<0&&e.$set(e.current[t][r],a,u.concat([i])):o>-1&&e.$set(e.current[t][r],a,u.slice(0,o).concat(u.slice(o+1)))}else e.$set(e.current[t][r],a,c)}}}):e._e()]):e._e()]})),n("div",{staticClass:"p-1 bg-white border"},[e._v(" Key "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_key,expression:"new_key"}],attrs:{type:"text"},domProps:{value:e.new_key},on:{input:function(t){t.target.composing||(e.new_key=t.target.value)}}}),e._v(" Value "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_key_value,expression:"new_key_value"}],attrs:{type:"text"},domProps:{value:e.new_key_value},on:{input:function(t){t.target.composing||(e.new_key_value=t.target.value)}}}),n("button",{staticClass:"sm",on:{click:function(n){return e.addKey(t,r)}}},[e._v("Add key")])])],2):n("div",[n("div",{staticClass:"p-1 bg-white border"},[e._v(" Key "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_key,expression:"new_key"}],attrs:{type:"text"},domProps:{value:e.new_key},on:{input:function(t){t.target.composing||(e.new_key=t.target.value)}}}),e._v(" Value "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_key_value,expression:"new_key_value"}],attrs:{type:"text"},domProps:{value:e.new_key_value},on:{input:function(t){t.target.composing||(e.new_key_value=t.target.value)}}}),n("button",{staticClass:"sm",on:{click:function(n){return e.addKey(e.current[t][r])}}},[e._v("Add key")])])])])]):n("div",{staticClass:"p-2"},[n("label",{staticClass:"capitalize"},[e._v(e._s(r))]),"string"===typeof e.current[t][r]&&"config"!=r?n("input",{directives:[{name:"model",rawName:"v-model",value:e.current[t][r],expression:"current[field][f]"}],staticClass:"w-full",attrs:{type:"text"},domProps:{value:e.current[t][r]},on:{input:function(n){n.target.composing||e.$set(e.current[t],r,n.target.value)}}}):e._e(),"boolean"===typeof e.current[t][r]?n("input",{directives:[{name:"model",rawName:"v-model",value:e.current[t][r],expression:"current[field][f]"}],staticClass:"float-left",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.current[t][r])?e._i(e.current[t][r],null)>-1:e.current[t][r]},on:{change:function(n){var a=e.current[t][r],u=n.target,s=!!u.checked;if(Array.isArray(a)){var c=null,i=e._i(a,c);u.checked?i<0&&e.$set(e.current[t],r,a.concat([c])):i>-1&&e.$set(e.current[t],r,a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.current[t],r,s)}}}):e._e(),"object"===typeof e.current[t][r]?n("div",[e._v(" "+e._s(e.current[t][r])+" ")]):e._e(),"config"===r?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.current[t][r],expression:"current[field][f]"}],staticClass:"w-full",domProps:{value:e.current[t][r]},on:{input:function(n){n.target.composing||e.$set(e.current[t],r,n.target.value)}}}):e._e()])]}))],2):e._e()]):e._e()]})),n("div",{staticClass:"flex flex-col w-full items-center justify-center p-2"},[e.current.hasOwnProperty("_id")?n("button",{on:{click:function(t){return e.savePlugin()}}},[e._v("Save")]):n("button",{on:{click:function(t){return e.createPlugin()}}},[e._v("Add Plugin")])])],2):e._e()},a=[],u=n("5530"),s=n("2f62"),c={name:"PluginConfigurator",data:function(){return{summary:"",plugin:null,new_key:"",new_key_value:"",current:null}},computed:Object(u["a"])({},Object(s["b"])(["datastore"])),methods:{addKey:function(e,t){this.current[e][t][this.new_key]=this.new_key_value},createPlugin:function(){var e=this;this.$api.service("plugins").create(this.current).then((function(t){console.log(t),e.$message("Plugin added")}))},savePlugin:function(){var e=this;this.$api.service("plugins").patch(this.current._id,this.current).then((function(t){e.$message("Plugin saved")}))}},mounted:function(){this.current=this.$mapState().editor.current}},i=c,o=n("2877"),l=Object(o["a"])(i,r,a,!1,null,null,null);t["default"]=l.exports}}]);