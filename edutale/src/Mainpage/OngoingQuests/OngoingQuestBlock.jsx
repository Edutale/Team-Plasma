/*--- OngoingQuestBlock.jsx ---*/ 

import "./OngoingQuests.css"

export default function OngoingQuestBlock(props) {
    return (
      <>
        <div className="o-quest-item">
          <p> {props.qName} </p>
          <img className="oq-img" src="/assets/html_icon.png" alt="Ongoing Quest" />    
        </div>
      </>
    )
}