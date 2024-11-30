// Hooks for managing quest-related data and operations
// Handles fetching quests, their skills, and resources atm
import { useState, useEffect } from "react"
import axios from "axios"

const URL = "http://localhost:3000/api"

export const useQuests = () => {
    // States for storing quest data
    const [quests, setQuests] = useState([])
    const [questSkills, setQuestSkills] = useState([])
    const [questResources, setQuestResources] = useState([])
    const [error, setError] = useState(null)


    // these fetch calls are similar to APITemplate.html and or common forms of calling API get requests
    // fetches all quests from the API
    const fetchQuests = async() => {
        try {
            const response = await axios.get(`${URL}/quests`)
            setQuests(response.data)
            setError(null)
        }
        catch(err) {
            console.error("Error fetching quests: ", err)
            setError("Failed to fetch quests")
        }
    }

    // fetches all skills associated with a specific quest
    const fetchQuestSkills = async(questId) => {
        try {
            const response = await axios.get(`${URL}/quests/${questId}/skills`)
            setQuestSkills(response.data)
            setError(null)
        }
        catch(err) {
            console.error("Error fetching quest skills: ", err)
            setError("Failed to fetch quest skills")
        }
    }

    // fetches all resources associated with a specific quest
    const fetchQuestResources = async(questId) => {
        try {
            const response = await axios.get(`${URL}/quests/${questId}/resources`)
            setQuestResources(response.data)
            setError(null)
        }
        catch(err) {
            console.error("Error fetching quest resources: ", err)
            setError("Failed to fetch quest resources")
        }
    }

    // Fetch quests on component mount
    useEffect(() => {
        fetchQuests()
    }, [])

    return{
        quests, questSkills, questResources, error,
        fetchQuests, fetchQuestSkills, fetchQuestResources,
        setQuestSkills, setQuestResources
    }
}