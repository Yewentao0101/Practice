//连接数据库
const mongoose = require('mongoose')
//导出promise对象
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/users',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})