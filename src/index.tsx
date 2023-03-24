import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const root = document.getElementById('root') as HTMLElement;
hydrateRoot(root, <Root />);
