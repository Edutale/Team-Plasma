const express = require('express')
const router = express.Router()
const {
    getQuestResources, getAllQuests, getQuestSkills, getQuestDetails
} = require("../javascript/quests/questsGet")
const{
    addNewQuest, addQuestResource, addQuestSkill
} = require("../javascript/quests/questsPost")
const{
    deleteQuest, deleteQuestSkill, deleteQuestResource
} = require("../javascript/quests/questsDelete")
const{
    updateQuest
} = require("../javascript/quests/questsPut")

// get all resources corresponding to a quest.
router.get("/:id/resources", async(req, res) => {
    try {
        const quests = await getQuestResources(req.params.id)
        res.json(quests)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

// get all quests
router.get("/", async(req, res)=>{
    try{
        const quests = await getAllQuests()
        res.json(quests)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// get the skills associated with a quest -- we should also make one vice versa where we get all the quests associated with a skill
router.get("/:id/skills", async(req, res)=>{
    try{
        const skills = await getQuestSkills(req.params.id)
        res.json(skills)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// get detailed information of a quest
router.get("/:id", async(req, res)=>{
    try{
        const questDetails = await getQuestDetails(req.params.id)
        res.json(questDetails)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Adds/creates a new quest
router.post("/", async(req, res)=>{
    try{
        const {questId, questName, questDescription} = req.body
        await addNewQuest(questId, questName, questDescription)
        res.status(201).json({message: 'Quest added successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Add a resource to a quest
router.post("/:id/resources", async(req, res)=>{
    try{
        const {resourceId} = req.body
        await addQuestResource(req.params.id, resourceId)
        res.status(201).json({message: 'Resource added to quest successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Add a skill to a quest -- don't need a vice versa vers of this
router.post("/:id/skills", async(req, res)=>{
    try{
        const {skillId} = req.body
        await addQuestSkill(req.params.id, skillId)
        res.status(201).json({message: 'Skill added to quest successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Delete a quest from existence
router.delete("/:id", async(req, res)=>{
    try{
        await deleteQuest(req.params.id)
        res.status(200).json({message: 'Quest deleted successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Remove the attachment of a skill from a quest
router.delete("/:id/skills/:skillId", async(req, res)=>{
    try{
        await deleteQuestSkill(req.params.id, req.params.skillId)
        res.status(200).json({message: 'Skill removed from quest successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Remove the attachment of a resource from a quest
router.delete("/:id/resources/:resourceId", async(req, res)=>{
    try{
        await deleteQuestResource(reqs.params.id, req.params.resourceId)
        res.status(200).json({message: 'Resource removed from quest successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Update the basic information of a quest -- name and descript
router.put("/:id", async(req, res)=>{
    try{
        const {questName, questDescription} = req.body
        await updateQuest(req.params.id, questName, questDescription)
        res.status(200).json({message: 'Quest updated successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})


module.exports = router