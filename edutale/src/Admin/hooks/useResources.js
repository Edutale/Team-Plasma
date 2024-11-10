import { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000/api'

export const useResources = ()=>{
    const [resources, setResources] = useState([])
    const [resourceDetails, setResourceDetails] = useState(null)
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

    const fetchResourceDetails = async(resourceId)=>{
        try{
            const response = await axios.get(`${URL}/resources/${resourceId}`)
            setResourceDetails(response.data)
            setError(null)
        } catch(err){
            console.error("Error fetching resource details: ", err)
            setError("Failed to fetch resource details")
        }
    }

    useEffect(()=>{
        fetchResources()
    }, [])

    return{
        resources, resourceDetails, error,
        fetchResources, fetchResourceDetails, setResourceDetails
    }
}