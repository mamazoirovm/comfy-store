import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Detalis from "./components/Detalis/Detalis";
import Order from "./components/Orders/Order";
import ErrorPage from "./components/Errores/ErrorPage";
import CheckOut from "./components/Check/CheckOut";
import "./App.css";

import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [person, setPerson] = useState({});
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setPerson(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/card" element={<Card />}></Route>

          <Route path="/orders" element={<Order />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/detalis/:id" element={<Detalis />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
