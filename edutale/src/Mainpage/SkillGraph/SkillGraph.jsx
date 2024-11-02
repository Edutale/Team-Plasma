/*--- SkillGraph.jsx ---*/ 

import { useState, useEffect } from "react"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler} from "chart.js"
import { Radar } from "react-chartjs-2"
import Axios from "axios"

import "./SkillGraph.css"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

// for reference, do not use directly
let radarData_1 = {
  labels: ["Front End", "Back End", "CSS", "JavaScript", "Algorithms"],
  datasets: [
      {
          label: "All-Time",
          data: [200, 300, 100, 150, 175],
          fill: true,
          backgroundColor: "rgba(186, 186, 186, 0.8)",
          borderColor: "rgb(150, 150, 150)",
          pointBorderColor: "rgb(210, 210, 210)",
          pointBackgroundColor: "rgb(150, 150, 150)",
      },
      {
          label: "Today",
          data: [250, 300, 125, 150, 175],
          fill: true,
          backgroundColor: "rgba(111, 106, 252, 0.5)",
          borderColor: "rgb(173, 130, 255)",
          pointBorderColor: "rgb(210, 210, 210)",
          pointBackgroundColor: "rgb(173, 130, 255)",
      },
  ],
};

const OPTIONS = {
  responsive: true,
  scales: {
    r: {
      grid: {
        lineWidth: 2,
        color: "rgb(160, 160, 160)"
      },
      ticks: {display: false},
      pointLabels: {font: {size:14}}
    }
  }
}

export default function SkillGraph() {
    // [var, setter]
    // setter is a function that is used to update the value of var
    const [skills, setSkills] = useState()
    const [skillXP, setXP] = useState()

    // useState() and useEffect() allows for React to use await calls
    // (which is fetchStudentSkills) inside of a component
    useEffect(() => {
        fetchStudentSkills()
    }, [])

    // the actual call that pulls the student's data from the backend
    async function fetchStudentSkills() {
        try {
            await Axios.get(`http://localhost:3000/api/students/${studentId}/skills`)
                .then((response) => {
                    // this anon function tells js what it should do with the response
                    let skillNames = []
                    let skillXP = []

                    for (const {skill_name, skill_exp} of response.data) {
                        skillNames.push(skill_name)
                        skillXP.push(skill_exp)
                    }

                    // use the setters to update the values of skills and profs
                    setSkills(skillNames)
                    setXP(skillXP)
                })
        }
        catch(err) {
            console.error("Error fetching skills: ", err)
        }
    }
    
    let radarData = {
      labels: skills,
      datasets: [
          {
              label: "All-Time",
              data: skillXP,
              fill: true,
              backgroundColor: "rgba(111, 106, 252, 0.5)",
              borderColor: "rgb(173, 130, 255)",
              pointBorderColor: "rgb(210, 210, 210)",
              pointBackgroundColor: "rgb(173, 130, 255)",
          },
      ],
    };

    return (
      <div className="chartContainer">
        <Radar className="radar" data={radarData} options={OPTIONS}/>
      </div>
    )
}

const studentId = "TESTSTU01"
