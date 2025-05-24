import { Router } from "express";
import { isAuth } from "../middleware/checkAuth.js";
import alltask from "../controler/dashbord/alltask.js";
import addtask from "../controler/dashbord/addtask.js";
import deletetask from "../controler/dashbord/deletetask.js";
import isdone from "../controler/dashbord/isdone.js";

const dashRouters=Router();

dashRouters.post("/alltask",isAuth,alltask)
dashRouters.post("/addtask",isAuth,addtask);
dashRouters.post("/deletetask",isAuth,deletetask);
dashRouters.post("/isdone",isAuth,isdone);




export default dashRouters;