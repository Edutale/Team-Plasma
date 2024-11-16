-- gets all quests currently available
-- NOT MEANT FOR USE OUTSIDE OF TESTING ATM bc gonna need to make a filtering system at one point :)
select quest_id, quest_name, quest_description, quest_difficulty
from quest
order by quest_name;