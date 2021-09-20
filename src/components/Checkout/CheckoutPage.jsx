import React from "react";
import { history } from "../../App";
import PriceDetail from "../Cart/PriceDetail";
import "./CheckoutPage.css";

function CheckoutPage() {
  return (
    <div className="container my-4">
      <h2 className="checkout-page-title">Checkout</h2>
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header bg-info text-white">
              Payment Options
            </div>
            <div className="card-body">
              <div className="payment-lists">
                <div>
                  <input type="radio" name="payment" />
                  <span className="payment-name">
                    UPI (PhonePe / Paytm / Google Pay)
                  </span>
                </div>
                <div>
                  <input type="radio" name="payment" />
                  <span className="payment-name">Wallets</span>
                </div>
                <div>
                  <input type="radio" name="payment" />
                  <span className="payment-name">
                    Credit / Debit / ATM Card
                  </span>
                </div>
                <div>
                  <input type="radio" name="payment" />
                  <span className="payment-name">Net Banking</span>
                </div>
                <div>
                  <input type="radio" name="payment" />
                  <span className="payment-name">Cash on Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <PriceDetail />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => history.push("/order-success")}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
