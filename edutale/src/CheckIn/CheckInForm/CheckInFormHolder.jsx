import React, { useState, useEffect } from "react"
import Axios from "axios"
import CheckInFormContent from "./CheckInFormContent"

import "./CheckInForm.css"

const studentId = "TESTSTU01"

export default function CheckInFormHolder() {
    const [quests, setQuests] = useState()

    useEffect(() => {
        fetchStudentQuests()
    }, [])

    async function fetchStudentQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
                .then((response) => {
                    let namesAndIds = []
                    response.data.map(item => {
                        // only want ongoing quests
                        if (!item.completed) {
                            namesAndIds.push({
                                quest_name: item.quest_name,
                                quest_id: item.quest_id
                            })
                        }
                    })

                    setQuests(namesAndIds)
                })
        }
        catch(err) {
            console.error("Error fetching ongoing quests: ", err)
        }
    }

    return (
        <div className="check-form-holder">
          <CheckInFormContent quests={quests} />
        </div>
    )
}