const express = require('express')
const router = express.Router()
const {
    getInventory
} = require("../javascript/inventory/inventoryGet")

// get entire inventory catalog
router.get("/inventory", async(req, res) => {
    try {
        const inventory = await getInventory()
        res.json(inventory)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router