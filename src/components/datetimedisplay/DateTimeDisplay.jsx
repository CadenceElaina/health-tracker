import React, { useState, useEffect } from 'react';
import './datetimedisplay.css';
import { CiClock1 } from "react-icons/ci";
import { useTheme } from '../../context/ThemeContext';

const DateTimeDisplay = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const theme = useTheme();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(timer);
    }, []);

    const formatDateTime = (date) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = daysOfWeek[date.getDay()];
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${day}, ${time}`;
    };

    return (
        <div className={`datetime-display time-display-${theme}`}>
            {formatDateTime(currentDateTime)}
            <span className='clock-icon'>
                <CiClock1 />
            </span>
        </div>
    );
};

export default DateTimeDisplay;
