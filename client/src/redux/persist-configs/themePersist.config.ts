import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { themeState } from '../reducers/themeState';

export const themePersistConfig = {
  key: 'theme',
  storage,
};

export const persistedThemeReducer = persistReducer(
  themePersistConfig,
  themeState.reducer,
);
