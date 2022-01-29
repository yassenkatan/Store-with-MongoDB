const express=require('express');
const auth=require('../controllers/auth_controller');
const router=express.Router();
const multer=require('multer');
//SignUp
let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Media/Users')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+ '-' +Date.now())
    }
});
let upload=multer({storage:storage});
router.post('/signup',upload.single('User'),auth.signup);

//Login
router.post('/login',auth.login);

//All Users
router.get('/all_users',auth.auth,auth.all_users);

module.exports=router;