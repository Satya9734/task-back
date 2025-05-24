const islogin=(req,res)=>{
    const token=req.cookies.token;
    if(token==undefined){
        res.json({islogin:false})
    }
    else{
        res.json({islogin:true})
    }
}

export default islogin