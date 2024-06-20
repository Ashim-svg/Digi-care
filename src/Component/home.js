import React from "react";
import Nav from "./navbar";
import imageSrc from "./operation-1807543.jpg";
import img from "./images/eye.png";
import teeth from "./images/clean.png";
import heart from "./images/heart.png";
import brain from "./images/design-thinking.png";
import body from "./images/healthy-life.png";
import hos from "./images/bphk.jpg";
import hos1 from "./images/bir.jpg";
import hos2 from "./images/nov.jpeg";
import hos3 from "./images/til.jpeg";
import pac from "./images/8791958.jpg";
import pac1 from "./images/10461028.jpg";
import pac2 from "./images/ne.jpg";
import pac3 from "./images/collection_of_cartoon_brain_characters_having_creative_idea_studying_and_reading_book.jpg";


export default function Home() {
  return (
    
    <>
    <Nav/>
    
    <div>
    <div style={{ paddingTop: "100px" }}>
      <div className="quick-medical-services">
        <header className="header">
          <div className="content">
            <h1>
              <span>Get Quick</span>
              <br />
              Medical Services
            </h1>
            <p>
              In today's fast-paced world, access to prompt and efficient
              medical services is of paramount importance. When faced with a
              medical emergency or seeking immediate medical attention, the
              ability to receive quick medical services can significantly impact
              the outcome of a situation.
            </p>
            <button className="btn">Get Services</button>
          </div>
        </header>
      </div>
      <div className="image">
        <img src={imageSrc} alt="image" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="top">Top-searched specialties</h1>
      <div className="bord">
        <div className="specialties">
          <div className="specialty">
            <a href="/"><img src={img} alt="Icon 1" /></a> 
            <p>Ophthalmology</p>
          </div>
          <div className="specialty">
            <a href="/"><img src={teeth} alt="Icon 2" /></a>
            <p>Dentistry </p>
          </div>
          <div className="specialty">
            <a href="/"><img src={heart} alt="Icon 3" /></a>
            <p>Cardiology</p>
          </div>
          <div className="specialty">
            <a href="/"><img src={brain} alt="Icon 4" /></a>
            <p> Psychiatrist</p>
          </div>
          <div className="specialty">
            <a href="/"><img src={body} alt="Icon 5" /></a>
            <p>physician</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="main-container">
        <h1>Why DigiCare?🩺</h1>
        <div class="box-container">
          <div class="box">
            <div class="column-left">
              <h2>Nepal's first online healthcare service provider</h2>
              <p>DigiCare is Nepal's first online healthcare service provider company aimed to make healthcare services easy, fast and affordable.</p>
            </div>
            <div class="column-right">
              <h2>Excellent Customer Service</h2>
              <p>Eveready Customer service Team at service to guide users 24/7.</p>
            </div>
          </div>
          <div class="box">
            <div class="column-left">
              <h2>Safest online healthcare platform</h2>
              <p>Safety of your information is our top priority. User's information on Digicare is highly confidential</p>
            </div>
            <div class="column-right">
              <h2>Trusted by thousands</h2>
              <p>Thousands of users from across the country have benefitted from our services</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="card-container">
  <div class="card">
    <img src={hos} alt="Image"/>
    <div class="container">
      <h4><b>B.P. Koirala Institute of Health Sciences</b></h4>
      <p>Book Now!</p>
    </div>
  </div>
  <div class="card">
    <img src={hos1} alt="Image"/>
    <div class="container">
      <h4><b>Bir Hospital - वीर अस्पताल</b></h4>
      <p>Book Now!</p>
    </div>
  </div>
  <div class="card">
    <img src={hos2} alt="Image"/>
    <div class="container">
      <h4><b>Nobel Medical College</b></h4>
      <p>Book Now!</p>
    </div>
  </div>
  <div class="card">
    <img src={hos3} alt="Image"/>
    <div class="container">
      <h4><b>Tilganga Institute of Ophthalmology</b></h4>
      <p>Book Now!</p>
    </div>
  </div>
</div>

      <br />
      <br />
      <div class="whole">
    <h1>Buy Health Packages</h1>
    <div class="packages-container">
            <div class="package">
            <img src={pac} alt="Icon 1" />
                <h2>Bone & Joint Checkup Package</h2>
                <button>View Packages</button>
            </div>
        
      
        <div class="package">
        <img src={pac1} alt="Icon 1" />
          <h2>Cardiac Checkup Package</h2>
          <button>View Packages</button>
      </div>
     
      <div class="package">
      <img src={pac2} alt="Icon 1" />
        <h2>Nose & Ear Package</h2>
        <button>View Packages</button>
    </div>
    <div class="package">
    <img src={pac3} alt="Icon 1" />
      <h2>Eyes & Brain Package</h2>
      <button>View Packages</button>
  </div>
    </div>
    
   
  </div>
  <br />
  <br />
  <div>
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-section contact">
            <h3>Contact Us:</h3>
            <p>Email: <a href="mailto:info@digicare.com">info@digicare.com</a></p>
            <p>Phone: 1-800-555-1234</p>
          </div>
          <div class="footer-section links">
            <h3>Quick Links:</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-section social">
            <h3>Connect with Us:</h3>
            <div class="social-icons">
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Copyright © 2024 Digi Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
    </div>
    </>
  );
}
