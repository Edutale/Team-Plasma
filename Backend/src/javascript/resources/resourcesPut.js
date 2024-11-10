const fs = require('fs').promises
const path = require('path')
const db = require('../../config/db')

async function loadSqlFile(fileName) {
    const filePath = path.join(__dirname, '..', '..', 'config', 'scripts', 'resources', fileName)
    return fs.readFile(filePath, 'utf8')
}

async function updateResource(resourceId, resourceName, resourceLink, resourceDescription, resourceType){
    const sql = await loadSqlFile('update_resource.sql')
    await db.query(sql, [resourceId, resourceName, resourceLink, resourceDescription, resourceType])
}

module.exports = {
    updateResource
}