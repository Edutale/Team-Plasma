/*--- UserBar.jsx ---*/ 
import "./UserBar.css"

export default function UserBar({progress}) {
    return progress && (
        <div className="user-bar">
          <h2> 
            {progress.name} <progress value={topVal(progress.exp, workVal(progress.lvl)) / botVal(progress.lvl)} />
          </h2>
          <p className="bar-text">
            Level {progress.lvl} - {topVal(progress.exp, workVal(progress.lvl))} / {botVal(progress.lvl)}
          </p>
        </div>
    )
}

// calculates work
function workVal(currLvl) {
    let calculatedWork = 0

    if (currLvl <= 1) {
        return calculatedWork
    }
    else {
        for (let i=2; i<=(currLvl); i++) {
            calculatedWork += 100 + (10 * (i-2))
        }
        return calculatedWork
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