const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

const UserSchema=new mongoose.Schema({

    fullname:{
        type:String,
        required:true,
        maxlength:20,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        maxlength:50,
        minlength:3,
        unique:true
    },
    password:{
        type:String,
        maxlength:512,
        minlength:8,
        required:true
    },
    passwordConfirm:{
        type:String,
        maxlength:512,
        minlength:8,
        required:true
        },
    country:{
        type:String
        },
    state:{
        type:String
        }
        ,
    address:{
        type:String
        },
    phoneNumber:{
        type:String
        },
    mobileNumber:{
        type:String
        },
    photo:{
        type:String
        }
        ,
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
        },
    token:{
        type:String
        },
        CreatedAt:{
            type:Date,
            default:Date.now()
        }
});

const user=mongoose.model('users',UserSchema);
module.exports=user;