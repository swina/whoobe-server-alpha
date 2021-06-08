(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fcd11438","chunk-78131860","chunk-78131860"],{"140a":function(t,e,i){(function(){function e(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function i(t,e){return t.x*e.x+t.y*e.y}function s(t,s){var o=e(t)*e(s);if(0===o)return 0;var n=i(t,s)/o;return n>1&&(n=1),Math.acos(n)}function o(t,e){return t.x*e.y-e.x*t.y}function n(t,e){var i=s(t,e);return o(t,e)>0&&(i*=-1),180*i/Math.PI}var a=function(t){this.handlers=[],this.el=t};function r(t,e){var i=new a(t);return i.add(e),i}a.prototype.add=function(t){this.handlers.push(t)},a.prototype.del=function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)},a.prototype.dispatch=function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"===typeof i&&i.apply(this.el,arguments)}};var l=function(t,e){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var i=function(){};this.rotate=r(this.element,e.rotate||i),this.touchStart=r(this.element,e.touchStart||i),this.multipointStart=r(this.element,e.multipointStart||i),this.multipointEnd=r(this.element,e.multipointEnd||i),this.pinch=r(this.element,e.pinch||i),this.swipe=r(this.element,e.swipe||i),this.tap=r(this.element,e.tap||i),this.doubleTap=r(this.element,e.doubleTap||i),this.longTap=r(this.element,e.longTap||i),this.singleTap=r(this.element,e.singleTap||i),this.pressMove=r(this.element,e.pressMove||i),this.twoFingerPressMove=r(this.element,e.twoFingerPressMove||i),this.touchMove=r(this.element,e.touchMove||i),this.touchEnd=r(this.element,e.touchEnd||i),this.touchCancel=r(this.element,e.touchCancel||i),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};l.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var i=this.preV,s=t.touches.length;if(s>1){this._cancelLongTap(),this._cancelSingleTap();var o={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};i.x=o.x,i.y=o.y,this.pinchStartLen=e(i),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var i=this.preV,s=t.touches.length,o=t.touches[0].pageX,a=t.touches[0].pageY;if(this.isDoubleTap=!1,s>1){var r=t.touches[1].pageX,l=t.touches[1].pageY,c={x:t.touches[1].pageX-o,y:t.touches[1].pageY-a};null!==i.x&&(this.pinchStartLen>0&&(t.zoom=e(c)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=n(c,i),this.rotate.dispatch(t,this.element)),i.x=c.x,i.y=c.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(o-this.x2+r-this.sx2)/2,t.deltaY=(a-this.y2+l-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=r,this.sy2=l}else{if(null!==this.x2){t.deltaX=o-this.x2,t.deltaY=a-this.y2;var h=Math.abs(this.x1-this.x2),d=Math.abs(this.y1-this.y2);(h>10||d>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=o,this.y2=a,s>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,i,s){return Math.abs(t-e)>=Math.abs(i-s)?t-e>0?"Left":"Right":i-s>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}},t.exports=l})()},"41d7":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.blocks&&t.blocks.hasOwnProperty("id")?i("div",{ref:t.blocks.id,class:"relative "+Object.values(t.blocks.css).join(""),style:t.blocks.style+" "+t.background(t.blocks),attrs:{list:t.blocks.blocks}},[t.blocks.image&&".mp4"===t.blocks.image.ext?i("div",{class:"absolute "+t.blocks.css,attrs:{videobg:""}},[i("video",{staticClass:"object-cover h-full w-full",attrs:{playsinline:"",poster:t.blocks.image.previewUrl,autoplay:"",loop:""}},[i("source",{attrs:{src:t.blocks.image.url}})])]):t._e(),t.blocks.blocks.length?t._e():i("span",[t._v("add an element")]),t._l(t.blocks.blocks,(function(e,s){return i("div",{ref:e.id,refInFor:!0},[e&&"flex"!=e.type&&"grid"!=e.type?i("moka-element",{key:e.id,attrs:{element:e,coords:t.$attrs.coords,develop:t.$attrs.develop}}):t._e(),"grid"===e.type?i("moka-grid",{key:e.id,attrs:{doc:t.$attrs.doc,blocks:e,index:s,coords:t.$attrs.coords,develop:t.$attrs.develop}}):t._e(),e&&e.hasOwnProperty("id")&&"flex"===e.type?i("div",{ref:e.id,refInFor:!0,class:"relative "+Object.values(e.css).join(" "),style:e.style+" "+t.background(e),attrs:{tag:"div",list:e.blocks}},[e.blocks.length?t._e():i("span",[t._v("add an element")]),t._l(e.blocks,(function(e,s){return i("div",[e&&"flex"!=e.type?i("moka-element",{key:e.id,attrs:{element:e,coords:t.$attrs.coords,develop:t.$attrs.develop}}):t._e()],1)}))],2):t._e()],1)}))],2):t._e()},o=[],n=i("5530"),a=(i("ac1f"),i("5319"),i("159b"),i("dccf")),r=i("a9b8"),l=i("2f62"),c=i("cffa"),h=i("1dac"),d=i("2e40");c["a"].registerPlugin(h["a"]);h["a"];var u={name:"MokaFlex",components:{MokaElement:a["default"],MokaGrid:r["default"]},props:["blocks","doc"],computed:Object(n["a"])(Object(n["a"])({},Object(l["b"])(["moka"])),{},{animations:function(){return d["a"]}}),methods:{switchFlex:function(t,e){if(t.id===this.moka.selected){if(!e.length)return void(t.css.css="flex-col");e.indexOf("flex-col")<0?t.css.css+=" flex-col":t.css.css=t.css.css.replace("flex-col","")}},background:function(t){return t.hasOwnProperty("image")&&t.image&&t.image.url?t.image.previewUrl?" background-image:url("+t.image.previewUrl+");background-size:cover;background-repeat:no-repeat;":" background-image:url("+t.image.url+");":""},active:function(t){return this.moka&&this.moka.selected?this.moka.selected===t?"opacity-100":"opacity-0 hover:opacity-100":"opacity-0 hover:opacity-100 "},setCurrent:function(t,e){var i=this.$attrs.coords;t&&t.forEach((function(t){i.push(t)})),this.$store.dispatch("selected",e.id),this.$emit("selected",i,e)},setCurrentSub:function(t,e){var i=this.$attrs.coords;t&&t.forEach((function(t){i.push(t)})),this.$store.dispatch("selected",e.id),this.$emit("selected",i,e)},swap:function(t,e,i){this.$emit("swap",e)},animate:function(t,e){if(!t.hasOwnProperty("gsap")&&(t.gsap={animation:"",duration:.7,delay:0,ease:"none"}),this.$refs[e]){var i=c["a"].effects[t.gsap.animation](this.$refs[e],{trigger:this.$refs[e],duration:parseFloat(t.gsap.duration),delay:parseFloat(t.gsap.delay),ease:t.gsap.ease});h["a"].create({id:e,start:"top 99%",trigger:this.$refs[e],toggleActions:"play pause restart none",animation:i,onEnter:function(){t.gsap.delay?i.play():i.play(0)},onStart:function(){console.log("started",new Date)},onComplete:function(){console.log("completed",new Date)}})}}},mounted:function(){var t=this;this.$attrs.develop||(console.log(this.blocks.gsap),window.scrollTo(0,0),this.blocks.hasOwnProperty("gsap")&&this.blocks.gsap.animation&&this.animate(this.blocks,this.blocks.id),this.blocks.blocks.forEach((function(e){e.hasOwnProperty("gsap")&&e.gsap.animation&&(console.log(e.gsap.animation,e.id,t.$refs[e.id]),t.animate(e,e.id)),e.hasOwnProperty("blocks")&&e.blocks.forEach((function(e){e.hasOwnProperty("gsap")&&e.gsap.animation&&t.animate(e,e.id),e.blocks.forEach((function(e){e.hasOwnProperty("gsap")&&e.gsap.animation&&t.animate(e,e.id),e.hasOwnProperty("blocks")&&e.blocks.forEach((function(e){e.hasOwnProperty("gsap")&&e.gsap.animation&&(console.log(e,e.gsap),t.animate(e,e.id))}))}))}))})))}},p=u,m=i("2877"),f=Object(m["a"])(p,s,o,!1,null,null,null);e["default"]=f.exports},"8cdc":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.doc?i("div",{key:t.doc.id,ref:t.doc.id,class:"content-slider max-w-screen overflow-x-hidden h-full flex flex-no-wrap block "+t.classe(t.doc.css),style:t.doc.style+" "+t.background(t.doc),attrs:{id:t.doc&&t.doc.hasOwnProperty("anchor")?t.doc.anchor:t.doc.id}},[t._l(t.doc.blocks,(function(e,s){return[e&&e.hasOwnProperty("blocks")&&!e.hasOwnProperty("menu")?i("moka-preview-container",{key:e.id,class:"slider_"+t.doc.id+" slide flex-none top-0 left-0 right-0 bottom-0 w-full slide_"+s,attrs:{doc:e,current:t.current},on:{action:t.hasSlideAction}}):t._e()]})),t.doc.controls.dots.enable?i("div",{staticClass:"md:absolute bottom-0 left-0 text-center flex-row justify-center items-center p-1 w-full"},t._l(t.doc.blocks.length,(function(e){return i("i",{key:"dot-"+t.doc.id+e,class:"material-icons mr-2 "+t.dotActive(e),on:{click:function(i){return t.goTo(e-1)}}},[t._v("fiber_manual_record")])})),0):t._e(),t.doc.controls.navigation.enable?i("div",[t.index>0?i("div",{class:"absolute top-0 left-0 h-full flex justify-center p-1 "+t.over+t.position,on:{click:function(e){return t.goTo(t.index-1)}}},[i("i",{class:"slider-navigation-icon material-icons text-4xl "+t.doc.controls.navigation.css},[t._v(t._s(t.doc.controls.navigation.icons[0]))])]):t._e(),t.index<t.doc.blocks.length-1?i("div",{class:"absolute top-0 right-0 h-full flex justify-center p-1 "+t.over+t.position,on:{click:function(e){return t.goTo(t.index+1)}}},[i("i",{class:"slider-navigation-icon material-icons text-4xl "+t.doc.controls.navigation.css},[t._v(t._s(t.doc.controls.navigation.icons[1]))])]):t._e()]):t._e(),t.doc.controls.buttons?i("div",{class:"slider-buttons absolute left-0 text-center hidden md:flex md:flex-row border-b justify-left items-center my-2 w-full "+t.doc.controls.buttons_position},[t._l(t.doc.blocks,(function(e,s){return[i("button",{key:"btn_"+t.doc.id+s,class:"mx-0 capitalize "+t.buttonsClass,on:{click:function(e){return t.goTo(s)}}},[t._v(t._s(e.name||"slide"+(s+1)))])]}))],2):t._e()],2):t._e()},o=[],n=i("5530"),a=i("dccf"),r=i("95c9"),l=i("2f62"),c=i("cffa"),h=i("1dac"),d=i("140a"),u=i.n(d);c["a"].registerPlugin(h["a"]);h["a"];var p={name:"MokaSlider",data:function(){return{index:-1,timer:null,current:null}},components:{MokaElement:a["default"],MokaPreviewContainer:r["default"]},props:["doc"],computed:Object(n["a"])(Object(n["a"])({},Object(l["b"])(["moka"])),{},{animations:function(){return gsapEffects},slides:function(){return this.doc.blocks.length},over:function(){return this.doc.controls.navigation.hover?"opacity-0 hover:opacity-100":""},position:function(){return this.doc.controls.navigation.hasOwnProperty("position")&&this.doc.controls.navigation.position?" "+this.doc.controls.navigation.position:" items-center"},buttonsClass:function(){var t=this.doc.controls.buttons_css?" "+this.doc.controls.buttons_css:"";return t+=this.doc.controls.buttons_text?" "+this.doc.controls.buttons_text:"",t}}),methods:{dotActive:function(t){var e=this.doc.controls.dots.css?this.doc.controls.dots.css:"text-black";return t-1===this.index?e+" animate-ping":e+" rounded-full"},goTo:function(t){if(!(t<0)&&!(t>this.doc.blocks.length-1)){this.index=t;var e=c["a"].timeline();document.querySelector(".slider_"+this.doc.id)&&(console.log(this.doc.blocks[this.index].style),e.to(".slider_"+this.doc.id,{opacity:0,duration:.4}),e.to(".slider_"+this.doc.id,{xPercent:100*-this.index,opacity:.5,duration:.5}),e.to(".slider_"+this.doc.id,{opacity:1,duration:.5}))}},playslides:function(t){console.log("playing each "+t+" secs");var e=this;this.timer=window.setInterval((function(){e.next(1)}),1e3*parseInt(t))},hasSlideAction:function(t){"slider_next"===t?this.next(1):"slider_prev"===t&&this.next(-1)},next:function(t){this.index<this.doc.blocks.length+t?this.index+=t:this.index=0,this.index<0&&(this.index=0),this.index>=this.doc.blocks.length&&(this.index=0);var e=c["a"].timeline();document.querySelector(".slider_"+this.doc.id)&&(0===this.index&&this.doc.controls.delay&&e.to(".slider_"+this.doc.id,{xPercent:50,opacity:1,duration:0}),e.to(".slider_"+this.doc.id,{xPercent:100*-this.index,opacity:1,duration:1.5}),this.index===this.doc.blocks.length-1&&this.doc.controls.delay&&e.to(".slider_"+this.doc.id,{xPercent:100*-this.index,opacity:1,duration:.3}))},classe:function(t){if(t)return t.hasOwnProperty("css")?t.css+" "+t.container:t},stile:function(t,e){if(t&&e){var i="";return t.hasOwnProperty("fontFamily")&&(i+='font-family:"'+t.fontFamily+'"; '),t.hasOwnProperty("style")?t.style+i:i}},background:function(t){if(t)return t.hasOwnProperty("image")&&t.image&&t.image.url?" background-image:url("+this.$imageURL(t.image)+");":""},animate:function(t,e){if(t){if(this.$refs&&t.hasOwnProperty("gsap")&&t.gsap.animation){var i=c["a"].effects[t.gsap.animation](this.$refs[e],{trigger:this.$refs[e],duration:parseFloat(t.gsap.duration),delay:parseFloat(t.gsap.delay),ease:t.gsap.ease});h["a"].create({id:e,start:"top 99%",trigger:this.$refs[e],toggleActions:"play pause restart none",animation:i,onEnter:function(){t.gsap.delay?i.play():i.play(0)}})}}}},mounted:function(){var t=this;if(this.doc.blocks.length){this.next(),parseInt(this.doc.controls.delay)>0&&this.playslides(this.doc.controls.delay),console.log("loaded");var e=this.$refs[this.doc.id];if(console.log(e),e)new u.a(e,{swipe:function(e){"Left"===e.direction&&(t.index+1<t.doc.blocks.length?t.goTo(t.index+1):t.goTo(0)),"Right"===e.direction&&(t.index>0?t.goTo(t.index-1):t.goTo(t.doc.blocks.length-1))},doubleTap:function(e){t.index+1<t.doc.blocks.length?t.goTo(t.index+1):t.goTo(0)}})}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}},m=p,f=(i("c1b6"),i("2877")),g=Object(f["a"])(m,s,o,!1,null,null,null);e["default"]=g.exports},a9b8:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.blocks?i("div",{class:"relative "+t.blocks.css.css+" "+t.blocks.css.container,style:t.blocks.style+" "+t.background(t.blocks)},t._l(t.blocks.blocks,(function(e,s){return i("div",{key:e.id,class:"relative "+Object.values(e.css).join(""),style:e.style+" "+t.background(e)},[t._l(e.blocks,(function(e,s){return["flex"!=e.type?i("moka-element",{key:e.id,attrs:{element:e,coords:t.$attrs.coords,develop:t.$attrs.develop}}):t._e(),"flex"===e.type?i("div",{class:e.css.css+" relative "+e.css.container,style:e.style},t._l(e.blocks,(function(e,s){return"flex"!=e.type&&"grid"!=e.type?i("moka-element",{key:e.id,attrs:{element:e,coords:t.$attrs.coords,develop:t.$attrs.develop}}):t._e()})),1):t._e()]}))],2)})),0):t._e()},o=[],n=i("5530"),a=(i("159b"),i("dccf")),r=i("2f62"),l={components:{MokaElement:a["default"]},computed:Object(n["a"])({},Object(r["b"])(["moka"])),props:["blocks"],methods:{background:function(t){return t.hasOwnProperty("image")&&t.image&&t.image.url?t.image.previewUrl?" background-image:url("+t.image.previewUrl+");background-size:cover;background-repeat:no-repeat;":" background-image:url("+t.image.url+");":""},active:function(t){return this.moka&&this.moka.selected?this.moka.selected===t?"opacity-100":"opacity-0 hover:opacity-100":"opacity-0 hover:opacity-100 "},setCurrent:function(t,e){var i=this.$attrs.coords;t&&t.forEach((function(t){i.push(t)})),this.$emit("selected",i,e)}}},c=l,h=i("2877"),d=Object(h["a"])(c,s,o,!1,null,null,null);e["default"]=d.exports},b68f:function(t,e,i){},c1b6:function(t,e,i){"use strict";i("b68f")},d29b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{key:t.refreshID,ref:t.doc.id,class:t.pageCss(t.doc.css)+" m-auto overflow-x-hidden ",style:t.stile(t.doc,!0),attrs:{id:"content"}},[t._l(t.doc.blocks,(function(e,s){return[e.image&&(".mp4"===e.image.ext||"webm"===e.image.ext||e.image.url.indexOf(".mp4")>-1)?i("div",{class:"absolute "+e.css.css,attrs:{videobg:""}},[i("video",{staticClass:"object-cover h-full w-full",attrs:{playsinline:"",poster:e.image.previewUrl,autoplay:"",loop:""}},[i("source",{attrs:{src:e.image.url}})])]):t._e(),"grid"===e.type||"flex"===e.type||"slides"===e.type?i("moka-container",{key:e.id,attrs:{doc:e,level:s+1,coords:s}}):t._e(),e.hasOwnProperty("collection")?i("moka-loop",{key:e.id,attrs:{doc:e,level:s+1,coords:s}}):t._e(),e&&e.hasOwnProperty("popup")?i("moka-popup",{key:e.id,ref:e.id,refInFor:!0,attrs:{develop:!0,embeded:!0,doc:e,editor:!0}}):t._e(),e.hasOwnProperty("slider")?i("moka-slider",{key:e.id,attrs:{develop:!0,embeded:!0,doc:e,editor:!0}}):t._e()]})),t.plugins?i("div",{attrs:{"whoobe-global-plugins":""}},[t._l(t.plugins,(function(t){return[i("moka-plugin-wrapper",{attrs:{settings:t.editor.settings,block:null,plugin:t,component:t.component}})]}))],2):t._e()],2)},o=[],n=i("1da1"),a=i("5530"),r=(i("96cf"),i("d3b7"),i("3ca3"),i("ddb0"),i("25f0"),i("159b"),i("7db0"),i("f529")),l=i("41d7"),c=i("a9b8"),h=i("8cdc"),d=i("3238"),u=i("0916"),p=i("2426"),m=i("cffa"),f=i("1dac"),g=i("2e40"),y=i("2f62");m["a"].registerPlugin(f["a"]);f["a"];var b={name:"MokaPreview",data:function(){return{printScreen:null,refreshID:null,plugins:[],previewWidth:"w-screen"}},components:{MokaContainer:r["default"],MokaFlex:l["default"],MokaGrid:c["default"],MokaSlider:h["default"],MokaPluginWrapper:d["default"],MokaLoop:u["default"],MokaPopup:p["default"],"block-slides":function(){return i.e("chunk-711b7a81").then(i.bind(null,"b19c"))}},computed:Object(a["a"])(Object(a["a"])({},Object(y["b"])(["moka","editor"])),{},{animations:function(){return g["a"]}}),watch:{refreshID:function(){}},props:["doc"],methods:{resizeTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=window.screen.availWidth/2-t/2;window.resizeTo(t||window.screen.availWidth,e||window.screen.availHeight),window.moveTo(i,0);var s=t||window.screen.availWidth,o=e||window.screen.availHeight,n="whoobe Preview "+s+"x"+o;document.title=n},responsive:function(t){return this.$clean(this.$cssResponsive(t))},pageCss:function(t){var e=t;return this.doc.hasOwnProperty("body_bg")&&(e+=" "+this.doc.body_bg),this.doc.hasOwnProperty("body_color")&&(e+=" "+this.doc.body_color),e},stile:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e="";t.hasOwnProperty("fontFamily")&&(document.body.style.fontFamily=t.fontFamily,e+='font-family:"'+t.fontFamily+'";'),e+=t.hasOwnProperty("style")?t.style:"";var i=this.background(t);return e+=i,console.log(stile),e})),background:function(t){return t.hasOwnProperty("image")?"background-image:url("+this.$imageURL(t.image)+");":""},printSave:function(){var t=this;this.print().then((function(){t.$emit("save",t.printScreen),t.$emit("close")}))},print:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=document.querySelector("#content"),s={type:"dataURL",useCORS:!0,scale:.5},e.next=4,t.$html2canvas(i,s);case 4:o=e.sent,t.printScreen=o,t.$emit("save",o);case 7:case"end":return e.stop()}}),e)})))()},animate:function(t,e){if(!t.hasOwnProperty("gsap")&&(t.gsap={animation:"",duration:.7,delay:0,ease:"none"}),this.$refs[e]){var i=m["a"].effects[t.gsap.animation](this.$refs[e],{trigger:this.$refs[e],duration:parseFloat(t.gsap.duration),delay:parseFloat(t.gsap.delay),ease:t.gsap.ease});f["a"].create({id:e,start:"top 99%",trigger:this.$refs[e],toggleActions:"play pause restart none",animation:i,onEnter:function(){t.gsap.delay?i.play():i.play(0)},onStart:function(){console.log("started",new Date)},onComplete:function(){console.log("completed",new Date)}})}},animateSub:function(t){var e=this;t.blocks.forEach((function(t){t.hasOwnProperty("gsap")&&t.gsap.animation&&e.animate(t,t.id),t.hasOwnProperty("blocks")&&t.blocks.forEach((function(t){t.hasOwnProperty("gsap")&&t.gsap.animation&&e.animate(t,t.id),t.hasOwnProperty("blocks")&&t.blocks.forEach((function(t){t.hasOwnProperty("gsap")&&t.gsap.animation&&e.animate(t,t.id)}))}))}))}},mounted:function(){var t=this;window.resizeTo(window.screen.availWidth,window.screen.availHeight);var e=document.querySelector("html");e.setAttribute("lang",navigator.language),window.scrollTo(0,0),this.refreshID=this.$randomID(),this.doc.blocks.forEach((function(e){e.hasOwnProperty("gsap")&&e.gsap.animation&&t.animate(e,e.id),e.hasOwnProperty("blocks")&&e.blocks.forEach((function(e){e.hasOwnProperty("gsap")&&e.gsap.animation&&t.animate(e,e.id),e.hasOwnProperty("blocks")&&e.blocks.forEach((function(e){e&&e.hasOwnProperty("gsap")&&e.gsap.animation&&t.animate(e,e.id),e&&e.hasOwnProperty("blocks")&&e.blocks&&e.blocks.forEach((function(e){e.hasOwnProperty("gsap")&&e.gsap.animation&&t.animate(e,e.id)}))}))}))})),window.addEventListener("keydown",(function(e){if(e.altKey&&"KeyX"===e.code&&t.$emit("close"),e.altKey&&"KeyS"===e.code&&t.$emit("save"),e.altKey&&"KeyK"===e.code){var i=document.getElementById("content").outerHTML;t.$emit("html",i)}})),this.$api.service("plugins").find().then((function(e){e.data&&e.data.forEach((function(e){e.general.global&&t.plugins.push(e)}))}))}},v=b,k=i("2877"),w=Object(k["a"])(v,s,o,!1,null,null,null);e["default"]=w.exports}}]);