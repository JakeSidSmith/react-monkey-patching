import React from 'react';

const STYLE = document.createElement('style');
STYLE.type = 'text/css';

STYLE.innerHTML = `
  .material-ui-button-effect {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50%;
    margin-left: -50%;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 50%;
    background-color: #FFFFFF;
    mix-blend-mode: overlay;
    animation-name: material-ui-button-effect;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }
  @keyframes material-ui-button-effect {
    from {
      opacity: 0.5;
      transform: scale(0, 0);
    }
    to {
      opacity: 0;
      transform: scale(2, 2);
    }
  }
`;

document.head.appendChild(STYLE);

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

      props.style = Object.assign({}, {position: 'relative', overflow: 'hidden'}, props.style);

      props.onClick = function (event) {
        const onClickArgs = Array.prototype.slice.call(arguments);

        const node = event.currentTarget;

        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();

        const top = event.clientY - rect.top;
        const left = event.clientX - rect.left;

        const pew = document.createElement('div');
        pew.className = 'material-ui-button-effect';
        pew.style = `top:${top}px;left:${left}px;`;

        node.appendChild(pew);

        setTimeout(() => {
          if (pew) {
            pew.remove();
          }
        }, 2000);

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
