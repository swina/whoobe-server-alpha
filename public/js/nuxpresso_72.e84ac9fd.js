(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nuxpresso_72","nuxpresso_62","chunk-2d0c51c2"],{"3e60":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("editor",{attrs:{blocks:t.doc}})],1)},n=[],o=(i("d3b7"),i("3ca3"),i("ddb0"),i("b0c0"),i("a0aa")),a={name:"WhoobeStorePluginLoopDesigner",components:{editor:function(){return i.e("chunk-2d0a4211").then(i.bind(null,"04b9"))}},data:function(){return{model:null,doc:{name:"Whoobe Store Products Loop",category:"template",json:{blocks:[],css:"",image:null,tag:"document"}}}},methods:{initTemplates:function(){var t=this.doc;t.name="Whoobe Store Single Product",this.$attrs.plugin.templates={loop:this.doc,single:t},this.$api.service("plugins").patch(this.$attrs.plugin._id,this.$attrs.plugin).then((function(t){console.log(t)}))}},mounted:function(){this.model=o["default"],this.$attrs.plugin.hasOwnProperty("templates")?this.doc=this.$attrs.plugin.templates.loop:this.initTemplates()}},l=a,r=i("2877"),p=Object(r["a"])(l,s,n,!1,null,null,null);e["default"]=p.exports},a0aa:function(t,e,i){"use strict";i.r(e);var s={_id:{type:"id",edit:!1,list:!1},name:{type:"string",edit:!0,list:!0},slug:{type:"string",edit:!0,list:!1},description:{type:"text",edit:!0,list:!1},assets:{type:"image_uri",edit:!0,list:!0},category:{type:"select",edit:!0,list:!0},facets:{type:"select",separator:"|",edit:!0,list:!0},optionGroups:{type:"array",edit:!1,list:!1},optionValues:{type:"list",separator:"|",edit:!1,list:!1},sku:{type:"string",list:!0,edit:!1},parent:{type:"string",list:!1,edit:!1},price:{type:"currency",edit:!1,list:!0},taxCategory:{type:"string",edit:!0,list:!1},stockOnHand:{type:"number",edit:!1,list:!1},trackInventory:{type:"boolean",edit:!1,list:!1},variantAssets:{type:"array",edit:!1,list:!1},type:{type:"array",edit:!1,list:!1},image:{type:"image",edit:!1,list:!1}};e["default"]=s}}]);