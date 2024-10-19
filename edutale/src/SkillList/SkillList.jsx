import React, { useState, useEffect } from "react"
import Axios from "axios"

import SkillTiles from "./SkillTiles/SkillTiles"

const studentId = "111111111"

export default function SkillList() {
    const [career, setCareer] = useState()
    
    useEffect(() => {
        fetchCurrCareer()
    })

    // get the career of the student
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
        <SkillTiles career={career}/>
      </div>
      <div className="pane-item">
        
      </div>
    </div>
    )
}
