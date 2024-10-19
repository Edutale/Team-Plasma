-- gets the list of quests for a given career, and their skill.
select s.skill_name, q.quest_name, q.quest_description
from Quest q, Skill s, Skill_Quest sq, Career_Skill cs
where q.quest_id = sq.quest_id
      and sq.skill_id = s.skill_id
      and sq.skill_id = cs.skill_id
      and cs.career_id = $1;