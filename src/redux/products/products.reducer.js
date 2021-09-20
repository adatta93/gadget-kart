const INITIAL_STATE = {
  allProducts: [],
  productsByCategory: [],
  productsByCategoryOrig: [],
  productByCatLoading: false,
  productDetail: {},
  fetchProductErr: "",
  topViewedProduct: [],
  customFields: {
    processor: false,
    ram: true,
    memory: false,
    camera: false,
    speaker: true,
    screen: false,
    weight: false,
    battery: true,
    sensor: true,
    connector: true,
    microphone: true,
    wireless: true,
  },
};

export const fetchProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {
        ...state,
        allProducts: action.payload,
        productDetail: {},
      };
    case "FETCH_PRODUCT_ERROR":
      return {
        ...state,
        fetchProductErr: action.payload,
        allProducts: [],
        productsByCategory: [],
        productsByCategoryOrig: [],
      };
    case "FETCH_PRODUCT_BY_CATEGORY":
      return {
        ...state,
        productsByCategory: action.payload,
        productsByCategoryOrig: action.payload,
        productByCatLoading: false,
        productDetail: {},
      };
    case "FETCH_PRODUCT_BY_CATEGORY_STARTED":
      return {
        ...state,
        productsByCategory: action.payload,
        productsByCategoryOrig: action.payload,
        productByCatLoading: true,
        productDetail: {},
      };
    case "FETCH_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload,
      };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        productsByCategory: action.payload,
        productDetail: {},
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        productDetail: action.payload,
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        productDetail: action.payload,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        productDetail: action.payload,
      };
    case "FETCH_TOP_PRODUCTS":
      return {
        ...state,
        topViewedProduct: action.payload,
      };
    case "UPDATE_TOP_PRODUCTS":
      return {
        ...state,
        topViewedProduct: action.payload,
      };
    case "UPDATE_CUSTOM_FIELDS":
      return {
        ...state,
        customFields: action.payload,
      };
    default:
      return state;
  }
};
