import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App/app';

ReactDOM.render(
  <IntlProvider locale={navigator.language}>
    <App />
  </IntlProvider>,
  document.getElementById('mainContainer')
);
