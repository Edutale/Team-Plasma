import * as SKILLS from "../../SKILLS.json"
import Axios from "axios"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement } from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(RadialLinearScale, PointElement, LineElement)

export default function SkillGraph() {
    console.log(fetchStudentSkills())
    return (
      <Radar data={SKILLS} />
    )
}
const studentId = '111111111';

async function fetchStudentSkills(){
  try{
    const response = await Axios.get(`http://localhost:3000/api/students/${studentId}/skills`);
    const skills = response.data;
    return skills;
  } catch(err){
    console.error('Error fetching skills: ', err);
  }
}