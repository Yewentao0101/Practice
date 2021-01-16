//引用express框架
const express = require('express');
//创建网站服务器
const app = express();

app.get('/',(req,res)=>{
    //send()
    //1.send方法内部会检测响应内容的类型
    //2.send方法会自动检测http状态码
    //3.send方法会帮我们自动设置响应的内容类型及编码
    res.send('hello,express')
})

app.get('/list',(req,res)=>{
    res.send({name:'123',age:'345'})
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');