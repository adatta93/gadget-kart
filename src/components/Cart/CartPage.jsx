import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItemList from "./CartItemList";
import "./CartPage.css";
import PriceDetail from "./PriceDetail";

export function CartPage({ cartItems }) {
  return (
    <div className="container my-4">
      <div className="row" style={{ alignItems: "flex-start" }}>
        {cartItems && cartItems.length ? (
          <>
            <div className="col-lg-7">
              <CartItemList />
            </div>
            <div className="col-lg-5 sticky-box">
              <PriceDetail />
            </div>
          </>
        ) : (
          <div className="col-12">
            <div className="card">
              <div className="card-body empty-cart">
                <i className="fas fa-cart-arrow-down fa-5x"></i>
                <h3>Your cart is currently empty</h3>
                <Link to="/" className="btn btn-primary">
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartPage);
