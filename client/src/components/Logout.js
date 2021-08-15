import React, { useEffect,useState,useContext}  from 'react';
import {useHistory} from "react-router-dom";
import {UserContext} from "../App";
function Logout() {
    const {state , dispatch}= useContext(UserContext);
    const history=useHistory();
  useEffect(()=> {
fetch('/logout',{
    method: "GET",
    headers: {
      Accept: "application/json",
        "Content-Type":"application/json"
    },
    credentias: "include",
     
}).then((res)=>{
    dispatch({type:"USER", payload:false});
    history.push('/login')
    if(res.status !== 200)
    {
        const error = new Error(res.error);
        throw error;
    }

}).catch((err)=>{
    console.log(err);
});
  });
    
    return (
      <div >
          <div style={{textAlign:'center',marginTop:'200px'}}>
              <h1>WELCOME </h1>
            
          </div>
       
      </div>
    );
  }
  
  export default Logout;