import React from "react";
import "./CheckoutPage.css";

function OrderSuccess() {
  return (
    <div className="container my-4">
      <div className="success-container">
        <span className="text-success">
          <i className="fas fa-check-circle fa-7x"></i>
        </span>
        <h2 className="my-4 text-success">
          Your Order has been placed Successfully!
        </h2>
      </div>
    </div>
  );
}

export default OrderSuccess;
