import React, { useState } from "react";
import Login from "./login";
 // Import CSS file for styling


function Nav() {
  const [showModel, setShowModel] = useState(false);

  return (
    <div>
      <div className={`container ${showModel ? "blur" : ""}`}>
        <nav>
          <div className="nav__logo">DIGICARE❤️</div>
          <ul className="nav__links">
            <li className="link"><a href="/">Home</a></li>
            <li className="link"><a href="/Appoint">Appointment Booking</a></li>
            <li className="link"><a href="/">About Us</a></li>
            <li className="link"><a href="/">Pages</a></li>
            <li className="link"><a href="/">Consult</a></li>
            <li className="link"><a href="/">Contact</a></li>
          </ul>
          <button onClick={() => setShowModel(true)} className="btn">Register Now</button>
        </nav>
      </div>
      {showModel && (
        <div className="modal">
          <Login />
        </div>
      )}
    </div>
  );
}

export default Nav;
