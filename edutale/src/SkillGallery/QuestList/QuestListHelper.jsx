import Popup from "reactjs-popup"

import QuestModal from "../../Mainpage/QuestModal"
import AcceptHandler from "../../Mainpage/QuestBoard/AcceptHandler"
import QuitHandler from "../../Mainpage/OngoingQuests/QuitHandler"
import CompleteHandler from "../../Mainpage/OngoingQuests/CompleteHandler"

export default function QuestListHelper({quests, currSkill, studentId, stuQuests}) {
  
    function listQuestsAndResources(quests, currSkill) {
        let resources = []
        let retVal = []

        // get all quests from skills that are linked with currSkill
        let skillQuests = quests.filter(q => {
            return q.skill_name == currSkill
        })

        // for each quest in skillQuests, obtain the quest's stored resource
        // data. If this quest is not in the resources array yet, push its
        // quest_id and the resource data. Else, append resource data to
        // already existing resource data.
        skillQuests.forEach((quest) => {
            // get resource data
            let toPush = {name: quest.resource_name, link: quest.resource_link, desc: quest.resource_description}

            // if current quest's id is not in resources, initialize the object
            // {quest_id, resources} where resources is an array of associated resources
            if (!(resources.find(item => item.quest_id == quest.quest_id))) {
                resources.push({quest_id: quest.quest_id, resources: [toPush]})
            }
            else {
                // else, simply push toPush to existing resources array
                resources.find(item => item.quest_id == quest.quest_id).resources.push(toPush)
            }
        })

        // creates a new object for each quest that is an exact copy of said quest,
        // but with an added attribute whose value is the array of resources for said quest.
        for (let i in skillQuests) {
            if (!(retVal.find(item => item.quest_id == skillQuests[i].quest_id))) {
                retVal.push({
                    ...skillQuests[i],
                    ...(resources.find((rsc) => rsc.quest_id == skillQuests[i].quest_id))
                })
            }
        }

        return retVal
    }

    // creates a row for three cases: the quest is not complete and is
    // not ongoing, the quest is ongoing but not complete, and the
    // quest is complete.
    function createModal(item) {
        let progOnQuest = stuQuests.find((progQuest) => progQuest.quest_id == item.quest_id)
        
        // an entry in progress table for the ID exists
        if (progOnQuest) {
            // quest has been completed
            if (progOnQuest.completed) {
                return (
                    <li key={item.quest_id + currSkill} className="sq-list-item completed">
                      <p className="prog-indicator"> Quest complete! </p>
                      <p> <b>{item.quest_name}</b>: {item.quest_description} </p>
                      {item.resources.map(rsc =>
                          <p className="quest-item-rsc" key={currSkill + rsc.name}>
                            <a href={rsc.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}> {rsc.name} </a> - {rsc.desc}
                          </p>
                      )}
                    </li>)
            }
            else {
                // quest is ongoing
                return (
                  <Popup key={item.quest_id + currSkill} trigger= {
                      <li className="sq-list-item ongoing">
                        <p className="prog-indicator"> In Progress </p>
                        <p> <b>{item.quest_name}</b>: {item.quest_description} </p>
                        {item.resources.map(rsc =>
                            <p className="quest-item-rsc" key={currSkill + rsc.name}>
                              <a href={rsc.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}> {rsc.name} </a> - {rsc.desc}
                            </p>
                        )}
                      </li>
                      }
                      modal nested>{
                        close => (
                          <div className="quest-modal">
                            <div className="modal-header">
                              <button className="modal-header-button close" onClick={() => close()}>
                                ⨯
                              </button>
                            </div>
                            <QuestModal qName={item.quest_name} qDesc={item.quest_description} diff={item.quest_difficulty} />
                            <div className="quest-footer">
                              <button className="modal-footer-button quit" onClick={() => QuitHandler(studentId, item.quest_id)}>
                                Quit Quest
                              </button>
                              <button className="modal-footer-button complete" onClick={() => CompleteHandler(studentId, item.quest_id)}>
                                Complete Quest
                              </button>
                            </div>
                          </div>
                        )
                      }
                    </Popup>)
            }
        }
        else {
            // quest has no progress
            return (
              <Popup key={item.quest_id + currSkill} trigger= {
                <li className="sq-list-item no-prog">
                  <p> <b>{item.quest_name}</b>: {item.quest_description} </p>
                  {item.resources.map(rsc =>
                      <p className="quest-item-rsc" key={currSkill + rsc.name}>
                        <a href={rsc.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}> {rsc.name} </a> - {rsc.desc}
                      </p>
                  )}
                </li>
                }
                modal nested>{
                  close => (
                    <div className="quest-modal">
                      <div className="modal-header">
                        <button className="modal-header-button close" onClick={() => close()}>
                          ⨯
                        </button>
                      </div>
                      <QuestModal qName={item.quest_name} qDesc={item.quest_description} diff={item.quest_difficulty} />
                      <div className="quest-footer">
                        <button className="modal-footer-button accept" onClick={() => AcceptHandler(studentId, item.quest_id)}>
                          Accept Quest
                        </button>
                      </div>
                    </div>
                  )
                }
              </Popup>)
        }
    }

    return (
        quests && currSkill && stuQuests && (
          <>
            {/* beginner quests */}
            <ul className="sg-quest-list">
              <p> <b> Beginner Quests </b> </p>
                {listQuestsAndResources(quests, currSkill).map(item => (item.quest_difficulty == 1) && (
                    createModal(item)
                ))}
            </ul>

            {/* intermediate quests */}
            <ul className="sg-quest-list">
              <p> <b> Intermediate Quests </b> </p>
                {listQuestsAndResources(quests, currSkill).map(item => (item.quest_difficulty == 2) && (
                    createModal(item)
                ))}
            </ul>

            {/* expert quests */}
            <ul className="sg-quest-list">
              <p> <b> Expert Quests </b> </p>
                {listQuestsAndResources(quests, currSkill).map(item => (item.quest_difficulty == 3) && (
                    createModal(item)
                ))}
            </ul>
          </>
        )
    )
}