import React, { useCallback, useEffect, useMemo, useState } from 'react';
import s from './index.module.scss';
import classNames from 'classnames';
import numeral from 'numeral';

interface Props {
    code: string;
    defaultPrice?: number;
    defaultAmount?: number;
    onChange: (code: string, sum: number) => void;
}

export const CoinRow: React.FC<Props> = ({ code, defaultPrice = 0, defaultAmount = 1, onChange }) => {
    const [price, setPrice] = useState<string>(defaultPrice.toString());
    const [amount, setAmount] = useState<string>(defaultAmount.toString());

    const handlePriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.currentTarget.value);
    }, []);

    const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.currentTarget.value);
    }, []);

    const sum = useMemo(() => {
        return parseFloat(price) * parseInt(amount);
    }, [price, amount]);

    useEffect(() => {
        onChange(code, sum);
    }, [sum]);

    return (
        <div className={classNames(s.root)}>
            <div className={classNames(s.item, s.code)}>{code}</div>
            <div className={s.item}>
                <input value={price} onChange={handlePriceChange} type="number" />
            </div>
            <div className={s.item}>
                <input value={amount} onChange={handleAmountChange} type="number" />
            </div>
            <div className={s.item}>{numeral(sum).format('0,0[.]00 $')}</div>
        </div>
    );
};
