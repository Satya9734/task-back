import exp from "express";
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
const app=exp();
dotenv.config()


const port=process.env.PORT || 3000;
//conect db
db();

//middleware
app.use(bodyParser.json())
app.use(cors({
    // origin:"https://tasks-management-eight-xi.vercel.app",
    origin:"*",
    credentials:true
}))
app.use(exp.json());
app.use(cookie_parser())

//router middleware
app.use("/user",router)
app.use("/dashbord",dashRouters);


//routers
app.get("/",(req,res)=>{
    res.send("welcome to my web page");
    
})


app.listen(port,()=>{
    console.log("app start at ",port);
})