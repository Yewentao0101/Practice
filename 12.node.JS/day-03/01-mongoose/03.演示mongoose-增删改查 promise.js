

(async function () {
    const mongoose = require('mongoose');
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/YeWT', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('数据库连接成功')

        const Schema = mongoose.Schema
        const stuSchema = new Schema({
            stu_id: {
                type: String,//当前字段的数据类型
                required: true,//必填项
                unique: true//唯一
            },
            stu_name: {
                type: String,
                required: true
            },
            stu_age: {
                type: Number,
                required: true
            },
            stu_sex: {
                type: String,
                required: true,
                default: '男' // 不写的时候默认值
            },
            stu_hobby: {
                type: [String]
            },
            stu_info: {
                type: Schema.Types.Mixed // 表示所有类型
            },
            date: {
                type: Date,
                default: Date.now()//表示注册时间
            },
            enable_flag: {
                type: String,
                default: 'Y'//表示这条用户数据有效
            }
        }, {
            collection: 'student'
        })

        const stuModel = mongoose.model('student', stuSchema)
    //查询
    //第一个参数：查询条件
    //第二个参数：投影
    //第三个参数： err data data是一个数组
        // stuModel.find({stu_age:22},{stu_name:1},(err,data)=>{
        //     if(err) console.log('查找错误',err)
        //     else console.log(data)
        // })
        const res = await stuModel.find({stu_age:23},{stu_name:1})
        console.log(res)
    

    } catch (error) {
        console.log('数据库连接失败', error)
    }
})()