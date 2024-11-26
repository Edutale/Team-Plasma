const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "skills", fileName)
    return fs.readFile(filePath, "utf8")
}

async function getAllSkills() {
    const sql = await loadSqlFile("get_all_skills.sql")
    const result = await db.query(sql)
    return result.rows
}

module.exports = {
    getAllSkills
}