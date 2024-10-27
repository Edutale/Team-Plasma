import { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/api'

export const useResources = ()=>{
    const [resources, setResources] = useState([])
    const [error, setError] = useState(null)

    const fetchResources = async()=>{
        try{
            const response = await axios.get(`${URL}/resources`)
            setResources(response.data)
            setError(null)
        } catch(err){
            console.error("Error fetching resources: ", err)
            setError("Failed to fetch resources")
        }
    }

    useEffect(()=>{
        fetchResources()
    }, [])

    return{
        resources, error
    }
}