import * as USER from "../../USER.json"

export default function Day() {
    return (
      <div className="day">
        <h1><u> Day {dayNum()} </u></h1>
      </div>
    )
  }

const dayNum = function() {
    let now = Date.now()
    let joinDate = Date.parse(USER.joinDate)
    return Math.round((now - joinDate) / 86400000)
}