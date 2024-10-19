-- Create/add a new quest
insert into Quest(quest_id, quest_name, quest_description)
values($1, $2, $3);