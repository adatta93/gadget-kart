import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../ConfirmModal";
import Loading from "../../Loading";
import {
  deleteProduct,
  fetchAllProducts,
} from "../../redux/products/products.action";

export function AdminPage({ products, fetchAllProducts, deleteProduct }) {
  const [selectedProdForDelete, setSelectedProdForDelete] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const handleDeleteClick = (id) => {
    setSelectedProdForDelete(id);
    setModal(true);
  };

  const handleSubmit = (res) => {
    console.log("modal resp ", res);
    if (res === "yes") {
      deleteProduct(selectedProdForDelete);
    }
    modalClose();
  };

  const modalClose = () => {
    setModal(false);
  };

  return (
    <div className="container my-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>Product Administration</h2>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <Link className="btn btn-login" to="/admin/add-product">
            Add New Product
          </Link>
        </div>
      </div>
      <table className="table table-striped admin-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th className="text-right">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.title}</td>
                <td>{prod.category}</td>
                <td className="text-right">
                  {prod.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}
                </td>
                <td className="text-center">
                  <Link
                    className="btn btn-info prod-edit"
                    to={{
                      pathname: "/admin/edit-product",
                      state: { product: prod },
                    }}>
                    <i className="fas fa-edit"></i>
                    <span className="ml-2 d-none d-md-inline-block">Edit</span>
                  </Link>
                  <button
                    className="btn btn-danger ml-md-2"
                    onClick={() => handleDeleteClick(prod.id)}>
                    <i className="fas fa-trash"></i>
                    <span className="ml-2 d-none d-md-inline-block">
                      Delete
                    </span>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
      <Modal show={modal}>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={() => handleSubmit("no")}>
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleSubmit("yes")}>
            DELETE
          </button>
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("DTL ", state);
  return {
    products: state.products.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
