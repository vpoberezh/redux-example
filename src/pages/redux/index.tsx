import React from 'react';
import { ReduxLayout } from '../../components/redux-layout';
import { CoinContainer } from './coin-container';

export const ReduxPage: React.FC = () => {
    return (
        <ReduxLayout title="Redux Wallet">
            <CoinContainer />
        </ReduxLayout>
    );
};
