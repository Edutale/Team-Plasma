// Container for the Check-In tab.

import "./CheckIn.css"
import CalendarHolder from "./CalendarHolder/CalendarHolder"
import Schedule from "./Schedule/Schedule"
import ChangeFreq from "./Schedule/ChangeFreq"
import CheckInForm from "./CheckInForm/CheckInForm"

export default function CheckIn() {
    return (
        <div className="pane-container">
        <div className="pane-item">
          <CalendarHolder/>
          
          <h1 className="header"> <u> Schedule </u> </h1>
          <div className="pane-2-container">
            <Schedule />
            <ChangeFreq />
          </div>
        </div>

        <div className="pane-item">
          <h1 className="header"> <u> Check-In </u> </h1>
          <CheckInForm />
        </div>
      </div>
    )
}