import React from 'react';
import ReactDOM from 'react-dom/client';

import 'src/i18n/config';
import App from './App.tsx';

import { GlobalStyle } from './styles/global.styled.ts';
import { AppThemeProvider } from './providers';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppThemeProvider>
          <GlobalStyle />
          <App />
        </AppThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
