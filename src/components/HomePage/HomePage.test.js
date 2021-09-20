import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import HomePage from "./HomePage";

Enzyme.configure({ adapter: new Adapter() });

describe("HomePage rendering of elements", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<HomePage />);
  });

  it("renders menu items", () => {
    expect(wrapper.find(".menu-item").length).toEqual(5);
  });

  it("renders first menu item title correctly", () => {
    //console.log(wrapper.debug());
    expect(wrapper.find(".title").at(0).render().text()).toEqual("LAPTOP");
  });
});
