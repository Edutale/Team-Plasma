const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName){
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'achievement', fileName)
    return fs.readFile(filePath, 'utf8')
}

// Get all achievements in the database atm
async function getAllAchievements(){
    const sql = await loadSqlFile('get_all_achievements.sql')
    const result = await db.query(sql)
    return result.rows
}

// get all the achievements that the student has obtained
async function getStudentAchievements(studentId){
    const sql = await loadSqlFile('get_student_achievements.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

// get all the achievements with the progress of the student towards obtaining
async function getStudentAchievementProgress(studentId){
    const sql = await loadSqlFile('get_student_achievement_progress.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

// get all the achievements with the progress of the student towards obtaining but with a type filtering
async function getStudentAchievementTypeProgress(studentId, achievementType){
    const sql = await loadSqlFile('get_student_achievement_type_progress.sql')
    const result = await db.query(sql, [studentId, achievementType])
    return result.rows
}

// checks if there is any achievements that should be rewarded to the student
async function checkNewAchievement(studentId, achievementType, count){
    const sql = await loadSqlFile('check_new_achievement.sql')
    const result = await db.query(sql, [studentId, achievementType, count])
    return result.rows
}

module.exports = {
    getAllAchievements,
    getStudentAchievements,
    getStudentAchievementProgress,
    getStudentAchievementTypeProgress,
    checkNewAchievement
}