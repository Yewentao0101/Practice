const express = require('express')
const app = express()

//用于响应静态资源
app.use(express.static('public'))
//引用内置中间件 使我们可以通过req.body获取到post上传的数据
app.use(express.urlencoded({extended:true}))
app.get('/test',(req,res)=>{
    console.log(req.query)
})

app.post('/test',(req,res)=>{
    console.log(req.body)
    res.send('服务器相应的数据')
})

app.listen(3000)