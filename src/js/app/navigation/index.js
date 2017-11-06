import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

export default class Navigation extends React.PureComponent {
  render () {
    return (
      <ul>
        {routes.map(({path, name}) => (
          <li key={path}>
            <Link to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
