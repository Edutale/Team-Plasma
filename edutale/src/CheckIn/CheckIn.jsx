// Container for the Check-In tab.

import './CheckIn.css'
import CalendarHolder from "./CalendarHolder/CalendarHolder"
import Schedule from './Schedule/Schedule'

export default function CheckIn() {
    return (
        <div className="pane-container">
        <div className="pane-item">
          <h1 className="header"> <u> Statistics </u> </h1>
          <CalendarHolder class="calendar"/>
          <h1 className="header"> <u> Schedule </u> </h1>
          <Schedule />
        </div>

        <div className="pane-item">
        </div>
      </div>
    )
}