const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "skills", fileName)
    return fs.readFile(filePath, "utf8")
}

async function generateSkillId() {
    try {
        const sql = await loadSqlFile("grab_skillId.sql")
        const result = await db.query(sql)
        let nextNum = 1
        if (result.rows.length > 0) {
            const lastId = result.rows[0].skill_id
            const lastNum = parseInt(lastId.substring(1))
            nextNum = lastNum + 1
        }
        const paddedNum = nextNum.toString().padStart(8, "0")
        return `Q${paddedNum}`
    }
    catch(err) {
        console.error("Error generating skill ID: ", err)
    }
}

async function addNewSkill(skillName, skillDescription) {
    const skillId = await generateSkillId()
    const sql = await loadSqlFile("add_new_skill.sql")
    await db.query(sql, [skillId, skillName, skillDescription])
    return skillId
}

module.exports = {
    addNewSkill
}