import joi from "joi"
const signinValidate=(req,res,next)=>{
const schema=joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().email().required(),
    password:joi.string().min(4).max(30).required(),
})
const {error}=schema.validate(req.body);
if(error){
    console.log(error)
    return res.status(400).json({message:"invalid information corect it",error})
}
next();

}


const loginValidate=(req,res,next)=>{
    console.log(req.body)
const schema=joi.object({
    
    email:joi.string().email().required(),
    password:joi.string().min(4).max(30).required(),
})
const {error}=schema.validate(req.body);
if(error){
   return res.status(400).json({message:"invalid information corect it",error})
}
else{

    next();
}

}

const logOutValidate=(req,res,next)=>{
let token=req.cookies.token;
console.log("tokenn",token)
if(token==undefined){
    res.status(401).json({message:"you should login first ",success:false})
}
else{
   next();
}
}

export {signinValidate,loginValidate,logOutValidate}
