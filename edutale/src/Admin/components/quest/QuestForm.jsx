// Forms for quest operations, we create all our forms for quests here to be used in the main Admin.jsx
import React from "react"

export const QuestForm = ({ type, onSubmit, quests = [], onQuestChange = ()=>{} }) => {
    const renderFields = () => {
        switch (type) {
            case "add":
                return (
                    <>
                      <div className="form-group">
                        <label htmlFor="questName"> Quest Name: </label>
                        <input id="questName" name="questName" placeholder="Quest Name" required maxLength={255}/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="questDescription"> Description: </label>
                        <textarea id="questDescription" name="questDescription" placeholder="Quest Description" required/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="questDifficulty"> Difficulty Level: </label>
                        <select id="questDifficulty" name="questDifficulty" required>
                            <option value=""> Select Difficulty </option>
                            <option value="1"> Easy (1) </option>
                            <option value="2"> Medium (2) </option>
                            <option value="3"> Hard (3) </option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="isProject"> Project Quest? </label>
                        <select id="isProject" name="isProject" required>
                            <option value=""> Select Type </option>
                            <option value="true"> Yes </option>
                            <option value="false"> No </option>
                        </select>
                      </div>

                      <button type="submit"> Add Quest </button>
                    </>
                )

            case "delete":
                return (
                    <>
                      <h2> Delete Quest </h2>
                      <select name="questId" required onChange={(e) => onQuestChange(e, "both")}>
                        <option value=""> Select Quest </option>
                        {quests.map(quest => (
                            <option key={`quest-delete-${quest.quest_id}`} value={quest.quest_id}> {quest.quest_name} </option>
                        ))}
                      </select>
                      <button type="submit"> Delete Quest </button>
                    </>
                )

            case "update":
                return (
                    <>
                      <h2> Update Quest </h2>
                      <select name="questId" required onChange={(e) => onQuestChange(e, "both")}>
                        <option value=""> Select Quest </option>
                        {quests.map(quest => (
                            <option key={`quest-update-${quest.quest_id}`} value={quest.quest_id}> {quest.quest_name} </option>
                        ))}
                      </select>
                      <input name="questName" placeholder="New Quest Name" required maxLength={255}/>
                      <textarea name="questDescription" placeholder="New Quest Description" maxLength={1000}/>
                      <button type="submit"> Update Quest </button>
                    </>
                )
            
            default:
                return null
        }
    }

    return (
        <form onSubmit={onSubmit} className="quest-form">
          {renderFields()}
        </form>
    )
}

// I'll add css one day ong frfr