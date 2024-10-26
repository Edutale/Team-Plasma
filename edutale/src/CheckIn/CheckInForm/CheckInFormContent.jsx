// Creates a "form" that returns a list of JSON objects
// for each quest progressed.

import { useState } from "react"

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
            <fieldset>
              
              <fieldset>
                <label htmlFor="questName"> Select a quest: </label>
                <select defaultValue="" name="quest_id" onChange={(event) => handleChange(event, ind)}>
                  <option value="" disabled> Choose a Quest </option>
                    {quests.map(item =>
                      <option value={item.quest_id} disabled={entries.some(entry => entry.quest_id == item.quest_id)}>
                        {item.quest_name}
                      </option>
                    )}
                </select>
              </fieldset>
            
              <fieldset>
                <label htmlFor="hours"> Hours spent on this quest: </label>
                <input name="hours" type="number" min="1" step="1" value={item.hours} onChange={(event) => handleChange(event, ind)}/>
              </fieldset>
            
              {/* there needs to be a way to make "false" default and also style buttons to show clicked status */}
              <fieldset>
                <legend> Quest Complete? </legend>
                <button name="completed" value={"true"} onClick={(event) => handleChange(event, ind)}> Yes </button>
                <button name="completed" value={"false"} onClick={(event) => handleChange(event, ind)}> No </button>
              </fieldset>
            
                {/* Shows the delete button if there is at least one entry */}
                {entries.length > 1 && (
                  <button onClick={deleteEntry(item.id)}>Delete</button>
                )}
            </fieldset>
          </div>
        ))}

        {entries.length < quests.length && (
            <button onClick={() => addEntry()}>Add another quest</button>
        )}

        {/* Add submit functionality in the future */}
        <button> Submit </button>

        {/* Here just to show how the JS works */}
        <div> {JSON.stringify(entries)} </div>
      </div>
    )
}