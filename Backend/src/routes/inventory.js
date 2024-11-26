const express = require("express")
const router = express.Router()
const {
    getInventory,
    getItemDetails
} = require("../javascript/inventory/inventoryGet")
const {
    deleteItem
} = require("../javascript/inventory/inventoryDelete")
const {
    updateItem
} = require("../javascript/inventory/inventoryPut")
const {
    addNewItem
} = require("../javascript/inventory/inventoryPost")

// get entire inventory catalog
router.get("/inventory", async(req, res) => {
    try {
        const inventory = await getInventory()
        res.json(inventory)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

// Get specific item details
router.get("/inventory/:id", async(req, res) => {
    try {
        const item = await getItemDetails(req.params.id)
        if (!item) {
            return res.status(404).json({error: "Item not found"})
        }
        res.json(item)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

// Add new item
router.post("/inventory", async(req, res) => {
    try {
        const {itemType, itemName, itemPngName, itemPrice} = req.body
        
        // Validate required fields
        if (!itemType || !itemName || !itemPngName || !itemPrice) {
            return res.status(400).json({error: "Missing required fields"})
        }
        
        // Validate item type
        if (!["A", "W", "F"].includes(itemType)) {
            return res.status(400).json({error: "Invalid item type"})
        }

        // Validate item price
        if (isNaN(itemPrice) || itemPrice < 0) {
            return res.status(400).json({error: "Invalid item price"})
        }

        const itemId = await addNewItem(itemType, itemName, itemPngName, itemPrice)
        res.status(201).json({
            message: "Item added successfully",
            itemId: itemId
        })
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

// Update item
router.put("/inventory/:id", async(req, res) => {
    try {
        const {itemType, itemName, itemPngName, itemPrice} = req.body
        
        // Check if at least one field is provided
        if (!itemType && !itemName && !itemPngName && itemPrice === undefined) {
            return res.status(400).json({error: "At least one field must be provided for update"})
        }
        
        // Validate item type if provided
        if (itemType && !["A", "W", "F"].includes(itemType)) {
            return res.status(400).json({error: "Invalid item type"})
        }

        // Validate item price if provided
        if (itemPrice !== undefined && (isNaN(itemPrice) || itemPrice < 0)) {
            return res.status(400).json({error: "Invalid item price"})
        }

        await updateItem(req.params.id, itemType || null, itemName || null, itemPngName || null, itemPrice || null)
        res.status(200).json({message: "Item updated successfully"})
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

// Delete item
router.delete("/inventory/:id", async(req, res) => {
    try {
        await deleteItem(req.params.id)
        res.status(200).json({message: "Item deleted successfully"})
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router