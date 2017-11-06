import React from 'react';

class StringClass extends React.PureComponent {
  render () {
    return 'String class';
  }
}

class ArrayClass extends React.PureComponent {
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

export default class Llamify extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    const { value } = this.state;

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
          <input
            type="text"
            placeholder="Input type = text placeholder"
            value={value}
            onChange={this.onChange}
          />
        </p>
        <p>
          <img alt="Alt text" />
        </p>
        <p>
          <a href="#" title="Link title">
            Link with title
          </a>
        </p>
        <p>
          Alt number
          <img alt={1} />
        </p>
        <p>
          <a href="#" title={1}>
            Link with title that's a number
          </a>
        </p>
        <p>
          Short word that doesn't need scrambling: "hi"
        </p>
      </div>
    );
  }
}
