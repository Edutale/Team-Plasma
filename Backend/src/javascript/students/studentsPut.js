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

async function updateGlobalEXP(studentId, totalEXP, stuLvl, completedQuests){
    await db.query(`call checkin_submit($1, $2, $3, string_to_array($4, ','))`,
        [studentId, totalEXP, stuLvl, completedQuests])
}

module.exports = {
    updateSkillXP, updateGlobalEXP
}