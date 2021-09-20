import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import ProductList from "./ProductList";

Enzyme.configure({ adapter: new Adapter() });

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
    fields: {
      ram: false,
    },
  };
});

describe("When valid products array props passed to ProductList component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ProductList {...props} />);
  });

  it("product prop of first component should match correct id", () => {
    expect(wrapper.find("Connect(Products)").at(0).prop("product").id).toEqual(
      15
    );
  });
});

describe("When products array props passed to ProductList component is null", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      products: null,
    };
    wrapper = shallow(<ProductList {...props} />);
  });

  it("should not crash and no Product Component is rendered", () => {
    expect(wrapper.find("Connect(Products)").length).toEqual(0);
  });
});
