import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import About from "../views/About";
import Message from "../views/Message";
import News from "../views/News";
import Detail from '../views/Detail';

// 安装/使用插件
Vue.use(VueRouter);

const router = new VueRouter({
	// 路由配置项：放置n个路由的配置
	routes: [{
			path: "/home", // 路由路径
			component: Home, // 路由组件
			children: [
				{
					path:"message", // 路由路径
					component: Message, // 路由组件
					children: [{
					name:'detail',
					path:"detail/:id",
						component:Detail,
						props($route) {
							return {
								...$route.query,
								...$route.params,
							}
						}
					}]
				},
				{
					path: "news", 
					component: News, 
				},
				// {
				// 	path: "/", 
				// 	redirect: "message",
				// },
			],
		},
		{
			path: "/about", 
			component: About, 
		},
		// {
		// 	path: "*",
		// 	redirect: "/home", // 重定向
		// },
	],
});

export default router;