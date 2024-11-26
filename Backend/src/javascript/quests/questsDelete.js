const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "quest", fileName)
    return fs.readFile(filePath, "utf8")
}

async function deleteQuest(questId) {
    const sql = await loadSqlFile("delete_quest.sql")
    await db.query(sql, [questId])
}

async function deleteQuestSkill(questId, skillId) {
    const sql = await loadSqlFile("delete_quest_skill.sql")
    await db.query(sql, [questId, skillId])
}

async function deleteQuestResource(questId, resourceId) {
    const sql = await loadSqlFile("delete_quest_resource.sql")
    await db.query(sql, [questId, resourceId])
}
module.exports = {
    deleteQuest, deleteQuestSkill, deleteQuestResource
}