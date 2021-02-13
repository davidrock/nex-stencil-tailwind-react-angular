import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from '@myworkspace/design-system/loader';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements();
});
