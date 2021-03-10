import Vue from "vue";

import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 加载mock，让其生效

import "@/assets/css/reset.css";

/* eslint-disable */
if (process.env.NODE_ENV === "development") {
  require("./mock"); // commonjs
}
/* eslint-enable */

// 全局注册组件
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
