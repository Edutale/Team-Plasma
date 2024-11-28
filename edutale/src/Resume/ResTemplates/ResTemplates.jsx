export default function ResTemplates({stuSkills, projects}) {
    return stuSkills && projects && (
      <>
        <h1 className="center-header"> <u> Resume Skills Templates </u> </h1>
        <div className="res-templates">
          <div className="template-1">
            <h2 className="template-heading"> Technical Skills </h2>
            <p> {tempOneSkills(stuSkills)} </p>

            <h2> Projects </h2>
            <p> {tempOneProjects(projects)} </p>
          </div>

          <div className="template-2">
            <h2 className="template-heading"> Technical Skills </h2>
            <p> {tempTwoSkills(stuSkills)} </p>

            <h2> Projects </h2>
            <div> {tempTwoProjects(projects)} </div>
          </div>
        </div>
      </>
    )
}

// generates the text for the skills section in the
// first resume template.
function tempOneSkills(stuSkills) {
    let retStr = ""

    // since skills are ordered from highest to lowest EXP,
    // iterating through array keeps ordering.
    for (let i=0; i < stuSkills.length; i++) {
        // arbitrary values for the cut-offs of beginner, intermediate, and expert. They're low numbers in
        // order for easier testing. Deployment should make sure these numbers are larger (multiply by 100?)

        if (stuSkills[i].skill_exp >= 5000) {
            retStr += (retStr ? ", " + stuSkills[i].skill_name + " (Expert)" : stuSkills[i].skill_name + " (Expert)")
        }
        else if (stuSkills[i].skill_exp >= 2500) {
            retStr += (retStr ? ", " + stuSkills[i].skill_name + " (Intermediate)" : stuSkills[i].skill_name + " (Intermediate)")
        }
        else if (stuSkills[i].skill_exp > 0) {
            retStr += (retStr ? ", " + stuSkills[i].skill_name + " (Beginner)" : stuSkills[i].skill_name + " (Beginner)")
        }
        // else, don't add the skill at all
    }

    return retStr ? retStr : "Come back later after finishing some quests!"
}

function tempOneProjects(projects) {
    let retStr = ""

    for (let i=0; i < projects.length; i++) {
        retStr += (retStr ? ", " + projects[i].quest_name : projects[i].quest_name)
    }

    return retStr ? retStr : "Come back later after finishing some quests!"
}

function tempTwoSkills(stuSkills) {
    let retStr = ""

    for (let i=0; i < stuSkills.length; i++) {
        // ensure cutoff values here are identical to values for tempOneSkills()

        if (stuSkills[i].skill_exp >= 400) {
            retStr += (retStr ? ", " + stuSkills[i].skill_name : stuSkills[i].skill_name)
        }
        else if (stuSkills[i].skill_exp >= 200) {
            retStr += (retStr ? ", " + stuSkills[i].skill_name : stuSkills[i].skill_name)
        }
        else if (stuSkills[i].skill_exp > 0) {
            retStr += (retStr ? ", " + stuSkills[i].skill_name : stuSkills[i].skill_name)
        }
        // else, don't add the skill at all
    }

    return retStr ? retStr : "Come back later after finishing some quests!"
}

function tempTwoProjects(projects) {
    let retArr = []

    for (let i=0; i < projects.length; i++) {
        retArr.push(projects[i].quest_name + ": " + projects[i].quest_description)
    }

    return retArr ? retArr.map(item => <p> {item} </p>) : <p> "Come back later after finishing some quests!" </p>
}