-- Gets all the achievements currently implemented
select *
from Achievement
order by achievement_type, requirement_count;