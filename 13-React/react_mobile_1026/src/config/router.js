import Home from '../pages/Home'
import Login from '../pages/Login'
import RegisterPhone from '../pages/Register/Registerphone'
import Country from '../pages/Country'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register/phone',
    component: RegisterPhone,
  },
  {
    path: '/register/code',
    component: RegisterCode,
  },
  {
    path: '/register/password',
    component: RegisterPassword,
  },
  {
    path:'/country',
    component:Country,
  },
]