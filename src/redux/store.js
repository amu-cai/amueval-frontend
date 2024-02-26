import { configureStore } from '@reduxjs/toolkit';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import popUpMessegeSlice from './popUpMessegeSlice';
import authSlice from './authSlice';
import navigationSlice from './navigationSlice';

const store = configureStore({
  reducer: {
    popUpMessage: popUpMessegeSlice,
    auth: authSlice,
    navigation: navigationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware({})),
});

initMessageListener(store);

export default store;
