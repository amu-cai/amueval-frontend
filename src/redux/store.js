import { configureStore } from '@reduxjs/toolkit';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import popUpMessegeSlice from './popUpMessegeSlice';

const store = configureStore({
  reducer: {
    popUpMessage: popUpMessegeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware({})),
});

initMessageListener(store);

export default store;
