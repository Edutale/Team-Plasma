import React, { useState } from "react"
import { Message } from "../components/Message"
import { useResources } from "../hooks/useResources"
import { ResourceForm } from "../components/resource/ResourceForm"
import { resourceService } from "../services/resourceServices"
import { AdminFunctionSelector, AdminModal } from "../components/AdminFunctionSelector"

const ResourceTab = () => {
    const [message, setMessage] = useState(null)
    const [activeModal, setActiveModal] = useState(null)
    const {resources, error, fetchResources} = useResources()
    
    const handleSubmit = async(e, apiFunction, successMessage) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        try {
            await apiFunction(formData)
            setMessage({type: "success", text: successMessage})
            fetchResources()
            setActiveModal(null)
            e.target.reset()
        }
        catch(err) {
            setMessage({type: "error", text: err.message})
        }
    }

    const handleAddResource = async (formData) => {
        return resourceService.addResource(formData)
    }

    const resourceFunctions = [
        {
            name: "Add New Resource",
            action: () => setActiveModal("add")
        },
        {
            name: "Update Resource", 
            action: () => setActiveModal("update")
        },
        {
            name: "Delete Resource",
            action: () => setActiveModal("delete")
        }
    ]

    return (
        <div className="resource-tab">
            <h1>Resource Management</h1>
            <Message message={message}/>
            <AdminFunctionSelector functions={resourceFunctions}/>

            <AdminModal isOpen={activeModal === "add"} onClose={() => setActiveModal(null)} title="Add New Resource">
                <ResourceForm type="add" onSubmit={(e) => handleSubmit(e, resourceService.addResource, "Resource added successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "update"} onClose={() => setActiveModal(null)} title="Update Resource">
            <ResourceForm type="update" resources={resources}
                onSubmit={(e) => handleSubmit(e, (data) => resourceService.updateResource(
                    data.resourceId, {
                        resourceName: data.resourceName,
                        resourceLink: data.resourceLink,
                        resourceDescription: data.resourceDescription,
                        resourceType: data.resourceType
                    }), "Resource updated successfully"
                )}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "delete"} onClose={() => setActiveModal(null)} title="Delete Resource">
                <ResourceForm type="delete" resources={resources} onSubmit={(e) => handleSubmit(e, (data)=>resourceService.deleteResource(data.resourceId), "Resource deleted successfully")}/>
            </AdminModal>
        </div>
    )
}

export default ResourceTab