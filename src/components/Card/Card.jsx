import React from "react";
import "./index.css";
function Card() {
  return (
    <div>
      <div className="container">
        <div className="txt mb-10">
          <h2>Shopping Cart</h2>
          <hr />
        </div>

        <div className="flex items-center gap-16">
          <div className="img">
            <img
              className="imagess h-28 w-28 rounded-lg "
              src="https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium capitalize">avant</h3>
            <h4 className="capitalize text-sm text-sm-neutral-content">
              company
            </h4>
            <h5>
              color <span>rang</span>
            </h5>
          </div>
          <div className="flex flex-col ">
            <h6>amount</h6>
            <select
              className="bg-slate-300 text-slate-900 rounded-3xl p-1"
              name=""
              id=""
            >
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
            <button className="text-blue-700 font-semibold">remove</button>
          </div>
          <h1>narx</h1>

          <div className="flex fle-col gap-2 ">
            <div className="flex flex-col gap-3 p-8"></div>
            <button className=" text-2xl text-slate-200 bg-slate-500 py-2 px-2 rounded-md uppercase">
              please login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
