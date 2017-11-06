import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../src/js/app/';
import { applyPatch } from '../../src/js/monkey-patches/patch-control';

describe('App', () => {

  const originalCreateElement = React.createElement;

  beforeEach(() => {
    React.createElement = originalCreateElement;
  });

  it('should match snapshot', () => {
    expect(renderer.create(<App />)).toMatchSnapshot();
  });

  it('should match snapshot when llamified', () => {
    applyPatch('llamify');

    expect(renderer.create(<App />)).toMatchSnapshot();
  });

  it('should match snapshot when scrambled', () => {
    applyPatch('scramble');

    expect(renderer.create(<App />)).toMatchSnapshot();
  });

});
