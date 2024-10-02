-- get all skills of student
select ss.skill_id, s.Skill_Name, s.Skill_Description, ss.Proficiency_Level
from Student_Skill ss, Skill s
where ss.skill_id = s.SKILL_ID
and ss.student_id = $1;