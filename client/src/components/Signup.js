import React,{useState}  from 'react';
import {NavLink,useHistory} from "react-router-dom";

function Signup() {
    const history=useHistory()
const[user,setUser]= useState({
name: "",
email: "",
phone: "",
work: "",
password: "",
cpassword: ""
});

let name, value;
const handleInputs =(e)=>{
console.log(e.target.value);
name=e.target.name;
value=e.target.value;

setUser({...user,[name]:value});
}
const PostData = async (e)=> {
    console.log("hjhjhjhk")
    e.preventDefault();
    const {name, email ,phone,work,password,cpassword } = user;
    const res= await fetch("/register",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name, email ,phone,work,password,cpassword
        })
    });
    const data = await res.json();
    if(res.status === 422 || !data)
    {
window.alert("INVALID REGISTRATION");
console.log("error occur");
    }
    else{
        window.alert("Successfully REGISTRATION");
console.log("successfully Registration");
history.push("/login");
    }
}

  return (
    <div >
    
      <div style={{backgroundColor:'lightskyblue',width:500,height:520,marginLeft:'500px',marginRight:'200px',marginTop:"70px",paddingLeft:'25px',paddingRight:"25px"}}>
          <h1 style={{textAlign:'center'}}>SIGNUP</h1>
          <form method="POST" className="register-form" id="register-form">
          <div className="form-group">
              <label htmlFor="name"> Name</label>
              <input type="text" className="form-control" name="name" id="name" autoComplete="off"
              value={user.name} onChange={handleInputs}
               placeholder="Your name"></input>
          </div>
          <div className="form-group">
              <label htmlFor="email"> Email</label>
              <input type="email" className="form-control" name="email" id="email" autoComplete="off" 
              value={user.email} onChange={handleInputs}
              placeholder="Your email"></input>
          </div>
          <div className="form-group">
              <label htmlFor="phone"> Phone</label>
              <input type="number" className="form-control" name="phone" id="phone" autoComplete="off" 
              value={user.phone} onChange={handleInputs}
              placeholder="Your phone number"></input>
          </div>
          <div className="form-group">
              <label htmlFor="work"> Work</label>
              <input type="text" className="form-control" name="work" id="work" autoComplete="off" 
              value={user.work} onChange={handleInputs}
              placeholder="Your Profession"></input>
          </div>
          <div className="form-group">
              <label htmlFor="password"> Password</label>
              <input type="password" className="form-control" name="password" id="password" autoComplete="off" 
              value={user.password} onChange={handleInputs}
              placeholder="Your Password"></input>
          </div>
          <div className="form-group">
              <label htmlFor="cpassword"> Confirm Password</label>
              <input type="password" className="form-control" name="cpassword" id="cpassword" autoComplete="off"
              value={user.cpassword} onChange={handleInputs}
              placeholder="Your Confirn Password"></input>
          </div>
          <br/>
          <div className="form-group form-button">
              <input type="Submit" name="signup" id="signup" onClick={PostData } className="btn btn-primary " value="Register"/>
            
          </div>
          </form>
          <NavLink to="/login">I am already register</NavLink>
      </div>
    </div>
  );
}

export default Signup;
