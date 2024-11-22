import React, { useState, useEffect } from "react"
import Axios from "axios"

import { useAuth0 } from "@auth0/auth0-react"
import SkillTiles from "./SkillTiles/SkillTiles"
import QuestList from "./QuestList/QuestList"
import Header from "../Header/Header"

const studentId = "TESTSTU01"

export default function SkillGallery() {
    const [career, setCareer] = useState()
    const [currSkill, setCurrSkill] = useState("")

    // used to check if the user is authenticated (logged in) again as a failsafe
    // if the ProtectedRoute logic fails.
    const {isAuthenticated} = useAuth0()
    
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
        // the page will only render if the user is logged in
        isAuthenticated && career && (
        <>
        <Header />
        <div className="pane-container">
          <div className="pane-item">
            <h1 className="pane-header"> Your Skills </h1>
            <SkillTiles career={career} onSetSkill={setCurrSkill} currSkill={currSkill}/>
          </div>
          <div className="pane-item">
            <h1 className="center-header"> Quests </h1>
            {currSkill ? <QuestList career={career} currSkill={currSkill} studentId={studentId}/> : <p className="no-skill-selected"> Click a skill on the left to see available quests! </p>}
          </div>
        </div>
        </>
        )
    )
}

