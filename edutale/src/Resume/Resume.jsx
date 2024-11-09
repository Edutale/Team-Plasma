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
    const [stuSkills, setStuSkills] = useState()

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

    // pulls quests marked as projects AND completed
    async function fetchStudentProjects() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
                .then((response) => {
                    function sortProjects(projects) {
                        return (
                            projects.sort(function(a,b) {
                                return a.quest_difficulty - b.quest_difficulty
                            }).reverse()
                        )
                    }
                    setProjects(sortProjects(response.data).filter(item => item.is_project && item.completed))
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
                    function sortSkills(skills) {
                        return (
                            skills.sort(function(a,b) {
                                return a.skill_exp - b.skill_exp
                            }).reverse()
                        )
                    }

                    setStuSkills(sortSkills(response.data))
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
            <YourSkills skills={stuSkills} />
            <YourProjects projects={projects} />
          </div>
          <div className="pane-item">
            <ResTemplates stuSkills={stuSkills} projects={projects}/>
          </div>
        </div>
        </>
        )
    )
}
