const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'skills', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function updateSkill(skillId, skillName, skillDescription){
    const sql = await loadSqlFile('update_skill.sql')
    await db.query(sql, [skillId, skillname, skillDescription])
}

module.exports = {
    updateSkill
}