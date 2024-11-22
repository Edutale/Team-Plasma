import React, { useState, useEffect } from "react"
import Axios from "axios"
import QuestListHelper from "./QuestListHelper"

import "./QuestList.css"

export default function QuestList({career, currSkill, studentId}) {
    // useState here is false in order to prevent the helper component
    // from rendering before quests has been obtained
    const [quests, setQuests] = useState()
    const [stuQuests, setStuQuests] = useState()

    useEffect(() => {
        fetchStudentQuests()
    }, [])

    useEffect(() => {
        fetchQuests()
    }, [career, currSkill])

    async function fetchQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/careers/${career}/quests`)
                .then((response) => {
                    setQuests(response.data)
                })
        }
        catch(err) {
            console.error("Error fetching skills: ", err)
        }
    }

    // fetches ids of all student quests for logged in student
    async function fetchStudentQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
            .then((response) => {
              setStuQuests(response.data)
            })
        }
        catch(err) {
            console.error("Error fetching quests: ", err)
        }
    }

    return career && stuQuests && (
        <div className="quest-list-container">
          <div className="quest-list">
            <h2 className="skill-header-2"> {currSkill} </h2>
            <QuestListHelper quests={quests} currSkill={currSkill} studentId={studentId} stuQuests={stuQuests}/>
          </div>
        </div>
    )
}