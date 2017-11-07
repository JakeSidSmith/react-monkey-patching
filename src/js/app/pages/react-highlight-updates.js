import React from 'react';
import ApplyButton from '../apply-button';
import PatchableComponent from '../../monkey-patches/patchable-component';
import SimpleStore from '../../simple-store';

const initialState = {
  count: 0
};

const store = new SimpleStore(initialState);

class Count extends PatchableComponent {
  constructor (props) {
    super(props);

    this.state = initialState;
    this.updateState = this.setState.bind(this);
  }

  componentDidMount () {
    super.componentDidMount();

    this.unsubscribe = store.subscribe(this.updateState);
  }

  componentWillUnmount () {
    super.componentWillUnmount();

    this.unsubscribe();
  }

  render () {
    const { count } = this.state;

    return (
      <strong>
        Count: {count}
      </strong>
    );
  }
}

class Increment extends PatchableComponent {
  constructor (props) {
    super(props);

    this.state = initialState;
    this.increment = this.increment.bind(this);
    this.updateState = this.setState.bind(this);
  }

  componentDidMount () {
    super.componentDidMount();

    this.unsubscribe = store.subscribe(this.updateState);
  }

  componentWillUnmount () {
    super.componentWillUnmount();

    this.unsubscribe();
  }

  increment () {
    const { count } = this.state;

    store.set('count', count + 1);
  }

  render () {
    return (
      <button onClick={this.increment}>
        Increment
      </button>
    );
  };
}

export default class ReactHighlightUpdates extends PatchableComponent {
  render () {
    return (
      <div>
        <ApplyButton patch={'highlightUpdates'} />
        <h2>
          What is React Highlight Updates?
        </h2>
        <p>
          I designed this small library a short time ago to highlight when components have updated.
          This comes in handy when debugging certain issues.
        </p>
        <p>
          You can check it out on npm here:
          <a
            title="React Highlight Updates on npm"
            href="https://www.npmjs.com/package/react-highlight-updates"
            target="_blank"
          >
            React Highlight Updates on npm - npmjs.com/package/react-highlight-updates
          </a>
        </p>
        <h2>
          What does it do?
        </h2>
        <p>
          This package monkey patches components' `prototype.componentDidUpdate` method & applies an animation
          to the elements background color.
        </p>
        <p>
          Press the "Apply monkey patch" button above to give it a go now.
        </p>
        <p>
          <Count />
        </p>
        <p>
          <Increment />
        </p>
      </div>
    );
  }
}
