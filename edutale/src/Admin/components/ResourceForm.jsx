import React from 'react'

export const AddQuestResourceForm = ({onSubmit, quests, allResources, onQuestChange})=>{
    return(
        <form onSubmit={onSubmit} className="quest-form">
            <h2>Add Quest Resource</h2>
            <select name="questId" required onChange={(e)=>onQuestChange(e, 'resource')}>
                <option value="">Select Quest</option>
                {quests.map(quest=>(
                    <option key={`quest-resource-add${quest.quest_id}`} value={quest.quest_id}>{quest.quest_name}</option>
                ))}
            </select>
            <select name="resourceId" required>
                <option value="">Select Resource</option>
                {allResources.map(resource=>(
                    <option key={`resource-add${resource.resource_id}`} value={resource.resource_id}>{resource.resource_name}</option>
                ))}
            </select>
            <button type="submit">Add Resource</button>
        </form>
    )
}

export const DeleteQuestResourceForm = ({onSubmit, quests, questResources, onQuestChange})=>{
    return(
        <form onSubmit={onSubmit} className="quest-form">
            <h2>Delete Quest Resource</h2>
            <select name="questId" required onChange={(e)=>onQuestChange(e, 'resource')}>
                <option value="">Select Quest</option>
                {quests.map(quest=>(
                    <option key={`quest-resource-delete${quest.quest_id}`} value={quest.quest_id}>{quest.quest_name}</option>
                ))}
            </select>
            <select name="resourceId" required>
                <option value="">Select Resource</option>
                {questResources.map(resource=>(
                    <option key={`resource-delete${resource.resource_id}`} value={resource.resource_id}>{resource.resource_name}</option>
                ))}
            </select>
            <button type="submit">Delete Resource</button>
        </form>
    )
}