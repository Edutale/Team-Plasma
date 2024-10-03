const express = require('express');
const router = express.Router();
const{
    getStudentSkills, getStudentQuests
} = require('../javascript/students/getOperations');
const{
    updateSkillProficiency,
} = require('../javascript/students/putOperations');
const{
    deleteStudentQuest,
} = require('../javascript/students/deleteOperations');
const{
    addNewStudent, addStudentQuest,
} = require('../javascript/students/postOperations');

// Get student skills
router.get('/:id/skills', async(req, res)=>{
    try{
        const skills = await getStudentSkills(req.params.id);
        res.json(skills);
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

// Get student quests
router.get('/:id/quests', async(req, res)=>{
    try{
        const studentQuests = await getStudentQuests(req.params.id);    
        res.json(studentQuests);
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

// update skill proficiency
router.put('/:id/skills/:skillId', async(req, res)=>{
    try{
        await updateSkillProficiency(req.params.id, req.params.skillId, req.body.proficiency);
        res.json({message: 'Skill proficiency updated successfully'});
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

// delete quest from student questlogs
router.delete('/:id/quests/:questId', async(req, res)=>{
    try{
        await deleteStudentQuest(req.params.id, req.params.questId);
        res.json({message: 'Student Quest removed successfully'});
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

// add new student
router.post('/', async(req, res)=>{
    try{
        const {studentId, studentName, studentEmail} = req.body;
        await addNewStudent(studentId, studentName, studentEmail);
        res.status(201).json({message: 'Student added successfully'});
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

// add new quest for student
router.post('/:id/quests', async(req, res)=>{
    try{
        const {questId, currStatus} = req.body;
        await addStudentQuest(req.params.id, questId, currStatus);
        res.status(201).json({message: 'Quest added successfully for student'});
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;