-- Create/add a new quest
insert into Quest(quest_id, quest_name, quest_description, is_project, quest_difficulty)
values  ($1, $2, $3, $4, $5);