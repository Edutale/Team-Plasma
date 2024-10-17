import * as USER from "../../USER.json"

export default function UserBar() {
    return (
      <div className="userBar">
        <h2> {USER.name} <progress className="lBar" value={barVal(USER.exp)} /> </h2>
        <p> Level {USER.level} - {USER.exp} / {lvlCap(USER.level)} </p>
      </div>
    )
}

// this formula can change later on
function lvlCap(currLvl) {
    return (1000 + 10*currLvl)
}

// calculates the percentage the user is towards leveling up
function barVal(currExp) {
    return (currExp / lvlCap(USER.level))
}

/* NOTE: When we implement the leveling system, there needs to
   be a function that modulos the user's exp whenever they
   reach the amount of exp to level up (and then level them
   up, duh). This isn't implemented here yet, but the displays
   for exp and levels is. */