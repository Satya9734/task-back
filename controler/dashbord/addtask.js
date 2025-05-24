import TaskModel from "../../db/tasksSchema.js";
import jwt from "jsonwebtoken";
const addtask=async(req,res)=>{
const {title,task,id}=req.body;
const token=req.cookies.token;
const email=jwt.verify(token,process.env.SECRET)
try{

const insert=await TaskModel.create({
    email:email,
    title:title,
    task:task,
    id:id
});
const alldata=await TaskModel.find({});
res.status(201).json({data:alldata,success:true});
}
catch(err){
res.status(400).json({messgae:"there was an in data",err:err,success:false});
}
}

export default addtask;