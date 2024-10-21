import * as USER from "../../USER.json"
import OngoingQuestBlock from "./OngoingQuestBlock"
import QuestModal from "../QuestModal"
import React, { useState, useEffect } from "react"
import Popup from 'reactjs-popup'
import Axios from "axios"

import "./OngoingQuests.css"

const studentId = "111111111"

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

                    for (const {quest_name} of response.data) {
                        questNames.push({
                          name: quest_name
                        })
                    }

                    setQuests(
                      <>
                        {questNames.map(item => (
                          <Popup trigger= {
                            <button className="block-button">
                              <OngoingQuestBlock qName={item.name} />
                            </button>}
                            modal nested>{
                              close => (
                                <div className="o-quest-modal">
                                  <QuestModal qName={item.name} />
                                  <div className="o-quest-footer">
                                    <button className="modal-footer-button close" onClick={() => close()}>
                                      Close
                                    </button>
                                    <button className="modal-footer-button save" onClick={() => close()}>
                                      Save
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