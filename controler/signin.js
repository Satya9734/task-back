import model from "../db/schema.js"
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import jwt from "jsonwebtoken"

dotenv.config();
const signin=async(req,res)=>{


    try{
    const {name,email,password}=req.body;

   const isExist=await model.find({email:email});
   if(isExist.length!=0){
    return res.json({message:"user alredy exist , you can login ",success:false}).status(409);
   }

   const hash=await bcrypt.hash(password,10);
   const data_insert=await model.create({
    name:name,
    email:email,
    password:hash
   });
   const token=jwt.sign(email,process.env.SECRET);
res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 86400000
  });
   res.status(201).json({message:"you are successfully signin",success:true,name:name});

}catch(err){
res.json({messgae:"there was an error ", success:false})
}
    }
    
    export default signin