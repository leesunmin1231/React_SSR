import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PreloadedState } from '@reduxjs/toolkit';
import { initStore, RootState } from './module/store';
import App from './App';

const store = initStore(window.__PRELOADED_STATE__ as PreloadedState<RootState>);

function Root() {
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
  hydrateRoot(root, <Root />);
} else {
  createRoot(root).render(<Root />);
}
