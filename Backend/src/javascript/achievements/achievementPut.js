const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName){
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'achievement', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function updateStudentAchievementProgress(studentId, achievementId, progressCount){
    const sql = await loadSqlFile('update_student_achievement_progress.sql')
    await db.query(sql, [studentId, achievementId, progressCount])
}

module.exports = {
    updateStudentAchievementProgress
}