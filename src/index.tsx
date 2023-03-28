import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initStore } from './module/store';
import App from './App';

const store = initStore(window.__PRELOADED_STATE__);
function Root() {
  delete window.__PRELOADED_STATE__;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const root = document.getElementById('root') as HTMLElement;
if (process.env.NODE_ENV === 'production') {
  hydrate(<Root />, root);
} else {
  render(<Root />, root);
}
