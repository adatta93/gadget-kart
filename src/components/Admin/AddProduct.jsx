import React, { useState } from "react";
import { connect } from "react-redux";
import { Prompt } from "react-router-dom";
import { addProduct } from "../../redux/products/products.action";
import HeadphoneAddForm from "./HeadphoneAddForm";
import LaptopAddForm from "./LaptopAddForm";
import MobileAddForm from "./MobileAddForm";
import SmartwatchAddForm from "./SmartwatchAddForm";
import TVAddForm from "./TVAddForm";

function AddProduct({ addProduct }) {
  const [category, setCategory] = useState("");
  const [formsubmitted, setFormsubmitted] = useState(false);

  const handleSubmit = (values) => {
    values.price = Number(values.price);
    setFormsubmitted(true);
    addProduct(values);
  };

  return (
    <div className="container my-4">
      <h2 className="my-3">Add New Product</h2>
      <div className="row">
        <div className="col form-group">
          <label htmlFor="category">Product Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control">
            <option value="">---Choose---</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
            <option value="tv">TV</option>
            <option value="smartwatch">Smartwatch</option>
            <option value="headphones">Headphones</option>
          </select>
        </div>
      </div>
      {category === "mobile" && <MobileAddForm handleSubmit={handleSubmit} />}
      {category === "laptop" && <LaptopAddForm handleSubmit={handleSubmit} />}
      {category === "tv" && <TVAddForm handleSubmit={handleSubmit} />}
      {category === "smartwatch" && (
        <SmartwatchAddForm handleSubmit={handleSubmit} />
      )}
      {category === "headphones" && (
        <HeadphoneAddForm handleSubmit={handleSubmit} />
      )}

      <Prompt
        when={!formsubmitted}
        message="You have unsaved changes. Are you sure you want leave?"
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (prod) => dispatch(addProduct(prod)),
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
