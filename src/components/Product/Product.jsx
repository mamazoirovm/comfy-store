import React from "react";
import "../../main.css";
import "./index.css";
import { useTheme } from "../ThemeContext";
import { useState, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import Detalis from "../Detalis/Detalis";
import { data } from "autoprefixer";
const Product = () => {
  const [price, setPrice] = useState(1000);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  let [selectedSort, setSelectedSort] = useState("a-z");
  const [viewMode, setViewMode] = useState("list");
  const navigate = useNavigate();
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    navigate(`/detalis/${product.id}`, {
      state: { product: product.attributes },
    });
  };

  const toggleViewMode = () => {
    setViewMode((prevMode) =>
      prevMode === "list-card" ? "grid" : "list-card"
    );
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const formattedPrice = () => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };
  const { darkMode, toggleDarkMode } = useTheme();

  const [products, setProducts] = useState([]);

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
  
  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.attributes.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        product.attributes.price / 100 <= price &&
        (selectedCategory === "all" ||
          product.attributes.category === selectedCategory) &&
        (selectedCompany === "all" ||
          product.attributes.company === selectedCompany)
    );
    if (selectedSort === "a-z") {
      filtered = filtered.sort((a, b) =>
        a.attributes.title.localeCompare(b.attributes.title)
      );
    } else if (selectedSort === "z-a") {
      filtered = filtered.sort((a, b) =>
        b.attributes.title.localeCompare(a.attributes.title)
      );
    } else if (selectedSort === "high") {
      filtered = filtered.sort(
        (a, b) => b.attributes.price - a.attributes.price
      );
    } else if (selectedSort === "low") {
      filtered = filtered.sort(
        (a, b) => a.attributes.price - b.attributes.price
      );
    }
    setFilteredProducts(filtered);
  }, [
    searchTerm,
    price,
    selectedCategory,
    selectedCompany,
    selectedSort,
    products,
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleCompnayChange = (event) => {
    setSelectedCompany(event.target.value);
  };
  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div className={darkMode ? "" : "black"}>
      <div className="cards">
        <div className="container">
          <div className="search">
            <label htmlFor="">
              Search Product
              <input
                value={searchTerm}
                onChange={handleSearchChange}
                className="inputs"
                type="text"
              />
            </label>
            <label htmlFor="">
              Select Category
              <select
                name=""
                id=""
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="all">all</option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chair</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
            </label>
            <label htmlFor="">
              Select Company
              <select
                name=""
                id=""
                value={selectedCompany}
                onChange={handleCompnayChange}
              >
                <option value="all">all</option>
                <option value="Modenza">Modenza</option>
                <option value="luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comofora">Comofora</option>
                <option value="Homestead">Homestead</option>
              </select>
            </label>
            <label htmlFor="">
              Sort By
              <select
                name=""
                id=""
                value={selectedSort}
                onChange={handleSortChange}
              >
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </label>
            <div className="ranges">
              <label htmlFor="">
                <p>
                  Select Price <span>${formattedPrice()}</span>
                </p>
                <input
                  type="range"
                  value={price}
                  min="0"
                  max="1000"
                  step="1"
                  onChange={handlePriceChange}
                />
              </label>
            </div>
            <label htmlFor="">
              Free Shipping
              <input className="w-7 p-10" type="checkbox" name="" id="" />
            </label>

            <button className="serch qidir">Search</button>
            <button className="serch reset">reset</button>
          </div>
        </div>
        <div className="container api-card">
          <div className="number">
            <h4>22 products</h4>
            <div className="menu-bar">
              <i className="fa-solid fa-grip" onClick={toggleViewMode}></i>
             
            </div>
          </div>
          <hr className="hr" />
          <div className="cardlar">
            {Array.isArray(filteredProducts) && filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <div
                    className={`list-card ${
                      viewMode === "grid" ? "grid-view" : ""
                    }`}
                    key={product.id}
                    onClick={() => handleCardClick(product)}
                  >
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
                ))
              : products.map((product) => (
                  <div
                    className="list-card"
                    key={product.id}
                    onClick={() => handleCardClick(product)}
                  >
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
      {selectedProduct && (
        <Route
          path="/detalis/:id"
          element={<Detalis product={selectedProduct} />}
        />
      )}
    </div>
  );
};

export default Product;
