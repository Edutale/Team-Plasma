const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'quest', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function addNewQuest(questId, questName, questDescription){
    const sql = await loadSqlFile('add_new_quest.sql')
    await db.query(sql, [questId, questName, questDescription])
}

async function addQuestResource(questId, resourceId){
    const sql = await loadSqlFile('add_quest_resource.sql')
    await db.query(sql, [questId, resourceId])
}

async function addQuestSkill(questId, skillId){
    const sql = await loadSqlFile('add_quest_skill.sql')
    await db.query(sql, [questId, skillId])
}

module.exports = {
    addNewQuest, addQuestResource, addQuestSkill
}