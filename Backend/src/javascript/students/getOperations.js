const fs = require('fs').promises;
const path = require('path');
const db = require('../../config/db');

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'student', fileName);
    return fs.readFile(filePath, 'utf8');
};

async function getStudentSkills(studentId){
    const sql = await loadSqlFile('get_student_skills.sql');
    const result = await db.query(sql, [studentId]);
    return result.rows;
};

async function getStudentQuests(studentId){
    const sql = await loadSqlFile('get_student_quests.sql');
    const result = await db.query(sql, [studentId]);
    return result.rows;
};

async function getStudentJoinDate(studentId){
    const sql = await loadSqlFile('get_student_join_date.sql');
    const result = await db.query(sql, [studentId]);
    return result.rows;
};

module.exports = {
    getStudentSkills, getStudentQuests, getStudentJoinDate
};