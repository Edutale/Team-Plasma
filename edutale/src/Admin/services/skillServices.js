import axios from "axios"
// DONT FORGET TO CHANGE URL CONSTANT ONCE LAUNCH
const URL = "http://localhost:3000/api"

export const skillService = {
    addSkill: (data) => axios.post(`${URL}/skills`, {
        skillName: data.skillName,
        skillDescription: data.skillDescription
    }),
    updateSkill: (skillId, data) => axios.put(`${URL}/skills/${skillId}`, {
        skillName: data.skillName,
        skillDescription: data.skillDescription
    }),
    deleteSkill: (skillId) => axios.delete(`${URL}/skills/${skillId}`)
}