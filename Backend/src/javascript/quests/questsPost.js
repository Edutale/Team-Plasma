const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "quest", fileName)
    return fs.readFile(filePath, "utf8")
}

// Generate unique quest ID in format "Q" + 8 digits
// eg: Q00000001, Q00000002, etc
async function generateQuestId(){
    try{
        const sql = await loadSqlFile("grab_questId.sql")
        const result = await db.query(sql)
        let nextNum = 1
        if(result.rows.length > 0){
            const lastId = result.rows[0].quest_id
            const lastNum = parseInt(lastId.substring(1))
            nextNum = lastNum + 1
        }
        const paddedNum = nextNum.toString().padStart(8, "0")
        return `Q${paddedNum}`
    } catch(err){
        console.error("Error generating quest ID: ", err)
    }
}

async function addNewQuest(questName, questDescription, isProject, questDifficulty){
    const questId = await generateQuestId()
    const sql = await loadSqlFile("add_new_quest.sql")
    await db.query(sql, [questId, questName, questDescription, isProject, questDifficulty])
    return questId
}

async function addQuestResource(questId, resourceId){
    const sql = await loadSqlFile("add_quest_resource.sql")
    await db.query(sql, [questId, resourceId])
}

async function addQuestSkill(questId, skillId){
    const sql = await loadSqlFile("add_quest_skill.sql")
    await db.query(sql, [questId, skillId])
}

module.exports = {
    addNewQuest, addQuestResource, addQuestSkill
}