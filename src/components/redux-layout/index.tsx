import React from 'react';
import s from './index.module.scss';
import classNames from 'classnames';
import numeral from 'numeral';
import { Menu } from '../menu';

interface Props {
    title?: string;
    children: React.ReactNode;
    total?: number;
}

export const ReduxLayout: React.FC<Props> = ({ children, title, total }) => {
    return (
        <div className={classNames(s.root)}>
            <div className={s.header}>
                <Menu />
                <div>{numeral(total).format('0,0[.]00 $')}</div>
            </div>
            <h1 className={s.title}>{title}</h1>
            <div className={s.content}>{children}</div>
            <div className={s.footer}>
                <div>{title}</div>
                <div>{numeral(total).format('0,0[.]00 $')}</div>
            </div>
        </div>
    );
};