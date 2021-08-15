const mongoose= require('mongoose');
const dotenv= require('dotenv');
const express = require('express');
const app= express();
const cookieParser= require('cookie-parser');
app.use(cookieParser());
dotenv.config({path: './config.env'});

const port= process.env.PORT || 4000;
require('./db/conn');


const User=require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));





// app.get('/', (req, res) =>{
//     res.send("Hello World from the server App");
// });

// app.get('/about', (req, res) =>{
//     res.send("Hello About World from the server");
// });

// app.get('/contact', (req, res) =>{
//     //res.cookie("Test","Deepak");
//     res.send("Hello Contact World from the server");
// });

// app.get('/signin', (req, res) =>{
//     res.send("Hello Login World from the server");
// });

// app.get('/register', (req, res) =>{
//     res.send("Hello Register World from the server");
// });

if(process.env.NODE_ENV = "production")
{
    app.use(express.static("client/build"));
}

app.listen(port, () =>{
console.log(port+" Server Running");
})
