import noteModel from "../../db/noteSchema.js"
import jwt from "jsonwebtoken"

const save=async(req,res)=>{
    
    const {id,question,answer}=req.body;
    const token=req.cookies.token;
    const email=jwt.verify(token,process.env.SECRET);

    try{
const insert=await noteModel.create({
    id:id,
    question:question,
    answer:answer,
    email:email
});

return res.status(201).json({data:insert,success:true,message:"note stored successfylly"});
    }
    catch(err){
res.status(500).json({success:false,message:err.message})
    }
}

export default save;

