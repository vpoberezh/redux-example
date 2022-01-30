import { configureStore } from '@reduxjs/toolkit';
import { walletReducer } from './wallet/reducer';
import { ReduxState } from '../interfaces';

export const store = configureStore<ReduxState>({
    reducer: {
        wallet: walletReducer,
    },
});
