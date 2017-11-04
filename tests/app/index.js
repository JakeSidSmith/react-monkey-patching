import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../src/js/app/';

describe('App', () => {

  it('should match snapshot', () => {
    expect(renderer.create(<App />)).toMatchSnapshot();
  });

});
