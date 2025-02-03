import mongoose from 'mongoose';
const order= new mongoose.Schema({
    // one user can order one at a time inspite of taking multiple users we will select a user
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user",

    },
    book:{
        type:mongoose.Types.ObjectId,
        ref:"books",
    },
    status:{
        type:String,
        default:"order placed",
        enum:["order placed","out for delivery","delivered successfully","cancelled","return"],
    },
    // timestamps are used to sort order in correct sequences


},
{ timestamps: true}
);
const orders=mongoose.model("order",order)
export default orders;