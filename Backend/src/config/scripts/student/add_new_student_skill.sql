-- adds a new skill to a student's skill set
insert into Student_Skill(student_id, skill_id, Proficiency_Level)
values ($1, $2, coalesce($3, 0.0));