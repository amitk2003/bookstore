import mongoose from 'mongoose';
const user= new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    // if you want to update password via email
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
    
    address:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://img.freepik.com/premium-vector/user-profile-person-avatar-identity-login-icon-vector_1277826-995.jpg"
    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin'],
    },
    favourites:[
        { type:mongoose.Types.ObjectId,
            ref:"books",
        },
    ],
    cart:[
        { type:mongoose.Types.ObjectId,
            ref:"books",
        },
    ],
    order:[
        { type:mongoose.Types.ObjectId,
            ref:"order",
        },
    ],

},
{timestamps:true}
);
const User=mongoose.model('user_data',user,'user_data')
export default User;