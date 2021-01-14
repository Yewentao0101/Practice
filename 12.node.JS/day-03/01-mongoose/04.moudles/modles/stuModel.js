const mongoose = require('mongoose');
const stuSchema = require('../创建Schema/stuSchema');
const stuModel = mongoose.model('student',stuSchema);
module.exports = stuModel;