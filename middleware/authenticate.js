const jwt=require('jsonwebtoken');
require('../db/conn');
const User= require("../model/userSchema");
const authenticate = async(req , res ,next ) =>
{
try{

const token = req.cookies.jwtoken;
console.log("Below check token");
console.log(token);
const verifyToken = jwt.verify(token, process.env.SECRET);
console.log(verifyToken._id);
const rootUser= await User.findOne({ _id: verifyToken._id });
console.log(rootUser);
if(!rootUser){
    throw new Error('User not Found');
}
req.token = token;
req.rootUser=rootUser;
req.UserID=rootUser._id;
next();
}
catch(err)
{
    res.status(401).send('Unauthorise : No token found');
    console.log(err);
}
}
module.exports=authenticate;