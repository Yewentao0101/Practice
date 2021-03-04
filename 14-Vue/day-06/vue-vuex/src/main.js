import Vue from "vue";
import App from "./App";

import store from './store'
// 在main.js中，引入公共资源
import "./assets/css/base.css";

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	store,
}).$mount("#app");
