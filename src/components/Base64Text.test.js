import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import Base64Text from './Base64Text';
import { DUMMY_DATA } from '../util';

describe('renders Base64 representation of the data', () => {
  it('should render given a url', async () => {
    const component = mount(<Base64Text url="http://foo.bar/api/data/1" />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update()
    expect(component.find('pre').text()).toBe(window.btoa(JSON.stringify(DUMMY_DATA.one)));
  });

  it('should update render when url is changed', async () => {
    const component = mount(<Base64Text url="http://foo.bar/api/data/1" />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update()
    component.setProps({ url: 'http://foo.bar/api/data/2' })
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update()
    expect(component.find('pre.code').text()).toBe(window.btoa(JSON.stringify(DUMMY_DATA.two)));
  });
});