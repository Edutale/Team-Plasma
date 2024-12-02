/*--- OngoingQuests.jsx ---*/ 

import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import Axios from "axios"

import OngoingQuestBlock from "./OngoingQuestBlock"
import QuestModal from "../QuestModal"
import CompleteHandler from "./CompleteHandler"
import QuitHandler from "./QuitHandler"

import "./OngoingQuests.css"

const studentId = "TESTSTU01"

export default function OngoingQuests() {
    const [quests, setQuests] = useState()
    const [progress, setProgress] = useState()

    // effect for student level and EXP
    useEffect(() => {
        fetchStudentLvlAndEXP()
    }, [])

    // effect for student quests
    useEffect(() => {
        fetchStudentQuests()
    }, [])

    // fetches student lvl and exp for student id
    async function fetchStudentLvlAndEXP() {
      try {
          await Axios.get(`http://localhost:3000/api/students/${studentId}/progress`)
              .then((response) => {
                  setProgress({total_exp: response.data[0].total_exp, student_lvl: response.data[0].student_lvl})
                  console.log(progress)
                })
      }
      catch(err) {
          console.error("Error fetching level and EXP: ", err)
      }
    }

    // fetches all student quests for logged in student including quest id, name, desc, and completed bool
    async function fetchStudentQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
                .then((response) => {
                    let questNames = []

                    for (const {quest_id, quest_name, quest_description, completed, quest_difficulty} of response.data) {
                        questNames.push({
                          id: quest_id,
                          name: quest_name,
                          desc: quest_description,
                          completed: completed,
                          diff: quest_difficulty
                        })
                    }
                    
                    //creates 4 quest blocks to diplay as ongoing quests that are not yet completed
                    setQuests(
                      <>
                        {questNames.map(item => !item.completed && (
                          <Popup key={item.name} trigger= {
                            <button className="block-button">
                              <OngoingQuestBlock qName={item.name}/>
                            </button>}
                            modal nested>{
                              close => (
                                <div className="o-quest-modal">
                                  <div className="modal-header">
                                    <button className="modal-header-button close" onClick={() => close()}>
                                      ⨯
                                    </button>
                                  </div>
                                  <QuestModal qName={item.name} qDesc={item.desc} diff={item.diff}/>
                                  <div className="o-quest-footer">
                                    <button className="modal-footer-button quit" onClick={() => QuitHandler(studentId, item.id)}>
                                      Quit Quest
                                    </button>
                                    <button className="modal-footer-button complete" onClick={() => CompleteHandler(studentId, item.id, item.diff, progress)}>
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
  
    return quests && progress && (
      <div className="o-quests">
        <div className="o-quest-background">
          <h2 className="o-quest-h2"> Ongoing Quests </h2>
          <div className="o-quests-container">
            {quests}
          </div>
        </div>
      </div>
    )
};