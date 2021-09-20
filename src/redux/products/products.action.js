import ProductAPI from "../../api/ProductAPI";
import { history } from "../../App";

export const fetchAllProducts = async (dispatch) => {
  try {
    const data = await ProductAPI.GetAllProducts();
    dispatch({
      type: "FETCH_PRODUCT",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_PRODUCT_ERROR",
      payload: "Some error occurred while fetching products",
    });
  }
};

export const fetchProductsByCategory = (category) => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_PRODUCT_BY_CATEGORY_STARTED",
    });
    try {
      const data = await ProductAPI.GetProductByCategory(category);
      dispatch({
        type: "FETCH_PRODUCT_BY_CATEGORY",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_PRODUCT_ERROR",
        payload: "Some error occurred while fetching product category",
      });
    }
  };
};

export const fetchProductDetails = (id) => {
  return async (dispatch) => {
    try {
      const data = await ProductAPI.GetProduct(id);
      dispatch({
        type: "FETCH_PRODUCT_DETAIL",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_PRODUCT_ERROR",
        payload: "Some error occurred while fetching product details",
      });
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    const data = await ProductAPI.AddProduct(product);
    dispatch({
      type: "ADD_PRODUCT",
      payload: data,
    });
    history.push("/admin");
  };
};

export const editProduct = (id, product) => {
  return async (dispatch) => {
    const data = await ProductAPI.EditProduct(id, product);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
    history.push("/admin");
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    const data = await ProductAPI.DeleteProduct(id);
    dispatch({
      type: "DELETE_PRODUCT",
      payload: data,
    });
    fetchAllProducts(dispatch);
  };
};

export const fetchTopViewedProducts = async (dispatch, getState) => {
  const state = getState();
  console.log("getstate ", state);
  const data = await ProductAPI.GetTopViewedProductsPerUser(
    state.user.loggedInUser.id
  );
  dispatch({
    type: "FETCH_TOP_PRODUCTS",
    payload: data,
  });
};

export const updateTopViewedProduct = (product, userId) => {
  return async (dispatch) => {
    const data = await ProductAPI.AddUpdateTopViewedProduct(product, userId);
    dispatch({
      type: "UPDATE_TOP_PRODUCTS",
      payload: data,
    });
  };
};

export const searchProduct = (products) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_PRODUCT",
      payload: products,
    });
  };
};

export const updateCustomFields = (fields) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_CUSTOM_FIELDS",
      payload: fields,
    });
  };
};
