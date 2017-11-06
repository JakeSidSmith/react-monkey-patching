import React from 'react';

export default class Scrollable extends React.PureComponent {
  render () {
    const { children } = this.props;

    return (
      <div className="scrollable">
        {children}
      </div>
    );
  }
}
