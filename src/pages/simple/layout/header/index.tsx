import React from 'react';
import s from './index.module.scss';
import numeral from 'numeral';
import { Menu } from '../../../../components/menu';

interface Props {
  total?: number;
}

export const Header: React.FC<Props> = ({ total }) => {
  return (
    <div className={s.header}>
      <Menu />
      <div>{numeral(total).format('0,0[.]00 $')}</div>
    </div>
  );
};
