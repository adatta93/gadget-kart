import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import { Products } from "./Products";

Enzyme.configure({ adapter: new Adapter() });

describe("When valid product object props passed to Products component", () => {
  let wrapper;
  let prod = {
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
  };
  beforeEach(() => {
    wrapper = shallow(<Products product={prod} fields={{ ram: true }} />);
  });

  it("should show the correct product title", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find(".card-title").render().text()).toEqual(
      "Lenovo Ideapad S145 Core i3 7th Gen"
    );
  });

  it("should render customized fields if available", () => {
    expect(wrapper.find(".prod-prop-value").render().text()).toEqual("4GB");
  });
});
