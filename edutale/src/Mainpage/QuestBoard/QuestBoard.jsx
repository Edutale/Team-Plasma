/*--- QuestBoard.jsx ---*/ 

import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import Axios from "axios"

import * as myJson from "../../QUESTS.json"
import QuestRow from './QuestRow'
import QuestModal from "../QuestModal"
import AcceptHandler from "./AcceptHandler"

import "./QuestBoard.css"

const studentId = "TESTSTU01"

let QUESTS = myJson["quests"]
/* Left the first quest row using data variables and the rest with strings 
 * to reflect both functionalities.  Changing to pull from database in future.*/
export default function QuestBoard() {
    const [quests, setQuests] = useState()
    const [studentQuests, setStudentQuests] = useState()

    useEffect(() => {
        fetchQuests()
    }, [])

    useEffect(() => {
        fetchStudentQuests()
    }, [])

    async function fetchQuests() {
        try {
          await Axios.get(`http://localhost:3000/api/quests`)
          .then((response) => {
              let questData = []
              for (const {quest_id, quest_name, quest_description} of response.data) {
                  questData.push({
                      id: quest_id,
                      name: quest_name,
                      desc: quest_description
                  })
              }
              setQuests(questData)
        })
        }
        catch(err) {
            console.error("Error fetching quests: ", err)
        }
    }

    async function fetchStudentQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
            .then((response) => {
              setStudentQuests(response.data.map((item) => item.quest_id))
            })
        }
        catch(err) {
            console.error("Error fetching quests: ", err)
        }
  }

    return quests && studentQuests && (
      <div className="questBoard">
        <h1><u> Quest Board </u></h1>
        <div className="qBoard-container">
          {makeBoard(quests, studentQuests)}
        </div>
      </div>
    )
}


function makeBoard(qsts, stuQsts) {
    let boardQuests = qsts.filter((item) => { if (!stuQsts.includes(item.id)) return item})

    return (
      <>
      {boardQuests.slice(0,5).map(item => (
        <Popup key={item.name} trigger= {
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
                  <button className="modal-footer-button accept" onClick={() => AcceptHandler(studentId, item.id)}>
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
}