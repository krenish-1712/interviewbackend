let mongoose = require('mongoose')

let AdmintaskSchema = new mongoose.Schema({
    taskname : {
        type : String,
    },
    status:{
        type : Boolean,
    }
})

let ADMIN = mongoose.model('Admintask',AdmintaskSchema)

module.exports = ADMIN;