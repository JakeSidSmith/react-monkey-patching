import React from 'react';

export default class VerticalCenter extends React.PureComponent {
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
