const fs = require('fs');
const ws = fs.createWriteStream('./text.txt',{
    start:10
})

ws.write('xxxxx')
ws.write('xxoooxxx')
ws.write('xxxxxooo')


ws.end()


ws.on('open',()=>{
    console.log('流开启了')
})
ws.on('close',()=>{
    console.log('流关闭了')
})