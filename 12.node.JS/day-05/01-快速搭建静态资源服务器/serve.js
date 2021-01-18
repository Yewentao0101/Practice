const express = require('express')

const app = express()

//使用express中内置的中间件，直接实现一个静态资源服务器
//当客户端发送请求给服务器，这个中间件，会自动进入assets文件夹里，然后根据路径地址，去找这个文件，并且响应


app.use(express.static('assets'))

app.listen(3000,(err)=>{
    if (err) console.log('服务器错误',err)
    else console.log('服务器开启')
})

//http://localhost:3000/斗破苍穹第一章.txt