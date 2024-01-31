import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { useTheme } from "../ThemeContext";
import { message } from "antd";
function Login() {
  const { darkMode, toggleDarkMode } = useTheme();
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validate() {
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
  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = {
        identifier: emailRef.current.value,
        password: passRef.current.value,
      };
      fetch('https://strapi-store-server.onrender.com/api/auth/local', {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((json) => {
          document.cookie = `token=Bearer ${json.jwt}`;
          localStorage.setItem('user', JSON.stringify(json.user))
          message.success("Muvaffaqiyatli qo'shildi")
          navigate('/')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className={darkMode ? "" : "black"}>
      <div className=" login-top">
        <div className="card-items">
          <h1>Login</h1>
          <div className="input-gr">
            <label htmlFor="">Email</label>
            <input ref={emailRef} type="email" />
            <label htmlFor="">Password</label>
            <input ref={passRef} type="password" />
          </div>
          <div className="btn-gr">
            <button onClick={handleLogin} className="btn log">
              Login
            </button>
            <button className="btn gue">Guest user</button>
          </div>
          <p>
            Not a member yet? &nbsp;{" "}
            <Link className="reg" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
