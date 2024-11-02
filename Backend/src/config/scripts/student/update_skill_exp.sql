-- updates the student's skill XP
update Student_Skill
set skill_exp = $3
where student_id = $1 and skill_id = $2;