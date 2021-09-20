import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const intiVal = {
  title: "",
  img: "",
  category: "smartwatch",
  price: "",
  sensor: "",
  battery: "",
  water_depth: "",
  screen: "",
};

const schema = Yup.object().shape({
  title: Yup.string().required("Product Name is Required"),
  img: Yup.string().required("Image URL is Required"),
  category: Yup.string().required("Category is Required"),
  price: Yup.number().required("Price is Required"),
  sensor: Yup.string().required("Sensor is Required"),
  battery: Yup.string().required("Battery Capacity is Required"),
  water_depth: Yup.string().required("Water Depth is Required"),
  screen: Yup.string().required("Screen Resolution is Required"),
});

const SmartwatchAddForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={intiVal}
      validationSchema={schema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}>
      {({ errors, touched, isValid }) => (
        <Form>
          <div className="row">
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="title">Product Name</label>
              <Field
                id="title"
                name="title"
                placeholder="Enter Product Name"
                className="form-control"
              />
              {errors.title && touched.title ? (
                <div className="invalid-feedback d-block">{errors.title}</div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="img">Product Image URL</label>
              <Field
                id="img"
                name="img"
                placeholder="Enter Product Image URL"
                className="form-control"
              />
              {errors.img && touched.img ? (
                <div className="invalid-feedback d-block">{errors.img}</div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="price">Price</label>
              <Field
                type="number"
                id="price"
                name="price"
                placeholder="Enter Price"
                className="form-control"
              />
              {errors.price && touched.price ? (
                <div className="invalid-feedback d-block">{errors.price}</div>
              ) : null}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="sensor">Sensor</label>
              <Field
                id="sensor"
                name="sensor"
                placeholder="Enter Sensor"
                className="form-control"
              />
              {errors.sensor && touched.sensor ? (
                <div className="invalid-feedback d-block">{errors.sensor}</div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="battery">Battery</label>
              <Field
                id="battery"
                name="battery"
                placeholder="Enter Battery"
                className="form-control"
              />
              {errors.battery && touched.battery ? (
                <div className="invalid-feedback d-block">{errors.battery}</div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="water_depth">Water Depth</label>
              <Field
                id="water_depth"
                name="water_depth"
                placeholder="Enter Water Depth"
                className="form-control"
              />
              {errors.water_depth && touched.water_depth ? (
                <div className="invalid-feedback d-block">
                  {errors.water_depth}
                </div>
              ) : null}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="screen">Screen Resolution</label>
              <Field
                id="screen"
                name="screen"
                placeholder="Enter Screen Resolution"
                className="form-control"
              />
              {errors.screen && touched.screen ? (
                <div className="invalid-feedback d-block">{errors.screen}</div>
              ) : null}
            </div>
            <div className="col-12 col-md-3"></div>
            <div className="col-12 col-md-3"></div>
          </div>

          <div className="row justify-content-center">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SmartwatchAddForm;
