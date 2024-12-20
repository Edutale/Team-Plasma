const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "student", fileName)
    return fs.readFile(filePath, "utf8")
}

async function updateSkillEXP(studentId, skillId, skillEXP) {
    const sql = await loadSqlFile("update_skill_exp.sql")
    await db.query(sql, [studentId, skillId, skillEXP])
}

async function checkInSubmit(studentId, totalEXP, netEXP, stuLvl, completedQuests, numCompleted, mins, netMoney) {
    await db.query(`call checkin_submit($1, $2, $3, $4, string_to_array($5, ','), $6, $7, $8)`,
        [studentId, totalEXP, netEXP, stuLvl, completedQuests, numCompleted, mins, netMoney])
}

async function buyItem(studentId, itemId, itemPrice, moneyAmt) {
    await db.query(`call buy_item($1, $2, $3, $4)`,
        [studentId, itemId, itemPrice, moneyAmt])
}

async function completeQuest(studentId, questId, totalEXP, netMoney, stuLvl) {
  await db.query(`call complete_quest($1, $2, $3, $4, $5)`,
      [studentId, questId, totalEXP, netMoney, stuLvl])
}

async function quitQuest(studentId, questId) {
  await db.query(`call quit_quest($1, $2)`,
      [studentId, questId])
}

async function acceptQuest(studentId, questId) {
  await db.query(`call accept_quest($1, $2)`,
      [studentId, questId])
}

async function equipItem(studentId, itemId) {
    await db.query(`call equip_item($1, $2)`,
        [studentId, itemId]
    )
}

async function updateFreq(studentId, freq) {
    const sql = await loadSqlFile("update_frequency.sql")
    await db.query(sql, [studentId, freq])
}

module.exports = {
    updateSkillEXP, checkInSubmit, buyItem, completeQuest, quitQuest, acceptQuest, equipItem, updateFreq
}