import React from "react";
import { Link } from "react-router-dom";
import { history } from "../../App";

function CartItem({ item, updateCartQuantity, deleteFromCart }) {
  const handleQuantityChange = (e) => {
    if (e.target.value > 0) {
      let newQuantity = e.target.value - item.quantity;
      updateCartQuantity(item, newQuantity);
    } else {
      deleteFromCart(item);
    }
  };

  const dtlLink = `/products/${item.id}`;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-4 col-lg-3 cart-img-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/${item.img}`}
            alt={item.title}
            className="cart-img"
          />
        </div>
        <div className="col-8 col-lg-9">
          <div className="cart-item-title">
            <Link
              to={{
                pathname: dtlLink,
                state: { prevPath: history.location.pathname },
              }}>
              {item.title}
            </Link>
          </div>
          <div className="cart-fields">
            <label>Quantity: </label>
            <select value={item.quantity} onChange={handleQuantityChange}>
              {[0, 1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
          <div className="cart-fields">
            <label>Price: </label>
            <span>
              {item.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}
            </span>
          </div>
          <button
            style={{ margin: "1rem 0" }}
            className="btn btn-sm btn-danger"
            onClick={() => deleteFromCart(item)}>
            Remove from Cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
