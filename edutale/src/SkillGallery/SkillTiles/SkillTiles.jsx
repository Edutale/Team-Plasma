import React, { useState, useEffect } from "react"
import Axios from "axios"
import "./SkillTiles.css"

export default function SkillTiles({career, onSetSkill, currSkill}) {
    const [skills, setSkills] = useState()

    // need career as a dependency in order to ensure
    // fetchCareerSkills happens after obtaining career val
    useEffect(() => {
        fetchCareerSkills()
    }, [career, onSetSkill, currSkill])

    // get the skills associated with the fetched career
    async function fetchCareerSkills() {
        try {
            await Axios.get(`http://localhost:3000/api/careers/${career}/skills`)
                .then((response) => {
                    setSkills(
                        <>
                          {response.data.map(item => (
                            <button className={currSkill == item.skill_name ? "curr-skill" : "skill-button"}
                              key={item.skill_id} onClick={changeSkill} value={item.skill_name}>
                                {item.skill_name}
                            </button>
                          ))}
                        </>
                    )  
                })
        }
        catch(err) {
            console.error("Error fetching skills: ", err)
        }
    }

    // handles changing whatever is needed in the moment
    function changeSkill(skillName) {
        onSetSkill(skillName.target.value)
    }

    return career && skills && (
        <div className="skill-button-container">
          {skills}
        </div>
    )
}