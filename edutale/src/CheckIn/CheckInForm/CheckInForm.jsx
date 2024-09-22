// Creates a "form" that returns a list of JSON objects
// for each quest progressed.

import { useState } from "react"

export default function CheckInForm() {
  const [entries, setEntries] = useState([{questName: "", hours: "", completed: ""}])

  // updates entries list to include a new object with empty data
  const addEntry = () => {
    setEntries([...entries, { questName: "", hours: "", completed: "" }])
  };

  // handles a change in the values within the form, updating the corresponding
  // changed value
  const handleChange = (event, ind) => {
    let { name, value } = event.target
    let onChangeValue = [...entries]
    onChangeValue[ind][name] = value
    setEntries(onChangeValue)
  };

  // updates entries list by deleting the selected entry by index
  const deleteEntry = (ind) => {
    const newArray = [...entries]
    newArray.splice(ind, 1)
    setEntries(newArray)
  };

  return (
    <div className="check-in-form">
      {entries.map((item, ind) => (
        <div className="entry" key={ind}>

          {/* questName will be a dropdown at some point */}
          <fieldset>
            <fieldset>
              <label htmlFor="questName"> Select a quest: </label>
              <input name="questName" type="text" value={item.questName} onChange={(event) => handleChange(event, ind)}/>
            </fieldset>
            
            <fieldset>
              <label htmlFor="hours"> Hours spent on this quest: </label>
              <input name="hours" type="number" min="1" step="1" value={item.hours} onChange={(event) => handleChange(event, ind)}/>
            </fieldset>
            
            <fieldset>
              <legend> Quest Complete? </legend>
              <button name="completed" value={"true"} onClick={(event) => handleChange(event, ind)}> Yes </button>
              <button name="completed" value={"false"} onClick={(event) => handleChange(event, ind)}> No </button>
            </fieldset>
          
          {/* Shows the delete button if there is at least one entry */}
          {entries.length > 1 && (
            <button onClick={() => deleteEntry(ind)}>Delete</button>
          )}
          </fieldset>
        </div>
      ))}

      <button onClick={() => addEntry()}>Add another quest</button>

      {/* Here just to show how the JS works */}
      <div> {JSON.stringify(entries)} </div>

      {/* Add submit functionality in the future */}
      <button> Submit </button>
    </div>
  )
}