import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';

const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root");
}

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element,
);

