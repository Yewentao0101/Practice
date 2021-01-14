const fs = require('fs')

const rs = fs.createReadStream('./斗破苍穹.txt',{
    highWaterMark:10 * 1024 * 1024
})

rs.on('open',()=>{
    console.log('可读流开启')
})
rs.on('close',()=>{
    console.log('可读流关闭')
})
rs.on('data',(data)=>{
    console.log('data')
})