const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'career', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function getCareerQuestList(careerId) {
    const sql = await loadSqlFile('get_career_quest_list.sql')
    const result = await db.query(sql, [careerId])
    return result.rows
}

module.exports = {
    getCareerQuestList
}