import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class Scrollable extends PatchableComponent {
  render () {
    const { children } = this.props;

    return (
      <div className="scrollable">
        {children}
      </div>
    );
  }
}
