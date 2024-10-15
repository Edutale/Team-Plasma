import ResTemplates from "./ResTemplates/ResTemplates"
import SkillsProjects from "./SkillsProjects/SkillsProjects"
import "./Resume.css"

export default function Resume() {
    return (
        <div className="pane-container">
        <div className="pane-item">
          <SkillsProjects />
        </div>
        <div className="pane-item">
          <ResTemplates />
        </div>
      </div>
    )
}
