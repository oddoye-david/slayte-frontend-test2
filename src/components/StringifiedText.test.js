import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';

import StringifiedText from './StringifiedText';
import { DUMMY_DATA } from '../util'

describe('renders JSON.stringify representation of the data', () => {
  it('should render with a depth of 2', async () => {
    const component = mount(<StringifiedText depth={2} url="http://foo.bar/api/data/1" />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update()
    expect(component.find('pre').text()).toBe(JSON.stringify(DUMMY_DATA.one, null, 2));
  });

  it('should update render when url is changed', async () => {
    const component = mount(<StringifiedText depth={2} url="http://foo.bar/api/data/1" />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update()
    component.setProps({ url: 'http://foo.bar/api/data/2' })
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update()
    expect(component.find('pre.code').text()).toBe(JSON.stringify(DUMMY_DATA.two, null, 2));
  });

  it('should update render when depth is changed', async () => {
    const component = mount(<StringifiedText depth={2} url="http://foo.bar/api/data/1" />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update()
    component.setProps({ depth: 5 })
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update()
    expect(component.find('pre.code').text()).toBe(JSON.stringify(DUMMY_DATA.one, null, 5));
  });
});