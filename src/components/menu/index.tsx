import React from 'react';
import s from './index.module.scss';

export const Menu: React.FC = () => {
    return (
        <div className={s.menu}>
            <a className={s.link} href="/#/">
                Simple
            </a>
            <a className={s.link} href="/#/redux">
                Redux
            </a>
        </div>
    );
};
