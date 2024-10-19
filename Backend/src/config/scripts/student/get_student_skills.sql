-- get all skills of student
select ss.skill_id, s.skill_name, s.dkill_description, ss.skill_xp
from Student_Skill ss, Skill s
where ss.skill_id = s.SKILL_ID
and ss.student_id = $1;