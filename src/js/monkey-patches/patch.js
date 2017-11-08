import React from 'react';

const patchedClasses = [];
const patchedMethods = [];

export const patch = (transform) => {
  const originalCreateElement = React.createElement;

  function transformPossibleArrays (arg) {
    if (typeof arg === 'string') {
      return transform(arg);
    } else if (Array.isArray(arg)) {
      return arg.map(transformPossibleArrays);
    }

    return arg;
  }

  React.createElement = function createElement () {
    const args = Array.prototype.slice.call(arguments);

    const element = args[0];
    const props = args[1];

    if (props && props['data-no-patch']) {
      return originalCreateElement.apply(React, args);
    }

    args.forEach((arg, i) => {
      if (i >= 2) {
        args[i] = transformPossibleArrays(arg);
      }
    });

    if (typeof element === 'function') {
      if (
        element.prototype instanceof React.Component &&
        typeof element.prototype.render === 'function'
      ) {
        if (patchedClasses.indexOf(element) < 0) {
          const originalRender = element.prototype.render;

          patchedClasses.push(element);
          patchedMethods.push(originalRender);

          element.prototype.render = function render () {
            const renderArgs = Array.prototype.slice.call(arguments);
            return transformPossibleArrays(originalRender.apply(this, renderArgs));
          };
        }
      } else {
        const originalElement = element;

        args[0] = function () {
          const sfcArgs = Array.prototype.slice.call(arguments);
          return transformPossibleArrays(originalElement.apply(this, sfcArgs));
        };
      }
    } else if (element === 'input' && props && typeof props === 'object') {
      if (typeof props.placeholder === 'string') {
        props.placeholder = transform(props.placeholder);
      }

      if (
        (props.type === 'submit' || props.type === 'button') &&
        props.value &&
        typeof props.value === 'string'
      ) {
        props.value = transform(props.value);
      }
    } else if (element === 'a') {
      if (typeof props.title === 'string') {
        props.title = transform(props.title);
      }
    } else if (element === 'img') {
      if (typeof props.alt === 'string') {
        props.alt = transform(props.alt);
      }
    }

    return originalCreateElement.apply(React, args);
  };

  return () => {
    React.createElement = originalCreateElement;

    while (patchedClasses.length) {
      const patchedClass = patchedClasses.shift();
      patchedClass.prototype.render = patchedMethods.shift();
    }
  };
};
