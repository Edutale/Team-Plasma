const express = require('express')
const router = express.Router()
const{
    getStudentSkills, getStudentQuests, getStudentJoinDate
} = require('../javascript/students/studentsGet')
const{
    updateSkillXP,
} = require('../javascript/students/studentsPut')
const{
    deleteStudentQuest,
} = require('../javascript/students/studentsDelete')
const{
    addNewStudent, addStudentQuest, addNewStudentSkill,
} = require('../javascript/students/studentsPost')

// Get student skills
router.get('/:id/skills', async(req, res)=>{
    try{
        const skills = await getStudentSkills(req.params.id)
        res.json(skills)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Get student quests
router.get('/:id/quests', async(req, res)=>{
    try{
        const studentQuests = await getStudentQuests(req.params.id)    
        res.json(studentQuests)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Get student join date
router.get('/:id', async(req, res)=>{
    try{
        const joindate = await getStudentJoinDate(req.params.id)
        res.json(joindate)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// update skill XP
router.put('/:id/skills/:skillId', async(req, res)=>{
    try{
        await updateSkillXP(req.params.id, req.params.skillId, req.body.xp)
        res.status(200).json({message: 'Skill XP updated successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// delete quest from student questlogs
router.delete('/:id/quests/:questId', async(req, res)=>{
    try{
        await deleteStudentQuest(req.params.id, req.params.questId)
        res.status(204).json({message: 'Student Quest removed successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// add new student
router.post('/', async(req, res)=>{
    try{
        const {studentId, studentName, studentEmail} = req.body
        await addNewStudent(studentId, studentName, studentEmail)
        res.status(201).json({message: 'Student added successfully'})
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

// add new quest for student
router.post('/:id/quests', async(req, res)=>{
    console.log('Received request to add quest for student. Student ID:', req.params.id)
    try{
        const {questId, currStatus} = req.body
        await addStudentQuest(req.params.id, questId, currStatus)
        console.log('Quest added successfully for student')
        res.status(201).json({message: 'Quest added successfully for student'})
    } catch(err){
        console.error('Error adding quest for student:', err)
        res.status(500).json({message: err.message})
    }
})

router.post('/:id/skills', async(req, res)=>{
    try{
        const {skillId, skillXP} = req.body
        await addNewStudentSkill(req.params.id, skillId, skillXP)
        res.status(201).json({message: 'New skill added to student skillset successfully'})
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router