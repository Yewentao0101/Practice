

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

        //利用modle的增删改查的方法 去操作数据库
        //注意：只有在查询的时候，要关心返回结果，其他操作，之只关心是否成功

        //增加
        // stuModel.create({
        //     stu_id: Date.now(),
        //     stu_name: '赵DaDiao',
        //     stu_age: '25',
        //     stu_sex: '男',
        //     stu_hobby: ['装懂', '发呆', '舔刘洋'],
        //     stu_info: '觉得自己很帅',
        // }, (err) => {
        //     if (err) console.log('数据插入失败', err)
        //     else console.log('数据插入成功')
        // })

    //     stuModel.create({
    //         stu_id: Date.now(),
    //         stu_name: '石小鱼',
    //         stu_age: '23',
    //         stu_sex: '女',
    //         stu_hobby: ['背代码','宅狗', '假装很恩爱'],
    //         stu_info: '散发酸臭味',
    //     }, (err) => {
    //         if (err) console.log('数据插入失败', err)
    //         else console.log('数据插入成功')
    //     })

    //查询

    //第一个参数：查询条件
    //第二个参数：投影
    //第三个参数： err data data是一个数组
        // stuModel.find({stu_age:22},{stu_name:1},(err,data)=>{
        //     if(err) console.log('查找错误',err)
        //     else console.log(data)
        // })
    
    //修改
    //修改符合条件里面的第一条

    // stuModel.updateOne({stu_age:25},{$set:{stu_age:33}},(err,data)=>{
    //     if(err) console.log('修改失败',err)
    //     else console.log('修改成功')
    // })
    // stuModel.updateMany({stu_sex:'男'},{$set:{stu_sex:'女'}},(err,data)=>{
    //     if(err) console.log('修改失败',err)
    //     else console.log('修改成功')
    // })

    //删除
    //只删除符合条件的第一个
        stuModel.deleteOne({stu_age:22},(err,data)=>{
         if(err)console.log('删除失败', err)
        else console.log('删除成功')
        })
    } catch (error) {
        console.log('数据库连接失败', error)
    }
})()