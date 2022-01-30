import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './wallet/slice';
import { ReduxState } from '../interfaces';

export const store = configureStore<ReduxState>({
    reducer: {
        counter: counterReducer,
    },
});
