const INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload),
      };
    case "UPDATE_QUANTITY_CART":
      return {
        ...state,
        cartItems: updateCartQuantityUtil(
          state.cartItems,
          action.payload.item,
          action.payload.quantity
        ),
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: deleteItemUtils(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

const addItemToCartUtil = (cartItems, itemToAdd) => {
  const isExisting = cartItems.find((item) => item.id === itemToAdd.id);
  if (isExisting) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

const updateCartQuantityUtil = (cartItems, itemToUpdt, quantity) => {
  const isExisting = cartItems.find((item) => item.id === itemToUpdt.id);
  if (isExisting) {
    return cartItems.map((item) =>
      item.id === itemToUpdt.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    return [...cartItems, { ...itemToUpdt, quantity: quantity }];
  }
};

const deleteItemUtils = (cartItems, itemToDelete) => {
  const isExisting = cartItems.find((item) => item.id === itemToDelete.id);
  if (isExisting) {
    return cartItems.filter((item) => item.id !== itemToDelete.id);
  }
};
