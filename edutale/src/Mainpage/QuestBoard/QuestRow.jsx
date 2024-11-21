/*--- QuestRow.jsx ---*/ 

import "./QuestBoard.css"

// creates each individual row on quest board
export default function QuestRow(props) {
    return (
        <div className="q-board-row">
            <div className="qBoard-item">
                <img className='qImg' src={props.img} alt="Quest" />
            </div>
            <div className="qBoard-item q-desc">
                <h3>
                    <u> {props.qName} </u> &emsp; &emsp; &emsp; 
                    <span className="tag"> Languages </span>
                </h3>
                <p> {props.desc} </p>
            </div>
        </div>
    )
}