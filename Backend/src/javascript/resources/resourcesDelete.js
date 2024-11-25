const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "resources", fileName)
    return fs.readFile(filePath, "utf8")
}

async function deleteResource(resourceId){
    const sql = await loadSqlFile("delete_resource.sql")
    await db.query(sql, [resourceId])
}

module.exports = {
    deleteResource
}