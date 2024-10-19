const express = require('express')
const router = express.Router()
const {
    getCareerQuestList
} = require("../javascript/careers/getOperations")

// get all skills and corresponding quests given a career
router.get("/:id/quests", async(req, res) => {
    try {
        const quests = await getCareerQuestList(req.params.id)
        res.json(quests)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router