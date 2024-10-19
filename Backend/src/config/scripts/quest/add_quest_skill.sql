-- Add/Associate a skill with a quest
insert into Skill_Quest(quest_id, skill_id)
values($1, $2);