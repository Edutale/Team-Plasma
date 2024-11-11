export default function YourSkills ({skills}) {
    return skills && (
      <>
        <div className="res-know-container">
          <h2 className="header-centered"> <u> Your Skills </u> </h2>
          <div className="know-item-container">
            {skills.map(item => (
              <div className="res-know-item">
                <li key={item.skill_id}> {item.skill_name}: {item.skill_exp} EXP </li>
              </div>
            ))}
          </div>
        </div>
      </>
    )
}