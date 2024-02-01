import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [savedItems, setSavedItems] = useState({});
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [person, setPerson] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("item"));
    if (item) {
      setSavedItems(item);
    } else {
      setSavedItems({});
    }
  }, []);

  const handleRemove = () => {
    localStorage.removeItem("item");
    setSavedItems({});
  };
  const handleAdded = (event) => {
    setSelectedNumber(parseInt(event.target.value));
  };
  function handleSelection(e) {
    e.preventDefault();
    if (person.username && Object.keys(savedItems).length > 0) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  }
  console.log(selectedNumber);
  return (
    <div>
      <div className="container">
        {Object.keys(savedItems).length === 0 ? (
          <div className="txt mb-10">
            <h2>Your Cart Is Empty</h2>
            <hr />
          </div>
        ) : (
          <>
            <div className="txt mb-10">
              <h2>Shopping Cart</h2>
              <hr />
            </div>

            <div className="flex items-center gap-16">
              <div className="img">
                <img
                  className="imagess h-28 w-28 rounded-lg"
                  src={savedItems.images}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-medium capitalize">{savedItems.titles}</h3>
                <h4 className="capitalize text-sm">{savedItems.companys}</h4>
                <h5 className="flex gap-2">
                  color:
                  {savedItems.colorss &&
                    savedItems.colorss.map((color, index) => (
                      <span
                        className="w-6 h-6 rounded-3xl"
                        style={{ background: color }}
                        key={index}
                      ></span>
                    ))}
                </h5>
              </div>
              <div className="flex flex-col ">
                <h6>amount</h6>
                <select
                  className="bg-slate-50 text-slate-900 rounded-3xl px-1 py-0"
                  name=""
                  id=""
                
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                </select>
                <button
                  onClick={handleRemove}
                  className="text-blue-700 font-semibold"
                >
                  remove
                </button>
              </div>
              <h1>${(savedItems.prices / 100).toFixed(2)}</h1>

              <div className="flex fle-col gap-2 ">
                <div className="flex flex-col gap-3 p-8"></div>
                <button onClick={handleSelection}  className=" text-xl text-slate-200 bg-blue-500 py-1 px-1 rounded-md uppercase">
                  please login
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
