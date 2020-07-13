import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../components/row';
import { Button } from '../../components/button';

import { CheckmarkRound, Jet } from '../../icons';

import styles from './styles.module.scss';

export class DocumentUploadRow extends Component
{
    render()
    {
        const { title, success } = this.props;

        return (
            <Row style={{ width: '100%', minHeight: 40, marginBottom: 10 }}>
                <div className={styles.left}>
                    <span>{title}</span>
                </div>
                <div className={styles.right}>
                    {success ? <CheckmarkRound className={styles['icon-outer']} /> : <Jet className={styles['icon-outer']} />}
                    <Button><i className={`icon-clip ${styles.icon}`}></i>Прикрепить</Button>
                </div>
            </Row>
        );
    }
} 

DocumentUploadRow.propTypes = {
    title: PropTypes.string.isRequired,
    success: PropTypes.bool
};