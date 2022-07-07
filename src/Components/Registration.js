import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import "./registration.css";

function Registration() {
  const history = useNavigate();
  const [acname, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password1 == password2) {
      auth
        .createUserWithEmailAndPassword(email, password1)
        .then((auth) => {
          if (auth) {
            history("/");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Password not same");
    }
  };
  return (
    <div className="regiration">
      <Link to="/">
        <img
          className="registration-logo"
          src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png?fit=841%2C240&ssl=1"
        />
      </Link>
      <div className="registration-container">
        <h2>Create Account</h2>
        <form>
          <h5>First Name</h5>
          <input
            type="text"
            value={acname}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Email or mobile phone number</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <h5>Re-Type Password</h5>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button
            type="submit"
            className="createac-button"
            onClick={handleSubmit}
          >
            {" "}
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
