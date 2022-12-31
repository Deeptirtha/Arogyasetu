const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {type:String, required:true,trim:true},
    phone: {type:String, required:true, unique:true,trim:true},
    password: {type:String, required:true,trim:true},
    Age:{type:Number},
    Pincode:{type:Number},
    Aadhar:{type:String},
    first_dose:{
      status:{type:Boolean,default:false},
      slot:{type:String},
      date:{type:Date}  
  },

    second_dose:{
      status:{type:Boolean,default:false},
      slot:{type:String},
      date:{type:Date}
  
    },
    


  },{timestamps:true})
  module.exports=mongoose.model('User',userSchema)