import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { fetchProductReducer } from "./products/products.reducer";
import { userReducer } from "./users/users.reducer";

export default combineReducers({
  products: fetchProductReducer,
  user: userReducer,
  cart: cartReducer,
});
