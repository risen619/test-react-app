import React from 'react';

import styles from './styles.module.scss';

export const Row = ({ children, style, className }) => (
    <div className={`${styles.row} ${className || ''}`.trim()} style={style}>
        {children}
    </div>
);