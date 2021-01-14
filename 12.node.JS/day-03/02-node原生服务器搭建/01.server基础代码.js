//使用node原生快速搭建服务
//1.导入http模块

const http = require('http');

//2.创建一个服务对象
const server = http.createServer((request,response)=>{
    response.end('ok')
})

//3.监听服务器开启
server.listen(3310,(err)=>{
    if(err) console.log('服务器启动错误',err)
    else console.log('服务器启动成功')
})