import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default class ReactCreateElement extends PatchableComponent {
  render () {
    return (
      <div>
        <h2>
          Because React is awesome?
        </h2>
        <p>
          Well, yes, but also because React has this really nice API that we can hook into.
        </p>
        <h2>
          JSX & React.createElement
        </h2>
        <p>
          Hopefully you've written some JSX that looks like this before:
        </p>
        <SyntaxHighlighter language="javascript" useInlineStyles={false}>
          {`<div className="my-div">
  Hello, World!
</div>`}
        </SyntaxHighlighter>
        <p>
          But you may not know that all of your JSX markup actually compiles down into one simple function.
        </p>
        <p>
          Well, it's not exactly that simple, but for the purposes of these demos, let's assume it is.
        </p>
        <p>
          Here's what the above JSX compiles down to:
        </p>
        <SyntaxHighlighter language="javascript" useInlineStyles={false}>
          {'React.createElement(\'div\', {className: \'my-div\'}, \'Hello, World!\')'}
        </SyntaxHighlighter>
        <p>
          It's because of this that it's so easy to monkey patch React and affect all of your components.
        </p>
        <p>
          Additionally, unlike monkey patching <code>document.createElement</code>, we have already defined
          all of our elements' properties; styles, event handlers, etc, so we can easily modify existing properties.
        </p>
      </div>
    );
  }
}
