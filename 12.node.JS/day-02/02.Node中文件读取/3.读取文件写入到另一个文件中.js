//将斗破苍穹.txt读取，并且写入到另一个文件中

//采用流的方式读取txt
//1.1引入方式模块
const fs = require('fs')
//1.2创建可读流
const rs = fs.createReadStream('./斗破苍穹.txt')
//1.3获取到每一次读取的数据
rs.on('data', (data) => {
    ws.write(data)
})

//2.1通过流的形式写入到xxxx.txt中/
//2.1创建可写流
const ws = fs.createWriteStream('./xxx.txt')
//监听可读流
rs.on('open', () => {
    console.log('可读流开启')
})
rs.on('close', () => {
    console.log('可读流关闭')
    //关闭可写流
    ws.end()
})
//监听可写流
ws.on('open', () => {
    console.log('可写流开启')
})
ws.on('close', () => {
    console.log('可写流关闭')
})