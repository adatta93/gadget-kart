import UserAPI from "../../api/UserAPI";
import { history } from "../../App";

export const register = (user) => {
  return async (dispatch) => {
    try {
      const data = await UserAPI.RegisterUser(user);
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: data,
      });
      history.push("/");
    } catch (error) {
      dispatch({
        type: "REGISTER_FAILED",
      });
    }
  };
};

export const login = (email, password, redirectURL) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOGIN_STARTED",
      });
      const users = await UserAPI.LoginUser();
      let matched = false;
      users.forEach((user) => {
        if (user.email === email && user.password === password) {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: user,
          });
          redirectURL ? history.push(redirectURL) : history.push("/");
          matched = true;
        }
      });
      if (!matched) {
        dispatch({
          type: "LOGIN_FAILED",
          payload: "Email and Password doesn't match",
        });
      }
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILED",
        payload: "Some network error occurred",
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };
};
