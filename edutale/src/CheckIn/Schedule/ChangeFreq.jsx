// creates modal for the "change frequency" button.
import Popup from "reactjs-popup"
import { createEvent } from "ics"
import { saveAs } from "file-saver"

export default function ChangeFreq() {
    return (
        <>
          <Popup trigger= {<button> Change Frequency </button>}
          modal nested>{
            close => (
              <div className="freq-modal">
                <div className="modal-header">
                  <button className="modal-header-button close" onClick={() => close()}>
                    ⨯
                  </button>
                </div>
                <FreqModal />
                <div className="freq-footer">
                  {/* implement saving to database for this button in the future */}
                  <button className="modal-footer-button save" onClick={() => close()}>
                    Save Changes
                  </button>
                </div>
              </div>
            )
          }                           
        </Popup>
      </>
    )
}

function FreqModal() {
    return (
      <div className="freq-modal">
        <button onClick={createCal}> Daily </button>
        <button> Weekly </button>
        <button> Monthly </button>
      </div>
    )
  }

function createCal() {
    let startDate = new Date()
    startDate.setDate(startDate.getDate() + (6 + 7 - startDate.getDay()) % 7);
    startDate.setHours(8,0,0,0)
    //startDate.toISOString()

    let event = {
        start: startDate.getTime(),
        startInputType: "utc",
        duration: { hours: 1 },
        title: "Edutale Reminder",
        description: "It's time for your check-in for Edutale!",
        recurrenceRule: "FREQ=WEEKLY;BYDAY=SA;INTERVAL=1",
        }
    
    createEvent(event, (error, value) => {
        if (error) {
            console.log(error)
        }

        const blob = new Blob([value], { type: "text/calendar" });
        saveAs(blob, `edutale-calendar.ics`);
    })
    


}