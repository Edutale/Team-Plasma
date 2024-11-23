// Creates a "form" that returns a list of JSON objects
// for each quest progressed.

import { useState } from "react"

import "./CheckInForm.css"
import SubmitHandler from "./SubmitHandler"

export default function CheckInFormContent({quests, progress}) {
    // used to generate a unique ID on this page for each check in entry. This allows for the
    // deletion of entries to work properly.
    const [idIncrement, setIdIncrement] = useState(0)

    const increment = () => {
        setIdIncrement((idIncrement) => idIncrement + 1)
    }
    
    // the first increment() call will set idIncrement to 0, so start at -1
    const [entries, setEntries] = useState([{id: -1, quest_id_diff: "", mins: "", completed: "false"}])

    // updates entries list to include a new object with empty data
    const addEntry = () => {
        increment()
        setEntries([...entries, {id: idIncrement, quest_id_diff: "", mins: "", completed: "false"}])
    }

    // handles and updates a change in the values within the form
    const handleChange = (event, ind) => {
        let { name, value } = event.target
        let onChangeValue = [...entries]
        onChangeValue[ind][name] = value
        setEntries(onChangeValue)
    }

    // updates entries list by deleting the selected entry by its id. Since we increment
    // the id value, we ensure every entry is unique (which allows for the select box to
    // keep its value).
    const deleteEntry = id => () => {
        setEntries(entries => entries.filter((item) => item.id !== id))
    }

    return quests && progress && (
      <div className="check-in-form">
        {entries.map((item, ind) => (
          <div className="entry" key={item.id}>
            
            {/* Shows the delete button if there is at least one entry */}
            {entries.length > 1 && (
                <button className="delete-button close" onClick={deleteEntry(item.id)}> ⨯ </button>
            )}
            
            {/* Adds space when no delete button is there */}
            {entries.length == 1 && (
                <p></p>
            )}
              
            <div className="input-box">
              <label className="input-label" htmlFor="questName"> Quest Name </label>
              <select className="quest-select" defaultValue="" name="quest_id_diff" onChange={(event) => handleChange(event, ind)}>
                <option value="" disabled> Choose a Quest </option>
                  {quests.map(quest =>
                    <option key={quest.quest_id + item.id} value={quest.quest_id + "," + quest.quest_difficulty}
                            disabled={entries.some(entry => entry.quest_id_diff == quest.quest_id + "," + quest.quest_difficulty)}>
                      {quest.quest_name}
                    </option>
                  )}
              </select>
            </div>
          
            <div className="input-box">
              <label className="input-label" htmlFor="mins"> Minutes spent on quest </label>
              <input className="input-mins" placeholder="Number of minutes" name="mins" type="text"
                     min="1" step="1" value={item.mins} onChange={(event) => handleChange(event, ind)}/>
            </div>
          
            <div className="input-box">
              <legend className="input-label"> Quest Complete? </legend>
              <form>
                <input className="quest-complete-button yes" type="radio" is="T" name="completed"
                        value={"true"} onClick={(event) => handleChange(event, ind)} /> 
                <label htmlFor="T"> Yes </label>
                <br />
                <input className="quest-complete-button no" type="radio" is="F" name="completed" defaultChecked="checked"
                        value={"false"} onClick={(event) => handleChange(event, ind)} />
                <label htmlFor="F"> No </label>
              </form>
            </div>
          </div>
        ))}
        <div className="form-footer">
          {entries.length < quests.length && (
              <button className="form-footer-button close" onClick={() => addEntry()}>Add another quest</button>
          )}

          <button className="form-footer-button submit" onClick={() => SubmitHandler(entries, progress)}> Submit </button>
        </div>
      </div>
    )
}