import React, { useState, useEffect } from "react"
import Axios from "axios"

const studentId = "111111111"

export default function SkillTiles() {
    const [career, setCareer] = useState()
    const [skills, setSkills] = useState()

    // effect for pulling student career
    useEffect(() => {
        fetchCareerSkills()
    }, [career])

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

    async function fetchCareerSkills() {
        try {
            await fetchCurrCareer()
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