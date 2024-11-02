-- Create/add a new quest
insert into Quest(quest_id, quest_name, quest_description, is_project, quest_difficulty, exp_reward, money_reward)
values  ($1, $2, $3, $4, $5, coalesce($6, 100), coalesce($7, 50));