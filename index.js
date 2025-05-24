import express from "express";
import dotenv from "dotenv";
import db from "./db/conect.js";
import model from "./db/schema.js"
import TaskModel from "./db/tasksSchema.js";
import bodyParser from "body-parser";
import cors from "cors"
import router from "./router/authRouter.js";
import cookie_parser from "cookie-parser"
import dashRouters from "./router/dashRouts.js";
//create app
const app=express();
dotenv.config()


const port=process.env.PORT || 3000;
//conect db
db();

//middleware
app.use(bodyParser.json())
app.use(cors({
    origin: "https://tasks-management-eight-xi.vercel.app", 
    credentials: true
  }));
app.use(express.json());
app.use(cookie_parser())

//router middleware
app.use("/user",router)
app.use("/dashbord",dashRouters);


//routers
app.get("/",(req,res)=>{
    res.send("welcome to my web page");
    
})
app.get("/data",async(req,res)=>{
   try{
    const data=model.find({});
    res.json(data)
   }catch(err){
    res.send("not bro ")
   }
    
})


app.listen(port,()=>{
    console.log("app start at ",port);
})