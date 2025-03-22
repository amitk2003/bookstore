import express from 'express'
import User from '../model/User_schema.js';
import authToken from './userAuthtoken.js';
const cart_route = express.Router();
// now we need to buy book means adding book to cart only when user auth token realy exist  
// like favourite route here also we need : which book we are adding means bookid  and id 
cart_route.put("/add-to-cart",authToken, async(req,res)=>{
    try {
        const {bookid,id}=req.headers;
        const userdata= await User.findById(id);
        // we will not add same book multiple times, need to make sure that add to favourite only 1 time
        const isBookInCart= userdata.cart.includes(bookid);
        if(isBookInCart) return res.status(200).json({message:"book is already added to cart"});
        await User.findByIdAndUpdate(id,{$push:{cart:bookid}})
        return res.status(200).json({message:"book added to cart"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        
    }
})
// remove book from cart its not delete from datbase but removedfrom current cart
cart_route.put("/remove-book-from-add-to-cart/:bookid",authToken,async(req,res)=>{
    try {
        const { bookid }=req.params;
        const { id }=req.headers;
        const userdata= await User.findById(id);
        // we will not add same book multiple times, need to make sure that add to favourite only 1 time
        const isBookInCart= userdata.cart.includes(bookid);
        if(isBookInCart) {
            await User.findByIdAndUpdate(id,{$pull:{cart:bookid}});
        }
        
        return res.status(200).json({message:"book remove from cart"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        
    }
});
// get cart of particular user
cart_route.get("/get-user-cart", authToken, async(req,res)=>{
    try {
        
    const {id }=req.headers;
    const userData = await User.findById(id).populate("cart");
    const cart_data=userData.cart.reverse();
    // reverse is used  to get latest books  in cart
    return res.json({
        status:"success",
        data:cart_data,
    })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message:"an error occured"});
    }
    
})
export default cart_route;