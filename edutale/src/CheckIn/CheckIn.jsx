// Container for the Check-In tab.

import './CheckIn.css'
import CalendarHolder from "./CalendarHolder/CalendarHolder"

export default function CheckIn() {
    return (
        <div className="pane-container">
        <div className="pane-item">
          <h1 className="header"> <u> Statistics </u> </h1>
          <CalendarHolder />
        </div>

        <div className="pane-item">
          
        </div>
      </div>
    )
}