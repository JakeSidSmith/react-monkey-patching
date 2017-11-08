import React from 'react';
import ApplyButton from '../apply-button';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class MaterialUI extends PatchableComponent {
  render () {
    return (
      <div>
        <ApplyButton patch="materialUIButtonEffect" />
        <h2>
          Want that Google look?
        </h2>
        <button>
          Test button!
        </button>
      </div>
    );
  }
}
