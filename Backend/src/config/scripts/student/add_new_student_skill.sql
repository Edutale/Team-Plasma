-- adds a new skill to a student's skill set
insert into Student_Skill(student_id, skill_id, skill_exp)
values ($1, $2, $3);