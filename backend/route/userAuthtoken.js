import jwt from "jsonwebtoken"
const authToken=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1];
    // bearer token
    if(token==null){
        return res.status(401).json({message:"Authentication Token Required"});
    }
    jwt.verify(token,"bookstore234",(err,user)=>{
        if(err) return res.status(403).json({message: "Token expired please Login again"});
        req.user=user;
        next();
    });
};
export default authToken;