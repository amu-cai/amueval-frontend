import { configureStore } from '@reduxjs/toolkit';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import popUpMessegeSlice from './popUpMessegeSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    popUpMessage: popUpMessegeSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware({})),
});

initMessageListener(store);

export default store;
