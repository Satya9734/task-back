const isAuth=(req,res,next)=>{
    const token=req.cookies.token;
    if(token==undefined){
        res.status(401).json({message:"fist you have to login.",success:false});
    }
    next();
}

export {isAuth}