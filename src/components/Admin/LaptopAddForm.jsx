import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const intiVal = {
  title: "",
  img: "",
  category: "laptop",
  price: "",
  processor: "",
  ram: "",
  memory: "",
  camera: "",
  screen: "",
  weight: "",
};

const schema = Yup.object().shape({
  title: Yup.string().required("Product Name is Required"),
  img: Yup.string().required("Image URL is Required"),
  category: Yup.string().required("Category is Required"),
  price: Yup.number().required("Price is Required"),
  processor: Yup.string().required("processor is Required"),
  ram: Yup.string().required("RAM is Required"),
  memory: Yup.string().required("Memory is Required"),
  screen: Yup.string().required("Screen Resolution is Required"),
  weight: Yup.string().required("Weight is Required"),
});

const LaptopAddForm = ({ handleSubmit }) => {
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
              <label htmlFor="processor">Processor</label>
              <Field
                id="processor"
                name="processor"
                placeholder="Enter Processor"
                className="form-control"
              />
              {errors.processor && touched.processor ? (
                <div className="invalid-feedback d-block">
                  {errors.processor}
                </div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="ram">Product RAM</label>
              <Field
                id="ram"
                name="ram"
                placeholder="Enter RAM"
                className="form-control"
              />
              {errors.ram && touched.ram ? (
                <div className="invalid-feedback d-block">{errors.ram}</div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="memory">Memory</label>
              <Field
                id="memory"
                name="memory"
                placeholder="Enter Memory"
                className="form-control"
              />
              {errors.memory && touched.memory ? (
                <div className="invalid-feedback d-block">{errors.memory}</div>
              ) : null}
            </div>
          </div>

          <div className="row">
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
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="weight">Weight (in KG)</label>
              <Field
                id="weight"
                name="weight"
                placeholder="Enter Weight"
                className="form-control"
              />
              {errors.weight && touched.weight ? (
                <div className="invalid-feedback d-block">{errors.weight}</div>
              ) : null}
            </div>
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

export default LaptopAddForm;
