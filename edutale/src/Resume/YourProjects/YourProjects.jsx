export default function YourProjects({projects}) {
    function sortProjects(projects) {
        return (
            projects.sort(function(a,b) {
                return a.quest_difficulty - b.quest_difficulty
            }).reverse()
        )
    }

    return projects && (
      <>
        <div>
          <h1 className="header-centered"> <u> Your Projects </u> </h1>
          {sortProjects(projects).map(item => item.is_project && (
            <p key={item.quest_id}> {item.quest_name}: {item.quest_description} </p>
          ))}
        </div>
      </>
    )
}