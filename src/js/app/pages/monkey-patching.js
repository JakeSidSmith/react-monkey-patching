import React from 'react';

export default class MonkeyPatching extends React.PureComponent {
  render () {
    return (
      <div>
        <h2>
          Wikipedia says:
        </h2>
        <p>
          A monkey patch is a way for a program to extend or modify supporting system software locally (affecting only the running instance of the program).
        </p>
        <h2>
          So why's it called that?
        </h2>
        <p>
          The term monkey patch seems to have come from an earlier term, guerrilla patch, which referred to changing code sneakily – and possibly incompatibly with other such patches – at runtime.
        </p>
        <h2>
          What's it good for?
        </h2>
        <ul>
          <li>
            Replace methods / attributes / functions at runtime, e.g. to stub out a function during testing;
          </li>
          <li>
            Modify/extend behaviour of a third-party product without maintaining a private copy of the source code;
          </li>
          <li>
            Apply a patch at runtime to the objects in memory, instead of the source code on disk;
          </li>
          <li>
            Distribute security or behavioural fixes that live alongside the original source code (an example of this would be distributing the fix as a plugin for the Ruby on Rails platform).
          </li>
        </ul>
      </div>
    );
  }
}
