-- gets all skills currently available
-- NOT MEANT FOR USE OUTSIDE OF TESTING ATM bc gonna need to make a filtering system at one point :)
select skill_id, skill_name, skill_description
from Skill
order by skill_name;