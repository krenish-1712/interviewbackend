let mongoose = require('mongoose')

let AdminSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true,"Name is required"]
    },
    email : {
        type : String,
        required : [true,"Email is required"]
    },
    password:{
        type : String,
        required : [true,"Password is required"]
    }
})

let ADMIN = mongoose.model('Admin',AdminSchema)

module.exports = ADMIN;