const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'student', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function updateSkillEXP(studentId, skillId, skillEXP){
    const sql = await loadSqlFile('update_skill_exp.sql')
    await db.query(sql, [studentId, skillId, skillEXP])
}

async function checkInSubmit(studentId, totalEXP, netEXP, stuLvl, completedQuests, numCompleted, mins){
    await db.query(`call checkin_submit($1, $2, $3, $4, string_to_array($5, ','), $6, $7)`,
        [studentId, totalEXP, netEXP, stuLvl, completedQuests, numCompleted, mins])
}

module.exports = {
    updateSkillEXP, checkInSubmit
}