(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df4b6"],{"88ff":function(e,t,c){"use strict";c.r(t);var s=function(){var e=this,t=e.$createElement,c=e._self._c||t;return e.selected?c("div",{staticClass:"w-full"},[c("button",{on:{click:function(t){e.create=!e.create}}},[e._v("Create new")]),e.selected?c("div",{staticClass:"w-full bg-gray-400 p-2 grid grid-cols-2 gap-10"},[e._l(Object.keys(e.schema),(function(t){return[c("div",{staticClass:"flex flex-col"},[c("label",[e._v(e._s(e.schema[t].label))]),"string"===e.schema[t].type?c("input",{directives:[{name:"model",rawName:"v-model",value:e.selected[t],expression:"selected[field]"}],staticClass:"w-full",attrs:{type:"text"},domProps:{value:e.selected[t]},on:{input:function(c){c.target.composing||e.$set(e.selected,t,c.target.value)}}}):e._e(),"boolean"===e.schema[t].type?c("input",{directives:[{name:"model",rawName:"v-model",value:e.selected[t],expression:"selected[field]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selected[t])?e._i(e.selected[t],null)>-1:e.selected[t]},on:{change:function(c){var s=e.selected[t],o=c.target,a=!!o.checked;if(Array.isArray(s)){var n=null,l=e._i(s,n);o.checked?l<0&&e.$set(e.selected,t,s.concat([n])):l>-1&&e.$set(e.selected,t,s.slice(0,l).concat(s.slice(l+1)))}else e.$set(e.selected,t,a)}}}):e._e(),"array"===e.schema[t].type?c("textarea",{directives:[{name:"model",rawName:"v-model",value:e.selected[t],expression:"selected[field]"}],staticClass:"w-full h-24",domProps:{value:e.selected[t]},on:{input:function(c){c.target.composing||e.$set(e.selected,t,c.target.value)}}}):e._e()])]})),c("div",{staticClass:"col-span-2 text-center"},[c("button",{staticClass:"success m-auto",on:{click:e.saveProject}},[e._v("Save")]),c("button",{staticClass:"success m-auto",on:{click:function(t){return e.openProject(e.project)}}},[e._v("Connect to")])])],2):e._e(),e.create?c("moka-modal",{attrs:{size:"md",position:"modal",buttons:"save"},on:{close:function(t){e.create=!e.create},click_0:function(t){e.create=!e.create},click_1:e.createProject}},[c("div",{attrs:{slot:"title"},slot:"title"},[e._v("New Project")]),c("div",{staticClass:"p-2 flex flex-col",attrs:{slot:"content"},slot:"content"},[c("label",[e._v("Project name")]),c("input",{directives:[{name:"model",rawName:"v-model",value:e.newProject,expression:"newProject"}],attrs:{type:"text"},domProps:{value:e.newProject},on:{input:function(t){t.target.composing||(e.newProject=t.target.value)}}})])]):e._e()],1):e._e()},o=[],a=(c("b0c0"),c("7db0"),{name:"WhoobeProjects",data:function(){return{selected:null,create:!1,newProject:"new project"}},computed:{schema:function(){return this.$mapState().datastore.schema.projects}},methods:{active:function(e){},getProjectData:function(e){this.$projectUsage()},getProject:function(e){var t=this;this.$api.service("projects").find({query:{project:e}}).then((function(c){console.log(c),t.selected=c,t.selected.name=e}))},openProject:function(e){var t=this;this.$api.service("projects").find({query:{project:e,connect:!0}}).then((function(c){console.log(c),t.selected=c,t.selected.name=e,window.localStorage.setItem("whoobe-workspace",e),location.reload()}))},saveProject:function(){return console.log(this.selected),this.$api.service("projects").patch(this.selected._id,this.selected).then((function(e){console.log(e)})),null},createProject:function(){var e=this;this.$api.service("projects").create({name:this.newProject.toLowerCase()}).then((function(t){e.$message(t),e.create=!1,console.log(t)}))}},mounted:function(){this.$mapState().desktop.project&&(this.selected=this.$mapState().desktop.project)}}),n=a,l=c("2877"),r=Object(l["a"])(n,s,o,!1,null,null,null);t["default"]=r.exports}}]);