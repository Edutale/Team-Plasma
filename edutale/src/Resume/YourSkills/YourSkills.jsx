export default function YourSkills ({skills}) {
    return skills && (
      <>
        <div>
          <h1 className="header-centered"> <u> Your Skills </u> </h1>
          {skills.map(item => (
            <p key={item.skill_id}> {item.skill_name}: {item.skill_xp} EXP </p>
          ))}
        </div>
      </>
    )
}