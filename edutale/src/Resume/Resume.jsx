
import { useAuth0 } from "@auth0/auth0-react"
import ResTemplates from "./ResTemplates/ResTemplates"
import YourSkills from "./YourSkills/YourSkills"
import YourProjects from "./YourProjects/YourProjects"
import Header from "../Header/Header"
import "./Resume.css"

import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "TESTSTU01"

export default function Resume() {
    const [projects, setProjects] = useState()
    const [skills, setSkills] = useState()

    // used to check if the user is authenticated (logged in) again as a failsafe
    // if the ProtectedRoute logic fails.
    const {isAuthenticated} = useAuth0()

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
        // the page will only render if the user is logged in
        isAuthenticated && (
        <>
        <Header />
        <div className="pane-container">
          <div className="pane-item">
            <YourSkills skills={skills} />
            <YourProjects projects={projects} />
          </div>
          <div className="pane-item">
            <ResTemplates />
          </div>
        </div>
        </>
        )
    )
}
