let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    firstname:{
         type:String,
         required:[true,"First name is required"]
    },
    lastname:{
        type:String,
        required:[true,"First name is required"]
   },
   contact :{
        type : Number,
        required : [true,"Number is required"]
   },
    email:{
      type:String,
      required:[true,"Email is required"],
      unique:true,
      lowercase:true,
   },
   password:{
     type:String,
     required:[true,"Password is required"],
     trim : true
    }
  })

let USER = mongoose.model('User',UserSchema)

module.exports = USER;