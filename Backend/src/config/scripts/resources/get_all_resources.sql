-- gets all resources currently available
-- NOT MEANT FOR USE OUTSIDE OF TESTING ATM bc gonna need to make a filtering system at one point :)
select resource_id, resource_name, resource_description, resource_link
from Resources
order by resource_name;