import React from 'react';
import { ContentColumn } from './column';

import s from './index.module.scss';
import { CoinRow } from './coin-row';


export const CustomPage: React.FC = ()=>{
    return <div className={s.root}>    
        <div className={s.header}>
            <div>Price</div>
            <div>Amount</div>
            <div>Sum</div>
        </div>
        <div className={s.content}>
            <CoinRow defaultPrice={33000} defaultAmount={1} />
            <CoinRow defaultPrice={33000} defaultAmount={2} />
        </div>    
    </div>;
}