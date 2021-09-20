import { createBrowserHistory } from "history";
import { lazy, Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import AllProductsPage from "./components/Products/AllProductsPage";
import ProductCategory from "./components/Products/ProductCategory";
import Footer from "./Footer";
import GuardedRoute from "./GuardedRoute";
import Loading from "./Loading";

const ProfilePage = lazy(() => import("./components/Profile/ProfilePage"));
const LoginOrRegister = lazy(() => import("./components/User/LoginOrRegister"));
const EditProduct = lazy(() => import("./components/Admin/EditProduct"));
const AddProduct = lazy(() => import("./components/Admin/AddProduct"));
const AdminPage = lazy(() => import("./components/Admin/AdminPage"));
const About = lazy(() => import("./components/About/About"));
const CartPage = lazy(() => import("./components/Cart/CartPage"));
const CheckoutPage = lazy(() => import("./components/Checkout/CheckoutPage"));
const OrderSuccess = lazy(() => import("./components/Checkout/OrderSuccess"));
const ProductDetails = lazy(() =>
  import("./components/Products/ProductDetails")
);

export const history = createBrowserHistory();

function App({ logInSuccess }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [loading]);

  return (
    <>
      {!loading ? (
        <>
          {
            <Router history={history}>
              <Navbar />
              <Suspense
                fallback={
                  <Loading width="50px" height="50px" color="#ff4b2b" />
                }>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/products" component={AllProductsPage} />
                  <Route
                    exact
                    path="/product/:category"
                    component={ProductCategory}
                  />
                  <GuardedRoute
                    exact
                    path="/products/:id"
                    component={ProductDetails}
                    auth={logInSuccess}
                  />
                  <GuardedRoute
                    exact
                    path="/cart"
                    component={CartPage}
                    auth={logInSuccess}
                  />
                  <GuardedRoute
                    exact
                    path="/checkout"
                    component={CheckoutPage}
                    auth={logInSuccess}
                  />
                  <GuardedRoute
                    exact
                    path="/order-success"
                    component={OrderSuccess}
                    auth={logInSuccess}
                  />
                  <GuardedRoute
                    exact
                    path="/profile"
                    component={ProfilePage}
                    auth={logInSuccess}
                  />
                  <GuardedRoute
                    exact
                    path="/admin"
                    component={AdminPage}
                    auth={logInSuccess}
                  />
                  <GuardedRoute
                    exact
                    path="/admin/edit-product"
                    component={EditProduct}
                    auth={logInSuccess}
                  />
                  <GuardedRoute
                    exact
                    path="/admin/add-product"
                    component={AddProduct}
                    auth={logInSuccess}
                  />
                  <Route
                    exact
                    path="/login-register"
                    component={LoginOrRegister}
                  />
                  <Redirect to="/" />
                </Switch>
              </Suspense>
            </Router>
          }
        </>
      ) : (
        <div className="splash-screen">GadgetKart</div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    logInSuccess: state.user.logInSuccess,
  };
};

export default connect(mapStateToProps)(App);
