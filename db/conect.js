import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const db_url=process.env.DB_URL;
const db=()=>{
    mongoose.connect(db_url).then(()=>{console.log("db conected")})
    .catch((err)=>{
        console.log("there is a error ",err)
    })
}

export default db;