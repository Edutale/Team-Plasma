import React, { useState, useEffect } from "react"
import Axios from "axios"
import "./SkillTiles.css"

export default function SkillTiles({career}) {
    const [skills, setSkills] = useState()

    // need career as a dependency in order to ensure
    // fetchCareerSkills happens after obtaining career val
    useEffect(() => {
        fetchCareerSkills()
    },[career])

    // get the skills associated with the fetched career
    async function fetchCareerSkills() {
        try {
            await Axios.get(`http://localhost:3000/api/careers/${career}/skills`)
                .then((response) => {
                    let fetchedSkills = []

                    for (const {skill_id, skill_name} of response.data) {
                        fetchedSkills.push({
                            key: skill_id, name: skill_name
                        })
                    }

                    setSkills(
                        <>
                          {fetchedSkills.map(item => (
                            <button key={item.key}> {item.name} </button>
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
            {skills}
        </>
    )
}