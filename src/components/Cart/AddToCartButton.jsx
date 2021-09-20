import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  deleteFromCart,
  updateCartQuantity,
} from "../../redux/cart/cart.action";

function AddToCartButton({
  item,
  addToCart,
  updateCartQuantity,
  deleteFromCart,
  cartItems,
}) {
  const [showIncDec, setShowIncDec] = useState(false);

  useEffect(() => {
    let cartItem = cartItems.find((cart) => cart.id === item.id);
    if (cartItem) {
      if (cartItem.quantity === 0) {
        setShowIncDec(false);
      } else {
        setShowIncDec(true);
      }
    }
  });

  const handleQuantityIncrease = () => {
    updateCartQuantity(item, 1);
  };

  const handleQuantityDecrease = () => {
    let cartItem = cartItems.find((cart) => cart.id === item.id);
    if (cartItem && cartItem.quantity > 1) {
      updateCartQuantity(cartItem, -1);
    } else {
      deleteFromCart(cartItem);
      setShowIncDec(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(item);
    setShowIncDec(true);
  };

  return (
    <div className="btn-group">
      {showIncDec && (
        <button
          className="btn btn-outline-primary"
          onClick={handleQuantityDecrease}>
          -
        </button>
      )}
      {showIncDec ? (
        <Link to="/cart" className="btn btn-primary">
          <i className="fas fa-shopping-cart mr-2"></i>
          Go To Cart
        </Link>
      ) : (
        <button className="btn btn-primary" onClick={handleAddToCart}>
          <i className="fas fa-shopping-cart mr-2"></i>
          Add To Cart
        </button>
      )}

      {showIncDec && (
        <button
          className="btn btn-outline-primary"
          onClick={handleQuantityIncrease}>
          +
        </button>
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
    addToCart: (item) => dispatch(addToCart(item)),
    updateCartQuantity: (item, quantity) =>
      dispatch(updateCartQuantity(item, quantity)),
    deleteFromCart: (item) => dispatch(deleteFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);
