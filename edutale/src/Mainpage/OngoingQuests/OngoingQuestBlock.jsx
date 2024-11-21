/*--- OngoingQuestBlock.jsx ---*/ 

import "./OngoingQuests.css"

export default function OngoingQuestBlock(props) {
    return (
    <>
      <div className="oQuest-item">
        <p> {props.qName} </p>
        <img className="oQImg" src="/assets/html_icon.png" alt="Ongoing Quest" />    
      </div>
    </>
    )
}