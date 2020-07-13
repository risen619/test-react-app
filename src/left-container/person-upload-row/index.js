import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../components/row';
import { Button } from '../../components/button';

import styles from './styles.module.scss';

export class PersonUploadRow extends Component
{
    render()
    {
        const { title, success } = this.props;

        return (
            <Row style={{ width: '100%', minHeight: 40, marginBottom: 10 }}>
                <div className={styles.left}>
                    <span className={success ? styles.success : ''}>{title}</span>
                </div>
                <div className={styles.right}>
                    {success ? (
                        <Fragment>
                            <div className={styles.filename}>
                                <i className="icon-clip"></i>&nbsp;<span>
                                    a_very_long_filename_goes_here.jpg
                                </span>
                            </div>
                            <div className={styles.filename}>
                                <i className="icon-clip"></i>&nbsp;<span>
                                    a_very_long_filename_goes_here.jpg
                                </span>
                            </div>
                        </Fragment>
                        ) : (
                        <Fragment>
                            <Button style={{ marginBottom: 6 }}>
                                <i className="icon-clip"></i>&nbsp;
                                Разворот
                            </Button>
                            <Button style={{ marginBottom: 6 }}>
                                <i className="icon-clip"></i>&nbsp;
                                Регистрация
                            </Button>
                        </Fragment>
                    )}
                </div>
            </Row>
        );
    }
} 

PersonUploadRow.propTypes = {
    title: PropTypes.string.isRequired,
    success: PropTypes.bool
};