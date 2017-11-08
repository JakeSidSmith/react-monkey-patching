import React from 'react';
import ApplyButton from '../apply-button';
import PatchableComponent from '../../monkey-patches/patchable-component';
import BasicElements from '../basic-elements';

export default class Llamify extends PatchableComponent {
  render () {
    return (
      <div>
        <ApplyButton patch="llamify" />
        <h2>
          Llamas FTW!
        </h2>
        <p>
          This monkey patch changes every word in your app to llama... because why not?
        </p>
        <p>
          I originally wrote this to mess with my project manager, but there is actually some use for this technique...
        </p>
        <p>
          For demonstration purposes there are a bunch of varying elements below that are translated.
        </p>
        <p>
          Note how it does not translate anything typed into the input.
        </p>
        <BasicElements />
      </div>
    );
  }
}
