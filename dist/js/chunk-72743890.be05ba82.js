(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72743890"],{5110:function(t,e,n){"use strict";n("91d5")},"91d5":function(t,e,n){},f2a4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"thing"}},[n("h3",[t._v("This is the third page! Wow")]),n("h3",[t._v("User data: "+t._s(t.user_data))]),n("router-link",{attrs:{to:"/second"}},[n("button",[t._v("Okay back to second page")])])],1)])},a=[],u=(n("96cf"),n("1da1")),s=n("260b"),i=(n("ea7b"),n("66ce"),{name:"third",components:{},mounted:function(){var t=this;s["a"].auth().onAuthStateChanged((function(e){e?t.getUser(e.uid):console.log("Error: No user is signed in!")}))},methods:{getUser:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].database().ref("user-data/"+e).once("value").then((function(t){return t.val()}));case 2:n=t.sent,this.user_data=n;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},data:function(){return{user_data:null}}}),o=i,c=(n("5110"),n("2877")),d=Object(c["a"])(o,r,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-72743890.be05ba82.js.map