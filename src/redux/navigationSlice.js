import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedBarPosition: '100vw',
};

export const navigationSlice = createSlice({
  name: 'navigationSlice',
  initialState,
  reducers: {
    loggedBarPositionUpdate: (state, action) => {
      state.loggedBarPosition = action.payload;
    },
  },
});

export const { loggedBarPositionUpdate } = navigationSlice.actions;

export default navigationSlice.reducer;
