import React, { useEffect, useRef, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./LoginOrRegister.css";

function LoginOrRegister({ location }) {
  const containerEl = useRef(null);
  const [redirectURL, setRedirectURL] = useState("");

  const onRegister = () => {
    containerEl.current.classList.add("right-panel-active");
  };
  const onLogIn = () => {
    containerEl.current.classList.remove("right-panel-active");
  };

  useEffect(() => {
    console.log("RDR Loc", location);
    if (location.state) {
      console.log("RDR URL", location.state.redirectURL);
      setRedirectURL(location.state.redirectURL);
    }
  }, [location]);

  return (
    <div>
      <div className="login-signup-container" ref={containerEl}>
        <Register onLogIn={onLogIn} />

        <Login onRegister={onRegister} redirectURL={redirectURL} />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your shopping with us</p>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>To proceed further please login with your registered email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginOrRegister;
