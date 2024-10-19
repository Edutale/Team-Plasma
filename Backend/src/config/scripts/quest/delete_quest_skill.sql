-- Removes a skill association from a quest
delete from Skill_Quest
where quest_id = $1
and skill_id = $2;