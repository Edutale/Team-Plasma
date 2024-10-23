import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "TESTSTU01"

export default function YourProjects() {
    const [projects, setProjects] = useState()

    useEffect(() => {
        fetchStudentProjects()
    }, [])

    async function fetchStudentProjects() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/quests`)
                .then((response) => {

                    // sort by highest to lowest difficulty (Expert -> Inter. -> Beg.)
                    response.data.sort(function(a,b) {
                        return a.quest_difficulty - b.quest_difficulty
                    }).reverse()

                    // set skills to the formatted HTML for the component
                    setProjects(
                      <>
                        {response.data.map(item => item.is_project && (
                          <p key={item.quest_id}> {item.quest_name}: {item.quest_description} </p>
                        ))}
                      </>
                    )
                })
        }
        catch(err) {
            console.error("Error fetching projects: ", err)
        }
    }

    return (
      <>
        <div>
          <h1 className="header-centered"> <u> Your Projects </u> </h1>
          {projects}
        </div>
      </>
    )
}