"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[43],{2043:function(t,e,i){i.r(e),i.d(e,{default:function(){return n}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("div",{staticStyle:{display:"flex",width:"70%","background-color":"white",margin:"30px auto","border-radius":"20px"}},[e("div",{staticStyle:{flex:"1",padding:"0 20px"}},[e("div",{staticStyle:{"font-size":"18px",color:"#000000FF","line-height":"80px","border-bottom":"#cccccc 1px solid"}},[t._v(t._s(t.typeData.name))]),e("div",{staticStyle:{margin:"20px 0"}},[e("el-row",{attrs:{gutter:20}},t._l(t.goodsData,(function(i){return e("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{span:6}},[e("img",{staticStyle:{width:"100%",height:"175px","border-radius":"10px",border:"#cccccc 1px solid"},attrs:{src:i.img,alt:""},on:{click:function(e){return t.navTo("/front/detail?id="+i.id)}}}),e("div",{staticStyle:{"margin-top":"10px","font-weight":"500","font-size":"16px",width:"180px",color:"#000000FF","text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap"}},[t._v(t._s(i.name))]),e("div",{staticStyle:{"margin-top":"5px","font-size":"20px",color:"#FF5000FF"}},[t._v("￥ "+t._s(i.price)+" / "+t._s(i.unit))])])})),1)],1)]),e("div",{staticStyle:{width:"250px",padding:"0 20px","border-left":"#cccccc 1px solid"}},[e("div",{staticStyle:{"font-size":"18px",color:"#000000FF","line-height":"80px","border-bottom":"#cccccc 1px solid"}},[t._v("猜你喜欢")]),e("div",{staticStyle:{margin:"20px 0",padding:"0 10px"}},t._l(t.recommendData,(function(i){return e("div",{staticStyle:{"margin-bottom":"20px"}},[e("img",{staticStyle:{width:"100%",height:"175px","border-radius":"10px",border:"#cccccc 1px solid"},attrs:{src:i.img,alt:""},on:{click:function(e){return t.navTo("/front/detail?id="+i.id)}}}),e("div",{staticStyle:{"margin-top":"10px","font-weight":"500","font-size":"16px",width:"180px",color:"#000000FF","text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap"}},[t._v(t._s(i.name))]),e("div",{staticStyle:{"margin-top":"5px","font-size":"20px",color:"#FF5000FF"}},[t._v("￥ "+t._s(i.price)+" / "+t._s(i.unit))])])})),0)])])])},s=[],a={data(){let t=this.$route.query.id;return{user:JSON.parse(localStorage.getItem("xm-user")||"{}"),typeId:t,goodsData:[],recommendData:[],typeData:{}}},mounted(){this.loadGoods(),this.loadType(),this.loadRecommend()},methods:{loadRecommend(){this.$request.get("/goods/recommend").then((t=>{"200"===t.code?this.recommendData=t.data:this.$message.error(t.msg)}))},loadType(){this.$request.get("/type/selectById/"+this.typeId).then((t=>{"200"===t.code?this.typeData=t.data:this.$message.error(t.msg)}))},loadGoods(){this.$request.get("/goods/selectByTypeId?id="+this.typeId).then((t=>{"200"===t.code?this.goodsData=t.data:this.$message.error(t.msg)}))},navTo(t){location.href=t}}},r=a,c=i(1656),d=(0,c.A)(r,o,s,!1,null,null,null),n=d.exports}}]);
//# sourceMappingURL=43.54e68697.js.map