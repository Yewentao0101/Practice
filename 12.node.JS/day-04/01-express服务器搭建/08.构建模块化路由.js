//引用express框架
const express = require('express');
//创建网站服务器
const app = express();
//创建路由对象
const home = express.Router()


//监听端口
app.listen(3000);
console.log('网站服务器启动成功');