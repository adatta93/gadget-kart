import React from "react";
import { connect } from "react-redux";

function PriceDetail({ cartItems, cartTotal }) {
  return (
    <div className="card cart-card">
      <div className="card-header">
        <h3>Price Details</h3>
      </div>
      <div className="card-body">
        {cartItems && cartItems.length && (
          <>
            <ul className="item-price-list">
              {cartItems.map((item) => (
                <li key={item.title}>
                  <span>
                    {item.quantity} X {item.title}
                  </span>
                  <span>
                    {(item.price * item.quantity).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      style: "currency",
                      currency: "INR",
                    })}
                  </span>
                </li>
              ))}
            </ul>
            <div className="total-container">
              <span className="total-text">
                Subtotal ({cartItems.length} items):{" "}
              </span>
              <span className="total-price">
                {cartTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    cartTotal: state.cart.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ),
  };
};

export default connect(mapStateToProps)(PriceDetail);
