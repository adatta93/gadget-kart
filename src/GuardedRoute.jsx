import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log("AUTH", auth);
      console.log("props", props);
      return auth === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login-register",
            state: { redirectURL: props.match.url },
          }}
        />
      );
    }}
  />
);

export default GuardedRoute;
