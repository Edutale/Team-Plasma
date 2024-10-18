const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'student', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function updateSkillProficiency(studentId, skillId, proficiency){
    const sql = await loadSqlFile('update_skill_proficiency.sql')
    await db.query(sql, [studentId, skillId, proficiency])
}

module.exports = {
    updateSkillProficiency,
}