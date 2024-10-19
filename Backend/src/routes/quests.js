const express = require('express')
const router = express.Router()
const {
    getQuestResources
} = require("../javascript/quests/getOperations")

// get all resources corresponding to a quest.
router.get("/:id/resources", async(req, res) => {
    try {
        const quests = await getQuestResources(req.params.id)
        res.json(quests)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router