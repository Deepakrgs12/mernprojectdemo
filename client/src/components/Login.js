import React,{useContext, useState} from 'react';
import {NavLink,useHistory} from "react-router-dom";
import {UserContext} from "../App";
function Login() {

  const {state , dispatch}= useContext(UserContext);

  const history=useHistory()
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');
  const loginuser = async (e)=>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method: "POST",
      headers: {
          "Content-Type":"application/json"
      },
      body: JSON.stringify({
         email ,password
      })
    });
    const data= res.json();
    console.log(data);
    console.log(res.status);
    if(res.status === 422 || !data)
    {
     window.alert("INVALID Credential");
     console.log("error occur");
    }
    else{
      dispatch({type:"USER", payload:true});
        window.alert("Successfully Login");
       console.log("successfully Login");
      history.push("/");
    }
  }
  return (
    <div >
    
    <div style={{backgroundColor:'plum',width:500,height:320,marginLeft:'500px',marginRight:'200px',marginTop:"90px",paddingLeft:'25px',paddingRight:"25px"}}>
        <h1 style={{textAlign:'center'}}>SIGN-IN</h1>
        <form method="POST" className="sign-form" id="sign-form">
      
        <div className="form-group">
            <label htmlFor="email"> Email</label>
            <input type="email" className="form-control" name="email" id="email" autoComplete="off" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Your email"></input>
        </div>
     
        <div className="form-group">
            <label htmlFor="password"> Password</label>
            <input type="password" className="form-control" name="password" id="password" autoComplete="off" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Your Password"></input>
        </div>
    
        <br/>
        <div className="form-group form-button">
            <input type="Submit" name="signin" id="signin" onClick={loginuser} className="btn btn-primary " value="Login"/>
          
        </div>
        </form>
        <NavLink to="/signup">Create an Account</NavLink>
    </div>
  </div>
  );
}

export default Login;
