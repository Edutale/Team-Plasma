-- get the skills associated with a career
select s.skill_name
from Skill s, Career c, Career_Skill cs
where c.career_id = $1
      and c.career_id = cs.career_id
      and s.skill_id = cs.skill_id;