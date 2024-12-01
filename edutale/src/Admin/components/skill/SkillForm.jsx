// Currently a simple implementation since we don't have too much info on skills in our schema atm
import React from "react"
import "../forms.css"
export const SkillForm = ({ type, onSubmit, skills = [], onSkillChange = () => {} }) => {
    const renderFields = () => {
        switch (type) {
            case "add":
                return (
                    <>
                      <h2> Create Skill </h2>
                      <div className="form-group">
                        <label htmlFor="skillName"> Skill Name: </label>
                        <input id="skillName" name="skillName" placeholder="Skill Name" required maxLength={32}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="skillDescription"> Description: </label>
                        <textarea id="skillDescription" name="skillDescription" placeholder="Skill Description" required/>
                      </div>
                      <button type="submit"> Add Skill </button>
                    </>
                )

            case "delete":
                return (
                    <>
                      <h2> Delete Skill </h2>
                      <select name="skillId" required onChange={onSkillChange}>
                        <option value="">Select Skill</option>
                        {skills.map(skill => (
                            <option key={`skill-delete-${skill.skill_id}`} value={skill.skill_id}> {skill.skill_name} </option>
                        ))}
                      </select>
                      <button type="submit">Delete Skill</button>
                    </>
                )
            
            case "update":
                return (
                    <>
                      <h2> Update Skill </h2>
                      <select name="skillId" required onChange={onSkillChange}>
                        <option value=""> Select Skill </option>
                        {skills.map(skill => (
                            <option key={`skill-update-${skill.skill_id}`} value={skill.skill_id}> {skill.skill_name} </option>
                        ))}
                      </select>
                      <input name="skillName" placeholder="New Skill Name" required maxLength={32}/>
                      <textarea name="skillDescription" placeholder="New Skill Description" required/>
                      <button type="submit"> Update Skill </button>
                    </>
                )
            
            default:
                return null
            }
        }

    return (
        <form onSubmit={onSubmit} className="skill-form">
          {renderFields()}
        </form>
    )
}