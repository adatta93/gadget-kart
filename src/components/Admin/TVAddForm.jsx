import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const intiVal = {
  title: "",
  img: "",
  category: "tv",
  price: "",
  speaker: "",
  connectivity: "",
  screen_resolution: "",
  screen: "",
};

const schema = Yup.object().shape({
  title: Yup.string().required("Product Name is Required"),
  img: Yup.string().required("Image URL is Required"),
  category: Yup.string().required("Category is Required"),
  price: Yup.number().required("Price is Required"),
  speaker: Yup.string().required("Speaker is Required"),
  connectivity: Yup.string().required("Connectivity is Required"),
  screen_resolution: Yup.string().required("Screen Resolution is Required"),
  screen: Yup.string().required("Display Size is Required"),
});

const TVAddForm = ({ handleSubmit }) => {
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
              <label htmlFor="speaker">Speaker</label>
              <Field
                id="speaker"
                name="speaker"
                placeholder="Enter Speaker"
                className="form-control"
              />
              {errors.speaker && touched.speaker ? (
                <div className="invalid-feedback d-block">{errors.speaker}</div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="connectivity">Connectivity</label>
              <Field
                id="connectivity"
                name="connectivity"
                placeholder="Enter Connectivity"
                className="form-control"
              />
              {errors.connectivity && touched.connectivity ? (
                <div className="invalid-feedback d-block">
                  {errors.connectivity}
                </div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="screen">Display Size</label>
              <Field
                id="screen"
                name="screen"
                placeholder="Enter Display Size"
                className="form-control"
              />
              {errors.screen && touched.screen ? (
                <div className="invalid-feedback d-block">{errors.screen}</div>
              ) : null}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="screen_resolution">Screen Resolution</label>
              <Field
                id="screen_resolution"
                name="screen_resolution"
                placeholder="Enter Screen Resolution"
                className="form-control"
              />
              {errors.screen_resolution && touched.screen_resolution ? (
                <div className="invalid-feedback d-block">
                  {errors.screen_resolution}
                </div>
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

export default TVAddForm;
