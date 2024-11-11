export default function YourProjects({projects}) {
    return projects && (
      <>
        <div className="res-know-container">
          <h2 className="header-centered"> <u> Your Projects </u> </h2>
          <div className="know-item-container">
            {projects.map(item => item.is_project && (
              <div className="res-know-item">
                <li key={item.quest_id}> {item.quest_name}: {item.quest_description} </li>
              </div>
            ))}
          </div>
        </div>
      </>
    )
}