import React, { useState, useEffect } from 'react';
import './Calendar.css';
import next from '../images/right-arrow.png';
import previous from '../images/left-arrow.png';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date());
        }, 1000 * 60); // Update every minute
        return () => clearInterval(timer);
    }, []);

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const getCurrentMonthDays = () => {
        const days = [];
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const firstDayOfMonth = getFirstDayOfMonth(month, year);
        const daysInMonthCount = daysInMonth(month, year);

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let i = 1; i <= daysInMonthCount; i++) {
            const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            days.push(
                <div key={`day-${i}`} className={`calendar-day ${isToday ? 'today' : ''}`}>
                    {i}
                </div>
            );
        }

        return days;
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={prevMonth}><img src={previous} className='previousMonth'/></button>
                <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
                <button onClick={nextMonth}><img src={next} className='nextMonth'/></button>
            </div>
            <div className="calendar-grid">
                <div className="calendar-day-name">Sun</div>
                <div className="calendar-day-name">Mon</div>
                <div className="calendar-day-name">Tue</div>
                <div className="calendar-day-name">Wed</div>
                <div className="calendar-day-name">Thu</div>
                <div className="calendar-day-name">Fri</div>
                <div className="calendar-day-name">Sat</div>
                {getCurrentMonthDays()}
            </div>
        </div>
    );
};

export default Calendar;
