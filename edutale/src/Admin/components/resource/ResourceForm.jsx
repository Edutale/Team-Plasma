import React, { useState, useEffect } from "react"
import { useResources } from "../../hooks/useResources"

export const ResourceForm = ({ type, onSubmit, resources = [], onResourceChange = ()=>{} })=>{
    const {resourceDetails, fetchResourceDetails} = useResources()

    // Update form fields when resource details change
    useEffect(()=>{
        if(resourceDetails && type === "update"){
            const form = document.querySelector(".resource-form")
            if(form){
                form.querySelector("[name='resourceName']").placeholder=resourceDetails.resource_name
                form.querySelector("[name='resourceLink']").placeholder=resourceDetails.resource_link
                form.querySelector("[name='resourceDescription']").placeholder=resourceDetails.resource_description
                form.querySelector("[name='resourceType']").value=resourceDetails.resource_type
            }
        }
    }, [resourceDetails])

    // Handle resource selection
    const handleResourceSelect = (e)=>{
        const resourceId = e.target.value
        if(resourceId && type === "update"){
            fetchResourceDetails(resourceId)
        }
        onResourceChange(e)
    }

    const renderFields = ()=>{
        switch(type){
            case "add":
                return(
                    <>
                        <h2>Create Resource</h2>
                        <div className="form-group">
                            <label htmlFor="resourceName">Resource Name:</label>
                            <input id="resourceName" name="resourceName" placeholder="Resource Name" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="resourceLink">Resource Link:</label>
                            <input id="resourceLink" name="resourceLink" placeholder="Resource Link" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="resourceDescription">Description:</label>
                            <textarea id="resourceDescription" name="resourceDescription" placeholder="Resource Description" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="resourceType">Resource Type:</label>
                            <select id="resourceType" name="resourceType" required>
                                <option value="">Select Type</option>
                                <option value="Video">Video</option>
                                <option value="Article">Article</option>
                                <option value="Tutorial">Tutorial</option>
                                <option value="Exercise">Exercise</option>
                                <option value="Documentation">Documentation</option>
                            </select>
                        </div>

                        <button type="submit">Add Resource</button>
                    </>
                )
            case "delete":
                return(
                    <>
                        <h2>Delete Resource</h2>
                        <select name="resourceId" required onChange={onResourceChange}>
                            <option value="">Select Resource</option>
                            {resources.map(resource=>(
                                <option key={`resource-delete-${resource.resource_id}`} value={resource.resource_id}>{resource.resource_name}</option>
                            ))}
                        </select>
                        <button type="submit">Delete Resource</button>
                    </>
                )
            case "update":
                return(
                    <>
                        <h2>Update Resource</h2>
                        <select name="resourceId" required onChange={onResourceChange}>
                            <option value="">Select Resource</option>
                            {resources.map(resource=>(
                                <option key={`resource-update-${resource.resource_id}`} value={resource.resource_id}>{resource.resource_name}</option>
                            ))}
                        </select>
                        <input name="resourceName" placeholder="New Resource Name"/>
                        <input name="resourceLink" placeholder="New Resource Link"/>
                        <textarea name="resourceDescription" placeholder="New Resource Description"/>
                        <select name="resourceType">
                            <option value="">Select Type</option>
                            <option value="Video">Video</option>
                            <option value="Article">Article</option>
                            <option value="Tutorial">Tutorial</option>
                            <option value="Exercise">Exercise</option>
                            <option value="Documentation">Documentation</option>
                        </select>
                        <button type="submit">Update Resource</button>
                    </>
                )
            default:
                return null;
        }
    }
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            // For update form, only include non-empty fields
            if(type === "update"){
                const formData = new FormData(e.target)
                const updateData = {}
                for(let [key, value] of formData.entries()){
                    if(value.trim() !== ""){
                        updateData[key] = value
                    }
                }
                // Check if any fields were filled
                if(Object.keys(updateData).length <= 1) { // 1 because resourceId is always present
                    alert("Please fill at least one field to update");
                    return
                }
                onSubmit(e)
            } else{
                onSubmit(e)
            }
        }} className="resource-form">
            {renderFields()}
        </form>
    )
}