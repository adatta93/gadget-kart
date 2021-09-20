import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "../../App";
import "./Product.css";

export function Products({ product, fields }) {
  const imgPath = process.env.PUBLIC_URL + "/images/";
  const dtlLink = `/products/${product.id}`;

  const capitalizeFirstLetter = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  return (
    <Link
      to={{
        pathname: dtlLink,
        state: { prevPath: history.location.pathname },
      }}>
      {product ? (
        <div className="card">
          <div className="card-body">
            <div className="product-img-container">
              <img
                src={`${imgPath}${product.img}`}
                className="card-img-top product-img"
                alt={product.title}
              />
            </div>
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-subtitle">
              {product.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "INR",
              })}
            </h6>
            {Object.keys(fields).map(
              (fld) =>
                product[fld] &&
                fields[fld] && (
                  <div key={fld} className="my-1">
                    <span className="prod-prop-name">
                      {fld === "ram"
                        ? fld.toUpperCase()
                        : capitalizeFirstLetter(fld)}
                      :
                    </span>
                    <span className="prod-prop-value">
                      {product[fld] || "-"}
                    </span>
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        "No product"
      )}
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    fields: state.products.customFields,
  };
};

export default connect(mapStateToProps)(Products);
