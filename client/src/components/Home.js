import React, { useEffect,useState}  from 'react';


function Home() {
  
  const [userData, serUserData]=useState({
    name: "",
    email: "",
    phone: "",
    messageUser: "",
   
  
    });
    const [show, setShow]=useState(false);
   
const HomePage= async ()=>{
  try{
    const res = await fetch('/getdata',{
      method: "GET",
      headers: {
       
          "Content-Type":"application/json"
      },
     
      
    });
    const data= await res.json();
    console.log(data);
    serUserData(data);
    setShow(true);
    console.log(userData.phone);
    

    if(!res.status === 200)
    {
      const error = new Error(res.error);
      throw error;
    }
  }catch(err)
  {

    console.log("hii");
  }
}

  useEffect(()=>{
    HomePage();
    },[]);  

  return (
    <div >
        <div style={{textAlign:'center',marginTop:'200px'}}>
            <h1>WELCOME {userData.name}</h1>
            <h1>{show ? 'Welcome Happy To See You Back':'WE ARE MERN DEVELOPER'}</h1>
        </div>
     
    </div>
  );
}

export default Home;
