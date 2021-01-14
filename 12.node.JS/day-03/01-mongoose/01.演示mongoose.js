(async function () {
    //1.引入
    const mongoose = require('mongoose');
    try {
        //2.连接数据库
        await mongoose.connect('mongodb://127.0.0.1:27017/YeWT', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        //3.因为mongoose.connect返回的是promise，所以await后面的的代码一定是成功的
        //可以去操作数据库了
        console.log('连接数据成功')

        //4.创建Schema(约束：约束插入到文档中数据的格式以及数据类型)
        const Schema = mongoose.Schema;
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

        //5.创建model对象（创建对象）    
        //参数：第一个是集合名，第二个是约束对象
        //注意：mongoose会自动将集合名转为小写并且加上一个s
        //解决办法：在new Schema的时候，第二个参数加上{collection：'集合名'}
        const stuModel = mongoose.model('student', stuSchema)

        //利用modle创建document对象
        //创建document对象是去 new model构造函数
        const stuDocument = new stuModel({
            stu_id: Date.now(),
            stu_name: '叶文韬',
            stu_age: 22,
            stu_sex:'男',
            stu_hobby:['games','code','sports'],
            stu_info:'不得了'
        })
        //将document存储到集合
        stuDocument.save()
    } catch (error) {
        //如果连接不成功，直接进入catch
        console.log('连接数据库失败')
    }
})()