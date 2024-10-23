import OngoingQuestBlock from "./OngoingQuestBlock"
import QuestModal from "../QuestModal"
import React, { useState, useEffect } from "react"
import Popup from 'reactjs-popup'
import Axios from "axios"

import "./OngoingQuests.css"

const studentId = "TESTSTU01"

export default function OngoingQuests() {
    const [quests, setQuests] = useState()
    useEffect(() => {
        fetchStudentQuests()
    }, [])

    async function fetchStudentQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
                .then((response) => {
                    let questNames = []

                    for (const {quest_name, quest_description, completed} of response.data) {
                        questNames.push({
                          name: quest_name,
                          desc: quest_description,
                          completed: completed,
                        })
                    }

                    setQuests(
                      <>
                        {questNames.map(item => !item.completed && (
                          <Popup trigger= {
                            <button className="block-button">
                              <OngoingQuestBlock qName={item.name} />
                            </button>}
                            modal nested>{
                              close => (
                                <div className="o-quest-modal">
                                  <div className="modal-header">
                                    <button className="modal-header-button close" onClick={() => close()}>
                                      ⨯
                                    </button>
                                  </div>
                                  <QuestModal qName={item.name} qDesc={item.desc}/>
                                  <div className="o-quest-footer">
                                    <button className="modal-footer-button quit" onClick={() => close()}>
                                      Quit Quest
                                    </button>
                                    <button className="modal-footer-button complete" onClick={() => close()}>
                                      Complete Quest
                                    </button>
                                  </div>
                                </div>
                              )
                            }                           
                          </Popup>
                        ))}
                      </>
                    )
                })
        } 
        catch(err) {
            console.error("Error fetching quests: ", err)
        }  
    }
  
    return (
      <div className="oQuests">
        <h1> <u> Ongoing Quests </u></h1>
        <div className="oQuests-container">
          {quests}
        </div>
      </div>
    )
};