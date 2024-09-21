import Calendar from 'react-calendar'

// imports default style, will want to replace with our own css
import './CalendarHolder.css';

export default function CalendarHolder() {
    return (
        <Calendar />
    )
}

function tileDisabled() {
    return true
}