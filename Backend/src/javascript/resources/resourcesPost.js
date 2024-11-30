const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "resources", fileName)
    return fs.readFile(filePath, "utf8")
}

async function generateResourceId() {
    try {
        const sql = await loadSqlFile("grab_resource_id.sql")
        const result = await db.query(sql)
        let nextNum = 1
        if (result.rows.length > 0) {
            const lastId = result.rows[0].resource_id
            const lastNum = parseInt(lastId.substring(3))
            nextNum = lastNum + 1
        }
        const paddedNum = nextNum.toString().padStart(6, "0")
        return `RES${paddedNum}`
    }
    catch(err) {
        console.error("Error generating resource ID: ", err)
    }
}

async function addNewResource(resourceName, resourceLink, resourceDescription, resourceType) {
    const resourceId = await generateResourceId()
    const sql = await loadSqlFile("add_new_resource.sql")
    await db.query(sql, [resourceId, resourceName, resourceLink, resourceDescription, resourceType])
    return resourceId
}

module.exports = {
    addNewResource
}