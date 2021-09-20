import { createBrowserHistory } from "history";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../redux/root.reducer";
import { ProductCategory } from "./ProductCategory";
import ProductList from "./ProductList";
import { Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

let store;
let props;
let history;
let products = [
  {
    id: 15,
    title: "Lenovo Ideapad S145 Core i3 7th Gen",
    img: "lenovo-ideapad.jpeg",
    category: "laptop",
    price: 31000,
    processor: "Intel Core i3 7th Gen",
    ram: "4GB",
    memory: "1TB HDD",
    screen: "15.6in Display",
    weight: "1.85kg",
  },
];
beforeAll(() => {
  props = {
    match: {
      params: {
        category: "Laptop",
      },
    },
    fetchProductsByCategory: jest.fn(),
    productsOriginal: products,
    products: products,
    fetchProductErr: "",
    searchProduct: jest.fn(),
    productByCatLoading: false,
  };
  store = createStore(rootReducer, applyMiddleware(thunk));
  history = createBrowserHistory();
});

describe("ProductCategory Snapshot", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <ProductCategory {...props} />
        </Router>
      </Provider>
    );
  });

  it("renders correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  afterEach(() => {
    wrapper.unmount();
  });
});

describe("ProductCategory rendering of elements", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ProductCategory {...props} />);
  });

  it("renders category page header", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find(".category-header").render().text()).toEqual("Laptop");
  });

  it("renders product list", () => {
    expect(wrapper.find(ProductList).length).toEqual(1);
  });

  it("renders customize field component on button click", () => {
    expect(wrapper.find("Connect(CustomizeFields)").length).toEqual(1);
  });
});
