import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './navigation';
import PageTitle from './page-title';
import Scrollable from './scrollable';
import Container from './container';
import routes from '../routes';

export default class App extends React.PureComponent {
  render () {
    return (
      <HashRouter>
        <table className="app">
          <tbody>
            <tr>
              <td className="navigation">
                <Scrollable>
                  <Navigation />
                </Scrollable>
              </td>
              <td className="main">
                {routes.map(({path, name, component: PageComponent}) => (
                  <Route
                    exact
                    key={path}
                    path={path}
                    render={() => ( // eslint-disable-line react/jsx-no-bind
                      <div>
                        <PageTitle>
                          {name}
                        </PageTitle>
                        <Scrollable>
                          <Container>
                            <PageComponent />
                          </Container>
                        </Scrollable>
                      </div>
                    )}
                  />
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </HashRouter>
    );
  }
}
