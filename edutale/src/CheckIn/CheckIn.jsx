// Container for the Check-In tab.

import "./CheckIn.css"
import CalendarHolder from "./CalendarHolder/CalendarHolder"
import Schedule from "./Schedule/Schedule"
import ChangeFreq from "./Schedule/ChangeFreq"
import CheckInFormHolder from "./CheckInForm/CheckInFormHolder"

export default function CheckIn() {
    return (
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
    )
}