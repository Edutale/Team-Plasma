const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")
const { get } = require("http")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "inventory", fileName)
    return fs.readFile(filePath, "utf8")
}

async function getInventory() {
    const sql = await loadSqlFile("get_inventory.sql")
    const result = await db.query(sql)
    return result.rows
}

async function getItemDetails(itemId){
    const sql = await loadSqlFile("get_item_details.sql")
    const result = await db.query(sql, [itemId])
    return result.rows[0]
}

module.exports = {
    getInventory, getItemDetails
}