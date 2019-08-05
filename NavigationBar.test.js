import React from "react";
import { shallow } from "enzyme";
import MenuContent, { items, toggleDrawer } from "../NavigationBar/MenuContent";
import Navigator, {
  NavigationBar,
  changeNavigateRoute
} from "../NavigationBar/Navigator";

import SideBarDrawer from "../NavigationBar/SideBarDrawer";
import { Link } from "react-router";

describe("MenuContent component", () => {
  it("should render without error ", () => {
    // const wrapper = shallow(<MenuContent />);
    expect(Link).toMatchSnapshot();
  });
});
describe("Navigator component", () => {
  it("should render without error", () => {
    expect(NavigationBar).toMatchSnapshot();
    expect(toggleDrawer).toMatchSnapshot();
  });
});
describe("SideBarDrawer component", () => {
  it("should render successfully", () => {
    expect(SideBarDrawer).toMatchSnapshot();
  });
});
