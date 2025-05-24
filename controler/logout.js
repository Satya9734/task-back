

const logout=(req,res)=>{
res.clearCookie("token",
    {
        httpOnly: true,
        sameSite: "Lax",
        secure: false
      }
);
res.status(200).json({message:"logout successfylly",success:true});
}

export default logout