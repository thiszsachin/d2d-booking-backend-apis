const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  userName:{type:String, required:true},
  userEmail:{type:String, required:true, unique:true },
  userRole:{type:String, required:true},
  password:{type:String, required:true}
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema)
