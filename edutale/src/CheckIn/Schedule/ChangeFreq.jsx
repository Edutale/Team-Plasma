// creates modal for the "change frequency" button.
import Popup from "reactjs-popup"

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
        <button> Daily </button>
        <button> Weekly </button>
        <button> Monthly </button>
      </div>
    )
  }