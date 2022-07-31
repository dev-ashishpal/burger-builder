import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NavItems from './NavItems';
import NavItem from './NavItem/NavItem';

configure({adapter: new Adapter()});

describe("<NavItems />", () => {
  it("should render two <NavItem/> elements if not authenticated.", () => {
      const wrapper = shallow(<NavItems />);
      expect(wrapper.find(NavItem)).toHaveLength(2);
  });
});
