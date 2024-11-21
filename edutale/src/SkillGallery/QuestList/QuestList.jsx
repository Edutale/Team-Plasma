import React, { useState, useEffect } from "react"
import Axios from "axios"
import QuestListHelper from "./QuestListHelper"

import "./QuestList.css"

const studentId = "TESTSTU01"

export default function QuestList({career, currSkill}) {
    // useState here is false in order to prevent the helper component
    // from rendering before quests has been obtained
    const [quests, setQuests] = useState()

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

    return career && (
        <div className="quest-list-container">
          <div className="quest-list">
            <h2 className="skill-header-2"> {currSkill} </h2>
            <QuestListHelper quests={quests} currSkill={currSkill}/>
          </div>
        </div>
    )
}