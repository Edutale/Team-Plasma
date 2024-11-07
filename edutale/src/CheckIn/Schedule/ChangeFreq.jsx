// creates modal for the "change frequency" button.
import Popup from "reactjs-popup"
import "./Schedule.css"
import ChangeHandler from "./ChangeFreqHandler"
import { createEvent } from "ics"
import { saveAs } from "file-saver"
import { useState } from "react"

export default function ChangeFreq({studentId}) {
    const [freq, setFreq] = useState()
    const [confirm, setConfirm] = useState(false)

    return (
        <Popup trigger= {<button> Change Frequency </button>}
          modal nested>{
            close => (!confirm ? (
              // form to choose a new notification frequency
              <div className="freq-modal">
                <div className="modal-header">
                  <button className="modal-header-button close" onClick={close}>
                    ⨯
                  </button>
                </div>
    
                <div className="freq-modal">
                  <div className="freq-button">
                    <label htmlFor="daily"> Daily </label>
                    <input id="daily" type="radio" name="frequency" value="D" onChange={event => setFreq(event.target.value)}/>
                  </div>
    
                  <div className="freq-button">
                    <label htmlFor="weekly"> Weekly </label>
                    <input id="weekly" type="radio" name="frequency" value="W" onChange={event => setFreq(event.target.value)}/>
                  </div>
    
                  <div className="freq-button">
                    <label htmlFor="monthly"> Monthly </label>
                    <input id="monthly" type="radio" name="frequency" value="M" onChange={event => setFreq(event.target.value)}/>
                  </div>
                </div>
                <div className="freq-footer">
                  <button className="modal-footer-button save" onClick={() => ChangeHandler(studentId, freq, setConfirm)}>
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              // confirmation message of the new frequency and .ics download
              <div className="freq-modal">
                <div className="modal-header">
                  <button className="modal-header-button close" onClick={() => {close(); setConfirm(false)}}>
                    ⨯
                  </button>
                </div>
                <div className="freq-modal">
                  <p> This is the confirmation message! </p>
                </div>
                <div className="freq-footer">
                  <button className="modal-footer-button close" onClick={() => {close(); setConfirm(false)}}>
                    Close
                  </button>
                </div>
              </div>
            ))
          }                           
        </Popup>
    )
}

function createCal(frequency) {
    // today's date
    let startDate = new Date()
    let recurrence = ""

    // obtain recurrence rule and start date dependent on frequency given
    switch(frequency) {
        case "D":
            recurrence = "FREQ=DAILY;INTERVAL=1"
            break
        case "W":
            // changes startDate's date to the next Sun
            startDate.setDate(startDate.getDate() + (7 + 7 - startDate.getDay()) % 7)
            recurrence = "FREQ=WEEKLY;BYDAY=SU;INTERVAL=1"
            break
        case "M":
            // changes startDate's date to the first of the next month
            startDate.setMonth(startDate.getMonth() + 1, 1)
            recurrence = "FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1"
            break
    }

    // changes startDate's date to the next Saturday (or today if today's Saturday)
    startDate.setDate(startDate.getDate() + (7 + 7 - startDate.getDay()) % 7)
    
    // sets hour to 8AM as per the business rules
    startDate.setHours(8,0,0,0)

    let event = {
        start: startDate.getTime(),
        startInputType: "utc",
        duration: { hours: 1 },
        title: "Edutale Check-in",
        calName: "Edutale Reminder Calendar",
        description: "It's time for your check-in for Edutale!",
        location: "http://localhost:5173/check-in", 
        url: "http://localhost:5173/check-in",
        recurrenceRule: recurrence,
        }
    
    createEvent(event, (error, value) => {
        if (error) {
            console.log(error)
        }

        // the Blob will be the downloaded .ics file the user can add to their calendar app
        const blob = new Blob([value], { type: "text/calendar" });
        saveAs(blob, `edutale-calendar.ics`);
    })
    


}