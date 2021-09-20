import React from "react";
import Products from "./Products";
import "./Product.css";

function ProductList({ products, ...props }) {
  return (
    <div className="product-list-container">
      {products && products.length > 0 ? (
        <div className="product-list">
          {products.map((product) => (
            <Products key={product.id} product={product} {...props} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ProductList;
