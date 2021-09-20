export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const updateCartQuantity = (item, quantity) => ({
  type: "UPDATE_QUANTITY_CART",
  payload: { item, quantity },
});

export const deleteFromCart = (item) => ({
  type: "DELETE_FROM_CART",
  payload: item,
});
