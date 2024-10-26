export default function YourSkills ({skills}) {
    function sortSkills(skills) {
        return (
            skills.sort(function(a,b) {
                return a.skill_xp - b.skill_xp
            }).reverse()
        )
    }

    return skills && (
      <>
        <div>
          <h1 className="header-centered"> <u> Your Skills </u> </h1>
          {sortSkills(skills).map(item => (
            <p key={item.skill_id}> {item.skill_name}: {item.skill_xp} EXP </p>
          ))}
        </div>
      </>
    )
}