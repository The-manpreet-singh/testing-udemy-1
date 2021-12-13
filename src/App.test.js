import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adaptor: new EnzymeAdapter() });

test("renders App component", () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
});
