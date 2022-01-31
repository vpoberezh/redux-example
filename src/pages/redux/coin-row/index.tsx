import React, { useCallback, useMemo } from 'react';
import s from './index.module.scss';
import classNames from 'classnames';
import numeral from 'numeral';
import { useDispatch } from 'react-redux';
import { CoinActions } from '../../../redux/wallet/reducer';

interface Props {
  code: string;
  price: number;
  amount: number;
}

export const CoinRow: React.FC<Props> = ({ code, price = 0, amount = 1 }) => {
  const dispatch = useDispatch();

  const handlePriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(CoinActions.updateCoin({ code, price: parseFloat(e.currentTarget.value) }));
    },
    [code]
  );

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CoinActions.updateCoin({ code, amount: parseFloat(e.currentTarget.value) }));
  }, []);

  const evaluation = useMemo(() => {
    return price * amount;
  }, [price, amount]);

  return (
    <div className={classNames(s.root)}>
      <div className={classNames(s.item, s.code)}>{code}</div>
      <div className={s.item}>
        <input value={price} onChange={handlePriceChange} type="number" />
      </div>
      <div className={s.item}>
        <input value={amount} onChange={handleAmountChange} type="number" />
      </div>
      <div className={s.item}>{numeral(evaluation).format('0,0[.]00 $')}</div>
    </div>
  );
};
