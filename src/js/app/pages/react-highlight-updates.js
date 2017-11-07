import React from 'react';
import ApplyButton from '../apply-button';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class ReactHighlightUpdates extends PatchableComponent {
  render () {
    return (
      <div>
        <ApplyButton patch={'highlightUpdates'} />
        <h2>
          What is React Highlight Updates?
        </h2>
        <p>
          I designed this small library a short time ago to highlight when components have updated.
          This comes in handy when debugging certain issues.
        </p>
        <p>
          You can check it out on npm here:
          <a
            title="React Highlight Updates on npm"
            href="https://www.npmjs.com/package/react-highlight-updates"
            target="_blank"
          >
            React Highlight Updates on npm - npmjs.com/package/react-highlight-updates
          </a>
        </p>
        <h2>
          What does it do?
        </h2>
        <p>
          This package monkey patches components' `prototype.componentDidUpdate` method & applies an animation
          to the elements background color.
        </p>
        <p>
          Press the "Apply monkey patch" button above to give it a go now.
        </p>
      </div>
    );
  }
}
