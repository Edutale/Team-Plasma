-- Get skills associated with a quest
select s.skill_id, s.skill_name, s.skill_description
from Skill s
join Skill_Quest sq on s.SKILL_ID = sq.skill_id
where sq.quest_id = $1;