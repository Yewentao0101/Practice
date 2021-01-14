const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stuSchema = new Schema({
    stu_id: {
        type: String,
        required: true,
        unique: true
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
        default: '男'
    },
    stu_hobby: {
        type: [String]
    },
    stu_info: {
        type: Schema.Types.Mixed
    },
    date: {
        type: Date,
        default: Date.now()
    },
    enable_flag: {
        type: String,
        default: 'Y'
    }
}, {
    collection: 'student'
})
module.exports= stuSchema