import React from 'react';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class VerticalCenter extends PatchableComponent {
  render () {
    const { children } = this.props;

    return (
      <div className="container">
        <div className="vertical-center">
          {children}
        </div>
      </div>
    );
  }
}
