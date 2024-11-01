export default function YourProjects({projects}) {
    return projects && (
      <>
        <div>
          <h1 className="header-centered"> <u> Your Projects </u> </h1>
          {projects.map(item => item.is_project && (
            <p key={item.quest_id}> {item.quest_name}: {item.quest_description} </p>
          ))}
        </div>
      </>
    )
}