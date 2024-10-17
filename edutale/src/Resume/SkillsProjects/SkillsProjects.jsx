export default function SkillsProjects () {
    return (
      <>
        <div>
          <h1 className="header-centered"> <u> Your Skills </u> </h1>
          {listSkills()}

        </div>

        <div>
          <h1 className="header-centered"> <u> Your Projects </u> </h1>
          {listProjects()}

        </div>
      </>
    )
}

function listSkills() {
    // pulls skills and corresponding XP from the db,
    // then lists them out one-by-one. List may be an HTML
    // list or a sequence of p elements.

    return "listSkills placeholder"
}

function listProjects() {
    // same as listSkills, but with projects. Should have the
    // project name be a header or p, then use ul elements to
    // list out every related skill for that project.

    return "listProjects placeholder"
}