import React, { useEffect,useState}  from 'react';
import {useHistory} from "react-router-dom";


function About() {
  const history=useHistory();
  const [userData, serUserData]=useState({
    name: "",
    email: "",
    phone: "",
    work: "",
  
    });
const callAboutPage= async ()=>{
  try{
    const res = await fetch('/about',{
      method: "GET",
      headers: {
        Accept: "application/json",
          "Content-Type":"application/json"
      },
      credentias: "include",
      
    });
    const data= await res.json();
    console.log(data);
    serUserData(data);
    console.log(userData.phone);

    if(!res.status === 200)
    {
      const error = new Error(res.error);
      throw error;
    }
  }catch(err)
  {
history.push('/login');
    console.log("hii");
  }
}

  useEffect(()=>{
    callAboutPage();
    },[]);

  return (
    <div >
     
   
      <div style={{backgroundColor:'skyblue',width:500,height:320,marginLeft:'500px',marginRight:'200px',marginTop:"90px",paddingLeft:'25px',paddingRight:"25px"}}>
        <h1 style={{textAlign:'center'}}>About US{userData.name}</h1>
        <form method="GET">
      
        <div className="form-group">
            <label htmlFor="email"> Email</label><h5><span>{userData.email}</span></h5>
            {/* <input type="email" className="form-control" name="email" id="email" autoComplete="off" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Your email"></input> */}
        </div>
     
        <div className="form-group">
            <label htmlFor="password"> Name</label><h5>{userData.name}</h5>
            {/* <input type="password" className="form-control" name="password" id="password" autoComplete="off" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Your Password"></input> */}
        </div>
        <div className="form-group">
            <label htmlFor="password"> Phone Number</label><h5>{userData.phone}</h5>
            {/* <input type="password" className="form-control" name="password" id="password" autoComplete="off" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Your Password"></input> */}
        </div>
        <div className="form-group">
            <label htmlFor="password"> Work</label><h5>{userData.work}</h5>
            {/* <input type="password" className="form-control" name="password" id="password" autoComplete="off" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Your Password"></input> */}
        </div>
      
        </form>
        {/* <NavLink to="/signup">Create an Account</NavLink> */}
    </div>
     
    </div>
  );
}

export default About;
