import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.PureComponent {
  render () {
    return (
      <ul>
        <li>
          <Link to="/">
            Intro
          </Link>
        </li>
        <li>
          <Link to="/what-is-monkey-patching/">
            What is monkey patching?
          </Link>
        </li>
        <li>
          <Link to="/why-react-create-element/">
            Why React?
          </Link>
        </li>
        <li>
          <Link to="/react-highlight-updates/">
            React highlight updates
          </Link>
        </li>
        <li>
          <Link to="/material-ui-button-effect/">
            Material UI button effect
          </Link>
        </li>
        <li>
          <Link to="/react-fastclick/">
            React fastclick
          </Link>
        </li>
        <li>
          <Link to="/simple-patch-function/">
            Simple patch function
          </Link>
        </li>
        <li>
          <Link to="/llamify/">
            Llamify
          </Link>
        </li>
        <li>
          <Link to="/scramble/">
            Scramble
          </Link>
        </li>
        <li>
          <Link to="/internationalization/">
            Internationalization
          </Link>
        </li>
      </ul>
    );
  }
}
