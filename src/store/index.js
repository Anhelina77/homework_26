import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todoSlice';
import { authApi } from './authApi';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
});
