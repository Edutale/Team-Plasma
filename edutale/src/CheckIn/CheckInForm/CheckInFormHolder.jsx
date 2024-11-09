import React, { useState, useEffect } from "react"
import Axios from "axios"
import CheckInFormContent from "./CheckInFormContent"

import "./CheckInForm.css"

const studentId = "TESTSTU01"

export default function CheckInFormHolder() {
    const [quests, setQuests] = useState()
    const [progress, setProgress] = useState()

    // effect for student level and EXP
    useEffect(() => {
        fetchStudentLvlAndEXP()
    }, [])

    // effect for ongoing quests
    useEffect(() => {
        fetchStudentQuests()
    }, [])

    async function fetchStudentLvlAndEXP() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/progress`)
                .then((response) => {
                    setProgress({total_exp: response.data[0].total_exp, student_lvl: response.data[0].student_lvl})
                })
        }
        catch(err) {
            console.error("Error fetching level and EXP: ", err)
        }
    }

    async function fetchStudentQuests() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
                .then((response) => {
                    let setVal = []
                    response.data.map(item => {
                        // only want ongoing quests
                        if (!item.completed) {
                            setVal.push({
                                quest_name: item.quest_name,
                                quest_id: item.quest_id,
                                quest_difficulty: item.quest_difficulty
                            })
                        }
                    })
                    setQuests(setVal)
                })
        }
        catch(err) {
            console.error("Error fetching ongoing quests: ", err)
        }
    }

    return (
        <div className="check-form-holder">
          <CheckInFormContent quests={quests} progress={progress}/>
        </div>
    )
}