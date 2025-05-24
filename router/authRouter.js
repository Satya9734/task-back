import { Router } from "express";
import login from "../controler/login.js"
import signin from "../controler/signin.js";
import { loginValidate,logOutValidate,signinValidate } from "../middleware/validate.js";
import logout from "../controler/logout.js";
import islogin from "../controler/dashbord/islogin.js";
const router=Router();

router.get("/",(req,res)=>{
    res.send("welcome to user page");
})
router.post("/signin",signinValidate,signin)

router.post("/login",loginValidate,login);

router.post("/logout",logOutValidate,logout);

router.post("/islogin",islogin);
export default router