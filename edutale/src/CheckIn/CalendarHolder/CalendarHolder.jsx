// Sole purpose of CalendarHolder is to hold the Calendar from react-calendar
import Calendar from 'react-calendar'
import './CalendarHolder.css'
import * as USER from "../../USER.json"

export default function CalendarHolder() {
    // function that iterates through the react-calendar's days,
    // comparing each day to the stored checked-in days for the
    // user. Will apply the "checked-in" class to dates that
    // were found.
    function checkedInDays({ date }) {
        if (USER.checkedInDates.find(dDate => isSameDay(Date.parse(dDate), Date.parse(date)))) {
            return "checked-in"
        }
    }

    return (
        <>
            <h1 className="header"> <u> Statistics </u> </h1>
            <Calendar calendarType="gregory" tileClassName={checkedInDays} view="month" maxDetail="month"/>
        </>
    )
}

// returns whether or not the two Date objects are on the same day. Done by
// checking the difference in milliseconds between the current react-calendar
// date and the dates within the checked-in days array.
function isSameDay(date1, date2) {
    return Math.round((date1 - date2) / 86400000) === 0
  }
