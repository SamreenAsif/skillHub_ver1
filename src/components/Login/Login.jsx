import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginStyle.css";

function Login(props) {
  function toggleSignup() {
    document.querySelector(".cont").classList.toggle("s--signup");
  }
  const navigate = useNavigate();
  const goToHomePage = () =>{
    props.updateLogInStatus(true);
    navigate("/" );
  }

  return (
    <div className="cont">
      <div className="form sign-in">
        <label className="login-label">
          <span>Email</span>
          <input className="loginInput" type="email" />
        </label>
        <br></br>
        <label className="login-label">
          <span>Password</span>
          <input className="loginInput" type="password" />
        </label>
        <br></br>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit login-button" onClick={goToHomePage}>
          Sign In
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>
              If you already have an account, just sign in. We've missed you!
            </p>
          </div>
          <div className="img__btn" onClick={toggleSignup}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <label className="login-label">
            <span>Name</span>
            <input className="loginInput" type="text" />
          </label>
          <br></br>
          <label className="login-label">
            <span>Email</span>
            <input className="loginInput" type="email" />
          </label>
          <br></br>
          <label className="login-label">
            <span>Password</span>
            <input className="loginInput" type="password" />
          </label>
          <br></br>
          <button type="button" className="submit login-button"  onClick={goToHomePage}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
