import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { history } from "../../App";
import Loading from "../../Loading";
import {
  fetchProductDetails,
  updateTopViewedProduct,
} from "../../redux/products/products.action";
import AddToCartButton from "../Cart/AddToCartButton";
import {
  headphoneSpecification,
  laptopSpecification,
  mobileSpecification,
  tvSpecification,
  watchSpecification,
} from "./SpecificationByCategory";

function ProductDetails({
  match: {
    params: { id },
  },
  fetchProductDetails,
  product,
  userId,
  updateTopViewedProduct,
  fetchProductErr,
}) {
  useEffect(() => {
    fetchProductDetails(id);
    console.log("hist", history);
  }, [id, history]);

  useEffect(() => {
    if (product && product.hasOwnProperty("title")) {
      updateTopViewedProduct(product, userId);
    }
  }, [product]);

  const location = useLocation();

  const onBackClick = () => {
    location.state ? history.push(location.state.prevPath) : history.push("/");
  };

  const showSpecification = (product) => {
    switch (product.category) {
      case "mobile":
        return mobileSpecification(product);
      case "laptop":
        return laptopSpecification(product);
      case "smartwatch":
        return watchSpecification(product);
      case "tv":
        return tvSpecification(product);
      case "headphones":
        return headphoneSpecification(product);
      default:
        break;
    }
  };

  return (
    <div className="container my-4">
      {product ? (
        <>
          <button className="btn btn-outline-secondary" onClick={onBackClick}>
            <i className="fas fa-arrow-left"></i>
            <span style={{ marginLeft: "10px" }}>Back</span>
          </button>
          <div className="detail-grid row">
            <div className="col-lg-5">
              <div className="detail-img-container">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${product.img}`}
                  alt={product.title}
                  className="detail-img"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="detail-desc-container">
                <div className="row">
                  <div className="col-lg-7">
                    <h2>{product.title}</h2>
                    <div className="product-price">
                      {product.price
                        ? product.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            style: "currency",
                            currency: "INR",
                          })
                        : "-"}
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <AddToCartButton item={product} />
                  </div>
                </div>

                <div className="specification">
                  <h4>Specification</h4>
                  <table className="table product-detail-table">
                    {showSpecification(product)}
                  </table>
                </div>
              </div>
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
  console.log("DTL ", state);
  return {
    product: state.products.productDetail,
    fetchProductErr: state.products.fetchProductErr,
    userId: state.user.loggedInUser.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductDetails: (id) => dispatch(fetchProductDetails(id)),
    updateTopViewedProduct: (product, userId) =>
      dispatch(updateTopViewedProduct(product, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
