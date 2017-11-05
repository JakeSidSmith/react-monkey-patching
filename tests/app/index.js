import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../src/js/app/';

describe('App', () => {

  const originalCreateElement = React.createElement;

  beforeEach(() => {
    React.createElement = originalCreateElement;
  });

  it('should match snapshot', () => {
    expect(renderer.create(<App />)).toMatchSnapshot();
  });

  it('should match snapshot when llamified', () => {
    require('../../src/js/monkey-patches/llamify');

    expect(renderer.create(<App />)).toMatchSnapshot();
  });

  it('should match snapshot when scrambled', () => {
    require('../../src/js/monkey-patches/scramble');

    expect(renderer.create(<App />)).toMatchSnapshot();
  });

});
