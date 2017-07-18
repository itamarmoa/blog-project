// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './assets/css/main.scss';

import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './store';

import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.querySelector('#root')
);
