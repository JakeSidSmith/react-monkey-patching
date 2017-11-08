import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class Internationalization extends PatchableComponent {
  render () {
    return (
      <div>
        <h2>
          Taking the madness and doing something useful with it
        </h2>
        <p>
          So, although the last couple of examples may have seemed like madness they've actually inspired me to create
          a new internationalization library based on this monkey patching technique.
        </p>
        <p>
          Unfortunately I haven't had time to start on this yet, but I'll outline the concept for you...
        </p>
        <h2>
          The method in the madness
        </h2>
        <p>
          You write your React application in the same way you always would - no need to worry about wrapping strings
          in an internationalization function or component, or create unique keys for each sentence you want translated.
        </p>
        <p>
          Then once your app is finished you simply run a command that uses an AST (abstract syntax tree) parser over
          your whole app, picking up any static content within your JSX.
        </p>
        <p>
          This program hashes each sentence and creates a translation file with the hashed sentence as the key (to
          prevent duplicates).
        </p>
        <p>
          You then simply import the internationalization monkey patch, and it'll pick up your translation files and
          apply them automagically to you application.
        </p>
        <p>
          Further thoughts: the command should be able update your translations files and highlight new, added, or
          removed terms in a similar way to how git handles diffing / merge conflicts.
        </p>
        <p>
          These changes should be applied to all languages.
        </p>
      </div>
    );
  }
}
