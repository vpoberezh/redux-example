import React from 'react';
import s from './index.module.scss';
import { CoinRow } from '../coin-row';
import numeral from 'numeral';
import { ReduxState } from '../../../interfaces';
import { useSelector } from 'react-redux';

export const CoinContainer: React.FC = () => {
  const coins = useSelector((x: ReduxState) => x.wallet.coins);
  const total = useSelector((x: ReduxState) => x.wallet.total);

  return (
    <div>
      <div className={s.header}>
        <div>Coin</div>
        <div>$ Price</div>
        <div>Amount</div>
        <div>Evaluation</div>
      </div>
      <div className={s.content}>
        {coins.map(({ code, price, amount }, i) => (
          <CoinRow key={i} code={code} price={price} amount={amount} />
        ))}
      </div>
      <div className={s.footer}>{`Total: ${numeral(total).format('0,0[.]00 $')}`}</div>
    </div>
  );
};
