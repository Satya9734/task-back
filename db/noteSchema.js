import mongoose from "mongoose";

const Schema=mongoose.Schema;

const noteSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const noteModel=mongoose.model("notes",noteSchema);
export default noteModel;