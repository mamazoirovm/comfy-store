import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    address: "",
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem("checkoutFormData");

    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const saveFormDataToLocalStorage = () => {
    localStorage.setItem("checkoutFormData", JSON.stringify(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveFormDataToLocalStorage();
  };

  return (
    <div>
      <div className="container txt mb-10">
        <h2>Place Your Order</h2>
        <hr />
      </div>

      <div className="container mt-10">
        <h1 className="mt-20">Shipping Information</h1>

        <form className="w-96 mt-5" onSubmit={handleSubmit}>
          <label className="mt-6 block mb-6" htmlFor="">
            First Name
            <Input
              className="mt-2"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </label>
          <label htmlFor="">
            Address Name
            <Input
              className="mt-2"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </label>
          <Button className="mt-6" type="default" htmlType="submit">
            Place your order
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
