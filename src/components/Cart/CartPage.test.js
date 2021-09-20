import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import { CartPage } from "./CartPage";

Enzyme.configure({ adapter: new Adapter() });

describe("When valid cart items array props passed to CartPage component", () => {
  let wrapper;
  let cartItems = [
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
      quantity: 1,
    },
  ];
  beforeEach(() => {
    wrapper = shallow(<CartPage cartItems={cartItems} />);
  });

  it("should show the CartItemList", () => {
    expect(wrapper.find("Connect(CartItemList)").length).toEqual(1);
  });
});

describe("When cart item array props passed to CartPage component is null", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      cartItems: null,
    };
    wrapper = shallow(<CartPage {...props} />);
  });

  it("should not crash and no CartItemList Component is rendered", () => {
    expect(wrapper.find("Connect(CartItemList)").length).toEqual(0);
    expect(wrapper.find(".empty-cart").length).toEqual(1);
  });
});
