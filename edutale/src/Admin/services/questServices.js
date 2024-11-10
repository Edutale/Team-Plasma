// Service module for handling quest-related API Calls
import axios from 'axios'

const URL = 'http://localhost:3000/api'

// create our api calls to be used in other parts of admin here
export const questService = {
    addQuest: (data) => axios.post(`${URL}/quests`, {
        questName: data.questName,
        questDescription: data.questDescription,
        isProject: data.isProject === 'true', // cause apparently html forms don't like bool values, so gotta convert here zzzzz
        questDifficulty: Number(data.questDifficulty),
    }),
    addResource: (questId, resourceId) => axios.post(`${URL}/quests/${questId}/resources`, {resourceId}),
    addSkill: (questId, skillId) => axios.post(`${URL}/quests/${questId}/skills`, {skillId}),
    deleteQuest: (questId) => axios.delete(`${URL}/quests/${questId}`),
    deleteSkill: (questId, skillId) => axios.delete(`${URL}/quests/${questId}/skills/${skillId}`),
    deleteResource: (questId, resourceId) => axios.delete(`${URL}/quests/${questId}/resources/${resourceId}`),
    updateQuest: (questId, data) => axios.put(`${URL}/quests/${questId}`, data)
}