import React, { useState, useEffect } from "react"
import Axios from "axios"
import "./UserBar.css"

const studentId = "TESTSTU01"

export default function UserBar() {
    const [progress, setProgress] = useState()

    useEffect(() => {
        fetchStudentLvlAndEXP()
    }, [])

    async function fetchStudentLvlAndEXP() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/progress`)
                .then((response) => {
                    const userWork = workVal(response.data[0].student_lvl)
                    const userTop = topVal(response.data[0].total_exp, userWork)
                    const userBot = botVal(response.data[0].student_lvl)
                    const barProg = userTop / userBot

                    setProgress(
                      <div className="userBar">
                        <h2> {response.data[0].student_name} <progress className="lBar" value={barProg} /> </h2>
                        <p className="bar-text"> Level {response.data[0].student_lvl} - {userTop} / {userBot}</p>
                      </div>
                    )
                })
        }
        catch(err) {
            console.error("Error fetching level and EXP: ", err)
        }
    }

    return progress
}

// calculates work
function workVal(currLvl) {
    let calculatedWork = 0

    if (currLvl <= 1) {
        return calculatedWork
    }
    else {
        for (let i=2; i<=(currLvl); i++) {
            calculatedWork += 100 + (10 * (i-2))
        }
        return calculatedWork
    }
}

// calculates top
function topVal(tot, work) {
    return tot - work
}

// this formula can change later on
function botVal(currLvl) {
    return (10 * (currLvl - 1) + 100)
}