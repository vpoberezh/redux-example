import React, { useCallback, useMemo, useState } from 'react';
import s from './index.module.scss';
import classNames from 'classnames';

interface Props{
    defaultPrice?: number;
    defaultAmount?: number;
}

export const CoinRow: React.FC<Props> = ({ defaultPrice = 0, defaultAmount=1})=>{
    const [price, setPrice] = useState<string>(defaultPrice.toString());
    const [amount, setAmount] = useState<string>(defaultAmount.toString());

    const handlePriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement> )=>{
        setPrice(e.currentTarget.value);
    }, []);

    const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement> )=>{
        setAmount(e.currentTarget.value);
    }, []);

    
    const sum = useMemo(()=>{
        return parseInt(price) * parseInt(amount);
    }, [price, amount]);

    return <div className={classNames(s.root)}>
        <div className={s.item}>
            <input  value={price} onChange={handlePriceChange} />        
        </div>
        <div className={s.item}>
            <input  value={amount} onChange={handleAmountChange} />
        </div>
        <div className={s.item}>{sum}</div>
    </div>
}
