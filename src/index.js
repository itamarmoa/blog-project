// CSS libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './assets/css/main.scss';

import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import ScrollToTop from './components/ScrollToTop';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
