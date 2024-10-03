import * as SKILLS from "../../SKILLS.json"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement } from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(RadialLinearScale, PointElement, LineElement)

export default function SkillGraph() {
    return (
      <Radar data={SKILLS} />
    )
}