import { useState, useEffect } from "react"
import axios from "axios"

const URL = "http://localhost:3000/api"

export const useItems = ()=>{
    const [items, setItems] = useState([])
    const [itemDetails, setItemDetails] = useState(null)
    const [error, setError] = useState(null)

    const fetchItems = async ()=>{
        try{
            const response = await axios.get(`${URL}/inventory/inventory`)
            setItems(response.data)
            setError(null)
        } catch(err){
            console.error("Error fetching items: ", err)
            setError("Failed to fetch items")
        }
    }

    const fetchItemDetails = async (itemId)=>{
        try{
            const response = await axios.get(`${URL}/inventory/inventory/${itemId}`)
            setItemDetails(response.data)
            setError(null)
        } catch(err){
            console.error("Error fetching item details: ", err)
            setError("Failed to fetch item details")
            setItemDetails(null)
        }
    }

    useEffect(()=>{
        fetchItems()
    }, [])

    return{
        items,
        itemDetails,
        error,
        fetchItems,
        fetchItemDetails,
        setItemDetails
    }
}
