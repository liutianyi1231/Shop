"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[532],{8532:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});s(4114);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manager-container"},[t("div",{staticClass:"manager-header"},[e._m(0),t("div",{staticClass:"manager-header-center"},[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),t("el-breadcrumb-item",{attrs:{to:{path:e.$route.path}}},[e._v(e._s(e.$route.meta.name))])],1)],1),t("div",{staticClass:"manager-header-right"},[t("el-dropdown",{attrs:{placement:"bottom"}},[t("div",{staticClass:"avatar"},[t("img",{attrs:{src:e.user.avatar||"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}}),t("div",[e._v(e._s(e.user.name||"管理员"))])]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{nativeOn:{click:function(t){return e.goToPerson.apply(null,arguments)}}},[e._v("个人信息")]),t("el-dropdown-item",{nativeOn:{click:function(t){return e.$router.push("/password")}}},[e._v("修改密码")]),t("el-dropdown-item",{nativeOn:{click:function(t){return e.logout.apply(null,arguments)}}},[e._v("退出登录")])],1)],1)],1)]),t("div",{staticClass:"manager-main"},[t("div",{staticClass:"manager-main-left"},[t("el-menu",{staticStyle:{border:"none"},attrs:{"default-openeds":["info","user"],router:"","default-active":e.$route.path}},[t("el-menu-item",{attrs:{index:"/home"}},[t("i",{staticClass:"el-icon-s-home"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("系统首页")])]),t("el-submenu",{attrs:{index:"info"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),t("span",[e._v("信息管理")])]),"ADMIN"===e.user.role?t("el-menu-item",{attrs:{index:"/notice"}},[e._v("公告信息")]):e._e(),"ADMIN"===e.user.role?t("el-menu-item",{attrs:{index:"/type"}},[e._v("分类信息")]):e._e(),t("el-menu-item",{attrs:{index:"/goods"}},[e._v("商品信息")]),t("el-menu-item",{attrs:{index:"/orders"}},[e._v("订单管理")]),t("el-menu-item",{attrs:{index:"/comment"}},[e._v("评论管理")])],2),"ADMIN"===e.user.role?t("el-submenu",{attrs:{index:"user"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),t("span",[e._v("用户管理")])]),t("el-menu-item",{attrs:{index:"/admin"}},[e._v("管理员信息")]),t("el-menu-item",{attrs:{index:"/business"}},[e._v("商家信息")]),t("el-menu-item",{attrs:{index:"/user"}},[e._v("用户信息")])],2):e._e()],1)],1),t("div",{staticClass:"manager-main-right"},[t("router-view",{on:{"update:user":e.updateUser}})],1)])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"manager-header-left"},[t("img",{staticStyle:{"border-radius":"10px"},attrs:{src:s(415)}}),t("div",{staticClass:"title"},[e._v("后台管理系统")])])}],n={name:"Manager",data(){return{user:JSON.parse(localStorage.getItem("xm-user")||"{}")}},created(){this.user.id||this.$router.push("/front/home")},methods:{updateUser(){this.user=JSON.parse(localStorage.getItem("xm-user")||"{}")},goToPerson(){"ADMIN"===this.user.role&&this.$router.push("/adminPerson"),"BUSINESS"===this.user.role&&this.$router.push("/businessPerson")},logout(){localStorage.removeItem("xm-user"),this.$router.push("/login")}}},i=n,o=s(1656),l=(0,o.A)(i,r,a,!1,null,"6e8cb518",null),u=l.exports},415:function(e,t,s){e.exports=s.p+"img/logo.2b5c9e58.png"}}]);
//# sourceMappingURL=532.10e612c7.js.map