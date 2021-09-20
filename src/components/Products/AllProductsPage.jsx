import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import { fetchAllProducts } from "../../redux/products/products.action";
import "./Product.css";
import ProductList from "./ProductList";

function AllProductsPage({ fetchAllProducts, products, fetchProductErr }) {
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <div className="container my-4">
      {products && products.length > 0 && !fetchProductErr ? (
        <>
          <h1>All Products</h1>
          <div className="row">
            <div className="col-lg-9">
              <ProductList
                products={products}
                fields={{ ram: true, camera: false }}
              />
            </div>
          </div>
        </>
      ) : fetchProductErr ? (
        <h3>{fetchProductErr}</h3>
      ) : (
        <div style={{ height: "60vh" }}>
          <Loading color="#ff4b2b" />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.allProducts,
    fetchProductErr: state.products.fetchProductErr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);
