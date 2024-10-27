import React from 'react'

export const AddQuestSkillForm = ({onSubmit, quests, allSkills, onQuestChange})=>{
    return(
        <form onSubmit={onSubmit} className="quest-form">
            <h2>Add Quest Skill</h2>
            <select name="questId" required onChange={(e)=>onQuestChange(e, 'skill')}>
                <option value="">Select Quest</option>
                {quests.map(quest=>(
                    <option key={`quest-skill-add${quest.quest_id}`} value={quest.quest_id}>{quest.quest_name}</option>
                ))}
            </select>
            <select name="skillId" required>
                <option value="">Select Skill</option>
                {allSkills.map(skill=>(
                    <option key={`skill-add${skill.skill_id}`} value={skill.skill_id}>{skill.skill_name}</option>
                ))}
            </select>
            <button type="submit">Add Skill</button>
        </form>
    )
}

export const DeleteQuestSkillForm = ({onSubmit, quests, questSkills, onQuestChange})=>{
    return(
        <form onSubmit={onSubmit} className="quest-form">
            <h2>Delete Quest Skill</h2>
            <select name="questId" required onChange={(e)=>onQuestChange(e, 'skill')}>
                <option value="">Select Quest</option>
                {quests.map(quest=>(
                    <option key={`quest-skill-delete${quest.quest_id}`} value={quest.quest_id}>{quest.quest_name}</option>
                ))}
            </select>
            <select name="skillId" required>
                <option value="">Select Skill</option>
                {questSkills.map(skill=>(
                    <option key={`skill-delete${skill.skill_id}`} value={skill.skill_id}>{skill.skill_name}</option>
                ))}
            </select>
            <button type="submit">Delete Skill</button>
        </form>
    )
}