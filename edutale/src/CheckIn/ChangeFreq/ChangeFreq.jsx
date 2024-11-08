// creates modal for the "change frequency" button.
import Popup from "reactjs-popup"
import "./ChangeFreq.css"
import ChangeHandler from "./ChangeFreqHandler"
import { createEvent } from "ics"
import { saveAs } from "file-saver"
import { useState, useRef } from "react"

export default function ChangeFreq({studentId, getFreqWord, freq, setFreq}) {
    // confirm handles whether the modal content should be the confirmation
    // or the radio buttons that ask the student what schedule to select.
    const [confirm, setConfirm] = useState(false)

    // saves the frequency choice within the modal. Allows for choice to switch
    // multiple times without calling a re-render on components using freq (until
    // the student actually hits the save button).
    let tempChoice = ""

    return freq && (
      <>
        <p className="timing-text"> Current check-in timing: {getFreqWord(freq)} </p>
        <Popup className="change-freq" trigger= {<button> Change Frequency </button>}
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
                  <div className="choice-button">
                    <label htmlFor="daily"> Daily </label>
                    <input id="daily" type="radio" name="frequency" value="D" onChange={event => {tempChoice = event.target.value}}/>
                  </div>
    
                  <div className="choice-button">
                    <label htmlFor="weekly"> Weekly </label>
                    <input id="weekly" type="radio" name="frequency" value="W" onChange={event => {tempChoice = event.target.value}}/>
                  </div>
    
                  <div className="choice-button">
                    <label htmlFor="monthly"> Monthly </label>
                    <input id="monthly" type="radio" name="frequency" value="M" onChange={event => {tempChoice = event.target.value}}/>
                  </div>
                </div>

                <div className="freq-footer">
                  <button className="modal-footer-button save" onClick={() => {ChangeHandler(studentId, tempChoice, setConfirm); setFreq(tempChoice)}}>
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
                  <p> Your frequency is now {getFreqWord(freq)}. Download the .ics file below to add the reminder to your choice of calendar: </p>
                  <button onClick={() => createCal(freq)}> Download .ics file </button>
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
      </>
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
    
    // sets hour to 8AM as per the business rules
    startDate.setHours(8,0,0,0)

    // create .ics data JSON
    let calEvent = {
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
    
    // feed event to 
    createEvent(calEvent, (error, value) => {
        if (error) {
            console.log(error)
        }

        // the Blob will be the downloaded .ics file the user can add to their calendar app
        const blob = new Blob([value], { type: "text/calendar" });
        saveAs(blob, `edutale-calendar.ics`);
    })
}