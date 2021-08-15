import React, { useEffect,useState,useContext}  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {UserContext} from "../App";
import {NavLink} from "react-router-dom";
function Navbar() {
  const {state , dispatch}= useContext(UserContext);
  const RenderMenu =()=>{
    if(state)
    {
      return(
        <>
         <li className="nav-item ">
        <NavLink className="nav-link" to ="/" style={{marginLeft:'1000px'}}>Home</NavLink>
      </li>
     
    
      <li className="nav-item">
        <NavLink className="nav-link" to ="/contact">Contact</NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-link" to ="/about">About</NavLink>
      </li>
     
    <li className="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
      
        </>
      )
    }
    else{
      return(
        <>
         <li className="nav-item ">
        <NavLink className="nav-link" to ="/" style={{marginLeft:'1000px'}}>Home</NavLink>
      </li>
     
    
      <li className="nav-item">
        <NavLink className="nav-link" to ="/contact">Contact</NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-link" to ="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to= "/login">Login</NavLink>
      </li>
  
      
        </>
      )
    }

  }
//   const [userData, serUserData]=useState({
//     name: "",
//     email: "",
//     phone: "",
//     messageUser: "",
   
  
//     });
//     const [show, setShow]=useState(false);
   
// const NavPage= async ()=>{
//   try{
//     const res = await fetch('/getdata',{
//       method: "GET",
//       headers: {
       
//           "Content-Type":"application/json"
//       },
     
      
//     });
//     const data= await res.json();
//      console.log(data);
//     serUserData(data);
//     setShow(true);
//     console.log(userData.phone);
    

//     if(!res.status === 200)
//     {
//       const error = new Error(res.error);
//       throw error;
//     }
//   }catch(err)
//   {

//     console.log("hii");
//   }
// }

//   useEffect(()=>{
//     NavPage();
//     },[]);  

  return (
    < >
      
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#92a8d1'}}>
  <a className="navbar-brand" href="#" style={{marginLeft:'15px'}}>TECHCRYPO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
    
       
     
     <RenderMenu/>
    
      </ul>
   
  
    
  </div>
</nav>
    </>
  );
}

export default Navbar;
