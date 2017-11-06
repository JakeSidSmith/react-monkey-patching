import React from 'react';
import PageTitle from './page-title';

export default class MonkeyPatching extends React.PureComponent {
  render () {
    return (
      <div>
        <PageTitle>
          Monkey patching!
        </PageTitle>
      </div>
    );
  }
}
