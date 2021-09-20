import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid fixed-bottom bg-dark py-3"
      style={{ position: "absolute" }}>
      <div className="row">
        <div className="col-6">
          <span className="lead text-light">
            &copy; 2020-2021 GadgetKart.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
