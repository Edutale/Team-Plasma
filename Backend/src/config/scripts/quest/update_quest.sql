-- Update quest information, included name but will probably just usually be description that gets updated
update Quest
set quest_name = $1, quest_description = $2
where quest_id = $3;