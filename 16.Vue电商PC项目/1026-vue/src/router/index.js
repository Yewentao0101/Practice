import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Search from "@/views/Search";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      // 元信息，如果匹配上当前路由路径，meta参数就会添加到this.$route上
      isHideFooter: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      isHideFooter: true,
    },
  },
  {
    // 要使用params参数，必须路由路径进行配置
    path: "/search/:keyword?", // 可选params参数
    name: "Search",
    component: Search,
    // meta: {
    //   isShowFooter: true
    // },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    // meta: {
    //   isShowFooter: true
    // },
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
