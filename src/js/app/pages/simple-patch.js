import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

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
};

`}
        </pre>
      </div>
    );
  }
}
