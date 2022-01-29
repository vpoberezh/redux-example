import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './wallet/counterSlice';
import { ReduxState } from '../interfaces';

export const store = configureStore<ReduxState>({
    reducer: {
        counter: counterReducer,
    },
});
