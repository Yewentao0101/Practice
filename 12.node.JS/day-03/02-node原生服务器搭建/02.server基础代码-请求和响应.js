//使用node原生快速搭建服务
//1.导入http模块

const http = require('http');

//2.创建一个服务对象
const server = http.createServer((request, response) => {
    const path = request.url
    console.log(path)
    const arr = path.split('?')
    const queryStr = arr[1]
    // 想要把字符串转成对象,使用node中提供的一个叫做querystring的包,帮我们把查询字符串,转成对象
    const querystring = require('querystring')
    // parse方法可以把一个查询字符串,转成对象
    const res = querystring.parse(queryStr)
    console.log(res.name)
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('<h2>中文<h2>')
})

//3.监听服务器开启
server.listen(3310, (err) => {
    if (err) console.log('服务器启动错误', err)
    else console.log('服务器启动成功')
})