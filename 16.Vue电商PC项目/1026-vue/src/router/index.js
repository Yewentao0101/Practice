import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/views/Login';
import Register from '@/views/Register';
import Home from '@/views/Home';
import Search from '@/views/Search';
Vue.use(VueRouter);

const routes = [
  {
    path:'/login',
    name:'Login',
    component:Login,
    meta:{
      isHideFooter:true
    },
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
    meta:{
      isHideFooter:true
    },
  },
  {
    path:'/',
    name:'Home',
    component:Home,
  },
  {
    path:'/search',
    name:'Search',
    component:Search,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
