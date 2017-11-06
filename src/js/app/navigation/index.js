import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.PureComponent {
  render () {
    return (
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">
              Intro
            </Link>
          </li>
          <li>
            <Link to="/monkey-patching/">
              What is monkey patching?
            </Link>
          </li>
          <li>
            <Link to="/react-create-element/">
              Why React?
            </Link>
          </li>
          <li>
            <Link to="/highlight-updates/">
              React highlight updates
            </Link>
          </li>
          <li>
            <Link to="/material-ui-button/">
              Material UI button effect
            </Link>
          </li>
          <li>
            <Link to="/react-fastclick/">
              React fastclick
            </Link>
          </li>
          <li>
            <Link to="/patch-function/">
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
      </div>
    );
  }
}
