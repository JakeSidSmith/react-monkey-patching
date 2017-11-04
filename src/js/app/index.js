import React, { Component } from 'react';

const ArrayComponent = () => (
  [
    'Array',
    'Items'
  ]
);

const StringComponent = () => (
  'String'
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
          <input type="submit" value="Input Submit" />
        </p>
        <p>
          <input type="button" value="Input Button" />
        </p>
        <p>
          <input type="text" placeholder="Input Text Placeholder" />
        </p>
      </div>
    );
  }
}
