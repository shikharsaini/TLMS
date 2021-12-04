import React, { Fragment } from "react";
import { useRef } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./SignUp.css";
const SignUp = () => {
  const emailValueRef = useRef();
  // const [email, setEmail] = useState("");
  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  //   const val = email.substring(1, 3);
  //   localStorage.setItem("email", JSON.stringify(val));
  // };

  const history = useNavigate();
  const redirect = () => {
    const val = emailValueRef.current.value.substring(1, 3);
    localStorage.setItem("email", JSON.stringify(val));
    history("/orders");
  };
  return (
    <Fragment>
      <div className="container">
        <div className="left-section">
          <div className="header">
            <h1 className="animation a1">
              Thapar Laundry Management System (TLMS)
            </h1>
            <h3 className="animation a1">Welcome !</h3>
            <h4 className="animation a2">
              Sign Up for entering your membership dashboard.
            </h4>
          </div>
          <div className="form">
            <input
              id="t1"
              type="text"
              className="form-field animation a3"
              placeholder="Name"
            />
            <input
              id="t2"
              type="email"
              className="form-field animation a3"
              ref={emailValueRef}
              // value={email}
              // onChange={emailHandler}
              placeholder="Email"
            />
            <input
              id="t3"
              type="password"
              className="form-field animation a4"
              placeholder="Password"
            />
            <input
              id="t4"
              type="password"
              className="form-field animation a4"
              placeholder="Confirm Password"
            />
            {/* <p class="animation a5"><a href="#">Forgot Password</a></p> */}
            {/* <button id="t5" class="sign animation a6">Sign Up</button> */}
            <button
              id="t5"
              className="btn sign animation a6"
              onClick={redirect}
            >
              {/* type="submit" */}
              <Link to="/orders">Create Account</Link>
            </button>
            {/* <p class="animation a5"><a href="#"></a></p> */}
            <p className="animation a7">
              <Link to="/login">Already a Member? Log In</Link>
            </p>
            {/* <button class="animation a6">SIGN-UP</button> */}
          </div>
        </div>
        <div className="right-section" />
      </div>
    </Fragment>
  );
};
export default SignUp;
