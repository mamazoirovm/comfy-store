import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { useTheme } from "../ThemeContext";
const Detalis = () => {
  const { product } = useLocation().state;
  const { title, price, description, company, image, colors } = product || {};
  const { id } = useParams();
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className={darkMode ? "" : "black"}>
      <div className=" h-full">
        <div className="pro container">
          <div className="pro-class h-full">
            <Link className="hm-links" to="/">
              Home
            </Link>

            <Link className="hm-links" to="/product">
              Product
            </Link>
          </div>
          <div className="  data-base  " key={id}>
            <div className="img-cont">
              <img className="img-cont"  src={image} alt={title} />
            </div>
            
            <div className="data-text">
              <h1 className="text-3xl font-bold capitalize">{title}</h1>
              <h3 className="text-xl text-violet-100 mt-6 font-bold">{company}</h3>
              <h5 className="text-xl">${(price / 100).toFixed(2)}</h5>
              <p className="text-lg  ">{description}</p>
              <div className="flex gap-5 mt-4">
                {colors &&
                  colors.map((color, index) => (
                    <span className="w-6 h-6 rounded-3xl" style={{background: color, }} key={index}></span>
                   
                  ))}
              </div>
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
              <button className= "btn-secondary  w-5 py-1 px-6">Add to Bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalis;
