// Sole purpose of CalendarHolder is to hold the Calendar from react-calendar
import Calendar from 'react-calendar'

import './CalendarHolder.css';

export default function CalendarHolder() {
    return (
        <>
            <h1 className="header"> <u> Statistics </u> </h1>
            <Calendar />
        </>
    )
}