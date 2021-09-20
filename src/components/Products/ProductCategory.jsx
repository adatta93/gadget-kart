import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loading from "../../Loading";
import {
  fetchProductsByCategory,
  searchProduct,
} from "../../redux/products/products.action";
import SearchBar from "../SearchBar/SearchBar";
import CustomizeFields from "./CustomizeField";
import ProductList from "./ProductList";

export function ProductCategory({
  match: {
    params: { category },
  },
  fetchProductsByCategory,
  productsOriginal,
  products,
  fetchProductErr,
  searchProduct,
  productByCatLoading,
}) {
  useEffect(() => {
    fetchProductsByCategory(category);
  }, [fetchProductsByCategory, category]);

  const onSearch = (filterText) => {
    let filteredItems = productsOriginal.filter((item) =>
      item.title.toLocaleLowerCase().includes(filterText)
    );
    setTimeout(() => searchProduct(filteredItems), 500);
  };

  return (
    <div className="container my-4">
      {products && products.length > 0 ? (
        <>
          <h2 className="category-header">{category}</h2>
          <div className="row">
            <div className="col-10">
              <SearchBar onSearch={onSearch} />
            </div>
            <div style={{ position: "relative" }}>
              <button
                id="cutomizeBtn"
                className="btn btn-dark"
                style={{ style: "calc(1.5em + .75rem)" }}
                type="button"
                data-toggle="collapse"
                data-target="#customField"
                aria-controls="customField"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fas fa-cog"></i>
                <span className="d-none d-md-inline-block ml-lg-3">
                  Customize
                </span>
              </button>
              <div className="collapse customize-collapse" id="customField">
                <CustomizeFields categoryName={category} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <ProductList
                products={products}
                fields={{ ram: false, camera: false }}
              />
            </div>
          </div>
        </>
      ) : fetchProductErr ? (
        <h3>{fetchProductErr}</h3>
      ) : null}
      {productByCatLoading && (
        <div style={{ height: "60vh" }}>
          <Loading color="#ff4b2b" />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productsOriginal: state.products.productsByCategoryOrig,
    products: state.products.productsByCategory,
    fetchProductErr: state.products.fetchProductErr,
    productByCatLoading: state.products.productByCatLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsByCategory: (category) =>
      dispatch(fetchProductsByCategory(category)),
    searchProduct: (products) => dispatch(searchProduct(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);
