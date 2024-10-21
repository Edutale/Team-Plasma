-- given a career, returns all skills and all quests for each skill.
-- also returns all resources associated with each skill. For use
-- in the Skill List page.
select q.quest_id, s.skill_name, q.quest_name, q.quest_description,
       r.resource_id, r.resource_name, r.resource_link, r.resource_description
from Quest q, Skill s, Skill_Quest sq, Career_Skill cs, Resources r, Quest_Resources qr
where q.quest_id = sq.quest_id
      and sq.skill_id = s.skill_id
      and sq.skill_id = cs.skill_id
      and q.quest_id = qr.quest_id
      and r.resource_id = qr.resource_id
      and cs.career_id = $1;