import React from 'react';

const createElement = React.createElement;

const llamify = (text) => {
  return text.replace(/\b[a-z]+\b/gi, (match) => {
    if (match.toUpperCase() === 'match') {
      return 'LLAMA';
    }

    if (match.toLowerCase() === 'match') {
      return 'llama';
    }

    return 'Llama';
  });
};

React.createElement = function () {
  const args = Array.prototype.slice.call(arguments);

  for (let i = 1; i < args.length; i += 1) {
    const arg = args[i];

    if (typeof arg === 'string') {
      args[i] = llamify(arg);
    }
  }

  if (args[0] === 'input' && args[1] && typeof args[1] === 'object') {
    const arg = args[1];

    if (arg.placeholder) {
      arg.placeholder = llamify(arg.placeholder);
    }

    if (
      (arg.type === 'submit' || arg.type === 'button') &&
      arg.value &&
      typeof arg.value === 'string'
    ) {
      arg.value = llamify(arg.value);
    }
  }

  return createElement.apply(React, args);
};
