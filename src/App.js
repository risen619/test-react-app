import React from 'react';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Container } from './components/container';
import { Row } from './components/row';
import { Button } from './components/button';
import { Sidemenu } from './components/sidemenu';

import { LeftContainer } from './left-container';
import { RightContainer } from './right-container';
import { Calendar } from './calendar';

import styles from './styles.module.scss';

function App()
{
	return (
		<div className={styles.root}>
            <Sidemenu />

			<Header />

            <Container className={styles['content-container']}>
                <div className={styles.title}>Загрузите документацию</div>
                
                <Row className={styles['uploads-row']}>
                    <LeftContainer />
                    <RightContainer />
                </Row>

                <Calendar />

                <Button className={styles.button}>Отправить на оценку</Button>
            </Container>

            <Footer />
		</div>
	);
}

export default App;
