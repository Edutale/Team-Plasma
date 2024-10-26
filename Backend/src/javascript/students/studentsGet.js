const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'student', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function getStudentSkills(studentId){
    const sql = await loadSqlFile('get_student_skills.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentQuests(studentId){
    console.log('getStudentQuests called with studentId:', studentId)
    const sql = await loadSqlFile('get_student_quests.sql')
    console.log('SQL query:', sql)
    try {
        const result = await db.query(sql, [studentId])
        console.log('Query result:', result.rows)
        return result.rows
    } catch (error) {
        console.error('Error executing query:', error)
        throw error
    }
}

async function getStudentJoinDate(studentId){
    const sql = await loadSqlFile('get_student_join_date.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentCareer(studentId){
    const sql = await loadSqlFile('get_student_career.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentCheckedDays(studentId){
    const sql = await loadSqlFile('get_student_checked_days.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentLevelAndEXP(studentId){
    const sql = await loadSqlFile('get_student_lvl_exp.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentInventory(studentId){
    const sql = await loadSqlFile('get_student_inventory.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentMoney(studentId){
    const sql = await loadSqlFile('get_student_money.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentLevelAndEXP(studentId){
    const sql = await loadSqlFile('get_student_lvl_exp.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentInventory(studentId){
    const sql = await loadSqlFile('get_student_inventory.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

async function getStudentMoney(studentId){
    const sql = await loadSqlFile('get_student_money.sql')
    const result = await db.query(sql, [studentId])
    return result.rows
}

module.exports = {
    getStudentSkills, getStudentQuests, getStudentJoinDate, getStudentCareer,
    getStudentCheckedDays, getStudentLevelAndEXP, getStudentInventory, getStudentMoney
}