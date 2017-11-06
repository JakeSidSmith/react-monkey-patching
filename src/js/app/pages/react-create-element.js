import React from 'react';

export default class ReactCreateElement extends React.PureComponent {
  render () {
    return (
      <div>
        <h2>
          Because React is awesome?
        </h2>
        <p>
          Well, yes, but also because React has this really nice API that we can hook into.
        </p>
        <h2>
          JSX & React.createElement
        </h2>
        <p>
          Hopefully you've written some JSX that looks like this before:
        </p>
        <pre>
          {`<div className="my-div">
  Hello, World!
</div>`}
        </pre>
        <p>
          But you may not know that all of your JSX markup actually compiles down into one simple function:
        </p>
        <pre>
          {'React.createElement(\'div\', {className: \'my-div\'}, \'Hello, World!\')'}
        </pre>
        <p>
          It's because of this that it's so easy to monkey patch React and affect all of your components.
        </p>
        <p>
          Additionally, unlike monkey patching <code>document.createElement</code>, we have already defined
          all of our styles, event handlers, etc, so we can easily modify existing properties.
        </p>
      </div>
    );
  }
}
