// Container for the Check-In tab.

import './CheckIn.css'
import CalendarHolder from "./CalendarHolder/CalendarHolder"
import Schedule from './Schedule/Schedule'

export default function CheckIn() {
    return (
        <div className="pane-container">
        <div className="pane-item">
          <CalendarHolder/>
          <Schedule />
        </div>

        <div className="pane-item">
        </div>
      </div>
    )
}