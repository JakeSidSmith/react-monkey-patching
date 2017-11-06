import React from 'react';
import { applyPatch } from '../../monkey-patches/patch-control';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class ApplyButton extends PatchableComponent {
  constructor (props) {
    super(props);

    this.onApplyPatch = this.onApplyPatch.bind(this);
  }

  onApplyPatch () {
    applyPatch(this.props.patch);
  }

  render () {
    return (
      <button
        data-no-patch
        className="apply-button"
        onClick={this.onApplyPatch}
      >
        Apply monkey patch!
      </button>
    );
  }
}
