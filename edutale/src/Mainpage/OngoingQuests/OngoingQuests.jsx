import * as USER from "../../USER.json"
import OngoingQuestBlock from "./OngoingQuestBlock"
import React, { useState, useEffect } from "react"
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
                          <button className="block-button"><OngoingQuestBlock qName={item.name} /></button>
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