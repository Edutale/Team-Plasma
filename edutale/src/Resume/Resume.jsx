import ResTemplates from "./ResTemplates/ResTemplates"
import YourSkills from "./YourSkills/YourSkills"
import YourProjects from "./YourProjects/YourProjects"
import "./Resume.css"

export default function Resume() {
    return (
        <div className="pane-container">
        <div className="pane-item">
          <YourSkills />
          <YourProjects />
        </div>
        <div className="pane-item">
          <ResTemplates />
        </div>
      </div>
    )
}
