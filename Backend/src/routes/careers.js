const express = require("express")
const router = express.Router()
const {
    getCareerQuestList, getCareerSkills
} = require("../javascript/careers/careersGet")

// get all quests and corresponding skills given a career
router.get("/:id/quests", async(req, res) => {
    try {
        const quests = await getCareerQuestList(req.params.id)
        res.json(quests)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

// get all skills for a given career
router.get("/:id/skills", async(req, res) => {
    try {
        const quests = await getCareerSkills(req.params.id)
        res.json(quests)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router