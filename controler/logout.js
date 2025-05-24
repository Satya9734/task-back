

const logout=(req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "https://tasks-management-eight-xi.vercel.app");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "None",
    secure: true     
  });

res.status(200).json({message:"logout successfylly",success:true});
}

export default logout