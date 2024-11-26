const express = require("express")
const router = express.Router()
const {
    getAllSkills
} = require("../javascript/skills/skillsGet")
const {
    addNewSkill
} = require("../javascript/skills/skillsPost")
const {
    updateSkill
} = require("../javascript/skills/skillsPut")
const {
    deleteSkill
} = require("../javascript/skills/skillsDelete")

// Get all skills from the database, will make some sort of filtering down the line
router.get("/", async(req, res) => {
    try{
        const skills = await getAllSkills()
        res.json(skills)
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

// Add new skill
router.post("/", async(req, res) => {
    try {
        const { skillName, skillDescription } = req.body
        if (!skillName || !skillDescription) {
            return res.status(400).json({error: "Missing required fields"})
        }
        const skillId = await addNewSkill(skillName, skillDescription)
        res.status(201).json({
            message: "Skill added successfully",
            skillId: skillId
        })
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

// Update a currently existing skill
router.put("/:id", async(req, res) => {
    try {
        const { skillName, skillDescription} = req.body
        await updateSkill(req.params.id, skillName, skillDescription)
        res.status(200).json({message: "Skill updated successfully"})
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

// Delete a skill
router.delete("/:id", async(req, res) => {
    try {
        await deleteSkill(req.params.id)
        res.status(200).json({message: "Skill deleted successfully"})
    }
    catch(err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router