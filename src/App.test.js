import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adaptor: new EnzymeAdapter() });

test("renders learn react link", () => {});
