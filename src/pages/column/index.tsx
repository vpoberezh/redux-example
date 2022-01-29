import React from 'react';
import s from './index.module.scss';
import classNames from 'classnames';

interface Props {
    title: string;
    className: string;
    children: React.ReactNode;
}

export const ContentColumn: React.FC<Props> = ({ title, className, children }) => {
    return (
        <div className={classNames(s.root, className)}>
            <div className={s.title}>{title}</div>
            <div className={s.content}>{children}</div>
        </div>
    );
};
