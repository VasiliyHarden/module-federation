import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export const mount = el => {
  ReactDOM.render(
    <App />,
    el,
  );
};

const isolatedBody = document.getElementById('dev-marketing');

if (isolatedBody) {
  mount(isolatedBody);
}
