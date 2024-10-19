/* Mainpage functions as the "container" for all of the
   information on the webpage for this specific tab. */

import Avatar from "./Avatar/Avatar"
import Day from "./Day/Day"
import OngoingQuests from "./OngoingQuests/OngoingQuests"
import QuestBoard from "./QuestBoard/QuestBoard"
import SkillGraph from "./SkillGraph/SkillGraph"
import Userbar from "./UserBar/UserBar"

export default function Mainpage() {
    return (
        <div className="pane-container">
        <div className="pane-item">
          <Day />
          <SkillGraph />
          <div className="pane-2-container">
            <div className="pane-2-item">
              <div className="user-container">
                <Avatar />
                <Userbar />
              </div>
            </div>
            <div className="pane-2-item">
              <OngoingQuests />
            </div>
          </div>
        </div>
        <div className="pane-item">
          <QuestBoard />
        </div>
      </div>
    )
}
