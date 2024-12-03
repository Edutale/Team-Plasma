import React, { useState } from "react"
import { Message } from "../components/Message"
import { useSkills } from "../hooks/useSkills"
import { SkillForm } from "../components/skill/SkillForm"
import { skillService } from "../services/skillServices"
import { AdminFunctionSelector, AdminModal } from "../components/AdminFunctionSelector"

const SkillTab = () => {
    const [message, setMessage] = useState(null)
    const [activeModal, setActiveModal] = useState(null)
    const {skills, error, fetchSkills} = useSkills()

    const handleSubmit = async(e, apiFunction, successMessage) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        try {
            await apiFunction(formData)
            setMessage({type: "success", text: successMessage})
            fetchSkills()
            setActiveModal(null)
            e.target.reset()
        }
        catch(err) {
            setMessage({type: "error", text: err.message})
        }
    }

    const skillFunctions = [
        {
            name: "Add New Skill",
            action: () => setActiveModal("add")
        },
        {
            name: "Update Skill",
            action: () => setActiveModal("update")
        },
        {
            name: "Delete Skill",
            action: () => setActiveModal("delete")
        }
    ]

    return(
        <div className="skill-tab">
            <h1> Skill Management </h1>
            <Message message={message}/>
            <AdminFunctionSelector functions={skillFunctions}/>

            <AdminModal isOpen={activeModal === "add"} onClose={() => setActiveModal(null)} title="Add New Skill">
                <SkillForm type="add" onSubmit={(e) => handleSubmit(e, skillService.addSkill, "Skill added Successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "update"} onClose={() => setActiveModal(null)} title="Update Skill">
                <SkillForm type="update" skills={skills} onSubmit={(e) => handleSubmit(e, (data)=>skillService.updateSkill(data.skillId, {
                    skillName: data.skillName,
                    skillDescription: data.skillDescription
                }), "Skill Updated Successfully")}/>
            </AdminModal>

            <AdminModal isOpen={activeModal === "delete"} onClose={() => setActiveModal(null)} title="Delete Skill">
                <SkillForm type="delete" skills={skills} onSubmit={(e) => handleSubmit(e, (data)=>skillService.deleteSkill(data.skillId), "Skill Deleted Successfully")}/>
            </AdminModal>
        </div>
    )
}

export default SkillTab