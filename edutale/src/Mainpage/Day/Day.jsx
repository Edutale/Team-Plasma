import * as USER from "../../USER.json"

export default function Day() {
    return (
      <div className="day">
        <h1><u> Day {dayNum(USER.joinDate)} </u></h1>
      </div>
    )
}

// calculates day number since the join date of the user.
// done by subtracting the number of milliseconds between
// now and the join date, then dividing by the num of ms/day.
function dayNum(joinDate) {
    let now = Date.now()
    let joinDateParsed = Date.parse(joinDate)
    return Math.round((now - joinDateParsed) / 86400000)
}