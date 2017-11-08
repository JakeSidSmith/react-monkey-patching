import React from 'react';
import ApplyButton from '../apply-button';
import PatchableComponent from '../../monkey-patches/patchable-component';
import BasicElements from '../basic-elements';

export default class Scramble extends PatchableComponent {
  render () {
    return (
      <div>
        <ApplyButton patch="scramble" />
        <h2>
          Euxcse me?
        </h2>
        <p>
          Similarly to llamify, this monkey patch affects all words in your app, but instead
          scrambles all the letters in every word on the page (excluding the first & last letter).
        </p>
        <p>
          Again, for demonstration purposes there are a bunch of varying elements below that are translated.
        </p>
        <BasicElements />
      </div>
    );
  }
}
