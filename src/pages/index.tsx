import React, { useCallback, useMemo, useState } from 'react';
import numeral from 'numeral';

import s from './index.module.scss';
import { CoinRow } from './coin-row';
import { CoinList } from '../consts';

export const CustomPage: React.FC = () => {
    const [allSum, setAllSum] = useState<{ [key: string]: number }>({});

    const handleChange = useCallback(
        (code: string, sum) => {
            allSum[code] = sum;
            setAllSum({ ...allSum });
        },
        [allSum]
    );

    const total = useMemo(() => {
        const keys = Object.keys(allSum);
        return keys.map((key) => allSum[key]).reduce((a, b) => a + b, 0);
    }, [allSum]);

    return (
        <div className={s.root}>
            <div className={s.header}>
                <div>Coin</div>
                <div>$ Price</div>
                <div>Amount</div>
                <div>Sum</div>
            </div>
            <div className={s.content}>
                {CoinList.map(({ code, price, amount }, i) => (
                    <CoinRow key={i} code={code} defaultPrice={price} defaultAmount={amount} onChange={handleChange} />
                ))}
            </div>
            <div className={s.footer}>{`Total: ${numeral(total).format('0,0[.]00 $')}`}</div>
        </div>
    );
};
