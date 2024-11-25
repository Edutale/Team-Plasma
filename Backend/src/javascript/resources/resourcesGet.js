const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "resources", fileName)
    return fs.readFile(filePath, "utf8")
}

async function getAllResources(){
    const sql = await loadSqlFile("get_all_resources.sql")
    const result = await db.query(sql)
    return result.rows
}

async function getResourceDetails(resourceId){
    const sql = await loadSqlFile("get_resource_details.sql")
    const result = await db.query(sql, [resourceId])
    return result.rows[0]
}

module.exports = {
    getAllResources, getResourceDetails
}