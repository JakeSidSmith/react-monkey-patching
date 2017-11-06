import React, { PureComponent } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './navigation';
import PageTitle from './pages/page-title';
import routes from '../routes';

class StringClass extends PureComponent {
  render () {
    return 'String class';
  }
}

class ArrayClass extends PureComponent {
  render () {
    return [
      [
        'Array',
        'class'
      ]
    ];
  }
}

const StringSFC = () => (
  'String SFC'
);

const ArraySFC = () => (
  [
    'Array',
    'SFC'
  ]
);

export default class App extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    const { value } = this.state;

    return (
      <HashRouter>
        <table className="app">
          <tbody>
            <tr>
              <td className="navigation">
                <Navigation />
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
                        <PageComponent />
                      </div>
                    )}
                  />
                ))}
                <div>
                  <p>
                    Hello, World!
                  </p>
                  <p>
                    <StringClass />
                  </p>
                  <p>
                    <ArrayClass />
                  </p>
                  <p>
                    <StringSFC />
                  </p>
                  <p>
                    <ArraySFC />
                  </p>
                  <p>
                    <input type="submit" value="Input type = submit" />
                  </p>
                  <p>
                    <input type="button" value="Input type = button" />
                  </p>
                  <p>
                    <input
                      type="text"
                      placeholder="Input type = text placeholder"
                      value={value}
                      onChange={this.onChange}
                    />
                  </p>
                  <p>
                    <img alt="Alt text" />
                  </p>
                  <p>
                    <a href="#" title="Link title">
                      Link with title
                    </a>
                  </p>
                  <p>
                    Alt number
                    <img alt={1} />
                  </p>
                  <p>
                    <a href="#" title={1}>
                      Link with title that's a number
                    </a>
                  </p>
                  <p>
                    Short word that doesn't need scrambling: "hi"
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </HashRouter>
    );
  }
}
