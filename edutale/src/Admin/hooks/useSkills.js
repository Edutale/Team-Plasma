import { useState, useEffect } from 'react'
import axios from 'axios'

// DONT FORGET TO UPDATE URL CONSTANT
const URL = 'http://localhost:3000/api'

export const useSkills = ()=>{
    const [skills, setSkills] = useState([])
    const [error, setError] = useState(null)

    const fetchSkills = async ()=>{
        try{
            const response = await axios.get(`${URL}/skills`)
            setSkills(response.data)
            setError(null)
        } catch(err){
            console.error("Error fetching skills: ", err)
            setError("Failed to fetch skills")
        }
    }

    useEffect(()=>{
        fetchSkills()
    }, [])

    return{
        skills, error, fetchSkills
    }
}