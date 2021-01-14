const mongoose = require('mongoose');

const DBCon = mongoose.connect('mongodb://127.0.0.1:27017/YeWT', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = DBCon;
