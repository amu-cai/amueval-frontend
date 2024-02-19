import { configureStore } from '@reduxjs/toolkit';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware({})),
});

initMessageListener(store);

export default store;
