import * as myJson from "../../QUESTS.json"
import "./QuestBoard.css"

let QUESTS = myJson["quests"]

export default function QuestRow(props) {
    return (
        <div className="q-board-row">
            <div className="qBoard-item">
                <img className='qImg' src={props.img} alt="Quest" />
            </div>
            <div className="qBoard-item q-desc">
                <h3>
                    <u> {props.qName} </u> &emsp; &emsp; &emsp; 
                    <span className="tag"> {QUESTS[0].tags[0]} </span>
                </h3>
                <p> {props.desc} </p>
            </div>
        </div>
    )
}