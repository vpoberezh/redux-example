import React, { useCallback, useState } from 'react';
import { Layout } from './layout';
import { CoinContainer } from './coin-container';

export const SimplePage: React.FC = () => {
    const [total, setTotal] = useState(0);

    const handleTotalChange = useCallback((newTotal: number) => {
        setTotal(newTotal);
    }, []);

    return (
        <Layout title="Simple Wallet" total={total}>
            <CoinContainer onTotalChange={handleTotalChange} />
        </Layout>
    );
};
