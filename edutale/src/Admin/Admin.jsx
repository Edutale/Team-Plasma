import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useQuests } from './hooks/useQuests'
import { useSkills } from './hooks/useSkills'
import { useResources } from './hooks/useResources'
import { QuestForm } from './components/QuestForm'
import { AddQuestResourceForm, DeleteQuestResourceForm } from './components/ResourceForm'
import { AddQuestSkillForm, DeleteQuestSkillForm } from './components/SkillForm'
import { Message } from './components/Message'
import { questService } from './services/questServices'
const URL = 'http://localhost:3000/api'

export default function Admin(){
  const[message, setMessage] = useState(null)
  const{
    quests, questSkills, questResources,
    fetchQuests, fetchQuestSkills, fetchQuestResources,
    setQuestSkills, setQuestResources
  } = useQuests()
  const { skills } = useSkills()
  const { resources } = useResources()

  const navigate = useNavigate()

  const handleQuestChange = (e, formType)=>{
    const questId = e.target.value
    if(questId){
      if(formType === 'skill' || formType === 'both'){
        fetchQuestSkills(questId)
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

  return(
    <div className="masterDiv">
      <h1>Admin Dashbaord</h1>
      <Message message={message}/>
      <div className="functionDiv">
        <QuestForm type="add" onSubmit={(e)=>handleSubmit(e, questService.addQuest, 'Quest Added Successfully')}/>
        <QuestForm type="delete" quests={quests} onQuestChange={handleQuestChange} onSubmit={(e)=>handleSubmit(e, (data)=>questService.deleteQuest(data.questId), 'Quest Deleted Successfully')}/>
        <QuestForm type="update" quests={quests} onQuestChange={handleQuestChange} onSubmit={(e)=>handleSubmit(e, (data)=>questService.updateQuest(data.questId, {questName: data.questName, questDescription: data.questDescription}), 'Quest Updated Successfully')}/>
        <AddQuestSkillForm quests={quests} allSkills={skills} onQuestChange={handleQuestChange} onSubmit={(e)=>handleSubmit(e, (data)=>questService.addSkill(data.questId, data.skillId), 'Skill added to Quest Successfully')}/>
        <DeleteQuestSkillForm quests={quests} questSkills={questSkills} onQuestChange={handleQuestChange} onSubmit={(e)=>handleSubmit(e, (data)=>questService.deleteSkill(data.questId, data.skillId), 'Skill removed from Quest Successfully')}/>
        <AddQuestResourceForm quests={quests} allResources={resources} onQuestChange={handleQuestChange} onSubmit={(e)=>handleSubmit(e, (data)=>questService.addResource(data.questId, data.resourceId), 'Resource added to Quest Successfully')}/>
        <DeleteQuestResourceForm quests={quests} questResources={questResources} onQuestChange={handleQuestChange} onSubmit={(e)=>handleSubmit(e, (data)=>questService.deleteResource(data.questId, data.resourceId), 'Resource removed from Quest Successfully')}/>
      </div>
      <button onClick={() => navigate("/")}> Back </button>
    </div>
  )
}
