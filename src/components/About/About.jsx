import React from "react";

function About() {
  return (
    <div className="jumbotron jumbotron-fluid bg-white">
      <div className="container">
        <h1 className="display-4" style={{ color: "#d02102" }}>
          GadgetKart
        </h1>
        <p className="lead" style={{ color: "#cc022f" }}>
          One Stop Place for All Gadgets
        </p>
        <div
          className=""
          style={{ marginTop: "40px", fontSize: "18px", textAlign: "justify" }}>
          <p>
            Here you can find different Laptops, Mobiles, Smartwatches,
            Earphones and many more.
          </p>
          <p>
            The app is divided by product categories. You can go to each product
            category page and look for the product you want.
          </p>
          <p>
            You can use the Search Bar to search for the product. Use the
            Customize button to show some quick specification on each product.
          </p>
          <p>
            After you have selected the product add it in your Cart. Once you
            have completed your shopping open the Cart and click on Place Order
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
