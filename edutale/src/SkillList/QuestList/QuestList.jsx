import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "111111111"

export default function QuestList({career, currSkill}) {
    const [quests, setQuests] = useState()
    const [resources, setResources] = useState()

    useEffect(() => {
        fetchQuests()
    }, [career, currSkill])

    async function fetchQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/careers/${career}/quests`)
                .then((response) => {
                    setQuests(
                      <>
                        <h2> {currSkill} </h2>
                        {response.data.map(currQuest => (
                            currSkill === currQuest.skill_name && (
                                <p key={currQuest.skill_name + currQuest.quest_id}>
                                {currQuest.quest_name} - {currQuest.quest_description}
                                </p>
                            )
                        ))}
                      </>
                    )
                })
        }
        catch(err) {
            console.error("Error fetching skills: ", err)
        }
    }

    return (
        <>
          {quests}
        </>
    )
}