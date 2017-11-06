import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class ReactHighlightUpdates extends PatchableComponent {
  render () {
    return (
      <div>
        React highlight updates
      </div>
    );
  }
}
