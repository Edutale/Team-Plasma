import ResTemplates from "./ResTemplates/ResTemplates"
import YourSkills from "./YourSkills/YourSkills"
import YourProjects from "./YourProjects/YourProjects"
import "./Resume.css"

import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "TESTSTU01"

export default function Resume() {
    const [projects, setProjects] = useState()
    const [skills, setSkills] = useState()

    // effect for projects
    useEffect(() => {
        fetchStudentProjects()
    }, [])

    // effect for pulling student skills
    useEffect(() => {
        fetchStudentSkills()
    }, [])

    async function fetchStudentProjects() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
                .then((response) => {
                    setProjects(response.data)
                })
        }
        catch(err) {
            console.error("Error fetching projects: ", err)
        }
    }

    async function fetchStudentSkills() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/skills`)
                .then((response) => {
                    setSkills(response.data)
                })
        }
        catch(err) {
            console.error("Error fetching skills: ", err)
        }
    }

    return (
        <div className="pane-container">
        <div className="pane-item">
          <YourSkills skills={skills} />
          <YourProjects projects={projects} />
        </div>
        <div className="pane-item">
          <ResTemplates />
        </div>
      </div>
    )
}
