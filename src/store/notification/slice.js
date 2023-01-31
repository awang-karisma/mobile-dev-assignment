import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  image: '',
  price: '',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    update: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = { ...action.payload };
    },
  },
});

export const { update } = notificationSlice.actions;

export default notificationSlice.reducer;
