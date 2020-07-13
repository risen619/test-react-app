import React from 'react';

import { Container } from '../components/container';

import { DocumentUploadRow } from './document-upload-row';

import styles from './styles.module.scss';

const models = [
    { title: '40702810301500023683 (АО "ТИНЬКОФФ БАНК")', success: true },
    { title: '40702810301500023683 (МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК")', success: false },
    { title: '40702810301500023683 (Филиал "Бизнес" ПАО "Совкомбанк" (Москва))', success: false }
];

export const RightContainer = ({ className, ...props }) => (
    <Container className={[styles.root, className].join(' ')} inner {...props}>
        <div className={styles.title}>
            Загрузите банковские выписки за последние 24 месяца в формате .txt (1C) по следующим счетам:
        </div>

        <div className={styles.subtitle}>
            Загрузите выписки за период 06.06.2017 по 06.06.2020. Это позволит повысить вероятность одобрения.
        </div>

        <div className={styles.documents}>
            {models.map(m => <DocumentUploadRow key={m.title} title={m.title} success={m.success} />)}
        </div>
    </Container>
);