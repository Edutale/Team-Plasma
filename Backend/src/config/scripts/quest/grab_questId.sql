-- Grabs the latest questID so we can just do this orderly :)
select quest_id 
from Quest 
where quest_id like 'Q%' 
order by quest_id desc limit 1;