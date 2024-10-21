// Sole purpose of CalendarHolder is to hold the Calendar from react-calendar
import { useState, useEffect } from "react"
import Axios from "axios"

import Calendar from "react-calendar"
import "./CalendarHolder.css"

const studentId = "111111111"

export default function CalendarHolder() {
    const [checkedDays, setCheckedDays] = useState()

    useEffect(() => {
        fetchStudentCheckedDays()
    }, [])

    async function fetchStudentCheckedDays() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/checkin`)
                .then((response) => {
                    setCheckedDays(response.data.map(item => item.checkin_date))
                })
        }
        catch(err) {
            console.error("Error fetching checked in days: ", err)
        }
    }

    // function that iterates through the react-calendar's days,
    // comparing each day to the stored checked-in days for the
    // user. Will apply the "checked-in" class to dates that
    // were found.
    function checkedInDays({ date }) {
        if (checkedDays.find(dDate => isSameDay(Date.parse(dDate), Date.parse(date)))) {
            return "checked-in"
        }
    }

    return (
        // need to set this && line in order to ensure the return happend
        // after checkedDays is defined (so, after api call resolves)
        checkedDays && (
          <>
            <h1 className="header"> <u> Statistics </u> </h1>
            <Calendar calendarType="gregory" tileClassName={checkedInDays} view="month" minDetail="month" maxDetail="month" prev2Label={null} next2Label={null}/>
          </>
        )
    )
}

// returns whether or not the two Date objects are on the same day. Done by
// checking the difference in milliseconds between the current react-calendar
// date and the dates within the checked-in days array.
function isSameDay(date1, date2) {
    return Math.round((date1 - date2) / 86400000) === 0
  }
