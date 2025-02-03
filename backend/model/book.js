import mongoose from 'mongoose';
const book= new mongoose.Schema({
url:{
    type:string,
    required:true,
},
title:{
    type:String,
    required:true,
},
author:{
    type:String,
    required:true,
},
price:{
    type:Number,
    required:true,
},
desc:{
    type:String,
    required:true,

},
language:{
    type:String,
    required:true,
},



},
{ timestamps: true}
);
const book_data=mongoose.model("books",book);
export default book_data;