import React, { Component } from 'react';

// import '../monkey-patches/scramble';
import '../monkey-patches/llamify';

class StringClass extends Component {
  render () {
    return 'String class';
  }
}

class ArrayClass extends Component {
  render () {
    return [
      [
        'Array',
        'class'
      ]
    ];
  }
}

const StringSFC = () => (
  'String SFC'
);

const ArraySFC = () => (
  [
    'Array',
    'SFC'
  ]
);

export default class App extends Component {
  render () {
    return (
      <div>
        <p>
          Hello, World!
        </p>
        <p>
          <StringClass />
        </p>
        <p>
          <ArrayClass />
        </p>
        <p>
          <StringSFC />
        </p>
        <p>
          <ArraySFC />
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
        <p>
          <img alt="Alt text" />
        </p>
        <p>
          <a href="#" title="Link title">
            Link with title
          </a>
        </p>
      </div>
    );
  }
}
