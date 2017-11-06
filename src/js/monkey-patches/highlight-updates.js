import React from 'react';
import ReactDOM from 'react-dom';

const patchedClasses = [];
const patchedMethods = [];

const HIGHLIGHT_CLASS = 'react-update-highlight';
const MATCHES_HIGHLIGHT_CLASS = /\s*\breact-update-highlight\b\s*/gi;

const STYLE = document.createElement('style');
STYLE.type = 'text/css';

const highlightUpdates = (color = 'rgba(255, 0, 0, 0.5)') => {
  STYLE.innerHTML =
`.react-update-highlight {
  animation-name: react-update-highlight;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
@keyframes react-update-highlight {
  from {
    background-color: ${color};
  }
  to {
    background-color: transparent;
  }
}`;

  document.head.appendChild(STYLE);

  const originalCreateElement = React.createElement;

  React.createElement = function () {
    const args = Array.prototype.slice.call(arguments);
    const component = args[0];

    if (
      typeof component === 'function' &&
      component.prototype instanceof React.Component &&
      patchedClasses.indexOf(component) < 0
    ) {
      const originalComponentDidUpdate = component.prototype.componentDidUpdate;

      patchedClasses.push(component);
      patchedMethods.push(originalComponentDidUpdate);

      component.prototype.hasReactUpdateHighlight = true;
      component.prototype.componentDidUpdate = function () {
        const updateArgs = Array.prototype.slice.call(arguments);
        let node;

        try {
          node = ReactDOM.findDOMNode(this);
        } catch (error) {
          return;
        }

        if (!node) {
          return;
        }

        if (MATCHES_HIGHLIGHT_CLASS.test(node.className)) {
          node.className = node.className.replace(MATCHES_HIGHLIGHT_CLASS, '');
        }

        void node.offsetWidth; // tslint:disable-line:no-unused-expression
        const needsSpace = node.className || node.className.lastIndexOf(' ') !== node.className.length - 1;
        node.className = `${node.className}${needsSpace ? ' ' + HIGHLIGHT_CLASS : HIGHLIGHT_CLASS}`;

        if (typeof originalComponentDidUpdate === 'function') {
          originalComponentDidUpdate.apply(this, updateArgs);
        }
      };
    }

    return originalCreateElement.apply(this, args);
  };

  return () => {
    React.createElement = originalCreateElement;

    while (patchedClasses.length) {
      const patchedClass = patchedClasses.shift();
      console.log(patchedClass, patchedClasses);
      patchedClass.prototype.componentDidUpdate = patchedMethods.shift();
    }
  };
};

export default () => highlightUpdates();
