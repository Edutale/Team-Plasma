-- Adds a new resource to a quest
insert into Quest_Resources(quest_id, resource_id)
values($1, $2);