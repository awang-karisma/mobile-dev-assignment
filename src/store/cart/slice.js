import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.list[action.payload.id]) {
        // eslint-disable-next-line no-param-reassign
        state.list[action.payload.id].count += 1;
      } else {
        // eslint-disable-next-line no-param-reassign
        state.list[action.payload.id] = {
          count: 1,
          ...action.payload,
        };
      }
    },
    remove: (state, action) => {
      if (state.list[action.payload]) {
        // eslint-disable-next-line no-param-reassign
        delete state.list[action.payload];
      }
    },
    increase: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.list[action.payload].count += 1;
    },
    decrease: (state, action) => {
      if (state.list[action.payload].count > 1) {
        // eslint-disable-next-line no-param-reassign
        state.list[action.payload].count -= 1;
      } else {
        // eslint-disable-next-line no-param-reassign
        delete state.list[action.payload];
      }
    },
  },
});

export const { add, remove, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
