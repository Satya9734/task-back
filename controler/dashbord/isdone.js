import TaskModel from "../../db/tasksSchema.js";
import jwt  from "jsonwebtoken";
const isdone=async(req,res)=>{
    try{
const {id,status}=req.body;
 const token=req.cookies.token;
const email=jwt.verify(token,process.env.SECRET)
const result = await TaskModel.updateOne(
    { id:id}, 
    { $set: { isdone: !status } } 
  );


const alldata=await TaskModel.find({email:email});
console.log(alldata)
res.status(201).json({data:alldata,success:true});
    }
    catch(err){
        res.status(400).json({messgae:"there was some issue",err:err,success:false});
    }
}

export default isdone