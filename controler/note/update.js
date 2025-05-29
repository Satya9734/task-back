import noteModel from "../../db/noteSchema.js";

const update=async(req,res)=>{
    const {id,question,answer}=req.body;

    try{
        const update=await noteModel.updateOne(
            { id:id}, 
            { $set: { question:question,answer:answer } } 
        );
       return res.status(200).json({message:"note updated successfully",success:true,data:update})
    }
    catch(err){
        return res.status(500).json({message:err.message,success:false});
    }
     
}

export default update;