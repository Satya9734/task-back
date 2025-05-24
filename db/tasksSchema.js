import mongoose from "mongoose";

const schema=mongoose.Schema

const taskSchema=new schema({
   
    email:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    isdone:{
        type:Boolean,
        required:true,
        default:false
    },
    id:{
        type:String,
        required:true
    }
})

const TaskModel=mongoose.model("tasks",taskSchema);
export default TaskModel;