// Creates a "form" that returns a list of JSON objects
// for each quest progressed.

import { useState } from "react"

import "./CheckInForm.css"

export default function CheckInFormContent({quests}) {
    // used to generate a unique ID on this page for each check in entry. This allows for the
    // deletion of entries to work properly.
    const [idIncrement, setIdIncrement] = useState(0)

    const increment = () => {
        setIdIncrement((idIncrement) => idIncrement + 1)
    }
    
    // the first increment() call will set idIncrement to 0, so start at -1
    const [entries, setEntries] = useState([{id: -1, quest_id: "", hours: "", completed: "false"}])

    // updates entries list to include a new object with empty data
    const addEntry = () => {
        increment()
        setEntries([...entries, {id: idIncrement, quest_id: "", hours: "", completed: "false"}])
    };

    // handles a change in the values within the form, updating the corresponding
    // changed value
    const handleChange = (event, ind) => {
        let { name, value } = event.target
        let onChangeValue = [...entries]
        onChangeValue[ind][name] = value
        setEntries(onChangeValue)
    };

    // updates entries list by deleting the selected entry by its id. Since we increment
    // the id value, we ensure every entry is unique (which allows for the select box to
    // keep its value).
    const deleteEntry = id => () => {
        setEntries(entries => entries.filter((item) => item.id !== id))
    };

    return quests && (
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
                <select className="quest-select" defaultValue="" name="quest_id" onChange={(event) => handleChange(event, ind)}>
                  <option value="" disabled> Choose a Quest </option>
                    {quests.map(item =>
                      <option value={item.quest_id} disabled={entries.some(entry => entry.quest_id == item.quest_id)}>
                        {item.quest_name}
                      </option>
                    )}
                </select>
              </div>
            
              <div className="input-box">
                <label className="input-label" htmlFor="hours"> Hours spent on quest </label>
                <input className="quest-select" placeholder="Number of Hours" name="hours" type="number" min="1" step="1" value={item.hours} onChange={(event) => handleChange(event, ind)}/>
              </div>
            
              {/* there needs to be a way to make "false" default and also style buttons to show clicked status */}
              <div className="input-box">
                <legend className="input-label"> Quest Complete? </legend>
                <form>
                <input className="quest-complete-button yes" type="radio" is="T" name="completed" value={"true"} onClick={(event) => handleChange(event, ind)} /> 
                <label for="T"> True </label>
                <br />
                <input className="quest-complete-button no" type="radio" is="F" name="completed" value={"false"} onClick={(event) => handleChange(event, ind)} />
                <label for="F"> False </label>
                </form>
              </div>
            
                
            
          </div>
        ))}
        <div className="form-footer">
          {entries.length < quests.length && (
              <button className="form-footer-button close" onClick={() => addEntry()}>Add another quest</button>
          )}

          {/* Add submit functionality in the future */}
          <button className="form-footer-button submit"> Submit </button>
        </div>

        {/* Here just to show how the JS works */}
        <div> {JSON.stringify(entries)} </div>
      </div>
    )
}