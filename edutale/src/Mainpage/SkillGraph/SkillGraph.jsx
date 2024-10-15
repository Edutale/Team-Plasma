import * as SKILLS from "../../SKILLS.json"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler} from "chart.js"
import { Bubble, Chart, Radar } from "react-chartjs-2"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend, Filler)

const radarData = {
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
    return (
      <div className="chartContainer">
        <Radar className="radar" data={radarData} options={OPTIONS}/>
      </div>
    )
}