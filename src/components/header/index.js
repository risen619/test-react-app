import React, { Component } from 'react';

import styles from './styles.module.scss';

export class Header extends Component
{
    render()
    {
        return (
            <div className={styles.root}>
                <div className={styles.main}>
                    <div className={styles.burger}>
                        <i className={`icon-clip ${styles['icon-placeholder']}`}></i>
                    </div>
                    <div className={styles.title}>
                        <div>
                            ООО “Ромашка обыкновенная”&nbsp;
                        </div>
                        <div>
                            ИНН 1234567890
                        </div>
                    </div>
                    <div className={styles.settings}>
                        <i className="icon-cog"></i>
                    </div>
                </div>
                <div className={styles.help}>
                    <i className="icon-help"></i>
                </div>
                <div className={styles.logout}>
                    <i className="icon-logout"></i> Выйти
                </div>
            </div>
        );
    }
}