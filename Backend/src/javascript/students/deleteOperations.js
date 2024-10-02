const fs = require('fs').promises;
const path = require('path');
const db = require('../../config/db');

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'student', fileName);
    return fs.readFile(filePath, 'utf8');
};

async function deleteStudentQuest(studentId, questId){
    const sql = await loadSqlFile('delete_student_quest.sql');
    await db.query(sql, [studentId, questId]);
};

module.exports = {
    deleteStudentQuest,
};