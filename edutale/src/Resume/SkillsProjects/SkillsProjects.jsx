import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "111111111"

export default function SkillsProjects () {
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

                    for (const {skill_id, skill_name, proficiency_level} of response.data) {
                        fetchedSkills.push({
                            key: skill_id, name: skill_name, level: proficiency_level
                        })
                    }

                    // sort by proficiency, descending
                    fetchedSkills.sort(function(a,b) {
                        return a.level - b.level
                    }).reverse()

                    // set skills to the formatted HTML for the component
                    setSkills(
                      <>
                        {fetchedSkills.map(item => (
                          <p key={item.key}> {item.name}: {item.level} XP </p>
                        ))}
                      </>)
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

        <div>
          <h1 className="header-centered"> <u> Your Projects </u> </h1>
          {listProjects()}

        </div>
      </>
    )
}

function listProjects() {
    // same as listSkills, but with projects. Should have the
    // project name be a header or p, then use ul elements to
    // list out every related skill for that project.

    return "listProjects placeholder"
}