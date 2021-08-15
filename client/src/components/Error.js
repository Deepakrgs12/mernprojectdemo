import React  from 'react';
import {NavLink} from "react-router-dom";

function Error() {
  return (
    <div >
        <div style={{textAlign:'center',marginTop:'200px'}}>
            <h1>404</h1>
            <h1>WE ARE SORRY PAGE NOT FOUND</h1>
            <NavLink to = "/"> Back To Home Page </NavLink>
        </div>
     
    </div>
  );
}

export default Error;
