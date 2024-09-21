// creates modal for the "change frequency" button.

import ReactDOM from "react-dom"
import { useState } from "react"

export default function ChangeFreq() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const saveFrequency = () => {
        // code that sends new frequency setting to DB
        
        setIsModalOpen(false);
    };

    return (
        <>
          <button onClick={openModal}> Change Frequency </button>
          {isModalOpen && (
            <FreqModal>
                <p> Testing </p>
                <button onClick={saveFrequency}> Save </button>
                <button onClick={closeModal}> Close </button>
            </FreqModal>
          )}
        </>
    )
}

function FreqModal({ children }) {
    // get DOM to inject contents into
    const modalRoot = document.getElementById('modal-root');

    // create portal that renders the FreqModal into modal-root
    return ReactDOM.createPortal(
      <div className="freq-modal">
        {children}
      </div>,
      modalRoot
    );
  }