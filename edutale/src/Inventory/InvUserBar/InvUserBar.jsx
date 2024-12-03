/*--- InvUserBar.jsx ---*/ 
import "./InvUserBar.css"

export default function InvUserBar({invProgress}) {
    return invProgress && (
        <div className="inv-user-bar">
          <h2> 
            {invProgress.name} <progress className="inv-progress" value={topVal(invProgress.exp, workVal(invProgress.lvl)) / botVal(invProgress.lvl)} />
          </h2>
          <p className="inv-bar-text">
            Level {invProgress.lvl} - {topVal(invProgress.exp, workVal(invProgress.lvl))} / {botVal(invProgress.lvl)}
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