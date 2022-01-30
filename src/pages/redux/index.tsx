import React from 'react';
import { Layout } from './layout';
import { CoinContainer } from './coin-container';

export const ReduxPage: React.FC = () => {
    return (
        <Layout title="Redux Wallet">
            <CoinContainer />
        </Layout>
    );
};
