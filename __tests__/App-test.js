/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {REACT_APP_BASE_URL, REACT_APP_API_KEY} from 'react-native-dotenv';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('app settings', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('environment variable is not null', () => {
    expect(REACT_APP_BASE_URL).not.toBeNull();
    expect(REACT_APP_API_KEY).not.toBeNull();
  });
});
