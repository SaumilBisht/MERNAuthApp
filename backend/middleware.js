const jwt=require("jsonwebtoken")
const pass=require("./secret")

const authMiddleware=(req,res,next)=>{
  const auth=req.headers.authorization;

  if(!auth || !auth.startsWith("Bearer "))
  {
    return res.status(403).json({
      message:"Token missing"
    })
  }
  const token=auth.split(" ")[1]

  try
  {
    const info=jwt.verify(token,pass)

    req.userId=info.userId;   //user id jwt mein user ka _id daala tha ab hum req mein bhi vhi daal rhe

    next();
  }
  catch(err)
  {
    return res.status(403).json({
      message:"JWT didn't verify"
    })
  }
}

module.exports=authMiddleware