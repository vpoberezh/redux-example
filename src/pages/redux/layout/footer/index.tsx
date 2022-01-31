import React from 'react';
import s from './index.module.scss';
import numeral from 'numeral';
import { ReduxState } from '../../../../interfaces';
import { useSelector } from 'react-redux';

interface Props {
  title: string;
}

export const Footer: React.FC<Props> = ({ title }) => {
  const total = useSelector((x: ReduxState) => x.wallet.total);
  return (
    <div className={s.footer}>
      <div>{title}</div>
      <div>{numeral(total).format('0,0[.]00 $')}</div>
    </div>
  );
};
