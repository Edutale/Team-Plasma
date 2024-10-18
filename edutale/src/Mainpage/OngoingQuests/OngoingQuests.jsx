import * as USER from "../../USER.json"
import OngoingQuestBlock from "./OngoingQuestBlock"
import "./OngoingQuests.css"

export default function OngoingQuests() {
    return (
      <div className="oQuests">
        <h1> <u> Ongoing Quests </u></h1>
        <div className="oQuests-container">
          <OngoingQuestBlock qName={USER.quests[0]} />
          <OngoingQuestBlock qName={USER.quests[1]} />
          <OngoingQuestBlock qName={USER.quests[2]} />
        </div>
      </div>
    )
};