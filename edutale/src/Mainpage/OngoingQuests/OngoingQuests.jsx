import OngoingQuestBlock from "./OngoingQuestBlock"
import React, { useState, useEffect } from "react"
import Axios from "axios"

import "./OngoingQuests.css"

const studentId = "TESTSTU01"

export default function OngoingQuests() {
    const [quests, setQuests] = useState()

    useEffect(() => {
        fetchStudentQuests()
    }, [])

    async function fetchStudentQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
                .then((response) => {
                    setQuests(
                      <>
                        {response.data.map(item => !item.completed && (
                          <button className="block-button">
                            <OngoingQuestBlock qName={item.quest_name} />
                          </button>
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