const fs = require("fs").promises
const path = require("path")
const db = require("../../config/db")

async function loadSqlFile(fileName){
    const filePath = path.join(__dirname, "..", "..", "config", "scripts", "inventory", fileName)
    return fs.readFile(filePath, "utf8")
}

async function generateItemId() {
    try{
        const sql = await loadSqlFile("grab_itemId.sql")
        const result = await db.query(sql)
        let nextNum = 1
        if(result.rows.length > 0){
            const lastId = result.rows[0].item_id
            const lastNum = parseInt(lastId.substring(1))
            nextNum = lastNum + 1
        }
        const paddedNum = nextNum.toString().padStart(8, "0")
        return `I${paddedNum}`
    } catch(err){
        console.error("Error generating item ID: ", err)
    }
}

async function addNewItem(itemType, itemName, itemPngName, itemPrice){
    const itemId = await generateItemId()
    const sql = await loadSqlFile("add_new_item.sql")
    await db.query(sql, [itemId, itemType, itemName, itemPngName, itemPrice])
    return itemId
}

module.exports = {
    addNewItem
}