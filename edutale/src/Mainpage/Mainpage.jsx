/*--- Mainpage.jsx ---*/ 

/* Mainpage functions as the "container" for all of the *
 * information on the webpage for this specific tab.    */

import { useAuth0 } from "@auth0/auth0-react"
import Axios from "axios"
import { useState, useEffect, useLayoutEffect } from "react"

import Avatar from "./Avatar/Avatar"
import Day from "./Day/Day"
import OngoingQuests from "./OngoingQuests/OngoingQuests"
import QuestBoard from "./QuestBoard/QuestBoard"
import SkillGraph from "./SkillGraph/SkillGraph"
import Userbar from "./UserBar/UserBar"
import Header from "../Header/Header"

import "./Mainpage.css"
const studentId = "TESTSTU01"

export default function Mainpage() {
    const [joinDate, setJoinDate] = useState()
    const [progress, setProgress] = useState()
    const [skills, setSkills] = useState()
    const [skillEXP, setEXP] = useState()
    const [stuId, setStuID] = useState()

    // used to check if the user is authenticated (logged in) again as a failsafe
    // if the ProtectedRoute logic fails.
    const {user, isAuthenticated} = useAuth0()

    useEffect(() => {
        fetchMainpageStats()
    }, [])
    
    async function fetchMainpageStats() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/mainpage`)
                .then((response) => {
                    setJoinDate(response.data[0].student_join_date)

                    setProgress({
                        lvl: response.data[0].student_lvl,
                        exp: response.data[0].total_exp,
                        name: response.data[0].student_name
                    })

                    setSkills(response.data.map((item) => item.skill_name))
                    setEXP(response.data.map((item) => item.skill_exp))
                })
        }
        catch(err) {
            console.error("Error fetching Mainpage stats: ", err)
        }
    }

    return (
      // the page will only render if the user is logged in
      isAuthenticated && progress && (
        <>
          <Header />
          <div className="pane-container">
            <div className="pane-item">
              <Day joinDate={joinDate} />
              <SkillGraph skills={skills} skillEXP={skillEXP} />
              <div className="pane-2-container">
                <div className="pane-2-item">
                  <div className="user-container">
                    <Avatar />
                    <Userbar progress={progress} />
                  </div>
                </div>
                <div className="pane-2-item">
                  <OngoingQuests />
                </div>
              </div>
            </div>
            <div className="pane-item">
              <QuestBoard />
            </div>
          </div>
        </>
      )
    )
}
