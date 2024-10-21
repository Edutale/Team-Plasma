import * as myJson from "../../QUESTS.json"
import QuestRow from './QuestRow'
import QuestModal from "../QuestModal"
import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import Axios from "axios"

import "./QuestBoard.css"

let QUESTS = myJson["quests"]
/* Left the first quest row using data variables and the rest with strings 
 * to reflect both functionalities.  Changing to pull from database in future.*/
export default function QuestBoard() {
    const [quests, setQuests] = useState()
    useEffect(() => {
        fetchQuests()
    }, [])

    async function fetchQuests() {
        try {
          await Axios.get(`http://localhost:3000/api/quests`)
            .then((response) => {
                let questData = []

                for (const {quest_name, quest_description} of response.data.slice(0, 5)) {
                    questData.push({
                        name: quest_name,
                        desc: quest_description
                    })
                }

                setQuests(
                  <>
                    {questData.map(item => (
                      <Popup trigger= {
                        <button className="row-button">
                          <QuestRow img={QUESTS[0].img} qName={item.name} desc={item.desc} />
                        </button>}
                        modal nested>{
                          close => (
                            <div className="quest-modal">
                              <div className="modal-header">
                                <button className="modal-header-button close" onClick={() => close()}>
                                  ⨯
                                </button>
                              </div>
                              <QuestModal qName={item.name} qDesc={item.desc} />
                              <div className="quest-footer">
                                <button className="modal-footer-button accept" onClick={() => close()}>
                                  Accept Quest
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
      <div className="questBoard">
        <h1><u> Quest Board </u></h1>
        <div className="qBoard-container">
          {quests}
        </div>
      </div>
    )
};