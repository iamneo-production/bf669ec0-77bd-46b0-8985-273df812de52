import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="loginBox">
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "45%",
          }}
        >
          <p className="">
            <h1 style={{ color: "white", fontSize: "60px" }}>
              <strong>Tariff Manager</strong>
            </h1>
          </p>
        </div>
        <center
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <div className="colors">
            <h2 style={{ color: "black", fontSize: "35px" }}>Login</h2>
            <br></br>
            <form method="post">
              <div class="txt_field" id="email">
                <input type="text" required></input>
                <span></span>
                <label>Email or username</label>
              </div>
              <div class="txt_field" id="password">
                <input type="password" required></input>
                <span></span>
                <label>Password</label>
              </div>
              <input type="submit" value="Login" classname="login"></input>
              <div class="signup_link">
                New here?
                <a>
                  <Link to="/signup" id="signupLink">
                    Click to signup
                  </Link>
                </a>
              </div>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Login;
