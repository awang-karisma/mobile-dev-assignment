import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import cartReducer from './cart/slice';
import NotificationHandler from './notification/handler';
import notificationReducer, { update as notificationUpdate } from './notification/slice';

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  actionCreator: notificationUpdate,
  effect: async (action) => {
    NotificationHandler({ ...action.payload });
  },
});
const store = configureStore({
  reducer: {
    notification: notificationReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;
