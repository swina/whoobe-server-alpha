(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207f38"],{a35e:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.plugins?t("div",{staticClass:"grid grid-cols-4 gap-3 p-4"},[e._l(e.plugins,(function(n){return[n.general.enabled&&!n.general.global?t("div",{staticClass:"p-2 relative shadow-2xl cursor-pointer hover:bg-black rounded justify-end items-center flex flex-col",on:{click:function(t){return e.addPlugin(n)}}},[!n.general.enabled&&n.general.editor?t("i",{staticClass:"material-icons text-xl bg-gray-300 p-2 rounded-full"},[e._v("settings_input_component")]):e._e(),n.general.enabled?t("i",{staticClass:"material-icons text-xl bg-indigo-500 p-2 rounded-full"},[e._v("settings_input_component")]):e._e(),t("div",[e._v(e._s(n.general.name))])]):e._e()]}))],2):e._e()},l=[],a=t("5530"),s=(t("7db0"),t("b0c0"),t("2f62")),o={name:"MokaEditorPlugins",data:function(){return{plugins:null}},computed:Object(a["a"])({},Object(s["b"])(["moka","editor","datastore"])),mounted:function(){var e=this;this.$api.service("plugins").find().then((function(n){e.plugins=n.data}))},methods:{addPlugin:function(e){var n={id:this.$randomID(),type:"plugin",name:e.general.name,plugin:e,element:"div",tag:"plugin",css:"",style:"",icon:"settings_input_component"};this.editor.current.blocks.push(n),this.$action()}}},r=o,u=t("2877"),c=Object(u["a"])(r,i,l,!1,null,null,null);n["default"]=c.exports}}]);