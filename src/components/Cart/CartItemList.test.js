import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import { CartItemList } from "./CartItemList";

Enzyme.configure({ adapter: new Adapter() });

describe("When valid cart items props passed to CartItemList component", () => {
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
    wrapper = shallow(<CartItemList cartItems={cartItems} />);
  });

  it("product prop of first component should match correct id", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find("CartItem").at(0).prop("item").id).toEqual(15);
  });
});

describe("When cart items props passed to CartItemList component is null", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      cartItems: null,
    };
    wrapper = shallow(<CartItemList {...props} />);
  });

  it("should not crash and no CartItem Component is rendered", () => {
    expect(wrapper.find("CartItem").length).toEqual(0);
  });
});
