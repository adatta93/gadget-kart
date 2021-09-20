import React from "react";

const Modal = ({ show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "black",
    opacity: "0.1",
    zIndex: 99,
  };

  return (
    <>
      {show && <div style={modalOverlayStyle}></div>}
      <div className={showHideClassName}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm</h5>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this product?</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
