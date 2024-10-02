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
    const studentSkills = await getStudentSkills(req.params.id);
    res.json(studentSkills);
})

// Get student quests
router.get('/:id/quests', async(req, res)=>{
    const studentQuests = await getStudentQuests(req.params.id);
    res.json(studentQuests);
})

// update skill proficiency
router.put('/:id/skills/:skillId', async(req, res)=>{
    await updateSkillProficiency(req.params.id, req.params.skillId, req.body.proficiency);
    res.json({message: 'Skill proficiency updated successfully'});
});

// delete quest from student questlogs
router.delete('/:id/quests/:questId', async(req, res)=>{
    await deleteStudentQuest(req.params.id, req.params.questId);
    res.json({message: 'Student Quest removed successfully'});
});

// add new student
router.post('/', async(req, res)=>{
    const {studentId, studentName, studentEmail} = req.body;
    await addNewStudent(studentId, studentName, studentEmail);
    res.status(201).json({message: 'Student added successfully'});
});

// add new quest for student
router.post('/:id/quests', async(req, res)=>{
    const {questId, currStatus} = req.body;
    await addStudentQuest(req.params.id, questId, currStatus);
    res.status(201).json({message: 'Quest added successfully for student'});
});

module.exports = router;