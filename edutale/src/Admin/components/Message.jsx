// This should not really get updated cause its our Toast message component, that or we can use the Alert library which looks cool but seems pretty annoying to implement
import React from 'react'

export const Message = ({ Message })=>{
    if(!Message) return null
    return(
        <div className={`message ${message.type}`}>{message.text}</div>
    )
}