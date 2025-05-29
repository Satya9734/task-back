import noteModel from "../../db/noteSchema.js";
import jwt from "jsonwebtoken";

const allNote=async(req,res)=>{
    const email= jwt.verify(req.cookies.token,process.env.SECRET);
    
    try{
const alldata=await noteModel.find({email:email});
return res.status(201).json({notes:alldata,success:true})
    }
    catch(err){
return res.status(500).json({success:false,message:err.message});
    }
}

export default allNote;