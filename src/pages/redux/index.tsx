import React, { useCallback, useState } from 'react';
import { ReduxLayout } from '../../components/redux-layout';
import { CoinContainer } from './coin-container';

export const ReduxPage: React.FC = () => {
    const [total, setTotal] = useState(0);

    const handleTotalChange = useCallback((newTotal: number) => {
        setTotal(newTotal);
    }, []);

    return (
        <ReduxLayout title="Redux Wallet" total={total}>
            <CoinContainer onTotalChange={handleTotalChange} />
        </ReduxLayout>
    );
};
