-- used for generating a very simple ID
select resource_id
from Resources
where resource_id like 'RES%'
order by resource_id desc limit 1;