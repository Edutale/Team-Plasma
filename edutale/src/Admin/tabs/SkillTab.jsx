import React, { useState } from 'react'
import { Message } from '../components/Message'
import { useSkills } from '../hooks/useSkills'
import { SkillForm } from '../components/skill/SkillForm'
import { skillService } from '../services/skillServices'

const SkillTab = ()=>{
    const [message, setMessage] = useState(null)
    const {skills, error, fetchSkills} = useSkills()

    const handleSubmit = async(e, apiFunction, successMessage)=>{
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.target))
        try{
            await apiFunction(formData)
            setMessage({type: 'success', text: successMessage})
            fetchSkills()
        } catch(err){
            setMessage({type: 'error', text: err.message})
        }
    }

    return(
        <div className="skill-tab">
            <h1>Skill Management</h1>
            <Message message={message}/>
            <div className="skill-forms">
                <SkillForm type="add" onSubmit={(e)=>handleSubmit(e, skillService.addSkill, 'Skill added Successfully')}/>
                <SkillForm type="delete" skills={skills} onSubmit={(e)=>handleSubmit(e, (data)=>skillService.deleteSkill(data.skillId), 'Skill Deleted Successfully')}/>
                <SkillForm type="update" skills={skills} onSubmit={(e)=>handleSubmit(e, (data)=>skillService.updateSkill(data.skillId, {skillName: data.skillName, skillDescription: data.skillDescription}), 'Skill Updated Successfully')}/>
            </div>
        </div>
    )
}

export default SkillTab