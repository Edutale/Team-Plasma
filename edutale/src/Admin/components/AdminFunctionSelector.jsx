import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import "../AdminTabs.css"

export const AdminFunctionSelector = ({ functions }) => {
    return (
        <div className="admin-functions">
            {functions.map((func) => (
                <button key={func.name} className="admin-function-button" onClick={() => func.action()}> {func.name} </button>
            ))}
        </div>
    )
}

export const AdminModal = ({ isOpen, onClose, title, children }) => {
    return (
        <Popup open={isOpen} onClose={onClose} modal nested>
            <div className="admin-modal">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="modal-header-button close" onClick={onClose}>⨯</button>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </Popup>
    )
}

export default AdminFunctionSelector