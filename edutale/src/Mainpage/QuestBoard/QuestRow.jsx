/*--- QuestRow.jsx ---*/ 

import "./QuestBoard.css"

// creates each individual row on quest board
export default function QuestRow(props) {
    return (
        <div className="q-board-row">
          <div className="q-board-item">
            <img className="q-img" src={props.img} alt="Quest" />
          </div>
          <div className="q-board-item q-desc">
            <h3>
              <u> {props.qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> Languages </span>
            </h3>
             <p> {props.desc} </p>
          </div>
        </div>
    )
}