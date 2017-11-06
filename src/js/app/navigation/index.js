import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import RemoveButton from '../remove-button';
import PatchableComponent from '../../monkey-patches/patchable-component';

export default class Navigation extends PatchableComponent {
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
        <li>
          <RemoveButton />
        </li>
      </ul>
    );
  }
}
