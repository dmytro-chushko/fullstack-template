import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/i18n/config';
import App from './App.tsx';

import { GlobalStyle } from './styles/global.styled.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
