/*
  封装axios：
    1. 设置请求地址前缀和超时时间
      axios.create
    2. 设置公共的请求头 token
      请求拦截器
    3. 功能成功时得到具体的数据
      功能失败时得到具体的错误原因
    4. 设置请求进度条
    5. 处理跨域
      代理服务器
*/
import axios from "axios";
import NProgress from "nprogress"; // 引入js
import "nprogress/nprogress.css"; // 引入css

const errorMessages = {
  401: "未授权",
  403: "禁止访问",
  404: "资源找不到",
  500: "服务器错误",
};

const request = axios.create({
  baseURL: "/mock", // /就是当前服务器地址（代理服务器）
  timeout: 10000,
});

request.interceptors.request.use((config) => {
  // 开始进度条
  NProgress.start();
  return config;
});

request.interceptors.response.use(
  (response) => {
    // 结束进度条
    NProgress.done();
    // 请求成功 --> 响应状态码为 200-299
    // 判断功能是否成功
    if (response.data.code === 200) {
      // 功能成功
      // 返回具体的数据
      return response.data.data;
    }
    // 功能失败
    // 返回具体的错误原因
    return Promise.reject(response.data.message || "未知错误");
  },
  (error) => {
    // 请求失败

    // 结束进度条
    NProgress.done();
    // 如果响应回来了，就会有error.response --> 401 403 404 500
    // 如果响应没有回来，就不会有error.response --> 断网 请求超时
    if (error.response) {
      return Promise.reject(new Error(errorMessages[error.response.status]));
    }
    if (error.message.indexOf("Network Error") !== -1) {
      return Promise.reject(new Error("网络连接失败, 请连接网络或打开wifi重试"));
    }
    if (error.message.indexOf("timeout") !== -1) {
      return Promise.reject(new Error("网速太慢了，请连接wifi试试"));
    }

    return Promise.reject(new Error("未知错误，请联系管理员解决"));
  },
);

export default request;
