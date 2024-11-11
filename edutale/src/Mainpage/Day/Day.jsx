/*--- Day.jsx ---*/ 

import "./Day.css"

const studentId = "TESTSTU01"

export default function Day({joinDate}) {
    function dayNum(jd) {
        let now = Date.now()
        let joinDateParsed = Date.parse(jd)
        return Math.round((now - joinDateParsed) / 86400000)
    }

    return (
      <div className="pane-header">
        <h1><u> Day {dayNum(joinDate)} </u></h1>
      </div>
    )
}