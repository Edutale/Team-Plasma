import React, { useState, useEffect} from "react"
import axios from "axios"

const URL = 'http://localhost:3000/api'

export default function Admin(){
  const[message, setMessage] = useState('')
  const[quests, setQuests] = useState([])
  const[questSkills, setQuestSkills] = useState([])
  const[questResources, setQuestResources] = useState([])
  const[allSkills, setAllSkills] = useState([])
  const[allResources, setAllResources] = useState([])

  useEffect(()=>{
    fetchQuests()
    fetchAllSkills()
    fetchAllResources()
  }, [])

  const fetchQuests = async()=>{
    try{
      const response = await axios.get(`${URL}/quests`)
      setQuests(response.data)
    } catch(err){
      console.error("Error fetching quests: ", err)
    }
  }

  const fetchAllSkills = async()=>{
    try{
      const response = await axios.get(`${URL}/skills`)
      setAllSkills(response.data)
    } catch(err){
      console.error("Error fetching all skills: ", err)
    }
  }

  const fetchAllResources = async()=>{
    try{
      const response = await axios.get(`${URL}/resources`)
      setAllResources(response.data)
    } catch(err){
      console.error("Error fetching all skills: ", err)
    }
  }

  const fetchQuestSkills = async(questId)=>{
    try{
      const response = await axios.get(`${URL}/quests/${questId}/skills`)
      setQuestSkills(response.data)
    } catch(err){
      console.error("Error fetching quest skills: ", err);
    }
  }

  const fetchQuestResources = async(questId)=>{
    try{
      const response = await axios.get(`${URL}/quests/${questId}/resources`)
      setQuestResources(response.data)
    } catch(err){
      console.error("Error fetching quest resources: ", err)
    }
  }

  const handleQuestChange = (e, formType)=>{
    const questId = e.target.value
    if(questId){
      if(formType === 'skill' || formType === 'both'){
        fetchQuestSkills(questId);
      }
      if(formType === 'resource' || formType === 'both'){
        fetchQuestResources(questId)
      }
    } else{
      setQuestSkills([])
      setQuestResources([])
    }
  }

  const handleSubmit = async(e, apiFunction, successMessage)=>{
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    try{
      await apiFunction(formData)
      setMessage({type: 'success', text: successMessage})
      fetchQuests()
      setQuestSkills([])
      setQuestResources([])
    } catch(err){
      setMessage({type: 'error', text: err.message})
    }
  }

  const addNewQuest = (data)=>axios.post(`${URL}/quests`, data)
  const addQuestResource = (data)=>axios.post(`${URL}/quests/${data.questId}/resources`, {resourceId: data.resourceId})
  const addQuestSkill = (data)=>axios.post(`${URL}/quests/${data.questId}/skills`, {skillId: data.skillId})
  const deleteQuest = (data)=>axios.delete(`${URL}/quests/${data.questId}`)
  const deleteQuestSkill = (data)=>axios.delete(`${URL}/quests/${data.questId}/skills/${data.skillId}`)
  const deleteQuestResource = (data)=>axios.delete(`${URL}/quests/${data.questId}/resources/${data.resourceId}`)
  const updateQuest = (data)=>axios.put(`${URL}/quests/${data.questId}`, {questName: data.questName, questDescription: data.questDescription})

  return(
    <div className="masterDiv">
      <h1>Admin Dashboard</h1>

      {message && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="functionDiv">
        <form onSubmit={(e)=>handleSubmit(e, addNewQuest, 'Quest added successfully')}>
          <h2>Add New Quest</h2>
          <input name="questId" placeholder="Quest ID" required maxLength={15}/>
          <input name="questName" placeholder="Quest Name" required maxLength={255}/>
          <textarea name="questDescription" placeholder="Quest Description" required maxLength={1000}/>
          <button type="submit">Add Quest</button>
        </form>

        <form onSubmit={(e)=>handleSubmit(e, addQuestResource, 'Resource added to quest successfully')}>
          <h2>Add Quest Resource</h2>
          <select name="questId" required onChange={(e)=>handleQuestChange(e, 'resource')}>
            <option value="">Select Quest</option>
            {quests.map(quest=>(
              <option key={quest.quest_id} value={quest.quest_id}>{quest.quest_name}</option>
            ))}
          </select>
          <select name="resourceId" required>
            <option value="">Select Resource</option>
            {allResources.map(resource=>(
              <option key={resource.resource_id} value={resource.resource_id}>{resource.resource_name}</option>
            ))}
          </select>
          <button type="submit">Add Resource</button>
        </form>

        <form onSubmit={(e)=>handleSubmit(e, addQuestSkill, 'Skill added to quest successfully')}>
          <h2>Add Quest Skill</h2>
          <select name="questId" required onChange={(e) => handleQuestChange(e, 'skill')}>
            <option value="">Select Quest</option>
            {quests.map(quest => (
              <option key={quest.quest_id} value={quest.quest_id}>{quest.quest_name}</option>
            ))}
          </select>
          <select name="skillId" required>
            <option value="">Select Skill</option>
            {allSkills.map(skill=>(
              <option key={skill.skill_id} value={skill.skill_id}>{skill.skill_name}</option>
            ))}
          </select>
          <button type="submit">Add Skill</button>
        </form>

        <form onSubmit={(e)=>handleSubmit(e, deleteQuest, 'Quest deleted successfully')}>
          <h2>Delete Quest</h2>
          <select name="questId" required>
            <option value="">Select Quest</option>
            {quests.map(quest=>(
              <option key={quest.quest_id} value={quest.quest_id}>{quest.quest_name}</option>
            ))}
          </select>
          <button type="submit">Delete Quest</button>
        </form>

        <form onSubmit={(e)=>handleSubmit(e, deleteQuestSkill, 'Skill removed from quest successfully')}>
          <h2>Delete Quest Skill</h2>
          <select name="questId" required onChange={(e)=>handleQuestChange(e, 'skill')}>
            <option value="">Select Quest</option>
            {quests.map(quest=>(
              <option key={quest.quest_id} value={quest.quest_id}>{quest.quest_name}</option>
            ))}
          </select>
          <select name="skillId" required>
            <option value="">Select Skill</option>
            {questSkills.map(skill=>(
              <option key={skill.skill_id} value={skill.skill_id}>{skill.skill_name}</option>
            ))}
          </select>
          <button type="submit">Delete Skill</button>
        </form>

        <form onSubmit={(e)=>handleSubmit(e, deleteQuestResource, 'Resource removed from quest successfully')}>
          <h2>Delete Quest Resource</h2>
          <select name="questId" required onChange={(e)=>handleQuestChange(e, 'resource')}>
            <option value="">Select Quest</option>
            {quests.map(quest=>(
              <option key={quest.quest_id} value={quest.quest_id}>{quest.quest_name}</option>
            ))}
          </select>
          <select name="resourceId" required>
            <option value="">Select Resource</option>
            {questResources.map(resource=>(
              <option key={resource.resource_id} value={resource.resource_id}>{resource.resource_name}</option>
            ))}
          </select>
          <button type="submit">Delete Resource</button>
        </form>

        <form onSubmit={(e)=>handleSubmit(e, updateQuest, 'Quest updated successfully')}>
          <h2>Update Quest</h2>
          <select name="questId" required onChange={(e)=>handleQuestChange(e, 'skill')}>
            <option value="">Select Quest</option>
            {quests.map(quest=>(
              <option key={quest.quest_id} value={quest.quest_id}>{quest.quest_name}</option>
            ))}
          </select>
          <input name="questName" placeholder="New Quest Name" required maxLength={255}/>
          <textarea name="questDescription" placeholder="New Quest Description" required maxLength={1000}/>
          <button type="submit">Update Quest</button>
        </form>

      </div>
    </div>
  )
}
