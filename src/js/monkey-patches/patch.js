import React from 'react';

export const patch = (transform) => {
  const createElement = React.createElement;

  React.createElement = function () {
    const args = Array.prototype.slice.call(arguments);

    args.forEach((arg, i) => {
      if (i >= 2) {
        if (typeof arg === 'string') {
          args[i] = transform(arg);
        }
      }
    });

    const element = args[0];
    const props = args[1];

    if (element === 'input' && props && typeof props === 'object') {
      if (props.placeholder) {
        props.placeholder = transform(props.placeholder);
      }

      if (
        (props.type === 'submit' || props.type === 'button') &&
        props.value &&
        typeof props.value === 'string'
      ) {
        props.value = transform(props.value);
      }
    }

    return createElement.apply(React, args);
  };
};
