import { useState, useEffect } from "react"
import Axios from "axios"
import "./Day.css"

const studentId = "111111111"

export default function Day() {
    const [joinDate, setJoinDate] = useState()

    useEffect(() => {
        fetchStudentJoinDate()
    }, [])

    function dayNum(jd) {
        let now = Date.now()
        let joinDateParsed = Date.parse(jd)
        return Math.round((now - joinDateParsed) / 86400000)
    }

    async function fetchStudentJoinDate() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}`)
                .then((response) => {
                    setJoinDate(dayNum(response.data[0].student_join_date))
                })
      }
        catch(err) {
            console.error('Error fetching skills: ', err);
        }
    }

    return (
      <div className="day">
        <h1><u> Day {joinDate} </u></h1>
      </div>
    )
}