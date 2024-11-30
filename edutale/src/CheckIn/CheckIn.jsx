// Container for the Check-In tab.

import { useAuth0 } from "@auth0/auth0-react"
import { useState, useEffect } from "react"
import Axios from "axios"
import "./CheckIn.css"
import CalendarHolder from "./CalendarHolder/CalendarHolder"
import ChangeFreq from "./ChangeFreq/ChangeFreq"
import CheckInFormHolder from "./CheckInForm/CheckInFormHolder"
import Header from "../Header/Header"

const studentId = "TESTSTU01"

export default function CheckIn() {
    // used to check if the user is authenticated (logged in) again as a failsafe
    // if the ProtectedRoute logic fails.
    const {isAuthenticated} = useAuth0()

    const [checkedDays, setCheckedDays] = useState()
    const [freq, setFreq] = useState()
    const [latestDay, setLatestDay] = useState()

    useEffect(() => {
        fetchStudentCheckedDays()
    }, [])

    async function fetchStudentCheckedDays() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/checkin`)
                .then((response) => {
                    setCheckedDays(response.data.map(item => item.progress_date))
                    setFreq(response.data[0].reminder_freq)
                    setLatestDay(response.data[0])
                })
        }
        catch(err) {
            console.error("Error fetching checked in days: ", err)
        }
    }

    // helper function to get the designated frequency amount given the
    // one-character frequency code
    function getFreqWord(frequency) {
        switch(frequency) {
        case "D":
            return "Daily"
        case "W":
            return "Weekly"
        case "M":
            return "Monthly"
        }
    }

    // returns true if today had a check-in, and false otherwise
    function todayChecked(dates) {
        let today = Date.now()
        return dates.some(date => (Math.trunc((today - Date.parse(date)) / 86400000) === 0))
    }

    // creates the post check-in summary in the case that the user
    // has already done a check-in today.
    function postCheckIn(exp, numQuests, mins) {


        return (
            <>
              <p className="check-in-complete"> Thank you for filling out a check-in today! </p>
              <p className="check-in-stats"> You earned <strong> {exp} EXP! </strong> </p>
              {(numQuests > 0) && (<p className="check-in-stats"> You completed <strong> {numQuests} quest{numQuests == 1 ? "" : "s"}! </strong> </p>)}
              {(mins > 0) && (<p className="check-in-stats"> Overall, you studied for <strong> {mins} minute{mins == 1 ? "" : "s"}! </strong> </p>)}
            </>
        )
    }

    return (
      // the page will only render if the user is logged in
      isAuthenticated && checkedDays && (
        <>
          <Header />
          <div className="pane-container">
            <div className="pane-item">
              <CalendarHolder checkedDays={checkedDays}/>
              
              <h2 className="page-header"> <u> Schedule </u> </h2>
              <div className="schedule-container">
                <ChangeFreq studentId={studentId} getFreqWord={getFreqWord} freq={freq} setFreq={setFreq}/>
              </div>
            </div>
            <div className="pane-item">
              <h1 className="center-header"> <u> Check-In </u> </h1>
              {todayChecked(checkedDays) ? postCheckIn(latestDay.gained_exp, latestDay.quests_completed, latestDay.study_time) : <CheckInFormHolder />}
            </div>
          </div>
        </>
    )
    )
}