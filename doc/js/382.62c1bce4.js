"use strict";(self["webpackChunkliubbn_pages"]=self["webpackChunkliubbn_pages"]||[]).push([[382],{9382:function(t,i,s){s.r(i),s.d(i,{default:function(){return u}});var a=function(){var t=this,i=t._self._c;return i("div",[i("div",{staticClass:"ct"},[t._l(t.imgList,(function(s,a){return i("div",{key:a},[i("el-image",{staticClass:"card-img",attrs:{src:s,"preview-src-list":t.imgList,lazy:""}})],1)})),i("div",{staticClass:"circle c1"}),i("div",{staticClass:"circle c2"})],2)])},e=[],r={data(){return{imgList:[]}},created(){this.getList()},methods:{getList(){axios.get("http://127.0.0.1:8080/api/upload_history",{headers:{"Content-type":"multipart/form-data",Authorization:"xddOOrYAmSLmgYLM8TwiLOHcne2pZrqM"}}).then((t=>{let i=t.data.data;this.imgList=i.map((t=>t.url))})).catch((t=>{console.log(t)}))}}},l=r,c=s(1001),n=(0,c.Z)(l,a,e,!1,null,null,null),u=n.exports}}]);
//# sourceMappingURL=382.62c1bce4.js.map