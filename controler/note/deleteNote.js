import noteModel from "../../db/noteSchema.js";
import jwt from "jsonwebtoken";
const deleteNote=async(req,res)=>{
const {id}=req.body;
  const email= jwt.verify(req.cookies.token,process.env.SECRET);
try{

const dele=await noteModel.deleteOne({id:id});
const notes=await noteModel.find({email:email});
return res.status(200).json({success:true,message:"note deleted successfully",notes:notes})
}
catch(err){
    return res.status(500).json({message:err.message,success:false});
}
}

export default deleteNote;