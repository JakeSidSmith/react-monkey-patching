import React from 'react';
import { subscribe } from './patch-control';

/**
 * This component exists for demonstration purposes
 * This allows me to force all component to re-render
 */
export default class PatchableComponent extends React.PureComponent {
  constructor (props) {
    super(props);

    this.forceUpdate = this.forceUpdate.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = subscribe(this.forceUpdate);
  }

  componentWillUnmount () {
    this.unsubscribe();
  }
}
