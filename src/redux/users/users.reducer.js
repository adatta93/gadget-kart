const INITIAL_STATE = {
  registerSuccess: false,
  registerError: "",
  loggingIn: false,
  logInSuccess: false,
  logInError: "",
  loggedInUser: {},
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        registerSuccess: true,
        logInSuccess: true,
        loggedInUser: action.payload,
      };
    case "REGISTER_FAILED":
      return {
        ...state,
        registerSuccess: false,
        registerError: "Failed to register. Please try again!",
      };
    case "LOGIN_STARTED":
      return {
        ...state,
        logInSuccess: false,
        loggingIn: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        logInSuccess: true,
        loggingIn: false,
        loggedInUser: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        logInSuccess: false,
        loggingIn: false,
        logInError: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        logInSuccess: false,
        loggedInUser: {},
      };
    default:
      return state;
  }
};
