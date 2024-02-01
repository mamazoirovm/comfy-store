import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { useTheme } from "../ThemeContext";
function Navbar() {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();
  const [person, setPerson] = useState({});
  const [savedItems, setSavedItems] = useState({});

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setPerson(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("item"));
    if (item) {
      setSavedItems(item);
    } else {
      setSavedItems({});
    }
  }, []);

  const handleLogOut = () => {
    document.cookie = "token=";
    localStorage.removeItem("user");
    setPerson({});
  };

  return (
    <div className={darkMode ? "" : "black"}>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <header className="header">
          <div className="top">
            <div className="container top-cont">
              <div className="top-content">
                {!person.username && (
                  <Link className="guest" to="/login">
                    Sign in / Guest
                  </Link>
                )}
                {!person.username && (
                  <Link className="guest" to="/register">
                    Create Account
                  </Link>
                )}
                {person.username && (
                  <Link className="guest" to="/">
                    {person.username}
                  </Link>
                )}
                {person.username && (
                  <Link onClick={handleLogOut} className="guest" to="/">
                    LogOut
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="hero">
            <div className="container">
              <nav className="nav">
                <div className="logo">
                  <div className="logo-div">C</div>
                </div>
                <ul>
                  <li className="list-item">
                    <Link
                      className={`links${
                        location.pathname === "/" ? " aktiv" : ""
                      }`}
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className={`links${
                        location.pathname === "/about" ? " aktiv" : ""
                      }`}
                      to="/about"
                    >
                      About
                    </Link>
                    <Link
                      className={`links${
                        location.pathname === "/product" ? " aktiv" : ""
                      }`}
                      to="/product"
                    >
                      Product
                    </Link>
                    <Link
                      className={`links${
                        location.pathname === "/card" ? " aktiv" : ""
                      }`}
                      to="/card"
                    >
                      Cart
                    </Link>
                    {person.username && (
                      <Link
                        className={`links${
                          location.pathname === "/checkout" ? " aktiv" : ""
                        }`}
                        to="/checkout"
                      >
                        Checkout
                      </Link>
                    )}
                    {person.username && (
                      <Link
                        className={`links${
                          location.pathname === "/orders" ? " aktiv" : ""
                        }`}
                        to="/orders"
                      >
                        Order
                      </Link>
                    )}
                  </li>
                </ul>

                <div className="items">
                  <div className="dark-mode" onClick={toggleDarkMode}>
                    {darkMode ? (
                      <i className="fa-solid fa-sun"></i>
                    ) : (
                      <i className="fa-solid fa-moon"></i>
                    )}
                  </div>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </nav>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default Navbar;
