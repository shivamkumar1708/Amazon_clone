import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { auth } from "./Firebase";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history("/");
        } else {
          alert(auth);
        }
      })
      .catch((error) => alert(error.message));
  };
  const regiration = () => {
    history("/registration", { replace: true });
  };
  // const register = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((auth) => {
  //       if (auth) {
  //         history("/");
  //       }
  //     })
  //     .catch((error) => alert(error.message));
  // };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?fit=841%2C240&ssl=1"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email or mobile phone number</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signin-button" onClick={signIn}>
            {" "}
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's clone By Shivam Conditions of Use
          and Privacy Notice.
        </p>
      </div>
      <p className="newtoamazon">New to Amazon ?</p>

      <button className="create-account-button" onClick={regiration}>
        Create your Amazon account
      </button>
    </div>
  );
}

export default Login;
