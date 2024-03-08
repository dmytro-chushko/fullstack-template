import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/i18n/config';
import App from './App.tsx';

import { GlobalStyle } from './styles/global.styled.ts';
import { AppThemeProvider } from './providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
);
