import React from 'react';
import ApplyButton from '../apply-button';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class Scramble extends PatchableComponent {
  render () {
    return (
      <div>
        <ApplyButton patch="scramble" />
      </div>
    );
  }
}
