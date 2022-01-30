import React from 'react';
import s from './index.module.scss';
import numeral from 'numeral';

interface Props {
    title: string;
    total?: number;
}

export const Footer: React.FC<Props> = ({ title, total }) => {
    return (
        <div className={s.footer}>
            <div>{title}</div>
            <div>{numeral(total).format('0,0[.]00 $')}</div>
        </div>
    );
};
