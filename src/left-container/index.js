import React from 'react';

import { Container } from '../components/container';

import styles from './styles.module.scss';
import { PersonUploadRow } from './person-upload-row';

const models = [
    { title: 'Иванов Иван Иванович', success: true },
    { title: 'Константинопольский Константин Константинович', success: false },
    { title: 'Петров Петр Петрович', success: false },
    { title: 'Константинопольская Констанция Константиновна', success: false }
];

export const LeftContainer = ({ className, ...props }) => (
    <Container className={[styles.root, className].join(' ')} inner {...props}>
        <div className={styles.title}>
            Загрузите копию паспорта директора и учредителей компании: основной разворот и регистрация.
        </div>

        <div className={styles.people}>
            {models.map(m => <PersonUploadRow key={m.title} title={m.title} success={m.success} />)}
        </div>
    </Container>
);