import React, { useCallback, useEffect, useMemo, useState } from 'react';
import s from './index.module.scss';
import numeral from 'numeral';
import { CoinRow } from '../coin-row';
import { CoinList } from '../../../consts';

interface Props {
  onTotalChange: (total: number) => void;
}

export const CoinContainer: React.FC<Props> = ({ onTotalChange }) => {
  const [allEvaluation, setAllEvaluation] = useState<{ [key: string]: number }>({});

  const handleChange = useCallback(
    (code: string, evaluation: number) => {
      allEvaluation[code] = evaluation;
      setAllEvaluation({ ...allEvaluation });
    },
    [allEvaluation]
  );

  const total = useMemo(() => {
    const keys = Object.keys(allEvaluation);
    return keys.map((key) => allEvaluation[key]).reduce((a, b) => a + b, 0);
  }, [allEvaluation]);

  useEffect(() => {
    onTotalChange(total);
  }, [total]);

  return (
    <div>
      <div className={s.header}>
        <div>Coin</div>
        <div>$ Price</div>
        <div>Amount</div>
        <div>Evaluation</div>
      </div>
      <div className={s.content}>
        {CoinList.map(({ code, price, amount }, i) => (
          <CoinRow
            key={i}
            code={code}
            defaultPrice={price}
            defaultAmount={amount}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className={s.footer}>{`Total: ${numeral(total).format('0,0[.]00 $')}`}</div>
    </div>
  );
};
