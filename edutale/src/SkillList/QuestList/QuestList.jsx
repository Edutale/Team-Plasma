import React, { useState, useEffect } from "react"
import Axios from "axios"
import QuestListHelper from "./QuestListHelper"

const studentId = "111111111"

export default function QuestList({career, currSkill}) {
    // useState here is false in order to prevent the helper component
    // from rendering before quests has been obtained
    const [quests, setQuests] = useState(false)
    const [resources, setResources] = useState()

    useEffect(() => {
        fetchQuests()
    }, [career])

    async function fetchQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/careers/${career}/quests`)
                .then((response) => {
                    const skills = [...new Set(response.data.map(item => item.skill_name))]

                    setQuests(response.data)
                })
        }
        catch(err) {
            console.error("Error fetching skills: ", err)
        }
    }

    return (
        <>
          <h2> {currSkill} </h2>
          <QuestListHelper quests={quests} currSkill={currSkill}/>
        </>
    )
}