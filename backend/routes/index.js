const express=require("express")
const router=express.Router()
const zod=require("zod")
const User = require("../db")
const jwt=require("jsonwebtoken")
const pass=require("../secret")
const authMiddleware = require("../middleware")

//SIGNUP
const signupCheck=zod.object({
  username:zod.string().min(3).max(10),
  password:zod.string().min(4),
  email:zod.string().email()
})
router.post("/signup",async(req,res)=>{
  try
  {
    const {success}=signupCheck.safeParse(req.body);

    if(!success)
    {
      return res.status(400).json({
        message:"Inputs not accepted"
      })
    }

    const checkUser=await User.findOne({
      username:req.body.username
    })

    if(checkUser)
    {
      return res.status(400).json({
        message:"username taken"
      })
    }

    await User.create(req.body);

    res.status(201).json({
      message:"Account SUCCESSFULLY created"
    })
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({
      message:"An unexpected error occured"
    })
  }
})

//SIGNIN + JWT(mainly token return)
const signinCheck=zod.object({
  username:zod.string().min(3).max(10),
  password:zod.string().min(4),
})
router.post("/signin",async(req,res)=>{
  try{
    const {success}=signinCheck.safeParse(req.body);

    if(!success)
    {
      return res.status(400).json({
        message:"Inputs not accepted"
      })
    }

    const user=await User.findOne({
      username:req.body.username
    })

    if(!user || req.body.password!==user.password)
    {
      return res.status(401).json({
        message:"Incorrect username or password"
      })
    }


    const token=jwt.sign({userId:user._id},pass)
    res.status(201).json({
      message:"Here's your token",
      token
    })
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({
      message:"An unexpected error occured"
    })
  }
})

const infoCheck=zod.object({
  firstname:zod.string().optional(),
  lastname:zod.string().optional(),
  address:zod.string().min(10).optional(),
  mobileno:zod.string().min(8).optional(),
  email:zod.string().email().optional()
})
router.put("/profile",authMiddleware,async(req,res)=>{

  try
  {
    const {success}=infoCheck.safeParse(req.body);

    if(!success)
    {
      return res.status(400).json({
        message:"Inputs not accepted"
      })
    }

    const result=await User.updateOne({
      _id:req.userId
    },{ $set: req.body })
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "User not found or no changes made" });
    }

    res.json({
      message:"Updated SUCCESSFULLY"
    })
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({
      message:"An unexpected error occured"
    })
  }
})

//RESET PASSWORD
const resetCheck=zod.object({
  username: zod.string(),
  password: zod.string().min(4)//new password
})
router.put("/reset",async(req,res)=>{

  try
  {
    const {success}=resetCheck.safeParse(req.body);
    if(!success)
    {
      return res.status(400).json({
        message:"Inputs not accepted"
      })
    }
  
    const user=await User.findOne({
      username:req.body.username
    })
  
    if(!user)
    {
      return res.status(401).json({
        message:"Invalid username"
      })
    }
    await User.updateOne({username:req.body.username},{
      $set:{
        password:req.body.password
      }
    })
    res.status(201).json({
      message:"PASSWORD RESET"
    })
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({
      message:"An unexpected error occured"
    })
  }
})

module.exports=router