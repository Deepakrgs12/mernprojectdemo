import React, { useEffect,useState}  from 'react';


function Contact() {

  
  const [userData, serUserData]=useState({
    name: "",
    email: "",
    phone: "",
    messageUser: "",
    messageScreen: ""
  
    });
   
const contactPage= async ()=>{
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
    contactPage();
    },[]);

    const handleInputs =(e)=>
    {
      serUserData({...userData, messageScreen:""});
      const name= e.target.name;
      const value= e.target.value;
      serUserData({...userData,[name]:value});
      console.log(userData.messageUser);
      console.log(userData.name);
      console.log(userData.email);
      console.log(userData.phone);
    }

    const PostData = async (e)=> {
      console.log("hjhjhjhk")
      e.preventDefault();
      const {name, email ,phone,messageUser} = userData;
      const res= await fetch("/contact",{
          method: "POST",
          headers: {
              "Content-Type":"application/json"
          },
          body: JSON.stringify({
              name, email ,phone,messageUser
          })
      });
      const data = await res.json();
      console.log(data.message)
      const v = data.message;
      
      console.log(res);

      if(res.status === 422 || !data)
      {
       window.alert("Not Able to send message");
       console.log("error occur");
      }
      else{
          window.alert("Successfully Send Message");
  console.log("successfully send");
  serUserData({...userData, messageUser:"",messageScreen:v});
 
      }
  }
    

  return (
    <>
   <div class="container" style={{marginTop:'80px'}}>
   <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Phone</h5>
        <p class="card-text">+91 8192955672</p>
       
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Email</h5>
        <p class="card-text">deepakrgs14@gmail.com</p>
        
      </div>
    </div>
  </div>

  <div class="col-sm-4">
      
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Address</h5>
        <p class="card-text">Kanpur, Uttar Pradesh</p>
        
      </div>
    </div>
  </div>
</div>
</div>



<div style={{backgroundColor:'pink',width:725,height:320,marginLeft:'450px',marginRight:'200px',marginTop:"90px",paddingLeft:'25px',paddingRight:"25px"}}>
<h1><span>{userData.messageScreen}</span></h1>
        <h1>Get In Touch</h1>
     <form method="POST">
        <div class="container" style={{marginTop:'30px'}}>
   <div class="row">
  <div class="col-sm-4">
        
  <div className="form-group">
            
            <input type="text" className="form-control" name="name" id="name" autoComplete="off" value={userData.name}  onChange={handleInputs} placeholder="Your name" readOnly></input>
        </div>
  </div>
  <div class="col-sm-4">
  <div className="form-group">
            
              <input style={{width:210}}type="email" className="form-control" name="email" id="email" autoComplete="off"  value={userData.email}  onChange={handleInputs} placeholder="Your email" readOnly></input>
          </div>
  </div>
<br/><br/><br/>
  <div class="col-sm-4">
  <div className="form-group">
              
              <input type="number" className="form-control" name="phone" id="phone" autoComplete="off"  value={userData.phone}  onChange={handleInputs} placeholder="Your phone" readOnly></input>
          </div>
  </div>
</div>
</div>
<div style={{marginTop:"20px"}}>
<textarea style={{width:530,marginLeft:"13px"}} name="messageUser" id="messageUser" value={userData.messageUser} onChange={handleInputs} required></textarea>
</div>

<div className="form-group form-button">
            <input type="Submit" name="signin" id="signin" onClick={PostData } className="btn btn-primary " value="Send"/>
          
        </div>
</form>
    </div>
    </>
  );
}

export default Contact;
