import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class ReactFastclick extends PatchableComponent {
  render () {
    return (
      <div>
        React fastclick
      </div>
    );
  }
}
