import React from 'react';

const HIGHLIGHT_CLASS = 'react-update-highlight';
const MATCHES_HIGHLIGHT_CLASS = /\s*\breact-update-highlight\b\s*/gi;

const materialUIButtonEffect = () => {
  const originalCreateElement = React.createElement;

  React.createElement = function createElement () {
    const args = Array.prototype.slice.call(arguments);

    if (!args[1]) {
      args[1] = {};
    }

    const element = args[0];
    const props = args[1];

    if (props && props['data-no-patch']) {
      return originalCreateElement.apply(React, args);
    }

    if (element === 'button') {
      const originalOnClick = props.onClick;

      props.onClick = function (event) {
        const onClickArgs = Array.prototype.slice.call(arguments);

        const node = event.target;

        if (!node) {
          return;
        }

        if (MATCHES_HIGHLIGHT_CLASS.test(node.className)) {
          node.className = node.className.replace(MATCHES_HIGHLIGHT_CLASS, '');
        }

        void node.offsetWidth; // tslint:disable-line:no-unused-expression
        const needsSpace = node.className || node.className.lastIndexOf(' ') !== node.className.length - 1;
        node.className = `${node.className}${needsSpace ? ' ' + HIGHLIGHT_CLASS : HIGHLIGHT_CLASS}`;

        if (typeof originalOnClick === 'function') {
          return originalOnClick.apply(this, onClickArgs);
        }
      };
    }

    return originalCreateElement.apply(React, args);
  };

  return () => {
    React.createElement = originalCreateElement;
  };
};

export default materialUIButtonEffect;
