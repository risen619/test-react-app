import React from 'react';

import styles from './styles.module.scss';

export const Footer = () => (
    <div className={styles.root}>
        <div className={styles.text}>
            г. Москва, Пресненская наб. 6, строение 2<br />ИНН <b>7724451748</b> ОГРН <b>1187746779868</b>
        </div>
        <div className={styles.text}>
            2019 ООО "Джетленд"<br /><a href="mailto:support@jetlend.ru">support@jetlend.ru</a> <b>8 800 222 9332</b>
        </div>
    </div>
);