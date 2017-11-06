import React from 'react';

export default class Title extends React.PureComponent {
  render () {
    const { children } = this.props;

    return (
      <h1 className="page-title">
        {children}
      </h1>
    );
  }
}
