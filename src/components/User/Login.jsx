import { Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import Loading from "../../Loading";
import { login } from "../../redux/users/users.action";
import "./LoginOrRegister.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

function Login({ onRegister, login, redirectURL, logInError, loggingIn }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formikRef = useRef();

  const handleSubmit = (values) => {
    let { email, password, rememberMe } = values;
    if (rememberMe) {
      document.cookie = "email=" + email;
      document.cookie = "password=" + password;
      document.cookie = "remember=" + rememberMe;
    } else {
      document.cookie = "email=";
      document.cookie = "password=";
      document.cookie = "remember=";
    }
    login(email, password, redirectURL);
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (getCookie("email")) {
      formikRef.current &&
        formikRef.current.setFieldValue("email", getCookie("email"));
    }
    if (getCookie("password")) {
      formikRef.current &&
        formikRef.current.setFieldValue("password", getCookie("password"));
    }
    if (getCookie("remember")) {
      getCookie("remember") === "true"
        ? formikRef.current &&
          formikRef.current.setFieldValue("rememberMe", true)
        : formikRef.current &&
          formikRef.current.setFieldValue("rememberMe", false);
    }
  }, []);

  return (
    <div className="form-container sign-in-container">
      <div className="form">
        <h1>Log In</h1>
        <Formik
          innerRef={formikRef}
          initialValues={{
            email: "abc@gm.co",
            password: "abc",
            rememberMe: false,
          }}
          validateOnMount={true}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}>
          {({ errors, touched, isValid }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Enter Email ID"
                  type="email"
                  className="form-control"
                />
                {errors.email && touched.email ? (
                  <div className="invalid-feedback">{errors.email}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  type="password"
                  className="form-control"
                />
                {errors.password && touched.password ? (
                  <div className="invalid-feedback">{errors.password}</div>
                ) : null}
              </div>
              <div className="form-group">
                <Field id="rememberMe" name="rememberMe" type="checkbox" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>

              <div className="row justify-content-center">
                <button
                  type="submit"
                  className="btn btn-login"
                  disabled={!isValid}>
                  {loggingIn ? (
                    <Loading width="15px" height="15px" color="#fff" />
                  ) : (
                    "Log In"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <span className="btn-link-container">
          New user?
          <button type="button" className="btn btn-link" onClick={onRegister}>
            Register
          </button>
        </span>
        {formSubmitted && logInError && (
          <div className="error-msg">Failed to Login. {logInError}</div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("Login MSP ", state);
  return {
    loggingIn: state.user.loggingIn,
    logInSuccess: state.user.logInSuccess,
    logInError: state.user.logInError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password, redirectURL) =>
      dispatch(login(email, password, redirectURL)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
