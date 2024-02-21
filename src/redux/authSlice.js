import { createSlice } from '@reduxjs/toolkit';
import LOCAL_STORAGE from '../utils/localStorage';

const initialState = {
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { user, token, sessionReload } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      if (!sessionReload) {
        localStorage.setItem(LOCAL_STORAGE.LOG_IN_TIME, Date.now());
        localStorage.setItem(LOCAL_STORAGE.AUTH_TOKEN, token);
      }
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem(LOCAL_STORAGE.LOG_IN_TIME);
      localStorage.removeItem(LOCAL_STORAGE.AUTH_TOKEN);
      window.location.reload();
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
