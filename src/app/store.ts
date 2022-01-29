import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { ReduxState } from '../interfaces';

export const store = configureStore<ReduxState>({
  reducer: {
    counter: counterReducer,
  },
});
