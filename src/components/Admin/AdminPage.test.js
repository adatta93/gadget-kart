import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { createBrowserHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../redux/root.reducer";
import { AdminPage } from "./AdminPage";

Enzyme.configure({ adapter: new Adapter() });

let store;
let props;
let history;
beforeAll(() => {
  props = {
    products: [
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
    ],
    fetchAllProducts: jest.fn(),
    deleteProduct: jest.fn(),
  };
  store = createStore(rootReducer, applyMiddleware(thunk));
  history = createBrowserHistory();
});

describe("AdminPage Snapshot", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <AdminPage {...props} />
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

describe("When valid products array props passed to AdminPage component", () => {
  let wrapper;
  let props;
  beforeAll(() => {
    props = {
      products: [
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
      ],
    };
    wrapper = shallow(<AdminPage {...props} />);
  });

  it('renders "Product Name" as heading in first column', () => {
    expect(wrapper.find("th").at(0).render().text()).toEqual("Product Name");
  });

  it("renders correct Price value in third column of first row", () => {
    expect(wrapper.find("tr").at(1).find("td").at(2).render().text()).toEqual(
      "₹31,000.00"
    );
  });
});
