const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "student", fileName)
    return fs.readFile(filePath, "utf8")
}

async function addNewStudent(studentId, studentName, studentEmail) {
    const sql = await loadSqlFile("add_new_student.sql")
    await db.query(sql, [studentId, studentName, studentEmail])
}

async function addStudentQuest(studentId, questId, currStatus) {
    const sql = await loadSqlFile("add_student_quest.sql")
    await db.query(sql, [studentId, questId, currStatus])
}

async function addNewStudentSkill(studentId, skillId, skillXP = null) {
    const sql = await loadSqlFile("add_new_student_skill.sql")
    await db.query(sql, [studentId, skillId, skillXP])
}

module.exports = {
    addNewStudent, addStudentQuest, addNewStudentSkill
}