import * as USER from "../../USER.json"
import "./UserBar.css"

export default function UserBar() {
    const userWork = workVal(USER.level)
    const userTop = topVal(USER.exp, userWork)
    const userBot = botVal(USER.level)
    const barProg = userTop / userBot

    return (
      <div className="userBar">
        <h2> {USER.name} <progress className="lBar" value={barProg} /> </h2>
        <p className="bar-text"> Level {USER.level} - {userTop} / {userBot}</p>
      </div>
    )
}

// calculates work
function workVal(currLvl) {
  if (currLvl <= 1) {
    return 0
  }
  else {
    return (10 * (currLvl - 2)) + 100 + workVal(currLvl - 1)
  }
}

// calculates top
function topVal(tot, work) {
  return tot - work
}

// this formula can change later on
function botVal(currLvl) {
  return (10 * (currLvl - 1) + 100)
}