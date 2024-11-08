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

    useEffect(() => {
        fetchStudentCheckedDays()
    }, [])

    async function fetchStudentCheckedDays() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/checkin`)
                .then((response) => {
                    setCheckedDays(response.data.map(item => item.progress_date))
                    setFreq(response.data[0].reminder_freq)
                })
        }
        catch(err) {
            console.error("Error fetching checked in days: ", err)
        }
    }

    // helper function to get the designated frequency amount given the one-character frequency code
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

    return (
      // the page will only render if the user is logged in
      isAuthenticated && (
      <>
        <Header />
        <div className="pane-container">
        <div className="pane-item">
          <CalendarHolder checkedDays={checkedDays}/>
          
          <h1 className="page-header"> <u> Schedule </u> </h1>
          <div className="schedule-container">
            <ChangeFreq studentId={studentId} getFreqWord={getFreqWord} freq={freq} setFreq={setFreq}/>
          </div>
        </div>

        <div className="pane-item">
          <h1 className="page-header"> <u> Check-In </u> </h1>
          <CheckInFormHolder />
        </div>
      </div>
    </>
    )
    )
}