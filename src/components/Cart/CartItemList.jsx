import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteFromCart,
  updateCartQuantity,
} from "../../redux/cart/cart.action";
import CartItem from "./CartItem";

export function CartItemList({
  cartItems,
  updateCartQuantity,
  deleteFromCart,
}) {
  return (
    <div className="card cart-card">
      <div className="card-header">
        <h3>Shopping Cart</h3>
      </div>

      {cartItems && cartItems.length ? (
        <>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateCartQuantity={updateCartQuantity}
                  deleteFromCart={deleteFromCart}
                />
              ))}
            </ul>
          </div>
          <div className="total-container place-order">
            <Link to="/checkout" className="btn btn-primary">
              PLACE ORDER
            </Link>
          </div>
        </>
      ) : (
        <div>
          <h3>Your cart is currently empty</h3>
          <Link to="/" className="btn btn-primary">
            CONTINUE SHOPPING
          </Link>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartQuantity: (item, quantity) =>
      dispatch(updateCartQuantity(item, quantity)),
    deleteFromCart: (item) => dispatch(deleteFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);
