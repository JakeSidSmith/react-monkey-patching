import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class ReactFastclick extends PatchableComponent {
  render () {
    return (
      <div>
        <h2>
          Say what?
        </h2>
        <p>
          React Fastclick is a library I wrote a while ago to counter the 300ms delay experienced on some mobile
          devices **cough iPhones cough** when click handlers are triggered (to account for double clicks, but
          basically noone uses double clicks, especially on mobile).
        </p>
        <p>
          Originally inspired by FT Labs' Fastclick
          (<a
            title="FT Labs Fastclick"
            href="https://github.com/ftlabs/fastclick"
            target="_blank"
          >
            link
          </a>) React Fastclick solved some issues that the existing solutions did not.
        </p>
        <p>
          Unfortunately I don't have a demo of this here, but you can check it out on npm. I may, however, be
          deprecating it soon as it's very hard to keep up to date due to new devices and changes to React.
        </p>
        <p>
          <a
            title="React Fastclick on npm"
            href="https://www.npmjs.com/package/react-fastclick"
            target="_blank"
          >
            React Fastclick on npm - npmjs.com/package/react-fastclick
          </a>
        </p>
        <h2>
          How does it work?
        </h2>
        <p>
          Just like the other examples in this demo fastclick monkey patches <code>React.createElement</code>.
        </p>
        <p>
          It looks for elements that have the <code>onClick</code> prop, or certain element types that have the delay
          even without an click handler (such as inputs), and adds some additional touch events to their props.
        </p>
        <p>
          If a touch event is detected that resembles a click then the <code>onClick</code> callback is triggered on
          <code>touchend</code>, and <code>event.preventDefault</code> (or similar) is called to prevent an additional
          click event being triggered shortly afterwards.
        </p>
      </div>
    );
  }
}
