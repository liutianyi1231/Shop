"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[385],{1385:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var s=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[r("div",{staticStyle:{width:"400px",padding:"30px","background-color":"white","border-radius":"5px"}},[r("div",{staticStyle:{"text-align":"center","font-size":"20px","margin-bottom":"20px",color:"#333"}},[e._v("欢迎注册")]),r("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-user",placeholder:"请输入账号"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请输入密码","show-password":""},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("el-form-item",{attrs:{prop:"confirmPass"}},[r("el-input",{attrs:{"prefix-icon":"el-icon-lock",placeholder:"请确认密码","show-password":""},model:{value:e.form.confirmPass,callback:function(r){e.$set(e.form,"confirmPass",r)},expression:"form.confirmPass"}})],1),r("el-form-item",[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择角色"},model:{value:e.form.role,callback:function(r){e.$set(e.form,"role",r)},expression:"form.role"}},[r("el-option",{attrs:{label:"商家",value:"BUSINESS"}}),r("el-option",{attrs:{label:"用户",value:"USER"}})],1)],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%","background-color":"#333","border-color":"#333",color:"white"},on:{click:e.register}},[e._v("注 册")])],1),r("div",{staticStyle:{display:"flex","align-items":"center"}},[r("div",{staticStyle:{flex:"1"}}),r("div",{staticStyle:{flex:"1","text-align":"right"}},[e._v(" 已有账号？请 "),r("a",{attrs:{href:"/login"}},[e._v("登录")])])])],1)],1)])},o=[],l=(t(4114),{name:"Register",data(){const e=(e,r,t)=>{""===r?t(new Error("请确认密码")):r!==this.form.password?t(new Error("两次输入的密码不一致")):t()};return{form:{},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],confirmPass:[{validator:e,trigger:"blur"}]}}},created(){},methods:{register(){this.$refs["formRef"].validate((e=>{e&&this.$request.post("/register",this.form).then((e=>{"200"===e.code?(this.$router.push("/"),this.$message.success("注册成功")):this.$message.error(e.msg)}))}))}}}),i=l,a=t(1656),n=(0,a.A)(i,s,o,!1,null,"2b68535d",null),c=n.exports}}]);
//# sourceMappingURL=385.cfa204d3.js.map