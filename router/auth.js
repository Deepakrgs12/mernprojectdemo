const express = require('express');
const jwt=require('jsonwebtoken');
const router = express.Router();
const bcrypt= require('bcryptjs');
const authenticate = require('../middleware/authenticate');
require('../db/conn');
const User=require('../model/userSchema')

router.get('/', (req, res) =>{
    res.send("Hello World from the server Router");
});

// router.post('/register', (req, res) =>{
//     const {name, email ,phone,work,password,cpassword }=req.body;
   
//     if(!name || !email || !phone || !work || !password || !cpassword )
//     {
//         return res.status(422).json({error :" Please filled the field Propery"});
//     }
//   User.findOne({email:email})
//   .then((userExists)=>
//   {
//       if(userExists)
//       {
//     return res.status(422).json({error :" Email Already Regestered"});
//       }
//       const user=new User({name, email , phone , work , password , cpassword} );
//       user.save().then(()=>
//       {
//           res.status(201).json({message: "User Registered Successfully"});
//       }).catch((err)=> res.status(500).json({error:"Failed to register"}));
//   }).catch(err => { console.log(err);});

// });
//Async await
router.post('/register', async(req, res) =>{
    const {name, email ,phone,work,password,cpassword }=req.body;
   
    if(!name || !email || !phone || !work || !password || !cpassword )
    {
        return res.status(422).json({error :" Please filled the field Propery"});
    }
    try
    {
     
        const userExists= await User.findOne({email:email})
        if(userExists)
        {
      return res.status(422).json({error :" Email Already Regestered"});
        }
        else if(password != cpassword)
        {
            return res.status(422).json({error :" Password and Confirm Passowrd be Same"});
        }
        const user=new User({name, email , phone , work , password , cpassword} );

       const userRegister= await user.save();

       if(userRegister)
       {
        res.status(201).json({message: "User Registered Successfully"});
       }

 

    }
    catch(err)
    {
        console.log(err);
    }
  
  
});

router.post('/signin',async(req, res) =>{
    const { email, password}=req.body;
   
    if(!email ||  !password)
    {
        return res.status(422).json({error :" Please filled the required Field"});
    }
    try
    {
     
        const logincheck= await User.findOne({email:email});
        if(logincheck)
        {
            const ismatch= await bcrypt.compare(password,logincheck.password);
            const token=  await logincheck.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now()+10000000000),
                httpOnly:true
            });
     
            if(!ismatch)
            {
                return res.status(422).json({error :" Invalid Credentais"});
            }
           
            res.status(201).json({message: "User Signed Successfully"});
        
        }
        else{
            return res.status(422).json({error :" Invalid Credentais"});
        }
       
    }
    catch(err)
    {
        console.log(err);
    }
});



//anout us 
router.get('/about',authenticate, (req, res) =>{
     console.log("Hello About World from the server");
     res.send(req.rootUser);
 });

 router.get('/getdata',authenticate, (req, res) =>{
    console.log("Hello About World from the getdata");
    res.send(req.rootUser);
});

router.post('/contact',authenticate, async (req, res) =>{
    //res.cookie("Test","Deepak");
   // res.send("Hello Contact World from the server");
   try{
    const {name, email ,phone, messageUser}=req.body;
   
    if(!name || !email || !phone || !messageUser )
    {
        return res.status(422).json({error :" Please filled the field"});
        console.log("XYZ");
    }
    const userContact= await User.findOne({_id: req.UserID});

    if(userContact)
    {
        const userMessage = await userContact.addMessage(name, email , phone , messageUser);
        await  userContact.save();
        res.status(201).json({message:" user Contanct Successfully"});
    }

   }
   catch(error)
   {
       console.log(error);
   }
});

router.get('/logout', (req, res) =>{
    console.log("Hello About World from the server");
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send('User logout');
});


module.exports= router;
