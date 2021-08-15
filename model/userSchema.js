const mongoose= require('mongoose');
const bcrypt= require('bcryptjs');
const jwt=require('jsonwebtoken');

const userSchema = new mongoose.Schema({

    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },

    phone:
    {
        type: Number,
        required: true
    },
    work:
    {
        type: String,
        required: true
    },

    password:
    {
        type: String,
        required: true
    },

    cpassword:
    {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default:Date.now
    },
    messageUsers:[
        {
            name:
            {
                type: String,
                required: true
            },
            email:
            {
                type: String,
                required: true
            },
        
            phone:
            {
                type: Number,
                required: true
            },
            messageUser: {
                type: String,
                required: true
            }
        }
    ],
    tokens:[
        {
            token: {
                type: String,
                required: true
            }
        }
    ]


}) 

userSchema.pre('save', async function(next){
   
               if(this.isModified('password'))
               {
            this.password= await bcrypt.hash(this.password,12);
            this.cpassword=await bcrypt.hash(this.cpassword,12);
               }
               next();
});

userSchema.methods.generateAuthToken = async function ()
{
    try{
let token = jwt.sign({_id:this._id},process.env.SECRET);
this.tokens = this.tokens.concat({token:token});
await this.save();
return token;
    }
    catch(err)
    {
        console.log(err);
    }
}

//Store Message
userSchema.methods.addMessage = async function(name, email , phone , messageUser)
{
    try{
this.messageUsers = this.messageUsers.concat({name, email , phone , messageUser});
await this.save();
return this.messageUsers;
    }
    catch(error)
    {
        console.log("hiii")
    }
}
const User = mongoose.model('USER',userSchema);
module.exports= User;