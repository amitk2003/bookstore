import express from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser"
import connectDB from "./db.js";
// import book_data from "./model/bookmodel.js"
import router from "./route/user.js";
const app=express();
dotenv.config();

const port=process.env.PORT;
connectDB();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
// to access backend url resources
app.get("/",(req,res)=>{
    return res.status(200).send("welcome to book store app");
    // console.log("welcome to book store app");
})
app.use("/api",router);

app.listen(port,()=>{
    console.log(`server connected successfully at port ${port}`)
})