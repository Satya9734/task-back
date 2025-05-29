import model from "../db/schema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import env from "dotenv"


env.config()
const login=async(req,res)=>{
    const {email,password}=req.body;
    const isExist=await model.findOne({email:email});
    if(isExist==null){
        return res.status(403).json({message:"user doesnot exist, signin first",success:false});
     }
    const checkPass=await bcrypt.compare(password,isExist.password);
    if(checkPass){
        let token=await jwt.sign(email,process.env.SECRET)
        // res.cookie("token",token)
        res.setHeader("Access-Control-Allow-Origin", "https://tasks-management-eight-xi.vercel.app");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,          
            sameSite: "None",      
            maxAge: 86400000       
          });
        
        res.status(201).json({message:"login successfylly",success:true,name:isExist.name})
    }
    else{
        res.status(201).json({message:"email or password is wrong",success:false})
    }

}

export default login