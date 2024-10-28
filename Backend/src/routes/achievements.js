const express = require('express')
const router = express.Router()
const{
    getAllAchievements, getStudentAchievements, 
    getStudentAchievementProgress, getStudentAchievementTypeProgress,
    checkNewAchievement
} = require("../javascript/achievements/achievementsGet")

const{
    updateStudentAchievementProgress
} = require("../javascript/achievements/achievementPut")

// Get all achievements in the system
router.get("/", async(req, res)=>{
    try{
        const achievements = await getAllAchievements()
        res.json(achievements)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Get all completed achievements for a student
router.get("/student/:id", async(req, res)=>{
    try{
        const achievements = await getStudentAchievements(req.params.id)
        res.json(achievements)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Get progress of all achievements for a student
router.get("/student/:id/progress", async(req, res)=>{
    try{
        const progress = await getStudentAchievementProgress(req.params.id)
        res.json(progress)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Get progress of achievements of a specific type for a student
router.get("/student/:id/progress/:type", async(req, res)=>{
    try{
        const progress = await getStudentAchievementTypeProgress(req.params.id, req.params.type)
        res.json(progress)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Check if student has earned any new achievements of a specific type
router.get("/student/:id/check/:type", async(req, res)=>{
    try{
        const newAchievements = await checkNewAchievement(req.params.id, req.params.type, req.query.count)
        res.json(newAchievements)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Update achievement progress for a student
router.put("/student/:id/progress/:achievementId", async(req, res)=>{
    try{
        await updateStudentAchievementProgress(req.params.id, req.params.achievementId, req.body.progressCount)
        res.status(200).json({message: 'Achievement progress updated successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router

