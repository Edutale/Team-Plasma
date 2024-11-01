// Container for the Check-In tab.

import { useAuth0 } from "@auth0/auth0-react"
import "./CheckIn.css"
import CalendarHolder from "./CalendarHolder/CalendarHolder"
import Schedule from "./Schedule/Schedule"
import ChangeFreq from "./Schedule/ChangeFreq"
import CheckInFormHolder from "./CheckInForm/CheckInFormHolder"
import Header from "../Header/Header"

export default function CheckIn() {
    // used to check if the user is authenticated (logged in) again as a failsafe
    // if the ProtectedRoute logic fails.
    const {isAuthenticated} = useAuth0()

    return (
      // the page will only render if the user is logged in
      isAuthenticated && (
      <>
        <Header />
        <div className="pane-container">
        <div className="pane-item">
          <CalendarHolder/>
          
          <h1 className="page-header"> <u> Schedule </u> </h1>
          <div className="schedule-container">
            <Schedule />
            <ChangeFreq />
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