import React from 'react';

import styles from './styles.module.scss';
import { Jet } from '../../icons';

const links = [
    { title: 'Идентификация', active: false, disabled: false },
    { title: 'Документация', active: true, disabled: false },
    { title: 'Решение', active: false, disabled: true },
    { title: 'Верификация', active: false, disabled: true },
    { title: 'Перевод средств', active: false, disabled: true }
];

export const Sidemenu = () => (
    <div className={styles.root}>
        <div className={styles.logo}>
            <div>
                <Jet /> JetLend
            </div>
        </div>
        {links.map(l => <Link key={l.title} link={l} />)}
        <div className={styles.placeholder}></div>
        <div className={styles.manager}>
            <div className={styles.avatar}>
                <img src="https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png" />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>Азамат Хугаев</div>
                <div className={styles.position}>Ваш персональный менеджер</div>
                <div className={styles.number}>
                    <i className="icon-call"></i>+7 (968) 865-65-26
                </div>
                <div className={styles.email}>
                    <i className="icon-envelope"></i>ak@jetlend.ru
                </div>
            </div>
        </div>
        <div className={styles.contact}>
            <div className={styles.phone}>
                <i className="icon-call"></i>8 (800) 222 93-32
            </div>
            <div className={styles.email}>
                <i className="icon-envelope"></i>support@jetlend.ru
            </div>
        </div>
    </div>
);

const Link = ({ link }) => (
    <div className={[styles.link, link.active ? styles.active : '', link.disabled ? styles.disabled : ''].join(' ')}>
        {link.title}
    </div>
);