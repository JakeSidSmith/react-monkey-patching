import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

// eslint-disable-next-line no-undef
const complexExample = require('fs').readFileSync(__dirname + '/../../monkey-patches/patch.js', 'utf8');

export default class SimplePatch extends PatchableComponent {
  render () {
    return (
      <div>
        <h2>
          A basic example
        </h2>
        <p>
          Below is an incredibly cut down version of the kind of monkey patch that the following few examples use.
        </p>
        <pre>
{`// Store the original function
const originalCreateElement = React.createElement;

// Define a new function
React.createElement = function () {
  // Get our arguments as an array
  const args = Array.prototype.slice.call(arguments);

  // Loop over the children (anything after the first 2 arguments)
  // And transform them if they are strings
  args.forEach((arg, index) => {
    if (index >= 2 && typeof arg === 'string') {
      args[index] = arg.replace(/\b\w+\b/gi, 'llama');
    }
  });

  // Apply args to the original function
  return originalCreateElement.apply(React, args);
};`}
        </pre>
        <h2>
          A complex example
        </h2>
        <p>
          This is the code that the following few examples use. Unlike the above examples, it that takes a transform
          function & returns an "unsubscribe" function that allows it to be un-patched.
        </p>
        <p>
          This also handles a lot more cases such as React 16's string / array components, and nested arrays.
        </p>
        <pre>{complexExample}</pre>
      </div>
    );
  }
}
