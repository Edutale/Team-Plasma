import React from 'react'

export const QuestForm = ({ type, onSubmit, quests = [], onQuestChange = ()=>{} })=>{
    const renderFields = ()=>{
        switch(type){
            case 'add':
                return(
                    <>
                        <h2>Add New Quest</h2>
                        <input name="questId" placeholder="Quest ID" required maxLength={15}/>
                        <input name="questName" placeholder="Quest Name" required maxLength={255}/>
                        <textarea name="questDescription" placeholder="Quest Description" required maxLength={1000}/>
                        <button type="submit">Add Quest</button>
                    </>
                )

            case 'delete':
                return(
                    <>
                        <h2>Delete Quest</h2>
                        <select name="questId" required onChange={(e)=>onQuestChange(e, 'both')}>
                            <option value="">Select Quest</option>
                            {quests.map(quest=>(
                                <option key={`quest-delete-${quest.quest_id}`} value={quest.quest_id}>{quest.quest_name}</option>
                            ))}
                        </select>
                        <button type="submit">Delete Quest</button>
                    </>
                )

            case 'update':
                return(
                    <>
                         <h2>Update Quest</h2>
                         <select name="questId" required onChange={(e)=>onQuestChange(e, 'both')}>
                            <option value="">Select Quest</option>
                            {quests.map(quest=>(
                                <option key={`quest-update-${quest.quest_id}`} value={quest.quest_id}>{quest.quest_name}</option>
                            ))}
                        </select>
                        <input name="questName" placeholder="New Quest Name" required maxLength={255}/>
                        <textarea name="questDescription" placeholder="New Quest Description" maxLength={1000}/>
                        <button type="submit">Update Quest</button>
                    </>
                )
            
            default:
                return null
        }
    }

    return(
        <form onSubmit={onSubmit} className="quest-form">
            {renderFields()}
        </form>
    )
}