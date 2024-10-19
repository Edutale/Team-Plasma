const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'quest', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function getQuestResources(questId) {
    const sql = await loadSqlFile('get_quest_resources.sql')
    const result = await db.query(sql, [questId])
    return result.rows
}

module.exports = {
    getQuestResources
}