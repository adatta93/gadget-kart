import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Prompt, useLocation } from "react-router-dom";
import { history } from "../../App";
import { editProduct } from "../../redux/products/products.action";
import HeadphoneAddForm from "./HeadphoneAddForm";
import LaptopAddForm from "./LaptopAddForm";
import MobileAddForm from "./MobileAddForm";
import SmartwatchAddForm from "./SmartwatchAddForm";
import TVAddForm from "./TVAddForm";

export function EditProduct({ editProduct }) {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState("");
  const [formsubmitted, setFormsubmitted] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setProduct(location.state.product);
      setCategory(location.state.product.category);
    } else {
      history.push("/admin");
    }
  }, []);

  const handleSubmit = (values) => {
    setFormsubmitted(true);
    values.price = Number(values.price);
    editProduct(product.id, values);
  };

  return (
    <div className="container my-4">
      <h2 className="my-3">Edit Product</h2>
      {category === "mobile" && (
        <MobileAddForm handleSubmit={handleSubmit} product={product} />
      )}
      {category === "laptop" && (
        <LaptopAddForm handleSubmit={handleSubmit} product={product} />
      )}
      {category === "tv" && (
        <TVAddForm handleSubmit={handleSubmit} product={product} />
      )}
      {category === "smartwatch" && (
        <SmartwatchAddForm handleSubmit={handleSubmit} product={product} />
      )}
      {category === "headphones" && (
        <HeadphoneAddForm handleSubmit={handleSubmit} product={product} />
      )}

      {location.state && (
        <Prompt
          when={!formsubmitted}
          message="You have unsaved changes. Are you sure you want leave?"
        />
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProduct: (id, prod) => dispatch(editProduct(id, prod)),
  };
};

export default connect(null, mapDispatchToProps)(EditProduct);
