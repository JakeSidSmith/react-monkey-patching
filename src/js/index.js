import { polyfill as polyfillRaf } from 'raf';

polyfillRaf();

import './livereload';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/';

ReactDOM.render(<App />, document.getElementById('app'));
