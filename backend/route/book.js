import express from "express";
import User from "../model/User_schema.js"
import jwt from "jsonwebtoken"
import authToken from "./userAuthtoken.js";
import book_data from "../model/book.js";
const router=express.Router();

// add book: admin role
// book will added by user or admin so we need authenticatte token
router.post("/add-book",authToken,async(req,res)=>{
    // to check user is admin or normal user
    // need to check whether user or admin is adding book

    try {
        const { id}=req.headers;
        const person=await User.findById(id);
        if(person.role!=='admin'){
            // because update,add options applicable to admin only
            return res.status(400).json({message :"you don't have access to perform admin task"})
        }
        const book= new book_data({
            url:req.body.url,
            title:req.body.title,
            author:req.body.author,
            price:req.body.price,
            desc:req.body.desc,
            language:req.body.language
        });
        await book.save();
        res.status(200).json({message:"books added successfully"})


    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
})














export default router;






