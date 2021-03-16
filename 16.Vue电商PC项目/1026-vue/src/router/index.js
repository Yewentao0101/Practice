import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
import ShopCart from "@/views/ShopCart";
import AddCartSuccess from "@/views/AddCartSuccess";

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
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/addcartsuccess",
    name: "AddCartSuccess",
    component: AddCartSuccess,
  },
  {
    path: "/shopcart",
    name: "ShopCart",
    component: ShopCart,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
