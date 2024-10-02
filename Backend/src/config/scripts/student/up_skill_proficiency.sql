-- updates the student's skill proficiency
update Student_Skill
set Proficiency_Level = $3
where student_id = $1 and skill_id = $2;