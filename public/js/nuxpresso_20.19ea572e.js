(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nuxpresso_20"],{cdd4:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.cart?n("div",{attrs:{id:"snipcart","data-config-modal-style":"side","data-api-key":t.apiKey,hidden:""}}):t._e()},c=[];var i={name:"MokaSnipcart",data:function(){return{apiKey:"",cart:!1}},computed:{now:function(){return new Date}},beforeMount:function(){var t=document.querySelector("body"),e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href","https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css");var n=document.createElement("script");n.setAttribute("type","application/javascript"),n.setAttribute("charset","utf-8"),n.setAttribute("data-cfasync","false"),n.setAttribute("src","https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"),t.appendChild(e),t.appendChild(n),this.cart=!0},mounted:function(){this.apiKey=this.$attrs.plugin.component.config["apikey"]}},r=i,s=n("2877"),u=Object(s["a"])(r,a,c,!1,null,null,null);e["default"]=u.exports}}]);