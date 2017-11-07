import React from 'react';
import ApplyButton from '../apply-button';
import PatchableComponent from '../../monkey-patches/patchable-component';
import BasicElements from '../basic-elements';

export default class Llamify extends PatchableComponent {
  render () {
    return (
      <div>
        <ApplyButton patch="llamify" />
        <p>
          Hello, World!
        </p>
        <BasicElements />
      </div>
    );
  }
}
