import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/users/users.action";
import "./LoginOrRegister.css";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Please enter valid mobile number")
    .required("Mobile Number is Required"),
  location: Yup.string().required("Location is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

function Register({ onLogIn, register, registerError }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (val) => {
    register(val);
    setFormSubmitted(true);
  };

  return (
    <div className="form-container sign-up-container">
      <div className="form">
        <h1>Create Account</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            mobile: "",
            location: "Bangalore",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={async (values) => {
            handleSubmit(values);
          }}>
          {({ errors, touched, isValid }) => (
            <Form>
              <div className="row">
                <div className="col form-group">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    className="form-control"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  ) : null}
                </div>
                <div className="col form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    className="form-control"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  ) : null}
                </div>
              </div>

              <div className="row">
                <div className="col form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        style={{ marginTop: "8px" }}>
                        +91
                      </span>
                    </div>
                    <Field
                      id="mobile"
                      name="mobile"
                      placeholder="Enter Mobile No."
                      className="form-control"
                    />
                  </div>
                  {errors.mobile && touched.mobile ? (
                    <div className="invalid-feedback">{errors.mobile}</div>
                  ) : null}
                </div>
                <div className="col form-group">
                  <label htmlFor="location">Location</label>
                  <Field
                    as="select"
                    id="location"
                    name="location"
                    className="form-control">
                    <option value="">---Choose---</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                  </Field>
                  {errors.location && touched.location ? (
                    <div className="invalid-feedback">{errors.location}</div>
                  ) : null}
                </div>
              </div>

              <div className="row">
                <div className="col form-group">
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
                <div className="col form-group">
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
              </div>

              <div className="row justify-content-center">
                <button type="submit" className="btn-login" disabled={!isValid}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <span className="btn-link-container">
          Already registered?
          <button type="button" className="btn btn-link" onClick={onLogIn}>
            Log In
          </button>
        </span>
        {formSubmitted && registerError && (
          <div className="error-msg">{registerError}</div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    registerError: state.user.registerError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => dispatch(register(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
