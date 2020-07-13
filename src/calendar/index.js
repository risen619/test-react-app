import React from 'react';

import styles from './styles.module.scss';

const years = [
    { year: 2020, months: Array.from(Array(5), () => 1) },
    { year: 2019, months: Array.from(Array(12), () => 1) },
    { year: 2018, months: Array.from(Array(12), () => 0) }
];

const monthsMap = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

export const Calendar = () => (
    <div className={styles.root}>
        {years.map(y => <CalendarRow key={y.year} year={y} />)}
    </div>
);

const CalendarRow = ({ year }) => (
    <div className={styles['calendar-row']}>
        <div className={styles.left}>{year.year}</div>
        <div className={styles.right}>
            {year.months.map((m, i) => <MonthCell key={year.year + i} index={i} success={!!m} />)}
        </div>
    </div>
);

const MonthCell = ({ index, success }) => (
    <div className={styles['month-container']}>
        <div className={styles['month-name']}>
            {monthsMap[index]}
        </div>
        <div className={styles[success ? 'success' : 'fail']}></div>
    </div>
);