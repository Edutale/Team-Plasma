// Forms for resource related operations, we create all our forms for resources here to be used in the main Admin.jsx
//      I had originally intended for all these form files to be switch cases but then realized its probably more scalable
//      and more modular to just make it all separate functions like I had been doing but I will probably still do switch cases for the simple add delete update stuff
import React from "react"

export const AddQuestResourceForm = ({onSubmit, quests, allResources, onQuestChange}) => {
    return (
        <form onSubmit={onSubmit} className="quest-form">
          <select name="questId" required onChange={(e) => onQuestChange(e, "resource")}>
            <option value=""> Select Quest </option>
            {quests.map(quest => (
                <option key={`quest-resource-add${quest.quest_id}`} value={quest.quest_id}> {quest.quest_name} </option>
            ))}
          </select>
          <select name="resourceId" required>
            <option value=""> Select Resource </option>
            {allResources.map(resource => (
                <option key={`resource-add${resource.resource_id}`} value={resource.resource_id}> {resource.resource_name} </option>
            ))}
          </select>
          <button type="submit"> Add Resource </button>
        </form>
    )
}

export const DeleteQuestResourceForm = ({onSubmit, quests, questResources, onQuestChange}) => {
    return (
        <form onSubmit={onSubmit} className="quest-form">
          <select name="questId" required onChange={(e) => onQuestChange(e, "resource")}>
            <option value=""> Select Quest </option>
            {quests.map(quest => (
                <option key={`quest-resource-delete${quest.quest_id}`} value={quest.quest_id}> {quest.quest_name} </option>
            ))}
          </select>
          <select name="resourceId" required>
            <option value=""> Select Resource </option>
            {questResources.map(resource => (
                <option key={`resource-delete${resource.resource_id}`} value={resource.resource_id}> {resource.resource_name} </option>
            ))}
          </select>
          <button type="submit"> Delete Resource </button>
        </form>
    )
}