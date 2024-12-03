const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://bishtsaumil:1gupbDqMS8dIYz63@cluster0.9p1qw.mongodb.net/mernbasic");

const userSchema=new mongoose.Schema({
  username:{
    type: String,
    required:true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength:10
  },
  password:{
    type:String,
    required:true,
    trim:true,
    minlength:4
  },
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:6
  },
  firstname:{
    type:String,
    required:false,
    trim:true
  },
  lastname:{
    type:String,
    required:false,
    trim:true
  },
  address:{
    type:String,
    required:false,
    minlength:10
  },
  mobileno:{
    type:String,
    required:false,
    minlength:8
  }
})

const User=mongoose.model("User",userSchema)

module.exports=User