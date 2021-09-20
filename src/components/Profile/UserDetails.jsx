import React from "react";
import { connect } from "react-redux";

function UserDetails({ userDetail }) {
  let { firstName, lastName, email, mobile, location } = userDetail;

  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header">
          <h5>User Details</h5>
        </div>
        <div className="card-body">
          <table className="table table-bordered user-table">
            <tr>
              <th>First Name</th>
              <td>{firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{lastName}</td>
            </tr>
            <tr>
              <th>Email Address</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <td>{mobile}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{location}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userDetail: state.user.loggedInUser,
  };
};

export default connect(mapStateToProps)(UserDetails);
