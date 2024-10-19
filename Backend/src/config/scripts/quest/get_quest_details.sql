-- Get detailed information about a specific quest
select q.quest_id, q.quest_name, q.quest_description,
    array_agg(distinct s.skill_name) as skills,
    array_agg(distinct r.resource_name) as resources
from quest q
left join Skill_Quest sq on q.QUEST_ID = sq.quest_id
left join Skill s on sq.skill_id = s.SKILL_ID
left join Quest_Resources qr on q.QUEST_ID = qr.quest_id
left join Resources r on qr.resource_id = r.RESOURCE_ID
where q.QUEST_ID = $1
group by q.QUEST_ID, q.quest_name, q.quest_description;