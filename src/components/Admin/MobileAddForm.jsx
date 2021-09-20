import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

let initVal = {
  title: "",
  img: "",
  category: "mobile",
  price: "",
  processor: "",
  ram: "",
  memory: "",
  camera: "",
  screen: "",
  battery: "",
};

const schema = Yup.object().shape({
  title: Yup.string().required("Product Name is Required"),
  img: Yup.string().required("Image URL is Required"),
  category: Yup.string().required("Category is Required"),
  price: Yup.number().required("Price is Required"),
  processor: Yup.string().required("processor is Required"),
  ram: Yup.string().required("RAM is Required"),
  memory: Yup.string().required("Memory is Required"),
  camera: Yup.string().required("Camera is Required"),
  screen: Yup.string().required("Screen Resolution is Required"),
});

const MobileAddForm = ({ handleSubmit, product }) => {
  const [initVal1, setInitVal1] = useState(initVal);

  useEffect(() => {
    if (product) {
      setInitVal1({ ...initVal, ...product });
    }
  }, [product]);

  return (
    <Formik
      initialValues={initVal1}
      enableReinitialize={true}
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
              <label htmlFor="memory">Product Memory</label>
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
              <label htmlFor="camera">Camera</label>
              <Field
                id="camera"
                name="camera"
                placeholder="Enter Camera"
                className="form-control"
              />
              {errors.camera && touched.camera ? (
                <div className="invalid-feedback d-block">{errors.camera}</div>
              ) : null}
            </div>
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
            <div className="col-12 col-md-3 form-group">
              <label htmlFor="battery">Product Battery Capacity</label>
              <Field
                id="battery"
                name="battery"
                placeholder="Enter Battery Capacity"
                className="form-control"
              />
              {errors.battery && touched.battery ? (
                <div className="invalid-feedback d-block">{errors.battery}</div>
              ) : null}
            </div>
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

export default MobileAddForm;
