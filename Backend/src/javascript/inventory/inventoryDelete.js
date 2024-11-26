const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "inventory", fileName)
    return fs.readFile(filePath, "utf8")
}

async function deleteItem(itemId) {
    const sql = await loadSqlFile("delete_item.sql")
    await db.query(sql, [itemId])
}

module.exports = {
    deleteItem
}