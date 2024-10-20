import React, { useState, useEffect } from "react"
import Axios from "axios"

import SkillTiles from "./SkillTiles/SkillTiles"
import QuestList from "./QuestList/QuestList"

const studentId = "111111111"

export default function SkillList() {
    const [career, setCareer] = useState()
    const [currSkill, setCurrSkill] = useState("")
    
    useEffect(() => {
        fetchCurrCareer()
    }, [])

    // get the career of the student, will pass this to child components
    async function fetchCurrCareer() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/career`)
                .then((response) => {
                    setCareer(response.data[0].career_id)
                })
        }
        catch(err) {
            console.error("Error fetching career: ", err)
        }
    }

    return (
      <div className="pane-container">
      <div className="pane-item">
        <h1> Your Skills </h1>
        <SkillTiles career={career} onSetSkill={setCurrSkill}/>
      </div>
      <div className="pane-item">
        {currSkill === "" && 
            <p> Click a skill on the left to see available quests! </p>
        }
        <QuestList career={career} currSkill={currSkill}/>
      </div>
    </div>
    )
}

