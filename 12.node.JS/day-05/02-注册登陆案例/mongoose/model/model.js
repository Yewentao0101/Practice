//创建model模块

const mongoose = require('mongoose');

const userSchema = require('../schema/schema.js')

module.exports = mongoose.model('userData',userSchema)