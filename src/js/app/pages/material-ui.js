import React from 'react';
import ApplyButton from '../apply-button';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class MaterialUI extends PatchableComponent {
  render () {
    return (
      <div>
        <ApplyButton patch="materialUIButtonEffect" />
        <h2>
          Get the Google look
        </h2>
        <p>
          No need to change any of your components or write fancy styles & js to get that look - just apply a monkey
          patch and instantly all of your buttons have that sexy Google look.
        </p>
        <p>
          Note: the apply & remove patch buttons have monkey patching disabled in this demo.
        </p>
        <button>
          Test button!
        </button>
      </div>
    );
  }
}
