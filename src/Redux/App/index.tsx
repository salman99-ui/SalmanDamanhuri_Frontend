import { configureStore } from '@reduxjs/toolkit';
import { apiAuth } from '../Feature';

const store = configureStore({
  reducer: {
    [apiAuth.reducerPath]: apiAuth.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(apiAuth.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
