import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './customCalendar.css';

const formatMonth = (date) => {
    const options = { month: 'long' };
    return date.toLocaleDateString(undefined, options);
};

const formatRange = (startDate, endDate) => {
    const options = { day: 'numeric', month: 'short' };
    const formattedStartDate = startDate.toLocaleDateString(undefined, options);
    const formattedEndDate = endDate.toLocaleDateString(undefined, options);
    return `${formattedStartDate} - ${formattedEndDate}`;
};

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const CustomCalendar = ({ onDateSelect, placeholder = "Selecciona una fecha" }) => {
    const [date, setDate] = useState(new Date());
    const [view, setView] = useState('month');
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const calendarRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setCalendarVisible(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleDateChange = (date) => {
        if (Array.isArray(date)) {
            const [startDate, endDate] = date;
            setInputValue(formatRange(startDate, endDate));
            if (onDateSelect) {
                onDateSelect({
                    type: 'dateRange',
                    dateRange: [formatDate(startDate), formatDate(endDate)]
                });
            }
        } else {
            setInputValue(formatMonth(date));
            if (onDateSelect) {
                const month = date.getMonth() + 1;
                onDateSelect({
                    type: 'month',
                    month: { month }
                });
            }
        }
        setDate(date);
        setCalendarVisible(false);
    };

    const handleToggleView = () => {
        setView((prevView) => (prevView === 'month' ? 'year' : 'month'));
    };

    const toggleCalendar = () => {
        setCalendarVisible(prevVisible => !prevVisible);
    };


    return (
        <div ref={containerRef} className="CalendarContainer">
            <div>
                <input
                    className="CalendarInput"
                    type="text"
                    onFocus={toggleCalendar}
                    value={inputValue}
                    placeholder={placeholder ? placeholder : "Selecciona una fecha"}
                    readOnly
                />
            </div>
            {calendarVisible && (
                <div ref={calendarRef} className="CalendarPopupContainer">
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                        view={view}
                        maxDetail={view}
                        minDetail={view}
                        selectRange={view === 'month'}
                        //minDate es para no poder seleccionar fechas anteriores a la actual
                        //minDate={new Date()}
                    />
                    <button className="CalendarToggleBtn" onClick={handleToggleView}>
                        Ver {view === 'month' ? 'por mes' : 'por día'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CustomCalendar;
