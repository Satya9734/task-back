import TaskModel from "../../db/tasksSchema.js"
import jwt from "jsonwebtoken";
 const alltask=async(req,res)=>{
    try{
        const token=req.cookies.token;
        const email=jwt.verify(token,process.env.SECRET)
        
        const alldata=await TaskModel.find({email:email});
        res.status(201).json({data:alldata,success:true});
    }
    catch(err){
        res.status(400).json({messgae:"there was some issue",err:err,success:false});
    }
}

export default alltask