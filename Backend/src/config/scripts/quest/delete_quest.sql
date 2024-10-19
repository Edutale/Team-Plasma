-- Delete a quest from the database
delete from Quest
where quest_id = $1;