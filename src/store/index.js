import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import notificationReducer, { update as notificationUpdate } from './notification/slice';
import NotificationHandler from './notification/handler';

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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;
