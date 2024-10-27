import React from 'react'

export const Message = ({ Message })=>{
    if(!Message) return null
    return(
        <div className={`message ${message.type}`}>{message.text}</div>
    )
}