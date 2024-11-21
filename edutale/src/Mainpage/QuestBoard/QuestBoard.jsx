/*--- QuestBoard.jsx ---*/ 

import React, { useState, useEffect } from "react"
import Popup from "reactjs-popup"
import Axios from "axios"

import QuestRow from './QuestRow'
import QuestModal from "../QuestModal"
import AcceptHandler from "./AcceptHandler"

import "./QuestBoard.css"

const studentId = "TESTSTU01"

// placeholder image for quests
const questImgUrl = "../../../assets/cpp.png"

export default function QuestBoard() {
    const [quests, setQuests] = useState()
    const [studentQuests, setStudentQuests] = useState()

    useEffect(() => {
        fetchQuests()
    }, [])

    useEffect(() => {
        fetchStudentQuests()
    }, [])

    // fetches all quests including id, name, and desc
    async function fetchQuests() {
        try {
          await Axios.get(`http://localhost:3000/api/quests`)
          .then((response) => {
              let questData = []
              for (const {quest_id, quest_name, quest_description, quest_difficulty} of response.data) {
                  questData.push({
                      id: quest_id,
                      name: quest_name,
                      desc: quest_description,
                      diff: quest_difficulty
                  })
              }
              setQuests(questData)
        })
        }
        catch(err) {
            console.error("Error fetching quests: ", err)
        }
    }

    // fetches ids of all student quests for logged in student
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

    // after quests and studentQuests have been fetched, create quest board
    return quests && studentQuests && (
      <div className="questBoard">
        <h1 className="center-header"> Quest Board </h1>
        <div className="qBoard-container">
          {makeBoard(quests, studentQuests)}
        </div>
      </div>
    )
}

// function to create 5 quest rows to diplay on the quest board
function makeBoard(qsts, stuQsts) {
    // sets boardQuests as only quests that student hasnt started or completed
    let boardQuests = qsts.filter((item) => { if (!stuQsts.includes(item.id)) return item})

    // the first 5 quests in boardQuests will then be made into quest rows 
    return (
      <>
      {boardQuests.slice(0,5).map(item => (
        <Popup key={item.name} trigger= {
          <button className="row-button">
            <QuestRow img={questImgUrl} qName={item.name} desc={item.desc} />
          </button>}
          modal nested>{
            close => (
              <div className="quest-modal">
                <div className="modal-header">
                  <button className="modal-header-button close" onClick={() => close()}>
                    ⨯
                  </button>
                </div>
                <QuestModal qName={item.name} qDesc={item.desc} diff={item.diff} />
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