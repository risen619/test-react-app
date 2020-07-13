import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export class Button extends Component
{
    render()
    {
        const { children, className, ...rest } = this.props;

        return (
            <button className={`${styles.button} ${className}`.trim()} {...rest}>
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
};

Button.defaultProps = {
    onClick: () => null,
    style: { },
    className: ''
};