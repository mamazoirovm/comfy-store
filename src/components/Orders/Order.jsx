import React, { useEffect, useState } from "react";

const Order = () => {

  const [orderData, setOrderData] = useState(null);

  
  useEffect(() => {
    const savedOrderData = localStorage.getItem("checkoutFormData");

    if (savedOrderData) {
      const parsedOrderData = JSON.parse(savedOrderData);
      parsedOrderData.timestamp = new Date().toLocaleString();

      setOrderData(parsedOrderData);
    }
  }, []);

  return (
    <div className="container">
      <div className="">
        <h2>Order Details</h2>
        {orderData && (
          <div className="flex items-center flex-col">
            <p className="flex items-center flex-col">First name: {orderData.firstName}</p>
            <p className="flex items-center flex-col">Address: {orderData.address}</p>
            <p className="flex items-center flex-col">Order Placed: {orderData.timestamp}</p>
            {/* Add more order details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
