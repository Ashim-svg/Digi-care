
import { Link } from "react-router-dom";


export default function Login() {
  
  return (
    
    <>
      <div>
        <div className="all">
          <div className="log">
            <form action="">
              <h1></h1>
              <input type="text" placeholder="Username" />
            </form>
          </div>
          <br />
          <div className="IN">
            <form action="">
              <input type="password" placeholder="Password" />
            </form>
          </div>
          <br />
          <div className="forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/">Forget Password ?</a>
          </div>
          <br />
          <div className="btnn">
            <button onClick={() => console.log("Log In")}>Log In</button>
          </div>
          <br />
          <div className="link">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

