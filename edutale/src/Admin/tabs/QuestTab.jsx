// QuestTab.jsx
/*
  Admin section for quests and stuff
*/

import React, { useState } from "react"
import { useQuests } from "../hooks/useQuests"
import { useSkills } from "../hooks/useSkills"
import { useResources } from "../hooks/useResources"
import { QuestForm } from "../components/quest/QuestForm"
import { AddQuestResourceForm, DeleteQuestResourceForm } from "../components/quest/QuestResourceForm"
import { AddQuestSkillForm, DeleteQuestSkillForm } from "../components/quest/QuestSkillForm"
import { Message } from "../components/Message"
import { questService } from "../services/questServices"
import { AdminFunctionSelector, AdminModal } from "../components/AdminFunctionSelector"

const QuestTab = ()=>{
    const[message, setMessage] = useState(null) // state for displaying success/error messages to user
    const [activeModal, setActiveModal] = useState(null)

    // Custom hooks for managing quests, skills, and resources
    const{
        quests, questSkills, questResources,
        fetchQuests, fetchQuestSkills, fetchQuestResources,
        setQuestSkills, setQuestResources
    } = useQuests()
    const { skills } = useSkills()
    const { resources } = useResources()

    // Handles changes in quest selection dropdowns
    // Updates the skills/resources lists based on the selected quest
    // @param {Event} e - Change event
    // @param {string} formType - Type of form ("skill", "resource", or "both") will add more types of forms in future into different pages of admin in future
    const handleQuestChange = (e, formType)=>{
        const questId = e.target.value
        if(questId){
            if(formType === "skill" || formType === "both"){
                fetchQuestSkills(questId)
            }
            if(formType === "resource" || formType === "both"){
                fetchQuestResources(questId)
            }
        } else{
            setQuestSkills([])
            setQuestResources([])
        }
    }

    // Generic submit handler for all forms
    // @param {Event} e - Submit event
    // @param {Function} apiFunction - API Function to call
    // @param {string} successMessage - Message to display on success
    const handleSubmit = async(e, apiFunction, successMessage)=>{
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        try{
            await apiFunction(formData)
            setMessage({type: "success", text: successMessage})
            fetchQuests()
            setQuestSkills([])
            setQuestResources([])
            setActiveModal(null)
            e.target.reset()
        } catch(err){
            setMessage({type: "error", text: err.message})
        }
    }

    const questFunctions = [
        {
            name: "Add New Quest",
            action: () => setActiveModal("add")
        },
        {
            name: "Update Quest",
            action: () => setActiveModal("update")
        },
        {
            name: "Delete Quest",
            action: () => setActiveModal("delete")
        },
        {
            name: "Add Quest Skill",
            action: () => setActiveModal("addSkill")
        },
        {
            name: "Delete Quest Skill",
            action: () => setActiveModal("deleteSkill")
        },
        {
            name: "Add Quest Resource",
            action: () => setActiveModal("addResource")
        },
        {
            name: "Delete Quest Resource",
            action: () => setActiveModal("deleteResource")
        }
    ]

    return(
        <div className="quest-tab">
            <h1>Quest Management</h1>
            <Message message={message}/>
            <AdminFunctionSelector functions={questFunctions}/>

            <AdminModal isOpen={activeModal === "add"} onClose={() => setActiveModal(null)} title="Add New Quest">
                <QuestForm type="add" onSubmit={(e) => handleSubmit(e, questService.addQuest, "Quest added successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "update"} onClose={() => setActiveModal(null)} title="Update Quest">
                <QuestForm type="update" quests={quests} onQuestChange={handleQuestChange}
                    onSubmit={(e) => handleSubmit(e, (data) => questService.updateQuest(data.questId, {
                        questName: data.questName,
                        questDescription: data.questDescription
                }), "Quest updated successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "delete"} onClose={() => setActiveModal(null)} title="Delete Quest">
                <QuestForm type="delete" quests={quests} onQuestChange={handleQuestChange}
                    onSubmit={(e) => handleSubmit(e, (data) => questService.deleteQuest(data.questId),"Quest deleted successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "addSkill"} onClose={() => setActiveModal(null)} title="Add Quest Skill">
                <AddQuestSkillForm quests={quests} allSkills={skills} onQuestChange={handleQuestChange} 
                    onSubmit={(e) => handleSubmit(e, (data) => questService.addSkill(data.questId, data.skillId), "Skill added to Quest Successfully")}/>
            </AdminModal>
            
            <AdminModal isOpen={activeModal === "deleteSkill"} onClose={() => setActiveModal(null)} title="Delete Quest Skill">
                <DeleteQuestSkillForm quests={quests} questSkills={questSkills} onQuestChange={handleQuestChange}
                    onSubmit={(e) => handleSubmit(e, (data) => questService.deleteSkill(data.questId, data.skillId), "Skill removed from Quest Successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "addResource"} onClose={() => setActiveModal(null)} title="Add Quest Resource">
                <AddQuestResourceForm quests={quests} allResources={resources} onQuestChange={handleQuestChange}
                    onSubmit={(e) => handleSubmit(e, (data) => questService.addResource(data.questId, data.resourceId), "Resource added to Quest Successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "deleteResource"} onClose={() => setActiveModal(null)} title="Delete Quest Resource">
                <DeleteQuestResourceForm quests={quests} questResources={questResources} onQuestChange={handleQuestChange}
                    onSubmit={(e) => handleSubmit(e, (data) => questService.deleteResource(data.questId, data.resourceId), "Resource removed from Quest Successfully")}/>
            </AdminModal>
        </div>
    )
}

export default QuestTab