(async function () {
    const stuModel = require('../modles/stuModel')
    try {
        const db = require('../2.数据库连接/index')
        await db;
        console.log('数据库连接成功')

        const stu1 = await stuModel.find({stu_age:22})
        console.log(stu1)
    } catch (err) { 
        console.log('数据库连接失败', err)
    }
})()