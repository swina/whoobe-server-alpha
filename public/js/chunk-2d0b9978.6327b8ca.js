(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9978"],{3434:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[e._v(" Element position "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.epos.position,expression:"epos.position"}],staticClass:"dark",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.epos,"position",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}}),e._l(e.options,(function(t){return n("option",{domProps:{value:t}},[e._v(e._s(t))])}))],2),n("div",{staticClass:"flex flex-row mt-1"},e._l(e.pos,(function(t){return n("div",[e._v(" "+e._s(t.label)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"p.value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{change:function(n){var o=t.value,a=n.target,s=!!a.checked;if(Array.isArray(o)){var i=null,r=e._i(o,i);a.checked?r<0&&e.$set(t,"value",o.concat([i])):r>-1&&e.$set(t,"value",o.slice(0,r).concat(o.slice(r+1)))}else e.$set(t,"value",s)}}})])})),0),n("div",{staticClass:"mt-1"},[e._v(" Modal "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.center,expression:"center"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.center)?e._i(e.center,null)>-1:e.center},on:{change:function(t){var n=e.center,o=t.target,a=!!o.checked;if(Array.isArray(n)){var s=null,i=e._i(n,s);o.checked?i<0&&(e.center=n.concat([s])):i>-1&&(e.center=n.slice(0,i).concat(n.slice(i+1)))}else e.center=a}}})])])},a=[],s=(n("159b"),n("ac1f"),n("1276"),{name:"MokaTailwindElementPosition",data:function(){return{epos:{position:"",top:"",left:"",right:"",bottom:""},center:!1,centerscreen:"nuxpresso-modal",options:["static","fixed","absolute","relative"],pos:[{label:"top",value:!1,attr:"top-0"},{label:"left",value:!1,attr:"left-0"},{label:"right",value:!1,attr:"right-0"},{label:"bottom",value:!1,attr:"bottom-0"}]}},props:["css"],watch:{epos:{handler:function(e,t){this.update(t)},deep:!0},pos:{handler:function(e,t){this.update(t)},deep:!0},center:function(e){this.update()}},methods:{update:function(){var e=this.epos.position;this.pos.forEach((function(t){t.value&&(e+=" "+t.attr)})),this.center&&(e+=" "+this.centerscreen),this.$emit("input",e),this.$emit("css",e)}},mounted:function(){var e=this;if(this.css){var t=this.css.split(" ");this.model="",t.forEach((function(t){t.indexOf(e.centerscreen)>-1&&(e.center=!0),e.options.forEach((function(n){t.indexOf(n)>-1&&(e.epos.position=t,console.log(e.epos,n))})),e.pos.forEach((function(n,o){t.indexOf(n.attr)>-1&&(e.epos[n.label]=n.attr,e.pos[o].value=!0)}))})),this.update()}}}),i=s,r=n("2877"),c=Object(r["a"])(i,o,a,!1,null,null,null);t["default"]=c.exports}}]);