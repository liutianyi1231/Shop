"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[51],{2051:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("div",{staticStyle:{width:"80%","background-color":"white",margin:"30px auto","border-radius":"20px"}},[e("div",{staticStyle:{"padding-bottom":"10px"}},[e("div",{staticStyle:{"font-size":"18px",color:"#000000FF","line-height":"80px","border-bottom":"#cccccc 1px solid"}},[e("div",{staticStyle:{"margin-left":"20px"}},[t._v("我的订单（"+t._s(t.ordersData.length)+" 个）")])]),e("div",{staticStyle:{margin:"20px 0",padding:"0 50px"}},[e("div",{staticClass:"table"},[e("el-table",{attrs:{data:t.ordersData,strip:""}},[e("el-table-column",{attrs:{label:"商品图片",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(s){return[s.row.goodsImg?e("el-image",{staticStyle:{width:"80px",height:"60px","border-radius":"3px"},attrs:{src:s.row.goodsImg,"preview-src-list":[s.row.goodsImg]}}):t._e()]}}])}),e("el-table-column",{attrs:{prop:"orderId",label:"订单编号"}}),e("el-table-column",{attrs:{prop:"goodsName",label:"商品名称","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(s){return[e("a",{attrs:{href:"/front/detail?id="+s.row.goodsId}},[t._v(t._s(s.row.goodsName))])]}}])}),e("el-table-column",{attrs:{prop:"businessName",label:"店铺名称"},scopedSlots:t._u([{key:"default",fn:function(s){return[e("a",{attrs:{href:"/front/business?id="+s.row.businessId}},[t._v(t._s(s.row.businessName))])]}}])}),e("el-table-column",{attrs:{prop:"goodsPrice",label:"商品价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.goodsPrice)+" / "+t._s(e.row.goodsUnit)+" ")]}}])}),e("el-table-column",{attrs:{prop:"num",label:"商品数量"}}),e("el-table-column",{attrs:{prop:"price",label:"订单总价"}}),e("el-table-column",{attrs:{prop:"username",label:"收货人"}}),e("el-table-column",{attrs:{prop:"useraddress",label:"收货地址"}}),e("el-table-column",{attrs:{prop:"phone",label:"联系电话"}}),e("el-table-column",{attrs:{prop:"status",label:"订单状态"}}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(s){return["待收货"===s.row.status?e("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(e){return t.updateStatus(s.row,"已完成")}}},[t._v("确认收货")]):t._e(),"已完成"===s.row.status?e("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(e){return t.addComment(s.row)}}},[t._v("评价")]):t._e(),e("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(e){return t.del(s.row.id)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"pagination",staticStyle:{"margin-top":"20px"}},[e("el-pagination",{attrs:{background:"","current-page":t.pageNum,"page-sizes":[5,10,20],"page-size":t.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])])]),e("el-dialog",{attrs:{title:"请输入评价内容",visible:t.fromVisible,width:"40%","close-on-click-modal":!1,"destroy-on-close":""},on:{"update:visible":function(e){t.fromVisible=e}}},[e("el-form",{ref:"formRef",staticStyle:{"padding-right":"50px"},attrs:{model:t.form,"label-width":"100px",rules:t.rules}},[e("el-form-item",{attrs:{label:"评价内容",prop:"username"}},[e("el-input",{attrs:{type:"textarea",placeholder:"请输入评价内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.fromVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确 定")])],1)],1)],1)},r=[],a={data(){return{user:JSON.parse(localStorage.getItem("xm-user")||"{}"),ordersData:[],pageNum:1,pageSize:10,total:0,form:{},fromVisible:!1}},mounted(){this.loadOrders(1)},methods:{loadOrders(t){t&&(this.pageNum=t),this.$request.get("/orders/selectPage",{params:{pageNum:this.pageNum,pageSize:this.pageSize}}).then((t=>{"200"===t.code?(this.ordersData=t.data?.list,this.total=t.data?.total):this.$message.error(t.msg)}))},navTo(t){location.href=t},del(t){this.$request.delete("/orders/delete/"+t).then((t=>{"200"===t.code?(this.$message.success("删除成功"),this.loadOrders(1)):this.$message.error(t.msg)}))},handleCurrentChange(t){this.loadOrders(t)},updateStatus(t,e){this.form=t,this.form.status=e,this.$request.put("/orders/update",this.form).then((t=>{"200"===t.code?this.$message.success("操作成功"):this.$message.error(t.msg)}))},addComment(t){this.fromVisible=!0,this.form=t},save(){let t={userId:this.user.id,businessId:this.form.businessId,goodsId:this.form.goodsId,content:this.form.content};this.$request.post("/comment/add",t).then((t=>{"200"===t.code?(this.$message.success("评价成功"),this.fromVisible=!1,this.updateStatus(this.form,"已评价"),this.form={}):this.$message.error(t.msg)}))}}},l=a,i=s(1656),n=(0,i.A)(l,o,r,!1,null,null,null),d=n.exports}}]);
//# sourceMappingURL=51.b6ed5898.js.map