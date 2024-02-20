import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popUpHeader: '',
  popUpMessage: '',
  borderColor: null,
  confirmPopUpHandler: null,
};

export const popUpMessegeSlice = createSlice({
  name: 'popUpMessegeSlice',
  initialState,
  reducers: {
    popUpMessageHandler: (state, action) => {
      const { header, message, borderColor, confirmHandler } = action.payload;
      state.popUpHeader = header;
      state.popUpMessage = message;
      state.borderColor = borderColor;
      if (confirmHandler !== null && confirmHandler !== undefined) {
        state.confirmPopUpHandler = () => confirmHandler();
      } else state.confirmPopUpHandler = null;
    },
  },
});

export const { popUpMessageHandler } = popUpMessegeSlice.actions;

export default popUpMessegeSlice.reducer;
