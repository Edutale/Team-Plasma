import axios from 'axios'

const URL = 'http://localhost:3000/api'

export const questService = {
    addQuest: (data) => axios.post(`${URL}/quests`, data),
    addResource: (questId, resourceId) => axios.post(`${URL}/quests/${questId}/resources`, {resourceId}),
    addSkill: (questId, skillId) => axios.post(`${URL}/quests/${questId}/skills`, {skillId}),
    deleteQuest: (questId) => axios.delete(`${URL}/quests/${questId}`),
    deleteSkill: (questId, skillId) => axios.delete(`${URL}/quests/${questId}/skills/${skillId}`),
    deleteResource: (questId, resourceId) => axios.delete(`${URL}/quests/${questId}/resources/${resourceId}`),
    updateQuest: (questId, data) => axios.put(`${URL}/quests/${questId}`, data)
}