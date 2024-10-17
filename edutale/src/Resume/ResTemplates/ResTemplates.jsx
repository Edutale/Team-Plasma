export default function ResTemplates() {
    return (
      <>
        <h1 className="header-centered"> <u> Resume Skills Templates </u> </h1>
        
        <div className="template-1">
          <h2> Technical Skills </h2>
          <p> {tempOneSkills()} </p>

          <h2> Projects </h2>
          <p> {tempOneProjects()} </p>
        </div>

        <div className="template-2">
          <h2> Technical Skills </h2>
          <p> {tempTwoSkills()} </p>

          <h2> Projects </h2>
          <p> {tempTwoProjects()} </p>
        </div>
      </>
    )
}

function tempOneSkills() {
    // this function will pull skills with corresponding
    // beginner/intermediate/expert rankings from the database,
    // and be returned as a comma-separated string to be placed inside
    // of template 1.

    return "tempOneSkills placeholder"
}

function tempOneProjects() {
  // this function will pull JUST project names from the db,
  // and return a comma-separated string to be placed inside of template 1.

  return "tempOneProjects placeholder"
}

function tempTwoSkills() {
    // this function will pull JUST skill names from the db,
    // and return it as a comma-separated string to be placed inside
    // of template 2.

    return "tempTwoSkills placeholder"
}

function tempTwoProjects() {
    // this function will pull project names and short description from the db,
    // and return a comma-separated string to be placed inside of template 2.

    return "tempTwoProjects placeholder"
}