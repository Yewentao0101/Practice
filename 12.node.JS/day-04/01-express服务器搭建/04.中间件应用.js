//引用express框架
const express = require('express');
//创建网站服务器
const app = express();

// app.use((req,res,next)=>{
//     res.send('当前网站正在维护')
// })

app.use('/admin',(req,res,next)=>{
    //用户没有登录
    let isLogin=true;
    //如果用户登录 请求继续向下执行
    if(isLogin) next();
    //如果用户没有登录，直接读用户作出响应
    else res.send('您还没有登录 不能访问/admin这个页面')
})

app.get('/admin',(req,res)=>{
    res.send('你已经登录 可以访问当前页面')
})

app.use((req,res,next)=>{
    // res.status(404)
    // res.send('当前访问的页面上不存在的')
    //为客户端响 应404状态码以及提示信息
    res.status(404).send('当前访问的页面上不存在的')
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');