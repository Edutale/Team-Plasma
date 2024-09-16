import * as USER from "../../USER.json"

export default function OngoingQuests() {
    return (
      <div className="oQuests">
        <h1> <u> Ongoing Quests </u></h1>
        <div className="oQuests-container">
          <div className="oQuest-item">
          <p> {USER.quests[0]} </p>
            <img className='oQImg' src="/assets/html_icon.png" alt="Ongoing Quest" />    
          </div>
          <div className="oQuest-item">
          <p> {USER.quests[1]} </p>
            <img className='oQImg' src="/assets/html_icon.png" alt="Ongoing Quest" />    
          </div>
          <div className="oQuest-item">
            <p> {USER.quests[2]} </p>
            <img className='oQImg' src="/assets/html_icon.png" alt="Ongoing Quest" />      
          </div>
        </div>
      </div>
    )
};