// Container for the Check-In tab.

import { useAuth0 } from "@auth0/auth0-react"
import "./CheckIn.css"
import CalendarHolder from "./CalendarHolder/CalendarHolder"
import Schedule from "./Schedule/Schedule"
import ChangeFreq from "./Schedule/ChangeFreq"
import CheckInForm from "./CheckInForm/CheckInForm"
import Top from "../Top"

export default function CheckIn() {
    const {isAuthenticated} = useAuth0()

    return (
      isAuthenticated && (
      <>
        <Top />
        <div className="pane-container">
        <div className="pane-item">
          <CalendarHolder/>
          
          <h1 className="header"> <u> Schedule </u> </h1>
          <div className="schedule-container">
            <Schedule />
            <ChangeFreq />
          </div>
        </div>

        <div className="pane-item">
          <h1 className="header"> <u> Check-In </u> </h1>
          <CheckInFormHolder />
        </div>
      </div>
    </>
    )
    )
}