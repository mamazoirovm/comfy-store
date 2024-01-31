import React, { useEffect } from "react";
import "./home.css";
import Sliders from "../Slider/Sliders";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
function Home() {
  const [products, setProducts] = useState([]);
  const { darkMode, toggleDarkMode } = useTheme();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-store-server.onrender.com/api/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data.data); // 'data' arrayni olish
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={darkMode ? "" : "black"}>
      <div className="wrapper">
        <div className="container home-content mb-3">
          <div className="txt">
            <h1>We are changing the way people shop</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link className="our" to="/product">
              Our product
            </Link>
          </div>
          <div className="corusel">
            <Sliders />
          </div>
        </div>
        <div className="container mt-10">
          <div className="txt">
            <h2 className="">Featured Products</h2>
            <hr  />
          </div>

          <div className="cardlar">
            {products.slice(0, 3).map((product) => (
              <div className="list-card" key={product.id}>
                <div className="list-img">
                  <img
                    className="img-it"
                    src={product.attributes.image}
                    alt={product.attributes.name}
                  />
                </div>
                <h2>{product.attributes.title}</h2>
                <h6>${(product.attributes.price / 100).toFixed(2)}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
