/*--- SkillGraph.jsx ---*/ 

import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler} from "chart.js"
import { Radar } from "react-chartjs-2"
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
          backgroundColor: "rgba(131, 128, 255, 0.8)",
          borderColor: "rgb(95, 92, 255)",
          pointBorderColor: "rgb(210, 210, 210)",
          pointBackgroundColor: "rgb(95, 92, 255)",
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
  },
  font: {
    family: "'Faculty Glyphic', serif"
  },
  plugins: {
    tooltip: {
      titleFont: {
        size: 16,
        family: "'Faculty Glyphic', serif"
      },
      bodyFont: {
        size: 12,
        family: "'Faculty Glyphic', serif"
      }
    }
  }
}

export default function SkillGraph({skills, skillEXP}) {    
    return skills && skillEXP && (
      <div className="chartContainer">
        <Radar className="radar" data={createRadarData(skills, skillEXP)} options={OPTIONS}/>
      </div>
    )
}

function createRadarData(skills, skillEXP) {
    return {
      labels: skills,
      datasets: [
          {
              label: "All-Time",
              data: skillEXP,
              fill: true,
              backgroundColor: "rgba(131, 128, 255, 0.8)",
              borderColor: "rgb(95, 92, 255)",
              pointBorderColor: "rgb(210, 210, 210)",
              pointBackgroundColor: "rgb(95, 92, 255)",
          },
      ],
    }
}