// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// export const store = createStore(
//   phonebookReducer,
//   composeWithDevTools(applyMiddleware()),
// );
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phonebookReducer } from './app/app-phonebook-reducer';

const phonebookPersistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter'],
};
const persisteReducer = persistReducer(
  phonebookPersistConfig,
  phonebookReducer,
);
export const store = configureStore({
  reducer: persisteReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});
export const persistor = persistStore(store);
