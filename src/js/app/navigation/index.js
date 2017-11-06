import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class Navigation extends PatchableComponent {
  render () {
    return (
      <ul>
        {routes.map(({path, name}) => (
          <li key={path}>
            <Link data-no-patch to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
