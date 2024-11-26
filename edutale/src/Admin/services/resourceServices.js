import axios from "axios"
const URL = "http://localhost:3000/api"

export const resourceService = {
    addResource: (data) => axios.post(`${URL}/resources`, {
        resourceName: data.resourceName,
        resourceLink: data.resourceLink,
        resourceDescription: data.resourceDescription,
        resourceType: data.resourceType
    }),
    updateResource: (resourceId, data) => {
        // Only include fields that are not empty
        const updateData = {}
        if (data.resourceName) updateData.resourceName = data.resourceName
        if (data.resourceLink) updateData.resourceLink = data.resourceLink
        if (data.resourceDescription) updateData.resourceDescription = data.resourceDescription
        if (data.resourceType) updateData.resourceType = data.resourceType
        return axios.put(`${URL}/resources/${resourceId}`, updateData)
    },
    deleteResource: (resourceId) => axios.delete(`${URL}/resources/${resourceId}`)
}