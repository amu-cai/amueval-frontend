import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navMenuPosition: 'calc(-100vh - 42px)',
  mobileMenuHover: false,
  loggedBarPosition: '100vw',
  navOptionsVisible: true,
  loggedBarHover: false,
};

export const navigationSlice = createSlice({
  name: 'navigationSlice',
  initialState,
  reducers: {
    loggedBarHoverHandler: (state, action) => {
      state.loggedBarHover = action.payload;
    },
    navMenuHoverHandler: (state, action) => {
      state.mobileMenuHover = action.payload;
    },
    loggedBarPositionHandler: (state, action) => {
      state.loggedBarPosition = action.payload;
    },
    navOptionsHandler: (state, action) => {
      state.navOptionsVisible = action.payload;
    },
    loggedBarPositionToggle: (state) => {
      if (state.loggedBarPosition === '0' && !state.loggedBarHover) {
        state.loggedBarPosition = '100vw';
      } else state.loggedBarPosition = '0';
    },
    navMenuPositionToggle: (state) => {
      if (state.navMenuPosition === 'calc(-100vh - 82px)') {
        state.navMenuPosition = '0';
      } else if (!state.mobileMenuHover) {
        state.navMenuPosition = 'calc(-100vh - 82px)';
      }
    },
  },
});

export const {
  loggedBarPositionHandler,
  navOptionsHandler,
  loggedBarPositionToggle,
  loggedBarHoverHandler,
  navMenuHoverHandler,
  navMenuPositionToggle,
} = navigationSlice.actions;

export default navigationSlice.reducer;
