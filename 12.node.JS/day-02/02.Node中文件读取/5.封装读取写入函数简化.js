function copyFile(sourceFile,targetFile){
    const fs = require('fs')

const rs = fs.createReadStream(sourceFile)

rs.on('data',(data)=>{
    ws.write(data)
})

const ws = fs.createWriteStream(targetFile)


rs.pipe(ws)
/* rs.on('open',()=>{
    console.log('可读流开启')
})
rs.on('close',()=>{
    console.log('可读流关闭')
    ws.end()
})
ws.on('open',()=>{
    console.log('可写流开启')
})
ws.on('close',()=>{
    console.log('可写流关闭')
}) */
} 
copyFile('./斗破苍穹.txt','./xxx2.txt')