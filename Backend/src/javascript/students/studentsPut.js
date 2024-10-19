const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'student', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function updateSkillXP(studentId, skillId, skillXP){
    const sql = await loadSqlFile('update_skill_xp.sql')
    await db.query(sql, [studentId, skillId, skillXP])
}

module.exports = {
    updateSkillXP,
}