import React, { useState } from "react"
import { Message } from "../components/Message"
import { useResources } from "../hooks/useResources"
import { ResourceForm } from "../components/resource/ResourceForm"
import { resourceService } from "../services/resourceServices"

const ResourceTab = ()=>{
    const [message, setMessage] = useState(null)
    const {resources, error, fetchResources} = useResources()
    
    const handleSubmit = async(e, apiFunction, successMessage)=>{
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        try{
            await apiFunction(formData)
            setMessage({type: "success", text: successMessage})
            fetchResources()
            e.target.reset()
        } catch(err){
            setMessage({type: "error", text: err.message})
        }
    }

    const handleAddResource = async (formData) => {
        return resourceService.addResource(formData)
    }

    return(
        <div className="resource-tab">
            <h1>Resource Management</h1>
            <Message message={message}/>
            <div className="resource-forms">
                <ResourceForm type="add" onSubmit={(e)=>handleSubmit(e, handleAddResource, "Resource added successfully")}/>
                <ResourceForm type="delete" resources={resources} onSubmit={(e)=>handleSubmit(e, (data) => resourceService.deleteResource(data.resourceId), "Resource deleted successfully")}/>
                <ResourceForm type="update" resources={resources} onSubmit={(e)=>handleSubmit(e, (data) => resourceService.updateResource(data.resourceId, {
                    resourceName: data.resourceName,
                    resourceLink: data.resourceLink,
                    resourceDescription: data.resourceDescription,
                    resourceType: data.resourceType
                }), "Resource updated successfully")}/>
            </div>
        </div>
    )
}

export default ResourceTab