import model from "../db/schema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import env from "dotenv"


env.config()
const login=async(req,res)=>{
    const {email,password}=req.body;
    const isExist=await model.findOne({email:email});
    console.log(isExist)
    if(isExist.length==0){
        res.status(403).json({message:"email or password is wrong",success:false});
    }

    const checkPass=await bcrypt.compare(password,isExist.password);
    if(checkPass){
        let token=await jwt.sign(email,process.env.SECRET)
        // res.cookie("token",token)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            maxAge: 86400000
          });
        
        res.status(201).json({message:"login successfylly",success:true,name:isExist.name})
    }
    else{
        res.status(201).json({message:"email or password is wrong",success:false})
    }

}

export default login