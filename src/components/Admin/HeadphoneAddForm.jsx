import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const intiVal = {
  title: "",
  img: "",
  category: "headphones",
  price: "",
  connector: "",
  cord_length: "",
  microphone: "",
  wireless: "",
};

const schema = Yup.object().shape({
  title: Yup.string().required("Product Name is Required"),
  img: Yup.string().required("Image URL is Required"),
  category: Yup.string().required("Category is Required"),
  price: Yup.number().required("Price is Required"),
  connector: Yup.string().required("Connector Type is Required"),
  cord_length: Yup.string().required("Cord Length is Required"),
  microphone: Yup.string().required("Microphone is Required"),
  wireless: Yup.string().required("Wirless is Required"),
});

const HeadphoneAddForm = ({ handleSubmit }) => {
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
              <label htmlFor="connector">Connector Type</label>
              <Field
                id="connector"
                name="connector"
                placeholder="Enter Connector Type"
                className="form-control"
              />
              {errors.connector && touched.connector ? (
                <div className="invalid-feedback d-block">
                  {errors.connector}
                </div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="cord_length">Cord Length</label>
              <Field
                id="cord_length"
                name="cord_length"
                placeholder="Enter Cord Length"
                className="form-control"
              />
              {errors.cord_length && touched.cord_length ? (
                <div className="invalid-feedback d-block">
                  {errors.cord_length}
                </div>
              ) : null}
            </div>
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="microphone">Microphone</label>
              <Field
                as="select"
                id="microphone"
                name="microphone"
                className="form-control">
                <option value="">---Choose---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
              {errors.microphone && touched.microphone ? (
                <div className="invalid-feedback d-block">
                  {errors.microphone}
                </div>
              ) : null}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="wireless">Wireless</label>
              <Field
                as="select"
                id="wireless"
                name="wireless"
                className="form-control">
                <option value="">---Choose---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
              {errors.wireless && touched.wireless ? (
                <div className="invalid-feedback d-block">
                  {errors.wireless}
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

export default HeadphoneAddForm;
