import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class SimplePatch extends PatchableComponent {
  render () {
    return (
      <div>
        Simple patch
      </div>
    );
  }
}
