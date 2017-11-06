import React from 'react';
import { removePatch } from '../../monkey-patches/patch-control';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class RemoveButton extends PatchableComponent {
  constructor (props) {
    super(props);

    this.onRemovePatch = this.onRemovePatch.bind(this);
  }

  onRemovePatch () {
    removePatch();
  }

  render () {
    return (
      <button
        data-no-patch
        className="remove-button"
        onClick={this.onRemovePatch}
      >
        Remove monkey patch.
      </button>
    );
  }
}
