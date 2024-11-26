const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "quest", fileName)
    return fs.readFile(filePath, "utf8")
}

async function updateQuest(questId, questName, questDescription) {
    const sql = await loadSqlFile("update_quest.sql")
    await db.query(sql, [questName, questDescription, questId])
}

module.exports = {
    updateQuest
}