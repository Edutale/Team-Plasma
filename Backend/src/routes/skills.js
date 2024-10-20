const express = require('express')
const router = express.Router()
const {
    getAllSkills
} = require("../javascript/skills/skillsGet")

// Get all skills from the database, will make some sort of filtering down the line
router.get("/", async(req, res)=>{
    try{
        const skills = await getAllSkills()
        res.json(skills)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router