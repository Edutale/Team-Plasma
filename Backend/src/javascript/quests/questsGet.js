const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "quest", fileName)
    return fs.readFile(filePath, "utf8")
}

async function getQuestResources(questId) {
    const sql = await loadSqlFile("get_quest_resources.sql")
    const result = await db.query(sql, [questId])
    return result.rows
}

async function getAllQuests() {
    const sql = await loadSqlFile("get_all_quests.sql")
    const result = await db.query(sql)
    return result.rows
}

async function getQuestSkills(questId) {
    const sql = await loadSqlFile("get_quest_skill.sql")
    const result = await db.query(sql, [questId])
    return result.rows
}

async function getQuestDetails(questId) {
    const sql = await loadSqlFile("get_quest_details.sql")
    const result = await db.query(sql, [questId])
    return result.rows[0]
}

module.exports = {
    getQuestResources, getAllQuests, getQuestSkills, getQuestDetails
}