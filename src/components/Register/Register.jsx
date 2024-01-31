import React, { useState, useRef } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./index.css";
import { useTheme } from "../ThemeContext";
import { message } from "antd";
function Register() {
  const userRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate()
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validate() {
    if (!userRef.current.value) {
      message.error("Username kiritmadingiz");
      return;
    }
    if (!validateEmail(emailRef.current.value)) {
      message.error("Email kiritmadingiz!");
      return;
    }

    if (!passRef.current.value) {
      message.error("parol kiritmadingiz");
      return;
    }
    if (passRef.current.value.length < 6) {
      message.error("6ta belgi kiriting!");
      return;
    }
    return true;
  }
  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      message.success("Siz ro'yxatdan o'tdingiz!")
      const user = {
        username: userRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value
      }
      fetch('https://strapi-store-server.onrender.com/api/auth/local/register',{
        method: "POST",
        headers:{
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(json => {
        navigate('/login')
      }).catch(err=>{
        console.log(err);
      })
    }
  };

  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className={darkMode ? "" : "black"}>
      <div className=" login-top">
        <div className="card-items register-items">
          <h1>Register</h1>
          <div className="input-gr">
            <label htmlFor="">Username</label>
            <input ref={userRef} type="text" />
            <label htmlFor="">Email</label>
            <input ref={emailRef} type="email" />
            <label htmlFor="">Password</label>
            <input ref={passRef} type="password" />
          </div>
          <div className="btn-gr">
            <button className="btn log" onClick={handleRegister}>
              Register
            </button>
          </div>
          <p>
            Already a member? &nbsp;{" "}
            <Link className="reg" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
