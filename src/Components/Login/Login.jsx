import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__card">
        <div className="h2 text-center card__header">Login</div>
        <label>Enter Your Email Address</label> <br />
        <input type="text" placeholder="Username/email" /> <br />
        <label>Enter Your Password</label> <br />
        <input type="password" placeholder="Password" /> <br />
        <button type="submit">Login</button>
        <div className="login__card__redirect">
          Don't Have an Account? Click
          <Link
            to="/signup"
            style={{
              color: "#fd8f5f",
              textDecoration: "none",
              padding: "0rem 0.2rem",
            }}
          >
            here
          </Link>
          to signup
        </div>
      </div>
    </div>
  );
};

export default Login;
