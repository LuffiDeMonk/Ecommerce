import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.scss";

const SignUp = () => {
  return (
    <div className="login">
      <div className="login__card">
        <div className="h2 text-center card__header">SignUp</div>
        <label>Enter Your Email Address</label> <br />
        <input type="text" placeholder="Username/email" /> <br />
        <label>Enter Your Password</label> <br />
        <input type="password" placeholder="Password" /> <br />
        <label>Confirm Your Password</label> <br />
        <input type="password" placeholder="Confirm Password" /> <br />
        <button type="submit">Sign Up</button>
        <div className="login__card__redirect">
          Already a user? Click
          <Link
            to="/login"
            style={{
              color: "#fd8f5f",
              textDecoration: "none",
              padding: "0rem 0.2rem",
            }}
          >
            here
          </Link>
          to login
        </div>
      </div>
    </div>
  );
};

export default SignUp;
