import axios from 'axios';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 封装ajax:
//   1.设置请求地址前缀和超时时间 axios.create
//   2.设置公共的请求头 token 请求拦截器
//   3.功能成功得到的具体数据  功能失败得到具体的错误信息
//   4.设置请求进度条
//   5.处理跨域 代理服务器
const errorMessage = {
  401: '未授权',
  403: '禁止访问',
  404: '资源找不到',
  500: '服务器错误',  
}
const request = axios.create({
  baseURL:'/api',
  timeout:10000
})

request.interceptors.request.use((config)=>{
  NProgress.start();

  return config;
})

request.interceptors.response.use((response)=>{
  //结束进度条
  NProgress.done();

  if(response.data.code === 200){
    return response.data.data
  }
  return Promise.reject(response.data.message ||'未知错误')
},(error)=>{
  //请求失败 结束进度条
  NProgress.done();
  // 请求失败 响应回来则有error.message --->401 403 404 500
  // 请求失败 响应没回来 就不会有error.message
  if(error.response){
    return Promise.reject(errorMessage[error.response.status])
  }else{
    if(err.message.indexOf('Network Error') !== -1){
      return Promise.reject('网络连接失败')
    }else if(error.message.indexOf('timeout') !== -1){
      return Promise.reject('连接超时')
    }
  }
  return Promise.reject('未知错误')
})

export default request;
