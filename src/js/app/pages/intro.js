import React from 'react';

export default class MonkeyPatching extends React.PureComponent {
  render () {
    return (
      <div>
        <h2>
          Monkey Patching React
        </h2>
        <p>
          Hello! My name is Jake, and today I'm going to show you some totally not hacks at all, really not hacks,
          believe me, I promise, awesome monkey patching of React.
        </p>
        <h2>
          Want more awesome stuff?
        </h2>
        <p>
          Here's some links you might enjoy:
        </p>
        <ul>
          <li>
            <a
              title="This demo"
              href="https://jakesidsmith.github.io/react-monkey-patching/"
              target="_blank"
            >
              This demo - jakesidsmith.github.io/react-monkey-patching/
            </a>
          </li>
          <li>
            <a
              title="My Blog"
              href="http://jakesidsmith.com"
              target="_blank"
            >
              My Blog - jakesidsmith.com
            </a>
          </li>
          <li>
            <a
              title="My GitHub"
              href="https://github.com/jakesidsmith/"
              target="_blank"
            >
              My GitHub - github.com/jakesidsmith/
            </a>
          </li>
          <li>
            <a
              title="My Twitter"
              href="https://twitter.com/jakesidsmith/"
              target="_blank"
            >
              My Twitter - twitter.com/jakesidsmith/
            </a>
          </li>
          <li>
            <a
              title="React Highlight Updates"
              href="https://www.npmjs.com/package/react-highlight-updates"
              target="_blank"
            >
              React Highlight Updates (we'll cover this shortly) - npmjs.com/package/react-highlight-updates
            </a>
          </li>
          <li>
            <a
              title="React Fastclick"
              href="https://www.npmjs.com/package/react-fastclick"
              target="_blank"
            >
              React Fastclick (we'll cover this briefly also) - npmjs.com/package/react-fastclick
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
