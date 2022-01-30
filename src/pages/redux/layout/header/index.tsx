import React from 'react';
import s from './index.module.scss';
import numeral from 'numeral';
import { Menu } from '../../../../components/menu';
import { ReduxState } from '../../../../interfaces';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {
    const total = useSelector((x: ReduxState) => x.wallet.total);
    return (
        <div className={s.header}>
            <Menu />
            <div>{numeral(total).format('0,0[.]00 $')}</div>
        </div>
    );
};
