import { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/api'

export const useQuests = ()=>{
    const [quests, setQuests] = useState([])
    const [questSkills, setQuestSkills] = useState([])
    const [questResources, setQuestResources] = useState([])
    const [error, setError] = useState(null)

    const fetchQuests = async()=>{
        try{
            const response = await axios.get(`${URL}/quests`)
            setQuests(response.data)
            setError(null)
        } catch(err){
            console.error("Error fetching quests: ", err)
            setError("Failed to fetch quests")
        }
    }

    const fetchQuestSkills = async(questId)=>{
        try{
            const response = await axios.get(`${URL}/quests/${questId}/skills`)
            setQuestSkills(response.data)
            setError(null)
        } catch(err){
            console.error("Error fetching quest skills: ", err)
            setError("Failed to fetch quest skills")
        }
    }

    const fetchQuestResources = async(questId)=>{
        try{
            const response = await axios.get(`${URL}/quests/${questId}/resources`)
            setQuestResources(response.data)
            setError(null)
        } catch(err){
            console.error("Error fetching quest resources: ", err);
            setError("Failed to fetch quest resources")
        }
    }

    useEffect(()=>{
        fetchQuests()
    }, [])

    return{
        quests, questSkills, questResources, error,
        fetchQuests, fetchQuestSkills, fetchQuestResources,
        setQuestSkills, setQuestResources
    }
}