import React from "react";
import ProductChart from "../ProductChart/ProductChart";
import UserDetails from "./UserDetails";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <UserDetails />
        </div>
        <div className="col-12">
          <ProductChart />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
