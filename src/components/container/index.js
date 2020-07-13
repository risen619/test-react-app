import React from 'react';

import styles from './styles.module.scss';

export const Container = ({ children, style, className, inner }) => (
    <div style={style} className={`${inner ? styles['inner-container'] : styles['outer-container']} ${className || ''}`.trim()}>
        {children}
    </div>
);