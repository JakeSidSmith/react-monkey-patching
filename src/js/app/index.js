import React, { Component } from 'react';

import '../monkey-patches/llamify';
// import '../monkey-patches/scramble';

class StringClass extends Component {
  render () {
    return 'String class';
  }
}

const ArrayComponent = () => (
  [
    'Array',
    'Items'
  ]
);

const StringComponent = () => (
  'String SFC'
);

export default class App extends Component {
  render () {
    return (
      <div>
        <p>
          Hello, World!
        </p>
        <p>
          <ArrayComponent />
        </p>
        <p>
          <StringComponent />
        </p>
        <p>
          <StringClass />
        </p>
        <p>
          <input type="submit" value="Input type = submit" />
        </p>
        <p>
          <input type="button" value="Input type = button" />
        </p>
        <p>
          <input type="text" placeholder="Input type = text placeholder" />
        </p>
      </div>
    );
  }
}
