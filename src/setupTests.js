import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';

import { DUMMY_DATA } from './util'

configure({ adapter: new Adapter() });

fetchMock.get('http://foo.bar/api/data/1', DUMMY_DATA.one)
fetchMock.get('http://foo.bar/api/data/2', DUMMY_DATA.two)