import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from './App';

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const root = document.getElementById('root') as HTMLElement;
if (process.env.NODE_ENV === 'production') {
  loadableReady(() => {
    ReactDOM.hydrate(<Root />, root);
  });
} else {
  ReactDOM.render(<Root />, root);
}
