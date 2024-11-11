-- gets the details and stuff of a resource
select resource_id, resource_name, resource_link, resource_description, resource_type
from Resources
where resource_id = $1;