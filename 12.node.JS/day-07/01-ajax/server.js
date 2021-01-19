const express = require('express')
const app = express()
app.use(express.static('public'))

app.get('/test',(res,req)=>{
    console.log(res.query)
    const { callback } = res.query
    req.send(`${callback}({"name": "zs", "age":18})`)})

app.post('/test',(res,req)=>{
    res.setEncoding('Access-Control-Allow-Origin', '*')
    res.send('{"name":"zs", "age": 18}')
})
app.listen(3000)