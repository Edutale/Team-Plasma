import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "111111111"

export default function YourSkills () {
    const [skills, setSkills] = useState()
    const [projects, setProjects] = useState()
    
    // effect for pulling student skills
    useEffect(() => {
        fetchStudentSkills()
    }, [])

    async function fetchStudentSkills() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/skills`)
                .then((response) => {
                    let fetchedSkills = []

                    for (const {skill_id, skill_name, skill_xp} of response.data) {
                        fetchedSkills.push({
                            key: skill_id, name: skill_name, level: skill_xp
                        })
                    }

                    // sort by skill xp, descending
                    fetchedSkills.sort(function(a,b) {
                        return a.level - b.level
                    }).reverse()

                    // set skills to the formatted HTML for the component
                    setSkills(
                      <>
                        {fetchedSkills.map(item => (
                          <p key={item.key}> {item.name}: {item.level} XP </p>
                        ))}
                      </>
                    )
                })
        }
        catch(err) {
            console.error("Error fetching skills: ", err)
        }
    }

    return (
      <>
        <div>
          <h1 className="header-centered"> <u> Your Skills </u> </h1>
          {skills}
        </div>
      </>
    )
}