import * as myJson from "../../QUESTS.json"

let QUESTS = myJson["quests"]

export default function QuestBoard() {
    return (
      <div className="questBoard">
        <h1><u> Quest Board </u></h1>
        <div className="qBoard-container">
          <div className="qBoard-item">
            <img className='qImg' src={QUESTS[0].img} alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[0].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[0].tags[0]} </span>
            </h3>
            <p> {QUESTS[0].desc} </p>
          </div>
          <div className="qBoard-item">
            <img className='qImg' src="../../assets/cpp.png" alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[1].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[1].tags[0]}</span> 
              <span className="tag"> {QUESTS[1].tags[1]} </span>
            </h3>
            <p> {QUESTS[1].desc} </p>
          </div>
          <div className="qBoard-item">
            <img className='qImg' src="../../assets/cpp.png" alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[2].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[2].tags[0]}</span> 
              <span className="tag">{QUESTS[2].tags[1]}</span> 
              <span className="tag">{QUESTS[2].tags[2]} </span>
            </h3>
            <p> {QUESTS[2].desc} </p>
          </div>
          <div className="qBoard-item">
            <img className='qImg' src="../../assets/cpp.png" alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[0].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[0].tags[0]} </span>
            </h3>
            <p> {QUESTS[0].desc} </p>
          </div>
          <div className="qBoard-item">
            <img className='qImg' src="../../assets/cpp.png" alt="Quest" />
          </div>
          <div className="qBoard-item q-desc">
            <h3>
              <u> {QUESTS[0].qName} </u> &emsp; &emsp; &emsp; 
              <span className="tag"> {QUESTS[0].tags[0]} </span>
            </h3>
            <p> {QUESTS[0].desc} </p>
          </div>
        </div>
      </div>
    )
};