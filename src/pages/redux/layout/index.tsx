import React from 'react';
import s from './index.module.scss';
import classNames from 'classnames';
import { Header } from './header';
import { Footer } from './footer';

interface Props {
    title: string;
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
    return (
        <div className={classNames(s.root)}>
            <Header />
            <h1 className={s.title}>{title}</h1>
            <div className={s.content}>{children}</div>
            <Footer title={title} />
        </div>
    );
};
