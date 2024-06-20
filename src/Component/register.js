import React from "react";

import { Link } from "react-router-dom";
import Nav from "./navbar";
import "./reg.css";


function reg() {
  
  return (
    <>
    
  
    <div>
      <Nav />
      
      <div style={{ paddingTop: "120px", display: "flex", justifyContent: "center" }}>
        <div class="wrap">
          
          
        <div class="log">
        
          <form action="">
            <h1>REGISTER</h1>
            <div class="userinfo">
              <input type="text" placeholder="Username" />
              <br />
              <input type="password" placeholder="Password" />
              <br />
              <input type="password" placeholder="Confirm Password" />
              <br />
            </div>

            <div class="usertypes">
              <label>User Type:</label>
              <select>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            <br />
            <div class="requirements">
              <div className="radion">
              <label>Gender of Doctor:</label>
              <input type="checkbox" name="gender" value="male" /> Male
              <input type="checkbox" name="gender" value="female" /> Female
              <input type="checkbox" name="gender" value="other" /> Other
              <br />
              </div>
              <br />
              <br />
             
              
              <button type="button">Register</button>
            </div>
          </form>

          <br />
          <div class="link">
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </div>
          
      
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default reg
