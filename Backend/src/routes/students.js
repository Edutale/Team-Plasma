const express = require('express')
const router = express.Router()
const{
    getStudentSkills, getStudentQuests, getStudentJoinDate,
    getStudentCareer, getStudentCheckedDays, getStudentLevelAndEXP,
    getStudentInventory, getStudentMoney
} = require('../javascript/students/studentsGet')
const{
    updateSkillEXP, checkInSubmit, buyItem
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
router.get('/:id/joindate', async(req, res)=>{
    try{
        const joindate = await getStudentJoinDate(req.params.id)
        res.json(joindate)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Get student career
router.get('/:id/career', async(req, res)=>{
    try{
        const stuCareer = await getStudentCareer(req.params.id)
        res.json(stuCareer)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

//get student checked in days
router.get('/:id/checkin', async(req, res)=>{
    try{
        const checkInDays = await getStudentCheckedDays(req.params.id)
        res.json(checkInDays)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

//get student level and EXP
router.get('/:id/progress', async(req, res)=>{
    try{
        const progress = await getStudentLevelAndEXP(req.params.id)
        res.json(progress)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

//get student's owned inventory items
router.get('/:id/inventory', async(req, res)=>{
    try{
        const inventory = await getStudentInventory(req.params.id)
        res.json(inventory)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

//get student's money
router.get('/:id/money', async(req, res)=>{
    try{
        const inventory = await getStudentMoney(req.params.id)
        res.json(inventory)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})


// update skill EXP
router.put('/:id/skills/:skillId', async(req, res)=>{
    try{
        await updateSkillEXP(req.params.id, req.params.skillId, req.body.exp)
        res.status(200).json({message: 'Skill EXP updated successfully'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// submitting a check in form
router.put('/:id/check-in-complete', async(req, res)=>{
    try{
        await checkInSubmit(req.params.id, req.body.totalExp, req.body.netExp, req.body.stuLvl,
            req.body.completedQuests, req.body.numCompleted, req.body.mins, req.body.netMoney)
        res.status(200).json({message: 'Check-in successfully recorded'})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// updating student money and student inventory after purchasing item
router.put('/:id/buy-item', async(req, res)=>{
    try{
        await buyItem(req.body.studentId, req.body.itemId, req.body.itemPrice, req.body.moneyAmt)
        res.status(200).json({message: 'Item purchased successfully'})
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

// add new student skill
router.post('/:id/skills', async(req, res)=>{
    try{
        const {skillId, skillEXP} = req.body
        await addNewStudentSkill(req.params.id, skillId, skillEXP)
        res.status(201).json({message: 'New skill added to student skillset successfully'})
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router