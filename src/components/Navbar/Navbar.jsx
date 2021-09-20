import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/users/users.action";

function Navbar({ loggedInUser, logout, cartItemCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom py-0">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <NavLink className="navbar-brand" to="/">
        GadgetKart
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item dropdown">
			<button 
			  className="nav-link btn btn-link dropdown-toggle" 
			  type="button" 
			  id="dropdownMenuButton" 
			  data-toggle="dropdown"
			  aria-expanded="false">
			  Product Category
			</button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <NavLink
                className="dropdown-item"
                activeClassName="active"
                to="/product/mobile">
                Mobile
              </NavLink>
              <NavLink
                className="dropdown-item"
                activeClassName="active"
                to="/product/laptop">
                Laptop
              </NavLink>
              <NavLink
                className="dropdown-item"
                activeClassName="active"
                to="/product/smartwatch">
                Smartwatch
              </NavLink>
              <NavLink
                className="dropdown-item"
                activeClassName="active"
                to="/product/tv">
                TV
              </NavLink>
              <NavLink
                className="dropdown-item"
                activeClassName="active"
                to="/product/headphones">
                Headphones
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              activeClassName="active"
              to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              style={{ position: "relative" }}
              exact
              activeClassName="active"
              to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="dropdown-item-label">Cart</span>
              <div className="cart-count">{cartItemCount}</div>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <button
          className="btn dropdown-toggle header-user"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <i className="fas fa-user-circle fa-2x"></i>
        </button>
        <div
          className="dropdown-menu user-dropdown"
          aria-labelledby="dropdownMenuButton">
          {loggedInUser.firstName && (
            <>
              <span className="dropdown-item user-name">
                Hello, {loggedInUser.firstName}!
              </span>
              <div className="dropdown-divider"></div>
            </>
          )}
          <NavLink
            className="dropdown-item"
            exact
            activeClassName="active"
            to="/profile">
            <i className="fas fa-user-circle"></i>
            <span className="dropdown-item-label">Profile</span>
          </NavLink>
          <NavLink
            className="dropdown-item"
            exact
            activeClassName="active"
            to="/admin">
            <i className="fas fa-users-cog"></i>
            <span className="dropdown-item-label">Admin</span>
          </NavLink>
          {loggedInUser.firstName ? (
            <div
              className="dropdown-item"
              style={{ cursor: "pointer" }}
              onClick={logout}>
              <i className="fas fa-power-off"></i>
              <span className="dropdown-item-label">Logout</span>
            </div>
          ) : (
            <NavLink
              className="dropdown-item"
              exact
              activeClassName="active"
              to="/login-register">
              <i className="fas fa-sign-in-alt"></i>
              <span className="dropdown-item-label">Login/Register</span>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.user.loggedInUser,
    cartItemCount: state.cart.cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
